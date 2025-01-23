(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-hrms-new-admin-hrms-new-module~hrms-holiday-working-listing-hrms-holiday-working-listi~dc22995e"],{

/***/ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/apply-holiday-working-form/apply-holiday-working-form.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/apply-holiday-working-form/apply-holiday-working-form.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>HRMS</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">\r\n            <a (click)=\"onHolidayListing()\">HOLIDAY WORKING</a>\r\n          </span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">APPLY HOLIDAY WORKING</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Over BreadCrumb Top Header -->\r\n\r\n  <!--Start add Apply leave form-->\r\n  <div>\r\n    <span class=\"panel-title orange-color\">Apply Holiday Working Leave</span>\r\n    <form [formGroup]=\"addApplyHolidayworkingLeaveForm\" (submit)=\"onSubmit(addApplyHolidayworkingLeaveForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Employee ID\" formControlName=\"employee_id\" readonly/>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Department\" value=\"{{userInfo?.designation_id?.department_name}}\" readonly/>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"First Approval\" value=\"{{userInfo?.first_approval?.userfullname}}\" readonly/>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Second Approval\" value=\"{{userInfo?.second_approval?.userfullname}}\" readonly/>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Location\" formControlName=\"location_id\" required>\r\n              <mat-option *ngFor=\"let location of locationList\" [value]=\"location?.id\">\r\n                {{ location?.location_name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addApplyHolidayworkingLeaveForm.get('location_id'))\"\r\n                            [errMsg]=\"validationMsg.LOCATION\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput formControlName=\"date\" [matDatepicker]=\"dueDateFrom\"\r\n                   placeholder=\"Holiday's Date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"dueDateFrom\"></mat-datepicker-toggle>\r\n            <mat-datepicker #dueDateFrom></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Estimated Arrival Time\" aria-label=\"Select Time\" [ngxTimepicker]=\"selecttime\"\r\n                   [format]=\"24\" formControlName=\"start_time\">\r\n            <ngx-material-timepicker #selecttime></ngx-material-timepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Estimated Departure Time\" aria-label=\"Select Time\"\r\n                   [ngxTimepicker]=\"selecttime1\"\r\n                   [format]=\"24\" formControlName=\"end_time\">\r\n            <ngx-material-timepicker #selecttime1></ngx-material-timepicker>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <ng-select [items]=\"clientList\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"trading_name\"\r\n                     placeholder=\"Trading Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"entity_id\">\r\n          </ng-select>\r\n        </div>\r\n\r\n        <div class=\"col-md-8\">\r\n          <mat-form-field>\r\n            <textarea matInput type=\"text\" placeholder=\"Reason for Holiday Working\" formControlName=\"notes\" required></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MB-20\">\r\n          <div class=\"row MT-30\">\r\n            <div class=\"col-md-6 PL-0\">\r\n            </div>\r\n            <div class=\"col-md-6 text-right PR-0\">\r\n              <button (click)=\"onGoDashboard()\" type=\"button\" class=\"btn-default MR-5\">Cancel</button>\r\n              <button [disabled]=\"addApplyHolidayworkingLeaveForm.invalid\" type=\"submit\" class=\"btn-primary\">Submit\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!--Over add apply holiday working leave form-->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/apply-holiday-working-form/apply-holiday-working-form.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/apply-holiday-working-form/apply-holiday-working-form.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluLWhybXMtbmV3L2hybXMtaG9saWRheS13b3JraW5nLWxpc3RpbmcvYXBwbHktaG9saWRheS13b3JraW5nLWZvcm0vYXBwbHktaG9saWRheS13b3JraW5nLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/apply-holiday-working-form/apply-holiday-working-form.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/apply-holiday-working-form/apply-holiday-working-form.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ApplyHolidayWorkingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyHolidayWorkingFormComponent", function() { return ApplyHolidayWorkingFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
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












var ApplyHolidayWorkingFormComponent = /** @class */ (function (_super) {
    __extends(ApplyHolidayWorkingFormComponent, _super);
    function ApplyHolidayWorkingFormComponent(_fb, _router, _commonCrudService, _sharedObjService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._router = _router;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        _this._sharedService = _sharedService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_2__["ValidationConstantMessage"]();
        _this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["yesNo"];
        _this.locationList = [];
        _this.clientList = [];
        return _this;
    }
    ApplyHolidayWorkingFormComponent.prototype.ngOnInit = function () {
        this.userInfo = this._sharedService.getUser();
        // console.log(this.userInfo);
        this.createAddHolidayWorkingForm();
        this.getLocationList();
        this.getClientList();
    };
    // location list API
    ApplyHolidayWorkingFormComponent.prototype.getLocationList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].LOCATION, { 'records': 'all' }).subscribe(function (response) {
            _this.locationList = response.payload.data;
        });
    };
    ApplyHolidayWorkingFormComponent.prototype.onHolidayListing = function () {
        this._router.navigate([_utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].APPLY_HOLIDAY_WORKING_LISTING]);
    };
    /**
     * Get Client List
     */
    ApplyHolidayWorkingFormComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = response;
        });
    };
    ApplyHolidayWorkingFormComponent.prototype.createAddHolidayWorkingForm = function () {
        this.addApplyHolidayworkingLeaveForm = this._fb.group({
            employee_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userInfo ? this.userInfo.user_bio_id : null),
            location_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            start_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            end_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            first_approval: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userInfo && this.userInfo.first_approval_user > 0 ? this.userInfo.first_approval_user : null),
            second_approval: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userInfo && this.userInfo.second_approval_user > 0 ? this.userInfo.second_approval_user : null)
        });
    };
    /**
     * On home page route
     */
    ApplyHolidayWorkingFormComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * On Submit Form Group
     * @param form
     */
    ApplyHolidayWorkingFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['date'] = moment__WEBPACK_IMPORTED_MODULE_11__(form.value['date']).format('YYYY-MM-DD');
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].HOLIDAY_WORKING_STORE, form.value).subscribe(function (Response) {
                _this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].APPLY_HOLIDAY_WORKING_LISTING]);
            });
        }
    };
    ApplyHolidayWorkingFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apply-holiday-working-form',
            template: __webpack_require__(/*! ./apply-holiday-working-form.component.html */ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/apply-holiday-working-form/apply-holiday-working-form.component.html"),
            styles: [__webpack_require__(/*! ./apply-holiday-working-form.component.scss */ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/apply-holiday-working-form/apply-holiday-working-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], ApplyHolidayWorkingFormComponent);
    return ApplyHolidayWorkingFormComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/approve-holiday-working-dialog/approve-holiday-working-dialog.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/approve-holiday-working-dialog/approve-holiday-working-dialog.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Approve holiday working  dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">HOLIDAY WORKING APPROVAL</div>\r\n  </div>\r\n\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose(false)\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"approvalForm\" (submit)=\"onSubmit(approvalForm)\">\r\n    <div class=\"modal__body admin-hrms-attendance-summary-container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-label class=\"fw-500\">Name</mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-8\">\r\n          <p>{{holidayWorkingData?.created_by?.userfullname}}</p>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">First Approval Name</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-35\">\r\n          <mat-label class=\"MT-20\">{{holidayWorkingData?.first_approval?.userfullname}}</mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">Second Approval Name</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-35\">\r\n          <mat-label class=\"MT-20\">\r\n            {{(holidayWorkingData?.second_approval?.userfullname) ? holidayWorkingData?.second_approval?.userfullname :'-'}}\r\n          </mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"fw-500\">Client Work's Pending</mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-8 MT-35\">\r\n          <mat-label class=\"MT-20\">\r\n            {{holidayWorkingData?.trading_name}}\r\n          </mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">Reason for Holiday Working</mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-8 MT-35\">\r\n          <mat-label class=\"MT-20\">\r\n            {{(holidayWorkingData?.notes) ? holidayWorkingData?.notes :'-'}}\r\n          </mat-label>\r\n        </div>\r\n        <div class=\"col-md-4 MT-35\">\r\n          <mat-label class=\"MT-20 fw-500\">Arrival / Departure Time</mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-8 MT-35\">\r\n          <mat-label class=\"MT-20\">\r\n            A : {{ holidayWorkingData?.start_time }} / D :{{ holidayWorkingData?.end_time }}\r\n          </mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\"\r\n             *ngIf=\"holidayWorkingData?.status_id === 3 || holidayWorkingData?.status_id === 4\">\r\n          <mat-label class=\"MT-20 fw-500\">First Approval Comment</mat-label>\r\n        </div>\r\n        <div class=\"col-md-8 MT-35\">\r\n          <span *ngIf=\"holidayWorkingData?.status_id === 3 && userData?.designation_id?.designation_id != 7\">\r\n          <mat-form-field>\r\n        <textarea matInput placeholder=\"Enter your comment\" rows=\"3\" required\r\n                  formControlName=\"comment\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(approvalForm.get('comment'))\"\r\n                            [errMsg]=\"validationMsg.COMMENTS\"></app-validation>\r\n          </div>\r\n            </span>\r\n          <mat-label class=\"MT-20\"\r\n                     *ngIf=\"holidayWorkingData?.status_id === 4 || userData?.designation_id?.designation_id == 7\">\r\n            {{attendanceSummaryDetail?.first_approval?.comment}}\r\n          </mat-label>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-4 MT-35\"\r\n             *ngIf=\"(holidayWorkingData?.status_id === 4 && userData?.designation_id?.designation_id != 7)\">\r\n          <mat-label class=\"MT-20 fw-500\">Second Approval Comment</mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-8 MT-10\"\r\n             *ngIf=\"(holidayWorkingData?.status_id === 4 && userData?.designation_id?.designation_id != 7)\">\r\n          <mat-form-field>\r\n              <textarea matInput placeholder=\"Enter your comment\" rows=\"3\" required\r\n                        formControlName=\"comment\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(approvalForm.get('comment'))\"\r\n                            [errMsg]=\"validationMsg.COMMENTS\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 MT-35\" *ngIf=\"(userData?.designation_id?.designation_id === 7)\">\r\n          <mat-label class=\"MT-20 fw-500\">Super Admin Comment</mat-label>\r\n        </div>\r\n\r\n        <div class=\"col-md-8 MT-10\" *ngIf=\"(userData?.designation_id?.designation_id === 7)\">\r\n          <mat-form-field>\r\n              <textarea matInput placeholder=\"Enter your comment\" rows=\"3\" required\r\n                        formControlName=\"comment\"></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(approvalForm.get('comment'))\"\r\n                            [errMsg]=\"validationMsg.COMMENTS\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 text-left approval-name user-approved-request-details\">\r\n          <span *ngIf=\"holidayWorkingData?.first_approval != null &&  holidayWorkingData?.first_approval?.id !==0\"\r\n                class=\"{{holidayWorkingData?.status_id === 2 ? 'orange-color' : holidayWorkingData?.status_id === 3 ? '' : holidayWorkingData?.status_id === 4 ? 'green-color' : holidayWorkingData?.status_id === 5 ? 'green-color' : holidayWorkingData?.status_id === 6 ? 'red-color' : ''}}\">\r\n            <img *ngIf=\"holidayWorkingData?.first_approval?.user_image\"\r\n                 matTooltip=\"{{holidayWorkingData?.first_approval?.userfullname}}\"\r\n                 src=\"{{url+holidayWorkingData?.first_approval?.user_image}}\" width=\"30\"/>\r\n            <img *ngIf=\"!holidayWorkingData?.first_approval?.user_image\"\r\n                 matTooltip=\"{{holidayWorkingData?.first_approval?.userfullname}}\"\r\n                 src=\"assets/images/profile_placeholder.png\"\r\n                 width=\"30\"/>\r\n          </span>\r\n          <span *ngIf=\"holidayWorkingData?.second_approval != null &&  holidayWorkingData?.second_approval?.id !==0\"><mat-icon class=\"v-align-middle\">arrow_forward</mat-icon></span>\r\n          <span *ngIf=\"holidayWorkingData?.second_approval != null &&  holidayWorkingData?.second_approval?.id !==0\"\r\n                class=\"{{holidayWorkingData?.status_id === 4 ? '' :  holidayWorkingData?.status_id === 5 ? 'green-color' : holidayWorkingData?.status_id === 6 ? 'red-color' : ''}}\">\r\n            <img *ngIf=\"holidayWorkingData?.second_approval?.user_image\"\r\n                 matTooltip=\"{{holidayWorkingData?.second_approval?.userfullname}}\"\r\n                 src=\"{{url+holidayWorkingData?.second_approval?.user_image}}\"\r\n                 width=\"30\"/>\r\n          <img *ngIf=\"!holidayWorkingData?.second_approval?.user_image\"\r\n               matTooltip=\"{{holidayWorkingData?.second_approval?.userfullname}}\"\r\n               src=\"assets/images/profile_placeholder.png\"\r\n               width=\"30\"/>\r\n          </span>\r\n        </div>\r\n        <div class=\"col-md-6 text-right\">\r\n          <button type=\"submit\" class=\"btn-primary MR-5\" (click)=\"checkButtonBeheviour(1)\" [disabled]=\"approvalForm.invalid\">\r\n            {{(holidayWorkingData?.status_id === 2)?'Request send':'Approve'}}\r\n          </button>\r\n          <button type=\"submit\" class=\"btn-orange\" (click)=\"checkButtonBeheviour(0)\"\r\n                  *ngIf=\"holidayWorkingData?.status_id == 3 || holidayWorkingData?.status_id == 4\">Reject\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/approve-holiday-working-dialog/approve-holiday-working-dialog.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/approve-holiday-working-dialog/approve-holiday-working-dialog.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ApproveHolidayWorkingDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveHolidayWorkingDialogComponent", function() { return ApproveHolidayWorkingDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
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










var ApproveHolidayWorkingDialogComponent = /** @class */ (function (_super) {
    __extends(ApproveHolidayWorkingDialogComponent, _super);
    function ApproveHolidayWorkingDialogComponent(dialogRef, data, _sharedService, _fb, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._sharedService = _sharedService;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        _this.url = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].IMAGE_PATH;
        _this.hrStatus = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["hrStatus"];
        _this.leaveRequest = [];
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        _this.isSubmitType = 0;
        return _this;
    }
    ApproveHolidayWorkingDialogComponent.prototype.ngOnInit = function () {
        this.userData = this._sharedService.getUser();
        this.holidayWorkingData = (this.data.holidayWorkingDetails) ? this.data.holidayWorkingDetails : [];
        this.createAddEarlyLeavingForm();
    };
    /**
     * Add Early leaving form
     */
    ApproveHolidayWorkingDialogComponent.prototype.createAddEarlyLeavingForm = function () {
        if (this.holidayWorkingData.status_id === 3 || this.holidayWorkingData.status_id === 4) {
            this.approvalForm = this._fb.group({
                comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
        }
        if (this.userData.designation_id.designation_id === 7) {
            this.approvalForm = this._fb.group({
                comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
        }
    };
    ApproveHolidayWorkingDialogComponent.prototype.onSubmit = function (form) {
        if (form.valid) {
            // form.value['_method'] = 'put';
            if (this.holidayWorkingData.status_id === 3 || this.holidayWorkingData.status_id === 4) {
                var approval_type = (this.holidayWorkingData.status_id === 3) ? 1 : 2;
                var status_1 = this.isSubmitType === 0 ? 6 : (this.holidayWorkingData.status_id === 3) ? 4 : 5;
                form.value['id'] = this.holidayWorkingData.id;
                form.value['approval_type'] = approval_type;
                form.value['status_id'] = status_1;
                this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].HOLIDAY_WORKING_APPROVE, this.holidayWorkingData.id, form.value).subscribe(function (response) {
                });
            }
            this.onClose(true);
        }
    };
    ApproveHolidayWorkingDialogComponent.prototype.checkButtonBeheviour = function (val) {
        this.isSubmitType = val;
    };
    ApproveHolidayWorkingDialogComponent.prototype.onClose = function (value) {
        this.dialogRef.close(value);
    };
    ApproveHolidayWorkingDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approve-holiday-working-dialog',
            template: __webpack_require__(/*! ./approve-holiday-working-dialog.component.html */ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/approve-holiday-working-dialog/approve-holiday-working-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object, _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"]])
    ], ApproveHolidayWorkingDialogComponent);
    return ApproveHolidayWorkingDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/hrms-holiday-working-listing.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/hrms-holiday-working-listing.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"holiday-list-out-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>HRMS</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">HOLIDAY WORKING</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <button class=\"open-dialog-btn MB-10\" (click)=\"onApplyHolidayWorkingLeave()\">\r\n            <mat-icon class=\"material-icons\">add</mat-icon>\r\n            Apply Holiday Working\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"downloadExcel()\">\r\n                <span>Excel</span>\r\n                <mat-icon>file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <ng-select [items]=\"userList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"userfullname\"\r\n                       placeholder=\"Employee Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"user_id\"\r\n                       (change)=\"setAdvanceFilter(filterForm)\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <input matInput formControlName=\"date\" [matDatepicker]=\"dueDateFrom\"\r\n                     placeholder=\"Holiday's Date\" (dateChange)=\"setAdvanceFilter(filterForm)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dueDateFrom\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dueDateFrom></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <ng-select [items]=\"hrStatus\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"label\"\r\n                       placeholder=\"Status\"\r\n                       bindValue=\"key\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"status_id\"\r\n                       (change)=\"setAdvanceFilter(filterForm)\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n            <th width=\"10%\">Employee Name</th>\r\n            <th width=\"10%\">Holiday's Date</th>\r\n            <th width=\"10%\">Estimated Arrival Time</th>\r\n            <th width=\"10%\">Estimated Departure Time</th>\r\n            <th width=\"15%\">Name of client whose work is pending</th>\r\n            <th width=\"15%\">Reason for Holiday Working</th>\r\n            <th width=\"10%\">Approval</th>\r\n            <th width=\"10%\">Status</th>\r\n            <th width=\"5%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let holidayWorking of holidayWorkingList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"10%\">{{holidayWorking?.created_by?.userfullname}}\r\n              </td>\r\n              <td width=\"10%\">{{holidayWorking?.date | date : 'dd-MM-yyyy'}}</td>\r\n              <td width=\"10%\">{{holidayWorking?.start_time}}</td>\r\n              <td width=\"10%\">{{holidayWorking?.end_time}}</td>\r\n              <td width=\"15%\">{{holidayWorking?.trading_name}}</td>\r\n              <td width=\"15%\">{{holidayWorking?.notes}}</td>\r\n              <td width=\"10%\">\r\n                <div>\r\n                  <div class=\"approval-name user-approved-request-details\">\r\n                    <span *ngIf=\"holidayWorking?.first_approval != null && holidayWorking?.first_approval?.id !== 0\"\r\n                          class=\"{{holidayWorking?.status_id === 2 ? 'orange-color' : holidayWorking?.status_id === 3 ? '' : holidayWorking?.status_id === 4 ? 'green-color' : holidayWorking?.status_id === 5 ? 'green-color' : holidayWorking?.status_id === 6 ? 'red-color' : ''}}\">\r\n                    <img\r\n                      matTooltip=\"{{holidayWorking?.first_approval?.userfullname}}{{(holidayWorking?.status_id === 4 ||holidayWorking?.status_id === 5) ? (holidayWorking?.first_approval_on | date : 'dd-MM-yyyy HH:mm:ss') : ''}}\"\r\n                      *ngIf=\"holidayWorking?.first_approval?.user_image\"\r\n                      src=\"{{url+holidayWorking?.first_approval?.user_image}}\"/>\r\n                    <img\r\n                      matTooltip=\"{{holidayWorking?.first_approval?.userfullname}} {{(holidayWorking?.status_id === 4 ||holidayWorking?.status_id === 5) ? (holidayWorking?.first_approval_on | date : 'dd-MM-yyyy HH:mm:ss') : ''}}\"\r\n                      *ngIf=\"!holidayWorking?.first_approval?.user_image\"\r\n                      src=\"assets/images/profile_placeholder.png\"/>\r\n                    </span>\r\n                    <span *ngIf=\"holidayWorking?.second_approval != null && holidayWorking?.second_approval?.id !== 0\"\r\n                          class=\"{{holidayWorking?.status_id === 4 ? '' :  holidayWorking?.status_id === 5 ? 'green-color' : holidayWorking?.status_id === 6 ? 'red-color' : ''}}\">\r\n                    <img\r\n                      matTooltip=\"{{holidayWorking?.second_approval?.userfullname}} {{(holidayWorking?.status_id === 4 ||holidayWorking?.status_id === 5) ? (holidayWorking?.second_approval_on | date : 'dd-MM-yyyy HH:mm:ss') : ''}}\"\r\n                      *ngIf=\"holidayWorking?.second_approval?.user_image\"\r\n                      src=\"{{url+holidayWorking?.second_approval?.user_image}}\"/>\r\n                    <img\r\n                      matTooltip=\"{{holidayWorking?.second_approval?.userfullname}} {{(holidayWorking?.status_id === 4 ||holidayWorking?.status_id === 5) ? (holidayWorking?.second_approval_on | date : 'dd-MM-yyyy HH:mm:ss') : ''}}\"\r\n                      *ngIf=\"!holidayWorking?.second_approval?.user_image\"\r\n                      src=\"assets/images/profile_placeholder.png\"/>\r\n                      </span>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td width=\"10%\">\r\n                <div *ngFor=\"let status of hrStatus\">\r\n                  <span *ngIf=\"status.key === holidayWorking?.status_id\">{{status.label}}</span>\r\n                </div>\r\n              </td>\r\n              <td width=\"10%\">\r\n                <mat-icon class=\"light-orange-color\" (click)=\"onApproveHolidayWorkingListingDialog(holidayWorking)\"\r\n                          *ngIf=\"holidayWorking?.status_id === 2 && holidayWorking?.first_approval?.id === userInfo.id\">\r\n                  edit\r\n                </mat-icon>\r\n                <mat-icon class=\"light-orange-color\" (click)=\"onApproveHolidayWorkingListingDialog(holidayWorking)\"\r\n                          *ngIf=\"holidayWorking?.status_id === 3 && holidayWorking?.first_approval?.id === userInfo.id\">\r\n                  edit\r\n                </mat-icon>\r\n                <mat-icon class=\"light-orange-color\" (click)=\"onApproveHolidayWorkingListingDialog(holidayWorking)\"\r\n                          *ngIf=\"holidayWorking?.status_id === 4 && holidayWorking?.second_approval?.id === userInfo.id\">\r\n                  edit\r\n                </mat-icon>\r\n                <mat-icon class=\"light-orange-color\" (click)=\"onApproveHolidayWorkingListingDialog(holidayWorking)\"\r\n                          *ngIf=\"(userInfo?.designation_id?.designation_id === 7 && (holidayWorking?.status_id === 4 || holidayWorking?.status_id === 3))\">\r\n                  edit\r\n                </mat-icon>\r\n                <mat-icon *ngIf=\"holidayWorking?.status_id <= 3 && holidayWorking?.user_id === userInfo.id\" class=\"light-orange-color\"\r\n                          (click)=\"onDeleteHolidayWorking(holidayWorking)\">delete\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>  <!-- End Table -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/hrms-holiday-working-listing.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/hrms-holiday-working-listing.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluLWhybXMtbmV3L2hybXMtaG9saWRheS13b3JraW5nLWxpc3RpbmcvaHJtcy1ob2xpZGF5LXdvcmtpbmctbGlzdGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/hrms-holiday-working-listing.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/hrms-holiday-working-listing.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: HrmsHolidayWorkingListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrmsHolidayWorkingListingComponent", function() { return HrmsHolidayWorkingListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _approve_holiday_working_dialog_approve_holiday_working_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./approve-holiday-working-dialog/approve-holiday-working-dialog.component */ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/approve-holiday-working-dialog/approve-holiday-working-dialog.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HrmsHolidayWorkingListingComponent = /** @class */ (function () {
    function HrmsHolidayWorkingListingComponent(_fb, _router, dialog, _commonCrudService, _sharedObjService, _sharedService) {
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        // Data Variables
        this.holidayWorkingList = [];
        this.leaveType = [];
        this.hrStatus = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["hrStatus"];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY[1];
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.userList = [];
    }
    HrmsHolidayWorkingListingComponent.prototype.ngOnInit = function () {
        this.userInfo = this._sharedService.getUser();
        this.getHolidayWorkingList(1);
        this.getUserList();
        this.createFilterForm();
    };
    /**
     * Get User List
     */
    HrmsHolidayWorkingListingComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.userList = response;
        });
    };
    /**
     * user Listing API.
     * @param pageNumber
     * @param key
     * @param val
     */
    HrmsHolidayWorkingListingComponent.prototype.getHolidayWorkingList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].HOLIDAY_WORKING_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.holidayWorkingList = response.payload.data;
            _this.page = response.pager.pageNumber;
            _this.pageIndex = _this.page - 1;
            _this.totalRecords = +response.pager.totalRecords;
            _this.sortBy = response.pager.sortBy;
            _this.sortOrder = response.pager.sortOrder;
        });
    };
    // get function for returning pageNumber and page size at time of listing api
    HrmsHolidayWorkingListingComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
        var params = {};
        params = {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
        sortKey ? params['sortBy'] = sortKey : '';
        sortOrder ? params['sortOrder'] = sortOrder : '';
        return params;
    };
    HrmsHolidayWorkingListingComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getHolidayWorkingList(1, sortKey, sortVal);
    };
    // advance filter search operation
    HrmsHolidayWorkingListingComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        // check for the object whether its empty or not
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
        return params;
    };
    /**
     * Create Advance Filter
     */
    HrmsHolidayWorkingListingComponent.prototype.createFilterForm = function () {
        this.filterForm = this._fb.group({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    /**
     * Apply Leave
     * */
    HrmsHolidayWorkingListingComponent.prototype.onApplyHolidayWorkingLeave = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].APPLY_HOLIDAY_WORKING_LEAVE_FORM]);
    };
    /**
     * on delete confirmation dialog
     */
    HrmsHolidayWorkingListingComponent.prototype.onDeleteConfirmationDialog = function () {
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this Ip Address ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    HrmsHolidayWorkingListingComponent.prototype.onApproveHolidayWorkingListingDialog = function (holidayWorking) {
        var _this = this;
        var dialogRef = this.dialog.open(_approve_holiday_working_dialog_approve_holiday_working_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ApproveHolidayWorkingDialogComponent"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {
                holidayWorkingDetails: (holidayWorking) ? holidayWorking : []
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getHolidayWorkingList(1);
            }
        });
    };
    HrmsHolidayWorkingListingComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getHolidayWorkingList(event.pageIndex + 1);
    };
    /**
     * On Delete Holiday Working
     * @param holidayWorking
     */
    HrmsHolidayWorkingListingComponent.prototype.onDeleteHolidayWorking = function (holidayWorking) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this holiday working request?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].HOLIDAY_WORKING_LIST, holidayWorking.id).subscribe(function (Response) {
                    _this.getHolidayWorkingList(1);
                });
            }
        });
    };
    /**
     * On home page route
     */
    HrmsHolidayWorkingListingComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    HrmsHolidayWorkingListingComponent.prototype.setAdvanceFilter = function (form, flag) {
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
            }
        }
        // For Entity ID
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'user_id' || key === 'date' || key === 'status_id') {
                        this.equalJSON[key] = (key === 'date') ? moment__WEBPACK_IMPORTED_MODULE_12__(form.value[key]).format('YYYY-MM-DD') : form.value[key];
                    }
                }
            }
            this.getHolidayWorkingList(1);
        }
    };
    /**
     * Export to Excel
     */
    HrmsHolidayWorkingListingComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].HOLIDAY_WORKING_LIST, params, this.getSearchParam(), 'Holiday Working - ', 0).subscribe(function (response) {
        });
    };
    HrmsHolidayWorkingListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hrms-holiday-working-listing',
            template: __webpack_require__(/*! ./hrms-holiday-working-listing.component.html */ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/hrms-holiday-working-listing.component.html"),
            styles: [__webpack_require__(/*! ./hrms-holiday-working-listing.component.scss */ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/hrms-holiday-working-listing.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], HrmsHolidayWorkingListingComponent);
    return HrmsHolidayWorkingListingComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/hrms-holiday-working-listing.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/hrms-holiday-working-listing.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: HrmsHolidayWorkingListingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrmsHolidayWorkingListingModule", function() { return HrmsHolidayWorkingListingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _hrms_holiday_working_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hrms-holiday-working-listing.component */ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/hrms-holiday-working-listing.component.ts");
