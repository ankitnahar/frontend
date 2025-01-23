(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-queries-edit-queries-module"],{

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/edit-queries.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/edit-queries.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin (Administration)Update Information html view -->\r\n<div class=\"admin-manage-users-container query-module\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>CLIENT</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span><a (click)=\"onGoQueryModule()\">QUERY DETAILS</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">EDIT QUERY</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\" *ngIf=\"queryData?.parent_id > 0\"> Parent Client : {{queryData?.parent_name}} | </span>\r\n          <span>{{queryData?.trading_name}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <form [formGroup]=\"editQueryForm\" (submit)=\"onSubmit(editQueryForm)\">\r\n    <div>\r\n      <div class=\"row\">\r\n        <span class=\"panel-title\">Worksheet Period:</span> <label class=\"PT-15\">{{queryData?.start_period | date :\r\n        'dd-MM-yyyy'}} TO\r\n        {{queryData?.end_period | date : 'dd-MM-yyyy'}}</label>\r\n        <span class=\"panel-title\">Subject:</span>\r\n        <span class=\"col-md-8\" *ngIf=\"queryData?.stage_id?.id !== 5 && queryData?.stage_id?.id !== 6\">\r\n          <mat-form-field>\r\n            <input matInput formControlName=\"subject\" required/>\r\n          </mat-form-field>\r\n        </span>\r\n        <span class=\"col-md-6 MT-15\" *ngIf=\"queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6\">\r\n          {{queryData?.subject}}\r\n        </span>\r\n      </div>\r\n      <mat-accordion [multi]=\"true\" *ngFor=\"let bankDetail of getQueryBankArray().controls; let i = index;\">\r\n        <mat-expansion-panel [expanded]=\"true\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title><span class=\"fw-500\">{{bankDetail.value['bank_name']}} </span>: {{bankDetail.value['account_no'] | accountNumberMask}}</mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n      <!-- Start grid -->\r\n      <div class=\"expand-grid merge_cells\">\r\n        <div class=\"expand-grid__thead\">\r\n          <table class=\"PT-0\">\r\n            <tr>\r\n              <th width=\"3%\">Sr. No</th>\r\n              <th width=\"{{queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6 ? '8%':'8%'}}\">Transaction Date</th>\r\n              <th width=\"{{queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6 ? '11%':'11%'}}\">Memo</th>\r\n              <th width=\"{{queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6 ? '6%':'6%'}}\">Debit<mat-icon matTooltip=\"Prefix currency symbol in amount\" class=\"v-align-middle gray-color\" matTooltipPosition=\"below\">info</mat-icon></th>\r\n              <th width=\"{{queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6 ? '7%':'7%'}}\">Credit<mat-icon matTooltip=\"Prefix currency symbol in amount\" class=\"v-align-middle gray-color\" matTooltipPosition=\"below\">info</mat-icon></th>\r\n              <th width=\"{{queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6 ? '8%':'8%'}}\">GST</th>\r\n              <th width=\"{{queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6 ? '25%':'25%'}}\">Queries Comments</th>\r\n              <th width=\"5%\"></th>\r\n              <th width=\"10%\" *ngIf=\"queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6\">Answer</th>\r\n              <th width=\"10%\" *ngIf=\"queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6\">Client Comments</th>\r\n              <th width=\"6%\">Action</th>\r\n              <th width=\"1%\"></th>\r\n            </tr>\r\n            <ng-container *ngFor=\"let updateinfo of getQueryArray(i).controls; let j = index\" class=\"expand-grid__tbody expand-grid-scrollable\">\r\n              <tr class=\"\" [ngClass]=\"{'is-active-row' : trIndex === updateinfo.value['id']}\" style=\"white-space: nowrap; height: auto !important; align-items: center;\" class=\"min_width_query\">\r\n                <td (click)=\"openRow(updateinfo.value['id'])\" width=\"3%\">\r\n                  <a class=\"open-inner-data\">\r\n                  </a>{{j + 1}}\r\n                </td>\r\n                <td width=\"{{queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6 ? '8%':'8%'}}\">\r\n                  <mat-form-field *ngIf=\"queryData?.stage_id?.id !== 5 && queryData?.stage_id?.id !== 6\">\r\n                    <input matInput [matDatepicker]=\"fromdateRef\" placeholder=\"Transaction Date\" [formControl]=\"updateinfo.get('transation_date')\" (dateChange)=\"updateDateForQuery(i,j, $event.value)\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"fromdateRef\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #fromdateRef></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6\">{{updateinfo.value['transation_date'] | date : 'dd-MM-yyyy'}}</span>\r\n                </td>\r\n                <td width=\"{{queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6 ? '11%':'11%'}}\" class=\"word-break\">\r\n                  <mat-form-field *ngIf=\"queryData?.stage_id?.id !== 5 && queryData?.stage_id?.id !== 6\">\r\n                    <input matInput [formControl]=\"updateinfo.get('memo')\" value=\"{{updateinfo.value['memo']}}\" />\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6\">{{updateinfo.value['memo']}}</span>\r\n                </td>\r\n                <td width=\"{{queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6 ? '6%':'6%'}}\">\r\n                  <mat-form-field *ngIf=\"queryData?.stage_id?.id !== 5 && queryData?.stage_id?.id !== 6\">\r\n                    <input matInput [formControl]=\"updateinfo.get('withdraw')\" value=\"{{updateinfo.value['withdraw']}}\" />\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6\">{{updateinfo.value['withdraw']}}</span>\r\n                </td>\r\n                <td width=\"{{queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6 ? '7%':'7%'}}\">\r\n                  <mat-form-field *ngIf=\"queryData?.stage_id?.id !== 5 && queryData?.stage_id?.id !== 6\">\r\n                    <input matInput [formControl]=\"updateinfo.get('deposit')\" value=\"{{updateinfo.value['deposit']}}\"/>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6\">{{updateinfo.value['deposit']}}</span>\r\n                </td>\r\n                <td width=\"{{queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6 ? '8%':'8%'}}\">\r\n                  <mat-form-field [floatLabel]=\"'never'\" *ngIf=\"queryData?.stage_id?.id !== 5 && queryData?.stage_id?.id !== 6\">\r\n                    <mat-select placeholder=\"Please Select\" [value]=\"updateinfo.value['gst']\" [formControl]=\"updateinfo.get('gst')\">\r\n                      <mat-option *ngFor=\"let yesNoData of yesNoQuestionMarksList.slice(1);\" [value]=\"yesNoData.label\">\r\n                        {{yesNoData.label}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <span *ngIf=\"queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6\">{{updateinfo.value['gst']}}</span>\r\n                </td>\r\n                <td width=\"{{queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6 ? '25%':'25%'}}\" *ngIf=\"updateinfo.value['is_skip'] != 1\" [attr.rowspan]=\"updateinfo.value['rowSpan'] > 0 ? updateinfo.value['rowSpan'] : null\" class=\"{{updateinfo.value['rowSpan'] > 0 ? 'bgTextarea_Merge_Cell textarea_small word-break' : 'textarea_small word-break'}}\">\r\n                  <mat-form-field appearance=\"fill\" *ngIf=\"bankDetail.value['rows'] === 0 && queryData?.stage_id?.id !== 5 && queryData?.stage_id?.id !== 6\">\r\n                    <textarea matInput value=\"{{updateinfo.value['query_comment']}}\"  [formControl]=\"updateinfo.get('query_comment')\" matTextareaAutosize matAutosizeMinRows=2 matAutosizeMaxRows=7></textarea>\r\n                  </mat-form-field>\r\n                  <ng-select *ngIf=\"bankDetail.value['rows'] > 0 && queryData?.stage_id?.id !== 5 && queryData?.stage_id?.id !== 6\"\r\n                             [items]=\"queryQuestionList\"\r\n                             bindLabel=\"question_name\"\r\n                             placeholder=\"Comment\"\r\n                             bindValue=\"question_name\"\r\n                             [virtualScroll]=\"false\"\r\n                             [formControl]=\"updateinfo.get('query_comment')\">\r\n                  </ng-select>\r\n                  <span *ngIf=\"queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6\">{{updateinfo.value['query_comment']}}</span>\r\n                </td>\r\n                <td width=\"5%\" class=\"text-center\">\r\n                  <mat-icon class=\"orange-color v-align-middle\" (click)=\"onFileSelect('addDocument_' + updateinfo.value['id'])\"\r\n                            matTooltip=\"Add Document\">note_add\r\n                  </mat-icon>\r\n                  {{uploadDocName[i] && uploadDocName[i][j] ? uploadDocName[i][j] : ''}}\r\n                  <input type=\"file\" [hidden]=\"true\" id=\"{{'addDocument_'+ updateinfo.value['id']}}\"\r\n                         (change)=\"onUploadDocument($event,updateinfo.value['id'], i, j)\"\r\n                         [multiple]=\"true\"/>\r\n\r\n                  <a (click)=\"onAddDocumentsDialog(updateinfo.value['id'],i,j,3)\" class=\"cursor-pointer v-align-middle\">\r\n\r\n                    <svg id=\"Capa_1\" enable-background=\"new 0 0 511.696 511.696\" class=\"v-align-middle\" height=\"15\"\r\n                         viewBox=\"0 0 511.696 511.696\" width=\"15\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <g>\r\n                        <g id=\"Drive_4_\">\r\n                          <path\r\n                            d=\"m255.395 161.647-106.199 184.2h-.3l61.5 75-137.999 57.9c-2.701-1.5-4.801-3.6-6-5.7l-64.801-120c-3.3-6.601-.599-11.7.3-14.7l173.701-300c1.199-1.8 2.999-3.6 5.4-5.101h.3l89.099 27.601z\"\r\n                            fill=\"#59c36a\"/>\r\n                        </g>\r\n                        <path\r\n                          d=\"m511.696 345.848-120.3 75-28.5-75-107.5-184.2-74.1-128.402c2.098-1.5 4.799-2.399 7.2-2.399h134.799c3.001.899 9.001.599 12.9 7.5l173.701 300c1.199 2.101 1.8 4.8 1.8 7.501z\"\r\n                          fill=\"#ffda2d\"/>\r\n                        <path\r\n                          d=\"m336.194 38.348c-3.898-6.901-9.899-6.601-12.9-7.5h-67.899v130.8l107.5 184.2 28.5 75 120.3-75c0-2.701-.601-5.4-1.8-7.5z\"\r\n                          fill=\"#fdbf00\"/>\r\n                        <path\r\n                          d=\"m511.696 345.848c0 2.699-.601 5.4-1.5 7.2l-64.801 120c-2.401 3.9-8.099 7.8-13.2 7.8h-352.599c-2.401 0-5.101-.901-7.2-2.1l76.5-132.9z\"\r\n                          fill=\"#4086f4\"/>\r\n                        <path\r\n                          d=\"m255.395 480.848h176.8c5.101 0 10.8-3.9 13.2-7.8l64.801-120c.899-1.8 1.5-4.501 1.5-7.2h-256.3v135z\"\r\n                          fill=\"#4175df\"/>\r\n                      </g>\r\n                    </svg>\r\n                  </a>\r\n                  <mat-icon matBadge=\"{{getDocumentArray(i,j).controls.length}}\" matBadgeColor=\"warn\"\r\n                                        matTooltip=\"View Document\" *ngIf=\"getDocumentArray(i,j).controls.length > 0\" class=\"primary-color cursor-pointer v-align-middle\" (click)=\"openRow(updateinfo.value['id'])\">cloud_done\r\n                </mat-icon>\r\n                </td>\r\n                <td width=\"10%\" class=\"word-break\" *ngIf=\"queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6\">\r\n                  {{getAnswerName(updateinfo.get('answer_type').value)}}\r\n                </td>\r\n                <td width=\"10%\" class=\"word-break\" *ngIf=\"queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6\">{{updateinfo.value['client_comment']}}</td>\r\n                <td width=\"6%\">\r\n                  <mat-form-field [floatLabel]=\"'never'\">\r\n                    <mat-select [formControl]=\"updateinfo.get('status_id')\">\r\n                      <mat-option *ngFor=\"let statusData of informationStatus\" [value]=\"statusData?.key\">\r\n                        {{ statusData?.label }}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </td>\r\n                <td width=\"1%\">\r\n                  <mat-icon *ngIf=\"getQueryArray(i).controls.length - 1 == j && bankDetail.value['rows'] > 0\" class=\"red-color cursor-pointer\" (click)=\"onAddQuery(updateinfo.value['bank_id'],updateinfo.value['bank_info_id'])\"\r\n                            matTooltip=\"Add Query\">\r\n                    add\r\n                  </mat-icon>\r\n                  <mat-icon *ngIf=\"getQueryArray(i).controls.length > 1 && bankDetail.value['rows'] > 0\" class=\"red-color cursor-pointer\" (click)=\"onDeleteQuery(updateinfo.value['id'])\"\r\n                            matTooltip=\"Delete Query\">\r\n                    delete\r\n                  </mat-icon>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"trIndex === updateinfo.value['id']\" class=\"inner-data\" style=\"position: relative;\">\r\n                <td [attr.colspan]=\"queryData?.stage_id?.id >= 5 ? 11 : 9\" style=\"border-top:1px solid #c3c3c3;\">\r\n                  <div class=\"row col-md-12\">\r\n                    <div class=\"col-md-6\" *ngFor=\"let documentData of getDocumentArray(i,j).controls; let k = index\">\r\n                      <div class=\"inner-data__view\">\r\n                        <div class=\"\">{{documentData.value['is_client'] === 1 ? 'Client' : 'Befree'}} :</div>\r\n                        <div>\r\n                          <a (click)=\"onOpenDocumentFile(documentData.value)\" *ngIf=\"documentData.value['is_drive'] === 1\"\r\n                             class=\"cursor-pointer\">\r\n                            <mat-icon class=\"v-align-middle\">remove_red_eye</mat-icon>\r\n                            {{documentData.get('document_name').value}}\r\n                          </a>\r\n                          <a (click)=\"downloadDocument(documentData)\" *ngIf=\"documentData.value['is_drive'] === 0\"\r\n                             class=\"cursor-pointer\">\r\n                            <mat-icon class=\"v-align-middle primary-color\">get_app</mat-icon>\r\n                            {{documentData.get('document_name').value}}\r\n                          </a>\r\n                          <a (click)=\"deleteDocument(updateinfo.value['id'], documentData.get('id').value,i,j)\">\r\n                            <mat-icon aria-hidden=\"false\" aria-label=\"delete\" class=\"red-color v-align-middle\">delete\r\n                            </mat-icon>\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                    </div></div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n\r\n      <div class=\"row col-md-12\">\r\n\r\n        <div class=\"col-md-5 PL-0\" *ngIf=\"queryData?.stage_id?.id !== 5 && queryData?.stage_id?.id !== 6\">\r\n          <mat-card>\r\n            <div class=\"panel-title ML-0\">Additional Query</div>\r\n            <form [formGroup]=\"editAdditionalQueryForm\" #addAdditionaQueryForm=\"ngForm\"\r\n                  (submit)=\"onSubmitAdditionalQuery(editAdditionalQueryForm)\">\r\n              <div class=\"col-md-12 PLR-0\">\r\n                <mat-form-field>\r\n                  <mat-label>Comment</mat-label>\r\n                  <textarea matInput formControlName=\"comment\"></textarea>\r\n                </mat-form-field>\r\n                <div class=\"validation-msg\">\r\n                  <app-validation *ngIf=\"isRequiredField(editAdditionalQueryForm.get('comment'))\"\r\n                                  [errMsg]=\"validationMsg.QUERY_COMMENTS_REQUIRED\"></app-validation>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12 PLR-0 text-right\">\r\n                <button type=\"submit\" class=\"btn-primary\" [disabled]=\"editAdditionalQueryForm.invalid\">\r\n                  Add\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </mat-card>\r\n        </div>\r\n        <div class=\"col-md-7 PL-0\">\r\n          <mat-card>\r\n            <!-- Start Table -->\r\n            <div class=\"expand-grid\">\r\n              <div class=\"expand-grid__thead\">\r\n                <table *ngIf=\"additionalQueryListing.length\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th width=\"5%\">Sr. No</th>\r\n                    <th width=\"50%\">Additional Query</th>\r\n                    <th width=\"{{queryData?.stage_id?.id >= 6 ? '25%' : '40%'}}\">Document</th>\r\n                    <th *ngIf=\"queryData?.stage_id?.id >= 6\" width=\"15%\">Client Comment</th>\r\n                    <th width=\"5%\">Action</th>\r\n                  </tr>\r\n                  </thead>\r\n                </table>\r\n\r\n                <div class=\"expand-grid__tbody expand-grid-scrollable\" *ngIf=\"additionalQueryListing.length\">\r\n                  <table>\r\n                    <tbody *ngFor=\"let updateAdditionalQuery of additionalQueryListing; let k = index\">\r\n                    <tr [ngClass]=\"{'is-active-row' : trIndexInner === k}\" class=\"hover-icons row-data\">\r\n                      <td width=\"5%\">\r\n                        {{k + 1}}\r\n                      </td>\r\n                      <td width=\"50%\" class=\"word-break\">{{updateAdditionalQuery?.comment}}</td>\r\n                      <td width=\"{{queryData?.stage_id?.id >= 6 ? '25%' : '40%'}}\">\r\n                        <input type=\"file\" [hidden]=\"true\" id=\"{{'addDocumentAdd_'+ updateAdditionalQuery.id}}\"\r\n                               (change)=\"onUploadDocumentAdditional($event, updateAdditionalQuery.id, k)\"\r\n                               [multiple]=\"true\"/>\r\n\r\n                        <mat-icon class=\"orange-color\"\r\n                                  (click)=\"onFileSelect('addDocumentAdd_' + updateAdditionalQuery.id)\"\r\n                                  matTooltip=\"Add Document\">note_add\r\n                        </mat-icon>\r\n                        <a (click)=\"onAddDocumentsDialog(updateAdditionalQuery.id,k,0,5)\" class=\"cursor-pointer\"\r\n                           style=\"vertical-align: super;\">\r\n\r\n                          <svg id=\"Capa_1\" enable-background=\"new 0 0 511.696 511.696\" class=\"v-align-middle MR-5\"\r\n                               height=\"15\"\r\n                               viewBox=\"0 0 511.696 511.696\" width=\"15\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                            <g>\r\n                              <g id=\"Drive_4_\">\r\n                                <path\r\n                                  d=\"m255.395 161.647-106.199 184.2h-.3l61.5 75-137.999 57.9c-2.701-1.5-4.801-3.6-6-5.7l-64.801-120c-3.3-6.601-.599-11.7.3-14.7l173.701-300c1.199-1.8 2.999-3.6 5.4-5.101h.3l89.099 27.601z\"\r\n                                  fill=\"#59c36a\"/>\r\n                              </g>\r\n                              <path\r\n                                d=\"m511.696 345.848-120.3 75-28.5-75-107.5-184.2-74.1-128.402c2.098-1.5 4.799-2.399 7.2-2.399h134.799c3.001.899 9.001.599 12.9 7.5l173.701 300c1.199 2.101 1.8 4.8 1.8 7.501z\"\r\n                                fill=\"#ffda2d\"/>\r\n                              <path\r\n                                d=\"m336.194 38.348c-3.898-6.901-9.899-6.601-12.9-7.5h-67.899v130.8l107.5 184.2 28.5 75 120.3-75c0-2.701-.601-5.4-1.8-7.5z\"\r\n                                fill=\"#fdbf00\"/>\r\n                              <path\r\n                                d=\"m511.696 345.848c0 2.699-.601 5.4-1.5 7.2l-64.801 120c-2.401 3.9-8.099 7.8-13.2 7.8h-352.599c-2.401 0-5.101-.901-7.2-2.1l76.5-132.9z\"\r\n                                fill=\"#4086f4\"/>\r\n                              <path\r\n                                d=\"m255.395 480.848h176.8c5.101 0 10.8-3.9 13.2-7.8l64.801-120c.899-1.8 1.5-4.501 1.5-7.2h-256.3v135z\"\r\n                                fill=\"#4175df\"/>\r\n                            </g>\r\n                          </svg>\r\n                        </a>\r\n                        <mat-icon matBadge=\"{{updateAdditionalQuery['document'].length}}\" matBadgeColor=\"warn\"\r\n                                  matTooltip=\"View Document\" (click)=\"openRowAdditionalComments(k)\" *ngIf=\"updateAdditionalQuery['document'].length\" class=\"primary-color\">cloud_done\r\n                        </mat-icon>\r\n                      </td>\r\n                      <td *ngIf=\"queryData?.stage_id?.id >= 6\" width=\"15%\" class=\"word-break\">{{updateAdditionalQuery?.client_comment}}</td>\r\n                      <td width=\"5%\">\r\n                        <a (click)=\"removeAdditionalQuery(updateAdditionalQuery)\" *ngIf=\"updateAdditionalQuery?.is_deleted != 1 && queryData?.stage_id?.id < 5\">\r\n                          <mat-icon matTooltip=\"Resolve Query\" aria-hidden=\"false\" aria-label=\"delete\" class=\"red-color\">playlist_add_check\r\n                          </mat-icon>\r\n                        </a>\r\n\r\n                        <mat-icon *ngIf=\"updateAdditionalQuery?.is_deleted == 1\" matTooltip=\"Resolve Query on {{updateAdditionalQuery?.deleted_on | date : 'dd-MM-yyy HH:mm:ss'}}\" class=\"turquoise-color\">done_all</mat-icon>\r\n                      </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"trIndexInner === k\" class=\"inner-data\">\r\n                      <div class=\"row PT-10\">\r\n                        <div class=\"col-md-6\"  *ngFor=\"let documentsList of updateAdditionalQuery['document']; let m = index\">\r\n                          <div class=\"inner-data__view\">\r\n                            <div class=\"\">{{documentsList?.is_client === 1 ? 'Client' : 'Befree'}} :</div>\r\n                            <div>\r\n                              <a (click)=\"onOpenDocumentFile(documentsList)\" *ngIf=\"documentsList?.is_drive === 1\"\r\n                                 class=\"cursor-pointer v-align-middle\">\r\n                                <mat-icon>remove_red_eye</mat-icon>{{documentsList?.document_name}}\r\n                              </a>\r\n                              <a (click)=\"downloadDocument(documentsList, 1)\" *ngIf=\"documentsList?.is_drive === 0\"\r\n                                 class=\"cursor-pointer v-align-middle\">\r\n                                <mat-icon class=\"v-align-middle\">get_app</mat-icon>{{documentsList?.document_name}}\r\n                              </a>\r\n                              <a (click)=\"deleteAdditionalDocument(documentsList?.id)\"\r\n                                 *ngIf=\"documentsList?.is_client === 0\">\r\n                                <mat-icon aria-hidden=\"false\" aria-label=\"delete\" class=\"red-color v-align-middle\">delete\r\n                                </mat-icon>\r\n                              </a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <table *ngIf=\"isSendToClient\">\r\n                  <tfoot>\r\n                  <tr>\r\n                    <td colspan=\"8\" class=\"\"></td>\r\n                    <td colspan=\"2\" class=\"PR-10\" style=\"float: right\" *ngIf=\"queryData?.stage_id?.id !== 5 && queryData?.stage_id?.id !== 6\">\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"Reminder Days\" formControlName=\"reminder\">\r\n                          <mat-option *ngFor=\"let days of snoozeOrReminderDays\" [value]=\"days['key']\">\r\n                            {{days['label']}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"validation-msg\">\r\n                        <app-validation *ngIf=\"isRequiredField(editQueryForm.get('reminder'))\"\r\n                                        [errMsg]=\"validationMsg.REMINDER_REQUIRED\"></app-validation>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  </tfoot>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <!-- End Grid -->\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-md-12\">\r\n        <div class=\"col-md-6 PL-0\" *ngIf=\"queryData?.sendback_reason_tm\">\r\n          <span class=\"panel-title\">Send Back Reason to TM :</span> {{queryData?.sendback_reason_tm}}\r\n        </div>\r\n        <div class=\"col-md-6 PL-0\" *ngIf=\"queryData?.sendback_reason_atl\">\r\n          <span class=\"panel-title\">Send Back Reason to ATL :</span> {{queryData?.sendback_reason_atl}}\r\n        </div>\r\n        <div class=\"col-md-6 PL-0\" *ngIf=\"queryData?.sendback_reason_tl\">\r\n          <span class=\"panel-title\"> Send Back Reason to TL :</span> {{queryData?.sendback_reason_tl}}\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12 PB-20\">\r\n        <div class=\"row MT-30\">\r\n          <div class=\"col-md-6 PL-0\">\r\n            <button *ngIf=\"queryData?.stage_id?.id !== 5 && queryData?.stage_id?.id !== 6\" type=\"submit\" class=\"btn-primary\"\r\n                    (click)=\"updateStatusIdWithDraft(queryData.stage_id.id, 1, 'draft')\">\r\n              Save\r\n            </button>\r\n            <button *ngIf=\"queryData?.stage_id?.id === 5 || queryData?.stage_id?.id === 6\" type=\"submit\" class=\"btn-primary\"\r\n                    (click)=\"updateStatusIdWithDraft(queryData.stage_id.id, 0,'submit')\">\r\n              Submit\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-6 text-right PR-0\">\r\n            <button\r\n              *ngIf=\"queryData.stage_id.id === 2 || queryData.stage_id.id === 3 || queryData.stage_id.id === 4\"\r\n              (click)=\"onSendtoStaff(queryData,1,1)\" type=\"button\" class=\"btn-dark-blue MR-5\">Send back to\r\n              Staff\r\n            </button>\r\n            <button *ngIf=\"queryData.stage_id.id === 3 || queryData.stage_id.id === 4\"\r\n                    (click)=\"onSendtoStaff(queryData,2,2)\" type=\"button\" class=\"btn-orange MR-5\">Send back\r\n              to\r\n              ATL\r\n            </button>\r\n            <button *ngIf=\"queryData.stage_id.id === 4\"\r\n                    (click)=\"onSendtoStaff(queryData,3,3)\" type=\"button\" class=\"btn-dark-blue MR-5 \">Send back\r\n              to\r\n              TL\r\n            </button>\r\n            <button\r\n              *ngIf=\"queryData.stage_id.id === 1\"\r\n              (click)=\"updateStatusIdWithDraft(2, 0, 'ATL')\" type=\"submit\" class=\"btn-orange MR-5\"\r\n              [disabled]=\"editQueryForm.invalid\">Send to ATL\r\n            </button>\r\n            <button\r\n              *ngIf=\"queryData.stage_id.id === 1 || queryData.stage_id.id === 2\"\r\n              (click)=\"updateStatusIdWithDraft(3, 0, 'TL')\" type=\"submit\" class=\"btn-dark-blue MR-5\"\r\n              [disabled]=\"editQueryForm.invalid\">Send to TL\r\n            </button>\r\n            <button\r\n              *ngIf=\"queryData.stage_id.id === 1 || queryData.stage_id.id === 2 || queryData.stage_id.id === 3\"\r\n              (click)=\"updateStatusIdWithDraft(4, 0, 'TAM')\" type=\"submit\" class=\"btn-primary MR-5\"\r\n              [disabled]=\"editQueryForm.invalid\">Send to TAM\r\n            </button>\r\n            <button\r\n              *ngIf=\"(queryData.stage_id.id === 1 || queryData.stage_id.id === 2 || queryData.stage_id.id === 3 || queryData.stage_id.id === 4) && (isSendToClient === true)\"\r\n              (click)=\"updateStatusIdWithDraft(queryData.stage_id.id, 0, 'Client');\" type=\"submit\"\r\n              class=\"btn-success\" [disabled]=\"editQueryForm.invalid\">Send to Client\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/edit-queries.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/edit-queries.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".min_width_query .mat-form-field {\n  width: 120px !important; }\n\n.merge_cells tr td {\n  display: table-cell;\n  padding: 0.7rem 1rem;\n  font-size: 1.3rem;\n  color: #4f4f4f;\n  border-bottom: 1px solid #f0f0f0; }\n\n.merge_cells tr td .mat-icon {\n    font-size: 1.8rem;\n    cursor: pointer; }\n\n.bgTextarea_Merge_Cell {\n  background: #efefef;\n  border-bottom: 5px solid #ffffff !important; }\n\n.textarea_small {\n  vertical-align: middle; }\n\n.textarea_small .mat-form-field {\n    width: auto !important; }\n\n.textarea_small .mat-form-field-infix {\n    border: 0px !important; }\n\n.textarea_small .ng-select {\n    min-width: 250px !important;\n    max-width: 280px !important; }\n\n.textarea_small .ng-select .ng-option span {\n      white-space: normal !important; }\n\n.query-module .mat-expansion-panel-header {\n  background: #f9f9f9 !important;\n  height: 40px !important; }\n\n.query-module .mat-expansion-panel {\n  border-bottom: 1px solid #e6e6e6 !important;\n  border-radius: 0 !important;\n  margin-bottom: 5px;\n  box-shadow: none; }\n\n.query-module .mat-card {\n  border: 1px solid #dcdcdc;\n  box-shadow: none; }\n\n.query-module .inner-data mat-icon {\n  font-size: 20px; }\n\n.query-module .merge_cells {\n  max-height: 61vh;\n  overflow: auto;\n  padding: 0;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vY2xpZW50LW1vZHVsZS9xdWVyeS1tb2R1bGUvcXVlcnktZGFzaGJvYXJkLXRhYi9lZGl0LXF1ZXJpZXMvQzpcXHdhbXA2NFxcd3d3XFxoa19mcm9udGVuZC9wcm9qZWN0c1xcYWRtaW5cXHNyY1xcYXBwXFxhZG1pblxcY2xpZW50LW1vZHVsZVxccXVlcnktbW9kdWxlXFxxdWVyeS1kYXNoYm9hcmQtdGFiXFxlZGl0LXF1ZXJpZXNcXGVkaXQtcXVlcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLHVCQUF1QixFQUFBOztBQUkzQjtFQUdNLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTs7QUFQdEM7SUFTUSxpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQU92QjtFQUNFLG1CQUFtQjtFQUNuQiwyQ0FBMkMsRUFBQTs7QUFJN0M7RUFDRSxzQkFBc0IsRUFBQTs7QUFEeEI7SUFLSSxzQkFBc0IsRUFBQTs7QUFMMUI7SUFRSSxzQkFBc0IsRUFBQTs7QUFSMUI7SUFZSSwyQkFBMkI7SUFDM0IsMkJBQTJCLEVBQUE7O0FBYi9CO01BZ0JRLDhCQUE4QixFQUFBOztBQVF0QztFQUVJLDhCQUE4QjtFQUM5Qix1QkFBdUIsRUFBQTs7QUFIM0I7RUFPSSwyQ0FBMkM7RUFDM0MsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFWcEI7RUFhSSx5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7O0FBZHBCO0VBbUJNLGVBQWUsRUFBQTs7QUFuQnJCO0VBd0JJLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vY2xpZW50LW1vZHVsZS9xdWVyeS1tb2R1bGUvcXVlcnktZGFzaGJvYXJkLXRhYi9lZGl0LXF1ZXJpZXMvZWRpdC1xdWVyaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5taW5fd2lkdGhfcXVlcnkge1xyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5tZXJnZV9jZWxscyB7XHJcbiAgdHIge1xyXG4gICAgdGQge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcclxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcclxuICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uYmdUZXh0YXJlYV9NZXJnZV9DZWxsIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vdGV4dGFyZWEgdG9wIHNwYWNlXHJcbi50ZXh0YXJlYV9zbWFsbCB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5nLXNlbGVjdCB7XHJcblxyXG4gICAgbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAyODBweCAhaW1wb3J0YW50O1xyXG4gICAgLm5nLW9wdGlvbiB7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4ucXVlcnktbW9kdWxlIHtcclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgLm1hdC1jYXJkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmlubmVyLWRhdGEge1xyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWVyZ2VfY2VsbHMge1xyXG4gICAgbWF4LWhlaWdodDogNjF2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/edit-queries.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/edit-queries.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: EditQueriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditQueriesComponent", function() { return EditQueriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-user.service */ "./src/utility/shared-service/shared-user.service.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! file-saver */ "../../node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _upload_query_documents_dialog_upload_query_documents_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../upload-query-documents-dialog/upload-query-documents-dialog.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/upload-query-documents-dialog/upload-query-documents-dialog.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _query_send_back_to_staff_dialog_query_send_back_to_staff_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./query-send-back-to-staff-dialog/query-send-back-to-staff-dialog.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/query-send-back-to-staff-dialog/query-send-back-to-staff-dialog.component.ts");
/* harmony import */ var _query_send_to_client_dialog_query_send_to_client_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./query-send-to-client-dialog/query-send-to-client-dialog.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/query-send-to-client-dialog/query-send-to-client-dialog.component.ts");
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




















var EditQueriesComponent = /** @class */ (function (_super) {
    __extends(EditQueriesComponent, _super);
    function EditQueriesComponent(_router, dialog, _fb, _commonCrudService, _sharedService, _sharedUserService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this.dialog = dialog;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this._sharedUserService = _sharedUserService;
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_6__["ValidationConstantMessage"]();
        // Data Variables
        _this.updateInformation = [];
        _this.informationStatus = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["information_status"];
        _this.moveTo = null;
        _this.uploadDoc = new FormData();
        _this.uploadDocName = [];
        _this.uploadAdditionalDocName = '';
        _this.docArray = [];
        _this.additionalQueryListing = [];
        _this.snoozeOrReminderDays = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["SnoozeOrReminderDays"];
        _this.yesNoQuestionMarksList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["yesNoQuestionMarks"];
        // State variables
        _this.trIndex = -1;
        _this.trIndexInner = -1;
        _this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].QUERY_MODULE;
        _this.isSendToClient = false;
        _this.googleMetaData = [];
        _this.queryQuestionList = [];
        _this.informationAnswerType = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["information_answer_type"];
        _this.queryData = _this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["GLOBALDATAKEYS"].QUERY_MODULE);
        return _this;
    }
    EditQueriesComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.isSendToClient = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'sent_to_client', 1);
        //console.log(this.isSendToClient);
        this.getQueryQuestions();
        this.createEditQueryForm();
        this.createAdditionalQueryForm();
        this.getBasicQueryData();
        this.getAdditionalQueryListing();
        this.getFileTypeList();
    };
    /**
     * Get File Type List
     */
    EditQueriesComponent.prototype.getFileTypeList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].DROPDOWN_LIST, {
            'table': 'google_drive_meta_data',
            'column': 'id,key,label,icon,mimeType,edit,class,isFileCreate,extension,isFileSearch,labelSearch,extensionSearch,extensionSearchSort'
        }, {}).subscribe(function (response) {
            // console.log(response);
            _this.googleMetaData = response;
        });
    };
    EditQueriesComponent.prototype.getQueryQuestions = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_QUESTION_LIST, { 'records': 'all' }, {})
            .subscribe(function (response) {
            _this.queryQuestionList = response.payload.data;
        });
    };
    /**
     * Get Basic Query Data
     */
    EditQueriesComponent.prototype.getBasicQueryData = function () {
        var _this = this;
        if (this.queryData && this.queryData.id > 0) {
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_VIEW, this.queryData.id).subscribe(function (response) {
                // this.queryData = response.payload.data;
                var informationDataList = (response.payload.data) ? response.payload.data : [];
                var informationData = informationDataList;
                delete informationData['basic'];
                delete informationData['adddetail'];
                if (!_utility_common_functions__WEBPACK_IMPORTED_MODULE_14__["CommonFunctions"].isEmpty(informationData)) {
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
                // console.log(this.editQueryForm);
            });
        }
    };
    /**
     * Create Edit Information Form
     */
    EditQueriesComponent.prototype.createEditQueryForm = function () {
        this.editQueryForm = this._fb.group({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.queryData.subject ? this.queryData.subject : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            reminder: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.queryData && this.queryData.reminder != null ? this.queryData.reminder : 1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            bank_details: this._fb.array([]),
            // additional_info: this._fb.array([]),
            stage_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            is_draft: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            final_submit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1)
        });
    };
    /**
     * Create Bank Detail Item
     * @param item
     */
    EditQueriesComponent.prototype.createBankDetailItem = function (item) {
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.id : ''),
            bank_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.bank_name : ''),
            account_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.account_no : ''),
            rows: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((item && item.rows > 0) ? item.rows : 0),
            infoDetail: this._fb.array([]),
        });
    };
    /**
     * Create Query Detail Item
     */
    EditQueriesComponent.prototype.createQueryDetailItem = function (item) {
        var rowSpan = (item && item.merge_start > 0 && item.merge_end > 0) ? (Number(item.merge_end) - Number(item.merge_start)) : 0;
        rowSpan = (rowSpan > 0) ? rowSpan + 1 : 0;
        var transationDate = (item && item.transation_date != null && item.transation_date !== "0000-00-00") ? moment__WEBPACK_IMPORTED_MODULE_17__(item.transation_date).format('YYYY-MM-DD') : "";
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.id : ''),
            query_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.query_id : ''),
            bank_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.bank_id : ''),
            bank_info_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.bank_info_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            transation_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.transation_date : _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            memo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.memo : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            withdraw: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.withdraw : ''),
            deposit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.deposit : ''),
            gst: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.gst : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? (item.status_id > 0) ? item.status_id : 1 : 1),
            query_comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.query_comment : ''),
            merge_start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.merge_start : ''),
            merge_end: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.merge_end : ''),
            rowSpan: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](rowSpan),
            is_skip: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((item && item.is_skip) ? item.is_skip : 0),
            answer_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.answer_type : ''),
            client_comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.client_comment : ''),
            status_comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.status_comment : ''),
            documents: this._fb.array([])
        });
    };
    /**
     * Create Document Item
     */
    EditQueriesComponent.prototype.createDocumentItem = function (item) {
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.id : null),
            query_detail_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.query_detail_id : null),
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
     * Create Info Additional Query Detail Item
     */
    EditQueriesComponent.prototype.createAdditionalQueryForm = function (item) {
        this.editAdditionalQueryForm = this._fb.group({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.comment : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            is_drive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item.is_drive : 0),
        });
    };
    /**
     * Get Query Array
     */
    EditQueriesComponent.prototype.getQueryArray = function (i) {
        return this.getQueryBankArray().controls[i].get('infoDetail');
    };
    /**
     * Get Query Bank Array
     */
    EditQueriesComponent.prototype.getQueryBankArray = function () {
        return this.editQueryForm.get('bank_details');
    };
    /**
     * Get Document Array
     */
    EditQueriesComponent.prototype.getDocumentArray = function (i, index) {
        return this.getQueryArray(i).controls[index].get('documents');
    };
    /**
     * Update Value
     * @param index
     * @param child
     * @param value
     */
    EditQueriesComponent.prototype.updateDateForQuery = function (index, child, value) {
        // this.get    moment(value).format('YYYY-MM-DD');
        var itemValue = moment__WEBPACK_IMPORTED_MODULE_17__(value).format('YYYY-MM-DD');
        this.getQueryArray(index).controls[child].get('transation_date').setValue(itemValue);
    };
    // Events
    EditQueriesComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    EditQueriesComponent.prototype.openRowAdditionalComments = function (i) {
        this.trIndexInner = (this.trIndexInner !== i) ? i : -1;
    };
    /**
     * On home page route
     */
    EditQueriesComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    EditQueriesComponent.prototype.onGoQueryModule = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_4__["AdminRoutes"].PENDING_QUERY]);
    };
    /**
     * On Send to client
     * @param queryData
     */
    EditQueriesComponent.prototype.onSendtoClient = function (queryData) {
        var _this = this;
        var dialogRef = this.dialog.open(_query_send_to_client_dialog_query_send_to_client_dialog_component__WEBPACK_IMPORTED_MODULE_19__["QuerySendToClientDialogComponent"], {
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
    EditQueriesComponent.prototype.onSendtoStaff = function (queryData, typeInfo, stageId) {
        var _this = this;
        var dialogRef = this.dialog.open(_query_send_back_to_staff_dialog_query_send_back_to_staff_dialog_component__WEBPACK_IMPORTED_MODULE_18__["QuerySendBackToStaffDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                queryData: queryData,
                type: typeInfo,
                status_id: stageId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.editQueryForm.get('stage_id').setValue(stageId);
                _this.submitQueryBeforeSendBack(_this.editQueryForm);
                _this.onGoQueryModule();
            }
        });
    };
    /**
     * Submit Query Before Send Back
     * @param form
     */
    EditQueriesComponent.prototype.submitQueryBeforeSendBack = function (form) {
        var infoDetail = form.value['bank_details'];
        form.value['bank_details'] = JSON.stringify(form.value['bank_details']);
        delete form.value['final_submit'];
        this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_UPDATE, this.queryData.id, form.value).subscribe(function (response) {
        });
    };
    /**
     * On Button Click need to update status & is_draft
     * @param stageId
     * @param isDraft
     */
    EditQueriesComponent.prototype.updateStatusIdWithDraft = function (stageId, isDraft, moveTo) {
        this.editQueryForm.get('is_draft').setValue(isDraft);
        this.editQueryForm.get('stage_id').setValue(stageId);
        this.moveTo = moveTo;
    };
    /**
     * On Submit Edit Information
     * @param form
     */
    EditQueriesComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var infoDetail = form.value['bank_details'];
        form.value['bank_details'] = JSON.stringify(form.value['bank_details']);
        if (this.moveTo !== 'Client') {
            var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], {
                data: {
                    content: this.moveTo === 'draft' ? 'Are you sure you want to save it as draft?' : this.moveTo === 'submit' ? 'Are you sure you want to submit? Action will not be rollback.' : 'Are you sure you want to send it to ' + this.moveTo + '?'
                }
            });
            dialogRef.afterClosed().subscribe(function (value) {
                if (value) {
                    if (_this.moveTo === 'draft') {
                        if (_this.moveTo !== 'submit') {
                            delete form.value['final_submit'];
                        }
                        _this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_UPDATE, _this.queryData.id, form.value).subscribe(function (response) {
                            _this.onGoQueryModule();
                        });
                    }
                    else {
                        if (form.valid) {
                            if (_this.moveTo !== 'submit') {
                                delete form.value['final_submit'];
                            }
                            _this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_UPDATE, _this.queryData.id, form.value).subscribe(function (response) {
                                _this.onGoQueryModule();
                            });
                        }
                    }
                }
            });
        }
        else if (this.moveTo === 'Client') {
            if (form.valid) {
                if (this.moveTo !== 'submit') {
                    delete form.value['final_submit'];
                }
                this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_UPDATE, this.queryData.id, form.value).subscribe(function (response) {
                    _this.onSendtoClient(_this.queryData);
                });
            }
        }
        else {
            if (form.valid) {
                if (this.moveTo !== 'submit') {
                    delete form.value['final_submit'];
                }
                this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_UPDATE, this.queryData.id, form.value).subscribe(function (response) {
                    _this.onGoQueryModule();
                });
            }
        }
    };
    /**
     * On file selection
     * @param id
     */
    EditQueriesComponent.prototype.onFileSelect = function (id) {
        document.getElementById(id).click();
    };
    /**
     * on file changing
     * @param event
     */
    EditQueriesComponent.prototype.onUploadDocument = function (event, queryDetailId, index, child) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var filesList = event.target.files;
            if (filesList.length) {
                var f_1 = 0;
                Object.keys(event.target.files).forEach(function (itemUploadFile) {
                    var name = event.target.files[f_1].name;
                    _this.uploadDocName[index] = [];
                    _this.uploadDocName[index][child] = name;
                    var lastDot = name.lastIndexOf('.');
                    var ext = name.substring(lastDot + 1);
                    // if (isValidFileType(event.target.files[f].type) || isValidFileTypeExt(ext.toLowerCase())) {
                    if (event.target.files[f_1].size > _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstant"].TWINTY_FIVE_MP_FILE_ALLOWED) {
                        _this._sharedService.setToastMessage(_this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["ToastType"].ERROR);
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
                            _this._commonCrudService.uploadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_UPLOAD_DOCUMENT + '/' + queryDetailId, _this.uploadDoc).subscribe(function (response) {
                                _this.uploadDocName = [];
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
    EditQueriesComponent.prototype.onUploadDocumentAdditional = function (event, queryDetailId, index) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var filesList = event.target.files;
            if (filesList.length) {
                var f_2 = 0;
                Object.keys(event.target.files).forEach(function (itemUploadFile) {
                    var name = event.target.files[f_2].name;
                    var lastDot = name.lastIndexOf('.');
                    var ext = name.substring(lastDot + 1);
                    // if (isValidFileType(event.target.files[f].type) || isValidFileTypeExt(ext.toLowerCase())) {
                    if (event.target.files[f_2].size > _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstant"].TWINTY_FIVE_MP_FILE_ALLOWED) {
                        _this._sharedService.setToastMessage(_this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["ToastType"].ERROR);
                    }
                    else {
                        _this.uploadDoc.delete('query_detail_id');
                        _this.uploadDoc.delete('document_file');
                        _this.uploadDoc.delete('is_drive');
                        // document_type = 1 for Befree
                        // is_additional_info = 1 this document is not additional info
                        _this.uploadDoc.append('query_detail_id', queryDetailId);
                        _this.uploadDoc.append('is_drive', '0');
                        _this.uploadDoc.append('document_file', event.target.files[f_2]);
                        if (_this.uploadDoc) {
                            _this._commonCrudService.uploadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_ADDITIONAL_UPLOAD_DOCS + '/' + queryDetailId, _this.uploadDoc).subscribe(function (response) {
                                _this.getAdditionalQueryListing();
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
     * on file changing
     * @param event
     */
    EditQueriesComponent.prototype.onUploadAdditionalDocument = function (event, docType, isDrive) {
        var _this = this;
        this.editAdditionalQueryForm.get('is_drive').setValue(isDrive);
        if (event.target.files && event.target.files[0]) {
            var filesList_1 = event.target.files;
            if (filesList_1.length) {
                var f_3 = 0;
                Object.keys(event.target.files).forEach(function (itemUploadFile) {
                    var name = event.target.files[f_3].name;
                    _this.uploadAdditionalDocName = name;
                    var lastDot = name.lastIndexOf('.');
                    var ext = name.substring(lastDot + 1);
                    // if (isValidFileType(event.target.files[f].type) || isValidFileTypeExt(ext.toLowerCase())) {
                    if (event.target.files[f_3].size > _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstant"].TWINTY_FIVE_MP_FILE_ALLOWED) {
                        _this._sharedService.setToastMessage(_this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_7__["ToastType"].ERROR);
                    }
                    else {
                        var file = event.target.files[f_3];
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        if ((filesList_1.length - 1) === f_3) {
                            _this.docArray.push({
                                'reqKey': 'document_file',
                                'file': event.target.files,
                            });
                        }
                    }
                    // } else {
                    //   this._sharedService.setToastMessage(event.target.files[f].name + ' - ' + this.validationMsg.VALID_IMAGE_TYPE, ToastType.ERROR);
                    // }
                    f_3++;
                });
            }
        }
        event.target.value = '';
    };
    /**
     * Download Document
     * @param queryDocument
     */
    EditQueriesComponent.prototype.downloadDocument = function (queryDocument, is_additional_query) {
        // console.log(queryDocument);
        if (is_additional_query === 1) {
            var id = queryDocument['id'];
            this._commonCrudService.downloadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_DOCUMENT_DOWNLOAD_ADDITIONAL + '/' + id, {}).subscribe(function (response) {
                if (response && response.type) {
                    var extension = response.type.split('/');
                    file_saver__WEBPACK_IMPORTED_MODULE_15__["saveAs"](response, queryDocument['document_name']);
                }
            });
        }
        else {
            // console.log(queryDocument);
            if (queryDocument && queryDocument.get('id').value) {
                // const params = {'is_additional_query': isAdditional};
                this._commonCrudService.downloadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_DOCUMENT_DOWNLOAD + '/' + queryDocument.get('id').value, {}).subscribe(function (response) {
                    if (response && response.type) {
                        var extension = response.type.split('/');
                        file_saver__WEBPACK_IMPORTED_MODULE_15__["saveAs"](response, queryDocument.get('document_name').value);
                    }
                });
            }
        }
    };
    /**
     * On Open Document File
     * @param item
     */
    EditQueriesComponent.prototype.onOpenDocumentFile = function (item) {
        var _this = this;
        var params = { 'file_id': item.file_id };
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].GOOGLE_DRIVE_SHARE_FILE, params).subscribe(function (response) {
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
    EditQueriesComponent.prototype.deleteDocument = function (queryDetailsID, document_id, index, child) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this document ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_DOCUMENT_DELETE, document_id).subscribe(function (response) {
                    _this.getDocumentListRefresh(queryDetailsID, index, child);
                });
            }
        });
    };
    /**
     * Remove Document
     * @param informationDocument
     */
    EditQueriesComponent.prototype.deleteAdditionalDocument = function (document_id) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this document ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_ADDITIONAL_DOCS_DELTE, document_id).subscribe(function (response) {
                    _this.getAdditionalQueryListing();
                });
            }
        });
    };
    /**
     * On Submit Additional Query
     * @param form
     */
    EditQueriesComponent.prototype.onSubmitAdditionalQuery = function (form) {
        var _this = this;
        if (form.valid) {
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_ADDITIONAL_STORE + '/' + this.queryData.id, form.value, this.docArray).subscribe(function (response) {
                _this.getAdditionalQueryListing();
                _this.addAdditionaQueryForm.resetForm();
                _this.createAdditionalQueryForm();
                _this.uploadAdditionalDocName = '';
            });
        }
    };
    /**
     * Get Additional Query Listing
     */
    EditQueriesComponent.prototype.getAdditionalQueryListing = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_ADDITIONAL_LIST, this.queryData.id).subscribe(function (response) {
            _this.additionalQueryListing = response.payload.data;
        });
    };
    /**
     * Remove Additional Query
     * @param additionalQuery
     */
    EditQueriesComponent.prototype.removeAdditionalQuery = function (additionalQuery) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to mark as resolved this additional query ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_ADDITIONAL_DELETE, additionalQuery.id).subscribe(function (response) {
                    _this.getAdditionalQueryListing();
                });
            }
        });
    };
    /**
     * On Add Document Open Dialog
     * @param type
     */
    EditQueriesComponent.prototype.onAddDocumentsDialog = function (queryDetailId, index, child, type) {
        var _this = this;
        var dialogRef = this.dialog.open(_upload_query_documents_dialog_upload_query_documents_dialog_component__WEBPACK_IMPORTED_MODULE_16__["UploadQueryDocumentsDialogComponent"], {
            panelClass: 'xl-large-dialog-container',
            data: {
                queryData: this.queryData,
                queryDetailId: queryDetailId,
                uploadType: type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!_utility_common_functions__WEBPACK_IMPORTED_MODULE_14__["CommonFunctions"].isEmpty(result) && result['result'] === true && result['type'] === 3) {
                _this.getDocumentListRefresh(queryDetailId, index, child);
            }
            else if (!_utility_common_functions__WEBPACK_IMPORTED_MODULE_14__["CommonFunctions"].isEmpty(result) && result['result'] === true && result['type'] === 5) {
                _this.getAdditionalQueryListing();
            }
            // console.log(result);
            // if (result['result'] === true && result['type'] === 1) {
            //   this.getDocumentListRefresh(queryDetailId, index, child);
            // } else if (result['result'] === true && result['type'] === 2) {
            //   this.docArray.push({
            //     'reqKey': 'document_file',
            //     'file': result['selected_files'],
            //   });
            // }
        });
    };
    /**
     * Get Document List Refresh
     * @param queryDetailId
     * @param index
     */
    EditQueriesComponent.prototype.getDocumentListRefresh = function (queryDetailId, index, child) {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_DETAIL_VIEW, queryDetailId).subscribe(function (responseData) {
            // console.log(queryDetailId, responseData.payload.data);
            var queryDataItem = (responseData.payload.data) ? responseData.payload.data : [];
            // queryDataItem = queryDataItem.filter(item => item['id'] === queryDetailId);
            if (queryDataItem.length) {
                if (queryDataItem[0] && queryDataItem[0]['documents'] && queryDataItem[0]['documents'].length) {
                    _this.getDocumentArray(index, child).controls = [];
                    queryDataItem[0]['documents'].forEach(function (doc) {
                        _this.getDocumentArray(index, child).push(_this.createDocumentItem(doc));
                    });
                }
                else {
                    _this.getDocumentArray(index, child).controls = [];
                }
            }
        });
    };
    /**
     * Get Answer Name
     * @param status_id
     */
    EditQueriesComponent.prototype.getAnswerName = function (ans_type) {
        var val = this.informationAnswerType.filter(function (elem) { return elem.key === Number(ans_type); });
        return (val.length) ? val[0].label : '';
    };
    /**
     * On Delete Query
     * @param id
     */
    EditQueriesComponent.prototype.onDeleteQuery = function (id) {
        var _this = this;
        var dialogConfigData = {
            data: {
                content: 'Are you sure want to delete this query?'
            }
        };
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], dialogConfigData);
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_DELETE, id).subscribe(function () {
                    // this.getClientTurnoverList();
                    _this.getBasicQueryData();
                    _this.createEditQueryForm();
                });
            }
        });
    };
    EditQueriesComponent.prototype.onAddQuery = function (bank_id, bank_info_id) {
        var _this = this;
        var params = {};
        params['bank_id'] = bank_id;
        params['bank_info_id'] = bank_info_id;
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_13__["AdminAPI"].QUERY_ADD_EXTRA_ROW + '/' + this.queryData.id, params).subscribe(function (response) {
            _this.getBasicQueryData();
            _this.createEditQueryForm();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addAdditionaQueryForm'),
        __metadata("design:type", Object)
    ], EditQueriesComponent.prototype, "addAdditionaQueryForm", void 0);
    EditQueriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-queries',
            template: __webpack_require__(/*! ./edit-queries.component.html */ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/edit-queries.component.html"),
            styles: [__webpack_require__(/*! ./edit-queries.component.scss */ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/edit-queries.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_11__["SharedUserService"]])
    ], EditQueriesComponent);
    return EditQueriesComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_12__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/edit-queries.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/edit-queries.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: EditQueriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditQueriesModule", function() { return EditQueriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_queries_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-queries.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/edit-queries.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _query_send_to_client_dialog_query_send_to_client_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./query-send-to-client-dialog/query-send-to-client-dialog.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/query-send-to-client-dialog/query-send-to-client-dialog.component.ts");
