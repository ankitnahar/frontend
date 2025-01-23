import {Component, HostListener, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {CommonFunctions} from '../../../../../../../utility/common-functions';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, PageEvent} from '@angular/material';
import {Timesheet} from '../timesheet.model';
import {AdminUser, Privilege} from '../../../../../../../utility/shared-model/admin-user.model';
import {MasterActivity} from '../../hierarchy/master-activity/master-activity.model';
import {TaskList} from '../../hierarchy/task-list/task-list.model';
import {Clients} from '../../../../../client-module/view-client/view-client.model';
import {SubActivity} from '../../hierarchy/sub-activity/sub-activity.model';
import {BASE, category, GLOBALDATAKEYS, WIPInvoiceBillingStatus} from '../../../../../../../utility/constants/base-constants';
import {Services} from '../../../../../../../utility/shared-model/services.model';
import {SubClient} from '../../sub-client-list/subclient.model';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../../../utility/shared-service/shared-object.service';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {SharedUserService} from '../../../../../../../utility/shared-service/shared-user.service';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import * as moment from 'moment';
import {ConfirmationDialogComponent} from '../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {ADMINTABACCESS} from '../../../../../../../utility/constants/header-constant';

@Component({
  selector: 'app-review-timesheet',
  templateUrl: './review-timesheet.component.html',
  styleUrls: ['./review-timesheet.component.scss']
})
export class ReviewTimesheetComponent implements OnInit {
  // Data Variables
  isDeleteItem = false;
  timeSheetList: Timesheet[] = [];
  userList: AdminUser[] = [];
  masterActivityList: MasterActivity[] = [];
  taskList: TaskList[] = [];
  clientList: Clients[] = [];
  subActivityList: SubActivity[] = [];
  categoryData = category;
  staffList: AdminUser[] = [];
  tamList: AdminUser[] = [];
  serviceList: Services[] = [];
  subClientList: SubClient[] = [];
  reviewerList: AdminUser[] = [];
  billingStatusList = WIPInvoiceBillingStatus;

