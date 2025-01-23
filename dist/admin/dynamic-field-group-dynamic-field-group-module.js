(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dynamic-field-group-dynamic-field-group-module"],{

/***/ "./src/app/admin/administration-module/dynamic-field-group/add-dynamic-field-group/add-dynamic-field-group-dialog.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/dynamic-field-group/add-dynamic-field-group/add-dynamic-field-group-dialog.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Change InOut Time dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{this.data ? 'Update' : 'Add'}} Field Group</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose(addDynamicFieldGroupForm.value)\">close</i></a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addDynamicFieldGroupForm\" (submit)=\"onSubmitAddDynamicFieldGroupForm(addDynamicFieldGroupForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Entity Group\" formControlName=\"addentitygroup\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addDynamicFieldGroupForm.get('addentitygroup'))\"\r\n                            [errMsg]=\"validationMsg.ENTITY_GROUP_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addDynamicFieldGroupForm.get('addentitygroup'))\"\r\n                            [errMsg]=\"validationMsg.ENTITY_GROUP_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-6 PR-25\">\r\n          <button type=\"submit\" (click)=\"saveAddNew(true)\" class=\"btn-orange btn-bordered\">Save & Add New</button>\r\n        </div>\r\n        <div class=\"col-md-6 PR-25\">\r\n          <button type=\"submit\" (click)=\"saveAddNew(false)\" class=\"btn-primary\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change InOut Time dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/dynamic-field-group/add-dynamic-field-group/add-dynamic-field-group-dialog.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/dynamic-field-group/add-dynamic-field-group/add-dynamic-field-group-dialog.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: AddDynamicFieldGroupDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDynamicFieldGroupDialog", function() { return AddDynamicFieldGroupDialog; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
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







var AddDynamicFieldGroupDialog = /** @class */ (function (_super) {
    __extends(AddDynamicFieldGroupDialog, _super);
    function AddDynamicFieldGroupDialog(dialogRef, data, _fb, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        return _this;
    }
    AddDynamicFieldGroupDialog.prototype.ngOnInit = function () {
        this.createDynamicFieldGroupForm();
    };
    AddDynamicFieldGroupDialog.prototype.createDynamicFieldGroupForm = function () {
        this.addDynamicFieldGroupForm = this._fb.group({
            addentitygroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.fieldData ? this.data.fieldData.group_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].ALPHABETICS_REGEXP)]),
        });
    };
    /**
     * For updateing or saving the field data
     * @param {FormGroup} form
     */
    AddDynamicFieldGroupDialog.prototype.onSubmitAddDynamicFieldGroupForm = function (form) {
        if (form.valid) {
            if (this.data.fieldData) {
                var params = {
                    '_method': 'put',
                    'group_name': form.value['addentitygroup']
                };
                this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DYNAMIC_FIELD_GROUP, this.data.fieldData.id, params)
                    .subscribe(function (response) {
                });
            }
            else {
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DYNAMIC_FIELD_GROUP, {
                    'group_name': form.value['addentitygroup'],
                    'sort_order': '1',
                    'is_active': '1'
                })
                    .subscribe(function (response) {
                });
            }
            if (!this.addMoreFlag) {
                this.onClose(form.value);
            }
            else {
                this.addDynamicFieldGroupForm.reset();
            }
        }
    };
    AddDynamicFieldGroupDialog.prototype.saveAddNew = function (data) {
        this.addMoreFlag = data;
    };
    AddDynamicFieldGroupDialog.prototype.onClose = function (value) {
        this.dialogRef.close(value);
    };
    AddDynamicFieldGroupDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-field-group-dialog',
            template: __webpack_require__(/*! ./add-dynamic-field-group-dialog.html */ "./src/app/admin/administration-module/dynamic-field-group/add-dynamic-field-group/add-dynamic-field-group-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]])
    ], AddDynamicFieldGroupDialog);
    return AddDynamicFieldGroupDialog;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/administration-module/dynamic-field-group/dynamic-field-group.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/dynamic-field-group/dynamic-field-group.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin (Client) Dynamic Field Group Container -->\r\n<div class=\"client-dynamic-field-group-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span>ADMINISTRATION</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">DYNAMIC FIELD GROUP</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <button class=\"open-dialog-btn MB-10 orange-color\" (click)=\"AddFieldGroupDialog(null)\"\r\n                  *ngIf=\"tabData['add_edit']\">\r\n            <mat-icon class=\"material-icons\">add</mat-icon>\r\n            Add Group\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n\r\n            <th width=\"65%\" (click)=\"getSortData('group_name',\r\n             (sortBy === 'group_name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Field Group Name\r\n              <i *ngIf=\"sortBy === 'group_name'\" [ngClass]=\"{'material-icons': true,\r\n                 'active' : (sortBy === 'group_name'),\r\n                  'icon-up' : ((sortBy === 'group_name') && (sortOrder === 'asc')),\r\n                  'icon-down' : true}\">\r\n                {{(sortBy === 'group_name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"20\" (click)=\"getSortData('created_on',\r\n             (sortBy === 'created_on') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\"> Created On\r\n              <i *ngIf=\"sortBy === 'created_on'\" [ngClass]=\"{'material-icons': true,\r\n                 'active' : (sortBy === 'created_on'),\r\n                  'icon-up' : ((sortBy === 'created_on') && (sortOrder === 'asc')),\r\n                  'icon-down' : true}\">\r\n                {{(sortBy === 'created_on') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <!-- <th (click)=\"getSortData('modified_on',\r\n              (sortBy === 'modified_on') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Modified on <i *ngIf=\"sortBy === 'modified_on'\"  [ngClass]=\"{'material-icons': true,\r\n                  'active' : (sortBy === 'modified_on'),\r\n                   'icon-up' : ((sortBy === 'modified_on') && (sortOrder === 'asc')),\r\n                   'icon-down' : true}\">\r\n               {{(sortBy === 'modified_on') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n             </i>\r\n             </th>-->\r\n            <th width=\"10%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let groupfield of dynemicFormField ; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"65%\">{{groupfield?.group_name}}</td>\r\n              <td width=\"20%\">{{groupfield?.created_on | date: 'dd-MM-yyyy'}}</td>\r\n              <td width=\"10%\">\r\n                <mat-icon class=\"light-orange-color\" *ngIf=\"tabData['add_edit']\"\r\n                          (click)=\"AddFieldGroupDialog(groupfield)\">edit\r\n                </mat-icon>\r\n                <!--<mat-icon class=\"red-color\" (click)=\"openDeleteFieldDialog(groupfield)\">delete</mat-icon>-->\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPaginationChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n  <!-- End Data Grid -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/dynamic-field-group/dynamic-field-group.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/dynamic-field-group/dynamic-field-group.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluaXN0cmF0aW9uLW1vZHVsZS9keW5hbWljLWZpZWxkLWdyb3VwL2R5bmFtaWMtZmllbGQtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/administration-module/dynamic-field-group/dynamic-field-group.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/dynamic-field-group/dynamic-field-group.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DynamicFieldGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldGroupComponent", function() { return DynamicFieldGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_dynamic_field_group_add_dynamic_field_group_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-dynamic-field-group/add-dynamic-field-group-dialog */ "./src/app/admin/administration-module/dynamic-field-group/add-dynamic-field-group/add-dynamic-field-group-dialog.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DynamicFieldGroupComponent = /** @class */ (function () {
    function DynamicFieldGroupComponent(_router, dialog, _sharedService, _commonCrudService) {
        this._router = _router;
        this.dialog = dialog;
        this._sharedService = _sharedService;
        this._commonCrudService = _commonCrudService;
        // Constant Variables
        // Data Variables
        this.groupFieldList = [];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenHistoryDialog = false;
        // Model
        this.dynemicFormField = [];
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].CLIENT_VIEWCLIENT_FIELDGROUP;
    }
    DynamicFieldGroupComponent.prototype.ngOnInit = function () {
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.initializationMethod();
    };
    // Initialization Methods
    DynamicFieldGroupComponent.prototype.initializationMethod = function () {
        this.getFieldGroupList(1, '', 'desc');
    };
    /**
     * Function for get the field group
     */
    DynamicFieldGroupComponent.prototype.getFieldGroupList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].DYNAMIC_FIELD_GROUP, this.getClientQueryParams(pageNumber, key, val), this.getClientSearchParams())
            .subscribe(function (response) {
            _this.handleResponse(response);
        });
    };
    DynamicFieldGroupComponent.prototype.handleResponse = function (response) {
        this.dynemicFormField = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Open add dynamic field group modal
     */
    DynamicFieldGroupComponent.prototype.AddFieldGroupDialog = function (groupfield) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_dynamic_field_group_add_dynamic_field_group_dialog__WEBPACK_IMPORTED_MODULE_3__["AddDynamicFieldGroupDialog"], {
            panelClass: 'add-form-dialog-container',
            data: {
                'fieldData': groupfield
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            _this.getFieldGroupList(1, '', 'desc');
        });
    };
    DynamicFieldGroupComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_10__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Open modal method
     */
    DynamicFieldGroupComponent.prototype.onOpenModal = function () {
        this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
    };
    /**
     * Page change method
     * @param event
     */
    DynamicFieldGroupComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getFieldGroupList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    DynamicFieldGroupComponent.prototype.openDeleteFieldDialog = function (groupfield) {
        var _this = this;
        var dialogConfigData = {
            data: {
                content: 'Are you sure you want to delete this Field?'
            },
            panelClass: 'add-bookkeeping-dialog-panel-container'
        };
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogComponent"], dialogConfigData);
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this.deleteDynamicFieldData(groupfield);
            }
            _this.getFieldGroupList(1, '', 'desc');
        });
    };
    DynamicFieldGroupComponent.prototype.deleteDynamicFieldData = function (data) {
        var _this = this;
        this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].DYNAMIC_FIELD_GROUP, data.id).subscribe(function (Response) {
            _this.getFieldGroupList(1, '', 'desc');
        });
    };
    /**
     * Pagination page change event
     * @param event
     */
    DynamicFieldGroupComponent.prototype.onPaginationChange = function (event) {
        this.pageSize = event.pageSize;
        this.getFieldGroupList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    DynamicFieldGroupComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getFieldGroupList(1, sortKey, sortVal);
    };
    /**
     * function to return query params for feedback list api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{pageNumber: number; recordsPerPage: number}}
     */
    DynamicFieldGroupComponent.prototype.getClientQueryParams = function (page, sortKey, sortOrder) {
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
     * returns advanced search params for feedback list api
     * @returns {{}}
     */
    DynamicFieldGroupComponent.prototype.getClientSearchParams = function () {
        var params = {};
        var filter = {};
        return params;
    };
    DynamicFieldGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamic-field-group',
            template: __webpack_require__(/*! ./dynamic-field-group.component.html */ "./src/app/admin/administration-module/dynamic-field-group/dynamic-field-group.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-field-group.component.scss */ "./src/app/admin/administration-module/dynamic-field-group/dynamic-field-group.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]])
    ], DynamicFieldGroupComponent);
    return DynamicFieldGroupComponent;
}());



