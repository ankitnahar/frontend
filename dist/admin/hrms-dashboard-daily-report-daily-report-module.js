(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrms-dashboard-daily-report-daily-report-module"],{

/***/ "./src/app/admin/hrms-module/hrms-dashboard/daily-report/daily-report.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/daily-report/daily-report.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-daily-report-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>HRMS</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">DAILY REPORT</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 leave-type-list\">\r\n\r\n          <ul>\r\n            <li>\r\n              <a class=\"red-color list-alignment\">\r\n                <i class=\"material-icons\">fiber_manual_record</i>Long Break</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onOpenFilter()\">\r\n                <span>Filter</span> <i class=\"material-icons\">filter_list</i>\r\n              </a>\r\n            </li>\r\n\r\n            <li>\r\n              <a (click)=\"downloadExcel()\">\r\n                <span>Excel</span> <i class=\"material-icons\">file_download</i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a class=\"download-icon\" *ngIf=\"fetchPunchinReport\" (click)=\"downloadQuestion()\">\r\n                <span>Download Daily PunchIn Question</span> <i class=\"material-icons\">file_download</i></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilter}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilter\" (click)=\"onCloseFilter()\">Esc <i\r\n          class=\"material-icons\">close</i></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"dailyReportFilterForm\" (submit)=\"setAdvanceFilter(dailyReportFilterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"User Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"user_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"fromdateRef\" placeholder=\"From Date\" formControlName=\"from_date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"fromdateRef\"></mat-datepicker-toggle>\r\n                <mat-datepicker #fromdateRef></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"todateRef\" placeholder=\"To Date\" formControlName=\"to_date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"todateRef\"></mat-datepicker-toggle>\r\n                <mat-datepicker #todateRef></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"filterDailyReportForm\">\r\n        <div class=\"tag\" *ngIf=\"userId.value\">\r\n          <span class=\"tag__title\">Staff Name :</span>\r\n          <span>\r\n               <ng-select [items]=\"userList\"\r\n                          [closeOnSelect]=\"true\"\r\n                          bindLabel=\"userfullname\"\r\n                          placeholder=\"User Name\"\r\n                          bindValue=\"id\"\r\n                          [virtualScroll]=\"true\"\r\n                          [searchable]=\"true\"\r\n                          [hideSelected]=\"true\"\r\n                          formControlName=\"user_id\"\r\n                          (change)=\"setAdvanceFilterKeyUp($event, filterDailyReportForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('user_id')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"fromDateField.value\">\r\n          <span class=\"tag__title\">From Date:</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"fromdate\" placeholder=\"From Date\" formControlName=\"from_date\"\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, filterDailyReportForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"fromdate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #fromdate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('from_date')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"toDateField.value\">\r\n          <span class=\"tag__title\">To Date:</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"todate\" placeholder=\"To Date\" formControlName=\"to_date\"\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, filterDailyReportForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"todate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #todate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('to_date')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\" *ngIf=\"userId.value || fromDateField.value || toDateField.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n  </div>\r\n  <!-- Start Table -->\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"4%\">Sr. No</th>\r\n\r\n          <th width=\"13%\"\r\n              (click)=\"getSortData('user_id', sortBy === 'user_id' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Staff Name\r\n            <i *ngIf=\"sortBy === 'user_id'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'user_id' && sortOrder === 'asc', 'icon-down' :  sortBy === 'user_id' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'user_id' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"10%\"\r\n              (click)=\"getSortData('date', sortBy === 'date' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Date\r\n            <i *ngIf=\"sortBy === 'date'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'date' && sortOrder === 'asc', 'icon-down' :  sortBy === 'date' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'date' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"10%\">In Time\r\n          </th>\r\n\r\n          <th width=\"10%\">Out Time\r\n          </th>\r\n\r\n          <th width=\"10%\">Working Time\r\n          </th>\r\n\r\n          <th width=\"10%\">Break Time\r\n          </th>\r\n\r\n          <th width=\"8%\">Units\r\n          </th>\r\n\r\n          <th width=\"10%\">Action</th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody *ngFor=\"let dailyReport of dailyReportList; let i = index\"\r\n                 [ngClass]=\"dailyReport?.break_time  >= '01:00:00'?'red-tr':''\">\r\n          <tr>\r\n            <td width=\"4%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n            <td width=\"13%\">{{dailyReport?.assignee?.userfullname}}</td>\r\n            <td width=\"10%\">{{dailyReport?.date | date:\"dd-MM-yyyy\"}}</td>\r\n            <!--<td width=\"10%\">{{dailyReport?.first_in}}</td>-->\r\n            <!--<td width=\"10%\">{{dailyReport?.last_out}}</td>-->\r\n            <td width=\"10%\">{{dailyReport?.punch_in}}</td>\r\n            <td width=\"10%\">{{dailyReport?.punch_out}}</td>\r\n            <td width=\"10%\">{{dailyReport?.working_time}}</td>\r\n            <td width=\"10%\" class=\"orange-color\">{{dailyReport?.break_time}}</td>\r\n            <td width=\"8%\"><a (click)=\"onUnitTimesheet(dailyReport?.assignee?.id, dailyReport?.date)\"\r\n                              *ngIf=\"dailyReport?.totalUnit != '' && dailyReport?.totalUnit !== null\"\r\n                              class=\"label-turquoise-bg-color cursor-pointer\">{{dailyReport?.totalUnit}}</a>\r\n              <a *ngIf=\"dailyReport?.totalUnit === null\" class=\"label-turquoise-bg-color cursor-pointer\">0</a>\r\n            </td>\r\n            <td width=\" 10%\">\r\n              <a (click)=\"openViewDialog(dailyReport)\" class=\"wet-asphalt-color\">In - Out(s)</a>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <table *ngIf=\"dailyReportList.length\">\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"10\">\r\n            <mat-paginator [length]=\"totalRecords\"\r\n                           [pageSize]=\"pageSize\"\r\n                           [pageSizeOptions]=\"pageSizeOptions\"\r\n                           (page)=\"onPageChange($event)\">\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <!-- End Table -->\r\n  <div *ngIf=\"!dailyReportList.length\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- End Data Grid -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/daily-report/daily-report.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/daily-report/daily-report.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2hybXMtbW9kdWxlL2hybXMtZGFzaGJvYXJkL2RhaWx5LXJlcG9ydC9kYWlseS1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/daily-report/daily-report.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/daily-report/daily-report.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DailyReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReportComponent", function() { return DailyReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_dialog_in_out_view_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-dialog/in-out-view-dialog */ "./src/app/admin/hrms-module/hrms-dashboard/daily-report/view-dialog/in-out-view-dialog.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DailyReportComponent = /** @class */ (function () {
    function DailyReportComponent(_router, dialog, _sharedService, _commonCrudService, _sharedObjService, _fb) {
        this._router = _router;
        this.dialog = dialog;
        this._sharedService = _sharedService;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._fb = _fb;
        this.DailyReport = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_12__["ADMINTABACCESS"].DAILYREPORT;
        // Data Variables
        this.fetchPunchinReport = false;
        this.dailyReportList = [];
        this.userList = [];
        this.toDate = null;
        this.fromDate = null;
        this.equalJSON = {};
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        // Other Variables
        this.isOpenFilter = false;
        this.isOpenHistoryDialog = false;
    }
    Object.defineProperty(DailyReportComponent.prototype, "userId", {
        // get form control
        get: function () {
            return this.filterDailyReportForm.get('user_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DailyReportComponent.prototype, "fromDateField", {
        get: function () {
            return this.filterDailyReportForm.get('from_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DailyReportComponent.prototype, "toDateField", {
        get: function () {
            return this.filterDailyReportForm.get('to_date');
        },
        enumerable: true,
        configurable: true
    });
    DailyReportComponent.prototype.ngOnInit = function () {
        this.userData = this._sharedService.getUser();
        this.initializationMethod();
    };
    /**
     * Initialization Methods
     */
    DailyReportComponent.prototype.initializationMethod = function () {
        this.fetchPunchinReport = this._sharedService.checkUserPrivileges(this.DailyReport, 'otherRights', 'otherRights', 'button_name', 'punchin_question_report', 1);
        this.createDailyReportForm();
        this.setAdvanceFilter(this.dailyReportFilterForm);
    };
    DailyReportComponent.prototype.getDailyReport = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].DAILYREPORT_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam())
            .subscribe(function (response) {
            _this.handleResponse(response);
        });
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    DailyReportComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
        var params = {
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
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    DailyReportComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (this.toDate) {
            filter['lessthanequal'] = {};
            filter['lessthanequal']['date'] = moment__WEBPACK_IMPORTED_MODULE_9__(this.toDate).format('YYYY-MM-DD');
        }
        if (this.fromDate) {
            filter['greaterthanequal'] = {};
            filter['greaterthanequal']['date'] = moment__WEBPACK_IMPORTED_MODULE_9__(this.fromDate).format('YYYY-MM-DD');
        }
        if (Object.keys(this.equalJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_10__["CommonFunctions"].isEmpty(filter)) {
            params['compare'] = filter;
        }
        return params;
    };
    /**
     * Handle AM Notes List Response
     * @param response
     */
    DailyReportComponent.prototype.handleResponse = function (response) {
        this.dailyReportList = response.payload.data;
        this.userList = response.payload.userlist;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Create Advance Filter
     */
    DailyReportComponent.prototype.createDailyReportForm = function () {
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        this.dailyReportFilterForm = this._fb.group({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.userData.id),
            from_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment__WEBPACK_IMPORTED_MODULE_9__(firstDay).format('YYYY-MM-DD')),
            to_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment__WEBPACK_IMPORTED_MODULE_9__(lastDay).format('YYYY-MM-DD'))
        });
        this.filterDailyReportForm = this._fb.group({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.userData.id),
            from_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment__WEBPACK_IMPORTED_MODULE_9__(firstDay).format('YYYY-MM-DD')),
            to_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment__WEBPACK_IMPORTED_MODULE_9__(lastDay).format('YYYY-MM-DD'))
        });
    };
    /**
     * Toogle Filter
     */
    DailyReportComponent.prototype.onOpenFilter = function () {
        this.isOpenFilter = !this.isOpenFilter;
    };
    /**
     * Close filter
     */
    DailyReportComponent.prototype.onCloseFilter = function () {
        this.isOpenFilter = false;
    };
    DailyReportComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getDailyReport(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    DailyReportComponent.prototype.deleteMsg = function (index) {
    };
    DailyReportComponent.prototype.onClearTags = function () {
    };
    DailyReportComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    DailyReportComponent.prototype.onUnitTimesheet = function (userId, date) {
        var jsonData = {};
        jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_10__["convertURLParamToEncode"])({ 'user_id': userId, 'date': date });
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET], { queryParams: jsonData });
    };
    DailyReportComponent.prototype.openViewDialog = function (dailyReportDetail) {
        var dialogRef = this.dialog.open(_view_dialog_in_out_view_dialog__WEBPACK_IMPORTED_MODULE_5__["InOutViewDialog"], {
            width: '50vw',
            data: {
                dailyReportData: (dailyReportDetail) ? dailyReportDetail : []
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    DailyReportComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilter = false;
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    DailyReportComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        // removing empty key from object
        for (var key in form.value) {
            if (form.value.hasOwnProperty(key)) {
                if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
                    delete form.value[key];
                }
                else {
                    if (flag) {
                        this.filterDailyReportForm.get(key).setValue(form.value[key]);
                    }
                }
            }
        }
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
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
    };
    DailyReportComponent.prototype.resetFilterForm = function () {
        this.equalJSON = {};
        this.fromDate = null;
        this.toDate = null;
        this.createDailyReportForm();
        this.isOpenFilter = false;
        this.setAdvanceFilter(this.dailyReportFilterForm);
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    DailyReportComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
        var processToReq = false;
        if (flag) {
            processToReq = true;
        }
        else {
            if (event.keyCode === 13) {
                processToReq = true;
            }
        }
        if (processToReq) {
            this.dailyReportFilterForm.setValue({
                'user_id': (form.value['user_id']) ? form.value['user_id'] : null,
                'from_date': form.value['from_date'],
                'to_date': form.value['to_date']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    DailyReportComponent.prototype.onClearTag = function (elementName, JsonElementName) {
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
    };
    /**
     * Export to Excel
     */
    DailyReportComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].DAILYREPORT_LISTING, params, this.getSearchParam(), 'Daily report - ', 0).subscribe(function (response) {
        });
    };
    DailyReportComponent.prototype.downloadQuestion = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].PUNCHIN_QUESTION, params, {}, 'Daily Punchin Question report', 0).subscribe(function (response) {
        });
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    DailyReportComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getDailyReport(1, sortKey, sortVal);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], DailyReportComponent.prototype, "onKeydownHandler", null);
    DailyReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-daily-report',
            template: __webpack_require__(/*! ./daily-report.component.html */ "./src/app/admin/hrms-module/hrms-dashboard/daily-report/daily-report.component.html"),
            styles: [__webpack_require__(/*! ./daily-report.component.scss */ "./src/app/admin/hrms-module/hrms-dashboard/daily-report/daily-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], DailyReportComponent);
    return DailyReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/daily-report/daily-report.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/daily-report/daily-report.module.ts ***!
  \**************************************************************************************/
/*! exports provided: DailyReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReportModule", function() { return DailyReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _daily_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./daily-report.component */ "./src/app/admin/hrms-module/hrms-dashboard/daily-report/daily-report.component.ts");
/* harmony import */ var _view_dialog_in_out_view_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-dialog/in-out-view-dialog */ "./src/app/admin/hrms-module/hrms-dashboard/daily-report/view-dialog/in-out-view-dialog.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _daily_report_component__WEBPACK_IMPORTED_MODULE_5__["DailyReportComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
];
var DailyReportModule = /** @class */ (function () {
    function DailyReportModule() {
    }
    DailyReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ],
            declarations: [_view_dialog_in_out_view_dialog__WEBPACK_IMPORTED_MODULE_6__["InOutViewDialog"], _daily_report_component__WEBPACK_IMPORTED_MODULE_5__["DailyReportComponent"]],
            entryComponents: [_view_dialog_in_out_view_dialog__WEBPACK_IMPORTED_MODULE_6__["InOutViewDialog"]]
        })
    ], DailyReportModule);
    return DailyReportModule;
}());



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/daily-report/view-dialog/in-out-view-dialog.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/daily-report/view-dialog/in-out-view-dialog.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Favorite menu dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">SUMMARY</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <!-- Start Request Table -->\r\n    <div class=\"table-container dialog-table-container\">\r\n      <div class=\"table-block\">\r\n        <table class=\"PT-0\">\r\n          <thead>\r\n          <tr>\r\n            <th width=\"10%\">Sr. No</th>\r\n            <th width=\"15%\">Date</th>\r\n            <th width=\"30%\">Punch Type</th>\r\n            <th width=\"30%\">Punch Time</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let punchInOut of dailyReport?.inout; let i=index\"\r\n              [ngClass]=\"(punchInOut?.type === 0) ? 'red-tr' :''\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{punchInOut?.date | date : 'dd-MM-yyyy'}}</td>\r\n            <td>{{punchInOut?.punch_type === 1?'In':'Out'}}</td>\r\n            <td>{{punchInOut?.punch_time}}</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Request Table -->\r\n  </div>\r\n</div>\r\n<!--  End Favorite menu dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/daily-report/view-dialog/in-out-view-dialog.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/daily-report/view-dialog/in-out-view-dialog.ts ***!
  \*************************************************************************************************/
/*! exports provided: InOutViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InOutViewDialog", function() { return InOutViewDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var InOutViewDialog = /** @class */ (function () {
    function InOutViewDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    InOutViewDialog.prototype.ngOnInit = function () {
        this.dailyReport = (this.data.dailyReportData) ? this.data.dailyReportData : [];
    };
    InOutViewDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    InOutViewDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-dialog',
            template: __webpack_require__(/*! ./in-out-view-dialog.html */ "./src/app/admin/hrms-module/hrms-dashboard/daily-report/view-dialog/in-out-view-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], InOutViewDialog);
    return InOutViewDialog;
}());



/***/ })

}]);
//# sourceMappingURL=hrms-dashboard-daily-report-daily-report-module.js.map