import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, PageEvent} from '@angular/material';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {ConfirmationDialogComponent} from '../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {AddEditTrainingDialog} from './add-edit-training-dialog/add-edit-training-dialog';
import {TrainingList} from './training-list.model';
import {BASE} from '../../../../../../utility/constants/base-constants';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {ADMINTABACCESS} from '../../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../../utility/shared-model/admin-user.model';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.scss'],
  providers: [CommonCrudService]
})
export class TrainingListComponent implements OnInit {

  // Data Variables
  trainingList: TrainingList[] = [];
  masterCheckList: any[] = [];
  tagList: any[] = [];
  slideData = [];

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;


  // MatPaginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilter = false;
  isOpenHistoryDialog = false;
  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  FromValue = null;
  ToValue = null;
  isOpenFilterView = false;
  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

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

  constructor(public _router: Router,
              public dialog: MatDialog,
              public _commonCrudService: CommonCrudService,
              private _fb: FormBuilder, private _sharedService: SharedService) {
  }

  get trainingNameField(): AbstractControl {
    return this.filterForm.get('traning_name');
  }

  get statusField(): AbstractControl {
    return this.filterForm.get('is_active');
  }

  ngOnInit() {
    this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
    this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
    this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
    this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
    this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
    this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
    this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);

    this.getTrainingList(1, '', 'desc');
    this.initializationMethod();
    this.createAdvanceFilterForm();
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue('');
    this.advanceFilterForm.get(elementName).setValue('');
    if (elementName === 'is_active') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'traning_name') {
      delete this.likeJSON[elementName];
    }

    this.getTrainingList(1, '', 'desc');
  }


  /**
   * Open filter method
   */
  onOpenFilter() {
    this.isOpenFilterView = true;
  }

  /**
   * Close filter method
   */
  onCloseFilter() {
    this.isOpenFilterView = false;
  }

  /**
   * Toogle Filter
   */
  onToggleFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  getTrainingList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.TRAINING_DATA_LISTEING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(response => {
      this.handleQualityControlResponse(response);
    });
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

  handleQualityControlResponse(response: any) {
    this.trainingList = response.payload.data;

    for (let i = 0; i < this.trainingList.length; i++) {
      this.slideData[i] = (this.trainingList[i].is_active === 1) ? true : false;
    }

    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
  }

  /**
   * change InOutTime direction
   */

  onOpenAddEditTrainingDialog(trainingList?: TrainingList) {
    const dialogRef = this.dialog.open(AddEditTrainingDialog, {
      panelClass: 'training-list-dialog-container',
      data: {
        'trainingData': trainingList
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getTrainingList(1, '', 'desc');
    });
  }

  onConfirmDialog() {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to change status?'
      }
    });
  }

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getTrainingList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  deleteMsg(index) {
  }

  onClearTags() {
    this.createAdvanceFilterForm();
    this.likeJSON = {};
    this.equalJSON = {};
    this.inJSON = {};
    this.isOpenFilterView = false;
    this.getTrainingList(1, '', 'desc');
  }

  onWorksheetDashboard() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
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

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilter = false;
    }
  }

  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.TRAINING_LIST_DOWNLOAD, params, '', 'Trainging', 0).subscribe(response => {
    });
  }

  onDisabledConfirmDialog(event, trainingListData: TrainingList, id) {

    // console.log(this.slideData[id]);
    const status = event.checked ? 'Inactive' : 'Active';
    const statusNagetive = !event.checked ? 'Inactive' : 'Active';
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Do you want change status from ' + status + ' to ' + statusNagetive
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.updateData(AdminAPI.TRAINING_EDIT_DATA, trainingListData.id, {
          'is_active': (event.checked === true) ? '1' : '0',
          'traning_name': trainingListData.traning_name,
          '_method': 'put'
        }).subscribe(response => {
          this.getTrainingList(1, '', 'desc');
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
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getTrainingList(1, sortKey, sortVal);
  }

  /**
   * Create a filter form
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      traning_name: new FormControl(''),
      is_active: new FormControl('')
    });

    this.advanceFilterForm = this._fb.group({
      traning_name: new FormControl(''),
      is_active: new FormControl('')
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
          'traning_name': form.value['traning_name'],
          'is_active': form.value['is_active'],
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
          if (flag) {
            this.advanceFilterForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }

    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'is_active') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'traning_name') {
            this.likeJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilterView = false;
      this.getTrainingList(1, '', 'desc');
    }
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
}
