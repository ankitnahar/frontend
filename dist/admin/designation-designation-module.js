(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["designation-designation-module"],{

/***/ "./src/app/admin/administration-module/designation/designation.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/designation.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin (Administration) manager users html view -->\r\n<div class=\"admin-manage-users-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>ADMINISTRATION</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">DESIGNATION</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3> Manage Designation</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"grid-search\">\r\n            <form [formGroup]=\"filterForm\">\r\n              <mat-form-field [floatLabel]=\"'never'\">\r\n                <input matInput placeholder=\"Search Designation\" formControlName=\"designation_name\"\r\n                       (keyup)=\"setAdvanceFilter(filterForm)\">\r\n              </mat-form-field>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"3%\">Sr.No</th>\r\n            <th width=\"47%\"\r\n                (click)=\"getSortData('designation_name', sortBy === 'designation_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Designation Name\r\n              <i *ngIf=\"sortBy === 'designation_name'\" [ngClass]=\"{'material-icons': true, 'icon-up' :  sortOrder === 'asc',\r\n              'icon-down' :  sortOrder === 'desc'}\">\r\n                {{sortBy === 'designation_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <!--<th width=\"20%\"-->\r\n            <!--(click)=\"getSortData('modified_by', sortBy === 'modified_by' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">-->\r\n            <!--Last Modified By-->\r\n            <!--<i *ngIf=\"sortBy === 'modified_by'\" [ngClass]=\"{'material-icons': true, 'icon-up' :  sortOrder === 'asc',-->\r\n            <!--'icon-down' :  sortOrder === 'desc'}\">-->\r\n            <!--{{sortBy === 'modified_by' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}-->\r\n            <!--</i>-->\r\n            <!--&lt;!&ndash;<i class=\"material-icons icon-up\">arrow_upward</i>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<i class=\"material-icons icon-down\" *ngIf=\"false\">arrow_downward</i>&ndash;&gt;-->\r\n            <!--</th>-->\r\n            <!--<th width=\"20%\"-->\r\n            <!--(click)=\"getSortData('modified_on', sortBy === 'modified_on' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">-->\r\n            <!--Last Modified On-->\r\n            <!--<i *ngIf=\"sortBy === 'modified_on'\" [ngClass]=\"{'material-icons': true, 'icon-up' :  sortOrder === 'asc',-->\r\n            <!--'icon-down' :  sortOrder === 'desc'}\">-->\r\n            <!--{{sortBy === 'modified_on' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}-->\r\n            <!--</i>-->\r\n            <!--</th>-->\r\n            <th width=\"25%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody *ngIf=\"designationList.length\">\r\n            <tr *ngFor=\"let designation of designationList; let i = index\">\r\n              <td width=\"3%\" class=\"text-center\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"47%\">{{designation?.designation_name}}</td>\r\n              <!--<td width=\"20%\">{{designation?.modified_by?.modified_by}}</td>-->\r\n              <!--<td width=\"20%\">{{designation?.modified_on | formatDateValue : 'DD-MM-YYYY HH:mm:ss'}}</td>-->\r\n              <td width=\"25%\">\r\n                <mat-icon class=\"light-orange-color\" (click)=\"onEditDesignation(designation)\" matTooltip=\"Edit\"\r\n                          *ngIf=\"tabData['add_edit']\">edit\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table *ngIf=\"designationList.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>  <!-- End Table -->\r\n  <div *ngIf=\"designationList.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/designation/designation.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/designation.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluaXN0cmF0aW9uLW1vZHVsZS9kZXNpZ25hdGlvbi9kZXNpZ25hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/administration-module/designation/designation.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/designation.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DesignationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationComponent", function() { return DesignationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DesignationComponent = /** @class */ (function () {
    function DesignationComponent(_commonCrudService, _sharedObjService, _sharedService, _router, _fb) {
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        this._router = _router;
        this._fb = _fb;
        // Data Variables
        this.designationList = [];
        this.designationListFilter = [];
        this.userListFilter = [];
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilterView = false;
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_9__["ADMINTABACCESS"].ADMIN_DESIGNATION;
    }
    DesignationComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.initializationMethod();
    };
    // Initialization Methods
    DesignationComponent.prototype.initializationMethod = function () {
        // form intialization for filter form
        this.createAdvanceFilterForm();
        this.getDesignationList(1);
        this.getDesignationListFilter();
    };
    // Advance Filter form
    DesignationComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            designation_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    // Designation listing API
    DesignationComponent.prototype.getDesignationList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].DESIGNATION, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (Response) {
            _this.handleDesignationResponse(Response);
        });
    };
    DesignationComponent.prototype.getDesignationListFilter = function () {
        var _this = this;
        this._sharedObjService.getDesignationList({ records: 'all' }).subscribe(function (response) {
            _this.handleDesignationResponseFilter(response);
        });
    };
    // Handle Designation Respone
    DesignationComponent.prototype.handleDesignationResponse = function (response) {
        this.designationList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    DesignationComponent.prototype.handleDesignationResponseFilter = function (response) {
        // assign data to array
        this.designationListFilter = response;
    };
    // Events
    DesignationComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getDesignationList(event.pageIndex + 1);
    };
    // Reset form of advance filter
    DesignationComponent.prototype.resetForm = function () {
        this.filterForm.reset();
        this.getDesignationList(1);
    };
    // Toggle (Hide / Show) form of advance filter
    DesignationComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    DesignationComponent.prototype.onEditDesignation = function (designation) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["GLOBALDATAKEYS"].DESIGNATION, designation);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].EDIT_DESIGNATION]);
    };
    DesignationComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_6__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    // Set Advance Filter
    DesignationComponent.prototype.setAdvanceFilter = function (form, flag) {
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
                else {
                    if (flag) {
                    }
                }
            }
        }
        // For Multiple Entity ID
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'designation_name') {
                        this.likeJSON[key] = form.value[key];
                    }
                }
            }
            this.getDesignationList(1);
        }
    };
    // helper
    // get function for returning pageNumber and page size at time of listing api
    DesignationComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
        var params = {};
        params = {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
        sortKey ? params['sortBy'] = sortKey : '';
        sortOrder ? params['sortOrder'] = sortOrder : '';
        return params;
    };
    // Get Sort Data
    DesignationComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getDesignationList(1, sortKey, sortVal);
    };
    // advance filter search operation
    DesignationComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        // check for the object wheather its empty or not
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
    DesignationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-designation',
            template: __webpack_require__(/*! ./designation.component.html */ "./src/app/admin/administration-module/designation/designation.component.html"),
            styles: [__webpack_require__(/*! ./designation.component.scss */ "./src/app/admin/administration-module/designation/designation.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_4__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_3__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DesignationComponent);
    return DesignationComponent;
}());



