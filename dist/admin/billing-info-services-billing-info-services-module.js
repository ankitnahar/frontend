(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["billing-info-services-billing-info-services-module"],{

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/basic-information-services/basic-information-services.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/basic-information-services/basic-information-services.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-billing-info-basic-information [billingInformation]=\"billingInformation\" [isEdit]=\"isEdit\"\r\n                                    (onAddUpdate)=\"getOnUpdate()\"></app-billing-info-basic-information>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/basic-information-services/basic-information-services.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/basic-information-services/basic-information-services.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: BasicInformationServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInformationServicesComponent", function() { return BasicInformationServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicInformationServicesComponent = /** @class */ (function () {
    function BasicInformationServicesComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.onAddUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
    }
    BasicInformationServicesComponent.prototype.ngOnInit = function () {
    };
    /**
     * Get On Update Event Emit True
     */
    BasicInformationServicesComponent.prototype.getOnUpdate = function () {
        this.onAddUpdate.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_1__["BillingBasic"])
    ], BasicInformationServicesComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BasicInformationServicesComponent.prototype, "isEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BasicInformationServicesComponent.prototype, "onAddUpdate", void 0);
    BasicInformationServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-information-services',
            template: __webpack_require__(/*! ./basic-information-services.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/basic-information-services/basic-information-services.component.html")
        }),
        __metadata("design:paramtypes", [_utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], BasicInformationServicesComponent);
    return BasicInformationServicesComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/billing-info-services.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/billing-info-services.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"billing-info-services-container\">\r\n\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>BILLING</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a (click)=\"onBillingInformation()\">BILLING INFORMATION</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">BASIC INFORMATION | {{billingBasic?.billing_name}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a (click)=\"onShowHistory()\">\r\n                <label>View History</label>\r\n                <i class=\"material-icons\">history</i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <!--start tab menu-->\r\n  <div class=\"update-client\">\r\n    <mat-tab-group class=\"demo-tab-group contact-tab\" [selectedIndex]=\"selectedIndexData\"\r\n                   (selectedTabChange)=\"onSelectTab($event)\">\r\n      <mat-tab label=\"Basic Information\">\r\n        <div>\r\n          <app-basic-information-services *ngIf=\"isActiveTabText=== 'Basic Information'\"\r\n                                          [billingInformation]=\"billingBasic\"\r\n                                          (onAddUpdate)=\"getBasicServices()\"\r\n                                          [isEdit]=\"isEdit\"></app-basic-information-services>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab *ngFor=\"let serviceData of servicesAgreed; let i = index\" label=\"{{serviceData['service_name']}}\">\r\n        <app-bookkeeping-services\r\n          *ngIf=\"serviceData['service_id'] === 1 && isActiveTabText ===serviceData['service_name']\"\r\n          [serviceInfo]=\"serviceData\" [billingInformation]=\"billingBasic\" [isEdit]=\"isEdit\"></app-bookkeeping-services>\r\n        <app-payroll-services *ngIf=\"serviceData['service_id'] === 2 && isActiveTabText ===serviceData['service_name']\"\r\n                              [isEdit]=\"isEdit\" [serviceInfo]=\"serviceData\"\r\n                              [billingInformation]=\"billingBasic\"></app-payroll-services>\r\n        <app-taxation-services *ngIf=\"serviceData['service_id'] === 6 && isActiveTabText ===serviceData['service_name']\"\r\n                               [isEdit]=\"isEdit\" [serviceInfo]=\"serviceData\"\r\n                               [billingInformation]=\"billingBasic\"></app-taxation-services>\r\n        <app-smsf-services *ngIf=\"serviceData['service_id'] === 4 && isActiveTabText ===serviceData['service_name']\"\r\n                           [isEdit]=\"isEdit\" [serviceInfo]=\"serviceData\"\r\n                           [billingInformation]=\"billingBasic\"></app-smsf-services>\r\n        <app-hosting-services *ngIf=\"serviceData['service_id'] === 5 && isActiveTabText ===serviceData['service_name']\"\r\n                              [isEdit]=\"isEdit\" [serviceInfo]=\"serviceData\"\r\n                              [billingInformation]=\"billingBasic\"></app-hosting-services>\r\n        <app-subscription-services\r\n          *ngIf=\"serviceData['service_id'] === 7 && isActiveTabText ===serviceData['service_name']\"\r\n          [isEdit]=\"isEdit\" [serviceInfo]=\"serviceData\" [billingInformation]=\"billingBasic\"></app-subscription-services>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/billing-info-services.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/billing-info-services.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2JpbGxpbmctaW5mb3JtYXRpb24vYmlsbGluZy1pbmZvLXNlcnZpY2VzL2JpbGxpbmctaW5mby1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/billing-info-services.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/billing-info-services.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: BillingInfoServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingInfoServicesComponent", function() { return BillingInfoServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_common_history_dialog_common_history_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/components/common-history-dialog/common-history-dialog.component */ "./src/utility/components/common-history-dialog/common-history-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BillingInfoServicesComponent = /** @class */ (function () {
    function BillingInfoServicesComponent(_router, dialog, _commonCrudService, _sharedService) {
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this.servicesAgreed = [];
        this.selectedIndexData = 0;
        this.isActiveTab = 0;
        this.isActiveTabText = 'Basic Information';
    }
    BillingInfoServicesComponent.prototype.ngOnInit = function () {
        this.billingBasic = this._sharedService.getBillingData();
        this.isEdit = (this.isEdit === 0) ? 0 : 1;
        this.getBasicServices();
    };
    /**
     * Get Basic Services
     */
    BillingInfoServicesComponent.prototype.getBasicServices = function () {
        var _this = this;
        this.servicesAgreed = [];
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_BASIC_VIEW, this.billingBasic.entity_id).subscribe(function (response) {
            var data = response.payload.data;
            // console.log(data);
            if (data) {
                var itemData = [];
                itemData = Object.values(data['service']);
                if (itemData) {
                    itemData.forEach(function (item) {
                        if (item['is_active'] === 1) {
                            _this.servicesAgreed.push(item);
                        }
                    });
                }
            }
        });
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_BASIC, 0, {}, {
            'compare': {
                'equal': {
                    'entity_id': this.billingBasic.entity_id
                }
            }
        }).subscribe(function (response) {
            if (response) {
                var data = response.payload.data;
                if (data[0]) {
                    _this.billingBasic = data[0];
                    // console.log(this.billingBasic);
                }
            }
        });
    };
    /**
     * On Tab Change Event
     * @param tabChangeEvent
     */
    BillingInfoServicesComponent.prototype.onSelectTab = function (tabChangeEvent) {
        this.isActiveTab = tabChangeEvent['index'];
        this.isActiveTabText = tabChangeEvent.tab.textLabel;
    };
    /**
     * On Billing Information
     */
    BillingInfoServicesComponent.prototype.onBillingInformation = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].BILLING_INFORMATION]);
    };
    /**
     * On Show History
     */
    BillingInfoServicesComponent.prototype.onShowHistory = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        this.dialog.open(_utility_components_common_history_dialog_common_history_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CommonHistoryDialogComponent"], dialogConfig);
    };
    /**
     * On home page route
     */
    BillingInfoServicesComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BillingInfoServicesComponent.prototype, "isEdit", void 0);
    BillingInfoServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing-info-services',
            template: __webpack_require__(/*! ./billing-info-services.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/billing-info-services.component.html"),
            styles: [__webpack_require__(/*! ./billing-info-services.component.scss */ "./src/app/admin/billing-module/billing-information/billing-info-services/billing-info-services.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], BillingInfoServicesComponent);
    return BillingInfoServicesComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/billing-info-services.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/billing-info-services.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: BillingInfoServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingInfoServicesModule", function() { return BillingInfoServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _billing_info_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./billing-info-services.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/billing-info-services.component.ts");
