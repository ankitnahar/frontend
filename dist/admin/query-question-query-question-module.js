(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["query-question-query-question-module"],{

/***/ "./src/app/admin/administration-module/query-question/add-query-question-dialog/add-query-question-dialog.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/query-question/add-query-question-dialog/add-query-question-dialog.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Add Query Question Group dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{queryQuestionDetail && queryQuestionDetail.id > 0 ? 'Update' : 'Add'}} Query\r\n      Question\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose(false)\">close</i></a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addQueryQuestionForm\" (submit)=\"onSubmit(addQueryQuestionForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 MT-5\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Question\" formControlName=\"question_name\" required [matTextareaAutosize]\r\n                      matAutosizeMinRows=\"2\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addQueryQuestionForm.get('question_name'))\"\r\n                            [errMsg]=\"validationMsg.QUESTION_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 MT-5\">\r\n          <ng-select [items]=\"activeInactiveList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"label\"\r\n                     placeholder=\"Status\"\r\n                     bindValue=\"key\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"is_active\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addQueryQuestionForm.get('is_active'))\"\r\n                            [errMsg]=\"validationMsg.STATUS_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button type=\"submit\" [disabled]=\"addQueryQuestionForm.invalid\" class=\"btn-primary\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Add Query Question Group dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/query-question/add-query-question-dialog/add-query-question-dialog.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/query-question/add-query-question-dialog/add-query-question-dialog.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AddQueryQuestionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQueryQuestionDialogComponent", function() { return AddQueryQuestionDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
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









var AddQueryQuestionDialogComponent = /** @class */ (function (_super) {
    __extends(AddQueryQuestionDialogComponent, _super);
    function AddQueryQuestionDialogComponent(dialogRef, data, _fb, _router, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._router = _router;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.activeInactiveList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["activeInactive"].slice(1);
        return _this;
    }
    AddQueryQuestionDialogComponent.prototype.ngOnInit = function () {
        this.queryQuestionDetail = (this.data.queryQuestionData) ? this.data.queryQuestionData : [];
        this.createAddQueryQuestionForm();
    };
    /**
     * Add Query Question Form
     */
    AddQueryQuestionDialogComponent.prototype.createAddQueryQuestionForm = function () {
        this.addQueryQuestionForm = this._fb.group({
            question_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.queryQuestionDetail) ? (this.queryQuestionDetail.question_name) ? this.queryQuestionDetail.question_name : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.queryQuestionDetail) ? (this.queryQuestionDetail.is_active) ? this.queryQuestionDetail.is_active : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    };
    /**
     * On Submit Form
     * @param form
     */
    AddQueryQuestionDialogComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            if (this.queryQuestionDetail.id) {
                form.value['_method'] = 'put';
                this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].QUERY_QUESTION_UPDATE, this.queryQuestionDetail.id, form.value).subscribe(function (response) {
                    _this.dialogRef.close(true);
                });
            }
            else {
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].QUERY_QUESTION_STORE, form.value).subscribe(function (response) {
                    _this.dialogRef.close(true);
                });
            }
        }
    };
    AddQueryQuestionDialogComponent.prototype.onClose = function (value) {
        this.dialogRef.close(value);
    };
    AddQueryQuestionDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-query-question-dialog',
            template: __webpack_require__(/*! ./add-query-question-dialog.component.html */ "./src/app/admin/administration-module/query-question/add-query-question-dialog/add-query-question-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"]])
    ], AddQueryQuestionDialogComponent);
    return AddQueryQuestionDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/administration-module/query-question/query-question.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/administration-module/query-question/query-question.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin (Administration) manager users html view -->\r\n<div class=\"admin-quote-question-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>ADMINISTRATION</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">QUERY QUESTION</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <button class=\"open-dialog-btn\" (click)=\"onAddQueryQuestionDialog(null)\">\r\n            <mat-icon class=\"material-icons\">add</mat-icon>\r\n            Add Query Question\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-xs-7\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onToggleFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon>filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li>\r\n              <a (click)=\"downloadExcel()\">\r\n                <span>Excel</span>\r\n                <mat-icon>file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilter}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilter\" (click)=\"onToggleFilter()\">Esc <i\r\n          class=\"material-icons\">close</i></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Question\" formControlName=\"question_name\"/>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"activeInactiveList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"label\"\r\n                         placeholder=\"Status\"\r\n                         bindValue=\"key\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"is_active\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10 text-right\">\r\n              <button type=\"reset\" class=\"btn-cancel\" (click)=\"resetForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"tag\" *ngIf=\"queryName.value\">\r\n            <span class=\"tag__title\">Question: </span>\r\n            <span>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Question\" formControlName=\"question_name\"\r\n                       (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n              </mat-form-field>\r\n            </span>\r\n            <i class=\"material-icons tag__close\" (click)=\"onClearTag('question_name')\">close</i>\r\n          </div>\r\n          <div class=\"tag\" *ngIf=\"isActive.value !== null\">\r\n            <span class=\"tag__title\">Status: </span>\r\n            <span>\r\n               <ng-select [items]=\"activeInactiveList\"\r\n                          [closeOnSelect]=\"true\"\r\n                          bindLabel=\"label\"\r\n                          placeholder=\"Status\"\r\n                          bindValue=\"key\"\r\n                          [virtualScroll]=\"true\"\r\n                          [searchable]=\"true\"\r\n                          [hideSelected]=\"true\"\r\n                          formControlName=\"is_active\"\r\n                          (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n            </span>\r\n            <i class=\"material-icons tag__close\" (click)=\"onClearTag('is_active')\">close</i>\r\n          </div>\r\n          <div class=\"clearAll-tags\"\r\n               *ngIf=\"queryName.value || isActive.value !== null\">\r\n            <a (click)=\"resetForm()\">Clear all</a>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"4%\">Sr.No</th>\r\n\r\n            <th width=\"88%\"\r\n                (click)=\"getSortData('question_name', sortBy === 'question_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Question\r\n              <i *ngIf=\"sortBy === 'question_name'\" [ngClass]=\"{'material-icons': true,\r\n                 'active' : (sortBy === 'question_name'),\r\n                  'icon-up' : ((sortBy === 'question_name') && (sortOrder === 'asc')),\r\n                  'icon-down' : true}\">\r\n                {{(sortBy === 'query') ? ((sortOrder === 'asc') ? 'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"8%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let queryQuestionData of queryQuestionList; let i = index\">\r\n              <td width=\"4%\" class=\"text-center\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"88%\">{{queryQuestionData?.question_name}}</td>\r\n              <td width=\"8%\">\r\n                <mat-icon class=\"light-orange-color\" (click)=\"onAddQueryQuestionDialog(queryQuestionData)\"\r\n                          matTooltip=\"Edit\">edit\r\n                </mat-icon>\r\n                <mat-slide-toggle matTooltip=\"Active\"\r\n                                  *ngIf=\"queryQuestionData?.is_active === 1\"\r\n                                  (click)=\"onConfirmationActiveInactiveDialog(queryQuestionData)\"\r\n                                  [checked]=\"true\"></mat-slide-toggle>\r\n                <mat-slide-toggle matTooltip=\"Inactive\"\r\n                                  *ngIf=\"queryQuestionData?.is_active === 0\"\r\n                                  (click)=\"onConfirmationActiveInactiveDialog(queryQuestionData)\"\r\n                                  [checked]=\"false\"></mat-slide-toggle>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n\r\n  <!-- <div class=\"panel-title red-color\">\r\n     No Records Found!\r\n   </div>-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/query-question/query-question.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/administration-module/query-question/query-question.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluaXN0cmF0aW9uLW1vZHVsZS9xdWVyeS1xdWVzdGlvbi9xdWVyeS1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/administration-module/query-question/query-question.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/administration-module/query-question/query-question.component.ts ***!
  \****************************************************************************************/
