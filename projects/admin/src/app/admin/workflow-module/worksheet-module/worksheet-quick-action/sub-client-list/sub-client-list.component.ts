import {Component, HostListener, OnInit} from '@angular/core';
import {ConfirmationDialogComponent} from '../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {MatDialog, PageEvent} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {AddSubClientListDialog} from './add-sub-client-list-dialog/add-sub-client-list-dialog';
import {SubClient} from './subclient.model';
import {activeInactive, BASE} from '../../../../../../utility/constants/base-constants';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {BillingBasic} from '../../../../../../utility/shared-model/billing.model';
import {Privilege} from '../../../../../../utility/shared-model/admin-user.model';
import {ADMINTABACCESS} from '../../../../../../utility/constants/header-constant';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';

@Component({
  selector: 'app-sub-client-list',
  templateUrl: './sub-client-list.component.html',
  styleUrls: ['./sub-client-list.component.scss']
})
export class SubClientListComponent implements OnInit {

  // Constant Variables

  // Data Variables
  subClientList: SubClient[] = [];
  clientList: BillingBasic[] = [];
  activeInactiveList = activeInactive;
  slideActiveInactive = [];

  equalJSON = {};
  likeJSON = {};
  inJSON = {};

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Mat Paginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilterView = false;
  isOpenHistoryDialog = false;

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

  constructor(private _fb: FormBuilder, public dialog: MatDialog, public _router: Router,
              private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {

  }

  // get form control
  get entityIdField(): AbstractControl {
    return this.filterForm.get('entity_id');
  }

  get subClientField(): AbstractControl {
    return this.filterForm.get('subclient');
  }

  get activeField(): AbstractControl {
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

    this.initializationMethod();
  }

  // Initialization Methods
  initializationMethod() {
    this.getClientList();
    this.getSubClientList(1, 'id', 'desc');
    this.createAdvanceFilterForm();
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._commonCrudService.listData(AdminAPI.SUB_CLIENT_LIST_DROPDOWN, {}, {}).subscribe((response) => {
      if (response) {
        this.clientList = response.payload.data;
      }
    });
  }

  /**
   * Get Sub Client List
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getSubClientList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.SUB_CLIENT_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(Response => {
      this.handleSubClientResponse(Response);
    });
  }

  /**
   * Handle Sub Client List Response
   * @param response
   */
  handleSubClientResponse(response: any) {
    this.subClientList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Create Advance Filter Form
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      entity_id: new FormControl(null),
      subclient: new FormControl(null),
      is_active: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      entity_id: new FormControl(null),
      subclient: new FormControl(null),
      is_active: new FormControl(null)
    });
  }

  /**
   * Add Edit Sub client list Dialog
   */
  openSubClientListDialog(subClient: SubClient) {
    let dialogRef = this.dialog.open(AddSubClientListDialog, {
      panelClass: 'add-form-dialog-container',
      data: {
        subClientData: subClient
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getSubClientList(1, 'id', 'desc');
    });
  }

  /**
   *  Toggle confirmation Dialog
   */
  openToggleConfirmationDialog(event: any, subClient: SubClient, id: number) {
    const status = event.checked ? 'Inactive' : 'Active';
    const statusNagetive = !event.checked ? 'Inactive' : 'Active';
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Do you want change status from ' + status + ' to ' + statusNagetive
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this.activeInactiveSubClient(event.checked, subClient);
      } else {
        if (this.slideActiveInactive[id]) {
          this.slideActiveInactive[id] = false;
        } else {
          this.slideActiveInactive[id] = true;
        }
      }
    });
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
   * Active Inactive Sub Client List
   * @param {boolean} action
   * @param {subClient} SubClient
   */
  activeInactiveSubClient(action: boolean, subClient: SubClient) {
    const params = {'is_active': action ? 1 : 0};
    this._commonCrudService.updateDataWithPut(AdminAPI.SUB_CLIENT_UPDATE_STATUS, subClient.id, params).subscribe(response => {
      this.subClientList.map(item => {
        if (item['id'] === subClient.id) {
          item['is_active'] = item['is_active'] ? 0 : 1;
        }
        this.getSubClientList(1, 'id', 'desc');
      });
    });
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.SUB_CLIENT_LIST_EXPORT, params, this.getSearchParam(), 'Sub client ', 0).subscribe(response => {
    });
  }

  /**
   * Open modal method
   */
  onOpenModal() {
    this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
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

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getSubClientList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * sub client redirection
   */
  onWorksheetDashboard() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue('');
    this.advanceFilterForm.get(elementName).setValue('');
    if (elementName === 'is_active' || elementName === 'entity_id') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'subclient') {
      delete this.likeJSON[elementName];
    }
    this.getSubClientList(1, this.sortBy, this.sortOrder);
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
    this.isOpenFilterView = false;
    this.getSubClientList(1, 'id', 'desc');
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
          'entity_id': (form.value['entity_id']) ? form.value['entity_id'] : null,
          'subclient': form.value['subclient'],
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
    // removing empty key from object
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

    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'is_active' || key === 'entity_id') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'subclient') {
            this.likeJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilterView = false;
      this.getSubClientList(1, 'id', 'desc');
    }
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
   * get function for returning pageNumber and page size at time of listing api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{}}
   */
  getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
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
    this.getSubClientList(1, sortKey, sortVal);
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};
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
}
