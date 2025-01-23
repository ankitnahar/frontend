(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["worksheet-quick-action-worksheet-master-checklist-worksheet-master-checklist-module"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/add-checklist-group/add-checklist-group-dialog.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/add-checklist-group/add-checklist-group-dialog.html ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Add Master Checklist dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{data ? 'Update' : 'Add'}} Checklist Group</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <i class=\"material-icons\" (click)=\"onClose()\">close</i>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addCheklistGroupForm\" (submit)=\"onSubmitAddChecklistGroupForm(addCheklistGroupForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <!--<div class=\"col-md-12\">-->\r\n        <!--<mat-form-field>-->\r\n        <!--<mat-select placeholder=\"Master Checklist\" formControlName=\"addMasterChecklist\">-->\r\n        <!--&lt;!&ndash;[(ngModel)]=\"masterActivityDefaultSelect\"&ndash;&gt;-->\r\n        <!--<mat-option *ngFor=\"let data of masterActivityData; let i = index;\" [value]=\"+data.id\"> {{data.name}}-->\r\n        <!--</mat-option>-->\r\n        <!--</mat-select>-->\r\n        <!--</mat-form-field>-->\r\n        <!--<div class=\"validation-msg\">-->\r\n        <!--<app-validation *ngIf=\"isRequiredField(addCheklistGroupForm.get('addMasterChecklist'))\"-->\r\n        <!--[errMsg]=\"validationMsg.MASTER_CHECKLIST_REQUIRED\"></app-validation>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <!--[(ngModel)]=\"addChecklistGroupData\"-->\r\n            <input matInput placeholder=\"Checklist Group\" formControlName=\"addChecklistGroup\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addCheklistGroupForm.get('addChecklistGroup'))\"\r\n                            [errMsg]=\"validationMsg.CHECKLIST_GROUP_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addCheklistGroupForm.get('addChecklistGroup'))\"\r\n                            [errMsg]=\"validationMsg.CHECKLIST_GROUP_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <!--<div class=\"col-md-12 MT-10\">-->\r\n        <!--<mat-form-field>-->\r\n        <!--<input matInput placeholder=\"Sort Order\" formControlName=\"addSortOrder\"/>-->\r\n        <!--</mat-form-field>-->\r\n        <!--</div>-->\r\n\r\n        <div class=\"col-md-12 MT-20\">\r\n          <mat-checkbox #showSubactivity formControlName=\"addValidationTimesheet\"\r\n                        (change)=\"checkSubactitivyValidation($event.checked)\">Validation required for timesheet ?\r\n          </mat-checkbox>\r\n        </div>\r\n        <!--   -->\r\n        <div class=\"col-md-12 MT-10\" *ngIf=\"showSubactivity.checked\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Subactivity\" formControlName=\"addSubActivity\">\r\n              <mat-optgroup *ngFor=\"let parent of subActivity\" [label]=\"parent.name\">\r\n                <mat-option *ngFor=\"let data of parent.value; let i = index\" [value]=\"data.id\">\r\n                  {{data.subactivity_full_name}}\r\n                </mat-option>\r\n              </mat-optgroup>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Email content\" formControlName=\"addEmailContent\"></textarea>\r\n            <!--[(ngModel)]=\"emailDefaultSelect\"-->\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addCheklistGroupForm.get('addEmailContent'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_CONTENT_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" (click)=\"updateData()\" *ngIf=\"buttonFlag\"\r\n                  [disabled]=\"addCheklistGroupForm.invalid\">Update\r\n          </button>\r\n          <button class=\"btn-primary\" (click)=\"saveData()\" *ngIf=\"!buttonFlag\"\r\n                  [disabled]=\"addCheklistGroupForm.invalid\">Save\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change InOut Time dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/add-checklist-group/add-checklist-group-dialog.ts":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/add-checklist-group/add-checklist-group-dialog.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: AddChecklistGroupDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChecklistGroupDialog", function() { return AddChecklistGroupDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../utility/validation */ "./src/utility/validation.ts");
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



// crud




var AddChecklistGroupDialog = /** @class */ (function (_super) {
    __extends(AddChecklistGroupDialog, _super);
    function AddChecklistGroupDialog(_fb, _commonCrudService, dialogRef, data) {
        var _this = 
        // public _masterCheckListService: MasterChecklistService
        _super.call(this) || this;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.subActivity = [];
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_6__["ValidationConstantMessage"]();
        return _this;
    }
    AddChecklistGroupDialog.prototype.ngOnInit = function () {
        if (this.data && this.data.checkListGroup) {
            this.buttonFlag = true;
            this.addChecklistGroupData = this.data.checkListGroup.name;
            this.subActivityDefaultSelect = (this.data.checkListGroup.subactivity_id) ? this.data.checkListGroup.subactivity_id.id : null;
            // this.masterActivityDefaultSelect = this.data.checkListGroup.master_checklist_id.id;
            this.sortOrderDefaultSelectData = this.data.checkListGroup.sort_order;
            this.emailDefaultSelect = this.data.checkListGroup.email_content;
            this.timeSheetChecked = (this.data.checkListGroup.is_require_timesheet === 1) ? true : false;
        }
        else {
            this.buttonFlag = false;
        }
        this.createAddChecklistForm();
        this.getSubactivityData();
        this.getTaskAndMasterActivity();
    };
    /**
     * get activity data
     */
    AddChecklistGroupDialog.prototype.getTaskAndMasterActivity = function () {
        var _this = this;
        // this._masterCheckListService.getMasterCheckListAndTaskData('').subscribe(response => {
        //   this.responseHandle(response);
        // });
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(function (response) {
            _this.responseHandle(response);
        });
    };
    AddChecklistGroupDialog.prototype.responseHandle = function (data) {
        var _this = this;
        var masterData = [];
        var taskDataRef = [];
        for (var i in data.payload.data.masterActivity) {
            if (i) {
                masterData.push({ id: i, name: data.payload.data.masterActivity[i] });
            }
        }
        for (var i in data.payload.data.task) {
            if (i) {
                for (var j = 0; j < data.payload.data.task[i].length; j++) {
                    taskDataRef.push({
                        id: data.payload.data.task[i][j].id,
                        masterId: data.payload.data.task[i][j].master_activity_id,
                        name: data.payload.data.task[i][j].name
                    });
                }
            }
        }
        setTimeout(function (res) {
            _this.masterActivityData = masterData;
        }, 500);
    };
    AddChecklistGroupDialog.prototype.getSubactivityData = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].GET_SUB_ACTIVITY_DATA, {}, {}).subscribe(function (response) {
            _this.handleQualityControlResponse(response);
        });
    };
    AddChecklistGroupDialog.prototype.handleQualityControlResponse = function (response) {
        var res = response.payload.data;
        for (var data in res) {
            if (data) {
                this.subActivity.push({
                    name: data,
                    value: res[data]
                });
            }
        }
    };
    /**
     * Create add checklist group Form
     */
    AddChecklistGroupDialog.prototype.createAddChecklistForm = function () {
        this.addCheklistGroupForm = this._fb.group({
            // addMasterChecklist: new FormControl(this.masterActivityDefaultSelect, [<any>Validators.required]),
            addChecklistGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.addChecklistGroupData, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_6__["CommonRegex"].NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
            // addSortOrder: new FormControl(this.sortOrderDefaultSelectData),
            addValidationTimesheet: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.timeSheetChecked),
            addSubActivity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subActivityDefaultSelect),
            addEmailContent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.emailDefaultSelect, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_6__["CommonRegex"].NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)])
        });
    };
    AddChecklistGroupDialog.prototype.onSubmitAddChecklistGroupForm = function (form) {
        if (form.valid) {
            this.onClose();
        }
    };
    AddChecklistGroupDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    AddChecklistGroupDialog.prototype.updateData = function () {
        var _this = this;
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].CHECKLIST_UPDATE, this.data.checkListGroup.id, {
            // 'master_checklist_id': this.addCheklistGroupForm.controls['addMasterChecklist'].value,
            'name': this.addCheklistGroupForm.controls['addChecklistGroup'].value,
            'subactivity_id': this.addCheklistGroupForm.controls['addSubActivity'].value,
            'is_require_timesheet': this.addCheklistGroupForm.controls['addValidationTimesheet'].value,
            'email_content': this.addCheklistGroupForm.controls['addEmailContent'].value,
            '_method': 'put'
        }).subscribe(function (response) {
            _this.dialogRef.close();
        });
    };
    AddChecklistGroupDialog.prototype.saveData = function () {
        var _this = this;
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].CHECKLIST_SAVE, {
            // 'master_checklist_id': this.addCheklistGroupForm.controls['addMasterChecklist'].value,
            'name': this.addCheklistGroupForm.controls['addChecklistGroup'].value,
            'subactivity_id': this.addCheklistGroupForm.controls['addSubActivity'].value,
            'is_require_timesheet': this.addCheklistGroupForm.controls['addValidationTimesheet'].value,
            'email_content': this.addCheklistGroupForm.controls['addEmailContent'].value,
        }).subscribe(function (response) {
            _this.dialogRef.close();
        });
    };
    AddChecklistGroupDialog.prototype.checkSubactitivyValidation = function (value) {
        if (value) {
            this.addCheklistGroupForm.get('addSubActivity').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            this.addCheklistGroupForm.get('addSubActivity').updateValueAndValidity();
        }
        else {
            this.addCheklistGroupForm.get('addSubActivity').setValidators(null);
            this.addCheklistGroupForm.get('addSubActivity').updateValueAndValidity();
        }
    };
    AddChecklistGroupDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-checklist-group-dialog',
            template: __webpack_require__(/*! ./add-checklist-group-dialog.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/add-checklist-group/add-checklist-group-dialog.html"),
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__["CommonCrudService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AddChecklistGroupDialog);
    return AddChecklistGroupDialog;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/checklist-group.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/checklist-group.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Worksheet checklist Group Container -->\r\n<!-- Start Data Grid -->\r\n<div class=\"with-filter-grid-container\">\r\n  <!-- Start Grid Inner Header -->\r\n  <div class=\"grid-inner-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 inner-header-title\">\r\n        <button class=\"open-dialog-btn\" (click)=\"openAddEditChecklistGroupDialog()\">\r\n          <i class=\"material-icons\">add</i> Add Checklist Group\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"download-icon\">\r\n          <li>\r\n            <a (click)=\"onToggleFilter()\">\r\n              <span>Filter</span>\r\n              <i class=\"material-icons\">filter_list</i>\r\n            </a>\r\n          </li>\r\n\r\n          <li (click)=\"downloadExcel()\">\r\n            <a>\r\n              <span>Excel</span><i class=\"material-icons\">file_download</i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n\r\n  <!-- Start Grid Filter -->\r\n  <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n    <div class=\"filter-action-icon\">\r\n      <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc\r\n        <i class=\"material-icons\">close</i>\r\n      </span>\r\n    </div>\r\n    <div class=\"grid-filter-container\">\r\n      <div class=\"filter-title\">\r\n        <h3>Advance Filter</h3>\r\n      </div>\r\n      <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n        <div class=\"row\">\r\n          <!--<div class=\"col-md-4\">-->\r\n          <!--<ng-select [items]=\"masterActivityData\"-->\r\n          <!--[closeOnSelect]=\"true\"-->\r\n          <!--bindLabel=\"name\"-->\r\n          <!--placeholder=\"Master Checklist\"-->\r\n          <!--bindValue=\"id\"-->\r\n          <!--[virtualScroll]=\"true\"-->\r\n          <!--[searchable]=\"true\"-->\r\n          <!--[hideSelected]=\"true\"-->\r\n          <!--(change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"-->\r\n          <!--formControlName=\"master_checklist_id\">-->\r\n          <!--</ng-select>-->\r\n          <!--</div>-->\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <!-- <mat-select placeholder=\"Checklist Group\" formControlName=\"filterchecklistgroup\">\r\n                <mat-option value=\"1\">Special Notes</mat-option>\r\n                <mat-option value=\"2\">Reconciliation of Bank / CC / Paypal</mat-option>\r\n                <mat-option value=\"3\">Bookkeeping Processing</mat-option>\r\n              </mat-select> -->\r\n              <input matInput placeholder=\"Checklist Group\" formControlName=\"name\"/>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"modifieddate\" placeholder=\"Modified date\" formControlName=\"modified_on\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"modifieddate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #modifieddate></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n            <ng-select [items]=\"userList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Modified By\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"modified_by\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-8 MT-20 text-right\">\r\n            <button type=\"button\" class=\"btn-cancel\" (click)=\"onClearTags()\">Clear</button>\r\n            <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Filter -->\r\n\r\n  <!-- Start Filter Tags -->\r\n  <div class=\"filter-tags\">\r\n    <form [formGroup]=\"advanceFilterForm\">\r\n      <!--<div class=\"tag\" *ngIf=\"master_checklist_id.value\">-->\r\n      <!--<span class=\"tag__title\">Master Checklist :</span>-->\r\n      <!--<span>-->\r\n      <!--<ng-select [items]=\"masterActivityData\"-->\r\n      <!--[closeOnSelect]=\"true\"-->\r\n      <!--bindLabel=\"name\"-->\r\n      <!--placeholder=\"Master Checklist\"-->\r\n      <!--bindValue=\"id\"-->\r\n      <!--[virtualScroll]=\"true\"-->\r\n      <!--[searchable]=\"true\"-->\r\n      <!--[hideSelected]=\"true\"-->\r\n      <!--(change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"-->\r\n      <!--formControlName=\"master_checklist_id\">-->\r\n      <!--</ng-select>-->\r\n      <!--</span>-->\r\n      <!--<i class=\"material-icons tag__close\" (click)=\"onClearTag('master_checklist_id')\">close</i>-->\r\n      <!--</div>-->\r\n\r\n      <div class=\"tag\" *ngIf=\"name.value\">\r\n        <span class=\"tag__title\">Checklist Group :</span>\r\n        <span>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Checklist Group\" formControlName=\"name\"\r\n                   (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n          </mat-form-field>\r\n        </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('name')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"modified_on.value\">\r\n        <span class=\"tag__title\">Modified Date :</span>\r\n        <span>\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"modifieddate1\" placeholder=\"Date\" formControlName=\"modified_on\"\r\n                   (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"modifieddate1\"></mat-datepicker-toggle>\r\n            <mat-datepicker #modifieddate1></mat-datepicker>\r\n          </mat-form-field>\r\n        </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('modified_on')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"modified_by.value\">\r\n        <span class=\"tag__title\">Modified By :</span>\r\n        <span>\r\n         <ng-select [items]=\"userList\"\r\n                    [closeOnSelect]=\"true\"\r\n                    bindLabel=\"userfullname\"\r\n                    placeholder=\"Modified By\"\r\n                    bindValue=\"id\"\r\n                    [virtualScroll]=\"true\"\r\n                    [searchable]=\"true\"\r\n                    [hideSelected]=\"true\"\r\n                    (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                    formControlName=\"modified_by\">\r\n            </ng-select>\r\n        </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('modified_by')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"clearAll-tags\" *ngIf=\"\r\n      modified_by.value ||\r\n      modified_on.value ||\r\n      name.value\r\n      \">\r\n        <!--master_checklist_id.value-->\r\n        <a (click)=\"onClearTags()\">Clear all</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- End Filter Tags -->\r\n\r\n  <!-- Start Table -->\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"5%\">Sr. No</th>\r\n\r\n          <th width=\"20%\" (click)=\"getSortData('name',\r\n            (sortBy === 'name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Checklist Group\r\n            <i *ngIf=\"sortBy === 'name'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'name'),\r\n                 'icon-up' : ((sortBy === 'name') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n\r\n          <th width=\"20%\" (click)=\"getSortData('is_require_timesheet',\r\n                (sortBy === 'is_require_timesheet') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Timesheet\r\n            validation check\r\n            <i *ngIf=\"sortBy === 'is_require_timesheet'\" [ngClass]=\"{'material-icons': true,\r\n                    'active' : (sortBy === 'is_require_timesheet'),\r\n                     'icon-up' : ((sortBy === 'is_require_timesheet') && (sortOrder === 'asc')),\r\n                     'icon-down' : true}\">\r\n              {{(sortBy === 'is_require_timesheet') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n\r\n          <th width=\"30%\" (click)=\"getSortData('subactivity_id',\r\n                  (sortBy === 'subactivity_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Subactivity\r\n            <i *ngIf=\"sortBy === 'subactivity_id'\" [ngClass]=\"{'material-icons': true,\r\n                      'active' : (sortBy === 'subactivity_id'),\r\n                       'icon-up' : ((sortBy === 'subactivity_id') && (sortOrder === 'asc')),\r\n                       'icon-down' : true}\">\r\n              {{(sortBy === 'subactivity_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n\r\n          <th width=\"12%\" (click)=\"getSortData('created_by',\r\n                  (sortBy === 'created_by') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Created By\r\n            <i *ngIf=\"sortBy === 'created_by'\" [ngClass]=\"{'material-icons': true,\r\n                      'active' : (sortBy === 'created_by'),\r\n                       'icon-up' : ((sortBy === 'created_by') && (sortOrder === 'asc')),\r\n                       'icon-down' : true}\">\r\n              {{(sortBy === 'created_by') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"8%\">Action</th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody>\r\n          <tr *ngFor=\"let data of masterActivityListData; let i = index\">\r\n            <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n            <!--<td width=\"15%\">{{data?.master_checklist_id?.name}}</td>-->\r\n            <td width=\"20%\">{{data?.name}}</td>\r\n            <td width=\"20%\" *ngIf=\"data?.is_require_timesheet == 0\">Please select</td>\r\n            <td width=\"20%\" *ngIf=\"data?.is_require_timesheet == 1\" class=\"turquoise-color fw-500\">\r\n              <mat-icon\r\n                class=\"grid_icon_trip_origin mat-icon material-icons\">trip_origin\r\n              </mat-icon>\r\n              Yes\r\n            </td>\r\n            <td width=\"20%\" *ngIf=\"data?.is_require_timesheet == 2\" class=\"red-color fw-500\">\r\n              <mat-icon\r\n                class=\"grid_icon_trip_origin mat-icon material-icons\">trip_origin\r\n              </mat-icon>\r\n              No\r\n            </td>\r\n            <td width=\"30%\">{{data?.subactivity_id?.subactivity_name}}</td>\r\n            <td width=\"12%\">{{data?.created_by?.userfullname}} | {{data?.created_on | date : 'dd-MM-yyyy'}}</td>\r\n            <td width=\"8%\">\r\n              <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Edit'\"\r\n                        (click)=\"openAddEditMasterActivityDialog(data)\">\r\n                edit\r\n              </mat-icon>\r\n              <mat-slide-toggle [matTooltip]=\"slideData[i] ? 'Inactive' : 'Active'\" [(ngModel)]=\"slideData[i]\"\r\n                                (change)=\"onDisabledConfirmDialog($event, data, i)\"></mat-slide-toggle>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n\r\n      <table>\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"10\">\r\n            <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"\r\n                           (page)=\"onPageChange($event)\">\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <!-- End Table -->\r\n</div>\r\n<!-- End Data Grid -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/checklist-group.component.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/checklist-group.component.scss ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vd29ya3NoZWV0LW1hc3Rlci1jaGVja2xpc3QvY2hlY2tsaXN0LWdyb3VwL2NoZWNrbGlzdC1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/checklist-group.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/checklist-group.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: ChecklistGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistGroupComponent", function() { return ChecklistGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _add_checklist_group_add_checklist_group_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-checklist-group/add-checklist-group-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/add-checklist-group/add-checklist-group-dialog.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// crud





var ChecklistGroupComponent = /** @class */ (function () {
    function ChecklistGroupComponent(_fb, dialog, _commonCrudService, _sharedObjService) {
        this._fb = _fb;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        // Constant Variables
        // Data Variables
        this.masterActivityListData = [];
        this.tagList = [];
        this.slideData = [];
        this.userList = [];
        this.masterActivityData = [];
        this.teamData = [];
        // MatPaginator Inputs
        this.length = 100;
        this.pageSizeOptions = [5, 10, 25, 100];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenHistoryDialog = false;
        this.isOpenFilterView = false;
        this.isOpenFilter = false;
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
    }
    Object.defineProperty(ChecklistGroupComponent.prototype, "master_checklist_id", {
        get: function () {
            return this.filterForm.get('master_checklist_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChecklistGroupComponent.prototype, "name", {
        get: function () {
            return this.filterForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChecklistGroupComponent.prototype, "modified_on", {
        get: function () {
            return this.filterForm.get('modified_on');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChecklistGroupComponent.prototype, "modified_by", {
        get: function () {
            return this.filterForm.get('modified_by');
        },
        enumerable: true,
        configurable: true
    });
    ChecklistGroupComponent.prototype.ngOnInit = function () {
        this.createAdvanceFilterForm();
        this.getMasterActivityList(1, '', 'desc');
        this.getUserList();
        this.getTaskAndMasterActivity();
        this.getTaskData();
    };
    ChecklistGroupComponent.prototype.getMasterActivityList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].GET_MASTER_CHECKLIST_GROUP, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleQualityControlResponse(response);
        });
    };
    ChecklistGroupComponent.prototype.handleQualityControlResponse = function (response) {
        this.masterActivityListData = response.payload.data;
        for (var i = 0; i < this.masterActivityListData.length; i++) {
            this.slideData[i] = (this.masterActivityListData[i]['is_active'] === 1) ? true : false;
        }
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Create filter Master Activity
     */
    ChecklistGroupComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            master_checklist_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            modified_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            modified_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            master_checklist_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            modified_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            modified_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    /**
     * Add Edit Master Activity Dialog
     */
    ChecklistGroupComponent.prototype.openAddEditMasterActivityDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_checklist_group_add_checklist_group_dialog__WEBPACK_IMPORTED_MODULE_7__["AddChecklistGroupDialog"], {
            panelClass: 'add-form-dialog-container',
            data: {
                checkListGroup: data
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getMasterActivityList(1, '', 'desc');
        });
    };
    /**
     * Toogle Filter
     */
    ChecklistGroupComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    ChecklistGroupComponent.prototype.deleteMsg = function (index) {
        this.tagList.splice(index, 1);
    };
    /**
     * Pagination page change event
     * @param event
     */
    ChecklistGroupComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getMasterActivityList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Clear tag method
     */
    ChecklistGroupComponent.prototype.onClearTags = function () {
        this.createAdvanceFilterForm();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.isOpenFilter = false;
        this.getMasterActivityList(1, '', 'desc');
    };
    /**
     * Esc event for close modal
     * @param event
     */
    ChecklistGroupComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     *  Toggle confirmation Dialog
     */
    ChecklistGroupComponent.prototype.onDisabledConfirmDialog = function (event, data, id) {
        var _this = this;
        var status = event.checked ? 'Inactive' : 'Active';
        var statusNagetive = !event.checked ? 'Inactive' : 'Active';
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"], {
            data: {
                content: 'Do you want change status from ' + status + ' to ' + statusNagetive
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].MASTER_CHECKLIST_UPDATE_STATUS, data.id, {
                    'is_active': (event.checked === true) ? 1 : 0,
                    '_method': 'put'
                }).subscribe(function (response) {
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
    ChecklistGroupComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    ChecklistGroupComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getMasterActivityList(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    ChecklistGroupComponent.prototype.getSearchParam = function () {
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
    ChecklistGroupComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].MASTER_CHECKLIST_DOWNLOAD, params, this.getSearchParam(), 'checklist group', 0).subscribe(function (response) {
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    ChecklistGroupComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'master_checklist_id': form.value['master_checklist_id'],
                'name': form.value['name'],
                'modified_on': form.value['modified_on'],
                'modified_by': form.value['modified_by']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    ChecklistGroupComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        // this.masterData = form.value['master_id'];
        // this.selectedTask = form.value['task_id'];
        // alert(this.masterData);
        // alert(this.selectedTask);
        // removing empty key from objectsetAdvanceFilterKeyUp
        for (var key in form.value) {
            if (form.value.hasOwnProperty(key)) {
                if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined || form.value[key] === 'undefined') {
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
                    if (key === 'master_checklist_id' || key === 'modified_on' || key === 'modified_by') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'name') {
                        this.likeJSON[key] = form.value[key];
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getMasterActivityList(1, '', 'desc');
        }
        // {"compare":{"equal":{"name":"Payroll team"}}}
        // {"compare":{"equal":{"code":"","name":"BK General(Non chargeable)"}}}
    };
    /**
     * Get User List
     */
    ChecklistGroupComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.userList = response;
        });
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    ChecklistGroupComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue('');
        this.advanceFilterForm.get(elementName).setValue('');
        if (elementName === 'master_checklist_id' || elementName === 'modified_on' || elementName === 'modified_by') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'name') {
            delete this.likeJSON[elementName];
        }
        this.getMasterActivityList(1, '', 'desc');
    };
    /**
     * get activity data
     */
    ChecklistGroupComponent.prototype.getTaskAndMasterActivity = function () {
        var _this = this;
        // this._masterCheckListService.getMasterCheckListAndTaskData('').subscribe(response => {
        //   this.responseHandle(response);
        // });
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(function (response) {
            _this.responseHandle(response);
        });
    };
    ChecklistGroupComponent.prototype.responseHandle = function (data) {
        var _this = this;
        var masterData = [];
        var taskDataRef = [];
        for (var i in data.payload.data.masterActivity) {
            if (i) {
                masterData.push({ id: i, name: data.payload.data.masterActivity[i] });
            }
        }
        for (var i in data.payload.data.task) {
            if (i) {
                for (var j = 0; j < data.payload.data.task[i].length; j++) {
                    taskDataRef.push({
                        id: data.payload.data.task[i][j].id,
                        masterId: data.payload.data.task[i][j].master_activity_id,
                        name: data.payload.data.task[i][j].name
                    });
                }
            }
        }
        setTimeout(function (res) {
            _this.masterActivityData = masterData;
        }, 500);
    };
    /**
     * get task data
     */
    ChecklistGroupComponent.prototype.getTaskData = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].TEAM, {}, {}).subscribe(function (response) {
            _this.responseTeamHandle(response);
        });
    };
    ChecklistGroupComponent.prototype.responseTeamHandle = function (data) {
        var _this = this;
        var allData = data.payload.data;
        allData.filter(function (response) {
            _this.teamData.push({ 'id': response.service_id, 'name': response.team_name, 'is_active': response.is_active });
        });
    };
    /**
     * Add Edit Sub Activity Dialog
     */
    ChecklistGroupComponent.prototype.openAddEditChecklistGroupDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_checklist_group_add_checklist_group_dialog__WEBPACK_IMPORTED_MODULE_7__["AddChecklistGroupDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getMasterActivityList(1, '', 'desc');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ChecklistGroupComponent.prototype, "onKeydownHandler", null);
    ChecklistGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checklist-group',
            template: __webpack_require__(/*! ./checklist-group.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/checklist-group.component.html"),
            styles: [__webpack_require__(/*! ./checklist-group.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/checklist-group.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_4__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"]])
    ], ChecklistGroupComponent);
    return ChecklistGroupComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/add-master-cheklist-question-dialog/add-master-checklist-question-dialog.html":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/add-master-cheklist-question-dialog/add-master-checklist-question-dialog.html ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Add Master Checklist Question dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\"> {{ data.masterData ? 'Update' : 'Add'}} Master Checklist Question</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addMasterChecklistQuestionForm\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <ng-select [items]=\"masterChackList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"name\"\r\n                     placeholder=\"Master checklist\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"changeMasterCheckList($event)\"\r\n                     formControlName=\"addMasterChecklist\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addMasterChecklistQuestionForm.get('addMasterChecklist'))\"\r\n                            [errMsg]=\"validationMsg.MASTER_CHECKLIST_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Master Checklist\" value=\"N/A\" readonly\r\n                   formControlName=\"addMasterChecklistread\"/>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Task\" value=\"N/A\" readonly formControlName=\"addTask\"/>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <ng-select [items]=\"groupArray\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"name\"\r\n                     placeholder=\"Group\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"addGroup\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addMasterChecklistQuestionForm.get('addGroup'))\"\r\n                            [errMsg]=\"validationMsg.GROUP_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Question\" formControlName=\"addQuestion\" required></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addMasterChecklistQuestionForm.get('addQuestion'))\"\r\n                            [errMsg]=\"validationMsg.QUESTION_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addMasterChecklistQuestionForm.get('addQuestion'))\"\r\n                            [errMsg]=\"validationMsg.QUESTION_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Help text\" formControlName=\"addHelpText\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addMasterChecklistQuestionForm.get('addHelpText'))\"\r\n                            [errMsg]=\"validationMsg.HELP_TEXT_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div *ngIf=\"data.masterData\" class=\"col-md-12 PR-25\" (click)=\"updateData()\">\r\n          <button class=\"btn-primary\" [disabled]=\"addMasterChecklistQuestionForm.invalid\">Update</button>\r\n        </div>\r\n\r\n        <div *ngIf=\"!data.masterData\" class=\"col-md-12 PR-25\" (click)=\"saveData()\">\r\n          <button class=\"btn-primary\" [disabled]=\"addMasterChecklistQuestionForm.invalid\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change InOut Time dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/add-master-cheklist-question-dialog/add-master-checklist-question-dialog.ts":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/add-master-cheklist-question-dialog/add-master-checklist-question-dialog.ts ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: AddMasterChecklistQuestionDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMasterChecklistQuestionDialog", function() { return AddMasterChecklistQuestionDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../utility/validation */ "./src/utility/validation.ts");
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







// import { MasterChecklistQuestionService } from '../master-checklist-question.service';
var AddMasterChecklistQuestionDialog = /** @class */ (function (_super) {
    __extends(AddMasterChecklistQuestionDialog, _super);
    function AddMasterChecklistQuestionDialog(_fb, dialogRef, data, _commonCrudService) {
        var _this = 
        // public _masterCheckListQuestion: MasterChecklistQuestionService,
        _super.call(this) || this;
        _this._fb = _fb;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_6__["ValidationConstantMessage"]();
        //data variables
        _this.masterChackList = [];
        _this.groupArray = [];
        _this.objectData = [];
        return _this;
    }
    AddMasterChecklistQuestionDialog.prototype.ngOnInit = function () {
        this.getChecklistGroup();
        this.createAddMasterChecklistQuestionForm();
        this.getData();
        this.changeMasterCheckList({ id: '' });
    };
    AddMasterChecklistQuestionDialog.prototype.getData = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].MASTER_CHECKLIST_LISTEING, { 'records': 'all' }, {}).subscribe(function (response) {
            var mapData = response.payload.data;
            _this.masterChackList = [];
            mapData.filter(function (mapRes) {
                if (mapRes.name) {
                    _this.masterChackList.push({ id: mapRes.id, name: mapRes.name });
                }
            });
        });
        if (this.data.masterData) {
            // console.log(this.data.masterData);
            this.masterCheckListSelectedData = this.data.masterData.master_checklist_id;
            this.groupSelectedValue = this.data.masterData.checklist_group_id;
            this.addMasterChecklistQuestionForm.controls['addMasterChecklist'].setValue(this.masterCheckListSelectedData);
            this.addMasterChecklistQuestionForm.controls['addGroup'].setValue(this.groupSelectedValue);
            this.addMasterChecklistQuestionForm.controls['addQuestion'].setValue(this.data.masterData.question_name);
            this.addMasterChecklistQuestionForm.controls['addHelpText'].setValue(this.data.masterData.help_text);
            this.changeMasterCheckList({ 'id': this.masterCheckListSelectedData });
        }
        else {
            // for add
        }
    };
    AddMasterChecklistQuestionDialog.prototype.getChecklistGroup = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].GET_MASTER_CHECKLIST_GROUP, { 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.groupArray = response.payload.data;
        });
    };
    AddMasterChecklistQuestionDialog.prototype.changeMasterCheckList = function (event, init) {
        var _this = this;
        // this.groupArray = [];
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].GET_GROUP_DATA, event.id, {}, {}).subscribe(function (response) {
            if (response.payload.data[0].masteractivityname) {
                _this.addMasterChecklistQuestionForm.controls['addMasterChecklistread'].setValue(response.payload.data[0].masteractivityname);
            }
            if (response.payload.data[0].taskname) {
                _this.addMasterChecklistQuestionForm.controls['addTask'].setValue(response.payload.data[0].taskname);
            }
        });
    };
    /**
     * Create add checklist group Form
     */
    AddMasterChecklistQuestionDialog.prototype.createAddMasterChecklistQuestionForm = function () {
        this.addMasterChecklistQuestionForm = this._fb.group({
            addMasterChecklist: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            addMasterChecklistread: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            addTask: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            addGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.data.length) ? this.data.masterData.groupName : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            addQuestion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_6__["CommonRegex"].NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
            addHelpText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_6__["CommonRegex"].NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)])
        });
    };
    AddMasterChecklistQuestionDialog.prototype.onSubmitAddMasterChecklistQuestionForm = function (form) {
        if (form.valid) {
            this.onClose();
        }
    };
    AddMasterChecklistQuestionDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    AddMasterChecklistQuestionDialog.prototype.updateData = function () {
        var _this = this;
        if (this.addMasterChecklistQuestionForm.valid) {
            var groupId_1 = '';
            this.groupArray.filter(function (data) {
                if (data.name === _this.addMasterChecklistQuestionForm.controls['addGroup'].value) {
                    groupId_1 = data.id;
                }
            });
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].UPDATE_MASTER_CHECKLIST_ALL_DATA, this.data.masterData.id, {
                'master_checklist_id': this.addMasterChecklistQuestionForm.controls['addMasterChecklist'].value,
                'checklist_group_id': this.addMasterChecklistQuestionForm.controls['addGroup'].value,
                'question_name': this.addMasterChecklistQuestionForm.controls['addQuestion'].value,
                'help_text': this.addMasterChecklistQuestionForm.controls['addHelpText'].value,
                'is_active': this.data.masterData.is_active,
                '_method': 'put'
            }).subscribe(function (response) {
                _this.onClose();
            });
        }
    };
    AddMasterChecklistQuestionDialog.prototype.saveData = function () {
        var _this = this;
        if (this.addMasterChecklistQuestionForm.valid) {
            var groupId_2 = '';
            this.groupArray.filter(function (data) {
                if (data.name === _this.addMasterChecklistQuestionForm.controls['addGroup'].value) {
                    groupId_2 = data.id;
                }
            });
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].ADD_MASTER_CHECKLIST_ALL_DATA, {
                'master_checklist_id': this.addMasterChecklistQuestionForm.controls['addMasterChecklist'].value,
                'checklist_group_id': this.addMasterChecklistQuestionForm.controls['addGroup'].value,
                'question_name': this.addMasterChecklistQuestionForm.controls['addQuestion'].value,
                'help_text': this.addMasterChecklistQuestionForm.controls['addHelpText'].value,
                'is_active': 1,
            }).subscribe(function (response) {
                _this.onClose();
            });
        }
    };
    AddMasterChecklistQuestionDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-master-checklist-question-dialog',
            template: __webpack_require__(/*! ./add-master-checklist-question-dialog.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/add-master-cheklist-question-dialog/add-master-checklist-question-dialog.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__["CommonCrudService"]]
            // MasterChecklistQuestionService,
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__["CommonCrudService"]])
    ], AddMasterChecklistQuestionDialog);
    return AddMasterChecklistQuestionDialog;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/master-checklist-question.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/master-checklist-question.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Worksheet master checklist Question Container -->\r\n<!-- Start Data Grid -->\r\n<div class=\"with-filter-grid-container\">\r\n  <!-- Start Grid Inner Header -->\r\n  <div class=\"grid-inner-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 inner-header-title\">\r\n        <button class=\"open-dialog-btn\" (click)=\"openAddEditMasterChecklistQuestionDialog()\"><i class=\"material-icons\">add</i>\r\n          Add Master Checklist Question\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"download-icon\">\r\n          <li>\r\n            <a (click)=\"onOpenFilter()\">\r\n              <span>Filter</span> <i class=\"material-icons\">filter_list</i>\r\n            </a>\r\n          </li>\r\n\r\n          <li (click)=\"downloadExcel()\">\r\n            <a>\r\n              <span>Excel</span> <i class=\"material-icons\">file_download</i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n\r\n  <!-- Start Grid Filter -->\r\n  <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilter}\">\r\n    <div class=\"filter-action-icon\">\r\n          <span class=\"filter-close\" *ngIf=\"isOpenFilter\" (click)=\"onCloseFilter()\">Esc <i\r\n            class=\"material-icons\">close</i></span>\r\n    </div>\r\n    <div class=\"grid-filter-container\">\r\n      <div class=\"filter-title\">\r\n        <h3>Advance Filter</h3>\r\n      </div>\r\n      <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <ng-select [items]=\"masterChackList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master checklist\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"changeMasterCheckList($event);\"\r\n                       formControlName=\"master_checklist_id\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <ng-select [items]=\"masterActivityData\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master Activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"getTaskData($event);\"\r\n                       formControlName=\"master_activity_id\">\r\n            </ng-select>\r\n            <!--<mat-form-field>-->\r\n            <!--<mat-select placeholder=\"Master Activity\"  formControlName=\"master_activity_id\" (selectionChange)=\"getTaskData($event)\">-->\r\n            <!--<mat-option *ngFor=\"let data of masterActivityData; let i = index;\" [value]=\"+data.id\">{{data.name}}</mat-option>-->\r\n            <!--</mat-select>-->\r\n            <!--</mat-form-field>-->\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <ng-select [items]=\"taskDataMain\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Task Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"task_id\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n            <ng-select [items]=\"groupArray\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Group Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"checklist_group_id\">\r\n            </ng-select>\r\n            <!--<mat-form-field>-->\r\n            <!--<mat-select placeholder=\"Group\" formControlName=\"groupName\" [(ngModel)]=\"groupSelectedValue\">-->\r\n            <!--<mat-option *ngFor=\"let data of groupArray; let i = index\" [value]=\"data.name\">{{data.name}}</mat-option>-->\r\n            <!--</mat-select>-->\r\n            <!--</mat-form-field>-->\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Question\" formControlName=\"question_name\"/>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Status\" formControlName=\"is_active\">\r\n                <mat-option *ngFor=\"let active of activeInactiveList.slice(1)\" [value]=\"active?.key\">\r\n                  {{ active.label }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-12 text-right\">\r\n            <button type=\"button\" class=\"btn-cancel\" (click)=\"onClearTags()\">Clear</button>\r\n            <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Filter -->\r\n\r\n  <!-- Start Filter Tags -->\r\n  <div class=\"filter-tags\">\r\n    <form [formGroup]=\"advanceFilterForm\">\r\n      <div class=\"tag\" *ngIf=\"masterChecklistId.value\">\r\n        <span class=\"tag__title\">Master Checklist :</span>\r\n        <span>\r\n          <ng-select [items]=\"masterChackList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"name\"\r\n                     placeholder=\"Master checklist\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true); changeMasterCheckList($event);\"\r\n                     formControlName=\"master_checklist_id\">\r\n            </ng-select>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('master_checklist_id')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"masterActvitiyId.value\">\r\n        <span class=\"tag__title\">Master Activity :</span>\r\n        <span>\r\n          <ng-select [items]=\"masterActivityData\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"name\"\r\n                     placeholder=\"Master Activity\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true); getTaskData($event);\"\r\n                     formControlName=\"master_activity_id\">\r\n            </ng-select>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('master_activity_id')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"taskId.value\">\r\n        <span class=\"tag__title\">Task :</span>\r\n        <span>\r\n           <ng-select [items]=\"taskDataMain\"\r\n                      [closeOnSelect]=\"true\"\r\n                      bindLabel=\"name\"\r\n                      placeholder=\"Task Name\"\r\n                      bindValue=\"id\"\r\n                      [virtualScroll]=\"true\"\r\n                      [searchable]=\"true\"\r\n                      [hideSelected]=\"true\"\r\n                      (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                      formControlName=\"task_id\">\r\n            </ng-select>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('task_id')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"checklistGroupId.value\">\r\n        <span class=\"tag__title\">Group :</span>\r\n        <span>\r\n           <ng-select [items]=\"groupArray\"\r\n                      [closeOnSelect]=\"true\"\r\n                      bindLabel=\"name\"\r\n                      placeholder=\"Group\"\r\n                      bindValue=\"id\"\r\n                      [virtualScroll]=\"true\"\r\n                      [searchable]=\"true\"\r\n                      [hideSelected]=\"true\"\r\n                      (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                      formControlName=\"checklist_group_id\">\r\n            </ng-select>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('checklist_group_id')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"question_name.value\">\r\n        <span class=\"tag__title\">Question :</span>\r\n        <span>\r\n           <mat-form-field>\r\n                <input matInput placeholder=\"Question\" formControlName=\"question_name\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n           </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('question_name')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"is_active.value\">\r\n        <span class=\"tag__title\">Status :</span>\r\n        <span>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Status\" formControlName=\"is_active\">\r\n                  <mat-option *ngFor=\"let active of activeInactiveList.slice(1)\" [value]=\"active?.key\">\r\n                    {{ active.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('is_active')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"clearAll-tags\" *ngIf=\"\r\n          masterChecklistId.value\r\n        || masterActvitiyId.value\r\n        || taskId.value\r\n        || question_name.value\r\n        || is_active.value\r\n        || checklistGroupId.value\">\r\n        <a (click)=\"onClearTags()\">Clear all</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- End Filter Tags -->\r\n\r\n  <!-- Start Table -->\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"3%\">Sr. No</th>\r\n\r\n          <th width=\"20%\" (click)=\"getSortData('checklistName',\r\n            (sortBy === 'checklistName') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Master Checklist\r\n            <i *ngIf=\"sortBy === 'checklistName'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'checklistName'),\r\n                 'icon-up' : ((sortBy === 'checklistName') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'checklistName') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n\r\n          <th width=\"15%\" (click)=\"getSortData('activityName',\r\n          (sortBy === 'activityName') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Master Activity\r\n            <i *ngIf=\"sortBy === 'activityName'\" [ngClass]=\"{'material-icons': true,\r\n              'active' : (sortBy === 'activityName'),\r\n               'icon-up' : ((sortBy === 'activityName') && (sortOrder === 'asc')),\r\n               'icon-down' : true}\">\r\n              {{(sortBy === 'activityName') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"14%\" (click)=\"getSortData('taskName',\r\n          (sortBy === 'taskName') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Task\r\n            <i *ngIf=\"sortBy === 'taskName'\" [ngClass]=\"{'material-icons': true,\r\n              'active' : (sortBy === 'taskName'),\r\n               'icon-up' : ((sortBy === 'taskName') && (sortOrder === 'asc')),\r\n               'icon-down' : true}\">\r\n              {{(sortBy === 'taskName') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"8%\" (click)=\"getSortData('groupName',\r\n           (sortBy === 'groupName') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Group\r\n            <i *ngIf=\"sortBy === 'groupName'\" [ngClass]=\"{'material-icons': true,\r\n               'active' : (sortBy === 'groupName'),\r\n                'icon-up' : ((sortBy === 'groupName') && (sortOrder === 'asc')),\r\n                'icon-down' : true}\">\r\n              {{(sortBy === 'groupName') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"22%\" (click)=\"getSortData('question_name',\r\n          (sortBy === 'question_name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Question\r\n            <i *ngIf=\"sortBy === 'question_name'\" [ngClass]=\"{'material-icons': true,\r\n              'active' : (sortBy === 'question_name'),\r\n               'icon-up' : ((sortBy === 'question_name') && (sortOrder === 'asc')),\r\n               'icon-down' : true}\">\r\n              {{(sortBy === 'question_name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"10%\" (click)=\"getSortData('created_by',\r\n          (sortBy === 'created_by') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Created By\r\n            <i *ngIf=\"sortBy === 'created_by'\" [ngClass]=\"{'material-icons': true,\r\n              'active' : (sortBy === 'created_by'),\r\n               'icon-up' : ((sortBy === 'created_by') && (sortOrder === 'asc')),\r\n               'icon-down' : true}\">\r\n              {{(sortBy === 'created_by') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"8%\">Action</th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody>\r\n          <tr *ngFor=\"let masterchecklist of masterCheckList; let i = index\">\r\n            <td width=\"3%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n            <td width=\"20%\">{{masterchecklist?.checklistName}}</td>\r\n            <td width=\"15%\">{{masterchecklist?.activityName}}</td>\r\n            <td width=\"14%\">{{masterchecklist?.taskName}}</td>\r\n            <td width=\"8%\">{{masterchecklist?.groupName}}</td>\r\n            <td width=\"22%\" style=\"word-break: break-word\">{{masterchecklist?.question_name}}</td>\r\n            <td width=\"10%\">{{masterchecklist?.created_by?.userfullname}} | {{masterchecklist?.created_on | date\r\n              :'dd-MM-yyyy'}}\r\n            </td>\r\n            <td width=\"8%\">\r\n              <mat-icon class=\"turquoise-color\" *ngIf=\"masterchecklist.help_text\"\r\n                        [matTooltip]=\"masterchecklist.help_text\">info\r\n              </mat-icon>\r\n              <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Edit'\"\r\n                        (click)=\"openAddEditMasterChecklistQuestionDialog(masterchecklist)\">edit\r\n              </mat-icon>\r\n              <mat-slide-toggle [matTooltip]=\"slideData[i] ? 'Inactive': 'Active'\" [(ngModel)]=\"slideData[i]\"\r\n                                (change)=\"onDisabledConfirmDialog($event, masterchecklist, i)\"></mat-slide-toggle>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <table *ngIf=\"masterCheckList.length\">\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"10\">\r\n            <mat-paginator [length]=\"totalRecords\"\r\n                           [pageSize]=\"pageSize\"\r\n                           [pageIndex]=\"pageIndex\"\r\n                           [pageSizeOptions]=\"pageArray\"\r\n                           (page)=\"onPageChange($event)\">\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <!-- End Table -->\r\n  <div *ngIf=\"!masterCheckList.length\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n</div>\r\n<!-- End Data Grid -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/master-checklist-question.component.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/master-checklist-question.component.scss ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vd29ya3NoZWV0LW1hc3Rlci1jaGVja2xpc3QvbWFzdGVyLWNoZWNrbGlzdC1xdWVzdGlvbi9tYXN0ZXItY2hlY2tsaXN0LXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/master-checklist-question.component.ts":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/master-checklist-question.component.ts ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: MasterChecklistQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterChecklistQuestionComponent", function() { return MasterChecklistQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _add_master_cheklist_question_dialog_add_master_checklist_question_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-master-cheklist-question-dialog/add-master-checklist-question-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/add-master-cheklist-question-dialog/add-master-checklist-question-dialog.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MasterChecklistQuestionComponent = /** @class */ (function () {
    function MasterChecklistQuestionComponent(_fb, dialog, _commonCrudService, _sharedObjService) {
        this._fb = _fb;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        // Constant Variables
        // Data Variables
        this.masterCheckList = [];
        this.tagList = [];
        this.masterChackList = [];
        this.masterActivityData = [];
        this.taskData = [];
        this.taskDataMain = [];
        this.groupArray = [];
        this.objectData = [];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilter = false;
        this.isOpenHistoryDialog = false;
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.slideData = [];
        // userList: Observable<Clients[]>;
        this.userList = [];
        this.userListAll = [];
        this.userListLoading = false;
        this.userListinput = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.activeInactiveList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["activeInactive"];
    }
    Object.defineProperty(MasterChecklistQuestionComponent.prototype, "masterChecklistId", {
        get: function () {
            return this.filterForm.get('master_checklist_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterChecklistQuestionComponent.prototype, "masterActvitiyId", {
        get: function () {
            return this.filterForm.get('master_activity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterChecklistQuestionComponent.prototype, "taskId", {
        get: function () {
            return this.filterForm.get('task_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterChecklistQuestionComponent.prototype, "checklistGroupId", {
        get: function () {
            return this.filterForm.get('checklist_group_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterChecklistQuestionComponent.prototype, "question_name", {
        get: function () {
            return this.filterForm.get('question_name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterChecklistQuestionComponent.prototype, "is_active", {
        get: function () {
            return this.filterForm.get('is_active');
        },
        enumerable: true,
        configurable: true
    });
    MasterChecklistQuestionComponent.prototype.ngOnInit = function () {
        this.initializationMethod();
        this.getQuestionList(1, '', 'desc');
        this.getData();
        this.getTaskAndMasterActivity();
        this.changeMasterCheckList({ id: '' }, 'init');
        this.getUserList();
    };
    MasterChecklistQuestionComponent.prototype.getQuestionList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].MASTER_CHECKLIST_QUESTION, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleQualityControlResponse(response);
        });
    };
    MasterChecklistQuestionComponent.prototype.handleQualityControlResponse = function (response) {
        this.masterCheckList = response.payload.data;
        for (var i = 0; i < this.masterCheckList.length; i++) {
            this.slideData[i] = (this.masterCheckList[i]['is_active'] === 1) ? true : false;
        }
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    MasterChecklistQuestionComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
     * advance filter search operation
     * @returns {{}}
     */
    MasterChecklistQuestionComponent.prototype.getSearchParam = function () {
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
    /**
     * Initialization Methods
     */
    MasterChecklistQuestionComponent.prototype.initializationMethod = function () {
        this.createMasterChecklistForm();
        this.createFilterMasterChecklistForm();
    };
    /**
     * Create filter Master checklist Question
     */
    MasterChecklistQuestionComponent.prototype.createMasterChecklistForm = function () {
        this.filterForm = this._fb.group({
            master_checklist_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            checklist_group_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            question_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            master_checklist_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            checklist_group_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            question_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    /**
     * Create filter Master checklist Question
     */
    MasterChecklistQuestionComponent.prototype.createFilterMasterChecklistForm = function () {
        // this.filterMasterChecklistQuestionForm = this._fb.group({
        //   checklistName: new FormControl(''),
        //   activityName: new FormControl(''),
        //   taskName: new FormControl(''),
        //   groupName: new FormControl(''),
        //   question_name: new FormControl(''),
        //   is_active: new FormControl(''),
        //   created_on: new FormControl(''),
        //   created_by: new FormControl('')
        // });
    };
    /**
     * Add Edit Master CheckList Dialog
     */
    MasterChecklistQuestionComponent.prototype.openAddEditMasterChecklistQuestionDialog = function (masterchecklist) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_master_cheklist_question_dialog_add_master_checklist_question_dialog__WEBPACK_IMPORTED_MODULE_7__["AddMasterChecklistQuestionDialog"], {
            panelClass: 'add-form-dialog-container',
            data: {
                'masterData': masterchecklist
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getQuestionList(1, '', 'desc');
        });
    };
    /**
     *  Toggle confirmation Dialog
     */
    MasterChecklistQuestionComponent.prototype.onDisabledConfirmDialog = function (event, masterchecklist, id) {
        var _this = this;
        var status = event.checked ? 'Inactive' : 'Active';
        var statusNagetive = !event.checked ? 'Inactive' : 'Active';
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"], {
            data: {
                content: 'Do you want change status from ' + status + ' to ' + statusNagetive
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].MASTER_CHECKLIST_UPDATE_DATA, masterchecklist['id'], {
                    'is_active': (event.checked === true) ? '1' : '0',
                    '_method': 'put'
                }).subscribe(function (response) {
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
    MasterChecklistQuestionComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].MASTER_CHECKLIST_QUESTION_DOWNLOAD, params, this.getSearchParam(), 'Master Checklist Questions', 0).subscribe(function (response) {
        });
    };
    /**
     * Open filter method
     */
    MasterChecklistQuestionComponent.prototype.onOpenFilter = function () {
        this.isOpenFilter = true;
    };
    MasterChecklistQuestionComponent.prototype.deleteMsg = function (index) {
        this.tagList.splice(index, 1);
    };
    /**
     * Close filter method
     */
    MasterChecklistQuestionComponent.prototype.onCloseFilter = function () {
        this.isOpenFilter = false;
    };
    /**
     * Pagination page change event
     * @param event
     */
    MasterChecklistQuestionComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getQuestionList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    MasterChecklistQuestionComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getQuestionList(1, sortKey, sortVal);
    };
    /**
     * Clear tag method
     */
    MasterChecklistQuestionComponent.prototype.onClearTags = function () {
        this.createMasterChecklistForm();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.isOpenFilter = false;
        this.getQuestionList(1, '', 'desc');
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    MasterChecklistQuestionComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'is_active' || elementName === 'master_checklist_id' || elementName === 'task_id' || elementName === 'checklist_group_id' || elementName === 'master_activity_id') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'question_name') {
            delete this.likeJSON[elementName];
        }
        this.getQuestionList(1, '', 'desc');
    };
    /**
     * Esc event for close modal
     * @param event
     */
    MasterChecklistQuestionComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilter = false;
        }
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    MasterChecklistQuestionComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'master_checklist_id': form.value['master_checklist_id'],
                'master_activity_id': form.value['master_activity_id'],
                'checklist_group_id': form.value['checklist_group_id'],
                'task_id': form.value['task_id'],
                'question_name': form.value['question_name'],
                'is_active': form.value['is_active']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    MasterChecklistQuestionComponent.prototype.setAdvanceFilter = function (form, flag) {
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
                    this.advanceFilterForm.get(key).setValue(form.value[key]);
                }
            }
        }
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'is_active' || key === 'master_checklist_id' || key === 'master_activity_id' || key === 'checklist_group_id' || key === 'task_id') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'question_name') {
                        this.likeJSON[key] = form.value[key];
                    }
                }
            }
            this.isOpenFilter = false;
            this.getQuestionList(1, '', 'desc');
        }
    };
    /**
     * Get User List
     */
    MasterChecklistQuestionComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.userList = response;
        });
    };
    MasterChecklistQuestionComponent.prototype.getData = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].MASTER_CHECKLIST_LISTEING, { 'records': 'all' }, {}).subscribe(function (response) {
            var mapData = response.payload.data;
            _this.masterChackList = [];
            mapData.filter(function (mapRes) {
                if (mapRes.name) {
                    _this.masterChackList.push({ id: mapRes.id, name: mapRes.name });
                }
            });
        });
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].GET_MASTER_CHECKLIST_GROUP, { 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.groupArray = response.payload.data;
        });
    };
    MasterChecklistQuestionComponent.prototype.changeMasterCheckList = function (event, init) {
        if (event) {
            // this._commonCrudService.listData(AdminAPI.GET_MASTER_CHECKLIST_GROUP, {'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe(response => {
            //   this.groupArray = response.payload.data;
            // });
        }
    };
    MasterChecklistQuestionComponent.prototype.getTaskData = function (event) {
        var masterActivityId = event.id;
        this.taskDataMain = [];
        for (var j = 0; j < this.taskData.length; j++) {
            if (this.taskData[j].masterId === +masterActivityId) {
                this.taskDataMain.push({ masterId: this.taskData[j].masterId, id: this.taskData[j].id, name: this.taskData[j].name });
            }
        }
    };
    MasterChecklistQuestionComponent.prototype.getTaskAndMasterActivity = function () {
        var _this = this;
        // this._masterCheckListService.getMasterCheckListAndTaskData('').subscribe(response => {
        //     this.responseHandle(response);
        // });
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(function (response) {
            _this.responseHandle(response);
        });
    };
    MasterChecklistQuestionComponent.prototype.responseHandle = function (data) {
        var _this = this;
        var masterData = [];
        var taskDataRef = [];
        for (var i in data.payload.data.masterActivity) {
            if (i) {
                masterData.push({ id: i, name: data.payload.data.masterActivity[i] });
            }
        }
        for (var i in data.payload.data.task) {
            if (i) {
                for (var j = 0; j < data.payload.data.task[i].length; j++) {
                    taskDataRef.push({
                        id: data.payload.data.task[i][j].id,
                        masterId: data.payload.data.task[i][j].master_activity_id,
                        name: data.payload.data.task[i][j].name
                    });
                }
            }
        }
        setTimeout(function (res) {
            _this.masterActivityData = masterData;
            _this.taskData = taskDataRef;
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MasterChecklistQuestionComponent.prototype, "onKeydownHandler", null);
    MasterChecklistQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-master-checklist-question',
            template: __webpack_require__(/*! ./master-checklist-question.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/master-checklist-question.component.html"),
            styles: [__webpack_require__(/*! ./master-checklist-question.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/master-checklist-question.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_4__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__["SharedObjService"]])
    ], MasterChecklistQuestionComponent);
    return MasterChecklistQuestionComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/add-master-checklist-dialog/add-master-checklist-dialog.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/add-master-checklist-dialog/add-master-checklist-dialog.html ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Add Master Checklist dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{data.edit_data ? 'Update' : 'Add'}} Master Checklist</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addMasterCheklistForm\" (submit)=\"onSubmitAddMasterChecklistForm(addMasterCheklistForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Master Checklist\" formControlName=\"addMasterChecklist\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addMasterCheklistForm.get('addMasterChecklist'))\"\r\n                            [errMsg]=\"validationMsg.MASTER_CHECKLIST_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addMasterCheklistForm.get('addMasterChecklist'))\"\r\n                            [errMsg]=\"validationMsg.MASTER_CHECKLIST_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <!--<ng-select [items]=\"masterActivityData\"-->\r\n          <!--[closeOnSelect]=\"true\"-->\r\n          <!--bindLabel=\"name\"-->\r\n          <!--placeholder=\"Master Activity\"-->\r\n          <!--bindValue=\"id\"-->\r\n          <!--[virtualScroll]=\"true\"-->\r\n          <!--[searchable]=\"true\"-->\r\n          <!--[hideSelected]=\"true\"-->\r\n          <!--(change)=\"getTaskData($event);\"-->\r\n          <!--formControlName=\"addMasterActivity\">-->\r\n          <!--</ng-select>-->\r\n          <!-- <mat-form-field>\r\n             <mat-select placeholder=\"Master Activity\" formControlName=\"addMasterActivity\"\r\n                         (selectionChange)=\"getTaskData($event)\" [(ngModel)]='selectBoxData' required>\r\n               <mat-option *ngFor=\"let data of masterActivityData; let i = index;\" [value]=\"+data.id\">{{data.name}}\r\n               </mat-option>\r\n             </mat-select>\r\n           </mat-form-field>-->\r\n          <ng-select [items]=\"masterActivityData\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"name\"\r\n                     placeholder=\"Master Activity\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"getTaskData($event)\"\r\n                     formControlName=\"addMasterActivity\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addMasterCheklistForm.get('addMasterActivity'))\"\r\n                            [errMsg]=\"validationMsg.MASTER_ACTIVITY_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12  MT-10\">\r\n          <ng-select [items]=\"taskDataMain\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"name\"\r\n                     placeholder=\"Task\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"addTask\">\r\n          </ng-select>\r\n          <!--<mat-form-field>-->\r\n          <!--<mat-select placeholder=\"Task\" formControlName=\"addTask\" [(ngModel)]=\"taskIdData\" required>-->\r\n          <!--<mat-option *ngFor=\"let data of taskDataMain\" [value]=\"data.id\">{{data.name}}</mat-option>-->\r\n          <!--</mat-select>-->\r\n          <!--</mat-form-field>-->\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addMasterCheklistForm.get('addTask'))\"\r\n                            [errMsg]=\"validationMsg.TASK_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal__footer\" *ngIf=\"data.edit_data\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\" (click)=\"updateFunction()\">\r\n          <button class=\"btn-primary\" [disabled]=\"addMasterCheklistForm.invalid\">Update</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal__footer\" *ngIf=\"!data.edit_data\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\" (click)=\"addFunction()\">\r\n          <button class=\"btn-primary\" [disabled]=\"addMasterCheklistForm.invalid\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change InOut Time dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/add-master-checklist-dialog/add-master-checklist-dialog.ts":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/add-master-checklist-dialog/add-master-checklist-dialog.ts ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: AddMasterChecklistDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMasterChecklistDialog", function() { return AddMasterChecklistDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
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



// import { MasterChecklistService } from '../master-checklist.service';




var AddMasterChecklistDialog = /** @class */ (function (_super) {
    __extends(AddMasterChecklistDialog, _super);
    function AddMasterChecklistDialog(_fb, dialogRef, data, _commonCrudService) {
        var _this = 
        // public _masterCheckListService: MasterChecklistService,
        _super.call(this) || this;
        _this._fb = _fb;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_5__["ValidationConstantMessage"]();
        // data variables
        _this.taskData = [];
        _this.masterActivityData = [];
        _this.taskDataMain = [];
        return _this;
    }
    AddMasterChecklistDialog.prototype.ngOnInit = function () {
        this.getTaskAndMasterActivity();
        this.createAddMasterChecklistForm();
    };
    /**
     * Create add checklist group Form
     */
    AddMasterChecklistDialog.prototype.createAddMasterChecklistForm = function () {
        if (this.data.edit_data) {
            this.addMasterCheklistForm = this._fb.group({
                addMasterChecklist: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data ? this.data.edit_data.name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_5__["CommonRegex"].NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
                addMasterActivity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data ? this.data.edit_data.master_activity_id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                addTask: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data ? this.data.edit_data.task_id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
        }
        else {
            this.addMasterCheklistForm = this._fb.group({
                addMasterChecklist: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_5__["CommonRegex"].NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
                addMasterActivity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                addTask: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
        }
    };
    AddMasterChecklistDialog.prototype.onSubmitAddMasterChecklistForm = function (form) {
        // 111111111111
        // if (form.valid) {
        //     this._masterCheckListService.updateMasterCheckListData(data.id, { "name": '0', 'master_activity_id': '', 'task_id': '', '_method': 'put' }).subscribe(response => {
        //     });
        //     this.onClose();
        // }
    };
    AddMasterChecklistDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    AddMasterChecklistDialog.prototype.getTaskAndMasterActivity = function () {
        // this._masterCheckListService.getMasterCheckListAndTaskData('').subscribe(response => {
        //     this.responseHandle(response);
        // });
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_3__["AdminAPI"].MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(function (response) {
            _this.responseHandle(response);
        });
    };
    AddMasterChecklistDialog.prototype.responseHandle = function (data) {
        var _this = this;
        var masterData = [];
        var taskDataRef = [];
        for (var i in data.payload.data.masterActivity) {
            if (i) {
                masterData.push({ id: i, name: data.payload.data.masterActivity[i] });
            }
        }
        for (var i in data.payload.data.task) {
            if (i) {
                for (var j = 0; j < data.payload.data.task[i].length; j++) {
                    taskDataRef.push({
                        id: data.payload.data.task[i][j].id,
                        masterId: data.payload.data.task[i][j].master_activity_id,
                        name: data.payload.data.task[i][j].name
                    });
                }
            }
        }
        if (this.data.edit_data && this.data.edit_data.master_activity_id.id) {
            this.selectBoxData = (this.data.edit_data.master_activity_id) ? this.data.edit_data.master_activity_id.id : 0;
            this.taskIdData = (this.data.edit_data.task_id) ? this.data.edit_data.task_id.id : 0;
        }
        setTimeout(function (res) {
            _this.masterActivityData = masterData;
            _this.taskData = taskDataRef;
            if (_this.data.edit_data) {
                _this.getTaskData({ value: _this.selectBoxData });
            }
        }, 500);
    };
    AddMasterChecklistDialog.prototype.getTaskData = function (event) {
        // console.log(event);
        var masterActivityId = event.id;
        this.taskDataMain = [];
        for (var j = 0; j < this.taskData.length; j++) {
            if (this.taskData[j].masterId === +masterActivityId) {
                this.taskDataMain.push({
                    masterId: this.taskData[j].masterId,
                    id: this.taskData[j].id,
                    name: this.taskData[j].name
                });
            }
        }
        // console.log(this.taskDataMain);
    };
    AddMasterChecklistDialog.prototype.updateFunction = function () {
        var _this = this;
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_3__["AdminAPI"].UPDATE_MASTER_CHECKLIST_DATA, this.data.edit_data.id, {
            'name': this.addMasterCheklistForm.controls['addMasterChecklist'].value,
            'master_activity_id': this.addMasterCheklistForm.controls['addMasterActivity'].value,
            'task_id': this.addMasterCheklistForm.controls['addTask'].value,
            '_method': 'put'
        }).subscribe(function (response) {
            _this.onClose();
        });
    };
    AddMasterChecklistDialog.prototype.addFunction = function () {
        // this._masterCheckListService.addMasterCheckListData({
        //     'name': this.addMasterCheklistForm.controls['addMasterChecklist'].value,
        //     'master_activity_id': this.addMasterCheklistForm.controls['addMasterActivity'].value,
        //     'task_id': this.addMasterCheklistForm.controls['addTask'].value,
        //     'is_active': 1
        // }).subscribe(response => {
        //     this.onClose();
        // });
        // return this._apiManager.post(AdminAPI.SAVE_MASTER_CHECKLIST_DATA, params, this._apiManager.HttpOptions, true, true);
        var _this = this;
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_3__["AdminAPI"].SAVE_MASTER_CHECKLIST_DATA, {
            'name': this.addMasterCheklistForm.controls['addMasterChecklist'].value,
            'master_activity_id': this.addMasterCheklistForm.controls['addMasterActivity'].value,
            'task_id': this.addMasterCheklistForm.controls['addTask'].value,
            'is_active': 1
        }).subscribe(function (response) {
            _this.onClose();
        });
    };
    AddMasterChecklistDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-master-checklist-dialog',
            template: __webpack_require__(/*! ./add-master-checklist-dialog.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/add-master-checklist-dialog/add-master-checklist-dialog.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_4__["CommonCrudService"]]
            // MasterChecklistService
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_4__["CommonCrudService"]])
    ], AddMasterChecklistDialog);
    return AddMasterChecklistDialog;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/master-checklist.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/master-checklist.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Worksheet master checklist Container -->\r\n<!-- Start Data Grid -->\r\n<div class=\"with-filter-grid-container\">\r\n  <!-- Start Grid Inner Header -->\r\n  <div class=\"grid-inner-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 inner-header-title\">\r\n        <button class=\"open-dialog-btn\" (click)=\"openAddEditMasterChecklistDialog()\"><i class=\"material-icons\">add</i>\r\n          Add Master Checklist\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"download-icon\">\r\n          <li>\r\n            <a (click)=\"onOpenFilter()\">\r\n              <span>Filter</span> <i class=\"material-icons\">filter_list</i>\r\n            </a>\r\n          </li>\r\n\r\n          <li (click)=\"downloadExcel()\">\r\n            <a>\r\n              <span>Excel</span> <i class=\"material-icons\">file_download</i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n\r\n  <!-- Start Grid Filter -->\r\n  <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilter}\">\r\n    <div class=\"filter-action-icon\">\r\n          <span class=\"filter-close\" *ngIf=\"isOpenFilter\" (click)=\"onCloseFilter()\">Esc <i\r\n            class=\"material-icons\">close</i></span>\r\n    </div>\r\n    <div class=\"grid-filter-container\">\r\n      <div class=\"filter-title\">\r\n        <h3>Advance Filter</h3>\r\n      </div>\r\n      <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Checklist name\" formControlName=\"name\"/>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <ng-select [items]=\"masterActivityData\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master Activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"getTaskData($event)\"\r\n                       formControlName=\"master_activity_id\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <ng-select [items]=\"taskDataMain\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Task Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"task_id\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Status\" formControlName=\"is_active\">\r\n                <mat-option *ngFor=\"let active of activeInactiveList.slice(1)\" [value]=\"active?.key\">\r\n                  {{ active.label }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"createddate\" placeholder=\"Created date\" formControlName=\"created_on\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"createddate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #createddate></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n\r\n            <ng-select [items]=\"userList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Created By\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"created_by\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-12 MT-20 text-right\">\r\n            <button type=\"button\" class=\"btn-cancel\" (click)=\"onClearTags()\">Clear</button>\r\n            <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Filter -->\r\n\r\n  <!-- Start Filter Tags -->\r\n  <div class=\"filter-tags\">\r\n    <form [formGroup]=\"advanceFilterForm\">\r\n      <div class=\"tag\" *ngIf=\"name.value\">\r\n        <span class=\"tag__title\">Master Checklist :</span>\r\n        <span>\r\n           <mat-form-field>\r\n                <input matInput placeholder=\"Checklist name\" formControlName=\"name\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n              </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('name')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"master_activity_id.value\">\r\n        <span class=\"tag__title\">Master Activity :</span>\r\n        <span>\r\n            <ng-select [items]=\"masterActivityData\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master Activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true); getTaskData($event)\"\r\n                       formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('master_activity_id')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"task_id.value\">\r\n        <span class=\"tag__title\">Task :</span>\r\n        <span>\r\n            <ng-select [items]=\"taskDataMain\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Task Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);\"\r\n                       formControlName=\"task_id\">\r\n              </ng-select>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('task_id')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"is_active.value\">\r\n        <span class=\"tag__title\">Status :</span>\r\n        <span>\r\n             <mat-form-field>\r\n               <mat-select placeholder=\"Status\" formControlName=\"is_active\">\r\n                  <mat-option *ngFor=\"let active of activeInactiveList.slice(1)\" [value]=\"active?.key\"\r\n                              (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                    {{ active.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('is_active')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"created_on.value\">\r\n        <span class=\"tag__title\">Created On:</span>\r\n        <span>\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"createdby1\" placeholder=\"Date\" formControlName=\"created_on\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"createdby1\"></mat-datepicker-toggle>\r\n                <mat-datepicker #createdby1></mat-datepicker>\r\n              </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('created_on')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"created_by.value\">\r\n        <span class=\"tag__title\">Created By : </span>\r\n        <span>\r\n\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Created By\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"created_by\">\r\n   </ng-select>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('created_by')\">close</i>\r\n      </div>\r\n\r\n      <!-- name.value\r\n      || master_activity_id.value\r\n      || task_id.value\r\n      || is_active.value\r\n      || created_on.value\r\n      || created_by.value -->\r\n\r\n      <div class=\"clearAll-tags\" *ngIf=\"name.value\r\n        || master_activity_id.value\r\n        || task_id.value\r\n        || is_active.value\r\n        || created_on.value\r\n        || created_by.value\">\r\n        <a (click)=\"onClearTags()\">Clear all</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- End Filter Tags -->\r\n\r\n  <!-- Start Table -->\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"5%\">Sr. No</th>\r\n\r\n          <th width=\"25%\" (click)=\"getSortData('name',\r\n            (sortBy === 'name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Master Checklist\r\n            <i *ngIf=\"sortBy === 'name'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'name'),\r\n                 'icon-up' : ((sortBy === 'name') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n\r\n          <th width=\"12%\" (click)=\"getSortData('master_activity_id',\r\n            (sortBy === 'master_activity_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Master Activity\r\n            <i *ngIf=\"sortBy === 'master_activity_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'master_activity_id'),\r\n                 'icon-up' : ((sortBy === 'master_activity_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'master_activity_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n\r\n          <th width=\"25%\" (click)=\"getSortData('task_id',\r\n            (sortBy === 'task_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Task\r\n            <i *ngIf=\"sortBy === 'task_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'task_id'),\r\n                 'icon-up' : ((sortBy === 'task_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'task_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"25%\" (click)=\"getSortData('created_by',\r\n            (sortBy === 'created_by') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Created By\r\n            <i *ngIf=\"sortBy === 'created_by'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'created_by'),\r\n                 'icon-up' : ((sortBy === 'created_by') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'created_by') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"8%\">Action</th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody>\r\n          <tr *ngFor=\"let data of masterCheckList; let i = index\">\r\n            <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n            <td width=\"25%\">{{data?.name}}</td>\r\n            <td width=\"12%\">\r\n              <mat-icon class=\"grid_icon_trip_origin turquoise-color\">trip_origin</mat-icon>\r\n              {{data?.master_activity_id?.name}}\r\n            </td>\r\n            <td width=\"25%\">{{data?.task_id?.name}}</td>\r\n            <td width=\"25%\">{{data?.created_by?.userfullname}} | {{data?.created_on | date : 'dd-MM-yyyy'}}</td>\r\n            <td width=\"8%\">\r\n              <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Edit'\"\r\n                        (click)=\"openAddEditMasterChecklistDialog(data)\">edit\r\n              </mat-icon>\r\n              <mat-slide-toggle [matTooltip]=\"slideData[i] ? 'Inactive' : 'Active'\" [(ngModel)]=\"slideData[i]\"\r\n                                (click)=\"openToggleConfirmationDialog($event, data, i)\"></mat-slide-toggle>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <table *ngIf=\"masterCheckList.length\">\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"10\">\r\n            <mat-paginator [length]=\"totalRecords\"\r\n                           [pageSize]=\"pageSize\"\r\n                           [pageIndex]=\"pageIndex\"\r\n                           [pageSizeOptions]=\"pageArray\"\r\n                           (page)=\"onPageChange($event)\">\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <!-- End Table -->\r\n  <div *ngIf=\"!masterCheckList.length\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n</div>\r\n<!-- End Data Grid -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/master-checklist.component.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/master-checklist.component.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vd29ya3NoZWV0LW1hc3Rlci1jaGVja2xpc3QvbWFzdGVyLWNoZWNrbGlzdC9tYXN0ZXItY2hlY2tsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/master-checklist.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/master-checklist.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: MasterChecklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterChecklistComponent", function() { return MasterChecklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _add_master_checklist_dialog_add_master_checklist_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-master-checklist-dialog/add-master-checklist-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/add-master-checklist-dialog/add-master-checklist-dialog.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { MasterChecklistService } from './master-checklist.service';





var MasterChecklistComponent = /** @class */ (function () {
    function MasterChecklistComponent(_fb, dialog, _sharedObjService, _commonCrudService) {
        this._fb = _fb;
        this.dialog = dialog;
        this._sharedObjService = _sharedObjService;
        this._commonCrudService = _commonCrudService;
        // Constant Variables
        // Data Variables
        this.masterCheckList = [];
        this.tagList = [];
        this.data = [];
        this.taskData = [];
        this.masterActivityData = [];
        this.taskDataMain = [];
        this.activeInactiveList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["activeInactive"];
        this.userList = [];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["BASE"].PAGINATION_ARRAY[1];
        this.slideData = [];
        // search param
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        // Other Variables
        this.isOpenFilter = false;
        this.isOpenHistoryDialog = false;
    }
    Object.defineProperty(MasterChecklistComponent.prototype, "name", {
        get: function () {
            return this.filterForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterChecklistComponent.prototype, "master_activity_id", {
        get: function () {
            return this.filterForm.get('master_activity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterChecklistComponent.prototype, "task_id", {
        get: function () {
            return this.filterForm.get('task_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterChecklistComponent.prototype, "is_active", {
        get: function () {
            return this.filterForm.get('is_active');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterChecklistComponent.prototype, "created_on", {
        get: function () {
            return this.filterForm.get('created_on');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterChecklistComponent.prototype, "created_by", {
        get: function () {
            return this.filterForm.get('created_by');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    MasterChecklistComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue('');
        this.advanceFilterForm.get(elementName).setValue('');
        if (elementName === 'is_active' || elementName === 'master_activity_id' || elementName === 'task_id' || elementName === 'created_on' || elementName === 'created_by') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'name') {
            delete this.likeJSON[elementName];
        }
        this.getMasterCheckList(1, '', 'desc');
    };
    MasterChecklistComponent.prototype.ngOnInit = function () {
        this.getMasterCheckList(1, '', 'desc');
        this.createMasterChecklistForm();
        this.createFilterMasterChecklistForm();
        this.initializationMethod();
        this.createAdvanceFilterForm();
        this.getTaskAndMasterActivity();
        this.getUserList();
    };
    MasterChecklistComponent.prototype.getMasterCheckList = function (pageNumber, key, val) {
        // this._masterCheckListService.listMasterCheckList(this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(response => {
        //   this.handleQualityControlResponse(response);
        // });
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].MASTER_CHECKLIST_LISTEING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleQualityControlResponse(response);
        });
    };
    MasterChecklistComponent.prototype.handleQualityControlResponse = function (response) {
        this.masterCheckList = response.payload.data;
        for (var i = 0; i < this.masterCheckList.length; i++) {
            this.slideData[i] = (this.masterCheckList[i].is_active === 1) ? true : false;
        }
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{pageNumber: number; recordsPerPage: number}}
     */
    MasterChecklistComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
     * advance filter search operation
     * @returns {{}}
     */
    MasterChecklistComponent.prototype.getSearchParam = function () {
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
    /**
     * Download Excel file
     */
    MasterChecklistComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        // this._masterCheckListService.downloadExcel(params, '').subscribe(response => {
        // });
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].MASTER_CHECKLIST_EXCEL_DOWNLOAD, params, this.getSearchParam(), 'master-checklist', 0).subscribe(function (response) {
        });
    };
    /**
     * Create filter Master checklist
     */
    MasterChecklistComponent.prototype.createMasterChecklistForm = function () {
        this.masterCheklistFilterForm = this._fb.group({
            masterCheklistFilterForm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            created_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            created_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    /**
     * Create filter Master checklist
     */
    MasterChecklistComponent.prototype.createFilterMasterChecklistForm = function () {
        this.filterMasterChecklistForm = this._fb.group({
            filterMasterChecklistForm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            created_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            created_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    /*  onSubmitEmployeeForm(form: FormGroup) {
        if (form.valid) {
        }
      }*/
    /**
     * Initialization Methods
     */
    MasterChecklistComponent.prototype.initializationMethod = function () {
    };
    /**
     * Add Edit Master CheckList Dialog
     */
    MasterChecklistComponent.prototype.openAddEditMasterChecklistDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_master_checklist_dialog_add_master_checklist_dialog__WEBPACK_IMPORTED_MODULE_5__["AddMasterChecklistDialog"], {
            panelClass: 'add-form-dialog-container',
            data: {
                'edit_data': data
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getMasterCheckList(1, '', 'desc');
        });
    };
    /**
     *  Toggle confirmation Dialog
     */
    MasterChecklistComponent.prototype.openToggleConfirmationDialog = function (event, data, id) {
        var _this = this;
        var status = event.checked ? 'Inactive' : 'Active';
        var statusNagetive = !event.checked ? 'Inactive' : 'Active';
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"], {
            data: {
                content: 'Do you want change status from ' + status + ' to ' + statusNagetive
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                // this._masterCheckListService.updateMasterCheckListData(data['id'],
                //  { "is_active": (this.slideData[id] === true) ? '1' : '0', '_method': 'put' }).subscribe(response => {
                // });
                _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].UPDATE_MASTER_CHECKLIST_DATA, data['id'], {
                    'is_active': (_this.slideData[id] === true) ? '1' : '0', '_method': 'put'
                }).subscribe(function (response) {
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
     * Open filter method
     */
    MasterChecklistComponent.prototype.onOpenFilter = function () {
        this.isOpenFilter = true;
    };
    MasterChecklistComponent.prototype.deleteMsg = function (index) {
        this.tagList.splice(index, 1);
    };
    /**
     * Close filter method
     */
    MasterChecklistComponent.prototype.onCloseFilter = function () {
        this.isOpenFilter = false;
    };
    /**
     * Pagination page change event
     * @param event
     */
    MasterChecklistComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getMasterCheckList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Clear tag method
     */
    MasterChecklistComponent.prototype.onClearTags = function () {
        this.createAdvanceFilterForm();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.isOpenFilter = false;
        this.getMasterCheckList(1, '', 'desc');
    };
    /**
     * Create a filter form
     */
    MasterChecklistComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            created_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            created_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        });
        this.advanceFilterForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            created_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            created_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    MasterChecklistComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'name': form.value['name'],
                'master_activity_id': form.value['master_activity_id'],
                'task_id': form.value['task_id'],
                'is_active': form.value['is_active'],
                'created_on': form.value['created_on'],
                'created_by': form.value['created_by'],
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    MasterChecklistComponent.prototype.setAdvanceFilter = function (form, flag) {
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
                    this.advanceFilterForm.get(key).setValue(form.value[key]);
                }
            }
        }
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'is_active' || key === 'master_activity_id' || key === 'task_id' || key === 'created_on' || key === 'created_by') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'name') {
                        this.likeJSON[key] = form.value[key];
                    }
                }
            }
            this.isOpenFilter = false;
            this.getMasterCheckList(1, '', 'desc');
        }
    };
    /**
     * Esc event for close modal
     * @param event
     */
    MasterChecklistComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilter = false;
        }
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    MasterChecklistComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getMasterCheckList(1, sortKey, sortVal);
    };
    MasterChecklistComponent.prototype.getTaskAndMasterActivity = function () {
        var _this = this;
        // this._masterCheckListService.getMasterCheckListAndTaskData('').subscribe(response => {
        //   this.responseHandle(response);
        // });
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(function (response) {
            _this.responseHandle(response);
        });
    };
    MasterChecklistComponent.prototype.responseHandle = function (data) {
        var _this = this;
        var masterData = [];
        var taskDataRef = [];
        for (var i in data.payload.data.masterActivity) {
            if (i) {
                masterData.push({ id: i, name: data.payload.data.masterActivity[i] });
            }
        }
        for (var i in data.payload.data.task) {
            if (i) {
                for (var j = 0; j < data.payload.data.task[i].length; j++) {
                    taskDataRef.push({
                        id: data.payload.data.task[i][j].id,
                        masterId: data.payload.data.task[i][j].master_activity_id,
                        name: data.payload.data.task[i][j].name
                    });
                }
            }
        }
        setTimeout(function (res) {
            _this.masterActivityData = masterData;
            _this.taskData = taskDataRef;
        }, 500);
    };
    MasterChecklistComponent.prototype.getTaskData = function (event) {
        var masterActivityId = event.id;
        this.taskDataMain = [];
        for (var j = 0; j < this.taskData.length; j++) {
            if (this.taskData[j].masterId === +masterActivityId) {
                this.taskDataMain.push({ masterId: this.taskData[j].masterId, id: this.taskData[j].id, name: this.taskData[j].name });
            }
        }
    };
    /**
     * Get User List
     */
    MasterChecklistComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.userList = response;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MasterChecklistComponent.prototype, "onKeydownHandler", null);
    MasterChecklistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-master-checklist',
            template: __webpack_require__(/*! ./master-checklist.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/master-checklist.component.html"),
            styles: [__webpack_require__(/*! ./master-checklist.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/master-checklist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_6__["SharedObjService"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"]])
    ], MasterChecklistComponent);
    return MasterChecklistComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/worksheet-master-checklist.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/worksheet-master-checklist.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"worksheet-master-checklist-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onWorkflow()\">WORKSHEET</a></span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">WORKSHEET MASTER CHECKLIST</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 PR-0\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('addNewWorksheet')\"\r\n                          *ngIf=\"worksheetTabIDData['add_edit']\">Add New Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayWorksheet')\">Today's Worksheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayTimesheet')\">Today's Timesheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('subClientList')\"\r\n                          *ngIf=\"tabDataWorksheetSubClientList['view']\">Sub Client List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                          *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('trainingList')\"\r\n                          *ngIf=\"tabDataWorksheetTraining['view']\">Training List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                          *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                    Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('peerReviewWorksheetListing')\"\r\n                          *ngIf=\"tabDataWorksheetPeerReviewerList['view']\">Peer Review Worksheet\r\n                    Listing\r\n                  </button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!--start tab menu-->\r\n  <div class=\"update-client\">\r\n    <mat-tab-group class=\"demo-tab-group contact-tab\" (selectedTabChange)=\"onSelectTab($event)\">\r\n      <mat-tab label=\"Master Checklist\">\r\n        <div *ngIf=\"isActiveTab === 0\">\r\n          <app-master-checklist></app-master-checklist>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab label=\"Master Checklist Question\">\r\n        <div *ngIf=\"isActiveTab === 1\">\r\n          <app-master-checklist-question></app-master-checklist-question>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab label=\"Cheklist Group\">\r\n        <div *ngIf=\"isActiveTab === 2\">\r\n          <app-checklist-group></app-checklist-group>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n  <!--end tab menu-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/worksheet-master-checklist.component.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/worksheet-master-checklist.component.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vd29ya3NoZWV0LW1hc3Rlci1jaGVja2xpc3Qvd29ya3NoZWV0LW1hc3Rlci1jaGVja2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/worksheet-master-checklist.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/worksheet-master-checklist.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: WorksheetMasterChecklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetMasterChecklistComponent", function() { return WorksheetMasterChecklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorksheetMasterChecklistComponent = /** @class */ (function () {
    function WorksheetMasterChecklistComponent(_router, _sharedService) {
        this._router = _router;
        this._sharedService = _sharedService;
        // State related variables
        this.showHistory = true;
        this.isActiveTab = 0;
        this.tabIDWorksheetHierarchy = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].WORKFLOW_MASTERACTIVITY;
        this.tabIDWorksheetTraining = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].WORKFLOW_WORKSHEETTRAINING;
        this.tabIDWorksheetSubClientList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].WORKFLOW_SUBCLIENTLIST;
        this.tabIDWorksheetReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
        this.tabIDWorksheetPeerReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
        this.tabIDWorksheetMasterChecklist = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].WORKFLOW_MASTERCHECKLIST;
        this.tabIDWorksheetMultiplueStatusChange = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;
        this.isMultipleStatusUpdate = false;
        this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
    }
    WorksheetMasterChecklistComponent.prototype.ngOnInit = function () {
        this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
        this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
        this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
        this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
        this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
        this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
        this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
        this.isMultipleStatusUpdate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetstatuschange', 1);
    };
    /**
     *  Worksheet Master checklist redirection
     */
    WorksheetMasterChecklistComponent.prototype.onSelectTab = function (tabChangeEvent) {
        this.isActiveTab = tabChangeEvent['index'];
        this.showHistory = (tabChangeEvent['index'] !== 3);
    };
    WorksheetMasterChecklistComponent.prototype.onWorkflow = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    WorksheetMasterChecklistComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Open modal method
     * @param dialogName
     */
    /* onOpenModal(dialogName) {
     }*/
    /**
     * Open quick menu
     * @param menuName
     */
    WorksheetMasterChecklistComponent.prototype.onOpenQuickMenu = function (menuName) {
        switch (menuName) {
            case 'addNewWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].ADD_WORKSHEET]);
                break;
            case 'todayWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_TODAYS_WORKSHEET]);
                break;
            case 'todayTimesheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
                break;
            case 'changeInOuttime':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_CHANGE_IN_OUT_TIME]);
                break;
            case 'subClientList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_SUB_CLIENT_LIST]);
                break;
            case 'trainingList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_TRAINING_LIST]);
                break;
            case 'revieworKnockBackWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_REVIEW_OR_KNOCK_BACK]);
                break;
            case 'peerReviewWorksheetListing':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
                break;
            case 'changeMultipleWorksheetStatus':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].CHANGE_MULTIPLE_WORKSHEET_STATUS]);
                break;
        }
    };
    WorksheetMasterChecklistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-worksheet-master-checklist',
            template: __webpack_require__(/*! ./worksheet-master-checklist.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/worksheet-master-checklist.component.html"),
            styles: [__webpack_require__(/*! ./worksheet-master-checklist.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/worksheet-master-checklist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], WorksheetMasterChecklistComponent);
    return WorksheetMasterChecklistComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/worksheet-master-checklist.module.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/worksheet-master-checklist.module.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: WorksheetMasterChecklistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetMasterChecklistModule", function() { return WorksheetMasterChecklistModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _worksheet_master_checklist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./worksheet-master-checklist.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/worksheet-master-checklist.component.ts");
/* harmony import */ var _checklist_group_checklist_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checklist-group/checklist-group.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/checklist-group.component.ts");
/* harmony import */ var _checklist_group_add_checklist_group_add_checklist_group_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checklist-group/add-checklist-group/add-checklist-group-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/checklist-group/add-checklist-group/add-checklist-group-dialog.ts");
/* harmony import */ var _master_checklist_master_checklist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./master-checklist/master-checklist.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/master-checklist.component.ts");
/* harmony import */ var _master_checklist_add_master_checklist_dialog_add_master_checklist_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./master-checklist/add-master-checklist-dialog/add-master-checklist-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist/add-master-checklist-dialog/add-master-checklist-dialog.ts");
/* harmony import */ var _master_checklist_question_master_checklist_question_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./master-checklist-question/master-checklist-question.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/master-checklist-question.component.ts");
/* harmony import */ var _master_checklist_question_add_master_cheklist_question_dialog_add_master_checklist_question_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./master-checklist-question/add-master-cheklist-question-dialog/add-master-checklist-question-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-master-checklist/master-checklist-question/add-master-cheklist-question-dialog/add-master-checklist-question-dialog.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _worksheet_master_checklist_component__WEBPACK_IMPORTED_MODULE_5__["WorksheetMasterChecklistComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
];
var WorksheetMasterChecklistModule = /** @class */ (function () {
    function WorksheetMasterChecklistModule() {
    }
    WorksheetMasterChecklistModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ],
            declarations: [_worksheet_master_checklist_component__WEBPACK_IMPORTED_MODULE_5__["WorksheetMasterChecklistComponent"], _checklist_group_checklist_group_component__WEBPACK_IMPORTED_MODULE_6__["ChecklistGroupComponent"], _checklist_group_add_checklist_group_add_checklist_group_dialog__WEBPACK_IMPORTED_MODULE_7__["AddChecklistGroupDialog"],
                _master_checklist_master_checklist_component__WEBPACK_IMPORTED_MODULE_8__["MasterChecklistComponent"],
                _master_checklist_add_master_checklist_dialog_add_master_checklist_dialog__WEBPACK_IMPORTED_MODULE_9__["AddMasterChecklistDialog"],
                _master_checklist_question_master_checklist_question_component__WEBPACK_IMPORTED_MODULE_10__["MasterChecklistQuestionComponent"],
                _master_checklist_question_add_master_cheklist_question_dialog_add_master_checklist_question_dialog__WEBPACK_IMPORTED_MODULE_11__["AddMasterChecklistQuestionDialog"]
            ],
            entryComponents: [_checklist_group_add_checklist_group_add_checklist_group_dialog__WEBPACK_IMPORTED_MODULE_7__["AddChecklistGroupDialog"], _master_checklist_add_master_checklist_dialog_add_master_checklist_dialog__WEBPACK_IMPORTED_MODULE_9__["AddMasterChecklistDialog"], _master_checklist_question_add_master_cheklist_question_dialog_add_master_checklist_question_dialog__WEBPACK_IMPORTED_MODULE_11__["AddMasterChecklistQuestionDialog"]]
        })
    ], WorksheetMasterChecklistModule);
    return WorksheetMasterChecklistModule;
}());



/***/ })

}]);
//# sourceMappingURL=worksheet-quick-action-worksheet-master-checklist-worksheet-master-checklist-module.js.map