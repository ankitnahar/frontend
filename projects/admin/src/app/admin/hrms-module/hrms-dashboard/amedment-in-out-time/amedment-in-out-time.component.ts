import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BASE} from '../../../../../utility/constants/base-constants';
import {MatDialog, PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {SharedUserService} from '../../../../../utility/shared-service/shared-user.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import * as moment from 'moment';
import {CommonFunctions} from '../../../../../utility/common-functions';
import {AmedmentInOutTime} from './amedment-in-out-time.model';
import {AdminUser, Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {AmedmentInOutTimeDialogComponent} from './amedment-in-out-time-dialog/amedment-in-out-time-dialog.component';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';

@Component({
  selector: 'app-amedment-in-out-time',
  templateUrl: './amedment-in-out-time.component.html',
  styleUrls: ['./amedment-in-out-time.component.scss']
})
export class AmedmentInOutTimeComponent implements OnInit {

  punchInOutAmendmentList: AmedmentInOutTime[] = [];
  userList: AdminUser[] = [];
  userSuperiorList: AdminUser[] = [];
  userApprovalList: AdminUser[] = [];
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;
  toDate = null;
  fromDate = null;
  equalJSON = {};
  likeJSON = {};
  findinSet = {};

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // MatPaginator Inputs
  length = 100;
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;
  pageSizeOptions = [5, 10, 25, 100];

  tabId = ADMINTABACCESS.AMEDMENTINOUT;
  tabData: Privilege | any[];
  // MatPaginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilter = false;

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService, private _sharedService: SharedService, private _sharedUserService: SharedUserService) {
  }

  // get form control
  get createdBy(): AbstractControl {
    return this.filterForm.get('created_by');
  }

  get userId(): AbstractControl {
    return this.filterForm.get('user_id');
  }

  get approvedBy(): AbstractControl {
    return this.filterForm.get('approved_by');
  }

  get fromDateField(): AbstractControl {
    return this.filterForm.get('from_date');
  }

  get toDateField(): AbstractControl {
    return this.filterForm.get('to_date');
  }

  get reasonforrejection(): AbstractControl {
    return this.filterForm.get('reason_for_rejection');
  }

  ngOnInit() {
    this.createFilterForm();
    this.initializationMethod();
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabId);
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getAmendmentInOutTime(1, 'id', 'desc');
  }

  getAmendmentInOutTime(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.AMENDMENTINOUT_LISTING, this.getQueryParams(pageNumber, key, val),
      this.getSearchParam())
      .subscribe((response) => {
        this.handleResponse(response);
      });
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
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};
    console.log(this.likeJSON);
    // check for the object wheather its empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }

    if (this.toDate) {
      filter['lessthanequal'] = {};
      filter['lessthanequal']['date'] = moment(this.toDate).format('YYYY-MM-DD');
    }

    if (this.fromDate) {
      filter['greaterthanequal'] = {};
      filter['greaterthanequal']['date'] = moment(this.fromDate).format('YYYY-MM-DD');
    }

    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !CommonFunctions.isEmpty(filter)) {
      params['compare'] = filter;
    }
    return params;
  }

  /**
   * Handle AM Notes List Response
   * @param response
   */
  handleResponse(response: any) {
    this.punchInOutAmendmentList = response.payload.data;
    this.userList = response.payload.userlist;
    this.userSuperiorList = response.payload.superiorstafflist;
    this.userApprovalList = response.payload.approvalstafflist;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  createFilterForm() {
    this.filterForm = this._fb.group({
      created_by: new FormControl(null),
      user_id: new FormControl(null),
      approved_by: new FormControl(null),
      to_date: new FormControl(null),
      from_date: new FormControl(null),
      reason_for_rejection: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      created_by: new FormControl(null),
      user_id: new FormControl(null),
      approved_by: new FormControl(null),
      to_date: new FormControl(null),
      from_date: new FormControl(null),
      reason_for_rejection: new FormControl(null)
    });
  }

  /**
   * Toogle Filter
   */
  onOpenFilter() {
    this.isOpenFilter = !this.isOpenFilter;
  }

  /**
   * Close filter
   */
  onCloseFilter() {
    this.isOpenFilter = false;
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {};
    this.likeJSON = {};
    this.findinSet = {};
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

    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'created_by' || key === 'user_id' || key === 'approved_by') {
            this.equalJSON[key] = form.value[key];
          }

          if (key === 'reason_for_rejection') {
            this.likeJSON[key] = form.value[key];
          }

          if (form.value['from_date'] !== '' && form.value['from_date']) {
            this.fromDate = form.value['from_date'];
            delete form.value['from_date'];
          }

          if (form.value['to_date'] !== '' && form.value['to_date']) {
            this.toDate = form.value['to_date'];
            delete form.value['to_date'];
          }
        }
      }
      this.isOpenFilter = false;
      this.getAmendmentInOutTime(1, 'id', 'desc');
    }
  }

  resetFilterForm() {
    this.createFilterForm();
    this.equalJSON = {};
    this.findinSet = {};
    this.likeJSON = {};
    this.fromDate = null;
    this.toDate = null;
    this.isOpenFilter = false;
    this.getAmendmentInOutTime(1, 'id', 'desc');
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
          'created_by': (form.value['created_by']) ? form.value['created_by'] : null,
          'user_id': (form.value['user_id']) ? form.value['user_id'] : null,
          'approved_by': (form.value['approved_by']) ? form.value['approved_by'] : null,
          'from_date': form.value['from_date'],
          'to_date': form.value['to_date'],
          'reason_for_rejection': form.value['reason_for_rejection']
        });
      this.setAdvanceFilter(form, false);
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
    if (elementName === 'created_by' || elementName === 'user_id' || elementName === 'approved_by') {
      delete this.equalJSON[elementName];
    }

    if (elementName === 'reason_for_rejection') {
      delete this.likeJSON[elementName];
    }

    if (elementName === 'from_date') {
      this.fromDate = null;
    }

    if (elementName === 'to_date') {
      this.toDate = null;
    }
    this.getAmendmentInOutTime(1, this.sortBy, this.sortOrder);
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getAmendmentInOutTime(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getAmendmentInOutTime(1, sortKey, sortVal);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.AMENDMENTINOUT_LISTING, params, this.getSearchParam(), 'IN-OUT Amedment ', 0).subscribe(response => {
    });
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  openApproveDialog(detail: AmedmentInOutTime) {
    const dialogRef = this.dialog.open(AmedmentInOutTimeDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        amedmentDetail: (detail) ? detail : []
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (detail.status === 0) {
        this.getAmendmentInOutTime(1, this.sortBy, this.sortOrder);
      }
    });
  }
}
