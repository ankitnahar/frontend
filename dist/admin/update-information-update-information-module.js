(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-information-update-information-module"],{

/***/ "./src/app/admin/client-module/information-required/information-required-tab/update-information/update-information.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/information-required/information-required-tab/update-information/update-information.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin (Administration)Update Information html view -->\r\n<div class=\"admin-manage-users-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>CLIENT</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span><a (click)=\"onGoInformationRequired()\">INFORMATION REQUIRED</a></span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\">UPDATE INFORMATION</span>\r\n\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span class=\"active\" *ngIf=\"informationData?.parent_id > 0\"> Parent Client : {{informationData?.parent_name}} | </span>\r\n          <span>{{informationData?.trading_name}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n  <form [formGroup]=\"editInformationForm\" (submit)=\"onSubmit(editInformationForm)\">\r\n\r\n    <div class=\"row\">\r\n      <span class=\"col-md-5 PLR-0\">\r\n      <span class=\"panel-title\">Frequency:</span> <label class=\"PT-15\">{{informationData?.frequency_name}}</label>\r\n      <span class=\"panel-title\">Trigger Period:</span> <label class=\"PT-15\">{{informationData?.start_period | date :\r\n      'dd-MM-yyyy'}} TO\r\n      {{informationData?.end_period | date : 'dd-MM-yyyy'}}</label>\r\n      <span class=\"panel-title\">Subject:</span>\r\n    </span>\r\n      <span class=\"col-md-7\" *ngIf=\"informationData?.stage_id?.id !== 5 && informationData?.stage_id?.id !== 6\">\r\n          <mat-form-field>\r\n            <input matInput formControlName=\"subject\" required/>\r\n          </mat-form-field>\r\n        </span>\r\n      <span class=\"col-md-7 MT-15\" *ngIf=\"informationData?.stage_id?.id === 5 || informationData?.stage_id?.id === 6\">\r\n          {{informationData?.subject}}\r\n        </span>\r\n    </div>\r\n    <div class=\"row\">    <!-- Start grid -->\r\n      <div class=\"col-md-12 expand-grid\">\r\n        <div class=\"expand-grid__thead\">\r\n          <table class=\"PT-0\">\r\n            <thead>\r\n            <tr>\r\n              <th width=\"4%\">Sr. No</th>\r\n              <th width=\"8%\">Information</th>\r\n              <th width=\"10%\">Type of Account</th>\r\n              <th width=\"8%\">Account No</th>\r\n              <th\r\n                width=\"{{informationData?.stage_id?.id === 5 || informationData?.stage_id?.id === 6 ? '11%' : '12%'}}\">\r\n                Period\r\n              </th>\r\n              <th\r\n                width=\"{{informationData?.stage_id?.id === 5 || informationData?.stage_id?.id === 6 ? '18%' : '30%'}}\">\r\n                Befree Comments\r\n              </th>\r\n              <th\r\n                width=\"{{informationData?.stage_id?.id === 5 || informationData?.stage_id?.id === 6 ? '11%' : '18%'}}\">\r\n                Documents\r\n              </th>\r\n              <th width=\"10%\" *ngIf=\"informationData?.stage_id?.id === 5 || informationData?.stage_id?.id === 6\">\r\n                Answer\r\n              </th>\r\n              <th width=\"10%\" *ngIf=\"informationData?.stage_id?.id === 5 || informationData?.stage_id?.id === 6\">\r\n                Client\r\n                Comments\r\n              </th>\r\n              <th width=\"10%\">Status</th>\r\n            </tr>\r\n            </thead>\r\n          </table>\r\n          <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n            <table>\r\n              <ng-container *ngFor=\"let updateinfo of getInformationArray().controls; let i = index\"\r\n                            class=\"hover-icons row-data\">\r\n                <tr>\r\n                  <td (click)=\"openRow(i)\" width=\"4%\">\r\n                    <a class=\"open-inner-data\">\r\n                    </a>{{i + 1}}\r\n                  </td>\r\n                  <td width=\"8%\" class=\"word-break\">{{updateinfo.value['bank_other']}}</td>\r\n                  <td width=\"10%\" class=\"word-break\">{{updateinfo.value['type_account']}}</td>\r\n                  <td width=\"8%\" class=\"word-break\">{{updateinfo.value['account_no']}}</td>\r\n                  <td width=\"12%\" class=\"grid_select_8rem date_no_border\"\r\n                      *ngIf=\"informationData?.stage_id?.id !== 5 && informationData?.stage_id?.id !== 6\">\r\n                    <div>\r\n                      <mat-form-field [floatLabel]=\"'never'\">\r\n                        <input matInput [matDatepicker]=\"fromdateRef\" placeholder=\"Start Date\"\r\n                               [formControl]=\"updateinfo.get('start_period')\"\r\n                               (dateChange)=\"updateDateForInformation(i,$event.value,'start_period')\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"fromdateRef\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #fromdateRef></mat-datepicker>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div>\r\n                      <mat-form-field [floatLabel]=\"'never'\">\r\n                        <input matInput [matDatepicker]=\"todateRef\" placeholder=\"End Date\"\r\n                               [formControl]=\"updateinfo.get('end_period')\"\r\n                               (dateChange)=\"updateDateForInformation(i,$event.value,'end_period')\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"todateRef\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #todateRef></mat-datepicker>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </td>\r\n                  <td width=\"11%\" class=\"word-break\"\r\n                      *ngIf=\"informationData?.stage_id?.id === 5 || informationData?.stage_id?.id === 6\">\r\n                    {{updateinfo.value['start_date'] | date :'dd-MM-yyyy'}} - {{updateinfo.value['end_date'] | date\r\n                    :'dd-MM-yyyy'}}\r\n                  </td>\r\n                  <td width=\"30%\" class=\"word-break\"\r\n                      *ngIf=\"informationData?.stage_id?.id !== 5 && informationData?.stage_id?.id !== 6\">\r\n                    <mat-form-field appearance=\"fill\">\r\n                      <textarea matInput value=\"{{updateinfo.value['befree_comment']}}\"\r\n                                [formControl]=\"updateinfo.get('befree_comment')\"></textarea>\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td width=\"18%\" class=\"word-break\"\r\n                      *ngIf=\"informationData?.stage_id?.id === 5 || informationData?.stage_id?.id === 6\">\r\n                    {{updateinfo.value['befree_comment']}}\r\n                  </td>\r\n                  <td class=\"word-break\"\r\n                      width=\"{{informationData?.stage_id?.id === 5 || informationData?.stage_id?.id === 6 ? '11%': '18%'}}\">\r\n                    <mat-icon class=\"orange-color\" (click)=\"onFileSelect('addDocument_' + updateinfo.value['id'])\"\r\n                              matTooltip=\"Add Document\">note_add\r\n                    </mat-icon>\r\n                    {{uploadDocName[i] ? uploadDocName[i] : ''}}\r\n                    <input type=\"file\" [hidden]=\"true\" id=\"{{'addDocument_'+ updateinfo.value['id']}}\"\r\n                           (change)=\"onUploadDocument($event,updateinfo.value['id'], i)\" value=\"\"\r\n                           [multiple]=\"true\"/>\r\n\r\n                    <a (click)=\"onAddDocumentsDialog(updateinfo.value['id'],i,2)\" class=\"cursor-pointer\"\r\n                       style=\"vertical-align: super;\">\r\n\r\n                      <svg id=\"Capa_1\" enable-background=\"new 0 0 511.696 511.696\" class=\"v-align-middle MR-5\"\r\n                           height=\"15\"\r\n                           viewBox=\"0 0 511.696 511.696\" width=\"15\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <g>\r\n                          <g id=\"Drive_4_\">\r\n                            <path\r\n                              d=\"m255.395 161.647-106.199 184.2h-.3l61.5 75-137.999 57.9c-2.701-1.5-4.801-3.6-6-5.7l-64.801-120c-3.3-6.601-.599-11.7.3-14.7l173.701-300c1.199-1.8 2.999-3.6 5.4-5.101h.3l89.099 27.601z\"\r\n                              fill=\"#59c36a\"/>\r\n                          </g>\r\n                          <path\r\n                            d=\"m511.696 345.848-120.3 75-28.5-75-107.5-184.2-74.1-128.402c2.098-1.5 4.799-2.399 7.2-2.399h134.799c3.001.899 9.001.599 12.9 7.5l173.701 300c1.199 2.101 1.8 4.8 1.8 7.501z\"\r\n                            fill=\"#ffda2d\"/>\r\n                          <path\r\n                            d=\"m336.194 38.348c-3.898-6.901-9.899-6.601-12.9-7.5h-67.899v130.8l107.5 184.2 28.5 75 120.3-75c0-2.701-.601-5.4-1.8-7.5z\"\r\n                            fill=\"#fdbf00\"/>\r\n                          <path\r\n                            d=\"m511.696 345.848c0 2.699-.601 5.4-1.5 7.2l-64.801 120c-2.401 3.9-8.099 7.8-13.2 7.8h-352.599c-2.401 0-5.101-.901-7.2-2.1l76.5-132.9z\"\r\n                            fill=\"#4086f4\"/>\r\n                          <path\r\n                            d=\"m255.395 480.848h176.8c5.101 0 10.8-3.9 13.2-7.8l64.801-120c.899-1.8 1.5-4.501 1.5-7.2h-256.3v135z\"\r\n                            fill=\"#4175df\"/>\r\n                        </g>\r\n                      </svg>\r\n                    </a>\r\n                    <mat-icon matBadge=\"{{getDocumentArray(i).controls.length}}\" matBadgeColor=\"warn\"\r\n                              matTooltip=\"View Document\" *ngIf=\"getDocumentArray(i).controls.length > 0\"\r\n                              class=\"primary-color\"\r\n                              (click)=\"openRow(i)\">cloud_done\r\n                    </mat-icon>\r\n                  </td>\r\n                  <td class=\"word-break\" width=\"10%\"\r\n                      *ngIf=\"informationData?.stage_id?.id === 5 || informationData?.stage_id?.id === 6\">\r\n                    {{getAnswerName(updateinfo.get('answer_type').value)}}\r\n                  </td>\r\n                  <td class=\"word-break\" width=\"10%\"\r\n                      *ngIf=\"informationData?.stage_id?.id === 5 || informationData?.stage_id?.id === 6\">\r\n                    {{updateinfo.value['client_comment']}}\r\n                  </td>\r\n                  <td class=\"word-break grid_select_8rem\" width=\"10%\">\r\n                    <mat-form-field>\r\n                      <mat-select [formControl]=\"updateinfo.get('status_id')\">\r\n                        <mat-option *ngFor=\"let statusData of informationStatus\" [value]=\"statusData?.key\">\r\n                          {{ statusData?.label }}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngIf=\"trIndex === i\" class=\"inner-data\">\r\n                  <td [attr.colspan]=\"informationData?.stage_id?.id >= 5 ? 10 : 8\">\r\n                    <div class=\"row col-md-12\">\r\n                      <div class=\"col-md-6\" *ngFor=\"let documentData of getDocumentArray(i).controls; let j = index\">\r\n                        <div class=\"inner-data__view\">\r\n                          <div class=\"\">{{documentData.value['is_client'] === 1 ? 'Client' : 'Befree'}} :</div>\r\n                          <div>\r\n                            <a (click)=\"onOpenDocumentFile(documentData.value)\"\r\n                               *ngIf=\"documentData.value['is_drive'] === 1\"\r\n                               class=\"cursor-pointer\">\r\n                              <mat-icon class=\"v-align-middle\">remove_red_eye</mat-icon>\r\n                              {{documentData.get('document_name').value}}\r\n                            </a>\r\n                            <a (click)=\"downloadDocument(documentData)\" *ngIf=\"documentData.value['is_drive'] === 0\"\r\n                               class=\"cursor-pointer\">\r\n                              <mat-icon class=\"v-align-middle primary-color\">get_app</mat-icon>\r\n                              {{documentData.get('document_name').value}}\r\n                            </a>\r\n                            <a (click)=\"deleteDocument(updateinfo.value['id'], documentData.get('id').value,i)\"\r\n                               *ngIf=\"documentData.value['is_client'] === 0\">\r\n                              <mat-icon aria-hidden=\"false\" aria-label=\"delete\" class=\"red-color v-align-middle\">delete\r\n                              </mat-icon>\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n\r\n                </tr>\r\n              </ng-container>\r\n            </table>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row information-card\">\r\n      <div class=\"col-md-6\" *ngIf=\"informationData?.stage_id?.id !== 5 && informationData?.stage_id?.id !== 6\">\r\n        <mat-card>\r\n          <div class=\"panel-title ML-0\">Additional Information</div>\r\n          <form [formGroup]=\"editAdditionalInformationForm\" #addAdditionaInfoForm=\"ngForm\"\r\n                (submit)=\"onSubmitAdditionalInfo(editAdditionalInformationForm)\">\r\n            <div class=\"col-md-12 PL-0\">\r\n              <mat-form-field>\r\n                <mat-label>Comment</mat-label>\r\n                <input matInput formControlName=\"comment\"/>\r\n              </mat-form-field>\r\n              <div class=\"validation-msg\">\r\n                <app-validation *ngIf=\"isRequiredField(editAdditionalInformationForm.get('comment'))\"\r\n                                [errMsg]=\"validationMsg.QUERY_COMMENTS_REQUIRED\"></app-validation>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12 PL-0 text-right\">\r\n              <button type=\"submit\" class=\"btn-primary\" [disabled]=\"editAdditionalInformationForm.invalid\">\r\n                Add\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"col-md-6 PL-0\">\r\n        <mat-card>\r\n          <!-- Start Table -->\r\n          <div class=\"expand-grid\">\r\n            <div class=\"expand-grid__thead\">\r\n              <table *ngIf=\"additionalInformationListing.length\">\r\n                <thead>\r\n                <tr>\r\n                  <th width=\"7%\">Sr. No</th>\r\n                  <th width=\"50%\">Additional Information</th>\r\n                  <th width=\"{{informationData?.stage_id?.id >= 6 ? '25%' : '43%'}}\">Document</th>\r\n                  <th *ngIf=\"informationData?.stage_id?.id >= 6\" width=\"18%\">Client Comment</th>\r\n                  <th width=\"10%\">Action</th>\r\n                </tr>\r\n                </thead>\r\n              </table>\r\n\r\n              <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n                <table>\r\n                  <tbody *ngFor=\"let updateAdditionalinfo of additionalInformationListing; let j = index\">\r\n                  <tr [ngClass]=\"{'is-active-row' : trIndexInner === j}\" class=\"hover-icons row-data\">\r\n                    <td width=\"7%\">\r\n                      {{j + 1}}\r\n                    </td>\r\n                    <td width=\"50%\" class=\"word-break\">{{updateAdditionalinfo?.comment}}</td>\r\n                    <td width=\"{{informationData?.stage_id?.id >= 6 ? '25%' : '43%'}}\" class=\"word-break\">\r\n                      <input type=\"file\" [hidden]=\"true\" id=\"{{'addDocumentAdd_'+ updateAdditionalinfo.id}}\"\r\n                             (change)=\"onUploadDocumentAdditional($event, updateAdditionalinfo.id, j)\"\r\n                             [multiple]=\"true\"/>\r\n\r\n                      <mat-icon class=\"orange-color\"\r\n                                (click)=\"onFileSelect('addDocumentAdd_' + updateAdditionalinfo.id)\"\r\n                                matTooltip=\"Add Document\">note_add\r\n                      </mat-icon>\r\n\r\n                      <a (click)=\"onAddDocumentsDialog(updateAdditionalinfo.id,j,4)\" class=\"cursor-pointer\"\r\n                         style=\"vertical-align: super;\">\r\n\r\n                        <svg id=\"Capa_1\" enable-background=\"new 0 0 511.696 511.696\" class=\"v-align-middle MR-5\"\r\n                             height=\"15\"\r\n                             viewBox=\"0 0 511.696 511.696\" width=\"15\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                          <g>\r\n                            <g id=\"Drive_4_\">\r\n                              <path\r\n                                d=\"m255.395 161.647-106.199 184.2h-.3l61.5 75-137.999 57.9c-2.701-1.5-4.801-3.6-6-5.7l-64.801-120c-3.3-6.601-.599-11.7.3-14.7l173.701-300c1.199-1.8 2.999-3.6 5.4-5.101h.3l89.099 27.601z\"\r\n                                fill=\"#59c36a\"/>\r\n                            </g>\r\n                            <path\r\n                              d=\"m511.696 345.848-120.3 75-28.5-75-107.5-184.2-74.1-128.402c2.098-1.5 4.799-2.399 7.2-2.399h134.799c3.001.899 9.001.599 12.9 7.5l173.701 300c1.199 2.101 1.8 4.8 1.8 7.501z\"\r\n                              fill=\"#ffda2d\"/>\r\n                            <path\r\n                              d=\"m336.194 38.348c-3.898-6.901-9.899-6.601-12.9-7.5h-67.899v130.8l107.5 184.2 28.5 75 120.3-75c0-2.701-.601-5.4-1.8-7.5z\"\r\n                              fill=\"#fdbf00\"/>\r\n                            <path\r\n                              d=\"m511.696 345.848c0 2.699-.601 5.4-1.5 7.2l-64.801 120c-2.401 3.9-8.099 7.8-13.2 7.8h-352.599c-2.401 0-5.101-.901-7.2-2.1l76.5-132.9z\"\r\n                              fill=\"#4086f4\"/>\r\n                            <path\r\n                              d=\"m255.395 480.848h176.8c5.101 0 10.8-3.9 13.2-7.8l64.801-120c.899-1.8 1.5-4.501 1.5-7.2h-256.3v135z\"\r\n                              fill=\"#4175df\"/>\r\n                          </g>\r\n                        </svg>\r\n                      </a>\r\n                      <mat-icon matBadge=\"{{updateAdditionalinfo['document'].length}}\" matBadgeColor=\"warn\"\r\n                                matTooltip=\"View Document\" (click)=\"openRowAdditionalComments(j)\" class=\"primary-color\"\r\n                                *ngIf=\"updateAdditionalinfo['document'].length\">cloud_done\r\n                      </mat-icon>\r\n                    </td>\r\n                    <td *ngIf=\"informationData?.stage_id?.id >= 6\" width=\"18%\" class=\"word-break\">\r\n                      {{updateAdditionalinfo?.client_comment}}\r\n                    </td>\r\n                    <td width=\"10%\">\r\n                      <a (click)=\"removeAdditionalInfo(updateAdditionalinfo)\"\r\n                         *ngIf=\"updateAdditionalinfo?.is_deleted != 1 && informationData?.stage_id?.id < 5\">\r\n                        <mat-icon aria-hidden=\"false\" aria-label=\"delete\" class=\"red-color\"\r\n                                  matTooltip=\"Resolve Information\">playlist_add_check\r\n                        </mat-icon>\r\n                      </a>\r\n                      <mat-icon *ngIf=\"updateAdditionalinfo?.is_deleted == 1\"\r\n                                matTooltip=\"Resolve Information on {{updateAdditionalinfo?.deleted_on | date : 'dd-MM-yyy HH:mm:ss'}}\"\r\n                                class=\"turquoise-color\">done_all\r\n                      </mat-icon>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"trIndexInner === j\" class=\"inner-data\">\r\n                    <div class=\"row PT-10\">\r\n                      <div class=\"col-md-6\"\r\n                           *ngFor=\"let documentsList of updateAdditionalinfo['document']; let j = index\">\r\n                        <div class=\"inner-data__view\">\r\n                          <div class=\"PT-5\">{{documentsList?.is_client === 1 ? 'Client' : 'Befree'}} :</div>\r\n                          <div>\r\n                            <a (click)=\"onOpenDocumentFile(documentsList)\" *ngIf=\"documentsList?.is_drive === 1\"\r\n                               class=\"cursor-pointer v-align-middle\">\r\n                              <mat-icon>remove_red_eye</mat-icon>\r\n                              {{documentsList?.document_name}}\r\n                            </a>\r\n                            <a (click)=\"downloadDocument(documentsList, 1)\" *ngIf=\"documentsList?.is_drive === 0\"\r\n                               class=\"cursor-pointer v-align-middle\">\r\n                              <mat-icon class=\"v-align-middle\">get_app</mat-icon>\r\n                              {{documentsList?.document_name}}\r\n                            </a>\r\n                            <a (click)=\"deleteAdditionalDocument(documentsList?.id)\"\r\n                               *ngIf=\"documentsList?.is_client === 0\">\r\n                              <mat-icon aria-hidden=\"false\" aria-label=\"delete\" class=\"red-color v-align-middle\">delete\r\n                              </mat-icon>\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </tr>\r\n\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <table *ngIf=\"isSendToClient\">\r\n                <tfoot>\r\n                <tr>\r\n                  <td colspan=\"8\" class=\"\"></td>\r\n                  <td colspan=\"2\" class=\"PR-10\" style=\"float: right\"\r\n                      *ngIf=\"informationData?.stage_id?.id !== 5 && informationData?.stage_id?.id !== 6\">\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Reminder Days\" formControlName=\"reminder\">\r\n                        <mat-option *ngFor=\"let days of snoozeOrReminderDays\" [value]=\"days['key']\">\r\n                          {{days['label']}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                    <div class=\"validation-msg\">\r\n                      <app-validation *ngIf=\"isRequiredField(editInformationForm.get('reminder'))\"\r\n                                      [errMsg]=\"validationMsg.REMINDER_REQUIRED\"></app-validation>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <!-- End Grid -->\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n    <div class=\"row col-md-12\">\r\n      <div class=\"col-md-6 PL-0\" *ngIf=\"informationData?.sendback_reason_tm\">\r\n        <span class=\"panel-title\">Send Back Reason to TM :</span> {{informationData?.sendback_reason_tm}}\r\n      </div>\r\n      <div class=\"col-md-6 PL-0\" *ngIf=\"informationData?.sendback_reason_atl\">\r\n        <span class=\"panel-title\">Send Back Reason to ATL :</span> {{informationData?.sendback_reason_atl}}\r\n      </div>\r\n      <div class=\"col-md-6 PL-0\" *ngIf=\"informationData?.sendback_reason_tl\">\r\n        <span class=\"panel-title\"> Send Back Reason to TL :</span> {{informationData?.sendback_reason_tl}}\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 PB-20\">\r\n      <div class=\"row MT-30\">\r\n        <div class=\"col-md-6 PL-0\">\r\n          <button *ngIf=\"informationData?.stage_id?.id !== 5 && informationData?.stage_id?.id !== 6\" type=\"submit\"\r\n                  class=\"btn-primary\"\r\n                  (click)=\"updateStatusIdWithDraft(informationData.stage_id.id, 1,'draft')\">\r\n            Save\r\n          </button>\r\n          <button *ngIf=\"informationData?.stage_id?.id === 5 || informationData?.stage_id?.id === 6\" type=\"submit\"\r\n                  class=\"btn-primary\"\r\n                  (click)=\"updateStatusIdWithDraft(informationData.stage_id.id, 0,'submit')\">\r\n            Submit\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-6 text-right PR-0\">\r\n          <button\r\n            *ngIf=\"informationData.stage_id.id === 2 || informationData.stage_id.id === 3 || informationData.stage_id.id === 4\"\r\n            (click)=\"onSendtoStaff(informationData,1,1)\" type=\"button\" class=\"btn-dark-blue MR-5\">Send back to\r\n            Staff\r\n          </button>\r\n          <button *ngIf=\"informationData.stage_id.id === 3 || informationData.stage_id.id === 4\"\r\n                  (click)=\"onSendtoStaff(informationData,2,2)\" type=\"button\" class=\"btn-orange MR-5\">Send back\r\n            to\r\n            ATL\r\n          </button>\r\n          <button *ngIf=\"informationData.stage_id.id === 4\"\r\n                  (click)=\"onSendtoStaff(informationData,3,3)\" type=\"button\" class=\"btn-dark-blue MR-5\">Send back\r\n            to\r\n            TL\r\n          </button>\r\n          <button\r\n            *ngIf=\"informationData.stage_id.id === 1\"\r\n            (click)=\"updateStatusIdWithDraft(2, 0, 'ATL')\" type=\"submit\" class=\"btn-orange MR-5\"\r\n            [disabled]=\"editInformationForm.invalid\">Send to ATL\r\n          </button>\r\n          <button\r\n            *ngIf=\"informationData.stage_id.id === 1 || informationData.stage_id.id === 2\"\r\n            (click)=\"updateStatusIdWithDraft(3, 0, 'TL')\" type=\"submit\" class=\"btn-dark-blue MR-5\"\r\n            [disabled]=\"editInformationForm.invalid\">Send to TL\r\n          </button>\r\n          <button\r\n            *ngIf=\"informationData.stage_id.id === 1 || informationData.stage_id.id === 2 || informationData.stage_id.id === 3\"\r\n            (click)=\"updateStatusIdWithDraft(4, 0, 'TAM')\" type=\"submit\" class=\"btn-primary MR-5\"\r\n            [disabled]=\"editInformationForm.invalid\">Send to TAM\r\n          </button>\r\n          <button\r\n            *ngIf=\"(informationData.stage_id.id === 1 || informationData.stage_id.id === 2 || informationData.stage_id.id === 3 || informationData.stage_id.id === 4) && (isSendToClient === true)\"\r\n            (click)=\"updateStatusIdWithDraft(informationData.stage_id.id, 0, 'Client');\" type=\"submit\"\r\n            class=\"btn-success\" [disabled]=\"editInformationForm.invalid\">Send to Client\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/information-required/information-required-tab/update-information/update-information.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/information-required/information-required-tab/update-information/update-information.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".information-card .mat-card {\n  border: 1px solid #dcdcdc;\n  box-shadow: none; }\n\n.grid_select_8rem .mat-form-field {\n  width: 120px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vY2xpZW50LW1vZHVsZS9pbmZvcm1hdGlvbi1yZXF1aXJlZC9pbmZvcm1hdGlvbi1yZXF1aXJlZC10YWIvdXBkYXRlLWluZm9ybWF0aW9uL0M6XFx3YW1wNjRcXHd3d1xcaGtfZnJvbnRlbmQvcHJvamVjdHNcXGFkbWluXFxzcmNcXGFwcFxcYWRtaW5cXGNsaWVudC1tb2R1bGVcXGluZm9ybWF0aW9uLXJlcXVpcmVkXFxpbmZvcm1hdGlvbi1yZXF1aXJlZC10YWJcXHVwZGF0ZS1pbmZvcm1hdGlvblxcdXBkYXRlLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUVJLHVCQUF1QixFQUFBIiwiZmlsZSI6InByb2plY3RzL2FkbWluL3NyYy9hcHAvYWRtaW4vY2xpZW50LW1vZHVsZS9pbmZvcm1hdGlvbi1yZXF1aXJlZC9pbmZvcm1hdGlvbi1yZXF1aXJlZC10YWIvdXBkYXRlLWluZm9ybWF0aW9uL3VwZGF0ZS1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvcm1hdGlvbi1jYXJkIHtcclxuICAubWF0LWNhcmQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG59XHJcbi5ncmlkX3NlbGVjdF84cmVtIHtcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/client-module/information-required/information-required-tab/update-information/update-information.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/information-required/information-required-tab/update-information/update-information.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: UpdateInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInformationComponent", function() { return UpdateInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _send_to_client_dialog_send_to_client_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send-to-client-dialog/send-to-client-dialog.component */ "./src/app/admin/client-module/information-required/information-required-tab/update-information/send-to-client-dialog/send-to-client-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _send_back_to_staff_dialog_send_back_to_staff_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-back-to-staff-dialog/send-back-to-staff-dialog.component */ "./src/app/admin/client-module/information-required/information-required-tab/update-information/send-back-to-staff-dialog/send-back-to-staff-dialog.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-user.service */ "./src/utility/shared-service/shared-user.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! file-saver */ "../../node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _upload_info_documents_dialog_upload_info_documents_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../upload-info-documents-dialog/upload-info-documents-dialog.component */ "./src/app/admin/client-module/information-required/information-required-tab/upload-info-documents-dialog/upload-info-documents-dialog.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_19__);
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




















var UpdateInformationComponent = /** @class */ (function (_super) {
    __extends(UpdateInformationComponent, _super);
    function UpdateInformationComponent(_router, dialog, _fb, _commonCrudService, _sharedService, _sharedUserService) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this.dialog = dialog;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this._sharedUserService = _sharedUserService;
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_14__["ValidationConstantMessage"]();
        // Data Variables
        _this.updateInformation = [];
        _this.informationStatus = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["information_status"];
        _this.moveTo = null;
        _this.uploadDoc = new FormData();
        _this.uploadDocName = [];
        _this.uploadAdditionalDocName = [];
        _this.docArray = [];
        _this.additionalInformationListing = [];
        _this.snoozeOrReminderDays = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["SnoozeOrReminderDays"];
        _this.informationAnswerType = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["information_answer_type"];
        // State variables
        _this.trIndex = -1;
        _this.trIndexInner = -1;
        _this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_17__["ADMINTABACCESS"].INFORMATION_REQUIRED;
        _this.isSendToClient = false;
        _this.googleMetaData = [];
        _this.informationData = _this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GLOBALDATAKEYS"].INFORMATION_REQUIRED);
        return _this;
    }
    UpdateInformationComponent.prototype.ngOnInit = function () {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.isSendToClient = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'sent_to_client', 1);
        this.createEditInformationForm();
        this.createAdditionalInfoForm();
        this.getBasicInformation();
        this.getAdditionalInformationListing();
        this.getFileTypeList();
    };
    /**
     * Get File Type List
     */
    UpdateInformationComponent.prototype.getFileTypeList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].DROPDOWN_LIST, {
            'table': 'google_drive_meta_data',
            'column': 'id,key,label,icon,mimeType,edit,class,isFileCreate,extension,isFileSearch,labelSearch,extensionSearch,extensionSearchSort'
        }, {}).subscribe(function (response) {
            // console.log(response);
            _this.googleMetaData = response;
        });
    };
    /**
     * Get Basic Information
     */
    UpdateInformationComponent.prototype.getBasicInformation = function () {
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
    UpdateInformationComponent.prototype.createEditInformationForm = function () {
        this.editInformationForm = this._fb.group({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.informationData.subject ? this.informationData.subject : null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            reminder: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](this.informationData.reminder, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            infoDetail: this._fb.array([]),
            additional_info: this._fb.array([]),
            stage_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null),
            is_draft: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null),
            final_submit: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](1)
        });
    };
    /**
     * Create Info Detail Item
     */
    UpdateInformationComponent.prototype.createInfoDetailItem = function (item) {
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.id : ''),
            info_detail_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.information_id : ''),
            bank_other: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.bank_other : ''),
            start_period: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.start_period : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            end_period: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.end_period : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            type_account: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.type_account : ''),
            account_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.account_no : ''),
            befree_comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.befree_comment : ''),
            status_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item && item.status_id > 0 ? item.status_id : 1),
            answer_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.answer_type : ''),
            client_comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.client_comment : ''),
            documents: this._fb.array([])
        });
    };
    /**
     * Create Document Item
     */
    UpdateInformationComponent.prototype.createDocumentItem = function (item) {
        return this._fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.id : null),
            information_detail_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.information_detail_id : null),
            document_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.document_name : null),
            document_path: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.document_path : null),
            document_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.document_title : null),
            is_drive: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.is_drive : null),
            is_client: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.is_client : null),
            file_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.file_id : null),
            mime_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.mime_type : null),
        });
    };
    /**
     * Update Value
     * @param index
     * @param child
     * @param value
     */
    UpdateInformationComponent.prototype.updateDateForInformation = function (index, value, type) {
        // this.get    moment(value).format('YYYY-MM-DD');
        var itemValue = moment__WEBPACK_IMPORTED_MODULE_19__(value).format('YYYY-MM-DD');
    };
    /**
     * Create Info Additional Info Detail Item
     */
    UpdateInformationComponent.prototype.createAdditionalInfoForm = function (item) {
        this.editAdditionalInformationForm = this._fb.group({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.comment : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            is_drive: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](item ? item.is_drive : 0),
        });
    };
    /**
     * Get Information Array
     */
    UpdateInformationComponent.prototype.getInformationArray = function () {
        return this.editInformationForm.get('infoDetail');
    };
    /**
     * Get Document Array
     */
    UpdateInformationComponent.prototype.getDocumentArray = function (index) {
        return this.getInformationArray().controls[index].get('documents');
    };
    // Events
    UpdateInformationComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    UpdateInformationComponent.prototype.openRowAdditionalComments = function (i) {
        this.trIndexInner = (this.trIndexInner !== i) ? i : -1;
    };
    /**
     * On home page route
     */
    UpdateInformationComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    UpdateInformationComponent.prototype.onGoInformationRequired = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].INFORMATION_REQUIRED]);
    };
    /**
     * On Send to client
     * @param information
     */
    UpdateInformationComponent.prototype.onSendtoClient = function (information) {
        var _this = this;
        var dialogRef = this.dialog.open(_send_to_client_dialog_send_to_client_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SendToClientDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                informationRequired: information,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.onGoInformationRequired();
            }
        });
    };
    /**
     * On Send to Staff or TL
     * @param information
     * @param type
     */
    UpdateInformationComponent.prototype.onSendtoStaff = function (information, typeInfo, stageId) {
        var _this = this;
        var dialogRef = this.dialog.open(_send_back_to_staff_dialog_send_back_to_staff_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SendBackToStaffDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                informationRequired: information,
                type: typeInfo,
                status_id: stageId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.editInformationForm.get('stage_id').setValue(stageId);
                _this.submitInfoBeforeSendBack(_this.editInformationForm);
                _this.onGoInformationRequired();
            }
        });
    };
    /**
     * Submit Info Before Send Back
     * @param form
     */
    UpdateInformationComponent.prototype.submitInfoBeforeSendBack = function (form) {
        var infoDetail = form.value['infoDetail'];
        form.value['infoDetail'] = JSON.stringify(form.value['infoDetail']);
        delete form.value['final_submit'];
        this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_UPDATE, this.informationData.id, form.value).subscribe(function (response) {
        });
    };
    /**
     * On Button Click need to update status & is_draft
     * @param stageId
     * @param isDraft
     */
    UpdateInformationComponent.prototype.updateStatusIdWithDraft = function (stageId, isDraft, moveTo) {
        this.editInformationForm.get('is_draft').setValue(isDraft);
        this.editInformationForm.get('stage_id').setValue(stageId);
        this.moveTo = moveTo;
    };
    /**
     * On Submit Edit Information
     * @param form
     */
    UpdateInformationComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var infoDetail = form.value['infoDetail'];
        form.value['infoDetail'] = JSON.stringify(form.value['infoDetail']);
        if (this.moveTo !== 'Client') {
            var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationDialogComponent"], {
                data: {
                    content: this.moveTo === 'draft' ? 'Are you sure you want to save it as draft?' : this.moveTo === 'submit' ? 'Are you sure you want to submit? Action will not be rollback.' : 'Are you sure you want to send it to ' + this.moveTo + '?'
                }
            });
            dialogRef.afterClosed().subscribe(function (value) {
                if (value) {
                    if (form.valid) {
                        if (_this.moveTo !== 'submit') {
                            delete form.value['final_submit'];
                        }
                        _this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_UPDATE, _this.informationData.id, form.value).subscribe(function (response) {
                            _this.onGoInformationRequired();
                        });
                    }
                }
            });
        }
        else if (this.moveTo === 'Client') {
            if (form.valid) {
                if (this.moveTo !== 'submit') {
                    delete form.value['final_submit'];
                }
                this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_UPDATE, this.informationData.id, form.value).subscribe(function (response) {
                    _this.onSendtoClient(_this.informationData);
                });
            }
        }
        else {
            if (form.valid) {
                if (this.moveTo !== 'submit') {
                    delete form.value['final_submit'];
                }
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
    UpdateInformationComponent.prototype.onFileSelect = function (id) {
        document.getElementById(id).click();
    };
    /**
     * on file changing
     * @param event
     */
    UpdateInformationComponent.prototype.onUploadDocument = function (event, informationDetailId, index) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var filesList = event.target.files;
            if (filesList.length) {
                var f_1 = 0;
                Object.keys(event.target.files).forEach(function (itemUploadFile) {
                    var name = event.target.files[f_1].name;
                    _this.uploadDocName[index] = name;
                    var lastDot = name.lastIndexOf('.');
                    var ext = name.substring(lastDot + 1);
                    // if (isValidFileType(event.target.files[f].type) || isValidFileTypeExt(ext.toLowerCase())) {
                    if (event.target.files[f_1].size > _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstant"].TWINTY_FIVE_MP_FILE_ALLOWED) {
                        _this._sharedService.setToastMessage(_this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["ToastType"].ERROR);
                    }
                    else {
                        _this.uploadDoc.delete('information_detail_id');
                        _this.uploadDoc.delete('document_file');
                        _this.uploadDoc.delete('is_drive');
                        // document_type = 1 for Befree
                        // is_additional_info = 1 this document is not additional info
                        _this.uploadDoc.append('information_detail_id', informationDetailId);
                        _this.uploadDoc.append('is_drive', '0');
                        _this.uploadDoc.append('document_file', event.target.files[f_1]);
                        if (_this.uploadDoc) {
                            _this._commonCrudService.uploadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_UPLOAD_DOCUMENT + '/' + informationDetailId, _this.uploadDoc).subscribe(function (response) {
                                _this.uploadDocName = [];
                                _this.getDocumentListRefresh(informationDetailId, index);
                                _this.uploadDoc.delete('information_detail_id');
                                _this.uploadDoc.delete('document_file');
                                _this.uploadDoc.delete('is_drive');
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
    UpdateInformationComponent.prototype.onUploadDocumentAdditional = function (event, informationDetailId, index) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var filesList = event.target.files;
            if (filesList.length) {
                var f_2 = 0;
                Object.keys(event.target.files).forEach(function (itemUploadFile) {
                    var name = event.target.files[f_2].name;
                    _this.uploadAdditionalDocName[index] = name;
                    var lastDot = name.lastIndexOf('.');
                    var ext = name.substring(lastDot + 1);
                    // if (isValidFileType(event.target.files[f].type) || isValidFileTypeExt(ext.toLowerCase())) {
                    if (event.target.files[f_2].size > _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstant"].TWINTY_FIVE_MP_FILE_ALLOWED) {
                        _this._sharedService.setToastMessage(_this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["ToastType"].ERROR);
                    }
                    else {
                        _this.uploadDoc.delete('information_additional_id');
                        _this.uploadDoc.delete('document_file');
                        _this.uploadDoc.delete('is_drive');
                        // document_type = 1 for Befree
                        // is_additional_info = 1 this document is not additional info
                        _this.uploadDoc.append('information_additional_id', informationDetailId);
                        _this.uploadDoc.append('is_drive', '0');
                        _this.uploadDoc.append('document_file', event.target.files[f_2]);
                        if (_this.uploadDoc) {
                            _this._commonCrudService.uploadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_ADDITIONAL_UPLOAD_DOCS + '/' + informationDetailId, _this.uploadDoc).subscribe(function (response) {
                                _this.uploadAdditionalDocName = [];
                                _this.getAdditionalInformationListing();
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
    UpdateInformationComponent.prototype.downloadDocument = function (informationDocument, is_additional_info) {
        if (is_additional_info === 1) {
            var id = informationDocument['id'];
            this._commonCrudService.downloadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_DOCUMENT_DOWNLOAD_ADDITIONAL + '/' + id, {}).subscribe(function (response) {
                if (response && response.type) {
                    var extension = response.type.split('/');
                    file_saver__WEBPACK_IMPORTED_MODULE_15__["saveAs"](response, informationDocument['document_name']);
                }
            });
        }
        else {
            if (informationDocument && informationDocument.get('id').value) {
                // const params = {'is_additional_info': isAdditional};
                this._commonCrudService.downloadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_DOCUMENT_DOWNLOAD + '/' + informationDocument.get('id').value, {}).subscribe(function (response) {
                    if (response && response.type) {
                        var extension = response.type.split('/');
                        file_saver__WEBPACK_IMPORTED_MODULE_15__["saveAs"](response, informationDocument.get('document_name').value);
                    }
                });
            }
        }
    };
    /**
     * On Open Document File
     * @param item
     */
    UpdateInformationComponent.prototype.onOpenDocumentFile = function (item) {
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
    /**
     * Remove Document
     * @param informationDocument
     */
    UpdateInformationComponent.prototype.deleteDocument = function (informationDetailsID, document_id, index) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this document ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_DOCUMENT_DELETE, document_id).subscribe(function (response) {
                    _this.getDocumentListRefresh(informationDetailsID, index);
                });
            }
        });
    };
    /**
     * Remove Document
     * @param informationDocument
     */
    UpdateInformationComponent.prototype.deleteAdditionalDocument = function (document_id) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to delete this document ?'
            }
        });
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_ADDITIONAL_DOCUMENT_DELETE, document_id).subscribe(function (response) {
                    _this.getAdditionalInformationListing();
                });
            }
        });
    };
    /**
     * On Submit Additional Info
     * @param form
     */
    UpdateInformationComponent.prototype.onSubmitAdditionalInfo = function (form) {
        var _this = this;
        if (form.valid) {
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_ADDITIONAL_ADD + '/' + this.informationData.id, form.value, this.docArray).subscribe(function (response) {
                _this.getAdditionalInformationListing();
                _this.addAdditionaInfoForm.resetForm();
                _this.createAdditionalInfoForm();
                _this.uploadAdditionalDocName = [];
            });
        }
    };
    /**
     * Get Additional Information Listing
     */
    UpdateInformationComponent.prototype.getAdditionalInformationListing = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_ADDITIONAL, this.informationData.id).subscribe(function (response) {
            _this.additionalInformationListing = response.payload.data;
        });
    };
    /**
     * Remove Additional Information
     * @param additionalInfo
     */
    UpdateInformationComponent.prototype.removeAdditionalInfo = function (additionalInfo) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want marked as resolve this additional information ?'
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
     * On Add Document Open Dialog
     * @param type
     */
    UpdateInformationComponent.prototype.onAddDocumentsDialog = function (informationDetailId, index, type) {
        var _this = this;
        var dialogRef = this.dialog.open(_upload_info_documents_dialog_upload_info_documents_dialog_component__WEBPACK_IMPORTED_MODULE_18__["UploadInfoDocumentsDialogComponent"], {
            panelClass: 'xl-large-dialog-container',
            data: {
                informationData: this.informationData,
                informationDetailId: informationDetailId,
                uploadType: type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!_utility_common_functions__WEBPACK_IMPORTED_MODULE_13__["CommonFunctions"].isEmpty(result) && result['result'] === true && result['type'] === 2) {
                _this.getDocumentListRefresh(informationDetailId, index);
            }
            else if (!_utility_common_functions__WEBPACK_IMPORTED_MODULE_13__["CommonFunctions"].isEmpty(result) && result['result'] === true && result['type'] === 4) {
                _this.getAdditionalInformationListing();
            }
        });
    };
    /**
     * Get Document List Refresh
     * @param informationDetailId
     * @param index
     */
    UpdateInformationComponent.prototype.getDocumentListRefresh = function (informationDetailId, index) {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_11__["AdminAPI"].INFORMATION_REQUIRED_VIEW, this.informationData.id).subscribe(function (responseData) {
            var informationData = (responseData.payload.data['detail']) ? responseData.payload.data['detail'] : [];
            informationData = informationData.filter(function (item) { return item['id'] === informationDetailId; });
            if (informationData.length) {
                if (informationData[0] && informationData[0]['document'] && informationData[0]['document'].length) {
                    _this.getDocumentArray(index).controls = [];
                    informationData[0]['document'].forEach(function (doc) {
                        _this.getDocumentArray(index).push(_this.createDocumentItem(doc));
                    });
                }
                else {
                    _this.getDocumentArray(index).controls = [];
                }
            }
        });
    };
    /**
     * Get Answer Name
     * @param status_id
     */
    UpdateInformationComponent.prototype.getAnswerName = function (ans_type) {
        var val = this.informationAnswerType.filter(function (elem) { return elem.key === Number(ans_type); });
        return (val.length) ? val[0].label : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addAdditionaInfoForm'),
        __metadata("design:type", Object)
    ], UpdateInformationComponent.prototype, "addAdditionaInfoForm", void 0);
    UpdateInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-information',
            template: __webpack_require__(/*! ./update-information.component.html */ "./src/app/admin/client-module/information-required/information-required-tab/update-information/update-information.component.html"),
            styles: [__webpack_require__(/*! ./update-information.component.scss */ "./src/app/admin/client-module/information-required/information-required-tab/update-information/update-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_10__["SharedUserService"]])
    ], UpdateInformationComponent);
    return UpdateInformationComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_16__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/information-required/information-required-tab/update-information/update-information.module.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/information-required/information-required-tab/update-information/update-information.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: UpdateInformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInformationModule", function() { return UpdateInformationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _update_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-information.component */ "./src/app/admin/client-module/information-required/information-required-tab/update-information/update-information.component.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _send_to_client_dialog_send_to_client_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-to-client-dialog/send-to-client-dialog.component */ "./src/app/admin/client-module/information-required/information-required-tab/update-information/send-to-client-dialog/send-to-client-dialog.component.ts");
