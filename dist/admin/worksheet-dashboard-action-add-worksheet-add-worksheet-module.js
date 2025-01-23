(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["worksheet-dashboard-action-add-worksheet-add-worksheet-module"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/add-worksheet.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/add-worksheet.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-worksheet-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">\r\n            <a (click)=\"onWorksheet()\">WORKSHEET</a>\r\n          </span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">ADD WORKSHEET</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 PR-0\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayWorksheet')\">Today's Worksheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayTimesheet')\">Today's Timesheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetHierarchy')\"\r\n                          *ngIf=\"tabDataWorksheetHierarchy['view']\">Worksheet Hierarchy\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('subClientList')\"\r\n                          *ngIf=\"tabDataWorksheetSubClientList['view']\">Sub Client List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetMasterChecklist')\"\r\n                          *ngIf=\"tabDataWorksheetMasterChecklist['view']\">Worksheet Master Checklist\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                          *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('trainingList')\"\r\n                          *ngIf=\"tabDataWorksheetTraining['view']\">Training List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                          *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                    Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('peerReviewWorksheetListing')\"\r\n                          *ngIf=\"tabDataWorksheetPeerReviewerList['view']\">Peer Review Worksheet\r\n                    Listing\r\n                  </button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n\r\n  <!--Start add worksheet form-->\r\n  <div>\r\n    <span class=\"panel-title orange-color\">Add New Worksheet</span>\r\n    <div class=\"row\">\r\n      <mat-hint class=\"red-color col-md-9\">Note:- If client discontinue process initiated, Worksheet rule will not be create for those clients</mat-hint>\r\n      <!--<a href=\"\" target=\"_blank\" class=\"col-md-3\">SOP</a>-->\r\n      <div class=\"col-md-3 leave-type-list text-right\">\r\n        <ul>\r\n          <li class=\"blue-drop-button\">\r\n            <button (click)=\"openSOP()\" type=\"button\" class=\"btn-primary btn-add\">SOP</button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <form [formGroup]=\"addWorksheetForm\" (submit)=\"onAddWorksheet(addWorksheetForm.value,addWorksheetForm.valid)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <mat-radio-group (change)=\"onChangeType($event.value)\">\r\n            <mat-radio-button [checked]=\"isMultipleClientName ? false : true\" value=\"2\">Single Client</mat-radio-button>\r\n            <mat-radio-button [checked]=\"isMultipleClientName ? true : false\" class=\"ML-15\" value=\"1\">Multiple Client\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n      </div>\r\n      <div class=\"row MT-20\">\r\n        <div class=\"col-md-4\">\r\n          <ng-select [items]=\"clientListParent\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Parent Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"onChangeParentEntity($event)\"\r\n                     formControlName=\"parent_id\">\r\n          </ng-select>\r\n\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addWorksheetForm.get('parent_id'))\"\r\n                            [errMsg]=\"validationMsg.CLIENT_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!isMultipleClientName\" class=\"col-md-4\">\r\n          <ng-select [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"onEntityChange($event,0)\"\r\n                     formControlName=\"entity_id\">\r\n          </ng-select>\r\n\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addWorksheetForm.get('entity_id'))\"\r\n                            [errMsg]=\"validationMsg.CLIENT_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"isMultipleClientName\" class=\"col-md-12\">\r\n          <span class=\"text-right on-right back-color\">You have selected\r\n            <span\r\n              class=\"primary-color\">{{(selectedFilterEntity) ? selectedFilterEntity.length : 0}}</span> clients.</span>\r\n          <span (click)=\"selectAll()\" class=\"cursor-pointer\">Select All |</span>\r\n          <span (click)=\"unselectAll()\" class=\"cursor-pointer\"> DeSelect All</span>\r\n          <ng-select [items]=\"clientList\" [multiple]=\"true\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"entity_id\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addWorksheetForm.get('entity_id'))\"\r\n                            [errMsg]=\"validationMsg.CLIENT_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <ng-select [items]=\"masterActivityList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"name\"\r\n                     placeholder=\"Master Activity\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"getTaskFilterList($event)\"\r\n                     formControlName=\"master_activity_id\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addWorksheetForm.get('master_activity_id'))\"\r\n                            [errMsg]=\"validationMsg.MASTER_ACTIVITY_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <ng-select [items]=\"taskList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"name\"\r\n                     placeholder=\"Task\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"getTaskList($event)\"\r\n                     formControlName=\"task_id\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addWorksheetForm.get('task_id'))\"\r\n                            [errMsg]=\"validationMsg.TASK_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <ng-select [items]=\"yesNoList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"label\"\r\n                     placeholder=\"Critical Task?\"\r\n                     bindValue=\"key\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"critical_task\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addWorksheetForm.get('critical_task'))\"\r\n                            [errMsg]=\"validationMsg.TASK_CRITICAL_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <ng-select [items]=\"addiotionalAssignee\"\r\n                     bindLabel=\"userfullname\"\r\n                     bindValue=\"id\"\r\n                     groupBy=\"name\"\r\n                     placeholder=\"Additional Assignee\"\r\n                     formControlName=\"worksheet_additional_assignee\"\r\n                     [selectableGroup]=\"false\">\r\n            <ng-template ng-optgroup-tmp let-item=\"item\">\r\n              {{item.name}}\r\n            </ng-template>\r\n          </ng-select>\r\n          <mat-hint class=\"red-color\">Note:- Worksheet not visible, If client not allocated to user\r\n          </mat-hint>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input formControlName=\"start_date\" matInput [matDatepicker]=\"startDate\" placeholder=\"Start Date\" required>\r\n            <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #startDate></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addWorksheetForm.get('start_date'))\"\r\n                            [errMsg]=\"validationMsg.DATE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input formControlName=\"end_date\" matInput [matDatepicker]=\"endDate\" placeholder=\"End Date\" required>\r\n            <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #endDate></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addWorksheetForm.get('end_date'))\"\r\n                            [errMsg]=\"validationMsg.DATE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\" required\r\n                        (selectionChange)=\"getFreqValue($event.value)\">\r\n              <mat-option *ngFor=\"let data of frequencyList; let i = index\" [value]=\"data.id\">{{data.frequency_name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addWorksheetForm.get('frequency_id'))\"\r\n                            [errMsg]=\"validationMsg.FREQUENCY_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field *ngIf=\"freqValue === 1 || freqValue === 2 || freqValue === 6 || freqValue === 9\">\r\n            <!-- formControlName=\"frequency_id\" placeholder=\"Frequency\" required (change)=\"getFreqValue($event)\" -->\r\n            <mat-select formControlName=\"expert_day\" placeholder=\"Day\" [multiple]=\"false\">\r\n              <mat-option *ngFor=\"let data of dayData; let i = index\" [value]=\"data\">{{data}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field *ngIf=\"freqValue === 4 || freqValue === 5\">\r\n            <!-- formControlName=\"frequency_id\" placeholder=\"Frequency\" required (change)=\"getFreqValue($event)\" -->\r\n            <mat-select formControlName=\"expert_month\" placeholder=\"Month\" [multiple]=\"false\">\r\n              <mat-option *ngFor=\"let data of monthData; let i = index\" [value]=\"data\">{{data}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field *ngIf=\"freqValue === 10\">\r\n            <!-- formControlName=\"frequency_id\" placeholder=\"Frequency\" required (change)=\"getFreqValue($event)\" -->\r\n            <mat-select formControlName=\"expert_day\" placeholder=\"Day\" [multiple]=\"true\">\r\n              <mat-option *ngFor=\"let data of dayData; let i = index\" [value]=\"data\">{{data}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field *ngIf=\"freqValue === 3\">\r\n            <!-- formControlName=\"frequency_id\" placeholder=\"Frequency\" required (change)=\"getFreqValue($event)\" -->\r\n            <mat-select formControlName=\"expert_month\" placeholder=\"Month\" [multiple]=\"true\">\r\n              <mat-option *ngFor=\"let data of monthData; let i = index\" [value]=\"data\">{{data}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <mat-radio-group (change)=\"onChangeDueDate($event.value)\" formControlName=\"due_date_period\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 PL-0\">\r\n                <div class=\"MT-15\">\r\n                  <span class=\"dark-gray-color MR-15\">Due Date</span>\r\n                  <mat-radio-button value=\"1\">After Days</mat-radio-button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 PR-0 MT-15\" *ngIf=\"checkBoxValue == 1\">\r\n                <!--<mat-form-field>-->\r\n                <!--<mat-select formControlName=\"due_after_day\" placeholder=\"After days\">-->\r\n                <!--<mat-option *ngFor=\"let data of dateData\" [value]=\"data\">{{data}}</mat-option>-->\r\n                <!--</mat-select>-->\r\n                <!--</mat-form-field>-->\r\n                <mat-form-field>\r\n                  <input matInput type=\"number\" formControlName=\"due_after_day\" placeholder=\"After days\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"validation-msg\"></div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 MT-15 PL-0\">\r\n                <mat-radio-button value=\"2\">On Date of month</mat-radio-button>\r\n              </div>\r\n              <div class=\"col-md-6 PR-0 MT-15\" *ngIf=\"checkBoxValue == 2\">\r\n                <mat-form-field>\r\n                  <mat-select formControlName=\"due_month_day\" placeholder=\"On Date of Month\">\r\n                    <mat-option *ngFor=\"let data of dateData.slice(1)\" [value]=\"data\">{{data}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <div class=\"validation-msg\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 MT-15 PL-0\">\r\n                <mat-radio-button value=\"3\">On Particular Date</mat-radio-button>\r\n              </div>\r\n              <div class=\"col-md-6 PR-0 MT-15\" *ngIf=\"checkBoxValue == 3\">\r\n                <mat-form-field>\r\n                  <input formControlName=\"due_on_particular_date\" matInput [matDatepicker]=\"particularDate\"\r\n                         placeholder=\"Date\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"particularDate\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #particularDate></mat-datepicker>\r\n                </mat-form-field>\r\n                <div class=\"validation-msg\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-radio-group>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\"\r\n             *ngIf=\"addWorksheetForm.get('master_activity_id').value === 62 || addWorksheetForm.get('master_activity_id').value === 26\">\r\n          <mat-form-field>\r\n            <input type=\"number\" formControlName=\"budgeted_unit\" matInput=\"\" placeholder=\"Account Team Budgeted Unit\">\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <textarea formControlName=\"notes\" matInput placeholder=\"Notes\" rows=\"2\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 MB-20\">\r\n        <div class=\"row MT-30\">\r\n          <div class=\"col-md-6 PL-0\">\r\n          </div>\r\n          <div class=\"col-md-6 text-right PR-0\">\r\n            <!--<button [disabled]=\"addWorksheetForm.invalid\" type=\"submit\" class=\"btn-primary\">Save & Next</button>-->\r\n            <!--<button type=\"submit\" class=\"btn-primary MR-5\" (click)=\"onWorksheetPreviewDetails(2)\"-->\r\n                    <!--[disabled]=\"addWorksheetForm.invalid\">Set Rule Only-->\r\n            <!--</button>-->\r\n            <!--<button type=\"submit\" class=\"btn-primary MR-5\" (click)=\"onWorksheetPreviewDetails(3)\"-->\r\n                    <!--[disabled]=\"addWorksheetForm.invalid\">Set Rule & Create Worksheet-->\r\n            <!--</button>-->\r\n            <button type=\"submit\" class=\"btn-primary MR-5\" (click)=\"onWorksheetPreviewDetails(1)\"\r\n                    [disabled]=\"addWorksheetForm.invalid\">Save & Next\r\n            </button>\r\n            <button (click)=\"onWorksheet()\" type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!--End add worksheet form-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/add-worksheet.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/add-worksheet.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1kYXNoYm9hcmQtYWN0aW9uL2FkZC13b3Jrc2hlZXQvYWRkLXdvcmtzaGVldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/add-worksheet.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/add-worksheet.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: AddWorksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWorksheetComponent", function() { return AddWorksheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
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







