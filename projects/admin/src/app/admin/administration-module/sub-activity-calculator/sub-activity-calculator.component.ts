import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {SubActivityAddNewCalculatorComponent} from './sub-activity-add-new-calculator/sub-activity-add-new-calculator.component';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {BASE, GLOBALDATAKEYS} from '../../../../utility/constants/base-constants';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {Privilege} from '../../../../utility/shared-model/admin-user.model';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import {AdminAPI} from '../../../../utility/constants/api';
import {BillingSubactivityCalculator} from './billing-subactivity-calculator.model';

@Component({
  selector: 'app-sub-activity-calculator',
  templateUrl: './sub-activity-calculator.component.html',
  styleUrls: ['./sub-activity-calculator.component.scss']
})
export class SubActivityCalculatorComponent implements OnInit {

  //Data Variable
  subActivityCalculatorList: BillingSubactivityCalculator[] = [];
  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  orJSON = {};
  // State variables
  trIndex = -1;

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Other Variables
  isOpenFilterView = false;
  isOpenHistoryDialog = false;

  tabID = ADMINTABACCESS.BILLING_PAYROLLSTANDARDCALC;
  tabData: Privilege | any[];

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService, private _sharedObjService: SharedObjService) {
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.createAdvanceFilterForm();
    this.getSubActivituCalcList(1, 'id', 'desc');
  }

  /**
   * Initialization methods
   * @param pageNumber
   * @param key
   * @param val
   */
  getSubActivituCalcList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.BILLING_PAYROLL_CALC_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam())
      .subscribe((response) => {
        this.handleSubActivituCalcListResponse(response);
      });
  }

  /**
   * Handle SubActivity Calc Response
   * @param response
   */
  handleSubActivituCalcListResponse(response) {
    // console.log(response);
    this.subActivityCalculatorList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * On Add Calc
   * @param subCalc
   * @constructor
   */
  Addcalculator() {
    let dialogRef = this.dialog.open(SubActivityAddNewCalculatorComponent, {
      panelClass: 'add-form-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getSubActivituCalcList(1, 'id', 'desc');
    });
  }

  /**
   * On Edit SubActivity Calc
   * @param SubActivityCalc
   */
  onEditSubActivity(SubActivityCalc: BillingSubactivityCalculator) {
    this._sharedService.setClientData(GLOBALDATAKEYS.PAYROLL_CALC, SubActivityCalc);
    this._router.navigate(['/' + AdminRoutes.ADDITIONAL_PAYROLL_ACTIVITY_SCHEDULE]);
  }

  /**
   * Create Change InOut
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      search: new FormControl(null)
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
    this.inJSON = {};
    this.orJSON = {};
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
          if (key === 'search') {
            this.orJSON['name'] = form.value[key];
          }
        }
      }
      this.getSubActivituCalcList(1, 'id', 'desc');
    }
  }

  // Events
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getSubActivituCalcList(event.pageIndex + 1);
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * get function for returning pageNumber and page size at time of listing api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{pageNumber: number; recordsPerPage: number}}
   */
  private getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    const params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    if (sortKey) {
      params ['sortBy'] = sortKey;
    }
    if (sortOrder) {
      params ['sortOrder'] = sortOrder;
    }
    return params;
  }

  /**
   * Default search params for client listing API
   * @returns {{}}
   */
  private getSearchParam() {
    const params = {};
    const filter = {};
    params['compare'] = filter;
    if (Object.keys(this.orJSON).length !== 0) {
      params['or'] = {'like': [this.orJSON]};
    }
    return params;
  }
}
