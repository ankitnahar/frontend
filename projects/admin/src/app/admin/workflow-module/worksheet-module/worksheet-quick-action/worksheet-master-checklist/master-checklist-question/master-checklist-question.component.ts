import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialog, PageEvent} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ConfirmationDialogComponent} from '../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {activeInactive, BASE} from '../../../../../../../utility/constants/base-constants';
import {MasterChecklistQuestion} from './master-checklist-question.model';
import {AddMasterChecklistQuestionDialog} from './add-master-cheklist-question-dialog/add-master-checklist-question-dialog';
import {Subject} from 'rxjs';
import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';
import {SharedObjService} from '../../../../../../../utility/shared-service/shared-object.service';

@Component({
  selector: 'app-master-checklist-question',
  templateUrl: './master-checklist-question.component.html',
  styleUrls: ['./master-checklist-question.component.scss'],
})
export class MasterChecklistQuestionComponent implements OnInit {

  // Constant Variables

  // Data Variables
  masterCheckList: MasterChecklistQuestion[] = [];
  tagList: any[] = [];
  masterChackList = [];
  masterActivityData = [];
  taskData = [];
  taskDataMain = [];
  groupArray = [];
  objectData = [];

  // Form Variables
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;
  filterMasterChecklistQuestionForm: FormGroup;

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
  isOpenFilter = false;
  isOpenHistoryDialog = false;
  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  slideData = [];
  groupSelectedValue: any;

  // userList: Observable<Clients[]>;
  userList: AdminUser[] = [];
  userListAll = [];
  userListLoading = false;
  userListinput = new Subject<string>();
  activeInactiveList = activeInactive;

  constructor(private _fb: FormBuilder,
              public dialog: MatDialog,
              public _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService
  ) {

  }

  get masterChecklistId(): AbstractControl {
    return this.filterForm.get('master_checklist_id');
  }

  get masterActvitiyId(): AbstractControl {
    return this.filterForm.get('master_activity_id');
  }

  get taskId(): AbstractControl {
    return this.filterForm.get('task_id');
  }

  get checklistGroupId(): AbstractControl {
    return this.filterForm.get('checklist_group_id');
  }

  get question_name(): AbstractControl {
    return this.filterForm.get('question_name');
  }

  get is_active(): AbstractControl {
    return this.filterForm.get('is_active');
  }

  ngOnInit() {
    this.initializationMethod();
    this.getQuestionList(1, '', 'desc');
    this.getData();
    this.getTaskAndMasterActivity();
    this.changeMasterCheckList({id: ''}, 'init');
    this.getUserList();
  }

