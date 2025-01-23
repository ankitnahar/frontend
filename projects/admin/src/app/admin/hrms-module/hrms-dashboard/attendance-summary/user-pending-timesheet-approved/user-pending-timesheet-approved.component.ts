import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialog, PageEvent} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {ApproveMissTimesheetDialogComponent} from './approve-miss-timesheet-dialog/approve-miss-timesheet-dialog.component';
import * as moment from 'moment';
import {AdminUser, Privilege} from '../../../../../../utility/shared-model/admin-user.model';
import {BASE, pendingTimesheetStage} from '../../../../../../utility/constants/base-constants';
import {UserPendingTimesheet} from '../user-pending-timesheet/user-pending-timesheet.model';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {CommonFunctions} from '../../../../../../utility/common-functions';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {ADMINTABACCESS} from '../../../../../../utility/constants/header-constant';

@Component({
  selector: 'app-user-pending-timesheet-approved',
  templateUrl: './user-pending-timesheet-approved.component.html',
  styleUrls: ['./user-pending-timesheet-approved.component.scss']
})
export class UserPendingTimesheetApprovedComponent implements OnInit {

  // Form Variables
  filterForm: FormGroup;
  advancefilterForm: FormGroup;

  url = BASE.IMAGE_PATH;
  stageList = pendingTimesheetStage;
  // Data Variables
  pendingTimesheetList: UserPendingTimesheet[] = [];
  userList: AdminUser[] = [];

  equalJSON = {};
  toDate = null;
  fromDate = null;
  inJSON = {'stage_id': '2,3,4'};

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
  userInfo: AdminUser;

  ASRID = ADMINTABACCESS.ATTENDANCESUMMARYREPORT;
  ASRData: Privilege | any[];

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService
  ) {
  }

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

  ngOnInit() {
    this.ASRData = this._sharedService.checkUserPrivilegesTabs(this.ASRID);
    this.userInfo = this._sharedService.getUser();
    this.initializationMethod();
    this.createUserPendingApprovedTimesheetForm();
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
  createUserPendingApprovedTimesheetForm() {
    this.filterForm = this._fb.group({
      user_id: new FormControl(null),
      stage_id: new FormControl(null),
      from_date: new FormControl(null),
      to_date: new FormControl(null)
    });

    this.advancefilterForm = this._fb.group({
      user_id: new FormControl(null),
      stage_id: new FormControl(null),
      from_date: new FormControl(null),
      to_date: new FormControl(null)
    });
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {};
    this.inJSON = {'stage_id': '2,3,4'};
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
          if (key === 'user_id' || key === 'stage_id') {
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
      this.getPendingTimesheetList(1, 'id', 'desc');
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

  }

  onClearTags() {
    // this.pageSize = event.pageSize;
    // this.getPendingTimesheetList(event.pageIndex + 1, this.sortBy, this.sortOrder);
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
    this.createUserPendingApprovedTimesheetForm();
    this.equalJSON = {};
    this.inJSON = {'stage_id': '2,3,4'};
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
    if (elementName === 'user_id' || elementName === 'stage_id') {
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
    this._commonCrudService.downloadExcelData(AdminAPI.PENDINGTIMESHEET_LISTING, params, this.getSearchParam(), 'Pending timesheet approval - ', 0).subscribe(response => {
    });
  }
}
