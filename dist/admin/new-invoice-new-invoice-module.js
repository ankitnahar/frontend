(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-invoice-new-invoice-module"],{

/***/ "./src/app/admin/billing-module/invoices/new-invoice/new-invoice.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/new-invoice/new-invoice.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-new-invoice-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>BILLING</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a (click)=\"onInvoice()\">INVOICE</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">ADD NEW INVOICE</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n\r\n  <!--Start add New invoice form-->\r\n  <div>\r\n    <span class=\"panel-title orange-color\">Add New Invoice</span>\r\n    <!--<span class=\"panel-title on-right back-color\">You have selected <span class=\"primary-color\">4</span> clients.</span>-->\r\n    <form [formGroup]=\"addNewInvoiceForm\" (submit)=\"onSubmitNewInvoiceForm(addNewInvoiceForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"fromdateRef\" placeholder=\"From Date\" formControlName=\"from_date\"\r\n                   (dateChange)=\"setToDate($event.value)\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"fromdateRef\"></mat-datepicker-toggle>\r\n            <mat-datepicker #fromdateRef></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput [min]=\"from_date\" [matDatepicker]=\"todateRef\" placeholder=\"To Date\"\r\n                   formControlName=\"to_date\" required>\r\n            <mat-datepicker-toggle matSuffix [for]=\"todateRef\"></mat-datepicker-toggle>\r\n            <mat-datepicker #todateRef></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addNewInvoiceForm.get('to_date'))\"\r\n                            [errMsg]=\"validationMsg.ADJUST_WIP_TO_DATE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"service_id\" placeholder=\"Service\" required\r\n                        (selectionChange)=\"getClientList($event.value)\">\r\n              <mat-option *ngFor=\"let service of serviceList\" [value]=\"service?.id\">\r\n                {{ service?.service_name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addNewInvoiceForm.get('service_id'))\"\r\n                            [errMsg]=\"validationMsg.ONE_OFF_SERVICE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n          <ng-select [items]=\"clientList\"\r\n                     bindLabel=\"billing_name\"\r\n                     [hideSelected]=\"true\"\r\n                     bindValue=\"entity_id\"\r\n                     placeholder=\"Select Client\"\r\n                     multiple=\"true\"\r\n                     formControlName=\"entity_id\"\r\n                     (change)=\"showMessageIfRecurred()\"\r\n                     [closeOnSelect]=\"true\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addNewInvoiceForm.get('entity_id'))\"\r\n                            [errMsg]=\"validationMsg.ONE_OFF_CLIENT_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 MT-15\" *ngIf=\"is_recurred_entity\">\r\n          <span class=\"red-color\">* Invoices are already recurred for <span class=\"fw-500\">{{is_recurred_entity}}</span>. Do you still want to create this invoice ? </span>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n          <div class=\"col-md-12 text-right PR-0 MT-10\">\r\n            <button (click)=\"onInvoice()\" type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n            <button [disabled]=\"addNewInvoiceForm.invalid\" type=\"submit\" class=\"btn-primary\">Save</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!--End add New invoice form-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/new-invoice/new-invoice.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/new-invoice/new-invoice.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2ludm9pY2VzL25ldy1pbnZvaWNlL25ldy1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/new-invoice/new-invoice.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/new-invoice/new-invoice.component.ts ***!
  \************************************************************************************/
/*! exports provided: NewInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewInvoiceComponent", function() { return NewInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
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













var NewInvoiceComponent = /** @class */ (function (_super) {
    __extends(NewInvoiceComponent, _super);
    function NewInvoiceComponent(_router, _fb, _commonCrudService, _sharedService, _sharedObjService, route) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this._sharedObjService = _sharedObjService;
        _this.route = route;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.serviceList = [];
        _this.clientList = [];
        _this.ABA = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["INVOICESTAGEUPDATE"].ABA;
        _this.service_id = 0;
        _this.entity_id = 0;
        return _this;
    }
    NewInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            var dataItem = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_12__["convertURLParamToDecode"])(params);
            if (dataItem) {
                _this.service_id = (dataItem['service_id']) ? Number(dataItem['service_id']) : 0;
                _this.entity_id = (dataItem['entity_id']) ? Number(dataItem['entity_id']) : 0;
            }
        });
        this.getServices();
        this.createAddNewInvoiceForm();
    };
    /**
     * Get Service For Generate Invoice
     */
    NewInvoiceComponent.prototype.getServices = function () {
        var _this = this;
        this._sharedObjService.getServices({}, { 'compare': { 'equal': { 'parent_id': 0 } } }).subscribe(function (response) {
            if (response) {
                _this.serviceList = response;
            }
        });
    };
    /**
     * Set To Date On Change of From Date
     * @param fromDate
     */
    NewInvoiceComponent.prototype.setToDate = function (fromDate) {
        this.from_date = fromDate;
    };
    /**
     * Get Client List based on Service ID Selected
     * @param service_id
     */
    NewInvoiceComponent.prototype.getClientList = function (service_id) {
        var _this = this;
        if (service_id > 0) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BILLING, { 'records': 'all' }, { 'compare': { 'equal': { 'service_id': service_id, 'parent_id': 0 } } }).subscribe(function (response) {
                if (response) {
                    _this.clientList = response.payload.data;
                }
                else {
                    _this.clientList = [];
                }
            });
        }
    };
    /**
     * Get Client List IF Recurring is already exist for the Selected Client
     */
    NewInvoiceComponent.prototype.showMessageIfRecurred = function () {
        var entity_ids = this.addNewInvoiceForm.get('entity_id').value;
        if (entity_ids) {
            var entity_id = entity_ids.join(',');
            var entity_names_1 = [];
            var items = this.clientList;
            items = items.filter(function (data) { return (entity_ids.indexOf(data.entity_id) >= 0) && (data.recurring_id > 0); });
            if (items) {
                items.forEach(function (value) {
                    entity_names_1.push(value.trading_name);
                });
            }
            if (entity_names_1) {
                this.is_recurred_entity = entity_names_1.join(', ');
            }
        }
    };
    /**
     * Create Add New Invoice Form
     */
    NewInvoiceComponent.prototype.createAddNewInvoiceForm = function () {
        this.addNewInvoiceForm = this._fb.group({
            from_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"],
            to_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.service_id > 0 ? this.service_id : null), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.entity_id ? [this.entity_id] : null), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        if (this.service_id > 0) {
            this.getClientList(this.service_id);
        }
    };
    /**
     * Submit New Invoice Data
     * @param form
     */
    NewInvoiceComponent.prototype.onSubmitNewInvoiceForm = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['from_date'] = (form.value['from_date']) ? moment__WEBPACK_IMPORTED_MODULE_7__(form.value['from_date']).format('DD-MM-YYYY') : '';
            form.value['to_date'] = (form.value['to_date']) ? moment__WEBPACK_IMPORTED_MODULE_7__(form.value['to_date']).format('DD-MM-YYYY') : '';
            form.value['type'] = 'new';
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].INVOICE, form.value).subscribe(function (response) {
                _this.handleAddInvoiceResponse(response);
                if (form.value['service_id'] === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["SERVICEDATA"].HOST || form.value['service_id'] === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["SERVICEDATA"].SMSF || form.value['service_id'] === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["SERVICEDATA"].SUB) {
                    _this._sharedService.setRedirectParameter(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["REDIRECTPARAMKEYS"].INVOICE_STATUS, { 'id': _this.ABA });
                }
                form.value['from_date'] = (form.value['from_date']) ? new Date(form.value['from_date']) : '';
                form.value['to_date'] = (form.value['to_date']) ? new Date(form.value['to_date']) : '';
            });
        }
    };
    /**
     * Handle Invoice Respone
     * @param response
     */
    NewInvoiceComponent.prototype.handleAddInvoiceResponse = function (response) {
        this.onInvoice();
    };
    /**
     * On invoice redirection
     */
    NewInvoiceComponent.prototype.onInvoice = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].INVOICES_DASHBOARD]);
    };
    /**
     * On home page route
     */
    NewInvoiceComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    NewInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-invoice',
            template: __webpack_require__(/*! ./new-invoice.component.html */ "./src/app/admin/billing-module/invoices/new-invoice/new-invoice.component.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]],
            styles: [__webpack_require__(/*! ./new-invoice.component.scss */ "./src/app/admin/billing-module/invoices/new-invoice/new-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_11__["SharedObjService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NewInvoiceComponent);
    return NewInvoiceComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/new-invoice/new-invoice.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/new-invoice/new-invoice.module.ts ***!
  \*********************************************************************************/
/*! exports provided: NewInvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewInvoiceModule", function() { return NewInvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _new_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-invoice.component */ "./src/app/admin/billing-module/invoices/new-invoice/new-invoice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _new_invoice_component__WEBPACK_IMPORTED_MODULE_5__["NewInvoiceComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var NewInvoiceModule = /** @class */ (function () {
    function NewInvoiceModule() {
    }
    NewInvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _new_invoice_component__WEBPACK_IMPORTED_MODULE_5__["NewInvoiceComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"]
            ],
            entryComponents: []
        })
    ], NewInvoiceModule);
    return NewInvoiceModule;
}());



/***/ })

}]);
//# sourceMappingURL=new-invoice-new-invoice-module.js.map