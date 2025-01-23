(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-history-user-history-module"],{

/***/ "./src/app/admin/workflow-module/user-history/user-history.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/workflow-module/user-history/user-history.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- USER HISTORY Container -->\r\n<div class=\"newsletter-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"cursor-pointer\">home</mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>ADMINISTRATION</span>\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>USER HISTORY</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <div class=\"with-filter-grid-container\">\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onOpenFilter()\">\r\n                <span>Filter</span> <i class=\"material-icons\">filter_list</i>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a (click)=\"onDownloadExcel()\">\r\n                <span>Excel</span> <i class=\"material-icons\">file_download</i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <i\r\n          class=\"material-icons\">close</i></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"User Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"user_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Designation\" [multiple]=\"false\" formControlName=\"designation_id\">\r\n                  <mat-option *ngFor=\"let designation of designationList\" [value]=\"designation?.id\">\r\n                    {{ designation?.designation_name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Department\" [multiple]=\"false\" formControlName=\"department_id\">\r\n                  <mat-option *ngFor=\"let department of departmentList\" [value]=\"department?.id\">\r\n                    {{ department?.department_name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"tamList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"TAM\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"assign_manager\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"tlList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"TL\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"tl\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Location\" [multiple]=\"false\" formControlName=\"location_id\">\r\n                  <mat-option *ngFor=\"let location of locationList\" [value]=\"location?.id\">\r\n                    {{ location?.location_name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Month\" [multiple]=\"true\" formControlName=\"month\">\r\n                  <mat-option *ngFor=\"let dateRange of dateRangeList\" [value]=\"dateRange\">\r\n                    {{ dateRange }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"userIDField.value\">\r\n          <span class=\"tag__title\">User Name:</span>\r\n          <span>\r\n            <ng-select [items]=\"userList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"User Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"user_id\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('user_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"designationField.value\">\r\n          <span class=\"tag__title\">Designation: </span>\r\n          <span>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Designation\" [multiple]=\"false\" formControlName=\"designation_id\"\r\n                            (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                  <mat-option *ngFor=\"let designation of designationList\" [value]=\"designation?.id\">\r\n                    {{ designation?.designation_name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('designation_id')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"departmentField.value\">\r\n          <span class=\"tag__title\">Department: </span>\r\n          <span>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Department\" [multiple]=\"false\" formControlName=\"department_id\" (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                  <mat-option *ngFor=\"let department of departmentList\" [value]=\"department?.id\">\r\n                    {{ department?.department_name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('department_id')\">close</i>\r\n        </div>\r\n\r\n\r\n        <div class=\"tag\" *ngIf=\"assignManagerField.value\">\r\n          <span class=\"tag__title\">TAM:</span>\r\n          <span>\r\n            <ng-select [items]=\"tamList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"TAM\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"assign_manager\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('assign_manager')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"tlField.value\">\r\n          <span class=\"tag__title\">TL:</span>\r\n          <span>\r\n            <ng-select [items]=\"tlList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"TL\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"tl\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('tl')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"locationField.value\">\r\n          <span class=\"tag__title\">Location: </span>\r\n          <span>\r\n             <mat-form-field>\r\n                <mat-select placeholder=\"Location\" [multiple]=\"false\" formControlName=\"location_id\" (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                  <mat-option *ngFor=\"let location of locationList\" [value]=\"location?.id\">\r\n                    {{ location?.location_name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('location_id')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"awardMonth.value != null && awardMonth.value !== '' && awardMonth.value.length\">\r\n          <span class=\"tag__title\">Month: </span>\r\n          <span>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Month\" [multiple]=\"true\" formControlName=\"month\"\r\n                            (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                 <mat-option *ngFor=\"let dateRange of dateRangeList\" [value]=\"dateRange\">\r\n                    {{ dateRange }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('month')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\"\r\n             *ngIf=\"userIDField.value || departmentField.value || designationField.value || awardField.value || awardStatusField.value || assignManagerField.value || tlField.value || locationField.value || (awardMonth.value != null && awardMonth.value !== '' && awardMonth.value.length)\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n            <th width=\"5%\">Bio ID</th>\r\n            <th width=\"10%\">User Name</th>\r\n            <th width=\"8%\">DOJ</th>\r\n            <th width=\"8%\">Month</th>\r\n            <th width=\"8%\">Designation</th>\r\n            <th width=\"8%\">Department</th>\r\n            <th width=\"10%\">TAM</th>\r\n            <th width=\"10%\">Location</th>\r\n            <th width=\"10%\">Present/Absent</th>\r\n            <th width=\"13%\">Issue/Apprisal Ticket</th>\r\n            <th width=\"5%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let userhistory of userHistoryList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"5%\" class=\"word-break\">{{userhistory?.user_bio_id}}</td>\r\n              <td width=\"10%\" class=\"word-break\">{{userhistory?.userfullname}}</td>\r\n              <td width=\"8%\" class=\"word-break\">{{userhistory?.user_joining_date | date : 'dd-MM-yyyy'}}</td>\r\n              <td width=\"8%\" class=\"word-break\"><span class=\"turquoise-color fw-500\">\r\n                <mat-icon class=\"grid_icon_trip_origin mat-icon material-icons\">trip_origin</mat-icon>{{userhistory?.month}}</span>\r\n              </td>\r\n              <td width=\"8%\" class=\"word-break\">{{userhistory?.designation_name}}</td>\r\n              <td width=\"8%\" class=\"word-break\">{{userhistory?.department_name}}</td>\r\n              <td width=\"10%\" class=\"wordgit-break\">{{userhistory.manager_name }}</td>\r\n              <td width=\"10%\" class=\"wordgit-break\">{{userhistory.location_name }}</td>\r\n              <td width=\"10%\" class=\"text-center\"><span class=\"label-gray-bg-color\">{{userhistory?.present_day}}</span> <span class=\"label-orange-bg-color ML-5\">{{userhistory?.absent}}</span></td>\r\n              <td width=\"13%\" class=\"text-center\"><span class=\"label-gray-bg-color\">{{userhistory?.issue_ticket}}</span> <span class=\"label-orange-bg-color ML-5\">{{userhistory?.apprisal_ticket}}</span></td>\r\n              <td width=\"5%\">\r\n                <mat-icon class=\"light-orange-color\" matTooltip=\"Add User Award\" (click)=\"onAddAward(userhistory)\">add</mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>  <!-- End Table -->\r\n  <!-- End Grid Inner Header -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/user-history/user-history.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/workflow-module/user-history/user-history.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS91c2VyLWhpc3RvcnkvdXNlci1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/workflow-module/user-history/user-history.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/workflow-module/user-history/user-history.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHistoryComponent", function() { return UserHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UserHistoryComponent = /** @class */ (function () {
    function UserHistoryComponent(_sharedObjService, _sharedService, _commonCrudService, _fb, _router, dialog) {
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        this._commonCrudService = _commonCrudService;
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.findInSetJSON = {};
        this.orJSON = {};
        this.isOpenFilterView = false;
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY[1];
        this.userHistoryList = [];
        this.userList = [];
        this.tamList = [];
        this.tlList = [];
        this.designationList = [];
        this.departmentList = [];
        this.locationList = [];
        this.dateRangeList = [];
    }
    Object.defineProperty(UserHistoryComponent.prototype, "userIDField", {
        // get form control
        get: function () {
            return this.filterForm.get('user_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserHistoryComponent.prototype, "designationField", {
        get: function () {
            return this.filterForm.get('designation_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserHistoryComponent.prototype, "departmentField", {
        get: function () {
            return this.filterForm.get('department_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserHistoryComponent.prototype, "awardField", {
        get: function () {
            return this.filterForm.get('award_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserHistoryComponent.prototype, "awardStatusField", {
        get: function () {
            return this.filterForm.get('status_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserHistoryComponent.prototype, "assignManagerField", {
        get: function () {
            return this.filterForm.get('assign_manager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserHistoryComponent.prototype, "tlField", {
        get: function () {
            return this.filterForm.get('tl');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserHistoryComponent.prototype, "locationField", {
        get: function () {
            return this.filterForm.get('location_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserHistoryComponent.prototype, "awardMonth", {
        get: function () {
            return this.filterForm.get('month');
        },
        enumerable: true,
        configurable: true
    });
    UserHistoryComponent.prototype.ngOnInit = function () {
        this.dateRangeList = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_9__["getDateRange"])(moment__WEBPACK_IMPORTED_MODULE_11__(new Date().setFullYear(new Date().getFullYear() - 1)).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format("YYYY-MM-DD"), 1);
        this.getUserHistoryList(1);
        this.getUserList();
        this.createAdvanceFilterForm();
        this.getDesignationList();
        this.getDepartmentList();
        this.getLocationList();
    };
    /**
     * designation List API
     */
    UserHistoryComponent.prototype.getDesignationList = function () {
        var _this = this;
        this._sharedObjService.getDesignationList({ records: 'all' }).subscribe(function (response) {
            _this.designationList = response;
        });
    };
    UserHistoryComponent.prototype.getDepartmentList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].DEPARTMENT, { 'records': 'all' }).subscribe(function (Response) {
            _this.departmentList = Response.payload.data;
        });
    };
    /**
     * Create Advance Filter
     */
    UserHistoryComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            designation_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            department_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            award_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            assign_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            location_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            tl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            designation_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            department_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            award_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            assign_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            location_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            tl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    /**
     * Get User List
     */
    UserHistoryComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.userList = response;
            _this.tamList = _this.userList.filter(function (data) { return (data['designation_id']) ? data['designation_id']['id'] === 9 : 0; });
            _this.tlList = _this.userList.filter(function (data) { return (data['designation_id']) ? data['designation_id']['id'] === 60 : 0; });
        });
    };
    /**
     * Get User Nominee List
     * @param pageNumber
     * @param key
     * @param val
     */
    UserHistoryComponent.prototype.getUserHistoryList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].AWARD_USER, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.userHistoryList = response.payload.data;
            _this.page = response.pager.pageNumber;
            _this.pageIndex = _this.page - 1;
            _this.totalRecords = +response.pager.totalRecords;
            _this.sortBy = response.pager.sortBy;
            _this.sortOrder = response.pager.sortOrder;
        });
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    UserHistoryComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    UserHistoryComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getUserHistoryList(1, sortKey, sortVal);
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    UserHistoryComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
            this.filterForm.setValue({
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
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    UserHistoryComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.orJSON = {};
        // removing empty key from object
        for (var key in form.value) {
            if (form.value.hasOwnProperty(key)) {
                if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
                    delete form.value[key];
                }
                else {
                    if (flag) {
                        this.advanceFilterForm.get(key).setValue(form.value[key]);
                    }
                }
            }
        }
        // For Multiple Entity ID
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'user_id' || key === 'designation_id' || key === 'department_id' || key === 'award_id' || key === 'status_id' || key === 'assign_manager' || key === 'location_id' || key === 'tl') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'month' && (form.value[key] !== '') && (form.value[key].length > 0)) {
                        this.inJSON[key] = form.value[key].join();
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getUserHistoryList(1);
        }
    };
    /**
     * Toogle Filter
     */
    UserHistoryComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Close filter
     */
    UserHistoryComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    UserHistoryComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'user_id' || elementName === 'designation_id' || elementName === 'department_id' || elementName === 'status_id' || elementName === 'assign_manager' || elementName === 'tl' || elementName === 'location_id') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'month') {
            delete this.inJSON[elementName];
        }
        this.getUserHistoryList(1, this.sortBy, this.sortOrder);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    UserHistoryComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_9__["CommonFunctions"].isEmpty(filter)) {
            params['compare'] = filter;
        }
        if (Object.keys(this.inJSON).length !== 0) {
            params['in'] = this.inJSON;
        }
        if (Object.keys(this.findInSetJSON).length !== 0) {
            params['findinset'] = this.findInSetJSON;
        }
        if (Object.keys(this.orJSON).length !== 0) {
            params['or'] = { 'like': [this.orJSON] };
        }
        return params;
    };
    UserHistoryComponent.prototype.onPageChange = function (event) {
        this.pageEvent = event;
        this.getUserHistoryList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    UserHistoryComponent.prototype.onAddAward = function (awardUser) {
        if (awardUser) {
            this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].AWARD_NOMINEE, null);
            this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].AWARD_USER, null);
            this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].AWARD_USER, awardUser);
            this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].ADD_NOMINEE]);
        }
    };
    /**
     * Download Excel
     */
    UserHistoryComponent.prototype.onDownloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].AWARD_USER, params, this.getSearchParam(), 'Award Criteria ', 0).subscribe(function (response) {
        });
    };
    /**
     * Download Invoice Award
     * @param nominee
     */
    UserHistoryComponent.prototype.onDownloadAward = function (nominee) {
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].AWARD_PREVIEW + '/' + nominee.id, { 'status_id': 2, 'is_view': 1 }, {}, 'Award ' + nominee.userfullname, 1).subscribe(function (response) {
        });
    };
    /**
     * Reset All Filters
     */
    UserHistoryComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.getUserHistoryList(1);
    };
    /**
     * Location List API
     */
    UserHistoryComponent.prototype.getLocationList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].LOCATION, { 'records': 'all' }, {}).subscribe(function (Response) {
            _this.locationList = Response.payload.data;
        });
    };
    UserHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-history',
            template: __webpack_require__(/*! ./user-history.component.html */ "./src/app/admin/workflow-module/user-history/user-history.component.html"),
            styles: [__webpack_require__(/*! ./user-history.component.scss */ "./src/app/admin/workflow-module/user-history/user-history.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__["SharedObjService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], UserHistoryComponent);
    return UserHistoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/user-history/user-history.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/workflow-module/user-history/user-history.module.ts ***!
  \***************************************************************************/
/*! exports provided: UserHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHistoryModule", function() { return UserHistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-history.component */ "./src/app/admin/workflow-module/user-history/user-history.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _user_history_component__WEBPACK_IMPORTED_MODULE_2__["UserHistoryComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var UserHistoryModule = /** @class */ (function () {
    function UserHistoryModule() {
    }
    UserHistoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"]
            ],
            declarations: [_user_history_component__WEBPACK_IMPORTED_MODULE_2__["UserHistoryComponent"]]
        })
    ], UserHistoryModule);
    return UserHistoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-history-user-history-module.js.map