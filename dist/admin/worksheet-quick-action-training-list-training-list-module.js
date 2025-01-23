(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["worksheet-quick-action-training-list-training-list-module"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/add-edit-training-dialog/add-edit-training-dialog.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/add-edit-training-dialog/add-edit-training-dialog.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Training List Dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Add Training List</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addTrainingForm\" (submit)=\"onSubmitAddTraininForm(addTrainingForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Training Name\" formControlName=\"trainingName\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addTrainingForm.get('trainingName'))\"\r\n                            [errMsg]=\"validationMsg.TRAINING_NAME_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addTrainingForm.get('trainingName'))\"\r\n                            [errMsg]=\"validationMsg.TRAINING_NAME_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal__footer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 PL-25\" *ngIf=\"!data['trainingData']\">\r\n          <button type=\"button\" class=\"btn-orange btn-bordered\"\r\n                  (click)=\"onSubmitAddTraininForm(addTrainingForm , 'saveAddNew')\">Save & Add New\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 text-right PR-25\" *ngIf=\"!data['trainingData']\">\r\n          <button type=\"submit\" class=\"btn-primary\">Save</button>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 text-right PR-25\" *ngIf=\"data['trainingData']\">\r\n          <button type=\"button\" class=\"btn-primary\" (click)=\"onSubmitUpdateTraininForm(addTrainingForm)\">Update</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Training List Dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/add-edit-training-dialog/add-edit-training-dialog.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/add-edit-training-dialog/add-edit-training-dialog.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: AddEditTrainingDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditTrainingDialog", function() { return AddEditTrainingDialog; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
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








var AddEditTrainingDialog = /** @class */ (function (_super) {
    __extends(AddEditTrainingDialog, _super);
    function AddEditTrainingDialog(dialogRef, data, _fb, _sharedService, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._sharedService = _sharedService;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_6__["ValidationConstantMessage"]();
        return _this;
    }
    AddEditTrainingDialog.prototype.ngOnInit = function () {
        this.createTrainingForm();
    };
    AddEditTrainingDialog.prototype.createTrainingForm = function () {
        if (this.data['trainingData']) {
            this.addTrainingForm = this._fb.group({
                trainingName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data['trainingData'].traning_name ? this.data['trainingData'].traning_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_6__["CommonRegex"].NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
                status: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data['trainingData'].traning_name.is_active ? this.data['trainingData'].traning_name.is_active : '', [])
            });
        }
        else {
            this.addTrainingForm = this._fb.group({
                trainingName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_6__["CommonRegex"].NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
                status: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
            });
        }
    };
    AddEditTrainingDialog.prototype.onSubmitAddTraininForm = function (form, saveAddNew) {
        if (form.valid) {
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].TRAINING_DATA_SAVE, {
                'traning_name': form.value.trainingName,
                'is_active': 1
            }).subscribe(function (response) {
            });
            if (!saveAddNew) {
                this.onClose();
            }
        }
    };
    AddEditTrainingDialog.prototype.onSubmitUpdateTraininForm = function (form, saveAddNew) {
        if (form.valid) {
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].TRAINING_EDIT_DATA, this.data['trainingData'].id, {
                'traning_name': form.value.trainingName,
                'is_active': this.data['trainingData'].is_active,
                '_method': 'put'
            }).subscribe(function (response) {
            });
            if (!saveAddNew) {
                this.onClose();
            }
        }
    };
    AddEditTrainingDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    AddEditTrainingDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-edit-training-dialog',
            template: __webpack_require__(/*! ./add-edit-training-dialog.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/add-edit-training-dialog/add-edit-training-dialog.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]])
    ], AddEditTrainingDialog);
    return AddEditTrainingDialog;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/training-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/training-list.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-worksheet-training-list-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">\r\n            <a (click)=\"onWorksheetDashboard()\">WORKSHEET</a>\r\n          </span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">TRAINING LIST</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 PR-0\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('addNewWorksheet')\"\r\n                          *ngIf=\"worksheetTabIDData['add_edit']\">Add New Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayWorksheet')\">Today's Worksheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayTimesheet')\">Today's Timesheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetHierarchy')\"\r\n                          *ngIf=\"tabDataWorksheetHierarchy['view']\">Worksheet Hierarchy\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('subClientList')\"\r\n                          *ngIf=\"tabDataWorksheetSubClientList['view']\">Sub Client List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetMasterChecklist')\"\r\n                          *ngIf=\"tabDataWorksheetMasterChecklist['view']\">Worksheet Master Checklist\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                          *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                          *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                    Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('peerReviewWorksheetListing')\"\r\n                          *ngIf=\"tabDataWorksheetPeerReviewerList['view']\">Peer Review Worksheet\r\n                    Listing\r\n                  </button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <button class=\"open-dialog-btn\" (click)=\"onOpenAddEditTrainingDialog()\">\r\n            <mat-icon class=\"material-icons\">add</mat-icon>\r\n            Add Training List\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onToggleFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li (click)=\"downloadExcel()\">\r\n              <a>\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <!-- <div class=\"grid-search\">\r\n            <div class=\"add-one\">\r\n              <input placeholder=\"Search\" type=\"text\">\r\n              <span class=\"prefix\">\r\n                <mat-icon class=\"material-icons\">search</mat-icon>\r\n              </span>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc\r\n          <mat-icon class=\"material-icons\">close</mat-icon>\r\n        </span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Training Name\" formControlName=\"traning_name\"/>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Status\" formControlName=\"is_active\">\r\n                  <mat-option value=\"1\">Active</mat-option>\r\n                  <mat-option value=\"0\">Inactive</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"onClearTags()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"trainingNameField.value\">\r\n          <span class=\"tag__title\">Training Name :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Training Name\" formControlName=\"traning_name\"\r\n                     (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('traning_name')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"statusField.value\">\r\n          <span class=\"tag__title\">Status:</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                          placeholder=\"Status\" #selectRef (selectionChange)=\"selectRef.readOnly = false\" readonly\r\n                          formControlName=\"is_active\">\r\n                <mat-option value=\"1\">Active</mat-option>\r\n                <mat-option value=\"0\">Inactive</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('is_active')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"clearAll-tags\" *ngIf=\"statusField.value  || trainingNameField.value\">\r\n          <a (click)=\"onClearTags()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n\r\n            <th width=\"30%\" (click)=\"getSortData('traning_name',\r\n             (sortBy === 'traning_name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Training Name\r\n              <i *ngIf=\"sortBy === 'traning_name'\" [ngClass]=\"{'material-icons': true,\r\n                 'active' : (sortBy === 'traning_name'),\r\n                  'icon-up' : ((sortBy === 'traning_name') && (sortOrder === 'asc')),\r\n                  'icon-down' : true}\">\r\n                {{(sortBy === 'traning_name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"25%\"> Created By</th>\r\n\r\n            <th width=\"30%\">Created On\r\n            </th>\r\n\r\n            <th width=\"10%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let training of trainingList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"30%\">{{training?.traning_name}}</td>\r\n              <td width=\"25%\">{{training?.created_by?.userfullname}}</td>\r\n              <td width=\"30%\">{{training?.created_on}}</td>\r\n              <td width=\"10%\">\r\n                <mat-icon class=\"light-orange-color\" (click)=\"onOpenAddEditTrainingDialog(training)\">edit</mat-icon>\r\n                <mat-slide-toggle [(ngModel)]=\"slideData[i]\"\r\n                                  (change)=\"onDisabledConfirmDialog($event, training, i)\"></mat-slide-toggle>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table *ngIf=\"trainingList.length\">\r\n          <tfoot>\r\n          <tr>\r\n\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n    <div *ngIf=\"!trainingList.length\" class=\"panel-title red-color\">\r\n      No Records Found!\r\n    </div>\r\n  </div>\r\n  <!-- End Data Grid -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/training-list.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/training-list.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vdHJhaW5pbmctbGlzdC90cmFpbmluZy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/training-list.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/training-list.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: TrainingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingListComponent", function() { return TrainingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _add_edit_training_dialog_add_edit_training_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit-training-dialog/add-edit-training-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/add-edit-training-dialog/add-edit-training-dialog.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TrainingListComponent = /** @class */ (function () {
    function TrainingListComponent(_router, dialog, _commonCrudService, _fb, _sharedService) {
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._fb = _fb;
        this._sharedService = _sharedService;
        // Data Variables
        this.trainingList = [];
        this.masterCheckList = [];
        this.tagList = [];
        this.slideData = [];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilter = false;
        this.isOpenHistoryDialog = false;
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.FromValue = null;
        this.ToValue = null;
        this.isOpenFilterView = false;
        this.tabIDWorksheetHierarchy = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__["ADMINTABACCESS"].WORKFLOW_MASTERACTIVITY;
        this.tabIDWorksheetTraining = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__["ADMINTABACCESS"].WORKFLOW_WORKSHEETTRAINING;
        this.tabIDWorksheetSubClientList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__["ADMINTABACCESS"].WORKFLOW_SUBCLIENTLIST;
        this.tabIDWorksheetReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__["ADMINTABACCESS"].WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
        this.tabIDWorksheetPeerReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__["ADMINTABACCESS"].WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
        this.tabIDWorksheetMasterChecklist = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__["ADMINTABACCESS"].WORKFLOW_MASTERCHECKLIST;
        this.tabIDWorksheetMultiplueStatusChange = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__["ADMINTABACCESS"].WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;
        this.isMultipleStatusUpdate = false;
        this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
    }
    Object.defineProperty(TrainingListComponent.prototype, "trainingNameField", {
        get: function () {
            return this.filterForm.get('traning_name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrainingListComponent.prototype, "statusField", {
        get: function () {
            return this.filterForm.get('is_active');
        },
        enumerable: true,
        configurable: true
    });
    TrainingListComponent.prototype.ngOnInit = function () {
        this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
        this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
        this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
        this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
        this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
        this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
        this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
        this.getTrainingList(1, '', 'desc');
        this.initializationMethod();
        this.createAdvanceFilterForm();
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    TrainingListComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue('');
        this.advanceFilterForm.get(elementName).setValue('');
        if (elementName === 'is_active') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'traning_name') {
            delete this.likeJSON[elementName];
        }
        this.getTrainingList(1, '', 'desc');
    };
    /**
     * Open filter method
     */
    TrainingListComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = true;
    };
    /**
     * Close filter method
     */
    TrainingListComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    /**
     * Toogle Filter
     */
    TrainingListComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    TrainingListComponent.prototype.getTrainingList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].TRAINING_DATA_LISTEING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleQualityControlResponse(response);
        });
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    TrainingListComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        var startFilterData = {};
        var endFilterData = {};
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
    TrainingListComponent.prototype.handleQualityControlResponse = function (response) {
        this.trainingList = response.payload.data;
        for (var i = 0; i < this.trainingList.length; i++) {
            this.slideData[i] = (this.trainingList[i].is_active === 1) ? true : false;
        }
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Initialization Methods
     */
    TrainingListComponent.prototype.initializationMethod = function () {
    };
    /**
     * change InOutTime direction
     */
    TrainingListComponent.prototype.onOpenAddEditTrainingDialog = function (trainingList) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_edit_training_dialog_add_edit_training_dialog__WEBPACK_IMPORTED_MODULE_5__["AddEditTrainingDialog"], {
            panelClass: 'training-list-dialog-container',
            data: {
                'trainingData': trainingList
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getTrainingList(1, '', 'desc');
        });
    };
    TrainingListComponent.prototype.onConfirmDialog = function () {
        this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to change status?'
            }
        });
    };
    TrainingListComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getTrainingList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    TrainingListComponent.prototype.deleteMsg = function (index) {
    };
    TrainingListComponent.prototype.onClearTags = function () {
        this.createAdvanceFilterForm();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.isOpenFilterView = false;
        this.getTrainingList(1, '', 'desc');
    };
    TrainingListComponent.prototype.onWorksheetDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * On home page route
     */
    TrainingListComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Open quick menu
     * @param menuName
     */
    TrainingListComponent.prototype.onOpenQuickMenu = function (menuName) {
        switch (menuName) {
            case 'addNewWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].ADD_WORKSHEET]);
                break;
            case 'todayWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_TODAYS_WORKSHEET]);
                break;
            case 'todayTimesheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
                break;
            case 'worksheetHierarchy':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_HIERARCHY]);
                break;
            case 'changeInOuttime':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_CHANGE_IN_OUT_TIME]);
                break;
            case 'subClientList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_SUB_CLIENT_LIST]);
                break;
            case 'worksheetMasterChecklist':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_MASTER_CHECKLIST]);
                break;
            case 'revieworKnockBackWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_REVIEW_OR_KNOCK_BACK]);
                break;
            case 'peerReviewWorksheetListing':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
                break;
            case 'changeMultipleWorksheetStatus':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].CHANGE_MULTIPLE_WORKSHEET_STATUS]);
                break;
        }
    };
    TrainingListComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilter = false;
        }
    };
    TrainingListComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].TRAINING_LIST_DOWNLOAD, params, '', 'Trainging', 0).subscribe(function (response) {
        });
    };
    TrainingListComponent.prototype.onDisabledConfirmDialog = function (event, trainingListData, id) {
        var _this = this;
        // console.log(this.slideData[id]);
        var status = event.checked ? 'Inactive' : 'Active';
        var statusNagetive = !event.checked ? 'Inactive' : 'Active';
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogComponent"], {
            data: {
                content: 'Do you want change status from ' + status + ' to ' + statusNagetive
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].TRAINING_EDIT_DATA, trainingListData.id, {
                    'is_active': (event.checked === true) ? '1' : '0',
                    'traning_name': trainingListData.traning_name,
                    '_method': 'put'
                }).subscribe(function (response) {
                    _this.getTrainingList(1, '', 'desc');
                });
            }
            else {
                if (_this.slideData[id]) {
                    _this.slideData[id] = false;
                }
                else {
                    _this.slideData[id] = true;
                }
            }
        });
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    TrainingListComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getTrainingList(1, sortKey, sortVal);
    };
    /**
     * Create a filter form
     */
    TrainingListComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            traning_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
        this.advanceFilterForm = this._fb.group({
            traning_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    TrainingListComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'traning_name': form.value['traning_name'],
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
    TrainingListComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        // removing empty key from objectsetAdvanceFilterKeyUp
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
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'is_active') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'traning_name') {
                        this.likeJSON[key] = form.value[key];
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getTrainingList(1, '', 'desc');
        }
    };
    TrainingListComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], TrainingListComponent.prototype, "onKeydownHandler", null);
    TrainingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training-list',
            template: __webpack_require__(/*! ./training-list.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/training-list.component.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"]],
            styles: [__webpack_require__(/*! ./training-list.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/training-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], TrainingListComponent);
    return TrainingListComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/training-list.module.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/training-list.module.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: TrainingListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingListModule", function() { return TrainingListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _training_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./training-list.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/training-list.component.ts");
/* harmony import */ var _add_edit_training_dialog_add_edit_training_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit-training-dialog/add-edit-training-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/training-list/add-edit-training-dialog/add-edit-training-dialog.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _training_list_component__WEBPACK_IMPORTED_MODULE_5__["TrainingListComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
];
var TrainingListModule = /** @class */ (function () {
    function TrainingListModule() {
    }
    TrainingListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ],
            declarations: [_training_list_component__WEBPACK_IMPORTED_MODULE_5__["TrainingListComponent"], _add_edit_training_dialog_add_edit_training_dialog__WEBPACK_IMPORTED_MODULE_6__["AddEditTrainingDialog"]
            ],
            entryComponents: [_add_edit_training_dialog_add_edit_training_dialog__WEBPACK_IMPORTED_MODULE_6__["AddEditTrainingDialog"]]
        })
    ], TrainingListModule);
    return TrainingListModule;
}());



/***/ })

}]);
//# sourceMappingURL=worksheet-quick-action-training-list-training-list-module.js.map