(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-emails-manage-emails-module"],{

/***/ "./src/app/admin/administration-module/manage-emails/emails-edit-cc-dialog/emails-edit-cc-dialog.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-emails/emails-edit-cc-dialog/emails-edit-cc-dialog.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start Reason Management form Dialog-->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">EDIT CC</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n  <form [formGroup]=\"editCCForm\" (submit)=\"onSubmitEmail(editCCForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row MB-20\">\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"CC\" formControlName=\"cc\" rows=\"4\"></textarea>\r\n            <!--<input matInput placeholder=\"CC\" formControlName=\"cc\" required/>-->\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(editCCForm.get('cc'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_ADDRESS_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button type=\"submit\" class=\"btn-primary\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/manage-emails/emails-edit-cc-dialog/emails-edit-cc-dialog.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-emails/emails-edit-cc-dialog/emails-edit-cc-dialog.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: EmailsEditCcDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsEditCcDialogComponent", function() { return EmailsEditCcDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
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








var EmailsEditCcDialogComponent = /** @class */ (function (_super) {
    __extends(EmailsEditCcDialogComponent, _super);
    function EmailsEditCcDialogComponent(_fb, _commonCrudService, _sharedService, dialogRef, data) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this.dialogRef = dialogRef;
        _this.data = data;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        return _this;
    }
    EmailsEditCcDialogComponent.prototype.ngOnInit = function () {
        this.manageEmail = (this.data.emailData) ? this.data.emailData : [];
        this.createEditCCForm();
    };
    EmailsEditCcDialogComponent.prototype.createEditCCForm = function () {
        this.editCCForm = this._fb.group({
            cc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.manageEmail.cc, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["CommonRegex"].MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
        });
    };
    EmailsEditCcDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    /** On Submit Form
     * @param form
     */
    EmailsEditCcDialogComponent.prototype.onSubmitEmail = function (form) {
        var _this = this;
        form.value['_method'] = 'put';
        form.value['is_detail'] = '0';
        form.value['is_active'] = this.manageEmail.is_active;
        if (form.valid) {
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].MANAGEEMAIL_UPDATE, this.manageEmail.id, form.value).subscribe(function (response) {
                _this.dialogRef.close(true);
            });
        }
    };
    EmailsEditCcDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emails-edit-cc-dialog',
            template: __webpack_require__(/*! ./emails-edit-cc-dialog.component.html */ "./src/app/admin/administration-module/manage-emails/emails-edit-cc-dialog/emails-edit-cc-dialog.component.html")
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], EmailsEditCcDialogComponent);
    return EmailsEditCcDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/administration-module/manage-emails/manage-emails.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-emails/manage-emails.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Manage Emails Container -->\r\n<div class=\"manage-emails-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>ADMINISTRATION</span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">MANAGE EMAILS</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3> Manage Emails</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"grid-search\">\r\n            <form [formGroup]=\"filterForm\">\r\n              <mat-form-field [floatLabel]=\"'never'\">\r\n                <input matInput placeholder=\"Search\" formControlName=\"manage_emails_search\"\r\n                       (keyup)=\"setAdvanceFilter(filterForm)\">\r\n              </mat-form-field>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n            <th width=\"22%\">Code</th>\r\n            <th width=\"30%\">Subject</th>\r\n            <th width=\"35%\">CC</th>\r\n            <th width=\"8%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody *ngIf=\"manageEmailList.length\">\r\n            <tr *ngFor=\"let emaillist of manageEmailList; let i = index\">\r\n              <td width=\"5%\">{{i+1}}</td>\r\n              <td width=\"22%\" class=\"word-break\">{{emaillist?.code}}</td>\r\n              <td width=\"30%\" class=\"word-break\">{{emaillist?.subject}}</td>\r\n              <td width=\"35%\" class=\"word-break-emails\"> {{emaillist?.cc}}\r\n                <a (click)=\"onEditCCDialog(emaillist)\" *ngIf=\"tabData['add_edit']\"\r\n                   class=\"cursor-pointer light-orange-color\">\r\n                  <mat-icon class=\"cc-f-12 v-align-middle\">edit</mat-icon>\r\n                </a></td>\r\n              <td width=\"8%\">\r\n                <a class=\"light-orange-color\" [matTooltip]=\"'Set Email Template'\" *ngIf=\"tabData['add_edit']\"\r\n                   (click)=\"onSetEmailTemplate(emaillist)\">\r\n                  <mat-icon class=\"material-icons\">email</mat-icon>\r\n                </a>\r\n                <a class=\"primary-color\">\r\n                  <mat-slide-toggle *ngIf=\"slideActiveInactive[i] && tabData['add_edit']\"\r\n                                    [(ngModel)]=\"slideActiveInactive[i]\"\r\n                                    (change)=\"openToggleConfirmationDialog($event, emaillist, i)\"></mat-slide-toggle>\r\n                  <mat-slide-toggle *ngIf=\"!slideActiveInactive[i] && tabData['add_edit']\"\r\n                                    [checked]=\"(emaillist?.is_active) ? true : false\"\r\n                                    (change)=\"openToggleConfirmationDialog($event, emaillist, i)\"></mat-slide-toggle>\r\n\r\n                </a>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table *ngIf=\"manageEmailList.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>  <!-- End Table -->\r\n  <div *ngIf=\"manageEmailList.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/manage-emails/manage-emails.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-emails/manage-emails.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".manage-emails-container .cc-f-12 {\n  font-size: 1.6rem !important; }\n\n.manage-emails-container .word-break-emails {\n  word-break: break-word; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vYWRtaW5pc3RyYXRpb24tbW9kdWxlL21hbmFnZS1lbWFpbHMvQzpcXHdhbXA2NFxcd3d3XFxoa19mcm9udGVuZC9wcm9qZWN0c1xcYWRtaW5cXHNyY1xcYXBwXFxhZG1pblxcYWRtaW5pc3RyYXRpb24tbW9kdWxlXFxtYW5hZ2UtZW1haWxzXFxtYW5hZ2UtZW1haWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksNEJBQTRCLEVBQUE7O0FBRmhDO0VBS0ksc0JBQXNCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvYWRtaW4vc3JjL2FwcC9hZG1pbi9hZG1pbmlzdHJhdGlvbi1tb2R1bGUvbWFuYWdlLWVtYWlscy9tYW5hZ2UtZW1haWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hbmFnZS1lbWFpbHMtY29udGFpbmVyIHtcclxuICAuY2MtZi0xMiB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAud29yZC1icmVhay1lbWFpbHMge1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/administration-module/manage-emails/manage-emails.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-emails/manage-emails.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ManageEmailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEmailsComponent", function() { return ManageEmailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _emails_edit_cc_dialog_emails_edit_cc_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emails-edit-cc-dialog/emails-edit-cc-dialog.component */ "./src/app/admin/administration-module/manage-emails/emails-edit-cc-dialog/emails-edit-cc-dialog.component.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ManageEmailsComponent = /** @class */ (function () {
    function ManageEmailsComponent(_fb, _router, dialog, _commonCrudService, _sharedObjService, _sharedService) {
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        // Data Variables
        this.manageEmailList = [];
        this.slideActiveInactive = [];
        // Pagination variables
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["BASE"].PAGINATION_ARRAY[1];
        this.orJSON = {};
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__["ADMINTABACCESS"].MANAGE_EMAIL;
    }
    ManageEmailsComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.initializationMethod();
    };
    // Initialization Methods
    ManageEmailsComponent.prototype.initializationMethod = function () {
        // default API listing code
        this.getEmailList(1, 'id', 'desc');
        this.createAdvanceFilterForm();
    };
    /**
     * Initialization methods
     * @param pageNumber
     * @param key
     * @param val
     */
    ManageEmailsComponent.prototype.getEmailList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].MANAGEEMAIL_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam())
            .subscribe(function (response) {
            _this.handleClientListResponse(response);
        });
    };
    /**
     * handling the response
     * @param response
     */
    ManageEmailsComponent.prototype.handleClientListResponse = function (response) {
        this.manageEmailList = response['payload']['data'];
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
    ManageEmailsComponent.prototype.getSortClientData = function (sortKey, sortVal) {
        this.getEmailList(1, sortKey, sortVal);
    };
    // helper
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{pageNumber: number; recordsPerPage: number}}
     */
    ManageEmailsComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    ManageEmailsComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        params['compare'] = filter;
        if (Object.keys(this.orJSON).length !== 0) {
            params['or'] = { 'like': [this.orJSON] };
        }
        return params;
    };
    /**
     * Create Change InOut
     */
    ManageEmailsComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            manage_emails_search: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    ManageEmailsComponent.prototype.setAdvanceFilter = function (form, flag) {
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
                    if (key === 'manage_emails_search') {
                        this.orJSON['code'] = form.value[key];
                        this.orJSON['cc'] = form.value[key];
                        this.orJSON['subject'] = form.value[key];
                        this.orJSON['to'] = form.value[key];
                    }
                }
            }
            this.getEmailList(1, 'id', 'desc');
        }
    };
    /**
     * Create Advance Filter
     */
    ManageEmailsComponent.prototype.createFilterForm = function () {
        this.filterForm = this._fb.group({
            manage_emails_search: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    /**
     * on redirect set email template
     */
    ManageEmailsComponent.prototype.onSetEmailTemplate = function (manageEmails) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["GLOBALDATAKEYS"].MANAGE_EMAIL, manageEmails);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].MANAGE_EMAILS_SET_EMAIL_TEMPLATE]);
    };
    /**
     * Edit CC Email
     * */
    ManageEmailsComponent.prototype.onEditCCDialog = function (manageEmails) {
        var _this = this;
        var dialogRef = this.dialog.open(_emails_edit_cc_dialog_emails_edit_cc_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EmailsEditCcDialogComponent"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {
                emailData: manageEmails
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getEmailList(1, 'id', 'desc');
        });
    };
    ManageEmailsComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getEmailList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    ManageEmailsComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * ON Active & Inactive email
     * @param event
     * @param manage email
     * @param id
     */
    ManageEmailsComponent.prototype.openToggleConfirmationDialog = function (event, ManageEmails, id) {
        var _this = this;
        var status = event.checked ? 'Inactive' : 'Active';
        var statusNagetive = !event.checked ? 'Inactive' : 'Active';
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationDialogComponent"], {
            data: {
                content: 'Do you want change status from ' + status + ' to ' + statusNagetive
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this.activeInactiveEmails(event.checked, ManageEmails);
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
     *
     * @param action
     * @param manageEmails
     */
    ManageEmailsComponent.prototype.activeInactiveEmails = function (action, manageEmails) {
        var _this = this;
        var params = { 'is_detail': 0, 'is_active': action ? 1 : 0, '_method': 'put' };
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].MANAGEEMAIL_UPDATE, manageEmails.id, params).subscribe(function (response) {
            _this.manageEmailList.map(function (item) {
                if (item.id === manageEmails.id) {
                    item.is_active = item.is_active ? 0 : 1;
                }
            });
            _this.getEmailList(1, 'id', 'desc');
        });
    };
    ManageEmailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-emails',
            template: __webpack_require__(/*! ./manage-emails.component.html */ "./src/app/admin/administration-module/manage-emails/manage-emails.component.html"),
            styles: [__webpack_require__(/*! ./manage-emails.component.scss */ "./src/app/admin/administration-module/manage-emails/manage-emails.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], ManageEmailsComponent);
    return ManageEmailsComponent;
}());



