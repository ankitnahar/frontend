(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrms-module-hrms-module"],{

/***/ "./src/app/admin/hrms-module/hrms.module.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/hrms-module/hrms.module.ts ***!
  \**************************************************/
/*! exports provided: HrmsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrmsModule", function() { return HrmsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _hrms_dashboard_hrms_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hrms-dashboard/hrms-dashboard.component */ "./src/app/admin/hrms-module/hrms-dashboard/hrms-dashboard.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].HRMS_DASHBOARD_ROUTE,
        component: _hrms_dashboard_hrms_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["HrmsDashboardComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]],
    },
    {
        path: 'change-in-out-time',
        loadChildren: './hrms-dashboard/change-in-out-time/change-in-out-time.module#ChangeInOutTimeModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'shift-list',
        loadChildren: './hrms-dashboard/shift-list/shift-list.module#ShiftListModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'holiday-list',
        loadChildren: './hrms-dashboard/holiday-list/holiday-list.module#HolidayListModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'daily-report',
        loadChildren: './hrms-dashboard/daily-report/daily-report.module#DailyReportModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'attendance-summary',
        loadChildren: './hrms-dashboard/attendance-summary/attendance-summary.module#AttendanceSummaryModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'exception-shift',
        loadChildren: './hrms-dashboard/exception-shift/exception-shift.module#ExceptionShiftModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'holiday-master',
        loadChildren: './hrms-dashboard/holiday-master/holiday-master.module#HolidayMasterModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'leave-balance-list',
        loadChildren: './hrms-dashboard/leave-balance-list/leave-balance-list.module#LeaveBalanceListModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    }
];
var HrmsModule = /** @class */ (function () {
    function HrmsModule() {
    }
    HrmsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__["UtilityModule"],
            ],
            declarations: [
                _hrms_dashboard_hrms_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["HrmsDashboardComponent"]
            ]
        })
    ], HrmsModule);
    return HrmsModule;
}());



/***/ })

}]);
//# sourceMappingURL=hrms-module-hrms-module.js.map