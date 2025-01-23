import {Component, HostListener, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, PageEvent} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {AddUserPendingTimesheetDialogComponent} from './add-user-pending-timesheet-dialog/add-user-pending-timesheet-dialog.component';
import {UserPendingTimesheet} from './user-pending-timesheet.model';
import {AdminAPI} from '../../../../../../utility/constants/api';
import * as moment from 'moment';
import {CommonFunctions, convertURLParamToDecode} from '../../../../../../utility/common-functions';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {BASE, pendingTimesheetStage} from '../../../../../../utility/constants/base-constants';
import {AdminUser, Privilege} from '../../../../../../utility/shared-model/admin-user.model';
import {ApproveMissTimesheetDialogComponent} from '../user-pending-timesheet-approved/approve-miss-timesheet-dialog/approve-miss-timesheet-dialog.component';
import {ADMINTABACCESS} from '../../../../../../utility/constants/header-constant';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';


@Component({
  selector: 'app-user-pending-timesheet',
  templateUrl: './user-pending-timesheet.component.html',
  styleUrls: ['./user-pending-timesheet.component.scss']
})
export class UserPendingTimesheetComponent implements OnInit {

  // Form Variables
  filterForm: FormGroup;
  advancefilterForm: FormGroup;

  url = BASE.IMAGE_PATH;
  stageList = pendingTimesheetStage;
  // Data Variables
  pendingTimesheetList: UserPendingTimesheet[] = [];
  userList: AdminUser[] = [];
  tagList: any[] = [];

  equalJSON = {};
  toDate = null;
  fromDate = null;
  monthYear = null;

  // MatPaginator Inputs
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

  ASRID = ADMINTABACCESS.ATTENDANCESUMMARYREPORT;
  ASRData: Privilege | any[];

  // get form control
  get userId(): AbstractControl {
    return this.filterForm.get('user_id');
  }

  get fromDatefield(): AbstractControl {
    return this.filterForm.get('from_date');
  }

  get toDatefield(): AbstractControl {
    return this.filterForm.get('to_date');
  }

  get stageId(): AbstractControl {
    return this.filterForm.get('stage_id');
  }

  constructor(private _fb: FormBuilder, public _router: Router, public route: ActivatedRoute, public dialog: MatDialog, private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.PTAData = this._sharedService.checkUserPrivilegesTabs(this.PTAID);
    this.ASRData = this._sharedService.checkUserPrivilegesTabs(this.ASRID);

    this.route.queryParams
      .subscribe(params => {
        const dataItem = convertURLParamToDecode(params);
        if (dataItem) {
          this.monthYear = (dataItem['month_year']) ? dataItem['month_year'] : new Date();
          const date = new Date(this.monthYear);
          this.fromDate = new Date(date.getFullYear(), date.getMonth(), 1);
          this.toDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

          if (dataItem['stage_id']) {
            this.equalJSON['stage_id'] = Number(dataItem['stage_id']);
          }

          if (dataItem['id']) {
            this.equalJSON['id'] = Number(dataItem['id']);
          }
        }
      });

    this.initializationMethod();
    this.createUserPendingTimesheetForm();
  }


  // Initialization Methods
  initializationMethod() {
    this.getPendingTimesheetList(1, 'id', 'desc');
  }

  getPendingTimesheetList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.PENDINGTIMESHEET_LISTING, this.getQueryParams(pageNumber, key, val),
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

    if (this.toDate) {
      filter['lessthanequal'] = {};
      filter['lessthanequal']['date'] = moment(this.toDate).format('YYYY-MM-DD');
    }

