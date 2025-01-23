(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dynamic-field-dynamic-field-module"],{

/***/ "./src/app/admin/administration-module/dynamic-field/add-dynamic-field/add-dynamic-field-dialog.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/dynamic-field/add-dynamic-field/add-dynamic-field-dialog.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Change InOut Time dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{data.fieldData ? 'Update' : 'Add'}} Dynamic Field</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addDynamicForm\" (submit)=\"onSubmitAddDynamicForm(addDynamicForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Field Name\" formControlName=\"field_title\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addDynamicForm.get('field_title'))\"\r\n                            [errMsg]=\"validationMsg.FIELD_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Field Group\" formControlName=\"group_id\" required>\r\n              <mat-option *ngFor=\"let group of dynamicGroup\" [value]=\"group?.id\">\r\n                {{ group?.group_name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addDynamicForm.get('group_id'))\"\r\n                            [errMsg]=\"validationMsg.FIELD_GROUP_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Control Type\" formControlName=\"field_type\" required\r\n                        [disabled]=\"data.fieldData ? true : false\"\r\n                        (selectionChange)=\"changeControlType($event.value)\">\r\n              <mat-option *ngFor=\"let field of fieldType\" [value]=\"field?.key\">\r\n                {{ field?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addDynamicForm.get('field_type'))\"\r\n                            [errMsg]=\"validationMsg.FIELD_TYPE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\" *ngIf=\"fieldValue\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Field Value\" formControlName=\"field_value\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Description\" formControlName=\"help_text\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-20\" *ngIf=\"fieldValueType\">\r\n          <mat-radio-group formControlName=\"field_value_type\">\r\n            <mat-radio-button value=\"A\" class=\"MR-10\">Alphabetical</mat-radio-button>\r\n            <mat-radio-button value=\"N\" class=\"MR-10\">Numeric</mat-radio-button>\r\n            <mat-radio-button value=\"B\">Both</mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-20\">\r\n          <mat-checkbox formControlName=\"is_mandatory\">Click to make this field mandatory.</mat-checkbox>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button [disabled]=\"addDynamicForm.invalid\" type=\"submit\" class=\"btn-primary\">{{data.fieldData ? 'Update' :\r\n            'Add'}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change InOut Time dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/dynamic-field/add-dynamic-field/add-dynamic-field-dialog.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/dynamic-field/add-dynamic-field/add-dynamic-field-dialog.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AddDynamicFieldGlobalConstantsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDynamicFieldGlobalConstantsDialog", function() { return AddDynamicFieldGlobalConstantsDialog; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
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









var AddDynamicFieldGlobalConstantsDialog = /** @class */ (function (_super) {
    __extends(AddDynamicFieldGlobalConstantsDialog, _super);
    function AddDynamicFieldGlobalConstantsDialog(dialogRef, data, _fb, _commonCrudService, _router) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._router = _router;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.fieldValueType = false;
        _this.fieldValue = false;
        //Model
        _this.dynemicFormField = [];
        _this.dynamicGroup = [];
        _this.fieldType = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPEDROPDOWN"];
        _this.isAlphabetic = false;
        _this.isNumeric = false;
        _this.isBoth = false;
        return _this;
    }
    AddDynamicFieldGlobalConstantsDialog.prototype.ngOnInit = function () {
        this.getDynamicGroup();
        this.createDynamicFieldForm();
        if (this.data.fieldData) {
            this.changeControlType(this.data.fieldData.field_type);
        }
    };
    AddDynamicFieldGlobalConstantsDialog.prototype.createDynamicFieldForm = function () {
        this.addDynamicForm = this._fb.group({
            field_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.fieldData ? this.data.fieldData.field_title : '', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            group_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.fieldData ? this.data.fieldData.group_id.id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            field_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.fieldData ? this.data.fieldData.field_type : '', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            field_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.fieldData ? this.data.fieldData.field_value : ''),
            is_mandatory: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.fieldData ? this.data.fieldData.is_mandatory : ''),
            field_value_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.fieldData ? this.data.fieldData.field_value_type : null),
            help_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.fieldData ? this.data.fieldData.help_text : null),
        });
    };
    AddDynamicFieldGlobalConstantsDialog.prototype.getDynamicGroup = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DYNAMIC_FIELD_GROUP, {}, { 'notin': { 'id': '1,2' } }).subscribe(function (response) {
            _this.dynamicGroup = response.payload.data;
        });
    };
    AddDynamicFieldGlobalConstantsDialog.prototype.onSubmitAddDynamicForm = function (form) {
        if (form.valid) {
            if (this.data.fieldData) {
                this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DYNAMIC_FIELD, this.data.fieldData.id, form.value).subscribe(function (response) {
                });
            }
            else {
                if (form.value['is_mandatory'] === '') {
                    form.value['is_mandatory'] = 0;
                }
                else {
                    form.value['is_mandatory'] = 1;
                }
                form.value['is_active'] = 1;
                form.value['field_value'] = (form.value['field_value'] !== null) ? form.value['field_value'] : '';
                form.value['field_value_type'] = (form.value['field_value_type'] !== null) ? form.value['field_value_type'] : '';
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DYNAMIC_FIELD, form.value).subscribe(function (response) {
                });
            }
            this.onClose();
        }
    };
    AddDynamicFieldGlobalConstantsDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    /**
     * Change Control Type Update Validation
     * @param value
     */
    AddDynamicFieldGlobalConstantsDialog.prototype.changeControlType = function (value) {
        this.fieldValueType = false;
        this.fieldValue = false;
        this.addDynamicForm.get('field_value').setValidators(null);
        this.addDynamicForm.get('field_value').updateValueAndValidity();
        this.addDynamicForm.get('field_value_type').setValidators(null);
        this.addDynamicForm.get('field_value_type').updateValueAndValidity();
        if (value === 'DD') {
            this.fieldValue = true;
            this.addDynamicForm.get('field_value').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
            this.addDynamicForm.get('field_value').updateValueAndValidity();
        }
        else if (value === 'TB') {
            this.fieldValueType = true;
            this.addDynamicForm.get('field_value_type').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
            this.addDynamicForm.get('field_value_type').updateValueAndValidity();
        }
    };
    AddDynamicFieldGlobalConstantsDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-global-constants-dialog',
            template: __webpack_require__(/*! ./add-dynamic-field-dialog.html */ "./src/app/admin/administration-module/dynamic-field/add-dynamic-field/add-dynamic-field-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], AddDynamicFieldGlobalConstantsDialog);
    return AddDynamicFieldGlobalConstantsDialog;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/administration-module/dynamic-field/dynamic-field.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/administration-module/dynamic-field/dynamic-field.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin (Client) Dynamic Field Container -->\r\n<div class=\"client-dynamic-field-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span>ADMINISTRATION</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">DYNAMIC FIELD</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <button class=\"open-dialog-btn\" (click)=\"AddEditGlobalConstantsDialog(null)\" *ngIf=\"tabData['add_edit']\">\r\n            <mat-icon class=\"material-icons\">add</mat-icon>\r\n            Add Dynamic Field\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onOpenFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li (click)=\"downloadExcel()\" *ngIf=\"tabData['export']\">\r\n              <a>\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <mat-icon\r\n          class=\"material-icons\">close</mat-icon></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Field Group\" formControlName=\"group_id\">\r\n                  <mat-option *ngFor=\"let group of dynamicGroup\" [value]=\"group?.id\">\r\n                    {{ group?.group_name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Name\" formControlName=\"field_title\"/>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Field Type\" formControlName=\"field_type\">\r\n                  <mat-option *ngFor=\"let field of fieldType\" [value]=\"field?.key\">\r\n                    {{ field?.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Value\" formControlName=\"field_value\"/>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Mandatory\" formControlName=\"is_mandatory\">\r\n                  <mat-option value=\"1\">Yes</mat-option>\r\n                  <mat-option value=\"0\">No</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-9 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"fieldgroup.value\">\r\n          <span class=\"tag__title\">Field Group :</span>\r\n          <span>\r\n            <mat-form-field>\r\n               <mat-select placeholder=\"Field Group\" formControlName=\"group_id\"\r\n                           (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                  <mat-option *ngFor=\"let group of dynamicGroup\" [value]=\"group?.id\">\r\n                    {{ group?.group_name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('group_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"field_title.value\">\r\n          <span class=\"tag__title\">Name :</span>\r\n          <span>\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Name\" formControlName=\"field_title\"\r\n                       (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n              </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('field_title')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"field_type.value\">\r\n          <span class=\"tag__title\">Field Type :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Field Type\" formControlName=\"field_type\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                  <mat-option *ngFor=\"let field of fieldType\" [value]=\"field?.key\">\r\n                    {{ field?.label }}\r\n                  </mat-option>\r\n              </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('field_type')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"field_value.value\">\r\n          <span class=\"tag__title\">Value :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Yes,No\" formControlName=\"field_value\"\r\n                     (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('field_value')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"field_parent_condition.value\">\r\n          <span class=\"tag__title\">Mandatory :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"TextBox\" readonly #selectRef\r\n                          formControlName=\"is_mandatory\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option value=\"1\">Yes</mat-option>\r\n                <mat-option value=\"0\">No</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('is_mandatory')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\"\r\n             *ngIf=\"fieldgroup.value  || field_title.value || field_type.value || field_value.value || field_parent_condition.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"4%\">Sr.No</th>\r\n\r\n            <th width=\"15%\" (click)=\"getSortData('group_name',\r\n             (sortBy === 'group_name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Field Group\r\n              <i *ngIf=\"sortBy === 'group_name'\" [ngClass]=\"{'material-icons': true,\r\n                 'active' : (sortBy === 'group_name'),\r\n                  'icon-up' : ((sortBy === 'group_name') && (sortOrder === 'asc')),\r\n                  'icon-down' : true}\">\r\n                {{(sortBy === 'group_name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"17%\" (click)=\"getSortData('field_title',\r\n             (sortBy === 'field_title') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Name\r\n              <i *ngIf=\"sortBy === 'field_title'\" [ngClass]=\"{'material-icons': true,\r\n                 'active' : (sortBy === 'field_title'),\r\n                  'icon-up' : ((sortBy === 'field_title') && (sortOrder === 'asc')),\r\n                  'icon-down' : true}\">\r\n                {{(sortBy === 'field_title') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"10%\" (click)=\"getSortData('field_type',\r\n             (sortBy === 'field_type') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Field Type\r\n              <i *ngIf=\"sortBy === 'field_type'\" [ngClass]=\"{'material-icons': true,\r\n                 'active' : (sortBy === 'field_type'),\r\n                  'icon-up' : ((sortBy === 'field_type') && (sortOrder === 'asc')),\r\n                  'icon-down' : true}\">\r\n                {{(sortBy === 'field_type') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"20%\" (click)=\"getSortData('field_value',\r\n             (sortBy === 'field_value') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Value\r\n              <i *ngIf=\"sortBy === 'field_value'\" [ngClass]=\"{'material-icons': true,\r\n                 'active' : (sortBy === 'field_value'),\r\n                  'icon-up' : ((sortBy === 'field_value') && (sortOrder === 'asc')),\r\n                  'icon-down' : true}\">\r\n                {{(sortBy === 'field_value') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"19%\" (click)=\"getSortData('help_text',\r\n             (sortBy === 'help_text') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Description\r\n              <i *ngIf=\"sortBy === 'help_text'\" [ngClass]=\"{'material-icons': true,\r\n                 'active' : (sortBy === 'help_text'),\r\n                  'icon-up' : ((sortBy === 'help_text') && (sortOrder === 'asc')),\r\n                  'icon-down' : true}\">\r\n                {{(sortBy === 'help_text') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"6%\" (click)=\"getSortData('is_mandatory',\r\n             (sortBy === 'is_mandatory') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Madatory\r\n              <i *ngIf=\"sortBy === 'is_mandatory'\" [ngClass]=\"{'material-icons': true,\r\n                 'active' : (sortBy === 'is_mandatory'),\r\n                  'icon-up' : ((sortBy === 'is_mandatory') && (sortOrder === 'asc')),\r\n                  'icon-down' : true}\">\r\n                {{(sortBy === 'is_mandatory') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"9%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody *ngIf=\"dynemicFormField.length\">\r\n            <tr *ngFor=\"let field of dynemicFormField; let i = index\">\r\n              <td width=\"4%\" class=\"text-center\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"15%\">{{field?.group_id?.group_name}}</td>\r\n              <td width=\"17%\">{{field?.field_title}}</td>\r\n              <td width=\"10%\">{{getFiledTypeName(field?.field_type)}}</td>\r\n              <td width=\"20%\">{{field?.field_value}}</td>\r\n              <td width=\"19%\">{{field?.help_text}}</td>\r\n              <td width=\"6%\">\r\n                <span class=\"turquoise-color fw-500\" *ngIf=\"field?.is_mandatory\"><mat-icon\r\n                  class=\"grid_icon_trip_origin mat-icon material-icons\">trip_origin</mat-icon>Yes</span>\r\n                <span class=\"red-color fw-500\" *ngIf=\"!field?.is_mandatory\"><mat-icon\r\n                  class=\"grid_icon_trip_origin mat-icon material-icons\">trip_origin</mat-icon>No</span>\r\n              </td>\r\n              <td width=\"9%\">\r\n                <mat-icon class=\"light-orange-color\" *ngIf=\"tabData['add_edit']\"\r\n                          (click)=\"AddEditGlobalConstantsDialog(field)\">edit\r\n                </mat-icon>\r\n                <mat-icon class=\"red-color\" *ngIf=\"tabData['delete']\" (click)=\"onOpenViewFieldModal(field)\">delete\r\n                </mat-icon>\r\n                <mat-slide-toggle *ngIf=\"tabData['add_edit']\" [(ngModel)]=\"slideData[i]\"\r\n                                  (change)=\"onDisabledConfirmDialog($event, field, i)\"></mat-slide-toggle>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table *ngIf=\"dynemicFormField.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n  <div *ngIf=\"dynemicFormField.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- End Data Grid -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/dynamic-field/dynamic-field.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/administration-module/dynamic-field/dynamic-field.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluaXN0cmF0aW9uLW1vZHVsZS9keW5hbWljLWZpZWxkL2R5bmFtaWMtZmllbGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/administration-module/dynamic-field/dynamic-field.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/administration-module/dynamic-field/dynamic-field.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DynamicFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldComponent", function() { return DynamicFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_dynamic_field_add_dynamic_field_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-dynamic-field/add-dynamic-field-dialog */ "./src/app/admin/administration-module/dynamic-field/add-dynamic-field/add-dynamic-field-dialog.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
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












var DynamicFieldComponent = /** @class */ (function () {
    function DynamicFieldComponent(_router, _fb, dialog, _commonCrudService, _sharedService) {
        this._router = _router;
        this._fb = _fb;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        // Constant Variables
        // Data Variables
        this.fieldList = [];
        this.tagList = [];
        //Model
        this.dynemicFormField = [];
        this.dynamicGroup = [];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilter = false;
        this.isOpenHistoryDialog = false;
        this.isOpenFilterView = false;
        this.fieldType = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["FIELDTYPEDROPDOWN"];
        // Data Variables
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.slideData = [];
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_9__["ADMINTABACCESS"].CLIENT_VIEWCLIENT_FIELD;
    }
    Object.defineProperty(DynamicFieldComponent.prototype, "fieldgroup", {
        get: function () {
            return this.filterForm.get('group_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldComponent.prototype, "field_title", {
        get: function () {
            return this.filterForm.get('field_title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldComponent.prototype, "field_type", {
        get: function () {
            return this.filterForm.get('field_type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldComponent.prototype, "field_value", {
        get: function () {
            return this.filterForm.get('field_value');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFieldComponent.prototype, "field_parent_condition", {
        get: function () {
            return this.filterForm.get('is_mandatory');
        },
        enumerable: true,
        configurable: true
    });
    DynamicFieldComponent.prototype.ngOnInit = function () {
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.initializationMethod();
        this.createAdvanceFilterForm();
    };
    DynamicFieldComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            group_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            field_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            field_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            field_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            is_mandatory: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
        this.advanceFilterForm = this._fb.group({
            group_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            field_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            field_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            field_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            is_mandatory: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
    };
    // Initialization Methods
    DynamicFieldComponent.prototype.initializationMethod = function () {
        this.getFieldList(1, 'id', 'desc');
        this.getDynamicGroup();
    };
    /**
     * Get Dynamic Group
     */
    DynamicFieldComponent.prototype.getDynamicGroup = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].DYNAMIC_FIELD_GROUP, {}, { 'notin': { 'id': '1,2' } }).subscribe(function (response) {
            _this.dynamicGroup = response.payload.data;
        });
    };
    /**
     * Function for get the field group
     */
    DynamicFieldComponent.prototype.getFieldList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].DYNAMIC_FIELD, this.getClientQueryParams(pageNumber, key, val), this.getClientSearchParams())
            .subscribe(function (response) {
            _this.handleResponse(response);
        });
    };
    DynamicFieldComponent.prototype.handleResponse = function (response) {
        this.dynemicFormField = response.payload.data;
        for (var i = 0; i < this.dynemicFormField.length; i++) {
            this.slideData[i] = this.dynemicFormField[i].is_active ? true : false;
        }
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Open add dynamic field modal
     */
    DynamicFieldComponent.prototype.AddEditGlobalConstantsDialog = function (dynemicFormField) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_dynamic_field_add_dynamic_field_dialog__WEBPACK_IMPORTED_MODULE_3__["AddDynamicFieldGlobalConstantsDialog"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {
                fieldData: dynemicFormField
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getFieldList(1, 'id', 'desc');
        });
    };
    /**
     * conformation dialog
     */
    DynamicFieldComponent.prototype.onOpenViewFieldModal = function (dynemicFormField) {
        var _this = this;
        var dialogConfigData = {
            data: {
                content: 'Are you sure, you want to delete this field ?'
            },
            panelClass: 'add-bookkeeping-dialog-panel-container'
        };
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogComponent"], dialogConfigData);
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this.deleteFieldData(dynemicFormField.id);
            }
            _this.getFieldList(1, 'id', 'desc');
        });
    };
    DynamicFieldComponent.prototype.deleteFieldData = function (id) {
        var _this = this;
        this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].DYNAMIC_FIELD, id).subscribe(function (Response) {
            _this.getFieldList(1, 'id', 'desc');
        });
    };
    DynamicFieldComponent.prototype.onDisabledConfirmDialog = function (event, dynemicFormField, id) {
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
                _this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].DYNAMIC_FIELD, dynemicFormField.id, {
                    'is_active': (event.checked === true) ? '1' : '0',
                    'method': '_put'
                }).subscribe(function (response) {
                    _this.getFieldList(1, 'id', 'desc');
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
     * Open modal method
     */
    DynamicFieldComponent.prototype.onOpenModal = function () {
        this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
    };
    /**
     * Open filter method
     */
    DynamicFieldComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = true;
    };
    /**
     * Close filter method
     */
    DynamicFieldComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    /**
     * Delete tag method
     * @param index
     */
    DynamicFieldComponent.prototype.deleteMsg = function (index) {
        this.tagList.splice(index, 1);
    };
    DynamicFieldComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_11__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    DynamicFieldComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue('');
        this.advanceFilterForm.get(elementName).setValue('');
        if (elementName === 'group_id' || elementName === 'field_type' || elementName === 'is_mandatory') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'field_title' || elementName === 'field_value') {
            delete this.likeJSON[elementName];
        }
        this.getFieldList(1, this.sortBy, this.sortOrder);
    };
    /**
     * Pagination page change event
     * @param event
     */
    DynamicFieldComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getFieldList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     *
     */
    DynamicFieldComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getFieldList(1, sortKey, sortVal);
    };
    /**
     * Function downloading excel
     */
    DynamicFieldComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].DYNAMIC_FIELD_DOWNLOAD_EXCEL, params, {}, 'Dynamic Field', 0).subscribe(function (response) {
        });
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    DynamicFieldComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = { 'is_active': 1 };
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
        //
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'group_id' || key === 'field_type' || key === 'is_mandatory') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'field_title' || key === 'field_value') {
                        this.likeJSON[key] = form.value[key];
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getFieldList(1, 'id', 'desc');
        }
    };
    DynamicFieldComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'group_id': form.value['group_id'],
                'field_title': form.value['field_title'],
                'field_type': form.value['field_type'],
                'field_value': form.value['field_value'],
                'is_mandatory': form.value['is_mandatory']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    DynamicFieldComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.isOpenFilterView = false;
        this.getFieldList(1, '', 'desc');
    };
    /**
     * Esc event for close modal
     * @param event
     */
    DynamicFieldComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * Get Field Type Name
     * @param fieldType
     */
    DynamicFieldComponent.prototype.getFiledTypeName = function (fieldType) {
        var val = this.fieldType.filter(function (elem) { return elem.key === fieldType; });
        return (val.length) ? val[0].label : '';
    };
    /**
     * function to return query params for feedback list api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{pageNumber: number; recordsPerPage: number}}
     */
    DynamicFieldComponent.prototype.getClientQueryParams = function (page, sortKey, sortOrder) {
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
    DynamicFieldComponent.prototype.getClientSearchParams = function () {
        var params = {};
        var filter = {};
        params['notin'] = { 'group_id': '1,2' };
        // check for the object whether it's empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if ((Object.keys(this.equalJSON).length) || (Object.keys(this.likeJSON).length)) {
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
    ], DynamicFieldComponent.prototype, "onKeydownHandler", null);
    DynamicFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamic-field',
            template: __webpack_require__(/*! ./dynamic-field.component.html */ "./src/app/admin/administration-module/dynamic-field/dynamic-field.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-field.component.scss */ "./src/app/admin/administration-module/dynamic-field/dynamic-field.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], DynamicFieldComponent);
    return DynamicFieldComponent;
}());



