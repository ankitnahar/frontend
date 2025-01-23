import {Component, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';
import {ValidationConstantMessage} from '../../../../utility/validation';
import {Bank} from '../../client-module/view-client/update-client/information/bank-information/bank.model';
import {BASE} from '../../../../utility/constants/base-constants';
import {PageEvent} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {Privilege} from '../../../../utility/shared-model/admin-user.model';
import {Router} from '@angular/router';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../utility/constants/api';
import {BaseComponent} from '../../../../utility/components/base/base.component';
import {AdminRoutes} from "../../../../utility/constants/admin-route";

@Component({
  selector: 'app-admin-bank-information',
  templateUrl: './admin-bank-information.component.html',
  styleUrls: ['./admin-bank-information.component.scss']
})
export class AdminBankInformationComponent extends BaseComponent implements OnInit {

  // Angular Variables
  @ViewChild('addMoreBankForm') addMoreBankForm;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  bankList: Bank[] = [];
  bankObject: Bank[] = [];

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

  // Form Group variables
  addBankForm: FormGroup;
  filterForm: FormGroup;
  // State variables
  isBankUpdate = false;
  tabBankID = ADMINTABACCESS.CLIENT_BANK;
  tabDataBank: Privilege | any[];
  equalJSON = {};
  likeJSON = {};

  constructor(private _fb: FormBuilder, private _router: Router, private _sharedService: SharedService, private _commonCrudService: CommonCrudService,
              ) {
    super();
  }


  ngOnInit() {
    this.tabDataBank = this._sharedService.checkUserPrivilegesTabs(this.tabBankID);
    this.createBankForm();
    this.createFilterForm();
    this.getBankList(1);
  }

  /**
   * Bank Information listing API
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getBankList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.BANK_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParams()).subscribe(Response => {
      this.handleBankResponse(Response);
    });
  }

  /**
   * Create Advance Filter
   */createFilterForm() {
    this.filterForm = this._fb.group({
      bank_name: new FormControl(null)
    });
  }

  /**
   * Handle Bank Information Response
   * @param response
   */
  handleBankResponse(response: any) {
    this.bankList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Active & Inactive Bank from listing
   * @param {boolean} action
   * @param {Bank} bankObject
   */
  activeInactiveBank(action: boolean, bankObject: Bank) {
    const params = {'is_active': action ? 1 : 0};
    this._commonCrudService.updateDataWithPut(AdminAPI.BANK_LIST, bankObject.id, params).subscribe(response => {
      this.bankList.map(item => {
        if (item.id === bankObject.id) {
          item.is_active = item.is_active ? 0 : 1;
        }
      });
    });
  }

  /**
   * Generate Bank Add form
   */
  createBankForm() {
    this.addBankForm = this._fb.group({
      bank_name: new FormControl('', <any>Validators.required)
    });
  }

  /**
   * On Add or Update bank
   * @param formParams
   * @param {boolean} isValid
   * @param bankObject
   */
  onBankSubmit(formParams: any, isValid: boolean, bankObject: any) {
    if (isValid) {
      formParams['is_active'] = 1;
      this._commonCrudService.addData(AdminAPI.BANK_LIST, formParams).subscribe(Response => {
        this.getBankList(1);
        this.createBankForm();
        this.addMoreBankForm.resetForm();
      });
    }
  }

  /**
   * Bank name edit from grid
   * @param bank_name
   * @param bankObject
   */
  onBankNameUpdate(bank_name, bankObject: any) {
    const params = {'bank_name': bank_name};
    this._commonCrudService.updateDataWithPut(AdminAPI.BANK_LIST, bankObject.id, params).subscribe(Response => {
      this.bankList.map(item => {
        if (item.id === bankObject.id) {
          item.bank_name = bank_name;
        }
      });
    });
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getBankList(event.pageIndex + 1);
  }

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
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
    let params = {};
    params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    sortKey ? params ['sortBy'] = sortKey : '';
    sortOrder ? params ['sortOrder'] = sortOrder : '';
    return params;
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getBankList(1, sortKey, sortVal);
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

          }
        }
      }
    }
    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'bank_name') {
            this.likeJSON['bank_name'] = encodeURIComponent(form.value[key]);
          }
        }
      }
      this.getBankList(1);
    }
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
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
