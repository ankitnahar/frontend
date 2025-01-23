import {Component, HostListener, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {PageEvent} from '@angular/material';
import {CommonFunctions, convertURLParamToDecode} from '../../../../../../utility/common-functions';
import {Clients} from '../../../../client-module/view-client/view-client.model';
import {BASE} from '../../../../../../utility/constants/base-constants';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import * as moment from 'moment';
import {UnchargeUnitTimeSheet} from '../../uncharge-unit.model';
import {ADMINTABACCESS} from '../../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../../utility/shared-model/admin-user.model';

@Component({
  selector: 'app-uncharged-summary-timesheet-summary',
  templateUrl: './uncharged-summary-timesheet-summary.component.html',
  styleUrls: ['./uncharged-summary-timesheet-summary.component.scss']
})
export class UnchargedSummaryTimesheetSummaryComponent implements OnInit {

  // Data Variables
  timesheetEntry: UnchargeUnitTimeSheet[] = [];
  tagList: any[] = [];

  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  clientList: Clients[] = [];

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Mat Paginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilterView = false;
  isOpenHistoryDialog = false;
  PeriodFromValue = null;
  PeriodToValue = null;
  entity_id = 0;
  service_id = null;
  totalUnit = 0;
  tabID = ADMINTABACCESS.BILLING_UNCHARGEUNIT;
  tabData: Privilege | any[];

  constructor(private _fb: FormBuilder, private route: ActivatedRoute, public _router: Router, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              private _sharedObjService: SharedObjService) {
  }

  ngOnInit() {
    this.initializationMethod();
  }

  get fromDateField(): AbstractControl {
    return this.filterForm.get('from_date');
  }

  get toDateField(): AbstractControl {
    return this.filterForm.get('to_date');
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.route.queryParams
      .subscribe(params => {
        const dataItem = convertURLParamToDecode(params);
        if (dataItem) {
          this.entity_id = (dataItem['entity_id']) ? dataItem['entity_id'] : null;
          this.PeriodFromValue = (dataItem['from_date']) ? dataItem['from_date'] : null;
          this.PeriodToValue = (dataItem['to_date']) ? dataItem['to_date'] : null;
          this.service_id = (dataItem['service_id']) ? dataItem['service_id'] : null;
        }
      });
    this.createAdvanceFilterForm();
    this.setAdvanceFilter(this.filterForm);
  }

  /**
   * Create Form for filters
   */
  createAdvanceFilterForm() {
    const todaysdate = new Date();
    const year = todaysdate.getFullYear();
    const month = todaysdate.getMonth();
    this.filterForm = this._fb.group({
      from_date: new FormControl(this.PeriodFromValue ? this.PeriodFromValue : new Date(year, month, 1)),
      to_date: new FormControl(this.PeriodToValue ? this.PeriodToValue : new Date())
    });

    this.advanceFilterForm = this._fb.group({
      from_date: new FormControl(this.PeriodFromValue ? this.PeriodFromValue : new Date(year, month, 1)),
      to_date: new FormControl(this.PeriodToValue ? this.PeriodToValue : new Date())
    });
  }

  /**
   *
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getUnchargeUnitList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.UNCHARGEUNIT_TIMESHEET_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
      this.handleUnchargeUnitResponse(response);
    });
  }

  /**
   * Handle Contact List Response
   * @param response
   */
  handleUnchargeUnitResponse(response: any) {
    this.timesheetEntry = response.payload.data;
    this.totalUnit = 0;
    this.timesheetEntry.map(item => {
      this.totalUnit += (+item.units);
    });
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Toogle Filter
   */
  onOpenFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  /**
   * Close filter
   */
  onCloseFilter() {
    this.isOpenFilterView = false;
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getUnchargeUnitList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {
      'excel': 1, 'records': 'all', 'entity_id': this.entity_id
    };
    this._commonCrudService.downloadExcelData(AdminAPI.UNCHARGEUNIT_TIMESHEET_LIST_EXPORT_EXCEL, params, this.getSearchParam(), 'Uncharge Unit Timesheet ', 0).subscribe(response => {
    });
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilterView = false;
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
    if (elementName === 'from_date') {
      this.PeriodFromValue = null;
    } else if (elementName === 'to_date') {
      this.PeriodToValue = null;
    }
    this.getUnchargeUnitList(1, this.sortBy, this.sortOrder);
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.likeJSON = {};
    this.equalJSON = {};
    this.inJSON = {};
    this.isOpenFilterView = false;
    this.getUnchargeUnitList(1, 'id', 'desc');
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
          'from_date': form.value['from_date'],
          'to_date': form.value['to_date']
        });
      this.setAdvanceFilter(form, false);
    }
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
            this.advanceFilterForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }
    // For Entity ID
    if (form.valid && (form.value !== {})) {

      if (form.value['from_date'] !== '' && form.value['from_date']) {
        this.PeriodFromValue = form.value['from_date'];
        delete form.value['from_date'];
      }
      if (form.value['to_date'] !== '' && form.value['to_date']) {
        this.PeriodToValue = form.value['to_date'];
        delete form.value['to_date'];
      }

      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
        }
      }
      this.isOpenFilterView = false;
      this.getUnchargeUnitList(1, 'timesheet.id', 'desc');
    }
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

    // IF Entity ID is there
    if (this.entity_id > 0) {
      params['entity_id'] = this.entity_id;
    }
    return params;
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getUnchargeUnitList(1, sortKey, sortVal);
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};

    if (this.PeriodFromValue) {
      filter['greaterthanequal'] = {};
    }
    if (this.PeriodToValue) {
      filter['lessthanequal'] = {};
    }

    if (this.PeriodFromValue) {
      filter['greaterthanequal']['date'] = moment(this.PeriodFromValue).format('YYYY-MM-DD');
    }
    if (this.PeriodToValue) {
      filter['lessthanequal']['date'] = moment(this.PeriodToValue).format('YYYY-MM-DD');
    }

    if (this.service_id) {
      this.inJSON['service_id'] = this.service_id;
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
}
