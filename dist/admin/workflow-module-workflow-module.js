(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workflow-module-workflow-module"],{

/***/ "./src/app/admin/workflow-module/workflow.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/workflow-module/workflow.module.ts ***!
  \**********************************************************/
/*! exports provided: WorkflowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowModule", function() { return WorkflowModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].BULK_ALLOCATION_ROUTE,
        loadChildren: './bulk-allocation/bulk-allocation.module#BulkAllocationModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    },
    {
        path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].PENDING_TICKETS_ROUTE,
        loadChildren: './pending-tickets/pending-tickets.module#PendingTicketsModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    },
    {
        path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].WORKSHEET_DASHBOARD_ROUTE,
        loadChildren: './worksheet-module/worksheet.module#WorksheetModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    },
    {
        path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].USER_HISTORY_ROUTE,
        loadChildren: './user-history/user-history.module#UserHistoryModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    }
];
var WorkflowModule = /** @class */ (function () {
    function WorkflowModule() {
    }
    WorkflowModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: []
        })
    ], WorkflowModule);
    return WorkflowModule;
}());



/***/ })

}]);
//# sourceMappingURL=workflow-module-workflow-module.js.map