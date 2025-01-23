(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrms-dashboard-change-in-out-time-change-in-out-time-module"],{

/***/ "./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time-dialog/change-in-out-time-dialog.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time-dialog/change-in-out-time-dialog.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Change InOut Time dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">{{(ChangeInOutData.id) ? 'Update' : 'Add'}} In-Out Time</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addChangeInOutForm\" (submit)=\"onSubmitAddChangeIn(addChangeInOutForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 custom-ng-select-dropdown\">\r\n          <ng-select [items]=\"userList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"userfullname\"\r\n                     placeholder=\"User Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"user_id\"\r\n                     [disableControl]=\"(ChangeInOutData.id)?true:false\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addChangeInOutForm.get('user_id'))\"\r\n                            [errMsg]=\"validationMsg.USERNAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"DateRef\" placeholder=\"Date\"\r\n                   [max]=\"currentDate\" formControlName=\"date\" required\r\n                   [disableControl]=\"(ChangeInOutData.id)?true:false\"/>\r\n            <mat-datepicker-toggle matSuffix [for]=\"DateRef\"></mat-datepicker-toggle>\r\n            <mat-datepicker #changeInOutDate #DateRef></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addChangeInOutForm.get('date'))\"\r\n                            [errMsg]=\"validationMsg.DATE\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <mat-select formControlName=\"punch_type\" placeholder=\"In/Out\" required\r\n                        [disabled]=\"(ChangeInOutData.id)?true:false\">\r\n              <mat-option *ngFor=\"let option of inOutdropdown.slice(1)\" [value]=\"option?.key\">\r\n                {{option?.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addChangeInOutForm.get('punch_type'))\"\r\n                            [errMsg]=\"validationMsg.ADD_IN_OUT_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Select Time\" aria-label=\"Select Time\" [ngxTimepicker]=\"selecttime\"\r\n                   [format]=\"24\" formControlName=\"punch_time\" required>\r\n            <ngx-material-timepicker #selecttime></ngx-material-timepicker>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Reason\" formControlName=\"reason\" required></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <!--<small class=\"red-color MR-10\" *ngIf=\"this.isModified === 1\">Not Allow To Update Time</small>-->\r\n          <!--<small class=\"red-color MR-10\" *ngIf=\"this.isModified === 0\">Can't change, Once updated</small>-->\r\n          <button class=\"btn-primary\" [disabled]=\"addChangeInOutForm.invalid\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Change InOut Time dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time-dialog/change-in-out-time-dialog.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time-dialog/change-in-out-time-dialog.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ChangeInOutTimeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeInOutTimeDialogComponent", function() { return ChangeInOutTimeDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
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











var ChangeInOutTimeDialogComponent = /** @class */ (function (_super) {
    __extends(ChangeInOutTimeDialogComponent, _super);
    function ChangeInOutTimeDialogComponent(dialogRef, _sharedService, data, _fb, _sharedObjService, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this._sharedService = _sharedService;
        _this.data = data;
        _this._fb = _fb;
        _this._sharedObjService = _sharedObjService;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_1__["ValidationConstantMessage"]();
        _this.userList = [];
        _this.inOutdropdown = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["inOut"];
        _this.currentDate = new Date();
        _this.isModified = 0;
        return _this;
    }
    ChangeInOutTimeDialogComponent.prototype.ngOnInit = function () {
        this.userInfo = this._sharedService.getUser();
        this.ChangeInOutData = (this.data.ChangeInOutDetail) ? this.data.ChangeInOutDetail : [];
        this.getUserList();
        this.createAddChangeInOutTimeForm();
        // if (this.ChangeInOutData.id) {
        //   this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
        //       'sortOrder': 'id',
        //       'sortBy': 'asc',
        //       'table': 'hr_user_in_out_time',
        //       'column': 'id'
        //     },
        //     {
        //       'compare': {
        //         'equal': {
        //           'user_id': this.ChangeInOutData.user_id.id,
        //           'date': this.ChangeInOutData.date,
        //           // 'punch_type': this.ChangeInOutData.punch_type,
        //           'is_manually_change': 1
        //         }
        //       }
        //     })
        //     .subscribe((response) => {
        //       this.isModified = (response && response[0] && response[0]['id'] && response[0]['id'] !== '') ? 1 : 0;
        //     });
        // }
    };
    /**
     * Create filter Master checklist
     */
    ChangeInOutTimeDialogComponent.prototype.createAddChangeInOutTimeForm = function () {
        this.addChangeInOutForm = this._fb.group({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.ChangeInOutData) ? (this.ChangeInOutData.user_id) ? this.ChangeInOutData.user_id.id : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.ChangeInOutData) ? (this.ChangeInOutData.date) ? this.ChangeInOutData.date : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            punch_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.ChangeInOutData) ? (this.ChangeInOutData.punch_type >= 0) ? this.ChangeInOutData.punch_type : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            punch_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.ChangeInOutData) ? (this.ChangeInOutData.punch_time) ? this.ChangeInOutData.punch_time : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((this.ChangeInOutData) ? (this.ChangeInOutData.reason) ? this.ChangeInOutData.reason : null : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    ChangeInOutTimeDialogComponent.prototype.onSubmitAddChangeIn = function (form) {
        var _this = this;
        if (form.valid) {
            // const dateItem = form.value['date'];
            form.value['user_id'] = this.addChangeInOutForm.get('user_id').value;
            form.value['old_value'] = this.ChangeInOutData.punch_time;
            var dateItem = this.addChangeInOutForm.get('date').value;
            form.value['punch_type'] = this.addChangeInOutForm.get('punch_type').value;
            form.value['date'] = moment__WEBPACK_IMPORTED_MODULE_9__(dateItem).format('YYYY-MM-DD');
            form.value['punch_time'] = moment__WEBPACK_IMPORTED_MODULE_9__(form.value['punch_time'], ['h:mm A']).format('HH:mm');
            if (this.ChangeInOutData.id) {
                form.value['_method'] = 'put';
                this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].CHANGEINOUT_UPDATE, this.ChangeInOutData.id, form.value).subscribe(function (response) {
                    _this.dialogRef.close();
                });
            }
            else {
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].CHANGEINOUT_STORE, form.value).subscribe(function (response) {
                    _this.dialogRef.close();
                });
            }
        }
    };
    ChangeInOutTimeDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    /**
     * Get User List
     */
    ChangeInOutTimeDialogComponent.prototype.getUserList = function () {
        var _this = this;
        // this._commonCrudService.listData(AdminAPI.CHANGEINOUT_USER_LIST, {}, {}).subscribe((response) => {
        //   this.userList = response.payload.data;
        // });
        var params = {};
        if (this.userInfo.designation_id.id === 7) {
            params = {
                'compare': { 'equal': { 'is_active': 1 } },
                'or': {
                    'equal': [{
                            'first_approval_user': this.userInfo.id,
                            'second_approval_user': this.userInfo.id,
                        }]
                }
            };
        }
        else {
            params = {
                'compare': { 'equal': { 'is_active': 1 } },
                'or': {
                    'equal': [{
                            'first_approval_user': this.userInfo.id,
                            'second_approval_user': this.userInfo.id,
                        }]
                }
            };
        }
        this._sharedObjService.getUserList({ 'records': 'all' }, params).subscribe(function (response) {
            _this.userList = response;
            _this.createAddChangeInOutTimeForm();
        });
    };
    ChangeInOutTimeDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-in-out-time-dialog',
            template: __webpack_require__(/*! ./change-in-out-time-dialog.component.html */ "./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time-dialog/change-in-out-time-dialog.component.html")
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_6__["SharedObjService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]])
    ], ChangeInOutTimeDialogComponent);
    return ChangeInOutTimeDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"change-in-out-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>HRMS</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">CHANGE IN OUT TIME</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 inner-header-title\">\r\n          <button class=\"open-dialog-btn\" (click)=\"openAddInOutTimeDialog(null)\"\r\n                  *ngIf=\"tabData['add_edit']\">\r\n            <mat-icon class=\"material-icons\">add</mat-icon>\r\n            Add In-Out Time\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-6 inner-header-title text-center\">\r\n          <div class=\"red-color fw-500 MT-10\">Changes Allowed Only For Last 3 Days</div>\r\n        </div>\r\n        <div class=\" col-md-3\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onOpenFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li>\r\n              <a (click)=\"downloadExcel()\" *ngIf=\"tabData['export']\">\r\n                <span>Excel</span>\r\n                <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilter}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilter\" (click)=\"onCloseFilter()\">Esc <mat-icon\r\n          class=\"material-icons\">close</mat-icon></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"changeInOutFilterForm\" (submit)=\"setAdvanceFilter(changeInOutFilterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"User Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"user_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"fromdate\" placeholder=\"From Date\" formControlName=\"from_date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"fromdate\"></mat-datepicker-toggle>\r\n                <mat-datepicker #fromdate></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"todate\" placeholder=\"To Date\" formControlName=\"to_date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"todate\"></mat-datepicker-toggle>\r\n                <mat-datepicker #todate></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Changed By Staff\" formControlName=\"is_manually_change\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoDropDown.slice(1)\" [value]=\"yesNo?.key\">\r\n                    {{ yesNo?.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"filterChangeInOutForm\">\r\n        <div class=\"tag\" *ngIf=\"userId.value\">\r\n          <span class=\"tag__title\">User Name :</span>\r\n          <span>\r\n             <ng-select [items]=\"userList\"\r\n                        [closeOnSelect]=\"true\"\r\n                        bindLabel=\"userfullname\"\r\n                        placeholder=\"User Name\"\r\n                        bindValue=\"id\"\r\n                        [virtualScroll]=\"true\"\r\n                        [searchable]=\"true\"\r\n                        [hideSelected]=\"true\"\r\n                        formControlName=\"user_id\"\r\n                        (change)=\"setAdvanceFilterKeyUp($event, filterChangeInOutForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('user_id')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"fromDateField.value\">\r\n          <span class=\"tag__title\">From Date:</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"fromdate1\" placeholder=\"Date\" #dateRef formControlName=\"from_date\"\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, filterChangeInOutForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"fromdate1\"></mat-datepicker-toggle>\r\n              <mat-datepicker #fromdate1></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('from_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"toDateField.value\">\r\n          <span class=\"tag__title\">To Date:</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"todate1\" placeholder=\"Date\" #dateRef formControlName=\"to_date\"\r\n                     (dateChange)=\"setAdvanceFilterKeyUp($event, filterChangeInOutForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"todate1\"></mat-datepicker-toggle>\r\n              <mat-datepicker #todate1></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('to_date')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"changedByStaff.value !== null\">\r\n          <span class=\"tag__title\">Changed By Staff:</span>\r\n          <span>\r\n            <mat-form-field>\r\n            <mat-select placeholder=\"Changed By Staff\" formControlName=\"is_manually_change\"\r\n                        (selectionChange)=\"setAdvanceFilterKeyUp($event, filterChangeInOutForm, true)\">\r\n              <mat-option *ngFor=\"let yesNo of yesNoDropDown.slice(1)\" [value]=\"yesNo?.key\">\r\n                {{ yesNo?.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('is_manually_change')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\"\r\n             *ngIf=\"userId.value || fromDateField.value || toDateField.value || changedByStaff.value !== null\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n\r\n            <th width=\"25%\"\r\n                (click)=\"getSortData('user_id', sortBy === 'user_id' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              User Name\r\n              <i *ngIf=\"sortBy === 'user_id'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'user_id' && sortOrder === 'asc', 'icon-down' :  sortBy === 'user_id' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'user_id' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"20%\"\r\n                (click)=\"getSortData('date', sortBy === 'date' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Date\r\n              <i *ngIf=\"sortBy === 'date'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'date' && sortOrder === 'asc', 'icon-down' :  sortBy === 'date' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'date' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"15%\"\r\n                (click)=\"getSortData('punch_type', sortBy === 'punch_type' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              In / Out\r\n              <i *ngIf=\"sortBy === 'punch_type'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'punch_type' && sortOrder === 'asc', 'icon-down' :  sortBy === 'punch_type' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'punch_type' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"15%\">Punch Time</th>\r\n            <th width=\"10%\">Changed By Staff</th>\r\n            <th width=\"10%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody *ngIf=\"changeInOutList.length\">\r\n            <tr *ngFor=\"let changein of changeInOutList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"25%\">{{changein?.user_id?.userfullname}}</td>\r\n              <td width=\"20%\">{{changein?.date | date:\"dd-MM-yyyy\"}}</td>\r\n              <td width=\"15%\"><span class=\"turquoise-color fw-500\" *ngIf=\"changein?.punch_type === 1\"><mat-icon\r\n                class=\"grid_icon_trip_origin\">trip_origin</mat-icon>In</span>\r\n                <span class=\"red-color\" *ngIf=\"changein?.punch_type === 0\"><mat-icon class=\"grid_icon_trip_origin\">trip_origin</mat-icon>Out</span>\r\n              </td>\r\n              <td width=\"15%\">{{changein?.punch_time}}</td>\r\n              <td width=\"10%\">\r\n                <span class=\"red-color fw-500\" *ngIf=\"changein?.is_manually_change === 1\">Yes</span>\r\n                <span class=\"turquoise-color fw-500\" *ngIf=\"changein?.is_manually_change === 0\">No</span>\r\n              </td>\r\n              <td width=\"10%\">\r\n                <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Edit'\" (click)=\"openAddInOutTimeDialog(changein)\"\r\n                          *ngIf=\"compareDate(changein?.newDate) !== -1 && isToday(changein?.date) === 0\">\r\n                  edit\r\n                </mat-icon>\r\n                <mat-icon class=\"red-color v-align-middle\" [matTooltip]=\"'Not Allow'\"\r\n                          *ngIf=\"compareDate(changein?.newDate) === -1 || isToday(changein?.date) === 1\">\r\n                  block\r\n                </mat-icon>\r\n                <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Delete'\" (click)=\"openInOutDeleteDialog(changein)\"\r\n                          *ngIf=\"compareDate(changein?.newDate) !== -1 && isToday(changein?.date) === 0\">\r\n                  delete\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table *ngIf=\"changeInOutList.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n    <div *ngIf=\"changeInOutList.length === 0\" class=\"panel-title red-color\">\r\n      No Records Found!\r\n    </div>\r\n  </div>\r\n  <!-- End Data Grid -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2hybXMtbW9kdWxlL2hybXMtZGFzaGJvYXJkL2NoYW5nZS1pbi1vdXQtdGltZS9jaGFuZ2UtaW4tb3V0LXRpbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ChangeInOutTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeInOutTimeComponent", function() { return ChangeInOutTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _change_in_out_time_dialog_change_in_out_time_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-in-out-time-dialog/change-in-out-time-dialog.component */ "./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time-dialog/change-in-out-time-dialog.component.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-user.service */ "./src/utility/shared-service/shared-user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ChangeInOutTimeComponent = /** @class */ (function () {
    function ChangeInOutTimeComponent(_fb, _router, dialog, _commonCrudService, _sharedObjService, _sharedService, _sharedUserService) {
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        this._sharedUserService = _sharedUserService;
        // Data Variables
        this.changeInOutList = [];
        this.userList = [];
        this.toDate = null;
        this.fromDate = null;
        this.yesNoDropDown = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["yesNo"];
        this.equalJSON = {};
        this.likeJSON = {};
        this.findinSet = {};
        // MatPaginator Inputs
        this.length = 100;
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_8__["BASE"].PAGINATION_ARRAY[1];
        this.pageSizeOptions = [5, 10, 25, 100];
        // Other Variables
        this.isOpenFilter = false;
        this.isOpenHistoryDialog = false;
        this.tabId = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].CHNAGEINOUTTIME;
    }
    Object.defineProperty(ChangeInOutTimeComponent.prototype, "userId", {
        // get form control
        get: function () {
            return this.changeInOutFilterForm.get('user_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeInOutTimeComponent.prototype, "fromDateField", {
        get: function () {
            return this.changeInOutFilterForm.get('from_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeInOutTimeComponent.prototype, "toDateField", {
        get: function () {
            return this.changeInOutFilterForm.get('to_date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeInOutTimeComponent.prototype, "changedByStaff", {
        get: function () {
            return this.changeInOutFilterForm.get('is_manually_change');
        },
        enumerable: true,
        configurable: true
    });
    ChangeInOutTimeComponent.prototype.ngOnInit = function () {
        this.initializationMethod();
        this.createChangeInOutForm();
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabId);
        // this.createFilterChangeInOutForm();
        this.adminUser = this._sharedUserService.getUser();
    };
    /**
     * Initialization Methods
     */
    ChangeInOutTimeComponent.prototype.initializationMethod = function () {
        this.getChangeInOut(1);
        // this.getUserList();
    };
    /**
     * Get User List
     */
    ChangeInOutTimeComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.userList = response;
        });
    };
    ChangeInOutTimeComponent.prototype.getChangeInOut = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CHANGEINOUT_LISTING, this.getQueryParams(pageNumber, key, val), this.getSearchParam())
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
    ChangeInOutTimeComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    ChangeInOutTimeComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (this.toDate) {
            filter['lessthanequal'] = {};
            filter['lessthanequal']['date'] = moment__WEBPACK_IMPORTED_MODULE_11__(this.toDate).format('YYYY-MM-DD');
        }
        if (this.fromDate) {
            filter['greaterthanequal'] = {};
            filter['greaterthanequal']['date'] = moment__WEBPACK_IMPORTED_MODULE_11__(this.fromDate).format('YYYY-MM-DD');
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_7__["CommonFunctions"].isEmpty(filter)) {
            params['compare'] = filter;
        }
        return params;
    };
    /**
     * Handle AM Notes List Response
     * @param response
     */
    ChangeInOutTimeComponent.prototype.handleResponse = function (response) {
        this.changeInOutList = response.payload.data;
        this.userList = response.payload.userlist;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Create Change InOut
     */
    ChangeInOutTimeComponent.prototype.createChangeInOutForm = function () {
        this.changeInOutFilterForm = this._fb.group({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            is_manually_change: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            to_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            from_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.filterChangeInOutForm = this._fb.group({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            is_manually_change: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            to_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            from_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    /**
     * change InOutTime direction
     */
    ChangeInOutTimeComponent.prototype.openAddInOutTimeDialog = function (changeInOutDetail) {
        var _this = this;
        var dialogRef = this.dialog.open(_change_in_out_time_dialog_change_in_out_time_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ChangeInOutTimeDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                ChangeInOutDetail: (changeInOutDetail) ? changeInOutDetail : []
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getChangeInOut(1, _this.sortBy, _this.sortOrder);
        });
    };
    ChangeInOutTimeComponent.prototype.openInOutDeleteDialog = function (changeInOutDetail) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete In/Out entry?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CHANGEINOUT_DELETE, changeInOutDetail.id).subscribe(function (Response) {
                    if (Response) {
                        _this.getChangeInOut(1, 'punch_time', 'asc');
                    }
                });
            }
        });
    };
    /**
     * Toogle Filter
     */
    ChangeInOutTimeComponent.prototype.onOpenFilter = function () {
        this.isOpenFilter = !this.isOpenFilter;
    };
    /**
     * Close filter
     */
    ChangeInOutTimeComponent.prototype.onCloseFilter = function () {
        this.isOpenFilter = false;
    };
    ChangeInOutTimeComponent.prototype.onClearTags = function () {
    };
    ChangeInOutTimeComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    ChangeInOutTimeComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilter = false;
        }
    };
    /**
     * Pagination page change method
     * @param event
     */
    ChangeInOutTimeComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getChangeInOut(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    ChangeInOutTimeComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getChangeInOut(1, sortKey, sortVal);
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    ChangeInOutTimeComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        this.findinSet = {};
        // removing empty key from object
        for (var key in form.value) {
            if (form.value.hasOwnProperty(key)) {
                if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
                    delete form.value[key];
                }
                else {
                    if (flag) {
                        this.filterChangeInOutForm.get(key).setValue(form.value[key]);
                    }
                }
            }
        }
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'user_id' || key === 'is_manually_change') {
                        // if (key === 'date') {
                        //   this.equalJSON[key] = moment(form.value[key]).format('YYYY-MM-DD');
                        // } else {
                        this.equalJSON[key] = form.value[key];
                        //}
                    }
                    if (form.value['from_date'] !== '' && form.value['from_date']) {
                        this.fromDate = form.value['from_date'];
                        delete form.value['from_date'];
                    }
                    if (form.value['to_date'] !== '' && form.value['to_date']) {
                        this.toDate = form.value['to_date'];
                        delete form.value['to_date'];
                    }
                }
            }
            this.isOpenFilter = false;
            this.getChangeInOut(1, 'punch_time', 'asc');
        }
    };
    ChangeInOutTimeComponent.prototype.resetFilterForm = function () {
        this.createChangeInOutForm();
        this.equalJSON = {};
        this.findinSet = {};
        this.fromDate = null;
        this.toDate = null;
        this.isOpenFilter = false;
        this.getChangeInOut(1, 'punch_time', 'asc');
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    ChangeInOutTimeComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
            this.changeInOutFilterForm.setValue({
                'user_id': (form.value['user_id']) ? form.value['user_id'] : null,
                'is_manually_change': form.value['is_manually_change'],
                'from_date': form.value['from_date'],
                'to_date': form.value['to_date']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    ChangeInOutTimeComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.changeInOutFilterForm.get(elementName).setValue(null);
        this.filterChangeInOutForm.get(elementName).setValue(null);
        if (elementName === 'user_id' || elementName === 'is_manually_change') {
            delete this.equalJSON[elementName];
        }
        if (elementName === 'from_date') {
            this.fromDate = null;
        }
        if (elementName === 'to_date') {
            this.toDate = null;
        }
        this.getChangeInOut(1, this.sortBy, this.sortOrder);
    };
    /**
     * Export to Excel
     */
    ChangeInOutTimeComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CHANGEINOUT_EXPORT, params, this.getSearchParam(), 'Change In Out - ', 0).subscribe(function (response) {
        });
    };
    /**
     * Compares two Date objects and returns e number value that represents
     * the result:
     * 0 if the two dates are equal.
     * 1 if the first date is greater than second.
     * -1 if the first date is less than second.
     * @param date1 First date object to compare.
     * @param date2 Second date object to compare.
     */
    ChangeInOutTimeComponent.prototype.compareDate = function (date) {
        // With Date object we can compare dates them using the >, <, <= or >=.
        // The ==, !=, ===, and !== operators require to use date.getTime(),
        // so we need to create a new instance of Date with 'new Date()'
        var d1 = new Date;
        var d2 = new Date(date);
        // Check if the dates are equal
        var same = d1.getTime() === d2.getTime();
        if (same) {
            return 0;
        }
        // Check if the first is greater than second
        if (d2 > d1) {
            return 1;
        }
        // Check if the first is less than second
        if (d2 < d1) {
            return -1;
        }
    };
    ChangeInOutTimeComponent.prototype.isToday = function (date) {
        var todaysDate = moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format('YYYY-MM-DD');
        if (date === todaysDate) {
            return 1;
        }
        return 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ChangeInOutTimeComponent.prototype, "onKeydownHandler", null);
    ChangeInOutTimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-in-out-time',
            template: __webpack_require__(/*! ./change-in-out-time.component.html */ "./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time.component.html"),
            styles: [__webpack_require__(/*! ./change-in-out-time.component.scss */ "./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_13__["SharedObjService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"], _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_15__["SharedUserService"]])
    ], ChangeInOutTimeComponent);
    return ChangeInOutTimeComponent;
}());



