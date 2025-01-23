import {Component, HostListener, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ServicesUpdated, UnchargeUnit} from './uncharge-unit.model';
import {BASE} from '../../../../utility/constants/base-constants';
import {Clients} from '../../client-module/view-client/view-client.model';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import {AdminAPI} from '../../../../utility/constants/api';
import * as moment from 'moment';
import {CommonFunctions, convertURLParamToEncode} from '../../../../utility/common-functions';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {Privilege} from '../../../../utility/shared-model/admin-user.model';

@Component({
  selector: 'app-uncharged-units',
  templateUrl: './uncharged-units.component.html',
  styleUrls: ['./uncharged-units.component.scss']
})
export class UnchargedUnitsComponent implements OnInit {

  // Data Variables
  unchargedUnits: UnchargeUnit[] = [];
  servicesUpdated: ServicesUpdated[] = [];
  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  clientList: Clients[] = [];
  billingList: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  parentClientList: Clients[] = [];
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
  entity_id = [];
  tabID = ADMINTABACCESS.BILLING_UNCHARGEUNIT;
  tabData: Privilege | any[];

  constructor(private _fb: FormBuilder, public _router: Router, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              private _sharedObjService: SharedObjService) {
  }

  get parent_id(): AbstractControl {
    return this.filterForm.get('parent_id');
  }

  get entityIdTradingField(): AbstractControl {
    return this.filterForm.get('trading_entity');
  }

  get entityIdBillingField(): AbstractControl {
    return this.filterForm.get('billing_entity');
  }

  get fromDateField(): AbstractControl {
    return this.filterForm.get('from_date');
  }

  get toDateField(): AbstractControl {
    return this.filterForm.get('to_date');
  }

  ngOnInit() {
    // To Check Access Rights
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    // this.getUnchargeUnitList(1, 'id', 'desc');
    this.createAdvanceFilterForm();
    this.getClientList();
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
      parent_id: new FormControl(null),
      billing_entity: new FormControl(null),
      trading_entity: new FormControl(null),
      from_date: new FormControl(new Date(year, month, 1)),
      to_date: new FormControl(new Date())
    });

    this.advanceFilterForm = this._fb.group({
      parent_id: new FormControl(null),
      billing_entity: new FormControl(null),
      trading_entity: new FormControl(null),
      from_date: new FormControl(new Date(year, month, 1)),
      to_date: new FormControl(new Date())
    });
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = this.filteredTradingClientList = response;
      this.parentClientList = response.filter(item => item.is_parent === 1);
      this.clientList.map((item) => {
        item.trading_name = item.trading_name + '- (' + item.code + ')';
        return item;
      });
      this.filteredTradingClientList.map((item) => {
        item.trading_name = item.trading_name + '- (' + item.code + ')';
        return item;
      });
      this.billingList = response;
      this.billingList.map((item) => {
        // item.id = item.billing_name;
        // item.billing_name = item.billing_name + '- (' + item.code + ')';
        return item;
      });
    });
  }

  /**
   *
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getUnchargeUnitList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.UNCHARGEUNIT_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
      this.handleUnchargeUnitResponse(response);
    });
  }

  /**
   * Handle Uncharge Unit List Response
   * @param response
   */
  handleUnchargeUnitResponse(response: any) {
    this.unchargedUnits = response.payload.data;
    this.servicesUpdated = response.payload.servicesUpdated;
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
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.UNCHARGEUNIT_LIST_EXPORT_EXCEL, params, this.getSearchParam(), 'Uncharge Unit ', 0).subscribe(response => {
    });
  }

  /**
   * Uncharge Unit Timesheet Summary Redirect
   * @param entity_id
   */
  onUnchargedSummary(entity_id: number, service_id: string) {
    if (entity_id > 0 && service_id !== '') {
      const jsonData = convertURLParamToEncode({
        'entity_id': entity_id,
        'from_date': this.PeriodFromValue,
        'to_date': this.PeriodToValue,
        'service_id': service_id
      });
      this._router.navigate(['/' + AdminRoutes.UNCHARGED_UNITS_SUMMARY], {queryParams: jsonData});
      // this._sharedService.setRedirectParameter(REDIRECTPARAMKEYS.UNCHARGE_UNIT_TIMESHEET,);
    }
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
    if (elementName === 'trading_entity') {
      delete this.inJSON['entity_id'];
      delete this.inJSON[elementName];
      this.entity_id = [];
    } else if (elementName === 'parent_id') {
      delete this.equalJSON['parent_id'];
    } else if (elementName === 'billing_entity') {
      delete this.likeJSON['billing_name'];
    } else if (elementName === 'from_date') {
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
          'parent_id': form.value['parent_id'],
          'trading_entity': form.value['trading_entity'],
          'billing_entity': form.value['billing_entity'],
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
    this.entity_id = [];
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
      if (form.value['billing_entity'] !== '' && form.value['billing_entity']) {
        // this.entity_id.push(form.value['billing_entity']);
        // delete form.value['billing_entity'];
      }
      if (form.value['trading_entity'] !== '' && form.value['trading_entity']) {
        this.entity_id.push(form.value['trading_entity']);
        delete form.value['trading_entity'];
      }

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
          if (key === 'billing_entity') {
            // this.likeJSON['']
            this.likeJSON['billing_name'] = encodeURIComponent(form.value[key]);
          } else if (key === 'parent_id') {
            this.equalJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilterView = false;
      this.getUnchargeUnitList(1, 'id', 'desc');
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

    // IF TAM & TH Filter then need to give seperate param so
    if (this.entity_id.length) {
      params['entity_id'] = this.entity_id.join(',');
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
   * Get Services Is Updated
   * @param entity_id
   * @param service_id
   */
  getServicesIsUpdated(entity_id: number, service_id: number) {
    let returnClass = 'text-center';
    const itemData = this.servicesUpdated.filter(item => ((item.entity_id === entity_id) && (item.service_id === service_id) && (item.is_updated === 0)));
    if (itemData.length) {
      returnClass += ' red-color';
    }
    return returnClass;
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * On Change Parent Entity
   * @param event
   */
  onChangeParentEntity(event: any) {
    this.clientList = this.filteredTradingClientList;
    this.billingList = this.filteredTradingClientList;
    if (event && event.id > 0) {
      this.billingList = this.clientList = this.filteredTradingClientList.filter(item => item["parent_id"] === event.id);
    }
  }
}
