(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["worksheet-dashboard-action-prepare-query-prepare-query-module"],{

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/prepare-query/prepare-query.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/prepare-query/prepare-query.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start BreadCrumb Top Header -->\r\n<div class=\"breadcrumb-top-header\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-9 PL-0\">\r\n      <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n        <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n        <span>WORKFLOW</span>\r\n\r\n        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n        <span class=\"active\">\r\n            <a (click)=\"onWorksheet()\">WORKSHEET</a>\r\n          </span>\r\n\r\n        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n        <span class=\"active\">PREPARE QUERY</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 PR-0\">\r\n      <div class=\"breadcrumb-top-header__right-menu\">\r\n        <ul>\r\n          <li>\r\n            <a>\r\n              <label class=\"black-color\">Quick actions</label>\r\n              <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n              <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                <button mat-menu-item class=\"menu-header\">\r\n                  <h3>Quick Action</h3>\r\n                </button>\r\n                <!--    <button mat-menu-item (click)=\"onOpenQuickMenu('addNewWorksheet')\"\r\n                            *ngIf=\"worksheetTabIDData['add_edit']\">Add New Worksheet\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"onOpenQuickMenu('todayWorksheet')\">Today's Worksheet</button>\r\n                    <button mat-menu-item (click)=\"onOpenQuickMenu('todayTimesheet')\">Today's Timesheet</button>\r\n                    <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetHierarchy')\"\r\n                            *ngIf=\"tabDataWorksheetHierarchy['view']\">Worksheet Hierarchy\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"onOpenQuickMenu('subClientList')\"\r\n                            *ngIf=\"tabDataWorksheetSubClientList['view']\">Sub Client List\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"onOpenQuickMenu('worksheetMasterChecklist')\"\r\n                            *ngIf=\"tabDataWorksheetMasterChecklist['view']\">Worksheet Master Checklist\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"onOpenQuickMenu('changeMultipleWorksheetStatus')\"\r\n                            *ngIf=\"isMultipleStatusUpdate\">Change Multiple Worksheet Status\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"onOpenQuickMenu('trainingList')\"\r\n                            *ngIf=\"tabDataWorksheetTraining['view']\">Training List\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"onOpenQuickMenu('revieworKnockBackWorksheet')\"\r\n                            *ngIf=\"tabDataWorksheetReviewerList['view']\">Review or Knock Back\r\n                      Worksheet\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"onOpenQuickMenu('peerReviewWorksheetListing')\"\r\n                            *ngIf=\"tabDataWorksheetPeerReviewerList['view']\">Peer Review Worksheet\r\n                      Listing\r\n                    </button>-->\r\n              </mat-menu>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- End BreadCrumb Top Header -->\r\n\r\n\r\n<!--Edit Queries header -->\r\n<div class=\"with-filter-grid-container\">\r\n  <form [formGroup]=\"addPrepareQueryForm\" (submit)=\"onSubmit(addPrepareQueryForm)\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Client : {{worksheetData.trading_name}} | Period {{worksheetData.start_date | date : 'dd-MM-yyyy'}} To\r\n            {{worksheetData.end_date | date : 'dd-MM-yyyy'}}</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <ng-container *ngIf=\"getFilterBankArray().controls.length > 0\">\r\n      <mat-accordion [multi]=\"true\" *ngFor=\"let bankData of getFilterBankArray().controls; let b = index;\" class=\"prepare_query_panel\">\r\n        <mat-expansion-panel [expanded]=\"bankData.get('is_checked').value === 1\"\r\n                             (opened)=\"bankData.get('is_checked').value === 1 ? true : false\"\r\n                             (closed)=\"bankData.get('is_checked').value === 0 ? true : false\">\r\n          <mat-expansion-panel-header class=\"PLR-10\">\r\n            <mat-panel-title>\r\n              <span class=\"bank_name\">\r\n              <mat-checkbox [checked]=\"bankData.get('is_checked').value === 1 ? true : false\"\r\n                            (change)=\"onCheckBankData(b,'is_checked',$event,bankData.get('is_checked').value)\" class=\"MR-15\">&nbsp;</mat-checkbox>\r\n              {{bankData.get('bank_name').value}} - {{bankData.get('account_no').value}}</span>\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div>\r\n\r\n            <div class=\"row col-md-12\">\r\n              <div class=\"col-md-2\">\r\n                <mat-form-field>\r\n                  <input matInput [matDatepicker]=\"fromdateRef\" placeholder=\"From Date\"\r\n                         [formControl]=\"bankData.get('start_date')\" (dateChange)=\"setToDate($event.value, b)\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"fromdateRef\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #fromdateRef></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <mat-form-field>\r\n                  <input matInput [min]=\"from_date[b]\" [matDatepicker]=\"fromdateRef1\" placeholder=\"To Date\"\r\n                         [formControl]=\"bankData.get('end_date')\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"fromdateRef1\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #fromdateRef1></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <mat-radio-group>\r\n                  <mat-radio-button value=\"0\" (change)=\"onSelectQueryType($event, b)\">Upload CSV File</mat-radio-button>\r\n                  <mat-radio-button value=\"1\" (change)=\"onSelectQueryType($event, b)\">Add Manual Row</mat-radio-button>\r\n                </mat-radio-group>\r\n              </div>\r\n              <div class=\"col-md-4\" *ngIf=\"bankData.get('queryType').value === 0\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Uploaded CSV File\" type=\"text\" name=\"uploadDocument\"\r\n                         [formControl]=\"bankData.get('upload')\" readonly>\r\n                  <mat-icon matSuffix (click)=\"onClear(b)\" *ngIf=\"bankData.get('upload').value\">close</mat-icon>\r\n                  <mat-icon matSuffix (click)=\"onFileSelect('addDocument_'+b)\">attach_file</mat-icon>\r\n                  <input type=\"file\" id=\"{{'addDocument_'+b}}\" (change)=\"onFileChange($event, b)\" [hidden]=\"true\"\r\n                         accept=\".csv\"/>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-1 MT-15 PLR-0\" *ngIf=\"bankData.get('queryType').value === 0\">\r\n                <a href=\"{{url+'docs/querysample.csv'}}\" class=\"primary-color cursor-pointer\">\r\n                  <mat-icon class=\"primary-color v-align-middle\" [matTooltip]=\"'Download Supported Format'\">\r\n                  </mat-icon>\r\n                  Download Sample Format\r\n                </a>\r\n              </div>\r\n              <div class=\"col-md-1\" *ngIf=\"bankData.get('queryType').value === 1\">\r\n                <mat-form-field>\r\n                  <input matInput type=\"number\" placeholder=\"Rows\" [formControl]=\"bankData.get('rows')\"/>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n      <!-- Start Table -->\r\n\r\n      <div class=\"col-md-12 MT-10 text-right\">\r\n        <button type=\"submit\" class=\"btn-primary MR-5\" [disabled]=\"addPrepareQueryForm.invalid\">Save & Next</button>\r\n        <button class=\"btn-default\" type=\"button\" (click)=\"onWorksheet()\">Cancel</button>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"getFilterBankArray().controls.length <= 0\">\r\n      Please add bank first.!\r\n    </ng-container>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/prepare-query/prepare-query.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/prepare-query/prepare-query.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3dvcmtmbG93LW1vZHVsZS93b3Jrc2hlZXQtbW9kdWxlL3dvcmtzaGVldC1kYXNoYm9hcmQtYWN0aW9uL3ByZXBhcmUtcXVlcnkvcHJlcGFyZS1xdWVyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/prepare-query/prepare-query.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/prepare-query/prepare-query.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: PrepareQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrepareQueryComponent", function() { return PrepareQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PrepareQueryComponent = /** @class */ (function () {
    function PrepareQueryComponent(_router, _fb, _commonCrudService, cd, _sharedObjService, _sharedService) {
        this._router = _router;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this.cd = cd;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        // Constant Variables
        this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        this.url = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].IMAGE_PATH;
        this.docArray = [];
        this.bankList = [];
        this.queryType = null;
        this.from_date = [];
    }
    PrepareQueryComponent.prototype.ngOnInit = function () {
        this.worksheetData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["GLOBALDATAKEYS"].QUERY_WORKSHEET_MODULE);
        // console.log(this.worksheetData);
        this.createPrepareQueryForm();
        this.getBankQueryList();
    };
    /**
     * Bank Query listing API
     */
    PrepareQueryComponent.prototype.getBankQueryList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].QUERY_BANK_LIST + '/' + 0, { "entity_id": this.worksheetData.entity_id }).subscribe(function (Response) {
            _this.bankList = Response.payload.data;
            if (_this.bankList) {
                _this.bankList.forEach(function (item) {
                    _this.getFilterBankArray().push(_this.createBankForm(item));
                });
            }
            // console.log(this.getFilterBankArray().controls);
            // this.getFilterBankArray().push(this.createBankForm(dataItem));
        });
    };
    /**
     * Open quick menu
     * @param menuName
     */
    PrepareQueryComponent.prototype.onOpenQuickMenu = function (menuName) {
        /*  switch (menuName) {
            case 'addNewWorksheet':
              this._router.navigate(['/' + AdminRoutes.ADD_WORKSHEET]);
              break;
            case 'todayWorksheet':
              this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_WORKSHEET]);
              break;
            case 'todayTimesheet':
              this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_TIMESHEET]);
              break;
            case 'worksheetHierarchy':
              this._router.navigate(['/' + AdminRoutes.WORKSHEET_HIERARCHY]);
              break;
            case 'changeInOuttime':
              this._router.navigate(['/' + AdminRoutes.WORKSHEET_CHANGE_IN_OUT_TIME]);
              break;
            case 'subClientList':
              this._router.navigate(['/' + AdminRoutes.WORKSHEET_SUB_CLIENT_LIST]);
              break;
            case 'worksheetMasterChecklist':
              this._router.navigate(['/' + AdminRoutes.WORKSHEET_MASTER_CHECKLIST]);
              break;
            case 'trainingList':
              this._router.navigate(['/' + AdminRoutes.WORKSHEET_TRAINING_LIST]);
              break;
            case 'revieworKnockBackWorksheet':
              this._router.navigate(['/' + AdminRoutes.WORKSHEET_REVIEW_OR_KNOCK_BACK]);
              break;
            case 'peerReviewWorksheetListing':
              this._router.navigate(['/' + AdminRoutes.WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
              break;
            case 'changeMultipleWorksheetStatus':
              this._router.navigate(['/' + AdminRoutes.CHANGE_MULTIPLE_WORKSHEET_STATUS]);
              break;
          }*/
    };
    PrepareQueryComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    PrepareQueryComponent.prototype.onWorksheet = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB]);
    };
    /**
     * On clear document name
     */
    PrepareQueryComponent.prototype.onClear = function (index) {
        this.getFilterBankArray().controls[index].get('upload').setValue(null);
    };
    PrepareQueryComponent.prototype.createPrepareQueryForm = function () {
        this.addPrepareQueryForm = this._fb.group({
            worksheet_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.worksheetData.id),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.worksheetData.entity_id),
            bank_list: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([])
        });
    };
    /**
     * Create Prepare query Form
     */
    PrepareQueryComponent.prototype.createBankForm = function (item) {
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['id'] : 0),
            bank_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['bank_name'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            account_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['account_no'] : null),
            bank_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['bank_id'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](new Date(this.worksheetData.start_date)),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](new Date(this.worksheetData.end_date)),
            rows: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item ? item['rows'] : null),
            upload: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            queryType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            is_checked: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](item && item['is_checked'] != null ? item['is_checked'] : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
    };
    /**
     *
     * @param parent
     * @param key
     * @param event
     * @param valueData
     */
    PrepareQueryComponent.prototype.onCheckBankData = function (parent, key, event, valueData) {
        if (parent >= 0 && valueData === 0) {
            this.getFilterBankArray().controls[parent].get(key).setValue(1);
            this.getFilterBankArray().controls[parent].get('start_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
            this.getFilterBankArray().controls[parent].get('start_date').updateValueAndValidity();
            this.getFilterBankArray().controls[parent].get('end_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
            this.getFilterBankArray().controls[parent].get('end_date').updateValueAndValidity();
            this.getFilterBankArray().controls[parent].get('queryType').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
            this.getFilterBankArray().controls[parent].get('queryType').updateValueAndValidity();
        }
        else {
            this.getFilterBankArray().controls[parent].get(key).setValue(0);
            this.getFilterBankArray().controls[parent].get('start_date').setValidators(null);
            this.getFilterBankArray().controls[parent].get('start_date').updateValueAndValidity();
            this.getFilterBankArray().controls[parent].get('end_date').setValidators(null);
            this.getFilterBankArray().controls[parent].get('end_date').updateValueAndValidity();
            this.getFilterBankArray().controls[parent].get('queryType').setValidators(null);
            this.getFilterBankArray().controls[parent].get('queryType').updateValueAndValidity();
        }
    };
    /**
     * On file selection
     * @param id
     */
    PrepareQueryComponent.prototype.onFileSelect = function (id) {
        document.getElementById(id).click();
    };
    /**
     * On Select Query Type
     * @param event
     */
    PrepareQueryComponent.prototype.onSelectQueryType = function (event, index) {
        var queryType = event ? Number(event.value) : 0;
        if (queryType === 0) {
            this.getFilterBankArray().controls[index].get('queryType').setValue(queryType);
            this.getFilterBankArray().controls[index].get('queryType').updateValueAndValidity();
            this.getFilterBankArray().controls[index].get('upload').setValue(null);
            this.getFilterBankArray().controls[index].get('upload').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
            this.getFilterBankArray().controls[index].get('upload').updateValueAndValidity();
            this.getFilterBankArray().controls[index].get('rows').setValue(null);
            this.getFilterBankArray().controls[index].get('rows').setValidators(null);
            this.getFilterBankArray().controls[index].get('rows').updateValueAndValidity();
        }
        else {
            this.getFilterBankArray().controls[index].get('queryType').setValue(queryType);
            this.getFilterBankArray().controls[index].get('queryType').updateValueAndValidity();
            this.getFilterBankArray().controls[index].get('rows').setValue(null);
            this.getFilterBankArray().controls[index].get('rows').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
            this.getFilterBankArray().controls[index].get('rows').updateValueAndValidity();
            this.getFilterBankArray().controls[index].get('upload').setValue(null);
            this.getFilterBankArray().controls[index].get('upload').setValidators(null);
            this.getFilterBankArray().controls[index].get('upload').updateValueAndValidity();
        }
    };
    /**
     * On File Select
     * @param event
     */
    PrepareQueryComponent.prototype.onFileChange = function (event, index) {
        var _this = this;
        var findIndexVal = this.docArray.findIndex(function (item) { return item['reqKey'] === 'upload_' + _this.getFilterBankArray().controls[index].get('id').value; });
        // console.log(findIndexVal);
        if (findIndexVal > -1) {
            this.docArray.splice(findIndexVal, 1);
        }
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            this.docArray.push({
                'reqKey': 'upload_' + this.getFilterBankArray().controls[index].get('id').value,
                'file': event.target.files
            });
            this.getFilterBankArray().controls[index].get('upload').setValue(event.target.files[0].name);
            this._sharedService.setToastMessage(event.target.files[0].name + ' file attached successfully. Dont\'t forget to click on Save & Next button', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].INFO);
        }
    };
    /**
     * Get Filter Bank Array
     */
    PrepareQueryComponent.prototype.getFilterBankArray = function () {
        return this.addPrepareQueryForm.get('bank_list');
    };
    /*
      /!**
       * Upload document browse file method
       *!/
      onChooseDocument() {
        document.getElementById('uploadDocument').click();
      }
    */
    /**
     * select event of document
     * @param event
     */
    PrepareQueryComponent.prototype.onUploadDocument = function (event) {
        /*   if (event.target.files) {
             this.docArray = [];
             for (let index = 0; index < event.target.files.length; index++) {
               // console.log(event.target.files[index].type);
               const name = event.target.files[0].name;
               const lastDot = name.lastIndexOf('.');
               const ext = name.substring(lastDot + 1);
               // console.log(ext);
               if (ext.toLowerCase() === 'csv') {
                 if (event.target.files[index].size > AppConstant.THREE_MB_IMAGE_SIZE_ALLOWED) {
                   this._sharedService.setToastMessage(ToastErrorMessages.VALID_PDF_SIZE, ToastType.ERROR);
                   return;
                 } else {
                   const file = event.target.files[0];
                   this.addHolidayMasterCSVForm.get('upload').setValue(file.name);
                   const reader = new FileReader();
                   reader.readAsDataURL(file);
                   this.docArray.push({
                     'reqKey': 'upload',
                     'file': event.target.files,
                   });
                 }
               } else {
                 this._sharedService.setToastMessage(ToastErrorMessages.VALID_CSV_SELECTION, ToastType.ERROR);
                 return;
               }
             }
           }*/
    };
    PrepareQueryComponent.prototype.onSaveNext = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].EDIT_QUERIES]);
    };
    /**
     * Set To Date On Change of From Date
     * @param fromDate
     */
    PrepareQueryComponent.prototype.setToDate = function (fromDate, index) {
        this.from_date[index] = fromDate;
    };
    /**
     * On Submit
     * @param form
     */
    PrepareQueryComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var bankList = form.value['bank_list'];
        if (bankList.length) {
            bankList.map(function (item) {
                item['start_date'] = moment__WEBPACK_IMPORTED_MODULE_10__(item['start_date']).format('YYYY-MM-DD');
                item['end_date'] = moment__WEBPACK_IMPORTED_MODULE_10__(item['end_date']).format('YYYY-MM-DD');
            });
        }
        form.value['bank_list'] = JSON.stringify(bankList);
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].QUERY_STORE + '/' + 0, form.value, this.docArray).subscribe(function (Response) {
            _this.onGoQueryModule();
        });
        form.value['bank_list'] = bankList;
    };
    PrepareQueryComponent.prototype.onGoQueryModule = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].PENDING_QUERY]);
    };
    PrepareQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prepare-query',
            template: __webpack_require__(/*! ./prepare-query.component.html */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/prepare-query/prepare-query.component.html"),
            styles: [__webpack_require__(/*! ./prepare-query.component.scss */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/prepare-query/prepare-query.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], PrepareQueryComponent);
    return PrepareQueryComponent;
}());



/***/ }),

/***/ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/prepare-query/prepare-query.module.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/prepare-query/prepare-query.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: PrepareQueryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrepareQueryModule", function() { return PrepareQueryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _prepare_query_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prepare-query.component */ "./src/app/admin/workflow-module/worksheet-module/worksheet-dashboard-action/prepare-query/prepare-query.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _prepare_query_component__WEBPACK_IMPORTED_MODULE_2__["PrepareQueryComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    },
];
var PrepareQueryModule = /** @class */ (function () {
    function PrepareQueryModule() {
    }
    PrepareQueryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_prepare_query_component__WEBPACK_IMPORTED_MODULE_2__["PrepareQueryComponent"]]
        })
    ], PrepareQueryModule);
    return PrepareQueryModule;
}());



/***/ })

}]);
//# sourceMappingURL=worksheet-dashboard-action-prepare-query-prepare-query-module.js.map