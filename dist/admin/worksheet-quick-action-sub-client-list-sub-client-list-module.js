(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["worksheet-quick-action-sub-client-list-sub-client-list-module"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/add-sub-client-list-dialog/add-sub-client-list-dialog.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/add-sub-client-list-dialog/add-sub-client-list-dialog.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Sub Client List dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{(subClient) ? 'Update' : 'Add'}} Sub Client</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addSubClientListForm\" #addEditForm=\"ngForm\"\r\n        (submit)=\"onSubmitAddSubClientListForm(addSubClientListForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <ng-select [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"entity_id\" required>\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSubClientListForm.get('entity_id'))\"\r\n                            [errMsg]=\"validationMsg.PRACTICE_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Client Name\" formControlName=\"subclient\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSubClientListForm.get('subclient'))\"\r\n                            [errMsg]=\"validationMsg.CLIENT_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Status\" formControlName=\"is_active\" required>\r\n              <mat-option *ngFor=\"let active of activeInactiveList.slice(1)\" [value]=\"active?.key\">\r\n                {{ active.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSubClientListForm.get('is_active'))\"\r\n                            [errMsg]=\"validationMsg.STATUS_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <button type=\"submit\" class=\"btn-orange btn-bordered\" [disabled]=\"addSubClientListForm.invalid\"\r\n                  (click)=\"updateIsNew()\">\r\n            {{subClient ? 'Update & Add New' : 'Save & Add New'}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 PR-25 text-right\">\r\n          <button type=\"submit\" class=\"btn-primary\" [disabled]=\"addSubClientListForm.invalid\">\r\n            {{subClient ? 'Update' : 'Save'}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change Sub client list dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/add-sub-client-list-dialog/add-sub-client-list-dialog.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/add-sub-client-list-dialog/add-sub-client-list-dialog.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: AddSubClientListDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubClientListDialog", function() { return AddSubClientListDialog; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
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








var AddSubClientListDialog = /** @class */ (function (_super) {
    __extends(AddSubClientListDialog, _super);
    function AddSubClientListDialog(dialogRef, data, _fb, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.clientList = [];
        _this.activeInactiveList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["activeInactive"];
        _this.isNew = 0;
        return _this;
    }
    AddSubClientListDialog.prototype.ngOnInit = function () {
        this.subClient = (this.data) ? this.data.subClientData : null;
        this.createAddSubClientListForm();
        this.getClientList();
    };
    /**
     * Get Client List
     */
    AddSubClientListDialog.prototype.getClientList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].SUB_CLIENT_LIST_DROPDOWN, {}, {}).subscribe(function (response) {
            if (response) {
                _this.clientList = response.payload.data;
            }
        });
    };
    /**
     * Create add Sub client list
     */
    AddSubClientListDialog.prototype.createAddSubClientListForm = function () {
        this.addSubClientListForm = this._fb.group({
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]((this.subClient ? this.subClient.entity_id.id : null), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            subclient: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]((this.subClient ? this.subClient.subclient : null), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]((this.subClient ? this.subClient.is_active : null), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    };
    /**
     * On Submit Add Sub Client List
     * @param form
     */
    AddSubClientListDialog.prototype.onSubmitAddSubClientListForm = function (form) {
        var _this = this;
        if (form.valid) {
            if (this.subClient) {
                form.value['_method'] = 'put';
                this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].SUB_CLIENT_UPDATE, this.subClient.id, form.value)
                    .subscribe(function (response) {
                    _this.subClient = null;
                    if (_this.isNew === 0) {
                        _this.onClose();
                    }
                    _this.addEditForm.resetForm();
                    _this.createAddSubClientListForm();
                });
            }
            else {
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].SUB_CLIENT_ADD, form.value)
                    .subscribe(function (response) {
                    _this.subClient = null;
                    if (_this.isNew === 0) {
                        _this.onClose();
                    }
                    _this.createAddSubClientListForm();
                    _this.addEditForm.resetForm();
                });
            }
        }
    };
    /**
     * Close Dialog
     */
    AddSubClientListDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    /**
     * To Check add & update button with new option
     */
    AddSubClientListDialog.prototype.updateIsNew = function () {
        this.isNew = 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addEditForm'),
        __metadata("design:type", Object)
    ], AddSubClientListDialog.prototype, "addEditForm", void 0);
    AddSubClientListDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-sub-client-list-dialog',
            template: __webpack_require__(/*! ./add-sub-client-list-dialog.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/add-sub-client-list-dialog/add-sub-client-list-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]])
    ], AddSubClientListDialog);
    return AddSubClientListDialog;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/sub-client-list.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/sub-client-list.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Worksheet Sub client List Container -->\r\n<div class=\"sub-client-list-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onWorksheetDashboard()\">WORKSHEET</a></span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">SUB CLIENT LIST</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 PR-0\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('addNewWorksheet')\"\r\n                          *ngIf=\"worksheetTabIDData['add_edit']\">Add New Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayWorksheet')\">Today's Worksheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayTimesheet')\">Today's Timesheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetHierarchy')\"\r\n                          *ngIf=\"tabDataWorksheetHierarchy['view']\">Worksheet Hierarchy\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetMasterChecklist')\"\r\n                          *ngIf=\"tabDataWorksheetMasterChecklist['view']\">Worksheet Master Checklist\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                          *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('trainingList')\"\r\n                          *ngIf=\"tabDataWorksheetTraining['view']\">Training List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                          *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                    Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('peerReviewWorksheetListing')\"\r\n                          *ngIf=\"tabDataWorksheetPeerReviewerList['view']\">Peer Review Worksheet\r\n                    Listing\r\n                  </button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <button class=\"open-dialog-btn\" (click)=\"openSubClientListDialog(null)\">\r\n            <mat-icon class=\"material-icons\">add</mat-icon>\r\n            Add Sub Client List\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onToggleFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li>\r\n              <a (click)=\"downloadExcel()\">\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n          <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc <mat-icon\r\n            class=\"material-icons\">close</mat-icon></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <ng-select class=\"custom\" [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"entity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Client Name\" formControlName=\"subclient\"/>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Status\" formControlName=\"is_active\">\r\n                  <mat-option *ngFor=\"let activeInactive of activeInactiveList.slice(1)\" [value]=\"activeInactive?.key\">\r\n                    {{ activeInactive?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 MT-20 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"entityIdField.value\">\r\n          <span class=\"tag__title\">Practice Name(Trading Name) :</span>\r\n          <span>\r\n            <ng-select class=\"custom\" [items]=\"clientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"entity_id\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id', 'entity_id')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"subClientField.value\">\r\n          <span class=\"tag__title\">Client Name :</span>\r\n          <span>\r\n             <mat-form-field>\r\n             <input matInput placeholder=\"Client Name\" formControlName=\"subclient\"\r\n                    (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n            </mat-form-field>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('subclient', 'subclient')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"activeField.value !== null\">\r\n          <span class=\"tag__title\">Status :</span>\r\n          <span>\r\n             <mat-form-field>\r\n              <mat-select placeholder=\"Status\" formControlName=\"is_active\">\r\n                 <mat-option *ngFor=\"let active of activeInactiveList.slice(1)\" [value]=\"active?.key\">\r\n                    {{ active.label }}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('is_active', 'is_active')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\" *ngIf=\"entityIdField.value || subClientField.value || activeField.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n\r\n\r\n            <th width=\"42%\"\r\n                (click)=\"getSortData('trading_name', sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Practice Name(Trading Name)\r\n              <i *ngIf=\"sortBy === 'trading_name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'trading_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'trading_name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"45%\"\r\n                (click)=\"getSortData('subclient', sortBy === 'subclient' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Client Name\r\n              <i *ngIf=\"sortBy === 'subclient'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'subclient' && sortOrder === 'asc', 'icon-down' :  sortBy === 'subclient' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'subclient' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"8%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let subClient of subClientList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"42%\">{{subClient?.entity_id?.trading_name}}</td>\r\n              <td width=\"45%\">{{subClient?.subclient}}</td>\r\n              <td width=\"8%\">\r\n                <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Edit'\" (click)=\"openSubClientListDialog(subClient)\">\r\n                  edit\r\n                </mat-icon>\r\n                <mat-slide-toggle *ngIf=\"slideActiveInactive[i]\" [(ngModel)]=\"slideActiveInactive[i]\"\r\n                                  (change)=\"openToggleConfirmationDialog($event, subClient, i)\"></mat-slide-toggle>\r\n                <mat-slide-toggle *ngIf=\"!slideActiveInactive[i]\" [checked]=\"(subClient.is_active) ? true : false\"\r\n                                  (change)=\"openToggleConfirmationDialog($event, subClient, i)\"></mat-slide-toggle>\r\n\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table *ngIf=\"subClientList.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n    <div *ngIf=\"!subClientList.length\" class=\"panel-title red-color\">\r\n      No Records Found!\r\n    </div>\r\n  </div>\r\n  <!-- End Data Grid -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/sub-client-list.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/sub-client-list.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vc3ViLWNsaWVudC1saXN0L3N1Yi1jbGllbnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/sub-client-list.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/sub-client-list.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: SubClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubClientListComponent", function() { return SubClientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_sub_client_list_dialog_add_sub_client_list_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-sub-client-list-dialog/add-sub-client-list-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/add-sub-client-list-dialog/add-sub-client-list-dialog.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SubClientListComponent = /** @class */ (function () {
    function SubClientListComponent(_fb, dialog, _router, _commonCrudService, _sharedService) {
        this._fb = _fb;
        this.dialog = dialog;
        this._router = _router;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        // Constant Variables
        // Data Variables
        this.subClientList = [];
        this.clientList = [];
        this.activeInactiveList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["activeInactive"];
        this.slideActiveInactive = [];
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilterView = false;
        this.isOpenHistoryDialog = false;
        this.tabIDWorksheetHierarchy = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__["ADMINTABACCESS"].WORKFLOW_MASTERACTIVITY;
        this.tabIDWorksheetTraining = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__["ADMINTABACCESS"].WORKFLOW_WORKSHEETTRAINING;
        this.tabIDWorksheetSubClientList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__["ADMINTABACCESS"].WORKFLOW_SUBCLIENTLIST;
        this.tabIDWorksheetReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__["ADMINTABACCESS"].WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
        this.tabIDWorksheetPeerReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__["ADMINTABACCESS"].WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
        this.tabIDWorksheetMasterChecklist = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__["ADMINTABACCESS"].WORKFLOW_MASTERCHECKLIST;
        this.tabIDWorksheetMultiplueStatusChange = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__["ADMINTABACCESS"].WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;
        this.isMultipleStatusUpdate = false;
        this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
    }
    Object.defineProperty(SubClientListComponent.prototype, "entityIdField", {
        // get form control
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubClientListComponent.prototype, "subClientField", {
        get: function () {
            return this.filterForm.get('subclient');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubClientListComponent.prototype, "activeField", {
        get: function () {
            return this.filterForm.get('is_active');
        },
        enumerable: true,
        configurable: true
    });
    SubClientListComponent.prototype.ngOnInit = function () {
        this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
        this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
        this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
        this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
        this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
        this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
        this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
        this.initializationMethod();
    };
    // Initialization Methods
    SubClientListComponent.prototype.initializationMethod = function () {
        this.getClientList();
        this.getSubClientList(1, 'id', 'desc');
        this.createAdvanceFilterForm();
    };
    /**
     * Get Client List
     */
    SubClientListComponent.prototype.getClientList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].SUB_CLIENT_LIST_DROPDOWN, {}, {}).subscribe(function (response) {
            if (response) {
                _this.clientList = response.payload.data;
            }
        });
    };
    /**
     * Get Sub Client List
     * @param {number} pageNumber
     * @param {string} key
     * @param {string} val
     */
    SubClientListComponent.prototype.getSubClientList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].SUB_CLIENT_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (Response) {
            _this.handleSubClientResponse(Response);
        });
    };
    /**
     * Handle Sub Client List Response
     * @param response
     */
    SubClientListComponent.prototype.handleSubClientResponse = function (response) {
        this.subClientList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Create Advance Filter Form
     */
    SubClientListComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            subclient: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            subclient: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    };
    /**
     * Add Edit Sub client list Dialog
     */
    SubClientListComponent.prototype.openSubClientListDialog = function (subClient) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_sub_client_list_dialog_add_sub_client_list_dialog__WEBPACK_IMPORTED_MODULE_6__["AddSubClientListDialog"], {
            panelClass: 'add-form-dialog-container',
            data: {
                subClientData: subClient
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getSubClientList(1, 'id', 'desc');
        });
    };
    /**
     *  Toggle confirmation Dialog
     */
    SubClientListComponent.prototype.openToggleConfirmationDialog = function (event, subClient, id) {
        var _this = this;
        var status = event.checked ? 'Inactive' : 'Active';
        var statusNagetive = !event.checked ? 'Inactive' : 'Active';
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogComponent"], {
            data: {
                content: 'Do you want change status from ' + status + ' to ' + statusNagetive
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this.activeInactiveSubClient(event.checked, subClient);
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
     * On home page route
     */
    SubClientListComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Open quick menu
     * @param menuName
     */
    SubClientListComponent.prototype.onOpenQuickMenu = function (menuName) {
        switch (menuName) {
            case 'addNewWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].ADD_WORKSHEET]);
                break;
            case 'todayWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].WORKSHEET_TODAYS_WORKSHEET]);
                break;
            case 'todayTimesheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
                break;
            case 'worksheetHierarchy':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].WORKSHEET_HIERARCHY]);
                break;
            case 'changeInOuttime':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].WORKSHEET_CHANGE_IN_OUT_TIME]);
                break;
            case 'worksheetMasterChecklist':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].WORKSHEET_MASTER_CHECKLIST]);
                break;
            case 'trainingList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].WORKSHEET_TRAINING_LIST]);
                break;
            case 'revieworKnockBackWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].WORKSHEET_REVIEW_OR_KNOCK_BACK]);
                break;
            case 'peerReviewWorksheetListing':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
                break;
            case 'changeMultipleWorksheetStatus':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].CHANGE_MULTIPLE_WORKSHEET_STATUS]);
                break;
        }
    };
    /**
     * Active Inactive Sub Client List
     * @param {boolean} action
     * @param {subClient} SubClient
     */
    SubClientListComponent.prototype.activeInactiveSubClient = function (action, subClient) {
        var _this = this;
        var params = { 'is_active': action ? 1 : 0 };
        this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].SUB_CLIENT_UPDATE_STATUS, subClient.id, params).subscribe(function (response) {
            _this.subClientList.map(function (item) {
                if (item['id'] === subClient.id) {
                    item['is_active'] = item['is_active'] ? 0 : 1;
                }
                _this.getSubClientList(1, 'id', 'desc');
            });
        });
    };
    /**
     * Export to Excel
     */
    SubClientListComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].SUB_CLIENT_LIST_EXPORT, params, this.getSearchParam(), 'Sub client ', 0).subscribe(function (response) {
        });
    };
    /**
     * Open modal method
     */
    SubClientListComponent.prototype.onOpenModal = function () {
        this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
    };
    /**
     * Open filter method
     */
    SubClientListComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = true;
    };
    /**
     * Close filter method
     */
    SubClientListComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    /**
     * Toogle Filter
     */
    SubClientListComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Pagination page change method
     * @param event
     */
    SubClientListComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getSubClientList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * sub client redirection
     */
    SubClientListComponent.prototype.onWorksheetDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    SubClientListComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue('');
        this.advanceFilterForm.get(elementName).setValue('');
        if (elementName === 'is_active' || elementName === 'entity_id') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'subclient') {
            delete this.likeJSON[elementName];
        }
        this.getSubClientList(1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    SubClientListComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.filterForm.reset();
        this.advanceFilterForm.reset();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.isOpenFilterView = false;
        this.getSubClientList(1, 'id', 'desc');
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    SubClientListComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
        var processToReq = false;
        if (flag) {
            processToReq = true;
        }
        else {
            if (event.keyCode === 13) {
                processToReq = true;
            }
        }
        if (processToReq) {
            this.filterForm.setValue({
                'entity_id': (form.value['entity_id']) ? form.value['entity_id'] : null,
                'subclient': form.value['subclient'],
                'is_active': form.value['is_active'],
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    SubClientListComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        // removing empty key from object
        for (var key in form.value) {
            if (form.value.hasOwnProperty(key)) {
                if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
                    delete form.value[key];
                }
                else {
                    if (flag) {
                        this.advanceFilterForm.get(key).setValue(form.value[key]);
                    }
                }
            }
        }
        // For Multiple Entity ID
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'is_active' || key === 'entity_id') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'subclient') {
                        this.likeJSON[key] = form.value[key];
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getSubClientList(1, 'id', 'desc');
        }
    };
    /**
     * Esc event for close modal
     * @param event
     */
    SubClientListComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    SubClientListComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    SubClientListComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getSubClientList(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    SubClientListComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length) {
            params['compare'] = filter;
        }
        if (Object.keys(this.inJSON).length !== 0) {
            params['in'] = this.inJSON;
        }
        return params;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SubClientListComponent.prototype, "onKeydownHandler", null);
    SubClientListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-client-list',
            template: __webpack_require__(/*! ./sub-client-list.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/sub-client-list.component.html"),
            styles: [__webpack_require__(/*! ./sub-client-list.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/sub-client-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"]])
    ], SubClientListComponent);
    return SubClientListComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/sub-client-list.module.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/sub-client-list.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: SubClientListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubClientListModule", function() { return SubClientListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sub_client_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub-client-list.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/sub-client-list.component.ts");
/* harmony import */ var _add_sub_client_list_dialog_add_sub_client_list_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-sub-client-list-dialog/add-sub-client-list-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/add-sub-client-list-dialog/add-sub-client-list-dialog.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _sub_client_list_component__WEBPACK_IMPORTED_MODULE_3__["SubClientListComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuard"]]
    },
];
var SubClientListModule = /** @class */ (function () {
    function SubClientListModule() {
    }
    SubClientListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"]
            ],
            declarations: [_add_sub_client_list_dialog_add_sub_client_list_dialog__WEBPACK_IMPORTED_MODULE_4__["AddSubClientListDialog"], _sub_client_list_component__WEBPACK_IMPORTED_MODULE_3__["SubClientListComponent"]],
            entryComponents: [_add_sub_client_list_dialog_add_sub_client_list_dialog__WEBPACK_IMPORTED_MODULE_4__["AddSubClientListDialog"]]
        })
    ], SubClientListModule);
    return SubClientListModule;
}());



/***/ })

}]);
//# sourceMappingURL=worksheet-quick-action-sub-client-list-sub-client-list-module.js.map