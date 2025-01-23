(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-information-contact-information-module"],{

/***/ "./src/app/admin/client-module/contact-information/address/address.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/address/address.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"with-filter-grid-container\">\r\n  <!-- Start Grid Inner Header -->\r\n  <div class=\"grid-inner-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 inner-header-title\">\r\n        <button class=\"open-dialog-btn\" *ngIf=\"tabData['add_edit']\" (click)=\"onAddAddress()\">\r\n          <mat-icon class=\"material-icons\">add</mat-icon>\r\n          Add Address\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"download-icon\">\r\n          <li>\r\n            <a (click)=\"onToggleFilter()\">\r\n              <span>Filter</span> <i class=\"material-icons\">filter_list</i>\r\n            </a>\r\n          </li>\r\n\r\n          <li *ngIf=\"tabData['export']\">\r\n            <a (click)=\"downloadExcel()\">\r\n              <span>Excel</span> <i class=\"material-icons\">file_download</i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n\r\n  <!-- Start Grid Filter -->\r\n  <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n    <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <i\r\n          class=\"material-icons\">close</i></span>\r\n    </div>\r\n    <div class=\"grid-filter-container\">\r\n      <div class=\"filter-title\">\r\n        <h3>Advance Filter</h3>\r\n      </div>\r\n      <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 MT-10\">\r\n            <ng-select [items]=\"parentClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Parent Trading Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"onChangeParentEntity($event)\"\r\n                       formControlName=\"parent_id\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <ng-select [items]=\"clientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"entity_id\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Address Type\" formControlName=\"type\">\r\n                <mat-option *ngFor=\"let addressTypeData of addressType\" [value]=\"addressTypeData.key\">\r\n                  {{addressTypeData.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Address\" formControlName=\"street_address\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Suburb\" formControlName=\"suburb\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"State\" formControlName=\"state_id\">\r\n                <mat-option *ngFor=\"let addressStateData of addressState\" [value]=\"addressStateData.key\">\r\n                  {{addressStateData.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Post Code\" formControlName=\"postcode\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-6 MT-10 text-right\">\r\n            <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n            <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Filter -->\r\n\r\n  <!-- Start Filter Tags -->\r\n  <div class=\"filter-tags\">\r\n    <form [formGroup]=\"advanceFilterForm\">\r\n      <div class=\"tag\" *ngIf=\"parentIdField.value\">\r\n        <span class=\"tag__title\">Parent Trading Name:</span>\r\n        <span>\r\n            <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"parent_id\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);onChangeParentEntity($event);\">\r\n              </ng-select>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"entityIdField.value\">\r\n        <span class=\"tag__title\">Trading Name :</span>\r\n        <span>\r\n           <ng-select [items]=\"clientList\"\r\n                      [closeOnSelect]=\"true\"\r\n                      bindLabel=\"trading_name\"\r\n                      placeholder=\"Trading Name\"\r\n                      bindValue=\"id\"\r\n                      [virtualScroll]=\"true\"\r\n                      [searchable]=\"true\"\r\n                      [hideSelected]=\"true\"\r\n                      formControlName=\"entity_id\"\r\n                      (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n          </ng-select>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id', 'entity_id')\">close</i>\r\n      </div>\r\n      <div class=\"tag\" *ngIf=\"addressTypeField.value\">\r\n        <span class=\"tag__title\">Address Type :</span>\r\n        <span>\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Address Type\" readonly\r\n                          formControlName=\"type\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                          #addressTypeRef>\r\n                <mat-option *ngFor=\"let addressTypeData of addressType\" [value]=\"addressTypeData.key\">{{addressTypeData.label}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('type')\">close</i>\r\n      </div>\r\n      <div class=\"tag\" *ngIf=\"addressField.value\">\r\n        <span class=\"tag__title\">Address :</span>\r\n        <span>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Address\" formControlName=\"street_address\"\r\n                     (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n            </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('street_address')\">close</i>\r\n      </div>\r\n      <div class=\"tag\" *ngIf=\"suburbField.value\">\r\n        <span class=\"tag__title\">Suburb :</span>\r\n        <span>\r\n           <mat-form-field>\r\n              <input matInput placeholder=\"Suburb\" formControlName=\"suburb\"\r\n                     (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n            </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('suburb')\">close</i>\r\n      </div>\r\n      <div class=\"tag\" *ngIf=\"stateField.value\">\r\n        <span class=\"tag__title\">State :</span>\r\n        <span>\r\n          <mat-form-field>\r\n              <mat-select placeholder=\"State\"\r\n                          readonly\r\n                          formControlName=\"state_id\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                          #addressStateRef>\r\n                <mat-option *ngFor=\"let addressStateData of addressState\" [value]=\"addressStateData.key\">{{addressStateData.label}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('state_id')\">close</i>\r\n      </div>\r\n      <div class=\"tag\" *ngIf=\"postcodeField.value\">\r\n        <span class=\"tag__title\">Post Code :</span>\r\n        <span>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Post Code\" formControlName=\"postcode\"\r\n                     (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n            </mat-form-field>\r\n          </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('postcode')\">close</i>\r\n      </div>\r\n      <div class=\"clearAll-tags\"\r\n           *ngIf=\"parentIdField.value || entityIdField.value || addressTypeField.value || addressField.value || suburbField.value || stateField.value || postcodeField.value\">\r\n        <a (click)=\"resetFilterForm()\">Clear all</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- End Filter Tags -->\r\n  <!-- End Filter Tags -->\r\n\r\n  <!--start table-->\r\n  <div class=\"address-container\">\r\n    <div class=\"table-container table-no-striped\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"4%\">Sr. No</th>\r\n            <th width=\"12%\">Parent Trading Name</th>\r\n            <th width=\"15%\"\r\n                (click)=\"getSortData('trading_name', sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Trading Name\r\n              <i *ngIf=\"sortBy === 'trading_name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'trading_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'trading_name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"8%\">TAM</th>\r\n            <th width=\"8%\"\r\n                (click)=\"getSortData('type', sortBy === 'type' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Address Type\r\n              <i *ngIf=\"sortBy === 'type'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'type' && sortOrder === 'asc', 'icon-down' :  sortBy === 'type' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'type' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"18%\"\r\n                (click)=\"getSortData('street_address', sortBy === 'street_address' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Address\r\n              <i *ngIf=\"sortBy === 'street_address'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'street_address' && sortOrder === 'asc', 'icon-down' :  sortBy === 'street_address' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'street_address' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"11%\"\r\n                (click)=\"getSortData('suburb', sortBy === 'suburb' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Suburb\r\n              <i *ngIf=\"sortBy === 'suburb'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'suburb' && sortOrder === 'asc', 'icon-down' :  sortBy === 'suburb' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'suburb' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"8%\"\r\n                (click)=\"getSortData('state_id', sortBy === 'state_id' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              State\r\n              <i *ngIf=\"sortBy === 'state_id'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'state_id' && sortOrder === 'asc', 'icon-down' :  sortBy === 'state_id' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'state_id' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"8%\"\r\n                (click)=\"getSortData('postcode', sortBy === 'postcode' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Post Code\r\n              <i *ngIf=\"sortBy === 'postcode'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'postcode' && sortOrder === 'asc', 'icon-down' :  sortBy === 'postcode' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'postcode' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i></th>\r\n            <th width=\"8%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody *ngIf=\"addressList.length\">\r\n            <tr *ngFor=\"let addressData of addressList; let i = index;\">\r\n              <td width=\"4%\">{{i+1}}\r\n                <mat-icon class=\"red-color v-align-middle\" [matTooltip]=\"'Discontinue Process Initialized'\"\r\n                          *ngIf=\"addressData?.discontinue_stage === 1\">block\r\n                </mat-icon>\r\n              </td>\r\n              <td width=\"12%\">{{addressData?.parent_name}}</td>\r\n              <td width=\"15%\" class=\"word-break\">{{addressData?.entity_id?.trading_name}}\r\n              </td>\r\n              <td width=\"8%\">{{addressData?.created_by?.userfullname}}\r\n              </td>\r\n              <td width=\"8%\"><span class=\"orange-color\"><mat-icon\r\n                class=\"grid_icon_trip_origin mat-icon material-icons\">trip_origin</mat-icon></span>\r\n                {{addressData?.type > 0 ? getAddressType(addressData?.type) : ''}}\r\n              </td>\r\n              <td width=\"18%\">\r\n                <div [matTooltip]=\"addressData?.street_address\" class=\"text-overflow-elipsis-20\">\r\n                  {{addressData?.street_address}}\r\n                </div>\r\n              </td>\r\n              <td width=\"11%\">{{addressData?.suburb}}</td>\r\n              <td width=\"8%\">{{addressData?.state_id > 0 ? getAddressState(addressData?.state_id) : ''}}</td>\r\n              <td width=\"8%\">{{addressData?.postcode}}</td>\r\n              <td width=\"8%\">\r\n                <a *ngIf=\"tabData['add_edit']\" class=\"orange-color ML-10\" [matTooltip]=\"'Edit'\"\r\n                   (click)=\"onEditAddress(addressData)\"><i class=\"material-icons\">edit</i></a>\r\n                <a (click)=\"onViewAddress(addressData)\" class=\"wet-asphalt-color\" [matTooltip]=\"'View'\"><i\r\n                  class=\"material-icons\">remove_red_eye</i></a>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table *ngIf=\"addressList.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"addressList.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!--end table-->\r\n</div>\r\n\r\n<!--item view modal-->\r\n<div *ngIf=\"activeView == enumView.VIEW_MODAL\">\r\n  <app-view-address [addressRecord]=\"selectedAddressRecord\"\r\n                    [popupStatus]=\"isViewAddress\" (close)=\"activeView = null\"></app-view-address>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/address/address.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/address/address.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvY29udGFjdC1pbmZvcm1hdGlvbi9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/address/address.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/address/address.component.ts ***!
  \**************************************************************************************/
