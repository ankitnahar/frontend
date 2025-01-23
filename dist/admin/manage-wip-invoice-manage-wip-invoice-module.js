(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-wip-invoice-manage-wip-invoice-module"],{

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/advance-invoices/advance-invoices.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/advance-invoices/advance-invoices.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Invoice log Dialog  -->\r\n<div class=\"large-modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">ADVANCE INVOICE\r\n      <mat-icon matTooltip=\"Please mension amount in WIP page to be adjusted as per below\">info</mat-icon>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onCloseDialog()\">close</i></a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <!-- Start Request Table -->\r\n    <div class=\"row\">\r\n    </div>\r\n    <div class=\"table-container dialog-table-container\" *ngIf=\"invoiceData.length\">\r\n      <div class=\"table-block\">\r\n        <table class=\"PT-0\">\r\n          <thead>\r\n          <tr>\r\n            <th width=\"10%\">Sr. No</th>\r\n            <th width=\"18%\">Invoice No.\r\n            </th>\r\n            <th width=\"18%\">Amount(Ex GST)\r\n            </th>\r\n            <th width=\"18%\">Created By\r\n            </th>\r\n            <th width=\"18%\">Created On\r\n            </th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let invoice of invoiceData; let i=index\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{invoice?.invoice_no}}</td>\r\n            <td>{{invoice?.net_amount}}</td>\r\n            <td>{{invoice?.created_by?.userfullname}}</td>\r\n            <td>{{invoice?.created_on}}</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"row MT-10\">\r\n      <div class=\"col-md-4 PL-0 totalAmount\">\r\n        <label>Total Amount:</label>\r\n        <span>{{advanceFeesInfo['Total'] || 0}}</span>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 totalAmount text-center\">\r\n        <label>Adjusted Amount:</label>\r\n        <span>{{advanceFeesInfo['Adjust'] || 0}}</span>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 totalAmount text-right\">\r\n        <label>Balance Amount:</label>\r\n        <span>{{advanceFeesInfo['Balance'] || 0}}</span>\r\n      </div>\r\n    </div>\r\n    <!-- End Request Table -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/advance-invoices/advance-invoices.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/advance-invoices/advance-invoices.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2ludm9pY2VzL2ludm9pY2UtZGFzaGJvYXJkL21hbmFnZS13aXAtaW52b2ljZS9hZHZhbmNlLWludm9pY2VzL2FkdmFuY2UtaW52b2ljZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/advance-invoices/advance-invoices.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/advance-invoices/advance-invoices.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: AdvanceInvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceInvoicesComponent", function() { return AdvanceInvoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
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



var AdvanceInvoicesComponent = /** @class */ (function () {
    // Angular Variables
    function AdvanceInvoicesComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.invoiceData = [];
        // Pagination variables
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].PAGINATION_ARRAY[1];
        this.advanceFeesInfo = [];
    }
    AdvanceInvoicesComponent.prototype.ngOnInit = function () {
        this.invoiceData = this.data['content'];
        this.advanceFeesInfo = this.data['otherInfo'];
    };
    AdvanceInvoicesComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
    };
    /**
     * activity dialog redirection
     */
    AdvanceInvoicesComponent.prototype.onCloseDialog = function () {
        this.dialogRef.close();
    };
    // Esc Event
    AdvanceInvoicesComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onCloseDialog();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AdvanceInvoicesComponent.prototype, "onKeydownHandler", null);
    AdvanceInvoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advance-invoices',
            template: __webpack_require__(/*! ./advance-invoices.component.html */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/advance-invoices/advance-invoices.component.html"),
            styles: [__webpack_require__(/*! ./advance-invoices.component.scss */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/advance-invoices/advance-invoices.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AdvanceInvoicesComponent);
    return AdvanceInvoicesComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice-view/manage-wip-invoice-view.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice-view/manage-wip-invoice-view.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-manage-wip-invoice [isView]=\"1\"></app-manage-wip-invoice>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice-view/manage-wip-invoice-view.component.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice-view/manage-wip-invoice-view.component.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2ludm9pY2VzL2ludm9pY2UtZGFzaGJvYXJkL21hbmFnZS13aXAtaW52b2ljZS9tYW5hZ2Utd2lwLWludm9pY2Utdmlldy9tYW5hZ2Utd2lwLWludm9pY2Utdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice-view/manage-wip-invoice-view.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice-view/manage-wip-invoice-view.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: ManageWipInvoiceViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageWipInvoiceViewComponent", function() { return ManageWipInvoiceViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageWipInvoiceViewComponent = /** @class */ (function () {
    function ManageWipInvoiceViewComponent() {
    }
    ManageWipInvoiceViewComponent.prototype.ngOnInit = function () {
    };
    ManageWipInvoiceViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-wip-invoice-view',
            template: __webpack_require__(/*! ./manage-wip-invoice-view.component.html */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice-view/manage-wip-invoice-view.component.html"),
            styles: [__webpack_require__(/*! ./manage-wip-invoice-view.component.scss */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice-view/manage-wip-invoice-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageWipInvoiceViewComponent);
    return ManageWipInvoiceViewComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin (Invoices) Dashboard html view -->\r\n<div class=\"admin-invoice-manage-wip-invoice-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>BILLING</span>\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a (click)=\"invoice()\"> INVOICE </a></span>\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>MANAGE WIP INVOICE | {{WIPInvoiceData['entityName']}} {{WIPInvoiceData['period']}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 PR-0\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('previousInvoices')\">Previous Invoices</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('billingInformation')\">Billing Information</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('pendingTickets')\">Pending Tickets</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('completedTickets')\">Completed Tickets</button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <div class=\"manage-wip-invoice-tab-container\" *ngIf=\"isView === 0\">\r\n\r\n    <mat-tab-group (selectedTabChange)=\"onSelectedIndexChange($event)\" [selectedIndex]=\"selectedIndex\"\r\n                   (selectedIndexChange)=\"onSelectedIndexTabChange($event)\">\r\n      <mat-tab *ngFor=\"let topDetail of WIPInvoiceData['topDetail']; let t = index\" label=\"{{topDetail['name']}}\" #tab\r\n               [disabled]=\"btnAdjWIP ? !tab.isActive : false\">\r\n        <div>\r\n          <!-- Start Accordian menu -->\r\n          <div *ngIf=\"WIPParentDataKey.length\">\r\n            <div *ngFor=\"let parentData of WIPParentDataKey; let i = index\" class=\"bk-general-services\">\r\n              <h2>{{WIPInvoiceData['BillingDetail']['masterName'][parentData]}}</h2>\r\n              <div class=\"col-md-12 PLR-10\" *ngFor=\"let childData of WIPChildDataKey[parentData]\">\r\n                <mat-accordion>\r\n                  <mat-expansion-panel [expanded]=\"false\">\r\n                    <mat-expansion-panel-header>\r\n                      <mat-panel-title>{{childData}}</mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n\r\n                    <div class=\"table-container table-no-striped\">\r\n                      <div class=\"table-block\">\r\n                        <table>\r\n                          <thead>\r\n                          <tr>\r\n                            <th width=\"25%\">Subactivity</th>\r\n                            <th width=\"15%\">Worksheet Period</th>\r\n                            <th width=\"10%\">Timesheet Date</th>\r\n                            <th width=\"10%\">Staff</th>\r\n                            <th width=\"5%\">Unit</th>\r\n                            <th width=\"5%\">Amount($)</th>\r\n                            <th width=\"15%\">Notes</th>\r\n                            <th width=\"10%\">Invoice Status</th>\r\n                            <th width=\"5%\">More</th>\r\n                          </tr>\r\n                          </thead>\r\n\r\n                          <tbody>\r\n                          <tr *ngFor=\"let row of WIPChildDataKey[parentData][childData]\">\r\n                            <td width=\"25%\">{{WIPParentData[parentData][childData][row]['subactivity_code']}} -\r\n                              {{WIPParentData[parentData][childData][row]['subactivity_name']}}\r\n                            </td>\r\n\r\n                            <td width=\"15%\">\r\n                              {{formatDate(WIPParentData[parentData][childData][row]['worksheet_start_date']) +' - ' +\r\n                              formatDate(WIPParentData[parentData][childData][row]['worksheet_end_date'])}}\r\n                            </td>\r\n\r\n                            <td width=\"10%\">{{formatDate(WIPParentData[parentData][childData][row]['date'])}}</td>\r\n                            <td width=\"10%\">{{WIPParentData[parentData][childData][row]['userfullname']}}</td>\r\n                            <td width=\"5%\">{{WIPParentData[parentData][childData][row]['units']}}</td>\r\n                            <td width=\"5%\">{{WIPParentData[parentData][childData][row]['amount']}}\r\n                            </td>\r\n                            <td width=\"15%\">{{WIPParentData[parentData][childData][row]['notes']}}</td>\r\n                            <td width=\"10%\">\r\n                              <mat-form-field>\r\n                                <mat-select [(ngModel)]=\"WIPParentData[parentData][childData][row]['billing_status']\"\r\n                                            (selectionChange)=\"onBillingStatusChange($event,parentData,childData,row,WIPParentDataKey)\">\r\n                                  <mat-option *ngFor=\"let status of billingStatus\" [value]=\"status?.key\">\r\n                                    {{status?.label}}\r\n                                  </mat-option>\r\n                                </mat-select>\r\n                              </mat-form-field>\r\n                            </td>\r\n                            <td width=\"5%\">\r\n                              <mat-icon class=\"wet-asphalt-color\" [matTooltip]=\"'More Details'\"\r\n                                        (click)=\"openMoreDetailsDialog(WIPParentData[parentData][childData][row])\">\r\n                                remove_red_eye\r\n                              </mat-icon>\r\n                            </td>\r\n                          </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                      <div class=\"row MT-10\">\r\n                        <div class=\"col-md-6 totalAmount PLR-0\">\r\n                          <label>Task Extra Amount:</label>\r\n                          <span>{{ WIPParentData[parentData][childData]['task_extra_amount']}}</span>\r\n                          <div *ngIf=\"WIPParentData[parentData][childData]['extra_activity'].length\">\r\n                            <div *ngFor=\"let otherData of WIPParentData[parentData][childData]['extra_activity']\">\r\n                              <label>Code :</label> <span>{{otherData['code']}}</span>\r\n                              <label>Total :</label> <span>{{otherData['totalValue']}}</span>\r\n                              <label>Fixed :</label> <span>{{otherData['fixed']}}</span>\r\n                              <label *ngIf=\"otherData['fixed'] > 0\">Extra :</label> <span\r\n                              *ngIf=\"otherData['fixed'] > 0\">{{otherData['extra']}}</span>\r\n                              <label *ngIf=\"otherData['fixed'] > 0\">Price :</label> <span\r\n                              *ngIf=\"otherData['fixed'] > 0\">{{otherData['price']}}</span>\r\n                              <label *ngIf=\"otherData['fixed'] > 0\">Minimum Price :</label> <span\r\n                              *ngIf=\"otherData['fixed'] > 0\">{{otherData['min']}}</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6 totalAmount PLR-10\">\r\n                          <div class=\"text-right\">\r\n                            <label>Total Units:</label>\r\n                            <span>{{WIPParentData[parentData][childData]['task_total_units']}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </mat-expansion-panel>\r\n                </mat-accordion>\r\n              </div>\r\n              <!-- Start Grid -->\r\n              <div class=\"col-md-12 MT-20 PLR-10\">\r\n                <div class=\"table-container\">\r\n                  <div class=\"table-block\">\r\n                    <table class=\"table\" *ngIf=\"WIPParentData\">\r\n                      <thead>\r\n                      <tr>\r\n                        <th>Timesheet Units(t)</th>\r\n                        <th>W/off Units(a)</th>\r\n                        <th>W/on Units(b)</th>\r\n                        <th>W/off(c)</th>\r\n                        <th>Carry forward Units(d)</th>\r\n                        <th>Charged Units y=(t+b)-(a+c+d)</th>\r\n                        <th>Rate per hour</th>\r\n                        <th>Extra Amount($)</th>\r\n                      </tr>\r\n                      </thead>\r\n\r\n                      <tbody>\r\n                      <tr>\r\n                        <td>{{WIPParentData[parentData]['timesheet_unit']}}</td>\r\n                        <td><input type=\"number\" min=\"0\"\r\n                                   (change)=\"changeTimesheetAmount($event,parentData,WIPInvoiceData['BillingDetail']['RPH'][parentData], 0)\"\r\n                                   [(ngModel)]=\"writeOffUnit[parentData]\"/></td>\r\n                        <td><input type=\"number\" min=\"0\"\r\n                                   (change)=\"changeTimesheetAmount($event,parentData,WIPInvoiceData['BillingDetail']['RPH'][parentData], 1)\"\r\n                                   [(ngModel)]=\"writeOnUnit[parentData]\"/></td>\r\n                        <td>{{WIPParentData[parentData]['write_Off']}}</td>\r\n                        <td>{{WIPParentData[parentData]['carry_forward_unit']}}</td>\r\n                        <td>{{WIPParentData[parentData]['charged_units']}}\r\n                        </td>\r\n                        <td>{{WIPInvoiceData['BillingDetail']['RPH'][parentData] | number : '1.2-2'}}</td>\r\n                        <td>{{WIPParentData[parentData]['extra_amount']}}</td>\r\n                      </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- End Grid -->\r\n            </div>\r\n          </div>\r\n          <!-- End Grid -->\r\n\r\n\r\n          <!-- Start Discount section -->\r\n          <div class=\"discount-section\" *ngIf=\"showDiscount > 0\">\r\n            <h2>Discount</h2>\r\n            <div class=\"col-md-12\">\r\n              <mat-radio-group [(ngModel)]=\"discountType\" [value]=\"discountType\">\r\n                <mat-radio-button [value]=\"1\" (change)=\"resetDiscountData($event)\"\r\n                                  [checked]=\"discountType === 1 ? true : false\">None\r\n                </mat-radio-button>\r\n                <mat-radio-button [value]=\"2\" (change)=\"resetDiscountData($event)\"\r\n                                  [checked]=\"discountType === 2 ? true : false\">Specific Amount\r\n                </mat-radio-button>\r\n                <input type=\"number\" min=\"0\" value=\"0\" *ngIf=\"+discountType === 2\" [(ngModel)]=\"discountAmount\"\r\n                       (change)=\"updateGrandTotalAfterDiscount($event)\" class=\"ML-5\"/>\r\n                <mat-radio-button [value]=\"3\" (change)=\"resetDiscountData($event)\"\r\n                                  [checked]=\"discountType === 3 ? true : false\">Advance Fees\r\n                </mat-radio-button>\r\n                <input type=\"number\" min=\"0\" value=\"0\" *ngIf=\"+discountType === 3\" [(ngModel)]=\"discountAmount\"\r\n                       (keyup)=\"checkForAdvanceFee($event.target.value)\"\r\n                       (change)=\"updateGrandTotalAfterDiscount($event)\" class=\"ML-5\"/>\r\n                <a class=\"advance-invoice-link\" (click)=\"onOpenAdvanceInvoice()\"\r\n                   *ngIf=\"discountType === 3 && advanceFeeData.length\">See\r\n                  Advance\r\n                  Invoices</a>\r\n              </mat-radio-group>\r\n            </div>\r\n          </div>\r\n          <!-- End Discount section -->\r\n\r\n          <!-- Start Grand total section -->\r\n          <div class=\"grand-total-section col-md-12 PL-0 MT-10\">\r\n            <h2>Grand Total</h2>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3 MT-10 PL-5 totalAmount\" *ngIf=\"showIsFixedFees > 0 && FixedFee.length\">\r\n                <label>Fixed Fee($)</label>\r\n              </div>\r\n\r\n              <div class=\"col-md-9 PLR-10 totalAmount\" *ngIf=\"showIsFixedFees > 0 && FixedFee.length\">\r\n                <span *ngFor=\"let ff of FixedFee; let f = index\">\r\n                  <label>{{ff['service_id']}}:</label>\r\n                  <span>{{ff['fixed_fee']}}</span>\r\n                </span>\r\n              </div>\r\n\r\n              <div class=\"col-md-6 MT-20 ng-star-inserted\" *ngIf=\"showGrandTotalWriteOffSection > 0\">\r\n                <div class=\"table-container\">\r\n                  <div class=\"table-block\">\r\n                    <table class=\"table\">\r\n                      <thead>\r\n                      <tr>\r\n                        <th>W/off amount</th>\r\n                        <th>W/on amount</th>\r\n                      </tr>\r\n                      </thead>\r\n\r\n                      <tbody>\r\n                      <tr>\r\n                        <td><input type=\"number\" min=\"0\" (change)=\"changeGrandWriteOffOnAmount($event,0)\"\r\n                                   [(ngModel)]=\"grandWriteOffAmount\"/></td>\r\n                        <td><input type=\"number\" min=\"0\" (change)=\"changeGrandWriteOffOnAmount($event,1)\"\r\n                                   [(ngModel)]=\"grandWriteOnAmount\"/></td>\r\n                      </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End Grand total section -->\r\n\r\n          <!-- Start Grid -->\r\n          <div class=\"col-md-12 MT-20 PLR-10 PB-10\" *ngIf=\"showGrandTotalTimeSheetSection > 0\">\r\n            <div class=\"table-container\">\r\n              <div class=\"table-block\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>Timesheet Units(T)</th>\r\n                    <th>Carry Forward Units(B)</th>\r\n                    <th>Fixed Units(D)</th>\r\n                    <th>Extra Units (E=Extra amount/RPH)</th>\r\n                    <th>W/off (Y=T-(B+D+E))</th>\r\n                    <th>W/on (Y=(B+D+E)- T)</th>\r\n                  </tr>\r\n                  </thead>\r\n\r\n                  <tbody>\r\n                  <tr>\r\n                    <td>{{totalAmountData['totalTimesheetUnit']}}</td>\r\n                    <td>{{totalAmountData['carryForwardUnit']}}</td>\r\n                    <td>{{totalAmountData['fixedUnit']}}</td>\r\n                    <td>{{totalAmountData['extraUnit']}}</td>\r\n                    <td>{{totalAmountData['wOffUnit']}}</td>\r\n                    <td>{{totalAmountData['wOnUnit']}}</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End Grid -->\r\n\r\n          <!-- Start Grid -->\r\n          <div class=\"col-md-12 MT-20 PLR-10 PB-10\"\r\n               *ngIf=\"(serviceId === 1 || serviceId === 2 || serviceId === 6) && (invoiceType !== 'Advance' && invoiceType !== 'Formation')\">\r\n            <div class=\"table-container\">\r\n              <div class=\"table-block\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>Fixed Fee($)</th>\r\n                    <th>Extra Amount($)</th>\r\n                    <th>Gross Amount($)</th>\r\n                    <th>Discount($)</th>\r\n                    <th>Net Amount($)</th>\r\n                    <th>Card Surcharge($)</th>\r\n                    <th>GST (10%)($)</th>\r\n                    <th>Amount to be paid($)</th>\r\n                  </tr>\r\n                  </thead>\r\n\r\n                  <tbody>\r\n                  <tr>\r\n                    <td>{{totalAmountData['fixedFee']}}</td>\r\n                    <td>{{totalAmountData['extraAmount']}}</td>\r\n                    <td>{{totalAmountData['grossAmount']}}</td>\r\n                    <td>{{discountAmount ? (discountAmount) : (totalAmountData['discount'])}}\r\n                    </td>\r\n                    <td>{{totalAmountData['netAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['SurchargeAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['gstAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['paidAmount']}}\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12 MT-20 PLR-10 PB-10\"\r\n               *ngIf=\"(serviceId === 4 || serviceId === 5 || serviceId === 7) && (invoiceType !== 'Advance')\">\r\n            <div class=\"table-container\">\r\n              <div class=\"table-block\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>Gross Amount($)</th>\r\n                    <th>Discount($)</th>\r\n                    <th>Net Amount($)</th>\r\n                    <th>Card Surcharge($)</th>\r\n                    <th>GST (10%)($)</th>\r\n                    <th>Amount to be paid($)</th>\r\n                  </tr>\r\n                  </thead>\r\n\r\n                  <tbody>\r\n                  <tr>\r\n                    <td>{{totalAmountData['grossAmount']}}</td>\r\n                    <td>{{discountAmount ? (discountAmount) : (totalAmountData['discount'])}}\r\n                    </td>\r\n                    <td>{{totalAmountData['netAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['SurchargeAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['gstAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['paidAmount']}}\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12 MT-20 PLR-10 PB-10\" *ngIf=\"invoiceType === 'Advance' || invoiceType === 'Formation'\">\r\n            <div class=\"table-container\">\r\n              <div class=\"table-block\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>Gross Amount($)</th>\r\n                    <th>Discount($)</th>\r\n                    <th>Net Amount($)</th>\r\n                    <th>Card Surcharge($)</th>\r\n                    <th>GST (10%)($)</th>\r\n                    <th>Amount to be paid($)</th>\r\n                  </tr>\r\n                  </thead>\r\n\r\n                  <tbody>\r\n                  <tr>\r\n                    <td>{{totalAmountData['grossAmount']}}</td>\r\n                    <td>{{discountAmount ? (discountAmount) : (totalAmountData['discount'])}}\r\n                    </td>\r\n                    <td>{{totalAmountData['netAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['SurchargeAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['gstAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['paidAmount']}}\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End Grid -->\r\n\r\n          <!-- Start Notes section -->\r\n          <div class=\"notes-section\">\r\n            <h2>Notes</h2>\r\n            <form [formGroup]=\"notesForm\" #addEditnotesForm=\"ngForm\"\r\n                  (submit)=\"submitInoiceNotes(notesForm.value, notesForm.valid)\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 PL-5 totalAmount\">\r\n                  <label>Billing information notes:</label>\r\n                  <span [innerHTML]=\"WIPInvoiceData['BillingNotes'] | safeHtml\" class=\"PL-5\"></span>\r\n                </div>\r\n\r\n                <div class=\"col-md-12 MT-10 PL-5 totalAmount\">\r\n                  <label>Invoice notes:</label>\r\n                </div>\r\n                <div class=\"col-md-8 MT-10\">\r\n                  <mat-form-field>\r\n                    <textarea matInput placeholder=\"Description\" formControlName=\"notes\" required></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-4 MT-20\">\r\n                  <button type=\"submit\" [disabled]=\"notesForm.invalid\" class=\"btn-primary\">Add Note</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- End Notes section -->\r\n\r\n          <!-- Start Grid -->\r\n          <div class=\"col-md-12 MT-20 PLR-10 PB-10\" *ngIf=\"WIPInvoiceData['InvoiceNotes'] !== ''\">\r\n            <div class=\"table-container\">\r\n              <div class=\"table-block\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>Sr. No.</th>\r\n                    <th width=\"60%\">Notes</th>\r\n                    <th>Added By</th>\r\n                    <th>Added On</th>\r\n                  </tr>\r\n                  </thead>\r\n\r\n                  <tbody>\r\n                  <tr *ngFor=\"let notes of WIPInvoiceData['InvoiceNotes']; let i = index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{notes['notes']}}</td>\r\n                    <td>{{notes['created_by']['userfullname']}}</td>\r\n                    <td>{{notes['created_on'] | date : 'dd-MM-yyyy HH:mm:ss'}}</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End Grid -->\r\n\r\n          <div class=\"notes-section\" *ngIf=\"showAdjWIP === 1\">\r\n            <h2>ADJUST WIP</h2>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 MT-10 PL-5 totalAmount\">\r\n                <label>Reason:</label>\r\n              </div>\r\n              <div class=\"col-md-8 MT-10\">\r\n                <mat-form-field>\r\n                  <textarea matInput placeholder=\"Adjust WIP Reason\" [(ngModel)]=\"AdjustWIPReason\"></textarea>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Start Action Buttons -->\r\n          <div class=\"col-md-12 MTB-10\">\r\n            <button type=\"button\" class=\"btn-dark-blue btn-bordered\" (click)=\"onSubmitWipInvoice(2)\" *ngIf=\"btnPreview\">\r\n              Preview Invoice\r\n            </button>\r\n            <button type=\"button\" class=\"btn-orange btn-bordered ML-10\" (click)=\"onOpenDismissDialog()\"\r\n                    *ngIf=\"btnDismiss\">Dismiss\r\n              Invoice\r\n            </button>\r\n            <button type=\"button\" class=\"btn-primary btn-bordered ML-10\" (click)=\"onToggleConfomrtaionDialogBacktoTAM()\"\r\n                    *ngIf=\"btnSendTAM\">Send Back To\r\n              TAM\r\n            </button>\r\n            <button type=\"button\" class=\"btn-primary btn-bordered ML-10\"\r\n                    (click)=\"onToggleConfomrtaionDialogBacktoBillingStage()\" *ngIf=\"btnSendBilling && tabData['add_edit']\">Send Back To\r\n              Billing Stage\r\n            </button>\r\n            <button class=\"btn-primary btn-bordered\" type=\"submit\" (click)=\"changeInvoiceIndexToPrevious();\"\r\n                    *ngIf=\"btnSave && btnAdjWIP && selectedIndex !== 0\">Previous\r\n            </button>\r\n            <button class=\"btn-primary btn-bordered ML-10 on-right\" type=\"button\" (click)=\"onSubmitWipInvoice(3)\"\r\n                    *ngIf=\"btnAdjWIP && ((topDetailsLength - 1)  === selectedIndex)\">Adjust WIP\r\n            </button>\r\n            <button class=\"btn-primary on-right\" type=\"submit\" (click)=\"onSubmitWipInvoice(1)\"\r\n                    *ngIf=\"btnSave && !btnAdjWIP\">Save & Update Later\r\n            </button>\r\n            <button class=\"btn-success on-right\" type=\"submit\" (click)=\"onSubmitWipInvoice(4)\"\r\n                    *ngIf=\"btnSave && btnAdjWIP && ((topDetailsLength - 1)  !== selectedIndex)\">Save & Next\r\n            </button>\r\n\r\n          </div>\r\n          <!-- End Action Buttons -->\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n\r\n  <div class=\"manage-wip-invoice-tab-container\" *ngIf=\"isView === 1\">\r\n\r\n    <mat-tab-group (selectedTabChange)=\"onSelectedIndexChange($event)\">\r\n      <mat-tab *ngFor=\"let topDetail of WIPInvoiceData['topDetail']; let t = index\" label=\"{{topDetail['name']}}\">\r\n        <div>\r\n          <!-- Start Accordian menu -->\r\n          <div *ngIf=\"WIPParentDataKey.length\">\r\n            <div *ngFor=\"let parentData of WIPParentDataKey; let i = index\" class=\"bk-general-services\">\r\n              <h2>{{WIPInvoiceData['BillingDetail']['masterName'][parentData]}}</h2>\r\n              <div class=\"col-md-12 PLR-10\" *ngFor=\"let childData of WIPChildDataKey[parentData]\">\r\n                <mat-accordion>\r\n                  <mat-expansion-panel [expanded]=\"false\">\r\n                    <mat-expansion-panel-header>\r\n                      <mat-panel-title>{{childData}}</mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n\r\n                    <div class=\"table-container table-no-striped\">\r\n                      <div class=\"table-block\">\r\n                        <table>\r\n                          <thead>\r\n                          <tr>\r\n                            <th width=\"25%\">Subactivity</th>\r\n                            <th width=\"15%\">Worksheet Period</th>\r\n                            <th width=\"10%\">Timesheet Date</th>\r\n                            <th width=\"10%\">Staff</th>\r\n                            <th width=\"5%\">Unit</th>\r\n                            <th width=\"5%\">Amount($)</th>\r\n                            <th width=\"15%\">Notes</th>\r\n                            <th width=\"10%\">Invoice Status</th>\r\n                            <th width=\"5%\">More</th>\r\n                          </tr>\r\n                          </thead>\r\n\r\n                          <tbody>\r\n                          <tr *ngFor=\"let row of WIPChildDataKey[parentData][childData]\">\r\n                            <td width=\"25%\">{{WIPParentData[parentData][childData][row]['subactivity_code']}} -\r\n                              {{WIPParentData[parentData][childData][row]['subactivity_name']}}\r\n                            </td>\r\n\r\n                            <td width=\"15%\">\r\n                              {{formatDate(WIPParentData[parentData][childData][row]['worksheet_start_date']) +' - ' +\r\n                              formatDate(WIPParentData[parentData][childData][row]['worksheet_end_date'])}}\r\n                            </td>\r\n\r\n                            <td width=\"10%\">{{formatDate(WIPParentData[parentData][childData][row]['date'])}}</td>\r\n                            <td width=\"10%\">{{WIPParentData[parentData][childData][row]['userfullname']}}</td>\r\n                            <td width=\"5%\">{{WIPParentData[parentData][childData][row]['units']}}</td>\r\n                            <td width=\"5%\">{{WIPParentData[parentData][childData][row]['amount']}}\r\n                            </td>\r\n                            <td width=\"15%\">{{WIPParentData[parentData][childData][row]['notes']}}</td>\r\n                            <td width=\"10%\">\r\n                              {{getBillingStatusName(WIPParentData[parentData][childData][row]['billing_status'])}}\r\n                            </td>\r\n                            <td width=\"5%\">\r\n                              <mat-icon class=\"primary-color\" [matTooltip]=\"'More Details'\"\r\n                                        (click)=\"openMoreDetailsDialog(WIPParentData[parentData][childData][row])\">\r\n                                remove_red_eye\r\n                              </mat-icon>\r\n                            </td>\r\n                          </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                      <div class=\"row MT-10\">\r\n                        <div class=\"col-md-6 totalAmount PLR-0\">\r\n                          <label>Task Extra Amount:</label>\r\n                          <span>{{ WIPParentData[parentData][childData]['task_extra_amount']}}</span>\r\n                          <div *ngIf=\"WIPParentData[parentData][childData]['extra_activity'].length\">\r\n                            <div *ngFor=\"let otherData of WIPParentData[parentData][childData]['extra_activity']\">\r\n                              <label>Code :</label> <span>{{otherData['code']}}</span>\r\n                              <label>Total :</label> <span>{{otherData['totalValue']}}</span>\r\n                              <label>Fixed :</label> <span>{{otherData['fixed']}}</span>\r\n                              <label *ngIf=\"otherData['fixed'] > 0\">Extra :</label> <span\r\n                              *ngIf=\"otherData['fixed'] > 0\">{{otherData['extra']}}</span>\r\n                              <label *ngIf=\"otherData['fixed'] > 0\">Price :</label> <span\r\n                              *ngIf=\"otherData['fixed'] > 0\">{{otherData['price']}}</span>\r\n                              <label *ngIf=\"otherData['fixed'] > 0\">Minimum Price :</label> <span\r\n                              *ngIf=\"otherData['fixed'] > 0\">{{otherData['min']}}</span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6 totalAmount PLR-10\">\r\n                          <div class=\"text-right\">\r\n                            <label>Total Units:</label>\r\n                            <span>{{WIPParentData[parentData][childData]['task_total_units']}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </mat-expansion-panel>\r\n                </mat-accordion>\r\n              </div>\r\n              <!-- Start Grid -->\r\n              <div class=\"col-md-12 MT-20 PLR-10\">\r\n                <div class=\"table-container\">\r\n                  <div class=\"table-block\">\r\n                    <table class=\"table\" *ngIf=\"WIPParentData\">\r\n                      <thead>\r\n                      <tr>\r\n                        <th>Timesheet Units(t)</th>\r\n                        <th>W/off Units(a)</th>\r\n                        <th>W/on Units(b)</th>\r\n                        <th>W/off(c)</th>\r\n                        <th>Carry forward Units(d)</th>\r\n                        <th>Charged Units y=(t+b)-(a+c+d)</th>\r\n                        <th>Rate per hour</th>\r\n                        <th>Extra Amount($)</th>\r\n                      </tr>\r\n                      </thead>\r\n\r\n                      <tbody>\r\n                      <tr>\r\n                        <td>{{WIPParentData[parentData]['timesheet_unit']}}</td>\r\n                        <td>{{writeOffUnit[parentData]}}</td>\r\n                        <td>{{writeOnUnit[parentData]}}</td>\r\n                        <td>{{WIPParentData[parentData]['write_Off']}}</td>\r\n                        <td>{{WIPParentData[parentData]['carry_forward_unit']}}</td>\r\n                        <td>{{WIPParentData[parentData]['charged_units']}}\r\n                        </td>\r\n                        <td>{{WIPInvoiceData['BillingDetail']['RPH'][parentData] | number : '1.2-2'}}</td>\r\n                        <td>{{WIPParentData[parentData]['extra_amount']}}</td>\r\n                      </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- End Grid -->\r\n            </div>\r\n          </div>\r\n          <!-- End Grid -->\r\n\r\n\r\n          <!-- Start Discount section -->\r\n          <div class=\"discount-section\" *ngIf=\"showDiscount > 0\">\r\n            <h2>Discount</h2>\r\n            <div class=\"col-md-12\">\r\n              <span *ngIf=\"discountType === 1\">None</span>\r\n              <span *ngIf=\"discountType === 2\">Specific Amount : </span><span *ngIf=\"discountType === 2\">{{discountAmount}}</span>\r\n              <span *ngIf=\"discountType === 3\">Advance Fees : </span><span\r\n              *ngIf=\"discountType === 3\">{{discountAmount}}</span>\r\n              <a class=\"advance-invoice-link\" (click)=\"onOpenAdvanceInvoice()\"\r\n                 *ngIf=\"discountType === 3 && advanceFeeData.length\">See Advance\r\n                Invoices</a>\r\n            </div>\r\n          </div>\r\n          <!-- End Discount section -->\r\n\r\n          <!-- Start Grand total section -->\r\n          <div class=\"grand-total-section col-md-12 PL-0 MT-10\" *ngIf=\"isDismissInvoice === 0\">\r\n            <h2>Grand Total</h2>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3 MT-10 PL-5 totalAmount\" *ngIf=\"showIsFixedFees > 0 && FixedFee.length\">\r\n                <label>Fixed Fee($)</label>\r\n              </div>\r\n\r\n              <div class=\"col-md-9 PLR-10 totalAmount\" *ngIf=\"showIsFixedFees > 0 && FixedFee.length\">\r\n                <span *ngFor=\"let ff of FixedFee; let f = index\">\r\n                  <label>{{ff['service_id']}}:</label>\r\n                  <span>{{ff['fixed_fee']}}</span>\r\n                </span>\r\n              </div>\r\n\r\n              <div class=\"col-md-6 MT-20 ng-star-inserted\" *ngIf=\"showGrandTotalWriteOffSection > 0\">\r\n                <div class=\"table-container\">\r\n                  <div class=\"table-block\">\r\n                    <table class=\"table\">\r\n                      <thead>\r\n                      <tr>\r\n                        <th>W/off amount</th>\r\n                        <th>W/on amount</th>\r\n                      </tr>\r\n                      </thead>\r\n\r\n                      <tbody>\r\n                      <tr>\r\n                        <td>{{grandWriteOffAmount}}</td>\r\n                        <td>{{grandWriteOnAmount}}</td>\r\n                      </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End Grand total section -->\r\n\r\n          <!-- Start Grid -->\r\n          <div class=\"col-md-12 MT-20 PLR-10 PB-10\" *ngIf=\"showGrandTotalTimeSheetSection > 0\">\r\n            <div class=\"table-container\">\r\n              <div class=\"table-block\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>Timesheet Units(T)</th>\r\n                    <th>Carry Forward Units(B)</th>\r\n                    <th>Fixed Units(D)</th>\r\n                    <th>Extra Units (E=Extra amount/RPH)</th>\r\n                    <th>W/off (Y=T-(B+D+E))</th>\r\n                    <th>W/on (Y=(B+D+E)- T)</th>\r\n                  </tr>\r\n                  </thead>\r\n\r\n                  <tbody>\r\n                  <tr>\r\n                    <td>{{totalAmountData['totalTimesheetUnit']}}</td>\r\n                    <td>{{totalAmountData['carryForwardUnit']}}</td>\r\n                    <td>{{totalAmountData['fixedUnit']}}</td>\r\n                    <td>{{totalAmountData['extraUnit']}}</td>\r\n                    <td>{{totalAmountData['wOffUnit']}}</td>\r\n                    <td>{{totalAmountData['wOnUnit']}}</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End Grid -->\r\n\r\n          <!-- Start Grid -->\r\n          <div class=\"col-md-12 MT-20 PLR-10 PB-10\"\r\n               *ngIf=\"(serviceId === 1 || serviceId === 2 || serviceId === 6) && (invoiceType !== 'Advance') && (isDismissInvoice === 0)\">\r\n            <div class=\"table-container\">\r\n              <div class=\"table-block\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>Fixed Fee($)</th>\r\n                    <th>Extra Amount($)</th>\r\n                    <th>Gross Amount($)</th>\r\n                    <th>Discount($)</th>\r\n                    <th>Net Amount($)</th>\r\n                    <th>Card Surcharge($)</th>\r\n                    <th>GST (10%)($)</th>\r\n                    <th>Amount to be paid($)</th>\r\n                  </tr>\r\n                  </thead>\r\n\r\n                  <tbody>\r\n                  <tr>\r\n                    <td>{{totalAmountData['fixedFee']}}</td>\r\n                    <td>{{totalAmountData['extraAmount']}}</td>\r\n                    <td>{{totalAmountData['grossAmount']}}</td>\r\n                    <td>{{discountAmount ? (discountAmount) : (totalAmountData['discount'])}}\r\n                    </td>\r\n                    <td>{{totalAmountData['netAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['SurchargeAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['gstAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['paidAmount']}}\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12 MT-20 PLR-10 PB-10\"\r\n               *ngIf=\"(serviceId === 4 || serviceId === 5 || serviceId === 7) && (invoiceType !== 'Advance') && (isDismissInvoice === 0)\">\r\n            <div class=\"table-container\">\r\n              <div class=\"table-block\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>Gross Amount($)</th>\r\n                    <th>Discount($)</th>\r\n                    <th>Net Amount($)</th>\r\n                    <th>Card Surcharge($)</th>\r\n                    <th>GST (10%)($)</th>\r\n                    <th>Amount to be paid($)</th>\r\n                  </tr>\r\n                  </thead>\r\n\r\n                  <tbody>\r\n                  <tr>\r\n                    <td>{{totalAmountData['grossAmount']}}</td>\r\n                    <td>{{discountAmount ? (discountAmount) : (totalAmountData['discount'])}}\r\n                    </td>\r\n                    <td>{{totalAmountData['netAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['SurchargeAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['gstAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['paidAmount']}}\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12 MT-20 PLR-10 PB-10\" *ngIf=\"(invoiceType === 'Advance') && (isDismissInvoice === 0)\">\r\n            <div class=\"table-container\">\r\n              <div class=\"table-block\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>Gross Amount($)</th>\r\n                    <th>Discount($)</th>\r\n                    <th>Net Amount($)</th>\r\n                    <th>Card Surcharge($)</th>\r\n                    <th>GST (10%)($)</th>\r\n                    <th>Amount to be paid($)</th>\r\n                  </tr>\r\n                  </thead>\r\n\r\n                  <tbody>\r\n                  <tr>\r\n                    <td>{{totalAmountData['grossAmount']}}</td>\r\n                    <td>{{discountAmount ? (discountAmount) : (totalAmountData['discount'])}}\r\n                    </td>\r\n                    <td>{{totalAmountData['netAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['SurchargeAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['gstAmount']}}\r\n                    </td>\r\n                    <td>{{totalAmountData['paidAmount']}}\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End Grid -->\r\n\r\n          <!-- Start Notes section -->\r\n          <div class=\"notes-section\">\r\n            <h2>Notes</h2>\r\n            <form [formGroup]=\"notesForm\" (submit)=\"submitInoiceNotes(notesForm.value, notesForm.valid)\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 PL-5 totalAmount\">\r\n                  <label>Billing information notes:</label>\r\n                  <span [innerHTML]=\"WIPInvoiceData['BillingNotes']| safeHtml\" class=\"PL-5\"></span>\r\n                </div>\r\n\r\n                <div class=\"col-md-12 MT-10 PL-5 totalAmount\">\r\n                  <label>Invoice notes:</label>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <!-- End Notes section -->\r\n\r\n          <!-- Start Grid -->\r\n          <div class=\"col-md-12 MT-20 PLR-10 PB-10\" *ngIf=\"WIPInvoiceData['InvoiceNotes'] !== ''\">\r\n            <div class=\"table-container\">\r\n              <div class=\"table-block\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>Sr. No.</th>\r\n                    <th width=\"60%\">Notes</th>\r\n                    <th>Added By</th>\r\n                    <th>Added On</th>\r\n                  </tr>\r\n                  </thead>\r\n\r\n                  <tbody>\r\n                  <tr *ngFor=\"let notes of WIPInvoiceData['InvoiceNotes']; let i = index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{notes['notes']}}</td>\r\n                    <td>{{notes['created_by']['userfullname']}}</td>\r\n                    <td>{{notes['created_on'] | date : 'dd-MM-yyyy HH:mm:ss'}}</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"notes-section\" *ngIf=\"showAdjWIP === 1\">\r\n            <h2>ADJUST WIP</h2>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 MT-10 PL-5 totalAmount\">\r\n                <label>Reason:</label>\r\n              </div>\r\n              <div class=\"col-md-8 MT-10\">\r\n                {{AdjustWIPReason}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"notes-section\" *ngIf=\"invoiceStatusData.status_id === DIM\">\r\n            <h2>Dismiss Reason</h2>\r\n            <div class=\"col-md-12 MT-20 PLR-0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 totalAmount PL-5\">\r\n                  <label>Reason:</label>\r\n                  <span [innerHTML]=\"dimissReason| safeHtml\"></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End Grid -->\r\n\r\n          <!-- Start Action Buttons -->\r\n          <div class=\"col-md-12 MTB-10\">\r\n            <button type=\"button\" class=\"btn-dark-blue btn-bordered\" (click)=\"onPreviewInvoice()\">Preview Invoice\r\n            </button>\r\n            <button type=\"button\" class=\"btn-orange btn-bordered ML-10\"\r\n                    (click)=\"onToggleConfomrtaionDialogBacktoBillingStage()\" *ngIf=\"btnSendBilling  && tabData['add_edit']\">Send Back To\r\n              Billing Stage\r\n            </button>\r\n          </div>\r\n          <!-- End Action Buttons -->\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2ludm9pY2VzL2ludm9pY2UtZGFzaGJvYXJkL21hbmFnZS13aXAtaW52b2ljZS9tYW5hZ2Utd2lwLWludm9pY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ManageWipInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageWipInvoiceComponent", function() { return ManageWipInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dismiss_dialog_dismiss_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dismiss-dialog/dismiss-dialog.component */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/dismiss-dialog/dismiss-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _advance_invoices_advance_invoices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advance-invoices/advance-invoices.component */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/advance-invoices/advance-invoices.component.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/pipe/noComma.pipe */ "./src/utility/pipe/noComma.pipe.ts");
/* harmony import */ var _more_details_dialog_more_details_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./more-details-dialog/more-details-dialog.component */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/more-details-dialog/more-details-dialog.component.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var ManageWipInvoiceComponent = /** @class */ (function () {
    function ManageWipInvoiceComponent(_router, dialog, _fb, _sharedService, _commonCrudService, _decimalPipe, _noCommaPipe) {
        this._router = _router;
        this.dialog = dialog;
        this._fb = _fb;
        this._sharedService = _sharedService;
        this._commonCrudService = _commonCrudService;
        this._decimalPipe = _decimalPipe;
        this._noCommaPipe = _noCommaPipe;
        this.billingStatus = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["WIPInvoiceBillingStatus"].slice(1, -1);
        this.unit_ratio = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].UNIT_RATIO;
        this.default_rph = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].DEFAULT_RPH;
        this.gst_percentage = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].GST_PERCENTAGE;
        this.percentage_ratio = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["BASE"].PERCENTAGE_RATIO;
        this.invoiceStatusData = null;
        this.advanceFeeData = {};
        this.advanceFeesInfo = {};
        this.WIPInvoiceData = {};
        this.WIPParentData = {};
        this.WIPMasterUnitData = {};
        this.WIPCalculationData = {};
        this.WIPParentDataKey = [];
        this.WIPChildDataKey = {};
        this.discountAmount = 0;
        this.showDiscount = 0;
        this.showGrandTotalWriteOffSection = 0;
        this.showGrandTotalTimeSheetSection = 0;
        this.showIsFixedFees = 0;
        this.serviceId = 0;
        this.entityId = 0;
        this.discountType = 1;
        this.discountTypeData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["DiscountType"];
        this.grandWriteOffAmount = 0;
        this.grandWriteOnAmount = 0;
        this.data = [];
        this.selectedIndex = 0;
        this.FixedFee = [];
        this.writeOffUnit = [];
        this.writeOnUnit = [];
        this.totalAmountData = {};
        this.DIM = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].DIM;
        this.dimissReason = '';
        this.btnPreview = false;
        this.btnDismiss = false;
        this.btnSendTAM = false;
        this.btnSendBilling = false;
        this.btnSave = false;
        this.btnAdjWIP = false;
        this.showAdjWIP = 0;
        this.isValidAllDetails = false;
        this.AdjustWIPReason = '';
        this.invoiceType = '';
        this.isDismissInvoice = 0;
        this.ALL = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].ALL;
        this.isAdjusted = 0;
        this.topDetailsLength = 0;
    }
    ManageWipInvoiceComponent.prototype.ngOnInit = function () {
        this.invoiceStatusData = this._sharedService.getInvoiceData();
        this.isView = (this.isView) ? this.isView : 0;
        this.hideShowButton(this.invoiceStatusData.status_id, this.isView);
        this.getInvoiceStatusList();
        this.initializeMethod();
    };
    ManageWipInvoiceComponent.prototype.initializeMethod = function () {
        this.getWIPInvoiceList();
        this.getAdvanceFees();
        this.createNoteForm();
        this.createInvoiceForm();
    };
    ManageWipInvoiceComponent.prototype.getInvoiceStatusList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].INVOICE_STATUS_LIST, {}, {}).subscribe(function (Response) {
            var statusData = Response.payload.data;
            var getTabData = statusData.filter(function (item) { return item.id === _this.invoiceStatusData.status_id; });
            if (getTabData.length) {
                _this.tabData = _this._sharedService.checkUserPrivilegesTabs(getTabData[0]['tab_id']);
            }
            // console.log(this.tabData);
        });
    };
    /**
     * Hide / Show Button based on status and view
     * @param status_id
     * @param is_view
     */
    ManageWipInvoiceComponent.prototype.hideShowButton = function (status_id, is_view) {
        // console.log(status_id, is_view);
        // For Status
        if (((+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].ARW) || (+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].ATH) || (+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].AMR) && is_view === 0)) {
            this.btnPreview = true;
            this.btnDismiss = true;
            this.btnSave = true;
        }
        if (+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].ABA && is_view === 1) {
            this.btnPreview = true;
            this.btnDismiss = false;
            this.btnSave = false;
            this.btnSendTAM = false;
        }
        if (+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].ABA && is_view === 0) {
            this.btnPreview = true;
            this.btnDismiss = true;
            this.btnSave = true;
            this.btnSendTAM = true;
        }
        if (+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].PAD && is_view === 0) {
            this.btnPreview = true;
        }
        if (+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].ADJ && is_view === 0) {
            this.btnAdjWIP = true;
            this.btnSave = true;
            this.btnPreview = false;
            this.isAdjusted = 1;
        }
        if (((+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].RTE) || (+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].APM) || (+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].STC) && (is_view === 0 || is_view === 1))) {
            this.btnPreview = true;
            this.btnSendBilling = true;
        }
        if (+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].ADJ && this.invoiceStatusData.adjusted === 0) {
            this.btnPreview = false;
            this.showAdjWIP = 1;
            this.btnAdjWIP = true;
            this.isAdjusted = 1;
        }
        if (+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].ADJ && this.invoiceStatusData.adjusted === 1) {
            this.btnPreview = false;
            this.showAdjWIP = 1;
            this.btnAdjWIP = false;
            this.isAdjusted = 1;
        }
    };
    /**
     * Create Notes Form
     */
    ManageWipInvoiceComponent.prototype.createNoteForm = function () {
        this.notesForm = this._fb.group({
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
        });
    };
    /**
     * Create Invoice Form
     */
    ManageWipInvoiceComponent.prototype.createInvoiceForm = function () {
        this.invoiceForm = this._fb.group({
            grandWriteOffAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            grandWriteOnAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    /**
     * Get Advance fee data
     */
    ManageWipInvoiceComponent.prototype.getAdvanceFees = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].INVOICE_ADVANCE_FEE_DETAIL, this.invoiceStatusData.entity_id).subscribe(function (Response) {
            _this.advanceFeesInfo = (Response.payload[0]) ? Response.payload[0] : [];
            _this.advanceFeeData = Response.payload.data;
        });
    };
    /**
     * Get Data for WIP invoice list
     */
    ManageWipInvoiceComponent.prototype.getWIPInvoiceList = function () {
        var _this = this;
        this.WIPParentDataKey = [];
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].INVOICE_WIP_LIST, this.invoiceStatusData.id).subscribe(function (Response) {
            /**
             * assign data to main invoice data. then use that json to get the detail
             * of timeshit unit parent data and child data. and do calculation field wise.
             */
            _this.WIPInvoiceData = Response.payload.data;
            _this.serviceId = (_this.WIPInvoiceData['invoice']['invoice']['service_id']) ? _this.WIPInvoiceData['invoice']['invoice']['service_id'] : 0;
            _this.entityId = (_this.WIPInvoiceData['invoice']['invoice']['entity_id']) ? _this.WIPInvoiceData['invoice']['invoice']['entity_id'] : 0;
            _this.WIPParentData = (_this.WIPInvoiceData['invoice']['timesheetDetail']) ? _this.WIPInvoiceData['invoice']['timesheetDetail']['timesheet'] : {};
            _this.WIPMasterUnitData = (_this.WIPInvoiceData['invoice']['timesheetDetail']) ? _this.WIPInvoiceData['invoice']['timesheetDetail']['masterUnit'] : {};
            _this.WIPCalculationData = (_this.WIPInvoiceData['invoice']['timesheetDetail']) ? _this.WIPInvoiceData['invoice']['timesheetDetail']['totalCalculation'] : {};
            _this.FixedFee = (_this.WIPInvoiceData['BillingDetail']['Fiexd fee']) ? _this.WIPInvoiceData['BillingDetail']['Fiexd fee'] : [];
            _this.WIPInvoiceData['InvoiceNotes'] = (_this.WIPInvoiceData['InvoiceNotes'].length) ? _this.WIPInvoiceData['InvoiceNotes'] : '';
            _this.dimissReason = (_this.WIPInvoiceData['invoice']['invoice']) ? _this.WIPInvoiceData['invoice']['invoice']['dismiss_reason'] : '';
            _this.invoiceType = (_this.WIPInvoiceData['invoice']['invoice']) ? _this.WIPInvoiceData['invoice']['invoice']['invoice_type'] : '';
            if (_this.WIPInvoiceData['invoice']['invoice']['discount_type'] !== '') {
                _this.discountType = _this.getDiscountType('label', _this.WIPInvoiceData['invoice']['invoice']['discount_type'], 'key');
                // console.log(this.discountType);
                _this.discountAmount = (_this.WIPInvoiceData['invoice']['invoice']['discount_amount']) ? _this._noCommaPipe.transform(_this._decimalPipe.transform(_this.WIPInvoiceData['invoice']['invoice']['discount_amount'], '1.2-2')) : 0;
            }
            _this.grandWriteOnAmount = (_this.WIPInvoiceData['invoice']['invoice']['won_amount']) ? Number(_this.WIPInvoiceData['invoice']['invoice']['won_amount']) : 0;
            _this.grandWriteOffAmount = (_this.WIPInvoiceData['invoice']['invoice']['woff_amount']) ? Number(_this.WIPInvoiceData['invoice']['invoice']['woff_amount']) : 0;
            //if (this.invoiceStatusData.adjusted === 1 && this.isView === 1 && this.invoiceStatusData.status_id === INVOICESTAGEUPDATE.ADJ) {
            if (_this.invoiceStatusData.status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].ADJ) {
                _this.showAdjWIP = 1;
                _this.AdjustWIPReason = _this.WIPInvoiceData['invoice']['invoice']['dismiss_reason'];
            }
            /**
             * for each key of timesheet data make a calculation of units and writeoff and carryforward units
             */
            if (_this.WIPInvoiceData) {
                // console.log(this.WIPInvoiceData);
                var TU = 0;
                var CFU = 0;
                var FU = (_this.WIPInvoiceData['invoice']['invoice']['fixed_unit']) ? _this.WIPInvoiceData['invoice']['invoice']['fixed_unit'] : 0;
                var EU = 0;
                var Woff = 0;
                var Won = 0;
                var FF = (_this.WIPInvoiceData['invoice']['invoice']['ff_amount']) ? Number(_this.WIPInvoiceData['invoice']['invoice']['ff_amount']) : 0;
                var EA = 0;
                var GA = 0;
                var Discount = (_this.WIPInvoiceData['invoice']['invoice']['discount_amount']) ? _this.WIPInvoiceData['invoice']['invoice']['discount_amount'] : 0;
                var NA = 0;
                var CSP = (_this.WIPInvoiceData['invoice']['invoice']['card_surcharge']) ? _this.WIPInvoiceData['invoice']['invoice']['card_surcharge'] : 0;
                var CSA = 0;
                var GST = 0;
                var AP = 0;
                if (_utility_common_functions__WEBPACK_IMPORTED_MODULE_14__["CommonFunctions"].isEmpty(_this.WIPParentData)) {
                    // console.log(this.WIPParentData);
                    TU = (_this.WIPInvoiceData['invoice']['invoice']['timesheet_unit']) ? _this.WIPInvoiceData['invoice']['invoice']['timesheet_unit'] : 0;
                    CFU = (_this.WIPInvoiceData['invoice']['invoice']['carry_unit']) ? _this.WIPInvoiceData['invoice']['invoice']['carry_unit'] : 0;
                    FU = (_this.WIPInvoiceData['invoice']['invoice']['fixed_unit']) ? _this.WIPInvoiceData['invoice']['invoice']['fixed_unit'] : 0;
                    EU = (_this.WIPInvoiceData['invoice']['invoice']['extra_unit']) ? _this.WIPInvoiceData['invoice']['invoice']['extra_unit'] : 0;
                    Woff = (_this.WIPInvoiceData['invoice']['invoice']['woff_amount']) ? _this.WIPInvoiceData['invoice']['invoice']['woff_amount'] : 0;
                    Won = (_this.WIPInvoiceData['invoice']['invoice']['won_amount']) ? _this.WIPInvoiceData['invoice']['invoice']['won_amount'] : 0;
                    FF = (_this.WIPInvoiceData['invoice']['invoice']['ff_amount']) ? _this.WIPInvoiceData['invoice']['invoice']['ff_amount'] : 0;
                    // if (+this.serviceId === SERVICEDATA.SMSF || +this.serviceId === SERVICEDATA.HOST) {
                    //   EA = (this.WIPInvoiceData['invoice']['invoice']['extra_amount']) ? this.WIPInvoiceData['invoice']['invoice']['gross_amount'] : 0;
                    // } else {
                    //   EA = (this.WIPInvoiceData['invoice']['invoice']['extra_amount']) ? this.WIPInvoiceData['invoice']['invoice']['extra_amount'] : 0;
                    // }
                    EA = 0;
                    GA = (_this.WIPInvoiceData['invoice']['invoice']['gross_amount']) ? _this.WIPInvoiceData['invoice']['invoice']['gross_amount'] : 0;
                    Discount = (_this.WIPInvoiceData['invoice']['invoice']['discount_amount']) ? _this.WIPInvoiceData['invoice']['invoice']['discount_amount'] : 0;
                    NA = (_this.WIPInvoiceData['invoice']['invoice']['net_amount']) ? _this.WIPInvoiceData['invoice']['invoice']['net_amount'] : 0;
                    CSP = (_this.WIPInvoiceData['invoice']['invoice']['card_surcharge']) ? _this.WIPInvoiceData['invoice']['invoice']['card_surcharge'] : 0;
                    CSA = (_this.WIPInvoiceData['invoice']['invoice']['surcharge_amount']) ? _this.WIPInvoiceData['invoice']['invoice']['surcharge_amount'] : 0;
                    GST = (_this.WIPInvoiceData['invoice']['invoice']['gst_amount']) ? _this.WIPInvoiceData['invoice']['invoice']['gst_amount'] : 0;
                    AP = (_this.WIPInvoiceData['invoice']['invoice']['paid_amount']) ? _this.WIPInvoiceData['invoice']['invoice']['paid_amount'] : 0;
                    // console.log(EA, NA, GA, Discount);
                    // console.log('7',EA);
                }
                if (_this.WIPParentData) {
                    // console.log('9',EA);
                    for (var key in _this.WIPParentData) {
                        _this.writeOffUnit[key] = _this.WIPMasterUnitData[key] ? _this.WIPMasterUnitData[key]['woffunit'] : 0;
                        _this.writeOnUnit[key] = _this.WIPMasterUnitData[key] ? _this.WIPMasterUnitData[key]['wonunit'] : 0;
                        var $ = 0;
                        var t = 0;
                        var c = 0;
                        var d = 0;
                        var taskInnerExtraAmount = 0;
                        _this.WIPParentDataKey.push(key);
                        _this.WIPChildDataKey[key] = [];
                        /**
                         * for each key of invoice data ['key'] make a field wise calculation and make total of carry forward
                         * and other fields.
                         */
                        for (var childKey in _this.WIPParentData[key]) {
                            _this.WIPChildDataKey[key].push(childKey);
                            _this.WIPChildDataKey[key][childKey] = [];
                            var task_extra_amount = 0;
                            var task_total_units = 0;
                            for (var childGridKey in _this.WIPParentData[key][childKey]) {
                                _this.WIPChildDataKey[key][childKey].push(childGridKey);
                                if (_this.WIPParentData[key][childKey][childGridKey]['billing_status'] === 0) {
                                    _this.WIPParentData[key][childKey][childGridKey]['billing_status'] = 1;
                                }
                                $ += _this.WIPParentData[key][childKey][childGridKey]['amount'];
                                t += _this.WIPParentData[key][childKey][childGridKey]['units'];
                                task_extra_amount += +(_this.WIPParentData[key][childKey][childGridKey]['amount']);
                                task_total_units += +(_this.WIPParentData[key][childKey][childGridKey]['units']);
                                if (_this.WIPParentData[key][childKey][childGridKey]['billing_status'] === 2) {
                                    d += _this.WIPParentData[key][childKey][childGridKey]['units'];
                                    task_extra_amount -= +(_this.WIPParentData[key][childKey][childGridKey]['amount']);
                                    task_total_units -= +(_this.WIPParentData[key][childKey][childGridKey]['units']);
                                }
                                else if (_this.WIPParentData[key][childKey][childGridKey]['billing_status'] === 3) {
                                    c += _this.WIPParentData[key][childKey][childGridKey]['units'];
                                    task_extra_amount -= +(_this.WIPParentData[key][childKey][childGridKey]['amount']);
                                    task_total_units -= +(_this.WIPParentData[key][childKey][childGridKey]['units']);
                                }
                            }
                            _this.WIPParentData[key][childKey]['task_extra_amount'] = _this._noCommaPipe.transform(_this._decimalPipe.transform(task_extra_amount, '1.2-2'));
                            _this.WIPParentData[key][childKey]['task_total_units'] = task_total_units;
                            _this.WIPParentData[key][childKey]['extra_activity'] = (_this.WIPInvoiceData['invoice']['timesheetDetail']['subActivity'][key]) ? (_this.WIPInvoiceData['invoice']['timesheetDetail']['subActivity'][key][childKey]) ? _this.WIPInvoiceData['invoice']['timesheetDetail']['subActivity'][key][childKey] : [] : [];
                            taskInnerExtraAmount += Number(_this.WIPParentData[key][childKey]['task_extra_amount']);
                        }
                        var totalTimesheetAmount = 0;
                        var y = 0;
                        t = (t > 0) ? t : 0;
                        y = (t + _this.writeOnUnit[key]) - (_this.writeOffUnit[key] + c + d);
                        if (_this.writeOnUnit[key] > 0 || _this.writeOffUnit[key] > 0) {
                            var rph = (_this.WIPInvoiceData['BillingDetail']) ? _this.WIPInvoiceData['BillingDetail']['RPH'][key] : _this.default_rph;
                            totalTimesheetAmount = (y > 0) ? y * rph / _this.unit_ratio : 0;
                        }
                        else {
                            totalTimesheetAmount = Number(taskInnerExtraAmount);
                        }
                        _this.WIPParentData[key]['timesheet_unit'] = t;
                        _this.WIPParentData[key]['write_Off'] = c;
                        _this.WIPParentData[key]['carry_forward_unit'] = d;
                        _this.WIPParentData[key]['charged_units'] = (y > 0) ? y : 0;
                        _this.WIPParentData[key]['extra_amount'] = totalTimesheetAmount.toFixed(2);
                        TU += t;
                        CFU += d;
                        EA += Number(totalTimesheetAmount.toFixed(2));
                    }
                }
                var default_rph = (_this.WIPInvoiceData['BillingDetail']['RPH']) ? _this.WIPInvoiceData['BillingDetail']['RPH']['default'] : _this.default_rph;
                // console.log(1,EA);
                // console.log(2,this.grandWriteOnAmount);
                // console.log(3,this.grandWriteOffAmount);
                // EA = Number(((EA + this.grandWriteOnAmount) - this.grandWriteOffAmount).toFixed(2));
                var TEA = (EA + _this.grandWriteOnAmount);
                var NGA = 0;
                if (TEA > _this.grandWriteOffAmount) {
                    EA = Number(((EA + _this.grandWriteOnAmount) - _this.grandWriteOffAmount).toFixed(2));
                }
                else {
                    NGA = TEA;
                    EA = 0;
                }
                EU = EA * _this.unit_ratio / default_rph;
                if (EU <= 0 || isNaN(EU)) {
                    EU = 0;
                }
                Woff = TU - (CFU + FU + EU);
                Won = (CFU + FU + EU) - TU;
                if (EA <= 0 && FF <= 0) {
                    EA = 0;
                    FF = 0;
                    GA = GA;
                }
                else if (EA <= 0 && NGA === 0) {
                    EA = 0;
                    GA = Number(((Number(FF) + _this.grandWriteOnAmount) - _this.grandWriteOffAmount).toFixed(2));
                }
                else if (EA <= 0 && NGA > 0) {
                    GA = Number(((Number(FF) + Number(TEA)) - _this.grandWriteOffAmount).toFixed(2));
                }
                else {
                    GA = Number(EA) + Number(FF);
                }
                // console.log(GA, Discount);
                NA = Number((GA - Discount).toFixed(2));
                if (NA <= 0) {
                    NA = 0;
                }
                CSA = Number(((NA * CSP) / _this.percentage_ratio).toFixed(2));
                if (CSA <= 0) {
                    CSA = 0;
                }
                GST = Number((((NA + CSA) * _this.gst_percentage) / _this.percentage_ratio).toFixed(2));
                if (GST <= 0) {
                    GST = 0;
                }
                AP = Number((NA + CSA + GST).toFixed(2));
                if (AP <= 0) {
                    AP = 0;
                }
                _this.totalAmountData['discount_type'] = _this.getDiscountType('key', _this.discountType, 'label');
                _this.totalAmountData['totalTimesheetUnit'] = TU;
                _this.totalAmountData['carryForwardUnit'] = CFU;
                _this.totalAmountData['fixedUnit'] = FU;
                _this.totalAmountData['extraUnit'] = Math.ceil(EU);
                _this.totalAmountData['wOffUnit'] = (Woff > 0) ? Math.floor(Woff) : 0;
                _this.totalAmountData['wOnUnit'] = (Won > 0) ? Math.ceil(Won) : 0;
                _this.totalAmountData['fixedFee'] = FF;
                _this.totalAmountData['extraAmount'] = _this._noCommaPipe.transform(_this._decimalPipe.transform(EA, '1.2-2'));
                _this.totalAmountData['grossAmount'] = _this._noCommaPipe.transform(_this._decimalPipe.transform(GA, '1.2-2'));
                _this.totalAmountData['discount'] = Discount;
                _this.totalAmountData['netAmount'] = _this._noCommaPipe.transform(_this._decimalPipe.transform(NA, '1.2-2'));
                _this.totalAmountData['card_surcharge'] = CSP;
                _this.totalAmountData['SurchargeAmount'] = _this._noCommaPipe.transform(_this._decimalPipe.transform(CSA, '1.2-2'));
                _this.totalAmountData['gstAmount'] = _this._noCommaPipe.transform(_this._decimalPipe.transform(GST, '1.2-2'));
                _this.totalAmountData['paidAmount'] = _this._noCommaPipe.transform(_this._decimalPipe.transform(AP, '1.2-2'));
                // console.log(this.totalAmountData);
            }
            if (+_this.serviceId === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["SERVICEDATA"].BK || +_this.serviceId === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["SERVICEDATA"].PAYROLL || +_this.serviceId === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["SERVICEDATA"].TAX) {
                _this.showDiscount = 1;
                _this.showGrandTotalTimeSheetSection = 1;
                _this.showGrandTotalWriteOffSection = 1;
                _this.showIsFixedFees = 1;
                // Advance Invoice then need to show only Grand Total Section
                if (_this.invoiceType === 'Advance' || _this.invoiceType === 'Formation') {
                    _this.showDiscount = 0;
                    _this.showGrandTotalTimeSheetSection = 0;
                    _this.showGrandTotalWriteOffSection = 0;
                    _this.showIsFixedFees = 0;
                }
                if (_this.isView === 1 && _this.invoiceStatusData.status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].DIM) {
                    _this.showDiscount = 0;
                    _this.showGrandTotalTimeSheetSection = 0;
                    _this.showGrandTotalWriteOffSection = 0;
                    _this.showIsFixedFees = 0;
                    _this.isDismissInvoice = 1;
                }
            }
            // console.log(this.serviceId);
            if (+_this.serviceId === 7) {
                _this.showGrandTotalWriteOffSection = 1;
            }
        });
        // this.changeGrandWriteOffOnAmountValue(this.grandWriteOffAmount, 0);
        // this.changeGrandWriteOffOnAmountValue(this.grandWriteOnAmount, 1);
    };
    /**
     * On Action of Quick Links
     * @param menuName
     */
    ManageWipInvoiceComponent.prototype.onOpenQuickMenu = function (menuName) {
        var _this = this;
        switch (menuName) {
            case 'previousInvoices':
                var invoiceData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_14__["convertURLParamToEncode"])({ 'entity_id': this.entityId, 'id': this.ALL });
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].INVOICES_DASHBOARD], { queryParams: invoiceData });
                break;
            case 'billingInformation':
                this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].BILLING_BASIC, {}, { 'compare': { 'equal': { 'entity_id': this.entityId } } }).subscribe(function (response) {
                    var dataItem = response.payload.data;
                    _this.billingBasic = (dataItem) ? dataItem[0] : null;
                    if (_this.billingBasic) {
                        _this._sharedService.setBillingData(_this.billingBasic);
                        _this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].VIEW_BILLING_INFORMATION]);
                    }
                });
                break;
            case 'pendingTickets':
                var jsonD = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_14__["convertURLParamToEncode"])({
                    'entity_id': this.entityId,
                    'tab_id': 0
                });
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].PENDING_TICKETS], { queryParams: jsonD });
                break;
            case 'completedTickets':
                var jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_14__["convertURLParamToEncode"])({
                    'entity_id': this.entityId,
                    'tab_id': 1
                });
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].PENDING_TICKETS], { queryParams: jsonData });
                break;
        }
    };
    /**
     * On Click of Preview Invoice
     */
    ManageWipInvoiceComponent.prototype.onPreviewInvoice = function () {
        this._sharedService.setInvoiceData(this.invoiceStatusData);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WIP_PREVIEW_VIEW]);
    };
    /**
     * on click conformation dialog send back to TAM
     */
    ManageWipInvoiceComponent.prototype.onToggleConfomrtaionDialogBacktoTAM = function () {
        var _this = this;
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure, you want to Send Back to TAM?'
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].INVOICE_STATUS_CHANGE, _this.invoiceStatusData.id, {
                    'status_id': _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].ARW,
                }).subscribe(function (response) {
                    _this.invoice();
                });
            }
        });
    };
    /**
     * on click conformation dialog send back to Billing Stage
     */
    ManageWipInvoiceComponent.prototype.onToggleConfomrtaionDialogBacktoBillingStage = function () {
        var _this = this;
        var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure, you want to Send Back to Billing Stage?'
            }
        });
        slideDialog.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].INVOICE_STATUS_CHANGE, _this.invoiceStatusData.id, {
                    'status_id': _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["INVOICESTAGEUPDATE"].ABA
                }).subscribe(function (response) {
                    _this.invoice();
                });
            }
        });
    };
    /**
     * On Click of Dismiss Invoice
     */
    ManageWipInvoiceComponent.prototype.onOpenDismissDialog = function () {
        var dialogRef = this.dialog.open(_dismiss_dialog_dismiss_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DismissDialogComponent"], {
            panelClass: 'dismiss-dialog-container',
            data: {
                id: this.invoiceStatusData.id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
        });
    };
    /**
     * On Click of See Advance Invoice
     */
    ManageWipInvoiceComponent.prototype.onOpenAdvanceInvoice = function () {
        var dialogRef = this.dialog.open(_advance_invoices_advance_invoices_component__WEBPACK_IMPORTED_MODULE_5__["AdvanceInvoicesComponent"], {
            panelClass: 'advance-invoice-dialog-container',
            data: {
                content: this.advanceFeeData,
                otherInfo: this.advanceFeesInfo
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
        });
    };
    /**
     * Redirect on Invoice Listing -- DO NOT DELETE THIS
     */
    ManageWipInvoiceComponent.prototype.invoice = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].INVOICES_DASHBOARD]);
    };
    /**
     * Format Date
     * @param obj
     */
    ManageWipInvoiceComponent.prototype.formatDate = function (obj) {
        var dateValue = new Date(obj);
        return moment__WEBPACK_IMPORTED_MODULE_17__(dateValue).format('DD-MM-YYYY');
    };
    /**
     * on billing status change make charged units plus to total units and carryforward and writeoffunit minus to
     * total units.
     * @param event
     * @param parentDataIndex
     * @param childDataIndex
     * @param childRow
     */
    ManageWipInvoiceComponent.prototype.onBillingStatusChange = function (event, parentDataIndex, childDataIndex, childRow) {
        this.WIPParentData[parentDataIndex][childDataIndex][childRow]['billing_status'] = event.value;
        this.WIPParentData = this.WIPParentData;
        this.OnWipInvoiceData(this.WIPParentData);
    };
    /**
     * Submit Invoice Notes
     * @param formValue
     * @param isValid
     */
    ManageWipInvoiceComponent.prototype.submitInoiceNotes = function (formValue, isValid) {
        var _this = this;
        if (isValid) {
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].INVOICE_NOTES_ADD + '/' + this.invoiceStatusData.id, formValue).subscribe(function (response) {
                _this.addEditnotesForm.resetForm();
                _this.createNoteForm();
                _this.getNotesList();
            });
        }
    };
    /**
     * Get Invoice Notes after add invoice notes
     */
    ManageWipInvoiceComponent.prototype.getNotesList = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].INVOICE_WIP_LIST, this.invoiceStatusData.id).subscribe(function (Response) {
            var InvoiceData = Response.payload.data;
            _this.WIPInvoiceData['InvoiceNotes'] = (InvoiceData['InvoiceNotes'].length) ? InvoiceData['InvoiceNotes'] : '';
        });
    };
    /**
     * Check Advance Fee Details
     */
    ManageWipInvoiceComponent.prototype.checkForAdvanceFee = function (value) {
        if ((Number(value) > Number(this.advanceFeesInfo['Balance'])) && +this.discountType === 3) {
            this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_15__["ToastErrorMessages"].AMOUNT_GREATER_THAN_ADVANCE_FEE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["ToastType"].ERROR);
            this.discountAmount = 0;
        }
    };
    /**
     * Reset Discount Amount On Change of Discount Details
     */
    ManageWipInvoiceComponent.prototype.resetDiscountData = function (event) {
        this.discountAmount = 0;
        this.discountType = event.value;
        this.OnWipInvoiceData(this.WIPParentData);
    };
    /**
     * Update Grand Total After Discount
     */
    ManageWipInvoiceComponent.prototype.updateGrandTotalAfterDiscount = function (event) {
        var val = Number(event.target.value);
        if (val >= 0) {
            this.discountAmount = this._noCommaPipe.transform(this._decimalPipe.transform(val, '1.2-2'));
            // console.log(this.discountAmount);
            this.OnWipInvoiceData(this.WIPParentData);
        }
    };
    /**
     * Change Timesheet Write on & Write off units update total with wip invoice
     * @param event
     * @param WIPParentKey
     * @param RPH
     * @param operationType
     */
    ManageWipInvoiceComponent.prototype.changeTimesheetAmount = function (event, WIPParentKey, RPH, operationType) {
        var val = Number(event.target.value);
        if (val >= 0) {
            if (operationType === 0) {
                this.writeOffUnit[WIPParentKey] = val;
            }
            if (operationType === 1) {
                this.writeOnUnit[WIPParentKey] = val;
            }
            this.OnWipInvoiceData(this.WIPParentData);
        }
    };
    /**
     * Change Grand Write on & Write off units update total with wip invoice
     * @param event
     * @param operationType
     */
    ManageWipInvoiceComponent.prototype.changeGrandWriteOffOnAmount = function (event, operationType) {
        var val = Number(event.target.value);
        if (val >= 0) {
            if (operationType === 0) {
                this.grandWriteOffAmount = val;
            }
            if (operationType === 1) {
                this.grandWriteOnAmount = val;
            }
            this.OnWipInvoiceData(this.WIPParentData);
        }
    };
    /**
     * Change Grand Write on & Write off units update total with wip invoice
     * @param event
     * @param operationType
     */
    ManageWipInvoiceComponent.prototype.changeGrandWriteOffOnAmountValue = function (value, operationType) {
        var val = Number(value);
        if (val >= 0) {
            if (operationType === 0) {
                this.grandWriteOffAmount = val;
            }
            if (operationType === 1) {
                this.grandWriteOnAmount = val;
            }
            this.OnWipInvoiceData(this.WIPParentData);
        }
    };
    /**
     * On Change details of WIP Invoice Update data
     * @param WipInvoiceData
     * @constructor
     */
    ManageWipInvoiceComponent.prototype.OnWipInvoiceData = function (WipInvoiceData) {
        this.WIPParentData = {};
        this.WIPParentData = WipInvoiceData;
        // console.log(WipInvoiceData);
        if (this.WIPInvoiceData) {
            var TU = 0;
            var CFU = 0;
            var FU = (this.totalAmountData['fixedUnit']) ? Number(this.totalAmountData['fixedUnit']) : 0;
            var EU = 0;
            var Woff = 0;
            var Won = 0;
            var FF = (this.totalAmountData['fixedFee']) ? Number(this.totalAmountData['fixedFee']) : 0;
            var EA = 0;
            var GA = 0;
            var Discount = (this.discountAmount) ? this._noCommaPipe.transform(this._decimalPipe.transform(this.discountAmount, '1.2-2')) : 0;
            var NA = 0;
            var CSP = (this.WIPInvoiceData['invoice']['invoice']['card_surcharge']) ? this.WIPInvoiceData['invoice']['invoice']['card_surcharge'] : 0;
            var CSA = 0;
            var GST = 0;
            var AP = 0;
            if (_utility_common_functions__WEBPACK_IMPORTED_MODULE_14__["CommonFunctions"].isEmpty(this.WIPParentData)) {
                TU = (this.WIPInvoiceData['invoice']['invoice']['timesheet_unit']) ? Number(this.WIPInvoiceData['invoice']['invoice']['timesheet_unit']) : 0;
                CFU = (this.WIPInvoiceData['invoice']['invoice']['carry_unit']) ? Number(this.WIPInvoiceData['invoice']['invoice']['carry_unit']) : 0;
                FU = (this.WIPInvoiceData['invoice']['invoice']['fixed_unit']) ? Number(this.WIPInvoiceData['invoice']['invoice']['fixed_unit']) : 0;
                EU = (this.WIPInvoiceData['invoice']['invoice']['extra_unit']) ? Number(this.WIPInvoiceData['invoice']['invoice']['extra_unit']) : 0;
                Woff = (this.WIPInvoiceData['invoice']['invoice']['woff_unit']) ? Number(this.WIPInvoiceData['invoice']['invoice']['woff_unit']) : 0;
                Won = (this.WIPInvoiceData['invoice']['invoice']['won_unit']) ? Number(this.WIPInvoiceData['invoice']['invoice']['won_unit']) : 0;
                FF = (this.WIPInvoiceData['invoice']['invoice']['ff_amount']) ? Number(this.WIPInvoiceData['invoice']['invoice']['ff_amount']) : 0;
                EA = 0;
                GA = 0;
                Discount = (this.discountAmount >= 0) ? this._noCommaPipe.transform(this._decimalPipe.transform(this.discountAmount, '1.2-2')) : (this.WIPInvoiceData['invoice']['invoice']['discount_amount']) ? Number(this.WIPInvoiceData['invoice']['invoice']['discount_amount']) : 0;
                // console.log(Discount);
                NA = 0;
                CSP = (this.WIPInvoiceData['invoice']['invoice']['card_surcharge']) ? Number(this.WIPInvoiceData['invoice']['invoice']['card_surcharge']) : 0;
                CSA = 0;
                GST = 0;
                AP = 0;
            }
            if (this.WIPParentData) {
                for (var key in this.WIPParentData) {
                    delete this.WIPParentData[key]['timesheet_unit'];
                    delete this.WIPParentData[key]['write_Off'];
                    delete this.WIPParentData[key]['carry_forward_unit'];
                    delete this.WIPParentData[key]['charged_units'];
                    delete this.WIPParentData[key]['extra_amount'];
                    this.writeOffUnit[key] = (this.writeOffUnit[key] >= 0) ? this.writeOffUnit[key] : (this.WIPMasterUnitData[key] ? this.WIPMasterUnitData[key]['woffunit'] : 0);
                    this.writeOnUnit[key] = (this.writeOnUnit[key] >= 0) ? this.writeOnUnit[key] : (this.WIPMasterUnitData[key] ? this.WIPMasterUnitData[key]['wonunit'] : 0);
                    // console.log(this.writeOnUnit[key]);
                    var $ = 0;
                    var t = 0;
                    var c = 0;
                    var d = 0;
                    var taskInnerExtraAmount = 0;
                    /**
                     * for each key of invoice data ['key'] make a field wise calculation and make total of carry forward
                     * and other fields.
                     */
                    for (var childKey in this.WIPParentData[key]) {
                        delete this.WIPParentData[key][childKey]['task_extra_amount'];
                        delete this.WIPParentData[key][childKey]['task_total_units'];
                        delete this.WIPParentData[key][childKey]['extra_activity'];
                        var task_extra_amount = 0;
                        var task_total_units = 0;
                        for (var childGridKey in this.WIPParentData[key][childKey]) {
                            if (Number(childGridKey) >= 0) {
                                $ += this.WIPParentData[key][childKey][childGridKey]['amount'];
                                t += this.WIPParentData[key][childKey][childGridKey]['units'];
                                task_extra_amount += +(this.WIPParentData[key][childKey][childGridKey]['amount']);
                                task_total_units += +(this.WIPParentData[key][childKey][childGridKey]['units']);
                                if (this.WIPParentData[key][childKey][childGridKey]['billing_status'] === 2) {
                                    d += this.WIPParentData[key][childKey][childGridKey]['units'];
                                    task_extra_amount -= +(this.WIPParentData[key][childKey][childGridKey]['amount']);
                                    task_total_units -= +(this.WIPParentData[key][childKey][childGridKey]['units']);
                                }
                                else if (this.WIPParentData[key][childKey][childGridKey]['billing_status'] === 3) {
                                    c += this.WIPParentData[key][childKey][childGridKey]['units'];
                                    task_extra_amount -= +(this.WIPParentData[key][childKey][childGridKey]['amount']);
                                    task_total_units -= +(this.WIPParentData[key][childKey][childGridKey]['units']);
                                }
                            }
                        }
                        this.WIPParentData[key][childKey]['task_extra_amount'] = this._noCommaPipe.transform(this._decimalPipe.transform(task_extra_amount, '1.2-2'));
                        this.WIPParentData[key][childKey]['task_total_units'] = task_total_units;
                        this.WIPParentData[key][childKey]['extra_activity'] = (this.WIPInvoiceData['invoice']['timesheetDetail']['subActivity'][key]) ? (this.WIPInvoiceData['invoice']['timesheetDetail']['subActivity'][key][childKey]) ? this.WIPInvoiceData['invoice']['timesheetDetail']['subActivity'][key][childKey] : [] : [];
                        taskInnerExtraAmount += Number(this.WIPParentData[key][childKey]['task_extra_amount']);
                    }
                    var totalTimesheetAmount = 0;
                    var y = 0;
                    t = (t > 0) ? t : 0;
                    y = (t + this.writeOnUnit[key]) - (this.writeOffUnit[key] + c + d);
                    // const rph = (this.WIPInvoiceData['BillingDetail']['RPH']) ? this.WIPInvoiceData['BillingDetail']['RPH'][key] : this.default_rph;
                    // totalTimesheetAmount = (y > 0) ? y * rph / this.unit_ratio : 0;
                    if (this.writeOnUnit[key] > 0 || this.writeOffUnit[key] > 0) {
                        var rph = (this.WIPInvoiceData['BillingDetail']) ? this.WIPInvoiceData['BillingDetail']['RPH'][key] : this.default_rph;
                        totalTimesheetAmount = (y > 0) ? y * rph / this.unit_ratio : 0;
                    }
                    else {
                        totalTimesheetAmount = Number(taskInnerExtraAmount);
                    }
                    this.WIPParentData[key]['timesheet_unit'] = t;
                    this.WIPParentData[key]['write_Off'] = c;
                    this.WIPParentData[key]['carry_forward_unit'] = d;
                    this.WIPParentData[key]['charged_units'] = (y > 0) ? y : 0;
                    this.WIPParentData[key]['extra_amount'] = totalTimesheetAmount.toFixed(2);
                    TU += t;
                    CFU += d;
                    EA += Number(totalTimesheetAmount.toFixed(2));
                }
            }
            var default_rph = (this.WIPInvoiceData['BillingDetail']['RPH']) ? this.WIPInvoiceData['BillingDetail']['RPH']['default'] : this.default_rph;
            // console.log(4, EA);
            // console.log(5,this.grandWriteOnAmount);
            // console.log(6,this.grandWriteOffAmount);
            var TEA = (EA + this.grandWriteOnAmount);
            var NGA = 0;
            if (TEA > this.grandWriteOffAmount) {
                EA = Number(((EA + this.grandWriteOnAmount) - this.grandWriteOffAmount).toFixed(2));
            }
            else {
                NGA = TEA;
                EA = 0;
            }
            EU = (EA === 0) ? 0 : EA * this.unit_ratio / default_rph;
            if (EU <= 0 || isNaN(EU)) {
                EU = 0;
            }
            Woff = TU - (CFU + FU + EU);
            Won = (CFU + FU + EU) - TU;
            if (EA <= 0 && FF <= 0) {
                EA = 0;
                FF = 0;
                GA = GA;
            }
            else if (EA <= 0 && NGA === 0) {
                EA = 0;
                GA = Number(((Number(FF) + this.grandWriteOnAmount) - this.grandWriteOffAmount).toFixed(2));
            }
            else if (EA <= 0 && NGA > 0) {
                GA = Number(((Number(FF) + Number(TEA)) - this.grandWriteOffAmount).toFixed(2));
            }
            else {
                GA = Number(EA) + Number(FF);
            }
            if (GA <= 0) {
                GA = 0;
            }
            // Need to check if Write off & Write on amount then need to update
            if (this.serviceId === 7) {
                if (Number(GA) > 0) {
                    var discountPercentage = (this.WIPInvoiceData['BillingDetail']) ? Number(this.WIPInvoiceData['BillingDetail']['subscription_discount']) : 0;
                    var discountAmount = GA * discountPercentage / 100;
                    // console.log(discountAmount.toFixed(2));
                    Discount = this.discountAmount = this._noCommaPipe.transform(this._decimalPipe.transform(discountAmount.toFixed(2), '1.2-2'));
                }
                else {
                    Discount = this.discountAmount = this._noCommaPipe.transform(this._decimalPipe.transform(0.00, '1.2-2'));
                }
            }
            // console.log(GA, Discount);
            NA = Number((GA - Number(Discount)).toFixed(2));
            if (NA <= 0) {
                NA = 0;
            }
            CSA = Number(((NA * CSP) / this.percentage_ratio).toFixed(2));
            if (CSA <= 0) {
                CSA = 0;
            }
            GST = Number((((NA + CSA) * this.gst_percentage) / this.percentage_ratio).toFixed(2));
            if (GST <= 0) {
                GST = 0;
            }
            AP = Number((NA + CSA + GST).toFixed(2));
            if (AP <= 0) {
                AP = 0;
            }
            this.totalAmountData['discount_type'] = this.getDiscountType('key', this.discountType, 'label');
            this.totalAmountData['totalTimesheetUnit'] = TU;
            this.totalAmountData['carryForwardUnit'] = CFU;
            this.totalAmountData['fixedUnit'] = FU;
            this.totalAmountData['extraUnit'] = Math.ceil(EU);
            this.totalAmountData['wOffUnit'] = (Woff > 0) ? Math.floor(Woff) : 0;
            this.totalAmountData['wOnUnit'] = (Won > 0) ? Math.ceil(Won) : 0;
            this.totalAmountData['fixedFee'] = FF;
            this.totalAmountData['extraAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(EA, '1.2-2'));
            this.totalAmountData['grossAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(GA, '1.2-2'));
            this.totalAmountData['discount'] = Discount;
            this.totalAmountData['netAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(NA, '1.2-2'));
            this.totalAmountData['card_surcharge'] = CSP;
            this.totalAmountData['SurchargeAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(CSA, '1.2-2'));
            this.totalAmountData['gstAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(GST, '1.2-2'));
            this.totalAmountData['paidAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(AP, '1.2-2'));
        }
    };
    /**
     * On Tab Select Invoice Details Change
     * @param event
     */
    ManageWipInvoiceComponent.prototype.onSelectedIndexChange = function (event) {
        var _this = this;
        this.topDetailsLength = this.WIPInvoiceData['topDetail'].length;
        if (this.selectedIndex !== event.index) {
            this.selectedIndex = event.index;
            var invoice_id = (this.WIPInvoiceData['topDetail'][event.index]['id']) ? this.WIPInvoiceData['topDetail'][event.index]['id'] : 0;
            // console.log(invoice_id);
            if (invoice_id > 0) {
                this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].INVOICE_SHOW, invoice_id).subscribe(function (Response) {
                    _this.invoiceStatusData = Response.payload.data;
                    _this.initializeMethod();
                });
            }
        }
    };
    ManageWipInvoiceComponent.prototype.onSelectedIndexTabChange = function (value) {
        var _this = this;
        this.topDetailsLength = this.WIPInvoiceData['topDetail'].length;
        // if (this.selectedIndex !== value) {
        this.selectedIndex = value;
        var invoice_id = (this.WIPInvoiceData['topDetail'][value]['id']) ? this.WIPInvoiceData['topDetail'][value]['id'] : 0;
        // console.log(invoice_id);
        if (invoice_id > 0) {
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].INVOICE_SHOW, invoice_id).subscribe(function (Response) {
                _this.invoiceStatusData = Response.payload.data;
                _this.initializeMethod();
            });
        }
        // }
    };
    /**
     * On Submit WIP Invoice
     * @param submitType
     */
    ManageWipInvoiceComponent.prototype.onSubmitWipInvoice = function (submitType) {
        var _this = this;
        var disAmount = Number(this.discountAmount);
        if ((this.isView === 0) && (this.advanceFeeData !== {}) && (disAmount >= 0) && (disAmount < Number(this.advanceFeesInfo['Balance']))) {
            var slideDialog = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmationDialogComponent"], {
                data: {
                    content: 'A positive balance in advance fees is available for this client. Are you sure you want to proceed without adjusting it?'
                }
            });
            slideDialog.afterClosed().subscribe(function (value) {
                if (value) {
                    _this.onSubmitFormData(submitType);
                }
            });
        }
        else {
            this.onSubmitFormData(submitType);
        }
    };
    ManageWipInvoiceComponent.prototype.onSubmitFormData = function (submitType) {
        var _this = this;
        var master_unit = [];
        var timesheet = [];
        var formValue = {};
        if (this.WIPParentData) {
            for (var key in this.WIPParentData) {
                for (var childKey in this.WIPParentData[key]) {
                    for (var childGridKey in this.WIPParentData[key][childKey]) {
                        if (Object.keys(this.WIPParentData[key][childKey][childGridKey]).length > 0) {
                            //isObject(this.WIPParentData[key][childKey][childGridKey]) &&
                            if (this.WIPParentData[key][childKey][childGridKey]['timesheet_id']) {
                                // let timesheetData = {};
                                // timesheetData['timesheet_id'] = this.WIPParentData[key][childKey][childGridKey]['timesheet_id'];
                                // timesheetData['units'] = this.WIPParentData[key][childKey][childGridKey]['units'];
                                // timesheetData['billing_status'] = this.WIPParentData[key][childKey][childGridKey]['billing_status'];
                                // timesheetData['carry_forward_invoice_ids'] = this.WIPParentData[key][childKey][childGridKey]['carry_forward_invoice_ids'];
                                // timesheet.push(timesheetData);
                                timesheet.push(this.WIPParentData[key][childKey][childGridKey]);
                            }
                        }
                    }
                }
                var master_data = {};
                master_data['id'] = (this.WIPMasterUnitData[key]) ? this.WIPMasterUnitData[key]['id'] : 0;
                master_data['invoice_id'] = (this.WIPInvoiceData['invoice']['invoice']['id']) ? this.WIPInvoiceData['invoice']['invoice']['id'] : 0;
                master_data['master_id'] = (key) ? key : 0;
                master_data['timesheet_unit'] = (this.WIPParentData[key]['timesheet_unit']) ? this.WIPParentData[key]['timesheet_unit'] : 0;
                master_data['woffunit'] = (this.writeOffUnit[key]) ? this.writeOffUnit[key] : 0;
                master_data['wonunit'] = (this.writeOnUnit[key]) ? this.writeOnUnit[key] : 0;
                master_data['woff_unit'] = (this.WIPParentData[key]['write_Off']) ? this.WIPParentData[key]['write_Off'] : 0;
                master_data['carry_unit'] = (this.WIPParentData[key]['carry_forward_unit']) ? this.WIPParentData[key]['carry_forward_unit'] : 0;
                master_data['charge_unit'] = (this.WIPParentData[key]['charged_units']) ? this.WIPParentData[key]['charged_units'] : 0;
                master_data['rate_per_hour'] = (this.WIPInvoiceData['BillingDetail']['RPH'][key]) ? this.WIPInvoiceData['BillingDetail']['RPH'][key] : this.default_rph;
                master_data['amount'] = (this.WIPParentData[key]['extra_amount']) ? this.WIPParentData[key]['extra_amount'] : 0;
                master_unit.push(master_data);
                formValue['timesheet'] = timesheet;
                formValue['master_unit'] = master_unit;
            }
            formValue['woff_amount'] = this.grandWriteOffAmount;
            formValue['won_amount'] = this.grandWriteOnAmount;
            formValue['timesheet_unit'] = this.totalAmountData['totalTimesheetUnit'];
            formValue['carry_unit'] = this.totalAmountData['carryForwardUnit'];
            formValue['fixed_unit'] = this.totalAmountData['fixedUnit'];
            formValue['extra_unit'] = this.totalAmountData['extraUnit'];
            formValue['woff_unit'] = this.totalAmountData['wOnUnit'];
            formValue['won_unit'] = this.totalAmountData['wOnUnit'];
            formValue['charged_unit'] = '';
            formValue['total_charge_unit'] = '';
            formValue['extra_woff'] = '';
            formValue['extra_won'] = '';
            formValue['ff_amount'] = this.totalAmountData['fixedFee'];
            formValue['extra_amount'] = this.totalAmountData['extraAmount'];
            formValue['gross_amount'] = this.totalAmountData['grossAmount'];
            formValue['discount_type'] = this.totalAmountData['discount_type'];
            formValue['discount_amount'] = this.totalAmountData['discount'];
            formValue['net_amount'] = this.totalAmountData['netAmount'];
            formValue['card_surcharge'] = this.totalAmountData['card_surcharge'];
            formValue['surcharge_amount'] = this.totalAmountData['SurchargeAmount'];
            formValue['gst_amount'] = this.totalAmountData['gstAmount'];
            formValue['paid_amount'] = this.totalAmountData['paidAmount'];
        }
        formValue['dismiss_reason'] = this.AdjustWIPReason;
        // IF Status Adjusted then need to check wip reason is there or not
        if (((submitType === 3) || (submitType === 4)) && (this.AdjustWIPReason === '' || this.AdjustWIPReason === null)) {
            this.isValidAllDetails = true;
            this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_15__["ToastErrorMessages"].ADJUST_WIP_REASON_NOT_BLANK, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["ToastType"].ERROR);
        }
        else if (((submitType === 3) || (submitType === 4)) && (this.AdjustWIPReason !== '' || this.AdjustWIPReason !== null)) {
            formValue['adjusted'] = 1;
            formValue['dismiss_reason'] = this.AdjustWIPReason;
            this.isValidAllDetails = false;
        }
        if (!this.isValidAllDetails) {
            // Add Posted Data
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].INVOICE_UPDATE + '/' + this.invoiceStatusData.id, formValue).subscribe(function (response) {
                // Redirect to Invoice Listing
                if (submitType === 1 || submitType === 3) {
                    _this.invoice();
                }
                // Redirect to Invoice Preview
                if (submitType === 2) {
                    if (_this.invoiceStatusData.id > 0) {
                        _this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].INVOICE_SHOW, _this.invoiceStatusData.id).subscribe(function (Response) {
                            _this._sharedService.setInvoiceData(Response.payload.data);
                            _this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WIP_PREVIEW]);
                        });
                    }
                }
                // Redirect to Next Index Tab
                if (submitType === 4) {
                    // console.log(this.selectedIndex);
                    _this.selectedIndex = _this.selectedIndex + 1;
                    // console.log(this.selectedIndex);
                }
            });
        }
    };
    /**
     * Get Discount Type
     * @param type
     * @param dataType
     * @param returnType
     */
    ManageWipInvoiceComponent.prototype.getDiscountType = function (type, dataType, returnType) {
        if (type === 'key') {
            var val = this.discountTypeData.filter(function (elem) { return elem.key === Number(dataType); });
            return (val.length) ? val[0][returnType] : 1;
        }
        else if (type === 'label') {
            var val = this.discountTypeData.filter(function (elem) { return elem.label === dataType; });
            return (val.length) ? val[0][returnType] : 1;
        }
        else {
            return 1;
        }
    };
    /**
     * Get Billing Status Name From ID
     * @param status_id
     */
    ManageWipInvoiceComponent.prototype.getBillingStatusName = function (status_id) {
        var val = this.billingStatus.filter(function (elem) { return elem.key === status_id; });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Open Timesheet Dialog For More Information
     */
    ManageWipInvoiceComponent.prototype.openMoreDetailsDialog = function (timesheetDetails) {
        var dialogRef = this.dialog.open(_more_details_dialog_more_details_dialog_component__WEBPACK_IMPORTED_MODULE_13__["MoreDetailsDialogComponent"], {
            panelClass: 'lg-dialog--container',
            width: '500px',
            data: {
                content: timesheetDetails
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
        });
    };
    /**
     * On home page route
     */
    ManageWipInvoiceComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    ManageWipInvoiceComponent.prototype.changeInvoiceIndexToPrevious = function () {
        this.selectedIndex = this.selectedIndex - 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ManageWipInvoiceComponent.prototype, "isView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addEditnotesForm'),
        __metadata("design:type", Object)
    ], ManageWipInvoiceComponent.prototype, "addEditnotesForm", void 0);
    ManageWipInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-wip-invoice',
            template: __webpack_require__(/*! ./manage-wip-invoice.component.html */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice.component.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__["CommonCrudService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_12__["NoCommaPipe"]],
            styles: [__webpack_require__(/*! ./manage-wip-invoice.component.scss */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__["CommonCrudService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_12__["NoCommaPipe"]])
    ], ManageWipInvoiceComponent);
    return ManageWipInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice.module.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ManageWipInvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageWipInvoiceModule", function() { return ManageWipInvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_wip_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-wip-invoice.component */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice.component.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _more_details_dialog_more_details_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-details-dialog/more-details-dialog.component */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/more-details-dialog/more-details-dialog.component.ts");
/* harmony import */ var _advance_invoices_advance_invoices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./advance-invoices/advance-invoices.component */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/advance-invoices/advance-invoices.component.ts");
/* harmony import */ var _manage_wip_invoice_view_manage_wip_invoice_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage-wip-invoice-view/manage-wip-invoice-view.component */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/manage-wip-invoice-view/manage-wip-invoice-view.component.ts");
/* harmony import */ var _preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview-invoice/preview-invoice.component */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice/preview-invoice.component.ts");
/* harmony import */ var _preview_invoice_view_preview_invoice_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preview-invoice-view/preview-invoice-view.component */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice-view/preview-invoice-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _manage_wip_invoice_component__WEBPACK_IMPORTED_MODULE_3__["ManageWipInvoiceComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    },
    {
        path: 'advance-invoices',
        component: _advance_invoices_advance_invoices_component__WEBPACK_IMPORTED_MODULE_7__["AdvanceInvoicesComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    },
    {
        path: 'manage-wip-invoice-view',
        component: _manage_wip_invoice_view_manage_wip_invoice_view_component__WEBPACK_IMPORTED_MODULE_8__["ManageWipInvoiceViewComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    },
    /*  {
        path: 'manage-wip-invoice',
        component: ManageWipInvoiceViewComponent,
        canActivate: [AdminAuthGuard]
      },*/
    {
        path: 'wip-preview',
        component: _preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_9__["PreviewInvoiceComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    },
    {
        path: 'wip-preview-view',
        component: _preview_invoice_view_preview_invoice_view_component__WEBPACK_IMPORTED_MODULE_10__["PreviewInvoiceViewComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuard"]]
    }
];
var ManageWipInvoiceModule = /** @class */ (function () {
    function ManageWipInvoiceModule() {
    }
    ManageWipInvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_more_details_dialog_more_details_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MoreDetailsDialogComponent"],
                _manage_wip_invoice_component__WEBPACK_IMPORTED_MODULE_3__["ManageWipInvoiceComponent"],
                _advance_invoices_advance_invoices_component__WEBPACK_IMPORTED_MODULE_7__["AdvanceInvoicesComponent"],
                _manage_wip_invoice_view_manage_wip_invoice_view_component__WEBPACK_IMPORTED_MODULE_8__["ManageWipInvoiceViewComponent"],
                _preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_9__["PreviewInvoiceComponent"],
                _preview_invoice_view_preview_invoice_view_component__WEBPACK_IMPORTED_MODULE_10__["PreviewInvoiceViewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"]
            ],
            entryComponents: [_more_details_dialog_more_details_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MoreDetailsDialogComponent"]]
        })
    ], ManageWipInvoiceModule);
    return ManageWipInvoiceModule;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/more-details-dialog/more-details-dialog.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/more-details-dialog/more-details-dialog.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start More Details dialog  -->\r\n<div class=\"admin-invoice-manage-wip-more-details-container\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">MORE DETAILS</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose()\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n  <div class=\"modal__body\">\r\n    <div class=\"row MT-10\" *ngIf=\"timesheetDetails['bank_cc_name'] !== ''\">\r\n      <div class=\"col-md-4\">\r\n        <label>Bank / CC / Paypal Info</label>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <span><mat-label>{{timesheetDetails['bank_cc_name']}}</mat-label></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"row MT-10\" *ngIf=\"timesheetDetails['bank_cc_account_no'] !== ''\">\r\n      <div class=\"col-md-4\">\r\n        <label>Account No</label>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <span><mat-label>{{timesheetDetails['bank_cc_account_no']}}</mat-label></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"row MT-20\" *ngIf=\"timesheetDetails['no_of_value'] !== '' && timesheetDetails['no_of_value']\">\r\n      <div class=\"col-md-4\">\r\n        <label>{{subactivityCodeDetail[timesheetDetails['subactivity_code']]}}</label>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <span><mat-label>{{timesheetDetails['no_of_value']}}</mat-label></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"row MT-20\"\r\n         *ngIf=\"timesheetDetails['period_startdate'] !=='' && timesheetDetails['period_startdate'] !== '0000-00-00' && timesheetDetails['period_startdate'] !== null\">\r\n      <div class=\"col-md-4\">\r\n        <label>Period From</label>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <span><mat-label>{{timesheetDetails['period_startdate'] | date : 'dd-MM-yyyy'}}</mat-label></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"row MT-20\"\r\n         *ngIf=\"timesheetDetails['period_enddate'] !== '' && timesheetDetails['period_enddate'] !== '0000-00-00' && timesheetDetails['period_enddate'] !== null\">\r\n      <div class=\"col-md-4\">\r\n        <label>Period To</label>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <span><mat-label>{{timesheetDetails['period_enddate'] | date : 'dd-MM-yyyy'}}</mat-label></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"row MT-20\"\r\n         *ngIf=\"timesheetDetails['extra_value'] && timesheetDetails['extra_value'] !== '' && timesheetDetails['extra_value'] !== null\">\r\n      <div class=\"col-md-4\">\r\n        <label>{{subactivityCodeDetail[timesheetDetails['subactivity_code']]}}</label>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <span><mat-label>{{timesheetDetails['extra_value']}}</mat-label></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"row MT-20\"\r\n         *ngIf=\"timesheetDetails['name_of_employee'] !== '' && timesheetDetails['name_of_employee'] !== null\">\r\n      <div class=\"col-md-4\">\r\n        <label>Employee Name</label>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <span *ngIf=\"nameOfEmp\">\r\n          <tr *ngFor=\"let emp of nameOfEmp; let i = index\">\r\n            <td><p><label class=\"orange-color\">First Name : </label>{{nameOfEmp[i]['first_name']}}</p>\r\n              <p class=\"MT-5\"><label class=\"orange-color\">Last Name : </label>{{nameOfEmp[i]['last_name']}}</p>\r\n            </td>\r\n          </tr>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal__footer\">\r\n\r\n  </div>\r\n</div>\r\n<!--  End More Details dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/more-details-dialog/more-details-dialog.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/more-details-dialog/more-details-dialog.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: MoreDetailsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreDetailsDialogComponent", function() { return MoreDetailsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
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



var MoreDetailsDialogComponent = /** @class */ (function (_super) {
    __extends(MoreDetailsDialogComponent, _super);
    function MoreDetailsDialogComponent(dialogRef, data) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.timesheetDetails = {};
        _this.subactivityCodeDetail = {
            201: 'No Of Transaction',
            202: 'No Of Transaction',
            228: 'No Of Transaction',
            501: 'No Of Invoice',
            505: 'No Of Invoice',
            601: 'No Of Invoice',
            607: 'No Of Invoice',
            701: 'No Of Employee',
            705: 'Year',
            707: 'No Of Employee',
            709: 'No Of Employee',
            404: 'No Of Employee',
            417: 'No Of Employee',
            463: 'No Of Employee',
            462: 'No Of Employee',
            402: 'No Of Employee',
            460: 'No Of Employee',
            447: 'No Of Employee',
        };
        _this.nameOfEmp = [];
        return _this;
    }
    MoreDetailsDialogComponent.prototype.ngOnInit = function () {
        this.timesheetDetails = this.data['content'];
        // console.log(this.timesheetDetails);
        if (this.timesheetDetails['name_of_employee'] && this.timesheetDetails['name_of_employee'] !== '"[]"') {
            this.nameOfEmp = JSON.parse(this.timesheetDetails['name_of_employee']);
        }
    };
    MoreDetailsDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    MoreDetailsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-more-details-dialog',
            template: __webpack_require__(/*! ./more-details-dialog.component.html */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/more-details-dialog/more-details-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], MoreDetailsDialogComponent);
    return MoreDetailsDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice-view/preview-invoice-view.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice-view/preview-invoice-view.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-preview-invoice [isView]=\"1\"></app-preview-invoice>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice-view/preview-invoice-view.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice-view/preview-invoice-view.component.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2ludm9pY2VzL2ludm9pY2UtZGFzaGJvYXJkL21hbmFnZS13aXAtaW52b2ljZS9wcmV2aWV3LWludm9pY2Utdmlldy9wcmV2aWV3LWludm9pY2Utdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice-view/preview-invoice-view.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice-view/preview-invoice-view.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: PreviewInvoiceViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewInvoiceViewComponent", function() { return PreviewInvoiceViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreviewInvoiceViewComponent = /** @class */ (function () {
    function PreviewInvoiceViewComponent() {
    }
    PreviewInvoiceViewComponent.prototype.ngOnInit = function () {
    };
    PreviewInvoiceViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview-invoice-view',
            template: __webpack_require__(/*! ./preview-invoice-view.component.html */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice-view/preview-invoice-view.component.html"),
            styles: [__webpack_require__(/*! ./preview-invoice-view.component.scss */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice-view/preview-invoice-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PreviewInvoiceViewComponent);
    return PreviewInvoiceViewComponent;
}());



/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice/preview-invoice.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice/preview-invoice.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-wip-preview-invoice-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>BILLING</span>\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a [routerLink]=\"invoiceUrl\" class=\"primary-color\"> INVOICE </a></span>\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a (click)=\"isView === 1 ? manageWIPInvoiceView() : manageWIPInvoice()\"> MANAGE WIP INVOICE </a></span>\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>WIP PREVIEW | {{entityName}} {{period}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 PR-0\">\r\n        <div class=\"breadcrumb-top-header__right-menu\">\r\n          <ul>\r\n            <li>\r\n              <a>\r\n                <label class=\"black-color\">Quick actions</label>\r\n                <i class=\"material-icons\" [matMenuTriggerFor]=\"menu\">more_vert</i>\r\n                <mat-menu #menu=\"matMenu\" class=\"column-menu\">\r\n                  <button mat-menu-item class=\"menu-header\">\r\n                    <h3>Quick Action</h3>\r\n                  </button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('previousInvoices')\">Previous Invoices</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('billingInformation')\">Billing Information</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('pendingTickets')\">Pending Tickets</button>\r\n                  <button mat-menu-item (click)=\"onOpenQuickMenu('completedTickets')\">Completed Tickets</button>\r\n                </mat-menu>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <div class=\"wip-preview-invoice-body\" *ngIf=\"isView === 0\">\r\n    <h2>Invoice Preview</h2>\r\n    <!-- Start Grid Section -->\r\n    <div class=\"table-section\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"text-right\">\r\n            <button type=\"button\" class=\"btn-primary\" (click)=\"getDataInRightPreview()\">Copy to final Description\r\n            </button>\r\n          </div>\r\n          <div class=\"table-container\">\r\n            <div class=\"table-block\">\r\n              <table>\r\n                <thead>\r\n                <tr>\r\n                  <th>\r\n                    <mat-checkbox [checked]=\"is_CheckedAll\"\r\n                                  (change)=\"checkStandardDescriptionToAll($event.checked,'is_checked')\"></mat-checkbox>\r\n                  </th>\r\n                  <th>Standard Description</th>\r\n                  <th>Standard Amount</th>\r\n                  <th>Standard Account</th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                <tr *ngFor=\"let leftrow of leftPreview\">\r\n                  <td>\r\n                    <mat-checkbox [checked]=\"(leftrow['is_checked']) ? true : false\"\r\n                                  (change)=\"checkStandardDescription($event.checked, leftrow)\"></mat-checkbox>\r\n                  </td>\r\n                  <td>{{leftrow['description']}}</td>\r\n                  <td>{{leftrow['amount'] ? leftrow['amount'] : ''}}</td>\r\n                  <td>{{leftrow['inv_account_id'] ? getAccountCodeWithName(leftrow['inv_account_id']) : ''}}\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 PL-0\">\r\n          <div class=\"text-right\">\r\n            <button type=\"button\" class=\"btn-primary\" (click)=\"addBlankLineToRightPreview()\">Add blank line to final\r\n              description\r\n            </button>\r\n          </div>\r\n          <div class=\"table-container\" *ngIf=\"rightPreview.length\">\r\n            <div class=\"table-block\">\r\n              <table>\r\n                <thead>\r\n                <tr>\r\n                  <th>Final Description</th>\r\n                  <th>Final Amount</th>\r\n                  <th>Final Account</th>\r\n                  <th></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody [dragula]='\"handle-sort-order\"' [dragulaModel]=\"rightPreview\"\r\n                       (dragulaModelChange)=\"rightPreview = $event\">\r\n                <tr *ngFor=\"let rightrow of rightPreview; let i = index\">\r\n                  <td>\r\n                    <mat-form-field>\r\n                        <textarea matInput placeholder=\"Enter Description\" [(ngModel)]=\"rightrow['description_data']\"\r\n                                  value=\"{{rightrow['description_data']}}\" [matTextareaAutosize]\r\n                                  matAutosizeMinRows=\"3\"></textarea>\r\n                    </mat-form-field>\r\n                  </td>\r\n\r\n                  <td>\r\n                    <mat-form-field class=\"MT-10\">\r\n                      <input matInput type=\"number\" name=\"amount_data\" [(ngModel)]=\"rightrow['amount_data']\"\r\n                             (change)=\"calculateAmountOfRightPreview()\" placeholder=\"Enter Amount\"\r\n                             value=\"{{rightrow['amount_data'] ? rightrow['amount_data'] : ''}}\"/>\r\n                    </mat-form-field>\r\n                  </td>\r\n\r\n                  <td>\r\n                    <mat-form-field class=\"MT-10\">\r\n                      <mat-select placeholder=\"Please Select\" [(ngModel)]=\"+rightrow['inv_account_id_data']\"\r\n                                  [value]=\"(rightrow['inv_account_id_data']) ? +rightrow['inv_account_id_data'] : ''\">\r\n                        <mat-option>None</mat-option>\r\n                        <mat-option *ngFor=\"let accountCode of accountCodeList\" [value]=\"+accountCode?.id\">\r\n                          {{ accountCode?.account_no}} - {{ accountCode?.account_name}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"handle cursor-pointer\"><mat-icon [matTooltip]=\"'Drag column'\">drag_indicator</mat-icon></span>\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Section -->\r\n\r\n    <!-- Start Amount Section -->\r\n    <div class=\"amount-section\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 totalAmount\">\r\n          <div>\r\n            <span>Gross Amount</span><label>(As per wip)</label>: <label class=\"fw-500\">${{grossAmountAsWip}}</label>\r\n          </div>\r\n\r\n          <div class=\"MT-10\">\r\n            <span>Gross Amount</span><label>(As per preview)</label>: <label\r\n            class=\"fw-500\">${{grossAmountAsPreview}}</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"totalBilling\">\r\n\r\n            <div *ngIf=\"discountAdvanceFee > 0\"><label>Advance Fee:</label> <span>${{discountAdvanceFee}}</span></div>\r\n\r\n            <div *ngIf=\"discountAmount > 0\"><label>Discount:</label> <span>${{discountAmount}}</span></div>\r\n\r\n            <div><label>Net Amount:</label> <span>${{netAmount}}</span></div>\r\n\r\n            <div><label>Card Surcharge:</label> <span>${{surchargeAmount}}</span></div>\r\n\r\n            <div><label>GST (10%):</label> <span>${{gstAmount}}</span></div>\r\n\r\n            <mat-divider></mat-divider>\r\n\r\n            <div>\r\n              <label class=\"grand-total-label fw-500\">Total Inc. GST:</label> <span class=\"primary-color\">${{totalAmount}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Start Action Buttons -->\r\n        <div class=\"col-md-6 MT-15\">\r\n          <div>\r\n            <button class=\"btn-success MR-5\" (click)=\"onConfirmDialog(invoiceStatusData.status_id, 0)\"\r\n                    *ngIf=\"btnSaveGoBack\">\r\n              Save & Go Back\r\n            </button>\r\n            <button class=\"btn-default\" (click)=\"manageWIPInvoice()\" *ngIf=\"btnGoBack\">Go Back</button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-15\">\r\n          <div class=\"text-right\">\r\n            <button type=\"button\" class=\"btn-orange btn-bordered\" (click)=\"onConfirmDialog(ATH, 1)\" *ngIf=\"btnSTH\">Send\r\n              for Technical\r\n              Head\r\n            </button>\r\n            <button type=\"button\" class=\"btn-primary btn-bordered ML-10\" (click)=\"onConfirmDialog(ABA, 1)\"\r\n                    *ngIf=\"btnSBAT\">Send for\r\n              Billing Team\r\n              Approval\r\n            </button>\r\n            <button type=\"button\" class=\"btn-orange btn-bordered ML-10\" (click)=\"onConfirmDialog(AMR, 1)\"\r\n                    *ngIf=\"btnAPI && merge_invoice === 1\">Approve Invoice\r\n            </button>\r\n            <button type=\"button\" class=\"btn-orange btn-bordered ML-10\" (click)=\"onConfirmDialog(STC, 1)\"\r\n                    *ngIf=\"btnAPI && merge_invoice === 0\">Approve Invoice\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <!-- End Action Buttons -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wip-preview-invoice-body\" *ngIf=\"isView === 1\">\r\n    <h2>Invoice Preview</h2>\r\n    <!-- Start Grid Section -->\r\n    <div class=\"table-section\">\r\n      <div class=\"row\">\r\n        <div class=\"{{!hideLeftDesc ? 'col-md-6' : ''}}\" *ngIf=\"!hideLeftDesc\">\r\n          <div class=\"table-container\">\r\n            <div class=\"table-block\">\r\n              <table>\r\n                <thead>\r\n                <tr>\r\n                  <th>Standard Description</th>\r\n                  <th>Standard Amount</th>\r\n                  <th>Standard Account</th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                <tr *ngFor=\"let leftrow of leftPreview\">\r\n                  <td>{{leftrow['description']}}</td>\r\n                  <td>{{leftrow['amount'] ? leftrow['amount'] : ''}}</td>\r\n                  <td>{{leftrow['inv_account_id'] ? getAccountCodeWithName(leftrow['inv_account_id']) : ''}}\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"{{!hideLeftDesc ? 'col-md-6' : 'col-md-12'}}\">\r\n          <div class=\"table-container\" *ngIf=\"rightPreview.length\">\r\n            <div class=\"table-block\">\r\n              <table>\r\n                <thead>\r\n                <tr>\r\n                  <th>Final Description</th>\r\n                  <th>Final Amount</th>\r\n                  <th>Final Account</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let rightrow of rightPreview; let i = index\">\r\n                  <td>{{rightrow['description_data']}}</td>\r\n                  <td>{{rightrow['amount_data']}}</td>\r\n                  <td><span *ngIf=\"rightrow['inv_account_id_data'] !== ''\">{{getAccountCodeWithName(rightrow['inv_account_id_data'])}}</span>\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Section -->\r\n\r\n    <!-- Start Amount Section -->\r\n    <div class=\"amount-section\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 totalAmount\">\r\n          <div>\r\n            <span>Gross Amount</span><label>(As per wip)</label>: <label>${{grossAmountAsWip}}</label>\r\n          </div>\r\n\r\n          <div class=\"MT-10\">\r\n            <span>Gross Amount</span><label>(As per preview)</label>: <label>${{grossAmountAsPreview}}</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"totalBilling\">\r\n\r\n            <div *ngIf=\"discountAdvanceFee > 0\"><label>Advance Fee:</label> <span>${{discountAdvanceFee}}</span></div>\r\n\r\n            <div *ngIf=\"discountAmount > 0\"><label>Discount:</label> <span>${{discountAmount}}</span></div>\r\n\r\n            <div><label>Net Amount:</label> <span>${{netAmount}}</span></div>\r\n\r\n            <div><label>Card Surcharge:</label> <span>${{surchargeAmount}}</span></div>\r\n\r\n            <div><label>GST (10%):</label> <span>${{gstAmount}}</span></div>\r\n\r\n            <mat-divider></mat-divider>\r\n\r\n            <div>\r\n              <label class=\"grand-total-label\">Total Inc. GST:</label> <span>${{totalAmount}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Start Action Buttons -->\r\n        <div class=\"col-md-6 MT-15\">\r\n          <div>\r\n            <button class=\"btn-primary\" (click)=\"manageWIPInvoiceView()\" *ngIf=\"btnGoBack\">Go Back</button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 MT-15\">\r\n          <div class=\"text-right\">\r\n\r\n          </div>\r\n        </div>\r\n        <!-- End Action Buttons -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice/preview-invoice.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice/preview-invoice.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2JpbGxpbmctbW9kdWxlL2ludm9pY2VzL2ludm9pY2UtZGFzaGJvYXJkL21hbmFnZS13aXAtaW52b2ljZS9wcmV2aWV3LWludm9pY2UvcHJldmlldy1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice/preview-invoice.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice/preview-invoice.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: PreviewInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewInvoiceComponent", function() { return PreviewInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/pipe/noComma.pipe */ "./src/utility/pipe/noComma.pipe.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-dragula */ "../../node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PreviewInvoiceComponent = /** @class */ (function () {
    function PreviewInvoiceComponent(_router, dialog, _sharedService, _commonCrudService, _decimalPipe, _noCommaPipe, dragulaService) {
        this._router = _router;
        this.dialog = dialog;
        this._sharedService = _sharedService;
        this._commonCrudService = _commonCrudService;
        this._decimalPipe = _decimalPipe;
        this._noCommaPipe = _noCommaPipe;
        this.dragulaService = dragulaService;
        this.leftPreview = [];
        this.rightPreview = [];
        this.ATH = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["INVOICESTAGEUPDATE"].ATH;
        this.ABA = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["INVOICESTAGEUPDATE"].ABA;
        this.STC = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["INVOICESTAGEUPDATE"].STC;
        this.AMR = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["INVOICESTAGEUPDATE"].AMR;
        this.grossAmountAsWip = 0;
        this.netAmount = 0;
        this.discountAmount = 0;
        this.discountAdvanceFee = 0;
        this.surchargeAmount = 0;
        this.gstAmount = 0;
        this.grossAmountAsPreview = 0;
        this.totalAmount = 0;
        this.is_CheckedAll = false;
        this.entityName = '';
        this.period = '';
        this.merge_invoice = 0;
        this.accountCodeList = [];
        this.invoiceStatusData = null;
        this.btnSTH = false;
        this.btnSBAT = false;
        this.btnGoBack = true;
        this.btnSaveGoBack = false;
        this.btnAPI = false;
        this.hideLeftDesc = false;
        this.entityId = 0;
        this.ALL = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["INVOICESTAGEUPDATE"].ALL;
    }
    PreviewInvoiceComponent.prototype.ngOnInit = function () {
        this.invoiceStatusData = this._sharedService.getInvoiceData();
        this.entityId = this.invoiceStatusData.entity_id;
        this.isView = (this.isView) ? this.isView : 0;
        this.hideShowButton(this.invoiceStatusData.status_id, this.isView);
        this.initializeMethod();
        // console.log(this._sharedService.checkUserPrivileges(16, "add_edit"));
    };
    /**
     * Hide / Show Button based on status and view
     * @param status_id
     * @param is_view
     */
    PreviewInvoiceComponent.prototype.hideShowButton = function (status_id, is_view) {
        // For Status
        if (+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["INVOICESTAGEUPDATE"].ARW && is_view === 0) {
            this.btnSTH = true;
            this.btnSaveGoBack = true;
            this.btnSBAT = true;
        }
        if (+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["INVOICESTAGEUPDATE"].ATH && is_view === 0) {
            this.btnSTH = false;
            this.btnSaveGoBack = true;
            this.btnSBAT = true;
        }
        if (+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["INVOICESTAGEUPDATE"].ABA && is_view === 0) {
            this.btnSTH = false;
            this.btnSaveGoBack = true;
            this.btnAPI = true;
        }
        if (+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["INVOICESTAGEUPDATE"].AMR && is_view === 0) {
            this.btnSTH = false;
            this.btnSaveGoBack = true;
            this.btnAPI = true;
        }
        if ((+status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["INVOICESTAGEUPDATE"].STC || +status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["INVOICESTAGEUPDATE"].RTE || +status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["INVOICESTAGEUPDATE"].APM || +status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["INVOICESTAGEUPDATE"].PAD || +status_id === _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["INVOICESTAGEUPDATE"].DIM) && (is_view === 1)) {
            this.hideLeftDesc = true;
        }
        // console.log(this.hideLeftDesc);
    };
    PreviewInvoiceComponent.prototype.initializeMethod = function () {
        this.getAccountCodeList();
        this.getInvoiceWipPreview();
    };
    PreviewInvoiceComponent.prototype.getAccountCodeList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].INVOICE_ACCOUNT_LIST, {}, {}).subscribe(function (Response) {
            _this.accountCodeList = Response.payload.data;
        });
    };
    /**
     * Get Account Code And Name From ID
     * @param accountID
     */
    PreviewInvoiceComponent.prototype.getAccountCodeWithName = function (accountID) {
        var val = this.accountCodeList.filter(function (elem) { return Number(elem.id) === +accountID; });
        return (val.length) ? (val[0].account_no + ' - ' + val[0].account_name) : '';
    };
    PreviewInvoiceComponent.prototype.getInvoiceWipPreview = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].INVOICE_WIP_PREVIEW, this.invoiceStatusData.id).subscribe(function (Response) {
            /**
             * assign data to main invoice data. then use that json to get the detail
             * of timeshit unit parent data and child data. and do calculation field wise.
             */
            var InvoiceData = Response.payload;
            _this.entityName = (Response.payload['entityName']) ? Response.payload['entityName'] : '';
            _this.period = (Response.payload['period']) ? Response.payload['period'] : '';
            _this.merge_invoice = (Response.payload['merge_invoice']) ? Response.payload['merge_invoice'] : 0;
            if ((InvoiceData['invoicePreview']) && (InvoiceData['invoicePreview'].length)) {
                for (var key in InvoiceData['invoicePreview']) {
                    for (var childkey in InvoiceData['invoicePreview'][key]) {
                        InvoiceData['invoicePreview'][key][childkey]['is_checked'] = 0;
                        _this.leftPreview.push(InvoiceData['invoicePreview'][key][childkey]);
                    }
                }
            }
            // console.log(this.leftPreview);
            if ((InvoiceData['invoiceDescription']) && (InvoiceData['invoiceDescription'].length)) {
                InvoiceData['invoiceDescription'].forEach(function (dataValue) {
                    var dataSet = [];
                    dataSet['id_data'] = dataValue['id'];
                    dataSet['description_data'] = dataValue['description'];
                    dataSet['amount_data'] = dataValue['amount'];
                    dataSet['inv_account_id_data'] = dataValue['inv_account_id'];
                    _this.rightPreview.push(dataSet);
                });
                _this.calculateAmountOfRightPreview();
            }
            if (InvoiceData['amountCalc']) {
                _this.grossAmountAsWip = (InvoiceData['amountCalc']['gross_amount']) ? _this._noCommaPipe.transform(_this._decimalPipe.transform(InvoiceData['amountCalc']['gross_amount'], '1.2-2')) : 0;
                _this.netAmount = (InvoiceData['amountCalc']['net_amount']) ? _this._noCommaPipe.transform(_this._decimalPipe.transform(InvoiceData['amountCalc']['net_amount'], '1.2-2')) : 0;
                _this.discountAdvanceFee = (InvoiceData['amountCalc']['discount_advance']) ? _this._noCommaPipe.transform(_this._decimalPipe.transform(InvoiceData['amountCalc']['discount_advance'], '1.2-2')) : 0;
                _this.discountAmount = (InvoiceData['amountCalc']['discount_amount']) ? _this._noCommaPipe.transform(_this._decimalPipe.transform(InvoiceData['amountCalc']['discount_amount'], '1.2-2')) : 0;
                _this.surchargeAmount = (InvoiceData['amountCalc']['surcharge_amount']) ? _this._noCommaPipe.transform(_this._decimalPipe.transform(InvoiceData['amountCalc']['surcharge_amount'], '1.2-2')) : 0;
                _this.gstAmount = (InvoiceData['amountCalc']['gst_amount']) ? _this._noCommaPipe.transform(_this._decimalPipe.transform(InvoiceData['amountCalc']['gst_amount'], '1.2-2')) : 0;
                _this.totalAmount = (InvoiceData['amountCalc']['paid_amount']) ? _this._noCommaPipe.transform(_this._decimalPipe.transform(InvoiceData['amountCalc']['paid_amount'], '1.2-2')) : 0;
            }
        });
    };
    /**
     * Change Standard Description
     * @param event
     * @param fieldType
     */
    PreviewInvoiceComponent.prototype.checkStandardDescriptionToAll = function (event, fieldType) {
        this.is_CheckedAll = event;
        this.leftPreview.map(function (item) {
            item[fieldType] = event ? 1 : 0;
        });
    };
    /**
     * Change Standard Description
     * @param event
     * @param leftPreviewData
     */
    PreviewInvoiceComponent.prototype.checkStandardDescription = function (event, leftPreviewData) {
        leftPreviewData['is_checked'] = event ? 1 : 0;
        if (event) {
            var i_1 = 0;
            this.leftPreview.map(function (item) {
                item['is_checked'] ? i_1++ : '';
            });
            if (i_1 === this.leftPreview.length) {
                this.is_CheckedAll = true;
            }
        }
        else {
            this.is_CheckedAll = this.is_CheckedAll ? false : this.is_CheckedAll;
        }
    };
    /**
     * Get Data On Copy To Final Description
     */
    PreviewInvoiceComponent.prototype.getDataInRightPreview = function () {
        var _this = this;
        var dataItem = this.leftPreview;
        if (dataItem) {
            dataItem.forEach(function (dataValue) {
                if (dataValue['is_checked'] === 1) {
                    var dataSet = [];
                    dataSet['description_data'] = dataValue['description'];
                    dataSet['amount_data'] = dataValue['amount'];
                    dataSet['inv_account_id_data'] = dataValue['inv_account_id'];
                    _this.rightPreview.push(dataSet);
                }
            });
            this.leftPreview.map(function (item) {
                item['is_checked'] = false;
            });
            this.is_CheckedAll = false;
        }
        this.calculateAmountOfRightPreview();
    };
    /**
     * Add Blank Line to Right Preview
     */
    PreviewInvoiceComponent.prototype.addBlankLineToRightPreview = function () {
        var addData = { 'description_data': '', 'amount_data': '', 'inv_account_id_data': '' };
        this.rightPreview.push(addData);
    };
    /**
     *
     */
    PreviewInvoiceComponent.prototype.calculateAmountOfRightPreview = function () {
        var amountRow = 0;
        var dataRight = this.rightPreview;
        dataRight.forEach(function (rdata) {
            if (Number(rdata['amount_data']) > 0) {
                amountRow += Number(rdata['amount_data']);
            }
        });
        this.grossAmountAsPreview = this._noCommaPipe.transform(this._decimalPipe.transform(amountRow, '1.2-2'));
    };
    /**
     * Submit Invoice Preview
     * @param status_id
     */
    PreviewInvoiceComponent.prototype.onSubmitInvoicePreview = function (status_id, saveGoBack) {
        var _this = this;
        if (saveGoBack === void 0) { saveGoBack = false; }
        var formValue = {};
        var descriptionData = [];
        var rightData = this.rightPreview;
        var sort_order = 0;
        rightData.forEach(function (dataValue) {
            if (dataValue['description_data'].trim() !== '' || dataValue['description_data'].trim() !== null) {
                sort_order = sort_order + 1;
                var DataRearrange = {};
                DataRearrange['id'] = (dataValue['id_data']) ? dataValue['id_data'] : 0;
                DataRearrange['description'] = dataValue['description_data'];
                DataRearrange['amount'] = dataValue['amount_data'];
                DataRearrange['inv_account_id'] = dataValue['inv_account_id_data'];
                DataRearrange['sort_order'] = sort_order;
                descriptionData.push(DataRearrange);
            }
        });
        formValue['description'] = descriptionData;
        formValue['status_id'] = (status_id) ? status_id : 0;
        if (formValue) {
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].INVOICE_SAVE_PREVIEW + '/' + this.invoiceStatusData.id, formValue).subscribe(function (response) {
                if (saveGoBack) {
                    _this.manageWIPInvoice();
                }
                else {
                    _this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].INVOICES_DASHBOARD]);
                }
            });
        }
    };
    /**
     * On Action of Quick Links
     * @param menuName
     */
    PreviewInvoiceComponent.prototype.onOpenQuickMenu = function (menuName) {
        var _this = this;
        switch (menuName) {
            case 'previousInvoices':
                var invoiceData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_12__["convertURLParamToEncode"])({ 'entity_id': this.entityId, 'id': this.ALL });
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].INVOICES_DASHBOARD], { queryParams: invoiceData });
                break;
            case 'billingInformation':
                this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].BILLING_BASIC, {}, { 'compare': { 'equal': { 'entity_id': this.entityId } } }).subscribe(function (response) {
                    var dataItem = response.payload.data;
                    _this.billingBasic = (dataItem) ? dataItem[0] : null;
                    if (_this.billingBasic) {
                        _this._sharedService.setBillingData(_this.billingBasic);
                        _this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].VIEW_BILLING_INFORMATION]);
                    }
                });
                break;
            case 'pendingTickets':
                var jsonD = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_12__["convertURLParamToEncode"])({
                    'entity_id': this.entityId,
                    'tab_id': 0
                });
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].PENDING_TICKETS], { queryParams: jsonD });
                break;
            case 'completedTickets':
                var jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_12__["convertURLParamToEncode"])({
                    'entity_id': this.entityId,
                    'tab_id': 1
                });
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].PENDING_TICKETS], { queryParams: jsonData });
                break;
        }
    };
    PreviewInvoiceComponent.prototype.onConfirmDialog = function (status_id, checkWipAmount) {
        // Need to Check that if amount is greater than zero and account code is missing
        var checkDataIsCorrect = 0;
        var rightData = this.rightPreview;
        rightData.forEach(function (dataValue) {
            if ((dataValue['amount_data'] !== '') && (dataValue['amount_data'] > 0) && (dataValue['inv_account_id_data'] === '' || dataValue['inv_account_id_data'] === 0)) {
                checkDataIsCorrect += 1;
            }
        });
        // If Data in correct then shows warning message
        if (checkDataIsCorrect > 0) {
            this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_11__["ToastErrorMessages"].INVOICE_ACCOUNT_CODE_REQUIRED, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["ToastType"].INFO);
        }
        else {
            if (checkWipAmount > 0) {
                // Check that Gross Amount as per wip and as per preview both are equal or not
                // console.log(this.grossAmountAsPreview);
                // console.log(this.grossAmountAsWip);
                if ((Number(this.grossAmountAsPreview) !== Number(this.grossAmountAsWip)) && (checkWipAmount >= 0)) {
                    this._sharedService.setToastMessage(_utility_validation__WEBPACK_IMPORTED_MODULE_11__["ToastErrorMessages"].WIP_PREVIEW_TOTAL_MISMATCH, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["ToastType"].INFO);
                }
                else if (Number(this.grossAmountAsPreview) === Number(this.grossAmountAsWip)) {
                    if (status_id > 0) {
                        this.onSubmitInvoicePreview(status_id);
                    }
                }
            }
            else {
                if (status_id > 0) {
                    this.onSubmitInvoicePreview(status_id, true);
                }
            }
        }
    };
    Object.defineProperty(PreviewInvoiceComponent.prototype, "invoiceUrl", {
        get: function () {
            return ['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].INVOICES_DASHBOARD];
        },
        enumerable: true,
        configurable: true
    });
    PreviewInvoiceComponent.prototype.manageWIPInvoice = function () {
        this._sharedService.setInvoiceData(this.invoiceStatusData);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].MANAGE_WIP_INVOICE]);
    };
    PreviewInvoiceComponent.prototype.manageWIPInvoiceView = function () {
        this._sharedService.setInvoiceData(this.invoiceStatusData);
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].MANAGE_WIP_INVOICE_VIEW]);
    };
    PreviewInvoiceComponent.prototype.ngOnDestroy = function () {
        this.dragulaService.destroy('SPILL');
    };
    /**
     * On home page route
     */
    PreviewInvoiceComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PreviewInvoiceComponent.prototype, "isView", void 0);
    PreviewInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview-invoice',
            template: __webpack_require__(/*! ./preview-invoice.component.html */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice/preview-invoice.component.html"),
            providers: [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_4__["CommonCrudService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_6__["NoCommaPipe"]],
            styles: [__webpack_require__(/*! ./preview-invoice.component.scss */ "./src/app/admin/billing-module/invoices/invoice-dashboard/manage-wip-invoice/preview-invoice/preview-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_4__["CommonCrudService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_6__["NoCommaPipe"], ng2_dragula__WEBPACK_IMPORTED_MODULE_9__["DragulaService"]])
    ], PreviewInvoiceComponent);
    return PreviewInvoiceComponent;
}());



/***/ })

}]);
//# sourceMappingURL=manage-wip-invoice-manage-wip-invoice-module.js.map