/* harmony import */ var _basic_information_services_basic_information_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-information-services/basic-information-services.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/basic-information-services/basic-information-services.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _billing_info_basic_information_billing_info_basic_information_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../billing-info-basic-information/billing-info-basic-information.module */ "./src/app/admin/billing-module/billing-information/billing-info-basic-information/billing-info-basic-information.module.ts");
/* harmony import */ var _bookkeeping_services_bookkeeping_services_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bookkeeping-services/bookkeeping-services.module */ "./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-services.module.ts");
/* harmony import */ var _hosting_services_hosting_services_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hosting-services/hosting-services.module */ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-services.module.ts");
/* harmony import */ var _taxation_services_taxation_services_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./taxation-services/taxation-services.module */ "./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-services.module.ts");
/* harmony import */ var _payroll_services_payroll_services_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payroll-services/payroll-services.module */ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-services.module.ts");
/* harmony import */ var _smsf_services_smsf_services_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./smsf-services/smsf-services.module */ "./src/app/admin/billing-module/billing-information/billing-info-services/smsf-services/smsf-services.module.ts");
/* harmony import */ var _subscription_services_subscription_services_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subscription-services/subscription-services.module */ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/subscription-services.module.ts");
/* harmony import */ var _view_billing_information_view_billing_information_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view-billing-information/view-billing-information.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/view-billing-information/view-billing-information.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '',
        component: _billing_info_services_component__WEBPACK_IMPORTED_MODULE_2__["BillingInfoServicesComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'view-billing-information',
        component: _view_billing_information_view_billing_information_component__WEBPACK_IMPORTED_MODULE_14__["ViewBillingInformationComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    }
];
var BillingInfoServicesModule = /** @class */ (function () {
    function BillingInfoServicesModule() {
    }
    BillingInfoServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _billing_info_basic_information_billing_info_basic_information_module__WEBPACK_IMPORTED_MODULE_7__["BillingInfoBasicInformationModule"],
                _bookkeeping_services_bookkeeping_services_module__WEBPACK_IMPORTED_MODULE_8__["BookkeepingServicesModule"],
                _hosting_services_hosting_services_module__WEBPACK_IMPORTED_MODULE_9__["HostingServicesModule"],
                _taxation_services_taxation_services_module__WEBPACK_IMPORTED_MODULE_10__["TaxationServicesModule"],
                _payroll_services_payroll_services_module__WEBPACK_IMPORTED_MODULE_11__["PayrollServicesModule"],
                _smsf_services_smsf_services_module__WEBPACK_IMPORTED_MODULE_12__["SmsfServicesModule"],
                _subscription_services_subscription_services_module__WEBPACK_IMPORTED_MODULE_13__["SubscriptionServicesModule"]
            ],
            declarations: [_billing_info_services_component__WEBPACK_IMPORTED_MODULE_2__["BillingInfoServicesComponent"], _basic_information_services_basic_information_services_component__WEBPACK_IMPORTED_MODULE_3__["BasicInformationServicesComponent"], _view_billing_information_view_billing_information_component__WEBPACK_IMPORTED_MODULE_14__["ViewBillingInformationComponent"]],
            exports: [
                _billing_info_basic_information_billing_info_basic_information_module__WEBPACK_IMPORTED_MODULE_7__["BillingInfoBasicInformationModule"],
                _bookkeeping_services_bookkeeping_services_module__WEBPACK_IMPORTED_MODULE_8__["BookkeepingServicesModule"],
                _hosting_services_hosting_services_module__WEBPACK_IMPORTED_MODULE_9__["HostingServicesModule"],
                _taxation_services_taxation_services_module__WEBPACK_IMPORTED_MODULE_10__["TaxationServicesModule"],
                _payroll_services_payroll_services_module__WEBPACK_IMPORTED_MODULE_11__["PayrollServicesModule"],
                _smsf_services_smsf_services_module__WEBPACK_IMPORTED_MODULE_12__["SmsfServicesModule"],
                _subscription_services_subscription_services_module__WEBPACK_IMPORTED_MODULE_13__["SubscriptionServicesModule"],
                _billing_info_services_component__WEBPACK_IMPORTED_MODULE_2__["BillingInfoServicesComponent"], _basic_information_services_basic_information_services_component__WEBPACK_IMPORTED_MODULE_3__["BasicInformationServicesComponent"]
            ]
        })
    ], BillingInfoServicesModule);
    return BillingInfoServicesModule;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-basic/bookkeeping-basic.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-basic/bookkeeping-basic.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bookkeeping-basic-container\" *ngIf=\"isEdit\">\r\n  <span class=\"panel-title\">Bookkeeping Basic</span>\r\n  <form [formGroup]=\"bookkeepingbasicForm\" (submit)=\"onSubmitBookkeepingInfo(bookkeepingbasicForm)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"frequency_id\" placeholder=\"Invoice frequency\"\r\n                      (selectionChange)=\"changeGetRecurringList(serviceInfo['service_id'], bookkeepingData ? bookkeepingData['bk_in_ff'] : 1, $event.value)\"\r\n                      required>\r\n            <mat-option *ngFor=\"let frequency of frequencyList\" [value]=\"frequency?.id\">\r\n              {{ frequency?.frequency_name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(bookkeepingbasicForm.get('frequency_id'))\"\r\n                          [errMsg]=\"validationMsg.FREQUENCY_REQUIRED\"></app-validation>\r\n        </div>\r\n        <!--  <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(bookkeepingbasicForm.get('frequency_id'))\"\r\n                            [errMsg]=\"validationMsg.FREQUENCY_REQUIRED\"></app-validation>\r\n          </div>-->\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <input formControlName=\"default_rph\" matInput placeholder=\"Default RPH\" type=\"number\" required/>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(bookkeepingbasicForm.get('default_rph'))\"\r\n                          [errMsg]=\"validationMsg.DEFAULT_RPH_REQUIRED\"></app-validation>\r\n          <app-validation *ngIf=\"isValidField(bookkeepingbasicForm.get('default_rph'))\"\r\n                          [errMsg]=\"validationMsg.DEFAULT_RPH_VALID\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"recurring_id\" placeholder=\"Recurring\"\r\n                      (selectionChange)=\"changeAutoInvoice($event.value)\">\r\n            <mat-option value=\"\">Please Select</mat-option>\r\n            <mat-option *ngFor=\"let recurring of recurringList\" [value]=\"recurring?.id\">\r\n              {{ recurring?.recurring_name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-15\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"auto_invoice\" placeholder=\"Auto invoice\" required\r\n                      (selectionChange)=\"changeAutoInvoiceType($event.value)\">\r\n            <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n              {{ yesNo?.label}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(bookkeepingbasicForm.get('auto_invoice'))\"\r\n                          [errMsg]=\"validationMsg.AUTO_INVOICE_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-8\">\r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"BK Notes\" formControlName=\"notes\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-12 MT-20 ng-star-inserted\">\r\n        <div class=\"table-container\">\r\n          <div class=\"table-block\">\r\n            <table class=\"table\">\r\n              <thead>\r\n              <tr>\r\n                <th colspan=\"7\">\r\n                  <span class=\"MT-5 orange-color\">Fee Structure</span>\r\n                  <a (click)=\"viewFeesStructureInformationHistory(bookkeepingData.id);\" [matTooltip]=\"'View History'\"\r\n                     class=\"cursor-pointer on-right primary-color\">\r\n                    <i class=\"material-icons v-align-middle\">history</i> View History</a></th>\r\n              </tr>\r\n              <tr>\r\n                <th width=\"15%\">Services</th>\r\n                <th width=\"20%\">Service Start Date</th>\r\n                <th width=\"9%\">RPH</th>\r\n                <th width=\"11%\">Inc. In FF</th>\r\n                <th width=\"15%\">FF Amount($)</th>\r\n                <th width=\"15%\">Fixed Units</th>\r\n                <th width=\"15%\">FF Start Date</th>\r\n              </tr>\r\n              </thead>\r\n\r\n              <tbody>\r\n              <tr *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index;\">\r\n                <td width=\"15%\">{{filterGroup.value['service_name']}}</td>\r\n                <td width=\"15%\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Service Start Date\" [matDatepicker]=\"contractSignedDateRef\"\r\n                           (dateChange)=\"updateContractSignedDate(i, $event.value)\"\r\n                           value=\"{{filterGroup.value['contract_signed_date']}}\" [disabled]=\"i === 0 ? true : false\"/>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"contractSignedDateRef\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #contractSignedDateRef disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <div class=\"validation-msg\">\r\n                    <app-validation *ngIf=\"isRequiredField(filterGroup.get('contract_signed_date'))\"\r\n                                    [errMsg]=\"validationMsg.DATE_REQUIRED\"></app-validation>\r\n                  </div>\r\n                </td>\r\n                <td width=\"9%\">\r\n                  <mat-form-field appearance=\"outline\" floatLabel=\"never\">\r\n                    <input matInput type=\"number\" value=\"{{filterGroup.value['rph']}}\"\r\n                           (change)=\"updateRPHValue(i, $event.target.value)\"/>\r\n                  </mat-form-field>\r\n                  <div class=\"validation-msg MT-5\">\r\n                    <app-validation *ngIf=\"isValidField(filterGroup.get('rph'))\"\r\n                                    [errMsg]=\"validationMsg.AMOUNT_VALID\"></app-validation>\r\n                  </div>\r\n                </td>\r\n                <td width=\"11%\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Inc. In FF\" (selectionChange)=\"updateIncFF(i, $event.value)\"\r\n                                [value]=\"filterGroup.value['inc_in_ff']\">\r\n                      <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                        {{ yesNo?.label}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </td>\r\n                <td width=\"15%\">\r\n                  <mat-form-field appearance=\"outline\" floatLabel=\"never\" *ngIf=\"filterGroup.value['inc_in_ff'] === 1\">\r\n                    <input matInput type=\"number\" value=\"{{filterGroup.value['fixed_fee']}}\"\r\n                           (change)=\"updateFFAmount(i, $event.target.value)\" required/>\r\n                  </mat-form-field>\r\n                  <div class=\"validation-msg MT-5\">\r\n                    <app-validation *ngIf=\"isRequiredField(filterGroup.get('fixed_fee'))\"\r\n                                    [errMsg]=\"validationMsg.AMOUNT_VALID\"></app-validation>\r\n                    <app-validation *ngIf=\"isValidField(filterGroup.get('fixed_fee'))\"\r\n                                    [errMsg]=\"validationMsg.AMOUNT_VALID\"></app-validation>\r\n                  </div>\r\n                </td>\r\n                <td width=\"15%\">{{filterGroup.value['fixed_unit']}}</td>\r\n                <td width=\"15%\">\r\n                  <mat-form-field *ngIf=\"filterGroup.value['inc_in_ff'] === 1\">\r\n                    <input matInput placeholder=\"Start Date\" [matDatepicker]=\"startDateRef\"\r\n                           (dateChange)=\"updateFFStartDate(i, $event.value)\"\r\n                           value=\"{{filterGroup.value['ff_start_date']}}\" (mousedown)=\"startDateRef.open()\"/>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"startDateRef\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #startDateRef disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <div class=\"validation-msg\">\r\n                    <app-validation *ngIf=\"isRequiredField(filterGroup.get('ff_start_date'))\"\r\n                                    [errMsg]=\"validationMsg.DATE_REQUIRED\"></app-validation>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr class=\"fw-600\">\r\n                <td colspan=\"4\">TOTAL</td>\r\n                <td>{{bookkeepingData?.fixed_total_amount}}</td>\r\n                <td>{{bookkeepingData?.fixed_total_unit}}</td>\r\n                <td>&nbsp;</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 text-right MTB-20\">\r\n        <button type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n        <button [disabled]=\"bookkeepingbasicForm.invalid\" type=\"submit\" class=\"btn-primary MR-5\">Save & Next</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"view-billing-info-container\" *ngIf=\"!isEdit\">\r\n  <div class=\"basic-details-border\">\r\n    <span class=\"panel-title\">Bookkeeping Basic</span>\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 label-span-color\">\r\n          <div>\r\n            <label>Invoice frequency</label>\r\n            <span>{{getFrequencyName(bookkeepingData?.frequency_id)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Auto invoice</label>\r\n            <span>{{getYesNoStatus(bookkeepingData?.auto_invoice)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Bk notes</label>\r\n            <span>{{bookkeepingData?.notes}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 label-span-color\">\r\n          <div>\r\n            <label>Default RPH</label>\r\n            <span>{{bookkeepingData?.default_rph}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Recurring</label>\r\n            <span>{{getRecurringName(bookkeepingData?.recurring_id)}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"col-md-12 MT-20 ng-star-inserted MTB-20\">\r\n      <div class=\"table-container\">\r\n        <div class=\"table-block\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n              <th colspan=\"7\">\r\n                <span class=\"MT-5 orange-color\">Fee Structure</span>\r\n                <a (click)=\"viewFeesStructureInformationHistory(bookkeepingData.id);\" [matTooltip]=\"'View History'\"\r\n                   class=\"cursor-pointer on-right primary-color\">\r\n                  <i class=\"material-icons v-align-middle\">history</i> View History</a></th>\r\n            </tr>\r\n            <tr>\r\n              <th width=\"15%\">Services</th>\r\n              <th width=\"20%\">Service Start Date</th>\r\n              <th width=\"9%\">RPH</th>\r\n              <th width=\"11%\">Inc. In FF</th>\r\n              <th width=\"15%\">FF Amount($)</th>\r\n              <th width=\"15%\">Fixed Units</th>\r\n              <th width=\"15%\">FF Start Date</th>\r\n            </tr>\r\n            </thead>\r\n\r\n            <tbody>\r\n            <tr *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index;\">\r\n              <td width=\"15%\">{{filterGroup.value['service_name']}}</td>\r\n              <td width=\"15%\">{{filterGroup.value['contract_signed_date'] | date : 'dd-MM-yyyy'}}\r\n              </td>\r\n              <td width=\"9%\">{{filterGroup.value['rph']}}\r\n              </td>\r\n              <td width=\"11%\">{{getYesNoStatus(filterGroup.value['inc_in_ff'])}}\r\n              </td>\r\n              <td width=\"15%\"><span\r\n                *ngIf=\"filterGroup.value['inc_in_ff'] === 1\">{{filterGroup.value['fixed_fee']}}</span>\r\n              </td>\r\n              <td width=\"15%\"><span\r\n                *ngIf=\"filterGroup.value['inc_in_ff'] === 1\">{{filterGroup.value['fixed_unit']}}</span></td>\r\n              <td width=\"15%\"><span\r\n                *ngIf=\"filterGroup.value['inc_in_ff'] === 1\">{{filterGroup.value['ff_start_date']  | date : 'dd-MM-yyyy'}}</span>\r\n              </td>\r\n            </tr>\r\n            <tr class=\"fw-600\">\r\n              <td colspan=\"4\">TOTAL</td>\r\n              <td>{{bookkeepingData?.fixed_total_amount}}</td>\r\n              <td>{{bookkeepingData?.fixed_total_unit}}</td>\r\n              <td>&nbsp;</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Start History modal-->\r\n<div *ngIf=\"isOpenHistoryDialog\">\r\n  <app-history-dialog (close)=\"isOpenHistoryDialog = false\"></app-history-dialog>\r\n</div>\r\n<!-- End History modal-->\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-basic/bookkeeping-basic.component.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-basic/bookkeeping-basic.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: BookkeepingBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookkeepingBasicComponent", function() { return BookkeepingBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../utility/pipe/noComma.pipe */ "./src/utility/pipe/noComma.pipe.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utility_components_common_history_dialog_common_history_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../utility/components/common-history-dialog/common-history-dialog.component */ "./src/utility/components/common-history-dialog/common-history-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var BookkeepingBasicComponent = /** @class */ (function (_super) {
    __extends(BookkeepingBasicComponent, _super);
    function BookkeepingBasicComponent(_decimalPipe, dialog, _noCommaPipe, _router, _fb, _commonCrudService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._decimalPipe = _decimalPipe;
        _this.dialog = dialog;
        _this._noCommaPipe = _noCommaPipe;
        _this._router = _router;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this.onAddUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_1__["ValidationConstantMessage"]();
        _this.frequencyList = [];
        _this.recurringList = [];
        _this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["yesNo"];
        _this.servicesRPHList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["serviceRPH"];
        _this.isOpenHistoryDialog = false;
        //variable
        _this.serviceSelect = 'All';
        return _this;
    }
    BookkeepingBasicComponent.prototype.ngOnInit = function () {
        // console.log(this.isEdit);
        this.getFrequency();
        this.getServiceBasicInfo();
        this.createBookkeepingbasicForm();
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].BILLING_SERVICES_HISTORY + '/' + this.billingInformation.entity_id,
            params: { 'service_id': this.serviceInfo['service_id'] },
        };
        this._sharedService.setHistoryURL(value);
    };
    /**
     * Get Service Basic Information
     */
    BookkeepingBasicComponent.prototype.getServiceBasicInfo = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].BILLING_BOOKKEEPING, this.billingInformation.entity_id, {}).subscribe(function (response) {
            _this.bookkeepingData = response.payload.data;
            // console.log(this.bookkeepingData);
            _this.createBookkeepingbasicForm();
            if (_this.bookkeepingData) {
                var BookkeepingArray = [];
                BookkeepingArray['service_id'] = _this.bookkeepingData['service_id'];
                BookkeepingArray['billing_id'] = _this.bookkeepingData['id'];
                BookkeepingArray['service_name'] = _this.bookkeepingData['service_name'];
                BookkeepingArray['contract_signed_date'] = _this.bookkeepingData['contract_signed_date'];
                BookkeepingArray['rph'] = _this.bookkeepingData['ff_rph'];
                BookkeepingArray['inc_in_ff'] = _this.bookkeepingData['bk_in_ff'];
                BookkeepingArray['fixed_fee'] = _this.bookkeepingData['fixed_fee'];
                BookkeepingArray['ff_start_date'] = _this.bookkeepingData['ff_start_date'];
                _this.getFilterFieldArray().push(_this.createServiceGroup(BookkeepingArray));
                _this.updateValueAndUnits(0);
                if (_this.bookkeepingData['service_rph']) {
                    var i_1 = 1;
                    _this.bookkeepingData['service_rph'].forEach(function (item) {
                        _this.getFilterFieldArray().push(_this.createServiceGroup(item));
                        _this.updateValueAndUnits(i_1);
                        i_1 = i_1 + 1;
                    });
                }
            }
        });
    };
    /**
     * Create Bookkeping basic form
     */
    BookkeepingBasicComponent.prototype.createBookkeepingbasicForm = function () {
        this.bookkeepingbasicForm = this._fb.group({
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.bookkeepingData) ? (this.bookkeepingData.frequency_id) ? this.bookkeepingData.frequency_id : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            default_rph: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.bookkeepingData) ? (this.bookkeepingData.default_rph !== '0.00') ? this.bookkeepingData.default_rph : this._noCommaPipe.transform(this._decimalPipe.transform(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].DEFAULT_RPH, '1.2-2')) : this._noCommaPipe.transform(this._decimalPipe.transform(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].DEFAULT_RPH, '1.2-2')), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["CommonRegex"].FLOAT_NUMBER_REGEXP)]),
            recurring_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.bookkeepingData) ? this.bookkeepingData.recurring_id : ''),
            auto_invoice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.bookkeepingData) ? this.bookkeepingData.auto_invoice : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.bookkeepingData) ? this.bookkeepingData.notes : ''),
            service_rph: this._fb.array([])
        });
        if (this.bookkeepingData) {
            if (this.bookkeepingData.frequency_id > 0) {
                this.changeGetRecurringList(this.serviceInfo['service_id'], this.bookkeepingData ? Number(this.bookkeepingData['bk_in_ff']) : 1, this.bookkeepingData.frequency_id);
            }
            this.changeAutoInvoice(this.bookkeepingData.recurring_id);
        }
    };
    /**
     * Create Service Group Form
     */
    BookkeepingBasicComponent.prototype.createServiceGroup = function (item) {
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['id'] : ''),
            billing_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['billing_id'] : ''),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['service_id'] : ''),
            service_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['service_name'] : ''),
            contract_signed_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? (item['contract_signed_date'] !== '0000-00-00' && item['contract_signed_date'] !== null) ? item['contract_signed_date'] : null : null, (item['inc_in_ff'] === 1) ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] : null),
            inc_in_ff: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? (item['inc_in_ff'] > 0) ? item['inc_in_ff'] : 0 : 0),
            rph: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? (item['rph'] > 0) ? item['rph'] : this.getServiceRPH(item['service_id']) : _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].DEFAULT_RPH, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["CommonRegex"].FLOAT_NUMBER_REGEXP)]),
            ff_start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? (item['ff_start_date'] !== '0000-00-00' && item['ff_start_date'] !== null) ? item['ff_start_date'] : null : null, (item['inc_in_ff'] === 1) ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] : null),
            fixed_unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['fixed_unit'] : ''),
            fixed_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['fixed_fee'] : null, (item['inc_in_ff'] === 1) ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)] : null),
        });
    };
    /**
     * Get Filter Field Array
     */
    BookkeepingBasicComponent.prototype.getFilterFieldArray = function () {
        return this.bookkeepingbasicForm.get('service_rph');
    };
    /**
     * Change Auto Invoice Status
     * @param recurring_id
     */
    BookkeepingBasicComponent.prototype.changeAutoInvoice = function (recurring_id) {
        if (recurring_id === '') {
            this.bookkeepingbasicForm.get('auto_invoice').setValue(null);
            this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["ToastType"].ERROR);
        }
    };
    /**
     * Change Auto Invoice Status
     * @param recurring_id
     */
    BookkeepingBasicComponent.prototype.changeAutoInvoiceType = function (value) {
        var _this = this;
        if (value) {
            var recurring_id = this.bookkeepingbasicForm.get('recurring_id').value;
            // console.log( recurring_id);
            if (recurring_id === '') {
                this.bookkeepingbasicForm.get('auto_invoice').setValue(null);
                this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["ToastType"].ERROR);
            }
            // this will check releated entity
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].BILLING_BASIC_VIEW, this.billingInformation.entity_id).subscribe(function (response) {
                var DataItem = response.payload.data[_this.billingInformation.entity_id];
                // console.log( DataItem);
                if (DataItem['is_related'] === 1 || DataItem['to_email'] === '' || DataItem['contact_person'] === '') {
                    _this.bookkeepingbasicForm.get('auto_invoice').setValue(null);
                    _this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RELATED, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["ToastType"].ERROR);
                }
            });
        }
    };
    /**
     * Update RPH Value
     * @param index
     */
    BookkeepingBasicComponent.prototype.updateRPHValue = function (index, value) {
        this.getFilterFieldArray().controls[index].get('rph').setValue(value);
        this.updateValueAndUnits(index);
    };
    /**
     * Update Inc in ff value
     * @param index
     */
    BookkeepingBasicComponent.prototype.updateIncFF = function (index, value) {
        var todaysDate = moment__WEBPACK_IMPORTED_MODULE_12__(new Date()).format('YYYY-MM-DD');
        if (value > 0) {
            this.getFilterFieldArray().controls[index].get('inc_in_ff').setValue(value);
            this.getFilterFieldArray().controls[index].get('fixed_fee').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]);
            this.getFilterFieldArray().controls[index].get('ff_start_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            this.getFilterFieldArray().controls[index].get('contract_signed_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            this.getFilterFieldArray().controls[index].get('contract_signed_date').updateValueAndValidity();
            this.getFilterFieldArray().controls[index].get('ff_start_date').updateValueAndValidity();
            this.getFilterFieldArray().controls[index].get('ff_start_date').setValue(todaysDate);
            if (this.getFilterFieldArray().controls[index].get('contract_signed_date').value) {
            }
            else {
                this.getFilterFieldArray().controls[index].get('contract_signed_date').setValue(todaysDate);
            }
            this.getFilterFieldArray().controls[index].get('fixed_fee').updateValueAndValidity();
            this.getFilterFieldArray().controls[index].get('inc_in_ff').updateValueAndValidity();
            this.updateValueAndUnits(index);
        }
        else {
            this.getFilterFieldArray().controls[index].get('inc_in_ff').setValue(value);
            this.getFilterFieldArray().controls[index].get('inc_in_ff').updateValueAndValidity();
            this.getFilterFieldArray().controls[index].get('fixed_fee').setValue(null);
            this.getFilterFieldArray().controls[index].get('fixed_fee').setValidators(null);
            this.getFilterFieldArray().controls[index].get('fixed_fee').updateValueAndValidity();
            this.getFilterFieldArray().controls[index].get('fixed_unit').setValue(null);
            this.getFilterFieldArray().controls[index].get('fixed_unit').updateValueAndValidity();
            this.getFilterFieldArray().controls[index].get('ff_start_date').setValue(null);
            this.getFilterFieldArray().controls[index].get('ff_start_date').setValidators(null);
            this.getFilterFieldArray().controls[index].get('ff_start_date').updateValueAndValidity();
            if (this.getFilterFieldArray().controls[index].get('contract_signed_date').value) {
            }
            else {
                this.getFilterFieldArray().controls[index].get('contract_signed_date').setValue(null);
            }
            this.getFilterFieldArray().controls[index].get('contract_signed_date').setValidators(null);
            this.getFilterFieldArray().controls[index].get('contract_signed_date').updateValueAndValidity();
            // console.log(this.getFilterFieldArray().controls[index]);
            this.updateValueAndUnits(index);
        }
    };
    /**
     * Update FF Amount
     * @param index
     */
    BookkeepingBasicComponent.prototype.updateFFAmount = function (index, value) {
        this.getFilterFieldArray().controls[index].get('fixed_fee').setValue(value);
        this.updateValueAndUnits(index);
    };
    /**
     * Update FF Start Date
     * @param index
     */
    BookkeepingBasicComponent.prototype.updateFFStartDate = function (index, value) {
        value = (value && value != null) ? moment__WEBPACK_IMPORTED_MODULE_12__(value).format('YYYY-MM-DD') : null;
        this.getFilterFieldArray().controls[index].get('ff_start_date').setValue(value);
    };
    /**
     *
     * @param index
     * @param value
     */
    BookkeepingBasicComponent.prototype.updateContractSignedDate = function (index, value) {
        var valueData = (value && value !== null) ? moment__WEBPACK_IMPORTED_MODULE_12__(value).format('YYYY-MM-DD') : null;
        this.getFilterFieldArray().controls[index].get('contract_signed_date').setValue(valueData);
    };
    /**
     * Change & Update Value Unit
     * @param index
     */
    BookkeepingBasicComponent.prototype.updateValueAndUnits = function (index) {
        var inc_in_ff = this.getFilterFieldArray().controls[index].get('inc_in_ff').value;
        if (inc_in_ff > 0) {
            var ff_rph = this.getFilterFieldArray().controls[index].get('rph').value;
            var fixed_fee = this.getFilterFieldArray().controls[index].get('fixed_fee').value;
            var fixed_unit = 0;
            fixed_unit = fixed_fee / ff_rph * _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].UNIT_RATIO;
            this.getFilterFieldArray().controls[index].get('fixed_unit').setValue(this._noCommaPipe.transform(this._decimalPipe.transform(fixed_unit, '1.0-0')));
        }
        this.updateTotalAmountAndUnits();
    };
    /**
     * Update Total Amount And Units
     */
    BookkeepingBasicComponent.prototype.updateTotalAmountAndUnits = function () {
        var itemOfArray = this.getFilterFieldArray().controls;
        var totalAmount = 0;
        var totalUnit = 0;
        if (itemOfArray.length) {
            itemOfArray.forEach(function (item) {
                totalUnit += Number(item.value['fixed_unit']);
                totalAmount += Number(item.value['fixed_fee']);
            });
        }
        this.bookkeepingData['fixed_total_amount'] = this._noCommaPipe.transform(this._decimalPipe.transform(totalAmount, '1.2-2'));
        this.bookkeepingData['fixed_total_unit'] = this._noCommaPipe.transform(totalUnit);
    };
    /**
     * Get Frequency List
     */
    BookkeepingBasicComponent.prototype.getFrequency = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].FREQUENCY, {}, {}).subscribe(function (response) {
            if (response) {
                _this.frequencyList = response.payload.data;
            }
        });
    };
    /**
     * On Change Frequency Get Recurring List
     * @param service_id
     * @param inc_in_ff
     * @param frequency_id
     */
    BookkeepingBasicComponent.prototype.changeGetRecurringList = function (service_id, inc_in_ff, frequency_id) {
        var _this = this;
        this.recurringList = [];
        var params = {};
        params['service_id'] = service_id;
        params['inc_in_ff'] = inc_in_ff;
        params['frequency_id'] = frequency_id;
        if (params) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].BILLING_RECURRING_LIST, params, {}).subscribe(function (response) {
                _this.recurringList = response.payload.data;
            });
        }
    };
    /**
     * On Submit Bookkeeping Info
     * @param form
     */
    BookkeepingBasicComponent.prototype.onSubmitBookkeepingInfo = function (form) {
        var _this = this;
        if (form.valid) {
            // console.log(form.value);
            var ServiceRPH = form.value['service_rph'];
            // console.log(ServiceRPH);
            if (ServiceRPH.length) {
                ServiceRPH.map(function (item) {
                    item['ff_start_date'] = item['ff_start_date'] !== null ? moment__WEBPACK_IMPORTED_MODULE_12__(item['ff_start_date']).format('YYYY-MM-DD') : null;
                    item['contract_signed_date'] = item['contract_signed_date'] !== null ? moment__WEBPACK_IMPORTED_MODULE_12__(item['contract_signed_date']).format('YYYY-MM-DD') : null;
                });
                form.value['fixed_total_amount'] = this.bookkeepingData['fixed_total_amount'];
                form.value['fixed_total_unit'] = this.bookkeepingData['fixed_total_unit'];
                form.value['contract_signed_date'] = ServiceRPH[0]['contract_signed_date'] !== null ? moment__WEBPACK_IMPORTED_MODULE_12__(ServiceRPH[0]['contract_signed_date']).format('YYYY-MM-DD') : null;
                form.value['bk_in_ff'] = (ServiceRPH[0]['inc_in_ff'] > 0) ? ServiceRPH[0]['inc_in_ff'] : 0;
                form.value['ff_rph'] = ServiceRPH[0]['rph'];
                form.value['fixed_fee'] = ServiceRPH[0]['fixed_fee'];
                form.value['ff_start_date'] = ServiceRPH[0]['ff_start_date'] !== null ? moment__WEBPACK_IMPORTED_MODULE_12__(ServiceRPH[0]['ff_start_date']).format('YYYY-MM-DD') : null;
                form.value['service_rph'].splice(0, 1);
            }
            // Update Data
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].BILLING_BOOKKEEPING, this.billingInformation.entity_id, form.value).subscribe(function (response) {
                _this.onAddUpdate.emit(true);
                _this.getServiceBasicInfo();
            });
        }
        this.moveToSelectedTab("Sub Activity");
    };
    BookkeepingBasicComponent.prototype.moveToSelectedTab = function (tabName) {
        for (var i = 0; i < document.querySelectorAll('.mat-tab-label-content').length; i++) {
            if (document.querySelectorAll('.mat-tab-label-content')[i].innerText === tabName) {
                document.querySelectorAll('.mat-tab-label')[i].click();
            }
        }
    };
    /**
     * Get Service Wise Default RPH
     * @param service_id
     */
    BookkeepingBasicComponent.prototype.getServiceRPH = function (service_id) {
        var val = this.servicesRPHList.filter(function (elem) { return elem.key === Number(service_id); });
        return (val.length) ? this._noCommaPipe.transform(this._decimalPipe.transform(val[0].label, '1.2-2')) : this._noCommaPipe.transform(this._decimalPipe.transform(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].DEFAULT_RPH, '1.2-2'));
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    BookkeepingBasicComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Frequency List
     * @param {number} id
     * @returns {string}
     */
    BookkeepingBasicComponent.prototype.getFrequencyName = function (id) {
        var val = this.frequencyList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].frequency_name : '';
    };
    /**
     * Display Get Recurring List
     * @param {number} id
     * @returns {string}
     */
    BookkeepingBasicComponent.prototype.getRecurringName = function (id) {
        var val = this.recurringList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].recurring_name : '';
    };
    /**
     * View Bokkeeping Fees Structure History
     * @param {Contact} contact
     */
    BookkeepingBasicComponent.prototype.viewFeesStructureInformationHistory = function (billingId) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].BILLING_HISTORY_FEES + '/' + billingId,
        };
        this._sharedService.setHistoryURL(value);
        var dialogRef = this.dialog.open(_utility_components_common_history_dialog_common_history_dialog_component__WEBPACK_IMPORTED_MODULE_13__["CommonHistoryDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (valueData) {
            var valueItem = {
                url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].BILLING_SERVICES_HISTORY + '/' + _this.billingInformation.entity_id,
                params: { 'service_id': _this.serviceInfo['service_id'] },
            };
            _this._sharedService.setHistoryURL(valueItem);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_5__["BillingBasic"])
    ], BookkeepingBasicComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookkeepingBasicComponent.prototype, "serviceInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookkeepingBasicComponent.prototype, "isEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BookkeepingBasicComponent.prototype, "onAddUpdate", void 0);
    BookkeepingBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookkeeping-basic',
            template: __webpack_require__(/*! ./bookkeeping-basic.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-basic/bookkeeping-basic.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_9__["NoCommaPipe"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"],
            _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_9__["NoCommaPipe"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_10__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"]])
    ], BookkeepingBasicComponent);
    return BookkeepingBasicComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-services.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-services.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-tab-group class=\"demo-tab-group contact-tab\" (selectedTabChange)=\"onSelectTab($event)\">\r\n    <mat-tab label=\"Basic\">\r\n      <div>\r\n        <app-bookkeeping-basic *ngIf=\"isActiveTab === 0\" [billingInformation]=\"billingInformation\"\r\n                               [serviceInfo]=\"serviceInfo\" [isEdit]=\"isEdit\"\r\n                               (onAddUpdate)=\"getBookkeepingDataInfo();\"></app-bookkeeping-basic>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Sub Activity\" *ngIf=\"isUpdated===1\">\r\n      <div>\r\n        <app-bookkeeping-sub-activity *ngIf=\"isActiveTab === 1\" [isEdit]=\"isEdit\"\r\n                                      [billingInformation]=\"billingInformation\"\r\n                                      [serviceInfo]=\"serviceInfo\"></app-bookkeeping-sub-activity>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-services.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-services.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: BookkeepingServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookkeepingServicesComponent", function() { return BookkeepingServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookkeepingServicesComponent = /** @class */ (function () {
    function BookkeepingServicesComponent(_commonCrudService) {
        this._commonCrudService = _commonCrudService;
        this.isActiveTab = 0;
        this.isUpdated = 0;
    }
    BookkeepingServicesComponent.prototype.ngOnInit = function () {
        this.getBookkeepingDataInfo();
    };
    BookkeepingServicesComponent.prototype.getBookkeepingDataInfo = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_3__["AdminAPI"].BILLING_BOOKKEEPING, this.billingInformation.entity_id, {}).subscribe(function (response) {
            _this.bookkeepingData = response.payload.data;
            _this.isUpdated = _this.bookkeepingData.is_updated;
        });
    };
    /**
     *  On Tab Change
     */
    BookkeepingServicesComponent.prototype.onSelectTab = function (tabChangeEvent) {
        this.isActiveTab = tabChangeEvent['index'];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_1__["BillingBasic"])
    ], BookkeepingServicesComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookkeepingServicesComponent.prototype, "serviceInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookkeepingServicesComponent.prototype, "isEdit", void 0);
    BookkeepingServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookkeeping-services',
            template: __webpack_require__(/*! ./bookkeeping-services.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-services.component.html")
        }),
        __metadata("design:paramtypes", [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__["CommonCrudService"]])
    ], BookkeepingServicesComponent);
    return BookkeepingServicesComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-services.module.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-services.module.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: BookkeepingServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookkeepingServicesModule", function() { return BookkeepingServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bookkeeping_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookkeeping-services.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-services.component.ts");
/* harmony import */ var _bookkeeping_basic_bookkeeping_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookkeeping-basic/bookkeeping-basic.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-basic/bookkeeping-basic.component.ts");
/* harmony import */ var _bookkeeping_sub_activity_bookkeeping_sub_activity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookkeeping-sub-activity/bookkeeping-sub-activity.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-sub-activity/bookkeeping-sub-activity.component.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BookkeepingServicesModule = /** @class */ (function () {
    function BookkeepingServicesModule() {
    }
    BookkeepingServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"]
            ],
            declarations: [_bookkeeping_services_component__WEBPACK_IMPORTED_MODULE_2__["BookkeepingServicesComponent"], _bookkeeping_basic_bookkeeping_basic_component__WEBPACK_IMPORTED_MODULE_3__["BookkeepingBasicComponent"], _bookkeeping_sub_activity_bookkeeping_sub_activity_component__WEBPACK_IMPORTED_MODULE_4__["BookkeepingSubActivityComponent"]],
            exports: [_bookkeeping_services_component__WEBPACK_IMPORTED_MODULE_2__["BookkeepingServicesComponent"]]
        })
    ], BookkeepingServicesModule);
    return BookkeepingServicesModule;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-sub-activity/bookkeeping-sub-activity.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-sub-activity/bookkeeping-sub-activity.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bookkeeping-basic-container\" *ngIf=\"isEdit\">\r\n  <form [formGroup]=\"formSubactvitiy\" (submit)=\"onSumitSubActivity(formSubactvitiy)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index;\">\r\n          <span class=\"panel-title ML-0\">{{filterGroup.value['sectionTitle']}}</span>\r\n          <div class=\"table-container\">\r\n            <div class=\"table-block\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                  <th *ngFor=\"let subactivityColumn of filterGroup.value['sectionColumn'] let c= index\"\r\n                      width=\"{{ c=== 0 ? '5%' : ((c === 1) ? '50%' : 'auto')}}\">\r\n                    {{subactivityColumn['label']}}\r\n                  </th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                <tr *ngFor=\"let subactivityItem of getFilterFieldArrayData(i).controls; let k = index;\">\r\n                  <td>{{k+1}}</td>\r\n                  <td [attr.colspan]=\"subactivityItem.value['colSpan'] > 0 ? subactivityItem.value['colSpan'] : null\">\r\n                    {{subactivityItem.value['subactivity']}} <br><br>\r\n                    <span\r\n                      *ngFor=\"let subactivityItemField of getFilterFieldArrayDataFields(i,k).controls; let l = index;\">\r\n                    {{subactivityItemField.value['label']}}\r\n                      <input type=\"number\" value=\"{{subactivityItem.value[subactivityItemField.value['key']]}}\"\r\n                             (change)=\"onChangeUpdateDataValues(subactivityItemField.value['key'],2,i,k,subactivityItem.value['subactivity_code'],$event.target.value)\">\r\n                  </span>\r\n                  </td>\r\n                  <td *ngIf=\"subactivityItem.value['is_inc_in_ff']\">\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"subactivityItem.value['is_inc_in_ff']\">\r\n                      <mat-select placeholder=\"No\" [value]=\"subactivityItem.value['inc_in_ff']\"\r\n                                  (selectionChange)=\"hideShowFields(i,k,subactivityItem.value['subactivity_code'],$event.value);onChangeUpdateDataValues('inc_in_ff',1,i,k,subactivityItem.value['subactivity_code'],$event.value)\">\r\n                        <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                          {{ yesNo?.label}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td *ngIf=\"subactivityItem.value['is_frequency']\">\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"subactivityItem.value['is_frequency']\">\r\n                      <mat-select placeholder=\"Select Frequency\" [value]=\"subactivityItem.value['frequency_id']\"\r\n                                  (selectionChange)=\"onChangeUpdateDataValues('frequency_id',1,i,k,subactivityItem.value['subactivity_code'],$event.value)\">\r\n                        <mat-option *ngFor=\"let frequency of frequencyList\" [value]=\"frequency?.id\">\r\n                          {{ frequency?.frequency_name}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td *ngIf=\"subactivityItem.value['is_fixed_fee']\">\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"subactivityItem.value['is_fixed_fee']\">\r\n                      <input type=\"number\" matInput [value]=\"subactivityItem.value['fixed_fee']\"\r\n                             (change)=\"onChangeUpdateDataValues('fixed_fee',1,i,k,subactivityItem.value['subactivity_code'],$event.target.value)\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td *ngIf=\"subactivityItem.value['is_price']\">\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"subactivityItem.value['is_price']\">\r\n                      <input matInput [value]=\"subactivityItem.value['price']\" type=\"number\"\r\n                             (change)=\"onChangeUpdateDataValues('price',1,i,k,subactivityItem.value['subactivity_code'],$event.target.value)\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12 text-right MTB-20\">\r\n        <button type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n        <!--[disabled]=\"formSubactvitiy.invalid\"-->\r\n        <button type=\"submit\" class=\"btn-primary\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"bookkeeping-basic-container\" *ngIf=\"!isEdit\">\r\n  <form [formGroup]=\"formSubactvitiy\" (submit)=\"onSumitSubActivity(formSubactvitiy)\">\r\n    <div class=\"row MB-20\">\r\n\r\n      <div class=\"col-md-12\">\r\n        <div *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index;\">\r\n          <span class=\"panel-title ML-0\">{{filterGroup.value['sectionTitle']}}</span>\r\n          <div class=\"table-container\">\r\n            <div class=\"table-block\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                  <th *ngFor=\"let subactivityColumn of filterGroup.value['sectionColumn']; let c= index\"\r\n                      width=\"{{ c=== 0 ? '5%' : ((c === 1) ? '55%' : 'auto')}}\">\r\n                    {{subactivityColumn['label']}}\r\n                  </th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                <tr *ngFor=\"let subactivityItem of getFilterFieldArrayData(i).controls; let k = index;\">\r\n                  <td>{{k+1}}</td>\r\n                  <td [attr.colspan]=\"subactivityItem.value['colSpan'] > 0 ? subactivityItem.value['colSpan'] : null\">\r\n                    {{subactivityItem.value['subactivity']}} <br><br>\r\n                    <span\r\n                      *ngFor=\"let subactivityItemField of getFilterFieldArrayDataFields(i,k).controls; let l = index;\">\r\n                    {{subactivityItemField.value['label']}} : {{subactivityItem.value[subactivityItemField.value['key']]}}\r\n                  </span>\r\n                  </td>\r\n                  <td *ngIf=\"subactivityItem.value['is_inc_in_ff']\">\r\n                    {{getYesNoStatus(subactivityItem.value['inc_in_ff'])}}\r\n                  </td>\r\n                  <td *ngIf=\"subactivityItem.value['is_frequency']\">\r\n                    {{getFrequencyName(subactivityItem.value['frequency_id'])}}\r\n                  </td>\r\n                  <td *ngIf=\"subactivityItem.value['is_fixed_fee']\"> {{subactivityItem.value['fixed_fee']}}</td>\r\n                  <td *ngIf=\"subactivityItem.value['is_price']\">{{subactivityItem.value['price']}}</td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-sub-activity/bookkeeping-sub-activity.component.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-sub-activity/bookkeeping-sub-activity.component.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: BookkeepingSubActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookkeepingSubActivityComponent", function() { return BookkeepingSubActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/pipe/noComma.pipe */ "./src/utility/pipe/noComma.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_billing_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../utility/constants/billing-constant */ "./src/utility/constants/billing-constant.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var BookkeepingSubActivityComponent = /** @class */ (function () {
    function BookkeepingSubActivityComponent(_decimalPipe, _noCommaPipe, _router, _fb, _commonCrudService, _sharedService) {
        this._decimalPipe = _decimalPipe;
        this._noCommaPipe = _noCommaPipe;
        this._router = _router;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        // Data Variables
        this.bookkeepingSubActivityValues = [];
        this.billingInfoConstant = _utility_constants_billing_constant__WEBPACK_IMPORTED_MODULE_9__["subActivityData"];
        this.frequencyList = [];
        this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["yesNo"];
        this.billingSubActivityColumn = _utility_constants_billing_constant__WEBPACK_IMPORTED_MODULE_9__["subActivityColumn"];
        this.billingSubActivityColSpan = _utility_constants_billing_constant__WEBPACK_IMPORTED_MODULE_9__["subActivityDataColSpan"];
    }
    BookkeepingSubActivityComponent.prototype.ngOnInit = function () {
        this.getFrequency();
        this.initializationMethod();
        this.createForm();
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BILLING_SERVICES_SUBACTIVITY_HISTORY + '/' + this.billingInformation.entity_id,
            params: { 'service_id': 1 },
        };
        this._sharedService.setHistoryURL(value);
    };
    /**
     * Get Frequency
     */
    BookkeepingSubActivityComponent.prototype.getFrequency = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].FREQUENCY, {}, {}).subscribe(function (response) {
            _this.frequencyList = response.payload.data;
        });
    };
    /**
     * Initialization Methods
     */
    BookkeepingSubActivityComponent.prototype.initializationMethod = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BILLING_SUBACTIVITY, this.billingInformation.entity_id, { 'service_id': 1 }).subscribe(function (response) {
            var itemData = response.payload.data;
            var itemDataValues = Object.entries(itemData);
            if (itemDataValues) {
                var i_1 = 0;
                itemDataValues.forEach(function (key) {
                    _this.bookkeepingSubActivityValues[i_1] = [];
                    _this.bookkeepingSubActivityValues[i_1]['label'] = key[0];
                    _this.bookkeepingSubActivityValues[i_1]['column'] = (_this.billingSubActivityColumn[key[0]]) ? _this.billingSubActivityColumn[key[0]] : [];
                    _this.bookkeepingSubActivityValues[i_1]['data'] = [];
                    var subData = Object.values(key[1]);
                    subData.map(function (subKey) {
                        var displayField = _this.getSubactivityField(subKey['subactivity_code']);
                        if (displayField) {
                            subKey['displayField'] = displayField;
                        }
                        subKey['colSpan'] = (_this.billingSubActivityColSpan[subKey['subactivity_code']]) ? _this.billingSubActivityColSpan[subKey['subactivity_code']] : 0;
                    });
                    _this.bookkeepingSubActivityValues[i_1]['data'] = subData;
                    _this.getFilterFieldArray().push(_this.initSection(_this.bookkeepingSubActivityValues[i_1]));
                    var j = 0;
                    _this.bookkeepingSubActivityValues[i_1]['data'].forEach(function (keyData) {
                        _this.getFilterFieldArrayData(i_1).push(_this.initSubActivity(keyData));
                        _this.hideShowFields(i_1, j, keyData['subactivity_code'], keyData['inc_in_ff']);
                        _this.onChangeUpdateDataValues('inc_in_ff', 1, i_1, j, keyData['subactivity_code'], keyData['inc_in_ff']);
                        j = j + 1;
                    });
                    i_1 = i_1 + 1;
                });
            }
            // console.log(this.formSubactvitiy.get('sections'));
        });
    };
    /**
     * Hide Show Field Values
     * @param parentActivity
     * @param childActivity
     * @param categoryCode
     * @param value
     */
    BookkeepingSubActivityComponent.prototype.hideShowFields = function (parentActivity, childActivity, categoryCode, value) {
        var _this = this;
        // console.log(parentActivity, childActivity, categoryCode, value);
        var DataFields = this.getSubactivityField(categoryCode);
        // console.log(DataFields);
        if (DataFields) {
            DataFields.forEach(function (key) {
                // console.log(key);
                var itemControls = _this.getFilterFieldArrayDataFields(parentActivity, childActivity);
                if (categoryCode === 709) {
                    if (itemControls && !value) {
                        itemControls.push(_this.initDisplayField(key));
                    }
                    else {
                        itemControls.removeAt(key);
                    }
                }
                else {
                    if (itemControls && value) {
                        itemControls.push(_this.initDisplayField(key));
                    }
                    else {
                        itemControls.removeAt(key);
                    }
                }
            });
        }
        // console.log(this.formSubactvitiy.get('sections'));
    };
    /**
     * Create Form
     */
    BookkeepingSubActivityComponent.prototype.createForm = function () {
        this.formSubactvitiy = this._fb.group({
            sections: this._fb.array([]),
        });
    };
    /**
     * Create Subactivity Group Form
     */
    BookkeepingSubActivityComponent.prototype.initSection = function (item) {
        return this._fb.group({
            sectionTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['label'] : ''),
            sectionColumn: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['column'] : ''),
            sectionData: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([])
        });
    };
    /**
     * On Show Display Category Item
     * @param item
     */
    BookkeepingSubActivityComponent.prototype.initSubActivity = function (item) {
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['id'] : ''),
            subactivity_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['subactivity_code'] : ''),
            subactivity: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['subactivity'] : ''),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['frequency_id'] : 0),
            inc_in_ff: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['inc_in_ff'] : 0),
            fixed_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['fixed_fee'] : 0),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['price'] : 0),
            is_inc_in_ff: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['is_inc_in_ff'] : 0),
            is_frequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['is_frequency'] : 0),
            is_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['is_price'] : 0),
            is_fixed_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['is_fixed_fee'] : 0),
            is_no_of_employee: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['is_no_of_employee'] : 0),
            colSpan: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['colSpan'] : 0),
            fixed_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['fixed_value'] : 0),
            no_of_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['no_of_value'] : 0),
            displayField: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([])
        });
    };
    /**
     * On Show Display Field with Label Help Text and Value
     * @param item
     */
    BookkeepingSubActivityComponent.prototype.initDisplayField = function (item) {
        return this._fb.group({
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['label'] : ''),
            help: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['help'] : ''),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['key'] : ''),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['value'] : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_11__["CommonRegex"].NUMERIC_REGEXP)]),
        });
    };
    /**
     * Get Filter Field Array
     */
    BookkeepingSubActivityComponent.prototype.getFilterFieldArray = function () {
        return this.formSubactvitiy.get('sections');
    };
    /**
     * Get Filter Field Array
     */
    BookkeepingSubActivityComponent.prototype.getFilterFieldArrayData = function (i) {
        return this.getFilterFieldArray().controls[i].get('sectionData');
    };
    /**
     * Get Filter Field Array
     */
    BookkeepingSubActivityComponent.prototype.getFilterFieldArrayDataFields = function (i, j) {
        return this.getFilterFieldArrayData(i).controls[j].get('displayField');
    };
    /**
     * Get Subactivity Field
     * @param index
     */
    BookkeepingSubActivityComponent.prototype.getSubactivityField = function (index) {
        var ItemData = (this.billingInfoConstant[index]) ? this.billingInfoConstant[index] : null;
        return ItemData;
    };
    /**
     * @param index
     * @param value
     */
    BookkeepingSubActivityComponent.prototype.onChangeUpdateDataValues = function (type, subType, index, subIndex, subCategoryCode, value) {
        if (type !== '' && subType === 1) {
            this.getFilterFieldArrayData(index).controls[subIndex].get(type).setValue(value);
            if ((subCategoryCode === 2001 || subCategoryCode === 2101) && value === 1 && type === 'inc_in_ff') {
                this.getFilterFieldArrayData(index).controls[subIndex].get('is_fixed_fee').setValue(0);
                if (subCategoryCode === 2001) {
                    this.getFilterFieldArrayData(index).controls[subIndex].get('fixed_fee').setValue(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["BASE"].BAS_DEFAULT_RPH.toString());
                }
                if (subCategoryCode === 2101) {
                    this.getFilterFieldArrayData(index).controls[subIndex].get('fixed_fee').setValue(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["BASE"].IAS_DEFAULT_RPH.toString());
                }
            }
            else if ((subCategoryCode === 2001 || subCategoryCode === 2101) && value === 0 && type === 'inc_in_ff') {
                this.getFilterFieldArrayData(index).controls[subIndex].get('is_fixed_fee').setValue(1);
            }
            if ((subCategoryCode === 9) && value === 1 && type === 'inc_in_ff') {
                this.getFilterFieldArrayData(index).controls[subIndex].get('is_price').setValue(0);
                this.getFilterFieldArrayData(index).controls[subIndex].get('price').setValue('0.00');
            }
            else if ((subCategoryCode === 9) && value === 0 && type === 'inc_in_ff') {
                this.getFilterFieldArrayData(index).controls[subIndex].get('is_price').setValue(1);
            }
        }
        else if (type !== '' && subType === 2) {
            this.getFilterFieldArrayData(index).controls[subIndex].get(type).setValue(value);
        }
    };
    /**
     * On Submit SubActivity
     * @param form
     */
    BookkeepingSubActivityComponent.prototype.onSumitSubActivity = function (form) {
        var _this = this;
        var FormData = form.value['sections'];
        var itemData = {};
        itemData['subactivity'] = [];
        itemData['service_id'] = 1;
        if (FormData.length) {
            FormData.forEach(function (item) {
                // console.log(item);
                var sectionData = item['sectionData'];
                if (sectionData.length) {
                    sectionData.forEach(function (subItem) {
                        delete subItem['displayField'];
                        delete subItem['colSpan'];
                        delete subItem['is_price'];
                        delete subItem['subactivity'];
                        delete subItem['is_fixed_fee'];
                        delete subItem['is_frequency'];
                        delete subItem['is_inc_in_ff'];
                        delete subItem['is_no_of_employee'];
                        itemData['subactivity'].push(subItem);
                    });
                }
            });
            // console.log(itemData['colSpan']);
            // Billing Subactivity update
            if (itemData['subactivity']) {
                this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BILLING_SUBACTIVITY, this.billingInformation.entity_id, itemData).subscribe(function (response) {
                    if (response) {
                        _this.bookkeepingSubActivityValues = [];
                        _this.initializationMethod();
                        _this.createForm();
                    }
                });
            }
        }
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    BookkeepingSubActivityComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Frequency List
     * @param {number} id
     * @returns {string}
     */
    BookkeepingSubActivityComponent.prototype.getFrequencyName = function (id) {
        var val = this.frequencyList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].frequency_name : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_1__["BillingBasic"])
    ], BookkeepingSubActivityComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookkeepingSubActivityComponent.prototype, "serviceInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookkeepingSubActivityComponent.prototype, "isEdit", void 0);
    BookkeepingSubActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookkeeping-sub-activity',
            template: __webpack_require__(/*! ./bookkeeping-sub-activity.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/bookkeeping-services/bookkeeping-sub-activity/bookkeeping-sub-activity.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_3__["NoCommaPipe"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_3__["NoCommaPipe"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], BookkeepingSubActivityComponent);
    return BookkeepingSubActivityComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-basic/hosting-basic.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-basic/hosting-basic.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bookkeeping-basic-container\" *ngIf=\"isEdit\">\r\n  <span class=\"panel-title\">Hosting Basic</span>\r\n  <form [formGroup]=\"hostingbasicForm\" (submit)=\"onSubmitHostingInfo(hostingbasicForm)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 MB-20\">\r\n        <label class=\"MR-20\">Setup cost applicable ?</label>\r\n        <mat-radio-group formControlName=\"is_setup_cost\" (change)=\"changeSetupCostType($event.value)\">\r\n          <mat-radio-button *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n            {{ yesNo?.label}}\r\n          </mat-radio-button>\r\n        </mat-radio-group>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(hostingbasicForm.get('is_setup_cost'))\"\r\n                          [errMsg]=\"validationMsg.SETUP_COST_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\" *ngIf=\"isSetupCost\">\r\n        <mat-form-field>\r\n          <input formControlName=\"setup_cost\" matInput placeholder=\"Setup Cost\" required/>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(hostingbasicForm.get('setup_cost'))\"\r\n                          [errMsg]=\"validationMsg.SETUP_COST_REQUIRED\"></app-validation>\r\n        </div>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isValidField(hostingbasicForm.get('setup_cost'))\"\r\n                          [errMsg]=\"validationMsg.SETUP_COST_VALID\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <input formControlName=\"basic_rate\" matInput placeholder=\"Basic Fees\" required/>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(hostingbasicForm.get('basic_rate'))\"\r\n                          [errMsg]=\"validationMsg.BASIC_FEES_REQUIRED\"></app-validation>\r\n        </div>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isValidField(hostingbasicForm.get('basic_rate'))\"\r\n                          [errMsg]=\"validationMsg.BASIC_FEES_VALID\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <input formControlName=\"permium_rate\" matInput placeholder=\"Premium Fees\" required/>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(hostingbasicForm.get('permium_rate'))\"\r\n                          [errMsg]=\"validationMsg.PREMIUM_FEES_REQUIRED\"></app-validation>\r\n        </div>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isValidField(hostingbasicForm.get('permium_rate'))\"\r\n                          [errMsg]=\"validationMsg.PREMIUM_FEES_VALID\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"recurring_id\" placeholder=\"Recurring\"\r\n                      (selectionChange)=\"changeAutoInvoice($event.value)\">\r\n            <mat-option value=\"\">Please Select</mat-option>\r\n            <mat-option *ngFor=\"let recurring of recurringList\" [value]=\"recurring?.id\">\r\n              {{ recurring?.recurring_name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"auto_invoice\" placeholder=\"Auto invoice\" required\r\n                      (selectionChange)=\"changeAutoInvoiceType($event.value)\">\r\n            <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n              {{ yesNo?.label}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(hostingbasicForm.get('auto_invoice'))\"\r\n                          [errMsg]=\"validationMsg.AUTO_INVOICE_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-8\">\r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"Hosting Notes\" formControlName=\"notes\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 text-right MTB-20\">\r\n        <button type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n        <button [disabled]=\"hostingbasicForm.invalid\" type=\"submit\" class=\"btn-primary\">Save</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"view-billing-info-container\" *ngIf=\"!isEdit\">\r\n  <div class=\"basic-details-border\">\r\n    <span class=\"panel-title\">Hosting Basic</span>\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 label-span-color\">\r\n          <div>\r\n            <label>Setup cost applicable</label>\r\n            <span>{{getYesNoStatus(hostingData?.is_setup_cost)}}</span>\r\n          </div>\r\n          <div *ngIf=\"hostingData?.is_setup_cost === 1\">\r\n            <label>Setup Cost</label>\r\n            <span>{{hostingData?.setup_cost}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Basic Fee</label>\r\n            <span>{{hostingData?.basic_rate}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Auto Invoice</label>\r\n            <span>{{getYesNoStatus(hostingData?.auto_invoice)}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 label-span-color\">\r\n          <div>\r\n            <label>Premium Fee</label>\r\n            <span>{{hostingData?.permium_rate}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Recurring</label>\r\n            <span>{{getRecurringName(hostingData?.recurring_id)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Note</label>\r\n            <span>{{hostingData?.notes}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-basic/hosting-basic.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-basic/hosting-basic.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: HostingBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostingBasicComponent", function() { return HostingBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/pipe/noComma.pipe */ "./src/utility/pipe/noComma.pipe.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HostingBasicComponent = /** @class */ (function (_super) {
    __extends(HostingBasicComponent, _super);
    function HostingBasicComponent(_router, _fb, _decimalPipe, _noCommaPipe, _commonCrudService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this._decimalPipe = _decimalPipe;
        _this._noCommaPipe = _noCommaPipe;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this.onAddUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_1__["ValidationConstantMessage"]();
        _this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["yesNo"];
        _this.recurringList = [];
        _this.isSetupCost = false;
        _this.service_id = 0;
        return _this;
    }
    HostingBasicComponent.prototype.ngOnInit = function () {
        this.service_id = this.serviceInfo['service_id'];
        this.getServiceBasicInfo();
        this.createHostingbasicForm();
        this.getRecurringList(this.service_id, 1, 3);
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_SERVICES_HISTORY + '/' + this.billingInformation.entity_id,
            params: { 'service_id': this.serviceInfo['service_id'] },
        };
        this._sharedService.setHistoryURL(value);
    };
    /**
     * On Change Frequency Get Recurring List
     * @param service_id
     * @param inc_in_ff
     * @param frequency_id
     */
    HostingBasicComponent.prototype.getRecurringList = function (service_id, inc_in_ff, frequency_id) {
        var _this = this;
        if (service_id === void 0) { service_id = this.service_id; }
        if (inc_in_ff === void 0) { inc_in_ff = 1; }
        if (frequency_id === void 0) { frequency_id = 1; }
        this.recurringList = [];
        var params = {};
        params['service_id'] = service_id;
        params['inc_in_ff'] = inc_in_ff;
        params['frequency_id'] = frequency_id;
        if (params) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_RECURRING_LIST, params, {}).subscribe(function (response) {
                _this.recurringList = response.payload.data;
            });
        }
    };
    /**
     * Get Service Basic Information
     */
    HostingBasicComponent.prototype.getServiceBasicInfo = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_HOSTING, this.billingInformation.entity_id, {}).subscribe(function (response) {
            _this.hostingData = response.payload.data;
            _this.createHostingbasicForm();
        });
    };
    /**
     * Change Audit Fees Type Hide show field
     * @param value
     */
    HostingBasicComponent.prototype.changeSetupCostType = function (value) {
        if (value > 0) {
            this.hostingbasicForm.get('setup_cost').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]);
            this.hostingbasicForm.get('setup_cost').updateValueAndValidity();
            this.isSetupCost = true;
        }
        else {
            this.hostingbasicForm.get('setup_cost').setValue(null);
            this.hostingbasicForm.get('setup_cost').setValidators(null);
            this.hostingbasicForm.get('setup_cost').updateValueAndValidity();
            this.isSetupCost = false;
        }
    };
    /**
     * Change Auto Invoice Status
     * @param recurring_id
     */
    HostingBasicComponent.prototype.changeAutoInvoice = function (recurring_id) {
        if (recurring_id === '') {
            this.hostingbasicForm.get('auto_invoice').setValue(null);
            this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["ToastType"].ERROR);
        }
    };
    /**
     * Change Auto Invoice Status
     * @param recurring_id
     */
    HostingBasicComponent.prototype.changeAutoInvoiceType = function (value) {
        var _this = this;
        if (value) {
            var recurring_id = this.hostingbasicForm.get('recurring_id').value;
            if (recurring_id === '') {
                this.hostingbasicForm.get('auto_invoice').setValue(null);
                this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["ToastType"].ERROR);
            }
            // this will check releated entity
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_BASIC_VIEW, this.billingInformation.entity_id).subscribe(function (response) {
                var DataItem = response.payload.data[_this.billingInformation.entity_id];
                // console.log( DataItem);
                if (DataItem['is_related'] === 1 || DataItem['to_email'] === '' || DataItem['contact_person'] === '') {
                    _this.hostingbasicForm.get('auto_invoice').setValue(null);
                    _this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RELATED, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["ToastType"].ERROR);
                }
            });
        }
    };
    /**
     * Create Bookkeping basic form
     */
    HostingBasicComponent.prototype.createHostingbasicForm = function () {
        this.hostingbasicForm = this._fb.group({
            is_setup_cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.hostingData) ? this.hostingData.is_setup_cost : null),
            setup_cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.hostingData) ? this.hostingData.setup_cost : null),
            basic_rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.hostingData) ? this.hostingData.basic_rate : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
            permium_rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.hostingData) ? this.hostingData.permium_rate : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
            recurring_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.hostingData) ? this.hostingData.recurring_id : null),
            auto_invoice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.hostingData) ? this.hostingData.auto_invoice : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.hostingData) ? this.hostingData.notes : null),
        });
        if (this.hostingData) {
            this.changeSetupCostType(this.hostingData.is_setup_cost);
        }
    };
    /**
     * On Submit SMSF Info
     * @param form
     */
    HostingBasicComponent.prototype.onSubmitHostingInfo = function (form) {
        var _this = this;
        if (form.valid) {
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_HOSTING, this.billingInformation.entity_id, form.value).subscribe(function (response) {
                _this.onAddUpdate.emit(true);
            });
        }
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    HostingBasicComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Recurring List
     * @param {number} id
     * @returns {string}
     */
    HostingBasicComponent.prototype.getRecurringName = function (id) {
        var val = this.recurringList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].recurring_name : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_10__["BillingBasic"])
    ], HostingBasicComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HostingBasicComponent.prototype, "serviceInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HostingBasicComponent.prototype, "isEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HostingBasicComponent.prototype, "onAddUpdate", void 0);
    HostingBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hosting-basic',
            template: __webpack_require__(/*! ./hosting-basic.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-basic/hosting-basic.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_7__["NoCommaPipe"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_7__["NoCommaPipe"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], HostingBasicComponent);
    return HostingBasicComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-services.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-services.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-tab-group class=\"demo-tab-group contact-tab\">\r\n    <mat-tab label=\"Basic\">\r\n      <div>\r\n        <app-hosting-basic [billingInformation]=\"billingInformation\" [isEdit]=\"isEdit\" [serviceInfo]=\"serviceInfo\"\r\n                           (onAddUpdate)=\"getHostingDataInfo();\"></app-hosting-basic>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"User List\" *ngIf=\"isUpdated\">\r\n      <div>\r\n        <app-hosting-user-list [billingInformation]=\"billingInformation\" [isEdit]=\"isEdit\"\r\n                               [serviceInfo]=\"serviceInfo\"></app-hosting-user-list>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-services.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-services.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2JpbGxpbmctaW5mb3JtYXRpb24vYmlsbGluZy1pbmZvLXNlcnZpY2VzL2hvc3Rpbmctc2VydmljZXMvaG9zdGluZy1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-services.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-services.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: HostingServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostingServicesComponent", function() { return HostingServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HostingServicesComponent = /** @class */ (function () {
    function HostingServicesComponent(_commonCrudService) {
        this._commonCrudService = _commonCrudService;
        this.isUpdated = 0;
    }
    HostingServicesComponent.prototype.ngOnInit = function () {
        this.getHostingDataInfo();
    };
    HostingServicesComponent.prototype.getHostingDataInfo = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].BILLING_HOSTING, this.billingInformation.entity_id, {}).subscribe(function (response) {
            _this.hostingData = response.payload.data;
            _this.isUpdated = _this.hostingData.is_updated;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_1__["BillingBasic"])
    ], HostingServicesComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HostingServicesComponent.prototype, "serviceInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HostingServicesComponent.prototype, "isEdit", void 0);
    HostingServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hosting-services',
            template: __webpack_require__(/*! ./hosting-services.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-services.component.html"),
            styles: [__webpack_require__(/*! ./hosting-services.component.scss */ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-services.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__["CommonCrudService"]])
    ], HostingServicesComponent);
    return HostingServicesComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-services.module.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-services.module.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: HostingServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostingServicesModule", function() { return HostingServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _hosting_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hosting-services.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-services.component.ts");
