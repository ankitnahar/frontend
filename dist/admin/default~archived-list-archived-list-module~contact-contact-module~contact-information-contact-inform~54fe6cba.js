(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~archived-list-archived-list-module~contact-contact-module~contact-information-contact-inform~54fe6cba"],{

/***/ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-history/archived-list-history.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-history/archived-list-history.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start View history modal -->\r\n<div class=\"modal large-modal history-modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">VIEW HISTORY</div>\r\n\r\n    <div class=\"modal__header__datepicker\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Start date\" [matDatepicker]=\"startDateRef\" (mousedown)=\"startDateRef.open()\"\r\n                   [(ngModel)]=\"startDateValue\" readonly/>\r\n            <mat-datepicker-toggle matSuffix [for]=\"startDateRef\"></mat-datepicker-toggle>\r\n            <mat-datepicker #startDateRef></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"End date\" [matDatepicker]=\"endDateRef\" (mousedown)=\"endDateRef.open()\"\r\n                   [(ngModel)]=\"endDateValue\" readonly/>\r\n            <mat-datepicker-toggle matSuffix [for]=\"endDateRef\"></mat-datepicker-toggle>\r\n            <mat-datepicker #endDateRef></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <ul class=\"view-history-container\">\r\n      <li *ngFor=\"let row of [0,1,2,3]\">\r\n        <a>\r\n          <div class=\"profile-icon\">\r\n            <img src=\"assets/images/profile_placeholder.png\" width=\"28\" height=\"28\" alt=\"\"/>\r\n          </div>\r\n          <div class=\"history-details\">\r\n            <div>\r\n              <h3>Updated By <span>Manish Popat</span></h3>\r\n              <div class=\"history-time\">\r\n                <i class=\"material-icons\">query_builder</i>\r\n                <span>21 May 2018 04:20:00</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <ul class=\"history-content\">\r\n              <li *ngFor=\"let row of [0,1]\">\r\n                <i class=\"material-icons\">done_all</i> Lorem Ipsum is simply dummy text of the printing.\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<div class=\"modal-layer\" (click)=\"onClose()\"></div>\r\n<!-- End View history modal -->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-history/archived-list-history.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-history/archived-list-history.component.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvY29udGFjdC1pbmZvcm1hdGlvbi9jb250YWN0L2FyY2hpdmVkLWxpc3QvYXJjaGl2ZWQtbGlzdC1oaXN0b3J5L2FyY2hpdmVkLWxpc3QtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-history/archived-list-history.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-history/archived-list-history.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: ArchivedListHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedListHistoryComponent", function() { return ArchivedListHistoryComponent; });
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

