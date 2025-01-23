import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, PageEvent} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ConfirmationDialogComponent} from '../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {ViewMoreDetailsTimesheetDialogComponent} from './view-more-details-timesheet-dialog/view-more-details-timesheet-dialog.component';
import {Timesheet} from './timesheet.model';
import {BASE, category, GLOBALDATAKEYS, WIPInvoiceBillingStatus} from '../../../../../../utility/constants/base-constants';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import * as moment from 'moment';
import {CommonFunctions, convertURLParamToDecode} from '../../../../../../utility/common-functions';
import {AdminUser, Privilege} from '../../../../../../utility/shared-model/admin-user.model';
import {MasterActivity} from '../hierarchy/master-activity/master-activity.model';
import {TaskList} from '../hierarchy/task-list/task-list.model';
import {Clients} from '../../../../client-module/view-client/view-client.model';
import {Services} from '../../../../../../utility/shared-model/services.model';
import {SubActivity} from '../hierarchy/sub-activity/sub-activity.model';
import {SubClient} from '../sub-client-list/subclient.model';
import {SharedUserService} from '../../../../../../utility/shared-service/shared-user.service';
import {ADMINTABACCESS} from '../../../../../../utility/constants/header-constant';

@Component({
  selector: 'app-todays-timesheet',
  templateUrl: './todays-timesheet.component.html',
  styleUrls: ['./todays-timesheet.component.scss']
})
export class TodaysTimesheetComponent implements OnInit, OnDestroy {
  // Data Variables
  isDeleteItem = false;
  timeSheetList: Timesheet[] = [];
  userList: AdminUser[] = [];
  masterActivityList: MasterActivity[] = [];
  taskList: TaskList[] = [];
  clientList: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  parentClientList: Clients[] = [];
  subActivityList: SubActivity[] = [];
  categoryData = category;
  staffList: AdminUser[] = [];
  tamList: AdminUser[] = [];
  serviceList: Services[] = [];
  subClientList: SubClient[] = [];
  billingStatusList = WIPInvoiceBillingStatus;

  PeriodFromValue = null;
  PeriodToValue = null;
  TimesheetFromValue = null;
  TimesheetToValue = null;

  // Form Variables
  advanceFilterForm: FormGroup;
  filterForm: FormGroup;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // MatPaginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenHistoryDialog = false;
  isOpenFilterView = false;
  isOpenFilter = false;
  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  trIndex = -1;
  userData: AdminUser;
  reviewTimesheetCount = 0;
  worksheetID = 0;
  tabID = ADMINTABACCESS.WORKFLOW_TIMESHEET;
  tabData: Privilege | any[];
  isAddTimesheetButtonRights = false;
  reviewerTimesheetRights = false;

  tabIDWorksheetHierarchy = ADMINTABACCESS.WORKFLOW_MASTERACTIVITY;
  tabIDWorksheetTraining = ADMINTABACCESS.WORKFLOW_WORKSHEETTRAINING;
  tabIDWorksheetSubClientList = ADMINTABACCESS.WORKFLOW_SUBCLIENTLIST;
  tabIDWorksheetReviewerList = ADMINTABACCESS.WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
  tabIDWorksheetPeerReviewerList = ADMINTABACCESS.WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
  tabIDWorksheetMasterChecklist = ADMINTABACCESS.WORKFLOW_MASTERCHECKLIST;
  tabIDWorksheetMultiplueStatusChange = ADMINTABACCESS.WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;

