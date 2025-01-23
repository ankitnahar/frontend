import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {Views} from '../peer-review-worksheet-listing.component';
import {AdminRoutes} from '../../../../../../../utility/constants/admin-route';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog, PageEvent} from '@angular/material';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {WorksheetListing, WorksheetStatus, WorksheetStatusCounter} from '../../../worksheet-dashboard-tab/worksheet.model';
import {AdminUser, Privilege} from '../../../../../../../utility/shared-model/admin-user.model';
import {MasterActivity} from '../../hierarchy/master-activity/master-activity.model';
import {TaskList} from '../../hierarchy/task-list/task-list.model';
import {Clients} from '../../../../../client-module/view-client/view-client.model';
import {Frequency} from '../../../../../../../utility/shared-model/frequency.model';
import {BASE, category, GLOBALDATAKEYS, worksheetStatusLog, yesNo} from '../../../../../../../utility/constants/base-constants';
import {ADMINTABACCESS} from '../../../../../../../utility/constants/header-constant';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../../../utility/shared-service/shared-object.service';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import * as moment from 'moment';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {ReviewActionAllocateReviewerDialog} from '../../review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog';
import {CommonFunctions, convertURLParamToEncode} from '../../../../../../../utility/common-functions';
import {WorksheetStatusLogDialog} from '../../../worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog';
import {ConfirmationDialogComponent} from '../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {WorksheetNotesDialogComponent} from '../../../worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component';

@Component({
  selector: 'app-completed-peer-review-worksheet',
  templateUrl: './completed-peer-review-worksheet.component.html',
  styleUrls: ['./completed-peer-review-worksheet.component.scss']
})
export class CompletedPeerReviewWorksheetComponent extends BaseComponent implements OnInit {
  taskData: any;
  // Constant Variables
  enumView = Views;
  activeView: Views;
  isDeleteItem = false;

  // Data Variables
  worksheetListData: WorksheetListing[] = [];
  worksheetStatusCounter: WorksheetStatusCounter[] = [];
  slideData = [];
  userList: AdminUser[] = [];
  masterActivityList: MasterActivity[] = [];
  taskList: TaskList[] = [];
  worksheetStatusList: WorksheetStatus[] = [];
  statusArray = [];
  allocatedCount = 0;
  unAllocatedCount = 0;
  selectedDataMain = 'all';
  clientList: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  clientListParent: Clients[] = [];
  frequencyList: Frequency[] = [];
  taskDataMain = [];
  categoryData = category;
  staffList: AdminUser[] = [];
  tamList: AdminUser[] = [];
  yesNoList = yesNo;
  worksheetLockList = worksheetStatusLog;
  PeriodFromValue = null;
  PeriodToValue = null;
  DueDateFromValue = null;
  DueDateToValue = null;
  noteToUpdate = [];
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
  equalJSON = {'status_id': 23};
  likeJSON = {};
  inJSON = {};

  tamId: any;
  teamId: any;
  assigneeId: any;
  // State variables
  trIndex = -1;
  isPlay = [];
  @Output() deleteItem = new EventEmitter<boolean>();
  notes: string;
  selectedWorksheetIDs = [];
  selectAllWorksheetIDS = false;
  isMultipleStatusUpdate = false;
  isMultipleWorksheetDelete = false;
  isAllocatereviewer = false;
  canChangeDueDate = false;
  canChangePeriodStartEndDate = false;
  tabID = ADMINTABACCESS.WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
  tabData: Privilege | any[];
  worksheetTabID = ADMINTABACCESS.WORKFLOW_WORKSHEET;
  todayDate = '';
  typeData = '';