/* harmony import */ var _hosting_basic_hosting_basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hosting-basic/hosting-basic.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-basic/hosting-basic.component.ts");
/* harmony import */ var _hosting_user_list_hosting_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hosting-user-list/hosting-user-list.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/hosting-user-list.component.ts");
/* harmony import */ var _hosting_user_list_add_hosting_dialog_add_hosting_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hosting-user-list/add-hosting-dialog/add-hosting-dialog.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/add-hosting-dialog/add-hosting-dialog.component.ts");
/* harmony import */ var _hosting_user_list_hosting_user_list_history_hosting_user_list_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hosting-user-list/hosting-user-list-history/hosting-user-list-history.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/hosting-user-list-history/hosting-user-list-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HostingServicesModule = /** @class */ (function () {
    function HostingServicesModule() {
    }
    HostingServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__["UtilityModule"]
            ],
            declarations: [_hosting_services_component__WEBPACK_IMPORTED_MODULE_3__["HostingServicesComponent"], _hosting_basic_hosting_basic_component__WEBPACK_IMPORTED_MODULE_4__["HostingBasicComponent"], _hosting_user_list_hosting_user_list_component__WEBPACK_IMPORTED_MODULE_5__["HostingUserListComponent"], _hosting_user_list_add_hosting_dialog_add_hosting_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddHostingDialogComponent"], _hosting_user_list_hosting_user_list_history_hosting_user_list_history_component__WEBPACK_IMPORTED_MODULE_7__["HostingUserListHistoryComponent"]],
            exports: [_hosting_services_component__WEBPACK_IMPORTED_MODULE_3__["HostingServicesComponent"]],
            entryComponents: [_hosting_user_list_add_hosting_dialog_add_hosting_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddHostingDialogComponent"], _hosting_user_list_hosting_user_list_history_hosting_user_list_history_component__WEBPACK_IMPORTED_MODULE_7__["HostingUserListHistoryComponent"]]
        })
    ], HostingServicesModule);
    return HostingServicesModule;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/add-hosting-dialog/add-hosting-dialog.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/add-hosting-dialog/add-hosting-dialog.component.html ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Sub Client List dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{(hostingUser) ? 'EDIT' : 'ADD'}} HOSTING USER</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n  <form [formGroup]=\"hostingAddUserForm\" (submit)=\"onHostingUserSubmit(hostingAddUserForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <input formControlName=\"username\" matInput placeholder=\"Username\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(hostingAddUserForm.get('username'))\"\r\n                            [errMsg]=\"validationMsg.USERNAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-20\">\r\n          <label class=\"MR-20\">Type :</label>\r\n          <mat-radio-group formControlName=\"plan_type\" required>\r\n            <mat-radio-button *ngFor=\"let userType of hostingUserTypeList\" [value]=\"userType?.key\"\r\n                              (change)=\"changeHostingType($event.value)\">\r\n              {{ userType?.label}}\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(hostingAddUserForm.get('plan_type'))\"\r\n                            [errMsg]=\"validationMsg.TYPE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input formControlName=\"rate\" matInput placeholder=\"Rate\"/>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"is_active\" placeholder=\"Status\" required>\r\n              <mat-option *ngFor=\"let activeInactive of activeInactiveList.slice(1)\" [value]=\"activeInactive?.key\">\r\n                {{ activeInactive?.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(hostingAddUserForm.get('is_active'))\"\r\n                            [errMsg]=\"validationMsg.STATUS_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput readonly placeholder=\"Activation date\" [matDatepicker]=\"startDateRef\" readonly\r\n                   formControlName=\"activedate\"\r\n                   (mousedown)=\"startDateRef.open()\" required/>\r\n            <mat-datepicker-toggle matSuffix [for]=\"startDateRef\"></mat-datepicker-toggle>\r\n            <mat-datepicker #startDateRef disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(hostingAddUserForm.get('activedate'))\"\r\n                            [errMsg]=\"validationMsg.DATE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput readonly placeholder=\"Inactivation date\" [matDatepicker]=\"inactiveDateRef\" readonly\r\n                   formControlName=\"inactivedate\"\r\n                   (mousedown)=\"inactiveDateRef.open()\" required/>\r\n            <mat-datepicker-toggle matSuffix [for]=\"inactiveDateRef\"></mat-datepicker-toggle>\r\n            <mat-datepicker #inactiveDateRef disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(hostingAddUserForm.get('inactivedate'))\"\r\n                            [errMsg]=\"validationMsg.DATE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Notes\" formControlName=\"notes\" rows=\"3\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal__footer\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 PR-25 text-right\">\r\n            <button type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n            <button [disabled]=\"hostingAddUserForm.invalid\" type=\"submit\" class=\"btn-primary\">Save</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change Sub client list dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/add-hosting-dialog/add-hosting-dialog.component.ts":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/add-hosting-dialog/add-hosting-dialog.component.ts ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: AddHostingDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHostingDialogComponent", function() { return AddHostingDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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









