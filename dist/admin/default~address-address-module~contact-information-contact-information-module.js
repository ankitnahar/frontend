(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~address-address-module~contact-information-contact-information-module"],{

/***/ "./src/app/admin/client-module/contact-information/address/add-address/add-address.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/address/add-address/add-address.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>CLIENT</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a (click)=\"onContact()\">CONTACT INFORMATION</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span\r\n            class=\"active\">{{address ? 'UPDATE ADDRESS | ' : 'ADD ADDRESS'}} {{address?.entity_id?.trading_name}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n\r\n  <!--Start add contact form-->\r\n  <div class=\"add-address-container\">\r\n    <span class=\"panel-title orange-color\">{{address ? 'Update' : 'Add'}} Address</span>\r\n    <form [formGroup]=\"addAddressForm\" (submit)=\"onAddAddress(addAddressForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <ng-select [items]=\"parentClientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Parent Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"onChangeParentEntity($event)\"\r\n                     formControlName=\"parent_id\">\r\n          </ng-select>\r\n\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addAddressForm.get('parent_id'))\"\r\n                            [errMsg]=\"validationMsg.TRADING_NAME\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <ng-select [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"entity_id\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addAddressForm.get('entity_id'))\"\r\n                            [errMsg]=\"validationMsg.TRADING_NAME\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Address Type\" formControlName=\"type\" required>\r\n              <mat-option *ngFor=\"let addressTypeData of addressType\" [value]=\"addressTypeData.key\">\r\n                {{addressTypeData.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addAddressForm.get('type'))\"\r\n                            [errMsg]=\"validationMsg.ADDRESS_TYPE\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row MT-10\">\r\n        <div class=\"col-md-6\">\r\n          <mat-form-field>\r\n            <textarea formControlName=\"street_address\" matInput placeholder=\"Street address\" required></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addAddressForm.get('street_address'))\"\r\n                            [errMsg]=\"validationMsg.ADDRESS_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <mat-form-field>\r\n            <textarea formControlName=\"suburb\" matInput placeholder=\"Suburb\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row MT-10\">\r\n        <div class=\"col-md-6\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"State\" formControlName=\"state_id\" required>\r\n              <mat-option *ngFor=\"let addressStateData of addressState\" [value]=\"addressStateData.key\">\r\n                {{addressStateData.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addAddressForm.get('state_id'))\"\r\n                            [errMsg]=\"validationMsg.STATE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <mat-form-field>\r\n            <input formControlName=\"postcode\" matInput type=\"text\" placeholder=\"Postcode\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addAddressForm.get('postcode'))\"\r\n                            [errMsg]=\"validationMsg.NUMBER_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 MB-20\">\r\n        <div class=\"row MT-30\">\r\n          <div class=\"col-md-6 PL-0\">\r\n          </div>\r\n          <div class=\"col-md-6 text-right PR-0\">\r\n            <button (click)=\"onContact()\" type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n            <button [disabled]=\"addAddressForm.invalid\" type=\"submit\" class=\"btn-primary\">{{address ? 'Update' :\r\n              'Add'}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/address/add-address/add-address.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/address/add-address/add-address.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvY29udGFjdC1pbmZvcm1hdGlvbi9hZGRyZXNzL2FkZC1hZGRyZXNzL2FkZC1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/address/add-address/add-address.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/address/add-address/add-address.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AddAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressComponent", function() { return AddAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
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











var AddAddressComponent = /** @class */ (function (_super) {
    __extends(AddAddressComponent, _super);
    function AddAddressComponent(_router, _fb, _sharedService, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this._sharedService = _sharedService;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        // Constant Variables
        _this.address = null;
        _this.clientList = [];
        _this.filteredTradingClientList = [];
        _this.parentClientList = [];
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_5__["ValidationConstantMessage"]();
        _this.addressState = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["ADDRESSSTATE"];
        _this.addressType = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["ADDRESSTYPE"];
        return _this;
    }
    AddAddressComponent.prototype.ngOnInit = function () {
        this.address = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["GLOBALDATAKEYS"].CONTACTADDRESS);
        this.createAddressForm();
        this.getClientList();
    };
    /**
     * Address form creation
     */
    AddAddressComponent.prototype.createAddressForm = function () {
        this.addAddressForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](((this.address && this.address.parent_id && this.address.parent_id) ? (this.address.parent_id) : null)),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](((this.address && this.address.entity_id.id && this.address.entity_id) ? (this.address.entity_id.id) : null), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](((this.address && this.address.type) ? this.address.type : ''), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            street_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](((this.address && this.address.street_address) ? this.address.street_address : ''), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            suburb: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](((this.address && this.address.suburb) ? this.address.suburb : '')),
            state_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](((this.address && this.address.state_id) ? this.address.state_id : ''), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            postcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](((this.address && this.address.postcode) ? this.address.postcode : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_5__["CommonRegex"].NUMERIC_REGEXP)])
        });
    };
    /**
     * Get Client List
     */
    AddAddressComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = _this.filteredTradingClientList = response;
            _this.parentClientList = response.filter(function (item) { return item.is_parent === 1; });
        });
    };
    /**
     * Default search params for client listing API
     * @returns {{compare: {notequal: {discontinue_stage: number}}}}
     */
    AddAddressComponent.prototype.getClientSearchParam = function () {
        return {
            compare: {
                notequal: {
                    discontinue_stage: 2
                }
            }
        };
    };
    /**
     * On Add/Edit Adress
     * @param {FormGroup} form
     */
    AddAddressComponent.prototype.onAddAddress = function (form) {
        var _this = this;
        if (form.valid) {
            if (this.address) {
                form.value['_method'] = 'put';
                this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CONTACT_INFORMATION_ADDRESS_UPDATE, this.address.id, form.value)
                    .subscribe(function (response) {
                    _this.handleAddressResponse(response);
                });
            }
            else {
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CONTACT_INFORMATION_ADDRESS_ADD, form.value)
                    .subscribe(function (response) {
                    _this.handleAddressResponse(response);
                });
            }
        }
    };
    /**
     * Handle Address Response
     * @param response
     */
    AddAddressComponent.prototype.handleAddressResponse = function (response) {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].CONTACT_INFORMATION]);
    };
    /**
     * On contact information page redirect
     */
    AddAddressComponent.prototype.onContact = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].CONTACT_INFORMATION]);
    };
    AddAddressComponent.prototype.ngOnDestroy = function () {
        this.address = null;
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["GLOBALDATAKEYS"].CONTACTADDRESS, null);
    };
    /**
     * On home page route
     */
    AddAddressComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    AddAddressComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    AddAddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-address',
            template: __webpack_require__(/*! ./add-address.component.html */ "./src/app/admin/client-module/contact-information/address/add-address/add-address.component.html"),
            styles: [__webpack_require__(/*! ./add-address.component.scss */ "./src/app/admin/client-module/contact-information/address/add-address/add-address.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__["SharedObjService"]])
    ], AddAddressComponent);
    return AddAddressComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/contact-information/address/address.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/address/address.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AddressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModule", function() { return AddressModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _view_address_view_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-address/view-address.component */ "./src/app/admin/client-module/contact-information/address/view-address/view-address.component.ts");
