import {Component, HostListener, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {AttendanceSummaryReport} from './attendance-summary-report.model';
import {AdminUser, Privilege} from '../../../../../../utility/shared-model/admin-user.model';
import {Shift} from '../../shift-list/shift-list.model';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import * as moment from 'moment';
import {CommonFunctions, convertURLParamToEncode} from '../../../../../../utility/common-functions';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {LeaveAllowFor} from '../../../../../../utility/constants/base-constants';
import {ADMINTABACCESS} from '../../../../../../utility/constants/header-constant';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {LeaveAdjustDialogComponent} from './leave-adjust-dialog/leave-adjust-dialog.component';
import {UploadAdjustmentDialogComponent} from "./upload-adjustment-dialog/upload-adjustment-dialog.component";

@Component({
  selector: 'app-attendance-summary-report',
  templateUrl: './attendance-summary-report.component.html',
  styleUrls: ['./attendance-summary-report.component.scss']
})
export class AttendanceSummaryReportComponent implements OnInit {

  attendanceSummaryReportList: AttendanceSummaryReport[] = [];
  userList: AdminUser[];
  shiftList: Shift[] = [];
  monthList = LeaveAllowFor;
  toDay = new Date();
  yearList = [];
  // Form Variables
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  equalJSON = {};
  toDate = null;
  fromDate = null;
  monthYear = null;
  currentMonth = '';
  currentYear = '';
  defaultYear = new Date().getFullYear();

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  page: number;
  pageIndex: number;
  totalRecords: number;
  pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilter = false;
  isOpenHistoryDialog = false;

  PTAID = ADMINTABACCESS.PENDINGTIMSHEETAPPROVAL;
  PTAData: Privilege | any[];

  // get form control
  get userId(): AbstractControl {
    return this.filterForm.get('user_id');
  }

  get shiftId(): AbstractControl {
    return this.filterForm.get('shift_id');
  }

  get monthField(): AbstractControl {
    return this.filterForm.get('month');
  }

  get yearField(): AbstractControl {
    return this.filterForm.get('year');
  }

  constructor(private _fb: FormBuilder, public _router: Router, private _commonCrudService: CommonCrudService,public dialog: MatDialog, private _sharedObjService: SharedObjService, private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.getYear();
    this.getShiftlist();
    this.getUserList();
    this.createLateComingExceptionForm();
    this.setAdvanceFilter(this.filterForm);
    this.PTAData = this._sharedService.checkUserPrivilegesTabs(this.PTAID);
  }

  getAttendanceSummaryReport(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.ATTENDANCE_SUMMARY_REPORT_LISTING, this.getQueryParams(pageNumber, key, val),
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

    if (this.monthYear) {
      params['dateformat'] = {};
      params['dateformat']['yearmonth'] = {};
      params['dateformat']['yearmonth']['date'] = moment(this.monthYear).format('YYYY-MM');
    }

    if (Object.keys(this.equalJSON).length || !CommonFunctions.isEmpty(filter)) {
      params['compare'] = filter;
    }
    return params;
  }

  /**
   * Handle Attendance summary list Response
   * @param response
   */
  handleResponse(response: any) {
    this.attendanceSummaryReportList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  getShiftlist() {
    this._commonCrudService.listData(AdminAPI.SHIFT_LISTING, {'records': 'all'},
      {})
      .subscribe((response) => {
        this.shiftList = response.payload.data;
      });
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {}).subscribe((response) => {
      this.userList = response;
    });
  }

  /**
   * Create Advance Filter
   */
  createLateComingExceptionForm() {
    this.filterForm = this._fb.group({
      user_id: new FormControl(null),
      shift_id: new FormControl(null),
      month: new FormControl(moment(this.toDay).format('M')),
      year: new FormControl(moment(this.toDay).format('YYYY'))
    });
    this.advanceFilterForm = this._fb.group({
      user_id: new FormControl(null),
      shift_id: new FormControl(null),
      month: new FormControl(moment(this.toDay).format('M')),
      year: new FormControl(moment(this.toDay).format('YYYY'))
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
          if (key === 'user_id' || key === 'shift_id') {
            this.equalJSON[key] = form.value[key];
          }

          if (form.value['month'] !== '' && form.value['year']) {
            this.monthYear = form.value['year'] + '-' + form.value['month'];
            delete form.value['month'];
            delete form.value['year'];
          }
        }
      }
      this.isOpenFilter = false;
      this.getAttendanceSummaryReport(1, 'user_id', 'asc');
    }
  }

  // Events
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  onAttendanceSummary(userId: string, createdOn: string, type: string) {
    const yearMonth = moment(createdOn).format('YYYY-MM');
    let jsonData = {};
    // 'remark': '3,4,5',
    if (type === 'leave') {
      jsonData = convertURLParamToEncode({
        'final_remark': '1,3',
        'month_year': yearMonth,
        'user_id': userId,
        'view': 'attendanceSummaryReport'
      });
    }

    if (type === 'holidayworking') {
      jsonData = convertURLParamToEncode({
        'final_remark': '1,2',
        'remark': '1,2',
        'month_year': yearMonth,
        'user_id': userId,
        'view': 'attendanceSummaryReport'
      });
    }
    this._router.navigate(['/' + AdminRoutes.ATTENDANCE_SUMMARY], {queryParams: jsonData});
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

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getAttendanceSummaryReport(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  deleteMsg(index) {
    //this.tagList.splice(index, 1);
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'user_id' || elementName === 'shift_id') {
      delete this.equalJSON[elementName];
    }
    this.getAttendanceSummaryReport(1, this.sortBy, this.sortOrder);
  }

  resetFilterForm() {
    this.createLateComingExceptionForm();
    this.equalJSON = {};
    this.monthYear = moment(this.toDay).format('YYYY-M');
    this.isOpenFilter = false;
    this.getAttendanceSummaryReport(1, this.sortBy, this.sortOrder);
  }

  /**
   * Open quick menu
   * @param menuName
   */
  onOpenQuickMenu(menuName) {
    switch (menuName) {
      case 'pendingtimesheetapproved':
        this._router.navigate(['/' + AdminRoutes.HRMS_USER_PENDING_TIMESHEET_APPROVED]);
        break;
      case 'pendingtimesheet':
        this._router.navigate(['/' + AdminRoutes.HRMS_USER_PENDING_TIMESHEET]);
        break;
      case 'attendancesummary':
        this._router.navigate(['/' + AdminRoutes.ATTENDANCE_SUMMARY]);
        break;
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilter = false;
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
          'user_id': (form.value['user_id']) ? form.value['user_id'] : null,
          'shift_id': (form.value['shift_id']) ? form.value['shift_id'] : null,
          'month': form.value['month'],
          'year': form.value['year']
        });
      this.setAdvanceFilter(form, false);
    }
  }

  getMonth(month: string) {
    const monthVal = moment(month).format('M');
    const val = this.monthList.filter(elem => elem.key === Number(monthVal));
    return (val.length) ? val[0].label : '';
  }

  getYear() {
    const startYear = 2008;
    const diff = this.defaultYear - startYear;
    for (let i = 0; i <= diff; i++) {
      const newYear = startYear + i;
      this.yearList.push({'key': newYear, 'value': newYear});
    }
    // console.log(this.yearList);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.ATTENDANCE_SUMMARY_REPORT_LISTING, params, this.getSearchParam(), 'Attendance summary report - ', 0).subscribe(response => {
    });
  }

  onLeaveAdjustment(attendanceSummaryReportList: AttendanceSummaryReport) {
    const dialogRef = this.dialog.open(LeaveAdjustDialogComponent, {
      width: '30vw',
      data: {
        attendanceSummaryReport: attendanceSummaryReportList
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAttendanceSummaryReport(1);
    });
  }

  /**
   * Upload excel
   * */

  onUploadAdjustList() {
    const dialogRef = this.dialog.open(UploadAdjustmentDialogComponent, {
        panelClass: 'add-form-medium-dialog-container',
        data: {}
      })
    ;

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAttendanceSummaryReport(1, this.sortBy, this.sortOrder);
      }
    });
  }
}
