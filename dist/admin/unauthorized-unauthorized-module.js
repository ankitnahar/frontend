(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unauthorized-unauthorized-module"],{

/***/ "./src/app/admin-user-auth/unauthorized/unauthorized.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin-user-auth/unauthorized/unauthorized.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin login html view -->\r\n<div class=\"admin-login-container\">\r\n  <div class=\"panel-block\">\r\n    <div class=\"panel-block__container\">\r\n      <div class=\"panel-logo\">\r\n        <img src=\"assets/images/logo.png\"/>\r\n      </div>\r\n\r\n      <div class=\"panel-body-container\">\r\n        <div class=\"panel-header\">\r\n          <h3 class=\"red-color\">UNAUTHORIZED</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <!-- Start login form view -->\r\n          <div class=\"login-screen text-center\">\r\n            <h4>You are not authorized to log into the system.</h4>\r\n            <h4>\r\n              Please contact administrator.</h4>\r\n\r\n            <h4>\r\n              Your IP address is {{IpAddress}}</h4>\r\n          </div>\r\n          <!-- End login form view -->\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Start Copy right section -->\r\n    <div class=\"panel-block__copyright\">\r\n      <p>Copyright@ {{currentDate | date:'yyyy'}}. All Rights reserved to befree</p>\r\n    </div>\r\n    <!-- End Copy right section -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-user-auth/unauthorized/unauthorized.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin-user-auth/unauthorized/unauthorized.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-screen h4 {\n  font-weight: 500;\n  margin-bottom: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4tdXNlci1hdXRoL3VuYXV0aG9yaXplZC9DOlxcd2FtcDY0XFx3d3dcXGhrX2Zyb250ZW5kL3Byb2plY3RzXFxhZG1pblxcc3JjXFxhcHBcXGFkbWluLXVzZXItYXV0aFxcdW5hdXRob3JpemVkXFx1bmF1dGhvcml6ZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvYWRtaW4vc3JjL2FwcC9hZG1pbi11c2VyLWF1dGgvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1zY3JlZW4ge1xyXG4gIGg0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin-user-auth/unauthorized/unauthorized.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin-user-auth/unauthorized/unauthorized.component.ts ***!
  \************************************************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return UnauthorizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnauthorizedComponent = /** @class */ (function () {
    function UnauthorizedComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.currentDate = new Date();
        this.IpAddress = 0;
    }
    UnauthorizedComponent.prototype.ngOnInit = function () {
        this.IpAddress = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].LOGGEDIN_IP);
    };
    UnauthorizedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unauthorized',
            template: __webpack_require__(/*! ./unauthorized.component.html */ "./src/app/admin-user-auth/unauthorized/unauthorized.component.html"),
            styles: [__webpack_require__(/*! ./unauthorized.component.scss */ "./src/app/admin-user-auth/unauthorized/unauthorized.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], UnauthorizedComponent);
    return UnauthorizedComponent;
}());



/***/ }),

/***/ "./src/app/admin-user-auth/unauthorized/unauthorized.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin-user-auth/unauthorized/unauthorized.module.ts ***!
  \*********************************************************************/
/*! exports provided: UnauthorizedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedModule", function() { return UnauthorizedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _unauthorized_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unauthorized.component */ "./src/app/admin-user-auth/unauthorized/unauthorized.component.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _unauthorized_component__WEBPACK_IMPORTED_MODULE_2__["UnauthorizedComponent"]
    }
];
var UnauthorizedModule = /** @class */ (function () {
    function UnauthorizedModule() {
    }
    UnauthorizedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"],
            ],
            declarations: [_unauthorized_component__WEBPACK_IMPORTED_MODULE_2__["UnauthorizedComponent"]]
        })
    ], UnauthorizedModule);
    return UnauthorizedModule;
}());



/***/ })

}]);
//# sourceMappingURL=unauthorized-unauthorized-module.js.map