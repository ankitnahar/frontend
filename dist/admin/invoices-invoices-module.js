(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoices-invoices-module"],{

/***/ "./src/app/admin/billing-module/invoices/invoices.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoices.module.ts ***!
  \******************************************************************/
/*! exports provided: InvoicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesModule", function() { return InvoicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'recurring',
        loadChildren: './recurring/recurring.module#RecurringModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    },
    {
        path: 'new-invoice',
        loadChildren: './new-invoice/new-invoice.module#NewInvoiceModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    },
    {
        path: 'one-off-invoice',
        loadChildren: './one-off-invoice/one-off-invoice.module#OneOffInvoiceModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    },
    {
        path: 'adjust-wip',
        loadChildren: './adjust-wip/adjust-wip.module#AdjustWipModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    },
    {
        path: 'dashboard',
        loadChildren: './invoice-dashboard/invoice-dashboard.module#InvoiceDashboardModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var InvoicesModule = /** @class */ (function () {
    function InvoicesModule() {
    }
    InvoicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__["UtilityModule"]
            ],
            declarations: [],
            entryComponents: []
        })
    ], InvoicesModule);
    return InvoicesModule;
}());



/***/ })

}]);
//# sourceMappingURL=invoices-invoices-module.js.map