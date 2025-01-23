(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-more-account-type-admin-more-account-type-module"],{

/***/ "./src/app/admin/administration-module/admin-more-account-type/admin-more-account-type.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/admin-more-account-type/admin-more-account-type.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin (Administration) manager users html view -->\r\n<div class=\"admin-manage-users-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>ADMINISTRATION</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">ADD MORE ACCOUNT TYPE</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <form [formGroup]=\"addAccountForm\" #addAccountTypeForm=\"ngForm\"\r\n                (submit)=\"onAddAccountType(addAccountForm.value, addAccountForm.valid, null)\" *ngIf=\"tabDataType['add_edit']\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 PL-0\">\r\n                <mat-form-field>\r\n                  <input formControlName=\"type_name\" matInput type=\"text\" autocomplete=\"off\" placeholder=\"Type of account\"\r\n                         required/>\r\n                </mat-form-field>\r\n                <div class=\"validation-msg\">\r\n                  <app-validation *ngIf=\"isRequiredField(addAccountForm.get('type_name'))\"\r\n                                  [errMsg]=\"validationMsg.ACCOUNT_TYPE_REQUIRED\"></app-validation>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 MT-5\">\r\n                <button [disabled]=\"addAccountForm.invalid\" class=\"btn-primary\" type=\"submit\">Save</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"grid-search\">\r\n          <form [formGroup]=\"filterForm\">\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput placeholder=\"Search\" formControlName=\"type_name\"\r\n                     (keyup)=\"setAdvanceFilter(filterForm)\">\r\n            </mat-form-field>\r\n          </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"10%\">Sr. no.</th>\r\n            <th width=\"35%\">Type of account</th>\r\n            <th width=\"20%\">Last Modified on</th>\r\n            <th width=\"20%\">Last Modified by</th>\r\n            <th width=\"20%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let accountTypeData of accountType; let i = index\">\r\n              <td width=\"10%\">{{i+1}}</td>\r\n              <td width=\"35%\">\r\n                <a *ngIf=\"!isBankUpdate\" (click)=\"isBankUpdate = true\">{{accountTypeData?.type_name}}</a>\r\n                <input *ngIf=\"isBankUpdate\" type=\"text\" value={{accountTypeData?.type_name}}\r\n                       (blur)=\"onAccountTypeNameUpdate($event.target.value,accountTypeData);isBankUpdate = false\"/>\r\n              </td>\r\n              <td width=\"20%\">{{accountTypeData?.modified_on | date : 'dd-MM-yyyy HH:mm:ss'}}</td>\r\n              <td width=\"20%\">{{accountTypeData?.modified_by?.modified_by}}</td>\r\n              <td width=\"20%\">\r\n                <mat-slide-toggle *ngIf=\"tabDataType['add_edit']\" [checked]=\"(accountTypeData?.is_active) ? true : false\"\r\n                                  (change)=\"activeInactiveAccountType($event.checked,accountTypeData)\"></mat-slide-toggle>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>  <!-- End Table -->\r\n  <div *ngIf=\"accountType.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/admin-more-account-type/admin-more-account-type.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/admin-more-account-type/admin-more-account-type.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluaXN0cmF0aW9uLW1vZHVsZS9hZG1pbi1tb3JlLWFjY291bnQtdHlwZS9hZG1pbi1tb3JlLWFjY291bnQtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/administration-module/admin-more-account-type/admin-more-account-type.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/admin-more-account-type/admin-more-account-type.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AdminMoreAccountTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMoreAccountTypeComponent", function() { return AdminMoreAccountTypeComponent; });
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











