import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {BaseComponent} from '../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OtherAccount} from '../../client-module/view-client/update-client/information/other-information/other-information.model';
import {BASE} from '../../../../utility/constants/base-constants';
import {PageEvent} from '@angular/material';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {Privilege} from '../../../../utility/shared-model/admin-user.model';
import {Router} from '@angular/router';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../utility/constants/api';
import {AdminRoutes} from "../../../../utility/constants/admin-route";

@Component({
  selector: 'app-admin-more-particular-type',
  templateUrl: './admin-more-particular-type.component.html',
  styleUrls: ['./admin-more-particular-type.component.scss']
})
export class AdminMoreParticularTypeComponent extends BaseComponent implements OnInit {
  @ViewChild('addMoreAccountForm') addMoreAccountForm;
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Form Group Variables
  addMoreParticularForm: FormGroup;

  // Data Variables
  particularTypeList: OtherAccount[] = [];

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

  constructor(private _fb: FormBuilder, private _router: Router, private _sharedService: SharedService, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.tabDataBank = this._sharedService.checkUserPrivilegesTabs(this.tabBankID);
    this.getAccountTypeList(1);
    this.createParticularTypeForm();
    this.createFilterForm();
  }

  /**
   * Create Advance Filter
   */
  createFilterForm() {
    this.filterForm = this._fb.group({
      account_name: new FormControl(null)
    });
  }
  /**
   * Create Account Type Form
   */
  createParticularTypeForm() {
    this.addMoreParticularForm = this._fb.group({
      account_name: new FormControl(null, <any>Validators.required)
    });
  }

  /**
   * Account Type listing API
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getAccountTypeList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.OTHER_ACCOUNT_TYPE, this.getQueryParams(pageNumber, key, val), this.getSearchParams()).subscribe(Response => {
      this.handleAccountTypeResponse(Response);
    });
  }

  /**
   * Handle Account TypeResponse
   * @param response
   */
  handleAccountTypeResponse(response: any) {
    this.particularTypeList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Active & Inactive Account from listing
   * @param {boolean} action
   * @param {OtherAccount} otherAccountObject
   */
  activeInactiveAccount(action: boolean, otherAccountObject: OtherAccount) {
    const params = {'is_active': action ? 1 : 0};
    this._commonCrudService.updateDataWithPut(AdminAPI.OTHER_ACCOUNT_TYPE, otherAccountObject.id, params).subscribe(response => {
      this.particularTypeList.map(item => {
        if (item.id === otherAccountObject.id) {
          item.is_active = item.is_active ? 0 : 1;
        }
      });
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
    this.getAccountTypeList(1, sortKey, sortVal);
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getAccountTypeList(event.pageIndex + 1);
  }

  /**
   * On Submit
   */
  onSubmit(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.addData(AdminAPI.OTHER_ACCOUNT_TYPE, form.value).subscribe(Response => {
        this.getAccountTypeList(1);
        this.createParticularTypeForm();
        this.addMoreAccountForm.resetForm();
      });
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
          if (key === 'account_name') {
            this.likeJSON['account_name'] = encodeURIComponent(form.value[key]);
          }
        }
      }
      this.getAccountTypeList(1);
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
