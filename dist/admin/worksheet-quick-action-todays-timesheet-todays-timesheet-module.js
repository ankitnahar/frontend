(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["worksheet-quick-action-todays-timesheet-todays-timesheet-module"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/add-new-todays-timesheet-form/add-new-todays-timesheet-form.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/add-new-todays-timesheet-form/add-new-todays-timesheet-form.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-timesheet-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onWorksheet()\">WORKSHEET</a></span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onTodaysTimesheet()\">TODAY'S TIMESHEET</a></span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">ADD TIMESHEET</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n\r\n  <!--Start add timesheet form-->\r\n  <div>\r\n    <span class=\"panel-title\">Add Timesheet</span>\r\n    <form [formGroup]=\"addTimesheetForm\" #addEditTimesheetDataForm=\"ngForm\" (submit)=\"onSubmitTimesheet(addTimesheetForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-1 PR-0\">\r\n          <mat-form-field>\r\n            <input\r\n              formControlName=\"date\"\r\n              matInput\r\n              [matDatepicker]=\"date\"\r\n              placeholder=\"Date\"\r\n              [disableControl]=\"isBackDateTimesheet ? false : true\"\r\n            />\r\n            <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\r\n            <mat-datepicker #date></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <ng-select\r\n            [items]=\"parentClientList\"\r\n            [closeOnSelect]=\"true\"\r\n            bindLabel=\"trading_name\"\r\n            placeholder=\"Parent Trading Name\"\r\n            bindValue=\"id\"\r\n            [virtualScroll]=\"true\"\r\n            [searchable]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            (change)=\"onChangeParentEntity($event)\"\r\n            formControlName=\"parent_id\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <ng-select\r\n            [items]=\"clientList\"\r\n            [closeOnSelect]=\"true\"\r\n            bindLabel=\"trading_name\"\r\n            placeholder=\"Trading Name\"\r\n            bindValue=\"id\"\r\n            [virtualScroll]=\"true\"\r\n            [searchable]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            (change)=\"getMasterActivityList()\"\r\n            formControlName=\"entity_id\"\r\n          >\r\n          </ng-select>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <ng-select\r\n            [items]=\"masterActivityList\"\r\n            [closeOnSelect]=\"true\"\r\n            bindLabel=\"name\"\r\n            placeholder=\"Master activity\"\r\n            bindValue=\"id\"\r\n            [virtualScroll]=\"true\"\r\n            [searchable]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            (change)=\"getTaskFilterList($event)\"\r\n            formControlName=\"master_activity_id\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <ng-select\r\n            [items]=\"taskList\"\r\n            [closeOnSelect]=\"true\"\r\n            bindLabel=\"name\"\r\n            placeholder=\"Task\"\r\n            bindValue=\"id\"\r\n            [virtualScroll]=\"true\"\r\n            [searchable]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            (change)=\"getSubactivityFilterList($event); getFrequencyList()\"\r\n            formControlName=\"task_id\"\r\n          >\r\n          </ng-select>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"worksheet_frequency_id\" placeholder=\"Frequency\" (selectionChange)=\"getPeriodList()\">\r\n              <mat-option *ngFor=\"let frequency of frequencyList\" [value]=\"frequency.id\">\r\n                {{ frequency.frequency_name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"period_id\" placeholder=\"Period\">\r\n              <mat-option *ngFor=\"let period of periodList\" [value]=\"period['worksheet_id']\">\r\n                {{ period[\"start_date\"] | date : \"dd-MM-yyyy\" }} To {{ period[\"end_date\"] | date : \"dd-MM-yyyy\" }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7\">\r\n          <ng-select\r\n            [items]=\"subActivityList\"\r\n            [closeOnSelect]=\"true\"\r\n            bindLabel=\"subactivity_full_name\"\r\n            placeholder=\"Sub Activity\"\r\n            bindValue=\"subactivity_code\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            (change)=\"UpdateFormControl(); UpdateFormControlEmployee(); hideShowFields($event)\"\r\n            formControlName=\"subactivity_code\"\r\n          >\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation\r\n              *ngIf=\"isRequiredField(addTimesheetForm.get('subactivity_code'))\"\r\n              [errMsg]=\"validationMsg.ADD_TIMESHEET_SUB_ACTIVITY_REQUIRED\"\r\n            ></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 PL-0\">\r\n              <mat-form-field>\r\n                <input\r\n                  matInput\r\n                  placeholder=\"Start Time\"\r\n                  formControlName=\"start_time\"\r\n                  aria-label=\"Start Time\"\r\n                  (change)=\"updateUnits()\"\r\n                  readonly\r\n                  [ngxTimepicker]=\"starttime\"\r\n                  [format]=\"24\"\r\n                  min=\"04:30\"\r\n                />\r\n                <ngx-material-timepicker (closed)=\"updateUnits()\" #starttime></ngx-material-timepicker>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\"></div>\r\n            </div>\r\n            <div class=\"col-md-6 PR-0\">\r\n              <mat-form-field>\r\n                <input\r\n                  matInput\r\n                  placeholder=\"End Time\"\r\n                  formControlName=\"end_time\"\r\n                  aria-label=\"End Time\"\r\n                  (change)=\"updateUnits()\"\r\n                  readonly\r\n                  [ngxTimepicker]=\"endtime\"\r\n                  [min]=\"addTimesheetForm.get('start_time').value\"\r\n                  max=\"23:30\"\r\n                  [format]=\"24\"\r\n                />\r\n                <ngx-material-timepicker (closed)=\"updateUnits()\" #endtime></ngx-material-timepicker>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <mat-form-field>\r\n            <input formControlName=\"units\" type=\"number\" matInput placeholder=\"Units\" required />\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('units'))\" [errMsg]=\"validationMsg.UNIT_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addTimesheetForm.get('units'))\" [errMsg]=\"validationMsg.UNIT_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <!--<div class=\"col-md-4\" *ngIf=\"entity_grouptype_id === 14\">-->\r\n        <!--<ng-select [items]=\"subClientList\"-->\r\n        <!--[closeOnSelect]=\"true\"-->\r\n        <!--bindLabel=\"subclient\"-->\r\n        <!--placeholder=\"Sub Client\"-->\r\n        <!--bindValue=\"id\"-->\r\n        <!--[virtualScroll]=\"true\"-->\r\n        <!--[hideSelected]=\"true\"-->\r\n        <!--formControlName=\"subclient_id\">-->\r\n        <!--</ng-select>-->\r\n        <!--<div class=\"validation-msg\">-->\r\n        <!--<app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('subclient_id'))\"-->\r\n        <!--[errMsg]=\"validationMsg.SUBCLIENT_REQUIRED\"></app-validation>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n        <span class=\"col-md-4\" *ngFor=\"let fieldArray of getExtraFieldArray().controls; let i = index\">\r\n          <div *ngIf=\"fieldArray.value['type'] === 'TB'\">\r\n            <mat-form-field\r\n              *ngIf=\"\r\n                (addTimesheetForm.get('subactivity_code').value === 462 || addTimesheetForm.get('subactivity_code').value === 460) &&\r\n                fieldArray.value['label'] === 'No. of Employee'\r\n              \"\r\n            >\r\n              <input\r\n                matInput\r\n                [placeholder]=\"fieldArray.value['label']\"\r\n                (change)=\"onUpdateValues(i, $event.target.value); addEmployeeFields($event.target.value)\"\r\n              />\r\n            </mat-form-field>\r\n            <mat-form-field\r\n              *ngIf=\"\r\n                addTimesheetForm.get('subactivity_code').value !== 462 &&\r\n                addTimesheetForm.get('subactivity_code').value !== 460 &&\r\n                fieldArray.value['label'] === 'No. of Employee'\r\n              \"\r\n            >\r\n              <input matInput [placeholder]=\"fieldArray.value['label']\" (change)=\"onUpdateValues(i, $event.target.value)\" />\r\n            </mat-form-field>\r\n            <mat-form-field\r\n              *ngIf=\"\r\n                addTimesheetForm.get('subactivity_code').value !== 462 &&\r\n                addTimesheetForm.get('subactivity_code').value !== 460 &&\r\n                fieldArray.value['label'] !== 'No. of Employee'\r\n              \"\r\n            >\r\n              <input matInput [placeholder]=\"fieldArray.value['label']\" (change)=\"onUpdateValues(i, $event.target.value)\" />\r\n            </mat-form-field>\r\n            <app-validation\r\n              *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n              [errMsg]=\"fieldArray.value['msg_required']\"\r\n            ></app-validation>\r\n            <app-validation\r\n              *ngIf=\"isValidField(getExtraFieldArray().controls[i].get('value'))\"\r\n              [errMsg]=\"fieldArray.value['msg_invalid']\"\r\n            ></app-validation>\r\n          </div>\r\n          <div *ngIf=\"fieldArray.value['type'] === 'DD'\">\r\n            <ng-select\r\n              *ngIf=\"fieldArray.value['key'] === 'frequency_id'\"\r\n              class=\"custom\"\r\n              [items]=\"frequencyDDList\"\r\n              [closeOnSelect]=\"true\"\r\n              bindLabel=\"frequency_name\"\r\n              placeholder=\"Frequency\"\r\n              bindValue=\"id\"\r\n              (change)=\"onUpdateValues(i, $event, 1, 'id')\"\r\n              [virtualScroll]=\"true\"\r\n              [searchable]=\"true\"\r\n              [hideSelected]=\"true\"\r\n            >\r\n            </ng-select>\r\n            <ng-select\r\n              *ngIf=\"fieldArray.value['key'] === 'payroll_option_id'\"\r\n              class=\"custom\"\r\n              [items]=\"payrollOptionList\"\r\n              [closeOnSelect]=\"true\"\r\n              bindLabel=\"type_name\"\r\n              placeholder=\"Type\"\r\n              bindValue=\"id\"\r\n              (change)=\"onUpdateValues(i, $event, 1, 'id')\"\r\n              [virtualScroll]=\"true\"\r\n              [searchable]=\"true\"\r\n              [hideSelected]=\"true\"\r\n            >\r\n            </ng-select>\r\n            <ng-select\r\n              *ngIf=\"fieldArray.value['key'] === 'reviewer_id'\"\r\n              class=\"custom\"\r\n              [items]=\"reviewerUserList\"\r\n              [closeOnSelect]=\"true\"\r\n              bindLabel=\"userfullname\"\r\n              placeholder=\"Reviewer User\"\r\n              bindValue=\"id\"\r\n              (change)=\"onUpdateValues(i, $event, 1, 'id')\"\r\n              [virtualScroll]=\"true\"\r\n              [searchable]=\"true\"\r\n              [hideSelected]=\"true\"\r\n            >\r\n            </ng-select>\r\n            <ng-select\r\n              *ngIf=\"fieldArray.value['key'] === 'bank_info'\"\r\n              class=\"custom\"\r\n              [items]=\"bankInformation\"\r\n              [closeOnSelect]=\"true\"\r\n              bindLabel=\"bankdetail\"\r\n              placeholder=\"Bank Information\"\r\n              bindValue=\"bankname\"\r\n              (change)=\"onUpdateValues(i, $event, 1, 'bankname')\"\r\n              [virtualScroll]=\"true\"\r\n              [searchable]=\"true\"\r\n              [hideSelected]=\"true\"\r\n            >\r\n            </ng-select>\r\n            <app-validation\r\n              *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n              [errMsg]=\"fieldArray.value['msg_required']\"\r\n            ></app-validation>\r\n          </div>\r\n\r\n          <div *ngIf=\"fieldArray.value['type'] === 'startDate'\">\r\n            <mat-form-field>\r\n              <input\r\n                matInput\r\n                [matDatepicker]=\"periodFrom\"\r\n                (dateChange)=\"onUpdateDateValues(i, $event.value)\"\r\n                placeholder=\"Start Date\"\r\n                value=\"{{ fieldArray.value['value'] }}\"\r\n              />\r\n              <mat-datepicker-toggle matSuffix [for]=\"periodFrom\"></mat-datepicker-toggle>\r\n              <mat-datepicker #periodFrom></mat-datepicker>\r\n            </mat-form-field>\r\n            <app-validation\r\n              *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n              [errMsg]=\"fieldArray.value['msg_required']\"\r\n            ></app-validation>\r\n          </div>\r\n          <div *ngIf=\"fieldArray.value['type'] === 'endDate'\">\r\n            <mat-form-field>\r\n              <input\r\n                matInput\r\n                [matDatepicker]=\"periodTo\"\r\n                value=\"{{ fieldArray.value['value'] }}\"\r\n                (dateChange)=\"onUpdateDateValues(i, $event.value)\"\r\n                placeholder=\"End Date\"\r\n              />\r\n              <mat-datepicker-toggle matSuffix [for]=\"periodTo\"></mat-datepicker-toggle>\r\n              <mat-datepicker #periodTo></mat-datepicker>\r\n            </mat-form-field>\r\n            <app-validation\r\n              *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n              [errMsg]=\"fieldArray.value['msg_required']\"\r\n            ></app-validation>\r\n          </div>\r\n        </span>\r\n      </div>\r\n\r\n      \r\n      <div class=\"row\">\r\n        <span class=\"row col-md-12 PLR-0\" *ngFor=\"let fieldemployeeArray of getNameOfEmployeeArray().controls; let j = index\">\r\n          <span class=\"col-md-6\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"First Name\" (change)=\"onUpdateEmployeeValues(j, $event.target.value, 'first_name')\" />\r\n            </mat-form-field>\r\n            <app-validation\r\n              *ngIf=\"isDynamicFieldsRequiredField(getNameOfEmployeeArray().controls[j].get('first_name'))\"\r\n              [errMsg]=\"validationMsg.FIRST_NAME\"\r\n            ></app-validation>\r\n          </span>\r\n          <span class=\"col-md-6\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Last Name\" (change)=\"onUpdateEmployeeValues(j, $event.target.value, 'last_name')\" />\r\n            </mat-form-field>\r\n            <app-validation\r\n              *ngIf=\"isDynamicFieldsRequiredField(getNameOfEmployeeArray().controls[j].get('last_name'))\"\r\n              [errMsg]=\"validationMsg.LAST_NAME\"\r\n            ></app-validation>\r\n          </span>\r\n        </span>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <textarea formControlName=\"notes\" matInput placeholder=\"Notes\" rows=\"5\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 MB-20\">\r\n        <div class=\"row MT-30\">\r\n          <div class=\"col-md-6 PL-0\">\r\n            <button class=\"btn-orange\" [disabled]=\"addTimesheetForm.invalid\" type=\"submit\" (click)=\"flagToSubmitUpdate(1)\">\r\n              Save & Add New\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-6 text-right PR-0\">\r\n            <button [disabled]=\"addTimesheetForm.invalid\" type=\"submit\" class=\"btn-primary\" (click)=\"flagToSubmitUpdate(0)\">Save</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!--End add timesheet form-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/add-new-todays-timesheet-form/add-new-todays-timesheet-form.component.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/add-new-todays-timesheet-form/add-new-todays-timesheet-form.component.scss ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vdG9kYXlzLXRpbWVzaGVldC9hZGQtbmV3LXRvZGF5cy10aW1lc2hlZXQtZm9ybS9hZGQtbmV3LXRvZGF5cy10aW1lc2hlZXQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/add-new-todays-timesheet-form/add-new-todays-timesheet-form.component.ts":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/add-new-todays-timesheet-form/add-new-todays-timesheet-form.component.ts ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: AddNewTodaysTimesheetFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewTodaysTimesheetFormComponent", function() { return AddNewTodaysTimesheetFormComponent; });
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
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
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















var AddNewTodaysTimesheetFormComponent = /** @class */ (function (_super) {
    __extends(AddNewTodaysTimesheetFormComponent, _super);
    function AddNewTodaysTimesheetFormComponent(_router, _fb, _sharedService, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
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
        _this.entity_grouptype_id = 0;
        _this.subClientList = [];
        _this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_TIMESHEET;
        _this.isBackDateTimesheet = false;
        return _this;
    }
    AddNewTodaysTimesheetFormComponent.prototype.ngOnInit = function () {
        this.worksheetData = this._sharedService.getWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["GLOBALDATAKEYS"].WORKSHEET_ITEM_DATA);
        this.timeSheetData = this._sharedService.getTimesheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["GLOBALDATAKEYS"].TIMESHEET_ITEM_DATA);
        this.isBackDateTimesheet = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'back_date_timesheet', 1);
        this.userData = this._sharedService.getUser();
        this.getDropdownData();
        this.createTimesheetForm();
    };
    /**
     * Get Dropdown data
     */
    AddNewTodaysTimesheetFormComponent.prototype.getDropdownData = function () {
        var _this = this;
        // Get Frequency
        this._sharedObjService.getFrequency({ 'records': 'all' }, {}).subscribe(function (response) {
            // this.frequencyList = response;
            _this.frequencyDDList = response;
        });
        // Get Client
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = _this.filteredTradingClientList = response;
            _this.parentClientList = response.filter(function (item) { return item.is_parent === 1; });
        });
        // Get Master Activity
        // this._sharedObjService.getMasterActivity({'records': 'all'}, {}).subscribe((response) => {
        //   this.masterActivityList = response;
        // });
        // Get Task
        // this._sharedObjService.getTask({'records': 'all'}, {}).subscribe((response) => {
        //   this.taskList = response;
        // });
        // Get Reviewer List
        this._sharedObjService.getUserList({ 'records': 'all' }, {
            'compare': { 'equal': { 'is_active': 1 } },
            'in': { 'designation_id': '68,69,70,73,71' },
            'findinset': { 'team_id': [2] }
        }).subscribe(function (response) {
            _this.reviewerUserList = response;
        });
        // Get Bank Information List
        // if (this.worksheetData.entity_id) {
        //   this._commonCrudService.listData(AdminAPI.TIMESHEET_BANK_DETAILS, {
        //     'entity_id': this.worksheetData.entity_id
        //   }, {}).subscribe(response => {
        //     this.bankInformation = response.payload.data;
        //   });
        // }
    };
    /**
     * Address form creation
     */
    AddNewTodaysTimesheetFormComponent.prototype.createTimesheetForm = function () {
        this.addTimesheetForm = this._fb.group({
            worksheet_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            worksheet_frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            period_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            subactivity_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            start_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            end_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            units: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_2__["CommonRegex"].NUMERIC_REGEXP), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_2__["CommonRegex"].NOT_ALLOWED_FIRST_ZERO_NUMBER_REGEXP)]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            // subclient_id: new FormControl(null),
            extra_fields: this._fb.array([]),
            name_employee: this._fb.array([]),
        });
    };
    /**
     * Get Extra Field Array
     */
    AddNewTodaysTimesheetFormComponent.prototype.getExtraFieldArray = function () {
        return this.addTimesheetForm.get('extra_fields');
    };
    /**
     * Get Name Of Employee
     */
    AddNewTodaysTimesheetFormComponent.prototype.getNameOfEmployeeArray = function () {
        return this.addTimesheetForm.get('name_employee');
    };
    /**
     * Get Task Filter List
     * @param value
     */
    AddNewTodaysTimesheetFormComponent.prototype.getTaskFilterList = function (value) {
        var _this = this;
        // Get Task
        // console.log(2);
        if (value) {
            this._sharedObjService.getTask({ 'records': 'all' }, { 'in': { 'master_activity_id': value.id } }).subscribe(function (response) {
                _this.addTimesheetForm.get('task_id').setValue(null);
                _this.addTimesheetForm.get('task_id').updateValueAndValidity();
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
    AddNewTodaysTimesheetFormComponent.prototype.getMasterActivityList = function () {
        var _this = this;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        if (entity_id) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_DETAILS, {
                'entity_id': entity_id
            }, {}).subscribe(function (response) {
                _this.masterActivityList = [];
                var masterActivityData = response.payload.data;
                if (masterActivityData) {
                    masterActivityData.forEach(function (item) {
                        _this.masterActivityList.push(item['master_activity_id']);
                    });
                }
                // To Show Subclient field and mark as mandatory field
                if ((response.payload.entityGrouptypeId) && (response.payload.entityGrouptypeId === 14)) {
                    _this.entity_grouptype_id = response.payload.entityGrouptypeId;
                    // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
                    // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
                    _this.getSubClientList();
                }
                else {
                    _this.entity_grouptype_id = response.payload.entityGrouptypeId;
                    // this.addTimesheetForm.get('subclient_id').setValidators(null);
                    // this.addTimesheetForm.get('subclient_id').setValue(null);
                    // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
                }
            });
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_BANK_DETAILS, {
                'entity_id': entity_id
            }, {}).subscribe(function (response) {
                _this.bankInformation = [];
                _this.bankInformation = response.payload.data;
            });
            this.getTaskList();
            this.getFrequencyList();
            this.getPeriodList();
        }
    };
    /**
     * Get Sub Client List for Entity Type - Superrecord(14)
     */
    AddNewTodaysTimesheetFormComponent.prototype.getSubClientList = function () {
        var _this = this;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        if (entity_id > 0) {
            this._sharedObjService.getSubClientList({ 'records': 'all' }, { 'compare': { 'equal': { 'entity_id': entity_id } } }).subscribe(function (response) {
                _this.subClientList = response;
            });
        }
    };
    /**
     * Get Task List
     */
    AddNewTodaysTimesheetFormComponent.prototype.getTaskList = function () {
        var _this = this;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        var master_activity_id = this.addTimesheetForm.get('master_activity_id').value;
        if (entity_id && master_activity_id) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_DETAILS, {
                'entity_id': entity_id,
                'master_activity_id': master_activity_id
            }, {}).subscribe(function (response) {
                _this.taskList = [];
                var taskData = response.payload.data;
                if (taskData) {
                    taskData.forEach(function (item) {
                        _this.taskList.push(item['task_id']);
                    });
                }
            });
        }
    };
    /**
     * Get Frequency List
     */
    AddNewTodaysTimesheetFormComponent.prototype.getFrequencyList = function () {
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
    AddNewTodaysTimesheetFormComponent.prototype.getPeriodList = function () {
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
    AddNewTodaysTimesheetFormComponent.prototype.getSubactivityFilterList = function (value) {
        var _this = this;
        // Get Subactivity List
        if (value) {
            this._sharedObjService.getSubactivity({
                'records': 'all',
                'sortBy': 'asc',
                'sortOrder': 'subactivity_code'
            }, { 'compare': { 'equal': { 'task_id': value.id } } }).subscribe(function (response) {
                _this.addTimesheetForm.get('subactivity_code').setValue(null);
                _this.addTimesheetForm.get('subactivity_code').updateValueAndValidity();
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
     * On Select Check Subactivity have extra fields
     * @param subActivity
     */
    AddNewTodaysTimesheetFormComponent.prototype.hideShowFields = function (value) {
        var _this = this;
        if (value) {
            var getSubActivity = this.getSubactivityField(Number(value.subactivity_code));
            if (getSubActivity) {
                getSubActivity.forEach(function (item) {
                    _this.getExtraFieldArray().push(_this.createDynamicFields(item));
                });
            }
            if (Number(value.subactivity_code) === 448 || Number(value.subactivity_code) === 417) {
                this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_PAYROLL_OPTIONS + '/' + value.subactivity_code, {}, {}).subscribe(function (response) {
                    _this.payrollOptionList = response.payload.data;
                });
            }
        }
    };
    /**
     * On Time Update Change Units
     */
    AddNewTodaysTimesheetFormComponent.prototype.updateUnits = function () {
        var startTime = this.addTimesheetForm.get('start_time').value;
        var endTime = this.addTimesheetForm.get('end_time').value;
        if (startTime && endTime) {
            var units = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_11__["getUnitsFromTime"])(startTime, endTime);
            if (units >= 0) {
                this.addTimesheetForm.get('units').setValue(units);
            }
        }
    };
    /**
     * Get Subactivity Field
     * @param index
     */
    AddNewTodaysTimesheetFormComponent.prototype.getSubactivityField = function (index) {
        var ItemData = (this.timesheetConstant[index]) ? this.timesheetConstant[index] : null;
        return ItemData;
    };
    /**
     * Create Dynamic Fields
     */
    AddNewTodaysTimesheetFormComponent.prototype.createDynamicFields = function (item) {
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
     * Create Dynamic Employee Name Fields
     */
    AddNewTodaysTimesheetFormComponent.prototype.createDynamicEmployeeNameFields = function (item) {
        return this._fb.group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['first_name'] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['last_name'] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    /**
     * On Update Value Set Value + Update Validation for form
     * @param index
     * @param value
     */
    AddNewTodaysTimesheetFormComponent.prototype.onUpdateValues = function (index, value, checked, keyData) {
        if (index >= 0) {
            if (value) {
                if (checked === 1 && keyData !== '') {
                    // console.log(value[keyData]);
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
        // console.log(this.getExtraFieldArray().controls);
    };
    /**
     * On Add Employee Fields
     * @param value
     */
    AddNewTodaysTimesheetFormComponent.prototype.addEmployeeFields = function (value) {
        this.UpdateFormControlEmployee();
        var i = 0;
        if (value >= 0 && value < 6) {
            var item = [];
            item['first_name'] = '';
            item['last_name'] = '';
            for (i = 0; i <= value - 1; i++) {
                this.getNameOfEmployeeArray().push(this.createDynamicEmployeeNameFields(item));
            }
        }
    };
    /**
     * On Update Value Set Value + Update Validation for form
     * @param index
     * @param value
     */
    AddNewTodaysTimesheetFormComponent.prototype.onUpdateEmployeeValues = function (index, value, key) {
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
    AddNewTodaysTimesheetFormComponent.prototype.onUpdateDateValues = function (index, value) {
        if (index >= 0) {
            // console.log(value);
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
        // console.log(this.getExtraFieldArray().controls);
    };
    /**
     * Update Form Control
     * @constructor
     */
    AddNewTodaysTimesheetFormComponent.prototype.UpdateFormControl = function () {
        this.addTimesheetForm.get('extra_fields').reset([]);
        this.addTimesheetForm.removeControl('extra_fields');
        this.addTimesheetForm.addControl('extra_fields', this._fb.array([]));
    };
    /**
     * Update Form Control
     * @constructor
     */
    AddNewTodaysTimesheetFormComponent.prototype.UpdateFormControlEmployee = function () {
        this.addTimesheetForm.get('name_employee').reset([]);
        this.addTimesheetForm.removeControl('name_employee');
        this.addTimesheetForm.addControl('name_employee', this._fb.array([]));
    };
    /**
     * Flag to Submit of add & add and new
     * @param type
     */
    AddNewTodaysTimesheetFormComponent.prototype.flagToSubmitUpdate = function (type) {
        this.flagToSubmit = type;
    };
    /**
     * On Submit Timesheet
     * @param form
     */
    AddNewTodaysTimesheetFormComponent.prototype.onSubmitTimesheet = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['user_id'] = this.userData.id;
            form.value['worksheet_id'] = form.value['period_id'];
            form.value['date'] = moment__WEBPACK_IMPORTED_MODULE_12__(form.value['date']).format('YYYY-MM-DD');
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
            // console.log(form.value);
            if (form.value) {
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_LISTING, form.value).subscribe(function (response) {
                    _this.getHRDetail();
                    if (_this.flagToSubmit === 0) {
                        _this.onTodaysTimesheet();
                    }
                    else {
                        _this.addEditTimesheetDataForm.resetForm();
                        _this.createTimesheetForm();
                    }
                });
                form.value['name_employee'] = nameOfEmp;
            }
        }
    };
    /**
     * On page worksheet
     */
    AddNewTodaysTimesheetFormComponent.prototype.onWorksheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * on page page timesheet
     */
    AddNewTodaysTimesheetFormComponent.prototype.onTodaysTimesheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * On home page route
     */
    AddNewTodaysTimesheetFormComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Update units on header
     */
    AddNewTodaysTimesheetFormComponent.prototype.getHRDetail = function () {
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
    AddNewTodaysTimesheetFormComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addEditTimesheetDataForm'),
        __metadata("design:type", Object)
    ], AddNewTodaysTimesheetFormComponent.prototype, "addEditTimesheetDataForm", void 0);
    AddNewTodaysTimesheetFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-todays-timesheet-form',
            template: __webpack_require__(/*! ./add-new-todays-timesheet-form.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/add-new-todays-timesheet-form/add-new-todays-timesheet-form.component.html"),
            styles: [__webpack_require__(/*! ./add-new-todays-timesheet-form.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/add-new-todays-timesheet-form/add-new-todays-timesheet-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"]])
    ], AddNewTodaysTimesheetFormComponent);
    return AddNewTodaysTimesheetFormComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/add-new-review-timesheet-form/add-new-review-timesheet-form.component.html":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/add-new-review-timesheet-form/add-new-review-timesheet-form.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-timesheet-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onWorksheet()\">WORKSHEET</a></span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onTodaysTimesheet()\">REVIEW TIMESHEET</a></span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">ADD TIMESHEET</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('addNewWorksheet')\"\r\n                          *ngIf=\"worksheetTabIDData['add_edit']\">Add New Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayWorksheet')\">Today's Worksheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayTimesheet')\">Today's Timesheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetHierarchy')\"\r\n                          *ngIf=\"tabDataWorksheetHierarchy['view']\">Worksheet Hierarchy\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('subClientList')\"\r\n                          *ngIf=\"tabDataWorksheetSubClientList['view']\">Sub Client List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetMasterChecklist')\"\r\n                          *ngIf=\"tabDataWorksheetMasterChecklist['view']\">Worksheet Master Checklist\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                          *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('trainingList')\"\r\n                          *ngIf=\"tabDataWorksheetTraining['view']\">Training List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                          *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                    Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('peerReviewWorksheetListing')\"\r\n                          *ngIf=\"tabDataWorksheetPeerReviewerList['view']\">Peer Review Worksheet\r\n                    Listing\r\n                  </button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n  <div>\r\n    <span class=\"panel-title orange-color\">ADD TIMESHEET</span>\r\n    <form [formGroup]=\"addTimesheetForm\" #addEditTimesheetDataForm=\"ngForm\"\r\n          (submit)=\"onSubmitTimesheet(addTimesheetForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-1 PR-0\">\r\n          <mat-form-field>\r\n            <input formControlName=\"date\" matInput [matDatepicker]=\"date\" placeholder=\"Date\" [disableControl]=\"true\"\r\n                   readonly>\r\n            <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\r\n            <mat-datepicker #date></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Parent Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     [disableControl]=\"true\"\r\n                     (change)=\"onChangeParentEntity($event)\"\r\n                     formControlName=\"parent_id\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <ng-select [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [disableControl]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"getMasterActivityList()\"\r\n                     formControlName=\"entity_id\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"master_activity_id\" placeholder=\"Master activity\"\r\n                        (selectionChange)=\"getTaskFilterList($event.value)\" [disableControl]=\"true\">\r\n              <mat-option *ngFor=\"let masterActivity of masterActivityList;\" [value]=\"+masterActivity.id\">\r\n                {{masterActivity.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"task_id\" placeholder=\"Task\" [disableControl]=\"true\"\r\n                        (selectionChange)=\"getSubactivityFilterList($event.value);getFrequencyList()\">\r\n              <mat-option *ngFor=\"let task of taskList;\" [value]=\"+task.id\">\r\n                {{task.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"worksheet_frequency_id\" placeholder=\"Frequency\" [disableControl]=\"true\">\r\n              <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                {{frequency.frequency_name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"period_id\" placeholder=\"Period\" [disableControl]=\"true\">\r\n              <mat-option *ngFor=\"let period of periodList;\" [value]=\"period['worksheet_id']\">\r\n                {{period['start_date'] | date : 'dd-MM-yyyy'}} To {{period['end_date'] | date : 'dd-MM-yyyy'}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7\">\r\n          <ng-select [items]=\"subActivityList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"subactivity_full_name\"\r\n                     placeholder=\"Sub Activity\"\r\n                     bindValue=\"subactivity_code\"\r\n                     [virtualScroll]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"UpdateFormControl(); UpdateFormControlEmployee(); hideShowFields($event);\"\r\n                     formControlName=\"subactivity_code\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('subactivity_code'))\"\r\n                            [errMsg]=\"validationMsg.ADD_TIMESHEET_SUB_ACTIVITY_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 PL-0\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Start Time\" formControlName=\"start_time\" aria-label=\"Start Time\"\r\n                       (change)=\"updateUnits()\" readonly\r\n                       [ngxTimepicker]=\"starttime\" [format]=\"24\" min=\"04:30\">\r\n                <ngx-material-timepicker (closed)=\"updateUnits()\" #starttime></ngx-material-timepicker>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\"></div>\r\n            </div>\r\n            <div class=\"col-md-6 PR-0\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"End Time\" formControlName=\"end_time\" aria-label=\"End Time\"\r\n                       (change)=\"updateUnits()\" readonly [ngxTimepicker]=\"endtime\"\r\n                       [min]=\"addTimesheetForm.get('start_time').value\" max=\"23:30\" [format]=\"24\">\r\n                <ngx-material-timepicker (closed)=\"updateUnits()\" #endtime></ngx-material-timepicker>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <mat-form-field>\r\n            <input formControlName=\"units\" type=\"number\" max=\"180\" matInput placeholder=\"Units\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('units'))\"\r\n                            [errMsg]=\"validationMsg.UNIT_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addTimesheetForm.get('units'))\"\r\n                            [errMsg]=\"validationMsg.UNIT_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <!--<div class=\"col-md-4\" *ngIf=\"entity_grouptype_id === 14\">-->\r\n          <!--<ng-select [items]=\"subClientList\"-->\r\n                     <!--[closeOnSelect]=\"true\"-->\r\n                     <!--bindLabel=\"subclient\"-->\r\n                     <!--placeholder=\"Sub Client\"-->\r\n                     <!--bindValue=\"id\"-->\r\n                     <!--[virtualScroll]=\"true\"-->\r\n                     <!--[hideSelected]=\"true\"-->\r\n                     <!--formControlName=\"subclient_id\">-->\r\n          <!--</ng-select>-->\r\n          <!--<div class=\"validation-msg\">-->\r\n            <!--<app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('subclient_id'))\"-->\r\n                            <!--[errMsg]=\"validationMsg.SUBCLIENT_REQUIRED\"></app-validation>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n        <span class=\"col-md-4\" *ngFor=\"let fieldArray of getExtraFieldArray().controls; let i=index\">\r\n        <div *ngIf=\"fieldArray.value['type'] === 'TB'\">\r\n          <mat-form-field>\r\n            <input matInput [placeholder]=\"fieldArray.value['label']\"\r\n                   (change)=\"onUpdateValues(i,$event.target.value); onUpdateCompareValues(i,$event.target.value);\"/>\r\n          </mat-form-field>\r\n            <app-validation *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                            [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n           <app-validation *ngIf=\"isValidField(getExtraFieldArray().controls[i].get('value'))\"\r\n                           [errMsg]=\"fieldArray.value['msg_invalid']\"></app-validation>\r\n        </div>\r\n        <div *ngIf=\"fieldArray.value['type'] === 'DD'\">\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'frequency_id'\" [items]=\"frequencyDDList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"frequency_name\"\r\n                     placeholder=\"Frequency\"\r\n                     bindValue=\"id\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'id')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'payroll_option_id'\" [items]=\"payrollOptionList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     [(ngModel)]=\"timeSheetData[fieldArray.value['key']]\"\r\n                     [ngModelOptions]=\"{standalone: true}\"\r\n                     bindLabel=\"type_name\"\r\n                     placeholder=\"Type\"\r\n                     bindValue=\"id\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'id')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'reviewer_id'\" [items]=\"reviewerUserList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"userfullname\"\r\n                     placeholder=\"Reviewer User\"\r\n                     bindValue=\"id\"\r\n                     [(ngModel)]=\"+timeSheetData[fieldArray.value['key']]\"\r\n                     [ngModelOptions]=\"{standalone: true}\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'id')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'bank_info'\" [items]=\"bankInformation\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"bankdetail\"\r\n                     placeholder=\"Bank Information\"\r\n                     bindValue=\"bankname\"\r\n                     [(ngModel)]=\"timeSheetData['bank_cc_name'] + ':' + timeSheetData['bank_cc_account_no']\"\r\n                     [ngModelOptions]=\"{standalone: true}\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'bankname')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n            <app-validation *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                            [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n        </div>\r\n        <div *ngIf=\"fieldArray.value['type'] === 'startDate'\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"periodFrom\"\r\n                   (dateChange)=\"onUpdateDateValues(i,$event.value)\"\r\n                   placeholder=\"Start Date\" value=\"{{fieldArray.value['value']}}\" readonly>\r\n            <mat-datepicker-toggle matSuffix [for]=\"periodFrom\"></mat-datepicker-toggle>\r\n            <mat-datepicker #periodFrom></mat-datepicker>\r\n          </mat-form-field>\r\n                      <app-validation\r\n                        *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                        [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n        </div>\r\n        <div *ngIf=\"fieldArray.value['type'] === 'endDate'\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"periodTo\"\r\n                   value=\"{{fieldArray.value['value']}}\"\r\n                   (dateChange)=\"onUpdateDateValues(i,$event.value)\"\r\n                   placeholder=\"End Date\" readonly>\r\n            <mat-datepicker-toggle matSuffix [for]=\"periodTo\"></mat-datepicker-toggle>\r\n            <mat-datepicker #periodTo></mat-datepicker>\r\n          </mat-form-field>\r\n                      <app-validation\r\n                        *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                        [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n        </div>\r\n      </span>\r\n      </div>\r\n      <div class=\"row\">\r\n        <span class=\"row col-md-12 PLR-0\"\r\n              *ngFor=\"let fieldemployeeArray of getNameOfEmployeeArray().controls; let j=index\">\r\n          <span class=\"col-md-6\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"First Name\" value=\"{{fieldemployeeArray.value['first_name']}}\"\r\n                 (change)=\"onUpdateEmployeeValues(j,$event.target.value, 'first_name');\"/>\r\n        </mat-form-field>\r\n             <app-validation\r\n               *ngIf=\"isDynamicFieldsRequiredField(getNameOfEmployeeArray().controls[j].get('first_name'))\"\r\n               [errMsg]=\"validationMsg.FIRST_NAME\"></app-validation>\r\n          </span>\r\n           <span class=\"col-md-6\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Last Name\" value=\"{{fieldemployeeArray.value['last_name']}}\"\r\n                 (change)=\"onUpdateEmployeeValues(j,$event.target.value, 'last_name')\"/>\r\n        </mat-form-field>\r\n               <app-validation\r\n                 *ngIf=\"isDynamicFieldsRequiredField(getNameOfEmployeeArray().controls[j].get('last_name'))\"\r\n                 [errMsg]=\"validationMsg.LAST_NAME\"></app-validation>\r\n           </span>\r\n        </span>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <textarea formControlName=\"notes\" matInput placeholder=\"Notes\" rows=\"5\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 MB-20\">\r\n        <div class=\"row MT-30\">\r\n          <div class=\"col-md-6 PL-0\">\r\n          </div>\r\n          <div class=\"col-md-6 text-right PR-0\">\r\n            <button [disabled]=\"addTimesheetForm.invalid\" type=\"submit\" class=\"btn-primary\"\r\n                    (click)=\"flagToSubmitUpdate(0)\">Add\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!--Start add timesheet form-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/add-new-review-timesheet-form/add-new-review-timesheet-form.component.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/add-new-review-timesheet-form/add-new-review-timesheet-form.component.scss ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vdG9kYXlzLXRpbWVzaGVldC9yZXZpZXctdGltZXNoZWV0L2FkZC1uZXctcmV2aWV3LXRpbWVzaGVldC1mb3JtL2FkZC1uZXctcmV2aWV3LXRpbWVzaGVldC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/add-new-review-timesheet-form/add-new-review-timesheet-form.component.ts":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/add-new-review-timesheet-form/add-new-review-timesheet-form.component.ts ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: AddNewReviewTimesheetFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewReviewTimesheetFormComponent", function() { return AddNewReviewTimesheetFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_timesheet_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../utility/constants/timesheet-constant */ "./src/utility/constants/timesheet-constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
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















var AddNewReviewTimesheetFormComponent = /** @class */ (function (_super) {
    __extends(AddNewReviewTimesheetFormComponent, _super);
    function AddNewReviewTimesheetFormComponent(_router, _fb, _sharedService, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this._sharedService = _sharedService;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_1__["ValidationConstantMessage"]();
        _this.clientList = [];
        _this.filteredTradingClientList = [];
        _this.parentClientList = [];
        _this.reviewerUserList = [];
        _this.bankInformation = [];
        _this.frequencyList = [];
        _this.masterActivityList = [];
        _this.taskList = [];
        _this.subActivityList = [];
        _this.timesheetConstant = _utility_constants_timesheet_constant__WEBPACK_IMPORTED_MODULE_3__["TimesheetConstantData"];
        _this.periodList = [];
        _this.payrollOptionList = [];
        _this.frequencyDDList = [];
        _this.flagToSubmit = 0;
        _this.nameOfEmp = [];
        _this.tabIDWorksheetHierarchy = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_MASTERACTIVITY;
        _this.tabIDWorksheetTraining = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_WORKSHEETTRAINING;
        _this.tabIDWorksheetSubClientList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_SUBCLIENTLIST;
        _this.tabIDWorksheetReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
        _this.tabIDWorksheetPeerReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
        _this.tabIDWorksheetMasterChecklist = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_MASTERCHECKLIST;
        _this.tabIDWorksheetMultiplueStatusChange = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;
        _this.isMultipleStatusUpdate = false;
        _this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
        _this.subClientList = [];
        _this.entity_grouptype_id = 0;
        return _this;
    }
    AddNewReviewTimesheetFormComponent.prototype.ngOnInit = function () {
        this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
        this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
        this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
        this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
        this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
        this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
        this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
        this.timeSheetData = this._sharedService.getTimesheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["GLOBALDATAKEYS"].TIMESHEET_ITEM_DATA);
        if (this.timeSheetData.name_of_employee && this.timeSheetData.name_of_employee !== '"[]"') {
            this.nameOfEmp = JSON.parse(this.timeSheetData.name_of_employee);
        }
        this.userData = this._sharedService.getUser();
        // console.log(this.timeSheetData);
        this.getDropdownData();
        this.createTimesheetForm();
    };
    /**
     * Get Dropdown data
     */
    AddNewReviewTimesheetFormComponent.prototype.getDropdownData = function () {
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
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].TIMESHEET_BANK_DETAILS, {
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
    AddNewReviewTimesheetFormComponent.prototype.createTimesheetForm = function () {
        this.addTimesheetForm = this._fb.group({
            worksheet_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.timeSheetData) ? this.timeSheetData.worksheet_id : 0),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.timeSheetData) ? this.timeSheetData.entity_id : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.timeSheetData && this.timeSheetData.parent_id > 0) ? this.timeSheetData.parent_id : null),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            worksheet_frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.timeSheetData) ? this.timeSheetData.worksheet_frequency_id : 0),
            period_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.timeSheetData) ? this.timeSheetData.worksheet_id : 0),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.timeSheetData) ? this.timeSheetData.master_id : 0),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.timeSheetData) ? this.timeSheetData.task_id : 0),
            subactivity_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.timeSheetData) ? ((this.timeSheetData.subactivity_code === 404) ? 402 : 403) : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            start_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            end_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            units: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["CommonRegex"].NUMERIC_REGEXP), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["CommonRegex"].NOT_ALLOWED_FIRST_ZERO_NUMBER_REGEXP)]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            extra_fields: this._fb.array([]),
            name_employee: this._fb.array([])
        });
        if (this.timeSheetData) {
            this.getFrequencyList();
            this.getPeriodList();
            this.getTaskFilterList(this.timeSheetData.master_id);
            // this.getSubactivityFilterList(this.timeSheetData.task_id);
            this.hideShowFields(this.addTimesheetForm.get('subactivity_code').value);
        }
    };
    /**
     * Get Sub Client List for Entity Type - Superrecord(14)
     */
    AddNewReviewTimesheetFormComponent.prototype.getSubClientList = function () {
        var _this = this;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        if (entity_id > 0) {
            this._sharedObjService.getSubClientList({ 'records': 'all' }, { 'compare': { 'equal': { 'entity_id': entity_id } } }).subscribe(function (response) {
                _this.subClientList = response;
            });
        }
    };
    /**
     * Create Dynamic Employee Name Fields
     */
    AddNewReviewTimesheetFormComponent.prototype.createDynamicEmployeeNameFields = function (item) {
        return this._fb.group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['first_name'] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['last_name'] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    /**
     * Get Extra Field Array
     */
    AddNewReviewTimesheetFormComponent.prototype.getExtraFieldArray = function () {
        return this.addTimesheetForm.get('extra_fields');
    };
    /**
     * Get Name Of Employee
     */
    AddNewReviewTimesheetFormComponent.prototype.getNameOfEmployeeArray = function () {
        return this.addTimesheetForm.get('name_employee');
    };
    /**
     * Get Task Filter List
     * @param value
     */
    AddNewReviewTimesheetFormComponent.prototype.getTaskFilterList = function (value) {
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
    AddNewReviewTimesheetFormComponent.prototype.getMasterActivityList = function () {
        var _this = this;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        if (entity_id) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].TIMESHEET_DETAILS, {
                'entity_id': entity_id
            }, {}).subscribe(function (response) {
                _this.masterActivityList = response.payload.data;
                // To Show Subclient field and mark as mandatory field
                if ((response.payload.entityGrouptypeId) && (response.payload.entityGrouptypeId === 14)) {
                    _this.entity_grouptype_id = response.payload.entityGrouptypeId;
                    // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
                    // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
                    _this.getSubClientList();
                }
                else {
                    _this.entity_grouptype_id = response.payload.entityGrouptypeId;
                    // this.addTimesheetForm.get('subclient_id').setValidators(null);
                    // this.addTimesheetForm.get('subclient_id').setValue(null);
                    // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
                }
            });
        }
    };
    /**
     * Get Task List
     */
    AddNewReviewTimesheetFormComponent.prototype.getTaskList = function () {
        var _this = this;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        var master_activity_id = this.addTimesheetForm.get('master_activity_id').value;
        if (entity_id && master_activity_id) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].TIMESHEET_DETAILS, {
                'entity_id': entity_id,
                'master_activity_id': master_activity_id
            }, {}).subscribe(function (response) {
                _this.taskList = response.payload.data;
                // To Show Subclient field and mark as mandatory field
                if ((response.payload.entityGrouptypeId) && (response.payload.entityGrouptypeId === 14)) {
                    _this.entity_grouptype_id = response.payload.entityGrouptypeId;
                    // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
                    // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
                    _this.getSubClientList();
                }
                else {
                    _this.entity_grouptype_id = response.payload.entityGrouptypeId;
                    // this.addTimesheetForm.get('subclient_id').setValidators(null);
                    // this.addTimesheetForm.get('subclient_id').setValue(null);
                    // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
                }
            });
        }
    };
    /**
     * Get Frequency List
     */
    AddNewReviewTimesheetFormComponent.prototype.getFrequencyList = function () {
        var _this = this;
        var task_id = this.addTimesheetForm.get('task_id').value;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        var master_activity_id = this.addTimesheetForm.get('master_activity_id').value;
        if (task_id && entity_id && master_activity_id) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].TIMESHEET_DETAILS, {
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
                // To Show Subclient field and mark as mandatory field
                if ((response.payload.entityGrouptypeId) && (response.payload.entityGrouptypeId === 14)) {
                    _this.entity_grouptype_id = response.payload.entityGrouptypeId;
                    // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
                    // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
                    _this.getSubClientList();
                }
                else {
                    _this.entity_grouptype_id = response.payload.entityGrouptypeId;
                    // this.addTimesheetForm.get('subclient_id').setValidators(null);
                    // this.addTimesheetForm.get('subclient_id').setValue(null);
                    // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
                }
            });
        }
    };
    /**
     * Get Period List
     */
    AddNewReviewTimesheetFormComponent.prototype.getPeriodList = function () {
        var _this = this;
        var task_id = this.addTimesheetForm.get('task_id').value;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        var master_activity_id = this.addTimesheetForm.get('master_activity_id').value;
        var frequency = this.addTimesheetForm.get('worksheet_frequency_id').value;
        if (task_id && entity_id && master_activity_id && frequency) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].TIMESHEET_DETAILS, {
                'entity_id': entity_id,
                'master_activity_id': master_activity_id,
                'task_id': task_id,
                'frequency_id': frequency
            }, {}).subscribe(function (response) {
                _this.periodList = response.payload.data;
                // To Show Subclient field and mark as mandatory field
                if ((response.payload.entityGrouptypeId) && (response.payload.entityGrouptypeId === 14)) {
                    _this.entity_grouptype_id = response.payload.entityGrouptypeId;
                    // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
                    // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
                    _this.getSubClientList();
                }
                else {
                    _this.entity_grouptype_id = response.payload.entityGrouptypeId;
                    // this.addTimesheetForm.get('subclient_id').setValidators(null);
                    // this.addTimesheetForm.get('subclient_id').setValue(null);
                    // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
                }
            });
        }
    };
    /**
     * Get Task Filter List
     * @param value
     */
    AddNewReviewTimesheetFormComponent.prototype.getSubactivityFilterList = function (value) {
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
    AddNewReviewTimesheetFormComponent.prototype.updateUnits = function () {
        var startTime = this.addTimesheetForm.get('start_time').value;
        var endTime = this.addTimesheetForm.get('end_time').value;
        if (startTime && endTime) {
            var units = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_10__["getUnitsFromTime"])(startTime, endTime);
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
    AddNewReviewTimesheetFormComponent.prototype.UpdateFormControl = function () {
        this.addTimesheetForm.get('extra_fields').reset([]);
        this.addTimesheetForm.removeControl('extra_fields');
        this.addTimesheetForm.addControl('extra_fields', this._fb.array([]));
    };
    /**
     * On Select Check Subactivity have extra fields
     * @param subActivity
     */
    AddNewReviewTimesheetFormComponent.prototype.hideShowFields = function (value) {
        // Remove old fields of subactivity on change
        var _this = this;
        // If value of subactivity code then
        if (value) {
            var getSubActivity = this.getSubactivityField(Number(value.subactivity_code));
            if (getSubActivity) {
                getSubActivity.forEach(function (item) {
                    _this.getExtraFieldArray().push(_this.createDynamicFields(item));
                });
            }
            // API Call of Number
            if (Number(value.subactivity_code) === 448 || Number(value.subactivity_code) === 417) {
                this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].TIMESHEET_PAYROLL_OPTIONS + '/' + value.subactivity_code, {}, {}).subscribe(function (response) {
                    _this.payrollOptionList = response.payload.data;
                });
            }
        }
    };
    /**
     * Get Subactivity Field
     * @param index
     */
    AddNewReviewTimesheetFormComponent.prototype.getSubactivityField = function (index) {
        var ItemData = (this.timesheetConstant[index]) ? this.timesheetConstant[index] : null;
        return ItemData;
    };
    /**
     * Create Dynamic Fields
     */
    AddNewReviewTimesheetFormComponent.prototype.createDynamicFields = function (item) {
        // console.log(itemValue);
        return this._fb.group({
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['label'] : ''),
            help: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['help'] : ''),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['key'] : ''),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['value'] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['type'] : ''),
            msg_required: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['msg_required'] : ''),
            msg_invalid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['msg_invalid'] : ''),
        });
    };
    /**
     * On Add Employee Fields
     * @param value
     */
    AddNewReviewTimesheetFormComponent.prototype.addEmployeeFields = function (value) {
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
    AddNewReviewTimesheetFormComponent.prototype.UpdateFormControlEmployee = function () {
        this.addTimesheetForm.get('name_employee').reset([]);
        this.addTimesheetForm.removeControl('name_employee');
        this.addTimesheetForm.addControl('name_employee', this._fb.array([]));
    };
    /**
     * On Update Value Set Value + Update Validation for form
     * @param index
     * @param value
     */
    AddNewReviewTimesheetFormComponent.prototype.onUpdateEmployeeValues = function (index, value, key) {
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
    AddNewReviewTimesheetFormComponent.prototype.onUpdateValues = function (index, value, checked, keyData) {
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
    AddNewReviewTimesheetFormComponent.prototype.onUpdateCompareValues = function (index, value) {
        if (index >= 0) {
            if (value) {
                if (Number(this.timeSheetData.no_of_value) === Number(value)) {
                    this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["ToastErrorMessages"].NO_OF_EMP_TIMESHEET_MATCHED, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["ToastType"].SUCCESS);
                    this.getExtraFieldArray().controls[index].get('value').setValue(value);
                    this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
                }
                else {
                    this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_1__["ToastErrorMessages"].NO_OF_EMP_TIMESHEET_NOT_MATCHED, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["ToastType"].ERROR);
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
    AddNewReviewTimesheetFormComponent.prototype.onUpdateDateValues = function (index, value) {
        if (index >= 0) {
            if (value) {
                var dateValue = moment__WEBPACK_IMPORTED_MODULE_11__(value).format('YYYY-MM-DD');
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
    AddNewReviewTimesheetFormComponent.prototype.flagToSubmitUpdate = function (type) {
        this.flagToSubmit = type;
    };
    /**
     * On Submit Timesheet
     * @param form
     */
    AddNewReviewTimesheetFormComponent.prototype.onSubmitTimesheet = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['entity_id'] = this.timeSheetData.entity_id;
            form.value['worksheet_frequency_id'] = this.timeSheetData.worksheet_frequency_id;
            form.value['user_id'] = this.userData.id;
            form.value['date'] = moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format('YYYY-MM-DD');
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
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].TIMESHEET_LISTING, form.value).subscribe(function (response) {
                    _this.getHRDetail();
                    if (_this.flagToSubmit === 0) {
                        _this.onTodaysTimesheet();
                    }
                    else {
                        _this.addEditTimesheetDataForm.resetForm();
                        _this.createTimesheetForm();
                    }
                });
                form.value['name_employee'] = nameOfEmp;
            }
        }
    };
    /**
     * On page worksheet
     */
    AddNewReviewTimesheetFormComponent.prototype.onWorksheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * on page page timesheet
     */
    AddNewReviewTimesheetFormComponent.prototype.onTodaysTimesheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * Open quick menu
     * @param menuName
     */
    AddNewReviewTimesheetFormComponent.prototype.onOpenQuickMenu = function (menuName) {
        switch (menuName) {
            case 'addNewWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].ADD_WORKSHEET]);
                break;
            case 'todayWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].WORKSHEET_TODAYS_WORKSHEET]);
                break;
            case 'todayTimesheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
                break;
            case 'worksheetHierarchy':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].WORKSHEET_HIERARCHY]);
                break;
            case 'changeInOuttime':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].WORKSHEET_CHANGE_IN_OUT_TIME]);
                break;
            case 'subClientList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].WORKSHEET_SUB_CLIENT_LIST]);
                break;
            case 'worksheetMasterChecklist':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].WORKSHEET_MASTER_CHECKLIST]);
                break;
            case 'trainingList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].WORKSHEET_TRAINING_LIST]);
                break;
            case 'revieworKnockBackWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].WORKSHEET_REVIEW_OR_KNOCK_BACK]);
                break;
            case 'peerReviewWorksheetListing':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
                break;
            case 'changeMultipleWorksheetStatus':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].CHANGE_MULTIPLE_WORKSHEET_STATUS]);
                break;
        }
    };
    /**
     * On home page route
     */
    AddNewReviewTimesheetFormComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Update units on header
     */
    AddNewReviewTimesheetFormComponent.prototype.getHRDetail = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].GETDETAIL, {}).subscribe(function (Response) {
            _this.hrDetail = Response.payload.data;
            var units = (_this.hrDetail && (_this.hrDetail.units >= 0)) ? _this.hrDetail.units : 0;
            _this._sharedService.setTimeSheetUnits(units);
        });
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    AddNewReviewTimesheetFormComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addEditTimesheetDataForm'),
        __metadata("design:type", Object)
    ], AddNewReviewTimesheetFormComponent.prototype, "addEditTimesheetDataForm", void 0);
    AddNewReviewTimesheetFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-review-timesheet-form',
            template: __webpack_require__(/*! ./add-new-review-timesheet-form.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/add-new-review-timesheet-form/add-new-review-timesheet-form.component.html"),
            styles: [__webpack_require__(/*! ./add-new-review-timesheet-form.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/add-new-review-timesheet-form/add-new-review-timesheet-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"]])
    ], AddNewReviewTimesheetFormComponent);
    return AddNewReviewTimesheetFormComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_13__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/review-timesheet.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/review-timesheet.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin worksheet module Today's Timesheet Review timesheet Container -->\r\n<div class=\"review-timesheet-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onWorksheetDashboard()\">WORKSHEET</a></span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onTodaysTimesheet()\">TODAY'S TIMESHEET</a></span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">REVIEW TIMESHEET</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-3\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('addNewWorksheet')\"\r\n                          *ngIf=\"worksheetTabIDData['add_edit']\">Add New Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayWorksheet')\">Today's Worksheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayTimesheet')\">Today's Timesheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetHierarchy')\"\r\n                          *ngIf=\"tabDataWorksheetHierarchy['view']\">Worksheet Hierarchy\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('subClientList')\"\r\n                          *ngIf=\"tabDataWorksheetSubClientList['view']\">Sub Client List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetMasterChecklist')\"\r\n                          *ngIf=\"tabDataWorksheetMasterChecklist['view']\">Worksheet Master Checklist\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                          *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('trainingList')\"\r\n                          *ngIf=\"tabDataWorksheetTraining['view']\">Training List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                          *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                    Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('peerReviewWorksheetListing')\"\r\n                          *ngIf=\"tabDataWorksheetPeerReviewerList['view']\">Peer Review Worksheet\r\n                    Listing\r\n                  </button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Review Timesheet</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onToggleFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li (click)=\"downloadExcel()\">\r\n              <a>\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc\r\n          <mat-icon class=\"material-icons\">close</mat-icon>\r\n        </span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"entity_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"User Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"user_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"service_id\" placeholder=\"Service\">\r\n                  <mat-option *ngFor=\"let service of serviceList;\" [value]=\"service.id\">\r\n                    {{service.service_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"masterActivityList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Master activity\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         (change)=\"getTaskFilterList($event)\"\r\n                         formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"taskList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Task\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         formControlName=\"task_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"subActivityList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"subactivity_full_name\"\r\n                         placeholder=\"Sub Activity\"\r\n                         bindValue=\"subactivity_code\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"subactivity_code\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"start_date\" [matDatepicker]=\"periodFrom\"\r\n                           placeholder=\"From\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"end_date\" [matDatepicker]=\"periodTo\" placeholder=\"To\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"billing_status\" placeholder=\"Billing Status\" [multiple]=\"true\">\r\n                  <mat-option *ngFor=\"let statusList of billingStatusList\" value=\"{{statusList.key}}\">\r\n                    {{statusList.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!--<div class=\"col-md-3 MT-10\">-->\r\n              <!--<ng-select [items]=\"subClientList\"-->\r\n                         <!--[closeOnSelect]=\"true\"-->\r\n                         <!--bindLabel=\"subclient\"-->\r\n                         <!--placeholder=\"Sub Client\"-->\r\n                         <!--bindValue=\"id\"-->\r\n                         <!--[virtualScroll]=\"true\"-->\r\n                         <!--[searchable]=\"true\"-->\r\n                         <!--[hideSelected]=\"true\"-->\r\n                         <!--formControlName=\"subclient_id\">-->\r\n              <!--</ng-select>-->\r\n            <!--</div>-->\r\n\r\n            <div class=\"col-md-9 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button [disabled]=\"filterForm.invalid\" type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"entity_id.value\">\r\n          <span class=\"tag__title\">Client name :</span>\r\n          <span>\r\n             <ng-select [items]=\"clientList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"entity_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"userId.value\">\r\n          <span class=\"tag__title\">User Name :</span>\r\n          <span>\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"User Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"user_id\"\r\n                         (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('user_id')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"service_id.value\">\r\n          <span class=\"tag__title\">Service :</span>\r\n          <span>\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"service_id\" placeholder=\"Service\"\r\n                            (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                  <mat-option *ngFor=\"let service of serviceList;\" [value]=\"service.id\">\r\n                    {{service.service_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('service_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"master_activity_id.value && master_activity_id.value.length\">\r\n          <span class=\"tag__title\">Master activity :</span>\r\n          <span>\r\n            <ng-select [items]=\"masterActivityList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true); getTaskFilterList($event);\"\r\n                       formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('master_activity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"task_id.value && task_id.value.length\">\r\n          <span class=\"tag__title\">Task :</span>\r\n          <span>\r\n            <ng-select [items]=\"taskList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Task\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"task_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('task_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"subactivityCode.value\">\r\n          <span class=\"tag__title\">Sub Activity :</span>\r\n          <span>\r\n            <ng-select [items]=\"subActivityList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"subactivity_full_name\"\r\n                       placeholder=\"Sub Activity\"\r\n                       bindValue=\"subactivity_code\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"subactivity_code\">\r\n            </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('subactivity_code')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"start_date.value\">\r\n          <span class=\"tag__title\">From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"start_date\" [matDatepicker]=\"perdiodFromDate\"\r\n                     placeholder=\"From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" readonly>\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('start_date')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"end_date.value\">\r\n          <span class=\"tag__title\">To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"end_date\" [matDatepicker]=\"perdiodToDate\" (click)=\"perdiodToDate.open()\"\r\n                     placeholder=\"To\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" readonly>\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('end_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"billingStatus.value\">\r\n          <span class=\"tag__title\">Billing Status :</span>\r\n          <span>\r\n            <mat-form-field>\r\n                <mat-select formControlName=\"billing_status\" placeholder=\"Billing Status\" [multiple]=\"true\"\r\n                            (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                  <mat-option *ngFor=\"let statusList of billingStatusList\" value=\"{{statusList.key}}\">\r\n                    {{statusList.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('billing_status')\">close</mat-icon>\r\n        </div>\r\n\r\n        <!--<div class=\"tag\" *ngIf=\"subclientId.value\">-->\r\n          <!--<span class=\"tag__title\">Sub Client :</span>-->\r\n          <!--<span>-->\r\n           <!--<ng-select [items]=\"subClientList\"-->\r\n                      <!--[closeOnSelect]=\"true\"-->\r\n                      <!--bindLabel=\"subclient\"-->\r\n                      <!--placeholder=\"Sub Client\"-->\r\n                      <!--bindValue=\"id\"-->\r\n                      <!--[virtualScroll]=\"true\"-->\r\n                      <!--[searchable]=\"true\"-->\r\n                      <!--[hideSelected]=\"true\"-->\r\n                      <!--formControlName=\"subclient_id\">-->\r\n              <!--</ng-select>-->\r\n          <!--</span>-->\r\n          <!--<mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('subclient_id')\">close</mat-icon>-->\r\n        <!--</div>-->\r\n\r\n        <div class=\"clearAll-tags\" *ngIf=\"\r\n          entity_id.value\r\n          || (master_activity_id.value && master_activity_id.value.length)\r\n          || (task_id.value && task_id.value.length)\r\n          || service_id.value\r\n          || start_date.value\r\n          || end_date.value\r\n          || userId.value\r\n          || subclientId.value\r\n          || subactivityCode.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"expand-grid\">\r\n      <div>\r\n        <div class=\"expand-grid__thead\">\r\n          <table>\r\n            <thead>\r\n            <tr>\r\n              <th width=\"5%\">Sr. No</th>\r\n\r\n              <th width=\"8%\" (click)=\"getSortData('userfullname',\r\n            (sortBy === 'userfullname') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">User Name\r\n                <i *ngIf=\"sortBy === 'userfullname'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'userfullname'),\r\n                 'icon-up' : ((sortBy === 'userfullname') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'userfullname') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"18%\" (click)=\"getSortData('entity_name',\r\n            (sortBy === 'entity_name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Client Name\r\n                <i *ngIf=\"sortBy === 'entity_name'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'entity_name'),\r\n                 'icon-up' : ((sortBy === 'entity_name') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'entity_name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"10%\" (click)=\"getSortData('master',\r\n            (sortBy === 'master') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Master Activity\r\n                <i *ngIf=\"sortBy === 'master'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'master'),\r\n                 'icon-up' : ((sortBy === 'master') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'master') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"12%\"\r\n                  (click)=\"getSortData('task', (sortBy === 'task') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n                Task\r\n                <i *ngIf=\"sortBy === 'task'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'task'),\r\n                 'icon-up' : ((sortBy === 'task') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'task') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"13%\">Period</th>\r\n\r\n              <th width=\"10%\"\r\n                  (click)=\"getSortData('date', (sortBy === 'date') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n                Timesheet Date\r\n                <i *ngIf=\"sortBy === 'date'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'date'),\r\n                 'icon-up' : ((sortBy === 'date') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'date') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n              <th width=\"10%\">Reviewer</th>\r\n              <th width=\"9%\"\r\n                  (click)=\"getSortData('billing_status', (sortBy === 'billing_status') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n                Billing Status\r\n                <i *ngIf=\"sortBy === 'billing_status'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'billing_status'),\r\n                 'icon-up' : ((sortBy === 'billing_status') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'billing_status') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n              <th width=\"5%\">Action</th>\r\n            </tr>\r\n            </thead>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n          <table *ngIf=\"timeSheetList.length\">\r\n            <tbody *ngFor=\"let timeSheet of timeSheetList; let i = index;\">\r\n            <tr [ngClass]=\"{'is-active-row' : trIndex === i}\" class=\"hover-icons row-data\">\r\n              <td width=\"5%\" (click)=\"openRow(i)\">\r\n                <a class=\"open-inner-data\">\r\n                  <mat-icon [ngClass]=\"{'is-open' : trIndex === i}\" class=\"material-icons\">keyboard_arrow_down\r\n                  </mat-icon>\r\n                </a>\r\n                {{+pageSize * (pageIndex) + i + 1}}\r\n              </td>\r\n              <td width=\"8%\" class=\"word-break\">{{timeSheet?.userfullname}}</td>\r\n              <td width=\"18%\" class=\"word-break\">{{timeSheet?.entity_name}}</td>\r\n              <td width=\"10%\">{{timeSheet?.master}}</td>\r\n              <td width=\"12%\" class=\"word-break\">{{timeSheet?.task}}</td>\r\n              <td width=\"13%\">{{timeSheet?.start_date | date : 'dd-MM-yyyy'}} to\r\n                {{timeSheet?.end_date | date : 'dd-MM-yyyy'}}\r\n              </td>\r\n              <td width=\"10%\">{{timeSheet?.date | date : 'dd-MM-yyyy'}}</td>\r\n              <td width=\"10%\">\r\n                <mat-form-field [floatLabel]=\"'never'\" class=\"grid_select_100rem\">\r\n                  <mat-select placeholder=\"Reviewer\" [value]=\"+timeSheet?.reviewer_id\"\r\n                              (selectionChange)=\"onChangeOfReviewer($event.value,timeSheet?.id)\">\r\n                    <mat-option *ngFor=\"let reviewer of reviewerList;\" [value]=\"+reviewer.id\">\r\n                      {{reviewer.userfullname}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </td>\r\n              <td width=\"9%\"><span class=\"label-turquoise-bg-color\" matTooltip=\"Units\">{{timeSheet?.units}}</span>\r\n                {{getBillingStatusName(timeSheet?.billing_status)}}\r\n              </td>\r\n              <td width=\"5%\">\r\n                <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Fill Reviewed Timesheet'\"\r\n                          (click)=\"onEditTimeSheet(timeSheet)\">\r\n                  alarm_add\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n\r\n\r\n            <tr *ngIf=\"trIndex === i\" class=\"inner-data\">\r\n              <div class=\"row PT-20 PB-20\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"inner-data__view\">\r\n                    <div>Sub Activity:</div>\r\n                    <div>{{timeSheet?.subactivity_full_name}}</div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"inner-data__view\">\r\n                    <div>Notes:</div>\r\n                    <div>{{timeSheet?.notes}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"expand-grid__tfoot\" *ngIf=\"timeSheetList.length\">\r\n          <table>\r\n            <tfoot>\r\n            <tr>\r\n              <td colspan=\"10\">\r\n                <mat-paginator [length]=\"totalRecords\"\r\n                               [pageSize]=\"pageSize\"\r\n                               [pageIndex]=\"pageIndex\"\r\n                               [pageSizeOptions]=\"pageArray\"\r\n                               (page)=\"onPageChange($event)\">\r\n                </mat-paginator>\r\n              </td>\r\n            </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n  <div *ngIf=\"timeSheetList.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- End Data Grid -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/review-timesheet.component.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/review-timesheet.component.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vdG9kYXlzLXRpbWVzaGVldC9yZXZpZXctdGltZXNoZWV0L3Jldmlldy10aW1lc2hlZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/review-timesheet.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/review-timesheet.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ReviewTimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewTimesheetComponent", function() { return ReviewTimesheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared-user.service */ "./src/utility/shared-service/shared-user.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ReviewTimesheetComponent = /** @class */ (function () {
    function ReviewTimesheetComponent(_fb, _router, dialog, _commonCrudService, _sharedObjService, _sharedService, _sharedUserService) {
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        this._sharedUserService = _sharedUserService;
        // Data Variables
        this.isDeleteItem = false;
        this.timeSheetList = [];
        this.userList = [];
        this.masterActivityList = [];
        this.taskList = [];
        this.clientList = [];
        this.subActivityList = [];
        this.categoryData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["category"];
        this.staffList = [];
        this.tamList = [];
        this.serviceList = [];
        this.subClientList = [];
        this.reviewerList = [];
        this.billingStatusList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["WIPInvoiceBillingStatus"];
        this.PeriodFromValue = null;
        this.PeriodToValue = null;
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenHistoryDialog = false;
        this.isOpenFilterView = false;
        this.isOpenFilter = false;
        this.equalJSON = { 'is_reviewed': 0 };
        this.likeJSON = {};
        this.inJSON = {};
        this.trIndex = -1;
        this.tabIDWorksheetHierarchy = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_MASTERACTIVITY;
        this.tabIDWorksheetTraining = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_WORKSHEETTRAINING;
        this.tabIDWorksheetSubClientList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_SUBCLIENTLIST;
        this.tabIDWorksheetReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
        this.tabIDWorksheetPeerReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
        this.tabIDWorksheetMasterChecklist = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_MASTERCHECKLIST;
        this.tabIDWorksheetMultiplueStatusChange = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;
        this.isMultipleStatusUpdate = false;
        this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
    }
    ReviewTimesheetComponent.prototype.ngOnInit = function () {
        this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
        this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
        this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
        this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
        this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
        this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
        this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
        this.userData = this._sharedUserService.getUser();
        this.initializationMethod();
    };
    Object.defineProperty(ReviewTimesheetComponent.prototype, "entity_id", {
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewTimesheetComponent.prototype, "userId", {
        get: function () {
            return this.filterForm.get('user_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewTimesheetComponent.prototype, "master_activity_id", {
        get: function () {
            return this.filterForm.get('master_activity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewTimesheetComponent.prototype, "task_id", {
        get: function () {
            return this.filterForm.get('task_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewTimesheetComponent.prototype, "service_id", {
        get: function () {
            return this.filterForm.get('service_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewTimesheetComponent.prototype, "start_date", {
        get: function () {
            return this.filterForm.get('start_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewTimesheetComponent.prototype, "end_date", {
        get: function () {
            return this.filterForm.get('end_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewTimesheetComponent.prototype, "subactivityCode", {
        get: function () {
            return this.filterForm.get('subactivity_code');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewTimesheetComponent.prototype, "billingStatus", {
        get: function () {
            return this.filterForm.get('billing_status');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewTimesheetComponent.prototype, "subclientId", {
        get: function () {
            return this.filterForm.get('subclient_id');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialization Methods
     */
    ReviewTimesheetComponent.prototype.initializationMethod = function () {
        this.createAdvanceFilterForm();
        this.getDropdownData();
        this.setAdvanceFilter(this.filterForm);
    };
    /**
     * Get Dropdown Data
     */
    ReviewTimesheetComponent.prototype.getDropdownData = function () {
        var _this = this;
        // Get Subactivity List
        this._sharedObjService.getSubactivity({
            'records': 'all',
            'sortBy': 'asc',
            'sortOrder': 'subactivity_code'
        }, {}).subscribe(function (response) {
            _this.subActivityList = response;
        });
        // Get Client
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = response;
        });
        // Get Master Activity
        this._sharedObjService.getMasterActivity({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.masterActivityList = response;
        });
        // Get Task
        this._sharedObjService.getTask({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.taskList = response;
        });
        // Get User List
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.userList = response;
        });
        // Get Reviewer List
        this._sharedObjService.getUserList({ 'records': 'all' }, {
            'compare': { 'equal': { 'is_active': 1 } },
            'in': { 'designation_id': '9,10,68,69,70,71,73' },
            'findinset': { 'team_id': [2] }
        }).subscribe(function (response) {
            _this.reviewerList = response;
        });
        // Get Service List
        this._sharedObjService.getServices({}, { 'compare': { 'equal': { 'parent_id': 0 } } }).subscribe(function (response) {
            if (response) {
                _this.serviceList = response;
            }
        });
        // Get Sub Client  List
        this._sharedObjService.getSubClientList({}, {}).subscribe(function (response) {
            if (response) {
                _this.subClientList = response;
            }
        });
    };
    /**
     * Expand row table method
     * @param i
     */
    ReviewTimesheetComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Get Worksheet Listing
     * @param pageNumber
     * @param key
     * @param val
     */
    ReviewTimesheetComponent.prototype.getTimeSheetListing = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].TIMESHEET_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleTimeSheetRespone(response);
        });
    };
    /**
     * Handle Timesheet Response
     * @param response
     */
    ReviewTimesheetComponent.prototype.handleTimeSheetRespone = function (response) {
        this.timeSheetList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Create filter Master Activity
     */
    ReviewTimesheetComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date()),
            subactivity_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            billing_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            subclient_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            worksheet_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date()),
            subactivity_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            billing_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            subclient_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            worksheet_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
    };
    /**
     * Toogle Filter
     */
    ReviewTimesheetComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Pagination page change event
     * @param event
     */
    ReviewTimesheetComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getTimeSheetListing(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    ReviewTimesheetComponent.prototype.resetFilterForm = function () {
        this.likeJSON = {};
        this.equalJSON = { 'is_reviewed': 0 };
        this.inJSON = {};
        this.PeriodFromValue = null;
        this.PeriodToValue = null;
        this.isOpenFilterView = false;
        this.createAdvanceFilterForm();
        this.getTimeSheetListing(1, 'id', 'desc');
    };
    /**
     * Get Query Params
     * @param page
     * @param sortKey
     * @param sortOrder
     */
    ReviewTimesheetComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
        return params;
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    ReviewTimesheetComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getTimeSheetListing(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    ReviewTimesheetComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        if (this.PeriodFromValue) {
            filter['greaterthanequal'] = {};
        }
        if (this.PeriodToValue) {
            filter['lessthanequal'] = {};
        }
        if (this.PeriodFromValue) {
            filter['greaterthanequal']['date'] = moment__WEBPACK_IMPORTED_MODULE_12__(this.PeriodFromValue).format('YYYY-MM-DD');
        }
        if (this.PeriodToValue) {
            filter['lessthanequal']['date'] = moment__WEBPACK_IMPORTED_MODULE_12__(this.PeriodToValue).format('YYYY-MM-DD');
        }
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_3__["CommonFunctions"].isEmpty(filter)) {
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
    ReviewTimesheetComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].TIMESHEET_LISTING, params, this.getSearchParam(), 'Peer Review Worksheet ', 0).subscribe(function (response) {
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    ReviewTimesheetComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'entity_id': form.value['entity_id'],
                'master_activity_id': form.value['master_activity_id'],
                'task_id': form.value['task_id'],
                'service_id': form.value['service_id'],
                'start_date': form.value['start_date'],
                'end_date': form.value['end_date'],
                'user_id': form.value['user_id'],
                'subclient_id': form.value['subclient_id'],
                'billing_status': form.value['billing_status'],
                'subactivity_code': form.value['subactivity_code'],
                'worksheet_id': form.value['worksheet_id']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    ReviewTimesheetComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = { 'is_reviewed': 0 };
        this.likeJSON = {};
        this.inJSON = {};
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
        if (form.value['start_date'] !== '' && form.value['start_date']) {
            this.PeriodFromValue = form.value['start_date'];
            delete form.value['start_date'];
        }
        if (form.value['end_date'] !== '' && form.value['end_date']) {
            this.PeriodToValue = form.value['end_date'];
            delete form.value['end_date'];
        }
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'entity_id' || key === 'service_id' || key === 'worksheet_id' || key === 'user_id' || key === 'subactivity_code' || key === 'billing_status' || key === 'subclient_id') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'master_activity_id' || key === 'task_id') {
                        this.inJSON[key] = form.value[key].join(',');
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getTimeSheetListing(1, 'id', 'desc');
        }
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    ReviewTimesheetComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'start_date') {
            this.PeriodFromValue = null;
        }
        else if (elementName === 'end_date') {
            this.PeriodToValue = null;
        }
        else if (elementName === 'entity_id' || elementName === 'service_id' || elementName === 'user_id' || elementName === 'subactivity_code' || elementName === 'billing_status' || elementName === 'subclient_id') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'master_activity_id' || elementName === 'task_id') {
            delete this.inJSON[elementName];
        }
        this.getTimeSheetListing(1, 'id', 'desc');
    };
    /**
     * Get Task Filter List
     * @param value
     */
    ReviewTimesheetComponent.prototype.getTaskFilterList = function (value) {
        var _this = this;
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
     * Get Billing Status Name From ID
     * @param status_id
     */
    ReviewTimesheetComponent.prototype.getBillingStatusName = function (status_id) {
        var val = this.billingStatusList.filter(function (elem) { return elem.key === status_id; });
        return (val.length) ? val[0].label : '';
    };
    /**
     * On Change of Reviewer Update
     */
    ReviewTimesheetComponent.prototype.onChangeOfReviewer = function (value, id) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to update reviewer?'
            }
        });
        dialogRef.afterClosed().subscribe(function (responseData) {
            if (responseData) {
                _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].TIMESHEET_LISTING, id, {
                    'reviewer_id': value, '_method': 'put'
                }).subscribe(function (response) {
                    _this.getTimeSheetListing(1, 'id', 'desc');
                });
            }
        });
    };
    /**
     * redirection
     */
    ReviewTimesheetComponent.prototype.onWorksheetDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    ReviewTimesheetComponent.prototype.onTodaysTimesheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * On edit timesheet page redirect
     */
    ReviewTimesheetComponent.prototype.onEditTimeSheet = function (timeSheet) {
        if (timeSheet) {
            this._sharedService.setTimesheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GLOBALDATAKEYS"].TIMESHEET_ITEM_DATA, null);
            this._sharedService.setTimesheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GLOBALDATAKEYS"].TIMESHEET_ITEM_DATA, timeSheet);
            this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_ADD_REVIEW_TIMESHEET]);
        }
    };
    ReviewTimesheetComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilter = false;
        }
    };
    /**
     * Open quick menu
     * @param menuName
     */
    ReviewTimesheetComponent.prototype.onOpenQuickMenu = function (menuName) {
        switch (menuName) {
            case 'addNewWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADD_WORKSHEET]);
                break;
            case 'todayWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_TODAYS_WORKSHEET]);
                break;
            case 'todayTimesheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
                break;
            case 'worksheetHierarchy':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_HIERARCHY]);
                break;
            case 'changeInOuttime':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_CHANGE_IN_OUT_TIME]);
                break;
            case 'subClientList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_SUB_CLIENT_LIST]);
                break;
            case 'worksheetMasterChecklist':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_MASTER_CHECKLIST]);
                break;
            case 'trainingList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_TRAINING_LIST]);
                break;
            case 'revieworKnockBackWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_REVIEW_OR_KNOCK_BACK]);
                break;
            case 'peerReviewWorksheetListing':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
                break;
            case 'changeMultipleWorksheetStatus':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].CHANGE_MULTIPLE_WORKSHEET_STATUS]);
                break;
        }
    };
    /**
     * On home page route
     */
    ReviewTimesheetComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ReviewTimesheetComponent.prototype, "onKeydownHandler", null);
    ReviewTimesheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-timesheet',
            template: __webpack_require__(/*! ./review-timesheet.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/review-timesheet.component.html"),
            styles: [__webpack_require__(/*! ./review-timesheet.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/review-timesheet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
            _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_10__["SharedUserService"]])
    ], ReviewTimesheetComponent);
    return ReviewTimesheetComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/todays-timesheet.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/todays-timesheet.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin Today's Timesheet Container -->\r\n<div class=\"today-timesheet-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onWorksheetDashboard()\">WORKSHEET</a></span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">TODAY'S TIMESHEET</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 PR-0\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('addNewWorksheet')\"\r\n                          *ngIf=\"worksheetTabIDData['add_edit']\">Add New Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayWorksheet')\">Today's Worksheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetHierarchy')\"\r\n                          *ngIf=\"tabDataWorksheetHierarchy['view']\">Worksheet Hierarchy\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('subClientList')\"\r\n                          *ngIf=\"tabDataWorksheetSubClientList['view']\">Sub Client List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetMasterChecklist')\"\r\n                          *ngIf=\"tabDataWorksheetMasterChecklist['view']\">Worksheet Master Checklist\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                          *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('trainingList')\"\r\n                          *ngIf=\"tabDataWorksheetTraining['view']\">Training List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                          *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                    Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('peerReviewWorksheetListing')\"\r\n                          *ngIf=\"tabDataWorksheetPeerReviewerList['view']\">Peer Review Worksheet\r\n                    Listing\r\n                  </button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <!-- Start button  container -->\r\n  <div class=\"with-button-container PB-10\">\r\n    <button type=\"button\" class=\"btn-primary MR-5 ML-10\" (click)=\"onOpenTodaysWorksheet()\">\r\n      Today's Worksheet\r\n    </button>\r\n    <button type=\"button\" class=\"btn-primary MR-5\" (click)=\"onOpenTodaysIncompletedWorksheet()\"\r\n            *ngIf=\"isInCompletedWorksheet['view']\">\r\n      Incomplete Worksheet\r\n    </button>\r\n    <button type=\"button\" class=\"btn-primary MR-5\" (click)=\"onOpenReviewTimesheets()\" *ngIf=\"reviewerTimesheetRights\">\r\n      Review Timesheets (<span>{{reviewTimesheetCount}}</span>)\r\n    </button>\r\n  </div>\r\n  <!-- End button container -->\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <button class=\"open-dialog-btn\" (click)=\"onAddTimeSheet()\"\r\n                  *ngIf=\"isAddTimesheetButtonRights && userData?.user_timesheet_fillup_flag === 1\">\r\n            <mat-icon class=\"material-icons\">add</mat-icon>\r\n            Add New Timesheet\r\n          </button>\r\n          <h3 *ngIf=\"!isAddTimesheetButtonRights && userData?.user_timesheet_fillup_flag === 0\">Today's Timesheet</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onToggleFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li (click)=\"downloadExcel()\">\r\n              <a>\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc\r\n          <mat-icon class=\"material-icons\">close</mat-icon>\r\n        </span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Parent Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         (change)=\"onChangeParentEntity($event)\"\r\n                         formControlName=\"parent_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"entity_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"User Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"user_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"service_id\" placeholder=\"Service\">\r\n                  <mat-option *ngFor=\"let service of serviceList;\" [value]=\"service.id\">\r\n                    {{service.service_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"masterActivityList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Master activity\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         (change)=\"getTaskFilterList($event)\"\r\n                         formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"taskList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Task\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         formControlName=\"task_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"subActivityList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"subactivity_full_name\"\r\n                         placeholder=\"Sub Activity\"\r\n                         bindValue=\"subactivity_code\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"subactivity_code\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"from_date\" [matDatepicker]=\"periodFrom\"\r\n                           placeholder=\"Timesheet From\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"to_date\" [matDatepicker]=\"periodTo\" placeholder=\"Timesheet To\"\r\n                           readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"start_date\" [matDatepicker]=\"speriodFrom\"\r\n                           placeholder=\"Period From\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"speriodFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #speriodFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"end_date\" [matDatepicker]=\"eperiodTo\" placeholder=\"Period To\"\r\n                           readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"eperiodTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #eperiodTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"billing_status\" placeholder=\"Billing Status\" [multiple]=\"true\">\r\n                  <mat-option *ngFor=\"let statusList of billingStatusList\" value=\"{{statusList.key}}\">\r\n                    {{statusList.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!--<div class=\"col-md-3 MT-10\">-->\r\n              <!--<ng-select [items]=\"subClientList\"-->\r\n                         <!--[closeOnSelect]=\"true\"-->\r\n                         <!--bindLabel=\"subclient\"-->\r\n                         <!--placeholder=\"Sub Client\"-->\r\n                         <!--bindValue=\"id\"-->\r\n                         <!--[virtualScroll]=\"true\"-->\r\n                         <!--[searchable]=\"true\"-->\r\n                         <!--[hideSelected]=\"true\"-->\r\n                         <!--formControlName=\"subclient_id\">-->\r\n              <!--</ng-select>-->\r\n            <!--</div>-->\r\n\r\n            <div class=\"col-md-3 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button [disabled]=\"filterForm.invalid\" type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"parent_id.value\">\r\n          <span class=\"tag__title\">Parent Trading Name:</span>\r\n          <span>\r\n            <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"parent_id\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);onChangeParentEntity($event);\">\r\n              </ng-select>\r\n            </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"entity_id.value\">\r\n          <span class=\"tag__title\">Client name :</span>\r\n          <span>\r\n             <ng-select [items]=\"clientList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"entity_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"userId.value\">\r\n          <span class=\"tag__title\">User Name :</span>\r\n          <span>\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"User Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"user_id\"\r\n                         (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('user_id')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"service_id.value\">\r\n          <span class=\"tag__title\">Service :</span>\r\n          <span>\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"service_id\" placeholder=\"Service\"\r\n                            (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                  <mat-option *ngFor=\"let service of serviceList;\" [value]=\"service.id\">\r\n                    {{service.service_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('service_id')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"master_activity_id.value && master_activity_id.value.length\">\r\n          <span class=\"tag__title\">Master activity :</span>\r\n          <span>\r\n            <ng-select [items]=\"masterActivityList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true); getTaskFilterList($event);\"\r\n                       formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('master_activity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"task_id.value && task_id.value.length\">\r\n          <span class=\"tag__title\">Task :</span>\r\n          <span>\r\n            <ng-select [items]=\"taskList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Task\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"task_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('task_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"subactivityCode.value\">\r\n          <span class=\"tag__title\">Sub Activity :</span>\r\n          <span>\r\n             <ng-select [items]=\"subActivityList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"subactivity_full_name\"\r\n                        placeholder=\"Sub Activity\"\r\n                        bindValue=\"subactivity_code\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                        formControlName=\"subactivity_code\">\r\n            </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('subactivity_code')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"from_date.value\">\r\n          <span class=\"tag__title\">From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"from_date\" [matDatepicker]=\"perdiodFromDate\"\r\n                     placeholder=\"From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" readonly>\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('from_date')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"to_date.value\">\r\n          <span class=\"tag__title\">To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"to_date\" [matDatepicker]=\"perdiodToDate\" (click)=\"perdiodToDate.open()\"\r\n                     placeholder=\"To\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" readonly>\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('to_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"start_date.value\">\r\n          <span class=\"tag__title\">From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"start_date\" [matDatepicker]=\"sperdiodFromDate\"\r\n                     placeholder=\"From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" readonly>\r\n              <mat-datepicker-toggle matSuffix [for]=\"sperdiodFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #sperdiodFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('start_date')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"end_date.value\">\r\n          <span class=\"tag__title\">To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"end_date\" [matDatepicker]=\"eperdiodToDate\" (click)=\"perdiodToDate.open()\"\r\n                     placeholder=\"To\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" readonly>\r\n              <mat-datepicker-toggle matSuffix [for]=\"eperdiodToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #eperdiodToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('end_date')\">close</mat-icon>\r\n        </div>\r\n\r\n\r\n        <div class=\"tag\" *ngIf=\"billingStatus.value\">\r\n          <span class=\"tag__title\">Billing Status :</span>\r\n          <span>\r\n            <mat-form-field>\r\n                <mat-select formControlName=\"billing_status\" placeholder=\"Billing Status\" [multiple]=\"true\"\r\n                            (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                  <mat-option *ngFor=\"let statusList of billingStatusList\" value=\"{{statusList.key}}\">\r\n                    {{statusList.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('billing_status')\">close</mat-icon>\r\n        </div>\r\n\r\n        <!--<div class=\"tag\" *ngIf=\"subclientId.value\">-->\r\n          <!--<span class=\"tag__title\">Sub Client :</span>-->\r\n          <!--<span>-->\r\n           <!--<ng-select [items]=\"subClientList\"-->\r\n                      <!--[closeOnSelect]=\"true\"-->\r\n                      <!--bindLabel=\"subclient\"-->\r\n                      <!--placeholder=\"Sub Client\"-->\r\n                      <!--bindValue=\"id\"-->\r\n                      <!--[virtualScroll]=\"true\"-->\r\n                      <!--[searchable]=\"true\"-->\r\n                      <!--[hideSelected]=\"true\"-->\r\n                      <!--formControlName=\"subclient_id\">-->\r\n              <!--</ng-select>-->\r\n          <!--</span>-->\r\n          <!--<mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('subclient_id')\">close</mat-icon>-->\r\n        <!--</div>-->\r\n\r\n        <div class=\"clearAll-tags\" *ngIf=\"\r\n          entity_id.value || parent_id.value\r\n          || (master_activity_id.value && master_activity_id.value.length)\r\n          || (task_id.value && task_id.value.length)\r\n          || service_id.value\r\n          || from_date.value\r\n          || to_date.value\r\n          || start_date.value\r\n          || end_date.value\r\n          || userId.value\r\n          || subclientId.value\r\n          || subactivityCode.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"expand-grid\">\r\n      <div>\r\n        <div class=\"expand-grid__thead\">\r\n          <table>\r\n            <thead>\r\n            <tr>\r\n              <th width=\"5%\">Sr. No</th>\r\n\r\n              <th width=\"10%\" (click)=\"getSortData('userfullname',\r\n            (sortBy === 'userfullname') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">User Name\r\n                <i *ngIf=\"sortBy === 'userfullname'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'userfullname'),\r\n                 'icon-up' : ((sortBy === 'userfullname') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'userfullname') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"12%\">Parent Trading Name</th>\r\n\r\n              <th width=\"16%\" (click)=\"getSortData('entity_name',\r\n            (sortBy === 'entity_name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Client Name\r\n                <i *ngIf=\"sortBy === 'entity_name'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'entity_name'),\r\n                 'icon-up' : ((sortBy === 'entity_name') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'entity_name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"10%\" (click)=\"getSortData('master',\r\n            (sortBy === 'master') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Master Activity\r\n                <i *ngIf=\"sortBy === 'master'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'master'),\r\n                 'icon-up' : ((sortBy === 'master') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'master') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"10%\"\r\n                  (click)=\"getSortData('task', (sortBy === 'task') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n                Task\r\n                <i *ngIf=\"sortBy === 'task'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'task'),\r\n                 'icon-up' : ((sortBy === 'task') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'task') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <!--<th width=\"5%\">SubActivity</th>-->\r\n              <th width=\"12%\">Period</th>\r\n\r\n              <th width=\"8%\"\r\n                  (click)=\"getSortData('date', (sortBy === 'date') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n                Timesheet Date\r\n                <i *ngIf=\"sortBy === 'date'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'date'),\r\n                 'icon-up' : ((sortBy === 'date') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'date') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"10%\"\r\n                  (click)=\"getSortData('billing_status', (sortBy === 'billing_status') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n                Billing Status\r\n                <i *ngIf=\"sortBy === 'billing_status'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'billing_status'),\r\n                 'icon-up' : ((sortBy === 'billing_status') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'billing_status') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"7%\">Action</th>\r\n            </tr>\r\n            </thead>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n          <table *ngIf=\"timeSheetList.length\">\r\n            <tbody *ngFor=\"let timeSheet of timeSheetList; let i = index;\">\r\n            <tr [ngClass]=\"{'is-active-row' : trIndex === i}\" class=\"hover-icons row-data\">\r\n              <td width=\"5%\">\r\n                <a class=\"open-inner-data\" (click)=\"openRow(i)\">\r\n                  <mat-icon [ngClass]=\"{'is-open' : trIndex === i}\" class=\"material-icons\">keyboard_arrow_down\r\n                  </mat-icon>\r\n                </a>\r\n                {{+pageSize * (pageIndex) + i + 1}}\r\n              </td>\r\n              <td width=\"10%\" class=\"word-break\">{{timeSheet?.userfullname}}</td>\r\n              <td width=\"12%\" class=\"word-break\">{{timeSheet?.parent_name}}</td>\r\n              <td width=\"16%\" class=\"word-break\">{{timeSheet?.entity_name}}</td>\r\n              <td width=\"10%\" class=\"word-break\">{{timeSheet?.master}}</td>\r\n              <td width=\"10%\" class=\"word-break\">{{timeSheet?.task}}</td>\r\n              <!--<td width=\"5%\" class=\"text-center\">{{timeSheet?.subactivity_code}}</td>-->\r\n              <td width=\"12%\">{{timeSheet?.start_date | date : 'dd-MM-yyyy'}} to\r\n                {{timeSheet?.end_date | date : 'dd-MM-yyyy'}}\r\n              </td>\r\n              <td width=\"8%\">{{timeSheet?.date | date : 'dd-MM-yyyy'}}</td>\r\n              <td width=\"10%\"><span class=\"label-turquoise-bg-color\">{{timeSheet?.units}}</span>\r\n                {{getBillingStatusName(timeSheet?.billing_status)}}\r\n              </td>\r\n              <td width=\"7%\">\r\n                <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Edit'\" (click)=\"onEditTimeSheet(timeSheet)\"\r\n                          *ngIf=\"checkToShowButton(timeSheet, 1)\">edit\r\n                </mat-icon>\r\n                <mat-icon class=\"light-dark-blue-color\" [matTooltip]=\"'View Extra Item'\"\r\n                          (click)=\"onOpenMoreDetailsDialog(timeSheet)\">\r\n                  remove_red_eye\r\n                </mat-icon>\r\n                <mat-icon class=\"red-color\" [matTooltip]=\"'Delete'\" (click)=\"openTodayTimesheetDeleteDialog(timeSheet)\"\r\n                          *ngIf=\"checkToShowButton(timeSheet, 2)\">\r\n                  delete\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n\r\n\r\n            <tr *ngIf=\"trIndex === i\" class=\"inner-data\">\r\n              <div class=\"row PT-20 PB-20\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"inner-data__view-notes\">\r\n                    <div>Sub Activity:</div>\r\n                    <div>{{timeSheet?.subactivity_full_name}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"inner-data__view-notes\">\r\n                    <div>Notes:</div>\r\n                    <div [innerHtml]=\"toHTML(timeSheet?.notes) | newline | safeHtml\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"expand-grid__tfoot\" *ngIf=\"timeSheetList.length\">\r\n          <table>\r\n            <tfoot>\r\n            <tr>\r\n              <td colspan=\"3\" class=\"total_units\">\r\n                <label>Total Units:</label> <span class=\"primary-color ML-10\">{{totalUnits}}</span>\r\n              </td>\r\n              <td colspan=\"10\">\r\n                <mat-paginator [length]=\"totalRecords\"\r\n                               [pageSize]=\"pageSize\"\r\n                               [pageIndex]=\"pageIndex\"\r\n                               [pageSizeOptions]=\"pageArray\"\r\n                               (page)=\"onPageChange($event)\">\r\n                </mat-paginator>\r\n              </td>\r\n            </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n  <div *ngIf=\"timeSheetList.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- End Data Grid -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/todays-timesheet.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/todays-timesheet.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vdG9kYXlzLXRpbWVzaGVldC90b2RheXMtdGltZXNoZWV0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/todays-timesheet.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/todays-timesheet.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: TodaysTimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodaysTimesheetComponent", function() { return TodaysTimesheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _view_more_details_timesheet_dialog_view_more_details_timesheet_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-more-details-timesheet-dialog/view-more-details-timesheet-dialog.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-more-details-timesheet-dialog/view-more-details-timesheet-dialog.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-user.service */ "./src/utility/shared-service/shared-user.service.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var TodaysTimesheetComponent = /** @class */ (function () {
    function TodaysTimesheetComponent(_fb, _router, dialog, _commonCrudService, _sharedObjService, _sharedService, route, _sharedUserService) {
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        this.route = route;
        this._sharedUserService = _sharedUserService;
        // Data Variables
        this.isDeleteItem = false;
        this.timeSheetList = [];
        this.userList = [];
        this.masterActivityList = [];
        this.taskList = [];
        this.clientList = [];
        this.filteredTradingClientList = [];
        this.parentClientList = [];
        this.subActivityList = [];
        this.categoryData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["category"];
        this.staffList = [];
        this.tamList = [];
        this.serviceList = [];
        this.subClientList = [];
        this.billingStatusList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["WIPInvoiceBillingStatus"];
        this.PeriodFromValue = null;
        this.PeriodToValue = null;
        this.TimesheetFromValue = null;
        this.TimesheetToValue = null;
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenHistoryDialog = false;
        this.isOpenFilterView = false;
        this.isOpenFilter = false;
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.trIndex = -1;
        this.reviewTimesheetCount = 0;
        this.worksheetID = 0;
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"].WORKFLOW_TIMESHEET;
        this.isAddTimesheetButtonRights = false;
        this.reviewerTimesheetRights = false;
        this.tabIDWorksheetHierarchy = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"].WORKFLOW_MASTERACTIVITY;
        this.tabIDWorksheetTraining = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"].WORKFLOW_WORKSHEETTRAINING;
        this.tabIDWorksheetSubClientList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"].WORKFLOW_SUBCLIENTLIST;
        this.tabIDWorksheetReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"].WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
        this.tabIDWorksheetPeerReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"].WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
        this.tabIDWorksheetMasterChecklist = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"].WORKFLOW_MASTERCHECKLIST;
        this.tabIDWorksheetMultiplueStatusChange = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"].WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;
        this.isMultipleStatusUpdate = false;
        this.selectedUserID = 0;
        this.selectedEntityID = 0;
        this.selectedStartDate = null;
        this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
        this.tabIDInCompleted = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"].WORKFLOW_VIEWINCOMPLETEDWORKSHEET;
        this.reviewTimesheetID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"];
        this.totalUnits = 0;
        this.isViewTimesheet = 0;
        this.worksheetTaskID = null;
        this.isBackDateTimesheet = false;
    }
    TodaysTimesheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            var dataItem = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_13__["convertURLParamToDecode"])(params);
            if (dataItem) {
                // console.log(dataItem);
                if (dataItem['viewTimesheet'] && dataItem['viewTimesheet'] === '1') {
                    _this.selectedEntityID = _this.equalJSON['entity_id'] = (dataItem['entity_id']) ? Number(dataItem['entity_id']) : null;
                    _this.PeriodFromValue = (dataItem['start_date']) ? moment__WEBPACK_IMPORTED_MODULE_12__(dataItem['start_date']).format('YYYY-MM-DD') : null;
                    _this.PeriodToValue = (dataItem['end_date']) ? moment__WEBPACK_IMPORTED_MODULE_12__(dataItem['end_date']).format('YYYY-MM-DD') : null;
                    _this.worksheetTaskID = _this.inJSON['task_id'] = (dataItem['task_id']) ? Number(dataItem['task_id']) : null;
                    _this.isViewTimesheet = 1;
                }
                else {
                    _this.selectedUserID = _this.equalJSON['user_id'] = (dataItem['user_id']) ? Number(dataItem['user_id']) : null;
                    _this.TimesheetFromValue = (dataItem['date']) ? moment__WEBPACK_IMPORTED_MODULE_12__(dataItem['date']).format('YYYY-MM-DD') : null;
                    _this.TimesheetToValue = (dataItem['date']) ? moment__WEBPACK_IMPORTED_MODULE_12__(dataItem['date']).format('YYYY-MM-DD') : null;
                }
            }
        });
        this.isInCompletedWorksheet = this._sharedService.checkUserPrivilegesTabs(this.tabIDInCompleted);
        this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
        this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
        this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
        this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
        this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
        this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
        this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
        this.isBackDateTimesheet = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'back_date_timesheet', 1);
        this.userData = this._sharedUserService.getUser();
        this.worksheetID = this._sharedService.getWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["GLOBALDATAKEYS"].WORKSHEET_ID);
        this.isAddTimesheetButtonRights = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'add_timesheet', 1);
        this.reviewerTimesheetRights = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'reviewer_timesheet', 1);
        this.initializationMethod();
    };
    Object.defineProperty(TodaysTimesheetComponent.prototype, "parent_id", {
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysTimesheetComponent.prototype, "entity_id", {
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysTimesheetComponent.prototype, "userId", {
        get: function () {
            return this.filterForm.get('user_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysTimesheetComponent.prototype, "master_activity_id", {
        get: function () {
            return this.filterForm.get('master_activity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysTimesheetComponent.prototype, "task_id", {
        get: function () {
            return this.filterForm.get('task_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysTimesheetComponent.prototype, "service_id", {
        get: function () {
            return this.filterForm.get('service_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysTimesheetComponent.prototype, "start_date", {
        get: function () {
            return this.filterForm.get('start_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysTimesheetComponent.prototype, "end_date", {
        get: function () {
            return this.filterForm.get('end_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysTimesheetComponent.prototype, "from_date", {
        get: function () {
            return this.filterForm.get('from_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysTimesheetComponent.prototype, "to_date", {
        get: function () {
            return this.filterForm.get('to_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysTimesheetComponent.prototype, "subactivityCode", {
        get: function () {
            return this.filterForm.get('subactivity_code');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysTimesheetComponent.prototype, "billingStatus", {
        get: function () {
            return this.filterForm.get('billing_status');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysTimesheetComponent.prototype, "subclientId", {
        get: function () {
            return this.filterForm.get('subclient_id');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialization Methods
     */
    TodaysTimesheetComponent.prototype.initializationMethod = function () {
        this.createAdvanceFilterForm();
        this.getDropdownData();
        this.setAdvanceFilter(this.filterForm);
    };
    /**
     * Get Dropdown Data
     */
    TodaysTimesheetComponent.prototype.getDropdownData = function () {
        var _this = this;
        // Get Subactivity List
        this._sharedObjService.getSubactivity({
            'records': 'all', 'sortBy': 'asc',
            'sortOrder': 'subactivity_code'
        }, {}).subscribe(function (response) {
            _this.subActivityList = response;
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
        // Get User List
        // this._sharedObjService.getUserList({'records': 'all'}, {compare:{equals:{is_active : 1}}}).subscribe((response) => {
        //   // this.userList = response;
        // });
        // Get Service List
        this._sharedObjService.getServices({}, { 'compare': { 'equal': { 'parent_id': 0 } } }).subscribe(function (response) {
            if (response) {
                _this.serviceList = response;
            }
        });
        // Get Sub Client  List
        this._sharedObjService.getSubClientList({}, {}).subscribe(function (response) {
            if (response) {
                _this.subClientList = response;
            }
        });
        // Reviewe Timesheet Counte
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].TIMESHEET_LISTING, {
            'counter': 1
        }, { 'compare': { 'equal': { 'is_reviewed': 0 } } }).subscribe(function (response) {
            _this.reviewTimesheetCount = response.payload.data;
        });
    };
    /**
     * Expand row table method
     * @param i
     */
    TodaysTimesheetComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Get Timesheet Listing
     * @param pageNumber
     * @param key
     * @param val
     */
    TodaysTimesheetComponent.prototype.getTimeSheetListing = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].TIMESHEET_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleTimeSheetRespone(response);
        });
    };
    /**
     * Handle Timesheet Response
     * @param response
     */
    TodaysTimesheetComponent.prototype.handleTimeSheetRespone = function (response) {
        var _this = this;
        this.timeSheetList = response.payload.data;
        this.userList = response.payload.userList;
        this.totalUnits = 0;
        this.timeSheetList.map(function (item) {
            _this.totalUnits += (+item.units);
        });
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Create filter Master Activity
     */
    TodaysTimesheetComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.selectedEntityID > 0 ? this.selectedEntityID : null)),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.isViewTimesheet) ? null : (this.selectedUserID) ? this.selectedUserID : this.userData.id),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.worksheetTaskID > 0) ? [this.worksheetTaskID] : null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.isViewTimesheet) ? this.PeriodFromValue : null),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.isViewTimesheet) ? this.PeriodToValue : null),
            from_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.TimesheetFromValue) ? this.TimesheetFromValue : (this.isViewTimesheet) ? null : new Date()),
            to_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.TimesheetToValue) ? this.TimesheetToValue : null),
            subactivity_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            billing_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.selectedEntityID > 0 ? this.selectedEntityID : null)),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.isViewTimesheet) ? null : this.userData.id),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.worksheetTaskID > 0) ? [this.worksheetTaskID] : null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.isViewTimesheet) ? this.PeriodFromValue : null),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.isViewTimesheet) ? this.PeriodToValue : null),
            from_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.TimesheetFromValue) ? this.TimesheetFromValue : (this.isViewTimesheet) ? null : new Date()),
            to_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.TimesheetToValue) ? this.TimesheetToValue : null),
            subactivity_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            billing_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            subclient_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
    };
    /**
     * Toogle Filter
     */
    TodaysTimesheetComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Pagination page change event
     * @param event
     */
    TodaysTimesheetComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getTimeSheetListing(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    TodaysTimesheetComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.filterForm.reset();
        this.advanceFilterForm.reset();
        this.filterForm.reset();
        this.advanceFilterForm.reset();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.PeriodFromValue = null;
        this.PeriodToValue = null;
        this.TimesheetFromValue = null;
        this.TimesheetToValue = null;
        this.isOpenFilterView = false;
        this.getTimeSheetListing(1, 'id', 'desc');
    };
    /**
     * Esc event for close modal
     * @param event
     */
    TodaysTimesheetComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * Get Query Params
     * @param page
     * @param sortKey
     * @param sortOrder
     */
    TodaysTimesheetComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
        return params;
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    TodaysTimesheetComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getTimeSheetListing(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    TodaysTimesheetComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        if (this.PeriodFromValue || this.TimesheetFromValue) {
            filter['greaterthanequal'] = {};
        }
        if (this.PeriodToValue || this.TimesheetToValue) {
            filter['lessthanequal'] = {};
        }
        if (this.PeriodFromValue) {
            filter['greaterthanequal']['start_date'] = moment__WEBPACK_IMPORTED_MODULE_12__(this.PeriodFromValue).format('YYYY-MM-DD');
        }
        if (this.PeriodToValue) {
            filter['lessthanequal']['end_date'] = moment__WEBPACK_IMPORTED_MODULE_12__(this.PeriodToValue).format('YYYY-MM-DD');
        }
        if (this.TimesheetFromValue) {
            filter['greaterthanequal']['date'] = moment__WEBPACK_IMPORTED_MODULE_12__(this.TimesheetFromValue).format('YYYY-MM-DD');
        }
        if (this.TimesheetToValue) {
            filter['lessthanequal']['date'] = moment__WEBPACK_IMPORTED_MODULE_12__(this.TimesheetToValue).format('YYYY-MM-DD');
        }
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_13__["CommonFunctions"].isEmpty(filter)) {
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
    TodaysTimesheetComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].TIMESHEET_LISTING, params, this.getSearchParam(), 'Timesheet ', 0).subscribe(function (response) {
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    TodaysTimesheetComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'service_id': form.value['service_id'],
                'start_date': form.value['start_date'],
                'end_date': form.value['end_date'],
                'from_date': form.value['from_date'],
                'to_date': form.value['to_date'],
                'user_id': form.value['user_id'],
                'subclient_id': form.value['subclient_id'],
                'billing_status': form.value['billing_status'],
                'subactivity_code': form.value['subactivity_code'],
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    TodaysTimesheetComponent.prototype.setAdvanceFilter = function (form, flag) {
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
        if (form.value['from_date'] !== '' && form.value['from_date']) {
            this.TimesheetFromValue = form.value['from_date'];
            delete form.value['from_date'];
        }
        if (form.value['to_date'] !== '' && form.value['to_date']) {
            this.TimesheetToValue = form.value['to_date'];
            delete form.value['to_date'];
        }
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'parent_id' || key === 'entity_id' || key === 'service_id' || key === 'user_id' || key === 'subactivity_code' || key === 'billing_status' || key === 'subclient_id' || key === 'worksheet_id') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'master_activity_id' || key === 'task_id') {
                        if (form.value[key].length) {
                            this.inJSON[key] = form.value[key].join(',');
                        }
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getTimeSheetListing(1, 'id', 'desc');
        }
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    TodaysTimesheetComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'start_date') {
            this.PeriodFromValue = null;
        }
        else if (elementName === 'end_date') {
            this.PeriodToValue = null;
        }
        else if (elementName === 'from_date') {
            this.TimesheetFromValue = null;
        }
        else if (elementName === 'to_date') {
            this.TimesheetToValue = null;
        }
        else if (elementName === 'parent_id' || elementName === 'entity_id' || elementName === 'service_id' || elementName === 'user_id' || elementName === 'subactivity_code' || elementName === 'billing_status' || elementName === 'subclient_id') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'master_activity_id' || elementName === 'task_id') {
            delete this.inJSON[elementName];
        }
        this.getTimeSheetListing(1, 'id', 'desc');
    };
    /**
     * Get Task Filter List
     * @param value
     */
    TodaysTimesheetComponent.prototype.getTaskFilterList = function (value) {
        var _this = this;
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
     * On click of delete event this dialog will use
     * @param timesheetData
     */
    TodaysTimesheetComponent.prototype.openTodayTimesheetDeleteDialog = function (timesheetData) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete timesheet?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].TIMESHEET_LISTING, timesheetData.id).subscribe(function (Response) {
                    _this.getTimeSheetListing(1, 'id', 'desc');
                });
            }
        });
    };
    /**
     * view more details
     */
    TodaysTimesheetComponent.prototype.onOpenMoreDetailsDialog = function (timesheetData) {
        var dialogRef = this.dialog.open(_view_more_details_timesheet_dialog_view_more_details_timesheet_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ViewMoreDetailsTimesheetDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                timesheetData: timesheetData
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * redirection
     */
    TodaysTimesheetComponent.prototype.onWorksheetDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * On timesheet page redirect
     */
    TodaysTimesheetComponent.prototype.onEditTimeSheet = function (timesheet) {
        if (timesheet) {
            this._sharedService.setTimesheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["GLOBALDATAKEYS"].TIMESHEET_ITEM_DATA, null);
            this._sharedService.setTimesheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["GLOBALDATAKEYS"].TIMESHEET_ITEM_DATA, timesheet);
            this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_UPDATE_TODAYS_TIMESHEET]);
        }
    };
    TodaysTimesheetComponent.prototype.onAddTimeSheet = function () {
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_ADD_NEW_TODAYS_TIMESHEET, '_blank');
        });
    };
    /**
     * Top button today's timesheet action
     */
    TodaysTimesheetComponent.prototype.onOpenTodaysIncompletedWorksheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_TODAYS_WORKSHEET_VIEW_INCOMPLETED_WORKSHEET]);
    };
    TodaysTimesheetComponent.prototype.onOpenTodaysWorksheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_TODAYS_WORKSHEET]);
    };
    TodaysTimesheetComponent.prototype.onOpenReviewTimesheets = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_REVIEW_TIMESHEET]);
    };
    /**
     * Get Billing Status Name From ID
     * @param status_id
     */
    TodaysTimesheetComponent.prototype.getBillingStatusName = function (status_id) {
        var val = this.billingStatusList.filter(function (elem) { return elem.key === status_id; });
        return (val.length) ? val[0].label : '';
    };
    /**
     * On Destory Worksheet Data ID Null
     */
    TodaysTimesheetComponent.prototype.ngOnDestroy = function () {
        this._sharedService.setWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["GLOBALDATAKEYS"].WORKSHEET_ID, null);
    };
    /**
     * Check to Show Button
     * @param timesheet
     * @param type
     */
    TodaysTimesheetComponent.prototype.checkToShowButton = function (timesheet, type) {
        var todays_date = moment__WEBPACK_IMPORTED_MODULE_12__(new Date()).format('YYYY-MM-DD');
        if (this.userData.designation_id.designation_id === 7) {
            // If Timesheet Billing Status Charged then Superadmin can not delete timesheet
            if (timesheet.billing_status === 1) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            if (timesheet.billing_status === 1) {
                return false;
            }
            else if (this.isBackDateTimesheet) {
                return true;
            }
            else if (type === 1 || type === 2) {
                if (todays_date === timesheet.date) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    };
    /**
     * Open quick menu
     * @param menuName
     */
    TodaysTimesheetComponent.prototype.onOpenQuickMenu = function (menuName) {
        switch (menuName) {
            case 'addNewWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADD_WORKSHEET]);
                break;
            case 'todayWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_TODAYS_WORKSHEET]);
                break;
            case 'worksheetHierarchy':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_HIERARCHY]);
                break;
            case 'changeInOuttime':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_CHANGE_IN_OUT_TIME]);
                break;
            case 'subClientList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_SUB_CLIENT_LIST]);
                break;
            case 'worksheetMasterChecklist':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_MASTER_CHECKLIST]);
                break;
            case 'trainingList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_TRAINING_LIST]);
                break;
            case 'revieworKnockBackWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_REVIEW_OR_KNOCK_BACK]);
                break;
            case 'peerReviewWorksheetListing':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
                break;
            case 'changeMultipleWorksheetStatus':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].CHANGE_MULTIPLE_WORKSHEET_STATUS]);
                break;
        }
    };
    /**
     * On home page route
     */
    TodaysTimesheetComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    TodaysTimesheetComponent.prototype.toHTML = function (input) {
        return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    TodaysTimesheetComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], TodaysTimesheetComponent.prototype, "onKeydownHandler", null);
    TodaysTimesheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todays-timesheet',
            template: __webpack_require__(/*! ./todays-timesheet.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/todays-timesheet.component.html"),
            styles: [__webpack_require__(/*! ./todays-timesheet.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/todays-timesheet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_14__["SharedUserService"]])
    ], TodaysTimesheetComponent);
    return TodaysTimesheetComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/todays-timesheet.module.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/todays-timesheet.module.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: TodaysTimesheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodaysTimesheetModule", function() { return TodaysTimesheetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _view_incompleted_worksheet_timesheet_view_incompleted_worksheet_timesheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-incompleted-worksheet-timesheet/view-incompleted-worksheet-timesheet.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-incompleted-worksheet-timesheet/view-incompleted-worksheet-timesheet.component.ts");
/* harmony import */ var _review_timesheet_review_timesheet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review-timesheet/review-timesheet.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/review-timesheet.component.ts");
/* harmony import */ var _todays_timesheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todays-timesheet.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/todays-timesheet.component.ts");
/* harmony import */ var _view_more_details_timesheet_dialog_view_more_details_timesheet_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-more-details-timesheet-dialog/view-more-details-timesheet-dialog.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-more-details-timesheet-dialog/view-more-details-timesheet-dialog.component.ts");
/* harmony import */ var _add_new_todays_timesheet_form_add_new_todays_timesheet_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-new-todays-timesheet-form/add-new-todays-timesheet-form.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/add-new-todays-timesheet-form/add-new-todays-timesheet-form.component.ts");
/* harmony import */ var _update_todays_timesheet_form_update_todays_timesheet_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update-todays-timesheet-form/update-todays-timesheet-form.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/update-todays-timesheet-form/update-todays-timesheet-form.component.ts");
/* harmony import */ var _review_timesheet_add_new_review_timesheet_form_add_new_review_timesheet_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./review-timesheet/add-new-review-timesheet-form/add-new-review-timesheet-form.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/review-timesheet/add-new-review-timesheet-form/add-new-review-timesheet-form.component.ts");
/* harmony import */ var _worksheet_dashboard_tab_worksheet_dashboard_tab_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../worksheet-dashboard-tab/worksheet-dashboard-tab.module */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-dashboard-tab.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: _todays_timesheet_component__WEBPACK_IMPORTED_MODULE_7__["TodaysTimesheetComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'add-new-todays-timesheet-form',
        component: _add_new_todays_timesheet_form_add_new_todays_timesheet_form_component__WEBPACK_IMPORTED_MODULE_9__["AddNewTodaysTimesheetFormComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'update-todays-timesheet-form',
        component: _update_todays_timesheet_form_update_todays_timesheet_form_component__WEBPACK_IMPORTED_MODULE_10__["UpdateTodaysTimesheetFormComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'review-timesheet',
        component: _review_timesheet_review_timesheet_component__WEBPACK_IMPORTED_MODULE_6__["ReviewTimesheetComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'review-timesheet/add-new-review-timesheet-form',
        component: _review_timesheet_add_new_review_timesheet_form_add_new_review_timesheet_form_component__WEBPACK_IMPORTED_MODULE_11__["AddNewReviewTimesheetFormComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'view-incompleted-worksheet-timesheet',
        component: _view_incompleted_worksheet_timesheet_view_incompleted_worksheet_timesheet_component__WEBPACK_IMPORTED_MODULE_5__["ViewIncompletedWorksheetTimesheetComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    }
];
var TodaysTimesheetModule = /** @class */ (function () {
    function TodaysTimesheetModule() {
    }
    TodaysTimesheetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"],
                _worksheet_dashboard_tab_worksheet_dashboard_tab_module__WEBPACK_IMPORTED_MODULE_12__["WorksheetDashboardTabModule"]
            ],
            declarations: [_todays_timesheet_component__WEBPACK_IMPORTED_MODULE_7__["TodaysTimesheetComponent"], _view_incompleted_worksheet_timesheet_view_incompleted_worksheet_timesheet_component__WEBPACK_IMPORTED_MODULE_5__["ViewIncompletedWorksheetTimesheetComponent"], _review_timesheet_review_timesheet_component__WEBPACK_IMPORTED_MODULE_6__["ReviewTimesheetComponent"], _view_more_details_timesheet_dialog_view_more_details_timesheet_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewMoreDetailsTimesheetDialogComponent"], _add_new_todays_timesheet_form_add_new_todays_timesheet_form_component__WEBPACK_IMPORTED_MODULE_9__["AddNewTodaysTimesheetFormComponent"], _update_todays_timesheet_form_update_todays_timesheet_form_component__WEBPACK_IMPORTED_MODULE_10__["UpdateTodaysTimesheetFormComponent"], _review_timesheet_add_new_review_timesheet_form_add_new_review_timesheet_form_component__WEBPACK_IMPORTED_MODULE_11__["AddNewReviewTimesheetFormComponent"]
            ],
            exports: [],
            entryComponents: [_view_more_details_timesheet_dialog_view_more_details_timesheet_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ViewMoreDetailsTimesheetDialogComponent"]]
        })
    ], TodaysTimesheetModule);
    return TodaysTimesheetModule;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/update-todays-timesheet-form/update-todays-timesheet-form.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/update-todays-timesheet-form/update-todays-timesheet-form.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"update-timesheet-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onWorksheet()\">WORKSHEET</a></span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onTodaysTimesheet()\">TODAY'S TIMESHEET</a></span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">UPDATE TIMESHEET</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n\r\n  <!--Start update timesheet form-->\r\n  <div>\r\n    <span class=\"panel-title\">Update Timesheet</span>\r\n    <form [formGroup]=\"addTimesheetForm\" #addEditTimesheetDataForm=\"ngForm\"\r\n          (submit)=\"onSubmitTimesheet(addTimesheetForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-1 PR-0\">\r\n          <mat-form-field>\r\n            <input formControlName=\"date\" matInput [matDatepicker]=\"date\" placeholder=\"Date\" [disableControl]=\"true\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\r\n            <mat-datepicker #date></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <ng-select [items]=\"parentClientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Parent Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     [disableControl]=\"true\"\r\n                     (change)=\"onChangeParentEntity($event)\"\r\n                     formControlName=\"parent_id\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <ng-select [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [disableControl]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"getMasterActivityList()\"\r\n                     formControlName=\"entity_id\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"master_activity_id\" placeholder=\"Master activity\"\r\n                        (selectionChange)=\"getTaskFilterList($event.value)\" [disableControl]=\"true\">\r\n              <mat-option *ngFor=\"let masterActivity of masterActivityList;\" [value]=\"+masterActivity.id\">\r\n                {{masterActivity.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"task_id\" placeholder=\"Task\" [disableControl]=\"true\"\r\n                        (selectionChange)=\"getSubactivityFilterList($event.value);getFrequencyList()\">\r\n              <mat-option *ngFor=\"let task of taskList;\" [value]=\"+task.id\">\r\n                {{task.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"worksheet_frequency_id\" placeholder=\"Frequency\" [disableControl]=\"true\">\r\n              <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                {{frequency.frequency_name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"period_id\" placeholder=\"Period\" [disableControl]=\"true\">\r\n              <mat-option *ngFor=\"let period of periodList;\" [value]=\"period['worksheet_id']\">\r\n                {{period['start_date'] | date : 'dd-MM-yyyy'}} To {{period['end_date'] | date : 'dd-MM-yyyy'}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7\">\r\n          <ng-select [items]=\"subActivityList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"subactivity_full_name\"\r\n                     placeholder=\"Sub Activity\"\r\n                     bindValue=\"subactivity_code\"\r\n                     [virtualScroll]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"UpdateFormControl(); UpdateFormControlEmployee(); hideShowFields($event);\"\r\n                     formControlName=\"subactivity_code\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('subactivity_code'))\"\r\n                            [errMsg]=\"validationMsg.ADD_TIMESHEET_SUB_ACTIVITY_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 PL-0\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Start Time\" formControlName=\"start_time\" aria-label=\"Start Time\"\r\n                       (change)=\"updateUnits()\" readonly\r\n                       [ngxTimepicker]=\"starttime\" [format]=\"24\" min=\"04:30\">\r\n                <ngx-material-timepicker (closed)=\"updateUnits()\" #starttime></ngx-material-timepicker>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\"></div>\r\n            </div>\r\n            <div class=\"col-md-6 PR-0\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"End Time\" formControlName=\"end_time\" aria-label=\"End Time\"\r\n                       (change)=\"updateUnits()\" readonly [ngxTimepicker]=\"endtime\"\r\n                       [min]=\"addTimesheetForm.get('start_time').value\" max=\"23:30\" [format]=\"24\">\r\n                <ngx-material-timepicker (closed)=\"updateUnits()\" #endtime></ngx-material-timepicker>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <mat-form-field>\r\n            <input formControlName=\"units\" type=\"number\" max=\"180\" matInput placeholder=\"Units\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('units'))\"\r\n                            [errMsg]=\"validationMsg.UNIT_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addTimesheetForm.get('units'))\"\r\n                            [errMsg]=\"validationMsg.UNIT_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <!--<div class=\"col-md-4\" *ngIf=\"entity_grouptype_id === 14\">-->\r\n          <!--<ng-select [items]=\"subClientList\"-->\r\n                     <!--[closeOnSelect]=\"true\"-->\r\n                     <!--bindLabel=\"subclient\"-->\r\n                     <!--placeholder=\"Sub Client\"-->\r\n                     <!--bindValue=\"id\"-->\r\n                     <!--[virtualScroll]=\"true\"-->\r\n                     <!--[hideSelected]=\"true\"-->\r\n                     <!--formControlName=\"subclient_id\">-->\r\n          <!--</ng-select>-->\r\n          <!--<div class=\"validation-msg\">-->\r\n            <!--<app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('subclient_id'))\"-->\r\n                            <!--[errMsg]=\"validationMsg.SUBCLIENT_REQUIRED\"></app-validation>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n        <span class=\"col-md-4\" *ngFor=\"let fieldArray of getExtraFieldArray().controls; let i=index\">\r\n        <div *ngIf=\"fieldArray.value['type'] === 'TB'\">\r\n          <mat-form-field\r\n            *ngIf=\"(addTimesheetForm.get('subactivity_code').value === 462 || addTimesheetForm.get('subactivity_code').value === 460) && fieldArray.value['label'] === 'No. of Employee'\">\r\n            <input matInput [placeholder]=\"fieldArray.value['label']\" [value]=\"fieldArray.value['value']\"\r\n                   (change)=\"onUpdateValues(i,$event.target.value); addEmployeeFields($event.target.value)\"/>\r\n          </mat-form-field>\r\n          <mat-form-field\r\n            *ngIf=\"addTimesheetForm.get('subactivity_code').value !== 462 && addTimesheetForm.get('subactivity_code').value !== 460 && fieldArray.value['label'] == 'No. of Employee'\">\r\n                   (change)=\"onUpdateValues(i,$event.target.value)\"/>\r\n          </mat-form-field>\r\n          <mat-form-field\r\n            *ngIf=\"addTimesheetForm.get('subactivity_code').value !== 462 && addTimesheetForm.get('subactivity_code').value !== 460 && fieldArray.value['label'] !== 'No. of Employee'\">\r\n            <input matInput [placeholder]=\"fieldArray.value['label']\" [value]=\"fieldArray.value['value']\"\r\n                   (change)=\"onUpdateValues(i,$event.target.value)\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                          [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n           <app-validation *ngIf=\"isValidField(getExtraFieldArray().controls[i].get('value'))\"\r\n                           [errMsg]=\"fieldArray.value['msg_invalid']\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"fieldArray.value['type'] === 'DD'\">\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'frequency_id'\" [items]=\"frequencyDDList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     [(ngModel)]=\"timeSheetData[fieldArray.value['key']]\"\r\n                     [ngModelOptions]=\"{standalone: true}\"\r\n                     bindLabel=\"frequency_name\"\r\n                     placeholder=\"Frequency\"\r\n                     bindValue=\"id\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'id')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'payroll_option_id'\" [items]=\"payrollOptionList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     [(ngModel)]=\"timeSheetData[fieldArray.value['key']]\"\r\n                     [ngModelOptions]=\"{standalone: true}\"\r\n                     bindLabel=\"type_name\"\r\n                     placeholder=\"Type\"\r\n                     bindValue=\"id\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'id')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'reviewer_id'\" [items]=\"reviewerUserList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"userfullname\"\r\n                     placeholder=\"Reviewer User\"\r\n                     bindValue=\"id\"\r\n                     [(ngModel)]=\"+timeSheetData[fieldArray.value['key']]\"\r\n                     [ngModelOptions]=\"{standalone: true}\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'id')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'bank_info'\" [items]=\"bankInformation\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"bankdetail\"\r\n                     placeholder=\"Bank Information\"\r\n                     bindValue=\"bankname\"\r\n                     [(ngModel)]=\"fieldArray.value['value'] ? fieldArray.value['value'] : timeSheetData['bank_cc_name'] + ':' + timeSheetData['bank_cc_account_no']\"\r\n                     [ngModelOptions]=\"{standalone: true}\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'bankname')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [hideSelected]=\"false\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                          [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"fieldArray.value['type'] === 'startDate'\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"periodFrom\"\r\n                   (dateChange)=\"onUpdateDateValues(i,$event.value)\"\r\n                   placeholder=\"Start Date\" value=\"{{fieldArray.value['value']}}\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"periodFrom\"></mat-datepicker-toggle>\r\n            <mat-datepicker #periodFrom></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                          [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"fieldArray.value['type'] === 'endDate'\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"periodTo\"\r\n                   value=\"{{fieldArray.value['value']}}\"\r\n                   (dateChange)=\"onUpdateDateValues(i,$event.value)\"\r\n                   placeholder=\"End Date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"periodTo\"></mat-datepicker-toggle>\r\n            <mat-datepicker #periodTo></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                          [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </span>\r\n      </div>\r\n      <div class=\"row\">\r\n        <span class=\"row col-md-12 PLR-0\"\r\n              *ngFor=\"let fieldemployeeArray of getNameOfEmployeeArray().controls; let j=index\">\r\n          <span class=\"col-md-6\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"First Name\" value=\"{{fieldemployeeArray.value['first_name']}}\"\r\n                 (change)=\"onUpdateEmployeeValues(j,$event.target.value, 'first_name');\"/>\r\n        </mat-form-field>\r\n            <div class=\"validation-msg\">\r\n            <app-validation\r\n              *ngIf=\"isDynamicFieldsRequiredField(getNameOfEmployeeArray().controls[j].get('first_name'))\"\r\n              [errMsg]=\"validationMsg.FIRST_NAME\"></app-validation>\r\n            </div>\r\n          </span>\r\n          <span class=\"col-md-6\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Last Name\" value=\"{{fieldemployeeArray.value['last_name']}}\"\r\n                 (change)=\"onUpdateEmployeeValues(j,$event.target.value, 'last_name')\"/>\r\n        </mat-form-field>\r\n            <div class=\"validation-msg\">\r\n            <app-validation\r\n              *ngIf=\"isDynamicFieldsRequiredField(getNameOfEmployeeArray().controls[j].get('last_name'))\"\r\n              [errMsg]=\"validationMsg.LAST_NAME\"></app-validation>\r\n            </div>\r\n          </span>\r\n        </span>\r\n      </div>\r\n      <div class=\"row MT-15\">\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <textarea formControlName=\"notes\" matInput placeholder=\"Notes\" rows=\"5\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 MB-20\">\r\n        <div class=\"row MT-30\">\r\n          <div class=\"col-md-6 PL-0\">\r\n          </div>\r\n          <div class=\"col-md-6 text-right PR-0\">\r\n            <button [disabled]=\"addTimesheetForm.invalid\" type=\"submit\" class=\"btn-primary\"\r\n                    (click)=\"flagToSubmitUpdate(0)\">Update\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/update-todays-timesheet-form/update-todays-timesheet-form.component.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/update-todays-timesheet-form/update-todays-timesheet-form.component.scss ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vdG9kYXlzLXRpbWVzaGVldC91cGRhdGUtdG9kYXlzLXRpbWVzaGVldC1mb3JtL3VwZGF0ZS10b2RheXMtdGltZXNoZWV0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/update-todays-timesheet-form/update-todays-timesheet-form.component.ts":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/update-todays-timesheet-form/update-todays-timesheet-form.component.ts ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: UpdateTodaysTimesheetFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTodaysTimesheetFormComponent", function() { return UpdateTodaysTimesheetFormComponent; });
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
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














var UpdateTodaysTimesheetFormComponent = /** @class */ (function (_super) {
    __extends(UpdateTodaysTimesheetFormComponent, _super);
    function UpdateTodaysTimesheetFormComponent(_router, _fb, _sharedService, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
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
        _this.frequencyDDList = [];
        _this.masterActivityList = [];
        _this.taskList = [];
        _this.subActivityList = [];
        _this.timesheetConstant = _utility_constants_timesheet_constant__WEBPACK_IMPORTED_MODULE_4__["TimesheetConstantData"];
        _this.periodList = [];
        _this.payrollOptionList = [];
        _this.flagToSubmit = 0;
        _this.nameOfEmp = [];
        _this.entity_grouptype_id = 0;
        _this.subClientList = [];
        return _this;
    }
    UpdateTodaysTimesheetFormComponent.prototype.ngOnInit = function () {
        this.timeSheetData = this._sharedService.getTimesheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["GLOBALDATAKEYS"].TIMESHEET_ITEM_DATA);
        if (this.timeSheetData.name_of_employee && this.timeSheetData.name_of_employee !== '"[]"') {
            this.nameOfEmp = JSON.parse(this.timeSheetData.name_of_employee);
        }
        // console.log(this.timeSheetData);
        this.getDropdownData();
        this.createTimesheetForm();
    };
    /**
     * Get Dropdown data
     */
    UpdateTodaysTimesheetFormComponent.prototype.getDropdownData = function () {
        var _this = this;
        // Get Frequency
        this._sharedObjService.getFrequency({ records: "all" }, {}).subscribe(function (response) {
            _this.frequencyList = response;
            _this.frequencyDDList = response;
        });
        // Get Client
        this._sharedObjService.getClientList({ records: "all" }, {}).subscribe(function (response) {
            _this.clientList = _this.filteredTradingClientList = response;
            _this.parentClientList = response.filter(function (item) { return item.is_parent === 1; });
        });
        // Get Master Activity
        this._sharedObjService.getMasterActivity({ records: "all" }, {}).subscribe(function (response) {
            _this.masterActivityList = response;
        });
        // Get Task
        this._sharedObjService.getTask({ records: "all" }, {}).subscribe(function (response) {
            _this.taskList = response;
        });
        // Get Reviewer List
        this._sharedObjService
            .getUserList({ records: "all" }, {
            compare: { equal: { is_active: 1 } },
            in: { designation_id: "68,69,70,73,71" },
            findinset: { team_id: [2] },
        })
            .subscribe(function (response) {
            _this.reviewerUserList = response;
        });
        // Get Bank Information List
        if (this.timeSheetData.entity_id) {
            this._commonCrudService
                .listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_BANK_DETAILS, {
                entity_id: this.timeSheetData.entity_id,
            }, {})
                .subscribe(function (response) {
                _this.bankInformation = response.payload.data;
            });
        }
    };
    /**
     * Address form creation
     */
    UpdateTodaysTimesheetFormComponent.prototype.createTimesheetForm = function () {
        this.addTimesheetForm = this._fb.group({
            worksheet_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.timeSheetData ? this.timeSheetData.worksheet_id : 0),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.timeSheetData && this.timeSheetData.parent_id > 0 ? this.timeSheetData.parent_id : null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.timeSheetData ? this.timeSheetData.entity_id : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.timeSheetData ? this.timeSheetData.date : null),
            worksheet_frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.timeSheetData ? this.timeSheetData.worksheet_frequency_id : 0),
            period_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.timeSheetData ? this.timeSheetData.worksheet_id : 0),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.timeSheetData ? this.timeSheetData.master_id : 0),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.timeSheetData ? this.timeSheetData.task_id : 0),
            subactivity_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.timeSheetData ? this.timeSheetData.subactivity_code : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            start_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.timeSheetData ? this.timeSheetData.start_time : null),
            end_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.timeSheetData ? this.timeSheetData.end_time : null),
            units: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.timeSheetData ? this.timeSheetData.units : null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_2__["CommonRegex"].NUMERIC_REGEXP),
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.timeSheetData ? this.timeSheetData.notes : null),
            // subclient_id: new FormControl((this.timeSheetData) ? (this.timeSheetData.subclient_id > 0) ? this.timeSheetData.subclient_id : null : null),
            extra_fields: this._fb.array([]),
            name_employee: this._fb.array([]),
        });
        if (this.timeSheetData) {
            this.getFrequencyList();
            this.getPeriodList();
            this.getTaskFilterList(this.timeSheetData.master_id);
            if (Number(this.timeSheetData.review_subcode) > 0) {
                this.getSubactivityFilterList(null);
            }
            else {
                this.getSubactivityFilterList(this.timeSheetData.task_id);
            }
            this.hideShowFields({ subactivity_code: this.timeSheetData.subactivity_code });
            if (this.timeSheetData.subactivity_code === 462) {
                if (this.timeSheetData.no_of_value > 0) {
                    this.addEmployeeFields(this.timeSheetData.no_of_value);
                }
            }
        }
    };
    /**
     * Create Dynamic Employee Name Fields
     */
    UpdateTodaysTimesheetFormComponent.prototype.createDynamicEmployeeNameFields = function (item) {
        return this._fb.group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item["first_name"] : "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item["last_name"] : "", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    };
    /**
     * Get Extra Field Array
     */
    UpdateTodaysTimesheetFormComponent.prototype.getExtraFieldArray = function () {
        return this.addTimesheetForm.get("extra_fields");
    };
    /**
     * Get Name Of Employee
     */
    UpdateTodaysTimesheetFormComponent.prototype.getNameOfEmployeeArray = function () {
        return this.addTimesheetForm.get("name_employee");
    };
    /**
     * Get Task Filter List
     * @param value
     */
    UpdateTodaysTimesheetFormComponent.prototype.getTaskFilterList = function (value) {
        var _this = this;
        // Get Task
        // console.log(2);
        if (value) {
            this._sharedObjService.getTask({ records: "all" }, { in: { master_activity_id: value } }).subscribe(function (response) {
                _this.addTimesheetForm.get("task_id").setValue(null);
                _this.addTimesheetForm.get("task_id").updateValueAndValidity();
                _this.taskList = response;
            });
        }
        else {
            this._sharedObjService.getTask({ records: "all" }, {}).subscribe(function (response) {
                _this.taskList = response;
            });
        }
    };
    /**
     * Get Master Activity List
     */
    UpdateTodaysTimesheetFormComponent.prototype.getMasterActivityList = function () {
        var _this = this;
        var entity_id = this.addTimesheetForm.get("entity_id").value;
        if (entity_id) {
            this._commonCrudService
                .listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_DETAILS, {
                entity_id: entity_id,
            }, {})
                .subscribe(function (response) {
                _this.masterActivityList = response.payload.data;
                // To Show Subclient field and mark as mandatory field
                if (response.payload.entityGrouptypeId && response.payload.entityGrouptypeId === 14) {
                    _this.entity_grouptype_id = response.payload.entityGrouptypeId;
                    // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
                    // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
                    _this.getSubClientList();
                }
            });
        }
    };
    /**
     * Get Sub Client List for Entity Type - Superrecord(14)
     */
    UpdateTodaysTimesheetFormComponent.prototype.getSubClientList = function () {
        var _this = this;
        this._sharedObjService
            .getSubClientList({ records: "all" }, { compare: { equal: { entity_id: this.timeSheetData.entity_id } } })
            .subscribe(function (response) {
            _this.subClientList = response;
        });
    };
    /**
     * Get Task List
     */
    UpdateTodaysTimesheetFormComponent.prototype.getTaskList = function () {
        var _this = this;
        var entity_id = this.addTimesheetForm.get("entity_id").value;
        var master_activity_id = this.addTimesheetForm.get("master_activity_id").value;
        if (entity_id && master_activity_id) {
            this._commonCrudService
                .listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_DETAILS, {
                entity_id: entity_id,
                master_activity_id: master_activity_id,
            }, {})
                .subscribe(function (response) {
                _this.taskList = response.payload.data;
                // To Show Subclient field and mark as mandatory field
                if (response.payload.entityGrouptypeId && response.payload.entityGrouptypeId === 14) {
                    _this.entity_grouptype_id = response.payload.entityGrouptypeId;
                    // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
                    // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
                    _this.getSubClientList();
                }
            });
        }
    };
    /**
     * Get Frequency List
     */
    UpdateTodaysTimesheetFormComponent.prototype.getFrequencyList = function () {
        var _this = this;
        var task_id = this.addTimesheetForm.get("task_id").value;
        var entity_id = this.addTimesheetForm.get("entity_id").value;
        var master_activity_id = this.addTimesheetForm.get("master_activity_id").value;
        if (task_id && entity_id && master_activity_id) {
            this._commonCrudService
                .listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_DETAILS, {
                entity_id: entity_id,
                master_activity_id: master_activity_id,
                task_id: task_id,
            }, {})
                .subscribe(function (response) {
                _this.frequencyList = [];
                var frequencyData = response.payload.data;
                if (frequencyData) {
                    frequencyData.forEach(function (item) {
                        _this.frequencyList.push(item["frequency_id"]);
                    });
                }
                // To Show Subclient field and mark as mandatory field
                if (response.payload.entityGrouptypeId && response.payload.entityGrouptypeId === 14) {
                    _this.entity_grouptype_id = response.payload.entityGrouptypeId;
                    // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
                    // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
                    _this.getSubClientList();
                }
            });
        }
    };
    /**
     * Get Period List
     */
    UpdateTodaysTimesheetFormComponent.prototype.getPeriodList = function () {
        var _this = this;
        var task_id = this.addTimesheetForm.get("task_id").value;
        var entity_id = this.addTimesheetForm.get("entity_id").value;
        var master_activity_id = this.addTimesheetForm.get("master_activity_id").value;
        var frequency = this.addTimesheetForm.get("worksheet_frequency_id").value;
        if (task_id && entity_id && master_activity_id && frequency) {
            this._commonCrudService
                .listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_DETAILS, {
                entity_id: entity_id,
                master_activity_id: master_activity_id,
                task_id: task_id,
                frequency_id: frequency,
            }, {})
                .subscribe(function (response) {
                _this.periodList = response.payload.data;
                // To Show Subclient field and mark as mandatory field
                if (response.payload.entityGrouptypeId && response.payload.entityGrouptypeId === 14) {
                    _this.entity_grouptype_id = response.payload.entityGrouptypeId;
                    // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
                    // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
                    _this.getSubClientList();
                }
            });
        }
    };
    /**
     * Get Task Filter List
     * @param value
     */
    UpdateTodaysTimesheetFormComponent.prototype.getSubactivityFilterList = function (value) {
        var _this = this;
        // Get Subactivity List
        if (value) {
            this._sharedObjService
                .getSubactivity({
                records: "all",
                sortBy: "asc",
                sortOrder: "subactivity_code",
            }, { compare: { equal: { task_id: value } } })
                .subscribe(function (response) {
                //this.addTimesheetForm.get('subactivity_code').setValue(null);
                //this.addTimesheetForm.get('subactivity_code').updateValueAndValidity();
                _this.subActivityList = response;
            });
        }
        else {
            this._sharedObjService
                .getSubactivity({
                records: "all",
                sortBy: "asc",
                sortOrder: "subactivity_code",
            }, {})
                .subscribe(function (response) {
                _this.subActivityList = response;
            });
        }
    };
    /**
     * On Time Update Change Units
     */
    UpdateTodaysTimesheetFormComponent.prototype.updateUnits = function () {
        var startTime = this.addTimesheetForm.get("start_time").value;
        var endTime = this.addTimesheetForm.get("end_time").value;
        if (startTime && endTime) {
            var units = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_13__["getUnitsFromTime"])(startTime, endTime);
            // console.log(this.addTimesheetForm.get('units').value);
            if (units >= 0) {
                this.addTimesheetForm.get("units").setValue(units);
            }
        }
    };
    /**
     * Update Form Control
     * @constructor
     */
    UpdateTodaysTimesheetFormComponent.prototype.UpdateFormControl = function () {
        this.addTimesheetForm.get("extra_fields").reset([]);
        this.addTimesheetForm.removeControl("extra_fields");
        this.addTimesheetForm.addControl("extra_fields", this._fb.array([]));
    };
    /**
     * On Select Check Subactivity have extra fields
     * @param subActivity
     */
    UpdateTodaysTimesheetFormComponent.prototype.hideShowFields = function (value) {
        // Remove old fields of subactivity on change
        var _this = this;
        // If value of subactivity code then
        if (value) {
            var getSubActivity = this.getSubactivityField(Number(value.subactivity_code));
            if (getSubActivity) {
                getSubActivity.forEach(function (item) {
                    _this.getExtraFieldArray().push(_this.createDynamicFields(item));
                });
            }
            // API Call of Number
            if (Number(value.subactivity_code) === 448 || Number(value.subactivity_code) === 417) {
                this._commonCrudService
                    .listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_PAYROLL_OPTIONS + "/" + value.subactivity_code, {}, {})
                    .subscribe(function (response) {
                    _this.payrollOptionList = response.payload.data;
                });
            }
        }
    };
    /**
     * Get Subactivity Field
     * @param index
     */
    UpdateTodaysTimesheetFormComponent.prototype.getSubactivityField = function (index) {
        var ItemData = this.timesheetConstant[index] ? this.timesheetConstant[index] : null;
        return ItemData;
    };
    /**
     * Create Dynamic Fields
     */
    UpdateTodaysTimesheetFormComponent.prototype.createDynamicFields = function (item) {
        item["value"] = item["value"] !== "" || item["value"] !== null ? item["value"] : null;
        var itemValue = null;
        if (item["key"] === "bank_info") {
            itemValue = this.timeSheetData ? this.timeSheetData["bank_cc_name"] + ":" + this.timeSheetData["bank_cc_account_no"] : item["value"];
        }
        else {
            itemValue = this.timeSheetData[item["key"]] ? this.timeSheetData[item["key"]] : item["value"];
        }
        // console.log(itemValue);
        return this._fb.group({
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item["label"] : ""),
            help: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item["help"] : ""),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item["key"] : ""),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](itemValue, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item["type"] : ""),
            msg_required: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item["msg_required"] : ""),
            msg_invalid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item["msg_invalid"] : ""),
        });
    };
    /**
     * On Add Employee Fields
     * @param value
     */
    UpdateTodaysTimesheetFormComponent.prototype.addEmployeeFields = function (value) {
        this.UpdateFormControlEmployee();
        var i = 0;
        if (value >= 0 && value < 6) {
            for (i = 0; i <= value - 1; i++) {
                var firstName = this.nameOfEmp[i] ? this.nameOfEmp[i]["first_name"] : "";
                var lastName = this.nameOfEmp[i] ? this.nameOfEmp[i]["last_name"] : "";
                var item = [];
                item["first_name"] = firstName;
                item["last_name"] = lastName;
                this.getNameOfEmployeeArray().push(this.createDynamicEmployeeNameFields(item));
            }
        }
    };
    /**
     * Update Form Control
     * @constructor
     */
    UpdateTodaysTimesheetFormComponent.prototype.UpdateFormControlEmployee = function () {
        this.addTimesheetForm.get("name_employee").reset([]);
        this.addTimesheetForm.removeControl("name_employee");
        this.addTimesheetForm.addControl("name_employee", this._fb.array([]));
    };
    /**
     * On Update Value Set Value + Update Validation for form
     * @param index
     * @param value
     */
    UpdateTodaysTimesheetFormComponent.prototype.onUpdateEmployeeValues = function (index, value, key) {
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
    UpdateTodaysTimesheetFormComponent.prototype.onUpdateValues = function (index, value, checked, keyData) {
        if (index >= 0) {
            if (value) {
                if (checked === 1 && keyData !== "") {
                    this.getExtraFieldArray().controls[index].get("value").setValue(value[keyData].toString());
                    this.getExtraFieldArray().controls[index].get("value").updateValueAndValidity();
                }
                else {
                    this.getExtraFieldArray().controls[index].get("value").setValue(value);
                    this.getExtraFieldArray().controls[index].get("value").updateValueAndValidity();
                }
            }
            else {
                this.getExtraFieldArray().controls[index].get("value").setValue(null);
                this.getExtraFieldArray().controls[index].get("value").updateValueAndValidity();
            }
        }
    };
    /**
     * On Update Value Set Value + Update Validation for form
     * @param index
     * @param value
     */
    UpdateTodaysTimesheetFormComponent.prototype.onUpdateDateValues = function (index, value) {
        if (index >= 0) {
            if (value) {
                var dateValue = moment__WEBPACK_IMPORTED_MODULE_11__(value).format("YYYY-MM-DD");
                this.getExtraFieldArray().controls[index].get("value").setValue(dateValue);
                this.getExtraFieldArray().controls[index].get("value").updateValueAndValidity();
            }
            else {
                this.getExtraFieldArray().controls[index].get("value").setValue(null);
                this.getExtraFieldArray().controls[index].get("value").updateValueAndValidity();
            }
        }
    };
    /**
     * Flag to Submit of add & add and new
     * @param type
     */
    UpdateTodaysTimesheetFormComponent.prototype.flagToSubmitUpdate = function (type) {
        this.flagToSubmit = type;
    };
    /**
     * On Submit Timesheet
     * @param form
     */
    UpdateTodaysTimesheetFormComponent.prototype.onSubmitTimesheet = function (form) {
        var _this = this;
        if (form.valid) {
            form.value["parent_id"] = this.timeSheetData.parent_id;
            form.value["entity_id"] = this.timeSheetData.entity_id;
            form.value["user_id"] = this.timeSheetData.user_id;
            form.value["_method"] = "put";
            form.value["date"] = moment__WEBPACK_IMPORTED_MODULE_11__(this.timeSheetData.date).format("YYYY-MM-DD");
            form.value["is_export"] = 0;
            // If reviewed timesheet goes for edit
            if (Number(this.timeSheetData.review_subcode) > 0) {
                form.value["subactivity_code"] = this.addTimesheetForm.get("subactivity_code").value;
            }
            if (form.value["extra_fields"]) {
                var itemData = form.value["extra_fields"];
                if (itemData.length) {
                    itemData.forEach(function (item) {
                        form.value[item["key"]] = item["value"];
                    });
                }
            }
            if (form.value) {
                if (this.timeSheetData) {
                    this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TIMESHEET_LISTING, this.timeSheetData.id, form.value).subscribe(function (response) {
                        if (response) {
                            _this.getHRDetail();
                            _this.onTodaysTimesheet();
                        }
                    });
                }
            }
        }
    };
    /**
     * On page worksheet
     */
    UpdateTodaysTimesheetFormComponent.prototype.onWorksheet = function () {
        this._router.navigate(["/" + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * on page page timesheet
     */
    UpdateTodaysTimesheetFormComponent.prototype.onTodaysTimesheet = function () {
        this._router.navigate(["/" + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * On home page route
     */
    UpdateTodaysTimesheetFormComponent.prototype.onGoDashboard = function () {
        this._router.navigate(["/" + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Update units on header
     */
    UpdateTodaysTimesheetFormComponent.prototype.getHRDetail = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].GETDETAIL, {}).subscribe(function (Response) {
            _this.hrDetail = Response.payload.data;
            var units = _this.hrDetail && _this.hrDetail.units >= 0 ? _this.hrDetail.units : 0;
            _this._sharedService.setTimeSheetUnits(units);
        });
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    UpdateTodaysTimesheetFormComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("addEditTimesheetDataForm"),
        __metadata("design:type", Object)
    ], UpdateTodaysTimesheetFormComponent.prototype, "addEditTimesheetDataForm", void 0);
    UpdateTodaysTimesheetFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-update-todays-timesheet-form",
            template: __webpack_require__(/*! ./update-todays-timesheet-form.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/update-todays-timesheet-form/update-todays-timesheet-form.component.html"),
            styles: [__webpack_require__(/*! ./update-todays-timesheet-form.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/update-todays-timesheet-form/update-todays-timesheet-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"]])
    ], UpdateTodaysTimesheetFormComponent);
    return UpdateTodaysTimesheetFormComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-incompleted-worksheet-timesheet/view-incompleted-worksheet-timesheet.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-incompleted-worksheet-timesheet/view-incompleted-worksheet-timesheet.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin worksheet module Today's Timesheet Incompleted worksheet start -->\r\n<div class=\"view-incompleted-worksheet-timesheet-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onWorksheetDashboard()\">WORKSHEET</a></span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onTodaysTimesheet()\">TODAY'S TIMESHEET</a></span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">INCOMPLETED WORKSHEET</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-3 PR-0\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('addNewWorksheet')\"\r\n                          *ngIf=\"worksheetTabIDData['add_edit']\">Add New Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayWorksheet')\">Today's Worksheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayTimesheet')\">Today's Timesheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetHierarchy')\"\r\n                          *ngIf=\"tabDataWorksheetHierarchy['view']\">Worksheet Hierarchy\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('subClientList')\"\r\n                          *ngIf=\"tabDataWorksheetSubClientList['view']\">Sub Client List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetMasterChecklist')\"\r\n                          *ngIf=\"tabDataWorksheetMasterChecklist['view']\">Worksheet Master Checklist\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                          *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('trainingList')\"\r\n                          *ngIf=\"tabDataWorksheetTraining['view']\">Training List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                          *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                    Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('peerReviewWorksheetListing')\"\r\n                          *ngIf=\"tabDataWorksheetPeerReviewerList['view']\">Peer Review Worksheet\r\n                    Listing\r\n                  </button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <app-view-incompleted></app-view-incompleted>\r\n</div>\r\n<!-- Admin worksheet module Today's Timesheet Incompleted worksheet end-->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-incompleted-worksheet-timesheet/view-incompleted-worksheet-timesheet.component.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-incompleted-worksheet-timesheet/view-incompleted-worksheet-timesheet.component.scss ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vdG9kYXlzLXRpbWVzaGVldC92aWV3LWluY29tcGxldGVkLXdvcmtzaGVldC10aW1lc2hlZXQvdmlldy1pbmNvbXBsZXRlZC13b3Jrc2hlZXQtdGltZXNoZWV0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-incompleted-worksheet-timesheet/view-incompleted-worksheet-timesheet.component.ts":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-incompleted-worksheet-timesheet/view-incompleted-worksheet-timesheet.component.ts ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: Views, ViewIncompletedWorksheetTimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewIncompletedWorksheetTimesheetComponent", function() { return ViewIncompletedWorksheetTimesheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
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







var Views;
(function (Views) {
    Views[Views["FILTER_VIEW_MAIN"] = 0] = "FILTER_VIEW_MAIN";
})(Views || (Views = {}));
var ViewIncompletedWorksheetTimesheetComponent = /** @class */ (function (_super) {
    __extends(ViewIncompletedWorksheetTimesheetComponent, _super);
    function ViewIncompletedWorksheetTimesheetComponent(_fb, _router, _sharedService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._router = _router;
        _this._sharedService = _sharedService;
        // Constant Variables
        _this.enumView = Views;
        // Mat Paginator Inputs
        _this.length = 100;
        _this.pageSize = 10;
        _this.pageSizeOptions = [5, 10, 25, 100];
        // State variables
        _this.trIndex = -1;
        _this.isPlay = false;
        _this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.tabIDWorksheetHierarchy = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_5__["ADMINTABACCESS"].WORKFLOW_MASTERACTIVITY;
        _this.tabIDWorksheetTraining = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_5__["ADMINTABACCESS"].WORKFLOW_WORKSHEETTRAINING;
        _this.tabIDWorksheetSubClientList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_5__["ADMINTABACCESS"].WORKFLOW_SUBCLIENTLIST;
        _this.tabIDWorksheetReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_5__["ADMINTABACCESS"].WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
        _this.tabIDWorksheetPeerReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_5__["ADMINTABACCESS"].WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
        _this.tabIDWorksheetMasterChecklist = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_5__["ADMINTABACCESS"].WORKFLOW_MASTERCHECKLIST;
        _this.tabIDWorksheetMultiplueStatusChange = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_5__["ADMINTABACCESS"].WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;
        _this.isMultipleStatusUpdate = false;
        _this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_5__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
        return _this;
    }
    ViewIncompletedWorksheetTimesheetComponent.prototype.ngOnInit = function () {
        this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
        this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
        this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
        this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
        this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
        this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
        this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
        this.initializeMethod();
    };
    ViewIncompletedWorksheetTimesheetComponent.prototype.initializeMethod = function () {
        this.createViewIncompletedWorksheetForm();
        this.createViewIncompletedWorksheetFilterForm();
    };
    /**
     * Create Incompleted work sheet form
     */
    ViewIncompletedWorksheetTimesheetComponent.prototype.createViewIncompletedWorksheetForm = function () {
        this.viewIncompletedWorksheetForm = this._fb.group({
            clientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            masterActivity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            task: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            frequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            periodFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            periodTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dueDateFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dueDateTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            relatedEntity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tam: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            teamMember: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            additionalStaff: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            worksheetStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    /**
     * Create Incompleted work sheet filter form
     */
    ViewIncompletedWorksheetTimesheetComponent.prototype.createViewIncompletedWorksheetFilterForm = function () {
        this.viewIncompletedWorksheetFilterForm = this._fb.group({
            clientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            masterActivity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            task: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            frequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            periodFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            periodTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dueDateFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dueDateTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            relatedEntity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tam: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            teamMember: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            additionalStaff: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            worksheetStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    /**
     * On Incompleted work sheet form submit
     * @param form
     */
    ViewIncompletedWorksheetTimesheetComponent.prototype.onViewIncompletedWorksheetFormSubmit = function (form) {
    };
    /**
     * On Incompleted work sheet filter form submit
     * @param form
     */
    ViewIncompletedWorksheetTimesheetComponent.prototype.onViewIncompletedWorksheetFilterFormSubmit = function (form) {
    };
    /**
     * On delete table row
     */
    ViewIncompletedWorksheetTimesheetComponent.prototype.onDeleteItem = function (event) {
        this.deleteItem.emit(event);
    };
    /**
     * Expand row table
     * @param i
     */
    ViewIncompletedWorksheetTimesheetComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Open filter
     */
    ViewIncompletedWorksheetTimesheetComponent.prototype.onOpenFilter = function () {
        this.activeView = this.enumView.FILTER_VIEW_MAIN;
    };
    /**
     * Close filter
     */
    ViewIncompletedWorksheetTimesheetComponent.prototype.onCloseFilter = function () {
        this.activeView = null;
    };
    /**
     * sub client redirection
     */
    ViewIncompletedWorksheetTimesheetComponent.prototype.onWorksheetDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    ViewIncompletedWorksheetTimesheetComponent.prototype.onTodaysTimesheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * Close modal
     * @param event
     */
    ViewIncompletedWorksheetTimesheetComponent.prototype.onCloseDialog = function (event) {
        this.activeView = event;
    };
    // Angular helpers
    /**
     * Esc event for close modal and filter
     * @param event
     */
    ViewIncompletedWorksheetTimesheetComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onCloseFilter();
        }
    };
    /**
     * Open quick menu
     * @param menuName
     */
    ViewIncompletedWorksheetTimesheetComponent.prototype.onOpenQuickMenu = function (menuName) {
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
            case 'trainingList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_TRAINING_LIST]);
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
    /**
     * On home page route
     */
    ViewIncompletedWorksheetTimesheetComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ViewIncompletedWorksheetTimesheetComponent.prototype, "deleteItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ViewIncompletedWorksheetTimesheetComponent.prototype, "onKeydownHandler", null);
    ViewIncompletedWorksheetTimesheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-incompleted-worksheet-timesheet',
            template: __webpack_require__(/*! ./view-incompleted-worksheet-timesheet.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-incompleted-worksheet-timesheet/view-incompleted-worksheet-timesheet.component.html"),
            styles: [__webpack_require__(/*! ./view-incompleted-worksheet-timesheet.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-incompleted-worksheet-timesheet/view-incompleted-worksheet-timesheet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], ViewIncompletedWorksheetTimesheetComponent);
    return ViewIncompletedWorksheetTimesheetComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-more-details-timesheet-dialog/view-more-details-timesheet-dialog.component.html":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-more-details-timesheet-dialog/view-more-details-timesheet-dialog.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Change InOut Time dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">MORE DETAILS</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <div class=\"panel-title\" *ngIf=\"subActivityFields.length <= 0\">\r\n      <p>No Extra Items Found!!</p>\r\n    </div>\r\n    <div class=\"row MB-25\" *ngIf=\"subActivityFields.length > 0\">\r\n      <div class=\"row col-md-12 PLR-0 MT-20\" *ngFor=\"let data of subActivityFields\">\r\n        <div class=\"col-md-6\"><label class=\"fw-500\">{{data['label']}}</label></div>\r\n        <div class=\"col-md-6\">\r\n          <span>{{data['value']}}</span>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"nameOfEmp.length\">\r\n        <div *ngFor=\"let item of nameOfEmp;\" class=\"row col-md-12 PLR-0 MT-20\">\r\n          <div class=\"col-md-6\"><label class=\"fw-500\">First Name</label></div>\r\n          <div class=\"col-md-6\">\r\n            <span>{{item['first_name']}}</span>\r\n          </div>\r\n          <div class=\"col-md-6\"><label class=\"fw-500\">Last Name</label></div>\r\n          <div class=\"col-md-6\">\r\n            <span>{{item['last_name']}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--  End Change InOut Time dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-more-details-timesheet-dialog/view-more-details-timesheet-dialog.component.ts":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-more-details-timesheet-dialog/view-more-details-timesheet-dialog.component.ts ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: ViewMoreDetailsTimesheetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMoreDetailsTimesheetDialogComponent", function() { return ViewMoreDetailsTimesheetDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_timesheet_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/constants/timesheet-constant */ "./src/utility/constants/timesheet-constant.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
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








var ViewMoreDetailsTimesheetDialogComponent = /** @class */ (function () {
    function ViewMoreDetailsTimesheetDialogComponent(dialogRef, data, _commonCrudService, _sharedObjService, _sharedService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        this.timesheetConstant = _utility_constants_timesheet_constant__WEBPACK_IMPORTED_MODULE_4__["TimesheetConstantData"];
        this.payrollOptionList = [];
        this.nameOfEmp = [];
        this.subActivityFields = [];
        this.reviewerUserList = [];
        this.bankInformation = [];
        this.frequencyDDList = [];
    }
    ViewMoreDetailsTimesheetDialogComponent.prototype.ngOnInit = function () {
        this.timeSheetData = (this.data.timesheetData) ? this.data.timesheetData : null;
        // console.log(this.timeSheetData);
        if (this.timeSheetData) {
            this.hideShowFields(this.timeSheetData.subactivity_code);
            if (this.timeSheetData.subactivity_code === 462) {
                if (this.timeSheetData.no_of_value > 0) {
                    var dateItem = JSON.parse(this.timeSheetData.name_of_employee);
                    this.nameOfEmp = dateItem;
                }
            }
        }
    };
    /**
     * On Select Check Subactivity have extra fields
     * @param subActivity
     */
    ViewMoreDetailsTimesheetDialogComponent.prototype.hideShowFields = function (value) {
        var _this = this;
        // If value of subactivity code then
        if (value) {
            var getSubActivity = this.getSubactivityField(Number(value));
            if (getSubActivity) {
                getSubActivity.forEach(function (item) {
                    var data = [];
                    if (item['key'] === 'reviewer_id') {
                        _this._sharedObjService.getUserList({ 'records': 'all' }, {
                            'compare': { 'equal': { 'is_active': 1 } },
                            'in': { 'designation_id': '68,69,70,73,71' },
                            'findinset': { 'team_id': [2] }
                        }).subscribe(function (response) {
                            _this.reviewerUserList = response;
                            data = _this.reviewerUserList.filter(function (dataItem) { return dataItem.id === Number(_this.timeSheetData[item['key']]); });
                            item['value'] = (data.length) ? data[0]['userfullname'] : null;
                        });
                    }
                    else if (item['key'] === 'frequency_id') {
                        _this._sharedObjService.getFrequency({ 'records': 'all' }, {}).subscribe(function (response) {
                            _this.frequencyDDList = response;
                            data = _this.frequencyDDList.filter(function (dataItem) { return dataItem.id === Number(_this.timeSheetData[item['key']]); });
                            item['value'] = (data.length) ? data[0]['frequency_name'] : null;
                        });
                    }
                    else if (item['key'] === 'payroll_option_id') {
                        _this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_3__["AdminAPI"].TIMESHEET_PAYROLL_OPTIONS + '/' + value, {}, {}).subscribe(function (response) {
                            _this.payrollOptionList = response.payload.data;
                            data = _this.payrollOptionList.filter(function (dataItem) { return dataItem.id === _this.timeSheetData[item['key']]; });
                            item['value'] = (data.length) ? data[0]['type_name'] : null;
                        });
                    }
                    else if (item['key'] === 'bank_info') {
                        item['value'] = _this.timeSheetData['bank_cc_name'] + '::' + _this.timeSheetData['bank_cc_account_no'];
                    }
                    else if (item['key'] === 'period_startdate') {
                        item['value'] = _this.timeSheetData[item['key']] ? moment__WEBPACK_IMPORTED_MODULE_7__(_this.timeSheetData[item['key']]).format('DD-MM-YYYY') : null;
                    }
                    else if (item['key'] === 'period_enddate') {
                        item['value'] = _this.timeSheetData[item['key']] ? moment__WEBPACK_IMPORTED_MODULE_7__(_this.timeSheetData[item['key']]).format('DD-MM-YYYY') : null;
                    }
                    else {
                        item['value'] = _this.timeSheetData[item['key']] ? _this.timeSheetData[item['key']] : null;
                    }
                    _this.subActivityFields.push(item);
                });
            }
            // console.log(this.subActivityFields);
        }
    };
    /**
     * Get Subactivity Field
     * @param index
     */
    ViewMoreDetailsTimesheetDialogComponent.prototype.getSubactivityField = function (index) {
        var ItemData = (this.timesheetConstant[index]) ? this.timesheetConstant[index] : null;
        return ItemData;
    };
    ViewMoreDetailsTimesheetDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ViewMoreDetailsTimesheetDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-more-details-timesheet-dialog',
            template: __webpack_require__(/*! ./view-more-details-timesheet-dialog.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/view-more-details-timesheet-dialog/view-more-details-timesheet-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_5__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], ViewMoreDetailsTimesheetDialogComponent);
    return ViewMoreDetailsTimesheetDialogComponent;
}());



/***/ })

}]);
//# sourceMappingURL=worksheet-quick-action-todays-timesheet-todays-timesheet-module.js.map