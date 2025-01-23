(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contact-contact-module~contact-information-contact-information-module"],{

/***/ "./src/app/admin/client-module/contact-information/contact/add-contact/add-contact.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/add-contact/add-contact.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>CLIENT</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">\r\n            <a (click)=\"onContact()\">CONTACT INFORMATION</a>\r\n          </span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">{{contact ? 'UPDATE CONTACT | ' : 'ADD CONTACT'}} {{contact?.trading_name}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n\r\n  <!--Start add contact form-->\r\n  <div>\r\n    <span class=\"panel-title orange-color\">{{contact ? 'Update' : 'Add'}} Contact</span>\r\n    <form [formGroup]=\"addContactForm\" #addEditContactForm=\"ngForm\" (submit)=\"onAddContact(addContactForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <ng-select [items]=\"parentClientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Parent Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"onChangeParentEntity($event)\"\r\n                     formControlName=\"parent_id\">\r\n          </ng-select>\r\n\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addContactForm.get('parent_id'))\"\r\n                            [errMsg]=\"validationMsg.TRADING_NAME\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <ng-select [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"entity_id\">\r\n          </ng-select>\r\n\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addContactForm.get('entity_id'))\"\r\n                            [errMsg]=\"validationMsg.TRADING_NAME\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select [multiple]=\"true\" placeholder=\"Service\" formControlName=\"service_id\" required>\r\n              <mat-option *ngFor=\"let team of teamList\" [value]=\"team?.id\">{{team?.service_name}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addContactForm.get('service_id'))\"\r\n                            [errMsg]=\"validationMsg.SERVICE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Position\" formControlName=\"contact_position_id\" required>\r\n              <mat-option *ngFor=\"let contactPositionData of contactPosition\" [value]=\"contactPositionData.key\">\r\n                {{contactPositionData.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addContactForm.get('contact_position_id'))\"\r\n                            [errMsg]=\"validationMsg.POSITION\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\" *ngIf=\"addContactForm.get('contact_position_id').value && addContactForm.get('contact_position_id').value === 1\">\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" placeholder=\"Director Number\" formControlName=\"director_number\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"First Name\" formControlName=\"first_name\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addContactForm.get('first_name'))\"\r\n                            [errMsg]=\"validationMsg.FIRST_NAME\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addContactForm.get('first_name'))\"\r\n                            [errMsg]=\"validationMsg.FIRST_NAME_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Contact person\" formControlName=\"contact_person\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addContactForm.get('contact_person'))\"\r\n                            [errMsg]=\"validationMsg.PERSON_NAME_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addContactForm.get('contact_person'))\"\r\n                            [errMsg]=\"validationMsg.PERSON_NAME_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Is display in BK checklist\" formControlName=\"is_display_bk_checklist\" required (selectionChange)=\"updateFromEmailValidation($event.value)\">\r\n              <mat-option *ngFor=\"let bkChecklistData of bkChecklist.slice(1)\" [value]=\"bkChecklistData.key\">\r\n                {{bkChecklistData.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addContactForm.get('is_display_bk_checklist'))\"\r\n                            [errMsg]=\"validationMsg.DISPLAY_INBK_CHECKLIST\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Send Newsletter\" formControlName=\"send_newsletter\" required>\r\n              <mat-option *ngFor=\"let bkChecklistData of bkChecklist.slice(1)\" [value]=\"bkChecklistData.key\">\r\n                {{bkChecklistData.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addContactForm.get('send_newsletter'))\"\r\n                            [errMsg]=\"validationMsg.SEND_NEWSLETTER\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Email Address\" formControlName=\"to\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <!-- <div *ngIf=\"!addContactForm.controls['to'].value\"> -->\r\n            <app-validation *ngIf=\"isRequiredField(addContactForm.get('to'))\"\r\n                            [errMsg]=\"validationMsg.TO_REQUIRED\"></app-validation>\r\n            <!-- </div> -->\r\n            <app-validation *ngIf=\"isValidField(addContactForm.get('to'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_ADDRESS_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"CC Email Address\" formControlName=\"cc\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addContactForm.get('cc'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_ADDRESS_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"BCC Email Address\" formControlName=\"bcc\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addContactForm.get('bcc'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_ADDRESS_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Other Email Address\" formControlName=\"other_email\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addContactForm.get('other_email'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_ADDRESS_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"mobile_no\" placeholder=\"Mobile\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addContactForm.get('mobile_no'))\"\r\n                            [errMsg]=\"validationMsg.MOBILE_NUMBER_VALID\"></app-validation>\r\n            <app-validation *ngIf=\"isValidLength(addContactForm.get('mobile_no'))\"\r\n                            [errMsg]=\"validationMsg.MOBILE_NUMBER_VALID_LENGTH\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"office_no\" placeholder=\"Office\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addContactForm.get('office_no'))\"\r\n                            [errMsg]=\"validationMsg.OFFICE_NUMBER_VALID\"></app-validation>\r\n            <app-validation *ngIf=\"isValidLength(addContactForm.get('office_no'))\"\r\n                            [errMsg]=\"validationMsg.OFFICE_NUMBER_VALID_LENGTH\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <input matInput formControlName=\"fax_no\" type=\"text\" placeholder=\"Fax\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addContactForm.get('fax_no'))\"\r\n                            [errMsg]=\"validationMsg.FAX_NUMBER_VALID\"></app-validation>\r\n            <app-validation *ngIf=\"isValidLength(addContactForm.get('fax_no'))\"\r\n                            [errMsg]=\"validationMsg.FAX_NUMBER_VALID_LENGTH\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Is Feedback Contact?\" formControlName=\"is_feedback_contact\"\r\n                        (selectionChange)=\"updateFeedbackEmailValidation($event.value)\" required>\r\n              <mat-option *ngFor=\"let bkChecklistData of bkChecklist.slice(1)\" [value]=\"bkChecklistData.key\">\r\n                {{bkChecklistData.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addContactForm.get('is_feedback_contact'))\"\r\n                            [errMsg]=\"validationMsg.IS_FEEDBACK_CONTACT_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-5\" *ngIf=\"addContactForm.get('is_feedback_contact').value === 1\">\r\n          <mat-form-field>\r\n            <input matInput formControlName=\"feedback_email\" type=\"text\" placeholder=\"Feedback Contact Email\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addContactForm.get('feedback_email'))\"\r\n                            [errMsg]=\"validationMsg.FEEDBACK_CONTACT_EMAIL_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addContactForm.get('feedback_email'))\"\r\n                            [errMsg]=\"validationMsg.FEEDBACK_CONTACT_EMAIL_VAILD\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 MT-5\" *ngIf=\"addContactForm.get('is_display_bk_checklist').value === 1\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Group From Name\" formControlName=\"from_name\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addContactForm.get('from_name'))\"\r\n                            [errMsg]=\"validationMsg.FROM_NAME_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addContactForm.get('from_name'))\"\r\n                            [errMsg]=\"validationMsg.FROM_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 MT-5\" *ngIf=\"addContactForm.get('is_display_bk_checklist').value === 1\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Group From Email\" formControlName=\"from_email\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addContactForm.get('from_email'))\"\r\n                            [errMsg]=\"validationMsg.FROM_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addContactForm.get('from_email'))\"\r\n                            [errMsg]=\"validationMsg.FROM_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <!--<div class=\"col-md-4 MT-5\">-->\r\n          <!--<mat-form-field>-->\r\n            <!--<mat-select placeholder=\"Is Client Login Access?\" formControlName=\"is_login\" required>-->\r\n              <!--<mat-option *ngFor=\"let bkChecklistData of bkChecklist.slice(1)\" [value]=\"bkChecklistData.key\">-->\r\n                <!--{{bkChecklistData.label}}-->\r\n              <!--</mat-option>-->\r\n            <!--</mat-select>-->\r\n          <!--</mat-form-field>-->\r\n          <!--<div class=\"validation-msg\">-->\r\n            <!--<app-validation *ngIf=\"isRequiredField(addContactForm.get('is_login'))\"-->\r\n                            <!--[errMsg]=\"validationMsg.IS_LOGIN_REQUIRED\"></app-validation>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n        <div class=\"col-md-12 MB-20\">\r\n          <div class=\"row MT-30\">\r\n            <div class=\"col-md-6 PL-0\">\r\n              <!--For edit contact only-->\r\n              <button [disabled]=\"addContactForm.invalid\" type=\"submit\" (click)=\"AddNewOptionsRedirect()\"\r\n                      class=\"btn-orange btn-bordered\">{{contact ? 'Update' : 'Add'}} & Add New\r\n              </button>\r\n              <!--For edit contact only over-->\r\n            </div>\r\n            <div class=\"col-md-6 text-right PR-0\">\r\n              <button (click)=\"onContact()\" type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n              <button (click)=\"ngOnInit()\" type=\"button\" class=\"btn-default MR-5\">Clear</button>\r\n              <button [disabled]=\"addContactForm.invalid\" type=\"submit\" class=\"btn-primary\">{{contact ? 'Update' :\r\n                'Add'}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <div *ngIf=\"contact\">\r\n      <form [formGroup]=\"addContactRemarkForm\" #addEditContactRemarksForm=\"ngForm\"\r\n            (submit)=\"onAddContactRemark(addContactRemarkForm)\">\r\n\r\n        <div class=\"col-md-12 PLR-0 section-sepration\">\r\n          <span class=\"panel-title\">Remarks</span>\r\n        </div>\r\n\r\n        <!--For edit contact only-->\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8 MT-5\">\r\n            <mat-form-field>\r\n              <textarea matInput placeholder=\"Remarks\" formControlName=\"notes\"></textarea>\r\n            </mat-form-field>\r\n            <div class=\"validation-msg\"></div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <button type=\"button\" [disabled]=\"addContactRemarkForm.invalid\" type=\"submit\" class=\"btn-primary\">Add note\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-20 table-container\" *ngIf=\"contactRemarkList.length\">\r\n          <div class=\"table-block\">\r\n            <table class=\"table\">\r\n              <thead>\r\n              <tr>\r\n                <th>Sr No.</th>\r\n                <th>Notes</th>\r\n                <th>Created By</th>\r\n                <th>Created On</th>\r\n                <th>Status</th>\r\n              </tr>\r\n              </thead>\r\n\r\n              <tbody>\r\n              <tr *ngFor=\"let contactRemarkData of contactRemarkList; let i = index;\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{contactRemarkData?.notes}}</td>\r\n                <td>{{contactRemarkData?.created_by?.userfullname}}</td>\r\n                <td>{{contactRemarkData?.created_on | date : 'dd-MM-yyyy HH:mm:ss'}}</td>\r\n                <td>\r\n                  <mat-slide-toggle [checked]=\"(contactRemarkData?.is_active) ? true : false\"\r\n                                    (change)=\"onChangeContactRemarkStatus($event.checked,contactRemarkData)\"></mat-slide-toggle>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <!--For edit contact only over-->\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!--Over add contact form-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/add-contact/add-contact.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/add-contact/add-contact.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvY29udGFjdC1pbmZvcm1hdGlvbi9jb250YWN0L2FkZC1jb250YWN0L2FkZC1jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/add-contact/add-contact.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/add-contact/add-contact.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AddContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContactComponent", function() { return AddContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
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













var AddContactComponent = /** @class */ (function (_super) {
    __extends(AddContactComponent, _super);
    function AddContactComponent(_router, _fb, _commonCrudService, _sharedService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this._sharedObjService = _sharedObjService;
        // Constant Variables
        _this.contact = null;
        _this.teamList = [];
        _this.contactRemarkList = [];
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        // Enter, comma
        _this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["COMMA"]];
        _this.bkChecklist = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNo"];
        _this.contactPosition = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["CONTACTPOSITION"];
        _this.userList = [];
        _this.clientList = [];
        _this.parentClientList = [];
        _this.filteredTradingClientList = [];
        _this.selectedAmNotesRecord = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](null);
        _this.isEditAmNotes = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](false);
        _this.isAddNewOptions = false;
        return _this;
    }
    AddContactComponent.prototype.ngOnInit = function () {
        this.contact = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["GLOBALDATAKEYS"].CONTACT);
        this.createContactForm();
        this.createContactRemarkForm();
        if (this.contact) {
            this.getRemarks();
        }
    };
    /**
     * Get Client List
     */
    AddContactComponent.prototype.getClientList = function () {
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
    AddContactComponent.prototype.getClientSearchParam = function () {
        return {
            compare: {
                notequal: {
                    discontinue_stage: 2
                }
            }
        };
    };
    /**
     * Get Team List
     */
    AddContactComponent.prototype.getTeamList = function () {
        var _this = this;
        this._sharedObjService.getServices({
            'records': 'all',
        }, { 'compare': { 'equal': { 'parent_id': 0 } } }).subscribe(function (response) {
            _this.teamList = response;
            // console.log(this.contact);
            if (_this.contact) {
                var serviceID = _this.getArrayToString(_this.contact.service_id, ',');
                _this.addContactForm.get('service_id').setValue(serviceID);
            }
        });
    };
    /**
     * Create contact form method
     */
    AddContactComponent.prototype.createContactForm = function () {
        this.addContactForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.parent_id && this.contact.parent_id) ? (this.contact.parent_id) : null)),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.entity_id && this.contact.entity_id) ? (this.contact.entity_id) : null), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.service_id) ? this.contact.service_id.split(',') : []), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            contact_position_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.contact_position_id) ? this.contact.contact_position_id : ''), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.first_name) ? this.contact.first_name : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
            director_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.director_number) ? this.contact.director_number : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].NUMERIC_REGEXP), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)]),
            contact_person: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.contact_person) ? this.contact.contact_person.toString() : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].ALPHABETICS_REGEXP_WITH_SPACE)]),
            is_display_bk_checklist: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.is_display_bk_checklist >= 0) ? +this.contact.is_display_bk_checklist : ''), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            send_newsletter: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.send_newsletter >= 0) ? +this.contact.send_newsletter : ''), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.to) ? this.contact.to : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
            cc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.cc) ? this.contact.cc : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
            bcc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.bcc) ? this.contact.bcc : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
            other_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.other_email) ? this.contact.other_email : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
            mobile_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.mobile_no) ? this.contact.mobile_no : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].NUMERIC_REGEXP), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)]),
            office_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.office_no) ? this.contact.office_no : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].NUMERIC_REGEXP), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(13)]),
            fax_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.fax_no) ? this.contact.fax_no : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].NUMERIC_REGEXP), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(13)]),
            is_feedback_contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.is_feedback_contact >= 0) ? this.contact.is_feedback_contact : ''), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            feedback_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.feedback_email) ? this.contact.feedback_email : '')),
            from_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.from_email) ? this.contact.from_email : '')),
            from_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](((this.contact && this.contact.from_name) ? this.contact.from_name : '')),
        });
        if (this.contact && this.contact.is_feedback_contact >= 0) {
            this.updateFeedbackEmailValidation(Number(this.contact.is_feedback_contact));
        }
        if (this.contact && this.contact.is_display_bk_checklist >= 0) {
            this.updateFromEmailValidation(Number(this.contact.is_display_bk_checklist));
        }
        this.getClientList();
        this.getTeamList();
    };
    /**
     * Get Contact Remark
     * @param contact_id
     */
    AddContactComponent.prototype.getRemarks = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_CONTACT_REMARK + '/' + this.contact.id, {
            'records': 'all',
            'sortBy': 'id',
            'sortOrder': 'desc'
        }, {}).subscribe(function (response) {
            _this.handleContactRemarkResponse(response);
        });
    };
    /**
     * Handle Contact Remark Response
     * @param response
     */
    AddContactComponent.prototype.handleContactRemarkResponse = function (response) {
        this.contactRemarkList = response.payload.data;
    };
    /**
     * Create contact form method
     */
    AddContactComponent.prototype.createContactRemarkForm = function () {
        this.addContactRemarkForm = this._fb.group({
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    /**
     * On contact information page redirect
     */
    AddContactComponent.prototype.onContact = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].CONTACT_INFORMATION]);
    };
    /**
     * On Click of Add New & Update New
     * @constructor
     */
    AddContactComponent.prototype.AddNewOptionsRedirect = function () {
        this.isAddNewOptions = true;
    };
    /**
     * On Add/Edit Contact
     * @param {FormGroup} form
     */
    AddContactComponent.prototype.onAddContact = function (form) {
        var _this = this;
        if (form.valid) {
            if (this.contact) {
                this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_CONTACT, this.contact.id, form.value)
                    .subscribe(function (response) {
                    _this.handleContactResponse(response);
                });
            }
            else {
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_CONTACT, form.value)
                    .subscribe(function (response) {
                    _this.handleContactResponse(response);
                });
            }
        }
    };
    /**
     * On Add/Edit Contact Remark
     * @param {FormGroup} form
     */
    AddContactComponent.prototype.onAddContactRemark = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['contact_id'] = this.contact.id;
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_CONTACT_REMARK_ADD, form.value)
                .subscribe(function (response) {
                _this.getRemarks();
                _this.createContactRemarkForm();
                _this.addEditContactRemarksForm.resetForm();
            });
        }
    };
    /**
     * On Change Contact Remark Status
     * @param {FormGroup} form
     */
    AddContactComponent.prototype.onChangeContactRemarkStatus = function (action, contactRemark) {
        var _this = this;
        var params = { 'is_active': action ? 1 : 0, '_method': 'put' };
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_CONTACT_REMARK_UPDATE, contactRemark.id, params).subscribe(function (response) {
            _this.contactRemarkList.map(function (item) {
                if (item.id === contactRemark.id) {
                    item.is_active = item.is_active ? 0 : 1;
                }
            });
        });
    };
    /**
     * Handle Contact Response
     * @param response
     */
    AddContactComponent.prototype.handleContactResponse = function (response) {
        if (this.isAddNewOptions) {
            this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["GLOBALDATAKEYS"].CONTACT, null);
            this.contact = null;
            this.createContactForm();
            this.addEditContactForm.resetForm();
        }
        else {
            this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].CONTACT_INFORMATION]);
        }
    };
    /**
     * Get array values from string
     * @param {string} value
     * @param {string} seperator
     * @returns {string[]}
     */
    AddContactComponent.prototype.getArrayToString = function (value, seperator) {
        if (value) {
            var valueOne_1 = [];
            value.split(seperator).map(function (item) {
                valueOne_1.push(Number(item));
            });
            return valueOne_1;
        }
    };
    AddContactComponent.prototype.ngOnDestroy = function () {
        this.contact = null;
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["GLOBALDATAKEYS"].CONTACT, null);
    };
    /**
     * On home page route
     */
    AddContactComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Update Feedback Validation while click on is feedback contact yes/no
     * @param value
     */
    AddContactComponent.prototype.updateFeedbackEmailValidation = function (value) {
        if (value === 0) {
            this.addContactForm.get('feedback_email').setValidators(null);
            this.addContactForm.get('feedback_email').setValue('');
            this.addContactForm.get('feedback_email').updateValueAndValidity();
        }
        else {
            this.addContactForm.get('feedback_email').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].EMAIL_ADDRESS_REGEXP)]);
            this.addContactForm.get('feedback_email').updateValueAndValidity();
        }
    };
    /**
     * Update Feedback Validation while click on is feedback contact yes/no
     * @param value
     */
    AddContactComponent.prototype.updateFromEmailValidation = function (value) {
        if (value === 0) {
            this.addContactForm.get('from_email').setValidators(null);
            this.addContactForm.get('from_email').setValue('');
            this.addContactForm.get('from_email').updateValueAndValidity();
            this.addContactForm.get('from_name').setValidators(null);
            this.addContactForm.get('from_name').setValue('');
            this.addContactForm.get('from_name').updateValueAndValidity();
        }
        else {
            this.addContactForm.get('from_email').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].MULTIPLE_EMAIL_ADDRESS_REGEXP)]);
            this.addContactForm.get('from_email').updateValueAndValidity();
            this.addContactForm.get('from_name').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]);
            this.addContactForm.get('from_name').updateValueAndValidity();
        }
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    AddContactComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addEditContactForm'),
        __metadata("design:type", Object)
    ], AddContactComponent.prototype, "addEditContactForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addEditContactRemarksForm'),
        __metadata("design:type", Object)
    ], AddContactComponent.prototype, "addEditContactRemarksForm", void 0);
    AddContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-contact',
            template: __webpack_require__(/*! ./add-contact.component.html */ "./src/app/admin/client-module/contact-information/contact/add-contact/add-contact.component.html"),
            styles: [__webpack_require__(/*! ./add-contact.component.scss */ "./src/app/admin/client-module/contact-information/contact/add-contact/add-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_11__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__["SharedObjService"]])
    ], AddContactComponent);
    return AddContactComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/archive-contact/archive-contact.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/archive-contact/archive-contact.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start archive contact menu dialog  -->\r\n<div class=\"modal approve-reject-dialog large-modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">\r\n      <span>ARCHIVE CONTACT of {{contact?.trading_name}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onCloseDialog()\">close</i></a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"archiveContactForm\" (submit)=\"onArchiveContact(archiveContactForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 MT-10\">\r\n          <span>Archive Reason*</span>\r\n        </div>\r\n        <div class=\"col-md-9\">\r\n          <mat-form-field>\r\n            <textarea matInput formControlName=\"archived_reason\" placeholder=\"Enter archive reason\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(archiveContactForm.get('archived_reason'))\"\r\n                            [errMsg]=\"validationMsg.REASON_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n        </div>\r\n\r\n        <div class=\"col-md-6 text-right\">\r\n          <button [disabled]=\"archiveContactForm.invalid\" type=\"submit\" class=\"btn-primary\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End archive contact menu dialog  -->\r\n\r\n<!--  Start dialog layer -->\r\n<div class=\"modal-layer\" (click)=\"onCloseDialog()\"></div>\r\n<!--  End dialog layer -->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/archive-contact/archive-contact.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/archive-contact/archive-contact.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvY29udGFjdC1pbmZvcm1hdGlvbi9jb250YWN0L2FyY2hpdmUtY29udGFjdC9hcmNoaXZlLWNvbnRhY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/archive-contact/archive-contact.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/archive-contact/archive-contact.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ArchiveContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveContactComponent", function() { return ArchiveContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
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








var ArchiveContactComponent = /** @class */ (function (_super) {
    __extends(ArchiveContactComponent, _super);
    function ArchiveContactComponent(_fb, _router, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._router = _router;
        _this._commonCrudService = _commonCrudService;
        _this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Data Variables
        _this.contact = null;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        return _this;
    }
    ArchiveContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordSubscriber = this.archiveContactRecord.subscribe(function (value) {
            if (value) {
                _this.contact = value;
            }
        });
        this.createArchiveContactForm();
    };
    /**
     * Close modal method
     */
    ArchiveContactComponent.prototype.onCloseDialog = function () {
        this.close.emit(false);
    };
    /**
     * Archive form creation
     */
    ArchiveContactComponent.prototype.createArchiveContactForm = function () {
        this.archiveContactForm = this._fb.group({
            archived_reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    /**
     * Archive contact form submit
     * @param value
     * @param valid
     */
    ArchiveContactComponent.prototype.onArchiveContact = function (form) {
        var _this = this;
        if (form.valid) {
            if (this.contact) {
                this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].CLIENT_CONTACT_ARCHIVE, this.contact.id, form.value)
                    .subscribe(function (response) {
                    _this.handleContactResponse(response);
                });
            }
        }
    };
    /**
     * Handle Contact Response
     * @param response
     */
    ArchiveContactComponent.prototype.handleContactResponse = function (response) {
        this.onCloseDialog();
    };
    /**
     * Esc event for close modal
     * @param event
     */
    ArchiveContactComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onCloseDialog();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"])
    ], ArchiveContactComponent.prototype, "archiveContactRecord", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"])
    ], ArchiveContactComponent.prototype, "popupStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ArchiveContactComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ArchiveContactComponent.prototype, "onKeydownHandler", null);
    ArchiveContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archive-contact',
            template: __webpack_require__(/*! ./archive-contact.component.html */ "./src/app/admin/client-module/contact-information/contact/archive-contact/archive-contact.component.html"),
            styles: [__webpack_require__(/*! ./archive-contact.component.scss */ "./src/app/admin/client-module/contact-information/contact/archive-contact/archive-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]])
    ], ArchiveContactComponent);
    return ArchiveContactComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/contact.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/contact.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-contact/add-contact.component */ "./src/app/admin/client-module/contact-information/contact/add-contact/add-contact.component.ts");
/* harmony import */ var _contact_view_contact_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-view/contact-view.component */ "./src/app/admin/client-module/contact-information/contact/contact-view/contact-view.component.ts");
/* harmony import */ var _archive_contact_archive_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./archive-contact/archive-contact.component */ "./src/app/admin/client-module/contact-information/contact/archive-contact/archive-contact.component.ts");
/* harmony import */ var _copy_contact_copy_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./copy-contact/copy-contact.component */ "./src/app/admin/client-module/contact-information/contact/copy-contact/copy-contact.component.ts");
/* harmony import */ var _archived_list_archived_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./archived-list/archived-list.module */ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'add-contact',
        component: _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_5__["AddContactComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'archived-list',
        loadChildren: './archived-list/archived-list.module#ArchivedListModule'
    }
];
var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_5__["AddContactComponent"],
                _contact_view_contact_view_component__WEBPACK_IMPORTED_MODULE_6__["ContactViewComponent"],
                _archive_contact_archive_contact_component__WEBPACK_IMPORTED_MODULE_7__["ArchiveContactComponent"],
                _copy_contact_copy_contact_component__WEBPACK_IMPORTED_MODULE_8__["CopyContactComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"],
                _archived_list_archived_list_module__WEBPACK_IMPORTED_MODULE_9__["ArchivedListModule"]
            ],
            exports: [
                _contact_view_contact_view_component__WEBPACK_IMPORTED_MODULE_6__["ContactViewComponent"],
                _copy_contact_copy_contact_component__WEBPACK_IMPORTED_MODULE_8__["CopyContactComponent"],
                _archive_contact_archive_contact_component__WEBPACK_IMPORTED_MODULE_7__["ArchiveContactComponent"]
            ],
            entryComponents: [_contact_view_contact_view_component__WEBPACK_IMPORTED_MODULE_6__["ContactViewComponent"],
                _copy_contact_copy_contact_component__WEBPACK_IMPORTED_MODULE_8__["CopyContactComponent"],
                _archive_contact_archive_contact_component__WEBPACK_IMPORTED_MODULE_7__["ArchiveContactComponent"]]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/copy-contact/copy-contact.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/copy-contact/copy-contact.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start contact view menu dialog  -->\r\n<div class=\"modal approve-reject-dialog\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">\r\n      <span>Copy contact of {{contact?.trading_name}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onCloseDialog()\">close</i></a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"copyContactForm\" (submit)=\"onCopyContact(copyContactForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 MB-15\">\r\n          <span class=\"primary-color\">Copy contact in related entity</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"contactRelateEntityList.length\">\r\n        <div class=\"col-md-12 MB-15\" *ngFor=\"let relatedEntity of contactRelateEntityList; let i=index\">\r\n          <mat-checkbox *ngIf=\"relatedEntity?.entity_id?.id > 0\"\r\n                        (change)=\"CheckMinimumOneSelected($event.checked, relatedEntity)\">\r\n            {{relatedEntity?.entity_id?.trading_name}}\r\n          </mat-checkbox>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"contactRelateEntityList.length === 0\" class=\"panel-title red-color\">\r\n        No Records Found!\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\" *ngIf=\"contactRelateEntityList.length\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n        </div>\r\n\r\n        <div class=\"col-md-6 text-right\">\r\n          <button type=\"submit\" class=\"btn-primary\" [disabled]=\"contactRelateEntityListLength <=0 \">Submit</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End contact view menu dialog  -->\r\n\r\n<!--  Start dialog layer -->\r\n<div class=\"modal-layer\" (click)=\"onCloseDialog()\"></div>\r\n<!--  End dialog layer -->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/copy-contact/copy-contact.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/copy-contact/copy-contact.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CopyContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyContactComponent", function() { return CopyContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
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







var CopyContactComponent = /** @class */ (function (_super) {
    __extends(CopyContactComponent, _super);
    function CopyContactComponent(_fb, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        // Validation constants variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        _this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Data Variables
        _this.contact = null;
        _this.contactRelateEntityList = [];
        _this.contactRelateEntityListLength = 0;
        _this.entityID = [];
        return _this;
    }
    CopyContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordSubscriber = this.copyContactRecord.subscribe(function (value) {
            if (value) {
                _this.contact = value;
            }
        });
        this.createCopyContactForm();
        this.getContactRelatedEntity();
    };
    /**
     * Create copy form creation
     */
    CopyContactComponent.prototype.createCopyContactForm = function () {
        this.copyContactForm = this._fb.group({
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    /**
     * Get Contact Related Entity ID
     * @param contact_id
     */
    CopyContactComponent.prototype.getContactRelatedEntity = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].CLIENT_CONTACT_RELATED_ENTITY, this.contact.entity_id).subscribe(function (response) {
            _this.handleContactRelatedEntityResponse(response);
        });
    };
    /**
     *
     * @param respone
     */
    CopyContactComponent.prototype.handleContactRelatedEntityResponse = function (response) {
        this.contactRelateEntityList = response.payload.data;
    };
    /**
     *
     * @param {boolean} event
     * @constructor
     */
    CopyContactComponent.prototype.CheckMinimumOneSelected = function (event, relatedEntity) {
        if (event) {
            this.contactRelateEntityListLength = this.contactRelateEntityListLength + 1;
            this.entityID.push(relatedEntity.entity_id.id);
        }
        else {
            this.contactRelateEntityListLength = this.contactRelateEntityListLength - 1;
            var index = this.entityID.indexOf(relatedEntity.entity_id.id);
            if (index !== -1) {
                this.entityID.splice(index, 1);
            }
        }
    };
    /**
     * Copy contact method
     * @param value
     * @param valid
     */
    CopyContactComponent.prototype.onCopyContact = function (form) {
        var _this = this;
        if (form.valid) {
            if (this.contact) {
                form.value['entity_id'] = this.entityID.join();
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].CLIENT_CONTACT_COPY_RELATED_ENTITY + '/' + this.contact.id, form.value)
                    .subscribe(function (response) {
                    _this.handleContactResponse(response);
                });
            }
        }
    };
    /**
     * Handle Contact Response
     * @param response
     */
    CopyContactComponent.prototype.handleContactResponse = function (response) {
        this.contactRelateEntityListLength = 0;
        this.onCloseDialog();
    };
    /**
     * Close modal method
     */
    CopyContactComponent.prototype.onCloseDialog = function () {
        this.close.emit(false);
    };
    /**
     * Esc event for close modal
     * @param event
     */
    CopyContactComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onCloseDialog();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"])
    ], CopyContactComponent.prototype, "copyContactRecord", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"])
    ], CopyContactComponent.prototype, "popupStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CopyContactComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CopyContactComponent.prototype, "onKeydownHandler", null);
    CopyContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-copy-contact',
            template: __webpack_require__(/*! ./copy-contact.component.html */ "./src/app/admin/client-module/contact-information/contact/copy-contact/copy-contact.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]])
    ], CopyContactComponent);
    return CopyContactComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=default~contact-contact-module~contact-information-contact-information-module.js.map