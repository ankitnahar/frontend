(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bulk-allocation-bulk-allocation-module"],{

/***/ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-allocate-user/bulk-allocation-allocate-user.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-allocate-user/bulk-allocation-allocate-user.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start bulk allocation form-->\r\n<div class=\"bulk-allocation\">\r\n  <form [formGroup]=\"addAllocationUser\" (submit)=\"onSubmit(addAllocationUser)\">\r\n    <span class=\"panel-title orange-color\">Bulk Allocation</span>\r\n    <span class=\"panel-title on-right back-color\">You have selected <span class=\"primary-color\">{{(selectedFilterEntity) ? selectedFilterEntity.length : 0}}</span> clients.</span>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <ng-select class=\"custom\" [items]=\"userList\"\r\n                   [closeOnSelect]=\"true\"\r\n                   bindLabel=\"userfullname\"\r\n                   placeholder=\"Allocated User\"\r\n                   bindValue=\"id\"\r\n                   [virtualScroll]=\"true\"\r\n                   [searchable]=\"true\"\r\n                   [hideSelected]=\"true\"\r\n                   (change)=\"onUserChange($event)\"\r\n                   formControlName=\"user_id\">\r\n        </ng-select>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(addAllocationUser.get('user_id'))\"\r\n                          [errMsg]=\"validationMsg.ALLOCATED_USER_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-8 text-right orange-color PT-30\">\r\n        <span (click)=\"selectAll()\" class=\"cursor-pointer\">Select All</span> |\r\n        <span (click)=\"unselectAll()\" class=\"cursor-pointer\">DeSelect All</span>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 MB-15\">\r\n        <ng-select class=\"custom\" [items]=\"clientList\"\r\n                   [closeOnSelect]=\"true\"\r\n                   bindLabel=\"trading_name\"\r\n                   placeholder=\"Select Client\"\r\n                   bindValue=\"id\"\r\n                   [virtualScroll]=\"true\"\r\n                   [searchable]=\"true\"\r\n                   [hideSelected]=\"true\"\r\n                   multiple=\"true\"\r\n                   (change)=\"onClientChangeUpdateCount($event)\"\r\n                   formControlName=\"entity_id\">\r\n        </ng-select>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(addAllocationUser.get('entity_id'))\"\r\n                          [errMsg]=\"validationMsg.CLIENT_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Uploaded CSV File\" type=\"text\" name=\"uploadDocument\"\r\n                 formControlName=\"document_file\">\r\n          <mat-icon matSuffix (click)=\"onClear()\">close</mat-icon>\r\n          <mat-icon matSuffix (click)=\"onChooseDocument()\">attach_file</mat-icon>\r\n          <input type=\"file\" [hidden]=\"true\" id=\"uploadDocument\" (change)=\"onUploadDocument($event)\"/>\r\n        </mat-form-field>\r\n        <a href=\"{{url+'docs/bulk_allocation.csv'}}\" class=\"primary-color cursor-pointer\">\r\n          <mat-icon class=\"upload_ico\">get_app</mat-icon>\r\n          Download supported format</a>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <ng-select class=\"custom\" [items]=\"userList\"\r\n                   [closeOnSelect]=\"true\"\r\n                   bindLabel=\"userfullname\"\r\n                   placeholder=\"Re-allocated New User\"\r\n                   bindValue=\"id\"\r\n                   [virtualScroll]=\"true\"\r\n                   [searchable]=\"true\"\r\n                   [hideSelected]=\"true\"\r\n                   (change)=\"onNewUserChange($event)\"\r\n                   formControlName=\"new_user_id\">\r\n        </ng-select>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(addAllocationUser.get('new_user_id'))\"\r\n                          [errMsg]=\"validationMsg.RE_ALLOCATE_NEW_USER_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"services\" placeholder=\"Service\" required multiple=\"true\">\r\n            <!--<mat-option [value]=\"0\">Other</mat-option>-->\r\n            <mat-option *ngFor=\"let service of serviceList\" [value]=\"service?.id\">\r\n              {{ service?.service_name }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(addAllocationUser.get('services'))\"\r\n                          [errMsg]=\"validationMsg.SERVICE_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-12 MT-20\">\r\n        <span class=\"light-orange-color\">Note - If you are making changes in allocation of a other then team member, please change allocation of respective Team Member member also.\r\n</span>\r\n      </div>\r\n\r\n      <div class=\"col-md-12\">\r\n        <div class=\"col-md-12 text-right PR-0 MT-10\">\r\n          <button type=\"button\" class=\"btn-default MR-10\">Cancel</button>\r\n          <button [disabled]=\"addAllocationUser.invalid\" type=\"submit\" class=\"btn-primary\">Allocate User</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--End bulk allocation form-->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-allocate-user/bulk-allocation-allocate-user.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-allocate-user/bulk-allocation-allocate-user.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bulk-allocation .upload_ico {\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vd29ya2Zsb3ctbW9kdWxlL2J1bGstYWxsb2NhdGlvbi9idWxrLWFsbG9jYXRpb24tYWxsb2NhdGUtdXNlci9DOlxcd2FtcDY0XFx3d3dcXGhrX2Zyb250ZW5kL3Byb2plY3RzXFxhZG1pblxcc3JjXFxhcHBcXGFkbWluXFx3b3JrZmxvdy1tb2R1bGVcXGJ1bGstYWxsb2NhdGlvblxcYnVsay1hbGxvY2F0aW9uLWFsbG9jYXRlLXVzZXJcXGJ1bGstYWxsb2NhdGlvbi1hbGxvY2F0ZS11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0JBQXNCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvYWRtaW4vc3JjL2FwcC9hZG1pbi93b3JrZmxvdy1tb2R1bGUvYnVsay1hbGxvY2F0aW9uL2J1bGstYWxsb2NhdGlvbi1hbGxvY2F0ZS11c2VyL2J1bGstYWxsb2NhdGlvbi1hbGxvY2F0ZS11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1bGstYWxsb2NhdGlvbiB7XHJcbiAgLnVwbG9hZF9pY28ge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-allocate-user/bulk-allocation-allocate-user.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-allocate-user/bulk-allocation-allocate-user.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: BulkAllocationAllocateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkAllocationAllocateUserComponent", function() { return BulkAllocationAllocateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
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










var BulkAllocationAllocateUserComponent = /** @class */ (function (_super) {
    __extends(BulkAllocationAllocateUserComponent, _super);
    function BulkAllocationAllocateUserComponent(_fb, _router, _sharedService, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._router = _router;
        _this._sharedService = _sharedService;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_2__["ValidationConstantMessage"]();
        // Other variables
        _this.userList = [];
        _this.clientList = [];
        _this.serviceList = [];
        _this.selectedFilterEntity = null;
        _this.clientListMultiple = [];
        _this.docArray = [];
        _this.url = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["BASE"].IMAGE_PATH;
        return _this;
    }
    BulkAllocationAllocateUserComponent.prototype.ngOnInit = function () {
        this.getUserList();
        this.getClientList();
        this.createAllocateUserForm();
    };
    /**
     * Get User List
     */
    BulkAllocationAllocateUserComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.userList = response;
        });
    };
    BulkAllocationAllocateUserComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, { 'compare': { 'notequal': { 'discontinue_stage': 2 } } }).subscribe(function (response) {
            _this.clientList = response;
        });
    };
    /**
     * Get Client List
     */
    BulkAllocationAllocateUserComponent.prototype.onUserChange = function (selectedData) {
        var _this = this;
        var userId = (selectedData) ? selectedData.id : 0;
        if (userId > 0) {
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BULKALLOCATION_ENTITY, userId, {}, {}).subscribe(function (response) {
                if (response) {
                    _this.selectedFilterEntity = [];
                    _this.addAllocationUser.get('entity_id').setValue(null);
                    _this.clientList = [];
                    _this.clientList = response.payload.data;
                }
            });
        }
    };
    /**
     * Get Client List
     */
    BulkAllocationAllocateUserComponent.prototype.onNewUserChange = function (selectedData) {
        var _this = this;
        var userId = (selectedData) ? selectedData.id : 0;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BULKALLOCATION_SERVICE, userId, {}, {}).subscribe(function (response) {
            if (response) {
                _this.serviceList = response.payload.data;
            }
        });
    };
    /**
     * Select All Client
     */
    BulkAllocationAllocateUserComponent.prototype.selectAll = function () {
        this.selectedFilterEntity = this.clientList.map(function (x) { return x.id; });
        this.addAllocationUser.get('entity_id').setValue(this.selectedFilterEntity);
    };
    /**
     * UnSelect All Client
     */
    BulkAllocationAllocateUserComponent.prototype.unselectAll = function () {
        this.selectedFilterEntity = [];
        this.addAllocationUser.get('entity_id').setValue(null);
    };
    /**
     * Create Add New Invoice Form
     */
    BulkAllocationAllocateUserComponent.prototype.createAllocateUserForm = function () {
        this.addAllocationUser = this._fb.group({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"],
            document_file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            services: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            new_user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    BulkAllocationAllocateUserComponent.prototype.onSubmit = function (form) {
        var _this = this;
        form.value['entity_id'] = form.value['entity_id'].join(',');
        form.value['services'] = form.value['services'].join(',');
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BULKALLOCATION_SAVE, form.value)
            .subscribe(function (response) {
            _this.createAllocateUserForm();
        });
    };
    /**
     * Upload document browse file method
     */
    /*onChooseDocument() {
      document.getElementById('uploadDocument').click();
    }*/
    /**
     * On clear document name
     */
    /*onClear() {
      this.documentName = '';
    }*/
    /**
     * Download supported documents
     * */
    /*downloadSupportedDocument() {
  
    }*/
    /**
     * On Client Change Update Count
     */
    BulkAllocationAllocateUserComponent.prototype.onClientChangeUpdateCount = function (selectedData) {
        if (selectedData) {
            this.selectedFilterEntity = selectedData.map(function (x) { return x.id; });
        }
    };
    /**
     * On clear document name
     */
    BulkAllocationAllocateUserComponent.prototype.onClear = function () {
        this.addAllocationUser.get('document_file').setValue(null);
    };
    /**
     * Upload document browse file method
     */
    BulkAllocationAllocateUserComponent.prototype.onChooseDocument = function () {
        document.getElementById('uploadDocument').click();
    };
    /**
     * select event of document
     * @param event
     */
    BulkAllocationAllocateUserComponent.prototype.onUploadDocument = function (event) {
        var _this = this;
        if (event.target.files) {
            this.docArray = [];
            for (var index = 0; index < event.target.files.length; index++) {
                var name_1 = event.target.files[index].name;
                var lastDot = name_1.lastIndexOf('.');
                var ext = name_1.substring(lastDot + 1);
                // console.log(event.target.files[index].type);
                if (ext.toLowerCase() === 'csv') {
                    if (event.target.files[index].size > _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["AppConstant"].THREE_MB_IMAGE_SIZE_ALLOWED) {
                        this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_2__["ToastErrorMessages"].VALID_PDF_SIZE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["ToastType"].ERROR);
                        return;
                    }
                    else {
                        var file = event.target.files[0];
                        this.addAllocationUser.get('document_file').setValue(file.name);
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        this.docArray.push({
                            'reqKey': 'document_file',
                            'file': event.target.files,
                        });
                        if (this.docArray) {
                            var userID = (this.addAllocationUser.get('user_id').value) ? this.addAllocationUser.get('user_id').value : 0;
                            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BULKALLOCATION_FETCHENTITY, { 'user_id': userID }, this.docArray).subscribe(function (response) {
                                // this.checkClient
                                // console.log(response);
                                if (response) {
                                    _this.onCSVFileRespone(response);
                                }
                            });
                        }
                    }
                }
                else {
                    this.onClear();
                    this._sharedService.setToastMessage('Please upload valid csv file.', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["ToastType"].ERROR);
                    return;
                }
            }
        }
    };
    /**
     * Get Client List
     */
    BulkAllocationAllocateUserComponent.prototype.onCSVFileRespone = function (responseData) {
        if (responseData) {
            // this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
            this.clientList = responseData.payload.data;
            this.selectedFilterEntity = [];
            this.addAllocationUser.get('entity_id').setValue(null);
            this.selectedFilterEntity = this.clientList.map(function (x) { return x.id; });
            this.addAllocationUser.get('entity_id').setValue(this.selectedFilterEntity);
            this.addAllocationUser.get('document_file').setValue(null);
            // });
        }
    };
    BulkAllocationAllocateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bulk-allocation-allocate-user',
            template: __webpack_require__(/*! ./bulk-allocation-allocate-user.component.html */ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-allocate-user/bulk-allocation-allocate-user.component.html"),
            styles: [__webpack_require__(/*! ./bulk-allocation-allocate-user.component.scss */ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-allocate-user/bulk-allocation-allocate-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"]])
    ], BulkAllocationAllocateUserComponent);
    return BulkAllocationAllocateUserComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-deallocate-user/bulk-allocation-deallocate-user.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-deallocate-user/bulk-allocation-deallocate-user.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start bulk de-allocation form-->\r\n<div class=\"bulk-allocation\">\r\n  <form [formGroup]=\"addDeAllocationUser\" (submit)=\"onSubmit(addDeAllocationUser)\">\r\n    <span class=\"panel-title\">Bulk Deallocation</span>\r\n    <span class=\"panel-title on-right back-color\">You have selected <span class=\"primary-color\">{{(selectedFilterEntity) ? selectedFilterEntity.length : 0}}</span> clients.</span>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <ng-select class=\"custom\" [items]=\"userList\"\r\n                   [closeOnSelect]=\"true\"\r\n                   bindLabel=\"userfullname\"\r\n                   placeholder=\"Deallocated User\"\r\n                   bindValue=\"id\"\r\n                   [virtualScroll]=\"true\"\r\n                   [searchable]=\"true\"\r\n                   [hideSelected]=\"true\"\r\n                   (change)=\"onUserChange($event)\"\r\n                   formControlName=\"user_id\">\r\n        </ng-select>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(addDeAllocationUser.get('user_id'))\"\r\n                          [errMsg]=\"validationMsg.ALLOCATED_USER_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-8 text-right orange-color PT-30\">\r\n        <span (click)=\"selectAll()\" class=\"cursor-pointer\">Select All</span> |\r\n        <span (click)=\"unselectAll()\" class=\"cursor-pointer\">DeSelect All</span>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 MB-15\">\r\n        <ng-select class=\"custom\" [items]=\"clientList\"\r\n                   [closeOnSelect]=\"true\"\r\n                   bindLabel=\"trading_name\"\r\n                   placeholder=\"Select Client\"\r\n                   bindValue=\"id\"\r\n                   [virtualScroll]=\"true\"\r\n                   [searchable]=\"true\"\r\n                   [hideSelected]=\"true\"\r\n                   multiple=\"true\"\r\n                   (change)=\"onClientChangeUpdateCount($event)\"\r\n                   formControlName=\"entity_id\">\r\n        </ng-select>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(addDeAllocationUser.get('entity_id'))\"\r\n                          [errMsg]=\"validationMsg.CLIENT_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Uploaded CSV File\" type=\"text\" name=\"uploadDocument\"\r\n                 formControlName=\"document_file\">\r\n          <mat-icon matSuffix (click)=\"onClear()\">close</mat-icon>\r\n          <mat-icon matSuffix (click)=\"onChooseDocument()\">attach_file</mat-icon>\r\n          <input type=\"file\" [hidden]=\"true\" id=\"uploadDocument\" (change)=\"onUploadDocument($event)\"/>\r\n        </mat-form-field>\r\n        <a href=\"{{url+'docs/bulk_allocation.csv'}}\" class=\"primary-color cursor-pointer\">\r\n          <mat-icon class=\"upload_ico\">get_app</mat-icon>\r\n          Download supported format</a>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <mat-select formControlName=\"services\" placeholder=\"Service\" required multiple=\"true\">\r\n            <mat-option [value]=\"0\">Other</mat-option>\r\n            <mat-option *ngFor=\"let service of serviceList\" [value]=\"service?.id\">\r\n              {{ service?.service_name }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <div class=\"validation-msg\">\r\n          <app-validation *ngIf=\"isRequiredField(addDeAllocationUser.get('services'))\"\r\n                          [errMsg]=\"validationMsg.SERVICE_REQUIRED\"></app-validation>\r\n        </div>\r\n      </div>\r\n      <!--<div class=\"col-md-4\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Uploaded Document Name\" type=\"text\" name=\"uploadDocument\"\r\n                 formControlName=\"documentName\">\r\n          <mat-icon matSuffix (click)=\"onClear()\">close</mat-icon>\r\n          <mat-icon matSuffix (click)=\"onChooseDocument()\">attach_file</mat-icon>\r\n          <input type=\"file\" [hidden]=\"true\"/>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 MT-5\">\r\n        <a (click)=\"downloadSupportedDocument()\" class=\"primary-color\">\r\n          <mat-icon class=\"upload_ico\">get_app</mat-icon>\r\n          Download supported format</a>\r\n      </div>-->\r\n\r\n      <div class=\"col-md-12\">\r\n        <div class=\"col-md-12 text-right PR-0 MT-10\">\r\n          <button type=\"button\" class=\"btn-default MR-10\">Cancel</button>\r\n          <button [disabled]=\"addDeAllocationUser.invalid\" type=\"submit\" class=\"btn-primary\">Deallocate User</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--End bulk De-allocation form-->\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-deallocate-user/bulk-allocation-deallocate-user.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-deallocate-user/bulk-allocation-deallocate-user.component.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bulk-allocation .upload_ico {\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vd29ya2Zsb3ctbW9kdWxlL2J1bGstYWxsb2NhdGlvbi9idWxrLWFsbG9jYXRpb24tZGVhbGxvY2F0ZS11c2VyL0M6XFx3YW1wNjRcXHd3d1xcaGtfZnJvbnRlbmQvcHJvamVjdHNcXGFkbWluXFxzcmNcXGFwcFxcYWRtaW5cXHdvcmtmbG93LW1vZHVsZVxcYnVsay1hbGxvY2F0aW9uXFxidWxrLWFsbG9jYXRpb24tZGVhbGxvY2F0ZS11c2VyXFxidWxrLWFsbG9jYXRpb24tZGVhbGxvY2F0ZS11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0JBQXNCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvYWRtaW4vc3JjL2FwcC9hZG1pbi93b3JrZmxvdy1tb2R1bGUvYnVsay1hbGxvY2F0aW9uL2J1bGstYWxsb2NhdGlvbi1kZWFsbG9jYXRlLXVzZXIvYnVsay1hbGxvY2F0aW9uLWRlYWxsb2NhdGUtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idWxrLWFsbG9jYXRpb24ge1xyXG4gIC51cGxvYWRfaWNvIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-deallocate-user/bulk-allocation-deallocate-user.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-deallocate-user/bulk-allocation-deallocate-user.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: BulkAllocationDeallocateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkAllocationDeallocateUserComponent", function() { return BulkAllocationDeallocateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
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










var BulkAllocationDeallocateUserComponent = /** @class */ (function (_super) {
    __extends(BulkAllocationDeallocateUserComponent, _super);
    function BulkAllocationDeallocateUserComponent(_fb, _router, _sharedService, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._router = _router;
        _this._sharedService = _sharedService;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        _this.userList = [];
        _this.clientList = [];
        _this.serviceList = [];
        _this.selectedFilterEntity = null;
        _this.clientListMultiple = [];
        _this.docArray = [];
        _this.url = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["BASE"].IMAGE_PATH;
        return _this;
    }
    BulkAllocationDeallocateUserComponent.prototype.ngOnInit = function () {
        this.getUserList();
        this.getClientList();
        this.createDeAllocateUserForm();
    };
    /**
     * Create Add New Invoice Form
     */
    BulkAllocationDeallocateUserComponent.prototype.createDeAllocateUserForm = function () {
        this.addDeAllocationUser = this._fb.group({
            document_file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"],
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            services: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    /**
     * Get User List
     */
    BulkAllocationDeallocateUserComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.userList = response;
        });
    };
    BulkAllocationDeallocateUserComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, { 'compare': { 'notequal': { 'discontinue_stage': 2 } } }).subscribe(function (response) {
            _this.clientList = response;
        });
    };
    BulkAllocationDeallocateUserComponent.prototype.onClientChangeUpdateCount = function (selectedData) {
        if (selectedData) {
            this.selectedFilterEntity = selectedData.map(function (x) { return x.id; });
        }
    };
    /**
     * Get Client List
     */
    BulkAllocationDeallocateUserComponent.prototype.onUserChange = function (selectedData) {
        var _this = this;
        var userId = (selectedData) ? selectedData.id : 0;
        if (userId > 0) {
            this.selectedFilterEntity = [];
            this.addDeAllocationUser.get('entity_id').setValue(null);
            this.clientList = [];
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].BULKALLOCATION_ENTITY, userId, {}, {}).subscribe(function (response) {
                if (response) {
                    _this.clientList = response.payload.data;
                }
            });
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].BULKALLOCATION_SERVICE, userId, {}, {}).subscribe(function (response) {
                if (response) {
                    _this.serviceList = response.payload.data;
                }
            });
        }
    };
    /**
     * Select All Client
     */
    BulkAllocationDeallocateUserComponent.prototype.selectAll = function () {
        this.selectedFilterEntity = this.clientList.map(function (x) { return x.id; });
        this.addDeAllocationUser.get('entity_id').setValue(this.selectedFilterEntity);
    };
    /**
     * UnSelect All Client
     */
    BulkAllocationDeallocateUserComponent.prototype.unselectAll = function () {
        this.selectedFilterEntity = [];
        this.addDeAllocationUser.get('entity_id').setValue(null);
    };
    BulkAllocationDeallocateUserComponent.prototype.onSubmit = function (form) {
        var _this = this;
        form.value['entity_id'] = form.value['entity_id'].join(',');
        form.value['services'] = form.value['services'].join(',');
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].BULKALLOCATION_DEALLOCATION, form.value)
            .subscribe(function (response) {
            _this.createDeAllocateUserForm();
        });
    };
    /**
     * On clear document name
     */
    BulkAllocationDeallocateUserComponent.prototype.onClear = function () {
        this.addDeAllocationUser.get('document_file').setValue(null);
    };
    /**
     * Upload document browse file method
     */
    BulkAllocationDeallocateUserComponent.prototype.onChooseDocument = function () {
        document.getElementById('uploadDocument').click();
    };
    /**
     * select event of document
     * @param event
     */
    BulkAllocationDeallocateUserComponent.prototype.onUploadDocument = function (event) {
        var _this = this;
        if (event.target.files) {
            this.docArray = [];
            for (var index = 0; index < event.target.files.length; index++) {
                // console.log(event.target.files[index].type);
                var name_1 = event.target.files[index].name;
                var lastDot = name_1.lastIndexOf('.');
                var ext = name_1.substring(lastDot + 1);
                // console.log(event.target.files[index].type);
                if (ext.toLowerCase() === 'csv') {
                    if (event.target.files[index].size > _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["AppConstant"].THREE_MB_IMAGE_SIZE_ALLOWED) {
                        this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["ToastErrorMessages"].VALID_PDF_SIZE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["ToastType"].ERROR);
                        return;
                    }
                    else {
                        var file = event.target.files[0];
                        this.addDeAllocationUser.get('document_file').setValue(file.name);
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        this.docArray.push({
                            'reqKey': 'document_file',
                            'file': event.target.files,
                        });
                        if (this.docArray) {
                            var userID = (this.addDeAllocationUser.get('user_id').value) ? this.addDeAllocationUser.get('user_id').value : 0;
                            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].BULKALLOCATION_FETCHENTITY, { 'user_id': userID }, this.docArray).subscribe(function (response) {
                                // this.checkClient
                                // console.log(response);
                                if (response) {
                                    _this.onCSVFileRespone(response);
                                }
                            });
                        }
                    }
                }
                else {
                    this.onClear();
                    this._sharedService.setToastMessage('Please upload valid csv file.', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_9__["ToastType"].ERROR);
                    return;
                }
            }
        }
    };
    /**
     * Get Client List
     */
    BulkAllocationDeallocateUserComponent.prototype.onCSVFileRespone = function (responseData) {
        if (responseData) {
            // this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
            this.clientList = responseData.payload.data;
            this.selectedFilterEntity = [];
            this.addDeAllocationUser.get('entity_id').setValue(null);
            this.selectedFilterEntity = this.clientList.map(function (x) { return x.id; });
            this.addDeAllocationUser.get('entity_id').setValue(this.selectedFilterEntity);
            this.addDeAllocationUser.get('document_file').setValue(null);
            // });
        }
    };
    BulkAllocationDeallocateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bulk-allocation-deallocate-user',
            template: __webpack_require__(/*! ./bulk-allocation-deallocate-user.component.html */ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-deallocate-user/bulk-allocation-deallocate-user.component.html"),
            styles: [__webpack_require__(/*! ./bulk-allocation-deallocate-user.component.scss */ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-deallocate-user/bulk-allocation-deallocate-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"]])
    ], BulkAllocationDeallocateUserComponent);
    return BulkAllocationDeallocateUserComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/bulk-allocation/bulk-allocation.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bulk-allocation-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>WORKFLOW</span>\r\n\r\n          <mat-icon class=\"material-icons\">keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">BULK ALLOCATION</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <!--start tab menu-->\r\n  <div>\r\n    <mat-tab-group (selectedTabChange)=\"onSelectTab($event)\">\r\n      <mat-tab label=\"Bulk Allocation\">\r\n        <div>\r\n          <app-bulk-allocation-allocate-user *ngIf=\"isActiveTab===0\"></app-bulk-allocation-allocate-user>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Deallocate User\">\r\n        <div>\r\n          <app-bulk-allocation-deallocate-user *ngIf=\"isActiveTab===1\"></app-bulk-allocation-deallocate-user>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/bulk-allocation/bulk-allocation.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS9idWxrLWFsbG9jYXRpb24vYnVsay1hbGxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/bulk-allocation/bulk-allocation.component.ts ***!
  \************************************************************************************/
/*! exports provided: BulkAllocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkAllocationComponent", function() { return BulkAllocationComponent; });
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



var BulkAllocationComponent = /** @class */ (function () {
    function BulkAllocationComponent(_router) {
        this._router = _router;
        this.isActiveTab = 0;
    }
    BulkAllocationComponent.prototype.ngOnInit = function () {
    };
    BulkAllocationComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     *  On Tab Change
     */
    BulkAllocationComponent.prototype.onSelectTab = function (tabChangeEvent) {
        this.isActiveTab = tabChangeEvent['index'];
    };
    BulkAllocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bulk-allocation',
            template: __webpack_require__(/*! ./bulk-allocation.component.html */ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation.component.html"),
            styles: [__webpack_require__(/*! ./bulk-allocation.component.scss */ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BulkAllocationComponent);
    return BulkAllocationComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/workflow-module/bulk-allocation/bulk-allocation.module.ts ***!
  \*********************************************************************************/
/*! exports provided: BulkAllocationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkAllocationModule", function() { return BulkAllocationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bulk_allocation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bulk-allocation.component */ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _bulk_allocation_allocate_user_bulk_allocation_allocate_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bulk-allocation-allocate-user/bulk-allocation-allocate-user.component */ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-allocate-user/bulk-allocation-allocate-user.component.ts");
/* harmony import */ var _bulk_allocation_deallocate_user_bulk_allocation_deallocate_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bulk-allocation-deallocate-user/bulk-allocation-deallocate-user.component */ "./src/app/admin/workflow-module/bulk-allocation/bulk-allocation-deallocate-user/bulk-allocation-deallocate-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _bulk_allocation_component__WEBPACK_IMPORTED_MODULE_2__["BulkAllocationComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]],
    },
];
var BulkAllocationModule = /** @class */ (function () {
    function BulkAllocationModule() {
    }
    BulkAllocationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_bulk_allocation_component__WEBPACK_IMPORTED_MODULE_2__["BulkAllocationComponent"], _bulk_allocation_allocate_user_bulk_allocation_allocate_user_component__WEBPACK_IMPORTED_MODULE_6__["BulkAllocationAllocateUserComponent"], _bulk_allocation_deallocate_user_bulk_allocation_deallocate_user_component__WEBPACK_IMPORTED_MODULE_7__["BulkAllocationDeallocateUserComponent"]]
        })
    ], BulkAllocationModule);
    return BulkAllocationModule;
}());



/***/ })

}]);
//# sourceMappingURL=bulk-allocation-bulk-allocation-module.js.map