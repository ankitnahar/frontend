import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {ConfirmationDialogComponent} from '../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {ApproveHolidayWorkingDialogComponent} from './approve-holiday-working-dialog/approve-holiday-working-dialog.component';
import {LeaveType} from "../../../../utility/shared-model/leave.model";
import {BASE, hrStatus} from "../../../../utility/constants/base-constants";
import {AdminUser} from "../../../../utility/shared-model/admin-user.model";
import {CommonCrudService} from "../../../../utility/shared-service/common-crud.service";
import {SharedObjService} from "../../../../utility/shared-service/shared-object.service";
import {SharedService} from "../../../../utility/shared-service/shared.service";
import {HolidayWorking} from "../../../../utility/shared-model/holiday-working.model";
import {AdminAPI} from "../../../../utility/constants/api";
import * as moment from "moment";

@Component({
  selector: 'app-hrms-holiday-working-listing',
  templateUrl: './hrms-holiday-working-listing.component.html',
  styleUrls: ['./hrms-holiday-working-listing.component.scss']
})
export class HrmsHolidayWorkingListingComponent implements OnInit {


  // Form Variables
  filterForm: FormGroup;

  // Data Variables
  holidayWorkingList: HolidayWorking[] = [];
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
    this.getHolidayWorkingList(1);
    this.getUserList();
    this.createFilterForm();
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
  getHolidayWorkingList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.HOLIDAY_WORKING_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(response => {
      this.holidayWorkingList = response.payload.data;
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
    this.getHolidayWorkingList(1, sortKey, sortVal);
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
      date: new FormControl(''),
      status_id: new FormControl(null)
    });
  }

  /**
   * Apply Leave
   * */

  onApplyHolidayWorkingLeave() {
    this._router.navigate(['/' + AdminRoutes.APPLY_HOLIDAY_WORKING_LEAVE_FORM]);
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

  onApproveHolidayWorkingListingDialog(holidayWorking: HolidayWorking) {
    const dialogRef = this.dialog.open(ApproveHolidayWorkingDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        holidayWorkingDetails:  (holidayWorking) ? holidayWorking : []
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getHolidayWorkingList(1);
      }
    });
  }

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getHolidayWorkingList(event.pageIndex + 1);
  }

  /**
   * On Delete Holiday Working
   * @param holidayWorking
   */
  onDeleteHolidayWorking(holidayWorking: HolidayWorking) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this holiday working request?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.deleteData(AdminAPI.HOLIDAY_WORKING_LIST, holidayWorking.id).subscribe(Response => {
          this.getHolidayWorkingList(1);
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
          if (key === 'user_id' || key === 'date' || key === 'status_id') {
            this.equalJSON[key] = (key === 'date') ?  moment(form.value[key]).format('YYYY-MM-DD') : form.value[key];
          }
        }
      }
      this.getHolidayWorkingList(1);
    }
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.HOLIDAY_WORKING_LIST, params, this.getSearchParam(), 'Holiday Working - ', 0).subscribe(response => {
    });
  }
}
