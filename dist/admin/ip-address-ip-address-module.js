(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ip-address-ip-address-module"],{

/***/ "./src/app/admin/administration-module/ip-address/add-ip-address-dialog/add-ip-address-dialog.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/ip-address/add-ip-address-dialog/add-ip-address-dialog.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start ADD IP ADDRESS dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{ipAddress ? 'Update' : 'Add'}} IP Address</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addIpAddressForm\" (submit)=\"onSubmitIP(addIpAddressForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"IP Addreess From\" formControlName=\"from_ip\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addIpAddressForm.get('from_ip'))\"\r\n                            [errMsg]=\"validationMsg.IP_ADDRESS_FORM_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"IP Addreess To\" formControlName=\"to_ip\"/>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Server Access\" formControlName=\"access_by\" required>\r\n              <mat-option *ngFor=\"let access of accessByList\" [value]=\"access?.key\">\r\n                {{ access?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addIpAddressForm.get('access_by'))\"\r\n                            [errMsg]=\"validationMsg.SERVER_ACCESS_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Belongs To\" formControlName=\"belongs_to\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addIpAddressForm.get('belongs_to'))\"\r\n                            [errMsg]=\"validationMsg.BELONGS_TO_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" [disabled]=\"addIpAddressForm.invalid\">{{ipAddress ? 'UPDATE': 'ADD'}}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change InOut Time dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/ip-address/add-ip-address-dialog/add-ip-address-dialog.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/ip-address/add-ip-address-dialog/add-ip-address-dialog.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AddIpAddressDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIpAddressDialogComponent", function() { return AddIpAddressDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
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









var AddIpAddressDialogComponent = /** @class */ (function (_super) {
    __extends(AddIpAddressDialogComponent, _super);
    function AddIpAddressDialogComponent(_fb, _commonCrudService, _sharedService, dialogRef, data) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this.dialogRef = dialogRef;
        _this.data = data;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.accessByList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["access_by"];
        return _this;
    }
    AddIpAddressDialogComponent.prototype.ngOnInit = function () {
        this.ipAddress = (this.data.ipData) ? this.data.ipData : [];
        this.createAddIpAddressForm();
    };
    /**
     * Create add ip address
     */
    AddIpAddressDialogComponent.prototype.createAddIpAddressForm = function () {
        var _this = this;
        var accessBy = '';
        if (this.ipAddress) {
            var val = this.accessByList.filter(function (elem) { return elem.label === _this.ipAddress.access_by; });
            accessBy = (val.length) ? val[0].key : '';
        }
        this.addIpAddressForm = this._fb.group({
            from_ip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.ipAddress) ? this.ipAddress.from_ip : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            to_ip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.ipAddress) ? this.ipAddress.to_ip : ''),
            access_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.ipAddress) ? accessBy : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            belongs_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.ipAddress) ? this.ipAddress.belongs_to : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    /** On Submit Form
     * @param form
     */
    AddIpAddressDialogComponent.prototype.onSubmitIP = function (form) {
        var _this = this;
        if (form.valid) {
            if (this.ipAddress.id > 0) {
                form.value['_method'] = 'put';
                this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].IPADDRESS_UPDATE, this.ipAddress.id, form.value).subscribe(function (response) {
                    _this.dialogRef.close();
                });
            }
            else {
                form.value['to_ip'] = (form.value.to_ip === '') ? '0.0.0.0' : form.value.to_ip;
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].IPADDRESS_ADD, form.value).subscribe(function (response) {
                    _this.dialogRef.close();
                });
            }
        }
    };
    AddIpAddressDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    AddIpAddressDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-ip-address-dialog',
            template: __webpack_require__(/*! ./add-ip-address-dialog.component.html */ "./src/app/admin/administration-module/ip-address/add-ip-address-dialog/add-ip-address-dialog.component.html")
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AddIpAddressDialogComponent);
    return AddIpAddressDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/administration-module/ip-address/ip-address.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/administration-module/ip-address/ip-address.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- IP Address Container -->\r\n<div class=\"ip-address-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>ADMINISTRATION</span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">IP ADDRESS</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <button class=\"open-dialog-btn MT-5\" *ngIf=\"tabData['add_edit']\" (click)=\"onAddIpAddressDialog(null)\">\r\n            <mat-icon class=\"material-icons\">add</mat-icon>\r\n            IP Address\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"grid-search\">\r\n            <form [formGroup]=\"filterForm\">\r\n              <mat-form-field [floatLabel]=\"'never'\">\r\n                <input matInput placeholder=\"Search\" formControlName=\"manage_IP_search\"\r\n                       (keyup)=\"setAdvanceFilter(filterForm)\">\r\n              </mat-form-field>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n            <th width=\"15%\">From</th>\r\n            <th width=\"10%\">To</th>\r\n            <th width=\"15%\">Server access</th>\r\n            <th width=\"20%\">Belongs to</th>\r\n            <th width=\"27%\">Modified</th>\r\n            <th width=\"8%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let ipaddress of IPAddressList; let i = index\">\r\n              <td width=\"5%\">{{i+1}}</td>\r\n              <td width=\"15%\" class=\"word-break\">{{ipaddress?.from_ip}}</td>\r\n              <td width=\"10%\">{{ipaddress?.to_ip}}</td>\r\n              <td width=\"15%\"><span class=\"{{getClassNameFromAccessBy(ipaddress?.access_by)}}\"><mat-icon\r\n                class=\"grid_icon_trip_origin\">trip_origin</mat-icon><span class=\"fw-500\">{{ipaddress?.access_by}}</span> </span>\r\n              </td>\r\n              <td width=\"20%\" class=\"word-break\">{{ipaddress?.belongs_to}}</td>\r\n              <td width=\"27%\">{{ipaddress?.modified_by.modified_by}} | {{ipaddress?.modified_on | date:'dd-MM-yyyy'}}\r\n              </td>\r\n              <td width=\"8%\">\r\n                <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Edit'\" *ngIf=\"tabData['add_edit']\"\r\n                          (click)=\"onAddIpAddressDialog(ipaddress)\">edit\r\n                </mat-icon>\r\n                <mat-icon class=\"red-color\" *ngIf=\"tabData['delete']\" [matTooltip]=\"'Delete'\"\r\n                          (click)=\"onDeleteConfirmationDialog(ipaddress)\">delete\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\" [pageSize]=\"pageSize\" [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\" (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>  <!-- End Table -->\r\n  <!-- End Grid Inner Header -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/ip-address/ip-address.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/administration-module/ip-address/ip-address.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluaXN0cmF0aW9uLW1vZHVsZS9pcC1hZGRyZXNzL2lwLWFkZHJlc3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/administration-module/ip-address/ip-address.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/administration-module/ip-address/ip-address.component.ts ***!
  \********************************************************************************/
