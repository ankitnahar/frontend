(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["worksheet-dashboard-action-add-users-timesheet-add-users-timesheet-module"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-users-timesheet/add-users-timesheet.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-users-timesheet/add-users-timesheet.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-users-timesheet-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>WORKFLOW</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a (click)=\"onWorksheet()\">WORKSHEET</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">ADD USER'S TIMESHEET</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 PR-0\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('addNewWorksheet')\"\r\n                          *ngIf=\"worksheetTabIDData['add_edit']\">Add New Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayWorksheet')\">Today's Worksheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayTimesheet')\">Today's Timesheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetHierarchy')\"\r\n                          *ngIf=\"tabDataWorksheetHierarchy['view']\">Worksheet Hierarchy\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('subClientList')\"\r\n                          *ngIf=\"tabDataWorksheetSubClientList['view']\">Sub Client List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetMasterChecklist')\"\r\n                          *ngIf=\"tabDataWorksheetMasterChecklist['view']\">Worksheet Master Checklist\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                          *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('trainingList')\"\r\n                          *ngIf=\"tabDataWorksheetTraining['view']\">Training List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                          *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                    Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('peerReviewWorksheetListing')\"\r\n                          *ngIf=\"tabDataWorksheetPeerReviewerList['view']\">Peer Review Worksheet\r\n                    Listing\r\n                  </button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n\r\n  <!--Start add users timesheet form-->\r\n  <div>\r\n    <span class=\"panel-title orange-color\">Add User's Timesheet</span>\r\n    <form [formGroup]=\"addTimesheetForm\" #addEditTimesheetDataForm=\"ngForm\"\r\n          (submit)=\"onSubmitTimesheet(addTimesheetForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-1 PR-0\">\r\n          <mat-form-field>\r\n            <input formControlName=\"date\" matInput [matDatepicker]=\"date\" placeholder=\"Date\" readonly>\r\n            <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\r\n            <mat-datepicker #date></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <ng-select [items]=\"userList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"userfullname\"\r\n                     placeholder=\"User Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"user_id\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('user_id'))\"\r\n                            [errMsg]=\"validationMsg.DATE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <ng-select [items]=\"parentClientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Parent Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     [disableControl]=\"true\"\r\n                     (change)=\"onChangeParentEntity($event)\"\r\n                     formControlName=\"parent_id\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <ng-select [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [disableControl]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"getMasterActivityList()\"\r\n                     formControlName=\"entity_id\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('entity_id'))\"\r\n                            [errMsg]=\"validationMsg.USERNAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"master_activity_id\" placeholder=\"Master activity\"\r\n                        (selectionChange)=\"getTaskFilterList($event.value)\" [disableControl]=\"true\">\r\n              <mat-option *ngFor=\"let masterActivity of masterActivityList;\" [value]=\"+masterActivity.id\">\r\n                {{masterActivity.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"task_id\" placeholder=\"Task\" [disableControl]=\"true\"\r\n                        (selectionChange)=\"getSubactivityFilterList($event.value);getFrequencyList()\">\r\n              <mat-option *ngFor=\"let task of taskList;\" [value]=\"+task.id\">\r\n                {{task.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"worksheet_frequency_id\" placeholder=\"Frequency\" [disableControl]=\"true\">\r\n              <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                {{frequency.frequency_name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"period_id\" placeholder=\"Period\" [disableControl]=\"true\">\r\n              <mat-option *ngFor=\"let period of periodList;\" [value]=\"period['worksheet_id']\">\r\n                {{period['start_date'] | date : 'dd-MM-yyyy'}} To {{period['end_date'] | date : 'dd-MM-yyyy'}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n          <ng-select [items]=\"subActivityList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"subactivity_full_name\"\r\n                     placeholder=\"Sub Activity\"\r\n                     bindValue=\"subactivity_code\"\r\n                     [virtualScroll]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"UpdateFormControl(); UpdateFormControlEmployee(); hideShowFields($event);\"\r\n                     formControlName=\"subactivity_code\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('subactivity_code'))\"\r\n                            [errMsg]=\"validationMsg.ADD_TIMESHEET_SUB_ACTIVITY_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 PL-0\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Start Time\" formControlName=\"start_time\" aria-label=\"Start Time\"\r\n                       (change)=\"updateUnits()\" readonly\r\n                       [ngxTimepicker]=\"starttime\" [format]=\"24\" min=\"04:30\" class=\"cursor-pointer\">\r\n                <ngx-material-timepicker (closed)=\"updateUnits()\" #starttime></ngx-material-timepicker>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\"></div>\r\n            </div>\r\n            <div class=\"col-md-6 PR-0\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"End Time\" formControlName=\"end_time\" aria-label=\"End Time\"\r\n                       (change)=\"updateUnits()\" readonly [ngxTimepicker]=\"endtime\"\r\n                       [min]=\"addTimesheetForm.get('start_time').value\" max=\"23:30\" [format]=\"24\"\r\n                       class=\"cursor-pointer\">\r\n                <ngx-material-timepicker (closed)=\"updateUnits()\" #endtime></ngx-material-timepicker>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <mat-form-field>\r\n            <input formControlName=\"units\" type=\"number\" matInput placeholder=\"Units\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('units'))\"\r\n                            [errMsg]=\"validationMsg.UNIT_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addTimesheetForm.get('units'))\"\r\n                            [errMsg]=\"validationMsg.UNIT_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <!--<div class=\"col-md-4\" *ngIf=\"worksheetData.entity_grouptype_id === 14\">-->\r\n          <!--<ng-select [items]=\"subClientList\"-->\r\n                     <!--[closeOnSelect]=\"true\"-->\r\n                     <!--bindLabel=\"subclient\"-->\r\n                     <!--placeholder=\"Sub Client\"-->\r\n                     <!--bindValue=\"id\"-->\r\n                     <!--[virtualScroll]=\"true\"-->\r\n                     <!--[hideSelected]=\"true\"-->\r\n                     <!--formControlName=\"subclient_id\">-->\r\n          <!--</ng-select>-->\r\n          <!--<div class=\"validation-msg\">-->\r\n            <!--<app-validation *ngIf=\"isRequiredField(addTimesheetForm.get('subclient_id'))\"-->\r\n                            <!--[errMsg]=\"validationMsg.SUBCLIENT_REQUIRED\"></app-validation>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n        <span class=\"col-md-4\" *ngFor=\"let fieldArray of getExtraFieldArray().controls; let i=index\">\r\n        <div *ngIf=\"fieldArray.value['type'] === 'TB'\">\r\n          <mat-form-field\r\n            *ngIf=\"(addTimesheetForm.get('subactivity_code').value === 462 || addTimesheetForm.get('subactivity_code').value === 460) && fieldArray.value['label'] === 'No. of Employee'\">\r\n            <input matInput [placeholder]=\"fieldArray.value['label']\"\r\n                   (change)=\"onUpdateValues(i,$event.target.value); addEmployeeFields($event.target.value)\"/>\r\n          </mat-form-field>\r\n          <mat-form-field\r\n            *ngIf=\"addTimesheetForm.get('subactivity_code').value !== 462 && addTimesheetForm.get('subactivity_code').value !== 460 && fieldArray.value['label'] == 'No. of Employee'\">\r\n            <input matInput [placeholder]=\"fieldArray.value['label']\"\r\n                   (change)=\"onUpdateValues(i,$event.target.value)\"/>\r\n          </mat-form-field>\r\n          <mat-form-field\r\n            *ngIf=\"addTimesheetForm.get('subactivity_code').value !== 462 && addTimesheetForm.get('subactivity_code').value !== 460 && fieldArray.value['label'] !== 'No. of Employee'\">\r\n            <input matInput [placeholder]=\"fieldArray.value['label']\"\r\n                   (change)=\"onUpdateValues(i,$event.target.value)\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                          [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n           <app-validation *ngIf=\"isValidField(getExtraFieldArray().controls[i].get('value'))\"\r\n                           [errMsg]=\"fieldArray.value['msg_invalid']\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"fieldArray.value['type'] === 'DD'\">\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'frequency_id'\" [items]=\"frequencyDDList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"frequency_name\"\r\n                     placeholder=\"Frequency\"\r\n                     bindValue=\"id\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'id')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'payroll_option_id'\" [items]=\"payrollOptionList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"type_name\"\r\n                     placeholder=\"Type\"\r\n                     bindValue=\"id\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'id')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'reviewer_id'\" [items]=\"reviewerUserList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"userfullname\"\r\n                     placeholder=\"Reviewer User\"\r\n                     bindValue=\"id\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'id')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n          <ng-select *ngIf=\"fieldArray.value['key'] === 'bank_info'\" [items]=\"bankInformation\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"bankdetail\"\r\n                     placeholder=\"Bank Information\"\r\n                     bindValue=\"bankname\"\r\n                     (change)=\"onUpdateValues(i,$event,1,'bankname')\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                          [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"fieldArray.value['type'] === 'startDate'\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"periodFrom\"\r\n                   (dateChange)=\"onUpdateDateValues(i,$event.value)\"\r\n                   placeholder=\"Start Date\" value=\"{{fieldArray.value['value']}}\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"periodFrom\"></mat-datepicker-toggle>\r\n            <mat-datepicker #periodFrom></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                          [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"fieldArray.value['type'] === 'endDate'\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"periodTo\"\r\n                   value=\"{{fieldArray.value['value']}}\"\r\n                   (dateChange)=\"onUpdateDateValues(i,$event.value)\"\r\n                   placeholder=\"End Date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"periodTo\"></mat-datepicker-toggle>\r\n            <mat-datepicker #periodTo></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isDynamicFieldsRequiredField(getExtraFieldArray().controls[i].get('value'))\"\r\n                          [errMsg]=\"fieldArray.value['msg_required']\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </span>\r\n      </div>\r\n      <div class=\"row\">\r\n        <span class=\"row col-md-12 PLR-0\"\r\n              *ngFor=\"let fieldemployeeArray of getNameOfEmployeeArray().controls; let j=index\">\r\n          <span class=\"col-md-6\">        <mat-form-field>\r\n          <input matInput placeholder=\"First Name\"\r\n                 (change)=\"onUpdateEmployeeValues(j,$event.target.value, 'first_name');\"/>\r\n        </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n              <app-validation\r\n                *ngIf=\"isDynamicFieldsRequiredField(getNameOfEmployeeArray().controls[j].get('first_name'))\"\r\n                [errMsg]=\"validationMsg.FIRST_NAME\"></app-validation>\r\n          </div>\r\n              </span>\r\n\r\n          <span class=\"col-md-6\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Last Name\"\r\n                 (change)=\"onUpdateEmployeeValues(j,$event.target.value, 'last_name')\"/>\r\n        </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isDynamicFieldsRequiredField(getNameOfEmployeeArray().controls[j].get('last_name'))\"\r\n                            [errMsg]=\"validationMsg.LAST_NAME\"></app-validation>\r\n          </div>\r\n       </span>\r\n      </span>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <textarea formControlName=\"notes\" matInput placeholder=\"Notes\" rows=\"5\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 MB-20\">\r\n        <div class=\"row MT-30\">\r\n          <div class=\"col-md-6 PL-0\">\r\n            <button class=\"btn-orange btn-bordered\" [disabled]=\"addTimesheetForm.invalid\" type=\"submit\"\r\n                    (click)=\"flagToSubmitUpdate(1)\">Save & Add New\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-6 text-right PR-0\">\r\n            <button [disabled]=\"addTimesheetForm.invalid\" type=\"submit\" class=\"btn-primary\"\r\n                    (click)=\"flagToSubmitUpdate(0)\">Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!--End add users timesheet form-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-users-timesheet/add-users-timesheet.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-users-timesheet/add-users-timesheet.component.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1kYXNoYm9hcmQtYWN0aW9uL2FkZC11c2Vycy10aW1lc2hlZXQvYWRkLXVzZXJzLXRpbWVzaGVldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-users-timesheet/add-users-timesheet.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-users-timesheet/add-users-timesheet.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: AddUsersTimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUsersTimesheetComponent", function() { return AddUsersTimesheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_constants_timesheet_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/constants/timesheet-constant */ "./src/utility/constants/timesheet-constant.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
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















var AddUsersTimesheetComponent = /** @class */ (function (_super) {
    __extends(AddUsersTimesheetComponent, _super);
    function AddUsersTimesheetComponent(_router, _fb, _sharedService, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this._sharedService = _sharedService;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        _this.clientList = [];
        _this.filteredTradingClientList = [];
        _this.parentClientList = [];
        _this.reviewerUserList = [];
        _this.userList = [];
        _this.bankInformation = [];
        _this.frequencyList = [];
        _this.masterActivityList = [];
        _this.taskList = [];
        _this.subActivityList = [];
        _this.timesheetConstant = _utility_constants_timesheet_constant__WEBPACK_IMPORTED_MODULE_10__["TimesheetConstantData"];
        _this.periodList = [];
        _this.payrollOptionList = [];
        _this.frequencyDDList = [];
        _this.flagToSubmit = 0;
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
        return _this;
    }
    AddUsersTimesheetComponent.prototype.ngOnInit = function () {
        this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
        this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
        this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
        this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
        this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
        this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
        this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
        this.worksheetData = this._sharedService.getWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["GLOBALDATAKEYS"].WORKSHEET_ITEM_DATA);
        this.timeSheetData = this._sharedService.getTimesheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["GLOBALDATAKEYS"].TIMESHEET_ITEM_DATA);
        this.userData = this._sharedService.getUser();
        this.getDropdownData();
        this.createTimesheetForm();
    };
    /**
     * Get Dropdown data
     */
    AddUsersTimesheetComponent.prototype.getDropdownData = function () {
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
        var params = {};
        if (this.userData.designation_id.designation_id === 7) {
            params = {
                'compare': { 'equal': { 'is_active': 1 } }
            };
        }
        else {
            params = {
                'compare': { 'equal': { 'is_active': 1 } }, 'or': {
                    'equal': [{
                            'first_approval_user': this.userData.id,
                            'second_approval_user': this.userData.id,
                        }]
                }
            };
        }
        this._sharedObjService.getUserList({ 'records': 'all' }, params).subscribe(function (response) {
            _this.userList = response;
        });
        // Get Bank Information List
        if (this.worksheetData.entity_id) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].TIMESHEET_BANK_DETAILS, {
                'entity_id': this.worksheetData.entity_id
            }, {}).subscribe(function (response) {
                _this.bankInformation = response.payload.data;
            });
        }
    };
    /**
     * Address form creation
     */
    AddUsersTimesheetComponent.prototype.createTimesheetForm = function () {
        this.addTimesheetForm = this._fb.group({
            worksheet_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.worksheetData) ? this.worksheetData.id : 0),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.worksheetData && this.worksheetData.parent_id > 0) ? this.worksheetData.parent_id : null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.worksheetData) ? this.worksheetData.entity_id : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            worksheet_frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.worksheetData) ? this.worksheetData.frequency_id : 0),
            period_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.worksheetData) ? this.worksheetData.id : 0),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.worksheetData) ? this.worksheetData.master_activity_id.id : 0),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.worksheetData) ? this.worksheetData.task_id.id : 0),
            subactivity_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            start_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            end_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            units: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["CommonRegex"].NUMERIC_REGEXP), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["CommonRegex"].NOT_ALLOWED_FIRST_ZERO_NUMBER_REGEXP)]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            // subclient_id: new FormControl(null),
            extra_fields: this._fb.array([]),
            name_employee: this._fb.array([]),
        });
        if (this.worksheetData) {
            this.getTaskFilterList(this.worksheetData.master_activity_id.id);
            this.getSubactivityFilterList(this.worksheetData.task_id.id);
            this.getPeriodList();
        }
        if (this.worksheetData && this.worksheetData.entity_grouptype_id === 14) {
            // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
            // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
            this.getSubClientList();
        }
        else {
            // this.addTimesheetForm.get('subclient_id').setValidators(null);
            // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
        }
    };
    /**
     * Get Sub Client List for Entity Type - Superrecord(14)
     */
    AddUsersTimesheetComponent.prototype.getSubClientList = function () {
        var _this = this;
        this._sharedObjService.getSubClientList({ 'records': 'all' }, { 'compare': { 'equal': { 'entity_id': this.worksheetData.entity_id } } }).subscribe(function (response) {
            _this.subClientList = response;
        });
    };
    /**
     * Get Extra Field Array
     */
    AddUsersTimesheetComponent.prototype.getExtraFieldArray = function () {
        return this.addTimesheetForm.get('extra_fields');
    };
    /**
     * Get Name Of Employee
     */
    AddUsersTimesheetComponent.prototype.getNameOfEmployeeArray = function () {
        return this.addTimesheetForm.get('name_employee');
    };
    /**
     * Get Task Filter List
     * @param value
     */
    AddUsersTimesheetComponent.prototype.getTaskFilterList = function (value) {
        var _this = this;
        // Get Task
        // console.log(2);
        if (value) {
            this._sharedObjService.getTask({ 'records': 'all' }, { 'in': { 'master_activity_id': value } }).subscribe(function (response) {
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
    AddUsersTimesheetComponent.prototype.getMasterActivityList = function () {
        var _this = this;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        if (entity_id) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].TIMESHEET_DETAILS, {
                'entity_id': entity_id
            }, {}).subscribe(function (response) {
                _this.masterActivityList = response.payload.data;
            });
        }
    };
    /**
     * Get Task List
     */
    AddUsersTimesheetComponent.prototype.getTaskList = function () {
        var _this = this;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        var master_activity_id = this.addTimesheetForm.get('master_activity_id').value;
        if (entity_id && master_activity_id) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].TIMESHEET_DETAILS, {
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
    AddUsersTimesheetComponent.prototype.getFrequencyList = function () {
        var _this = this;
        var task_id = this.addTimesheetForm.get('task_id').value;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        var master_activity_id = this.addTimesheetForm.get('master_activity_id').value;
        if (task_id && entity_id && master_activity_id) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].TIMESHEET_DETAILS, {
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
    AddUsersTimesheetComponent.prototype.getPeriodList = function () {
        var _this = this;
        var task_id = this.addTimesheetForm.get('task_id').value;
        var entity_id = this.addTimesheetForm.get('entity_id').value;
        var master_activity_id = this.addTimesheetForm.get('master_activity_id').value;
        var frequency = this.addTimesheetForm.get('worksheet_frequency_id').value;
        if (task_id && entity_id && master_activity_id && frequency) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].TIMESHEET_DETAILS, {
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
    AddUsersTimesheetComponent.prototype.getSubactivityFilterList = function (value) {
        var _this = this;
        // Get Subactivity List
        if (value) {
            this._sharedObjService.getSubactivity({
                'records': 'all',
                'sortBy': 'asc',
                'sortOrder': 'subactivity_code'
            }, { 'compare': { 'equal': { 'task_id': value } } }).subscribe(function (response) {
                _this.addTimesheetForm.get('subactivity_code').setValue(null);
                _this.addTimesheetForm.get('subactivity_code').updateValueAndValidity();
                _this.subActivityList = response;
            });
        }
        else {
            this._sharedObjService.getSubactivity({
                'records': 'all', 'sortBy': 'asc',
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
    AddUsersTimesheetComponent.prototype.hideShowFields = function (value) {
        var _this = this;
        if (value) {
            // console.log(value);
            var getSubActivity = this.getSubactivityField(Number(value.subactivity_code));
            if (getSubActivity) {
                getSubActivity.forEach(function (item) {
                    _this.getExtraFieldArray().push(_this.createDynamicFields(item));
                });
            }
            if (Number(value.subactivity_code) === 448 || Number(value.subactivity_code) === 417) {
                this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].TIMESHEET_PAYROLL_OPTIONS + '/' + value.subactivity_code, {}, {}).subscribe(function (response) {
                    _this.payrollOptionList = response.payload.data;
                });
            }
        }
    };
    /**
     * On Time Update Change Units
     */
    AddUsersTimesheetComponent.prototype.updateUnits = function () {
        var startTime = this.addTimesheetForm.get('start_time').value;
        var endTime = this.addTimesheetForm.get('end_time').value;
        if (startTime && endTime) {
            var units = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_12__["getUnitsFromTime"])(startTime, endTime);
            // console.log(this.addTimesheetForm.get('units').value);
            if (units >= 0) {
                this.addTimesheetForm.get('units').setValue(units);
            }
        }
    };
    /**
     * Get Subactivity Field
     * @param index
     */
    AddUsersTimesheetComponent.prototype.getSubactivityField = function (index) {
        var ItemData = (this.timesheetConstant[index]) ? this.timesheetConstant[index] : null;
        return ItemData;
    };
    /**
     * Create Dynamic Fields
     */
    AddUsersTimesheetComponent.prototype.createDynamicFields = function (item) {
        return this._fb.group({
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['label'] : ''),
            help: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['help'] : ''),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['key'] : ''),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['value'] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['type'] : ''),
            msg_required: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['msg_required'] : ''),
            msg_invalid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['msg_invalid'] : ''),
        });
    };
    /**
     * Create Dynamic Employee Name Fields
     */
    AddUsersTimesheetComponent.prototype.createDynamicEmployeeNameFields = function (item) {
        return this._fb.group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['first_name'] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['last_name'] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    /**
     * On Update Value Set Value + Update Validation for form
     * @param index
     * @param value
     */
    AddUsersTimesheetComponent.prototype.onUpdateValues = function (index, value, checked, keyData) {
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
        // console.log(this.getExtraFieldArray().controls);
    };
    /**
     * On Add Employee Fields
     * @param value
     */
    AddUsersTimesheetComponent.prototype.addEmployeeFields = function (value) {
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
    AddUsersTimesheetComponent.prototype.onUpdateEmployeeValues = function (index, value, key) {
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
    AddUsersTimesheetComponent.prototype.onUpdateDateValues = function (index, value) {
        if (index >= 0) {
            if (value) {
                var dateValue = moment__WEBPACK_IMPORTED_MODULE_13__(value).format('YYYY-MM-DD');
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
    AddUsersTimesheetComponent.prototype.UpdateFormControl = function () {
        this.addTimesheetForm.get('extra_fields').reset([]);
        this.addTimesheetForm.removeControl('extra_fields');
        this.addTimesheetForm.addControl('extra_fields', this._fb.array([]));
    };
    /**
     * Update Form Control
     * @constructor
     */
    AddUsersTimesheetComponent.prototype.UpdateFormControlEmployee = function () {
        this.addTimesheetForm.get('name_employee').reset([]);
        this.addTimesheetForm.removeControl('name_employee');
        this.addTimesheetForm.addControl('name_employee', this._fb.array([]));
    };
    /**
     * Flag to Submit of add & add and new
     * @param type
     */
    AddUsersTimesheetComponent.prototype.flagToSubmitUpdate = function (type) {
        this.flagToSubmit = type;
    };
    /**
     * On Submit Timesheet
     * @param form
     */
    AddUsersTimesheetComponent.prototype.onSubmitTimesheet = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['parent_id'] = this.worksheetData.parent_id;
            form.value['entity_id'] = this.worksheetData.entity_id;
            form.value['date'] = moment__WEBPACK_IMPORTED_MODULE_13__(form.value['date']).format('YYYY-MM-DD');
            var nameOfEmp = form.value['name_employee'];
            form.value['is_export'] = 0;
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
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].TIMESHEET_LISTING, form.value).subscribe(function (response) {
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
    AddUsersTimesheetComponent.prototype.onWorksheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * on page page timesheet
     */
    AddUsersTimesheetComponent.prototype.onTodaysTimesheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * Open quick menu
     * @param menuName
     */
    AddUsersTimesheetComponent.prototype.onOpenQuickMenu = function (menuName) {
        switch (menuName) {
            case 'addNewWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].ADD_WORKSHEET]);
                break;
            case 'todayWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].WORKSHEET_TODAYS_WORKSHEET]);
                break;
            case 'todayTimesheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
                break;
            case 'worksheetHierarchy':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].WORKSHEET_HIERARCHY]);
                break;
            case 'changeInOuttime':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].WORKSHEET_CHANGE_IN_OUT_TIME]);
                break;
            case 'subClientList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].WORKSHEET_SUB_CLIENT_LIST]);
                break;
            case 'worksheetMasterChecklist':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].WORKSHEET_MASTER_CHECKLIST]);
                break;
            case 'trainingList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].WORKSHEET_TRAINING_LIST]);
                break;
            case 'revieworKnockBackWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].WORKSHEET_REVIEW_OR_KNOCK_BACK]);
                break;
            case 'peerReviewWorksheetListing':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
                break;
            case 'changeMultipleWorksheetStatus':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].CHANGE_MULTIPLE_WORKSHEET_STATUS]);
                break;
        }
    };
    /**
     * On home page route
     */
    AddUsersTimesheetComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Update units on header
     */
    AddUsersTimesheetComponent.prototype.getHRDetail = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].GETDETAIL, {}).subscribe(function (Response) {
            _this.hrDetail = Response.payload.data;
            var units = (_this.hrDetail && (_this.hrDetail.units >= 0)) ? _this.hrDetail.units : 0;
            _this._sharedService.setTimeSheetUnits(units);
        });
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    AddUsersTimesheetComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addEditTimesheetDataForm'),
        __metadata("design:type", Object)
    ], AddUsersTimesheetComponent.prototype, "addEditTimesheetDataForm", void 0);
    AddUsersTimesheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-users-timesheet',
            template: __webpack_require__(/*! ./add-users-timesheet.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-users-timesheet/add-users-timesheet.component.html"),
            styles: [__webpack_require__(/*! ./add-users-timesheet.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-users-timesheet/add-users-timesheet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"]])
    ], AddUsersTimesheetComponent);
    return AddUsersTimesheetComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-users-timesheet/add-users-timesheet.module.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-users-timesheet/add-users-timesheet.module.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: AddUsersTimesheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUsersTimesheetModule", function() { return AddUsersTimesheetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _add_users_timesheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-users-timesheet.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-users-timesheet/add-users-timesheet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_users_timesheet_component__WEBPACK_IMPORTED_MODULE_5__["AddUsersTimesheetComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__["AdminAuthGuard"]]
    },
];
var AddUsersTimesheetModule = /** @class */ (function () {
    function AddUsersTimesheetModule() {
    }
    AddUsersTimesheetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_users_timesheet_component__WEBPACK_IMPORTED_MODULE_5__["AddUsersTimesheetComponent"]],
            exports: [_add_users_timesheet_component__WEBPACK_IMPORTED_MODULE_5__["AddUsersTimesheetComponent"]]
        })
    ], AddUsersTimesheetModule);
    return AddUsersTimesheetModule;
}());



/***/ })

}]);
//# sourceMappingURL=worksheet-dashboard-action-add-users-timesheet-add-users-timesheet-module.js.map