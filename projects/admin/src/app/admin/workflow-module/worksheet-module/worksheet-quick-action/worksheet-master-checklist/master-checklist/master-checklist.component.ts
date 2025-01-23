import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ConfirmationDialogComponent} from '../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
// import { MasterChecklistService } from './master-checklist.service';
import {activeInactive, BASE} from '../../../../../../../utility/constants/base-constants';
import {MasterChecklist} from './master-checklist.model';
import {AddMasterChecklistDialog} from './add-master-checklist-dialog/add-master-checklist-dialog';
import {SharedObjService} from '../../../../../../../utility/shared-service/shared-object.service';
import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../utility/constants/api';

@Component({
  selector: 'app-master-checklist',
  templateUrl: './master-checklist.component.html',
  styleUrls: ['./master-checklist.component.scss'],
})
export class MasterChecklistComponent implements OnInit {

  // Constant Variables

  // Data Variables
  masterCheckList: any[] = [];
  tagList: any[] = [];
  data: MasterChecklist[] = [];
  taskData = [];
  masterActivityData = [];
  taskDataMain = [];
  activeInactiveList = activeInactive;
  selectBoxData: any;
  taskIdData: any;

  userList: AdminUser[] = [];
  // Form Variables
  masterCheklistFilterForm: FormGroup;
  filterMasterChecklistForm: FormGroup;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;
  slideData = [];

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // search param
  equalJSON = {};
  likeJSON = {};
  inJSON = {};

  // Other Variables
  isOpenFilter = false;
  isOpenHistoryDialog = false;

  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;


  constructor(private _fb: FormBuilder,
              public dialog: MatDialog,
              private _sharedObjService: SharedObjService,
              private _commonCrudService: CommonCrudService) {
  }

  get name(): AbstractControl {
    return this.filterForm.get('name');
  }

  get master_activity_id(): AbstractControl {
    return this.filterForm.get('master_activity_id');
  }

  get task_id(): AbstractControl {
    return this.filterForm.get('task_id');
  }

  get is_active(): AbstractControl {
    return this.filterForm.get('is_active');
  }

  get created_on(): AbstractControl {
    return this.filterForm.get('created_on');
  }