/***/ }),

/***/ "./src/app/admin/administration-module/designation/designation.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/designation.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DesignationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationModule", function() { return DesignationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _designation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./designation.component */ "./src/app/admin/administration-module/designation/designation.component.ts");
/* harmony import */ var _edit_designation_edit_designation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-designation/edit-designation.component */ "./src/app/admin/administration-module/designation/edit-designation/edit-designation.component.ts");
/* harmony import */ var _edit_designation_edit_pagerights_designation_edit_pagerights_designation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-designation/edit-pagerights-designation/edit-pagerights-designation.component */ "./src/app/admin/administration-module/designation/edit-designation/edit-pagerights-designation/edit-pagerights-designation.component.ts");
/* harmony import */ var _edit_designation_edit_dynamic_field_group_designation_edit_dynamic_field_group_designation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-designation/edit-dynamic-field-group-designation/edit-dynamic-field-group-designation.component */ "./src/app/admin/administration-module/designation/edit-designation/edit-dynamic-field-group-designation/edit-dynamic-field-group-designation.component.ts");
/* harmony import */ var _edit_designation_edit_other_rights_edit_other_rights_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-designation/edit-other-rights/edit-other-rights.component */ "./src/app/admin/administration-module/designation/edit-designation/edit-other-rights/edit-other-rights.component.ts");
/* harmony import */ var _edit_designation_edit_worksheet_status_rights_edit_worksheet_status_rights_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-designation/edit-worksheet-status-rights/edit-worksheet-status-rights.component */ "./src/app/admin/administration-module/designation/edit-designation/edit-worksheet-status-rights/edit-worksheet-status-rights.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _designation_component__WEBPACK_IMPORTED_MODULE_5__["DesignationComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    },
    {
        path: 'edit-designation',
        component: _edit_designation_edit_designation_component__WEBPACK_IMPORTED_MODULE_6__["EditDesignationComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    }
];
var DesignationModule = /** @class */ (function () {
    function DesignationModule() {
    }
    DesignationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _designation_component__WEBPACK_IMPORTED_MODULE_5__["DesignationComponent"],
                _edit_designation_edit_designation_component__WEBPACK_IMPORTED_MODULE_6__["EditDesignationComponent"],
                _edit_designation_edit_pagerights_designation_edit_pagerights_designation_component__WEBPACK_IMPORTED_MODULE_7__["EditPagerightsDesignationComponent"],
                _edit_designation_edit_dynamic_field_group_designation_edit_dynamic_field_group_designation_component__WEBPACK_IMPORTED_MODULE_8__["EditDynamicFieldGroupDesignationComponent"],
                _edit_designation_edit_other_rights_edit_other_rights_component__WEBPACK_IMPORTED_MODULE_9__["EditOtherRightsComponent"],
                _edit_designation_edit_worksheet_status_rights_edit_worksheet_status_rights_component__WEBPACK_IMPORTED_MODULE_10__["EditWorksheetStatusRightsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ]
        })
    ], DesignationModule);
    return DesignationModule;
}());



/***/ }),

