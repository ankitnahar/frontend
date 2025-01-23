import {Component, HostListener, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {MatDialog, PageEvent} from '@angular/material';
import * as moment from 'moment';
import {CommonFunctions} from '../../../../../../utility/common-functions';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {WorksheetListing, WorksheetStatus} from '../../worksheet-dashboard-tab/worksheet.model';
import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';
import {MasterActivity} from '../../worksheet-quick-action/hierarchy/master-activity/master-activity.model';
import {TaskList} from '../../worksheet-quick-action/hierarchy/task-list/task-list.model';
import {Clients} from '../../../../client-module/view-client/view-client.model';
import {Frequency} from '../../../../../../utility/shared-model/frequency.model';
import {BASE, category, worksheetStatusLog, yesNo} from '../../../../../../utility/constants/base-constants';
import {ConfirmationDialogComponent} from '../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';

export enum Views {
  FILTER_VIEW_MAIN
}

@Component({
  selector: 'app-change-multiple-worksheet-status',
  templateUrl: './change-multiple-worksheet-status.component.html',
  styleUrls: ['./change-multiple-worksheet-status.component.scss']
})
export class ChangeMultipleWorksheetStatusComponent extends BaseComponent implements OnInit {

  // Constant Variables
  enumView = Views;
  activeView: Views;

  isChangeStatusItem = true;

  // Data Variables
  worksheetListData: WorksheetListing[] = [];
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
  selectedWorksheetIDs = [];
  selectAllWorksheetIDS = false;
  updateStatusToPost = 0;
  todayDate = '';
  previousDate: any;
  nextDate: any;
  minPreviousMonth = 3;
  maxNextMonth = 4;

  constructor(private _fb: FormBuilder,
              public dialog: MatDialog,
              public _commonCrudService: CommonCrudService,
              private _router: Router,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService) {
    super();
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
    this.todayDate = moment(new Date()).format('YYYY-MM-DD');
    const todaysdate = new Date();
    const year = todaysdate.getFullYear();
    const month = todaysdate.getMonth();
    const day = todaysdate.getDate();
    this.previousDate = new Date(year, month - this.minPreviousMonth, 1);
    this.nextDate = new Date(year, month + this.maxNextMonth, 0);
    this.DueDateToValue = this.nextDate;
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
    // Get Worksheet Status
    this._sharedObjService.getWorksheetStatusRightsWise({'records': 'all'}, {}).subscribe((response) => {
      this.worksheetStatusList = response;
    });
    // Get User List
    this._sharedObjService.getUserList({'records': 'all'}, {}).subscribe((response) => {
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
    this._commonCrudService.listData(AdminAPI.INCOMPLETE_WORKSHEET_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(response => {
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
      entity_id: new FormControl(null),
      master_activity_id: new FormControl(null),
      task_id: new FormControl(null),
      frequency_id: new FormControl(null),
      start_date: new FormControl(null),
      end_date: new FormControl(null),
      due_date_from: new FormControl(),
      due_date_to: new FormControl(this.DueDateToValue),
      category_id: new FormControl(null),
      related_entity: new FormControl(null),
      status_id: new FormControl(null),
      technical_account_manager: new FormControl(null),
      team_member: new FormControl(null),
      additional_assignee: new FormControl(null),
      lock_worksheet: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      entity_id: new FormControl(null),
      master_activity_id: new FormControl(null),
      task_id: new FormControl(null),
      frequency_id: new FormControl(null),
      start_date: new FormControl(null),
      end_date: new FormControl(null),
      due_date_from: new FormControl(),
      due_date_to: new FormControl(this.DueDateToValue),
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
   * open filter
   */
  onOpenFilter() {
    this.isOpenFilter = true;
  }

  onCloseFilter() {
    this.isOpenFilter = false;
  }

  onWorkflow() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  /**
   * Esc event for close modal and filter
   * @param event
   */
  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onCloseFilter();
    }
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
    this.likeJSON = {};
    this.equalJSON = {};
    this.inJSON = {};
    this.PeriodFromValue = null;
    this.PeriodToValue = null;
    this.DueDateFromValue = null;
    this.DueDateToValue = null;
    this.isOpenFilter = false;
    this.createAdvanceFilterForm();
    this.setAdvanceFilter(this.filterForm);
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

    params['type'] = 'incompleted';
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
    const params = {'excel': 1, 'records': 'all', 'type': 'incompleted'};
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
          if (key === 'entity_id' || key === 'frequency_id'
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
      this.getWorksheetListing(1, '', 'desc');
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
    } else if (elementName === 'entity_id' || elementName === 'frequency_id'
      || elementName === 'related_entity' || elementName === 'status_id' || elementName === 'lock_worksheet') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'category_id' || elementName === 'master_activity_id' || elementName === 'task_id') {
      delete this.inJSON[elementName];
    }
    this.getWorksheetListing(1, '', 'desc');
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
  getStatusName(status_id: number): string {
    const val = this.statusArray.filter(elem => elem.id === Number(status_id));
    return (val.length) ? val[0].status_name : '';
  }

  /**
   * Change Update Status
   * @param status_id
   */
  changeStatusUpdate(status_id: number) {
    this.updateStatusToPost = status_id;
  }

  /**
   * Used for update multiple worksheet
   */
  onConfirmationDialogChangeStatus() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to change status?'
      }
    });
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        const params = {'id': this.selectedWorksheetIDs, 'status_id': this.updateStatusToPost};
        this._commonCrudService.addData(AdminAPI.UPDATE_WORKSHEET_MULTIPLESTATUS, params).subscribe(response => {
          this.selectedWorksheetIDs = [];
          this.getWorksheetListing(1, '', 'desc');
        });
      }
    });
  }

  /**
   * Select All Item of Event
   * @param event
   */
  onSelectAllItem(event: boolean) {
    this.selectedWorksheetIDs = [];
    if (event) {
      this.selectAllWorksheetIDS = true;
      const items = this.worksheetListData.filter(data => (data.id > 0));
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
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
