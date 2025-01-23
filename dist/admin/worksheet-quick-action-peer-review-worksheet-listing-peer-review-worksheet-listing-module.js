(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["worksheet-quick-action-peer-review-worksheet-listing-peer-review-worksheet-listing-module"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/completed-peer-review-worksheet/completed-peer-review-worksheet.component.html":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/completed-peer-review-worksheet/completed-peer-review-worksheet.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--peer review worksheet listing container html start-->\r\n<div class=\"admin-peer-review-worksheet-listing-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\">home</mat-icon>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onWorksheetDashboard()\">WORKSHEET</a></span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onPeerReviewWorksheet()\">PEER REVIEW REQUIRE WORKSHEET</a></span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">COMPLETED PEER REVIEW WORKSHEET</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 PR-0\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('addNewWorksheet')\"\r\n                          *ngIf=\"worksheetTabIDData['add_edit']\">Add New Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayWorksheet')\">Today's Worksheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayTimesheet')\">Today's Timesheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetHierarchy')\"\r\n                          *ngIf=\"tabDataWorksheetHierarchy['view']\">Worksheet Hierarchy\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('subClientList')\"\r\n                          *ngIf=\"tabDataWorksheetSubClientList['view']\">Sub Client List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetMasterChecklist')\"\r\n                          *ngIf=\"tabDataWorksheetMasterChecklist['view']\">Worksheet Master Checklist\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                          *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('trainingList')\"\r\n                          *ngIf=\"tabDataWorksheetTraining['view']\">Training List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                          *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                    Worksheet\r\n                  </button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 leave-type-list\">\r\n          <ul>\r\n            <li>\r\n              <a class=\"red-color list-alignment\">\r\n                <i class=\"material-icons\">fiber_manual_record</i>\r\n                Indicates Overdue Task</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onToggleFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li (click)=\"downloadExcel()\" *ngIf=\"tabData['export']\">\r\n              <a>\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc\r\n          <mat-icon class=\"material-icons\">close</mat-icon>\r\n        </span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientListParent\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Parent Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         (change)=\"onChangeParentEntity($event);\"\r\n                         formControlName=\"parent_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"entity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"masterActivityList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Master activity\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         (change)=\"getTaskFilterList($event)\"\r\n                         formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"taskList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Task\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         formControlName=\"task_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\">\r\n                  <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                    {{frequency.frequency_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"start_date\" [matDatepicker]=\"periodFrom\"\r\n                           placeholder=\"Period From\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"end_date\" [matDatepicker]=\"periodTo\" placeholder=\"Period To\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"due_date_from\" [matDatepicker]=\"dueDateFrom\"\r\n                           placeholder=\"Due date From\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDateFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDateFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"due_date_to\" [matDatepicker]=\"dueDateTo\"\r\n                           placeholder=\"Due date To\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDateTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDateTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"category_id\" [multiple]=\"true\" placeholder=\"Category\">\r\n                  <mat-option *ngFor=\"let category of categoryData;\" [value]=\"category.key\">{{category.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"related_entity\" placeholder=\"Related Entity\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">{{yesNo.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"tamList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"TAM\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"staffList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Team Member\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"team_member\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Additional Staff\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"additional_assignee\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 MT-20 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button [disabled]=\"filterForm.invalid\" type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"parent_id.value\">\r\n          <span class=\"tag__title\">Parent Trading Name :</span>\r\n          <span>\r\n             <ng-select [items]=\"clientListParent\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"parent_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);onChangeParentEntity($event);\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"entity_id.value\">\r\n          <span class=\"tag__title\">Client name :</span>\r\n          <span>\r\n             <ng-select [items]=\"clientList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"entity_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"master_activity_id.value && master_activity_id.value.length\">\r\n          <span class=\"tag__title\">Master activity :</span>\r\n          <span>\r\n            <ng-select [items]=\"masterActivityList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);getTaskFilterList($event);\"\r\n                       formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('master_activity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"task_id.value && task_id.value.length\">\r\n          <span class=\"tag__title\">Task :</span>\r\n          <span>\r\n            <ng-select [items]=\"taskList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Task\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"task_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('task_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"frequency_id.value\">\r\n          <span class=\"tag__title\">Frequency :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n               <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                    {{frequency.frequency_name}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('frequency_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"start_date.value\">\r\n          <span class=\"tag__title\">Period From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"start_date\" [matDatepicker]=\"perdiodFromDate\"\r\n                     placeholder=\"Period From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('start_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"end_date.value\">\r\n          <span class=\"tag__title\">Period To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"end_date\" [matDatepicker]=\"perdiodToDate\"\r\n                     placeholder=\"Period To\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('end_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"due_date_from.value\">\r\n          <span class=\"tag__title\">Due Date From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"due_date_from\" [matDatepicker]=\"dueFromDate\"\r\n                     placeholder=\"Due Date From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('due_date_from')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"due_date_to.value\">\r\n          <span class=\"tag__title\">Due Date To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"due_date_to\" [matDatepicker]=\"dueToDate\"\r\n                     placeholder=\"Due Date To\"\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"category_id.value\">\r\n          <span class=\"tag__title\">Category :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select [multiple]=\"true\" formControlName=\"category_id\" placeholder=\"Category\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let category of categoryData;\" [value]=\"category.key\">{{category.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('category_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"related_entity.value\">\r\n          <span class=\"tag__title\">Related Entity :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"related_entity\" placeholder=\"Related Entity\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n               <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">{{yesNo.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('related_entity')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"technical_account_manager.value\">\r\n          <span class=\"tag__title\">TAM :</span>\r\n          <span>\r\n            <ng-select [items]=\"tamList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"TAM\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('technical_account_manager')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"team_member.value\">\r\n          <span class=\"tag__title\">Team member :</span>\r\n          <span>\r\n            <ng-select [items]=\"staffList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Team Member\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"team_member\">\r\n            </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('team_member')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"additional_assignee.value\">\r\n          <span class=\"tag__title\">Additional staff :</span>\r\n          <span>\r\n             <ng-select [items]=\"userList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"userfullname\"\r\n                        placeholder=\"Additional Staff\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                        formControlName=\"additional_assignee\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('additional_assignee')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\" *ngIf=\"\r\n          entity_id.value || parent_id.value\r\n          || (master_activity_id.value && master_activity_id.value.length)\r\n          || (task_id.value && task_id.value.length)\r\n          || frequency_id.value\r\n          || start_date.value\r\n          || end_date.value\r\n          || due_date_to.value\r\n          || due_date_from.value\r\n          || category_id.value\r\n          || related_entity.value\r\n          || technical_account_manager.value\r\n          || team_member.value\r\n          || additional_assignee.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n  </div>\r\n\r\n  <!--my worksheet container html start-->\r\n  <div class=\"view-worksheet-tab-container\">\r\n    <div class=\"expand-grid\">\r\n      <div>\r\n        <div class=\"expand-grid__thead\">\r\n          <table>\r\n            <thead>\r\n            <tr>\r\n              <th width=\"6%\">Sr.No.</th>\r\n              <th width=\"12%\">Parent Trading Name</th>\r\n              <th width=\"10%\" (click)=\"getSortData('trading_name',\r\n            (sortBy === 'trading_name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Client Name\r\n                <i *ngIf=\"sortBy === 'trading_name'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'trading_name'),\r\n                 'icon-up' : ((sortBy === 'trading_name') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'trading_name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"10%\" (click)=\"getSortData('task_id',\r\n              (sortBy === 'task_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Task\r\n                <i *ngIf=\"sortBy === 'task_id'\" [ngClass]=\"{'material-icons': true,\r\n                  'active' : (sortBy === 'task_id'),\r\n                   'icon-up' : ((sortBy === 'task_id') && (sortOrder === 'asc')),\r\n                   'icon-down' : true}\">\r\n                  {{(sortBy === 'task_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"5%\" (click)=\"getSortData('frequency_id',\r\n            (sortBy === 'frequency_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Frequency\r\n                <i *ngIf=\"sortBy === 'frequency_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'frequency_id'),\r\n                 'icon-up' : ((sortBy === 'frequency_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'frequency_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n              <th width=\"9%\">Period Date\r\n                <mat-icon [matTooltip]=\"'Period Start Date & End Date'\" class=\"v-align-middle gray-color\">info\r\n                </mat-icon>\r\n              </th>\r\n\r\n              <th width=\"9%\" (click)=\"getSortData('due_date',\r\n            (sortBy === 'due_date') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Reminder/ Due Date\r\n                <i *ngIf=\"sortBy === 'due_date'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'due_date'),\r\n                 'icon-up' : ((sortBy === 'due_date') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'due_date') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n              <th width=\"9%\">Notes\r\n              </th>\r\n              <th width=\"5%\">Units</th>\r\n\r\n              <th width=\"9%\" (click)=\"getSortData('status_id',\r\n            (sortBy === 'status_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Status\r\n                <i *ngIf=\"sortBy === 'status_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'status_id'),\r\n                 'icon-up' : ((sortBy === 'status_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'status_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"11%\">Staff\r\n              </th>\r\n\r\n              <th width=\"5%\">Action</th>\r\n            </tr>\r\n            </thead>\r\n          </table>\r\n        </div>\r\n        <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n          <table *ngIf=\"worksheetListData.length\">\r\n            <tbody [ngClass]=\"{'red-tr' : data | dateCompare}\"\r\n                   *ngFor=\"let data of worksheetListData; let i = index;\">\r\n            <tr [ngClass]=\"{'is-active-row' : trIndex === i}\" class=\"row-data\">\r\n              <td width=\"6%\">\r\n                <a class=\"open-inner-data\" (click)=\"openRow(i)\">\r\n                  <mat-icon [ngClass]=\"{'is-open' : trIndex === i}\" class=\"material-icons\">keyboard_arrow_down\r\n                  </mat-icon>\r\n                </a>\r\n                {{+pageSize * (pageIndex) + i + 1}}\r\n                <mat-icon *ngIf=\"data?.discontinue_stage == 1\" class=\"red-color v-align-middle\"\r\n                          [matTooltip]=\"'Discontinue Process Initiated'\">block\r\n                </mat-icon>\r\n              </td>\r\n              <td width=\"12%\" class=\"word-break\">{{data?.parent_name}}\r\n              </td>\r\n              <td width=\"10%\" class=\"word-break\">{{data?.trading_name}}\r\n              </td>\r\n              <td width=\"10%\" class=\"word-break\">{{data?.task_id?.name}}</td>\r\n              <td width=\"5%\">{{data?.frequency_name}}</td>\r\n\r\n              <td width=\"9%\" class=\"date_no_border\">\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangePeriodStartEndDate\">\r\n                    <input matInput [value]=\"data?.start_date\" [matDatepicker]=\"pickerStart\" placeholder=\"Select Date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'start_date', 'value': $event.target.value, 'id': data.id})\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerStart></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!canChangePeriodStartEndDate\" class=\"readonly_date\">{{data?.start_date | date : 'dd-MM-yyyy'}}</span>\r\n                </div>\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangePeriodStartEndDate\">\r\n                    <input matInput [matDatepicker]=\"pickerEnd\" (click)=\"pickerEnd.open()\" placeholder=\"Select Date\"\r\n                           [value]=\"data.end_date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'end_date', 'value': $event.target.value, 'id': data.id})\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerEnd></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!canChangePeriodStartEndDate\">{{data?.end_date | date : 'dd-MM-yyyy'}}</span>\r\n                </div>\r\n              </td>\r\n              <td width=\"9%\" class=\"date_no_border\">\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"tabID['add_edit']\">\r\n                    <input matInput [matDatepicker]=\"reminderDate\" (click)=\"reminderDate.open()\"\r\n                           [value]=\"data.reminder_date && data.reminder_date !== '0000-00-00' ? (data.reminder_date | date : 'dd-MM-yyyy') : ''\" placeholder=\"Select Date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'reminder_date', 'value':$event.target.value, 'id': data.id})\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"reminderDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #reminderDate></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!tabID['add_edit']\"\r\n                        class=\"readonly_date\">{{data.reminder_date && data.reminder_date !== '0000-00-00' ? (data.reminder_date | date : 'dd-MM-yyyy') : ''}}</span>\r\n                </div>\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangeDueDate\">\r\n                    <input matInput [matDatepicker]=\"dueDate\" (click)=\"dueDate.open()\" [value]=\"data.due_date\"\r\n                           placeholder=\"Select Date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'due_date', 'value':$event.target.value, 'id': data.id})\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDate></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!canChangeDueDate\">{{data.due_date | date : 'dd-MM-yyyy'}}</span>\r\n                </div>\r\n              </td>\r\n\r\n              <td width=\"9%\" class=\"word-break\">\r\n                <div ellipsis=\"Read More..\" class=\"multiline-ellipsis\" (click)=\"onWorksheetNotesDialog(data)\"\r\n                     (ellipsis-click-more)=\"on()\" *ngIf=\"data?.notes\">\r\n                  {{data?.notes}}\r\n                </div>\r\n                <a (click)=\"onWorksheetNotesDialog(data)\" *ngIf=\"!data?.notes\" class=\"cursor-pointer\">Add</a>\r\n              </td>\r\n              <td width=\"5%\" class=\"text-center\"><span\r\n                class=\"label-gray-bg-color\"> {{data?.timesheet_total_unit}}</span></td>\r\n\r\n              <td width=\"9%\" class=\"no-float-label\">\r\n                <mat-form-field [floatLabel]=\"'never'\">\r\n                  <mat-select placeholder=\"Status\" [value]=\"data.status_id.id\"\r\n                              (selectionChange)=\"updateInlineFormDates({'key':'status_id', 'value': $event.value, 'id': data.id})\">\r\n                    <mat-option *ngFor=\"let status of worksheetStatusList;\" [value]=\"status?.id\"\r\n                                disabled=\"{{status?.is_right === 1 ? false : true}}\">\r\n                      {{status.status_name}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </td>\r\n              <td width=\"11%\">\r\n                <div class=\"word-break\">\r\n                  <div *ngFor=\"let userData of data.allocation | teamListFormate; let j = index\">\r\n                    <div *ngIf=\"userData && (userData.key === 'TM' || userData.key === 'TAM')\">\r\n                      <span class=\"fw-500\">{{userData.key}}:</span>\r\n                      <span>{{userData.value}}</span>\r\n                    </div>\r\n                    <div *ngIf=\"!userData\"> Not specify</div>\r\n                  </div>\r\n                  <div *ngIf=\"data.worksheet_additional_assignee\">\r\n                    <span class=\"fw-500\">Add. Assignee:</span>\r\n                    <span>{{data.worksheet_additional_assignee.userfullname}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"data.worksheet_peerreviewer\">\r\n                    <span class=\"fw-500\">Peer Reviewer:</span>\r\n                    <span>{{data.worksheet_peerreviewer.created_by}}</span>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td width=\"5%\">\r\n                <ul>\r\n                  <li>\r\n                    <a (click)=\"onEditTaskCheckList(data)\" *ngIf=\"data?.taskchecklist === 1\" class=\"red-color\"\r\n                       [matTooltip]=\"'Task checklist'\"><i\r\n                      class=\"material-icons\">playlist_add_check</i></a>\r\n                    <a>\r\n                      <mat-icon [matMenuTriggerFor]=\"menuaction\">more_vert</mat-icon>\r\n                      <mat-menu #menuaction=\"matMenu\" class=\"column-menu\">\r\n                        <button mat-menu-item class=\"menu-header\">\r\n                          <h3>Action</h3>\r\n                        </button>\r\n                        <button mat-menu-item (click)=\"openWorksheetStatusLogDialog(data)\">\r\n                          <mat-icon>history</mat-icon>\r\n                          Worksheet status log\r\n                        </button>\r\n                        <button mat-menu-item (click)=\"onAddTimeSheet(data)\"\r\n                                *ngIf=\"userInfo?.user_timesheet_fillup_flag === 1\">\r\n                          <mat-icon>alarm_add</mat-icon>\r\n                          Add Timesheet\r\n                        </button>\r\n                        <button mat-menu-item (click)=\"onAddUsersTimeSheet(data)\"\r\n                                *ngIf=\"userInfo?.user_timesheet_fillup_flag === 1 && isAddUserTimeSheet\">\r\n                          <mat-icon>person_add</mat-icon>\r\n                          Add User Timesheet\r\n                        </button>\r\n                        <button mat-menu-item (click)=\"onViewUserTimesheet(data)\">\r\n                          <mat-icon>remove_red_eye</mat-icon>\r\n                          View User Timesheet\r\n                        </button>\r\n                      </mat-menu>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"trIndex === i\" class=\"inner-data\">\r\n              <div class=\"row PT-10\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"inner-data__view-notes\">\r\n                    <div>Notes</div>\r\n                    <div>{{data.notes}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"inner-data__view\">\r\n                    <div>Category</div>\r\n                    <div>{{getCategoryName(data.category_id)}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <span *ngFor=\"let userData of data.allocation | teamListFormate;\">\r\n                    <span *ngIf=\"userData && (userData.key !== 'TM' && userData.key !== 'TAM')\">\r\n                    <div class=\"inner-data__view\">\r\n                        <div>{{userData.key}}</div>\r\n                        <div>{{userData.value}}</div>\r\n                    </div>\r\n                      </span>\r\n                      </span>\r\n                </div>\r\n              </div>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"expand-grid__tfoot\" *ngIf=\"worksheetListData.length\">\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"worksheetListData.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- review on knock back worksheet html over-->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/completed-peer-review-worksheet/completed-peer-review-worksheet.component.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/completed-peer-review-worksheet/completed-peer-review-worksheet.component.scss ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vcGVlci1yZXZpZXctd29ya3NoZWV0LWxpc3RpbmcvY29tcGxldGVkLXBlZXItcmV2aWV3LXdvcmtzaGVldC9jb21wbGV0ZWQtcGVlci1yZXZpZXctd29ya3NoZWV0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/completed-peer-review-worksheet/completed-peer-review-worksheet.component.ts":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/completed-peer-review-worksheet/completed-peer-review-worksheet.component.ts ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: CompletedPeerReviewWorksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedPeerReviewWorksheetComponent", function() { return CompletedPeerReviewWorksheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _peer_review_worksheet_listing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../peer-review-worksheet-listing.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/peer-review-worksheet-listing.component.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _worksheet_dashboard_action_worksheet_status_log_dialog_worksheet_status_log_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _worksheet_dashboard_action_worksheet_notes_dialog_worksheet_notes_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component.ts");
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



















var CompletedPeerReviewWorksheetComponent = /** @class */ (function (_super) {
    __extends(CompletedPeerReviewWorksheetComponent, _super);
    function CompletedPeerReviewWorksheetComponent(_fb, dialog, _commonCrudService, _router, _sharedObjService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this._commonCrudService = _commonCrudService;
        _this._router = _router;
        _this._sharedObjService = _sharedObjService;
        _this._sharedService = _sharedService;
        // Constant Variables
        _this.enumView = _peer_review_worksheet_listing_component__WEBPACK_IMPORTED_MODULE_1__["Views"];
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
        _this.allocatedCount = 0;
        _this.unAllocatedCount = 0;
        _this.selectedDataMain = 'all';
        _this.clientList = [];
        _this.filteredTradingClientList = [];
        _this.clientListParent = [];
        _this.frequencyList = [];
        _this.taskDataMain = [];
        _this.categoryData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["category"];
        _this.staffList = [];
        _this.tamList = [];
        _this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNo"];
        _this.worksheetLockList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["worksheetStatusLog"];
        _this.PeriodFromValue = null;
        _this.PeriodToValue = null;
        _this.DueDateFromValue = null;
        _this.DueDateToValue = null;
        _this.noteToUpdate = [];
        // pagination Data
        _this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY;
        _this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        _this.isOpenHistoryDialog = false;
        _this.isOpenFilterView = false;
        _this.isOpenFilter = false;
        _this.equalJSON = { 'status_id': 23 };
        _this.likeJSON = {};
        _this.inJSON = {};
        // State variables
        _this.trIndex = -1;
        _this.isPlay = [];
        _this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.selectedWorksheetIDs = [];
        _this.selectAllWorksheetIDS = false;
        _this.isMultipleStatusUpdate = false;
        _this.isMultipleWorksheetDelete = false;
        _this.isAllocatereviewer = false;
        _this.canChangeDueDate = false;
        _this.canChangePeriodStartEndDate = false;
        _this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
        _this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
        _this.todayDate = '';
        _this.typeData = '';
        _this.tabIDWorksheetHierarchy = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].WORKFLOW_MASTERACTIVITY;
        _this.tabIDWorksheetTraining = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].WORKFLOW_WORKSHEETTRAINING;
        _this.tabIDWorksheetSubClientList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].WORKFLOW_SUBCLIENTLIST;
        _this.tabIDWorksheetReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
        _this.tabIDWorksheetPeerReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
        _this.tabIDWorksheetMasterChecklist = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].WORKFLOW_MASTERCHECKLIST;
        _this.tabIDWorksheetMultiplueStatusChange = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;
        _this.isAddUserTimeSheet = false;
        _this.tabTimeSheetID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].WORKFLOW_TIMESHEET;
        return _this;
    }
    Object.defineProperty(CompletedPeerReviewWorksheetComponent.prototype, "parent_id", {
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedPeerReviewWorksheetComponent.prototype, "entity_id", {
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedPeerReviewWorksheetComponent.prototype, "master_activity_id", {
        get: function () {
            return this.filterForm.get('master_activity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedPeerReviewWorksheetComponent.prototype, "task_id", {
        get: function () {
            return this.filterForm.get('task_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedPeerReviewWorksheetComponent.prototype, "frequency_id", {
        get: function () {
            return this.filterForm.get('frequency_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedPeerReviewWorksheetComponent.prototype, "start_date", {
        get: function () {
            return this.filterForm.get('start_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedPeerReviewWorksheetComponent.prototype, "end_date", {
        get: function () {
            return this.filterForm.get('end_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedPeerReviewWorksheetComponent.prototype, "due_date_from", {
        get: function () {
            return this.filterForm.get('due_date_from');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedPeerReviewWorksheetComponent.prototype, "due_date_to", {
        get: function () {
            return this.filterForm.get('due_date_to');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedPeerReviewWorksheetComponent.prototype, "category_id", {
        get: function () {
            return this.filterForm.get('category_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedPeerReviewWorksheetComponent.prototype, "related_entity", {
        get: function () {
            return this.filterForm.get('related_entity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedPeerReviewWorksheetComponent.prototype, "technical_account_manager", {
        get: function () {
            return this.filterForm.get('technical_account_manager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedPeerReviewWorksheetComponent.prototype, "team_member", {
        get: function () {
            return this.filterForm.get('team_member');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedPeerReviewWorksheetComponent.prototype, "additional_assignee", {
        get: function () {
            return this.filterForm.get('additional_assignee');
        },
        enumerable: true,
        configurable: true
    });
    CompletedPeerReviewWorksheetComponent.prototype.ngOnInit = function () {
        this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
        this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
        this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
        this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
        this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
        this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
        this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
        this.userInfo = this._sharedService.getUser();
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_12__(new Date()).format('YYYY-MM-DD');
        this.isMultipleStatusUpdate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetstatuschange', 1);
        this.isMultipleWorksheetDelete = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetdelete', 1);
        this.isAllocatereviewer = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'allocatereviewer', 1);
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
    CompletedPeerReviewWorksheetComponent.prototype.getDropdownData = function () {
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
        this._sharedObjService.getUserList({ 'records': 'all' }, { compare: { equal: { is_active: 1 } } }).subscribe(function (response) {
            _this.userList = response;
            _this.staffList = _this.userList.filter(function (data) { return (data['designation_id']) ? data['designation_id']['id'] === 10 : 0; });
            _this.tamList = _this.userList.filter(function (data) { return (data['designation_id']) ? data['designation_id']['id'] === 9 : 0; });
        });
    };
    /**
     * Get Worksheet Listing
     * @param pageNumber
     * @param key
     * @param val
     */
    CompletedPeerReviewWorksheetComponent.prototype.getWorksheetListing = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].PEER_REVIEW_WORKSHEET_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleWorksheetRespone(response);
        });
        // Get Counter
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].PEER_REVIEW_WORKSHEET_LISTING, {
            'type': 'allocate',
            'action': 'count'
        }, {}).subscribe(function (response) {
            _this.allocatedCount = response.payload.data.totalRecords;
        });
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].PEER_REVIEW_WORKSHEET_LISTING, {
            'type': 'unallocate',
            'action': 'count'
        }, {}).subscribe(function (response) {
            _this.unAllocatedCount = response.payload.data.totalRecords;
        });
    };
    /**
     * Handle Worksheet Response
     * @param response
     */
    CompletedPeerReviewWorksheetComponent.prototype.handleWorksheetRespone = function (response) {
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
    CompletedPeerReviewWorksheetComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            due_date_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            due_date_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
        this.advanceFilterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            due_date_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            due_date_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
    };
    /**
     * Add Edit Master Activity Dialog
     */
    CompletedPeerReviewWorksheetComponent.prototype.openAddEditMasterActivityDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_14__["ReviewActionAllocateReviewerDialog"], {
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
    CompletedPeerReviewWorksheetComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Pagination page change event
     * @param event
     */
    CompletedPeerReviewWorksheetComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getWorksheetListing(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Open quick menu
     * @param menuName
     */
    CompletedPeerReviewWorksheetComponent.prototype.onOpenQuickMenu = function (menuName) {
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
            case 'worksheetHierarchy':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_HIERARCHY]);
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
    /**
     * On home page route
     */
    CompletedPeerReviewWorksheetComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Reset All Filters
     */
    CompletedPeerReviewWorksheetComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.filterForm.reset();
        this.advanceFilterForm.reset();
        this.likeJSON = {};
        this.equalJSON = { 'status_id': 23 };
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
    CompletedPeerReviewWorksheetComponent.prototype.onKeydownHandler = function (event) {
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
    CompletedPeerReviewWorksheetComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
        if (this.typeData) {
            params['type'] = this.typeData;
        }
        return params;
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    CompletedPeerReviewWorksheetComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getWorksheetListing(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    CompletedPeerReviewWorksheetComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        if (this.PeriodFromValue || this.DueDateFromValue) {
            filter['greaterthanequal'] = {};
        }
        if (this.PeriodToValue || this.DueDateToValue) {
            filter['lessthanequal'] = {};
        }
        if (this.PeriodFromValue) {
            filter['greaterthanequal']['start_date'] = moment__WEBPACK_IMPORTED_MODULE_12__(this.PeriodFromValue).format('YYYY-MM-DD');
        }
        if (this.PeriodToValue) {
            filter['lessthanequal']['end_date'] = moment__WEBPACK_IMPORTED_MODULE_12__(this.PeriodToValue).format('YYYY-MM-DD');
        }
        if (this.DueDateFromValue) {
            filter['greaterthanequal']['due_date'] = moment__WEBPACK_IMPORTED_MODULE_12__(this.DueDateFromValue).format('YYYY-MM-DD');
        }
        if (this.DueDateToValue) {
            filter['lessthanequal']['due_date'] = moment__WEBPACK_IMPORTED_MODULE_12__(this.DueDateToValue).format('YYYY-MM-DD');
        }
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_15__["CommonFunctions"].isEmpty(filter)) {
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
    CompletedPeerReviewWorksheetComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        if (this.tamId) {
            params['technical_account_manager'] = this.tamId;
        }
        if (this.teamId) {
            params['team_member'] = this.teamId;
        }
        if (this.assigneeId) {
            params['additional_assignee'] = this.assigneeId;
        }
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].PEER_REVIEW_WORKSHEET_LISTING, params, this.getSearchParam(), 'Completed Peer Review Worksheet ', 0).subscribe(function (response) {
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    CompletedPeerReviewWorksheetComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'technical_account_manager': form.value['technical_account_manager'],
                'team_member': form.value['team_member'],
                'additional_assignee': form.value['additional_assignee']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    CompletedPeerReviewWorksheetComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = { 'status_id': 23 };
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
                        || key === 'related_entity') {
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
     * Get User List
     */
    CompletedPeerReviewWorksheetComponent.prototype.getUserList = function () {
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
    CompletedPeerReviewWorksheetComponent.prototype.onClearTag = function (elementName, JsonElementName) {
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
            || elementName === 'related_entity') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'category_id' || elementName === 'master_activity_id' || elementName === 'task_id') {
            delete this.inJSON[elementName];
        }
        this.getWorksheetListing(1, 'due_date', 'asc');
    };
    /**
     * Get Task Filter List
     * @param value
     */
    CompletedPeerReviewWorksheetComponent.prototype.getTaskFilterList = function (value) {
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
    CompletedPeerReviewWorksheetComponent.prototype.openAddEditSubActivityDialog = function () {
        var dialogRef = this.dialog.open(_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_14__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Open filter
     */
    CompletedPeerReviewWorksheetComponent.prototype.onOpenFilter = function () {
        this.activeView = this.enumView.FILTER_VIEW_MAIN;
    };
    /**
     * Expand row table
     * @param i
     */
    CompletedPeerReviewWorksheetComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Close filter
     */
    CompletedPeerReviewWorksheetComponent.prototype.onCloseFilter = function () {
        this.activeView = null;
    };
    /**
     * Close modal
     * @param event
     */
    CompletedPeerReviewWorksheetComponent.prototype.onCloseDialog = function (event) {
        this.activeView = event;
    };
    /**
     * On delete table row
     */
    CompletedPeerReviewWorksheetComponent.prototype.onDeleteItem = function (event) {
        this.deleteItem.emit(event);
    };
    /**
     * View timesheet page redirect
     */
    CompletedPeerReviewWorksheetComponent.prototype.onViewTimeSheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * Task CEhcklist page redirect
     */
    CompletedPeerReviewWorksheetComponent.prototype.onTaskChecklist = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * redirection worksheet dashboard
     */
    CompletedPeerReviewWorksheetComponent.prototype.onWorksheetDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * Review Allocation page redirection
     */
    CompletedPeerReviewWorksheetComponent.prototype.openReviewAllocateDialog = function () {
        var dialogRef = this.dialog.open(_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_14__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Get All Status
     */
    CompletedPeerReviewWorksheetComponent.prototype.getAllStatus = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].GET_ALL_STATUS, {}, {}).subscribe(function (response) {
            _this.statusArray = response.payload.data;
        });
    };
    /**
     * Update Due Date + Period Start + End Date + Reminder Date
     * @param object
     */
    CompletedPeerReviewWorksheetComponent.prototype.updateInlineFormDates = function (object) {
        var _a;
        var keyData = object.key;
        if (keyData === 'start_date' || keyData === 'end_date' || keyData === 'due_date' || keyData === 'reminder_date') {
            object.value = moment__WEBPACK_IMPORTED_MODULE_12__(object.value).format('YYYY-MM-DD');
        }
        if (object.value) {
            // Update worksheet date
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].UPDATE_WORKSHEET, object.id, (_a = {},
                _a[object.key] = object.value,
                _a['_method'] = 'put',
                _a)).subscribe(function (response) {
            });
        }
    };
    /**
     * On Change Update Notes Param
     * @param notes
     */
    CompletedPeerReviewWorksheetComponent.prototype.onChangeUpdateNotesParam = function (notes, id) {
        this.noteToUpdate[id] = notes;
    };
    /**
     * On Submit Update Notes
     * @param id
     */
    CompletedPeerReviewWorksheetComponent.prototype.onSubmitUpdateNotes = function (id) {
        var _this = this;
        var notes = this.noteToUpdate[id];
        if (notes) {
            // Update worksheet date
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].UPDATE_WORKSHEET, id, {
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
    CompletedPeerReviewWorksheetComponent.prototype.openWorksheetStatusLogDialog = function (worksheetData) {
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
    CompletedPeerReviewWorksheetComponent.prototype.onAddTimeSheet = function (worksheetData) {
        if (worksheetData) {
            this._sharedService.setWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["GLOBALDATAKEYS"].WORKSHEET_ITEM_DATA, worksheetData);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].ADD_TIMESHEET, '_blank');
            });
            // this._router.navigate(['/' + AdminRoutes.ADD_TIMESHEET]);
        }
    };
    /**
     * On users timesheet page redirect
     */
    CompletedPeerReviewWorksheetComponent.prototype.onAddUsersTimeSheet = function (worksheetData) {
        if (worksheetData) {
            this._sharedService.setWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["GLOBALDATAKEYS"].WORKSHEET_ITEM_DATA, worksheetData);
            // this._router.navigate(['/' + AdminRoutes.ADD_USERS_TIMESHEET]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].ADD_USERS_TIMESHEET, '_blank');
            });
        }
    };
    /**
     * On click of view timesheet
     * @param worksheetData
     */
    CompletedPeerReviewWorksheetComponent.prototype.onViewUserTimesheet = function (worksheetData) {
        var jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_15__["convertURLParamToEncode"])({
            'entity_id': worksheetData.entity_id,
            'start_date': worksheetData.start_date,
            'end_date': worksheetData.end_date,
            'viewTimesheet': 1,
            'task_id': worksheetData.task_id.id
        });
        if (jsonData) {
            this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET], { queryParams: jsonData });
        }
    };
    /**
     * On task checklist redirect
     */
    CompletedPeerReviewWorksheetComponent.prototype.onEditTaskCheckList = function (data) {
        this._sharedService.setChecklistViewData(null);
        this._sharedService.setChecklistViewData(data);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].TASK_CHECKLIST]);
    };
    CompletedPeerReviewWorksheetComponent.prototype.onPreviewEmail = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].TASK_CHECKLIST_EMAIL_PREVIEW]);
    };
    CompletedPeerReviewWorksheetComponent.prototype.onAllocateAssigneeDialog = function (worksheet) {
        var _this = this;
        var dialogRef = this.dialog.open(_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_14__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
            data: {
                allocateData: worksheet,
                isadditionalAssignee: 3
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getWorksheetListing(1, 'due_date', 'asc');
        });
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    CompletedPeerReviewWorksheetComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Status List
     * @param {number} cat_id
     * @returns {string}
     */
    CompletedPeerReviewWorksheetComponent.prototype.getCategoryName = function (cat_id) {
        var val = this.categoryData.filter(function (elem) { return elem.key === Number(cat_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Select All Item of Event
     * @param event
     */
    CompletedPeerReviewWorksheetComponent.prototype.onSelectAllItem = function (event) {
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
    CompletedPeerReviewWorksheetComponent.prototype.onSelectItem = function (event, id) {
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
    CompletedPeerReviewWorksheetComponent.prototype.onConfirmationDialogDeleteWorksheet = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete worksheet?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value && _this.selectedWorksheetIDs) {
                var params = _this.selectedWorksheetIDs.join(',');
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].DELETE_WORKSHEET, 0, params).subscribe(function (response) {
                    _this.selectedWorksheetIDs = [];
                    _this.getWorksheetListing(1, 'due_date', 'asc');
                });
            }
        });
    };
    /**
     * redirection PeerReviewWorksheet page
     */
    CompletedPeerReviewWorksheetComponent.prototype.onPeerReviewWorksheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
    };
    /**
     * Worksheet Notes Dialog
     * @param worksheetData
     */
    CompletedPeerReviewWorksheetComponent.prototype.onWorksheetNotesDialog = function (worksheetData) {
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
     * On Change Parent Entity
     * @param event
     */
    CompletedPeerReviewWorksheetComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CompletedPeerReviewWorksheetComponent.prototype, "deleteItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CompletedPeerReviewWorksheetComponent.prototype, "onKeydownHandler", null);
    CompletedPeerReviewWorksheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-completed-peer-review-worksheet',
            template: __webpack_require__(/*! ./completed-peer-review-worksheet.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/completed-peer-review-worksheet/completed-peer-review-worksheet.component.html"),
            styles: [__webpack_require__(/*! ./completed-peer-review-worksheet.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/completed-peer-review-worksheet/completed-peer-review-worksheet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__["CommonCrudService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"]])
    ], CompletedPeerReviewWorksheetComponent);
    return CompletedPeerReviewWorksheetComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/peer-review-worksheet-listing.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/peer-review-worksheet-listing.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--peer review worksheet listing container html start-->\r\n<div class=\"admin-peer-review-worksheet-listing-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onWorksheetDashboard()\">WORKSHEET</a></span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">PEER REVIEW REQUIRE WORKSHEET</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 PR-0\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('addNewWorksheet')\"\r\n                          *ngIf=\"worksheetTabIDData['add_edit']\">Add New Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayWorksheet')\">Today's Worksheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayTimesheet')\">Today's Timesheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetHierarchy')\"\r\n                          *ngIf=\"tabDataWorksheetHierarchy['view']\">Worksheet Hierarchy\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('subClientList')\"\r\n                          *ngIf=\"tabDataWorksheetSubClientList['view']\">Sub Client List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetMasterChecklist')\"\r\n                          *ngIf=\"tabDataWorksheetMasterChecklist['view']\">Worksheet Master Checklist\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                          *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('trainingList')\"\r\n                          *ngIf=\"tabDataWorksheetTraining['view']\">Training List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                          *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                    Worksheet\r\n                  </button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- End button container -->\r\n\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 leave-type-list\">\r\n          <ul>\r\n            <li class=\"blue-drop-button\">\r\n              <button type=\"button\" class=\"btn-primary btn-bordered\" (click)=\"onCompletedPeerReviewWorksheet()\">\r\n                Completed peer review worksheet\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <a class=\"red-color list-alignment\"><i class=\"material-icons\">fiber_manual_record</i> Indicates Overdue\r\n                Task</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onToggleFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li (click)=\"downloadExcel()\" *ngIf=\"tabData['export']\">\r\n              <a>\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc\r\n          <mat-icon class=\"material-icons\">close</mat-icon>\r\n        </span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientListParent\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Parent Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         (change)=\"onChangeParentEntity($event);\"\r\n                         formControlName=\"parent_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"entity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"masterActivityList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Master activity\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         (change)=\"getTaskFilterList($event)\"\r\n                         formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"taskList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Task\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         formControlName=\"task_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\">\r\n                  <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                    {{frequency.frequency_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"start_date\" [matDatepicker]=\"periodFrom\"\r\n                           placeholder=\"Period From\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"end_date\" [matDatepicker]=\"periodTo\" placeholder=\"Period To\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"due_date_from\" [matDatepicker]=\"dueDateFrom\"\r\n                           placeholder=\"Due date From\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDateFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDateFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"due_date_to\" [matDatepicker]=\"dueDateTo\"\r\n                           placeholder=\"Due date To\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDateTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDateTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"category_id\" [multiple]=\"true\" placeholder=\"Category\">\r\n                  <mat-option *ngFor=\"let category of categoryData;\" [value]=\"category.key\">{{category.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"related_entity\" placeholder=\"Related Entity\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">{{yesNo.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"tamList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"TAM\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"staffList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Team Member\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"team_member\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Additional Staff\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"additional_assignee\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 MT-20 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button [disabled]=\"filterForm.invalid\" type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"parent_id.value\">\r\n          <span class=\"tag__title\">Parent Trading Name :</span>\r\n          <span>\r\n             <ng-select [items]=\"clientListParent\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"parent_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);onChangeParentEntity($event);\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"entity_id.value\">\r\n          <span class=\"tag__title\">Client name :</span>\r\n          <span>\r\n             <ng-select class=\"custom\" [items]=\"clientList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"entity_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"master_activity_id.value && master_activity_id.value.length\">\r\n          <span class=\"tag__title\">Master activity :</span>\r\n          <span>\r\n            <ng-select [items]=\"masterActivityList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);getTaskFilterList($event);\"\r\n                       formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('master_activity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"task_id.value && task_id.value.length\">\r\n          <span class=\"tag__title\">Task :</span>\r\n          <span>\r\n            <ng-select [items]=\"taskList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Task\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"task_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('task_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"frequency_id.value\">\r\n          <span class=\"tag__title\">Frequency :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n               <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                    {{frequency.frequency_name}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('frequency_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"start_date.value\">\r\n          <span class=\"tag__title\">Period From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"start_date\" [matDatepicker]=\"perdiodFromDate\"\r\n                     placeholder=\"Period From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('start_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"end_date.value\">\r\n          <span class=\"tag__title\">Period To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"end_date\" [matDatepicker]=\"perdiodToDate\"\r\n                     placeholder=\"Period To\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('end_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"due_date_from.value\">\r\n          <span class=\"tag__title\">Due Date From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"due_date_from\" [matDatepicker]=\"dueFromDate\"\r\n                     placeholder=\"Due Date From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('due_date_from')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"due_date_to.value\">\r\n          <span class=\"tag__title\">Due Date To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"due_date_to\" [matDatepicker]=\"dueToDate\"\r\n                     placeholder=\"Due Date To\"\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"category_id.value\">\r\n          <span class=\"tag__title\">Category :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select [multiple]=\"true\" formControlName=\"category_id\" placeholder=\"Category\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let category of categoryData;\" [value]=\"category.key\">{{category.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('category_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"related_entity.value\">\r\n          <span class=\"tag__title\">Related Entity :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"related_entity\" placeholder=\"Related Entity\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n               <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">{{yesNo.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('related_entity')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"technical_account_manager.value\">\r\n          <span class=\"tag__title\">TAM :</span>\r\n          <span>\r\n            <ng-select class=\"custom\" [items]=\"tamList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"TAM\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('technical_account_manager')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"team_member.value\">\r\n          <span class=\"tag__title\">Team member :</span>\r\n          <span>\r\n            <ng-select class=\"custom\" [items]=\"staffList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Team Member\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"team_member\">\r\n            </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('team_member')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"additional_assignee.value\">\r\n          <span class=\"tag__title\">Additional staff :</span>\r\n          <span>\r\n             <ng-select class=\"custom\" [items]=\"userList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"userfullname\"\r\n                        placeholder=\"Additional Staff\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                        formControlName=\"additional_assignee\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('additional_assignee')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\" *ngIf=\"\r\n          entity_id.value || parent_id.value\r\n\t\t      || (master_activity_id.value && master_activity_id.value.length)\r\n          || (task_id.value && task_id.value.length)\r\n          || frequency_id.value\r\n          || start_date.value\r\n          || end_date.value\r\n          || due_date_to.value\r\n          || due_date_from.value\r\n          || category_id.value\r\n          || related_entity.value\r\n          || technical_account_manager.value\r\n          || team_member.value\r\n          || additional_assignee.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n  </div>\r\n\r\n  <!--my worksheet container html start-->\r\n  <div class=\"view-worksheet-tab-container\">\r\n    <div class=\"expand-grid\">\r\n      <div class=\"expand-grid\">\r\n        <div>\r\n          <div class=\"expand-grid__thead\">\r\n            <table>\r\n              <thead>\r\n              <tr>\r\n                <th width=\"6%\">Sr.No.</th>\r\n                <th width=\"12%\">Parent Trading Name</th>\r\n                <th width=\"10%\" (click)=\"getSortData('trading_name',\r\n            (sortBy === 'trading_name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Client Name\r\n                  <i *ngIf=\"sortBy === 'trading_name'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'trading_name'),\r\n                 'icon-up' : ((sortBy === 'trading_name') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                    {{(sortBy === 'trading_name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n\r\n                <th width=\"10%\" (click)=\"getSortData('task_id',\r\n              (sortBy === 'task_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Task\r\n                  <i *ngIf=\"sortBy === 'task_id'\" [ngClass]=\"{'material-icons': true,\r\n                  'active' : (sortBy === 'task_id'),\r\n                   'icon-up' : ((sortBy === 'task_id') && (sortOrder === 'asc')),\r\n                   'icon-down' : true}\">\r\n                    {{(sortBy === 'task_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n\r\n                <th width=\"5%\" (click)=\"getSortData('frequency_id',\r\n            (sortBy === 'frequency_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Frequency\r\n                  <i *ngIf=\"sortBy === 'frequency_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'frequency_id'),\r\n                 'icon-up' : ((sortBy === 'frequency_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                    {{(sortBy === 'frequency_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n                <th width=\"9%\">Period Date\r\n                  <mat-icon [matTooltip]=\"'Period Start Date & End Date'\" class=\"v-align-middle gray-color\">info\r\n                  </mat-icon>\r\n                </th>\r\n\r\n                <th width=\"9%\" (click)=\"getSortData('due_date',\r\n            (sortBy === 'due_date') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Reminder/ Due Date\r\n                  <i *ngIf=\"sortBy === 'due_date'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'due_date'),\r\n                 'icon-up' : ((sortBy === 'due_date') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                    {{(sortBy === 'due_date') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n                <th width=\"9%\">Notes\r\n                </th>\r\n                <th width=\"5%\">Units</th>\r\n\r\n                <th width=\"9%\" (click)=\"getSortData('status_id',\r\n            (sortBy === 'status_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Status\r\n                  <i *ngIf=\"sortBy === 'status_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'status_id'),\r\n                 'icon-up' : ((sortBy === 'status_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                    {{(sortBy === 'status_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n\r\n                <th width=\"11%\">Staff\r\n                </th>\r\n                <th width=\"5%\">Action</th>\r\n              </tr>\r\n              </thead>\r\n            </table>\r\n          </div>\r\n          <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n            <table *ngIf=\"worksheetListData.length\">\r\n              <tbody [ngClass]=\"{'red-tr' : data | dateCompare}\"\r\n                     *ngFor=\"let data of worksheetListData; let i = index;\">\r\n              <tr [ngClass]=\"{'is-active-row' : trIndex === i}\" class=\"row-data\">\r\n                <td width=\"6%\">\r\n                  <a class=\"open-inner-data\" (click)=\"openRow(i)\">\r\n                    <mat-icon [ngClass]=\"{'is-open' : trIndex === i}\" class=\"material-icons\">keyboard_arrow_down\r\n                    </mat-icon>\r\n                  </a>\r\n                  {{+pageSize * (pageIndex) + i + 1}}\r\n                  <mat-icon *ngIf=\"data?.discontinue_stage == 1\" class=\"red-color v-align-middle\"\r\n                            [matTooltip]=\"'Discontinue Process Initiated'\">block\r\n                  </mat-icon>\r\n                </td>\r\n                <td width=\"12%\" class=\"word-break\">{{data?.parent_name}}\r\n                </td>\r\n                <td width=\"10%\" class=\"word-break\">{{data?.trading_name}}\r\n                </td>\r\n                <td width=\"10%\" class=\"word-break\">{{data?.task_id?.name}}</td>\r\n                <td width=\"5%\" class=\"text-center\">{{data?.frequency_name}}</td>\r\n                <td width=\"9%\" class=\"date_no_border\">\r\n                  <div>\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangePeriodStartEndDate\">\r\n                      <input matInput [value]=\"data?.start_date\" [matDatepicker]=\"pickerStart\" placeholder=\"Select Date\"\r\n                             (dateChange)=\"updateInlineFormDates({'key':'start_date', 'value': $event.target.value, 'id': data.id})\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #pickerStart></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <span *ngIf=\"!canChangePeriodStartEndDate\" class=\"readonly_date\">{{data?.start_date | date : 'dd-MM-yyyy'}}</span>\r\n                  </div>\r\n                  <div>\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangePeriodStartEndDate\">\r\n                      <input matInput [matDatepicker]=\"pickerEnd\" (click)=\"pickerEnd.open()\" placeholder=\"Select Date\"\r\n                             [value]=\"data.end_date\"\r\n                             (dateChange)=\"updateInlineFormDates({'key':'end_date', 'value': $event.target.value, 'id': data.id})\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #pickerEnd></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <span *ngIf=\"!canChangePeriodStartEndDate\">{{data?.end_date | date : 'dd-MM-yyyy'}}</span>\r\n                  </div>\r\n                </td>\r\n                <td width=\"9%\" class=\"date_no_border\">\r\n                  <div>\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"tabID['add_edit']\">\r\n                      <input matInput [matDatepicker]=\"reminderDate\" (click)=\"reminderDate.open()\"\r\n                             [value]=\"data.reminder_date && data.reminder_date !== '0000-00-00' ? (data.reminder_date | date : 'dd-MM-yyyy') : ''\" placeholder=\"Select Date\"\r\n                             (dateChange)=\"updateInlineFormDates({'key':'reminder_date', 'value':$event.target.value, 'id': data.id})\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"reminderDate\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #reminderDate></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <span *ngIf=\"!tabID['add_edit']\"\r\n                          class=\"readonly_date\">{{data.reminder_date && data.reminder_date !== '0000-00-00' ? (data.reminder_date | date : 'dd-MM-yyyy') : ''}}</span>\r\n                  </div>\r\n                  <div>\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangeDueDate\">\r\n                      <input matInput [matDatepicker]=\"dueDate\" (click)=\"dueDate.open()\" [value]=\"data.due_date\"\r\n                             placeholder=\"Select Date\"\r\n                             (dateChange)=\"updateInlineFormDates({'key':'due_date', 'value':$event.target.value, 'id': data.id})\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"dueDate\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #dueDate></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <span *ngIf=\"!canChangeDueDate\">{{data.due_date | date : 'dd-MM-yyyy'}}</span>\r\n                  </div>\r\n                </td>\r\n                <td width=\"9%\" class=\"word-break\">\r\n                  <div ellipsis=\"Read More..\" class=\"multiline-ellipsis\" (click)=\"onWorksheetNotesDialog(data)\"\r\n                       (ellipsis-click-more)=\"on()\" *ngIf=\"data?.notes\">\r\n                    {{data?.notes}}\r\n                  </div>\r\n                  <a (click)=\"onWorksheetNotesDialog(data)\" *ngIf=\"!data?.notes\" class=\"cursor-pointer\">Add</a>\r\n                </td>\r\n                <td width=\"5%\" class=\"text-center\"><span\r\n                  class=\"label-gray-bg-color\"> {{data?.timesheet_total_unit}}</span></td>\r\n                <td width=\"9%\" class=\"no-float-label\">\r\n                  <mat-form-field [floatLabel]=\"'never'\">\r\n                    <mat-select placeholder=\"Status\" [value]=\"data.status_id.id\"\r\n                                (selectionChange)=\"updateInlineFormDates({'key':'status_id', 'value': $event.value, 'id': data.id})\">\r\n                      <mat-option *ngFor=\"let status of worksheetStatusList;\" [value]=\"status?.id\"\r\n                                  disabled=\"{{status?.is_right === 1 ? false : true}}\">\r\n                        {{status.status_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </td>\r\n                <td width=\"11%\">\r\n                  <div class=\"word-break\">\r\n                    <div *ngFor=\"let userData of data.allocation | teamListFormate; let j = index\">\r\n                      <div *ngIf=\"userData && (userData.key === 'TM' || userData.key === 'TAM')\">\r\n                        <span class=\"fw-500\">{{userData.key}}:</span>\r\n                        <span>{{userData.value}}</span>\r\n                      </div>\r\n                      <div *ngIf=\"!userData\"> Not specify</div>\r\n                    </div>\r\n                    <div *ngIf=\"data.worksheet_additional_assignee\">\r\n                      <span class=\"fw-500\">Add. Assignee:</span>\r\n                      <span>{{data.worksheet_additional_assignee.userfullname}}</span>\r\n                    </div>\r\n                    <div *ngIf=\"data.worksheet_peerreviewer\">\r\n                      <span class=\"fw-500\">Peer Reviewer:</span>\r\n                      <span>{{data.worksheet_peerreviewer.created_by}}</span>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td width=\"5%\">\r\n                  <ul>\r\n                    <li>\r\n                      <a (click)=\"onEditTaskCheckList(data)\" *ngIf=\"data?.taskchecklist === 1\" class=\"red-color\"\r\n                         [matTooltip]=\"'Task checklist'\"><i\r\n                        class=\"material-icons\">playlist_add_check</i></a>\r\n                      <a>\r\n                        <mat-icon [matMenuTriggerFor]=\"menuaction\">more_vert</mat-icon>\r\n                        <mat-menu #menuaction=\"matMenu\" class=\"column-menu\">\r\n                          <button mat-menu-item class=\"menu-header\">\r\n                            <h3>Action</h3>\r\n                          </button>\r\n                          <button mat-menu-item (click)=\"openWorksheetStatusLogDialog(data)\">\r\n                            <mat-icon>history</mat-icon>\r\n                            Worksheet status log\r\n                          </button>\r\n                          <button mat-menu-item (click)=\"onAddTimeSheet(data)\"\r\n                                  *ngIf=\"userInfo?.user_timesheet_fillup_flag === 1\">\r\n                            <mat-icon>alarm_add</mat-icon>\r\n                            Add Timesheet\r\n                          </button>\r\n                          <button mat-menu-item (click)=\"onAddUsersTimeSheet(data)\"\r\n                                  *ngIf=\"userInfo?.user_timesheet_fillup_flag === 1 && isAddUserTimeSheet\">\r\n                            <mat-icon>person_add</mat-icon>\r\n                            Add User Timesheet\r\n                          </button>\r\n                          <button mat-menu-item (click)=\"onViewUserTimesheet(data)\">\r\n                            <mat-icon>remove_red_eye</mat-icon>\r\n                            View User Timesheet\r\n                          </button>\r\n                          <button mat-menu-item (click)=\"onAllocateAssigneeDialog(data)\"\r\n                                  *ngIf=\"isAllocatereviewer\">\r\n                            <mat-icon\r\n                              class=\"material-icons\"><span\r\n                              *ngIf=\"data.worksheet_reviewer === null\">person_outline</span>\r\n                              <span *ngIf=\"data.worksheet_reviewer !== null\">how_to_reg</span>\r\n                            </mat-icon>\r\n                            Allocate Peer Reviewer\r\n                          </button>\r\n                        </mat-menu>\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"trIndex === i\" class=\"inner-data\">\r\n                <div class=\"row PT-10\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"inner-data__view-notes\">\r\n                      <div>Notes</div>\r\n                      <div>{{data.notes}}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"inner-data__view\">\r\n                      <div>Category</div>\r\n                      <div>{{getCategoryName(data.category_id)}}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <span *ngFor=\"let userData of data.allocation | teamListFormate;\">\r\n                    <span *ngIf=\"userData && (userData.key !== 'TM' && userData.key !== 'TAM')\">\r\n                    <div class=\"inner-data__view\">\r\n                        <div>{{userData.key}}</div>\r\n                        <div>{{userData.value}}</div>\r\n                    </div>\r\n                      </span>\r\n                      </span>\r\n                  </div>\r\n                </div>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"expand-grid__tfoot\" *ngIf=\"worksheetListData.length\">\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"worksheetListData.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- review on knock back worksheet html over-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/peer-review-worksheet-listing.component.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/peer-review-worksheet-listing.component.scss ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1xdWljay1hY3Rpb24vcGVlci1yZXZpZXctd29ya3NoZWV0LWxpc3RpbmcvcGVlci1yZXZpZXctd29ya3NoZWV0LWxpc3RpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/peer-review-worksheet-listing.component.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/peer-review-worksheet-listing.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: Views, PeerReviewWorksheetListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerReviewWorksheetListingComponent", function() { return PeerReviewWorksheetListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _worksheet_dashboard_action_worksheet_status_log_dialog_worksheet_status_log_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _worksheet_dashboard_action_worksheet_notes_dialog_worksheet_notes_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component.ts");
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
var PeerReviewWorksheetListingComponent = /** @class */ (function (_super) {
    __extends(PeerReviewWorksheetListingComponent, _super);
    function PeerReviewWorksheetListingComponent(_fb, dialog, _commonCrudService, _router, _sharedObjService, _sharedService) {
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
        _this.allocatedCount = 0;
        _this.unAllocatedCount = 0;
        _this.selectedDataMain = 'all';
        _this.clientList = [];
        _this.clientListParent = [];
        _this.filteredTradingClientList = [];
        _this.frequencyList = [];
        _this.taskDataMain = [];
        _this.categoryData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["category"];
        _this.staffList = [];
        _this.tamList = [];
        _this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["yesNo"];
        _this.worksheetLockList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["worksheetStatusLog"];
        _this.PeriodFromValue = null;
        _this.PeriodToValue = null;
        _this.DueDateFromValue = null;
        _this.DueDateToValue = null;
        _this.noteToUpdate = [];
        // pagination Data
        _this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].PAGINATION_ARRAY;
        _this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        _this.isOpenHistoryDialog = false;
        _this.isOpenFilterView = false;
        _this.isOpenFilter = false;
        _this.equalJSON = { 'status_id': 22 };
        _this.likeJSON = {};
        _this.inJSON = {};
        // State variables
        _this.trIndex = -1;
        _this.isPlay = [];
        _this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.selectedWorksheetIDs = [];
        _this.selectAllWorksheetIDS = false;
        _this.isMultipleStatusUpdate = false;
        _this.isMultipleWorksheetDelete = false;
        _this.isAllocatereviewer = false;
        _this.canChangeDueDate = false;
        _this.canChangePeriodStartEndDate = false;
        _this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
        _this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
        _this.todayDate = '';
        _this.typeData = '';
        _this.tabIDWorksheetHierarchy = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].WORKFLOW_MASTERACTIVITY;
        _this.tabIDWorksheetTraining = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].WORKFLOW_WORKSHEETTRAINING;
        _this.tabIDWorksheetSubClientList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].WORKFLOW_SUBCLIENTLIST;
        _this.tabIDWorksheetReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
        _this.tabIDWorksheetPeerReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
        _this.tabIDWorksheetMasterChecklist = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].WORKFLOW_MASTERCHECKLIST;
        _this.tabIDWorksheetMultiplueStatusChange = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;
        _this.isAddUserTimeSheet = false;
        _this.tabTimeSheetID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].WORKFLOW_TIMESHEET;
        return _this;
    }
    Object.defineProperty(PeerReviewWorksheetListingComponent.prototype, "parent_id", {
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeerReviewWorksheetListingComponent.prototype, "entity_id", {
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeerReviewWorksheetListingComponent.prototype, "master_activity_id", {
        get: function () {
            return this.filterForm.get('master_activity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeerReviewWorksheetListingComponent.prototype, "task_id", {
        get: function () {
            return this.filterForm.get('task_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeerReviewWorksheetListingComponent.prototype, "frequency_id", {
        get: function () {
            return this.filterForm.get('frequency_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeerReviewWorksheetListingComponent.prototype, "start_date", {
        get: function () {
            return this.filterForm.get('start_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeerReviewWorksheetListingComponent.prototype, "end_date", {
        get: function () {
            return this.filterForm.get('end_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeerReviewWorksheetListingComponent.prototype, "due_date_from", {
        get: function () {
            return this.filterForm.get('due_date_from');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeerReviewWorksheetListingComponent.prototype, "due_date_to", {
        get: function () {
            return this.filterForm.get('due_date_to');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeerReviewWorksheetListingComponent.prototype, "category_id", {
        get: function () {
            return this.filterForm.get('category_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeerReviewWorksheetListingComponent.prototype, "related_entity", {
        get: function () {
            return this.filterForm.get('related_entity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeerReviewWorksheetListingComponent.prototype, "technical_account_manager", {
        get: function () {
            return this.filterForm.get('technical_account_manager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeerReviewWorksheetListingComponent.prototype, "team_member", {
        get: function () {
            return this.filterForm.get('team_member');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeerReviewWorksheetListingComponent.prototype, "additional_assignee", {
        get: function () {
            return this.filterForm.get('additional_assignee');
        },
        enumerable: true,
        configurable: true
    });
    PeerReviewWorksheetListingComponent.prototype.ngOnInit = function () {
        this.userInfo = this._sharedService.getUser();
        this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
        this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
        this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
        this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
        this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
        this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
        this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format('YYYY-MM-DD');
        this.isMultipleStatusUpdate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetstatuschange', 1);
        this.isMultipleWorksheetDelete = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetdelete', 1);
        this.isAllocatereviewer = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'allocatereviewer', 1);
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
    PeerReviewWorksheetListingComponent.prototype.getDropdownData = function () {
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
        this._sharedObjService.getUserList({ 'records': 'all' }, { compare: { equal: { is_active: 1 } } }).subscribe(function (response) {
            _this.userList = response;
            _this.staffList = _this.userList.filter(function (data) { return (data['designation_id']) ? data['designation_id']['id'] === 10 : 0; });
            _this.tamList = _this.userList.filter(function (data) { return (data['designation_id']) ? data['designation_id']['id'] === 9 : 0; });
        });
    };
    /**
     * Get Worksheet Listing
     * @param pageNumber
     * @param key
     * @param val
     */
    PeerReviewWorksheetListingComponent.prototype.getWorksheetListing = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].PEER_REVIEW_WORKSHEET_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleWorksheetRespone(response);
        });
    };
    /**
     * Handle Worksheet Response
     * @param response
     */
    PeerReviewWorksheetListingComponent.prototype.handleWorksheetRespone = function (response) {
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
    PeerReviewWorksheetListingComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            due_date_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            due_date_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            due_date_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            due_date_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null)
        });
    };
    /**
     * Add Edit Master Activity Dialog
     */
    PeerReviewWorksheetListingComponent.prototype.openAddEditMasterActivityDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_13__["ReviewActionAllocateReviewerDialog"], {
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
    PeerReviewWorksheetListingComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Pagination page change event
     * @param event
     */
    PeerReviewWorksheetListingComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getWorksheetListing(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    PeerReviewWorksheetListingComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.filterForm.reset();
        this.advanceFilterForm.reset();
        this.likeJSON = {};
        this.equalJSON = { 'status_id': 22 };
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
    PeerReviewWorksheetListingComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * On home page route
     */
    PeerReviewWorksheetListingComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Open quick menu
     * @param menuName
     */
    PeerReviewWorksheetListingComponent.prototype.onOpenQuickMenu = function (menuName) {
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
            case 'changeMultipleWorksheetStatus':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].CHANGE_MULTIPLE_WORKSHEET_STATUS]);
                break;
        }
    };
    /**
     * Get Query Params
     * @param page
     * @param sortKey
     * @param sortOrder
     */
    PeerReviewWorksheetListingComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
        if (this.typeData) {
            params['type'] = this.typeData;
        }
        return params;
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    PeerReviewWorksheetListingComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getWorksheetListing(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    PeerReviewWorksheetListingComponent.prototype.getSearchParam = function () {
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
    PeerReviewWorksheetListingComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        if (this.tamId) {
            params['technical_account_manager'] = this.tamId;
        }
        if (this.teamId) {
            params['team_member'] = this.teamId;
        }
        if (this.assigneeId) {
            params['additional_assignee'] = this.assigneeId;
        }
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].PEER_REVIEW_WORKSHEET_LISTING, params, this.getSearchParam(), 'Peer Review Worksheet ', 0).subscribe(function (response) {
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    PeerReviewWorksheetListingComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'technical_account_manager': form.value['technical_account_manager'],
                'team_member': form.value['team_member'],
                'additional_assignee': form.value['additional_assignee']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    PeerReviewWorksheetListingComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = { 'status_id': 22 };
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
                        || key === 'related_entity') {
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
     * Get User List
     */
    PeerReviewWorksheetListingComponent.prototype.getUserList = function () {
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
    PeerReviewWorksheetListingComponent.prototype.onClearTag = function (elementName, JsonElementName) {
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
            || elementName === 'related_entity') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'category_id' || elementName === 'master_activity_id' || elementName === 'task_id') {
            delete this.inJSON[elementName];
        }
        this.getWorksheetListing(1, 'due_date', 'asc');
    };
    /**
     * Get Task Filter List
     * @param value
     */
    PeerReviewWorksheetListingComponent.prototype.getTaskFilterList = function (value) {
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
    PeerReviewWorksheetListingComponent.prototype.openAddEditSubActivityDialog = function () {
        var dialogRef = this.dialog.open(_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_13__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Open filter
     */
    PeerReviewWorksheetListingComponent.prototype.onOpenFilter = function () {
        this.activeView = this.enumView.FILTER_VIEW_MAIN;
    };
    /**
     * Expand row table
     * @param i
     */
    PeerReviewWorksheetListingComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Close filter
     */
    PeerReviewWorksheetListingComponent.prototype.onCloseFilter = function () {
        this.activeView = null;
    };
    /**
     * Close modal
     * @param event
     */
    PeerReviewWorksheetListingComponent.prototype.onCloseDialog = function (event) {
        this.activeView = event;
    };
    /**
     * On delete table row
     */
    PeerReviewWorksheetListingComponent.prototype.onDeleteItem = function (event) {
        this.deleteItem.emit(event);
    };
    /**
     * View timesheet page redirect
     */
    PeerReviewWorksheetListingComponent.prototype.onViewTimeSheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * Task CEhcklist page redirect
     */
    PeerReviewWorksheetListingComponent.prototype.onTaskChecklist = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * redirection worksheet dashboard
     */
    PeerReviewWorksheetListingComponent.prototype.onWorksheetDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * Review Allocation page redirection
     */
    PeerReviewWorksheetListingComponent.prototype.openReviewAllocateDialog = function () {
        var dialogRef = this.dialog.open(_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_13__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Get All Status
     */
    PeerReviewWorksheetListingComponent.prototype.getAllStatus = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].GET_ALL_STATUS, {}, {}).subscribe(function (response) {
            _this.statusArray = response.payload.data;
        });
    };
    /**
     * Update Due Date + Period Start + End Date + Reminder Date
     * @param object
     */
    PeerReviewWorksheetListingComponent.prototype.updateInlineFormDates = function (object) {
        var _a;
        var keyData = object.key;
        if (keyData === 'start_date' || keyData === 'end_date' || keyData === 'due_date' || keyData === 'reminder_date') {
            object.value = moment__WEBPACK_IMPORTED_MODULE_11__(object.value).format('YYYY-MM-DD');
        }
        if (object.value) {
            // Update worksheet date
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].UPDATE_WORKSHEET, object.id, (_a = {},
                _a[object.key] = object.value,
                _a['_method'] = 'put',
                _a)).subscribe(function (response) {
            });
        }
    };
    /**
     * On Change Update Notes Param
     * @param notes
     */
    PeerReviewWorksheetListingComponent.prototype.onChangeUpdateNotesParam = function (notes, id) {
        this.noteToUpdate[id] = notes;
    };
    /**
     * On Submit Update Notes
     * @param id
     */
    PeerReviewWorksheetListingComponent.prototype.onSubmitUpdateNotes = function (id) {
        var _this = this;
        var notes = this.noteToUpdate[id];
        if (notes) {
            // Update worksheet date
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].UPDATE_WORKSHEET, id, {
                'notes': this.noteToUpdate[id],
                '_method': 'put',
            }).subscribe(function (response) {
                _this.getWorksheetListing(1, 'due_date', 'asc');
            });
        }
    };
    /**
     * Open worksheet status log modal
     */
    PeerReviewWorksheetListingComponent.prototype.openWorksheetStatusLogDialog = function (worksheetData) {
        var dialogRef = this.dialog.open(_worksheet_dashboard_action_worksheet_status_log_dialog_worksheet_status_log_dialog__WEBPACK_IMPORTED_MODULE_15__["WorksheetStatusLogDialog"], {
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
    PeerReviewWorksheetListingComponent.prototype.onAddTimeSheet = function (worksheetData) {
        if (worksheetData) {
            this._sharedService.setWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GLOBALDATAKEYS"].WORKSHEET_ITEM_DATA, worksheetData);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].ADD_TIMESHEET, '_blank');
            });
            // this._router.navigate(['/' + AdminRoutes.ADD_TIMESHEET]);
        }
    };
    /**
     * On users timesheet page redirect
     */
    PeerReviewWorksheetListingComponent.prototype.onAddUsersTimeSheet = function (worksheetData) {
        if (worksheetData) {
            this._sharedService.setWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GLOBALDATAKEYS"].WORKSHEET_ITEM_DATA, worksheetData);
            // this._router.navigate(['/' + AdminRoutes.ADD_USERS_TIMESHEET]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].ADD_USERS_TIMESHEET, '_blank');
            });
        }
    };
    /**
     * On click of view timesheet
     * @param worksheetData
     */
    PeerReviewWorksheetListingComponent.prototype.onViewUserTimesheet = function (worksheetData) {
        var jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_14__["convertURLParamToEncode"])({
            'entity_id': worksheetData.entity_id,
            'start_date': worksheetData.start_date,
            'end_date': worksheetData.end_date,
            'viewTimesheet': 1,
            'task_id': worksheetData.task_id.id
        });
        if (jsonData) {
            this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET], { queryParams: jsonData });
        }
    };
    /**
     * On Edit Task Checklist
     * @param data
     */
    PeerReviewWorksheetListingComponent.prototype.onEditTaskCheckList = function (data) {
        if (data.worksheet_peerreviewer && (data.worksheet_peerreviewer.id === this.userInfo.id)) {
            this._sharedService.setPeerReviewChecklistData(null);
            this._sharedService.setPeerReviewChecklistData(data);
            // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST_PEER_REVIEW]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].EDIT_TASK_CHECKLIST_PEER_REVIEW, '_blank');
            });
        }
        else {
            this._sharedService.setChecklistViewData(null);
            this._sharedService.setChecklistViewData(data);
            // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].TASK_CHECKLIST, '_blank');
            });
        }
    };
    PeerReviewWorksheetListingComponent.prototype.onPreviewEmail = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].TASK_CHECKLIST_EMAIL_PREVIEW]);
    };
    PeerReviewWorksheetListingComponent.prototype.onAllocateAssigneeDialog = function (worksheet) {
        var _this = this;
        var dialogRef = this.dialog.open(_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_13__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
            data: {
                allocateData: worksheet,
                isadditionalAssignee: 3
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getWorksheetListing(1, 'due_date', 'asc');
        });
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    PeerReviewWorksheetListingComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Status List
     * @param {number} cat_id
     * @returns {string}
     */
    PeerReviewWorksheetListingComponent.prototype.getCategoryName = function (cat_id) {
        var val = this.categoryData.filter(function (elem) { return elem.key === Number(cat_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Select All Item of Event
     * @param event
     */
    PeerReviewWorksheetListingComponent.prototype.onSelectAllItem = function (event) {
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
    PeerReviewWorksheetListingComponent.prototype.onSelectItem = function (event, id) {
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
    PeerReviewWorksheetListingComponent.prototype.onConfirmationDialogDeleteWorksheet = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete worksheet?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value && _this.selectedWorksheetIDs) {
                var params = _this.selectedWorksheetIDs.join(',');
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].DELETE_WORKSHEET, 0, params).subscribe(function (response) {
                    _this.selectedWorksheetIDs = [];
                    _this.getWorksheetListing(1, 'due_date', 'asc');
                });
            }
        });
    };
    /**
     * redirection CompletedPeerReviewWorksheet page
     */
    PeerReviewWorksheetListingComponent.prototype.onCompletedPeerReviewWorksheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].WORKSHEET_COMPLETED_PEER_REVIEW_WORKSHEET_LISTING]);
    };
    /**
     * Worksheet Notes Dialog
     * @param worksheetData
     */
    PeerReviewWorksheetListingComponent.prototype.onWorksheetNotesDialog = function (worksheetData) {
        var _this = this;
        var dialogRef = this.dialog.open(_worksheet_dashboard_action_worksheet_notes_dialog_worksheet_notes_dialog_component__WEBPACK_IMPORTED_MODULE_17__["WorksheetNotesDialogComponent"], {
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
     * On Change Parent Entity
     * @param event
     */
    PeerReviewWorksheetListingComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PeerReviewWorksheetListingComponent.prototype, "deleteItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PeerReviewWorksheetListingComponent.prototype, "onKeydownHandler", null);
    PeerReviewWorksheetListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-peer-review-worksheet-listing',
            template: __webpack_require__(/*! ./peer-review-worksheet-listing.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/peer-review-worksheet-listing.component.html"),
            styles: [__webpack_require__(/*! ./peer-review-worksheet-listing.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/peer-review-worksheet-listing.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], PeerReviewWorksheetListingComponent);
    return PeerReviewWorksheetListingComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/peer-review-worksheet-listing.module.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/peer-review-worksheet-listing.module.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: PeerReviewWorksheetListingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerReviewWorksheetListingModule", function() { return PeerReviewWorksheetListingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _peer_review_worksheet_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./peer-review-worksheet-listing.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/peer-review-worksheet-listing.component.ts");
/* harmony import */ var _completed_peer_review_worksheet_completed_peer_review_worksheet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./completed-peer-review-worksheet/completed-peer-review-worksheet.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/peer-review-worksheet-listing/completed-peer-review-worksheet/completed-peer-review-worksheet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _peer_review_worksheet_listing_component__WEBPACK_IMPORTED_MODULE_5__["PeerReviewWorksheetListingComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'completed-peer-review-worksheet',
        component: _completed_peer_review_worksheet_completed_peer_review_worksheet_component__WEBPACK_IMPORTED_MODULE_6__["CompletedPeerReviewWorksheetComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    }
];
var PeerReviewWorksheetListingModule = /** @class */ (function () {
    function PeerReviewWorksheetListingModule() {
    }
    PeerReviewWorksheetListingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ],
            declarations: [_peer_review_worksheet_listing_component__WEBPACK_IMPORTED_MODULE_5__["PeerReviewWorksheetListingComponent"], _completed_peer_review_worksheet_completed_peer_review_worksheet_component__WEBPACK_IMPORTED_MODULE_6__["CompletedPeerReviewWorksheetComponent"]
            ],
            entryComponents: []
        })
    ], PeerReviewWorksheetListingModule);
    return PeerReviewWorksheetListingModule;
}());



/***/ })

}]);
//# sourceMappingURL=worksheet-quick-action-peer-review-worksheet-listing-peer-review-worksheet-listing-module.js.map