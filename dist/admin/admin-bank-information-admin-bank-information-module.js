(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-bank-information-admin-bank-information-module"],{

/***/ "./src/app/admin/administration-module/admin-bank-information/admin-bank-information.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/admin-bank-information/admin-bank-information.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin (Administration) manager users html view -->\r\n<div class=\"admin-manage-users-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>ADMINISTRATION</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">ADD BANK INFORMATION</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <form [formGroup]=\"addBankForm\" #addMoreBankForm=\"ngForm\"\r\n                (submit)=\"onBankSubmit(addBankForm.value, addBankForm.valid,bankObject)\"\r\n                *ngIf=\"tabDataBank['add_edit']\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 PL-0\">\r\n                <mat-form-field>\r\n                  <input formControlName=\"bank_name\" matInput type=\"text\" autocomplete=\"off\" placeholder=\"Add Bank\"\r\n                         required/>\r\n                </mat-form-field>\r\n                <div class=\"validation-msg\">\r\n                  <app-validation *ngIf=\"isRequiredField(addBankForm.get('bank_name'))\"\r\n                                  [errMsg]=\"validationMsg.BANK_NAME_REQUIRED\"></app-validation>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 MT-5\">\r\n                <button [disabled]=\"addBankForm.invalid\" class=\"btn-primary\" type=\"submit\">Save</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"grid-search\">\r\n            <form [formGroup]=\"filterForm\">\r\n              <mat-form-field [floatLabel]=\"'never'\">\r\n                <input matInput placeholder=\"Search\" formControlName=\"bank_name\"\r\n                       (keyup)=\"setAdvanceFilter(filterForm)\">\r\n              </mat-form-field>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. no.</th>\r\n            <th width=\"55%\">Bank</th>\r\n            <th width=\"15%\">Last Modified on</th>\r\n            <th width=\"15%\">Last Modified by</th>\r\n            <th width=\"10%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let bankData of bankList; let i = index\">\r\n              <td width=\"5%\">{{i+1}}</td>\r\n              <td width=\"55%\">\r\n                <a *ngIf=\"!isBankUpdate\" (click)=\"isBankUpdate = true\">{{bankData?.bank_name}}</a>\r\n                <input *ngIf=\"isBankUpdate\" type=\"text\" value={{bankData?.bank_name}}\r\n                       (blur)=\"onBankNameUpdate($event.target.value,bankData);isBankUpdate = false\"/>\r\n              </td>\r\n              <td width=\"15%\">{{bankData?.modified_on | date : 'dd-MM-yyyy HH:mm:ss'}}</td>\r\n              <td width=\"15%\">{{bankData?.modified_by?.modified_by}}</td>\r\n              <td width=\"10%\">\r\n                <mat-slide-toggle [checked]=\"(bankData?.is_active) ? true : false\" *ngIf=\"tabDataBank['add_edit']\"\r\n                                  (change)=\"activeInactiveBank($event.checked,bankData)\"></mat-slide-toggle>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>  <!-- End Table -->\r\n  <div *ngIf=\"bankList.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/admin-bank-information/admin-bank-information.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/admin-bank-information/admin-bank-information.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluaXN0cmF0aW9uLW1vZHVsZS9hZG1pbi1iYW5rLWluZm9ybWF0aW9uL2FkbWluLWJhbmstaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/administration-module/admin-bank-information/admin-bank-information.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/admin-bank-information/admin-bank-information.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AdminBankInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBankInformationComponent", function() { return AdminBankInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
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











var AdminBankInformationComponent = /** @class */ (function (_super) {
    __extends(AdminBankInformationComponent, _super);
    function AdminBankInformationComponent(_fb, _router, _sharedService, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._router = _router;
        _this._sharedService = _sharedService;
        _this._commonCrudService = _commonCrudService;
        _this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_1__["ValidationConstantMessage"]();
        _this.bankList = [];
        _this.bankObject = [];
        // pagination Data
        _this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].PAGINATION_ARRAY;
        _this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].PAGINATION_ARRAY[1];
        // State variables
        _this.isBankUpdate = false;
        _this.tabBankID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_4__["ADMINTABACCESS"].CLIENT_BANK;
        _this.equalJSON = {};
        _this.likeJSON = {};
        return _this;
    }
    AdminBankInformationComponent.prototype.ngOnInit = function () {
        this.tabDataBank = this._sharedService.checkUserPrivilegesTabs(this.tabBankID);
        this.createBankForm();
        this.createFilterForm();
        this.getBankList(1);
    };
    /**
     * Bank Information listing API
     * @param {number} pageNumber
     * @param {string} key
     * @param {string} val
     */
    AdminBankInformationComponent.prototype.getBankList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BANK_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParams()).subscribe(function (Response) {
            _this.handleBankResponse(Response);
        });
    };
    /**
     * Create Advance Filter
     */ AdminBankInformationComponent.prototype.createFilterForm = function () {
        this.filterForm = this._fb.group({
            bank_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    };
    /**
     * Handle Bank Information Response
     * @param response
     */
    AdminBankInformationComponent.prototype.handleBankResponse = function (response) {
        this.bankList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Active & Inactive Bank from listing
     * @param {boolean} action
     * @param {Bank} bankObject
     */
    AdminBankInformationComponent.prototype.activeInactiveBank = function (action, bankObject) {
        var _this = this;
        var params = { 'is_active': action ? 1 : 0 };
        this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BANK_LIST, bankObject.id, params).subscribe(function (response) {
            _this.bankList.map(function (item) {
                if (item.id === bankObject.id) {
                    item.is_active = item.is_active ? 0 : 1;
                }
            });
        });
    };
    /**
     * Generate Bank Add form
     */
    AdminBankInformationComponent.prototype.createBankForm = function () {
        this.addBankForm = this._fb.group({
            bank_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    /**
     * On Add or Update bank
     * @param formParams
     * @param {boolean} isValid
     * @param bankObject
     */
    AdminBankInformationComponent.prototype.onBankSubmit = function (formParams, isValid, bankObject) {
        var _this = this;
        if (isValid) {
            formParams['is_active'] = 1;
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BANK_LIST, formParams).subscribe(function (Response) {
                _this.getBankList(1);
                _this.createBankForm();
                _this.addMoreBankForm.resetForm();
            });
        }
    };
    /**
     * Bank name edit from grid
     * @param bank_name
     * @param bankObject
     */
    AdminBankInformationComponent.prototype.onBankNameUpdate = function (bank_name, bankObject) {
        var _this = this;
        var params = { 'bank_name': bank_name };
        this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BANK_LIST, bankObject.id, params).subscribe(function (Response) {
            _this.bankList.map(function (item) {
                if (item.id === bankObject.id) {
                    item.bank_name = bank_name;
                }
            });
        });
    };
    /**
     * Pagination page change method
     * @param event
     */
    AdminBankInformationComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getBankList(event.pageIndex + 1);
    };
    /**
     * Esc event for close modal
     * @param event
     */
    AdminBankInformationComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
        }
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    AdminBankInformationComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
        var params = {};
        params = {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
        sortKey ? params['sortBy'] = sortKey : '';
        sortOrder ? params['sortOrder'] = sortOrder : '';
        return params;
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    AdminBankInformationComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getBankList(1, sortKey, sortVal);
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    AdminBankInformationComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        // removing empty key from object
        for (var key in form.value) {
            if (form.value.hasOwnProperty(key)) {
                if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
                    delete form.value[key];
                }
                else {
                    if (flag) {
                    }
                }
            }
        }
        // For Multiple Entity ID
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'bank_name') {
                        this.likeJSON['bank_name'] = encodeURIComponent(form.value[key]);
                    }
                }
            }
            this.getBankList(1);
        }
    };
    /**
     * getting advanced search params for conference room list api
     * @returns {{}}
     */
    AdminBankInformationComponent.prototype.getSearchParams = function () {
        var params = {};
        var filter = {};
        // check for the object whether it's empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if ((Object.keys(this.equalJSON).length)) {
            params['compare'] = filter;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length) {
            params['compare'] = filter;
        }
        return params;
    };
    /**
     * On home page route
     */
    AdminBankInformationComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_10__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addMoreBankForm'),
        __metadata("design:type", Object)
    ], AdminBankInformationComponent.prototype, "addMoreBankForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AdminBankInformationComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AdminBankInformationComponent.prototype, "onKeydownHandler", null);
    AdminBankInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-bank-information',
            template: __webpack_require__(/*! ./admin-bank-information.component.html */ "./src/app/admin/administration-module/admin-bank-information/admin-bank-information.component.html"),
            styles: [__webpack_require__(/*! ./admin-bank-information.component.scss */ "./src/app/admin/administration-module/admin-bank-information/admin-bank-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"]])
    ], AdminBankInformationComponent);
    return AdminBankInformationComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_9__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/administration-module/admin-bank-information/admin-bank-information.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/admin-bank-information/admin-bank-information.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AdminBankInformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBankInformationModule", function() { return AdminBankInformationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_bank_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-bank-information.component */ "./src/app/admin/administration-module/admin-bank-information/admin-bank-information.component.ts");
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
        component: _admin_bank_information_component__WEBPACK_IMPORTED_MODULE_2__["AdminBankInformationComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var AdminBankInformationModule = /** @class */ (function () {
    function AdminBankInformationModule() {
    }
    AdminBankInformationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"]
            ],
            declarations: [_admin_bank_information_component__WEBPACK_IMPORTED_MODULE_2__["AdminBankInformationComponent"]]
        })
    ], AdminBankInformationModule);
    return AdminBankInformationModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-bank-information-admin-bank-information-module.js.map