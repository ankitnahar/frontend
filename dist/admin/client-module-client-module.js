(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-module-client-module"],{

/***/ "./src/app/admin/client-module/client.module.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/client-module/client.module.ts ***!
  \******************************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].SOFTWARE_ROUTE,
        loadChildren: './software/software.module#SoftwareModule'
    },
    {
        path: 'discontinue-client',
        loadChildren: './discontinue-client/discontinue-client.module#DiscontinueClientModule'
    },
    {
        path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].CONTACT_INFORMATION_ROUTE,
        loadChildren: './contact-information/contact-information.module#ContactInformationModule'
    },
    {
        path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].VIEW_CLIENT_ROUTE,
        loadChildren: './view-client/view-client.module#ViewClientModule'
    },
    {
        path: 'information-required',
        loadChildren: './information-required/information-required.module#InformationRequiredModule'
    },
    {
        path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].CLIENT_DOCUMENTS_ROUTE,
        loadChildren: './client-documents/client-documents.module#ClientDocumentsModule'
    },
    {
        path: 'query-module',
        loadChildren: './query-module/query-module.module#QueryModuleModule'
    }
];
var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: []
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ })

}]);
//# sourceMappingURL=client-module-client-module.js.map