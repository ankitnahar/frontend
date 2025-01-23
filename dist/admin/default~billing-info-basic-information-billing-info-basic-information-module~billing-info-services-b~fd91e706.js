(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~billing-info-basic-information-billing-info-basic-information-module~billing-info-services-b~fd91e706"],{

/***/ "./src/app/admin/billing-module/billing-information/billing-info-basic-information/add-more-client-type-dialog/add-more-client-type-dialog.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-basic-information/add-more-client-type-dialog/add-more-client-type-dialog.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start add more bank modal -->\r\n<div class=\"modal large-modal bank-dialog\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Add More Client Type</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <form [formGroup]=\"addClientTypeForm\" #addMoreClientForm=\"ngForm\" (submit)=\"onClientTypeSubmit(addClientTypeForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 PL-0\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Client Type\" formControlName=\"name\" required>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addClientTypeForm.get('name'))\"\r\n                            [errMsg]=\"validationMsg.CLIENT_TYPE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 MT-5\">\r\n          <button [disabled]=\"addClientTypeForm.invalid\" class=\"btn-primary\" type=\"submit\">Save</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"table-container dialog-table-container\">\r\n      <div class=\"table-block\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 PL-0\">\r\n            <div>\r\n              <form [formGroup]=\"filterForm\">\r\n                <mat-form-field floatLabel=\"never\">\r\n                  <input matInput placeholder=\"Search\" formControlName=\"name\" (keyup)=\"setAdvanceFilter(filterForm)\">\r\n                </mat-form-field>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-8 PR-0\">\r\n            <mat-paginator [length]=\"totalRecords\" [pageSize]=\"pageSize\" [pageIndex]=\"pageIndex\"\r\n                           [pageSizeOptions]=\"pageArray\" (page)=\"onPageChange($event)\">\r\n            </mat-paginator>\r\n          </div>\r\n        </div>\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"10%\">Sr. no.</th>\r\n            <th width=\"70%\">Client Type</th>\r\n            <th width=\"20%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n          <tr *ngFor=\"let clientdata of clientType; let i = index\">\r\n            <td width=\"10%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n            <td width=\"70%\">{{clientdata['name']}}</td>\r\n            <td width=\"20%\">\r\n              <mat-icon class=\"orange-color\" [matTooltip]=\"'Edit'\"><i class=\"material-icons\"\r\n                                                                      (click)=\"onEditClientTypeData(clientdata)\">edit</i>\r\n              </mat-icon>\r\n              <mat-slide-toggle *ngIf=\"slideActiveInactive[i]\" [(ngModel)]=\"slideActiveInactive[i]\"\r\n                                (change)=\"openToggleConfirmationDialog($event, clientdata, i)\"></mat-slide-toggle>\r\n              <mat-slide-toggle *ngIf=\"!slideActiveInactive[i]\" [checked]=\"(clientdata['is_active']) ? true : false\"\r\n                                (change)=\"openToggleConfirmationDialog($event, clientdata, i)\"></mat-slide-toggle>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-layer\" (click)=\"onClose()\"></div>\r\n<!-- End add more bank  modal -->\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-basic-information/add-more-client-type-dialog/add-more-client-type-dialog.component.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-basic-information/add-more-client-type-dialog/add-more-client-type-dialog.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: AddMoreClientTypeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoreClientTypeDialogComponent", function() { return AddMoreClientTypeDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
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










var AddMoreClientTypeDialogComponent = /** @class */ (function (_super) {
    __extends(AddMoreClientTypeDialogComponent, _super);
    function AddMoreClientTypeDialogComponent(dialogRef, data, dialog, _fb, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.dialog = dialog;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        // Data Variables
        _this.clientType = [];
        _this.slideActiveInactive = [];
        _this.isClientUpdate = false;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.equalJSON = {};
        _this.likeJSON = {};
        _this.inJSON = {};
        // pagination Data
        _this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].PAGINATION_ARRAY;
        _this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].PAGINATION_ARRAY[1];
        return _this;
    }
    AddMoreClientTypeDialogComponent.prototype.ngOnInit = function () {
        this.clientType = (this.data.clientBelongsToData) ? this.data.clientBelongsToData : [];
        this.createClientTypeForm();
        this.createAdvanceFilterForm();
        this.getClientBelongsToList(1, 'id', 'desc');
    };
    /**
     *
     * @param {number} pageNumber
     * @param {string} key
     * @param {string} val
     */
    AddMoreClientTypeDialogComponent.prototype.getClientBelongsToList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].CLIENT_BELONGSTO, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleClientBelongsToResponse(response);
        });
    };
    /**
     * Handle Client Belongs To Respone
     * @param response
     */
    AddMoreClientTypeDialogComponent.prototype.handleClientBelongsToResponse = function (response) {
        this.clientType = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Create Change InOut
     */
    AddMoreClientTypeDialogComponent.prototype.createClientTypeForm = function () {
        this.addClientTypeForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    /**
     * Create Change InOut
     */
    AddMoreClientTypeDialogComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    /**
     * Pagination page change method
     * @param event
     */
    AddMoreClientTypeDialogComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getClientBelongsToList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    AddMoreClientTypeDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    AddMoreClientTypeDialogComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    AddMoreClientTypeDialogComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getClientBelongsToList(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    AddMoreClientTypeDialogComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_3__["CommonFunctions"].isEmpty(filter)) {
            params['compare'] = filter;
        }
        if (Object.keys(this.inJSON).length !== 0) {
            params['in'] = this.inJSON;
        }
        return params;
    };
    /**
     *  Toggle confirmation Dialog
     */
    AddMoreClientTypeDialogComponent.prototype.openToggleConfirmationDialog = function (event, clientTypeData, id) {
        var _this = this;
        var status = event.checked ? 'Inactive' : 'Active';
        var statusNagetive = !event.checked ? 'Inactive' : 'Active';
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationDialogComponent"], {
            data: {
                content: 'Do you want change status from ' + status + ' to ' + statusNagetive
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this.activeInactiveClientBelongsTo(event.checked, clientTypeData);
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
     * On Client Type Edit Data
     * @param clientTypeData
     */
    AddMoreClientTypeDialogComponent.prototype.onEditClientTypeData = function (clientTypeData) {
        if (clientTypeData) {
            this.addClientTypeForm.get('name').setValue(clientTypeData['name']);
            this.addClientTypeForm.get('id').setValue(clientTypeData['id']);
        }
    };
    /**
     * Active Inactive Client Belongs To Data
     * @param {boolean} action
     * @param {Recurring} recurringData
     */
    AddMoreClientTypeDialogComponent.prototype.activeInactiveClientBelongsTo = function (action, clientType) {
        var _this = this;
        var params = { 'is_active': action ? 1 : 0 };
        this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].CLIENT_BELONGSTO_UPDATE, clientType['id'], params).subscribe(function (response) {
            _this.clientType.map(function (item) {
                if (item['id'] === clientType['id']) {
                    item['is_active'] = item['is_active'] ? 0 : 1;
                }
            });
        });
    };
    /**
     * On Add or Update bank
     * @param formParams
     * @param {boolean} isValid
     * @param bankObject
     */
    AddMoreClientTypeDialogComponent.prototype.onClientTypeSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['is_active'] = 1;
            if (form.value['id'] > 0) {
                this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].CLIENT_BELONGSTO_UPDATE, form.value['id'], form.value).subscribe(function (Response) {
                    _this.getClientBelongsToList(1);
                    _this.createClientTypeForm();
                    _this.addMoreClientForm.resetForm();
                });
            }
            else {
                delete (form.value['id']);
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].CLIENT_BELONGSTO_ADD, form.value).subscribe(function (Response) {
                    _this.getClientBelongsToList(1);
                    _this.createClientTypeForm();
                    _this.addMoreClientForm.resetForm();
                });
            }
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    AddMoreClientTypeDialogComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        // removing empty key from object
        for (var key in form.value) {
            if (form.value.hasOwnProperty(key)) {
                if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
                    delete form.value[key];
                }
                else {
                    if (flag) {
                    }
                }
            }
        }
        // For Multiple Entity ID
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'name') {
                        this.likeJSON['name'] = form.value[key];
                    }
                }
            }
            this.getClientBelongsToList(1, 'id', 'desc');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addMoreClientForm'),
        __metadata("design:type", Object)
    ], AddMoreClientTypeDialogComponent.prototype, "addMoreClientForm", void 0);
    AddMoreClientTypeDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-more-client-type-dialog',
            template: __webpack_require__(/*! ./add-more-client-type-dialog.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-basic-information/add-more-client-type-dialog/add-more-client-type-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"]])
    ], AddMoreClientTypeDialogComponent);
    return AddMoreClientTypeDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-basic-information/billing-info-basic-information.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-basic-information/billing-info-basic-information.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start Basic details form-->\r\n<!-- Admin Billing Basic Information Container -->\r\n<div class=\"billing-basic-info-container\" *ngIf=\"isEdit\">\r\n  <div>\r\n    <span class=\"panel-title\">CLIENT'S BASIC DETAILS</span>\r\n    <div>\r\n      <form [formGroup]=\"clientBasicInfoForm\" (submit)=\"submitBasicInformationForm(clientBasicInfoForm)\">\r\n        <div class=\"col-md-12 PLR-0\">\r\n          <div class=\"row MT-10\">\r\n            <div class=\"col-md-6\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Billing Name\" readonly formControlName=\"billing_name\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Contact person\" formControlName=\"contact_person\" required>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\">\r\n                <app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('contact_person'))\"\r\n                                [errMsg]=\"validationMsg.CONTACT_PERSON_REQUIRED\"></app-validation>\r\n                <app-validation *ngIf=\"isValidField(clientBasicInfoForm.get('contact_person'))\"\r\n                                [errMsg]=\"validationMsg.CONTACT_PERSON_VALID\"></app-validation>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"To\" formControlName=\"to_email\" required>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\">\r\n                <app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('to_email'))\"\r\n                                [errMsg]=\"validationMsg.TO_REQUIRED\"></app-validation>\r\n                <app-validation *ngIf=\"isValidField(clientBasicInfoForm.get('to_email'))\"\r\n                                [errMsg]=\"validationMsg.EMAIL_ADDRESS_VALID\"></app-validation>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"CC\" formControlName=\"cc_email\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 MT-10\">\r\n              <mat-form-field>\r\n                <textarea matInput placeholder=\"Address\" formControlName=\"address\" required></textarea>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\">\r\n                <app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('address'))\"\r\n                                [errMsg]=\"validationMsg.ADDRESS_REQUIRED\"></app-validation>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Notice Period\" formControlName=\"notice_period\" required>\r\n                  <mat-option *ngFor=\"let noticeperiod of noticeperiodList\" [value]=\"noticeperiod?.key\">\r\n                    {{ noticeperiod?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\">\r\n                <app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('notice_period'))\"\r\n                                [errMsg]=\"validationMsg.NOTICE_PERIOD_REQUIRED\"></app-validation>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Category\" formControlName=\"category_id\" required>\r\n                  <mat-option *ngFor=\"let category of categoryList\" [value]=\"category?.key\">\r\n                    {{ category?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-hint>Largest - A+: Fees > 30K ,\r\n                  Large - A: Fees between 15K to 30K,\r\n                  Medium - B+: Fees between 10K to 15K,\r\n                  Medium - B: Fees between 5K to 10K,\r\n                  Small - C+ Fees between 2K to 5K,\r\n                  Small - C Fees between 0 to 2 K.\r\n                </mat-hint>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\">\r\n                <app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('category_id'))\"\r\n                                [errMsg]=\"validationMsg.CATEGORY_REQUIRED\"></app-validation>\r\n              </div>\r\n            </div>\r\n\r\n            <!--<div class=\"col-md-6 MT-10\">\r\n              {{(billingInformation.parent_entity > 0) ? 'Related Entity' : ''}}\r\n            </div>-->\r\n\r\n            <div class=\"col-md-6 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Agreed for resource model\" formControlName=\"full_time_resource\">\r\n                  <mat-option *ngFor=\"let resource of fulltimeResourceList\" [value]=\"resource?.key\">\r\n                    {{ resource?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Debtors follow up\" formControlName=\"debtor_followup\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                    {{ yesNo?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-6 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Merge invoice (Sent manually)\" formControlName=\"merge_invoice\" required>\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                    {{ yesNo?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\">\r\n                <app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('merge_invoice'))\"\r\n                                [errMsg]=\"validationMsg.MERGE_INVOICE_REQUIRED\"></app-validation>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Merge Fixed Fee\" formControlName=\"merge_ff\" required>\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                    {{ yesNo?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\">\r\n                <app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('merge_ff'))\"\r\n                                [errMsg]=\"validationMsg.MERGE_FF_REQUIRED\"></app-validation>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-5 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Client belongs to\" formControlName=\"entity_grouptype_id\" required>\r\n                  <mat-option *ngFor=\"let ClientBelongsToResponseData of ClientBelongsToResponse\"\r\n                              [value]=\"ClientBelongsToResponseData['id']\">\r\n                    {{ClientBelongsToResponseData['name']}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-hint>IF Internal entity then this will show checklist like accounts,compliance.\r\n                  Update entity belongs to which group\r\n                </mat-hint>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg MT-5\">\r\n                <app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('entity_grouptype_id'))\"\r\n                                [errMsg]=\"validationMsg.CLIENT_BELONGS_REQUIRED\"></app-validation>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-1 PL-0 PR-0 MT-20\">\r\n              <a class=\"cursor-pointer orange-color\" (click)=\"onAddMoreClientType()\"> Add More</a>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Job\" formControlName=\"state_id\" required>\r\n                  <mat-option *ngFor=\"let state of stateList\" [value]=\"state['state_id']\">\r\n                    {{state['state_name']}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-hint>job based on city</mat-hint>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg MT-5\">\r\n                <app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('state_id'))\"\r\n                                [errMsg]=\"validationMsg.JOB_REQUIRED\"></app-validation>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Payment type\" formControlName=\"payment_id\" required\r\n                            (selectionChange)=\"checkIsCreditCard($event.value)\">\r\n                  <mat-option *ngFor=\"let payment of paymentList\" [value]=\"payment?.key\">\r\n                    {{ payment?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-hint>clients payment method 1. Net transfer (client will pay us ) 2. ED- We will debit clients Acc.\r\n                  3.\r\n                  CC- put last 4 digit\r\n                </mat-hint>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg MT-5\">\r\n                <app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('payment_id'))\"\r\n                                [errMsg]=\"validationMsg.PAYMENT_TYPE_REQUIRED\"></app-validation>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"clientList\"\r\n                         [multiple]=\"true\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Related entity for common invoice\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"related_entity\">\r\n              </ng-select>\r\n              <mat-hint>Select Entities name for which we will raise 1 invoice Ex.(Main Entity- ABC ; related entity-\r\n                X,Y,Z= invoice will be raise for ABC including charge of X,Y,Z)\r\n              </mat-hint>\r\n            </div>\r\n            <div class=\"col-md-6 MT-15\" *ngIf=\"isEziDebit\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"DDR Recieved\" formControlName=\"ddr_rec\" required>\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                    {{ yesNo?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg MT-5\">\r\n                <app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('ddr_rec'))\"\r\n                                [errMsg]=\"validationMsg.MERGE_INVOICE_REQUIRED\"></app-validation>\r\n              </div>\r\n            </div>\r\n            <!--<div class=\"col-md-6 MT-15\" *ngIf=\"isNetTransfer\">-->\r\n            <!--<mat-form-field>-->\r\n            <!--<mat-select placeholder=\"DDR Followup\" formControlName=\"ddr_followup\" required>-->\r\n            <!--<mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">-->\r\n            <!--{{ yesNo?.label}}-->\r\n            <!--</mat-option>-->\r\n            <!--</mat-select>-->\r\n            <!--</mat-form-field>-->\r\n            <!--<div class=\"validation-msg\">-->\r\n            <!--<app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('ddr_followup'))\"-->\r\n            <!--[errMsg]=\"validationMsg.MERGE_INVOICE_REQUIRED\"></app-validation>-->\r\n            <!--</div>-->\r\n            <!--</div>-->\r\n            <div class=\"col-md-12 MT-15\" *ngIf=\"isCreditCard\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-2 MT-10 PLR-0\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Card Type\" formControlName=\"card_id\" required\r\n                                (selectionChange)=\"getSurcharge($event.value)\">\r\n                      <mat-option *ngFor=\"let card of billingCard\" [value]=\"card['id']\">\r\n                        {{ card['name']}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"validation-msg\">\r\n                    <app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('card_id'))\"\r\n                                    [errMsg]=\"validationMsg.CARD_TYPE_REQUIRED\"></app-validation>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-2 MT-5\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Surcharge\" formControlName=\"surcharge\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"validation-msg\">\r\n                    <app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('surcharge'))\"\r\n                                    [errMsg]=\"validationMsg.PAYMENT_TYPE_REQUIRED\"></app-validation>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row col-md-8 MT-5\">\r\n                  <div class=\"col-md-3\">\r\n                    <mat-form-field floatLabel=\"never\">\r\n                      <input matInput placeholder=\"XXXX\" value=\"XXXX\" readonly>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-3\">\r\n                    <mat-form-field floatLabel=\"never\">\r\n                      <input matInput placeholder=\"XXXX\" value=\"XXXX\" readonly>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-3\">\r\n                    <mat-form-field floatLabel=\"never\">\r\n                      <input matInput placeholder=\"XXXX\" value=\"XXXX\" readonly>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-3\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Card Number\" formControlName=\"card_number\" required>\r\n                    </mat-form-field>\r\n                    <div class=\"validation-msg\">\r\n                      <app-validation *ngIf=\"isRequiredField(clientBasicInfoForm.get('card_number'))\"\r\n                                      [errMsg]=\"validationMsg.CARD_NUMBER_REQUIRED\"></app-validation>\r\n                      <app-validation *ngIf=\"isValidField(clientBasicInfoForm.get('card_number'))\"\r\n                                      [errMsg]=\"validationMsg.CARD_NUMBER_VALID\"></app-validation>\r\n                      <app-validation *ngIf=\"isValidLength(clientBasicInfoForm.get('card_number'))\"\r\n                                      [errMsg]=\"validationMsg.CARD_NUMBER_LENGTH\"></app-validation>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12 PLR-10 MTB-40\">\r\n              <mat-accordion>\r\n                <mat-expansion-panel [expanded]=\"true\">\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title>SERVICES AGREED</mat-panel-title>\r\n                  </mat-expansion-panel-header>\r\n\r\n                  <div class=\"table-container table-no-striped\">\r\n                    <div class=\"table-block\">\r\n                      <table>\r\n                        <thead>\r\n                        <tr>\r\n                          <th width=\"50%\">Services</th>\r\n                          <th width=\"20%\">Agreed</th>\r\n                          <th width=\"30%\">Service Start Date</th>\r\n                        </tr>\r\n                        </thead>\r\n\r\n                        <tbody>\r\n                        <tr *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index;\">\r\n                          <td width=\"50%\">{{filterGroup.value['service_name']}}</td>\r\n                          <td width=\"20%\">\r\n                            <mat-checkbox [checked]=\"(filterGroup.value['is_active'] === 1) ? true : false\"\r\n                                          (change)=\"changeServiceAgreedData($event.checked, filterGroup, i)\"></mat-checkbox>\r\n                          </td>\r\n                          <td width=\"30%\">\r\n                            <mat-form-field *ngIf=\"filterGroup.value['is_active'] === 1\">\r\n                              <input matInput readonly placeholder=\"Start Date\" [matDatepicker]=\"startDateRef\"\r\n                                     value=\"{{filterGroup.value['contract_signed_date']}}\"\r\n                                     (mousedown)=\"startDateRef.open()\"\r\n                                     (dateChange)=\"changeServiceAgreedDateValue(i, $event.value)\"/>\r\n                              <mat-datepicker-toggle matSuffix [for]=\"startDateRef\"></mat-datepicker-toggle>\r\n                              <mat-datepicker #startDateRef disabled=\"false\"></mat-datepicker>\r\n                            </mat-form-field>\r\n                          </td>\r\n                        </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </mat-expansion-panel>\r\n              </mat-accordion>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <mat-form-field>\r\n                <textarea matInput placeholder=\"Notes\" formControlName=\"notes\"></textarea>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-md-12 MTB-20\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 text-right PR-0\">\r\n                  <button type=\"button\" class=\"btn btn-default MR-5\">Cancel</button>\r\n                  <button type=\"submit\" class=\"btn-primary\" [disabled]=\"clientBasicInfoForm.invalid\">Save</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"view-billing-info-container\" *ngIf=\"!isEdit\">\r\n  <div class=\"basic-details-border\">\r\n    <span class=\"panel-title\">Basic Details</span>\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 label-span-color\">\r\n          <div>\r\n            <label>Billing Name</label>\r\n            <span>{{billingInformation.billing_name}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Contact Person</label>\r\n            <span>{{billingInformation.contact_person}}</span>\r\n          </div>\r\n          <div>\r\n            <label>To</label>\r\n            <span>{{billingInformation.to_email}}</span>\r\n          </div>\r\n          <div>\r\n            <label>CC</label>\r\n            <span>{{billingInformation.cc_email}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Address</label>\r\n            <span>{{billingInformation.address}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Notice Period</label>\r\n            <span>{{billingInformation.notice_period}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Category</label>\r\n            <span>{{getCategoryName(billingInformation.category_id)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Agreed for resource model</label>\r\n            <span>{{getFullTimeResource(billingInformation.full_time_resource)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Debtors follow up</label>\r\n            <span>{{getYesNoStatus(billingInformation.ddr_followup)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Merge Invoice (Sent manually)</label>\r\n            <span>{{getYesNoStatus(billingInformation.merge_invoice)}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 label-span-color\">\r\n          <div>\r\n            <label>Merge Fixed Fee</label>\r\n            <span>{{getYesNoStatus(billingInformation.merge_ff)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Client belongs to</label>\r\n            <span>{{getClientBelongsToName(billingInformation.entity_grouptype_id)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Job</label>\r\n            <span>{{getJobName(billingInformation.state_id)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Payment Type</label>\r\n            <span>{{getPaymentStatus(billingInformation.payment_id)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>DDR Received</label>\r\n            <span>{{getYesNoStatus(billingInformation.ddr_rec)}}</span>\r\n          </div>\r\n          <!--<div>-->\r\n          <!--<label>DDR Followup</label>-->\r\n          <!--<span>{{getYesNoStatus(billingInformation.ddr_followup)}}</span>-->\r\n          <!--</div>-->\r\n          <div>\r\n            <label>Card Type</label>\r\n            <span>{{getCardName(billingInformation.card_id)}}</span>\r\n          </div>\r\n          <div *ngIf=\"billingInformation.card_id > 0\">\r\n            <label>Card Surcharge</label>\r\n            <span>{{billingInformation.surcharge}}</span>\r\n          </div>\r\n          <div *ngIf=\"billingInformation.card_id > 0\">\r\n            <label>Card No</label>\r\n            <span>{{billingInformation.card_number}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Related entity for common invoice</label>\r\n            <span>{{getClientName(relatedEntityList)}}</span>\r\n          </div>\r\n          <div>\r\n            <label>Notes</label>\r\n            <span>{{billingInformation.notes}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"col-md-12 PLR-10 MTB-20\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>SERVICES AGREED</mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n\r\n          <div class=\"table-container table-no-striped\">\r\n            <div class=\"table-block\">\r\n              <table>\r\n                <thead>\r\n                <tr>\r\n                  <th width=\"50%\">Services</th>\r\n                  <th width=\"20%\">Agreed</th>\r\n                  <th width=\"30%\">Service Start Date</th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                <tr *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index;\">\r\n                  <td width=\"50%\">{{filterGroup.value['service_name']}}</td>\r\n                  <td width=\"20%\">{{filterGroup.value['is_active'] === 1 ? 'Yes':'No'}}</td>\r\n                  <td width=\"30%\"><span *ngIf=\"filterGroup.value['is_active'] === 1\">{{filterGroup.value['contract_signed_date'] !== '' ?\r\n                    (filterGroup.value['contract_signed_date'] | date :'dd-MM-yyyy') :''}}</span>\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-basic-information/billing-info-basic-information.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-basic-information/billing-info-basic-information.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2JpbGxpbmctaW5mb3JtYXRpb24vYmlsbGluZy1pbmZvLWJhc2ljLWluZm9ybWF0aW9uL2JpbGxpbmctaW5mby1iYXNpYy1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-basic-information/billing-info-basic-information.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-basic-information/billing-info-basic-information.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: BillingInfoBasicInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingInfoBasicInformationComponent", function() { return BillingInfoBasicInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _add_more_client_type_dialog_add_more_client_type_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-more-client-type-dialog/add-more-client-type-dialog.component */ "./src/app/admin/billing-module/billing-information/billing-info-basic-information/add-more-client-type-dialog/add-more-client-type-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/shared-model/billing.model */ "./src/utility/shared-model/billing.model.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
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















var BillingInfoBasicInformationComponent = /** @class */ (function (_super) {
    __extends(BillingInfoBasicInformationComponent, _super);
    function BillingInfoBasicInformationComponent(_router, _fb, dialog, _sharedObjService, _commonCrudService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this._sharedObjService = _sharedObjService;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this.onAddUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        _this.ClientBelongsToResponse = [];
        _this.userList = [];
        _this.clientList = [];
        _this.stateList = [];
        _this.billingCard = [];
        _this.servicesAll = [];
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        _this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["yesNo"];
        _this.paymentList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["payment"];
        _this.categoryList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["category"];
        _this.noticeperiodList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["noticeperiod"];
        _this.fulltimeResourceList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["fulltimeresource"];
        _this.isCreditCard = false;
        _this.isNetTransfer = false;
        _this.isEziDebit = false;
        _this.relatedEntityList = '';
        return _this;
    }
    BillingInfoBasicInformationComponent.prototype.ngOnInit = function () {
        // Do not change order
        this.getBasicServices();
        this.getBillingCard();
        this.getStateList();
        this.getClientList();
        this.getEntityBelongsToList();
        this.createBasicInformationForm();
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].BILLING_HISTORY + '/' + this.billingInformation.entity_id,
        };
        this._sharedService.setHistoryURL(value);
    };
    /**
     * Get Basic Services
     */
    BillingInfoBasicInformationComponent.prototype.getBasicServices = function () {
        var _this = this;
        //  this.getFilterFieldArray();
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].BILLING_BASIC_VIEW, this.billingInformation.entity_id).subscribe(function (response) {
            var DataItem = response.payload.data;
            // console.log(DataItem['related_entity']);
            _this.relatedEntityList = DataItem['related_entity'];
            if (_this.relatedEntityList) {
                var itemData = _this.getArrayToString(_this.relatedEntityList, ',');
                _this.clientBasicInfoForm.get('related_entity').setValue(itemData);
            }
            _this.servicesAll = Object.values(DataItem['service']);
            if (_this.servicesAll.length) {
                _this.servicesAll.forEach(function (item) {
                    _this.getFilterFieldArray().push(_this.createServiceGroup(item));
                });
            }
        });
    };
    /**
     * Get Client Belongs to list
     */
    BillingInfoBasicInformationComponent.prototype.getEntityBelongsToList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].CLIENT_BELONGSTO, { 'records': 'all' }).subscribe(function (Response) {
            _this.ClientBelongsToResponse = Response.payload.data;
        });
    };
    /**
     * Get State list
     */
    BillingInfoBasicInformationComponent.prototype.getStateList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].DROPDOWN_LIST, {
            'records': 'all',
            'table': 'state',
            'column': 'state_id,state_name,category_option_id',
            'sortOrder': 'state_id',
            'sortBy': 'asc'
        }, {}).subscribe(function (Response) {
            _this.stateList = Response;
        });
    };
    /**
     * Get Billing Card list
     */
    BillingInfoBasicInformationComponent.prototype.getBillingCard = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].DROPDOWN_LIST, {
            'records': 'all',
            'table': 'billing_card',
            'column': 'id,name,surcharge',
            'sortOrder': 'id',
            'sortBy': 'asc'
        }, {}).subscribe(function (Response) {
            _this.billingCard = Response;
        });
    };
    /**
     * Get Related Entity Common Invoice
     */
    BillingInfoBasicInformationComponent.prototype.getClientList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].BILLING_BASIC_ENTITY + '/' + this.billingInformation.entity_id, { 'records': 'all' }).subscribe(function (Response) {
            _this.clientList = Response.payload.data;
        });
    };
    /**
     * Create Basic Information Form
     */
    BillingInfoBasicInformationComponent.prototype.createBasicInformationForm = function () {
        this.clientBasicInfoForm = this._fb.group({
            billing_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingInformation.billing_name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            contact_person: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingInformation.contact_person, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["CommonRegex"].NAME_REGEXP)]),
            to_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingInformation.to_email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["CommonRegex"].MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
            cc_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingInformation.cc_email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["CommonRegex"].MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingInformation.address, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            notice_period: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingInformation.notice_period, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingInformation.category_id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            full_time_resource: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingInformation.full_time_resource),
            debtor_followup: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingInformation.debtor_followup),
            merge_invoice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingInformation.merge_invoice, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            merge_ff: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingInformation.merge_ff, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            entity_grouptype_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.billingInformation.entity_grouptype_id > 0) ? this.billingInformation.entity_grouptype_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            state_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.billingInformation.state_id > 0) ? this.billingInformation.state_id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            payment_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.billingInformation.payment_id) ? this.billingInformation.payment_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.relatedEntityList) ? this.getArrayToString(this.relatedEntityList, ',') : []),
            // ddr_followup: new FormControl(this.billingInformation.ddr_followup),
            ddr_rec: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](Number(this.billingInformation.ddr_rec)),
            card_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.billingInformation.card_id > 0 ? this.billingInformation.card_id : null), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            surcharge: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingInformation.surcharge),
            card_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingInformation.card_number, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["CommonRegex"].NUMERIC_REGEXP), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(4)]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.billingInformation.notes),
            service: this._fb.array([])
        });
        this.checkIsCreditCard(this.billingInformation.payment_id);
        if (this.billingInformation.payment_id === 2) {
            this.getSurcharge(this.billingInformation.card_id);
        }
    };
    /**
     * Create Service Group Form
     */
    BillingInfoBasicInformationComponent.prototype.createServiceGroup = function (item) {
        return this._fb.group({
            billing_service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['billing_service_id'] : ''),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['service_id'] : ''),
            service_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['service_name'] : ''),
            contract_signed_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['contract_signed_date'] : ''),
            is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item ? item['is_active'] : ''),
        });
    };
    /**
     * Get Filter Field Array
     */
    BillingInfoBasicInformationComponent.prototype.getFilterFieldArray = function () {
        return this.clientBasicInfoForm.get('service');
    };
    /**
     * On Billing Information
     */
    BillingInfoBasicInformationComponent.prototype.onBillingInformation = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].BILLING_INFORMATION]);
    };
    BillingInfoBasicInformationComponent.prototype.onAddMoreClientType = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_more_client_type_dialog_add_more_client_type_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddMoreClientTypeDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                clientBelongsToData: this.ClientBelongsToResponse
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getEntityBelongsToList();
        });
    };
    /**
     * Check if its credit card show other field with validation
     * @param value
     */
    BillingInfoBasicInformationComponent.prototype.checkIsCreditCard = function (value) {
        this.isEziDebit = false;
        this.clientBasicInfoForm.get('ddr_rec').setValidators(null);
        this.clientBasicInfoForm.get('ddr_rec').updateValueAndValidity();
        this.isCreditCard = false;
        this.clientBasicInfoForm.get('card_id').setValidators(null);
        this.clientBasicInfoForm.get('card_id').updateValueAndValidity();
        this.clientBasicInfoForm.get('surcharge').setValidators(null);
        this.clientBasicInfoForm.get('surcharge').updateValueAndValidity();
        this.clientBasicInfoForm.get('card_number').setValidators(null);
        this.clientBasicInfoForm.get('card_number').updateValueAndValidity();
        this.isNetTransfer = false;
        if (value === 1) {
            this.isEziDebit = true;
            this.clientBasicInfoForm.get('ddr_rec').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
            this.clientBasicInfoForm.get('ddr_rec').updateValueAndValidity();
        }
        else if (value === 2) {
            this.isCreditCard = true;
            this.clientBasicInfoForm.get('card_id').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
            this.clientBasicInfoForm.get('card_id').updateValueAndValidity();
            this.clientBasicInfoForm.get('surcharge').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
            this.clientBasicInfoForm.get('surcharge').updateValueAndValidity();
            this.clientBasicInfoForm.get('card_number').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["CommonRegex"].NUMERIC_REGEXP), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(4)]);
            this.clientBasicInfoForm.get('card_number').updateValueAndValidity();
        }
        else if (value === 3) {
            this.isNetTransfer = true;
        }
    };
    /**
     * Get Surcharge for that Card From Card ID
     * @param card_id
     */
    BillingInfoBasicInformationComponent.prototype.getSurcharge = function (card_id) {
        var surcharge = 0.00;
        if (card_id > 0) {
            var dataItem = this.billingCard.filter(function (item) { return item['id'] === card_id; });
            if (dataItem.length) {
                surcharge = dataItem[0]['surcharge'];
                this.clientBasicInfoForm.get('surcharge').setValue(surcharge);
            }
        }
        else {
            this.clientBasicInfoForm.get('surcharge').setValue(surcharge);
        }
    };
    /**
     * Change Service Agreed Data Then Show Date
     * @param event
     * @param filterGroup
     * @param index
     */
    BillingInfoBasicInformationComponent.prototype.changeServiceAgreedData = function (event, filterGroup, index) {
        if (event) {
            this.getFilterFieldArray().controls[index].get('is_active').setValue(1);
            var todaysDate = moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('YYYY-MM-DD');
            this.getFilterFieldArray().controls[index].get('contract_signed_date').setValue(todaysDate);
        }
        else {
            this.getFilterFieldArray().controls[index].get('is_active').setValue(0);
            this.getFilterFieldArray().controls[index].get('contract_signed_date').setValue(null);
        }
        // console.log(this.getFilterFieldArray().controls);
    };
    /**
     *
     * @param index
     * @param value
     */
    BillingInfoBasicInformationComponent.prototype.changeServiceAgreedDateValue = function (index, value) {
        if (value) {
            var todaysDate = moment__WEBPACK_IMPORTED_MODULE_14__(value).format('YYYY-MM-DD');
            this.getFilterFieldArray().controls[index].get('contract_signed_date').setValue(todaysDate);
        }
    };
    /**
     *
     * @param form
     */
    BillingInfoBasicInformationComponent.prototype.submitBasicInformationForm = function (form) {
        var _this = this;
        if (form.valid) {
            if (form.value) {
                if (form.value['payment_id'] === 1) {
                    // form.value['ddr_followup'] = 0;
                    form.value['card_id'] = 0;
                    form.value['surcharge'] = 0;
                    form.value['card_number'] = 0;
                }
                else if (form.value['payment_id'] === 2) {
                    form.value['ddr_rec'] = 0;
                    // form.value['ddr_followup'] = 0;
                }
                else if (form.value['payment_id'] === 3) {
                    form.value['ddr_rec'] = 0;
                    form.value['card_id'] = 0;
                    form.value['surcharge'] = 0;
                    form.value['card_number'] = 0;
                }
            }
            this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].BILLING, this.billingInformation.id, form.value).subscribe(function (response) {
                if (response) {
                    _this.getBasicServices();
                    _this.onAddUpdate.emit(true);
                    _this.clientBasicInfoForm.setControl('service', _this._fb.array([]));
                }
            });
        }
    };
    /**
     * Get array values from string
     * @param {string} value
     * @param {string} seperator
     * @returns {string[]}
     */
    BillingInfoBasicInformationComponent.prototype.getArrayToString = function (value, seperator, isNotNumber) {
        if (value) {
            var valueOne_1 = [];
            value.split(seperator).map(function (item) {
                if (isNotNumber) {
                    valueOne_1.push(item);
                }
                else {
                    valueOne_1.push(Number(item));
                }
            });
            return valueOne_1;
        }
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    BillingInfoBasicInformationComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    BillingInfoBasicInformationComponent.prototype.getPaymentStatus = function (id) {
        var val = this.paymentList.filter(function (elem) { return elem.key === Number(id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    BillingInfoBasicInformationComponent.prototype.getCategoryName = function (cat_id) {
        var val = this.categoryList.filter(function (elem) { return elem.key === Number(cat_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    BillingInfoBasicInformationComponent.prototype.getFullTimeResource = function (id) {
        var val = this.fulltimeResourceList.filter(function (elem) { return elem.key === Number(id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Get Job Name
     * @param id
     */
    BillingInfoBasicInformationComponent.prototype.getJobName = function (id) {
        var val = this.stateList.filter(function (elem) { return elem.state_id === Number(id); });
        return (val.length) ? val[0].state_name : '';
    };
    /**
     * Get Client Belongs to Name
     * @param id
     */
    BillingInfoBasicInformationComponent.prototype.getClientBelongsToName = function (id) {
        var val = this.ClientBelongsToResponse.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].name : '';
    };
    /**
     * Get Client Belongs to Name
     * @param id
     */
    BillingInfoBasicInformationComponent.prototype.getCardName = function (id) {
        var val = this.billingCard.filter(function (elem) { return elem.id === Number(id); });
        return (val.length) ? val[0].name : '';
    };
    /**
     * Get Client Belongs to Name
     * @param id
     */
    BillingInfoBasicInformationComponent.prototype.getClientName = function (id) {
        var _this = this;
        var valueData = [];
        // console.log(id);
        if (id) {
            id.split(',').forEach(function (item) {
                var val = _this.clientList.filter(function (elem) { return elem.id === Number(item); });
                if (val) {
                    (val.length) ? valueData.push(val[0].trading_name) : '';
                }
            });
        }
        return valueData.join(', ');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _utility_shared_model_billing_model__WEBPACK_IMPORTED_MODULE_8__["BillingBasic"])
    ], BillingInfoBasicInformationComponent.prototype, "billingInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BillingInfoBasicInformationComponent.prototype, "isEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BillingInfoBasicInformationComponent.prototype, "onAddUpdate", void 0);
    BillingInfoBasicInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing-info-basic-information',
            template: __webpack_require__(/*! ./billing-info-basic-information.component.html */ "./src/app/admin/billing-module/billing-information/billing-info-basic-information/billing-info-basic-information.component.html"),
            styles: [__webpack_require__(/*! ./billing-info-basic-information.component.scss */ "./src/app/admin/billing-module/billing-information/billing-info-basic-information/billing-info-basic-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__["SharedObjService"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_11__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"]])
    ], BillingInfoBasicInformationComponent);
    return BillingInfoBasicInformationComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/billing-information/billing-info-basic-information/billing-info-basic-information.module.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/billing-information/billing-info-basic-information/billing-info-basic-information.module.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: BillingInfoBasicInformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingInfoBasicInformationModule", function() { return BillingInfoBasicInformationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _billing_info_basic_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./billing-info-basic-information.component */ "./src/app/admin/billing-module/billing-information/billing-info-basic-information/billing-info-basic-information.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _add_more_client_type_dialog_add_more_client_type_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-more-client-type-dialog/add-more-client-type-dialog.component */ "./src/app/admin/billing-module/billing-information/billing-info-basic-information/add-more-client-type-dialog/add-more-client-type-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'billing-info-basic-information',
        component: _billing_info_basic_information_component__WEBPACK_IMPORTED_MODULE_2__["BillingInfoBasicInformationComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]],
    }
];
var BillingInfoBasicInformationModule = /** @class */ (function () {
    function BillingInfoBasicInformationModule() {
    }
    BillingInfoBasicInformationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_billing_info_basic_information_component__WEBPACK_IMPORTED_MODULE_2__["BillingInfoBasicInformationComponent"], _add_more_client_type_dialog_add_more_client_type_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddMoreClientTypeDialogComponent"]],
            entryComponents: [_add_more_client_type_dialog_add_more_client_type_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddMoreClientTypeDialogComponent"]],
            exports: [_billing_info_basic_information_component__WEBPACK_IMPORTED_MODULE_2__["BillingInfoBasicInformationComponent"]]
        })
    ], BillingInfoBasicInformationModule);
    return BillingInfoBasicInformationModule;
}());



/***/ }),

/***/ "./src/utility/shared-model/billing.model.ts":
/*!***************************************************!*\
  !*** ./src/utility/shared-model/billing.model.ts ***!
  \***************************************************/
/*! exports provided: Billing, BillingBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Billing", function() { return Billing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingBasic", function() { return BillingBasic; });
var Billing = /** @class */ (function () {
    function Billing() {
    }
    Object.defineProperty(Billing.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Billing.prototype, "entity_id", {
        get: function () {
            return this._entity_id;
        },
        set: function (value) {
            this._entity_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Billing.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Billing.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Billing.prototype, "billing_name", {
        get: function () {
            return this._billing_name;
        },
        set: function (value) {
            this._billing_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Billing.prototype, "trading_name", {
        get: function () {
            return this._trading_name;
        },
        set: function (value) {
            this._trading_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Billing.prototype, "service_id", {
        get: function () {
            return this._service_id;
        },
        set: function (value) {
            this._service_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Billing.prototype, "service_name", {
        get: function () {
            return this._service_name;
        },
        set: function (value) {
            this._service_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Billing.prototype, "ddr_followup", {
        get: function () {
            return this._ddr_followup;
        },
        set: function (value) {
            this._ddr_followup = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Billing.prototype, "parent_id", {
        get: function () {
            return this._parent_id;
        },
        set: function (value) {
            this._parent_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Billing.prototype, "is_updated", {
        get: function () {
            return this._is_updated;
        },
        set: function (value) {
            this._is_updated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Billing.prototype, "inc_in_ff", {
        get: function () {
            return this._inc_in_ff;
        },
        set: function (value) {
            this._inc_in_ff = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Billing.prototype, "frequency_id", {
        get: function () {
            return this._frequency_id;
        },
        set: function (value) {
            this._frequency_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Billing.prototype, "auto_invoice", {
        get: function () {
            return this._auto_invoice;
        },
        set: function (value) {
            this._auto_invoice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Billing.prototype, "recurring_id", {
        get: function () {
            return this._recurring_id;
        },
        set: function (value) {
            this._recurring_id = value;
        },
        enumerable: true,
        configurable: true
    });
    return Billing;
}());

var BillingBasic = /** @class */ (function () {
    function BillingBasic() {
    }
    Object.defineProperty(BillingBasic.prototype, "billing_from", {
        get: function () {
            return this._billing_from;
        },
        set: function (value) {
            this._billing_from = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "billing_name", {
        get: function () {
            return this._billing_name;
        },
        set: function (value) {
            this._billing_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "trading_name", {
        get: function () {
            return this._trading_name;
        },
        set: function (value) {
            this._trading_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "service", {
        get: function () {
            return this._service;
        },
        set: function (value) {
            this._service = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "entity_id", {
        get: function () {
            return this._entity_id;
        },
        set: function (value) {
            this._entity_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "parent_id", {
        get: function () {
            return this._parent_id;
        },
        set: function (value) {
            this._parent_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "contact_person", {
        get: function () {
            return this._contact_person;
        },
        set: function (value) {
            this._contact_person = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "to_email", {
        get: function () {
            return this._to_email;
        },
        set: function (value) {
            this._to_email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "cc_email", {
        get: function () {
            return this._cc_email;
        },
        set: function (value) {
            this._cc_email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "notice_period", {
        get: function () {
            return this._notice_period;
        },
        set: function (value) {
            this._notice_period = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "category_id", {
        get: function () {
            return this._category_id;
        },
        set: function (value) {
            this._category_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "full_time_resource", {
        get: function () {
            return this._full_time_resource;
        },
        set: function (value) {
            this._full_time_resource = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "debtor_followup", {
        get: function () {
            return this._debtor_followup;
        },
        set: function (value) {
            this._debtor_followup = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "merge_invoice", {
        get: function () {
            return this._merge_invoice;
        },
        set: function (value) {
            this._merge_invoice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "merge_ff", {
        get: function () {
            return this._merge_ff;
        },
        set: function (value) {
            this._merge_ff = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "payment_id", {
        get: function () {
            return this._payment_id;
        },
        set: function (value) {
            this._payment_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "ddr_rec", {
        get: function () {
            return this._ddr_rec;
        },
        set: function (value) {
            this._ddr_rec = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "card_id", {
        get: function () {
            return this._card_id;
        },
        set: function (value) {
            this._card_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "surcharge", {
        get: function () {
            return this._surcharge;
        },
        set: function (value) {
            this._surcharge = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "card_number", {
        get: function () {
            return this._card_number;
        },
        set: function (value) {
            this._card_number = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "entity_grouptype_id", {
        get: function () {
            return this._entity_grouptype_id;
        },
        set: function (value) {
            this._entity_grouptype_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "state_id", {
        get: function () {
            return this._state_id;
        },
        set: function (value) {
            this._state_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "is_active", {
        get: function () {
            return this._is_active;
        },
        set: function (value) {
            this._is_active = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "notes", {
        get: function () {
            return this._notes;
        },
        set: function (value) {
            this._notes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "bk_comment", {
        get: function () {
            return this._bk_comment;
        },
        set: function (value) {
            this._bk_comment = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "payroll_comment", {
        get: function () {
            return this._payroll_comment;
        },
        set: function (value) {
            this._payroll_comment = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "ddr_followup", {
        get: function () {
            return this._ddr_followup;
        },
        set: function (value) {
            this._ddr_followup = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "is_related", {
        get: function () {
            return this._is_related;
        },
        set: function (value) {
            this._is_related = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "created_by", {
        get: function () {
            return this._created_by;
        },
        set: function (value) {
            this._created_by = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "created_on", {
        get: function () {
            return this._created_on;
        },
        set: function (value) {
            this._created_on = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "service_updated", {
        get: function () {
            return this._service_updated;
        },
        set: function (value) {
            this._service_updated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "discontinue_stage", {
        get: function () {
            return this._discontinue_stage;
        },
        set: function (value) {
            this._discontinue_stage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "service_id", {
        get: function () {
            return this._service_id;
        },
        set: function (value) {
            this._service_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "related_entity", {
        get: function () {
            return this._related_entity;
        },
        set: function (value) {
            this._related_entity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "service_array", {
        get: function () {
            return this._service_array;
        },
        set: function (value) {
            this._service_array = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "agreement_letter", {
        get: function () {
            return this._agreement_letter;
        },
        set: function (value) {
            this._agreement_letter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingBasic.prototype, "agreement_letter_path", {
        get: function () {
            return this._agreement_letter_path;
        },
        set: function (value) {
            this._agreement_letter_path = value;
        },
        enumerable: true,
        configurable: true
    });
    return BillingBasic;
}());



/***/ })

}]);
//# sourceMappingURL=default~billing-info-basic-information-billing-info-basic-information-module~billing-info-services-b~fd91e706.js.map