/***/ "./src/app/admin/administration-module/designation/edit-designation/edit-designation.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/edit-designation/edit-designation.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-manage-users-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>ADMINISTRATION</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onDesignation()\">DESIGNATION</a></span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">EDIT DESIGNATION - {{designationName}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- admin (Administration) previleges html view -->\r\n  <div class=\"admin-user-privileges-container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <mat-form-field floatLabel=\"never\">\r\n          <mat-select placeholder=\"Choose an option\" [(ngModel)]=\"selectedPrivilegeType\"\r\n                      (selectionChange)=\"onChangePageRight($event.value)\">\r\n            <mat-option *ngFor=\"let rights of privilegeList\" [value]=\"rights?.key\">\r\n              {{ rights.label }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-7\"></div>\r\n      <div class=\"col-md-3\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Start page rights view -->\r\n    <div *ngIf=\"activeEnumView == enumView.PAGE_RIGHTS_VIEW\">\r\n      <app-edit-pagerights-designation [pageRightsValue]=\"selectedPrivilegeType\"></app-edit-pagerights-designation>\r\n    </div>  <!-- End page rights view -->\r\n\r\n    <!-- Start page rights view -->\r\n    <div *ngIf=\"activeEnumView == enumView.DYNAMIC_FIELD_GROUP_VIEW\">\r\n      <app-edit-dynamic-field-group-designation\r\n        [pageRightsValue]=\"selectedPrivilegeType\"></app-edit-dynamic-field-group-designation>\r\n    </div>  <!-- End page rights view -->\r\n\r\n    <!-- Start page rights view -->\r\n    <div *ngIf=\"activeEnumView == enumView.OTHER_VIEW\">\r\n      <app-edit-other-rights [pageRightsValue]=\"selectedPrivilegeType\"></app-edit-other-rights>\r\n    </div>  <!-- End page rights view -->\r\n\r\n    <!-- Start page rights view -->\r\n    <div *ngIf=\"activeEnumView == enumView.WORKSHEET_STATUS_RIGHTS_VIEW\">\r\n      <app-edit-worksheet-status-rights [pageRightsValue]=\"selectedPrivilegeType\"></app-edit-worksheet-status-rights>\r\n    </div>  <!-- End page rights view -->\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/designation/edit-designation/edit-designation.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/edit-designation/edit-designation.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluaXN0cmF0aW9uLW1vZHVsZS9kZXNpZ25hdGlvbi9lZGl0LWRlc2lnbmF0aW9uL2VkaXQtZGVzaWduYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/administration-module/designation/edit-designation/edit-designation.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/edit-designation/edit-designation.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ViewPrevilege, EditDesignationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPrevilege", function() { return ViewPrevilege; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDesignationComponent", function() { return EditDesignationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ViewPrevilege;
(function (ViewPrevilege) {
    ViewPrevilege[ViewPrevilege["PAGE_RIGHTS_VIEW"] = 0] = "PAGE_RIGHTS_VIEW";
    ViewPrevilege[ViewPrevilege["DYNAMIC_FIELD_GROUP_VIEW"] = 1] = "DYNAMIC_FIELD_GROUP_VIEW";
    ViewPrevilege[ViewPrevilege["WORKSHEET_STATUS_RIGHTS_VIEW"] = 2] = "WORKSHEET_STATUS_RIGHTS_VIEW";
    ViewPrevilege[ViewPrevilege["OTHER_VIEW"] = 3] = "OTHER_VIEW";
})(ViewPrevilege || (ViewPrevilege = {}));
var EditDesignationComponent = /** @class */ (function () {
    function EditDesignationComponent(_router, _fb, dialog, _commonCrudService, _sharedService) {
        this._router = _router;
        this._fb = _fb;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this.enumView = ViewPrevilege;
        this.activeEnumView = this.enumView.PAGE_RIGHTS_VIEW;
        this.privilegeList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["DesignationPrivilegeType"];
        this.designationData = null;
        this.designationName = '';
    }
    EditDesignationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedPrivilegeType = 'tab';
        this.designationData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["GLOBALDATAKEYS"].DESIGNATION);
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].DESIGNATION, this.designationData.id).subscribe(function (response) {
            _this.designationName = response.payload.data.designation_name;
        });
    };
    EditDesignationComponent.prototype.onChangePageRight = function (viewValue) {
        this.selectedPrivilegeType = viewValue;
        switch (viewValue) {
            case 'tab':
                this.activeEnumView = this.enumView.PAGE_RIGHTS_VIEW;
                break;
            case 'field':
                this.activeEnumView = this.enumView.DYNAMIC_FIELD_GROUP_VIEW;
                break;
            case 'button':
                this.activeEnumView = this.enumView.OTHER_VIEW;
                break;
            case 'worksheet':
                this.activeEnumView = this.enumView.WORKSHEET_STATUS_RIGHTS_VIEW;
                break;
        }
    };
    EditDesignationComponent.prototype.onDesignation = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].DESIGNATION_LIST]);
    };
    EditDesignationComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    EditDesignationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-designation',
            template: __webpack_require__(/*! ./edit-designation.component.html */ "./src/app/admin/administration-module/designation/edit-designation/edit-designation.component.html"),
            styles: [__webpack_require__(/*! ./edit-designation.component.scss */ "./src/app/admin/administration-module/designation/edit-designation/edit-designation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], EditDesignationComponent);
    return EditDesignationComponent;
}());



/***/ }),

