(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["worksheet-quick-action-hierarchy-hierarchy-module"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/hierarchy.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/hierarchy.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"worksheet-hierarchy-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onWorkflow()\">WORKSHEET</a></span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">WORKSHEET HIERARCHY</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 PR-0\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('addNewWorksheet')\"\r\n                          *ngIf=\"worksheetTabIDData['add_edit']\">Add New Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayWorksheet')\">Today's Worksheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayTimesheet')\">Today's Timesheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('subClientList')\"\r\n                          *ngIf=\"tabDataWorksheetSubClientList['view']\">Sub Client List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetMasterChecklist')\"\r\n                          *ngIf=\"tabDataWorksheetMasterChecklist['view']\">Worksheet Master Checklist\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                          *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('trainingList')\"\r\n                          *ngIf=\"tabDataWorksheetTraining['view']\">Training List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                          *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                    Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('peerReviewWorksheetListing')\"\r\n                          *ngIf=\"tabDataWorksheetPeerReviewerList['view']\">Peer Review Worksheet\r\n                    Listing\r\n                  </button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!--start tab menu-->\r\n  <div class=\"update-client\">\r\n    <mat-tab-group class=\"demo-tab-group contact-tab\" (selectedTabChange)=\"onSelectTab($event)\">\r\n      <mat-tab label=\"Master Activity\">\r\n        <div *ngIf=\"isActiveTab === 0\">\r\n          <app-master-activity></app-master-activity>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab label=\"Task List\">\r\n        <div *ngIf=\"isActiveTab === 1\">\r\n          <app-task-list></app-task-list>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab label=\"Sub Activity\">\r\n        <div *ngIf=\"isActiveTab === 2\">\r\n          <app-sub-activity></app-sub-activity>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n  <!--end tab menu-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/hierarchy.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/hierarchy.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vaGllcmFyY2h5L2hpZXJhcmNoeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/hierarchy.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/hierarchy.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: HierarchyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HierarchyComponent", function() { return HierarchyComponent; });
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





var HierarchyComponent = /** @class */ (function () {
    function HierarchyComponent(_router, _sharedService) {
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
    HierarchyComponent.prototype.ngOnInit = function () {
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
     *  Worksheet Hierarchy redirection
     */
    HierarchyComponent.prototype.onSelectTab = function (tabChangeEvent) {
        this.isActiveTab = tabChangeEvent['index'];
        this.showHistory = (tabChangeEvent['index'] !== 3);
    };
    HierarchyComponent.prototype.onWorkflow = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * On home page route
     */
    HierarchyComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Open quick menu
     * @param menuName
     */
    HierarchyComponent.prototype.onOpenQuickMenu = function (menuName) {
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
            case 'worksheetMasterChecklist':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_MASTER_CHECKLIST]);
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
    HierarchyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hierarchy',
            template: __webpack_require__(/*! ./hierarchy.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/hierarchy.component.html"),
            styles: [__webpack_require__(/*! ./hierarchy.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/hierarchy.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], HierarchyComponent);
    return HierarchyComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/hierarchy.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/hierarchy.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: HierarchyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HierarchyModule", function() { return HierarchyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _hierarchy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hierarchy.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/hierarchy.component.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/task-list.component.ts");
/* harmony import */ var _task_list_add_task_list_add_task_list_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-list/add-task-list/add-task-list-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/add-task-list/add-task-list-dialog.ts");
/* harmony import */ var _sub_activity_sub_activity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sub-activity/sub-activity.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/sub-activity.component.ts");
/* harmony import */ var _sub_activity_add_sub_activity_add_sub_activity_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sub-activity/add-sub-activity/add-sub-activity-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/add-sub-activity/add-sub-activity-dialog.ts");
/* harmony import */ var _master_activity_master_activity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./master-activity/master-activity.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/master-activity.component.ts");
/* harmony import */ var _master_activity_add_master_activity_add_master_activity_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./master-activity/add-master-activity/add-master-activity-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/add-master-activity/add-master-activity-dialog.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _hierarchy_component__WEBPACK_IMPORTED_MODULE_5__["HierarchyComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
];
var HierarchyModule = /** @class */ (function () {
    function HierarchyModule() {
    }
    HierarchyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ],
            declarations: [_master_activity_add_master_activity_add_master_activity_dialog__WEBPACK_IMPORTED_MODULE_11__["AddMasterActivityDialog"], _hierarchy_component__WEBPACK_IMPORTED_MODULE_5__["HierarchyComponent"], _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__["TaskListComponent"], _task_list_add_task_list_add_task_list_dialog__WEBPACK_IMPORTED_MODULE_7__["AddTaskListDialog"], _sub_activity_sub_activity_component__WEBPACK_IMPORTED_MODULE_8__["SubActivityComponent"], _sub_activity_add_sub_activity_add_sub_activity_dialog__WEBPACK_IMPORTED_MODULE_9__["AddSubActivityDialog"], _master_activity_master_activity_component__WEBPACK_IMPORTED_MODULE_10__["MasterActivityComponent"]],
            entryComponents: [_task_list_add_task_list_add_task_list_dialog__WEBPACK_IMPORTED_MODULE_7__["AddTaskListDialog"], _sub_activity_add_sub_activity_add_sub_activity_dialog__WEBPACK_IMPORTED_MODULE_9__["AddSubActivityDialog"], _master_activity_add_master_activity_add_master_activity_dialog__WEBPACK_IMPORTED_MODULE_11__["AddMasterActivityDialog"]]
        })
    ], HierarchyModule);
    return HierarchyModule;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/add-master-activity/add-master-activity-dialog.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/add-master-activity/add-master-activity-dialog.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Add Master Activity dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{(data && data.activityData) ? 'Update' : 'Add'}} Master Activity</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <i class=\"material-icons\" (click)=\"onClose()\">close</i>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addMasterActivityForm\" (submit)=\"onSubmitAddMasterActivity(addMasterActivityForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput [(ngModel)]='selectedActivity' placeholder=\"Master Activity\"\r\n                   formControlName=\"addmasteractivity\" required>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addMasterActivityForm.get('addmasteractivity'))\"\r\n                            [errMsg]=\"validationMsg.MASTER_ACTIVITY_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12  MT-10\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Team\" formControlName=\"addmasterteam\" [multiple]=\"true\" [(ngModel)]='selectedTeam'>\r\n              <mat-option *ngFor=\"let data of teamData; let i = index;\" [value]=\"data.id\">{{data.name}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-12  MT-10\">\r\n          <mat-checkbox [checked]=\"isChecked ? true : false\" formControlName=\"addworksheetschedule\"> Add in worksheet\r\n            schedule\r\n          </mat-checkbox>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal__footer MT-20\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" (click)=\"updateData()\" *ngIf=\"buttonFlag\"\r\n                  [disabled]=\"addMasterActivityForm.invalid\">Update\r\n          </button>\r\n          <button class=\"btn-primary\" (click)=\"saveData()\" *ngIf=\"!buttonFlag\"\r\n                  [disabled]=\"addMasterActivityForm.invalid\">Save\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change Master Activity dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/add-master-activity/add-master-activity-dialog.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/add-master-activity/add-master-activity-dialog.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: AddMasterActivityDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMasterActivityDialog", function() { return AddMasterActivityDialog; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
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







var AddMasterActivityDialog = /** @class */ (function (_super) {
    __extends(AddMasterActivityDialog, _super);
    function AddMasterActivityDialog(dialogRef, data, _fb, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        // Data variables
        _this.masterActivityData = [];
        _this.teamData = [];
        return _this;
    }
    AddMasterActivityDialog.prototype.ngOnInit = function () {
        this.getTaskAndMasterActivity();
        this.getTaskData();
        this.createAddMasterActivityForm();
        if (this.data && this.data.activityData) {
            this.buttonFlag = true;
            this.isChecked = (this.data.activityData.inschedule === 1) ? true : false;
            this.selectedActivity = this.data.activityData.name;
            this.selectedTeam = this.getArrayToString(this.data.activityData.user_team_id, ',');
            this.addMasterActivityForm.get('addworksheetschedule').setValue(this.isChecked);
            this.addMasterActivityForm.get('addmasteractivity').setValue(this.selectedActivity);
            this.addMasterActivityForm.get('addmasterteam').setValue(this.selectedTeam);
        }
        else {
            this.buttonFlag = false;
        }
    };
    AddMasterActivityDialog.prototype.getTaskAndMasterActivity = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(function (response) {
            // console.log(response);
            _this.responseHandle(response);
        });
    };
    AddMasterActivityDialog.prototype.getTaskData = function () {
        var _this = this;
        // console.log(this.data);
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].TEAM, {}, {}).subscribe(function (response) {
            _this.responseTeamHandle(response);
        });
    };
    AddMasterActivityDialog.prototype.responseTeamHandle = function (data) {
        var _this = this;
        var allData = data.payload.data;
        // console.log(allData);
        allData.filter(function (response) {
            // console.log(response);
            _this.teamData.push({ 'id': response.id, 'name': response.team_name, 'is_active': response.is_active });
        });
    };
    AddMasterActivityDialog.prototype.responseHandle = function (data) {
        var masterData = [];
        var taskDataRef = [];
        // console.log(data);
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
        //  setTimeout(res => {
        this.masterActivityData = masterData;
        // }, 500);
        // console.log(this.masterActivityData);
    };
    /**
     * Create add Master Activity
     */
    AddMasterActivityDialog.prototype.createAddMasterActivityForm = function () {
        // console.log(this.data);
        this.addMasterActivityForm = this._fb.group({
            addmasteractivity: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            addmasterteam: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            addworksheetschedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null)
        });
    };
    AddMasterActivityDialog.prototype.onSubmitAddMasterActivity = function (form) {
        if (form.valid) {
            this.onClose();
        }
    };
    AddMasterActivityDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    AddMasterActivityDialog.prototype.updateData = function () {
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].MASTER_ACTIVITY, this.data.activityData.id, {
            'name': this.addMasterActivityForm.controls['addmasteractivity'].value,
            'team_id': this.addMasterActivityForm.controls['addmasterteam'].value.join(','),
            'is_active': this.data.activityData.is_active,
            '_method': 'put',
            'inschedule': (this.addMasterActivityForm.controls['addworksheetschedule'].value === true) ? 1 : 0
        }).subscribe(function (response) {
            // console.log(response);
        });
    };
    AddMasterActivityDialog.prototype.saveData = function () {
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].MASTER_ACTIVITY, {
            'name': this.addMasterActivityForm.controls['addmasteractivity'].value,
            'team_id': this.addMasterActivityForm.controls['addmasterteam'].value.join(','),
            'is_active': 1,
            'inschedule': (this.addMasterActivityForm.controls['addworksheetschedule'].value === true) ? 1 : 0
        }).subscribe(function (response) {
            // console.log(response);
        });
    };
    /**
     * Get array values from string
     * @param {string} value
     * @param {string} seperator
     * @returns {string[]}
     */
    AddMasterActivityDialog.prototype.getArrayToString = function (value, seperator) {
        if (value) {
            var valueOne_1 = [];
            value.split(seperator).map(function (item) {
                valueOne_1.push(Number(item));
            });
            return valueOne_1;
        }
    };
    AddMasterActivityDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-master-activity-dialog',
            template: __webpack_require__(/*! ./add-master-activity-dialog.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/add-master-activity/add-master-activity-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]])
    ], AddMasterActivityDialog);
    return AddMasterActivityDialog;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/master-activity.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/master-activity.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Worksheet master activity Container -->\r\n<!-- Start Data Grid -->\r\n<div class=\"with-filter-grid-container\">\r\n  <!-- Start Grid Inner Header -->\r\n  <div class=\"grid-inner-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 inner-header-title\">\r\n        <button class=\"open-dialog-btn\" (click)=\"openAddEditMasterActivityDialog()\"><i class=\"material-icons\">add</i>\r\n          Add Master Activity\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"download-icon\">\r\n          <li>\r\n            <a (click)=\"onToggleFilter()\">\r\n              <span>Filter</span>\r\n              <mat-icon>filter_list</mat-icon>\r\n            </a>\r\n          </li>\r\n\r\n          <li (click)=\"downloadExcel()\">\r\n            <a>\r\n              <span>Excel</span>\r\n              <mat-icon>file_download</mat-icon>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n\r\n  <!-- Start Grid Filter -->\r\n  <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n    <div class=\"filter-action-icon\">\r\n          <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc <i\r\n            class=\"material-icons\">close</i></span>\r\n    </div>\r\n    <div class=\"grid-filter-container\">\r\n      <div class=\"filter-title\">\r\n        <h3>Advance Filter</h3>\r\n      </div>\r\n      <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Code\" formControlName=\"code\"/>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <ng-select [items]=\"masterActivityData\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master Activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"id\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Team\" formControlName=\"user_team_id\">\r\n                <mat-option *ngFor=\"let data of teamData; let i = index;\" [value]=\"+data.id\">{{data.name}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Worksheet Schedule\" formControlName=\"inschedule\">\r\n                <mat-option *ngFor=\"let yesNo of yesNoList.slice(1); let i = index;\" [value]=\"yesNo.key\">\r\n                  {{yesNo.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"modifiedon\" placeholder=\"Created on\" formControlName=\"modified_on\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"modifiedon\"></mat-datepicker-toggle>\r\n              <mat-datepicker #modifiedon></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n\r\n            <ng-select [items]=\"userList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Created By\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"created_by\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-12 MT-20 text-right\">\r\n            <button type=\"button\" class=\"btn-cancel\" (click)=\"onClearTags()\">Clear</button>\r\n            <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Filter -->\r\n\r\n  <!-- Start Filter Tags -->\r\n  <div class=\"filter-tags\">\r\n    <form [formGroup]=\"advanceFilterForm\">\r\n      <div class=\"tag\" *ngIf=\"code.value\">\r\n        <span class=\"tag__title\">Code :</span>\r\n        <span>\r\n           <mat-form-field>\r\n                <input matInput placeholder=\"41\" formControlName=\"code\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n              </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('code')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"id.value\">\r\n        <span class=\"tag__title\">Master Activity :</span>\r\n        <span>\r\n          <ng-select [items]=\"masterActivityData\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"name\"\r\n                     placeholder=\"Master Activity\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"id\"\r\n                     (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n          </ng-select>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('id')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"user_team_id.value\">\r\n        <span class=\"tag__title\">Team :</span>\r\n        <span>\r\n             <mat-form-field>\r\n              <mat-select placeholder=\"Team\" formControlName=\"user_team_id\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let data of teamData; let i = index;\" [value]=\"+data.id\">{{data.name}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('user_team_id')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"inschedule.value\">\r\n        <span class=\"tag__title\">Worksheet Schedule :</span>\r\n        <span>\r\n             <mat-form-field>\r\n              <mat-select placeholder=\"Yes\" formControlName=\"inschedule\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let yesNo of yesNoList.slice(1); let i = index;\"\r\n                            [value]=\"yesNo.key\">{{yesNo.label}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('inschedule')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"modified_on.value\">\r\n        <span class=\"tag__title\">Created on :</span>\r\n        <span>\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"modifiedon1\" placeholder=\"Date\" formControlName=\"modified_on\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" readonly>\r\n                <mat-datepicker-toggle matSuffix [for]=\"modifiedon1\"></mat-datepicker-toggle>\r\n                <mat-datepicker #modifiedon1></mat-datepicker>\r\n              </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('modified_on')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"created_by.value\">\r\n        <span class=\"tag__title\">Created By :</span>\r\n        <span>\r\n            <ng-select [items]=\"userList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Created By\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"created_by\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n        </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('created_by')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"clearAll-tags\" *ngIf=\"code.value\r\n        || id.value\r\n        || user_team_id.value\r\n        || inschedule.value\r\n        || modified_on.value\r\n        || created_by.value\">\r\n        <a (click)=\"onClearTags()\">Clear all</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- End Filter Tags -->\r\n\r\n  <!-- Start Table -->\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"5%\">Sr.No</th>\r\n\r\n          <th width=\"5%\" (click)=\"getSortData('code',\r\n            (sortBy === 'code') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Code\r\n            <i *ngIf=\"sortBy === 'code'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'code'),\r\n                 'icon-up' : ((sortBy === 'code') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'code') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n\r\n          <th width=\"25%\" (click)=\"getSortData('name',\r\n            (sortBy === 'name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Master Activity\r\n            <i *ngIf=\"sortBy === 'name'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'name'),\r\n                 'icon-up' : ((sortBy === 'name') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n\r\n          <th width=\"25%\">Associated Team</th>\r\n\r\n          <th width=\"10%\" (click)=\"getSortData('inschedule',\r\n            (sortBy === 'inschedule') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">In Schedule\r\n            <i *ngIf=\"sortBy === 'inschedule'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'inschedule'),\r\n                 'icon-up' : ((sortBy === 'inschedule') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'inschedule') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"20%\">Created By\r\n          </th>\r\n\r\n          <th width=\"10%\">Action</th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody>\r\n          <tr *ngFor=\"let data of masterActivityListData; let i = index\">\r\n            <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n            <td width=\"5%\">{{data?.code}}</td>\r\n            <td width=\"25%\">{{data?.name}}</td>\r\n            <td width=\"25%\">{{getTeamName(data?.user_team_id)}}</td>\r\n            <td width=\"10%\" *ngIf=\"data?.inschedule === 1\"><span class=\"turquoise-color\"><mat-icon\r\n              class=\"grid_icon_trip_origin\">trip_origin</mat-icon>Yes</span></td>\r\n            <td width=\"10%\" *ngIf=\"data?.inschedule !== 1\"><span class=\"red-color\"><mat-icon\r\n              class=\"grid_icon_trip_origin\">trip_origin</mat-icon>No</span></td>\r\n            <td width=\"20%\">{{data?.created_by?.created_by}} | {{data?.created_on | date : 'dd-MM-yyyy'}}</td>\r\n            <td width=\"10%\">\r\n              <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Edit'\"\r\n                        (click)=\"openAddEditMasterActivityDialog(data)\">edit\r\n              </mat-icon>\r\n              <mat-slide-toggle [matTooltip]=\"'Active/Inactive'\" [(ngModel)]=\"slideData[i]\"\r\n                                (change)=\"onDisabledConfirmDialog($event, data, i)\"></mat-slide-toggle>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <table *ngIf=\"masterActivityListData.length\">\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"10\">\r\n            <mat-paginator [length]=\"totalRecords\"\r\n                           [pageSize]=\"pageSize\"\r\n                           [pageIndex]=\"pageIndex\"\r\n                           [pageSizeOptions]=\"pageArray\"\r\n                           (page)=\"onPageChange($event)\">\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <!-- End Table -->\r\n  <div *ngIf=\"!masterActivityListData.length\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n</div>\r\n<!-- End Data Grid -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/master-activity.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/master-activity.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vaGllcmFyY2h5L21hc3Rlci1hY3Rpdml0eS9tYXN0ZXItYWN0aXZpdHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/master-activity.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/master-activity.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: MasterActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterActivityComponent", function() { return MasterActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_master_activity_add_master_activity_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-master-activity/add-master-activity-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/add-master-activity/add-master-activity-dialog.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
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





// crud import





var MasterActivityComponent = /** @class */ (function () {
    function MasterActivityComponent(_fb, dialog, _commonCrudService, _sharedObjService) {
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
        this.userListAll = [];
        this.userListLoading = false;
        this.userListinput = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.masterActivityData = [];
        this.teamData = [];
        this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNo"];
        // MatPaginator Inputs
        this.length = 100;
        this.pageSizeOptions = [5, 10, 25, 100];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenHistoryDialog = false;
        this.isOpenFilterView = false;
        this.isOpenFilter = false;
        this.equalJSON = {};
        this.findInSetJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
    }
    Object.defineProperty(MasterActivityComponent.prototype, "code", {
        get: function () {
            return this.filterForm.get('code');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterActivityComponent.prototype, "id", {
        get: function () {
            return this.filterForm.get('id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterActivityComponent.prototype, "user_team_id", {
        get: function () {
            return this.filterForm.get('user_team_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterActivityComponent.prototype, "inschedule", {
        get: function () {
            return this.filterForm.get('inschedule');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterActivityComponent.prototype, "modified_on", {
        get: function () {
            return this.filterForm.get('modified_on');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterActivityComponent.prototype, "created_by", {
        get: function () {
            return this.filterForm.get('created_by');
        },
        enumerable: true,
        configurable: true
    });
    MasterActivityComponent.prototype.ngOnInit = function () {
        this.createAdvanceFilterForm();
        this.getMasterActivityList(1, '', 'desc');
        this.getUserList();
        this.getTaskAndMasterActivity();
        this.getTaskData();
    };
    MasterActivityComponent.prototype.getMasterActivityList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].MASTER_ACTIVITY, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleQualityControlResponse(response);
        });
    };
    MasterActivityComponent.prototype.handleQualityControlResponse = function (response) {
        // console.log(response);
        this.masterActivityListData = response.payload.data;
        // console.log(JSON.stringify(this.masterActivityListData));
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
    MasterActivityComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            user_team_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            inschedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            modified_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            created_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            user_team_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            inschedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            modified_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            created_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    };
    /**
     * Add Edit Master Activity Dialog
     */
    MasterActivityComponent.prototype.openAddEditMasterActivityDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_master_activity_add_master_activity_dialog__WEBPACK_IMPORTED_MODULE_4__["AddMasterActivityDialog"], {
            panelClass: 'add-form-dialog-container',
            data: {
                activityData: data
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getMasterActivityList(1, '', 'desc');
        });
    };
    // initializationMethod() {
    //     for (let i = 0; i < 20; i++) {
    //         let obj = {
    //             code: '41',
    //             masteractivity: 'Preparation & Lodgment of IAS (BK)',
    //             associatedteam: 'Bookkeeping',
    //             inworksheetschedule: 'Yes',
    //             modified: '26-12-2017 by Dilip'
    //         };
    //         this.masterActivityList.push(obj);
    //     }
    //     this.tagList = [
    //         { label: 'Staff Name', value: 'Alok Shukla', isDropdown: true, isTimePicker: false },
    //         { label: 'Shift Name', value: 'Chandkheda', isDropdown: true, isTimePicker: false },
    //         { label: 'Time', value: '12:30', isDropdown: false, isTimePicker: true },
    //     ];
    // }
    /**
     * Toogle Filter
     */
    MasterActivityComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    MasterActivityComponent.prototype.deleteMsg = function (index) {
        this.tagList.splice(index, 1);
    };
    /**
     * Pagination page change event
     * @param event
     */
    MasterActivityComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getMasterActivityList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Clear tag method
     */
    MasterActivityComponent.prototype.onClearTags = function () {
        this.createAdvanceFilterForm();
        this.likeJSON = {};
        this.equalJSON = {};
        this.findInSetJSON = {};
        this.inJSON = {};
        this.isOpenFilter = false;
        this.getMasterActivityList(1, '', 'desc');
    };
    /**
     * Esc event for close modal
     * @param event
     */
    MasterActivityComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     *  Toggle confirmation Dialog
     */
    MasterActivityComponent.prototype.onDisabledConfirmDialog = function (event, data, id) {
        var _this = this;
        // console.log(this.slideData[id]);
        // console.log(data);
        var status = event.checked ? 'Inactive' : 'Active';
        var statusNagetive = !event.checked ? 'Inactive' : 'Active';
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogComponent"], {
            data: {
                content: 'Do you want change status from ' + status + ' to ' + statusNagetive
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].MASTER_ACTIVITY, data.id, {
                    'is_active': (event.checked === true) ? '1' : '0',
                    '_method': 'put',
                    'name': data.name,
                    'team_id': data.user_team_id,
                    'inschedule': data.inschedule
                }).subscribe(function (response) {
                    _this.getMasterActivityList(1, '', 'desc');
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
    MasterActivityComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    MasterActivityComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getMasterActivityList(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    MasterActivityComponent.prototype.getSearchParam = function () {
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
        if (Object.keys(this.findInSetJSON).length !== 0) {
            params['findinset'] = this.findInSetJSON;
        }
        return params;
    };
    MasterActivityComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].MASTER_ACTIVITY_DOWNLOAD, params, this.getSearchParam(), 'Master Activity', 0).subscribe(function (response) {
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    MasterActivityComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'code': form.value['code'],
                'id': form.value['id'],
                'user_team_id': form.value['user_team_id'],
                'inschedule': form.value['inschedule'],
                'modified_on': form.value['modified_on'],
                'created_by': form.value['created_by'],
            });
            // console.log(this.filterForm.value);
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    MasterActivityComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        // removing empty key from objectsetAdvanceFilterKeyUp
        for (var key in form.value) {
            if (form.value.hasOwnProperty(key)) {
                // console.log(form.value['name']);
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
                    if (key === 'id' || key === 'inschedule' || key === 'modified_on' || key === 'created_by') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'code') {
                        this.likeJSON[key] = form.value[key];
                    }
                    else if (key === 'user_team_id') {
                        this.findInSetJSON['user_team_id'] = [form.value[key]];
                    }
                }
            }
            // console.log(this.equalJSON);
            this.isOpenFilterView = false;
            this.getMasterActivityList(1, '', 'desc');
        }
        // {"compare":{"equal":{"name":"Payroll team"}}}
        // {"compare":{"equal":{"code":"","name":"BK General(Non chargeable)"}}}
    };
    /**
     * Get User List
     */
    MasterActivityComponent.prototype.getUserList = function () {
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
    MasterActivityComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue('');
        this.advanceFilterForm.get(elementName).setValue('');
        if (elementName === 'code' || elementName === 'id' || elementName === 'inschedule' || elementName === 'modified_on' || elementName === 'created_by') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'user_team_id') {
            delete this.findInSetJSON[elementName];
        }
        //  else if (elementName === "name") {
        //     delete this.likeJSON[elementName];
        // }
        this.getMasterActivityList(1, '', 'desc');
    };
    /**
     * get activity data
     */
    MasterActivityComponent.prototype.getTaskAndMasterActivity = function () {
        var _this = this;
        // this._masterCheckListService.getMasterCheckListAndTaskData('').subscribe(response => {
        //     this.responseHandle(response);
        // });
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(function (response) {
            _this.responseHandle(response);
        });
    };
    MasterActivityComponent.prototype.responseHandle = function (data) {
        var _this = this;
        // console.log(data);
        var masterData = [];
        var taskDataRef = [];
        // console.log(data);
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
    MasterActivityComponent.prototype.getTaskData = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].TEAM, {}, {}).subscribe(function (response) {
            _this.responseTeamHandle(response);
        });
    };
    MasterActivityComponent.prototype.responseTeamHandle = function (data) {
        var _this = this;
        var allData = data.payload.data;
        allData.filter(function (response) {
            // console.log(response);
            _this.teamData.push({ 'id': response.id, 'name': response.team_name, 'is_active': response.is_active });
        });
    };
    MasterActivityComponent.prototype.getTeamName = function (teamName) {
        var _this = this;
        var name = [];
        // console.log(teamName);
        if (teamName) {
            var itemName = teamName.split(',');
            itemName.forEach(function (itemKey) {
                // console.log(itemKey);
                var itemData = _this.teamData.filter(function (item) { return item['id'] === Number(itemKey); });
                // console.log(itemData);
                if (itemData.length) {
                    name.push(itemData[0]['name']);
                }
            });
        }
        return (name) ? name.join(',') : null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MasterActivityComponent.prototype, "onKeydownHandler", null);
    MasterActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-master-activity',
            template: __webpack_require__(/*! ./master-activity.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/master-activity.component.html"),
            styles: [__webpack_require__(/*! ./master-activity.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/master-activity.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__["SharedObjService"]])
    ], MasterActivityComponent);
    return MasterActivityComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/add-sub-activity/add-sub-activity-dialog.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/add-sub-activity/add-sub-activity-dialog.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Add Sub Activity dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{(data && data.subActivity) ? 'Update' : 'Add'}} Sub Activity</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addSubActivity\" (submit)=\"onSubmitAddSubActivity(addSubActivity)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 MT-10 custom-ng-select-dropdown\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Master Activity\" formControlName=\"master_id\" required>\r\n              <mat-option *ngFor=\"let data of masterActivityData; let i = index;\" [value]=\"+data.id\"> {{data.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <!--<ng-select [items]=\"masterActivityData\"-->\r\n          <!--[closeOnSelect]=\"true\"-->\r\n          <!--bindLabel=\"name\"-->\r\n          <!--placeholder=\"Master Activity\"-->\r\n          <!--bindValue=\"id\"-->\r\n          <!--[virtualScroll]=\"true\"-->\r\n          <!--[searchable]=\"true\"-->\r\n          <!--[hideSelected]=\"true\"-->\r\n          <!--formControlName=\"master_id\">-->\r\n          <!--</ng-select>-->\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSubActivity.get('master_id'))\"\r\n                            [errMsg]=\"validationMsg.MASTER_ACTIVITY_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12  MT-10 custom-ng-select-dropdown\">\r\n          <ng-select\r\n            [items]=\"taskData\"\r\n            bindLabel=\"name\"\r\n            bindValue=\"id\"\r\n            labelForId=\"state\"\r\n            [multiple]=\"false\"\r\n            placeholder=\"Select Task\"\r\n            clearAllText=\"Clear\"\r\n            [(ngModel)]=\"selectedTask\"\r\n            formControlName=\"task_id\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSubActivity.get('task_id'))\"\r\n                            [errMsg]=\"validationMsg.TASK_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12  MT-10 MB-25\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Sub Activity\" [(ngModel)]=\"subactivityDefaultData\"\r\n                      formControlName=\"subactivity_name\" required></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSubActivity.get('subactivity_name'))\"\r\n                            [errMsg]=\"validationMsg.SUB_ACTIVITY_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addSubActivity.get('subactivity_name'))\"\r\n                            [errMsg]=\"validationMsg.SUB_ACTIVITY_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" (click)=\"updateData()\" *ngIf=\"buttonFlag\" [disabled]=\"addSubActivity.invalid\">\r\n            Update\r\n          </button>\r\n          <button class=\"btn-primary\" (click)=\"saveData()\" *ngIf=\"!buttonFlag\" [disabled]=\"addSubActivity.invalid\">\r\n            Save\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Sub Activity dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/add-sub-activity/add-sub-activity-dialog.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/add-sub-activity/add-sub-activity-dialog.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: AddSubActivityDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubActivityDialog", function() { return AddSubActivityDialog; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
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







var AddSubActivityDialog = /** @class */ (function (_super) {
    __extends(AddSubActivityDialog, _super);
    function AddSubActivityDialog(dialogRef, data, _fb, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        // Data variables
        _this.masterActivityData = [];
        _this.teamData = [];
        _this.taskData = [];
        return _this;
    }
    AddSubActivityDialog.prototype.ngOnInit = function () {
        this.createAddSubActivityForm();
        this.getTaskAndMasterActivity();
        this.getMasterActivityList();
        // console.log(this.data.subActivity);
        if (this.data && this.data.subActivity) {
            this.buttonFlag = true;
            this.selectedTask = this.data.subActivity.task_id.id;
            this.subactivityDefaultData = this.data.subActivity.subactivity_name;
            this.selectedActivity = this.data.subActivity.master_id.id;
            this.addSubActivity.get('master_id').setValue(this.selectedActivity);
        }
        else {
            this.buttonFlag = false;
        }
    };
    AddSubActivityDialog.prototype.getMasterActivityList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].GET_TASK_LIST, { 'records': 'all' }, {}).subscribe(function (response) {
            _this.handleQualityControlResponse(response);
        });
    };
    AddSubActivityDialog.prototype.handleQualityControlResponse = function (response) {
        this.taskData = response.payload.data;
        // console.log(this.taskData);
    };
    AddSubActivityDialog.prototype.getTaskAndMasterActivity = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(function (response) {
            _this.responseHandle(response);
        });
    };
    AddSubActivityDialog.prototype.responseHandle = function (data) {
        for (var i in data.payload.data.masterActivity) {
            if (i) {
                this.masterActivityData.push({ id: Number(i), name: data.payload.data.masterActivity[i] });
            }
        }
        // console.log(this.masterActivityData);
        this.addSubActivity.get('master_id').setValue(Number(this.selectedActivity));
        this.addSubActivity.get('master_id').updateValueAndValidity();
        // let masterData = [];
        // let taskDataRef = [];
        // console.log(data);
        // for (const i in data.payload.data.masterActivity) {
        //   if (i) {
        //     masterData.push({ id: i, name: data.payload.data.masterActivity[i] });
        //   }
        // }
        //
        // for (const i in data.payload.data.task) {
        //   if (i) {
        //     for (let j = 0; j < data.payload.data.task[i].length; j++) {
        //       taskDataRef.push({ id: data.payload.data.task[i][j].id, masterId: data.payload.data.task[i][j].master_activity_id, name: data.payload.data.task[i][j].name });
        //     }
        //   }
        // }
        // this.masterActivityData = masterData;
        // this.masterActivityData = masterData;
        // console.log(this.selectedActivity);
        // setTimeout(res => {
        //   this.masterActivityData = masterData;
        //   this.addSubActivity.get('master_id').setValue(this.selectedActivity);
        //   this.addSubActivity.get('master_id').updateValueAndValidity();
        //   console.log(this.selectedActivity);
        //   console.log(this.addSubActivity.get('master_id'));
        // }, 500);
    };
    /**
     * Create add Sub Activity
     */
    AddSubActivityDialog.prototype.createAddSubActivityForm = function () {
        this.addSubActivity = this._fb.group({
            master_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]((this.selectedActivity > 0) ? this.selectedActivity : null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            subactivity_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)])
        });
    };
    AddSubActivityDialog.prototype.onSubmitAddSubActivity = function (form) {
        if (form.valid) {
            this.onClose();
        }
    };
    AddSubActivityDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    AddSubActivityDialog.prototype.updateData = function () {
        // console.log(this.addSubActivity.controls['master_id'].value);
        // console.log(this.addSubActivity.controls['task_id'].value);
        // console.log(this.addSubActivity.controls['subactivity_name'].value);
        var _this = this;
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].GET_SUB_ACTIVITY, this.data.subActivity.id, {
            'master_activity_id': this.addSubActivity.controls['master_id'].value,
            'task_id': this.addSubActivity.controls['task_id'].value,
            'subactivity_name': this.addSubActivity.controls['subactivity_name'].value,
            '_method': 'put',
            'is_active': this.data.subActivity.is_active
        }).subscribe(function (response) {
            // console.log(response);
            _this.dialogRef.close();
        });
    };
    AddSubActivityDialog.prototype.saveData = function () {
        var _this = this;
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].GET_SUB_ACTIVITY, {
            'master_activity_id': this.addSubActivity.controls['master_id'].value,
            'task_id': this.addSubActivity.controls['task_id'].value,
            'subactivity_name': this.addSubActivity.controls['subactivity_name'].value,
            'is_active': 1
        }).subscribe(function (response) {
            // console.log(response);
            _this.dialogRef.close();
        });
    };
    AddSubActivityDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-sub-activity-dialog',
            template: __webpack_require__(/*! ./add-sub-activity-dialog.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/add-sub-activity/add-sub-activity-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]])
    ], AddSubActivityDialog);
    return AddSubActivityDialog;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/sub-activity.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/sub-activity.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Worksheet Sub Activity Container -->\r\n<!-- Start Data Grid -->\r\n<div class=\"with-filter-grid-container\">\r\n  <!-- Start Grid Inner Header -->\r\n  <div class=\"grid-inner-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 inner-header-title\">\r\n        <button class=\"open-dialog-btn\" (click)=\"openAddEditSubActivityDialog()\"><i class=\"material-icons\">add</i> Add\r\n          Sub Activity\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"download-icon\">\r\n          <li>\r\n            <a (click)=\"onToggleFilter()\">\r\n              <span>Filter</span>\r\n              <mat-icon>filter_list</mat-icon>\r\n            </a>\r\n          </li>\r\n\r\n          <li>\r\n            <a (click)=\"downloadExcel()\">\r\n              <span>Excel</span>\r\n              <mat-icon>file_download</mat-icon>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n\r\n  <!-- Start Grid Filter -->\r\n  <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n    <div class=\"filter-action-icon\">\r\n          <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc <i\r\n            class=\"material-icons\">close</i></span>\r\n    </div>\r\n    <div class=\"grid-filter-container\">\r\n      <div class=\"filter-title\">\r\n        <h3>Advance Filter</h3>\r\n      </div>\r\n      <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Code\" formControlName=\"subactivity_code\"/>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <ng-select\r\n              [items]=\"masterActivityData\"\r\n              bindLabel=\"name\"\r\n              bindValue=\"id\"\r\n              placeholder=\"Master Activity\"\r\n              formControlName=\"master_id\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <!-- <mat-form-field>\r\n              <mat-select placeholder=\"Task\"  formControlName=\"task_id\">\r\n                <mat-option value=\"1\">Task1</mat-option>\r\n                <mat-option value=\"2\">Task2</mat-option>\r\n              </mat-select>\r\n            </mat-form-field> -->\r\n            <ng-select\r\n              [items]=\"taskData\"\r\n              bindLabel=\"name\"\r\n              bindValue=\"id\"\r\n              [(ngModel)]=\"selectedTask\"\r\n              formControlName=\"task_id\"\r\n              placeholder=\"Task\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Sub Activity\" formControlName=\"subactivity_name\"/>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"modifiedon\" placeholder=\"Modified on\" formControlName=\"modified_on\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"modifiedon\"></mat-datepicker-toggle>\r\n              <mat-datepicker #modifiedon></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n            <ng-select [items]=\"userList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Modified By\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"modified_by\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-12 MT-20 text-right\">\r\n            <button type=\"button\" class=\"btn-cancel\" (click)=\"onClearTags()\">Clear</button>\r\n            <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Filter -->\r\n\r\n  <!-- Start Filter Tags -->\r\n  <div class=\"filter-tags\">\r\n    <form [formGroup]=\"advanceFilterForm\">\r\n      <div class=\"tag\" *ngIf=\"code.value\">\r\n        <span class=\"tag__title\">Code :</span>\r\n        <span>\r\n           <mat-form-field>\r\n                <input matInput placeholder=\"41\" formControlName=\"subactivity_code\"\r\n                       (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n              </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('subactivity_code')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"master_id.value\">\r\n        <span class=\"tag__title\">Master Activity :</span>\r\n        <span>\r\n           <ng-select\r\n             [items]=\"masterActivityData\"\r\n             bindLabel=\"name\"\r\n             bindValue=\"id\"\r\n             placeholder=\"Master Activity\"\r\n             (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n             formControlName=\"master_id\">\r\n            </ng-select>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('master_id')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"task_id.value\">\r\n        <span class=\"tag__title\">Task :</span>\r\n        <span>\r\n            <ng-select\r\n              [items]=\"taskData\"\r\n              bindLabel=\"name\"\r\n              bindValue=\"id\"\r\n              placeholder=\"Task\"\r\n              formControlName=\"task_id\"\r\n              (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n        </ng-select>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('task_id')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"subactivity_name.value\">\r\n        <span class=\"tag__title\">Sub Activity :</span>\r\n        <span>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Sub Activity\" formControlName=\"subactivity_name\"\r\n                       (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('subactivity_name')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"modified_on.value\">\r\n        <span class=\"tag__title\">Modified on :</span>\r\n        <span>\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"modifiedon1\" placeholder=\"Date\" formControlName=\"modified_on\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" readonly>\r\n                <mat-datepicker-toggle matSuffix [for]=\"modifiedon1\"></mat-datepicker-toggle>\r\n                <mat-datepicker #modifiedon1></mat-datepicker>\r\n              </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('modified_on')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"modified_by.value\">\r\n        <span class=\"tag__title\">Modified By :</span>\r\n        <span>\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Modified By\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"modified_by\"\r\n                         (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n            </ng-select>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('modified_by')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"clearAll-tags\" *ngIf=\"master_id.value\r\n      || task_id.value\r\n      || code.value\r\n      || subactivity_name.value\r\n      || modified_on.value\r\n      || modified_by.value\">\r\n        <a (click)=\"onClearTags()\">Clear all</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- End Filter Tags -->\r\n\r\n  <!-- Start Table -->\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"5%\">Sr. No</th>\r\n\r\n          <th width=\"15%\" (click)=\"getSortData('master_id',\r\n            (sortBy === 'master_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Master Activity\r\n            <i *ngIf=\"sortBy === 'master_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'master_id'),\r\n                 'icon-up' : ((sortBy === 'master_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'master_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"20%\" (click)=\"getSortData('task_id',\r\n            (sortBy === 'task_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Task\r\n            <i *ngIf=\"sortBy === 'task_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'task_id'),\r\n                 'icon-up' : ((sortBy === 'task_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'task_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"5%\" (click)=\"getSortData('subactivity_code',\r\n            (sortBy === 'subactivity_code') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Code\r\n            <i *ngIf=\"sortBy === 'subactivity_code'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'subactivity_code'),\r\n                 'icon-up' : ((sortBy === 'subactivity_code') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'subactivity_code') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"25%\" (click)=\"getSortData('subactivity_name',\r\n            (sortBy === 'subactivity_name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Sub Activity\r\n            <i *ngIf=\"sortBy === 'subactivity_name'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'subactivity_name'),\r\n                 'icon-up' : ((sortBy === 'subactivity_name') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'subactivity_name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"20%\">Modified By\r\n          </th>\r\n          <th width=\"10%\">Action</th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody>\r\n          <tr *ngFor=\"let data of masterActivityListData; let i = index\">\r\n            <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n            <td width=\"15%\">{{data?.master_id?.master_name}}</td>\r\n            <td width=\"20%\">{{data?.task_id?.task_name}}</td>\r\n            <td width=\"5%\">{{data?.subactivity_code}}</td>\r\n            <td width=\"25%\">{{data?.subactivity_name}}</td>\r\n            <td width=\"20%\">{{data?.modified_by?.modified_by}} | {{data?.modified_on | date : 'dd-MM-yyyy'}}</td>\r\n            <td width=\"10%\">\r\n              <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Edit'\"\r\n                        (click)=\"openAddEditMasterActivityDialog(data)\">\r\n                edit\r\n              </mat-icon>\r\n              <mat-slide-toggle [matTooltip]=\"slideData[i] ? 'Inactive': 'Active'\" [(ngModel)]=\"slideData[i]\"\r\n                                (change)=\"onDisabledConfirmDialog($event, data, i)\"></mat-slide-toggle>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <table *ngIf=\"masterActivityListData.length\">\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"10\">\r\n            <mat-paginator [length]=\"totalRecords\"\r\n                           [pageSize]=\"pageSize\"\r\n                           [pageIndex]=\"pageIndex\"\r\n                           [pageSizeOptions]=\"pageArray\"\r\n                           (page)=\"onPageChange($event)\">\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <!-- End Table -->\r\n\r\n  <div *ngIf=\"!masterActivityListData.length\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n</div>\r\n<!-- End Data Grid -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/sub-activity.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/sub-activity.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vaGllcmFyY2h5L3N1Yi1hY3Rpdml0eS9zdWItYWN0aXZpdHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/sub-activity.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/sub-activity.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: SubActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubActivityComponent", function() { return SubActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_sub_activity_add_sub_activity_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-sub-activity/add-sub-activity-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/add-sub-activity/add-sub-activity-dialog.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
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





var SubActivityComponent = /** @class */ (function () {
    function SubActivityComponent(_fb, dialog, _commonCrudService, _sharedObjService) {
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
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenHistoryDialog = false;
        this.isOpenFilterView = false;
        this.isOpenFilter = false;
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
    }
    Object.defineProperty(SubActivityComponent.prototype, "master_id", {
        get: function () {
            return this.filterForm.get('master_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubActivityComponent.prototype, "task_id", {
        get: function () {
            return this.filterForm.get('task_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubActivityComponent.prototype, "code", {
        get: function () {
            return this.filterForm.get('subactivity_code');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubActivityComponent.prototype, "subactivity_name", {
        get: function () {
            return this.filterForm.get('subactivity_name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubActivityComponent.prototype, "modified_on", {
        get: function () {
            return this.filterForm.get('modified_on');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubActivityComponent.prototype, "modified_by", {
        get: function () {
            return this.filterForm.get('modified_by');
        },
        enumerable: true,
        configurable: true
    });
    SubActivityComponent.prototype.ngOnInit = function () {
        this.createAdvanceFilterForm();
        this.getMasterActivityList(1, '', 'desc');
        this.getUserList();
        this.getTaskAndMasterActivity();
        this.getTaskData();
        this.getMasterActivityListAll();
    };
    SubActivityComponent.prototype.getMasterActivityList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].GET_SUB_ACTIVITY, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleQualityControlResponse(response);
        });
    };
    SubActivityComponent.prototype.handleQualityControlResponse = function (response) {
        // console.log(response);
        this.masterActivityListData = response.payload.data;
        // console.log(JSON.stringify(this.masterActivityListData));
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
    SubActivityComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            master_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            subactivity_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            subactivity_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            modified_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            modified_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            master_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            subactivity_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            subactivity_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            modified_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            modified_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    };
    /**
     * Add Edit Master Activity Dialog
     */
    SubActivityComponent.prototype.openAddEditMasterActivityDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_sub_activity_add_sub_activity_dialog__WEBPACK_IMPORTED_MODULE_4__["AddSubActivityDialog"], {
            panelClass: 'add-form-dialog-container',
            data: {
                subActivity: data
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getMasterActivityList(1, '', 'desc');
        });
    };
    /**
     * Toogle Filter
     */
    SubActivityComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    SubActivityComponent.prototype.deleteMsg = function (index) {
        this.tagList.splice(index, 1);
    };
    /**
     * Pagination page change event
     * @param event
     */
    SubActivityComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getMasterActivityList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Clear tag method
     */
    SubActivityComponent.prototype.onClearTags = function () {
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
    SubActivityComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     *  Toggle confirmation Dialog
     */
    SubActivityComponent.prototype.onDisabledConfirmDialog = function (event, data, id) {
        var _this = this;
        // console.log(this.slideData[id]);
        // console.log(data);
        var status = event.checked ? 'Inactive' : 'Active';
        var statusNagetive = !event.checked ? 'Inactive' : 'Active';
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogComponent"], {
            data: {
                content: 'Do you want change status from ' + status + ' to ' + statusNagetive
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].GET_SUB_ACTIVITY, data.id, {
                    'is_active': (event.checked === true) ? 1 : 0,
                    '_method': 'put',
                    'master_id': data.master_id.id,
                    'task_id': data.task_id.id,
                    'subactivity_name': data.subactivity_name
                }).subscribe(function (response) {
                    _this.getMasterActivityList(1, '', 'desc');
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
    SubActivityComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    SubActivityComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getMasterActivityList(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    SubActivityComponent.prototype.getSearchParam = function () {
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
    SubActivityComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].SUB_ACTIVITY_DOWNLOAD, params, this.getSearchParam(), 'Sub Activity', 0).subscribe(function (response) {
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    SubActivityComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'subactivity_code': form.value['subactivity_code'],
                'master_id': form.value['master_id'],
                'task_id': form.value['task_id'],
                'subactivity_name': form.value['subactivity_name'],
                'modified_on': form.value['modified_on'],
                'modified_by': form.value['modified_by'],
            });
            // console.log(this.filterForm.value);
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    SubActivityComponent.prototype.setAdvanceFilter = function (form, flag) {
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
                    if (key === 'master_id' || key === 'task_id' || key === 'modified_on' || key === 'modified_by') {
                        if (key === 'modified_on') {
                            this.equalJSON[key] = moment__WEBPACK_IMPORTED_MODULE_9__(form.value[key]).format('YYYY-MM-DD');
                        }
                        else {
                            this.equalJSON[key] = form.value[key];
                        }
                    }
                    else if (key === 'subactivity_code' || key === 'subactivity_name') {
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
    SubActivityComponent.prototype.getUserList = function () {
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
    SubActivityComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue('');
        this.advanceFilterForm.get(elementName).setValue('');
        if (elementName === 'master_id' || elementName === 'task_id' || elementName === 'modified_by' || elementName === 'modified_on') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'subactivity_code' || elementName === 'subactivity_name') {
            delete this.likeJSON[elementName];
        }
        this.getMasterActivityList(1, '', 'desc');
    };
    /**
     * get activity data
     */
    SubActivityComponent.prototype.getTaskAndMasterActivity = function () {
        var _this = this;
        // this._masterCheckListService.getMasterCheckListAndTaskData('').subscribe(response => {
        //   this.responseHandle(response);
        // });
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(function (response) {
            _this.responseHandle(response);
        });
    };
    SubActivityComponent.prototype.responseHandle = function (data) {
        var _this = this;
        var masterData = [];
        var taskDataRef = [];
        // console.log(data);
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
    SubActivityComponent.prototype.getTaskData = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].TEAM, {}, {}).subscribe(function (response) {
            _this.responseTeamHandle(response);
        });
    };
    SubActivityComponent.prototype.responseTeamHandle = function (data) {
        var _this = this;
        var allData = data.payload.data;
        allData.filter(function (response) {
            // console.log(response);
            _this.teamData.push({ 'id': response.service_id, 'name': response.team_name, 'is_active': response.is_active });
        });
    };
    /**
     * Add Edit Sub Activity Dialog
     */
    SubActivityComponent.prototype.openAddEditSubActivityDialog = function () {
        var dialogRef = this.dialog.open(_add_sub_activity_add_sub_activity_dialog__WEBPACK_IMPORTED_MODULE_4__["AddSubActivityDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    SubActivityComponent.prototype.getMasterActivityListAll = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].GET_TASK_LIST, { 'records': 'all' }, {}).subscribe(function (response) {
            _this.handleQualityControlResponseAll(response);
        });
    };
    SubActivityComponent.prototype.handleQualityControlResponseAll = function (response) {
        this.taskData = response.payload.data;
        // console.log(this.taskData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SubActivityComponent.prototype, "onKeydownHandler", null);
    SubActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-activity',
            template: __webpack_require__(/*! ./sub-activity.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/sub-activity.component.html"),
            styles: [__webpack_require__(/*! ./sub-activity.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/sub-activity.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"]])
    ], SubActivityComponent);
    return SubActivityComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/add-task-list/add-task-list-dialog.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/add-task-list/add-task-list-dialog.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Add Task List dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{(data && data.listData) ? 'Update': 'Add'}} Task List</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addTaskList\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 MT-10\">\r\n          <!--<mat-form-field>-->\r\n          <!--<mat-select placeholder=\"Master Activity\" formControlName=\"master_id\"-->\r\n          <!--(selectionChange)=\"getTaskData($event)\" [(ngModel)]='selectedActivity'>-->\r\n          <!--<mat-option *ngFor=\"let data of masterActivityData; let i = index;\" [value]=\"data.name\">{{data.name}}-->\r\n          <!--</mat-option>-->\r\n          <!--</mat-select>-->\r\n          <!--</mat-form-field>-->\r\n          <ng-select [items]=\"masterActivityData\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"name\"\r\n                     placeholder=\"Master Activity\"\r\n                     bindValue=\"name\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"getTaskData($event)\"\r\n                     formControlName=\"master_id\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addTaskList.get('master_id'))\"\r\n                            [errMsg]=\"validationMsg.MASTER_ACTIVITY_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12  MT-10\">\r\n          <mat-form-field>\r\n            <textarea matInput [(ngModel)]=\"taskValue\" placeholder=\"Task\" formControlName=\"name\" required></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addTaskList.get('name'))\"\r\n                            [errMsg]=\"validationMsg.TASK_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addTaskList.get('name'))\"\r\n                            [errMsg]=\"validationMsg.TASK_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12  MT-10\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Default due date\" formControlName=\"duedate\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12  MT-20\">\r\n        <mat-checkbox [(ngModel)]=\"isCheckedAdHoc\" formControlName=\"addadhocworksheet\">Add option tocreate ad-hoc\r\n          worksheet\r\n        </mat-checkbox>\r\n      </div>\r\n\r\n      <div class=\"col-md-12  MT-10\">\r\n        <mat-checkbox [(ngModel)]=\"isCheckedNotes\" formControlName=\"addoutcomenote\">Display Outcome Notes ?\r\n        </mat-checkbox>\r\n      </div>\r\n\r\n      <div class=\"col-md-12  MT-10\">\r\n        <mat-checkbox [(ngModel)]=\"isCheckedAssignee\" formControlName=\"addadditionalassignee\">Exclude for primary and\r\n          additional assignee\r\n        </mat-checkbox>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" (click)=\"updateData()\" *ngIf=\"buttonFlag\" [disabled]=\"addTaskList.invalid\">\r\n            Update\r\n          </button>\r\n          <button class=\"btn-primary\" (click)=\"saveData()\" *ngIf=\"!buttonFlag\" [disabled]=\"addTaskList.invalid\">Save\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Add Task List dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/add-task-list/add-task-list-dialog.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/add-task-list/add-task-list-dialog.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: AddTaskListDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskListDialog", function() { return AddTaskListDialog; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
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







var AddTaskListDialog = /** @class */ (function (_super) {
    __extends(AddTaskListDialog, _super);
    function AddTaskListDialog(dialogRef, data, _fb, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        // Data variables
        _this.masterActivityData = [];
        _this.teamData = [];
        return _this;
    }
    AddTaskListDialog.prototype.ngOnInit = function () {
        this.createAddMasterActivityForm();
        this.getTaskAndMasterActivity();
        if (this.data.listData) {
            this.buttonFlag = true;
            // console.log(this.data);
            this.isCheckedAdHoc = (this.data.listData.ask_repeat_task === 1) ? true : false;
            this.isCheckedNotes = (this.data.listData.is_complete_task_pop_required === 1) ? true : false;
            this.isCheckedAssignee = (this.data.listData.exclude_assignee === 1) ? true : false;
            this.selectedActivity = this.data.listData.master_activity_id.master_name;
            this.addTaskList.get('master_id').setValue(this.selectedActivity);
            // console.log(this.selectedActivity);
            this.taskValue = this.data.listData.name;
        }
        else {
            this.buttonFlag = false;
        }
    };
    AddTaskListDialog.prototype.getTaskAndMasterActivity = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(function (response) {
            _this.responseHandle(response);
        });
    };
    AddTaskListDialog.prototype.responseHandle = function (data) {
        var _this = this;
        var masterData = [];
        var taskDataRef = [];
        // console.log(data);
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
     * Create add Master Activity
     */
    AddTaskListDialog.prototype.createAddMasterActivityForm = function () {
        // console.log(this.data);
        this.addTaskList = this._fb.group({
            master_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
            duedate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            addadhocworksheet: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            addoutcomenote: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            addadditionalassignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null)
        });
    };
    AddTaskListDialog.prototype.onSubmitAddMasterActivity = function (form) {
        if (form.valid) {
            this.onClose();
        }
    };
    AddTaskListDialog.prototype.onClose = function () {
        this.dialogRef.close();
    };
    AddTaskListDialog.prototype.updateData = function () {
        var _this = this;
        var masterId = '';
        this.masterActivityData.map(function (response) {
            if (response.name === _this.addTaskList.controls['master_id'].value) {
                masterId = response.id;
            }
        });
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].GET_TASK_LIST, this.data.listData.id, {
            'master_activity_id': +masterId,
            'name': this.addTaskList.controls['name'].value,
            'ask_repeat_task': (this.addTaskList.controls['addadhocworksheet'].value === true) ? 1 : 0,
            'is_complete_task_pop_required': (this.addTaskList.controls['addoutcomenote'].value === true) ? 1 : 0,
            'exclude_assignee': (this.addTaskList.controls['addadditionalassignee'].value === true) ? 1 : 0,
            '_method': 'put',
            'is_active': this.data.listData.is_active
        }).subscribe(function (response) {
            // console.log(response);
            _this.dialogRef.close();
        });
    };
    AddTaskListDialog.prototype.saveData = function () {
        var _this = this;
        var masterId = '';
        this.masterActivityData.map(function (response) {
            if (response.name === _this.addTaskList.controls['master_id'].value) {
                masterId = response.id;
            }
        });
        // console.log(masterId);
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].GET_TASK_LIST, {
            'master_activity_id': +masterId,
            'name': this.addTaskList.controls['name'].value,
            'ask_repeat_task': (this.addTaskList.controls['addadhocworksheet'].value === true) ? 1 : 0,
            'is_complete_task_pop_required': (this.addTaskList.controls['addoutcomenote'].value === true) ? 1 : 0,
            'exclude_assignee': (this.addTaskList.controls['addadditionalassignee'].value === true) ? 1 : 0,
            'is_active': 1
        }).subscribe(function (response) {
            // console.log(response);
            _this.dialogRef.close();
        });
    };
    AddTaskListDialog.prototype.getTaskData = function (event) {
    };
    AddTaskListDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-task-list-dialog',
            template: __webpack_require__(/*! ./add-task-list-dialog.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/add-task-list/add-task-list-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]])
    ], AddTaskListDialog);
    return AddTaskListDialog;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

// @Component({
//   selector: 'add-task-list-dialog',
//   templateUrl: './add-task-list-dialog.html',
// })
// export class AddTaskListDialog extends BaseComponent implements OnInit {
//   // Constant Variables
//   validationMsg = new ValidationConstantMessage();
//   // Form Variables
//   addTaskList: FormGroup;
//   constructor(
//     public dialogRef: MatDialogRef<AddTaskListDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder) {
//     super();
//   }
//   ngOnInit() {
//     this.createAddTaskListForm();
//   }
//   /**
//    * Create add TaskList
//    */
//   createAddTaskListForm() {
//     this.addTaskList = this._fb.group({
//       master_id: new FormControl('', <any>Validators.required),
//       name: new FormControl('', <any>Validators.required),
//       duedate: new FormControl(''),
//       addadhocworksheet: new FormControl(''),
//       addoutcomenote: new FormControl(''),
//       addadditionalassignee: new FormControl('')
//     });
//   }
//   onSubmitAddTaskList(form: FormGroup) {
//     if (form.valid) {
//       this.onClose();
//     }
//   }
//   onClose(): void {
//     this.dialogRef.close();
//   }
// }


/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/task-list.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/task-list.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Worksheet Task List Container -->\r\n<!-- Start Data Grid -->\r\n<div class=\"with-filter-grid-container\">\r\n  <!-- Start Grid Inner Header -->\r\n  <div class=\"grid-inner-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 inner-header-title\">\r\n        <button class=\"open-dialog-btn\" (click)=\"openAddEditTaskListDialog()\"><i class=\"material-icons\">add</i> Add Task\r\n          List\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"download-icon\">\r\n          <li>\r\n            <a (click)=\"onToggleFilter()\">\r\n              <span>Filter</span>\r\n              <mat-icon>filter_list</mat-icon>\r\n            </a>\r\n          </li>\r\n\r\n          <li>\r\n            <a (click)=\"downloadExcel()\">\r\n              <span>Excel</span>\r\n              <mat-icon>file_download</mat-icon>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n\r\n  <!-- Start Grid Filter -->\r\n  <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n    <div class=\"filter-action-icon\">\r\n          <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc <i\r\n            class=\"material-icons\">close</i></span>\r\n    </div>\r\n    <div class=\"grid-filter-container\">\r\n      <div class=\"filter-title\">\r\n        <h3>Advance Filter</h3>\r\n      </div>\r\n      <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <ng-select [items]=\"masterActivityData\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master Activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"master_activity_id\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Task Name\" formControlName=\"name\"/>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Create ad-hoc worksheet\" formControlName=\"ask_repeat_task\">\r\n                <mat-option *ngFor=\"let item of yesNoList.slice(1);\" [value]=\"item.key\">{{item.label}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"modifiedon\" placeholder=\"Modified on\" formControlName=\"modified_on\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"modifiedon\"></mat-datepicker-toggle>\r\n              <mat-datepicker #modifiedon></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n\r\n            <ng-select [items]=\"userList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Created By\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"created_by\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10 text-right\">\r\n            <button type=\"button\" class=\"btn-cancel\" (click)=\"onClearTags()\">Clear</button>\r\n            <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Filter -->\r\n\r\n  <!-- Start Filter Tags -->\r\n  <div class=\"filter-tags\">\r\n    <form [formGroup]=\"advanceFilterForm\">\r\n      <div class=\"tag\" *ngIf=\"master_activity_id.value\">\r\n        <span class=\"tag__title\">Master Activity :</span>\r\n        <span>\r\n          <ng-select [items]=\"masterActivityData\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"name\"\r\n                     placeholder=\"Master Activity\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                     formControlName=\"master_activity_id\">\r\n            </ng-select>\r\n        </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('master_activity_id')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"name.value\">\r\n        <span class=\"tag__title\">Task :</span>\r\n        <span>\r\n             <mat-form-field>\r\n              <input matInput placeholder=\"name\" formControlName=\"name\"\r\n                     (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n            </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('name')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"ask_repeat_task.value\">\r\n        <span class=\"tag__title\">Create ad-hoc worksheet :</span>\r\n        <span>\r\n             <mat-form-field>\r\n              <mat-select placeholder=\"Yes\" formControlName=\"ask_repeat_task\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let item of yesNoList.slice(1);\" [value]=\"item.key\">{{item.label}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('ask_repeat_task')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"modified_on.value\">\r\n        <span class=\"tag__title\">Modified on :</span>\r\n        <span>\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"modifiedon1\" placeholder=\"Date\" formControlName=\"modified_on\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" readonly>\r\n                <mat-datepicker-toggle matSuffix [for]=\"modifiedon1\"></mat-datepicker-toggle>\r\n                <mat-datepicker #modifiedon1></mat-datepicker>\r\n              </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('modified_on')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"created_by.value\">\r\n        <span class=\"tag__title\">Modified By :</span>\r\n        <span>\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Created By\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"created_by\"\r\n                         (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('created_by')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"clearAll-tags\" *ngIf=\"master_activity_id.value\r\n        || name.value\r\n        || ask_repeat_task.value\r\n        || modified_on.value\r\n        || created_by.value\r\n        \">\r\n        <a (click)=\"onClearTags()\">Clear all</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- End Filter Tags -->\r\n\r\n  <!-- Start Table -->\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"5%\">Sr. No</th>\r\n\r\n          <th width=\"20%\" (click)=\"getSortData('master_activity_id',\r\n            (sortBy === 'master_activity_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Master Activity\r\n            <i *ngIf=\"sortBy === 'master_activity_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'master_activity_id'),\r\n                 'icon-up' : ((sortBy === 'master_activity_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'master_activity_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"25%\" (click)=\"getSortData('name',\r\n            (sortBy === 'name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Task\r\n            <i *ngIf=\"sortBy === 'name'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'name'),\r\n                 'icon-up' : ((sortBy === 'name') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"10%\" (click)=\"getSortData('fixed_duedate',\r\n            (sortBy === 'fixed_duedate') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Due Date\r\n            <i *ngIf=\"sortBy === 'fixed_duedate'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'fixed_duedate'),\r\n                 'icon-up' : ((sortBy === 'fixed_duedate') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'fixed_duedate') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n\r\n          <th width=\"10%\" (click)=\"getSortData('ask_repeat_task',\r\n            (sortBy === 'ask_repeat_task') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">ad-hoc Worksheet\r\n            <i *ngIf=\"sortBy === 'ask_repeat_task'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'ask_repeat_task'),\r\n                 'icon-up' : ((sortBy === 'ask_repeat_task') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n              {{(sortBy === 'ask_repeat_task') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n              'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n\r\n\r\n          <th width=\"20%\">Created By\r\n          </th>\r\n\r\n          <th width=\"10%\">Action</th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody>\r\n          <tr *ngFor=\"let data of masterActivityListData; let i = index\">\r\n            <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n            <td width=\"20%\">{{data?.master_activity_id?.master_name}}</td>\r\n            <td width=\"25%\">{{data?.name}}</td>\r\n            <td width=\"10%\">{{data?.fixed_duedate}}</td>\r\n            <td width=\"10%\" *ngIf=\"data?.ask_repeat_task === 1\"><span class=\"turquoise-color\"><mat-icon\r\n              class=\"grid_icon_trip_origin\">trip_origin</mat-icon>Yes</span></td>\r\n            <td width=\"10%\" *ngIf=\"data?.ask_repeat_task === 0\"><span class=\"red-color\"><mat-icon\r\n              class=\"grid_icon_trip_origin\">trip_origin</mat-icon>No</span></td>\r\n            <td width=\"20%\">{{data?.created_by?.created_by}} | {{data?.created_on | date : 'dd-MM-yyyy'}}</td>\r\n            <td width=\"10%\">\r\n              <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Edit'\"\r\n                        (click)=\"openAddEditMasterActivityDialog(data)\">\r\n                edit\r\n              </mat-icon>\r\n              <mat-slide-toggle [matTooltip]=\"'Active/Inactive'\" [(ngModel)]=\"slideData[i]\"\r\n                                (change)=\"onDisabledConfirmDialog($event, data, i)\"></mat-slide-toggle>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <table *ngIf=\"masterActivityListData.length\">\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"10\">\r\n            <mat-paginator [length]=\"totalRecords\"\r\n                           [pageSize]=\"pageSize\"\r\n                           [pageIndex]=\"pageIndex\"\r\n                           [pageSizeOptions]=\"pageArray\"\r\n                           (page)=\"onPageChange($event)\">\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <!-- End Table -->\r\n  <div *ngIf=\"!masterActivityListData.length\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n</div>\r\n<!-- End Data Grid -->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/task-list.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/task-list.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vaGllcmFyY2h5L3Rhc2stbGlzdC90YXNrLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/task-list.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/task-list.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_task_list_add_task_list_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-task-list/add-task-list-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/add-task-list/add-task-list-dialog.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
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




var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(_fb, dialog, _commonCrudService, _sharedObjService) {
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
        this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNo"];
        // MatPaginator Inputs
        this.length = 100;
        this.pageSizeOptions = [5, 10, 25, 100];
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
    }
    Object.defineProperty(TaskListComponent.prototype, "master_activity_id", {
        get: function () {
            return this.filterForm.get('master_activity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskListComponent.prototype, "name", {
        get: function () {
            return this.filterForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskListComponent.prototype, "ask_repeat_task", {
        get: function () {
            return this.filterForm.get('ask_repeat_task');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskListComponent.prototype, "modified_on", {
        get: function () {
            return this.filterForm.get('modified_on');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskListComponent.prototype, "created_by", {
        get: function () {
            return this.filterForm.get('created_by');
        },
        enumerable: true,
        configurable: true
    });
    TaskListComponent.prototype.ngOnInit = function () {
        this.createAdvanceFilterForm();
        this.getMasterActivityList(1, '', 'desc');
        this.getUserList();
        this.getTaskAndMasterActivity();
        this.getTaskData();
    };
    TaskListComponent.prototype.getMasterActivityList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].GET_TASK_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleQualityControlResponse(response);
        });
    };
    TaskListComponent.prototype.handleQualityControlResponse = function (response) {
        // console.log(response);
        this.masterActivityListData = response.payload.data;
        // console.log(JSON.stringify(this.masterActivityListData));
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
    TaskListComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            ask_repeat_task: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            modified_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            created_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            ask_repeat_task: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            modified_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            created_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    };
    /**
     * Add Edit Master Activity Dialog
     */
    TaskListComponent.prototype.openAddEditMasterActivityDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_task_list_add_task_list_dialog__WEBPACK_IMPORTED_MODULE_4__["AddTaskListDialog"], {
            panelClass: 'add-form-dialog-container',
            data: {
                listData: data
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getMasterActivityList(1, '', 'desc');
        });
    };
    /**
     * Toogle Filter
     */
    TaskListComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    TaskListComponent.prototype.deleteMsg = function (index) {
        this.tagList.splice(index, 1);
    };
    /**
     * Pagination page change event
     * @param event
     */
    TaskListComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getMasterActivityList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Clear tag method
     */
    TaskListComponent.prototype.onClearTags = function () {
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
    TaskListComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     *  Toggle confirmation Dialog
     */
    TaskListComponent.prototype.onDisabledConfirmDialog = function (event, data, id) {
        var _this = this;
        // console.log(this.slideData[id]);
        // console.log(data);
        var status = event.checked ? 'Inactive' : 'Active';
        var statusNagetive = !event.checked ? 'Inactive' : 'Active';
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogComponent"], {
            data: {
                content: 'Do you want change status from ' + status + ' to ' + statusNagetive
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].GET_TASK_LIST, data.id, {
                    'is_active': (event.checked === true) ? 1 : 0,
                    '_method': 'put',
                    'name': data.name,
                    'master_activity_id': data.master_activity,
                    'ask_repeat_task': data.ask_repeat_task,
                    'is_complete_task_pop_required': data.is_complete_task_pop_required,
                    'exclude_assignee': data.exclude_assignee
                }).subscribe(function (response) {
                    _this.getMasterActivityList(1, '', 'desc');
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
    TaskListComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    TaskListComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getMasterActivityList(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    TaskListComponent.prototype.getSearchParam = function () {
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
    TaskListComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].TASK_LIST_DOWNLOAD, params, this.getSearchParam(), 'Task List', 0).subscribe(function (response) {
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    TaskListComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'master_activity_id': form.value['master_activity_id'],
                'name': form.value['name'],
                'ask_repeat_task': form.value['ask_repeat_task'],
                'modified_on': form.value['modified_on'],
                'created_by': form.value['created_by'],
            });
            // console.log(this.filterForm.value);
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    TaskListComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        // removing empty key from objectsetAdvanceFilterKeyUp
        for (var key in form.value) {
            if (form.value.hasOwnProperty(key)) {
                // console.log(form.value['name']);
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
                    if (key === 'master_activity_id' || key === 'ask_repeat_task' || key === 'modified_on' || key === 'created_by') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'name') {
                        this.likeJSON[key] = form.value[key];
                    }
                }
            }
            // console.log(this.equalJSON);
            this.isOpenFilterView = false;
            this.getMasterActivityList(1, '', 'desc');
        }
        // {"compare":{"equal":{"name":"Payroll team"}}}
        // {"compare":{"equal":{"code":"","name":"BK General(Non chargeable)"}}}
    };
    /**
     * Get User List
     */
    TaskListComponent.prototype.getUserList = function () {
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
    TaskListComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue('');
        this.advanceFilterForm.get(elementName).setValue('');
        if (elementName === 'master_activity_id' || elementName === 'name' || elementName === 'ask_repeat_task' || elementName === 'modified_on' || elementName === 'created_by') {
            delete this.equalJSON[elementName];
        }
        //  else if (elementName === "name") {
        //     delete this.likeJSON[elementName];
        // }
        this.getMasterActivityList(1, '', 'desc');
    };
    /**
     * get activity data
     */
    TaskListComponent.prototype.getTaskAndMasterActivity = function () {
        var _this = this;
        // this._masterCheckListService.getMasterCheckListAndTaskData('').subscribe(response => {
        //   this.responseHandle(response);
        // });
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(function (response) {
            _this.responseHandle(response);
        });
    };
    TaskListComponent.prototype.responseHandle = function (data) {
        var _this = this;
        var masterData = [];
        var taskDataRef = [];
        // console.log(data);
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
    TaskListComponent.prototype.getTaskData = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].TEAM, {}, {}).subscribe(function (response) {
            _this.responseTeamHandle(response);
        });
    };
    TaskListComponent.prototype.responseTeamHandle = function (data) {
        var _this = this;
        var allData = data.payload.data;
        allData.filter(function (response) {
            // console.log(response);
            _this.teamData.push({ 'id': response.service_id, 'name': response.team_name, 'is_active': response.is_active });
        });
    };
    /**
     * Add Edit TaskList Dialog
     */
    TaskListComponent.prototype.openAddEditTaskListDialog = function () {
        var dialogRef = this.dialog.open(_add_task_list_add_task_list_dialog__WEBPACK_IMPORTED_MODULE_4__["AddTaskListDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], TaskListComponent.prototype, "onKeydownHandler", null);
    TaskListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/task-list.component.html"),
            styles: [__webpack_require__(/*! ./task-list.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/task-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=worksheet-quick-action-hierarchy-hierarchy-module.js.map