var AdminMoreAccountTypeComponent = /** @class */ (function (_super) {
    __extends(AdminMoreAccountTypeComponent, _super);
    function AdminMoreAccountTypeComponent(_fb, _router, _sharedService, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._router = _router;
        _this._sharedService = _sharedService;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_1__["ValidationConstantMessage"]();
        // Angular Variables
        _this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.accountType = [];
        _this.accountTypeObject = [];
        // pagination Data
        _this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].PAGINATION_ARRAY;
        _this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].PAGINATION_ARRAY[1];
        // State variables
        _this.isBankUpdate = false;
        _this.tabTypeID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_4__["ADMINTABACCESS"].CLIENT_TYPEOFACCOUNT;
        _this.equalJSON = {};
        _this.likeJSON = {};
        return _this;
    }
    AdminMoreAccountTypeComponent.prototype.ngOnInit = function () {
        this.tabDataType = this._sharedService.checkUserPrivilegesTabs(this.tabTypeID);
        this.createAccountTypeForm();
        this.createFilterForm();
        this.getAccountTypeList(1);
    };
    /**
     * Create Advance Filter
     */
    AdminMoreAccountTypeComponent.prototype.createFilterForm = function () {
        this.filterForm = this._fb.group({
            type_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    };
    /**
     * Bank Account Type listing API
     * @param {number} pageNumber
     * @param {string} key
     * @param {string} val
     */
    AdminMoreAccountTypeComponent.prototype.getAccountTypeList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BANK_TYPE_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParams()).subscribe(function (Response) {
            _this.handleAccountTypeResponse(Response);
        });
    };
    /**
     * Handle Bank Account Type Response
     * @param response
     */
    AdminMoreAccountTypeComponent.prototype.handleAccountTypeResponse = function (response) {
        this.accountType = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Active & Inactive Bank from listing
     * @param {boolean} action
     * @param {BankAccount} accountTypeObject
     */
    AdminMoreAccountTypeComponent.prototype.activeInactiveAccountType = function (action, accountTypeObject) {
        var _this = this;
        var params = { 'is_active': action ? 1 : 0 };
        this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BANK_TYPE_LIST, accountTypeObject.id, params).subscribe(function (response) {
            _this.accountType.map(function (item) {
                if (item.id === accountTypeObject.id) {
                    item.is_active = item.is_active ? 0 : 1;
                }
            });
        });
    };
    /**
     * Account type name edit from grid
     * @param type_name
     * @param accountTypeObject
     */
    AdminMoreAccountTypeComponent.prototype.onAccountTypeNameUpdate = function (type_name, accountTypeObject) {
        var _this = this;
        var params = { 'type_name': type_name };
        this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BANK_TYPE_LIST, accountTypeObject.id, params).subscribe(function (Response) {
            _this.accountType.map(function (item) {
                if (item.id === accountTypeObject.id) {
                    item.type_name = type_name;
                }
            });
        });
    };
    /**
     * Create Account Type Form
     */
    AdminMoreAccountTypeComponent.prototype.createAccountTypeForm = function () {
        this.addAccountForm = this._fb.group({
            type_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    /**
     * On Add or Update Account Type
     * @param formParams
     * @param {boolean} isValid
     * @param accountTypeObject
     */
    AdminMoreAccountTypeComponent.prototype.onAddAccountType = function (formParams, isValid, accountTypeObject) {
        var _this = this;
        if (isValid) {
            formParams['is_active'] = 1;
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BANK_TYPE_LIST, formParams).subscribe(function (Response) {
                _this.getAccountTypeList(1);
                _this.createAccountTypeForm();
                _this.addAccountTypeForm.resetForm();
            });
        }
    };
    /**
     * Pagination page change method
     * @param event
     */
    AdminMoreAccountTypeComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getAccountTypeList(event.pageIndex + 1);
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    AdminMoreAccountTypeComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    AdminMoreAccountTypeComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getAccountTypeList(1, sortKey, sortVal);
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    AdminMoreAccountTypeComponent.prototype.setAdvanceFilter = function (form, flag) {
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
                    if (key === 'type_name') {
                        this.likeJSON['type_name'] = encodeURIComponent(form.value[key]);
                    }
                }
            }
            this.getAccountTypeList(1);
        }
    };
    /**
     * getting advanced search params for conference room list api
     * @returns {{}}
     */
    AdminMoreAccountTypeComponent.prototype.getSearchParams = function () {
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
    AdminMoreAccountTypeComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_10__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addAccountTypeForm'),
        __metadata("design:type", Object)
    ], AdminMoreAccountTypeComponent.prototype, "addAccountTypeForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AdminMoreAccountTypeComponent.prototype, "close", void 0);
    AdminMoreAccountTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-more-account-type',
            template: __webpack_require__(/*! ./admin-more-account-type.component.html */ "./src/app/admin/administration-module/admin-more-account-type/admin-more-account-type.component.html"),
            styles: [__webpack_require__(/*! ./admin-more-account-type.component.scss */ "./src/app/admin/administration-module/admin-more-account-type/admin-more-account-type.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"]])
    ], AdminMoreAccountTypeComponent);
    return AdminMoreAccountTypeComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_9__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/administration-module/admin-more-account-type/admin-more-account-type.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/admin-more-account-type/admin-more-account-type.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AdminMoreAccountTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMoreAccountTypeModule", function() { return AdminMoreAccountTypeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_more_account_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-more-account-type.component */ "./src/app/admin/administration-module/admin-more-account-type/admin-more-account-type.component.ts");
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
        component: _admin_more_account_type_component__WEBPACK_IMPORTED_MODULE_2__["AdminMoreAccountTypeComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var AdminMoreAccountTypeModule = /** @class */ (function () {
    function AdminMoreAccountTypeModule() {
    }
    AdminMoreAccountTypeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"]
            ],
            declarations: [_admin_more_account_type_component__WEBPACK_IMPORTED_MODULE_2__["AdminMoreAccountTypeComponent"]]
        })
    ], AdminMoreAccountTypeModule);
    return AdminMoreAccountTypeModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-more-account-type-admin-more-account-type-module.js.map