(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~worksheet-dashboard-tab-worksheet-dashboard-tab-module~worksheet-module-worksheet-module~wor~31229cbc"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Worksheet Notes dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">View Notes\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"notesForm\" (submit)=\"submitNotes(notesForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 MT-15\">\r\n          <mat-form-field *ngIf=\"worksheetData.status_id.id !== 4\">\r\n            <textarea matInput rows=\"9\" placeholder=\"Note\" formControlName=\"notes\"></textarea>\r\n          </mat-form-field>\r\n          <span *ngIf=\"worksheetData.status_id.id === 4\">\r\n           {{worksheetData.notes}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\" *ngIf=\"worksheetData.status_id.id !== 4\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" [disabled]=\"notesForm.invalid\">Update</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Worksheet Log dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: WorksheetNotesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetNotesDialogComponent", function() { return WorksheetNotesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
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







var WorksheetNotesDialogComponent = /** @class */ (function (_super) {
    __extends(WorksheetNotesDialogComponent, _super);
    function WorksheetNotesDialogComponent(dialogRef, data, _fb, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        return _this;
    }
    WorksheetNotesDialogComponent.prototype.ngOnInit = function () {
        this.worksheetData = this.data ? this.data.worksheetItem : null;
        this.createNotesForm();
    };
    /**
     * Close Dialog
     */
    WorksheetNotesDialogComponent.prototype.onClose = function () {
        this.dialogRef.close(false);
    };
    /**
     * Create Notes
     */
    WorksheetNotesDialogComponent.prototype.createNotesForm = function () {
        this.notesForm = this._fb.group({
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.worksheetData ? this.worksheetData.notes : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    /***
     * Form Submit notes
     * @param form
     */
    WorksheetNotesDialogComponent.prototype.submitNotes = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['_method'] = 'put';
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_3__["AdminAPI"].UPDATE_WORKSHEET, this.worksheetData.id, form.value).subscribe(function (response) {
                _this.dialogRef.close(true);
            });
        }
    };
    WorksheetNotesDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-worksheet-notes-dialog',
            template: __webpack_require__(/*! ./worksheet-notes-dialog.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]])
    ], WorksheetNotesDialogComponent);
    return WorksheetNotesDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog.html":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">WORKSHEET STATUS LOG</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a (click)=\"onClose()\"> <i class=\"material-icons\">close</i></a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <div class=\"table-container dialog-table-container\">\r\n      <div class=\"table-block\">\r\n        <table class=\"PT-0\">\r\n          <thead>\r\n          <tr>\r\n            <th>Sr. No.</th>\r\n            <th>Master Activity</th>\r\n            <th>Task</th>\r\n            <th>Status</th>\r\n            <th>Updated By</th>\r\n            <th>Updated on</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let statusLog of statusLogList; let i = index\">\r\n            <td class=\"text-center\">{{i+1}}</td>\r\n            <td>{{statusLog?.masteractivity_name}}</td>\r\n            <td>{{statusLog?.task_name}}</td>\r\n            <td>{{statusLog?.status_id?.status_name}}</td>\r\n            <td>{{statusLog?.created_by?.userfullname}}</td>\r\n            <td>{{statusLog?.created_on | date : 'dd-MM-yyyy HH:mm:ss'}}</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: WorksheetStatusLogDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetStatusLogDialog", function() { return WorksheetStatusLogDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
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




var WorksheetStatusLogDialog = /** @class */ (function () {
    function WorksheetStatusLogDialog(dialogRef, data, _commonCrudService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._commonCrudService = _commonCrudService;
        this.statusLogList = [];
    }
    WorksheetStatusLogDialog.prototype.ngOnInit = function () {
        this.dataWorksheet = (this.data) ? this.data.dataWorksheet : [];
        this.getStatusLogList();
    };
    /**
     * Get Status Log List
     */
    WorksheetStatusLogDialog.prototype.getStatusLogList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].WORKSHEET_STATUS_LOG_LISTING + '/' + this.dataWorksheet.id, { 'records': 'all' }, {}).subscribe(function (response) {
            _this.statusLogList = response.payload.data;
        });
    };
    WorksheetStatusLogDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    WorksheetStatusLogDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'worksheet-status-log',
            template: __webpack_require__(/*! ./worksheet-status-log-dialog.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__["CommonCrudService"]])
    ], WorksheetStatusLogDialog);
    return WorksheetStatusLogDialog;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog.html":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog.html ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start ReviewActionAllocateReviewer dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{userTypePlaceHolder.toUpperCase()}}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addAllocateReviewerForm\" (submit)=\"onSubmitAllocateReviewerForm(addAllocateReviewerForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"row col-md-12 PL-0\">\r\n          <div class=\"col-md-4 MT-15\">\r\n            <label class=\"fw-500\">Client Name</label> :\r\n          </div>\r\n          <div class=\"col-md-8 MT-15\">\r\n            <span>{{worksheetData.trading_name}}</span>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-15\">\r\n            <label class=\"fw-500\">Period</label> :\r\n          </div>\r\n          <div class=\"col-md-8 MT-15\">\r\n            <span>{{worksheetData.start_date | date : 'dd-MM-yyyy'}} TO {{worksheetData.end_date | date : 'dd-MM-yyyy'}}</span>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-15 PR-0\">\r\n            <label class=\"fw-500\">Master Activity</label> :\r\n          </div>\r\n          <div class=\"col-md-8 MT-15\">\r\n            <span>{{worksheetData.master_activity_id?.name}}</span>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-15 PR-0\">\r\n            <label class=\"fw-500\">Team Member</label> :\r\n          </div>\r\n          <div class=\"col-md-8 MT-15\">\r\n            <span>{{worksheetData.worksheet_actual_teammember?.userfullname}}</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-15 custom-ng-select-dropdown MB-30\">\r\n          <ng-select [items]=\"assingeeList\"\r\n                     bindLabel=\"userfullname\"\r\n                     bindValue=\"id\"\r\n                     groupBy=\"name\"\r\n                     placeholder=\"{{userTypePlaceHolder}}\"\r\n                     formControlName=\"user_id\"\r\n                     [selectableGroup]=\"false\">\r\n            <ng-template ng-optgroup-tmp let-item=\"item\">\r\n              {{item.name}}\r\n            </ng-template>\r\n          </ng-select>\r\n          <!--<mat-form-field>-->\r\n          <!--<mat-select placeholder=\"{{userTypePlaceHolder}}\" formControlName=\"user_id\" required-->\r\n          <!--*ngIf=\"userSubmitType === 1\">-->\r\n          <!--<mat-optgroup *ngFor=\"let group of assingeeList\" [label]=\"group.name\"-->\r\n          <!--[disabled]=\"group.disabled\">-->\r\n          <!--<mat-option *ngFor=\"let user of group.userData\" [value]=\"user.id\">-->\r\n          <!--{{user.userfullname}}-->\r\n          <!--</mat-option>-->\r\n          <!--</mat-optgroup>-->\r\n          <!--</mat-select>-->\r\n          <!--<mat-select placeholder=\"{{userTypePlaceHolder}}\" formControlName=\"user_id\" required-->\r\n          <!--*ngIf=\"userSubmitType === 2 || userSubmitType === 3\">-->\r\n          <!--<mat-option *ngFor=\"let user of assingeeList\" [value]=\"user['id']\">-->\r\n          <!--{{user['userfullname']}}-->\r\n          <!--</mat-option>-->\r\n          <!--</mat-select>-->\r\n          <!--</mat-form-field>-->\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addAllocateReviewerForm.get('user_id'))\"\r\n                            [errMsg]=\"validationMsg.ALLOCATE_REVIEWER_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary MR-5\" [disabled]=\"addAllocateReviewerForm.invalid\">Assign</button>\r\n          <button class=\"btn-default\" [disabled]=\"!this.existUserID\" (click)=\"changeRemoveType()\"\r\n                  *ngIf=\"this.userSubmitType === 1\">Remove Assignee\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change Sub client list dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog.ts":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog.ts ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: ReviewActionAllocateReviewerDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewActionAllocateReviewerDialog", function() { return ReviewActionAllocateReviewerDialog; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
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







var ReviewActionAllocateReviewerDialog = /** @class */ (function (_super) {
    __extends(ReviewActionAllocateReviewerDialog, _super);
    function ReviewActionAllocateReviewerDialog(dialogRef, data, _fb, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.isadditionalAssignee = 0;
        _this.userSubmitType = 0;
        _this.userTypePlaceHolder = '';
        _this.existUserID = 0;
        _this.assingeeList = [];
        return _this;
    }
    ReviewActionAllocateReviewerDialog.prototype.ngOnInit = function () {
        this.worksheetData = (this.data) ? this.data.allocateData : [];
        this.userSubmitType = (this.data) ? this.data.isadditionalAssignee : 0;
        // 1 = Allocate Additional Assignee , 2 = Allocate Reviewer Assignee, 3 = Allocate Peer Reviewer Assignee
        if (this.userSubmitType === 1) {
            this.existUserID = (this.worksheetData.worksheet_additional_assignee) ? this.worksheetData.worksheet_additional_assignee.id : 0;
            this.userTypePlaceHolder = 'Allocate Additional Assignee';
        }
        else if (this.userSubmitType === 2) {
            this.existUserID = (this.worksheetData.worksheet_reviewer) ? this.worksheetData.worksheet_reviewer.id : 0;
            this.userTypePlaceHolder = 'Allocate Reviewer Assignee';
        }
        else if (this.userSubmitType === 3) {
            this.existUserID = (this.worksheetData.worksheet_peerreviewer) ? this.worksheetData.worksheet_peerreviewer.id : 0;
            this.userTypePlaceHolder = 'Allocate Peer Reviewer Assignee';
        }
        this.getAssigneeList();
        this.createAllocatedReviewerForm();
    };
    /**
     * Get Assignee List
     */
    ReviewActionAllocateReviewerDialog.prototype.getAssigneeList = function () {
        var _this = this;
        if (this.userSubmitType === 1) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].WORKSHEET_ADDITIONAL_ASSIGNEE, {
                'entity_id': this.worksheetData.entity_id,
                'master_activity_id': this.worksheetData.master_activity_id.id
            }, {}).subscribe(function (response) {
                if (response) {
                    _this.assingeeList = [];
                    var data = response.payload.data;
                    // console.log(data);
                    if (data['teamMember']) {
                        data['teamMember'].forEach(function (item) {
                            item['name'] = 'Team Member';
                            _this.assingeeList.push(item);
                        });
                    }
                    if (data['otherMember']) {
                        data['otherMember'].forEach(function (item) {
                            item['name'] = 'Other Member';
                            _this.assingeeList.push(item);
                        });
                    }
                    // console.log(this.assingeeList);
                }
            });
        }
        else if (this.userSubmitType === 2) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].WORKSHEET_REVIEWER_ASSIGNEE, {
                'entity_id': this.worksheetData.entity_id,
                'master_activity_id': this.worksheetData.master_activity_id.id
            }, {}).subscribe(function (response) {
                _this.assingeeList = [];
                _this.assingeeList = response.payload.data;
                _this.assingeeList.map(function (item) {
                    item['name'] = 'Reviewer';
                });
            });
        }
        else if (this.userSubmitType === 3) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].WORKSHEET_PEER_REVIEWER_ASSIGNEE, {}, {}).subscribe(function (response) {
                _this.assingeeList = [];
                _this.assingeeList = response.payload.data;
                _this.assingeeList.map(function (item) {
                    item['name'] = 'Peer Reviewer';
                });
            });
        }
    };
    /**
     * Create Reviewer Form
     */
    ReviewActionAllocateReviewerDialog.prototype.createAllocatedReviewerForm = function () {
        this.addAllocateReviewerForm = this._fb.group({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.userSubmitType),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.existUserID, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            is_remove: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0)
        });
    };
    /**
     * On Submit Allocate Reviewer Form
     * @param form
     */
    ReviewActionAllocateReviewerDialog.prototype.onSubmitAllocateReviewerForm = function (form) {
        var _this = this;
        if (form.valid) {
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].WORKSHEET_ADDITIONAL_ASSIGNEE, this.worksheetData.id, {
                'user_id': form.value['user_id'],
                'type': form.value['type'],
                'is_remove': form.value['is_remove'],
                '_method': 'put'
            }).subscribe(function (response) {
                _this.onClose();
            });
        }
    };
    /**
     * On Submit Allocate Reviewer Form
     * @param form
     */
    ReviewActionAllocateReviewerDialog.prototype.onRemoveAllocateReviewerForm = function (form) {
        var _this = this;
        if (form.valid) {
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].WORKSHEET_ADDITIONAL_ASSIGNEE, this.worksheetData.id, {
                'user_id': form.value['user_id'],
                'type': form.value['type'],
                '_method': 'put'
            }).subscribe(function (response) {
                _this.onClose();
            });
        }
    };
    /**
     * Close Dialog
     */
    ReviewActionAllocateReviewerDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ReviewActionAllocateReviewerDialog.prototype.changeRemoveType = function () {
        this.addAllocateReviewerForm.get('is_remove').setValue(1);
    };
    ReviewActionAllocateReviewerDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'review-action-allocate-reviewer-dialog',
            template: __webpack_require__(/*! ./review-action-allocate-reviewer-dialog.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]])
    ], ReviewActionAllocateReviewerDialog);
    return ReviewActionAllocateReviewerDialog;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=default~worksheet-dashboard-tab-worksheet-dashboard-tab-module~worksheet-module-worksheet-module~wor~31229cbc.js.map