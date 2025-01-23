import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, PageEvent} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ConfirmationDialogComponent} from '../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {ShiftNameDialogComponent} from './shift-name-dialog/shift-name-dialog.component';
import {AddHolidayListDialogComponent} from './add-holiday-list-dialog/add-holiday-list-dialog.component';
import {Holiday} from './holiday-list.model';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {BASE} from '../../../../../utility/constants/base-constants';
import {Shift} from '../shift-list/shift-list.model';
import * as moment from 'moment';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent implements OnInit {
  // Data Variables
  holidayList: Holiday[] = [];
  // holidayData: Holiday[] = [];

  // Form Variables
  holidayListFilterForm: FormGroup;
  filterHolidayListForm: FormGroup;
  shifList: Shift[] = [];
  yearList = [];
  currentYear = new Date().getFullYear();
  equalJSON = {'year': this.currentYear};
  likeJSON = {};
  findinSet = {};

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  pageArray = BASE.PAGINATION_ARRAY;
  page: number;
  pageIndex: number;
  totalRecords: number;

  // MatPaginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilter = false;
  isOpenHistoryDialog = false;

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService) {
  }

  get year(): AbstractControl {
    return this.filterHolidayListForm.get('year');
  }

  get shiftId(): AbstractControl {
    return this.filterHolidayListForm.get('shift_id');
  }

  get dateField(): AbstractControl {
    return this.filterHolidayListForm.get('date');
  }

  ngOnInit() {
    this.initializationMethod();
    this.createHolidayListForm();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getshiftlist();
    this.yearData();
    this.getshiftlist();
    this.getHolidayList(1);
  }

  getHolidayList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.HOLIDAY_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParams()).subscribe(Response => {
      this.handleResponse(Response);
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
    this.holidayList = response['payload']['data'];
    this.page = response['pager']['pageNumber'];
    this.pageIndex = this.page - 1;
    this.totalRecords = +(response['pager']['totalRecords']);
    this.sortBy = response['pager']['sortBy'];
    this.sortOrder = response['pager']['sortOrder'];
  }

  /**
   * Create holiday list
   */
  createHolidayListForm() {
    this.holidayListFilterForm = this._fb.group({
      year: new FormControl(this.currentYear),
      shift_id: new FormControl(null),
      date: new FormControl(null)
    });

    this.filterHolidayListForm = this._fb.group({
      year: new FormControl(this.currentYear),
      shift_id: new FormControl(null),
      date: new FormControl(null)
    });
  }

  /**
   * Add Holiday list
   */

  onAddEditHolidayListDialog(holidayDetail?: Holiday) {
    const dialogRef = this.dialog.open(AddHolidayListDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        holidayData: (holidayDetail) ? holidayDetail : []
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getHolidayList(1);
    });
  }

  onOpenShiftList(holidayData: any): void {
    const dialogRef = this.dialog.open(ShiftNameDialogComponent, {
      panelClass: 'view-client-dialog-container',
      data: {
        content: holidayData.shift_name
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  onDeleteHolidayListDialog(holidayDetail: Holiday) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this holiday ?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.onDeleteHoliday(holidayDetail);
      }
    });
  }

  onDeleteHoliday(holidayDetail: Holiday) {
    this._commonCrudService.deleteData(AdminAPI.HOLIDAY_DELETE, holidayDetail.id).subscribe((response) => {
      this.getHolidayList(1);
    });
  }

  onChangeRemark(holidayDetail: Holiday) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to update remark for this holiday ?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.onRunRemarkCron(holidayDetail);
      }
    });
  }

  onRunRemarkCron(holidayDetail: Holiday) {
    this._commonCrudService.addData(AdminAPI.HRUPDATEREMARK, {'remarkDate': holidayDetail.date}).subscribe((response) => {
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
    this.getHolidayList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  deleteMsg(index) {
    // this.tagList.splice(index, 1);
  }

  onClearTags() {
    // this.tagList = [];
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilter = false;
    }
  }

  getshiftlist() {
    this._commonCrudService.listData(AdminAPI.SHIFT_LISTING, {'records': 'all'}, {}).subscribe((response) => {
      this.shifList = response['payload']['data'];
    });
  }

  yearData() {
    this.currentYear = new Date().getFullYear();
    const defaultYear = 2016;
    const diff = this.currentYear - defaultYear;
    for (let i = 0; i <= diff; i++) {
      const newYear = defaultYear + i;
      this.yearList.push({'key': newYear, 'value': newYear});
    }
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {'year': this.currentYear};
    this.likeJSON = {};
    this.findinSet = {};
    // removing empty key from object
    for (const key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
          delete form.value[key];
        } else {
          if (flag) {
            this.filterHolidayListForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }

    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'year') {
            this.equalJSON[key] = form.value[key];
          }

          if (key === 'shift_id') {
            this.findinSet[key] = [form.value[key]];
          }

          if (key === 'date') {
            this.equalJSON['year'] = Number(moment(form.value[key]).format('YYYY'));
            this.equalJSON[key] = moment(form.value[key]).format('YYYY-MM-DD');
          }
        }
      }
      // console.log(this.equalJSON);
      this.isOpenFilter = false;
      this.getHolidayList(1, 'id', 'desc');
    }
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
    if (form.value['date'] != null) {
      form.value['year'] = Number(moment(form.value['date']).format('YYYY'));
    }
    if (processToReq) {
      this.holidayListFilterForm.setValue(
        {
          'year': (form.value['year']) ? form.value['year'] : this.currentYear,
          'shift_id': form.value['shift_id'],
          'date': form.value['date']
        });
      this.setAdvanceFilter(form, false);
    }
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createHolidayListForm();
    this.likeJSON = {};
    this.equalJSON = {'year': this.currentYear};
    this.findinSet = {};
    this.isOpenFilter = false;
    this.getHolidayList(1, 'id', 'desc');
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.holidayListFilterForm.get(elementName).setValue(null);
    this.filterHolidayListForm.get(elementName).setValue(null);
    if (elementName === 'year' || elementName === 'date') {
      delete this.equalJSON[elementName];
    }

    if (elementName === 'shift_id') {
      delete this.findinSet[elementName];
    }

    this.getHolidayList(1, this.sortBy, this.sortOrder);
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getHolidayList(1, sortKey, sortVal);
  }

  /**
   * Function downloading excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.HOLIDAY_LIST, params, this.getSearchParams(), 'Holiday detail - ', 0).subscribe(response => {
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
}
