import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageEvent} from '@angular/material';
import {CommonFunctions} from '../../../../utility/common-functions';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Clients} from '../../client-module/view-client/view-client.model';
import {BASE, BILLINGFROM, yesNo} from '../../../../utility/constants/base-constants';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {Privilege} from '../../../../utility/shared-model/admin-user.model';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import {AdminAPI} from '../../../../utility/constants/api';
import {ServicesUpdated} from '../uncharged-units/uncharge-unit.model';
import {BillingBasic} from '../../../../utility/shared-model/billing.model';
import {Services} from '../../../../utility/shared-model/services.model';

@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html',
  styleUrls: ['./billing-information.component.scss']
})
export class BillingInformationComponent implements OnInit {

  // Data Variables
  billingBasic: BillingBasic[] = [];
  serviceList: Services[] = [];
  clientList: Clients[] = [];
  billingList: Clients[] = [];
  codeList: Clients[] = [];
  servicesUpdated: ServicesUpdated[] = [];
  yesNoList = yesNo;
  billingFrom = yesNo;
  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  entity_id = [];

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
  tabID = ADMINTABACCESS.BILLING_BILLINGINFORMATION;
  tabData: Privilege | any[];


  constructor(private _fb: FormBuilder, public _router: Router, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              private _sharedObjService: SharedObjService) {
  }

  get entityCodeField(): AbstractControl {
    return this.filterForm.get('code');
  }

  get entityIdBillingField(): AbstractControl {
    return this.filterForm.get('billing_entity');
  }

  get entityIdTradingField(): AbstractControl {
    return this.filterForm.get('trading_entity');
  }

  get serviceIdField(): AbstractControl {
    return this.filterForm.get('service_id');
  }

  get serviceIdUpdatedField(): AbstractControl {
    return this.filterForm.get('is_updated');
  }

  get parentIdField(): AbstractControl {
    return this.filterForm.get('parent_id');
  }

  get isBillingFrom(): AbstractControl {
    return this.filterForm.get('billing_from');
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
    this.getClientList();
    this.getServices();
    this.createAdvanceFilterForm();
    this.setAdvanceFilter(this.filterForm);
  }