/***/ }),

/***/ "./src/app/admin/administration-module/manage-emails/manage-emails.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-emails/manage-emails.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ManageEmailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEmailsModule", function() { return ManageEmailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _manage_emails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-emails.component */ "./src/app/admin/administration-module/manage-emails/manage-emails.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _set_email_template_set_email_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./set-email-template/set-email-template.component */ "./src/app/admin/administration-module/manage-emails/set-email-template/set-email-template.component.ts");
/* harmony import */ var _emails_edit_cc_dialog_emails_edit_cc_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emails-edit-cc-dialog/emails-edit-cc-dialog.component */ "./src/app/admin/administration-module/manage-emails/emails-edit-cc-dialog/emails-edit-cc-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _manage_emails_component__WEBPACK_IMPORTED_MODULE_2__["ManageEmailsComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'set-email-template',
        component: _set_email_template_set_email_template_component__WEBPACK_IMPORTED_MODULE_6__["SetEmailTemplateComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    }
];
var ManageEmailsModule = /** @class */ (function () {
    function ManageEmailsModule() {
    }
    ManageEmailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_manage_emails_component__WEBPACK_IMPORTED_MODULE_2__["ManageEmailsComponent"], _set_email_template_set_email_template_component__WEBPACK_IMPORTED_MODULE_6__["SetEmailTemplateComponent"], _emails_edit_cc_dialog_emails_edit_cc_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EmailsEditCcDialogComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"]
            ],
            entryComponents: [_emails_edit_cc_dialog_emails_edit_cc_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EmailsEditCcDialogComponent"]]
        })
    ], ManageEmailsModule);
    return ManageEmailsModule;
}());



