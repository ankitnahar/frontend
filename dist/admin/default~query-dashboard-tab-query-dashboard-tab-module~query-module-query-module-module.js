(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~query-dashboard-tab-query-dashboard-tab-module~query-module-query-module-module"],{

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/pending-queries-list/pending-queries-list.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/pending-queries-list/pending-queries-list.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-information-tab-container\">\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-10 leave-type-list\">\r\n          <ul>\r\n            <li>\r\n              <a class=\"back-color list-alignment\">\r\n                <i class=\"material-icons\">fiber_manual_record</i>Pending Count</a>\r\n            </li>\r\n            <li>\r\n              <a class=\"primary-color list-alignment\">\r\n                <i class=\"material-icons\">fiber_manual_record</i>Partial Count</a>\r\n            </li>\r\n            <li>\r\n              <a class=\"orange-color list-alignment\"><i class=\"material-icons\">fiber_manual_record</i>Received Count</a>\r\n            </li>\r\n            <li>\r\n              <a class=\"turquoise-color  list-alignment\"><i class=\"material-icons\">fiber_manual_record</i>Total Query</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onOpenFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li>\r\n              <a (click)=\"downloadExcel()\">\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <i\r\n          class=\"material-icons\">close</i></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Parent Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         (change)=\"onChangeParentEntity($event)\"\r\n                         formControlName=\"parent_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Client Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"entity_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Subject Line\" formControlName=\"subject\"/>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"tamList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"TAM\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"tlList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"TL\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"team_leader\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"atlList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"ATL\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"associate_team_lead\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Staff\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"team_member\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\" *ngIf=\"querySelectedStatus === 9\">\r\n              <ng-select [items]=\"queryStatusList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"status_name\"\r\n                         placeholder=\"Stage\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         formControlName=\"stage_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"parent_id.value\">\r\n          <span class=\"tag__title\">Parent Trading Name:</span>\r\n          <span>\r\n          <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Trading name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"parent_id\"\r\n                     (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);onChangeParentEntity($event);\">\r\n            </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"entityIdField.value\">\r\n          <span class=\"tag__title\">Client Name: </span>\r\n          <span>\r\n         <ng-select [items]=\"clientList\"\r\n                    [closeOnSelect]=\"true\"\r\n                    bindLabel=\"trading_name\"\r\n                    placeholder=\"Client Name\"\r\n                    bindValue=\"id\"\r\n                    [virtualScroll]=\"true\"\r\n                    [searchable]=\"true\"\r\n                    [hideSelected]=\"true\"\r\n                    formControlName=\"entity_id\"\r\n                    (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"subjectField.value\">\r\n          <span class=\"tag__title\">Subject Line: </span>\r\n          <span>\r\n            <mat-form-field>\r\n             <input matInput formControlName=\"subject\"\r\n                    (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('subject')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"tamField.value\">\r\n          <span class=\"tag__title\">TAM: </span>\r\n          <span>\r\n             <ng-select [items]=\"tamList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"userfullname\"\r\n                        placeholder=\"TAM\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"technical_account_manager\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('technical_account_manager')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"tlField.value\">\r\n          <span class=\"tag__title\">TL: </span>\r\n          <span>\r\n            <ng-select [items]=\"tlList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"TL\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"team_leader\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('team_leader')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"atlField.value\">\r\n          <span class=\"tag__title\">ATL: </span>\r\n          <span>\r\n            <ng-select [items]=\"atlList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"ATL\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"associate_team_lead\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('associate_team_lead')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"tmField.value\">\r\n          <span class=\"tag__title\">Staff: </span>\r\n          <span>\r\n            <ng-select [items]=\"userList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Staff\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"team_member\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('team_member')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"stageIdField.value\">\r\n          <span class=\"tag__title\">Stage : </span>\r\n          <span>\r\n             <ng-select [items]=\"queryStatusList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"status_name\"\r\n                        placeholder=\"Stage\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        [multiple]=\"true\"\r\n                        formControlName=\"stage_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('stage_id')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"clearAll-tags\"\r\n             *ngIf=\"parent_id.value || entityIdField.value || subjectField.value || stageIdField.value || tmField.value || tamField.value || tlField.value || atlField.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table class=\"table-body\">\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No.</th>\r\n            <th width=\"10%\">Parent Trading Name</th>\r\n            <th width=\"12%\">Client Name</th>\r\n            <th width=\"17%\">Subject Line</th>\r\n            <th width=\"5%\">Counter</th>\r\n            <th width=\"12%\">TAM</th>\r\n            <th width=\"12%\">TL / ATL</th>\r\n            <th width=\"9%\" *ngIf=\"querySelectedStatus === 9\">Stage</th>\r\n            <th width=\"10%\">Created On</th>\r\n            <th width=\"5%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"queryList.length\">\r\n          <tr *ngFor=\"let queryData of queryList; let i = index;\" [ngClass]=\"{'red-tr-grid' : queryData?.created_on | dateCompareWithToday}\">\r\n            <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}\r\n              <!--<mat-icon *ngIf=\"queryData?.discontinue_stage == 1\" class=\"red-color v-align-middle\"-->\r\n                        <!--[matTooltip]=\"'Discontinue Process Initiated'\">block-->\r\n              <!--</mat-icon>-->\r\n            </td>\r\n            <td width=\"10%\">{{queryData?.parent_name}}</td>\r\n            <td width=\"12%\">{{queryData?.trading_name}}</td>\r\n            <td width=\"17%\">{{queryData?.subject}}</td>\r\n            <td width=\"5%\">\r\n              <span class=\"label-gray-bg-color MR-5\">{{queryData?.pending_count}}</span>\r\n              <span class=\"label-primary-bg-color MR-5\">{{queryData?.partial_count}}</span>\r\n              <span class=\"label-orange-bg-color MR-5\">{{queryData?.received_count}}</span>\r\n              <span class=\"label-turquoise-bg-color MR-5\">{{queryData?.totalInformation}}</span>\r\n            </td>\r\n            <td width=\"12%\">{{queryData?.tam_name}}</td>\r\n            <td width=\"12%\">{{queryData?.tl_name}}{{(queryData?.atl_name != null && queryData?.atl_name != '') ?\r\n              '/ '+queryData?.atl_name : ''}}\r\n            </td>\r\n            <td width=\"9%\" *ngIf=\"querySelectedStatus === 9\">{{queryData?.stage_id?.stage_name}}</td>\r\n            <td width=\"10%\">{{queryData?.created_on | date : 'dd-MM-yyy HH:mm:ss'}}</td>\r\n            <td width=\"5%\">\r\n              <a>\r\n                <mat-icon [matMenuTriggerFor]=\"menuaction\">more_vert</mat-icon>\r\n                <mat-menu #menuaction=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item\r\n                          (click)=\"OnEditQuery(queryData)\" *ngIf=\"tabData['add_edit'] && queryData?.stage_id?.id <=6\">\r\n                    <a>\r\n                      <mat-icon class=\"mat-icon_width_auto\">edit</mat-icon>\r\n                      Edit Query\r\n                    </a>\r\n                  </button>\r\n                  <button mat-menu-item\r\n                          (click)=\"onViewQuery(queryData)\">\r\n                    <a>\r\n                      <mat-icon class=\"mat-icon_width_auto\">remove_red_eye</mat-icon>\r\n                      View Query\r\n                    </a>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onQueryLog(queryData)\">\r\n                    <a>\r\n                      <mat-icon class=\"material-icons\">message</mat-icon>\r\n                      Query Log\r\n                    </a>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onQueryReminderLog(queryData)\">\r\n                    <a>\r\n                      <mat-icon class=\"material-icons\">message</mat-icon>\r\n                      Reminder Log\r\n                    </a>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onSnoozeQueryDialog(queryData)\"\r\n                          *ngIf=\"queryData.stage_id?.id === 5\">\r\n                    <a>\r\n                      <mat-icon class=\"mat-icon_width_auto\">notifications_off</mat-icon>\r\n                      Snooze Query\r\n                    </a>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onConfirmationDialog(1, 'ATL', queryData)\"\r\n                          *ngIf=\"queryData.stage_id?.id === 1\">\r\n                    <a>\r\n                      <mat-icon class=\"mat-icon_width_auto\">redo</mat-icon>\r\n                      Move to ATL\r\n                    </a>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onConfirmationDialog(2, 'TL', queryData)\"\r\n                          *ngIf=\"queryData.stage_id?.id === 1 || queryData.stage_id?.id === 2\">\r\n                    <a>\r\n                      <mat-icon class=\"mat-icon_width_auto\">redo</mat-icon>\r\n                      Move to TL\r\n                    </a>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onConfirmationDialog(3, 'TAM', queryData)\"\r\n                          *ngIf=\"queryData.stage_id?.id === 1 || queryData.stage_id?.id === 2 || queryData.stage_id?.id === 3\">\r\n                    <a>\r\n                      <mat-icon class=\"mat-icon_width_auto\">how_to_reg</mat-icon>\r\n                      Move to TAM\r\n                    </a>\r\n                  </button>\r\n                  <button mat-menu-item\r\n                          (click)=\"onDeleteQuery(queryData)\" *ngIf=\"tabData['add_edit'] && queryData?.stage_id?.id <5\">\r\n                    <a>\r\n                      <mat-icon class=\"mat-icon_width_auto\">delete</mat-icon>\r\n                      Delete Query\r\n                    </a>\r\n                  </button>\r\n                </mat-menu>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n        <table *ngIf=\"queryList.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Data Grid -->\r\n  <div *ngIf=\"queryList.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/pending-queries-list/pending-queries-list.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/pending-queries-list/pending-queries-list.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red-tr-grid {\n  background: #fab4b4 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vY2xpZW50LW1vZHVsZS9xdWVyeS1tb2R1bGUvcXVlcnktZGFzaGJvYXJkLXRhYi9wZW5kaW5nLXF1ZXJpZXMtbGlzdC9DOlxcd2FtcDY0XFx3d3dcXGhrX2Zyb250ZW5kL3Byb2plY3RzXFxhZG1pblxcc3JjXFxhcHBcXGFkbWluXFxjbGllbnQtbW9kdWxlXFxxdWVyeS1tb2R1bGVcXHF1ZXJ5LWRhc2hib2FyZC10YWJcXHBlbmRpbmctcXVlcmllcy1saXN0XFxwZW5kaW5nLXF1ZXJpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QixFQUFBIiwiZmlsZSI6InByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vY2xpZW50LW1vZHVsZS9xdWVyeS1tb2R1bGUvcXVlcnktZGFzaGJvYXJkLXRhYi9wZW5kaW5nLXF1ZXJpZXMtbGlzdC9wZW5kaW5nLXF1ZXJpZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWQtdHItZ3JpZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZhYjRiNCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/pending-queries-list/pending-queries-list.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/pending-queries-list/pending-queries-list.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PendingQueriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingQueriesListComponent", function() { return PendingQueriesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! util */ "../../node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _query_log_dialog_query_log_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../query-log-dialog/query-log-dialog.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-log-dialog/query-log-dialog.component.ts");
/* harmony import */ var _snooze_query_dialog_snooze_query_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../snooze-query-dialog/snooze-query-dialog.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/snooze-query-dialog/snooze-query-dialog.component.ts");
/* harmony import */ var _query_reminder_log_dialog_query_reminder_log_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../query-reminder-log-dialog/query-reminder-log-dialog.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-reminder-log-dialog/query-reminder-log-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var PendingQueriesListComponent = /** @class */ (function () {
    function PendingQueriesListComponent(_router, dialog, _fb, _commonCrudService, _sharedService, _sharedObjService) {
        this._router = _router;
        this.dialog = dialog;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this._sharedObjService = _sharedObjService;
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.findInSetJSON = {};
        this.orJSON = {};
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilterView = false;
        this.isOpenHistoryDialog = false;
        //
        this.clientList = [];
        this.filteredTradingClientList = [];
        this.parentClientList = [];
        this.userList = [];
        this.tamList = [];
        this.atlList = [];
        this.tlList = [];
        // Data Variables
        this.queryList = [];
        this.queryStatusList = [];
        this.trIndex = -1;
        this.PeriodFromValue = null;
        this.PeriodToValue = null;
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_6__["ADMINTABACCESS"].QUERY_MODULE;
    }
    Object.defineProperty(PendingQueriesListComponent.prototype, "parent_id", {
        // get form control
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingQueriesListComponent.prototype, "entityIdField", {
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingQueriesListComponent.prototype, "subjectField", {
        get: function () {
            return this.filterForm.get('subject');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingQueriesListComponent.prototype, "fromPeriodField", {
        get: function () {
            return this.filterForm.get('start_period');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingQueriesListComponent.prototype, "toPeriodField", {
        get: function () {
            return this.filterForm.get('end_period');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingQueriesListComponent.prototype, "stageIdField", {
        get: function () {
            return this.filterForm.get('stage_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingQueriesListComponent.prototype, "tamField", {
        get: function () {
            return this.filterForm.get('technical_account_manager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingQueriesListComponent.prototype, "atlField", {
        get: function () {
            return this.filterForm.get('associate_team_lead');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingQueriesListComponent.prototype, "tlField", {
        get: function () {
            return this.filterForm.get('team_leader');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingQueriesListComponent.prototype, "tmField", {
        get: function () {
            return this.filterForm.get('team_member');
        },
        enumerable: true,
        configurable: true
    });
    PendingQueriesListComponent.prototype.ngOnInit = function () {
        this.initializationMethod();
    };
    // Initialization Methods
    PendingQueriesListComponent.prototype.initializationMethod = function () {
        this.createAdvanceFilterForm();
        this.getClientList();
        this.getUserList();
        this.getQueryStatusList();
    };
    /**
     * Get User List
     */
    PendingQueriesListComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, {
            'compare': { 'equal': { 'is_active': 1 } },
            'findinset': { 'team_id': [1] }
        }).subscribe(function (response) {
            var tam = response.filter(function (data) { return (data['designation_id']) ? data['designation_id']['id'] === 9 : 0; });
            _this.tamList = tam;
            var tl = response.filter(function (data) { return (data['designation_id']) ? data['designation_id']['id'] === 60 : 0; });
            _this.tlList = tl;
            var atl = response.filter(function (data) { return (data['designation_id']) ? data['designation_id']['id'] === 61 : 0; });
            _this.atlList = atl;
            var staff = response.filter(function (data) { return (data['designation_id']) ? data['designation_id']['id'] === 10 : 0; });
            _this.userList = staff;
        });
    };
    /**
     * Get Query Stage List
     */
    PendingQueriesListComponent.prototype.getQueryStatusList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].QUERY_STAGE_LIST, {}, {}).subscribe(function (response) {
            _this.queryStatusList = response.payload.data;
        });
    };
    /**
     * Ng On Changes for status change
     * @param changes
     */
    PendingQueriesListComponent.prototype.ngOnChanges = function (changes) {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.queryselectedTabID);
        // console.log(this.tabData);
        if (changes['querySelectedStatus']) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(this.querySelectedStatus)) {
                this.getQueryList(1, 'id', 'desc');
            }
        }
    };
    /**
     * Create Form for filters
     */
    PendingQueriesListComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            stage_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            start_period: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            end_period: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            team_leader: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            associate_team_lead: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            stage_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            start_period: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            end_period: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            associate_team_lead: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            team_leader: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    /**
     * Get Client List
     */
    PendingQueriesListComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = _this.filteredTradingClientList = response;
            _this.parentClientList = response.filter(function (item) { return item.is_parent === 1; });
        });
    };
    /**
     * Default search params for client listing API
     * @returns {{compare: {notequal: {discontinue_stage: number}}}}
     */
    PendingQueriesListComponent.prototype.getClientSearchParam = function () {
        return {
            compare: {
                notequal: {
                    discontinue_stage: 2
                }
            }
        };
    };
    /**
     *
     * @param {number} pageNumber
     * @param {string} key
     * @param {string} val
     */
    PendingQueriesListComponent.prototype.getQueryList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].QUERY_LIST + '/' + this.querySelectedStatus, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleQueryResponse(response);
        });
    };
    /**
     * Handle Query List Response
     * @param response
     */
    PendingQueriesListComponent.prototype.handleQueryResponse = function (response) {
        this.queryList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Expand row method
     * @param i
     */
    PendingQueriesListComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Open filter method
     */
    PendingQueriesListComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = true;
    };
    /**
     * Close filter method
     */
    PendingQueriesListComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    /**
     * Toogle Filter
     */
    PendingQueriesListComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Pagination page change method
     * @param event
     */
    PendingQueriesListComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getQueryList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Export to Excel
     */
    PendingQueriesListComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].QUERY_LIST + '/' + this.querySelectedStatus, params, this.getSearchParam(), 'Query List ', 0).subscribe(function (response) {
        });
    };
    /**
     * On Move to TL or TAM confirmation dialog
     */
    PendingQueriesListComponent.prototype.onConfirmationDialog = function (type, moveTo, queryData) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to move this query to ' + moveTo + '?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                if (type === 1) {
                    var param = {};
                    param['type'] = 1;
                    param['stage_id'] = 2;
                    _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].QUERY_MOVE_TO_TL, queryData.id, param).subscribe(function (response) {
                        _this.getQueryList(1, 'id', 'desc');
                    });
                }
                else if (type === 2) {
                    var param = {};
                    param['type'] = 2;
                    param['stage_id'] = 3;
                    _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].QUERY_MOVE_TO_TL, queryData.id, param).subscribe(function (response) {
                        _this.getQueryList(1, 'id', 'desc');
                    });
                }
                else if (type === 3) {
                    var param = {};
                    param['type'] = 3;
                    param['stage_id'] = 4;
                    _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].QUERY_MOVE_TO_TL, queryData.id, param).subscribe(function (response) {
                        _this.getQueryList(1, 'id', 'desc');
                    });
                }
            }
        });
    };
    /**
     * On Delete Query
     * @param queryData
     */
    PendingQueriesListComponent.prototype.onDeleteQuery = function (queryData) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this query?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].QUERY_LIST, queryData.id).subscribe(function (Response) {
                    _this.getQueryList(1, 'id', 'desc');
                });
            }
        });
    };
    /**
     * On Edit Query
     * @param queryData
     */
    PendingQueriesListComponent.prototype.OnEditQuery = function (queryData) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].QUERY_MODULE, null);
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].QUERY_MODULE, queryData);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].EDIT_QUERIES]);
    };
    /**
     * On View Query Data
     * @param queryData
     */
    PendingQueriesListComponent.prototype.onViewQuery = function (queryData) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].QUERY_MODULE, null);
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].QUERY_MODULE, queryData);
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].VIEW_QUERIES, '_blank');
        });
    };
    /**
     * On view of query log
     * @param queryData
     */
    PendingQueriesListComponent.prototype.onQueryLog = function (queryData) {
        var dialogRef = this.dialog.open(_query_log_dialog_query_log_dialog_component__WEBPACK_IMPORTED_MODULE_15__["QueryLogDialogComponent"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {
                queryData: queryData
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    PendingQueriesListComponent.prototype.onQueryReminderLog = function (queryData) {
        var dialogRef = this.dialog.open(_query_reminder_log_dialog_query_reminder_log_dialog_component__WEBPACK_IMPORTED_MODULE_17__["QueryReminderLogDialogComponent"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {
                queryData: queryData
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * On Snooze Query
     * @param Query
     */
    PendingQueriesListComponent.prototype.onSnoozeQueryDialog = function (queryData) {
        var _this = this;
        var dialogRef = this.dialog.open(_snooze_query_dialog_snooze_query_dialog_component__WEBPACK_IMPORTED_MODULE_16__["SnoozeQueryDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                queryData: queryData
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getQueryList(1, 'id', 'desc');
            }
        });
    };
    /**
     * Esc event for close modal
     * @param event
     */
    PendingQueriesListComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    PendingQueriesListComponent.prototype.onClearTag = function (elementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'entity_id' || elementName === 'parent_id') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'subject') {
            delete this.likeJSON[elementName];
        }
        else if (elementName === 'start_period') {
            this.PeriodFromValue = null;
        }
        else if (elementName === 'end_period') {
            this.PeriodToValue = null;
        }
        else if (elementName === 'stage_id') {
            delete this.inJSON[elementName];
        }
        this.getQueryList(1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    PendingQueriesListComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.orJSON = {};
        this.isOpenFilterView = false;
        this.getQueryList(1, 'id', 'desc');
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    PendingQueriesListComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'subject': form.value['subject'],
                'start_period': form.value['start_period'],
                'end_period': form.value['end_period'],
                'stage_id': form.value['stage_id'],
                'technical_account_manager': form.value['technical_account_manager'],
                'team_leader': form.value['team_leader'],
                'associate_team_lead': form.value['associate_team_lead'],
                'team_member': form.value['team_member']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    PendingQueriesListComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.findInSetJSON = {};
        this.orJSON = {};
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
        if (form.value['start_period'] !== '' && form.value['start_period']) {
            this.PeriodFromValue = form.value['start_period'];
            delete form.value['start_period'];
        }
        if (form.value['end_period'] !== '' && form.value['end_period']) {
            this.PeriodToValue = form.value['end_period'];
            delete form.value['end_period'];
        }
        // For Entity ID
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'entity_id' || key === 'parent_id') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'subject') {
                        this.likeJSON[key] = encodeURIComponent(form.value[key]);
                    }
                    else if (key === 'stage_id') {
                        if (form.value[key].length) {
                            this.inJSON[key] = form.value[key].join(',');
                        }
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getQueryList(1, 'id', 'desc');
        }
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    PendingQueriesListComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
        if (this.tamField.value) {
            params['technical_account_manager'] = this.tamField.value;
        }
        if (this.tlField.value) {
            params['team_leader'] = this.tlField.value;
        }
        if (this.atlField.value) {
            params['associate_team_lead'] = this.atlField.value;
        }
        if (this.tmField.value) {
            params['team_member'] = this.tmField.value;
        }
        return params;
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    PendingQueriesListComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getQueryList(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    PendingQueriesListComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        if (this.PeriodFromValue) {
            filter['greaterthanequal'] = {};
        }
        if (this.PeriodToValue) {
            filter['lessthanequal'] = {};
        }
        if (this.PeriodFromValue) {
            filter['greaterthanequal']['start_period'] = moment__WEBPACK_IMPORTED_MODULE_13__(this.PeriodFromValue).format('YYYY-MM-DD');
        }
        if (this.PeriodToValue) {
            filter['lessthanequal']['end_period'] = moment__WEBPACK_IMPORTED_MODULE_13__(this.PeriodToValue).format('YYYY-MM-DD');
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
        if (Object.keys(this.findInSetJSON).length !== 0) {
            params['findinset'] = this.findInSetJSON;
        }
        if (Object.keys(this.orJSON).length !== 0) {
            params['or'] = { 'like': [this.orJSON] };
        }
        return params;
    };
    /**
     * Convert json string to array
     * @param field
     * @returns {string[]}
     */
    PendingQueriesListComponent.prototype.convertJsonStringToArray = function (item) {
        if (item.length > 0) {
            return item.split(',');
        }
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    PendingQueriesListComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PendingQueriesListComponent.prototype, "querySelectedStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PendingQueriesListComponent.prototype, "queryselectedTabID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PendingQueriesListComponent.prototype, "onKeydownHandler", null);
    PendingQueriesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-queries-list',
            template: __webpack_require__(/*! ./pending-queries-list.component.html */ "./src/app/admin/client-module/query-module/query-dashboard-tab/pending-queries-list/pending-queries-list.component.html"),
            styles: [__webpack_require__(/*! ./pending-queries-list.component.scss */ "./src/app/admin/client-module/query-module/query-dashboard-tab/pending-queries-list/pending-queries-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__["SharedObjService"]])
    ], PendingQueriesListComponent);
    return PendingQueriesListComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-dashboard-tab.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/query-dashboard-tab.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start BreadCrumb Top Header -->\r\n<div class=\"admin-invoice-dashboard-container\">\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>CLIENT</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">PENDING QUERIES</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 PR-0\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!--start Pending queries tab menu-->\r\n  <div class=\"invoice-tabs-container\">\r\n    <mat-tab-group class=\"demo-tab-group worksheet-tabs\" [selectedIndex]=\"selectedIndexData\"\r\n                   (selectedIndexChange)=\"onSelectedIndexChange($event)\">\r\n      <mat-tab *ngFor=\"let tab of tabList\" label=\"{{tab?.status_name}}\"></mat-tab>\r\n    </mat-tab-group>\r\n\r\n    <div class=\"tab-content\">\r\n      <app-pending-queries-list [querySelectedStatus]=\"selectedQueryStatus\"\r\n                                [queryselectedTabID]=\"selectedTabID\"></app-pending-queries-list>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--end Pending queries tab menu-->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-dashboard-tab.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/query-dashboard-tab.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvcXVlcnktbW9kdWxlL3F1ZXJ5LWRhc2hib2FyZC10YWIvcXVlcnktZGFzaGJvYXJkLXRhYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-dashboard-tab.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/query-dashboard-tab.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: QueryDashboardTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryDashboardTabComponent", function() { return QueryDashboardTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QueryDashboardTabComponent = /** @class */ (function () {
    function QueryDashboardTabComponent(_sharedService, _commonCrudService, _router) {
        this._sharedService = _sharedService;
        this._commonCrudService = _commonCrudService;
        this._router = _router;
        this.tabList = [];
        this.isActiveTab = 0;
        this.selectedIndexData = 0;
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].QUERY_MODULE;
    }
    QueryDashboardTabComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.getQueryStatusList();
    };
    /**
     * Get Query Stage List
     */
    QueryDashboardTabComponent.prototype.getQueryStatusList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].QUERY_STAGE_LIST, {}, {}).subscribe(function (Response) {
            _this.handleQueryStatusResponse(Response);
        });
    };
    /**
     * Handle Query Stage List
     * @param Response
     */
    QueryDashboardTabComponent.prototype.handleQueryStatusResponse = function (Response) {
        var _this = this;
        var previligesData = this._sharedService.getPrivilege();
        var statusData = Response.payload.data;
        if (statusData) {
            statusData.forEach(function (item) {
                var itemData = previligesData.filter(function (x) { return x.id === item['tab_id']; });
                if (itemData.length) {
                    _this.tabList.push(item);
                }
            });
            // const allStatus = statusData.filter(x => x.id === 7);
            // if (allStatus) {
            //   this.tabList.push(allStatus[0]);
            // }
        }
        // console.log(this.tabList);
        this.tabList.sort(function (a, b) {
            return a.sort_order - b.sort_order;
        });
    };
    /**
     * On home page route
     */
    QueryDashboardTabComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Selected Index Tab Change
     * @param newTabIndex
     */
    QueryDashboardTabComponent.prototype.onSelectedIndexChange = function (newTabIndex) {
        if (this.isActiveTab !== newTabIndex) {
            this.isActiveTab = newTabIndex;
            this.selectedQueryStatus = this.tabList[newTabIndex].id;
            this.selectedTabID = this.tabList[newTabIndex].tab_id;
        }
        else {
            this.selectedQueryStatus = this.tabList[this.isActiveTab].id;
            this.selectedTabID = this.tabList[this.isActiveTab].tab_id;
        }
    };
    QueryDashboardTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query-dashboard-tab',
            template: __webpack_require__(/*! ./query-dashboard-tab.component.html */ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-dashboard-tab.component.html"),
            styles: [__webpack_require__(/*! ./query-dashboard-tab.component.scss */ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-dashboard-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QueryDashboardTabComponent);
    return QueryDashboardTabComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-dashboard-tab.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/query-dashboard-tab.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: QueryDashboardTabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryDashboardTabModule", function() { return QueryDashboardTabModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _query_dashboard_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query-dashboard-tab.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-dashboard-tab.component.ts");
/* harmony import */ var _pending_queries_list_pending_queries_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pending-queries-list/pending-queries-list.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/pending-queries-list/pending-queries-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _snooze_query_dialog_snooze_query_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./snooze-query-dialog/snooze-query-dialog.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/snooze-query-dialog/snooze-query-dialog.component.ts");
/* harmony import */ var _query_move_to_tam_dialog_query_move_to_tam_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./query-move-to-tam-dialog/query-move-to-tam-dialog.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-move-to-tam-dialog/query-move-to-tam-dialog.component.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _query_log_dialog_query_log_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./query-log-dialog/query-log-dialog.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-log-dialog/query-log-dialog.component.ts");
/* harmony import */ var _upload_query_documents_dialog_upload_query_documents_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload-query-documents-dialog/upload-query-documents-dialog.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/upload-query-documents-dialog/upload-query-documents-dialog.component.ts");
/* harmony import */ var _query_reminder_log_dialog_query_reminder_log_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./query-reminder-log-dialog/query-reminder-log-dialog.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-reminder-log-dialog/query-reminder-log-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'edit-queries',
        loadChildren: './edit-queries/edit-queries.module#EditQueriesModule'
    },
    {
        path: 'view-query',
        loadChildren: './view-query/view-query.module#ViewQueryModule'
    },
];
var QueryDashboardTabModule = /** @class */ (function () {
    function QueryDashboardTabModule() {
    }
    QueryDashboardTabModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__["UtilityModule"],
            ],
            declarations: [_query_dashboard_tab_component__WEBPACK_IMPORTED_MODULE_2__["QueryDashboardTabComponent"], _pending_queries_list_pending_queries_list_component__WEBPACK_IMPORTED_MODULE_3__["PendingQueriesListComponent"], _snooze_query_dialog_snooze_query_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SnoozeQueryDialogComponent"], _query_move_to_tam_dialog_query_move_to_tam_dialog_component__WEBPACK_IMPORTED_MODULE_6__["QueryMoveToTamDialogComponent"], _query_log_dialog_query_log_dialog_component__WEBPACK_IMPORTED_MODULE_8__["QueryLogDialogComponent"], _upload_query_documents_dialog_upload_query_documents_dialog_component__WEBPACK_IMPORTED_MODULE_9__["UploadQueryDocumentsDialogComponent"], _query_reminder_log_dialog_query_reminder_log_dialog_component__WEBPACK_IMPORTED_MODULE_10__["QueryReminderLogDialogComponent"]],
            entryComponents: [_query_log_dialog_query_log_dialog_component__WEBPACK_IMPORTED_MODULE_8__["QueryLogDialogComponent"], _snooze_query_dialog_snooze_query_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SnoozeQueryDialogComponent"], _query_move_to_tam_dialog_query_move_to_tam_dialog_component__WEBPACK_IMPORTED_MODULE_6__["QueryMoveToTamDialogComponent"], _upload_query_documents_dialog_upload_query_documents_dialog_component__WEBPACK_IMPORTED_MODULE_9__["UploadQueryDocumentsDialogComponent"], _query_reminder_log_dialog_query_reminder_log_dialog_component__WEBPACK_IMPORTED_MODULE_10__["QueryReminderLogDialogComponent"]]
        })
    ], QueryDashboardTabModule);
    return QueryDashboardTabModule;
}());



