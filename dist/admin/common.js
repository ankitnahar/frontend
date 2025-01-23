(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/admin/admin-hrms-new/leave-trackers/leave-trackers.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/leave-trackers/leave-trackers.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leave-trackers-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>HRMS</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">LEAVE TRACKERS</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"sub-header-bg\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7 PL-0\">\r\n        <span class=\"user_img\">\r\n          <img src=\"assets/images/user.png\"/>\r\n        </span>\r\n        <span class=\"user_description\">\r\n        <h3>{{userData?.userfullname}}</h3>\r\n        <mat-label>{{userData?.email}}</mat-label><br/>\r\n        <mat-label>{{userData?.designation_id?.designation_name}}</mat-label>\r\n          </span>\r\n      </div>\r\n      <div class=\"col-md-3 PL-0 text-right PT-15\">\r\n        <mat-label><span [innerHTML]=\"userData?.Entity\"></span></mat-label>\r\n      </div>\r\n      <div class=\"col-md-2 PL-0 text-right\">\r\n        <mat-form-field floatLabel=\"never\" *ngIf=\"hrDetail?.leave_balance?.length\">\r\n          <mat-select placeholder=\"Months\" (selectionChange)=\"onChangeTypeOfView($event.value)\"\r\n                      [value]=\"hrDetail?.leave_balance[0].id\">\r\n            <mat-option *ngFor=\"let dataItem of hrDetail?.leave_balance;\" [value]=\"dataItem.id\">{{dataItem.month}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row col-md-12 MT-15\">\r\n    <div class=\"col-md-3 PL-0\">\r\n      <mat-card class=\"personal-card bg_c\">\r\n        <mat-card-title>Compensatory Off\r\n          <mat-icon class=\"PL-5\">arrow_forward</mat-icon>\r\n        </mat-card-title>\r\n        <mat-card-content class=\"text-center\">\r\n          <ul>\r\n            <li class=\"MTB-10\">\r\n              <mat-icon>date_range</mat-icon>\r\n            </li>\r\n            <li class=\"MB-10\">\r\n              Available : {{leaveInfo?.co}}\r\n            </li>\r\n          </ul>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-3 PL-0\">\r\n      <mat-card class=\"personal-card bg_e\">\r\n        <mat-card-title>Casual Leave\r\n          <mat-icon class=\"PL-5\">arrow_forward</mat-icon>\r\n        </mat-card-title>\r\n        <mat-card-content class=\"text-center\">\r\n          <ul>\r\n            <li class=\"MTB-10\">\r\n              <mat-icon>date_range</mat-icon>\r\n            </li>\r\n            <li class=\"MB-10\">\r\n              Available : {{leaveInfo?.cl}}\r\n            </li>\r\n          </ul>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-3 PL-0\">\r\n      <mat-card class=\"personal-card bg_loss\">\r\n        <mat-card-title>Leave Account\r\n          <mat-icon class=\"PL-5\">arrow_forward</mat-icon>\r\n        </mat-card-title>\r\n        <mat-card-content class=\"text-center\">\r\n          <ul>\r\n            <li class=\"MTB-10\">\r\n              <mat-icon>date_range</mat-icon>\r\n            </li>\r\n            <li class=\"MB-10\">\r\n              Available : {{leaveInfo?.la}}\r\n            </li>\r\n          </ul>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/leave-trackers/leave-trackers.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/leave-trackers/leave-trackers.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluLWhybXMtbmV3L2xlYXZlLXRyYWNrZXJzL2xlYXZlLXRyYWNrZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/leave-trackers/leave-trackers.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/leave-trackers/leave-trackers.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LeaveTrackersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTrackersComponent", function() { return LeaveTrackersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-user.service */ "./src/utility/shared-service/shared-user.service.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LeaveTrackersComponent = /** @class */ (function () {
    function LeaveTrackersComponent(_router, _commonCrudService, _sharedUserService) {
        this._router = _router;
        this._commonCrudService = _commonCrudService;
        this._sharedUserService = _sharedUserService;
    }
    LeaveTrackersComponent.prototype.ngOnInit = function () {
        this.getHRDetail();
    };
    LeaveTrackersComponent.prototype.getHRDetail = function () {
        var _this = this;
        this.userData = this._sharedUserService.getUser();
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_1__["AdminAPI"].GETDETAIL, {}).subscribe(function (Response) {
            _this.hrDetail = Response.payload.data;
            _this.leaveInfo = _this.hrDetail.leave_balance.length ? _this.hrDetail.leave_balance[0] : null;
        });
    };
    /**
     * On Change Type of View
     * @param value
     */
    LeaveTrackersComponent.prototype.onChangeTypeOfView = function (value) {
        var leaveData = this.hrDetail.leave_balance.filter(function (item) { return item.id === value; });
        if (leaveData.length) {
            this.leaveInfo = leaveData[0];
        }
    };
    /**
     * On home page route
     */
    LeaveTrackersComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    LeaveTrackersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave-trackers',
            template: __webpack_require__(/*! ./leave-trackers.component.html */ "./src/app/admin/admin-hrms-new/leave-trackers/leave-trackers.component.html"),
            styles: [__webpack_require__(/*! ./leave-trackers.component.scss */ "./src/app/admin/admin-hrms-new/leave-trackers/leave-trackers.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__["CommonCrudService"], _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["SharedUserService"]])
    ], LeaveTrackersComponent);
    return LeaveTrackersComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/leave-trackers/leave-trackers.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/leave-trackers/leave-trackers.module.ts ***!
  \******************************************************************************/
/*! exports provided: LeaveTrackersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTrackersModule", function() { return LeaveTrackersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _leave_trackers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-trackers.component */ "./src/app/admin/admin-hrms-new/leave-trackers/leave-trackers.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'leave-trackers',
        component: _leave_trackers_component__WEBPACK_IMPORTED_MODULE_2__["LeaveTrackersComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    }
];
var LeaveTrackersModule = /** @class */ (function () {
    function LeaveTrackersModule() {
    }
    LeaveTrackersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"]
            ],
            declarations: [_leave_trackers_component__WEBPACK_IMPORTED_MODULE_2__["LeaveTrackersComponent"]],
            exports: [_leave_trackers_component__WEBPACK_IMPORTED_MODULE_2__["LeaveTrackersComponent"]]
        })
    ], LeaveTrackersModule);
    return LeaveTrackersModule;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/dismiss-dialog/dismiss-dialog.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/dismiss-dialog/dismiss-dialog.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Training List Dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Dismiss Invoice</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"dismissForm\" (submit)=\"onSubmitDismissForm(dismissForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 MT-10\">\r\n          <p>Once invoice is dismissed units will be set as uncharged for next invoice, are you sure you want to dismiss\r\n            this invoice now?</p>\r\n        </div>\r\n        <div class=\"col-md-12 MT-20\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Reason for dismiss the invoice\" formControlName=\"dismiss_reason\"\r\n                      required></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal__footer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-right PR-25\">\r\n          <button type=\"submit\" class=\"btn-primary\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Training List Dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/dismiss-dialog/dismiss-dialog.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/dismiss-dialog/dismiss-dialog.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: DismissDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DismissDialogComponent", function() { return DismissDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
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







var DismissDialogComponent = /** @class */ (function () {
    function DismissDialogComponent(_router, dialogRef, data, _fb, _commonCrudService) {
        this._router = _router;
        this.dialogRef = dialogRef;
        this.data = data;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
    }
    DismissDialogComponent.prototype.ngOnInit = function () {
        this.createDismissForm();
        this.invoiceId = this.data['id'];
    };
    DismissDialogComponent.prototype.createDismissForm = function () {
        this.dismissForm = this._fb.group({
            dismiss_reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    };
    DismissDialogComponent.prototype.onSubmitDismissForm = function (form) {
        var _this = this;
        if (form.valid) {
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_3__["AdminAPI"].INVOICE_DISMISS + '/' + this.invoiceId, form.value).subscribe(function (response) {
                _this.onDimissInvoiceList();
            });
            this.onClose();
        }
    };
    DismissDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    DismissDialogComponent.prototype.onDimissInvoiceList = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].INVOICES_DASHBOARD]);
    };
    DismissDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dismiss-dialog',
            template: __webpack_require__(/*! ./dismiss-dialog.component.html */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/dismiss-dialog/dismiss-dialog.component.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]])
    ], DismissDialogComponent);
    return DismissDialogComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map