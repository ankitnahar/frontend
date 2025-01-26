(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-client-view-client-module"],{

/***/ "./src/app/admin/client-module/view-client/active-client/active-client.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/active-client/active-client.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"with-filter-grid-container\">\r\n  <!-- Start Grid Inner Header -->\r\n  <div class=\"grid-inner-header PT-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 leave-type-list\">\r\n        <ul>\r\n          <li class=\"blue-drop-button\">\r\n            <button (click)=\"onAddEntity()\" *ngIf=\"tabData['add_edit']\" type=\"button\" class=\"btn-primary btn-add\">\r\n              <i class=\"material-icons\">add</i> Add Entity\r\n            </button>\r\n          </li>\r\n          <!--   <li>\r\n               <a class=\"red-color list-alignment\"><i class=\"material-icons\">fiber_manual_record</i> Discontinue Process\r\n                 Initiated</a>\r\n             </li>-->\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <ul class=\"download-icon\">\r\n          <li>\r\n            <a>\r\n              <span class=\"red-color\">Note:- If client discontinue process initiated, Worksheet Schedule data will not be display in update clients</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a (click)=\"onOpenFilter()\">\r\n              <span>Filter</span>\r\n              <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a (click)=\"downloadExcel()\">\r\n              <span>Checklist Report</span>\r\n              <mat-icon>file_download</mat-icon>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <div class=\"grid-search\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <i\r\n          class=\"material-icons\">close</i></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Parent Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"parent_id\"\r\n                         (change)=\"onChangeParentEntity($event)\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"filteredTradingClientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"code\"\r\n                         placeholder=\"Client Code\"\r\n                         bindValue=\"code\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"code\"\r\n              >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"filteredTradingClientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select class=\"custom\" [items]=\"filteredTradingClientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"billing_name\"\r\n                         placeholder=\"Billing Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"id\"\r\n              >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Is Parent?\" formControlName=\"is_parent\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                    {{ yesNo?.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Client Console?\" formControlName=\"is_dashboard\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                    {{ yesNo?.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Billing From BDMS?\" formControlName=\"billing_from\">\r\n                  <mat-option *ngFor=\"let billingData of billingFrom.slice(1)\" [value]=\"billingData?.key\">\r\n                    {{ billingData?.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-20 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"parentTradingName.value\">\r\n          <span class=\"tag__title\">Parent Trading Name:</span>\r\n          <span>\r\n            <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"parent_id\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);onChangeParentEntity($event);\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"clientCode.value\">\r\n          <span class=\"tag__title\">Client Code:</span>\r\n          <span>\r\n            <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"code\"\r\n                       placeholder=\"Client Code\"\r\n                       bindValue=\"code\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"code\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('code')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"tradingName.value\">\r\n          <span class=\"tag__title\">Trading Name:</span>\r\n          <span>\r\n            <ng-select class=\"custom\" [items]=\"filteredTradingClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"id\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('id')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"tradingName.value\">\r\n          <span class=\"tag__title\">Billing Name:</span>\r\n          <span>\r\n            <ng-select class=\"custom\" [items]=\"filteredTradingClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"billing_name\"\r\n                       placeholder=\"Billing name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"id\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('id')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"(isParent.value >=0 && isParent.value !== null)\">\r\n          <span class=\"tag__title\">Is Parent:</span>\r\n          <span>\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Is Parent?\" (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" formControlName=\"is_parent\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                    {{ yesNo?.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('is_parent')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"(isClientConsole.value >=0 && isClientConsole.value !== null)\">\r\n          <span class=\"tag__title\">Client Console?:</span>\r\n          <span>\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Client Console?\" (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" formControlName=\"is_dashboard\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                    {{ yesNo?.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('is_dashboard')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"(isBillingFrom.value >=0 && isBillingFrom.value !== null)\">\r\n          <span class=\"tag__title\">Billing From BDMS?:</span>\r\n          <span>\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Client Console?\" (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" formControlName=\"billing_from\">\r\n                  <mat-option *ngFor=\"let billingData of billingFrom.slice(1)\" [value]=\"billingData?.key\">\r\n                    {{ billingData?.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('billing_from')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\"\r\n             *ngIf=\"tradingName.value || parentTradingName.value || clientCode.value || (isParent.value >=0 && isParent.value !== null)  || (isClientConsole.value >=0 && isClientConsole.value !== null) || (isBillingFrom.value >=0 && isBillingFrom.value !== null)\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n\r\n  <!--table start-->\r\n  <div class=\"table-container table-no-striped\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"5%\">Sr No.</th>\r\n          <th width=\"8%\"\r\n              (click)=\"getSortClientData('code', sortBy === 'code' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Client Code\r\n            <i *ngIf=\"sortBy === 'code'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'code' && sortOrder === 'asc', 'icon-down' :  sortBy === 'code' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'code' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n          <th width=\"15%\">Parent Trading Name</th>\r\n          <th width=\"12%\"\r\n              (click)=\"getSortClientData('billing_name', sortBy === 'billing_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Billing Name\r\n            <i *ngIf=\"sortBy === 'billing_name'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'billing_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'billing_name' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'billing_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n          <th width=\"12%\"\r\n              (click)=\"getSortClientData('name', sortBy === 'name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Legal Name\r\n            <i *ngIf=\"sortBy === 'name'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'name' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n          <th width=\"12%\"\r\n              (click)=\"getSortClientData('trading_name', sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Trading Name\r\n            <i *ngIf=\"sortBy === 'trading_name'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'trading_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'trading_name' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n          <th width=\"9%\">Is Parent?</th>\r\n          <th width=\"9%\">Is Client Console?</th>\r\n          <th width=\"9%\">Billing From HK?</th>\r\n          <th width=\"9%\">Action</th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody>\r\n          <tr class=\"hover-icons\" *ngFor=\"let client of clientList; let i = index\">\r\n            <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}\r\n              <mat-icon *ngIf=\"client?.discontinue_stage == 1\" class=\"red-color v-align-middle\"\r\n                        [matTooltip]=\"'Discontinue Process Initiated'\">block\r\n              </mat-icon>\r\n            </td>\r\n            <td width=\"8%\">{{client?.code}}</td>\r\n            <td width=\"15%\" class=\"word-break\">{{client?.parent_entity?.trading_name}}</td>\r\n            <td width=\"12%\" class=\"word-break\">{{client?.billing_name}}</td>\r\n            <td width=\"12%\" class=\"word-break\">{{client?.name}}</td>\r\n            <td width=\"12%\" class=\"word-break\">{{client?.trading_name}}</td>\r\n            <td width=\"9%\">{{getYesNoStatus(client?.is_parent)}}</td>\r\n            <td width=\"9%\">{{getYesNoStatus(client?.is_dashboard)}}</td>\r\n            <td width=\"9%\">{{getBillingFrom(client?.billing_from)}}</td>\r\n            <td width=\"9%\">\r\n              <i class=\"material-icons wet-asphalt-color\" *ngIf=\"client.is_document\">attach_file</i>\r\n              <a *ngIf=\"tabData['add_edit']\" (click)=\"onUpdateClient(client, false)\" [matTooltip]=\"'Edit'\"><i\r\n                class=\"material-icons\">edit</i></a>\r\n\r\n              <!--same as an edit but only view access-->\r\n              <a *ngIf=\"tabData['view']\" (click)=\"onViewClient(client, false)\" [matTooltip]=\"'View'\"><i\r\n                class=\"material-icons\">remove_red_eye</i></a>\r\n              <a *ngIf=\"is_upload_doc\" [matTooltip]=\"'Upload Documents'\" (click)=\"onUploadDocuments(client)\"><i\r\n                class=\"material-icons is-open\">get_app</i></a>\r\n              <a *ngIf=\"is_perm\" (click)=\"onPermanentInformation(client)\"\r\n                 [matTooltip]=\"'View Permanent Information'\"><i\r\n                class=\"material-icons\">info</i></a>\r\n              <a *ngIf=\"tabData['view']\" (click)=\"onClientDocument(client)\" [matTooltip]=\"'Client Documents'\"><i\r\n                class=\"material-icons\">list_alt</i></a>\r\n              <!--  <a [matTooltip]=\"'Mail'\"><i class=\"material-icons\">mail</i></a>\r\n                <a [matTooltip]=\"'Message'\" *ngIf=\"client.is_service\"><i class=\"material-icons\">message</i></a>-->\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <table *ngIf=\"clientList.length\">\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"10\">\r\n            <mat-paginator [length]=\"totalRecords\"\r\n                           [pageSize]=\"pageSize\"\r\n                           [pageIndex]=\"pageIndex\"\r\n                           [pageSizeOptions]=\"pageArray\"\r\n                           (page)=\"onClientListPageChange($event)\">\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <!--table over-->\r\n  <div *ngIf=\"!clientList.length\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/active-client/active-client.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/active-client/active-client.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvYWN0aXZlLWNsaWVudC9hY3RpdmUtY2xpZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/active-client/active-client.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/active-client/active-client.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ActiveClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveClientComponent", function() { return ActiveClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ActiveClientComponent = /** @class */ (function () {
    function ActiveClientComponent(_router, _fb, _commonCrudService, _sharedObjService, _sharedService) {
        this._router = _router;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        // Data related variables
        this.clientList = [];
        this.parentClientList = [];
        this.tradingClientList = [];
        this.filteredTradingClientList = [];
        // Pagination variables
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["BASE"].PAGINATION_ARRAY[1];
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.orJSON = {};
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].CLIENT_VIEWCLIENT;
        this.uploadDocumentTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].CLIENT_ENTITYDOCUMENT;
        this.specialNoteTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].CLIENT_SPECIALNOTES;
        this.permInfoTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].SYSTEM_SETUP_PERMANENTINFO;
        this.is_upload_doc = false;
        this.is_special_notes = false;
        this.is_perm = false;
        this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNo"];
        this.billingFrom = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNo"];
        // Other Variables
        this.isOpenFilterView = false;
    }
    Object.defineProperty(ActiveClientComponent.prototype, "tradingName", {
        // get form control
        get: function () {
            return this.filterForm.get('id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveClientComponent.prototype, "parentTradingName", {
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveClientComponent.prototype, "clientCode", {
        get: function () {
            return this.filterForm.get('code');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveClientComponent.prototype, "isParent", {
        get: function () {
            return this.filterForm.get('is_parent');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveClientComponent.prototype, "isClientConsole", {
        get: function () {
            return this.filterForm.get('is_dashboard');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveClientComponent.prototype, "isBillingFrom", {
        get: function () {
            return this.filterForm.get('billing_from');
        },
        enumerable: true,
        configurable: true
    });
    ActiveClientComponent.prototype.ngOnInit = function () {
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.is_upload_doc = this._sharedService.checkUserPrivileges(this.uploadDocumentTabID, _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ACCESSTYPE"].IS_VIEW);
        this.is_special_notes = this._sharedService.checkUserPrivileges(this.specialNoteTabID, _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ACCESSTYPE"].IS_VIEW);
        this.is_perm = this._sharedService.checkUserPrivileges(this.permInfoTabID, _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ACCESSTYPE"].IS_VIEW);
        // default API listing code
        this.getClientList(1, 'id', 'desc');
        this.getEntityList();
        this.createAdvanceFilterForm();
    };
    /**
     * Initialization methods
     * @param pageNumber
     * @param key
     * @param val
     */
    ActiveClientComponent.prototype.getClientList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].CLIENT_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam())
            .subscribe(function (response) {
            _this.handleClientListResponse(response);
        });
    };
    ActiveClientComponent.prototype.getEntityList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            var data = response;
            _this.tradingClientList = data;
            _this.filteredTradingClientList = data;
            _this.parentClientList = data.filter(function (item) { return item.is_parent === 1; });
        });
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    ActiveClientComponent.prototype.onChangeParentEntity = function (event) {
        this.filteredTradingClientList = this.tradingClientList;
        if (event && event.id > 0) {
            this.filteredTradingClientList = this.tradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    /**
     * handling the response
     * @param response
     */
    ActiveClientComponent.prototype.handleClientListResponse = function (response) {
        this.clientList = response['payload']['data'];
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
    ActiveClientComponent.prototype.getSortClientData = function (sortKey, sortVal) {
        this.getClientList(1, sortKey, sortVal);
    };
    /**
     * Pagination page change event
     * @param event
     */
    ActiveClientComponent.prototype.onClientListPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getClientList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * On update client page redirect
     * @param clientData
     */
    ActiveClientComponent.prototype.onUpdateClient = function (clientData) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].CLIENT, clientData);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].UPDATE_CLIENT]);
    };
    ActiveClientComponent.prototype.onViewClient = function (clientData) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].CLIENT, clientData);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].VIEW_UPDATE_CLIENT]);
    };
    /**
     * On permanent information page redirect
     */
    ActiveClientComponent.prototype.onPermanentInformation = function (clientData) {
        var _this = this;
        if (clientData) {
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].PERMANENT_INFO_LIST, clientData.id).subscribe(function (response) {
                var permanentInfoData = response.payload.data;
                if (permanentInfoData) {
                    _this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].PERMANENT_INFO, permanentInfoData);
                    window.open(_utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].VIEW_PERMANENT_INFORMATION, '_blank');
                }
            });
        }
    };
    /**
     * On add entity page redirect
     */
    ActiveClientComponent.prototype.onAddEntity = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].ADD_ENTITY]);
    };
    /**
     * On cloud document
     * @param clientData
     */
    ActiveClientComponent.prototype.onClientDocument = function (clientData) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].CLIENT, null);
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].CLIENT, clientData);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].CLIENT_DOCUMENTS]);
    };
    // helper
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{pageNumber: number; recordsPerPage: number}}
     */
    ActiveClientComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    ActiveClientComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        var filterData = {
            discontinue_stage: 2
        };
        filter['notequal'] = filterData;
        // check for the object whether its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_10__["CommonFunctions"].isEmpty(filter)) {
            params['compare'] = filter;
        }
        if (Object.keys(this.orJSON).length !== 0) {
            params['or'] = { 'like': [this.orJSON] };
        }
        return params;
    };
    /**
     * function for redirect admin to upload document
     * @param clientData
     */
    ActiveClientComponent.prototype.onUploadDocuments = function (clientData) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].CLIENT, clientData);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].UPLOAD_DOCUMENTS]);
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    ActiveClientComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.orJSON = {};
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
                    if (key === 'id' || key === 'parent_id' || key === 'is_parent' || key === 'code' || key === 'is_dashboard' || key === 'billing_from') {
                        this.equalJSON[key] = form.value[key];
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getClientList(1, 'id', 'desc');
        }
    };
    /**
     * On home page route
     */
    ActiveClientComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    ActiveClientComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Get Billing From
     * @param status_id
     */
    ActiveClientComponent.prototype.getBillingFrom = function (status_id) {
        var val = this.billingFrom.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Create Change InOut
     */
    ActiveClientComponent.prototype.createAdvanceFilterForm = function () {
        // this.status =
        this.filterForm = this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_dashboard: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            billing_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_dashboard: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            billing_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    /**
     * Toogle Filter
     */
    ActiveClientComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Close filter
     */
    ActiveClientComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    ActiveClientComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.equalJSON = {};
        this.isOpenFilterView = false;
        this.getClientList(1, 'id', 'desc');
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    ActiveClientComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'id' || elementName === 'parent_id' || elementName === 'code' || elementName === 'is_parent' || elementName === 'is_dashboard') {
            delete this.equalJSON[elementName];
        }
        this.getClientList(1, this.sortBy, this.sortOrder);
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    ActiveClientComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
        // console.log(event);
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
                'id': (form.value['id']) ? form.value['id'] : null,
                'parent_id': (form.value['id']) ? form.value['parent_id'] : null,
                'code': (form.value['code']) ? form.value['code'] : null,
                'is_parent': (form.value['is_parent'] != null && Number(form.value['is_parent']) >= 0) ? form.value['is_parent'] : null,
                'is_dashboard': (form.value['is_dashboard'] != null && Number(form.value['is_dashboard']) >= 0) ? form.value['is_dashboard'] : null,
                'billing_from': (form.value['billing_from'] != null && Number(form.value['billing_from']) >= 0) ? form.value['billing_from'] : null,
            });
            this.setAdvanceFilter(form, false);
        }
    };
    ActiveClientComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1 };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].CLIENT_CHECKLIST_REPORT, params, {}, 'Checklist Report ', 0).subscribe(function (response) {
        });
    };
    ActiveClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-active-client',
            template: __webpack_require__(/*! ./active-client.component.html */ "./src/app/admin/client-module/view-client/active-client/active-client.component.html"),
            styles: [__webpack_require__(/*! ./active-client.component.scss */ "./src/app/admin/client-module/view-client/active-client/active-client.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_6__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], ActiveClientComponent);
    return ActiveClientComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/active-client/active-client.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/active-client/active-client.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ActiveClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveClientModule", function() { return ActiveClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _active_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active-client.component */ "./src/app/admin/client-module/view-client/active-client/active-client.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'active-client',
        component: _active_client_component__WEBPACK_IMPORTED_MODULE_2__["ActiveClientComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var ActiveClientModule = /** @class */ (function () {
    function ActiveClientModule() {
    }
    ActiveClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"]
            ],
            declarations: [_active_client_component__WEBPACK_IMPORTED_MODULE_2__["ActiveClientComponent"]],
            exports: [_active_client_component__WEBPACK_IMPORTED_MODULE_2__["ActiveClientComponent"]]
        })
    ], ActiveClientModule);
    return ActiveClientModule;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/client-info-services-notes-dialog/client-info-services-notes-dialog.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/client-info-services-notes-dialog/client-info-services-notes-dialog.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start add more bank modal -->\r\n<div class=\"modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Notes</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div [innerHTML]=\"toHTML(notesData)\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/client-info-services-notes-dialog/client-info-services-notes-dialog.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/client-info-services-notes-dialog/client-info-services-notes-dialog.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: ClientInfoServicesNotesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientInfoServicesNotesDialogComponent", function() { return ClientInfoServicesNotesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_pipe_checkEmpty_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utility/pipe/checkEmpty.pipe */ "./src/utility/pipe/checkEmpty.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ClientInfoServicesNotesDialogComponent = /** @class */ (function () {
    function ClientInfoServicesNotesDialogComponent(dialogRef, data, _decodeHTML) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._decodeHTML = _decodeHTML;
    }
    ClientInfoServicesNotesDialogComponent.prototype.ngOnInit = function () {
        this.notesData = (this.data) ? this.data.notesInfo : '';
    };
    /**
     * Close modal method
     */
    ClientInfoServicesNotesDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    /**
     * Esc event for close modal
     * @param event
     */
    ClientInfoServicesNotesDialogComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onClose();
        }
    };
    ClientInfoServicesNotesDialogComponent.prototype.toHTML = function (input) {
        // return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
        return this._decodeHTML.transform(input);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ClientInfoServicesNotesDialogComponent.prototype, "onKeydownHandler", null);
    ClientInfoServicesNotesDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-info-services-notes-dialog',
            template: __webpack_require__(/*! ./client-info-services-notes-dialog.component.html */ "./src/app/admin/client-module/view-client/client-info-services-notes-dialog/client-info-services-notes-dialog.component.html"),
            providers: [_utility_pipe_checkEmpty_pipe__WEBPACK_IMPORTED_MODULE_2__["DecodeHtmlEntities"]]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _utility_pipe_checkEmpty_pipe__WEBPACK_IMPORTED_MODULE_2__["DecodeHtmlEntities"]])
    ], ClientInfoServicesNotesDialogComponent);
    return ClientInfoServicesNotesDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/discontinue-client/discontinue-client.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/discontinue-client/discontinue-client.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"with-filter-grid-container\">\r\n  <!-- Start Grid Inner Header -->\r\n  <div class=\"grid-inner-header PT-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 leave-type-list\">\r\n        <ul>\r\n             <li>\r\n               <a class=\"primary-color list-alignment\">Discontinue Client</a>\r\n             </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"download-icon\">\r\n          <li>\r\n            <a (click)=\"onOpenFilter()\">\r\n              <span>Filter</span>\r\n              <mat-icon class=\"material-icons\">filter_list</mat-icon>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <div class=\"grid-search\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n  <!-- Start Grid Filter -->\r\n  <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n    <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <i\r\n          class=\"material-icons\">close</i></span>\r\n    </div>\r\n    <div class=\"grid-filter-container\">\r\n      <div class=\"filter-title\">\r\n        <h3>Advance Filter</h3>\r\n      </div>\r\n      <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 MT-10\">\r\n            <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Parent Trading Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       (change)=\"onChangeParentEntity($event)\"\r\n                       formControlName=\"parent_id\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-3 MT-10\">\r\n            <ng-select class=\"custom\" [items]=\"tradingClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"code\"\r\n                       placeholder=\"Client Code\"\r\n                       bindValue=\"code\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"code\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-3 MT-10\">\r\n            <ng-select class=\"custom\" [items]=\"tradingClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"id\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Is Parent?\" formControlName=\"is_parent\">\r\n                <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                  {{ yesNo?.label }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Client Console?\" formControlName=\"is_dashboard\">\r\n                <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                  {{ yesNo?.label }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3 MT-10\"></div>\r\n          <div class=\"col-md-3 MT-10\"></div>\r\n          <div class=\"col-md-3 MT-20 text-right\">\r\n            <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n            <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Filter -->\r\n\r\n  <!-- Start Filter Tags -->\r\n  <div class=\"filter-tags\">\r\n    <form [formGroup]=\"advanceFilterForm\">\r\n      <div class=\"tag\" *ngIf=\"clientCode.value\">\r\n        <span class=\"tag__title\">Client Code:</span>\r\n        <span>\r\n            <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"code\"\r\n                       placeholder=\"Client Code\"\r\n                       bindValue=\"code\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"code\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('code')\">close</mat-icon>\r\n      </div>\r\n      <div class=\"tag\" *ngIf=\"parentTradingName.value\">\r\n        <span class=\"tag__title\">Parent Trading Name:</span>\r\n        <span>\r\n            <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"parent_id\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);onChangeParentEntity($event);\">\r\n              </ng-select>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"tradingName.value\">\r\n        <span class=\"tag__title\">Trading Name:</span>\r\n        <span>\r\n            <ng-select class=\"custom\" [items]=\"tradingClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"id\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('id')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"(isParent.value >=0 && isParent.value !== null)\">\r\n        <span class=\"tag__title\">Is Parent:</span>\r\n        <span>\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Is Parent?\" (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" formControlName=\"is_parent\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                    {{ yesNo?.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('is_parent')\">close</mat-icon>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"(isClientConsole.value >=0 && isClientConsole.value !== null)\">\r\n        <span class=\"tag__title\">Client Console?:</span>\r\n        <span>\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Client Console?\" (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\" formControlName=\"is_dashboard\">\r\n                  <mat-option *ngFor=\"let yesNo of yesNoList.slice(1)\" [value]=\"yesNo?.key\">\r\n                    {{ yesNo?.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n          </span>\r\n        <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('is_dashboard')\">close</mat-icon>\r\n      </div>\r\n      <div class=\"clearAll-tags\"\r\n           *ngIf=\"tradingName.value || parentTradingName.value || clientCode.value || (isParent.value >=0 && isParent.value !== null)  || (isClientConsole.value >=0 && isClientConsole.value !== null)\">\r\n        <a (click)=\"resetFilterForm()\">Clear all</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- End Filter Tags -->\r\n  <!--table start-->\r\n  <div class=\"table-container table-no-striped\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"5%\">Sr No.</th>\r\n          <th width=\"8%\"\r\n              (click)=\"getSortClientData('code', sortBy === 'code' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Client Code\r\n            <i *ngIf=\"sortBy === 'code'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'code' && sortOrder === 'asc', 'icon-down' :  sortBy === 'code' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'code' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n          <th width=\"17%\">Parent Trading Name</th>\r\n          <th width=\"20%\"\r\n              (click)=\"getSortClientData('billing_name', sortBy === 'billing_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Billing Name\r\n            <i *ngIf=\"sortBy === 'billing_name'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'billing_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'billing_name' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'billing_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n          <th width=\"20%\"\r\n              (click)=\"getSortClientData('name', sortBy === 'name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Legal Name\r\n            <i *ngIf=\"sortBy === 'name'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'name' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n          <th width=\"17%\"\r\n              (click)=\"getSortClientData('trading_name', sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Trading Name\r\n            <i *ngIf=\"sortBy === 'trading_name'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'trading_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'trading_name' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n          <th width=\"8%\">Is Parent?</th>\r\n          <th width=\"5%\">Action</th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody>\r\n          <tr class=\"hover-icons\" *ngFor=\"let client of clientList; let i = index\">\r\n            <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}\r\n              <mat-icon *ngIf=\"client?.discontinue_stage == 1\" class=\"red-color v-align-middle\"\r\n                        [matTooltip]=\"'Discontinue Process Initiated'\">block\r\n              </mat-icon>\r\n            </td>\r\n            <td width=\"8%\">{{client?.code}}</td>\r\n            <td width=\"17%\" class=\"word-break\">{{client?.parent_entity?.trading_name}}</td>\r\n            <td width=\"20%\" class=\"word-break\">{{client?.billing_name}}</td>\r\n            <td width=\"20%\" class=\"word-break\">{{client?.name}}</td>\r\n            <td width=\"17%\" class=\"word-break\">{{client?.trading_name}}</td>\r\n            <td width=\"8%\">{{getYesNoStatus(client?.is_parent)}}</td>\r\n            <td width=\"5%\">\r\n              <i class=\"material-icons wet-asphalt-color\" *ngIf=\"client.is_document\">attach_file</i>\r\n              <a *ngIf=\"tabData['view']\" (click)=\"onClientDocument(client)\" [matTooltip]=\"'Client Documents'\"><i\r\n                class=\"material-icons\">list_alt</i></a>\r\n              <!--  <a [matTooltip]=\"'Mail'\"><i class=\"material-icons\">mail</i></a>\r\n                <a [matTooltip]=\"'Message'\" *ngIf=\"client.is_service\"><i class=\"material-icons\">message</i></a>-->\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <table *ngIf=\"clientList.length\">\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"10\">\r\n            <mat-paginator [length]=\"totalRecords\"\r\n                           [pageSize]=\"pageSize\"\r\n                           [pageIndex]=\"pageIndex\"\r\n                           [pageSizeOptions]=\"pageArray\"\r\n                           (page)=\"onClientListPageChange($event)\">\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <!--table over-->\r\n  <div *ngIf=\"!clientList.length\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/discontinue-client/discontinue-client.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/discontinue-client/discontinue-client.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvZGlzY29udGludWUtY2xpZW50L2Rpc2NvbnRpbnVlLWNsaWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/discontinue-client/discontinue-client.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/discontinue-client/discontinue-client.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DiscontinueClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscontinueClientComponent", function() { return DiscontinueClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DiscontinueClientComponent = /** @class */ (function () {
    function DiscontinueClientComponent(_router, _fb, _commonCrudService, _sharedObjService, _sharedService) {
        this._router = _router;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        // Data related variables
        this.clientList = [];
        this.parentClientList = [];
        this.tradingClientList = [];
        this.filteredTradingClientList = [];
        // Pagination variables
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["BASE"].PAGINATION_ARRAY[1];
        this.equalJSON = { 'discontinue_stage': 2 };
        this.likeJSON = {};
        this.inJSON = {};
        this.orJSON = {};
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].CLIENT_VIEWCLIENT;
        this.uploadDocumentTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].CLIENT_ENTITYDOCUMENT;
        this.specialNoteTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ADMINTABACCESS"].CLIENT_SPECIALNOTES;
        this.is_upload_doc = false;
        this.is_special_notes = false;
        this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNo"];
        // Other Variables
        this.isOpenFilterView = false;
    }
    Object.defineProperty(DiscontinueClientComponent.prototype, "tradingName", {
        // get form control
        get: function () {
            return this.filterForm.get('id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscontinueClientComponent.prototype, "parentTradingName", {
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscontinueClientComponent.prototype, "clientCode", {
        get: function () {
            return this.filterForm.get('code');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscontinueClientComponent.prototype, "isParent", {
        get: function () {
            return this.filterForm.get('is_parent');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscontinueClientComponent.prototype, "isClientConsole", {
        get: function () {
            return this.filterForm.get('is_dashboard');
        },
        enumerable: true,
        configurable: true
    });
    DiscontinueClientComponent.prototype.ngOnInit = function () {
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.is_upload_doc = this._sharedService.checkUserPrivileges(this.uploadDocumentTabID, _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ACCESSTYPE"].IS_VIEW);
        this.is_special_notes = this._sharedService.checkUserPrivileges(this.specialNoteTabID, _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_3__["ACCESSTYPE"].IS_VIEW);
        // default API listing code
        this.getEntityList();
        this.getClientList(1, 'id', 'desc');
        this.createAdvanceFilterForm();
    };
    /**
     * Initialization methods
     * @param pageNumber
     * @param key
     * @param val
     */
    DiscontinueClientComponent.prototype.getClientList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].CLIENT_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam())
            .subscribe(function (response) {
            _this.handleClientListResponse(response);
        });
    };
    /**
     * handling the response
     * @param response
     */
    DiscontinueClientComponent.prototype.handleClientListResponse = function (response) {
        this.clientList = response['payload']['data'];
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
    DiscontinueClientComponent.prototype.getSortClientData = function (sortKey, sortVal) {
        this.getClientList(1, sortKey, sortVal);
    };
    /**
     * Pagination page change event
     * @param event
     */
    DiscontinueClientComponent.prototype.onClientListPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getClientList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * On update client page redirect
     * @param clientData
     */
    DiscontinueClientComponent.prototype.onUpdateClient = function (clientData) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].CLIENT, clientData);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].UPDATE_CLIENT]);
    };
    DiscontinueClientComponent.prototype.onViewClient = function (clientData) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].CLIENT, clientData);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].VIEW_UPDATE_CLIENT]);
    };
    /**
     * On permanent information page redirect
     */
    DiscontinueClientComponent.prototype.onPermanentInformation = function (clientData) {
        var _this = this;
        if (clientData) {
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].PERMANENT_INFO_LIST, clientData.id).subscribe(function (response) {
                var permanentInfoData = response.payload.data;
                if (permanentInfoData) {
                    _this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].PERMANENT_INFO, permanentInfoData);
                    window.open(_utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].VIEW_PERMANENT_INFORMATION, '_blank');
                }
            });
        }
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    DiscontinueClientComponent.prototype.onChangeParentEntity = function (event) {
        this.filteredTradingClientList = this.tradingClientList;
        if (event && event.id > 0) {
            this.filteredTradingClientList = this.tradingClientList.filter(function (item) { return item["parent_id"] === event.id; });
        }
    };
    DiscontinueClientComponent.prototype.getEntityList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            var data = response;
            _this.tradingClientList = data;
            _this.parentClientList = data.filter(function (item) { return item.is_parent === 1; });
        });
    };
    /**
     * On add entity page redirect
     */
    DiscontinueClientComponent.prototype.onAddEntity = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].ADD_ENTITY]);
    };
    /**
     * On cloud document
     * @param clientData
     */
    DiscontinueClientComponent.prototype.onClientDocument = function (clientData) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].CLIENT, null);
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].CLIENT, clientData);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].CLIENT_DOCUMENTS]);
    };
    // helper
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{pageNumber: number; recordsPerPage: number}}
     */
    DiscontinueClientComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    DiscontinueClientComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        // check for the object whether its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_10__["CommonFunctions"].isEmpty(filter)) {
            params['compare'] = filter;
        }
        if (Object.keys(this.orJSON).length !== 0) {
            params['or'] = { 'like': [this.orJSON] };
        }
        return params;
    };
    /**
     * function for redirect admin to upload document
     * @param clientData
     */
    DiscontinueClientComponent.prototype.onUploadDocuments = function (clientData) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].CLIENT, clientData);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].UPLOAD_DOCUMENTS]);
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    DiscontinueClientComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = { 'discontinue_stage': 2 };
        this.likeJSON = {};
        this.inJSON = {};
        this.orJSON = {};
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
                    if (key === 'id' || key === 'parent_id' || key === 'is_parent' || key === 'code' || key === 'is_dashboard') {
                        this.equalJSON[key] = form.value[key];
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getClientList(1, 'id', 'desc');
        }
    };
    /**
     * On home page route
     */
    DiscontinueClientComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Display Get Status List
     * @param {number} status_id
     * @returns {string}
     */
    DiscontinueClientComponent.prototype.getYesNoStatus = function (status_id) {
        var val = this.yesNoList.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Create Change InOut
     */
    DiscontinueClientComponent.prototype.createAdvanceFilterForm = function () {
        // this.status =
        this.filterForm = this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_dashboard: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_dashboard: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    /**
     * Toogle Filter
     */
    DiscontinueClientComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Close filter
     */
    DiscontinueClientComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    DiscontinueClientComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.equalJSON = { 'discontinue_stage': 2 };
        this.isOpenFilterView = false;
        this.getClientList(1, 'id', 'desc');
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    DiscontinueClientComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'id' || elementName === 'parent_id' || elementName === 'code' || elementName === 'is_parent' || elementName === 'is_dashboard') {
            delete this.equalJSON[elementName];
        }
        this.getClientList(1, this.sortBy, this.sortOrder);
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    DiscontinueClientComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
        // console.log(event);
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
                'id': (form.value['id']) ? form.value['id'] : null,
                'parent_id': (form.value['id']) ? form.value['parent_id'] : null,
                'code': (form.value['code']) ? form.value['code'] : null,
                'is_parent': (form.value['is_parent'] != null && Number(form.value['is_parent']) >= 0) ? form.value['is_parent'] : null,
                'is_dashboard': (form.value['is_dashboard'] != null && Number(form.value['is_dashboard']) >= 0) ? form.value['is_dashboard'] : null,
            });
            this.setAdvanceFilter(form, false);
        }
    };
    DiscontinueClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discontinue-client',
            template: __webpack_require__(/*! ./discontinue-client.component.html */ "./src/app/admin/client-module/view-client/discontinue-client/discontinue-client.component.html"),
            styles: [__webpack_require__(/*! ./discontinue-client.component.scss */ "./src/app/admin/client-module/view-client/discontinue-client/discontinue-client.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_6__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], DiscontinueClientComponent);
    return DiscontinueClientComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/discontinue-client/discontinue-client.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/discontinue-client/discontinue-client.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: DiscontinueClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscontinueClientModule", function() { return DiscontinueClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _discontinue_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discontinue-client.component */ "./src/app/admin/client-module/view-client/discontinue-client/discontinue-client.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'discontinue-client',
        component: _discontinue_client_component__WEBPACK_IMPORTED_MODULE_2__["DiscontinueClientComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var DiscontinueClientModule = /** @class */ (function () {
    function DiscontinueClientModule() {
    }
    DiscontinueClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"]
            ],
            declarations: [_discontinue_client_component__WEBPACK_IMPORTED_MODULE_2__["DiscontinueClientComponent"]],
            exports: [_discontinue_client_component__WEBPACK_IMPORTED_MODULE_2__["DiscontinueClientComponent"]]
        })
    ], DiscontinueClientModule);
    return DiscontinueClientModule;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-client.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-client.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view-client-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>CLIENT</span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">VIEW CLIENT</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <div class=\"\">\r\n    <mat-tab-group class=\"demo-tab-group\" >\r\n      <mat-tab label=\"Active Client\">\r\n        <div>\r\n         <app-active-client></app-active-client>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab label=\"Discontinue Client\">\r\n        <div>\r\n         <app-discontinue-client></app-discontinue-client>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-client.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-client.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvdmlldy1jbGllbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-client.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-client.component.ts ***!
  \**************************************************************************/
