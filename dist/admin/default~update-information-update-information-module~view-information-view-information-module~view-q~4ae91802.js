(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~update-information-update-information-module~view-information-view-information-module~view-q~4ae91802"],{

/***/ "./src/app/admin/client-module/information-required/information-required-tab/update-information/send-back-to-staff-dialog/send-back-to-staff-dialog.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/information-required/information-required-tab/update-information/send-back-to-staff-dialog/send-back-to-staff-dialog.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Send back to staff dialog  -->\r\n<div class=\"modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Send Back to {{moveTo}}</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose(false)\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addSendtoStaffForm\" (submit)=\"onSubmit(addSendtoStaffForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-12 MB-20\">\r\n          <mat-form-field>\r\n            <mat-label>Reason</mat-label>\r\n            <textarea matInput\r\n                      cdkTextareaAutosize\r\n                      #autosize=\"cdkTextareaAutosize\"\r\n                      cdkAutosizeMinRows=\"1\"\r\n                      cdkAutosizeMaxRows=\"10\" formControlName=\"send_back_reason\" required></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSendtoStaffForm.get('send_back_reason'))\"\r\n                            [errMsg]=\"validationMsg.REASON_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" [disabled]=\"addSendtoStaffForm.invalid\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Send back to staff dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/information-required/information-required-tab/update-information/send-back-to-staff-dialog/send-back-to-staff-dialog.component.ts":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/information-required/information-required-tab/update-information/send-back-to-staff-dialog/send-back-to-staff-dialog.component.ts ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: SendBackToStaffDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendBackToStaffDialogComponent", function() { return SendBackToStaffDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
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








var SendBackToStaffDialogComponent = /** @class */ (function (_super) {
    __extends(SendBackToStaffDialogComponent, _super);
    function SendBackToStaffDialogComponent(_fb, dialog, dialogRef, data, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_1__["ValidationConstantMessage"]();
        _this.type = '';
        _this.status_id = 0;
        _this.moveTo = '';
        return _this;
    }
    SendBackToStaffDialogComponent.prototype.ngOnInit = function () {
        this.informationRequired = (this.data.informationRequired) ? this.data.informationRequired : [];
        this.type = (this.data.type) ? this.data.type : null;
        this.status_id = (this.data.status_id) ? this.data.status_id : 0;
        this.moveTo = (this.status_id === 1) ? 'Staff' : (this.status_id === 2) ? 'ATL' : 'TL';
        this.createAddSendtoStaffForm();
    };
    /**
     * Create send back to staff form
     */
    SendBackToStaffDialogComponent.prototype.createAddSendtoStaffForm = function () {
        this.addSendtoStaffForm = this._fb.group({
            send_back_reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            stage_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.status_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    /**
     * On Close dialog
     * @param value
     */
    SendBackToStaffDialogComponent.prototype.onClose = function (value) {
        this.dialogRef.close(value);
    };
    /**
     * On Submit Send back to staff
     * @param form
     */
    SendBackToStaffDialogComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to move this information back to ' + this.moveTo + '?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                if (form.valid) {
                    _this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].INFORMATION_REQUIRED_SEND_BACK + '/' + _this.informationRequired.id, form.value).subscribe(function (response) {
                        _this.onClose(true);
                    });
                }
            }
        });
    };
    SendBackToStaffDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-back-to-staff-dialog',
            template: __webpack_require__(/*! ./send-back-to-staff-dialog.component.html */ "./src/app/admin/client-module/information-required/information-required-tab/update-information/send-back-to-staff-dialog/send-back-to-staff-dialog.component.html")
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]])
    ], SendBackToStaffDialogComponent);
    return SendBackToStaffDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/information-required/information-required-tab/update-information/send-to-client-dialog/send-to-client-dialog.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/information-required/information-required-tab/update-information/send-to-client-dialog/send-to-client-dialog.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Send to Client dialog  -->\r\n<div class=\"modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">SEND TO CLIENT - {{informationRequired?.trading_name}}</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose(false)\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addSendtoClientForm\" (submit)=\"onSubmit(addSendtoClientForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 MB-10\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"From\" formControlName=\"from_email\" required>\r\n              <mat-option [value]=\"sendToClientFormData['from_email']\">{{sendToClientFormData['from_email']}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSendtoClientForm.get('from_email'))\"\r\n                            [errMsg]=\"validationMsg.FROM_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MB-20\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"To\" formControlName=\"to\" required>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSendtoClientForm.get('to'))\"\r\n                            [errMsg]=\"validationMsg.TO_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addSendtoClientForm.get('to'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_ADDRESS_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MB-20\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"CC\" formControlName=\"cc\">\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addSendtoClientForm.get('cc'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_ADDRESS_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MB-20\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"BCC\" formControlName=\"bcc\">\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addSendtoClientForm.get('bcc'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_ADDRESS_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MB-20\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Subject\" formControlName=\"subject\" required>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSendtoClientForm.get('subject'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_SUBJECT_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MB-20\">\r\n          <p class=\"PB-10\">Message</p>\r\n          <editor [formControl]=\"addSendtoClientForm.controls['content']\"\r\n                  [init]=\"{'menubar': 'false', 'height': 420, 'relative_urls': false, 'remove_script_host': false, 'convert_urls': true}\"></editor>\r\n          <div class=\"validation-msg MT-10\">\r\n            <app-validation *ngIf=\"isRequiredField(addSendtoClientForm.get('content'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_CONTENT_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" [disabled]=\"addSendtoClientForm.invalid\">Send</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Send to Client dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/information-required/information-required-tab/update-information/send-to-client-dialog/send-to-client-dialog.component.ts":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/information-required/information-required-tab/update-information/send-to-client-dialog/send-to-client-dialog.component.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: SendToClientDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendToClientDialogComponent", function() { return SendToClientDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared-user.service */ "./src/utility/shared-service/shared-user.service.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
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












