(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-query-view-query-module"],{

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/view-query/view-query.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/view-query/view-query.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin (Administration)Update Information html view -->\r\n<div class=\"admin-manage-users-container query-module\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>CLIENT</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span><a (click)=\"onGoQueryModule()\">QUERY DETAILS</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">VIEW QUERY</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\" *ngIf=\"queryData?.parent_id > 0\"> Parent Client : {{queryData?.parent_name}} | </span>\r\n          <span>{{queryData?.trading_name}}</span>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <form [formGroup]=\"editQueryForm\" (submit)=\"onSubmit(editQueryForm)\">\r\n    <div>\r\n      <div class=\"row\">\r\n        <span class=\"panel-title\">Worksheet Period:</span> <label class=\"PT-15\">{{queryData?.start_period | date :\r\n        'dd-MM-yyyy'}} TO\r\n        {{queryData?.end_period | date : 'dd-MM-yyyy'}}</label>\r\n        <span class=\"panel-title\">Subject:</span>\r\n        <span class=\"col-md-8\">\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"subject\" required/>\r\n      </mat-form-field></span>\r\n      </div>\r\n      <mat-accordion [multi]=\"true\" *ngFor=\"let bankDetail of getQueryBankArray().controls; let i = index;\">\r\n        <mat-expansion-panel [expanded]=\"true\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title><span class=\"fw-500\">{{bankDetail.value['bank_name']}} :</span> {{bankDetail.value['account_no'] | accountNumberMask}}</mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <!-- Start grid -->\r\n\r\n\r\n          <div class=\"expand-grid\">\r\n            <div class=\"expand-grid__thead\">\r\n              <table class=\"PT-0\">\r\n                <thead>\r\n                <tr>\r\n                  <th width=\"5%\">Sr. No</th>\r\n                  <th width=\"8%\">Transaction Date</th>\r\n                  <th width=\"12%\">Memo</th>\r\n                  <th width=\"8%\">Debit</th>\r\n                  <th width=\"8%\">Credit</th>\r\n                  <th width=\"8%\">GST</th>\r\n                  <th width=\"22%\">Queries Comments</th>\r\n                  <th width=\"3%\"></th>\r\n                  <th width=\"10%\">Answer</th>\r\n                  <th width=\"10%\">Client Comments</th>\r\n                  <th width=\"6%\">Action</th>\r\n                </tr>\r\n                </thead>\r\n              </table>\r\n              <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n                <table>\r\n                  <ng-container *ngFor=\"let updateinfo of getQueryArray(i).controls; let j = index\" class=\"expand-grid__tbody expand-grid-scrollable\">\r\n                    <tr class=\"\" [ngClass]=\"{'is-active-row' : trIndex === updateinfo.value['id']}\" style=\"white-space: nowrap; height: auto !important; align-items: center;\" class=\"min_width_query\">\r\n                      <td (click)=\"openRow(updateinfo.value['id'])\" width=\"5%\">\r\n                      <a class=\"open-inner-data\">\r\n                      </a>{{j + 1}}\r\n                    </td>\r\n                    <td width=\"8%\" class=\"word-break\">{{updateinfo.value['transation_date'] | date : 'dd-MM-yyyy'}}</td>\r\n                    <td width=\"12%\" class=\"word-break\" >{{updateinfo.value['memo']}}</td>\r\n                    <td width=\"8%\">{{updateinfo.value['withdraw']}}</td>\r\n                    <td width=\"8%\">{{updateinfo.value['deposit']}}</td>\r\n                    <td width=\"8%\">{{updateinfo.value['gst']}}</td>\r\n                    <td width=\"22%\" class=\"word-break\"><span  *ngIf=\"updateinfo.value['is_skip'] != 1\" [attr.rowspan]=\"updateinfo.value['rowSpan'] > 0 ? updateinfo.value['rowSpan'] : null\" class=\"word-break textarea_small\">\r\n                      {{updateinfo.value['query_comment']}}</span>\r\n                    </td>\r\n                    <td width=\"3%\" class=\"text-center\">\r\n                      <mat-icon matBadge=\"{{getDocumentArray(i,j).controls.length}}\" matBadgeColor=\"warn\"\r\n                                matTooltip=\"View Document\" *ngIf=\"getDocumentArray(i,j).controls.length > 0\" class=\"primary-color\" (click)=\"openRow(j)\">cloud_done\r\n                      </mat-icon>\r\n                    </td>\r\n                    <td width=\"10%\" class=\"word-break text-left\" >{{getAnswerName(updateinfo.get('answer_type').value)}}</td>\r\n                    <td width=\"10%\" class=\"word-break text-left\" >{{updateinfo.value['client_comment']}}</td>\r\n                    <td width=\"6%\" class=\"word-break\">{{getStatusName(updateinfo.get('status_id').value)}}</td>\r\n                  </tr>\r\n                  <tr *ngIf=\"trIndex === j\" class=\"inner-data\"  style=\"position: relative;\">\r\n                    <td [attr.colspan]=\"11\"  style=\"border-top:1px solid #c3c3c3;\">\r\n                    <div class=\"row col-md-12\">\r\n                      <div class=\"col-md-6\" *ngFor=\"let documentData of getDocumentArray(i,j).controls; let k = index\">\r\n                        <div class=\"inner-data__view\">\r\n                          <div class=\"\">{{documentData.value['is_client'] === 1 ? 'Client' : 'Befree'}} :</div>\r\n                          <div>\r\n                            <a (click)=\"onOpenDocumentFile(documentData.value)\" *ngIf=\"documentData.value['is_drive'] === 1\"\r\n                               class=\"cursor-pointer\">\r\n                              <mat-icon class=\"v-align-middle\">remove_red_eye</mat-icon>\r\n                              {{documentData.get('document_name').value}}\r\n                            </a>\r\n                            <a (click)=\"downloadDocument(documentData)\" *ngIf=\"documentData.value['is_drive'] === 0\"\r\n                               class=\"cursor-pointer v-align-middle\">\r\n                              <mat-icon class=\"v-align-middle primary-color\">get_app</mat-icon>{{documentData.get('document_name').value}}\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div></div>\r\n                  </tr>\r\n                  </ng-container>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n\r\n      <div class=\"row col-md-12\">\r\n        <div class=\"col-md-7 PL-0\">\r\n          <mat-card>\r\n            <!-- Start Table -->\r\n            <div class=\"expand-grid\">\r\n              <div class=\"expand-grid__thead\">\r\n                <table *ngIf=\"additionalQueryListing.length\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th width=\"10%\">Sr. No</th>\r\n                    <th width=\"40%\">Additional Query</th>\r\n                    <th width=\"25%\">Document</th>\r\n                    <th width=\"25%\">Client Comment</th>\r\n                  </tr>\r\n                  </thead>\r\n                </table>\r\n\r\n                <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n                  <table>\r\n                    <tbody *ngFor=\"let updateAdditionalQuery of additionalQueryListing; let k = index\">\r\n                    <tr [ngClass]=\"{'is-active-row' : trIndexInner === k}\" class=\"hover-icons row-data\">\r\n                      <td width=\"10%\">\r\n                        {{k + 1}}\r\n                      </td>\r\n                      <td width=\"40%\" class=\"word-break\">{{updateAdditionalQuery?.comment}}</td>\r\n                      <td width=\"25%\">\r\n                        <mat-icon matBadge=\"{{updateAdditionalQuery['document'].length}}\" matBadgeColor=\"warn\"\r\n                                  class=\"primary-color\" matTooltip=\"View Document\" (click)=\"openRowAdditionalComments(k)\" *ngIf=\"updateAdditionalQuery['document'].length\">cloud_done\r\n                        </mat-icon>\r\n                      </td>\r\n                      <td width=\"25%\" class=\"word-break\">{{updateAdditionalQuery?.client_comment}}</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"trIndexInner === k\" class=\"inner-data\">\r\n                      <div class=\"row PT-10\">\r\n                        <div class=\"col-md-6\"  *ngFor=\"let documentsList of updateAdditionalQuery['document']; let m = index\">\r\n                          <div class=\"inner-data__view\">\r\n                            <div class=\"\">{{documentsList?.is_client === 1 ? 'Client' : 'Befree'}} :</div>\r\n                            <div>\r\n                              <a (click)=\"onOpenDocumentFile(documentsList)\" *ngIf=\"documentsList?.is_drive === 1\"\r\n                                 class=\"cursor-pointer\">\r\n                                <mat-icon>remove_red_eye</mat-icon>{{documentsList?.document_name}}\r\n                              </a>\r\n                              <a (click)=\"downloadDocument(documentsList, 1)\" *ngIf=\"documentsList?.is_drive === 0\"\r\n                                 class=\"cursor-pointer\">\r\n                                <mat-icon class=\"v-align-middle\">get_app</mat-icon>{{documentsList?.document_name}}\r\n                              </a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <table *ngIf=\"isSendToClient\">\r\n                  <tfoot>\r\n                  <tr>\r\n                    <td colspan=\"8\" class=\"label-gray-bg-color\"></td>\r\n                    <td colspan=\"2\" class=\"PR-10 text-right\">\r\n                      <mat-label>Reminder Days</mat-label>\r\n                      : <label class=\"fw-500 red-color\">{{editQueryForm.get('reminder').value === -1 ? 'N/A' : editQueryForm.get('reminder').value === 0 ? 'Stop' : editQueryForm.get('reminder').value}}</label>\r\n                    </td>\r\n                  </tr>\r\n                  </tfoot>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <!-- End Grid -->\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-md-12\">\r\n        <div class=\"col-md-6 PL-0\" *ngIf=\"queryData?.sendback_reason_tm\">\r\n          <span class=\"panel-title\">Send Back Reason to TM :</span> {{queryData?.sendback_reason_tm}}\r\n        </div>\r\n        <div class=\"col-md-6 PL-0\" *ngIf=\"queryData?.sendback_reason_atl\">\r\n          <span class=\"panel-title\">Send Back Reason to ATL :</span> {{queryData?.sendback_reason_atl}}\r\n        </div>\r\n        <div class=\"col-md-6 PL-0\" *ngIf=\"queryData?.sendback_reason_tl\">\r\n          <span class=\"panel-title\"> Send Back Reason to TL :</span> {{queryData?.sendback_reason_tl}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/view-query/view-query.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/view-query/view-query.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".min_width_query .mat-form-field {\n  width: 120px !important; }\n\n.min_width_query .mat-form-field {\n  width: 120px !important; }\n\n.query-module .mat-expansion-panel-header {\n  background: #f9f9f9 !important;\n  height: 40px !important; }\n\n.query-module .mat-expansion-panel {\n  border-bottom: 1px solid #e6e6e6 !important;\n  border-radius: 0 !important;\n  margin-bottom: 5px;\n  box-shadow: none; }\n\n.query-module .mat-card {\n  border: 1px solid #dcdcdc;\n  box-shadow: none; }\n\n.query-module .inner-data mat-icon {\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vY2xpZW50LW1vZHVsZS9xdWVyeS1tb2R1bGUvcXVlcnktZGFzaGJvYXJkLXRhYi92aWV3LXF1ZXJ5L0M6XFx3YW1wNjRcXHd3d1xcaGtfZnJvbnRlbmQvcHJvamVjdHNcXGFkbWluXFxzcmNcXGFwcFxcYWRtaW5cXGNsaWVudC1tb2R1bGVcXHF1ZXJ5LW1vZHVsZVxccXVlcnktZGFzaGJvYXJkLXRhYlxcdmlldy1xdWVyeVxcdmlldy1xdWVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLHVCQUF1QixFQUFBOztBQUkzQjtFQUVJLHVCQUF1QixFQUFBOztBQUkzQjtFQUVJLDhCQUE4QjtFQUM5Qix1QkFBdUIsRUFBQTs7QUFIM0I7RUFPSSwyQ0FBMkM7RUFDM0MsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFWcEI7RUFhSSx5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7O0FBZHBCO0VBbUJNLGVBQWUsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvcXVlcnktbW9kdWxlL3F1ZXJ5LWRhc2hib2FyZC10YWIvdmlldy1xdWVyeS92aWV3LXF1ZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5taW5fd2lkdGhfcXVlcnkge1xyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5taW5fd2lkdGhfcXVlcnkge1xyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5xdWVyeS1tb2R1bGUge1xyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAubWF0LWNhcmQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaW5uZXItZGF0YXtcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/view-query/view-query.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/view-query/view-query.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ViewQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQueryComponent", function() { return ViewQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-user.service */ "./src/utility/shared-service/shared-user.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _information_required_information_required_tab_update_information_send_to_client_dialog_send_to_client_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../information-required/information-required-tab/update-information/send-to-client-dialog/send-to-client-dialog.component */ "./src/app/admin/client-module/information-required/information-required-tab/update-information/send-to-client-dialog/send-to-client-dialog.component.ts");
/* harmony import */ var _information_required_information_required_tab_update_information_send_back_to_staff_dialog_send_back_to_staff_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../information-required/information-required-tab/update-information/send-back-to-staff-dialog/send-back-to-staff-dialog.component */ "./src/app/admin/client-module/information-required/information-required-tab/update-information/send-back-to-staff-dialog/send-back-to-staff-dialog.component.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! file-saver */ "../../node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _upload_query_documents_dialog_upload_query_documents_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../upload-query-documents-dialog/upload-query-documents-dialog.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/upload-query-documents-dialog/upload-query-documents-dialog.component.ts");
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




















var ViewQueryComponent = /** @class */ (function (_super) {
    __extends(ViewQueryComponent, _super);
    function ViewQueryComponent(_router, dialog, _fb, _commonCrudService, _sharedService, _sharedUserService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this.dialog = dialog;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this._sharedUserService = _sharedUserService;
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_5__["ValidationConstantMessage"]();
        // Data Variables
        _this.updateInformation = [];
        _this.informationStatus = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["information_status"];
        _this.informationAnswerType = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["information_answer_type"];
        _this.moveTo = null;
        _this.uploadDoc = new FormData();
        _this.docArray = [];
        _this.additionalQueryListing = [];
        _this.snoozeOrReminderDays = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["SnoozeOrReminderDays"];
        _this.yesNoQuestionMarksList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["yesNoQuestionMarks"];
        // State variables
        _this.trIndex = -1;
        _this.trIndexInner = -1;
        _this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_7__["ADMINTABACCESS"].QUERY_MODULE;
        _this.isSendToClient = false;
        _this.googleMetaData = [];
        _this.queryData = _this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GLOBALDATAKEYS"].QUERY_MODULE);
        return _this;
    }
    ViewQueryComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.isSendToClient = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'sent_to_client', 1);
        this.createEditQueryForm();
        this.createAdditionalQueryForm();
        this.getBasicQueryData();
        this.getAdditionalQueryListing();
        this.getFileTypeList();
    };
    /**
     * Get File Type List
     */
    ViewQueryComponent.prototype.getFileTypeList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].DROPDOWN_LIST, {
            'table': 'google_drive_meta_data',
            'column': 'id,key,label,icon,mimeType,edit,class,isFileCreate,extension,isFileSearch,labelSearch,extensionSearch,extensionSearchSort'
        }, {}).subscribe(function (response) {
            // console.log(response);
            _this.googleMetaData = response;
        });
    };
    ViewQueryComponent.prototype.getBasicQueryData = function () {
        var _this = this;
        if (this.queryData && this.queryData.id > 0) {
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].QUERY_VIEW, this.queryData.id).subscribe(function (response) {
                // this.queryData = response.payload.data;
                var informationDataList = (response.payload.data) ? response.payload.data : [];
                var informationData = informationDataList;
                delete informationData['basic'];
                delete informationData['adddetail'];
                if (!_utility_common_functions__WEBPACK_IMPORTED_MODULE_13__["CommonFunctions"].isEmpty(informationData)) {
                    var i_1 = 0;
                    Object.keys(informationData).forEach(function (keyVal) {
                        var j = 0;
                        if (informationData[keyVal] && informationData[keyVal]['detail'].length) {
                            _this.getQueryBankArray().push(_this.createBankDetailItem(informationData[keyVal]));
                            var k_1 = 0, merge_start_1 = 0, merge_end_1 = 0;
                            informationData[keyVal]['detail'].forEach(function (item) {
                                if (item['merge_start'] > 0 && item['merge_end'] > 0) {
                                    merge_start_1 = item['merge_start'];
                                    merge_end_1 = item['merge_end'];
                                }
                                if (k_1 + 1 > merge_start_1 && k_1 + 1 <= merge_end_1 && (merge_start_1 > 0 && merge_end_1 > 0)) {
                                    item.is_skip = 1;
                                }
                                else {
                                    item.is_skip = 0;
                                }
                                _this.getQueryArray(i_1).push(_this.createQueryDetailItem(item));
                                if (item['documents'] && item['documents'].length) {
                                    item['documents'].forEach(function (doc) {
                                        _this.getDocumentArray(i_1, j).push(_this.createDocumentItem(doc));
                                    });
                                }
                                k_1++;
                                j++;
                            });
                        }
                        if (informationData[keyVal] && informationData[keyVal]['detail'].length) {
                            i_1++;
                        }
                    });
                }
                console.log(_this.editQueryForm);
            });
        }
    };
    /**
     * Create Edit Information Form
     */
    ViewQueryComponent.prototype.createEditQueryForm = function () {
        this.editQueryForm = this._fb.group({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.queryData.subject ? this.queryData.subject : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            reminder: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.queryData.reminder),
            bank_details: this._fb.array([]),
            // additional_info: this._fb.array([]),
            stage_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            is_draft: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    /**
     * Create Bank Detail Item
     * @param item
     */
    ViewQueryComponent.prototype.createBankDetailItem = function (item) {
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.id : ''),
            bank_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.bank_name : ''),
            account_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.account_no : ''),
            infoDetail: this._fb.array([]),
        });
    };
    /**
     * Create Query Detail Item
     */
    ViewQueryComponent.prototype.createQueryDetailItem = function (item) {
        var rowSpan = (item && item.merge_start > 0 && item.merge_end > 0) ? (Number(item.merge_end) - Number(item.merge_start)) : 0;
        rowSpan = (rowSpan > 0) ? rowSpan + 1 : 0;
        var transationDate = (item && item.transation_date != null && item.transation_date !== "0000-00-00") ? moment__WEBPACK_IMPORTED_MODULE_14__(item.transation_date).format('YYYY-MM-DD') : "";
        console.log(rowSpan);
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.id : ''),
            query_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.query_id : ''),
            bank_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.bank_id : ''),
            bank_info_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.bank_info_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            transation_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.transation_date : _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            memo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.memo : ''),
            withdraw: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.withdraw : ''),
            deposit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.deposit : ''),
            gst: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.gst : ''),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.status_id : ''),
            query_comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.query_comment : ''),
            merge_start: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.merge_start : ''),
            merge_end: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.merge_end : ''),
            rowSpan: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](rowSpan),
            is_skip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item.is_skip),
            answer_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.answer_type : ''),
            client_comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.client_comment : ''),
            status_comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.status_comment : ''),
            documents: this._fb.array([])
        });
    };
    /**
     * Create Document Item
     */
    ViewQueryComponent.prototype.createDocumentItem = function (item) {
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.id : null),
            query_detail_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.query_detail_id : null),
            document_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.document_name : null),
            document_path: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.document_path : null),
            document_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.document_title : null),
            is_drive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.is_drive : null),
            is_client: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.is_client : null),
            file_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.file_id : null),
            mime_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.mime_type : null),
        });
    };
    /**
     * Create Info Additional Query Detail Item
     */
    ViewQueryComponent.prototype.createAdditionalQueryForm = function (item) {
        this.editAdditionalQueryForm = this._fb.group({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.comment : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            is_drive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item ? item.is_drive : 0),
        });
    };
    /**
     * Get Query Array
     */
    ViewQueryComponent.prototype.getQueryArray = function (i) {
        return this.getQueryBankArray().controls[i].get('infoDetail');
    };
    /**
     * Get Query Bank Array
     */
    ViewQueryComponent.prototype.getQueryBankArray = function () {
        return this.editQueryForm.get('bank_details');
    };
    /**
     * Get Document Array
     */
    ViewQueryComponent.prototype.getDocumentArray = function (i, index) {
        return this.getQueryArray(i).controls[index].get('documents');
    };
    /**
     * Update Value
     * @param index
     * @param child
     * @param value
     */
    ViewQueryComponent.prototype.updateDateForQuery = function (index, child, value) {
        // this.get    moment(value).format('YYYY-MM-DD');
        var itemValue = moment__WEBPACK_IMPORTED_MODULE_14__(value).format('YYYY-MM-DD');
        this.getQueryArray(index).controls[child].get('transation_date').setValue(itemValue);
    };
    // Events
    ViewQueryComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    ViewQueryComponent.prototype.openRowAdditionalComments = function (i) {
        this.trIndexInner = (this.trIndexInner !== i) ? i : -1;
    };
    /**
     * On home page route
     */
    ViewQueryComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    ViewQueryComponent.prototype.onGoQueryModule = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].PENDING_QUERY]);
    };
    /**
     * On Send to client
     * @param queryData
     */
    ViewQueryComponent.prototype.onSendtoClient = function (queryData) {
        var _this = this;
        var dialogRef = this.dialog.open(_information_required_information_required_tab_update_information_send_to_client_dialog_send_to_client_dialog_component__WEBPACK_IMPORTED_MODULE_15__["SendToClientDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                queryData: queryData,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.onGoQueryModule();
            }
        });
    };
    /**
     * On Send to Staff or TL
     * @param information
     * @param type
     */
    ViewQueryComponent.prototype.onSendtoStaff = function (queryData, typeInfo, stageId) {
        var _this = this;
        var dialogRef = this.dialog.open(_information_required_information_required_tab_update_information_send_back_to_staff_dialog_send_back_to_staff_dialog_component__WEBPACK_IMPORTED_MODULE_16__["SendBackToStaffDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                queryData: queryData,
                type: typeInfo,
                status_id: stageId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.onGoQueryModule();
            }
        });
    };
    /**
     * On Button Click need to update status & is_draft
     * @param stageId
     * @param isDraft
     */
    ViewQueryComponent.prototype.updateStatusIdWithDraft = function (stageId, isDraft, moveTo) {
        this.editQueryForm.get('is_draft').setValue(isDraft);
        this.editQueryForm.get('stage_id').setValue(stageId);
        this.moveTo = moveTo;
    };
    /**
     * On Submit Edit Information
     * @param form
     */
    ViewQueryComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var infoDetail = form.value['bank_details'];
        form.value['bank_details'] = JSON.stringify(form.value['bank_details']);
        if (this.moveTo !== 'Client') {
            var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmationDialogComponent"], {
                data: {
                    content: 'Are you sure you want to send it to ' + this.moveTo + '?'
                }
            });
            dialogRef.afterClosed().subscribe(function (value) {
                if (value) {
                    if (form.valid) {
                        _this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].QUERY_UPDATE, _this.queryData.id, form.value).subscribe(function (response) {
                            _this.onGoQueryModule();
                        });
                    }
                }
            });
        }
        else if (this.moveTo === 'Client') {
            if (form.valid) {
                this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].QUERY_UPDATE, this.queryData.id, form.value).subscribe(function (response) {
                    _this.onSendtoClient(_this.queryData);
                });
            }
        }
        else {
            if (form.valid) {
                this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].QUERY_UPDATE, this.queryData.id, form.value).subscribe(function (response) {
                    _this.onGoQueryModule();
                });
            }
        }
    };
    /**
     * On file selection
     * @param id
     */
    ViewQueryComponent.prototype.onFileSelect = function (id) {
        document.getElementById(id).click();
    };
    /**
     * on file changing
     * @param event
     */
    ViewQueryComponent.prototype.onUploadDocument = function (event, queryDetailId, index, child) {
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
                    if (event.target.files[f_1].size > _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstant"].TWINTY_FIVE_MP_FILE_ALLOWED) {
                        _this._sharedService.setToastMessage(_this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["ToastType"].ERROR);
                    }
                    else {
                        _this.uploadDoc.delete('query_detail_id');
                        _this.uploadDoc.delete('document_file');
                        _this.uploadDoc.delete('is_drive');
                        // document_type = 1 for Befree
                        // is_additional_query = 1 this document is not additional info
                        _this.uploadDoc.append('query_detail_id', queryDetailId);
                        _this.uploadDoc.append('is_drive', '0');
                        _this.uploadDoc.append('document_file', event.target.files[f_1]);
                        if (_this.uploadDoc) {
                            _this._commonCrudService.uploadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].QUERY_UPLOAD_DOCUMENT + '/' + queryDetailId, _this.uploadDoc).subscribe(function (response) {
                                _this.getDocumentListRefresh(queryDetailId, index, child);
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
    ViewQueryComponent.prototype.onUploadAdditionalDocument = function (event, docType, isDrive) {
        var _this = this;
        this.editAdditionalQueryForm.get('is_drive').setValue(isDrive);
        if (event.target.files && event.target.files[0]) {
            var filesList_1 = event.target.files;
            if (filesList_1.length) {
                var f_2 = 0;
                Object.keys(event.target.files).forEach(function (itemUploadFile) {
                    var name = event.target.files[f_2].name;
                    var lastDot = name.lastIndexOf('.');
                    var ext = name.substring(lastDot + 1);
                    // if (isValidFileType(event.target.files[f].type) || isValidFileTypeExt(ext.toLowerCase())) {
                    if (event.target.files[f_2].size > _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstant"].TWINTY_FIVE_MP_FILE_ALLOWED) {
                        _this._sharedService.setToastMessage(_this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["ToastType"].ERROR);
                    }
                    else {
                        var file = event.target.files[f_2];
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        if ((filesList_1.length - 1) === f_2) {
                            _this.docArray.push({
                                'reqKey': 'document_file',
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
     * @param queryDocument
     */
    ViewQueryComponent.prototype.downloadDocument = function (queryDocument, is_additional_query) {
        // console.log(queryDocument);
        if (is_additional_query === 1) {
            var id = queryDocument['id'];
            this._commonCrudService.downloadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].QUERY_DOCUMENT_DOWNLOAD_ADDITIONAL + '/' + id, {}).subscribe(function (response) {
                if (response && response.type) {
                    var extension = response.type.split('/');
                    file_saver__WEBPACK_IMPORTED_MODULE_18__["saveAs"](response, queryDocument['document_name']);
                }
            });
        }
        else {
            // console.log(queryDocument);
            if (queryDocument && queryDocument.get('id').value) {
                // const params = {'is_additional_query': isAdditional};
                this._commonCrudService.downloadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].QUERY_DOCUMENT_DOWNLOAD + '/' + queryDocument.get('id').value, {}).subscribe(function (response) {
                    if (response && response.type) {
                        var extension = response.type.split('/');
                        file_saver__WEBPACK_IMPORTED_MODULE_18__["saveAs"](response, queryDocument.get('document_name').value);
                    }
                });
            }
        }
    };
    /**
     * On Open Document File
     * @param item
     */
    ViewQueryComponent.prototype.onOpenDocumentFile = function (item) {
        var _this = this;
        var params = { 'file_id': item.file_id };
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].GOOGLE_DRIVE_SHARE_FILE, params).subscribe(function (response) {
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
    /**
     * Remove Document
     * @param queryDocument
     */
    ViewQueryComponent.prototype.deleteDocument = function (queryDetailsID, document_id, index, child) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this document ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].QUERY_DOCUMENT_DELETE, document_id).subscribe(function (response) {
                    _this.getDocumentListRefresh(queryDetailsID, index, child);
                });
            }
        });
    };
    /**
     * On Submit Additional Query
     * @param form
     */
    ViewQueryComponent.prototype.onSubmitAdditionalQuery = function (form) {
        var _this = this;
        if (form.valid) {
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].QUERY_ADDITIONAL_STORE + '/' + this.queryData.id, form.value, this.docArray).subscribe(function (response) {
                _this.getAdditionalQueryListing();
                _this.addAdditionaQueryForm.resetForm();
                _this.createAdditionalQueryForm();
            });
        }
    };
    /**
     * Get Additional Query Listing
     */
    ViewQueryComponent.prototype.getAdditionalQueryListing = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].QUERY_ADDITIONAL_LIST, this.queryData.id).subscribe(function (response) {
            _this.additionalQueryListing = response.payload.data;
        });
    };
    /**
     * Remove Additional Query
     * @param additionalQuery
     */
    ViewQueryComponent.prototype.removeAdditionalQuery = function (additionalQuery) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this additional query ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].QUERY_ADDITIONAL_DELETE, additionalQuery.id).subscribe(function (response) {
                    _this.getAdditionalQueryListing();
                });
            }
        });
    };
    /**
     * On Add Document Open Dialog
     * @param type
     */
    ViewQueryComponent.prototype.onAddDocumentsDialog = function (queryDetailId, index, child, type) {
        var _this = this;
        var dialogRef = this.dialog.open(_upload_query_documents_dialog_upload_query_documents_dialog_component__WEBPACK_IMPORTED_MODULE_19__["UploadQueryDocumentsDialogComponent"], {
            panelClass: 'xl-large-dialog-container',
            data: {
                queryData: this.queryData,
                queryDetailId: queryDetailId,
                uploadType: type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log(result);
            if (result['result'] === true && result['type'] === 1) {
                _this.getDocumentListRefresh(queryDetailId, index, child);
            }
            else if (result['result'] === true && result['type'] === 2) {
                _this.docArray.push({
                    'reqKey': 'document_file',
                    'file': result['selected_files'],
                });
            }
        });
    };
    /**
     * Get Document List Refresh
     * @param queryDetailId
     * @param index
     */
    ViewQueryComponent.prototype.getDocumentListRefresh = function (queryDetailId, index, child) {
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_12__["AdminAPI"].QUERY_VIEW, this.queryData.id).subscribe(function (responseData) {
            //console.log(queryDetailId, responseData.payload.data);
            // let queryDataItem = (responseData.payload.data['detail']) ? responseData.payload.data['detail'] : [];
            // queryDataItem = queryDataItem.filter(item => item['id'] === queryDetailId);
            // if (queryDataItem.length) {
            //   if (queryDataItem[0] && queryDataItem[0]['documents'] && queryDataItem[0]['documents'].length) {
            //     // this.getDocumentArray(index).controls = [];
            //     // queryDataItem[0]['document'].forEach(doc => {
            //     //   this.getDocumentArray(index).push(this.createDocumentItem(doc));
            //     // });
            //   } else {
            //     // this.getDocumentArray(index).controls = [];
            //   }
            // }
        });
    };
    /**
     * Get Status Name
     * @param status_id
     */
    ViewQueryComponent.prototype.getStatusName = function (status_id) {
        var val = this.informationStatus.filter(function (elem) { return elem.key === Number(status_id); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Get Answer Name
     * @param status_id
     */
    ViewQueryComponent.prototype.getAnswerName = function (ans_type) {
        var val = this.informationAnswerType.filter(function (elem) { return elem.key === Number(ans_type); });
        return (val.length) ? val[0].label : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addAdditionaQueryForm'),
        __metadata("design:type", Object)
    ], ViewQueryComponent.prototype, "addAdditionaQueryForm", void 0);
    ViewQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-query',
            template: __webpack_require__(/*! ./view-query.component.html */ "./src/app/admin/client-module/query-module/query-dashboard-tab/view-query/view-query.component.html"),
            styles: [__webpack_require__(/*! ./view-query.component.scss */ "./src/app/admin/client-module/query-module/query-dashboard-tab/view-query/view-query.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_11__["SharedUserService"]])
    ], ViewQueryComponent);
    return ViewQueryComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/view-query/view-query.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/view-query/view-query.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ViewQueryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQueryModule", function() { return ViewQueryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_query_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-query.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/view-query/view-query.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _view_query_component__WEBPACK_IMPORTED_MODULE_2__["ViewQueryComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var ViewQueryModule = /** @class */ (function () {
    function ViewQueryModule() {
    }
    ViewQueryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_query_component__WEBPACK_IMPORTED_MODULE_2__["ViewQueryComponent"]]
        })
    ], ViewQueryModule);
    return ViewQueryModule;
}());



/***/ })

}]);
//# sourceMappingURL=view-query-view-query-module.js.map