  get created_by(): AbstractControl {
    return this.filterForm.get('created_by');
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue('');
    this.advanceFilterForm.get(elementName).setValue('');
    if (elementName === 'is_active' || elementName === 'master_activity_id' || elementName === 'task_id' || elementName === 'created_on' || elementName === 'created_by') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'name') {
      delete this.likeJSON[elementName];
    }
    this.getMasterCheckList(1, '', 'desc');
  }


  ngOnInit() {
    this.getMasterCheckList(1, '', 'desc');
    this.createMasterChecklistForm();
    this.createFilterMasterChecklistForm();
    this.initializationMethod();
    this.createAdvanceFilterForm();
    this.getTaskAndMasterActivity();
    this.getUserList();
  }

  getMasterCheckList(pageNumber: number, key?: string, val?: string) {
    // this._masterCheckListService.listMasterCheckList(this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(response => {
    //   this.handleQualityControlResponse(response);
    // });

    this._commonCrudService.listData(AdminAPI.MASTER_CHECKLIST_LISTEING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(response => {
      this.handleQualityControlResponse(response);
    });
  }

  handleQualityControlResponse(response: any) {
    this.masterCheckList = response.payload.data;
    for (let i = 0; i < this.masterCheckList.length; i++) {
      this.slideData[i] = (this.masterCheckList[i].is_active === 1) ? true : false;
    }
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * get function for returning pageNumber and page size at time of listing api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{pageNumber: number; recordsPerPage: number}}
   */
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
   * Download Excel file
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    // this._masterCheckListService.downloadExcel(params, '').subscribe(response => {
    // });
    this._commonCrudService.downloadExcelData(AdminAPI.MASTER_CHECKLIST_EXCEL_DOWNLOAD, params, this.getSearchParam(), 'master-checklist', 0).subscribe(response => {
    });
  }

  /**
   * Create filter Master checklist
   */
  createMasterChecklistForm() {
    this.masterCheklistFilterForm = this._fb.group({
      masterCheklistFilterForm: new FormControl(''),
      name: new FormControl(null),
      master_activity_id: new FormControl(null),
      task_id: new FormControl(null),
      is_active: new FormControl(null),
      created_on: new FormControl(null),
      created_by: new FormControl(null)
    });
  }

  /**
   * Create filter Master checklist
   */
  createFilterMasterChecklistForm() {
    this.filterMasterChecklistForm = this._fb.group({
      filterMasterChecklistForm: new FormControl(null),
      name: new FormControl(null),
      master_activity_id: new FormControl(null),
      task_id: new FormControl(null),
      is_active: new FormControl(null),
      created_on: new FormControl(null),
      created_by: new FormControl(null)
    });
  }

  /*  onSubmitEmployeeForm(form: FormGroup) {
      if (form.valid) {
      }
    }*/

  /**
   * Initialization Methods
   */
  initializationMethod() {

  }

  /**
   * Add Edit Master CheckList Dialog
   */
  openAddEditMasterChecklistDialog(data?: MasterChecklist) {
    let dialogRef = this.dialog.open(AddMasterChecklistDialog, {
      panelClass: 'add-form-dialog-container',
      data: {
        'edit_data': data
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getMasterCheckList(1, '', 'desc');
    });
  }

  /**
   *  Toggle confirmation Dialog
   */
  openToggleConfirmationDialog(event, data: MasterChecklist, id) {
    const status = event.checked ? 'Inactive' : 'Active';
    const statusNagetive = !event.checked ? 'Inactive' : 'Active';
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Do you want change status from ' + status + ' to ' + statusNagetive
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        // this._masterCheckListService.updateMasterCheckListData(data['id'],
        //  { "is_active": (this.slideData[id] === true) ? '1' : '0', '_method': 'put' }).subscribe(response => {
        // });

        this._commonCrudService.updateData(AdminAPI.UPDATE_MASTER_CHECKLIST_DATA, data['id'], {
          'is_active': (this.slideData[id] === true) ? '1' : '0', '_method': 'put'
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
    this.getMasterCheckList(event.pageIndex + 1, this.sortBy, this.sortOrder);
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
    this.getMasterCheckList(1, '', 'desc');
  }


  /**
   * Create a filter form
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      name: new FormControl(null),
      master_activity_id: new FormControl(null),
      task_id: new FormControl(null),
      is_active: new FormControl(null),
      created_on: new FormControl(null),
      created_by: new FormControl(null),
    });

    this.advanceFilterForm = this._fb.group({
      name: new FormControl(null),
      master_activity_id: new FormControl(null),
      task_id: new FormControl(null),
      is_active: new FormControl(null),
      created_on: new FormControl(null),
      created_by: new FormControl(null),
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
          'name': form.value['name'],
          'master_activity_id': form.value['master_activity_id'],
          'task_id': form.value['task_id'],
          'is_active': form.value['is_active'],
          'created_on': form.value['created_on'],
          'created_by': form.value['created_by'],
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
          if (key === 'is_active' || key === 'master_activity_id' || key === 'task_id' || key === 'created_on' || key === 'created_by') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'name') {
            this.likeJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilter = false;
      this.getMasterCheckList(1, '', 'desc');
    }
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
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getMasterCheckList(1, sortKey, sortVal);
  }

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

  getTaskData(event: any) {
    const masterActivityId = event.id;
    this.taskDataMain = [];
    for (let j = 0; j < this.taskData.length; j++) {
      if (this.taskData[j].masterId === +masterActivityId) {
        this.taskDataMain.push({masterId: this.taskData[j].masterId, id: this.taskData[j].id, name: this.taskData[j].name});
      }
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


}
