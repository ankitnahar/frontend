(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrms-dashboard-leave-balance-list-leave-balance-list-module"],{

/***/ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/edit-leave-balance-dialog/edit-leave-balance-dialog.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/edit-leave-balance-dialog/edit-leave-balance-dialog.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Edit Leave details dialog  -->\r\n<div class=\"modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Update Leave Balance : {{leaveBalance?.userfullname}}</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose(false)\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"EditLeaveListForm\" (submit)=\"onSubmitForm(EditLeaveListForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"User Name\"\r\n                   formControlName=\"userfullname\" readonly/>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Bio ID\"\r\n                   formControlName=\"user_bio_id\" type=\"number\" readonly/>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"CL\"\r\n                   formControlName=\"cl\" type=\"number\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(EditLeaveListForm.get('cl'))\"\r\n                            [errMsg]=\"validationMsg.LEAVE_CL_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"CO\"\r\n                   formControlName=\"co\" type=\"number\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(EditLeaveListForm.get('co'))\"\r\n                            [errMsg]=\"validationMsg.LEAVE_CO_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"LA\"\r\n                   formControlName=\"la\" type=\"number\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(EditLeaveListForm.get('la'))\"\r\n                            [errMsg]=\"validationMsg.LEAVE_LA_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" [disabled]=\"EditLeaveListForm.invalid\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change InOut Time dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/edit-leave-balance-dialog/edit-leave-balance-dialog.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/edit-leave-balance-dialog/edit-leave-balance-dialog.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: EditLeaveBalanceDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLeaveBalanceDialogComponent", function() { return EditLeaveBalanceDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
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







var EditLeaveBalanceDialogComponent = /** @class */ (function (_super) {
    __extends(EditLeaveBalanceDialogComponent, _super);
    function EditLeaveBalanceDialogComponent(dialogRef, data, _fb, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        return _this;
    }
    EditLeaveBalanceDialogComponent.prototype.ngOnInit = function () {
        this.leaveBalance = (this.data) ? this.data.leaveBalance : null;
        this.createLeaveBalanceForm();
    };
    /**
     * Update Leave balance Form
     */
    EditLeaveBalanceDialogComponent.prototype.createLeaveBalanceForm = function () {
        this.EditLeaveListForm = this._fb.group({
            userfullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.leaveBalance) ? this.leaveBalance.userfullname : null),
            user_bio_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.leaveBalance) ? this.leaveBalance.user_bio_id : null),
            cl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.leaveBalance) ? this.leaveBalance.cl : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            co: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.leaveBalance) ? this.leaveBalance.co : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            la: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.leaveBalance) ? this.leaveBalance.la : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.leaveBalance) ? this.leaveBalance.month : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    /**
     * On Close
     * @param value
     */
    EditLeaveBalanceDialogComponent.prototype.onClose = function (value) {
        this.dialogRef.close(value);
    };
    /**
     * On Submit Form
     * @param form
     */
    EditLeaveBalanceDialogComponent.prototype.onSubmitForm = function (form) {
        var _this = this;
        if (form.valid) {
            this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].LEAVE_BALANCE_LIST, this.leaveBalance.id, form.value).subscribe(function (response) {
                _this.dialogRef.close(true);
            });
        }
    };
    EditLeaveBalanceDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-leave-balance-dialog',
            template: __webpack_require__(/*! ./edit-leave-balance-dialog.component.html */ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/edit-leave-balance-dialog/edit-leave-balance-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]])
    ], EditLeaveBalanceDialogComponent);
    return EditLeaveBalanceDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/leave-balance-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/leave-balance-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Leave Balance Container -->\r\n<div class=\"newsletter-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span>HRMS</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">LEAVE BALANCE LISTING</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <!--<button class=\"btn btn-primary MT-5\" (click)=\"onUploadLeaveList()\">-->\r\n          <!--<mat-icon class=\"material-icons v-align-middle\">file_upload</mat-icon>-->\r\n          <!--Upload Leave Balance-->\r\n          <!--</button>-->\r\n            <form [formGroup]=\"filterForm\">\r\n              <mat-form-field [floatLabel]=\"'never'\">\r\n                <input matInput placeholder=\"Search\" formControlName=\"userfullname\"\r\n                       (keyup)=\"setAdvanceFilter(filterForm)\">\r\n              </mat-form-field>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"downloadExcel()\">\r\n                <span>Excel</span>\r\n                <mat-icon>file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n            <th width=\"20%\">User Name</th>\r\n            <th width=\"10%\">Bio ID</th>\r\n            <th width=\"10%\">Month</th>\r\n            <th width=\"10%\">CL</th>\r\n            <th width=\"10%\">CO</th>\r\n            <th width=\"15%\">LA</th>\r\n            <th width=\"10%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let leavelist of leaveBalanceList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"20%\">{{leavelist.userfullname}}</td>\r\n              <td width=\"10%\">{{leavelist.user_bio_id}}</td>\r\n              <td width=\"10%\">{{leavelist.month}}</td>\r\n              <td width=\"10%\">{{leavelist.cl}}</td>\r\n              <td width=\"10%\">{{leavelist.co}}</td>\r\n              <td width=\"15%\">{{leavelist.la}}</td>\r\n              <td width=\"10%\">\r\n                <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Edit'\"\r\n                          (click)=\"onEditLeaveBalance(leavelist)\">edit\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>  <!-- End Table -->\r\n  <!-- End Grid Inner Header -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/leave-balance-list.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/leave-balance-list.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2hybXMtbW9kdWxlL2hybXMtZGFzaGJvYXJkL2xlYXZlLWJhbGFuY2UtbGlzdC9sZWF2ZS1iYWxhbmNlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/leave-balance-list.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/leave-balance-list.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LeaveBalanceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveBalanceListComponent", function() { return LeaveBalanceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _upload_leave_balance_list_upload_leave_balance_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-leave-balance-list/upload-leave-balance-list.component */ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/upload-leave-balance-list/upload-leave-balance-list.component.ts");
/* harmony import */ var _edit_leave_balance_dialog_edit_leave_balance_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-leave-balance-dialog/edit-leave-balance-dialog.component */ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/edit-leave-balance-dialog/edit-leave-balance-dialog.component.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
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











var LeaveBalanceListComponent = /** @class */ (function (_super) {
    __extends(LeaveBalanceListComponent, _super);
    function LeaveBalanceListComponent(_fb, _router, dialog, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._router = _router;
        _this.dialog = dialog;
        _this._commonCrudService = _commonCrudService;
        _this.equalJSON = {};
        _this.likeJSON = {};
        _this.findinSet = {};
        // Data Variables
        _this.leaveBalanceList = [];
        // MatPaginator Inputs
        _this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["BASE"].PAGINATION_ARRAY;
        _this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        _this.isOpenFilter = false;
        _this.isOpenHistoryDialog = false;
        return _this;
    }
    LeaveBalanceListComponent.prototype.ngOnInit = function () {
        this.getLeaveBalanceList(1);
        this.createFilterForm();
    };
    LeaveBalanceListComponent.prototype.getLeaveBalanceList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].LEAVE_BALANCE_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParams()).subscribe(function (Response) {
            _this.handleResponse(Response);
        });
    };
    /**
     * getting advanced search params for conference room list api
     * @returns {{}}
     */
    LeaveBalanceListComponent.prototype.getSearchParams = function () {
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
        if (Object.keys(this.findinSet).length !== 0) {
            params['findinset'] = this.findinSet;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length) {
            params['compare'] = filter;
        }
        return params;
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    LeaveBalanceListComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    LeaveBalanceListComponent.prototype.handleResponse = function (response) {
        this.leaveBalanceList = response['payload']['data'];
        this.page = response['pager']['pageNumber'];
        this.pageIndex = this.page - 1;
        this.totalRecords = +(response['pager']['totalRecords']);
        this.sortBy = response['pager']['sortBy'];
        this.sortOrder = response['pager']['sortOrder'];
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    LeaveBalanceListComponent.prototype.setAdvanceFilter = function (form, flag) {
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
                    if (key === 'userfullname') {
                        this.likeJSON['userfullname'] = encodeURIComponent(form.value[key]);
                    }
                }
            }
            this.getLeaveBalanceList(1, 'id', 'desc');
        }
    };
    /**
     * Toogle Filter
     */
    LeaveBalanceListComponent.prototype.onOpenFilter = function () {
        this.isOpenFilter = !this.isOpenFilter;
    };
    /**
     * Close filter
     */
    LeaveBalanceListComponent.prototype.onCloseFilter = function () {
        this.isOpenFilter = false;
    };
    LeaveBalanceListComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getLeaveBalanceList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Create Advance Filter
     */
    LeaveBalanceListComponent.prototype.createFilterForm = function () {
        this.filterForm = this._fb.group({
            userfullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    /**
     * Edit Leave Balane
     * */
    LeaveBalanceListComponent.prototype.onEditLeaveBalance = function (leaveBalance) {
        var _this = this;
        var dialogRef = this.dialog.open(_edit_leave_balance_dialog_edit_leave_balance_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EditLeaveBalanceDialogComponent"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {
                leaveBalance: leaveBalance
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getLeaveBalanceList(1);
            }
        });
    };
    /**
     * Upload excel
     * */
    LeaveBalanceListComponent.prototype.onUploadLeaveList = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_upload_leave_balance_list_upload_leave_balance_list_component__WEBPACK_IMPORTED_MODULE_5__["UploadLeaveBalanceListComponent"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getLeaveBalanceList(1);
            }
        });
    };
    LeaveBalanceListComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Export to Excel
     */
    LeaveBalanceListComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].LEAVE_BALANCE_LIST, params, this.getSearchParams(), 'Leave Balance - ', 0).subscribe(function (response) {
        });
    };
    LeaveBalanceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave-balance-list',
            template: __webpack_require__(/*! ./leave-balance-list.component.html */ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/leave-balance-list.component.html"),
            styles: [__webpack_require__(/*! ./leave-balance-list.component.scss */ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/leave-balance-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"]])
    ], LeaveBalanceListComponent);
    return LeaveBalanceListComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_10__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/leave-balance-list.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/leave-balance-list.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: LeaveBalanceListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveBalanceListModule", function() { return LeaveBalanceListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _leave_balance_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-balance-list.component */ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/leave-balance-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _upload_leave_balance_list_upload_leave_balance_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-leave-balance-list/upload-leave-balance-list.component */ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/upload-leave-balance-list/upload-leave-balance-list.component.ts");
