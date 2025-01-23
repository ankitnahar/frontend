(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-entity-add-entity-module"],{

/***/ "./src/app/admin/client-module/view-client/add-entity/add-entity.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/add-entity/add-entity.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-entity-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>CLIENT</span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onClient()\">VIEW CLIENT</a></span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">ADD ENTITY</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n\r\n  <!--add entity start-->\r\n  <div class=\"basic-main-tab-container\">\r\n    <span class=\"panel-title orange-color\">Add entity from here</span>\r\n    <form [formGroup]=\"basicMainForm\" (submit)=\"onSubmitBasicMainform(basicMainForm.value,basicMainForm.valid)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Billing Name\" formControlName=\"billing_name\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(basicMainForm.get('billing_name'))\"\r\n                            [errMsg]=\"validationMsg.BILLING_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Legal Name\"\r\n                   (blur)=\"checkClientUniqueName('name', $event.target.value, 'Legal Name')\" formControlName=\"name\"\r\n                   required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(basicMainForm.get('name'))\"\r\n                            [errMsg]=\"validationMsg.LEGAL_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Trading Name\"\r\n                   (blur)=\"checkClientUniqueName('trading_name', $event.target.value, 'Trading Name')\"\r\n                   formControlName=\"trading_name\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(basicMainForm.get('trading_name'))\"\r\n                            [errMsg]=\"validationMsg.TRADING_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"signedDate\" placeholder=\"Contract Signed Date\"\r\n                   formControlName=\"contract_signed_date\" required/>\r\n            <mat-datepicker-toggle matSuffix [for]=\"signedDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #signedDate disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(basicMainForm.get('contract_signed_date'))\"\r\n                            [errMsg]=\"validationMsg.CONTRACT_DATE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <!--<div class=\"col-md-4\">-->\r\n        <!--<mat-form-field>-->\r\n        <!--<input matInput formControlName=\"entity_writeoff\" placeholder=\"Client Write Off\" required/>-->\r\n        <!--</mat-form-field>-->\r\n        <!--<div class=\"validation-msg\">-->\r\n        <!--<app-validation *ngIf=\"isRequiredField(basicMainForm.get('entity_writeoff'))\"-->\r\n        <!--[errMsg]=\"validationMsg.CLIENT_WRITE_REQUIRED\"></app-validation>-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <input matInput formControlName=\"reviewer_budgeted_unit\" placeholder=\"Reviewer budgeted unit\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(basicMainForm.get('reviewer_budgeted_unit'))\"\r\n                            [errMsg]=\"validationMsg.BUDGETED_UNIT_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(basicMainForm.get('reviewer_budgeted_unit'))\"\r\n                            [errMsg]=\"validationMsg.BUDGETED_UNIT_VALID\"></app-validation>\r\n            <app-validation *ngIf=\"isValidLength(basicMainForm.get('reviewer_budgeted_unit'))\"\r\n                            [errMsg]=\"validationMsg.BUDGETED_UNIT_LENGTH\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Related entity\" formControlName=\"related_entity\">\r\n              <mat-option *ngFor=\"let YesNoData of YesNo.slice(1)\" [value]=\"YesNoData?.key\">\r\n                {{ YesNoData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"ABN number\" formControlName=\"abn_number\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(basicMainForm.get('abn_number'))\"\r\n                            [errMsg]=\"validationMsg.ABN_NUMBER_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(basicMainForm.get('abn_number'))\"\r\n                            [errMsg]=\"validationMsg.ABN_NUMBER_VALID\"></app-validation>\r\n            <app-validation *ngIf=\"isValidLength(basicMainForm.get('abn_number'))\"\r\n                            [errMsg]=\"validationMsg.ABN_NUMBER_LENGTH\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"ABN Branch Code\" formControlName=\"abn_branch_code\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(basicMainForm.get('abn_branch_code'))\"\r\n                            [errMsg]=\"validationMsg.ABN_BRANCH_CODE_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(basicMainForm.get('abn_branch_code'))\"\r\n                            [errMsg]=\"validationMsg.ABN_BRANCH_CODE_VALID\"></app-validation>\r\n            <app-validation *ngIf=\"isValidLength(basicMainForm.get('abn_branch_code'))\"\r\n                            [errMsg]=\"validationMsg.ABN_BRANCH_CODE_LENGTH\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-5\">\r\n          <ng-select [multiple]=\"true\" [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Select Related Entity\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"related_entity_id\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 MT-5\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Parent Entity?\" formControlName=\"is_parent\"\r\n                        (selectionChange)=\"onChangeParent($event.value)\" required>\r\n              <mat-option *ngFor=\"let YesNoData of YesNo.slice(1)\" [value]=\"YesNoData?.key\">\r\n                {{ YesNoData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 MT-5\" *ngIf=\"basicMainForm.get('is_parent').value === 0\">\r\n          <ng-select [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Select Parent Entity\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"parent_id\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(basicMainForm.get('parent_id'))\"\r\n                            [errMsg]=\"validationMsg.PAREN_ENTITY_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"registeredABN\" placeholder=\"Date from when client is registered for ABN\"\r\n                   formControlName=\"abn_register_date\"/>\r\n            <mat-datepicker-toggle matSuffix [for]=\"registeredABN\"></mat-datepicker-toggle>\r\n            <mat-datepicker #registeredABN disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"TFN number\" formControlName=\"tfn_number\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(basicMainForm.get('tfn_number'))\"\r\n                            [errMsg]=\"validationMsg.TFN_NUMBER_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Type of Business\" formControlName=\"business_type\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Type of Entity\" formControlName=\"entity_type\"\r\n                        (selectionChange)=\"showEntityTypeOther($event.value)\">\r\n              <mat-option *ngFor=\"let EntityTypeData of EntityType.slice(1)\" [value]=\"EntityTypeData?.key\">\r\n                {{ EntityTypeData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\" *ngIf=\"entityTypeOther\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Other\" formControlName=\"entity_type_ifother\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Bookkeeping Done By\" formControlName=\"bk_doneby\"\r\n                        (selectionChange)=\"showBKdoneByOther($event.value)\">\r\n              <mat-option *ngFor=\"let BkDonebyData of BkDoneby.slice(1)\" [value]=\"BkDonebyData?.key\">\r\n                {{ BkDonebyData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\" *ngIf=\"bkDoneByOther\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Other\" formControlName=\"bk_doneby_ifother\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Registered For GST?\" formControlName=\"gst_register\">\r\n              <mat-option *ngFor=\"let YesNoData of YesNo.slice(1)\" [value]=\"YesNoData?.key\">\r\n                {{ YesNoData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"registeredGST\" placeholder=\"Date from which client is registered for GST\"\r\n                   formControlName=\"gst_register_date\"/>\r\n            <mat-datepicker-toggle matSuffix [for]=\"registeredGST\"></mat-datepicker-toggle>\r\n            <mat-datepicker #registeredGST disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"BAS Frequency\" formControlName=\"bas_frequency\">\r\n              <mat-option *ngFor=\"let BasFrequencyData of BasFrequency.slice(1)\" [value]=\"BasFrequencyData?.key\">\r\n                {{ BasFrequencyData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"BAS is on Accrual or Cash?\" formControlName=\"bas_accrualorcash\">\r\n              <mat-option *ngFor=\"let BasAccrualorcashData of BasAccrualorcash.slice(1)\"\r\n                          [value]=\"BasAccrualorcashData?.key\">\r\n                {{ BasAccrualorcashData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"PAYG Frequency\" formControlName=\"payg_frequency\">\r\n              <mat-option *ngFor=\"let PaygFrequencyData of PaygFrequency.slice(1)\" [value]=\"PaygFrequencyData?.key\">\r\n                {{ PaygFrequencyData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Financial Institution detail updated on ATO?\"\r\n                        formControlName=\"financial_institution_updateon_ato\"\r\n                        (selectionChange)=\"showFinancialOther($event.value)\">\r\n              <mat-option *ngFor=\"let YesNoOtherData of YesNoOther.slice(1)\" [value]=\"YesNoOtherData?.key\">\r\n                {{ YesNoOtherData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\" *ngIf=\"FinancialInstitutionUpdateonAto\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Other\" formControlName=\"financial_institution_updateon_ato_ifother\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Activity statement delivery preference\"\r\n                        formControlName=\"statement_delivery_preference\">\r\n              <mat-option *ngFor=\"let StatementDeliveryPreferenceData of StatementDeliveryPreference.slice(1)\"\r\n                          [value]=\"StatementDeliveryPreferenceData?.key\">\r\n                {{ StatementDeliveryPreferenceData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Is this client registered for FBT?\" formControlName=\"entity_registerfor_fbt\">\r\n              <mat-option *ngFor=\"let YesNoNaData of YesNoNa.slice(1)\" [value]=\"YesNoNaData?.key\">\r\n                {{ YesNoNaData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Is this client registered for fuel Tax Credit?\"\r\n                        formControlName=\"entity_registerfor_fueltaxcredit\">\r\n              <mat-option *ngFor=\"let YesNoNaData of YesNoNa.slice(1)\" [value]=\"YesNoNaData?.key\">\r\n                {{ YesNoNaData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Group client belongs to?\" formControlName=\"group_client_belongsto\">\r\n              <mat-option *ngFor=\"let ClientBelongsToResponseData of ClientBelongsToResponse\"\r\n                          [value]=\"ClientBelongsToResponseData?.id\">\r\n                {{ClientBelongsToResponseData?.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Franchise\" formControlName=\"franchise\">\r\n              <mat-option *ngFor=\"let FranchiseData of Franchise.slice(1)\" [value]=\"FranchiseData?.key\">\r\n                {{ FranchiseData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Website\" formControlName=\"website\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(basicMainForm.get('website'))\"\r\n                            [errMsg]=\"validationMsg.WEBSITE_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Xero Email ID\" formControlName=\"xero_email_id\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(basicMainForm.get('xero_email_id'))\"\r\n                            [errMsg]=\"validationMsg.XERO_EMAIL_ID_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Myob Email ID\" formControlName=\"myob_email_id\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(basicMainForm.get('myob_email_id'))\"\r\n                            [errMsg]=\"validationMsg.XERO_EMAIL_ID_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Billing From BDMS?\" formControlName=\"billing_from\" required>\r\n              <mat-option *ngFor=\"let billingFromInfo of billingFrom.slice(1)\" [value]=\"billingFromInfo?.key\">\r\n                {{ billingFromInfo?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Team type\" formControlName=\"team_type\" >\r\n              <mat-option *ngFor=\"let teamType of teamTypeForm\" [value]=\"teamType?.key\">\r\n                {{ teamType?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <ng-select\r\n            [items]=\"userList\"\r\n            [closeOnSelect]=\"true\"\r\n            bindLabel=\"userfullname\"\r\n            placeholder=\"Feedback Assignee\"\r\n            bindValue=\"id\"\r\n            [virtualScroll]=\"true\"\r\n            [searchable]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            formControlName=\"feedback_assignee\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <ng-select\r\n            [items]=\"clientPayrollList\"\r\n            [closeOnSelect]=\"true\"\r\n            bindLabel=\"label\"\r\n            placeholder=\"Client Payroll\"\r\n            bindValue=\"key\"\r\n            [virtualScroll]=\"true\"\r\n            [searchable]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            formControlName=\"client_payroll\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-right MB-20\">\r\n          <button type=\"button\" class=\"btn-default MR-5\" (click)=\"onClient()\">Cancel</button>\r\n          <button [disabled]=\"basicMainForm.invalid\" type=\"submit\" class=\"btn-primary\">Add</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!--add entity html over-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/add-entity/add-entity.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/add-entity/add-entity.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvYWRkLWVudGl0eS9hZGQtZW50aXR5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/add-entity/add-entity.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/add-entity/add-entity.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddEntityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntityComponent", function() { return AddEntityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
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













var AddEntityComponent = /** @class */ (function (_super) {
    __extends(AddEntityComponent, _super);
    function AddEntityComponent(_fb, _router, _commonCrudService, _sharedObjService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._router = _router;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        _this._sharedService = _sharedService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_12__["ValidationConstantMessage"]();
        _this.YesNo = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["yesNo"];
        _this.YesNoNa = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["yesNoNa"];
        _this.YesNoOther = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["yesNoOther"];
        _this.BkDoneby = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["bkDoneby"];
        _this.BasFrequency = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["basFrequency"];
        _this.BasAccrualorcash = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["basAccrualorcash"];
        _this.PaygFrequency = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["paygFrequency"];
        _this.StatementDeliveryPreference = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["statementDeliveryPreference"];
        _this.EntityType = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["entityType"];
        _this.Franchise = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["franchise"];
        _this.FinancialInstitutionUpdateonAto = false;
        _this.bkDoneByOther = false;
        _this.entityTypeOther = false;
        _this.billingFrom = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["yesNo"];
        _this.teamTypeForm = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["TEAM_TYPE"];
        _this.clientPayrollList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["CLIENT_PAYROLL_LIST"];
        _this.clientList = [];
        _this.userList = [];
        _this.selectedAmNotesRecord = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        _this.isEditAmNotes = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        return _this;
    }
    AddEntityComponent.prototype.ngOnInit = function () {
        this.initializeMethod();
        this.getClientList();
        this.getUserList();
    };
    /**
     * Initialization Methods
     */
    AddEntityComponent.prototype.initializeMethod = function () {
        var _this = this;
        // this._basicService.getClientList({}, this.getClientListSearch()).subscribe(Response => {
        //   this.handleClientListResponse(Response);
        // });
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].CLIENT_BELONGSTO, { 'records': 'all' }).subscribe(function (Response) {
            _this.handleClientBelongsToList(Response);
        });
        this.createBasicMainForm();
    };
    /**
     * Handle Entity Response for data
     * @param response
     */
    AddEntityComponent.prototype.handleClientListResponse = function (response) {
        // assign data to array
        this.ClientListResponse = response.payload.data;
    };
    /**
     * Handle Entity Belongs to List
     * @param response
     */
    AddEntityComponent.prototype.handleClientBelongsToList = function (response) {
        // assign data to array
        this.ClientBelongsToResponse = response.payload.data;
    };
    /**
     * Create Client Basic Form
     * @param
     */
    AddEntityComponent.prototype.createBasicMainForm = function () {
        this.basicMainForm = this._fb.group({
            billing_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            trading_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            contract_signed_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            // entity_writeoff: new FormControl('', <any>Validators.required),
            reviewer_budgeted_unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_12__["CommonRegex"].NUMERIC_REGEXP), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(3)]),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            related_entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([]),
            is_parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            abn_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_12__["CommonRegex"].NUMERIC_REGEXP), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]),
            abn_branch_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_12__["CommonRegex"].NUMERIC_REGEXP), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(3)]),
            abn_register_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tfn_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_12__["CommonRegex"].NUMERIC_REGEXP)]),
            business_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            entity_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            entity_type_ifother: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bk_doneby: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bk_doneby_ifother: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            gst_register: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            gst_register_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bas_frequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bas_accrualorcash: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            payg_frequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            financial_institution_updateon_ato: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            financial_institution_updateon_ato_ifother: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            statement_delivery_preference: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            entity_registerfor_fbt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            entity_registerfor_fueltaxcredit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            group_client_belongsto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            franchise: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_12__["CommonRegex"].WEBSITE)]),
            trading_name_unique: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            name_unique: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            xero_email_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_12__["CommonRegex"].EMAIL_ADDRESS_REGEXP)]),
            myob_email_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_12__["CommonRegex"].EMAIL_ADDRESS_REGEXP)]),
            billing_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]),
            team_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            feedback_assignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            client_payroll: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    };
    /**
     * Get User List
     */
    AddEntityComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.userList = response;
        });
    };
    /**
     * On Form Submit Client Basic Data
     * @param formParams
     * @param {boolean} isValid
     */
    AddEntityComponent.prototype.onSubmitBasicMainform = function (formParams, isValid) {
        var _this = this;
        formParams['related_entity_id'] = (formParams['related_entity_id'] !== '') ? formParams['related_entity_id'].join() : '';
        formParams['contract_signed_date'] = (formParams['contract_signed_date'] !== '') ? moment__WEBPACK_IMPORTED_MODULE_3__(formParams['contract_signed_date']).format('YYYY-MM-DD') : '';
        formParams['gst_register_date'] = (formParams['gst_register_date'] !== '') ? moment__WEBPACK_IMPORTED_MODULE_3__(formParams['gst_register_date']).format('YYYY-MM-DD') : '';
        if (isValid) {
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].CLIENT_ADD, formParams).subscribe(function (Response) {
                _this.createBasicMainForm();
                _this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].VIEW_CLIENT]);
            });
        }
    };
    AddEntityComponent.prototype.onChangeParent = function (parentType) {
        if (parentType !== 0) {
            this.basicMainForm.get('parent_id').setValidators(null);
            this.basicMainForm.get('parent_id').setValue(0);
            this.basicMainForm.get('parent_id').updateValueAndValidity();
        }
        else {
            this.basicMainForm.get('parent_id').setValue(null);
            this.basicMainForm.get('parent_id').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            this.basicMainForm.get('parent_id').updateValueAndValidity();
        }
    };
    /**
     * Get Client List for Related Entity
     * @returns {{}}
     */
    AddEntityComponent.prototype.getClientListSearch = function () {
        var params = {};
        var filter = {};
        filter['notequal'] = { 'discontinue_stage': 2 };
        params['compare'] = filter;
        return params;
    };
    /**
     * Get Client List
     */
    AddEntityComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = response;
        });
    };
    // Events
    AddEntityComponent.prototype.onClient = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].VIEW_CLIENT]);
    };
    /**
     * Check Client Unique name is available or not
     * @param fieldName
     * @param value
     */
    AddEntityComponent.prototype.checkClientUniqueName = function (fieldName, value, nickName) {
        var _this = this;
        var _a;
        if (fieldName && value) {
            var params = (_a = {}, _a[fieldName] = value, _a);
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].CLIENT_CHECK_DUPLICATE, {
                'data': JSON.stringify(params),
                'entity_id': 0
            }).subscribe(function (Response) {
                var errorCode = Response.payload.errorCode;
                if (errorCode === 0) {
                    _this.basicMainForm.get([fieldName] + '_unique').setValue(1);
                    _this.basicMainForm.get([fieldName] + '_unique').updateValueAndValidity();
                    _this._sharedService.setToastMessage('Great, this ' + nickName + ' is available.', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["ToastType"].SUCCESS);
                }
                else if (errorCode === 1) {
                    _this.basicMainForm.get([fieldName] + '_unique').setValue(null);
                    _this.basicMainForm.get([fieldName] + '_unique').updateValueAndValidity();
                    _this._sharedService.setToastMessage('Regret, this ' + nickName + ' is not available.', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["ToastType"].ERROR);
                }
            });
        }
    };
    /**
     * On home page route
     */
    AddEntityComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    AddEntityComponent.prototype.showFinancialOther = function (val) {
        if (val === 2) {
            this.FinancialInstitutionUpdateonAto = true;
        }
        else {
            this.FinancialInstitutionUpdateonAto = false;
        }
    };
    AddEntityComponent.prototype.showBKdoneByOther = function (val) {
        if (val === 3) {
            this.bkDoneByOther = true;
        }
        else {
            this.bkDoneByOther = false;
        }
    };
    AddEntityComponent.prototype.showEntityTypeOther = function (val) {
        if (val === 3) {
            this.entityTypeOther = true;
        }
        else {
            this.entityTypeOther = false;
        }
    };
    AddEntityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-entity',
            template: __webpack_require__(/*! ./add-entity.component.html */ "./src/app/admin/client-module/view-client/add-entity/add-entity.component.html"),
            styles: [__webpack_require__(/*! ./add-entity.component.scss */ "./src/app/admin/client-module/view-client/add-entity/add-entity.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"]])
    ], AddEntityComponent);
    return AddEntityComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/view-client/add-entity/add-entity.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/add-entity/add-entity.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AddEntityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntityModule", function() { return AddEntityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _add_entity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-entity.component */ "./src/app/admin/client-module/view-client/add-entity/add-entity.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_entity_component__WEBPACK_IMPORTED_MODULE_4__["AddEntityComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    }
];
var AddEntityModule = /** @class */ (function () {
    function AddEntityModule() {
    }
    AddEntityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_entity_component__WEBPACK_IMPORTED_MODULE_4__["AddEntityComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ]
        })
    ], AddEntityModule);
    return AddEntityModule;
}());



/***/ })

}]);
//# sourceMappingURL=add-entity-add-entity-module.js.map