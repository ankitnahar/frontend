import {Component, OnInit} from '@angular/core';
import {MonthlyInvoice} from './monthly-invoice.model';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {PageEvent} from '@angular/material';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {BASE} from '../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../utility/constants/api';
import * as moment from 'moment';
import {CommonFunctions} from '../../../../utility/common-functions';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {Router} from '@angular/router';

@Component({
  selector: 'app-monthly-invoice-report',
  templateUrl: './monthly-invoice-report.component.html',
  styleUrls: ['./monthly-invoice-report.component.scss']
})
export class MonthlyInvoiceReportComponent implements OnInit {

  monthlyInvoice: MonthlyInvoice[] = [];
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;
  pageEvent: PageEvent;

  // Form Group
  filterForm: FormGroup;
  equalJSON = {};
  likeJSON = {};
  inJSON = {};

  // Sorting Params
  sortBy: string;
  sortOrder: string;
  CreatedFromValue = null;
  CreatedToValue = null;

  constructor(private _fb: FormBuilder, private _commonCrudService: CommonCrudService, public _router: Router) {
  }

  ngOnInit() {
    this.initializationMethod();
  }

  // Initialization Methods
  initializationMethod() {
    this.createAdvanceFilterForm();
    this.getMonthlyInvoiceReport(1);
  }

  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      from: new FormControl(null),
      to: new FormControl(null)
    });
  }

  /**
   * Get AM Notes List
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getMonthlyInvoiceReport(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.MONTHLY_INVOICE_REPORT_GENERATE, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(Response => {
      this.handleMonthlyInvoiceReportResponse(Response);
    });
  }

  /**
   * Handle Monhtly invoice report generate data
   * @param response
   */
  handleMonthlyInvoiceReportResponse(response: any) {
    this.monthlyInvoice = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.MONTHLY_INVOICE_REPORT_GENERATE_EXCEL, params, this.getSearchParam(), 'Monthly Invoice Report ', 0).subscribe(response => {
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
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getMonthlyInvoiceReport(1, sortKey, sortVal);
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};

    if (this.CreatedFromValue) {
      filter['greaterthanequal'] = {};
    }
    if (this.CreatedToValue) {
      filter['lessthanequal'] = {};
    }

    if (this.CreatedFromValue) {
      filter['greaterthanequal']['created_on'] = moment(this.CreatedFromValue).format('YYYY-MM-DD');
    }

    if (this.CreatedToValue) {
      filter['lessthanequal']['created_on'] = moment(this.CreatedToValue).format('YYYY-MM-DD');
    }

    // check for the object wheather its empty or not
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
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getMonthlyInvoiceReport(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.likeJSON = {};
    this.equalJSON = {};
    this.inJSON = {};
    this.CreatedFromValue = null;
    this.CreatedToValue = null;
    this.getMonthlyInvoiceReport(1);
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
        } else {
          if (flag) {
          }
        }
      }
    }

    if (form.value['from'] !== '' && form.value['from']) {
      this.CreatedFromValue = form.value['from'];
      delete form.value['from'];
    }

    if (form.value['to'] !== '' && form.value['to']) {
      this.CreatedToValue = form.value['to'];
      delete form.value['to'];
    }

    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
        }
      }
      this.getMonthlyInvoiceReport(1);
    }
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