  tabDataWorksheetHierarchy: Privilege | any[];
  tabDataWorksheetTraining: Privilege | any[];
  tabDataWorksheetSubClientList: Privilege | any[];
  tabDataWorksheetReviewerList: Privilege | any[];
  tabDataWorksheetPeerReviewerList: Privilege | any[];
  tabDataWorksheetMasterChecklist: Privilege | any[];
  isMultipleStatusUpdate = false;
  selectedUserID = 0;
  selectedEntityID = 0;
  selectedStartDate = null;
  worksheetTabID = ADMINTABACCESS.WORKFLOW_WORKSHEET;
  tabIDInCompleted = ADMINTABACCESS.WORKFLOW_VIEWINCOMPLETEDWORKSHEET;
  worksheetTabIDData: Privilege | any[];
  isInCompletedWorksheet: Privilege | any[];
  reviewTimesheetID = ADMINTABACCESS;
  isReviewTimesheet: Privilege | any[];
  totalUnits = 0;
  isViewTimesheet = 0;
  worksheetTaskID = null;
  isBackDateTimesheet = false;

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, public _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService,
              private route: ActivatedRoute,
              private _sharedUserService: SharedUserService) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        const dataItem = convertURLParamToDecode(params);
        if (dataItem) {
          // console.log(dataItem);
          if (dataItem['viewTimesheet'] && dataItem['viewTimesheet'] === '1') {
            this.selectedEntityID = this.equalJSON['entity_id'] = (dataItem['entity_id']) ? Number(dataItem['entity_id']) : null;
            this.PeriodFromValue = (dataItem['start_date']) ? moment(dataItem['start_date']).format('YYYY-MM-DD') : null;
            this.PeriodToValue = (dataItem['end_date']) ? moment(dataItem['end_date']).format('YYYY-MM-DD') : null;
            this.worksheetTaskID = this.inJSON['task_id'] = (dataItem['task_id']) ? Number(dataItem['task_id']) : null;
            this.isViewTimesheet = 1;
          } else {
            this.selectedUserID = this.equalJSON['user_id'] = (dataItem['user_id']) ? Number(dataItem['user_id']) : null;
            this.TimesheetFromValue = (dataItem['date']) ? moment(dataItem['date']).format('YYYY-MM-DD') : null;
            this.TimesheetToValue = (dataItem['date']) ? moment(dataItem['date']).format('YYYY-MM-DD') : null;
          }
        }
      });
    this.isInCompletedWorksheet = this._sharedService.checkUserPrivilegesTabs(this.tabIDInCompleted);
    this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
    this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
    this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
    this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
    this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
    this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
    this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
    this.isBackDateTimesheet = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'back_date_timesheet', 1);

    this.userData = this._sharedUserService.getUser();
    this.worksheetID = this._sharedService.getWorksheetData(GLOBALDATAKEYS.WORKSHEET_ID);
    this.isAddTimesheetButtonRights = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'add_timesheet', 1);
    this.reviewerTimesheetRights = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'reviewer_timesheet', 1);
    this.initializationMethod();
  }

  get parent_id(): AbstractControl {
    return this.filterForm.get('parent_id');
  }
  get entity_id(): AbstractControl {
    return this.filterForm.get('entity_id');
  }

  get userId(): AbstractControl {
    return this.filterForm.get('user_id');
  }

  get master_activity_id(): AbstractControl {
    return this.filterForm.get('master_activity_id');
  }

  get task_id(): AbstractControl {
    return this.filterForm.get('task_id');
  }

  get service_id(): AbstractControl {
    return this.filterForm.get('service_id');
  }

  get start_date(): AbstractControl {
    return this.filterForm.get('start_date');
  }

  get end_date(): AbstractControl {
    return this.filterForm.get('end_date');
  }

  get from_date(): AbstractControl {
    return this.filterForm.get('from_date');
  }

  get to_date(): AbstractControl {
    return this.filterForm.get('to_date');
  }

  get subactivityCode(): AbstractControl {
    return this.filterForm.get('subactivity_code');
  }

  get billingStatus(): AbstractControl {
    return this.filterForm.get('billing_status');
  }

  get subclientId(): AbstractControl {
    return this.filterForm.get('subclient_id');
  }


  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.createAdvanceFilterForm();
    this.getDropdownData();
    this.setAdvanceFilter(this.filterForm);
  }


  /**
   * Get Dropdown Data
   */
  getDropdownData() {
    // Get Subactivity List
    this._sharedObjService.getSubactivity({
      'records': 'all', 'sortBy': 'asc',
      'sortOrder': 'subactivity_code'
    }, {}).subscribe((response) => {
      this.subActivityList = response;
    });
    // Get Client
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = this.filteredTradingClientList = response;
      this.parentClientList = response.filter(item => item.is_parent === 1);
    });
    // Get Master Activity
    this._sharedObjService.getMasterActivity({'records': 'all'}, {}).subscribe((response) => {
      this.masterActivityList = response;
    });
    // Get Task
    this._sharedObjService.getTask({'records': 'all'}, {}).subscribe((response) => {
      this.taskList = response;
    });
    // Get User List
    // this._sharedObjService.getUserList({'records': 'all'}, {compare:{equals:{is_active : 1}}}).subscribe((response) => {
    //   // this.userList = response;
    // });
    // Get Service List
    this._sharedObjService.getServices({}, {'compare': {'equal': {'parent_id': 0}}}).subscribe((response) => {
      if (response) {
        this.serviceList = response;
      }
    });

    // Get Sub Client  List
    this._sharedObjService.getSubClientList({}, {}).subscribe((response) => {
      if (response) {
        this.subClientList = response;
      }
    });
    // Reviewe Timesheet Counte
    this._commonCrudService.listData(AdminAPI.TIMESHEET_LISTING, {
      'counter': 1
    }, {'compare': {'equal': {'is_reviewed': 0}}}).subscribe(response => {
      this.reviewTimesheetCount = response.payload.data;
    });
  }

  /**
   * Expand row table method
   * @param i
   */
  openRow(i) {
    this.trIndex = (this.trIndex !== i) ? i : -1;
  }

  /**
   * Get Timesheet Listing
   * @param pageNumber
   * @param key
   * @param val
   */
  getTimeSheetListing(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.TIMESHEET_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(response => {
      this.handleTimeSheetRespone(response);
    });
  }

  /**
   * Handle Timesheet Response
   * @param response
   */
  handleTimeSheetRespone(response) {
    this.timeSheetList = response.payload.data;
    this.userList = response.payload.userList;
    this.totalUnits = 0;
    this.timeSheetList.map(item => {
      this.totalUnits += (+item.units);
    });
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Create filter Master Activity
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      parent_id: new FormControl(null),
      entity_id: new FormControl((this.selectedEntityID > 0 ? this.selectedEntityID : null)),
      user_id: new FormControl((this.isViewTimesheet) ? null : (this.selectedUserID) ? this.selectedUserID : this.userData.id),
      service_id: new FormControl(null),
      master_activity_id: new FormControl(null),
      task_id: new FormControl((this.worksheetTaskID > 0) ? [this.worksheetTaskID] : null),
      start_date: new FormControl((this.isViewTimesheet) ? this.PeriodFromValue : null),
      end_date: new FormControl((this.isViewTimesheet) ? this.PeriodToValue : null),
      from_date: new FormControl((this.TimesheetFromValue) ? this.TimesheetFromValue : (this.isViewTimesheet) ? null : new Date()),
      to_date: new FormControl((this.TimesheetToValue) ? this.TimesheetToValue : null),
      subactivity_code: new FormControl(null),
      billing_status: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      parent_id: new FormControl(null),
      entity_id: new FormControl((this.selectedEntityID > 0 ? this.selectedEntityID : null)),
      user_id: new FormControl((this.isViewTimesheet) ? null : this.userData.id),
      service_id: new FormControl(null),
      master_activity_id: new FormControl(null),
      task_id: new FormControl((this.worksheetTaskID > 0) ? [this.worksheetTaskID] : null),
      start_date: new FormControl((this.isViewTimesheet) ? this.PeriodFromValue : null),
      end_date: new FormControl((this.isViewTimesheet) ? this.PeriodToValue : null),
      from_date: new FormControl((this.TimesheetFromValue) ? this.TimesheetFromValue : (this.isViewTimesheet) ? null : new Date()),
      to_date: new FormControl((this.TimesheetToValue) ? this.TimesheetToValue : null),
      subactivity_code: new FormControl(null),
      billing_status: new FormControl(null),
      subclient_id: new FormControl(null)
    });
  }

  /**
   * Toogle Filter
   */
  onToggleFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }


  /**
   * Pagination page change event
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getTimeSheetListing(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.filterForm.reset();
    this.advanceFilterForm.reset();
    this.filterForm.reset();
    this.advanceFilterForm.reset();
    this.likeJSON = {};
    this.equalJSON = {};
    this.inJSON = {};
    this.PeriodFromValue = null;
    this.PeriodToValue = null;
    this.TimesheetFromValue = null;
    this.TimesheetToValue = null;
    this.isOpenFilterView = false;
    this.getTimeSheetListing(1, 'id', 'desc');
  }

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilterView = false;
    }
  }

  /**
   * Get Query Params
   * @param page
   * @param sortKey
   * @param sortOrder
   */
  private getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    const params = {
      pageNumber: page,
      recordsPerPage: this.pageSize,
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
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getTimeSheetListing(1, sortKey, sortVal);
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};

    if (this.PeriodFromValue || this.TimesheetFromValue) {
      filter['greaterthanequal'] = {};
    }
    if (this.PeriodToValue || this.TimesheetToValue) {
      filter['lessthanequal'] = {};
    }

    if (this.PeriodFromValue) {
      filter['greaterthanequal']['start_date'] = moment(this.PeriodFromValue).format('YYYY-MM-DD');
    }
    if (this.PeriodToValue) {
      filter['lessthanequal']['end_date'] = moment(this.PeriodToValue).format('YYYY-MM-DD');
    }

    if (this.TimesheetFromValue) {
      filter['greaterthanequal']['date'] = moment(this.TimesheetFromValue).format('YYYY-MM-DD');
    }
    if (this.TimesheetToValue) {
      filter['lessthanequal']['date'] = moment(this.TimesheetToValue).format('YYYY-MM-DD');
    }

    // check for the object wheather its empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }
    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !CommonFunctions.isEmpty(filter)) {
      params['compare'] = filter;
    }
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }
    return params;
  }

  /**
   * Download Excel File
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.TIMESHEET_LISTING, params, this.getSearchParam(), 'Timesheet ', 0).subscribe(response => {
    });
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
          'parent_id': form.value['parent_id'],
          'entity_id': form.value['entity_id'],
          'master_activity_id': form.value['master_activity_id'],
          'task_id': form.value['task_id'],
          'service_id': form.value['service_id'],
          'start_date': form.value['start_date'],
          'end_date': form.value['end_date'],
          'from_date': form.value['from_date'],
          'to_date': form.value['to_date'],
          'user_id': form.value['user_id'],
          'subclient_id': form.value['subclient_id'],
          'billing_status': form.value['billing_status'],
          'subactivity_code': form.value['subactivity_code'],
          // 'worksheet_id': form.value['worksheet_id']
        });
      this.setAdvanceFilter(form, false);
    }
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {};
    this.likeJSON = {};
    this.inJSON = {};

    // removing empty key from objectsetAdvanceFilterKeyUp
    for (const key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined || form.value[key] === 'undefined' || form.value[key] === []) {
          delete form.value[key];
        } else {
          if (flag) {
            this.advanceFilterForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }

    if (form.value['start_date'] !== '' && form.value['start_date']) {
      this.PeriodFromValue = form.value['start_date'];
      delete form.value['start_date'];
    }
    if (form.value['end_date'] !== '' && form.value['end_date']) {
      this.PeriodToValue = form.value['end_date'];
      delete form.value['end_date'];
    }

    if (form.value['from_date'] !== '' && form.value['from_date']) {
      this.TimesheetFromValue = form.value['from_date'];
      delete form.value['from_date'];
    }

    if (form.value['to_date'] !== '' && form.value['to_date']) {
      this.TimesheetToValue = form.value['to_date'];
      delete form.value['to_date'];
    }


    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'parent_id' || key === 'entity_id' || key === 'service_id' || key === 'user_id' || key === 'subactivity_code' || key === 'billing_status' || key === 'subclient_id' || key === 'worksheet_id') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'master_activity_id' || key === 'task_id') {
            if (form.value[key].length) {
              this.inJSON[key] = form.value[key].join(',');
            }
          }
        }
      }

      this.isOpenFilterView = false;
      this.getTimeSheetListing(1, 'id', 'desc');
    }
  }


  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'start_date') {
      this.PeriodFromValue = null;
    } else if (elementName === 'end_date') {
      this.PeriodToValue = null;
    } else if (elementName === 'from_date') {
      this.TimesheetFromValue = null;
    } else if (elementName === 'to_date') {
      this.TimesheetToValue = null;
    } else if (elementName === 'parent_id' || elementName === 'entity_id' || elementName === 'service_id' || elementName === 'user_id' || elementName === 'subactivity_code' || elementName === 'billing_status' || elementName === 'subclient_id') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'master_activity_id' || elementName === 'task_id') {
      delete this.inJSON[elementName];
    }
    this.getTimeSheetListing(1, 'id', 'desc');
  }

  /**
   * Get Task Filter List
   * @param value
   */
  getTaskFilterList(value: any) {
    // Get Task
    if (value) {
      const itemData = value.map(x => x.id);
      this._sharedObjService.getTask({'records': 'all'}, {'in': {'master_activity_id': itemData.join(',')}}).subscribe((response) => {
        this.taskList = response;
      });
    } else {
      this._sharedObjService.getTask({'records': 'all'}, {}).subscribe((response) => {
        this.taskList = response;
      });
    }
  }

  /**
   * On click of delete event this dialog will use
   * @param timesheetData
   */
  openTodayTimesheetDeleteDialog(timesheetData: Timesheet) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete timesheet?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._commonCrudService.deleteData(AdminAPI.TIMESHEET_LISTING, timesheetData.id).subscribe(Response => {
          this.getTimeSheetListing(1, 'id', 'desc');
        });
      }
    });
  }

  /**
   * view more details
   */

  onOpenMoreDetailsDialog(timesheetData: Timesheet) {
    let dialogRef = this.dialog.open(ViewMoreDetailsTimesheetDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        timesheetData: timesheetData
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  /**
   * redirection
   */
  onWorksheetDashboard() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  /**
   * On timesheet page redirect
   */
  onEditTimeSheet(timesheet: Timesheet) {
    if (timesheet) {
      this._sharedService.setTimesheetData(GLOBALDATAKEYS.TIMESHEET_ITEM_DATA, null);
      this._sharedService.setTimesheetData(GLOBALDATAKEYS.TIMESHEET_ITEM_DATA, timesheet);
      this._router.navigate(['/' + AdminRoutes.WORKSHEET_UPDATE_TODAYS_TIMESHEET]);
    }
  }

  onAddTimeSheet() {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.WORKSHEET_ADD_NEW_TODAYS_TIMESHEET, '_blank');
    });
  }

  /**
   * Top button today's timesheet action
   */
  onOpenTodaysIncompletedWorksheet() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_WORKSHEET_VIEW_INCOMPLETED_WORKSHEET]);
  }

  onOpenTodaysWorksheet() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_WORKSHEET]);
  }

  onOpenReviewTimesheets() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_REVIEW_TIMESHEET]);
  }

  /**
   * Get Billing Status Name From ID
   * @param status_id
   */
  getBillingStatusName(status_id: number): string {
    const val = this.billingStatusList.filter(elem => elem.key === status_id);
    return (val.length) ? val[0].label : '';
  }

  /**
   * On Destory Worksheet Data ID Null
   */
  ngOnDestroy() {
    this._sharedService.setWorksheetData(GLOBALDATAKEYS.WORKSHEET_ID, null);
  }

  /**
   * Check to Show Button
   * @param timesheet
   * @param type
   */
  checkToShowButton(timesheet: Timesheet, type: number) {
    const todays_date = moment(new Date()).format('YYYY-MM-DD');
    if (this.userData.designation_id.designation_id === 7) {
      // If Timesheet Billing Status Charged then Superadmin can not delete timesheet
      if (timesheet.billing_status === 1) {
        return false;
      } else {
        return true;
      }
    } else {
      if (timesheet.billing_status === 1) {
        return false;
      } else if (this.isBackDateTimesheet) {
        return true;
      } else if (type === 1 || type === 2) {
        if (todays_date === timesheet.date) {
          return true;
        } else {
          return false;
        }
      }
    }
  }


  /**
   * Open quick menu
   * @param menuName
   */
  onOpenQuickMenu(menuName) {
    switch (menuName) {
      case 'addNewWorksheet':
        this._router.navigate(['/' + AdminRoutes.ADD_WORKSHEET]);
        break;
      case 'todayWorksheet':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_WORKSHEET]);
        break;
      case 'worksheetHierarchy':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_HIERARCHY]);
        break;
      case 'changeInOuttime':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_CHANGE_IN_OUT_TIME]);
        break;
      case 'subClientList':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_SUB_CLIENT_LIST]);
        break;
      case 'worksheetMasterChecklist':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_MASTER_CHECKLIST]);
        break;
      case 'trainingList':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_TRAINING_LIST]);
        break;
      case 'revieworKnockBackWorksheet':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_REVIEW_OR_KNOCK_BACK]);
        break;
      case 'peerReviewWorksheetListing':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
        break;
      case 'changeMultipleWorksheetStatus':
        this._router.navigate(['/' + AdminRoutes.CHANGE_MULTIPLE_WORKSHEET_STATUS]);
        break;
    }
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
  }

  /**
   * On Change Parent Entity
   * @param event
   */
  onChangeParentEntity(event: any) {
    this.clientList = this.filteredTradingClientList;
    if (event && event.id > 0) {
      this.clientList = this.filteredTradingClientList.filter(item => item["parent_id"] === event.id);
    }
  }
}
