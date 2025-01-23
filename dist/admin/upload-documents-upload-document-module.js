(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-documents-upload-document-module"],{

/***/ "./src/app/admin/client-module/view-client/upload-documents/upload-document.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/upload-documents/upload-document.module.ts ***!
  \********************************************************************************************/
/*! exports provided: UploadDocumentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDocumentModule", function() { return UploadDocumentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _upload_documents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload-documents.component */ "./src/app/admin/client-module/view-client/upload-documents/upload-documents.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _upload_documents_component__WEBPACK_IMPORTED_MODULE_4__["UploadDocumentsComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    },
];
var UploadDocumentModule = /** @class */ (function () {
    function UploadDocumentModule() {
    }
    UploadDocumentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _upload_documents_component__WEBPACK_IMPORTED_MODULE_4__["UploadDocumentsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ],
            entryComponents: []
        })
    ], UploadDocumentModule);
    return UploadDocumentModule;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/upload-documents/upload-documents.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/upload-documents/upload-documents.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-document-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>CLIENT</span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onClient()\">VIEW CLIENT</a></span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">UPLOAD DOCUMENT | {{clientData?.code}} - {{clientData?.name}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!-- Start Upload Form -->\r\n  <div class=\"upload-document-form\" *ngIf=\"tabData['add_edit']\">\r\n    <div class=\"panel-title orange-color\">Document Upload</div>\r\n    <form [formGroup]=\"uploadDocumentForm\" #uploadForm=\"ngForm\"\r\n          (submit)=\"onSubmitUploadDocumentForm(uploadDocumentForm.value, uploadDocumentForm.valid)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Uploaded Document Name\" type=\"text\" name=\"uploadDocument\"\r\n                   formControlName=\"documentName\" readonly>\r\n            <mat-icon matSuffix (click)=\"onClear()\" *ngIf=\"documentName\">close</mat-icon>\r\n            <mat-icon matSuffix (click)=\"onChooseDocument()\">attach_file</mat-icon>\r\n            <input type=\"file\" [hidden]=\"true\" id=\"uploadDocument\" (change)=\"onUploadDocument($event)\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(uploadDocumentForm.get('documentName'))\"\r\n                            [errMsg]=\"validationMsg.DOCUMENT_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Document Type\" #docTypeRef formControlName=\"type\"\r\n                        (selectionChange)=\"updateValidation($event.value)\">\r\n              <mat-option *ngFor=\"let doc of documentTypeList\" [value]=\"doc?.key\">\r\n                {{ doc?.label }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(uploadDocumentForm.get('type'))\"\r\n                            [errMsg]=\"validationMsg.TYPE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\" *ngIf=\"docTypeRef.value == 2\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Other\" type=\"text\" formControlName=\"notes\"/>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(uploadDocumentForm.get('notes'))\"\r\n                            [errMsg]=\"validationMsg.NOTE_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MT-10\">\r\n          <div class=\"right-buttons\">\r\n            <button type=\"submit\" class=\"btn-primary\" [disabled]=\"uploadDocumentForm.invalid\">Upload</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- End Upload Form -->\r\n\r\n  <!-- Start Uploaded document table -->\r\n\r\n  <!-- End Grid Inner Header -->\r\n  <div class=\"grid-inner-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 PLR-0\">\r\n        <div class=\"panel-title orange-color\">Document Upload</div>\r\n      </div>\r\n      <div class=\"col-md-6 text-right\">\r\n        <div class=\"panel-title\" *ngIf=\"tabData['download'] && documentList.length\">\r\n          <a (click)=\"downloadAllDocument()\" class=\"cursor-pointer\">\r\n            <mat-icon>get_app</mat-icon>\r\n            Download all attachment</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Inner Header -->\r\n\r\n\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"5%\">Sr. No</th>\r\n          <th width=\"20%\"\r\n              (click)=\"getSortData('original_name', sortBy === 'original_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Document\r\n            <i *ngIf=\"sortBy === 'original_name'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'original_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'original_name' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'original_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"15%\"\r\n              (click)=\"getSortData('type', sortBy === 'type' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Document Type\r\n            <i *ngIf=\"sortBy === 'type'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'type' && sortOrder === 'asc', 'icon-down' :  sortBy === 'type' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'type' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"25%\"\r\n              (click)=\"getSortData('notes', sortBy === 'notes' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Notes\r\n            <i *ngIf=\"sortBy === 'notes'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'notes' && sortOrder === 'asc', 'icon-down' :  sortBy === 'notes' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'notes' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"12%\"\r\n              (click)=\"getSortData('created_by', sortBy === 'created_by' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Uploaded By\r\n            <i *ngIf=\"sortBy === 'created_by'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'created_by' && sortOrder === 'asc', 'icon-down' :  sortBy === 'created_by' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'created_by' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n          <th width=\"15%\"\r\n              (click)=\"getSortData('created_on', sortBy === 'created_on' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n            Uploaded On\r\n            <i *ngIf=\"sortBy === 'created_on'\"\r\n               [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'created_on' && sortOrder === 'asc', 'icon-down' :  sortBy === 'created_on' && sortOrder === 'desc'}\">\r\n              {{sortBy === 'created_on' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n            </i>\r\n          </th>\r\n\r\n          <th width=\"8%\"></th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody *ngIf=\"documentList.length\">\r\n          <tr *ngFor=\"let document of documentList; let i=index\">\r\n            <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n            <td width=\"20%\">{{document?.original_name}}</td>\r\n            <td width=\"15%\">\r\n              <mat-icon class=\"grid_icon_trip_origin mat-icon orange-color\">trip_origin\r\n              </mat-icon>\r\n              {{getDocumentType(document?.type)}}\r\n            </td>\r\n            <td width=\"25%\">{{document?.notes}}</td>\r\n            <td width=\"12%\">{{document?.created_by?.userfullname}}</td>\r\n            <td width=\"15%\">{{document?.created_on | date : 'dd-MM-yyyy HH:mm:ss'}}</td>\r\n            <td width=\"8%\">\r\n              <mat-icon *ngIf=\"tabData['download']\" class=\"wet-asphalt-color MR-5\" (click)=\"downloadDocument(document)\">\r\n                get_app\r\n              </mat-icon>\r\n              <mat-icon (click)=\"onEditDocument(document)\" [matTooltip]=\"'Edit'\">edit</mat-icon>\r\n              <mat-icon *ngIf=\"tabData['delete']\" class=\"red-color\" (click)=\"deleteDocument(document)\">delete</mat-icon>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <table *ngIf=\"documentList.length\">\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"10\">\r\n            <mat-paginator [length]=\"totalRecords\"\r\n                           [pageSize]=\"pageSize\"\r\n                           [pageIndex]=\"pageIndex\"\r\n                           [pageSizeOptions]=\"pageArray\"\r\n                           (page)=\"onPageChange($event)\">\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <!-- End Uploaded document table -->\r\n  <div *ngIf=\"!documentList.length\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/upload-documents/upload-documents.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/upload-documents/upload-documents.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvdXBsb2FkLWRvY3VtZW50cy91cGxvYWQtZG9jdW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/upload-documents/upload-documents.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/upload-documents/upload-documents.component.ts ***!
  \************************************************************************************************/
/*! exports provided: UploadDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDocumentsComponent", function() { return UploadDocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "../../node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
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

















var UploadDocumentsComponent = /** @class */ (function (_super) {
    __extends(UploadDocumentsComponent, _super);
    function UploadDocumentsComponent(_router, _fb, sanitizer, _commonCrudService, _sharedService, dialog) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this._fb = _fb;
        _this.sanitizer = sanitizer;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this.dialog = dialog;
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_7__["ValidationConstantMessage"]();
        // Data avraible
        _this.documentList = [];
        _this.clientData = null;
        _this.documentTypeList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["UploadDocumentType"];
        _this.docArray = [];
        // pagination Data
        _this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY;
        _this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY[1];
        _this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_13__["ADMINTABACCESS"].CLIENT_ENTITYDOCUMENT;
        return _this;
    }
    UploadDocumentsComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.clientData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].CLIENT);
        this.createUploadDocumentForm();
        this.getClientDocumentList(1);
    };
    /**
     * form initialization
     */
    UploadDocumentsComponent.prototype.createUploadDocumentForm = function () {
        this.uploadDocumentForm = this._fb.group({
            documentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    };
    /**
     * Method initialization
     * @param pageNumber
     * @param key
     * @param val
     */
    UploadDocumentsComponent.prototype.getClientDocumentList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].DOCUMENT_LIST + '/' + this.clientData.id, this.getQueryParams(pageNumber, key, val))
            .subscribe(function (response) {
            _this.handleDocumentListResponse(response);
        });
    };
    /**
     * Response handler for document list and pagination manage
     * @param response
     */
    UploadDocumentsComponent.prototype.handleDocumentListResponse = function (response) {
        this.documentList = response['payload']['data'];
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    // Events
    /**
     * page change event and call list api according to that
     * @param event
     */
    UploadDocumentsComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getClientDocumentList(event.pageIndex + 1);
    };
    /**
     * display document type by its key in list api.
     * @param documentType
     * @returns {string}
     */
    UploadDocumentsComponent.prototype.getDocumentType = function (documentType) {
        return this.documentTypeList.filter(function (elem) { return elem.key === documentType; })[0].label;
    };
    /**
     * uploading new document
     * @param formValue
     * @param isValid
     */
    UploadDocumentsComponent.prototype.onSubmitUploadDocumentForm = function (formValue, isValid) {
        var _this = this;
        if (isValid) {
            formValue['entity_id'] = this.clientData.id;
            formValue['module_id'] = this.clientData.module_id;
            formValue['notes'] = (formValue['notes'] !== '' && formValue['notes'] !== 'null' && formValue['notes'] !== null) ? formValue['notes'] : '';
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].DOCUMENT_STORE + '/' + this.clientData.id, formValue, this.docArray).subscribe(function (Response) {
                _this.createUploadDocumentForm();
                _this.uploadForm.resetForm();
                _this.getClientDocumentList(1);
            });
        }
    };
    UploadDocumentsComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getClientDocumentList(1, sortKey, sortVal);
    };
    /**
     * Upload document browse file method
     */
    UploadDocumentsComponent.prototype.onChooseDocument = function () {
        document.getElementById('uploadDocument').click();
    };
    /**
     * select event of document
     * @param event
     */
    UploadDocumentsComponent.prototype.onUploadDocument = function (event) {
        if (event.target.files) {
            this.docArray = [];
            for (var index = 0; index < event.target.files.length; index++) {
                // console.log(event.target.files[index].type);
                if (Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_4__["isValidDocumentType"])(event.target.files[index].type)) {
                    if (event.target.files[index].size > _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstant"].THREE_MB_IMAGE_SIZE_ALLOWED) {
                        this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_7__["ToastErrorMessages"].VALID_PDF_SIZE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["ToastType"].ERROR);
                        return;
                    }
                    else {
                        var file = event.target.files[0];
                        this.uploadDocumentForm.get('documentName').setValue(file.name);
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        this.docArray.push({
                            'reqKey': 'document',
                            'file': event.target.files,
                        });
                    }
                }
                else {
                    this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_7__["ToastErrorMessages"].VALID_PDF_SELECTION, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["ToastType"].ERROR);
                    return;
                }
            }
        }
    };
    /**
     * event for delete Document
     * @param document
     */
    UploadDocumentsComponent.prototype.deleteDocument = function (document) {
        var _this = this;
        var dialogRef;
        dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete document?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].DOCUMENT_DELETE, document.id).subscribe(function (response) {
                    _this.getClientDocumentList(1);
                });
            }
        });
    };
    /**
     * Download single client Document
     * @param document
     */
    UploadDocumentsComponent.prototype.downloadDocument = function (document) {
        this._commonCrudService.downloadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].DOCUMENT_DOWNLOAD + '/' + document.id).subscribe(function (response) {
            if (response && response.type) {
                var extension = response.type.split('/');
                file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"](response, document.original_name);
            }
        });
    };
    /**
     * Download All Document
     */
    UploadDocumentsComponent.prototype.downloadAllDocument = function () {
        this._commonCrudService.downloadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].DOCUMENT_DOWNLOAD_ZIP + '/' + this.clientData.id, { 'module_id': 1 }).subscribe(function (response) {
            if (response && response.type) {
                var extension = response.type.split('/');
                file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"](response, 'Download All Docs - ' + moment__WEBPACK_IMPORTED_MODULE_12__(new Date()).format('DD-MM-YYYY'));
            }
        });
    };
    /**
     * On clear document name
     */
    UploadDocumentsComponent.prototype.onClear = function () {
        this.documentName = '';
    };
    /**
     * On view client page redirect
     */
    UploadDocumentsComponent.prototype.onClient = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].VIEW_CLIENT]);
    };
    /**
     * helper to get query params and sorting
     * @param page
     * @param sortKey
     * @param sortOrder
     * @returns {{pageNumber: number, recordsPerPage: number}}
     */
    UploadDocumentsComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
        var params = {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
        sortKey ? params['sortBy'] = sortKey : '';
        sortOrder ? params['sortOrder'] = sortOrder : '';
        return params;
    };
    /**
     * On home page route
     */
    UploadDocumentsComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Update Validation
     * @param value
     */
    UploadDocumentsComponent.prototype.updateValidation = function (value) {
        if (value === 1) {
            this.uploadDocumentForm.get('notes').setValue(null);
            this.uploadDocumentForm.get('notes').setValidators(null);
            this.uploadDocumentForm.get('notes').updateValueAndValidity();
        }
        else if (value === 2) {
            this.uploadDocumentForm.get('notes').setValue(null);
            this.uploadDocumentForm.get('notes').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
            this.uploadDocumentForm.get('notes').updateValueAndValidity();
        }
    };
    /**
     * File Data
     * @param fileData
     */
    UploadDocumentsComponent.prototype.onEditDocument = function (fileData) {
        if (fileData) {
            var fileExt = fileData['filename'].split('.');
            var baseURL_1 = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].ADMIN_URL.split('/');
            // console.log(baseURL);
            if (Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_4__["isValidDocumentTypeToEditOrView"])(fileExt[1])) {
                fileData['file_url'] = baseURL_1[0] + '//' + baseURL_1[2] + fileData['documentpath'] + fileData['filename'];
                // console.log(fileData);
                var returnType = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_4__["isValidDocumentTypeToEditOrViewModeType"])(fileExt[1]);
                fileData['mode'] = returnType['mode'];
                fileData['documentType'] = returnType['documentType'];
                var fkey_1 = btoa('file_name');
                var fvalue_1 = btoa(fileData['filename'].toString());
                var fukey_1 = btoa('file_url');
                var fuvalue_1 = btoa(fileData['file_url'].toString());
                var fmkey_1 = btoa('mode');
                var fmvalue_1 = btoa(fileData['mode'].toString());
                var fdkey_1 = btoa('documentType');
                var fdvalue_1 = btoa(fileData['documentType'].toString());
                var fdpkey_1 = btoa('documentpath');
                var fdpvalue_1 = btoa(fileData['documentpath'].toString());
                var fdokey_1 = btoa('original_name');
                var fdovalue_1 = btoa(fileData['original_name'].toString());
                var ftkey_1 = btoa('file_type');
                var ftvalue_1 = btoa(fileExt[1].toString());
                this._router.navigate([]).then(function (result) {
                    window.open(baseURL_1[0] + '//' + baseURL_1[2] + '/loadDocument.php' + '?' + fkey_1 + '=' + fvalue_1 + '&' + fukey_1 + '=' + fuvalue_1 + '&' + fmkey_1 + '=' + fmvalue_1 + '&' + fdkey_1 + '=' + fdvalue_1 + '&' + fdpkey_1 + '=' + fdpvalue_1 + '&' + fdokey_1 + '=' + fdovalue_1 + '&' + ftkey_1 + '=' + ftvalue_1, '_blank');
                });
            }
            else {
            }
            // console.log(fileExt);
            // console.log(fileData);
        }
        /*this._sharedService.setClientData(GLOBALDATAKEYS.DOCUMENT_EDIT, null);
        this._sharedService.setClientData(GLOBALDATAKEYS.DOCUMENT_EDIT, fileData);
        this._router.navigate([]).then(result => {
          window.open('/' + AdminRoutes.SHARE_FILE_REPORT, '_blank');
        });*/
        // const fkey = btoa('file_name');
        // const fvalue = btoa(fileData.file_name.toString());
        // const fukey = btoa('file_url');
        // const fuvalue = btoa(fileData.file_url.toString());
        // const fmkey = btoa('mode');
        // const fmvalue = btoa(fileData.mode.toString());
        // const fdkey = btoa('documentType');
        // const fdvalue = btoa(fileData.documentType.toString());
        // this._router.navigate([]).then(result => {
        //   window.open('http://192.168.3.39:4301/loadDocument.php' + '?' + fkey + '=' + fvalue + '&' + fukey + '=' + fuvalue + '&' + fmkey + '=' + fmvalue + '&' + fdkey + '=' + fdvalue, '_blank');
        // });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('uploadForm'),
        __metadata("design:type", Object)
    ], UploadDocumentsComponent.prototype, "uploadForm", void 0);
    UploadDocumentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-documents',
            template: __webpack_require__(/*! ./upload-documents.component.html */ "./src/app/admin/client-module/view-client/upload-documents/upload-documents.component.html"),
            styles: [__webpack_require__(/*! ./upload-documents.component.scss */ "./src/app/admin/client-module/view-client/upload-documents/upload-documents.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_10__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]])
    ], UploadDocumentsComponent);
    return UploadDocumentsComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_16__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=upload-documents-upload-document-module.js.map