/*! exports provided: IpAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpAddressComponent", function() { return IpAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_ip_address_dialog_add_ip_address_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-ip-address-dialog/add-ip-address-dialog.component */ "./src/app/admin/administration-module/ip-address/add-ip-address-dialog/add-ip-address-dialog.component.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var IpAddressComponent = /** @class */ (function () {
    function IpAddressComponent(_router, _fb, dialog, _commonCrudService, _sharedService) {
        this._router = _router;
        this._fb = _fb;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this.IPAddressList = [];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].PAGINATION_ARRAY[1];
        this.orJSON = {};
        // Other Variables
        this.isOpenFilter = false;
        this.isOpenHistoryDialog = false;
        this.isOpenFilterView = false;
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].IP_ADDRESS;
    }
    IpAddressComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.initializationMethod();
    };
    // Initialization Methods
    IpAddressComponent.prototype.initializationMethod = function () {
        this.getIPList(1, 'id', 'desc');
        this.createFilterForm();
    };
    /**
     * Create Advance Filter
     */
    IpAddressComponent.prototype.createFilterForm = function () {
        this.filterForm = this._fb.group({
            manage_IP_search: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    /**
     * Initialization methods
     * @param pageNumber
     * @param key
     * @param val
     */
    IpAddressComponent.prototype.getIPList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].IPADDRESS_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam())
            .subscribe(function (response) {
            _this.handleIPListResponse(response);
        });
    };
    /**
     * handling the response
     * @param response
     */
    IpAddressComponent.prototype.handleIPListResponse = function (response) {
        this.IPAddressList = response['payload']['data'];
        this.page = response['pager']['pageNumber'];
        this.pageIndex = this.page - 1;
        this.totalRecords = +(response['pager']['totalRecords']);
        this.sortBy = response['pager']['sortBy'];
        this.sortOrder = response['pager']['sortOrder'];
    };
    // Events
    /**
     * sort function for sort data
     * @param sortKey
     * @param sortVal
     */
    IpAddressComponent.prototype.getSortClientData = function (sortKey, sortVal) {
        this.getIPList(1, sortKey, sortVal);
    };
    /**
     * Create Change InOut
     */
    IpAddressComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            manage_IP_search: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    IpAddressComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.orJSON = {};
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
                    if (key === 'manage_IP_search') {
                        this.orJSON['belongs_to'] = form.value[key];
                    }
                }
            }
            this.getIPList(1, 'id', 'desc');
        }
    };
    /**
     * Add IP Address
     * */
    IpAddressComponent.prototype.onAddIpAddressDialog = function (ipAddress) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_ip_address_dialog_add_ip_address_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddIpAddressDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                ipData: ipAddress
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getIPList(1, '', 'desc');
        });
    };
    /**
     * on delete confirmation dialog
     */
    IpAddressComponent.prototype.onDeleteConfirmationDialog = function (ipAddress) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this Ip Address ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteIPFieldData(ipAddress);
            }
            _this.getIPList(1, '', 'desc');
        });
    };
    IpAddressComponent.prototype.deleteIPFieldData = function (data) {
        var _this = this;
        this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].IPADDRESS_DELETE, data.id).subscribe(function (Response) {
            _this.getIPList(1, '', 'desc');
        });
    };
    IpAddressComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getIPList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    IpAddressComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_11__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    // helper
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{pageNumber: number; recordsPerPage: number}}
     */
    IpAddressComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
     * Default search params for client listing API
     * @returns {{}}
     */
    IpAddressComponent.prototype.getSearchParam = function () {
        var params = {};
        if (Object.keys(this.orJSON).length !== 0) {
            params['or'] = { 'like': [this.orJSON] };
        }
        return params;
    };
    /**
     *
     * @param access_by
     */
    IpAddressComponent.prototype.getClassNameFromAccessBy = function (access_by) {
        if (access_by === 'Live') {
            return 'turquoise-color';
        }
        else if (access_by === 'Other') {
            return 'orange-color';
        }
        else if (access_by === 'Local') {
            return 'primary-color';
        }
    };
    IpAddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ip-address',
            template: __webpack_require__(/*! ./ip-address.component.html */ "./src/app/admin/administration-module/ip-address/ip-address.component.html"),
            styles: [__webpack_require__(/*! ./ip-address.component.scss */ "./src/app/admin/administration-module/ip-address/ip-address.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], IpAddressComponent);
    return IpAddressComponent;
}());



