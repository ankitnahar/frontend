(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-information-view-information-module"],{

/***/ "./src/app/admin/client-module/information-required/information-required-tab/view-information/view-information.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/information-required/information-required-tab/view-information/view-information.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin (Administration)Update Information html view -->\r\n<div class=\"admin-manage-users-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>CLIENT</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span><a (click)=\"onGoInformationRequired()\">INFORMATION REQUIRED</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">VIEW INFORMATION</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\" *ngIf=\"informationData?.parent_id > 0\"> Parent Client : {{informationData?.parent_name}} | </span>\r\n          <span>{{informationData?.trading_name}}</span>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <form [formGroup]=\"editInformationForm\" (submit)=\"onSubmit(editInformationForm)\">\r\n\r\n    <div>\r\n      <span class=\"panel-title\">Frequency:</span> <label>{{informationData?.frequency_name}}</label>\r\n      <span class=\"panel-title\">Trigger Period:</span> <label>{{informationData?.start_period | date : 'dd-MM-yyyy'}} TO\r\n      {{informationData?.end_period | date : 'dd-MM-yyyy'}}</label>\r\n      <span class=\"panel-title\">Subject:</span>{{editInformationForm.get('subject').value}}\r\n      <!-- Start grid -->\r\n      <div class=\"expand-grid\">\r\n        <div class=\"expand-grid__thead\">\r\n          <table class=\"PT-0\">\r\n            <thead>\r\n            <tr>\r\n              <th width=\"4%\">Sr. No</th>\r\n              <th width=\"9%\">Information</th>\r\n              <th width=\"9%\">Type of Account</th>\r\n              <th width=\"8%\">Account No</th>\r\n              <th width=\"10%\">Period</th>\r\n              <th width=\"20%\">Befree Comments</th>\r\n              <th width=\"5%\">Documents</th>\r\n              <th width=\"10%\">Answer</th>\r\n              <th width=\"10%\">Client Comments</th>\r\n              <th width=\"15%\">Status</th>\r\n            </tr>\r\n            </thead>\r\n          </table>\r\n          <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n            <table>\r\n              <tbody *ngFor=\"let updateinfo of getInformationArray().controls; let i = index\">\r\n              <tr [ngClass]=\"{'is-active-row' : trIndex === i}\" class=\"hover-icons row-data\">\r\n                <td (click)=\"openRow(i)\" width=\"4%\">\r\n                  {{i + 1}}\r\n                </td>\r\n                <td width=\"9%\" class=\"word-break\">{{updateinfo.value['bank_other']}}</td>\r\n                <td width=\"9%\" class=\"word-break\">{{updateinfo.value['type_account']}}</td>\r\n                <td width=\"8%\" class=\"word-break\">{{updateinfo.value['account_no']}}</td>\r\n                <td width=\"10%\" class=\"word-break\">{{updateinfo.value['start_period'] | date: 'dd-MM-yyyy'}} To {{ updateinfo.value['end_period'] | date: 'dd-MM-yyyy' }}</td>\r\n                <td width=\"20%\" class=\"word-break\">{{updateinfo.value['befree_comment']}}</td>\r\n                <td width=\"5%\">\r\n                  <mat-icon matBadge=\"{{getDocumentArray(i).controls.length}}\" matBadgeColor=\"warn\"\r\n                            matTooltip=\"View Document\" *ngIf=\"getDocumentArray(i).controls.length > 0\" class=\"primary-color\" (click)=\"openRow(i)\">cloud_done\r\n                  </mat-icon>\r\n                </td>\r\n                <td width=\"10%\" class=\"word-break\">{{getAnswerName(updateinfo.get('answer_type').value)}}</td>\r\n                <td width=\"10%\" class=\"word-break\">{{updateinfo.value['client_comment']}}</td>\r\n                <td width=\"15%\" class=\"word-break\">{{getStatusName(updateinfo.get('status_id').value)}}</td>\r\n              </tr>\r\n              <tr *ngIf=\"trIndex === i\" class=\"inner-data\">\r\n                <div class=\"row PT-10\">\r\n                  <div class=\"col-md-6\" *ngFor=\"let documentData of getDocumentArray(i).controls; let j = index\">\r\n                    <div class=\"inner-data__view\">\r\n                      <div class=\"PT-5\">{{documentData.value['is_client'] === 1 ? 'Client' : 'Befree'}} :</div>\r\n                      <div>\r\n                      <a (click)=\"onOpenDocumentFile(documentData.value)\" *ngIf=\"documentData.value['is_drive'] === 1\"\r\n                         class=\"cursor-pointer v-align-middle\">\r\n                        <mat-icon>remove_red_eye</mat-icon>{{documentData.get('document_name').value}}\r\n                      </a>\r\n                      <a (click)=\"downloadDocument(documentData)\" *ngIf=\"documentData.value['is_drive'] === 0\"\r\n                         class=\"cursor-pointer v-align-middle\">\r\n                        <mat-icon class=\"v-align-middle primary-color\">get_app</mat-icon>{{documentData.get('document_name').value}}\r\n                      </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-md-12 MB-20 information-card\">\r\n        <div class=\"col-md-8 PL-0\">\r\n          <mat-card>\r\n\r\n            <div class=\"panel-title ML-0\">Additional Information</div>\r\n            <!-- Start Table -->\r\n            <div class=\"expand-grid\">\r\n              <div class=\"expand-grid__thead\">\r\n                <table *ngIf=\"additionalInformationListing.length\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th width=\"8%\">Sr. No</th>\r\n                    <th width=\"40%\">Additional Information</th>\r\n                    <th width=\"25%\">Document</th>\r\n                    <th width=\"27%\">Client Comment</th>\r\n                  </tr>\r\n                  </thead>\r\n                </table>\r\n\r\n                <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n                  <table>\r\n                    <tbody *ngFor=\"let updateAdditionalinfo of additionalInformationListing; let j = index\">\r\n                    <tr [ngClass]=\"{'is-active-row' : trIndexInner === j}\" class=\"hover-icons row-data\">\r\n                      <td width=\"8%\">\r\n                        {{j + 1}}\r\n                      </td>\r\n                      <td width=\"40%\" class=\"word-break\">{{updateAdditionalinfo?.comment}}</td>\r\n                      <td width=\"25%\" *ngIf=\"updateAdditionalinfo['document'].length\">\r\n                        <mat-icon matBadge=\"{{updateAdditionalinfo['document'].length}}\" matBadgeColor=\"warn\"\r\n                                  matTooltip=\"View Document\" class=\"primary-color\" *ngIf=\"updateAdditionalinfo['document'].length\" (click)=\"openRowAdditionalComments(j)\">cloud_done\r\n                        </mat-icon>\r\n                      </td>\r\n                      <td width=\"27%\" class=\"word-break\">{{updateAdditionalinfo?.client_comment}}</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"trIndexInner === j\" class=\"inner-data\">\r\n                      <div class=\"row PT-10\">\r\n                        <div class=\"col-md-6\"*ngFor=\"let documentsList of updateAdditionalinfo['document']; let k = index\">\r\n                          <div class=\"inner-data__view\">\r\n                            <div class=\"PT-5\">{{documentsList?.is_client === 1 ? 'Client' : 'Befree'}} :</div>\r\n                            <div>\r\n                        <a (click)=\"onOpenDocumentFile(documentsList)\" *ngIf=\"documentsList?.is_drive === 1\"\r\n                           class=\"cursor-pointer\">\r\n                          <mat-icon>remove_red_eye</mat-icon>{{documentsList?.document_name}}\r\n                        </a>\r\n                        <a (click)=\"downloadDocument(documentsList, 1)\" *ngIf=\"documentsList?.is_drive === 0\"\r\n                           class=\"cursor-pointer\">\r\n                          <mat-icon class=\"v-align-middle\">get_app</mat-icon>{{documentsList?.document_name}}\r\n                        </a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </tr>\r\n\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <table *ngIf=\"isSendToClient\">\r\n                  <tfoot>\r\n                  <tr>\r\n                    <td colspan=\"8\" class=\"\"></td>\r\n                    <td colspan=\"2\" class=\"PR-10 text-right\">\r\n                      <mat-label>Reminder Days</mat-label>\r\n                      : <label class=\"fw-500 red-color\">{{editInformationForm.get('reminder').value === -1 ? 'N/A' : editInformationForm.get('reminder').value === 0 ? 'Stop' : editInformationForm.get('reminder').value}}</label>\r\n                    </td>\r\n                  </tr>\r\n                  </tfoot>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <!-- End Grid -->\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-md-12 MB-20\">\r\n        <div class=\"col-md-6 PL-0\" *ngIf=\"informationData?.sendback_reason_tm\">\r\n          <span class=\"panel-title\"> Send Back Reason to TM :</span> {{informationData?.sendback_reason_tm}}\r\n        </div>\r\n        <div class=\"col-md-6 PL-0\" *ngIf=\"informationData?.sendback_reason_atl\">\r\n          <span class=\"panel-title\">  Send Back Reason to ATL :</span> {{informationData?.sendback_reason_atl}}\r\n        </div>\r\n        <div class=\"col-md-6 PL-0\" *ngIf=\"informationData?.sendback_reason_tl\">\r\n          <span class=\"panel-title\"> Send Back Reason to TL :</span> {{informationData?.sendback_reason_tl}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/information-required/information-required-tab/view-information/view-information.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/information-required/information-required-tab/view-information/view-information.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".information-card .mat-card {\n  border: 1px solid #dcdcdc;\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vY2xpZW50LW1vZHVsZS9pbmZvcm1hdGlvbi1yZXF1aXJlZC9pbmZvcm1hdGlvbi1yZXF1aXJlZC10YWIvdmlldy1pbmZvcm1hdGlvbi9DOlxcd2FtcDY0XFx3d3dcXGhrX2Zyb250ZW5kL3Byb2plY3RzXFxhZG1pblxcc3JjXFxhcHBcXGFkbWluXFxjbGllbnQtbW9kdWxlXFxpbmZvcm1hdGlvbi1yZXF1aXJlZFxcaW5mb3JtYXRpb24tcmVxdWlyZWQtdGFiXFx2aWV3LWluZm9ybWF0aW9uXFx2aWV3LWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vY2xpZW50LW1vZHVsZS9pbmZvcm1hdGlvbi1yZXF1aXJlZC9pbmZvcm1hdGlvbi1yZXF1aXJlZC10YWIvdmlldy1pbmZvcm1hdGlvbi92aWV3LWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm9ybWF0aW9uLWNhcmQge1xyXG4gIC5tYXQtY2FyZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/client-module/information-required/information-required-tab/view-information/view-information.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/information-required/information-required-tab/view-information/view-information.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: ViewInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInformationComponent", function() { return ViewInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-user.service */ "./src/utility/shared-service/shared-user.service.ts");
/* harmony import */ var _update_information_send_to_client_dialog_send_to_client_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update-information/send-to-client-dialog/send-to-client-dialog.component */ "./src/app/admin/client-module/information-required/information-required-tab/update-information/send-to-client-dialog/send-to-client-dialog.component.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "../../node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _update_information_send_back_to_staff_dialog_send_back_to_staff_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../update-information/send-back-to-staff-dialog/send-back-to-staff-dialog.component */ "./src/app/admin/client-module/information-required/information-required-tab/update-information/send-back-to-staff-dialog/send-back-to-staff-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
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

















var ViewInformationComponent = /** @class */ (function (_super) {
    __extends(ViewInformationComponent, _super);
    function ViewInformationComponent(_router, dialog, _fb, _commonCrudService, _sharedService, _sharedUserService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this.dialog = dialog;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this._sharedUserService = _sharedUserService;
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_8__["ValidationConstantMessage"]();
        // Data Variables
        _this.updateInformation = [];
        _this.informationStatus = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_12__["information_status"];
        _this.informationAnswerType = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_12__["information_answer_type"];
        _this.moveTo = null;
        _this.uploadDoc = new FormData();
        _this.docArray = [];
        _this.additionalInformationListing = [];
        _this.snoozeOrReminderDays = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_12__["SnoozeOrReminderDays"];
        // State variables
        _this.trIndex = -1;
        _this.trIndexInner = -1;
        _this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_15__["ADMINTABACCESS"].INFORMATION_REQUIRED;
        _this.isSendToClient = false;
        _this.googleMetaData = [];
        _this.informationData = _this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_12__["GLOBALDATAKEYS"].INFORMATION_REQUIRED);
        return _this;
    }
    ViewInformationComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.isSendToClient = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'sent_to_client', 1);
        this.createEditInformationForm();
        this.createAdditionalInfoForm();
        this.getBasicInformation();
        this.getAdditionalInformationListing();
    };
    /**
     * Get Basic Information
     */
    ViewInformationComponent.prototype.getBasicInformation = function () {
        var _this = this;
        if (this.informationData && this.informationData.id > 0) {
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_VIEW, this.informationData.id).subscribe(function (response) {
                // this.informationData = response.payload.data;
                var informationData = (response.payload.data['detail']) ? response.payload.data['detail'] : [];
                var informationAdditionalData = (response.payload.data['adddetail']) ? response.payload.data['adddetail'] : [];
                if (informationData.length) {
                    var i_1 = 0;
                    informationData.forEach(function (item) {
                        _this.getInformationArray().push(_this.createInfoDetailItem(item));
                        if (item['document'] && item['document'].length) {
                            item['document'].forEach(function (doc) {
                                _this.getDocumentArray(i_1).push(_this.createDocumentItem(doc));
                            });
                        }
                        i_1++;
                    });
                }
            });
        }
    };
    /**
     * Create Edit Information Form
     */
    ViewInformationComponent.prototype.createEditInformationForm = function () {
        this.editInformationForm = this._fb.group({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.informationData.subject ? this.informationData.subject : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            reminder: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.informationData.reminder),
            infoDetail: this._fb.array([]),
            additional_info: this._fb.array([]),
            stage_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            is_draft: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    /**
     * Create Info Detail Item
     */
    ViewInformationComponent.prototype.createInfoDetailItem = function (item) {
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.id : ''),
            info_detail_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.information_id : ''),
            bank_other: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.bank_other : ''),
            start_period: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.start_period : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            end_period: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.end_period : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            type_account: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.type_account : ''),
            account_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.account_no : ''),
            befree_comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.befree_comment : ''),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.status_id : ''),
            answer_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.answer_type : ''),
            client_comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.client_comment : ''),
            documents: this._fb.array([])
        });
    };
    /**
     * Create Document Item
     */
    ViewInformationComponent.prototype.createDocumentItem = function (item) {
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.id : null),
            information_detail_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.information_detail_id : null),
            document_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.document_name : null),
            document_path: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.document_path : null),
            document_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.document_title : null),
            is_drive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.is_drive : null),
            is_client: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.is_client : null),
            file_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.file_id : null),
            mime_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.mime_type : null),
        });
    };
    /**
     * Create Info Additional Info Detail Item
     */
    ViewInformationComponent.prototype.createAdditionalInfoForm = function (item) {
        this.editAdditionalInformationForm = this._fb.group({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.comment : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    /**
     * Get Information Array
     */
    ViewInformationComponent.prototype.getInformationArray = function () {
        return this.editInformationForm.get('infoDetail');
    };
    /**
     * Get Document Array
     */
    ViewInformationComponent.prototype.getDocumentArray = function (index) {
        return this.getInformationArray().controls[index].get('documents');
    };
    // Events
    ViewInformationComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    ViewInformationComponent.prototype.openRowAdditionalComments = function (i) {
        this.trIndexInner = (this.trIndexInner !== i) ? i : -1;
    };
    /**
     * On home page route
     */
    ViewInformationComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    ViewInformationComponent.prototype.onGoInformationRequired = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].INFORMATION_REQUIRED]);
    };
    /**
     * On Send to client
     * @param information
     */
    ViewInformationComponent.prototype.onSendtoClient = function (information) {
        var dialogRef = this.dialog.open(_update_information_send_to_client_dialog_send_to_client_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SendToClientDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                informationRequired: information,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * On Send to Staff or TL
     * @param information
     * @param type
     */
    ViewInformationComponent.prototype.onSendtoStaff = function (information, typeInfo, stageId) {
        var dialogRef = this.dialog.open(_update_information_send_back_to_staff_dialog_send_back_to_staff_dialog_component__WEBPACK_IMPORTED_MODULE_13__["SendBackToStaffDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                informationRequired: information,
                type: typeInfo,
                status_id: stageId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
            }
        });
    };
    /**
     * On Button Click need to update status & is_draft
     * @param stageId
     * @param isDraft
     */
    ViewInformationComponent.prototype.updateStatusIdWithDraft = function (stageId, isDraft, moveTo) {
        this.editInformationForm.get('is_draft').setValue(isDraft);
        this.editInformationForm.get('stage_id').setValue(stageId);
        this.moveTo = moveTo;
    };
    /**
     * On Submit Edit Information
     * @param form
     */
    ViewInformationComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var infoDetail = form.value['infoDetail'];
        form.value['infoDetail'] = JSON.stringify(form.value['infoDetail']);
        if (this.moveTo !== 'Client') {
            var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogComponent"], {
                data: {
                    content: 'Are you sure you want to send it to ' + this.moveTo + '?'
                }
            });
            dialogRef.afterClosed().subscribe(function (value) {
                if (value) {
                    if (form.valid) {
                        _this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_UPDATE, _this.informationData.id, form.value).subscribe(function (response) {
                            _this.onGoInformationRequired();
                        });
                    }
                }
            });
        }
        else if (this.moveTo === 'Client') {
            if (form.valid) {
                this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_UPDATE, this.informationData.id, form.value).subscribe(function (response) {
                    _this.onSendtoClient(_this.informationData);
                });
            }
        }
        else {
            if (form.valid) {
                this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_UPDATE, this.informationData.id, form.value).subscribe(function (response) {
                    _this.onGoInformationRequired();
                });
            }
        }
    };
    /**
     * On file selection
     * @param id
     */
    ViewInformationComponent.prototype.onFileSelect = function (id) {
        document.getElementById(id).click();
    };
    /**
     * on file changing
     * @param event
     */
    ViewInformationComponent.prototype.onUploadDocument = function (event, informationDetailId, docType, isAdditional, index) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var filesList = event.target.files;
            if (filesList.length) {
                var f_1 = 0;
                Object.keys(event.target.files).forEach(function (itemUploadFile) {
                    var name = event.target.files[f_1].name;
                    var lastDot = name.lastIndexOf('.');
                    var ext = name.substring(lastDot + 1);
                    // if (isValidFileType(event.target.files[f].type) || isValidFileTypeExt(ext.toLowerCase())) {
                    if (event.target.files[f_1].size > _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_12__["AppConstant"].TWINTY_FIVE_MP_FILE_ALLOWED && isAdditional === 1) {
                        _this._sharedService.setToastMessage(_this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_12__["ToastType"].ERROR);
                    }
                    else {
                        _this.uploadDoc.delete('information_detail_id');
                        _this.uploadDoc.delete('document_type');
                        _this.uploadDoc.delete('document_file');
                        _this.uploadDoc.delete('is_additional_info');
                        // document_type = 1 for Befree
                        // is_additional_info = 1 this document is not additional info
                        _this.uploadDoc.append('information_detail_id', informationDetailId);
                        _this.uploadDoc.append('document_type', docType);
                        _this.uploadDoc.append('document_file', event.target.files[f_1]);
                        _this.uploadDoc.append('is_additional_info', isAdditional);
                        if (_this.uploadDoc) {
                            _this._commonCrudService.uploadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_UPLOAD_DOCUMENT + '/' + _this.informationData.id, _this.uploadDoc).subscribe(function (response) {
                                _this.getDocumentListRefresh(informationDetailId, index);
                            });
                        }
                    }
                    // } else {
                    //   this._sharedService.setToastMessage(event.target.files[f].name + ' - ' + this.validationMsg.VALID_IMAGE_TYPE, ToastType.ERROR);
                    // }
                    f_1++;
                });
            }
        }
        event.target.value = '';
    };
    /**
     * on file changing
     * @param event
     */
    ViewInformationComponent.prototype.onUploadAdditionalDocument = function (event, docType) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var filesList_1 = event.target.files;
            if (filesList_1.length) {
                var f_2 = 0;
                Object.keys(event.target.files).forEach(function (itemUploadFile) {
                    var name = event.target.files[f_2].name;
                    var lastDot = name.lastIndexOf('.');
                    var ext = name.substring(lastDot + 1);
                    // if (isValidFileType(event.target.files[f].type) || isValidFileTypeExt(ext.toLowerCase())) {
                    if (event.target.files[f_2].size > _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_12__["AppConstant"].TWINTY_FIVE_MP_FILE_ALLOWED) {
                        _this._sharedService.setToastMessage(_this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_12__["ToastType"].ERROR);
                    }
                    else {
                        var file = event.target.files[f_2];
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        if ((filesList_1.length - 1) === f_2) {
                            _this.docArray.push({
                                'reqKey': 'document_file[]',
                                'file': event.target.files,
                            });
                        }
                    }
                    // } else {
                    //   this._sharedService.setToastMessage(event.target.files[f].name + ' - ' + this.validationMsg.VALID_IMAGE_TYPE, ToastType.ERROR);
                    // }
                    f_2++;
                });
            }
        }
        event.target.value = '';
    };
    /**
     * Download Document
     * @param informationDocument
     */
    ViewInformationComponent.prototype.downloadDocument = function (informationDocument, is_additional_info) {
        if (is_additional_info === 1) {
            var id = informationDocument['id'];
            this._commonCrudService.downloadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_DOCUMENT_DOWNLOAD_ADDITIONAL + '/' + id, {}).subscribe(function (response) {
                if (response && response.type) {
                    var extension = response.type.split('/');
                    file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](response, informationDocument['document_name']);
                }
            });
        }
        else {
            if (informationDocument && informationDocument.get('id').value) {
                // const params = {'is_additional_info': isAdditional};
                this._commonCrudService.downloadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_DOCUMENT_DOWNLOAD + '/' + informationDocument.get('id').value, {}).subscribe(function (response) {
                    if (response && response.type) {
                        var extension = response.type.split('/');
                        file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](response, informationDocument.get('document_name').value);
                    }
                });
            }
        }
    };
    /**
     * Remove Document
     * @param informationDocument
     */
    ViewInformationComponent.prototype.deleteDocument = function (informationDocument, information, isAdditional, index) {
        var _this = this;
        if (informationDocument) {
            //console.log(informationDocument);
            var params = { 'is_additional_info': isAdditional };
            this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_DOCUMENT_DELETE, informationDocument.id).subscribe(function (response) {
                if (isAdditional === 1) {
                    _this.getDocumentListRefresh(information.id, index);
                }
            });
        }
    };
    /**
     * On Submit Additional Info
     * @param form
     */
    ViewInformationComponent.prototype.onSubmitAdditionalInfo = function (form) {
        var _this = this;
        if (form.valid) {
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_ADDITIONAL_ADD + '/' + this.informationData.id, form.value, this.docArray).subscribe(function (response) {
                _this.getAdditionalInformationListing();
                _this.addAdditionaInfoForm.resetForm();
                _this.createAdditionalInfoForm();
            });
        }
    };
    /**
     * Get Additional Information Listing
     */
    ViewInformationComponent.prototype.getAdditionalInformationListing = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_ADDITIONAL, this.informationData.id).subscribe(function (response) {
            _this.additionalInformationListing = response.payload.data;
        });
    };
    /**
     * Remove Additional Information
     * @param additionalInfo
     */
    ViewInformationComponent.prototype.removeAdditionalInfo = function (additionalInfo) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this additional information ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_ADDITIONAL_DELETE, additionalInfo.id).subscribe(function (response) {
                    _this.getAdditionalInformationListing();
                });
            }
        });
    };
    /**
     * Get Document List Refresh
     * @param informationDetailId
     * @param index
     */
    ViewInformationComponent.prototype.getDocumentListRefresh = function (informationDetailId, index) {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_VIEW, this.informationData.id).subscribe(function (responseData) {
            var informationData = (responseData.payload.data['detail']) ? responseData.payload.data['detail'] : [];
            informationData = informationData.filter(function (item) { return item['id'] === informationDetailId; });
            if (informationData.length) {
                if (informationData[0]['documents'].length) {
                    _this.getDocumentArray(index).controls = [];
                    informationData[0]['documents'].forEach(function (doc) {
                        _this.getDocumentArray(index).push(_this.createDocumentItem(doc));
                    });
                }
            }
        });
    };
    /**
     * Get Status Name
     * @param status_id
     */
    ViewInformationComponent.prototype.getStatusName = function (status_id) {
        var val = this.informationStatus.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Get Answer Name
     * @param status_id
     */
    ViewInformationComponent.prototype.getAnswerName = function (ans_type) {
        var val = this.informationAnswerType.filter(function (elem) { return elem.key === Number(ans_type); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * On Open Document File
     * @param item
     */
    ViewInformationComponent.prototype.onOpenDocumentFile = function (item) {
        var _this = this;
        var params = { 'file_id': item.file_id };
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].GOOGLE_DRIVE_SHARE_FILE, params).subscribe(function (response) {
            var url = _this.googleMetaData.filter(function (itemData) { return itemData.mimeType === item.mime_type; });
            if (url.length) {
                if (item.csv_excel_file_id && item.csv_excel_file_id !== null && item.csv_excel_file_id !== '') {
                    window.open(url[0].edit + item.csv_excel_file_id, '_blank');
                }
                else {
                    window.open(url[0].edit + item.file_id, '_blank');
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addAdditionaInfoForm'),
        __metadata("design:type", Object)
    ], ViewInformationComponent.prototype, "addAdditionaInfoForm", void 0);
    ViewInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-information',
            template: __webpack_require__(/*! ./view-information.component.html */ "./src/app/admin/client-module/information-required/information-required-tab/view-information/view-information.component.html"),
            styles: [__webpack_require__(/*! ./view-information.component.scss */ "./src/app/admin/client-module/information-required/information-required-tab/view-information/view-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["SharedUserService"]])
    ], ViewInformationComponent);
    return ViewInformationComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_16__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/information-required/information-required-tab/view-information/view-information.module.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/information-required/information-required-tab/view-information/view-information.module.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: ViewInformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInformationModule", function() { return ViewInformationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-information.component */ "./src/app/admin/client-module/information-required/information-required-tab/view-information/view-information.component.ts");
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
        component: _view_information_component__WEBPACK_IMPORTED_MODULE_2__["ViewInformationComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var ViewInformationModule = /** @class */ (function () {
    function ViewInformationModule() {
    }
    ViewInformationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"]
            ],
            declarations: [_view_information_component__WEBPACK_IMPORTED_MODULE_2__["ViewInformationComponent"]]
        })
    ], ViewInformationModule);
    return ViewInformationModule;
}());



/***/ })

}]);
//# sourceMappingURL=view-information-view-information-module.js.map