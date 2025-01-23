(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"],{

/***/ "./src/app/admin/report/bank-report/bank-report.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/report/bank-report/bank-report.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-client-report [tabName]=\"'BANK REPORT'\" [tabID]=\"tabID\"></app-client-report>\r\n"

/***/ }),

/***/ "./src/app/admin/report/bank-report/bank-report.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/report/bank-report/bank-report.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3JlcG9ydC9iYW5rLXJlcG9ydC9iYW5rLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/report/bank-report/bank-report.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/report/bank-report/bank-report.component.ts ***!
  \*******************************************************************/
/*! exports provided: BankReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReportComponent", function() { return BankReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BankReportComponent = /** @class */ (function () {
    function BankReportComponent() {
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__["ADMINTABACCESS"].REPORT_BANKREPORT;
    }
    BankReportComponent.prototype.ngOnInit = function () {
    };
    BankReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bank-report',
            template: __webpack_require__(/*! ./bank-report.component.html */ "./src/app/admin/report/bank-report/bank-report.component.html"),
            styles: [__webpack_require__(/*! ./bank-report.component.scss */ "./src/app/admin/report/bank-report/bank-report.component.scss")]
        })
    ], BankReportComponent);
    return BankReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/report/billing-hosting-user-report/billing-hosting-user-report.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin/report/billing-hosting-user-report/billing-hosting-user-report.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"common-report-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>REPORTS</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active text_uppercase\">{{reportTabData['name']}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Saved Report</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n\r\n            <th width=\"15%\" (click)=\"getSortClientReportData('report_name',\r\n             (clientReportSortBy === 'report_name') ? (clientReportSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Report Name\r\n              <i *ngIf=\"clientReportSortBy === 'report_name'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientReportSortBy === 'report_name'),\r\n            'icon-up' : ((clientReportSortBy === 'report_name') && (clientReportSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientReportSortBy === 'report_name') ? ((clientReportSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"42%\" (click)=\"getSortClientReportData('report_output',\r\n             (clientReportSortBy === 'report_output') ? (clientReportSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Output Field\r\n              <i *ngIf=\"clientReportSortBy === 'report_output'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientReportSortBy === 'report_output'),\r\n            'icon-up' : ((clientReportSortBy === 'report_output') && (clientReportSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientReportSortBy === 'report_output') ? ((clientReportSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\">Report Owner</th>\r\n\r\n            <th width=\"8%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"clientReportList.length\">\r\n          <tr *ngFor=\"let clientReport of clientReportList; let i = index\">\r\n            <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n            <td width=\"15%\">{{clientReport?.name}}</td>\r\n            <td width=\"42%\" class=\"word-break\">{{clientReport?.filter_output_field}}</td>\r\n            <td width=\"10%\">{{clientReport?.created_by?.userfullname}}</td>\r\n            <td width=\"8%\">\r\n              <mat-icon *ngIf=\"tabData['view']\" class=\"primary-color\" [matTooltip]=\"'Load Report'\"\r\n                        class=\"light-orange-color\" (click)=\"loadDocument(clientReport)\">\r\n                timelapse\r\n              </mat-icon>\r\n              <mat-icon *ngIf=\"tabData['add_edit']\" class=\"primary-color\" [matTooltip]=\"'Share Report'\"\r\n                        class=\"wet-asphalt-color\"\r\n                        (click)=\"shareDocumentWithUser(clientReport)\">share\r\n              </mat-icon>\r\n              <mat-icon *ngIf=\"tabData['delete']\" class=\"red-color\" [matTooltip]=\"'Delete Report'\"\r\n                        (click)=\"deleteClientReport(clientReport)\">\r\n                delete\r\n              </mat-icon>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n          <tbody *ngIf=\"clientReportList.length ===0\" class=\"panel-title\">No Records Found.!</tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n    <table>\r\n      <tfoot>\r\n      <tr>\r\n        <td colspan=\"10\">\r\n          <mat-paginator [length]=\"totalRecords\"\r\n                         [pageSize]=\"pageSize\"\r\n                         [pageIndex]=\"pageIndex\"\r\n                         [pageSizeOptions]=\"pageArray\"\r\n                         (page)=\"onPageChange($event)\">\r\n          </mat-paginator>\r\n        </td>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <!--Start add filter field-->\r\n  <div class=\"section-sepration PB-30\">\r\n    <span class=\"panel-title\">Filter Field</span>\r\n    <span class=\"MR-10 on-right \"><button class=\"open-dialog-btn primary-color\" (click)=\"resetFilterField()\"><mat-icon>clear_all</mat-icon>Reset Filter</button></span>\r\n    <form [formGroup]=\"clientForm\">\r\n      <div formArrayName=\"clientReportFields\">\r\n        <div class=\"row col-md-12\" *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index\"\r\n             [formGroupName]=\"i\">\r\n          <!-- | slice: ((followingUserLength === 0 && followingUserListLength === 0) ? 4 : 0) -->\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Filter Field\" formControlName=\"fieldname\"\r\n                          (selectionChange)=\"changeFieldName($event.value, i)\">\r\n                <mat-option *ngFor=\"let report of ReportList\" [value]=\"report\">{{report?.field_title}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Select Filter\" formControlName=\"condition\"\r\n                          (selectionChange)=\"onSelectShowHideField($event.value, i)\">\r\n                <mat-option *ngFor=\"let fType of selectedReportFilter[i]\" [value]=\"fType?.key\">{{fType?.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'TB'\">\r\n            <mat-form-field>\r\n              <input matInput [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                     formControlName=\"value\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'TN'\">\r\n            <mat-form-field>\r\n              <input type=\"number\" matInput\r\n                     [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                     formControlName=\"value\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && getFilterFieldArray().controls[i].get('fieldname').value['isCommaSeperated']\">\r\n            <mat-form-field>\r\n              <mat-select [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                          formControlName=\"value\">\r\n                <mat-option *ngFor=\"let fTypeValue of selectedReportValue[i]\" [value]=\"fTypeValue\">{{fTypeValue}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && getFilterFieldArray().controls[i].get('fieldname').value['isMultiSelect']\">\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'trading_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"tradingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #TradingName\r\n                         [(ngModel)]=\"selectedTradingEntity\">\r\n              </ng-select>\r\n            </div>\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'billing_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"billingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"billing_name\"\r\n                         placeholder=\"Billing Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #BillingName\r\n                         [(ngModel)]=\"selectedBillingEntity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'entity_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"nameList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Entity Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #Name\r\n                         [(ngModel)]=\"selectedNameEntity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'code'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"codeList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"code\"\r\n                         placeholder=\"Client Code\"\r\n                         bindValue=\"code\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #Code\r\n                         [(ngModel)]=\"selectedCodeEntity\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && !getFilterFieldArray().controls[i].get('fieldname').value['isCommaSeperated'] && !getFilterFieldArray().controls[i].get('fieldname').value['isMultiSelect']\">\r\n            <mat-form-field>\r\n              <mat-select [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                          formControlName=\"value\" [(ngModel)]=\"selectedReportUpdatedValue[i]\" [multiple]=\"true\">\r\n                <mat-option *ngFor=\"let fTypeValue of selectedReportValue[i]\" [value]=\"fTypeValue?.key\">\r\n                  {{fTypeValue?.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value !== 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"date.open()\" formControlName=\"value\" [matDatepicker]=\"DateRef\"\r\n                     placeholder=\"Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"DateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #date #DateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value === 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"fromdate.open()\" formControlName=\"value\" [matDatepicker]=\"FrDateRef\"\r\n                     placeholder=\"From Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"FrDateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #fromdate #FrDateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value === 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"todate.open()\" formControlName=\"value2\" [matDatepicker]=\"toDateRef\"\r\n                     placeholder=\"To Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"toDateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #todate #toDateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2 MT-15\" *ngIf=\"i === 0\">\r\n            <mat-icon class=\"mat-icon material-icons cursor-pointer primary-color\" (click)=\"addNewFilter(i)\">add\r\n            </mat-icon>\r\n          </div>\r\n          <div class=\"col-md-2 MT-15\" *ngIf=\"i !== 0\">\r\n            <mat-icon class=\"mat-icon material-icons cursor-pointer red-color\" (click)=\"removeFilter(i)\">\r\n              indeterminate_check_box\r\n            </mat-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <!--Start add output field-->\r\n  <div class=\"section-sepration output-field PB-30\">\r\n    <span class=\"panel-title\">Output Field</span>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"field-bg\">\r\n          <span class=\"panel-title\">Choose Field</span>\r\n          <span class=\"panel-title on-right black-color\"><button class=\"open-dialog-btn\" (click)=\"addFieldToOutput()\">Add All Fields</button></span>\r\n          <div class=\"panel-body primary-chip\" dragula=\"DRAGULA_FACTS\" id=\"leftDragableModel\"\r\n               [(dragulaModel)]=\"leftDragableModel\">\r\n            <mat-chip-list *ngFor=\"let oField of leftDragableModel\">\r\n              <mat-chip>{{oField?.field_title}}\r\n                <!--<mat-icon>done</mat-icon>-->\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"field-bg\">\r\n          <span class=\"panel-title turquoise-color\">Selected Field</span>\r\n          <button class=\"btn-primary on-right MT-5 MR-5\" (click)=\"showGenerateReport(0)\">Generate Report\r\n          </button>\r\n          <span class=\"panel-title on-right\"><button class=\"open-dialog-btn\"\r\n                                                     (click)=\"resetOutputField()\">Reset</button></span>\r\n          <div class=\"panel-body success-chip\" dragula=\"DRAGULA_FACTS\" id=\"rightDragableModel\"\r\n               [(dragulaModel)]=\"rightDragableModel\">\r\n            <mat-chip-list *ngFor=\"let oField of rightDragableModel\">\r\n              <mat-chip>{{oField?.field_title}}\r\n                <!--<mat-icon>done</mat-icon>-->\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n        <div class=\"MT-15\" *ngIf=\"tabData['add_edit']\">\r\n          <form [formGroup]=\"reportDataForm\" (submit)=\"saveClientReport(reportDataForm.valid, reportDataForm.value)\"\r\n                class=\"row on-right\">\r\n            <div class=\"col-md-7 PL-\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Report Name\" formControlName=\"name\"/>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-5 PLR-0\">\r\n              <button type=\"button\" (click)=\"saveClientReport(reportDataForm.valid, reportDataForm.value)\"\r\n                      class=\"btn-orange btn-bordered\" *ngIf=\"selectedClientReport\">\r\n                Update Report\r\n              </button>\r\n              <button type=\"submit\" class=\"btn-success\" *ngIf=\"!selectedClientReport\">\r\n                Save New Report\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- generate report -->\r\n  <div class=\"section-sepration with-filter-grid-container\" *ngIf=\"showHideReport\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Generate Report</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"showGenerateReport(1)\">\r\n                <span *ngIf=\"tabData['export']\">Excel</span> <i class=\"material-icons\">file_download</i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"10%\" *ngFor=\"let col of reportColumn\">{{col}}</th>\r\n            <th width=\"10%\" *ngIf=\"reportTabData['id'] === 15\">Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let report of generatedReportList; let i = index\">\r\n            <td width=\"10%\" *ngFor=\"let col of reportColumn\">{{checkIsFieldValueIsDate(report[col], 1)}}</td>\r\n            <td width=\"10%\" *ngIf=\"reportTabData['id'] === 15\">\r\n              <a target=\"_blank\" (click)=\"onViewBillingInformation()\" *ngIf=\"reportTabData['id'] === 15\">\r\n                <mat-icon class=\"primary-color\" [matTooltip]=\"'View Billing Information'\">visibility</mat-icon>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"rtotalRecords\"\r\n                             [pageSize]=\"rpageSize\"\r\n                             [pageIndex]=\"rpageIndex\"\r\n                             [pageSizeOptions]=\"rpageArray\"\r\n                             (page)=\"onPageReportChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/report/billing-hosting-user-report/billing-hosting-user-report.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin/report/billing-hosting-user-report/billing-hosting-user-report.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3JlcG9ydC9iaWxsaW5nLWhvc3RpbmctdXNlci1yZXBvcnQvYmlsbGluZy1ob3N0aW5nLXVzZXItcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/report/billing-hosting-user-report/billing-hosting-user-report.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/report/billing-hosting-user-report/billing-hosting-user-report.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: BillingHostingUserReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingHostingUserReportComponent", function() { return BillingHostingUserReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-dragula */ "../../node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../client-report/share-report-dialog/share-report-dialog.component */ "./src/app/admin/report/client-report/share-report-dialog/share-report-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var BillingHostingUserReportComponent = /** @class */ (function () {
    function BillingHostingUserReportComponent(_router, dialog, _fb, _commonCrudService, _sharedObjService, _sharedService, dragulaService) {
        this._router = _router;
        this.dialog = dialog;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        this.dragulaService = dragulaService;
        // Data Variables
        this.clientReportList = [];
        this.selectedClientReport = null;
        this.ReportList = [];
        this.outPutFieldList = [];
        this.serviceList = [];
        this.recurringList = [];
        this.softwareList = [];
        this.subactivityList = [];
        this.planListAll = [];
        this.stateList = [];
        this.cardNumberList = [];
        this.frequencyList = [];
        this.generatedReportList = [];
        this.reportColumn = [];
        this.selectedReportFilter = {};
        this.selectedReportValue = {};
        this.selectedReportUpdatedValue = {};
        this.reportTabData = {};
        this.reportArray = [];
        this.groupClientBelongsToList = [];
        // getUserListData = {};
        this.getUserListData = [];
        this.userList = [];
        this.entityList = {};
        this.leftDragableModel = [];
        this.rightDragableModel = [];
        // Pagination Data for Saved Report
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
        // Report Pagination
        this.rpageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        this.rpageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
        // MatPaginator Inputs
        this.length = 20;
        this.tradingList = [];
        this.selectedTradingEntity = [];
        this.billingList = [];
        this.selectedBillingEntity = [];
        this.nameList = [];
        this.selectedNameEntity = [];
        this.codeList = [];
        this.selectedCodeEntity = [];
        this.d = [];
        this.userIDArray = [9, 10, 14, 15, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75];
        this.tabApiURL = '';
        this.tabReportName = '';
        this.BHUR = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__["ADMINTABACCESS"].REPORT_BILLINGHOSTINGUSERREPORT;
        this.showHideReport = false;
        dragulaService.destroy('DRAGULA_FACTS');
        dragulaService.createGroup('DRAGULA_FACTS', {
            revertOnSpill: true,
            removeOnSpill: false,
        });
    }
    BillingHostingUserReportComponent.prototype.ngOnInit = function () {
        this.reportTabData = {
            'id': (this.tabID) ? this.tabID : this.BHUR,
            'name': (this.tabName) ? this.tabName : 'Billing Hosting User Report'
        };
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.reportTabData['id']);
        this.initializeMethod();
    };
    BillingHostingUserReportComponent.prototype.initializeMethod = function () {
        this.selectedClientReport = null;
        this.getClientList();
        this.getUserList();
        this.getTabReportAPIURL(this.reportTabData['id']);
        this.getReportOutputField(this.reportTabData['id']);
        this.createReportDataForm();
        this.createClientReportForm();
        this.getClientReportList(this.reportTabData['id'], 1);
    };
    /**
     * Get User List
     */
    BillingHostingUserReportComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, {
            'compare': { 'equal': { 'is_active': 1 } },
            'findinset': { 'team_id': [1, 2, 6] }
        }).subscribe(function (response) {
            _this.userList = response;
            _this.getClientFilterFiled(_this.reportTabData['id']);
        });
    };
    /**
     * get report output field for drag and drop
     * @param clientTypeId
     */
    BillingHostingUserReportComponent.prototype.getReportOutputField = function (clientTypeId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, { 'type': 'output' }).subscribe(function (Response) {
            _this.outPutFieldList = Response.payload.data;
            _this.leftDragableModel = _this.outPutFieldList;
        });
    };
    /**
     * Create Report Form
     */
    BillingHostingUserReportComponent.prototype.createClientReportForm = function () {
        this.clientForm = this._fb.group({
            clientReportFields: this._fb.array([this.createClientReportGroup()])
        });
    };
    /**
     * Create Report Data Form
     */
    BillingHostingUserReportComponent.prototype.createReportDataForm = function () {
        this.reportDataForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedClientReport ? this.selectedClientReport.name : '')
        });
    };
    /**
     * Create Report Group Form
     */
    BillingHostingUserReportComponent.prototype.createClientReportGroup = function (reportData, item) {
        return this._fb.group({
            fieldname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](reportData ? reportData : ''),
            condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['condition'] : ''),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['value'] : ''),
            value2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['value2'] : ''),
        });
    };
    /**
     * Get Client report list
     * @param tabId
     * @param pageNumber
     */
    BillingHostingUserReportComponent.prototype.getClientReportList = function (tabId, pageNumber) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT + '/' + tabId, this.getQueryParams(pageNumber)).subscribe(function (Response) {
            _this.handleClientReportResponse(Response);
        });
    };
    /**
     * Get Filter Field Array
     */
    BillingHostingUserReportComponent.prototype.getFilterFieldArray = function () {
        return this.clientForm.get('clientReportFields');
    };
    /**
     * Handle Client Report Response
     * @param response
     */
    BillingHostingUserReportComponent.prototype.handleClientReportResponse = function (response) {
        this.clientReportList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
    };
    /**
     * add new filter
     * @param index
     */
    BillingHostingUserReportComponent.prototype.addNewFilter = function (index) {
        if (this.getFilterFieldArray().length < 6) {
            this.reportArray.push(this.getFilterFieldArray().controls[index].get('fieldname'));
            this.getFilterFieldArray().push(this.createClientReportGroup());
        }
        else {
            this._sharedService.setToastMessage('You can add maximum five filter', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
        }
    };
    /**
     * remove row from filter collection
     * @param index
     */
    BillingHostingUserReportComponent.prototype.removeFilter = function (index) {
        this.reportArray.splice(this.reportArray.indexOf(this.getFilterFieldArray().controls[index].get('fieldname')), 1);
        this.getFilterFieldArray().removeAt(index);
    };
    /**
     * Genretae report
     * @param generateReportType
     */
    BillingHostingUserReportComponent.prototype.showGenerateReport = function (generateReportType, tabID, pageNumber, recordsPerPage) {
        var _this = this;
        var formValue = {};
        if (!tabID) {
            tabID = this.reportTabData['id'];
        }
        if (this.rightDragableModel.length) {
            formValue['output_field'] = [];
            this.rightDragableModel.map(function (item) {
                formValue['output_field'].push(item.field_name);
            });
            formValue['output_field'] = formValue['output_field'].join();
            if (this.getFilterFieldArray().length) {
                formValue['search'] = [];
                this.getFilterFieldArray().value.map(function (item) {
                    // console.log(item['value']);
                    if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
                        if (Array.isArray(item['value'])) {
                            item['value'] = item['value'].toString();
                        }
                        else {
                            if (_this.checkIsFieldValueIsDate(item['value'])) {
                                if (Number(item['value']) > 0 && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](item['value'])) {
                                    item['value'] = item['value'];
                                }
                                else {
                                    item['value'] = moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD');
                                }
                            }
                            else {
                                item['value'] = item['value'];
                            }
                        }
                        if (item['condition'] === 'between') {
                            if (item['value']) {
                                formValue['search'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': 'greaterthanequal',
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD')
                                });
                            }
                            if (item['value2']) {
                                formValue['search'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': 'lessthanequal',
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value2']).format('YYYY-MM-DD')
                                });
                            }
                        }
                        else {
                            formValue['search'].push({
                                'fieldname': item['fieldname']['field_name'],
                                'condition': item['condition'],
                                'value': item['value'],
                            });
                        }
                    }
                });
            }
            formValue['search'].length === 0 ? delete formValue['search'] : formValue['search'] = JSON.stringify(formValue['search']);
            if (generateReportType) {
                formValue['excel'] = 1;
                formValue['records'] = 'all';
                this._commonCrudService.downloadReport(this.tabApiURL, formValue, {}, this.tabReportName, 0).subscribe(function (response) {
                });
            }
            else {
                formValue['pageNumber'] = (pageNumber) ? pageNumber : 1;
                formValue['recordsPerPage'] = (recordsPerPage) ? recordsPerPage : this.rpageSize;
                this._commonCrudService.generatReport(this.tabApiURL, formValue).subscribe(function (Response) {
                    _this.generatedReportList = Response.payload.data;
                    _this.rpage = Response.pager.pageNumber;
                    _this.rpageIndex = _this.rpage - 1;
                    _this.rtotalRecords = +Response.pager.totalRecords;
                    _this.reportColumn = (_this.generatedReportList[0]) ? Object.keys(_this.generatedReportList[0]) : [];
                    _this.showHideReport = true;
                });
            }
        }
        else {
            this._sharedService.setToastMessage('Please select atleast one output field', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
        }
    };
    /**
     * on change of field type assign it to the selectedReportfilter and assign ites field
     * condition and condition value to be perform.
     * @param value
     * @param i
     */
    BillingHostingUserReportComponent.prototype.changeFieldName = function (value, i, selectedItem) {
        var indOfField = this.ReportList.findIndex(function (x) { return +x.id === +value.id; });
        if (this.ReportList[indOfField].field_name === 'trading_name' || this.ReportList[indOfField].field_name === 'billing_name' || this.ReportList[indOfField].field_name === 'entity_name' || this.ReportList[indOfField].field_name === 'code') {
            if (selectedItem) {
                this.onSearch(this.ReportList[indOfField].field_name, 1, selectedItem['value']);
                this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            }
            else {
                this.onSearch(this.ReportList[indOfField].field_name);
                this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            }
        }
        else if (indOfField > -1) {
            this.onSearch(this.ReportList[indOfField].field_name);
            // console.log(2);
            this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            this.selectedReportValue[i] = this.ReportList[indOfField].field_value_array;
            if (selectedItem) {
                if (this.ReportList[indOfField].field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTNUMERIC) {
                    var itemValue = selectedItem['value'];
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
                else if (this.ReportList[indOfField].field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTBOX) {
                    var itemValue = selectedItem['value'];
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
                else {
                    var itemValue = this.getArrayToString(selectedItem['value'], ',');
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
            }
        }
    };
    /**
     * on change of field type assign it to the selectedReportfilter and assign ites field
     * condition and condition value to be perform.
     * @param value
     * @param i
     */
    BillingHostingUserReportComponent.prototype.onSelectShowHideField = function (value, i, selectedItem) {
    };
    /**
     * Save Client Report
     * @param isValid
     * @param formValue
     */
    BillingHostingUserReportComponent.prototype.saveClientReport = function (isValid, formValue) {
        var _this = this;
        if (isValid) {
            if (this.rightDragableModel.length) {
                formValue['output'] = [];
                formValue['filter_output_field'] = [];
                this.rightDragableModel.map(function (item) {
                    formValue['output'].push(item.field_name);
                    formValue['filter_output_field'].push(item.field_title);
                });
                formValue['output'] = formValue['output'].join();
                formValue['filter_output_field'] = formValue['filter_output_field'].join();
                formValue['tab_id'] = this.reportTabData['id'];
                if (this.getFilterFieldArray().length) {
                    formValue['filter_condition_value'] = [];
                    this.getFilterFieldArray().value.map(function (item) {
                        if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
                            if (Array.isArray(item['value'])) {
                                item['value'] = item['value'].toString();
                            }
                            else {
                                if (_this.checkIsFieldValueIsDate(item['value'])) {
                                    if (Number(item['value']) > 0 && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](item['value'])) {
                                        item['value'] = item['value'];
                                    }
                                    else {
                                        item['value'] = moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD');
                                    }
                                }
                                else {
                                    item['value'] = item['value'];
                                }
                            }
                            if (item['condition'] === 'between') {
                                formValue['filter_condition_value'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': item['condition'],
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD'),
                                    'value2': moment__WEBPACK_IMPORTED_MODULE_11__(item['value2']).format('YYYY-MM-DD'),
                                });
                            }
                            else {
                                formValue['filter_condition_value'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': item['condition'],
                                    'value': item['value']
                                });
                            }
                        }
                    });
                }
                formValue['filter_condition_value'].length === 0 ? delete formValue['filter_condition_value'] : formValue['filter_condition_value'] = JSON.stringify(formValue['filter_condition_value']);
                if (this.selectedClientReport) {
                    formValue['_method'] = 'put';
                    // this.reportTabData['id'],
                    this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_UPDATE, this.selectedClientReport.id, formValue).subscribe(function (Response) {
                        _this.rightDragableModel = [];
                        _this.initializeMethod();
                    });
                }
                else {
                    // this.reportTabData['id']
                    this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_ADD + '/' + this.reportTabData['id'], formValue).subscribe(function (Response) {
                        _this.rightDragableModel = [];
                        _this.initializeMethod();
                    });
                }
            }
            else {
                this._sharedService.setToastMessage('Please select atleast one output field', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
            }
        }
    };
    // event
    /**
     * pagination event
     * @param event
     */
    BillingHostingUserReportComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getClientReportList(this.reportTabData['id'], event.pageIndex + 1);
    };
    /**
     * pagination event
     * @param event
     */
    BillingHostingUserReportComponent.prototype.onPageReportChange = function (event) {
        this.showGenerateReport(0, this.reportTabData['id'], event.pageIndex + 1, event.pageSize);
    };
    BillingHostingUserReportComponent.prototype.onViewBillingInformation = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].UPDATE_CLIENT]);
    };
    /**
     * reset filter
     */
    BillingHostingUserReportComponent.prototype.resetFilterField = function () {
        this.createClientReportForm();
    };
    /**
     * reset output field by push it to the left draggable model and make it empty.
     */
    BillingHostingUserReportComponent.prototype.resetOutputField = function () {
        var _this = this;
        this.rightDragableModel.map(function (item) {
            _this.leftDragableModel.push(item);
        });
        this.rightDragableModel = [];
    };
    /**
     * set output field by push it to the right draggable model and make it empty.
     */
    BillingHostingUserReportComponent.prototype.addFieldToOutput = function () {
        this.rightDragableModel = this.outPutFieldList;
        this.leftDragableModel = [];
    };
    /**
     * delete client report.
     * @param clientReport
     */
    BillingHostingUserReportComponent.prototype.deleteClientReport = function (clientReport) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this report ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_DELETE, clientReport.id).subscribe(function (Response) {
                    _this.getClientReportList(_this.reportTabData['id'], 1);
                });
            }
        });
    };
    /**
     * get the user list to whom admin want to share document.
     * @param clientReport
     */
    BillingHostingUserReportComponent.prototype.shareDocumentWithUser = function (clientReport) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_SHARED_USER_LIST + '/' + clientReport.report_saved_id, {}, {}).subscribe(function (Response) {
            Response.payload.data['clientData'] = clientReport;
            var dialogRef = _this.dialog.open(_client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ShareReportDialogComponent"], {
                width: '500px',
                data: {
                    content: Response.payload.data
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
            });
        });
    };
    /**
     * local sort the report data based on key and value
     * @param sortKey
     * @param sortVal
     */
    BillingHostingUserReportComponent.prototype.getSortClientReportData = function (sortKey, sortVal) {
        this.clientReportSortBy = sortKey;
        this.clientReportSortOrder = sortVal;
        var sortedArray = this.clientReportList.sort(function (objOne, objTwo) {
            if (objOne[sortKey] > objTwo[sortKey]) {
                return 1;
            }
            if (objOne[sortKey] < objTwo[sortKey]) {
                return -1;
            }
            return 0;
        });
        if (sortVal === 'asc') {
            this.clientReportList = sortedArray;
        }
        else {
            this.clientReportList = sortedArray.reverse();
        }
    };
    /**
     * load the specific document and its content and remove already selected output fields if there is any.
     * @param clientReport
     */
    BillingHostingUserReportComponent.prototype.loadDocument = function (clientReport) {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_VIEW, clientReport.id).subscribe(function (Response) {
            _this.rightDragableModel.map(function (item) {
                _this.leftDragableModel.push(item);
            });
            _this.rightDragableModel = [];
            _this.leftDragableModel = _this.outPutFieldList;
            _this.selectedClientReport = Response.payload.data;
            _this.createReportDataForm();
            _this.selectedClientReport.outputList = _this.selectedClientReport.output.split(',');
            if (_this.selectedClientReport.outputList.length) {
                _this.selectedClientReport.outputList.map(function (report) {
                    var ind = _this.outPutFieldList.findIndex(function (x) { return x.field_name === report; });
                    _this.rightDragableModel.push(_this.outPutFieldList[ind]);
                    _this.leftDragableModel.splice(ind, 1);
                });
            }
            if (_this.selectedClientReport.filter_condition_value !== null) {
                if (JSON.parse(_this.selectedClientReport.filter_condition_value).length) {
                    _this.clientForm = _this._fb.group({
                        clientReportFields: _this._fb.array([])
                    });
                }
                _this.selectedClientReport.filter_condition_valueList = JSON.parse(_this.selectedClientReport.filter_condition_value);
                var i_1 = 0;
                _this.selectedClientReport.filter_condition_valueList.map(function (item) {
                    var indOfField = _this.ReportList.findIndex(function (x) { return x.field_name === item.fieldname; });
                    _this.changeFieldName(_this.ReportList[indOfField], i_1, item);
                    _this.getFilterFieldArray().push(_this.createClientReportGroup(_this.ReportList[indOfField], item));
                    i_1++;
                });
            }
        });
    };
    // helper
    // get function for returning pageNumber and page size at time of listing api
    BillingHostingUserReportComponent.prototype.getQueryParams = function (page) {
        return {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
    };
    /**
     * Get Client List
     */
    BillingHostingUserReportComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.tradingList = response;
            _this.billingList = response;
            _this.nameList = response;
            _this.codeList = response;
        });
    };
    /**
     * On Search Of Data
     * @param key
     */
    BillingHostingUserReportComponent.prototype.onSearch = function (key, format, selectedIDS) {
        if (key === 'billing_name') {
            if (Number(format) === 1) {
                this.selectedBillingEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'trading_name') {
            if (Number(format) === 1) {
                this.selectedTradingEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'entity_name') {
            if (Number(format) === 1) {
                this.selectedNameEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'code') {
            if (Number(format) === 1) {
                this.selectedCodeEntity = this.getArrayToString(selectedIDS, ',', 1);
            }
        }
    };
    /**
     * Get array values from string
     * @param {string} value
     * @param {string} seperator
     * @returns {string[]}
     */
    BillingHostingUserReportComponent.prototype.getArrayToString = function (value, seperator, isNotNumber) {
        if (value) {
            var valueOne_1 = [];
            value.split(seperator).map(function (item) {
                if (isNotNumber) {
                    valueOne_1.push(item);
                }
                else {
                    valueOne_1.push(Number(item));
                }
            });
            return valueOne_1;
        }
    };
    /**
     * Get Report Tab API UR AND Tab Report Name
     * @param tabID
     */
    BillingHostingUserReportComponent.prototype.getTabReportAPIURL = function (tabID) {
        if (+tabID === this.BHUR) {
            this.tabApiURL = _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_HOSTING_USER_GENERATE_REPORT;
            this.tabReportName = 'Billing Hosting User Report ';
        }
    };
    /**
     * get report list and pass its field condition value for drop down from constant as well as whose group id = 1 and
     * field value = "" and type = 'DD' then assign its filter value from API.
     * @param clientTypeId
     */
    BillingHostingUserReportComponent.prototype.getClientFilterFiled = function (clientTypeId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, { 'type': 'filter' }).subscribe(function (Response) {
            _this.ReportList = Response.payload.data;
            _this.rpage = Response.pager.pageNumber;
            _this.rpageIndex = _this.rpage - 1;
            _this.rtotalRecords = +Response.pager.totalRecords;
            if (+_this.reportTabData['id'] === _this.BHUR) {
                _this.ReportList.map(function (item) {
                    if (item.field_value) {
                        item.isCommaSeperated = false;
                        if (item.field_value === 'yesNo') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNo"].slice(1);
                        }
                        else if (item.field_value === 'yesNoNa') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNoNa"].slice(1);
                        }
                        else if (item.field_value === 'yesNoOther') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNoOther"].slice(1);
                        }
                        else if (item.field_value === 'hostingUserType') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["hostingUserType"];
                        }
                        else {
                            item.isCommaSeperated = true;
                            item.field_value_array = item.field_value.split(',');
                        }
                    }
                    else {
                        // If Client Code And Entity Name Fetch
                        if (item.field_name === 'code' || item.field_name === 'entity_name'
                            || item.field_name === 'billing_name' || item.field_name === 'trading_name') {
                            item.isMultiSelect = true;
                            item.isCommaSeperated = false;
                        }
                        // If User IDS are there then
                        if (_this.userIDArray.indexOf(Number(item.field_name)) > -1) {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var itemArray = _this.userList.filter(function (itemData) { return (itemData['designation_id']) ? itemData['designation_id']['id'] === Number(item.field_name) : 0; });
                            if (itemArray.length) {
                                _this.getUserListData = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.getUserListData.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.getUserListData = [];
                            }
                            item.field_value_array = _this.getUserListData;
                        }
                    }
                    if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTBOX) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["TBFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].DROPDOWN) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["DDFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].CALENDER) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["CLFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTNUMERIC) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["TNFIELDTYPE"];
                    }
                });
            }
        });
    };
    BillingHostingUserReportComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('DRAGULA_FACTS');
    };
    /**
     * On home page route
     */
    BillingHostingUserReportComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Check If field value is date
     * @param value
     */
    /**
     * Check If field value is date
     * @param value
     */
    BillingHostingUserReportComponent.prototype.checkIsFieldValueIsDate = function (value, type) {
        if (type === void 0) { type = 0; }
        // console.log(value);
        if ((value === '' || value === null || value === '0000-00-00' || value === '0000-00-00 00:00:00' || value === '1899-11-30' || value === '1970-01-01' || (Number(value) > 0)) && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](value)) {
            if (Number(value) > 0) {
                // console.log('A - ' + value);
                return value;
            }
            else {
                return '';
            }
        }
        else {
            var dateFormat = moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](value);
            // console.log(dateFormat);
            if (dateFormat) {
                var item = moment__WEBPACK_IMPORTED_MODULE_11__(new Date(value));
                var itemValue = item.format('DD-MM-YYYY');
                // console.log(itemValue);
                if (itemValue === '' || itemValue === null || itemValue === '0000-00-00' || itemValue === '0000-00-00 00:00:00' || itemValue === '30-11-1899' || itemValue === '01-01-1970') {
                    return '';
                }
                else {
                    return itemValue;
                }
            }
            else {
                if (type === 1) {
                    return value;
                }
                else {
                    return '';
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('outputInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BillingHostingUserReportComponent.prototype, "outputField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BillingHostingUserReportComponent.prototype, "tabName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BillingHostingUserReportComponent.prototype, "tabID", void 0);
    BillingHostingUserReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing-hosting-user-report',
            template: __webpack_require__(/*! ./billing-hosting-user-report.component.html */ "./src/app/admin/report/billing-hosting-user-report/billing-hosting-user-report.component.html"),
            styles: [__webpack_require__(/*! ./billing-hosting-user-report.component.scss */ "./src/app/admin/report/billing-hosting-user-report/billing-hosting-user-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], ng2_dragula__WEBPACK_IMPORTED_MODULE_9__["DragulaService"]])
    ], BillingHostingUserReportComponent);
    return BillingHostingUserReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/report/billing-report/billing-report.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/report/billing-report/billing-report.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"common-report-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>REPORTS</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active text-capitalize\">{{reportTabData['name']}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Saved Report</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n\r\n            <th width=\"15%\" (click)=\"getSortClientReportData('report_name',\r\n             (clientReportSortBy === 'report_name') ? (clientReportSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Report Name\r\n              <i *ngIf=\"clientReportSortBy === 'report_name'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientReportSortBy === 'report_name'),\r\n            'icon-up' : ((clientReportSortBy === 'report_name') && (clientReportSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientReportSortBy === 'report_name') ? ((clientReportSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"42%\" (click)=\"getSortClientReportData('report_output',\r\n             (clientReportSortBy === 'report_output') ? (clientReportSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Output Field\r\n              <i *ngIf=\"clientReportSortBy === 'report_output'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientReportSortBy === 'report_output'),\r\n            'icon-up' : ((clientReportSortBy === 'report_output') && (clientReportSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientReportSortBy === 'report_output') ? ((clientReportSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\">Report Owner</th>\r\n\r\n            <th width=\"8%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody *ngIf=\"clientReportList.length > 0\">\r\n            <tr *ngFor=\"let clientReport of clientReportList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"15%\">{{clientReport?.name}}</td>\r\n              <td width=\"42%\" class=\"word-break\">{{clientReport?.filter_output_field}}</td>\r\n              <td width=\"10%\">{{clientReport?.created_by?.userfullname}}</td>\r\n              <td width=\"8%\">\r\n                <mat-icon *ngIf=\"tabData['view']\" class=\"light-orange-color\" [matTooltip]=\"'Load Report'\"\r\n                          (click)=\"loadDocument(clientReport)\">\r\n                  timelapse\r\n                </mat-icon>\r\n                <mat-icon *ngIf=\"tabData['add_edit']\" class=\"wet-asphalt-color\" [matTooltip]=\"'Share Report'\"\r\n                          (click)=\"shareDocumentWithUser(clientReport)\">share\r\n                </mat-icon>\r\n                <mat-icon *ngIf=\"tabData['delete']\" class=\"red-color\" [matTooltip]=\"'Delete Report'\"\r\n                          (click)=\"deleteClientReport(clientReport)\">\r\n                  delete\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n            <tbody *ngIf=\"clientReportList.length ===0\" class=\"panel-title\">No Records Found.!</tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n    <table *ngIf=\"clientReportList.length\">\r\n      <tfoot>\r\n      <tr>\r\n        <td colspan=\"10\">\r\n          <mat-paginator [length]=\"totalRecords\"\r\n                         [pageSize]=\"pageSize\"\r\n                         [pageIndex]=\"pageIndex\"\r\n                         [pageSizeOptions]=\"pageArray\"\r\n                         (page)=\"onPageChange($event)\">\r\n          </mat-paginator>\r\n        </td>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <!--Start add filter field-->\r\n  <div class=\"section-sepration PB-30\">\r\n    <span class=\"panel-title\">Filter Field</span>\r\n    <span class=\"MR-10 on-right \"><button class=\"open-dialog-btn primary-color\" (click)=\"resetFilterField()\"><mat-icon>clear_all</mat-icon>Reset Filter</button></span>\r\n    <form [formGroup]=\"clientForm\">\r\n      <div formArrayName=\"clientReportFields\">\r\n        <div class=\"row col-md-12\" *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index\"\r\n             [formGroupName]=\"i\">\r\n          <!-- | slice: ((followingUserLength === 0 && followingUserListLength === 0) ? 4 : 0) -->\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Filter Field\" formControlName=\"fieldname\"\r\n                          (selectionChange)=\"changeFieldName($event.value, i)\">\r\n                <mat-option *ngFor=\"let report of ReportList\" [value]=\"report\">{{report?.field_title}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Select Filter\" formControlName=\"condition\"\r\n                          (selectionChange)=\"onSelectShowHideField($event.value, i)\">\r\n                <mat-option *ngFor=\"let fType of selectedReportFilter[i]\" [value]=\"fType?.key\">{{fType?.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'TB'\">\r\n            <mat-form-field>\r\n              <input matInput [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                     formControlName=\"value\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'TN'\">\r\n            <mat-form-field>\r\n              <input type=\"number\" matInput\r\n                     [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                     formControlName=\"value\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && getFilterFieldArray().controls[i].get('fieldname').value['isCommaSeperated']\">\r\n            <mat-form-field>\r\n              <mat-select [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                          formControlName=\"value\">\r\n                <mat-option *ngFor=\"let fTypeValue of selectedReportValue[i]\" [value]=\"fTypeValue\">{{fTypeValue}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && getFilterFieldArray().controls[i].get('fieldname').value['isMultiSelect']\">\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'trading_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"tradingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #TradingName\r\n                         [(ngModel)]=\"selectedTradingEntity\">\r\n              </ng-select>\r\n            </div>\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'billing_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"billingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"billing_name\"\r\n                         placeholder=\"Billing Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #BillingName\r\n                         [(ngModel)]=\"selectedBillingEntity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'entity_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"nameList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Entity Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #Name\r\n                         [(ngModel)]=\"selectedNameEntity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'code'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"codeList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"code\"\r\n                         placeholder=\"Client Code\"\r\n                         bindValue=\"code\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #Code\r\n                         [(ngModel)]=\"selectedCodeEntity\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && !getFilterFieldArray().controls[i].get('fieldname').value['isCommaSeperated'] && !getFilterFieldArray().controls[i].get('fieldname').value['isMultiSelect']\">\r\n            <mat-form-field>\r\n              <mat-select [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                          formControlName=\"value\" [(ngModel)]=\"selectedReportUpdatedValue[i]\" [multiple]=\"true\">\r\n                <mat-option *ngFor=\"let fTypeValue of selectedReportValue[i]\" [value]=\"fTypeValue?.key\">\r\n                  {{fTypeValue?.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value !== 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"date.open()\" formControlName=\"value\" [matDatepicker]=\"DateRef\"\r\n                     placeholder=\"Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"DateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #date #DateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value === 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"fromdate.open()\" formControlName=\"value\" [matDatepicker]=\"FrDateRef\"\r\n                     placeholder=\"From Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"FrDateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #fromdate #FrDateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value === 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"todate.open()\" formControlName=\"value2\" [matDatepicker]=\"toDateRef\"\r\n                     placeholder=\"To Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"toDateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #todate #toDateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2 MT-15\" *ngIf=\"i === 0\">\r\n            <mat-icon class=\"mat-icon material-icons cursor-pointer primary-color\" (click)=\"addNewFilter(i)\">add\r\n            </mat-icon>\r\n          </div>\r\n          <div class=\"col-md-2 MT-15\" *ngIf=\"i !== 0\">\r\n            <mat-icon class=\"mat-icon material-icons cursor-pointer red-color\" (click)=\"removeFilter(i)\">\r\n              indeterminate_check_box\r\n            </mat-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <!--Start add output field-->\r\n  <div class=\"section-sepration output-field PB-30\">\r\n    <span class=\"panel-title\">Output Field</span>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"field-bg\">\r\n          <span class=\"panel-title\">Choose Field</span>\r\n          <span class=\"panel-title on-right black-color\"><button class=\"open-dialog-btn\" (click)=\"addFieldToOutput()\">Add All Fields</button></span>\r\n          <div class=\"panel-body primary-chip\" dragula=\"DRAGULA_FACTS\" id=\"leftDragableModel\"\r\n               [(dragulaModel)]=\"leftDragableModel\">\r\n            <mat-chip-list *ngFor=\"let oField of leftDragableModel\">\r\n              <mat-chip>{{oField?.field_title}}\r\n                <!--<mat-icon>done</mat-icon>-->\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"field-bg\">\r\n          <span class=\"panel-title turquoise-color\">Selected Field</span>\r\n          <button class=\"btn-primary on-right MT-5 MR-5\" (click)=\"showGenerateReport(0)\">Generate Report\r\n          </button>\r\n          <span class=\"panel-title on-right\"><button class=\"open-dialog-btn\"\r\n                                                     (click)=\"resetOutputField()\">Reset</button></span>\r\n          <div class=\"panel-body success-chip\" dragula=\"DRAGULA_FACTS\" id=\"rightDragableModel\"\r\n               [(dragulaModel)]=\"rightDragableModel\">\r\n            <mat-chip-list *ngFor=\"let oField of rightDragableModel\">\r\n              <mat-chip>{{oField?.field_title}}\r\n                <!--<mat-icon>done</mat-icon>-->\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n        <div class=\"MT-15\" *ngIf=\"tabData['add_edit']\">\r\n          <form [formGroup]=\"reportDataForm\" (submit)=\"saveClientReport(reportDataForm.valid, reportDataForm.value)\"\r\n                class=\"row on-right\">\r\n            <div class=\"col-md-7 PL-\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Report Name\" formControlName=\"name\" required/>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-5 PLR-0\">\r\n              <button type=\"button\" (click)=\"saveClientReport(reportDataForm.valid, reportDataForm.value)\"\r\n                      class=\"btn-orange btn-bordered\" *ngIf=\"selectedClientReport\" [disabled]=\"reportDataForm.invalid\">\r\n                Update Report\r\n              </button>\r\n              <button type=\"submit\" class=\"btn-success\" *ngIf=\"!selectedClientReport\"\r\n                      [disabled]=\"reportDataForm.invalid\">\r\n                Save New Report\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- generate report -->\r\n  <div class=\"section-sepration with-filter-grid-container\" *ngIf=\"showHideReport\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Generate Report</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li *ngIf=\"tabData['export']\">\r\n              <a (click)=\"showGenerateReport(1)\">\r\n                <span>Excel</span> <i class=\"material-icons\">file_download</i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block scrollable-grid\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th *ngFor=\"let col of reportColumn\">{{col}}</th>\r\n            <th *ngIf=\"reportTabData['id'] === 15\">Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"generatedReportList.length\">\r\n          <tr *ngFor=\"let report of generatedReportList; let i = index\">\r\n            <td *ngFor=\"let col of reportColumn\">{{checkIsFieldValueIsDate(report[col], 1)}}</td>\r\n            <td *ngIf=\"reportTabData['id'] === 15\">\r\n              <a target=\"_blank\" (click)=\"onViewBillingInformation()\" *ngIf=\"reportTabData['id'] === 15\">\r\n                <mat-icon class=\"primary-color\" [matTooltip]=\"'View Billing Information'\">visibility</mat-icon>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n          <tbody *ngIf=\"generatedReportList.length ===0\" class=\"panel-title\">No Records Found</tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <table *ngIf=\"generatedReportList.length\">\r\n      <tfoot>\r\n      <tr>\r\n        <td colspan=\"10\">\r\n          <mat-paginator [length]=\"rtotalRecords\"\r\n                         [pageSize]=\"rpageSize\"\r\n                         [pageIndex]=\"rpageIndex\"\r\n                         [pageSizeOptions]=\"rpageArray\"\r\n                         (page)=\"onPageReportChange($event)\">\r\n          </mat-paginator>\r\n        </td>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n    <!-- End Table -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/report/billing-report/billing-report.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/admin/report/billing-report/billing-report.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3JlcG9ydC9iaWxsaW5nLXJlcG9ydC9iaWxsaW5nLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/report/billing-report/billing-report.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/report/billing-report/billing-report.component.ts ***!
  \*************************************************************************/
/*! exports provided: BillingReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingReportComponent", function() { return BillingReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-dragula */ "../../node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../client-report/share-report-dialog/share-report-dialog.component */ "./src/app/admin/report/client-report/share-report-dialog/share-report-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var BillingReportComponent = /** @class */ (function () {
    function BillingReportComponent(_router, dialog, _fb, _commonCrudService, _sharedObjService, _sharedService, dragulaService) {
        this._router = _router;
        this.dialog = dialog;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        this.dragulaService = dragulaService;
        // Data Variables
        this.clientReportList = [];
        this.selectedClientReport = null;
        this.ReportList = [];
        this.outPutFieldList = [];
        this.serviceList = [];
        this.recurringList = [];
        this.softwareList = [];
        this.planListAll = [];
        this.stateList = [];
        this.cardNumberList = [];
        this.frequencyList = [];
        this.generatedReportList = [];
        this.reportColumn = [];
        this.selectedReportFilter = {};
        this.selectedReportValue = {};
        this.selectedReportUpdatedValue = {};
        this.reportTabData = {};
        this.reportArray = [];
        this.groupClientBelongsToList = [];
        // getUserListData = {};
        this.getUserListData = [];
        this.userList = [];
        this.entityList = {};
        this.leftDragableModel = [];
        this.rightDragableModel = [];
        // Pagination Data for Saved Report
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
        // Report Pagination
        this.rpageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        this.rpageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
        // MatPaginator Inputs
        this.length = 20;
        this.tradingList = [];
        this.selectedTradingEntity = [];
        this.billingList = [];
        this.selectedBillingEntity = [];
        this.nameList = [];
        this.selectedNameEntity = [];
        this.codeList = [];
        this.selectedCodeEntity = [];
        this.d = [];
        this.userIDArray = [9, 10, 14, 15, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75];
        this.tabApiURL = '';
        this.tabReportName = '';
        this.BIR = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__["ADMINTABACCESS"].REPORT_BILLINGREPORT;
        this.showHideReport = false;
        dragulaService.destroy('DRAGULA_FACTS');
        dragulaService.createGroup('DRAGULA_FACTS', {
            revertOnSpill: true,
            removeOnSpill: false,
        });
    }
    BillingReportComponent.prototype.ngOnInit = function () {
        this.reportTabData = { 'id': (this.tabID) ? this.tabID : this.BIR, 'name': (this.tabName) ? this.tabName : 'BILLING REPORT' };
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.reportTabData['id']);
        this.initializeMethod();
    };
    BillingReportComponent.prototype.initializeMethod = function () {
        this.selectedClientReport = null;
        this.getClientList();
        this.getUserList();
        this.getTabReportAPIURL(this.reportTabData['id']);
        this.getEntityBelongsToList();
        this.getReportOutputField(this.reportTabData['id']);
        this.createReportDataForm();
        this.createClientReportForm();
        this.getClientReportList(this.reportTabData['id'], 1);
    };
    /**
     * Get User List
     */
    BillingReportComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, {
            'compare': { 'equal': { 'is_active': 1 } },
            'findinset': { 'team_id': [1, 2, 6] }
        }).subscribe(function (response) {
            _this.userList = response;
            _this.getClientFilterFiled(_this.reportTabData['id']);
        });
    };
    /**
     * get report output field for drag and drop
     * @param clientTypeId
     */
    BillingReportComponent.prototype.getReportOutputField = function (clientTypeId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, { 'type': 'output' }).subscribe(function (Response) {
            _this.outPutFieldList = Response.payload.data;
            _this.leftDragableModel = _this.outPutFieldList;
        });
    };
    /**
     * get the value for field type = 'DD' whose group id =1 and field value  = ""
     * and assign it to the report list for field name = group belongs to
     */
    BillingReportComponent.prototype.getEntityBelongsToList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_BELONGSTO, { 'records': 'all' }).subscribe(function (Response) {
            Response.payload.data.map(function (item) {
                _this.groupClientBelongsToList.push({ key: item.id, label: item.name });
            });
        });
    };
    BillingReportComponent.prototype.getPlan = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_SUBSCRIPTION_PLAN, {}, {}).subscribe(function (response) {
            if (response.payload.data) {
                response.payload.data.map(function (item) {
                    _this.planListAll.push({ key: item.state_id, label: item.state_name });
                });
            }
        });
    };
    BillingReportComponent.prototype.getSoftware = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_SUBSCRIPTION_SOFTWARE, {}, {}).subscribe(function (response) {
            if (response.payload.data) {
                response.payload.data.map(function (item) {
                    _this.softwareList.push({ key: item.state_id, label: item.state_name });
                });
            }
        });
    };
    BillingReportComponent.prototype.getStates = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].DROPDOWN_LIST, {
            'records': 'all',
            'table': 'state',
            'column': 'state_id,state_name,category_option_id',
            'sortOrder': 'state_id',
            'sortBy': 'asc'
        }, {}).subscribe(function (Response) {
            if (Response) {
                Response.map(function (item) {
                    _this.stateList.push({ key: item.state_id, label: item.state_name });
                });
            }
        });
    };
    BillingReportComponent.prototype.getBillingCard = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].DROPDOWN_LIST, {
            'records': 'all',
            'table': 'billing_card',
            'column': 'id,name,surcharge',
            'sortOrder': 'id',
            'sortBy': 'asc'
        }, {}).subscribe(function (Response) {
            if (Response) {
                Response.map(function (item) {
                    _this.cardNumberList.push({ key: item.id, label: item.name });
                });
            }
        });
    };
    /**
     * Create Report Form
     */
    BillingReportComponent.prototype.createClientReportForm = function () {
        this.clientForm = this._fb.group({
            clientReportFields: this._fb.array([this.createClientReportGroup()])
        });
    };
    /**
     * Create Report Data Form
     */
    BillingReportComponent.prototype.createReportDataForm = function () {
        this.reportDataForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedClientReport ? this.selectedClientReport.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    /**
     * Create Report Group Form
     */
    BillingReportComponent.prototype.createClientReportGroup = function (reportData, item) {
        return this._fb.group({
            fieldname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](reportData ? reportData : ''),
            condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['condition'] : ''),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['value'] : ''),
            value2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['value2'] : ''),
        });
    };
    /**
     * Get Client report list
     * @param tabId
     * @param pageNumber
     */
    BillingReportComponent.prototype.getClientReportList = function (tabId, pageNumber) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT + '/' + tabId, this.getQueryParams(pageNumber)).subscribe(function (Response) {
            _this.handleClientReportResponse(Response);
        });
    };
    /**
     * Get Filter Field Array
     */
    BillingReportComponent.prototype.getFilterFieldArray = function () {
        return this.clientForm.get('clientReportFields');
    };
    /**
     * Handle Client Report Response
     * @param response
     */
    BillingReportComponent.prototype.handleClientReportResponse = function (response) {
        this.clientReportList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
    };
    /**
     * add new filter
     * @param index
     */
    BillingReportComponent.prototype.addNewFilter = function (index) {
        if (this.getFilterFieldArray().length < 6) {
            this.reportArray.push(this.getFilterFieldArray().controls[index].get('fieldname'));
            this.getFilterFieldArray().push(this.createClientReportGroup());
        }
        else {
            this._sharedService.setToastMessage('You can add maximum five filter', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
        }
    };
    /**
     * remove row from filter collection
     * @param index
     */
    BillingReportComponent.prototype.removeFilter = function (index) {
        this.reportArray.splice(this.reportArray.indexOf(this.getFilterFieldArray().controls[index].get('fieldname')), 1);
        this.getFilterFieldArray().removeAt(index);
    };
    /**
     * Genretae report
     * @param generateReportType
     */
    BillingReportComponent.prototype.showGenerateReport = function (generateReportType, tabID, pageNumber, recordsPerPage) {
        var _this = this;
        var formValue = {};
        if (!tabID) {
            tabID = this.reportTabData['id'];
        }
        if (this.rightDragableModel.length) {
            formValue['output_field'] = [];
            this.rightDragableModel.map(function (item) {
                formValue['output_field'].push(item.field_name);
            });
            formValue['output_field'] = formValue['output_field'].join();
            if (this.getFilterFieldArray().length) {
                formValue['search'] = [];
                this.getFilterFieldArray().value.map(function (item) {
                    // console.log(item['value']);
                    if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
                        if (Array.isArray(item['value'])) {
                            item['value'] = item['value'].toString();
                        }
                        else {
                            if (_this.checkIsFieldValueIsDate(item['value'])) {
                                if (Number(item['value']) > 0 && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](item['value'])) {
                                    item['value'] = item['value'];
                                }
                                else {
                                    item['value'] = moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD');
                                }
                            }
                            else {
                                item['value'] = item['value'];
                            }
                        }
                        if (item['condition'] === 'between') {
                            if (item['value']) {
                                formValue['search'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': 'greaterthanequal',
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD')
                                });
                            }
                            if (item['value2']) {
                                formValue['search'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': 'lessthanequal',
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value2']).format('YYYY-MM-DD')
                                });
                            }
                        }
                        else {
                            formValue['search'].push({
                                'fieldname': item['fieldname']['field_name'],
                                'condition': item['condition'],
                                'value': item['value'],
                            });
                        }
                    }
                });
            }
            formValue['search'].length === 0 ? delete formValue['search'] : formValue['search'] = JSON.stringify(formValue['search']);
            if (generateReportType) {
                formValue['excel'] = 1;
                formValue['records'] = 'all';
                this._commonCrudService.downloadReport(this.tabApiURL, formValue, {}, this.tabReportName, 0).subscribe(function (response) {
                });
            }
            else {
                formValue['pageNumber'] = (pageNumber) ? pageNumber : 1;
                formValue['recordsPerPage'] = (recordsPerPage) ? recordsPerPage : this.rpageSize;
                this._commonCrudService.generatReport(this.tabApiURL, formValue).subscribe(function (Response) {
                    _this.generatedReportList = Response.payload.data;
                    _this.rpage = Response.pager.pageNumber;
                    _this.rpageIndex = _this.rpage - 1;
                    _this.rtotalRecords = +Response.pager.totalRecords;
                    _this.reportColumn = (_this.generatedReportList[0]) ? Object.keys(_this.generatedReportList[0]) : [];
                    _this.showHideReport = true;
                });
            }
        }
        else {
            this._sharedService.setToastMessage('Please select atleast one output field', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
        }
    };
    /**
     * on change of field type assign it to the selectedReportfilter and assign ites field
     * condition and condition value to be perform.
     * @param value
     * @param i
     */
    BillingReportComponent.prototype.changeFieldName = function (value, i, selectedItem) {
        var indOfField = this.ReportList.findIndex(function (x) { return +x.id === +value.id; });
        if (this.ReportList[indOfField].field_name === 'trading_name' || this.ReportList[indOfField].field_name === 'billing_name' || this.ReportList[indOfField].field_name === 'entity_name' || this.ReportList[indOfField].field_name === 'code') {
            if (selectedItem) {
                this.onSearch(this.ReportList[indOfField].field_name, 1, selectedItem['value']);
                this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            }
            else {
                this.onSearch(this.ReportList[indOfField].field_name);
                this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            }
        }
        else if (indOfField > -1) {
            this.onSearch(this.ReportList[indOfField].field_name);
            // console.log(2);
            this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            this.selectedReportValue[i] = this.ReportList[indOfField].field_value_array;
            if (selectedItem) {
                if (this.ReportList[indOfField].field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTNUMERIC) {
                    var itemValue = selectedItem['value'];
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
                else if (this.ReportList[indOfField].field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTBOX) {
                    var itemValue = selectedItem['value'];
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
                else {
                    var itemValue = this.getArrayToString(selectedItem['value'], ',');
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
            }
        }
    };
    /**
     * on change of field type assign it to the selectedReportfilter and assign ites field
     * condition and condition value to be perform.
     * @param value
     * @param i
     */
    BillingReportComponent.prototype.onSelectShowHideField = function (value, i, selectedItem) {
    };
    /**
     * Save Client Report
     * @param isValid
     * @param formValue
     */
    BillingReportComponent.prototype.saveClientReport = function (isValid, formValue) {
        var _this = this;
        if (isValid) {
            if (this.rightDragableModel.length) {
                formValue['output'] = [];
                formValue['filter_output_field'] = [];
                this.rightDragableModel.map(function (item) {
                    formValue['output'].push(item.field_name);
                    formValue['filter_output_field'].push(item.field_title);
                });
                formValue['output'] = formValue['output'].join();
                formValue['filter_output_field'] = formValue['filter_output_field'].join();
                formValue['tab_id'] = this.reportTabData['id'];
                if (this.getFilterFieldArray().length) {
                    formValue['filter_condition_value'] = [];
                    this.getFilterFieldArray().value.map(function (item) {
                        if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
                            if (Array.isArray(item['value'])) {
                                item['value'] = item['value'].toString();
                            }
                            else {
                                if (_this.checkIsFieldValueIsDate(item['value'])) {
                                    if (Number(item['value']) > 0 && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](item['value'])) {
                                        item['value'] = item['value'];
                                    }
                                    else {
                                        item['value'] = moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD');
                                    }
                                }
                                else {
                                    item['value'] = item['value'];
                                }
                            }
                            if (item['condition'] === 'between') {
                                formValue['filter_condition_value'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': item['condition'],
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD'),
                                    'value2': moment__WEBPACK_IMPORTED_MODULE_11__(item['value2']).format('YYYY-MM-DD'),
                                });
                            }
                            else {
                                formValue['filter_condition_value'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': item['condition'],
                                    'value': item['value']
                                });
                            }
                        }
                    });
                }
                formValue['filter_condition_value'].length === 0 ? delete formValue['filter_condition_value'] : formValue['filter_condition_value'] = JSON.stringify(formValue['filter_condition_value']);
                if (this.selectedClientReport) {
                    formValue['_method'] = 'put';
                    // this.reportTabData['id'],
                    this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_UPDATE, this.selectedClientReport.id, formValue).subscribe(function (Response) {
                        _this.rightDragableModel = [];
                        _this.initializeMethod();
                    });
                }
                else {
                    // this.reportTabData['id']
                    this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_ADD + '/' + this.reportTabData['id'], formValue).subscribe(function (Response) {
                        _this.rightDragableModel = [];
                        _this.initializeMethod();
                    });
                }
                this.showHideReport = false;
            }
            else {
                this._sharedService.setToastMessage('Please select atleast one output field', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
            }
        }
    };
    // event
    /**
     * pagination event
     * @param event
     */
    BillingReportComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getClientReportList(this.reportTabData['id'], event.pageIndex + 1);
    };
    /**
     * pagination event
     * @param event
     */
    BillingReportComponent.prototype.onPageReportChange = function (event) {
        this.showGenerateReport(0, this.reportTabData['id'], event.pageIndex + 1, event.pageSize);
    };
    BillingReportComponent.prototype.onViewBillingInformation = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].UPDATE_CLIENT]);
    };
    /**
     * reset filter
     */
    BillingReportComponent.prototype.resetFilterField = function () {
        this.createClientReportForm();
    };
    /**
     * reset output field by push it to the left draggable model and make it empty.
     */
    BillingReportComponent.prototype.resetOutputField = function () {
        var _this = this;
        this.rightDragableModel.map(function (item) {
            _this.leftDragableModel.push(item);
        });
        this.rightDragableModel = [];
    };
    /**
     * set output field by push it to the right draggable model and make it empty.
     */
    BillingReportComponent.prototype.addFieldToOutput = function () {
        this.rightDragableModel = this.outPutFieldList;
        this.leftDragableModel = [];
    };
    /**
     * delete client report.
     * @param clientReport
     */
    BillingReportComponent.prototype.deleteClientReport = function (clientReport) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this report ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_DELETE, clientReport.id).subscribe(function (Response) {
                    _this.getClientReportList(_this.reportTabData['id'], 1);
                });
            }
        });
    };
    /**
     * get the user list to whom admin want to share document.
     * @param clientReport
     */
    BillingReportComponent.prototype.shareDocumentWithUser = function (clientReport) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_SHARED_USER_LIST + '/' + clientReport.report_saved_id, {}, {}).subscribe(function (Response) {
            Response.payload.data['clientData'] = clientReport;
            var dialogRef = _this.dialog.open(_client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ShareReportDialogComponent"], {
                width: '500px',
                data: {
                    content: Response.payload.data
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
            });
        });
    };
    /**
     * local sort the report data based on key and value
     * @param sortKey
     * @param sortVal
     */
    BillingReportComponent.prototype.getSortClientReportData = function (sortKey, sortVal) {
        this.clientReportSortBy = sortKey;
        this.clientReportSortOrder = sortVal;
        var sortedArray = this.clientReportList.sort(function (objOne, objTwo) {
            if (objOne[sortKey] > objTwo[sortKey]) {
                return 1;
            }
            if (objOne[sortKey] < objTwo[sortKey]) {
                return -1;
            }
            return 0;
        });
        if (sortVal === 'asc') {
            this.clientReportList = sortedArray;
        }
        else {
            this.clientReportList = sortedArray.reverse();
        }
    };
    /**
     * load the specific document and its content and remove already selected output fields if there is any.
     * @param clientReport
     */
    BillingReportComponent.prototype.loadDocument = function (clientReport) {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_VIEW, clientReport.id).subscribe(function (Response) {
            _this.rightDragableModel.map(function (item) {
                _this.leftDragableModel.push(item);
            });
            _this.rightDragableModel = [];
            _this.leftDragableModel = _this.outPutFieldList;
            _this.selectedClientReport = Response.payload.data;
            _this.createReportDataForm();
            _this.selectedClientReport.outputList = _this.selectedClientReport.output.split(',');
            if (_this.selectedClientReport.outputList.length) {
                _this.selectedClientReport.outputList.map(function (report) {
                    var ind = _this.outPutFieldList.findIndex(function (x) { return x.field_name === report; });
                    _this.rightDragableModel.push(_this.outPutFieldList[ind]);
                    _this.leftDragableModel.splice(ind, 1);
                });
            }
            if (_this.selectedClientReport.filter_condition_value !== null) {
                if (JSON.parse(_this.selectedClientReport.filter_condition_value).length) {
                    _this.clientForm = _this._fb.group({
                        clientReportFields: _this._fb.array([])
                    });
                }
                _this.selectedClientReport.filter_condition_valueList = JSON.parse(_this.selectedClientReport.filter_condition_value);
                var i_1 = 0;
                _this.selectedClientReport.filter_condition_valueList.map(function (item) {
                    var indOfField = _this.ReportList.findIndex(function (x) { return x.field_name === item.fieldname; });
                    _this.changeFieldName(_this.ReportList[indOfField], i_1, item);
                    _this.getFilterFieldArray().push(_this.createClientReportGroup(_this.ReportList[indOfField], item));
                    i_1++;
                });
            }
        });
    };
    // helper
    // get function for returning pageNumber and page size at time of listing api
    BillingReportComponent.prototype.getQueryParams = function (page) {
        return {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
    };
    /**
     * Get Client List
     */
    BillingReportComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.tradingList = response;
            _this.billingList = response;
            _this.nameList = response;
            _this.codeList = response;
        });
    };
    /**
     * On Search Of Data
     * @param key
     */
    BillingReportComponent.prototype.onSearch = function (key, format, selectedIDS) {
        if (key === 'billing_name') {
            if (Number(format) === 1) {
                this.selectedBillingEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'trading_name') {
            if (Number(format) === 1) {
                this.selectedTradingEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'entity_name') {
            if (Number(format) === 1) {
                this.selectedNameEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'code') {
            if (Number(format) === 1) {
                this.selectedCodeEntity = this.getArrayToString(selectedIDS, ',', 1);
            }
        }
    };
    /**
     * Get array values from string
     * @param {string} value
     * @param {string} seperator
     * @returns {string[]}
     */
    BillingReportComponent.prototype.getArrayToString = function (value, seperator, isNotNumber) {
        if (value) {
            var valueOne_1 = [];
            value.split(seperator).map(function (item) {
                if (isNotNumber) {
                    valueOne_1.push(item);
                }
                else {
                    valueOne_1.push(Number(item));
                }
            });
            return valueOne_1;
        }
    };
    /**
     * Get Report Tab API UR AND Tab Report Name
     * @param tabID
     */
    BillingReportComponent.prototype.getTabReportAPIURL = function (tabID) {
        if (+tabID === this.BIR) {
            this.tabApiURL = _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_GENERATE_REPORT;
            this.tabReportName = 'Billing Report ';
        }
    };
    /**
     * get report list and pass its field condition value for drop down from constant as well as whose group id = 1 and
     * field value = "" and type = 'DD' then assign its filter value from API.
     * @param clientTypeId
     */
    BillingReportComponent.prototype.getClientFilterFiled = function (clientTypeId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, { 'type': 'filter' }).subscribe(function (Response) {
            _this.ReportList = Response.payload.data;
            _this.rpage = Response.pager.pageNumber;
            _this.rpageIndex = _this.rpage - 1;
            _this.rtotalRecords = +Response.pager.totalRecords;
            if (+_this.reportTabData['id'] === _this.BIR) {
                _this.ReportList.map(function (item) {
                    if (item.field_value) {
                        item.isCommaSeperated = false;
                        if (item.field_value === 'yesNo') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNo"].slice(1);
                        }
                        else if (item.field_value === 'yesNoNa') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNoNa"].slice(1);
                        }
                        else if (item.field_value === 'yesNoOther') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNoOther"].slice(1);
                        }
                        else if (item.field_value === 'category') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["category"].slice(1);
                        }
                        else if (item.field_value === 'fulltimeresource') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["fulltimeresource"].slice(1);
                        }
                        else if (item.field_value === 'payment') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["payment"].slice(1);
                        }
                        else {
                            item.isCommaSeperated = true;
                            item.field_value_array = item.field_value.split(',');
                        }
                    }
                    else {
                        // If Client Code And Entity Name Fetch
                        if (item.field_name === 'code' || item.field_name === 'entity_name'
                            || item.field_name === 'billing_name' || item.field_name === 'trading_name') {
                            item.isMultiSelect = true;
                            item.isCommaSeperated = false;
                        }
                        else if (item.field_name === 'entity_grouptype_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.groupClientBelongsToList;
                        }
                        else if (item.field_name === 'state_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.stateList;
                        }
                        else if (item.field_name === 'card_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.cardNumberList;
                        }
                        // If User IDS are there then
                        if (_this.userIDArray.indexOf(Number(item.field_name)) > -1) {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var itemArray = _this.userList.filter(function (itemData) { return (itemData['designation_id']) ? itemData['designation_id']['id'] === Number(item.field_name) : 0; });
                            if (itemArray.length) {
                                _this.getUserListData = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.getUserListData.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.getUserListData = [];
                            }
                            item.field_value_array = _this.getUserListData;
                        }
                    }
                    if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTBOX) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["TBFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].DROPDOWN) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["DDFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].CALENDER) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["CLFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTNUMERIC) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["TNFIELDTYPE"];
                    }
                });
            }
        });
    };
    BillingReportComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('DRAGULA_FACTS');
    };
    /**
     * On home page route
     */
    BillingReportComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Check If field value is date
     * @param value
     */
    /**
     * Check If field value is date
     * @param value
     */
    BillingReportComponent.prototype.checkIsFieldValueIsDate = function (value, type) {
        if (type === void 0) { type = 0; }
        // console.log(value);
        if ((value === '' || value === null || value === '0000-00-00' || value === '0000-00-00 00:00:00' || value === '1899-11-30' || value === '1970-01-01' || (Number(value) > 0)) && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](value)) {
            if (Number(value) > 0) {
                // console.log('A - ' + value);
                return value;
            }
            else {
                return '';
            }
        }
        else {
            var dateFormat = moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](value);
            // console.log(dateFormat);
            if (dateFormat) {
                var item = moment__WEBPACK_IMPORTED_MODULE_11__(new Date(value));
                var itemValue = item.format('DD-MM-YYYY');
                // console.log(itemValue);
                if (itemValue === '' || itemValue === null || itemValue === '0000-00-00' || itemValue === '0000-00-00 00:00:00' || itemValue === '30-11-1899' || itemValue === '01-01-1970') {
                    return '';
                }
                else {
                    return itemValue;
                }
            }
            else {
                if (type === 1) {
                    return value;
                }
                else {
                    return '';
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('outputInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BillingReportComponent.prototype, "outputField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BillingReportComponent.prototype, "tabName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BillingReportComponent.prototype, "tabID", void 0);
    BillingReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing-report',
            template: __webpack_require__(/*! ./billing-report.component.html */ "./src/app/admin/report/billing-report/billing-report.component.html"),
            styles: [__webpack_require__(/*! ./billing-report.component.scss */ "./src/app/admin/report/billing-report/billing-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], ng2_dragula__WEBPACK_IMPORTED_MODULE_9__["DragulaService"]])
    ], BillingReportComponent);
    return BillingReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/report/billing-service-report/billing-service-report.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/report/billing-service-report/billing-service-report.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"common-report-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>REPORTS</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">{{reportTabData['name']}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Saved Report</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n\r\n            <th width=\"15%\" (click)=\"getSortClientReportData('report_name',\r\n             (clientReportSortBy === 'report_name') ? (clientReportSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Report Name\r\n              <i *ngIf=\"clientReportSortBy === 'report_name'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientReportSortBy === 'report_name'),\r\n            'icon-up' : ((clientReportSortBy === 'report_name') && (clientReportSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientReportSortBy === 'report_name') ? ((clientReportSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"40%\" (click)=\"getSortClientReportData('report_output',\r\n             (clientReportSortBy === 'report_output') ? (clientReportSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Output Field\r\n              <i *ngIf=\"clientReportSortBy === 'report_output'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientReportSortBy === 'report_output'),\r\n            'icon-up' : ((clientReportSortBy === 'report_output') && (clientReportSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientReportSortBy === 'report_output') ? ((clientReportSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\">Report Owner</th>\r\n\r\n            <th width=\"10%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody *ngIf=\"clientReportList.length\">\r\n            <tr *ngFor=\"let clientReport of clientReportList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"15%\">{{clientReport?.name}}</td>\r\n              <td width=\"40%\" class=\"word-break\">{{clientReport?.filter_output_field}}</td>\r\n              <td width=\"10%\">{{clientReport?.created_by?.userfullname}}</td>\r\n              <td width=\"10%\">\r\n                <mat-icon *ngIf=\"tabData['view']\" class=\"light-orange-color\" [matTooltip]=\"'Load Report'\"\r\n                          (click)=\"loadDocument(clientReport)\">\r\n                  timelapse\r\n                </mat-icon>\r\n                <mat-icon *ngIf=\"tabData['add_edit']\" class=\"wet-asphalt-color\" [matTooltip]=\"'Share Report'\"\r\n                          (click)=\"shareDocumentWithUser(clientReport)\">share\r\n                </mat-icon>\r\n                <mat-icon *ngIf=\"tabData['delete']\" class=\"red-color\" [matTooltip]=\"'Delete Report'\"\r\n                          (click)=\"deleteClientReport(clientReport)\">\r\n                  delete\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n            <tbody *ngIf=\"clientReportList.length ===0\" class=\"panel-title\">No Records Found</tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n    <table *ngIf=\"clientReportList.length\">\r\n      <tfoot>\r\n      <tr>\r\n        <td colspan=\"10\">\r\n          <mat-paginator [length]=\"totalRecords\"\r\n                         [pageSize]=\"pageSize\"\r\n                         [pageIndex]=\"pageIndex\"\r\n                         [pageSizeOptions]=\"pageArray\"\r\n                         (page)=\"onPageChange($event)\">\r\n          </mat-paginator>\r\n        </td>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <!--Start add filter field-->\r\n  <div class=\"section-sepration PB-30\">\r\n    <span class=\"panel-title\">Filter Field</span>\r\n    <span class=\"MR-10 on-right \"><button class=\"open-dialog-btn primary-color\" (click)=\"resetFilterField()\"><mat-icon>clear_all</mat-icon>Reset Filter</button></span>\r\n    <form [formGroup]=\"clientForm\">\r\n      <div formArrayName=\"clientReportFields\">\r\n        <div class=\"row col-md-12\" *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index\"\r\n             [formGroupName]=\"i\">\r\n          <!-- | slice: ((followingUserLength === 0 && followingUserListLength === 0) ? 4 : 0) -->\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Filter Field\" formControlName=\"fieldname\"\r\n                          (selectionChange)=\"changeFieldName($event.value, i)\">\r\n                <mat-option *ngFor=\"let report of ReportList\" [value]=\"report\">{{report?.field_title}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Select Filter\" formControlName=\"condition\"\r\n                          (selectionChange)=\"onSelectShowHideField($event.value, i)\">\r\n                <mat-option *ngFor=\"let fType of selectedReportFilter[i]\" [value]=\"fType?.key\">{{fType?.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'TB'\">\r\n            <mat-form-field>\r\n              <input matInput [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                     formControlName=\"value\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'TN'\">\r\n            <mat-form-field>\r\n              <input type=\"number\" matInput\r\n                     [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                     formControlName=\"value\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && getFilterFieldArray().controls[i].get('fieldname').value['isCommaSeperated']\">\r\n            <mat-form-field>\r\n              <mat-select [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                          formControlName=\"value\">\r\n                <mat-option *ngFor=\"let fTypeValue of selectedReportValue[i]\" [value]=\"fTypeValue\">{{fTypeValue}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && getFilterFieldArray().controls[i].get('fieldname').value['isMultiSelect']\">\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'trading_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"tradingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #TradingName\r\n                         [(ngModel)]=\"selectedTradingEntity\">\r\n              </ng-select>\r\n            </div>\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'billing_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"billingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"billing_name\"\r\n                         placeholder=\"Billing Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #BillingName\r\n                         [(ngModel)]=\"selectedBillingEntity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'entity_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"nameList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Entity Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #Name\r\n                         [(ngModel)]=\"selectedNameEntity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'code'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"codeList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"code\"\r\n                         placeholder=\"Client Code\"\r\n                         bindValue=\"code\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #Code\r\n                         [(ngModel)]=\"selectedCodeEntity\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && !getFilterFieldArray().controls[i].get('fieldname').value['isCommaSeperated'] && !getFilterFieldArray().controls[i].get('fieldname').value['isMultiSelect']\">\r\n            <mat-form-field>\r\n              <mat-select [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                          formControlName=\"value\" [(ngModel)]=\"selectedReportUpdatedValue[i]\" [multiple]=\"true\">\r\n                <mat-option *ngFor=\"let fTypeValue of selectedReportValue[i]\" [value]=\"fTypeValue?.key\">\r\n                  {{fTypeValue?.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value !== 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"date.open()\" formControlName=\"value\" [matDatepicker]=\"DateRef\"\r\n                     placeholder=\"Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"DateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #date #DateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value === 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"fromdate.open()\" formControlName=\"value\" [matDatepicker]=\"FrDateRef\"\r\n                     placeholder=\"From Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"FrDateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #fromdate #FrDateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value === 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"todate.open()\" formControlName=\"value2\" [matDatepicker]=\"toDateRef\"\r\n                     placeholder=\"To Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"toDateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #todate #toDateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2 MT-15\" *ngIf=\"i === 0\">\r\n            <mat-icon class=\"mat-icon material-icons cursor-pointer primary-color\" (click)=\"addNewFilter(i)\">add\r\n            </mat-icon>\r\n          </div>\r\n          <div class=\"col-md-2 MT-15\" *ngIf=\"i !== 0\">\r\n            <mat-icon class=\"mat-icon material-icons cursor-pointer red-color\" (click)=\"removeFilter(i)\">\r\n              indeterminate_check_box\r\n            </mat-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <!--Start add output field-->\r\n  <div class=\"section-sepration output-field PB-30\">\r\n    <span class=\"panel-title\">Output Field</span>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"field-bg\">\r\n          <span class=\"panel-title\">Choose Field</span>\r\n          <span class=\"panel-title on-right black-color\"><button class=\"open-dialog-btn\" (click)=\"addFieldToOutput()\">Add All Fields</button></span>\r\n          <div class=\"panel-body primary-chip\" dragula=\"DRAGULA_FACTS\" id=\"leftDragableModel\"\r\n               [(dragulaModel)]=\"leftDragableModel\">\r\n            <mat-chip-list *ngFor=\"let oField of leftDragableModel\">\r\n              <mat-chip>{{oField?.field_title}}\r\n                <!--<mat-icon>done</mat-icon>-->\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"field-bg\">\r\n          <span class=\"panel-title turquoise-color\">Selected Field</span>\r\n          <button class=\"btn-primary on-right MT-5 MR-5\" (click)=\"showGenerateReport(0)\">Generate Report\r\n          </button>\r\n          <span class=\"panel-title on-right\"><button class=\"open-dialog-btn\"\r\n                                                     (click)=\"resetOutputField()\">Reset</button></span>\r\n          <div class=\"panel-body success-chip\" dragula=\"DRAGULA_FACTS\" id=\"rightDragableModel\"\r\n               [(dragulaModel)]=\"rightDragableModel\">\r\n            <mat-chip-list *ngFor=\"let oField of rightDragableModel\">\r\n              <mat-chip>{{oField?.field_title}}\r\n                <!--<mat-icon>done</mat-icon>-->\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n        <div class=\"MT-15\" *ngIf=\"tabData['add_edit']\">\r\n          <form [formGroup]=\"reportDataForm\" (submit)=\"saveClientReport(reportDataForm.valid, reportDataForm.value)\"\r\n                class=\"row on-right\">\r\n            <div class=\"col-md-7 PL-\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Report Name\" formControlName=\"name\" required/>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-5 PLR-0\">\r\n              <button type=\"button\" (click)=\"saveClientReport(reportDataForm.valid, reportDataForm.value)\"\r\n                      class=\"btn-orange btn-bordered\" *ngIf=\"selectedClientReport\" [disabled]=\"reportDataForm.invalid\">\r\n                Update Report\r\n              </button>\r\n              <button type=\"submit\" class=\"btn-success\" *ngIf=\"!selectedClientReport\"\r\n                      [disabled]=\"reportDataForm.invalid\">\r\n                Save New Report\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- generate report -->\r\n  <div class=\"section-sepration with-filter-grid-container\" *ngIf=\"showHideReport\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Generate Report</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li *ngIf=\"tabData['export']\">\r\n              <a (click)=\"showGenerateReport(1)\">\r\n                <span>Excel</span> <i class=\"material-icons\">file_download</i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th *ngFor=\"let col of reportColumn\">{{col}}</th>\r\n            <th *ngIf=\"reportTabData['id'] === 15\">Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"generatedReportList.length\">\r\n          <tr *ngFor=\"let report of generatedReportList; let i = index\">\r\n            <td *ngFor=\"let col of reportColumn\">{{checkIsFieldValueIsDate(report[col], 1)}}</td>\r\n            <td *ngIf=\"reportTabData['id'] === 15\">\r\n              <a target=\"_blank\" (click)=\"onViewBillingInformation()\" *ngIf=\"reportTabData['id'] === 15\">\r\n                <mat-icon class=\"primary-color\" [matTooltip]=\"'View Billing Information'\">visibility</mat-icon>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n          <tbody *ngIf=\"generatedReportList.length ===0\" class=\"panel-title\">No Records Found</tbody>\r\n        </table>\r\n        <table *ngIf=\"generatedReportList.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"rtotalRecords\"\r\n                             [pageSize]=\"rpageSize\"\r\n                             [pageIndex]=\"rpageIndex\"\r\n                             [pageSizeOptions]=\"rpageArray\"\r\n                             (page)=\"onPageReportChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/report/billing-service-report/billing-service-report.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/report/billing-service-report/billing-service-report.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3JlcG9ydC9iaWxsaW5nLXNlcnZpY2UtcmVwb3J0L2JpbGxpbmctc2VydmljZS1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/report/billing-service-report/billing-service-report.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/report/billing-service-report/billing-service-report.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BillingServiceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingServiceReportComponent", function() { return BillingServiceReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-dragula */ "../../node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../client-report/share-report-dialog/share-report-dialog.component */ "./src/app/admin/report/client-report/share-report-dialog/share-report-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var BillingServiceReportComponent = /** @class */ (function () {
    function BillingServiceReportComponent(_router, dialog, _fb, _commonCrudService, _sharedObjService, _sharedService, dragulaService) {
        this._router = _router;
        this.dialog = dialog;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        this.dragulaService = dragulaService;
        // Data Variables
        this.clientReportList = [];
        this.selectedClientReport = null;
        this.ReportList = [];
        this.outPutFieldList = [];
        this.serviceList = [];
        this.recurringList = [];
        this.softwareList = [];
        this.planListAll = [];
        this.stateList = [];
        this.payrollCalcList = [];
        this.cardNumberList = [];
        this.frequencyList = [];
        this.generatedReportList = [];
        this.reportColumn = [];
        this.selectedReportFilter = {};
        this.selectedReportValue = [];
        this.selectedReportUpdatedValue = [];
        this.reportTabData = {};
        this.reportArray = [];
        this.groupClientBelongsToList = [];
        // getUserListData = {};
        this.getUserListData = [];
        this.userList = [];
        this.entityList = {};
        this.leftDragableModel = [];
        this.rightDragableModel = [];
        // Pagination Data for Saved Report
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
        // Report Pagination
        this.rpageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        this.rpageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
        // MatPaginator Inputs
        this.length = 20;
        this.tradingList = [];
        this.selectedTradingEntity = [];
        this.billingList = [];
        this.selectedBillingEntity = [];
        this.nameList = [];
        this.selectedNameEntity = [];
        this.codeList = [];
        this.selectedCodeEntity = [];
        this.d = [];
        this.userIDArray = [9, 10, 14, 15, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75];
        this.tabApiURL = '';
        this.tabReportName = '';
        this.BSR = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__["ADMINTABACCESS"].REPORT_BILLINGSERVICEREPORT;
        this.showHideReport = false;
        dragulaService.destroy('DRAGULA_FACTS');
        dragulaService.createGroup('DRAGULA_FACTS', {
            revertOnSpill: true,
            removeOnSpill: false,
        });
    }
    BillingServiceReportComponent.prototype.ngOnInit = function () {
        this.reportTabData = { 'id': (this.tabID) ? this.tabID : this.BSR, 'name': (this.tabName) ? this.tabName : 'BILLING SERVICE REPORT' };
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.reportTabData['id']);
        this.initializeMethod();
    };
    BillingServiceReportComponent.prototype.initializeMethod = function () {
        this.selectedClientReport = null;
        this.getClientList();
        this.getUserList();
        this.getTabReportAPIURL(this.reportTabData['id']);
        this.getFrequency();
        this.getPlan();
        this.getStates();
        this.getServices();
        this.getSoftware();
        this.getRecurring();
        this.getPayrollCalc();
        this.getReportOutputField(this.reportTabData['id']);
        this.createReportDataForm();
        this.createClientReportForm();
        this.getClientReportList(this.reportTabData['id'], 1);
    };
    BillingServiceReportComponent.prototype.getPayrollCalc = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].DROPDOWN_LIST, {
            'records': 'all',
            'table': 'billing_payroll_calc',
            'column': 'id,name',
            'sortOrder': 'id',
            'sortBy': 'asc'
        }, {}).subscribe(function (Response) {
            if (Response) {
                Response.map(function (item) {
                    _this.payrollCalcList.push({ key: item.id, label: item.name });
                });
            }
        });
    };
    /**
     * Get User List
     */
    BillingServiceReportComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, {
            'compare': { 'equal': { 'is_active': 1 } },
            'findinset': { 'team_id': [1, 2, 6] }
        }).subscribe(function (response) {
            _this.userList = response;
            _this.getClientFilterFiled(_this.reportTabData['id']);
        });
    };
    /**
     * get report output field for drag and drop
     * @param clientTypeId
     */
    BillingServiceReportComponent.prototype.getReportOutputField = function (clientTypeId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, { 'type': 'output' }).subscribe(function (Response) {
            _this.outPutFieldList = Response.payload.data;
            _this.leftDragableModel = _this.outPutFieldList;
        });
    };
    BillingServiceReportComponent.prototype.getStates = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].DROPDOWN_LIST, {
            'records': 'all',
            'table': 'state',
            'column': 'state_id,state_name,category_option_id',
            'sortOrder': 'state_id',
            'sortBy': 'asc'
        }, {}).subscribe(function (Response) {
            if (Response) {
                Response.map(function (item) {
                    _this.stateList.push({ key: item.state_id, label: item.state_name });
                });
            }
        });
    };
    BillingServiceReportComponent.prototype.getPlan = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_SUBSCRIPTION_PLAN, { 'records': 'all' }, {}).subscribe(function (response) {
            if (response.payload.data) {
                response.payload.data.map(function (item) {
                    _this.planListAll.push({ key: item.id, label: item.software_plan });
                });
            }
        });
    };
    BillingServiceReportComponent.prototype.getSoftware = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_SUBSCRIPTION_SOFTWARE, { 'records': 'all' }, {}).subscribe(function (response) {
            if (response.payload.data) {
                response.payload.data.map(function (item) {
                    _this.softwareList.push({ key: item.id, label: item.software_plan });
                });
            }
        });
    };
    BillingServiceReportComponent.prototype.getRecurring = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].INVOICE_RECURRING_LIST, { 'records': 'all' }, {}).subscribe(function (response) {
            if (response.payload.data) {
                response.payload.data.map(function (item) {
                    _this.recurringList.push({ key: item.id, label: item.recurring_name });
                });
            }
        });
    };
    BillingServiceReportComponent.prototype.getServices = function () {
        var _this = this;
        this._sharedObjService.getServices({}, { 'compare': { 'equal': { 'parent_id': 0 } } }).subscribe(function (response) {
            if (response) {
                response.map(function (item) {
                    _this.serviceList.push({ key: item.id, label: item.service_name });
                });
            }
        });
    };
    BillingServiceReportComponent.prototype.getFrequency = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].FREQUENCY, {}, {}).subscribe(function (response) {
            if (response.payload.data) {
                response.payload.data.map(function (item) {
                    _this.frequencyList.push({ key: item.id, label: item.frequency_name });
                });
            }
        });
    };
    /**
     * Create Report Form
     */
    BillingServiceReportComponent.prototype.createClientReportForm = function () {
        this.clientForm = this._fb.group({
            clientReportFields: this._fb.array([this.createClientReportGroup()])
        });
    };
    /**
     * Create Report Data Form
     */
    BillingServiceReportComponent.prototype.createReportDataForm = function () {
        this.reportDataForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedClientReport ? this.selectedClientReport.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    /**
     * Create Report Group Form
     */
    BillingServiceReportComponent.prototype.createClientReportGroup = function (reportData, item) {
        return this._fb.group({
            fieldname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](reportData ? reportData : ''),
            condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['condition'] : ''),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['value'] : ''),
            value2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['value2'] : ''),
        });
    };
    /**
     * Get Client report list
     * @param tabId
     * @param pageNumber
     */
    BillingServiceReportComponent.prototype.getClientReportList = function (tabId, pageNumber) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT + '/' + tabId, this.getQueryParams(pageNumber)).subscribe(function (Response) {
            _this.handleClientReportResponse(Response);
        });
    };
    /**
     * Get Filter Field Array
     */
    BillingServiceReportComponent.prototype.getFilterFieldArray = function () {
        return this.clientForm.get('clientReportFields');
    };
    /**
     * Handle Client Report Response
     * @param response
     */
    BillingServiceReportComponent.prototype.handleClientReportResponse = function (response) {
        this.clientReportList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
    };
    /**
     * add new filter
     * @param index
     */
    BillingServiceReportComponent.prototype.addNewFilter = function (index) {
        if (this.getFilterFieldArray().length < 6) {
            this.reportArray.push(this.getFilterFieldArray().controls[index].get('fieldname'));
            this.getFilterFieldArray().push(this.createClientReportGroup());
        }
        else {
            this._sharedService.setToastMessage('You can add maximum five filter', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
        }
    };
    /**
     * remove row from filter collection
     * @param index
     */
    BillingServiceReportComponent.prototype.removeFilter = function (index) {
        this.reportArray.splice(this.reportArray.indexOf(this.getFilterFieldArray().controls[index].get('fieldname')), 1);
        this.getFilterFieldArray().removeAt(index);
    };
    /**
     * Genretae report
     * @param generateReportType
     */
    BillingServiceReportComponent.prototype.showGenerateReport = function (generateReportType, tabID, pageNumber, recordsPerPage) {
        var _this = this;
        var formValue = {};
        if (!tabID) {
            tabID = this.reportTabData['id'];
        }
        if (this.rightDragableModel.length) {
            formValue['output_field'] = [];
            this.rightDragableModel.map(function (item) {
                formValue['output_field'].push(item.field_name);
            });
            formValue['output_field'] = formValue['output_field'].join();
            if (this.getFilterFieldArray().length) {
                formValue['search'] = [];
                this.getFilterFieldArray().value.map(function (item) {
                    // console.log(item['value']);
                    if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
                        if (Array.isArray(item['value'])) {
                            item['value'] = item['value'].toString();
                        }
                        else {
                            if (_this.checkIsFieldValueIsDate(item['value'])) {
                                if (Number(item['value']) > 0 && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](item['value'])) {
                                    item['value'] = item['value'];
                                }
                                else {
                                    item['value'] = moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD');
                                }
                            }
                            else {
                                item['value'] = item['value'];
                            }
                        }
                        if (item['condition'] === 'between') {
                            if (item['value']) {
                                formValue['search'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': 'greaterthanequal',
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD')
                                });
                            }
                            if (item['value2']) {
                                formValue['search'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': 'lessthanequal',
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value2']).format('YYYY-MM-DD')
                                });
                            }
                        }
                        else {
                            formValue['search'].push({
                                'fieldname': item['fieldname']['field_name'],
                                'condition': item['condition'],
                                'value': item['value'],
                            });
                        }
                    }
                });
            }
            formValue['search'].length === 0 ? delete formValue['search'] : formValue['search'] = JSON.stringify(formValue['search']);
            if (generateReportType) {
                formValue['excel'] = 1;
                formValue['records'] = 'all';
                this._commonCrudService.downloadReport(this.tabApiURL, formValue, {}, this.tabReportName, 0).subscribe(function (response) {
                });
            }
            else {
                formValue['pageNumber'] = (pageNumber) ? pageNumber : 1;
                formValue['recordsPerPage'] = (recordsPerPage) ? recordsPerPage : this.rpageSize;
                this._commonCrudService.generatReport(this.tabApiURL, formValue).subscribe(function (Response) {
                    _this.generatedReportList = Response.payload.data;
                    _this.rpage = Response.pager.pageNumber;
                    _this.rpageIndex = _this.rpage - 1;
                    _this.rtotalRecords = +Response.pager.totalRecords;
                    _this.reportColumn = (_this.generatedReportList[0]) ? Object.keys(_this.generatedReportList[0]) : [];
                    _this.showHideReport = true;
                });
            }
        }
        else {
            this._sharedService.setToastMessage('Please select atleast one output field', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
        }
    };
    /**
     * on change of field type assign it to the selectedReportfilter and assign ites field
     * condition and condition value to be perform.
     * @param value
     * @param i
     */
    BillingServiceReportComponent.prototype.changeFieldName = function (value, i, selectedItem) {
        var indOfField = this.ReportList.findIndex(function (x) { return +x.id === +value.id; });
        if (this.ReportList[indOfField].field_name === 'trading_name' || this.ReportList[indOfField].field_name === 'billing_name' || this.ReportList[indOfField].field_name === 'entity_name' || this.ReportList[indOfField].field_name === 'code') {
            if (selectedItem) {
                this.onSearch(this.ReportList[indOfField].field_name, 1, selectedItem['value']);
                this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            }
            else {
                this.onSearch(this.ReportList[indOfField].field_name);
                this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            }
        }
        else if (indOfField > -1) {
            this.onSearch(this.ReportList[indOfField].field_name);
            // console.log(2);
            this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            this.selectedReportValue[i] = this.ReportList[indOfField].field_value_array;
            if (selectedItem) {
                if (this.ReportList[indOfField].field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTNUMERIC) {
                    var itemValue = selectedItem['value'];
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
                else if (this.ReportList[indOfField].field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTBOX) {
                    var itemValue = selectedItem['value'];
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
                else {
                    var itemValue = this.getArrayToString(selectedItem['value'], ',');
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
            }
        }
    };
    /**
     * on change of field type assign it to the selectedReportfilter and assign ites field
     * condition and condition value to be perform.
     * @param value
     * @param i
     */
    BillingServiceReportComponent.prototype.onSelectShowHideField = function (value, i, selectedItem) {
    };
    /**
     * Save Client Report
     * @param isValid
     * @param formValue
     */
    BillingServiceReportComponent.prototype.saveClientReport = function (isValid, formValue) {
        var _this = this;
        if (isValid) {
            if (this.rightDragableModel.length) {
                formValue['output'] = [];
                formValue['filter_output_field'] = [];
                this.rightDragableModel.map(function (item) {
                    formValue['output'].push(item.field_name);
                    formValue['filter_output_field'].push(item.field_title);
                });
                formValue['output'] = formValue['output'].join();
                formValue['filter_output_field'] = formValue['filter_output_field'].join();
                formValue['tab_id'] = this.reportTabData['id'];
                if (this.getFilterFieldArray().length) {
                    formValue['filter_condition_value'] = [];
                    this.getFilterFieldArray().value.map(function (item) {
                        if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
                            if (Array.isArray(item['value'])) {
                                item['value'] = item['value'].toString();
                            }
                            else {
                                if (_this.checkIsFieldValueIsDate(item['value'])) {
                                    if (Number(item['value']) > 0 && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](item['value'])) {
                                        item['value'] = item['value'];
                                    }
                                    else {
                                        item['value'] = moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD');
                                    }
                                }
                                else {
                                    item['value'] = item['value'];
                                }
                            }
                            if (item['condition'] === 'between') {
                                formValue['filter_condition_value'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': item['condition'],
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD'),
                                    'value2': moment__WEBPACK_IMPORTED_MODULE_11__(item['value2']).format('YYYY-MM-DD'),
                                });
                            }
                            else {
                                formValue['filter_condition_value'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': item['condition'],
                                    'value': item['value']
                                });
                            }
                        }
                    });
                }
                formValue['filter_condition_value'].length === 0 ? delete formValue['filter_condition_value'] : formValue['filter_condition_value'] = JSON.stringify(formValue['filter_condition_value']);
                if (this.selectedClientReport) {
                    formValue['_method'] = 'put';
                    // this.reportTabData['id'],
                    this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_UPDATE, this.selectedClientReport.id, formValue).subscribe(function (Response) {
                        _this.rightDragableModel = [];
                        _this.initializeMethod();
                    });
                }
                else {
                    // this.reportTabData['id']
                    this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_ADD + '/' + this.reportTabData['id'], formValue).subscribe(function (Response) {
                        _this.rightDragableModel = [];
                        _this.initializeMethod();
                    });
                }
            }
            else {
                this._sharedService.setToastMessage('Please select atleast one output field', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
            }
        }
    };
    // event
    /**
     * pagination event
     * @param event
     */
    BillingServiceReportComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getClientReportList(this.reportTabData['id'], event.pageIndex + 1);
    };
    /**
     * pagination event
     * @param event
     */
    BillingServiceReportComponent.prototype.onPageReportChange = function (event) {
        this.showGenerateReport(0, this.reportTabData['id'], event.pageIndex + 1, event.pageSize);
    };
    BillingServiceReportComponent.prototype.onViewBillingInformation = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].UPDATE_CLIENT]);
    };
    /**
     * reset filter
     */
    BillingServiceReportComponent.prototype.resetFilterField = function () {
        this.createClientReportForm();
    };
    /**
     * reset output field by push it to the left draggable model and make it empty.
     */
    BillingServiceReportComponent.prototype.resetOutputField = function () {
        var _this = this;
        this.rightDragableModel.map(function (item) {
            _this.leftDragableModel.push(item);
        });
        this.rightDragableModel = [];
    };
    /**
     * set output field by push it to the right draggable model and make it empty.
     */
    BillingServiceReportComponent.prototype.addFieldToOutput = function () {
        this.rightDragableModel = this.outPutFieldList;
        this.leftDragableModel = [];
    };
    /**
     * delete client report.
     * @param clientReport
     */
    BillingServiceReportComponent.prototype.deleteClientReport = function (clientReport) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this report ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_DELETE, clientReport.id).subscribe(function (Response) {
                    _this.getClientReportList(_this.reportTabData['id'], 1);
                });
            }
        });
    };
    /**
     * get the user list to whom admin want to share document.
     * @param clientReport
     */
    BillingServiceReportComponent.prototype.shareDocumentWithUser = function (clientReport) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_SHARED_USER_LIST + '/' + clientReport.report_saved_id, {}, {}).subscribe(function (Response) {
            Response.payload.data['clientData'] = clientReport;
            var dialogRef = _this.dialog.open(_client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ShareReportDialogComponent"], {
                width: '500px',
                data: {
                    content: Response.payload.data
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
            });
        });
    };
    /**
     * local sort the report data based on key and value
     * @param sortKey
     * @param sortVal
     */
    BillingServiceReportComponent.prototype.getSortClientReportData = function (sortKey, sortVal) {
        this.clientReportSortBy = sortKey;
        this.clientReportSortOrder = sortVal;
        var sortedArray = this.clientReportList.sort(function (objOne, objTwo) {
            if (objOne[sortKey] > objTwo[sortKey]) {
                return 1;
            }
            if (objOne[sortKey] < objTwo[sortKey]) {
                return -1;
            }
            return 0;
        });
        if (sortVal === 'asc') {
            this.clientReportList = sortedArray;
        }
        else {
            this.clientReportList = sortedArray.reverse();
        }
    };
    /**
     * load the specific document and its content and remove already selected output fields if there is any.
     * @param clientReport
     */
    BillingServiceReportComponent.prototype.loadDocument = function (clientReport) {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_VIEW, clientReport.id).subscribe(function (Response) {
            _this.rightDragableModel.map(function (item) {
                _this.leftDragableModel.push(item);
            });
            _this.rightDragableModel = [];
            _this.leftDragableModel = _this.outPutFieldList;
            _this.selectedClientReport = Response.payload.data;
            _this.createReportDataForm();
            _this.selectedClientReport.outputList = _this.selectedClientReport.output.split(',');
            if (_this.selectedClientReport.outputList.length) {
                _this.selectedClientReport.outputList.map(function (report) {
                    var ind = _this.outPutFieldList.findIndex(function (x) { return x.field_name === report; });
                    _this.rightDragableModel.push(_this.outPutFieldList[ind]);
                    _this.leftDragableModel.splice(ind, 1);
                });
            }
            if (_this.selectedClientReport.filter_condition_value !== null) {
                if (JSON.parse(_this.selectedClientReport.filter_condition_value).length) {
                    _this.clientForm = _this._fb.group({
                        clientReportFields: _this._fb.array([])
                    });
                }
                _this.selectedClientReport.filter_condition_valueList = JSON.parse(_this.selectedClientReport.filter_condition_value);
                var i_1 = 0;
                _this.selectedClientReport.filter_condition_valueList.map(function (item) {
                    var indOfField = _this.ReportList.findIndex(function (x) { return x.field_name === item.fieldname; });
                    _this.changeFieldName(_this.ReportList[indOfField], i_1, item);
                    _this.getFilterFieldArray().push(_this.createClientReportGroup(_this.ReportList[indOfField], item));
                    i_1++;
                });
            }
        });
    };
    // helper
    // get function for returning pageNumber and page size at time of listing api
    BillingServiceReportComponent.prototype.getQueryParams = function (page) {
        return {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
    };
    /**
     * Get Client List
     */
    BillingServiceReportComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.tradingList = response;
            _this.billingList = response;
            _this.nameList = response;
            _this.codeList = response;
        });
    };
    /**
     * On Search Of Data
     * @param key
     */
    BillingServiceReportComponent.prototype.onSearch = function (key, format, selectedIDS) {
        if (key === 'billing_name') {
            if (Number(format) === 1) {
                this.selectedBillingEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'trading_name') {
            if (Number(format) === 1) {
                this.selectedTradingEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'entity_name') {
            if (Number(format) === 1) {
                this.selectedNameEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'code') {
            if (Number(format) === 1) {
                this.selectedCodeEntity = this.getArrayToString(selectedIDS, ',', 1);
            }
        }
    };
    /**
     * Get array values from string
     * @param {string} value
     * @param {string} seperator
     * @returns {string[]}
     */
    BillingServiceReportComponent.prototype.getArrayToString = function (value, seperator, isNotNumber) {
        if (value) {
            var valueOne_1 = [];
            value.split(seperator).map(function (item) {
                if (isNotNumber) {
                    valueOne_1.push(item);
                }
                else {
                    valueOne_1.push(Number(item));
                }
            });
            return valueOne_1;
        }
    };
    /**
     * Get Report Tab API UR AND Tab Report Name
     * @param tabID
     */
    BillingServiceReportComponent.prototype.getTabReportAPIURL = function (tabID) {
        if (+tabID === this.BSR) {
            this.tabApiURL = _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_SERVICE_GENERATE_REPORT;
            this.tabReportName = 'Billing Service Report ';
        }
    };
    /**
     * get report list and pass its field condition value for drop down from constant as well as whose group id = 1 and
     * field value = "" and type = 'DD' then assign its filter value from API.
     * @param clientTypeId
     */
    BillingServiceReportComponent.prototype.getClientFilterFiled = function (clientTypeId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, { 'type': 'filter' }).subscribe(function (Response) {
            _this.ReportList = Response.payload.data;
            _this.rpage = Response.pager.pageNumber;
            _this.rpageIndex = _this.rpage - 1;
            _this.rtotalRecords = +Response.pager.totalRecords;
            if (+_this.reportTabData['id'] === _this.BSR) {
                _this.ReportList.map(function (item) {
                    if (item.field_value) {
                        item.isCommaSeperated = false;
                        if (item.field_value === 'yesNo') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNo"].slice(1);
                        }
                        else if (item.field_value === 'yesNoNa') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNoNa"].slice(1);
                        }
                        else if (item.field_value === 'yesNoOther') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNoOther"].slice(1);
                        }
                        else {
                            item.isCommaSeperated = true;
                            item.field_value_array = item.field_value.split(',');
                        }
                    }
                    else {
                        // If Client Code And Entity Name Fetch
                        if (item.field_name === 'code' || item.field_name === 'entity_name'
                            || item.field_name === 'billing_name' || item.field_name === 'trading_name') {
                            item.isMultiSelect = true;
                            item.isCommaSeperated = false;
                        }
                        else if (item.field_name === 'service_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.serviceList;
                        }
                        else if (item.field_name === 'recurring_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.recurringList;
                        }
                        else if (item.field_name === 'frequency_id' || item.field_name === 'payroll_freqency_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.frequencyList;
                        }
                        else if (item.field_name === 'software_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.softwareList;
                        }
                        else if (item.field_name === 'plan_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.planListAll;
                        }
                        else if (item.field_name === 'state_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.stateList;
                        }
                        else if (item.field_name === 'calc_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.payrollCalcList;
                        }
                        // If User IDS are there then
                        if (_this.userIDArray.indexOf(Number(item.field_name)) > -1) {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var itemArray = _this.userList.filter(function (itemData) { return (itemData['designation_id']) ? itemData['designation_id']['id'] === Number(item.field_name) : 0; });
                            if (itemArray.length) {
                                _this.getUserListData = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.getUserListData.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.getUserListData = [];
                            }
                            item.field_value_array = _this.getUserListData;
                        }
                    }
                    if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTBOX) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["TBFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].DROPDOWN) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["DDFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].CALENDER) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["CLFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTNUMERIC) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["TNFIELDTYPE"];
                    }
                });
            }
        });
    };
    BillingServiceReportComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('DRAGULA_FACTS');
    };
    /**
     * On home page route
     */
    BillingServiceReportComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Check If field value is date
     * @param value
     */
    /**
     * Check If field value is date
     * @param value
     */
    BillingServiceReportComponent.prototype.checkIsFieldValueIsDate = function (value, type) {
        if (type === void 0) { type = 0; }
        // console.log(value);
        if ((value === '' || value === null || value === '0000-00-00' || value === '0000-00-00 00:00:00' || value === '1899-11-30' || value === '1970-01-01' || (Number(value) > 0)) && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](value)) {
            if (Number(value) > 0) {
                // console.log('A - ' + value);
                return value;
            }
            else {
                return '';
            }
        }
        else {
            var dateFormat = moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](value);
            // console.log(dateFormat);
            if (dateFormat) {
                var item = moment__WEBPACK_IMPORTED_MODULE_11__(new Date(value));
                var itemValue = item.format('DD-MM-YYYY');
                // console.log(itemValue);
                if (itemValue === '' || itemValue === null || itemValue === '0000-00-00' || itemValue === '0000-00-00 00:00:00' || itemValue === '30-11-1899' || itemValue === '01-01-1970') {
                    return '';
                }
                else {
                    return itemValue;
                }
            }
            else {
                if (type === 1) {
                    return value;
                }
                else {
                    return '';
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('outputInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BillingServiceReportComponent.prototype, "outputField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BillingServiceReportComponent.prototype, "tabName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BillingServiceReportComponent.prototype, "tabID", void 0);
    BillingServiceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing-service-report',
            template: __webpack_require__(/*! ./billing-service-report.component.html */ "./src/app/admin/report/billing-service-report/billing-service-report.component.html"),
            styles: [__webpack_require__(/*! ./billing-service-report.component.scss */ "./src/app/admin/report/billing-service-report/billing-service-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], ng2_dragula__WEBPACK_IMPORTED_MODULE_9__["DragulaService"]])
    ], BillingServiceReportComponent);
    return BillingServiceReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/report/billing-subactivity-report/billing-subactivity-report.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/report/billing-subactivity-report/billing-subactivity-report.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"common-report-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>REPORTS</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">{{reportTabData['name']}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Saved Report</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n\r\n            <th width=\"15%\" (click)=\"getSortClientReportData('report_name',\r\n             (clientReportSortBy === 'report_name') ? (clientReportSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Report Name\r\n              <i *ngIf=\"clientReportSortBy === 'report_name'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientReportSortBy === 'report_name'),\r\n            'icon-up' : ((clientReportSortBy === 'report_name') && (clientReportSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientReportSortBy === 'report_name') ? ((clientReportSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"60%\" (click)=\"getSortClientReportData('report_output',\r\n             (clientReportSortBy === 'report_output') ? (clientReportSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Output Field\r\n              <i *ngIf=\"clientReportSortBy === 'report_output'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientReportSortBy === 'report_output'),\r\n            'icon-up' : ((clientReportSortBy === 'report_output') && (clientReportSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientReportSortBy === 'report_output') ? ((clientReportSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\">Report Owner</th>\r\n\r\n            <th width=\"10%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody *ngIf=\"clientReportList.length\">\r\n            <tr *ngFor=\"let clientReport of clientReportList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"15%\">{{clientReport?.name}}</td>\r\n              <td width=\"60%\" class=\"word-break\">{{clientReport?.filter_output_field}}</td>\r\n              <td width=\"10%\">{{clientReport?.created_by?.userfullname}}</td>\r\n              <td width=\"10%\">\r\n                <mat-icon *ngIf=\"tabData['view']\" class=\"light-orange-color\" [matTooltip]=\"'Load Report'\"\r\n                          (click)=\"loadDocument(clientReport)\">\r\n                  timelapse\r\n                </mat-icon>\r\n                <mat-icon *ngIf=\"tabData['add_edit']\" class=\"wet-asphalt-color\" [matTooltip]=\"'Share Report'\"\r\n                          (click)=\"shareDocumentWithUser(clientReport)\">share\r\n                </mat-icon>\r\n                <mat-icon *ngIf=\"tabData['delete']\" class=\"red-color\" [matTooltip]=\"'Delete Report'\"\r\n                          (click)=\"deleteClientReport(clientReport)\">\r\n                  delete\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n            <tbody *ngIf=\"clientReportList.length ===0\" class=\"panel-title\">No Records Found</tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n    <table *ngIf=\"clientReportList.length\">\r\n      <tfoot>\r\n      <tr>\r\n        <td colspan=\"10\">\r\n          <mat-paginator [length]=\"totalRecords\"\r\n                         [pageSize]=\"pageSize\"\r\n                         [pageIndex]=\"pageIndex\"\r\n                         [pageSizeOptions]=\"pageArray\"\r\n                         (page)=\"onPageChange($event)\">\r\n          </mat-paginator>\r\n        </td>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <!--Start add filter field-->\r\n  <div class=\"section-sepration PB-30\">\r\n    <span class=\"panel-title\">Filter Field</span>\r\n    <span class=\"MR-10 on-right \"><button class=\"open-dialog-btn primary-color\" (click)=\"resetFilterField()\"><mat-icon>clear_all</mat-icon>Reset Filter</button></span>\r\n    <form [formGroup]=\"clientForm\">\r\n      <div formArrayName=\"clientReportFields\">\r\n        <div class=\"row col-md-12\" *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index\"\r\n             [formGroupName]=\"i\">\r\n          <!-- | slice: ((followingUserLength === 0 && followingUserListLength === 0) ? 4 : 0) -->\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Filter Field\" formControlName=\"fieldname\"\r\n                          (selectionChange)=\"changeFieldName($event.value, i)\">\r\n                <mat-option *ngFor=\"let report of ReportList\" [value]=\"report\">{{report?.field_title}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Select Filter\" formControlName=\"condition\"\r\n                          (selectionChange)=\"onSelectShowHideField($event.value, i)\">\r\n                <mat-option *ngFor=\"let fType of selectedReportFilter[i]\" [value]=\"fType?.key\">{{fType?.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'TB'\">\r\n            <mat-form-field>\r\n              <input matInput [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                     formControlName=\"value\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'TN'\">\r\n            <mat-form-field>\r\n              <input type=\"number\" matInput\r\n                     [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                     formControlName=\"value\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && getFilterFieldArray().controls[i].get('fieldname').value['isCommaSeperated']\">\r\n            <mat-form-field>\r\n              <mat-select [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                          formControlName=\"value\">\r\n                <mat-option *ngFor=\"let fTypeValue of selectedReportValue[i]\" [value]=\"fTypeValue\">{{fTypeValue}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && getFilterFieldArray().controls[i].get('fieldname').value['isMultiSelect']\">\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'trading_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"tradingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #TradingName\r\n                         [(ngModel)]=\"selectedTradingEntity\">\r\n              </ng-select>\r\n            </div>\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'billing_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"billingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"billing_name\"\r\n                         placeholder=\"Billing Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #BillingName\r\n                         [(ngModel)]=\"selectedBillingEntity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'entity_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"nameList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Entity Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #Name\r\n                         [(ngModel)]=\"selectedNameEntity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'code'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"codeList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"code\"\r\n                         placeholder=\"Client Code\"\r\n                         bindValue=\"code\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #Code\r\n                         [(ngModel)]=\"selectedCodeEntity\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && !getFilterFieldArray().controls[i].get('fieldname').value['isCommaSeperated'] && !getFilterFieldArray().controls[i].get('fieldname').value['isMultiSelect']\">\r\n            <mat-form-field>\r\n              <mat-select [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                          formControlName=\"value\" [(ngModel)]=\"selectedReportUpdatedValue[i]\" [multiple]=\"true\">\r\n                <mat-option *ngFor=\"let fTypeValue of selectedReportValue[i]\" [value]=\"fTypeValue?.key\">\r\n                  {{fTypeValue?.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value !== 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"date.open()\" formControlName=\"value\" [matDatepicker]=\"DateRef\"\r\n                     placeholder=\"Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"DateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #date #DateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value === 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"fromdate.open()\" formControlName=\"value\" [matDatepicker]=\"FrDateRef\"\r\n                     placeholder=\"From Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"FrDateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #fromdate #FrDateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value === 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"todate.open()\" formControlName=\"value2\" [matDatepicker]=\"toDateRef\"\r\n                     placeholder=\"To Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"toDateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #todate #toDateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2 MT-15\" *ngIf=\"i === 0\">\r\n            <mat-icon class=\"mat-icon material-icons cursor-pointer primary-color\" (click)=\"addNewFilter(i)\">add\r\n            </mat-icon>\r\n          </div>\r\n          <div class=\"col-md-2 MT-15\" *ngIf=\"i !== 0\">\r\n            <mat-icon class=\"mat-icon material-icons cursor-pointer red-color\" (click)=\"removeFilter(i)\">\r\n              indeterminate_check_box\r\n            </mat-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <!--Start add output field-->\r\n  <div class=\"section-sepration output-field PB-30\">\r\n    <span class=\"panel-title\">Output Field</span>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"field-bg\">\r\n          <span class=\"panel-title\">Choose Field</span>\r\n          <span class=\"panel-title on-right black-color\"><button class=\"open-dialog-btn\" (click)=\"addFieldToOutput()\">Add All Fields</button></span>\r\n          <div class=\"panel-body primary-chip\" dragula=\"DRAGULA_FACTS\" id=\"leftDragableModel\"\r\n               [(dragulaModel)]=\"leftDragableModel\">\r\n            <mat-chip-list *ngFor=\"let oField of leftDragableModel\">\r\n              <mat-chip>{{oField?.field_title}}\r\n                <!--<mat-icon>done</mat-icon>-->\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"field-bg\">\r\n          <span class=\"panel-title turquoise-color\">Selected Field</span>\r\n          <button class=\"btn-primary on-right MT-5 MR-5\" (click)=\"showGenerateReport(0)\">Generate Report\r\n          </button>\r\n          <span class=\"panel-title on-right\"><button class=\"open-dialog-btn\"\r\n                                                     (click)=\"resetOutputField()\">Reset</button></span>\r\n\r\n          <div class=\"panel-body success-chip\" dragula=\"DRAGULA_FACTS\" id=\"rightDragableModel\"\r\n               [(dragulaModel)]=\"rightDragableModel\">\r\n            <mat-chip-list *ngFor=\"let oField of rightDragableModel\">\r\n              <mat-chip>{{oField?.field_title}}\r\n                <!--<mat-icon>done</mat-icon>-->\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n        <div class=\"MT-15\" *ngIf=\"tabData['add_edit']\">\r\n          <form [formGroup]=\"reportDataForm\" (submit)=\"saveClientReport(reportDataForm.valid, reportDataForm.value)\"\r\n                class=\"row on-right\">\r\n            <div class=\"col-md-7 PL-\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Report Name\" formControlName=\"name\"/>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-5 PLR-0\">\r\n              <button type=\"button\" (click)=\"saveClientReport(reportDataForm.valid, reportDataForm.value)\"\r\n                      class=\"btn-primary btn-bordered\" *ngIf=\"selectedClientReport\">\r\n                Update Report\r\n              </button>\r\n              <button type=\"submit\" class=\"btn-success\" *ngIf=\"!selectedClientReport\">\r\n                Save New Report\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- generate report -->\r\n  <div class=\"section-sepration with-filter-grid-container\" *ngIf=\"showHideReport\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Generate Report</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li *ngIf=\"tabData['export']\">\r\n              <a (click)=\"showGenerateReport(1)\">\r\n                <span>Excel</span> <i class=\"material-icons\">file_download</i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th *ngFor=\"let col of reportColumn\">{{col}}</th>\r\n            <th *ngIf=\"reportTabData['id'] === 15\">Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"generatedReportList.length\">\r\n          <tr *ngFor=\"let report of generatedReportList; let i = index\">\r\n            <td *ngFor=\"let col of reportColumn\">{{checkIsFieldValueIsDate(report[col], 1)}}</td>\r\n            <td *ngIf=\"reportTabData['id'] === 15\">\r\n              <a target=\"_blank\" (click)=\"onViewBillingInformation()\" *ngIf=\"reportTabData['id'] === 15\">\r\n                <mat-icon class=\"primary-color\" [matTooltip]=\"'View Billing Information'\">visibility</mat-icon>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n          <tbody *ngIf=\"generatedReportList.length ===0\" class=\"panel-title\">No Records Found</tbody>\r\n        </table>\r\n        <table *ngIf=\"generatedReportList.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"rtotalRecords\"\r\n                             [pageSize]=\"rpageSize\"\r\n                             [pageIndex]=\"rpageIndex\"\r\n                             [pageSizeOptions]=\"rpageArray\"\r\n                             (page)=\"onPageReportChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/report/billing-subactivity-report/billing-subactivity-report.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/report/billing-subactivity-report/billing-subactivity-report.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3JlcG9ydC9iaWxsaW5nLXN1YmFjdGl2aXR5LXJlcG9ydC9iaWxsaW5nLXN1YmFjdGl2aXR5LXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/report/billing-subactivity-report/billing-subactivity-report.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/report/billing-subactivity-report/billing-subactivity-report.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: BillingSubactivityReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingSubactivityReportComponent", function() { return BillingSubactivityReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-dragula */ "../../node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../client-report/share-report-dialog/share-report-dialog.component */ "./src/app/admin/report/client-report/share-report-dialog/share-report-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var BillingSubactivityReportComponent = /** @class */ (function () {
    function BillingSubactivityReportComponent(_router, dialog, _fb, _commonCrudService, _sharedObjService, _sharedService, dragulaService) {
        this._router = _router;
        this.dialog = dialog;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        this.dragulaService = dragulaService;
        // Data Variables
        this.clientReportList = [];
        this.selectedClientReport = null;
        this.ReportList = [];
        this.outPutFieldList = [];
        this.serviceList = [];
        this.recurringList = [];
        this.softwareList = [];
        this.subactivityList = [];
        this.planListAll = [];
        this.stateList = [];
        this.cardNumberList = [];
        this.frequencyList = [];
        this.generatedReportList = [];
        this.reportColumn = [];
        this.selectedReportFilter = {};
        this.selectedReportValue = {};
        this.selectedReportUpdatedValue = {};
        this.reportTabData = {};
        this.reportArray = [];
        this.groupClientBelongsToList = [];
        // getUserListData = {};
        this.getUserListData = [];
        this.userList = [];
        this.entityList = {};
        this.leftDragableModel = [];
        this.rightDragableModel = [];
        // Pagination Data for Saved Report
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
        // Report Pagination
        this.rpageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        this.rpageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
        // MatPaginator Inputs
        this.length = 20;
        this.tradingList = [];
        this.selectedTradingEntity = [];
        this.billingList = [];
        this.selectedBillingEntity = [];
        this.nameList = [];
        this.selectedNameEntity = [];
        this.codeList = [];
        this.selectedCodeEntity = [];
        this.d = [];
        this.userIDArray = [9, 10, 14, 15, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75];
        this.tabApiURL = '';
        this.tabReportName = '';
        this.BSAR = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__["ADMINTABACCESS"].REPORT_BILLINGSUBACTIVITYREPORT;
        this.showHideReport = false;
        dragulaService.destroy('DRAGULA_FACTS');
        dragulaService.createGroup('DRAGULA_FACTS', {
            revertOnSpill: true,
            removeOnSpill: false,
        });
    }
    BillingSubactivityReportComponent.prototype.ngOnInit = function () {
        this.reportTabData = {
            'id': (this.tabID) ? this.tabID : this.BSAR,
            'name': (this.tabName) ? this.tabName : 'BILLING SUBACTIVITY REPORT'
        };
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.reportTabData['id']);
        this.initializeMethod();
    };
    BillingSubactivityReportComponent.prototype.initializeMethod = function () {
        this.selectedClientReport = null;
        this.getClientList();
        this.getUserList();
        this.getTabReportAPIURL(this.reportTabData['id']);
        this.getFrequency();
        this.getServices();
        this.getSubactivity();
        this.getReportOutputField(this.reportTabData['id']);
        this.createReportDataForm();
        this.createClientReportForm();
        this.getClientReportList(this.reportTabData['id'], 1);
    };
    /**
     * Get User List
     */
    BillingSubactivityReportComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, {
            'compare': { 'equal': { 'is_active': 1 } },
            'findinset': { 'team_id': [1, 2, 6] }
        }).subscribe(function (response) {
            _this.userList = response;
            _this.getClientFilterFiled(_this.reportTabData['id']);
        });
    };
    /**
     * get report output field for drag and drop
     * @param clientTypeId
     */
    BillingSubactivityReportComponent.prototype.getReportOutputField = function (clientTypeId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, { 'type': 'output' }).subscribe(function (Response) {
            _this.outPutFieldList = Response.payload.data;
            _this.leftDragableModel = _this.outPutFieldList;
        });
    };
    BillingSubactivityReportComponent.prototype.getServices = function () {
        var _this = this;
        this._sharedObjService.getServices({}, { 'compare': { 'equal': { 'parent_id': 0 } } }).subscribe(function (response) {
            if (response) {
                response.map(function (item) {
                    _this.serviceList.push({ key: item.id, label: item.service_name });
                });
            }
        });
    };
    BillingSubactivityReportComponent.prototype.getSubactivity = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].DROPDOWN_LIST, {
            'records': 'all',
            'table': 'subactivity',
            'column': 'id,subactivity_full_name,subactivity_code',
            'sortOrder': 'id',
            'sortBy': 'asc'
        }, {}).subscribe(function (response) {
            if (response) {
                response.map(function (item) {
                    _this.subactivityList.push({ key: item.subactivity_code, label: item.subactivity_full_name });
                });
            }
        });
    };
    BillingSubactivityReportComponent.prototype.getFrequency = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].FREQUENCY, {}, {}).subscribe(function (response) {
            if (response.payload.data) {
                response.payload.data.map(function (item) {
                    _this.frequencyList.push({ key: item.id, label: item.frequency_name });
                });
            }
        });
    };
    /**
     * Create Report Form
     */
    BillingSubactivityReportComponent.prototype.createClientReportForm = function () {
        this.clientForm = this._fb.group({
            clientReportFields: this._fb.array([this.createClientReportGroup()])
        });
    };
    /**
     * Create Report Data Form
     */
    BillingSubactivityReportComponent.prototype.createReportDataForm = function () {
        this.reportDataForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedClientReport ? this.selectedClientReport.name : '')
        });
    };
    /**
     * Create Report Group Form
     */
    BillingSubactivityReportComponent.prototype.createClientReportGroup = function (reportData, item) {
        return this._fb.group({
            fieldname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](reportData ? reportData : ''),
            condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['condition'] : ''),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['value'] : ''),
            value2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['value2'] : ''),
        });
    };
    /**
     * Get Client report list
     * @param tabId
     * @param pageNumber
     */
    BillingSubactivityReportComponent.prototype.getClientReportList = function (tabId, pageNumber) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT + '/' + tabId, this.getQueryParams(pageNumber)).subscribe(function (Response) {
            _this.handleClientReportResponse(Response);
        });
    };
    /**
     * Get Filter Field Array
     */
    BillingSubactivityReportComponent.prototype.getFilterFieldArray = function () {
        return this.clientForm.get('clientReportFields');
    };
    /**
     * Handle Client Report Response
     * @param response
     */
    BillingSubactivityReportComponent.prototype.handleClientReportResponse = function (response) {
        this.clientReportList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
    };
    /**
     * add new filter
     * @param index
     */
    BillingSubactivityReportComponent.prototype.addNewFilter = function (index) {
        if (this.getFilterFieldArray().length < 6) {
            this.reportArray.push(this.getFilterFieldArray().controls[index].get('fieldname'));
            this.getFilterFieldArray().push(this.createClientReportGroup());
        }
        else {
            this._sharedService.setToastMessage('You can add maximum five filter', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
        }
    };
    /**
     * remove row from filter collection
     * @param index
     */
    BillingSubactivityReportComponent.prototype.removeFilter = function (index) {
        this.reportArray.splice(this.reportArray.indexOf(this.getFilterFieldArray().controls[index].get('fieldname')), 1);
        this.getFilterFieldArray().removeAt(index);
    };
    /**
     * Genretae report
     * @param generateReportType
     */
    BillingSubactivityReportComponent.prototype.showGenerateReport = function (generateReportType, tabID, pageNumber, recordsPerPage) {
        var _this = this;
        var formValue = {};
        if (!tabID) {
            tabID = this.reportTabData['id'];
        }
        if (this.rightDragableModel.length) {
            formValue['output_field'] = [];
            this.rightDragableModel.map(function (item) {
                formValue['output_field'].push(item.field_name);
            });
            formValue['output_field'] = formValue['output_field'].join();
            if (this.getFilterFieldArray().length) {
                formValue['search'] = [];
                this.getFilterFieldArray().value.map(function (item) {
                    // console.log(item['value']);
                    if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
                        if (Array.isArray(item['value'])) {
                            item['value'] = item['value'].toString();
                        }
                        else {
                            if (_this.checkIsFieldValueIsDate(item['value'])) {
                                if (Number(item['value']) > 0 && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](item['value'])) {
                                    item['value'] = item['value'];
                                }
                                else {
                                    item['value'] = moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD');
                                }
                            }
                            else {
                                item['value'] = item['value'];
                            }
                        }
                        if (item['condition'] === 'between') {
                            if (item['value']) {
                                formValue['search'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': 'greaterthanequal',
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD')
                                });
                            }
                            if (item['value2']) {
                                formValue['search'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': 'lessthanequal',
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value2']).format('YYYY-MM-DD')
                                });
                            }
                        }
                        else {
                            formValue['search'].push({
                                'fieldname': item['fieldname']['field_name'],
                                'condition': item['condition'],
                                'value': item['value'],
                            });
                        }
                    }
                });
            }
            formValue['search'].length === 0 ? delete formValue['search'] : formValue['search'] = JSON.stringify(formValue['search']);
            if (generateReportType) {
                formValue['excel'] = 1;
                formValue['records'] = 'all';
                this._commonCrudService.downloadReport(this.tabApiURL, formValue, {}, this.tabReportName, 0).subscribe(function (response) {
                });
            }
            else {
                formValue['pageNumber'] = (pageNumber) ? pageNumber : 1;
                formValue['recordsPerPage'] = (recordsPerPage) ? recordsPerPage : this.rpageSize;
                this._commonCrudService.generatReport(this.tabApiURL, formValue).subscribe(function (Response) {
                    _this.generatedReportList = Response.payload.data;
                    _this.rpage = Response.pager.pageNumber;
                    _this.rpageIndex = _this.rpage - 1;
                    _this.rtotalRecords = +Response.pager.totalRecords;
                    _this.reportColumn = (_this.generatedReportList[0]) ? Object.keys(_this.generatedReportList[0]) : [];
                    _this.showHideReport = true;
                });
            }
        }
        else {
            this._sharedService.setToastMessage('Please select atleast one output field', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
        }
    };
    /**
     * on change of field type assign it to the selectedReportfilter and assign ites field
     * condition and condition value to be perform.
     * @param value
     * @param i
     */
    BillingSubactivityReportComponent.prototype.changeFieldName = function (value, i, selectedItem) {
        var indOfField = this.ReportList.findIndex(function (x) { return +x.id === +value.id; });
        if (this.ReportList[indOfField].field_name === 'trading_name' || this.ReportList[indOfField].field_name === 'billing_name' || this.ReportList[indOfField].field_name === 'entity_name' || this.ReportList[indOfField].field_name === 'code') {
            if (selectedItem) {
                this.onSearch(this.ReportList[indOfField].field_name, 1, selectedItem['value']);
                this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            }
            else {
                this.onSearch(this.ReportList[indOfField].field_name);
                this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            }
        }
        else if (indOfField > -1) {
            this.onSearch(this.ReportList[indOfField].field_name);
            // console.log(2);
            this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            this.selectedReportValue[i] = this.ReportList[indOfField].field_value_array;
            if (selectedItem) {
                if (this.ReportList[indOfField].field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTNUMERIC) {
                    var itemValue = selectedItem['value'];
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
                else if (this.ReportList[indOfField].field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTBOX) {
                    var itemValue = selectedItem['value'];
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
                else {
                    var itemValue = this.getArrayToString(selectedItem['value'], ',');
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
            }
        }
    };
    /**
     * on change of field type assign it to the selectedReportfilter and assign ites field
     * condition and condition value to be perform.
     * @param value
     * @param i
     */
    BillingSubactivityReportComponent.prototype.onSelectShowHideField = function (value, i, selectedItem) {
    };
    /**
     * Save Client Report
     * @param isValid
     * @param formValue
     */
    BillingSubactivityReportComponent.prototype.saveClientReport = function (isValid, formValue) {
        var _this = this;
        if (isValid) {
            if (this.rightDragableModel.length) {
                formValue['output'] = [];
                formValue['filter_output_field'] = [];
                this.rightDragableModel.map(function (item) {
                    formValue['output'].push(item.field_name);
                    formValue['filter_output_field'].push(item.field_title);
                });
                formValue['output'] = formValue['output'].join();
                formValue['filter_output_field'] = formValue['filter_output_field'].join();
                formValue['tab_id'] = this.reportTabData['id'];
                if (this.getFilterFieldArray().length) {
                    formValue['filter_condition_value'] = [];
                    this.getFilterFieldArray().value.map(function (item) {
                        if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
                            if (Array.isArray(item['value'])) {
                                item['value'] = item['value'].toString();
                            }
                            else {
                                if (_this.checkIsFieldValueIsDate(item['value'])) {
                                    if (Number(item['value']) > 0 && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](item['value'])) {
                                        item['value'] = item['value'];
                                    }
                                    else {
                                        item['value'] = moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD');
                                    }
                                }
                                else {
                                    item['value'] = item['value'];
                                }
                            }
                            if (item['condition'] === 'between') {
                                formValue['filter_condition_value'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': item['condition'],
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD'),
                                    'value2': moment__WEBPACK_IMPORTED_MODULE_11__(item['value2']).format('YYYY-MM-DD'),
                                });
                            }
                            else {
                                formValue['filter_condition_value'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': item['condition'],
                                    'value': item['value']
                                });
                            }
                        }
                    });
                }
                formValue['filter_condition_value'].length === 0 ? delete formValue['filter_condition_value'] : formValue['filter_condition_value'] = JSON.stringify(formValue['filter_condition_value']);
                if (this.selectedClientReport) {
                    formValue['_method'] = 'put';
                    // this.reportTabData['id'],
                    this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_UPDATE, this.selectedClientReport.id, formValue).subscribe(function (Response) {
                        _this.rightDragableModel = [];
                        _this.initializeMethod();
                    });
                }
                else {
                    // this.reportTabData['id']
                    this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_ADD + '/' + this.reportTabData['id'], formValue).subscribe(function (Response) {
                        _this.rightDragableModel = [];
                        _this.initializeMethod();
                    });
                }
            }
            else {
                this._sharedService.setToastMessage('Please select atleast one output field', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
            }
        }
    };
    // event
    /**
     * pagination event
     * @param event
     */
    BillingSubactivityReportComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getClientReportList(this.reportTabData['id'], event.pageIndex + 1);
    };
    /**
     * pagination event
     * @param event
     */
    BillingSubactivityReportComponent.prototype.onPageReportChange = function (event) {
        this.showGenerateReport(0, this.reportTabData['id'], event.pageIndex + 1, event.pageSize);
    };
    BillingSubactivityReportComponent.prototype.onViewBillingInformation = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].UPDATE_CLIENT]);
    };
    /**
     * reset filter
     */
    BillingSubactivityReportComponent.prototype.resetFilterField = function () {
        this.createClientReportForm();
    };
    /**
     * reset output field by push it to the left draggable model and make it empty.
     */
    BillingSubactivityReportComponent.prototype.resetOutputField = function () {
        var _this = this;
        this.rightDragableModel.map(function (item) {
            _this.leftDragableModel.push(item);
        });
        this.rightDragableModel = [];
    };
    /**
     * set output field by push it to the right draggable model and make it empty.
     */
    BillingSubactivityReportComponent.prototype.addFieldToOutput = function () {
        this.rightDragableModel = this.outPutFieldList;
        this.leftDragableModel = [];
    };
    /**
     * delete client report.
     * @param clientReport
     */
    BillingSubactivityReportComponent.prototype.deleteClientReport = function (clientReport) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this report ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_DELETE, clientReport.id).subscribe(function (Response) {
                    _this.getClientReportList(_this.reportTabData['id'], 1);
                });
            }
        });
    };
    /**
     * get the user list to whom admin want to share document.
     * @param clientReport
     */
    BillingSubactivityReportComponent.prototype.shareDocumentWithUser = function (clientReport) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_SHARED_USER_LIST + '/' + clientReport.report_saved_id, {}, {}).subscribe(function (Response) {
            Response.payload.data['clientData'] = clientReport;
            var dialogRef = _this.dialog.open(_client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ShareReportDialogComponent"], {
                width: '500px',
                data: {
                    content: Response.payload.data
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
            });
        });
    };
    /**
     * local sort the report data based on key and value
     * @param sortKey
     * @param sortVal
     */
    BillingSubactivityReportComponent.prototype.getSortClientReportData = function (sortKey, sortVal) {
        this.clientReportSortBy = sortKey;
        this.clientReportSortOrder = sortVal;
        var sortedArray = this.clientReportList.sort(function (objOne, objTwo) {
            if (objOne[sortKey] > objTwo[sortKey]) {
                return 1;
            }
            if (objOne[sortKey] < objTwo[sortKey]) {
                return -1;
            }
            return 0;
        });
        if (sortVal === 'asc') {
            this.clientReportList = sortedArray;
        }
        else {
            this.clientReportList = sortedArray.reverse();
        }
    };
    /**
     * load the specific document and its content and remove already selected output fields if there is any.
     * @param clientReport
     */
    BillingSubactivityReportComponent.prototype.loadDocument = function (clientReport) {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_VIEW, clientReport.id).subscribe(function (Response) {
            _this.rightDragableModel.map(function (item) {
                _this.leftDragableModel.push(item);
            });
            _this.rightDragableModel = [];
            _this.leftDragableModel = _this.outPutFieldList;
            _this.selectedClientReport = Response.payload.data;
            _this.createReportDataForm();
            _this.selectedClientReport.outputList = _this.selectedClientReport.output.split(',');
            if (_this.selectedClientReport.outputList.length) {
                _this.selectedClientReport.outputList.map(function (report) {
                    var ind = _this.outPutFieldList.findIndex(function (x) { return x.field_name === report; });
                    _this.rightDragableModel.push(_this.outPutFieldList[ind]);
                    _this.leftDragableModel.splice(ind, 1);
                });
            }
            if (_this.selectedClientReport.filter_condition_value !== null) {
                if (JSON.parse(_this.selectedClientReport.filter_condition_value).length) {
                    _this.clientForm = _this._fb.group({
                        clientReportFields: _this._fb.array([])
                    });
                }
                _this.selectedClientReport.filter_condition_valueList = JSON.parse(_this.selectedClientReport.filter_condition_value);
                var i_1 = 0;
                _this.selectedClientReport.filter_condition_valueList.map(function (item) {
                    var indOfField = _this.ReportList.findIndex(function (x) { return x.field_name === item.fieldname; });
                    _this.changeFieldName(_this.ReportList[indOfField], i_1, item);
                    _this.getFilterFieldArray().push(_this.createClientReportGroup(_this.ReportList[indOfField], item));
                    i_1++;
                });
            }
        });
    };
    // helper
    // get function for returning pageNumber and page size at time of listing api
    BillingSubactivityReportComponent.prototype.getQueryParams = function (page) {
        return {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
    };
    /**
     * Get Client List
     */
    BillingSubactivityReportComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.tradingList = response;
            _this.billingList = response;
            _this.nameList = response;
            _this.codeList = response;
        });
    };
    /**
     * On Search Of Data
     * @param key
     */
    BillingSubactivityReportComponent.prototype.onSearch = function (key, format, selectedIDS) {
        if (key === 'billing_name') {
            if (Number(format) === 1) {
                this.selectedBillingEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'trading_name') {
            if (Number(format) === 1) {
                this.selectedTradingEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'entity_name') {
            if (Number(format) === 1) {
                this.selectedNameEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'code') {
            if (Number(format) === 1) {
                this.selectedCodeEntity = this.getArrayToString(selectedIDS, ',', 1);
            }
        }
    };
    /**
     * Get array values from string
     * @param {string} value
     * @param {string} seperator
     * @returns {string[]}
     */
    BillingSubactivityReportComponent.prototype.getArrayToString = function (value, seperator, isNotNumber) {
        if (value) {
            var valueOne_1 = [];
            value.split(seperator).map(function (item) {
                if (isNotNumber) {
                    valueOne_1.push(item);
                }
                else {
                    valueOne_1.push(Number(item));
                }
            });
            return valueOne_1;
        }
    };
    /**
     * Get Report Tab API UR AND Tab Report Name
     * @param tabID
     */
    BillingSubactivityReportComponent.prototype.getTabReportAPIURL = function (tabID) {
        if (+tabID === this.BSAR) {
            this.tabApiURL = _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_SUBACTIVITY_GENERATE_REPORT;
            this.tabReportName = 'Billing Subactivity Report ';
        }
    };
    /**
     * get report list and pass its field condition value for drop down from constant as well as whose group id = 1 and
     * field value = "" and type = 'DD' then assign its filter value from API.
     * @param clientTypeId
     */
    BillingSubactivityReportComponent.prototype.getClientFilterFiled = function (clientTypeId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, { 'type': 'filter' }).subscribe(function (Response) {
            _this.ReportList = Response.payload.data;
            _this.rpage = Response.pager.pageNumber;
            _this.rpageIndex = _this.rpage - 1;
            _this.rtotalRecords = +Response.pager.totalRecords;
            if (+_this.reportTabData['id'] === _this.BSAR) {
                _this.ReportList.map(function (item) {
                    if (item.field_value) {
                        item.isCommaSeperated = false;
                        if (item.field_value === 'yesNo') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNo"].slice(1);
                        }
                        else if (item.field_value === 'yesNoNa') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNoNa"].slice(1);
                        }
                        else if (item.field_value === 'yesNoOther') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNoOther"].slice(1);
                        }
                        else {
                            item.isCommaSeperated = true;
                            item.field_value_array = item.field_value.split(',');
                        }
                    }
                    else {
                        // If Client Code And Entity Name Fetch
                        if (item.field_name === 'code' || item.field_name === 'entity_name'
                            || item.field_name === 'billing_name' || item.field_name === 'trading_name') {
                            item.isMultiSelect = true;
                            item.isCommaSeperated = false;
                        }
                        else if (item.field_name === 'service_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.serviceList;
                        }
                        else if (item.field_name === 'frequency_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.frequencyList;
                        }
                        else if (item.field_name === 'subactivity_code') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.subactivityList;
                        }
                        // If User IDS are there then
                        if (_this.userIDArray.indexOf(Number(item.field_name)) > -1) {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var itemArray = _this.userList.filter(function (itemData) { return (itemData['designation_id']) ? itemData['designation_id']['id'] === Number(item.field_name) : 0; });
                            if (itemArray.length) {
                                _this.getUserListData = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.getUserListData.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.getUserListData = [];
                            }
                            item.field_value_array = _this.getUserListData;
                        }
                    }
                    if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTBOX) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["TBFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].DROPDOWN) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["DDFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].CALENDER) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["CLFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTNUMERIC) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["TNFIELDTYPE"];
                    }
                });
            }
        });
    };
    BillingSubactivityReportComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('DRAGULA_FACTS');
    };
    /**
     * On home page route
     */
    BillingSubactivityReportComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Check If field value is date
     * @param value
     */
    /**
     * Check If field value is date
     * @param value
     */
    BillingSubactivityReportComponent.prototype.checkIsFieldValueIsDate = function (value, type) {
        if (type === void 0) { type = 0; }
        // console.log(value);
        if ((value === '' || value === null || value === '0000-00-00' || value === '0000-00-00 00:00:00' || value === '1899-11-30' || value === '1970-01-01' || (Number(value) > 0)) && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](value)) {
            if (Number(value) > 0) {
                // console.log('A - ' + value);
                return value;
            }
            else {
                return '';
            }
        }
        else {
            var dateFormat = moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](value);
            // console.log(dateFormat);
            if (dateFormat) {
                var item = moment__WEBPACK_IMPORTED_MODULE_11__(new Date(value));
                var itemValue = item.format('DD-MM-YYYY');
                // console.log(itemValue);
                if (itemValue === '' || itemValue === null || itemValue === '0000-00-00' || itemValue === '0000-00-00 00:00:00' || itemValue === '30-11-1899' || itemValue === '01-01-1970') {
                    return '';
                }
                else {
                    return itemValue;
                }
            }
            else {
                if (type === 1) {
                    return value;
                }
                else {
                    return '';
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('outputInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BillingSubactivityReportComponent.prototype, "outputField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BillingSubactivityReportComponent.prototype, "tabName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BillingSubactivityReportComponent.prototype, "tabID", void 0);
    BillingSubactivityReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing-subactivity-report',
            template: __webpack_require__(/*! ./billing-subactivity-report.component.html */ "./src/app/admin/report/billing-subactivity-report/billing-subactivity-report.component.html"),
            styles: [__webpack_require__(/*! ./billing-subactivity-report.component.scss */ "./src/app/admin/report/billing-subactivity-report/billing-subactivity-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], ng2_dragula__WEBPACK_IMPORTED_MODULE_9__["DragulaService"]])
    ], BillingSubactivityReportComponent);
    return BillingSubactivityReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/report/billing-tax-turnover-report/billing-tax-turnover-report.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin/report/billing-tax-turnover-report/billing-tax-turnover-report.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"common-report-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>REPORTS</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">{{reportTabData['name']}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Saved Report</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n\r\n            <th width=\"15%\" (click)=\"getSortClientReportData('report_name',\r\n             (clientReportSortBy === 'report_name') ? (clientReportSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Report Name\r\n              <i *ngIf=\"clientReportSortBy === 'report_name'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientReportSortBy === 'report_name'),\r\n            'icon-up' : ((clientReportSortBy === 'report_name') && (clientReportSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientReportSortBy === 'report_name') ? ((clientReportSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"60%\" (click)=\"getSortClientReportData('report_output',\r\n             (clientReportSortBy === 'report_output') ? (clientReportSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Output Field\r\n              <i *ngIf=\"clientReportSortBy === 'report_output'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientReportSortBy === 'report_output'),\r\n            'icon-up' : ((clientReportSortBy === 'report_output') && (clientReportSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientReportSortBy === 'report_output') ? ((clientReportSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\">Report Owner</th>\r\n\r\n            <th width=\"10%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody *ngIf=\"clientReportList.length\">\r\n            <tr *ngFor=\"let clientReport of clientReportList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"15%\">{{clientReport?.name}}</td>\r\n              <td width=\"60%\" class=\"word-break\">{{clientReport?.filter_output_field}}</td>\r\n              <td width=\"10%\">{{clientReport?.created_by?.userfullname}}</td>\r\n              <td width=\"10%\">\r\n                <mat-icon *ngIf=\"tabData['view']\" class=\"primary-color\" [matTooltip]=\"'Load Report'\"\r\n                          (click)=\"loadDocument(clientReport)\">\r\n                  timelapse\r\n                </mat-icon>\r\n                <mat-icon *ngIf=\"tabData['add_edit']\" class=\"primary-color\" [matTooltip]=\"'Share Report'\"\r\n                          (click)=\"shareDocumentWithUser(clientReport)\">share\r\n                </mat-icon>\r\n                <mat-icon *ngIf=\"tabData['delete']\" class=\"red-color\" [matTooltip]=\"'Delete Report'\"\r\n                          (click)=\"deleteClientReport(clientReport)\">\r\n                  delete\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n            <tbody *ngIf=\"clientReportList.length ===0\" class=\"panel-title\">No Records Found.!</tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n    <table>\r\n      <tfoot>\r\n      <tr>\r\n        <td colspan=\"10\">\r\n          <mat-paginator [length]=\"totalRecords\"\r\n                         [pageSize]=\"pageSize\"\r\n                         [pageIndex]=\"pageIndex\"\r\n                         [pageSizeOptions]=\"pageArray\"\r\n                         (page)=\"onPageChange($event)\">\r\n          </mat-paginator>\r\n        </td>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <!--Start add filter field-->\r\n  <div class=\"section-sepration PB-30\">\r\n    <span class=\"panel-title\">Filter Field</span>\r\n    <span class=\"MR-10 on-right \"><button class=\"open-dialog-btn primary-color\" (click)=\"resetFilterField()\"><mat-icon>clear_all</mat-icon>Reset Filter</button></span>\r\n    <form [formGroup]=\"clientForm\">\r\n      <div formArrayName=\"clientReportFields\">\r\n        <div class=\"row col-md-12\" *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index\"\r\n             [formGroupName]=\"i\">\r\n          <!-- | slice: ((followingUserLength === 0 && followingUserListLength === 0) ? 4 : 0) -->\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Filter Field\" formControlName=\"fieldname\"\r\n                          (selectionChange)=\"changeFieldName($event.value, i)\">\r\n                <mat-option *ngFor=\"let report of ReportList\" [value]=\"report\">{{report?.field_title}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Select Filter\" formControlName=\"condition\"\r\n                          (selectionChange)=\"onSelectShowHideField($event.value, i)\">\r\n                <mat-option *ngFor=\"let fType of selectedReportFilter[i]\" [value]=\"fType?.key\">{{fType?.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'TB'\">\r\n            <mat-form-field>\r\n              <input matInput [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                     formControlName=\"value\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'TN'\">\r\n            <mat-form-field>\r\n              <input type=\"number\" matInput\r\n                     [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                     formControlName=\"value\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && getFilterFieldArray().controls[i].get('fieldname').value['isCommaSeperated']\">\r\n            <mat-form-field>\r\n              <mat-select [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                          formControlName=\"value\">\r\n                <mat-option *ngFor=\"let fTypeValue of selectedReportValue[i]\" [value]=\"fTypeValue\">{{fTypeValue}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && getFilterFieldArray().controls[i].get('fieldname').value['isMultiSelect']\">\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'trading_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"tradingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #TradingName\r\n                         [(ngModel)]=\"selectedTradingEntity\">\r\n              </ng-select>\r\n            </div>\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'billing_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"billingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"billing_name\"\r\n                         placeholder=\"Billing Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #BillingName\r\n                         [(ngModel)]=\"selectedBillingEntity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'entity_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"nameList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Entity Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #Name\r\n                         [(ngModel)]=\"selectedNameEntity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'code'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"codeList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"code\"\r\n                         placeholder=\"Client Code\"\r\n                         bindValue=\"code\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #Code\r\n                         [(ngModel)]=\"selectedCodeEntity\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && !getFilterFieldArray().controls[i].get('fieldname').value['isCommaSeperated'] && !getFilterFieldArray().controls[i].get('fieldname').value['isMultiSelect']\">\r\n            <mat-form-field>\r\n              <mat-select [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                          formControlName=\"value\" [(ngModel)]=\"selectedReportUpdatedValue[i]\" [multiple]=\"true\">\r\n                <mat-option *ngFor=\"let fTypeValue of selectedReportValue[i]\" [value]=\"fTypeValue?.key\">\r\n                  {{fTypeValue?.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value !== 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"date.open()\" formControlName=\"value\" [matDatepicker]=\"DateRef\"\r\n                     placeholder=\"Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"DateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #date #DateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value === 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"fromdate.open()\" formControlName=\"value\" [matDatepicker]=\"FrDateRef\"\r\n                     placeholder=\"From Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"FrDateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #fromdate #FrDateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value === 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"todate.open()\" formControlName=\"value2\" [matDatepicker]=\"toDateRef\"\r\n                     placeholder=\"To Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"toDateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #todate #toDateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2 MT-15\" *ngIf=\"i === 0\">\r\n            <mat-icon class=\"mat-icon material-icons cursor-pointer primary-color\" (click)=\"addNewFilter(i)\">add\r\n            </mat-icon>\r\n          </div>\r\n          <div class=\"col-md-2 MT-15\" *ngIf=\"i !== 0\">\r\n            <mat-icon class=\"mat-icon material-icons cursor-pointer red-color\" (click)=\"removeFilter(i)\">\r\n              indeterminate_check_box\r\n            </mat-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <!--Start add output field-->\r\n  <div class=\"section-sepration output-field PB-30\">\r\n    <span class=\"panel-title\">Output Field</span>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"field-bg\">\r\n          <span class=\"panel-title\">Choose Field</span>\r\n          <span class=\"panel-title on-right black-color\"><button class=\"open-dialog-btn\" (click)=\"addFieldToOutput()\">Add All Fields</button></span>\r\n          <div class=\"panel-body primary-chip\" dragula=\"DRAGULA_FACTS\" id=\"leftDragableModel\"\r\n               [(dragulaModel)]=\"leftDragableModel\">\r\n            <mat-chip-list *ngFor=\"let oField of leftDragableModel\">\r\n              <mat-chip>{{oField?.field_title}}\r\n                <!--<mat-icon>done</mat-icon>-->\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"field-bg\">\r\n          <span class=\"panel-title turquoise-color\">Selected Field</span>\r\n          <button class=\"btn-primary on-right MT-5 MR-5\" (click)=\"showGenerateReport(0)\">Generate Report\r\n          </button>\r\n          <span class=\"panel-title on-right\"><button class=\"open-dialog-btn\"\r\n                                                     (click)=\"resetOutputField()\">Reset</button></span>\r\n\r\n          <div class=\"panel-body success-chip\" dragula=\"DRAGULA_FACTS\" id=\"rightDragableModel\"\r\n               [(dragulaModel)]=\"rightDragableModel\">\r\n            <mat-chip-list *ngFor=\"let oField of rightDragableModel\">\r\n              <mat-chip>{{oField?.field_title}}\r\n                <!--<mat-icon>done</mat-icon>-->\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n        <div class=\"MT-15\" *ngIf=\"tabData['add_edit']\">\r\n          <form [formGroup]=\"reportDataForm\" (submit)=\"saveClientReport(reportDataForm.valid, reportDataForm.value)\"\r\n                class=\"row on-right\">\r\n            <div class=\"col-md-7 PL-\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Report Name\" formControlName=\"name\"/>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-5 PLR-0\">\r\n              <button type=\"button\" (click)=\"saveClientReport(reportDataForm.valid, reportDataForm.value)\"\r\n                      class=\"btn-orange btn-bordered\" *ngIf=\"selectedClientReport\">\r\n                Update Report\r\n              </button>\r\n              <button type=\"submit\" class=\"btn-success\" *ngIf=\"!selectedClientReport\">\r\n                Save New Report\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- generate report -->\r\n  <div class=\"section-sepration with-filter-grid-container\" *ngIf=\"showHideReport\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Generate Report</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"showGenerateReport(1)\">\r\n                <span *ngIf=\"tabData['export']\">Excel</span> <i class=\"material-icons\">file_download</i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th *ngFor=\"let col of reportColumn\">{{col}}</th>\r\n            <th *ngIf=\"reportTabData['id'] === 15\">Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let report of generatedReportList; let i = index\">\r\n            <td *ngFor=\"let col of reportColumn\">{{checkIsFieldValueIsDate(report[col], 1)}}</td>\r\n            <td *ngIf=\"reportTabData['id'] === 15\">\r\n              <a target=\"_blank\" (click)=\"onViewBillingInformation()\" *ngIf=\"reportTabData['id'] === 15\">\r\n                <mat-icon class=\"primary-color\" [matTooltip]=\"'View Billing Information'\">visibility</mat-icon>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"rtotalRecords\"\r\n                             [pageSize]=\"rpageSize\"\r\n                             [pageIndex]=\"rpageIndex\"\r\n                             [pageSizeOptions]=\"rpageArray\"\r\n                             (page)=\"onPageReportChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/report/billing-tax-turnover-report/billing-tax-turnover-report.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin/report/billing-tax-turnover-report/billing-tax-turnover-report.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3JlcG9ydC9iaWxsaW5nLXRheC10dXJub3Zlci1yZXBvcnQvYmlsbGluZy10YXgtdHVybm92ZXItcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/report/billing-tax-turnover-report/billing-tax-turnover-report.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/report/billing-tax-turnover-report/billing-tax-turnover-report.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: BillingTaxTurnoverReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingTaxTurnoverReportComponent", function() { return BillingTaxTurnoverReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-dragula */ "../../node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../client-report/share-report-dialog/share-report-dialog.component */ "./src/app/admin/report/client-report/share-report-dialog/share-report-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var BillingTaxTurnoverReportComponent = /** @class */ (function () {
    function BillingTaxTurnoverReportComponent(_router, dialog, _fb, _commonCrudService, _sharedObjService, _sharedService, dragulaService) {
        this._router = _router;
        this.dialog = dialog;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        this.dragulaService = dragulaService;
        // Data Variables
        this.clientReportList = [];
        this.selectedClientReport = null;
        this.ReportList = [];
        this.outPutFieldList = [];
        this.serviceList = [];
        this.recurringList = [];
        this.softwareList = [];
        this.subactivityList = [];
        this.planListAll = [];
        this.stateList = [];
        this.cardNumberList = [];
        this.frequencyList = [];
        this.generatedReportList = [];
        this.reportColumn = [];
        this.selectedReportFilter = {};
        this.selectedReportValue = {};
        this.selectedReportUpdatedValue = {};
        this.reportTabData = {};
        this.reportArray = [];
        this.groupClientBelongsToList = [];
        // getUserListData = {};
        this.getUserListData = [];
        this.userList = [];
        this.entityList = {};
        this.leftDragableModel = [];
        this.rightDragableModel = [];
        // Pagination Data for Saved Report
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
        // Report Pagination
        this.rpageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        this.rpageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
        // MatPaginator Inputs
        this.length = 20;
        this.tradingList = [];
        this.selectedTradingEntity = [];
        this.billingList = [];
        this.selectedBillingEntity = [];
        this.nameList = [];
        this.selectedNameEntity = [];
        this.codeList = [];
        this.selectedCodeEntity = [];
        this.d = [];
        this.userIDArray = [9, 10, 14, 15, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75];
        this.tabApiURL = '';
        this.tabReportName = '';
        this.BTTR = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__["ADMINTABACCESS"].REPORT_BILLINGTAXTURNOVER;
        this.showHideReport = false;
        dragulaService.destroy('DRAGULA_FACTS');
        dragulaService.createGroup('DRAGULA_FACTS', {
            revertOnSpill: true,
            removeOnSpill: false,
        });
    }
    BillingTaxTurnoverReportComponent.prototype.ngOnInit = function () {
        this.reportTabData = {
            'id': (this.tabID) ? this.tabID : this.BTTR,
            'name': (this.tabName) ? this.tabName : 'BILLING TAX TURNOVER'
        };
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.reportTabData['id']);
        this.initializeMethod();
    };
    BillingTaxTurnoverReportComponent.prototype.initializeMethod = function () {
        this.selectedClientReport = null;
        this.getClientList();
        this.getUserList();
        this.getTabReportAPIURL(this.reportTabData['id']);
        this.getReportOutputField(this.reportTabData['id']);
        this.createReportDataForm();
        this.createClientReportForm();
        this.getClientReportList(this.reportTabData['id'], 1);
    };
    /**
     * Get User List
     */
    BillingTaxTurnoverReportComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, {
            'compare': { 'equal': { 'is_active': 1 } },
            'findinset': { 'team_id': [1, 2, 6] }
        }).subscribe(function (response) {
            _this.userList = response;
            _this.getClientFilterFiled(_this.reportTabData['id']);
        });
    };
    /**
     * get report output field for drag and drop
     * @param clientTypeId
     */
    BillingTaxTurnoverReportComponent.prototype.getReportOutputField = function (clientTypeId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, { 'type': 'output' }).subscribe(function (Response) {
            _this.outPutFieldList = Response.payload.data;
            _this.leftDragableModel = _this.outPutFieldList;
        });
    };
    /**
     * Create Report Form
     */
    BillingTaxTurnoverReportComponent.prototype.createClientReportForm = function () {
        this.clientForm = this._fb.group({
            clientReportFields: this._fb.array([this.createClientReportGroup()])
        });
    };
    /**
     * Create Report Data Form
     */
    BillingTaxTurnoverReportComponent.prototype.createReportDataForm = function () {
        this.reportDataForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedClientReport ? this.selectedClientReport.name : '')
        });
    };
    /**
     * Create Report Group Form
     */
    BillingTaxTurnoverReportComponent.prototype.createClientReportGroup = function (reportData, item) {
        return this._fb.group({
            fieldname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](reportData ? reportData : ''),
            condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['condition'] : ''),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['value'] : ''),
            value2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['value2'] : ''),
        });
    };
    /**
     * Get Client report list
     * @param tabId
     * @param pageNumber
     */
    BillingTaxTurnoverReportComponent.prototype.getClientReportList = function (tabId, pageNumber) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT + '/' + tabId, this.getQueryParams(pageNumber)).subscribe(function (Response) {
            _this.handleClientReportResponse(Response);
        });
    };
    /**
     * Get Filter Field Array
     */
    BillingTaxTurnoverReportComponent.prototype.getFilterFieldArray = function () {
        return this.clientForm.get('clientReportFields');
    };
    /**
     * Handle Client Report Response
     * @param response
     */
    BillingTaxTurnoverReportComponent.prototype.handleClientReportResponse = function (response) {
        this.clientReportList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
    };
    /**
     * add new filter
     * @param index
     */
    BillingTaxTurnoverReportComponent.prototype.addNewFilter = function (index) {
        if (this.getFilterFieldArray().length < 6) {
            this.reportArray.push(this.getFilterFieldArray().controls[index].get('fieldname'));
            this.getFilterFieldArray().push(this.createClientReportGroup());
        }
        else {
            this._sharedService.setToastMessage('You can add maximum five filter', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
        }
    };
    /**
     * remove row from filter collection
     * @param index
     */
    BillingTaxTurnoverReportComponent.prototype.removeFilter = function (index) {
        this.reportArray.splice(this.reportArray.indexOf(this.getFilterFieldArray().controls[index].get('fieldname')), 1);
        this.getFilterFieldArray().removeAt(index);
    };
    /**
     * Genretae report
     * @param generateReportType
     */
    BillingTaxTurnoverReportComponent.prototype.showGenerateReport = function (generateReportType, tabID, pageNumber, recordsPerPage) {
        var _this = this;
        var formValue = {};
        if (!tabID) {
            tabID = this.reportTabData['id'];
        }
        if (this.rightDragableModel.length) {
            formValue['output_field'] = [];
            this.rightDragableModel.map(function (item) {
                formValue['output_field'].push(item.field_name);
            });
            formValue['output_field'] = formValue['output_field'].join();
            if (this.getFilterFieldArray().length) {
                formValue['search'] = [];
                this.getFilterFieldArray().value.map(function (item) {
                    // console.log(item['value']);
                    if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
                        if (Array.isArray(item['value'])) {
                            item['value'] = item['value'].toString();
                        }
                        else {
                            if (_this.checkIsFieldValueIsDate(item['value'])) {
                                if (Number(item['value']) > 0 && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](item['value'])) {
                                    item['value'] = item['value'];
                                }
                                else {
                                    item['value'] = moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD');
                                }
                            }
                            else {
                                item['value'] = item['value'];
                            }
                        }
                        if (item['condition'] === 'between') {
                            if (item['value']) {
                                formValue['search'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': 'greaterthanequal',
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD')
                                });
                            }
                            if (item['value2']) {
                                formValue['search'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': 'lessthanequal',
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value2']).format('YYYY-MM-DD')
                                });
                            }
                        }
                        else {
                            formValue['search'].push({
                                'fieldname': item['fieldname']['field_name'],
                                'condition': item['condition'],
                                'value': item['value'],
                            });
                        }
                    }
                });
            }
            formValue['search'].length === 0 ? delete formValue['search'] : formValue['search'] = JSON.stringify(formValue['search']);
            if (generateReportType) {
                formValue['excel'] = 1;
                formValue['records'] = 'all';
                this._commonCrudService.downloadReport(this.tabApiURL, formValue, {}, this.tabReportName, 0).subscribe(function (response) {
                });
            }
            else {
                formValue['pageNumber'] = (pageNumber) ? pageNumber : 1;
                formValue['recordsPerPage'] = (recordsPerPage) ? recordsPerPage : this.rpageSize;
                this._commonCrudService.generatReport(this.tabApiURL, formValue).subscribe(function (Response) {
                    _this.generatedReportList = Response.payload.data;
                    _this.rpage = Response.pager.pageNumber;
                    _this.rpageIndex = _this.rpage - 1;
                    _this.rtotalRecords = +Response.pager.totalRecords;
                    _this.reportColumn = (_this.generatedReportList[0]) ? Object.keys(_this.generatedReportList[0]) : [];
                    _this.showHideReport = true;
                });
            }
        }
        else {
            this._sharedService.setToastMessage('Please select atleast one output field', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
        }
    };
    /**
     * on change of field type assign it to the selectedReportfilter and assign ites field
     * condition and condition value to be perform.
     * @param value
     * @param i
     */
    BillingTaxTurnoverReportComponent.prototype.changeFieldName = function (value, i, selectedItem) {
        var indOfField = this.ReportList.findIndex(function (x) { return +x.id === +value.id; });
        if (this.ReportList[indOfField].field_name === 'trading_name' || this.ReportList[indOfField].field_name === 'billing_name' || this.ReportList[indOfField].field_name === 'entity_name' || this.ReportList[indOfField].field_name === 'code') {
            if (selectedItem) {
                this.onSearch(this.ReportList[indOfField].field_name, 1, selectedItem['value']);
                this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            }
            else {
                this.onSearch(this.ReportList[indOfField].field_name);
                this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            }
        }
        else if (indOfField > -1) {
            this.onSearch(this.ReportList[indOfField].field_name);
            // console.log(2);
            this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            this.selectedReportValue[i] = this.ReportList[indOfField].field_value_array;
            if (selectedItem) {
                if (this.ReportList[indOfField].field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTNUMERIC) {
                    var itemValue = selectedItem['value'];
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
                else if (this.ReportList[indOfField].field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTBOX) {
                    var itemValue = selectedItem['value'];
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
                else {
                    var itemValue = this.getArrayToString(selectedItem['value'], ',');
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
            }
        }
    };
    /**
     * on change of field type assign it to the selectedReportfilter and assign ites field
     * condition and condition value to be perform.
     * @param value
     * @param i
     */
    BillingTaxTurnoverReportComponent.prototype.onSelectShowHideField = function (value, i, selectedItem) {
    };
    /**
     * Save Client Report
     * @param isValid
     * @param formValue
     */
    BillingTaxTurnoverReportComponent.prototype.saveClientReport = function (isValid, formValue) {
        var _this = this;
        if (isValid) {
            if (this.rightDragableModel.length) {
                formValue['output'] = [];
                formValue['filter_output_field'] = [];
                this.rightDragableModel.map(function (item) {
                    formValue['output'].push(item.field_name);
                    formValue['filter_output_field'].push(item.field_title);
                });
                formValue['output'] = formValue['output'].join();
                formValue['filter_output_field'] = formValue['filter_output_field'].join();
                formValue['tab_id'] = this.reportTabData['id'];
                if (this.getFilterFieldArray().length) {
                    formValue['filter_condition_value'] = [];
                    this.getFilterFieldArray().value.map(function (item) {
                        if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
                            if (Array.isArray(item['value'])) {
                                item['value'] = item['value'].toString();
                            }
                            else {
                                if (_this.checkIsFieldValueIsDate(item['value'])) {
                                    if (Number(item['value']) > 0 && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](item['value'])) {
                                        item['value'] = item['value'];
                                    }
                                    else {
                                        item['value'] = moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD');
                                    }
                                }
                                else {
                                    item['value'] = item['value'];
                                }
                            }
                            if (item['condition'] === 'between') {
                                formValue['filter_condition_value'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': item['condition'],
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD'),
                                    'value2': moment__WEBPACK_IMPORTED_MODULE_11__(item['value2']).format('YYYY-MM-DD'),
                                });
                            }
                            else {
                                formValue['filter_condition_value'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': item['condition'],
                                    'value': item['value']
                                });
                            }
                        }
                    });
                }
                formValue['filter_condition_value'].length === 0 ? delete formValue['filter_condition_value'] : formValue['filter_condition_value'] = JSON.stringify(formValue['filter_condition_value']);
                if (this.selectedClientReport) {
                    formValue['_method'] = 'put';
                    // this.reportTabData['id'],
                    this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_UPDATE, this.selectedClientReport.id, formValue).subscribe(function (Response) {
                        _this.rightDragableModel = [];
                        _this.initializeMethod();
                    });
                }
                else {
                    // this.reportTabData['id']
                    this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_ADD + '/' + this.reportTabData['id'], formValue).subscribe(function (Response) {
                        _this.rightDragableModel = [];
                        _this.initializeMethod();
                    });
                }
            }
            else {
                this._sharedService.setToastMessage('Please select atleast one output field', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
            }
        }
    };
    // event
    /**
     * pagination event
     * @param event
     */
    BillingTaxTurnoverReportComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getClientReportList(this.reportTabData['id'], event.pageIndex + 1);
    };
    /**
     * pagination event
     * @param event
     */
    BillingTaxTurnoverReportComponent.prototype.onPageReportChange = function (event) {
        this.showGenerateReport(0, this.reportTabData['id'], event.pageIndex + 1, event.pageSize);
    };
    BillingTaxTurnoverReportComponent.prototype.onViewBillingInformation = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].UPDATE_CLIENT]);
    };
    /**
     * reset filter
     */
    BillingTaxTurnoverReportComponent.prototype.resetFilterField = function () {
        this.createClientReportForm();
    };
    /**
     * reset output field by push it to the left draggable model and make it empty.
     */
    BillingTaxTurnoverReportComponent.prototype.resetOutputField = function () {
        var _this = this;
        this.rightDragableModel.map(function (item) {
            _this.leftDragableModel.push(item);
        });
        this.rightDragableModel = [];
    };
    /**
     * set output field by push it to the right draggable model and make it empty.
     */
    BillingTaxTurnoverReportComponent.prototype.addFieldToOutput = function () {
        this.rightDragableModel = this.outPutFieldList;
        this.leftDragableModel = [];
    };
    /**
     * delete client report.
     * @param clientReport
     */
    BillingTaxTurnoverReportComponent.prototype.deleteClientReport = function (clientReport) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this report ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_DELETE, clientReport.id).subscribe(function (Response) {
                    _this.getClientReportList(_this.reportTabData['id'], 1);
                });
            }
        });
    };
    /**
     * get the user list to whom admin want to share document.
     * @param clientReport
     */
    BillingTaxTurnoverReportComponent.prototype.shareDocumentWithUser = function (clientReport) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_SHARED_USER_LIST + '/' + clientReport.report_saved_id, {}, {}).subscribe(function (Response) {
            Response.payload.data['clientData'] = clientReport;
            var dialogRef = _this.dialog.open(_client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ShareReportDialogComponent"], {
                width: '500px',
                data: {
                    content: Response.payload.data
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
            });
        });
    };
    /**
     * local sort the report data based on key and value
     * @param sortKey
     * @param sortVal
     */
    BillingTaxTurnoverReportComponent.prototype.getSortClientReportData = function (sortKey, sortVal) {
        this.clientReportSortBy = sortKey;
        this.clientReportSortOrder = sortVal;
        var sortedArray = this.clientReportList.sort(function (objOne, objTwo) {
            if (objOne[sortKey] > objTwo[sortKey]) {
                return 1;
            }
            if (objOne[sortKey] < objTwo[sortKey]) {
                return -1;
            }
            return 0;
        });
        if (sortVal === 'asc') {
            this.clientReportList = sortedArray;
        }
        else {
            this.clientReportList = sortedArray.reverse();
        }
    };
    /**
     * load the specific document and its content and remove already selected output fields if there is any.
     * @param clientReport
     */
    BillingTaxTurnoverReportComponent.prototype.loadDocument = function (clientReport) {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_VIEW, clientReport.id).subscribe(function (Response) {
            _this.rightDragableModel.map(function (item) {
                _this.leftDragableModel.push(item);
            });
            _this.rightDragableModel = [];
            _this.leftDragableModel = _this.outPutFieldList;
            _this.selectedClientReport = Response.payload.data;
            _this.createReportDataForm();
            _this.selectedClientReport.outputList = _this.selectedClientReport.output.split(',');
            if (_this.selectedClientReport.outputList.length) {
                _this.selectedClientReport.outputList.map(function (report) {
                    var ind = _this.outPutFieldList.findIndex(function (x) { return x.field_name === report; });
                    _this.rightDragableModel.push(_this.outPutFieldList[ind]);
                    _this.leftDragableModel.splice(ind, 1);
                });
            }
            if (_this.selectedClientReport.filter_condition_value !== null) {
                if (JSON.parse(_this.selectedClientReport.filter_condition_value).length) {
                    _this.clientForm = _this._fb.group({
                        clientReportFields: _this._fb.array([])
                    });
                }
                _this.selectedClientReport.filter_condition_valueList = JSON.parse(_this.selectedClientReport.filter_condition_value);
                var i_1 = 0;
                _this.selectedClientReport.filter_condition_valueList.map(function (item) {
                    var indOfField = _this.ReportList.findIndex(function (x) { return x.field_name === item.fieldname; });
                    _this.changeFieldName(_this.ReportList[indOfField], i_1, item);
                    _this.getFilterFieldArray().push(_this.createClientReportGroup(_this.ReportList[indOfField], item));
                    i_1++;
                });
            }
        });
    };
    // helper
    // get function for returning pageNumber and page size at time of listing api
    BillingTaxTurnoverReportComponent.prototype.getQueryParams = function (page) {
        return {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
    };
    /**
     * Get Client List
     */
    BillingTaxTurnoverReportComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.tradingList = response;
            _this.billingList = response;
            _this.nameList = response;
            _this.codeList = response;
        });
    };
    /**
     * On Search Of Data
     * @param key
     */
    BillingTaxTurnoverReportComponent.prototype.onSearch = function (key, format, selectedIDS) {
        if (key === 'billing_name') {
            if (Number(format) === 1) {
                this.selectedBillingEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'trading_name') {
            if (Number(format) === 1) {
                this.selectedTradingEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'entity_name') {
            if (Number(format) === 1) {
                this.selectedNameEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'code') {
            if (Number(format) === 1) {
                this.selectedCodeEntity = this.getArrayToString(selectedIDS, ',', 1);
            }
        }
    };
    /**
     * Get array values from string
     * @param {string} value
     * @param {string} seperator
     * @returns {string[]}
     */
    BillingTaxTurnoverReportComponent.prototype.getArrayToString = function (value, seperator, isNotNumber) {
        if (value) {
            var valueOne_1 = [];
            value.split(seperator).map(function (item) {
                if (isNotNumber) {
                    valueOne_1.push(item);
                }
                else {
                    valueOne_1.push(Number(item));
                }
            });
            return valueOne_1;
        }
    };
    /**
     * Get Report Tab API UR AND Tab Report Name
     * @param tabID
     */
    BillingTaxTurnoverReportComponent.prototype.getTabReportAPIURL = function (tabID) {
        if (+tabID === this.BTTR) {
            this.tabApiURL = _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_TAX_TURNOVER_GENERATE_REPORT;
            this.tabReportName = 'BILLING TAX TURNOVER ';
        }
    };
    /**
     * get report list and pass its field condition value for drop down from constant as well as whose group id = 1 and
     * field value = "" and type = 'DD' then assign its filter value from API.
     * @param clientTypeId
     */
    BillingTaxTurnoverReportComponent.prototype.getClientFilterFiled = function (clientTypeId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, { 'type': 'filter' }).subscribe(function (Response) {
            _this.ReportList = Response.payload.data;
            _this.rpage = Response.pager.pageNumber;
            _this.rpageIndex = _this.rpage - 1;
            _this.rtotalRecords = +Response.pager.totalRecords;
            if (+_this.reportTabData['id'] === _this.BTTR) {
                _this.ReportList.map(function (item) {
                    if (item.field_value) {
                        item.isCommaSeperated = false;
                        if (item.field_value === 'yesNo') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNo"].slice(1);
                        }
                        else if (item.field_value === 'yesNoNa') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNoNa"].slice(1);
                        }
                        else if (item.field_value === 'yesNoOther') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNoOther"].slice(1);
                        }
                        else if (item.field_value === 'taxCondition') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["taxCondition"];
                        }
                        else {
                            item.isCommaSeperated = true;
                            item.field_value_array = item.field_value.split(',');
                        }
                    }
                    else {
                        // If Client Code And Entity Name Fetch
                        if (item.field_name === 'code' || item.field_name === 'entity_name'
                            || item.field_name === 'billing_name' || item.field_name === 'trading_name') {
                            item.isMultiSelect = true;
                            item.isCommaSeperated = false;
                        }
                        // If User IDS are there then
                        if (_this.userIDArray.indexOf(Number(item.field_name)) > -1) {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var itemArray = _this.userList.filter(function (itemData) { return (itemData['designation_id']) ? itemData['designation_id']['id'] === Number(item.field_name) : 0; });
                            if (itemArray.length) {
                                _this.getUserListData = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.getUserListData.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.getUserListData = [];
                            }
                            item.field_value_array = _this.getUserListData;
                        }
                    }
                    if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTBOX) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["TBFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].DROPDOWN) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["DDFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].CALENDER) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["CLFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTNUMERIC) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["TNFIELDTYPE"];
                    }
                });
            }
        });
    };
    BillingTaxTurnoverReportComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('DRAGULA_FACTS');
    };
    /**
     * On home page route
     */
    BillingTaxTurnoverReportComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Check If field value is date
     * @param value
     */
    /**
     * Check If field value is date
     * @param value
     */
    BillingTaxTurnoverReportComponent.prototype.checkIsFieldValueIsDate = function (value, type) {
        if (type === void 0) { type = 0; }
        // console.log(value);
        if ((value === '' || value === null || value === '0000-00-00' || value === '0000-00-00 00:00:00' || value === '1899-11-30' || value === '1970-01-01' || (Number(value) > 0)) && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](value)) {
            if (Number(value) > 0) {
                // console.log('A - ' + value);
                return value;
            }
            else {
                return '';
            }
        }
        else {
            var dateFormat = moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](value);
            // console.log(dateFormat);
            if (dateFormat) {
                var item = moment__WEBPACK_IMPORTED_MODULE_11__(new Date(value));
                var itemValue = item.format('DD-MM-YYYY');
                // console.log(itemValue);
                if (itemValue === '' || itemValue === null || itemValue === '0000-00-00' || itemValue === '0000-00-00 00:00:00' || itemValue === '30-11-1899' || itemValue === '01-01-1970') {
                    return '';
                }
                else {
                    return itemValue;
                }
            }
            else {
                if (type === 1) {
                    return value;
                }
                else {
                    return '';
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('outputInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BillingTaxTurnoverReportComponent.prototype, "outputField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BillingTaxTurnoverReportComponent.prototype, "tabName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BillingTaxTurnoverReportComponent.prototype, "tabID", void 0);
    BillingTaxTurnoverReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing-tax-turnover-report',
            template: __webpack_require__(/*! ./billing-tax-turnover-report.component.html */ "./src/app/admin/report/billing-tax-turnover-report/billing-tax-turnover-report.component.html"),
            styles: [__webpack_require__(/*! ./billing-tax-turnover-report.component.scss */ "./src/app/admin/report/billing-tax-turnover-report/billing-tax-turnover-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], ng2_dragula__WEBPACK_IMPORTED_MODULE_9__["DragulaService"]])
    ], BillingTaxTurnoverReportComponent);
    return BillingTaxTurnoverReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/report/client-allocation-report/client-allocation-report.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/report/client-allocation-report/client-allocation-report.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-client-report [tabName]=\"'CLIENT ALLOCATION REPORT'\" [tabID]=\"tabID\"></app-client-report>\r\n"

/***/ }),

/***/ "./src/app/admin/report/client-allocation-report/client-allocation-report.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/report/client-allocation-report/client-allocation-report.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3JlcG9ydC9jbGllbnQtYWxsb2NhdGlvbi1yZXBvcnQvY2xpZW50LWFsbG9jYXRpb24tcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/report/client-allocation-report/client-allocation-report.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/report/client-allocation-report/client-allocation-report.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ClientAllocationReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAllocationReportComponent", function() { return ClientAllocationReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientAllocationReportComponent = /** @class */ (function () {
    function ClientAllocationReportComponent() {
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__["ADMINTABACCESS"].REPORT_CLIENTALLOCATIONREPORT;
    }
    ClientAllocationReportComponent.prototype.ngOnInit = function () {
    };
    ClientAllocationReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-allocation-report',
            template: __webpack_require__(/*! ./client-allocation-report.component.html */ "./src/app/admin/report/client-allocation-report/client-allocation-report.component.html"),
            styles: [__webpack_require__(/*! ./client-allocation-report.component.scss */ "./src/app/admin/report/client-allocation-report/client-allocation-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientAllocationReportComponent);
    return ClientAllocationReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/report/client-report/client-report.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/report/client-report/client-report.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"common-report-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>REPORTS</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">{{reportTabData['name']}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Saved Report</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n\r\n            <th width=\"15%\" (click)=\"getSortClientReportData('report_name',\r\n             (clientReportSortBy === 'report_name') ? (clientReportSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Report Name\r\n              <i *ngIf=\"clientReportSortBy === 'report_name'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientReportSortBy === 'report_name'),\r\n            'icon-up' : ((clientReportSortBy === 'report_name') && (clientReportSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientReportSortBy === 'report_name') ? ((clientReportSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"60%\" (click)=\"getSortClientReportData('report_output',\r\n             (clientReportSortBy === 'report_output') ? (clientReportSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Output Field\r\n              <i *ngIf=\"clientReportSortBy === 'report_output'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientReportSortBy === 'report_output'),\r\n            'icon-up' : ((clientReportSortBy === 'report_output') && (clientReportSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientReportSortBy === 'report_output') ? ((clientReportSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\">Report Owner</th>\r\n\r\n            <th width=\"10%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody *ngIf=\"clientReportList.length > 0\">\r\n            <tr *ngFor=\"let clientReport of clientReportList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"15%\">{{clientReport?.name}}</td>\r\n              <td width=\"60%\" class=\"word-break\">{{clientReport?.filter_output_field}}</td>\r\n              <td width=\"10%\">{{clientReport?.created_by?.userfullname}}</td>\r\n              <td width=\"10%\">\r\n                <mat-icon *ngIf=\"tabData['view']\" class=\"light-orange-color\" [matTooltip]=\"'Load Report'\"\r\n                          (click)=\"loadDocument(clientReport)\">\r\n                  timelapse\r\n                </mat-icon>\r\n                <mat-icon *ngIf=\"tabData['add_edit']\" class=\"wet-asphalt-color\" [matTooltip]=\"'Share Report'\"\r\n                          (click)=\"shareDocumentWithUser(clientReport)\">share\r\n                </mat-icon>\r\n                <mat-icon *ngIf=\"tabData['delete']\" class=\"red-color\" [matTooltip]=\"'Delete Report'\"\r\n                          (click)=\"deleteClientReport(clientReport)\">\r\n                  delete\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n            <tbody *ngIf=\"clientReportList.length ===0\" class=\"panel-title\">No Records Found</tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n    <table *ngIf=\"clientReportList.length\">\r\n      <tfoot>\r\n      <tr>\r\n        <td colspan=\"10\">\r\n          <mat-paginator [length]=\"totalRecords\"\r\n                         [pageSize]=\"pageSize\"\r\n                         [pageIndex]=\"pageIndex\"\r\n                         [pageSizeOptions]=\"pageArray\"\r\n                         (page)=\"onPageChange($event)\">\r\n          </mat-paginator>\r\n        </td>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <!--Start add filter field-->\r\n  <div class=\"section-sepration PB-30\">\r\n    <span class=\"panel-title\">Filter Field</span>\r\n    <span class=\"MR-10 on-right \"><button class=\"open-dialog-btn primary-color\" (click)=\"resetFilterField()\"><mat-icon>clear_all</mat-icon>Reset Filter</button></span>\r\n    <form [formGroup]=\"clientForm\">\r\n      <div formArrayName=\"clientReportFields\">\r\n        <div class=\"row col-md-12\" *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index\"\r\n             [formGroupName]=\"i\">\r\n          <!-- | slice: ((followingUserLength === 0 && followingUserListLength === 0) ? 4 : 0) -->\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Filter Field\" formControlName=\"fieldname\"\r\n                          (selectionChange)=\"changeFieldName($event.value, i)\">\r\n                <mat-option *ngFor=\"let report of ReportList\" [value]=\"report\">{{report?.field_title}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Select Filter\" formControlName=\"condition\"\r\n                          (selectionChange)=\"onSelectShowHideField($event.value, i)\">\r\n                <mat-option *ngFor=\"let fType of selectedReportFilter[i]\" [value]=\"fType?.key\">{{fType?.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'TB'\">\r\n            <mat-form-field>\r\n              <input matInput [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                     formControlName=\"value\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'TN'\">\r\n            <mat-form-field>\r\n              <input type=\"number\" matInput\r\n                     [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                     formControlName=\"value\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && getFilterFieldArray().controls[i].get('fieldname').value['isCommaSeperated']\">\r\n            <mat-form-field>\r\n              <mat-select [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                          formControlName=\"value\">\r\n                <mat-option *ngFor=\"let fTypeValue of selectedReportValue[i]\" [value]=\"fTypeValue\">{{fTypeValue}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && getFilterFieldArray().controls[i].get('fieldname').value['isMultiSelect']\">\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'parent_id'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"parentTradingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         (change)=\"onChangeParentEntity($event)\"\r\n                         formControlName=\"value\" #ParentTradingName\r\n                         [(ngModel)]=\"selectedParentTradingEntity\">\r\n              </ng-select>\r\n            </div>\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'trading_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"tradingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #TradingName\r\n                         [(ngModel)]=\"selectedTradingEntity\">\r\n              </ng-select>\r\n            </div>\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'billing_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"billingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"billing_name\"\r\n                         placeholder=\"Billing Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #BillingName\r\n                         [(ngModel)]=\"selectedBillingEntity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'entity_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"nameList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Entity Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #Name\r\n                         [(ngModel)]=\"selectedNameEntity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'code'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"codeList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"code\"\r\n                         placeholder=\"Client Code\"\r\n                         bindValue=\"code\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #Code\r\n                         [(ngModel)]=\"selectedCodeEntity\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && !getFilterFieldArray().controls[i].get('fieldname').value['isCommaSeperated'] && !getFilterFieldArray().controls[i].get('fieldname').value['isMultiSelect']\">\r\n            <mat-form-field>\r\n              <mat-select [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                          formControlName=\"value\" [(ngModel)]=\"selectedReportUpdatedValue[i]\" [multiple]=\"true\">\r\n                <mat-option *ngFor=\"let fTypeValue of selectedReportValue[i]\" [value]=\"fTypeValue?.key\">\r\n                  {{fTypeValue?.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value !== 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"date.open()\" formControlName=\"value\" [matDatepicker]=\"DateRef\"\r\n                     placeholder=\"Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"DateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #date #DateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value === 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"fromdate.open()\" formControlName=\"value\" [matDatepicker]=\"FrDateRef\"\r\n                     placeholder=\"From Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"FrDateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #fromdate #FrDateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value === 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"todate.open()\" formControlName=\"value2\" [matDatepicker]=\"toDateRef\"\r\n                     placeholder=\"To Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"toDateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #todate #toDateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2 MT-15\" *ngIf=\"i === 0\">\r\n            <mat-icon class=\"mat-icon material-icons cursor-pointer primary-color\" (click)=\"addNewFilter(i)\">add\r\n            </mat-icon>\r\n          </div>\r\n          <div class=\"col-md-2 MT-15\" *ngIf=\"i !== 0\">\r\n            <mat-icon class=\"mat-icon material-icons cursor-pointer red-color\" (click)=\"removeFilter(i)\">\r\n              indeterminate_check_box\r\n            </mat-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <!--Start add output field-->\r\n  <div class=\"section-sepration output-field PB-30\">\r\n    <span class=\"panel-title\">Output Field</span>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"field-bg\">\r\n          <span class=\"panel-title\">Choose Field</span>\r\n          <span class=\"panel-title on-right black-color\"><button class=\"open-dialog-btn\" (click)=\"addFieldToOutput()\">Add All Fields</button></span>\r\n          <div class=\"panel-body primary-chip\" dragula=\"DRAGULA_FACTS\" id=\"leftDragableModel\"\r\n               [(dragulaModel)]=\"leftDragableModel\">\r\n            <mat-chip-list *ngFor=\"let oField of leftDragableModel\">\r\n              <mat-chip>{{oField?.field_title}}\r\n                <!--<mat-icon>done</mat-icon>-->\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"field-bg\">\r\n          <span class=\"panel-title turquoise-color\">Selected Field</span>\r\n          <button class=\"btn-primary on-right MT-5 MR-5\" (click)=\"showGenerateReport(0)\">Generate Report\r\n          </button>\r\n          <span class=\"panel-title on-right\"><button class=\"open-dialog-btn\"\r\n                                                     (click)=\"resetOutputField()\">Reset</button></span>\r\n          <div class=\"panel-body success-chip\" dragula=\"DRAGULA_FACTS\" id=\"rightDragableModel\"\r\n               [(dragulaModel)]=\"rightDragableModel\">\r\n            <mat-chip-list *ngFor=\"let oField of rightDragableModel\">\r\n              <mat-chip>{{oField?.field_title}}\r\n                <!--<mat-icon>done</mat-icon>-->\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n        <div class=\"MT-15\" *ngIf=\"tabData['add_edit']\">\r\n          <form [formGroup]=\"reportDataForm\" (submit)=\"saveClientReport(reportDataForm.valid, reportDataForm.value)\"\r\n                class=\"row on-right\">\r\n            <div class=\"col-md-7 PL-\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Report Name\" formControlName=\"name\" required/>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-5 PLR-0\">\r\n              <button type=\"button\" (click)=\"saveClientReport(reportDataForm.valid, reportDataForm.value)\"\r\n                      class=\"btn-orange btn-bordered\" *ngIf=\"selectedClientReport\" [disabled]=\"reportDataForm.invalid\">\r\n                Update Report\r\n              </button>\r\n              <button type=\"submit\" class=\"btn-success\" *ngIf=\"!selectedClientReport\"\r\n                      [disabled]=\"reportDataForm.invalid\">\r\n                Save New Report\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- generate report -->\r\n  <div class=\"section-sepration with-filter-grid-container\" *ngIf=\"showHideReport\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Generate Report</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li *ngIf=\"tabData['export']\">\r\n              <a (click)=\"showGenerateReport(1)\">\r\n                <span>Excel</span> <i class=\"material-icons\">file_download</i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"10%\" *ngFor=\"let col of reportColumn\">{{col}}</th>\r\n            <th width=\"10%\" *ngIf=\"reportTabData['id'] === 15\">Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"generatedReportList.length\">\r\n          <tr *ngFor=\"let report of generatedReportList; let i = index\">\r\n            <td width=\"10%\" *ngFor=\"let col of reportColumn\">{{checkIsFieldValueIsDate(report[col], 1)}}</td>\r\n            <td width=\"10%\" *ngIf=\"reportTabData['id'] === 15\">\r\n              <a target=\"_blank\" (click)=\"onViewBillingInformation()\" *ngIf=\"reportTabData['id'] === 15\">\r\n                <mat-icon class=\"primary-color\" [matTooltip]=\"'View Billing Information'\">visibility</mat-icon>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n          <tbody *ngIf=\"generatedReportList.length ===0\" class=\"panel-title\">No Records Found</tbody>\r\n        </table>\r\n        <table *ngIf=\"generatedReportList.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"rtotalRecords\"\r\n                             [pageSize]=\"rpageSize\"\r\n                             [pageIndex]=\"rpageIndex\"\r\n                             [pageSizeOptions]=\"rpageArray\"\r\n                             (page)=\"onPageReportChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/report/client-report/client-report.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/report/client-report/client-report.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".word-break {\n  word-break: break-all; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vcmVwb3J0L2NsaWVudC1yZXBvcnQvQzpcXHdhbXA2NFxcd3d3XFxoa19mcm9udGVuZC9wcm9qZWN0c1xcYWRtaW5cXHNyY1xcYXBwXFxhZG1pblxccmVwb3J0XFxjbGllbnQtcmVwb3J0XFxjbGllbnQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvYWRtaW4vc3JjL2FwcC9hZG1pbi9yZXBvcnQvY2xpZW50LXJlcG9ydC9jbGllbnQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmQtYnJlYWsge1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/report/client-report/client-report.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/report/client-report/client-report.component.ts ***!
  \***********************************************************************/
/*! exports provided: ClientReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientReportComponent", function() { return ClientReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./share-report-dialog/share-report-dialog.component */ "./src/app/admin/report/client-report/share-report-dialog/share-report-dialog.component.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-dragula */ "../../node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ClientReportComponent = /** @class */ (function () {
    function ClientReportComponent(_router, dialog, _fb, _commonCrudService, _sharedObjService, _sharedService, dragulaService) {
        this._router = _router;
        this.dialog = dialog;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        this.dragulaService = dragulaService;
        // Data Variables
        this.clientReportList = [];
        this.selectedClientReport = null;
        this.ReportList = [];
        this.outPutFieldList = [];
        this.serviceList = [];
        this.stateList = [];
        this.bankList = [];
        this.bankTypeList = [];
        this.cardNumberList = [];
        this.invoiceStatusList = [];
        this.generatedReportList = [];
        this.reportColumn = [];
        this.selectedReportFilter = {};
        this.selectedReportValue = [];
        this.selectedReportUpdatedValue = [];
        this.reportTabData = {};
        this.reportArray = [];
        this.groupClientBelongsToList = [];
        // getUserListData = {};
        this.getUserListData = [];
        this.userList = [];
        this.entityList = {};
        this.leftDragableModel = [];
        this.rightDragableModel = [];
        this.masterList = [];
        this.taskList = [];
        this.traningList = [];
        this.worksheetStatusList = [];
        this.frequencyList = [];
        // Pagination Data for Saved Report
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY[1];
        // Report Pagination
        this.rpageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY;
        this.rpageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PAGINATION_ARRAY[1];
        // MatPaginator Inputs
        this.length = 20;
        this.filteredTradingClientList = [];
        this.parentTradingList = [];
        this.selectedParentTradingEntity = [];
        this.tradingList = [];
        this.selectedTradingEntity = [];
        this.billingList = [];
        this.selectedBillingEntity = [];
        this.nameList = [];
        this.selectedNameEntity = [];
        this.codeList = [];
        this.selectedCodeEntity = [];
        this.d = [];
        this.userIDArray = [9, 10, 14, 15, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75];
        this.tabApiURL = '';
        this.tabReportName = '';
        this.CLR = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].REPORT_CLIENTREPORT;
        this.CLWIR = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].REPORT_CLIENTWISEINVOICEREPORT;
        this.IR = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].REPORT_INVOICEREPORT;
        this.BAR = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].REPORT_BANKREPORT;
        this.CLAR = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].REPORT_CLIENTALLOCATIONREPORT;
        this.RS = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].REPORT_RSHEETREPORT;
        this.WR = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_14__["ADMINTABACCESS"].REPORT_WORKSHEETREPORT;
        this.showHideReport = false;
        dragulaService.destroy('DRAGULA_FACTS');
        dragulaService.createGroup('DRAGULA_FACTS', {
            revertOnSpill: true,
            removeOnSpill: false,
        });
    }
    ClientReportComponent.prototype.ngOnInit = function () {
        this.reportTabData = { 'id': (this.tabID) ? this.tabID : this.CLR, 'name': (this.tabName) ? this.tabName : 'CLIENT REPORT' };
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.reportTabData['id']);
        this.initializeMethod();
    };
    ClientReportComponent.prototype.initializeMethod = function () {
        this.selectedClientReport = null;
        this.getBankList();
        this.getClientList();
        this.getUserList();
        this.getFrequency();
        this.getTabReportAPIURL(this.reportTabData['id']);
        this.getEntityBelongsToList();
        this.getReportOutputField(this.reportTabData['id']);
        this.createReportDataForm();
        this.createClientReportForm();
        this.getClientReportList(this.reportTabData['id'], 1);
    };
    ClientReportComponent.prototype.getFrequency = function () {
        var _this = this;
        if (+this.reportTabData['id'] === this.WR) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].FREQUENCY, {}, {}).subscribe(function (response) {
                if (response.payload.data) {
                    response.payload.data.map(function (item) {
                        _this.frequencyList.push({ key: item.id, label: item.frequency_name });
                    });
                }
            });
        }
    };
    ClientReportComponent.prototype.getBankList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].DROPDOWN_LIST, {
            'records': 'all',
            'table': 'banks',
            'column': 'id,bank_name',
            'sortOrder': 'id',
            'sortBy': 'asc'
        }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (Response) {
            _this.bankList = Response;
        });
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].DROPDOWN_LIST, {
            'records': 'all',
            'table': 'bank_type',
            'column': 'id,type_name',
            'sortOrder': 'id',
            'sortBy': 'asc'
        }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (Response) {
            _this.bankTypeList = Response;
        });
    };
    /**
     * Get User List
     */
    ClientReportComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, {
            'compare': { 'equal': { 'is_active': 1 } },
            'findinset': { 'team_id': [1, 2, 6] }
        }).subscribe(function (response) {
            _this.userList = response;
            _this.getClientFilterFiled(_this.reportTabData['id']);
        });
    };
    /**
     * get report output field for drag and drop
     * @param clientTypeId
     */
    ClientReportComponent.prototype.getReportOutputField = function (clientTypeId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, { 'type': 'output' }).subscribe(function (Response) {
            _this.outPutFieldList = Response.payload.data;
            _this.leftDragableModel = _this.outPutFieldList;
        });
    };
    /**
     * get the value for field type = 'DD' whose group id =1 and field value  = ""
     * and assign it to the report list for field name = group belongs to
     */
    ClientReportComponent.prototype.getEntityBelongsToList = function () {
        var _this = this;
        if (+this.reportTabData['id'] === this.CLR) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_BELONGSTO, { 'records': 'all' }).subscribe(function (Response) {
                Response.payload.data.map(function (item) {
                    _this.groupClientBelongsToList.push({ key: item.id, label: item.name });
                });
                _this.getClientFilterFiled(_this.reportTabData['id']);
            });
        }
        else if (+this.reportTabData['id'] === this.RS || +this.reportTabData['id'] === this.WR) {
            // Get Master Activity
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].MASTER_ACTIVITY, { 'records': 'all' }).subscribe(function (Response) {
                Response.payload.data.map(function (item) {
                    _this.masterList.push({ key: item.id, label: item.name });
                });
                _this.getClientFilterFiled(_this.reportTabData['id']);
            });
            // Get Task List
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].GET_TASK_LIST, { 'records': 'all' }).subscribe(function (Response) {
                Response.payload.data.map(function (item) {
                    _this.taskList.push({ key: item.id, label: item.name });
                });
                _this.getClientFilterFiled(_this.reportTabData['id']);
            });
            // Get Traning List
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].TRAINING_DATA_LISTEING, { 'records': 'all' }).subscribe(function (Response) {
                Response.payload.data.map(function (item) {
                    _this.traningList.push({ key: item.id, label: item.traning_name });
                });
                _this.getClientFilterFiled(_this.reportTabData['id']);
            });
            // Get Traning List
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].WORKSHEET_STATUS_RIGHTS_WISE_LISTING, { 'records': 'all' }).subscribe(function (Response) {
                Response.payload.data.map(function (item) {
                    _this.worksheetStatusList.push({ key: item.id, label: item.status_name });
                });
                _this.getClientFilterFiled(_this.reportTabData['id']);
            });
        }
        if (+this.reportTabData['id'] === this.IR || +this.reportTabData['id'] === this.CLAR || +this.reportTabData['id'] === this.RS || +this.reportTabData['id'] === this.WR) {
            // Get Service List
            this._sharedObjService.getServices({}, { 'compare': { 'equal': { 'parent_id': 0 } } }).subscribe(function (response) {
                if (response) {
                    response.map(function (item) {
                        _this.serviceList.push({ key: item.id, label: item.service_name });
                    });
                }
            });
            // Get Invoice Status List
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].INVOICE_STATUS_LIST, {}, {}).subscribe(function (Response) {
                var previligesData = _this._sharedService.getPrivilege();
                var statusData = Response.payload.data;
                if (statusData) {
                    statusData.forEach(function (item) {
                        var itemData = previligesData.filter(function (x) { return x.id === item['tab_id']; });
                        if (itemData.length) {
                            _this.invoiceStatusList.push({ key: item.id, label: item.name });
                        }
                    });
                    var allStatus = statusData.filter(function (x) { return x.id === 8; });
                    if (allStatus) {
                        _this.invoiceStatusList.push({ key: allStatus[0]['id'], label: allStatus[0]['name'] });
                    }
                }
            });
            this.getClientFilterFiled(this.reportTabData['id']);
        }
        else if (+this.reportTabData['id'] === this.CLAR || +this.reportTabData['id'] === this.CLWIR) {
        }
        else {
            this.getClientFilterFiled(this.reportTabData['id']);
        }
    };
    /**
     * Create Report Form
     */
    ClientReportComponent.prototype.createClientReportForm = function () {
        this.clientForm = this._fb.group({
            clientReportFields: this._fb.array([this.createClientReportGroup()])
        });
    };
    /**
     * Create Report Data Form
     */
    ClientReportComponent.prototype.createReportDataForm = function () {
        this.reportDataForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.selectedClientReport ? this.selectedClientReport.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required)
        });
    };
    /**
     * Create Report Group Form
     */
    ClientReportComponent.prototype.createClientReportGroup = function (reportData, item) {
        return this._fb.group({
            fieldname: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](reportData ? reportData : ''),
            condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](item ? item['condition'] : ''),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](item ? item['value'] : ''),
            value2: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](item ? item['value2'] : ''),
        });
    };
    /**
     * Get Client report list
     * @param tabId
     * @param pageNumber
     */
    ClientReportComponent.prototype.getClientReportList = function (tabId, pageNumber) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_REPORT + '/' + tabId, this.getQueryParams(pageNumber)).subscribe(function (Response) {
            _this.handleClientReportResponse(Response);
        });
    };
    /**
     * Get Filter Field Array
     */
    ClientReportComponent.prototype.getFilterFieldArray = function () {
        return this.clientForm.get('clientReportFields');
    };
    /**
     * Handle Client Report Response
     * @param response
     */
    ClientReportComponent.prototype.handleClientReportResponse = function (response) {
        this.clientReportList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
    };
    /**
     * add new filter
     * @param index
     */
    ClientReportComponent.prototype.addNewFilter = function (index) {
        if (this.getFilterFieldArray().length < 6) {
            this.reportArray.push(this.getFilterFieldArray().controls[index].get('fieldname'));
            this.getFilterFieldArray().push(this.createClientReportGroup());
        }
        else {
            this._sharedService.setToastMessage('You can add maximum five filter', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["ToastType"].ERROR);
        }
    };
    /**
     * remove row from filter collection
     * @param index
     */
    ClientReportComponent.prototype.removeFilter = function (index) {
        this.reportArray.splice(this.reportArray.indexOf(this.getFilterFieldArray().controls[index].get('fieldname')), 1);
        this.getFilterFieldArray().removeAt(index);
    };
    /**
     * Genretae report
     * @param generateReportType
     */
    ClientReportComponent.prototype.showGenerateReport = function (generateReportType, tabID, pageNumber, recordsPerPage) {
        var _this = this;
        var formValue = {};
        if (!tabID) {
            tabID = this.reportTabData['id'];
        }
        if (this.rightDragableModel.length) {
            formValue['output_field'] = [];
            this.rightDragableModel.map(function (item) {
                formValue['output_field'].push(item.field_name);
            });
            formValue['output_field'] = formValue['output_field'].join();
            if (this.getFilterFieldArray().length) {
                formValue['search'] = [];
                this.getFilterFieldArray().value.map(function (item) {
                    // console.log(item['value']);
                    if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
                        if (Array.isArray(item['value'])) {
                            item['value'] = item['value'].toString();
                        }
                        else {
                            // console.log(this.checkIsFieldValueIsDate(item['value']));
                            if (_this.checkIsFieldValueIsDate(item['value'])) {
                                if (Number(item['value']) > 0 && !moment__WEBPACK_IMPORTED_MODULE_13__["isDate"](item['value'])) {
                                    item['value'] = item['value'];
                                }
                                else {
                                    item['value'] = moment__WEBPACK_IMPORTED_MODULE_13__(item['value']).format('YYYY-MM-DD');
                                }
                            }
                            else {
                                item['value'] = item['value'];
                            }
                        }
                        if (item['condition'] === 'between') {
                            if (item['value']) {
                                formValue['search'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': 'greaterthanequal',
                                    'value': moment__WEBPACK_IMPORTED_MODULE_13__(item['value']).format('YYYY-MM-DD')
                                });
                            }
                            if (item['value2']) {
                                formValue['search'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': 'lessthanequal',
                                    'value': moment__WEBPACK_IMPORTED_MODULE_13__(item['value2']).format('YYYY-MM-DD')
                                });
                            }
                        }
                        else {
                            formValue['search'].push({
                                'fieldname': item['fieldname']['field_name'],
                                'condition': item['condition'],
                                'value': item['value'],
                            });
                        }
                    }
                });
            }
            formValue['search'].length === 0 ? delete formValue['search'] : formValue['search'] = JSON.stringify(formValue['search']);
            if (generateReportType) {
                formValue['excel'] = 1;
                formValue['records'] = 'all';
                this._commonCrudService.downloadReport(this.tabApiURL, formValue, {}, this.tabReportName, 0).subscribe(function (response) {
                });
            }
            else {
                formValue['pageNumber'] = (pageNumber) ? pageNumber : 1;
                formValue['recordsPerPage'] = (recordsPerPage) ? recordsPerPage : this.rpageSize;
                this._commonCrudService.generatReport(this.tabApiURL, formValue).subscribe(function (Response) {
                    _this.generatedReportList = Response.payload.data;
                    _this.rpage = Response.pager.pageNumber;
                    _this.rpageIndex = _this.rpage - 1;
                    _this.rtotalRecords = +Response.pager.totalRecords;
                    _this.reportColumn = (_this.generatedReportList[0]) ? Object.keys(_this.generatedReportList[0]) : [];
                    _this.showHideReport = true;
                });
            }
        }
        else {
            this._sharedService.setToastMessage('Please select atleast one output field', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["ToastType"].ERROR);
        }
    };
    /**
     * on change of field type assign it to the selectedReportfilter and assign ites field
     * condition and condition value to be perform.
     * @param value
     * @param i
     */
    ClientReportComponent.prototype.changeFieldName = function (value, i, selectedItem) {
        var indOfField = this.ReportList.findIndex(function (x) { return +x.id === +value.id; });
        this.selectedReportValue[i] = null;
        this.selectedReportUpdatedValue[i] = [];
        // console.log(1);
        if (this.ReportList[indOfField].field_name === 'trading_name' || this.ReportList[indOfField].field_name === 'billing_name' || this.ReportList[indOfField].field_name === 'entity_name' || this.ReportList[indOfField].field_name === 'code') {
            if (selectedItem) {
                // console.log(1.1);
                this.onSearch(this.ReportList[indOfField].field_name, 1, selectedItem['value']);
                this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            }
            else {
                // console.log(1.2);
                this.onSearch(this.ReportList[indOfField].field_name);
                this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            }
        }
        else if (indOfField > -1) {
            this.onSearch(this.ReportList[indOfField].field_name);
            // console.log(2);
            this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            this.selectedReportValue[i] = this.ReportList[indOfField].field_value_array;
            if (selectedItem) {
                if (this.ReportList[indOfField].field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTNUMERIC) {
                    var itemValue = selectedItem['value'];
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
                else if (this.ReportList[indOfField].field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTBOX) {
                    var itemValue = selectedItem['value'];
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
                else {
                    var itemValue = this.getArrayToString(selectedItem['value'], ',');
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
            }
            // console.log(4);
            // For Client Allocation Dynamic User Only
            if (+this.reportTabData['id'] === this.CLAR) {
                if ((this.userIDArray.indexOf(Number(this.ReportList[indOfField].field_name)) > -1) && (selectedItem)) {
                    this.selectedReportUpdatedValue[i] = this.getArrayToString(selectedItem['value'], ',');
                }
            }
        }
    };
    /**
     * on change of field type assign it to the selectedReportfilter and assign ites field
     * condition and condition value to be perform.
     * @param value
     * @param i
     */
    ClientReportComponent.prototype.onSelectShowHideField = function (value, i, selectedItem) {
    };
    /**
     * Save Client Report
     * @param isValid
     * @param formValue
     */
    ClientReportComponent.prototype.saveClientReport = function (isValid, formValue) {
        var _this = this;
        if (isValid) {
            if (this.rightDragableModel.length) {
                formValue['output'] = [];
                formValue['filter_output_field'] = [];
                this.rightDragableModel.map(function (item) {
                    formValue['output'].push(item.field_name);
                    formValue['filter_output_field'].push(item.field_title);
                });
                formValue['output'] = formValue['output'].join();
                formValue['filter_output_field'] = formValue['filter_output_field'].join();
                formValue['tab_id'] = this.reportTabData['id'];
                if (this.getFilterFieldArray().length) {
                    formValue['filter_condition_value'] = [];
                    this.getFilterFieldArray().value.map(function (item) {
                        if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
                            if (Array.isArray(item['value'])) {
                                item['value'] = item['value'].toString();
                            }
                            else {
                                // console.log(this.checkIsFieldValueIsDate(item['value']));
                                if (_this.checkIsFieldValueIsDate(item['value'])) {
                                    if (Number(item['value']) > 0 && !moment__WEBPACK_IMPORTED_MODULE_13__["isDate"](item['value'])) {
                                        item['value'] = item['value'];
                                    }
                                    else {
                                        item['value'] = moment__WEBPACK_IMPORTED_MODULE_13__(item['value']).format('YYYY-MM-DD');
                                    }
                                }
                                else {
                                    item['value'] = item['value'];
                                }
                            }
                            if (item['condition'] === 'between') {
                                formValue['filter_condition_value'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': item['condition'],
                                    'value': moment__WEBPACK_IMPORTED_MODULE_13__(item['value']).format('YYYY-MM-DD'),
                                    'value2': moment__WEBPACK_IMPORTED_MODULE_13__(item['value2']).format('YYYY-MM-DD'),
                                });
                            }
                            else {
                                formValue['filter_condition_value'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': item['condition'],
                                    'value': item['value']
                                });
                            }
                        }
                    });
                }
                var formConditionValue = formValue['filter_condition_value'];
                formValue['filter_condition_value'].length === 0 ? delete formValue['filter_condition_value'] : formValue['filter_condition_value'] = JSON.stringify(formValue['filter_condition_value']);
                if (this.selectedClientReport) {
                    formValue['_method'] = 'put';
                    // this.reportTabData['id'],
                    this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_REPORT_UPDATE, this.selectedClientReport.id, formValue).subscribe(function (Response) {
                        _this.rightDragableModel = [];
                        _this.initializeMethod();
                    });
                    formValue['filter_condition_value'] = formConditionValue;
                }
                else {
                    // this.reportTabData['id']
                    this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_REPORT_ADD + '/' + this.reportTabData['id'], formValue).subscribe(function (Response) {
                        _this.rightDragableModel = [];
                        _this.initializeMethod();
                    });
                    formValue['filter_condition_value'] = formConditionValue;
                }
                this.showHideReport = false;
            }
            else {
                this._sharedService.setToastMessage('Please select atleast one output field', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["ToastType"].ERROR);
            }
        }
    };
    // event
    /**
     * pagination event
     * @param event
     */
    ClientReportComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getClientReportList(this.reportTabData['id'], event.pageIndex + 1);
    };
    /**
     * pagination event
     * @param event
     */
    ClientReportComponent.prototype.onPageReportChange = function (event) {
        this.showGenerateReport(0, this.reportTabData['id'], event.pageIndex + 1, event.pageSize);
    };
    ClientReportComponent.prototype.onViewBillingInformation = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].UPDATE_CLIENT]);
    };
    /**
     * reset filter
     */
    ClientReportComponent.prototype.resetFilterField = function () {
        this.createClientReportForm();
    };
    /**
     * reset output field by push it to the left draggable model and make it empty.
     */
    ClientReportComponent.prototype.resetOutputField = function () {
        var _this = this;
        this.rightDragableModel.map(function (item) {
            _this.leftDragableModel.push(item);
        });
        this.rightDragableModel = [];
    };
    /**
     * set output field by push it to the right draggable model and make it empty.
     */
    ClientReportComponent.prototype.addFieldToOutput = function () {
        this.rightDragableModel = this.outPutFieldList;
        this.leftDragableModel = [];
    };
    /**
     * delete client report.
     * @param clientReport
     */
    ClientReportComponent.prototype.deleteClientReport = function (clientReport) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this report ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_REPORT_DELETE, clientReport.id).subscribe(function (Response) {
                    _this.getClientReportList(_this.reportTabData['id'], 1);
                });
            }
        });
    };
    /**
     * get the user list to whom admin want to share document.
     * @param clientReport
     */
    ClientReportComponent.prototype.shareDocumentWithUser = function (clientReport) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_REPORT_SHARED_USER_LIST + '/' + clientReport.report_saved_id, {}, {}).subscribe(function (Response) {
            Response.payload.data['clientData'] = clientReport;
            var dialogRef = _this.dialog.open(_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ShareReportDialogComponent"], {
                width: '500px',
                data: {
                    content: Response.payload.data
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
            });
        });
    };
    /**
     * local sort the report data based on key and value
     * @param sortKey
     * @param sortVal
     */
    ClientReportComponent.prototype.getSortClientReportData = function (sortKey, sortVal) {
        this.clientReportSortBy = sortKey;
        this.clientReportSortOrder = sortVal;
        var sortedArray = this.clientReportList.sort(function (objOne, objTwo) {
            if (objOne[sortKey] > objTwo[sortKey]) {
                return 1;
            }
            if (objOne[sortKey] < objTwo[sortKey]) {
                return -1;
            }
            return 0;
        });
        if (sortVal === 'asc') {
            this.clientReportList = sortedArray;
        }
        else {
            this.clientReportList = sortedArray.reverse();
        }
    };
    /**
     * load the specific document and its content and remove already selected output fields if there is any.
     * @param clientReport
     */
    ClientReportComponent.prototype.loadDocument = function (clientReport) {
        var _this = this;
        this.selectedReportUpdatedValue = [];
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_REPORT_VIEW, clientReport.id).subscribe(function (Response) {
            _this.rightDragableModel.map(function (item) {
                _this.leftDragableModel.push(item);
            });
            _this.rightDragableModel = [];
            _this.leftDragableModel = _this.outPutFieldList;
            _this.selectedClientReport = Response.payload.data;
            _this.createReportDataForm();
            _this.selectedClientReport.outputList = _this.selectedClientReport.output.split(',');
            if (_this.selectedClientReport.outputList.length) {
                _this.selectedClientReport.outputList.map(function (report) {
                    var ind = _this.outPutFieldList.findIndex(function (x) { return x.field_name === report; });
                    _this.rightDragableModel.push(_this.outPutFieldList[ind]);
                    _this.leftDragableModel.splice(ind, 1);
                });
            }
            if (_this.selectedClientReport.filter_condition_value !== null) {
                if (JSON.parse(_this.selectedClientReport.filter_condition_value).length) {
                    _this.clientForm = _this._fb.group({
                        clientReportFields: _this._fb.array([])
                    });
                }
                _this.selectedClientReport.filter_condition_valueList = JSON.parse(_this.selectedClientReport.filter_condition_value);
                var i_1 = 0;
                _this.selectedClientReport.filter_condition_valueList.map(function (item) {
                    // console.log(item);
                    var indOfField = _this.ReportList.findIndex(function (x) { return x.field_name === item.fieldname; });
                    _this.changeFieldName(_this.ReportList[indOfField], i_1, item);
                    _this.getFilterFieldArray().push(_this.createClientReportGroup(_this.ReportList[indOfField], item));
                    i_1++;
                });
            }
        });
    };
    // helper
    // get function for returning pageNumber and page size at time of listing api
    ClientReportComponent.prototype.getQueryParams = function (page) {
        return {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
    };
    /**
     * Get Client List
     */
    ClientReportComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.tradingList = response;
            _this.billingList = response;
            _this.nameList = response;
            _this.codeList = response;
            _this.filteredTradingClientList = response;
            _this.parentTradingList = response.filter(function (item) { return item.is_parent === 1; });
            // console.log(this.parentTradingList);
        });
    };
    /**
     * On Search Of Data
     * @param key
     */
    ClientReportComponent.prototype.onSearch = function (key, format, selectedIDS) {
        // if (key === 'parent_id') {
        //   if (Number(format) === 1) {
        //     this.selectedParentTradingEntity = this.getArrayToString(selectedIDS, ',');
        //   }
        // }
        if (key === 'billing_name') {
            if (Number(format) === 1) {
                this.selectedBillingEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'trading_name') {
            if (Number(format) === 1) {
                this.selectedTradingEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'entity_name') {
            if (Number(format) === 1) {
                this.selectedNameEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'code') {
            if (Number(format) === 1) {
                this.selectedCodeEntity = this.getArrayToString(selectedIDS, ',', 1);
            }
        }
    };
    /**
     * Get array values from string
     * @param {string} value
     * @param {string} seperator
     * @returns {string[]}
     */
    ClientReportComponent.prototype.getArrayToString = function (value, seperator, isNotNumber) {
        if (value && value != null) {
            var valueOne_1 = [];
            value.split(seperator).map(function (item) {
                if (isNotNumber) {
                    valueOne_1.push(item);
                }
                else {
                    valueOne_1.push(Number(item));
                }
            });
            return valueOne_1;
        }
    };
    /**
     * Get Report Tab API UR AND Tab Report Name
     * @param tabID
     */
    ClientReportComponent.prototype.getTabReportAPIURL = function (tabID) {
        if (+tabID === this.CLR) {
            this.tabApiURL = _utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_GENERATE_REPORT;
            this.tabReportName = 'Client Report ';
        }
        else if (+tabID === this.BAR) {
            this.tabApiURL = _utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].BANK_GENERATE_REPORT;
            this.tabReportName = 'Bank Report ';
        }
        else if (+tabID === this.CLAR) {
            this.tabApiURL = _utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_ALLOCATION_GENERATE_REPORT;
            this.tabReportName = 'Client Allocation Report ';
        }
        else if (+tabID === this.IR) {
            this.tabApiURL = _utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].INVOICE_GENERATE_REPORT;
            this.tabReportName = 'Invoice Report ';
        }
        else if (+tabID === this.CLWIR) {
            this.tabApiURL = _utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_WISE_GENERATE_REPORT;
            this.tabReportName = 'Client Wise Invoice Report ';
        }
        else if (+tabID === this.RS) {
            this.tabApiURL = _utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].RSHEET_REPORT_GENERATE;
            this.tabReportName = 'Rsheet Report ';
        }
        else if (+tabID === this.WR) {
            this.tabApiURL = _utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].WORKSHEET_REPORT_GENERATE;
            this.tabReportName = 'Worksheetsheet Report ';
        }
        else {
            this.tabApiURL = _utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_GENERATE_REPORT;
            this.tabReportName = 'Client Report ';
        }
    };
    /**
     * get report list and pass its field condition value for drop down from constant as well as whose group id = 1 and
     * field value = "" and type = 'DD' then assign its filter value from API.
     * @param clientTypeId
     */
    ClientReportComponent.prototype.getClientFilterFiled = function (clientTypeId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, { 'type': 'filter' }).subscribe(function (Response) {
            _this.ReportList = Response.payload.data;
            _this.rpage = Response.pager.pageNumber;
            _this.rpageIndex = _this.rpage - 1;
            _this.rtotalRecords = +Response.pager.totalRecords;
            if (+_this.reportTabData['id'] === _this.CLR) {
                _this.ReportList.map(function (item) {
                    if (item.field_value) {
                        item.isCommaSeperated = false;
                        if (item.field_value === 'yesNo') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNo"].slice(1);
                        }
                        else if (item.field_value === 'yesNoNa') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNoNa"].slice(1);
                        }
                        else if (item.field_value === 'yesNoOther') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNoOther"].slice(1);
                        }
                        else if (item.field_value === 'bkDoneby') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["bkDoneby"].slice(1);
                        }
                        else if (item.field_value === 'basFrequency') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["basFrequency"].slice(1);
                        }
                        else if (item.field_value === 'basAccrualorcash') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["basAccrualorcash"].slice(1);
                        }
                        else if (item.field_value === 'paygFrequency') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["paygFrequency"].slice(1);
                        }
                        else if (item.field_value === 'statementDeliveryPreference') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["statementDeliveryPreference"].slice(1);
                        }
                        else if (item.field_value === 'entityType') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["entityType"].slice(1);
                        }
                        else if (item.field_value === 'franchise') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["franchise"].slice(1);
                        }
                        else {
                            item.isCommaSeperated = true;
                            item.field_value_array = item.field_value.split(',');
                        }
                    }
                    else {
                        if (+item.group_id.id === 1) {
                            if (item.field_name === 'parent_id' || item.field_name === 'code' || item.field_name === 'entity_name'
                                || item.field_name === 'billing_name' || item.field_name === 'trading_name') {
                                item.isMultiSelect = true;
                                item.isCommaSeperated = false;
                            }
                            else if (item.field_name === 'group_client_belongsto') {
                                item.isMultiSelect = false;
                                item.isCommaSeperated = false;
                                item.field_value_array = _this.groupClientBelongsToList;
                            }
                        }
                    }
                    if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTBOX) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["TBFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].DROPDOWN) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["DDFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].CALENDER) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["CLFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTNUMERIC) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["TNFIELDTYPE"];
                    }
                });
            }
            else if (+_this.reportTabData['id'] === _this.BAR) {
                _this.ReportList.map(function (item) {
                    if (item.field_value) {
                        item.isCommaSeperated = false;
                        if (item.field_value === 'yesNoNa') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNoNa"].slice(1);
                        }
                        else if (item.field_value === 'BankCcPaypalAccount') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BankCcPaypalAccount"].slice(1);
                        }
                        else if (item.field_value === 'activeInactive') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["activeInactive"].slice(1);
                        }
                        else {
                            item.isCommaSeperated = true;
                            item.field_value_array = item.field_value.split(',');
                        }
                    }
                    else {
                        if (item.field_name === 'parent_id' || item.field_name === 'code' || item.field_name === 'entity_name'
                            || item.field_name === 'billing_name' || item.field_name === 'trading_name') {
                            item.isMultiSelect = true;
                            item.isCommaSeperated = false;
                        }
                        if (item.field_name === 'bank_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            _this.bankList.map(function (itemData) {
                                itemData['key'] = itemData['id'];
                                itemData['label'] = itemData['bank_name'];
                            });
                            item.field_value_array = _this.bankList;
                        }
                        if (item.field_name === 'type_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            _this.bankTypeList.map(function (itemData) {
                                itemData['key'] = itemData['id'];
                                itemData['label'] = itemData['type_name'];
                            });
                            item.field_value_array = _this.bankTypeList;
                        }
                    }
                    if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTBOX) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["TBFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].DROPDOWN) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["DDFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].CALENDER) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["CLFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTNUMERIC) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["TNFIELDTYPE"];
                    }
                });
            }
            else if (+_this.reportTabData['id'] === _this.CLAR) {
                _this.ReportList.map(function (item) {
                    if (item.field_value) {
                        item.isCommaSeperated = false;
                        if (item.field_value === 'yesNoNa') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNoNa"];
                        }
                        else if (item.field_value === 'BankCcPaypalAccount') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BankCcPaypalAccount"];
                        }
                        else {
                            item.isCommaSeperated = true;
                            item.field_value_array = item.field_value.split(',');
                        }
                    }
                    else {
                        if (item.field_name === 'service_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.serviceList;
                        }
                        if (item.field_name === 'parent_id' || item.field_name === 'code' || item.field_name === 'entity_name'
                            || item.field_name === 'billing_name' || item.field_name === 'trading_name') {
                            item.isMultiSelect = true;
                            item.isCommaSeperated = false;
                        }
                        if (_this.userIDArray.indexOf(Number(item.field_name)) > -1) {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = null;
                            var itemArray = _this.userList.filter(function (itemData) { return (itemData['designation_id']) ? itemData['designation_id']['id'] === Number(item.field_name) : 0; });
                            if (itemArray.length) {
                                _this.getUserListData = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.getUserListData.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.getUserListData = [];
                            }
                            item.field_value_array = _this.getUserListData;
                        }
                    }
                    if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTBOX) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["TBFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].DROPDOWN) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["DDFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].CALENDER) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["CLFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTNUMERIC) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["TNFIELDTYPE"];
                    }
                });
            }
            else if (+_this.reportTabData['id'] === _this.IR) {
                _this.ReportList.map(function (item) {
                    if (item.field_value) {
                        item.isCommaSeperated = false;
                        if (item.field_value === 'yesNo') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNo"].slice(1);
                        }
                        else if (item.field_value === 'yesNoNa') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNoNa"].slice(1);
                        }
                        else if (item.field_value === 'invoiceType') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["invoiceType"].slice(1);
                        }
                        else {
                            item.isCommaSeperated = true;
                            item.field_value_array = item.field_value.split(',');
                        }
                    }
                    else {
                        if (item.field_name === 'parent_id' || item.field_name === 'code' || item.field_name === 'entity_name'
                            || item.field_name === 'billing_name' || item.field_name === 'trading_name') {
                            item.isMultiSelect = true;
                            item.isCommaSeperated = false;
                        }
                        if (_this.userIDArray.indexOf(Number(item.field_name)) > -1) {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var itemArray = _this.userList.filter(function (itemData) { return (itemData['designation_id']) ? itemData['designation_id']['id'] === Number(item.field_name) : 0; });
                            if (itemArray.length) {
                                _this.getUserListData = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.getUserListData.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.getUserListData = [];
                            }
                            item.field_value_array = _this.getUserListData;
                        }
                        if (item.field_name === 'service_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.serviceList;
                        }
                        if (item.field_name === 'status_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.invoiceStatusList;
                        }
                    }
                    if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTBOX) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["TBFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].DROPDOWN) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["DDFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].CALENDER) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["CLFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTNUMERIC) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["TNFIELDTYPE"];
                    }
                });
            }
            else if (+_this.reportTabData['id'] === _this.CLWIR) {
                _this.ReportList.map(function (item) {
                    if (item.field_value) {
                        item.isCommaSeperated = false;
                        item.isCommaSeperated = true;
                        item.field_value_array = item.field_value.split(',');
                    }
                    else {
                        if (item.field_name === 'parent_id' || item.field_name === 'code' || item.field_name === 'entity_name'
                            || item.field_name === 'billing_name' || item.field_name === 'trading_name') {
                            item.isMultiSelect = true;
                            item.isCommaSeperated = false;
                        }
                        if (_this.userIDArray.indexOf(Number(item.field_name)) > -1) {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var itemArray = _this.userList.filter(function (itemData) { return (itemData['designation_id']) ? itemData['designation_id']['id'] === Number(item.field_name) : 0; });
                            if (itemArray.length) {
                                _this.getUserListData = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.getUserListData.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.getUserListData = [];
                            }
                            item.field_value_array = _this.getUserListData;
                        }
                    }
                    if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTBOX) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["TBFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].DROPDOWN) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["DDFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].CALENDER) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["CLFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTNUMERIC) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["TNFIELDTYPE"];
                    }
                });
            }
            else if (+_this.reportTabData['id'] === _this.RS) {
                _this.ReportList.map(function (item) {
                    if (item.field_value) {
                        item.isCommaSeperated = false;
                        if (item.field_value === 'yesNo') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNo"].slice(1);
                        }
                        else if (item.field_value === 'yesNoNa') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNoNa"].slice(1);
                        }
                        else if (item.field_value === 'reviewerTag') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["reviewerTag"].slice(1);
                        }
                        else if (item.field_value === 'UserWorksheetRatting') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["UserWorksheetRatting"].slice(1);
                        }
                        else if (item.field_value === 'reviewerchecklistActionReport') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["reviewerchecklistActionReport"].slice(1);
                        }
                        else {
                            item.isCommaSeperated = true;
                            item.field_value_array = item.field_value.split(',');
                        }
                    }
                    else {
                        if (item.field_name === 'worksheet_actual_teammember' || item.field_name === 'worksheet_additional_assignee') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var designation_1 = 10;
                            var itemArray = _this.userList.filter(function (itemData) { return (itemData['designation_id']) ? itemData['designation_id']['id'] === designation_1 : 0; });
                            if (itemArray.length) {
                                _this.getUserListData = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.getUserListData.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.getUserListData = [];
                            }
                            item.field_value_array = _this.getUserListData;
                        }
                        if (item.field_name === 'worksheet_reviewer') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var itemArray = _this.userList;
                            if (itemArray.length) {
                                _this.getUserListData = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.getUserListData.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.getUserListData = [];
                            }
                            item.field_value_array = _this.getUserListData;
                        }
                        if (item.field_name === 'parent_id' || item.field_name === 'code' || item.field_name === 'entity_name'
                            || item.field_name === 'billing_name' || item.field_name === 'trading_name') {
                            item.isMultiSelect = true;
                            item.isCommaSeperated = false;
                        }
                        if (_this.userIDArray.indexOf(Number(item.field_name)) > -1) {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var itemArray = _this.userList.filter(function (itemData) { return (itemData['designation_id']) ? itemData['designation_id']['id'] === Number(item.field_name) : 0; });
                            if (itemArray.length) {
                                _this.getUserListData = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.getUserListData.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.getUserListData = [];
                            }
                            item.field_value_array = _this.getUserListData;
                        }
                        if (item.field_name === 'service_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.serviceList;
                        }
                        if (item.field_name === 'status_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.worksheetStatusList;
                        }
                        if (item.field_name === 'master_activity_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.masterList;
                        }
                        if (item.field_name === 'task_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.taskList;
                        }
                        if (item.field_name === 'training_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.traningList;
                        }
                    }
                    if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTBOX) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["TBFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].DROPDOWN) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["DDFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].CALENDER) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["CLFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTNUMERIC) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["TNFIELDTYPE"];
                    }
                });
            }
            else if (+_this.reportTabData['id'] === _this.WR) {
                _this.ReportList.map(function (item) {
                    if (item.field_value) {
                        item.isCommaSeperated = false;
                        if (item.field_value === 'yesNo') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNo"].slice(1);
                        }
                        else if (item.field_value === 'yesNoNa') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNoNa"].slice(1);
                        }
                        else {
                            item.isCommaSeperated = true;
                            item.field_value_array = item.field_value.split(',');
                        }
                    }
                    else {
                        if (item.field_name === 'worksheet_actual_teammember' || item.field_name === 'worksheet_additional_assignee') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var designation_2 = 10;
                            var itemArray = _this.userList.filter(function (itemData) { return (itemData['designation_id']) ? itemData['designation_id']['id'] === designation_2 : 0; });
                            if (itemArray.length) {
                                _this.getUserListData = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.getUserListData.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.getUserListData = [];
                            }
                            item.field_value_array = _this.getUserListData;
                        }
                        if (item.field_name === 'worksheet_reviewer') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var itemArray = _this.userList;
                            if (itemArray.length) {
                                _this.getUserListData = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.getUserListData.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.getUserListData = [];
                            }
                            item.field_value_array = _this.getUserListData;
                        }
                        if (item.field_name === 'service_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.serviceList;
                        }
                        if (item.field_name === 'frequency_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.frequencyList;
                        }
                        if (item.field_name === 'code' || item.field_name === 'entity_name'
                            || item.field_name === 'billing_name' || item.field_name === 'trading_name') {
                            item.isMultiSelect = true;
                            item.isCommaSeperated = false;
                        }
                        if (_this.userIDArray.indexOf(Number(item.field_name)) > -1) {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var itemArray = _this.userList.filter(function (itemData) { return (itemData['designation_id']) ? itemData['designation_id']['id'] === Number(item.field_name) : 0; });
                            if (itemArray.length) {
                                _this.getUserListData = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.getUserListData.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.getUserListData = [];
                            }
                            item.field_value_array = _this.getUserListData;
                        }
                        if (item.field_name === 'service_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.serviceList;
                        }
                        if (item.field_name === 'status_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.worksheetStatusList;
                        }
                        if (item.field_name === 'master_activity_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.masterList;
                        }
                        if (item.field_name === 'task_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.taskList;
                        }
                        if (item.field_name === 'training_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.traningList;
                        }
                    }
                    if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTBOX) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["TBFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].DROPDOWN) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["DDFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].CALENDER) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["CLFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["FIELDTYPE"].TEXTNUMERIC) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["TNFIELDTYPE"];
                    }
                });
            }
        });
    };
    ClientReportComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('DRAGULA_FACTS');
    };
    /**
     * On home page route
     */
    ClientReportComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Check If field value is date
     * @param value
     */
    /**
     * Check If field value is date
     * @param value
     */
    ClientReportComponent.prototype.checkIsFieldValueIsDate = function (value, type) {
        if (type === void 0) { type = 0; }
        // console.log(value);
        if ((value === '' || value === null || value === '0000-00-00' || value === '0000-00-00 00:00:00' || value === '1899-11-30' || value === '1970-01-01' || (Number(value) > 0)) && !moment__WEBPACK_IMPORTED_MODULE_13__["isDate"](value)) {
            if (Number(value) > 0) {
                // console.log('A - ' + value);
                return value;
            }
            else {
                return '';
            }
        }
        else {
            var dateFormat = moment__WEBPACK_IMPORTED_MODULE_13__["isDate"](value);
            // console.log(dateFormat);
            if (dateFormat) {
                var item = moment__WEBPACK_IMPORTED_MODULE_13__(new Date(value));
                var itemValue = item.format('DD-MM-YYYY');
                // console.log(itemValue);
                if (itemValue === '' || itemValue === null || itemValue === '0000-00-00' || itemValue === '0000-00-00 00:00:00' || itemValue === '30-11-1899' || itemValue === '01-01-1970') {
                    return '';
                }
                else {
                    return itemValue;
                }
            }
            else {
                if (type === 1) {
                    return value;
                }
                else {
                    return '';
                }
            }
        }
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    ClientReportComponent.prototype.onChangeParentEntity = function (event) {
        var _this = this;
        var entityID = event.length ? event[event.length - 1].id : 0;
        if (this.getFilterFieldArray().controls.length) {
            // [i].get('fieldname').value['field_name']
            var i_2 = 0;
            this.getFilterFieldArray().controls.forEach(function (item) {
                if (item.get('fieldname').value['field_name'] === "parent_id") {
                    _this.getFilterFieldArray().controls[i_2].get('value').setValue([entityID]);
                }
                if (item.get('fieldname').value['field_name'] === "trading_name" || item.get('fieldname').value['field_name'] === "billing_name"
                    || item.get('fieldname').value['field_name'] === "entity_name" || item.get('fieldname').value['field_name'] === "code") {
                    _this.getFilterFieldArray().controls[i_2].get('value').setValue(null);
                }
                i_2++;
            });
        }
        this.billingList = this.tradingList = this.nameList = this.codeList = this.filteredTradingClientList;
        if (entityID && entityID > 0) {
            this.billingList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === entityID; });
            this.nameList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === entityID; });
            this.codeList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === entityID; });
            this.tradingList = this.filteredTradingClientList.filter(function (item) { return item["parent_id"] === entityID; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('outputInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ClientReportComponent.prototype, "outputField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ClientReportComponent.prototype, "tabName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ClientReportComponent.prototype, "tabID", void 0);
    ClientReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-report',
            template: __webpack_require__(/*! ./client-report.component.html */ "./src/app/admin/report/client-report/client-report.component.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_10__["CommonCrudService"]],
            styles: [__webpack_require__(/*! ./client-report.component.scss */ "./src/app/admin/report/client-report/client-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_10__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_11__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ng2_dragula__WEBPACK_IMPORTED_MODULE_9__["DragulaService"]])
    ], ClientReportComponent);
    return ClientReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/report/client-report/share-report-dialog/share-report-dialog.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/report/client-report/share-report-dialog/share-report-dialog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start share report dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">SHARE REPORT</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addShareReportForm\" (submit)=\"onSubmitShareReportForm(addShareReportForm)\">\r\n    <div class=\"modal__body min-height\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 custom-ng-select-dropdown\">\r\n          <ng-select [items]=\"allShareUsers\"\r\n                     [multiple]=\"true\"\r\n                     [closeOnSelect]=\"true\"\r\n                     bindLabel=\"userfullname\"\r\n                     placeholder=\"Select User Name\"\r\n                     bindValue=\"id\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     formControlName=\"addusername\">\r\n          </ng-select>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addShareReportForm.get('addusername'))\"\r\n                            [errMsg]=\"validationMsg.SHARE_USER_NAME_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 PR-25 text-right\">\r\n          <button class=\"btn-primary\" type=\"submit\" [disabled]=\"addShareReportForm.invalid\">Share</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End share report dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/report/client-report/share-report-dialog/share-report-dialog.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/report/client-report/share-report-dialog/share-report-dialog.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ShareReportDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareReportDialogComponent", function() { return ShareReportDialogComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var ShareReportDialogComponent = /** @class */ (function (_super) {
    __extends(ShareReportDialogComponent, _super);
    function ShareReportDialogComponent(dialogRef, data, _fb, _commonCrudService, _sharedService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_4__["ValidationConstantMessage"]();
        _this.visible = true;
        _this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
        _this.clientData = null;
        _this.shareusers = [];
        _this.allShareUsers = [];
        return _this;
    }
    ShareReportDialogComponent.prototype.ngOnInit = function () {
        this.clientData = this.data['content']['clientData'];
        this.allShareUsers = this.data['content']['userList'];
        for (var _i = 0, _a = this.data['content']['alreadyShared']; _i < _a.length; _i++) {
            var userData = _a[_i];
            this.shareusers.push(userData['user_id']);
        }
        // this.shareusers = Object.values(this.data['content']['alreadyShared']) || [];
        this.createAddChangeInOutTimeForm();
    };
    /**
     * Create share report form
     */
    ShareReportDialogComponent.prototype.createAddChangeInOutTimeForm = function () {
        this.addShareReportForm = this._fb.group({
            addusername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.shareusers, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    /**
     * submit method to share the report to the selected user.
     * @param form
     */
    ShareReportDialogComponent.prototype.onSubmitShareReportForm = function (form) {
        var _this = this;
        if (form.valid) {
            var fomrValue = form.value['addusername'];
            form.value['user_id'] = JSON.stringify(form.value['addusername']);
            if (form.value['user_id']) {
                this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].CLIENT_REPORT_SHARED_TO_USER + '/' + this.clientData.id, form.value).subscribe(function (Response) {
                    _this.onClose();
                });
            }
        }
    };
    ShareReportDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    /**
     * remove the selcted user for array in chip
     * @param user
     */
    ShareReportDialogComponent.prototype.remove = function (user) {
        var _this = this;
        this.shareusers.map(function (item) {
            if (+item.id === +user.id) {
                _this.shareusers.splice(_this.shareusers.indexOf(item), 1);
                _this.allShareUsers.push(item);
            }
        });
    };
    ShareReportDialogComponent.prototype.filter = function (name) {
        return this.shareusers.filter(function (user) {
            return user.userfullname.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    ShareReportDialogComponent.prototype.selected = function (event) {
        var _this = this;
        var data = event.option.value;
        this.allShareUsers.map(function (item) {
            if (item.userfullname === data.userfullname) {
                _this.allShareUsers.splice(_this.allShareUsers.indexOf(item), 1);
                _this.shareusers.push(data);
            }
        });
        this.addShareReportForm.get('addusername').setValue(event.option.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shareuserInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ShareReportDialogComponent.prototype, "shareuserInput", void 0);
    ShareReportDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share-report-dialog',
            template: __webpack_require__(/*! ./share-report-dialog.component.html */ "./src/app/admin/report/client-report/share-report-dialog/share-report-dialog.component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], ShareReportDialogComponent);
    return ShareReportDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_8__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/report/client-wise-invoice-report/client-wise-invoice-report.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/report/client-wise-invoice-report/client-wise-invoice-report.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-client-report [tabName]=\"'CLIENT WISE INVOICE REPORT'\" [tabID]=\"tabID\"></app-client-report>\r\n"

/***/ }),

/***/ "./src/app/admin/report/client-wise-invoice-report/client-wise-invoice-report.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/report/client-wise-invoice-report/client-wise-invoice-report.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3JlcG9ydC9jbGllbnQtd2lzZS1pbnZvaWNlLXJlcG9ydC9jbGllbnQtd2lzZS1pbnZvaWNlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/report/client-wise-invoice-report/client-wise-invoice-report.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/report/client-wise-invoice-report/client-wise-invoice-report.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ClientWiseInvoiceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientWiseInvoiceReportComponent", function() { return ClientWiseInvoiceReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientWiseInvoiceReportComponent = /** @class */ (function () {
    function ClientWiseInvoiceReportComponent() {
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__["ADMINTABACCESS"].REPORT_CLIENTWISEINVOICEREPORT;
    }
    ClientWiseInvoiceReportComponent.prototype.ngOnInit = function () {
    };
    ClientWiseInvoiceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-wise-invoice-report',
            template: __webpack_require__(/*! ./client-wise-invoice-report.component.html */ "./src/app/admin/report/client-wise-invoice-report/client-wise-invoice-report.component.html"),
            styles: [__webpack_require__(/*! ./client-wise-invoice-report.component.scss */ "./src/app/admin/report/client-wise-invoice-report/client-wise-invoice-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientWiseInvoiceReportComponent);
    return ClientWiseInvoiceReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/report/invoice-report/invoice-report.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/report/invoice-report/invoice-report.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-client-report [tabName]=\"'INVOICE REPORT'\" [tabID]=\"tabID\"></app-client-report>\r\n"

/***/ }),

/***/ "./src/app/admin/report/invoice-report/invoice-report.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/admin/report/invoice-report/invoice-report.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3JlcG9ydC9pbnZvaWNlLXJlcG9ydC9pbnZvaWNlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/report/invoice-report/invoice-report.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/report/invoice-report/invoice-report.component.ts ***!
  \*************************************************************************/
/*! exports provided: InvoiceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceReportComponent", function() { return InvoiceReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvoiceReportComponent = /** @class */ (function () {
    function InvoiceReportComponent() {
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__["ADMINTABACCESS"].REPORT_INVOICEREPORT;
    }
    InvoiceReportComponent.prototype.ngOnInit = function () {
    };
    InvoiceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-report',
            template: __webpack_require__(/*! ./invoice-report.component.html */ "./src/app/admin/report/invoice-report/invoice-report.component.html"),
            styles: [__webpack_require__(/*! ./invoice-report.component.scss */ "./src/app/admin/report/invoice-report/invoice-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceReportComponent);
    return InvoiceReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/report/monthly-invoice-report/monthly-invoice-report.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/report/monthly-invoice-report/monthly-invoice-report.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"common-report-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>REPORTS</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">MONTHLY INVOICE REPORT</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 row PLR-0\">\r\n                <label class=\"col-md-2 PL-0 MT-20 fw-500 primary-color\">Report Period</label>\r\n                <div class=\"col-md-3 PLR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"fromdate\" placeholder=\"dd-mm-yyyy\"\r\n                           formControlName=\"from\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"fromdate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #fromdate></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-3 PR-0\">\r\n                  <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"todate\" placeholder=\"dd-mm-yyyy\"\r\n                           formControlName=\"to\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"todate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #todate></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-4 MT-5\">\r\n                  <!-- <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>-->\r\n                  <button type=\"submit\" class=\"btn-orange btn-bordered\">Search</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"downloadExcel()\">\r\n                <span>Excel</span> <i class=\"material-icons\">file_download</i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Start Grid Filter -->\r\n\r\n    <!-- End Grid Inner Header -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n            <th width=\"10%\"\r\n                (click)=\"getSortData('code', sortBy === 'code' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Client Code\r\n              <i *ngIf=\"sortBy === 'code'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'code' && sortOrder === 'asc', 'icon-down' :  sortBy === 'code' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'code' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"20%\"\r\n                (click)=\"getSortData('name', sortBy === 'name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Trading Name\r\n              <i *ngIf=\"sortBy === 'name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\"\r\n                (click)=\"getSortData('invoice_no', sortBy === 'invoice_no' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Invoice No\r\n              <i *ngIf=\"sortBy === 'invoice_no'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'invoice_no' && sortOrder === 'asc', 'icon-down' :  sortBy === 'invoice_no' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'invoice_no' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"8%\">BK</th>\r\n            <th width=\"8%\">AR</th>\r\n            <th width=\"8%\">AP</th>\r\n            <th width=\"8%\">DM</th>\r\n            <th width=\"8%\">Payroll</th>\r\n            <th width=\"15%\"\r\n                (click)=\"getSortData('created_on', sortBy === 'created_on' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Created On\r\n              <i *ngIf=\"sortBy === 'created_on'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'created_on' && sortOrder === 'asc', 'icon-down' :  sortBy === 'created_on' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'created_on' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i></th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody *ngIf=\"monthlyInvoice.length\">\r\n            <tr *ngFor=\"let monthlyInvoiceData of monthlyInvoice; let i = index\">\r\n              <td width=\"5%\">{{i+1}}</td>\r\n              <td width=\"10%\">{{monthlyInvoiceData.code}}</td>\r\n              <td width=\"20%\" class=\"word-break\">{{monthlyInvoiceData.name}}</td>\r\n              <td width=\"10%\">{{monthlyInvoiceData.invoice_no}}</td>\r\n              <td width=\"8%\">{{monthlyInvoiceData.fixed_fee}}</td>\r\n              <td width=\"8%\">{{monthlyInvoiceData.AR}}</td>\r\n              <td width=\"8%\">{{monthlyInvoiceData.AP}}</td>\r\n              <td width=\"8%\">{{monthlyInvoiceData.DM}}</td>\r\n              <td width=\"8%\">{{monthlyInvoiceData.Payroll}}</td>\r\n              <td width=\"15%\">{{monthlyInvoiceData.created_on | date : 'dd-MM-yyyy'}}</td>\r\n            </tr>\r\n            </tbody>\r\n            <tbody *ngIf=\"monthlyInvoice.length === 0\" class=\"panel-title\">No Records Found!</tbody>\r\n          </table>\r\n        </div>\r\n        <table *ngIf=\"monthlyInvoice.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/report/monthly-invoice-report/monthly-invoice-report.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/report/monthly-invoice-report/monthly-invoice-report.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3JlcG9ydC9tb250aGx5LWludm9pY2UtcmVwb3J0L21vbnRobHktaW52b2ljZS1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/report/monthly-invoice-report/monthly-invoice-report.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/report/monthly-invoice-report/monthly-invoice-report.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MonthlyInvoiceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyInvoiceReportComponent", function() { return MonthlyInvoiceReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MonthlyInvoiceReportComponent = /** @class */ (function () {
    function MonthlyInvoiceReportComponent(_fb, _commonCrudService, _router) {
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._router = _router;
        this.monthlyInvoice = [];
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.CreatedFromValue = null;
        this.CreatedToValue = null;
    }
    MonthlyInvoiceReportComponent.prototype.ngOnInit = function () {
        this.initializationMethod();
    };
    // Initialization Methods
    MonthlyInvoiceReportComponent.prototype.initializationMethod = function () {
        this.createAdvanceFilterForm();
        this.getMonthlyInvoiceReport(1);
    };
    MonthlyInvoiceReportComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    /**
     * Get AM Notes List
     * @param {number} pageNumber
     * @param {string} key
     * @param {string} val
     */
    MonthlyInvoiceReportComponent.prototype.getMonthlyInvoiceReport = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].MONTHLY_INVOICE_REPORT_GENERATE, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (Response) {
            _this.handleMonthlyInvoiceReportResponse(Response);
        });
    };
    /**
     * Handle Monhtly invoice report generate data
     * @param response
     */
    MonthlyInvoiceReportComponent.prototype.handleMonthlyInvoiceReportResponse = function (response) {
        this.monthlyInvoice = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Export to Excel
     */
    MonthlyInvoiceReportComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].MONTHLY_INVOICE_REPORT_GENERATE_EXCEL, params, this.getSearchParam(), 'Monthly Invoice Report ', 0).subscribe(function (response) {
        });
    };
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    MonthlyInvoiceReportComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    MonthlyInvoiceReportComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getMonthlyInvoiceReport(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    MonthlyInvoiceReportComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        if (this.CreatedFromValue) {
            filter['greaterthanequal'] = {};
        }
        if (this.CreatedToValue) {
            filter['lessthanequal'] = {};
        }
        if (this.CreatedFromValue) {
            filter['greaterthanequal']['created_on'] = moment__WEBPACK_IMPORTED_MODULE_5__(this.CreatedFromValue).format('YYYY-MM-DD');
        }
        if (this.CreatedToValue) {
            filter['lessthanequal']['created_on'] = moment__WEBPACK_IMPORTED_MODULE_5__(this.CreatedToValue).format('YYYY-MM-DD');
        }
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_6__["CommonFunctions"].isEmpty(filter)) {
            params['compare'] = filter;
        }
        if (Object.keys(this.inJSON).length !== 0) {
            params['in'] = this.inJSON;
        }
        return params;
    };
    /**
     * Pagination page change method
     * @param event
     */
    MonthlyInvoiceReportComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getMonthlyInvoiceReport(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    MonthlyInvoiceReportComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.CreatedFromValue = null;
        this.CreatedToValue = null;
        this.getMonthlyInvoiceReport(1);
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    MonthlyInvoiceReportComponent.prototype.setAdvanceFilter = function (form, flag) {
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
        if (form.value['from'] !== '' && form.value['from']) {
            this.CreatedFromValue = form.value['from'];
            delete form.value['from'];
        }
        if (form.value['to'] !== '' && form.value['to']) {
            this.CreatedToValue = form.value['to'];
            delete form.value['to'];
        }
        // For Multiple Entity ID
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                }
            }
            this.getMonthlyInvoiceReport(1);
        }
    };
    /**
     * On home page route
     */
    MonthlyInvoiceReportComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_7__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    MonthlyInvoiceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monthly-invoice-report',
            template: __webpack_require__(/*! ./monthly-invoice-report.component.html */ "./src/app/admin/report/monthly-invoice-report/monthly-invoice-report.component.html"),
            styles: [__webpack_require__(/*! ./monthly-invoice-report.component.scss */ "./src/app/admin/report/monthly-invoice-report/monthly-invoice-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__["CommonCrudService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], MonthlyInvoiceReportComponent);
    return MonthlyInvoiceReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/report/report.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/report/report.module.ts ***!
  \***********************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _client_report_client_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-report/client-report.component */ "./src/app/admin/report/client-report/client-report.component.ts");
/* harmony import */ var _client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-report/share-report-dialog/share-report-dialog.component */ "./src/app/admin/report/client-report/share-report-dialog/share-report-dialog.component.ts");
/* harmony import */ var _bank_report_bank_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bank-report/bank-report.component */ "./src/app/admin/report/bank-report/bank-report.component.ts");
/* harmony import */ var _client_allocation_report_client_allocation_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-allocation-report/client-allocation-report.component */ "./src/app/admin/report/client-allocation-report/client-allocation-report.component.ts");
/* harmony import */ var _client_wise_invoice_report_client_wise_invoice_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-wise-invoice-report/client-wise-invoice-report.component */ "./src/app/admin/report/client-wise-invoice-report/client-wise-invoice-report.component.ts");
/* harmony import */ var _invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invoice-report/invoice-report.component */ "./src/app/admin/report/invoice-report/invoice-report.component.ts");
/* harmony import */ var _monthly_invoice_report_monthly_invoice_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./monthly-invoice-report/monthly-invoice-report.component */ "./src/app/admin/report/monthly-invoice-report/monthly-invoice-report.component.ts");
/* harmony import */ var _ticket_report_ticket_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ticket-report/ticket-report.component */ "./src/app/admin/report/ticket-report/ticket-report.component.ts");
/* harmony import */ var _billing_report_billing_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./billing-report/billing-report.component */ "./src/app/admin/report/billing-report/billing-report.component.ts");
/* harmony import */ var _billing_service_report_billing_service_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./billing-service-report/billing-service-report.component */ "./src/app/admin/report/billing-service-report/billing-service-report.component.ts");
/* harmony import */ var _billing_subactivity_report_billing_subactivity_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./billing-subactivity-report/billing-subactivity-report.component */ "./src/app/admin/report/billing-subactivity-report/billing-subactivity-report.component.ts");
/* harmony import */ var _billing_tax_turnover_report_billing_tax_turnover_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./billing-tax-turnover-report/billing-tax-turnover-report.component */ "./src/app/admin/report/billing-tax-turnover-report/billing-tax-turnover-report.component.ts");
/* harmony import */ var _billing_hosting_user_report_billing_hosting_user_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./billing-hosting-user-report/billing-hosting-user-report.component */ "./src/app/admin/report/billing-hosting-user-report/billing-hosting-user-report.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _worksheet_report_worksheet_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./worksheet-report/worksheet-report.component */ "./src/app/admin/report/worksheet-report/worksheet-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    {
        path: 'client-report',
        component: _client_report_client_report_component__WEBPACK_IMPORTED_MODULE_3__["ClientReportComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__["AdminAuthGuard"]],
    },
    {
        path: 'bank-report',
        component: _bank_report_bank_report_component__WEBPACK_IMPORTED_MODULE_5__["BankReportComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__["AdminAuthGuard"]]
    },
    {
        path: 'client-allocation-report',
        component: _client_allocation_report_client_allocation_report_component__WEBPACK_IMPORTED_MODULE_6__["ClientAllocationReportComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__["AdminAuthGuard"]]
    },
    {
        path: 'billing-report',
        component: _billing_report_billing_report_component__WEBPACK_IMPORTED_MODULE_11__["BillingReportComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__["AdminAuthGuard"]]
    },
    {
        path: 'client-wise-invoice-report',
        component: _client_wise_invoice_report_client_wise_invoice_report_component__WEBPACK_IMPORTED_MODULE_7__["ClientWiseInvoiceReportComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__["AdminAuthGuard"]]
    },
    {
        path: 'invoice-report',
        component: _invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_8__["InvoiceReportComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__["AdminAuthGuard"]]
    },
    {
        path: 'worksheet-report',
        component: _worksheet_report_worksheet_report_component__WEBPACK_IMPORTED_MODULE_18__["WorksheetReportComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__["AdminAuthGuard"]]
    },
    {
        path: 'monthly-invoice-report',
        component: _monthly_invoice_report_monthly_invoice_report_component__WEBPACK_IMPORTED_MODULE_9__["MonthlyInvoiceReportComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__["AdminAuthGuard"]]
    },
    {
        path: 'ticket-report',
        component: _ticket_report_ticket_report_component__WEBPACK_IMPORTED_MODULE_10__["TicketReportComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__["AdminAuthGuard"]]
    },
    {
        path: 'billing-hosting-user-report',
        component: _billing_hosting_user_report_billing_hosting_user_report_component__WEBPACK_IMPORTED_MODULE_15__["BillingHostingUserReportComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__["AdminAuthGuard"]]
    },
    {
        path: 'billing-service-report',
        component: _billing_service_report_billing_service_report_component__WEBPACK_IMPORTED_MODULE_12__["BillingServiceReportComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__["AdminAuthGuard"]]
    },
    {
        path: 'billing-subactivity-report',
        component: _billing_subactivity_report_billing_subactivity_report_component__WEBPACK_IMPORTED_MODULE_13__["BillingSubactivityReportComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__["AdminAuthGuard"]]
    },
    {
        path: 'billing-tax-turnover-report',
        component: _billing_tax_turnover_report_billing_tax_turnover_report_component__WEBPACK_IMPORTED_MODULE_14__["BillingTaxTurnoverReportComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_16__["AdminAuthGuard"]]
    },
];
var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__["UtilityModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forChild(routes)],
            ],
            declarations: [_client_report_client_report_component__WEBPACK_IMPORTED_MODULE_3__["ClientReportComponent"], _client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ShareReportDialogComponent"], _bank_report_bank_report_component__WEBPACK_IMPORTED_MODULE_5__["BankReportComponent"], _client_allocation_report_client_allocation_report_component__WEBPACK_IMPORTED_MODULE_6__["ClientAllocationReportComponent"], _client_wise_invoice_report_client_wise_invoice_report_component__WEBPACK_IMPORTED_MODULE_7__["ClientWiseInvoiceReportComponent"], _invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_8__["InvoiceReportComponent"], _monthly_invoice_report_monthly_invoice_report_component__WEBPACK_IMPORTED_MODULE_9__["MonthlyInvoiceReportComponent"], _ticket_report_ticket_report_component__WEBPACK_IMPORTED_MODULE_10__["TicketReportComponent"], _billing_report_billing_report_component__WEBPACK_IMPORTED_MODULE_11__["BillingReportComponent"], _billing_service_report_billing_service_report_component__WEBPACK_IMPORTED_MODULE_12__["BillingServiceReportComponent"], _billing_subactivity_report_billing_subactivity_report_component__WEBPACK_IMPORTED_MODULE_13__["BillingSubactivityReportComponent"], _billing_tax_turnover_report_billing_tax_turnover_report_component__WEBPACK_IMPORTED_MODULE_14__["BillingTaxTurnoverReportComponent"], _billing_hosting_user_report_billing_hosting_user_report_component__WEBPACK_IMPORTED_MODULE_15__["BillingHostingUserReportComponent"], _worksheet_report_worksheet_report_component__WEBPACK_IMPORTED_MODULE_18__["WorksheetReportComponent"]],
            entryComponents: [
                _client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ShareReportDialogComponent"],
            ]
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "./src/app/admin/report/ticket-report/ticket-report.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/report/ticket-report/ticket-report.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"common-report-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>REPORTS</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">TICKET REPORT</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Saved Report</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n\r\n            <th width=\"10%\" (click)=\"getSortClientReportData('report_name',\r\n             (clientReportSortBy === 'report_name') ? (clientReportSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Report Name\r\n              <i *ngIf=\"clientReportSortBy === 'report_name'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientReportSortBy === 'report_name'),\r\n            'icon-up' : ((clientReportSortBy === 'report_name') && (clientReportSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientReportSortBy === 'report_name') ? ((clientReportSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n\r\n            <th width=\"65%\" (click)=\"getSortClientReportData('report_output',\r\n             (clientReportSortBy === 'report_output') ? (clientReportSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Output Field\r\n              <i *ngIf=\"clientReportSortBy === 'report_output'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientReportSortBy === 'report_output'),\r\n            'icon-up' : ((clientReportSortBy === 'report_output') && (clientReportSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientReportSortBy === 'report_output') ? ((clientReportSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\">Report Owner</th>\r\n\r\n            <th width=\"10%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody *ngIf=\"clientReportList.length > 0\">\r\n            <tr *ngFor=\"let clientReport of clientReportList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"10%\">{{clientReport?.name}}</td>\r\n              <td width=\"65%\" class=\"word-break\">{{clientReport?.filter_output_field}}</td>\r\n              <td width=\"10%\">{{clientReport?.created_by?.userfullname}}</td>\r\n              <td width=\"10%\">\r\n                <mat-icon *ngIf=\"tabData['view']\" class=\"light-orange-color\" [matTooltip]=\"'Load Report'\"\r\n                          (click)=\"loadDocument(clientReport)\">\r\n                  timelapse\r\n                </mat-icon>\r\n                <mat-icon *ngIf=\"tabData['add_edit']\" class=\"wet-asphalt-color\" [matTooltip]=\"'Share Report'\"\r\n                          (click)=\"shareDocumentWithUser(clientReport)\">share\r\n                </mat-icon>\r\n                <mat-icon *ngIf=\"tabData['delete']\" class=\"red-color\" [matTooltip]=\"'Delete Report'\"\r\n                          (click)=\"deleteClientReport(clientReport)\">\r\n                  delete\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n            <tbody *ngIf=\"clientReportList.length ===0\" class=\"panel-title\">No Records Found</tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n    <table>\r\n      <tfoot>\r\n      <tr>\r\n        <td colspan=\"10\">\r\n          <mat-paginator [length]=\"totalRecords\"\r\n                         [pageSize]=\"pageSize\"\r\n                         [pageIndex]=\"pageIndex\"\r\n                         [pageSizeOptions]=\"pageArray\"\r\n                         (page)=\"onPageChange($event)\">\r\n          </mat-paginator>\r\n        </td>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n  <!--Start add filter field-->\r\n  <div class=\"section-sepration PB-30\">\r\n    <span class=\"panel-title\">Filter Field</span>\r\n    <span class=\"MR-10 on-right \"><button class=\"open-dialog-btn primary-color\" (click)=\"resetFilterField()\"><mat-icon>clear_all</mat-icon>Reset Filter</button></span>\r\n    <form [formGroup]=\"clientForm\">\r\n      <div formArrayName=\"clientReportFields\">\r\n        <div class=\"row col-md-12\" *ngFor=\"let filterGroup of getFilterFieldArray().controls; let i=index\"\r\n             [formGroupName]=\"i\">\r\n          <!-- | slice: ((followingUserLength === 0 && followingUserListLength === 0) ? 4 : 0) -->\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Filter Field\" formControlName=\"fieldname\"\r\n                          (selectionChange)=\"changeFieldName($event.value, i)\">\r\n                <mat-option *ngFor=\"let report of ReportList\" [value]=\"report\">{{report?.field_title}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Select Filter\" formControlName=\"condition\"\r\n                          (selectionChange)=\"onSelectShowHideField($event.value, i)\">\r\n                <mat-option *ngFor=\"let fType of selectedReportFilter[i]\" [value]=\"fType?.key\">{{fType?.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'TB'\">\r\n            <mat-form-field>\r\n              <input matInput [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                     formControlName=\"value\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'TN'\">\r\n            <mat-form-field>\r\n              <input type=\"number\" matInput\r\n                     [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                     formControlName=\"value\"/>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && getFilterFieldArray().controls[i].get('fieldname').value['isCommaSeperated']\">\r\n            <mat-form-field>\r\n              <mat-select [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                          formControlName=\"value\">\r\n                <mat-option *ngFor=\"let fTypeValue of selectedReportValue[i]\" [value]=\"fTypeValue\">{{fTypeValue}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && getFilterFieldArray().controls[i].get('fieldname').value['isMultiSelect']\">\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'trading_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"tradingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #TradingName\r\n                         [(ngModel)]=\"selectedTradingEntity\">\r\n              </ng-select>\r\n            </div>\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'billing_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"billingList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"billing_name\"\r\n                         placeholder=\"Billing Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #BillingName\r\n                         [(ngModel)]=\"selectedBillingEntity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'entity_name'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"nameList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"name\"\r\n                         placeholder=\"Entity Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #Name\r\n                         [(ngModel)]=\"selectedNameEntity\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'code'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"codeList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"code\"\r\n                         placeholder=\"Client Code\"\r\n                         bindValue=\"code\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\" #Code\r\n                         [(ngModel)]=\"selectedCodeEntity\">\r\n              </ng-select>\r\n            </div>\r\n            <!--<div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'code'\">-->\r\n            <!--<ng-select [multiple]=\"true\" [items]=\"codeList\"-->\r\n            <!--[closeOnSelect]=\"true\"-->\r\n            <!--bindLabel=\"code\"-->\r\n            <!--placeholder=\"Client Code\"-->\r\n            <!--bindValue=\"code\"-->\r\n            <!--[virtualScroll]=\"true\"-->\r\n            <!--[searchable]=\"true\"-->\r\n            <!--[hideSelected]=\"true\"-->\r\n            <!--formControlName=\"value\" #Code-->\r\n            <!--[(ngModel)]=\"selectedCodeEntity\">-->\r\n            <!--</ng-select>-->\r\n            <!--</div>-->\r\n            <div\r\n              *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'staff_involved_issue'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Staff Involved Issue\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\"\r\n                         [(ngModel)]=\"selectedStaffInvolvedIssue\">\r\n              </ng-select>\r\n            </div>\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'staff_incharge'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Staff Incharge\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\"\r\n                         [(ngModel)]=\"selectedStaffIncharge\">\r\n              </ng-select>\r\n            </div>\r\n            <div *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_name'] === 'ticket_assignee'\">\r\n              <ng-select [multiple]=\"true\" [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"Ticket Assignee\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"value\"\r\n                         [(ngModel)]=\"selectedTicketAssignee\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'DD' && !getFilterFieldArray().controls[i].get('fieldname').value['isCommaSeperated'] && !getFilterFieldArray().controls[i].get('fieldname').value['isMultiSelect']\">\r\n            <mat-form-field>\r\n              <mat-select [placeholder]=\"getFilterFieldArray().controls[i].get('fieldname').value['field_title']\"\r\n                          formControlName=\"value\" [(ngModel)]=\"selectedReportUpdatedValue[i]\" [multiple]=\"true\">\r\n                <mat-option *ngFor=\"let fTypeValue of selectedReportValue[i]\" [value]=\"fTypeValue?.key\">\r\n                  {{fTypeValue?.label}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value !== 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"date.open()\" formControlName=\"value\" [matDatepicker]=\"DateRef\"\r\n                     placeholder=\"Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"DateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #date #DateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value === 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"fromdate.open()\" formControlName=\"value\" [matDatepicker]=\"FrDateRef\"\r\n                     placeholder=\"From Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"FrDateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #fromdate #FrDateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2\"\r\n               *ngIf=\"getFilterFieldArray().controls[i].get('fieldname').value['field_type'] === 'CL' && getFilterFieldArray().controls[i].get('condition').value === 'between'\">\r\n            <mat-form-field>\r\n              <input matInput (mousedown)=\"todate.open()\" formControlName=\"value2\" [matDatepicker]=\"toDateRef\"\r\n                     placeholder=\"To Date\"/>\r\n              <mat-datepicker-toggle matSuffix [for]=\"toDateRef\"></mat-datepicker-toggle>\r\n              <mat-datepicker #todate #toDateRef disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-2 MT-15\" *ngIf=\"i === 0\">\r\n            <mat-icon class=\"mat-icon material-icons cursor-pointer primary-color\" (click)=\"addNewFilter(i)\">add\r\n            </mat-icon>\r\n          </div>\r\n          <div class=\"col-md-2 MT-15\" *ngIf=\"i !== 0\">\r\n            <mat-icon class=\"mat-icon material-icons cursor-pointer red-color\" (click)=\"removeFilter(i)\">\r\n              indeterminate_check_box\r\n            </mat-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <!--Start add output field-->\r\n  <div class=\"section-sepration output-field PB-30\">\r\n    <span class=\"panel-title\">Output Field</span>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"field-bg\">\r\n          <span class=\"panel-title\">Choose Field</span>\r\n          <span class=\"panel-title on-right black-color\"><button class=\"open-dialog-btn\" (click)=\"addFieldToOutput()\">Add All Fields</button></span>\r\n          <div class=\"panel-body primary-chip\" dragula=\"DRAGULA_FACTS\" id=\"leftDragableModel\"\r\n               [(dragulaModel)]=\"leftDragableModel\">\r\n            <mat-chip-list *ngFor=\"let oField of leftDragableModel\">\r\n              <mat-chip>{{oField?.field_title}}\r\n                <!--<mat-icon>done</mat-icon>-->\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"field-bg\">\r\n          <span class=\"panel-title turquoise-color\">Selected Field</span>\r\n          <button class=\"btn-primary on-right MT-5 MR-5\" (click)=\"showGenerateReport(0)\">Generate Report\r\n          </button>\r\n          <span class=\"panel-title on-right\"><button class=\"open-dialog-btn\"\r\n                                                     (click)=\"resetOutputField()\">Reset</button></span>\r\n\r\n          <div class=\"panel-body success-chip\" dragula=\"DRAGULA_FACTS\" id=\"rightDragableModel\"\r\n               [(dragulaModel)]=\"rightDragableModel\">\r\n            <mat-chip-list *ngFor=\"let oField of rightDragableModel\">\r\n              <mat-chip>{{oField?.field_title}}\r\n                <!--<mat-icon>done</mat-icon>-->\r\n              </mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n        </div>\r\n        <div class=\"MT-15\" *ngIf=\"tabData['add_edit']\">\r\n          <form [formGroup]=\"reportDataForm\" (submit)=\"saveClientReport(reportDataForm.valid, reportDataForm.value)\"\r\n                class=\"row on-right\">\r\n            <div class=\"col-md-7 PL-\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Report Name\" formControlName=\"name\" required/>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-5 PLR-0\">\r\n              <button type=\"button\" (click)=\"saveClientReport(reportDataForm.valid, reportDataForm.value)\"\r\n                      class=\"btn-orange btn-bordered\" *ngIf=\"selectedClientReport\" [disabled]=\"reportDataForm.invalid\">\r\n                Update Report\r\n              </button>\r\n              <button type=\"submit\" class=\"btn-success\" *ngIf=\"!selectedClientReport\"\r\n                      [disabled]=\"reportDataForm.invalid\">\r\n                Save New Report\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- generate report -->\r\n  <div class=\"section-sepration with-filter-grid-container\" *ngIf=\"showHideReport\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-header-title\">\r\n          <h3>Generate Report</h3>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li *ngIf=\"tabData['export']\">\r\n              <a (click)=\"showGenerateReport(1)\">\r\n                <span>Excel</span> <i class=\"material-icons\">file_download</i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th *ngFor=\"let col of reportColumn\">{{col}}</th>\r\n            <th *ngIf=\"reportTabData['id'] === 15\">Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"generatedReportList.length\">\r\n          <tr *ngFor=\"let report of generatedReportList; let i = index\">\r\n            <td *ngFor=\"let col of reportColumn\">{{checkIsFieldValueIsDate(report[col], 1)}}</td>\r\n            <td *ngIf=\"reportTabData['id'] === 15\">\r\n              <a target=\"_blank\" (click)=\"onViewBillingInformation()\" *ngIf=\"reportTabData['id'] === 15\">\r\n                <mat-icon class=\"primary-color\" [matTooltip]=\"'View Billing Information'\">visibility</mat-icon>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n          <tbody *ngIf=\"generatedReportList.length ===0\" class=\"panel-title\">No Records Found</tbody>\r\n        </table>\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"rtotalRecords\"\r\n                             [pageSize]=\"rpageSize\"\r\n                             [pageIndex]=\"rpageIndex\"\r\n                             [pageSizeOptions]=\"rpageArray\"\r\n                             (page)=\"onPageReportChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- End Table -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/report/ticket-report/ticket-report.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/report/ticket-report/ticket-report.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3JlcG9ydC90aWNrZXQtcmVwb3J0L3RpY2tldC1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/report/ticket-report/ticket-report.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/report/ticket-report/ticket-report.component.ts ***!
  \***********************************************************************/
/*! exports provided: TicketReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketReportComponent", function() { return TicketReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-dragula */ "../../node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../client-report/share-report-dialog/share-report-dialog.component */ "./src/app/admin/report/client-report/share-report-dialog/share-report-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var TicketReportComponent = /** @class */ (function () {
    function TicketReportComponent(_router, dialog, _fb, _commonCrudService, _sharedObjService, _sharedService, dragulaService) {
        this._router = _router;
        this.dialog = dialog;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        this.dragulaService = dragulaService;
        // Data Variables
        this.clientReportList = [];
        this.selectedClientReport = null;
        this.ReportList = [];
        this.outPutFieldList = [];
        this.severityList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ticketSeverity"];
        this.priorityList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ticketPriority"];
        this.typeOfMistakeList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ticketTypeOfMistake"];
        this.topicList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ticketTopic"];
        this.teamList = [];
        this.tamList = [];
        this.thList = [];
        this.staffInChanrgeList = [];
        this.staffInvoiceList = [];
        this.yesNoList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNo"];
        this.ticketStatusList = [];
        this.ticketTypeList = [];
        this.generatedReportList = [];
        this.reportColumn = [];
        this.selectedReportFilter = {};
        this.selectedReportValue = {};
        this.selectedReportUpdatedValue = {};
        this.reportTabData = {};
        this.reportArray = [];
        this.getUserListData = [];
        this.userList = [];
        this.entityList = {};
        this.leftDragableModel = [];
        this.rightDragableModel = [];
        // Pagination Data for Saved Report
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
        // Report Pagination
        this.rpageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY;
        this.rpageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["BASE"].PAGINATION_ARRAY[1];
        // MatPaginator Inputs
        this.length = 20;
        this.tradingList = [];
        this.selectedTradingEntity = [];
        this.billingList = [];
        this.selectedBillingEntity = [];
        this.nameList = [];
        this.selectedNameEntity = [];
        this.codeList = [];
        this.selectedCodeEntity = [];
        this.selectedStaffInvolvedIssue = [];
        this.selectedStaffIncharge = [];
        this.selectedTicketAssignee = [];
        this.d = [];
        this.userIDArray = [9, 10, 14, 15, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75];
        this.tabApiURL = '';
        this.tabReportName = '';
        this.BIR = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__["ADMINTABACCESS"].REPORT_TICKETREPORT;
        this.showHideReport = false;
        dragulaService.destroy('DRAGULA_FACTS');
        dragulaService.createGroup('DRAGULA_FACTS', {
            revertOnSpill: true,
            removeOnSpill: false,
        });
    }
    TicketReportComponent.prototype.ngOnInit = function () {
        this.reportTabData = { 'id': (this.tabID) ? this.tabID : this.BIR, 'name': (this.tabName) ? this.tabName : 'TICKET REPORT' };
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.reportTabData['id']);
        this.initializeMethod();
    };
    TicketReportComponent.prototype.initializeMethod = function () {
        this.selectedClientReport = null;
        this.getClientList();
        // this.getUserList();
        this.getTabReportAPIURL(this.reportTabData['id']);
        this.getUserList();
        this.getClientList();
        this.getTeam();
        this.getTicketStatusList();
        this.getTicketTypeList();
        this.getReportOutputField(this.reportTabData['id']);
        this.createReportDataForm();
        this.createClientReportForm();
        this.getClientReportList(this.reportTabData['id'], 1);
    };
    /**
     * Get User List
     */
    TicketReportComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.userList = response;
            _this.getClientFilterFiled(_this.reportTabData['id']);
        });
    };
    /**
     * Get team
     */
    TicketReportComponent.prototype.getTeam = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TEAM, {}, {}).subscribe(function (Response) {
            Response.payload.data.map(function (item) {
                _this.teamList.push({ key: item.id, label: item.name });
            });
        });
    };
    /**
     * Get Ticket Status List
     */
    TicketReportComponent.prototype.getTicketStatusList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].DROPDOWN_LIST, {
            'records': 'all',
            'table': 'ticket_status',
            'column': 'id,status,hide_for_sr',
            'sortOrder': 'id',
            'sortBy': 'asc'
        }, {}).subscribe(function (Response) {
            if (Response) {
                Response.map(function (item) {
                    _this.ticketStatusList.push({ key: item.state_id, label: item.status });
                });
            }
        });
    };
    /**
     * Get ticket Type list
     */
    TicketReportComponent.prototype.getTicketTypeList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TICKET_TYPE, {
            'records': 'all'
        }, {}).subscribe(function (Response) {
            Response.payload.data.map(function (item) {
                _this.ticketTypeList.push({ key: item.id, label: item.name });
            });
        });
    };
    /**
     * get report output field for drag and drop
     * @param clientTypeId
     */
    TicketReportComponent.prototype.getReportOutputField = function (clientTypeId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, { 'type': 'output' }).subscribe(function (Response) {
            _this.outPutFieldList = Response.payload.data;
            _this.leftDragableModel = _this.outPutFieldList;
        });
    };
    /**
     * Create Report Form
     */
    TicketReportComponent.prototype.createClientReportForm = function () {
        this.clientForm = this._fb.group({
            clientReportFields: this._fb.array([this.createClientReportGroup()])
        });
    };
    /**
     * Create Report Data Form
     */
    TicketReportComponent.prototype.createReportDataForm = function () {
        this.reportDataForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedClientReport ? this.selectedClientReport.name : '')
        });
    };
    /**
     * Create Report Group Form
     */
    TicketReportComponent.prototype.createClientReportGroup = function (reportData, item) {
        return this._fb.group({
            fieldname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](reportData ? reportData : ''),
            condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['condition'] : ''),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['value'] : ''),
            value2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item['value2'] : ''),
        });
    };
    /**
     * Get Client report list
     * @param tabId
     * @param pageNumber
     */
    TicketReportComponent.prototype.getClientReportList = function (tabId, pageNumber) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT + '/' + tabId, this.getQueryParams(pageNumber)).subscribe(function (Response) {
            _this.handleClientReportResponse(Response);
        });
    };
    /**
     * Get Filter Field Array
     */
    TicketReportComponent.prototype.getFilterFieldArray = function () {
        return this.clientForm.get('clientReportFields');
    };
    /**
     * Handle Client Report Response
     * @param response
     */
    TicketReportComponent.prototype.handleClientReportResponse = function (response) {
        this.clientReportList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
    };
    /**
     * add new filter
     * @param index
     */
    TicketReportComponent.prototype.addNewFilter = function (index) {
        if (this.getFilterFieldArray().length < 6) {
            this.reportArray.push(this.getFilterFieldArray().controls[index].get('fieldname'));
            this.getFilterFieldArray().push(this.createClientReportGroup());
        }
        else {
            this._sharedService.setToastMessage('You can add maximum five filter', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
        }
    };
    /**
     * remove row from filter collection
     * @param index
     */
    TicketReportComponent.prototype.removeFilter = function (index) {
        this.reportArray.splice(this.reportArray.indexOf(this.getFilterFieldArray().controls[index].get('fieldname')), 1);
        this.getFilterFieldArray().removeAt(index);
    };
    /**
     * Genretae report
     * @param generateReportType
     */
    TicketReportComponent.prototype.showGenerateReport = function (generateReportType, tabID, pageNumber, recordsPerPage) {
        var _this = this;
        var formValue = {};
        if (!tabID) {
            tabID = this.reportTabData['id'];
        }
        if (this.rightDragableModel.length) {
            formValue['output_field'] = [];
            this.rightDragableModel.map(function (item) {
                formValue['output_field'].push(item.field_name);
            });
            formValue['output_field'] = formValue['output_field'].join();
            if (this.getFilterFieldArray().length) {
                formValue['search'] = [];
                this.getFilterFieldArray().value.map(function (item) {
                    // console.log(item['value']);
                    if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
                        if (Array.isArray(item['value'])) {
                            item['value'] = item['value'].toString();
                        }
                        else {
                            if (_this.checkIsFieldValueIsDate(item['value'])) {
                                if (Number(item['value']) > 0 && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](item['value'])) {
                                    item['value'] = item['value'];
                                }
                                else {
                                    item['value'] = moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD');
                                }
                            }
                            else {
                                item['value'] = item['value'];
                            }
                        }
                        if (item['condition'] === 'between') {
                            if (item['value']) {
                                formValue['search'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': 'greaterthanequal',
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD')
                                });
                            }
                            if (item['value2']) {
                                formValue['search'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': 'lessthanequal',
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value2']).format('YYYY-MM-DD')
                                });
                            }
                        }
                        else {
                            formValue['search'].push({
                                'fieldname': item['fieldname']['field_name'],
                                'condition': item['condition'],
                                'value': item['value'],
                            });
                        }
                    }
                });
            }
            formValue['search'].length === 0 ? delete formValue['search'] : formValue['search'] = JSON.stringify(formValue['search']);
            if (generateReportType) {
                formValue['excel'] = 1;
                formValue['records'] = 'all';
                this._commonCrudService.downloadReport(this.tabApiURL, formValue, {}, this.tabReportName, 0).subscribe(function (response) {
                });
            }
            else {
                formValue['pageNumber'] = (pageNumber) ? pageNumber : 1;
                formValue['recordsPerPage'] = (recordsPerPage) ? recordsPerPage : this.rpageSize;
                this._commonCrudService.generatReport(this.tabApiURL, formValue).subscribe(function (Response) {
                    _this.generatedReportList = Response.payload.data;
                    _this.rpage = Response.pager.pageNumber;
                    _this.rpageIndex = _this.rpage - 1;
                    _this.rtotalRecords = +Response.pager.totalRecords;
                    _this.reportColumn = (_this.generatedReportList[0]) ? Object.keys(_this.generatedReportList[0]) : [];
                    _this.showHideReport = true;
                });
            }
        }
        else {
            this._sharedService.setToastMessage('Please select atleast one output field', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
        }
    };
    /**
     * on change of field type assign it to the selectedReportfilter and assign ites field
     * condition and condition value to be perform.
     * @param value
     * @param i
     */
    TicketReportComponent.prototype.changeFieldName = function (value, i, selectedItem) {
        var indOfField = this.ReportList.findIndex(function (x) { return +x.id === +value.id; });
        if (this.ReportList[indOfField].field_name === 'trading_name' || this.ReportList[indOfField].field_name === 'billing_name' || this.ReportList[indOfField].field_name === 'entity_name' || this.ReportList[indOfField].field_name === 'code' || this.ReportList[indOfField].field_name === 'staff_involved_issue' || this.ReportList[indOfField].field_name === 'staff_incharge' || this.ReportList[indOfField].field_name === 'ticket_assignee') {
            if (selectedItem) {
                this.onSearch(this.ReportList[indOfField].field_name, 1, selectedItem['value']);
                this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            }
            else {
                this.onSearch(this.ReportList[indOfField].field_name);
                this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            }
        }
        else if (indOfField > -1) {
            this.onSearch(this.ReportList[indOfField].field_name);
            // console.log(2);
            this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
            this.selectedReportValue[i] = this.ReportList[indOfField].field_value_array;
            if (selectedItem) {
                if (this.ReportList[indOfField].field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTNUMERIC) {
                    var itemValue = selectedItem['value'];
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
                else if (this.ReportList[indOfField].field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTBOX) {
                    var itemValue = selectedItem['value'];
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
                else {
                    var itemValue = this.getArrayToString(selectedItem['value'], ',');
                    this.selectedReportUpdatedValue[i] = itemValue;
                }
            }
        }
    };
    /**
     * on change of field type assign it to the selectedReportfilter and assign ites field
     * condition and condition value to be perform.
     * @param value
     * @param i
     */
    TicketReportComponent.prototype.onSelectShowHideField = function (value, i, selectedItem) {
    };
    /**
     * Save Client Report
     * @param isValid
     * @param formValue
     */
    TicketReportComponent.prototype.saveClientReport = function (isValid, formValue) {
        var _this = this;
        if (isValid) {
            if (this.rightDragableModel.length) {
                formValue['output'] = [];
                formValue['filter_output_field'] = [];
                this.rightDragableModel.map(function (item) {
                    formValue['output'].push(item.field_name);
                    formValue['filter_output_field'].push(item.field_title);
                });
                formValue['output'] = formValue['output'].join();
                formValue['filter_output_field'] = formValue['filter_output_field'].join();
                formValue['tab_id'] = this.reportTabData['id'];
                if (this.getFilterFieldArray().length) {
                    formValue['filter_condition_value'] = [];
                    this.getFilterFieldArray().value.map(function (item) {
                        if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
                            if (Array.isArray(item['value'])) {
                                item['value'] = item['value'].toString();
                            }
                            else {
                                if (_this.checkIsFieldValueIsDate(item['value'])) {
                                    if (Number(item['value']) > 0 && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](item['value'])) {
                                        item['value'] = item['value'];
                                    }
                                    else {
                                        item['value'] = moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD');
                                    }
                                }
                                else {
                                    item['value'] = item['value'];
                                }
                            }
                            if (item['condition'] === 'between') {
                                formValue['filter_condition_value'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': item['condition'],
                                    'value': moment__WEBPACK_IMPORTED_MODULE_11__(item['value']).format('YYYY-MM-DD'),
                                    'value2': moment__WEBPACK_IMPORTED_MODULE_11__(item['value2']).format('YYYY-MM-DD'),
                                });
                            }
                            else {
                                formValue['filter_condition_value'].push({
                                    'fieldname': item['fieldname']['field_name'],
                                    'condition': item['condition'],
                                    'value': item['value']
                                });
                            }
                        }
                    });
                }
                formValue['filter_condition_value'].length === 0 ? delete formValue['filter_condition_value'] : formValue['filter_condition_value'] = JSON.stringify(formValue['filter_condition_value']);
                if (this.selectedClientReport) {
                    formValue['_method'] = 'put';
                    // this.reportTabData['id'],
                    this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_UPDATE, this.selectedClientReport.id, formValue).subscribe(function (Response) {
                        _this.rightDragableModel = [];
                        _this.initializeMethod();
                    });
                }
                else {
                    // this.reportTabData['id']
                    this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_ADD + '/' + this.reportTabData['id'], formValue).subscribe(function (Response) {
                        _this.rightDragableModel = [];
                        _this.initializeMethod();
                    });
                }
            }
            else {
                this._sharedService.setToastMessage('Please select atleast one output field', _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ToastType"].ERROR);
            }
        }
    };
    // event
    /**
     * pagination event
     * @param event
     */
    TicketReportComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getClientReportList(this.reportTabData['id'], event.pageIndex + 1);
    };
    /**
     * pagination event
     * @param event
     */
    TicketReportComponent.prototype.onPageReportChange = function (event) {
        this.showGenerateReport(0, this.reportTabData['id'], event.pageIndex + 1, event.pageSize);
    };
    TicketReportComponent.prototype.onViewBillingInformation = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].UPDATE_CLIENT]);
    };
    /**
     * reset filter
     */
    TicketReportComponent.prototype.resetFilterField = function () {
        this.createClientReportForm();
    };
    /**
     * reset output field by push it to the left draggable model and make it empty.
     */
    TicketReportComponent.prototype.resetOutputField = function () {
        var _this = this;
        this.rightDragableModel.map(function (item) {
            _this.leftDragableModel.push(item);
        });
        this.rightDragableModel = [];
    };
    /**
     * set output field by push it to the right draggable model and make it empty.
     */
    TicketReportComponent.prototype.addFieldToOutput = function () {
        this.rightDragableModel = this.outPutFieldList;
        this.leftDragableModel = [];
    };
    /**
     * delete client report.
     * @param clientReport
     */
    TicketReportComponent.prototype.deleteClientReport = function (clientReport) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this report ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_DELETE, clientReport.id).subscribe(function (Response) {
                    _this.getClientReportList(_this.reportTabData['id'], 1);
                });
            }
        });
    };
    /**
     * get the user list to whom admin want to share document.
     * @param clientReport
     */
    TicketReportComponent.prototype.shareDocumentWithUser = function (clientReport) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_SHARED_USER_LIST + '/' + clientReport.report_saved_id, {}, {}).subscribe(function (Response) {
            Response.payload.data['clientData'] = clientReport;
            var dialogRef = _this.dialog.open(_client_report_share_report_dialog_share_report_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ShareReportDialogComponent"], {
                width: '500px',
                data: {
                    content: Response.payload.data
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
            });
        });
    };
    /**
     * local sort the report data based on key and value
     * @param sortKey
     * @param sortVal
     */
    TicketReportComponent.prototype.getSortClientReportData = function (sortKey, sortVal) {
        this.clientReportSortBy = sortKey;
        this.clientReportSortOrder = sortVal;
        var sortedArray = this.clientReportList.sort(function (objOne, objTwo) {
            if (objOne[sortKey] > objTwo[sortKey]) {
                return 1;
            }
            if (objOne[sortKey] < objTwo[sortKey]) {
                return -1;
            }
            return 0;
        });
        if (sortVal === 'asc') {
            this.clientReportList = sortedArray;
        }
        else {
            this.clientReportList = sortedArray.reverse();
        }
    };
    /**
     * load the specific document and its content and remove already selected output fields if there is any.
     * @param clientReport
     */
    TicketReportComponent.prototype.loadDocument = function (clientReport) {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_VIEW, clientReport.id).subscribe(function (Response) {
            _this.rightDragableModel.map(function (item) {
                _this.leftDragableModel.push(item);
            });
            _this.rightDragableModel = [];
            _this.leftDragableModel = _this.outPutFieldList;
            _this.selectedClientReport = Response.payload.data;
            _this.createReportDataForm();
            _this.selectedClientReport.outputList = _this.selectedClientReport.output.split(',');
            if (_this.selectedClientReport.outputList.length) {
                _this.selectedClientReport.outputList.map(function (report) {
                    var ind = _this.outPutFieldList.findIndex(function (x) { return x.field_name === report; });
                    _this.rightDragableModel.push(_this.outPutFieldList[ind]);
                    _this.leftDragableModel.splice(ind, 1);
                });
            }
            if (_this.selectedClientReport.filter_condition_value !== null) {
                if (JSON.parse(_this.selectedClientReport.filter_condition_value).length) {
                    _this.clientForm = _this._fb.group({
                        clientReportFields: _this._fb.array([])
                    });
                }
                _this.selectedClientReport.filter_condition_valueList = JSON.parse(_this.selectedClientReport.filter_condition_value);
                var i_1 = 0;
                _this.selectedClientReport.filter_condition_valueList.map(function (item) {
                    var indOfField = _this.ReportList.findIndex(function (x) { return x.field_name === item.fieldname; });
                    _this.changeFieldName(_this.ReportList[indOfField], i_1, item);
                    _this.getFilterFieldArray().push(_this.createClientReportGroup(_this.ReportList[indOfField], item));
                    i_1++;
                });
            }
        });
    };
    // helper
    // get function for returning pageNumber and page size at time of listing api
    TicketReportComponent.prototype.getQueryParams = function (page) {
        return {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
    };
    /**
     * Get Client List
     */
    TicketReportComponent.prototype.getClientList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.tradingList = response;
            _this.billingList = response;
            _this.nameList = response;
            _this.codeList = response;
        });
    };
    /**
     * On Search Of Data
     * @param key
     */
    TicketReportComponent.prototype.onSearch = function (key, format, selectedIDS) {
        if (key === 'billing_name') {
            if (Number(format) === 1) {
                this.selectedBillingEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'trading_name') {
            if (Number(format) === 1) {
                this.selectedTradingEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'entity_name') {
            if (Number(format) === 1) {
                this.selectedNameEntity = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'code') {
            if (Number(format) === 1) {
                this.selectedCodeEntity = this.getArrayToString(selectedIDS, ',', 1);
            }
        }
        if (key === 'staff_involved_issue') {
            if (Number(format) === 1) {
                this.selectedStaffInvolvedIssue = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'staff_incharge') {
            if (Number(format) === 1) {
                this.selectedStaffIncharge = this.getArrayToString(selectedIDS, ',');
            }
        }
        if (key === 'ticket_assignee') {
            if (Number(format) === 1) {
                this.selectedTicketAssignee = this.getArrayToString(selectedIDS, ',');
            }
        }
    };
    /**
     * Get array values from string
     * @param {string} value
     * @param {string} seperator
     * @returns {string[]}
     */
    TicketReportComponent.prototype.getArrayToString = function (value, seperator, isNotNumber) {
        if (value) {
            var valueOne_1 = [];
            value.split(seperator).map(function (item) {
                if (isNotNumber) {
                    valueOne_1.push(item);
                }
                else {
                    valueOne_1.push(Number(item));
                }
            });
            return valueOne_1;
        }
    };
    /**
     * Get Report Tab API UR AND Tab Report Name
     * @param tabID
     */
    TicketReportComponent.prototype.getTabReportAPIURL = function (tabID) {
        if (+tabID === this.BIR) {
            this.tabApiURL = _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].TICKET_GENERATE_REPORT;
            this.tabReportName = 'Ticket Report ';
        }
    };
    /**
     * get report list and pass its field condition value for drop down from constant as well as whose group id = 1 and
     * field value = "" and type = 'DD' then assign its filter value from API.
     * @param clientTypeId
     */
    TicketReportComponent.prototype.getClientFilterFiled = function (clientTypeId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, { 'type': 'filter' }).subscribe(function (Response) {
            _this.ReportList = Response.payload.data;
            _this.rpage = Response.pager.pageNumber;
            _this.rpageIndex = _this.rpage - 1;
            _this.rtotalRecords = +Response.pager.totalRecords;
            if (+_this.reportTabData['id'] === _this.BIR) {
                _this.ReportList.map(function (item) {
                    if (item.field_value) {
                        item.isCommaSeperated = false;
                        if (item.field_value === 'yesNo') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["yesNo"].slice(1);
                        }
                        else if (item.field_value === 'ticketseverity') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ticketSeverity"].slice(1);
                        }
                        else if (item.field_value === 'ticketpriority') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ticketPriority"].slice(1);
                        }
                        else if (item.field_value === 'tickettypeofmistake') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ticketTypeOfMistake"].slice(1);
                        }
                        else if (item.field_value === 'tickettopic') {
                            item.field_value_array = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["ticketTopic"].slice(1);
                        }
                        else {
                            item.isCommaSeperated = true;
                            item.field_value_array = item.field_value.split(',');
                        }
                    }
                    else {
                        // If Client Code And Entity Name Fetch
                        if (item.field_name === 'code' || item.field_name === 'entity_name'
                            || item.field_name === 'billing_name' || item.field_name === 'trading_name') {
                            item.isMultiSelect = true;
                            item.isCommaSeperated = false;
                        }
                        else if (item.field_name === 'type_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.ticketTypeList;
                        }
                        else if (item.field_name === 'team_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.teamList;
                        }
                        else if (item.field_name === 'status_id') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.ticketStatusList;
                        }
                        else if (item.field_name === 'technical_account_manager') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var itemArray = _this.userList.filter(function (itemData) { return (itemData['designation_id']) ? itemData['designation_id']['id'] === Number(9) : 0; });
                            if (itemArray.length) {
                                _this.tamList = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.tamList.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.tamList = [];
                            }
                            item.field_value_array = _this.tamList;
                        }
                        else if (item.field_name === 'technical_head') {
                            item.isMultiSelect = false;
                            item.isCommaSeperated = false;
                            var itemArray = _this.userList.filter(function (itemData) { return (itemData['designation_id']) ? itemData['designation_id']['id'] === Number(63) : 0; });
                            if (itemArray.length) {
                                _this.thList = [];
                                itemArray.map(function (itemArrayData) {
                                    _this.thList.push({ 'key': itemArrayData['id'], 'label': itemArrayData['userfullname'] });
                                });
                            }
                            else {
                                _this.thList = [];
                            }
                            item.field_value_array = _this.thList;
                        }
                        else if (item.field_name === 'staff_incharge' || item.field_name === 'staff_involved_issue' || item.field_name === 'ticket_assignee') {
                            item.isMultiSelect = true;
                            item.isCommaSeperated = false;
                            item.field_value_array = _this.userList;
                        }
                    }
                    if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTBOX) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["TBFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].DROPDOWN) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["DDFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].CALENDER) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["CLFIELDTYPE"];
                    }
                    else if (item.field_type === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FIELDTYPE"].TEXTNUMERIC) {
                        item.field_type_value = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["TNFIELDTYPE"];
                    }
                });
            }
        });
    };
    TicketReportComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('DRAGULA_FACTS');
    };
    /**
     * On home page route
     */
    TicketReportComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_12__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Check If field value is date
     * @param value
     */
    TicketReportComponent.prototype.checkIsFieldValueIsDate = function (value, type) {
        if (type === void 0) { type = 0; }
        // console.log(value);
        if ((value === '' || value === null || value === '0000-00-00' || value === '0000-00-00 00:00:00' || value === '1899-11-30' || value === '1970-01-01' || (Number(value) > 0)) && !moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](value)) {
            if (Number(value) > 0) {
                // console.log('A - ' + value);
                return value;
            }
            else {
                return '';
            }
        }
        else {
            var dateFormat = moment__WEBPACK_IMPORTED_MODULE_11__["isDate"](value);
            // console.log(dateFormat);
            if (dateFormat) {
                var item = moment__WEBPACK_IMPORTED_MODULE_11__(new Date(value));
                var itemValue = item.format('DD-MM-YYYY');
                // console.log(itemValue);
                if (itemValue === '' || itemValue === null || itemValue === '0000-00-00' || itemValue === '0000-00-00 00:00:00' || itemValue === '30-11-1899' || itemValue === '01-01-1970') {
                    return '';
                }
                else {
                    return itemValue;
                }
            }
            else {
                if (type === 1) {
                    return value;
                }
                else {
                    return '';
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('outputInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TicketReportComponent.prototype, "outputField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TicketReportComponent.prototype, "tabName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TicketReportComponent.prototype, "tabID", void 0);
    TicketReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ticket-report',
            template: __webpack_require__(/*! ./ticket-report.component.html */ "./src/app/admin/report/ticket-report/ticket-report.component.html"),
            styles: [__webpack_require__(/*! ./ticket-report.component.scss */ "./src/app/admin/report/ticket-report/ticket-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_7__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], ng2_dragula__WEBPACK_IMPORTED_MODULE_9__["DragulaService"]])
    ], TicketReportComponent);
    return TicketReportComponent;
}());



/***/ }),