/***/ }),

/***/ "./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: ChangeInOutTimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeInOutTimeModule", function() { return ChangeInOutTimeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _change_in_out_time_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-in-out-time.component */ "./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _change_in_out_time_dialog_change_in_out_time_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-in-out-time-dialog/change-in-out-time-dialog.component */ "./src/app/admin/hrms-module/hrms-dashboard/change-in-out-time/change-in-out-time-dialog/change-in-out-time-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _change_in_out_time_component__WEBPACK_IMPORTED_MODULE_2__["ChangeInOutTimeComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    },
];
var ChangeInOutTimeModule = /** @class */ (function () {
    function ChangeInOutTimeModule() {
    }
    ChangeInOutTimeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"]
            ],
            declarations: [_change_in_out_time_component__WEBPACK_IMPORTED_MODULE_2__["ChangeInOutTimeComponent"], _change_in_out_time_dialog_change_in_out_time_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ChangeInOutTimeDialogComponent"]],
            entryComponents: [_change_in_out_time_dialog_change_in_out_time_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ChangeInOutTimeDialogComponent"]]
        })
    ], ChangeInOutTimeModule);
    return ChangeInOutTimeModule;
}());



/***/ })

}]);
//# sourceMappingURL=hrms-dashboard-change-in-out-time-change-in-out-time-module.js.map