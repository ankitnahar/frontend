import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialog, PageEvent} from "@angular/material";
import {Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ConfirmationDialogComponent} from "../../../../../utility/components/confirmation-dialog/confirmation-dialog.component";
import {AdminRoutes} from "../../../../../utility/constants/admin-route";
import {AddHolidayMasterDialogComponent} from "./add-holiday-master-dialog/add-holiday-master-dialog.component";
import {HolidayMasterUploadCsvComponent} from "./holiday-master-upload-csv/holiday-master-upload-csv.component";
import {HolidayMaster} from "../hrms-dashboard.model";
import {AdminAPI} from "../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import {BASE, yesNo} from "../../../../../utility/constants/base-constants";
import * as moment from 'moment';

@Component({
  selector: 'app-holiday-master',
  templateUrl: './holiday-master.component.html',
  styleUrls: ['./holiday-master.component.scss']
})
export class HolidayMasterComponent implements OnInit {

  // Data Variables
  holidayMaster: HolidayMaster[] = [];
  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  // Form Variables
  holidayMasterFilterForm: FormGroup;
  filterHolidayMasterForm: FormGroup;

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
  yearList = [];
  currentYear = 0;
  yesNoDropDown = yesNo;

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService) {
  }

  get yearField(): AbstractControl {
    return this.filterHolidayMasterForm.get('year');
  }
  get isClientField(): AbstractControl {
    return this.filterHolidayMasterForm.get('is_client');
  }
  get dateField(): AbstractControl {
    return this.filterHolidayMasterForm.get('date');
  }

  ngOnInit() {
    this.createHolidayMasterForm();
    this.yearData();
    this.setAdvanceFilter(this.holidayMasterFilterForm);
  }

  yearData() {
    this.currentYear = new Date().getFullYear();
    for (let i = 0; i <= 2; i++) {
      const newYear = this.currentYear + i;
      this.yearList.push({'key': newYear, 'value': newYear});
    }
  }

  /**
   * Get Holiday Master List
   * @param pageNumber
   * @param key
   * @param val
   */
  getHolidayMasterList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.HOLIDAY_MASTER_LIST, this.getQueryParams(pageNumber, key, val),
      this.getSearchParams())
      .subscribe((response) => {
        this.handleResponse(response);
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
    this.holidayMaster = response['payload']['data'];
    this.page = response['pager']['pageNumber'];
    this.pageIndex = this.page - 1;
    this.totalRecords = +(response['pager']['totalRecords']);
    this.sortBy = response['pager']['sortBy'];
    this.sortOrder = response['pager']['sortOrder'];
  }

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getHolidayMasterList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Create holiday list
   */
  createHolidayMasterForm() {
    this.holidayMasterFilterForm = this._fb.group({
      year: new FormControl(new Date().getFullYear()),
      date: new FormControl(null),
      is_client: new FormControl(null),
    });

    this.filterHolidayMasterForm = this._fb.group({
      year: new FormControl(new Date().getFullYear()),
      date: new FormControl(null),
      is_client: new FormControl(null)
    });
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
            this.filterHolidayMasterForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }

    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'year' || key === 'is_client') {
            this.equalJSON[key] = form.value[key];
          }

          if (key === 'date') {
            this.equalJSON['year'] = Number(moment(form.value[key]).format('YYYY'));
            this.equalJSON[key] = moment(form.value[key]).format('YYYY-MM-DD');
          }
        }
      }
      // console.log(this.equalJSON);
      this.isOpenFilter = false;
      this.getHolidayMasterList(1, 'year', 'desc');
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
      this.holidayMasterFilterForm.setValue(
        {
          'year': (form.value['year']) ? form.value['year'] : this.currentYear,
          'date': form.value['date'],
          'is_client': form.value['is_client'],
        });
      this.setAdvanceFilter(form, false);
    }
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createHolidayMasterForm();
    this.likeJSON = {};
    this.isOpenFilter = false;
    this.getHolidayMasterList(1, 'year', 'desc');
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName?: string) {
    this.holidayMasterFilterForm.get(elementName).setValue(null);
    this.filterHolidayMasterForm.get(elementName).setValue(null);
    if (elementName === 'year' || elementName === 'date' || elementName === 'is_client' ) {
      delete this.equalJSON[elementName];
    }
    this.getHolidayMasterList(1, this.sortBy, this.sortOrder);
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getHolidayMasterList(1, sortKey, sortVal);
  }

  /**
   * On Add Holiday List
   * @param holidaymaster
   */
  onAddEditHolidayListDialog(holidaymaster?: HolidayMaster) {
    const dialogRef = this.dialog.open(AddHolidayMasterDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        holidayMasterDetail: holidaymaster
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getHolidayMasterList(1, this.sortBy, this.sortOrder);
      }
    });
  }

  /**
   * On Upload CSV Dialog
   */
  onUploadCSVDialog() {
    const dialogRef = this.dialog.open(HolidayMasterUploadCsvComponent, {
      panelClass: 'add-form-dialog-container',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getHolidayMasterList(1, this.sortBy, this.sortOrder);
      }
    });
  }

  /**
   * On Delete Holiday List
   * @param holidaymaster
   */
  onDeleteHolidayListDialog(holidaymaster: HolidayMaster) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Deletion of date will affect holiday master & attendance summary. Are you sure you want to delete?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.onDeleteHoliday(holidaymaster);
      }
    });
  }

  /**
   * On Delete Holiday Master
   * @param holidayDetail
   */
  onDeleteHoliday(holidayDetail: HolidayMaster) {
    this._commonCrudService.deleteData(AdminAPI.HOLIDAY_MASTER_LIST, holidayDetail.id).subscribe((response) => {
      this.getHolidayMasterList(1, this.sortBy, this.sortOrder);
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

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilter = false;
    }
  }
}
