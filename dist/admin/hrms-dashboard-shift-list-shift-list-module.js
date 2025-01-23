(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrms-dashboard-shift-list-shift-list-module"],{

/***/ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/add-shift-list-dialog/add-shift-list-dialog.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/shift-list/add-shift-list-dialog/add-shift-list-dialog.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Add Shift list dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{(shiftDetail?.id)?'Update':'Add'}} Shift List</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose(false)\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addShiftListForm\" (submit)=\"onSubmit(addShiftListForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Shift Name\" formControlName=\"shift_name\" required>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addShiftListForm.get('shift_name'))\"\r\n                            [errMsg]=\"validationMsg.SHIFT_NAME\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Shift Time From\" aria-label=\"Shift Time\" [ngxTimepicker]=\"shifttimefrom\"\r\n                   [format]=\"24\" formControlName=\"from_time\"\r\n                   (ngModelChange)=\"finalcutoff(addShiftListForm); lateAllowedTime(addShiftListForm)\" required readonly>\r\n            <ngx-material-timepicker #shifttimefrom></ngx-material-timepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addShiftListForm.get('from_time'))\"\r\n                            [errMsg]=\"validationMsg.SHIFT_TIME_FROM_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Shift Time To\" aria-label=\"Shift Time To\" [ngxTimepicker]=\"shifttimeto\"\r\n                   [format]=\"24\" formControlName=\"to_time\" required readonly>\r\n            <ngx-material-timepicker #shifttimeto></ngx-material-timepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addShiftListForm.get('to_time'))\"\r\n                            [errMsg]=\"validationMsg.SHIFT_TIME_TO_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Grace Period\" aria-label=\"Grace Period\" [ngxTimepicker]=\"grace_period\"\r\n                   [format]=\"24\" (ngModelChange)=\"finalcutoff(addShiftListForm)\" formControlName=\"grace_period\" required\r\n                   readonly>\r\n            <ngx-material-timepicker #grace_period></ngx-material-timepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addShiftListForm.get('grace_period'))\"\r\n                            [errMsg]=\"validationMsg.GRACE_PERIOD_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Consider Late Period\" aria-label=\"Consider Late Period\"\r\n                   [ngxTimepicker]=\"consider_late_period\" [format]=\"24\"\r\n                   (ngModelChange)=\"lateAllowedTime(addShiftListForm)\" formControlName=\"late_period\" required readonly>\r\n            <ngx-material-timepicker #consider_late_period></ngx-material-timepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addShiftListForm.get('late_period'))\"\r\n                            [errMsg]=\"validationMsg.CONSIDER_LATE_PERIOD_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Late Coming Allowed Count\" aria-label=\"Late Coming Allowed Count\"\r\n                   formControlName=\"late_allowed_count\" type=\"number\" required>\r\n            <!--<ngx-material-timepicker #late_coming_allowed></ngx-material-timepicker>-->\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addShiftListForm.get('late_allowed_count'))\"\r\n                            [errMsg]=\"validationMsg.LATE_COMING_ALLOWED_COUNT_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Break Time\" aria-label=\"Break Time\" [ngxTimepicker]=\"break_time\" [format]=\"24\"\r\n                   formControlName=\"break_time\" required readonly>\r\n            <ngx-material-timepicker #break_time></ngx-material-timepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addShiftListForm.get('break_time'))\"\r\n                            [errMsg]=\"validationMsg.BREAK_TIME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\" *ngIf=\"shiftDetail?.id\">\r\n        </div>\r\n        <div class=\"col-md-6 MT-10\" *ngIf=\"!shiftDetail?.id\">\r\n          <ng-select\r\n            [items]=\"shiftListData\"\r\n            [multiple]=\"false\"\r\n            bindLabel=\"shift_name\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            bindValue=\"id\"\r\n            placeholder=\"Copy Holiday of Shift\"\r\n            formControlName=\"holiday_shift_id\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-6 MT-10\" *ngIf=\"finalCutOff !== ''\">\r\n          <label class=\"fw-500 MR-10\">Final Cut Off:</label>\r\n          <span>{{finalCutOff}}</span>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-10\" *ngIf=\"lateAllowTime !== ''\">\r\n          <label class=\"fw-500 MR-10\">Late allowed Time:</label>\r\n          <span>{{lateAllowTime}}</span>\r\n        </div>\r\n        <!--<div class=\"col-md-12 MT-10\">-->\r\n        <!--<ng-select-->\r\n        <!--[items]=\"email_id\"-->\r\n        <!--[multiple]=\"true\"-->\r\n        <!--bindLabel=\"email\"-->\r\n        <!--groupBy=\"id\"-->\r\n        <!--[closeOnSelect]=\"false\"-->\r\n        <!--bindValue=\"id\"-->\r\n        <!--placeholder=\"Email to CC\"-->\r\n        <!--formControlName=\"email_cc\">-->\r\n        <!--</ng-select>-->\r\n        <!--</div>-->\r\n        <div class=\"col-md-6 MT-15\">\r\n          <ng-select\r\n            [items]=\"satOffList\"\r\n            [multiple]=\"false\"\r\n            bindLabel=\"label\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            bindValue=\"key\"\r\n            placeholder=\"Saturday Off\"\r\n            formControlName=\"sat_off\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-6 MT-15\">\r\n          <mat-form-field>\r\n            <textarea matInput formControlName=\"description\" rows=\"3\" placeholder=\"Notes\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" [disabled]=\"addShiftListForm.invalid\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change InOut Time dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/add-shift-list-dialog/add-shift-list-dialog.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/shift-list/add-shift-list-dialog/add-shift-list-dialog.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AddShiftListDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddShiftListDialogComponent", function() { return AddShiftListDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
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









var AddShiftListDialogComponent = /** @class */ (function (_super) {
    __extends(AddShiftListDialogComponent, _super);
    function AddShiftListDialogComponent(dialogRef, data, _fb, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this.shiftListData = [];
        _this.finalCutOff = '';
        _this.lateAllowTime = '';
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        _this.satOffList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["hrSat"].slice(1);
        _this.departmentList = [];
        return _this;
    }
    AddShiftListDialogComponent.prototype.ngOnInit = function () {
        this.shiftDetail = (this.data.shiftData) ? this.data.shiftData : [];
        this.shiftListData = (this.data.shiftListData) ? this.data.shiftListData : [];
        this.getDepartmentList();
        this.createAddShiftListForm();
        this.finalcutoff(this.addShiftListForm);
        this.lateAllowedTime(this.addShiftListForm);
    };
    AddShiftListDialogComponent.prototype.getDepartmentList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].DEPARTMENT, { 'records': 'all' }).subscribe(function (Response) {
            _this.departmentList = Response.payload.data;
        });
    };
    /**
     * Create filter Master checklist
     */
    AddShiftListDialogComponent.prototype.createAddShiftListForm = function () {
        this.addShiftListForm = this._fb.group({
            shift_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.shiftDetail) ? (this.shiftDetail.shift_name) ? this.shiftDetail.shift_name : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            from_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.shiftDetail) ? (this.shiftDetail.from_time) ? this.shiftDetail.from_time : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            to_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.shiftDetail) ? (this.shiftDetail.to_time) ? this.shiftDetail.to_time : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            grace_period: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.shiftDetail) ? (this.shiftDetail.grace_period) ? this.shiftDetail.grace_period : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            late_period: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.shiftDetail) ? (this.shiftDetail.late_period) ? this.shiftDetail.late_period : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            late_allowed_count: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.shiftDetail) ? (this.shiftDetail.late_allowed_count) ? this.shiftDetail.late_allowed_count : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            break_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.shiftDetail) ? (this.shiftDetail.break_time) ? this.shiftDetail.break_time : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            holiday_shift_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.shiftDetail) ? (this.shiftDetail.holiday_shift_id) ? this.shiftDetail.holiday_shift_id : null : null),
            // email_cc: new FormControl(),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.shiftDetail) ? (this.shiftDetail.description) ? this.shiftDetail.description : null : null),
            sat_off: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.shiftDetail) ? (this.shiftDetail.sat_off) ? this.shiftDetail.sat_off : null : null)
        });
    };
    AddShiftListDialogComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['from_time'] = moment__WEBPACK_IMPORTED_MODULE_4__(form.value['from_time'], ['h:mm A']).format('HH:mm');
            form.value['to_time'] = moment__WEBPACK_IMPORTED_MODULE_4__(form.value['to_time'], ['h:mm A']).format('HH:mm');
            form.value['grace_period'] = moment__WEBPACK_IMPORTED_MODULE_4__(form.value['grace_period'], ['h:mm A']).format('HH:mm');
            form.value['late_period'] = moment__WEBPACK_IMPORTED_MODULE_4__(form.value['late_period'], ['h:mm A']).format('HH:mm');
            form.value['break_time'] = moment__WEBPACK_IMPORTED_MODULE_4__(form.value['break_time'], ['h:mm A']).format('HH:mm');
            form.value['is_active'] = 1;
            if (this.shiftDetail.id) {
                form.value['_method'] = 'put';
                form.value['actionType'] = 0;
                this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].SHIFT_UPDATE, this.shiftDetail.id, form.value).subscribe(function (response) {
                    _this.dialogRef.close(true);
                });
            }
            else {
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].SHIFT_STORE, form.value).subscribe(function (response) {
                    _this.dialogRef.close(true);
                });
            }
        }
    };
    AddShiftListDialogComponent.prototype.onClose = function (value) {
        this.dialogRef.close(value);
    };
    AddShiftListDialogComponent.prototype.finalcutoff = function (form) {
        if (form.value['grace_period'] !== null) {
            var gracePeriod = form.value['grace_period'].split(':');
            var minutes = (Number(gracePeriod[0]) * 60) + Number(gracePeriod[1]);
            this.finalCutOff = moment__WEBPACK_IMPORTED_MODULE_4__(form.value['from_time'], 'hh:mm').add(moment__WEBPACK_IMPORTED_MODULE_4__["duration"](minutes, 'minutes')).format('hh:mm');
        }
    };
    AddShiftListDialogComponent.prototype.lateAllowedTime = function (form) {
        if (form.value['late_period'] !== null) {
            var latePeriod = form.value['late_period'].split(':');
            var minutes = (Number(latePeriod[0]) * 60) + Number(latePeriod[1]);
            this.lateAllowTime = moment__WEBPACK_IMPORTED_MODULE_4__(form.value['from_time'], 'hh:mm').add(moment__WEBPACK_IMPORTED_MODULE_4__["duration"](minutes, 'minutes')).format('hh:mm');
        }
    };
    AddShiftListDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-shift-list-dialog',
            template: __webpack_require__(/*! ./add-shift-list-dialog.component.html */ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/add-shift-list-dialog/add-shift-list-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]])
    ], AddShiftListDialogComponent);
    return AddShiftListDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/shif-change-action-dialog/shif-change-action-dialog.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/shift-list/shif-change-action-dialog/shif-change-action-dialog.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Add Shift list dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{this.shiftData.shift_name}}</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n  <form [formGroup]=\"addShiftChangeForm\" (submit)=\"onSumbit(addShiftChangeForm)\">\r\n    <div class=\"modal__body\" *ngIf=\"!userList.length\">\r\n      <div class=\"row\">\r\n        <span class=\"panel-title MT-0\" *ngIf=\"this.isUpdate === 1\">Are you sure, You want to delete shift {{this.shiftData.shift_name}}?</span>\r\n        <span class=\"panel-title MT-0\" *ngIf=\"this.isUpdate === 0\">Are you sure, You want to update shift {{this.shiftData.shift_name}}?</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__body\" *ngIf=\"userList.length\">\r\n      <div class=\"row\">\r\n        <span class=\"panel-title MT-0\">SHIFT CHANGE - {{this.shiftData.shift_name}}</span>\r\n        <div class=\"col-md-12\">\r\n          <mat-radio-group (change)=\"onChangeType($event.value)\">\r\n            <mat-radio-button value=\"1\" class=\"MR-15\" [checked]=\"isMultipleSingleShift\">Move All User To Single Shift\r\n            </mat-radio-button>\r\n            <mat-radio-button value=\"2\" [checked]=\"!isMultipleSingleShift\">Move Individual User To Individual Shift\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 PLR-0\" *ngIf=\"isMultipleSingleShift\">\r\n\r\n        <div class=\"col-md-5 MT-10 custom-ng-select-dropdown\">\r\n          <ng-select\r\n            [items]=\"shiftList\"\r\n            [closeOnSelect]=\"true\"\r\n            bindLabel=\"shift_name\"\r\n            [closeOnSelect]=\"false\"\r\n            bindValue=\"id\"\r\n            placeholder=\"Shift Name\"\r\n            formControlName=\"shift_id\"\r\n            (change)=\"getShiftDetail(addShiftChangeForm)\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"shift-change-dialog-list\" *ngIf=\"shiftDataChange\">\r\n          <div class=\"row\">\r\n            <div class=\"row col-md-6 PLR-0 MT-20\">\r\n              <div class=\"col-md-6\">\r\n                <label>Shift Time From</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <span>{{shiftDataChange?.from_time}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row col-md-6 PLR-0 MT-20\">\r\n              <div class=\"col-md-6\">\r\n                <label>Shift Time To</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <span>{{shiftDataChange?.to_time}}</span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row col-md-6 PLR-0 MT-20\">\r\n              <div class=\"col-md-6\">\r\n                <label>Grace Period</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <span>{{shiftDataChange?.grace_period}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row col-md-6 PLR-0 MT-20\">\r\n              <div class=\"col-md-6\">\r\n                <label> Final Cut Off</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <span>{{shiftDataChange?.grace_period}}</span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row col-md-6 PLR-0 MT-20\">\r\n              <div class=\"col-md-6\">\r\n                <label>Consider Late Period</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <span>{{shiftDataChange?.late_period}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row col-md-6 PLR-0 MT-20\">\r\n              <div class=\"col-md-6\">\r\n                <label>Late allowed Time</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <span>{{shiftDataChange?.late_allowed_count}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row col-md-6 PLR-0 MT-20\">\r\n              <div class=\"col-md-6\">\r\n                <label>Break Time</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <span>{{shiftDataChange?.break_time}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"row col-md-12 PLR-0 MT-35\">\r\n              <div class=\"col-md-3\">\r\n                <label>UserName</label>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <span *ngFor=\"let username of userList; let i = index\" class=\"wet-asphalt-color\">{{username?.userfullname+' | '}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 PLR-0 MT-10\" *ngIf=\"!isMultipleSingleShift\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"table-container dialog-table-container\">\r\n            <div class=\"table-block\">\r\n              <table class=\"P-0\">\r\n                <thead>\r\n                <tr>\r\n                  <th width=\"60%\">UserName</th>\r\n                  <th width=\"40%\">Shift</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i= index\">\r\n                  <td class=\"PT-0 PB-0\">{{filterGroup.value['userfullname']}}</td>\r\n                  <td class=\"PT-0 PB-0\">\r\n                    <mat-form-field floatLabel=\"never\">\r\n                      <mat-select placeholder=\"Please Select\"\r\n                                  (selectionChange)=\"updateValues(i, 'new_shift_id', $event.value)\">\r\n                        <mat-option *ngFor=\"let shiftdetail of shiftList\" [value]=\"shiftdetail?.id\">\r\n                          {{shiftdetail?.shift_name}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <!-- End Request Table -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" [disabled]=\"addShiftChangeForm.invalid\" *ngIf=\"userList.length\"\r\n                  (click)=\"setValue(0)\">Confirm\r\n          </button>\r\n          <button class=\"btn-primary\" *ngIf=\"!userList.length\" (click)=\"setValue(isUpdate)\">Confirm</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/shif-change-action-dialog/shif-change-action-dialog.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/shift-list/shif-change-action-dialog/shif-change-action-dialog.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ShifChangeActionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShifChangeActionDialogComponent", function() { return ShifChangeActionDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
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






var ShifChangeActionDialogComponent = /** @class */ (function (_super) {
    __extends(ShifChangeActionDialogComponent, _super);
    function ShifChangeActionDialogComponent(dialogRef, _commonCrudService, data, _fb) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this._commonCrudService = _commonCrudService;
        _this.data = data;
        _this._fb = _fb;
        // Data Variables
        _this.shiftChangeList = [];
        _this.shiftList = [];
        _this.userList = [];
        _this.isDirectDelete = 0;
        _this.isUpdate = 0;
        // State variables
        _this.isMultipleSingleShift = true;
        return _this;
    }
    ShifChangeActionDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shiftData = (this.data.shiftData) ? this.data.shiftData : [];
        this.isUpdate = this.data.isUpdate;
        this.initializationMethod();
        this.createAddShiftChangeForm();
        this.getshiftlist();
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].DROPDOWN_LIST, {
            'records': 'all',
            'table': 'user',
            'column': 'id,userfullname',
            'sortOrder': 'userfullname',
            'sortBy': 'asc'
        }, { 'compare': { 'equal': { 'is_active': 1, 'shift_id': this.shiftData.id } } }).subscribe(function (Response) {
            _this.userList = Response;
        });
    };
    ShifChangeActionDialogComponent.prototype.getShiftDataWithUser = function () {
        var _this = this;
        if (this.userList.length) {
            this.userList.forEach(function (item) {
                _this.getFilterFieldArray().push(_this.createUserGroup(item));
            });
        }
    };
    ShifChangeActionDialogComponent.prototype.getshiftlist = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].SHIFT_LISTING, { 'records': 'all' }, {}).subscribe(function (response) {
            _this.shiftList = response['payload']['data'];
        });
    };
    /**
     * Get Filter Field Array
     */
    ShifChangeActionDialogComponent.prototype.getFilterFieldArray = function () {
        return this.addShiftChangeForm.get('usershiftDetail');
    };
    /**
     * Create Question Group Form
     */
    ShifChangeActionDialogComponent.prototype.createUserGroup = function (item) {
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['id'] : ''),
            userfullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['userfullname'] : ''),
            old_shift_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? this.shiftData.id : this.shiftData.id),
            new_shift_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['new_shift_id'] : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    ShifChangeActionDialogComponent.prototype.getShiftDetail = function (form) {
        var _this = this;
        var shiftId = form.value['shift_id'];
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].SHIFT_VIEW, shiftId, {}, {}).subscribe(function (response) {
            _this.shiftDataChange = response['payload']['data'];
        });
    };
    /**
     * Initialization Methods
     */
    ShifChangeActionDialogComponent.prototype.initializationMethod = function () {
        for (var i = 0; i < 15; i++) {
            var obj = {
                staffName: 'Hemadri Patel'
            };
            this.shiftChangeList.push(obj);
        }
    };
    /**
     * Create filter Master checklist
     */
    ShifChangeActionDialogComponent.prototype.createAddShiftChangeForm = function () {
        this.addShiftChangeForm = this._fb.group({
            select_shift_details: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            shift_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            from_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            usershiftDetail: this._fb.array([])
        });
    };
    /**
     * Update Values
     * @param index
     * @param key
     * @param value
     */
    ShifChangeActionDialogComponent.prototype.updateValues = function (index, key, value) {
        // console.log(index, key, value);
        this.getFilterFieldArray().controls[index].get(key).setValue(value);
        this.getFilterFieldArray().controls[index].get(key).updateValueAndValidity();
    };
    /**
     * On change type of recurring form
     * @param event
     */
    ShifChangeActionDialogComponent.prototype.onChangeType = function (event) {
        if (+event === 1) {
            this.isMultipleSingleShift = true;
            this.addShiftChangeForm.get('shift_id').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            this.addShiftChangeForm.get('shift_id').updateValueAndValidity();
            this.addShiftChangeForm.removeControl('usershiftDetail');
        }
        else {
            this.isMultipleSingleShift = false;
            this.addShiftChangeForm.addControl('usershiftDetail', this._fb.array([]));
            this.getShiftDataWithUser();
            this.addShiftChangeForm.get('shift_id').setValue(null);
            this.addShiftChangeForm.get('shift_id').setValidators(null);
            this.addShiftChangeForm.get('shift_id').updateValueAndValidity();
        }
    };
    ShifChangeActionDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ShifChangeActionDialogComponent.prototype.onSumbit = function (form) {
        var _this = this;
        var itemData = form.value['usershiftDetail'];
        form.value['_method'] = 'put';
        form.value['shift_id'] = form.value['shift_id'];
        form.value['actionType'] = 1;
        form.value['type'] = 0;
        form.value['usershiftDetail'] = JSON.stringify(form.value['usershiftDetail']);
        if (this.isMultipleSingleShift) {
            form.value['type'] = 1;
        }
        if (this.isDirectDelete === 0) {
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].SHIFT_UPDATE, this.shiftData.id, form.value).subscribe(function (response) {
                _this.dialogRef.close();
            });
        }
        else {
            this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].SHIFT_DELETE, this.shiftData.id, form.value).subscribe(function (response) {
                _this.dialogRef.close();
            });
        }
    };
    ShifChangeActionDialogComponent.prototype.setValue = function (value) {
        this.isDirectDelete = value;
    };
    ShifChangeActionDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shif-change-action-dialog',
            template: __webpack_require__(/*! ./shif-change-action-dialog.component.html */ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/shif-change-action-dialog/shif-change-action-dialog.component.html")
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ShifChangeActionDialogComponent);
    return ShifChangeActionDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/shift-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/shift-list/shift-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"holiday-list-out-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>HRMS</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">SHIFT LIST</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-9 inner-header-title MT-10\">\r\n          <button class=\"open-dialog-btn\" (click)=\"onAddEditShiftListDialog()\" *ngIf=\"tabData['add_edit']\">\r\n            <mat-icon class=\"material-icons\">add</mat-icon>\r\n            Add Shift List\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-2 PR-0\">\r\n          <div class=\"grid-search\">\r\n            <form [formGroup]=\"filterForm\">\r\n              <mat-form-field floatLabel=\"never\">\r\n                <input matInput placeholder=\"Search\" (keyup)=\"setAdvanceFilter(filterForm)\"\r\n                       formControlName=\"shift_name\">\r\n              </mat-form-field>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-1 PL-0 MT-10\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"downloadExcel()\" *ngIf=\"tabData['export']\">\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Table -->\r\n\r\n    <div class=\"expand-grid\">\r\n      <div class=\"expand-grid__thead\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"4%\">Sr. No</th>\r\n            <th width=\"12%\"\r\n                (click)=\"getSortData('shift_name', sortBy === 'shift_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Shift Name\r\n              <i *ngIf=\"sortBy === 'shift_name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'shift_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'shift_name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'shift_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n              <!--<mat-icon class=\"material-icons icon-up active\">arrow_upward</mat-icon>-->\r\n              <!--<mat-icon class=\"material-icons icon-down\" *ngIf=\"false\">arrow_downward</mat-icon>-->\r\n            </th>\r\n\r\n            <th width=\"6%\">Start time\r\n            </th>\r\n\r\n            <th width=\"6%\">End Name\r\n            </th>\r\n\r\n            <th width=\"8%\">Grace Period\r\n            </th>\r\n\r\n            <th width=\"8%\">Late Period\r\n            </th>\r\n\r\n            <th width=\"10%\">Late coming Allowed\r\n            </th>\r\n\r\n            <th width=\"8%\">Break Time\r\n            </th>\r\n\r\n            <th width=\"15%\">Note\r\n            </th>\r\n\r\n            <th width=\"15%\">Modified</th>\r\n\r\n            <th width=\"8%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n      </div>\r\n\r\n\r\n      <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n        <table>\r\n          <tbody *ngFor=\"let shiftlist of shiftList; let i = index\">\r\n          <tr [ngClass]=\"{'is-active-row' : trIndex === i}\" class=\"row-data\">\r\n            <td width=\"4%\">\r\n              <a class=\"open-inner-data\" (click)=\"openRow(i)\">\r\n                <mat-icon [ngClass]=\"{'is-open' : trIndex === i}\" class=\"material-icons\">keyboard_arrow_down\r\n                </mat-icon>\r\n              </a>\r\n              {{+pageSize * (pageIndex) + i + 1}}\r\n            </td>\r\n            <td width=\"12%\" class=\"word-break\">{{shiftlist?.shift_name}}</td>\r\n            <td width=\"6%\">{{shiftlist?.from_time}}</td>\r\n            <td width=\"6%\">{{shiftlist?.to_time}}</td>\r\n            <td width=\"8%\">{{shiftlist?.grace_period}}</td>\r\n            <td width=\"8%\">{{shiftlist?.late_period}}</td>\r\n            <td width=\"10%\" class=\"primary-color fw-500 text-center\">{{shiftlist?.late_allowed_count}}</td>\r\n            <td width=\"8%\" class=\"orange-color\">{{shiftlist?.break_time}}</td>\r\n            <td width=\"15%\" class=\"word-break\">{{shiftlist?.description !== ''?shiftlist?.description:'-'}}</td>\r\n            <td width=\"15%\" *ngIf=\"shiftlist?.modified_by?.userfullname\">{{shiftlist?.modified_by?.userfullname}} |\r\n              {{shiftlist?.modified_on | date: 'dd-MM-yyyy'}}\r\n            </td>\r\n            <td width=\"15%\" *ngIf=\"!shiftlist?.modified_by?.userfullname\">-</td>\r\n            <td width=\"8%\">\r\n              <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Edit'\" (click)=\"onAddEditShiftListDialog(shiftlist)\"\r\n                        *ngIf=\"tabData['add_edit']\">edit\r\n              </mat-icon>\r\n              <i class=\"turquoise-color material-icons\" [matTooltip]=\"'Active Shift'\" *ngIf=\"tabData['add_edit']\"\r\n                 (click)=\"onChangeShiftDialog(0,shiftlist)\">check_circle\r\n              </i>\r\n              <mat-icon class=\"red-color\" [matTooltip]=\"'Delete'\" (click)=\"onChangeShiftDialog(1,shiftlist)\"\r\n                        *ngIf=\"tabData['delete']\">delete\r\n              </mat-icon>\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"trIndex === i\" class=\"inner-data\">\r\n            <div class=\"row PT-10\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"inner-data__view\">\r\n                  <div>Created By</div>\r\n                  <div>{{shiftlist?.created_by?.userfullname}}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"inner-data__view\">\r\n                  <div>Created On</div>\r\n                  <div>{{shiftlist?.created_on | date: 'dd-MM-yyyy'}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"expand-grid__tfoot\" *ngIf=\"shiftList.length\">\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!shiftList.length\" class=\"panel-title red-color\">\r\n      No Records Found!\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n  <!-- End Data Grid -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/shift-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/shift-list/shift-list.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2hybXMtbW9kdWxlL2hybXMtZGFzaGJvYXJkL3NoaWZ0LWxpc3Qvc2hpZnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/shift-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/shift-list/shift-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ShiftListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftListComponent", function() { return ShiftListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _add_shift_list_dialog_add_shift_list_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-shift-list-dialog/add-shift-list-dialog.component */ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/add-shift-list-dialog/add-shift-list-dialog.component.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _shif_change_action_dialog_shif_change_action_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shif-change-action-dialog/shif-change-action-dialog.component */ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/shif-change-action-dialog/shif-change-action-dialog.component.ts");
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












var ShiftListComponent = /** @class */ (function () {
    function ShiftListComponent(_fb, _router, dialog, _commonCrudService, _sharedService) {
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        // Data Variables
        this.shiftList = [];
        this.shiftData = [];
        this.shiftListData = [];
        this.tagList = [];
        this.equalJSON = { 'is_active': 1 };
        this.likeJSON = {};
        this.inJSON = {};
        // State variables
        this.trIndex = -1;
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilter = false;
        this.isOpenHistoryDialog = false;
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__["ADMINTABACCESS"].SHIFT;
    }
    ShiftListComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.initializationMethod();
        this.createSearchForm();
    };
    /**
     * Initialization Methods
     */
    ShiftListComponent.prototype.initializationMethod = function () {
        this.getShiftList(1, 'id', 'desc');
        this.getAllShiftList();
    };
    ShiftListComponent.prototype.getShiftList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].SHIFT_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParams())
            .subscribe(function (response) {
            _this.handleResponse(response);
        });
    };
    ShiftListComponent.prototype.getAllShiftList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].SHIFT_LISTING, { "records": "all" }, this.getSearchParams())
            .subscribe(function (response) {
            _this.shiftListData = response['payload']['data'];
        });
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    ShiftListComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    ShiftListComponent.prototype.handleResponse = function (response) {
        this.shiftList = response['payload']['data'];
        this.page = response['pager']['pageNumber'];
        this.pageIndex = this.page - 1;
        this.totalRecords = +(response['pager']['totalRecords']);
        this.sortBy = response['pager']['sortBy'];
        this.sortOrder = response['pager']['sortOrder'];
    };
    /**
     * Create search
     */
    ShiftListComponent.prototype.createSearchForm = function () {
        this.filterForm = this._fb.group({
            shift_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    };
    /**
     * Expand row table
     * @param i
     */
    ShiftListComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Add Holiday list
     */
    ShiftListComponent.prototype.onAddEditShiftListDialog = function (shiftDetail) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_shift_list_dialog_add_shift_list_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddShiftListDialogComponent"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {
                shiftData: (shiftDetail) ? shiftDetail : [],
                shiftListData: this.shiftListData
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getShiftList(1, 'id', 'desc');
            }
        });
    };
    ShiftListComponent.prototype.onChangeShiftDialog = function (isUpdate, shiftDetail) {
        var _this = this;
        var dialogRef = this.dialog.open(_shif_change_action_dialog_shif_change_action_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ShifChangeActionDialogComponent"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {
                shiftData: (shiftDetail) ? shiftDetail : [],
                isUpdate: isUpdate
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getShiftList(1, 'id', 'desc');
        });
    };
    /**
     * Toogle Filter
     */
    ShiftListComponent.prototype.onOpenFilter = function () {
        this.isOpenFilter = !this.isOpenFilter;
    };
    /**
     * Close filter
     */
    ShiftListComponent.prototype.onCloseFilter = function () {
        this.isOpenFilter = false;
    };
    ShiftListComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getShiftList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    ShiftListComponent.prototype.deleteMsg = function (index) {
        this.tagList.splice(index, 1);
    };
    ShiftListComponent.prototype.onClearTags = function () {
        this.tagList = [];
    };
    ShiftListComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    // Set Advance Filter
    ShiftListComponent.prototype.setAdvanceFilter = function (form, flag) {
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
            this.getShiftList(1);
        }
    };
    ShiftListComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilter = false;
        }
    };
    /**
     * Function downloading excel
     */
    ShiftListComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].SHIFT_LISTING, params, this.getSearchParams(), 'Shift Details - ', 0).subscribe(function (response) {
        });
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    ShiftListComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getShiftList(1, sortKey, sortVal);
    };
    /**
     * getting advanced search params for conference room list api
     * @returns {{}}
     */
    ShiftListComponent.prototype.getSearchParams = function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ShiftListComponent.prototype, "onKeydownHandler", null);
    ShiftListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shift-list',
            template: __webpack_require__(/*! ./shift-list.component.html */ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/shift-list.component.html"),
            styles: [__webpack_require__(/*! ./shift-list.component.scss */ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/shift-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"]])
    ], ShiftListComponent);
    return ShiftListComponent;
}());



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/shift-list.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/shift-list/shift-list.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ShiftListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftListModule", function() { return ShiftListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shift_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shift-list.component */ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/shift-list.component.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _add_shift_list_dialog_add_shift_list_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-shift-list-dialog/add-shift-list-dialog.component */ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/add-shift-list-dialog/add-shift-list-dialog.component.ts");
/* harmony import */ var _shif_change_action_dialog_shif_change_action_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shif-change-action-dialog/shif-change-action-dialog.component */ "./src/app/admin/hrms-module/hrms-dashboard/shift-list/shif-change-action-dialog/shif-change-action-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _shift_list_component__WEBPACK_IMPORTED_MODULE_2__["ShiftListComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]],
    },
];
var ShiftListModule = /** @class */ (function () {
    function ShiftListModule() {
    }
    ShiftListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_shift_list_component__WEBPACK_IMPORTED_MODULE_2__["ShiftListComponent"], _add_shift_list_dialog_add_shift_list_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddShiftListDialogComponent"], _shif_change_action_dialog_shif_change_action_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ShifChangeActionDialogComponent"], _shif_change_action_dialog_shif_change_action_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ShifChangeActionDialogComponent"]],
            entryComponents: [_add_shift_list_dialog_add_shift_list_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddShiftListDialogComponent"], _shif_change_action_dialog_shif_change_action_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ShifChangeActionDialogComponent"]]
        })
    ], ShiftListModule);
    return ShiftListModule;
}());



/***/ })

}]);
//# sourceMappingURL=hrms-dashboard-shift-list-shift-list-module.js.map