  /**
   * Create Change InOut
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      code: new FormControl(null),
      billing_entity: new FormControl(null),
      trading_entity: new FormControl(null),
      service_id: new FormControl(),
      is_updated: new FormControl(),
      parent_id: new FormControl(),
      billing_from: new FormControl(1)
    });

    this.advanceFilterForm = this._fb.group({
      code: new FormControl(null),
      billing_entity: new FormControl(null),
      trading_entity: new FormControl(null),
      service_id: new FormControl(),
      is_updated: new FormControl(),
      parent_id: new FormControl(),
      billing_from: new FormControl(1)
    });
  }

  /**
   * Get Service For Generate Invoice
   */
  getServices() {
    this._sharedObjService.getServices({}, {'compare': {'equal': {'parent_id': 0}}}).subscribe((response) => {
      this.serviceList = response;
    });
  }


  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = response;
      this.billingList = response;
      this.codeList = response;
    });
  }

  /**
   *
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getBillingList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.BILLING_BASIC, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
      this.handleBillingResponse(response);
    });
  }

  /**
   * Handle Billing List Response
   * @param response
   */
  handleBillingResponse(response: any) {
    this.billingBasic = response.payload.data;
    this.servicesUpdated = response.payload.servicesUpdated;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
    this.billingBasic.map(item => {
      item['service_array'] = [];
      if (item.service_id !== '' && item.service_id !== null) {
        const serviceIDArray = item.service_id.split(',');
        const serviceNameArray = item.service.split(',');
        if (serviceIDArray.length === serviceNameArray.length) {
          let i = 0;
          serviceIDArray.forEach(dataItem => {
            const itemData = this.servicesUpdated.filter(itemUpdate => ((itemUpdate.entity_id === item.entity_id) && (itemUpdate.service_id === Number(dataItem)) && (itemUpdate.is_updated === 1)));
            if (itemData.length) {
              item['service_array'].push({'key': dataItem, 'value': serviceNameArray[i], 'is_updated': 1});
            } else {
              item['service_array'].push({'key': dataItem, 'value': serviceNameArray[i], 'is_updated': 0});
            }
            i++;
          });
        }
      }
    });
  }

  /**
   * Get Billing From
   * @param status_id
   */
  getBillingFrom(status_id: number): string {
    const val = this.billingFrom.filter(elem => elem.key === Number(status_id));
    return (val.length) ? val[0].label : '';
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
    this.getBillingList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.BILLING_BASIC_EXPORT, params, this.getSearchParam(), 'Uncharge Unit ', 0).subscribe(response => {
    });
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'code' || elementName === 'service_id' || elementName === 'is_updated' || elementName === 'parent_id' || elementName === 'billing_from') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'billing_entity' || elementName === 'trading_entity') {
      if (elementName === 'billing_entity') {
        elementName = 'billing_name';
      } else {
        elementName = 'trading_name';
      }
      delete this.likeJSON[elementName];
    }
    this.getBillingList(1, this.sortBy, this.sortOrder);
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
    this.getBillingList(1, 'id', 'desc');
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
          'code': form.value['code'],
          'billing_entity': form.value['billing_entity'],
          'trading_entity': form.value['trading_entity'],
          'service_id': form.value['service_id'],
          'is_updated': form.value['is_updated'],
          'parent_id': form.value['parent_id'],
          'billing_from': form.value['billing_from']
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
      // if (form.value['billing_entity'] !== '' && form.value['billing_entity']) {
      // this.entity_id.push(form.value['billing_entity']);
      // delete form.value['billing_entity'];
      // }
      // if (form.value['trading_entity'] !== '' && form.value['trading_entity']) {
      //   this.entity_id.push(form.value['trading_entity']);
      //   delete form.value['trading_entity'];
      // }

      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'code' || key === 'service_id' || key === 'is_updated' || key === 'parent_id' || key === 'billing_from') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'billing_entity') {
            this.likeJSON['billing_name'] = encodeURIComponent(form.value[key]);
            delete form.value['billing_entity'];
          } else if (key === 'trading_entity') {
            this.likeJSON['trading_name'] = encodeURIComponent(form.value[key]);
            delete form.value['trading_entity'];
          }
        }
      }
      // IF Entity search multiple values
      if (this.entity_id.length) {
        this.inJSON['entity_id'] = this.entity_id.join(',');
      }

      this.isOpenFilterView = false;
      this.getBillingList(1, 'id', 'desc');
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

    return params;
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getBillingList(1, sortKey, sortVal);
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
    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !CommonFunctions.isEmpty(filter)) {
      params['compare'] = filter;
    }
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }
    return params;
  }

  /**
   * On Edit billing basic info
   * @param billingData
   */
  onEditBillingBasicInfo(billingData: BillingBasic) {
    this._commonCrudService.getData(AdminAPI.BILLING_BASIC, 0, {}, {
      'compare': {
        'equal': {
          'entity_id': billingData.entity_id
        }
      }
    }).subscribe((response) => {
      if (response) {
        const data = response.payload.data;
        if (data[0]) {
          // this.billingBasic = data[0];
          // console.log(this.billingBasic);
          this._sharedService.setBillingData(data[0]);
          window.open(AdminRoutes.BILLING_BASIC_INFO_SERVICES, '_blank');
        }
      }
    });
  }

  /**
   * On Edit billing basic info service
   * @param billingData
   */
  onViewBillingInfo(billingData: BillingBasic) {
    this._sharedService.setBillingData(billingData);
    window.open(AdminRoutes.VIEW_BILLING_INFORMATION, '_blank');
  }

  onBillingServices(billingData: BillingBasic) {
    this._sharedService.setBillingData(billingData);
    this._router.navigate(['/' + AdminRoutes.BILLING_BASIC_INFO_SERVICES]);
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilterView = false;
    }
  }

  /**
   * Display Get Status List
   * @param {number} status_id
   * @returns {string}
   */
  getYesNoStatus(status_id: number): string {
    const val = this.yesNoList.filter(elem => elem.key === Number(status_id));
    return (val.length) ? val[0].label : 'Yes';
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