var AddHostingDialogComponent = /** @class */ (function (_super) {
    __extends(AddHostingDialogComponent, _super);
    function AddHostingDialogComponent(_commonCrudService, dialogRef, data, _fb) {
        var _this = _super.call(this) || this;
        _this._commonCrudService = _commonCrudService;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.hostingUserTypeList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["hostingUserType"];
        _this.activeInactiveList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["activeInactive"];
        return _this;
    }
    AddHostingDialogComponent.prototype.ngOnInit = function () {
        this.hostingUser = (this.data.hostingUserInfo) ? this.data.hostingUserInfo : null;
        this.billingInfo = (this.data.billingInfo) ? this.data.billingInfo : null;
        this.createHostingAddUserForm();
    };
    /**
     * On Change Hosting Type Value update for rate
     * @param value
     */
    AddHostingDialogComponent.prototype.changeHostingType = function (value) {
        if (value) {
            var dataItem = this.hostingUserTypeList.filter(function (item) { return item.key === value; });
            if (dataItem.length) {
                this.hostingAddUserForm.get('rate').setValue(dataItem[0].rate);
            }
        }
    };
    /**
     * Create Hosting User Add / Edit form
     */
    AddHostingDialogComponent.prototype.createHostingAddUserForm = function () {
        this.hostingAddUserForm = this._fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.hostingUser) ? this.hostingUser.username : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            plan_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.hostingUser) ? this.hostingUser.plan_type : null),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.hostingUser) ? this.hostingUser.rate : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
            activedate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.hostingUser) ? this.hostingUser.activedate : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            inactivedate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.hostingUser) ? this.hostingUser.inactivedate : null),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.hostingUser) ? Number(this.hostingUser.is_active) : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.hostingUser) ? this.hostingUser.notes : null),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.hostingUser) ? this.hostingUser.id : null)
        });
    };
    /**
     * Close Dialog
     */
    AddHostingDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    /**
     * Esc event for close modal
     * @param event
     */
    AddHostingDialogComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onClose();
        }
    };
    /**
     * Add / Update Hosting User
     * @param form
     */
    AddHostingDialogComponent.prototype.onHostingUserSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['entity_id'] = this.billingInfo.entity_id;
            if (this.hostingUser) {
                this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].BILLING_HOSTING_USER_LIST, this.hostingUser.id, form.value).subscribe(function (Response) {
                    _this.dialogRef.close(true);
                });
            }
            else {
                delete form.value['id'];
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].BILLING_HOSTING_USER_LIST + '/' + this.billingInfo.entity_id, form.value).subscribe(function (Response) {
                    _this.dialogRef.close(true);
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_5__["BillingBasic"])
    ], AddHostingDialogComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddHostingDialogComponent.prototype, "serviceInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AddHostingDialogComponent.prototype, "onKeydownHandler", null);
    AddHostingDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-hosting-dialog',
            template: __webpack_require__(/*! ./add-hosting-dialog.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/add-hosting-dialog/add-hosting-dialog.component.html")
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddHostingDialogComponent);
    return AddHostingDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/hosting-user-list-history/hosting-user-list-history.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/hosting-user-list-history/hosting-user-list-history.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Favorite menu dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">YASHKT</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <!-- Start Request Table -->\r\n    <div class=\"table-container dialog-table-container\">\r\n      <div class=\"table-block\">\r\n        <table class=\"PT-0\">\r\n          <thead>\r\n          <tr>\r\n            <th width=\"10%\">Sr. No</th>\r\n            <th width=\"20%\">Type</th>\r\n            <th width=\"10%\">Rate</th>\r\n            <th width=\"20%\">Status</th>\r\n            <th width=\"40%\">Modified</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let row of [0,1,2,3]; let i=index\">\r\n            <td>{{i+1}}</td>\r\n            <td>Basic</td>\r\n            <td>35</td>\r\n            <td>Active</td>\r\n            <td>Shobhana Desai on 01/01/2014</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Request Table -->\r\n  </div>\r\n</div>\r\n<!--  End Favorite menu dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/hosting-user-list-history/hosting-user-list-history.component.ts":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/hosting-user-list-history/hosting-user-list-history.component.ts ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: HostingUserListHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostingUserListHistoryComponent", function() { return HostingUserListHistoryComponent; });
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


var HostingUserListHistoryComponent = /** @class */ (function () {
    function HostingUserListHistoryComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    HostingUserListHistoryComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    HostingUserListHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hosting-user-list-history',
            template: __webpack_require__(/*! ./hosting-user-list-history.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/hosting-user-list-history/hosting-user-list-history.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], HostingUserListHistoryComponent);
    return HostingUserListHistoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/hosting-user-list.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/hosting-user-list.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bookkeeping-basic-container\">\r\n  <span class=\"panel-title\" *ngIf=\"!isEdit\">Hosting User List</span>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 MT-10\">\r\n      <button class=\"open-dialog-btn MB-20\" (click)=\"onAddHostingDialog()\" *ngIf=\"isEdit === 1\">\r\n        <mat-icon>add</mat-icon>\r\n        Hosting User List\r\n      </button>\r\n      <div class=\"table-container\">\r\n        <div class=\"table-block\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n              <th width=\"8%\">Sr. No.</th>\r\n              <th width=\"12%\">Username</th>\r\n              <th width=\"10%\">Type</th>\r\n              <th width=\"10%\">Rate</th>\r\n              <th width=\"10%\">Status</th>\r\n              <th width=\"10%\">Activation Date</th>\r\n              <th width=\"10%\">Inactivation Date</th>\r\n              <th width=\"22%\">Notes</th>\r\n              <th width=\"8%\" *ngIf=\"isEdit ===1\">Action</th>\r\n            </tr>\r\n            </thead>\r\n\r\n            <tbody *ngIf=\"hostingUserList.length\">\r\n            <tr *ngFor=\"let hostingUser of hostingUserList; let i = index\">\r\n              <td width=\"8%\">{{i + 1}}</td>\r\n              <td width=\"12%\">{{hostingUser?.username}}</td>\r\n              <td width=\"10%\">{{getHostingPlanType(hostingUser?.plan_type)}}</td>\r\n              <td width=\"10%\">{{hostingUser?.rate}}</td>\r\n              <td width=\"10%\">{{(hostingUser?.is_active === 1) ? 'Active' : 'Inactive'}}</td>\r\n              <td width=\"10%\">{{(hostingUser?.activedate !== '' && hostingUser?.activedate !== '0000-00-00') ?\r\n                (hostingUser?.activedate | date : 'dd-MM-yyyy') : ''}}\r\n              </td>\r\n              <td width=\"10%\">{{(hostingUser?.inactivedate !== '' && hostingUser?.inactivedate !== '0000-00-00') ?\r\n                (hostingUser?.inactivedate | date : 'dd-MM-yyyy') : ''}}\r\n              </td>\r\n              <td width=\"22%\">{{hostingUser?.notes}}</td>\r\n              <td width=\"8%\" *ngIf=\"isEdit === 1\">\r\n                <mat-icon class=\"orange-color\" [matTooltip]=\"'Edit'\" (click)=\"onAddHostingDialog(hostingUser)\">edit\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n            <tbody *ngIf=\"hostingUserList.length === 0\">\r\n            <tr>\r\n              <td colspan=\"9\">\r\n                <p class=\"orange-color\">No Records Found!</p>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/hosting-user-list.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/hosting-user-list.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: HostingUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostingUserListComponent", function() { return HostingUserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_hosting_dialog_add_hosting_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-hosting-dialog/add-hosting-dialog.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/add-hosting-dialog/add-hosting-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _hosting_user_list_history_hosting_user_list_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hosting-user-list-history/hosting-user-list-history.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/hosting-user-list-history/hosting-user-list-history.component.ts");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HostingUserListComponent = /** @class */ (function () {
    // Data Variables
    function HostingUserListComponent(dialog, _commonCrudService) {
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this.hostingUserList = [];
        this.hostingUserTypeList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["hostingUserType"];
    }
    HostingUserListComponent.prototype.ngOnInit = function () {
        this.initializationMethod();
    };
    /**
     * Initialization Methods
     */
    HostingUserListComponent.prototype.initializationMethod = function () {
        this.getHostingUserList();
    };
    /**
     * Get Hosting User List
     */
    HostingUserListComponent.prototype.getHostingUserList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].BILLING_HOSTING_USER_LIST + '/' + this.billingInformation.entity_id, {
            'records': 'all',
            'sortBy': 'id',
            'sortOrder': 'desc'
        }, {}).subscribe(function (response) {
            _this.hostingUserList = response.payload.data;
        });
    };
    /**
     * Get Hosting Plan Type Name
     * @param type
     */
    HostingUserListComponent.prototype.getHostingPlanType = function (type) {
        var val = this.hostingUserTypeList.filter(function (elem) { return elem.key === type; });
        return (val.length) ? val[0].label : '';
    };
    /**
     * On Add Edit Hosting User Type
     * @param hostingUserInfo
     */
    HostingUserListComponent.prototype.onAddHostingDialog = function (hostingUserInfo) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_hosting_dialog_add_hosting_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AddHostingDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                hostingUserInfo: (hostingUserInfo) ? hostingUserInfo : null,
                billingInfo: this.billingInformation
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                // console.log('c');
                _this.getHostingUserList();
            }
        });
    };
    HostingUserListComponent.prototype.onOpenHistoryDialog = function () {
        var dialogRef = this.dialog.open(_hosting_user_list_history_hosting_user_list_history_component__WEBPACK_IMPORTED_MODULE_3__["HostingUserListHistoryComponent"], {
            width: '50vw',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_4__["BillingBasic"])
    ], HostingUserListComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HostingUserListComponent.prototype, "serviceInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HostingUserListComponent.prototype, "isEdit", void 0);
    HostingUserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hosting-user-list',
            template: __webpack_require__(/*! ./hosting-user-list.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/hosting-services/hosting-user-list/hosting-user-list.component.html")
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]])
    ], HostingUserListComponent);
    return HostingUserListComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-additional-activity-calculator/payroll-additional-activity-calculator.component.html":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-additional-activity-calculator/payroll-additional-activity-calculator.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bookkeeping-basic-container\" *ngIf=\"isEdit\">\r\n  <div *ngIf=\"(payrollData?.inc_in_ff === 1) && (ffAmountOfSubactivity != payrollData?.fixed_fee)\" class=\"row\">\r\n    <div class=\"col-md-12 panel-title red-color text-right MB-0\">\r\n      Payroll fixed\r\n      fees({{payrollData?.fixed_fee}}) does not matches with FF bifurcation({{ffAmountOfSubactivity}}).\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"formSubactvitiy\" (submit)=\"onSumitSubActivity(formSubactvitiy)\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-12\">\r\n        <div *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index;\">\r\n          <span class=\"panel-title ML-0\">{{filterGroup.value['sectionTitle']}}</span>\r\n          <div class=\"table-container\">\r\n            <div class=\"table-block\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                  <th *ngFor=\"let subactivityColumn of filterGroup.value['sectionColumn']\"\r\n                      width=\"{{subactivityColumn['width']}}\">\r\n                    {{subactivityColumn['label']}}\r\n                  </th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                <tr *ngFor=\"let subactivityItem of getFilterFieldArrayData(i).controls; let k = index;\">\r\n                  <td>{{k+1}}</td>\r\n                  <td [attr.colspan]=\"subactivityItem.value['colSpan'] > 0 ? subactivityItem.value['colSpan'] : null\">\r\n                    {{subactivityItem.value['subactivity']}}\r\n                  </td>\r\n                  <td>\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"subactivityItem.value['is_inc_in_ff']\">\r\n                      <mat-select placeholder=\"No\" [value]=\"subactivityItem.value['inc_in_ff']\"\r\n                                  (selectionChange)=\"hideShowFields(i,k,subactivityItem.value['subactivity_code'],$event.value);onChangeUpdateDataValues('inc_in_ff',1,i,k,subactivityItem.value['subactivity_code'],$event.value)\">\r\n                        <mat-option *ngFor=\"let payrollInc of payrollInCInFF\" [value]=\"payrollInc?.key\">\r\n                          {{ payrollInc?.label}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td>\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"subactivityItem.value['is_frequency']\">\r\n                      <mat-select placeholder=\"Select Frequency\" [value]=\"subactivityItem.value['frequency_id']\"\r\n                                  (selectionChange)=\"onChangeUpdateDataValues('frequency_id',1,i,k,subactivityItem.value['subactivity_code'],$event.value)\">\r\n                        <mat-option *ngFor=\"let frequency of frequencyList\" [value]=\"frequency?.id\">\r\n                          {{ frequency?.frequency_name}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td>\r\n                   <span\r\n                     *ngFor=\"let subactivityItemField of getFilterFieldArrayDataFields(i,k).controls; let l = index;\">\r\n                     <label class=\"PT-10 MR-5 fw-500\">{{subactivityItemField.value['label']}}</label>\r\n                      <input type=\"number\" value=\"{{subactivityItem.value[subactivityItemField.value['key']]}}\"\r\n                             (change)=\"onChangeUpdateDataValues(subactivityItemField.value['key'],2,i,k,subactivityItem.value['subactivity_code'],$event.target.value)\">\r\n                     <br><br>\r\n                  </span>\r\n                  </td>\r\n                  <td>\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"subactivityItem.value['is_no_of_employee']\">\r\n                      <input matInput type=\"number\" [value]=\"subactivityItem.value['no_of_value']\"\r\n                             (change)=\"onChangeUpdateDataValues('no_of_value',1,i,k,subactivityItem.value['subactivity_code'],$event.target.value)\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12 text-right MTB-20\">\r\n        <button type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n        <!--[disabled]=\"formSubactvitiy.invalid\"-->\r\n        <button type=\"submit\" class=\"btn-primary\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n<div class=\"bookkeeping-basic-container\" *ngIf=\"!isEdit\">\r\n  <form [formGroup]=\"formSubactvitiy\" (submit)=\"onSumitSubActivity(formSubactvitiy)\">\r\n    <div class=\"row MB-20\">\r\n\r\n      <div class=\"col-md-12\">\r\n        <div *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index;\">\r\n          <span class=\"panel-title ML-0\">{{filterGroup.value['sectionTitle']}}</span>\r\n          <div class=\"table-container\">\r\n            <div class=\"table-block\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                  <th *ngFor=\"let subactivityColumn of filterGroup.value['sectionColumn']\"\r\n                      width=\"{{subactivityColumn['width']}}\">\r\n                    {{subactivityColumn['label']}}\r\n                  </th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                <tr *ngFor=\"let subactivityItem of getFilterFieldArrayData(i).controls; let k = index;\">\r\n                  <td>{{k+1}}</td>\r\n                  <td [attr.colspan]=\"subactivityItem.value['colSpan'] > 0 ? subactivityItem.value['colSpan'] : null\">\r\n                    {{subactivityItem.value['subactivity']}}\r\n                  </td>\r\n                  <td> {{getYesNoStatus(subactivityItem.value['inc_in_ff'])}}</td>\r\n                  <td> {{getFrequencyName(subactivityItem.value['frequency_id'])}}</td>\r\n                  <td>\r\n                   <span\r\n                     *ngFor=\"let subactivityItemField of getFilterFieldArrayDataFields(i,k).controls; let l = index;\">\r\n                     <span *ngIf=\"subactivityItemField.value['label'] !== ''\"> {{subactivityItemField.value['label']}} : {{subactivityItem.value[subactivityItemField.value['key']]}}</span>\r\n                     <span *ngIf=\"subactivityItemField.value['label'] === ''\"> {{subactivityItem.value[subactivityItemField.value['key']]}}</span>\r\n                     <br><br>\r\n                  </span>\r\n                  </td>\r\n                  <td> {{(subactivityItem.value['no_of_value'] > 0 ) ? subactivityItem.value['no_of_value'] : ''}}\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-additional-activity-calculator/payroll-additional-activity-calculator.component.ts":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-additional-activity-calculator/payroll-additional-activity-calculator.component.ts ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: PayrollAdditionalActivityCalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollAdditionalActivityCalculatorComponent", function() { return PayrollAdditionalActivityCalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _utility_constants_billing_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../utility/constants/billing-constant */ "./src/utility/constants/billing-constant.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/pipe/noComma.pipe */ "./src/utility/pipe/noComma.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PayrollAdditionalActivityCalculatorComponent = /** @class */ (function () {
    function PayrollAdditionalActivityCalculatorComponent(_decimalPipe, _noCommaPipe, _router, _fb, _commonCrudService, _sharedService) {
        this._decimalPipe = _decimalPipe;
        this._noCommaPipe = _noCommaPipe;
        this._router = _router;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        // Data Variables
        this.bookkeepingSubActivityValues = [];
        this.billingInfoConstant = _utility_constants_billing_constant__WEBPACK_IMPORTED_MODULE_2__["subActivityData"];
        this.frequencyList = [];
        this.payrollInCInFF = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["payroll_inc_in_ff"];
        this.billingSubActivityColumn = _utility_constants_billing_constant__WEBPACK_IMPORTED_MODULE_2__["subActivityColumn"];
        this.billingSubActivityColSpan = _utility_constants_billing_constant__WEBPACK_IMPORTED_MODULE_2__["subActivityDataColSpan"];
        this.ffAmountOfSubactivity = 0;
        this.tempAmount = 0;
    }
    PayrollAdditionalActivityCalculatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.serviceInfo);
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_PAYROLL, this.billingInformation.entity_id, {}).subscribe(function (response) {
            _this.payrollData = response.payload.data;
            if (_this.payrollData.inc_in_ff === 0) {
                if (_this.payrollInCInFF.length >= 3) {
                    _this.payrollInCInFF.splice(1, 1);
                }
            }
        });
        // console.log(this.serviceInfo);
        this.getFrequency();
        this.initializationMethod();
        this.createForm();
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_SERVICES_SUBACTIVITY_HISTORY + '/' + this.billingInformation.entity_id,
            params: { 'service_id': 2 },
        };
        this._sharedService.setHistoryURL(value);
    };
    /**
     * Get Frequency
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.getFrequency = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].FREQUENCY, {}, {}).subscribe(function (response) {
            _this.frequencyList = response.payload.data;
        });
    };
    /**
     * Initialization Methods
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.initializationMethod = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_SUBACTIVITY, this.billingInformation.entity_id, { 'service_id': 2 }).subscribe(function (response) {
            var itemData = response.payload.data;
            var itemDataValues = Object.entries(itemData);
            if (itemDataValues) {
                var i_1 = 0;
                itemDataValues.forEach(function (key) {
                    _this.bookkeepingSubActivityValues[i_1] = [];
                    _this.bookkeepingSubActivityValues[i_1]['label'] = key[0];
                    _this.bookkeepingSubActivityValues[i_1]['column'] = (_this.billingSubActivityColumn[key[0]]) ? _this.billingSubActivityColumn[key[0]] : [];
                    _this.bookkeepingSubActivityValues[i_1]['data'] = [];
                    var subData = Object.values(key[1]);
                    subData.map(function (subKey) {
                        var displayField = _this.getSubactivityField(subKey['subactivity_code']);
                        if (displayField) {
                            subKey['displayField'] = displayField;
                        }
                        subKey['colSpan'] = (_this.billingSubActivityColSpan[subKey['subactivity_code']]) ? _this.billingSubActivityColSpan[subKey['subactivity_code']] : 0;
                    });
                    _this.bookkeepingSubActivityValues[i_1]['data'] = subData;
                    _this.getFilterFieldArray().push(_this.initSection(_this.bookkeepingSubActivityValues[i_1]));
                    var j = 0;
                    _this.bookkeepingSubActivityValues[i_1]['data'].forEach(function (keyData) {
                        _this.getFilterFieldArrayData(i_1).push(_this.initSubActivity(keyData));
                        _this.hideShowFields(i_1, j, keyData['subactivity_code'], keyData['inc_in_ff'], keyData);
                        _this.onChangeUpdateDataValues('inc_in_ff', 1, i_1, j, keyData['subactivity_code'], keyData['inc_in_ff']);
                        j = j + 1;
                    });
                    i_1 = i_1 + 1;
                });
            }
            // console.log(this.formSubactvitiy.get('sections'));
        });
    };
    /**
     * Hide Show Field Values
     * @param parentActivity
     * @param childActivity
     * @param categoryCode
     * @param value
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.hideShowFields = function (parentActivity, childActivity, categoryCode, value, keyData) {
        var _this = this;
        var DataFields = this.getSubactivityField(categoryCode);
        this.getFilterFieldArrayDataFields(parentActivity, childActivity).removeAt(0);
        this.getFilterFieldArrayDataFields(parentActivity, childActivity).removeAt(0);
        this.getFilterFieldArrayDataFields(parentActivity, childActivity).removeAt(0);
        if (DataFields) {
            DataFields.forEach(function (key) {
                var itemControls = _this.getFilterFieldArrayDataFields(parentActivity, childActivity);
                itemControls.push(_this.initDisplayField(key));
                if (keyData) {
                    if (keyData['inc_in_ff'] === 1 && key['is_ff_count'] === 1) {
                        _this.ffAmountOfSubactivity += Number(keyData[key['key']]);
                    }
                }
            });
        }
    };
    /**
     * Get Count of FF for show message if payroll on fixed fee with bifurcation
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.getCountForSubactivityFF = function () {
        var _this = this;
        this.ffAmountOfSubactivity = 0;
        var dataItem = this.getFilterFieldArray().controls;
        var i = 0;
        if (dataItem) {
            dataItem.forEach(function (itemData) {
                var subItem = _this.getFilterFieldArrayData(i).controls;
                if (subItem) {
                    var j_1 = 0;
                    subItem.forEach(function (subItemData) {
                        var subItemField = _this.getFilterFieldArrayDataFields(i, j_1).controls;
                        if (subItemField) {
                            subItemField.forEach(function (dataValue) {
                                if (subItem) {
                                    if (subItemData.get('inc_in_ff').value === 1 && dataValue.get('is_ff_count').value === 1) {
                                        _this.ffAmountOfSubactivity += Number(subItemData.get(dataValue.get('key').value).value);
                                    }
                                }
                            });
                        }
                        j_1++;
                    });
                }
                i++;
            });
        }
    };
    /**
     * Create Form
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.createForm = function () {
        this.formSubactvitiy = this._fb.group({
            sections: this._fb.array([]),
        });
    };
    /**
     * Create Subactivity Group Form
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.initSection = function (item) {
        return this._fb.group({
            sectionTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['label'] : ''),
            sectionColumn: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['column'] : ''),
            sectionData: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([])
        });
    };
    /**
     * On Show Display Category Item
     * @param item
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.initSubActivity = function (item) {
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['id'] : ''),
            subactivity_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['subactivity_code'] : ''),
            subactivity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['subactivity'] : ''),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['frequency_id'] : 0),
            inc_in_ff: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['inc_in_ff'] : 0),
            fixed_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['fixed_fee'] : 0),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['price'] : 0),
            is_inc_in_ff: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['is_inc_in_ff'] : 0),
            is_frequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['is_frequency'] : 0),
            is_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['is_price'] : 0),
            is_fixed_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['is_fixed_fee'] : 0),
            is_no_of_employee: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['is_no_of_employee'] : 0),
            colSpan: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['colSpan'] : 0),
            fixed_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['fixed_value'] : 0),
            no_of_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['no_of_value'] : 0),
            displayField: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([])
        });
    };
    /**
     * On Show Display Field with Label Help Text and Value
     * @param item
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.initDisplayField = function (item) {
        return this._fb.group({
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['label'] : ''),
            help: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['help'] : ''),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['key'] : ''),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['value'] : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_11__["CommonRegex"].NUMERIC_REGEXP)]),
            is_ff_count: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['is_ff_count'] : 0),
        });
    };
    /**
     * Get Filter Field Array
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.getFilterFieldArray = function () {
        return this.formSubactvitiy.get('sections');
    };
    /**
     * Get Filter Field Array
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.getFilterFieldArrayData = function (i) {
        return this.getFilterFieldArray().controls[i].get('sectionData');
    };
    /**
     * Get Filter Field Array
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.getFilterFieldArrayDataFields = function (i, j) {
        return this.getFilterFieldArrayData(i).controls[j].get('displayField');
    };
    /**
     * Get Subactivity Field
     * @param index
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.getSubactivityField = function (index) {
        var ItemData = (this.billingInfoConstant[index]) ? this.billingInfoConstant[index] : null;
        return ItemData;
    };
    /**
     * @param index
     * @param value
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.onChangeUpdateDataValues = function (type, subType, index, subIndex, subCategoryCode, value) {
        if (type !== '' && subType === 1) {
            this.getFilterFieldArrayData(index).controls[subIndex].get(type).setValue(value);
            this.getCountForSubactivityFF();
        }
        else if (type !== '' && subType === 2) {
            this.getFilterFieldArrayData(index).controls[subIndex].get(type).setValue(value);
            this.getCountForSubactivityFF();
        }
    };
    /**
     * On Submit SubActivity
     * @param form
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.onSumitSubActivity = function (form) {
        var _this = this;
        var FormData = form.value['sections'];
        var itemData = {};
        itemData['subactivity'] = [];
        itemData['service_id'] = 2;
        if (FormData.length) {
            FormData.forEach(function (item) {
                // console.log(item);
                var sectionData = item['sectionData'];
                if (sectionData.length) {
                    sectionData.forEach(function (subItem) {
                        delete subItem['displayField'];
                        delete subItem['colSpan'];
                        delete subItem['is_price'];
                        delete subItem['subactivity'];
                        delete subItem['is_fixed_fee'];
                        delete subItem['is_frequency'];
                        delete subItem['is_inc_in_ff'];
                        delete subItem['is_no_of_employee'];
                        itemData['subactivity'].push(subItem);
                    });
                }
            });
            // console.log(itemData['colSpan']);
            // Billing Subactivity update
            if (itemData['subactivity']) {
                this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_SUBACTIVITY, this.billingInformation.entity_id, itemData).subscribe(function (response) {
                    if (response) {
                        _this.bookkeepingSubActivityValues = [];
                        _this.ffAmountOfSubactivity = 0;
                        _this.initializationMethod();
                        _this.createForm();
                    }
                });
            }
        }
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.payrollInCInFF.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Frequency List
     * @param {number} id
     * @returns {string}
     */
    PayrollAdditionalActivityCalculatorComponent.prototype.getFrequencyName = function (id) {
        var val = this.frequencyList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].frequency_name : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_1__["BillingBasic"])
    ], PayrollAdditionalActivityCalculatorComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PayrollAdditionalActivityCalculatorComponent.prototype, "serviceInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PayrollAdditionalActivityCalculatorComponent.prototype, "isEdit", void 0);
    PayrollAdditionalActivityCalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payroll-additional-activity-calculator',
            template: __webpack_require__(/*! ./payroll-additional-activity-calculator.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-additional-activity-calculator/payroll-additional-activity-calculator.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_6__["NoCommaPipe"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_6__["NoCommaPipe"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], PayrollAdditionalActivityCalculatorComponent);
    return PayrollAdditionalActivityCalculatorComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-basic/payroll-basic.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-basic/payroll-basic.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bookkeeping-basic-container\" *ngIf=\"isEdit\">\r\n  <span class=\"panel-title\">Payroll Basic</span>\r\n  <form [formGroup]=\"payrollbasicForm\" (submit)=\"onSubmitPayrollInfo(payrollbasicForm)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Rate Per Hour\" formControlName=\"ff_rph\" type=\"number\" required/>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(payrollbasicForm.get('ff_rph'))\"\r\n                          [errMsg]=\"validationMsg.RATE_PER_HOUR_REQUIRED\"></app-validation>\r\n        </div>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isValidField(payrollbasicForm.get('ff_rph'))\"\r\n                          [errMsg]=\"validationMsg.RATE_PER_HOUR_VALID\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"inc_in_ff\" placeholder=\"Inc. in FF\"\r\n                      (selectionChange)=\"changeInFixedFee($event.value)\">\r\n            <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n              {{ yesNo?.label}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(payrollbasicForm.get('inc_in_ff'))\"\r\n                          [errMsg]=\"validationMsg.INC_IN_FF_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\" *ngIf=\"isFixedFee\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Payroll Fixed Price\" formControlName=\"fixed_fee\" type=\"number\" required/>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(payrollbasicForm.get('fixed_fee'))\"\r\n                          [errMsg]=\"validationMsg.PAYROLL_FIXED_PRICE_REQUIRED\"></app-validation>\r\n        </div>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isValidField(payrollbasicForm.get('fixed_fee'))\"\r\n                          [errMsg]=\"validationMsg.PAYROLL_FIXED_PRICE_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\" *ngIf=\"isFixedFee\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"payroll_frequency_id\" placeholder=\"Payroll 404 Frequency\" required>\r\n            <mat-option *ngFor=\"let frequency of payrollFrequencyList\" [value]=\"frequency?.id\">\r\n              {{ frequency?.frequency_name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(payrollbasicForm.get('payroll_frequency_id'))\"\r\n                          [errMsg]=\"validationMsg.PAYROLL_FREQUENCY_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"frequency_id\" placeholder=\"Invoice frequency\" required\r\n                      (selectionChange)=\"changeGetRecurringList(serviceInfo['service_id'], (payrollData.inc_in_ff > 0) ? payrollData.inc_in_ff : 1, $event.value)\">\r\n            <mat-option *ngFor=\"let frequency of frequencyList\" [value]=\"frequency?.id\">\r\n              {{ frequency?.frequency_name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(payrollbasicForm.get('frequency_id'))\"\r\n                          [errMsg]=\"validationMsg.INVOICE_FREQUENCY_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <mat-select *ngIf=\"!isCalcReadOnly\" formControlName=\"calc_id\" placeholder=\"Additional Activity Calculator\"\r\n                      required>\r\n            <mat-option *ngFor=\"let calc of calcList\" [value]=\"calc?.id\">\r\n              {{ calc?.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <!--<label *ngIf=\"isCalcReadOnly\">{{isCalcReadOnlyName}}</label>-->\r\n          <input *ngIf=\"isCalcReadOnly\" matInput placeholder=\"Additional Activity Calculator\"\r\n                 value=\"{{isCalcReadOnlyName}}\"\r\n                 required readonly/>\r\n\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(payrollbasicForm.get('calc_id'))\"\r\n                          [errMsg]=\"validationMsg.RATE_PER_HOUR_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"recurring_id\" placeholder=\"Recurring\"\r\n                      (selectionChange)=\"changeAutoInvoice($event.value)\">\r\n            <mat-option value=\"\">Please Select</mat-option>\r\n            <mat-option *ngFor=\"let recurring of recurringList\" [value]=\"recurring?.id\">\r\n              {{ recurring?.recurring_name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"auto_invoice\" placeholder=\"Auto invoice\" required\r\n                      (selectionChange)=\"changeAutoInvoiceType($event.value)\">\r\n            <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n              {{ yesNo?.label}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(payrollbasicForm.get('auto_invoice'))\"\r\n                          [errMsg]=\"validationMsg.AUTO_INVOICE_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-8\">\r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"Payroll Notes\" formControlName=\"notes\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 text-right MTB-20\">\r\n        <button type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n        <button [disabled]=\"payrollbasicForm.invalid\" type=\"submit\" class=\"btn-primary MR-5\">Save & Next</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n<div class=\"view-billing-info-container\" *ngIf=\"!isEdit\">\r\n  <div class=\"basic-details-border\">\r\n    <span class=\"panel-title\">Payroll Basic</span>\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 label-span-color\">\r\n          <div>\r\n            <label>Rate Per Hour</label>\r\n            <span>{{payrollData?.ff_rph}}</span>\r\n          </div>\r\n          <div *ngIf=\"payrollData?.inc_in_ff > 0\">\r\n            <label>Payroll Fixed Price</label>\r\n            <span>{{payrollData?.fixed_fee}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Invoice Frequency</label>\r\n            <span>{{getFrequencyName(payrollData?.frequency_id)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Payroll notes</label>\r\n            <span>{{payrollData?.notes}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 label-span-color\">\r\n          <div>\r\n            <label>Inc. In. FF</label>\r\n            <span>{{getYesNoStatus(payrollData?.inc_in_ff)}}</span>\r\n          </div>\r\n          <div *ngIf=\"payrollData?.inc_in_ff > 0\">\r\n            <label>Payroll 404 Frequency</label>\r\n            <span>{{getPayrollFrequencyList(payrollData?.payroll_frequency_id)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Recurring</label>\r\n            <span>{{getRecurringName(payrollData?.recurring_id)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Auto invoice</label>\r\n            <span>{{getYesNoStatus(payrollData?.auto_invoice)}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-basic/payroll-basic.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-basic/payroll-basic.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: PayrollBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollBasicComponent", function() { return PayrollBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/pipe/noComma.pipe */ "./src/utility/pipe/noComma.pipe.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PayrollBasicComponent = /** @class */ (function (_super) {
    __extends(PayrollBasicComponent, _super);
    function PayrollBasicComponent(_decimalPipe, _noCommaPipe, _router, _fb, _commonCrudService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._decimalPipe = _decimalPipe;
        _this._noCommaPipe = _noCommaPipe;
        _this._router = _router;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this.onAddUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        _this.frequencyList = [];
        _this.payrollFrequencyList = [];
        _this.calcList = [];
        _this.recurringList = [];
        _this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["yesNo"];
        _this.isFixedFee = false;
        _this.isCalcReadOnly = false;
        _this.isCalcReadOnlyName = '';
        return _this;
    }
    PayrollBasicComponent.prototype.ngOnInit = function () {
        this.getFrequency();
        this.getPayrollCalc();
        this.getServiceBasicInfo();
        this.createPayrollBasicForm();
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_SERVICES_HISTORY + '/' + this.billingInformation.entity_id,
            params: { 'service_id': this.serviceInfo['service_id'] },
        };
        this._sharedService.setHistoryURL(value);
    };
    /**
     * Get Frequency List
     */
    PayrollBasicComponent.prototype.getPayrollCalc = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_PAYROLL_CALC_LIST, { 'records': 'all' }, {}).subscribe(function (response) {
            if (response) {
                _this.calcList = response.payload.data;
            }
        });
    };
    /**
     * Get Service Basic Information
     */
    PayrollBasicComponent.prototype.getServiceBasicInfo = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_PAYROLL, this.billingInformation.entity_id, {}).subscribe(function (response) {
            _this.payrollData = response.payload.data;
            // console.log(this.payrollData);
            _this.createPayrollBasicForm();
            if (_this.payrollData) {
                if (_this.payrollData.frequency_id > 0) {
                    _this.changeGetRecurringList(_this.serviceInfo['service_id'], (_this.payrollData.inc_in_ff > 0) ? _this.payrollData.inc_in_ff : 1, _this.payrollData.frequency_id);
                }
                _this.changeAutoInvoice(_this.payrollData.recurring_id);
                _this.changeInFixedFee(_this.payrollData.inc_in_ff);
                if (_this.payrollData.calc_id > 0) {
                    _this.isCalcReadOnly = true;
                    var calc = _this.calcList.filter(function (item) { return item.id === _this.payrollData.calc_id; });
                    if (calc.length) {
                        _this.isCalcReadOnlyName = calc[0].name;
                        // this.payrollbasicForm.get('calc_id').setValue(this.isCalcReadOnlyName);
                    }
                }
            }
        });
    };
    /**
     * Create Payroll Basic Form
     */
    PayrollBasicComponent.prototype.createPayrollBasicForm = function () {
        this.payrollbasicForm = this._fb.group({
            ff_rph: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.payrollData && this.payrollData.ff_rph !== null && Number(this.payrollData.ff_rph) > 0) ? this.payrollData.ff_rph : _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["BASE"].DEFAULT_RPH, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
            inc_in_ff: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.payrollData && this.payrollData.inc_in_ff >= 0) ? this.payrollData.inc_in_ff : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fixed_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.payrollData && this.payrollData.fixed_fee !== null && Number(this.payrollData.fixed_fee) > 0) ? this.payrollData.fixed_fee : 0),
            payroll_frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.payrollData && this.payrollData.payroll_frequency_id > 0) ? this.payrollData.payroll_frequency_id : 0),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.payrollData && this.payrollData.frequency_id > 0) ? this.payrollData.frequency_id : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            calc_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.payrollData) ? this.payrollData.calc_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            recurring_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.payrollData) ? this.payrollData.recurring_id : null),
            auto_invoice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.payrollData) ? this.payrollData.auto_invoice : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.payrollData) ? this.payrollData.notes : null),
        });
    };
    /**
     * Get Frequency List
     */
    PayrollBasicComponent.prototype.getFrequency = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].FREQUENCY, {}, { 'notin': { 'id': '10' } }).subscribe(function (response) {
            if (response) {
                _this.frequencyList = response.payload.data;
            }
        });
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].FREQUENCY, {}, { 'notin': { 'id': '10,7' } }).subscribe(function (response) {
            if (response) {
                _this.payrollFrequencyList = response.payload.data;
            }
        });
    };
    /**
     * If Fixed Fee Value Change
     * @param value
     */
    PayrollBasicComponent.prototype.changeInFixedFee = function (value) {
        if (value > 0) {
            this.isFixedFee = true;
            this.payrollbasicForm.get('fixed_fee').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]);
            this.payrollbasicForm.get('fixed_fee').updateValueAndValidity();
            this.payrollbasicForm.get('payroll_frequency_id').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.payrollbasicForm.get('payroll_frequency_id').updateValueAndValidity();
        }
        else {
            this.isFixedFee = false;
            this.payrollbasicForm.get('fixed_fee').setValidators(null);
            this.payrollbasicForm.get('fixed_fee').updateValueAndValidity();
            this.payrollbasicForm.get('payroll_frequency_id').setValidators(null);
            this.payrollbasicForm.get('payroll_frequency_id').updateValueAndValidity();
        }
    };
    /**
     * Change Auto Invoice Status
     * @param recurring_id
     */
    PayrollBasicComponent.prototype.changeAutoInvoice = function (recurring_id) {
        if (recurring_id === '') {
            this.payrollbasicForm.get('auto_invoice').setValue(null);
            this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["ToastType"].ERROR);
        }
    };
    /**
     * Change Auto Invoice Status
     * @param recurring_id
     */
    PayrollBasicComponent.prototype.changeAutoInvoiceType = function (value) {
        var _this = this;
        if (value) {
            var recurring_id = this.payrollbasicForm.get('recurring_id').value;
            if (recurring_id === '') {
                this.payrollbasicForm.get('auto_invoice').setValue(null);
                this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["ToastType"].ERROR);
            }
            // this will check releated entity
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_BASIC_VIEW, this.billingInformation.entity_id).subscribe(function (response) {
                var DataItem = response.payload.data[_this.billingInformation.entity_id];
                // console.log( DataItem);
                if (DataItem['is_related'] === 1 || DataItem['to_email'] === '' || DataItem['contact_person'] === '') {
                    _this.payrollbasicForm.get('auto_invoice').setValue(null);
                    _this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RELATED, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["ToastType"].ERROR);
                }
            });
        }
    };
    /**
     * On Change Frequency Get Recurring List
     * @param service_id
     * @param inc_in_ff
     * @param frequency_id
     */
    PayrollBasicComponent.prototype.changeGetRecurringList = function (service_id, inc_in_ff, frequency_id) {
        var _this = this;
        this.recurringList = [];
        var params = {};
        params['service_id'] = service_id;
        params['inc_in_ff'] = this.payrollbasicForm.get('inc_in_ff').value;
        params['frequency_id'] = frequency_id;
        if (params) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_RECURRING_LIST, params, {}).subscribe(function (response) {
                _this.recurringList = response.payload.data;
            });
        }
    };
    /**
     * On Submit Payroll Info
     * @param form
     */
    PayrollBasicComponent.prototype.onSubmitPayrollInfo = function (form) {
        var _this = this;
        if (form.valid) {
            // Update Data
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_PAYROLL, this.billingInformation.entity_id, form.value).subscribe(function (response) {
                _this.onAddUpdate.emit(true);
                _this.getServiceBasicInfo();
            });
        }
        this.moveToSelectedTab("Additional Activity Calculator");
    };
    PayrollBasicComponent.prototype.moveToSelectedTab = function (tabName) {
        for (var i = 0; i < document.querySelectorAll('.mat-tab-label-content').length; i++) {
            if (document.querySelectorAll('.mat-tab-label-content')[i].innerText === tabName) {
                document.querySelectorAll('.mat-tab-label')[i].click();
            }
        }
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    PayrollBasicComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Frequency List
     * @param {number} id
     * @returns {string}
     */
    PayrollBasicComponent.prototype.getFrequencyName = function (id) {
        var val = this.frequencyList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].frequency_name : '';
    };
    /**
     * Display Get Frequency List
     * @param {number} id
     * @returns {string}
     */
    PayrollBasicComponent.prototype.getPayrollFrequencyList = function (id) {
        var val = this.payrollFrequencyList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].frequency_name : '';
    };
    /**
     * Display Get Recurring List
     * @param {number} id
     * @returns {string}
     */
    PayrollBasicComponent.prototype.getRecurringName = function (id) {
        var val = this.recurringList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].recurring_name : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_5__["BillingBasic"])
    ], PayrollBasicComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PayrollBasicComponent.prototype, "serviceInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PayrollBasicComponent.prototype, "isEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PayrollBasicComponent.prototype, "onAddUpdate", void 0);
    PayrollBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payroll-basic',
            template: __webpack_require__(/*! ./payroll-basic.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-basic/payroll-basic.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_7__["NoCommaPipe"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_7__["NoCommaPipe"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], PayrollBasicComponent);
    return PayrollBasicComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-services.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-services.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-tab-group class=\"demo-tab-group contact-tab\" (selectedTabChange)=\"onSelectTab($event)\">\r\n    <mat-tab label=\"Basic\">\r\n      <div>\r\n        <app-payroll-basic *ngIf=\"isActiveTab === 0\" [isEdit]=\"isEdit\" [billingInformation]=\"billingInformation\"\r\n                           [serviceInfo]=\"serviceInfo\" (onAddUpdate)=\"getPayrollDataInfo();\"></app-payroll-basic>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Additional Activity Calculator\" *ngIf=\"isUpdated === 1\">\r\n      <div>\r\n        <app-payroll-additional-activity-calculator [isEdit]=\"isEdit\" *ngIf=\"isActiveTab === 1\"\r\n                                                    [billingInformation]=\"billingInformation\"\r\n                                                    [serviceInfo]=\"serviceInfo\"></app-payroll-additional-activity-calculator>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-services.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-services.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2JpbGxpbmctaW5mb3JtYXRpb24vYmlsbGluZy1pbmZvLXNlcnZpY2VzL3BheXJvbGwtc2VydmljZXMvcGF5cm9sbC1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-services.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-services.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: PayrollServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollServicesComponent", function() { return PayrollServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PayrollServicesComponent = /** @class */ (function () {
    function PayrollServicesComponent(_commonCrudService) {
        this._commonCrudService = _commonCrudService;
        this.isActiveTab = 0;
        this.isUpdated = 0;
    }
    PayrollServicesComponent.prototype.ngOnInit = function () {
        this.getPayrollDataInfo();
    };
    PayrollServicesComponent.prototype.getPayrollDataInfo = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].BILLING_PAYROLL, this.billingInformation.entity_id, {}).subscribe(function (response) {
            _this.payrollData = response.payload.data;
            _this.isUpdated = _this.payrollData.is_updated;
        });
    };
    /**
     *  On Tab Change
     */
    PayrollServicesComponent.prototype.onSelectTab = function (tabChangeEvent) {
        this.isActiveTab = tabChangeEvent['index'];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_1__["BillingBasic"])
    ], PayrollServicesComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PayrollServicesComponent.prototype, "serviceInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PayrollServicesComponent.prototype, "isEdit", void 0);
    PayrollServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payroll-services',
            template: __webpack_require__(/*! ./payroll-services.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-services.component.html"),
            styles: [__webpack_require__(/*! ./payroll-services.component.scss */ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-services.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__["CommonCrudService"]])
    ], PayrollServicesComponent);
    return PayrollServicesComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-services.module.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-services.module.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: PayrollServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollServicesModule", function() { return PayrollServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _payroll_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payroll-services.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-services.component.ts");
