import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {UploadLeaveBalanceListComponent} from './upload-leave-balance-list/upload-leave-balance-list.component';
import {EditLeaveBalanceDialogComponent} from './edit-leave-balance-dialog/edit-leave-balance-dialog.component';
import {LeaveBalance} from "./leave-balance.model";
import {AdminAPI} from "../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import {BASE} from "../../../../../utility/constants/base-constants";
import {BaseComponent} from "../../../../../utility/components/base/base.component";

@Component({
  selector: 'app-leave-balance-list',
  templateUrl: './leave-balance-list.component.html',
  styleUrls: ['./leave-balance-list.component.scss']
})
export class LeaveBalanceListComponent extends BaseComponent implements OnInit {

  // Form Variables
  filterForm: FormGroup;
  equalJSON = {};
  likeJSON = {};
  findinSet = {};
  // Data Variables
  leaveBalanceList: LeaveBalance[] = [];

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // MatPaginator Inputs
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

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.getLeaveBalanceList(1);
    this.createFilterForm();
  }

  getLeaveBalanceList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.LEAVE_BALANCE_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParams()).subscribe(Response => {
      this.handleResponse(Response);
    });
  }

  /**
   * getting advanced search params for conference room list api
   * @returns {{}}
   */
  private getSearchParams() {
    const params = {};
    const filter = {};

    // check for the object whether it's empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if ((Object.keys(this.equalJSON).length)) {
      params['compare'] = filter;
    }
    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }
    if (Object.keys(this.findinSet).length !== 0) {
      params['findinset'] = this.findinSet;
    }

    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length) {
      params['compare'] = filter;
    }

    return params;
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

  handleResponse(response: any) {
    this.leaveBalanceList = response['payload']['data'];
    this.page = response['pager']['pageNumber'];
    this.pageIndex = this.page - 1;
    this.totalRecords = +(response['pager']['totalRecords']);
    this.sortBy = response['pager']['sortBy'];
    this.sortOrder = response['pager']['sortOrder'];
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {};
    this.likeJSON = {};
    // removing empty key from object
    for (const key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
          delete form.value[key];
        } else {
          if (flag) {

          }
        }
      }
    }
    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'userfullname') {
            this.likeJSON['userfullname'] = encodeURIComponent(form.value[key]);
          }
        }
      }
      this.getLeaveBalanceList(1, 'id', 'desc');
    }
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

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getLeaveBalanceList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Create Advance Filter
   */
  createFilterForm() {
    this.filterForm = this._fb.group({
      userfullname: new FormControl(null)
    });
  }

  /**
   * Edit Leave Balane
   * */

  onEditLeaveBalance(leaveBalance: LeaveBalance) {
    const dialogRef = this.dialog.open(EditLeaveBalanceDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        leaveBalance: leaveBalance
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getLeaveBalanceList(1);
      }
    });
  }


  /**
   * Upload excel
   * */

  onUploadLeaveList() {
    const dialogRef = this.dialog.open(UploadLeaveBalanceListComponent, {
        panelClass: 'add-form-medium-dialog-container',
        data: {}
      })
    ;

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getLeaveBalanceList(1);
      }
    });
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.LEAVE_BALANCE_LIST, params, this.getSearchParams(), 'Leave Balance - ', 0).subscribe(response => {
    });
  }
}