/*! exports provided: ViewClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClientComponent", function() { return ViewClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewClientComponent = /** @class */ (function () {
    function ViewClientComponent(_router) {
        this._router = _router;
    }
    ViewClientComponent.prototype.ngOnInit = function () {
    };
    ViewClientComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    ViewClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-client',
            template: __webpack_require__(/*! ./view-client.component.html */ "./src/app/admin/client-module/view-client/view-client.component.html"),
            styles: [__webpack_require__(/*! ./view-client.component.scss */ "./src/app/admin/client-module/view-client/view-client.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewClientComponent);
    return ViewClientComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-client.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-client.module.ts ***!
  \***********************************************************************/
/*! exports provided: ViewClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClientModule", function() { return ViewClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _view_entity_view_entity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-entity/view-entity.component */ "./src/app/admin/client-module/view-client/view-entity/view-entity.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _view_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-client.component */ "./src/app/admin/client-module/view-client/view-client.component.ts");
/* harmony import */ var _client_info_services_notes_dialog_client_info_services_notes_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-info-services-notes-dialog/client-info-services-notes-dialog.component */ "./src/app/admin/client-module/view-client/client-info-services-notes-dialog/client-info-services-notes-dialog.component.ts");
/* harmony import */ var _active_client_active_client_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./active-client/active-client.module */ "./src/app/admin/client-module/view-client/active-client/active-client.module.ts");
/* harmony import */ var _discontinue_client_discontinue_client_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./discontinue-client/discontinue-client.module */ "./src/app/admin/client-module/view-client/discontinue-client/discontinue-client.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _view_client_component__WEBPACK_IMPORTED_MODULE_6__["ViewClientComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    },
    {
        path: 'upload-documents',
        loadChildren: './upload-documents/upload-document.module#UploadDocumentModule'
    },
    {
        path: 'add-entity',
        loadChildren: './add-entity/add-entity.module#AddEntityModule'
    },
    {
        path: 'update',
        loadChildren: './update-client/update-client.module#UpdateClientModule'
    },
    {
        path: 'view-update-client',
        loadChildren: './view-update-client/view-update-client.module#ViewUpdateClientModule'
    },
];
var ViewClientModule = /** @class */ (function () {
    function ViewClientModule() {
    }
    ViewClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _active_client_active_client_module__WEBPACK_IMPORTED_MODULE_8__["ActiveClientModule"],
                _discontinue_client_discontinue_client_module__WEBPACK_IMPORTED_MODULE_9__["DiscontinueClientModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [
                _view_entity_view_entity_component__WEBPACK_IMPORTED_MODULE_4__["ViewEntityComponent"],
                _view_client_component__WEBPACK_IMPORTED_MODULE_6__["ViewClientComponent"],
                _client_info_services_notes_dialog_client_info_services_notes_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ClientInfoServicesNotesDialogComponent"]
            ],
            entryComponents: [_client_info_services_notes_dialog_client_info_services_notes_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ClientInfoServicesNotesDialogComponent"]]
        })
    ], ViewClientModule);
    return ViewClientModule;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-entity/view-entity.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-entity/view-entity.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-entity-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <i class=\"material-icons cursor-pointer\">home</i>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>CLIENT</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span><a (click)=\"onClient()\">VIEW CLIENT</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">ADD ENTITY</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n\r\n  <!--add entity start-->\r\n  <div class=\"basic-main-tab-container\">\r\n    <span class=\"panel-title\">Add entity from here</span>\r\n    <form [formGroup]=\"basicMainForm\" (submit)=\"onSubmitBasicMainform(basicMainForm.value,basicMainForm.valid)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Billing Name\" formControlName=\"billing_name\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(basicMainForm.get('billing_name'))\"\r\n                            [errMsg]=\"validationMsg.BILLING_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Legal Name\" formControlName=\"name\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(basicMainForm.get('name'))\"\r\n                            [errMsg]=\"validationMsg.LEGAL_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Trading Name\" formControlName=\"trading_name\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(basicMainForm.get('trading_name'))\"\r\n                            [errMsg]=\"validationMsg.TRADING_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"signedDate\" placeholder=\"Contract Signed Date\"\r\n                   (mousedown)=\"signedDate.open()\" formControlName=\"contract_signed_date\" required/>\r\n            <mat-datepicker-toggle matSuffix [for]=\"signedDate\"></mat-datepicker-toggle>\r\n            <mat-datepicker #signedDate disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(basicMainForm.get('contract_signed_date'))\"\r\n                            [errMsg]=\"validationMsg.CONTRACT_DATE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput formControlName=\"entity_writeoff\" placeholder=\"Client Write Off\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(basicMainForm.get('entity_writeoff'))\"\r\n                            [errMsg]=\"validationMsg.CLIENT_WRITE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput formControlName=\"reviewer_budgeted_unit\" placeholder=\"Reviewer budgeted unit\" required/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(basicMainForm.get('reviewer_budgeted_unit'))\"\r\n                            [errMsg]=\"validationMsg.BUDGETED_UNIT_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Related entity\" formControlName=\"related_entity\">\r\n              <mat-option *ngFor=\"let YesNoData of YesNo.slice(1)\" [value]=\"YesNoData?.key\">\r\n                {{ YesNoData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select [multiple]=\"true\" placeholder=\"Name of Related entity\" formControlName=\"related_entity_id\">\r\n              <mat-option *ngFor=\"let ClientListResponseData of ClientListResponse\"\r\n                          [value]=\"ClientListResponseData?.id\">\r\n                {{ClientListResponseData?.trading_name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"ABN number\" formControlName=\"abn_number\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"ABN Branch Code\" formControlName=\"abn_branch_code\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"registeredABN\" placeholder=\"Date from when client is registered for ABN\"\r\n                   (mousedown)=\"registeredABN.open()\" formControlName=\"abn_register_date\"/>\r\n            <mat-datepicker-toggle matSuffix [for]=\"registeredABN\"></mat-datepicker-toggle>\r\n            <mat-datepicker #registeredABN disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"TFN number\" formControlName=\"tfn_number\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Type of Business\" formControlName=\"business_type\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Type of Entity\" formControlName=\"entity_type\">\r\n              <mat-option *ngFor=\"let EntityTypeData of EntityType.slice(1)\" [value]=\"EntityTypeData?.key\">\r\n                {{ EntityTypeData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Bookkeeping Done By\" formControlName=\"bk_doneby\">\r\n              <mat-option *ngFor=\"let BkDonebyData of BkDoneby.slice(1)\" [value]=\"BkDonebyData?.key\">\r\n                {{ BkDonebyData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Registered For GST?\" formControlName=\"gst_register\">\r\n              <mat-option *ngFor=\"let YesNoData of YesNo.slice(1)\" [value]=\"YesNoData?.key\">\r\n                {{ YesNoData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"registeredGST\" placeholder=\"Date from which client is registered for GST\"\r\n                   (mousedown)=\"registeredGST.open()\" formControlName=\"gst_register_date\"/>\r\n            <mat-datepicker-toggle matSuffix [for]=\"registeredGST\"></mat-datepicker-toggle>\r\n            <mat-datepicker #registeredGST disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"BAS Frequency\" formControlName=\"bas_frequency\">\r\n              <mat-option *ngFor=\"let BasFrequencyData of BasFrequency.slice(1)\" [value]=\"BasFrequencyData?.key\">\r\n                {{ BasFrequencyData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"BAS is on Accrual or Cash?\" formControlName=\"bas_accrualorcash\">\r\n              <mat-option *ngFor=\"let BasAccrualorcashData of BasAccrualorcash.slice(1)\"\r\n                          [value]=\"BasAccrualorcashData?.key\">\r\n                {{ BasAccrualorcashData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"PAYG Frequency\" formControlName=\"payg_frequency\">\r\n              <mat-option *ngFor=\"let PaygFrequencyData of PaygFrequency.slice(1)\" [value]=\"PaygFrequencyData?.key\">\r\n                {{ PaygFrequencyData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Financial Institution detail updated on ATO?\"\r\n                        formControlName=\"financial_institution_updateon_ato\">\r\n              <mat-option *ngFor=\"let YesNoOtherData of YesNoOther.slice(1)\" [value]=\"YesNoOtherData?.key\">\r\n                {{ YesNoOtherData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Activity statement delivery preference\"\r\n                        formControlName=\"statement_delivery_preference\">\r\n              <mat-option *ngFor=\"let StatementDeliveryPreferenceData of StatementDeliveryPreference.slice(1)\"\r\n                          [value]=\"StatementDeliveryPreferenceData?.key\">\r\n                {{ StatementDeliveryPreferenceData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Is this client registered for FBT?\" formControlName=\"entity_registerfor_fbt\">\r\n              <mat-option *ngFor=\"let YesNoNaData of YesNoNa.slice(1)\" [value]=\"YesNoNaData?.key\">\r\n                {{ YesNoNaData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Is this client registered for fuel Tax Credit?\"\r\n                        formControlName=\"entity_registerfor_fueltaxcredit\">\r\n              <mat-option *ngFor=\"let YesNoNaData of YesNoNa.slice(1)\" [value]=\"YesNoNaData?.key\">\r\n                {{ YesNoNaData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Group client belongs to?\" formControlName=\"group_client_belongsto\">\r\n              <mat-option *ngFor=\"let ClientBelongsToResponseData of ClientBelongsToResponse\"\r\n                          [value]=\"ClientBelongsToResponseData?.id\">\r\n                {{ClientBelongsToResponseData?.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Franchise\" formControlName=\"franchise\">\r\n              <mat-option *ngFor=\"let FranchiseData of Franchise.slice(1)\" [value]=\"FranchiseData?.key\">\r\n                {{ FranchiseData?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Website\" formControlName=\"website\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-right MB-20\">\r\n          <button type=\"button\" class=\"btn-default\">Cancel</button>\r\n          <button [disabled]=\"basicMainForm.invalid\" type=\"submit\" class=\"btn-primary\">Add</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!--add entity html over-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-entity/view-entity.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-entity/view-entity.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvdmlldy1lbnRpdHkvdmlldy1lbnRpdHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-entity/view-entity.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-entity/view-entity.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ViewEntityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntityComponent", function() { return ViewEntityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
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











var ViewEntityComponent = /** @class */ (function (_super) {
    __extends(ViewEntityComponent, _super);
    function ViewEntityComponent(_fb, _router, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._router = _router;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_2__["ValidationConstantMessage"]();
        _this.YesNo = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["yesNo"];
        _this.YesNoNa = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["yesNoNa"];
        _this.YesNoOther = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["yesNoOther"];
        _this.BkDoneby = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["bkDoneby"];
        _this.BasFrequency = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["basFrequency"];
        _this.BasAccrualorcash = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["basAccrualorcash"];
        _this.PaygFrequency = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["paygFrequency"];
        _this.StatementDeliveryPreference = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["statementDeliveryPreference"];
        _this.EntityType = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["entityType"];
        _this.Franchise = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["franchise"];
        return _this;
    }
    ViewEntityComponent.prototype.ngOnInit = function () {
        this.initializeMethod();
    };
    /**
     * Initialization Methods
     */
    ViewEntityComponent.prototype.initializeMethod = function () {
        var _this = this;
        this.getClientList();
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].CLIENT_BELONGSTO, { 'records': 'all' }).subscribe(function (Response) {
            _this.handleClientBelongsToList(Response);
        });
        this.createBasicMainForm();
    };
    /**
     * Get Client List
     */
    ViewEntityComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.ClientListResponse = response;
        });
    };
    /**
     * Handle Entity Belongs to List
     * @param response
     */
    ViewEntityComponent.prototype.handleClientBelongsToList = function (response) {
        // assign data to array
        this.ClientBelongsToResponse = response.payload.data;
    };
    /**
     * Create Client Basic Form
     * @param
     */
    ViewEntityComponent.prototype.createBasicMainForm = function () {
        this.basicMainForm = this._fb.group({
            billing_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            trading_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            contract_signed_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            entity_writeoff: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            reviewer_budgeted_unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            related_entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            related_entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
            abn_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            abn_branch_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            abn_register_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            tfn_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            business_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            entity_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            bk_doneby: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            gst_register: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            gst_register_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            bas_frequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            bas_accrualorcash: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            payg_frequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            financial_institution_updateon_ato: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            statement_delivery_preference: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            entity_registerfor_fbt: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            entity_registerfor_fueltaxcredit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            group_client_belongsto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            franchise: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    };
    /**
     * On Form Submit Client Basic Data
     * @param formParams
     * @param {boolean} isValid
     */
    ViewEntityComponent.prototype.onSubmitBasicMainform = function (formParams, isValid) {
        var _this = this;
        formParams['related_entity_id'] = (formParams['related_entity_id'] !== '') ? formParams['related_entity_id'].join() : '';
        formParams['contract_signed_date'] = (formParams['contract_signed_date'] !== '') ? moment__WEBPACK_IMPORTED_MODULE_7__(formParams['contract_signed_date']).format('YYYY-MM-DD') : '';
        formParams['gst_register_date'] = (formParams['gst_register_date'] !== '') ? moment__WEBPACK_IMPORTED_MODULE_7__(formParams['gst_register_date']).format('YYYY-MM-DD') : '';
        if (isValid) {
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].CLIENT_ADD, formParams).subscribe(function (Response) {
                _this.createBasicMainForm();
                _this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].VIEW_CLIENT]);
            });
        }
    };
    /**
     * Get Client List for Related Entity
     * @returns {{}}
     */
    ViewEntityComponent.prototype.getClientListSearch = function () {
        var params = {};
        var filter = {};
        filter['notequal'] = { 'discontinue_stage': 2 };
        params['compare'] = filter;
        return params;
    };
    // Events
    ViewEntityComponent.prototype.onClient = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].VIEW_CLIENT]);
    };
    ViewEntityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-entity',
            template: __webpack_require__(/*! ./view-entity.component.html */ "./src/app/admin/client-module/view-client/view-entity/view-entity.component.html"),
            styles: [__webpack_require__(/*! ./view-entity.component.scss */ "./src/app/admin/client-module/view-client/view-entity/view-entity.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__["SharedObjService"]])
    ], ViewEntityComponent);
    return ViewEntityComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=view-client-view-client-module.js.map