/***/ }),

/***/ "./src/app/admin/administration-module/dynamic-field/dynamic-field.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/administration-module/dynamic-field/dynamic-field.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DynamicFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldModule", function() { return DynamicFieldModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _dynamic_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-field.component */ "./src/app/admin/administration-module/dynamic-field/dynamic-field.component.ts");
/* harmony import */ var _add_dynamic_field_add_dynamic_field_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-dynamic-field/add-dynamic-field-dialog */ "./src/app/admin/administration-module/dynamic-field/add-dynamic-field/add-dynamic-field-dialog.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _dynamic_field_component__WEBPACK_IMPORTED_MODULE_6__["DynamicFieldComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]],
        children: [
            {
                path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].DYNAMIC_FIELD_ROUTE,
                component: _dynamic_field_component__WEBPACK_IMPORTED_MODULE_6__["DynamicFieldComponent"]
            }
        ]
    }
];
var DynamicFieldModule = /** @class */ (function () {
    function DynamicFieldModule() {
    }
    DynamicFieldModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dynamic_field_component__WEBPACK_IMPORTED_MODULE_6__["DynamicFieldComponent"],
                _add_dynamic_field_add_dynamic_field_dialog__WEBPACK_IMPORTED_MODULE_7__["AddDynamicFieldGlobalConstantsDialog"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ],
            entryComponents: [_add_dynamic_field_add_dynamic_field_dialog__WEBPACK_IMPORTED_MODULE_7__["AddDynamicFieldGlobalConstantsDialog"]]
        })
    ], DynamicFieldModule);
    return DynamicFieldModule;
}());



/***/ })

}]);
//# sourceMappingURL=dynamic-field-dynamic-field-module.js.map