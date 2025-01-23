import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, PageEvent} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {AddShiftListDialogComponent} from './add-shift-list-dialog/add-shift-list-dialog.component';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {BASE} from '../../../../../utility/constants/base-constants';
import {ShifChangeActionDialogComponent} from './shif-change-action-dialog/shif-change-action-dialog.component';
import {Shift} from './shift-list.model';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {SharedService} from '../../../../../utility/shared-service/shared.service';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent implements OnInit {
  // Data Variables
  shiftList: Shift[] = [];
  shiftData: Shift[] = [];
  shiftListData: Shift[] = [];
  tagList: any[] = [];
  equalJSON = {'is_active': 1};
  likeJSON = {};
  inJSON = {};

  // Date variables

  // Form Variables
  filterForm: FormGroup;

  // State variables
  trIndex = -1;
  // MatPaginator Inputs

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // MatPaginator Output
  pageEvent: PageEvent;
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Other Variables
  isOpenFilter = false;
  isOpenHistoryDialog = false;
  tabID = ADMINTABACCESS.SHIFT;
  tabData: Privilege | any[];

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.initializationMethod();
    this.createSearchForm();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getShiftList(1, 'id', 'desc');
    this.getAllShiftList();
  }

  getShiftList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.SHIFT_LISTING, this.getQueryParams(pageNumber, key, val),
      this.getSearchParams())
      .subscribe((response) => {
        this.handleResponse(response);
      });
  }

  getAllShiftList() {
    this._commonCrudService.listData(AdminAPI.SHIFT_LISTING, {"records": "all"},
      this.getSearchParams())
      .subscribe((response) => {
        this.shiftListData = response['payload']['data'];
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

  handleResponse(response: any) {
    this.shiftList = response['payload']['data'];
    this.page = response['pager']['pageNumber'];
    this.pageIndex = this.page - 1;
    this.totalRecords = +(response['pager']['totalRecords']);
    this.sortBy = response['pager']['sortBy'];
    this.sortOrder = response['pager']['sortOrder'];
  }

  /**
   * Create search
   */
  createSearchForm() {
    this.filterForm = this._fb.group({
      shift_name: new FormControl('')
    });
  }

  /**
   * Expand row table
   * @param i
   */
  openRow(i) {
    this.trIndex = (this.trIndex !== i) ? i : -1;
  }

  /**
   * Add Holiday list
   */

  onAddEditShiftListDialog(shiftDetail?: Shift) {
    const dialogRef = this.dialog.open(AddShiftListDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        shiftData: (shiftDetail) ? shiftDetail : [],
        shiftListData: this.shiftListData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getShiftList(1, 'id', 'desc');
      }
    });
  }

  onChangeShiftDialog(isUpdate: number, shiftDetail?: Shift) {
    const dialogRef = this.dialog.open(ShifChangeActionDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        shiftData: (shiftDetail) ? shiftDetail : [],
        isUpdate: isUpdate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getShiftList(1, 'id', 'desc');
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

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getShiftList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  deleteMsg(index) {
    this.tagList.splice(index, 1);
  }

  onClearTags() {
    this.tagList = [];
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  // Set Advance Filter
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
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
          if (key === 'shift_name') {
            this.likeJSON[key] = form.value[key];
          }
        }
      }
      this.getShiftList(1);
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilter = false;
    }
  }

  /**
   * Function downloading excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.SHIFT_LISTING, params, this.getSearchParams(), 'Shift Details - ', 0).subscribe(response => {
    });
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getShiftList(1, sortKey, sortVal);
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

    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length) {
      params['compare'] = filter;
    }
    return params;
  }
}