/* harmony import */ var _send_back_to_staff_dialog_send_back_to_staff_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./send-back-to-staff-dialog/send-back-to-staff-dialog.component */ "./src/app/admin/client-module/information-required/information-required-tab/update-information/send-back-to-staff-dialog/send-back-to-staff-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _update_information_component__WEBPACK_IMPORTED_MODULE_3__["UpdateInformationComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__["AdminAuthGuard"]]
    }
];
var UpdateInformationModule = /** @class */ (function () {
    function UpdateInformationModule() {
    }
    UpdateInformationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"]
            ],
            declarations: [_update_information_component__WEBPACK_IMPORTED_MODULE_3__["UpdateInformationComponent"], _send_to_client_dialog_send_to_client_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SendToClientDialogComponent"], _send_back_to_staff_dialog_send_back_to_staff_dialog_component__WEBPACK_IMPORTED_MODULE_7__["SendBackToStaffDialogComponent"]],
            entryComponents: [_send_to_client_dialog_send_to_client_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SendToClientDialogComponent"], _send_back_to_staff_dialog_send_back_to_staff_dialog_component__WEBPACK_IMPORTED_MODULE_7__["SendBackToStaffDialogComponent"]]
        })
    ], UpdateInformationModule);
    return UpdateInformationModule;
}());



/***/ })

}]);
//# sourceMappingURL=update-information-update-information-module.js.map