/* harmony import */ var _payroll_basic_payroll_basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payroll-basic/payroll-basic.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-basic/payroll-basic.component.ts");
/* harmony import */ var _payroll_additional_activity_calculator_payroll_additional_activity_calculator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payroll-additional-activity-calculator/payroll-additional-activity-calculator.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/payroll-services/payroll-additional-activity-calculator/payroll-additional-activity-calculator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PayrollServicesModule = /** @class */ (function () {
    function PayrollServicesModule() {
    }
    PayrollServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__["UtilityModule"]
            ],
            declarations: [_payroll_services_component__WEBPACK_IMPORTED_MODULE_3__["PayrollServicesComponent"], _payroll_basic_payroll_basic_component__WEBPACK_IMPORTED_MODULE_4__["PayrollBasicComponent"], _payroll_additional_activity_calculator_payroll_additional_activity_calculator_component__WEBPACK_IMPORTED_MODULE_5__["PayrollAdditionalActivityCalculatorComponent"]],
            exports: [_payroll_services_component__WEBPACK_IMPORTED_MODULE_3__["PayrollServicesComponent"]]
        })
    ], PayrollServicesModule);
    return PayrollServicesModule;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/smsf-services/smsf-services.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/smsf-services/smsf-services.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bookkeeping-basic-container\" *ngIf=\"isEdit\">\r\n  <span class=\"panel-title\">SMSF Basic</span>\r\n  <form [formGroup]=\"smsfbasicForm\" (submit)=\"onSubmitSMSFInfo(smsfbasicForm)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"befree_invoice\" placeholder=\"Generate invoice from Befree\" required>\r\n            <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n              {{ yesNo?.label}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(smsfbasicForm.get('befree_invoice'))\"\r\n                          [errMsg]=\"validationMsg.GENERATE_INVOICE_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"frequency_id\" placeholder=\"Invoice frequency\" required\r\n                      (selectionChange)=\"changeGetRecurringList(serviceInfo['service_id'], 1, $event.value)\">\r\n            <mat-option *ngFor=\"let frequency of frequencyList\" [value]=\"frequency?.id\">\r\n              {{ frequency?.frequency_name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(smsfbasicForm.get('frequency_id'))\"\r\n                          [errMsg]=\"validationMsg.INVOICE_FREQUENCY_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <input matInput readonly placeholder=\"FF start date\" [matDatepicker]=\"startDateRef\"\r\n                 formControlName=\"ff_start_date\" (dateChange)=\"updateFixedFee($event.value)\"\r\n                 (mousedown)=\"startDateRef.open()\" required/>\r\n          <mat-datepicker-toggle matSuffix [for]=\"startDateRef\"></mat-datepicker-toggle>\r\n          <mat-datepicker #startDateRef disabled=\"false\"></mat-datepicker>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(smsfbasicForm.get('ff_start_date'))\"\r\n                          [errMsg]=\"validationMsg.DATE_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Yearly FF(Ex. GST)\" formControlName=\"fixed_fee\" required\r\n                 (change)=\"updateFixedFeeAmount($event.target.value)\"/>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(smsfbasicForm.get('fixed_fee'))\"\r\n                          [errMsg]=\"validationMsg.YEAR_FF_REQUIRED\"></app-validation>\r\n        </div>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isValidField(smsfbasicForm.get('fixed_fee'))\"\r\n                          [errMsg]=\"validationMsg.YEAR_FF_VALID\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Monthly amount\" formControlName=\"monthly_amount\" readonly/>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Balance amount in June {{balanceYear}}\" formControlName=\"balance_amount\"\r\n                 readonly/>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"audit_fee_inc\" placeholder=\"Audit fees included in FF\"\r\n                      (selectionChange)=\"changeAuditFeesType($event.value)\">\r\n            <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n              {{ yesNo?.label}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\" *ngIf=\"isAuditFees\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Audit fees\" formControlName=\"audit_fee\"/>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(smsfbasicForm.get('audit_fee'))\"\r\n                          [errMsg]=\"validationMsg.AUDIT_FEE_REQUIRED\"></app-validation>\r\n        </div>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isValidField(smsfbasicForm.get('audit_fee'))\"\r\n                          [errMsg]=\"validationMsg.AUDIT_FEE_INVALID\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"recurring_id\" placeholder=\"Recurring\"\r\n                      (selectionChange)=\"changeAutoInvoice($event.value)\">\r\n            <mat-option value=\"\">Please Select</mat-option>\r\n            <mat-option *ngFor=\"let recurring of recurringList\" [value]=\"recurring?.id\">\r\n              {{ recurring?.recurring_name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-15\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"auto_invoice\" placeholder=\"Auto invoice\"\r\n                      (selectionChange)=\"changeAutoInvoiceType($event.value)\" required>\r\n            <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n              {{ yesNo?.label}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(smsfbasicForm.get('auto_invoice'))\"\r\n                          [errMsg]=\"validationMsg.AUTO_INVOICE_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-8\">\r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"SMSF Notes\" formControlName=\"notes\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 text-right MTB-20\">\r\n        <button type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n        <button [disabled]=\"smsfbasicForm.invalid\" type=\"submit\" class=\"btn-primary\">Save</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n<div class=\"view-billing-info-container\" *ngIf=\"!isEdit\">\r\n  <div class=\"basic-details-border\">\r\n    <span class=\"panel-title\">SMSF Basic</span>\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 label-span-color\">\r\n          <div>\r\n            <label>Generate Invoice From Befree</label>\r\n            <span>{{getYesNoStatus(smsfData?.befree_invoice)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>FF Start Date</label>\r\n            <span>{{(smsfData?.ff_start_date !== '' && smsfData?.ff_start_date !== '0000-00-00') ? (smsfData?.ff_start_date | date: 'dd-MM-yyyy') : ''}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Monthly Amount</label>\r\n            <span>{{smsfData?.monthly_amount}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Audit Fees Included in FF</label>\r\n            <span>{{getYesNoStatus(smsfData?.audit_fee_inc)}}</span>\r\n          </div>\r\n          <div *ngIf=\"smsfData?.audit_fee_inc === 0\">\r\n            <label>Audit Fee</label>\r\n            <span>{{smsfData?.audit_fee}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Recurring</label>\r\n            <span>{{getRecurringName(subscriptionData?.recurring_id)}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 label-span-color\">\r\n          <div>\r\n            <label>Invoice frequency</label>\r\n            <span>{{getFrequencyName(smsfData?.frequency_id)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Yearly FF</label>\r\n            <span>{{smsfData.fixed_fee}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Balance amount in June {{balanceYear}}</label>\r\n            <span>{{smsfData?.balance_amount}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Auto Invoice</label>\r\n            <span>{{getYesNoStatus(smsfData?.auto_invoice)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Notes</label>\r\n            <span>{{smsfData?.notes}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/smsf-services/smsf-services.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/smsf-services/smsf-services.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2JpbGxpbmctaW5mb3JtYXRpb24vYmlsbGluZy1pbmZvLXNlcnZpY2VzL3Ntc2Ytc2VydmljZXMvc21zZi1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/smsf-services/smsf-services.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/smsf-services/smsf-services.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: SmsfServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmsfServicesComponent", function() { return SmsfServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/pipe/noComma.pipe */ "./src/utility/pipe/noComma.pipe.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SmsfServicesComponent = /** @class */ (function (_super) {
    __extends(SmsfServicesComponent, _super);
    function SmsfServicesComponent(_router, _fb, _decimalPipe, _noCommaPipe, _commonCrudService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this._decimalPipe = _decimalPipe;
        _this._noCommaPipe = _noCommaPipe;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["yesNo"];
        _this.frequencyList = [];
        _this.recurringList = [];
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_1__["ValidationConstantMessage"]();
        _this.isAuditFees = false;
        return _this;
    }
    SmsfServicesComponent.prototype.ngOnInit = function () {
        this.balanceYear = new Date().getFullYear();
        this.getFrequency();
        this.getServiceBasicInfo();
        this.createSMSFBasicForm();
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].BILLING_SERVICES_HISTORY + '/' + this.billingInformation.entity_id,
            params: { 'service_id': this.serviceInfo['service_id'] },
        };
        this._sharedService.setHistoryURL(value);
    };
    /**
     * Get Service Basic Information
     */
    SmsfServicesComponent.prototype.getServiceBasicInfo = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].BILLING_SMSF, this.billingInformation.entity_id, {}).subscribe(function (response) {
            _this.smsfData = response.payload.data;
            _this.createSMSFBasicForm();
        });
    };
    /**
     * On Change Fixed Fee update monthly and balance amount in june
     * @param discount
     */
    SmsfServicesComponent.prototype.updateFixedFee = function (dateOfFixedFee) {
        var standard_fee = this.smsfbasicForm.get('fixed_fee').value;
        var dateOfFixedFeeVal = dateOfFixedFee;
        dateOfFixedFeeVal = moment__WEBPACK_IMPORTED_MODULE_12__(dateOfFixedFeeVal).format('YYYY-MM-DD');
        var yearMonthData = dateOfFixedFeeVal.split('-');
        var yearData = Number(yearMonthData[0]);
        var monthData = Number(yearMonthData[1]);
        // Set Year Data
        if (monthData >= _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["BASE"].MONTH_END) {
            this.balanceYear = yearData + 1;
        }
        else {
            this.balanceYear = yearData;
        }
        if (standard_fee) {
            this.updateFixedFeeAmount(standard_fee, dateOfFixedFee);
        }
    };
    /**
     * Update Amount with Data
     * @param standard_fee
     * @param dateOfFixedFee
     */
    SmsfServicesComponent.prototype.updateFixedFeeAmount = function (standard_fee, dateOfFixedFee) {
        var dateOfFixedFeeVal = (dateOfFixedFee) ? dateOfFixedFee : this.smsfbasicForm.get('ff_start_date').value;
        var endDateYear = dateOfFixedFeeVal;
        var diffMonths = 0;
        this.smsfbasicForm.get('balance_amount').setValue(0);
        this.smsfbasicForm.get('monthly_amount').setValue(0);
        if (dateOfFixedFeeVal && Number(standard_fee) > 0) {
            dateOfFixedFeeVal = moment__WEBPACK_IMPORTED_MODULE_12__(dateOfFixedFeeVal).format('YYYY-MM-DD');
            var yearMonthData = dateOfFixedFeeVal.split('-');
            var yearData = Number(yearMonthData[0]);
            var monthData = Number(yearMonthData[1]);
            // Set Year Data
            if (monthData >= _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["BASE"].MONTH_END) {
                this.balanceYear = yearData + 1;
                endDateYear = moment__WEBPACK_IMPORTED_MODULE_12__(new Date(yearData, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["BASE"].MONTH_START, 1)).format('YYYY-MM-DD');
                diffMonths = moment__WEBPACK_IMPORTED_MODULE_12__(dateOfFixedFeeVal).diff(endDateYear, 'month', false);
            }
            else {
                this.balanceYear = yearData;
                endDateYear = moment__WEBPACK_IMPORTED_MODULE_12__(new Date(yearData - 1, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["BASE"].MONTH_START, 1)).format('YYYY-MM-DD');
                diffMonths = moment__WEBPACK_IMPORTED_MODULE_12__(dateOfFixedFeeVal).diff(endDateYear, 'month', false);
            }
            diffMonths = diffMonths + 1;
            // Set Monthly Amount
            var monthly_amt = 0;
            monthly_amt = standard_fee / _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["BASE"].MONTH_TOTAL;
            this.smsfbasicForm.get('monthly_amount').setValue(this._noCommaPipe.transform(this._decimalPipe.transform(monthly_amt, '1.2-2')));
            // Set Balance Amount
            var balance_amt = 0;
            balance_amt = monthly_amt * diffMonths;
            this.smsfbasicForm.get('balance_amount').setValue(this._noCommaPipe.transform(this._decimalPipe.transform(balance_amt, '1.2-2')));
        }
    };
    /**
     * On Change Frequency Get Recurring List
     * @param service_id
     * @param inc_in_ff
     * @param frequency_id
     */
    SmsfServicesComponent.prototype.changeGetRecurringList = function (service_id, inc_in_ff, frequency_id) {
        var _this = this;
        this.recurringList = [];
        var params = {};
        params['service_id'] = service_id;
        params['inc_in_ff'] = inc_in_ff;
        params['frequency_id'] = frequency_id;
        if (params) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].BILLING_RECURRING_LIST, params, {}).subscribe(function (response) {
                _this.recurringList = response.payload.data;
            });
        }
    };
    /**
     * Change Auto Invoice Status
     * @param recurring_id
     */
    SmsfServicesComponent.prototype.changeAutoInvoice = function (recurring_id) {
        if (recurring_id === '') {
            this.smsfbasicForm.get('auto_invoice').setValue(null);
            this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["ToastType"].ERROR);
        }
    };
    /**
     * Change Auto Invoice Status
     * @param recurring_id
     */
    SmsfServicesComponent.prototype.changeAutoInvoiceType = function (value) {
        var _this = this;
        if (value) {
            var recurring_id = this.smsfbasicForm.get('recurring_id').value;
            if (recurring_id === '') {
                this.smsfbasicForm.get('auto_invoice').setValue(null);
                this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["ToastType"].ERROR);
            }
            // this will check releated entity
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].BILLING_BASIC_VIEW, this.billingInformation.entity_id).subscribe(function (response) {
                var DataItem = response.payload.data[_this.billingInformation.entity_id];
                // console.log( DataItem);
                if (DataItem['is_related'] === 1 || DataItem['to_email'] === '' || DataItem['contact_person'] === '') {
                    _this.smsfbasicForm.get('auto_invoice').setValue(null);
                    _this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RELATED, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["ToastType"].ERROR);
                }
            });
        }
    };
    /**
     * Get Frequency List
     */
    SmsfServicesComponent.prototype.getFrequency = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].FREQUENCY, {}, { 'in': { 'id': '3,5' } }).subscribe(function (response) {
            if (response) {
                _this.frequencyList = response.payload.data;
            }
        });
    };
    /**
     * Change Audit Fees Type Hide show field
     * @param value
     */
    SmsfServicesComponent.prototype.changeAuditFeesType = function (value) {
        this.smsfbasicForm.get('audit_fee').setValue(null);
        if (value > 0) {
            this.smsfbasicForm.get('audit_fee').setValidators(null);
            this.isAuditFees = false;
        }
        else {
            this.smsfbasicForm.get('audit_fee').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]);
            this.isAuditFees = true;
        }
    };
    /**
     * Create SMSF basic form
     */
    SmsfServicesComponent.prototype.createSMSFBasicForm = function () {
        this.smsfbasicForm = this._fb.group({
            befree_invoice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.smsfData) ? this.smsfData.befree_invoice : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.smsfData) ? this.smsfData.frequency_id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            ff_start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.smsfData) ? this.smsfData.ff_start_date : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            fixed_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.smsfData) ? this.smsfData.fixed_fee : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
            monthly_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.smsfData) ? this.smsfData.monthly_amount : null),
            balance_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.smsfData) ? this.smsfData.balance_amount : null),
            audit_fee_inc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.smsfData) ? this.smsfData.audit_fee_inc : null),
            audit_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.smsfData) ? this.smsfData.audit_fee : null),
            recurring_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.smsfData) ? this.smsfData.recurring_id : null),
            auto_invoice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.smsfData) ? this.smsfData.auto_invoice : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.smsfData) ? this.smsfData.notes : null),
        });
        if (this.smsfData) {
            if (this.smsfData.ff_start_date) {
                this.updateFixedFee(this.smsfData.ff_start_date);
            }
            if (this.smsfData.fixed_fee) {
                this.updateFixedFeeAmount(this.smsfData.fixed_fee, this.smsfData.ff_start_date);
            }
            if (this.smsfData.audit_fee_inc === 0) {
                this.isAuditFees = true;
            }
            if (this.smsfData.frequency_id > 0) {
                this.changeGetRecurringList(this.serviceInfo['service_id'], 1, this.smsfData.frequency_id);
            }
            this.changeAutoInvoice(this.smsfData.recurring_id);
        }
    };
    /**
     * On Submit SMSF Info
     * @param form
     */
    SmsfServicesComponent.prototype.onSubmitSMSFInfo = function (form) {
        if (form.valid) {
            if (form.value['ff_start_date']) {
                form.value['ff_start_date'] = moment__WEBPACK_IMPORTED_MODULE_12__(form.value['ff_start_date']).format('YYYY-MM-DD');
            }
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].BILLING_SMSF, this.billingInformation.entity_id, form.value).subscribe(function (response) {
            });
        }
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    SmsfServicesComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Frequency List
     * @param {number} id
     * @returns {string}
     */
    SmsfServicesComponent.prototype.getFrequencyName = function (id) {
        var val = this.frequencyList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].frequency_name : '';
    };
    /**
     * Display Get Recurring List
     * @param {number} id
     * @returns {string}
     */
    SmsfServicesComponent.prototype.getRecurringName = function (id) {
        var val = this.recurringList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].recurring_name : '';
    };
    /**
     * Display Get Software List
     * @param {number} id
     * @returns {string}
     */
    SmsfServicesComponent.prototype.getSoftwareName = function (id) {
        var val = this.recurringList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].recurring_name : '';
    };
    /**
     * Display Get Software List
     * @param {number} id
     * @returns {string}
     */
    SmsfServicesComponent.prototype.getPlanName = function (id) {
        var val = this.recurringList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].recurring_name : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_5__["BillingBasic"])
    ], SmsfServicesComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SmsfServicesComponent.prototype, "serviceInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SmsfServicesComponent.prototype, "isEdit", void 0);
    SmsfServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smsf-services',
            template: __webpack_require__(/*! ./smsf-services.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/smsf-services/smsf-services.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_8__["NoCommaPipe"]],
            styles: [__webpack_require__(/*! ./smsf-services.component.scss */ "./src/app/admin/billing-module/billing-information/billing-info-services/smsf-services/smsf-services.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_8__["NoCommaPipe"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], SmsfServicesComponent);
    return SmsfServicesComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/smsf-services/smsf-services.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/smsf-services/smsf-services.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: SmsfServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmsfServicesModule", function() { return SmsfServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _smsf_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smsf-services.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/smsf-services/smsf-services.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SmsfServicesModule = /** @class */ (function () {
    function SmsfServicesModule() {
    }
    SmsfServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__["UtilityModule"]
            ],
            declarations: [_smsf_services_component__WEBPACK_IMPORTED_MODULE_3__["SmsfServicesComponent"]],
            exports: [_smsf_services_component__WEBPACK_IMPORTED_MODULE_3__["SmsfServicesComponent"]]
        })
    ], SmsfServicesModule);
    return SmsfServicesModule;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/add-plan-basic-subscription/add-plan-basic-subscription.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/add-plan-basic-subscription/add-plan-basic-subscription.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start add more bank modal -->\r\n<div class=\"modal large-modal bank-dialog\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Add More Plan</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <form [formGroup]=\"addPlanForm\" #addMorePlanForm=\"ngForm\" (submit)=\"onSoftwareSubmit(addPlanForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 PL-0\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"parent_id\" placeholder=\"Software\" required>\r\n              <mat-option *ngFor=\"let software of softwareList\" [value]=\"software?.id\">\r\n                {{ software?.software_plan}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addPlanForm.get('parent_id'))\"\r\n                            [errMsg]=\"validationMsg.SOFTWARE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 PL-0\">\r\n          <mat-form-field>\r\n            <input formControlName=\"software_plan\" matInput type=\"text\" placeholder=\"Plan\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addPlanForm.get('software_plan'))\"\r\n                            [errMsg]=\"validationMsg.PLAN_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-6 PL-0\">\r\n          <mat-form-field>\r\n            <input formControlName=\"amount\" matInput type=\"number\" placeholder=\"Amount\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addPlanForm.get('amount'))\"\r\n                            [errMsg]=\"validationMsg.AMOUNT_REQUIRED\"></app-validation>\r\n          </div>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addPlanForm.get('amount'))\"\r\n                            [errMsg]=\"validationMsg.AMOUNT_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-5\">\r\n          <button [disabled]=\"addPlanForm.invalid\" class=\"btn-primary\" type=\"submit\">Save</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"table-container dialog-table-container MT-10\">\r\n      <div class=\"table-block\">\r\n        <!--<div class=\"row\">\r\n          <div class=\"col-md-4 PL-0\">\r\n            <div class=\"position-relative search-bank-information\">\r\n              <i class=\"material-icons\">search</i>\r\n              <input placeholder=\"Search\" type=\"text\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-8 PR-0\">\r\n          </div>\r\n        </div>-->\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"10%\">Sr. no.</th>\r\n            <th width=\"20%\">Software</th>\r\n            <th width=\"20%\">Plan</th>\r\n            <th width=\"10%\">Amount</th>\r\n            <th width=\"25%\">Modified By</th>\r\n            <th width=\"15%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n          <tr *ngFor=\"let plantypeData of planType; let i = index\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{plantypeData?.parent_id?.software_plan}}\r\n              <!--<input type=\"text\" />-->\r\n            </td>\r\n            <td>{{plantypeData?.software_plan}}</td>\r\n            <td>{{plantypeData?.amount}}</td>\r\n            <td>{{plantypeData?.modified_by?.modified_by}}</td>\r\n            <td>\r\n              <a class=\"orange-color ML-10 MR-10\" [matTooltip]=\"'Edit'\" (click)=\"onEditPlanTypeData(plantypeData)\">\r\n                <mat-icon class=\"material-icons\">edit</mat-icon>\r\n              </a>\r\n              <mat-slide-toggle *ngIf=\"slideActiveInactive[i]\" [(ngModel)]=\"slideActiveInactive[i]\"\r\n                                (change)=\"openToggleConfirmationDialog($event, plantypeData, i)\"></mat-slide-toggle>\r\n              <mat-slide-toggle *ngIf=\"!slideActiveInactive[i]\" [checked]=\"(plantypeData['is_active']) ? true : false\"\r\n                                (change)=\"openToggleConfirmationDialog($event, plantypeData, i)\"></mat-slide-toggle>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-layer\" (click)=\"onClose()\"></div>\r\n<!-- End add more bank  modal -->\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/add-plan-basic-subscription/add-plan-basic-subscription.component.ts":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/add-plan-basic-subscription/add-plan-basic-subscription.component.ts ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: AddPlanBasicSubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlanBasicSubscriptionComponent", function() { return AddPlanBasicSubscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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









