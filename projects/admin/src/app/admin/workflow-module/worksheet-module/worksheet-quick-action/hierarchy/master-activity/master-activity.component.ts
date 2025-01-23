import {Component, HostListener, OnInit} from '@angular/core';
import {ConfirmationDialogComponent} from '../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {MatDialog, PageEvent} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AddMasterActivityDialog} from './add-master-activity/add-master-activity-dialog';
// crud import
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {BASE, yesNo} from '../../../../../../../utility/constants/base-constants';
import {MasterActivity} from './master-activity.model';
import {Subject} from 'rxjs';
import {SharedObjService} from '../../../../../../../utility/shared-service/shared-object.service';
import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';


@Component({
  selector: 'app-master-activity',
  templateUrl: './master-activity.component.html',
  styleUrls: ['./master-activity.component.scss'],
  // MasterChecklistService
})
export class MasterActivityComponent implements OnInit {

  // Constant Variables

  // Data Variables
  masterActivityListData: MasterActivity[] = [];
  tagList: any[] = [];
  slideData = [];
  userList: AdminUser[] = [];
  userListAll = [];
  userListLoading = false;
  userListinput = new Subject<string>();
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
  findInSetJSON = {};
  likeJSON = {};
  inJSON = {};

  constructor(private _fb: FormBuilder,
              public dialog: MatDialog,
              public _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService
  ) {
  }

  get code(): AbstractControl {
    return this.filterForm.get('code');
  }

  get id(): AbstractControl {
    return this.filterForm.get('id');
  }

  get user_team_id(): AbstractControl {
    return this.filterForm.get('user_team_id');
  }

  get inschedule(): AbstractControl {
    return this.filterForm.get('inschedule');
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
    this._commonCrudService.listData(AdminAPI.MASTER_ACTIVITY, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(response => {
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
      code: new FormControl(null),
      id: new FormControl(null),
      user_team_id: new FormControl(null),
      inschedule: new FormControl(null),
      modified_on: new FormControl(null),
      created_by: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      code: new FormControl(null),
      id: new FormControl(null),
      user_team_id: new FormControl(null),
      inschedule: new FormControl(null),
      modified_on: new FormControl(null),
      created_by: new FormControl(null)
    });
  }

  /**
   * Add Edit Master Activity Dialog
   */
  openAddEditMasterActivityDialog(data?: MasterActivity) {
    let dialogRef = this.dialog.open(AddMasterActivityDialog, {
      panelClass: 'add-form-dialog-container',
      data: {
        activityData: data
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getMasterActivityList(1, '', 'desc');
    });
  }

  // initializationMethod() {
  //     for (let i = 0; i < 20; i++) {
  //         let obj = {
  //             code: '41',
  //             masteractivity: 'Preparation & Lodgment of IAS (BK)',
  //             associatedteam: 'Bookkeeping',
  //             inworksheetschedule: 'Yes',
  //             modified: '26-12-2017 by Dilip'
  //         };
  //         this.masterActivityList.push(obj);
  //     }

  //     this.tagList = [
  //         { label: 'Staff Name', value: 'Alok Shukla', isDropdown: true, isTimePicker: false },
  //         { label: 'Shift Name', value: 'Chandkheda', isDropdown: true, isTimePicker: false },
  //         { label: 'Time', value: '12:30', isDropdown: false, isTimePicker: true },
  //     ];
  // }

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
    this.findInSetJSON = {};
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
        this._commonCrudService.updateData(AdminAPI.MASTER_ACTIVITY, data.id, {
          'is_active': (event.checked === true) ? '1' : '0',
          '_method': 'put',
          'name': data.name,
          'team_id': data.user_team_id,
          'inschedule': data.inschedule
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
    if (Object.keys(this.findInSetJSON).length !== 0) {
      params['findinset'] = this.findInSetJSON;
    }

    return params;
  }

  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.MASTER_ACTIVITY_DOWNLOAD, params, this.getSearchParam(), 'Master Activity', 0).subscribe(response => {
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
          'code': form.value['code'],
          'id': form.value['id'],
          'user_team_id': form.value['user_team_id'],
          'inschedule': form.value['inschedule'],
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
          if (key === 'id' || key === 'inschedule' || key === 'modified_on' || key === 'created_by') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'code') {
            this.likeJSON[key] = form.value[key];
          } else if (key === 'user_team_id') {
            this.findInSetJSON['user_team_id'] = [form.value[key]];
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
    if (elementName === 'code' || elementName === 'id' || elementName === 'inschedule' || elementName === 'modified_on' || elementName === 'created_by') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'user_team_id') {
      delete this.findInSetJSON[elementName];
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
    //     this.responseHandle(response);
    // });
    this._commonCrudService.listData(AdminAPI.MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(response => {
      this.responseHandle(response);
    });
  }

  responseHandle(data) {
    // console.log(data);
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
      this.teamData.push({'id': response.id, 'name': response.team_name, 'is_active': response.is_active});
    });
  }

  getTeamName(teamName: string) {
    const name = [];
    // console.log(teamName);
    if (teamName) {
      const itemName = teamName.split(',');
      itemName.forEach(itemKey => {
        // console.log(itemKey);
        const itemData = this.teamData.filter(item => item['id'] === Number(itemKey));
        // console.log(itemData);
        if (itemData.length) {
          name.push(itemData[0]['name']);
        }
      });
    }
    return (name) ? name.join(',') : null;
  }
}