/***/ }),

/***/ "./src/app/admin/administration-module/manage-emails/set-email-template/set-email-template.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-emails/set-email-template/set-email-template.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Set Email Template Container -->\r\n<div class=\"manage-email-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"cursor-pointer\">home</mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>ADMINISTRATION</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onManageEmails()\">MANAGE EMAILS</a></span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">SET EMAIL TEMPLATE</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!--Start set template form-->\r\n  <div>\r\n    <span class=\"panel-title\">Set Email Template</span>\r\n    <form [formGroup]=\"emailTemplateForm\" (submit)=\"onSubmitEmail(emailTemplateForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n              <label class=\"fw-500\">Subject</label>\r\n            </div>\r\n            <div class=\"col-md-10\">\r\n              <span>{{subject}}</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 MT-20\">\r\n              <label class=\"fw-500\">Content</label>\r\n            </div>\r\n            <div class=\"col-md-10 MT-20\">\r\n              <editor aria-placeholder=\"Content\"\r\n                      [init]=\"{'menubar': 'false', 'height': 400, 'relative_urls': false, 'remove_script_host': false, 'convert_urls': true}\"\r\n                      formControlName=\"content\"></editor>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 text-right MT-20\">\r\n              <button type=\"submit\" class=\"btn-primary\">Save</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/manage-emails/set-email-template/set-email-template.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-emails/set-email-template/set-email-template.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluaXN0cmF0aW9uLW1vZHVsZS9tYW5hZ2UtZW1haWxzL3NldC1lbWFpbC10ZW1wbGF0ZS9zZXQtZW1haWwtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/administration-module/manage-emails/set-email-template/set-email-template.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-emails/set-email-template/set-email-template.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SetEmailTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetEmailTemplateComponent", function() { return SetEmailTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SetEmailTemplateComponent = /** @class */ (function () {
    function SetEmailTemplateComponent(_fb, _router, _commonCrudService, _sharedService) {
        this._fb = _fb;
        this._router = _router;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this.subject = null;
    }
    SetEmailTemplateComponent.prototype.ngOnInit = function () {
        this.manageEmail = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["GLOBALDATAKEYS"].MANAGE_EMAIL);
        this.subject = this.manageEmail.subject;
        this.createSetEmailTemplateForm();
    };
    /**
     * Create Form
     */
    SetEmailTemplateComponent.prototype.createSetEmailTemplateForm = function () {
        // console.log(this.manageEmail.content);
        this.emailTemplateForm = this._fb.group({
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.manageEmail.content)
        });
    };
    SetEmailTemplateComponent.prototype.onManageEmails = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].MANAGE_EMAILS]);
    };
    /** On Submit Form
     * @param form
     */
    SetEmailTemplateComponent.prototype.onSubmitEmail = function (form) {
        var _this = this;
        form.value['_method'] = 'put';
        form.value['is_detail'] = '1';
        form.value['is_active'] = this.manageEmail.is_active;
        form.value['subject'] = this.manageEmail.subject;
        if (form.valid) {
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].MANAGEEMAIL_UPDATE, this.manageEmail.id, form.value).subscribe(function (response) {
                _this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].MANAGE_EMAILS]);
            });
        }
    };
    SetEmailTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-set-email-template',
            template: __webpack_require__(/*! ./set-email-template.component.html */ "./src/app/admin/administration-module/manage-emails/set-email-template/set-email-template.component.html"),
            styles: [__webpack_require__(/*! ./set-email-template.component.scss */ "./src/app/admin/administration-module/manage-emails/set-email-template/set-email-template.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], SetEmailTemplateComponent);
    return SetEmailTemplateComponent;
}());



/***/ })

}]);
//# sourceMappingURL=manage-emails-manage-emails-module.js.map