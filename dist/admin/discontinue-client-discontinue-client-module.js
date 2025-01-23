(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discontinue-client-discontinue-client-module"],{

/***/ "./src/app/admin/client-module/discontinue-client/add-discontinue-client-dialog/add-discontinue-client-dialog.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/add-discontinue-client-dialog/add-discontinue-client-dialog.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start Client Discontinue form Dialog-->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Client Discontinue</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n  <form [formGroup]=\"addClientDiscontinueForm\" (submit)=\"onSumbitDiscontinueEntity(addClientDiscontinueForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row MT-10\">\r\n        <div class=\"col-md-12\">\r\n          <ng-select [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Trading name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"entity_id\"\r\n                     (change)=\"getEntityTicketCounter($event)\">\r\n          </ng-select>\r\n\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addClientDiscontinueForm.get('entity_id'))\"\r\n                            [errMsg]=\"validationMsg.TRADING_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"problem_our_side\" placeholder=\"Problem from our side\" required>\r\n              <mat-option *ngFor=\"let option of YesNo.slice(1)\" [value]=\"option?.key\">\r\n                {{option?.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addClientDiscontinueForm.get('problem_our_side'))\"\r\n                            [errMsg]=\"validationMsg.PROBLEM_FROM_OUR_SIDE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Discontinue reason (IND office)\"\r\n                      formControlName=\"discontinue_comment\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addClientDiscontinueForm.get('discontinue_comment'))\"\r\n                            [errMsg]=\"validationMsg.DISCONTINUE_REASON_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Tickets from our side\" value=\"{{ticketCounter}}\" formControlName=\"ticket\"\r\n                   readonly/>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <!--<button type=\"button\" class=\"btn-default MR-10\">Cancel</button>-->\r\n          <button type=\"submit\" class=\"btn-primary\" [disabled]=\"addClientDiscontinueForm.invalid\">Discontinue</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/add-discontinue-client-dialog/add-discontinue-client-dialog.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/add-discontinue-client-dialog/add-discontinue-client-dialog.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: AddDiscontinueClientDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDiscontinueClientDialogComponent", function() { return AddDiscontinueClientDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
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









var AddDiscontinueClientDialogComponent = /** @class */ (function (_super) {
    __extends(AddDiscontinueClientDialogComponent, _super);
    function AddDiscontinueClientDialogComponent(dialogRef, data, _fb, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        _this.clientList = [];
        _this.YesNo = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNo"];
        _this.ticketCounter = 0;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        return _this;
    }
    AddDiscontinueClientDialogComponent.prototype.ngOnInit = function () {
        this.createAddClientDiscontinueForm();
        this.getClientList();
    };
    AddDiscontinueClientDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    AddDiscontinueClientDialogComponent.prototype.createAddClientDiscontinueForm = function () {
        this.addClientDiscontinueForm = this._fb.group({
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            problem_our_side: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            discontinue_comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ticket: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0)
        });
    };
    AddDiscontinueClientDialogComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, { 'compare': { 'equal': { 'discontinue_stage': 0 } } }).subscribe(function (response) {
            _this.clientList = response;
        });
    };
    AddDiscontinueClientDialogComponent.prototype.getEntityTicketCounter = function (event) {
        var _this = this;
        if (event) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].DISCONTINUE_TICKET_COUNT + '/' + event.id, { 'counter': 1 }, { 'compare': { 'equal': { 'problem_our_side': 1 } } }).subscribe(function (response) {
                // console.log(response);
                _this.ticketCounter = response.payload.data;
            });
        }
    };
    AddDiscontinueClientDialogComponent.prototype.onSumbitDiscontinueEntity = function (form) {
        var _this = this;
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].DISCONTINUE_ENTITY_STORE, form.value).subscribe(function (response) {
            _this.dialogRef.close();
        });
    };
    AddDiscontinueClientDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-discontinue-client-dialog',
            template: __webpack_require__(/*! ./add-discontinue-client-dialog.component.html */ "./src/app/admin/client-module/discontinue-client/add-discontinue-client-dialog/add-discontinue-client-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"]])
    ], AddDiscontinueClientDialogComponent);
    return AddDiscontinueClientDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/client-discontinue-form/client-discontinue-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/client-discontinue-form/client-discontinue-form.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-discontinue-client-container\">\r\n\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>CLIENT</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onDicontinueClient()\">DISCONTINUE CLIENT</a></span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">CLIENT DISCONTINUE FORM | {{clientDiscontinue.trading_name}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <div class=\"\">\r\n    <form [formGroup]=\"addDiscontinueQuestionForm\" (submit)=\"onSumbitDiscontinueQuestion(addDiscontinueQuestionForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-right\">\r\n          <div class=\"panel-title\">\r\n            <span class=\"back-color\">Stage:</span> {{clientDiscontinue.clickedStage['name']}}\r\n            <span class=\"back-color ML-15\">Discontinued by:</span> {{clientDiscontinue?.discontinue_by?.userfullname}} |\r\n            {{clientDiscontinue?.discontinue_on | date:'dd-MM-yyyy'}}<span\r\n            class=\"back-color ML-15\"\r\n            *ngIf=\"clientDiscontinue?.modified_by?.userfullname !== null && clientDiscontinue?.modified_on !== null\">Modified by:</span>\r\n            {{clientDiscontinue?.modified_by?.userfullname}} | {{clientDiscontinue?.modified_on | date:'dd-MM-yyyy'}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\" *ngIf=\"getFilterFieldArray().controls.length\">\r\n          <!-- table start-->\r\n          <div class=\"table-container\">\r\n            <div class=\"table-block scrollable-grid\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                  <th width=\"3%\">S.No</th>\r\n                  <th width=\"47%\">Step.</th>\r\n                  <th width=\"20%\">is it done?</th>\r\n                  <th width=\"20%\">Notes</th>\r\n                  <th width=\"10%\">Question Type</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let groups of newDiscontinueQuestions; let i = index\">\r\n                <tr>\r\n                  <td colspan=\"5\" width=\"100%\"><span class=\"orange-color fw-500\">{{whoFillup[i]}}</span></td>\r\n                </tr>\r\n                <tr *ngFor=\"let filterGroup of getFilterFieldArray().controls; let j= index\">\r\n                  <td width=\"3%\" *ngIf=\"getFilterFieldArray().value[j]['who_fillup_name'] === whoFillup[i]\">\r\n                    {{getFilterFieldArray().value[j]['sr_no']}}\r\n                  </td>\r\n                  <td width=\"47%\" *ngIf=\"getFilterFieldArray().value[j]['who_fillup_name'] === whoFillup[i]\"><span\r\n                    class=\"MR-15\">{{getFilterFieldArray().value[j]['name']}}</span></td>\r\n                  <td width=\"20%\" *ngIf=\"getFilterFieldArray().value[j]['who_fillup_name'] === whoFillup[i]\">\r\n                    <mat-checkbox [checked]=\"getFilterFieldArray().value[j]['is_checked'] === 1\"\r\n                                  (change)=\"updateValues(j, 'is_checked', $event.checked)\"\r\n                                  [disabled]=\"getFilterFieldArray().value[j]['is_checked'] === 1\"></mat-checkbox>\r\n                    <span class=\"primary-color fw-500 ML-5\"\r\n                          *ngIf=\"getFilterFieldArray().value[j]['is_checked'] === 1\">{{getFilterFieldArray().value[j]['created_by']['userfullname']}}  |  {{getFilterFieldArray().value[i]['created_on'] | date: 'd-MM-yyyy'}}</span>\r\n                  </td>\r\n                  <td width=\"20%\" *ngIf=\"getFilterFieldArray().value[j]['who_fillup_name'] === whoFillup[i]\">\r\n                    <mat-form-field [floatLabel]=\"'never'\">\r\n                          <textarea matInput placeholder=\"Notes\" rows=\"2\"\r\n                                    (keyup)=\"updateValues(j, 'notes', $event.target.value)\">{{getFilterFieldArray().value[j]['notes']}}</textarea>\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td width=\"10%\" class=\"text-center\"\r\n                      *ngIf=\"getFilterFieldArray().value[j]['who_fillup_name'] === whoFillup[i]\"><span\r\n                    class=\"label-orange-bg-color\">{{getFilterFieldArray().value[j]['type'] === 0?'Individual':'Common'}}</span>\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- table end-->\r\n        </div>\r\n        <div class=\"col-md-12\" *ngIf=\"this.clientDiscontinueStage == 5\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"QC Comment\" row=\"2\" formControlName=\"discontinue_comment_by_qc\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addDiscontinueQuestionForm.get('discontinue_comment_by_qc'))\"\r\n                            [errMsg]=\"validationMsg.COMMENTS\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\" *ngIf=\"this.clientDiscontinueStage == 6\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Sales comment\" row=\"2\"\r\n                      formControlName=\"discontinue_comment_by_sales\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addDiscontinueQuestionForm.get('discontinue_comment_by_sales'))\"\r\n                            [errMsg]=\"validationMsg.COMMENTS\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 text-right MTB-20\">\r\n          <button type=\"button\" class=\"btn-default MR-5\" (click)=\"onDicontinueClient()\">Cancel</button>\r\n          <button type=\"submit\" class=\"btn-primary MR-5\" (click)=\"updateSaveButton(0)\">Save</button>\r\n          <button type=\"submit\" class=\"btn-success\" [disabled]=\"addDiscontinueQuestionForm.invalid\"\r\n                  (click)=\"updateSaveButton(1)\">Submit\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/client-discontinue-form/client-discontinue-form.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/client-discontinue-form/client-discontinue-form.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvZGlzY29udGludWUtY2xpZW50L2NsaWVudC1kaXNjb250aW51ZS1mb3JtL2NsaWVudC1kaXNjb250aW51ZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/client-discontinue-form/client-discontinue-form.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/client-discontinue-form/client-discontinue-form.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ClientDiscontinueFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDiscontinueFormComponent", function() { return ClientDiscontinueFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
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










var ClientDiscontinueFormComponent = /** @class */ (function (_super) {
    __extends(ClientDiscontinueFormComponent, _super);
    function ClientDiscontinueFormComponent(_router, _fb, _commonCrudService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this.clientDiscontinueQuestions = [];
        _this.newDiscontinueQuestions = [];
        _this.clientDiscontinueStage = 0;
        _this.clientDiscontinueQuestionDetail = [];
        _this.whoFillup = [];
        _this.isSave = 0;
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_8__["ValidationConstantMessage"]();
        return _this;
    }
    ClientDiscontinueFormComponent.prototype.ngOnInit = function () {
        this.clientDiscontinue = this._sharedService.getDiscontinueClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GLOBALDATAKEYS"].DISCONTINUE_CLIENT);
        this.clientDiscontinueStage = Number(this.clientDiscontinue.clickedStage['id']);
        this.initializationMethod();
        this.createAddDiscontinueQuestionForm();
        // console.log(this.clientDiscontinue);
    };
    ClientDiscontinueFormComponent.prototype.onDicontinueClient = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].DISCONTINUE_CLIENT]);
    };
    /**
     * Initialization Methods
     */
    ClientDiscontinueFormComponent.prototype.initializationMethod = function () {
        this.getDiscontinueQuestion();
    };
    ClientDiscontinueFormComponent.prototype.createAddDiscontinueQuestionForm = function () {
        if (this.clientDiscontinueStage === 5) {
            this.addDiscontinueQuestionForm = this._fb.group({
                question_json: this._fb.array([]),
                discontinue_comment_by_qc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.clientDiscontinue.discontinue_comment_by_qc !== '') ? this.clientDiscontinue.discontinue_comment_by_qc : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
            });
        }
        else if (this.clientDiscontinueStage === 6) {
            this.addDiscontinueQuestionForm = this._fb.group({
                question_json: this._fb.array([]),
                discontinue_comment_by_sales: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.clientDiscontinue.discontinue_comment_by_sales, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
            });
        }
        else {
            this.addDiscontinueQuestionForm = this._fb.group({
                question_json: this._fb.array([])
            });
        }
    };
    ClientDiscontinueFormComponent.prototype.getDiscontinueQuestion = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].DISCONTINUE_ENTITY_QUESTION + '/' + this.clientDiscontinue.id, { 'stage_id': this.clientDiscontinueStage }, {}).subscribe(function (response) {
            _this.handleDiscontinueQuestionResponse(response);
        });
    };
    /**
     * Get Filter Field Array
     */
    ClientDiscontinueFormComponent.prototype.getFilterFieldArray = function () {
        return this.addDiscontinueQuestionForm.get('question_json');
    };
    /**
     * On home page route
     */
    ClientDiscontinueFormComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Create Question Group Form
     */
    ClientDiscontinueFormComponent.prototype.createQuestionGroup = function (item) {
        return this._fb.group({
            discontinue_question_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['id'] : ''),
            who_fillup: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['who_fillup'] : ''),
            who_fillup_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['who_fillup_name'] : ''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['name'] : ''),
            is_checked: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? ((item['is_checked'] !== 0) ? item['is_checked'] : null) : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['notes'] : ''),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['type'] : ''),
            created_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['created_by'] : ''),
            created_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['created_on'] : ''),
            sr_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](item ? item['sr_no'] : '')
        });
    };
    /**
     * Update Values
     * @param index
     * @param key
     * @param value
     */
    ClientDiscontinueFormComponent.prototype.updateValues = function (index, key, value) {
        this.getFilterFieldArray().controls[index].get(key).setValue(value);
        // this.getFilterFieldArray().controls[index].get('is_checked').setValue(null);
        // console.log(index);
        // if (value) {
        //   this.getFilterFieldArray().controls[index].get('is_checked').setValue(1);
        // } else {
        //   this.getFilterFieldArray().controls[index].get('is_checked').setValue(null);
        // }
        // console.log(this.getFilterFieldArray().controls[index].get('is_checked'));
    };
    ClientDiscontinueFormComponent.prototype.updateSaveButton = function (value) {
        this.isSave = value;
    };
    ClientDiscontinueFormComponent.prototype.onSumbitDiscontinueQuestion = function (form) {
        var _this = this;
        form.value['_method'] = 'put';
        form.value['stage'] = this.clientDiscontinue.clickedStage['id'];
        if (this.isSave === 0) {
            form.value['is_draft'] = 1;
        }
        else {
            form.value['is_draft'] = 0;
        }
        form.value['entity_id'] = this.clientDiscontinue.entity_id;
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].DISCONTINUE_ENTITY_QUESTION_UPDATE, this.clientDiscontinue.id, form.value).subscribe(function (response) {
            if (_this.isSave === 1) {
                _this.onDicontinueClient();
            }
        });
    };
    /**
     * Handle New Client Review Question Listing
     * @param response
     */
    ClientDiscontinueFormComponent.prototype.handleDiscontinueQuestionResponse = function (response) {
        var _this = this;
        var dataValue = Object.values(response.payload.data);
        this.whoFillup = Object.keys(response.payload.data);
        // console.log(this.whoFillup);
        if (this.whoFillup.length) {
            var i_1 = 0;
            this.whoFillup.forEach(function (item) {
                _this.newDiscontinueQuestions[i_1] = [];
                _this.newDiscontinueQuestions[i_1] = dataValue[i_1];
                var j = 0;
                Object.keys(_this.newDiscontinueQuestions[i_1]).forEach(function (keyVal) {
                    j++;
                    _this.newDiscontinueQuestions[i_1][keyVal]['sr_no'] = j;
                    _this.getFilterFieldArray().push(_this.createQuestionGroup(_this.newDiscontinueQuestions[i_1][keyVal]));
                    if (_this.newDiscontinueQuestions[i_1][keyVal]['child'] !== []) {
                        var k_1 = 0;
                        Object.keys(_this.newDiscontinueQuestions[i_1][keyVal]['child']).forEach(function (keyItem) {
                            k_1++;
                            _this.newDiscontinueQuestions[i_1][keyVal]['child'][keyItem]['sr_no'] = j + '.' + k_1;
                            _this.getFilterFieldArray().push(_this.createQuestionGroup(_this.newDiscontinueQuestions[i_1][keyVal]['child'][keyItem]));
                        });
                    }
                });
                i_1++;
            });
        }
        //
        // console.log(this.newDiscontinueQuestions);
        // console.log(this.getFilterFieldArray().controls);
        // console.log(this.addDiscontinueQuestionForm);
    };
    ClientDiscontinueFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-discontinue-form',
            template: __webpack_require__(/*! ./client-discontinue-form.component.html */ "./src/app/admin/client-module/discontinue-client/client-discontinue-form/client-discontinue-form.component.html"),
            styles: [__webpack_require__(/*! ./client-discontinue-form.component.scss */ "./src/app/admin/client-module/discontinue-client/client-discontinue-form/client-discontinue-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_4__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], ClientDiscontinueFormComponent);
    return ClientDiscontinueFormComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_9__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/dicontinue-client-log-dialog/dicontinue-client-log-dialog.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/dicontinue-client-log-dialog/dicontinue-client-log-dialog.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Invoice log Dialog  -->\r\n<div class=\"modal large-modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Discontinue log</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <!-- Start Request Table -->\r\n    <div class=\"table-container dialog-table-container\">\r\n      <div class=\"table-block\">\r\n        <table class=\"PT-0\">\r\n          <thead>\r\n          <tr>\r\n            <th width=\"10%\">Sr. No</th>\r\n            <th width=\"45%\">Status</th>\r\n            <th width=\"25%\">Updated by</th>\r\n            <th width=\"25%\">Updated on</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let discontinuehistory of discontinueLog; let i=index\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{discontinuehistory?.values}}</td>\r\n            <td>{{discontinuehistory?.modified_by?.userfullname}}</td>\r\n            <td>{{discontinuehistory?.modified_on | date : 'dd-MM-yyyy'}}</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Request Table -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/dicontinue-client-log-dialog/dicontinue-client-log-dialog.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/dicontinue-client-log-dialog/dicontinue-client-log-dialog.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: DicontinueClientLogDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DicontinueClientLogDialogComponent", function() { return DicontinueClientLogDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
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






var DicontinueClientLogDialogComponent = /** @class */ (function (_super) {
    __extends(DicontinueClientLogDialogComponent, _super);
    function DicontinueClientLogDialogComponent(dialogRef, data, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._commonCrudService = _commonCrudService;
        // Angular Variables
        _this.discontinueLog = [];
        // pagination Data
        _this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY;
        _this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY[1];
        return _this;
    }
    DicontinueClientLogDialogComponent.prototype.ngOnInit = function () {
        this.discontinueLogData = (this.data.discontinueEntityData) ? this.data.discontinueEntityData : [];
        this.initializationMethod();
    };
    /**
     * Initialization Methods
     */
    DicontinueClientLogDialogComponent.prototype.initializationMethod = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].DISCONTINUE_ENTITY_HISTORY + '/' + this.discontinueLogData.id, {}, {})
            .subscribe(function (response) {
            _this.handleResponse(response);
        });
    };
    /**
     * getting advanced search params for conference room list api
     * @returns {{}}
     */
    DicontinueClientLogDialogComponent.prototype.getSearchParams = function () {
        var params = {};
        var filter = {};
        return params;
    };
    // Helper
    /**
     * get function for returning advance query params for conference room get api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{pageNumber: number; recordsPerPage: number}}
     */
    DicontinueClientLogDialogComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    DicontinueClientLogDialogComponent.prototype.handleResponse = function (response) {
        // console.log(response['payload']['data']);
        this.discontinueLog = response['payload']['data'];
        this.page = response['pager']['pageNumber'];
        this.pageIndex = this.page - 1;
        this.totalRecords = +(response['pager']['totalRecords']);
        this.sortBy = response['pager']['sortBy'];
        this.sortOrder = response['pager']['sortOrder'];
    };
    /**
     * activity dialog redirection
     */
    DicontinueClientLogDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    // Esc Event
    DicontinueClientLogDialogComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onClose();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], DicontinueClientLogDialogComponent.prototype, "onKeydownHandler", null);
    DicontinueClientLogDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dicontinue-client-log-dialog',
            template: __webpack_require__(/*! ./dicontinue-client-log-dialog.component.html */ "./src/app/admin/client-module/discontinue-client/dicontinue-client-log-dialog/dicontinue-client-log-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__["CommonCrudService"]])
    ], DicontinueClientLogDialogComponent);
    return DicontinueClientLogDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/discontinue-client.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/discontinue-client.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"discontinue-client-container\">\r\n\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span>CLIENT</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">DISCONTINUE CLIENT</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 PLR-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 inner-header-title\">\r\n              <button class=\"open-dialog-btn\" (click)=\"onDiscontinueClientDialog()\" *ngIf=\"tabData['add_edit']\">\r\n                <mat-icon class=\"material-icons\">add</mat-icon>\r\n                Discontinue Client\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-8 MT-15 status-type-list\">\r\n              <a class=\"primary-color MR-10\">\r\n                <mat-icon class=\"material-icons\">fiber_manual_record</mat-icon>\r\n                Not Completed</a>\r\n              <a class=\"light-orange-color\">\r\n                <mat-icon class=\"material-icons\">fiber_manual_record</mat-icon>\r\n                Completed</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onOpenFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li>\r\n              <a (click)=\"downloadExcel()\" *ngIf=\"tabData['export']\">\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <div class=\"grid-search\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <i\r\n          class=\"material-icons\">close</i></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientListParent\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Parent Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         (change)=\"onChangeParentEntity($event);\"\r\n                         formControlName=\"parent_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"entity_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"tamList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"TAM\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"tlList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"TL\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"team_lead\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"atlList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"ATL\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"assistant_team_lead\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"contract_signed_date_from\" [matDatepicker]=\"contactdatefrom\"\r\n                       (click)=\"contactdatefrom.open()\"\r\n                       placeholder=\"Contract date From\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"contactdatefrom\"></mat-datepicker-toggle>\r\n                <mat-datepicker #contactdatefrom></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"contract_signed_date_to\" [matDatepicker]=\"contactdateto\"\r\n                       (click)=\"contactdateto.open()\"\r\n                       placeholder=\"Contract date To\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"contactdateto\"></mat-datepicker-toggle>\r\n                <mat-datepicker #contactdateto></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"staffListData\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Discontinue By\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"discontinue_by\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"discontinued_on_from\" [matDatepicker]=\"discontinuedfrom\"\r\n                       (click)=\"discontinuedfrom.open()\"\r\n                       placeholder=\"Discontinued on From\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"discontinuedfrom\"></mat-datepicker-toggle>\r\n                <mat-datepicker #discontinuedfrom></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"discontinued_on_to\" [matDatepicker]=\"discontinuedto\"\r\n                       (click)=\"discontinuedto.open()\"\r\n                       placeholder=\"Discontinued on To\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"discontinuedto\"></mat-datepicker-toggle>\r\n                <mat-datepicker #discontinuedto></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Status\" formControlName=\"status\" [multiple]=\"true\">\r\n                  <mat-option *ngFor=\"let option of statusListData\" [value]=\"option?.id\">\r\n                    {{option?.status}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-20 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"parentTradingName.value\">\r\n          <span class=\"tag__title\">Parent Trading Name:</span>\r\n          <span>\r\n            <ng-select class=\"custom\" [items]=\"clientListParent\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"parent_id\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);onChangeParentEntity($event);\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"tradingName.value\">\r\n          <span class=\"tag__title\">Trading Name:</span>\r\n          <span>\r\n            <ng-select class=\"custom\" [items]=\"clientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"entity_id\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"technical_account_manager.value\">\r\n          <span class=\"tag__title\">TAM :</span>\r\n          <span>\r\n            <ng-select [items]=\"tamList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"TAM\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"technical_account_manager\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('technical_account_manager')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"team_lead.value\">\r\n          <span class=\"tag__title\">TL :</span>\r\n          <span>\r\n            <ng-select [items]=\"tlList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"TL\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"team_lead\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('team_lead')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"assistant_team_lead.value\">\r\n          <span class=\"tag__title\">ATL :</span>\r\n          <span>\r\n            <ng-select [items]=\"atlList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"ATL\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                       formControlName=\"assistant_team_lead\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('assistant_team_lead')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"contractsigneddateFrom.value\">\r\n          <span class=\"tag__title\">Contract Date From :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"contactdatefrom1\" formControlName=\"contract_signed_date_from\"\r\n                     placeholder=\"Contract date From\" #dateRef\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"contactdatefrom1\"></mat-datepicker-toggle>\r\n              <mat-datepicker #contactdatefrom1></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('contract_signed_date_from')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"contractsigneddateTo.value\">\r\n          <span class=\"tag__title\">Contract Date To :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"contactdateto1\" formControlName=\"contract_signed_date_to\"\r\n                     placeholder=\"Contract date To\" #dateRef\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"contactdateto1\"></mat-datepicker-toggle>\r\n              <mat-datepicker #contactdateto1></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('contract_signed_date_to')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"discontinuedBy.value\">\r\n          <span class=\"tag__title\">Discontinued By:</span>\r\n          <span>\r\n            <ng-select class=\"custom\" [items]=\"staffListData\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Discontinue By\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"discontinue_by\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('discontinue_by')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"discontinuedateonFrom.value\">\r\n          <span class=\"tag__title\">Discontinued On From :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"discontinuedfrom1\" formControlName=\"discontinued_on_from\"\r\n                     placeholder=\"Discontinued on From\" #dateRef\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"discontinuedfrom1\"></mat-datepicker-toggle>\r\n              <mat-datepicker #discontinuedfrom1></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('discontinued_on_from')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"discontinuedateonTo.value\">\r\n          <span class=\"tag__title\">Discontinued Date To :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"discontinuedto1\" formControlName=\"discontinued_on_to\"\r\n                     placeholder=\"Discontinued on To\" #dateRef\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"discontinuedto1\"></mat-datepicker-toggle>\r\n              <mat-datepicker #discontinuedto1></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('discontinued_on_to')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"statusField.value\">\r\n          <span class=\"tag__title\">Status:</span>\r\n          <span>\r\n            <mat-form-field>\r\n                 <mat-select placeholder=\"Status\" formControlName=\"status\" [multiple]=\"true\"\r\n                             (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                  <mat-option *ngFor=\"let option of statusListData\" [value]=\"option?.id\">\r\n                    {{option?.status}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('status')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\"\r\n             *ngIf=\"technical_account_manager.value\r\n          || team_lead.value || assistant_team_lead.value\r\n          || parentTradingName.value || tradingName.value || contractsigneddateFrom.value || contractsigneddateTo.value || discontinuedBy.value || discontinuedateonFrom.value || discontinuedateonTo.value || statusField.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n  </div>\r\n\r\n  <!-- Start Filter Tags -->\r\n\r\n  <!-- Start Table -->\r\n  <div class=\"expand-grid\">\r\n    <div class=\"expand-grid__thead\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"3%\">Sr. No</th>\r\n          <th width=\"6%\">Client Code\r\n          </th>\r\n          <th width=\"12%\">Parent Trading Name\r\n          </th>\r\n          <th width=\"12%\">Trading Name\r\n          </th>\r\n          <th width=\"8%\">TAM</th>\r\n          <th width=\"8%\">Discontinued on</th>\r\n          <th width=\"6%\">Monthly FF</th>\r\n          <th width=\"6%\">Total Revenue</th>\r\n          <th width=\"6%\">Last FY Revenue</th>\r\n          <th width=\"6%\">Last 3 Invoice Total</th>\r\n          <th width=\"6%\">Status</th>\r\n          <th width=\"9%\">Stage\r\n            <mat-icon\r\n              [matTooltip]=\"'If a client belongs to Full resource & Taxation not agreed then the sales tab will not be displayed.'\"\r\n              class=\"v-align-middle gray-color\">info\r\n            </mat-icon>\r\n          </th>\r\n          <th width=\"8%\">Operation Team Comment</th>\r\n          <th width=\"4%\">Action</th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n      <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n        <table *ngIf=\"discontinueEntityList.length\">\r\n          <tbody *ngFor=\"let discontinueEntity of discontinueEntityList; let i = index;\">\r\n          <tr [ngClass]=\"{'is-active-row' : trIndex === i}\"\r\n              class=\"hover-icons row-data\">\r\n            <td width=\"3%\" (click)=\"openRow(i)\">\r\n              <a class=\"open-inner-data\">\r\n                <mat-icon [ngClass]=\"{'is-open' : trIndex === i}\" class=\"material-icons\">keyboard_arrow_down\r\n                </mat-icon>\r\n              </a>\r\n              {{i+1}}\r\n            </td>\r\n            <td width=\"6%\">{{discontinueEntity?.code}}</td>\r\n            <td width=\"12%\">{{discontinueEntity?.parent_name}}</td>\r\n            <td width=\"12%\" class=\"word-break\">{{discontinueEntity?.trading_name}}</td>\r\n            <td width=\"8%\" class=\"word-break\">{{discontinueEntity?.technical_account_manager}}</td>\r\n            <td width=\"8%\">{{discontinueEntity?.discontinue_on | date: 'dd-MM-yyyy'}}</td>\r\n            <td width=\"6%\" *ngIf=\"discontinueEntity?.ff_amount!= null\">{{discontinueEntity?.ff_amount | currency:'\r\n              ':false}}\r\n            </td>\r\n            <td width=\"6%\" *ngIf=\"discontinueEntity?.ff_amount === null\">-</td>\r\n            <td width=\"6%\">{{discontinueEntity?.totalRevenue}}</td>\r\n            <td width=\"6%\">{{discontinueEntity?.lastfyRevanue}}</td>\r\n            <td width=\"6%\">{{discontinueEntity?.lastthreeinvoiceRevanue}}</td>\r\n            <td width=\"6%\" class=\"word-break\">{{discontinueEntity?.status?.status}}</td>\r\n            <td width=\"9%\" class=\"word-break\">\r\n              <a class=\"cursor-pointer\" *ngFor=\"let stage of discontinueEntity?.stage\"\r\n                 (click)=\"onStageQuestion(discontinueEntity, stage)\">\r\n                  <span class=\"label-primary-bg-color label_tag_block ML-5\"\r\n                        *ngIf=\"stage.status === '0'\">{{stage.name}}</span>\r\n                <span class=\"label-orange-bg-color label_tag_block ML-5\"\r\n                      (click)=\"onViewDiscontinueDetails(discontinueEntity, stage)\"\r\n                      *ngIf=\"stage.status === '1'\">{{stage.name}}</span></a>\r\n              <!--<span class=\"label-orange-bg-color ML-5\">Billing</span></a>-->\r\n            </td>\r\n            <td width=\"8%\">\r\n              <span (click)=\"onDiscontinueReasonDialog(discontinueEntity)\"\r\n                    *ngIf=\"discontinueEntity?.discontinue_comment!==''\">Reason</span>\r\n            </td>\r\n            <td width=\"4%\">\r\n              <ul>\r\n                <li>\r\n                  <mat-icon [matMenuTriggerFor]=\"menuaction\">more_vert</mat-icon>\r\n                  <mat-menu #menuaction=\"matMenu\" class=\"column-menu\">\r\n                    <button mat-menu-item class=\"menu-header\">\r\n                      <h3>Action</h3>\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"onDiscontinueCommentDialog(discontinueEntity)\">\r\n                      <mat-icon>textsms</mat-icon>\r\n                      Comments\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"onViewClient(discontinueEntity)\">\r\n                      <mat-icon>remove_red_eye</mat-icon>\r\n                      View Client\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"onOpenRestoreClientModal(discontinueEntity)\" *ngIf=\"isRestore\">\r\n                      <mat-icon>restore_from_trash</mat-icon>\r\n                      Restore Client\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"onDiscontinueClientLogDialog(discontinueEntity)\">\r\n                      <mat-icon>comment</mat-icon>\r\n                      Discontinue Log\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"onViewDiscontinueDetails(discontinueEntity, defaultStage)\">\r\n                      <mat-icon>remove_red_eye</mat-icon>\r\n                      View Discontinue Details\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"onExcelReport(discontinueEntity)\">\r\n                      <mat-icon>import_export</mat-icon>\r\n                      Excel Report\r\n                    </button>\r\n                  </mat-menu>\r\n                </li>\r\n              </ul>\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"trIndex === i\" class=\"inner-data\">\r\n            <div class=\"row PT-10\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"inner-data__view\">\r\n                  <div>Contract date</div>\r\n                  <div>{{discontinueEntity?.contract_signed_date | date : 'dd-MM-yyyy'}}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"inner-data__view\">\r\n                  <div>Discontinue by</div>\r\n                  <div>{{discontinueEntity?.discontinue_by?.userfullname}}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 MT-10\">\r\n                <div class=\"inner-data__view\">\r\n                  <div>Discontinue reason(QC)</div>\r\n                  <div> {{discontinueEntity?.discontinue_comment_by_qc}}</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-6 MT-10\">\r\n                <div class=\"inner-data__view\">\r\n                  <div>Discontinue reason(Sales)</div>\r\n                  <div> {{discontinueEntity?.discontinue_comment_by_sales}}</div>\r\n                </div>\r\n              </div>\r\n              <!--<div class=\"col-md-4\">-->\r\n              <!--<div class=\"inner-data__view\">-->\r\n              <!--<div>Date of sales call</div>-->\r\n              <!--<div>12-5-2017</div>-->\r\n              <!--</div>-->\r\n              <!--</div>-->\r\n            </div>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"expand-grid__tfoot\" *ngIf=\"discontinueEntityList.length\">\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Table -->\r\n  <div *ngIf=\"!discontinueEntityList.length\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/discontinue-client.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/discontinue-client.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".discontinue-client-container .status-type-list mat-icon, .discontinue-client-container .status-type-list i {\n  vertical-align: bottom;\n  font-size: 1.6rem; }\n\n.discontinue-client-container .expand-grid .hover-icons__action {\n  left: 5rem;\n  right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vY2xpZW50LW1vZHVsZS9kaXNjb250aW51ZS1jbGllbnQvQzpcXHdhbXA2NFxcd3d3XFxoa19mcm9udGVuZC9wcm9qZWN0c1xcYWRtaW5cXHNyY1xcYXBwXFxhZG1pblxcY2xpZW50LW1vZHVsZVxcZGlzY29udGludWUtY2xpZW50XFxkaXNjb250aW51ZS1jbGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxzQkFBc0I7RUFDdEIsaUJBQWlCLEVBQUE7O0FBSnZCO0VBU00sVUFBVTtFQUNWLFdBQVcsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvZGlzY29udGludWUtY2xpZW50L2Rpc2NvbnRpbnVlLWNsaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNjb250aW51ZS1jbGllbnQtY29udGFpbmVyIHtcclxuICAuc3RhdHVzLXR5cGUtbGlzdCB7XHJcbiAgICBtYXQtaWNvbiwgaSB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZXhwYW5kLWdyaWQge1xyXG4gICAgLmhvdmVyLWljb25zX19hY3Rpb24ge1xyXG4gICAgICBsZWZ0OiA1cmVtO1xyXG4gICAgICByaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/discontinue-client.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/discontinue-client.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DiscontinueClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscontinueClientComponent", function() { return DiscontinueClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_discontinue_client_dialog_add_discontinue_client_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-discontinue-client-dialog/add-discontinue-client-dialog.component */ "./src/app/admin/client-module/discontinue-client/add-discontinue-client-dialog/add-discontinue-client-dialog.component.ts");
/* harmony import */ var _discontinue_comments_dialog_discontinue_comments_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discontinue-comments-dialog/discontinue-comments-dialog.component */ "./src/app/admin/client-module/discontinue-client/discontinue-comments-dialog/discontinue-comments-dialog.component.ts");
/* harmony import */ var _discontinue_reason_dialog_discontinue_reason_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./discontinue-reason-dialog/discontinue-reason-dialog.component */ "./src/app/admin/client-module/discontinue-client/discontinue-reason-dialog/discontinue-reason-dialog.component.ts");
/* harmony import */ var _dicontinue_client_log_dialog_dicontinue_client_log_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dicontinue-client-log-dialog/dicontinue-client-log-dialog.component */ "./src/app/admin/client-module/discontinue-client/dicontinue-client-log-dialog/dicontinue-client-log-dialog.component.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var DiscontinueClientComponent = /** @class */ (function () {
    function DiscontinueClientComponent(_fb, _router, dialog, _commonCrudService, _sharedService, _sharedObjService) {
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this._sharedObjService = _sharedObjService;
        // Data Variable
        this.discontinueEntityList = [];
        this.clientList = [];
        this.clientListParent = [];
        this.filteredTradingClientList = [];
        this.staffListData = [];
        this.statusListData = [];
        this.tamList = [];
        this.tlList = [];
        this.atlList = [];
        this.DiscontinueCommentsDialog = [];
        this.discontinuedOnFrom = null;
        this.discontinuedOnTo = null;
        this.contractSignFrom = null;
        this.contractSignTo = null;
        this.defaultStage = { id: '7', name: 'Division head', status: '1' };
        this.tagList = [];
        this.equalJSON = {};
        this.findinSet = {};
        this.inJSON = {};
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilterView = false;
        this.isOpenHistoryDialog = false;
        this.isRestore = false;
        // State variables
        this.trIndex = -1;
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_17__["ADMINTABACCESS"].DISCONTINUE_CLIENT;
    }
    Object.defineProperty(DiscontinueClientComponent.prototype, "parentTradingName", {
        // get form control
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscontinueClientComponent.prototype, "tradingName", {
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscontinueClientComponent.prototype, "contractsigneddateTo", {
        get: function () {
            return this.filterForm.get('contract_signed_date_to');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscontinueClientComponent.prototype, "contractsigneddateFrom", {
        get: function () {
            return this.filterForm.get('contract_signed_date_from');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscontinueClientComponent.prototype, "discontinuedateonFrom", {
        get: function () {
            return this.filterForm.get('discontinued_on_from');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscontinueClientComponent.prototype, "discontinuedateonTo", {
        get: function () {
            return this.filterForm.get('discontinued_on_to');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscontinueClientComponent.prototype, "discontinuedBy", {
        get: function () {
            return this.filterForm.get('discontinue_by');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscontinueClientComponent.prototype, "statusField", {
        get: function () {
            return this.filterForm.get('status');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscontinueClientComponent.prototype, "technical_account_manager", {
        get: function () {
            return this.filterForm.get('technical_account_manager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscontinueClientComponent.prototype, "team_lead", {
        get: function () {
            return this.filterForm.get('team_lead');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscontinueClientComponent.prototype, "assistant_team_lead", {
        get: function () {
            return this.filterForm.get('assistant_team_lead');
        },
        enumerable: true,
        configurable: true
    });
    DiscontinueClientComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.isRestore = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'discontinue_restore_client', 1);
        this.initializationMethod();
    };
    /**
     * Initialization Methods
     */
    DiscontinueClientComponent.prototype.initializationMethod = function () {
        // this.getDiscontinueEntityList(1, 'id', 'desc');
        this.createAdvanceFilterForm();
        this.setAdvanceFilter(this.filterForm);
        this.entityList();
        this.getUserList();
        this.statusList();
    };
    DiscontinueClientComponent.prototype.entityList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, { 'compare': { 'notequal': { 'discontinue_stage': 0 } } }).subscribe(function (response) {
            _this.clientList = _this.filteredTradingClientList = response;
            _this.clientListParent = response.filter(function (item) { return item.is_parent === 1; });
        });
    };
    DiscontinueClientComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.staffListData = response;
            _this.tamList = response.filter(function (data) { return (data['designation_id']) ? data['designation_id']['id'] === 9 : 0; });
            _this.tlList = response.filter(function (data) { return (data['designation_id']) ? data['designation_id']['id'] === 60 : 0; });
            _this.atlList = response.filter(function (data) { return (data['designation_id']) ? data['designation_id']['id'] === 61 : 0; });
        });
    };
    DiscontinueClientComponent.prototype.statusList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].DROPDOWN_LIST, {
            'table': 'discontinue_status',
            'column': 'id,status',
        }, {}).subscribe(function (response) {
            _this.statusListData = response;
        });
    };
    DiscontinueClientComponent.prototype.getDiscontinueEntityList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].DISCONTINUE_ENTITY_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParams())
            .subscribe(function (response) {
            _this.handleResponse(response);
        });
    };
    /**
     * getting advanced search params for conference room list api
     * @returns {{}}
     */
    DiscontinueClientComponent.prototype.getSearchParams = function () {
        var params = {};
        var filter = {};
        if (this.discontinuedOnTo || this.contractSignTo) {
            filter['lessthanequal'] = {};
        }
        if (this.discontinuedOnFrom || this.contractSignFrom) {
            filter['greaterthanequal'] = {};
        }
        if (this.discontinuedOnFrom) {
            filter['greaterthanequal']['discontinue_on'] = moment__WEBPACK_IMPORTED_MODULE_14__(this.discontinuedOnFrom).format('YYYY-MM-DD');
        }
        if (this.discontinuedOnTo) {
            filter['lessthanequal']['discontinue_on'] = moment__WEBPACK_IMPORTED_MODULE_14__(this.discontinuedOnTo).format('YYYY-MM-DD');
        }
        if (this.contractSignFrom) {
            filter['greaterthanequal']['contract_signed_date'] = moment__WEBPACK_IMPORTED_MODULE_14__(this.contractSignFrom).format('YYYY-MM-DD');
        }
        if (this.contractSignTo) {
            filter['lessthanequal']['contract_signed_date'] = moment__WEBPACK_IMPORTED_MODULE_14__(this.contractSignTo).format('YYYY-MM-DD');
        }
        // check for the object whether it's empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.equalJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_15__["CommonFunctions"].isEmpty(filter)) {
            params['compare'] = filter;
        }
        if (Object.keys(this.inJSON).length) {
            params['in'] = this.inJSON;
        }
        return params;
    };
    // Helper
    /**
     * get function for returning advance query params for conference room get api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{pageNumber: number; recordsPerPage: number}}
     */
    DiscontinueClientComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
        var params = {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
        if (this.tamId) {
            params['technical_account_manager'] = this.tamId;
        }
        if (this.tlId) {
            params['team_lead'] = this.tlId;
        }
        if (this.atlId) {
            params['assistant_team_lead'] = this.atlId;
        }
        if (sortKey) {
            params['sortBy'] = sortKey;
        }
        if (sortOrder) {
            params['sortOrder'] = sortOrder;
        }
        return params;
    };
    DiscontinueClientComponent.prototype.handleResponse = function (response) {
        this.discontinueEntityList = response['payload']['data'];
        this.page = response['pager']['pageNumber'];
        this.pageIndex = this.page - 1;
        this.totalRecords = +(response['pager']['totalRecords']);
        this.sortBy = response['pager']['sortBy'];
        this.sortOrder = response['pager']['sortOrder'];
    };
    /**
     * Create Change InOut
     */
    DiscontinueClientComponent.prototype.createAdvanceFilterForm = function () {
        // this.status =
        this.filterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            contract_signed_date_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            contract_signed_date_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            discontinue_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            discontinued_on_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            discontinued_on_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([1, 2, 3]),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            team_lead: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            assistant_team_lead: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            contract_signed_date_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            contract_signed_date_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            discontinue_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            discontinued_on_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            discontinued_on_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([1, 2, 3]),
            technical_account_manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            team_lead: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            assistant_team_lead: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    // Events
    DiscontinueClientComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Toogle Filter
     */
    DiscontinueClientComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Close filter
     */
    DiscontinueClientComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    DiscontinueClientComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getDiscontinueEntityList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * On View Client Redirect
     * @param clientData
     */
    DiscontinueClientComponent.prototype.onViewClient = function (clientData) {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].CLIENT_BASIC, clientData.entity_id, { 'tab': 1 }).subscribe(function (response) {
            var data = response.payload.data;
            if (data) {
                _this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["GLOBALDATAKEYS"].CLIENT, data);
                _this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].VIEW_UPDATE_CLIENT]);
            }
        });
    };
    /**
     * On home page route
     */
    DiscontinueClientComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    DiscontinueClientComponent.prototype.onViewDiscontinueDetails = function (discontinueDetail, stageData) {
        discontinueDetail['clickedStage'] = stageData;
        this._sharedService.setDiscontinueClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["GLOBALDATAKEYS"].DISCONTINUE_CLIENT, null);
        this._sharedService.setDiscontinueClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["GLOBALDATAKEYS"].DISCONTINUE_CLIENT, discontinueDetail);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].VIEW_DISCONTINUE_CLIENT_DETAILS]);
    };
    /**
     *On generate excel report
     */
    DiscontinueClientComponent.prototype.onExcelReport = function (discontinueDetail) {
        var params = { 'exceldownload': 1 };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].DISCONTINUE_ENTITY_QUESTION_EXPORT + '/' + discontinueDetail.id, params, {}, 'Discontinue client question detail - ', 0).subscribe(function (response) {
        });
    };
    // onEditClientDiscontinueForm() {
    //   this._router.navigate(['/' + AdminRoutes.EDIT_DISCONTINUE_FORM]);
    // }
    /**
     *
     * @param discontinueDetail
     * @param stageData
     */
    DiscontinueClientComponent.prototype.onStageQuestion = function (discontinueDetail, stageData) {
        if (discontinueDetail && stageData) {
            discontinueDetail['clickedStage'] = stageData;
            this._sharedService.setDiscontinueClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["GLOBALDATAKEYS"].DISCONTINUE_CLIENT, null);
            this._sharedService.setDiscontinueClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["GLOBALDATAKEYS"].DISCONTINUE_CLIENT, discontinueDetail);
            this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].EDIT_DISCONTINUE_FORM]);
        }
    };
    DiscontinueClientComponent.prototype.onDiscontinueCommentDialog = function (discontinueComment) {
        var dialogRef = this.dialog.open(_discontinue_comments_dialog_discontinue_comments_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DiscontinueCommentsDialogComponent"], {
            panelClass: 'lg-dialog--container',
            data: {
                discontinueCommentData: (discontinueComment) ? discontinueComment : []
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    DiscontinueClientComponent.prototype.onDiscontinueReasonDialog = function (discontinueComment) {
        var _this = this;
        var dialogRef = this.dialog.open(_discontinue_reason_dialog_discontinue_reason_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DiscontinueReasonDialogComponent"], {
            panelClass: 'lg-dialog--container',
            data: {
                discontinueCommentData: (discontinueComment) ? discontinueComment : []
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getDiscontinueEntityList(1, 'id', 'desc');
        });
    };
    DiscontinueClientComponent.prototype.onDiscontinueClientLogDialog = function (discontinueDetail) {
        var dialogRef = this.dialog.open(_dicontinue_client_log_dialog_dicontinue_client_log_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DicontinueClientLogDialogComponent"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {
                discontinueEntityData: (discontinueDetail) ? discontinueDetail : []
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    DiscontinueClientComponent.prototype.onDiscontinueClientDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_discontinue_client_dialog_add_discontinue_client_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddDiscontinueClientDialogComponent"], {
            panelClass: 'add-form-dialog-container',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getDiscontinueEntityList(1, 'id', 'desc');
        });
    };
    /**
     * Open confirmation dialog  Restore client
     */
    DiscontinueClientComponent.prototype.onOpenRestoreClientModal = function (discontinueDetail) {
        var _this = this;
        var dialogConfigData = {
            data: {
                content: 'Are you sure you want to restore this client?'
            },
            panelClass: 'add-bookkeeping-dialog-panel-container'
        };
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationDialogComponent"], dialogConfigData);
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                var param = { 'entity_id': discontinueDetail.entity_id };
                _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].DISCONTINUE_ENTITY_RESTORE, discontinueDetail.id, param).subscribe(function (response) {
                    _this.getDiscontinueEntityList(1, 'id', 'desc');
                });
            }
        });
    };
    DiscontinueClientComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    DiscontinueClientComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.findinSet = {};
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
                    if (key === 'parent_id' || key === 'entity_id' || key === 'discontinue_by') {
                        // if (key === 'date') {
                        //   this.equalJSON[key] = moment(form.value[key]).format('YYYY-MM-DD');
                        // } else {
                        this.equalJSON[key] = form.value[key];
                        // }
                    }
                    if (key === 'status')
                        this.inJSON[key] = form.value[key].join(',');
                }
            }
            if (form.value['discontinued_on_from'] !== '' && form.value['discontinued_on_from']) {
                this.discontinuedOnFrom = form.value['discontinued_on_from'];
                delete form.value['discontinued_on_from'];
            }
            if (form.value['discontinued_on_to'] !== '' && form.value['discontinued_on_to']) {
                this.discontinuedOnTo = form.value['discontinued_on_to'];
                delete form.value['discontinued_on_from'];
            }
            if (form.value['contract_signed_date_from'] !== '' && form.value['contract_signed_date_from']) {
                this.contractSignFrom = form.value['contract_signed_date_from'];
                delete form.value['contract_signed_date_from'];
            }
            if (form.value['contract_signed_date_to'] !== '' && form.value['contract_signed_date_to']) {
                this.contractSignTo = form.value['contract_signed_date_to'];
                delete form.value['contract_signed_date_to'];
            }
            this.tamId = form.value['technical_account_manager'];
            this.tlId = form.value['team_lead'];
            this.atlId = form.value['assistant_team_lead'];
            this.isOpenFilterView = false;
            this.getDiscontinueEntityList(1, 'id', 'desc');
        }
    };
    DiscontinueClientComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.equalJSON = {};
        this.findinSet = {};
        this.discontinuedOnFrom = null;
        this.discontinuedOnTo = null;
        this.contractSignFrom = null;
        this.contractSignTo = null;
        this.isOpenFilterView = false;
        this.getDiscontinueEntityList(1, 'id', 'desc');
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    DiscontinueClientComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
        // console.log(event);
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
                'parent_id': (form.value['parent_id']) ? form.value['parent_id'] : null,
                'entity_id': (form.value['entity_id']) ? form.value['entity_id'] : null,
                'contract_signed_date_to': form.value['contract_signed_date_to'],
                'contract_signed_date_from': form.value['contract_signed_date_from'],
                'discontinue_by': (form.value['discontinue_by']) ? form.value['discontinue_by'] : null,
                'discontinued_on_to': form.value['discontinued_on_to'],
                'discontinued_on_from': form.value['discontinued_on_from'],
                'status': form.value['status'],
                'technical_account_manager': form.value['technical_account_manager'],
                'team_lead': form.value['team_lead'],
                'assistant_team_lead': form.value['assistant_team_lead']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Export to Excel
     */
    DiscontinueClientComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        if (this.atlId) {
            params['assistant_team_lead'] = this.atlId;
        }
        if (this.tlId) {
            params['team_lead'] = this.tlId;
        }
        if (this.tamId) {
            params['technical_account_manager'] = this.tamId;
        }
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].DISCONTINUE_ENTITY_LISTING, params, this.getSearchParams(), 'Discontinue client', 0).subscribe(function (response) {
        });
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    DiscontinueClientComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'technical_account_manager') {
            this.tamId = '';
        }
        else if (elementName === 'assistant_team_lead') {
            this.atlId = '';
        }
        else if (elementName === 'team_lead') {
            this.tlId = '';
        }
        else if (elementName === 'parent_id' || elementName === 'entity_id' || elementName === 'discontinue_by') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'contract_signed_date_to') {
            this.contractSignTo = null;
        }
        else if (elementName === 'contract_signed_date_from') {
            this.contractSignFrom = null;
        }
        else if (elementName === 'discontinued_on_from') {
            this.discontinuedOnFrom = null;
        }
        else if (elementName === 'discontinued_on_to') {
            this.discontinuedOnTo = null;
        }
        else if (elementName === 'status') {
            delete this.inJSON[JsonElementName];
            delete this.inJSON[elementName];
        }
        this.getDiscontinueEntityList(1, this.sortBy, this.sortOrder);
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    DiscontinueClientComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], DiscontinueClientComponent.prototype, "onKeydownHandler", null);
    DiscontinueClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discontinue-client',
            template: __webpack_require__(/*! ./discontinue-client.component.html */ "./src/app/admin/client-module/discontinue-client/discontinue-client.component.html"),
            styles: [__webpack_require__(/*! ./discontinue-client.component.scss */ "./src/app/admin/client-module/discontinue-client/discontinue-client.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_12__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_16__["SharedService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_13__["SharedObjService"]])
    ], DiscontinueClientComponent);
    return DiscontinueClientComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/discontinue-client.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/discontinue-client.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DiscontinueClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscontinueClientModule", function() { return DiscontinueClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _discontinue_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discontinue-client.component */ "./src/app/admin/client-module/discontinue-client/discontinue-client.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _add_discontinue_client_dialog_add_discontinue_client_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-discontinue-client-dialog/add-discontinue-client-dialog.component */ "./src/app/admin/client-module/discontinue-client/add-discontinue-client-dialog/add-discontinue-client-dialog.component.ts");
