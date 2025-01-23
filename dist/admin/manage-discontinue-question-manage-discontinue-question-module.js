(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-discontinue-question-manage-discontinue-question-module"],{

/***/ "./src/app/admin/administration-module/manage-discontinue-question/add-manage-discontinue-question-dialog/add-manage-discontinue-question-dialog.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-discontinue-question/add-manage-discontinue-question-dialog/add-manage-discontinue-question-dialog.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start add Discontinue questionform Dialog-->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{this.questionDetail?.id > 0 ? 'Update' : 'Add'}} Discontinue Question</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n  <form [formGroup]=\"addDiscontinueQuestionForm\" (submit)=\"onSumbitDiscontinueQuestion(addDiscontinueQuestionForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row MT-10\">\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"who_fillup\" placeholder=\"Who Fillup?\" required>\r\n              <mat-option *ngFor=\"let option of whoFillUpList.slice(1)\" [value]=\"option?.key\">\r\n                {{option?.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addDiscontinueQuestionForm.get('who_fillup'))\"\r\n                            [errMsg]=\"validationMsg.WHO_FILLUP_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <ng-select class=\"custom\" [items]=\"questionListData\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"name\"\r\n                     placeholder=\"Parent question\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"parent_id\">\r\n          </ng-select>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Question\" formControlName=\"name\" required></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addDiscontinueQuestionForm.get('name'))\"\r\n                            [errMsg]=\"validationMsg.QUESTION_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"type\" placeholder=\"Question Type\" required>\r\n              <mat-option *ngFor=\"let option of discontinueQuestionTypedropdown.slice(1)\" [value]=\"option?.key\">\r\n                {{option?.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addDiscontinueQuestionForm.get('type'))\"\r\n                            [errMsg]=\"validationMsg.QUESTION_TYPE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"is_active\" placeholder=\"Status\" required>\r\n              <mat-option *ngFor=\"let option of activeInactivedropdown.slice(1)\" [value]=\"option?.key\">\r\n                {{option?.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addDiscontinueQuestionForm.get('is_active'))\"\r\n                            [errMsg]=\"validationMsg.STATUS_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button type=\"submit\" [disabled]=\"addDiscontinueQuestionForm.invalid\" class=\"btn-primary\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/manage-discontinue-question/add-manage-discontinue-question-dialog/add-manage-discontinue-question-dialog.component.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-discontinue-question/add-manage-discontinue-question-dialog/add-manage-discontinue-question-dialog.component.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: AddManageDiscontinueQuestionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddManageDiscontinueQuestionDialogComponent", function() { return AddManageDiscontinueQuestionDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
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








var AddManageDiscontinueQuestionDialogComponent = /** @class */ (function (_super) {
    __extends(AddManageDiscontinueQuestionDialogComponent, _super);
    function AddManageDiscontinueQuestionDialogComponent(dialogRef, data, _fb, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this.questionListData = [];
        _this.whoFillUpList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["whoFillUp"];
        _this.activeInactivedropdown = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["activeInactive"];
        _this.discontinueQuestionTypedropdown = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["discontinueQuestionType"];
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_1__["ValidationConstantMessage"]();
        return _this;
    }
    AddManageDiscontinueQuestionDialogComponent.prototype.ngOnInit = function () {
        this.questionDetail = (this.data.discontinueQuestionData) ? this.data.discontinueQuestionData : [];
        this.createAddDiscontinueQuestionForm();
        this.questionList();
    };
    AddManageDiscontinueQuestionDialogComponent.prototype.questionList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DROPDOWN_LIST, {
            'table': 'discontinue_question',
            'column': 'id,name',
            'search': '{"compare":{"notequal":{"id":' + this.questionDetail.id + '}}}',
            'sortOrder': 'id',
            'sortBy': 'desc'
        }, {})
            .subscribe(function (response) {
            _this.questionListData = response;
        });
    };
    AddManageDiscontinueQuestionDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    AddManageDiscontinueQuestionDialogComponent.prototype.createAddDiscontinueQuestionForm = function () {
        this.addDiscontinueQuestionForm = this._fb.group({
            who_fillup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.questionDetail) ? (this.questionDetail.who_fillup) ? this.questionDetail.who_fillup : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.questionDetail) ? (this.questionDetail.parent_id) ? this.questionDetail.parent_id.id : null : null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.questionDetail) ? (this.questionDetail.name) ? this.questionDetail.name : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.questionDetail) ? (this.questionDetail.type >= 0) ? this.questionDetail.type : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.questionDetail) ? (this.questionDetail.is_active >= 0) ? this.questionDetail.is_active : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    /**
     * On Submit Form
     * @param form
     */
    AddManageDiscontinueQuestionDialogComponent.prototype.onSumbitDiscontinueQuestion = function (form) {
        var _this = this;
        if (form.valid) {
            if (form.value['parent_id'] === null) {
                form.value['parent_id'] = 0;
            }
            if (this.questionDetail.id) {
                form.value['_method'] = 'put';
                this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DISCONTINUE_QUESTION_UPDATE, this.questionDetail.id, form.value).subscribe(function (response) {
                    _this.dialogRef.close();
                });
            }
            else {
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DISCONTINUE_QUESTION_STORE, form.value).subscribe(function (response) {
                    _this.dialogRef.close();
                });
            }
        }
    };
    AddManageDiscontinueQuestionDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-manage-discontinue-question-dialog',
            template: __webpack_require__(/*! ./add-manage-discontinue-question-dialog.component.html */ "./src/app/admin/administration-module/manage-discontinue-question/add-manage-discontinue-question-dialog/add-manage-discontinue-question-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"]])
    ], AddManageDiscontinueQuestionDialogComponent);
    return AddManageDiscontinueQuestionDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/administration-module/manage-discontinue-question/manage-discontinue-question.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-discontinue-question/manage-discontinue-question.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"manage-discontinue-question-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon><a (click)=\"onGoDashboard()\" class=\"cursor-pointer\">home</a></mat-icon>\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>ADMINISTRATION</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">MANAGE DISCONTINUE QUESTION</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <button class=\"open-dialog-btn\" (click)=\"onAddQuestionDialog()\" *ngIf=\"tabData['add_edit']\">\r\n            <mat-icon class=\"material-icons\">add</mat-icon>\r\n            Add Question\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onOpenFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <i\r\n          class=\"material-icons\">close</i></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Who fillup?\" formControlName=\"who_fillup\">\r\n                  <mat-option *ngFor=\"let option of whoFillUpList.slice(1)\" [value]=\"option?.key\">\r\n                    {{option?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Status\" formControlName=\"is_active\">\r\n                  <mat-option *ngFor=\"let option of activeInactivedropdown.slice(1)\" [value]=\"option?.key\">\r\n                    {{option?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"staffList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Created by\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"created_by\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n\r\n        <div class=\"tag\" *ngIf=\"whoFillup.value\">\r\n          <span class=\"tag__title\">Who Fillup?:</span>\r\n          <span>\r\n            <mat-form-field>\r\n                 <mat-select placeholder=\"Who fillup?\" formControlName=\"who_fillup\"\r\n                             (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                  <mat-option *ngFor=\"let option of whoFillUpList.slice(1)\" [value]=\"option?.key\">\r\n                    {{option?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('who_fillup')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"status.value >=0 && status.value !== null\">\r\n          <span class=\"tag__title\">Status:</span>\r\n          <span>\r\n            <mat-form-field>\r\n                 <mat-select placeholder=\"Status\" formControlName=\"is_active\"\r\n                             (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                  <mat-option *ngFor=\"let option of activeInactivedropdown.slice(1)\" [value]=\"option?.key\">\r\n                    {{option?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('is_active')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"createdByField.value\">\r\n          <span class=\"tag__title\">Created By:</span>\r\n          <span>\r\n            <ng-select class=\"custom\" [items]=\"staffList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Created By\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"created_by\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('created_by')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\"\r\n             *ngIf=\"whoFillup.value || (status.value >=0 && status.value !== null) || createdByField.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Start Table -->\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block scrollable-grid\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"5%\">Sr. No</th>\r\n\r\n          <th width=\"30%\">Parent question name\r\n          </th>\r\n\r\n          <th width=\"30%\">Question name\r\n          </th>\r\n\r\n          <th width=\"10%\">who fillup?\r\n          </th>\r\n\r\n          <th width=\"15%\">Created By\r\n          </th>\r\n\r\n          <th width=\"10%\">Action\r\n          </th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody *ngIf=\"manageQuestionList.length\">\r\n          <tr *ngFor=\"let managequestion of manageQuestionList; let i = index\">\r\n            <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}\r\n            </td>\r\n            <td width=\"30%\">{{managequestion?.parent_id?.name | checkEmpty}}</td>\r\n            <td width=\"30%\">{{managequestion?.name}}</td>\r\n            <td width=\"10%\">{{getWhoFillUp(managequestion?.who_fillup)}}</td>\r\n            <td width=\"15%\">{{managequestion?.created_by?.userfullname}}</td>\r\n            <td width=\"10%\">\r\n              <a class=\"light-orange-color\" [matTooltip]=\"'Edit'\" (click)=\"onAddQuestionDialog(managequestion)\"\r\n                 *ngIf=\"tabData['add_edit']\">\r\n                <mat-icon class=\"material-icons\">edit</mat-icon>\r\n              </a>\r\n              <mat-slide-toggle *ngIf=\"slideActiveInactive[i] && tabData['add_edit']\"\r\n                                [(ngModel)]=\"slideActiveInactive[i]\"\r\n                                (change)=\"openToggleConfirmationDialog($event, managequestion, i)\"></mat-slide-toggle>\r\n              <mat-slide-toggle *ngIf=\"!slideActiveInactive[i] && tabData['add_edit']\"\r\n                                [(ngModel)]=\"slideActiveInactive[i]\"\r\n                                [checked]=\"(managequestion?.is_active) ? true : false\"\r\n                                (change)=\"openToggleConfirmationDialog($event, managequestion, i)\"></mat-slide-toggle>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <table *ngIf=\"manageQuestionList.length\">\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"10\">\r\n            <mat-paginator [length]=\"totalRecords\"\r\n                           [pageSize]=\"pageSize\"\r\n                           [pageIndex]=\"pageIndex\"\r\n                           [pageSizeOptions]=\"pageArray\"\r\n                           (page)=\"onPageChange($event)\">\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <!-- End Table -->\r\n  <div *ngIf=\"manageQuestionList.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/manage-discontinue-question/manage-discontinue-question.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-discontinue-question/manage-discontinue-question.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluaXN0cmF0aW9uLW1vZHVsZS9tYW5hZ2UtZGlzY29udGludWUtcXVlc3Rpb24vbWFuYWdlLWRpc2NvbnRpbnVlLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/administration-module/manage-discontinue-question/manage-discontinue-question.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-discontinue-question/manage-discontinue-question.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ManageDiscontinueQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageDiscontinueQuestionComponent", function() { return ManageDiscontinueQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_manage_discontinue_question_dialog_add_manage_discontinue_question_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-manage-discontinue-question-dialog/add-manage-discontinue-question-dialog.component */ "./src/app/admin/administration-module/manage-discontinue-question/add-manage-discontinue-question-dialog/add-manage-discontinue-question-dialog.component.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ManageDiscontinueQuestionComponent = /** @class */ (function () {
    function ManageDiscontinueQuestionComponent(_fb, _router, dialog, _commonCrudService, _sharedObjService, _sharedService) {
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        // Data Variable
        this.manageQuestionList = [];
        this.whoFillUpList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["whoFillUp"];
        this.activeInactivedropdown = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["activeInactive"];
        this.staffList = [];
        this.slideActiveInactive = [];
        this.equalJSON = {};
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["BASE"].PAGINATION_ARRAY[1];
        // MatPaginator Inputs
        this.length = 100;
        this.pageSizeOptions = [5, 10, 25, 100];
        // Other Variables
        this.isOpenFilterView = false;
        this.isOpenHistoryDialog = false;
        // State variables
        this.trIndex = -1;
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__["ADMINTABACCESS"].DISCONTINUE_CLIENT_REASON_MANAGEMENT;
    }
    Object.defineProperty(ManageDiscontinueQuestionComponent.prototype, "whoFillup", {
        // get form control
        get: function () {
            return this.filterForm.get('who_fillup');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageDiscontinueQuestionComponent.prototype, "status", {
        get: function () {
            return this.filterForm.get('is_active');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageDiscontinueQuestionComponent.prototype, "createdByField", {
        get: function () {
            return this.filterForm.get('created_by');
        },
        enumerable: true,
        configurable: true
    });
    ManageDiscontinueQuestionComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        // console.log(this.tabData);
        this.initializationMethod();
        this.createAdvanceFilterForm();
        this.getUserList();
    };
    /**
     * Initialization Methods
     */
    ManageDiscontinueQuestionComponent.prototype.initializationMethod = function () {
        this.getDiscontinueQuestionList(1, 'id', 'desc');
    };
    ManageDiscontinueQuestionComponent.prototype.getDiscontinueQuestionList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DISCONTINUE_QUESTION_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParams())
            .subscribe(function (response) {
            _this.handleResponse(response);
        });
    };
    ManageDiscontinueQuestionComponent.prototype.handleResponse = function (response) {
        var _this = this;
        this.manageQuestionList = response['payload']['data'];
        if (this.manageQuestionList) {
            var i_1 = 0;
            this.manageQuestionList.forEach(function (item) {
                _this.slideActiveInactive[i_1] = (item.is_active === 1) ? true : false;
                i_1++;
            });
        }
        this.page = response['pager']['pageNumber'];
        this.pageIndex = this.page - 1;
        this.totalRecords = +(response['pager']['totalRecords']);
        this.sortBy = response['pager']['sortBy'];
        this.sortOrder = response['pager']['sortOrder'];
    };
    ManageDiscontinueQuestionComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.staffList = response;
        });
    };
    // Helper
    /**
     * get function for returning advance query params for conference room get api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{pageNumber: number; recordsPerPage: number}}
     */
    ManageDiscontinueQuestionComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
     * getting advanced search params for conference room list api
     * @returns {{}}
     */
    ManageDiscontinueQuestionComponent.prototype.getSearchParams = function () {
        var params = {};
        var filter = {};
        // check for the object whether it's empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if ((Object.keys(this.equalJSON).length)) {
            params['compare'] = filter;
        }
        return params;
    };
    /**
     * Create filter ChangeInout
     */
    ManageDiscontinueQuestionComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            who_fillup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            created_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            who_fillup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            created_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    // Events
    ManageDiscontinueQuestionComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Toogle Filter
     */
    ManageDiscontinueQuestionComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Close filter
     */
    ManageDiscontinueQuestionComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    /**
     * Pagination page change method
     * @param event
     */
    ManageDiscontinueQuestionComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getDiscontinueQuestionList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * toggle active / inactive confirmation modal
     */
    ManageDiscontinueQuestionComponent.prototype.onActiveInactiveDialog = function () {
        this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to active ?'
            }
        });
    };
    ManageDiscontinueQuestionComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_10__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    ManageDiscontinueQuestionComponent.prototype.onAddQuestionDialog = function (questionDetail) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_manage_discontinue_question_dialog_add_manage_discontinue_question_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddManageDiscontinueQuestionDialogComponent"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {
                discontinueQuestionData: (questionDetail) ? questionDetail : []
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getDiscontinueQuestionList(1, 'id', 'desc');
        });
    };
    ManageDiscontinueQuestionComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * To get whofill up name
     * @param id
     */
    ManageDiscontinueQuestionComponent.prototype.getWhoFillUp = function (id) {
        var val = this.whoFillUpList.filter(function (elem) { return elem.key === Number(id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     *  Toggle confirmation Dialog
     */
    ManageDiscontinueQuestionComponent.prototype.openToggleConfirmationDialog = function (event, discontinueData, id) {
        var _this = this;
        var status = event.checked ? 'Inactive' : 'Active';
        var statusNagetive = !event.checked ? 'Inactive' : 'Active';
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], {
            data: {
                content: 'Do you want change status from ' + status + ' to ' + statusNagetive
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this.activeInactiveDiscontinueQuestion(event.checked, discontinueData);
            }
            else {
                if (_this.slideActiveInactive[id]) {
                    _this.slideActiveInactive[id] = false;
                }
                else {
                    _this.slideActiveInactive[id] = true;
                }
            }
        });
    };
    /**
     * Active Inactive Recurring Data
     * @param {boolean} action
     * @param {Recurring} recurringData
     */
    ManageDiscontinueQuestionComponent.prototype.activeInactiveDiscontinueQuestion = function (action, discontinueData) {
        var _this = this;
        var params = { 'is_active': action ? 1 : 0, '_method': 'put' };
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DISCONTINUE_QUESTION_UPDATE, discontinueData.id, params).subscribe(function (response) {
            _this.manageQuestionList.map(function (item) {
                if (item.id === discontinueData.id) {
                    item.is_active = item.is_active ? 0 : 1;
                }
            });
        });
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    ManageDiscontinueQuestionComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
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
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'who_fillup' || key === 'is_active' || key === 'created_by') {
                        // if (key === 'date') {
                        //   this.equalJSON[key] = moment(form.value[key]).format('YYYY-MM-DD');
                        // } else {
                        this.equalJSON[key] = form.value[key];
                        // }
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getDiscontinueQuestionList(1, 'id', 'desc');
        }
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    ManageDiscontinueQuestionComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'who_fillup': (form.value['who_fillup']) ? form.value['who_fillup'] : null,
                'is_active': (form.value['is_active']) ? form.value['is_active'] : null,
                'created_by': form.value['created_by'],
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Reset All Filters
     */
    ManageDiscontinueQuestionComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.equalJSON = {};
        this.isOpenFilterView = false;
        this.getDiscontinueQuestionList(1, 'id', 'desc');
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    ManageDiscontinueQuestionComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'who_fillup' || elementName === 'created_by' || elementName === 'is_active') {
            delete this.equalJSON[elementName];
        }
        this.getDiscontinueQuestionList(1, this.sortBy, this.sortOrder);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ManageDiscontinueQuestionComponent.prototype, "onKeydownHandler", null);
    ManageDiscontinueQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-discontinue-question',
            template: __webpack_require__(/*! ./manage-discontinue-question.component.html */ "./src/app/admin/administration-module/manage-discontinue-question/manage-discontinue-question.component.html"),
            styles: [__webpack_require__(/*! ./manage-discontinue-question.component.scss */ "./src/app/admin/administration-module/manage-discontinue-question/manage-discontinue-question.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__["SharedObjService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"]])
    ], ManageDiscontinueQuestionComponent);
    return ManageDiscontinueQuestionComponent;
}());



