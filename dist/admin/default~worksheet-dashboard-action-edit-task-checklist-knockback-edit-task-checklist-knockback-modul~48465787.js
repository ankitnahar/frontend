(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~worksheet-dashboard-action-edit-task-checklist-knockback-edit-task-checklist-knockback-modul~48465787"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/edit-task-checklist-knockback/add-new-reviewe-timesheet-dialog/add-new-reviewe-timesheet-dialog.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/edit-task-checklist-knockback/add-new-reviewe-timesheet-dialog/add-new-reviewe-timesheet-dialog.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Favorite menu dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">ADD TIMESHEET</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n\r\n  <div class=\"add-timesheet-container\">\r\n    <form [formGroup]=\"addTimesheetForm\" #addEditTimesheetDataForm=\"ngForm\"\r\n          (submit)=\"onSubmitTimesheet(addTimesheetForm)\">\r\n      <div class=\"modal__body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-1 PR-0\">\r\n            <mat-form-field>\r\n              <input formControlName=\"date\" matInput [matDatepicker]=\"date\" placeholder=\"Date\" [disableControl]=\"true\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\r\n              <mat-datepicker #date></mat-datepicker>\r\n            </mat-form-field>\r\n            <div class=\"validation-msg\"></div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Parent Trading Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [disableControl]=\"true\"\r\n                       (change)=\"onChangeParentEntity($event)\"\r\n                       formControlName=\"parent_id\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <ng-select class=\"custom\" [items]=\"clientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [disableControl]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"getMasterActivityList()\"\r\n                       formControlName=\"entity_id\">\r\n            </ng-select>\r\n            <div class=\"validation-msg\"></div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"master_activity_id\" placeholder=\"Master activity\"\r\n                          (selectionChange)=\"getTaskFilterList($event.value)\" [disableControl]=\"true\">\r\n                <mat-option *ngFor=\"let masterActivity of masterActivityList;\" [value]=\"+masterActivity.id\">\r\n                  {{masterActivity.name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"task_id\" placeholder=\"Task\" [disableControl]=\"true\"\r\n                          (selectionChange)=\"getSubactivityFilterList($event.value);getFrequencyList()\">\r\n                <mat-option *ngFor=\"let task of taskList;\" [value]=\"+task.id\">\r\n                  {{task.name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"validation-msg\"></div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"worksheet_frequency_id\" placeholder=\"Frequency\" [disableControl]=\"true\">\r\n                <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                  {{frequency.frequency_name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"validation-msg\"></div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"period_id\" placeholder=\"Period\" [disableControl]=\"true\">\r\n                <mat-option *ngFor=\"let period of periodList;\" [value]=\"period['worksheet_id']\">\r\n                  {{period['start_date'] | date : 'dd-MM-yyyy'}} To {{period['end_date'] | date : 'dd-MM-yyyy'}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"validation-msg\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-7\">\r\n            <ng-select [items]=\"subActivityList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"subactivity_full_name\"\r\n                       placeholder=\"Sub Activity\"\r\n                       bindValue=\"subactivity_code\"\r\n                       [virtualScroll]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"UpdateFormControl(); UpdateFormControlEmployee(); hideShowFields($event);\"\r\n                       formControlName=\"subactivity_code\">\r\n            </ng-select>\r\n            <div class=\"validation-msg\">\r\n              <app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('subactivity_code'))\"\r\n                              [errMsg]=\"validationMsg.ADD_TIMESHEET_SUB_ACTIVITY_REQUIRED\"></app-validation>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 PL-0\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Start Time\" formControlName=\"start_time\" aria-label=\"Start Time\"\r\n                         (change)=\"updateUnits()\" readonly\r\n                         [ngxTimepicker]=\"starttime\" [format]=\"24\" min=\"04:30\">\r\n                  <ngx-material-timepicker (closed)=\"updateUnits()\" #starttime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n                <div class=\"validation-msg\"></div>\r\n              </div>\r\n              <div class=\"col-md-6 PR-0\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"End Time\" formControlName=\"end_time\" aria-label=\"End Time\"\r\n                         (change)=\"updateUnits()\" readonly [ngxTimepicker]=\"endtime\"\r\n                         [min]=\"addTimesheetForm.get('start_time').value\" max=\"23:30\" [format]=\"24\">\r\n                  <ngx-material-timepicker (closed)=\"updateUnits()\" #endtime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n                <div class=\"validation-msg\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <mat-form-field>\r\n              <input formControlName=\"units\" type=\"number\" max=\"180\" matInput placeholder=\"Units\" required/>\r\n            </mat-form-field>\r\n            <div class=\"validation-msg\">\r\n              <app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('units'))\"\r\n                              [errMsg]=\"validationMsg.UNIT_REQUIRED\"></app-validation>\r\n              <app-validation *ngIf=\"isValidField(addTimesheetForm.get('units'))\"\r\n                              [errMsg]=\"validationMsg.UNIT_VALID\"></app-validation>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n        <span class=\"col-md-4\" *ngFor=\"let fieldArray of getExtraFieldArray().controls; let i=index\">\r\n        <div *ngIf=\"fieldArray.value['type'] === 'TB'\">\r\n          <mat-form-field>\r\n          <input matInput [placeholder]=\"fieldArray.value['label']\"\r\n                 (change)=\"onUpdateValues(i,$event.target.value); onUpdateCompareValues(i,$event.target.value);\"/>\r\n          </mat-form-field>\r\n          <!--<div *ngIf=\"fieldArray.value['type'] === 'TB'\">-->\r\n          <!--<mat-form-field-->\r\n          <!--*ngIf=\"addTimesheetForm.get('subactivity_code').value === 462 && fieldArray.value['label'] === 'No. of Employee'\">-->\r\n          <!--<input matInput [placeholder]=\"fieldArray.value['label']\"-->\r\n          <!--(change)=\"onUpdateValues(i,$event.target.value); addEmployeeFields($event.target.value)\"/>-->\r\n          <!--</mat-form-field>-->\r\n          <!--<mat-form-field-->\r\n          <!--*ngIf=\"addTimesheetForm.get('subactivity_code').value !== 462 && fieldArray.value['label'] == 'No. of Employee'\">-->\r\n          <!--<input matInput [placeholder]=\"fieldArray.value['label']\"-->\r\n          <!--(change)=\"onUpdateValues(i,$event.target.value)\"/>-->\r\n          <!--</mat-form-field>-->\r\n          <!--<mat-form-field-->\r\n          <!--*ngIf=\"addTimesheetForm.get('subactivity_code').value !== 462 && fieldArray.value['label'] !== 'No. of Employee'\">-->\r\n          <!--<input matInput [placeholder]=\"fieldArray.value['label']\"-->\r\n          <!--(change)=\"onUpdateValues(i,$event.target.value)\"/>-->\r\n          <!--</mat-form-field>-->\r\n        <app-validation *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                        [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n           <app-validation *ngIf=\"isValidField(getExtraFieldArray().controls[i].get('value'))\"\r\n                           [errMsg]=\"fieldArray.value['msg_invalid']\"></app-validation>\r\n        </div>\r\n        <div *ngIf=\"fieldArray.value['type'] === 'DD'\">\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'frequency_id'\" class=\"custom\" [items]=\"frequencyDDList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"frequency_name\"\r\n                     placeholder=\"Frequency\"\r\n                     bindValue=\"id\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'id')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'payroll_option_id'\" class=\"custom\" [items]=\"payrollOptionList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     [(ngModel)]=\"timeSheetData[fieldArray.value['key']]\"\r\n                     [ngModelOptions]=\"{standalone: true}\"\r\n                     bindLabel=\"type_name\"\r\n                     placeholder=\"Type\"\r\n                     bindValue=\"id\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'id')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'reviewer_id'\" class=\"custom\" [items]=\"reviewerUserList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"userfullname\"\r\n                     placeholder=\"Reviewer User\"\r\n                     bindValue=\"id\"\r\n                     [(ngModel)]=\"+timeSheetData[fieldArray.value['key']]\"\r\n                     [ngModelOptions]=\"{standalone: true}\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'id')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'bank_info'\" class=\"custom\" [items]=\"bankInformation\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"bankdetail\"\r\n                     placeholder=\"Bank Information\"\r\n                     bindValue=\"bankname\"\r\n                     [(ngModel)]=\"timeSheetData['bank_cc_name'] + ':' + timeSheetData['bank_cc_account_no']\"\r\n                     [ngModelOptions]=\"{standalone: true}\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'bankname')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n           <app-validation *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                           [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n        </div>\r\n        <div *ngIf=\"fieldArray.value['type'] === 'startDate'\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"periodFrom\"\r\n                   (dateChange)=\"onUpdateDateValues(i,$event.value)\"\r\n                   placeholder=\"Start Date\" value=\"{{fieldArray.value['value']}}\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"periodFrom\"></mat-datepicker-toggle>\r\n            <mat-datepicker #periodFrom></mat-datepicker>\r\n          </mat-form-field>\r\n           <app-validation *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                           [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n        </div>\r\n        <div *ngIf=\"fieldArray.value['type'] === 'endDate'\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"periodTo\"\r\n                   value=\"{{fieldArray.value['value']}}\"\r\n                   (dateChange)=\"onUpdateDateValues(i,$event.value)\"\r\n                   placeholder=\"End Date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"periodTo\"></mat-datepicker-toggle>\r\n            <mat-datepicker #periodTo></mat-datepicker>\r\n          </mat-form-field>\r\n           <app-validation *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                           [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n        </div>\r\n        </span>\r\n        </div>\r\n        <div class=\"row\">\r\n        <span class=\"row col-md-12 PLR-0\"\r\n              *ngFor=\"let fieldemployeeArray of getNameOfEmployeeArray().controls; let j=index\">\r\n          <span class=\"col-md-6\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"First Name\" value=\"{{fieldemployeeArray.value['first_name']}}\"\r\n                 (change)=\"onUpdateEmployeeValues(j,$event.target.value, 'first_name');\"/>\r\n        </mat-form-field>\r\n        <app-validation *ngIf=\"isDynamicFieldsRequiredField(getNameOfEmployeeArray().controls[j].get('first_name'))\"\r\n                        [errMsg]=\"validationMsg.FIRST_NAME\"></app-validation>\r\n          </span>\r\n          <span class=\"col-md-6\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Last Name\" value=\"{{fieldemployeeArray.value['last_name']}}\"\r\n                 (change)=\"onUpdateEmployeeValues(j,$event.target.value, 'last_name')\"/>\r\n        </mat-form-field>\r\n        <app-validation *ngIf=\"isDynamicFieldsRequiredField(getNameOfEmployeeArray().controls[j].get('last_name'))\"\r\n                        [errMsg]=\"validationMsg.LAST_NAME\"></app-validation>\r\n          </span>\r\n        </span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <mat-form-field>\r\n              <textarea formControlName=\"notes\" matInput placeholder=\"Notes\" rows=\"5\"></textarea>\r\n            </mat-form-field>\r\n            <div class=\"validation-msg\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal__footer\">\r\n        <div class=\"text-right row\">\r\n          <div class=\"col-md-12 PR-25\">\r\n            <button [disabled]=\"addTimesheetForm.invalid\" type=\"submit\" class=\"btn-primary\"\r\n                    (click)=\"flagToSubmitUpdate(0)\">Add\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n    <!--Start add timesheet form-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/edit-task-checklist-knockback/add-new-reviewe-timesheet-dialog/add-new-reviewe-timesheet-dialog.component.ts":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/edit-task-checklist-knockback/add-new-reviewe-timesheet-dialog/add-new-reviewe-timesheet-dialog.component.ts ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: AddNewRevieweTimesheetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewRevieweTimesheetDialogComponent", function() { return AddNewRevieweTimesheetDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_timesheet_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/constants/timesheet-constant */ "./src/utility/constants/timesheet-constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
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















var AddNewRevieweTimesheetDialogComponent = /** @class */ (function (_super) {
    __extends(AddNewRevieweTimesheetDialogComponent, _super);
    function AddNewRevieweTimesheetDialogComponent(dialogRef, data, _router, _fb, _sharedService, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._router = _router;
        _this._fb = _fb;
        _this._sharedService = _sharedService;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_2__["ValidationConstantMessage"]();
        _this.clientList = [];
        _this.filteredTradingClientList = [];
        _this.parentClientList = [];
        _this.reviewerUserList = [];
        _this.bankInformation = [];
        _this.frequencyList = [];
        _this.masterActivityList = [];
        _this.taskList = [];
        _this.subActivityList = [];
        _this.timesheetConstant = _utility_constants_timesheet_constant__WEBPACK_IMPORTED_MODULE_4__["TimesheetConstantData"];
        _this.periodList = [];
        _this.payrollOptionList = [];
        _this.frequencyDDList = [];
        _this.flagToSubmit = 0;
        _this.nameOfEmp = [];
        _this.reviewCodeData = [405, 417, 422, 462, 463, 464, 468, 711];
        return _this;
    }
    AddNewRevieweTimesheetDialogComponent.prototype.ngOnInit = function () {
        this.timeSheetData = (this.data.timesheetListData) ? this.data.timesheetListData : [];
        this.nameOfEmp = (this.timeSheetData.name_of_employee !== '' && this.timeSheetData.name_of_employee !== '[]' && this.timeSheetData.name_of_employee !== null) ? JSON.parse(this.timeSheetData.name_of_employee) : [];
        this.userData = this._sharedService.getUser();
        // console.log(this.timeSheetData);
        this.getDropdownData();
        this.createTimesheetForm();
    };
    /**
     * Get Dropdown data
     */
    AddNewRevieweTimesheetDialogComponent.prototype.getDropdownData = function () {
        var _this = this;
        // Get Frequency
        this._sharedObjService.getFrequency({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.frequencyList = response;
            _this.frequencyDDList = response;
        });
        // Get Client
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = _this.filteredTradingClientList = response;
            _this.parentClientList = response.filter(function (item) { return item.is_parent === 1; });
        });
        // Get Master Activity
        this._sharedObjService.getMasterActivity({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.masterActivityList = response;
        });
        // Get Task
        this._sharedObjService.getTask({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.taskList = response;
        });
        // Get Reviewer List
        this._sharedObjService.getUserList({ 'records': 'all' }, {
            'compare': { 'equal': { 'is_active': 1 } },
            'in': { 'designation_id': '68,69,70,73,71' },
            'findinset': { 'team_id': [2] }
        }).subscribe(function (response) {
            _this.reviewerUserList = response;
        });
        // Get Bank Information List
        if (this.timeSheetData.entity_id) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_BANK_DETAILS, {
                'entity_id': this.timeSheetData.entity_id
            }, {}).subscribe(function (response) {
                _this.bankInformation = response.payload.data;
            });
        }
        // Get Subactivity
        this.getSubactivityFilterList(null);
    };
    /**
     * Address form creation
     */
    AddNewRevieweTimesheetDialogComponent.prototype.createTimesheetForm = function () {
        this.addTimesheetForm = this._fb.group({
            worksheet_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.timeSheetData) ? this.timeSheetData.worksheet_id : 0),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.timeSheetData && this.timeSheetData.parent_id > 0) ? this.timeSheetData.parent_id : null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.timeSheetData) ? this.timeSheetData.entity_id : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            worksheet_frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.timeSheetData) ? this.timeSheetData.worksheet_frequency_id : 0),
            period_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.timeSheetData) ? this.timeSheetData.worksheet_id : 0),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.timeSheetData) ? this.timeSheetData.master_id : 0),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.timeSheetData) ? this.timeSheetData.task_id : 0),
            subactivity_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.timeSheetData) ? ((this.timeSheetData.subactivity_code === 404) ? 402 : (this.timeSheetData.subactivity_code === 701) ? 711 : 0) : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            start_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            end_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            units: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_2__["CommonRegex"].NUMERIC_REGEXP), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_2__["CommonRegex"].NOT_ALLOWED_FIRST_ZERO_NUMBER_REGEXP)]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            extra_fields: this._fb.array([]),
            name_employee: this._fb.array([])
        });
        if (this.timeSheetData) {
            this.getFrequencyList();
            this.getPeriodList();
            this.getTaskFilterList(this.timeSheetData.master_id);
            // this.getSubactivityFilterList(this.timeSheetData.task_id);
            var dateItem = {};
            dateItem['subactivity_code'] = this.addTimesheetForm.get('subactivity_code').value;
            this.hideShowFields(dateItem);
        }
    };
    /**
     * Create Dynamic Employee Name Fields
     */
    AddNewRevieweTimesheetDialogComponent.prototype.createDynamicEmployeeNameFields = function (item) {
        return this._fb.group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['first_name'] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['last_name'] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    /**
     * Get Extra Field Array
     */
    AddNewRevieweTimesheetDialogComponent.prototype.getExtraFieldArray = function () {
        return this.addTimesheetForm.get('extra_fields');
    };
    /**
     * Get Name Of Employee
     */
    AddNewRevieweTimesheetDialogComponent.prototype.getNameOfEmployeeArray = function () {
        return this.addTimesheetForm.get('name_employee');
    };
    /**
     * Get Task Filter List
     * @param value
     */
    AddNewRevieweTimesheetDialogComponent.prototype.getTaskFilterList = function (value) {
        var _this = this;
        // Get Task
        // console.log(2);
        if (value) {
            this._sharedObjService.getTask({ 'records': 'all' }, { 'in': { 'master_activity_id': value } }).subscribe(function (response) {
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
     * Get Master Activity List
     */
    AddNewRevieweTimesheetDialogComponent.prototype.getMasterActivityList = function () {
        var _this = this;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        if (entity_id) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_DETAILS, {
                'entity_id': entity_id
            }, {}).subscribe(function (response) {
                _this.masterActivityList = response.payload.data;
            });
        }
    };
    /**
     * Get Task List
     */
    AddNewRevieweTimesheetDialogComponent.prototype.getTaskList = function () {
        var _this = this;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        var master_activity_id = this.addTimesheetForm.get('master_activity_id').value;
        if (entity_id && master_activity_id) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_DETAILS, {
                'entity_id': entity_id,
                'master_activity_id': master_activity_id
            }, {}).subscribe(function (response) {
                _this.taskList = response.payload.data;
            });
        }
    };
    /**
     * Get Frequency List
     */
    AddNewRevieweTimesheetDialogComponent.prototype.getFrequencyList = function () {
        var _this = this;
        var task_id = this.addTimesheetForm.get('task_id').value;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        var master_activity_id = this.addTimesheetForm.get('master_activity_id').value;
        if (task_id && entity_id && master_activity_id) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_DETAILS, {
                'entity_id': entity_id,
                'master_activity_id': master_activity_id,
                'task_id': task_id
            }, {}).subscribe(function (response) {
                _this.frequencyList = [];
                var frequencyData = response.payload.data;
                if (frequencyData) {
                    frequencyData.forEach(function (item) {
                        _this.frequencyList.push(item['frequency_id']);
                    });
                }
            });
        }
    };
    /**
     * Get Period List
     */
    AddNewRevieweTimesheetDialogComponent.prototype.getPeriodList = function () {
        var _this = this;
        var task_id = this.addTimesheetForm.get('task_id').value;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        var master_activity_id = this.addTimesheetForm.get('master_activity_id').value;
        var frequency = this.addTimesheetForm.get('worksheet_frequency_id').value;
        if (task_id && entity_id && master_activity_id && frequency) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_DETAILS, {
                'entity_id': entity_id,
                'master_activity_id': master_activity_id,
                'task_id': task_id,
                'frequency_id': frequency
            }, {}).subscribe(function (response) {
                _this.periodList = response.payload.data;
            });
        }
    };
    /**
     * Get Task Filter List
     * @param value
     */
    AddNewRevieweTimesheetDialogComponent.prototype.getSubactivityFilterList = function (value) {
        var _this = this;
        // Get Subactivity List
        if (value) {
            this._sharedObjService.getSubactivity({
                'records': 'all',
                'sortBy': 'asc',
                'sortOrder': 'subactivity_code'
            }, { 'compare': { 'equal': { 'task_id': value } } }).subscribe(function (response) {
                _this.subActivityList = response;
            });
        }
        else {
            this._sharedObjService.getSubactivity({
                'records': 'all',
                'sortBy': 'asc',
                'sortOrder': 'subactivity_code'
            }, {}).subscribe(function (response) {
                _this.subActivityList = response;
            });
        }
    };
    /**
     * On Time Update Change Units
     */
    AddNewRevieweTimesheetDialogComponent.prototype.updateUnits = function () {
        var startTime = this.addTimesheetForm.get('start_time').value;
        var endTime = this.addTimesheetForm.get('end_time').value;
        if (startTime && endTime) {
            var units = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_11__["getUnitsFromTime"])(startTime, endTime);
            // console.log(this.addTimesheetForm.get('units').value);
            if (units >= 0) {
                this.addTimesheetForm.get('units').setValue(units);
            }
        }
    };
    /**
     * Update Form Control
     * @constructor
     */
    AddNewRevieweTimesheetDialogComponent.prototype.UpdateFormControl = function () {
        this.addTimesheetForm.get('extra_fields').reset([]);
        this.addTimesheetForm.removeControl('extra_fields');
        this.addTimesheetForm.addControl('extra_fields', this._fb.array([]));
    };
    /**
     * On Select Check Subactivity have extra fields
     * @param subActivity
     */
    AddNewRevieweTimesheetDialogComponent.prototype.hideShowFields = function (value) {
        // Remove old fields of subactivity on change
        var _this = this;
        // If value of subactivity code then
        if (value) {
            var dataOfReview = this.reviewCodeData.indexOf(this.timeSheetData.subactivity_code);
            if (value.subactivity_code === 403 && (dataOfReview >= 0)) {
                var getSubActivity = this.getSubactivityField(Number(value.subactivity_code));
                if (getSubActivity) {
                    getSubActivity.forEach(function (item) {
                        _this.getExtraFieldArray().push(_this.createDynamicFields(item));
                    });
                }
            }
            else if (value.subactivity_code === 403 && (dataOfReview < 0)) {
            }
            else {
                var getSubActivity = this.getSubactivityField(Number(value.subactivity_code));
                if (getSubActivity) {
                    getSubActivity.forEach(function (item) {
                        _this.getExtraFieldArray().push(_this.createDynamicFields(item));
                    });
                }
            }
            // API Call of Number
            if (Number(value.subactivity_code) === 448 || Number(value.subactivity_code) === 417) {
                this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_PAYROLL_OPTIONS + '/' + value.subactivity_code, {}, {}).subscribe(function (response) {
                    _this.payrollOptionList = response.payload.data;
                });
            }
        }
    };
    /**
     * Get Subactivity Field
     * @param index
     */
    AddNewRevieweTimesheetDialogComponent.prototype.getSubactivityField = function (index) {
        var ItemData = (this.timesheetConstant[index]) ? this.timesheetConstant[index] : null;
        return ItemData;
    };
    /**
     * Create Dynamic Fields
     */
    AddNewRevieweTimesheetDialogComponent.prototype.createDynamicFields = function (item) {
        // console.log(itemValue);
        return this._fb.group({
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['label'] : ''),
            help: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['help'] : ''),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['key'] : ''),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['value'] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['type'] : ''),
            msg_required: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['msg_required'] : ''),
            msg_invalid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['msg_invalid'] : ''),
        });
    };
    /**
     * On Add Employee Fields
     * @param value
     */
    AddNewRevieweTimesheetDialogComponent.prototype.addEmployeeFields = function (value) {
        this.UpdateFormControlEmployee();
        var i = 0;
        if (value >= 0 && value < 6) {
            for (i = 0; i <= value - 1; i++) {
                var firstName = (this.nameOfEmp[i]) ? this.nameOfEmp[i]['first_name'] : '';
                var lastName = (this.nameOfEmp[i]) ? this.nameOfEmp[i]['last_name'] : '';
                var item = [];
                item['first_name'] = firstName;
                item['last_name'] = lastName;
                this.getNameOfEmployeeArray().push(this.createDynamicEmployeeNameFields(item));
            }
        }
    };
    /**
     * Update Form Control
     * @constructor
     */
    AddNewRevieweTimesheetDialogComponent.prototype.UpdateFormControlEmployee = function () {
        this.addTimesheetForm.get('name_employee').reset([]);
        this.addTimesheetForm.removeControl('name_employee');
        this.addTimesheetForm.addControl('name_employee', this._fb.array([]));
    };
    /**
     * On Update Value Set Value + Update Validation for form
     * @param index
     * @param value
     */
    AddNewRevieweTimesheetDialogComponent.prototype.onUpdateEmployeeValues = function (index, value, key) {
        if (index >= 0) {
            if (value) {
                this.getNameOfEmployeeArray().controls[index].get(key).setValue(value);
                this.getNameOfEmployeeArray().controls[index].get(key).updateValueAndValidity();
            }
            else {
                this.getNameOfEmployeeArray().controls[index].get(key).setValue(null);
                this.getNameOfEmployeeArray().controls[index].get(key).updateValueAndValidity();
            }
        }
        else {
            this.getNameOfEmployeeArray().controls[index].get(key).setValue(null);
            this.getNameOfEmployeeArray().controls[index].get(key).updateValueAndValidity();
        }
        // console.log(this.getExtraFieldArray().controls);
    };
    /**
     * On Update Value Set Value + Update Validation for form
     * @param index
     * @param value
     */
    AddNewRevieweTimesheetDialogComponent.prototype.onUpdateValues = function (index, value, checked, keyData) {
        if (index >= 0) {
            if (value) {
                if (checked === 1 && keyData !== '') {
                    this.getExtraFieldArray().controls[index].get('value').setValue(value[keyData]);
                    this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
                }
                else {
                    this.getExtraFieldArray().controls[index].get('value').setValue(value);
                    this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
                }
            }
            else {
                this.getExtraFieldArray().controls[index].get('value').setValue(null);
                this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
            }
        }
    };
    /**
     * On Update Value Set Value + Update Validation for form
     * @param index
     * @param value
     */
    AddNewRevieweTimesheetDialogComponent.prototype.onUpdateCompareValues = function (index, value) {
        if (index >= 0) {
            if (value) {
                if (Number(this.timeSheetData.no_of_value) === Number(value)) {
                    this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_2__["ToastErrorMessages"].NO_OF_EMP_TIMESHEET_MATCHED, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["ToastType"].SUCCESS);
                    this.getExtraFieldArray().controls[index].get('value').setValue(value);
                    this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
                }
                else {
                    this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_2__["ToastErrorMessages"].NO_OF_EMP_TIMESHEET_NOT_MATCHED, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["ToastType"].ERROR);
                    this.getExtraFieldArray().controls[index].get('value').setValue(null);
                    this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
                }
            }
            else {
                this.getExtraFieldArray().controls[index].get('value').setValue(null);
                this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
            }
        }
    };
    /**
     * On Update Value Set Value + Update Validation for form
     * @param index
     * @param value
     */
    AddNewRevieweTimesheetDialogComponent.prototype.onUpdateDateValues = function (index, value) {
        if (index >= 0) {
            if (value) {
                var dateValue = moment__WEBPACK_IMPORTED_MODULE_12__(value).format('YYYY-MM-DD');
                this.getExtraFieldArray().controls[index].get('value').setValue(dateValue);
                this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
            }
            else {
                this.getExtraFieldArray().controls[index].get('value').setValue(null);
                this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
            }
        }
    };
    /**
     * Flag to Submit of add & add and new
     * @param type
     */
    AddNewRevieweTimesheetDialogComponent.prototype.flagToSubmitUpdate = function (type) {
        this.flagToSubmit = type;
    };
    /**
     * On Submit Timesheet
     * @param form
     */
    AddNewRevieweTimesheetDialogComponent.prototype.onSubmitTimesheet = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['parent_id'] = this.timeSheetData.parent_id;
            form.value['entity_id'] = this.timeSheetData.entity_id;
            form.value['worksheet_frequency_id'] = this.timeSheetData.worksheet_frequency_id;
            form.value['user_id'] = this.userData.id;
            form.value['date'] = moment__WEBPACK_IMPORTED_MODULE_12__(new Date()).format('YYYY-MM-DD');
            form.value['timesheet_id'] = this.timeSheetData.id;
            form.value['review_subcode'] = this.timeSheetData.subactivity_code;
            form.value['is_reviewed_timesheet'] = 1;
            form.value['subactivity_code'] = this.addTimesheetForm.get('subactivity_code').value;
            form.value['is_export'] = 0;
            var nameOfEmp = form.value['name_employee'];
            if (nameOfEmp) {
                form.value['name_employee'] = JSON.stringify(nameOfEmp);
            }
            if (form.value['extra_fields']) {
                var itemData = form.value['extra_fields'];
                if (itemData.length) {
                    itemData.forEach(function (item) {
                        form.value[item['key']] = item['value'];
                    });
                }
            }
            if (form.value) {
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_LISTING, form.value).subscribe(function (response) {
                    _this.getHRDetail();
                    if (_this.flagToSubmit === 0) {
                        _this.addEditTimesheetDataForm.resetForm();
                        _this.createTimesheetForm();
                    }
                    else {
                        _this.addEditTimesheetDataForm.resetForm();
                        _this.createTimesheetForm();
                    }
                    _this.dialogRef.close(true);
                });
                form.value['name_employee'] = nameOfEmp;
            }
        }
    };
    /**
     * On page worksheet
     */
    AddNewRevieweTimesheetDialogComponent.prototype.onWorksheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * on page page timesheet
     */
    AddNewRevieweTimesheetDialogComponent.prototype.onTodaysTimesheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    AddNewRevieweTimesheetDialogComponent.prototype.onClose = function () {
        this.dialogRef.close(false);
    };
    /**
     * Update units on header
     */
    AddNewRevieweTimesheetDialogComponent.prototype.getHRDetail = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].GETDETAIL, {}).subscribe(function (Response) {
            _this.hrDetail = Response.payload.data;
            var units = (_this.hrDetail && (_this.hrDetail.units >= 0)) ? _this.hrDetail.units : 0;
            _this._sharedService.setTimeSheetUnits(units);
        });
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    AddNewRevieweTimesheetDialogComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addEditTimesheetDataForm'),
        __metadata("design:type", Object)
    ], AddNewRevieweTimesheetDialogComponent.prototype, "addEditTimesheetDataForm", void 0);
    AddNewRevieweTimesheetDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-reviewe-timesheet-dialog',
            template: __webpack_require__(/*! ./add-new-reviewe-timesheet-dialog.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/edit-task-checklist-knockback/add-new-reviewe-timesheet-dialog/add-new-reviewe-timesheet-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_14__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"]])
    ], AddNewRevieweTimesheetDialogComponent);
    return AddNewRevieweTimesheetDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=default~worksheet-dashboard-action-edit-task-checklist-knockback-edit-task-checklist-knockback-modul~48465787.js.map