/* harmony import */ var _query_send_back_to_staff_dialog_query_send_back_to_staff_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./query-send-back-to-staff-dialog/query-send-back-to-staff-dialog.component */ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/query-send-back-to-staff-dialog/query-send-back-to-staff-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _edit_queries_component__WEBPACK_IMPORTED_MODULE_2__["EditQueriesComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var EditQueriesModule = /** @class */ (function () {
    function EditQueriesModule() {
    }
    EditQueriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_queries_component__WEBPACK_IMPORTED_MODULE_2__["EditQueriesComponent"], _query_send_to_client_dialog_query_send_to_client_dialog_component__WEBPACK_IMPORTED_MODULE_6__["QuerySendToClientDialogComponent"], _query_send_back_to_staff_dialog_query_send_back_to_staff_dialog_component__WEBPACK_IMPORTED_MODULE_7__["QuerySendBackToStaffDialogComponent"]],
            entryComponents: [_query_send_to_client_dialog_query_send_to_client_dialog_component__WEBPACK_IMPORTED_MODULE_6__["QuerySendToClientDialogComponent"], _query_send_back_to_staff_dialog_query_send_back_to_staff_dialog_component__WEBPACK_IMPORTED_MODULE_7__["QuerySendBackToStaffDialogComponent"]]
        })
    ], EditQueriesModule);
    return EditQueriesModule;
}());