var AddWorksheetComponent = /** @class */ (function (_super) {
    __extends(AddWorksheetComponent, _super);
    function AddWorksheetComponent(_router, _fb, _sharedService, _sharedObjService, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this._sharedService = _sharedService;
        _this._sharedObjService = _sharedObjService;
        _this._commonCrudService = _commonCrudService;
        _this.freqValueData = 0;
        _this.clientListAllData = [];
        _this.masterActivityList = [];
        _this.taskList = [];
        _this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["yesNo"].slice(1);
        _this.dateData = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30
        ];
        _this.monthData = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];
        _this.dayData = [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        ];
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        // State variables
        _this.isMultipleClientName = false;
        _this.clientList = [];
        _this.clientListParent = [];
        _this.clientListFiltered = [];
        _this.isSingle = true;
        _this.addiotionalAssignee = [];
        _this.tabIDWorksheetHierarchy = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_12__["ADMINTABACCESS"].WORKFLOW_MASTERACTIVITY;
        _this.tabIDWorksheetTraining = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_12__["ADMINTABACCESS"].WORKFLOW_WORKSHEETTRAINING;
        _this.tabIDWorksheetSubClientList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_12__["ADMINTABACCESS"].WORKFLOW_SUBCLIENTLIST;
        _this.tabIDWorksheetReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_12__["ADMINTABACCESS"].WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
        _this.tabIDWorksheetPeerReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_12__["ADMINTABACCESS"].WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
        _this.tabIDWorksheetMasterChecklist = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_12__["ADMINTABACCESS"].WORKFLOW_MASTERCHECKLIST;
        _this.tabIDWorksheetMultiplueStatusChange = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_12__["ADMINTABACCESS"].WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;
        _this.isMultipleStatusUpdate = false;
        _this.buttonType = 0;
        return _this;
    }
    AddWorksheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
        this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
        this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
        this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
        this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
        this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
        this.createWorksheetForm();
        this.getTaskAndMasterActivity();
        this.getClientList();
        // this.getClientMultiple();
        this.getFrequencyData();
        var data = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GLOBALDATAKEYS"].ADD_WORKSHEET);
        // console.log(data);
        if (data) {
            setTimeout(function (res) {
                _this.addWorksheetForm.controls['parent_id'].setValue(data.parent_id);
                _this.addWorksheetForm.controls['parent_name'].setValue(data.parent_name);
                _this.addWorksheetForm.controls['entity_id'].setValue(data.entity_id);
                _this.addWorksheetForm.controls['master_activity_id'].setValue(data.master_activity_id);
                _this.addWorksheetForm.controls['task_id'].setValue(data.task_id);
                _this.addWorksheetForm.controls['start_date'].setValue(data.start_date);
                _this.addWorksheetForm.controls['end_date'].setValue(data.end_date);
                _this.addWorksheetForm.controls['frequency_id'].setValue(data.frequency_id);
                _this.addWorksheetForm.controls['due_date_period'].setValue(data.due_date_period);
                _this.addWorksheetForm.controls['budgeted_unit'].setValue(data.budgeted_unit);
                _this.addWorksheetForm.controls['budgeted_unit'].setValue(data.budgeted_unit);
                _this.addWorksheetForm.controls['critical_task'].setValue(data.critical_task);
                if (data.due_after_day) {
                    _this.addWorksheetForm.controls['due_after_day'].setValue(data.due_after_day);
                }
                if (data.due_month_day) {
                    _this.addWorksheetForm.controls['due_month_day'].setValue(data.due_month_day);
                }
                if (data.due_on_particular_date) {
                    _this.addWorksheetForm.controls['due_on_particular_date'].setValue(data.due_on_particular_date);
                }
                _this.addWorksheetForm.controls['notes'].setValue(data.notes);
                // console.log(data.worksheet_additional_assignee);
                _this.addWorksheetForm.controls['worksheet_additional_assignee'].setValue(Number(data.worksheet_additional_assignee));
                _this.freqValueData = data.frequency_id;
                _this.getFreqValue(_this.freqValueData);
                if (data.entity_id.toString().indexOf(',') !== -1) {
                    _this.selectedFilterEntity = data.entity_id.split(',').map(function (response) {
                        return +response;
                    });
                    _this.addWorksheetForm.controls['entity_id'].setValue(_this.selectedFilterEntity);
                }
                if (data.expert_day && data.expert_day.toString().indexOf(',') !== -1) {
                    var dayData = data.expert_day.split(',');
                    _this.addWorksheetForm.controls['expert_day'].setValue(dayData);
                }
                else {
                    _this.addWorksheetForm.controls['expert_day'].setValue(data.expert_day);
                }
                if (data.expert_month && data.expert_month.toString().indexOf(',') !== -1) {
                    var dayMonth = data.expert_month.split(',');
                    _this.addWorksheetForm.controls['expert_month'].setValue(dayMonth);
                }
                else {
                    // console.log(data.expert_month);
                    _this.addWorksheetForm.controls['expert_month'].setValue(data.expert_month);
                }
                if (data.due_date_period === '1') {
                    _this.checkBoxValue = 1;
                }
                if (data.due_date_period === '2') {
                    _this.checkBoxValue = 2;
                }
                if (data.due_date_period === '3') {
                    _this.checkBoxValue = 3;
                }
                if (data.entity_id.toString().indexOf(',') !== -1 && _this.selectedFilterEntity.length > 1) {
                    _this.isSingle = false;
                    _this.isMultipleClientName = true;
                }
                else {
                    _this.isSingle = true;
                    _this.isMultipleClientName = false;
                    _this.onEntityChange(data.entity_id, 0);
                }
            }, 1000);
        }
    };
    /**
     * Address form creation
     */
    AddWorksheetComponent.prototype.createWorksheetForm = function () {
        this.addWorksheetForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            parent_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.selectedFilterEntity) ? this.selectedFilterEntity : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            expert_day: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            expert_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            due_date_period: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            due_after_day: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            due_month_day: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            due_on_particular_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            worksheet_additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            budgeted_unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            critical_task: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            button_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.buttonType, null)
        });
    };
    /**
     * On address form submit
     * @param value
     * @param valid
     */
    AddWorksheetComponent.prototype.onAddWorksheet = function (value, valid) {
    };
    /**
     * On change due date
     * @param event
     */
    AddWorksheetComponent.prototype.onChangeDueDate = function (event) {
        if (event) {
            var dataItem = this.addWorksheetForm.get('due_date_period').value;
            // console.log(dataItem);
            this.checkBoxValue = Number(dataItem);
            this.addWorksheetForm.get('due_after_day').setValidators(null);
            this.addWorksheetForm.get('due_month_day').setValidators(null);
            this.addWorksheetForm.get('due_on_particular_date').setValidators(null);
            this.addWorksheetForm.get('due_after_day').updateValueAndValidity();
            this.addWorksheetForm.get('due_month_day').updateValueAndValidity();
            this.addWorksheetForm.get('due_on_particular_date').updateValueAndValidity();
            if (this.checkBoxValue === 1) {
                this.addWorksheetForm.get('due_after_day').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                this.addWorksheetForm.get('due_after_day').updateValueAndValidity();
            }
            else if (this.checkBoxValue === 2) {
                this.addWorksheetForm.get('due_month_day').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                this.addWorksheetForm.get('due_month_day').updateValueAndValidity();
            }
            else if (this.checkBoxValue === 3) {
                this.addWorksheetForm.get('due_on_particular_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                this.addWorksheetForm.get('due_on_particular_date').updateValueAndValidity();
            }
        }
    };
    /**
     * On change type of recurring form
     * @param event
     */
    AddWorksheetComponent.prototype.onChangeType = function (event) {
        if (+event === 1) {
            this.isMultipleClientName = true;
        }
        else {
            this.isMultipleClientName = false;
        }
    };
    /**
     * On contact information page redirect
     */
    AddWorksheetComponent.prototype.onWorksheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    AddWorksheetComponent.prototype.onWorksheetPreviewDetails = function (type) {
        this.buttonType = type;
        this.addWorksheetForm.get('button_type').setValue(this.buttonType);
        if (this.addWorksheetForm.value.due_date_period === '1') {
            delete this.addWorksheetForm.value.due_month_day;
            delete this.addWorksheetForm.value.due_on_particular_date;
        }
        if (this.addWorksheetForm.value.due_date_period === '2') {
            delete this.addWorksheetForm.value.due_after_day;
            delete this.addWorksheetForm.value.due_on_particular_date;
        }
        if (this.addWorksheetForm.value.due_date_period === '3') {
            delete this.addWorksheetForm.value.due_after_day;
            delete this.addWorksheetForm.value.due_month_day;
            this.addWorksheetForm.value.due_on_particular_date = moment__WEBPACK_IMPORTED_MODULE_10__(this.addWorksheetForm.value.due_on_particular_date).format('YYYY-MM-DD');
        }
        if (this.addWorksheetForm.value.entity_id.length > 1) {
            this.addWorksheetForm.value.entity_id = this.addWorksheetForm.value.entity_id.join();
        }
        if (Array.isArray(this.addWorksheetForm.value.expert_day)) {
            this.addWorksheetForm.value.expert_day = this.addWorksheetForm.value.expert_day.join();
        }
        if (Array.isArray(this.addWorksheetForm.value.expert_month)) {
            this.addWorksheetForm.value.expert_month = this.addWorksheetForm.value.expert_month.join();
        }
        this.addWorksheetForm.value.start_date = moment__WEBPACK_IMPORTED_MODULE_10__(this.addWorksheetForm.value.start_date).format('YYYY-MM-DD');
        this.addWorksheetForm.value.end_date = moment__WEBPACK_IMPORTED_MODULE_10__(this.addWorksheetForm.value.end_date).format('YYYY-MM-DD');
        // console.log(this.addWorksheetForm.value);
        this.user = this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GLOBALDATAKEYS"].ADD_WORKSHEET, this.addWorksheetForm.value);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_PREVIEW_DETAILS]);
    };
    /**
     * On Entity Change Get Assignee
     * @param event
     */
    AddWorksheetComponent.prototype.onEntityChange = function (event, type) {
        // console.log(type);
        if (this.addWorksheetForm.get('master_activity_id').value > 0) {
            if (type === 0) {
                if (!this.isMultipleClientName) {
                    this.getAdditionalAssignee();
                }
            }
        }
        if (event && type === 1) {
            this.selectedFilterEntity = event.map(function (x) { return x.id; });
        }
    };
    /**
     * Get Task Filter List
     * @param value
     */
    AddWorksheetComponent.prototype.getTaskFilterList = function (value) {
        var _this = this;
        // Get Task
        if (value && (value.id > 0)) {
            this._sharedObjService.getTask({ 'records': 'all' }, { 'compare': { 'equal': { 'master_activity_id': value.id, 'is_active': 1 } } }).subscribe(function (response) {
                _this.addWorksheetForm.get('task_id').setValue(null);
                _this.addWorksheetForm.get('task_id').updateValueAndValidity();
                _this.taskList = response;
                // if (!this.isMultipleClientName) {
                _this.getAdditionalAssignee();
                // }
            });
        }
        else {
            this._sharedObjService.getTask({ 'records': 'all' }, {}).subscribe(function (response) {
                _this.taskList = response;
            });
        }
    };
    AddWorksheetComponent.prototype.getTaskList = function (value) {
        var _this = this;
        // Get Task
        if (value && (value.id > 0)) {
            this._sharedObjService.getTask({ 'records': 'all' }, { 'compare': { 'equal': { 'master_activity_id': value.id, 'is_active': 1 } } }).subscribe(function (response) {
                _this.taskList = response;
                // if (!this.isMultipleClientName) {
                _this.getAdditionalAssignee();
                // }
            });
        }
        else {
            this._sharedObjService.getTask({ 'records': 'all' }, {}).subscribe(function (response) {
                _this.taskList = response;
            });
        }
    };
    /**
     * Get Additional Assignee
     */
    AddWorksheetComponent.prototype.getAdditionalAssignee = function () {
        var _this = this;
        // get addiotional assignee
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].GET_ASSIGNEE, {
            'entity_id': this.addWorksheetForm.get('entity_id').value,
            'master_activity_id': this.addWorksheetForm.get('master_activity_id').value
        }).subscribe(function (response) {
            if (response) {
                _this.addiotionalAssignee = [];
                var data = response.payload.data;
                // console.log(data);
                if (data['teamMember']) {
                    data['teamMember'].forEach(function (item) {
                        item['name'] = 'Team Member';
                        _this.addiotionalAssignee.push(item);
                    });
                }
                if (data['otherMember']) {
                    data['otherMember'].forEach(function (item) {
                        item['name'] = 'Other Member';
                        _this.addiotionalAssignee.push(item);
                    });
                }
                //console.log(this.addiotionalAssignee);
            }
        });
    };
    /**
     * get activity data
     */
    AddWorksheetComponent.prototype.getTaskAndMasterActivity = function () {
        var _this = this;
        // Get Master Activity
        this._sharedObjService.getMasterActivity({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.masterActivityList = response;
        });
        // Get Task
        this._sharedObjService.getTask({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.taskList = response;
        });
    };
    /**
     * Get Client List
     */
    AddWorksheetComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = _this.clientListFiltered = response;
            _this.clientListParent = response.filter(function (item) { return item.is_parent === 1; });
            _this.clientListAllData = response;
        });
    };
    /**
     * Get Frequency Data
     */
    AddWorksheetComponent.prototype.getFrequencyData = function () {
        var _this = this;
        this._sharedObjService.getFrequency({ 'records': 'all' }, { 'in': { 'id': '1,2,3,4,5,6,10' } }).subscribe(function (response) {
            if (response) {
                _this.frequencyList = response;
            }
        });
    };
    /**
     * Select All Client
     */
    AddWorksheetComponent.prototype.selectAll = function () {
        this.selectedFilterEntity = this.clientList.map(function (x) { return x.id; });
        this.addWorksheetForm.get('entity_id').setValue(this.selectedFilterEntity);
    };
    /**
     * UnSelect All Client
     */
    AddWorksheetComponent.prototype.unselectAll = function () {
        this.selectedFilterEntity = [];
        this.addWorksheetForm.get('entity_id').setValue(null);
    };
    AddWorksheetComponent.prototype.getFreqValue = function (value) {
        this.isdailyMonthly = (this.isdailyMonthly === true) ? false : true;
        if (value === 10 || value === 3) {
            this.isdailyMonthly = true;
            this.freqValue = value;
            this.addWorksheetForm.get('expert_month').setValue([]);
            this.addWorksheetForm.get('expert_day').setValue([]);
        }
        else {
            this.isdailyMonthly = false;
            this.freqValue = value;
        }
    };
    /**
     * Get array values from string
     * @param {string} value
     * @param {string} seperator
     * @returns {string[]}
     */
    AddWorksheetComponent.prototype.getArrayToString = function (value, seperator) {
        // console.log(value);
        if (value) {
            var valueOne_1 = [];
            value.split(seperator).map(function (item) {
                valueOne_1.push(Number(item));
            });
            return valueOne_1;
        }
    };
    /**
     * Open quick menu
     * @param menuName
     */
    AddWorksheetComponent.prototype.onOpenQuickMenu = function (menuName) {
        switch (menuName) {
            case 'todayWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_TODAYS_WORKSHEET]);
                break;
            case 'todayTimesheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
                break;
            case 'worksheetHierarchy':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_HIERARCHY]);
                break;
            case 'changeInOuttime':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_CHANGE_IN_OUT_TIME]);
                break;
            case 'subClientList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_SUB_CLIENT_LIST]);
                break;
            case 'worksheetMasterChecklist':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_MASTER_CHECKLIST]);
                break;
            case 'trainingList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_TRAINING_LIST]);
                break;
            case 'revieworKnockBackWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_REVIEW_OR_KNOCK_BACK]);
                break;
            case 'peerReviewWorksheetListing':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
                break;
            case 'changeMultipleWorksheetStatus':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].CHANGE_MULTIPLE_WORKSHEET_STATUS]);
                break;
        }
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    AddWorksheetComponent.prototype.onChangeParentEntity = function (event) {
        var _this = this;
        this.clientList = this.clientListFiltered;
        this.selectedFilterEntity = [];
        this.addWorksheetForm.get('entity_id').setValue(null);
        this.addWorksheetForm.controls['parent_name'].setValue(null);
        if (event && event.id > 0) {
            this.addWorksheetForm.controls['parent_name'].setValue(event.trading_name);
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].WORKSHEET_GET_SUBENTITY + '/' + event.id, {}, {}).subscribe(function (response) {
                _this.clientList = response.payload.data;
            });
        }
    };
    AddWorksheetComponent.prototype.openSOP = function () {
        window.open('https://docs.google.com/document/d/14AcFf3P8STojOdbvy41_Tdc1OCb7TiOr9eQAkwrzACA', '_blank');
    };
    AddWorksheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-worksheet',
            template: __webpack_require__(/*! ./add-worksheet.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/add-worksheet.component.html"),
            styles: [__webpack_require__(/*! ./add-worksheet.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/add-worksheet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_11__["SharedObjService"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"]])
    ], AddWorksheetComponent);
    return AddWorksheetComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/add-worksheet.module.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/add-worksheet.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AddWorksheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWorksheetModule", function() { return AddWorksheetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _add_worksheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-worksheet.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/add-worksheet.component.ts");
/* harmony import */ var _preview_worksheet_details_preview_worksheet_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview-worksheet-details/preview-worksheet-details.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/preview-worksheet-details/preview-worksheet-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _add_worksheet_component__WEBPACK_IMPORTED_MODULE_5__["AddWorksheetComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__["AdminAuthGuard"]]
    },
    {
        path: 'preview-worksheet-details',
        component: _preview_worksheet_details_preview_worksheet_details_component__WEBPACK_IMPORTED_MODULE_6__["PreviewWorksheetDetailsComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__["AdminAuthGuard"]]
    },
];
var AddWorksheetModule = /** @class */ (function () {
    function AddWorksheetModule() {
    }
    AddWorksheetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_worksheet_component__WEBPACK_IMPORTED_MODULE_5__["AddWorksheetComponent"], _preview_worksheet_details_preview_worksheet_details_component__WEBPACK_IMPORTED_MODULE_6__["PreviewWorksheetDetailsComponent"]]
        })
    ], AddWorksheetModule);
    return AddWorksheetModule;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/preview-worksheet-details/preview-worksheet-details.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/preview-worksheet-details/preview-worksheet-details.component.html ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"preview-worksheet\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onWorkflow()\">WORKSHEET</a></span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onAddNewWorksheet()\">ADD NEW WORKSHEET</a></span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">WORKSHEET PREVIEW</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!--Start worksheet preview details-->\r\n  <div>\r\n    <span class=\"panel-title\">Worksheet Preview Details</span>\r\n    <mat-hint class=\"red-color row col-md-12 MB-10\">Note:- If client discontinue process initiated, Worksheet rule will not be create for those clients</mat-hint>\r\n    <form [formGroup]=\"viewWorksheetPreview\"\r\n          (submit)=\"onViewWorksheetPreview(viewWorksheetPreview.value,viewWorksheetPreview.valid)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 label-span-color\">\r\n          <div>\r\n            <label>Master Activity:</label>\r\n            <span>{{basicInfo?.master_activity_name}}</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 label-span-color\">\r\n          <div>\r\n            <label>Task:</label>\r\n            <span>{{basicInfo?.task_name}}</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 label-span-color\">\r\n          <div>\r\n            <label>Notes:</label>\r\n            <span>{{basicInfo?.note}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 label-span-color\">\r\n          <div>\r\n            <label>Parent Trading Name:</label>\r\n            <span>{{dataOfStoreDetails?.parent_name}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 label-span-color MT-10\">\r\n          <div>\r\n            <label>Client Name:</label>\r\n            <span>\r\n              <mat-chip-list *ngFor=\"let data of clientArray; let i = index;\">\r\n                <mat-chip>{{data}}</mat-chip>\r\n              </mat-chip-list>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <!--preview details table html-->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"MT-25\">\r\n          <div class=\"table-container\">\r\n            <div class=\"table-block\">\r\n              <table class=\"table MT-15\">\r\n                <thead>\r\n                <tr>\r\n                  <th>Sr. No</th>\r\n                  <th>Frequency</th>\r\n                  <th>Period</th>\r\n                  <th>Due Date</th>\r\n                  <th>Critical Task?</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let data of otherData; let i = index;\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{data.freq}}</td>\r\n                  <td>{{data.start | date : 'dd-MM-yyyy'}} - {{data.end | date : 'dd-MM-yyyy'}}</td>\r\n                  <td>{{data.due | date : 'dd-MM-yyyy'}}</td>\r\n                  <td>{{getYesNoStatus(dataOfStoreDetails?.critical_task)}}</td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-12 MB-20\">\r\n      <div class=\"row MT-30\">\r\n        <div class=\"col-md-6 PL-0\">\r\n          <button class=\"btn-primary btn-bordered\" (click)=\"onAddNewWorksheet()\" type=\"button\">Back for Change</button>\r\n        </div>\r\n        <div class=\"col-md-6 text-right PR-0\">\r\n          <!--<button [disabled]=\"viewWorksheetPreview.invalid\" type=\"submit\" class=\"btn-primary MR-5\" (click)=\"saveWorkSheet()\">-->\r\n            <!--<span *ngIf=\"dataOfStoreDetails?.button_type === 1\">Create Worksheet Only</span>-->\r\n            <!--<span *ngIf=\"dataOfStoreDetails?.button_type === 2\">Set Rule Only</span>-->\r\n            <!--<span *ngIf=\"dataOfStoreDetails?.button_type === 3\">Set Rule & Create Worksheet</span>-->\r\n          <!--</button>-->\r\n\r\n          <button type=\"submit\" class=\"btn-primary MR-5\" (click)=\"saveWorkSheet(2)\"\r\n          [disabled]=\"viewWorksheetPreview.invalid\">Set Rule Only\r\n          </button>\r\n          <button type=\"submit\" class=\"btn-primary MR-5\" (click)=\"saveWorkSheet(3)\"\r\n          [disabled]=\"viewWorksheetPreview.invalid\">Set Rule & Create Worksheet\r\n          </button>\r\n          <button type=\"submit\" class=\"btn-primary MR-5\" (click)=\"saveWorkSheet(1)\"\r\n                  [disabled]=\"viewWorksheetPreview.invalid\">Create Worksheet Only\r\n          </button>\r\n          <button (click)=\"onAddNewWorksheet()\" type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/preview-worksheet-details/preview-worksheet-details.component.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/preview-worksheet-details/preview-worksheet-details.component.scss ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1kYXNoYm9hcmQtYWN0aW9uL2FkZC13b3Jrc2hlZXQvcHJldmlldy13b3Jrc2hlZXQtZGV0YWlscy9wcmV2aWV3LXdvcmtzaGVldC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/preview-worksheet-details/preview-worksheet-details.component.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/preview-worksheet-details/preview-worksheet-details.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: PreviewWorksheetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewWorksheetDetailsComponent", function() { return PreviewWorksheetDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PreviewWorksheetDetailsComponent = /** @class */ (function () {
    function PreviewWorksheetDetailsComponent(_router, _fb, _sharedService, _commonCrudService) {
        this._router = _router;
        this._fb = _fb;
        this._sharedService = _sharedService;
        this._commonCrudService = _commonCrudService;
        // data variables
        this.otherData = [];
        this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["yesNo"];
    }
    PreviewWorksheetDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createWorksheetPreviewDetails();
        var data = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].ADD_WORKSHEET);
        this.dataOfStoreDetails = data;
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].ADD_WORKSHEET, data).subscribe(function (response) {
            _this.handleResponse(response);
            // console.log(response);
        });
    };
    PreviewWorksheetDetailsComponent.prototype.handleResponse = function (data) {
        this.basicInfo = data.payload.basicinfo;
        this.clientArray = this.basicInfo.entity_name.split(',');
        for (var dataMain in data.payload.data) {
            if (dataMain) {
                this.otherData.push({
                    freq: data.payload.data[dataMain].frequency,
                    start: data.payload.data[dataMain].start_date,
                    end: data.payload.data[dataMain].end_date,
                    due: data.payload.data[dataMain].due_date
                });
            }
        }
    };
    PreviewWorksheetDetailsComponent.prototype.createWorksheetPreviewDetails = function () {
        this.viewWorksheetPreview = this._fb.group({});
    };
    /**
     * On Accept previw details
     * @param value
     * @param valid
     */
    PreviewWorksheetDetailsComponent.prototype.onViewWorksheetPreview = function (value, valid) {
    };
    /**
     * on worksflow page redirection
     */
    PreviewWorksheetDetailsComponent.prototype.onWorkflow = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * add new worksheet bage redirection
     */
    PreviewWorksheetDetailsComponent.prototype.onAddNewWorksheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADD_WORKSHEET]);
    };
    PreviewWorksheetDetailsComponent.prototype.saveWorkSheet = function (type) {
        var _this = this;
        var data = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].ADD_WORKSHEET);
        data.comfirm = 1;
        data.button_type = type;
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].ADD_WORKSHEET, data).subscribe(function (response) {
            _this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].ADD_WORKSHEET, null);
            _this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
        });
    };
    /**
     * On home page route
     */
    PreviewWorksheetDetailsComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    PreviewWorksheetDetailsComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    PreviewWorksheetDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview-worksheet-details',
            template: __webpack_require__(/*! ./preview-worksheet-details.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/preview-worksheet-details/preview-worksheet-details.component.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]],
            styles: [__webpack_require__(/*! ./preview-worksheet-details.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/add-worksheet/preview-worksheet-details/preview-worksheet-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]])
    ], PreviewWorksheetDetailsComponent);
    return PreviewWorksheetDetailsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=worksheet-dashboard-action-add-worksheet-add-worksheet-module.js.map