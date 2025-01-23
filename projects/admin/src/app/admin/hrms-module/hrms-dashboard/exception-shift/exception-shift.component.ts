import {Component, HostListener, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {ConfirmationDialogComponent} from '../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, PageEvent} from '@angular/material';
import {AddExceptionShiftDialogComponent} from './add-exception-shift-dialog/add-exception-shift-dialog.component';
import {ExceptionShift} from './exception-shift.model';
import {BASE} from '../../../../../utility/constants/base-constants';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {SharedService} from '../../../../../utility/shared-service/shared.service';

@Component({
  selector: 'app-exception-shift',
  templateUrl: './exception-shift.component.html',
  styleUrls: ['./exception-shift.component.scss']
})
export class ExceptionShiftComponent implements OnInit {
  // Data Variables
  exceptionShiftList: ExceptionShift[] = [];

  // Form Variables
  filterForm: FormGroup;

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

  tabID = ADMINTABACCESS.EXCEPTION;
  tabData: Privilege | any[];

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getExceptionShift(1, 'id', 'desc');
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.initializationMethod();
    this.createSearchForm();
  }

  getExceptionShift(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.EXCEPTIONSHIFT_LISTING, this.getQueryParams(pageNumber, key, val),
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
    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length) {
      params['compare'] = filter;
    }
    return params;
  }

  /**
   * Handle AM Notes List Response
   * @param response
   */
  handleResponse(response: any) {
    this.exceptionShiftList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
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
   * Add Holiday list
   */

  onExceptionShiftListDialog(exceptionshiftlist: ExceptionShift) {
    const dialogRef = this.dialog.open(AddExceptionShiftDialogComponent, {
        panelClass: 'add-form-medium-dialog-container',
        data: {
          exceptionshiftData: (exceptionshiftlist) ? exceptionshiftlist : []
        }
      })
    ;

    dialogRef.afterClosed().subscribe(result => {
      this.getExceptionShift(1, 'id', 'desc');
    });
  }

  onDeleteExceptionShiftDialog(exceptionshiftlist: ExceptionShift) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this exception shift ?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.deleteData(AdminAPI.EXCEPTIONSHIFT_DELETE, exceptionshiftlist.id).subscribe(Response => {
          if (Response) {
            this.getExceptionShift(1, 'id', 'desc');
          }
        });
      }
    });
  }

  onOpenActiveToggleDialog(exceptionshiftlist: ExceptionShift) {
    const status = exceptionshiftlist.is_active === 1 ? 'inactive' : 'active';
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to ' + status + ' this exception shift ?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        const is_active = exceptionshiftlist.is_active === 1 ? 0 : 1;
        this._commonCrudService.updateData(AdminAPI.EXCEPTIONSHIFT_UPDATE, exceptionshiftlist.id, {
          'is_active': is_active,
          '_method': 'put'
        }).subscribe(Response => {
          if (Response) {
            this.getExceptionShift(1, 'id', 'desc');
          }
        });
      } else {
        this.getExceptionShift(1, 'id', 'desc');
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
    // this.tagList = [];
  }

  onHrmsDashboard() {
    this._router.navigate(['/' + AdminRoutes.HRMS_DASHBOARD]);
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
    this.getExceptionShift(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.EXCEPTIONSHIFT_EXPORT, params, this.getSearchParam(), 'Exception shift - ', 0).subscribe(response => {
    });
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
      this.getExceptionShift(1, this.sortBy, this.sortOrder);
    }
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getExceptionShift(1, sortKey, sortVal);
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