/***/ "./src/app/admin/report/worksheet-report/worksheet-report.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/report/worksheet-report/worksheet-report.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-client-report [tabName]=\"'Worksheet REPORT'\" [tabID]=\"tabID\"></app-client-report>\r\n"

/***/ }),

/***/ "./src/app/admin/report/worksheet-report/worksheet-report.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/report/worksheet-report/worksheet-report.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL3JlcG9ydC93b3Jrc2hlZXQtcmVwb3J0L3dvcmtzaGVldC1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/report/worksheet-report/worksheet-report.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/report/worksheet-report/worksheet-report.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WorksheetReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetReportComponent", function() { return WorksheetReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorksheetReportComponent = /** @class */ (function () {
    function WorksheetReportComponent() {
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_1__["ADMINTABACCESS"].REPORT_WORKSHEETREPORT;
    }
    WorksheetReportComponent.prototype.ngOnInit = function () {
    };
    WorksheetReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-worksheet-report',
            template: __webpack_require__(/*! ./worksheet-report.component.html */ "./src/app/admin/report/worksheet-report/worksheet-report.component.html"),
            styles: [__webpack_require__(/*! ./worksheet-report.component.scss */ "./src/app/admin/report/worksheet-report/worksheet-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorksheetReportComponent);
    return WorksheetReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=report-report-module.js.map