(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["worksheet-quick-action-todays-worksheet-todays-worksheet-module"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-worksheet/todays-worksheet.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-worksheet/todays-worksheet.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- review on knock back worksheet html start-->\r\n<div class=\"admin-review-or-knock-back-worksheet-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onWorksheetDashboard()\">WORKSHEET</a></span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">TODAY'S WORKSHEET</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 PR-0\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('addNewWorksheet')\"\r\n                          *ngIf=\"worksheetTabIDData['add_edit']\">Add New Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('todayTimesheet')\">Today's Timesheet</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetHierarchy')\"\r\n                          *ngIf=\"tabDataWorksheetHierarchy['view']\">Worksheet Hierarchy\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('subClientList')\"\r\n                          *ngIf=\"tabDataWorksheetSubClientList['view']\">Sub Client List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetMasterChecklist')\"\r\n                          *ngIf=\"tabDataWorksheetMasterChecklist['view']\">Worksheet Master Checklist\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                          *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('trainingList')\"\r\n                          *ngIf=\"tabDataWorksheetTraining['view']\">Training List\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                          *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                    Worksheet\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('peerReviewWorksheetListing')\"\r\n                          *ngIf=\"tabDataWorksheetPeerReviewerList['view']\">Peer Review Worksheet\r\n                    Listing\r\n                  </button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"with-filter-grid-container\">\r\n\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header MT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 PLR-0\">\r\n              <mat-form-field>\r\n                <mat-select (selectionChange)=\"onChangeUpdateFilterField($event.value)\" placeholder=\"Select Status\"\r\n                            [value]=\"\">\r\n                  <mat-option value=\"\">All ({{myWorksheetCount}})</mat-option>\r\n                  <mat-option *ngFor=\"let statusCounter of worksheetStatusCounter;\" [value]=\"statusCounter.id\">\r\n                    {{statusCounter.status_name}} ({{statusCounter.count}})\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-6 MT-15 status-type-list\">\r\n              <a class=\"orange-color\">\r\n                <mat-icon class=\"material-icons\">fiber_manual_record</mat-icon>\r\n                Indicates Overdue Task</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onToggleFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li (click)=\"downloadExcel()\" *ngIf=\"tabData['export']\">\r\n              <a>\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc\r\n          <mat-icon class=\"material-icons\">close</mat-icon>\r\n        </span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientListParent\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Parent Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         (change)=\"onChangeParentEntity($event);\"\r\n                         formControlName=\"parent_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"entity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"masterActivityList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Master activity\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         (change)=\"getTaskFilterList($event)\"\r\n                         formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"taskList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Task\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         formControlName=\"task_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\">\r\n                  <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                    {{frequency.frequency_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"start_date\" [matDatepicker]=\"periodFrom\"\r\n                           placeholder=\"Period From\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"end_date\" [matDatepicker]=\"periodTo\" placeholder=\"Period To\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"due_date_from\" [matDatepicker]=\"dueDateFrom\"\r\n                           placeholder=\"Due date From\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDateFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDateFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"due_date_to\" [matDatepicker]=\"dueDateTo\" (click)=\"dueDateTo.open()\"\r\n                           placeholder=\"Due date To\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDateTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDateTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"category_id\" [multiple]=\"true\" placeholder=\"Category\">\r\n                  <mat-option *ngFor=\"let category of categoryData;\" [value]=\"category.key\">{{category.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"related_entity\" placeholder=\"Related Entity\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">{{yesNo.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"status_id\" placeholder=\"Status\">\r\n                  <mat-option *ngFor=\"let worksheetStatus of worksheetStatusList;\" value=\"{{worksheetStatus.id}}\">\r\n                    {{worksheetStatus.status_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"tamList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"TAM\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"staffList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Team Member\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"team_member\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Additional Staff\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"additional_assignee\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"lock_worksheet\" placeholder=\"Worksheet status\">\r\n                  <mat-option *ngFor=\"let lockData of worksheetLockList.slice(1);\" value=\"{{lockData.key}}\">\r\n                    {{lockData.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button [disabled]=\"filterForm.invalid\" type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"parent_id.value\">\r\n          <span class=\"tag__title\">Parent Trading Name :</span>\r\n          <span>\r\n             <ng-select [items]=\"clientListParent\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"parent_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);onChangeParentEntity($event);\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"entity_id.value\">\r\n          <span class=\"tag__title\">Client name :</span>\r\n          <span>\r\n             <ng-select [items]=\"clientList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"entity_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"master_activity_id.value && master_activity_id.value.length\">\r\n          <span class=\"tag__title\">Master activity :</span>\r\n          <span>\r\n            <ng-select [items]=\"masterActivityList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true); getTaskFilterList($event);\"\r\n                       formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('master_activity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"task_id.value && task_id.value.length\">\r\n          <span class=\"tag__title\">Task :</span>\r\n          <span>\r\n            <ng-select [items]=\"taskList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Task\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"task_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('task_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"frequency_id.value\">\r\n          <span class=\"tag__title\">Frequency :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n               <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                    {{frequency.frequency_name}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('frequency_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"start_date.value\">\r\n          <span class=\"tag__title\">Period From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"start_date\" [matDatepicker]=\"perdiodFromDate\"\r\n                     placeholder=\"Period From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('start_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"end_date.value\">\r\n          <span class=\"tag__title\">Period To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"end_date\" [matDatepicker]=\"perdiodToDate\" (click)=\"perdiodToDate.open()\"\r\n                     placeholder=\"Period To\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('end_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"due_date_from.value\">\r\n          <span class=\"tag__title\">Due Date From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"due_date_from\" [matDatepicker]=\"dueFromDate\" (click)=\"dueFromDate.open()\"\r\n                     placeholder=\"Due Date From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('due_date_from')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"due_date_to.value\">\r\n          <span class=\"tag__title\">Due Date To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"due_date_to\" [matDatepicker]=\"dueToDate\"\r\n                     placeholder=\"Due Date To\"\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"category_id.value\">\r\n          <span class=\"tag__title\">Category :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select [multiple]=\"true\" formControlName=\"category_id\" placeholder=\"Category\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let category of categoryData;\" [value]=\"category.key\">{{category.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('category_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"related_entity.value\">\r\n          <span class=\"tag__title\">Related Entity :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"related_entity\" placeholder=\"Related Entity\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n               <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">{{yesNo.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('related_entity')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"status_id.value\">\r\n          <span class=\"tag__title\">Status :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"status_id\" placeholder=\"Status\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let worksheetStatus of worksheetStatusList;\" value=\"{{worksheetStatus.id}}\">\r\n                    {{worksheetStatus.status_name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('status_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"technical_account_manager.value\">\r\n          <span class=\"tag__title\">TAM :</span>\r\n          <span>\r\n            <ng-select [items]=\"tamList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"TAM\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('technical_account_manager')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"team_member.value\">\r\n          <span class=\"tag__title\">Team member :</span>\r\n          <span>\r\n            <ng-select [items]=\"staffList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Team Member\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"team_member\">\r\n            </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('team_member')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"additional_assignee.value\">\r\n          <span class=\"tag__title\">Additional staff :</span>\r\n          <span>\r\n             <ng-select [items]=\"userList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"userfullname\"\r\n                        placeholder=\"Additional Staff\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                        formControlName=\"additional_assignee\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('additional_assignee')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"lock_worksheet.value\">\r\n          <span class=\"tag__title\">Status :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"lock_worksheet\" placeholder=\"Worksheet status\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                 <mat-option *ngFor=\"let lockData of worksheetLockList.slice(1);\" value=\"{{lockData.key}}\">\r\n                    {{lockData.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('lock_worksheet')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\" *ngIf=\"\r\n          entity_id.value || parent_id.value\r\n\t\t      || (master_activity_id.value && master_activity_id.value.length)\r\n          || (task_id.value && task_id.value.length)\r\n          || frequency_id.value\r\n          || start_date.value\r\n          || end_date.value\r\n          || due_date_to.value\r\n          || due_date_from.value\r\n          || category_id.value\r\n          || related_entity.value\r\n          || status_id.value\r\n          || technical_account_manager.value\r\n          || team_member.value\r\n          || additional_assignee.value\r\n          || lock_worksheet.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n  </div>\r\n\r\n  <!--my worksheet container html start-->\r\n  <div class=\"view-worksheet-tab-container\">\r\n    <div class=\"expand-grid\">\r\n      <div class=\"expand-grid\">\r\n        <div>\r\n          <div class=\"expand-grid__thead\">\r\n            <table>\r\n              <thead>\r\n              <tr>\r\n                <th width=\"6%\"><span *ngIf=\"isMultipleWorksheetDelete\" class=\"MR-5\">\r\n                  <mat-checkbox (change)=\"onSelectAllItem($event.checked)\"></mat-checkbox></span>Sr.No.\r\n                </th>\r\n                <th width=\"10%\">Parent Trading Name</th>\r\n                <th width=\"12%\" (click)=\"getSortData('trading_name',\r\n            (sortBy === 'trading_name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Client Name\r\n                  <i *ngIf=\"sortBy === 'trading_name'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'trading_name'),\r\n                 'icon-up' : ((sortBy === 'trading_name') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                    {{(sortBy === 'trading_name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n\r\n                <th width=\"10%\" (click)=\"getSortData('task_id',\r\n              (sortBy === 'task_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Task\r\n                  <i *ngIf=\"sortBy === 'task_id'\" [ngClass]=\"{'material-icons': true,\r\n                  'active' : (sortBy === 'task_id'),\r\n                   'icon-up' : ((sortBy === 'task_id') && (sortOrder === 'asc')),\r\n                   'icon-down' : true}\">\r\n                    {{(sortBy === 'task_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n\r\n                <th width=\"5%\" (click)=\"getSortData('frequency_id',\r\n            (sortBy === 'frequency_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Frequency\r\n                  <i *ngIf=\"sortBy === 'frequency_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'frequency_id'),\r\n                 'icon-up' : ((sortBy === 'frequency_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                    {{(sortBy === 'frequency_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n                <th width=\"9%\">Period Date\r\n                  <mat-icon [matTooltip]=\"'Period Start Date & End Date'\" class=\"v-align-middle gray-color\">info\r\n                  </mat-icon>\r\n                </th>\r\n                <th width=\"9%\" (click)=\"getSortData('due_date',\r\n            (sortBy === 'due_date') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Reminder/ Due Date\r\n                  <i *ngIf=\"sortBy === 'due_date'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'due_date'),\r\n                 'icon-up' : ((sortBy === 'due_date') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                    {{(sortBy === 'due_date') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n                <th width=\"9%\">Notes\r\n                </th>\r\n                <th width=\"5%\">Units</th>\r\n\r\n                <th width=\"9%\">Status\r\n                  <i *ngIf=\"sortBy === 'status_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'status_id'),\r\n                 'icon-up' : ((sortBy === 'status_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                    {{(sortBy === 'status_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n\r\n                <th width=\"11%\" (click)=\"getSortData('allocation',\r\n            (sortBy === 'allocation') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Staff\r\n                  <i *ngIf=\"sortBy === 'allocation'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'allocation'),\r\n                 'icon-up' : ((sortBy === 'allocation') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                    {{(sortBy === 'allocation') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n                <th width=\"5%\">Action</th>\r\n              </tr>\r\n              </thead>\r\n            </table>\r\n          </div>\r\n          <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n            <table *ngIf=\"worksheetListData.length\">\r\n              <tbody [ngClass]=\"{'red-tr' : data | dateCompare}\"\r\n                     *ngFor=\"let data of worksheetListData; let i = index;\">\r\n              <tr [ngClass]=\"{'is-active-row' : trIndex === i}\" class=\"row-data\">\r\n                <td width=\"6%\">\r\n                  <span *ngIf=\"isMultipleWorksheetDelete\" class=\"MR-5\">\r\n                  <mat-checkbox *ngIf=\"data.timesheet_total_unit === 0\" [checked]=\"selectAllWorksheetIDS\"\r\n                                (change)=\"onSelectItem($event.checked, data.id)\"></mat-checkbox></span>\r\n                  <a class=\"open-inner-data\" (click)=\"openRow(i)\">\r\n                    <mat-icon [ngClass]=\"{'is-open' : trIndex === i}\" class=\"material-icons\">keyboard_arrow_down\r\n                    </mat-icon>\r\n                  </a>\r\n                  {{+pageSize * (pageIndex) + i + 1}}\r\n                  <mat-icon *ngIf=\"data?.discontinue_stage == 1\" class=\"red-color v-align-middle\"\r\n                            [matTooltip]=\"'Discontinue Process Initiated'\">block\r\n                  </mat-icon>\r\n                </td>\r\n                <td width=\"10%\" class=\"word-break\">{{data?.parent_name}}</td>\r\n                <td width=\"12%\" class=\"word-break\">{{data?.trading_name}}</td>\r\n                <td width=\"10%\" class=\"word-break\">{{data?.task_id?.name}}</td>\r\n                <td width=\"5%\">{{data?.frequency_name}}</td>\r\n                <td width=\"9%\" class=\"date_no_border\">\r\n                  <div>\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangePeriodStartEndDate\">\r\n                      <input matInput [value]=\"data?.start_date\" [matDatepicker]=\"pickerStart\" placeholder=\"Select Date\"\r\n                             (dateChange)=\"updateInlineFormDates({'key':'start_date', 'value': $event.target.value, 'id': data.id})\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #pickerStart></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <span *ngIf=\"!canChangePeriodStartEndDate\" class=\"readonly_date\">{{data?.start_date | date : 'dd-MM-yyyy'}}</span>\r\n                  </div>\r\n                  <div>\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangePeriodStartEndDate\">\r\n                      <input matInput [matDatepicker]=\"pickerEnd\" (click)=\"pickerEnd.open()\" placeholder=\"Select Date\"\r\n                             [value]=\"data.end_date\"\r\n                             (dateChange)=\"updateInlineFormDates({'key':'end_date', 'value': $event.target.value, 'id': data.id})\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #pickerEnd></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <span *ngIf=\"!canChangePeriodStartEndDate\">{{data?.end_date | date : 'dd-MM-yyyy'}}</span>\r\n                  </div>\r\n                </td>\r\n                <td width=\"9%\" class=\"date_no_border\">\r\n                  <div>\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangeDueDate\">\r\n                      <input matInput [matDatepicker]=\"dueDate\" (click)=\"dueDate.open()\" [value]=\"data.due_date\"\r\n                             placeholder=\"Select Date\"\r\n                             (dateChange)=\"updateInlineFormDates({'key':'due_date', 'value':$event.target.value, 'id': data.id})\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"dueDate\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #dueDate></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <span *ngIf=\"!canChangeDueDate\" class=\"readonly_date\">{{data.due_date | date : 'dd-MM-yyyy'}}</span>\r\n                  </div>\r\n                  <div>\r\n                    <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangePeriodStartEndDate\">\r\n                      <input matInput [matDatepicker]=\"pickerEnd\" (click)=\"pickerEnd.open()\" placeholder=\"Select Date\"\r\n                             [value]=\"data.end_date\"\r\n                             (dateChange)=\"updateInlineFormDates({'key':'end_date', 'value': $event.target.value, 'id': data.id})\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #pickerEnd></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <span *ngIf=\"!canChangePeriodStartEndDate\">{{data?.end_date | date : 'dd-MM-yyyy'}}</span>\r\n                  </div>\r\n                </td>\r\n                <td width=\"9%\" class=\"word-break\">\r\n                  <div ellipsis=\"Read More..\" class=\"multiline-ellipsis\" (click)=\"onWorksheetNotesDialog(data)\"\r\n                       (ellipsis-click-more)=\"on()\" *ngIf=\"data?.notes\">\r\n                    {{data?.notes}}\r\n                  </div>\r\n                  <a (click)=\"onWorksheetNotesDialog(data)\" *ngIf=\"!data?.notes\" class=\"cursor-pointer\">Add</a>\r\n                </td>\r\n                <td width=\"5%\" class=\"text-center\"><span\r\n                  class=\"label-gray-bg-color\"> {{data?.timesheet_total_unit}}</span></td>\r\n                <td width=\"9%\" class=\"no-float-label grid_select_8rem\">\r\n                  <mat-form-field [floatLabel]=\"'never'\">\r\n                    <mat-select placeholder=\"Status\" [value]=\"data.status_id.id\"\r\n                                (selectionChange)=\"onUpdateStatus(data, $event.value)\">\r\n                      <mat-option *ngFor=\"let status of worksheetStatusList;\" [value]=\"status?.id\"\r\n                                  disabled=\"{{status?.is_right === 1 ? false : true}}\">\r\n                        {{status.status_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </td>\r\n                <td width=\"11%\">\r\n                  <div class=\"word-break\">\r\n                    <div *ngFor=\"let userData of data.allocation | teamListFormate; let j = index\">\r\n                      <div *ngIf=\"userData && (userData.key === 'TM' || userData.key === 'TAM')\">\r\n                        <span class=\"fw-500\">{{userData.key}}:</span>\r\n                        <span>{{userData.value}}</span>\r\n                      </div>\r\n                      <div *ngIf=\"!userData\"> Not specify</div>\r\n                    </div>\r\n                    <div *ngIf=\"data.worksheet_additional_assignee\">\r\n                      <span class=\"fw-500\">Add. Assignee:</span>\r\n                      <span>{{data.worksheet_additional_assignee.userfullname}}</span>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td width=\"5%\">\r\n                  <ul>\r\n                    <li>\r\n                      <a (click)=\"onEditTaskCheckList(data)\"\r\n                         *ngIf=\"data?.taskchecklist === 1\" class=\"orange-color\"\r\n                         [matTooltip]=\"'Task checklist'\"><i\r\n                        class=\"material-icons\">playlist_add_check</i></a>\r\n                      <!--<a (click)=\"onEditTaskCheckListAccount(data)\"-->\r\n                      <!--*ngIf=\"data?.taskchecklist === 1 && data?.service_id > 0\" class=\"orange-color\"-->\r\n                      <!--[matTooltip]=\"'Task checklist'\"><i-->\r\n                      <!--class=\"material-icons\">playlist_add_check</i></a>-->\r\n\r\n                      <mat-icon [matMenuTriggerFor]=\"menuaction\">more_vert</mat-icon>\r\n                      <mat-menu #menuaction=\"matMenu\" class=\"column-menu\">\r\n                        <button mat-menu-item class=\"menu-header\">\r\n                          <h3>Action</h3>\r\n                        </button>\r\n                        <button mat-menu-item><a (click)=\"openWorksheetStatusLogDialog(data)\">\r\n                          <mat-icon>history</mat-icon>\r\n                          Worksheet status log</a>\r\n                        </button>\r\n                        <button mat-menu-item><a (click)=\"onAddTimeSheet(data)\"\r\n                                                 *ngIf=\"userInfo?.user_timesheet_fillup_flag === 1\">\r\n                          <mat-icon>alarm_add</mat-icon>\r\n                          Add Timesheet</a>\r\n                        </button>\r\n                        <button mat-menu-item><a (click)=\"onAddUsersTimeSheet(data)\"\r\n                                                 *ngIf=\"userInfo?.user_timesheet_fillup_flag === 1 && isAddUserTimeSheet\">\r\n                          <mat-icon>person_add</mat-icon>\r\n                          Add User Timesheet</a>\r\n                        </button>\r\n                        <button mat-menu-item><a (click)=\"onViewUserTimesheet(data)\">\r\n                          <mat-icon>remove_red_eye</mat-icon>\r\n                          View User Timesheet</a>\r\n                        </button>\r\n                        <button mat-menu-item><a (click)=\"onAllocateAssigneeDialog(data)\"\r\n                                                 *ngIf=\"isWorksheetAdditionalAssignee\">\r\n                          <mat-icon><span\r\n                            *ngIf=\"data.worksheet_additional_assignee === null\">person_outline</span>\r\n                            <span *ngIf=\"data.worksheet_additional_assignee !== null\">how_to_reg</span></mat-icon>\r\n                          Allocate Additional Assignee</a>\r\n                        </button>\r\n                      </mat-menu>\r\n                    </li>\r\n                  </ul>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"trIndex === i\" class=\"inner-data\">\r\n                <div class=\"row PT-10\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"inner-data__view-notes\">\r\n                      <div>Notes</div>\r\n                      <div>{{data.notes}}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"inner-data__view\">\r\n                      <div>Category</div>\r\n                      <div>{{getCategoryName(data.category_id)}}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <span *ngFor=\"let userData of data.allocation | teamListFormate;\">\r\n                    <span *ngIf=\"userData && (userData.key !== 'TM' && userData.key !== 'TAM')\">\r\n                    <div class=\"inner-data__view\">\r\n                        <div>{{userData.key}}</div>\r\n                        <div>{{userData.value}}</div>\r\n                    </div>\r\n                    </span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"expand-grid__tfoot\" *ngIf=\"worksheetListData.length\">\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"worksheetListData.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- review on knock back worksheet html over-->\r\n</div>\r\n\r\n<!--Delete table row-->\r\n<div *ngIf=\"selectedWorksheetIDs.length > 0\" class=\"bottom-panel-action\">\r\n  <button (click)=\"onConfirmationDialogDeleteWorksheet()\" type=\"button\" class=\"btn-bordered btn-white\"><span\r\n    class=\"v-align-middle\">DELETE SELECTED\r\n    WORKSHEET</span>\r\n    <mat-icon class=\"v-align-middle\">keyboard_arrow_right</mat-icon>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-worksheet/todays-worksheet.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-worksheet/todays-worksheet.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid_select_8rem .mat-form-field {\n  width: 120px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vd29ya2Zsb3ctbW9kdWxlL3dvcmtzaGVldC1tb2R1bGUvd29ya3NoZWV0LXF1aWNrLWFjdGlvbi90b2RheXMtd29ya3NoZWV0L0M6XFx3YW1wNjRcXHd3d1xcaGtfZnJvbnRlbmQvcHJvamVjdHNcXGFkbWluXFxzcmNcXGFwcFxcYWRtaW5cXHdvcmtmbG93LW1vZHVsZVxcd29ya3NoZWV0LW1vZHVsZVxcd29ya3NoZWV0LXF1aWNrLWFjdGlvblxcdG9kYXlzLXdvcmtzaGVldFxcdG9kYXlzLXdvcmtzaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHVCQUF1QixFQUFBIiwiZmlsZSI6InByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vd29ya2Zsb3ctbW9kdWxlL3dvcmtzaGVldC1tb2R1bGUvd29ya3NoZWV0LXF1aWNrLWFjdGlvbi90b2RheXMtd29ya3NoZWV0L3RvZGF5cy13b3Jrc2hlZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZF9zZWxlY3RfOHJlbSB7XHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-worksheet/todays-worksheet.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-worksheet/todays-worksheet.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: TodaysWorksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodaysWorksheetComponent", function() { return TodaysWorksheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _worksheet_dashboard_action_complete_worksheet_status_dialog_complete_worksheet_status_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../worksheet-dashboard-action/complete-worksheet-status-dialog/complete-worksheet-status-dialog.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/complete-worksheet-status-dialog/complete-worksheet-status-dialog.component.ts");
/* harmony import */ var _worksheet_dashboard_action_worksheet_status_log_dialog_worksheet_status_log_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog.ts");
/* harmony import */ var _worksheet_dashboard_tab_myworksheet_myworksheet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../worksheet-dashboard-tab/myworksheet/myworksheet.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/myworksheet/myworksheet.component.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _worksheet_dashboard_action_worksheet_notes_dialog_worksheet_notes_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-notes-dialog/worksheet-notes-dialog.component.ts");
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




















var TodaysWorksheetComponent = /** @class */ (function (_super) {
    __extends(TodaysWorksheetComponent, _super);
    function TodaysWorksheetComponent(_fb, dialog, _commonCrudService, _router, _sharedObjService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this._commonCrudService = _commonCrudService;
        _this._router = _router;
        _this._sharedObjService = _sharedObjService;
        _this._sharedService = _sharedService;
        // Constant Variables
        _this.enumView = _worksheet_dashboard_tab_myworksheet_myworksheet_component__WEBPACK_IMPORTED_MODULE_17__["Views"];
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
        _this.filteredTradingClientList = [];
        _this.clientListParent = [];
        _this.frequencyList = [];
        _this.taskDataMain = [];
        _this.categoryData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["category"];
        _this.staffList = [];
        _this.tamList = [];
        _this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNo"];
        _this.worksheetLockList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["worksheetStatusLog"];
        _this.PeriodFromValue = null;
        _this.PeriodToValue = null;
        _this.DueDateFromValue = null;
        _this.DueDateToValue = null;
        _this.noteToUpdate = [];
        // pagination Data
        _this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["BASE"].PAGINATION_ARRAY;
        _this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["BASE"].PAGINATION_ARRAY[1];
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
        _this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.selectedWorksheetIDs = [];
        _this.selectAllWorksheetIDS = false;
        _this.isMultipleStatusUpdate = false;
        _this.isMultipleWorksheetDelete = false;
        _this.isWorksheetAdditionalAssignee = false;
        _this.canChangeDueDate = false;
        _this.canChangePeriodStartEndDate = false;
        _this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_4__["ADMINTABACCESS"].WORKFLOW_MYWORKSHEET;
        _this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_4__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
        _this.todayDate = '';
        _this.tabIDWorksheetHierarchy = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_4__["ADMINTABACCESS"].WORKFLOW_MASTERACTIVITY;
        _this.tabIDWorksheetTraining = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_4__["ADMINTABACCESS"].WORKFLOW_WORKSHEETTRAINING;
        _this.tabIDWorksheetSubClientList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_4__["ADMINTABACCESS"].WORKFLOW_SUBCLIENTLIST;
        _this.tabIDWorksheetReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_4__["ADMINTABACCESS"].WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
        _this.tabIDWorksheetPeerReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_4__["ADMINTABACCESS"].WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
        _this.tabIDWorksheetMasterChecklist = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_4__["ADMINTABACCESS"].WORKFLOW_MASTERCHECKLIST;
        _this.tabIDWorksheetMultiplueStatusChange = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_4__["ADMINTABACCESS"].WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;
        _this.isAddUserTimeSheet = false;
        _this.tabTimeSheetID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_4__["ADMINTABACCESS"].WORKFLOW_TIMESHEET;
        return _this;
    }
    Object.defineProperty(TodaysWorksheetComponent.prototype, "parent_id", {
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "entity_id", {
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "master_activity_id", {
        get: function () {
            return this.filterForm.get('master_activity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "task_id", {
        get: function () {
            return this.filterForm.get('task_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "frequency_id", {
        get: function () {
            return this.filterForm.get('frequency_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "start_date", {
        get: function () {
            return this.filterForm.get('start_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "end_date", {
        get: function () {
            return this.filterForm.get('end_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "due_date_from", {
        get: function () {
            return this.filterForm.get('due_date_from');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "due_date_to", {
        get: function () {
            return this.filterForm.get('due_date_to');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "category_id", {
        get: function () {
            return this.filterForm.get('category_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "related_entity", {
        get: function () {
            return this.filterForm.get('related_entity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "status_id", {
        get: function () {
            return this.filterForm.get('status_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "lock_worksheet", {
        get: function () {
            return this.filterForm.get('lock_worksheet');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "technical_account_manager", {
        get: function () {
            return this.filterForm.get('technical_account_manager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "team_member", {
        get: function () {
            return this.filterForm.get('team_member');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodaysWorksheetComponent.prototype, "additional_assignee", {
        get: function () {
            return this.filterForm.get('additional_assignee');
        },
        enumerable: true,
        configurable: true
    });
    TodaysWorksheetComponent.prototype.ngOnInit = function () {
        this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
        this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
        this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
        this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
        this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
        this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
        this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
        this.isAddUserTimeSheet = this._sharedService.checkUserPrivileges(this.tabTimeSheetID, 'otherRights', 'otherRights', 'button_name', 'add_user_timesheet', 1);
        this.userInfo = this._sharedService.getUser();
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_9__(new Date()).format('YYYY-MM-DD');
        this.isMultipleStatusUpdate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetstatuschange', 1);
        this.isMultipleWorksheetDelete = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetdelete', 1);
        this.isWorksheetAdditionalAssignee = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'worksheetadditionalassignee', 1);
        this.canChangePeriodStartEndDate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'canchangeperiodstartdate_enddate', 1);
        this.canChangeDueDate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'canchangeduedate', 1);
        this.createAdvanceFilterForm();
        this.getDropdownData();
        this.setAdvanceFilter(this.filterForm);
    };
    /**
     * Get frequency data
     */
    TodaysWorksheetComponent.prototype.getDropdownData = function () {
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
        // My Worksheet Status Wise Counter
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].MY_WORKSHEET_LISTING, {
            'statuscounter': 1,
            'records': 'all',
            'type': 'my'
        }, { 'compare': { 'lessthanequal': { 'due_date': this.todayDate } } }).subscribe(function (response) {
            _this.worksheetStatusCounter = response.payload.data;
        });
    };
    /**
     * Get Worksheet Listing
     * @param pageNumber
     * @param key
     * @param val
     */
    TodaysWorksheetComponent.prototype.getWorksheetListing = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].MY_WORKSHEET_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleWorksheetRespone(response);
        });
    };
    /**
     * Handle Worksheet Response
     * @param response
     */
    TodaysWorksheetComponent.prototype.handleWorksheetRespone = function (response) {
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
    TodaysWorksheetComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            due_date_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date()),
            due_date_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date()),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            lock_worksheet: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            due_date_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date()),
            due_date_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date()),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            lock_worksheet: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    /**
     * Add Edit Master Activity Dialog
     */
    TodaysWorksheetComponent.prototype.openAddEditMasterActivityDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_11__["ReviewActionAllocateReviewerDialog"], {
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
    TodaysWorksheetComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Pagination page change event
     * @param event
     */
    TodaysWorksheetComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getWorksheetListing(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    TodaysWorksheetComponent.prototype.resetFilterForm = function () {
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
    TodaysWorksheetComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    TodaysWorksheetComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getWorksheetListing(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    TodaysWorksheetComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        if (this.PeriodFromValue || this.DueDateFromValue) {
            filter['greaterthanequal'] = {};
        }
        if (this.PeriodToValue || this.DueDateToValue) {
            filter['lessthanequal'] = {};
        }
        if (this.PeriodFromValue) {
            filter['greaterthanequal']['start_date'] = moment__WEBPACK_IMPORTED_MODULE_9__(this.PeriodFromValue).format('YYYY-MM-DD');
        }
        if (this.PeriodToValue) {
            filter['lessthanequal']['end_date'] = moment__WEBPACK_IMPORTED_MODULE_9__(this.PeriodToValue).format('YYYY-MM-DD');
        }
        if (this.DueDateFromValue) {
            filter['greaterthanequal']['due_date'] = moment__WEBPACK_IMPORTED_MODULE_9__(this.DueDateFromValue).format('YYYY-MM-DD');
        }
        if (this.DueDateToValue) {
            filter['lessthanequal']['due_date'] = moment__WEBPACK_IMPORTED_MODULE_9__(this.DueDateToValue).format('YYYY-MM-DD');
        }
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_12__["CommonFunctions"].isEmpty(filter)) {
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
    TodaysWorksheetComponent.prototype.downloadExcel = function () {
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
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].MY_WORKSHEET_LISTING, params, this.getSearchParam(), 'My Worksheet ', 0).subscribe(function (response) {
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    TodaysWorksheetComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
    TodaysWorksheetComponent.prototype.setAdvanceFilter = function (form, flag) {
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
     * Get User List
     */
    TodaysWorksheetComponent.prototype.getUserList = function () {
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
    TodaysWorksheetComponent.prototype.onClearTag = function (elementName, JsonElementName) {
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
    TodaysWorksheetComponent.prototype.onChangeUpdateFilterField = function (value) {
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
    TodaysWorksheetComponent.prototype.getTaskFilterList = function (value) {
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
    TodaysWorksheetComponent.prototype.openAddEditSubActivityDialog = function () {
        var dialogRef = this.dialog.open(_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_11__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Open filter
     */
    TodaysWorksheetComponent.prototype.onOpenFilter = function () {
        this.activeView = this.enumView.FILTER_VIEW_MAIN;
    };
    /**
     * Expand row table
     * @param i
     */
    TodaysWorksheetComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Close filter
     */
    TodaysWorksheetComponent.prototype.onCloseFilter = function () {
        this.activeView = null;
    };
    /**
     * Close modal
     * @param event
     */
    TodaysWorksheetComponent.prototype.onCloseDialog = function (event) {
        this.activeView = event;
    };
    /**
     * On delete table row
     */
    TodaysWorksheetComponent.prototype.onDeleteItem = function (event) {
        this.deleteItem.emit(event);
    };
    /**
     * View timesheet page redirect
     */
    TodaysWorksheetComponent.prototype.onViewTimeSheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * Task CEhcklist page redirect
     */
    TodaysWorksheetComponent.prototype.onTaskChecklist = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * redirection worksheet dashboard
     */
    TodaysWorksheetComponent.prototype.onWorksheetDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * Review Allocation page redirection
     */
    TodaysWorksheetComponent.prototype.openReviewAllocateDialog = function () {
        var dialogRef = this.dialog.open(_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_11__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Get All Status
     */
    TodaysWorksheetComponent.prototype.getAllStatus = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].GET_ALL_STATUS, {}, {}).subscribe(function (response) {
            _this.statusArray = response.payload.data;
        });
    };
    /**
     * Update Due Date + Period Start + End Date + Reminder Date
     * @param object
     */
    TodaysWorksheetComponent.prototype.updateInlineFormDates = function (object) {
        var _a;
        var keyData = object.key;
        if (keyData === 'start_date' || keyData === 'end_date' || keyData === 'due_date' || keyData === 'reminder_date') {
            object.value = moment__WEBPACK_IMPORTED_MODULE_9__(object.value).format('YYYY-MM-DD');
        }
        if (object.value) {
            // Update worksheet date
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].UPDATE_WORKSHEET, object.id, (_a = {},
                _a[object.key] = object.value,
                _a['_method'] = 'put',
                _a)).subscribe(function (response) {
            });
        }
    };
    /**
     * Update Due Date + Period Start + End Date + Reminder Date
     * @param object
     */
    TodaysWorksheetComponent.prototype.onUpdateStatus = function (worksheetData, statusChanged) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmationDialogComponent"], {
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
                    var dialogRefData = _this.dialog.open(_worksheet_dashboard_action_complete_worksheet_status_dialog_complete_worksheet_status_dialog_component__WEBPACK_IMPORTED_MODULE_15__["CompleteWorksheetStatusDialogComponent"], {
                        data: {
                            worksheetItem: worksheetData
                        }
                    });
                    dialogRefData.afterClosed().subscribe(function (valueData) {
                        _this.getWorksheetListing(1, 'due_date', 'asc');
                    });
                }
                else {
                    _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].UPDATE_WORKSHEET, worksheetData.id, {
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
    TodaysWorksheetComponent.prototype.onChangeUpdateNotesParam = function (notes, id) {
        this.noteToUpdate[id] = notes;
    };
    /**
     * On Submit Update Notes
     * @param id
     */
    TodaysWorksheetComponent.prototype.onSubmitUpdateNotes = function (id) {
        var _this = this;
        var notes = this.noteToUpdate[id];
        if (notes) {
            // Update worksheet date
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].UPDATE_WORKSHEET, id, {
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
    TodaysWorksheetComponent.prototype.openWorksheetStatusLogDialog = function (worksheetData) {
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
    TodaysWorksheetComponent.prototype.onAddTimeSheet = function (worksheetData) {
        if (worksheetData) {
            this._sharedService.setWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].WORKSHEET_ITEM_DATA, worksheetData);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].ADD_TIMESHEET, '_blank');
            });
            // this._router.navigate(['/' + AdminRoutes.ADD_TIMESHEET]);
        }
    };
    /**
     * On users timesheet page redirect
     */
    TodaysWorksheetComponent.prototype.onAddUsersTimeSheet = function (worksheetData) {
        if (worksheetData) {
            this._sharedService.setWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].WORKSHEET_ITEM_DATA, worksheetData);
            // this._router.navigate(['/' + AdminRoutes.ADD_USERS_TIMESHEET]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].ADD_USERS_TIMESHEET, '_blank');
            });
        }
    };
    /**
     * On click of view timesheet
     * @param worksheetData
     */
    TodaysWorksheetComponent.prototype.onViewUserTimesheet = function (worksheetData) {
        var jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_12__["convertURLParamToEncode"])({
            'entity_id': worksheetData.entity_id,
            'start_date': worksheetData.start_date,
            'end_date': worksheetData.end_date,
            'viewTimesheet': 1,
            'task_id': worksheetData.task_id.id
        });
        if (jsonData) {
            this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET], { queryParams: jsonData });
        }
    };
    /**
     * On task checklist redirect
     */
    TodaysWorksheetComponent.prototype.onEditTaskCheckList = function (data, isReadOnly) {
        // If Read Only Then Redirect to other page
        if (isReadOnly === 1) {
            this._sharedService.setChecklistViewData(null);
            this._sharedService.setChecklistViewData(data);
            // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].TASK_CHECKLIST, '_blank');
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
                        window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].EDIT_TASK_CHECKLIST, '_blank');
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
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].EDIT_TASK_CHECKLIST, '_blank');
                        });
                    }
                    else {
                        this._sharedService.setChecklistViewData(null);
                        this._sharedService.setChecklistViewData(data);
                        // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                        this._router.navigate([]).then(function (result) {
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                        });
                    }
                }
                else {
                    this._sharedService.setChecklistViewData(null);
                    this._sharedService.setChecklistViewData(data);
                    // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                    this._router.navigate([]).then(function (result) {
                        window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].TASK_CHECKLIST, '_blank');
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
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].EDIT_TASK_CHECKLIST_TAM, '_blank');
                        });
                    }
                    else {
                        this._sharedService.setChecklistViewData(null);
                        this._sharedService.setChecklistViewData(data);
                        // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                        this._router.navigate([]).then(function (result) {
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                        });
                    }
                }
                else {
                    this._sharedService.setChecklistViewData(null);
                    this._sharedService.setChecklistViewData(data);
                    // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                    this._router.navigate([]).then(function (result) {
                        window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                    });
                }
            }
            else if (data.taskchecklist === 1 && (data.status_id.id === 22) && (data.worksheet_peerreviewer !== null) && (data.worksheet_peerreviewer.id === this.userInfo.id)) {
                this._sharedService.setPeerReviewChecklistData(null);
                this._sharedService.setPeerReviewChecklistData(data);
                // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST_PEER_REVIEW]);
                this._router.navigate([]).then(function (result) {
                    window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].EDIT_TASK_CHECKLIST_PEER_REVIEW, '_blank');
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
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].EDIT_TASK_CHECKLIST_KNOCKBACK, '_blank');
                        });
                    }
                    else {
                        this._sharedService.setChecklistViewData(null);
                        this._sharedService.setChecklistViewData(data);
                        // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                        this._router.navigate([]).then(function (result) {
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                        });
                    }
                }
                else {
                    this._sharedService.setChecklistViewData(null);
                    this._sharedService.setChecklistViewData(data);
                    // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                    this._router.navigate([]).then(function (result) {
                        window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                    });
                }
            }
            else {
                this._sharedService.setChecklistViewData(null);
                this._sharedService.setChecklistViewData(data);
                // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                this._router.navigate([]).then(function (result) {
                    window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                });
            }
        }
    };
    /**
     * on edit master activity account data
     * @param data
     */
    TodaysWorksheetComponent.prototype.onEditTaskCheckListAccount = function (data) {
        // console.log('td');
        if (data.status_id.id < 2 || data.status_id.id === 9) {
            this._sharedService.setChecklistData(null);
            this._sharedService.setChecklistData(data);
            // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].EDIT_TASK_CHECKLIST, '_blank');
            });
        }
        else {
            this._sharedService.setChecklistViewData(null);
            this._sharedService.setChecklistViewData(data);
            // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].TASK_CHECKLIST, '_blank');
            });
        }
    };
    TodaysWorksheetComponent.prototype.onPreviewEmail = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].TASK_CHECKLIST_EMAIL_PREVIEW]);
    };
    TodaysWorksheetComponent.prototype.onAllocateAssigneeDialog = function (worksheet) {
        var dialogRef = this.dialog.open(_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_11__["ReviewActionAllocateReviewerDialog"], {
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
    TodaysWorksheetComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Status List
     * @param {number} cat_id
     * @returns {string}
     */
    TodaysWorksheetComponent.prototype.getCategoryName = function (cat_id) {
        var val = this.categoryData.filter(function (elem) { return elem.key === Number(cat_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Select All Item of Event
     * @param event
     */
    TodaysWorksheetComponent.prototype.onSelectAllItem = function (event) {
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
    TodaysWorksheetComponent.prototype.onSelectItem = function (event, id) {
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
    TodaysWorksheetComponent.prototype.onConfirmationDialogDeleteWorksheet = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete worksheet?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value && _this.selectedWorksheetIDs) {
                var params = _this.selectedWorksheetIDs.join(',');
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].DELETE_WORKSHEET, 0, params).subscribe(function (response) {
                    _this.selectedWorksheetIDs = [];
                    _this.getWorksheetListing(1, 'due_date', 'asc');
                });
            }
        });
    };
    /**
     * Open quick menu
     * @param menuName
     */
    TodaysWorksheetComponent.prototype.onOpenQuickMenu = function (menuName) {
        switch (menuName) {
            case 'addNewWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].ADD_WORKSHEET]);
                break;
            case 'todayTimesheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
                break;
            case 'worksheetHierarchy':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_HIERARCHY]);
                break;
            case 'changeInOuttime':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_CHANGE_IN_OUT_TIME]);
                break;
            case 'subClientList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_SUB_CLIENT_LIST]);
                break;
            case 'worksheetMasterChecklist':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_MASTER_CHECKLIST]);
                break;
            case 'trainingList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_TRAINING_LIST]);
                break;
            case 'revieworKnockBackWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_REVIEW_OR_KNOCK_BACK]);
                break;
            case 'peerReviewWorksheetListing':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
                break;
            case 'changeMultipleWorksheetStatus':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].CHANGE_MULTIPLE_WORKSHEET_STATUS]);
                break;
        }
    };
    /**
     * On home page route
     */
    TodaysWorksheetComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Get Query Params
     * @param page
     * @param sortKey
     * @param sortOrder
     */
    TodaysWorksheetComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
     * Worksheet Notes Dialog
     * @param worksheetData
     */
    TodaysWorksheetComponent.prototype.onWorksheetNotesDialog = function (worksheetData) {
        var _this = this;
        var dialogRef = this.dialog.open(_worksheet_dashboard_action_worksheet_notes_dialog_worksheet_notes_dialog_component__WEBPACK_IMPORTED_MODULE_19__["WorksheetNotesDialogComponent"], {
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
    TodaysWorksheetComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TodaysWorksheetComponent.prototype, "myWorksheetCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TodaysWorksheetComponent.prototype, "deleteItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], TodaysWorksheetComponent.prototype, "onKeydownHandler", null);
    TodaysWorksheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todays-worksheet',
            template: __webpack_require__(/*! ./todays-worksheet.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-worksheet/todays-worksheet.component.html"),
            styles: [__webpack_require__(/*! ./todays-worksheet.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-worksheet/todays-worksheet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], TodaysWorksheetComponent);
    return TodaysWorksheetComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_18__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-worksheet/todays-worksheet.module.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-worksheet/todays-worksheet.module.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: TodaysWorksheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodaysWorksheetModule", function() { return TodaysWorksheetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _todays_worksheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todays-worksheet.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/todays-worksheet/todays-worksheet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _todays_worksheet_component__WEBPACK_IMPORTED_MODULE_5__["TodaysWorksheetComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
];
var TodaysWorksheetModule = /** @class */ (function () {
    function TodaysWorksheetModule() {
    }
    TodaysWorksheetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ],
            declarations: [_todays_worksheet_component__WEBPACK_IMPORTED_MODULE_5__["TodaysWorksheetComponent"]]
        })
    ], TodaysWorksheetModule);
    return TodaysWorksheetModule;
}());



/***/ })

}]);
//# sourceMappingURL=worksheet-quick-action-todays-worksheet-todays-worksheet-module.js.map