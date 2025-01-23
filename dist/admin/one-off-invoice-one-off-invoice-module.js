(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["one-off-invoice-one-off-invoice-module"],{

/***/ "./src/app/admin/billing-module/invoices/one-off-invoice/one-off-invoice.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/one-off-invoice/one-off-invoice.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-on-off-invoice-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>BILLING</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a (click)=\"onInvoice()\">INVOICE</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">ADD ONE-OFF INVOICE</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n\r\n  <!--Start add one off invoice form-->\r\n  <div>\r\n    <span class=\"panel-title orange-color\">Add One-off Invoice</span>\r\n    <form [formGroup]=\"addOneoffInvoiceForm\" (submit)=\"onSubmitOneoffInvoiceForm(addOneoffInvoiceForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"invoice_type\" placeholder=\"Type\" required\r\n                        (selectionChange)=\"setinvoiceTypeValue($event.value)\">\r\n              <mat-option *ngFor=\"let type of invoiceTypeList\" [value]=\"type?.key\">\r\n                {{ type?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addOneoffInvoiceForm.get('invoice_type'))\"\r\n                            [errMsg]=\"validationMsg.ONE_OFF_TYPE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\" *ngIf=\"invoiceTypeValue === 'Advance' || invoiceTypeValue === 'Formation'\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"service_id\" placeholder=\"Service\" required\r\n                        (selectionChange)=\"getClientList($event.value)\">\r\n              <mat-option *ngFor=\"let service of serviceList\" [value]=\"service?.id\">\r\n                {{ service?.service_name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addOneoffInvoiceForm.get('service_id'))\"\r\n                            [errMsg]=\"validationMsg.ONE_OFF_SERVICE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          class=\"{{(invoiceTypeValue === 'Advance' || invoiceTypeValue === 'Formation') ?  'col-md-4' : 'col-md-8'}}\">\r\n          <ng-select [items]=\"clientList\"\r\n                     bindLabel=\"billing_name\"\r\n                     bindValue=\"entity_id\"\r\n                     placeholder=\"Select Client\"\r\n                     formControlName=\"entity_id\"></ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addOneoffInvoiceForm.get('entity_id'))\"\r\n                            [errMsg]=\"validationMsg.ONE_OFF_CLIENT_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-10\">\r\n          <mat-form-field>\r\n            <input formControlName=\"amount\" matInput placeholder=\"Amount\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addOneoffInvoiceForm.get('amount'))\"\r\n                            [errMsg]=\"validationMsg.ONE_OFF_AMOUNT_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addOneoffInvoiceForm.get('amount'))\"\r\n                            [errMsg]=\"validationMsg.NUMBER_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div\r\n          class=\"{{(invoiceTypeValue === 'Advance' || invoiceTypeValue === 'Formation') ?  'col-md-8' : 'col-md-12'}}\">\r\n          <div class=\"col-md-12 text-right PR-0 MT-10\">\r\n            <button (click)=\"onInvoice()\" type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n            <button [disabled]=\"addOneoffInvoiceForm.invalid\" type=\"submit\" class=\"btn-primary\">Save</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!--End add one off invoice form-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/one-off-invoice/one-off-invoice.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/one-off-invoice/one-off-invoice.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2ludm9pY2VzL29uZS1vZmYtaW52b2ljZS9vbmUtb2ZmLWludm9pY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/one-off-invoice/one-off-invoice.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/one-off-invoice/one-off-invoice.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OneOffInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneOffInvoiceComponent", function() { return OneOffInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
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











var OneOffInvoiceComponent = /** @class */ (function (_super) {
    __extends(OneOffInvoiceComponent, _super);
    function OneOffInvoiceComponent(_router, _fb, _commonCrudService, _sharedService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this._sharedObjService = _sharedObjService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_5__["ValidationConstantMessage"]();
        _this.serviceList = [];
        _this.clientList = [];
        _this.invoiceTypeList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["invoiceType"].slice(0, 4);
        _this.ABA = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["INVOICESTAGEUPDATE"].ABA;
        return _this;
    }
    OneOffInvoiceComponent.prototype.ngOnInit = function () {
        this.getServices();
        this.createOneoffInvoiceForm();
    };
    /**
     * Get Service For Generate Invoice
     */
    OneOffInvoiceComponent.prototype.getServices = function () {
        var _this = this;
        this._sharedObjService.getServices({}, { 'compare': { 'equal': { 'parent_id': 0 } } }).subscribe(function (response) {
            if (response) {
                _this.serviceList = response;
            }
        });
    };
    /**
     * Get Client List based on Service ID Selected
     * @param service_id
     */
    OneOffInvoiceComponent.prototype.getClientList = function (service_id) {
        var _this = this;
        if (service_id > 0) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].BILLING, { 'records': 'all' }, { 'compare': { 'equal': { 'service_id': service_id, 'parent_id': 0 } } }).subscribe(function (response) {
                if (response) {
                    _this.clientList = response.payload.data;
                }
            });
        }
        else {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].BILLING, { 'records': 'all' }, { 'compare': { 'equal': { 'service_id': 1, 'parent_id': 0 } } }).subscribe(function (response) {
                if (response) {
                    _this.clientList = response.payload.data;
                }
            });
        }
    };
    /**
     * Create One off invoice form
     */
    OneOffInvoiceComponent.prototype.createOneoffInvoiceForm = function () {
        this.addOneoffInvoiceForm = this._fb.group({
            invoice_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_5__["CommonRegex"].FLOAT_NUMBER_REGEXP)]),
        });
    };
    /**
     * Set Invoice Type to hide show service field
     * @param value
     */
    OneOffInvoiceComponent.prototype.setinvoiceTypeValue = function (value) {
        this.invoiceTypeValue = value;
        if (value !== 'Advance' && value !== 'Formation') {
            this.addOneoffInvoiceForm.get('service_id').setValidators(null);
            this.addOneoffInvoiceForm.patchValue({ 'service_id': '' });
            this.addOneoffInvoiceForm.patchValue({ 'entity_id': null });
            if (value === 'Setup') {
                this.getClientList(1);
            }
            if (value === 'Audit') {
                this.getClientList(4);
            }
        }
        else {
            this.addOneoffInvoiceForm.get('service_id').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
            this.getClientList(1);
        }
    };
    /**
     * Form Submit Of One Off Invoice
     * @param form
     */
    OneOffInvoiceComponent.prototype.onSubmitOneoffInvoiceForm = function (form) {
        var _this = this;
        if (form.valid) {
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].ONEOFF_INVOICE, form.value).subscribe(function (response) {
                if (form.value['service_id'] === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["SERVICEDATA"].HOST || form.value['service_id'] === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["SERVICEDATA"].SMSF || form.value['service_id'] === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["SERVICEDATA"].SUB) {
                    _this._sharedService.setRedirectParameter(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["REDIRECTPARAMKEYS"].INVOICE_STATUS, { 'id': _this.ABA });
                }
                _this.handleAddInvoiceResponse(response);
            });
        }
    };
    /**
     * Handle Invoice Respone
     * @param response
     */
    OneOffInvoiceComponent.prototype.handleAddInvoiceResponse = function (response) {
        this.onInvoice();
    };
    /**
     * On invoice redirection
     */
    OneOffInvoiceComponent.prototype.onInvoice = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].INVOICES_DASHBOARD]);
    };
    /**
     * On home page route
     */
    OneOffInvoiceComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    OneOffInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-one-off-invoice',
            template: __webpack_require__(/*! ./one-off-invoice.component.html */ "./src/app/admin/billing-module/invoices/one-off-invoice/one-off-invoice.component.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"]],
            styles: [__webpack_require__(/*! ./one-off-invoice.component.scss */ "./src/app/admin/billing-module/invoices/one-off-invoice/one-off-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__["SharedObjService"]])
    ], OneOffInvoiceComponent);
    return OneOffInvoiceComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/one-off-invoice/one-off-invoice.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/one-off-invoice/one-off-invoice.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: OneOffInvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneOffInvoiceModule", function() { return OneOffInvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _one_off_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./one-off-invoice.component */ "./src/app/admin/billing-module/invoices/one-off-invoice/one-off-invoice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _one_off_invoice_component__WEBPACK_IMPORTED_MODULE_5__["OneOffInvoiceComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var OneOffInvoiceModule = /** @class */ (function () {
    function OneOffInvoiceModule() {
    }
    OneOffInvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _one_off_invoice_component__WEBPACK_IMPORTED_MODULE_5__["OneOffInvoiceComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"]
            ],
            entryComponents: []
        })
    ], OneOffInvoiceModule);
    return OneOffInvoiceModule;
}());



/***/ })

}]);
//# sourceMappingURL=one-off-invoice-one-off-invoice-module.js.map