    if (this.fromDate) {
      filter['greaterthanequal'] = {};
      filter['greaterthanequal']['date'] = moment(this.fromDate).format('YYYY-MM-DD');
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
    this.pendingTimesheetList = response.payload.data;
    this.userList = response.payload.userlist;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Create Advance Filter
   */
  createUserPendingTimesheetForm() {
    this.filterForm = this._fb.group({
      id: new FormControl((this.equalJSON['id']) ? this.equalJSON['id'] : null),
      user_id: new FormControl(null),
      stage_id: new FormControl((this.equalJSON['stage_id']) ? this.equalJSON['stage_id'] : null),
      from_date: new FormControl(this.fromDate),
      to_date: new FormControl(this.toDate)
    });

    this.advancefilterForm = this._fb.group({
      id: new FormControl((this.equalJSON['id']) ? this.equalJSON['id'] : null),
      user_id: new FormControl(null),
      stage_id: new FormControl((this.equalJSON['stage_id']) ? this.equalJSON['stage_id'] : null),
      from_date: new FormControl(this.fromDate),
      to_date: new FormControl(this.toDate)
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
            this.advancefilterForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }

    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'id' || key === 'user_id' || key === 'stage_id') {
            this.equalJSON[key] = form.value[key];
          }

          if (form.value['from_date'] !== '' && form.value['from_date']) {
            this.fromDate = form.value['from_date'];
            delete form.value['from_date'];
          }

          if (form.value['to_date'] !== '' && form.value['to_date']) {
            this.toDate = form.value['to_date'];
            delete form.value['to_date'];
          }
        }
      }
      this.isOpenFilter = false;
      this.getPendingTimesheetList(1, 'id', 'desc');
    }
  }

  /**
   * change InOutTime direction
   */

  onOpenApproveCommentDialog(pendingtimesheetDetail: UserPendingTimesheet) {
    const dialogRef = this.dialog.open(ApproveMissTimesheetDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        UserPendingTimesheetData: (pendingtimesheetDetail) ? pendingtimesheetDetail : null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.equalJSON = {};
      this.getPendingTimesheetList(1, this.sortBy, this.sortOrder);
    });
  }

  /**
   * change InOutTime direction
   */

  onOpenAddtimesheetDialog(pendingtimesheetDetail: UserPendingTimesheet) {
    const dialogRef = this.dialog.open(AddUserPendingTimesheetDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        UserPendingTimesheetData: (pendingtimesheetDetail) ? pendingtimesheetDetail : null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.createUserPendingTimesheetForm();
      this.equalJSON = {};
      this.getPendingTimesheetList(1, this.sortBy, this.sortOrder);
    });
  }

  // Events
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

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getPendingTimesheetList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  deleteMsg(index) {
    this.tagList.splice(index, 1);
  }

  onClearTags() {
    this.tagList = [];
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
      case 'attendancesummary':
        this._router.navigate(['/' + AdminRoutes.ATTENDANCE_SUMMARY]);
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
    this.createUserPendingTimesheetForm();
    this.equalJSON = {};
    this.fromDate = null;
    this.toDate = null;
    this.isOpenFilter = false;
    this.getPendingTimesheetList(1, this.sortBy, this.sortOrder);
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advancefilterForm.get(elementName).setValue(null);
    if (elementName === 'user_id' || elementName === 'stage_id' || elementName === 'id') {
      delete this.equalJSON[elementName];
    }

    if (elementName === 'from_date') {
      this.fromDate = null;
    }

    if (elementName === 'to_date') {
      this.toDate = null;
    }

    this.getPendingTimesheetList(1, this.sortBy, this.sortOrder);
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
          'stage_id': (form.value['stage_id']) ? form.value['stage_id'] : null,
          'from_date': form.value['from_date'],
          'to_date': form.value['to_date']
        });
      this.setAdvanceFilter(form, false);
    }
  }

  /**
   *  Return pending timesheet stage
   * @param stageId
   */
  getStageName(stageId: number): string {
    const val = this.stageList.filter(elem => elem.key === stageId);
    return (val.length) ? val[0].label : '';
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.PENDINGTIMESHEET_LISTING, params, this.getSearchParam(), 'Pending timesheet - ', 0).subscribe(response => {
    });
  }
}