/***/ }),

/***/ "./src/app/admin/administration-module/dynamic-field-group/dynamic-field-group.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/administration-module/dynamic-field-group/dynamic-field-group.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: DynamicFieldGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldGroupModule", function() { return DynamicFieldGroupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _dynamic_field_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-field-group.component */ "./src/app/admin/administration-module/dynamic-field-group/dynamic-field-group.component.ts");
/* harmony import */ var _add_dynamic_field_group_add_dynamic_field_group_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-dynamic-field-group/add-dynamic-field-group-dialog */ "./src/app/admin/administration-module/dynamic-field-group/add-dynamic-field-group/add-dynamic-field-group-dialog.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _dynamic_field_group_component__WEBPACK_IMPORTED_MODULE_6__["DynamicFieldGroupComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]],
        children: [
            {
                path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].DYNAMIC_FIELD_GROUP_ROUTE,
                component: _dynamic_field_group_component__WEBPACK_IMPORTED_MODULE_6__["DynamicFieldGroupComponent"]
            }
        ]
    }
];
var DynamicFieldGroupModule = /** @class */ (function () {
    function DynamicFieldGroupModule() {
    }
    DynamicFieldGroupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dynamic_field_group_component__WEBPACK_IMPORTED_MODULE_6__["DynamicFieldGroupComponent"],
                _add_dynamic_field_group_add_dynamic_field_group_dialog__WEBPACK_IMPORTED_MODULE_7__["AddDynamicFieldGroupDialog"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ],
            entryComponents: [_add_dynamic_field_group_add_dynamic_field_group_dialog__WEBPACK_IMPORTED_MODULE_7__["AddDynamicFieldGroupDialog"]]
        })
    ], DynamicFieldGroupModule);
    return DynamicFieldGroupModule;
}());



/***/ })

}]);
//# sourceMappingURL=dynamic-field-group-dynamic-field-group-module.js.map