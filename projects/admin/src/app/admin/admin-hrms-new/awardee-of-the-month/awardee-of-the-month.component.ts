import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Nominee} from '../../../../utility/shared-model/nominee-model';
import {BASE} from '../../../../utility/constants/base-constants';
import {MatDialog, PageEvent} from '@angular/material';
import {AdminUser} from '../../../../utility/shared-model/admin-user.model';
import {Router} from '@angular/router';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {AdminAPI} from '../../../../utility/constants/api';
import {AdminRoutes} from '../../../../utility/constants/admin-route';

@Component({
  selector: 'app-awardee-of-the-month',
  templateUrl: './awardee-of-the-month.component.html',
  styleUrls: ['./awardee-of-the-month.component.scss']
})
export class AwardeeOfTheMonthComponent implements OnInit {

  // Form Variables
  filterForm: FormGroup;

  // Data Variables
  nomineeList: Nominee[] = [];
  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;
  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  // MatPaginator Output
  pageEvent: PageEvent;
  userInfo: AdminUser;
  userList: AdminUser[] = [];

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.userInfo = this._sharedService.getUser();
    this.equalJSON = {"user_id": this.userInfo.id};
    this.getMyAwardList();
  }

  /**
   * user Listing API.
   * @param pageNumber
   * @param key
   * @param val
   */
  getMyAwardList() {
    this._commonCrudService.listData(AdminAPI.AWARD_NOMINEE_LIST_DASHBOARD, {}, {}).subscribe((response) => {
      this.nomineeList = response.payload.data;
    });
  }

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

  /**
   * Download Invoice Award
   * @param nominee
   */
  onDownloadAward(nominee: Nominee) {
    this._commonCrudService.downloadExcelData(AdminAPI.AWARD_PREVIEW + '/' + nominee.id, {'status_id': 2, 'is_view': 1}, {}, 'Award ' + nominee.userfullname, 1).subscribe((response) => {
    });
  }

  // advance filter search operation
  getSearchParam() {
    const params = {};
    const filter = {};
    // check for the object whether its empty or not
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

  onPageChange(event) {
    this.pageSize = event.pageSize;
    // this.getMyAwardList(event.pageIndex + 1);
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
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
        }
      }
    }
    // For Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'user_id' || key === 'leave_type' || key === 'status_id') {
            this.equalJSON[key] = form.value[key];
          }
        }
      }
      this.getMyAwardList();
    }
  }
}