/* harmony import */ var _add_address_add_address_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-address/add-address.component */ "./src/app/admin/client-module/contact-information/address/add-address/add-address.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'add-address',
        component: _add_address_add_address_component__WEBPACK_IMPORTED_MODULE_6__["AddAddressComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    }
];
var AddressModule = /** @class */ (function () {
    function AddressModule() {
    }
    AddressModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _view_address_view_address_component__WEBPACK_IMPORTED_MODULE_5__["ViewAddressComponent"],
                _add_address_add_address_component__WEBPACK_IMPORTED_MODULE_6__["AddAddressComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ],
            exports: [
                _view_address_view_address_component__WEBPACK_IMPORTED_MODULE_5__["ViewAddressComponent"]
            ],
            entryComponents: [_view_address_view_address_component__WEBPACK_IMPORTED_MODULE_5__["ViewAddressComponent"]]
        })
    ], AddressModule);
    return AddressModule;
}());



/***/ }),

/***/ "./src/app/admin/client-module/contact-information/address/view-address/view-address.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/address/view-address/view-address.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start address view dialog  -->\r\n<div class=\"modal large-modal view-address-modal-container\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">\r\n      <span>{{address?.modified_by?.userfullname}} | Modified On: <span>{{address?.modified_on | date : 'dd-MM-yyyy HH:mm:ss'}}</span></span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onCloseDialog()\">close</i></a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <!-- Star user details -->\r\n        <div class=\"approve-reject-user-details\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 PL-0\">\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-3 PL-0\">\r\n                  <label>Parent Trading Name</label>\r\n                </div>\r\n                <div class=\"col-md-9 PR-0\">\r\n                  <span>{{address?.parent_name}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3 PL-0\">\r\n                  <label>Trading Name</label>\r\n                </div>\r\n                <div class=\"col-md-9 PR-0\">\r\n                  <span>{{address?.entity_id?.trading_name}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-3 PL-0\">\r\n                  <label>Type</label>\r\n                </div>\r\n                <div class=\"col-md-9 PR-0\">\r\n                  <span>{{address?.type > 0 ? getAddressType(address?.type) : ''}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-3 PL-0\">\r\n                  <label>Address</label>\r\n                </div>\r\n                <div class=\"col-md-9 PR-0\">\r\n                  <span>{{address?.street_address}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-3 PL-0\">\r\n                  <label>Suburb</label>\r\n                </div>\r\n                <div class=\"col-md-9 PR-0\">\r\n                  <span>{{address?.suburb}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-3 PL-0\">\r\n                  <label>State</label>\r\n                </div>\r\n                <div class=\"col-md-9 PR-0\">\r\n                  <span>{{address?.state_id > 0 ? getAddressState(address?.state_id) : ''}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-3 PL-0\">\r\n                  <label>Postcode</label>\r\n                </div>\r\n                <div class=\"col-md-9 PR-0\">\r\n                  <span>{{address?.postcode}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--  End address view dialog  -->\r\n\r\n<!--  Start dialog layer -->\r\n<div class=\"modal-layer\" (click)=\"onCloseDialog()\"></div>\r\n<!--  End dialog layer -->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/address/view-address/view-address.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/address/view-address/view-address.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ViewAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAddressComponent", function() { return ViewAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewAddressComponent = /** @class */ (function () {
    function ViewAddressComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Data Variables
        this.address = null;
        this.addressState = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["ADDRESSSTATE"];
        this.addressType = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["ADDRESSTYPE"];
    }
    ViewAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordSubscriber = this.addressRecord.subscribe(function (value) {
            if (value) {
                _this.address = value;
            }
        });
    };
    /**
     * Display Address State
     * @param {number} state_id
     * @returns {string}
     */
    ViewAddressComponent.prototype.getAddressState = function (state_id) {
        return this.addressState.filter(function (elem) { return elem.key === state_id; })[0].label;
    };
    /**
     * Display Address Type
     * @param {number} type
     * @returns {string}
     */
    ViewAddressComponent.prototype.getAddressType = function (type) {
        return this.addressType.filter(function (elem) { return elem.key === type; })[0].label;
    };
    /**
     * On view address close dialog
     */
    ViewAddressComponent.prototype.onCloseDialog = function () {
        this.address = null;
        this.close.emit(false);
    };
    /**
     * Esc event for close modal
     * @param event
     */
    ViewAddressComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onCloseDialog();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"])
    ], ViewAddressComponent.prototype, "addressRecord", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"])
    ], ViewAddressComponent.prototype, "popupStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ViewAddressComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ViewAddressComponent.prototype, "onKeydownHandler", null);
    ViewAddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-address',
            template: __webpack_require__(/*! ./view-address.component.html */ "./src/app/admin/client-module/contact-information/address/view-address/view-address.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ViewAddressComponent);
    return ViewAddressComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~address-address-module~contact-information-contact-information-module.js.map