/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/query-send-back-to-staff-dialog/query-send-back-to-staff-dialog.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/query-send-back-to-staff-dialog/query-send-back-to-staff-dialog.component.html ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Send back to staff dialog  -->\r\n<div class=\"modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Send Back to {{moveTo}}</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose(false)\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <form [formGroup]=\"addSendtoStaffForm\" (submit)=\"onSubmit(addSendtoStaffForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-12 MB-20\">\r\n          <mat-form-field>\r\n            <mat-label>Reason</mat-label>\r\n            <textarea matInput\r\n                      cdkTextareaAutosize\r\n                      #autosize=\"cdkTextareaAutosize\"\r\n                      cdkAutosizeMinRows=\"1\"\r\n                      cdkAutosizeMaxRows=\"10\" formControlName=\"send_back_reason\" required></textarea>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSendtoStaffForm.get('send_back_reason'))\"\r\n                            [errMsg]=\"validationMsg.REASON_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" [disabled]=\"addSendtoStaffForm.invalid\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--  End Send back to staff dialog  -->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/query-send-back-to-staff-dialog/query-send-back-to-staff-dialog.component.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/query-send-back-to-staff-dialog/query-send-back-to-staff-dialog.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: QuerySendBackToStaffDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuerySendBackToStaffDialogComponent", function() { return QuerySendBackToStaffDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
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








var QuerySendBackToStaffDialogComponent = /** @class */ (function (_super) {
    __extends(QuerySendBackToStaffDialogComponent, _super);
    function QuerySendBackToStaffDialogComponent(_fb, dialog, dialogRef, data, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._commonCrudService = _commonCrudService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_2__["ValidationConstantMessage"]();
        _this.type = '';
        _this.status_id = 0;
        _this.moveTo = '';
        return _this;
    }
    QuerySendBackToStaffDialogComponent.prototype.ngOnInit = function () {
        this.queryData = (this.data.queryData) ? this.data.queryData : [];
        this.type = (this.data.type) ? this.data.type : null;
        this.status_id = (this.data.status_id) ? this.data.status_id : 0;
        this.moveTo = (this.status_id === 1) ? 'Staff' : (this.status_id === 2) ? 'ATL' : 'TL';
        this.createAddSendtoStaffForm();
    };
    /**
     * Create send back to staff form
     */
    QuerySendBackToStaffDialogComponent.prototype.createAddSendtoStaffForm = function () {
        this.addSendtoStaffForm = this._fb.group({
            send_back_reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            stage_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.status_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.type, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    /**
     * On Close dialog
     * @param value
     */
    QuerySendBackToStaffDialogComponent.prototype.onClose = function (value) {
        this.dialogRef.close(value);
    };
    /**
     * On Submit Send back to staff
     * @param form
     */
    QuerySendBackToStaffDialogComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to move this query back to ' + this.moveTo + '?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                if (form.valid) {
                    _this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].QUERY_SEND_BACK + '/' + _this.queryData.id, form.value).subscribe(function (response) {
                        _this.onClose(true);
                    });
                }
            }
        });
    };
    QuerySendBackToStaffDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query-send-back-to-staff-dialog',
            template: __webpack_require__(/*! ./query-send-back-to-staff-dialog.component.html */ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/query-send-back-to-staff-dialog/query-send-back-to-staff-dialog.component.html")
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"]])
    ], QuerySendBackToStaffDialogComponent);
    return QuerySendBackToStaffDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/query-send-to-client-dialog/query-send-to-client-dialog.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/query-send-to-client-dialog/query-send-to-client-dialog.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start Send to client Dialog-->\r\n<div class=\"modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">SEND TO CLIENT - {{queryData?.trading_name}}</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose(false)\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n  <form [formGroup]=\"addSendtoClientForm\" (submit)=\"onSubmit(addSendtoClientForm)\">\r\n    <div class=\"modal__body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 MB-10\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"From\" formControlName=\"from_email\" required>\r\n              <mat-option [value]=\"sendToClientFormData['from_email']\">{{sendToClientFormData['from_email']}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSendtoClientForm.get('from_email'))\"\r\n                            [errMsg]=\"validationMsg.FROM_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MB-20\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"To\" formControlName=\"to\" required>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSendtoClientForm.get('to'))\"\r\n                            [errMsg]=\"validationMsg.TO_REQUIRED\"></app-validation>\r\n            <app-validation *ngIf=\"isValidField(addSendtoClientForm.get('to'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_ADDRESS_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MB-20\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"CC\" formControlName=\"cc\">\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addSendtoClientForm.get('cc'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_ADDRESS_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MB-20\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"BCC\" formControlName=\"bcc\">\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isValidField(addSendtoClientForm.get('bcc'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_ADDRESS_VALID\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MB-20\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Subject\" formControlName=\"subject\" required>\r\n          </mat-form-field>\r\n          <div class=\"validation-msg\">\r\n            <app-validation *ngIf=\"isRequiredField(addSendtoClientForm.get('subject'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_SUBJECT_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 MB-20\">\r\n          <p class=\"PB-10\">Message</p>\r\n          <editor [formControl]=\"addSendtoClientForm.controls['content']\"\r\n                  [init]=\"{'menubar': 'false', 'height': 420, 'relative_urls': false, 'remove_script_host': false, 'convert_urls': true}\"></editor>\r\n          <div class=\"validation-msg MT-10\">\r\n            <app-validation *ngIf=\"isRequiredField(addSendtoClientForm.get('content'))\"\r\n                            [errMsg]=\"validationMsg.EMAIL_CONTENT_REQUIRED\"></app-validation>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__footer\">\r\n      <div class=\"text-right row\">\r\n        <div class=\"col-md-12 PR-25\">\r\n          <button class=\"btn-primary\" [disabled]=\"addSendtoClientForm.invalid\">Send</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/query-send-to-client-dialog/query-send-to-client-dialog.component.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/query-send-to-client-dialog/query-send-to-client-dialog.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: QuerySendToClientDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuerySendToClientDialogComponent", function() { return QuerySendToClientDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared-user.service */ "./src/utility/shared-service/shared-user.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
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












var QuerySendToClientDialogComponent = /** @class */ (function (_super) {
    __extends(QuerySendToClientDialogComponent, _super);
    function QuerySendToClientDialogComponent(_fb, dialog, _router, dialogRef, data, _commonCrudService, _sharedService, _sharedUserService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this.dialog = dialog;
        _this._router = _router;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this._sharedUserService = _sharedUserService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        _this.sendToClientFormData = [];
        _this.userList = [];
        return _this;
    }
    QuerySendToClientDialogComponent.prototype.ngOnInit = function () {
        this.queryData = (this.data.queryData) ? this.data.queryData : [];
        this.createAddSendtoClientForm();
        this.getAddSendToClientDetail();
        this.getUserList();
    };
    /**
     * Get User List
     */
    QuerySendToClientDialogComponent.prototype.getUserList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].ADMIN_USER, { 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.userList = response.payload.data;
        });
    };
    /**
     * Get Send to Client form data
     */
    QuerySendToClientDialogComponent.prototype.getAddSendToClientDetail = function () {
        var _this = this;
        var params = { 'query_id': this.queryData.id };
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].QUERY_SEND_INFO, this.queryData.id, params).subscribe(function (response) {
            _this.sendToClientFormData = response.payload.data;
            if (_this.sendToClientFormData) {
                _this.addSendtoClientForm.get('from_email').setValue(_this.sendToClientFormData['from_email']);
                _this.addSendtoClientForm.get('from_email').updateValueAndValidity();
                _this.addSendtoClientForm.get('to').setValue(_this.sendToClientFormData['to']);
                _this.addSendtoClientForm.get('to').updateValueAndValidity();
                _this.addSendtoClientForm.get('cc').setValue(_this.sendToClientFormData['cc']);
                _this.addSendtoClientForm.get('cc').updateValueAndValidity();
                _this.addSendtoClientForm.get('bcc').setValue(_this.sendToClientFormData['bcc']);
                _this.addSendtoClientForm.get('bcc').updateValueAndValidity();
                _this.addSendtoClientForm.get('subject').setValue(_this.sendToClientFormData['subject']);
                _this.addSendtoClientForm.get('subject').updateValueAndValidity();
                _this.addSendtoClientForm.get('content').setValue(_this.sendToClientFormData['content']);
                _this.addSendtoClientForm.get('content').updateValueAndValidity();
            }
        });
    };
    /**
     * Create assignee form
     */
    QuerySendToClientDialogComponent.prototype.createAddSendtoClientForm = function () {
        this.addSendtoClientForm = this._fb.group({
            from_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["CommonRegex"].MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
            cc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["CommonRegex"].MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
            bcc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_utility_validation__WEBPACK_IMPORTED_MODULE_3__["CommonRegex"].MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            stage_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](5, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            query_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.queryData.id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    QuerySendToClientDialogComponent.prototype.onClose = function (value) {
        this.dialogRef.close(value);
    };
    /**
     * on submit information
     * @param form
     */
    QuerySendToClientDialogComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to send it to client?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                if (form.valid) {
                    _this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].QUERY_SEND_INFO_DATA + '/' + _this.queryData.id, form.value).subscribe(function (response) {
                        _this.onClose(true);
                        _this.onGoDashboard();
                    });
                }
            }
        });
    };
    /**
     * On home page route
     */
    QuerySendToClientDialogComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_11__["AdminRoutes"].PENDING_QUERY]);
    };
    QuerySendToClientDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-to-client-dialog',
            template: __webpack_require__(/*! ./query-send-to-client-dialog.component.html */ "./src/app/admin/client-module/query-module/query-dashboard-tab/edit-queries/query-send-to-client-dialog/query-send-to-client-dialog.component.html")
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_8__["SharedUserService"]])
    ], QuerySendToClientDialogComponent);
    return QuerySendToClientDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=edit-queries-edit-queries-module.js.map