/***/ "./src/app/admin/administration-module/designation/edit-designation/edit-dynamic-field-group-designation/edit-dynamic-field-group-designation.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/edit-designation/edit-dynamic-field-group-designation/edit-dynamic-field-group-designation.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"changePageRights()\">\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"5%\">Sr. No.</th>\r\n          <th width=\"25%\" (click)=\"getSortPrivilegelistData('group_name',\r\n             (privilegelistSortBy === 'group_name') ? (privilegelistSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Field Group\r\n            <i [ngClass]=\"{'material-icons': true,\r\n            'active' : (privilegelistSortBy === 'group_name'),\r\n            'icon-up' : ((privilegelistSortBy === 'group_name') && (privilegelistSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n              {{(privilegelistSortBy === 'group_name') ? ((privilegelistSortOrder === 'asc') ?\r\n              'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n          <th width=\"35%\" (click)=\"getSortPrivilegelistData('field_title',\r\n             (privilegelistSortBy === 'field_title') ? (privilegelistSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Field\r\n            <i [ngClass]=\"{'material-icons': true,\r\n            'active' : (privilegelistSortBy === 'field_title'),\r\n            'icon-up' : ((privilegelistSortBy === 'field_title') && (privilegelistSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n              {{(privilegelistSortBy === 'field_title') ? ((privilegelistSortOrder === 'asc') ?\r\n              'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n            </i>\r\n          </th>\r\n          <th width=\"15%\">\r\n            <mat-checkbox [checked]=\"is_viewAll\"\r\n                          (change)=\"assignPrivilegeToAll($event.checked,'view')\"></mat-checkbox>\r\n            View\r\n          </th>\r\n          <th width=\"20%\">\r\n            <mat-checkbox [checked]=\"is_add_editAll\"\r\n                          (change)=\"assignPrivilegeToAll($event.checked,'add_edit')\"></mat-checkbox>\r\n            Add / Edit\r\n          </th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody>\r\n          <tr *ngFor=\"let privilege of privileges | filter:{field_title: filterText} ; let i = index\">\r\n            <td width=\"5%\">{{i+1}}</td>\r\n            <td width=\"25%\">{{privilege?.group_name}}</td>\r\n            <td width=\"35%\">{{privilege?.field_title}}</td>\r\n            <td width=\"15%\">\r\n              <mat-checkbox (change)=\"changeIsViewPrivilege($event.checked, privilege)\"\r\n                            [checked]=\"(privilege?.view) ? true : false\"></mat-checkbox>\r\n            </td>\r\n            <td width=\"20%\">\r\n              <mat-checkbox (change)=\"changeIsAddPrivilege($event.checked, privilege)\"\r\n                            [checked]=\"(privilege?.add_edit) ? true : false\"></mat-checkbox>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"col-md-12 save-history-btns text-right MTB-10\">\r\n        <button type=\"button\" (click)=\"ngOnInit()\" class=\"btn-default MR-10\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn-primary\">Update</button>\r\n      </div>\r\n    </div>\r\n  </div><!-- End Table -->\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/designation/edit-designation/edit-dynamic-field-group-designation/edit-dynamic-field-group-designation.component.ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/edit-designation/edit-dynamic-field-group-designation/edit-dynamic-field-group-designation.component.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: EditDynamicFieldGroupDesignationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDynamicFieldGroupDesignationComponent", function() { return EditDynamicFieldGroupDesignationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditDynamicFieldGroupDesignationComponent = /** @class */ (function () {
    // Other Variables
    function EditDynamicFieldGroupDesignationComponent(_commonCrudService, _sharedService) {
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this.filterInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        // Data Variables
        this.designationData = null;
        this.privileges = [];
        this.is_viewAll = false;
        this.is_add_editAll = false;
    }
    /**
     * intialize methods.
     */
    EditDynamicFieldGroupDesignationComponent.prototype.ngOnInit = function () {
        this.designationData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["GLOBALDATAKEYS"].DESIGNATION);
        this.getPageRightsList();
        this.searchFilter();
        this.filterText = '';
    };
    /**
     * search function for local searching.
     */
    EditDynamicFieldGroupDesignationComponent.prototype.searchFilter = function () {
        var _this = this;
        this.filterInput.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200))
            .subscribe(function (term) {
            _this.filterText = term;
        });
    };
    /**
     * list api for the paginations rights.
     */
    EditDynamicFieldGroupDesignationComponent.prototype.getPageRightsList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DESIGNATION_PRIVILEGE + '/' + this.designationData.id, { 'type': this.pageRightsValue }, {}).subscribe(function (Response) {
            _this.privileges = Response.payload.data;
            var viewAll = 0;
            var addEditAll = 0;
            _this.privileges.map(function (item) {
                item['view'] ? viewAll++ : '';
                item['add_edit'] ? addEditAll++ : '';
            });
            if (viewAll === _this.privileges.length) {
                _this.is_viewAll = true;
            }
            if (addEditAll === _this.privileges.length) {
                _this.is_add_editAll = true;
            }
        });
    };
    /**
     * function for checkbox all event . when checked all pages events changed base on rights.
     * @param event
     * @param fieldType
     */
    EditDynamicFieldGroupDesignationComponent.prototype.assignPrivilegeToAll = function (event, fieldType) {
        if (fieldType === 'view') {
            this.is_viewAll = event;
        }
        else if (fieldType === 'add_edit') {
            this.is_add_editAll = event;
        }
        this.privileges.map(function (item) {
            item[fieldType] = event ? 1 : 0;
        });
    };
    EditDynamicFieldGroupDesignationComponent.prototype.changeIsViewPrivilege = function (event, privilege) {
        privilege['view'] = event ? 1 : 0;
        if (event) {
            var i_1 = 0;
            this.privileges.map(function (item) {
                item['view'] ? i_1++ : '';
            });
            if (i_1 === this.privileges.length) {
                this.is_viewAll = true;
            }
        }
        else {
            this.is_viewAll = this.is_viewAll ? false : this.is_viewAll;
        }
    };
    EditDynamicFieldGroupDesignationComponent.prototype.changeIsAddPrivilege = function (event, privilege) {
        privilege['add_edit'] = event ? 1 : 0;
        if (event) {
            var i_2 = 0;
            this.privileges.map(function (item) {
                item['add_edit'] ? i_2++ : '';
            });
            if (i_2 === this.privileges.length) {
                this.is_add_editAll = true;
            }
        }
        else {
            this.is_add_editAll = this.is_add_editAll ? false : this.is_add_editAll;
        }
    };
    EditDynamicFieldGroupDesignationComponent.prototype.changePageRights = function () {
        var _this = this;
        var formParam = {};
        formParam['type'] = this.pageRightsValue;
        var formJson = [];
        this.privileges.map(function (item) {
            formJson.push({
                'id': item.id,
                'group_name': item.group_name,
                'field_title': item.field_title,
                'view': item.view,
                'add_edit': item.add_edit,
            });
        });
        formParam['data'] = JSON.stringify(formJson);
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DESIGNATION_PRIVILEGE, this.designationData.id, formParam).subscribe(function (Response) {
            _this.getPageRightsList();
        });
    };
    /**
     * Getting sorted privilegeList based on sortKey and sortOrder.
     * @param {string} sortKey
     * @param {string} sortVal
     */
    EditDynamicFieldGroupDesignationComponent.prototype.getSortPrivilegelistData = function (sortKey, sortVal) {
        this.privilegelistSortBy = sortKey;
        this.privilegelistSortOrder = sortVal;
        var sortedArray = this.privileges.sort(function (objOne, objTwo) {
            if (objOne[sortKey] > objTwo[sortKey]) {
                return 1;
            }
            if (objOne[sortKey] < objTwo[sortKey]) {
                return -1;
            }
            return 0;
        });
        if (sortVal === 'asc') {
            this.privileges = sortedArray;
        }
        else {
            this.privileges = sortedArray.reverse();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditDynamicFieldGroupDesignationComponent.prototype, "pageRightsValue", void 0);
    EditDynamicFieldGroupDesignationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-dynamic-field-group-designation',
            template: __webpack_require__(/*! ./edit-dynamic-field-group-designation.component.html */ "./src/app/admin/administration-module/designation/edit-designation/edit-dynamic-field-group-designation/edit-dynamic-field-group-designation.component.html")
        }),
        __metadata("design:paramtypes", [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], EditDynamicFieldGroupDesignationComponent);
    return EditDynamicFieldGroupDesignationComponent;
}());