  tabIDWorksheetHierarchy = ADMINTABACCESS.WORKFLOW_MASTERACTIVITY;
  tabIDWorksheetTraining = ADMINTABACCESS.WORKFLOW_WORKSHEETTRAINING;
  tabIDWorksheetSubClientList = ADMINTABACCESS.WORKFLOW_SUBCLIENTLIST;
  tabIDWorksheetReviewerList = ADMINTABACCESS.WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
  tabIDWorksheetPeerReviewerList = ADMINTABACCESS.WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
  tabIDWorksheetMasterChecklist = ADMINTABACCESS.WORKFLOW_MASTERCHECKLIST;
  tabIDWorksheetMultiplueStatusChange = ADMINTABACCESS.WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;
  userInfo: AdminUser;
  tabDataWorksheetHierarchy: Privilege | any[];
  tabDataWorksheetTraining: Privilege | any[];
  tabDataWorksheetSubClientList: Privilege | any[];
  tabDataWorksheetReviewerList: Privilege | any[];
  tabDataWorksheetPeerReviewerList: Privilege | any[];
  tabDataWorksheetMasterChecklist: Privilege | any[];
  worksheetTabIDData: Privilege | any[];
  isAddUserTimeSheet = false;
  tabTimeSheetID = ADMINTABACCESS.WORKFLOW_TIMESHEET;

  constructor(private _fb: FormBuilder,
              public dialog: MatDialog,
              public _commonCrudService: CommonCrudService,
              private _router: Router,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService) {
    super();
  }

  get parent_id(): AbstractControl {
    return this.filterForm.get('parent_id');
  }

  get entity_id(): AbstractControl {
    return this.filterForm.get('entity_id');
  }

  get master_activity_id(): AbstractControl {
    return this.filterForm.get('master_activity_id');
  }

  get task_id(): AbstractControl {
    return this.filterForm.get('task_id');
  }

  get frequency_id(): AbstractControl {
    return this.filterForm.get('frequency_id');
  }

  get start_date(): AbstractControl {
    return this.filterForm.get('start_date');
  }

  get end_date(): AbstractControl {
    return this.filterForm.get('end_date');
  }

  get due_date_from(): AbstractControl {
    return this.filterForm.get('due_date_from');
  }

  get due_date_to(): AbstractControl {
    return this.filterForm.get('due_date_to');
  }

  get category_id(): AbstractControl {
    return this.filterForm.get('category_id');
  }

  get related_entity(): AbstractControl {
    return this.filterForm.get('related_entity');
  }

  get technical_account_manager(): AbstractControl {
    return this.filterForm.get('technical_account_manager');
  }

  get team_member(): AbstractControl {
    return this.filterForm.get('team_member');
  }

  get additional_assignee(): AbstractControl {
    return this.filterForm.get('additional_assignee');
  }


