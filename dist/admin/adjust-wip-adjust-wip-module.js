(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adjust-wip-adjust-wip-module"],{

/***/ "./src/app/admin/billing-module/invoices/adjust-wip/adjust-wip.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/adjust-wip/adjust-wip.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-on-off-invoice-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>BILLING</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a (click)=\"onInvoice()\">INVOICE</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">ADD ADJUST WIP</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n\r\n  <!--Start add adjust WIP invoice form-->\r\n  <div>\r\n    <span class=\"panel-title orange-color\">Add Adjust WIP</span>\r\n    <!--<span class=\"panel-title on-right back-color\">You have selected <span class=\"primary-color\">4</span> clients.</span>-->\r\n    <form [formGroup]=\"addAdjustWIPForm\" (submit)=\"onSubmitAdjustWIPForm(addAdjustWIPForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"fromdateRef\" placeholder=\"From Date\" formControlName=\"from_date\"\r\n                   (dateChange)=\"setToDate($event.value)\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"fromdateRef\"></mat-datepicker-toggle>\r\n            <mat-datepicker #fromdateRef></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput [min]=\"from_date\" [matDatepicker]=\"todateRef\" placeholder=\"To Date\"\r\n                   formControlName=\"to_date\" required>\r\n            <mat-datepicker-toggle matSuffix [for]=\"todateRef\"></mat-datepicker-toggle>\r\n            <mat-datepicker #todateRef></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addAdjustWIPForm.get('to_date'))\"\r\n                            [errMsg]=\"validationMsg.ADJUST_WIP_TO_DATE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"service_id\" placeholder=\"Service\" required\r\n                        (selectionChange)=\"getClientList($event.value)\">\r\n              <mat-option *ngFor=\"let service of serviceList\" [value]=\"service?.id\">\r\n                {{ service?.service_name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addAdjustWIPForm.get('service_id'))\"\r\n                            [errMsg]=\"validationMsg.ONE_OFF_SERVICE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-5\">\r\n          <ng-select [items]=\"clientList\"\r\n                     bindLabel=\"billing_name\"\r\n                     [hideSelected]=\"true\"\r\n                     bindValue=\"entity_id\"\r\n                     placeholder=\"Select Client\"\r\n                     formControlName=\"entity_id\"\r\n                     [closeOnSelect]=\"true\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addAdjustWIPForm.get('entity_id'))\"\r\n                            [errMsg]=\"validationMsg.ONE_OFF_CLIENT_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n          <div class=\"col-md-12 text-right PR-0 MT-10\">\r\n            <button (click)=\"onInvoice()\" type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n            <button [disabled]=\"addAdjustWIPForm.invalid\" type=\"submit\" class=\"btn-primary\">Save</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!--End add adjust WIP invoice form-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/adjust-wip/adjust-wip.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/adjust-wip/adjust-wip.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2ludm9pY2VzL2FkanVzdC13aXAvYWRqdXN0LXdpcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/adjust-wip/adjust-wip.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/adjust-wip/adjust-wip.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdjustWipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustWipComponent", function() { return AdjustWipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
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












var AdjustWipComponent = /** @class */ (function (_super) {
    __extends(AdjustWipComponent, _super);
    function AdjustWipComponent(_router, _fb, _commonCrudService, _sharedObjService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        _this._sharedService = _sharedService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_5__["ValidationConstantMessage"]();
        _this.serviceList = [];
        _this.clientList = [];
        _this.ADJ = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_11__["INVOICESTAGEUPDATE"].ADJ;
        return _this;
    }
    AdjustWipComponent.prototype.ngOnInit = function () {
        this.getServices();
        this.createAdjustWIPForm();
    };
    /**
     * Get Service For Generate Invoice
     */
    AdjustWipComponent.prototype.getServices = function () {
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
    AdjustWipComponent.prototype.setToDate = function (fromDate) {
        this.from_date = fromDate;
    };
    /**
     * Get Client List based on Service ID Selected
     * @param service_id
     */
    AdjustWipComponent.prototype.getClientList = function (service_id) {
        var _this = this;
        if (service_id > 0) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].BILLING, { 'records': 'all' }, { 'compare': { 'equal': { 'service_id': service_id, 'parent_id': 0 } } }).subscribe(function (response) {
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
     * Create Add New Invoice Form
     */
    AdjustWipComponent.prototype.createAdjustWIPForm = function () {
        this.addAdjustWIPForm = this._fb.group({
            from_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"],
            to_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    /**
     * Submit New Invoice Data
     * @param form
     */
    AdjustWipComponent.prototype.onSubmitAdjustWIPForm = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['from_date'] = (form.value['from_date']) ? moment__WEBPACK_IMPORTED_MODULE_8__(form.value['from_date']).format('DD-MM-YYYY') : '';
            form.value['to_date'] = moment__WEBPACK_IMPORTED_MODULE_8__(form.value['to_date']).format('DD-MM-YYYY');
            form.value['type'] = 'adjuct';
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].INVOICE, form.value).subscribe(function (response) {
                // this.handleAddInvoiceResponse(response);
                _this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].INVOICE + '/' + _this.ADJ, {
                    'sortOrder': 'desc', 'sortBy': 'id', 'pageNumber': 1, 'recordsPerPage': 1
                }, {
                    'compare': { 'type': 'adjuct' },
                    'entity_id': form.value['entity_id']
                }).subscribe(function (data) {
                    var ItemData = data.payload.data;
                    if (ItemData) {
                        _this._sharedService.setInvoiceData(null);
                        _this._sharedService.setInvoiceData(ItemData[0]);
                        _this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].MANAGE_WIP_INVOICE]);
                    }
                });
            });
        }
    };
    /**
     * Handle Invoice Respone
     * @param response
     */
    AdjustWipComponent.prototype.handleAddInvoiceResponse = function (response) {
        this.onInvoice();
    };
    /**
     * On invoice redirection
     */
    AdjustWipComponent.prototype.onInvoice = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].INVOICES_DASHBOARD]);
    };
    /**
     * On home page route
     */
    AdjustWipComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    AdjustWipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adjust-wip',
            template: __webpack_require__(/*! ./adjust-wip.component.html */ "./src/app/admin/billing-module/invoices/adjust-wip/adjust-wip.component.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"]],
            styles: [__webpack_require__(/*! ./adjust-wip.component.scss */ "./src/app/admin/billing-module/invoices/adjust-wip/adjust-wip.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__["SharedObjService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], AdjustWipComponent);
    return AdjustWipComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/adjust-wip/adjust-wip.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/adjust-wip/adjust-wip.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AdjustWipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustWipModule", function() { return AdjustWipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _adjust_wip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adjust-wip.component */ "./src/app/admin/billing-module/invoices/adjust-wip/adjust-wip.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _adjust_wip_component__WEBPACK_IMPORTED_MODULE_5__["AdjustWipComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var AdjustWipModule = /** @class */ (function () {
    function AdjustWipModule() {
    }
    AdjustWipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _adjust_wip_component__WEBPACK_IMPORTED_MODULE_5__["AdjustWipComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"]
            ],
            entryComponents: []
        })
    ], AdjustWipModule);
    return AdjustWipModule;
}());



/***/ })

}]);
//# sourceMappingURL=adjust-wip-adjust-wip-module.js.map