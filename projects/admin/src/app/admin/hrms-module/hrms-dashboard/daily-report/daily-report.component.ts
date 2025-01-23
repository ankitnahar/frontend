import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialog, PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {InOutViewDialog} from './view-dialog/in-out-view-dialog';
import {DailyReport} from './daily-report.model';
import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import * as moment from 'moment';
import {CommonFunctions, convertURLParamToEncode} from '../../../../../utility/common-functions';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {ADMINTABACCESS} from "../../../../../utility/constants/header-constant";

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.scss']
})
export class DailyReportComponent implements OnInit {

  DailyReport = ADMINTABACCESS.DAILYREPORT;
  // Form Variables
  dailyReportFilterForm: FormGroup;
  filterDailyReportForm: FormGroup;

  // Data Variables
  fetchPunchinReport = false;
  dailyReportList: DailyReport[] = [];
  userList: AdminUser[] = [];
  userData: AdminUser;
  dailyReportForm: FormGroup;

  toDate = null;
  fromDate = null;
  equalJSON = {};

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  page: number;
  pageIndex: number;
  totalRecords: number;
  pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilter = false;
  isOpenHistoryDialog = false;

  constructor(public _router: Router, public dialog: MatDialog, private _sharedService: SharedService, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService, private _fb: FormBuilder) {
  }

  // get form control
  get userId(): AbstractControl {
    return this.filterDailyReportForm.get('user_id');
  }

  get fromDateField(): AbstractControl {
    return this.filterDailyReportForm.get('from_date');
  }

  get toDateField(): AbstractControl {
    return this.filterDailyReportForm.get('to_date');
  }

  ngOnInit() {
    this.userData = this._sharedService.getUser();
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.fetchPunchinReport = this._sharedService.checkUserPrivileges(this.DailyReport, 'otherRights', 'otherRights', 'button_name', 'punchin_question_report', 1);
    this.createDailyReportForm();
    this.setAdvanceFilter(this.dailyReportFilterForm);
  }

  getDailyReport(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.DAILYREPORT_LISTING, this.getQueryParams(pageNumber, key, val),
      this.getSearchParam())
      .subscribe((response) => {
        this.handleResponse(response);
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

    if (this.toDate) {
      filter['lessthanequal'] = {};
      filter['lessthanequal']['date'] = moment(this.toDate).format('YYYY-MM-DD');
    }

    if (this.fromDate) {
      filter['greaterthanequal'] = {};
      filter['greaterthanequal']['date'] = moment(this.fromDate).format('YYYY-MM-DD');
    }

    if (Object.keys(this.equalJSON).length || !CommonFunctions.isEmpty(filter)) {
      params['compare'] = filter;
    }
    return params;
  }

  /**
   * Handle AM Notes List Response
   * @param response
   */
  handleResponse(response: any) {
    this.dailyReportList = response.payload.data;
    this.userList = response.payload.userlist;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Create Advance Filter
   */
  createDailyReportForm() {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    this.dailyReportFilterForm = this._fb.group({
      user_id: new FormControl(this.userData.id),
      from_date: new FormControl(moment(firstDay).format('YYYY-MM-DD')),
      to_date: new FormControl(moment(lastDay).format('YYYY-MM-DD'))
    });

    this.filterDailyReportForm = this._fb.group({
      user_id: new FormControl(this.userData.id),
      from_date: new FormControl(moment(firstDay).format('YYYY-MM-DD')),
      to_date: new FormControl(moment(lastDay).format('YYYY-MM-DD'))
    });
  }

  /**
   * Toogle Filter
   */
  onOpenFilter() {
    this.isOpenFilter = !this.isOpenFilter;
  }

  /**
   * Close filter
   */
  onCloseFilter() {
    this.isOpenFilter = false;
  }

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getDailyReport(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  deleteMsg(index) {
  }

  onClearTags() {
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  onUnitTimesheet(userId: number, date: string) {
    let jsonData = {};
    jsonData = convertURLParamToEncode({'user_id': userId, 'date': date});
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_TIMESHEET], {queryParams: jsonData});
  }

  openViewDialog(dailyReportDetail: DailyReport) {
    const dialogRef = this.dialog.open(InOutViewDialog, {
      width: '50vw',
      data: {
        dailyReportData: (dailyReportDetail) ? dailyReportDetail : []
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilter = false;
    }
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {};
    // removing empty key from object
    for (const key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
          delete form.value[key];
        } else {
          if (flag) {
            this.filterDailyReportForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }

    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'user_id') {
            // if (key === 'date') {
            //   this.equalJSON[key] = moment(form.value[key]).format('YYYY-MM-DD');
            // } else {
            this.equalJSON[key] = form.value[key];
            //}
          }

          if (form.value['from_date'] !== '' && form.value['from_date']) {
            this.fromDate = form.value['from_date'];
            delete form.value['from_date'];
          }

          if (form.value['to_date'] !== '' && form.value['to_date']) {
            this.toDate = form.value['to_date'];
            delete form.value['to_date'];
          }
        }
      }
      this.isOpenFilter = false;
      this.getDailyReport(1, 'id', 'desc');
    }
  }

  resetFilterForm() {
    this.equalJSON = {};
    this.fromDate = null;
    this.toDate = null;
    this.createDailyReportForm();
    this.isOpenFilter = false;
    this.setAdvanceFilter(this.dailyReportFilterForm);
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
      this.dailyReportFilterForm.setValue(
        {
          'user_id': (form.value['user_id']) ? form.value['user_id'] : null,
          'from_date': form.value['from_date'],
          'to_date': form.value['to_date']
        });
      this.setAdvanceFilter(form, false);
    }
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.dailyReportFilterForm.get(elementName).setValue(null);
    this.filterDailyReportForm.get(elementName).setValue(null);
    if (elementName === 'user_id') {
      delete this.equalJSON[elementName];
    }

    if (elementName === 'from_date') {
      this.fromDate = null;
    }

    if (elementName === 'to_date') {
      this.toDate = null;
    }
    this.getDailyReport(1, this.sortBy, this.sortOrder);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.DAILYREPORT_LISTING, params, this.getSearchParam(), 'Daily report - ', 0).subscribe(response => {
    });
  }

  downloadQuestion() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.PUNCHIN_QUESTION, params, {}, 'Daily Punchin Question report', 0).subscribe(response => {
    });
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getDailyReport(1, sortKey, sortVal);
  }
}
