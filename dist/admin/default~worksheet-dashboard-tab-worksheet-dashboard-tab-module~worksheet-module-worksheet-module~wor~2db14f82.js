(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~worksheet-dashboard-tab-worksheet-dashboard-tab-module~worksheet-module-worksheet-module~wor~2db14f82"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/complete-worksheet-status-dialog/complete-worksheet-status-dialog.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/complete-worksheet-status-dialog/complete-worksheet-status-dialog.component.html ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start complete worksheet Dialog-->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\" *ngIf=\"isFormDataType ===0\">COMPLETE WORKSHEET</div>\r\n    <div class=\"modal__header__logo\" *ngIf=\"isFormDataType ===1\">WORKSHEET TASK DETAIL</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n  <form [formGroup]=\"addCompleteWorksheetForm\" *ngIf=\"isFormDataType === 0\"\r\n        (submit)=\"onSubmitAddCompleteWorksheet(addCompleteWorksheetForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-label class=\"fw-500\">\r\n            Client Name\r\n          </mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-8\">\r\n          <p>{{worksheetData.trading_name}}</p>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">Master Activity</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-30\">\r\n          <mat-label class=\"MT-20\">{{worksheetData.master_activity_id.name}}</mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">Task</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-30\">\r\n          <mat-label class=\"MT-20\">{{worksheetData.task_id.name}}</mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">Period</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-30\">\r\n          <mat-label class=\"MT-20\">{{worksheetData?.start_date | date : 'dd-MM-yyyy'}} To {{worksheetData?.end_date |\r\n            date : 'dd-MM-yyyy'}}\r\n          </mat-label>\r\n        </div>\r\n\r\n        <!--<div class=\"col-md-4 MT-35\">-->\r\n          <!--<mat-label class=\"MT-20 fw-500\">Do you want to create new worksheet task?</mat-label>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"col-md-8 MT-35\">-->\r\n          <!--<mat-label class=\"MT-20\">-->\r\n            <!--<mat-radio-group (change)=\"onChangeType($event.value,1)\" formControlName=\"is_create_new_task\">-->\r\n              <!--<mat-radio-button [checked]=\"isAddNewTask === 1 ? true : false\" value=\"1\">Yes</mat-radio-button>-->\r\n              <!--<mat-radio-button [checked]=\"isAddNewTask === 2 ? true : false\" class=\"ML-15\" value=\"2\">No-->\r\n              <!--</mat-radio-button>-->\r\n            <!--</mat-radio-group>-->\r\n          <!--</mat-label>-->\r\n        <!--</div>-->\r\n\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">Is there any delay ?</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-30\">\r\n          <mat-label class=\"MT-20\">\r\n            <mat-radio-group (change)=\"onChangeType($event.value,2)\" formControlName=\"is_there_delay\">\r\n              <mat-radio-button [checked]=\"isThereDelay === 1 ? true: false\" value=\"1\" [disabled]=\"true\">Yes</mat-radio-button>\r\n              <mat-radio-button [checked]=\"isThereDelay === 2 ? true : false\" class=\"ML-15\" value=\"2\" [disabled]=\"true\">No\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n          </mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\" *ngIf=\"isThereDelay === 1\">\r\n          <mat-label class=\"MT-20 fw-500\">Delay From</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-30\" *ngIf=\"isThereDelay === 1\">\r\n          <mat-label class=\"MT-20\">\r\n            <mat-radio-group (change)=\"onChangeType($event.value,3)\" formControlName=\"delay_from\">\r\n              <mat-radio-button [checked]=\"isDelayFrom === 1 ? true : false\" value=\"1\">Client</mat-radio-button>\r\n              <mat-radio-button [checked]=\"isDelayFrom === 2 ? true : false\" class=\"ML-15\" value=\"2\">Befree\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n          </mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\" *ngIf=\"isThereDelay === 1\">\r\n          <mat-label class=\"MT-20 fw-500\">Reason</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-30\" *ngIf=\"isThereDelay === 1\">\r\n          <mat-form-field>\r\n            <textarea matInput rows=\"2\" formControlName=\"delay_comment\" required placeholder=\"Reason\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addCompleteWorksheetForm.get('delay_comment'))\"\r\n                            [errMsg]=\"validationMsg.REASON_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\" *ngIf=\"isDelayFrom === 2\">\r\n          <mat-label class=\"MT-20 fw-500\">Action</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-30\" *ngIf=\"isDelayFrom === 2\">\r\n          <mat-form-field>\r\n            <textarea matInput rows=\"2\" formControlName=\"delay_from_befree_action\" required\r\n                      placeholder=\"Action\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addCompleteWorksheetForm.get('delay_from_befree_action'))\"\r\n                            [errMsg]=\"validationMsg.ACTION_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-right\">\r\n          <button type=\"submit\" class=\"btn-primary\" [disabled]=\"addCompleteWorksheetForm.invalid\">Complete</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <form [formGroup]=\"addCompleteWorksheetTaskFormDetails\" *ngIf=\"isFormDataType === 1\"\r\n        (submit)=\"onSubmitCompleteWorksheet(addCompleteWorksheetTaskFormDetails)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-label class=\"fw-500\">\r\n            Client Name\r\n          </mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-8\">\r\n          <p>{{worksheetData.trading_name}}</p>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">Frequency</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-30\">\r\n          <mat-label class=\"MT-20\">{{worksheetData.frequency_name}}</mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">Period</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-30\">\r\n          <mat-label class=\"MT-20\">{{worksheetData?.start_date | date : 'dd-MM-yyyy'}} To {{worksheetData?.end_date |\r\n            date : 'dd-MM-yyyy'}}\r\n          </mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">Start Date</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-35\">\r\n          <mat-form-field [floatLabel]=\"'never'\">\r\n            <input matInput [matDatepicker]=\"startDate\" (click)=\"startDate.open()\"\r\n                   [value]=\"worksheetData.new_start_date\"\r\n                   placeholder=\"Select Date\" formControlName=\"start_date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #startDate></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">End Date</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-35\">\r\n          <mat-form-field [floatLabel]=\"'never'\">\r\n            <input matInput [matDatepicker]=\"endDate\" (click)=\"endDate.open()\" [value]=\"worksheetData.new_end_date\"\r\n                   placeholder=\"Select Date\" formControlName=\"end_date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #endDate></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">Due Date</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-35\">\r\n          <mat-form-field [floatLabel]=\"'never'\">\r\n            <input matInput [matDatepicker]=\"dueDate\" (click)=\"dueDate.open()\" [value]=\"worksheetData.new_due_date\"\r\n                   placeholder=\"Select Date\" formControlName=\"due_date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"dueDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #dueDate></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">Last Report Sent</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-35\">\r\n          <mat-form-field [floatLabel]=\"'never'\">\r\n            <input matInput [matDatepicker]=\"lastReportDate\" (click)=\"lastReportDate.open()\"\r\n                   formControlName=\"last_report_sent_date\"\r\n                   placeholder=\"Select Date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"lastReportDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #lastReportDate></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">Notes</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-35\">\r\n          <textarea matInput formControlName=\"notes\">{{worksheetData.notes}}</textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-right\">\r\n          <button type=\"submit\" class=\"btn-primary\" [disabled]=\"addCompleteWorksheetTaskFormDetails.invalid\">Submit\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/complete-worksheet-status-dialog/complete-worksheet-status-dialog.component.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/complete-worksheet-status-dialog/complete-worksheet-status-dialog.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: CompleteWorksheetStatusDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteWorksheetStatusDialogComponent", function() { return CompleteWorksheetStatusDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utility_pipe_date_compare_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/pipe/date-compare.pipe */ "./src/utility/pipe/date-compare.pipe.ts");
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









var CompleteWorksheetStatusDialogComponent = /** @class */ (function (_super) {
    __extends(CompleteWorksheetStatusDialogComponent, _super);
    function CompleteWorksheetStatusDialogComponent(_DateComparePipe, dialogRefData, data, _fb, dialog, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this._DateComparePipe = _DateComparePipe;
        _this.dialogRefData = dialogRefData;
        _this.data = data;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.isAddNewTask = null;
        _this.isThereDelay = null;
        _this.isDelayFrom = null;
        _this.isFormDataType = 0;
        return _this;
    }
    CompleteWorksheetStatusDialogComponent.prototype.ngOnInit = function () {
        this.worksheetData = (this.data.worksheetItem) ? this.data.worksheetItem : [];
        this.isThereDelay = this._DateComparePipe.transform(this.worksheetData) ? 1 : 2;
        // console.log(this.isThereDelay);
        this.createAddCompleteWorksheetForm();
        this.createAddCompleteTaskWorksheetForm();
    };
    /**
     * Add Complete WorksheetForm
     */
    CompleteWorksheetStatusDialogComponent.prototype.createAddCompleteTaskWorksheetForm = function () {
        this.addCompleteWorksheetTaskFormDetails = this._fb.group({
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.worksheetData.new_start_date, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.worksheetData.new_end_date, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            due_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.worksheetData.new_due_date, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            last_report_sent_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.worksheetData.notes)
        });
    };
    CompleteWorksheetStatusDialogComponent.prototype.onSubmitAddCompleteWorksheet = function (form) {
        var _this = this;
        // console.log(form);
        if (form.valid) {
            form.value['is_there_delay'] = form.value['is_there_delay'] === "2" ? "0" : form.value['is_there_delay'];
            form.value['status_id'] = 4;
            form.value['_method'] = 'put';
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].UPDATE_WORKSHEET, this.worksheetData.id, form.value).subscribe(function (response) {
                if (response && form.value['is_create_new_task'] === '1') {
                    _this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].REPEAT_WORKSHEET_LIST, _this.worksheetData.id).subscribe(function (responseData) {
                        _this.isFormDataType = 1;
                        _this.worksheetData.new_start_date = responseData.payload.data['new_start_date'];
                        _this.worksheetData.new_end_date = responseData.payload.data['new_end_date'];
                        _this.worksheetData.new_due_date = responseData.payload.data['new_due_date'];
                        _this.worksheetData.new_worksheet_master_id = responseData.payload.data['new_worksheet_master_id'];
                        _this.worksheetData.new_master_activity_id = responseData.payload.data['new_master_activity_id'];
                        _this.worksheetData.new_task_id = responseData.payload.data['new_task_id'];
                        _this.worksheetData.new_frequency_id = responseData.payload.data['new_frequency_id'];
                        _this.addCompleteWorksheetTaskFormDetails.get('start_date').setValue(_this.worksheetData.new_start_date);
                        _this.addCompleteWorksheetTaskFormDetails.get('end_date').setValue(_this.worksheetData.new_end_date);
                        _this.addCompleteWorksheetTaskFormDetails.get('due_date').setValue(_this.worksheetData.new_due_date);
                    });
                }
                else {
                    _this.onClose();
                }
            });
        }
    };
    /**
     * Add Complete WorksheetForm
     */
    CompleteWorksheetStatusDialogComponent.prototype.createAddCompleteWorksheetForm = function () {
        this.addCompleteWorksheetForm = this._fb.group({
            is_create_new_task: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            is_there_delay: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            delay_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            delay_comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            delay_from_befree_action: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.addCompleteWorksheetForm.get('is_there_delay').setValue(this.isThereDelay);
        this.addCompleteWorksheetForm.get('is_there_delay').updateValueAndValidity();
    };
    /**
     * On change type of recurring form
     * @param event
     */
    CompleteWorksheetStatusDialogComponent.prototype.onChangeType = function (event, type) {
        if (type === 1) {
            if (+event === 1) {
                this.isAddNewTask = 1;
            }
            else {
                this.isAddNewTask = 2;
            }
        }
        else if (type === 2) {
            if (+event === 1) {
                this.isThereDelay = 1;
                this.addCompleteWorksheetForm.get('delay_from').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                this.addCompleteWorksheetForm.get('delay_from').updateValueAndValidity();
                this.addCompleteWorksheetForm.get('delay_comment').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                this.addCompleteWorksheetForm.get('delay_comment').updateValueAndValidity();
            }
            else {
                this.isThereDelay = 2;
                this.isDelayFrom = 0;
                this.addCompleteWorksheetForm.get('delay_from').setValidators(null);
                this.addCompleteWorksheetForm.get('delay_from').setValue(null);
                this.addCompleteWorksheetForm.get('delay_from').updateValueAndValidity();
                this.addCompleteWorksheetForm.get('delay_comment').setValidators(null);
                this.addCompleteWorksheetForm.get('delay_comment').setValue(null);
                this.addCompleteWorksheetForm.get('delay_comment').updateValueAndValidity();
                this.addCompleteWorksheetForm.get('delay_from_befree_action').setValidators(null);
                this.addCompleteWorksheetForm.get('delay_from_befree_action').setValue(null);
                this.addCompleteWorksheetForm.get('delay_from_befree_action').updateValueAndValidity();
            }
        }
        else if (type === 3) {
            if (+event === 1) {
                this.isDelayFrom = 1;
                this.addCompleteWorksheetForm.get('delay_from_befree_action').setValidators(null);
                this.addCompleteWorksheetForm.get('delay_from_befree_action').setValue(null);
                this.addCompleteWorksheetForm.get('delay_from_befree_action').updateValueAndValidity();
            }
            else {
                this.isDelayFrom = 2;
                this.addCompleteWorksheetForm.get('delay_from_befree_action').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                this.addCompleteWorksheetForm.get('delay_from_befree_action').updateValueAndValidity();
            }
        }
    };
    /**
     * On Submit Complete Worksheet
     * @param form
     */
    CompleteWorksheetStatusDialogComponent.prototype.onSubmitCompleteWorksheet = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['worksheet_master_id'] = this.worksheetData.new_worksheet_master_id;
            form.value['master_activity_id'] = this.worksheetData.new_master_activity_id;
            form.value['entity_id'] = this.worksheetData.entity_id;
            form.value['task_id'] = this.worksheetData.new_task_id;
            form.value['service_id'] = this.worksheetData.service_id;
            form.value['frequency_id'] = this.worksheetData.new_frequency_id;
            form.value['last_report_sent_date'] = moment__WEBPACK_IMPORTED_MODULE_7__(form.value['last_report_sent_date']).format('YYYY-MM-DD');
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].REPEAT_WORKSHEET_ADD, form.value).subscribe(function (response) {
                _this.onClose();
            });
        }
    };
    CompleteWorksheetStatusDialogComponent.prototype.onClose = function () {
        this.dialogRefData.close();
    };
    CompleteWorksheetStatusDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-complete-worksheet-status-dialog',
            template: __webpack_require__(/*! ./complete-worksheet-status-dialog.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/complete-worksheet-status-dialog/complete-worksheet-status-dialog.component.html"),
            providers: [_utility_pipe_date_compare_pipe__WEBPACK_IMPORTED_MODULE_8__["DateComparePipe"]]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_utility_pipe_date_compare_pipe__WEBPACK_IMPORTED_MODULE_8__["DateComparePipe"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]])
    ], CompleteWorksheetStatusDialogComponent);
    return CompleteWorksheetStatusDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/myworksheet/myworksheet.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/myworksheet/myworksheet.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- review on knock back worksheet html start-->\r\n<div class=\"admin-review-or-knock-back-worksheet-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"with-filter-grid-container\">\r\n\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header MT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 MT-15 status-type-list\">\r\n              <a class=\"orange-color\">\r\n                <mat-icon class=\"material-icons\">fiber_manual_record</mat-icon>\r\n                Indicates Overdue Task</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onToggleFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li (click)=\"downloadExcel()\" *ngIf=\"tabData['export']\">\r\n              <a>\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc\r\n          <mat-icon class=\"material-icons\">close</mat-icon>\r\n        </span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientListParent\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Parent Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         (change)=\"onChangeParentEntity($event);\"\r\n                         formControlName=\"parent_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"entity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"masterActivityList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Master activity\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         (change)=\"getTaskFilterList($event)\"\r\n                         formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"taskList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Task\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         formControlName=\"task_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\">\r\n                  <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                    {{frequency.frequency_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"start_date\" [matDatepicker]=\"periodFrom\"\r\n                           placeholder=\"Period From\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"end_date\" [matDatepicker]=\"periodTo\" placeholder=\"Period To\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"due_date_from\" [matDatepicker]=\"dueDateFrom\"\r\n                           placeholder=\"Due date From\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDateFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDateFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"due_date_to\" [matDatepicker]=\"dueDateTo\" (click)=\"dueDateTo.open()\"\r\n                           placeholder=\"Due date To\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDateTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDateTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"category_id\" [multiple]=\"true\" placeholder=\"Category\">\r\n                  <mat-option *ngFor=\"let category of categoryData;\" [value]=\"category.key\">{{category.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"related_entity\" placeholder=\"Related Entity\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">{{yesNo.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"status_id\" placeholder=\"Status\">\r\n                  <mat-option *ngFor=\"let worksheetStatus of worksheetStatusList;\" value=\"{{worksheetStatus.id}}\">\r\n                    {{worksheetStatus.status_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"tamList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"TAM\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"staffList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Team Member\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"team_member\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Additional Staff\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"additional_assignee\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"lock_worksheet\" placeholder=\"Worksheet status\">\r\n                  <mat-option *ngFor=\"let lockData of worksheetLockList.slice(1);\" value=\"{{lockData.key}}\">\r\n                    {{lockData.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-9 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button [disabled]=\"filterForm.invalid\" type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"parent_id.value\">\r\n          <span class=\"tag__title\">Parent Trading Name :</span>\r\n          <span>\r\n             <ng-select [items]=\"clientListParent\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"parent_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true); onChangeParentEntity($event);\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"entity_id.value\">\r\n          <span class=\"tag__title\">Client name :</span>\r\n          <span>\r\n             <ng-select [items]=\"clientList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"entity_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);getTaskFilterList($event)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"master_activity_id.value && master_activity_id.value.length\">\r\n          <span class=\"tag__title\">Master activity :</span>\r\n          <span>\r\n            <ng-select [items]=\"masterActivityList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);getTaskFilterList($event);\"\r\n                       formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('master_activity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"task_id.value && task_id.value.length\">\r\n          <span class=\"tag__title\">Task :</span>\r\n          <span>\r\n            <ng-select [items]=\"taskList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Task\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"task_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('task_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"frequency_id.value\">\r\n          <span class=\"tag__title\">Frequency :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n               <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                    {{frequency.frequency_name}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('frequency_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"start_date.value\">\r\n          <span class=\"tag__title\">Period From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"start_date\" [matDatepicker]=\"perdiodFromDate\"\r\n                     placeholder=\"Period From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('start_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"end_date.value\">\r\n          <span class=\"tag__title\">Period To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"end_date\" [matDatepicker]=\"perdiodToDate\" (click)=\"perdiodToDate.open()\"\r\n                     placeholder=\"Period To\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('end_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"due_date_from.value\">\r\n          <span class=\"tag__title\">Due Date From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"due_date_from\" [matDatepicker]=\"dueFromDate\" (click)=\"dueFromDate.open()\"\r\n                     placeholder=\"Due Date From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('due_date_from')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"due_date_to.value\">\r\n          <span class=\"tag__title\">Due Date To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"due_date_to\" [matDatepicker]=\"dueToDate\"\r\n                     placeholder=\"Due Date To\"\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"category_id.value\">\r\n          <span class=\"tag__title\">Category :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select [multiple]=\"true\" formControlName=\"category_id\" placeholder=\"Category\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let category of categoryData;\" [value]=\"category.key\">{{category.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('category_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"related_entity.value\">\r\n          <span class=\"tag__title\">Related Entity :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"related_entity\" placeholder=\"Related Entity\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n               <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">{{yesNo.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('related_entity')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"status_id.value\">\r\n          <span class=\"tag__title\">Status :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"status_id\" placeholder=\"Status\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let worksheetStatus of worksheetStatusList;\" value=\"{{worksheetStatus.id}}\">\r\n                    {{worksheetStatus.status_name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('status_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"technical_account_manager.value\">\r\n          <span class=\"tag__title\">TAM :</span>\r\n          <span>\r\n            <ng-select [items]=\"tamList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"TAM\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('technical_account_manager')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"team_member.value\">\r\n          <span class=\"tag__title\">Team member :</span>\r\n          <span>\r\n            <ng-select [items]=\"staffList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Team Member\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"team_member\">\r\n            </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('team_member')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"additional_assignee.value\">\r\n          <span class=\"tag__title\">Additional staff :</span>\r\n          <span>\r\n             <ng-select [items]=\"userList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"userfullname\"\r\n                        placeholder=\"Additional Staff\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                        formControlName=\"additional_assignee\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('additional_assignee')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"lock_worksheet.value\">\r\n          <span class=\"tag__title\">Status :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"lock_worksheet\" placeholder=\"Worksheet status\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                 <mat-option *ngFor=\"let lockData of worksheetLockList.slice(1);\" value=\"{{lockData.key}}\">\r\n                    {{lockData.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('lock_worksheet')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\" *ngIf=\"\r\n          entity_id.value || parent_id.value\r\n          || (master_activity_id.value && master_activity_id.value.length)\r\n          || (task_id.value && task_id.value.length)\r\n          || frequency_id.value\r\n          || start_date.value\r\n          || end_date.value\r\n          || due_date_to.value\r\n          || due_date_from.value\r\n          || category_id.value\r\n          || related_entity.value\r\n          || status_id.value\r\n          || technical_account_manager.value\r\n          || team_member.value\r\n          || additional_assignee.value\r\n          || lock_worksheet.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n  </div>\r\n\r\n  <!--my worksheet container html start-->\r\n  <div class=\"view-worksheet-tab-container\">\r\n    <div class=\"expand-grid\">\r\n      <div>\r\n        <div class=\"expand-grid__thead\">\r\n          <table>\r\n            <thead>\r\n            <tr>\r\n              <th width=\"6%\">\r\n                <span *ngIf=\"isMultipleWorksheetDelete\">\r\n                  <mat-checkbox (change)=\"onSelectAllItem($event.checked)\"></mat-checkbox></span>\r\n                Sr.No.\r\n              </th>\r\n              <th width=\"10%\">Parent Trading Name</th>\r\n              <th width=\"12%\" (click)=\"getSortData('trading_name',\r\n            (sortBy === 'trading_name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Client Name\r\n                <i *ngIf=\"sortBy === 'trading_name'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'trading_name'),\r\n                 'icon-up' : ((sortBy === 'trading_name') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'trading_name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"10%\" (click)=\"getSortData('task_id',\r\n              (sortBy === 'task_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Task\r\n                <i *ngIf=\"sortBy === 'task_id'\" [ngClass]=\"{'material-icons': true,\r\n                  'active' : (sortBy === 'task_id'),\r\n                   'icon-up' : ((sortBy === 'task_id') && (sortOrder === 'asc')),\r\n                   'icon-down' : true}\">\r\n                  {{(sortBy === 'task_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"5%\" (click)=\"getSortData('frequency_id',\r\n            (sortBy === 'frequency_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Frequency\r\n                <i *ngIf=\"sortBy === 'frequency_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'frequency_id'),\r\n                 'icon-up' : ((sortBy === 'frequency_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'frequency_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n              <th width=\"9%\">Period Date\r\n                <mat-icon [matTooltip]=\"'Period Start Date & End Date'\" class=\"v-align-middle gray-color\">info\r\n                </mat-icon>\r\n              </th>\r\n              <th width=\"9%\" (click)=\"getSortData('due_date',\r\n            (sortBy === 'due_date') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Reminder/ Due Date\r\n                <i *ngIf=\"sortBy === 'due_date'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'due_date'),\r\n                 'icon-up' : ((sortBy === 'due_date') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'due_date') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n              <th width=\"9%\">Notes\r\n              </th>\r\n              <th width=\"5%\">Units</th>\r\n\r\n              <th width=\"9%\">Status\r\n                <i *ngIf=\"sortBy === 'status_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'status_id'),\r\n                 'icon-up' : ((sortBy === 'status_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'status_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"11%\" (click)=\"getSortData('allocation',\r\n            (sortBy === 'allocation') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Staff\r\n                <i *ngIf=\"sortBy === 'allocation'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'allocation'),\r\n                 'icon-up' : ((sortBy === 'allocation') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'allocation') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n              <th width=\"5%\">Action</th>\r\n            </tr>\r\n            </thead>\r\n          </table>\r\n        </div>\r\n        <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n          <table *ngIf=\"worksheetListData.length\">\r\n            <tbody [ngClass]=\"{'red-tr' : data | dateCompare}\"\r\n                   *ngFor=\"let data of worksheetListData; let i = index;\">\r\n            <tr [ngClass]=\"{'is-active-row' : trIndex === i}\" class=\"row-data\">\r\n              <td width=\"6%\">\r\n                <span *ngIf=\"isMultipleWorksheetDelete\" class=\"MR-5\">\r\n                <mat-checkbox *ngIf=\"data.timesheet_total_unit === 0\" [checked]=\"selectAllWorksheetIDS\"\r\n                              (change)=\"onSelectItem($event.checked, data.id)\"></mat-checkbox></span>\r\n                <a class=\"open-inner-data\" (click)=\"openRow(i)\">\r\n                  <mat-icon [ngClass]=\"{'is-open' : trIndex === i}\" class=\"material-icons\">keyboard_arrow_down\r\n                  </mat-icon>\r\n                </a>\r\n                {{+pageSize * (pageIndex) + i + 1}}\r\n                <mat-icon *ngIf=\"data?.discontinue_stage == 1\" class=\"red-color v-align-middle\"\r\n                          [matTooltip]=\"'Discontinue Process Initiated'\">block\r\n                </mat-icon>\r\n              </td>\r\n              <td width=\"10%\" class=\"word-break\">{{data?.parent_name}}</td>\r\n              <td width=\"12%\" class=\"word-break\">{{data?.trading_name}}</td>\r\n              <td width=\"10%\" class=\"word-break\">{{data?.task_id?.name}}</td>\r\n              <td width=\"5%\">{{data?.frequency_name}}</td>\r\n              <td width=\"9%\" class=\"date_no_border\">\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangePeriodStartEndDate\">\r\n                    <input matInput [value]=\"data?.start_date\" [matDatepicker]=\"pickerStart\" placeholder=\"Select Date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'start_date', 'value': $event.target.value, 'id': data.id})\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerStart></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!canChangePeriodStartEndDate\" class=\"readonly_date\">{{data?.start_date | date : 'dd-MM-yyyy'}}</span>\r\n                </div>\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangePeriodStartEndDate\">\r\n                    <input matInput [matDatepicker]=\"pickerEnd\" (click)=\"pickerEnd.open()\" placeholder=\"Select Date\"\r\n                           [value]=\"data.end_date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'end_date', 'value': $event.target.value, 'id': data.id})\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerEnd></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!canChangePeriodStartEndDate\">{{data?.end_date | date : 'dd-MM-yyyy'}}</span>\r\n                </div>\r\n              </td>\r\n              <td width=\"9%\" class=\"date_no_border\">\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"tabID['add_edit']\">\r\n                    <input matInput [matDatepicker]=\"reminderDate\" (click)=\"reminderDate.open()\"\r\n                           [value]=\"data.reminder_date && data.reminder_date !== '0000-00-00' ? (data.reminder_date | date : 'dd-MM-yyyy') : ''\" placeholder=\"Select Date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'reminder_date', 'value':$event.target.value, 'id': data.id})\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"reminderDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #reminderDate></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!tabID['add_edit']\"\r\n                        class=\"readonly_date\">{{data.reminder_date && data.reminder_date !== '0000-00-00' ? (data.reminder_date | date : 'dd-MM-yyyy') : ''}}</span>\r\n                </div>\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangeDueDate\">\r\n                    <input matInput [matDatepicker]=\"dueDate\" (click)=\"dueDate.open()\" [value]=\"data.due_date\"\r\n                           placeholder=\"Select Date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'due_date', 'value':$event.target.value, 'id': data.id})\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDate></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!canChangeDueDate\">{{data.due_date | date : 'dd-MM-yyyy'}}</span>\r\n                </div>\r\n              </td>\r\n              <td width=\"9%\" class=\"word-break\">\r\n                <div ellipsis=\"Read More..\" class=\"multiline-ellipsis\" (click)=\"onWorksheetNotesDialog(data)\"\r\n                     (ellipsis-click-more)=\"on()\" *ngIf=\"data?.notes\">\r\n                  {{data?.notes}}\r\n                </div>\r\n                <a (click)=\"onWorksheetNotesDialog(data)\" *ngIf=\"!data?.notes\" class=\"cursor-pointer\">Add</a>\r\n              </td>\r\n              <td width=\"5%\"><span\r\n                class=\"label-gray-bg-color\"> {{data?.timesheet_total_unit}}</span></td>\r\n              <td width=\"9%\" class=\"no-float-label\">\r\n                <mat-form-field [floatLabel]=\"'never'\">\r\n                  <mat-select placeholder=\"Status\" [value]=\"data.status_id.id\"\r\n                              (selectionChange)=\"onUpdateStatus(data, $event.value)\">\r\n                    <mat-option *ngFor=\"let status of worksheetStatusList;\" [value]=\"status?.id\"\r\n                                disabled=\"{{status?.is_right === 1 ? false : true}}\">\r\n                      {{status.status_name}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </td>\r\n              <td width=\"11%\">\r\n                <div class=\"word-break\">\r\n                  <div *ngFor=\"let userData of data.allocation | teamListFormate; let j = index\">\r\n                    <div *ngIf=\"userData && (userData.key === 'TM' || userData.key === 'TAM')\">\r\n                      <span class=\"fw-500\">{{userData.key}}:</span>\r\n                      <span>{{userData.value}}</span>\r\n                    </div>\r\n                    <div *ngIf=\"!userData\"> Not specify</div>\r\n                  </div>\r\n                  <div *ngIf=\"data.worksheet_additional_assignee\">\r\n                    <span class=\"fw-500\">Add. Assignee:</span>\r\n                    <span>{{data.worksheet_additional_assignee.userfullname}}</span>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td width=\"5%\">\r\n                <ul>\r\n                  <li>\r\n                    <a (click)=\"onEditTaskCheckList(data)\"\r\n                       *ngIf=\"data?.taskchecklist === 1\" class=\"orange-color\"\r\n                       [matTooltip]=\"'Task checklist'\"><i\r\n                      class=\"material-icons\">playlist_add_check</i></a>\r\n                    <mat-icon [matMenuTriggerFor]=\"menuaction\">more_vert</mat-icon>\r\n                    <mat-menu #menuaction=\"matMenu\" class=\"column-menu\">\r\n                      <button mat-menu-item class=\"menu-header\">\r\n                        <h3>Action</h3>\r\n                      </button>\r\n                      <button mat-menu-item (click)=\"openWorksheetStatusLogDialog(data)\">\r\n                        <mat-icon>history</mat-icon>\r\n                        Worksheet status log\r\n                      </button>\r\n                      <button mat-menu-item (click)=\"onPrepareQuery(data)\" *ngIf=\"data?.task_id?.id === 5 || data?.task_id?.id === 23\">\r\n                        <mat-icon>query_builder</mat-icon>\r\n                        Prepare Query\r\n                      </button>\r\n                      <button mat-menu-item (click)=\"onAddTimeSheet(data)\"\r\n                              *ngIf=\"userInfo?.user_timesheet_fillup_flag === 1\">\r\n                        <mat-icon>alarm_add</mat-icon>\r\n                        Add Timesheet\r\n                      </button>\r\n                      <button mat-menu-item (click)=\"onAddUsersTimeSheet(data)\"\r\n                              *ngIf=\"userInfo?.user_timesheet_fillup_flag === 1 && isAddUserTimeSheet\">\r\n                        <mat-icon>person_add</mat-icon>\r\n                        Add User Timesheet\r\n                      </button>\r\n                      <button mat-menu-item (click)=\"onViewUserTimesheet(data)\">\r\n                        <mat-icon>remove_red_eye</mat-icon>\r\n                        View User Timesheet\r\n                      </button>\r\n                      <button mat-menu-item (click)=\"onAllocateAssigneeDialog(data)\"\r\n                              *ngIf=\"isWorksheetAdditionalAssignee\">\r\n                        <mat-icon\r\n                          *ngIf=\"data.worksheet_additional_assignee === null\">person_outline\r\n                        </mat-icon>\r\n                        <mat-icon *ngIf=\"data.worksheet_additional_assignee !== null\">how_to_reg</mat-icon>\r\n                        Allocate Additional\r\n                        Assignee\r\n                      </button>\r\n                    </mat-menu>\r\n                  </li>\r\n                </ul>\r\n\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"trIndex === i\" class=\"inner-data\">\r\n              <div class=\"row PT-10\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"inner-data__view-notes\">\r\n                    <div>Notes</div>\r\n                    <div>{{data.notes}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"inner-data__view\">\r\n                    <div>Category</div>\r\n                    <div>{{getCategoryName(data.category_id)}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <span *ngFor=\"let userData of data.allocation | teamListFormate;\">\r\n                    <span *ngIf=\"userData && (userData.key !== 'TM' && userData.key !== 'TAM')\">\r\n                    <div class=\"inner-data__view\">\r\n                        <div>{{userData.key}}</div>\r\n                        <div>{{userData.value}}</div>\r\n                    </div>\r\n                      </span>\r\n                      </span>\r\n                </div>\r\n              </div>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"worksheetListData.length\">\r\n      <table>\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"10\">\r\n            <mat-paginator [length]=\"totalRecords\"\r\n                           [pageSize]=\"pageSize\"\r\n                           [pageIndex]=\"pageIndex\"\r\n                           [pageSizeOptions]=\"pageArray\"\r\n                           (page)=\"onPageChange($event)\">\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"worksheetListData.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- review on knock back worksheet html over-->\r\n</div>\r\n\r\n<!--Delete table row-->\r\n<div *ngIf=\"selectedWorksheetIDs.length > 0\" class=\"bottom-panel-action\">\r\n  <button (click)=\"onConfirmationDialogDeleteWorksheet()\" type=\"button\" class=\"btn-bordered btn-white\">DELETE SELECTED\r\n    WORKSHEET >\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/myworksheet/myworksheet.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/myworksheet/myworksheet.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid_select_8rem .mat-form-field {\n  width: 120px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vd29ya2Zsb3ctbW9kdWxlL3dvcmtzaGVldC1tb2R1bGUvd29ya3NoZWV0LWRhc2hib2FyZC10YWIvbXl3b3Jrc2hlZXQvQzpcXHdhbXA2NFxcd3d3XFxoa19mcm9udGVuZC9wcm9qZWN0c1xcYWRtaW5cXHNyY1xcYXBwXFxhZG1pblxcd29ya2Zsb3ctbW9kdWxlXFx3b3Jrc2hlZXQtbW9kdWxlXFx3b3Jrc2hlZXQtZGFzaGJvYXJkLXRhYlxcbXl3b3Jrc2hlZXRcXG15d29ya3NoZWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksdUJBQXVCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvYWRtaW4vc3JjL2FwcC9hZG1pbi93b3JrZmxvdy1tb2R1bGUvd29ya3NoZWV0LW1vZHVsZS93b3Jrc2hlZXQtZGFzaGJvYXJkLXRhYi9teXdvcmtzaGVldC9teXdvcmtzaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkX3NlbGVjdF84cmVtIHtcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/myworksheet/myworksheet.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/myworksheet/myworksheet.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: Views, MyworksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyworksheetComponent", function() { return MyworksheetComponent; });
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _worksheet_dashboard_action_worksheet_status_log_dialog_worksheet_status_log_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog.ts");
/* harmony import */ var _worksheet_dashboard_action_complete_worksheet_status_dialog_complete_worksheet_status_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../worksheet-dashboard-action/complete-worksheet-status-dialog/complete-worksheet-status-dialog.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/complete-worksheet-status-dialog/complete-worksheet-status-dialog.component.ts");
/* harmony import */ var _worksheet_dashboard_action_worksheet_notes_dialog_worksheet_notes_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component.ts");
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








// crud











var Views;
(function (Views) {
    Views[Views["FILTER_VIEW_MAIN"] = 0] = "FILTER_VIEW_MAIN";
})(Views || (Views = {}));
var MyworksheetComponent = /** @class */ (function (_super) {
    __extends(MyworksheetComponent, _super);
    function MyworksheetComponent(_fb, dialog, _commonCrudService, _router, _sharedObjService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this._commonCrudService = _commonCrudService;
        _this._router = _router;
        _this._sharedObjService = _sharedObjService;
        _this._sharedService = _sharedService;
        // Constant Variables
        _this.enumView = Views;
        _this.isDeleteItem = false;
        // Data Variables
        _this.worksheetListData = [];
        _this.worksheetStatusCounter = [];
        _this.slideData = [];
        _this.userList = [];
        _this.masterActivityList = [];
        _this.taskList = [];
        _this.worksheetStatusList = [];
        _this.statusArray = [];
        _this.totalCount = 0;
        _this.totalCountAll = 0;
        _this.totalCountUnallocate = 0;
        _this.totalCountAllocate = 0;
        _this.selectedDataMain = 'all';
        _this.clientList = [];
        _this.clientListParent = [];
        _this.filteredTradingClientList = [];
        _this.frequencyList = [];
        _this.taskDataMain = [];
        _this.categoryData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["category"];
        _this.staffList = [];
        _this.tamList = [];
        _this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["yesNo"];
        _this.worksheetLockList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["worksheetStatusLog"];
        _this.PeriodFromValue = null;
        _this.PeriodToValue = null;
        _this.DueDateFromValue = null;
        _this.DueDateToValue = null;
        _this.noteToUpdate = [];
        // pagination Data
        _this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["BASE"].PAGINATION_ARRAY;
        _this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        _this.isOpenHistoryDialog = false;
        _this.isOpenFilterView = false;
        _this.isOpenFilter = false;
        _this.equalJSON = {};
        _this.likeJSON = {};
        _this.inJSON = {};
        // State variables
        _this.trIndex = -1;
        _this.isPlay = [];
        _this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.selectedWorksheetIDs = [];
        _this.selectAllWorksheetIDS = false;
        _this.isMultipleStatusUpdate = false;
        _this.isMultipleWorksheetDelete = false;
        _this.isWorksheetAdditionalAssignee = false;
        _this.isAddUserTimeSheet = false;
        _this.canChangeDueDate = false;
        _this.canChangePeriodStartEndDate = false;
        _this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"].WORKFLOW_MYWORKSHEET;
        _this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
        _this.todayDate = '';
        _this.tabTimeSheetID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"].WORKFLOW_TIMESHEET;
        return _this;
    }
    Object.defineProperty(MyworksheetComponent.prototype, "parent_id", {
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "entity_id", {
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "master_activity_id", {
        get: function () {
            return this.filterForm.get('master_activity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "task_id", {
        get: function () {
            return this.filterForm.get('task_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "frequency_id", {
        get: function () {
            return this.filterForm.get('frequency_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "start_date", {
        get: function () {
            return this.filterForm.get('start_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "end_date", {
        get: function () {
            return this.filterForm.get('end_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "due_date_from", {
        get: function () {
            return this.filterForm.get('due_date_from');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "due_date_to", {
        get: function () {
            return this.filterForm.get('due_date_to');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "category_id", {
        get: function () {
            return this.filterForm.get('category_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "related_entity", {
        get: function () {
            return this.filterForm.get('related_entity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "status_id", {
        get: function () {
            return this.filterForm.get('status_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "lock_worksheet", {
        get: function () {
            return this.filterForm.get('lock_worksheet');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "technical_account_manager", {
        get: function () {
            return this.filterForm.get('technical_account_manager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "team_member", {
        get: function () {
            return this.filterForm.get('team_member');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyworksheetComponent.prototype, "additional_assignee", {
        get: function () {
            return this.filterForm.get('additional_assignee');
        },
        enumerable: true,
        configurable: true
    });
    MyworksheetComponent.prototype.ngOnInit = function () {
        this.userInfo = this._sharedService.getUser();
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format('YYYY-MM-DD');
        this.isMultipleStatusUpdate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetstatuschange', 1);
        this.isMultipleWorksheetDelete = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetdelete', 1);
        this.isWorksheetAdditionalAssignee = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'worksheetadditionalassignee', 1);
        this.canChangePeriodStartEndDate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'canchangeperiodstartdate_enddate', 1);
        this.canChangeDueDate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'canchangeduedate', 1);
        this.isAddUserTimeSheet = this._sharedService.checkUserPrivileges(this.tabTimeSheetID, 'otherRights', 'otherRights', 'button_name', 'add_user_timesheet', 1);
        this.createAdvanceFilterForm();
        this.getDropdownData();
        this.setAdvanceFilter(this.filterForm);
    };
    /**
     * Get frequency data
     */
    MyworksheetComponent.prototype.getDropdownData = function () {
        var _this = this;
        // Get Frequency
        this._sharedObjService.getFrequency({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.frequencyList = response;
        });
        // Get Client
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = _this.filteredTradingClientList = response;
            _this.clientListParent = response.filter(function (item) { return item.is_parent === 1; });
        });
        // Get Master Activity
        this._sharedObjService.getMasterActivity({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.masterActivityList = response;
        });
        // Get Task
        this._sharedObjService.getTask({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.taskList = response;
        });
        // Get Worksheet Status
        this._sharedObjService.getWorksheetStatusRightsWise({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.worksheetStatusList = response;
        });
        // Get User List
        this._sharedObjService.getUserList({ 'records': 'all', "field": "user.id,user.userfullname" }, {}).subscribe(function (response) {
            _this.userList = response;
            _this.staffList = _this.userList.filter(function (data) { return (data['designation_id']) ? +data['designation_id'] === 10 : 0; });
            _this.tamList = _this.userList.filter(function (data) { return (data['designation_id']) ? +data['designation_id'] === 9 : 0; });
        });
        // My Worksheet Status Wise Counter
        // this._commonCrudService.listData(AdminAPI.MY_WORKSHEET_LISTING, {
        //   'statuscounter': 1,
        //   'records': 'all',
        //   'type': 'my'
        // }, {'compare': {'lessthanequal': {'due_date': this.todayDate}}}).subscribe(response => {
        //   this.worksheetStatusCounter = response.payload.data;
        // });
    };
    /**
     * Get Worksheet Listing
     * @param pageNumber
     * @param key
     * @param val
     */
    MyworksheetComponent.prototype.getWorksheetListing = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].MY_WORKSHEET_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleWorksheetRespone(response);
        });
    };
    /**
     * Handle Worksheet Response
     * @param response
     */
    MyworksheetComponent.prototype.handleWorksheetRespone = function (response) {
        var _this = this;
        this.worksheetListData = response.payload.data;
        this.noteToUpdate = [];
        if (this.worksheetListData) {
            this.worksheetListData.forEach(function (item) {
                _this.noteToUpdate[item.id] = item.notes;
            });
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
    MyworksheetComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            due_date_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            due_date_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date()),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            lock_worksheet: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            due_date_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            due_date_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date()),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            lock_worksheet: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
    };
    /**
     * Add Edit Master Activity Dialog
     */
    MyworksheetComponent.prototype.openAddEditMasterActivityDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_12__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
            data: {
                rkData: data
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getWorksheetListing(1, 'due_date', 'asc');
        });
    };
    /**
     * Toogle Filter
     */
    MyworksheetComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Pagination page change event
     * @param event
     */
    MyworksheetComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getWorksheetListing(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    MyworksheetComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.filterForm.reset();
        this.advanceFilterForm.reset();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.PeriodFromValue = null;
        this.PeriodToValue = null;
        this.DueDateFromValue = null;
        this.DueDateToValue = null;
        this.isOpenFilter = false;
        this.getWorksheetListing(1, 'due_date', 'asc');
    };
    /**
     * Esc event for close modal
     * @param event
     */
    MyworksheetComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    MyworksheetComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getWorksheetListing(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    MyworksheetComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        if (this.PeriodFromValue || this.DueDateFromValue) {
            filter['greaterthanequal'] = {};
        }
        if (this.PeriodToValue || this.DueDateToValue) {
            filter['lessthanequal'] = {};
        }
        if (this.PeriodFromValue) {
            filter['greaterthanequal']['start_date'] = moment__WEBPACK_IMPORTED_MODULE_11__(this.PeriodFromValue).format('YYYY-MM-DD');
        }
        if (this.PeriodToValue) {
            filter['lessthanequal']['end_date'] = moment__WEBPACK_IMPORTED_MODULE_11__(this.PeriodToValue).format('YYYY-MM-DD');
        }
        if (this.DueDateFromValue) {
            filter['greaterthanequal']['due_date'] = moment__WEBPACK_IMPORTED_MODULE_11__(this.DueDateFromValue).format('YYYY-MM-DD');
        }
        if (this.DueDateToValue) {
            filter['lessthanequal']['due_date'] = moment__WEBPACK_IMPORTED_MODULE_11__(this.DueDateToValue).format('YYYY-MM-DD');
        }
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_14__["CommonFunctions"].isEmpty(filter)) {
            params['compare'] = filter;
        }
        if (Object.keys(this.inJSON).length !== 0) {
            params['in'] = this.inJSON;
        }
        return params;
    };
    /**
     * Download Excel File
     */
    MyworksheetComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all', 'type': 'my' };
        if (this.tamId) {
            params['technical_account_manager'] = this.tamId;
        }
        if (this.teamId) {
            params['team_member'] = this.teamId;
        }
        if (this.assigneeId) {
            params['additional_assignee'] = this.assigneeId;
        }
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].MY_WORKSHEET_LISTING, params, this.getSearchParam(), 'My Worksheet ', 0).subscribe(function (response) {
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    MyworksheetComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'parent_id': form.value['parent_id'],
                'entity_id': form.value['entity_id'],
                'master_activity_id': form.value['master_activity_id'],
                'task_id': form.value['task_id'],
                'frequency_id': form.value['frequency_id'],
                'start_date': form.value['start_date'],
                'end_date': form.value['end_date'],
                'due_date_from': form.value['due_date_from'],
                'due_date_to': form.value['due_date_to'],
                'category_id': form.value['category_id'],
                'related_entity': form.value['related_entity'],
                'status_id': form.value['status_id'],
                'technical_account_manager': form.value['technical_account_manager'],
                'team_member': form.value['team_member'],
                'additional_assignee': form.value['additional_assignee'],
                'lock_worksheet': form.value['lock_worksheet']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    MyworksheetComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        // removing empty key from objectsetAdvanceFilterKeyUp
        for (var key in form.value) {
            if (form.value.hasOwnProperty(key)) {
                if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined || form.value[key] === 'undefined' || form.value[key] === []) {
                    delete form.value[key];
                }
                else {
                    if (flag) {
                        this.advanceFilterForm.get(key).setValue(form.value[key]);
                    }
                }
            }
        }
        if (form.value['start_date'] !== '' && form.value['start_date']) {
            this.PeriodFromValue = form.value['start_date'];
            delete form.value['start_date'];
        }
        if (form.value['end_date'] !== '' && form.value['end_date']) {
            this.PeriodToValue = form.value['end_date'];
            delete form.value['end_date'];
        }
        if (form.value['due_date_from'] !== '' && form.value['due_date_from']) {
            this.DueDateFromValue = form.value['due_date_from'];
            delete form.value['due_date_from'];
        }
        if (form.value['due_date_to'] !== '' && form.value['due_date_to']) {
            this.DueDateToValue = form.value['due_date_to'];
            delete form.value['due_date_to'];
        }
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'entity_id' || key === 'frequency_id' || key === 'parent_id'
                        || key === 'related_entity' || key === 'status_id' || key === 'lock_worksheet') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'category_id' || key === 'master_activity_id' || key === 'task_id') {
                        if (form.value[key].length) {
                            this.inJSON[key] = form.value[key].join(',');
                        }
                    }
                }
            }
            this.tamId = form.value['technical_account_manager'];
            this.teamId = form.value['team_member'];
            this.assigneeId = form.value['additional_assignee'];
            this.isOpenFilterView = false;
            this.getWorksheetListing(1, 'due_date', 'asc');
        }
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    MyworksheetComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'technical_account_manager') {
            this.tamId = '';
        }
        else if (elementName === 'team_member') {
            this.teamId = '';
        }
        else if (elementName === 'additional_assignee') {
            this.assigneeId = '';
        }
        else if (elementName === 'start_date') {
            this.PeriodFromValue = null;
        }
        else if (elementName === 'end_date') {
            this.PeriodToValue = null;
        }
        else if (elementName === 'due_date_from') {
            this.DueDateFromValue = null;
        }
        else if (elementName === 'due_date_to') {
            this.DueDateToValue = null;
        }
        else if (elementName === 'entity_id' || elementName === 'frequency_id' || elementName === 'parent_id'
            || elementName === 'related_entity' || elementName === 'status_id' || elementName === 'lock_worksheet') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'category_id' || elementName === 'master_activity_id' || elementName === 'task_id') {
            delete this.inJSON[elementName];
        }
        this.getWorksheetListing(1, 'due_date', 'asc');
    };
    /**
     * On Change Set Filter Field Value
     * @param value
     */
    MyworksheetComponent.prototype.onChangeUpdateFilterField = function (value) {
        if (value.toString() !== '') {
            this.filterForm.get('status_id').setValue(value.toString());
            this.advanceFilterForm.get('status_id').setValue(value.toString());
        }
        else {
            this.filterForm.get('status_id').setValue(null);
            this.advanceFilterForm.get('status_id').setValue(null);
        }
        this.setAdvanceFilter(this.filterForm);
    };
    /**
     * Get Task Filter List
     * @param value
     */
    MyworksheetComponent.prototype.getTaskFilterList = function (value) {
        var _this = this;
        // console.log(value);
        // Get Task
        if (value) {
            var itemData = value.map(function (x) { return x.id; });
            this._sharedObjService.getTask({ 'records': 'all' }, { 'in': { 'master_activity_id': itemData.join(',') } }).subscribe(function (response) {
                _this.taskList = response;
            });
        }
        else {
            this._sharedObjService.getTask({ 'records': 'all' }, {}).subscribe(function (response) {
                _this.taskList = response;
            });
        }
    };
    /**
     * Add Edit Sub Activity Dialog
     */
    MyworksheetComponent.prototype.openAddEditSubActivityDialog = function () {
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_12__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Open filter
     */
    MyworksheetComponent.prototype.onOpenFilter = function () {
        this.activeView = this.enumView.FILTER_VIEW_MAIN;
    };
    /**
     * Expand row table
     * @param i
     */
    MyworksheetComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Close filter
     */
    MyworksheetComponent.prototype.onCloseFilter = function () {
        this.activeView = null;
    };
    /**
     * Close modal
     * @param event
     */
    MyworksheetComponent.prototype.onCloseDialog = function (event) {
        this.activeView = event;
    };
    /**
     * On delete table row
     */
    MyworksheetComponent.prototype.onDeleteItem = function (event) {
        this.deleteItem.emit(event);
    };
    /**
     * View timesheet page redirect
     */
    MyworksheetComponent.prototype.onViewTimeSheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * Task CEhcklist page redirect
     */
    MyworksheetComponent.prototype.onTaskChecklist = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * redirection worksheet dashboard
     */
    MyworksheetComponent.prototype.onWorksheetDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * Review Allocation page redirection
     */
    MyworksheetComponent.prototype.openReviewAllocateDialog = function () {
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_12__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Get All Status
     */
    MyworksheetComponent.prototype.getAllStatus = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].GET_ALL_STATUS, {}, {}).subscribe(function (response) {
            _this.statusArray = response.payload.data;
        });
    };
    /**
     * Update Due Date + Period Start + End Date + Reminder Date
     * @param object
     */
    MyworksheetComponent.prototype.updateInlineFormDates = function (object) {
        var _this = this;
        var _a;
        var keyData = object.key;
        if (keyData === 'start_date' || keyData === 'end_date' || keyData === 'due_date' || keyData === 'reminder_date') {
            object.value = moment__WEBPACK_IMPORTED_MODULE_11__(object.value).format('YYYY-MM-DD');
        }
        if (object.value) {
            // Update worksheet date
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].UPDATE_WORKSHEET, object.id, (_a = {},
                _a[object.key] = object.value,
                _a['_method'] = 'put',
                _a)).subscribe(function (response) {
                _this.getWorksheetListing(1, 'due_date', 'asc');
            });
        }
    };
    /**
     * Update Due Date + Period Start + End Date + Reminder Date
     * @param object
     */
    MyworksheetComponent.prototype.onUpdateStatus = function (worksheetData, statusChanged) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to change worksheet status?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value && worksheetData && statusChanged) {
                // console.log(value && worksheetData && statusChanged);
                // If selected status ready for review
                if (worksheetData.taskchecklist === 1 && (statusChanged === 2)) {
                    // If additional assignee can not edit by team member
                    if ((worksheetData.worksheet_additional_assignee !== null) && (worksheetData.worksheet_additional_assignee.id === _this.userInfo.id)) {
                        _this.onEditTaskCheckList(worksheetData, 0);
                    }
                    else if (worksheetData['team_json'] !== null) {
                        // If team member is equal to allocated team member then user can edit else not
                        var teamData = JSON.parse(worksheetData['team_json']);
                        if (teamData[10] === _this.userInfo.id) {
                            _this.onEditTaskCheckList(worksheetData, 0);
                        }
                        else {
                            _this.onEditTaskCheckList(worksheetData, 1);
                        }
                    }
                    else {
                        _this.onEditTaskCheckList(worksheetData, 1);
                    }
                }
                else if (worksheetData.taskchecklist === 1 && (statusChanged === 13 && worksheetData.status_id.id === 15)) {
                    // If selected status report sent
                    if (worksheetData['team_json'] !== null) {
                        var teamData = JSON.parse(worksheetData['team_json']);
                        if (teamData[9] === _this.userInfo.id || teamData[60] === _this.userInfo.id) {
                            _this.onEditTaskCheckList(worksheetData, 0);
                        }
                        else {
                            _this.onEditTaskCheckList(worksheetData, 1);
                        }
                    }
                    else {
                        _this.onEditTaskCheckList(worksheetData, 1);
                    }
                }
                else if (worksheetData.is_repeat_task === 1 && statusChanged === 4) {
                    var dialogRefData = _this.dialog.open(_worksheet_dashboard_action_complete_worksheet_status_dialog_complete_worksheet_status_dialog_component__WEBPACK_IMPORTED_MODULE_17__["CompleteWorksheetStatusDialogComponent"], {
                        data: {
                            worksheetItem: worksheetData
                        }
                    });
                    dialogRefData.afterClosed().subscribe(function (valueData) {
                        _this.getWorksheetListing(1, 'due_date', 'asc');
                    });
                }
                else {
                    _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].UPDATE_WORKSHEET, worksheetData.id, {
                        'status_id': statusChanged,
                        '_method': 'put'
                    }).subscribe(function (response) {
                        _this.getWorksheetListing(1, 'due_date', 'asc');
                    });
                }
            }
        });
    };
    /**
     * On Change Update Notes Param
     * @param notes
     */
    MyworksheetComponent.prototype.onChangeUpdateNotesParam = function (notes, id) {
        this.noteToUpdate[id] = notes;
    };
    /**
     * On Submit Update Notes
     * @param id
     */
    MyworksheetComponent.prototype.onSubmitUpdateNotes = function (id) {
        var _this = this;
        var notes = this.noteToUpdate[id];
        if (notes) {
            // Update worksheet date
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].UPDATE_WORKSHEET, id, {
                'notes': this.noteToUpdate[id],
                '_method': 'put'
            }).subscribe(function (response) {
                _this.getWorksheetListing(1, 'due_date', 'asc');
            });
        }
    };
    /**
     * Open worksheet status log modal
     */
    MyworksheetComponent.prototype.openWorksheetStatusLogDialog = function (worksheetData) {
        var dialogRef = this.dialog.open(_worksheet_dashboard_action_worksheet_status_log_dialog_worksheet_status_log_dialog__WEBPACK_IMPORTED_MODULE_16__["WorksheetStatusLogDialog"], {
            panelClass: 'worksheet-status-log-container',
            data: {
                dataWorksheet: worksheetData
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * On timesheet page redirect
     */
    MyworksheetComponent.prototype.onAddTimeSheet = function (worksheetData) {
        if (worksheetData) {
            this._sharedService.setWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["GLOBALDATAKEYS"].WORKSHEET_ITEM_DATA, worksheetData);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].ADD_TIMESHEET, '_blank');
            });
            // this._router.navigate(['/' + AdminRoutes.ADD_TIMESHEET]);
        }
    };
    /**
     * On users timesheet page redirect
     */
    MyworksheetComponent.prototype.onAddUsersTimeSheet = function (worksheetData) {
        if (worksheetData) {
            this._sharedService.setWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["GLOBALDATAKEYS"].WORKSHEET_ITEM_DATA, worksheetData);
            // this._router.navigate(['/' + AdminRoutes.ADD_USERS_TIMESHEET]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].ADD_USERS_TIMESHEET, '_blank');
            });
        }
    };
    /**
     * On click of view timesheet
     * @param worksheetData
     */
    MyworksheetComponent.prototype.onViewUserTimesheet = function (worksheetData) {
        var jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_14__["convertURLParamToEncode"])({
            'entity_id': worksheetData.entity_id,
            'start_date': worksheetData.start_date,
            'end_date': worksheetData.end_date,
            'viewTimesheet': 1,
            'task_id': worksheetData.task_id.id
        });
        if (jsonData) {
            this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET], { queryParams: jsonData });
        }
    };
    /**
     * On task checklist redirect
     */
    MyworksheetComponent.prototype.onEditTaskCheckList = function (data, isReadOnly) {
        // If Read Only Then Redirect to other page
        if (isReadOnly === 1) {
            this._sharedService.setChecklistViewData(null);
            this._sharedService.setChecklistViewData(data);
            // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].TASK_CHECKLIST, '_blank');
            });
        }
        else if (data) {
            if (data.taskchecklist === 1 && (data.status_id.id < 2 || data.status_id.id === 9)) {
                // If additional assignee can not edit by team member
                if ((data.worksheet_additional_assignee !== null) && (data.worksheet_additional_assignee.id === this.userInfo.id)) {
                    this._sharedService.setChecklistData(null);
                    this._sharedService.setChecklistData(data);
                    // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST]);
                    this._router.navigate([]).then(function (result) {
                        window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].EDIT_TASK_CHECKLIST, '_blank');
                    });
                }
                else if (data['team_json'] !== null && data['team_json'] !== "") {
                    // If team member is equal to allocated team member then user can edit else not
                    var teamData = JSON.parse(data['team_json']);
                    if (teamData[10] === this.userInfo.id) {
                        this._sharedService.setChecklistData(null);
                        this._sharedService.setChecklistData(data);
                        // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST]);
                        this._router.navigate([]).then(function (result) {
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].EDIT_TASK_CHECKLIST, '_blank');
                        });
                    }
                    else {
                        this._sharedService.setChecklistViewData(null);
                        this._sharedService.setChecklistViewData(data);
                        // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                        this._router.navigate([]).then(function (result) {
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                        });
                    }
                }
                else {
                    this._sharedService.setChecklistViewData(null);
                    this._sharedService.setChecklistViewData(data);
                    // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                    this._router.navigate([]).then(function (result) {
                        window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                    });
                }
            }
            else if (data.taskchecklist === 1 && (data.status_id.id === 15 || data.status_id.id === 18)) {
                // If selected status report sent
                if (data['team_json'] !== null && data['team_json'] !== "") {
                    var teamData = JSON.parse(data['team_json']);
                    if (teamData[9] === this.userInfo.id || teamData[60] === this.userInfo.id) {
                        this._sharedService.setTamReviewChecklistData(null);
                        this._sharedService.setTamReviewChecklistData(data);
                        // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST_TAM]);
                        this._router.navigate([]).then(function (result) {
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].EDIT_TASK_CHECKLIST_TAM, '_blank');
                        });
                    }
                    else {
                        this._sharedService.setChecklistViewData(null);
                        this._sharedService.setChecklistViewData(data);
                        // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                        this._router.navigate([]).then(function (result) {
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                        });
                    }
                }
                else {
                    this._sharedService.setChecklistViewData(null);
                    this._sharedService.setChecklistViewData(data);
                    // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                    this._router.navigate([]).then(function (result) {
                        window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                    });
                }
            }
            else if (data.taskchecklist === 1 && (data.status_id.id === 22) && (data.worksheet_peerreviewer !== null) && (data.worksheet_peerreviewer.id === this.userInfo.id)) {
                this._sharedService.setPeerReviewChecklistData(null);
                this._sharedService.setPeerReviewChecklistData(data);
                // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST_PEER_REVIEW]);
                this._router.navigate([]).then(function (result) {
                    window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].EDIT_TASK_CHECKLIST_PEER_REVIEW, '_blank');
                });
            }
            else if (data.taskchecklist === 1 && (data.status_id.id === 17)) {
                if (data['team_json'] !== null && data['team_json'] !== "") {
                    var teamData = JSON.parse(data['team_json']);
                    if (teamData[9] === this.userInfo.id || teamData[60] === this.userInfo.id) {
                        this._sharedService.setReviewChecklistData(null);
                        this._sharedService.setReviewChecklistData(data);
                        // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST_KNOCKBACK]);
                        this._router.navigate([]).then(function (result) {
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].EDIT_TASK_CHECKLIST_KNOCKBACK, '_blank');
                        });
                    }
                    else {
                        this._sharedService.setChecklistViewData(null);
                        this._sharedService.setChecklistViewData(data);
                        // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                        this._router.navigate([]).then(function (result) {
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                        });
                    }
                }
                else {
                    this._sharedService.setChecklistViewData(null);
                    this._sharedService.setChecklistViewData(data);
                    // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                    this._router.navigate([]).then(function (result) {
                        window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                    });
                }
            }
            else {
                this._sharedService.setChecklistViewData(null);
                this._sharedService.setChecklistViewData(data);
                // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                this._router.navigate([]).then(function (result) {
                    window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                });
            }
        }
    };
    /**
     * on edit master activity account data
     * @param data
     */
    MyworksheetComponent.prototype.onEditTaskCheckListAccount = function (data) {
        // console.log('td');
        if (data.status_id.id < 2 || data.status_id.id === 9) {
            this._sharedService.setChecklistData(null);
            this._sharedService.setChecklistData(data);
            // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].EDIT_TASK_CHECKLIST, '_blank');
            });
        }
        else {
            this._sharedService.setChecklistViewData(null);
            this._sharedService.setChecklistViewData(data);
            // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].TASK_CHECKLIST, '_blank');
            });
        }
    };
    MyworksheetComponent.prototype.onPreviewEmail = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].TASK_CHECKLIST_EMAIL_PREVIEW]);
    };
    MyworksheetComponent.prototype.onAllocateAssigneeDialog = function (worksheet) {
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_12__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
            data: {
                allocateData: worksheet,
                isadditionalAssignee: 1
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.getMasterActivityList(1, '', 'desc');
        });
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    MyworksheetComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Status List
     * @param {number} cat_id
     * @returns {string}
     */
    MyworksheetComponent.prototype.getCategoryName = function (cat_id) {
        var val = this.categoryData.filter(function (elem) { return elem.key === Number(cat_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Select All Item of Event
     * @param event
     */
    MyworksheetComponent.prototype.onSelectAllItem = function (event) {
        var _this = this;
        this.selectedWorksheetIDs = [];
        if (event) {
            this.selectAllWorksheetIDS = true;
            var items = this.worksheetListData.filter(function (data) { return (data.id > 0 && data.timesheet_total_unit === 0); });
            if (items) {
                items.forEach(function (value) {
                    _this.selectedWorksheetIDs.push(value.id);
                });
            }
        }
        else {
            this.selectAllWorksheetIDS = false;
        }
    };
    /**
     * On Click of Item
     * @param event
     */
    MyworksheetComponent.prototype.onSelectItem = function (event, id) {
        if (event) {
            this.selectedWorksheetIDs.push(id);
        }
        else {
            var index = this.selectedWorksheetIDs.indexOf(id);
            if (index !== -1) {
                this.selectedWorksheetIDs.splice(index, 1);
            }
        }
    };
    /**
     * Used for delete multiple worksheet
     */
    MyworksheetComponent.prototype.onConfirmationDialogDeleteWorksheet = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete worksheet?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value && _this.selectedWorksheetIDs) {
                var params = _this.selectedWorksheetIDs.join(',');
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].DELETE_WORKSHEET, 0, params).subscribe(function (response) {
                    _this.selectedWorksheetIDs = [];
                    _this.getWorksheetListing(1, 'due_date', 'asc');
                });
            }
        });
    };
    /**
     * Worksheet Notes Dialog
     * @param worksheetData
     */
    MyworksheetComponent.prototype.onWorksheetNotesDialog = function (worksheetData) {
        var _this = this;
        var dialogRef = this.dialog.open(_worksheet_dashboard_action_worksheet_notes_dialog_worksheet_notes_dialog_component__WEBPACK_IMPORTED_MODULE_18__["WorksheetNotesDialogComponent"], {
            width: '50vw',
            data: {
                worksheetItem: worksheetData
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.setAdvanceFilter(_this.filterForm);
            }
        });
    };
    /**
     *  on redirect prepare query
     */
    MyworksheetComponent.prototype.onPrepareQuery = function (worksheetData) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["GLOBALDATAKEYS"].QUERY_WORKSHEET_MODULE, null);
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["GLOBALDATAKEYS"].QUERY_WORKSHEET_MODULE, worksheetData);
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].PREPARE_QUERY, '_blank');
        });
    };
    /**
     * Get Query Params
     * @param page
     * @param sortKey
     * @param sortOrder
     */
    MyworksheetComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
        var params = {
            pageNumber: page,
            recordsPerPage: this.pageSize,
        };
        if (sortKey) {
            params['sortBy'] = sortKey;
        }
        if (sortOrder) {
            params['sortOrder'] = sortOrder;
        }
        if (this.tamId) {
            params['technical_account_manager'] = this.tamId;
        }
        if (this.teamId) {
            params['team_member'] = this.teamId;
        }
        if (this.assigneeId) {
            params['additional_assignee'] = this.assigneeId;
        }
        params['type'] = 'my';
        return params;
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    MyworksheetComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], MyworksheetComponent.prototype, "myWorksheetCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], MyworksheetComponent.prototype, "deleteItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MyworksheetComponent.prototype, "onKeydownHandler", null);
    MyworksheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myworksheet',
            template: __webpack_require__(/*! ./myworksheet.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/myworksheet/myworksheet.component.html"),
            styles: [__webpack_require__(/*! ./myworksheet.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/myworksheet/myworksheet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_13__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_0__["SharedService"]])
    ], MyworksheetComponent);
    return MyworksheetComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=default~worksheet-dashboard-tab-worksheet-dashboard-tab-module~worksheet-module-worksheet-module~wor~2db14f82.js.map