/* harmony import */ var _edit_leave_balance_dialog_edit_leave_balance_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-leave-balance-dialog/edit-leave-balance-dialog.component */ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/edit-leave-balance-dialog/edit-leave-balance-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _leave_balance_list_component__WEBPACK_IMPORTED_MODULE_2__["LeaveBalanceListComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]],
    },
];
var LeaveBalanceListModule = /** @class */ (function () {
    function LeaveBalanceListModule() {
    }
    LeaveBalanceListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_leave_balance_list_component__WEBPACK_IMPORTED_MODULE_2__["LeaveBalanceListComponent"], _upload_leave_balance_list_upload_leave_balance_list_component__WEBPACK_IMPORTED_MODULE_6__["UploadLeaveBalanceListComponent"], _edit_leave_balance_dialog_edit_leave_balance_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditLeaveBalanceDialogComponent"]],
            entryComponents: [_upload_leave_balance_list_upload_leave_balance_list_component__WEBPACK_IMPORTED_MODULE_6__["UploadLeaveBalanceListComponent"], _edit_leave_balance_dialog_edit_leave_balance_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditLeaveBalanceDialogComponent"]]
        })
    ], LeaveBalanceListModule);
    return LeaveBalanceListModule;
}());



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/upload-leave-balance-list/upload-leave-balance-list.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/upload-leave-balance-list/upload-leave-balance-list.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Upload Leave List  dialog  -->\r\n<div class=\"modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Upload Leave Balance</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose(false)\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n  <div class=\"modal__body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PLR-0\">\r\n        <div class=\"client-upload-docuemnts-dialog MT-5 col-md-12 PLR-0\">\r\n          <div class=\"container_upload\" appDnd (fileDropped)=\"onFileDropped($event)\">\r\n            <input type=\"file\" #fileDropRef id=\"fileDropRef\" multiple\r\n                   (change)=\"fileBrowseHandler($event)\" accept=\".csv\"/>\r\n            <mat-icon>cloud_upload</mat-icon>\r\n            <h3>Drag and drop file here</h3>\r\n            <h3>or</h3>\r\n            <br/>\r\n            <br/>\r\n            <label for=\"fileDropRef\">Browse for file</label>\r\n          </div>\r\n          <a href=\"{{url+'docs/leave.csv'}}\" class=\"primary-color cursor-pointer\">\r\n            <mat-icon class=\"upload_ico\">get_app</mat-icon>\r\n            Download supported format</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/upload-leave-balance-list/upload-leave-balance-list.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/upload-leave-balance-list/upload-leave-balance-list.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: UploadLeaveBalanceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadLeaveBalanceListComponent", function() { return UploadLeaveBalanceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
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







var UploadLeaveBalanceListComponent = /** @class */ (function () {
    function UploadLeaveBalanceListComponent(dialogRef, data, _commonCrudService, _sharedService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this.files = [];
        this.uploadDoc = new FormData();
        this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_2__["ValidationConstantMessage"]();
        this.url = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].IMAGE_PATH;
    }
    UploadLeaveBalanceListComponent.prototype.ngOnInit = function () {
    };
    /**
     * on file drop handler
     */
    UploadLeaveBalanceListComponent.prototype.onFileDropped = function ($event) {
        this.prepareFilesList($event.target.files, $event);
    };
    /**
     * handle file from browsing
     */
    UploadLeaveBalanceListComponent.prototype.fileBrowseHandler = function ($event) {
        this.prepareFilesList($event.target.files, $event);
    };
    /**
     * Delete file from files list
     * @param index (File index)
     */
    UploadLeaveBalanceListComponent.prototype.deleteFile = function (index) {
        this.files.splice(index, 1);
    };
    /**
     * Simulate the upload process
     */
    UploadLeaveBalanceListComponent.prototype.uploadFilesSimulator = function (index) {
        var _this = this;
        setTimeout(function () {
            if (index === _this.files.length) {
                return;
            }
            else {
                var progressInterval_1 = setInterval(function () {
                    if (_this.files[index].progress === 100) {
                        clearInterval(progressInterval_1);
                        _this.uploadFilesSimulator(index + 1);
                    }
                    else {
                        _this.files[index].progress += 5;
                    }
                }, 200);
            }
        }, 1000);
    };
    /**
     * Convert Files list to normal array list
     * @param files (Files List)
     */
    UploadLeaveBalanceListComponent.prototype.prepareFilesList = function (files, $event) {
        var i = 0;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var item = files_1[_i];
            item.progress = 0;
            this.files.push(item);
            this.uploadFile(item, i);
            i++;
        }
        this.uploadFilesSimulator(0);
    };
    /**
     * format bytes
     * @param bytes (File size in bytes)
     * @param decimals (Decimals point)
     */
    UploadLeaveBalanceListComponent.prototype.formatBytes = function (bytes, decimals) {
        if (bytes === 0) {
            return '0 Bytes';
        }
        var k = 1024;
        var dm = decimals <= 0 ? 0 : decimals || 2;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    /**
     * On Upload File
     * @param files
     * @param index
     */
    UploadLeaveBalanceListComponent.prototype.uploadFile = function (files, index) {
        var _this = this;
        if (files) {
            // console.log(files);
            var filesList = files;
            Object.keys(files).forEach(function (itemUploadFile) {
                var name = files.name;
                var lastDot = name.lastIndexOf('.');
                var ext = name.substring(lastDot + 1);
                console.log(ext);
                if (ext.toLowerCase() === "csv") {
                    if (files.size > _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstant"].TWINTY_FIVE_MP_FILE_ALLOWED) {
                        _this.deleteFile(index);
                        _this._sharedService.setToastMessage(_this.validationMsg.VALID_TEINTY_FIVE_MB_IMAGE_SIZE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
                    }
                    else {
                        _this.uploadDoc.delete('upload');
                        _this.uploadDoc.append('upload', files);
                        if (_this.uploadDoc) {
                            _this._commonCrudService.uploadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].LEAVE_BALANCE_UPDATE, _this.uploadDoc).subscribe(function (response) {
                                _this.onClose(true);
                            });
                        }
                    }
                }
                else {
                    _this.deleteFile(index);
                    _this._sharedService.setToastMessage(files.name + ' - ' + _this.validationMsg.VALID_DOCUMENT_TYPE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
                }
            });
        }
    };
    /**
     * On Close dialog
     * @param value
     */
    UploadLeaveBalanceListComponent.prototype.onClose = function (value) {
        this.dialogRef.close(value);
    };
    UploadLeaveBalanceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-leave-balance-list',
            template: __webpack_require__(/*! ./upload-leave-balance-list.component.html */ "./src/app/admin/hrms-module/hrms-dashboard/leave-balance-list/upload-leave-balance-list/upload-leave-balance-list.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], UploadLeaveBalanceListComponent);
    return UploadLeaveBalanceListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=hrms-dashboard-leave-balance-list-leave-balance-list-module.js.map