/***/ }),

/***/ "./src/app/admin/administration-module/manage-discontinue-question/manage-discontinue-question.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/manage-discontinue-question/manage-discontinue-question.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ManageDiscontinueQuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageDiscontinueQuestionModule", function() { return ManageDiscontinueQuestionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _manage_discontinue_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-discontinue-question.component */ "./src/app/admin/administration-module/manage-discontinue-question/manage-discontinue-question.component.ts");
/* harmony import */ var _add_manage_discontinue_question_dialog_add_manage_discontinue_question_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-manage-discontinue-question-dialog/add-manage-discontinue-question-dialog.component */ "./src/app/admin/administration-module/manage-discontinue-question/add-manage-discontinue-question-dialog/add-manage-discontinue-question-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _manage_discontinue_question_component__WEBPACK_IMPORTED_MODULE_2__["ManageDiscontinueQuestionComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuard"]],
        children: [
            {
                path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].MANAGE_DISCONTINUE_QUESTION_ROUTE,
                component: _manage_discontinue_question_component__WEBPACK_IMPORTED_MODULE_2__["ManageDiscontinueQuestionComponent"]
            }
        ]
    },
];
var ManageDiscontinueQuestionModule = /** @class */ (function () {
    function ManageDiscontinueQuestionModule() {
    }
    ManageDiscontinueQuestionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_manage_discontinue_question_component__WEBPACK_IMPORTED_MODULE_2__["ManageDiscontinueQuestionComponent"], _add_manage_discontinue_question_dialog_add_manage_discontinue_question_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddManageDiscontinueQuestionDialogComponent"]],
            entryComponents: [_add_manage_discontinue_question_dialog_add_manage_discontinue_question_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddManageDiscontinueQuestionDialogComponent"]]
        })
    ], ManageDiscontinueQuestionModule);
    return ManageDiscontinueQuestionModule;
}());



/***/ })

}]);
//# sourceMappingURL=manage-discontinue-question-manage-discontinue-question-module.js.map