(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["software-software-module"],{

/***/ "./src/app/admin/client-module/software/add-edit-software/add-edit-software.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/client-module/software/add-edit-software/add-edit-software.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin (Client) Add Edit Software html view  -->\r\n<div class=\"add-edit-container\">\r\n  <mat-accordion>\r\n    <mat-expansion-panel [expanded]=\"isPanelOpen\" (opened)=\"createSoftwareForm()\" (closed)=\"onClosePanel()\">\r\n      <mat-expansion-panel-header (click)=\"changeOpenPanelState()\">\r\n        <mat-panel-title> {{software ? 'Update' : 'Add'}} Software</mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n\r\n      <form [formGroup]=\"addEditSoftwareForm\" #addEditSoftForm=\"ngForm\"\r\n            (submit)=\"onSubmitSoftwareForm(addEditSoftwareForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <ng-select class=\"custom\" [items]=\"clientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"entity_id\">\r\n            </ng-select>\r\n            <!--<div class=\"validation-msg\">-->\r\n            <!--<app-validation *ngIf=\"isRequiredField()\" errMsg=\"'Client name is required'\"></app-validation>-->\r\n            <!--</div>-->\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Software\" formControlName=\"software_id\">\r\n                <mat-option *ngFor=\"let softwareData of softwareMasterList\" [value]=\"softwareData.id\">\r\n                  {{softwareData.name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <!--<div class=\"validation-msg\">-->\r\n            <!--<app-validation *ngIf=\"isRequiredField()\" errMsg=\"'Client name is required'\"></app-validation>-->\r\n            <!--</div>-->\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"User Name\" formControlName=\"username\"/>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-10\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Password\" formControlName=\"password\"/>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-8 MT-10\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"URL Link\" formControlName=\"link\"/>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-8 MT-10\">\r\n            <mat-form-field>\r\n              <textarea matInput placeholder=\"Note\" formControlName=\"notes\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 MT-20\">\r\n            <div class=\"text-right\">\r\n              <button type=\"button\" class=\"btn-default MR-5\" (click)=\"onClickClear()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\" [disabled]=\"addEditSoftwareForm.invalid\">\r\n                {{software ? 'Update' : 'Add'}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/software/add-edit-software/add-edit-software.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/client-module/software/add-edit-software/add-edit-software.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddEditSoftwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditSoftwareComponent", function() { return AddEditSoftwareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
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








var AddEditSoftwareComponent = /** @class */ (function (_super) {
    __extends(AddEditSoftwareComponent, _super);
    function AddEditSoftwareComponent(_fb, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        _this.softwareMasterList = [];
        _this.onAddUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        // Data Variables
        _this.isPanelOpen = false;
        _this.software = null;
        _this.isOpenFilterView = false;
        _this.clientList = [];
        _this.userList = [];
        _this.selectedAmNotesRecord = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        _this.isEditAmNotes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        return _this;
    }
    AddEditSoftwareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordSubscriber = this.softwareRecord.subscribe(function (value) {
            if (value) {
                _this.software = value;
                _this.getClientList();
            }
        });
        this.panelSubscriber = this.panelStatus.subscribe(function (value) {
            _this.isPanelOpen = value;
            _this.createSoftwareForm();
        });
        this.getClientList();
    };
    /**
     * Get Client List
     */
    AddEditSoftwareComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = response;
        });
    };
    /**
     * Create software form
     */
    AddEditSoftwareComponent.prototype.createSoftwareForm = function () {
        this.addEditSoftwareForm = this._fb.group({
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](((this.software && this.software.entity_id.id && this.software.entity_id) ? (this.software.entity_id.id) : null), []),
            software_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](((this.software && this.software.software_id.id && this.software.software_id) ? (this.software.software_id.id) : ''), []),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](((this.software && this.software.username) ? (this.software.username) : ''), []),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](((this.software && this.software.password) ? (this.software.password) : ''), []),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](((this.software && this.software.link) ? (this.software.link) : ''), []),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](((this.software && this.software.notes) ? (this.software.notes) : ''), []),
        });
    };
    /**
     * Submit software form
     * @param form
     */
    AddEditSoftwareComponent.prototype.onSubmitSoftwareForm = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['entity_id'] = (form.value['entity_id']).toString();
            if (this.software) {
                form.value['_method'] = 'put';
                this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].CLIENT_SOFTWARE_UPDATE, this.software.id, form.value)
                    .subscribe(function (response) {
                    _this.handleSoftwareResponse(response);
                });
            }
            else {
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].CLIENT_SOFTWARE_ADD, form.value)
                    .subscribe(function (response) {
                    _this.handleSoftwareResponse(response);
                });
            }
        }
    };
    /**
     * Handle Software Response
     * @param response
     */
    AddEditSoftwareComponent.prototype.handleSoftwareResponse = function (response) {
        this.addEditSoftForm.resetForm();
        this.onAddUpdate.emit(true);
        this.onClickClear();
    };
    AddEditSoftwareComponent.prototype.onClickClear = function () {
        this.isPanelOpen = false;
    };
    AddEditSoftwareComponent.prototype.changeOpenPanelState = function () {
        if (!this.isPanelOpen) {
            this.isPanelOpen = true;
        }
        else if (this.isPanelOpen) {
            this.isPanelOpen = false;
        }
    };
    AddEditSoftwareComponent.prototype.onClosePanel = function () {
        this.software = null;
        this.createSoftwareForm();
    };
    AddEditSoftwareComponent.prototype.ngOnDestroy = function () {
        if (this.panelSubscriber) {
            this.panelSubscriber.unsubscribe();
        }
        if (this.recordSubscriber) {
            this.recordSubscriber.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addEditSoftForm'),
        __metadata("design:type", Object)
    ], AddEditSoftwareComponent.prototype, "addEditSoftForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"])
    ], AddEditSoftwareComponent.prototype, "softwareRecord", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddEditSoftwareComponent.prototype, "softwareMasterList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"])
    ], AddEditSoftwareComponent.prototype, "panelStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddEditSoftwareComponent.prototype, "onAddUpdate", void 0);
    AddEditSoftwareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-software',
            template: __webpack_require__(/*! ./add-edit-software.component.html */ "./src/app/admin/client-module/software/add-edit-software/add-edit-software.component.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_5__["SharedObjService"]])
    ], AddEditSoftwareComponent);
    return AddEditSoftwareComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/software/software.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/client-module/software/software.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin (Client) Software Container -->\r\n<div class=\"software-container client-open-menu-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>CLIENT</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">SOFTWARE</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- Start Add Edit Account Selector -->\r\n  <app-add-edit-software *ngIf=\"tabData['add_edit']\" [softwareRecord]=\"selectedSoftwareRecord\"\r\n                         [panelStatus]=\"isEditSoftware\"\r\n                         [softwareMasterList]=\"softwareMasterList\"\r\n                         (onAddUpdate)=\"getClientSoftwareList(page, sortBy, sortOrder)\"></app-add-edit-software>\r\n  <!-- End Add Edit Account Selector -->\r\n\r\n  <!-- Start Data Grid -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Software</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onToggleFilter()\">\r\n                <span>Filter</span> <i class=\"material-icons\">filter_list</i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <!--<div class=\"grid-search\">-->\r\n          <!--<div class=\"add-one\">-->\r\n          <!--<input placeholder=\"Search\" type=\"text\">-->\r\n          <!--<span class=\"prefix\">-->\r\n          <!--<i class=\"material-icons\">search</i>-->\r\n          <!--</span>-->\r\n          <!--</div>-->\r\n          <!--</div>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <i\r\n          class=\"material-icons\">close</i></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"entity\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Software\" formControlName=\"software_id\">\r\n                  <mat-option *ngFor=\"let softwareData of softwareMasterList\" [value]=\"softwareData.id\">\r\n                    {{softwareData.name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Username\" formControlName=\"username\"/>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"URL Link\" formControlName=\"link\"/>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Note\" formControlName=\"notes\"/>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-9 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"entityIdField.value\">\r\n          <span class=\"tag__title\">Trading Name :</span>\r\n          <span>\r\n            <ng-select [items]=\"clientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading Name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"entity\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n            </ng-select>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('entity', 'entity_id')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"softwareIdField.value\">\r\n          <span class=\"tag__title\">Software :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Software\"\r\n                          readonly\r\n                          formControlName=\"software_id\"\r\n                          (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"\r\n                          #selectRef>\r\n                <mat-option *ngFor=\"let softwareData of softwareMasterList\" [value]=\"softwareData.id\">{{softwareData.name}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('software_id')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"usernameField.value\">\r\n          <span class=\"tag__title\">User Name :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Username\" formControlName=\"username\"/>\r\n            </mat-form-field>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('username')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"linkField.value\">\r\n          <span class=\"tag__title\">URL Link :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"link\" formControlName=\"link\"/>\r\n            </mat-form-field>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('link')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"noteField.value\">\r\n          <span class=\"tag__title\">Note :</span>\r\n          <span>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"notes\"/>\r\n            </mat-form-field>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('notes')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\"\r\n             *ngIf=\"entityIdField.value || softwareIdField.value || usernameField.value || linkField.value || noteField.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container table-no-striped\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n\r\n            <th width=\"20%\"\r\n                (click)=\"getSortData('trading_name', sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Trading Name\r\n              <i *ngIf=\"sortBy === 'trading_name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'trading_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'trading_name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"10%\"\r\n                (click)=\"getSortData('name', sortBy === 'name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Software\r\n              <i *ngIf=\"sortBy === 'name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"10%\"\r\n                (click)=\"getSortData('username', sortBy === 'username' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Username\r\n              <i *ngIf=\"sortBy === 'username'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'username' && sortOrder === 'asc', 'icon-down' :  sortBy === 'username' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'username' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"10%\"\r\n                (click)=\"getSortData('password', sortBy === 'password' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Password\r\n              <i *ngIf=\"sortBy === 'password'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'password' && sortOrder === 'asc', 'icon-down' :  sortBy === 'password' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'password' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"17%\"\r\n                (click)=\"getSortData('link', sortBy === 'link' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">URL\r\n              Link\r\n              <i *ngIf=\"sortBy === 'link'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'link' && sortOrder === 'asc', 'icon-down' :  sortBy === 'link' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'link' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"20%\"\r\n                (click)=\"getSortData('notes', sortBy === 'notes' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">Note\r\n              <i *ngIf=\"sortBy === 'notes'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'notes' && sortOrder === 'asc', 'icon-down' :  sortBy === 'notes' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'notes' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"8%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table *ngIf=\"softwareList.length\">\r\n            <tbody>\r\n            <tr *ngFor=\"let software of softwareList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"20%\" class=\"word-break\">{{software?.entity_id?.trading_name | checkEmpty}}</td>\r\n              <td width=\"10%\">{{software?.software_id.name | checkEmpty}}</td>\r\n              <td width=\"10%\">{{software?.username | checkEmpty}}</td>\r\n              <td width=\"10%\">{{software?.password | checkEmpty}}</td>\r\n              <td width=\"17%\" class=\"word-break max_word_break\">{{software?.link | checkEmpty}}</td>\r\n              <td width=\"20%\" class=\"word-break\">{{software?.notes | checkEmpty}}</td>\r\n              <td width=\"8%\">\r\n                <mat-icon class=\"orange-color\" *ngIf=\"tabData['add_edit']\" (click)=\"updateSoftware(software)\">edit\r\n                </mat-icon>\r\n                <mat-icon class=\"red-color\" *ngIf=\"tabData['delete']\" (click)=\"onOpensoftwareModal(software)\">delete\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table *ngIf=\"softwareList.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n  <div *ngIf=\"softwareList.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n  <!-- End Data Grid -->\r\n</div>\r\n\r\n\r\n<!-- Start History modal-->\r\n<!--<div *ngIf=\"isOpenHistoryDialog\">\r\n  <app-update-client-history (close)=\"isOpenHistoryDialog = false\"></app-update-client-history>\r\n</div>-->\r\n<!-- End History modal-->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/software/software.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/client-module/software/software.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max_word_break {\n  max-width: 20px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vY2xpZW50LW1vZHVsZS9zb2Z0d2FyZS9DOlxcd2FtcDY0XFx3d3dcXGhrX2Zyb250ZW5kL3Byb2plY3RzXFxhZG1pblxcc3JjXFxhcHBcXGFkbWluXFxjbGllbnQtbW9kdWxlXFxzb2Z0d2FyZVxcc29mdHdhcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEIsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvc29mdHdhcmUvc29mdHdhcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF4X3dvcmRfYnJlYWsge1xyXG4gIG1heC13aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/client-module/software/software.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/client-module/software/software.component.ts ***!
  \********************************************************************/