/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-log-dialog/query-log-dialog.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/query-log-dialog/query-log-dialog.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Information Log dialog  -->\r\n<div class=\"modal large-modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Query Log : {{queryDataList?.trading_name}}</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <span><span class=\"panel-title M-0\"> Subject :</span> {{queryDataList?.subject}}</span>\r\n    <!-- Start Request Table -->\r\n    <div class=\"table-container dialog-table-container PT-10\">\r\n      <div class=\"table-block\">\r\n        <table class=\"PT-0\">\r\n          <thead>\r\n          <tr>\r\n            <th width=\"10%\">Sr. No</th>\r\n            <th width=\"30%\">Stage Name</th>\r\n            <th width=\"30%\">Sent By</th>\r\n            <th width=\"30%\">Sent On</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let queryLog of queryLogList; let i = index\">\r\n            <td width=\"10%\">{{i+1}}</td>\r\n            <td width=\"30%\">{{queryLog?.status_id?.status_name}}</td>\r\n            <td width=\"30%\">{{queryLog?.modified_by?.modified_by}}</td>\r\n            <td width=\"30%\">{{queryLog?.modified_on | date : 'dd-MM-yyyy HH:mm:ss'}}</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Request Table -->\r\n  </div>\r\n</div>\r\n<!--  End Favorite menu dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-log-dialog/query-log-dialog.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/query-log-dialog/query-log-dialog.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: QueryLogDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryLogDialogComponent", function() { return QueryLogDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
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




var QueryLogDialogComponent = /** @class */ (function () {
    function QueryLogDialogComponent(dialogRef, data, _commonCrudService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._commonCrudService = _commonCrudService;
        this.queryLogList = [];
    }
    QueryLogDialogComponent.prototype.ngOnInit = function () {
        this.queryDataList = (this.data.queryData) ? this.data.queryData : [];
        this.getQueryLog();
    };
    // Initialization Methods
    QueryLogDialogComponent.prototype.getQueryLog = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_3__["AdminAPI"].QUERY_LOG_LIST + '/' + this.queryDataList.id, {}, {}).subscribe(function (response) {
            _this.queryLogList = response.payload.data;
        });
    };
    /**
     * Close modal method
     */
    QueryLogDialogComponent.prototype.onClose = function () {
        this.dialogRef.close(true);
    };
    /**
     * Esc event for close modal
     * @param event
     */
    QueryLogDialogComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onClose();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], QueryLogDialogComponent.prototype, "onKeydownHandler", null);
    QueryLogDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query-log-dialog',
            template: __webpack_require__(/*! ./query-log-dialog.component.html */ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-log-dialog/query-log-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__["CommonCrudService"]])
    ], QueryLogDialogComponent);
    return QueryLogDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-move-to-tam-dialog/query-move-to-tam-dialog.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/query-move-to-tam-dialog/query-move-to-tam-dialog.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start Send back to staff Dialog-->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">SEND BACK TO STAFF</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n  <form [formGroup]=\"sendBacktoStaffForm\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row MT-20\">\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Reason\" formControlName=\"reason\" row=\"2\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal__footer\">\r\n        <div class=\"text-right row\">\r\n          <div class=\"col-md-12 PR-25\">\r\n            <button type=\"submit\" class=\"btn-primary MR-5\">Send Back to Staff</button>\r\n            <button type=\"submit\" class=\"btn-default\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-move-to-tam-dialog/query-move-to-tam-dialog.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/query-move-to-tam-dialog/query-move-to-tam-dialog.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: QueryMoveToTamDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryMoveToTamDialogComponent", function() { return QueryMoveToTamDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
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



var QueryMoveToTamDialogComponent = /** @class */ (function () {
    function QueryMoveToTamDialogComponent(dialogRef, data, _fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._fb = _fb;
    }
    QueryMoveToTamDialogComponent.prototype.ngOnInit = function () {
        this.createSendBackToStaffForm();
    };
    QueryMoveToTamDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    QueryMoveToTamDialogComponent.prototype.createSendBackToStaffForm = function () {
        this.sendBacktoStaffForm = this._fb.group({
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    };
    QueryMoveToTamDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query-move-to-tam-dialog',
            template: __webpack_require__(/*! ./query-move-to-tam-dialog.component.html */ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-move-to-tam-dialog/query-move-to-tam-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], QueryMoveToTamDialogComponent);
    return QueryMoveToTamDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-reminder-log-dialog/query-reminder-log-dialog.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/query-reminder-log-dialog/query-reminder-log-dialog.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Information Log dialog  -->\r\n<div class=\"modal large-modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Query Reminder Log : {{queryDataList?.trading_name}}</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <span><span class=\"panel-title M-0\"> Subject :</span> {{queryDataList?.subject}}</span>\r\n    <!-- Start Request Table -->\r\n    <div class=\"table-container dialog-table-container PT-10\">\r\n      <div class=\"table-block\">\r\n        <table class=\"PT-0\">\r\n          <thead>\r\n          <tr>\r\n            <th width=\"10%\">Sr. No</th>\r\n            <th width=\"30%\">To</th>\r\n            <th width=\"30%\">Reminder Date</th>\r\n            <th width=\"30%\">Created By</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let queryLog of queryLogList; let i = index\">\r\n            <td width=\"10%\">{{i+1}}</td>\r\n            <td width=\"30%\">{{queryLog?.to}}</td>\r\n            <td width=\"30%\">{{queryLog?.reminder_date | date : 'dd-MM-yyyy HH:mm:ss'}}</td>\r\n            <td width=\"30%\">{{queryLog?.created_by?.created_by}}</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Request Table -->\r\n  </div>\r\n</div>\r\n<!--  End Favorite menu dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-reminder-log-dialog/query-reminder-log-dialog.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/query-reminder-log-dialog/query-reminder-log-dialog.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: QueryReminderLogDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryReminderLogDialogComponent", function() { return QueryReminderLogDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
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




var QueryReminderLogDialogComponent = /** @class */ (function () {
    function QueryReminderLogDialogComponent(dialogRef, data, _commonCrudService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._commonCrudService = _commonCrudService;
        this.queryLogList = [];
    }
    QueryReminderLogDialogComponent.prototype.ngOnInit = function () {
        this.queryDataList = (this.data.queryData) ? this.data.queryData : [];
        this.getQueryLog();
    };
    // Initialization Methods
    QueryReminderLogDialogComponent.prototype.getQueryLog = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_3__["AdminAPI"].QUERY_LOG_REMINDER_LIST + '/' + this.queryDataList.id, {}, {}).subscribe(function (response) {
            _this.queryLogList = response.payload.data;
        });
    };
    /**
     * Close modal method
     */
    QueryReminderLogDialogComponent.prototype.onClose = function () {
        this.dialogRef.close(true);
    };
    /**
     * Esc event for close modal
     * @param event
     */
    QueryReminderLogDialogComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onClose();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], QueryReminderLogDialogComponent.prototype, "onKeydownHandler", null);
    QueryReminderLogDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query-reminder-log-dialog',
            template: __webpack_require__(/*! ./query-reminder-log-dialog.component.html */ "./src/app/admin/client-module/query-module/query-dashboard-tab/query-reminder-log-dialog/query-reminder-log-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__["CommonCrudService"]])
    ], QueryReminderLogDialogComponent);
    return QueryReminderLogDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/snooze-query-dialog/snooze-query-dialog.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/snooze-query-dialog/snooze-query-dialog.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Snooze Information dialog  -->\r\n<div class=\"\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Snooze Query : {{queryData?.trading_name}}</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose(false)\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addSnoozeForm\" (submit)=\"onSubmitSnoozeForm(addSnoozeForm)\">\r\n    <div class=\"modal__body\">\r\n      <span><span class=\"orange-color\">Subject : </span>{{queryData?.subject}}</span>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 PLR-0 MT-15\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Snooze Days\" formControlName=\"snooze\" (selectionChange)=\"getReminderDate()\">\r\n              <mat-option *ngFor=\"let days of snoozeOrReminderDays\" [value]=\"days['key']\">\r\n                {{days['label']}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSnoozeForm.get('snooze'))\"\r\n                            [errMsg]=\"validationMsg.SNOOZE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-20 MB-30 PLR-0\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Reminder Days\" formControlName=\"reminder\" (selectionChange)=\"getReminderDate()\">\r\n              <mat-option *ngFor=\"let days of snoozeOrReminderDays\" [value]=\"days['key']\">\r\n                {{days['label']}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSnoozeForm.get('reminder'))\"\r\n                            [errMsg]=\"validationMsg.REMINDER_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"nextReminderDate\">Next Reminder Date :: {{nextReminderDate | date : 'dd-MM-yyyy'}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" [disabled]=\"addSnoozeForm.invalid\">Set Reminder</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Assignee dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/snooze-query-dialog/snooze-query-dialog.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/snooze-query-dialog/snooze-query-dialog.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: SnoozeQueryDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnoozeQueryDialogComponent", function() { return SnoozeQueryDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
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








var SnoozeQueryDialogComponent = /** @class */ (function (_super) {
    __extends(SnoozeQueryDialogComponent, _super);
    function SnoozeQueryDialogComponent(_fb, dialogRef, data, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.snoozeOrReminderDays = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["SnoozeOrReminderDays"];
        _this.nextReminderDate = null;
        return _this;
    }
    SnoozeQueryDialogComponent.prototype.ngOnInit = function () {
        this.queryData = (this.data.queryData) ? this.data.queryData : [];
        this.createSnoozeForm();
    };
    /**
     * Create Snooze form
     */
    SnoozeQueryDialogComponent.prototype.createSnoozeForm = function () {
        this.addSnoozeForm = this._fb.group({
            snooze: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.queryData ? this.queryData.snooze : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            reminder: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.queryData ? this.queryData.reminder : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    /**
     * Update Validation
     * @param value
     */
    SnoozeQueryDialogComponent.prototype.getReminderDate = function () {
        var snooze = this.addSnoozeForm.get('snooze').value;
        var reminder = this.addSnoozeForm.get('reminder').value;
        if (snooze > 0 && reminder > 0) {
            var totalDays = Number(snooze) + Number(reminder);
            // const todaysDate = new Date() + ;
            var todaysDate = new Date();
            todaysDate.setDate(todaysDate.getDate() + totalDays);
            this.nextReminderDate = todaysDate;
        }
        else {
            this.nextReminderDate = null;
        }
    };
    /**
     * On Close Dialog
     * @param value
     */
    SnoozeQueryDialogComponent.prototype.onClose = function (value) {
        this.dialogRef.close(value);
    };
    /**
     * On Submit Snooze Form
     * @param form
     */
    SnoozeQueryDialogComponent.prototype.onSubmitSnoozeForm = function (form) {
        var _this = this;
        if (form.valid) {
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].QUERY_SNOOZE, this.queryData.id, form.value).subscribe(function (response) {
                _this.onClose(true);
            });
        }
    };
    SnoozeQueryDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snooze-query-dialog',
            template: __webpack_require__(/*! ./snooze-query-dialog.component.html */ "./src/app/admin/client-module/query-module/query-dashboard-tab/snooze-query-dialog/snooze-query-dialog.component.html")
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]])
    ], SnoozeQueryDialogComponent);
    return SnoozeQueryDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=default~query-dashboard-tab-query-dashboard-tab-module~query-module-query-module-module.js.map