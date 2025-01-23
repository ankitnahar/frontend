import {Component, HostListener, OnInit} from '@angular/core';
import {ConfirmationDialogComponent} from '../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {MatDialog, PageEvent} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AddTaskListDialog} from './add-task-list/add-task-list-dialog';
// crud
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {BASE, yesNo} from '../../../../../../../utility/constants/base-constants';
import {TaskList} from './task-list.model';
import {SharedObjService} from '../../../../../../../utility/shared-service/shared-object.service';
import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {

  // Constant Variables

  // Data Variables
  masterActivityListData: TaskList[] = [];
  tagList: any[] = [];
  slideData = [];
  userList: AdminUser[] = [];
  masterActivityData = [];
  teamData = [];
  yesNoList = yesNo;
  // Form Variables
  advanceFilterForm: FormGroup;
  filterForm: FormGroup;

  // MatPaginator Inputs
  length = 100;
  pageSizeOptions = [5, 10, 25, 100];

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

  constructor(private _fb: FormBuilder,
              public dialog: MatDialog,
              public _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService
  ) {

  }

  get master_activity_id(): AbstractControl {
    return this.filterForm.get('master_activity_id');
  }

  get name(): AbstractControl {
    return this.filterForm.get('name');
  }

  get ask_repeat_task(): AbstractControl {
    return this.filterForm.get('ask_repeat_task');
  }

  get modified_on(): AbstractControl {
    return this.filterForm.get('modified_on');
  }

  get created_by(): AbstractControl {
    return this.filterForm.get('created_by');
  }

  ngOnInit() {
    this.createAdvanceFilterForm();
    this.getMasterActivityList(1, '', 'desc');
    this.getUserList();
    this.getTaskAndMasterActivity();
    this.getTaskData();
  }

  getMasterActivityList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.GET_TASK_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(response => {
      this.handleQualityControlResponse(response);
    });
  }

  handleQualityControlResponse(response) {
    // console.log(response);
    this.masterActivityListData = response.payload.data;
    // console.log(JSON.stringify(this.masterActivityListData));
    for (let i = 0; i < this.masterActivityListData.length; i++) {
      this.slideData[i] = (this.masterActivityListData[i]['is_active'] === 1) ? true : false;
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
      master_activity_id: new FormControl(null),
      name: new FormControl(null),
      ask_repeat_task: new FormControl(null),
      modified_on: new FormControl(null),
      created_by: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      master_activity_id: new FormControl(null),
      name: new FormControl(null),
      ask_repeat_task: new FormControl(null),
      modified_on: new FormControl(null),
      created_by: new FormControl(null)
    });
  }

  /**
   * Add Edit Master Activity Dialog
   */
  openAddEditMasterActivityDialog(data: TaskList) {
    let dialogRef = this.dialog.open(AddTaskListDialog, {
      panelClass: 'add-form-dialog-container',
      data: {
        listData: data
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getMasterActivityList(1, '', 'desc');
    });
  }

  /**
   * Toogle Filter
   */
  onToggleFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  deleteMsg(index) {
    this.tagList.splice(index, 1);
  }

  /**
   * Pagination page change event
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getMasterActivityList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Clear tag method
   */
  onClearTags() {
    this.createAdvanceFilterForm();
    this.likeJSON = {};
    this.equalJSON = {};
    this.inJSON = {};
    this.isOpenFilter = false;
    this.getMasterActivityList(1, '', 'desc');
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
   *  Toggle confirmation Dialog
   */
  onDisabledConfirmDialog(event, data, id) {
    // console.log(this.slideData[id]);
    // console.log(data);
    const status = event.checked ? 'Inactive' : 'Active';
    const statusNagetive = !event.checked ? 'Inactive' : 'Active';
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Do you want change status from ' + status + ' to ' + statusNagetive
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.updateData(AdminAPI.GET_TASK_LIST, data.id, {
          'is_active': (event.checked === true) ? 1 : 0,
          '_method': 'put',
          'name': data.name,
          'master_activity_id': data.master_activity,
          'ask_repeat_task': data.ask_repeat_task,
          'is_complete_task_pop_required': data.is_complete_task_pop_required,
          'exclude_assignee': data.exclude_assignee
        }).subscribe(response => {
          this.getMasterActivityList(1, '', 'desc');
        });
      } else {
        if (this.slideData[id]) {
          this.slideData[id] = false;
        } else {
          this.slideData[id] = true;
        }
      }
    });
  }

  private getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
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
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getMasterActivityList(1, sortKey, sortVal);
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};

    const startFilterData = {};
    const endFilterData = {};

    // check for the object wheather its empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }
    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length) {
      params['compare'] = filter;
    }
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }
    return params;
  }

  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.TASK_LIST_DOWNLOAD, params, this.getSearchParam(), 'Task List', 0).subscribe(response => {
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
          'master_activity_id': form.value['master_activity_id'],
          'name': form.value['name'],
          'ask_repeat_task': form.value['ask_repeat_task'],
          'modified_on': form.value['modified_on'],
          'created_by': form.value['created_by'],
        });
      // console.log(this.filterForm.value);
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
        // console.log(form.value['name']);
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined || form.value[key] === 'undefined') {
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
          if (key === 'master_activity_id' || key === 'ask_repeat_task' || key === 'modified_on' || key === 'created_by') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'name') {
            this.likeJSON[key] = form.value[key];
          }
        }
      }
      // console.log(this.equalJSON);
      this.isOpenFilterView = false;
      this.getMasterActivityList(1, '', 'desc');
    }
    // {"compare":{"equal":{"name":"Payroll team"}}}
    // {"compare":{"equal":{"code":"","name":"BK General(Non chargeable)"}}}
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
    this.filterForm.get(elementName).setValue('');
    this.advanceFilterForm.get(elementName).setValue('');
    if (elementName === 'master_activity_id' || elementName === 'name' || elementName === 'ask_repeat_task' || elementName === 'modified_on' || elementName === 'created_by') {
      delete this.equalJSON[elementName];
    }
    //  else if (elementName === "name") {
    //     delete this.likeJSON[elementName];
    // }
    this.getMasterActivityList(1, '', 'desc');
  }

  /**
   * get activity data
   */
  getTaskAndMasterActivity() {
    // this._masterCheckListService.getMasterCheckListAndTaskData('').subscribe(response => {
    //   this.responseHandle(response);
    // });
    this._commonCrudService.listData(AdminAPI.MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(response => {
      this.responseHandle(response);
    });
  }

  responseHandle(data) {
    let masterData = [];
    let taskDataRef = [];
    // console.log(data);
    for (const i in data.payload.data.masterActivity) {
      if (i) {
        masterData.push({id: i, name: data.payload.data.masterActivity[i]});
      }
    }

    for (const i in data.payload.data.task) {
      if (i) {
        for (let j = 0; j < data.payload.data.task[i].length; j++) {
          taskDataRef.push({
            id: data.payload.data.task[i][j].id,
            masterId: data.payload.data.task[i][j].master_activity_id,
            name: data.payload.data.task[i][j].name
          });
        }
      }
    }
    setTimeout(res => {
      this.masterActivityData = masterData;
    }, 500);
  }

  /**
   * get task data
   */
  getTaskData() {
    this._commonCrudService.listData(AdminAPI.TEAM, {}, {}).subscribe(response => {
      this.responseTeamHandle(response);
    });
  }

  responseTeamHandle(data) {
    let allData = data.payload.data;
    allData.filter(response => {
      // console.log(response);
      this.teamData.push({'id': response.service_id, 'name': response.team_name, 'is_active': response.is_active});
    });
  }

  /**
   * Add Edit TaskList Dialog
   */
  openAddEditTaskListDialog() {
    let dialogRef = this.dialog.open(AddTaskListDialog, {
      panelClass: 'add-form-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