var AddPlanBasicSubscriptionComponent = /** @class */ (function (_super) {
    __extends(AddPlanBasicSubscriptionComponent, _super);
    function AddPlanBasicSubscriptionComponent(dialog, _commonCrudService, _sharedService, dialogRef, data, _fb) {
        var _this = _super.call(this) || this;
        _this.dialog = dialog;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        // Angular Variables
        // Data Variables
        _this.planType = [];
        _this.softwareList = [];
        _this.slideActiveInactive = [];
        return _this;
    }
    AddPlanBasicSubscriptionComponent.prototype.ngOnInit = function () {
        this.initializationMethod();
    };
    /**
     * Initialization Methods
     */
    AddPlanBasicSubscriptionComponent.prototype.initializationMethod = function () {
        this.createSoftwareForm();
        this.getSoftwareList();
        this.getPlanList();
    };
    /**
     * Get Software List
     */
    AddPlanBasicSubscriptionComponent.prototype.getSoftwareList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_SUBSCRIPTION_SOFTWARE, {
            'records': 'all',
            'sortBy': 'id',
            'sortOrder': 'desc'
        }, {}).subscribe(function (response) {
            _this.softwareList = response.payload.data;
        });
    };
    /**
     * Get Plan List
     */
    AddPlanBasicSubscriptionComponent.prototype.getPlanList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_SUBSCRIPTION_PLAN, {
            'records': 'all',
            'sortBy': 'id',
            'sortOrder': 'desc'
        }, {}).subscribe(function (response) {
            _this.planType = response.payload.data;
        });
    };
    /**
     * Create Account Type Form
     */
    AddPlanBasicSubscriptionComponent.prototype.createSoftwareForm = function () {
        this.addPlanForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            software_plan: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].FLOAT_NUMBER_REGEXP)]),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    };
    /**
     * Close modal method
     */
    AddPlanBasicSubscriptionComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    /**
     * Esc event for close modal
     * @param event
     */
    AddPlanBasicSubscriptionComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onClose();
        }
    };
    /**
     * On Add or Update bank
     * @param formParams
     * @param {boolean} isValid
     * @param bankObject
     */
    AddPlanBasicSubscriptionComponent.prototype.onSoftwareSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            if (form.value['id'] > 0) {
                this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_SUBSCRIPTION_PLAN_DATA, form.value['id'], form.value).subscribe(function (Response) {
                    _this.getPlanList();
                    _this.createSoftwareForm();
                    _this.addMorePlanForm.resetForm();
                });
            }
            else {
                delete (form.value['id']);
                form.value['is_active'] = 1;
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_SUBSCRIPTION_PLAN_DATA_ADD, form.value).subscribe(function (Response) {
                    _this.getPlanList();
                    _this.createSoftwareForm();
                    _this.addMorePlanForm.resetForm();
                });
            }
        }
    };
    /**
     * On Edit PLan Type Data
     * @param planTypeData
     */
    AddPlanBasicSubscriptionComponent.prototype.onEditPlanTypeData = function (planTypeData) {
        if (planTypeData) {
            this.addPlanForm.get('parent_id').setValue(planTypeData['parent_id']['id']);
            this.addPlanForm.get('software_plan').setValue(planTypeData['software_plan']);
            this.addPlanForm.get('amount').setValue(planTypeData['amount']);
            this.addPlanForm.get('id').setValue(planTypeData['id']);
        }
    };
    /**
     *  Toggle confirmation Dialog
     */
    AddPlanBasicSubscriptionComponent.prototype.openToggleConfirmationDialog = function (event, planType, id) {
        var _this = this;
        var status = event.checked ? 'Inactive' : 'Active';
        var statusNagetive = !event.checked ? 'Inactive' : 'Active';
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"], {
            data: {
                content: 'Do you want change status from ' + status + ' to ' + statusNagetive
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this.activeInactivePlan(event.checked, planType);
            }
            else {
                if (_this.slideActiveInactive[id]) {
                    _this.slideActiveInactive[id] = false;
                }
                else {
                    _this.slideActiveInactive[id] = true;
                }
            }
        });
    };
    /**
     * Active Inactive Plan Type
     * @param action
     * @param planType
     */
    AddPlanBasicSubscriptionComponent.prototype.activeInactivePlan = function (action, planType) {
        var _this = this;
        var params = { 'is_active': action ? 1 : 0 };
        this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_SUBSCRIPTION_PLAN_DATA, planType['id'], params).subscribe(function (response) {
            _this.planType.map(function (item) {
                if (item['id'] === planType['id']) {
                    item['is_active'] = item['is_active'] ? 0 : 1;
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addMorePlanForm'),
        __metadata("design:type", Object)
    ], AddPlanBasicSubscriptionComponent.prototype, "addMorePlanForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AddPlanBasicSubscriptionComponent.prototype, "onKeydownHandler", null);
    AddPlanBasicSubscriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-plan-basic-subscription',
            template: __webpack_require__(/*! ./add-plan-basic-subscription.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/add-plan-basic-subscription/add-plan-basic-subscription.component.html")
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AddPlanBasicSubscriptionComponent);
    return AddPlanBasicSubscriptionComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/add-software-basic-subscription/add-software-basic-subscription.component.html":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/add-software-basic-subscription/add-software-basic-subscription.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start add more bank modal -->\r\n<div class=\"modal large-modal bank-dialog\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Add More Software</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <form [formGroup]=\"addSoftwareForm\" #addMoreSoftwareForm=\"ngForm\" (submit)=\"onSoftwareSubmit(addSoftwareForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 PL-0\">\r\n          <mat-form-field>\r\n            <input formControlName=\"software_plan\" matInput type=\"text\" placeholder=\"Software\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSoftwareForm.get('software_plan'))\"\r\n                            [errMsg]=\"validationMsg.SOFTWARE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 MT-5\">\r\n          <button [disabled]=\"addSoftwareForm.invalid\" class=\"btn-primary\" type=\"submit\">Save</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"table-container dialog-table-container MT-10\">\r\n      <div class=\"table-block\">\r\n        <!--\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 PL-0\">\r\n            <div class=\"position-relative search-bank-information\">\r\n              <i class=\"material-icons\">search</i>\r\n              <input placeholder=\"Search\" type=\"text\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-8 PR-0\">\r\n          </div>\r\n        </div>-->\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"10%\">Sr. no.</th>\r\n            <th width=\"30%\">Software</th>\r\n            <th width=\"20%\">Modified by</th>\r\n            <th width=\"20%\">Modified on</th>\r\n            <th width=\"20%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n          <tr *ngFor=\"let softwaretype of softwareList; let i = index\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{softwaretype?.software_plan}}\r\n              <!--<input type=\"text\" />-->\r\n            </td>\r\n            <td>{{softwaretype?.modified_by?.modified_by}}</td>\r\n            <td>{{softwaretype?.modified_on | date : 'dd-MM-yyyy HH:mm:ss'}}</td>\r\n            <td>\r\n              <a class=\"orange-color ML-10 MR-10\" [matTooltip]=\"'Edit'\" (click)=\"onEditSoftwareData(softwaretype)\">\r\n                <mat-icon class=\"material-icons\">edit</mat-icon>\r\n              </a>\r\n              <mat-slide-toggle *ngIf=\"slideActiveInactive[i]\" [(ngModel)]=\"slideActiveInactive[i]\"\r\n                                (change)=\"openToggleConfirmationDialog($event, softwaretype, i)\"></mat-slide-toggle>\r\n              <mat-slide-toggle *ngIf=\"!slideActiveInactive[i]\" [checked]=\"(softwaretype['is_active']) ? true : false\"\r\n                                (change)=\"openToggleConfirmationDialog($event, softwaretype, i)\"></mat-slide-toggle>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-layer\" (click)=\"onClose()\"></div>\r\n<!-- End add more bank  modal -->\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/add-software-basic-subscription/add-software-basic-subscription.component.ts":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/add-software-basic-subscription/add-software-basic-subscription.component.ts ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: AddSoftwareBasicSubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSoftwareBasicSubscriptionComponent", function() { return AddSoftwareBasicSubscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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









var AddSoftwareBasicSubscriptionComponent = /** @class */ (function (_super) {
    __extends(AddSoftwareBasicSubscriptionComponent, _super);
    function AddSoftwareBasicSubscriptionComponent(dialog, dialogRef, _commonCrudService, _sharedService, data, _fb) {
        var _this = _super.call(this) || this;
        _this.dialog = dialog;
        _this.dialogRef = dialogRef;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this.data = data;
        _this._fb = _fb;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        // Angular Variables
        // Data Variables
        _this.softwareList = [];
        _this.slideActiveInactive = [];
        return _this;
    }
    AddSoftwareBasicSubscriptionComponent.prototype.ngOnInit = function () {
        this.initializationMethod();
    };
    /**
     * Initialization Methods
     */
    AddSoftwareBasicSubscriptionComponent.prototype.initializationMethod = function () {
        this.createSoftwareForm();
        this.getSoftwareList();
    };
    /**
     * Get Software List
     */
    AddSoftwareBasicSubscriptionComponent.prototype.getSoftwareList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_SUBSCRIPTION_SOFTWARE, {
            'records': 'all',
            'sortBy': 'id',
            'sortOrder': 'desc'
        }, {}).subscribe(function (response) {
            _this.softwareList = response.payload.data;
        });
    };
    /**
     * Create Account Type Form
     */
    AddSoftwareBasicSubscriptionComponent.prototype.createSoftwareForm = function () {
        this.addSoftwareForm = this._fb.group({
            software_plan: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    /**
     * Close modal method
     */
    AddSoftwareBasicSubscriptionComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    /**
     * Esc event for close modal
     * @param event
     */
    AddSoftwareBasicSubscriptionComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onClose();
        }
    };
    /**
     * On Add or Update bank
     * @param formParams
     * @param {boolean} isValid
     * @param bankObject
     */
    AddSoftwareBasicSubscriptionComponent.prototype.onSoftwareSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            if (form.value['id'] > 0) {
                this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_SUBSCRIPTION_SOFTWARE_DATA, form.value['id'], form.value).subscribe(function (Response) {
                    _this.getSoftwareList();
                    _this.createSoftwareForm();
                    _this.addMoreSoftwareForm.resetForm();
                });
            }
            else {
                delete (form.value['id']);
                form.value['is_active'] = 1;
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_SUBSCRIPTION_SOFTWARE_DATA_ADD, form.value).subscribe(function (Response) {
                    _this.getSoftwareList();
                    _this.createSoftwareForm();
                    _this.addMoreSoftwareForm.resetForm();
                });
            }
        }
    };
    /**
     * On Edit Software Data
     * @param softwareData
     */
    AddSoftwareBasicSubscriptionComponent.prototype.onEditSoftwareData = function (softwareData) {
        if (softwareData) {
            this.addSoftwareForm.get('software_plan').setValue(softwareData['software_plan']);
            this.addSoftwareForm.get('id').setValue(softwareData['id']);
        }
    };
    /**
     *  Toggle confirmation Dialog
     */
    AddSoftwareBasicSubscriptionComponent.prototype.openToggleConfirmationDialog = function (event, softwareType, id) {
        var _this = this;
        var status = event.checked ? 'Inactive' : 'Active';
        var statusNagetive = !event.checked ? 'Inactive' : 'Active';
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmationDialogComponent"], {
            data: {
                content: 'Do you want change status from ' + status + ' to ' + statusNagetive
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this.activeInactiveSoftware(event.checked, softwareType);
            }
            else {
                if (_this.slideActiveInactive[id]) {
                    _this.slideActiveInactive[id] = false;
                }
                else {
                    _this.slideActiveInactive[id] = true;
                }
            }
        });
    };
    /**
     * Active Inactive Software Type
     * @param action
     * @param softwareType
     */
    AddSoftwareBasicSubscriptionComponent.prototype.activeInactiveSoftware = function (action, softwareType) {
        var _this = this;
        var params = { 'is_active': action ? 1 : 0 };
        this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_SUBSCRIPTION_SOFTWARE_DATA, softwareType['id'], params).subscribe(function (response) {
            _this.softwareList.map(function (item) {
                if (item['id'] === softwareType['id']) {
                    item['is_active'] = item['is_active'] ? 0 : 1;
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addMoreSoftwareForm'),
        __metadata("design:type", Object)
    ], AddSoftwareBasicSubscriptionComponent.prototype, "addMoreSoftwareForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AddSoftwareBasicSubscriptionComponent.prototype, "onKeydownHandler", null);
    AddSoftwareBasicSubscriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-software-basic-subscription',
            template: __webpack_require__(/*! ./add-software-basic-subscription.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/add-software-basic-subscription/add-software-basic-subscription.component.html")
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddSoftwareBasicSubscriptionComponent);
    return AddSoftwareBasicSubscriptionComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/subscription-services.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/subscription-services.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bookkeeping-basic-container\" *ngIf=\"isEdit\">\r\n  <span class=\"panel-title\">Subscription Basic</span>\r\n  <form [formGroup]=\"subscriptionbasicForm\" (submit)=\"onSubmitSubscriptionInfo(subscriptionbasicForm)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"frequency_id\" placeholder=\"Invoice frequency\" required\r\n                      (selectionChange)=\"changeGetRecurringList(serviceInfo['service_id'], 1, $event.value)\">\r\n            <mat-option *ngFor=\"let frequency of frequencyList\" [value]=\"frequency?.id\">\r\n              {{ frequency?.frequency_name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(subscriptionbasicForm.get('frequency_id'))\"\r\n                          [errMsg]=\"validationMsg.INVOICE_FREQUENCY_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-11 PL-0\">\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"software_id\" placeholder=\"Software\" required\r\n                          (selectionChange)=\"onChangeSoftware($event.value)\">\r\n                <mat-option *ngFor=\"let software of softwareList\" [value]=\"software?.id\">\r\n                  {{ software?.software_plan}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"validation-msg\">\r\n              <app-validation *ngIf=\"isRequiredField(subscriptionbasicForm.get('software_id'))\"\r\n                              [errMsg]=\"validationMsg.SOFTWARE_REQUIRED\"></app-validation>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-1 PL-0 PR-0 MT-15\">\r\n            <a class=\"cursor-pointer orange-color\" (click)=\"onAddSoftware()\">\r\n              <mat-icon class=\"material-icons\">add</mat-icon>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-11 PL-0\">\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"plan_id\" placeholder=\"Plan\" required\r\n                          (selectionChange)=\"updatePlanDetails($event.value)\">\r\n                <mat-option *ngFor=\"let plan of planList\" [value]=\"plan?.id\">\r\n                  {{ plan?.software_plan}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"validation-msg\">\r\n              <app-validation *ngIf=\"isRequiredField(subscriptionbasicForm.get('plan_id'))\"\r\n                              [errMsg]=\"validationMsg.PLAN_REQUIRED\"></app-validation>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-1 PL-0 PR-0 MT-15\">\r\n            <a class=\"cursor-pointer orange-color\" (click)=\"onAddPlan()\">\r\n              <mat-icon class=\"material-icons\">add</mat-icon>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Discount (%)\" formControlName=\"discount\"\r\n                 (change)=\"updateFixedFee($event.target.value)\"/>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isValidField(subscriptionbasicForm.get('discount'))\"\r\n                          [errMsg]=\"validationMsg.DISCOUNT_VALID\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Standard fee\" formControlName=\"standard_fee\" readonly/>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Fixed fee\" formControlName=\"fixed_fee\" required *ngIf=\"isFixedFeeReadOnly\"\r\n                 readonly/>\r\n          <input matInput placeholder=\"Fixed fee\" formControlName=\"fixed_fee\" required *ngIf=\"!isFixedFeeReadOnly\"/>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(subscriptionbasicForm.get('fixed_fee'))\"\r\n                          [errMsg]=\"validationMsg.FIXED_FEE_REQUIRED\"></app-validation>\r\n        </div>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isValidField(subscriptionbasicForm.get('fixed_fee'))\"\r\n                          [errMsg]=\"validationMsg.FIXED_FEE_VALID\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <input matInput readonly placeholder=\"FF start date\" [matDatepicker]=\"startDateRef\" readonly\r\n                 formControlName=\"ff_start_date\"\r\n                 (mousedown)=\"startDateRef.open()\" required/>\r\n          <mat-datepicker-toggle matSuffix [for]=\"startDateRef\"></mat-datepicker-toggle>\r\n          <mat-datepicker #startDateRef disabled=\"false\"></mat-datepicker>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(subscriptionbasicForm.get('ff_start_date'))\"\r\n                          [errMsg]=\"validationMsg.DATE_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"recurring_id\" placeholder=\"Recurring\"\r\n                      (selectionChange)=\"changeAutoInvoice($event.value)\">\r\n            <mat-option value=\"\">Please Select</mat-option>\r\n            <mat-option *ngFor=\"let recurring of recurringList\" [value]=\"recurring?.id\">\r\n              {{ recurring?.recurring_name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"auto_invoice\" placeholder=\"Auto invoice\" required\r\n                      (selectionChange)=\"changeAutoInvoiceType($event.value)\">\r\n            <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n              {{ yesNo?.label}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(subscriptionbasicForm.get('auto_invoice'))\"\r\n                          [errMsg]=\"validationMsg.AUTO_INVOICE_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-8\">\r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"Subscription  Notes\" formControlName=\"notes\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 text-right MTB-20\">\r\n        <button type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n        <button [disabled]=\"subscriptionbasicForm.invalid\" type=\"submit\" class=\"btn-primary\">Save</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n<div class=\"view-billing-info-container\" *ngIf=\"!isEdit\">\r\n  <div class=\"basic-details-border\">\r\n    <span class=\"panel-title\">Subscription Basic</span>\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 label-span-color\">\r\n          <div>\r\n            <label>Invoice frequency</label>\r\n            <span>{{getFrequencyName(subscriptionData?.frequency_id)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Plan</label>\r\n            <span>{{getPlanName(subscriptionData?.plan_id)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Standard Fee</label>\r\n            <span>{{subscriptionData?.standard_fee}}</span>\r\n          </div>\r\n          <div>\r\n            <label>FF Start Date</label>\r\n            <span>{{(subscriptionData?.ff_start_date !== '' && subscriptionData?.ff_start_date !== '0000-00-00') ? (subscriptionData?.ff_start_date | date: 'dd-MM-yyyy') : ''}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Auto Invoice</label>\r\n            <span>{{getYesNoStatus(subscriptionData?.auto_invoice)}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 label-span-color\">\r\n          <div>\r\n            <label>Software</label>\r\n            <span>{{getSoftwareName(subscriptionData?.software_id)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Discount</label>\r\n            <span>{{subscriptionData?.discount}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Fixed Fee</label>\r\n            <span>{{subscriptionData?.fixed_fee}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Recurring</label>\r\n            <span>{{getRecurringName(subscriptionData?.recurring_id)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Notes</label>\r\n            <span>{{subscriptionData?.notes}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/subscription-services.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/subscription-services.component.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2JpbGxpbmctaW5mb3JtYXRpb24vYmlsbGluZy1pbmZvLXNlcnZpY2VzL3N1YnNjcmlwdGlvbi1zZXJ2aWNlcy9zdWJzY3JpcHRpb24tc2VydmljZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/subscription-services.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/subscription-services.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: SubscriptionServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionServicesComponent", function() { return SubscriptionServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/pipe/noComma.pipe */ "./src/utility/pipe/noComma.pipe.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _add_software_basic_subscription_add_software_basic_subscription_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-software-basic-subscription/add-software-basic-subscription.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/add-software-basic-subscription/add-software-basic-subscription.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_plan_basic_subscription_add_plan_basic_subscription_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-plan-basic-subscription/add-plan-basic-subscription.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/add-plan-basic-subscription/add-plan-basic-subscription.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var SubscriptionServicesComponent = /** @class */ (function (_super) {
    __extends(SubscriptionServicesComponent, _super);
    function SubscriptionServicesComponent(_decimalPipe, _noCommaPipe, _router, _fb, _commonCrudService, _sharedService, dialog) {
        var _this = _super.call(this) || this;
        _this._decimalPipe = _decimalPipe;
        _this._noCommaPipe = _noCommaPipe;
        _this._router = _router;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this.dialog = dialog;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_1__["ValidationConstantMessage"]();
        _this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["yesNo"];
        _this.planList = [];
        _this.planListAll = [];
        _this.softwareList = [];
        _this.frequencyList = [];
        _this.recurringList = [];
        _this.isFixedFeeReadOnly = true;
        return _this;
    }
    SubscriptionServicesComponent.prototype.ngOnInit = function () {
        this.getPlanList();
        this.getFrequency();
        this.getServiceBasicInfo();
        this.createSubscriptionBasicForm();
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BILLING_SERVICES_HISTORY + '/' + this.billingInformation.entity_id,
            params: { 'service_id': this.serviceInfo['service_id'] },
        };
        this._sharedService.setHistoryURL(value);
    };
    /**
     * On Change Frequency Get Recurring List
     * @param service_id
     * @param inc_in_ff
     * @param frequency_id
     */
    SubscriptionServicesComponent.prototype.changeGetRecurringList = function (service_id, inc_in_ff, frequency_id) {
        var _this = this;
        this.recurringList = [];
        var params = {};
        params['service_id'] = service_id;
        params['inc_in_ff'] = inc_in_ff;
        params['frequency_id'] = frequency_id;
        if (params) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BILLING_RECURRING_LIST, params, {}).subscribe(function (response) {
                _this.recurringList = response.payload.data;
            });
        }
    };
    /**
     * Get Service Basic Information
     */
    SubscriptionServicesComponent.prototype.getServiceBasicInfo = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BILLING_SUBSCRIPTION, this.billingInformation.entity_id, {}).subscribe(function (response) {
            _this.subscriptionData = response.payload.data;
            _this.createSubscriptionBasicForm();
            if (_this.subscriptionData) {
                if (_this.subscriptionData.software_id > 0) {
                    _this.onChangeSoftware(_this.subscriptionData.software_id, 1);
                }
                if (_this.subscriptionData.plan_id > 0) {
                    _this.updatePlanDetails(_this.subscriptionData.plan_id);
                }
                if (_this.subscriptionData.frequency_id > 0) {
                    _this.changeGetRecurringList(_this.serviceInfo['service_id'], 1, _this.subscriptionData.frequency_id);
                }
                _this.changeAutoInvoice(_this.subscriptionData.recurring_id);
            }
        });
    };
    /**
     * Get Frequency List
     */
    SubscriptionServicesComponent.prototype.getFrequency = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].FREQUENCY, {}, {}).subscribe(function (response) {
            if (response) {
                _this.frequencyList = response.payload.data;
            }
        });
    };
    /**
     * Get Subscription Plan List
     */
    SubscriptionServicesComponent.prototype.getPlanList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BILLING_SUBSCRIPTION_PLAN, { 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.planListAll = response.payload.data;
        });
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BILLING_SUBSCRIPTION_SOFTWARE, { 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.softwareList = response.payload.data;
        });
    };
    /**
     * On Change Software get plan list
     * @param software_id
     */
    SubscriptionServicesComponent.prototype.onChangeSoftware = function (software_id, type) {
        if (type === void 0) { type = 0; }
        this.planList = [];
        this.subscriptionbasicForm.get('plan_id').setValue(null);
        if (software_id > 0) {
            this.planList = this.planListAll.filter(function (item) { return item.parent_id.id === software_id; });
        }
        if (this.subscriptionData && type === 1) {
            this.subscriptionbasicForm.get('plan_id').setValue(this.subscriptionData.plan_id);
        }
    };
    /**
     * On Change Plan Update Plan Information
     * @param plan_id
     */
    SubscriptionServicesComponent.prototype.updatePlanDetails = function (plan_id) {
        if (plan_id > 0) {
            var planData = this.planList.filter(function (item) { return item.id === plan_id; });
            if (planData.length) {
                var discount = Number(this.subscriptionbasicForm.get('discount').value);
                var standard_fee = Number(planData[0]['amount']);
                this.updateFixedFee(discount, standard_fee);
            }
        }
    };
    /**
     * On Change Plan Discount Amount Update Fixed Fee
     * @param discount
     */
    SubscriptionServicesComponent.prototype.updateFixedFee = function (discountPercentage, standardFees) {
        if (discountPercentage > 0) {
            var standard_fee = (standardFees) ? standardFees : this.subscriptionbasicForm.get('standard_fee').value;
            var fixed_fee = this.subscriptionbasicForm.get('fixed_fee').value;
            var discount_amount = (discountPercentage > 0) ? standard_fee * discountPercentage / _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PERCENTAGE_RATIO : 0;
            fixed_fee = standard_fee - discount_amount;
            this.subscriptionbasicForm.get('standard_fee').setValue(this._noCommaPipe.transform(this._decimalPipe.transform(standard_fee, '1.2-2')));
            this.subscriptionbasicForm.get('fixed_fee').setValue(this._noCommaPipe.transform(this._decimalPipe.transform(fixed_fee, '1.2-2')));
            this.isFixedFeeReadOnly = true;
        }
        else {
            var standard_fee = (standardFees) ? standardFees : this.subscriptionbasicForm.get('standard_fee').value;
            this.subscriptionbasicForm.get('standard_fee').setValue(this._noCommaPipe.transform(this._decimalPipe.transform(standard_fee, '1.2-2')));
            this.subscriptionbasicForm.get('fixed_fee').setValue(this._noCommaPipe.transform(this._decimalPipe.transform(standard_fee, '1.2-2')));
            this.isFixedFeeReadOnly = false;
        }
    };
    /**
     * Change Auto Invoice Status
     * @param recurring_id
     */
    SubscriptionServicesComponent.prototype.changeAutoInvoice = function (recurring_id) {
        if (recurring_id === '') {
            this.subscriptionbasicForm.get('auto_invoice').setValue(null);
            this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["ToastType"].ERROR);
        }
    };
    /**
     * Change Auto Invoice Status
     * @param recurring_id
     */
    SubscriptionServicesComponent.prototype.changeAutoInvoiceType = function (value) {
        var _this = this;
        if (value) {
            var recurring_id = this.subscriptionbasicForm.get('recurring_id').value;
            if (recurring_id === '') {
                this.subscriptionbasicForm.get('auto_invoice').setValue(null);
                this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["ToastType"].ERROR);
            }
            // this will check releated entity
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BILLING_BASIC_VIEW, this.billingInformation.entity_id).subscribe(function (response) {
                var DataItem = response.payload.data[_this.billingInformation.entity_id];
                // console.log( DataItem);
                if (DataItem['is_related'] === 1 || DataItem['to_email'] === '' || DataItem['contact_person'] === '') {
                    _this.subscriptionbasicForm.get('auto_invoice').setValue(null);
                    _this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["ToastErrorMessages"].CAN_NO_SEND_AUTO_INVOICE_TO_RELATED, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["ToastType"].ERROR);
                }
            });
        }
    };
    /**
     * Create Bookkeping basic form
     */
    SubscriptionServicesComponent.prototype.createSubscriptionBasicForm = function () {
        this.subscriptionbasicForm = this._fb.group({
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.subscriptionData) ? this.subscriptionData.frequency_id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            software_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.subscriptionData) ? this.subscriptionData.software_id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            plan_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.subscriptionData) ? this.subscriptionData.plan_id : null),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.subscriptionData) ? this.subscriptionData.discount : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["CommonRegex"].FLOAT_NUMBER_REGEXP)]),
            standard_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.subscriptionData) ? this.subscriptionData.standard_fee : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
            fixed_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.subscriptionData) ? this.subscriptionData.fixed_fee : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
            ff_start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.subscriptionData) ? this.subscriptionData.ff_start_date : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            recurring_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.subscriptionData) ? this.subscriptionData.recurring_id : null),
            auto_invoice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.subscriptionData) ? this.subscriptionData.auto_invoice : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.subscriptionData) ? this.subscriptionData.notes : null),
        });
    };
    /**
     * On Submit Subscription Info
     * @param form
     */
    SubscriptionServicesComponent.prototype.onSubmitSubscriptionInfo = function (form) {
        if (form.valid) {
            if (form.value['ff_start_date']) {
                form.value['ff_start_date'] = moment__WEBPACK_IMPORTED_MODULE_12__(form.value['ff_start_date']).format('YYYY-MM-DD');
            }
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BILLING_SUBSCRIPTION, this.billingInformation.entity_id, form.value).subscribe(function (response) {
            });
        }
    };
    SubscriptionServicesComponent.prototype.onAddSoftware = function () {
        var dialogRef = this.dialog.open(_add_software_basic_subscription_add_software_basic_subscription_component__WEBPACK_IMPORTED_MODULE_13__["AddSoftwareBasicSubscriptionComponent"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    SubscriptionServicesComponent.prototype.onAddPlan = function () {
        var dialogRef = this.dialog.open(_add_plan_basic_subscription_add_plan_basic_subscription_component__WEBPACK_IMPORTED_MODULE_15__["AddPlanBasicSubscriptionComponent"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    SubscriptionServicesComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Frequency List
     * @param {number} id
     * @returns {string}
     */
    SubscriptionServicesComponent.prototype.getFrequencyName = function (id) {
        var val = this.frequencyList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].frequency_name : '';
    };
    /**
     * Display Get Recurring List
     * @param {number} id
     * @returns {string}
     */
    SubscriptionServicesComponent.prototype.getRecurringName = function (id) {
        var val = this.recurringList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].recurring_name : '';
    };
    /**
     * Display Get Software List
     * @param {number} id
     * @returns {string}
     */
    SubscriptionServicesComponent.prototype.getSoftwareName = function (id) {
        var val = this.softwareList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].software_plan : '';
    };
    /**
     * Display Get Software List
     * @param {number} id
     * @returns {string}
     */
    SubscriptionServicesComponent.prototype.getPlanName = function (id) {
        var val = this.planList.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].software_plan : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_9__["BillingBasic"])
    ], SubscriptionServicesComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SubscriptionServicesComponent.prototype, "serviceInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SubscriptionServicesComponent.prototype, "isEdit", void 0);
    SubscriptionServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscription-services',
            template: __webpack_require__(/*! ./subscription-services.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/subscription-services.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_11__["NoCommaPipe"]],
            styles: [__webpack_require__(/*! ./subscription-services.component.scss */ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/subscription-services.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_11__["NoCommaPipe"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]])
    ], SubscriptionServicesComponent);
    return SubscriptionServicesComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/subscription-services.module.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/subscription-services.module.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: SubscriptionServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionServicesModule", function() { return SubscriptionServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _subscription_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription-services.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/subscription-services.component.ts");