/***/ }),

/***/ "./src/app/admin/administration-module/designation/edit-designation/edit-other-rights/edit-other-rights.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/edit-designation/edit-other-rights/edit-other-rights.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Table -->\r\n<form (submit)=\"changePageRights()\">\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"5%\">Sr. No.</th>\r\n          <th width=\"15%\">\r\n            Page\r\n          </th>\r\n          <th width=\"25%\">Other\r\n          </th>\r\n          <th width=\"15%\">\r\n            <mat-checkbox [checked]=\"is_viewAll\"\r\n                          (change)=\"assignPrivilegeToAll($event.checked,'view')\"></mat-checkbox>\r\n            View\r\n          </th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody>\r\n          <tr *ngFor=\"let privilege of privileges; let i = index\">\r\n            <td width=\"5%\">{{i + 1}}</td>\r\n            <td width=\"15%\">{{privilege?.tab_name}}</td>\r\n            <td width=\"25%\">{{privilege?.button_label}}</td>\r\n            <td width=\"15%\">\r\n              <mat-checkbox (change)=\"changeIsViewPrivilege($event.checked, privilege)\"\r\n                            [checked]=\"(privilege?.view) ? true : false\"></mat-checkbox>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"col-md-12 save-history-btns text-right MTB-10\">\r\n        <button type=\"button\" (click)=\"ngOnInit()\"  class=\"btn-default MR-10\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn-primary\">Update</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<!-- End Table -->\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/designation/edit-designation/edit-other-rights/edit-other-rights.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/edit-designation/edit-other-rights/edit-other-rights.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: EditOtherRightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOtherRightsComponent", function() { return EditOtherRightsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditOtherRightsComponent = /** @class */ (function () {
    function EditOtherRightsComponent(_sharedService, _commonCrudService) {
        this._sharedService = _sharedService;
        this._commonCrudService = _commonCrudService;
        this.filterInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        // Data Variables
        this.designationData = null;
        this.privileges = [];
        // state variable
        this.is_viewAll = false;
    }
    EditOtherRightsComponent.prototype.ngOnInit = function () {
        this.designationData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["GLOBALDATAKEYS"].DESIGNATION);
        this.getPageRightsList();
        this.searchFilter();
        this.filterText = '';
    };
    EditOtherRightsComponent.prototype.searchFilter = function () {
        var _this = this;
        this.filterInput.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200))
            .subscribe(function (term) {
            _this.filterText = term;
        });
    };
    EditOtherRightsComponent.prototype.getPageRightsList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DESIGNATION_PRIVILEGE + '/' + this.designationData.id, { 'type': this.pageRightsValue }, {}).subscribe(function (Response) {
            _this.privileges = Response.payload.data;
        });
    };
    EditOtherRightsComponent.prototype.assignPrivilegeToAll = function (event, fieldType) {
        this.is_viewAll = event;
        this.privileges.map(function (item) {
            item[fieldType] = event ? 1 : 0;
        });
    };
    EditOtherRightsComponent.prototype.changeIsViewPrivilege = function (event, privilege) {
        privilege['view'] = event ? 1 : 0;
        if (event) {
            var i_1 = 0;
            this.privileges.map(function (item) {
                item['view'] ? i_1++ : '';
            });
            if (i_1 === this.privileges.length) {
                this.is_viewAll = true;
            }
        }
        else {
            this.is_viewAll = this.is_viewAll ? false : this.is_viewAll;
        }
    };
    EditOtherRightsComponent.prototype.changePageRights = function () {
        var _this = this;
        var formParam = {};
        formParam['type'] = this.pageRightsValue;
        var formJson = [];
        this.privileges.map(function (item) {
            formJson.push({
                'id': item.id,
                'tab_name': item.tab_name,
                'tab_id': item.tab_id,
                'button_label': item.button_label,
                'view': item.view,
            });
        });
        formParam['data'] = JSON.stringify(formJson);
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DESIGNATION_PRIVILEGE, this.designationData.id, formParam).subscribe(function (Response) {
            _this.getPageRightsList();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditOtherRightsComponent.prototype, "pageRightsValue", void 0);
    EditOtherRightsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-other-rights',
            template: __webpack_require__(/*! ./edit-other-rights.component.html */ "./src/app/admin/administration-module/designation/edit-designation/edit-other-rights/edit-other-rights.component.html")
        }),
        __metadata("design:paramtypes", [_utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__["CommonCrudService"]])
    ], EditOtherRightsComponent);
    return EditOtherRightsComponent;
}());



