import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BASE, GLOBALDATAKEYS} from '../../../../utility/constants/base-constants';
import {Designation} from '../../../../utility/shared-model/designation.model';
import {AdminUser, Privilege} from '../../../../utility/shared-model/admin-user.model';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../utility/constants/api';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss'],
})
export class DesignationComponent implements OnInit {
  // Constant Variables
  filterForm: FormGroup;

  // Data Variables
  designationList: Designation[] = [];
  designationListFilter: Designation[] = [];
  userListFilter: AdminUser[] = [];
  equalJSON = {};
  likeJSON = {};
  inJSON = {};

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
  tabID = ADMINTABACCESS.ADMIN_DESIGNATION;
  tabData: Privilege | any[];

  constructor(private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService,
              public _router: Router,
              private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.initializationMethod();
  }

  // Initialization Methods
  initializationMethod() {
    // form intialization for filter form
    this.createAdvanceFilterForm();
    this.getDesignationList(1);
    this.getDesignationListFilter();
  }

  // Advance Filter form
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      designation_name: new FormControl(null)
    });
  }

  // Designation listing API
  getDesignationList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.DESIGNATION, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(Response => {
      this.handleDesignationResponse(Response);
    });
  }

  getDesignationListFilter() {
    this._sharedObjService.getDesignationList({records: 'all'}).subscribe(response => {
      this.handleDesignationResponseFilter(response);
    });
  }

  // Handle Designation Respone
  handleDesignationResponse(response: any) {
    this.designationList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  handleDesignationResponseFilter(response: any) {
    // assign data to array
    this.designationListFilter = response;
  }

  // Events
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getDesignationList(event.pageIndex + 1);
  }

  // Reset form of advance filter
  resetForm() {
    this.filterForm.reset();
    this.getDesignationList(1);
  }

  // Toggle (Hide / Show) form of advance filter
  onToggleFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  onEditDesignation(designation ?: Designation) {
    this._sharedService.setClientData(GLOBALDATAKEYS.DESIGNATION, designation);
    this._router.navigate(['/' + AdminRoutes.EDIT_DESIGNATION]);
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  // Set Advance Filter
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
    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'designation_name') {
            this.likeJSON[key] = form.value[key];
          }
        }
      }
      this.getDesignationList(1);
    }
  }

  // helper
  // get function for returning pageNumber and page size at time of listing api
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

  // Get Sort Data
  getSortData(sortKey: string, sortVal: string) {
    this.getDesignationList(1, sortKey, sortVal);
  }

  // advance filter search operation
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
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }
    return params;
  }
}