/* harmony import */ var _add_software_basic_subscription_add_software_basic_subscription_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-software-basic-subscription/add-software-basic-subscription.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/add-software-basic-subscription/add-software-basic-subscription.component.ts");
/* harmony import */ var _add_plan_basic_subscription_add_plan_basic_subscription_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-plan-basic-subscription/add-plan-basic-subscription.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/subscription-services/add-plan-basic-subscription/add-plan-basic-subscription.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SubscriptionServicesModule = /** @class */ (function () {
    function SubscriptionServicesModule() {
    }
    SubscriptionServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__["UtilityModule"]
            ],
            declarations: [_subscription_services_component__WEBPACK_IMPORTED_MODULE_3__["SubscriptionServicesComponent"], _add_software_basic_subscription_add_software_basic_subscription_component__WEBPACK_IMPORTED_MODULE_4__["AddSoftwareBasicSubscriptionComponent"], _add_plan_basic_subscription_add_plan_basic_subscription_component__WEBPACK_IMPORTED_MODULE_5__["AddPlanBasicSubscriptionComponent"]],
            exports: [_subscription_services_component__WEBPACK_IMPORTED_MODULE_3__["SubscriptionServicesComponent"]],
            entryComponents: [_add_software_basic_subscription_add_software_basic_subscription_component__WEBPACK_IMPORTED_MODULE_4__["AddSoftwareBasicSubscriptionComponent"], _add_plan_basic_subscription_add_plan_basic_subscription_component__WEBPACK_IMPORTED_MODULE_5__["AddPlanBasicSubscriptionComponent"]]
        })
    ], SubscriptionServicesModule);
    return SubscriptionServicesModule;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-basic-dialog/taxation-basic-dialog.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-basic-dialog/taxation-basic-dialog.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Sub Client List dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">ADD TAX CHARGE</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addtaxationbasicchargeForm\"\r\n        (submit)=\"onSubmitAddTaxationbasicChargeForm(addtaxationbasicchargeForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Year\" formControlName=\"year\" required>\r\n              <mat-option *ngFor=\"let year of yearList\" [value]=\"year.slice(5)\">{{year.slice(5)}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addtaxationbasicchargeForm.get('year'))\"\r\n                            [errMsg]=\"validationMsg.YEAR_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Amount\" formControlName=\"amount\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addtaxationbasicchargeForm.get('amount'))\"\r\n                            [errMsg]=\"validationMsg.AMOUNT_REQUIRED\"></app-validation>\r\n          </div>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addtaxationbasicchargeForm.get('amount'))\"\r\n                            [errMsg]=\"validationMsg.AMOUNT_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Option\" formControlName=\"option\">\r\n              <mat-option *ngFor=\"let taxList of taxConditionList\" [value]=\"taxList?.key\">{{taxList?.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addtaxationbasicchargeForm.get('option'))\"\r\n                            [errMsg]=\"validationMsg.OPTION_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Turnover\" formControlName=\"turnover\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addtaxationbasicchargeForm.get('turnover'))\"\r\n                            [errMsg]=\"validationMsg.TURNOVER_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Notes\" formControlName=\"notes\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 PR-25 text-right\">\r\n          <button class=\"btn-primary\" [disabled]=\"addtaxationbasicchargeForm.invalid\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change Sub client list dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-basic-dialog/taxation-basic-dialog.component.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-basic-dialog/taxation-basic-dialog.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: TaxationBasicDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxationBasicDialogComponent", function() { return TaxationBasicDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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








var TaxationBasicDialogComponent = /** @class */ (function (_super) {
    __extends(TaxationBasicDialogComponent, _super);
    function TaxationBasicDialogComponent(dialogRef, data, _fb, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.yearList = [];
        _this.taxConditionList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["taxCondition"];
        _this.entity_id = 0;
        return _this;
    }
    TaxationBasicDialogComponent.prototype.ngOnInit = function () {
        this.entity_id = (this.data.billingInformationData) ? this.data.billingInformationData.entity_id : 0;
        this.getYearList();
        this.createAddTaxationbasicChargeForm();
    };
    /**
     * Get Year List
     */
    TaxationBasicDialogComponent.prototype.getYearList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].CLIENT_TURNOVER_YEAR_DATA, {}, {})
            .subscribe(function (response) {
            _this.yearList = response['payload']['data'];
        });
    };
    /**
     * Create Add Taxation Charges Form
     */
    TaxationBasicDialogComponent.prototype.createAddTaxationbasicChargeForm = function () {
        this.addtaxationbasicchargeForm = this._fb.group({
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
            option: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            turnover: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    /**
     * Add Taxation Basic Charge Form
     * @param form
     */
    TaxationBasicDialogComponent.prototype.onSubmitAddTaxationbasicChargeForm = function (form) {
        var _this = this;
        if (form.valid) {
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].BILLING_TAXATION_TURNOVER + '/' + this.entity_id, form.value).subscribe(function (response) {
                _this.onClose();
            });
        }
    };
    /**
     * Close Dialog
     */
    TaxationBasicDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    TaxationBasicDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taxation-basic-dialog',
            template: __webpack_require__(/*! ./taxation-basic-dialog.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-basic-dialog/taxation-basic-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]])
    ], TaxationBasicDialogComponent);
    return TaxationBasicDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-services.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-services.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bookkeeping-basic-container\" *ngIf=\"isEdit\">\r\n  <span class=\"panel-title\">Taxation Basic</span>\r\n  <form [formGroup]=\"taxationbasicForm\" (submit)=\"onSubmitTaxationInfo(taxationbasicForm)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 MT-10\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Rate Per Hour\" formControlName=\"ff_rph\" required/>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(taxationbasicForm.get('ff_rph'))\"\r\n                          [errMsg]=\"validationMsg.RATE_PER_HOUR_REQUIRED\"></app-validation>\r\n        </div>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isValidField(taxationbasicForm.get('ff_rph'))\"\r\n                          [errMsg]=\"validationMsg.RATE_PER_HOUR_VALID\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-8\">\r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"Tax Notes\" formControlName=\"notes\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-12 MT-20 ng-star-inserted\">\r\n      <div class=\"table-container\">\r\n        <div class=\"table-block\">\r\n          <table class=\"table PT-0\">\r\n            <thead>\r\n            <button type=\"button\" class=\"open-dialog-btn ML-10 MB-10\" (click)=\"onAddTaxationBasicCharge()\">\r\n              <mat-icon class=\"material-icons\">add</mat-icon>\r\n              Add Tax Charges\r\n            </button>\r\n            <tr>\r\n              <th width=\"15%\">Year</th>\r\n              <th width=\"15%\">Amount</th>\r\n              <th width=\"15%\">Option</th>\r\n              <th width=\"15%\">Turnover</th>\r\n              <th width=\"30%\">Notes</th>\r\n              <th width=\"10%\">Action</th>\r\n            </tr>\r\n            </thead>\r\n\r\n            <tbody *ngIf=\"taxationTurnoverData.length\">\r\n            <tr *ngFor=\"let turnoverData of taxationTurnoverData; let i = index\">\r\n              <td width=\"15%\">{{turnoverData?.tax_year}}</td>\r\n              <td width=\"15%\">{{turnoverData?.tax_amount}}</td>\r\n              <td width=\"15%\">{{turnoverData?.tax_condition}}</td>\r\n              <td width=\"15%\">{{turnoverData?.turnover}}</td>\r\n              <td width=\"30%\">{{turnoverData?.notes}}</td>\r\n              <td width=\"10%\"><a (click)=\"onTaxationBasicConfirmationDialog(turnoverData)\">\r\n                <mat-icon class=\"red-color\">delete</mat-icon>\r\n              </a></td>\r\n            </tr>\r\n            </tbody>\r\n            <tbody *ngIf=\"taxationTurnoverData.length === 0\">\r\n            <tr>\r\n              <td colspan=\"6\">\r\n                <p class=\"orange-color\">No Records Found!</p>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-12 text-right MTB-20\">\r\n      <button type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n      <button [disabled]=\"taxationbasicForm.invalid\" type=\"submit\" class=\"btn-primary\">Submit</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"view-billing-info-container\" *ngIf=\"!isEdit\">\r\n  <div class=\"basic-details-border\">\r\n    <span class=\"panel-title\">Hosting Basic</span>\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 label-span-color\">\r\n          <div class=\"col-md-6\">\r\n            <label>Rate Per Hour</label>\r\n            <span>{{taxationData?.ff_rph}}</span>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <label>Note</label>\r\n            <span>{{taxationData?.notes}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"col-md-12 MTB-20 ng-star-inserted\" *ngIf=\"taxationTurnoverData.length\">\r\n      <div class=\"table-container\">\r\n        <div class=\"table-block\">\r\n          <table class=\"table PT-0\">\r\n            <thead>\r\n            <tr>\r\n              <th width=\"15%\">Year</th>\r\n              <th width=\"15%\">Amount</th>\r\n              <th width=\"15%\">Option</th>\r\n              <th width=\"15%\">Turnover</th>\r\n              <th width=\"30%\">Notes</th>\r\n            </tr>\r\n            </thead>\r\n\r\n            <tbody>\r\n            <tr *ngFor=\"let turnoverData of taxationTurnoverData; let i = index\">\r\n              <td width=\"15%\">{{turnoverData?.tax_year}}</td>\r\n              <td width=\"15%\">{{turnoverData?.tax_amount}}</td>\r\n              <td width=\"15%\">{{turnoverData?.tax_condition}}</td>\r\n              <td width=\"15%\">{{turnoverData?.turnover}}</td>\r\n              <td width=\"30%\">{{turnoverData?.notes}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-services.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-services.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2JpbGxpbmctaW5mb3JtYXRpb24vYmlsbGluZy1pbmZvLXNlcnZpY2VzL3RheGF0aW9uLXNlcnZpY2VzL3RheGF0aW9uLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-services.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-services.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: TaxationServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxationServicesComponent", function() { return TaxationServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _taxation_basic_dialog_taxation_basic_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taxation-basic-dialog/taxation-basic-dialog.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-basic-dialog/taxation-basic-dialog.component.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/pipe/noComma.pipe */ "./src/utility/pipe/noComma.pipe.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var TaxationServicesComponent = /** @class */ (function (_super) {
    __extends(TaxationServicesComponent, _super);
    function TaxationServicesComponent(_router, _fb, dialog, _decimalPipe, _noCommaPipe, _commonCrudService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this._decimalPipe = _decimalPipe;
        _this._noCommaPipe = _noCommaPipe;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_6__["ValidationConstantMessage"]();
        // Data Variables
        _this.taxationTurnoverData = [];
        return _this;
    }
    TaxationServicesComponent.prototype.ngOnInit = function () {
        this.createTaxationBasicForm();
        this.initializationMethod();
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].BILLING_SERVICES_HISTORY + '/' + this.billingInformation.entity_id,
            params: { 'service_id': this.serviceInfo['service_id'] },
        };
        this._sharedService.setHistoryURL(value);
    };
    /**
     * Initialization Methods
     */
    TaxationServicesComponent.prototype.initializationMethod = function () {
        this.getBasicTaxCharges();
        this.getServiceBasicInfo();
    };
    /**
     * Get Service Basic Information
     */
    TaxationServicesComponent.prototype.getServiceBasicInfo = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].BILLING_TAXATION, this.billingInformation.entity_id, {}).subscribe(function (response) {
            _this.taxationData = response.payload.data;
            _this.createTaxationBasicForm();
        });
    };
    /**
     * Get Tax Charges
     */
    TaxationServicesComponent.prototype.getBasicTaxCharges = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].BILLING_TAXATION_TURNOVER + '/' + this.billingInformation.entity_id, {}, { 'compare': { 'notequal': { 'is_deleted': 1 } } }).subscribe(function (response) {
            _this.taxationTurnoverData = response.payload.data;
        });
    };
    /**
     * Create Basic Form
     */
    TaxationServicesComponent.prototype.createTaxationBasicForm = function () {
        this.taxationbasicForm = this._fb.group({
            ff_rph: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.taxationData) ? this.taxationData.ff_rph : _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_14__["BASE"].TAX_DEFAULT_RPH, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_6__["CommonRegex"].FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.taxationData) ? this.taxationData.notes : '')
        });
    };
    /**
     * Delete open confirmation modal
     * @param taxTurnOver
     */
    TaxationServicesComponent.prototype.onTaxationBasicConfirmationDialog = function (taxTurnOver) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this charges?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].BILLING_TAXATION_TURNOVER, taxTurnOver.id).subscribe(function (Response) {
                    _this.getBasicTaxCharges();
                });
            }
        });
    };
    /**
     * Popup Open On Add Taxation Charges Add
     */
    TaxationServicesComponent.prototype.onAddTaxationBasicCharge = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_taxation_basic_dialog_taxation_basic_dialog_component__WEBPACK_IMPORTED_MODULE_4__["TaxationBasicDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                billingInformationData: this.billingInformation
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getBasicTaxCharges();
        });
    };
    /**
     * On Submit Taxation Info
     * @param form
     */
    TaxationServicesComponent.prototype.onSubmitTaxationInfo = function (form) {
        if (form.valid) {
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].BILLING_TAXATION, this.billingInformation.entity_id, form.value).subscribe(function (response) {
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_8__["BillingBasic"])
    ], TaxationServicesComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaxationServicesComponent.prototype, "serviceInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaxationServicesComponent.prototype, "isEdit", void 0);
    TaxationServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taxation-services',
            template: __webpack_require__(/*! ./taxation-services.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-services.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_10__["NoCommaPipe"]],
            styles: [__webpack_require__(/*! ./taxation-services.component.scss */ "./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-services.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_10__["NoCommaPipe"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_11__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"]])
    ], TaxationServicesComponent);
    return TaxationServicesComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-services.module.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-services.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: TaxationServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxationServicesModule", function() { return TaxationServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _taxation_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taxation-services.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-services.component.ts");
