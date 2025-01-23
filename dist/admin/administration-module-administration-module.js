(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administration-module-administration-module"],{

/***/ "./src/app/admin/administration-module/administration.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/administration-module/administration.module.ts ***!
  \**********************************************************************/
/*! exports provided: AdministrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationModule", function() { return AdministrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'designation',
        loadChildren: './designation/designation.module#DesignationModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'dynamic-field',
        loadChildren: './dynamic-field/dynamic-field.module#DynamicFieldModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'dynamic-field-group',
        loadChildren: './dynamic-field-group/dynamic-field-group.module#DynamicFieldGroupModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'ip-address',
        loadChildren: './ip-address/ip-address.module#IpAddressModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'manage-discontinue-question',
        loadChildren: './manage-discontinue-question/manage-discontinue-question.module#ManageDiscontinueQuestionModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'manage-emails',
        loadChildren: './manage-emails/manage-emails.module#ManageEmailsModule'
    },
    {
        path: 'users',
        loadChildren: './manage-users/manage-users.module#ManageUsersModule'
    },
    {
        path: 'sub-activity-calculator',
        loadChildren: './sub-activity-calculator/sub-activity-calculator.module#SubActivityCalculatorModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'query-question',
        loadChildren: './query-question/query-question.module#QueryQuestionModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'admin-bank-information',
        loadChildren: './admin-bank-information/admin-bank-information.module#AdminBankInformationModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'admin-more-account-type',
        loadChildren: './admin-more-account-type/admin-more-account-type.module#AdminMoreAccountTypeModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'admin-more-particular-type',
        loadChildren: './admin-more-particular-type/admin-more-particular-type.module#AdminMoreParticularTypeModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
];
var AdministrationModule = /** @class */ (function () {
    function AdministrationModule() {
    }
    AdministrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__["UtilityModule"],
            ],
            declarations: []
        })
    ], AdministrationModule);
    return AdministrationModule;
}());



/***/ })

}]);
//# sourceMappingURL=administration-module-administration-module.js.map