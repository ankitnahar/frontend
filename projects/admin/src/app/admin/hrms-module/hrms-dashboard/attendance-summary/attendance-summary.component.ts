import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {CommonFunctions, convertURLParamToDecode} from '../../../../../utility/common-functions';
import {MatDialog, PageEvent} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {EarlyLeavingDialogComponent} from './early-leaving-dialog/early-leaving-dialog.component';
import {AttendanceSummary} from './attendance-summary.model';
import {AdminUser, Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import * as moment from 'moment';
import {BASE, hrfinalRemark, hrRemark, hrStatus} from '../../../../../utility/constants/base-constants';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {Shift} from '../shift-list/shift-list.model';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';
import {ConfirmationDialogComponent} from '../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {ExceptionCaseDialogComponent} from './exception-case-dialog/exception-case-dialog.component';
import {FetchInOutDialogComponent} from "./fetch-in-out-dialog/fetch-in-out-dialog.component";

@Component({
  selector: 'app-attendance-summary',
  templateUrl: './attendance-summary.component.html',
  styleUrls: ['./attendance-summary.component.scss']
})

export class AttendanceSummaryComponent implements OnInit {

  attendanceSummaryList: AttendanceSummary[] = [];
  attendanceSummaryData: AttendanceSummary[];
  userData: AdminUser[];
  yearMonth: any[] = [];
  userList: AdminUser[] = [];
  shiftList: Shift[] = [];
  url = BASE.IMAGE_PATH;
  hrRemark = hrRemark;
  hrfinalRemark = hrfinalRemark;
  hrStatus = hrStatus;
  userInfo: AdminUser;

  // State variables
  trIndex = -1;
  PTAID = ADMINTABACCESS.PENDINGTIMSHEETAPPROVAL;
  PTAData: Privilege | any[];

  ASRID = ADMINTABACCESS.ATTENDANCESUMMARYREPORT;
  ASRData: Privilege | any[];
  // Form Variables
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  equalJSON = {};
  inJSON = {};
  notequalJSON = {};
  toDate = null;
  fromDate = null;
  monthYear = null;

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // MatPaginator Inputs
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Mat Paginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilter = false;
  isOpenHistoryDialog = false;
  fetchInOut = false;

  constructor(private _fb: FormBuilder, public _router: Router, public route: ActivatedRoute, public dialog: MatDialog, private _commonCrudService: CommonCrudService, private _sharedService: SharedService, private _sharedObjService: SharedObjService) {
  }

  // get form control
  get userId(): AbstractControl {
    return this.filterForm.get('user_id');
  }

  get shiftId(): AbstractControl {
    return this.filterForm.get('shift_id');
  }

  get fromDatefield(): AbstractControl {
    return this.filterForm.get('from_date');
  }

  get toDatefield(): AbstractControl {
    return this.filterForm.get('to_date');
  }

  get monthYearField(): AbstractControl {
    return this.filterForm.get('month_year');
  }

  get remark(): AbstractControl {
    return this.filterForm.get('remark');
  }

  get status(): AbstractControl {
    return this.filterForm.get('status');
  }

  get final_remark(): AbstractControl {
    return this.filterForm.get('final_remark');
  }

  ngOnInit() {
    this.PTAData = this._sharedService.checkUserPrivilegesTabs(this.PTAID);
    this.ASRData = this._sharedService.checkUserPrivilegesTabs(this.ASRID);
    this.userInfo = this._sharedService.getUser();
    this.fetchInOut = this._sharedService.checkUserPrivileges(this.ASRID, 'otherRights', 'otherRights', 'button_name', 'fetch_inout', 1);

    // console.log(this.userInfo);
    this.route.queryParams
      .subscribe(params => {
        const dataItem = convertURLParamToDecode(params);
        // console.log(dataItem);

        if (dataItem) {
          this.monthYear = (dataItem['month_year']) ? dataItem['month_year'] : null;
          if (dataItem['status']) {
            this.inJSON['status'] = dataItem['status'];
          }
          if ((dataItem['remark'])) {
            this.inJSON['remark'] = dataItem['remark'];
          }
          if (dataItem['final_remark']) {
            this.inJSON['final_remark'] = dataItem['final_remark'];
          }
          if (dataItem['id']) {
            this.equalJSON['id'] = Number(dataItem['id']);
          }
          if (dataItem['view'] === 'attendanceSummaryReport') {
            this.monthYear = (dataItem['month_year']) ? dataItem['month_year'] : null;
            this.inJSON['final_remark'] = dataItem['final_remark'];
            this.inJSON['remark'] = dataItem['remark'];
            this.equalJSON['user_id'] = Number(dataItem['user_id']);
          }
          if (dataItem['view'] === 'myView') {
            this.equalJSON['user_id'] = Number(this.userInfo.id);
          }

          if (dataItem['view'] === 'teamView') {
            this.notequalJSON['user_id'] = Number(this.userInfo.id);
          }
        }
      });

    this.getShiftlist();
    this.monthYearList();
    this.createAttendenceSummaryForm();
    this.setAdvanceFilter(this.filterForm);
    // console.log(this.userInfo);
  }

  getShiftlist() {
    this._commonCrudService.listData(AdminAPI.SHIFT_LISTING, {'records': 'all'},
      {})
      .subscribe((response) => {
        this.shiftList = response.payload.data;
      });
  }

  getAttendanceSummary(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.ATTENDANCE_SUMMARY_LISTING, this.getQueryParams(pageNumber, key, val),
      this.getSearchParam())
      .subscribe((response) => {
        this.handleResponse(response);
      });
  }

  /**
   * get function for returning pageNumber and page size at time of listing api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{}}
   */
  getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    const params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    if (sortKey) {
      params['sortBy'] = sortKey;
    }
    if (sortOrder) {
      params['sortOrder'] = sortOrder;
    }
    return params;
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};
    // check for the object wheather its empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }

    if (Object.keys(this.notequalJSON).length !== 0) {
      filter['notequal'] = this.notequalJSON;
    }
    if (this.toDate) {
      filter['lessthanequal'] = {};
      filter['lessthanequal']['date'] = moment(this.toDate).format('YYYY-MM-DD');
    }

    if (this.fromDate) {
      filter['greaterthanequal'] = {};
      filter['greaterthanequal']['date'] = moment(this.fromDate).format('YYYY-MM-DD');
    }

    if (this.monthYear) {
      params['dateformat'] = {};
      params['dateformat']['yearmonth'] = {};
      params['dateformat']['yearmonth']['date'] = moment(this.monthYear).format('YYYY-MM');
    }

    if (Object.keys(this.equalJSON).length || !CommonFunctions.isEmpty(filter)) {
      params['compare'] = filter;
    }

    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }
    return params;
  }

  /**
   * Handle Attendance summary list Response
   * @param response
   */
  handleResponse(response: any) {
    this.attendanceSummaryList = response.payload.data;
    this.userList = response.payload.userList;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Create Advance Filter
   */
  createAttendenceSummaryForm() {
    this.filterForm = this._fb.group({
      id: new FormControl((this.equalJSON['id']) ? this.equalJSON['id'] : null),
      user_id: new FormControl((this.equalJSON['user_id']) ? this.equalJSON['user_id'] : null),
      shift_id: new FormControl(null),
      from_date: new FormControl(null),
      to_date: new FormControl(null),
      month_year: new FormControl((this.monthYear) ? this.monthYear : this.yearMonth[0]['key']),
      remark: new FormControl((this.inJSON['remark']) ? this.getArrayToString(this.inJSON['remark'], ',') : null),
      status: new FormControl((this.inJSON['status']) ? this.getArrayToString(this.inJSON['status'], ',') : null),
      final_remark: new FormControl((this.inJSON['final_remark']) ? this.getArrayToString(this.inJSON['final_remark'], ',') : null)
    });

    this.advanceFilterForm = this._fb.group({
      id: new FormControl((this.equalJSON['id']) ? this.equalJSON['id'] : null),
      user_id: new FormControl((this.equalJSON['user_id']) ? this.equalJSON['user_id'] : null),
      shift_id: new FormControl(null),
      from_date: new FormControl(null),
      to_date: new FormControl(null),
      month_year: new FormControl((this.monthYear) ? this.monthYear : this.yearMonth[0]['key']),
      remark: new FormControl((this.inJSON['remark']) ? this.inJSON['remark'] : null),
      status: new FormControl((this.inJSON['status']) ? this.inJSON['status'] : null),
      final_remark: new FormControl((this.inJSON['final_remark']) ? this.inJSON['final_remark'] : null)
    });
  }


  /**
   * Early leaving dialog
   */

  onOpenEarlyLeavingDialog(attendanceSummaryDetail?: AttendanceSummary) {
    const dialogRef = this.dialog.open(EarlyLeavingDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        attendanceSummaryData: (attendanceSummaryDetail) ? attendanceSummaryDetail : []
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAttendanceSummary(1);
    });
  }

  onOpenExceptionCaseDialog(attendanceSummaryDetail?: AttendanceSummary) {
    const dialogRef = this.dialog.open(ExceptionCaseDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        attendanceSummaryData: (attendanceSummaryDetail) ? attendanceSummaryDetail : []
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAttendanceSummary(1);
    });
  }

  followUpEmail(attendanceSummaryDetail?: AttendanceSummary) {
    let dialogRef;
    dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to send follow mail?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const formValue = {};
        formValue['reason'] = attendanceSummaryDetail.reason;
        formValue['type'] = attendanceSummaryDetail.status;
        if (attendanceSummaryDetail.status === 3) {
          formValue['approval_email'] = attendanceSummaryDetail.assignee.first_approval.email;
          formValue['approval_name'] = attendanceSummaryDetail.assignee.first_approval.userfullname;
        }
        if (attendanceSummaryDetail.status === 4) {
          formValue['approval_email'] = attendanceSummaryDetail.assignee.second_approval.email;
          formValue['approval_name'] = attendanceSummaryDetail.assignee.second_approval.userfullname;
          formValue['first_approval_comment'] = attendanceSummaryDetail.first_approval.comment;
        }

        this._commonCrudService.addData(AdminAPI.FOLLOWUPEMAIL + attendanceSummaryDetail.id, JSON.stringify(formValue)).subscribe(response => {
          this.getAttendanceSummary(1);
        });
      }
    });
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {};
    // removing empty key from object
    for (const key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
          delete form.value[key];
        } else {
          if (flag) {
            this.advanceFilterForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }

    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'id' || key === 'user_id' || key === 'shift_id') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'status' || key === 'final_remark' || key === 'remark') {
            this.inJSON[key] = form.value[key].join(',');
          }

          if (form.value['from_date'] !== '' && form.value['from_date']) {
            this.fromDate = form.value['from_date'];
            delete form.value['from_date'];
          }

          if (form.value['to_date'] !== '' && form.value['to_date']) {
            this.toDate = form.value['to_date'];
            delete form.value['to_date'];
          }

          if (form.value['month_year'] !== '' && form.value['month_year']) {
            this.monthYear = form.value['month_year'];
            delete form.value['month_year'];
          }
        }
      }
      this.isOpenFilter = false;
      this.getAttendanceSummary(1);
    }
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Toogle Filter
   */
  onOpenFilter() {
    this.isOpenFilter = !this.isOpenFilter;
  }

  /**
   * Close filter
   */
  onCloseFilter() {
    this.isOpenFilter = false;
  }

  onFetchMissingInout() {
    const dialogRef = this.dialog.open(FetchInOutDialogComponent, {
      width: '50vw',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getAttendanceSummary(event.pageIndex + 1);
  }


  /**
   * Expand row table
   * @param i
   */
  openRow(i) {
    this.trIndex = (this.trIndex !== i) ? i : -1;
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'id' || elementName === 'user_id' || elementName === 'shift_id') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'status' || elementName === 'final_remark' || elementName === 'remark') {
      delete this.inJSON[elementName];
    }
    this.getAttendanceSummary(1);
  }

  /**
   * Open quick menu
   * @param menuName
   */
  onOpenQuickMenu(menuName) {
    switch (menuName) {
      case 'pendingtimesheet':
        this._router.navigate(['/' + AdminRoutes.HRMS_USER_PENDING_TIMESHEET]);
        break;
      case 'pendingtimesheetapproved':
        this._router.navigate(['/' + AdminRoutes.HRMS_USER_PENDING_TIMESHEET_APPROVED]);
        break;
      case 'attendancesummaryreport':
        this._router.navigate(['/' + AdminRoutes.HRMS_LATE_ATTENDANCE_SUMMARY_REPORT]);
        break;
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilter = false;
    }
  }

  resetFilterForm() {
    this.equalJSON = {};
    this.inJSON = {};
    this.fromDate = null;
    this.monthYear = this.yearMonth[0]['key'];
    this.toDate = null;
    this.isOpenFilter = false;
    this.createAttendenceSummaryForm();
    this.getAttendanceSummary(1);
  }

  getColor(attendanceSummaryDetail?: AttendanceSummary) {
    if (attendanceSummaryDetail.status === 5 && attendanceSummaryDetail.break_time >= '01:00:00') {
      return 'red-tr';
    } else if (attendanceSummaryDetail.status === 5) {
      return 'turquoise-tr';
    } else if (attendanceSummaryDetail.break_time >= '01:00:00') {
      return 'red-tr';
    } else {
      return null;
    }
  }

  /**
   * Advance Filter Key Up function
   * @param event
   * @param formValue
   * @param {boolean} isValid
   * @param {boolean} flag
   */
  setAdvanceFilterKeyUp(event, form: FormGroup, flag: boolean) {
    let processToReq = false;
    if (flag) {
      processToReq = true;
    } else {
      if (event.keyCode === 13) {
        processToReq = true;
      }
    }
    if (processToReq) {
      this.filterForm.setValue(
        {
          'id': (form.value['id']) ? form.value['id'] : null,
          'user_id': (form.value['user_id']) ? form.value['user_id'] : null,
          'shift_id': (form.value['shift_id']) ? form.value['shift_id'] : null,
          'from_date': form.value['from_date'],
          'to_date': form.value['to_date'],
          'month_year': form.value['month_year'],
          'remark': form.value['remark'],
          'status': form.value['status'],
          'final_remark': form.value['final_remark']
        });
      this.setAdvanceFilter(form, false);
    }
  }

  monthYearList() {
    const date = new Date();
    const itemDate = date.getDate();
    for (let i = 0; i < 2; i++) {
      if (itemDate > 25) {
        const key = moment(date, 'YYYY-MM').subtract(moment.duration(i - 1, 'month')).format('YYYY-MM');
        const label = moment(date, 'YYYY-MM').subtract(moment.duration(i - 1, 'month')).format('MMM-YYYY');
        this.yearMonth.push({'key': key, 'label': label});
      } else {
        const key = moment(date, 'YYYY-MM').subtract(moment.duration(i, 'month')).format('YYYY-MM');
        const label = moment(date, 'YYYY-MM').subtract(moment.duration(i, 'month')).format('MMM-YYYY');
        this.yearMonth.push({'key': key, 'label': label});
      }
    }
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.ATTENDANCE_SUMMARY_LISTING, params, this.getSearchParam(), 'Attendance summary - ', 0).subscribe(response => {
    });
  }

  /**
   * Get array values from string
   * @param {string} value
   * @param {string} seperator
   * @returns {string[]}
   */
  getArrayToString(value: string, seperator: string) {
    if (value) {
      const valueOne = [];
      value.split(seperator).map(item => {
        valueOne.push(Number(item));
      });
      return valueOne;
    }
  }
}