/* harmony import */ var _discontinue_comments_dialog_discontinue_comments_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./discontinue-comments-dialog/discontinue-comments-dialog.component */ "./src/app/admin/client-module/discontinue-client/discontinue-comments-dialog/discontinue-comments-dialog.component.ts");
/* harmony import */ var _dicontinue_client_log_dialog_dicontinue_client_log_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dicontinue-client-log-dialog/dicontinue-client-log-dialog.component */ "./src/app/admin/client-module/discontinue-client/dicontinue-client-log-dialog/dicontinue-client-log-dialog.component.ts");
/* harmony import */ var _client_discontinue_form_client_discontinue_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-discontinue-form/client-discontinue-form.component */ "./src/app/admin/client-module/discontinue-client/client-discontinue-form/client-discontinue-form.component.ts");
/* harmony import */ var _view_discontinue_client_details_view_discontinue_client_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-discontinue-client-details/view-discontinue-client-details.component */ "./src/app/admin/client-module/discontinue-client/view-discontinue-client-details/view-discontinue-client-details.component.ts");
/* harmony import */ var _discontinue_reason_dialog_discontinue_reason_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./discontinue-reason-dialog/discontinue-reason-dialog.component */ "./src/app/admin/client-module/discontinue-client/discontinue-reason-dialog/discontinue-reason-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _discontinue_client_component__WEBPACK_IMPORTED_MODULE_2__["DiscontinueClientComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]],
    },
    {
        path: 'client-discontinue-form',
        component: _client_discontinue_form_client_discontinue_form_component__WEBPACK_IMPORTED_MODULE_9__["ClientDiscontinueFormComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]],
    },
    {
        path: 'view-discontinue-client-details',
        component: _view_discontinue_client_details_view_discontinue_client_details_component__WEBPACK_IMPORTED_MODULE_10__["ViewDiscontinueClientDetailsComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]],
    },
];
var DiscontinueClientModule = /** @class */ (function () {
    function DiscontinueClientModule() {
    }
    DiscontinueClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_discontinue_client_component__WEBPACK_IMPORTED_MODULE_2__["DiscontinueClientComponent"], _add_discontinue_client_dialog_add_discontinue_client_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddDiscontinueClientDialogComponent"], _discontinue_comments_dialog_discontinue_comments_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DiscontinueCommentsDialogComponent"], _dicontinue_client_log_dialog_dicontinue_client_log_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DicontinueClientLogDialogComponent"], _client_discontinue_form_client_discontinue_form_component__WEBPACK_IMPORTED_MODULE_9__["ClientDiscontinueFormComponent"], _view_discontinue_client_details_view_discontinue_client_details_component__WEBPACK_IMPORTED_MODULE_10__["ViewDiscontinueClientDetailsComponent"], _discontinue_reason_dialog_discontinue_reason_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DiscontinueReasonDialogComponent"]],
            entryComponents: [_add_discontinue_client_dialog_add_discontinue_client_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddDiscontinueClientDialogComponent"], _discontinue_comments_dialog_discontinue_comments_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DiscontinueCommentsDialogComponent"], _dicontinue_client_log_dialog_dicontinue_client_log_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DicontinueClientLogDialogComponent"], _discontinue_reason_dialog_discontinue_reason_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DiscontinueReasonDialogComponent"]]
        })
    ], DiscontinueClientModule);
    return DiscontinueClientModule;
}());