/***/ }),

/***/ "./src/app/admin/administration-module/designation/edit-designation/edit-pagerights-designation/edit-pagerights-designation.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/edit-designation/edit-pagerights-designation/edit-pagerights-designation.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Table -->\r\n<form (submit)=\"changePageRights()\">\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"5%\">Sr. No.</th>\r\n          <th width=\"25%\">\r\n            Page\r\n          </th>\r\n          <th width=\"10%\">\r\n            <mat-checkbox [checked]=\"is_viewAll\"\r\n                          (change)=\"assignPrivilegeToAll($event.checked,'view' , 'is_view')\"></mat-checkbox>\r\n            View\r\n          </th>\r\n          <th width=\"10%\">\r\n            <mat-checkbox [checked]=\"is_add_editAll\"\r\n                          (change)=\"assignPrivilegeToAll($event.checked,'add_edit', 'is_add_edit')\"></mat-checkbox>\r\n            Add / Edit\r\n          </th>\r\n          <th width=\"10%\">\r\n            <mat-checkbox [checked]=\"is_deleteAll\"\r\n                          (change)=\"assignPrivilegeToAll($event.checked, 'delete', 'is_delete')\"></mat-checkbox>\r\n            Delete\r\n          </th>\r\n          <th width=\"10%\">\r\n            <mat-checkbox [checked]=\"is_exportAll\"\r\n                          (change)=\"assignPrivilegeToAll($event.checked,'export', 'is_export')\"></mat-checkbox>\r\n            Export\r\n          </th>\r\n          <th width=\"10%\">\r\n            <mat-checkbox [checked]=\"is_downloadAll\"\r\n                          (change)=\"assignPrivilegeToAll($event.checked, 'download', 'is_download')\"></mat-checkbox>\r\n            Download\r\n          </th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody>\r\n          <tr *ngFor=\"let privilege of privileges | filter:{tab_name: filterText} ; let i = index\">\r\n            <td width=\"5%\">{{i+ 1}}</td>\r\n            <td width=\"25%\">{{privilege?.tab_name}}</td>\r\n            <td width=\"10%\">\r\n              <mat-checkbox *ngIf=\"privilege?.is_view\" (change)=\"changeIsViewPrivilege($event.checked, privilege)\"\r\n                            [checked]=\"(privilege?.view) ? true : false\"></mat-checkbox>\r\n            </td>\r\n            <td width=\"10%\">\r\n              <mat-checkbox *ngIf=\"privilege?.is_add_edit\"\r\n                            (change)=\"changeIsAddEditPrivilege($event.checked, privilege)\"\r\n                            [checked]=\"(privilege?.add_edit) ? true : false\"></mat-checkbox>\r\n            </td>\r\n            <td width=\"10%\">\r\n              <mat-checkbox *ngIf=\"privilege?.is_delete\" (change)=\"changeIsDeletePrivilege($event.checked, privilege)\"\r\n                            [checked]=\"(privilege?.delete) ? true : false\"></mat-checkbox>\r\n            </td>\r\n            <td width=\"10%\">\r\n              <mat-checkbox *ngIf=\"privilege?.is_export\" (change)=\"changeIsExportPrivilege($event.checked, privilege)\"\r\n                            [checked]=\"(privilege?.export) ? true : false\"></mat-checkbox>\r\n            </td>\r\n            <td width=\"10%\">\r\n              <mat-checkbox *ngIf=\"privilege?.is_download\"\r\n                            (change)=\"changeIsDownloadPrivilege($event.checked, privilege)\"\r\n                            [checked]=\"(privilege?.download) ? true : false\"></mat-checkbox>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"col-md-12 save-history-btns text-right MTB-10\">\r\n        <button type=\"button\" (click)=\"ngOnInit()\"  class=\"btn-default MR-10\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn-primary\">Update</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<!-- End Table -->\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/designation/edit-designation/edit-pagerights-designation/edit-pagerights-designation.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/edit-designation/edit-pagerights-designation/edit-pagerights-designation.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: EditPagerightsDesignationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPagerightsDesignationComponent", function() { return EditPagerightsDesignationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditPagerightsDesignationComponent = /** @class */ (function () {
    function EditPagerightsDesignationComponent(_commonCrudService, _sharedService) {
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this.filterInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        // Data Variables
        this.designationData = null;
        this.privileges = [];
        // state variable
        this.is_viewAll = false;
        this.is_add_editAll = false;
        this.is_deleteAll = false;
        this.is_exportAll = false;
        this.is_downloadAll = false;
    }
    EditPagerightsDesignationComponent.prototype.ngOnInit = function () {
        this.designationData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["GLOBALDATAKEYS"].DESIGNATION);
        this.getPageRightsList();
        this.searchFilter();
        this.filterText = '';
    };
    EditPagerightsDesignationComponent.prototype.searchFilter = function () {
        var _this = this;
        this.filterInput.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200))
            .subscribe(function (term) {
            _this.filterText = term;
        });
    };
    EditPagerightsDesignationComponent.prototype.getPageRightsList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DESIGNATION_PRIVILEGE + '/' + this.designationData.id, { 'type': this.pageRightsValue }, {}).subscribe(function (Response) {
            _this.privileges = Response.payload.data;
            var viewCount = 0;
            var viewAll = 0;
            var addEditCount = 0;
            var addEditAll = 0;
            var deleteCount = 0;
            var deleteAll = 0;
            var exportCount = 0;
            var exportAll = 0;
            var downloadCount = 0;
            var downloadAll = 0;
            _this.privileges.map(function (item) {
                item.is_view ? viewCount++ : '';
                item.view ? viewAll++ : '';
                item.is_add_edit ? addEditCount++ : '';
                item.add_edit ? addEditAll++ : '';
                item.is_delete ? deleteCount++ : '';
                item.delete ? deleteAll++ : '';
                item.is_export ? exportCount++ : '';
                item.export ? exportAll++ : '';
                item.is_download ? downloadCount++ : '';
                item.download ? downloadAll++ : '';
            });
            if (viewCount && viewCount === viewAll) {
                _this.is_viewAll = true;
            }
            if (addEditCount && addEditCount === addEditAll) {
                _this.is_add_editAll = true;
            }
            if (deleteCount && deleteCount === deleteAll) {
                _this.is_deleteAll = true;
            }
            if (exportCount && exportCount === exportAll) {
                _this.is_exportAll = true;
            }
            if (downloadCount && downloadCount === downloadAll) {
                _this.is_downloadAll = true;
            }
        });
    };
    EditPagerightsDesignationComponent.prototype.assignPrivilegeToAll = function (event, fieldType, rightsType) {
        if (fieldType === 'view') {
            this.is_viewAll = event;
        }
        else if (fieldType === 'add_edit') {
            this.is_add_editAll = event;
        }
        else if (fieldType === 'delete') {
            this.is_deleteAll = event;
        }
        else if (fieldType === 'export') {
            this.is_exportAll = event;
        }
        else if (fieldType === 'download') {
            this.is_downloadAll = event;
        }
        this.privileges.map(function (item) {
            if (item[rightsType]) {
                item[fieldType] = event ? 1 : 0;
            }
        });
    };
    EditPagerightsDesignationComponent.prototype.changeIsViewPrivilege = function (event, privilege) {
        privilege['view'] = event ? 1 : 0;
        if (event) {
            var i_1 = 0;
            var count_1 = 0;
            this.privileges.map(function (item) {
                item.is_view ? count_1++ : '';
                item.is_view ? (item.view ? i_1++ : '') : '';
            });
            if (i_1 === count_1) {
                this.is_viewAll = true;
            }
        }
        else {
            this.is_viewAll = this.is_viewAll ? false : this.is_viewAll;
        }
    };
    EditPagerightsDesignationComponent.prototype.changeIsAddEditPrivilege = function (event, privilege) {
        privilege['add_edit'] = event ? 1 : 0;
        if (event) {
            var i_2 = 0;
            var count_2 = 0;
            this.privileges.map(function (item) {
                item.is_add_edit ? count_2++ : '';
                item.is_add_edit ? (item.add_edit ? i_2++ : '') : '';
            });
            if (i_2 === count_2) {
                this.is_add_editAll = true;
            }
        }
        else {
            this.is_add_editAll = this.is_add_editAll ? false : this.is_add_editAll;
        }
    };
    EditPagerightsDesignationComponent.prototype.changeIsDeletePrivilege = function (event, privilege) {
        privilege['delete'] = event ? 1 : 0;
        if (event) {
            var i_3 = 0;
            var count_3 = 0;
            this.privileges.map(function (item) {
                item.is_delete ? count_3++ : '';
                item.is_delete ? (item.delete ? i_3++ : '') : '';
            });
            if (i_3 === count_3) {
                this.is_deleteAll = true;
            }
        }
        else {
            this.is_deleteAll = this.is_deleteAll ? false : this.is_deleteAll;
        }
    };
    EditPagerightsDesignationComponent.prototype.changeIsExportPrivilege = function (event, privilege) {
        privilege['export'] = event ? 1 : 0;
        if (event) {
            var i_4 = 0;
            var count_4 = 0;
            this.privileges.map(function (item) {
                item.is_export ? count_4++ : '';
                item.is_export ? (item.export ? i_4++ : '') : '';
            });
            if (i_4 === count_4) {
                this.is_exportAll = true;
            }
        }
        else {
            this.is_exportAll = this.is_exportAll ? false : this.is_exportAll;
        }
    };
    EditPagerightsDesignationComponent.prototype.changeIsDownloadPrivilege = function (event, privilege) {
        privilege['download'] = event ? 1 : 0;
        if (event) {
            var i_5 = 0;
            var count_5 = 0;
            this.privileges.map(function (item) {
                item.is_download ? count_5++ : '';
                item.is_download ? (item.download ? i_5++ : '') : '';
            });
            if (i_5 === count_5) {
                this.is_downloadAll = true;
            }
        }
        else {
            this.is_downloadAll = this.is_downloadAll ? false : this.is_downloadAll;
        }
    };
    EditPagerightsDesignationComponent.prototype.changePageRights = function () {
        var _this = this;
        var formParam = {};
        formParam['type'] = this.pageRightsValue;
        var formJson = [];
        this.privileges.map(function (item) {
            formJson.push({
                'id': item.id,
                'tab_name': item.tab_name,
                'is_view': item.is_view,
                'is_add_edit': item.is_add_edit,
                'is_delete': item.is_delete,
                'is_export': item.is_export,
                'is_download': item.is_download,
                'view': item.view,
                'delete': item.delete,
                'add_edit': item.add_edit,
                'export': item.export,
                'download': item.download
            });
        });
        formParam['data'] = JSON.stringify(formJson);
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DESIGNATION_PRIVILEGE, this.designationData.id, formParam).subscribe(function (Response) {
            _this.getPageRightsList();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditPagerightsDesignationComponent.prototype, "pageRightsValue", void 0);
    EditPagerightsDesignationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-pagerights-designation',
            template: __webpack_require__(/*! ./edit-pagerights-designation.component.html */ "./src/app/admin/administration-module/designation/edit-designation/edit-pagerights-designation/edit-pagerights-designation.component.html")
        }),
        __metadata("design:paramtypes", [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], EditPagerightsDesignationComponent);
    return EditPagerightsDesignationComponent;
}());