/*! exports provided: QueryQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryQuestionComponent", function() { return QueryQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _add_query_question_dialog_add_query_question_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-query-question-dialog/add-query-question-dialog.component */ "./src/app/admin/administration-module/query-question/add-query-question-dialog/add-query-question-dialog.component.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/common-functions */ "./src/utility/common-functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var QueryQuestionComponent = /** @class */ (function () {
    function QueryQuestionComponent(_router, _fb, dialog, _commonCrudService) {
        this._router = _router;
        this._fb = _fb;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        // Listing
        this.queryQuestionList = [];
        this.activeInactiveList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["activeInactive"].slice(1);
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.findInSetJSON = {};
        this.orJSON = {};
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilter = false;
    }
    Object.defineProperty(QueryQuestionComponent.prototype, "queryName", {
        get: function () {
            return this.filterForm.get('question_name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryQuestionComponent.prototype, "isActive", {
        get: function () {
            return this.filterForm.get('is_active');
        },
        enumerable: true,
        configurable: true
    });
    QueryQuestionComponent.prototype.ngOnInit = function () {
        this.initializationMethod();
    };
    QueryQuestionComponent.prototype.initializationMethod = function () {
        this.createAdvanceFilterForm();
        this.getQueryQuestion(1, 'id', 'desc');
        // this.yesNoControl = this.yesNoControl.splice(1, 2);
    };
    QueryQuestionComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            question_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            question_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    QueryQuestionComponent.prototype.getQueryQuestion = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].QUERY_QUESTION_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam())
            .subscribe(function (response) {
            _this.handleResponse(response);
        });
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    QueryQuestionComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
     * advance filter search operation
     * @returns {{}}
     */
    QueryQuestionComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_10__["CommonFunctions"].isEmpty(filter)) {
            params['compare'] = filter;
        }
        return params;
    };
    /**
     * Handle AM Notes List Response
     * @param response
     */
    QueryQuestionComponent.prototype.handleResponse = function (response) {
        this.queryQuestionList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    QueryQuestionComponent.prototype.onToggleFilter = function () {
        this.isOpenFilter = !this.isOpenFilter;
    };
    QueryQuestionComponent.prototype.resetForm = function () {
        this.equalJSON = {};
        this.likeJSON = {};
        this.isOpenFilter = false;
        this.createAdvanceFilterForm();
        this.getQueryQuestion(1, 'id', 'desc');
    };
    /**
     * On Add Question
     * @param questionDetail
     */
    QueryQuestionComponent.prototype.onAddQueryQuestionDialog = function (questionDetail) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_query_question_dialog_add_query_question_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AddQueryQuestionDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                queryQuestionData: (questionDetail) ? questionDetail : []
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getQueryQuestion(1, 'id', 'desc');
            }
        });
    };
    QueryQuestionComponent.prototype.onConfirmationDialogDeleteQuestion = function () {
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this question ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    QueryQuestionComponent.prototype.onConfirmationActiveInactiveDialog = function (questionDetail) {
        var _this = this;
        var status = questionDetail.is_active === 1 ? 'inactive' : 'active';
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to ' + status + ' this question?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                var is_active = questionDetail.is_active === 1 ? 0 : 1;
                _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].QUERY_QUESTION_UPDATE, questionDetail.id, {
                    'is_active': is_active,
                    '_method': 'put'
                }).subscribe(function (Response) {
                    if (Response) {
                        _this.getQueryQuestion(1, 'id', 'desc');
                    }
                });
            }
            else {
                _this.getQueryQuestion(1, 'id', 'desc');
            }
        });
    };
    QueryQuestionComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    QueryQuestionComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilter = false;
        }
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    QueryQuestionComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getQueryQuestion(1, sortKey, sortVal);
    };
    QueryQuestionComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getQueryQuestion(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    QueryQuestionComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
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
                    if (key === 'is_active') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'question_name') {
                        this.likeJSON[key] = form.value[key];
                    }
                }
                this.isOpenFilter = false;
                this.getQueryQuestion(1, 'id', 'desc');
            }
        }
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    QueryQuestionComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'question_name': (form.value['question_name']) ? form.value['question_name'] : null,
                'is_active': (form.value['is_active']) ? form.value['is_active'] : null
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    QueryQuestionComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'is_active') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'question_name') {
            delete this.likeJSON[elementName];
        }
        this.getQueryQuestion(1, 'id', 'desc');
    };
    /**
     * Export to Excel
     */
    QueryQuestionComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].QUERY_QUESTION_EXPORT, params, this.getSearchParam(), 'Query question - ', 0).subscribe(function (response) {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], QueryQuestionComponent.prototype, "onKeydownHandler", null);
    QueryQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-question',
            template: __webpack_require__(/*! ./query-question.component.html */ "./src/app/admin/administration-module/query-question/query-question.component.html"),
            styles: [__webpack_require__(/*! ./query-question.component.scss */ "./src/app/admin/administration-module/query-question/query-question.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"]])
    ], QueryQuestionComponent);
    return QueryQuestionComponent;
}());