/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/discontinue-comments-dialog/discontinue-comments-dialog.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/discontinue-comments-dialog/discontinue-comments-dialog.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Sub Client List dialog  -->\r\n<div class=\"modal large-modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Client Discontinue Comment</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n\r\n    <div>\r\n      <form [formGroup]=\"commentForm\" #commentChildForm=\"ngForm\" (submit)=\"addCommentForm(commentForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-9\">\r\n            <mat-form-field>\r\n              <textarea formControlName=\"comment\" matInput placeholder=\"Enter Comments\"></textarea>\r\n            </mat-form-field>\r\n            <div class=\"validation-msg\">\r\n              <app-validation *ngIf=\"isRequiredField(commentForm.get('comment'))\"\r\n                              [errMsg]=\"validationMsg.COMMENTS\"></app-validation>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 MT-10 text-left\">\r\n            <mat-checkbox [checked]=\"isSendEmailNotification\" (change)=\"onSelectItem($event.checked)\"\r\n                          formControlName=\"is_emailsent\">Send Email Notification\r\n            </mat-checkbox>\r\n            <button type=\"submit\" class=\"btn-primary on-right MT-5\" [disabled]=\"commentForm.invalid\">Submit</button>\r\n          </div>\r\n          <div class=\"col-md-4 MT-10\" *ngIf=\"isSendEmailNotification\">\r\n            <ng-select class=\"custom\" [items]=\"staffListData\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"To\"\r\n                       bindValue=\"email\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [(ngModel)]=\"selectedToEmail\"\r\n                       formControlName=\"to\">\r\n            </ng-select>\r\n            <div class=\"validation-msg\">\r\n              <app-validation *ngIf=\"isRequiredField(commentForm.get('to'))\"\r\n                              [errMsg]=\"validationMsg.TO_REQUIRED\"></app-validation>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-8 MT-10\" *ngIf=\"isSendEmailNotification\">\r\n            <ng-select class=\"custom\" [items]=\"staffListData\" [multiple]=\"true\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"CC\"\r\n                       bindValue=\"email\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       [(ngModel)]=\"selectedCCEmail\"\r\n                       formControlName=\"cc\">\r\n            </ng-select>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <ul class=\"view-history-container\">\r\n      <div>\r\n        <li *ngFor=\"let discontinueEntityComment of discontinueCommentList; let i = index;\">\r\n          <a>\r\n            <div class=\"profile-icon\">\r\n              <img src=\"assets/images/profile_placeholder.png\" width=\"28\" height=\"28\" alt=\"\"/>\r\n            </div>\r\n            <div class=\"history-details\">\r\n              <div>\r\n                <h3>Updated By <span>{{discontinueEntityComment?.created_by?.userfullname}}</span></h3>\r\n                <div class=\"history-time\">\r\n                  <i class=\"material-icons\">query_builder</i>\r\n                  <span>{{discontinueEntityComment?.created_on | date:'dd-MM-yyyy HH:mm:ss'}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <ul class=\"history-content\">\r\n                <li>\r\n                  <div><i class=\"material-icons\">done_all</i>\r\n                    <span class=\"fw-500\"> {{discontinueEntityComment?.comment}}</span>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div *ngIf=\"discontinueEntityComment?.to !== '' && discontinueEntityComment?.to !== null\"><i\r\n                    class=\"material-icons\">done_all</i>\r\n                    <span><strong> TO: </strong>{{discontinueEntityComment?.to}}</span><span\r\n                      *ngIf=\"discontinueEntityComment?.cc !== '' && discontinueEntityComment?.cc !== null\"> | <strong>CC: </strong>{{discontinueEntityComment?.cc}}</span>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </a>\r\n        </li>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n  <div class=\"modal__footer\">\r\n    <mat-paginator [length]=\"totalRecords\"\r\n                   [pageSize]=\"pageSize\"\r\n                   [pageIndex]=\"pageIndex\"\r\n                   [pageSizeOptions]=\"pageArray\"\r\n                   (page)=\"onPageChange($event)\" *ngIf=\"discontinueCommentList.length\">\r\n    </mat-paginator>\r\n  </div>\r\n</div>\r\n<!--  End Change Sub client list dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/discontinue-comments-dialog/discontinue-comments-dialog.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/discontinue-comments-dialog/discontinue-comments-dialog.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DiscontinueCommentsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscontinueCommentsDialogComponent", function() { return DiscontinueCommentsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
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









var DiscontinueCommentsDialogComponent = /** @class */ (function (_super) {
    __extends(DiscontinueCommentsDialogComponent, _super);
    function DiscontinueCommentsDialogComponent(dialogRef, data, _fb, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.discontinueCommentList = [];
        _this.staffListData = [];
        _this.isSendEmailNotification = false;
        // pagination Data
        _this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY;
        _this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY[1];
        return _this;
    }
    DiscontinueCommentsDialogComponent.prototype.ngOnInit = function () {
        this.discontinueCommentData = (this.data.discontinueCommentData) ? this.data.discontinueCommentData : [];
        this.getDiscontinueComment(1);
        this.createCommentForm();
        this.getUserList();
    };
    DiscontinueCommentsDialogComponent.prototype.getDiscontinueComment = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DISCONTINUE_ENTITY_COMMENT + '/' + this.discontinueCommentData.id, this.getQueryParams(pageNumber, 'id', 'desc'), {})
            .subscribe(function (response) {
            _this.handleResponse(response);
        });
    };
    DiscontinueCommentsDialogComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            // console.log(response);
            _this.staffListData = response;
        });
    };
    DiscontinueCommentsDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    // Helper
    /**
     * get function for returning advance query params for conference room get api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{pageNumber: number; recordsPerPage: number}}
     */
    DiscontinueCommentsDialogComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    DiscontinueCommentsDialogComponent.prototype.handleResponse = function (response) {
        this.discontinueCommentList = response['payload']['data'];
        this.page = response['pager']['pageNumber'];
        this.pageIndex = this.page - 1;
        this.totalRecords = +(response['pager']['totalRecords']);
        this.sortBy = response['pager']['sortBy'];
        this.sortOrder = response['pager']['sortOrder'];
    };
    /**
     * On Click of Send Email Notification
     * @param event
     */
    DiscontinueCommentsDialogComponent.prototype.onSelectItem = function (event) {
        if (event) {
            this.isSendEmailNotification = true;
            this.commentForm.get('to').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            this.commentForm.get('to').updateValueAndValidity();
        }
        else {
            this.isSendEmailNotification = false;
            this.commentForm.get('to').setValidators(null);
            this.commentForm.get('to').updateValueAndValidity();
        }
    };
    DiscontinueCommentsDialogComponent.prototype.addCommentForm = function (form) {
        var _this = this;
        form.value['discontinue_entity_id'] = this.discontinueCommentData.id;
        if (form.value['is_emailsent'] === 0 || form.value['is_emailsent'] === false) {
            form.value['to'] = '';
            form.value['is_emailsent'] = 0;
        }
        else {
            form.value['is_emailsent'] = 1;
        }
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DISCONTINUE_ENTITY_COMMENT_STORE, form.value)
            .subscribe(function (response) {
            _this.commentChildForm.resetForm();
            _this.createCommentForm();
            _this.isSendEmailNotification = false;
            _this.getDiscontinueComment(1);
        });
    };
    DiscontinueCommentsDialogComponent.prototype.createCommentForm = function () {
        this.commentForm = this._fb.group({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            cc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            is_emailsent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0)
        });
    };
    DiscontinueCommentsDialogComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getDiscontinueComment(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset Form
     */
    DiscontinueCommentsDialogComponent.prototype.resetForm = function () {
        this.createCommentForm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('commentChildForm'),
        __metadata("design:type", Object)
    ], DiscontinueCommentsDialogComponent.prototype, "commentChildForm", void 0);
    DiscontinueCommentsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discontinue-comments-dialog',
            template: __webpack_require__(/*! ./discontinue-comments-dialog.component.html */ "./src/app/admin/client-module/discontinue-client/discontinue-comments-dialog/discontinue-comments-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"]])
    ], DiscontinueCommentsDialogComponent);
    return DiscontinueCommentsDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/discontinue-reason-dialog/discontinue-reason-dialog.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/discontinue-reason-dialog/discontinue-reason-dialog.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Sub Client List dialog  -->\r\n<div class=\"modal large-modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Client Discontinue Reason</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <div>\r\n      <form [formGroup]=\"commentForm\" #commentChildForm=\"ngForm\" (submit)=\"addReason(commentForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-9\">\r\n            <mat-form-field>\r\n              <textarea formControlName=\"discontinue_comment\" matInput placeholder=\"Enter Comments\"></textarea>\r\n            </mat-form-field>\r\n            <div class=\"validation-msg\">\r\n              <app-validation *ngIf=\"isRequiredField(commentForm.get('discontinue_comment'))\"\r\n                              [errMsg]=\"validationMsg.COMMENTS\"></app-validation>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 MT-10 text-left\">\r\n            <button type=\"submit\" class=\"btn-primary on-right MT-5\" [disabled]=\"commentForm.invalid\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--  End Change Sub client list dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/discontinue-reason-dialog/discontinue-reason-dialog.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/discontinue-reason-dialog/discontinue-reason-dialog.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: DiscontinueReasonDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscontinueReasonDialogComponent", function() { return DiscontinueReasonDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
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








var DiscontinueReasonDialogComponent = /** @class */ (function (_super) {
    __extends(DiscontinueReasonDialogComponent, _super);
    function DiscontinueReasonDialogComponent(dialogRef, data, _fb, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        return _this;
    }
    DiscontinueReasonDialogComponent.prototype.ngOnInit = function () {
        this.discontinueCommentData = (this.data.discontinueCommentData) ? this.data.discontinueCommentData : [];
        this.createCommentForm();
    };
    DiscontinueReasonDialogComponent.prototype.addReason = function (form) {
        var _this = this;
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].DISCONTINUE_ENTITY_REASON_UPDATE, this.discontinueCommentData.id, form.value)
            .subscribe(function (response) {
            _this.dialogRef.close();
        });
    };
    DiscontinueReasonDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    DiscontinueReasonDialogComponent.prototype.createCommentForm = function () {
        this.commentForm = this._fb.group({
            discontinue_comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.discontinueCommentData.discontinue_comment, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    /**
     * Reset Form
     */
    DiscontinueReasonDialogComponent.prototype.resetForm = function () {
        this.createCommentForm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('commentChildForm'),
        __metadata("design:type", Object)
    ], DiscontinueReasonDialogComponent.prototype, "commentChildForm", void 0);
    DiscontinueReasonDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discontinue-reason-dialog',
            template: __webpack_require__(/*! ./discontinue-reason-dialog.component.html */ "./src/app/admin/client-module/discontinue-client/discontinue-reason-dialog/discontinue-reason-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"]])
    ], DiscontinueReasonDialogComponent);
    return DiscontinueReasonDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/view-discontinue-client-details/view-discontinue-client-details.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/view-discontinue-client-details/view-discontinue-client-details.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view-discontinue-client-container\">\r\n\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>CLIENT</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onDicontinueClient()\">DISCONTINUE CLIENT</a></span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">VIEW DISCONTINUE FORM | </span>\r\n          <span *ngIf=\"clientDiscontinue?.parent_id > 0\"> Parent Client : {{clientDiscontinue?.parent_name}} | </span>\r\n          <span>{{clientDiscontinue.trading_name}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <div class=\"\">\r\n    <form [formGroup]=\"addDiscontinueQuestionForm\" (submit)=\"onSumbitDiscontinueQuestion(addDiscontinueQuestionForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-right\">\r\n          <div class=\"panel-title\">\r\n            <span class=\"back-color ML-15\">Discontinued by:</span> {{clientDiscontinue?.discontinue_by?.userfullname}} |\r\n            {{clientDiscontinue?.discontinue_on | date:'dd-MM-yyyy'}}<span\r\n            class=\"back-color ML-15\"\r\n            *ngIf=\"clientDiscontinue?.modified_by?.userfullname !== null && clientDiscontinue?.modified_on !== null\">Modified by:</span>\r\n            {{clientDiscontinue?.modified_by?.userfullname}} | {{clientDiscontinue?.modified_on | date:'dd-MM-yyyy'}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n          <!-- table start-->\r\n          <div class=\"table-container\">\r\n            <div class=\"table-block scrollable-grid\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                  <th width=\"3%\">S.No</th>\r\n                  <th width=\"47%\">Step.</th>\r\n                  <th width=\"20%\">is it done?</th>\r\n                  <th width=\"20%\">Notes</th>\r\n                  <th width=\"10%\">Question Type</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let groups of newDiscontinueQuestions; let i = index\">\r\n                <tr>\r\n                  <td colspan=\"5\" width=\"100%\"><span class=\"orange-color fw-500\">{{whoFillup[i]}}</span></td>\r\n                </tr>\r\n                <tr *ngFor=\"let filterGroup of getFilterFieldArray().controls; let j= index\">\r\n                  <td width=\"3%\" *ngIf=\"getFilterFieldArray().value[j]['who_fillup_name'] === whoFillup[i]\">\r\n                    {{getFilterFieldArray().value[j]['sr_no']}}\r\n                  </td>\r\n                  <td width=\"47%\" *ngIf=\"getFilterFieldArray().value[j]['who_fillup_name'] === whoFillup[i]\"><span\r\n                    class=\"MR-15\">{{getFilterFieldArray().value[j]['name']}}</span></td>\r\n                  <td width=\"20%\" *ngIf=\"getFilterFieldArray().value[j]['who_fillup_name'] === whoFillup[i]\">\r\n                    <mat-checkbox [checked]=\"getFilterFieldArray().value[j]['is_checked'] === 1\"\r\n                                  (change)=\"updateValues(j, 'is_checked', $event.checked)\" disabled></mat-checkbox>\r\n                    <span class=\"primary-color fw-500 ML-5\"\r\n                          *ngIf=\"getFilterFieldArray().value[j]['is_checked'] === 1\">{{getFilterFieldArray().value[j]['created_by']['userfullname']}}  |  {{getFilterFieldArray().value[j]['created_on'] | date: 'd-MM-yyyy'}}</span>\r\n                  </td>\r\n                  <td width=\"20%\" *ngIf=\"getFilterFieldArray().value[j]['who_fillup_name'] === whoFillup[i]\">\r\n                    {{getFilterFieldArray().value[j]['notes']}}\r\n                  </td>\r\n                  <td width=\"10%\" class=\"text-center\"\r\n                      *ngIf=\"getFilterFieldArray().value[j]['who_fillup_name'] === whoFillup[i]\"><span\r\n                    class=\"label-orange-bg-color\">{{getFilterFieldArray().value[j]['type'] === 0?'Individual':'Common'}}</span>\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- table end-->\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-20 MB-10\"\r\n             *ngIf=\"this.clientDiscontinueStage === 5 || this.clientDiscontinueStage === 7\">\r\n          <label class=\"fw-500\">QC Comment : </label> <span>{{clientDiscontinue?.discontinue_comment_by_qc}}</span>\r\n        </div>\r\n        <div class=\"col-md-12 MB-20\" *ngIf=\"this.clientDiscontinueStage === 6 || this.clientDiscontinueStage === 7\">\r\n          <div *ngFor=\"let stageTxt of clientDiscontinue?.stage\">\r\n            <div *ngIf=\"stageTxt?.id === '6'\">\r\n              <label class=\"fw-500\">Sales Comment : </label>\r\n              <span>{{clientDiscontinue?.discontinue_comment_by_sales}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/view-discontinue-client-details/view-discontinue-client-details.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/view-discontinue-client-details/view-discontinue-client-details.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvZGlzY29udGludWUtY2xpZW50L3ZpZXctZGlzY29udGludWUtY2xpZW50LWRldGFpbHMvdmlldy1kaXNjb250aW51ZS1jbGllbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/client-module/discontinue-client/view-discontinue-client-details/view-discontinue-client-details.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/discontinue-client/view-discontinue-client-details/view-discontinue-client-details.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: ViewDiscontinueClientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDiscontinueClientDetailsComponent", function() { return ViewDiscontinueClientDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
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










var ViewDiscontinueClientDetailsComponent = /** @class */ (function (_super) {
    __extends(ViewDiscontinueClientDetailsComponent, _super);
    function ViewDiscontinueClientDetailsComponent(_router, _fb, _commonCrudService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this.clientDiscontinueQuestions = [];
        _this.newDiscontinueQuestions = [];
        _this.whoFillup = [];
        _this.clientDiscontinueStage = 0;
        _this.clientDiscontinueQuestionDetail = [];
        _this.isSave = 0;
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_8__["ValidationConstantMessage"]();
        return _this;
    }
    ViewDiscontinueClientDetailsComponent.prototype.ngOnInit = function () {
        this.clientDiscontinue = this._sharedService.getDiscontinueClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GLOBALDATAKEYS"].DISCONTINUE_CLIENT);
        // console.log(this.clientDiscontinue);
        this.clientDiscontinueStage = Number(this.clientDiscontinue.clickedStage['id']);
        this.initializationMethod();
        this.createAddDiscontinueQuestionForm();
    };
    ViewDiscontinueClientDetailsComponent.prototype.onDicontinueClient = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].DISCONTINUE_CLIENT]);
    };
    /**
     * On home page route
     */
    ViewDiscontinueClientDetailsComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Initialization Methods
     */
    ViewDiscontinueClientDetailsComponent.prototype.initializationMethod = function () {
        this.getDiscontinueQuestion();
    };
    ViewDiscontinueClientDetailsComponent.prototype.createAddDiscontinueQuestionForm = function () {
        if (this.clientDiscontinueStage === 5) {
            this.addDiscontinueQuestionForm = this._fb.group({
                question_json: this._fb.array([]),
                discontinue_comment_by_qc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.clientDiscontinue.discontinue_comment_by_qc)
            });
        }
        else if (this.clientDiscontinueStage === 6) {
            this.addDiscontinueQuestionForm = this._fb.group({
                question_json: this._fb.array([]),
                discontinue_comment_by_sales: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.clientDiscontinue.discontinue_comment_by_sales)
            });
        }
        else if (this.clientDiscontinueStage === 7) {
            this.addDiscontinueQuestionForm = this._fb.group({
                question_json: this._fb.array([]),
                discontinue_comment_by_qc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.clientDiscontinue.discontinue_comment_by_qc),
                discontinue_comment_by_sales: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.clientDiscontinue.discontinue_comment_by_sales)
            });
        }
        else {
            this.addDiscontinueQuestionForm = this._fb.group({
                question_json: this._fb.array([])
            });
        }
    };
    ViewDiscontinueClientDetailsComponent.prototype.getDiscontinueQuestion = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].DISCONTINUE_ENTITY_QUESTION + '/' + this.clientDiscontinue.id, { 'stage_id': this.clientDiscontinueStage }, {}).subscribe(function (response) {
            _this.handleDiscontinueQuestionResponse(response);
        });
    };
    /**
     * Get Filter Field Array
     */
    ViewDiscontinueClientDetailsComponent.prototype.getFilterFieldArray = function () {
        return this.addDiscontinueQuestionForm.get('question_json');
    };
    /**
     * Create Question Group Form
     */
    ViewDiscontinueClientDetailsComponent.prototype.createQuestionGroup = function (item) {
        return this._fb.group({
            discontinue_question_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['id'] : ''),
            who_fillup: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['who_fillup'] : ''),
            who_fillup_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['who_fillup_name'] : ''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['name'] : ''),
            is_checked: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['is_checked'] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['notes'] : ''),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['type'] : ''),
            created_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['created_by'] : ''),
            created_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['created_on'] : ''),
            sr_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['sr_no'] : '')
        });
    };
    /**
     * Update Values
     * @param index
     * @param key
     * @param value
     */
    ViewDiscontinueClientDetailsComponent.prototype.updateValues = function (index, key, value) {
        this.getFilterFieldArray().controls[index].get(key).setValue(value);
    };
    ViewDiscontinueClientDetailsComponent.prototype.updateSaveButton = function (value) {
        this.isSave = value;
    };
    ViewDiscontinueClientDetailsComponent.prototype.onSumbitDiscontinueQuestion = function (form) {
        var _this = this;
        form.value['_method'] = 'put';
        form.value['stage'] = this.clientDiscontinue.clickedStage['id'];
        if (this.isSave === 0) {
            form.value['is_draft'] = 1;
        }
        else {
            form.value['is_draft'] = 0;
        }
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].DISCONTINUE_ENTITY_QUESTION_UPDATE, this.clientDiscontinue.id, form.value).subscribe(function (response) {
            if (_this.isSave === 1) {
                _this.onDicontinueClient();
            }
        });
    };
    /**
     * Handle New Client Review Question Listing
     * @param response
     */
    /**
     * Handle New Client Review Question Listing
     * @param response
     */
    ViewDiscontinueClientDetailsComponent.prototype.handleDiscontinueQuestionResponse = function (response) {
        var _this = this;
        var dataValue = Object.values(response.payload.data);
        this.whoFillup = Object.keys(response.payload.data);
        // console.log(this.whoFillup);
        if (this.whoFillup.length) {
            var i_1 = 0;
            this.whoFillup.forEach(function (item) {
                _this.newDiscontinueQuestions[i_1] = [];
                _this.newDiscontinueQuestions[i_1] = dataValue[i_1];
                var j = 0;
                Object.keys(_this.newDiscontinueQuestions[i_1]).forEach(function (keyVal) {
                    j++;
                    _this.newDiscontinueQuestions[i_1][keyVal]['sr_no'] = j;
                    _this.getFilterFieldArray().push(_this.createQuestionGroup(_this.newDiscontinueQuestions[i_1][keyVal]));
                    if (_this.newDiscontinueQuestions[i_1][keyVal]['child'] !== []) {
                        var k_1 = 0;
                        Object.keys(_this.newDiscontinueQuestions[i_1][keyVal]['child']).forEach(function (keyItem) {
                            k_1++;
                            _this.newDiscontinueQuestions[i_1][keyVal]['child'][keyItem]['sr_no'] = j + '.' + k_1;
                            _this.getFilterFieldArray().push(_this.createQuestionGroup(_this.newDiscontinueQuestions[i_1][keyVal]['child'][keyItem]));
                        });
                    }
                });
                i_1++;
            });
        }
        // console.log(this.getFilterFieldArray().controls);
    };
    ViewDiscontinueClientDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-discontinue-client-details',
            template: __webpack_require__(/*! ./view-discontinue-client-details.component.html */ "./src/app/admin/client-module/discontinue-client/view-discontinue-client-details/view-discontinue-client-details.component.html"),
            styles: [__webpack_require__(/*! ./view-discontinue-client-details.component.scss */ "./src/app/admin/client-module/discontinue-client/view-discontinue-client-details/view-discontinue-client-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], ViewDiscontinueClientDetailsComponent);
    return ViewDiscontinueClientDetailsComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=discontinue-client-discontinue-client-module.js.map