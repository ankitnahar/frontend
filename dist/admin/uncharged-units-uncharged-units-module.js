(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uncharged-units-uncharged-units-module"],{

/***/ "./src/app/admin/billing-module/uncharged-units/uncharged-units.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/billing-module/uncharged-units/uncharged-units.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"unchanged-units-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span>BILLNG</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">UNCHAGRED UNITS</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Uncharged Units</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onOpenFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li *ngIf=\"tabData['export']\">\r\n              <a (click)=\"downloadExcel();\">\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n          <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <mat-icon\r\n            class=\"material-icons\">close</mat-icon></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Parent Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         (change)=\"onChangeParentEntity($event)\"\r\n                         formControlName=\"parent_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"billingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"billing_name\"\r\n                         placeholder=\"Billing Name\"\r\n                         bindValue=\"billing_name\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"billing_entity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"trading_entity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"fromdate\" placeholder=\"From Date\" formControlName=\"from_date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"fromdate\"></mat-datepicker-toggle>\r\n                <mat-datepicker #fromdate></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"todate\" placeholder=\"To Date\" formControlName=\"to_date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"todate\"></mat-datepicker-toggle>\r\n                <mat-datepicker #todate></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-9 MT-20 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"parent_id.value\">\r\n          <span class=\"tag__title\">Parent Trading Name:</span>\r\n          <span>\r\n          <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Trading name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"parent_id\"\r\n                     (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);onChangeParentEntity($event);\">\r\n            </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"entityIdBillingField.value\">\r\n          <span class=\"tag__title\">Billing name :</span>\r\n          <span>\r\n          <ng-select [items]=\"billingList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"billing_name\"\r\n                     placeholder=\"Billing Name\"\r\n                     bindValue=\"billing_name\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"billing_entity\"\r\n                     (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n            </ng-select>\r\n        </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('billing_entity')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"entityIdTradingField.value\">\r\n          <span class=\"tag__title\">Trading name :</span>\r\n          <span>\r\n          <ng-select [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"trading_entity\"\r\n                     (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n          </ng-select>\r\n        </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('trading_entity')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"fromDateField.value\">\r\n          <span class=\"tag__title\">From Date:</span>\r\n          <span>\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"fromdate1\" placeholder=\"Date\" #dateRef formControlName=\"from_date\"\r\n                       (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"fromdate1\"></mat-datepicker-toggle>\r\n                <mat-datepicker #fromdate1></mat-datepicker>\r\n              </mat-form-field>\r\n            </span>\r\n          <mat-icon class=\"material-icons tag__close\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"toDateField.value\">\r\n          <span class=\"tag__title\">To Date:</span>\r\n          <span>\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"todate1\" placeholder=\"Date\" #dateRef formControlName=\"to_date\"\r\n                       (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"todate1\"></mat-datepicker-toggle>\r\n                <mat-datepicker #todate1></mat-datepicker>\r\n              </mat-form-field>\r\n            </span>\r\n          <mat-icon class=\"material-icons tag__close\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\"\r\n             *ngIf=\"parent_id.value || entityIdBillingField.value || entityIdTradingField.value || fromDateField.value || toDateField.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"4%\">Sr. No</th>\r\n\r\n            <th width=\"8%\"\r\n                (click)=\"getSortData('code', sortBy === 'code' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Client Code\r\n              <i *ngIf=\"sortBy === 'code'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'code' && sortOrder === 'asc', 'icon-down' :  sortBy === 'code' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'code' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"12%\">Parent Trading Name</th>\r\n            <th width=\"14%\"\r\n                (click)=\"getSortData('billing_name', sortBy === 'billing_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Billing Name\r\n              <i *ngIf=\"sortBy === 'billing_name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'billing_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'billing_name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'billing_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"13%\"\r\n                (click)=\"getSortData('trading_name', sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Trading Name\r\n              <i *ngIf=\"sortBy === 'trading_name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'trading_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'trading_name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"12%\">TAM</th>\r\n            <th width=\"7%\">Fixed Fees</th>\r\n            <th width=\"10%\">Uncharged Units</th>\r\n            <th width=\"7%\" class=\"text-center\">BK Units</th>\r\n            <th width=\"7%\">Payroll Units</th>\r\n            <th width=\"6%\">Tax Units</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody *ngIf=\"unchargedUnits.length\">\r\n            <tr *ngFor=\"let unchargedunit of unchargedUnits; let i = index\">\r\n              <td width=\"4%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"8%\" class=\"word-break\">{{unchargedunit?.code}}</td>\r\n              <td width=\"12%\" class=\"word-break\">{{unchargedunit?.parent_name}}</td>\r\n              <td width=\"14%\" class=\"word-break\">{{unchargedunit?.billing_name}}</td>\r\n              <td width=\"13%\" class=\"word-break\">{{unchargedunit?.trading_name}}</td>\r\n              <td width=\"12%\">{{unchargedunit?.tam}}</td>\r\n              <td width=\"7%\">\r\n                <span class=\"turquoise-color fw-500\" *ngIf=\"unchargedunit?.inc_in_ff == 1\"><mat-icon\r\n                  class=\"grid_icon_trip_origin mat-icon material-icons\">trip_origin</mat-icon>Yes</span>\r\n                <span class=\"red-color fw-500\" *ngIf=\"unchargedunit?.inc_in_ff !== 1\"><mat-icon\r\n                  class=\"grid_icon_trip_origin mat-icon material-icons\">trip_origin</mat-icon>No</span>\r\n              </td>\r\n              <td width=\"10%\" class=\"text-center\"><a (click)=\"onUnchargedSummary(unchargedunit?.id, '1,2,6')\"\r\n                                                     target=\"target\"><span class=\"label-orange-bg-color\">{{unchargedunit?.total}}</span></a>\r\n              </td>\r\n              <td width=\"7%\" class=\"text-center primary-color fw-500\"><a\r\n                *ngIf=\"unchargedunit?.bk\" class=\"{{getServicesIsUpdated(unchargedunit.id,1)}}\"\r\n                (click)=\"(unchargedunit?.bk) ? onUnchargedSummary(unchargedunit?.id, '1') : ''\">{{unchargedunit?.bk}}</a><span\r\n                *ngIf=\"!unchargedunit?.bk\">0</span></td>\r\n              <td width=\"7%\" class=\"text-center\"><a *ngIf=\"unchargedunit?.payroll\"\r\n                                                    class=\"{{getServicesIsUpdated(unchargedunit.id,2)}}\"\r\n                                                    (click)=\"(unchargedunit?.payroll) ? onUnchargedSummary(unchargedunit?.id, '2') : ''\">{{unchargedunit?.payroll}}</a><span\r\n                *ngIf=\"!unchargedunit?.payroll\">0</span></td>\r\n              <td width=\"6%\" class=\"text-center\"><a *ngIf=\"unchargedunit?.tax\"\r\n                                                    class=\"{{getServicesIsUpdated(unchargedunit.id,6)}}\"\r\n                                                    (click)=\"(unchargedunit?.tax) ? onUnchargedSummary(unchargedunit?.id, '6') : ''\">{{unchargedunit?.tax}}</a><span\r\n                *ngIf=\"!unchargedunit?.tax\">0</span></td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table *ngIf=\"unchargedUnits.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\" [pageSize]=\"pageSize\" [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\" (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n    <div *ngIf=\"unchargedUnits.length === 0\" class=\"panel-title red-color\">\r\n      No Records Found!\r\n    </div>\r\n  </div>\r\n  <!-- End Data Grid -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/uncharged-units/uncharged-units.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/billing-module/uncharged-units/uncharged-units.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL3VuY2hhcmdlZC11bml0cy91bmNoYXJnZWQtdW5pdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/billing-module/uncharged-units/uncharged-units.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/billing-module/uncharged-units/uncharged-units.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UnchargedUnitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnchargedUnitsComponent", function() { return UnchargedUnitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UnchargedUnitsComponent = /** @class */ (function () {
    function UnchargedUnitsComponent(_fb, _router, _commonCrudService, _sharedService, _sharedObjService) {
        this._fb = _fb;
        this._router = _router;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this._sharedObjService = _sharedObjService;
        // Data Variables
        this.unchargedUnits = [];
        this.servicesUpdated = [];
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.clientList = [];
        this.billingList = [];
        this.filteredTradingClientList = [];
        this.parentClientList = [];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilterView = false;
        this.isOpenHistoryDialog = false;
        this.PeriodFromValue = null;
        this.PeriodToValue = null;
        this.entity_id = [];
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__["ADMINTABACCESS"].BILLING_UNCHARGEUNIT;
    }
    Object.defineProperty(UnchargedUnitsComponent.prototype, "parent_id", {
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnchargedUnitsComponent.prototype, "entityIdTradingField", {
        get: function () {
            return this.filterForm.get('trading_entity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnchargedUnitsComponent.prototype, "entityIdBillingField", {
        get: function () {
            return this.filterForm.get('billing_entity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnchargedUnitsComponent.prototype, "fromDateField", {
        get: function () {
            return this.filterForm.get('from_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnchargedUnitsComponent.prototype, "toDateField", {
        get: function () {
            return this.filterForm.get('to_date');
        },
        enumerable: true,
        configurable: true
    });
    UnchargedUnitsComponent.prototype.ngOnInit = function () {
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.initializationMethod();
    };
    /**
     * Initialization Methods
     */
    UnchargedUnitsComponent.prototype.initializationMethod = function () {
        // this.getUnchargeUnitList(1, 'id', 'desc');
        this.createAdvanceFilterForm();
        this.getClientList();
        this.setAdvanceFilter(this.filterForm);
    };
    /**
     * Create Form for filters
     */
    UnchargedUnitsComponent.prototype.createAdvanceFilterForm = function () {
        var todaysdate = new Date();
        var year = todaysdate.getFullYear();
        var month = todaysdate.getMonth();
        this.filterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            billing_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            trading_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            from_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(year, month, 1)),
            to_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date())
        });
        this.advanceFilterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            billing_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            trading_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            from_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(year, month, 1)),
            to_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date())
        });
    };
    /**
     * Get Client List
     */
    UnchargedUnitsComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = _this.filteredTradingClientList = response;
            _this.parentClientList = response.filter(function (item) { return item.is_parent === 1; });
            _this.clientList.map(function (item) {
                item.trading_name = item.trading_name + '- (' + item.code + ')';
                return item;
            });
            _this.filteredTradingClientList.map(function (item) {
                item.trading_name = item.trading_name + '- (' + item.code + ')';
                return item;
            });
            _this.billingList = response;
            _this.billingList.map(function (item) {
                // item.id = item.billing_name;
                // item.billing_name = item.billing_name + '- (' + item.code + ')';
                return item;
            });
        });
    };
    /**
     *
     * @param {number} pageNumber
     * @param {string} key
     * @param {string} val
     */
    UnchargedUnitsComponent.prototype.getUnchargeUnitList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].UNCHARGEUNIT_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleUnchargeUnitResponse(response);
        });
    };
    /**
     * Handle Uncharge Unit List Response
     * @param response
     */
    UnchargedUnitsComponent.prototype.handleUnchargeUnitResponse = function (response) {
        this.unchargedUnits = response.payload.data;
        this.servicesUpdated = response.payload.servicesUpdated;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Toogle Filter
     */
    UnchargedUnitsComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Close filter
     */
    UnchargedUnitsComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    /**
     * Pagination page change method
     * @param event
     */
    UnchargedUnitsComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getUnchargeUnitList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Export to Excel
     */
    UnchargedUnitsComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].UNCHARGEUNIT_LIST_EXPORT_EXCEL, params, this.getSearchParam(), 'Uncharge Unit ', 0).subscribe(function (response) {
        });
    };
    /**
     * Uncharge Unit Timesheet Summary Redirect
     * @param entity_id
     */
    UnchargedUnitsComponent.prototype.onUnchargedSummary = function (entity_id, service_id) {
        if (entity_id > 0 && service_id !== '') {
            var jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_10__["convertURLParamToEncode"])({
                'entity_id': entity_id,
                'from_date': this.PeriodFromValue,
                'to_date': this.PeriodToValue,
                'service_id': service_id
            });
            this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].UNCHARGED_UNITS_SUMMARY], { queryParams: jsonData });
            // this._sharedService.setRedirectParameter(REDIRECTPARAMKEYS.UNCHARGE_UNIT_TIMESHEET,);
        }
    };
    UnchargedUnitsComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    UnchargedUnitsComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'trading_entity') {
            delete this.inJSON['entity_id'];
            delete this.inJSON[elementName];
            this.entity_id = [];
        }
        else if (elementName === 'parent_id') {
            delete this.equalJSON['parent_id'];
        }
        else if (elementName === 'billing_entity') {
            delete this.likeJSON['billing_name'];
        }
        else if (elementName === 'from_date') {
            this.PeriodFromValue = null;
        }
        else if (elementName === 'to_date') {
            this.PeriodToValue = null;
        }
        this.getUnchargeUnitList(1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    UnchargedUnitsComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.isOpenFilterView = false;
        this.getUnchargeUnitList(1, 'id', 'desc');
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    UnchargedUnitsComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'parent_id': form.value['parent_id'],
                'trading_entity': form.value['trading_entity'],
                'billing_entity': form.value['billing_entity'],
                'from_date': form.value['from_date'],
                'to_date': form.value['to_date']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    UnchargedUnitsComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.entity_id = [];
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
        // For Entity ID
        if (form.valid && (form.value !== {})) {
            if (form.value['billing_entity'] !== '' && form.value['billing_entity']) {
                // this.entity_id.push(form.value['billing_entity']);
                // delete form.value['billing_entity'];
            }
            if (form.value['trading_entity'] !== '' && form.value['trading_entity']) {
                this.entity_id.push(form.value['trading_entity']);
                delete form.value['trading_entity'];
            }
            if (form.value['from_date'] !== '' && form.value['from_date']) {
                this.PeriodFromValue = form.value['from_date'];
                delete form.value['from_date'];
            }
            if (form.value['to_date'] !== '' && form.value['to_date']) {
                this.PeriodToValue = form.value['to_date'];
                delete form.value['to_date'];
            }
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'billing_entity') {
                        // this.likeJSON['']
                        this.likeJSON['billing_name'] = encodeURIComponent(form.value[key]);
                    }
                    else if (key === 'parent_id') {
                        this.equalJSON[key] = form.value[key];
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getUnchargeUnitList(1, 'id', 'desc');
        }
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    UnchargedUnitsComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
        // IF TAM & TH Filter then need to give seperate param so
        if (this.entity_id.length) {
            params['entity_id'] = this.entity_id.join(',');
        }
        return params;
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    UnchargedUnitsComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getUnchargeUnitList(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    UnchargedUnitsComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        if (this.PeriodFromValue) {
            filter['greaterthanequal'] = {};
        }
        if (this.PeriodToValue) {
            filter['lessthanequal'] = {};
        }
        if (this.PeriodFromValue) {
            filter['greaterthanequal']['date'] = moment__WEBPACK_IMPORTED_MODULE_9__(this.PeriodFromValue).format('YYYY-MM-DD');
        }
        if (this.PeriodToValue) {
            filter['lessthanequal']['date'] = moment__WEBPACK_IMPORTED_MODULE_9__(this.PeriodToValue).format('YYYY-MM-DD');
        }
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_10__["CommonFunctions"].isEmpty(filter)) {
            params['compare'] = filter;
        }
        if (Object.keys(this.inJSON).length !== 0) {
            params['in'] = this.inJSON;
        }
        return params;
    };
    /**
     * Get Services Is Updated
     * @param entity_id
     * @param service_id
     */
    UnchargedUnitsComponent.prototype.getServicesIsUpdated = function (entity_id, service_id) {
        var returnClass = 'text-center';
        var itemData = this.servicesUpdated.filter(function (item) { return ((item.entity_id === entity_id) && (item.service_id === service_id) && (item.is_updated === 0)); });
        if (itemData.length) {
            returnClass += ' red-color';
        }
        return returnClass;
    };
    /**
     * On home page route
     */
    UnchargedUnitsComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    UnchargedUnitsComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        this.billingList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.billingList = this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], UnchargedUnitsComponent.prototype, "onKeydownHandler", null);
    UnchargedUnitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-uncharged-units',
            template: __webpack_require__(/*! ./uncharged-units.component.html */ "./src/app/admin/billing-module/uncharged-units/uncharged-units.component.html"),
            styles: [__webpack_require__(/*! ./uncharged-units.component.scss */ "./src/app/admin/billing-module/uncharged-units/uncharged-units.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"]])
    ], UnchargedUnitsComponent);
    return UnchargedUnitsComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/uncharged-units/uncharged-units.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/billing-module/uncharged-units/uncharged-units.module.ts ***!
  \********************************************************************************/
