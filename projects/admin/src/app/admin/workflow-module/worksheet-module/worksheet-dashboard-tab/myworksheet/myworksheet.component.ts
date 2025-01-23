import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {MatDialog, PageEvent} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {ConfirmationDialogComponent} from '../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
// crud
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {BASE, category, GLOBALDATAKEYS, worksheetStatusLog, yesNo} from '../../../../../../utility/constants/base-constants';
import {Clients} from '../../../../client-module/view-client/view-client.model';
import * as moment from 'moment';
import {ReviewActionAllocateReviewerDialog} from '../../worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {AdminUser, Privilege} from '../../../../../../utility/shared-model/admin-user.model';
import {WorksheetListing, WorksheetStatus, WorksheetStatusCounter} from '../worksheet.model';
import {MasterActivity} from '../../worksheet-quick-action/hierarchy/master-activity/master-activity.model';
import {TaskList} from '../../worksheet-quick-action/hierarchy/task-list/task-list.model';
import {Frequency} from '../../../../../../utility/shared-model/frequency.model';
import {CommonFunctions, convertURLParamToEncode} from '../../../../../../utility/common-functions';
import {ADMINTABACCESS} from '../../../../../../utility/constants/header-constant';
import {WorksheetStatusLogDialog} from '../../worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog';
import {CompleteWorksheetStatusDialogComponent} from '../../worksheet-dashboard-action/complete-worksheet-status-dialog/complete-worksheet-status-dialog.component';
import {WorksheetNotesDialogComponent} from '../../worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component';


export enum Views {
  FILTER_VIEW_MAIN
}

@Component({
  selector: 'app-myworksheet',
  templateUrl: './myworksheet.component.html',
  styleUrls: ['./myworksheet.component.scss'],
})
export class MyworksheetComponent extends BaseComponent implements OnInit {
  @Input() myWorksheetCount: any;
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
  totalCount = 0;
  totalCountAll = 0;
  totalCountUnallocate = 0;
  totalCountAllocate = 0;
  selectedDataMain = 'all';
  clientList: Clients[] = [];
  clientListParent: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
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
  equalJSON = {};
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
  isWorksheetAdditionalAssignee = false;
  isAddUserTimeSheet = false;
  canChangeDueDate = false;
  canChangePeriodStartEndDate = false;
  tabID = ADMINTABACCESS.WORKFLOW_MYWORKSHEET;
  tabData: Privilege | any[];
  worksheetTabID = ADMINTABACCESS.WORKFLOW_WORKSHEET;
  todayDate = '';
  userInfo: AdminUser;
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

  get status_id(): AbstractControl {
    return this.filterForm.get('status_id');
  }