/***/ }),

/***/ "./src/app/admin/administration-module/query-question/query-question.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/administration-module/query-question/query-question.module.ts ***!
  \*************************************************************************************/
/*! exports provided: QueryQuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryQuestionModule", function() { return QueryQuestionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _query_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query-question.component */ "./src/app/admin/administration-module/query-question/query-question.component.ts");
/* harmony import */ var _add_query_question_dialog_add_query_question_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-query-question-dialog/add-query-question-dialog.component */ "./src/app/admin/administration-module/query-question/add-query-question-dialog/add-query-question-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _query_question_component__WEBPACK_IMPORTED_MODULE_5__["QueryQuestionComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__["AdminAuthGuard"]],
    }
];
var QueryQuestionModule = /** @class */ (function () {
    function QueryQuestionModule() {
    }
    QueryQuestionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"]
            ],
            declarations: [_query_question_component__WEBPACK_IMPORTED_MODULE_5__["QueryQuestionComponent"], _add_query_question_dialog_add_query_question_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddQueryQuestionDialogComponent"]],
            entryComponents: [_add_query_question_dialog_add_query_question_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddQueryQuestionDialogComponent"]]
        })
    ], QueryQuestionModule);
    return QueryQuestionModule;
}());



/***/ })

}]);
//# sourceMappingURL=query-question-query-question-module.js.map