var SendToClientDialogComponent = /** @class */ (function (_super) {
    __extends(SendToClientDialogComponent, _super);
    function SendToClientDialogComponent(_fb, dialog, _router, dialogRef, data, _commonCrudService, _sharedService, _sharedUserService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this._router = _router;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this._sharedUserService = _sharedUserService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.sendToClientFormData = [];
        _this.userList = [];
        return _this;
    }
    SendToClientDialogComponent.prototype.ngOnInit = function () {
        this.informationRequired = (this.data.informationRequired) ? this.data.informationRequired : [];
        this.createAddSendtoClientForm();
        this.getAddSendToClientDetail();
        this.getUserList();
    };
    /**
     * Get User List
     */
    SendToClientDialogComponent.prototype.getUserList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].ADMIN_USER, { 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.userList = response.payload.data;
        });
    };
    /**
     * Get Send to Client form data
     */
    SendToClientDialogComponent.prototype.getAddSendToClientDetail = function () {
        var _this = this;
        var params = { 'information_id': this.informationRequired.id };
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].INFORMATION_REQUIRED_SEND_INFO, this.informationRequired.id, params).subscribe(function (response) {
            _this.sendToClientFormData = response.payload.data;
            if (_this.sendToClientFormData) {
                _this.addSendtoClientForm.get('from_email').setValue(_this.sendToClientFormData['from_email']);
                _this.addSendtoClientForm.get('from_email').updateValueAndValidity();
                _this.addSendtoClientForm.get('to').setValue(_this.sendToClientFormData['to']);
                _this.addSendtoClientForm.get('to').updateValueAndValidity();
                _this.addSendtoClientForm.get('cc').setValue(_this.sendToClientFormData['cc']);
                _this.addSendtoClientForm.get('cc').updateValueAndValidity();
                _this.addSendtoClientForm.get('bcc').setValue(_this.sendToClientFormData['bcc']);
                _this.addSendtoClientForm.get('bcc').updateValueAndValidity();
                _this.addSendtoClientForm.get('subject').setValue(_this.sendToClientFormData['subject']);
                _this.addSendtoClientForm.get('subject').updateValueAndValidity();
                _this.addSendtoClientForm.get('content').setValue(_this.sendToClientFormData['content']);
                _this.addSendtoClientForm.get('content').updateValueAndValidity();
            }
        });
    };
    /**
     * Create assignee form
     */
    SendToClientDialogComponent.prototype.createAddSendtoClientForm = function () {
        this.addSendtoClientForm = this._fb.group({
            from_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
            cc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
            bcc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_4__["CommonRegex"].MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            stage_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](5, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            information_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.informationRequired.id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    SendToClientDialogComponent.prototype.onClose = function (value) {
        this.dialogRef.close(value);
    };
    /**
     * on submit information
     * @param form
     */
    SendToClientDialogComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to send it to client?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                if (form.valid) {
                    _this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].INFORMATION_REQUIRED_SEND_INFO_DATA + '/' + _this.informationRequired.id, form.value).subscribe(function (response) {
                        _this.onClose(true);
                        _this.onGoDashboard();
                    });
                }
            }
        });
    };
    /**
     * On home page route
     */
    SendToClientDialogComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_10__["AdminRoutes"].INFORMATION_REQUIRED]);
    };
    SendToClientDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-to-client-dialog',
            template: __webpack_require__(/*! ./send-to-client-dialog.component.html */ "./src/app/admin/client-module/information-required/information-required-tab/update-information/send-to-client-dialog/send-to-client-dialog.component.html")
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_8__["SharedUserService"]])
    ], SendToClientDialogComponent);
    return SendToClientDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=default~update-information-update-information-module~view-information-view-information-module~view-q~4ae91802.js.map