  get lock_worksheet(): AbstractControl {
    return this.filterForm.get('lock_worksheet');
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
    this.userInfo = this._sharedService.getUser();
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.todayDate = moment(new Date()).format('YYYY-MM-DD');
    this.isMultipleStatusUpdate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetstatuschange', 1);
    this.isMultipleWorksheetDelete = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetdelete', 1);
    this.isWorksheetAdditionalAssignee = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'worksheetadditionalassignee', 1);
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
    this._sharedObjService.getUserList({'records': 'all',"field":"user.id,user.userfullname"}, {}).subscribe((response) => {
      this.userList = response;
      this.staffList = this.userList.filter(data => (data['designation_id']) ? +data['designation_id'] === 10 : 0);
      this.tamList = this.userList.filter(data => (data['designation_id']) ? +data['designation_id'] === 9 : 0);
    });
    // My Worksheet Status Wise Counter
    // this._commonCrudService.listData(AdminAPI.MY_WORKSHEET_LISTING, {
    //   'statuscounter': 1,
    //   'records': 'all',
    //   'type': 'my'
    // }, {'compare': {'lessthanequal': {'due_date': this.todayDate}}}).subscribe(response => {
    //   this.worksheetStatusCounter = response.payload.data;
    // });
  }

  /**
   * Get Worksheet Listing
   * @param pageNumber
   * @param key
   * @param val
   */
  getWorksheetListing(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.MY_WORKSHEET_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(response => {
      this.handleWorksheetRespone(response);
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
      due_date_to: new FormControl(new Date()),
      category_id: new FormControl(null),
      related_entity: new FormControl(null),
      status_id: new FormControl(null),
      technical_account_manager: new FormControl(null),
      team_member: new FormControl(null),
      additional_assignee: new FormControl(null),
      lock_worksheet: new FormControl(null)
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
      due_date_to: new FormControl(new Date()),
      category_id: new FormControl(null),
      related_entity: new FormControl(null),
      status_id: new FormControl(null),
      technical_account_manager: new FormControl(null),
      team_member: new FormControl(null),
      additional_assignee: new FormControl(null),
      lock_worksheet: new FormControl(null)
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
   * Reset All Filters
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.filterForm.reset();
    this.advanceFilterForm.reset();
    this.likeJSON = {};
    this.equalJSON = {};
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
    const params = {'excel': 1, 'records': 'all', 'type': 'my'};
    if (this.tamId) {
      params['technical_account_manager'] = this.tamId;
    }

    if (this.teamId) {
      params['team_member'] = this.teamId;
    }

    if (this.assigneeId) {
      params['additional_assignee'] = this.assigneeId;
    }
    this._commonCrudService.downloadExcelData(AdminAPI.MY_WORKSHEET_LISTING, params, this.getSearchParam(), 'My Worksheet ', 0).subscribe(response => {
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
          'status_id': form.value['status_id'],
          'technical_account_manager': form.value['technical_account_manager'],
          'team_member': form.value['team_member'],
          'additional_assignee': form.value['additional_assignee'],
          'lock_worksheet': form.value['lock_worksheet']
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
            || key === 'related_entity' || key === 'status_id' || key === 'lock_worksheet') {
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
      || elementName === 'related_entity' || elementName === 'status_id' || elementName === 'lock_worksheet') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'category_id' || elementName === 'master_activity_id' || elementName === 'task_id') {
      delete this.inJSON[elementName];
    }

    this.getWorksheetListing(1, 'due_date', 'asc');
  }

  /**
   * On Change Set Filter Field Value
   * @param value
   */
  onChangeUpdateFilterField(value: any) {
    if (value.toString() !== '') {
      this.filterForm.get('status_id').setValue(value.toString());
      this.advanceFilterForm.get('status_id').setValue(value.toString());
    } else {
      this.filterForm.get('status_id').setValue(null);
      this.advanceFilterForm.get('status_id').setValue(null);
    }
    this.setAdvanceFilter(this.filterForm);
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
        this.getWorksheetListing(1, 'due_date', 'asc');
      });
    }
  }

  /**
   * Update Due Date + Period Start + End Date + Reminder Date
   * @param object
   */
  onUpdateStatus(worksheetData: WorksheetListing, statusChanged: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to change worksheet status?'
      }
    });
    dialogRef.afterClosed().subscribe((value) => {
      if (value && worksheetData && statusChanged) {
        // console.log(value && worksheetData && statusChanged);
        // If selected status ready for review
        if (worksheetData.taskchecklist === 1 && (statusChanged === 2)) {
          // If additional assignee can not edit by team member
          if ((worksheetData.worksheet_additional_assignee !== null) && (worksheetData.worksheet_additional_assignee.id === this.userInfo.id)) {
            this.onEditTaskCheckList(worksheetData, 0);
          } else if (worksheetData['team_json'] !== null) {
            // If team member is equal to allocated team member then user can edit else not
            const teamData = JSON.parse(worksheetData['team_json']);
            if (teamData[10] === this.userInfo.id) {
              this.onEditTaskCheckList(worksheetData, 0);
            } else {
              this.onEditTaskCheckList(worksheetData, 1);
            }
          } else {
            this.onEditTaskCheckList(worksheetData, 1);
          }
        } else if (worksheetData.taskchecklist === 1 && (statusChanged === 13 && worksheetData.status_id.id === 15)) {
          // If selected status report sent
          if (worksheetData['team_json'] !== null) {
            const teamData = JSON.parse(worksheetData['team_json']);
            if (teamData[9] === this.userInfo.id || teamData[60] === this.userInfo.id) {
              this.onEditTaskCheckList(worksheetData, 0);
            } else {
              this.onEditTaskCheckList(worksheetData, 1);
            }
          } else {
            this.onEditTaskCheckList(worksheetData, 1);
          }
        } else if (worksheetData.is_repeat_task === 1 && statusChanged === 4) {
          const dialogRefData = this.dialog.open(CompleteWorksheetStatusDialogComponent, {
            data: {
              worksheetItem: worksheetData
            }
          });
          dialogRefData.afterClosed().subscribe((valueData) => {
            this.getWorksheetListing(1, 'due_date', 'asc');
          });
        } else {
          this._commonCrudService.updateData(AdminAPI.UPDATE_WORKSHEET, worksheetData.id, {
            'status_id': statusChanged,
            '_method': 'put'
          }).subscribe(response => {
            this.getWorksheetListing(1, 'due_date', 'asc');
          });
        }
      }
    });
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
  onEditTaskCheckList(data: WorksheetListing, isReadOnly?: number) {
    // If Read Only Then Redirect to other page
    if (isReadOnly === 1) {
      this._sharedService.setChecklistViewData(null);
      this._sharedService.setChecklistViewData(data);
      // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
      this._router.navigate([]).then(result => {
        window.open('/' + AdminRoutes.TASK_CHECKLIST, '_blank');
      });
    } else if (data) {
      if (data.taskchecklist === 1 && (data.status_id.id < 2 || data.status_id.id === 9)) {
        // If additional assignee can not edit by team member
        if ((data.worksheet_additional_assignee !== null) && (data.worksheet_additional_assignee.id === this.userInfo.id)) {
          this._sharedService.setChecklistData(null);
          this._sharedService.setChecklistData(data);
          // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST]);
          this._router.navigate([]).then(result => {
            window.open('/' + AdminRoutes.EDIT_TASK_CHECKLIST, '_blank');
          });
        } else if (data['team_json'] !== null && data['team_json'] !== "") {
          // If team member is equal to allocated team member then user can edit else not
          const teamData = JSON.parse(data['team_json']);
          if (teamData[10] === this.userInfo.id) {
            this._sharedService.setChecklistData(null);
            this._sharedService.setChecklistData(data);
            // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST]);
            this._router.navigate([]).then(result => {
              window.open('/' + AdminRoutes.EDIT_TASK_CHECKLIST, '_blank');
            });
          } else {
            this._sharedService.setChecklistViewData(null);
            this._sharedService.setChecklistViewData(data);
            // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
            this._router.navigate([]).then(result => {
              window.open('/' + AdminRoutes.TASK_CHECKLIST, '_blank');
            });
          }
        } else {
          this._sharedService.setChecklistViewData(null);
          this._sharedService.setChecklistViewData(data);
          // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
          this._router.navigate([]).then(result => {
            window.open('/' + AdminRoutes.TASK_CHECKLIST, '_blank');
          });
        }
      } else if (data.taskchecklist === 1 && (data.status_id.id === 15 || data.status_id.id === 18)) {
        // If selected status report sent
        if (data['team_json'] !== null && data['team_json'] !== "") {
          const teamData = JSON.parse(data['team_json']);
          if (teamData[9] === this.userInfo.id || teamData[60] === this.userInfo.id) {
            this._sharedService.setTamReviewChecklistData(null);
            this._sharedService.setTamReviewChecklistData(data);
            // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST_TAM]);
            this._router.navigate([]).then(result => {
              window.open('/' + AdminRoutes.EDIT_TASK_CHECKLIST_TAM, '_blank');
            });
          } else {
            this._sharedService.setChecklistViewData(null);
            this._sharedService.setChecklistViewData(data);
            // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
            this._router.navigate([]).then(result => {
              window.open('/' + AdminRoutes.TASK_CHECKLIST, '_blank');
            });
          }
        } else {
          this._sharedService.setChecklistViewData(null);
          this._sharedService.setChecklistViewData(data);
          // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
          this._router.navigate([]).then(result => {
            window.open('/' + AdminRoutes.TASK_CHECKLIST, '_blank');
          });
        }
      } else if (data.taskchecklist === 1 && (data.status_id.id === 22) && (data.worksheet_peerreviewer !== null) && (data.worksheet_peerreviewer.id === this.userInfo.id)) {
        this._sharedService.setPeerReviewChecklistData(null);
        this._sharedService.setPeerReviewChecklistData(data);
        // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST_PEER_REVIEW]);
        this._router.navigate([]).then(result => {
          window.open('/' + AdminRoutes.EDIT_TASK_CHECKLIST_PEER_REVIEW, '_blank');
        });
      } else if (data.taskchecklist === 1 && (data.status_id.id === 17)) {
        if (data['team_json'] !== null && data['team_json'] !== "") {
          const teamData = JSON.parse(data['team_json']);
          if (teamData[9] === this.userInfo.id || teamData[60] === this.userInfo.id) {
            this._sharedService.setReviewChecklistData(null);
            this._sharedService.setReviewChecklistData(data);
            // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST_KNOCKBACK]);
            this._router.navigate([]).then(result => {
              window.open('/' + AdminRoutes.EDIT_TASK_CHECKLIST_KNOCKBACK, '_blank');
            });
          } else {
            this._sharedService.setChecklistViewData(null);
            this._sharedService.setChecklistViewData(data);
            // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
            this._router.navigate([]).then(result => {
              window.open('/' + AdminRoutes.TASK_CHECKLIST, '_blank');
            });
          }
        } else {
          this._sharedService.setChecklistViewData(null);
          this._sharedService.setChecklistViewData(data);
          // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
          this._router.navigate([]).then(result => {
            window.open('/' + AdminRoutes.TASK_CHECKLIST, '_blank');
          });
        }
      } else {
        this._sharedService.setChecklistViewData(null);
        this._sharedService.setChecklistViewData(data);
        // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
        this._router.navigate([]).then(result => {
          window.open('/' + AdminRoutes.TASK_CHECKLIST, '_blank');
        });
      }
    }
  }

  /**
   * on edit master activity account data
   * @param data
   */
  onEditTaskCheckListAccount(data: WorksheetListing) {
    // console.log('td');
    if (data.status_id.id < 2 || data.status_id.id === 9) {
      this._sharedService.setChecklistData(null);
      this._sharedService.setChecklistData(data);
      // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST]);
      this._router.navigate([]).then(result => {
        window.open('/' + AdminRoutes.EDIT_TASK_CHECKLIST, '_blank');
      });
    } else {
      this._sharedService.setChecklistViewData(null);
      this._sharedService.setChecklistViewData(data);
      // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
      this._router.navigate([]).then(result => {
        window.open('/' + AdminRoutes.TASK_CHECKLIST, '_blank');
      });
    }
  }

  onPreviewEmail() {
    this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST_EMAIL_PREVIEW]);
  }

  onAllocateAssigneeDialog(worksheet: WorksheetListing) {
    const dialogRef = this.dialog.open(ReviewActionAllocateReviewerDialog, {
      panelClass: 'add-form-dialog-container',
      data: {
        allocateData: worksheet,
        isadditionalAssignee: 1
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.getMasterActivityList(1, '', 'desc');
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
   *  on redirect prepare query
   */
  onPrepareQuery(worksheetData: WorksheetListing) {
    this._sharedService.setClientData(GLOBALDATAKEYS.QUERY_WORKSHEET_MODULE, null);
    this._sharedService.setClientData(GLOBALDATAKEYS.QUERY_WORKSHEET_MODULE, worksheetData);
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.PREPARE_QUERY, '_blank');
    });
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

    params['type'] = 'my';
    return params;
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