/*! exports provided: SoftwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareComponent", function() { return SoftwareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SoftwareComponent = /** @class */ (function () {
    function SoftwareComponent(_fb, _router, dialog, _commonCrudService, _sharedService, _sharedObjService) {
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this._sharedObjService = _sharedObjService;
        // Constant Variables
        // Data Variables
        this.softwareList = [];
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilterView = false;
        this.isOpenHistoryDialog = false;
        this.clientList = [];
        this.selectedAmNotesRecord = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.isEditAmNotes = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.selectedSoftwareRecord = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.isEditSoftware = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_10__["ADMINTABACCESS"].CLIENT_ENTITYSOFTWARE;
    }
    Object.defineProperty(SoftwareComponent.prototype, "entityIdField", {
        get: function () {
            return this.filterForm.get('entity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoftwareComponent.prototype, "softwareIdField", {
        get: function () {
            return this.filterForm.get('software_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoftwareComponent.prototype, "usernameField", {
        get: function () {
            return this.filterForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoftwareComponent.prototype, "linkField", {
        get: function () {
            return this.filterForm.get('link');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoftwareComponent.prototype, "noteField", {
        get: function () {
            return this.filterForm.get('notes');
        },
        enumerable: true,
        configurable: true
    });
    SoftwareComponent.prototype.ngOnInit = function () {
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.initializationMethod();
    };
    /**
     * Initialization Methods
     */
    SoftwareComponent.prototype.initializationMethod = function () {
        this.getClientSoftwareList(1, 'id', 'desc');
        this.getClientList();
        this.getSoftwareList();
        this.createAdvanceFilterForm();
    };
    SoftwareComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            software_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.advanceFilterForm = this._fb.group({
            entity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            software_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    };
    /**
     * Get Client Software List
     * @param {number} pageNumber
     * @param {string} key
     * @param {string} val
     */
    SoftwareComponent.prototype.getClientSoftwareList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].CLIENT_SOFTWARE_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (Response) {
            _this.handleClientSoftwareResponse(Response);
        });
    };
    /**
     * Delete Client Software
     * @param id
     */
    SoftwareComponent.prototype.deleteClientSoftware = function (software) {
        var _this = this;
        this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].CLIENT_SOFTWARE_DELETE, software.id).subscribe(function (Response) {
            _this.getClientSoftwareList(_this.page, _this.sortBy, _this.sortOrder);
        });
    };
    /**
     * Handle Client Software List Response
     * @param response
     */
    SoftwareComponent.prototype.handleClientSoftwareResponse = function (response) {
        this.softwareList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Get Client List
     */
    SoftwareComponent.prototype.getSoftwareList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].SOFTWARE_LIST, {
            records: 'all',
            sortBy: 'name',
            sortOrder: 'asc'
        }).subscribe(function (response) {
            _this.softwareMasterList = response.payload.data;
        });
    };
    /**
     * Get Client List
     */
    SoftwareComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = response;
        });
    };
    /**
     * Default search params for client listing API
     * @returns {{compare: {notequal: {discontinue_stage: number}}}}
     */
    SoftwareComponent.prototype.getClientSearchParam = function () {
        return {
            compare: {
                notequal: {
                    discontinue_stage: 2
                }
            }
        };
    };
    /**
     * Open software modal
     */
    SoftwareComponent.prototype.onOpensoftwareModal = function (software) {
        var _this = this;
        var dialogConfigData = {
            data: {
                content: 'Are you sure want to delete?'
            },
            panelClass: 'add-bookkeeping-dialog-panel-container'
        };
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"], dialogConfigData);
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this.deleteClientSoftware(software);
            }
        });
    };
    /**
     * Update Client Software
     * @param {Software} software
     */
    SoftwareComponent.prototype.updateSoftware = function (software) {
        this.selectedSoftwareRecord.next(software);
        this.isEditSoftware.next(true);
    };
    /**
     * Open modal method
     */
    SoftwareComponent.prototype.onOpenModal = function () {
        this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
    };
    /**
     * Open filter
     */
    SoftwareComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = true;
    };
    /**
     * close filter
     */
    SoftwareComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    /**
     * Toogle Filter
     */
    SoftwareComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * On home page route
     */
    SoftwareComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Pagination page change method
     * @param event
     */
    SoftwareComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getClientSoftwareList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Export to Excel
     */
    SoftwareComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].CLIENT_SOFTWARE_EXPORT, params, this.getSearchParam(), 'Software ', 0).subscribe(function (response) {
        });
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    SoftwareComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'software_id') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'username' || elementName === 'link' || elementName === 'notes') {
            delete this.likeJSON[elementName];
        }
        else if (elementName === 'entity') {
            delete this.inJSON[JsonElementName];
            delete this.inJSON[elementName];
        }
        this.getClientSoftwareList(1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    SoftwareComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.isOpenFilterView = false;
        this.getClientSoftwareList(1, 'id', 'desc');
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    SoftwareComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'entity': form.value['entity'],
                'software_id': form.value['software_id'],
                'username': form.value['username'],
                'link': form.value['link'],
                'notes': form.value['notes'],
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    SoftwareComponent.prototype.setAdvanceFilter = function (form, flag) {
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
            if (form.value['entity'] !== '' && form.value['entity']) {
                // converting entity id array into comma separator
                form.value['entity_id'] = form.value['entity'];
                delete form.value['entity'];
            }
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'software_id') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'entity_id') {
                        this.inJSON[key] = form.value[key];
                    }
                    else if (key === 'notes' || key === 'username' || key === 'link') {
                        this.likeJSON[key] = form.value[key];
                    }
                }
            }
            this.isOpenFilterView = false;
            // console.log(this.equalJSON);
            // console.log(this.likeJSON);
            // console.log(this.inJSON);
            this.getClientSoftwareList(1, 'id', 'desc');
        }
    };
    /**
     * Esc event for close modal
     * @param event
     */
    SoftwareComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    SoftwareComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    SoftwareComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getClientSoftwareList(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    SoftwareComponent.prototype.getSearchParam = function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SoftwareComponent.prototype, "onKeydownHandler", null);
    SoftwareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-software',
            template: __webpack_require__(/*! ./software.component.html */ "./src/app/admin/client-module/software/software.component.html"),
            styles: [__webpack_require__(/*! ./software.component.scss */ "./src/app/admin/client-module/software/software.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"]])
    ], SoftwareComponent);
    return SoftwareComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/software/software.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/client-module/software/software.module.ts ***!
  \*****************************************************************/
/*! exports provided: SoftwareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareModule", function() { return SoftwareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _software_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./software.component */ "./src/app/admin/client-module/software/software.component.ts");
/* harmony import */ var _add_edit_software_add_edit_software_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit-software/add-edit-software.component */ "./src/app/admin/client-module/software/add-edit-software/add-edit-software.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _software_component__WEBPACK_IMPORTED_MODULE_5__["SoftwareComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]]
    }
];
var SoftwareModule = /** @class */ (function () {
    function SoftwareModule() {
    }
    SoftwareModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _software_component__WEBPACK_IMPORTED_MODULE_5__["SoftwareComponent"],
                _add_edit_software_add_edit_software_component__WEBPACK_IMPORTED_MODULE_6__["AddEditSoftwareComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ],
            entryComponents: []
        })
    ], SoftwareModule);
    return SoftwareModule;
}());



/***/ })

}]);
//# sourceMappingURL=software-software-module.js.map