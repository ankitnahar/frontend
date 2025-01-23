(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~update-client-update-client-module~view-update-client-view-update-client-module"],{

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

/***/ "./src/app/admin/client-module/view-client/view-client.model.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-client.model.ts ***!
  \**********************************************************************/
/*! exports provided: Clients, CreatedBy, QualityCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clients", function() { return Clients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedBy", function() { return CreatedBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityCheck", function() { return QualityCheck; });
var Clients = /** @class */ (function () {
    function Clients() {
    }
    Object.defineProperty(Clients.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "billing_name", {
        get: function () {
            return this._billing_name;
        },
        set: function (value) {
            this._billing_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "trading_name", {
        get: function () {
            return this._trading_name;
        },
        set: function (value) {
            this._trading_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "is_document", {
        get: function () {
            return this._is_document;
        },
        set: function (value) {
            this._is_document = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "discontinue_stage", {
        get: function () {
            return this._discontinue_stage;
        },
        set: function (value) {
            this._discontinue_stage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "is_service", {
        get: function () {
            return this._is_service;
        },
        set: function (value) {
            this._is_service = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "module_id", {
        get: function () {
            return this._module_id;
        },
        set: function (value) {
            this._module_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "created_by", {
        get: function () {
            return this._created_by;
        },
        set: function (value) {
            this._created_by = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "ap_notes", {
        get: function () {
            return this._ap_notes;
        },
        set: function (value) {
            this._ap_notes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "ar_notes", {
        get: function () {
            return this._ar_notes;
        },
        set: function (value) {
            this._ar_notes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "bk_notes", {
        get: function () {
            return this._bk_notes;
        },
        set: function (value) {
            this._bk_notes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "bk_review_notes", {
        get: function () {
            return this._bk_review_notes;
        },
        set: function (value) {
            this._bk_review_notes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "dm_notes", {
        get: function () {
            return this._dm_notes;
        },
        set: function (value) {
            this._dm_notes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "payroll_notes", {
        get: function () {
            return this._payroll_notes;
        },
        set: function (value) {
            this._payroll_notes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "software_notes", {
        get: function () {
            return this._software_notes;
        },
        set: function (value) {
            this._software_notes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "version_notes", {
        get: function () {
            return this._version_notes;
        },
        set: function (value) {
            this._version_notes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "tax_notes", {
        get: function () {
            return this._tax_notes;
        },
        set: function (value) {
            this._tax_notes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "xero_email_id", {
        get: function () {
            return this._xero_email_id;
        },
        set: function (value) {
            this._xero_email_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "myob_email_id", {
        get: function () {
            return this._myob_email_id;
        },
        set: function (value) {
            this._myob_email_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "is_parent", {
        get: function () {
            return this._is_parent;
        },
        set: function (value) {
            this._is_parent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "parent_entity", {
        get: function () {
            return this._parent_entity;
        },
        set: function (value) {
            this._parent_entity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "is_dashboard", {
        get: function () {
            return this._is_dashboard;
        },
        set: function (value) {
            this._is_dashboard = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clients.prototype, "billing_from", {
        get: function () {
            return this._billing_from;
        },
        set: function (value) {
            this._billing_from = value;
        },
        enumerable: true,
        configurable: true
    });
    return Clients;
}());

var CreatedBy = /** @class */ (function () {
    function CreatedBy() {
    }
    Object.defineProperty(CreatedBy.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreatedBy.prototype, "userfullname", {
        get: function () {
            return this._userfullname;
        },
        set: function (value) {
            this._userfullname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreatedBy.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    return CreatedBy;
}());

var QualityCheck = /** @class */ (function () {
    function QualityCheck() {
    }
    Object.defineProperty(QualityCheck.prototype, "responseData", {
        get: function () {
            return this._responseData;
        },
        set: function (value) {
            this._responseData = value;
        },
        enumerable: true,
        configurable: true
    });
    return QualityCheck;
}());



/***/ })

}]);
//# sourceMappingURL=default~update-client-update-client-module~view-update-client-view-update-client-module.js.map