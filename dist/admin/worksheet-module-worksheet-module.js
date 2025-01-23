(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["worksheet-module-worksheet-module"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-dashboard-action.module.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-dashboard-action.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: WorksheetDashboardActionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetDashboardActionModule", function() { return WorksheetDashboardActionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _worksheet_status_log_dialog_worksheet_status_log_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./worksheet-status-log-dialog/worksheet-status-log-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _complete_worksheet_status_dialog_complete_worksheet_status_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complete-worksheet-status-dialog/complete-worksheet-status-dialog.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/complete-worksheet-status-dialog/complete-worksheet-status-dialog.component.ts");
/* harmony import */ var _worksheet_notes_dialog_worksheet_notes_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./worksheet-notes-dialog/worksheet-notes-dialog.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component.ts");
/* harmony import */ var _edit_task_checklist_knockback_add_timesheet_dialog_knockback_add_timesheet_dialog_knockback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-task-checklist-knockback/add-timesheet-dialog-knockback/add-timesheet-dialog-knockback.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/edit-task-checklist-knockback/add-timesheet-dialog-knockback/add-timesheet-dialog-knockback.component.ts");
/* harmony import */ var _edit_task_checklist_upload_documents_dialog_upload_documents_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-task-checklist/upload-documents-dialog/upload-documents-dialog.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/edit-task-checklist/upload-documents-dialog/upload-documents-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var WorksheetDashboardActionModule = /** @class */ (function () {
    function WorksheetDashboardActionModule() {
    }
    WorksheetDashboardActionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ],
            declarations: [_worksheet_status_log_dialog_worksheet_status_log_dialog__WEBPACK_IMPORTED_MODULE_2__["WorksheetStatusLogDialog"], _complete_worksheet_status_dialog_complete_worksheet_status_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CompleteWorksheetStatusDialogComponent"], _worksheet_notes_dialog_worksheet_notes_dialog_component__WEBPACK_IMPORTED_MODULE_5__["WorksheetNotesDialogComponent"], _edit_task_checklist_knockback_add_timesheet_dialog_knockback_add_timesheet_dialog_knockback_component__WEBPACK_IMPORTED_MODULE_6__["AddTimesheetDialogKnockbackComponent"], _edit_task_checklist_upload_documents_dialog_upload_documents_dialog_component__WEBPACK_IMPORTED_MODULE_7__["UploadDocumentsDialogComponent"]],
            entryComponents: [_worksheet_status_log_dialog_worksheet_status_log_dialog__WEBPACK_IMPORTED_MODULE_2__["WorksheetStatusLogDialog"], _complete_worksheet_status_dialog_complete_worksheet_status_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CompleteWorksheetStatusDialogComponent"], _worksheet_notes_dialog_worksheet_notes_dialog_component__WEBPACK_IMPORTED_MODULE_5__["WorksheetNotesDialogComponent"], _edit_task_checklist_knockback_add_timesheet_dialog_knockback_add_timesheet_dialog_knockback_component__WEBPACK_IMPORTED_MODULE_6__["AddTimesheetDialogKnockbackComponent"], _edit_task_checklist_upload_documents_dialog_upload_documents_dialog_component__WEBPACK_IMPORTED_MODULE_7__["UploadDocumentsDialogComponent"]]
        })
    ], WorksheetDashboardActionModule);
    return WorksheetDashboardActionModule;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-module.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-module.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin Header html View -->\r\n<div class=\"admin-hrms-dashboard-container\" style=\"background: #ffffff\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>WORKFLOW</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">WORKSHEET</span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n\r\n <div class=\"row progress-bar-section MT-15\">\r\n    <div class=\"col-md-12 PL-10 PR-0\">\r\n      <mat-card class=\"request-counts-card\">\r\n        <mat-card-content>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2 request-count\">\r\n              <a (click)=\"onMyWorksheetList()\">\r\n                <h3>103</h3>\r\n                <label>My Worksheet</label>\r\n              </a>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 request-count\">\r\n              <a>\r\n                <h3>2560</h3>\r\n                <label>View Incompleted Worksheet</label>\r\n              </a>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 request-count\">\r\n              <a>\r\n                <h3>3200</h3>\r\n                <label>View completed Worksheet</label>\r\n              </a>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 request-count PL-0\">\r\n              <a>\r\n                <h3>2</h3>\r\n                <label>Pending Worksheet</label>\r\n              </a>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 request-count\">\r\n              <a>\r\n                <h3>1023</h3>\r\n                <label>View Befree Worksheet</label>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-module.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-module.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1tb2R1bGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-module.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-module.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WorksheetModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetModuleComponent", function() { return WorksheetModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorksheetModuleComponent = /** @class */ (function () {
    function WorksheetModuleComponent(_router) {
        this._router = _router;
    }
    WorksheetModuleComponent.prototype.ngOnInit = function () {
    };
    WorksheetModuleComponent.prototype.onMyWorksheetList = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    WorksheetModuleComponent.prototype.onGoDashboard = function () {
    };
    WorksheetModuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-worksheet-module',
            template: __webpack_require__(/*! ./worksheet-module.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-module.component.html"),
            styles: [__webpack_require__(/*! ./worksheet-module.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-module.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WorksheetModuleComponent);
    return WorksheetModuleComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-quick-action.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-quick-action.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: WorksheetQuickActionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetQuickActionModule", function() { return WorksheetQuickActionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WorksheetQuickActionModule = /** @class */ (function () {
    function WorksheetQuickActionModule() {
    }
    WorksheetQuickActionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ],
            declarations: [_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_2__["ReviewActionAllocateReviewerDialog"]],
            entryComponents: [_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_2__["ReviewActionAllocateReviewerDialog"]]
        })
    ], WorksheetQuickActionModule);
    return WorksheetQuickActionModule;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet.module.ts ***!
  \****************************************************************************/
/*! exports provided: WorksheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetModule", function() { return WorksheetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _worksheet_dashboard_tab_worksheet_dashboard_tab_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./worksheet-dashboard-tab/worksheet-dashboard-tab.module */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-dashboard-tab.module.ts");
/* harmony import */ var _worksheet_dashboard_action_worksheet_dashboard_action_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./worksheet-dashboard-action/worksheet-dashboard-action.module */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-dashboard-action.module.ts");
/* harmony import */ var _worksheet_quick_action_worksheet_quick_action_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./worksheet-quick-action/worksheet-quick-action.module */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/worksheet-quick-action.module.ts");
/* harmony import */ var _worksheet_module_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./worksheet-module.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-module.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _worksheet_module_component__WEBPACK_IMPORTED_MODULE_8__["WorksheetModuleComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    },
    {
        path: 'worksheet-dashboard-tab',
        loadChildren: './worksheet-dashboard-tab/worksheet-dashboard-tab.module#WorksheetDashboardTabModule'
    },
    // Dashboard quick action
    {
        path: 'add-timesheet',
        loadChildren: './worksheet-dashboard-action/add-timesheet/add-timesheet.module#AddTimesheetModule'
    },
    {
        path: 'add-users-timesheet',
        loadChildren: './worksheet-dashboard-action/add-users-timesheet/add-users-timesheet.module#AddUsersTimesheetModule'
    },
    {
        path: 'add-worksheet',
        loadChildren: './worksheet-dashboard-action/add-worksheet/add-worksheet.module#AddWorksheetModule'
    },
    {
        path: 'change-multiple-worksheet-status',
        loadChildren: './worksheet-dashboard-action/change-multiple-worksheet-status/change-multiple-worksheet-status.module#ChangeMultipleWorksheetStatusModule'
    },
    {
        path: 'checklist-email-preview',
        loadChildren: './worksheet-dashboard-action/checklist-email-preview/checklist-email-preview.module#ChecklistEmailPreviewModule'
    },
    {
        path: 'checklist-email-review',
        loadChildren: './worksheet-dashboard-action/checklist-email-review/checklist-email-review.module#ChecklistEmailReviewModule'
    },
    {
        path: 'edit-task-checklist',
        loadChildren: './worksheet-dashboard-action/edit-task-checklist/edit-task-checklist.module#EditTaskChecklistModule'
    },
    {
        path: 'edit-task-checklist-knockback',
        loadChildren: './worksheet-dashboard-action/edit-task-checklist-knockback/edit-task-checklist-knockback.module#EditTaskChecklistKnockbackModule'
    },
    {
        path: 'edit-task-checklist-peer-review',
        loadChildren: './worksheet-dashboard-action/edit-task-checklist-peer-review/edit-task-checklist-peer-review.module#EditTaskChecklistPeerReviewModule'
    },
    {
        path: 'edit-task-checklist-tam',
        loadChildren: './worksheet-dashboard-action/edit-task-checklist-tam/edit-task-checklist-tam.module#EditTaskChecklistTamModule'
    },
    {
        path: 'task-checklist',
        loadChildren: './worksheet-dashboard-action/task-checklist/task-checklist.module#TaskChecklistModule'
    },
    //Quick action
    {
        path: 'todays-worksheet',
        loadChildren: './worksheet-quick-action/todays-worksheet/todays-worksheet.module#TodaysWorksheetModule'
    },
    {
        path: 'hierarchy',
        loadChildren: './worksheet-quick-action/hierarchy/hierarchy.module#HierarchyModule'
    },
    {
        path: 'sub-client-list',
        loadChildren: './worksheet-quick-action/sub-client-list/sub-client-list.module#SubClientListModule'
    },
    {
        path: 'training-list',
        loadChildren: './worksheet-quick-action/training-list/training-list.module#TrainingListModule'
    },
    {
        path: 'master-checklist',
        loadChildren: './worksheet-quick-action/worksheet-master-checklist/worksheet-master-checklist.module#WorksheetMasterChecklistModule'
    },
    {
        path: 'peer-review-worksheet-listing',
        loadChildren: './worksheet-quick-action/peer-review-worksheet-listing/peer-review-worksheet-listing.module#PeerReviewWorksheetListingModule'
    },
    {
        path: 'review-or-knock-back-worksheet',
        loadChildren: './worksheet-quick-action/review-or-knock-back-worksheet/review-or-knock-back-worksheet.module#ReviewOrKnockBackWorksheetModule'
    },
    {
        path: 'todays-timesheet',
        loadChildren: './worksheet-quick-action/todays-timesheet/todays-timesheet.module#TodaysTimesheetModule'
    },
    {
        path: 'prepare-query',
        loadChildren: './worksheet-dashboard-action/prepare-query/prepare-query.module#PrepareQueryModule'
    },
    {
        path: 'view-worksheet-comments',
        loadChildren: './worksheet-quick-action/view-worksheet-comments/view-worksheet-comments.module#ViewWorksheetCommentsModule'
    }
];
var WorksheetModule = /** @class */ (function () {
    function WorksheetModule() {
    }
    WorksheetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__["UtilityModule"],
                _worksheet_dashboard_action_worksheet_dashboard_action_module__WEBPACK_IMPORTED_MODULE_6__["WorksheetDashboardActionModule"],
                _worksheet_quick_action_worksheet_quick_action_module__WEBPACK_IMPORTED_MODULE_7__["WorksheetQuickActionModule"]
            ],
            declarations: [_worksheet_module_component__WEBPACK_IMPORTED_MODULE_8__["WorksheetModuleComponent"]],
            entryComponents: [],
            exports: [_worksheet_dashboard_tab_worksheet_dashboard_tab_module__WEBPACK_IMPORTED_MODULE_5__["WorksheetDashboardTabModule"]]
        })
    ], WorksheetModule);
    return WorksheetModule;
}());



/***/ })

}]);
//# sourceMappingURL=worksheet-module-worksheet-module.js.map