/***/ }),

/***/ "./src/app/admin/administration-module/designation/edit-designation/edit-worksheet-status-rights/edit-worksheet-status-rights.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/edit-designation/edit-worksheet-status-rights/edit-worksheet-status-rights.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row grid-search\">\r\n  <div class=\"add-one\">\r\n    <input placeholder=\"Search\" type=\"text\" [value]=\"filterText\"\r\n           [formControl]=\"filterInput\">\r\n    <span class=\"prefix\">\r\n                <i class=\"material-icons\">search</i>\r\n              </span>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n</div>\r\n<div>\r\n  <form (submit)=\"changePageRights()\">\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No.</th>\r\n            <th width=\"55%\">\r\n              Status\r\n            </th>\r\n            <th width=\"40%\">\r\n              <mat-checkbox [checked]=\"is_rightAll\"\r\n                            (change)=\"assignPrivilegeToAll($event.checked,'right')\"></mat-checkbox>\r\n              Rights\r\n            </th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let privilege of privileges | filter:{status_name: filterText} ; let i = index\">\r\n              <td width=\"5%\">{{i+1}}</td>\r\n              <td width=\"55%\">{{privilege?.status_name}}</td>\r\n              <td width=\"40%\">\r\n                <mat-checkbox (change)=\"changeRightPrivilege($event.checked, privilege)\"\r\n                              [checked]=\"(privilege?.right) ? true : false\"></mat-checkbox>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n          <div class=\"col-md-12 save-history-btns\">\r\n            <button type=\"button\" (click)=\"ngOnInit()\"  class=\"btn-default MR-10\">Cancel</button>\r\n            <button type=\"submit\" class=\"btn-primary\">Update</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!-- End Table -->\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/administration-module/designation/edit-designation/edit-worksheet-status-rights/edit-worksheet-status-rights.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/admin/administration-module/designation/edit-designation/edit-worksheet-status-rights/edit-worksheet-status-rights.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: EditWorksheetStatusRightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWorksheetStatusRightsComponent", function() { return EditWorksheetStatusRightsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditWorksheetStatusRightsComponent = /** @class */ (function () {
    function EditWorksheetStatusRightsComponent(_commonCrudService, _sharedService) {
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this.filterInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        // Data Variables
        this.designationData = null;
        this.privileges = [];
        // state variable
        this.is_rightAll = false;
    }
    EditWorksheetStatusRightsComponent.prototype.ngOnInit = function () {
        this.designationData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["GLOBALDATAKEYS"].DESIGNATION);
        this.getPageRightsList();
        this.searchFilter();
        this.filterText = '';
    };
    EditWorksheetStatusRightsComponent.prototype.searchFilter = function () {
        var _this = this;
        this.filterInput.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200))
            .subscribe(function (term) {
            _this.filterText = term;
        });
    };
    EditWorksheetStatusRightsComponent.prototype.getPageRightsList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DESIGNATION_PRIVILEGE + '/' + this.designationData.id, { 'type': this.pageRightsValue }, {}).subscribe(function (Response) {
            _this.privileges = Response.payload.data;
            var i = 0;
            _this.privileges.map(function (item) {
                item['right'] ? i++ : '';
            });
            if (i === _this.privileges.length) {
                _this.is_rightAll = true;
            }
        });
    };
    EditWorksheetStatusRightsComponent.prototype.assignPrivilegeToAll = function (event, fieldType) {
        this.is_rightAll = event;
        this.privileges.map(function (item) {
            item[fieldType] = event ? 1 : 0;
        });
    };
    EditWorksheetStatusRightsComponent.prototype.changeRightPrivilege = function (event, privilege) {
        privilege['right'] = event ? 1 : 0;
        if (event) {
            var i_1 = 0;
            this.privileges.map(function (item) {
                item['right'] ? i_1++ : '';
            });
            if (i_1 === this.privileges.length) {
                this.is_rightAll = true;
            }
        }
        else {
            this.is_rightAll = this.is_rightAll ? false : this.is_rightAll;
        }
    };
    EditWorksheetStatusRightsComponent.prototype.changePageRights = function () {
        var _this = this;
        var formParam = {};
        formParam['type'] = this.pageRightsValue;
        var formJson = [];
        this.privileges.map(function (item) {
            formJson.push({
                'id': item.id,
                'status_name': item.status_name,
                'view': item.right,
            });
        });
        formParam['data'] = JSON.stringify(formJson);
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].DESIGNATION_PRIVILEGE, this.designationData.id, formParam).subscribe(function (Response) {
            _this.getPageRightsList();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditWorksheetStatusRightsComponent.prototype, "pageRightsValue", void 0);
    EditWorksheetStatusRightsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-worksheet-status-rights',
            template: __webpack_require__(/*! ./edit-worksheet-status-rights.component.html */ "./src/app/admin/administration-module/designation/edit-designation/edit-worksheet-status-rights/edit-worksheet-status-rights.component.html")
        }),
        __metadata("design:paramtypes", [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], EditWorksheetStatusRightsComponent);
    return EditWorksheetStatusRightsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=designation-designation-module.js.map