  getQuestionList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.MASTER_CHECKLIST_QUESTION, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(response => {
      this.handleQualityControlResponse(response);
    });
  }

  handleQualityControlResponse(response) {
    this.masterCheckList = response.payload.data;
    for (let i = 0; i < this.masterCheckList.length; i++) {
      this.slideData[i] = (this.masterCheckList[i]['is_active'] === 1) ? true : false;
    }
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
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

  /**
   * Initialization Methods
   */

  initializationMethod() {
    this.createMasterChecklistForm();
    this.createFilterMasterChecklistForm();
  }

  /**
   * Create filter Master checklist Question
   */
  createMasterChecklistForm() {
    this.filterForm = this._fb.group({
      master_checklist_id: new FormControl(null),
      master_activity_id: new FormControl(null),
      checklist_group_id: new FormControl(null),
      task_id: new FormControl(null),
      question_name: new FormControl(null),
      is_active: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      master_checklist_id: new FormControl(null),
      master_activity_id: new FormControl(null),
      checklist_group_id: new FormControl(null),
      task_id: new FormControl(null),
      question_name: new FormControl(null),
      is_active: new FormControl(null)
    });
  }

  /**
   * Create filter Master checklist Question
   */
  createFilterMasterChecklistForm() {
    // this.filterMasterChecklistQuestionForm = this._fb.group({
    //   checklistName: new FormControl(''),
    //   activityName: new FormControl(''),
    //   taskName: new FormControl(''),
    //   groupName: new FormControl(''),
    //   question_name: new FormControl(''),
    //   is_active: new FormControl(''),
    //   created_on: new FormControl(''),
    //   created_by: new FormControl('')
    // });
  }

  /**
   * Add Edit Master CheckList Dialog
   */
  openAddEditMasterChecklistQuestionDialog(masterchecklist?: any) {
    let dialogRef = this.dialog.open(AddMasterChecklistQuestionDialog, {
      panelClass: 'add-form-dialog-container',
      data: {
        'masterData': masterchecklist
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getQuestionList(1, '', 'desc');
    });
  }

  /**
   *  Toggle confirmation Dialog
   */
  onDisabledConfirmDialog(event, masterchecklist: MasterChecklistQuestion, id) {
    const status = event.checked ? 'Inactive' : 'Active';
    const statusNagetive = !event.checked ? 'Inactive' : 'Active';
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Do you want change status from ' + status + ' to ' + statusNagetive
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.updateData(AdminAPI.MASTER_CHECKLIST_UPDATE_DATA, masterchecklist['id'], {
          'is_active': (event.checked === true) ? '1' : '0',
          '_method': 'put'
        }).subscribe(response => {
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

  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.MASTER_CHECKLIST_QUESTION_DOWNLOAD, params, this.getSearchParam(), 'Master Checklist Questions', 0).subscribe(response => {
    });
  }

  /**
   * Open filter method
   */
  onOpenFilter() {
    this.isOpenFilter = true;
  }

  deleteMsg(index) {
    this.tagList.splice(index, 1);
  }

  /**
   * Close filter method
   */
  onCloseFilter() {
    this.isOpenFilter = false;
  }

  /**
   * Pagination page change event
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getQuestionList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getQuestionList(1, sortKey, sortVal);
  }

  /**
   * Clear tag method
   */
  onClearTags() {
    this.createMasterChecklistForm();
    this.likeJSON = {};
    this.equalJSON = {};
    this.inJSON = {};
    this.isOpenFilter = false;
    this.getQuestionList(1, '', 'desc');
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'is_active' || elementName === 'master_checklist_id' || elementName === 'task_id' || elementName === 'checklist_group_id' || elementName === 'master_activity_id') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'question_name') {
      delete this.likeJSON[elementName];
    }

    this.getQuestionList(1, '', 'desc');
  }


  /**
   * Esc event for close modal
   * @param event
   */
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
          'master_checklist_id': form.value['master_checklist_id'],
          'master_activity_id': form.value['master_activity_id'],
          'checklist_group_id': form.value['checklist_group_id'],
          'task_id': form.value['task_id'],
          'question_name': form.value['question_name'],
          'is_active': form.value['is_active']
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
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
          delete form.value[key];
        } else {
          this.advanceFilterForm.get(key).setValue(form.value[key]);
        }
      }
    }
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'is_active' || key === 'master_checklist_id' || key === 'master_activity_id' || key === 'checklist_group_id' || key === 'task_id') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'question_name') {
            this.likeJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilter = false;
      this.getQuestionList(1, '', 'desc');
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

  getData() {
    this._commonCrudService.listData(AdminAPI.MASTER_CHECKLIST_LISTEING, {'records': 'all'}, {}).subscribe(response => {
      const mapData = response.payload.data;
      this.masterChackList = [];
      mapData.filter(mapRes => {
        if (mapRes.name) {
          this.masterChackList.push({id: mapRes.id, name: mapRes.name});
        }
      });
    });
    this._commonCrudService.listData(AdminAPI.GET_MASTER_CHECKLIST_GROUP, {'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe(response => {
      this.groupArray = response.payload.data;
    });
  }

  changeMasterCheckList(event, init?: any) {
    if (event) {
      // this._commonCrudService.listData(AdminAPI.GET_MASTER_CHECKLIST_GROUP, {'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe(response => {
      //   this.groupArray = response.payload.data;
      // });
    }
  }

  getTaskData(event) {
    const masterActivityId = event.id;
    this.taskDataMain = [];
    for (let j = 0; j < this.taskData.length; j++) {
      if (this.taskData[j].masterId === +masterActivityId) {
        this.taskDataMain.push({masterId: this.taskData[j].masterId, id: this.taskData[j].id, name: this.taskData[j].name});
      }
    }
  }

  getTaskAndMasterActivity() {
    // this._masterCheckListService.getMasterCheckListAndTaskData('').subscribe(response => {
    //     this.responseHandle(response);
    // });
    this._commonCrudService.listData(AdminAPI.MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(response => {
      this.responseHandle(response);
    });
  }

  responseHandle(data) {
    let masterData = [];
    let taskDataRef = [];
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
      this.taskData = taskDataRef;
    }, 500);
  }
}


