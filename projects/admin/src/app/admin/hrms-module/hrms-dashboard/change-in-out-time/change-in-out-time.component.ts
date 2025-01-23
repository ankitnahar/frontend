import {Component, HostListener, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {MatDialog, PageEvent} from '@angular/material';
import {ConfirmationDialogComponent} from '../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {ChangeInOutTimeDialogComponent} from './change-in-out-time-dialog/change-in-out-time-dialog.component';
import {CommonFunctions} from '../../../../../utility/common-functions';
import {ChangeInOutTime} from './change-in-out-time.model';
import {BASE, yesNo} from '../../../../../utility/constants/base-constants';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import * as moment from 'moment';
import {AdminUser, Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';
import {SharedUserService} from '../../../../../utility/shared-service/shared-user.service';

@Component({
  selector: 'app-change-in-out-time',
  templateUrl: './change-in-out-time.component.html',
  styleUrls: ['./change-in-out-time.component.scss']
})
export class ChangeInOutTimeComponent implements OnInit {
  // Data Variables
  changeInOutList: ChangeInOutTime[] = [];
  userList: AdminUser[] = [];

  // Form Variables
  changeInOutFilterForm: FormGroup;
  filterChangeInOutForm: FormGroup;
  toDate = null;
  fromDate = null;
  yesNoDropDown = yesNo;

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

  // MatPaginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilter = false;
  isOpenHistoryDialog = false;

  tabId = ADMINTABACCESS.CHNAGEINOUTTIME;
  tabData: Privilege | any[];
  adminUser: AdminUser;

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService, private _sharedService: SharedService, private _sharedUserService: SharedUserService) {
  }

  // get form control
  get userId(): AbstractControl {
    return this.changeInOutFilterForm.get('user_id');
  }

  get fromDateField(): AbstractControl {
    return this.changeInOutFilterForm.get('from_date');
  }

  get toDateField(): AbstractControl {
    return this.changeInOutFilterForm.get('to_date');
  }

  get changedByStaff(): AbstractControl {
    return this.changeInOutFilterForm.get('is_manually_change');
  }

  ngOnInit() {
    this.initializationMethod();
    this.createChangeInOutForm();
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabId);
    // this.createFilterChangeInOutForm();
    this.adminUser = this._sharedUserService.getUser();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getChangeInOut(1);
    // this.getUserList();
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.userList = response;
    });
  }

  getChangeInOut(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.CHANGEINOUT_LISTING, this.getQueryParams(pageNumber, key, val),
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
    this.changeInOutList = response.payload.data;
    this.userList = response.payload.userlist;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Create Change InOut
   */
  createChangeInOutForm() {
    this.changeInOutFilterForm = this._fb.group({
      user_id: new FormControl(null),
      is_manually_change: new FormControl(),
      to_date: new FormControl(null),
      from_date: new FormControl(null)
    });

    this.filterChangeInOutForm = this._fb.group({
      user_id: new FormControl(null),
      is_manually_change: new FormControl(),
      to_date: new FormControl(null),
      from_date: new FormControl(null)
    });
  }

  /**
   * change InOutTime direction
   */

  openAddInOutTimeDialog(changeInOutDetail: ChangeInOutTime) {
    const dialogRef = this.dialog.open(ChangeInOutTimeDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        ChangeInOutDetail: (changeInOutDetail) ? changeInOutDetail : []
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getChangeInOut(1, this.sortBy, this.sortOrder);
    });
  }

  openInOutDeleteDialog(changeInOutDetail: ChangeInOutTime) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete In/Out entry?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.deleteData(AdminAPI.CHANGEINOUT_DELETE, changeInOutDetail.id).subscribe(Response => {
          if (Response) {
            this.getChangeInOut(1, 'punch_time', 'asc');
          }
        });
      }
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


  onClearTags() {
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilter = false;
    }
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getChangeInOut(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getChangeInOut(1, sortKey, sortVal);
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
            this.filterChangeInOutForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }

    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'user_id' || key === 'is_manually_change') {
            // if (key === 'date') {
            //   this.equalJSON[key] = moment(form.value[key]).format('YYYY-MM-DD');
            // } else {
            this.equalJSON[key] = form.value[key];
            //}
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
      this.getChangeInOut(1, 'punch_time', 'asc');
    }
  }

  resetFilterForm() {
    this.createChangeInOutForm();
    this.equalJSON = {};
    this.findinSet = {};
    this.fromDate = null;
    this.toDate = null;
    this.isOpenFilter = false;
    this.getChangeInOut(1, 'punch_time', 'asc');
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
      this.changeInOutFilterForm.setValue(
        {
          'user_id': (form.value['user_id']) ? form.value['user_id'] : null,
          'is_manually_change': form.value['is_manually_change'],
          'from_date': form.value['from_date'],
          'to_date': form.value['to_date']
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
    this.changeInOutFilterForm.get(elementName).setValue(null);
    this.filterChangeInOutForm.get(elementName).setValue(null);
    if (elementName === 'user_id' || elementName === 'is_manually_change') {
      delete this.equalJSON[elementName];
    }

    if (elementName === 'from_date') {
      this.fromDate = null;
    }

    if (elementName === 'to_date') {
      this.toDate = null;
    }
    this.getChangeInOut(1, this.sortBy, this.sortOrder);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.CHANGEINOUT_EXPORT, params, this.getSearchParam(), 'Change In Out - ', 0).subscribe(response => {
    });
  }

  /**
   * Compares two Date objects and returns e number value that represents
   * the result:
   * 0 if the two dates are equal.
   * 1 if the first date is greater than second.
   * -1 if the first date is less than second.
   * @param date1 First date object to compare.
   * @param date2 Second date object to compare.
   */
  compareDate(date: Date): number {
    // With Date object we can compare dates them using the >, <, <= or >=.
    // The ==, !=, ===, and !== operators require to use date.getTime(),
    // so we need to create a new instance of Date with 'new Date()'
    const d1 = new Date;
    const d2 = new Date(date);

    // Check if the dates are equal
    const same = d1.getTime() === d2.getTime();
    if (same) {
      return 0;
    }

    // Check if the first is greater than second
    if (d2 > d1) {
      return 1;
    }

    // Check if the first is less than second
    if (d2 < d1) {
      return -1;
    }
  }

  isToday(date: string) {
    const todaysDate = moment(new Date()).format('YYYY-MM-DD');
    if (date === todaysDate) {
      return 1;
    }
    return 0;
  }
}