/* harmony import */ var _taxation_basic_dialog_taxation_basic_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taxation-basic-dialog/taxation-basic-dialog.component */ "./src/app/admin/billing-module/billing-information/billing-info-services/taxation-services/taxation-basic-dialog/taxation-basic-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TaxationServicesModule = /** @class */ (function () {
    function TaxationServicesModule() {
    }
    TaxationServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__["UtilityModule"]
            ],
            declarations: [_taxation_services_component__WEBPACK_IMPORTED_MODULE_3__["TaxationServicesComponent"], _taxation_basic_dialog_taxation_basic_dialog_component__WEBPACK_IMPORTED_MODULE_4__["TaxationBasicDialogComponent"]],
            exports: [_taxation_services_component__WEBPACK_IMPORTED_MODULE_3__["TaxationServicesComponent"]],
            entryComponents: [_taxation_basic_dialog_taxation_basic_dialog_component__WEBPACK_IMPORTED_MODULE_4__["TaxationBasicDialogComponent"]]
        })
    ], TaxationServicesModule);
    return TaxationServicesModule;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/view-billing-information/view-billing-information.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/view-billing-information/view-billing-information.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-billing-info-services [isEdit]=\"0\"></app-billing-info-services>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/view-billing-information/view-billing-information.component.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/view-billing-information/view-billing-information.component.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2JpbGxpbmctaW5mb3JtYXRpb24vYmlsbGluZy1pbmZvLXNlcnZpY2VzL3ZpZXctYmlsbGluZy1pbmZvcm1hdGlvbi92aWV3LWJpbGxpbmctaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-services/view-billing-information/view-billing-information.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-services/view-billing-information/view-billing-information.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ViewBillingInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBillingInformationComponent", function() { return ViewBillingInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewBillingInformationComponent = /** @class */ (function () {
    function ViewBillingInformationComponent(_router) {
        this._router = _router;
        // Data Variables
        this.bookkeepingSubActivity = [];
    }
    ViewBillingInformationComponent.prototype.ngOnInit = function () {
        this.initializationMethod();
    };
    /**
     * Initialization Methods
     */
    ViewBillingInformationComponent.prototype.initializationMethod = function () {
        for (var i = 0; i < 3; i++) {
            var obj = {
                subactivity: '226-Setting up the contractor card details, preparation of tax payment annual report and other related work',
                frequency: 'Fortnightly',
                ff: 'Yes',
                price: '0.00'
            };
            this.bookkeepingSubActivity.push(obj);
        }
    };
    ViewBillingInformationComponent.prototype.onBillingInformation = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].BILLING_INFORMATION]);
    };
    ViewBillingInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-billing-information',
            template: __webpack_require__(/*! ./view-billing-information.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-services/view-billing-information/view-billing-information.component.html"),
            styles: [__webpack_require__(/*! ./view-billing-information.component.scss */ "./src/app/admin/billing-module/billing-information/billing-info-services/view-billing-information/view-billing-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewBillingInformationComponent);
    return ViewBillingInformationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=billing-info-services-billing-info-services-module.js.map