  ngOnInit() {
    this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
    this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
    this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
    this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
    this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
    this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
    this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
    this.userInfo = this._sharedService.getUser();
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.todayDate = moment(new Date()).format('YYYY-MM-DD');
    this.isMultipleStatusUpdate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetstatuschange', 1);
    this.isMultipleWorksheetDelete = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetdelete', 1);
    this.isAllocatereviewer = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'allocatereviewer', 1);
    this.canChangePeriodStartEndDate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'canchangeperiodstartdate_enddate', 1);
    this.canChangeDueDate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'canchangeduedate', 1);
    this.isAddUserTimeSheet = this._sharedService.checkUserPrivileges(this.tabTimeSheetID, 'otherRights', 'otherRights', 'button_name', 'add_user_timesheet', 1);
    this.createAdvanceFilterForm();
    this.getDropdownData();
    this.setAdvanceFilter(this.filterForm);
  }

  /**
   * Get frequency data
   */
  getDropdownData() {
    // Get Frequency
    this._sharedObjService.getFrequency({'records': 'all'}, {}).subscribe((response) => {
      this.frequencyList = response;
    });
    // Get Client
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = this.filteredTradingClientList = response;
      this.clientListParent = response.filter(item => item.is_parent === 1);
    });
    // Get Master Activity
    this._sharedObjService.getMasterActivity({'records': 'all'}, {}).subscribe((response) => {
      this.masterActivityList = response;
    });
    // Get Task
    this._sharedObjService.getTask({'records': 'all'}, {}).subscribe((response) => {
      this.taskList = response;
    });
    // Get Worksheet Status
    this._sharedObjService.getWorksheetStatusRightsWise({'records': 'all'}, {}).subscribe((response) => {
      this.worksheetStatusList = response;
    });
    // Get User List
    this._sharedObjService.getUserList({'records': 'all'}, {compare:{equal:{is_active : 1}}}).subscribe((response) => {
      this.userList = response;
      this.staffList = this.userList.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 10 : 0);
      this.tamList = this.userList.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 9 : 0);
    });
  }

  /**
   * Get Worksheet Listing
   * @param pageNumber
   * @param key
   * @param val
   */
  getWorksheetListing(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.PEER_REVIEW_WORKSHEET_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(response => {
      this.handleWorksheetRespone(response);
    });
    // Get Counter
    this._commonCrudService.listData(AdminAPI.PEER_REVIEW_WORKSHEET_LISTING, {
      'type': 'allocate',
      'action': 'count'
    }, {}).subscribe(response => {
      this.allocatedCount = response.payload.data.totalRecords;
    });
    this._commonCrudService.listData(AdminAPI.PEER_REVIEW_WORKSHEET_LISTING, {
      'type': 'unallocate',
      'action': 'count'
    }, {}).subscribe(response => {
      this.unAllocatedCount = response.payload.data.totalRecords;
    });
  }

  /**
   * Handle Worksheet Response
   * @param response
   */
  handleWorksheetRespone(response) {
    this.worksheetListData = response.payload.data;
    this.noteToUpdate = [];
    if (this.worksheetListData) {
      this.worksheetListData.forEach(item => {
        this.noteToUpdate[item.id] = item.notes;
      });
    }
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
      entity_id: new FormControl(null),
      master_activity_id: new FormControl(null),
      task_id: new FormControl(null),
      frequency_id: new FormControl(null),
      start_date: new FormControl(null),
      end_date: new FormControl(null),
      due_date_from: new FormControl(null),
      due_date_to: new FormControl(null),
      category_id: new FormControl(null),
      related_entity: new FormControl(null),
      technical_account_manager: new FormControl(null),
      team_member: new FormControl(null),
      additional_assignee: new FormControl(null),
    });

    this.advanceFilterForm = this._fb.group({
      parent_id: new FormControl(null),
      entity_id: new FormControl(null),
      master_activity_id: new FormControl(null),
      task_id: new FormControl(null),
      frequency_id: new FormControl(null),
      start_date: new FormControl(null),
      end_date: new FormControl(null),
      due_date_from: new FormControl(null),
      due_date_to: new FormControl(null),
      category_id: new FormControl(null),
      related_entity: new FormControl(null),
      technical_account_manager: new FormControl(null),
      team_member: new FormControl(null),
      additional_assignee: new FormControl(null),
    });
  }

  /**
   * Add Edit Master Activity Dialog
   */
  openAddEditMasterActivityDialog(data: WorksheetListing) {
    const dialogRef = this.dialog.open(ReviewActionAllocateReviewerDialog, {
      panelClass: 'add-form-dialog-container',
      data: {
        rkData: data
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getWorksheetListing(1, 'due_date', 'asc');
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
    this.getWorksheetListing(event.pageIndex + 1, this.sortBy, this.sortOrder);
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

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.filterForm.reset();
    this.advanceFilterForm.reset();
    this.likeJSON = {};
    this.equalJSON = {'status_id': 23};
    this.inJSON = {};
    this.PeriodFromValue = null;
    this.PeriodToValue = null;
    this.DueDateFromValue = null;
    this.DueDateToValue = null;
    this.isOpenFilter = false;
    this.getWorksheetListing(1, 'due_date', 'asc');
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

    if (this.tamId) {
      params['technical_account_manager'] = this.tamId;
    }

    if (this.teamId) {
      params['team_member'] = this.teamId;
    }

    if (this.assigneeId) {
      params['additional_assignee'] = this.assigneeId;
    }

    if (this.typeData) {
      params['type'] = this.typeData;
    }

    return params;
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getWorksheetListing(1, sortKey, sortVal);
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};

    if (this.PeriodFromValue || this.DueDateFromValue) {
      filter['greaterthanequal'] = {};
    }
    if (this.PeriodToValue || this.DueDateToValue) {
      filter['lessthanequal'] = {};
    }

    if (this.PeriodFromValue) {
      filter['greaterthanequal']['start_date'] = moment(this.PeriodFromValue).format('YYYY-MM-DD');
    }
    if (this.PeriodToValue) {
      filter['lessthanequal']['end_date'] = moment(this.PeriodToValue).format('YYYY-MM-DD');
    }

    if (this.DueDateFromValue) {
      filter['greaterthanequal']['due_date'] = moment(this.DueDateFromValue).format('YYYY-MM-DD');
    }
    if (this.DueDateToValue) {
      filter['lessthanequal']['due_date'] = moment(this.DueDateToValue).format('YYYY-MM-DD');
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
    if (this.tamId) {
      params['technical_account_manager'] = this.tamId;
    }

    if (this.teamId) {
      params['team_member'] = this.teamId;
    }

    if (this.assigneeId) {
      params['additional_assignee'] = this.assigneeId;
    }
    this._commonCrudService.downloadExcelData(AdminAPI.PEER_REVIEW_WORKSHEET_LISTING, params, this.getSearchParam(), 'Completed Peer Review Worksheet ', 0).subscribe(response => {
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
          'frequency_id': form.value['frequency_id'],
          'start_date': form.value['start_date'],
          'end_date': form.value['end_date'],
          'due_date_from': form.value['due_date_from'],
          'due_date_to': form.value['due_date_to'],
          'category_id': form.value['category_id'],
          'related_entity': form.value['related_entity'],
          'technical_account_manager': form.value['technical_account_manager'],
          'team_member': form.value['team_member'],
          'additional_assignee': form.value['additional_assignee']
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
    this.equalJSON = {'status_id': 23};
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
    if (form.value['due_date_from'] !== '' && form.value['due_date_from']) {
      this.DueDateFromValue = form.value['due_date_from'];
      delete form.value['due_date_from'];
    }
    if (form.value['due_date_to'] !== '' && form.value['due_date_to']) {
      this.DueDateToValue = form.value['due_date_to'];
      delete form.value['due_date_to'];
    }

    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'entity_id' || key === 'frequency_id' || key === 'parent_id'
            || key === 'related_entity') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'category_id' || key === 'master_activity_id' || key === 'task_id') {
            if (form.value[key].length) {
              this.inJSON[key] = form.value[key].join(',');
            }
          }
        }
      }
      this.tamId = form.value['technical_account_manager'];
      this.teamId = form.value['team_member'];
      this.assigneeId = form.value['additional_assignee'];
      this.isOpenFilterView = false;
      this.getWorksheetListing(1, 'due_date', 'asc');
    }
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.userList = response;
    });
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'technical_account_manager') {
      this.tamId = '';
    } else if (elementName === 'team_member') {
      this.teamId = '';
    } else if (elementName === 'additional_assignee') {
      this.assigneeId = '';
    } else if (elementName === 'start_date') {
      this.PeriodFromValue = null;
    } else if (elementName === 'end_date') {
      this.PeriodToValue = null;
    } else if (elementName === 'due_date_from') {
      this.DueDateFromValue = null;
    } else if (elementName === 'due_date_to') {
      this.DueDateToValue = null;
    } else if (elementName === 'entity_id' || elementName === 'frequency_id' || elementName === 'parent_id'
      || elementName === 'related_entity') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'category_id' || elementName === 'master_activity_id' || elementName === 'task_id') {
      delete this.inJSON[elementName];
    }

    this.getWorksheetListing(1, 'due_date', 'asc');
  }

  /**
   * Get Task Filter List
   * @param value
   */
  getTaskFilterList(value: any) {
    // console.log(value);
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
   * Add Edit Sub Activity Dialog
   */
  openAddEditSubActivityDialog() {
    let dialogRef = this.dialog.open(ReviewActionAllocateReviewerDialog, {
      panelClass: 'add-form-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  /**
   * Open filter
   */
  onOpenFilter() {
    this.activeView = this.enumView.FILTER_VIEW_MAIN;
  }

  /**
   * Expand row table
   * @param i
   */
  openRow(i) {
    this.trIndex = (this.trIndex !== i) ? i : -1;
  }

  /**
   * Close filter
   */
  onCloseFilter() {
    this.activeView = null;
  }

  /**
   * Close modal
   * @param event
   */
  onCloseDialog(event) {
    this.activeView = event;
  }

  /**
   * On delete table row
   */
  onDeleteItem(event) {
    this.deleteItem.emit(event);
  }

  /**
   * View timesheet page redirect
   */
  onViewTimeSheet() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_TIMESHEET]);
  }

  /**
   * Task CEhcklist page redirect
   */
  onTaskChecklist() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_TIMESHEET]);
  }

  /**
   * redirection worksheet dashboard
   */
  onWorksheetDashboard() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  /**
   * Review Allocation page redirection
   */
  openReviewAllocateDialog() {
    let dialogRef = this.dialog.open(ReviewActionAllocateReviewerDialog, {
      panelClass: 'add-form-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  /**
   * Get All Status
   */
  getAllStatus() {
    this._commonCrudService.listData(AdminAPI.GET_ALL_STATUS, {}, {}).subscribe(response => {
      this.statusArray = response.payload.data;
    });
  }

  /**
   * Update Due Date + Period Start + End Date + Reminder Date
   * @param object
   */
  updateInlineFormDates(object) {
    const keyData = object.key;
    if (keyData === 'start_date' || keyData === 'end_date' || keyData === 'due_date' || keyData === 'reminder_date') {
      object.value = moment(object.value).format('YYYY-MM-DD');
    }
    if (object.value) {
      // Update worksheet date
      this._commonCrudService.updateData(AdminAPI.UPDATE_WORKSHEET, object.id, {
        [object.key]: object.value,
        '_method': 'put'
      }).subscribe(response => {
      });
    }
  }

  /**
   * On Change Update Notes Param
   * @param notes
   */
  onChangeUpdateNotesParam(notes: string, id: number) {
    this.noteToUpdate[id] = notes;
  }

  /**
   * On Submit Update Notes
   * @param id
   */
  onSubmitUpdateNotes(id: number) {
    const notes = this.noteToUpdate[id];
    if (notes) {
      // Update worksheet date
      this._commonCrudService.updateData(AdminAPI.UPDATE_WORKSHEET, id, {
        'notes': this.noteToUpdate[id],
        '_method': 'put'
      }).subscribe(response => {
        this.getWorksheetListing(1, 'due_date', 'asc');
      });
    }
  }

  /**
   * Open worksheet status log modal
   */
  openWorksheetStatusLogDialog(worksheetData: WorksheetListing) {
    let dialogRef = this.dialog.open(WorksheetStatusLogDialog, {
      panelClass: 'worksheet-status-log-container',
      data: {
        dataWorksheet: worksheetData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  /**
   * On timesheet page redirect
   */
  onAddTimeSheet(worksheetData: WorksheetListing) {
    if (worksheetData) {
      this._sharedService.setWorksheetData(GLOBALDATAKEYS.WORKSHEET_ITEM_DATA, worksheetData);
      this._router.navigate([]).then(result => {
        window.open('/' + AdminRoutes.ADD_TIMESHEET, '_blank');
      });
      // this._router.navigate(['/' + AdminRoutes.ADD_TIMESHEET]);
    }
  }

  /**
   * On users timesheet page redirect
   */
  onAddUsersTimeSheet(worksheetData: WorksheetListing) {
    if (worksheetData) {
      this._sharedService.setWorksheetData(GLOBALDATAKEYS.WORKSHEET_ITEM_DATA, worksheetData);
      // this._router.navigate(['/' + AdminRoutes.ADD_USERS_TIMESHEET]);
      this._router.navigate([]).then(result => {
        window.open('/' + AdminRoutes.ADD_USERS_TIMESHEET, '_blank');
      });
    }
  }


  /**
   * On click of view timesheet
   * @param worksheetData
   */
  onViewUserTimesheet(worksheetData: WorksheetListing) {
    const jsonData = convertURLParamToEncode({
      'entity_id': worksheetData.entity_id,
      'start_date': worksheetData.start_date,
      'end_date': worksheetData.end_date,
      'viewTimesheet': 1,
      'task_id': worksheetData.task_id.id
    });
    if (jsonData) {
      this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_TIMESHEET], {queryParams: jsonData});
    }
  }

  /**
   * On task checklist redirect
   */
  onEditTaskCheckList(data) {
    this._sharedService.setChecklistViewData(null);
    this._sharedService.setChecklistViewData(data);
    this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
  }

  onPreviewEmail() {
    this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST_EMAIL_PREVIEW]);
  }

  onAllocateAssigneeDialog(worksheet: WorksheetListing) {
    const dialogRef = this.dialog.open(ReviewActionAllocateReviewerDialog, {
      panelClass: 'add-form-dialog-container',
      data: {
        allocateData: worksheet,
        isadditionalAssignee: 3
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getWorksheetListing(1, 'due_date', 'asc');
    });
  }

  /**
   * Display Get Status List
   * @param {number} status_id
   * @returns {string}
   */
  getYesNoStatus(status_id: number): string {
    const val = this.yesNoList.filter(elem => elem.key === Number(status_id));
    return (val.length) ? val[0].label : '';
  }

  /**
   * Display Get Status List
   * @param {number} cat_id
   * @returns {string}
   */
  getCategoryName(cat_id: number): string {
    const val = this.categoryData.filter(elem => elem.key === Number(cat_id));
    return (val.length) ? val[0].label : '';
  }

  /**
   * Select All Item of Event
   * @param event
   */
  onSelectAllItem(event: boolean) {
    this.selectedWorksheetIDs = [];
    if (event) {
      this.selectAllWorksheetIDS = true;
      const items = this.worksheetListData.filter(data => (data.id > 0 && data.timesheet_total_unit === 0));
      if (items) {
        items.forEach(value => {
          this.selectedWorksheetIDs.push(value.id);
        });
      }
    } else {
      this.selectAllWorksheetIDS = false;
    }

  }

  /**
   * On Click of Item
   * @param event
   */
  onSelectItem(event: boolean, id: number) {
    if (event) {
      this.selectedWorksheetIDs.push(id);
    } else {
      let index = this.selectedWorksheetIDs.indexOf(id);
      if (index !== -1) {
        this.selectedWorksheetIDs.splice(index, 1);
      }
    }
  }

  /**
   * Used for delete multiple worksheet
   */
  onConfirmationDialogDeleteWorksheet() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete worksheet?'
      }
    });
    dialogRef.afterClosed().subscribe((value) => {
      if (value && this.selectedWorksheetIDs) {
        const params = this.selectedWorksheetIDs.join(',');
        this._commonCrudService.deleteData(AdminAPI.DELETE_WORKSHEET, 0, params).subscribe(response => {
          this.selectedWorksheetIDs = [];
          this.getWorksheetListing(1, 'due_date', 'asc');
        });
      }
    });
  }

  /**
   * redirection PeerReviewWorksheet page
   */
  onPeerReviewWorksheet() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
  }

  /**
   * Worksheet Notes Dialog
   * @param worksheetData
   */
  onWorksheetNotesDialog(worksheetData: WorksheetListing) {
    const dialogRef = this.dialog.open(WorksheetNotesDialogComponent, {
      width: '50vw',
      data: {
        worksheetItem: worksheetData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.setAdvanceFilter(this.filterForm);
      }
    });
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