/* harmony import */ var _apply_holiday_working_form_apply_holiday_working_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apply-holiday-working-form/apply-holiday-working-form.component */ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/apply-holiday-working-form/apply-holiday-working-form.component.ts");
/* harmony import */ var _approve_holiday_working_dialog_approve_holiday_working_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approve-holiday-working-dialog/approve-holiday-working-dialog.component */ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/approve-holiday-working-dialog/approve-holiday-working-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'hrms-holiday-working-listing',
        component: _hrms_holiday_working_listing_component__WEBPACK_IMPORTED_MODULE_2__["HrmsHolidayWorkingListingComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_7__["AdminAuthGuard"]]
    }, {
        path: 'apply-holiday-working-form',
        component: _apply_holiday_working_form_apply_holiday_working_form_component__WEBPACK_IMPORTED_MODULE_3__["ApplyHolidayWorkingFormComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_7__["AdminAuthGuard"]]
    }
];
var HrmsHolidayWorkingListingModule = /** @class */ (function () {
    function HrmsHolidayWorkingListingModule() {
    }
    HrmsHolidayWorkingListingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_6__["UtilityModule"]
            ],
            declarations: [_hrms_holiday_working_listing_component__WEBPACK_IMPORTED_MODULE_2__["HrmsHolidayWorkingListingComponent"], _apply_holiday_working_form_apply_holiday_working_form_component__WEBPACK_IMPORTED_MODULE_3__["ApplyHolidayWorkingFormComponent"], _approve_holiday_working_dialog_approve_holiday_working_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ApproveHolidayWorkingDialogComponent"]],
            entryComponents: [_approve_holiday_working_dialog_approve_holiday_working_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ApproveHolidayWorkingDialogComponent"]],
            exports: [_hrms_holiday_working_listing_component__WEBPACK_IMPORTED_MODULE_2__["HrmsHolidayWorkingListingComponent"], _apply_holiday_working_form_apply_holiday_working_form_component__WEBPACK_IMPORTED_MODULE_3__["ApplyHolidayWorkingFormComponent"], _approve_holiday_working_dialog_approve_holiday_working_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ApproveHolidayWorkingDialogComponent"]]
        })
    ], HrmsHolidayWorkingListingModule);
    return HrmsHolidayWorkingListingModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~admin-hrms-new-admin-hrms-new-module~hrms-holiday-working-listing-hrms-holiday-working-listi~dc22995e.js.map