(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrms-dashboard-holiday-master-holiday-master-module"],{

/***/ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/add-holiday-master-dialog/add-holiday-master-dialog.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/holiday-master/add-holiday-master-dialog/add-holiday-master-dialog.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Holiday Master dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{(holidayMasterDetail?.id)?'Update':'Add'}} Holiday</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose(false)\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addHolidayMasterForm\" (submit)=\"onSubmit(addHolidayMasterForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Year\" formControlName=\"year\" (selectionChange)=\"updateDateSelection($event.value)\"\r\n                        required>\r\n              <mat-option *ngFor=\"let yr of yearList\" [value]=\"yr['key']\">\r\n                {{'January - '+yr['key']+' To December - '+yr['key']}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addHolidayMasterForm.get('year'))\"\r\n                            [errMsg]=\"validationMsg.YEAR_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"holidayDate\" placeholder=\"Holiday Date\"\r\n                   formControlName=\"date\" required/>\r\n            <mat-datepicker-toggle matSuffix [for]=\"holidayDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #holidayDate></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addHolidayMasterForm.get('date'))\"\r\n                            [errMsg]=\"validationMsg.DATE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <textarea matInput formControlName=\"description\" rows=\"3\" placeholder=\"Description\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addHolidayMasterForm.get('description'))\"\r\n                            [errMsg]=\"validationMsg.NOTE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Holiday display to client dashboard?\" formControlName=\"is_client\">\r\n              <mat-option *ngFor=\"let yesNo of yesNoDropDown.slice(1)\" [value]=\"yesNo?.key\">\r\n                {{ yesNo?.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addHolidayMasterForm.get('is_client'))\"\r\n                            [errMsg]=\"validationMsg.CLIENT_DASHBOARD_SHOW_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" [disabled]=\"addHolidayMasterForm.invalid\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Holiday Master dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/add-holiday-master-dialog/add-holiday-master-dialog.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/holiday-master/add-holiday-master-dialog/add-holiday-master-dialog.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: AddHolidayMasterDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHolidayMasterDialogComponent", function() { return AddHolidayMasterDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
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










var AddHolidayMasterDialogComponent = /** @class */ (function (_super) {
    __extends(AddHolidayMasterDialogComponent, _super);
    function AddHolidayMasterDialogComponent(dialogRef, data, _fb, _commonCrudService, dialog) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this.dialog = dialog;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        _this.yearList = [];
        _this.yesNoDropDown = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["yesNo"];
        return _this;
    }
    AddHolidayMasterDialogComponent.prototype.ngOnInit = function () {
        this.holidayMasterDetail = (this.data.holidayMasterDetail) ? this.data.holidayMasterDetail : [];
        this.createHolidayForm();
        this.yearData();
    };
    AddHolidayMasterDialogComponent.prototype.yearData = function () {
        this.currentYear = new Date().getFullYear();
        for (var i = 0; i <= 2; i++) {
            var newYear = this.currentYear + i;
            this.yearList.push({ 'key': newYear, 'value': newYear });
        }
    };
    /**
     * Create Holiday Master Form
     */
    AddHolidayMasterDialogComponent.prototype.createHolidayForm = function () {
        this.addHolidayMasterForm = this._fb.group({
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.holidayMasterDetail) ? (this.holidayMasterDetail.year) ? this.holidayMasterDetail.year : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.holidayMasterDetail) ? (this.holidayMasterDetail.date) ? this.holidayMasterDetail.date : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.holidayMasterDetail) ? (this.holidayMasterDetail.description) ? this.holidayMasterDetail.description : null : null),
            is_client: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.holidayMasterDetail) ? (this.holidayMasterDetail.is_client) ? this.holidayMasterDetail.is_client : null : null)
        });
    };
    AddHolidayMasterDialogComponent.prototype.onClose = function (value) {
        this.dialogRef.close(value);
    };
    AddHolidayMasterDialogComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            var dateItem = form.value['date'];
            form.value['date'] = moment__WEBPACK_IMPORTED_MODULE_6__(dateItem).format('YYYY-MM-DD');
            if (this.holidayMasterDetail.id) {
                form.value['_method'] = 'put';
                var dismissDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
                    data: {
                        content: 'Edit of date will affect holiday master & attendance summary. Are you sure you want to amend?'
                    }
                });
                dismissDialog.afterClosed().subscribe(function (value) {
                    if (value) {
                        _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].HOLIDAY_MASTER_LIST, _this.holidayMasterDetail.id, form.value).subscribe(function (response) {
                            _this.dialogRef.close(true);
                        });
                    }
                });
            }
            else {
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].HOLIDAY_MASTER_STORE, form.value).subscribe(function (response) {
                    _this.dialogRef.close(true);
                });
            }
            form.value['date'] = dateItem;
        }
    };
    /**
     *
     * @param val
     */
    AddHolidayMasterDialogComponent.prototype.updateDateSelection = function (val) {
        // this.yearStart = new Date().setFullYear(val, 01, 01);
        // this.yearEnd  = new Date().setFullYear(val, 12, 31);
        this.minDate = new Date(val, 0, 1);
        this.maxDate = new Date(val, 11, 31);
    };
    AddHolidayMasterDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-holiday-master-dialog',
            template: __webpack_require__(/*! ./add-holiday-master-dialog.component.html */ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/add-holiday-master-dialog/add-holiday-master-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AddHolidayMasterDialogComponent);
    return AddHolidayMasterDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_8__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master-upload-csv/holiday-master-upload-csv.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master-upload-csv/holiday-master-upload-csv.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Holiday Master upload CSV dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Upload CSV</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose(false)\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addHolidayMasterCSVForm\" (submit)=\"onSubmit(addHolidayMasterCSVForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Uploaded CSV File\" type=\"text\" name=\"uploadDocument\"\r\n                   formControlName=\"upload\" readonly>\r\n            <mat-icon matSuffix (click)=\"onClear()\" *ngIf=\"documentName\">close</mat-icon>\r\n            <mat-icon matSuffix (click)=\"onChooseDocument()\">attach_file</mat-icon>\r\n            <input type=\"file\" [hidden]=\"true\" id=\"uploadDocument\" (change)=\"onUploadDocument($event)\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addHolidayMasterCSVForm.get('upload'))\"\r\n                            [errMsg]=\"validationMsg.CSV_REQUIRED\"></app-validation>\r\n          </div>\r\n          <a href=\"{{url+'docs/holidaylist.csv'}}\" class=\"primary-color cursor-pointer\">\r\n            <mat-icon class=\"upload_ico\">get_app</mat-icon>\r\n            Download supported format</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" [disabled]=\"addHolidayMasterCSVForm.invalid\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Holiday Master dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master-upload-csv/holiday-master-upload-csv.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master-upload-csv/holiday-master-upload-csv.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: HolidayMasterUploadCsvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayMasterUploadCsvComponent", function() { return HolidayMasterUploadCsvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
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









var HolidayMasterUploadCsvComponent = /** @class */ (function (_super) {
    __extends(HolidayMasterUploadCsvComponent, _super);
    function HolidayMasterUploadCsvComponent(dialogRef, data, _fb, _commonCrudService, _sharedService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        _this.url = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].IMAGE_PATH;
        _this.docArray = [];
        return _this;
    }
    HolidayMasterUploadCsvComponent.prototype.ngOnInit = function () {
        this.createHolidayMasterCSVForm();
    };
    /**
     * Create Holiday Master Form
     */
    HolidayMasterUploadCsvComponent.prototype.createHolidayMasterCSVForm = function () {
        this.addHolidayMasterCSVForm = this._fb.group({
            upload: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    HolidayMasterUploadCsvComponent.prototype.onClose = function (value) {
        this.dialogRef.close(value);
    };
    /**
     * uploading new document
     * @param formValue
     * @param isValid
     */
    HolidayMasterUploadCsvComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].HOLIDAY_MASTER_UPLOAD, form.value, this.docArray).subscribe(function (Response) {
                _this.dialogRef.close(true);
            });
        }
    };
    /**
     * On clear document name
     */
    HolidayMasterUploadCsvComponent.prototype.onClear = function () {
        this.documentName = '';
    };
    /**
     * Upload document browse file method
     */
    HolidayMasterUploadCsvComponent.prototype.onChooseDocument = function () {
        document.getElementById('uploadDocument').click();
    };
    /**
     * select event of document
     * @param event
     */
    HolidayMasterUploadCsvComponent.prototype.onUploadDocument = function (event) {
        if (event.target.files) {
            this.docArray = [];
            for (var index = 0; index < event.target.files.length; index++) {
                // console.log(event.target.files[index].type);
                var name_1 = event.target.files[0].name;
                var lastDot = name_1.lastIndexOf('.');
                var ext = name_1.substring(lastDot + 1);
                // console.log(ext);
                if (ext.toLowerCase() === 'csv') {
                    if (event.target.files[index].size > _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstant"].THREE_MB_IMAGE_SIZE_ALLOWED) {
                        this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["ToastErrorMessages"].VALID_PDF_SIZE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["ToastType"].ERROR);
                        return;
                    }
                    else {
                        var file = event.target.files[0];
                        this.addHolidayMasterCSVForm.get('upload').setValue(file.name);
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        this.docArray.push({
                            'reqKey': 'upload',
                            'file': event.target.files,
                        });
                    }
                }
                else {
                    this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["ToastErrorMessages"].VALID_CSV_SELECTION, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["ToastType"].ERROR);
                    return;
                }
            }
        }
    };
    HolidayMasterUploadCsvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-holiday-master-upload-csv',
            template: __webpack_require__(/*! ./holiday-master-upload-csv.component.html */ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master-upload-csv/holiday-master-upload-csv.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], HolidayMasterUploadCsvComponent);
    return HolidayMasterUploadCsvComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"holiday-list-out-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>HRMS</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">HOLIDAY MASTER</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <button class=\"open-dialog-btn\" (click)=\"onAddEditHolidayListDialog()\">\r\n            <mat-icon class=\"material-icons\">add</mat-icon>\r\n            Add Holiday\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li class=\"primary-color\">\r\n              <a class=\"download-icon\" (click)=\"onUploadCSVDialog()\">\r\n                <i class=\"material-icons\">cloud_upload</i> <span class=\"fw-500\"> Upload CSV</span> </a>\r\n            </li>\r\n            <li>\r\n              <a (click)=\"onOpenFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilter}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilter\" (click)=\"onCloseFilter()\">Esc <mat-icon\r\n          class=\"material-icons\">close</mat-icon></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"holidayMasterFilterForm\" (submit)=\"setAdvanceFilter(holidayMasterFilterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Year\" formControlName=\"year\">\r\n                  <mat-option *ngFor=\"let year of yearList\" [value]=\"year.value\">{{year.key}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"holidaydate\" placeholder=\"Holiday Date\" formControlName=\"date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"holidaydate\"></mat-datepicker-toggle>\r\n                <mat-datepicker #holidaydate></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Holiday display to client dashboard?\" formControlName=\"is_client\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoDropDown.slice(1)\" [value]=\"yesNo?.key\">\r\n                    {{ yesNo?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"filterHolidayMasterForm\">\r\n        <div class=\"tag\" *ngIf=\"yearField.value\">\r\n          <span class=\"tag__title\">Year:</span>\r\n          <span>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Year\" formControlName=\"year\"\r\n                            (selectionChange)=\"setAdvanceFilterKeyUp($event, filterHolidayMasterForm, true)\">\r\n                  <mat-option *ngFor=\"let yr of yearList\" [value]=\"yr['key']\">\r\n                    {{'January - '+yr['key']+' To December - '+yr['key']}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('year')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"dateField.value\">\r\n          <span class=\"tag__title\">Holiday Date:</span>\r\n          <span>\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"date\" placeholder=\"Date\" #dateRef formControlName=\"date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"date\"\r\n                                       (dateChange)=\"setAdvanceFilterKeyUp($event, filterHolidayMasterForm, true)\"></mat-datepicker-toggle>\r\n                <mat-datepicker #date></mat-datepicker>\r\n              </mat-form-field>\r\n            </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('date')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"(isClientField.value >=0 && isClientField.value !== null)\">\r\n          <span class=\"tag__title\">Holiday display to client dashboard:</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Holiday display to client dashboard?\" formControlName=\"is_client\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, filterHolidayMasterForm, true)\">\r\n              <mat-option *ngFor=\"let yesNo of yesNoDropDown.slice(1)\" [value]=\"yesNo?.key\">\r\n                {{ yesNo?.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('is_client')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"clearAll-tags\" *ngIf=\"yearField.value || dateField.value || (isClientField.value >=0 && isClientField.value !== null)\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n\r\n            <th width=\"15%\">Holiday Date\r\n            </th>\r\n\r\n            <th width=\"15%\">Year\r\n            </th>\r\n\r\n            <th width=\"40%\">Description</th>\r\n            <th width=\"15%\">Holiday display <br>to client dashboard?</th>\r\n            <th width=\"10%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let holidaymaster of holidayMaster; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"15%\">{{holidaymaster?.date | date : 'dd-MM-yyyy'}}</td>\r\n              <td width=\"15%\">{{holidaymaster?.year}}</td>\r\n              <td width=\"40%\" class=\"word-break\">{{holidaymaster?.description}}</td>\r\n              <td width=\"15%\" class=\"word-break\">{{holidaymaster?.is_client === 1 ? 'Yes': 'No'}}</td>\r\n              <td width=\"10%\">\r\n                <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Edit'\"\r\n                          (click)=\"onAddEditHolidayListDialog(holidaymaster)\">\r\n                  edit\r\n                </mat-icon>\r\n                <mat-icon class=\"red-color\" [matTooltip]=\"'Delete'\" (click)=\"onDeleteHolidayListDialog(holidaymaster)\">\r\n                  delete\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table *ngIf=\"holidayMaster.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n    <div *ngIf=\"!holidayMaster.length\" class=\"panel-title red-color\">\r\n      No Records Found!\r\n    </div>\r\n  </div>\r\n  <!-- End Data Grid -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2hybXMtbW9kdWxlL2hybXMtZGFzaGJvYXJkL2hvbGlkYXktbWFzdGVyL2hvbGlkYXktbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: HolidayMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayMasterComponent", function() { return HolidayMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _add_holiday_master_dialog_add_holiday_master_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-holiday-master-dialog/add-holiday-master-dialog.component */ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/add-holiday-master-dialog/add-holiday-master-dialog.component.ts");
/* harmony import */ var _holiday_master_upload_csv_holiday_master_upload_csv_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./holiday-master-upload-csv/holiday-master-upload-csv.component */ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master-upload-csv/holiday-master-upload-csv.component.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HolidayMasterComponent = /** @class */ (function () {
    function HolidayMasterComponent(_fb, _router, dialog, _commonCrudService) {
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        // Data Variables
        this.holidayMaster = [];
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilter = false;
        this.isOpenHistoryDialog = false;
        this.yearList = [];
        this.currentYear = 0;
        this.yesNoDropDown = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["yesNo"];
    }
    Object.defineProperty(HolidayMasterComponent.prototype, "yearField", {
        get: function () {
            return this.filterHolidayMasterForm.get('year');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HolidayMasterComponent.prototype, "isClientField", {
        get: function () {
            return this.filterHolidayMasterForm.get('is_client');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HolidayMasterComponent.prototype, "dateField", {
        get: function () {
            return this.filterHolidayMasterForm.get('date');
        },
        enumerable: true,
        configurable: true
    });
    HolidayMasterComponent.prototype.ngOnInit = function () {
        this.createHolidayMasterForm();
        this.yearData();
        this.setAdvanceFilter(this.holidayMasterFilterForm);
    };
    HolidayMasterComponent.prototype.yearData = function () {
        this.currentYear = new Date().getFullYear();
        for (var i = 0; i <= 2; i++) {
            var newYear = this.currentYear + i;
            this.yearList.push({ 'key': newYear, 'value': newYear });
        }
    };
    /**
     * Get Holiday Master List
     * @param pageNumber
     * @param key
     * @param val
     */
    HolidayMasterComponent.prototype.getHolidayMasterList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].HOLIDAY_MASTER_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParams())
            .subscribe(function (response) {
            _this.handleResponse(response);
        });
    };
    /**
     * getting advanced search params for conference room list api
     * @returns {{}}
     */
    HolidayMasterComponent.prototype.getSearchParams = function () {
        var params = {};
        var filter = {};
        // check for the object whether it's empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if ((Object.keys(this.equalJSON).length)) {
            params['compare'] = filter;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length) {
            params['compare'] = filter;
        }
        return params;
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    HolidayMasterComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    HolidayMasterComponent.prototype.handleResponse = function (response) {
        this.holidayMaster = response['payload']['data'];
        this.page = response['pager']['pageNumber'];
        this.pageIndex = this.page - 1;
        this.totalRecords = +(response['pager']['totalRecords']);
        this.sortBy = response['pager']['sortBy'];
        this.sortOrder = response['pager']['sortOrder'];
    };
    HolidayMasterComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getHolidayMasterList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Create holiday list
     */
    HolidayMasterComponent.prototype.createHolidayMasterForm = function () {
        this.holidayMasterFilterForm = this._fb.group({
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date().getFullYear()),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            is_client: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
        this.filterHolidayMasterForm = this._fb.group({
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date().getFullYear()),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            is_client: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    HolidayMasterComponent.prototype.setAdvanceFilter = function (form, flag) {
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
                        this.filterHolidayMasterForm.get(key).setValue(form.value[key]);
                    }
                }
            }
        }
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'year' || key === 'is_client') {
                        this.equalJSON[key] = form.value[key];
                    }
                    if (key === 'date') {
                        this.equalJSON['year'] = Number(moment__WEBPACK_IMPORTED_MODULE_11__(form.value[key]).format('YYYY'));
                        this.equalJSON[key] = moment__WEBPACK_IMPORTED_MODULE_11__(form.value[key]).format('YYYY-MM-DD');
                    }
                }
            }
            // console.log(this.equalJSON);
            this.isOpenFilter = false;
            this.getHolidayMasterList(1, 'year', 'desc');
        }
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    HolidayMasterComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
        var processToReq = false;
        if (flag) {
            processToReq = true;
        }
        else {
            if (event.keyCode === 13) {
                processToReq = true;
            }
        }
        if (form.value['date'] != null) {
            form.value['year'] = Number(moment__WEBPACK_IMPORTED_MODULE_11__(form.value['date']).format('YYYY'));
        }
        if (processToReq) {
            this.holidayMasterFilterForm.setValue({
                'year': (form.value['year']) ? form.value['year'] : this.currentYear,
                'date': form.value['date'],
                'is_client': form.value['is_client'],
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Reset All Filters
     */
    HolidayMasterComponent.prototype.resetFilterForm = function () {
        this.createHolidayMasterForm();
        this.likeJSON = {};
        this.isOpenFilter = false;
        this.getHolidayMasterList(1, 'year', 'desc');
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    HolidayMasterComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.holidayMasterFilterForm.get(elementName).setValue(null);
        this.filterHolidayMasterForm.get(elementName).setValue(null);
        if (elementName === 'year' || elementName === 'date' || elementName === 'is_client') {
            delete this.equalJSON[elementName];
        }
        this.getHolidayMasterList(1, this.sortBy, this.sortOrder);
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    HolidayMasterComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getHolidayMasterList(1, sortKey, sortVal);
    };
    /**
     * On Add Holiday List
     * @param holidaymaster
     */
    HolidayMasterComponent.prototype.onAddEditHolidayListDialog = function (holidaymaster) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_holiday_master_dialog_add_holiday_master_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddHolidayMasterDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                holidayMasterDetail: holidaymaster
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getHolidayMasterList(1, _this.sortBy, _this.sortOrder);
            }
        });
    };
    /**
     * On Upload CSV Dialog
     */
    HolidayMasterComponent.prototype.onUploadCSVDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_holiday_master_upload_csv_holiday_master_upload_csv_component__WEBPACK_IMPORTED_MODULE_7__["HolidayMasterUploadCsvComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getHolidayMasterList(1, _this.sortBy, _this.sortOrder);
            }
        });
    };
    /**
     * On Delete Holiday List
     * @param holidaymaster
     */
    HolidayMasterComponent.prototype.onDeleteHolidayListDialog = function (holidaymaster) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogComponent"], {
            data: {
                content: 'Deletion of date will affect holiday master & attendance summary. Are you sure you want to delete?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this.onDeleteHoliday(holidaymaster);
            }
        });
    };
    /**
     * On Delete Holiday Master
     * @param holidayDetail
     */
    HolidayMasterComponent.prototype.onDeleteHoliday = function (holidayDetail) {
        var _this = this;
        this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].HOLIDAY_MASTER_LIST, holidayDetail.id).subscribe(function (response) {
            _this.getHolidayMasterList(1, _this.sortBy, _this.sortOrder);
        });
    };
    /**
     * Toogle Filter
     */
    HolidayMasterComponent.prototype.onOpenFilter = function () {
        this.isOpenFilter = !this.isOpenFilter;
    };
    /**
     * Close filter
     */
    HolidayMasterComponent.prototype.onCloseFilter = function () {
        this.isOpenFilter = false;
    };
    HolidayMasterComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    HolidayMasterComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilter = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], HolidayMasterComponent.prototype, "onKeydownHandler", null);
    HolidayMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-holiday-master',
            template: __webpack_require__(/*! ./holiday-master.component.html */ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master.component.html"),
            styles: [__webpack_require__(/*! ./holiday-master.component.scss */ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__["CommonCrudService"]])
    ], HolidayMasterComponent);
    return HolidayMasterComponent;
}());



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master.module.ts ***!
  \******************************************************************************************/