  PeriodFromValue = null;
  PeriodToValue = null;

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
  equalJSON = {'is_reviewed': 0};
  likeJSON = {};
  inJSON = {};
  trIndex = -1;
  userData: AdminUser;

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
  worksheetTabID = ADMINTABACCESS.WORKFLOW_WORKSHEET;
  worksheetTabIDData: Privilege | any[];

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, public _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService,
              private _sharedUserService: SharedUserService) {
  }

  ngOnInit() {
    this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
    this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
    this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
    this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
    this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
    this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
    this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);

    this.userData = this._sharedUserService.getUser();
    this.initializationMethod();
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
      'records': 'all',
      'sortBy': 'asc',
      'sortOrder': 'subactivity_code'
    }, {}).subscribe((response) => {
      this.subActivityList = response;
    });
    // Get Client
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = response;
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
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.userList = response;
    });

    // Get Reviewer List
    this._sharedObjService.getUserList({'records': 'all'}, {
      'compare': {'equal': {'is_active': 1}},
      'in': {'designation_id': '9,10,68,69,70,71,73'},
      'findinset': {'team_id': [2]}
    }).subscribe((response) => {
      this.reviewerList = response;
    });

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
  }

  /**
   * Expand row table method
   * @param i
   */
  openRow(i) {
    this.trIndex = (this.trIndex !== i) ? i : -1;
  }

  /**
   * Get Worksheet Listing
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
      entity_id: new FormControl(null),
      user_id: new FormControl(),
      service_id: new FormControl(null),
      master_activity_id: new FormControl(null),
      task_id: new FormControl(null),
      start_date: new FormControl(),
      end_date: new FormControl(new Date()),
      subactivity_code: new FormControl(null),
      billing_status: new FormControl(null),
      subclient_id: new FormControl(null),
      worksheet_id: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      entity_id: new FormControl(null),
      user_id: new FormControl(),
      service_id: new FormControl(null),
      master_activity_id: new FormControl(null),
      task_id: new FormControl(null),
      start_date: new FormControl(),
      end_date: new FormControl(new Date()),
      subactivity_code: new FormControl(null),
      billing_status: new FormControl(null),
      subclient_id: new FormControl(null),
      worksheet_id: new FormControl(null)
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
    this.likeJSON = {};
    this.equalJSON = {'is_reviewed': 0};
    this.inJSON = {};
    this.PeriodFromValue = null;
    this.PeriodToValue = null;
    this.isOpenFilterView = false;
    this.createAdvanceFilterForm();
    this.getTimeSheetListing(1, 'id', 'desc');
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

    if (this.PeriodFromValue) {
      filter['greaterthanequal'] = {};
    }
    if (this.PeriodToValue) {
      filter['lessthanequal'] = {};
    }

    if (this.PeriodFromValue) {
      filter['greaterthanequal']['date'] = moment(this.PeriodFromValue).format('YYYY-MM-DD');
    }
    if (this.PeriodToValue) {
      filter['lessthanequal']['date'] = moment(this.PeriodToValue).format('YYYY-MM-DD');
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
    this._commonCrudService.downloadExcelData(AdminAPI.TIMESHEET_LISTING, params, this.getSearchParam(), 'Peer Review Worksheet ', 0).subscribe(response => {
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
          'entity_id': form.value['entity_id'],
          'master_activity_id': form.value['master_activity_id'],
          'task_id': form.value['task_id'],
          'service_id': form.value['service_id'],
          'start_date': form.value['start_date'],
          'end_date': form.value['end_date'],
          'user_id': form.value['user_id'],
          'subclient_id': form.value['subclient_id'],
          'billing_status': form.value['billing_status'],
          'subactivity_code': form.value['subactivity_code'],
          'worksheet_id': form.value['worksheet_id']
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
    this.equalJSON = {'is_reviewed': 0};
    this.likeJSON = {};
    this.inJSON = {};

    // removing empty key from objectsetAdvanceFilterKeyUp
    for (const key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined || form.value[key] === 'undefined') {
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

    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'entity_id' || key === 'service_id' || key === 'worksheet_id' || key === 'user_id' || key === 'subactivity_code' || key === 'billing_status' || key === 'subclient_id') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'master_activity_id' || key === 'task_id') {
            this.inJSON[key] = form.value[key].join(',');
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
    } else if (elementName === 'entity_id' || elementName === 'service_id' || elementName === 'user_id' || elementName === 'subactivity_code' || elementName === 'billing_status' || elementName === 'subclient_id') {
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
   * Get Billing Status Name From ID
   * @param status_id
   */
  getBillingStatusName(status_id: number): string {
    const val = this.billingStatusList.filter(elem => elem.key === status_id);
    return (val.length) ? val[0].label : '';
  }

  /**
   * On Change of Reviewer Update
   */
  onChangeOfReviewer(value: number, id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to update reviewer?'
      }
    });
    dialogRef.afterClosed().subscribe((responseData) => {
      if (responseData) {
        this._commonCrudService.updateData(AdminAPI.TIMESHEET_LISTING, id, {
          'reviewer_id': value, '_method': 'put'
        }).subscribe(response => {
          this.getTimeSheetListing(1, 'id', 'desc');
        });
      }
    });
  }

  /**
   * redirection
   */
  onWorksheetDashboard() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  onTodaysTimesheet() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_TIMESHEET]);
  }

  /**
   * On edit timesheet page redirect
   */
  onEditTimeSheet(timeSheet: Timesheet) {
    if (timeSheet) {
      this._sharedService.setTimesheetData(GLOBALDATAKEYS.TIMESHEET_ITEM_DATA, null);
      this._sharedService.setTimesheetData(GLOBALDATAKEYS.TIMESHEET_ITEM_DATA, timeSheet);
      this._router.navigate(['/' + AdminRoutes.WORKSHEET_ADD_REVIEW_TIMESHEET]);
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilter = false;
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
      case 'todayTimesheet':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_TIMESHEET]);
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
}