/***/ }),

/***/ "./src/app/admin/administration-module/ip-address/ip-address.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/administration-module/ip-address/ip-address.module.ts ***!
  \*****************************************************************************/
/*! exports provided: IpAddressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpAddressModule", function() { return IpAddressModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ip_address_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ip-address.component */ "./src/app/admin/administration-module/ip-address/ip-address.component.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _add_ip_address_dialog_add_ip_address_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-ip-address-dialog/add-ip-address-dialog.component */ "./src/app/admin/administration-module/ip-address/add-ip-address-dialog/add-ip-address-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _ip_address_component__WEBPACK_IMPORTED_MODULE_2__["IpAddressComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]],
        children: [
            {
                path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].IP_ADDRESS_ROUTE,
                component: _ip_address_component__WEBPACK_IMPORTED_MODULE_2__["IpAddressComponent"]
            }
        ]
    }
];
var IpAddressModule = /** @class */ (function () {
    function IpAddressModule() {
    }
    IpAddressModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_6__["UtilityModule"]
            ],
            declarations: [_ip_address_component__WEBPACK_IMPORTED_MODULE_2__["IpAddressComponent"], _add_ip_address_dialog_add_ip_address_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AddIpAddressDialogComponent"]],
            entryComponents: [_add_ip_address_dialog_add_ip_address_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AddIpAddressDialogComponent"]]
        })
    ], IpAddressModule);
    return IpAddressModule;
}());



/***/ })

}]);
//# sourceMappingURL=ip-address-ip-address-module.js.map