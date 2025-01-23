(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-hrms-new-admin-hrms-new-module~my-profile-my-profile-module"],{

/***/ "./src/app/admin/admin-hrms-new/my-profile/my-profile.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-profile/my-profile.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-profile-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>HRMS</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">PROFILE</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"sub-header-bg\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <span class=\"user_img\">\r\n          <img src=\"{{imagePath+userData.user_image}}\" alt=\"\"\r\n               *ngIf=\"userData.user_image !== ''\" class=\"profile-image-temp\"/>\r\n              <img src=\"assets/images/user.png\" alt=\"\"\r\n                   *ngIf=\"userData.user_image == ''\" class=\"profile-image-temp\"/>\r\n        </span>\r\n        <span class=\"user_description\">\r\n        <h3>{{userData?.userfullname}}</h3>\r\n        <mat-label>{{userData?.email}}</mat-label><br/>\r\n        <mat-label>{{userDetails?.Designation}}</mat-label>\r\n          </span>\r\n      </div>\r\n      <div class=\"col-md-3 PL-0 text-right\">\r\n        <mat-label><span [innerHTML]=\"userDetails?.Entity\"></span></mat-label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row col-md-12 MT-15\">\r\n    <div class=\"col-md-2 PL-0\">\r\n      <mat-card class=\"personal-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>About Me</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content>\r\n          <ul class=\"MT-10\">\r\n            <li class=\"MB-10\">\r\n              <mat-icon>fiber_manual_record</mat-icon>\r\n              <span [innerHtml]=\"userDetails?.Department | safeHtml\"></span>\r\n            </li>\r\n            <li class=\"MB-10\">\r\n              <mat-icon>fiber_manual_record</mat-icon>\r\n              {{userDetails?.Designation}}\r\n            </li>\r\n            <li class=\"MB-10\">\r\n              <mat-icon>fiber_manual_record</mat-icon>\r\n              {{userDetails?.Mobile_Phone}}\r\n            </li>\r\n            <li class=\"MB-10\">\r\n              <mat-icon>fiber_manual_record</mat-icon>\r\n              {{userDetails?.Location}}\r\n            </li>\r\n            <li class=\"MB-10\">\r\n              <mat-icon>fiber_manual_record</mat-icon>\r\n              (GMT 12:00)\r\n            </li>\r\n          </ul>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div class=\"col-md-7 PL-0\">\r\n      <mat-card class=\"personal-info\">\r\n        <mat-card-header>\r\n          <mat-card-title>Personal Information</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content>\r\n          <div class=\"row MT-10\">\r\n            <div class=\"col-md-6 PLR-0\">\r\n              <mat-label class=\"fw-500\"> Mobile Number</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <mat-label> {{userDetails?.Mobile_Phone}}</mat-label>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 PLR-0\">\r\n              <mat-label class=\"fw-500\"> Other Email</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <mat-label> {{userDetails?.Other_Email}}</mat-label>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 PLR-0\">\r\n              <mat-label class=\"fw-500\">Gender</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <mat-label> {{userDetails?.Gender}}</mat-label>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 PLR-0\">\r\n              <mat-label class=\"fw-500\"> Marital status</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <mat-label> {{userDetails?.Marital_status}}</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6 PLR-0\">\r\n              <mat-label class=\"fw-500\"> Name - Emergency Contact - 1</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <mat-label> {{userDetails?.Name_Emergency_Contact_1}}</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6 PLR-0\">\r\n              <mat-label class=\"fw-500\"> Emergency No. - 1</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <mat-label> {{userDetails?.Emergency_No_1}}</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6 PLR-0\">\r\n              <mat-label class=\"fw-500\"> Name - Emergency Contact - 2</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <mat-label> {{userDetails?.Name_Emergency_Contact_2}}</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6 PLR-0\">\r\n              <mat-label class=\"fw-500\"> Emergency No. - 2</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <mat-label> {{userDetails?.Emergency_No_2}}</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6 PLR-0\">\r\n              <mat-label class=\"fw-500\"> Blood Group</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <mat-label> {{userDetails?.Blood_Group}}</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6 PLR-0\">\r\n              <mat-label class=\"fw-500\"> Notice Period</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <mat-label> {{userDetails?.Notice_Period}}</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6 PLR-0\">\r\n              <mat-label class=\"fw-500\"> Permanent Address</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <mat-label [innerHtml]=\"userDetails?.Permanent_Address | safeHtml\"></mat-label>\r\n            </div>\r\n            <div class=\"col-md-6 PLR-0\">\r\n              <mat-label class=\"fw-500\"> Present Address</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <mat-label>\r\n                <span [innerHtml]=\"userDetails?.Address_Line_1 | safeHtml\"></span>\r\n                <span [innerHtml]=\"userDetails?.Address_Line_2 | safeHtml\"></span>\r\n              </mat-label>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-md-6 PLR-0\">\r\n              <mat-label class=\"fw-500\"> Birth Date</mat-label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <mat-label> {{userData?.user_birthdate | date : 'dd-MM-yyyy'}}</mat-label>\r\n            </div>\r\n\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 PLR-0 hrms_right_blue\">\r\n      <mat-card class=\"reporting_to\">\r\n        <mat-card-header>\r\n          <mat-card-title>Reporting To</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content>\r\n          <div class=\"row MT-10\">\r\n            <div class=\"row col-md-12 PLR-0\">\r\n              <div class=\"col-md-4\">\r\n           <span class=\"user_img\">\r\n          <img src=\"assets/images/user.png\"/>\r\n        </span>\r\n              </div>\r\n\r\n              <div class=\"col-md-8 PL-0\">\r\n              <span class=\"user_description\">\r\n        <h3>{{userDetails?.Reporting_To}}</h3>\r\n          </span></div>\r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card class=\"team_details1 MT-10\">\r\n        <mat-card-header>\r\n          <mat-card-title>Team Details</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content>\r\n          <div class=\"row MT-10\">\r\n            <div class=\"row col-md-12 PLR-0 MB-10\" *ngFor=\"let designation of designationList\">\r\n              <div class=\"col-md-3 PR-0\">\r\n                <span class=\"user_img\">\r\n                   <img src=\"assets/images/user.png\"/>\r\n                  </span>\r\n              </div>\r\n\r\n              <div class=\"col-md-9 PT-10\">\r\n                <span class=\"user_description\">\r\n                  <h5>{{getUserInfo(designation?.id, 'userfullname')}}<span> {{getUserInfo(designation?.id, 'user_bio_id')}} - {{designation?.designation_name}}</span></h5>\r\n                  <p>{{getUserInfo(designation?.id, 'location_id', 'location_name')}}</p>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-profile/my-profile.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-profile/my-profile.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image-temp {\n  width: 49px !important;\n  height: 49px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vYWRtaW4taHJtcy1uZXcvbXktcHJvZmlsZS9DOlxcd2FtcDY0XFx3d3dcXGhrX2Zyb250ZW5kL3Byb2plY3RzXFxhZG1pblxcc3JjXFxhcHBcXGFkbWluXFxhZG1pbi1ocm1zLW5ld1xcbXktcHJvZmlsZVxcbXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluLWhybXMtbmV3L215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWltYWdlLXRlbXB7XHJcbiAgd2lkdGg6IDQ5cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQ5cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-profile/my-profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-profile/my-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-user.service */ "./src/utility/shared-service/shared-user.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(_sharedObjService, _sharedUserService, _router, _commonCrudService) {
        this._sharedObjService = _sharedObjService;
        this._sharedUserService = _sharedUserService;
        this._router = _router;
        this._commonCrudService = _commonCrudService;
        this.image_url = 'assets/images/user.png';
        this.userHierarchy = [];
        this.userHierarchyData = [];
        this.userList = [];
        this.designationList = [];
        this.designationListForDisplay = [];
        this.imagePath = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].IMAGE_PATH;
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        this.userData = this._sharedUserService.getUser();
        this.getUserList();
        if (this.userData && this.userData.id > 0) {
            this.getUserDetail(this.userData.user_bio_id);
            this.getUserHierarchyData();
        }
    };
    /**
     * Get User List
     */
    MyProfileComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.userList = response;
        });
    };
    /**
     * Designation List API.
     */
    MyProfileComponent.prototype.getDesignationList = function () {
        var _this = this;
        this._sharedObjService.getDesignationList(this.getSearchParam()).subscribe(function (response) {
            var itemNew = _this.userHierarchy;
            _this.designationList = response.filter(function (array_el) {
                return itemNew.filter(function (anotherOne_el) {
                    return Number(anotherOne_el) === array_el.id;
                }).length > 0;
            });
        });
    };
    MyProfileComponent.prototype.getSearchParam = function () {
        return {
            'records': 'all',
            'sortBy': 'sort_order',
            'sortOrder': 'asc'
        };
    };
    MyProfileComponent.prototype.getUserDetail = function (userId) {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].ADMIN_USER_PROFILE_INFO, userId).subscribe(function (response) {
            _this.userDetails = response.payload.data;
        });
    };
    /**
     * Get User Hierarchy Data
     */
    MyProfileComponent.prototype.getUserHierarchyData = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].USER_HIERARCHY_SHOW, this.userData.id).subscribe(function (response) {
            if (response.payload.data.parent_user_id) {
                _this.userHierarchy = Object.keys(response.payload.data.parent_user_id);
                _this.getDesignationList();
                _this.userHierarchyData = Object.entries(response.payload.data.parent_user_id);
            }
        });
    };
    /**
     * Get User Info
     * @param designation_id
     */
    MyProfileComponent.prototype.getUserInfo = function (designation_id, returnName, innerName) {
        var returnValue = "";
        var userId = this.userHierarchyData.filter(function (x) { return Number(x[0]) === designation_id; });
        if (userId.length) {
            var userInfo = this.userList.filter(function (item) { return item.id === Number(userId[0][1]); });
            returnValue = (userInfo.length) ? innerName ? userInfo[0][returnName][innerName] : userInfo[0][returnName] : "";
        }
        return returnValue;
    };
    /**
     * On home page route
     */
    MyProfileComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_5__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    MyProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! ./my-profile.component.html */ "./src/app/admin/admin-hrms-new/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.scss */ "./src/app/admin/admin-hrms-new/my-profile/my-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_4__["SharedObjService"], _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["SharedUserService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__["CommonCrudService"]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-profile/my-profile.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-profile/my-profile.module.ts ***!
  \**********************************************************************/
/*! exports provided: MyProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileModule", function() { return MyProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _my_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile.component */ "./src/app/admin/admin-hrms-new/my-profile/my-profile.component.ts");
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
        path: 'my-profile',
        component: _my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    }
];
var MyProfileModule = /** @class */ (function () {
    function MyProfileModule() {
    }
    MyProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"]
            ],
            declarations: [_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"]],
            exports: [_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"]]
        })
    ], MyProfileModule);
    return MyProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~admin-hrms-new-admin-hrms-new-module~my-profile-my-profile-module.js.map