/*! exports provided: UnchargedUnitsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnchargedUnitsModule", function() { return UnchargedUnitsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _uncharged_units_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uncharged-units.component */ "./src/app/admin/billing-module/uncharged-units/uncharged-units.component.ts");
/* harmony import */ var _uncharged_units_summary_uncharged_units_summary_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uncharged-units-summary/uncharged-units-summary.module */ "./src/app/admin/billing-module/uncharged-units/uncharged-units-summary/uncharged-units-summary.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _uncharged_units_component__WEBPACK_IMPORTED_MODULE_3__["UnchargedUnitsComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    },
    {
        path: 'uncharged-units-summary',
        loadChildren: './uncharged-units-summary/uncharged-units-summary.module#UnchargedUnitsSummaryModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    }
];
var UnchargedUnitsModule = /** @class */ (function () {
    function UnchargedUnitsModule() {
    }
    UnchargedUnitsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _uncharged_units_component__WEBPACK_IMPORTED_MODULE_3__["UnchargedUnitsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_6__["UtilityModule"],
                _uncharged_units_summary_uncharged_units_summary_module__WEBPACK_IMPORTED_MODULE_4__["UnchargedUnitsSummaryModule"]
            ],
            entryComponents: []
        })
    ], UnchargedUnitsModule);
    return UnchargedUnitsModule;
}());



/***/ })

}]);
//# sourceMappingURL=uncharged-units-uncharged-units-module.js.map