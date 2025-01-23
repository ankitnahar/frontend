(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrms-dashboard-exception-shift-exception-shift-module"],{

/***/ "./src/app/admin/hrms-module/hrms-dashboard/exception-shift/add-exception-shift-dialog/add-exception-shift-dialog.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/exception-shift/add-exception-shift-dialog/add-exception-shift-dialog.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Add Exception Shift dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{((exceptionShiftDetail.id) && exceptionShiftDetail.id > 0)? 'Update' : 'Add'}}\r\n      Exception Shift\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addExceptionShiftListForm\" (submit)=\"onSubmitForm(addExceptionShiftListForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 MB-15\"><mat-label class=\"orange-color\">Note: If we need to assign all user then no need to select user for the exception shift.</mat-label></div>\r\n        <div class=\"col-md-6\">\r\n          <ng-select\r\n            [items]=\"shiftList\"\r\n            [multiple]=\"false\"\r\n            bindLabel=\"shift_name\"\r\n            [closeOnSelect]=\"true\"\r\n            bindValue=\"id\"\r\n            placeholder=\"Shift Name\"\r\n            (change)=\"getShiftUsers()\"\r\n            formControlName=\"shift_id\" required>\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addExceptionShiftListForm.get('shift_id'))\"\r\n                            [errMsg]=\"validationMsg.SHIFT_NAME\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <ng-select\r\n            [items]=\"userList\"\r\n            [closeOnSelect]=\"true\"\r\n            bindLabel=\"userfullname\"\r\n            bindValue=\"id\"\r\n            placeholder=\"User\"\r\n            formControlName=\"user_id\"\r\n            [multiple]=\"true\">\r\n          </ng-select>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"dateRef\" placeholder=\"Shift Date From\"\r\n                   formControlName=\"start_date\" required/>\r\n            <mat-datepicker-toggle matSuffix [for]=\"dateRef\"></mat-datepicker-toggle>\r\n            <mat-datepicker #dateRef disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addExceptionShiftListForm.get('start_date'))\"\r\n                            [errMsg]=\"validationMsg.DATE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"dateto\" placeholder=\"Shift Date To\"\r\n                   formControlName=\"end_date\" required/>\r\n            <mat-datepicker-toggle matSuffix [for]=\"dateto\"></mat-datepicker-toggle>\r\n            <mat-datepicker #dateto disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addExceptionShiftListForm.get('end_date'))\"\r\n                            [errMsg]=\"validationMsg.DATE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Shift Time From\" aria-label=\"Shift Time\" [ngxTimepicker]=\"shifttimefrom\"\r\n                   [format]=\"24\" formControlName=\"from_time\"\r\n                   (ngModelChange)=\"finalcutoff(addExceptionShiftListForm); lateAllowedTime(addExceptionShiftListForm)\"\r\n                   readonly required>\r\n            <ngx-material-timepicker #shifttimefrom></ngx-material-timepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addExceptionShiftListForm.get('from_time'))\"\r\n                            [errMsg]=\"validationMsg.SHIFT_TIME_FROM_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Shift Time To\" aria-label=\"Shift Time To\" [ngxTimepicker]=\"shifttimeto\"\r\n                   [format]=\"24\" formControlName=\"to_time\" readonly required>\r\n            <ngx-material-timepicker #shifttimeto></ngx-material-timepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addExceptionShiftListForm.get('to_time'))\"\r\n                            [errMsg]=\"validationMsg.SHIFT_TIME_TO_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Grace Period\" aria-label=\"Grace Period\" [ngxTimepicker]=\"grace_period\"\r\n                   [format]=\"24\" formControlName=\"grace_period\" (ngModelChange)=\"finalcutoff(addExceptionShiftListForm)\"\r\n                   readonly required>\r\n            <ngx-material-timepicker #grace_period></ngx-material-timepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addExceptionShiftListForm.get('grace_period'))\"\r\n                            [errMsg]=\"validationMsg.GRACE_PERIOD_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Consider Late Period\" aria-label=\"Consider Late Period\"\r\n                   [ngxTimepicker]=\"consider_late_period\" [format]=\"24\" formControlName=\"late_period\"\r\n                   (ngModelChange)=\"lateAllowedTime(addExceptionShiftListForm)\" readonly required>\r\n            <ngx-material-timepicker #consider_late_period></ngx-material-timepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addExceptionShiftListForm.get('late_period'))\"\r\n                            [errMsg]=\"validationMsg.CONSIDER_LATE_PERIOD_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Late Coming Allowed Count\" aria-label=\"Late Coming Allowed Count\"\r\n                   formControlName=\"late_allowed_count\"\r\n                   required type=\"number\">\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addExceptionShiftListForm.get('late_allowed_count'))\"\r\n                            [errMsg]=\"validationMsg.LATE_COMING_ALLOWED_COUNT_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Break Time\" aria-label=\"Break Time\" [ngxTimepicker]=\"break_time\" [format]=\"24\"\r\n                   formControlName=\"break_time\" readonly required>\r\n            <ngx-material-timepicker #break_time></ngx-material-timepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addExceptionShiftListForm.get('break_time'))\"\r\n                            [errMsg]=\"validationMsg.BREAK_TIME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\" *ngIf=\"finalCutOff !== ''\">\r\n          <label class=\"fw-500\">Final Cut Off:</label>\r\n          <span>{{finalCutOff}}</span>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\" *ngIf=\"lateAllowTime !== ''\">\r\n          <label class=\"fw-500\">Late allowed Time:</label>\r\n          <span>{{lateAllowTime}}</span>\r\n        </div>\r\n        <div class=\"col-md-6 MT-10\">\r\n          <mat-form-field>\r\n            <textarea matInput formControlName=\"description\" rows=\"3\" placeholder=\"Notes\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" [disabled]=\"addExceptionShiftListForm.invalid\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change InOut Time dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/exception-shift/add-exception-shift-dialog/add-exception-shift-dialog.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/exception-shift/add-exception-shift-dialog/add-exception-shift-dialog.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: AddExceptionShiftDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExceptionShiftDialogComponent", function() { return AddExceptionShiftDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
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








var AddExceptionShiftDialogComponent = /** @class */ (function (_super) {
    __extends(AddExceptionShiftDialogComponent, _super);
    function AddExceptionShiftDialogComponent(dialogRef, data, _fb, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.shiftList = [];
        _this.finalCutOff = "";
        _this.lateAllowTime = "";
        _this.userList = [];
        return _this;
    }
    AddExceptionShiftDialogComponent.prototype.ngOnInit = function () {
        this.exceptionShiftDetail = (this.data.exceptionshiftData) ? this.data.exceptionshiftData : [];
        this.createExceptionShiftListForm();
        this.getShift();
        this.finalcutoff(this.addExceptionShiftListForm);
        this.lateAllowedTime(this.addExceptionShiftListForm);
        this.getExceptionShiftListUser();
    };
    AddExceptionShiftDialogComponent.prototype.getExceptionShiftListUser = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].DROPDOWN_LIST, {
            "records": "all",
            "table": "user",
            "column": "id,userfullname",
            "sortOrder": "userfullname",
            "sortBy": "asc"
        }, { "compare": { "equal": { "shift_id": (this.exceptionShiftDetail && this.exceptionShiftDetail.shift_id && this.exceptionShiftDetail.shift_id.id) ? this.exceptionShiftDetail.shift_id.id : 0 } } }).subscribe(function (Response) {
            _this.userList = Response;
            _this.userList.map(function (item) {
                item.userfullname = item.userfullname.toString().trim();
            });
        });
    };
    AddExceptionShiftDialogComponent.prototype.getShift = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].DROPDOWN_LIST, {
            "sortOrder": "shift_name",
            "sortBy": "asc",
            "table": "hr_shift_master",
            "column": "id,shift_name"
        }, {})
            .subscribe(function (response) {
            _this.shiftList = response;
            // console.log(this.shiftList);
        });
    };
    /**
     * Create filter Master checklist
     */
    AddExceptionShiftDialogComponent.prototype.createExceptionShiftListForm = function () {
        // this.exceptionShiftDetail.user_id = "1006,1563,1657,1391,1862";
        this.addExceptionShiftListForm = this._fb.group({
            shift_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.shift_id) ? this.exceptionShiftDetail.shift_id.id : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.start_date) ? this.exceptionShiftDetail.start_date : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.end_date) ? this.exceptionShiftDetail.end_date : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            from_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.from_time) ? this.exceptionShiftDetail.from_time : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            to_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.to_time) ? this.exceptionShiftDetail.to_time : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            grace_period: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.grace_period) ? this.exceptionShiftDetail.grace_period : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            late_period: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.late_period) ? this.exceptionShiftDetail.late_period : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            late_allowed_count: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.late_allowed_count) ? this.exceptionShiftDetail.late_allowed_count : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            break_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.break_time) ? this.exceptionShiftDetail.break_time : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.description) ? this.exceptionShiftDetail.description : null : null),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.user_id) ? this.getArrayToString(this.exceptionShiftDetail.user_id, ",") : null : null)
        });
    };
    AddExceptionShiftDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    /**
     * Submit AM Notes Form
     * @param form
     */
    AddExceptionShiftDialogComponent.prototype.onSubmitForm = function (form) {
        var _this = this;
        if (form.valid) {
            form.value["start_date"] = moment__WEBPACK_IMPORTED_MODULE_7__(form.value["start_date"]).format("YYYY-MM-DD");
            form.value["end_date"] = moment__WEBPACK_IMPORTED_MODULE_7__(form.value["end_date"]).format("YYYY-MM-DD");
            if (this.exceptionShiftDetail.id) {
                form.value["_method"] = "put";
                this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].EXCEPTIONSHIFT_UPDATE, this.exceptionShiftDetail.id, form.value)
                    .subscribe(function (response) {
                    _this.dialogRef.close();
                });
            }
            else {
                form.value["is_active"] = 1;
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].EXCEPTIONSHIFT_STORE, form.value)
                    .subscribe(function (response) {
                    _this.dialogRef.close();
                });
            }
        }
    };
    AddExceptionShiftDialogComponent.prototype.finalcutoff = function (form) {
        if (form.value["grace_period"] !== null) {
            var gracePeriod = form.value["grace_period"].split(":");
            var minutes = (Number(gracePeriod[0]) * 60) + Number(gracePeriod[1]);
            this.finalCutOff = moment__WEBPACK_IMPORTED_MODULE_7__(form.value["from_time"], "hh:mm").add(moment__WEBPACK_IMPORTED_MODULE_7__["duration"](minutes, "minutes")).format("hh:mm");
        }
    };
    AddExceptionShiftDialogComponent.prototype.lateAllowedTime = function (form) {
        if (form.value["late_period"] !== null) {
            var latePeriod = form.value["late_period"].split(":");
            var minutes = (Number(latePeriod[0]) * 60) + Number(latePeriod[1]);
            this.lateAllowTime = moment__WEBPACK_IMPORTED_MODULE_7__(form.value["from_time"], "hh:mm").add(moment__WEBPACK_IMPORTED_MODULE_7__["duration"](minutes, "minutes")).format("hh:mm");
        }
    };
    /**
     * Get array values from string
     * @param {string} value
     * @param {string} seperator
     * @returns {string[]}
     */
    AddExceptionShiftDialogComponent.prototype.getArrayToString = function (value, seperator) {
        if (value) {
            var valueOne_1 = [];
            value.split(seperator).map(function (item) {
                valueOne_1.push(Number(item));
            });
            return valueOne_1;
        }
    };
    AddExceptionShiftDialogComponent.prototype.getShiftUsers = function () {
        var _this = this;
        if (this.addExceptionShiftListForm.get("shift_id").value > 0) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].DROPDOWN_LIST, {
                "records": "all",
                "table": "user",
                "column": "id,userfullname",
                "sortOrder": "userfullname",
                "sortBy": "asc"
            }, { "compare": { "equal": { "shift_id": this.addExceptionShiftListForm.get("shift_id").value } } }).subscribe(function (Response) {
                _this.userList = Response;
                _this.userList.map(function (item) {
                    item.userfullname = item.userfullname.toString().trim();
                });
            });
        }
    };
    AddExceptionShiftDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-exception-shift-dialog",
            template: __webpack_require__(/*! ./add-exception-shift-dialog.component.html */ "./src/app/admin/hrms-module/hrms-dashboard/exception-shift/add-exception-shift-dialog/add-exception-shift-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]])
    ], AddExceptionShiftDialogComponent);
    return AddExceptionShiftDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/exception-shift/exception-shift.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/exception-shift/exception-shift.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"exception-shift-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>HRMS</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">EXCEPTION SHIFT</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-9 inner-header-title MT-10\">\r\n          <button class=\"open-dialog-btn\" (click)=\"onExceptionShiftListDialog(null)\" *ngIf=\"tabData['add_edit']\">\r\n            <mat-icon class=\"material-icons\">add</mat-icon>\r\n            Add Exception Shift\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-2 PR-0\">\r\n          <div class=\"grid-search\">\r\n            <form [formGroup]=\"filterForm\">\r\n              <mat-form-field floatLabel=\"never\">\r\n                <input matInput placeholder=\"Search\" (keyup)=\"setAdvanceFilter(filterForm)\"\r\n                       formControlName=\"shift_name\">\r\n              </mat-form-field>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-1 PL-0 MT-5\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"downloadExcel()\" *ngIf=\"tabData['export']\">\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"4%\">Sr. No</th>\r\n\r\n            <th width=\"10%\"\r\n                (click)=\"getSortData('shift_name', sortBy === 'shift_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Shift Name\r\n              <i *ngIf=\"sortBy === 'shift_name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'shift_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'shift_name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'shift_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"7%\">S_Date\r\n            </th>\r\n\r\n            <th width=\"7%\">E_Date\r\n            </th>\r\n\r\n            <th width=\"5%\">S_Time\r\n            </th>\r\n\r\n            <th width=\"5%\">E_Time\r\n            </th>\r\n\r\n            <th width=\"8%\">Grace Period\r\n            </th>\r\n\r\n            <th width=\"7%\">Late Period\r\n            </th>\r\n\r\n            <th width=\"7%\">Allowed Late coming\r\n            </th>\r\n\r\n            <th width=\"8%\">Break Time\r\n            </th>\r\n\r\n            <th width=\"10%\">Note\r\n            </th>\r\n\r\n            <th width=\"14%\">Modified</th>\r\n\r\n            <th width=\"8%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let exceptionshiftlist of exceptionShiftList; let i = index\">\r\n              <td width=\"4%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"10%\">{{exceptionshiftlist?.shift_id?.shift_name}}</td>\r\n              <td width=\"7%\">{{exceptionshiftlist?.start_date | date:\"dd-MM-yyyy\"}}</td>\r\n              <td width=\"7%\">{{exceptionshiftlist?.end_date | date:\"dd-MM-yyyy\"}}</td>\r\n              <td width=\"5%\">{{exceptionshiftlist?.from_time}}</td>\r\n              <td width=\"5%\">{{exceptionshiftlist?.to_time}}</td>\r\n              <td width=\"8%\">{{exceptionshiftlist?.grace_period}}</td>\r\n              <td width=\"7%\" class=\"orange-color\">{{exceptionshiftlist?.late_period}}</td>\r\n              <td width=\"7%\" class=\"primary-color fw-500 text-center\">{{exceptionshiftlist?.late_allowed_count}}</td>\r\n              <td width=\"8%\">{{exceptionshiftlist?.break_time}}</td>\r\n              <td width=\"10%\" class=\"word-break\">{{exceptionshiftlist?.description}}</td>\r\n              <td width=\"14%\">\r\n                {{(exceptionshiftlist?.modified_by?.userfullname)?exceptionshiftlist?.modified_by?.userfullname+'\r\n                |':'-'}} {{exceptionshiftlist?.modified_on | date:\"dd-MM-yyyy\"}}\r\n              </td>\r\n              <td width=\"8%\">\r\n                <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Edit'\"\r\n                          (click)=\"onExceptionShiftListDialog(exceptionshiftlist)\" *ngIf=\"tabData['add_edit']\">edit\r\n                </mat-icon>\r\n                <mat-icon class=\"red-color\" [matTooltip]=\"'Delete'\"\r\n                          (click)=\"onDeleteExceptionShiftDialog(exceptionshiftlist)\" *ngIf=\"tabData['delete']\">delete\r\n                </mat-icon>\r\n                <span *ngIf=\"tabData['add_edit']\">\r\n                <mat-slide-toggle [matTooltip]=\"'Active'\" *ngIf=\"exceptionshiftlist?.is_active === 1\"\r\n                                  (click)=\"onOpenActiveToggleDialog(exceptionshiftlist)\"\r\n                                  [checked]=\"true\"></mat-slide-toggle>\r\n                <mat-slide-toggle [matTooltip]=\"'Inactive'\" *ngIf=\"exceptionshiftlist?.is_active === 0\"\r\n                                  (click)=\"onOpenActiveToggleDialog(exceptionshiftlist)\"\r\n                                  [checked]=\"false\"></mat-slide-toggle>\r\n                  </span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <table *ngIf=\"exceptionShiftList.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageSizeOptions]=\"pageSizeOptions\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!exceptionShiftList.length\" class=\"panel-title red-color\">\r\n      No Records Found!\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n  <!-- End Data Grid -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/exception-shift/exception-shift.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/exception-shift/exception-shift.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2hybXMtbW9kdWxlL2hybXMtZGFzaGJvYXJkL2V4Y2VwdGlvbi1zaGlmdC9leGNlcHRpb24tc2hpZnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/exception-shift/exception-shift.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/exception-shift/exception-shift.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ExceptionShiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionShiftComponent", function() { return ExceptionShiftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_exception_shift_dialog_add_exception_shift_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-exception-shift-dialog/add-exception-shift-dialog.component */ "./src/app/admin/hrms-module/hrms-dashboard/exception-shift/add-exception-shift-dialog/add-exception-shift-dialog.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ExceptionShiftComponent = /** @class */ (function () {
    function ExceptionShiftComponent(_fb, _router, dialog, _commonCrudService, _sharedService) {
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        // Data Variables
        this.exceptionShiftList = [];
        this.equalJSON = {};
        this.likeJSON = {};
        this.findinSet = {};
        // MatPaginator Inputs
        this.length = 100;
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY[1];
        this.pageSizeOptions = [5, 10, 25, 100];
        // Other Variables
        this.isOpenFilter = false;
        this.isOpenHistoryDialog = false;
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__["ADMINTABACCESS"].EXCEPTION;
    }
    /**
     * Initialization Methods
     */
    ExceptionShiftComponent.prototype.initializationMethod = function () {
        this.getExceptionShift(1, 'id', 'desc');
    };
    ExceptionShiftComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.initializationMethod();
        this.createSearchForm();
    };
    ExceptionShiftComponent.prototype.getExceptionShift = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].EXCEPTIONSHIFT_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam())
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
    ExceptionShiftComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    ExceptionShiftComponent.prototype.getSearchParam = function () {
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
        return params;
    };
    /**
     * Handle AM Notes List Response
     * @param response
     */
    ExceptionShiftComponent.prototype.handleResponse = function (response) {
        this.exceptionShiftList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Create search
     */
    ExceptionShiftComponent.prototype.createSearchForm = function () {
        this.filterForm = this._fb.group({
            shift_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
    };
    /**
     * Add Holiday list
     */
    ExceptionShiftComponent.prototype.onExceptionShiftListDialog = function (exceptionshiftlist) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_exception_shift_dialog_add_exception_shift_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddExceptionShiftDialogComponent"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {
                exceptionshiftData: (exceptionshiftlist) ? exceptionshiftlist : []
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getExceptionShift(1, 'id', 'desc');
        });
    };
    ExceptionShiftComponent.prototype.onDeleteExceptionShiftDialog = function (exceptionshiftlist) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this exception shift ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].EXCEPTIONSHIFT_DELETE, exceptionshiftlist.id).subscribe(function (Response) {
                    if (Response) {
                        _this.getExceptionShift(1, 'id', 'desc');
                    }
                });
            }
        });
    };
    ExceptionShiftComponent.prototype.onOpenActiveToggleDialog = function (exceptionshiftlist) {
        var _this = this;
        var status = exceptionshiftlist.is_active === 1 ? 'inactive' : 'active';
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to ' + status + ' this exception shift ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                var is_active = exceptionshiftlist.is_active === 1 ? 0 : 1;
                _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].EXCEPTIONSHIFT_UPDATE, exceptionshiftlist.id, {
                    'is_active': is_active,
                    '_method': 'put'
                }).subscribe(function (Response) {
                    if (Response) {
                        _this.getExceptionShift(1, 'id', 'desc');
                    }
                });
            }
            else {
                _this.getExceptionShift(1, 'id', 'desc');
            }
        });
    };
    /**
     * Toogle Filter
     */
    ExceptionShiftComponent.prototype.onOpenFilter = function () {
        this.isOpenFilter = !this.isOpenFilter;
    };
    /**
     * Close filter
     */
    ExceptionShiftComponent.prototype.onCloseFilter = function () {
        this.isOpenFilter = false;
    };
    ExceptionShiftComponent.prototype.onClearTags = function () {
        // this.tagList = [];
    };
    ExceptionShiftComponent.prototype.onHrmsDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].HRMS_DASHBOARD]);
    };
    ExceptionShiftComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilter = false;
        }
    };
    /**
     * Pagination page change method
     * @param event
     */
    ExceptionShiftComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getExceptionShift(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Export to Excel
     */
    ExceptionShiftComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].EXCEPTIONSHIFT_EXPORT, params, this.getSearchParam(), 'Exception shift - ', 0).subscribe(function (response) {
        });
    };
    // Set Advance Filter
    ExceptionShiftComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.likeJSON = {};
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
                    if (key === 'shift_name') {
                        this.likeJSON[key] = form.value[key];
                    }
                }
            }
            this.getExceptionShift(1, this.sortBy, this.sortOrder);
        }
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    ExceptionShiftComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getExceptionShift(1, sortKey, sortVal);
    };
    /**
     * On home page route
     */
    ExceptionShiftComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ExceptionShiftComponent.prototype, "onKeydownHandler", null);
    ExceptionShiftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exception-shift',
            template: __webpack_require__(/*! ./exception-shift.component.html */ "./src/app/admin/hrms-module/hrms-dashboard/exception-shift/exception-shift.component.html"),
            styles: [__webpack_require__(/*! ./exception-shift.component.scss */ "./src/app/admin/hrms-module/hrms-dashboard/exception-shift/exception-shift.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"]])
    ], ExceptionShiftComponent);
    return ExceptionShiftComponent;
}());



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/exception-shift/exception-shift.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/exception-shift/exception-shift.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ExceptionShiftModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionShiftModule", function() { return ExceptionShiftModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _exception_shift_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exception-shift.component */ "./src/app/admin/hrms-module/hrms-dashboard/exception-shift/exception-shift.component.ts");
/* harmony import */ var _add_exception_shift_dialog_add_exception_shift_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-exception-shift-dialog/add-exception-shift-dialog.component */ "./src/app/admin/hrms-module/hrms-dashboard/exception-shift/add-exception-shift-dialog/add-exception-shift-dialog.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _exception_shift_component__WEBPACK_IMPORTED_MODULE_2__["ExceptionShiftComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]],
    },
];
var ExceptionShiftModule = /** @class */ (function () {
    function ExceptionShiftModule() {
    }
    ExceptionShiftModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_6__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_exception_shift_component__WEBPACK_IMPORTED_MODULE_2__["ExceptionShiftComponent"], _add_exception_shift_dialog_add_exception_shift_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddExceptionShiftDialogComponent"]],
            entryComponents: [_add_exception_shift_dialog_add_exception_shift_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddExceptionShiftDialogComponent"]]
        })
    ], ExceptionShiftModule);
    return ExceptionShiftModule;
}());



/***/ })

}]);
//# sourceMappingURL=hrms-dashboard-exception-shift-exception-shift-module.js.map