var ArchivedListHistoryComponent = /** @class */ (function () {
    function ArchivedListHistoryComponent() {
        // Angular Variables
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Date variables
        // minStartDate = new Date();
        // maxStartDate;
        // minEndDate = new Date();
        // maxEndDate;
        this.startDateValue = null;
        this.endDateValue = null;
    }
    ArchivedListHistoryComponent.prototype.ngOnInit = function () {
    };
    /**
     * Close modal method
     */
    ArchivedListHistoryComponent.prototype.onClose = function () {
        this.close.emit(false);
    };
    /**
     * Esc event for close modal
     * @param event
     */
    ArchivedListHistoryComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            //this.sideBarContainer[0].style.display = "block";
            //this.bodyContainer[0].style.marginLeft = "0rem";
            this.onClose();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ArchivedListHistoryComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ArchivedListHistoryComponent.prototype, "onKeydownHandler", null);
    ArchivedListHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archived-list-history',
            template: __webpack_require__(/*! ./archived-list-history.component.html */ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-history/archived-list-history.component.html"),
            styles: [__webpack_require__(/*! ./archived-list-history.component.scss */ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-history/archived-list-history.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ArchivedListHistoryComponent);
    return ArchivedListHistoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-view/archived-list-view.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-view/archived-list-view.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Favorite menu dialog  -->\r\n<div class=\"modal approve-reject-dialog large-modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">\r\n      <img src=\"assets/images/ico.png\" width=\"30\">\r\n      <span>Alok Shukla | MODIFIED ON: <span>25/05/2018</span> <span>14:50:30</span></span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <!-- Star user details -->\r\n        <div class=\"approve-reject-user-details\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 PL-0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Trading Name</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>HEMADRI PATEL</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Technical account manage</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span class=\"fw-500\">Bhavesh Chavda</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Contact person</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>Hasmukh Balndaniya</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">To</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>hasmukh@gmail.com</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Mobile</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>9876543210</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Fax</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>-</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 PR-0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Service</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>Bookkeeping</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Position</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>Director</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Is display in BK checklist</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>Yes</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">CC</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>-</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Office</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>9876543210</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Archive Reason</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>Already in contact</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- End user details -->\r\n      </div>\r\n    </div>\r\n    <div class=\"row MT-10\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"table-container dialog-table-container\">\r\n          <div class=\"table-block\">\r\n            <table>\r\n              <thead>\r\n              <tr>\r\n                <th width=\"10%\">Sr No</th>\r\n                <th width=\"60%\">Notes</th>\r\n                <th width=\"15%\">Added By</th>\r\n                <th width=\"15%\">Added on</th>\r\n              </tr>\r\n              </thead>\r\n\r\n              <tbody>\r\n              <tr>\r\n                <td>1</td>\r\n                <td>(1) For fskladn BAS saisubss adfoie asdn sadf nklad nkasd. (2)For fskladn BAS saisubss adfoie asdn\r\n                  sadf\r\n                  nklad nkasd. (3)For fskladn BAS saisubss adfoie asdn sadf nklad nkasd.\r\n                </td>\r\n                <td>Paul Karmarkar</td>\r\n                <td>29/12/2017</td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td>(1) For fskladn BAS saisubss adfoie asdn sadf nklad nkasd. (2)For fskladn BAS saisubss adfoie asdn\r\n                  sadf\r\n                  nklad nkasd. (3)For fskladn BAS saisubss adfoie asdn sadf nklad nkasd.\r\n                </td>\r\n                <td>Jesteen James</td>\r\n                <td>29/06/2016</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal__footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n      </div>\r\n\r\n      <div class=\"col-md-6 text-right\">\r\n        <!--<button type=\"button\" class=\"btn-default\" (click)=\"onCloseDialog()\">Cancel</button>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--  End Favorite menu dialog  -->\r\n\r\n<!--  Start dialog layer -->\r\n<div class=\"modal-layer\" (click)=\"onClose()\"></div>\r\n<!--  End dialog layer -->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-view/archived-list-view.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-view/archived-list-view.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: ArchivedListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedListViewComponent", function() { return ArchivedListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
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




var ArchivedListViewComponent = /** @class */ (function (_super) {
    __extends(ArchivedListViewComponent, _super);
    function ArchivedListViewComponent(dialogRef, data, _fb) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._fb = _fb;
        return _this;
    }
    ArchivedListViewComponent.prototype.ngOnInit = function () {
    };
    /**
     * Close modal method
     */
    ArchivedListViewComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    /**
     * Esc event for close modal
     * @param event
     */
    ArchivedListViewComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onClose();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ArchivedListViewComponent.prototype, "onKeydownHandler", null);
    ArchivedListViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archived-list-view',
            template: __webpack_require__(/*! ./archived-list-view.component.html */ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-view/archived-list-view.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ArchivedListViewComponent);
    return ArchivedListViewComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/archived-list/archived-list.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>CLIENT</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\"><a (click)=\"onContact()\">CONTACT INFORMATION</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">ARCHIVED LIST</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 leave-type-list\">\r\n          <ul>\r\n            <li>\r\n              <a class=\"teal-color\"><i class=\"material-icons\">fiber_manual_record</i> Accountant</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onToggleFilter()\">\r\n                <span>Filter</span> <i class=\"material-icons\">filter_list</i>\r\n              </a>\r\n            </li>\r\n\r\n            <li *ngIf=\"tabData['export']\">\r\n              <a>\r\n                <span (click)=\"downloadExcel()\">Excel</span> <i class=\"material-icons\">file_download</i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Inner Header -->\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n      <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <i\r\n        class=\"material-icons\">close</i></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"parentClientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Parent Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         (change)=\"onChangeParentEntity($event)\"\r\n                         formControlName=\"parent_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"clientList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"trading_name\"\r\n                         placeholder=\"Trading Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"entity_id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"First name\" formControlName=\"first_name\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Contact person\" formControlName=\"contact_person\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Contact Position\" (selectionChange)=\"selectRefCP.readOnly = false\"\r\n                            readonly formControlName=\"contact_position_id\" #selectRefCP>\r\n                  <mat-option *ngFor=\"let contactPositionData of contactPosition\" [value]=\"contactPositionData.key\">\r\n                    {{contactPositionData.label}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Phone\" formControlName=\"mobile_no\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"ABN Number\" formControlName=\"abn_number\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"TFN Number\" formControlName=\"tfn_number\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"parentTradingName.value\">\r\n          <span class=\"tag__title\">Parent Trading Name:</span>\r\n          <span>\r\n            <ng-select class=\"custom\" [items]=\"parentClientList\"\r\n                       [closeOnSelect]=\"true\"\r\n                       bindLabel=\"trading_name\"\r\n                       placeholder=\"Trading name\"\r\n                       bindValue=\"id\"\r\n                       [virtualScroll]=\"true\"\r\n                       [searchable]=\"true\"\r\n                       [hideSelected]=\"true\"\r\n                       formControlName=\"parent_id\"\r\n                       (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true);onChangeParentEntity($event);\">\r\n              </ng-select>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('parent_id')\">close</mat-icon>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"entityIdTradingField.value\">\r\n          <span class=\"tag__title\">Trading name :</span>\r\n          <span>\r\n\t       <ng-select [items]=\"clientList\"\r\n                    [closeOnSelect]=\"true\"\r\n                    bindLabel=\"trading_name\"\r\n                    placeholder=\"Trading Name\"\r\n                    bindValue=\"id\"\r\n                    [virtualScroll]=\"true\"\r\n                    [searchable]=\"true\"\r\n                    [hideSelected]=\"true\"\r\n                    formControlName=\"entity_id\"\r\n                    (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n            </ng-select>\r\n\t      </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('entity_id')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"firstNameField.value\">\r\n          <span class=\"tag__title\">First name :</span>\r\n          <span>\r\n\t        <mat-form-field>\r\n\t            <input matInput placeholder=\"First person\" formControlName=\"first_name\"\r\n                     (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n\t          </mat-form-field>\r\n\t      </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('first_name')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"contactPersonField.value\">\r\n          <span class=\"tag__title\">Contact person :</span>\r\n          <span>\r\n\t        <mat-form-field>\r\n\t            <input matInput placeholder=\"Contact person\" formControlName=\"contact_person\"\r\n                     (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n\t          </mat-form-field>\r\n\t      </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('contact_person')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"contactPositionIdField.value\">\r\n          <span class=\"tag__title\">Contact Position :</span>\r\n          <span>\r\n\t        <mat-form-field>\r\n\t          <mat-select placeholder=\"Contact Position\" (selectionChange)=\"selectRefCP.readOnly = false\" readonly\r\n                        #selectRefCP formControlName=\"contact_position_id\"\r\n                        (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n\t             <mat-option *ngFor=\"let contactPositionData of contactPosition\" [value]=\"contactPositionData.key\">{{contactPositionData.label}}</mat-option>\r\n\t          </mat-select>\r\n\t        </mat-form-field>\r\n\t      </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('contact_position_id')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"emailField.value\">\r\n          <span class=\"tag__title\">Email :</span>\r\n          <span>\r\n\t        <mat-form-field>\r\n\t            <input matInput placeholder=\"Email\" formControlName=\"email\"\r\n                     (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n\t          </mat-form-field>\r\n\t      </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('email')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"mobileNoField.value\">\r\n          <span class=\"tag__title\">Phone :</span>\r\n          <span>\r\n\t        <mat-form-field>\r\n\t            <input matInput placeholder=\"Phone\" formControlName=\"mobile_no\"\r\n                     (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n\t          </mat-form-field>\r\n\t      </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('mobile_no')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"abnNumberField.value\">\r\n          <span class=\"tag__title\">ABN Number :</span>\r\n          <span>\r\n\t        <mat-form-field>\r\n\t            <input matInput placeholder=\"ABN Number\" formControlName=\"abn_number\"\r\n                     (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n\t          </mat-form-field>\r\n\t      </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('abn_number')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"tfnNumberField.value\">\r\n          <span class=\"tag__title\">TFN Number :</span>\r\n          <span>\r\n\t        <mat-form-field>\r\n\t            <input matInput placeholder=\"TFN Number\" formControlName=\"tfn_number\"\r\n                     (keyup)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\"/>\r\n\t          </mat-form-field>\r\n\t      </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('tfn_number')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\" *ngIf=\"entityIdTradingField.value || firstNameField.value  || contactPersonField.value || contactPositionIdField.value ||\r\nemailField.value || mobileNoField.value || abnNumberField.value || tfnNumberField.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"4%\">Sr.No</th>\r\n            <th width=\"12%\">Parent Trading Name</th>\r\n            <th width=\"12%\"\r\n                (click)=\"getSortData('trading_name', sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Trading Name\r\n              <i *ngIf=\"sortBy === 'trading_name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'trading_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'trading_name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'trading_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"6%\"\r\n                (click)=\"getSortData('first_name', sortBy === 'first_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              First Name\r\n              <i *ngIf=\"sortBy === 'first_name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'first_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'first_name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'first_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i></th>\r\n\r\n            <th width=\"10%\"\r\n                (click)=\"getSortData('contact_person', sortBy === 'contact_person' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Contact Person\r\n              <i *ngIf=\"sortBy === 'contact_person'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'contact_person' && sortOrder === 'asc', 'icon-down' :  sortBy === 'contact_person' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'contact_person' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i></th>\r\n\r\n            <th width=\"9%\"\r\n                (click)=\"getSortData('contact_position_id', sortBy === 'contact_position_id' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Position\r\n              <i *ngIf=\"sortBy === 'contact_position_id'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'contact_position_id' && sortOrder === 'asc', 'icon-down' :  sortBy === 'contact_position_id' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'contact_position_id' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\"\r\n                (click)=\"getSortData('to', sortBy === 'to' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">To\r\n              <i *ngIf=\"sortBy === 'to'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'to' && sortOrder === 'asc', 'icon-down' :  sortBy === 'to' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'to' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\"\r\n                (click)=\"getSortData('cc', sortBy === 'cc' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">CC\r\n              <i *ngIf=\"sortBy === 'cc'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'cc' && sortOrder === 'asc', 'icon-down' :  sortBy === 'cc' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'cc' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"9%\"\r\n                (click)=\"getSortData('mobile_no', sortBy === 'mobile_no' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Phone\r\n              <i *ngIf=\"sortBy === 'mobile_no'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'mobile_no' && sortOrder === 'asc', 'icon-down' :  sortBy === 'mobile_no' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'mobile_no' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"12%\">Remarks</th>\r\n            <th width=\"6%\">\r\n              Actions\r\n            </th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table *ngIf=\"contactList.length\">\r\n            <tbody *ngFor=\"let contactData of contactList; let i = index\">\r\n            <tr [ngClass]=\"{'teal-tr' : contactData.contact_position_id === 2}\">\r\n              <td width=\"4%\">{{i+1}}</td>\r\n              <td width=\"12%\" class=\"word-break\">{{contactData?.parent_name}}</td>\r\n              <td width=\"12%\" class=\"word-break\">{{contactData?.trading_name}}</td>\r\n              <td width=\"6%\">{{contactData.first_name}}</td>\r\n              <td width=\"10%\">{{contactData.contact_person}}</td>\r\n              <td width=\"9%\"><span class=\"orange-color\"><mat-icon\r\n                class=\"grid_icon_trip_origin mat-icon material-icons\">trip_origin</mat-icon></span>\r\n                {{contactData?.contact_position_id > 0 ? getContactPosition(contactData?.contact_position_id) : ''}}\r\n              </td>\r\n              <td width=\"10%\" class=\"word-break\"><span\r\n                *ngFor=\"let tempDataTo of convertJsonStringToArray(contactData?.to)\">{{tempDataTo}}</span></td>\r\n              <td width=\"10%\" class=\"word-break\"><span\r\n                *ngFor=\"let tempDataCC of convertJsonStringToArray(contactData?.cc)\">{{tempDataCC}}</span></td>\r\n              <td width=\"9%\" class=\"word-break\">{{contactData?.mobile_no | checkEmpty}}</td>\r\n              <td width=\"12%\" class=\"word-break\">\r\n                <div class=\"remarks text-overflow-elipsis\">\r\n                  <span [matTooltip]=\"contactData?.contact_remark?.notes\">{{contactData?.contact_remark?.notes | checkEmpty}}</span>\r\n                </div>\r\n              </td>\r\n              <td width=\"6%\">\r\n                <a class=\"wet-asphalt-color MR-5\" (click)=\"onViewContact(contactData)\" [matTooltip]=\"'View'\"><i\r\n                  class=\"material-icons\">remove_red_eye</i></a>\r\n                <a (click)=\"viewContactInformationHistory($event,contactData);\" [matTooltip]=\"'View History'\">\r\n                  <i class=\"material-icons\">history</i></a>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table *ngIf=\"contactList.length\">\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"contactList.length === 0\" class=\"panel-title red-color\">\r\n    No Records Found!\r\n  </div>\r\n</div>\r\n\r\n<!--&lt;!&ndash;item view modal&ndash;&gt;\r\n<div *ngIf=\"activeView == enumView.VIEW_MODAL\">\r\n  <app-contact-view [contactRecord]=\"selectedContactRecord\"\r\n                    [popupStatus]=\"isViewContact\"  (close)=\"activeView = null\"></app-contact-view>\r\n</div>-->\r\n<!-- Start History modal-->\r\n<div *ngIf=\"isOpenHistoryDialog\">\r\n  <app-history-dialog (close)=\"isOpenHistoryDialog = false\"></app-history-dialog>\r\n</div>\r\n<!-- End History modal-->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/archived-list/archived-list.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvY29udGFjdC1pbmZvcm1hdGlvbi9jb250YWN0L2FyY2hpdmVkLWxpc3QvYXJjaGl2ZWQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/archived-list/archived-list.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: Views, ArchivedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedListComponent", function() { return ArchivedListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _contact_view_contact_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contact-view/contact-view.component */ "./src/app/admin/client-module/contact-information/contact/contact-view/contact-view.component.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
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
    Views[Views["FILTER_VIEW_ARCHIVED"] = 0] = "FILTER_VIEW_ARCHIVED";
    Views[Views["HISTORY_MODAL"] = 1] = "HISTORY_MODAL";
    Views[Views["VIEW_MODAL"] = 2] = "VIEW_MODAL";
})(Views || (Views = {}));
var ArchivedListComponent = /** @class */ (function () {
    function ArchivedListComponent(_router, _fb, _sharedService, _commonCrudService, _sharedObjService, dialog) {
        this._router = _router;
        this._fb = _fb;
        this._sharedService = _sharedService;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this.dialog = dialog;
        // Constant Variables
        this.enumView = Views;
        // Data Variables
        this.contactList = [];
        this.clientList = [];
        this.filteredTradingClientList = [];
        this.parentClientList = [];
        this.teamList = [];
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.orJSON = {};
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilterView = false;
        this.isOpenHistoryDialog = false;
        this.selectedContactRecord = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.isViewContact = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.isArchiveContact = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.bkChecklist = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["yesNo"];
        this.contactPosition = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["CONTACTPOSITION"];
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_12__["ADMINTABACCESS"].CLIENT_CONTACT_INFO;
    }
    Object.defineProperty(ArchivedListComponent.prototype, "parentTradingName", {
        get: function () {
            return this.filterForm.get('parent_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchivedListComponent.prototype, "entityIdTradingField", {
        get: function () {
            return this.filterForm.get('entity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchivedListComponent.prototype, "firstNameField", {
        get: function () {
            return this.filterForm.get('first_name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchivedListComponent.prototype, "contactPersonField", {
        get: function () {
            return this.filterForm.get('contact_person');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchivedListComponent.prototype, "contactPositionIdField", {
        get: function () {
            return this.filterForm.get('contact_position_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchivedListComponent.prototype, "emailField", {
        get: function () {
            return this.filterForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchivedListComponent.prototype, "mobileNoField", {
        get: function () {
            return this.filterForm.get('mobile_no');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchivedListComponent.prototype, "serviceIdField", {
        get: function () {
            return this.filterForm.get('service_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchivedListComponent.prototype, "isDisplayBkChecklistField", {
        get: function () {
            return this.filterForm.get('is_display_bk_checklist');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchivedListComponent.prototype, "faxNoField", {
        get: function () {
            return this.filterForm.get('fax_no');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchivedListComponent.prototype, "abnNumberField", {
        get: function () {
            return this.filterForm.get('abn_number');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchivedListComponent.prototype, "tfnNumberField", {
        get: function () {
            return this.filterForm.get('tfn_number');
        },
        enumerable: true,
        configurable: true
    });
    ArchivedListComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.initializationMethod();
    };
    /**
     * Initialization Methods
     */
    ArchivedListComponent.prototype.initializationMethod = function () {
        this.getContactList(1, 'id', 'desc');
        this.createAdvanceFilterForm();
        this.getClientList();
        this.getTeamList();
    };
    /**
     * Create Form for filters
     */
    ArchivedListComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            contact_person: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            contact_position_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            mobile_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            abn_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            tfn_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
        this.advanceFilterForm = this._fb.group({
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            contact_person: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            contact_position_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            mobile_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            abn_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            tfn_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
    };
    /**
     * Get Client List
     */
    ArchivedListComponent.prototype.getClientList = function () {
        var _this = this;
        // console.log(1);
        this._sharedObjService.getClientList({ 'records': 'all' }, {}).subscribe(function (response) {
            _this.clientList = _this.filteredTradingClientList = response;
            _this.parentClientList = response.filter(function (item) { return item.is_parent === 1; });
        });
    };
    /**
     * Default search params for client listing API
     * @returns {{compare: {notequal: {discontinue_stage: number}}}}
     */
    ArchivedListComponent.prototype.getClientSearchParam = function () {
        return {
            compare: {
                notequal: {
                    discontinue_stage: 2
                }
            }
        };
    };
    /**
     * Get Team List
     */
    ArchivedListComponent.prototype.getTeamList = function () {
        var _this = this;
        // console.log(2);
        this._sharedObjService.getTeamList({ 'records': 'all', 'sortBy': 'name', 'sortOrder': 'asc' }, {}).subscribe(function (response) {
            _this.teamList = response;
        });
    };
    /**
     *
     * @param {number} pageNumber
     * @param {string} key
     * @param {string} val
     */
    ArchivedListComponent.prototype.getContactList = function (pageNumber, key, val) {
        var _this = this;
        // console.log(3);
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].CLIENT_CONTACT, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.handleContactResponse(response);
        });
    };
    /**
     * Handle Contact List Response
     * @param response
     */
    ArchivedListComponent.prototype.handleContactResponse = function (response) {
        this.contactList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Display Address State
     * @param {number} position_id
     * @returns {string}
     */
    ArchivedListComponent.prototype.getContactPosition = function (position_id) {
        return this.contactPosition.filter(function (elem) { return elem.key === position_id; })[0].label;
    };
    /**
     * Open filter method
     */
    ArchivedListComponent.prototype.onOpenFilter = function () {
        this.activeView = this.enumView.FILTER_VIEW_ARCHIVED;
    };
    /**
     * Close filter method
     */
    ArchivedListComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    /**
     * Toogle Filter
     */
    ArchivedListComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Pagination page change method
     * @param event
     */
    ArchivedListComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getContactList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Export to Excel
     */
    ArchivedListComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        // console.log(4);
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].CLIENT_CONTACT_EXPORT, params, this.getSearchParam(), ' Archived Contact ', 0).subscribe(function (response) {
        });
    };
    /**
     * Open view modal method
     * @param contact
     */
    /*  onViewContact(contact: Contact) {
        this.activeView = this.enumView.VIEW_MODAL;
        this.selectedContactRecord.next(contact);
        this.isViewContact.next(true);
      }*/
    ArchivedListComponent.prototype.onViewContact = function (contact) {
        var dialogRef = this.dialog.open(_contact_view_contact_view_component__WEBPACK_IMPORTED_MODULE_11__["ContactViewComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                contact: contact
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * Contact information page redirect
     */
    ArchivedListComponent.prototype.onContact = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].CONTACT_INFORMATION]);
    };
    /**
     * Open modal methods
     * @param dialogName
     */
    ArchivedListComponent.prototype.onOpenModal = function (dialogName) {
        switch (dialogName) {
            case 'history':
                this.activeView = this.enumView.HISTORY_MODAL;
                break;
        }
    };
    /**
     * Close modal method
     * @param event
     */
    ArchivedListComponent.prototype.onCloseDialog = function (event) {
        this.activeView = event;
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    ArchivedListComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue('');
        this.advanceFilterForm.get(elementName).setValue('');
        if (elementName === 'contact_position_id' || elementName === 'parent_id') {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'first_name' || elementName === 'contact_person' || elementName === 'email' || elementName === 'mobile_no' || elementName === 'abn_number' || elementName === 'tfn_number') {
            delete this.likeJSON[elementName];
        }
        else if (elementName === 'entity_id' || elementName === 'trading_entity') {
            delete this.inJSON[elementName];
        }
        this.getContactList(1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    ArchivedListComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.likeJSON = {};
        this.equalJSON = {};
        this.inJSON = {};
        this.isOpenFilterView = false;
        this.getContactList(1, 'id', 'desc');
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    ArchivedListComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
                'contact_person': form.value['contact_person'],
                'first_name': form.value['first_name'],
                'contact_position_id': form.value['contact_position_id'],
                'email': form.value['email'],
                'mobile_no': form.value['mobile_no'],
                'abn_number': form.value['abn_number'],
                'tfn_number': form.value['tfn_number']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    ArchivedListComponent.prototype.setAdvanceFilter = function (form, flag) {
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
        // For Entity ID
        if (form.valid && (form.value !== {})) {
            var entity_id = [];
            // if (form.value['entity_id'] !== "" && form.value["trading_entity"]) {
            //   entity_id.push(form.value['trading_entity']);
            //   delete form.value['trading_entity'];
            // }
            // if (entity_id.length) {
            //   form.value['entity_id'] = entity_id.join();
            // }
            if (form.value['email']) {
                form.value['to'] = form.value['email'];
                form.value['cc'] = form.value['email'];
                delete form.value['email'];
            }
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'contact_position_id' || key === 'parent_id' || key === 'entity_id') {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'first_name' || key === 'contact_person' || key === 'mobile_no' || key === 'abn_number' || key === 'tfn_number') {
                        this.likeJSON[key] = form.value[key];
                    }
                    else if (key === 'to' || key === 'cc') {
                        this.orJSON[key] = form.value[key];
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getContactList(1, 'id', 'desc');
        }
    };
    /**
     * Esc event for close modal
     * @param event
     */
    ArchivedListComponent.prototype.onKeydownHandler = function (event) {
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
    ArchivedListComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
    ArchivedListComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getContactList(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    ArchivedListComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        var filterData = { 'is_archived': 0 };
        if (filterData) {
            filter['notequal'] = filterData;
        }
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || filterData) {
            params['compare'] = filter;
        }
        if (Object.keys(this.inJSON).length !== 0) {
            params['in'] = this.inJSON;
        }
        if (Object.keys(this.orJSON).length !== 0) {
            params['or'] = { 'like': [this.orJSON] };
        }
        return params;
    };
    /**
     * Convert json string to array
     * @param field
     * @returns {string[]}
     */
    ArchivedListComponent.prototype.convertJsonStringToArray = function (item) {
        if (item && item.length > 0) {
            return item.split(',');
        }
    };
    /**
     * View Contact Information History
     * @param event
     * @param {Contact} contact
     */
    ArchivedListComponent.prototype.viewContactInformationHistory = function (event, contact) {
        event.stopPropagation();
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].CLIENT_CONTACT_HISTORY + '/' + contact.id,
        };
        this._sharedService.setHistoryURL(value);
        this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
    };
    /**
     * On home page route
     */
    ArchivedListComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * On Change Parent Entity
     * @param event
     */
    ArchivedListComponent.prototype.onChangeParentEntity = function (event) {
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
    ], ArchivedListComponent.prototype, "onKeydownHandler", null);
    ArchivedListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archived-list',
            template: __webpack_require__(/*! ./archived-list.component.html */ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list.component.html"),
            styles: [__webpack_require__(/*! ./archived-list.component.scss */ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_10__["SharedObjService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ArchivedListComponent);
    return ArchivedListComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/archived-list/archived-list.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ArchivedListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedListModule", function() { return ArchivedListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _archived_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./archived-list.component */ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list.component.ts");
/* harmony import */ var _archived_list_history_archived_list_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./archived-list-history/archived-list-history.component */ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-history/archived-list-history.component.ts");
/* harmony import */ var _archived_list_view_archived_list_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./archived-list-view/archived-list-view.component */ "./src/app/admin/client-module/contact-information/contact/archived-list/archived-list-view/archived-list-view.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'archived-list',
        component: _archived_list_component__WEBPACK_IMPORTED_MODULE_3__["ArchivedListComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_6__["AdminAuthGuard"]]
    }
];
var ArchivedListModule = /** @class */ (function () {
    function ArchivedListModule() {
    }
    ArchivedListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _archived_list_component__WEBPACK_IMPORTED_MODULE_3__["ArchivedListComponent"],
                _archived_list_history_archived_list_history_component__WEBPACK_IMPORTED_MODULE_4__["ArchivedListHistoryComponent"],
                _archived_list_view_archived_list_view_component__WEBPACK_IMPORTED_MODULE_5__["ArchivedListViewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_7__["UtilityModule"]
            ],
            exports: [],
            entryComponents: [_archived_list_view_archived_list_view_component__WEBPACK_IMPORTED_MODULE_5__["ArchivedListViewComponent"]]
        })
    ], ArchivedListModule);
    return ArchivedListModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~archived-list-archived-list-module~contact-contact-module~contact-information-contact-inform~54fe6cba.js.map