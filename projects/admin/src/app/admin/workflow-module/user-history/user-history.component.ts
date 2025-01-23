import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {BASE, GLOBALDATAKEYS} from "../../../../utility/constants/base-constants";
import {AwardUser, Nominee} from "../../../../utility/shared-model/nominee-model";
import {SharedService} from "../../../../utility/shared-service/shared.service";
import {CommonCrudService} from "../../../../utility/shared-service/common-crud.service";
import {AdminAPI} from "../../../../utility/constants/api";
import {CommonFunctions, getDateRange} from "../../../../utility/common-functions";
import {SharedObjService} from "../../../../utility/shared-service/shared-object.service";
import {AdminUser} from "../../../../utility/shared-model/admin-user.model";
import {Department, Designation, OfficeLocation} from "../../../../utility/shared-model/designation.model";
import * as moment from "moment";

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {

  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  findInSetJSON = {};
  orJSON = {};
  isOpenFilterView = false;
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
  userHistoryList: AwardUser[] = [];
  userList: AdminUser[] = [];
  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;
  tamList: AdminUser[] = [];
  tlList: AdminUser[] = [];
  designationList: Designation[] = [];
  departmentList: Department[] = [];
  locationList: OfficeLocation[] = [];
  dateRangeList = [];

  // get form control
  get userIDField(): AbstractControl {
    return this.filterForm.get('user_id');
  }

  get designationField(): AbstractControl {
    return this.filterForm.get('designation_id');
  }

  get departmentField(): AbstractControl {
    return this.filterForm.get('department_id');
  }

  get awardField(): AbstractControl {
    return this.filterForm.get('award_id');
  }

  get awardStatusField(): AbstractControl {
    return this.filterForm.get('status_id');
  }

  get assignManagerField(): AbstractControl {
    return this.filterForm.get('assign_manager');
  }

  get tlField(): AbstractControl {
    return this.filterForm.get('tl');
  }

  get locationField(): AbstractControl {
    return this.filterForm.get('location_id');
  }

  get awardMonth(): AbstractControl {
    return this.filterForm.get('month');
  }

  constructor(private _sharedObjService: SharedObjService, private _sharedService: SharedService, private _commonCrudService: CommonCrudService, private _fb: FormBuilder, public _router: Router, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dateRangeList = getDateRange(moment(new Date().setFullYear(new Date().getFullYear() - 1)).format("YYYY-MM-DD"), moment(new Date()).format("YYYY-MM-DD"), 1);
    this.getUserHistoryList(1);
    this.getUserList();
    this.createAdvanceFilterForm();
    this.getDesignationList();
    this.getDepartmentList();
    this.getLocationList();
  }


  /**
   * designation List API
   */
  getDesignationList() {
    this._sharedObjService.getDesignationList({records: 'all'}).subscribe(response => {
      this.designationList = response;
    });
  }

  getDepartmentList() {
    this._commonCrudService.listData(AdminAPI.DEPARTMENT, {'records': 'all'}).subscribe(Response => {
      this.departmentList = Response.payload.data;
    });
  }

  /**
   * Create Advance Filter
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      user_id: new FormControl(null),
      designation_id: new FormControl(null),
      department_id: new FormControl(null),
      award_id: new FormControl(null),
      status_id: new FormControl(null),
      assign_manager: new FormControl(null),
      location_id: new FormControl(null),
      tl: new FormControl(null),
      month: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      user_id: new FormControl(null),
      designation_id: new FormControl(null),
      department_id: new FormControl(null),
      award_id: new FormControl(null),
      status_id: new FormControl(null),
      assign_manager: new FormControl(null),
      location_id: new FormControl(null),
      tl: new FormControl(null),
      month: new FormControl(null)
    });
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {}).subscribe((response) => {
      this.userList = response;
      this.tamList = this.userList.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 9 : 0);
      this.tlList = this.userList.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 60 : 0);
    });
  }

  /**
   * Get User Nominee List
   * @param pageNumber
   * @param key
   * @param val
   */
  getUserHistoryList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.AWARD_USER, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
      this.userHistoryList = response.payload.data;
      this.page = response.pager.pageNumber;
      this.pageIndex = this.page - 1;
      this.totalRecords = +response.pager.totalRecords;
      this.sortBy = response.pager.sortBy;
      this.sortOrder = response.pager.sortOrder;
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
    this.getUserHistoryList(1, sortKey, sortVal);
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
          'user_id': form.value['user_id'],
          'designation_id': form.value['designation_id'],
          'department_id': form.value['department_id'],
          'award_id': form.value['award_id'],
          'status_id': form.value['status_id'],
          'assign_manager': form.value['assign_manager'],
          'tl': form.value['tl'],
          'location_id': form.value['location_id'],
          'month': form.value['month']
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
    this.orJSON = {};
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
    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'user_id' || key === 'designation_id' || key === 'department_id' || key === 'award_id' || key === 'status_id' || key === 'assign_manager' || key === 'location_id' || key === 'tl') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'month' && (form.value[key] !== '') && (form.value[key].length > 0)) {
            this.inJSON[key] = form.value[key].join();
          }
        }
      }
      this.isOpenFilterView = false;
      this.getUserHistoryList(1);
    }
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
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName?: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'user_id' || elementName === 'designation_id' || elementName === 'department_id' || elementName === 'status_id' || elementName === 'assign_manager' || elementName === 'tl' || elementName === 'location_id') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'month') {
      delete this.inJSON[elementName];
    }
    this.getUserHistoryList(1, this.sortBy, this.sortOrder);
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
    if (Object.keys(this.findInSetJSON).length !== 0) {
      params['findinset'] = this.findInSetJSON;
    }

    if (Object.keys(this.orJSON).length !== 0) {
      params['or'] = {'like': [this.orJSON]};
    }
    return params;
  }

  onPageChange(event) {
    this.pageEvent = event;
    this.getUserHistoryList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  onAddAward(awardUser: AwardUser) {
    if (awardUser) {
      this._sharedService.setClientData(GLOBALDATAKEYS.AWARD_NOMINEE, null);
      this._sharedService.setClientData(GLOBALDATAKEYS.AWARD_USER, null);
      this._sharedService.setClientData(GLOBALDATAKEYS.AWARD_USER, awardUser);
      this._router.navigate(['/' + AdminRoutes.ADD_NOMINEE]);
    }
  }

  /**
   * Download Excel
   */
  onDownloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.AWARD_USER, params, this.getSearchParam(), 'Award Criteria ', 0).subscribe(response => {
    });
  }


  /**
   * Download Invoice Award
   * @param nominee
   */
  onDownloadAward(nominee: Nominee) {
    this._commonCrudService.downloadExcelData(AdminAPI.AWARD_PREVIEW + '/' + nominee.id, {'status_id': 2, 'is_view': 1}, {}, 'Award ' + nominee.userfullname, 1).subscribe((response) => {
    });
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.likeJSON = {};
    this.equalJSON = {};
    this.inJSON = {};
    this.getUserHistoryList(1);
  }

  /**
   * Location List API
   */
  getLocationList() {
    this._commonCrudService.listData(AdminAPI.LOCATION, {'records': 'all'}, {}).subscribe(Response => {
      this.locationList = Response.payload.data;
    });
  }
}
