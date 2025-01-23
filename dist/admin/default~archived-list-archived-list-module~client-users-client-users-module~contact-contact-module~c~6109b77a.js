(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~archived-list-archived-list-module~client-users-client-users-module~contact-contact-module~c~6109b77a"],{

/***/ "./src/app/admin/client-module/contact-information/contact/contact-view/contact-view.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/contact-view/contact-view.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start contact view menu dialog  -->\r\n<div class=\"modal large-modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">\r\n      <span>Created By: {{contact?.created_by?.created_by}} | Created On: <span>{{contact?.created_on | date : \"dd-MM-yyyy HH:mm:ss\"}}</span></span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <!-- Star user details -->\r\n        <div class=\"approve-reject-user-details\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 PL-0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Parent Trading Name</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.parent_name}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Trading Name</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.trading_name}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">TAM</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.tam_name}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">First Name</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.first_name}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Contact Person</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.contact_person}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">To</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.to}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Mobile</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.mobile_no}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Fax</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.fax_no}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 PR-0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Service</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0 word-break\">\r\n                  <span class=\"MR-5\">{{contact?.service_name}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Position</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.contact_position_id > 0 ? getContactPosition(contact?.contact_position_id) : ''}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Is display in BK checklist</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.is_display_bk_checklist > 0 ? getIsBkChecklist(contact?.is_display_bk_checklist) : ''}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">CC</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0 word-break\">\r\n                  <span *ngFor=\"let tempDataCC of convertJsonStringToArray(contact?.cc)\"\r\n                        class=\"MR-5\">{{tempDataCC}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Office</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.office_no}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Is Feedback Contact?</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.is_feedback_contact > 0 ? getIsBkChecklist(contact?.is_feedback_contact) : ''}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\" *ngIf=\"contact?.is_feedback_contact > 0\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Feedback Email</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.feedback_email}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\" *ngIf=\"contact?.is_display_bk_checklist > 0\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">From Email</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.from_email}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Is Client Login Access?</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.is_login > 0 ? getIsBkChecklist(contact?.is_login) : ''}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row MT-20\" *ngIf=\"contact?.is_archived ===  1\">\r\n                <div class=\"col-md-6 PL-0\">\r\n                  <label class=\"fw-500\">Archive Reason</label>\r\n                </div>\r\n                <div class=\"col-md-6 PR-0\">\r\n                  <span>{{contact?.archived_reason}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- End user details -->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"contactRemark.length\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"table-container dialog-table-container\">\r\n          <div class=\"table-block\">\r\n            <table>\r\n              <thead>\r\n              <tr>\r\n                <th width=\"10%\">Sr. No</th>\r\n                <th width=\"60%\">Notes</th>\r\n                <th width=\"15%\">Created By</th>\r\n                <th width=\"15%\">Created on</th>\r\n              </tr>\r\n              </thead>\r\n\r\n              <tbody>\r\n              <tr *ngFor=\"let contactRemarkData of contactRemark; let i = index\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{contactRemarkData?.notes}}</td>\r\n                <td>{{contactRemarkData?.created_by?.userfullname}}</td>\r\n                <td>{{contactRemarkData?.created_on | date : \"dd-MM-yyyy\"}}</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal__footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n      </div>\r\n\r\n      <div class=\"col-md-6 text-right\">\r\n        <!--<button type=\"button\" class=\"btn-default\" (click)=\"onCloseDialog()\">Cancel</button>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--  End contact view menu dialog  -->\r\n\r\n<!--  Start dialog layer -->\r\n<div class=\"modal-layer\" (click)=\"onClose()\"></div>\r\n<!--  End dialog layer -->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/contact-information/contact/contact-view/contact-view.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/contact-information/contact/contact-view/contact-view.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ContactViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactViewComponent", function() { return ContactViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
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





var ContactViewComponent = /** @class */ (function () {
    function ContactViewComponent(dialogRef, data, _commonCrudService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._commonCrudService = _commonCrudService;
        // Angular Variables
        // Data Variables
        this.contact = null;
        this.contactRemark = [];
        this.bkChecklist = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNo"];
        this.contactPosition = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["CONTACTPOSITION"];
    }
    ContactViewComponent.prototype.ngOnInit = function () {
        this.contact = this.data.contact;
        if (this.contact) {
            this.getRemarks();
        }
    };
    /**
     * Get Contact Remark
     * @param contact_id
     */
    ContactViewComponent.prototype.getRemarks = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_3__["AdminAPI"].CLIENT_CONTACT_REMARK, this.contact.id, {
            'records': 'all',
            'sortBy': 'id',
            'sortOrder': 'desc'
        }, {}).subscribe(function (response) {
            _this.handleContactRemarkResponse(response);
        });
    };
    /**
     * Handle Contact Remark Response
     * @param response
     */
    ContactViewComponent.prototype.handleContactRemarkResponse = function (response) {
        this.contactRemark = response.payload.data;
    };
    /**
     * Close modal method
     */
    ContactViewComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    /**
     * Display BK Checklist State
     * @param {number} is_display_bk_checklist
     * @returns {string}
     */
    ContactViewComponent.prototype.getIsBkChecklist = function (is_display_bk_checklist) {
        return this.bkChecklist.filter(function (elem) { return elem.key === is_display_bk_checklist; })[0].label;
    };
    /**
     * Display Contact Position
     * @param {number} position_id
     * @returns {string}
     */
    ContactViewComponent.prototype.getContactPosition = function (position_id) {
        return this.contactPosition.filter(function (elem) { return elem.key === position_id; })[0].label;
    };
    /**
     * Esc event for close modal
     * @param event
     */
    ContactViewComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.onClose();
        }
    };
    /**
     * Convert json string to array
     * @param field
     * @returns {string[]}
     */
    ContactViewComponent.prototype.convertJsonStringToArray = function (item) {
        if (item.length > 0) {
            return item.split(', ');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ContactViewComponent.prototype, "onKeydownHandler", null);
    ContactViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-view',
            template: __webpack_require__(/*! ./contact-view.component.html */ "./src/app/admin/client-module/contact-information/contact/contact-view/contact-view.component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__["CommonCrudService"]])
    ], ContactViewComponent);
    return ContactViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~archived-list-archived-list-module~client-users-client-users-module~contact-contact-module~c~6109b77a.js.map