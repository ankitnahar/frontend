(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["billing-information-billing-information-module"],{

/***/ "./src/app/admin/billing-module/billing-information/billing-information.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-information.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin view archived list Container -->\r\n<div class=\"billing-info-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>BILLING</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">BILLING INFORMATION</span>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 leave-type-list\">\r\n          <ul>\r\n            <li>\r\n              <a class=\"primary-color list-alignment\"><i class=\"material-icons\">fiber_manual_record</i>Service's quotes\r\n                updated </a>\r\n            </li>\r\n            <li>\r\n              <a class=\"light-orange-color list-alignment\"><i class=\"material-icons\">fiber_manual_record</i>Service's\r\n                quotes not updated\r\n                Initiated</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onOpenFilter()\">\r\n                <span>Filter</span> <i class=\"material-icons\">filter_list</i>\r\n              </a>\r\n            </li>\r\n\r\n            <li *ngIf=\"tabData['export']\">\r\n              <a>\r\n                <span (click)=\"downloadExcel()\">Excel</span> <i class=\"material-icons\">file_download</i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- End Grid Inner Header -->\r\n\r\n      <!-- Start Grid Filter -->\r\n      <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n        <div class=\"filter-action-icon\">\r\n          <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <mat-icon\r\n            class=\"material-icons\">close</mat-icon></span>\r\n        </div>\r\n        <div class=\"grid-filter-container\">\r\n          <div class=\"filter-title\">\r\n            <h3>Advance Filter</h3>\r\n          </div>\r\n          <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3 MT-10\">\r\n                <ng-select [items]=\"clientList\"\r\n                           [closeOnSelect]=\"true\"\r\n                           bindLabel=\"code\"\r\n                           placeholder=\"Client Code\"\r\n                           bindValue=\"code\"\r\n                           [virtualScroll]=\"true\"\r\n                           [searchable]=\"true\"\r\n                           [hideSelected]=\"true\"\r\n                           formControlName=\"code\">\r\n                </ng-select>\r\n              </div>\r\n              <div class=\"col-md-3 MT-10\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Billing Name\" formControlName=\"billing_entity\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"col-md-3 MT-10\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Trading Name\" formControlName=\"trading_entity\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-3 MT-10\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Service\" formControlName=\"service_id\">\r\n                    <mat-option *ngFor=\"let service of serviceList\" [value]=\"service?.id\">\r\n                      {{ service?.service_name}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-3 MT-10\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Service Updated\" formControlName=\"is_updated\">\r\n                    <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                      {{ yesNo?.label}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"col-md-3 MT-10\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Parent Entity\" formControlName=\"parent_id\">\r\n                    <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                      {{ yesNo?.label}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"col-md-3 MT-10\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Billing From BDMS?\" formControlName=\"billing_from\">\r\n                    <mat-option *ngFor=\"let billingData of billingFrom.slice(1)\" [value]=\"billingData?.key\">\r\n                      {{ billingData?.label}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-3 MT-10 text-right\">\r\n                <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n                <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- End Grid Filter -->\r\n\r\n      <!-- Start Filter Tags -->\r\n      <div class=\"filter-tags\">\r\n        <form [formGroup]=\"advanceFilterForm\">\r\n\r\n          <div class=\"tag\" *ngIf=\"entityCodeField.value\">\r\n            <span class=\"tag__title\">Code :</span>\r\n            <span>\r\n          <ng-select [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"code\"\r\n                     placeholder=\"Client Code\"\r\n                     bindValue=\"code\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"code\"\r\n                     (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n            </ng-select>\r\n        </span>\r\n            <i class=\"material-icons tag__close\" (click)=\"onClearTag('code')\">close</i>\r\n          </div>\r\n\r\n          <div class=\"tag\" *ngIf=\"entityIdBillingField.value\">\r\n            <span class=\"tag__title\">Billing name :</span>\r\n            <span>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Billing Name\" formControlName=\"billing_entity\"\r\n                       (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </mat-form-field>\r\n        </span>\r\n            <i class=\"material-icons tag__close\" (click)=\"onClearTag('billing_entity','billing_name')\">close</i>\r\n          </div>\r\n\r\n          <div class=\"tag\" *ngIf=\"entityIdTradingField.value\">\r\n            <span class=\"tag__title\">Trading name :</span>\r\n            <span>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Trading Name\" formControlName=\"trading_entity\"\r\n                   (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n          </mat-form-field>\r\n        </span>\r\n            <i class=\"material-icons tag__close\" (click)=\"onClearTag('trading_entity','trading_name')\">close</i>\r\n          </div>\r\n\r\n          <div class=\"tag\" *ngIf=\"serviceIdField.value\">\r\n            <span class=\"tag__title\">Service :</span>\r\n            <span>\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Service\" #selectRef\r\n                              (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" readonly\r\n                              formControlName=\"service_id\">\r\n                  <mat-option *ngFor=\"let service of serviceList\" [value]=\"service?.id\">\r\n                    {{ service?.service_name}}\r\n                  </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </span>\r\n            <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('service_id')\">close</mat-icon>\r\n          </div>\r\n\r\n          <div class=\"tag\" *ngIf=\"serviceIdUpdatedField.value !== null\">\r\n            <span class=\"tag__title\">Services Updated :</span>\r\n            <span>\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"select\" #selectRef\r\n                              (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" readonly\r\n                              formControlName=\"is_updated\">\r\n                 <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                    {{ yesNo?.label}}\r\n                  </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </span>\r\n            <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('is_updated')\">close</mat-icon>\r\n          </div>\r\n          <div class=\"tag\" *ngIf=\"parentIdField.value !== null\">\r\n            <span class=\"tag__title\">Parent entity :</span>\r\n            <span>\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"select\" #selectRef\r\n                              (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" readonly\r\n                              formControlName=\"parent_id\">\r\n                 <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                    {{ yesNo?.label}}\r\n                  </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </span>\r\n            <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n          </div>\r\n\r\n          <div class=\"tag\" *ngIf=\"(isBillingFrom.value >=0 && isBillingFrom.value !== null)\">\r\n            <span class=\"tag__title\">Billing From BDMS?:</span>\r\n            <span>\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Client Console?\" (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" formControlName=\"billing_from\">\r\n                  <mat-option *ngFor=\"let billingData of billingFrom.slice(1)\" [value]=\"billingData?.key\">\r\n                    {{ billingData?.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n            <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('billing_from')\">close</mat-icon>\r\n          </div>\r\n\r\n          <div class=\"clearAll-tags\"\r\n               *ngIf=\"entityCodeField.value || entityIdBillingField.value || entityIdTradingField.value || serviceIdField.value || serviceIdUpdatedField.value !== null || parentIdField.value !== null || (isBillingFrom.value >=0 && isBillingFrom.value !== null)\">\r\n            <a (click)=\"resetFilterForm()\">Clear all</a>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <!-- End Filter Tags -->\r\n\r\n      <!-- Start Table -->\r\n      <div class=\"table-container table-no-striped\">\r\n        <div class=\"table-block\">\r\n          <table>\r\n            <thead>\r\n            <tr>\r\n              <th width=\"5%\">Sr. No</th>\r\n\r\n              <th width=\"9%\"\r\n                  (click)=\"getSortData('code', sortBy === 'code' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n                Client Code\r\n                <i *ngIf=\"sortBy === 'code'\"\r\n                   [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'code' && sortOrder === 'asc', 'icon-down' :  sortBy === 'code' && sortOrder === 'desc'}\">\r\n                  {{sortBy === 'code' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"16%\"\r\n                  (click)=\"getSortData('billing_name', sortBy === 'billing_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n                Billing Name\r\n                <i *ngIf=\"sortBy === 'billing_name'\"\r\n                   [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'billing_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'billing_name' && sortOrder === 'desc'}\">\r\n                  {{sortBy === 'billing_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"16%\"\r\n                  (click)=\"getSortData('trading_name', sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n                Trading Name\r\n                <i *ngIf=\"sortBy === 'trading_name'\"\r\n                   [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'trading_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'trading_name' && sortOrder === 'desc'}\">\r\n                  {{sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"18%\">Services</th>\r\n\r\n              <th width=\"7%\">Parent Entity</th>\r\n              <th width=\"9%\">Billing From BDMS?</th>\r\n              <th width=\"13%\"\r\n                  (click)=\"getSortData('created_by', sortBy === 'created_by' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n                Created\r\n                <i *ngIf=\"sortBy === 'created_by'\"\r\n                   [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'created_by' && sortOrder === 'asc', 'icon-down' :  sortBy === 'created_by' && sortOrder === 'desc'}\">\r\n                  {{sortBy === 'created_by' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"7%\">Action</th>\r\n            </tr>\r\n            </thead>\r\n          </table>\r\n\r\n          <div class=\"table-body\">\r\n            <table *ngIf=\"billingBasic.length\">\r\n              <tbody>\r\n              <tr *ngFor=\"let billingData of billingBasic; let i = index\">\r\n                <td width=\"5%\">\r\n                  {{+pageSize * (pageIndex) + i + 1}}\r\n                  <mat-icon class=\"red-color v-align-middle\" [matTooltip]=\"'Discontinue Process Initialized'\"\r\n                            *ngIf=\"billingData?.discontinue_stage === 1\">block\r\n                  </mat-icon>\r\n                </td>\r\n                <td width=\"9%\">{{billingData?.code}}</td>\r\n                <td width=\"16%\">{{billingData?.billing_name}}</td>\r\n                <td width=\"16%\">{{billingData?.trading_name}}</td>\r\n                <td width=\"18%\">\r\n                  <a *ngFor=\"let serviceNames of billingData?.service_array; let j = index\" class=\"\">\r\n                    <span class=\"label-primary-bg-color ML-5 label_services\"\r\n                          *ngIf=\"serviceNames['is_updated'] === 1\">{{serviceNames['value']}}</span>\r\n                    <span class=\"label-orange-bg-color ML-5 label_services\"\r\n                          *ngIf=\"serviceNames['is_updated'] === 0\">{{serviceNames['value']}}</span>\r\n                  </a>\r\n                </td>\r\n                <td width=\"7%\">\r\n                   <span class=\"turquoise-color fw-500\" *ngIf=\"billingData?.is_related\"><mat-icon\r\n                     class=\"grid_icon_trip_origin mat-icon material-icons\">trip_origin</mat-icon>Yes</span>\r\n                  <span class=\"red-color fw-500\" *ngIf=\"!billingData?.is_related\"><mat-icon\r\n                    class=\"grid_icon_trip_origin mat-icon material-icons\">trip_origin</mat-icon>No</span>\r\n                </td>\r\n                <td width=\"9%\">{{getBillingFrom(billingData?.billing_from)}}</td>\r\n                <td width=\"13%\">{{billingData?.created_by?.userfullname}} {{(billingData?.created_on !== '0000-00-00\r\n                  00:00:00') ? (billingData?.created_on | date : 'dd-MM-yyyy') : ''}}\r\n                </td>\r\n                <td width=\"8%\">\r\n                  <mat-icon class=\"orange-color\" *ngIf=\"tabData['add_edit']\"\r\n                            (click)=\"onEditBillingBasicInfo(billingData)\" [matTooltip]=\"'Edit'\"><i\r\n                    class=\"material-icons\">edit</i></mat-icon>\r\n\r\n                  <mat-icon class=\"wet-asphalt-color\" (click)=\"onViewBillingInfo(billingData)\" [matTooltip]=\"'View'\"><i\r\n                    class=\"material-icons\">remove_red_eye</i></mat-icon>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n          <table *ngIf=\"billingBasic.length\">\r\n            <tfoot>\r\n            <tr>\r\n              <td colspan=\"10\">\r\n                <mat-paginator [length]=\"totalRecords\" [pageSize]=\"pageSize\" [pageIndex]=\"pageIndex\"\r\n                               [pageSizeOptions]=\"pageArray\" (page)=\"onPageChange($event)\">\r\n                </mat-paginator>\r\n              </td>\r\n            </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <!-- End Table -->\r\n    </div>\r\n    <!-- End Data Grid -->\r\n  </div>\r\n  <div *ngIf=\"billingBasic.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-information.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-information.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".billing-info-container .label_services {\n  display: inline-block;\n  margin-bottom: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vYmlsbGluZy1tb2R1bGUvYmlsbGluZy1pbmZvcm1hdGlvbi9DOlxcd2FtcDY0XFx3d3dcXGhrX2Zyb250ZW5kL3Byb2plY3RzXFxhZG1pblxcc3JjXFxhcHBcXGFkbWluXFxiaWxsaW5nLW1vZHVsZVxcYmlsbGluZy1pbmZvcm1hdGlvblxcYmlsbGluZy1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2JpbGxpbmctaW5mb3JtYXRpb24vYmlsbGluZy1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaWxsaW5nLWluZm8tY29udGFpbmVyIHtcclxuICAubGFiZWxfc2VydmljZXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-information.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-information.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BillingInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingInformationComponent", function() { return BillingInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var BillingInformationComponent = /** @class */ (function () {
    function BillingInformationComponent(_fb, _router, _commonCrudService, _sharedService, _sharedObjService) {
        this._fb = _fb;
        this._router = _router;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this._sharedObjService = _sharedObjService;
        // Data Variables
        this.billingBasic = [];
        this.serviceList = [];
        this.clientList = [];
        this.billingList = [];
        this.codeList = [];
        this.servicesUpdated = [];
        this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["yesNo"];
        this.billingFrom = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["yesNo"];
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.entity_id = [];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilterView = false;
        this.isOpenHistoryDialog = false;
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_6__["ADMINTABACCESS"].BILLING_BILLINGINFORMATION;
    }
    Object.defineProperty(BillingInformationComponent.prototype, "entityCodeField", {
        get: function () {
            return this.filterForm.get('code');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingInformationComponent.prototype, "entityIdBillingField", {
        get: function () {
            return this.filterForm.get('billing_entity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingInformationComponent.prototype, "entityIdTradingField", {
        get: function () {
            return this.filterForm.get('trading_entity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingInformationComponent.prototype, "serviceIdField", {
        get: function () {
            return this.filterForm.get('service_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingInformationComponent.prototype, "serviceIdUpdatedField", {
        get: function () {
            return this.filterForm.get('is_updated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingInformationComponent.prototype, "parentIdField", {
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingInformationComponent.prototype, "isBillingFrom", {
        get: function () {
            return this.filterForm.get('billing_from');
        },
        enumerable: true,
        configurable: true
    });
    BillingInformationComponent.prototype.ngOnInit = function () {
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.initializationMethod();
    };
    /**
     * Initialization Methods
     */
    BillingInformationComponent.prototype.initializationMethod = function () {
        this.getClientList();
        this.getServices();
        this.createAdvanceFilterForm();
        this.setAdvanceFilter(this.filterForm);
    };
    /**
     * Create Change InOut
     */
    BillingInformationComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            billing_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            trading_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            is_updated: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            billing_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](1)
        });
        this.advanceFilterForm = this._fb.group({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            billing_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            trading_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            is_updated: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            billing_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](1)
        });
    };
    /**
     * Get Service For Generate Invoice
     */
    BillingInformationComponent.prototype.getServices = function () {
        var _this = this;
        this._sharedObjService.getServices({}, { 'compare': { 'equal': { 'parent_id': 0 } } }).subscribe(function (response) {
            _this.serviceList = response;
        });
    };
    /**
     * Get Client List
     */
    BillingInformationComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = response;
            _this.billingList = response;
            _this.codeList = response;
        });
    };
    /**
     *
     * @param {number} pageNumber
     * @param {string} key
     * @param {string} val
     */
    BillingInformationComponent.prototype.getBillingList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_BASIC, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleBillingResponse(response);
        });
    };
    /**
     * Handle Billing List Response
     * @param response
     */
    BillingInformationComponent.prototype.handleBillingResponse = function (response) {
        var _this = this;
        this.billingBasic = response.payload.data;
        this.servicesUpdated = response.payload.servicesUpdated;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
        this.billingBasic.map(function (item) {
            item['service_array'] = [];
            if (item.service_id !== '' && item.service_id !== null) {
                var serviceIDArray = item.service_id.split(',');
                var serviceNameArray_1 = item.service.split(',');
                if (serviceIDArray.length === serviceNameArray_1.length) {
                    var i_1 = 0;
                    serviceIDArray.forEach(function (dataItem) {
                        var itemData = _this.servicesUpdated.filter(function (itemUpdate) { return ((itemUpdate.entity_id === item.entity_id) && (itemUpdate.service_id === Number(dataItem)) && (itemUpdate.is_updated === 1)); });
                        if (itemData.length) {
                            item['service_array'].push({ 'key': dataItem, 'value': serviceNameArray_1[i_1], 'is_updated': 1 });
                        }
                        else {
                            item['service_array'].push({ 'key': dataItem, 'value': serviceNameArray_1[i_1], 'is_updated': 0 });
                        }
                        i_1++;
                    });
                }
            }
        });
    };
    /**
     * Get Billing From
     * @param status_id
     */
    BillingInformationComponent.prototype.getBillingFrom = function (status_id) {
        var val = this.billingFrom.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Toogle Filter
     */
    BillingInformationComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Close filter
     */
    BillingInformationComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    /**
     * Pagination page change method
     * @param event
     */
    BillingInformationComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getBillingList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Export to Excel
     */
    BillingInformationComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_BASIC_EXPORT, params, this.getSearchParam(), 'Uncharge Unit ', 0).subscribe(function (response) {
        });
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    BillingInformationComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'code' || elementName === 'service_id' || elementName === 'is_updated' || elementName === 'parent_id' || elementName === 'billing_from') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'billing_entity' || elementName === 'trading_entity') {
            if (elementName === 'billing_entity') {
                elementName = 'billing_name';
            }
            else {
                elementName = 'trading_name';
            }
            delete this.likeJSON[elementName];
        }
        this.getBillingList(1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    BillingInformationComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.isOpenFilterView = false;
        this.getBillingList(1, 'id', 'desc');
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    BillingInformationComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'code': form.value['code'],
                'billing_entity': form.value['billing_entity'],
                'trading_entity': form.value['trading_entity'],
                'service_id': form.value['service_id'],
                'is_updated': form.value['is_updated'],
                'parent_id': form.value['parent_id'],
                'billing_from': form.value['billing_from']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    BillingInformationComponent.prototype.setAdvanceFilter = function (form, flag) {
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
            // if (form.value['billing_entity'] !== '' && form.value['billing_entity']) {
            // this.entity_id.push(form.value['billing_entity']);
            // delete form.value['billing_entity'];
            // }
            // if (form.value['trading_entity'] !== '' && form.value['trading_entity']) {
            //   this.entity_id.push(form.value['trading_entity']);
            //   delete form.value['trading_entity'];
            // }
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'code' || key === 'service_id' || key === 'is_updated' || key === 'parent_id' || key === 'billing_from') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'billing_entity') {
                        this.likeJSON['billing_name'] = encodeURIComponent(form.value[key]);
                        delete form.value['billing_entity'];
                    }
                    else if (key === 'trading_entity') {
                        this.likeJSON['trading_name'] = encodeURIComponent(form.value[key]);
                        delete form.value['trading_entity'];
                    }
                }
            }
            // IF Entity search multiple values
            if (this.entity_id.length) {
                this.inJSON['entity_id'] = this.entity_id.join(',');
            }
            this.isOpenFilterView = false;
            this.getBillingList(1, 'id', 'desc');
        }
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    BillingInformationComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    BillingInformationComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getBillingList(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    BillingInformationComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_2__["CommonFunctions"].isEmpty(filter)) {
            params['compare'] = filter;
        }
        if (Object.keys(this.inJSON).length !== 0) {
            params['in'] = this.inJSON;
        }
        return params;
    };
    /**
     * On Edit billing basic info
     * @param billingData
     */
    BillingInformationComponent.prototype.onEditBillingBasicInfo = function (billingData) {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_BASIC, 0, {}, {
            'compare': {
                'equal': {
                    'entity_id': billingData.entity_id
                }
            }
        }).subscribe(function (response) {
            if (response) {
                var data = response.payload.data;
                if (data[0]) {
                    // this.billingBasic = data[0];
                    // console.log(this.billingBasic);
                    _this._sharedService.setBillingData(data[0]);
                    window.open(_utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].BILLING_BASIC_INFO_SERVICES, '_blank');
                }
            }
        });
    };
    /**
     * On Edit billing basic info service
     * @param billingData
     */
    BillingInformationComponent.prototype.onViewBillingInfo = function (billingData) {
        this._sharedService.setBillingData(billingData);
        window.open(_utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].VIEW_BILLING_INFORMATION, '_blank');
    };
    BillingInformationComponent.prototype.onBillingServices = function (billingData) {
        this._sharedService.setBillingData(billingData);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].BILLING_BASIC_INFO_SERVICES]);
    };
    BillingInformationComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    BillingInformationComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : 'Yes';
    };
    /**
     * On home page route
     */
    BillingInformationComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BillingInformationComponent.prototype, "onKeydownHandler", null);
    BillingInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing-information',
            template: __webpack_require__(/*! ./billing-information.component.html */ "./src/app/admin/billing-module/billing-information/billing-information.component.html"),
            styles: [__webpack_require__(/*! ./billing-information.component.scss */ "./src/app/admin/billing-module/billing-information/billing-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__["SharedObjService"]])
    ], BillingInformationComponent);
    return BillingInformationComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-information.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-information.module.ts ***!
  \****************************************************************************************/
/*! exports provided: BillingInformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingInformationModule", function() { return BillingInformationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _billing_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./billing-information.component */ "./src/app/admin/billing-module/billing-information/billing-information.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _billing_information_component__WEBPACK_IMPORTED_MODULE_2__["BillingInformationComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]],
        children: [
            {
                path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].BILLING_INFORMATION_ROUTE,
                component: _billing_information_component__WEBPACK_IMPORTED_MODULE_2__["BillingInformationComponent"]
            }
        ]
    },
    {
        path: 'billing-info-services',
        loadChildren: './billing-info-services/billing-info-services.module#BillingInfoServicesModule'
    },
    {
        path: 'billing-info-basic-information',
        loadChildren: './billing-info-basic-information/billing-info-basic-information.module#BillingInfoBasicInformationModule'
    }
];
var BillingInformationModule = /** @class */ (function () {
    function BillingInformationModule() {
    }
    BillingInformationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_billing_information_component__WEBPACK_IMPORTED_MODULE_2__["BillingInformationComponent"]],
        })
    ], BillingInformationModule);
    return BillingInformationModule;
}());



/***/ })

}]);
//# sourceMappingURL=billing-information-billing-information-module.js.map