/*! exports provided: Views, AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var Views;
(function (Views) {
    Views[Views["FILTER_VIEW_MAIN"] = 0] = "FILTER_VIEW_MAIN";
    Views[Views["VIEW_MODAL"] = 1] = "VIEW_MODAL";
})(Views || (Views = {}));
var AddressComponent = /** @class */ (function (_super) {
    __extends(AddressComponent, _super);
    function AddressComponent(_router, _fb, _commonCrudService, _sharedObjService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        _this._sharedService = _sharedService;
        // Constant Variables
        _this.enumView = Views;
        _this.addressList = [];
        _this.clientList = [];
        _this.filteredTradingClientList = [];
        _this.parentClientList = [];
        _this.userList = [];
        _this.addressState = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ADDRESSSTATE"];
        _this.addressType = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ADDRESSTYPE"];
        _this.equalJSON = {};
        _this.likeJSON = {};
        _this.inJSON = {};
        // pagination Data
        _this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        _this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        _this.isOpenFilterView = false;
        _this.isOpenHistoryDialog = false;
        _this.selectedAddressRecord = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        _this.isViewAddress = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        _this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_11__["ADMINTABACCESS"].CLIENT_ADDRESS;
        return _this;
    }
    Object.defineProperty(AddressComponent.prototype, "parentIdField", {
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressComponent.prototype, "entityIdField", {
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressComponent.prototype, "addressTypeField", {
        get: function () {
            return this.filterForm.get('type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressComponent.prototype, "addressField", {
        get: function () {
            return this.filterForm.get('street_address');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressComponent.prototype, "suburbField", {
        get: function () {
            return this.filterForm.get('suburb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressComponent.prototype, "stateField", {
        get: function () {
            return this.filterForm.get('state_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressComponent.prototype, "postcodeField", {
        get: function () {
            return this.filterForm.get('postcode');
        },
        enumerable: true,
        configurable: true
    });
    AddressComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.initializationMethod();
    };
    /**
     * Initialization Methods
     */
    AddressComponent.prototype.initializationMethod = function () {
        this.getContactAddressList(1, 'id', 'desc');
        this.getClientList();
        this.createAdvanceFilterForm();
    };
    /**
     * Create Form for filters
     */
    AddressComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            street_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            suburb: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            state_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            postcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.advanceFilterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            street_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            suburb: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            state_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            postcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
    };
    /**
     * Get Client List
     */
    AddressComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = response;
            _this.filteredTradingClientList = response;
            _this.parentClientList = response.filter(function (item) { return item.is_parent === 1; });
        });
    };
    /**
     * Default search params for client listing API
     * @returns {{compare: {notequal: {discontinue_stage: number}}}}
     */
    AddressComponent.prototype.getClientSearchParam = function () {
        return {
            compare: {
                notequal: {
                    discontinue_stage: 2
                }
            }
        };
    };
    /**
     * Get Address List
     * @param {number} pageNumber
     * @param {string} key
     * @param {string} val
     */
    AddressComponent.prototype.getContactAddressList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CONTACT_INFORMATION_ADDRESS_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (Response) {
            _this.handleAddressResponse(Response);
        });
    };
    /**
     * Archive Address
     * @param id
     */
    AddressComponent.prototype.archiveAddress = function (address) {
        var _this = this;
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CONTACT_INFORMATION_ADDRESS_UPDATE, address.id, { 'is_archived': 1 }).subscribe(function (Response) {
            _this.getContactAddressList(_this.page, _this.sortBy, _this.sortOrder);
        });
    };
    /**
     * Handle Address List Response
     * @param response
     */
    AddressComponent.prototype.handleAddressResponse = function (response) {
        this.addressList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Open filter method
     */
    AddressComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = true;
    };
    /**
     * Close filter method
     */
    AddressComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    /**
     * Toogle Filter
     */
    AddressComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Pagination page change method
     * @param event
     */
    AddressComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getContactAddressList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Export to Excel
     */
    AddressComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CONTACT_INFORMATION_ADDRESS_LIST, params, this.getSearchParam(), 'Contact Address ', 0).subscribe(function (response) {
        });
    };
    /**
     * Open view modal method
     * @param address
     */
    AddressComponent.prototype.onViewAddress = function (address) {
        this.activeView = this.enumView.VIEW_MODAL;
        this.selectedAddressRecord.next(address);
        this.isViewAddress.next(true);
    };
    /**
     * Open view modal method
     * @param dialogName
     */
    AddressComponent.prototype.onEditAddress = function (address) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["GLOBALDATAKEYS"].CONTACTADDRESS, address);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADD_ADDRESS]);
    };
    /**
     * Close modal method
     * @param event
     */
    AddressComponent.prototype.onCloseDialog = function (event) {
        this.activeView = event;
    };
    /**
     * Display Address State
     * @param {number} state_id
     * @returns {string}
     */
    AddressComponent.prototype.getAddressState = function (state_id) {
        return this.addressState.filter(function (elem) { return elem.key === state_id; })[0].label;
    };
    /**
     * Display Address Type
     * @param {number} type
     * @returns {string}
     */
    AddressComponent.prototype.getAddressType = function (type) {
        return this.addressType.filter(function (elem) { return elem.key === type; })[0].label;
    };
    /**
     * On add address redirect
     */
    AddressComponent.prototype.onAddAddress = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADD_ADDRESS]);
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    AddressComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue('');
        this.advanceFilterForm.get(elementName).setValue('');
        if (elementName === 'parent_id' || elementName === 'type' || elementName === 'state_id') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'street_address' || elementName === 'suburb' || elementName === 'postcode') {
            delete this.likeJSON[elementName];
        }
        else if (elementName === 'entity_id') {
            delete this.inJSON[JsonElementName];
        }
        this.getContactAddressList(1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    AddressComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        // this.filterForm.patchValue({'entity': []});
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.isOpenFilterView = false;
        this.getContactAddressList(1, 'id', 'desc');
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    AddressComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
        var processToReq = false;
        if (flag) {
            processToReq = true;
        }
        else {
            if (event.keyCode === 13) {
                processToReq = true;
            }
        }
        if (processToReq) {
            this.filterForm.setValue({
                'parent_id': form.value['parent_id'],
                'entity_id': form.value['entity_id'],
                'type': form.value['type'],
                'street_address': form.value['street_address'],
                'suburb': form.value['suburb'],
                'state_id': form.value['state_id'],
                'postcode': form.value['postcode'],
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    AddressComponent.prototype.setAdvanceFilter = function (form, flag) {
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
                        this.advanceFilterForm.get(key).setValue(form.value[key]);
                    }
                }
            }
        }
        // For Multiple Entity ID
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'parent_id' || key === 'type' || key === 'state_id') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'entity_id') {
                        this.inJSON[key] = form.value[key];
                    }
                    else if (key === 'street_address' || key === 'suburb' || key === 'postcode') {
                        this.likeJSON[key] = form.value[key];
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getContactAddressList(1, 'id', 'desc');
        }
    };
    /**
     * Esc event for close modal
     * @param event
     */
    AddressComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.activeView = null;
        }
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    AddressComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
        var params = {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
        if (sortKey) {
            params['sortBy'] = sortKey;
        }
        if (sortOrder) {
            params['sortOrder'] = sortOrder;
        }
        return params;
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    AddressComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getContactAddressList(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    AddressComponent.prototype.getSearchParam = function () {
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
    /**
     * On Change Parent Entity
     * @param event
     */
    AddressComponent.prototype.onChangeParentEntity = function (event) {
        this.clientList = this.filteredTradingClientList;
        if (event && event.id > 0) {
            this.clientList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AddressComponent.prototype, "onKeydownHandler", null);
    AddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/admin/client-module/contact-information/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.scss */ "./src/app/admin/client-module/contact-information/address/address.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_9__["SharedObjService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], AddressComponent);
    return AddressComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact-info-newsletter/contact-info-newsletter.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact-info-newsletter/contact-info-newsletter.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"with-filter-grid-container\">\r\n  <!-- Start Grid Inner Header -->\r\n  <div class=\"grid-inner-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <div>\r\n          <form [formGroup]=\"filterForm\">\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput placeholder=\"Search\" formControlName=\"manage_emails_search\"\r\n                     (keyup)=\"setAdvanceFilter(filterForm)\">\r\n            </mat-form-field>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-10\">\r\n        <ul class=\"download-icon\">\r\n          <li (click)=\"downloadExcel()\" *ngIf=\"tabData['export']\">\r\n            <a>\r\n              <span>Excel</span>\r\n              <mat-icon class=\"material-icons\">file_download</mat-icon>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- End Grid Inner Header -->\r\n  <!--start table-->\r\n  <div class=\"newsletter-container\">\r\n    <div class=\"table-container table-no-striped\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"4%\">Sr. No</th>\r\n            <th width=\"8%\">Entity</th>\r\n            <th width=\"8%\">Contact Position</th>\r\n            <th width=\"8%\">Email</th>\r\n            <th width=\"8%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let newsletter of newsletterList; let i = index;\">\r\n              <td width=\"4%\">{{i+1}}</td>\r\n              <td width=\"8%\">{{newsletter['trading_name']}}</td>\r\n              <td width=\"8%\">{{newsletter['position']}}</td>\r\n              <td width=\"8%\">{{newsletter['email']}}</td>\r\n              <td width=\"8%\">\r\n                <mat-icon class=\"red-color\" *ngIf=\"tabData['add_edit']\"\r\n                          (click)=\"onArchiveGroupDialog(newsletter['email'])\" matTooltip=\"archive\">unsubscribe\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table *ngIf=\"newsletterList.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--end table-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact-info-newsletter/contact-info-newsletter.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact-info-newsletter/contact-info-newsletter.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvY29udGFjdC1pbmZvcm1hdGlvbi9jb250YWN0LWluZm8tbmV3c2xldHRlci9jb250YWN0LWluZm8tbmV3c2xldHRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact-info-newsletter/contact-info-newsletter.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact-info-newsletter/contact-info-newsletter.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ContactInfoNewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoNewsletterComponent", function() { return ContactInfoNewsletterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ContactInfoNewsletterComponent = /** @class */ (function () {
    function ContactInfoNewsletterComponent(_fb, _router, dialog, _commonCrudService, _sharedObjService, _sharedService) {
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        // Data Variables
        this.newsletterList = [];
        this.slideActiveInactive = [];
        // Pagination variables
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY[1];
        this.orJSON = {};
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_6__["ADMINTABACCESS"].MANAGE_NEWSLETTEREMAIL;
    }
    ContactInfoNewsletterComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.initializationMethod();
    };
    // Initialization Methods
    ContactInfoNewsletterComponent.prototype.initializationMethod = function () {
        // default API listing code
        this.getNewsLetterEmailList(1, 'email', 'desc');
        this.createAdvanceFilterForm();
    };
    /**
     * Initialization methods
     * @param pageNumber
     * @param key
     * @param val
     */
    ContactInfoNewsletterComponent.prototype.getNewsLetterEmailList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].NEWSLETTER_CONTCAT_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam())
            .subscribe(function (response) {
            _this.handleClientListResponse(response);
        });
    };
    /**
     * Export to Excel
     */
    ContactInfoNewsletterComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].NEWSLETTER_CONTCAT_EXPORT, params, this.getSearchParam(), 'Contact ', 0).subscribe(function (response) {
        });
    };
    /**
     * handling the response
     * @param response
     */
    ContactInfoNewsletterComponent.prototype.handleClientListResponse = function (response) {
        this.newsletterList = response['payload']['data'];
        this.page = response['pager']['pageNumber'];
        this.pageIndex = this.page - 1;
        this.totalRecords = +(response['pager']['totalRecords']);
        this.sortBy = response['pager']['sortBy'];
        this.sortOrder = response['pager']['sortOrder'];
    };
    // Events
    /**
     * sort function for sort data
     * @param sortKey
     * @param sortVal
     */
    ContactInfoNewsletterComponent.prototype.getSort = function (sortKey, sortVal) {
        this.getNewsLetterEmailList(1, sortKey, sortVal);
    };
    /**
     * Create Change InOut
     */
    ContactInfoNewsletterComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            manage_emails_search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    ContactInfoNewsletterComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.orJSON = {};
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
                    if (key === 'manage_emails_search') {
                        this.orJSON['email'] = form.value[key];
                    }
                }
            }
            this.getNewsLetterEmailList(1, 'email', 'desc');
        }
    };
    /**
     * Create Advance Filter
     */
    ContactInfoNewsletterComponent.prototype.createFilterForm = function () {
        this.filterForm = this._fb.group({
            manage_emails_search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    ContactInfoNewsletterComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getNewsLetterEmailList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    ContactInfoNewsletterComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     *
     * @param action
     * @param manageEmails
     */
    ContactInfoNewsletterComponent.prototype.onArchiveGroupDialog = function (manageEmails) {
        var _this = this;
        var dialogConfigData = {
            data: {
                content: 'Are you sure you want to archive contact?'
            },
            panelClass: 'add-bookkeeping-dialog-panel-container'
        };
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationDialogComponent"], dialogConfigData);
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this.movetoarchive(manageEmails);
            }
        });
    };
    ContactInfoNewsletterComponent.prototype.movetoarchive = function (email) {
        var _this = this;
        var emailList = { 'email': email };
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].NEWSLETTER_MOVETOARCHIVE, 0, emailList).subscribe(function (Response) {
            _this.getNewsLetterEmailList(1, 'email', 'desc');
        });
    };
    // helper
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{pageNumber: number; recordsPerPage: number}}
     */
    ContactInfoNewsletterComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
        var params = {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
        if (sortKey) {
            params['sortBy'] = sortKey;
        }
        if (sortOrder) {
            params['sortOrder'] = sortOrder;
        }
        return params;
    };
    /**
     * Default search params for client listing API
     * @returns {{}}
     */
    ContactInfoNewsletterComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        params['compare'] = filter;
        if (Object.keys(this.orJSON).length !== 0) {
            params['or'] = { 'like': [this.orJSON] };
        }
        return params;
    };
    ContactInfoNewsletterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newsletter',
            template: __webpack_require__(/*! ./contact-info-newsletter.component.html */ "./src/app/admin/client-module/contact-information/contact-info-newsletter/contact-info-newsletter.component.html"),
            styles: [__webpack_require__(/*! ./contact-info-newsletter.component.scss */ "./src/app/admin/client-module/contact-information/contact-info-newsletter/contact-info-newsletter.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], ContactInfoNewsletterComponent);
    return ContactInfoNewsletterComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact-information.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact-information.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-tab-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>CLIENT</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">CONTACT INFORMATION</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!--start contact and address tab menu-->\r\n  <div class=\"\">\r\n    <mat-tab-group class=\"demo-tab-group\" (selectedTabChange)=\"onSelectTab($event)\">\r\n      <mat-tab label=\"Contact\" *ngIf=\"tabData['view']\">\r\n        <div *ngIf=\"isActiveTabText === 'Contact'\">\r\n          <app-contact></app-contact>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab label=\"Address\" *ngIf=\"tabAddData['view']\">\r\n        <div *ngIf=\"isActiveTabText === 'Address'\">\r\n          <app-address></app-address>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Newsletter\" *ngIf=\"tabNewsData['view']\">\r\n        <div *ngIf=\"isActiveTabText === 'Newsletter'\">\r\n          <app-newsletter></app-newsletter>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Client Users\" *ngIf=\"tabData['view']\">\r\n        <div *ngIf=\"isActiveTabText === 'Client Users'\">\r\n         <app-client-users></app-client-users>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n  <!--end contact and address tab menu-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact-information.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact-information.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvY29udGFjdC1pbmZvcm1hdGlvbi9jb250YWN0LWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact-information.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact-information.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ContactInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInformationComponent", function() { return ContactInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactInformationComponent = /** @class */ (function () {
    function ContactInformationComponent(_sharedService, _router) {
        this._sharedService = _sharedService;
        this._router = _router;
        this.isActiveTab = 0;
        this.isActiveTabText = 'Contact';
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].CLIENT_CONTACT_INFO;
        this.tabAddID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].CLIENT_ADDRESS;
        this.tabNewsletterID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_2__["ADMINTABACCESS"].CLIENT_NEWSLETTER;
    }
    ContactInformationComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.tabAddData = this._sharedService.checkUserPrivilegesTabs(this.tabAddID);
        this.tabNewsData = this._sharedService.checkUserPrivilegesTabs(this.tabNewsletterID);
    };
    ContactInformationComponent.prototype.onSelectTab = function (tabChangeEvent) {
        this.isActiveTab = tabChangeEvent['index'];
        this.isActiveTabText = tabChangeEvent.tab.textLabel;
    };
    /**
     * On home page route
     */
    ContactInformationComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    ContactInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-information',
            template: __webpack_require__(/*! ./contact-information.component.html */ "./src/app/admin/client-module/contact-information/contact-information.component.html"),
            styles: [__webpack_require__(/*! ./contact-information.component.scss */ "./src/app/admin/client-module/contact-information/contact-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactInformationComponent);
    return ContactInformationComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact-information.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact-information.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ContactInformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInformationModule", function() { return ContactInformationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.module */ "./src/app/admin/client-module/contact-information/contact/contact.module.ts");
/* harmony import */ var _address_address_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address/address.module */ "./src/app/admin/client-module/contact-information/address/address.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _contact_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-information.component */ "./src/app/admin/client-module/contact-information/contact-information.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/admin/client-module/contact-information/contact/contact.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./address/address.component */ "./src/app/admin/client-module/contact-information/address/address.component.ts");
/* harmony import */ var _contact_info_newsletter_contact_info_newsletter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-info-newsletter/contact-info-newsletter.component */ "./src/app/admin/client-module/contact-information/contact-info-newsletter/contact-info-newsletter.component.ts");
/* harmony import */ var _client_users_client_users_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client-users/client-users.module */ "./src/app/admin/client-module/contact-information/client-users/client-users.module.ts");
/* harmony import */ var _client_users_client_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./client-users/client-users.component */ "./src/app/admin/client-module/contact-information/client-users/client-users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: _contact_information_component__WEBPACK_IMPORTED_MODULE_7__["ContactInformationComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuard"]]
    },
    {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule'
    },
    {
        path: 'address',
        loadChildren: './address/address.module#AddressModule'
    },
    {
        path: 'client-users',
        loadChildren: './client-users/client-users.module#ClientUsersModule'
    }
];
var ContactInformationModule = /** @class */ (function () {
    function ContactInformationModule() {
    }
    ContactInformationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _contact_information_component__WEBPACK_IMPORTED_MODULE_7__["ContactInformationComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _address_address_component__WEBPACK_IMPORTED_MODULE_9__["AddressComponent"],
                _contact_info_newsletter_contact_info_newsletter_component__WEBPACK_IMPORTED_MODULE_10__["ContactInfoNewsletterComponent"],
                _client_users_client_users_component__WEBPACK_IMPORTED_MODULE_12__["ClientUsersComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"],
                _contact_contact_module__WEBPACK_IMPORTED_MODULE_4__["ContactModule"],
                _address_address_module__WEBPACK_IMPORTED_MODULE_5__["AddressModule"],
                _client_users_client_users_module__WEBPACK_IMPORTED_MODULE_11__["ClientUsersModule"]
            ],
            entryComponents: []
        })
    ], ContactInformationModule);
    return ContactInformationModule;
}());



/***/ })

}]);
//# sourceMappingURL=contact-information-contact-information-module.js.map