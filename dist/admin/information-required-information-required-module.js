(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["information-required-information-required-module"],{

/***/ "./src/app/admin/client-module/information-required/information-required.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/client-module/information-required/information-required.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: InformationRequiredModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationRequiredModule", function() { return InformationRequiredModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _information_required_tab_information_required_tab_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./information-required-tab/information-required-tab.module */ "./src/app/admin/client-module/information-required/information-required-tab/information-required-tab.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _information_required_tab_information_required_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./information-required-tab/information-required-tab.component */ "./src/app/admin/client-module/information-required/information-required-tab/information-required-tab.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _information_required_tab_information_required_tab_component__WEBPACK_IMPORTED_MODULE_4__["InformationRequiredTabComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    },
    {
        path: 'information-required-tab',
        loadChildren: './information-required-tab/information-required-tab.module#InformationRequiredTabModule'
    }
];
var InformationRequiredModule = /** @class */ (function () {
    function InformationRequiredModule() {
    }
    InformationRequiredModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_6__["UtilityModule"],
            ],
            declarations: [],
            exports: [_information_required_tab_information_required_tab_module__WEBPACK_IMPORTED_MODULE_2__["InformationRequiredTabModule"]]
        })
    ], InformationRequiredModule);
    return InformationRequiredModule;
}());



/***/ })

}]);
//# sourceMappingURL=information-required-information-required-module.js.map