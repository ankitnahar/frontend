(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~worksheet-dashboard-tab-worksheet-dashboard-tab-module~worksheet-module-worksheet-module~wor~61b728e4"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-befree-worksheet/view-befree-worksheet.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-befree-worksheet/view-befree-worksheet.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- review on knock back worksheet html start-->\r\n<div class=\"admin-review-or-knock-back-worksheet-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"with-filter-grid-container\">\r\n\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header MT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 MT-15 status-type-list\">\r\n              <a class=\"orange-color\">\r\n                <mat-icon class=\"material-icons\">fiber_manual_record</mat-icon>\r\n                Indicates Overdue Task</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onToggleFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li (click)=\"downloadExcel()\" *ngIf=\"tabData['export']\">\r\n              <a>\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc\r\n          <mat-icon class=\"material-icons\">close</mat-icon>\r\n        </span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientListParent\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Parent Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         (change)=\"onChangeParentEntity($event);\"\r\n                         formControlName=\"parent_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"entity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"masterActivityList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Master activity\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         (change)=\"getTaskFilterList($event)\"\r\n                         formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"taskList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Task\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         formControlName=\"task_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\">\r\n                  <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                    {{frequency.frequency_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"start_date\" [matDatepicker]=\"periodFrom\"\r\n                           placeholder=\"Period From\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"end_date\" [matDatepicker]=\"periodTo\" placeholder=\"Period To\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"due_date_from\" [matDatepicker]=\"dueDateFrom\"\r\n                           placeholder=\"Due date From\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDateFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDateFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"due_date_to\" [matDatepicker]=\"dueDateTo\" (click)=\"dueDateTo.open()\"\r\n                           placeholder=\"Due date To\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDateTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDateTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"category_id\" [multiple]=\"true\" placeholder=\"Category\">\r\n                  <mat-option *ngFor=\"let category of categoryData;\" [value]=\"category.key\">{{category.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"related_entity\" placeholder=\"Related Entity\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">{{yesNo.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"status_id\" placeholder=\"Status\">\r\n                  <mat-option *ngFor=\"let worksheetStatus of worksheetStatusList;\" value=\"{{worksheetStatus.id}}\">\r\n                    {{worksheetStatus.status_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"tamList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"TAM\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"staffList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Team Member\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"team_member\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Additional Staff\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"additional_assignee\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"lock_worksheet\" placeholder=\"Worksheet status\">\r\n                  <mat-option *ngFor=\"let lockData of worksheetLockList.slice(1);\" value=\"{{lockData.key}}\">\r\n                    {{lockData.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-9 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button [disabled]=\"filterForm.invalid\" type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"parent_id.value\">\r\n          <span class=\"tag__title\">Parent Trading Name :</span>\r\n          <span>\r\n             <ng-select [items]=\"clientListParent\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Parent Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"parent_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);onChangeParentEntity($event);\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"entity_id.value\">\r\n          <span class=\"tag__title\">Client name :</span>\r\n          <span>\r\n             <ng-select [items]=\"clientList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"entity_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"master_activity_id.value && master_activity_id.value.length\">\r\n          <span class=\"tag__title\">Master activity :</span>\r\n          <span>\r\n            <ng-select [items]=\"masterActivityList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);getTaskFilterList($event);\"\r\n                       formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('master_activity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"task_id.value && task_id.value.length\">\r\n          <span class=\"tag__title\">Task :</span>\r\n          <span>\r\n            <ng-select [items]=\"taskList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Task\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"task_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('task_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"frequency_id.value\">\r\n          <span class=\"tag__title\">Frequency :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n               <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                    {{frequency.frequency_name}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('frequency_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"start_date.value\">\r\n          <span class=\"tag__title\">Period From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"start_date\" [matDatepicker]=\"perdiodFromDate\"\r\n                     placeholder=\"Period From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('start_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"end_date.value\">\r\n          <span class=\"tag__title\">Period To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"end_date\" [matDatepicker]=\"perdiodToDate\" (click)=\"perdiodToDate.open()\"\r\n                     placeholder=\"Period To\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('end_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"due_date_from.value\">\r\n          <span class=\"tag__title\">Due Date From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"due_date_from\" [matDatepicker]=\"dueFromDate\" (click)=\"dueFromDate.open()\"\r\n                     placeholder=\"Due Date From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('due_date_from')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"due_date_to.value\">\r\n          <span class=\"tag__title\">Due Date To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"due_date_to\" [matDatepicker]=\"dueToDate\"\r\n                     placeholder=\"Due Date To\"\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"category_id.value\">\r\n          <span class=\"tag__title\">Category :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select [multiple]=\"true\" formControlName=\"category_id\" placeholder=\"Category\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let category of categoryData;\" [value]=\"category.key\">{{category.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('category_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"related_entity.value\">\r\n          <span class=\"tag__title\">Related Entity :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"related_entity\" placeholder=\"Related Entity\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n               <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">{{yesNo.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('related_entity')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"status_id.value\">\r\n          <span class=\"tag__title\">Status :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"status_id\" placeholder=\"Status\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let worksheetStatus of worksheetStatusList;\" value=\"{{worksheetStatus.id}}\">\r\n                    {{worksheetStatus.status_name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('status_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"technical_account_manager.value\">\r\n          <span class=\"tag__title\">TAM :</span>\r\n          <span>\r\n            <ng-select [items]=\"tamList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"TAM\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('technical_account_manager')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"team_member.value\">\r\n          <span class=\"tag__title\">Team member :</span>\r\n          <span>\r\n            <ng-select [items]=\"staffList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Team Member\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"team_member\">\r\n            </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('team_member')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"additional_assignee.value\">\r\n          <span class=\"tag__title\">Additional staff :</span>\r\n          <span>\r\n             <ng-select [items]=\"userList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"userfullname\"\r\n                        placeholder=\"Additional Staff\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                        formControlName=\"additional_assignee\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('additional_assignee')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"lock_worksheet.value\">\r\n          <span class=\"tag__title\">Status :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"lock_worksheet\" placeholder=\"Worksheet status\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                 <mat-option *ngFor=\"let lockData of worksheetLockList.slice(1);\" value=\"{{lockData.key}}\">\r\n                    {{lockData.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('lock_worksheet')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\" *ngIf=\"\r\n          entity_id.value || parent_id.value\r\n          || (master_activity_id.value && master_activity_id.value.length)\r\n          || (task_id.value && task_id.value.length)\r\n          || frequency_id.value\r\n          || start_date.value\r\n          || end_date.value\r\n          || due_date_to.value\r\n          || due_date_from.value\r\n          || category_id.value\r\n          || related_entity.value\r\n          || status_id.value\r\n          || technical_account_manager.value\r\n          || team_member.value\r\n          || additional_assignee.value\r\n          || lock_worksheet.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n  </div>\r\n\r\n  <!--my worksheet container html start-->\r\n  <div class=\"view-worksheet-tab-container\">\r\n    <div class=\"expand-grid\">\r\n      <div class=\"expand-grid__thead\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\"><span *ngIf=\"isMultipleWorksheetDelete\" class=\"MR-5\">\r\n              <mat-checkbox (change)=\"onSelectAllItem($event.checked)\"></mat-checkbox></span>Sr.No\r\n            </th>\r\n            <th width=\"11%\">Parent Trading Name</th>\r\n            <th width=\"11%\" (click)=\"getSortData('trading_name',\r\n            (sortBy === 'trading_name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Client Name\r\n              <i *ngIf=\"sortBy === 'trading_name'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'trading_name'),\r\n                 'icon-up' : ((sortBy === 'trading_name') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                {{(sortBy === 'trading_name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"10%\" (click)=\"getSortData('task_id',\r\n              (sortBy === 'task_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Task\r\n              <i *ngIf=\"sortBy === 'task_id'\" [ngClass]=\"{'material-icons': true,\r\n                  'active' : (sortBy === 'task_id'),\r\n                   'icon-up' : ((sortBy === 'task_id') && (sortOrder === 'asc')),\r\n                   'icon-down' : true}\">\r\n                {{(sortBy === 'task_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"7%\" (click)=\"getSortData('frequency_id',\r\n            (sortBy === 'frequency_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Frequency\r\n              <i *ngIf=\"sortBy === 'frequency_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'frequency_id'),\r\n                 'icon-up' : ((sortBy === 'frequency_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                {{(sortBy === 'frequency_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"8%\">Period Date\r\n              <mat-icon [matTooltip]=\"'Period Start Date & End Date'\" class=\"v-align-middle gray-color\">info</mat-icon>\r\n            </th>\r\n            <th width=\"8%\" (click)=\"getSortData('due_date',\r\n                  (sortBy === 'due_date') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Reminder/ Due Date\r\n              <i *ngIf=\"sortBy === 'due_date'\" [ngClass]=\"{'material-icons': true,\r\n                  'active' : (sortBy === 'due_date'),\r\n                  'icon-up' : ((sortBy === 'due_date') && (sortOrder === 'asc')),\r\n                  'icon-down' : true}\">\r\n                {{(sortBy === 'due_date') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"10%\">Notes\r\n            </th>\r\n            <th width=\"5%\">Units</th>\r\n\r\n            <th width=\"9%\">Status\r\n              <i *ngIf=\"sortBy === 'status_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'status_id'),\r\n                 'icon-up' : ((sortBy === 'status_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                {{(sortBy === 'status_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"11%\" (click)=\"getSortData('allocation',\r\n            (sortBy === 'allocation') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Staff\r\n              <i *ngIf=\"sortBy === 'allocation'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'allocation'),\r\n                 'icon-up' : ((sortBy === 'allocation') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                {{(sortBy === 'allocation') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"5%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n        <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n          <table *ngIf=\"worksheetListData.length\">\r\n            <tbody [ngClass]=\"{'red-tr' : data | dateCompare}\"\r\n                   *ngFor=\"let data of worksheetListData; let i = index;\">\r\n            <tr [ngClass]=\"{'is-active-row' : trIndex === i}\" class=\"row-data\">\r\n              <td width=\"5%\">\r\n                <span *ngIf=\"isMultipleWorksheetDelete\" class=\"MR-5\">\r\n                <mat-checkbox *ngIf=\"data.timesheet_total_unit === 0\" [checked]=\"selectAllWorksheetIDS\"\r\n                              (change)=\"onSelectItem($event.checked, data.id)\"></mat-checkbox>\r\n              </span>\r\n                <a class=\"open-inner-data\">\r\n                  <mat-icon [ngClass]=\"{'is-open' : trIndex === i}\" (click)=\"openRow(i)\">keyboard_arrow_down\r\n                  </mat-icon>\r\n                </a>\r\n                {{+pageSize * (pageIndex) + i + 1}}\r\n                <mat-icon *ngIf=\"data?.discontinue_stage == 1\" class=\"red-color v-align-middle\"\r\n                          [matTooltip]=\"'Discontinue Process Initiated'\">block\r\n                </mat-icon>\r\n              </td>\r\n              <td width=\"11%\" class=\"word-break\">{{data?.parent_name}}\r\n              <td width=\"11%\" class=\"word-break\">{{data?.trading_name}}\r\n              </td>\r\n              <td width=\"10%\" class=\"word-break\">{{data?.task_id?.name}}</td>\r\n              <td width=\"7%\">{{data?.frequency_name}}</td>\r\n              <td width=\"8%\" class=\"date_no_border\">\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangePeriodStartEndDate\">\r\n                    <input matInput [value]=\"data?.start_date\" [matDatepicker]=\"pickerStart\" placeholder=\"Select Date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'start_date', 'value': $event.target.value, 'id': data.id})\"\r\n                           readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerStart></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!canChangePeriodStartEndDate\" class=\"readonly_date\">{{data?.start_date | date : 'dd-MM-yyyy'}}</span>\r\n                </div>\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangePeriodStartEndDate\">\r\n                    <input matInput [matDatepicker]=\"pickerEnd\" (click)=\"pickerEnd.open()\" placeholder=\"Select Date\"\r\n                           [value]=\"data.end_date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'end_date', 'value': $event.target.value, 'id': data.id})\"\r\n                           readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerEnd></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!canChangePeriodStartEndDate\">{{data?.end_date | date : 'dd-MM-yyyy'}}</span>\r\n                </div>\r\n              </td>\r\n              <td width=\"8%\" class=\"date_no_border\">\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"tabID['add_edit']\">\r\n                    <input matInput [matDatepicker]=\"reminderDate\" (click)=\"reminderDate.open()\"\r\n                           [value]=\"data.reminder_date && data.reminder_date !== '0000-00-00' ? (data.reminder_date | date : 'dd-MM-yyyy') : ''\" placeholder=\"Select Date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'reminder_date', 'value':$event.target.value, 'id': data.id})\"\r\n                           readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"reminderDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #reminderDate></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!tabID['add_edit']\"\r\n                        class=\"readonly_date\">{{data.reminder_date && data.reminder_date !== '0000-00-00' ? (data.reminder_date | date : 'dd-MM-yyyy') : ''}}</span>\r\n                </div>\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangeDueDate\">\r\n                    <input matInput [matDatepicker]=\"dueDate\" (click)=\"dueDate.open()\" [value]=\"data.due_date\"\r\n                           placeholder=\"Select Date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'due_date', 'value':$event.target.value, 'id': data.id})\"\r\n                           readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDate></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!canChangeDueDate\">{{data.due_date | date : 'dd-MM-yyyy'}}</span>\r\n                </div>\r\n              </td>\r\n              <td width=\"10%\" class=\"word-break\">\r\n                <div ellipsis=\"Read More..\" class=\"multiline-ellipsis\" (click)=\"onWorksheetNotesDialog(data)\"\r\n                     (ellipsis-click-more)=\"on()\" *ngIf=\"data?.notes\">\r\n                  {{data?.notes}}\r\n                </div>\r\n                <a (click)=\"onWorksheetNotesDialog(data)\" *ngIf=\"!data?.notes\" class=\"cursor-pointer\">Add</a>\r\n              </td>\r\n              <td width=\"5%\"><span\r\n                class=\"label-gray-bg-color\"> {{data?.timesheet_total_unit}}</span></td>\r\n\r\n              <td width=\"9%\" class=\"no-float-label\">\r\n                <mat-form-field [floatLabel]=\"'never'\">\r\n                  <mat-select placeholder=\"Status\" [value]=\"data.status_id.id\"\r\n                              (selectionChange)=\"onUpdateStatus(data, $event.value)\">\r\n                    <mat-option *ngFor=\"let status of worksheetStatusList;\" [value]=\"status?.id\"\r\n                                disabled=\"{{status?.is_right === 1 ? false : true}}\">\r\n                      {{status.status_name}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </td>\r\n              <td width=\"11%\">\r\n                <div class=\"word-break\">\r\n                  <div *ngFor=\"let userData of data.allocation | teamListFormate; let j = index\">\r\n                    <div *ngIf=\"userData && (userData.key === 'TM' || userData.key === 'TAM')\">\r\n                      <span class=\"fw-500\">{{userData.key}}:</span>\r\n                      <span>{{userData.value}}</span>\r\n                    </div>\r\n                    <div *ngIf=\"!userData\"> Not specify</div>\r\n                  </div>\r\n                  <div *ngIf=\"data.worksheet_additional_assignee\">\r\n                    <span class=\"fw-500\">Add. Assignee:</span>\r\n                    <span>{{data.worksheet_additional_assignee.userfullname}}</span>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td width=\"5%\">\r\n                <ul>\r\n                  <li>\r\n                    <a (click)=\"onEditTaskCheckList(data)\" *ngIf=\"data?.taskchecklist === 1\" class=\"orange-color\">\r\n                      <mat-icon>playlist_add_check</mat-icon>\r\n                    </a>\r\n                    <a>\r\n                      <mat-icon [matMenuTriggerFor]=\"menuaction\">more_vert</mat-icon>\r\n                      <mat-menu #menuaction=\"matMenu\" class=\"column-menu\">\r\n                        <button mat-menu-item class=\"menu-header\">\r\n                          <h3>Action</h3>\r\n                        </button>\r\n                        <button mat-menu-item (click)=\"openWorksheetStatusLogDialog(data)\">\r\n                          <mat-icon>history</mat-icon>\r\n                          Worksheet status log\r\n                        </button>\r\n                        <button mat-menu-item (click)=\"onAddTimeSheet(data)\"\r\n                                *ngIf=\"userInfo?.user_timesheet_fillup_flag === 1\">\r\n                          <mat-icon>alarm_add</mat-icon>\r\n                          Add Timesheet\r\n                        </button>\r\n                        <button mat-menu-item (click)=\"onAddUsersTimeSheet(data)\"\r\n                                *ngIf=\"userInfo?.user_timesheet_fillup_flag === 1 && isAddUserTimeSheet\">\r\n                          <mat-icon>person_add</mat-icon>\r\n                          Add User Timesheet\r\n                        </button>\r\n                        <button mat-menu-item (click)=\"onViewUserTimesheet(data)\">\r\n                          <mat-icon>remove_red_eye</mat-icon>\r\n                          View User Timesheet\r\n                        </button>\r\n                        <button mat-menu-item (click)=\"onAllocateAssigneeDialog(data)\"\r\n                                *ngIf=\"isWorksheetAdditionalAssignee\">\r\n                          <mat-icon><span\r\n                            *ngIf=\"data.worksheet_additional_assignee === null\">person_outline</span>\r\n\r\n                            <span *ngIf=\"data.worksheet_additional_assignee !== null\">how_to_reg</span></mat-icon>\r\n                          Allocate Additional Assignee\r\n                        </button>\r\n                      </mat-menu>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"trIndex === i\" class=\"inner-data\">\r\n              <div class=\"row PT-10\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"inner-data__view-notes\">\r\n                    <div>Notes</div>\r\n                    <div>{{data.notes}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"inner-data__view\">\r\n                    <div>Category</div>\r\n                    <div>{{getCategoryName(data.category_id)}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <span *ngFor=\"let userData of data.allocation | teamListFormate;\">\r\n                    <span *ngIf=\"userData && (userData.key !== 'TM' && userData.key !== 'TAM')\">\r\n                    <div class=\"inner-data__view\">\r\n                        <div>{{userData.key}}</div>\r\n                        <div>{{userData.value}}</div>\r\n                    </div>\r\n                    </span>\r\n                    </span>\r\n                </div>\r\n              </div>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n        </div>\r\n        <div class=\"expand-grid__tfoot\" *ngIf=\"worksheetListData.length\">\r\n          <table>\r\n            <tfoot>\r\n            <tr>\r\n              <td colspan=\"10\">\r\n                <mat-paginator [length]=\"totalRecords\"\r\n                               [pageSize]=\"pageSize\"\r\n                               [pageIndex]=\"pageIndex\"\r\n                               [pageSizeOptions]=\"pageArray\"\r\n                               (page)=\"onPageChange($event)\">\r\n                </mat-paginator>\r\n              </td>\r\n            </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"worksheetListData.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- review on knock back worksheet html over-->\r\n</div>\r\n\r\n<!--Delete table row-->\r\n<div *ngIf=\"selectedWorksheetIDs.length > 0\" class=\"bottom-panel-action\">\r\n  <button (click)=\"onConfirmationDialogDeleteWorksheet()\" type=\"button\" class=\"btn-bordered btn-white\"><span\r\n    class=\"v-align-middle\">DELETE SELECTED\r\n    WORKSHEET </span>\r\n    <mat-icon class=\"v-align-middle\">keyboard_arrow_right</mat-icon>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-befree-worksheet/view-befree-worksheet.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-befree-worksheet/view-befree-worksheet.component.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid_select_8rem .mat-form-field {\n  width: 120px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vd29ya2Zsb3ctbW9kdWxlL3dvcmtzaGVldC1tb2R1bGUvd29ya3NoZWV0LWRhc2hib2FyZC10YWIvdmlldy1iZWZyZWUtd29ya3NoZWV0L0M6XFx3YW1wNjRcXHd3d1xcaGtfZnJvbnRlbmQvcHJvamVjdHNcXGFkbWluXFxzcmNcXGFwcFxcYWRtaW5cXHdvcmtmbG93LW1vZHVsZVxcd29ya3NoZWV0LW1vZHVsZVxcd29ya3NoZWV0LWRhc2hib2FyZC10YWJcXHZpZXctYmVmcmVlLXdvcmtzaGVldFxcdmlldy1iZWZyZWUtd29ya3NoZWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksdUJBQXVCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvYWRtaW4vc3JjL2FwcC9hZG1pbi93b3JrZmxvdy1tb2R1bGUvd29ya3NoZWV0LW1vZHVsZS93b3Jrc2hlZXQtZGFzaGJvYXJkLXRhYi92aWV3LWJlZnJlZS13b3Jrc2hlZXQvdmlldy1iZWZyZWUtd29ya3NoZWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWRfc2VsZWN0XzhyZW0ge1xyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-befree-worksheet/view-befree-worksheet.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-befree-worksheet/view-befree-worksheet.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Views, ViewBefreeWorksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBefreeWorksheetComponent", function() { return ViewBefreeWorksheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _worksheet_dashboard_action_worksheet_status_log_dialog_worksheet_status_log_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
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



















var Views;
(function (Views) {
    Views[Views["FILTER_VIEW_MAIN"] = 0] = "FILTER_VIEW_MAIN";
})(Views || (Views = {}));
var ViewBefreeWorksheetComponent = /** @class */ (function (_super) {
    __extends(ViewBefreeWorksheetComponent, _super);
    function ViewBefreeWorksheetComponent(_fb, dialog, _commonCrudService, _router, _sharedObjService, _sharedService) {
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
        _this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].WORKFLOW_VIEWBEFREEWORKSHEET;
        _this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
        _this.isAddUserTimeSheet = false;
        _this.tabTimeSheetID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].WORKFLOW_TIMESHEET;
        return _this;
    }
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "parent_id", {
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "entity_id", {
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "master_activity_id", {
        get: function () {
            return this.filterForm.get('master_activity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "task_id", {
        get: function () {
            return this.filterForm.get('task_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "frequency_id", {
        get: function () {
            return this.filterForm.get('frequency_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "start_date", {
        get: function () {
            return this.filterForm.get('start_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "end_date", {
        get: function () {
            return this.filterForm.get('end_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "due_date_from", {
        get: function () {
            return this.filterForm.get('due_date_from');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "due_date_to", {
        get: function () {
            return this.filterForm.get('due_date_to');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "category_id", {
        get: function () {
            return this.filterForm.get('category_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "related_entity", {
        get: function () {
            return this.filterForm.get('related_entity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "status_id", {
        get: function () {
            return this.filterForm.get('status_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "lock_worksheet", {
        get: function () {
            return this.filterForm.get('lock_worksheet');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "technical_account_manager", {
        get: function () {
            return this.filterForm.get('technical_account_manager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "team_member", {
        get: function () {
            return this.filterForm.get('team_member');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewBefreeWorksheetComponent.prototype, "additional_assignee", {
        get: function () {
            return this.filterForm.get('additional_assignee');
        },
        enumerable: true,
        configurable: true
    });
    ViewBefreeWorksheetComponent.prototype.ngOnInit = function () {
        this.userInfo = this._sharedService.getUser();
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.isMultipleStatusUpdate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetstatuschange', 1);
        this.isMultipleWorksheetDelete = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetdelete', 1);
        this.isWorksheetAdditionalAssignee = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'worksheetadditionalassignee', 1);
        this.canChangePeriodStartEndDate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'canchangeperiodstartdate_enddate', 1);
        this.canChangeDueDate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'canchangeduedate', 1);
        this.isAddUserTimeSheet = this._sharedService.checkUserPrivileges(this.tabTimeSheetID, 'otherRights', 'otherRights', 'button_name', 'add_user_timesheet', 1);
        this.createAdvanceFilterForm();
        this.getDropdownData();
        this.setAdvanceFilter(this.filterForm);
        // My Worksheet Status Wise Counter
        // this._commonCrudService.listData(AdminAPI.BEFREE_WORKSHEET_LISTING, {
        //   'statuscounter': 1,
        //   'records': 'all',
        //   'type': 'befree'
        // }, {}).subscribe(response => {
        //   this.worksheetStatusCounter = response.payload.data;
        // });
    };
    /**
     * Get frequency data
     */
    ViewBefreeWorksheetComponent.prototype.getDropdownData = function () {
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
        this._sharedObjService.getUserList({ 'records': 'all', "field": "user.id,user.userfullname" }, { compare: { equal: { is_active: 1 } } }).subscribe(function (response) {
            _this.userList = response;
            _this.staffList = _this.userList.filter(function (data) { return (data['designation_id']) ? +data['designation_id'] === 10 : 0; });
            _this.tamList = _this.userList.filter(function (data) { return (data['designation_id']) ? +data['designation_id'] === 9 : 0; });
        });
    };
    /**
     * Get Worksheet Listing
     * @param pageNumber
     * @param key
     * @param val
     */
    ViewBefreeWorksheetComponent.prototype.getWorksheetListing = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].BEFREE_WORKSHEET_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleWorksheetRespone(response);
        });
    };
    /**
     * Handle Worksheet Response
     * @param response
     */
    ViewBefreeWorksheetComponent.prototype.handleWorksheetRespone = function (response) {
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
    ViewBefreeWorksheetComponent.prototype.createAdvanceFilterForm = function () {
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
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            lock_worksheet: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
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
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            lock_worksheet: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    };
    /**
     * Update Due Date + Period Start + End Date + Reminder Date
     * @param object
     */
    ViewBefreeWorksheetComponent.prototype.onUpdateStatus = function (worksheetData, statusChanged) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmationDialogComponent"], {
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
                    _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].UPDATE_WORKSHEET, worksheetData.id, {
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
     * On task checklist redirect
     */
    ViewBefreeWorksheetComponent.prototype.onEditTaskCheckList = function (data, isReadOnly) {
        // If Read Only Then Redirect to other page
        if (isReadOnly === 1) {
            this._sharedService.setChecklistViewData(null);
            this._sharedService.setChecklistViewData(data);
            // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].TASK_CHECKLIST, '_blank');
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
                        window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].EDIT_TASK_CHECKLIST, '_blank');
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
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].EDIT_TASK_CHECKLIST, '_blank');
                        });
                    }
                    else {
                        this._sharedService.setChecklistViewData(null);
                        this._sharedService.setChecklistViewData(data);
                        // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                        this._router.navigate([]).then(function (result) {
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                        });
                    }
                }
                else {
                    this._sharedService.setChecklistViewData(null);
                    this._sharedService.setChecklistViewData(data);
                    // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                    this._router.navigate([]).then(function (result) {
                        window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].TASK_CHECKLIST, '_blank');
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
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].EDIT_TASK_CHECKLIST_TAM, '_blank');
                        });
                    }
                    else {
                        this._sharedService.setChecklistViewData(null);
                        this._sharedService.setChecklistViewData(data);
                        // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                        this._router.navigate([]).then(function (result) {
                            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                        });
                    }
                }
                else {
                    this._sharedService.setChecklistViewData(null);
                    this._sharedService.setChecklistViewData(data);
                    // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                    this._router.navigate([]).then(function (result) {
                        window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                    });
                }
            }
            else if (data.taskchecklist === 1 && (data.status_id.id === 22) && (data.worksheet_peerreviewer !== null) && (data.worksheet_peerreviewer.id === this.userInfo.id)) {
                this._sharedService.setPeerReviewChecklistData(null);
                this._sharedService.setPeerReviewChecklistData(data);
                // this._router.navigate(['/' + AdminRoutes.EDIT_TASK_CHECKLIST_PEER_REVIEW]);
                this._router.navigate([]).then(function (result) {
                    window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].EDIT_TASK_CHECKLIST_PEER_REVIEW, '_blank');
                });
            }
            else {
                this._sharedService.setChecklistViewData(null);
                this._sharedService.setChecklistViewData(data);
                // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
                this._router.navigate([]).then(function (result) {
                    window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].TASK_CHECKLIST, '_blank');
                });
            }
        }
    };
    /**
     * Add Edit Master Activity Dialog
     */
    ViewBefreeWorksheetComponent.prototype.openAddEditMasterActivityDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_13__["ReviewActionAllocateReviewerDialog"], {
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
    ViewBefreeWorksheetComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Pagination page change event
     * @param event
     */
    ViewBefreeWorksheetComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getWorksheetListing(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    ViewBefreeWorksheetComponent.prototype.resetFilterForm = function () {
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
    ViewBefreeWorksheetComponent.prototype.onKeydownHandler = function (event) {
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
    ViewBefreeWorksheetComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
        params['type'] = 'befree';
        return params;
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    ViewBefreeWorksheetComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getWorksheetListing(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    ViewBefreeWorksheetComponent.prototype.getSearchParam = function () {
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
    ViewBefreeWorksheetComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all', 'type': 'befree' };
        if (this.tamId) {
            params['technical_account_manager'] = this.tamId;
        }
        if (this.teamId) {
            params['team_member'] = this.teamId;
        }
        if (this.assigneeId) {
            params['additional_assignee'] = this.assigneeId;
        }
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].BEFREE_WORKSHEET_LISTING, params, this.getSearchParam(), 'Befree Worksheet ', 0).subscribe(function (response) {
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    ViewBefreeWorksheetComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
    ViewBefreeWorksheetComponent.prototype.setAdvanceFilter = function (form, flag) {
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
                    if (key === 'parent_id' || key === 'entity_id' || key === 'frequency_id'
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
    ViewBefreeWorksheetComponent.prototype.onClearTag = function (elementName, JsonElementName) {
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
        else if (elementName === 'parent_id' || elementName === 'entity_id' || elementName === 'frequency_id'
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
    ViewBefreeWorksheetComponent.prototype.onChangeUpdateFilterField = function (value) {
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
    ViewBefreeWorksheetComponent.prototype.getTaskFilterList = function (value) {
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
    ViewBefreeWorksheetComponent.prototype.openAddEditSubActivityDialog = function () {
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_13__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Open filter
     */
    ViewBefreeWorksheetComponent.prototype.onOpenFilter = function () {
        this.activeView = this.enumView.FILTER_VIEW_MAIN;
    };
    /**
     * Expand row table
     * @param i
     */
    ViewBefreeWorksheetComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Close filter
     */
    ViewBefreeWorksheetComponent.prototype.onCloseFilter = function () {
        this.activeView = null;
    };
    /**
     * Close modal
     * @param event
     */
    ViewBefreeWorksheetComponent.prototype.onCloseDialog = function (event) {
        this.activeView = event;
    };
    /**
     * On delete table row
     */
    ViewBefreeWorksheetComponent.prototype.onDeleteItem = function (event) {
        this.deleteItem.emit(event);
    };
    /**
     * View timesheet page redirect
     */
    ViewBefreeWorksheetComponent.prototype.onViewTimeSheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * Task CEhcklist page redirect
     */
    ViewBefreeWorksheetComponent.prototype.onTaskChecklist = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * redirection worksheet dashboard
     */
    ViewBefreeWorksheetComponent.prototype.onWorksheetDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * Review Allocation page redirection
     */
    ViewBefreeWorksheetComponent.prototype.openReviewAllocateDialog = function () {
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_13__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Get All Status
     */
    ViewBefreeWorksheetComponent.prototype.getAllStatus = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].GET_ALL_STATUS, {}, {}).subscribe(function (response) {
            _this.statusArray = response.payload.data;
        });
    };
    /**
     * Update Due Date + Period Start + End Date + Reminder Date
     * @param object
     */
    ViewBefreeWorksheetComponent.prototype.updateInlineFormDates = function (object) {
        var _this = this;
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
                _this.getWorksheetListing(1, 'due_date', 'asc');
            });
        }
    };
    /**
     * On Change Update Notes Param
     * @param notes
     */
    ViewBefreeWorksheetComponent.prototype.onChangeUpdateNotesParam = function (notes, id) {
        this.noteToUpdate[id] = notes;
    };
    /**
     * On Submit Update Notes
     * @param id
     */
    ViewBefreeWorksheetComponent.prototype.onSubmitUpdateNotes = function (id) {
        var _this = this;
        var notes = this.noteToUpdate[id];
        if (notes) {
            // Update worksheet date
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].UPDATE_WORKSHEET, id, {
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
    ViewBefreeWorksheetComponent.prototype.openWorksheetStatusLogDialog = function (worksheetData) {
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
    ViewBefreeWorksheetComponent.prototype.onAddTimeSheet = function (worksheetData) {
        if (worksheetData) {
            this._sharedService.setWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GLOBALDATAKEYS"].WORKSHEET_ITEM_DATA, worksheetData);
            // this._router.navigate(['/' + AdminRoutes.ADD_TIMESHEET]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].ADD_TIMESHEET, '_blank');
            });
        }
    };
    /**
     * On users timesheet page redirect
     */
    ViewBefreeWorksheetComponent.prototype.onAddUsersTimeSheet = function (worksheetData) {
        if (worksheetData) {
            this._sharedService.setWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GLOBALDATAKEYS"].WORKSHEET_ITEM_DATA, worksheetData);
            // this._router.navigate(['/' + AdminRoutes.ADD_USERS_TIMESHEET]);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].ADD_USERS_TIMESHEET, '_blank');
            });
        }
    };
    /**
     * On click of view timesheet
     * @param worksheetData
     */
    ViewBefreeWorksheetComponent.prototype.onViewUserTimesheet = function (worksheetData) {
        var jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_14__["convertURLParamToEncode"])({
            'entity_id': worksheetData.entity_id,
            'start_date': worksheetData.start_date,
            'end_date': worksheetData.end_date,
            'viewTimesheet': 1,
            'task_id': worksheetData.task_id.id
        });
        if (jsonData) {
            this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET], { queryParams: jsonData });
        }
    };
    ViewBefreeWorksheetComponent.prototype.onPreviewEmail = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].TASK_CHECKLIST_EMAIL_PREVIEW]);
    };
    ViewBefreeWorksheetComponent.prototype.onAllocateAssigneeDialog = function (worksheet) {
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_13__["ReviewActionAllocateReviewerDialog"], {
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
    ViewBefreeWorksheetComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Status List
     * @param {number} cat_id
     * @returns {string}
     */
    ViewBefreeWorksheetComponent.prototype.getCategoryName = function (cat_id) {
        var val = this.categoryData.filter(function (elem) { return elem.key === Number(cat_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Select All Item of Event
     * @param event
     */
    ViewBefreeWorksheetComponent.prototype.onSelectAllItem = function (event) {
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
    ViewBefreeWorksheetComponent.prototype.onSelectItem = function (event, id) {
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
    ViewBefreeWorksheetComponent.prototype.onConfirmationDialogDeleteWorksheet = function () {
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
     * Worksheet Notes Dialog
     * @param worksheetData
     */
    ViewBefreeWorksheetComponent.prototype.onWorksheetNotesDialog = function (worksheetData) {
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
    ViewBefreeWorksheetComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ViewBefreeWorksheetComponent.prototype, "befreeWorksheetCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ViewBefreeWorksheetComponent.prototype, "deleteItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ViewBefreeWorksheetComponent.prototype, "onKeydownHandler", null);
    ViewBefreeWorksheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-befree-worksheet',
            template: __webpack_require__(/*! ./view-befree-worksheet.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-befree-worksheet/view-befree-worksheet.component.html"),
            styles: [__webpack_require__(/*! ./view-befree-worksheet.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-befree-worksheet/view-befree-worksheet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], ViewBefreeWorksheetComponent);
    return ViewBefreeWorksheetComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-completed/view-completed.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-completed/view-completed.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"with-filter-grid-container\">\r\n\r\n  <!-- Start Grid Inner Header -->\r\n  <div class=\"grid-inner-header MT-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 inner-header-title\">\r\n        <h3>View Completed Worksheet</h3>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"download-icon\">\r\n          <li>\r\n            <a (click)=\"onToggleFilter()\">\r\n              <span>Filter</span> <i class=\"material-icons\">filter_list</i>\r\n            </a>\r\n          </li>\r\n\r\n          <li>\r\n            <a (click)=\"downloadExcel()\" *ngIf=\"tabData['export']\">\r\n              <span>Excel</span> <i class=\"material-icons\">file_download</i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n\r\n  <!-- Start Grid Filter -->\r\n  <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n    <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc\r\n          <mat-icon class=\"material-icons\">close</mat-icon>\r\n        </span>\r\n    </div>\r\n    <div class=\"grid-filter-container\">\r\n      <div class=\"filter-title\">\r\n        <h3>Advance Filter</h3>\r\n      </div>\r\n      <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 MT-10\">\r\n            <ng-select [items]=\"clientListParent\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Parent Trading Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"onChangeParentEntity($event);\"\r\n                       formControlName=\"parent_id\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-3 MT-10\">\r\n            <ng-select [items]=\"clientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"entity_id\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <ng-select [items]=\"masterActivityList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"getTaskFilterList($event)\"\r\n                       formControlName=\"master_activity_id\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <ng-select [items]=\"taskList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Task\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       formControlName=\"task_id\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\">\r\n                <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                  {{frequency.frequency_name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 PL-0\">\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"start_date\" [matDatepicker]=\"periodFrom\"\r\n                         placeholder=\"Period From\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"periodFrom\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #periodFrom></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"col-md-6 PR-0\">\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"end_date\" [matDatepicker]=\"periodTo\" placeholder=\"Period To\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"periodTo\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #periodTo></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 PL-0\">\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"due_date_from\" [matDatepicker]=\"dueDateFrom\"\r\n                         placeholder=\"Due date From\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"dueDateFrom\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #dueDateFrom></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"col-md-6 PR-0\">\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"due_date_to\" [matDatepicker]=\"dueDateTo\" (click)=\"dueDateTo.open()\"\r\n                         placeholder=\"Due date To\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"dueDateTo\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #dueDateTo></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"category_id\" [multiple]=\"true\" placeholder=\"Category\">\r\n                <mat-option *ngFor=\"let category of categoryData;\" [value]=\"category.key\">{{category.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"related_entity\" placeholder=\"Related Entity\">\r\n                <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">{{yesNo.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"status_id\" placeholder=\"Status\">\r\n                <mat-option *ngFor=\"let worksheetStatus of worksheetStatusList;\" value=\"{{worksheetStatus.id}}\">\r\n                  {{worksheetStatus.status_name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <ng-select [items]=\"tamList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"TAM\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"technical_account_manager\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <ng-select [items]=\"staffList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Team Member\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"team_member\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <ng-select [items]=\"userList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Additional Staff\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"additional_assignee\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"lock_worksheet\" placeholder=\"Worksheet status\">\r\n                <mat-option *ngFor=\"let lockData of worksheetLockList.slice(1);\" value=\"{{lockData.key}}\">\r\n                  {{lockData.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-9 MT-10 text-right\">\r\n            <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n            <button [disabled]=\"filterForm.invalid\" type=\"submit\" class=\"btn-primary\">Search</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Filter -->\r\n\r\n  <!-- Start Filter Tags -->\r\n  <div class=\"filter-tags\">\r\n    <form [formGroup]=\"advanceFilterForm\">\r\n      <div class=\"tag\" *ngIf=\"parent_id.value\">\r\n        <span class=\"tag__title\">Parent Trading Name :</span>\r\n        <span>\r\n             <ng-select [items]=\"clientListParent\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"parent_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);onChangeParentEntity($event);\">\r\n              </ng-select>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n      </div>\r\n      <div class=\"tag\" *ngIf=\"entity_id.value\">\r\n        <span class=\"tag__title\">Client name :</span>\r\n        <span>\r\n             <ng-select [items]=\"clientList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"entity_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"master_activity_id.value && master_activity_id.value.length\">\r\n        <span class=\"tag__title\">Master activity :</span>\r\n        <span>\r\n            <ng-select [items]=\"masterActivityList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);getTaskFilterList($event);\"\r\n                       formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('master_activity_id')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"task_id.value && task_id.value.length\">\r\n        <span class=\"tag__title\">Task :</span>\r\n        <span>\r\n            <ng-select [items]=\"taskList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Task\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"task_id\">\r\n              </ng-select>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('task_id')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"frequency_id.value\">\r\n        <span class=\"tag__title\">Frequency :</span>\r\n        <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n               <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                    {{frequency.frequency_name}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('frequency_id')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"start_date.value\">\r\n        <span class=\"tag__title\">Period From :</span>\r\n        <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"start_date\" [matDatepicker]=\"perdiodFromDate\"\r\n                     placeholder=\"Period From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('start_date')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"end_date.value\">\r\n        <span class=\"tag__title\">Period To :</span>\r\n        <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"end_date\" [matDatepicker]=\"perdiodToDate\" (click)=\"perdiodToDate.open()\"\r\n                     placeholder=\"Period To\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('end_date')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"due_date_from.value\">\r\n        <span class=\"tag__title\">Due Date From :</span>\r\n        <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"due_date_from\" [matDatepicker]=\"dueFromDate\" (click)=\"dueFromDate.open()\"\r\n                     placeholder=\"Due Date From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('due_date_from')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"due_date_to.value\">\r\n        <span class=\"tag__title\">Due Date To :</span>\r\n        <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"due_date_to\" [matDatepicker]=\"dueToDate\"\r\n                     placeholder=\"Due Date To\"\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"category_id.value\">\r\n        <span class=\"tag__title\">Category :</span>\r\n        <span>\r\n            <mat-form-field>\r\n              <mat-select [multiple]=\"true\" formControlName=\"category_id\" placeholder=\"Category\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let category of categoryData;\" [value]=\"category.key\">{{category.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('category_id')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"related_entity.value\">\r\n        <span class=\"tag__title\">Related Entity :</span>\r\n        <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"related_entity\" placeholder=\"Related Entity\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n               <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">{{yesNo.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('related_entity')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"status_id.value\">\r\n        <span class=\"tag__title\">Status :</span>\r\n        <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"status_id\" placeholder=\"Status\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let worksheetStatus of worksheetStatusList;\" value=\"{{worksheetStatus.id}}\">\r\n                    {{worksheetStatus.status_name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('status_id')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"technical_account_manager.value\">\r\n        <span class=\"tag__title\">TAM :</span>\r\n        <span>\r\n            <ng-select [items]=\"tamList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"TAM\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('technical_account_manager')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"team_member.value\">\r\n        <span class=\"tag__title\">Team member :</span>\r\n        <span>\r\n            <ng-select [items]=\"staffList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Team Member\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"team_member\">\r\n            </ng-select>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('team_member')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"additional_assignee.value\">\r\n        <span class=\"tag__title\">Additional staff :</span>\r\n        <span>\r\n             <ng-select [items]=\"userList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"userfullname\"\r\n                        placeholder=\"Additional Staff\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                        formControlName=\"additional_assignee\">\r\n              </ng-select>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('additional_assignee')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"lock_worksheet.value\">\r\n        <span class=\"tag__title\">Status :</span>\r\n        <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"lock_worksheet\" placeholder=\"Worksheet status\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                 <mat-option *ngFor=\"let lockData of worksheetLockList.slice(1);\" value=\"{{lockData.key}}\">\r\n                    {{lockData.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('lock_worksheet')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"clearAll-tags\" *ngIf=\"\r\n          entity_id.value || parent_id.value\r\n          || (master_activity_id.value && master_activity_id.value.length)\r\n          || (task_id.value && task_id.value.length)\r\n          || frequency_id.value\r\n          || start_date.value\r\n          || end_date.value\r\n          || due_date_to.value\r\n          || due_date_from.value\r\n          || category_id.value\r\n          || related_entity.value\r\n          || status_id.value\r\n          || technical_account_manager.value\r\n          || team_member.value\r\n          || additional_assignee.value\r\n          || lock_worksheet.value\">\r\n        <a (click)=\"resetFilterForm()\">Clear all</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- End Filter Tags -->\r\n\r\n  <!--my worksheet container html start-->\r\n  <div class=\"view-worksheet-tab-container\">\r\n    <div class=\"expand-grid\">\r\n      <div class=\"expand-grid\">\r\n        <div>\r\n          <div class=\"expand-grid__thead\">\r\n            <table>\r\n              <thead>\r\n              <tr>\r\n                <th width=\"5%\">Sr. No.</th>\r\n                <th width=\"11%\">Parent Trading Name</th>\r\n                <th width=\"11%\" (click)=\"getSortData('trading_name',\r\n            (sortBy === 'trading_name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Client Name\r\n                  <i *ngIf=\"sortBy === 'trading_name'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'trading_name'),\r\n                 'icon-up' : ((sortBy === 'trading_name') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                    {{(sortBy === 'trading_name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n\r\n                <th width=\"10%\" (click)=\"getSortData('task_id',\r\n              (sortBy === 'task_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Task\r\n                  <i *ngIf=\"sortBy === 'task_id'\" [ngClass]=\"{'material-icons': true,\r\n                  'active' : (sortBy === 'task_id'),\r\n                   'icon-up' : ((sortBy === 'task_id') && (sortOrder === 'asc')),\r\n                   'icon-down' : true}\">\r\n                    {{(sortBy === 'task_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n\r\n                <th width=\"7%\" (click)=\"getSortData('frequency_id',\r\n            (sortBy === 'frequency_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Frequency\r\n                  <i *ngIf=\"sortBy === 'frequency_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'frequency_id'),\r\n                 'icon-up' : ((sortBy === 'frequency_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                    {{(sortBy === 'frequency_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n                <th width=\"12%\">Period Date\r\n                  <mat-icon [matTooltip]=\"'Period Start Date & End Date'\" class=\"v-align-middle gray-color\">info\r\n                  </mat-icon>\r\n                </th>\r\n                <th width=\"6%\" (click)=\"getSortData('due_date',\r\n            (sortBy === 'due_date') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Due Date\r\n                  <i *ngIf=\"sortBy === 'due_date'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'due_date'),\r\n                 'icon-up' : ((sortBy === 'due_date') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                    {{(sortBy === 'due_date') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n                <th width=\"10%\">Notes\r\n                </th>\r\n                <th width=\"5%\">Units</th>\r\n                <th width=\"9%\">Staff</th>\r\n                <th width=\"9%\">Status\r\n                  <i *ngIf=\"sortBy === 'status_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'status_id'),\r\n                 'icon-up' : ((sortBy === 'status_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                    {{(sortBy === 'status_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                    'arrow_downward'}}\r\n                  </i>\r\n                </th>\r\n                <th width=\"5%\">Action</th>\r\n              </tr>\r\n              </thead>\r\n            </table>\r\n          </div>\r\n          <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n            <table *ngIf=\"worksheetListData.length\">\r\n              <tbody *ngFor=\"let data of worksheetListData; let i = index;\">\r\n              <tr [ngClass]=\"{'is-active-row' : trIndex === i}\" class=\"hover-icons row-data\">\r\n                <td width=\"5%\">\r\n                  <a class=\"open-inner-data\" (click)=\"openRow(i)\">\r\n                    <mat-icon [ngClass]=\"{'is-open' : trIndex === i}\" class=\"material-icons\">keyboard_arrow_down\r\n                    </mat-icon>\r\n                  </a>\r\n                  {{+pageSize * (pageIndex) + i + 1}}\r\n                  <mat-icon *ngIf=\"data?.discontinue_stage == 1\" class=\"red-color v-align-middle\"\r\n                            [matTooltip]=\"'Discontinue Process Initiated'\">block\r\n                  </mat-icon>\r\n                </td>\r\n                <td width=\"11%\" class=\"word-break\">{{data?.parent_name}}\r\n                <td width=\"11%\" class=\"word-break\">{{data?.trading_name}}\r\n                </td>\r\n                <td width=\"10%\" class=\"word-break\">{{data?.task_id?.name}}</td>\r\n                <td width=\"7%\" class=\"word-break\">{{data?.frequency_name}}</td>\r\n                <td width=\"12%\" class=\"word-break\">{{data?.start_date | date : 'dd-MM-yyyy'}} to {{data?.end_date |\r\n                  date : 'dd-MM-yyyy'}}\r\n                </td>\r\n                <td width=\"6%\" class=\"orange-color\">{{data.due_date | date : 'dd-MM-yyyy'}}</td>\r\n\r\n                <td width=\"10%\" class=\"word-break\">\r\n                  <div ellipsis=\"Read More..\" class=\"multiline-ellipsis\" (click)=\"onWorksheetNotesDialog(data)\"\r\n                       (ellipsis-click-more)=\"on()\" *ngIf=\"data?.notes\">\r\n                    {{data?.notes}}\r\n                  </div>\r\n                </td>\r\n                <td width=\"5%\"><span\r\n                  class=\"label-gray-bg-color\"> {{data?.timesheet_total_unit}}</span></td>\r\n\r\n                <td width=\"9%\">\r\n                  <div class=\"word-break\">\r\n                    <div *ngFor=\"let userData of data.allocation | teamListFormate; let j = index\">\r\n                      <div *ngIf=\"userData && (userData.key === 'TM' || userData.key === 'TAM')\">\r\n                        <span class=\"fw-500\">{{userData.key}}:</span>\r\n                        <span>{{userData.value}}</span>\r\n                      </div>\r\n                      <div *ngIf=\"!userData\"> Not specify</div>\r\n                    </div>\r\n                    <div *ngIf=\"data.worksheet_additional_assignee\">\r\n                      <span class=\"fw-500\">Add. Assignee:</span>\r\n                      <span>{{data.worksheet_additional_assignee.userfullname}}</span>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n\r\n                <td width=\"9%\" class=\"word-break\">\r\n                  <span class=\"label-turquoise-bg-color\">{{data?.status_id?.status_name}}</span> {{data.completed_on |\r\n                  date : 'dd-MM-yyyy'}}\r\n                </td>\r\n\r\n                <td width=\"5%\">\r\n                  <ul>\r\n                    <li>\r\n                      <a (click)=\"onEditTaskCheckList(data)\" *ngIf=\"data?.taskchecklist === 1\" class=\"orange-color\"\r\n                         [matTooltip]=\"'Task checklist'\"><i\r\n                        class=\"material-icons\">playlist_add_check</i></a>\r\n                      <mat-icon [matMenuTriggerFor]=\"menuaction\">more_vert</mat-icon>\r\n                      <mat-menu #menuaction=\"matMenu\" class=\"column-menu\">\r\n                        <button mat-menu-item class=\"menu-header\">\r\n                          <h3>Action</h3>\r\n                        </button>\r\n                        <button mat-menu-item (click)=\"openWorksheetStatusLogDialog(data)\">\r\n                          <mat-icon>history</mat-icon>\r\n                          Worksheet status log\r\n                        </button>\r\n                        <button mat-menu-item (click)=\"onViewUserTimesheet(data)\">\r\n                          <mat-icon>remove_red_eye</mat-icon>\r\n                          View User Timesheet\r\n                        </button>\r\n                      </mat-menu>\r\n                    </li>\r\n                  </ul>\r\n\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"trIndex === i\" class=\"inner-data\">\r\n                <div class=\"row PT-10\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"inner-data__view-notes\">\r\n                      <div>Notes</div>\r\n                      <div>{{data.notes}}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"inner-data__view\">\r\n                      <div>Category</div>\r\n                      <div>{{getCategoryName(data.category_id)}}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"inner-data__view\">\r\n                      <div>Rating</div>\r\n                      <div>{{getUserRating(data.user_rating)}}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <span *ngFor=\"let userData of data.allocation | teamListFormate;\">\r\n                    <span *ngIf=\"userData && (userData.key !== 'TM' && userData.key !== 'TAM')\">\r\n                    <div class=\"inner-data__view\">\r\n                        <div>{{userData.key}}</div>\r\n                        <div>{{userData.value}}</div>\r\n                    </div>\r\n                    </span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"expand-grid__tfoot\" *ngIf=\"worksheetListData.length\">\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"worksheetListData.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- View completed worksheet html over-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-completed/view-completed.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-completed/view-completed.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-inner-header .inner-header-title h3 {\n  line-height: 3rem; }\n\n.grid_select_8rem .mat-form-field {\n  width: 120px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vd29ya2Zsb3ctbW9kdWxlL3dvcmtzaGVldC1tb2R1bGUvd29ya3NoZWV0LWRhc2hib2FyZC10YWIvdmlldy1jb21wbGV0ZWQvQzpcXHdhbXA2NFxcd3d3XFxoa19mcm9udGVuZC9wcm9qZWN0c1xcYWRtaW5cXHNyY1xcYXBwXFxhZG1pblxcd29ya2Zsb3ctbW9kdWxlXFx3b3Jrc2hlZXQtbW9kdWxlXFx3b3Jrc2hlZXQtZGFzaGJvYXJkLXRhYlxcdmlldy1jb21wbGV0ZWRcXHZpZXctY29tcGxldGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBRUksdUJBQXVCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvYWRtaW4vc3JjL2FwcC9hZG1pbi93b3JrZmxvdy1tb2R1bGUvd29ya3NoZWV0LW1vZHVsZS93b3Jrc2hlZXQtZGFzaGJvYXJkLXRhYi92aWV3LWNvbXBsZXRlZC92aWV3LWNvbXBsZXRlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWlubmVyLWhlYWRlciAuaW5uZXItaGVhZGVyLXRpdGxlIGgzIHtcclxuICBsaW5lLWhlaWdodDogM3JlbTtcclxufVxyXG5cclxuLmdyaWRfc2VsZWN0XzhyZW0ge1xyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-completed/view-completed.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-completed/view-completed.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: Views, ViewCompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCompletedComponent", function() { return ViewCompletedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _worksheet_dashboard_action_worksheet_status_log_dialog_worksheet_status_log_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
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
var ViewCompletedComponent = /** @class */ (function (_super) {
    __extends(ViewCompletedComponent, _super);
    function ViewCompletedComponent(_fb, dialog, _commonCrudService, _router, _sharedObjService, _sharedService) {
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
        _this.categoryData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["category"];
        _this.staffList = [];
        _this.tamList = [];
        _this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["yesNo"];
        _this.worksheetLockList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["worksheetStatusLog"];
        _this.userWorksheetRatingList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["UserWorksheetRatting"];
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
        _this.equalJSON = {};
        _this.likeJSON = {};
        _this.inJSON = {};
        // State variables
        _this.trIndex = -1;
        _this.isPlay = [];
        _this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.selectedWorksheetIDs = [];
        _this.selectAllWorksheetIDS = false;
        _this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_16__["ADMINTABACCESS"].WORKFLOW_VIEWCOMPLETEDWORKSHEET;
        _this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_16__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
        _this.todayDate = '';
        _this.minPreviousMonth = 3;
        return _this;
    }
    Object.defineProperty(ViewCompletedComponent.prototype, "parent_id", {
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "entity_id", {
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "master_activity_id", {
        get: function () {
            return this.filterForm.get('master_activity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "task_id", {
        get: function () {
            return this.filterForm.get('task_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "frequency_id", {
        get: function () {
            return this.filterForm.get('frequency_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "start_date", {
        get: function () {
            return this.filterForm.get('start_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "end_date", {
        get: function () {
            return this.filterForm.get('end_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "due_date_from", {
        get: function () {
            return this.filterForm.get('due_date_from');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "due_date_to", {
        get: function () {
            return this.filterForm.get('due_date_to');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "category_id", {
        get: function () {
            return this.filterForm.get('category_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "related_entity", {
        get: function () {
            return this.filterForm.get('related_entity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "status_id", {
        get: function () {
            return this.filterForm.get('status_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "lock_worksheet", {
        get: function () {
            return this.filterForm.get('lock_worksheet');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "technical_account_manager", {
        get: function () {
            return this.filterForm.get('technical_account_manager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "team_member", {
        get: function () {
            return this.filterForm.get('team_member');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewCompletedComponent.prototype, "additional_assignee", {
        get: function () {
            return this.filterForm.get('additional_assignee');
        },
        enumerable: true,
        configurable: true
    });
    ViewCompletedComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_12__(new Date()).format('YYYY-MM-DD');
        var todaysdate = new Date();
        var year = todaysdate.getFullYear();
        var month = todaysdate.getMonth();
        var day = todaysdate.getDate();
        this.previousDate = new Date(year, month - this.minPreviousMonth, day);
        this.createAdvanceFilterForm();
        this.getDropdownData();
        this.setAdvanceFilter(this.filterForm);
    };
    /**
     * Get frequency data
     */
    ViewCompletedComponent.prototype.getDropdownData = function () {
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
        this._sharedObjService.getUserList({ 'records': 'all', "field": "user.id,user.userfullname" }, { compare: { equal: { is_active: 1 } } }).subscribe(function (response) {
            _this.userList = response;
            _this.staffList = _this.userList.filter(function (data) { return (data['designation_id']) ? +data['designation_id'] === 10 : 0; });
            _this.tamList = _this.userList.filter(function (data) { return (data['designation_id']) ? +data['designation_id'] === 9 : 0; });
        });
    };
    /**
     * Get Worksheet Listing
     * @param pageNumber
     * @param key
     * @param val
     */
    ViewCompletedComponent.prototype.getWorksheetListing = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].COMPLETED_WORKSHEET_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleWorksheetRespone(response);
        });
    };
    /**
     * Handle Worksheet Response
     * @param response
     */
    ViewCompletedComponent.prototype.handleWorksheetRespone = function (response) {
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
    ViewCompletedComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.previousDate),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.todayDate),
            due_date_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            due_date_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            lock_worksheet: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.previousDate),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.todayDate),
            due_date_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            due_date_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            lock_worksheet: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    };
    /**
     * Add Edit Master Activity Dialog
     */
    ViewCompletedComponent.prototype.openAddEditMasterActivityDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_11__["ReviewActionAllocateReviewerDialog"], {
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
    ViewCompletedComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Pagination page change event
     * @param event
     */
    ViewCompletedComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getWorksheetListing(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    ViewCompletedComponent.prototype.resetFilterForm = function () {
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
    ViewCompletedComponent.prototype.onKeydownHandler = function (event) {
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
    ViewCompletedComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
        params['type'] = 'completed';
        return params;
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    ViewCompletedComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getWorksheetListing(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    ViewCompletedComponent.prototype.getSearchParam = function () {
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
    ViewCompletedComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all', 'type': 'completed' };
        if (this.tamId) {
            params['technical_account_manager'] = this.tamId;
        }
        if (this.teamId) {
            params['team_member'] = this.teamId;
        }
        if (this.assigneeId) {
            params['additional_assignee'] = this.assigneeId;
        }
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].COMPLETED_WORKSHEET_LISTING, params, this.getSearchParam(), 'Completed Worksheet ', 0).subscribe(function (response) {
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    ViewCompletedComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
    ViewCompletedComponent.prototype.setAdvanceFilter = function (form, flag) {
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
    ViewCompletedComponent.prototype.getUserList = function () {
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
    ViewCompletedComponent.prototype.onClearTag = function (elementName, JsonElementName) {
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
    ViewCompletedComponent.prototype.onChangeUpdateFilterField = function (value) {
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
    ViewCompletedComponent.prototype.getTaskFilterList = function (value) {
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
    ViewCompletedComponent.prototype.openAddEditSubActivityDialog = function () {
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_11__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Open filter
     */
    ViewCompletedComponent.prototype.onOpenFilter = function () {
        this.activeView = this.enumView.FILTER_VIEW_MAIN;
    };
    /**
     * Expand row table
     * @param i
     */
    ViewCompletedComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Close filter
     */
    ViewCompletedComponent.prototype.onCloseFilter = function () {
        this.activeView = null;
    };
    /**
     * Close modal
     * @param event
     */
    ViewCompletedComponent.prototype.onCloseDialog = function (event) {
        this.activeView = event;
    };
    /**
     * On delete table row
     */
    ViewCompletedComponent.prototype.onDeleteItem = function (event) {
        this.deleteItem.emit(event);
    };
    /**
     * View timesheet page redirect
     */
    ViewCompletedComponent.prototype.onViewTimeSheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * Task CEhcklist page redirect
     */
    ViewCompletedComponent.prototype.onTaskChecklist = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * redirection worksheet dashboard
     */
    ViewCompletedComponent.prototype.onWorksheetDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * Review Allocation page redirection
     */
    ViewCompletedComponent.prototype.openReviewAllocateDialog = function () {
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_11__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Get All Status
     */
    ViewCompletedComponent.prototype.getAllStatus = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].GET_ALL_STATUS, {}, {}).subscribe(function (response) {
            _this.statusArray = response.payload.data;
        });
    };
    /**
     * Update Due Date + Period Start + End Date + Reminder Date
     * @param object
     */
    ViewCompletedComponent.prototype.updateInlineFormDates = function (object) {
        var _this = this;
        var _a;
        var keyData = object.key;
        if (keyData === 'start_date' || keyData === 'end_date' || keyData === 'due_date' || keyData === 'reminder_date') {
            object.value = moment__WEBPACK_IMPORTED_MODULE_12__(object.value).format('YYYY-MM-DD');
        }
        if (object.value) {
            // Update worksheet date
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].UPDATE_WORKSHEET, object.id, (_a = {},
                _a[object.key] = object.value,
                _a['_method'] = 'put',
                _a)).subscribe(function (response) {
                _this.getWorksheetListing(1, 'due_date', 'asc');
            });
        }
    };
    /**
     * On Change Update Notes Param
     * @param notes
     */
    ViewCompletedComponent.prototype.onChangeUpdateNotesParam = function (notes, id) {
        this.noteToUpdate[id] = notes;
    };
    /**
     * On Submit Update Notes
     * @param id
     */
    ViewCompletedComponent.prototype.onSubmitUpdateNotes = function (id) {
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
    ViewCompletedComponent.prototype.openWorksheetStatusLogDialog = function (worksheetData) {
        var dialogRef = this.dialog.open(_worksheet_dashboard_action_worksheet_status_log_dialog_worksheet_status_log_dialog__WEBPACK_IMPORTED_MODULE_14__["WorksheetStatusLogDialog"], {
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
    ViewCompletedComponent.prototype.onAddTimeSheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].ADD_TIMESHEET]);
    };
    /**
     * On users timesheet page redirect
     */
    ViewCompletedComponent.prototype.onAddUsersTimeSheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].ADD_USERS_TIMESHEET]);
    };
    /**
     * On click of view timesheet
     * @param worksheetData
     */
    ViewCompletedComponent.prototype.onViewUserTimesheet = function (worksheetData) {
        var jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_13__["convertURLParamToEncode"])({
            'entity_id': worksheetData.entity_id,
            'start_date': worksheetData.start_date,
            'end_date': worksheetData.end_date,
            'viewTimesheet': 1,
            'task_id': worksheetData.task_id.id
        });
        if (jsonData) {
            this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET], { queryParams: jsonData });
        }
    };
    /**
     * On task checklist redirect
     */
    ViewCompletedComponent.prototype.onEditTaskCheckList = function (data) {
        this._sharedService.setChecklistViewData(null);
        this._sharedService.setChecklistViewData(data);
        // this._router.navigate(['/' + AdminRoutes.TASK_CHECKLIST]);
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].TASK_CHECKLIST, '_blank');
        });
    };
    ViewCompletedComponent.prototype.onPreviewEmail = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].TASK_CHECKLIST_EMAIL_PREVIEW]);
    };
    ViewCompletedComponent.prototype.onAllocateAssigneeDialog = function (worksheet) {
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_11__["ReviewActionAllocateReviewerDialog"], {
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
    ViewCompletedComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get User Rating
     * @param {number} status_id
     * @returns {string}
     */
    ViewCompletedComponent.prototype.getUserRating = function (rating_id) {
        var val = this.userWorksheetRatingList.filter(function (elem) { return elem.key === Number(rating_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Status List
     * @param {number} cat_id
     * @returns {string}
     */
    ViewCompletedComponent.prototype.getCategoryName = function (cat_id) {
        var val = this.categoryData.filter(function (elem) { return elem.key === Number(cat_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Select All Item of Event
     * @param event
     */
    ViewCompletedComponent.prototype.onSelectAllItem = function (event) {
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
    ViewCompletedComponent.prototype.onSelectItem = function (event, id) {
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
    ViewCompletedComponent.prototype.onConfirmationDialogDeleteWorksheet = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmationDialogComponent"], {
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
     * Worksheet Notes Dialog
     * @param worksheetData
     */
    ViewCompletedComponent.prototype.onWorksheetNotesDialog = function (worksheetData) {
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
    ViewCompletedComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ViewCompletedComponent.prototype, "completeWorksheetCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ViewCompletedComponent.prototype, "deleteItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ViewCompletedComponent.prototype, "onKeydownHandler", null);
    ViewCompletedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-completed',
            template: __webpack_require__(/*! ./view-completed.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-completed/view-completed.component.html"),
            styles: [__webpack_require__(/*! ./view-completed.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-completed/view-completed.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], ViewCompletedComponent);
    return ViewCompletedComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-incompleted/view-incompleted.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-incompleted/view-incompleted.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- review on knock back worksheet html start-->\r\n<div class=\"admin-review-or-knock-back-worksheet-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"with-filter-grid-container\">\r\n\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header MT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"{{isTab === 1 ? 'col-md-6 MT-15 status-type-list' : 'col-md-6 MT-0 status-type-list'}}\">\r\n              <a class=\"orange-color\">\r\n                <mat-icon class=\"material-icons\">fiber_manual_record</mat-icon>\r\n                Indicates Overdue Task</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onToggleFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li (click)=\"downloadExcel()\" *ngIf=\"tabData['export']\">\r\n              <a>\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onToggleFilter()\">Esc\r\n          <mat-icon class=\"material-icons\">close</mat-icon>\r\n        </span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientListParent\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Parent Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         (change)=\"onChangeParentEntity($event);\"\r\n                         formControlName=\"parent_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"entity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"masterActivityList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Master activity\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         (change)=\"getTaskFilterList($event)\"\r\n                         formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"taskList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Task\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         [multiple]=\"true\"\r\n                         formControlName=\"task_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\">\r\n                  <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                    {{frequency.frequency_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"start_date\" [matDatepicker]=\"periodFrom\"\r\n                           placeholder=\"Period From\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"end_date\" [matDatepicker]=\"periodTo\" placeholder=\"Period To\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"periodTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #periodTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"due_date_from\" [matDatepicker]=\"dueDateFrom\"\r\n                           placeholder=\"Due date From\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDateFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDateFrom></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput formControlName=\"due_date_to\" [matDatepicker]=\"dueDateTo\" (click)=\"dueDateTo.open()\"\r\n                           placeholder=\"Due date To\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDateTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDateTo></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"category_id\" [multiple]=\"true\" placeholder=\"Category\">\r\n                  <mat-option *ngFor=\"let category of categoryData;\" [value]=\"category.key\">{{category.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"related_entity\" placeholder=\"Related Entity\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">{{yesNo.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"status_id\" placeholder=\"Status\">\r\n                  <mat-option *ngFor=\"let worksheetStatus of worksheetStatusList;\" value=\"{{worksheetStatus.id}}\">\r\n                    {{worksheetStatus.status_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"tamList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"TAM\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"tlList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"TL\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"team_lead\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"atlList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"ATL\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"assistant_team_lead\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"staffList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Team Member\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"team_member\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Additional Staff\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"additional_assignee\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"lock_worksheet\" placeholder=\"Worksheet status\">\r\n                  <mat-option *ngFor=\"let lockData of worksheetLockList.slice(1);\" value=\"{{lockData.key}}\">\r\n                    {{lockData.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"critical_task\" placeholder=\"Critical Task\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">\r\n                    {{yesNo.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-9 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button [disabled]=\"filterForm.invalid\" type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"parent_id.value\">\r\n          <span class=\"tag__title\">Parent Trading Name :</span>\r\n          <span>\r\n             <ng-select [items]=\"clientListParent\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"parent_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true); onChangeParentEntity($event);\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"entity_id.value\">\r\n          <span class=\"tag__title\">Client name :</span>\r\n          <span>\r\n             <ng-select [items]=\"clientList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"trading_name\"\r\n                        placeholder=\"Trading Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"entity_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"master_activity_id.value && master_activity_id.value.length\">\r\n          <span class=\"tag__title\">Master activity :</span>\r\n          <span>\r\n            <ng-select [items]=\"masterActivityList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Master activity\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);getTaskFilterList($event);\"\r\n                       formControlName=\"master_activity_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('master_activity_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"task_id.value && task_id.value.length\">\r\n          <span class=\"tag__title\">Task :</span>\r\n          <span>\r\n            <ng-select [items]=\"taskList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Task\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [multiple]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"task_id\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('task_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"frequency_id.value\">\r\n          <span class=\"tag__title\">Frequency :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n               <mat-option *ngFor=\"let frequency of frequencyList;\" [value]=\"frequency.id\">\r\n                    {{frequency.frequency_name}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('frequency_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"start_date.value\">\r\n          <span class=\"tag__title\">Period From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"start_date\" [matDatepicker]=\"perdiodFromDate\"\r\n                     placeholder=\"Period From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('start_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"end_date.value\">\r\n          <span class=\"tag__title\">Period To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"end_date\" [matDatepicker]=\"perdiodToDate\" (click)=\"perdiodToDate.open()\"\r\n                     placeholder=\"Period To\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"perdiodToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #perdiodToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('end_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"due_date_from.value\">\r\n          <span class=\"tag__title\">Due Date From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"due_date_from\" [matDatepicker]=\"dueFromDate\" (click)=\"dueFromDate.open()\"\r\n                     placeholder=\"Due Date From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueFromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueFromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('due_date_from')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"due_date_to.value\">\r\n          <span class=\"tag__title\">Due Date To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"due_date_to\" [matDatepicker]=\"dueToDate\"\r\n                     placeholder=\"Due Date To\"\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('due_date_to')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"category_id.value\">\r\n          <span class=\"tag__title\">Category :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select [multiple]=\"true\" formControlName=\"category_id\" placeholder=\"Category\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let category of categoryData;\" [value]=\"category.key\">{{category.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('category_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"related_entity.value\">\r\n          <span class=\"tag__title\">Related Entity :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"related_entity\" placeholder=\"Related Entity\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n               <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">{{yesNo.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('related_entity')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"status_id.value\">\r\n          <span class=\"tag__title\">Status :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"status_id\" placeholder=\"Status\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option *ngFor=\"let worksheetStatus of worksheetStatusList;\" value=\"{{worksheetStatus.id}}\">\r\n                    {{worksheetStatus.status_name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('status_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"technical_account_manager.value\">\r\n          <span class=\"tag__title\">TAM :</span>\r\n          <span>\r\n            <ng-select [items]=\"tamList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"TAM\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('technical_account_manager')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"team_lead.value\">\r\n          <span class=\"tag__title\">TL :</span>\r\n          <span>\r\n            <ng-select [items]=\"tlList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"TL\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"team_lead\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('team_lead')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"assistant_team_lead.value\">\r\n          <span class=\"tag__title\">ATL :</span>\r\n          <span>\r\n            <ng-select [items]=\"atlList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"ATL\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"assistant_team_lead\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('assistant_team_lead')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"team_member.value\">\r\n          <span class=\"tag__title\">Team member :</span>\r\n          <span>\r\n            <ng-select [items]=\"staffList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Team Member\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"team_member\">\r\n            </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('team_member')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"additional_assignee.value\">\r\n          <span class=\"tag__title\">Additional staff :</span>\r\n          <span>\r\n             <ng-select [items]=\"userList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"userfullname\"\r\n                        placeholder=\"Additional Staff\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                        formControlName=\"additional_assignee\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('additional_assignee')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"lock_worksheet.value\">\r\n          <span class=\"tag__title\">Status :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"lock_worksheet\" placeholder=\"Worksheet status\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                 <mat-option *ngFor=\"let lockData of worksheetLockList.slice(1);\" value=\"{{lockData.key}}\">\r\n                    {{lockData.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('lock_worksheet')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"critical_task.value\">\r\n          <span class=\"tag__title\">Critical Task :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select formControlName=\"critical_task\" placeholder=\"Critical Task\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                 <mat-option *ngFor=\"let yesNo of yesNoList.slice(1);\" value=\"{{yesNo.key}}\">\r\n                    {{yesNo.label}}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('critical_task')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\" *ngIf=\"\r\n          entity_id.value || parent_id.value\r\n          || (master_activity_id.value && master_activity_id.value.length)\r\n          || (task_id.value && task_id.value.length)\r\n          || frequency_id.value\r\n          || start_date.value\r\n          || end_date.value\r\n          || due_date_to.value\r\n          || due_date_from.value\r\n          || category_id.value\r\n          || related_entity.value\r\n          || status_id.value\r\n          || technical_account_manager.value\r\n          || team_member.value\r\n          || additional_assignee.value\r\n          || lock_worksheet.value || critical_task.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n  </div>\r\n\r\n  <!--my worksheet container html start-->\r\n  <div class=\"view-worksheet-tab-container\">\r\n    <div class=\"expand-grid\">\r\n      <div>\r\n        <div class=\"expand-grid__thead\">\r\n          <table>\r\n            <thead>\r\n            <tr>\r\n              <th width=\"6%\"><span *ngIf=\"isMultipleWorksheetDelete\" class=\"MR-5\">\r\n                <mat-checkbox (change)=\"onSelectAllItem($event.checked)\"></mat-checkbox></span>Sr.No.\r\n              </th>\r\n              <th width=\"10%\">Parent Trading Name</th>\r\n              <th width=\"12%\" (click)=\"getSortData('trading_name',\r\n            (sortBy === 'trading_name') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Client Name\r\n                <i *ngIf=\"sortBy === 'trading_name'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'trading_name'),\r\n                 'icon-up' : ((sortBy === 'trading_name') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'trading_name') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"10%\" (click)=\"getSortData('task_id',\r\n              (sortBy === 'task_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Task\r\n                <i *ngIf=\"sortBy === 'task_id'\" [ngClass]=\"{'material-icons': true,\r\n                  'active' : (sortBy === 'task_id'),\r\n                   'icon-up' : ((sortBy === 'task_id') && (sortOrder === 'asc')),\r\n                   'icon-down' : true}\">\r\n                  {{(sortBy === 'task_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n\r\n              <th width=\"5%\" (click)=\"getSortData('frequency_id',\r\n            (sortBy === 'frequency_id') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Frequency\r\n                <i *ngIf=\"sortBy === 'frequency_id'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'frequency_id'),\r\n                 'icon-up' : ((sortBy === 'frequency_id') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'frequency_id') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n              <th width=\"9%\">Period Date\r\n                <mat-icon [matTooltip]=\"'Period Start Date & End Date'\" class=\"v-align-middle gray-color\">info\r\n                </mat-icon>\r\n              </th>\r\n              <th width=\"9%\" (click)=\"getSortData('due_date',\r\n            (sortBy === 'due_date') ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Reminder/ Due Date\r\n                <i *ngIf=\"sortBy === 'due_date'\" [ngClass]=\"{'material-icons': true,\r\n                'active' : (sortBy === 'due_date'),\r\n                 'icon-up' : ((sortBy === 'due_date') && (sortOrder === 'asc')),\r\n                 'icon-down' : true}\">\r\n                  {{(sortBy === 'due_date') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                  'arrow_downward'}}\r\n                </i>\r\n              </th>\r\n              <th width=\"9%\">Notes\r\n              </th>\r\n              <th width=\"5%\">Units</th>\r\n\r\n              <th width=\"9%\">Status\r\n              </th>\r\n\r\n              <th width=\"11%\">Staff\r\n              </th>\r\n              <th width=\"5%\">Action</th>\r\n            </tr>\r\n            </thead>\r\n          </table>\r\n        </div>\r\n        <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n          <table *ngIf=\"worksheetListData.length\">\r\n            <tbody [ngClass]=\"{'red-tr' : data | dateCompare}\"\r\n                   *ngFor=\"let data of worksheetListData; let i = index;\">\r\n            <tr [ngClass]=\"{'is-active-row' : trIndex === i}\" class=\"hover-icons row-data\">\r\n              <td width=\"6%\">\r\n                <span *ngIf=\"isMultipleWorksheetDelete\">\r\n                <mat-checkbox *ngIf=\"data.timesheet_total_unit === 0\" [checked]=\"selectAllWorksheetIDS\"\r\n                              (change)=\"onSelectItem($event.checked, data.id)\"></mat-checkbox></span>\r\n                <a class=\"open-inner-data\">\r\n                  <mat-icon [ngClass]=\"{'is-open' : trIndex === i}\" (click)=\"openRow(i)\" class=\"material-icons\">\r\n                    keyboard_arrow_down\r\n                  </mat-icon>\r\n                </a>\r\n                {{+pageSize * (pageIndex) + i + 1}}\r\n                <mat-icon *ngIf=\"data?.discontinue_stage == 1\" class=\"red-color v-align-middle\"\r\n                          [matTooltip]=\"'Discontinue Process Initiated'\">block\r\n                </mat-icon>\r\n              </td>\r\n              <td width=\"10%\" class=\"word-break\">{{data?.parent_name}}</td>\r\n              <td width=\"12%\" class=\"word-break\">{{data?.trading_name}}</td>\r\n              <td width=\"10%\" class=\"word-break\">{{data?.task_id?.name}}</td>\r\n              <td width=\"5%\">{{data?.frequency_name}}</td>\r\n              <td width=\"9%\" class=\"date_no_border\">\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangePeriodStartEndDate\">\r\n                    <input matInput [value]=\"data?.start_date\" [matDatepicker]=\"pickerStart\" placeholder=\"Select Date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'start_date', 'value': $event.target.value, 'id': data.id})\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerStart></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!canChangePeriodStartEndDate\" class=\"readonly_date\">{{data?.start_date | date : 'dd-MM-yyyy'}}</span>\r\n                </div>\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangePeriodStartEndDate\">\r\n                    <input matInput [matDatepicker]=\"pickerEnd\" (click)=\"pickerEnd.open()\" placeholder=\"Select Date\"\r\n                           [value]=\"data.end_date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'end_date', 'value': $event.target.value, 'id': data.id})\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerEnd></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!canChangePeriodStartEndDate\">{{data?.end_date | date : 'dd-MM-yyyy'}}</span>\r\n                </div>\r\n\r\n              </td>\r\n              <td width=\"9%\" class=\"date_no_border\">\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"tabID['add_edit']\">\r\n                    <input matInput [matDatepicker]=\"reminderDate\" (click)=\"reminderDate.open()\"\r\n                           [value]=\"data.reminder_date && data.reminder_date !== '0000-00-00' ? (data.reminder_date | date : 'dd-MM-yyyy') : ''\" placeholder=\"Select Date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'reminder_date', 'value':$event.target.value, 'id': data.id})\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"reminderDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #reminderDate></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!tabID['add_edit']\"\r\n                        class=\"readonly_date\">{{data.reminder_date && data.reminder_date !== '0000-00-00' ? (data.reminder_date | date : 'dd-MM-yyyy') : ''}}</span>\r\n                </div>\r\n                <div>\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"canChangeDueDate\">\r\n                    <input matInput [matDatepicker]=\"dueDate\" (click)=\"dueDate.open()\" [value]=\"data.due_date\"\r\n                           placeholder=\"Select Date\"\r\n                           (dateChange)=\"updateInlineFormDates({'key':'due_date', 'value':$event.target.value, 'id': data.id})\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dueDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dueDate></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"!canChangeDueDate\">{{data.due_date | date : 'dd-MM-yyyy'}}</span>\r\n                </div>\r\n              </td>\r\n              <td width=\"9%\" class=\"word-break\">\r\n                <div ellipsis=\"Read More..\" class=\"multiline-ellipsis\" (click)=\"onWorksheetNotesDialog(data)\"\r\n                     (ellipsis-click-more)=\"on()\" *ngIf=\"data?.notes\">\r\n                  {{data?.notes}}\r\n                </div>\r\n                <a (click)=\"onWorksheetNotesDialog(data)\" *ngIf=\"!data?.notes\" class=\"cursor-pointer\">Add</a>\r\n              </td>\r\n              <td width=\"5%\"><span\r\n                class=\"label-gray-bg-color\"> {{data?.timesheet_total_unit}}</span></td>\r\n              <td width=\"9%\" class=\"no-float-label grid_select_8rem\">\r\n                <mat-form-field [floatLabel]=\"'never'\">\r\n                  <mat-select placeholder=\"Status\" [value]=\"data.status_id.id\"\r\n                              (selectionChange)=\"onUpdateStatus(data, $event.value)\">\r\n                    <mat-option *ngFor=\"let status of worksheetStatusList;\" [value]=\"status?.id\"\r\n                                disabled=\"{{status?.is_right === 1 ? false : true}}\">\r\n                      {{status.status_name}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </td>\r\n              <td width=\"11%\">\r\n                <div class=\"word-break\">\r\n                  <div *ngFor=\"let userData of data.allocation | teamListFormate; let j = index\">\r\n                    <div *ngIf=\"userData && (userData.key === 'TM' || userData.key === 'TAM')\">\r\n                      <span class=\"fw-500\">{{userData.key}}:</span>\r\n                      <span>{{userData.value}}</span>\r\n                    </div>\r\n                    <div *ngIf=\"!userData\"> Not specify</div>\r\n                  </div>\r\n                  <div *ngIf=\"data.worksheet_additional_assignee\">\r\n                    <span class=\"fw-500\">Add. Assignee:</span>\r\n                    <span>{{data.worksheet_additional_assignee.userfullname}}</span>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td width=\"5%\">\r\n                <ul>\r\n                  <li>\r\n                    <a (click)=\"onEditTaskCheckList(data)\"\r\n                       *ngIf=\"data?.taskchecklist === 1\" class=\"orange-color\"\r\n                       [matTooltip]=\"'Task checklist'\">\r\n                      <mat-icon>playlist_add_check</mat-icon>\r\n                    </a>\r\n                    <mat-icon [matMenuTriggerFor]=\"menuaction\">more_vert</mat-icon>\r\n                    <mat-menu #menuaction=\"matMenu\" class=\"column-menu\">\r\n                      <button mat-menu-item class=\"menu-header\">\r\n                        <h3>Action</h3>\r\n                      </button>\r\n                      <button mat-menu-item (click)=\"openWorksheetStatusLogDialog(data)\">\r\n                        <mat-icon>history</mat-icon>\r\n                        Worksheet status log\r\n                      </button>\r\n                      <button mat-menu-item (click)=\"onAddTimeSheet(data)\"\r\n                              *ngIf=\"userInfo?.user_timesheet_fillup_flag === 1\">\r\n                        <mat-icon>alarm_add</mat-icon>\r\n                        Add Timesheet\r\n                      </button>\r\n                      <button mat-menu-item (click)=\"onAddUsersTimeSheet(data)\"\r\n                              *ngIf=\"userInfo?.user_timesheet_fillup_flag === 1 && isAddUserTimeSheet\">\r\n                        <mat-icon\r\n                          class=\"material-icons\">remove_red_eye\r\n                        </mat-icon>\r\n                        Add User Timesheet\r\n                      </button>\r\n                      <button mat-menu-item (click)=\"onPrepareQuery(data)\" *ngIf=\"data?.task_id?.id === 5 || data?.task_id?.id === 23\">\r\n                        <mat-icon>query_builder</mat-icon>\r\n                        Prepare Query\r\n                      </button>\r\n                      <button mat-menu-item (click)=\"onViewUserTimesheet(data)\">\r\n                        <mat-icon\r\n                          class=\"material-icons\">history\r\n                        </mat-icon>\r\n                        View Timesheet\r\n                      </button>\r\n                      <button mat-menu-item (click)=\"onAllocateAssigneeDialog(data)\"\r\n                              *ngIf=\"isWorksheetAdditionalAssignee\">\r\n                        <mat-icon\r\n                          class=\"material-icons\"><span\r\n                          *ngIf=\"data.worksheet_additional_assignee === null\">person_outline</span>\r\n                          <span *ngIf=\"data.worksheet_additional_assignee !== null\">how_to_reg</span>\r\n                        </mat-icon>\r\n                        Allocate Additional Assignee\r\n                      </button>\r\n                    </mat-menu>\r\n                  </li>\r\n                </ul>\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"trIndex === i\" class=\"inner-data\">\r\n              <div class=\"row PT-10\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"inner-data__view-notes\">\r\n                    <div>Notes</div>\r\n                    <div>{{data.notes}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"inner-data__view\">\r\n                    <div>Category</div>\r\n                    <div>{{getCategoryName(data.category_id)}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <span *ngFor=\"let userData of data.allocation | teamListFormate;\">\r\n                    <span *ngIf=\"userData && (userData.key !== 'TM' && userData.key !== 'TAM')\">\r\n                    <div class=\"inner-data__view\">\r\n                        <div>{{userData.key}}</div>\r\n                        <div>{{userData.value}}</div>\r\n                    </div>\r\n                    </span>\r\n                    </span>\r\n                </div>\r\n              </div>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"expand-grid__tfoot\" *ngIf=\"worksheetListData.length\">\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"worksheetListData.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- review on knock back worksheet html over-->\r\n</div>\r\n\r\n<!--Delete table row-->\r\n<div *ngIf=\"selectedWorksheetIDs.length > 0\" class=\"bottom-panel-action\">\r\n  <button (click)=\"onConfirmationDialogDeleteWorksheet()\" type=\"button\" class=\"btn-bordered btn-white\"><span\r\n    class=\"v-align-middle\">DELETE SELECTED\r\n    WORKSHEET</span>\r\n    <mat-icon class=\"v-align-middle\">keyboard_arrow_right</mat-icon>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-incompleted/view-incompleted.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-incompleted/view-incompleted.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid_select_8rem .mat-form-field {\n  width: 120px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vd29ya2Zsb3ctbW9kdWxlL3dvcmtzaGVldC1tb2R1bGUvd29ya3NoZWV0LWRhc2hib2FyZC10YWIvdmlldy1pbmNvbXBsZXRlZC9DOlxcd2FtcDY0XFx3d3dcXGhrX2Zyb250ZW5kL3Byb2plY3RzXFxhZG1pblxcc3JjXFxhcHBcXGFkbWluXFx3b3JrZmxvdy1tb2R1bGVcXHdvcmtzaGVldC1tb2R1bGVcXHdvcmtzaGVldC1kYXNoYm9hcmQtdGFiXFx2aWV3LWluY29tcGxldGVkXFx2aWV3LWluY29tcGxldGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksdUJBQXVCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvYWRtaW4vc3JjL2FwcC9hZG1pbi93b3JrZmxvdy1tb2R1bGUvd29ya3NoZWV0LW1vZHVsZS93b3Jrc2hlZXQtZGFzaGJvYXJkLXRhYi92aWV3LWluY29tcGxldGVkL3ZpZXctaW5jb21wbGV0ZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZF9zZWxlY3RfOHJlbSB7XHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-incompleted/view-incompleted.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-incompleted/view-incompleted.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: Views, ViewIncompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewIncompletedComponent", function() { return ViewIncompletedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-quick-action/review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _worksheet_dashboard_action_worksheet_status_log_dialog_worksheet_status_log_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/worksheet-status-log-dialog/worksheet-status-log-dialog.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
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



















var Views;
(function (Views) {
    Views[Views["FILTER_VIEW_MAIN"] = 0] = "FILTER_VIEW_MAIN";
})(Views || (Views = {}));
var ViewIncompletedComponent = /** @class */ (function (_super) {
    __extends(ViewIncompletedComponent, _super);
    function ViewIncompletedComponent(_fb, dialog, route, _commonCrudService, _router, _sharedObjService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this.route = route;
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
        _this.categoryData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["category"];
        _this.staffList = [];
        _this.tamList = [];
        _this.tlList = [];
        _this.atlList = [];
        _this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["yesNo"];
        _this.worksheetLockList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["worksheetStatusLog"];
        _this.PeriodFromValue = null;
        _this.PeriodToValue = null;
        _this.DueDateFromValue = null;
        _this.DueDateToValue = null;
        _this.noteToUpdate = [];
        // pagination Data
        _this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["BASE"].PAGINATION_ARRAY;
        _this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["BASE"].PAGINATION_ARRAY[1];
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
        _this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_16__["ADMINTABACCESS"].WORKFLOW_VIEWINCOMPLETEDWORKSHEET;
        _this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_16__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
        _this.todayDate = '';
        _this.minPreviousMonth = 3;
        _this.maxNextMonth = 4;
        _this.selectedEntityFilterData = null;
        _this.isAddUserTimeSheet = false;
        _this.tabTimeSheetID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_16__["ADMINTABACCESS"].WORKFLOW_TIMESHEET;
        return _this;
    }
    Object.defineProperty(ViewIncompletedComponent.prototype, "parent_id", {
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "entity_id", {
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "master_activity_id", {
        get: function () {
            return this.filterForm.get('master_activity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "task_id", {
        get: function () {
            return this.filterForm.get('task_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "frequency_id", {
        get: function () {
            return this.filterForm.get('frequency_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "start_date", {
        get: function () {
            return this.filterForm.get('start_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "end_date", {
        get: function () {
            return this.filterForm.get('end_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "due_date_from", {
        get: function () {
            return this.filterForm.get('due_date_from');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "due_date_to", {
        get: function () {
            return this.filterForm.get('due_date_to');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "category_id", {
        get: function () {
            return this.filterForm.get('category_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "related_entity", {
        get: function () {
            return this.filterForm.get('related_entity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "status_id", {
        get: function () {
            return this.filterForm.get('status_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "lock_worksheet", {
        get: function () {
            return this.filterForm.get('lock_worksheet');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "critical_task", {
        get: function () {
            return this.filterForm.get('critical_task');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "technical_account_manager", {
        get: function () {
            return this.filterForm.get('technical_account_manager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "team_member", {
        get: function () {
            return this.filterForm.get('team_member');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "additional_assignee", {
        get: function () {
            return this.filterForm.get('additional_assignee');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "team_lead", {
        get: function () {
            return this.filterForm.get('team_lead');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewIncompletedComponent.prototype, "assistant_team_lead", {
        get: function () {
            return this.filterForm.get('assistant_team_lead');
        },
        enumerable: true,
        configurable: true
    });
    ViewIncompletedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userInfo = this._sharedService.getUser();
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.isMultipleStatusUpdate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetstatuschange', 1);
        this.isMultipleWorksheetDelete = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetdelete', 1);
        this.isWorksheetAdditionalAssignee = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'worksheetadditionalassignee', 1);
        this.canChangePeriodStartEndDate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'canchangeperiodstartdate_enddate', 1);
        this.canChangeDueDate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'canchangeduedate', 1);
        this.isAddUserTimeSheet = this._sharedService.checkUserPrivileges(this.tabTimeSheetID, 'otherRights', 'otherRights', 'button_name', 'add_user_timesheet', 1);
        this.route.queryParams
            .subscribe(function (params) {
            var dataItem = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_12__["convertURLParamToDecode"])(params);
            if (dataItem) {
                _this.selectedEntityFilterData = (dataItem['entity_id']) ? Number(dataItem['entity_id']) : null;
            }
        });
        this.initializeMethod();
    };
    /**
     *
     */
    ViewIncompletedComponent.prototype.initializeMethod = function () {
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format('YYYY-MM-DD');
        var todaysdate = new Date();
        var year = todaysdate.getFullYear();
        var month = todaysdate.getMonth();
        var day = todaysdate.getDate();
        this.previousDate = new Date(year, month - this.minPreviousMonth, 1);
        this.nextDate = new Date(year, month + this.maxNextMonth, 0);
        this.createAdvanceFilterForm();
        this.getDropdownData();
        this.setAdvanceFilter(this.filterForm);
        // My Worksheet Status Wise Counter
        // this._commonCrudService.listData(AdminAPI.INCOMPLETE_WORKSHEET_LISTING, {
        //   'statuscounter': 1,
        //   'records': 'all',
        //   'type': 'incompleted'
        // }, {
        //   'compare': {
        //     'greaterthanequal': {'due_date': moment(this.previousDate).format('YYYY-MM-DD')},
        //     'lessthanequal': {
        //       // 'end_date': moment(todaysdate).format('YYYY-MM-DD'),
        //       'due_date': moment(this.nextDate).format('YYYY-MM-DD')
        //     }
        //   }
        // }).subscribe(response => {
        //   this.worksheetStatusCounter = response.payload.data;
        //   let totalData = 0;
        //   this.worksheetStatusCounter.map(item => {
        //     totalData += Number(item.count);
        //   });
        //   this.incompleteWorksheetCount = totalData;
        // });
    };
    /**
     * Get frequency data
     */
    ViewIncompletedComponent.prototype.getDropdownData = function () {
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
        this._sharedObjService.getUserList({ 'records': 'all', "field": "user.id,user.userfullname" }, { compare: { equal: { is_active: 1 } } }).subscribe(function (response) {
            _this.userList = response;
            _this.staffList = _this.userList.filter(function (data) { return (data['designation_id']) ? +data['designation_id'] === 10 : 0; });
            _this.tamList = _this.userList.filter(function (data) { return (data['designation_id']) ? +data['designation_id'] === 9 : 0; });
            _this.tlList = _this.userList.filter(function (data) { return (data['designation_id']) ? +data['designation_id'] === 60 : 0; });
            _this.atlList = _this.userList.filter(function (data) { return (data['designation_id']) ? +data['designation_id'] === 61 : 0; });
        });
    };
    /**
     * Get Worksheet Listing
     * @param pageNumber
     * @param key
     * @param val
     */
    ViewIncompletedComponent.prototype.getWorksheetListing = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].INCOMPLETE_WORKSHEET_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleWorksheetRespone(response);
        });
    };
    /**
     * Handle Worksheet Response
     * @param response
     */
    ViewIncompletedComponent.prototype.handleWorksheetRespone = function (response) {
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
    ViewIncompletedComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.selectedEntityFilterData > 0) ? this.selectedEntityFilterData : null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            due_date_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.previousDate),
            due_date_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.nextDate),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            lock_worksheet: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            team_lead: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            assistant_team_lead: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            critical_task: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.selectedEntityFilterData > 0) ? this.selectedEntityFilterData : null),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            due_date_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.previousDate),
            due_date_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.nextDate),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            team_member: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            additional_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            lock_worksheet: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            team_lead: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            assistant_team_lead: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            critical_task: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    };
    /**
     * Add Edit Master Activity Dialog
     */
    ViewIncompletedComponent.prototype.openAddEditMasterActivityDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_10__["ReviewActionAllocateReviewerDialog"], {
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
    ViewIncompletedComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Pagination page change event
     * @param event
     */
    ViewIncompletedComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getWorksheetListing(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    ViewIncompletedComponent.prototype.resetFilterForm = function () {
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
    ViewIncompletedComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    ViewIncompletedComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getWorksheetListing(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    ViewIncompletedComponent.prototype.getSearchParam = function () {
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
    ViewIncompletedComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all', 'type': 'incompleted' };
        if (this.atlId) {
            params['assistant_team_lead'] = this.atlId;
        }
        if (this.tlId) {
            params['team_lead'] = this.tlId;
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
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].INCOMPLETE_WORKSHEET_LISTING, params, this.getSearchParam(), 'Incompleted Worksheet ', 0).subscribe(function (response) {
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    ViewIncompletedComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'lock_worksheet': form.value['lock_worksheet'],
                'team_lead': form.value['team_lead'],
                'assistant_team_lead': form.value['assistant_team_lead'],
                'critical_task': form.value['critical_task'],
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    ViewIncompletedComponent.prototype.setAdvanceFilter = function (form, flag) {
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
                        || key === 'related_entity' || key === 'status_id' || key === 'lock_worksheet' || key === 'critical_task') {
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
            this.tlId = form.value['team_lead'];
            this.atlId = form.value['assistant_team_lead'];
            this.isOpenFilterView = false;
            this.getWorksheetListing(1, 'due_date', 'asc');
        }
    };
    /**
     * Get User List
     */
    ViewIncompletedComponent.prototype.getUserList = function () {
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
    ViewIncompletedComponent.prototype.onClearTag = function (elementName, JsonElementName) {
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
            || elementName === 'related_entity' || elementName === 'status_id' || elementName === 'lock_worksheet' || elementName === 'critical_task') {
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
    ViewIncompletedComponent.prototype.onChangeUpdateFilterField = function (value) {
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
    ViewIncompletedComponent.prototype.getTaskFilterList = function (value) {
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
    ViewIncompletedComponent.prototype.openAddEditSubActivityDialog = function () {
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_10__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Open filter
     */
    ViewIncompletedComponent.prototype.onOpenFilter = function () {
        this.activeView = this.enumView.FILTER_VIEW_MAIN;
    };
    /**
     * Expand row table
     * @param i
     */
    ViewIncompletedComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Close filter
     */
    ViewIncompletedComponent.prototype.onCloseFilter = function () {
        this.activeView = null;
    };
    /**
     * Close modal
     * @param event
     */
    ViewIncompletedComponent.prototype.onCloseDialog = function (event) {
        this.activeView = event;
    };
    /**
     * On delete table row
     */
    ViewIncompletedComponent.prototype.onDeleteItem = function (event) {
        this.deleteItem.emit(event);
    };
    /**
     * View timesheet page redirect
     */
    ViewIncompletedComponent.prototype.onViewTimeSheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * Task CEhcklist page redirect
     */
    ViewIncompletedComponent.prototype.onTaskChecklist = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
    };
    /**
     * redirection worksheet dashboard
     */
    ViewIncompletedComponent.prototype.onWorksheetDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * Review Allocation page redirection
     */
    ViewIncompletedComponent.prototype.openReviewAllocateDialog = function () {
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_10__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Get All Status
     */
    ViewIncompletedComponent.prototype.getAllStatus = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].GET_ALL_STATUS, {}, {}).subscribe(function (response) {
            _this.statusArray = response.payload.data;
        });
    };
    /**
     * Update Due Date + Period Start + End Date + Reminder Date
     * @param object
     */
    ViewIncompletedComponent.prototype.updateInlineFormDates = function (object) {
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
     * On Change Update Notes Param
     * @param notes
     */
    ViewIncompletedComponent.prototype.onChangeUpdateNotesParam = function (notes, id) {
        this.noteToUpdate[id] = notes;
    };
    /**
     * On Submit Update Notes
     * @param id
     */
    ViewIncompletedComponent.prototype.onSubmitUpdateNotes = function (id) {
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
    ViewIncompletedComponent.prototype.openWorksheetStatusLogDialog = function (worksheetData) {
        var dialogRef = this.dialog.open(_worksheet_dashboard_action_worksheet_status_log_dialog_worksheet_status_log_dialog__WEBPACK_IMPORTED_MODULE_14__["WorksheetStatusLogDialog"], {
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
    ViewIncompletedComponent.prototype.onAddTimeSheet = function (worksheetData) {
        if (worksheetData) {
            this._sharedService.setWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["GLOBALDATAKEYS"].WORKSHEET_ITEM_DATA, worksheetData);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].ADD_TIMESHEET, '_blank');
            });
            // this._router.navigate(['/' + AdminRoutes.ADD_TIMESHEET]);
        }
    };
    /**
     * On users timesheet page redirect
     */
    ViewIncompletedComponent.prototype.onAddUsersTimeSheet = function (worksheetData) {
        if (worksheetData) {
            this._sharedService.setWorksheetData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["GLOBALDATAKEYS"].WORKSHEET_ITEM_DATA, worksheetData);
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
    ViewIncompletedComponent.prototype.onViewUserTimesheet = function (worksheetData) {
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
     * Update Due Date + Period Start + End Date + Reminder Date
     * @param object
     */
    ViewIncompletedComponent.prototype.onUpdateStatus = function (worksheetData, statusChanged) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmationDialogComponent"], {
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
     * On task checklist redirect
     */
    ViewIncompletedComponent.prototype.onEditTaskCheckList = function (data, isReadOnly) {
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
    ViewIncompletedComponent.prototype.onEditTaskCheckListAccount = function (data) {
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
    ViewIncompletedComponent.prototype.onPreviewEmail = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].TASK_CHECKLIST_EMAIL_PREVIEW]);
    };
    /**
     * On Allocate Additioanl Assignee
     * @param worksheet
     */
    ViewIncompletedComponent.prototype.onAllocateAssigneeDialog = function (worksheet) {
        var _this = this;
        var dialogRef = this.dialog.open(_worksheet_quick_action_review_or_knock_back_worksheet_review_action_allocate_reviewer_dialog_review_action_allocate_reviewer_dialog__WEBPACK_IMPORTED_MODULE_10__["ReviewActionAllocateReviewerDialog"], {
            panelClass: 'add-form-dialog-container',
            data: {
                allocateData: worksheet,
                isadditionalAssignee: 1
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.setAdvanceFilter(_this.filterForm);
        });
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    ViewIncompletedComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Status List
     * @param {number} cat_id
     * @returns {string}
     */
    ViewIncompletedComponent.prototype.getCategoryName = function (cat_id) {
        var val = this.categoryData.filter(function (elem) { return elem.key === Number(cat_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Select All Item of Event
     * @param event
     */
    ViewIncompletedComponent.prototype.onSelectAllItem = function (event) {
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
    ViewIncompletedComponent.prototype.onSelectItem = function (event, id) {
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
    ViewIncompletedComponent.prototype.onConfirmationDialogDeleteWorksheet = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmationDialogComponent"], {
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
    ViewIncompletedComponent.prototype.onCompleteWorksheetDiloag = function () {
        var dialogRef = this.dialog.open(_worksheet_dashboard_action_complete_worksheet_status_dialog_complete_worksheet_status_dialog_component__WEBPACK_IMPORTED_MODULE_17__["CompleteWorksheetStatusDialogComponent"], {
            panelClass: 'add-form-medium-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Get Query Params
     * @param page
     * @param sortKey
     * @param sortOrder
     */
    ViewIncompletedComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
        if (this.tlId) {
            params['team_lead'] = this.tlId;
        }
        if (this.atlId) {
            params['asistant_team_lead'] = this.atlId;
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
        params['type'] = 'incompleted';
        return params;
    };
    /**
     * Worksheet Notes Dialog
     * @param worksheetData
     */
    ViewIncompletedComponent.prototype.onWorksheetNotesDialog = function (worksheetData) {
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
    ViewIncompletedComponent.prototype.onPrepareQuery = function (worksheetData) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["GLOBALDATAKEYS"].QUERY_WORKSHEET_MODULE, null);
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["GLOBALDATAKEYS"].QUERY_WORKSHEET_MODULE, worksheetData);
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_13__["AdminRoutes"].PREPARE_QUERY, '_blank');
        });
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    ViewIncompletedComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ViewIncompletedComponent.prototype, "incompleteWorksheetCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ViewIncompletedComponent.prototype, "isTab", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ViewIncompletedComponent.prototype, "deleteItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ViewIncompletedComponent.prototype, "onKeydownHandler", null);
    ViewIncompletedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-incompleted',
            template: __webpack_require__(/*! ./view-incompleted.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-incompleted/view-incompleted.component.html"),
            styles: [__webpack_require__(/*! ./view-incompleted.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-incompleted/view-incompleted.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], ViewIncompletedComponent);
    return ViewIncompletedComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-dashboard-tab.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-dashboard-tab.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start BreadCrumb Top Header -->\r\n<div class=\"breadcrumb-top-header\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-9 PL-0\">\r\n      <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n        <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n        <span>WORKFLOW</span>\r\n\r\n        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n        <span class=\"active\"><a (click)=\"onWorksheetDashboardTab()\">WORKSHEET DASHBOARD</a></span>\r\n\r\n        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n        <span class=\"active\">WORKSHEET</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 PR-0\">\r\n      <div class=\"breadcrumb-top-header__right-menu\">\r\n        <ul>\r\n          <li class=\"blue-drop-button\">\r\n            <button (click)=\"openSOP()\" type=\"button\" class=\"btn-primary btn-add MB-10\">SOP</button>\r\n          </li>\r\n          <li>\r\n            <a>\r\n              <label class=\"black-color\">Quick actions</label>\r\n              <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n              <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                <button mat-menu-item class=\"menu-header\">\r\n                  <h3>Quick Action</h3>\r\n                </button>\r\n                <button mat-menu-item (click)=\"onOpenQuickMenu('addNewWorksheet')\"\r\n                        *ngIf=\"worksheetTabIDData['add_edit']\">Add New Worksheet\r\n                </button>\r\n                <button mat-menu-item (click)=\"onOpenQuickMenu('todayWorksheet')\">Today's Worksheet</button>\r\n                <button mat-menu-item (click)=\"onOpenQuickMenu('todayTimesheet')\">Today's Timesheet</button>\r\n                <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetHierarchy')\"\r\n                        *ngIf=\"tabDataWorksheetHierarchy['view']\">Worksheet Hierarchy\r\n                </button>\r\n                <button mat-menu-item (click)=\"onOpenQuickMenu('subClientList')\"\r\n                        *ngIf=\"tabDataWorksheetSubClientList['view']\">Sub Client List\r\n                </button>\r\n                <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetMasterChecklist')\"\r\n                        *ngIf=\"tabDataWorksheetMasterChecklist['view']\">Worksheet Master Checklist\r\n                </button>\r\n                <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                        *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                </button>\r\n                <button mat-menu-item (click)=\"onOpenQuickMenu('trainingList')\"\r\n                        *ngIf=\"tabDataWorksheetTraining['view']\">Training List\r\n                </button>\r\n                <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                        *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                  Worksheet\r\n                </button>\r\n                <button mat-menu-item (click)=\"onOpenQuickMenu('peerReviewWorksheetListing')\"\r\n                        *ngIf=\"tabDataWorksheetPeerReviewerList['view']\">Peer Review Worksheet\r\n                  Listing\r\n                </button>\r\n              </mat-menu>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- End BreadCrumb Top Header -->\r\n\r\n<!--start tab menu-->\r\n<div class=\"worksheet-main-tab-container\">\r\n  <mat-tab-group class=\"demo-tab-group worksheet-tabs\" (selectedTabChange)=\"tabChanged($event)\">\r\n    <mat-tab label=\"My Worksheet\" aria-label=\"0\" *ngIf=\"isMyWorksheetTab\">\r\n      <div *ngIf=\"isActiveTab == 0\">\r\n        <app-myworksheet [myWorksheetCount]=\"myWorksheetCount\"></app-myworksheet>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"View Incompleted Worksheet\" aria-label=\"1\"\r\n             *ngIf=\"isInCompletedWorksheetTab\">\r\n      <div *ngIf=\"isActiveTab == 1\">\r\n        <app-view-incompleted [incompleteWorksheetCount]=\"incompleteWorksheetCount\" [isTab]=\"1\"></app-view-incompleted>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"View Completed Worksheet\" aria-label=\"2\"\r\n             *ngIf=\"isCompletedWorksheetTab\">\r\n      <div *ngIf=\"isActiveTab == 2\">\r\n        <app-view-completed [completeWorksheetCount]=\"completeWorksheetCount\"></app-view-completed>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"View Befree Worksheet\" aria-label=\"3\" *ngIf=\"isBefreeWorksheetTab\">\r\n      <div *ngIf=\"isActiveTab == 3\">\r\n        <app-view-befree-worksheet [befreeWorksheetCount]=\"befreeWorksheetCount\"></app-view-befree-worksheet>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <!--<mat-tab label=\"Worksheet Report\" aria-label=\"4\">-->\r\n      <!--<div *ngIf=\"isActiveTab == 4\">-->\r\n        <!--<app-worksheet-report></app-worksheet-report>-->\r\n      <!--</div>-->\r\n    <!--</mat-tab>-->\r\n\r\n  </mat-tab-group>\r\n</div>\r\n<!--end tab menu-->\r\n\r\n<!--Delete table row-->\r\n<div *ngIf=\"isDeleteItem\" class=\"bottom-panel-action\">\r\n  <button (click)=\"onConfirmationDialog()\" type=\"button\" class=\"btn-bordered btn-white\">DELETE SELECTED TASK ></button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-dashboard-tab.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-dashboard-tab.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1kYXNoYm9hcmQtdGFiL3dvcmtzaGVldC1kYXNoYm9hcmQtdGFiLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-dashboard-tab.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-dashboard-tab.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: WorksheetDashboardTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetDashboardTabComponent", function() { return WorksheetDashboardTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var WorksheetDashboardTabComponent = /** @class */ (function () {
    function WorksheetDashboardTabComponent(_router, dialog, _sharedService, _commonCrudService) {
        var _this = this;
        this._router = _router;
        this.dialog = dialog;
        this._sharedService = _sharedService;
        this._commonCrudService = _commonCrudService;
        // State variables
        this.isActiveTab = 0;
        this.isDeleteItem = false;
        this.myWorksheetCount = 0;
        this.incompleteWorksheetCount = 0;
        this.completeWorksheetCount = 0;
        this.befreeWorksheetCount = 0;
        // Tab change event
        this.tabChanged = (function (tabChangeEvent) {
            _this.isActiveTab = Number(tabChangeEvent.tab.ariaLabel);
        });
        this.todayDate = '';
        this.tabIDMy = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].WORKFLOW_MYWORKSHEET;
        this.tabIDCompleted = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].WORKFLOW_VIEWCOMPLETEDWORKSHEET;
        this.tabIDInCompleted = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].WORKFLOW_VIEWINCOMPLETEDWORKSHEET;
        this.tabIDBefree = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].WORKFLOW_VIEWBEFREEWORKSHEET;
        this.isMyWorksheetTab = false;
        this.isCompletedWorksheetTab = false;
        this.isInCompletedWorksheetTab = false;
        this.isBefreeWorksheetTab = false;
        this.tabIDWorksheetHierarchy = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].WORKFLOW_MASTERACTIVITY;
        this.tabIDWorksheetTraining = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].WORKFLOW_WORKSHEETTRAINING;
        this.tabIDWorksheetSubClientList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].WORKFLOW_SUBCLIENTLIST;
        this.tabIDWorksheetReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
        this.tabIDWorksheetPeerReviewerList = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
        this.tabIDWorksheetMasterChecklist = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].WORKFLOW_MASTERCHECKLIST;
        this.tabIDWorksheetMultiplueStatusChange = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;
        this.isMultipleStatusUpdate = false;
        this.worksheetTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].WORKFLOW_WORKSHEET;
        this.minPreviousMonth = 3;
        this.maxNextMonth = 4;
    }
    WorksheetDashboardTabComponent.prototype.ngOnInit = function () {
        this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
        this.isMyWorksheet = this._sharedService.checkUserPrivilegesTabs(this.tabIDMy);
        this.isCompletedWorksheet = this._sharedService.checkUserPrivilegesTabs(this.tabIDCompleted);
        this.isInCompletedWorksheet = this._sharedService.checkUserPrivilegesTabs(this.tabIDInCompleted);
        this.isBefreeWorksheet = this._sharedService.checkUserPrivilegesTabs(this.tabIDBefree);
        this.isMultipleStatusUpdate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetstatuschange', 1);
        this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
        this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
        this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
        this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
        this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
        this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
        this.getCounter();
    };
    WorksheetDashboardTabComponent.prototype.getCounter = function () {
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format('YYYY-MM-DD');
        var todaysdate = new Date();
        var year = todaysdate.getFullYear();
        var month = todaysdate.getMonth();
        var day = todaysdate.getDate();
        // My Worksheet Counter
        if (!_utility_common_functions__WEBPACK_IMPORTED_MODULE_9__["CommonFunctions"].isEmpty(this.isMyWorksheet)) {
            this.isMyWorksheetTab = true;
            // this._commonCrudService.listData(AdminAPI.MY_WORKSHEET_LISTING, {
            //   'counter': 1,
            //   'records': 'all',
            //   'type': 'my'
            // }, {'compare': {'lessthanequal': {'due_date': this.todayDate}}}).subscribe(response => {
            //   this.myWorksheetCount = response.payload.data;
            // });
        }
        // My InCompleted Worksheet Counter
        if (!_utility_common_functions__WEBPACK_IMPORTED_MODULE_9__["CommonFunctions"].isEmpty(this.isInCompletedWorksheet)) {
            this.isInCompletedWorksheetTab = true;
            var previousDate = new Date(year, month - this.minPreviousMonth, 1);
            var nextDate = new Date(year, month + this.maxNextMonth, 0);
            // this._commonCrudService.listData(AdminAPI.INCOMPLETE_WORKSHEET_LISTING, {
            //   'counter': 1,
            //   'records': 'all',
            //   'type': 'incompleted'
            // }, {
            //   'compare': {
            //     'greaterthanequal': {'due_date': moment(previousDate).format('YYYY-MM-DD')},
            //     // 'lessthanequal': {'end_date': moment(todaysdate).format('YYYY-MM-DD'), 'due_date': moment(nextDate).format('YYYY-MM-DD')}
            //     'lessthanequal': {'due_date': moment(nextDate).format('YYYY-MM-DD')}
            //   }
            // }).subscribe(response => {
            //   this.incompleteWorksheetCount = response.payload.data;
            // });
        }
        // My Completed Worksheet Counter
        if (!_utility_common_functions__WEBPACK_IMPORTED_MODULE_9__["CommonFunctions"].isEmpty(this.isCompletedWorksheet)) {
            this.isCompletedWorksheetTab = true;
            var previousDate = new Date(year, month - this.minPreviousMonth, day);
            // this._commonCrudService.listData(AdminAPI.COMPLETED_WORKSHEET_LISTING, {
            //   'counter': 1,
            //   'records': 'all',
            //   'type': 'completed'
            // }, {
            //   'compare': {
            //     'greaterthanequal': {'start_date': moment(previousDate).format('YYYY-MM-DD')},
            //     'lessthanequal': {'end_date': moment(todaysdate).format('YYYY-MM-DD')}
            //   }
            // }).subscribe(response => {
            //   this.completeWorksheetCount = response.payload.data;
            // });
        }
        // Befree Worksheet Counter
        if (!_utility_common_functions__WEBPACK_IMPORTED_MODULE_9__["CommonFunctions"].isEmpty(this.isBefreeWorksheet)) {
            this.isBefreeWorksheetTab = true;
            // this._commonCrudService.listData(AdminAPI.BEFREE_WORKSHEET_LISTING, {
            //   'counter': 1,
            //   'records': 'all',
            //   'type': 'befree'
            // }, {}).subscribe(response => {
            //   this.befreeWorksheetCount = response.payload.data;
            // });
        }
    };
    /**
     * Delete open confirmation modal
     */
    WorksheetDashboardTabComponent.prototype.onConfirmationDialog = function () {
        this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete ?'
            }
        });
    };
    /**
     * Open quick menu
     * @param menuName
     */
    WorksheetDashboardTabComponent.prototype.onOpenQuickMenu = function (menuName) {
        switch (menuName) {
            case 'addNewWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].ADD_WORKSHEET]);
                break;
            case 'todayWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].WORKSHEET_TODAYS_WORKSHEET]);
                break;
            case 'todayTimesheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET]);
                break;
            case 'worksheetHierarchy':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].WORKSHEET_HIERARCHY]);
                break;
            case 'changeInOuttime':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].WORKSHEET_CHANGE_IN_OUT_TIME]);
                break;
            case 'subClientList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].WORKSHEET_SUB_CLIENT_LIST]);
                break;
            case 'worksheetMasterChecklist':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].WORKSHEET_MASTER_CHECKLIST]);
                break;
            case 'trainingList':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].WORKSHEET_TRAINING_LIST]);
                break;
            case 'revieworKnockBackWorksheet':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].WORKSHEET_REVIEW_OR_KNOCK_BACK]);
                break;
            case 'peerReviewWorksheetListing':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
                break;
            case 'changeMultipleWorksheetStatus':
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].CHANGE_MULTIPLE_WORKSHEET_STATUS]);
                break;
        }
    };
    WorksheetDashboardTabComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    WorksheetDashboardTabComponent.prototype.onWorksheetDashboardTab = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    WorksheetDashboardTabComponent.prototype.openSOP = function () {
        window.open('https://docs.google.com/document/d/1cpujAGWyMZyaBVOOZhRPB99SftMxrGB9UFHljlYNk-Q', '_blank');
    };
    WorksheetDashboardTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-worksheet-dashboard-tab',
            template: __webpack_require__(/*! ./worksheet-dashboard-tab.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-dashboard-tab.component.html"),
            styles: [__webpack_require__(/*! ./worksheet-dashboard-tab.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-dashboard-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"]])
    ], WorksheetDashboardTabComponent);
    return WorksheetDashboardTabComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-dashboard-tab.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-dashboard-tab.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: WorksheetDashboardTabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetDashboardTabModule", function() { return WorksheetDashboardTabModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_incompleted_view_incompleted_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-incompleted/view-incompleted.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-incompleted/view-incompleted.component.ts");
/* harmony import */ var _view_completed_view_completed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-completed/view-completed.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-completed/view-completed.component.ts");
/* harmony import */ var _view_befree_worksheet_view_befree_worksheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-befree-worksheet/view-befree-worksheet.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/view-befree-worksheet/view-befree-worksheet.component.ts");
/* harmony import */ var _myworksheet_myworksheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myworksheet/myworksheet.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/myworksheet/myworksheet.component.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _worksheet_dashboard_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./worksheet-dashboard-tab.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-dashboard-tab.component.ts");
/* harmony import */ var _worksheet_report_worksheet_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./worksheet-report/worksheet-report.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-report/worksheet-report.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'worksheet-dashboard-tab',
        component: _worksheet_dashboard_tab_component__WEBPACK_IMPORTED_MODULE_7__["WorksheetDashboardTabComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_9__["AdminAuthGuard"]]
    }
];
var WorksheetDashboardTabModule = /** @class */ (function () {
    function WorksheetDashboardTabModule() {
    }
    WorksheetDashboardTabModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_6__["UtilityModule"]
            ],
            declarations: [_view_incompleted_view_incompleted_component__WEBPACK_IMPORTED_MODULE_2__["ViewIncompletedComponent"], _view_completed_view_completed_component__WEBPACK_IMPORTED_MODULE_3__["ViewCompletedComponent"], _view_befree_worksheet_view_befree_worksheet_component__WEBPACK_IMPORTED_MODULE_4__["ViewBefreeWorksheetComponent"], _myworksheet_myworksheet_component__WEBPACK_IMPORTED_MODULE_5__["MyworksheetComponent"], _worksheet_dashboard_tab_component__WEBPACK_IMPORTED_MODULE_7__["WorksheetDashboardTabComponent"], _worksheet_report_worksheet_report_component__WEBPACK_IMPORTED_MODULE_8__["WorksheetReportComponent"]],
            exports: [_view_incompleted_view_incompleted_component__WEBPACK_IMPORTED_MODULE_2__["ViewIncompletedComponent"]]
        })
    ], WorksheetDashboardTabModule);
    return WorksheetDashboardTabModule;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-report/worksheet-report.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-report/worksheet-report.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Data Grid -->\r\n<div class=\"with-filter-grid-container\">\r\n\r\n  <!-- Start Grid Inner Header -->\r\n  <div class=\"grid-inner-header MT-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 inner-header-title\">\r\n        <h3>Worksheet Report</h3>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n\r\n\r\n  <!--my worksheet container html start-->\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"25%\">Service</th>\r\n          <th width=\"20%\">Master Activity</th>\r\n          <th width=\"10%\">Task</th>\r\n          <th width=\"10%\">Frequency</th>\r\n          <th width=\"10%\">Start Date</th>\r\n          <th width=\"10%\">End Date</th>\r\n          <th width=\"10%\">Status</th>\r\n          <th width=\"5%\">Action</th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n\r\n      <div class=\"table-body\">\r\n        <table *ngIf=\"worksheetDetails.length\">\r\n          <tbody *ngFor=\"let worksheetdetails of worksheetDetails; let i = index\">\r\n          <tr>\r\n            <td width=\"25%\">{{worksheetdetails?.service_name}}\r\n            </td>\r\n            <td width=\"20%\">{{worksheetdetails?.master_name}}\r\n            </td>\r\n            <td width=\"10%\">{{worksheetdetails?.task_name}}\r\n            </td>\r\n            <td width=\"10%\">{{worksheetdetails?.frequency_name}}\r\n            </td>\r\n            <td width=\"10%\">{{worksheetdetails?.start_date}}\r\n            </td>\r\n            <td width=\"10%\">{{worksheetdetails?.end_date}}\r\n            </td>\r\n            <td width=\"10%\"><span class=\"text-truncate h6 pl-4 pr-4\">\r\n                  {{worksheetdetails?.status_name}}</span>\r\n            </td>\r\n            <td width=\"5%\">\r\n              <mat-icon matTooltip=\"View\"\r\n                        (click)=\"onViewComments()\">remove_red_eye\r\n              </mat-icon>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <table>\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"10\">\r\n            <mat-paginator [length]=\"totalRecords\"\r\n                           [pageSize]=\"pageSize\"\r\n                           [pageIndex]=\"pageIndex\"\r\n                           [pageSizeOptions]=\"pageArray\"\r\n                           (page)=\"onPageChange($event)\">\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"worksheetDetails.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- View completed worksheet html over-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-report/worksheet-report.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-report/worksheet-report.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-inner-header .inner-header-title h3 {\n  line-height: 3rem; }\n\n.grid_select_8rem .mat-form-field {\n  width: 120px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vd29ya2Zsb3ctbW9kdWxlL3dvcmtzaGVldC1tb2R1bGUvd29ya3NoZWV0LWRhc2hib2FyZC10YWIvd29ya3NoZWV0LXJlcG9ydC9DOlxcd2FtcDY0XFx3d3dcXGhrX2Zyb250ZW5kL3Byb2plY3RzXFxhZG1pblxcc3JjXFxhcHBcXGFkbWluXFx3b3JrZmxvdy1tb2R1bGVcXHdvcmtzaGVldC1tb2R1bGVcXHdvcmtzaGVldC1kYXNoYm9hcmQtdGFiXFx3b3Jrc2hlZXQtcmVwb3J0XFx3b3Jrc2hlZXQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBRUksdUJBQXVCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvYWRtaW4vc3JjL2FwcC9hZG1pbi93b3JrZmxvdy1tb2R1bGUvd29ya3NoZWV0LW1vZHVsZS93b3Jrc2hlZXQtZGFzaGJvYXJkLXRhYi93b3Jrc2hlZXQtcmVwb3J0L3dvcmtzaGVldC1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1pbm5lci1oZWFkZXIgLmlubmVyLWhlYWRlci10aXRsZSBoMyB7XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5ncmlkX3NlbGVjdF84cmVtIHtcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-report/worksheet-report.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-report/worksheet-report.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: WorksheetReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetReportComponent", function() { return WorksheetReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorksheetReportComponent = /** @class */ (function () {
    function WorksheetReportComponent(_fb, _router) {
        this._fb = _fb;
        this._router = _router;
        // Data Variables
        this.worksheetDetails = [];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["BASE"].PAGINATION_ARRAY[1];
    }
    WorksheetReportComponent.prototype.ngOnInit = function () {
        this.initializationMethod();
    };
    // Initialization Methods
    WorksheetReportComponent.prototype.initializationMethod = function () {
        for (var i = 0; i < 20; i++) {
            var obj = {
                service_name: 'BEFREE - Bookkeeping and Payroll',
                master_name: '22.11.2016 05:30:00 AM',
                task_name: 'Completed',
                frequency_name: '1500',
                start_date: '1200',
                end_date: '0',
                status_name: '29'
            };
            this.worksheetDetails.push(obj);
        }
    };
    WorksheetReportComponent.prototype.onViewComments = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].VIEW_WORKSHEET_COMMENTS]);
    };
    /**
     * Pagination page change event
     * @param event
     */
    WorksheetReportComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
    };
    WorksheetReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-worksheet-report',
            template: __webpack_require__(/*! ./worksheet-report.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-report/worksheet-report.component.html"),
            styles: [__webpack_require__(/*! ./worksheet-report.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet-report/worksheet-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WorksheetReportComponent);
    return WorksheetReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~worksheet-dashboard-tab-worksheet-dashboard-tab-module~worksheet-module-worksheet-module~wor~61b728e4.js.map