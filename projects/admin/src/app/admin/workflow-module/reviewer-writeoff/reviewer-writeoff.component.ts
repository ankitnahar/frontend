import {Component, HostListener, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {ReviewerWriteoffCommentsDialogComponent} from './reviewer-writeoff-comments-dialog/reviewer-writeoff-comments-dialog.component';
import {ReviewerWriteoffApproveCommentsDialogComponent} from './reviewer-writeoff-approve-comments-dialog/reviewer-writeoff-approve-comments-dialog.component';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {ReviewerWriteoff} from './reviewer-writeoff.model';
import {BASE, reviewerWriteOffYesNo} from '../../../../utility/constants/base-constants';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import {AdminUser, Privilege} from '../../../../utility/shared-model/admin-user.model';
import {Clients} from '../../client-module/view-client/view-client.model';
import {AdminAPI} from '../../../../utility/constants/api';
import * as moment from 'moment';
import {CommonFunctions} from '../../../../utility/common-functions';
import {CommonHistoryDialogComponent} from '../../../../utility/components/common-history-dialog/common-history-dialog.component';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';

@Component({
  selector: 'app-reviewer-writeoff',
  templateUrl: './reviewer-writeoff.component.html',
  styleUrls: ['./reviewer-writeoff.component.scss']
})
export class ReviewerWriteoffComponent implements OnInit {

  // Data Variable
  reviewWriteoff: ReviewerWriteoff[] = [];
  reviewerList: AdminUser[] = [];
  clientList: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  clientListParent: Clients[] = [];

  yesNoList = reviewerWriteOffYesNo;
  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  equalJSON = {'is_active': 1};
  likeJSON = {};
  inJSON = {};

  PeriodFromValue = null;
  PeriodToValue = null;
  CreatedFromValue = null;
  CreatedToValue = null;

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
  staffCount = 0;
  dhCount = 0;
  // State variables
  trIndex = -1;
  tabID = ADMINTABACCESS.WORKFLOW_REVIEWER_WRITEOFF;
  tabData: Privilege | any[];
  editReviewerReason = false;
  approveReviewerWriteoff = false;
  excelReviewerWriteoff = false;
  userInfo: AdminUser;

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService, private _sharedObjService: SharedObjService) {
  }

  ngOnInit() {
    this.userInfo = this._sharedService.getUser();
    this.initializationMethod();
    this.editReviewerReason = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'edit_reviewer_reason', 1);
    this.approveReviewerWriteoff = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'approve_reviewerwriteoff', 1);
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
  }

  get parent_id(): AbstractControl {
    return this.filterForm.get('parent_id');
  }
  // get form control
  get entityIdField(): AbstractControl {
    return this.filterForm.get('entity_id');
  }

  get fromPeriodField(): AbstractControl {
    return this.filterForm.get('from_period');
  }

  get toPeriodField(): AbstractControl {
    return this.filterForm.get('to_period');
  }

  get reviewerField(): AbstractControl {
    return this.filterForm.get('reviewer_id');
  }

  get reviewerDoneField(): AbstractControl {
    return this.filterForm.get('is_reviewer_done');
  }

  get createdOnFromField(): AbstractControl {
    return this.filterForm.get('created_on_from');
  }

  get createdOnToField(): AbstractControl {
    return this.filterForm.get('created_on_to');
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getClientList();
    this.getUserList();
    this.createAdvanceFilterForm();
    this.getReviewerWriteOffList(1, 'id', 'desc');
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = this.filteredTradingClientList = response;
      this.clientListParent = response.filter(item => item.is_parent === 1);
    });
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      const reviewerData = response.filter(data => (data['designation_id']) ? (data['designation_id']['id'] === 68 || data['designation_id']['id'] === 69 || data['designation_id']['id'] === 70 || data['designation_id']['id'] === 71 || data['designation_id']['id'] === 73) : 0);
      this.reviewerList = reviewerData;
    });
  }

  /**
   * Create Advance Filter Form
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      parent_id: new FormControl(null),
      entity_id: new FormControl(null),
      from_period: new FormControl(null),
      to_period: new FormControl(null),
      reviewer_id: new FormControl(null),
      is_reviewer_done: new FormControl(null),
      created_on_from: new FormControl(null),
      created_on_to: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      parent_id: new FormControl(null),
      entity_id: new FormControl(null),
      from_period: new FormControl(null),
      to_period: new FormControl(null),
      reviewer_id: new FormControl(null),
      is_reviewer_done: new FormControl(null),
      created_on_from: new FormControl(null),
      created_on_to: new FormControl(null)
    });
  }

  /**
   * On Approved Comment
   * @param ReviewData
   * @param isEditView
   */
  onReviewerWriteOffApproveDialog(ReviewData: ReviewerWriteoff, isEditView: number) {
    let dialogRef = this.dialog.open(ReviewerWriteoffApproveCommentsDialogComponent, {
      panelClass: 'lg-dialog--container',
      data: {
        reviewData: ReviewData,
        iseditView: isEditView
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getReviewerWriteOffList(1, 'id', 'desc');
      }
    });
  }

  /**
   * On Reviewer Comment
   * @param ReviewData
   * @param isEditView
   */
  onReviewerCommentsDialog(ReviewData: ReviewerWriteoff, isEditView: number) {
    let dialogRef = this.dialog.open(ReviewerWriteoffCommentsDialogComponent, {
      panelClass: 'lg-dialog--container',
      data: {
        reviewData: ReviewData,
        iseditView: isEditView
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getReviewerWriteOffList(1, 'id', 'desc');
      }
    });
  }

  /**
   * View Reviewe Write Off History
   * @param recurringData
   */
  viewReviewerWriteOffHistory(ReviewData: ReviewerWriteoff): void {
    const value = {
      url: AdminAPI.REVIEWER_WRITEOFF_HISTORY + '/' + ReviewData.id,
    };
    const reviewerWriteOff = this._sharedService.setHistoryURL(value);
    const dialogRef = this.dialog.open(CommonHistoryDialogComponent, {
      panelClass: 'view-client-dialog-container',
      data: {
        'reviewerWrite': reviewerWriteOff,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // Events
  openRow(i) {
    this.trIndex = (this.trIndex !== i) ? i : -1;
  }

  /**
   * Get Reviewer Write Off List
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getReviewerWriteOffList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.REVIEWER_WRITEOFF_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
      this.handleReviewerResponse(response);
    });
    this._commonCrudService.listData(AdminAPI.REVIEWER_WRITEOFF_LIST, {'counter': 1}, {
      'compare': {
        'equal': {
          'is_active': 1,
          'is_reviewer_done': 1
        }
      }
    }).subscribe((response) => {
      this.dhCount = response.payload.data;
    });
    this._commonCrudService.listData(AdminAPI.REVIEWER_WRITEOFF_LIST, {'counter': 1}, {
      'compare': {
        'equal': {
          'is_active': 1,
          'is_reviewer_done': 0
        }
      }
    }).subscribe((response) => {
      this.staffCount = response.payload.data;
    });
  }

  /**
   * Reviewer Write Off Change Division Head & Staff Count
   * @param event
   */
  onChangeUpdateReviewDone(value: number) {
    this.filterForm.get('is_reviewer_done').setValue(value);
    this.advanceFilterForm.get('is_reviewer_done').setValue(value);
    this.setAdvanceFilter(this.filterForm);
  }

  /**
   * Handle Reviewer Write Off List
   * @param response
   */
  handleReviewerResponse(response: any) {
    this.reviewWriteoff = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Toogle Filter
   */
  onOpenFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  /**
   * Close filter
   */
  onCloseFilter() {
    this.isOpenFilterView = false;
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getReviewerWriteOffList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.REVIEWER_WRITEOFF_LIST, params, this.getSearchParam(), 'Reviewer Write Off  ', 0).subscribe(response => {
    });
  }

  onReviewerWriteoffArchivedList() {
    this._router.navigate(['/' + AdminRoutes.REVIEWER_WRITEOFF_ARCHIVED]);
  }

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
    this.getReviewerWriteOffList(1, sortKey, sortVal);
  }

  // get function for returning pageNumber and page size at time of listing api
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
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'parent_id' || elementName === 'entity_id' || elementName === 'reviewer_id' || elementName === 'is_reviewer_done') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'from_period') {
      this.PeriodFromValue = null;
    } else if (elementName === 'to_period') {
      this.PeriodToValue = null;
    } else if (elementName === 'created_on_from') {
      this.CreatedFromValue = null;
    } else if (elementName === 'created_on_to') {
      this.CreatedToValue = null;
    }
    this.getReviewerWriteOffList(1, this.sortBy, this.sortOrder);
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.likeJSON = {};
    this.equalJSON = {'is_active': 1};
    this.inJSON = {};
    this.isOpenFilterView = false;
    this.PeriodFromValue = null;
    this.PeriodToValue = null;
    this.CreatedFromValue = null;
    this.CreatedToValue = null;
    this.getReviewerWriteOffList(1, 'id', 'desc');
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
          'reviewer_id': form.value['reviewer_id'],
          'is_reviewer_done': form.value['is_reviewer_done'],
          'from_period': form.value['from_period'],
          'to_period': form.value['to_period'],
          'created_on_from': form.value['created_on_from'],
          'created_on_to': form.value['created_on_to'],
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
    this.equalJSON = {'is_active': 1};
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

    if (form.value['from_period'] !== '' && form.value['from_period']) {
      this.PeriodFromValue = form.value['from_period'];
      delete form.value['from_period'];
    }
    if (form.value['to_period'] !== '' && form.value['to_period']) {
      this.PeriodToValue = form.value['to_period'];
      delete form.value['to_period'];
    }

    if (form.value['created_on_from'] !== '' && form.value['created_on_from']) {
      this.CreatedFromValue = form.value['created_on_from'];
      delete form.value['created_on_from'];
    }

    if (form.value['created_on_to'] !== '' && form.value['created_on_to']) {
      this.CreatedToValue = form.value['created_on_to'];
      delete form.value['created_on_to'];
    }

    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'parent_id' || key === 'entity_id' || key === 'reviewer_id' || key === 'is_reviewer_done') {
            this.equalJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilterView = false;
      this.getReviewerWriteOffList(1, 'id', 'desc');
    }
  }

  // advance filter search operation
  getSearchParam() {
    const params = {};
    const filter = {};

    if (this.PeriodFromValue || this.CreatedFromValue) {
      filter['greaterthanequal'] = {};
    }
    if (this.PeriodToValue || this.CreatedToValue) {
      filter['lessthanequal'] = {};
    }

    if (this.PeriodFromValue) {
      filter['greaterthanequal']['start_date'] = moment(this.PeriodFromValue).format('YYYY-MM-DD');
    }
    if (this.PeriodToValue) {
      filter['lessthanequal']['start_date'] = moment(this.PeriodToValue).format('YYYY-MM-DD');
    }

    if (this.CreatedFromValue) {
      filter['greaterthanequal']['created_on'] = moment(this.CreatedFromValue).format('YYYY-MM-DD');
    }

    if (this.CreatedToValue) {
      filter['lessthanequal']['created_on'] = moment(this.CreatedToValue).format('YYYY-MM-DD');
    }
    // check for the object whether its empty or not
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
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
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
