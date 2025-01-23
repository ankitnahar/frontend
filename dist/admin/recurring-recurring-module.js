(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recurring-recurring-module"],{

/***/ "./src/app/admin/billing-module/invoices/recurring/add-recurring/add-recurring.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/add-recurring/add-recurring.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-on-off-invoice-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>BILLING</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a (click)=\"onInvoice()\">INVOICE</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a (click)=\"onManageRecurring()\">RECURRING</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">{{(getRecurringData && getRecurringData.id && getRecurringData.id > 0) ? 'EDIT RECURRING' : 'ADD RECURRING'}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n\r\n  <!--Start add recurring form-->\r\n  <div>\r\n    <span class=\"panel-title\">{{(getRecurringData && getRecurringData.id && getRecurringData.id > 0) ? 'EDIT RECURRING - ' + getRecurringData.recurring_name : 'ADD RECURRING'}}</span>\r\n    <form [formGroup]=\"addRecurringForm\" (submit)=\"onSubmitAddRecurringForm(addRecurringForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <mat-radio-group (change)=\"onChangeType($event.value)\">\r\n            <mat-radio-button [checked]=\"isMultipleClientName ? false : true\" value=\"2\">Single Client</mat-radio-button>\r\n            <mat-radio-button [checked]=\"isMultipleClientName ? true : false\" class=\"ML-15\" value=\"1\">Multiple Client\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n      </div>\r\n      <div class=\"row MT-20\">\r\n        <div class=\"{{ isMultipleClientName ? 'col-md-3' : 'col-md-4' }}\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Recurring Name\" formControlName=\"recurring_name\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addRecurringForm.get('recurring_name'))\"\r\n                            [errMsg]=\"validationMsg.NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\" *ngIf=\"isMultipleClientName\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"service_id\" placeholder=\"Service\" (selectionChange)=\"OnFrequencyChange()\"\r\n                        required>\r\n              <mat-option>None</mat-option>\r\n              <mat-option *ngFor=\"let service of serviceList\" [value]=\"service?.id\">\r\n                {{ service?.service_name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addRecurringForm.get('service_id'))\"\r\n                            [errMsg]=\"validationMsg.SERVICE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\" *ngIf=\"isMultipleClientName\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"fixed_fee\" placeholder=\"Fixed Fee\" required [disabled]=\"!isMultipleClientName\"\r\n                        (selectionChange)=\"OnFrequencyChange()\">\r\n              <mat-option>None</mat-option>\r\n              <mat-option *ngFor=\"let ff of fixedFeeList.slice(1)\" [value]=\"ff?.key\">\r\n                {{ ff?.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addRecurringForm.get('fixed_fee'))\"\r\n                            [errMsg]=\"validationMsg.FIXED_FEE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\" *ngIf=\"isMultipleClientName\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\" required\r\n                        [disabled]=\"!isMultipleClientName\" (selectionChange)=\"OnFrequencyChange()\">\r\n              <mat-option>None</mat-option>\r\n              <mat-option *ngFor=\"let frequency of frequencyList\" [value]=\"frequency?.id\">\r\n                {{frequency?.frequency_name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addRecurringForm.get('frequency_id'))\"\r\n                            [errMsg]=\"validationMsg.FREQUENCY_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!isMultipleClientName\" class=\"col-md-8\">\r\n          <ng-select [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"billing_name\"\r\n                     placeholder=\"Select Client\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"onClientChange($event)\"\r\n                     formControlName=\"entity_id\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addRecurringForm.get('entity_id'))\"\r\n                            [errMsg]=\"validationMsg.INVOICE_SELECT_CLIENT_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"isMultipleClientName\" class=\"row col-md-12\">\r\n          <span class=\"panel-title M-0 text-right back-color col-md-12\">You have selected <span class=\"primary-color\">{{(selectedFilterEntity) ? selectedFilterEntity.length : 0}}</span> clients.</span>\r\n          <div class=\"col-md-10 PLR-0\">\r\n            <ng-select\r\n              [items]=\"clientListMultiple\"\r\n              [hideSelected]=\"true\"\r\n              bindLabel=\"billing_name\"\r\n              placeholder=\"Select Client\"\r\n              bindValue=\"id\"\r\n              [virtualScroll]=\"true\"\r\n              [multiple]=\"true\"\r\n              (change)=\"onClientChangeUpdateCount($event)\"\r\n              formControlName=\"entity_id\">\r\n            </ng-select>\r\n            <div class=\"validation-msg\">\r\n              <app-validation *ngIf=\"isRequiredField(addRecurringForm.get('entity_id'))\"\r\n                              [errMsg]=\"validationMsg.INVOICE_SELECT_CLIENT_NAME_REQUIRED\"></app-validation>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"isMultipleClientName\" class=\"col-md-2 MT-20 text-right\">\r\n            <span (click)=\"selectAll()\" class=\"cursor-pointer orange-color\">Select All | </span>\r\n            <span (click)=\"unselectAll()\" class=\"cursor-pointer wet-asphalt-color\">DeSelect All</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"!isMultipleClientName\">\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"service_id\" placeholder=\"Service\"\r\n                        (selectionChange)=\"onChangeService($event.value, 1)\"\r\n                        required>\r\n              <mat-option>None</mat-option>\r\n              <mat-option *ngFor=\"let service of serviceList\" [value]=\"service?.id\">\r\n                {{ service?.service_name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addRecurringForm.get('service_id'))\"\r\n                            [errMsg]=\"validationMsg.SERVICE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"fixed_fee\" placeholder=\"Fixed Fee\" required [disabled]=\"!isMultipleClientName\">\r\n              <mat-option>None</mat-option>\r\n              <mat-option *ngFor=\"let ff of fixedFeeList.slice(1)\" [value]=\"ff?.key\">\r\n                {{ ff?.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addRecurringForm.get('fixed_fee'))\"\r\n                            [errMsg]=\"validationMsg.FIXED_FEE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"frequency_id\" placeholder=\"Frequency\" required\r\n                        [disabled]=\"!isMultipleClientName\">\r\n              <mat-option>None</mat-option>\r\n              <mat-option *ngFor=\"let frequency of frequencyList\" [value]=\"frequency?.id\">\r\n                {{frequency?.frequency_name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addRecurringForm.get('frequency_id'))\"\r\n                            [errMsg]=\"validationMsg.FREQUENCY_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input formControlName=\"next_due\" matInput [matDatepicker]=\"wipstartDate\" placeholder=\"WIP Start Date\"\r\n                   required>\r\n            <mat-datepicker-toggle matSuffix [for]=\"wipstartDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #wipstartDate></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addRecurringForm.get('next_due'))\"\r\n                            [errMsg]=\"validationMsg.WIP_START_DATE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 MT-20 PL-0\"> Invoice Date</div>\r\n            <div class=\"col-md-4 PL-0\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"inv_logic\" placeholder=\"Add Days\" required>\r\n                  <mat-option value=\"+\">+</mat-option>\r\n                  <mat-option value=\"-\">-</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\">\r\n                <app-validation *ngIf=\"isRequiredField(addRecurringForm.get('inv_logic'))\"\r\n                                [errMsg]=\"validationMsg.INVOICE_DATE_REQUIRED\"></app-validation>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 PL-0\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"No. Of Days\" formControlName=\"inv_days\" required/>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\">\r\n                <app-validation *ngIf=\"isRequiredField(addRecurringForm.get('inv_days'))\"\r\n                                [errMsg]=\"validationMsg.INVOICE_DATE_REQUIRED\"></app-validation>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 PR-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 MT-20 PL-0\"> Invoice Days</div>\r\n            <div class=\"col-md-8 PL-0\">\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"inv_weekday\" placeholder=\"Invoice Day\">\r\n                  <mat-option *ngFor=\"let days of daysList\" [value]=\"days?.key\">\r\n                    {{ days?.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <mat-radio-group (change)=\"onChangeRepetition($event.value)\">\r\n        <div class=\"row MT-10\">\r\n          <div class=\"col-md-1 MT-30\">Repetition</div>\r\n          <div class=\"col-md-8\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3 MT-15 PL-0\">\r\n                <mat-radio-button value=\"1\" [checked]=\"isRepetition == 1 ? true : false\">Repeat Indefinitely\r\n                </mat-radio-button>\r\n              </div>\r\n              <div class=\"col-md-3 MT-15 PL-0\" *ngIf=\"isRepetition == 1\">\r\n                <mat-form-field>\r\n                  <input formControlName=\"repeat_indefinitely\" matInput [matDatepicker]=\"date2\" placeholder=\"Date\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"date2\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #date2></mat-datepicker>\r\n                </mat-form-field>\r\n                <div class=\"validation-msg\"></div>\r\n              </div>\r\n              <div class=\"col-md-2 MT-15 PL-0\">\r\n                <mat-radio-button value=\"2\" [checked]=\"isRepetition == 2 ? true : false\">Repeat Until</mat-radio-button>\r\n              </div>\r\n              <div class=\"col-md-3 MT-15 PL-0\" *ngIf=\"isRepetition == 2\">\r\n                <mat-form-field>\r\n                  <input formControlName=\"repeat_date\" matInput [matDatepicker]=\"date1\" placeholder=\"Date\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"date1\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #date1></mat-datepicker>\r\n                </mat-form-field>\r\n                <div class=\"validation-msg\"></div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 MT-15 PL-0\">\r\n                    <mat-radio-button value=\"3\" [checked]=\"isRepetition == 3 ? true : false\">Repeat #Times\r\n                    </mat-radio-button>\r\n                  </div>\r\n                  <div class=\"col-md-6 MT-15\" *ngIf=\"isRepetition == 3\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Number of Times\" formControlName=\"times\"/>\r\n                    </mat-form-field>\r\n                    <div class=\"validation-msg\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </mat-radio-group>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <textarea formControlName=\"notes\" matInput placeholder=\"Notes\" rows=\"2\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 MB-20\">\r\n        <div class=\"row MT-30\">\r\n          <div class=\"col-md-6 PL-0\">\r\n          </div>\r\n          <div class=\"col-md-6 text-right PR-0\">\r\n            <button (click)=\"onInvoice()\" type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n            <button [disabled]=\"addRecurringForm.invalid\" type=\"submit\" class=\"btn-primary\">Save & Next</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!--End add recurring form-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/recurring/add-recurring/add-recurring.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/add-recurring/add-recurring.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2ludm9pY2VzL3JlY3VycmluZy9hZGQtcmVjdXJyaW5nL2FkZC1yZWN1cnJpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/recurring/add-recurring/add-recurring.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/add-recurring/add-recurring.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddRecurringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecurringComponent", function() { return AddRecurringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
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












var AddRecurringComponent = /** @class */ (function (_super) {
    __extends(AddRecurringComponent, _super);
    function AddRecurringComponent(_router, _fb, _commonCrudService, _sharedObjService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        _this._sharedService = _sharedService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_2__["ValidationConstantMessage"]();
        _this.serviceList = [];
        _this.serviceListChange = [];
        _this.frequencyList = [];
        _this.fixedFeeList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["yesNo"];
        _this.getRecurringData = null;
        _this.daysList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["days"];
        _this.clientList = [];
        _this.selectedFilterEntity = null;
        _this.clientListMultiple = [];
        // State variables
        _this.isMultipleClientName = false;
        _this.isFrequencyChange = false;
        _this.isRepetition = 0;
        return _this;
    }
    AddRecurringComponent.prototype.ngOnInit = function () {
        var backForChange = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["GLOBALDATAKEYS"].PREVIOUS_RECURRING);
        var editRecurring = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["GLOBALDATAKEYS"].RECURRING);
        if (backForChange) {
            this.getRecurringData = backForChange;
        }
        if (editRecurring) {
            this.getRecurringData = editRecurring;
        }
        this.getClientList();
        this.createAddRecurringForm();
        this.getServices();
        this.getFrequency();
    };
    /**
     * Get Client List
     */
    AddRecurringComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = response;
            if (_this.getRecurringData && _this.getRecurringData.rec_type === 1) {
                _this.isMultipleClientName = false;
                _this.selectedFilterEntity = _this.getRecurringData.entity_id;
                _this.addRecurringForm.get('entity_id').setValue(Number(_this.selectedFilterEntity));
                _this.addRecurringForm.get('entity_id').updateValueAndValidity();
                // console.log(this.addRecurringForm.get('entity_id'));
            }
        });
    };
    /**
     * Default search params for client listing API
     * @returns {{compare: {notequal: {discontinue_stage: number}}}}
     */
    AddRecurringComponent.prototype.getClientSearchParam = function () {
        return {
            compare: {
                notequal: {
                    discontinue_stage: 2
                }
            }
        };
    };
    /**
     * Add recurring form
     */
    AddRecurringComponent.prototype.createAddRecurringForm = function () {
        // Check Here Single Client or Multiple Client
        if (this.getRecurringData && this.getRecurringData.rec_type === 2) {
            this.isMultipleClientName = true;
        }
        // Check Here Repetition Type
        if (this.getRecurringData && this.getRecurringData.repetition_type > 0) {
            this.isRepetition = this.getRecurringData.repetition_type;
        }
        this.addRecurringForm = this._fb.group({
            rec_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            recurring_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.getRecurringData) ? this.getRecurringData.recurring_name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.getRecurringData) ? this.getRecurringData.service_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fixed_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.getRecurringData) ? this.getRecurringData.fixed_fee : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.getRecurringData) ? this.getRecurringData.frequency_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            next_due: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.getRecurringData) ? this.getRecurringData.next_due : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            inv_logic: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.getRecurringData) ? this.getRecurringData.inv_logic : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            inv_days: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.getRecurringData) ? this.getRecurringData.inv_days : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            inv_weekday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.getRecurringData) ? this.getRecurringData.inv_weekday : ''),
            repetition_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            times: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((+this.isRepetition === 3 && this.getRecurringData) ? this.getRecurringData.times : 6),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.getRecurringData) ? this.getRecurringData.notes : ''),
            repeat_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((+this.isRepetition === 2 && this.getRecurringData) ? this.getRecurringData.repeat_date : null),
            repeat_indefinitely: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((+this.isRepetition === 1 && this.getRecurringData) ? this.getRecurringData.repeat_indefinitely : new Date(new Date().getTime() + (60 * 60 * 24 * 1095000)))
        });
        // Check Here Single Client or Multiple Client
        if (this.getRecurringData && this.getRecurringData.rec_type === 2) {
            this.OnFrequencyChange();
        }
        if (this.getRecurringData && this.getRecurringData.rec_type === 1) {
            this.isMultipleClientName = false;
            this.selectedFilterEntity = this.getRecurringData.entity_id;
            // console.log(this.selectedFilterEntity);
            this.addRecurringForm.get('entity_id').setValue(Number(this.selectedFilterEntity));
        }
    };
    /**
     * Get Service List
     */
    AddRecurringComponent.prototype.getServices = function () {
        var _this = this;
        this._sharedObjService.getServices({}, { 'compare': { 'equal': { 'parent_id': 0 } } }).subscribe(function (response) {
            if (response) {
                _this.serviceList = response;
                _this.serviceListChange = response;
            }
        });
    };
    /**
     * Get Frequency List
     */
    AddRecurringComponent.prototype.getFrequency = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].FREQUENCY, {}, {}).subscribe(function (response) {
            if (response) {
                _this.frequencyList = response.payload.data;
            }
        });
    };
    /**
     * Add recurring form submit
     * @param value
     * @param valid
     */
    AddRecurringComponent.prototype.onSubmitAddRecurringForm = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['repetition_type'] = this.isRepetition;
            form.value['rec_type'] = (this.isMultipleClientName) ? 2 : 1;
            form.value['is_confirm'] = 0;
            form.value['next_due'] = moment__WEBPACK_IMPORTED_MODULE_9__(form.value['next_due']).format('YYYY-MM-DD');
            if (+this.isRepetition === 1) {
                form.value['repeat_indefinitely'] = moment__WEBPACK_IMPORTED_MODULE_9__(form.value['repeat_indefinitely']).format('YYYY-MM-DD');
                delete form.value['times'];
                delete form.value['repeat_date'];
            }
            else if (+this.isRepetition === 2) {
                delete form.value['times'];
                delete form.value['repeat_indefinitely'];
                form.value['repeat_date'] = moment__WEBPACK_IMPORTED_MODULE_9__(form.value['repeat_date']).format('YYYY-MM-DD');
            }
            else if (+this.isRepetition === 3) {
                delete form.value['repeat_date'];
                delete form.value['repeat_indefinitely'];
            }
            if (this.isMultipleClientName) {
                form.value['entity_id'] = form.value['entity_id'].join(',');
            }
            var id = (this.getRecurringData && this.getRecurringData.id > 0) ? this.getRecurringData.id : 0;
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].INVOICE_RECURRING_SAVE + '/' + id, form.value).subscribe(function (response) {
                _this._sharedService.setRecurringData(response.payload);
                _this.onRecurringPreview();
            });
        }
    };
    /**
     * On change due date
     * @param event
     */
    AddRecurringComponent.prototype.onChangeRepetition = function (value) {
        if (value > 0) {
            this.isRepetition = value;
        }
        else {
            this.isRepetition = 0;
        }
    };
    /**
     * On Client Change Get Service list for single client
     * @param selectedData
     */
    AddRecurringComponent.prototype.onClientChange = function (selectedData) {
        var _this = this;
        var entity_id = (selectedData) ? selectedData.id : 0;
        var recurring_id = (this.getRecurringData) ? this.getRecurringData.id : 0;
        if (entity_id > 0) {
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].INVOICE_RECURRING_GETSERVICE, entity_id, { 'recurring_id': recurring_id }).subscribe(function (response) {
                if (response) {
                    _this.serviceList = response.payload.data;
                }
            });
        }
        else {
            this.serviceList = this.serviceListChange;
        }
    };
    /**
     * Service Change need to update fixed fee and frequency for single client
     * @param value
     * @param param
     */
    AddRecurringComponent.prototype.onChangeService = function (value, param) {
        var _this = this;
        if (param === 1) {
            var ServiceData = this.serviceList;
            ServiceData.forEach(function (item) {
                if (+item.id === value) {
                    _this.addRecurringForm.patchValue({ 'fixed_fee': item.inc_in_ff });
                    if (item.frequency_id === 0) {
                        _this.addRecurringForm.patchValue({ 'frequency_id': null });
                    }
                    else {
                        _this.addRecurringForm.patchValue({ 'frequency_id': item.frequency_id });
                    }
                }
            });
        }
    };
    /**
     * For Frequency Change need to get entity list for multiple client
     */
    AddRecurringComponent.prototype.OnFrequencyChange = function () {
        var _this = this;
        var frequency_id = Number(this.addRecurringForm.get('frequency_id').value);
        var service_id = Number(this.addRecurringForm.get('service_id').value);
        var fixed_fee = Number(this.addRecurringForm.get('fixed_fee').value);
        var recurring_id = (this.getRecurringData && this.getRecurringData.id > 0) ? this.getRecurringData.id : 0;
        // console.log(this.getRecurringData);
        var params = { 'service_id': service_id, 'fixedfee': fixed_fee, 'frequency_id': frequency_id, 'recurring_id': recurring_id };
        if (frequency_id > 0 && fixed_fee >= 0 && service_id > 0) {
            this.clientListMultiple = [];
            this.unselectAll();
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].INVOICE_RECURRING_GETENTITY, 0, params).subscribe(function (response) {
                if (response) {
                    _this.clientListMultiple = (response.payload.data.length) ? response.payload.data : [];
                    if (_this.clientListMultiple && !_this.isFrequencyChange) {
                        if (_this.getRecurringData && _this.getRecurringData.rec_type === 2) {
                            _this.selectedFilterEntity = _this.getArrayToString(_this.getRecurringData.entity_id, ',');
                            _this.addRecurringForm.get('entity_id').setValue(_this.selectedFilterEntity);
                            _this.isFrequencyChange = true;
                        }
                    }
                    else {
                        _this.selectedFilterEntity = [];
                    }
                }
            });
        }
    };
    /**
     * On change type of recurring form
     * @param event
     */
    AddRecurringComponent.prototype.onChangeType = function (event) {
        if (+event === 1) {
            this.isMultipleClientName = true;
        }
        else {
            this.isMultipleClientName = false;
        }
    };
    /**
     * Select All Client
     */
    AddRecurringComponent.prototype.selectAll = function () {
        this.selectedFilterEntity = this.clientListMultiple.map(function (x) { return x.id; });
        this.addRecurringForm.get('entity_id').setValue(this.selectedFilterEntity);
    };
    /**
     * UnSelect All Client
     */
    AddRecurringComponent.prototype.unselectAll = function () {
        this.selectedFilterEntity = [];
        this.addRecurringForm.get('entity_id').setValue(null);
    };
    /**
     * On invoice redirection
     */
    AddRecurringComponent.prototype.onInvoice = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].INVOICES_DASHBOARD]);
    };
    /**
     *
     */
    AddRecurringComponent.prototype.onManageRecurring = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].MANAGE_RECURRING]);
    };
    /**
     * Preview Recurring
     */
    AddRecurringComponent.prototype.onRecurringPreview = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].PREVIEW_RECURRING]);
    };
    /**
     * Get array values from string
     * @param {string} value
     * @param {string} seperator
     * @returns {string[]}
     */
    AddRecurringComponent.prototype.getArrayToString = function (value, seperator) {
        if (value) {
            var valueOne_1 = [];
            value.split(seperator).map(function (item) {
                valueOne_1.push(Number(item));
            });
            return valueOne_1;
        }
    };
    AddRecurringComponent.prototype.ngOnDestroy = function () {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["GLOBALDATAKEYS"].PREVIOUS_RECURRING, null);
    };
    /**
     * On Client Change Update Count
     */
    AddRecurringComponent.prototype.onClientChangeUpdateCount = function (selectedData) {
        if (selectedData) {
            this.selectedFilterEntity = selectedData.map(function (x) { return x.id; });
        }
    };
    /**
     * On home page route
     */
    AddRecurringComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    AddRecurringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-recurring',
            template: __webpack_require__(/*! ./add-recurring.component.html */ "./src/app/admin/billing-module/invoices/recurring/add-recurring/add-recurring.component.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"]],
            styles: [__webpack_require__(/*! ./add-recurring.component.scss */ "./src/app/admin/billing-module/invoices/recurring/add-recurring/add-recurring.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_11__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], AddRecurringComponent);
    return AddRecurringComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/recurring/client-view-dialog/client-view-dialog.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/client-view-dialog/client-view-dialog.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Invoice log Dialog  -->\r\n<div class=\"large-modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">CLIENTS</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onCloseDialog()\">close</i></a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <!-- Start Request Table -->\r\n    <mat-chip-list>\r\n      <mat-chip *ngFor=\"let clientName of clientList\">\r\n        {{clientName}}\r\n      </mat-chip>\r\n    </mat-chip-list>\r\n    <!-- End Request Table -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/recurring/client-view-dialog/client-view-dialog.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/client-view-dialog/client-view-dialog.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ClientViewDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientViewDialogComponent", function() { return ClientViewDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
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


var ClientViewDialogComponent = /** @class */ (function () {
    // Angular Variables
    function ClientViewDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.clientList = [];
    }
    ClientViewDialogComponent.prototype.ngOnInit = function () {
        this.clientList = (this.data['content']) ? this.data['content'].split(',') : [];
    };
    /**
     * activity dialog redirection
     */
    ClientViewDialogComponent.prototype.onCloseDialog = function () {
        this.dialogRef.close();
    };
    // Esc Event
    ClientViewDialogComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onCloseDialog();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ClientViewDialogComponent.prototype, "onKeydownHandler", null);
    ClientViewDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-view-dialog',
            template: __webpack_require__(/*! ./client-view-dialog.component.html */ "./src/app/admin/billing-module/invoices/recurring/client-view-dialog/client-view-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ClientViewDialogComponent);
    return ClientViewDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/recurring/manage-recurring/manage-recurring.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/manage-recurring/manage-recurring.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-on-off-invoice-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>BILLING</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a (click)=\"onInvoice()\">INVOICE</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">MANAGE RECURRING</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n\r\n\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <button (click)=\"onAddRecurring()\" *ngIf=\"tabData['add_edit']\" type=\"button\" class=\"open-dialog-btn\">\r\n            <mat-icon>add</mat-icon>\r\n            Add Recurring\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onOpenFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n          <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <mat-icon\r\n            class=\"material-icons\">close</mat-icon></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Name\" formControlName=\"recurring_name\"/>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <ng-select [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"billing_name\"\r\n                         placeholder=\"Billing Name\"\r\n                         bindValue=\"entity_id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"entity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Service\" formControlName=\"service_id\">\r\n                  <mat-option *ngFor=\"let service of serviceList\" [value]=\"service?.id\">\r\n                    {{ service?.service_name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Fixed Fee\" formControlName=\"fixed_fee\">\r\n                  <mat-option value=\"1\">Yes</mat-option>\r\n                  <mat-option value=\"0\">No</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Select Frequency\" formControlName=\"frequency_id\">\r\n                  <mat-option *ngFor=\"let frequency of frequencyList\" [value]=\"frequency?.id\">\r\n                    {{ frequency?.frequency_name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Repetition\" formControlName=\"repetition_type\">\r\n                  <mat-option *ngFor=\"let recurringType of recurringRepetitionData\" [value]=\"recurringType?.key\">\r\n                    {{ recurringType?.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"invoicedate\" placeholder=\"Invoice creation date\"\r\n                       formControlName=\"invoice_date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"invoicedate\"></mat-datepicker-toggle>\r\n                <mat-datepicker #invoicedate></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Status\" formControlName=\"is_active\">\r\n                  <mat-option value=\"1\">Active</mat-option>\r\n                  <mat-option value=\"0\">Inactive</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 MT-20 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"recurringName.value\">\r\n          <span class=\"tag__title\">Name :</span>\r\n          <span>\r\n             <mat-form-field>\r\n             <input matInput placeholder=\"Name\" formControlName=\"recurring_name\"\r\n                    (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('recurring_name','recurring_name')\">close\r\n          </mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"entityId.value\">\r\n          <span class=\"tag__title\">Billing Name :</span>\r\n          <span>\r\n          <ng-select [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"billing_name\"\r\n                     placeholder=\"Billing Name\"\r\n                     bindValue=\"entity_id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"entity_id\"\r\n                     (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n          </ng-select>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id', 'entity_id')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"serviceId.value\">\r\n          <span class=\"tag__title\">Service :</span>\r\n          <span>\r\n             <mat-form-field>\r\n              <mat-select placeholder=\"Select Service\" formControlName=\"service_id\"\r\n                          (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                 <mat-option *ngFor=\"let service of serviceList\" [value]=\"service?.id\">\r\n                    {{ service?.service_name }}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('service_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"fixedFee.value\">\r\n          <span class=\"tag__title\">Fixed Fee :</span>\r\n          <span>\r\n             <mat-form-field>\r\n              <mat-select placeholder=\"Yes\" formControlName=\"fixed_fee\"\r\n                          (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                 <mat-option value=\"1\">Yes</mat-option>\r\n                  <mat-option value=\"0\">No</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('fixed_fee')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"frequencyId.value\">\r\n          <span class=\"tag__title\">Frequency :</span>\r\n          <span>\r\n             <mat-form-field>\r\n              <mat-select placeholder=\"Select Frequency\" formControlName=\"frequency_id\"\r\n                          (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                 <mat-option *ngFor=\"let frequency of frequencyList\" [value]=\"frequency?.id\">\r\n                    {{ frequency?.frequency_name }}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('frequency_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"repetitionType.value\">\r\n          <span class=\"tag__title\">Repetition :</span>\r\n          <span>\r\n             <mat-form-field>\r\n              <mat-select placeholder=\"indentified\" formControlName=\"repetition_type\"\r\n                          (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                 <mat-option *ngFor=\"let recurringType of recurringRepetitionData\" [value]=\"recurringType?.key\">\r\n                    {{ recurringType?.label }}\r\n                  </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('repetition_type')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"invoiceDate.value\">\r\n          <span class=\"tag__title\">Invoice creation date :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"invoicedate1\" placeholder=\"Select Date\" #dateRef\r\n                     formControlName=\"invoice_date\"\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                     (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"invoicedate1\"></mat-datepicker-toggle>\r\n              <mat-datepicker #invoicedate1></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('invoice_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"isActive.value\">\r\n          <span class=\"tag__title\">Status :</span>\r\n          <span>\r\n             <mat-form-field>\r\n              <mat-select placeholder=\"Status\" formControlName=\"is_active\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                <mat-option value=\"1\">Active</mat-option>\r\n                <mat-option value=\"0\">Inactive</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('is_active')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\"\r\n             *ngIf=\" entityId.value || serviceId.value || fixedFee.value || frequencyId.value || repetitionType.value || invoiceDate.value || isActive.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"4%\">Sr.No</th>\r\n\r\n            <th width=\"12%\"\r\n                (click)=\"getSortData('recurring_name', sortBy === 'recurring_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Name\r\n              <i *ngIf=\"sortBy === 'recurring_name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'recurring_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'recurring_name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'recurring_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"12%\"\r\n                (click)=\"getSortData('billing_name', sortBy === 'billing_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Billing Name\r\n              <i *ngIf=\"sortBy === 'billing_name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'billing_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'billing_name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'billing_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"8%\"\r\n                (click)=\"getSortData('service_id', sortBy === 'service_id' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Service\r\n              <i *ngIf=\"sortBy === 'service_id'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'service_id' && sortOrder === 'asc', 'icon-down' :  sortBy === 'service_id' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'service_id' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"6%\"\r\n                (click)=\"getSortData('fixed_fee', sortBy === 'fixed_fee' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Fixed Fee\r\n              <i *ngIf=\"sortBy === 'fixed_fee'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'fixed_fee' && sortOrder === 'asc', 'icon-down' :  sortBy === 'fixed_fee' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'fixed_fee' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"8%\"\r\n                (click)=\"getSortData('frequency_id', sortBy === 'frequency_id' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Frequency\r\n              <i *ngIf=\"sortBy === 'frequency_id'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'frequency_id' && sortOrder === 'asc', 'icon-down' :  sortBy === 'frequency_id' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'frequency_id' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"7%\">Start Date</th>\r\n\r\n            <th width=\"7%\">Last Date</th>\r\n\r\n            <th width=\"8%\"\r\n                (click)=\"getSortData('repetition_type', sortBy === 'repetition_type' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Repetition\r\n              <i *ngIf=\"sortBy === 'repetition_type'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'repetition_type' && sortOrder === 'asc', 'icon-down' :  sortBy === 'repetition_type' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'repetition_type' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"10%\">Notes</th>\r\n\r\n            <th width=\"8%\"\r\n                (click)=\"getSortData('modified_by', sortBy === 'modified_by' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Last Modified By\r\n              <i *ngIf=\"sortBy === 'modified_by'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'modified_by' && sortOrder === 'asc', 'icon-down' :  sortBy === 'modified_by' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'modified_by' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"10%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody *ngIf=\"recurringList.length\">\r\n            <tr *ngFor=\"let recurring of recurringList; let i = index;\">\r\n              <td width=\"4%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"12%\">{{recurring?.recurring_name}}</td>\r\n              <td width=\"12%\">\r\n                <div *ngIf=\"recurring?.entity_name\">\r\n                  <div class=\"client-name-list\" *ngIf=\"recurring?.entity_name.split(',').length > 1\"\r\n                       (click)=\"onOpenClientList(recurring)\">\r\n                    <span *ngFor=\"let j of recurring?.entity_name.split(',') | slice:0:3\">{{j.charAt(0)}}</span>\r\n                    <span *ngIf=\"recurring?.entity_name.split(',').length - 3 > 0\" class=\"reset-count\">+{{recurring?.entity_name.split(',').length - 3}}</span>\r\n                  </div>\r\n                  <div class=\"client-name-list\" *ngIf=\"recurring?.entity_name.split(',').length <= 1\">\r\n                    <div>{{recurring?.entity_name}}</div>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td width=\"8%\">{{recurring?.service_name}}</td>\r\n              <td width=\"6%\">\r\n                <span class=\"turquoise-color fw-500\" *ngIf=\"recurring?.fixed_fee == 1\"><mat-icon\r\n                  class=\"grid_icon_trip_origin mat-icon material-icons\">trip_origin</mat-icon>Yes</span>\r\n                <span class=\"red-color fw-500\" *ngIf=\"recurring?.fixed_fee !== 1\"><mat-icon\r\n                  class=\"grid_icon_trip_origin mat-icon material-icons\">trip_origin</mat-icon>No</span>\r\n              </td>\r\n              <td width=\"8%\">{{recurring?.frequency_name}}</td>\r\n              <td width=\"7%\">{{recurring?.next_due | date : 'dd-MM-yyyy'}}</td>\r\n              <td width=\"7%\">{{recurring?.last_due | date : 'dd-MM-yyyy'}}</td>\r\n              <td width=\"8%\" *ngIf=\"recurring?.repetition_type === 3\">{{recurring?.times + ' times'}}</td>\r\n              <td width=\"8%\" *ngIf=\"recurring?.repetition_type === 2\">Till {{recurring?.repeat_date | date: 'dd-MM-yyyy'\r\n                }}\r\n              </td>\r\n              <td width=\"8%\" *ngIf=\"recurring?.repetition_type === 1\">{{recurring?.repeat_indefinitely | date:\r\n                'dd-MM-yyyy' }}\r\n              </td>\r\n              <td width=\"8%\" *ngIf=\"recurring?.repetition_type === 0\"></td>\r\n              <td width=\"10%\">{{recurring?.notes}}</td>\r\n              <td width=\"8%\">{{recurring?.modified_by?.userfullname}} {{recurring?.modified_on | date : 'dd-MM-yyyy'}}\r\n              </td>\r\n              <td width=\"10%\">\r\n                <mat-icon class=\"wet-asphalt-color\" *ngIf=\"tabData['view']\" [matTooltip]=\"'View'\"\r\n                          (click)=\"openRecurringView(recurring)\">remove_red_eye\r\n                </mat-icon>\r\n                <mat-icon class=\"orange-color\" *ngIf=\"tabData['add_edit']\" [matTooltip]=\"'Edit'\"\r\n                          (click)=\"openAddRecurring(recurring)\">edit\r\n                </mat-icon>\r\n                <mat-icon class=\"wet-asphalt-color\" [matTooltip]=\"'History'\"\r\n                          (click)=\"viewRecurringInfoHistory(recurring)\">history\r\n                </mat-icon>\r\n                <mat-slide-toggle *ngIf=\"slideActiveInactive[i] && tabData['add_edit']\"\r\n                                  [(ngModel)]=\"slideActiveInactive[i]\"\r\n                                  (change)=\"openToggleConfirmationDialog($event, recurring, i)\"></mat-slide-toggle>\r\n                <mat-slide-toggle *ngIf=\"!slideActiveInactive[i] && tabData['add_edit']\"\r\n                                  [checked]=\"(recurring?.is_active) ? true : false\"\r\n                                  (change)=\"openToggleConfirmationDialog($event, recurring, i)\"></mat-slide-toggle>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table *ngIf=\"recurringList.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n    <div *ngIf=\"recurringList.length === 0\" class=\"panel-title red-color\">\r\n      No Records Found!\r\n    </div>\r\n  </div>\r\n  <!-- End Data Grid -->\r\n\r\n</div>\r\n<!-- Start History modal-->\r\n<div *ngIf=\"isOpenHistoryDialog\">\r\n  <app-history-dialog (close)=\"isOpenHistoryDialog = false\"></app-history-dialog>\r\n</div>\r\n<!-- End History modal-->\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/recurring/manage-recurring/manage-recurring.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/manage-recurring/manage-recurring.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2ludm9pY2VzL3JlY3VycmluZy9tYW5hZ2UtcmVjdXJyaW5nL21hbmFnZS1yZWN1cnJpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/recurring/manage-recurring/manage-recurring.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/manage-recurring/manage-recurring.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ManageRecurringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageRecurringComponent", function() { return ManageRecurringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _client_view_dialog_client_view_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client-view-dialog/client-view-dialog.component */ "./src/app/admin/billing-module/invoices/recurring/client-view-dialog/client-view-dialog.component.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_components_common_history_dialog_common_history_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/components/common-history-dialog/common-history-dialog.component */ "./src/utility/components/common-history-dialog/common-history-dialog.component.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ManageRecurringComponent = /** @class */ (function () {
    function ManageRecurringComponent(_fb, dialog, _router, _commonCrudService, _sharedObjService, _sharedService) {
        this._fb = _fb;
        this.dialog = dialog;
        this._router = _router;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        // Data Variables
        this.recurringList = [];
        this.serviceList = [];
        this.frequencyList = [];
        this.recurringRepetitionData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["recurringRepetition"];
        this.slideActiveInactive = [];
        this.clientList = [];
        this.equalJSON = {};
        this.likeJSON = {};
        this.findInSetJSON = {};
        this.inJSON = {};
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilterView = false;
        this.isOpenHistoryDialog = false;
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].BILLING_RECURRING;
    }
    Object.defineProperty(ManageRecurringComponent.prototype, "recurringName", {
        // get form control
        get: function () {
            return this.filterForm.get('recurring_name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageRecurringComponent.prototype, "entityId", {
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageRecurringComponent.prototype, "serviceId", {
        get: function () {
            return this.filterForm.get('service_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageRecurringComponent.prototype, "fixedFee", {
        get: function () {
            return this.filterForm.get('fixed_fee');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageRecurringComponent.prototype, "frequencyId", {
        get: function () {
            return this.filterForm.get('frequency_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageRecurringComponent.prototype, "repetitionType", {
        get: function () {
            return this.filterForm.get('repetition_type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageRecurringComponent.prototype, "invoiceDate", {
        get: function () {
            return this.filterForm.get('invoice_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManageRecurringComponent.prototype, "isActive", {
        get: function () {
            return this.filterForm.get('is_active');
        },
        enumerable: true,
        configurable: true
    });
    ManageRecurringComponent.prototype.ngOnInit = function () {
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.createAdvanceFilterForm();
        // this.getRecurringList(1, 'id', 'desc');
        this.getClientList();
        this.getServices();
        this.getFrequency();
        this.setAdvanceFilter(this.filterForm);
    };
    /**
     * Get Client List
     */
    ManageRecurringComponent.prototype.getClientList = function () {
        var _this = this;
        // this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
        //   this.clientList = response;
        // });
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BILLING_BASIC, { 'records': 'all' }, { 'compare': { 'equal': { 'parent_id': 0 } } }).subscribe(function (response) {
            _this.clientList = response.payload.data;
        });
    };
    /**
     * Default search params for client listing API
     * @returns {{compare: {notequal: {discontinue_stage: number}}}}
     */
    ManageRecurringComponent.prototype.getClientSearchParam = function () {
        return {
            compare: {
                notequal: {
                    discontinue_stage: 2
                }
            }
        };
    };
    /**
     * Create Advance Filter Form
     */
    ManageRecurringComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            recurring_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            fixed_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            repetition_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            invoice_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date()),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('1')
        });
        this.advanceFilterForm = this._fb.group({
            recurring_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            fixed_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            repetition_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            invoice_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date()),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('1')
        });
    };
    /**
     * Initialization Methods
     */
    ManageRecurringComponent.prototype.getRecurringList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].INVOICE_RECURRING_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            if (response) {
                _this.recurringList = response.payload.data;
                _this.page = response.pager.pageNumber;
                _this.pageIndex = _this.page - 1;
                _this.totalRecords = +response.pager.totalRecords;
                _this.sortBy = response.pager.sortBy;
                _this.sortOrder = response.pager.sortOrder;
            }
        });
    };
    /**
     * Get Service List
     */
    ManageRecurringComponent.prototype.getServices = function () {
        var _this = this;
        this._sharedObjService.getServices({}, { 'compare': { 'equal': { 'parent_id': 0 } } }).subscribe(function (response) {
            if (response) {
                _this.serviceList = response;
            }
        });
    };
    /**
     * Get Frequency List
     */
    ManageRecurringComponent.prototype.getFrequency = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].FREQUENCY, {}, {}).subscribe(function (response) {
            if (response) {
                _this.frequencyList = response.payload.data;
            }
        });
    };
    /**
     * Active Inactive Recurring Data
     * @param {boolean} action
     * @param {Recurring} recurringData
     */
    ManageRecurringComponent.prototype.activeInactiveRecurring = function (action, recurringData) {
        var _this = this;
        var params = { 'is_active': action ? 1 : 0, '_method': 'put' };
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].INVOICE_RECURRING_ACTIVE, recurringData.id, params).subscribe(function (response) {
            _this.recurringList.map(function (item) {
                if (item.id === recurringData.id) {
                    item.is_active = item.is_active ? 0 : 1;
                }
            });
        });
    };
    /**
     * Display Repetiton Type
     * @param {number} recurringRepetition
     * @returns {string}
     */
    ManageRecurringComponent.prototype.getRecurringRepetitonData = function (recurringID) {
        var val = this.recurringRepetitionData.filter(function (elem) { return elem.key === recurringID; });
        return (val.length) ? val[0].showInGrid : '';
    };
    /**
     *  Toggle confirmation Dialog
     */
    ManageRecurringComponent.prototype.openToggleConfirmationDialog = function (event, recurringData, id) {
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
                _this.activeInactiveRecurring(event.checked, recurringData);
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
     * Toogle Filter
     */
    ManageRecurringComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    ManageRecurringComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    ManageRecurringComponent.prototype.deleteMsg = function (index) {
    };
    /**
     * Pagination page change method
     * @param event
     */
    ManageRecurringComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getRecurringList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Clear tag method
     */
    ManageRecurringComponent.prototype.onClearTags = function () {
    };
    /**
     * On invoice redirection
     */
    ManageRecurringComponent.prototype.onInvoice = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].INVOICES_DASHBOARD]);
    };
    ManageRecurringComponent.prototype.openAddRecurring = function (recurring) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["GLOBALDATAKEYS"].RECURRING, recurring);
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADD_RECURRING, '_blank');
        });
    };
    ManageRecurringComponent.prototype.openRecurringView = function (recurring) {
        if (recurring) {
            this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["GLOBALDATAKEYS"].RECURRING, recurring);
            this._router.navigate([]).then(function (result) {
                window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].VIEW_RECURRING, '_blank');
            });
        }
    };
    ManageRecurringComponent.prototype.onOpenClientList = function (recurring) {
        var dialogRef = this.dialog.open(_client_view_dialog_client_view_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ClientViewDialogComponent"], {
            panelClass: 'view-client-dialog-container',
            data: {
                content: recurring.entity_name
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * View Recurring Information History
     * @param recurringData
     */
    ManageRecurringComponent.prototype.viewRecurringInfoHistory = function (recurringData) {
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].INVOICE_RECURRING_HISTORY + '/' + recurringData.id,
        };
        var recurringDataAll = this._sharedService.setHistoryURL(value);
        var dialogRef = this.dialog.open(_utility_components_common_history_dialog_common_history_dialog_component__WEBPACK_IMPORTED_MODULE_12__["CommonHistoryDialogComponent"], {
            panelClass: 'view-client-dialog-container',
            data: {
                'recurring': recurringDataAll,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     viewRecurringInfoHistory (recurringData: Recurring) {
      const value = {
        url: AdminAPI.INVOICE_RECURRING_HISTORY + '/' + recurringData.id,
      };
      this._sharedService.setHistoryURL(value);
      this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
    } */
    /**
     * Esc event for close modal
     * @param event
     */
    ManageRecurringComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    ManageRecurringComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue('');
        this.advanceFilterForm.get(elementName).setValue('');
        if (elementName === 'service_id' || elementName === 'fixed_fee' || elementName === 'frequency_id' || elementName === 'repetition_type' || elementName === 'invoice_date' || elementName === 'is_active') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'recurring_name') {
            delete this.likeJSON[elementName];
        }
        else if (elementName === 'entity_id') {
            delete this.findInSetJSON[elementName];
        }
        this.getRecurringList(1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    ManageRecurringComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.filterForm.patchValue({ 'is_active': null });
        this.filterForm.patchValue({ 'invoice_date': null });
        this.advanceFilterForm.patchValue({ 'is_active': null });
        this.advanceFilterForm.patchValue({ 'invoice_date': null });
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.findInSetJSON = {};
        this.isOpenFilterView = false;
        this.getRecurringList(1, 'id', 'desc');
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    ManageRecurringComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'recurring_name': form.value['recurring_name'],
                'entity_id': form.value['entity_id'],
                'service_id': form.value['service_id'],
                'fixed_fee': form.value['fixed_fee'],
                'frequency_id': form.value['frequency_id'],
                'repetition_type': form.value['repetition_type'],
                'invoice_date': form.value['invoice_date'],
                'is_active': form.value['is_active'],
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    ManageRecurringComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.findInSetJSON = {};
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
        // For Multiple Entity ID
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'entity_id' || key === 'invoice_date' || key === 'repetition_type' || key === 'frequency_id' || key === 'fixed_fee' || key === 'service_id' || key === 'is_active') {
                        if (key === 'entity_id') {
                            this.findInSetJSON[key] = [form.value[key]];
                        }
                        else if (key === 'invoice_date') {
                            this.equalJSON[key] = moment__WEBPACK_IMPORTED_MODULE_10__(form.value[key]).format('YYYY-MM-DD');
                        }
                        else {
                            this.equalJSON[key] = form.value[key];
                        }
                    }
                    else if (key === 'recurring_name') {
                        this.likeJSON[key] = form.value[key];
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getRecurringList(1, 'id', 'desc');
        }
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    ManageRecurringComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    ManageRecurringComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getRecurringList(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    ManageRecurringComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
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
    /**
     *  add Recurring redirection
     */
    ManageRecurringComponent.prototype.onAddRecurring = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADD_RECURRING]);
    };
    /**
     * On home page route
     */
    ManageRecurringComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ManageRecurringComponent.prototype, "onKeydownHandler", null);
    ManageRecurringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-recurring',
            template: __webpack_require__(/*! ./manage-recurring.component.html */ "./src/app/admin/billing-module/invoices/recurring/manage-recurring/manage-recurring.component.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"]],
            styles: [__webpack_require__(/*! ./manage-recurring.component.scss */ "./src/app/admin/billing-module/invoices/recurring/manage-recurring/manage-recurring.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_13__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"]])
    ], ManageRecurringComponent);
    return ManageRecurringComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/recurring/recurring-preview/recurring-preview.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/recurring-preview/recurring-preview.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-on-off-invoice-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <i class=\"material-icons cursor-pointer\">home</i>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>BILLING</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span><a (click)=\"onInvoice()\">INVOICE</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span><a (click)=\"onAddRecurring()\">{{(selectedData && selectedData['id'] > 0) ? 'EDIT RECURRING' : 'ADD RECURRING'}}</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">RECURRING PREVIEW</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <span class=\"panel-title ML-0\">Client :</span>\r\n          <span *ngFor=\"let client of clientList; let i = index\" class=\"MB-10\">\r\n            {{i+1}} . {{client}} |\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n            <th width=\"30%\">Invoice Frequency</th>\r\n            <th width=\"35%\">Invoice Period</th>\r\n            <th width=\"30%\">Invoice Date</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let previewreview of previewreviewList; let j = index\">\r\n              <td width=\"5%\">{{j+1}}</td>\r\n              <td width=\"30%\">{{previewreview['frequency']}}</td>\r\n              <td width=\"35%\">{{previewreview['startDate'] | date : 'dd-MM-yyyy'}} - {{previewreview['endDate'] | date :\r\n                'dd-MM-yyyy'}}\r\n              </td>\r\n              <td width=\"30%\">{{previewreview['InvoiceDate'] | date : 'dd-MM-yyyy'}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 MB-20\">\r\n      <div class=\"row MT-30\">\r\n        <div class=\"col-md-6 PL-0\">\r\n        </div>\r\n        <div class=\"col-md-6 text-right PR-0\">\r\n          <button (click)=\"onAddRecurring()\" type=\"button\" class=\"btn-default MR-5\">Back For Change</button>\r\n          <button (click)=\"onSubmitForm()\" type=\"submit\" class=\"btn-primary\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/recurring/recurring-preview/recurring-preview.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/recurring-preview/recurring-preview.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2ludm9pY2VzL3JlY3VycmluZy9yZWN1cnJpbmctcHJldmlldy9yZWN1cnJpbmctcHJldmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/recurring/recurring-preview/recurring-preview.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/recurring-preview/recurring-preview.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RecurringPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecurringPreviewComponent", function() { return RecurringPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecurringPreviewComponent = /** @class */ (function () {
    function RecurringPreviewComponent(_router, _sharedService, _commonCrudService) {
        this._router = _router;
        this._sharedService = _sharedService;
        this._commonCrudService = _commonCrudService;
        // Data Variables
        this.previewreviewList = [];
        this.clientList = '';
        this.recurringData = [];
        this.selectedData = [];
        // Date variables
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    RecurringPreviewComponent.prototype.ngOnInit = function () {
        this.recurringData = this._sharedService.getRecurringData();
        this.previewreviewList = this.recurringData['data'];
        this.clientList = this.recurringData['entityName'].split(',');
        this.selectedData = this.recurringData['selectedData'];
        if (!this.recurringData) {
            this.onAddRecurring();
        }
    };
    /**
     * On invoice redirection
     */
    RecurringPreviewComponent.prototype.onInvoice = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].INVOICES_DASHBOARD]);
    };
    /**
     * On invoice redirection
     */
    RecurringPreviewComponent.prototype.onAddRecurring = function () {
        if (this.selectedData) {
            this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["GLOBALDATAKEYS"].PREVIOUS_RECURRING, this.selectedData);
        }
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].ADD_RECURRING]);
    };
    /**
     *
     */
    RecurringPreviewComponent.prototype.onManageRecurring = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].MANAGE_RECURRING]);
    };
    /**
     * On invoice redirection
     */
    RecurringPreviewComponent.prototype.onSubmitForm = function () {
        var _this = this;
        this.selectedData['confirm'] = 1;
        if (this.selectedData['id'] > 0) {
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].INVOICE_RECURRING_SAVE, this.selectedData['id'], this.selectedData).subscribe(function (response) {
                _this.onManageRecurring();
                _this._sharedService.setRecurringData(null);
            });
        }
        else {
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].INVOICE_RECURRING_SAVE + '/' + 0, this.selectedData).subscribe(function (response) {
                _this.onManageRecurring();
                _this._sharedService.setRecurringData(null);
            });
        }
    };
    RecurringPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recurring-preview',
            template: __webpack_require__(/*! ./recurring-preview.component.html */ "./src/app/admin/billing-module/invoices/recurring/recurring-preview/recurring-preview.component.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]],
            styles: [__webpack_require__(/*! ./recurring-preview.component.scss */ "./src/app/admin/billing-module/invoices/recurring/recurring-preview/recurring-preview.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]])
    ], RecurringPreviewComponent);
    return RecurringPreviewComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/recurring/recurring-view/recurring-view.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/recurring-view/recurring-view.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-on-off-invoice-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>BILLING</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a (click)=\"onInvoice()\">INVOICE</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a (click)=\"onManageRecurring()\">RECURRING</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">RECURRING VIEW</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 inner-header-title\">\r\n          <span class=\"panel-title ML-0\">Client :</span>\r\n          <span *ngFor=\"let client of clientList; let i = index\" class=\"MB-10\">\r\n            <span class=\"fw-500 MR-5 primary-color\">{{i+1}}.</span> <span class=\"back-color MR-10\">{{client}}</span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n            <th width=\"30%\">Invoice Frequency</th>\r\n            <th width=\"35%\">Invoice Period</th>\r\n            <th width=\"30%\">Invoice Date</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body table-body-without-filter\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let previewreview of previewreviewList; let j = index\">\r\n              <td width=\"5%\">{{j + 1}}</td>\r\n              <td width=\"30%\">{{previewreview?.frequency_name}}</td>\r\n              <td width=\"35%\">{{previewreview?.start_date | date : 'dd-MM-yyyy'}} - {{previewreview?.end_date | date :\r\n                'dd-MM-yyyy'}}\r\n              </td>\r\n              <td width=\"30%\">{{previewreview?.invoice_date | date : 'dd-MM-yyyy'}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/recurring/recurring-view/recurring-view.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/recurring-view/recurring-view.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2ludm9pY2VzL3JlY3VycmluZy9yZWN1cnJpbmctdmlldy9yZWN1cnJpbmctdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/recurring/recurring-view/recurring-view.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/recurring-view/recurring-view.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: RecurringViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecurringViewComponent", function() { return RecurringViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecurringViewComponent = /** @class */ (function () {
    function RecurringViewComponent(_router, _sharedService, _commonCrudService) {
        this._router = _router;
        this._sharedService = _sharedService;
        this._commonCrudService = _commonCrudService;
        // Data Variables
        this.previewreviewList = [];
        this.clientList = '';
        // Date variables
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
    }
    RecurringViewComponent.prototype.ngOnInit = function () {
        this.recurringData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["GLOBALDATAKEYS"].RECURRING);
        if (this.recurringData) {
            var recurring_id = this.recurringData.id;
            this.getRecurringViewDetails(recurring_id);
        }
    };
    /**
     * Initialization Methods
     */
    RecurringViewComponent.prototype.getRecurringViewDetails = function (recurring_id) {
        var _this = this;
        if (recurring_id > 0) {
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].INVOICE_RECURRING_VIEW, recurring_id, {}).subscribe(function (response) {
                if (response) {
                    _this.previewreviewList = response.payload.data;
                    if (response.payload.entityName) {
                        _this.clientList = response.payload.entityName.split(',');
                    }
                }
            });
        }
    };
    /**
     * On invoice redirection
     */
    RecurringViewComponent.prototype.onInvoice = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].INVOICES_DASHBOARD]);
    };
    /**
     * On manage recurring
     */
    RecurringViewComponent.prototype.onManageRecurring = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].MANAGE_RECURRING]);
    };
    RecurringViewComponent.prototype.ngOnDestroy = function () {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["GLOBALDATAKEYS"].RECURRING, null);
    };
    /**
     * On home page route
     */
    RecurringViewComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    RecurringViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recurring-view',
            template: __webpack_require__(/*! ./recurring-view.component.html */ "./src/app/admin/billing-module/invoices/recurring/recurring-view/recurring-view.component.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]],
            styles: [__webpack_require__(/*! ./recurring-view.component.scss */ "./src/app/admin/billing-module/invoices/recurring/recurring-view/recurring-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]])
    ], RecurringViewComponent);
    return RecurringViewComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/recurring/recurring.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/recurring/recurring.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RecurringModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecurringModule", function() { return RecurringModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _add_recurring_add_recurring_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-recurring/add-recurring.component */ "./src/app/admin/billing-module/invoices/recurring/add-recurring/add-recurring.component.ts");
/* harmony import */ var _manage_recurring_manage_recurring_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-recurring/manage-recurring.component */ "./src/app/admin/billing-module/invoices/recurring/manage-recurring/manage-recurring.component.ts");
/* harmony import */ var _recurring_preview_recurring_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recurring-preview/recurring-preview.component */ "./src/app/admin/billing-module/invoices/recurring/recurring-preview/recurring-preview.component.ts");
/* harmony import */ var _recurring_view_recurring_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recurring-view/recurring-view.component */ "./src/app/admin/billing-module/invoices/recurring/recurring-view/recurring-view.component.ts");
/* harmony import */ var _client_view_dialog_client_view_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-view-dialog/client-view-dialog.component */ "./src/app/admin/billing-module/invoices/recurring/client-view-dialog/client-view-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'add-recurring',
        component: _add_recurring_add_recurring_component__WEBPACK_IMPORTED_MODULE_5__["AddRecurringComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    },
    {
        path: 'manage-recurring',
        component: _manage_recurring_manage_recurring_component__WEBPACK_IMPORTED_MODULE_6__["ManageRecurringComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    },
    {
        path: 'recurring-view',
        component: _recurring_view_recurring_view_component__WEBPACK_IMPORTED_MODULE_8__["RecurringViewComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    },
    {
        path: 'recurring-preview',
        component: _recurring_preview_recurring_preview_component__WEBPACK_IMPORTED_MODULE_7__["RecurringPreviewComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var RecurringModule = /** @class */ (function () {
    function RecurringModule() {
    }
    RecurringModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_recurring_add_recurring_component__WEBPACK_IMPORTED_MODULE_5__["AddRecurringComponent"],
                _manage_recurring_manage_recurring_component__WEBPACK_IMPORTED_MODULE_6__["ManageRecurringComponent"],
                _recurring_preview_recurring_preview_component__WEBPACK_IMPORTED_MODULE_7__["RecurringPreviewComponent"],
                _recurring_view_recurring_view_component__WEBPACK_IMPORTED_MODULE_8__["RecurringViewComponent"],
                _client_view_dialog_client_view_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ClientViewDialogComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"]
            ],
            entryComponents: [_client_view_dialog_client_view_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ClientViewDialogComponent"]]
        })
    ], RecurringModule);
    return RecurringModule;
}());



/***/ })

}]);
//# sourceMappingURL=recurring-recurring-module.js.map