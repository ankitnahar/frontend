import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {ConfirmationDialogComponent} from '../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {ApproveLeaveDialogComponent} from './approve-leave-dialog/approve-leave-dialog.component';
import {Leave, LeaveType} from "../../../../utility/shared-model/leave.model";
import {BASE, hrStatus} from "../../../../utility/constants/base-constants";
import {CommonCrudService} from "../../../../utility/shared-service/common-crud.service";
import {SharedObjService} from "../../../../utility/shared-service/shared-object.service";
import {SharedService} from "../../../../utility/shared-service/shared.service";
import {AdminAPI} from "../../../../utility/constants/api";
import {AdminUser} from "../../../../utility/shared-model/admin-user.model";

@Component({
  selector: 'app-hrms-apply-leave-listing',
  templateUrl: './hrms-apply-leave-listing.component.html',
  styleUrls: ['./hrms-apply-leave-listing.component.scss']
})
export class HrmsApplyLeaveListingComponent implements OnInit {


  // Form Variables
  filterForm: FormGroup;

  // Data Variables
  applyLeaveList: Leave[] = [];
  leaveType: LeaveType[] = [];
  hrStatus = hrStatus;

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;
  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  // MatPaginator Output
  pageEvent: PageEvent;
  userInfo: AdminUser;
  userList: AdminUser[] = [];

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.userInfo = this._sharedService.getUser();
    this.getLeaveList(1);
    this.getUserList();
    this.getHRLeaveType();
    this.createFilterForm();
  }

  // hr_leave_type
  getHRLeaveType() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      'table': 'hr_leave_type',
      'column': 'id,leave_type'
    }, {}).subscribe(response => {
      this.leaveType = response;
    });
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
   * user Listing API.
   * @param pageNumber
   * @param key
   * @param val
   */
  getLeaveList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.LEAVE_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(response => {
      this.applyLeaveList = response.payload.data;
      this.page = response.pager.pageNumber;
      this.pageIndex = this.page - 1;
      this.totalRecords = +response.pager.totalRecords;
      this.sortBy = response.pager.sortBy;
      this.sortOrder = response.pager.sortOrder;
    });
  }

  // get function for returning pageNumber and page size at time of listing api
  getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    let params = {};
    params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    sortKey ? params ['sortBy'] = sortKey : '';
    sortOrder ? params ['sortOrder'] = sortOrder : '';
    return params;
  }

  getSortData(sortKey: string, sortVal: string) {
    this.getLeaveList(1, sortKey, sortVal);
  }

  // advance filter search operation
  getSearchParam() {
    const params = {};
    const filter = {};
    // check for the object whether its empty or not
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
   * Create Advance Filter
   */
  createFilterForm() {
    this.filterForm = this._fb.group({
      user_id: new FormControl(null),
      leave_type: new FormControl(null),
      status_id: new FormControl(null)
    });
  }

  /**
   * Apply Leave
   * */

  onApplyLeave() {
    this._router.navigate(['/' + AdminRoutes.APPLY_LEAVE_FORM]);
  }

  /**
   * on delete confirmation dialog
   */
  onDeleteConfirmationDialog() {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this Ip Address ?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onApproveLeaveListingDialog(leaveData: Leave) {
    const dialogRef = this.dialog.open(ApproveLeaveDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        leaveDetails: (leaveData) ? leaveData : []
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getLeaveList(1);
      }
    });
  }

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getLeaveList(event.pageIndex + 1);
  }

  getLeaveType(id: number) {
    const val = this.leaveType.filter(elem => elem.id === Number(id));
    return (val.length) ? val[0].leave_type : '';
  }

  /**
   * On Delete Leave Request
   * @param leaveData
   */
  onDeleteLeave(leaveData: Leave) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this leave request?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.deleteData(AdminAPI.LEAVE_LIST, leaveData.id).subscribe(Response => {
          this.getLeaveList(1);
        });
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
        }
      }
    }
    // For Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'user_id' || key === 'leave_type' || key === 'status_id') {
            this.equalJSON[key] = form.value[key];
          }
        }
      }
      this.getLeaveList(1);
    }
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.LEAVE_LIST, params, this.getSearchParam(), 'Apply Leave - ', 0).subscribe(response => {
    });
  }
}