/*! exports provided: HolidayMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayMasterModule", function() { return HolidayMasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _holiday_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./holiday-master.component */ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _add_holiday_master_dialog_add_holiday_master_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-holiday-master-dialog/add-holiday-master-dialog.component */ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/add-holiday-master-dialog/add-holiday-master-dialog.component.ts");
/* harmony import */ var _holiday_master_upload_csv_holiday_master_upload_csv_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./holiday-master-upload-csv/holiday-master-upload-csv.component */ "./src/app/admin/hrms-module/hrms-dashboard/holiday-master/holiday-master-upload-csv/holiday-master-upload-csv.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _holiday_master_component__WEBPACK_IMPORTED_MODULE_2__["HolidayMasterComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]],
    },
];
var HolidayMasterModule = /** @class */ (function () {
    function HolidayMasterModule() {
    }
    HolidayMasterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_holiday_master_component__WEBPACK_IMPORTED_MODULE_2__["HolidayMasterComponent"], _add_holiday_master_dialog_add_holiday_master_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddHolidayMasterDialogComponent"], _holiday_master_upload_csv_holiday_master_upload_csv_component__WEBPACK_IMPORTED_MODULE_7__["HolidayMasterUploadCsvComponent"]],
            entryComponents: [_add_holiday_master_dialog_add_holiday_master_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddHolidayMasterDialogComponent"], _holiday_master_upload_csv_holiday_master_upload_csv_component__WEBPACK_IMPORTED_MODULE_7__["HolidayMasterUploadCsvComponent"]]
        })
    ], HolidayMasterModule);
    return HolidayMasterModule;
}());



/***/ })

}]);
//# sourceMappingURL=hrms-dashboard-holiday-master-holiday-master-module.js.map