(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-queries-edit-queries-module~query-dashboard-tab-query-dashboard-tab-module~query-module~0d01d728"],{

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/upload-query-documents-dialog/upload-query-documents-dialog.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/upload-query-documents-dialog/upload-query-documents-dialog.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Favorite menu dialog  -->\r\n<div class=\"modal xl-large-modal\">\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">UPLOAD DOCUMENTS</div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a>\r\n      <mat-icon class=\"material-icons\" (click)=\"onClose(false)\">close</mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <!-- Admin (Client) Documents Container -->\r\n    <div class=\"client-documents-container-dialog\">\r\n\r\n      <!-- Start Data Grid -->\r\n      <div class=\"with-filter-grid-container\">\r\n\r\n        <div class=\"row col-md-12 PLR-0\">\r\n          <div class=\"col-md-3 col-sm-2 col-lg-3 PLR-0 tree-bg\">\r\n            <div class=\"breadcrumb-top-header__breadcrumbs\" *ngFor=\"let breadCrum of breadCrumsList; let b = index\">\r\n          <span *ngIf=\"b ===0\" class=\"cursor-pointer black-color\"\r\n                (click)=\"openBreadCrumFolder(breadCrum.entity_id, breadCrum.id, b, breadCrum.folder, breadCrum.subclient_id)\">\r\n          <i *ngIf=\"b ===0\" class=\"material-icons PR-10\">home</i>\r\n            {{breadCrum.directory_name}}</span>\r\n              <a class=\"inner_breadcrumbs inactive cursor-pointer\" *ngIf=\"b !==0 && b !== breadCrumsList.length - 1\"\r\n                 (click)=\"openBreadCrumFolder(breadCrum.entity_id, breadCrum.id, b, breadCrum.folder, breadCrum.subclient_id)\">\r\n                <mat-icon *ngIf=\"b !==0\" class=\"black-color\">arrow_right</mat-icon>\r\n\r\n                <img *ngIf=\"b !==0\" src=\"../../../../images/doc/folder-com.svg\"/>\r\n                <span>{{breadCrum.directory_name}}</span>\r\n                <span *ngIf=\"b !==0 && b === breadCrumsList.length - 1\" class=\"active cursor-pointer\"\r\n                      (click)=\"openBreadCrumFolder(breadCrum.entity_id, breadCrum.id, b, breadCrum.folder, breadCrum.subclient_id)\">{{breadCrum.directory_name}}</span>\r\n              </a>\r\n              <a class=\"inner_breadcrumbs active cursor-pointer\" *ngIf=\"b !==0 && b === breadCrumsList.length - 1\"\r\n                 (click)=\"openBreadCrumFolder(breadCrum.entity_id, breadCrum.id, b, breadCrum.folder, breadCrum.subclient_id)\">\r\n                <mat-icon *ngIf=\"b !==0\" class=\"black-color\">arrow_right</mat-icon>\r\n\r\n                <img *ngIf=\"b !==0\" src=\"../../../../images/doc/folder-com.svg\"/>\r\n                <span>{{breadCrum.directory_name}}</span>\r\n              </a>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row col-md-9 col-sm-10 col-lg-9 PLR-0 sub_docDetailsSection\">\r\n            <div class=\"row col-md-12 leave-type-list\">\r\n              <div class=\"col-md-2 PL-0 MT-10 col-sm-2\">\r\n                <button (click)=\"onSelectAllFileItem(true, googleDriveFileList)\"\r\n                        *ngIf=\"googleDriveFileList.length > 0 && googleDriveCurrentFolder?.id !== -1 && maxFileAllowed !== selectedFileArray.length \"\r\n                        class=\"cursor-pointer btn-default btn-add\">\r\n                  <i class=\"material-icons\">check_box_outline_blank</i> Select {{maxFileAllowed}} Files\r\n                </button>\r\n                <button (click)=\"onSelectAllFileItem(false, googleDriveFileList)\"\r\n                        *ngIf=\"selectedFileArray.length > 0 && googleDriveFileList.length > 0 && googleDriveCurrentFolder?.id !== -1 && maxFileAllowed === selectedFileArray.length\"\r\n                        class=\"cursor-pointer btn-default btn-add\">\r\n                  <i class=\"material-icons\">check_box</i> DeSelect {{maxFileAllowed}} Files\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"col-md-3 MT-10 PLR-0 col-sm-3\">\r\n                <button (click)=\"onInsertIntoInformation()\" *ngIf=\"selectedFileArray.length\"\r\n                        class=\"btn-success btn-add MR-5\">\r\n                  <i class=\"material-icons\">refresh</i> Insert Into Query\r\n                </button>\r\n              </div>\r\n              <div class=\"col-md-5 grid-search  PLR-0 col-sm-4\">\r\n\r\n\r\n                <!-- This template displays the overlay content and is connected to the button -->\r\n\r\n                <form>\r\n                  <mat-form-field appearance=\"fill\">\r\n                    <mat-label>Search</mat-label>\r\n                    <input matInput type=\"text\"\r\n                           value=\"{{filterForm.get('type').value !== null ? 'Type: ' + filterForm.get('type').value : ''}}{{filterForm.get('modified_on_from').value !== null ? ' Modified From: ' + (filterForm.get('modified_on_from').value | date : 'dd-MM-yyy')  : ''}}{{filterForm.get('modified_on_to').value !== null ? ' Modified Up To: ' + (filterForm.get('modified_on_to').value | date : 'dd-MM-yyy') : ''}}{{filterForm.get('file_name').value !== null ? ' File Name: ' + filterForm.get('file_name').value : ''}}{{filterForm.get('path').value !== null ? 'Path: ' + filterForm.get('path').value : ''}}\">\r\n                    <button type=\"button\" mat-button matSuffix mat-icon-button (click)=\"onToggleFilter()\"\r\n                            class=\"search_btn\">\r\n                      <mat-icon>filter_list</mat-icon>\r\n                    </button>\r\n                  </mat-form-field>\r\n                  <!-- Start search Filter -->\r\n                  <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n                    <div class=\"filter-action-icon\">\r\n                <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <i\r\n                  class=\"material-icons\">close</i></span>\r\n                    </div>\r\n                    <div class=\"grid-filter-container\">\r\n                      <div class=\"filter-title\">\r\n                        <h3 style=\"text-align: left;\">Advance Filter</h3>\r\n                      </div>\r\n                      <form [formGroup]=\"filterForm\" (submit)=\"searchFilesFromEntity(filterForm)\">\r\n\r\n                        <div class=\"row col-md-12\">\r\n                          <div class=\"col-md-3 PT-20\">\r\n                            <label>Type</label>\r\n                          </div>\r\n                          <div class=\"col-md-9\">\r\n                            <mat-form-field>\r\n                              <mat-select placeholder=\"File Type\" formControlName=\"type\">\r\n                                <mat-option *ngFor=\"let fileType of fileTypeList; let i = index\"\r\n                                            [value]=\"fileType?.extensionSearch\">{{fileType?.labelSearch}}\r\n                                </mat-option>\r\n                              </mat-select>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"row col-md-12 MT-5\">\r\n                          <div class=\"col-md-3 PT-20\">\r\n                            <label>Date Modified</label>\r\n                          </div>\r\n                          <div class=\"col-md-9\">\r\n                            <mat-form-field>\r\n                              <input matInput [matDatepicker]=\"modifiedDate\" placeholder=\"Modified From Date\"\r\n                                     formControlName=\"modified_on_from\" [max]=\"maxDateForSelect\"/>\r\n                              <mat-datepicker-toggle matSuffix [for]=\"modifiedDate\"></mat-datepicker-toggle>\r\n                              <mat-datepicker #modifiedDate disabled=\"false\"></mat-datepicker>\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                              <input matInput [matDatepicker]=\"modifiedDateTo\" placeholder=\"Modified To Date\"\r\n                                     formControlName=\"modified_on_to\" [min]=\"filterForm.get('modified_on_from').value\"\r\n                                     [max]=\"maxDateForSelect\"/>\r\n                              <mat-datepicker-toggle matSuffix [for]=\"modifiedDateTo\"></mat-datepicker-toggle>\r\n                              <mat-datepicker #modifiedDateTo disabled=\"false\"></mat-datepicker>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"row col-md-12 MT-5\">\r\n                          <div class=\"col-md-3 PT-20\">\r\n                            <label>File Name</label>\r\n                          </div>\r\n                          <div class=\"col-md-9\">\r\n                            <mat-form-field>\r\n                              <input matInput placeholder=\"File Name\" formControlName=\"file_name\"/>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row col-md-12 MT-5\">\r\n                          <div class=\"col-md-3 PT-20\">\r\n                            <label>File Path</label>\r\n                          </div>\r\n                          <div class=\"col-md-9\">\r\n                            <mat-form-field>\r\n                              <input matInput placeholder=\"File Path\" formControlName=\"path\"/>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row col-md-12\">\r\n                          <div class=\"col-md-12  MT-10 text-right\">\r\n                            <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Reset</button>\r\n                            <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n                          </div>\r\n                        </div>\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                  <!-- End search Filter -->\r\n                </form>\r\n              </div>\r\n\r\n              <div class=\"col-md-2 PR-0 col-sm-3 MT-10\">\r\n                <mat-form-field>\r\n                  <mat-label>Select View</mat-label>\r\n                  <mat-select>\r\n                    <mat-option (click)=toggleDisplay(false)>\r\n                      <mat-icon>view_module</mat-icon>\r\n                      Large Icon\r\n                    </mat-option>\r\n\r\n                    <mat-option (click)=toggleDisplay(true)>\r\n                      <mat-icon>list</mat-icon>\r\n                      <span>Details</span>\r\n                    </mat-option>\r\n\r\n                    <mat-option\r\n                      (click)=\"getSortData('name', sortBy === 'name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n                      <mat-icon>sort_by_alpha</mat-icon>\r\n                      <span>Sort by name</span>\r\n                    </mat-option>\r\n\r\n                    <mat-option\r\n                      (click)=\"getSortData('modified_by', sortBy === 'modified_by' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n                      <mat-icon>av_timer</mat-icon>\r\n                      <span>Modified date</span>\r\n                    </mat-option>\r\n\r\n                    <mat-option\r\n                      (click)=\"getSortData('size', sortBy === 'size' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n                      <mat-icon>sort</mat-icon>\r\n                      <span>Sort by size</span>\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row col-md-12\" *ngIf=\"!isShow\">\r\n              <div class=\"col-md-1 doc_visited col-xs-1 col-sm-2\"\r\n                   *ngFor=\"let folderData of googleDriveFolderList; let i = index\">\r\n                <div class=\"\" (contextmenu)=\"onContextMenu($event, folderData, 1)\"\r\n                     (dblclick)=\"openSubFolder(folderData.entity_id, folderData.id, folderData.subclient_id)\">\r\n                  <ul>\r\n                    <li *ngIf=\"folderData?.directory_id === 0 && googleDriveCurrentFolder?.id !== -1\">\r\n                      <mat-checkbox (change)=\"onSelectFolderItem($event, folderData)\"></mat-checkbox>\r\n                    </li>\r\n                    <li *ngIf=\"folderData?.folderType === 0\">\r\n                      <img src=\"../../../../images/doc/folder-create_blank.svg\"/>\r\n                    </li>\r\n                    <li *ngIf=\"folderData?.folderType === 1\">\r\n                      <img src=\"../../../../images/doc/folder-created.svg\"/>\r\n                    </li>\r\n                    <li *ngIf=\"folderData?.folderType === 2\">\r\n                      <img src=\"../../../../images/doc/folder-com.svg\"/>\r\n                    </li>\r\n                    <li *ngIf=\"folderData?.folderType === 3\">\r\n                      <img src=\"../../../../images/doc/trash-folder.svg\"/>\r\n                    </li>\r\n                    <li *ngIf=\"folderData?.folderType === 4\">\r\n                      <img src=\"../../../../images/doc/all_folder.svg\"/>\r\n                    </li>\r\n                    <li class=\"user-details\">\r\n                      <h3>{{folderData.directory_name}}</h3>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-1 doc_visited col-xs-1 col-sm-2\"\r\n                   *ngFor=\"let fileData of googleDriveFileList; let j = index\">\r\n                <div class=\"sub_docDetailsSection\" (contextmenu)=\"onContextMenu($event, fileData, 2)\"\r\n                     (dblclick)=\"onContextMenuFileAction(fileData, 1)\">\r\n                  <ul>\r\n                    <li *ngIf=\"googleDriveCurrentFolder?.id !== -1\">\r\n                      <mat-checkbox\r\n                        [disabled]=\"(selectedFileArray.length >= maxFileAllowed) ?  (selectedFileArray.indexOf(fileData.file_id) !== -1) ? false : true : false\"\r\n                        (change)=\"onSelectFileItem($event, fileData)\"\r\n                        [checked]=\"selectedFileArray.indexOf(fileData.file_id) !== -1 ? true : false\"></mat-checkbox>\r\n                    </li>\r\n                    <li>\r\n                      <img src=\"{{getGoogleDriveMetaDataType('extensionSearch',fileData.file_name, 'icon')}}\"/>\r\n                    </li>\r\n                    <li class=\"user-details\">\r\n                      <!--<h3 class=\"red-color\">Demo.pdf</h3>-->\r\n                      <h3 [class]=\"getGoogleDriveMetaDataType('extensionSearch',fileData.file_name, 'class')\">\r\n                        <mat-icon *ngIf=\"fileData.is_completed === 0\"><a (click)=\"onMarkAsCompleteFile(fileData, 1)\">star_outline</a>\r\n                        </mat-icon>\r\n                        <mat-icon *ngIf=\"fileData.is_completed === 1\"><a (click)=\"onMarkAsCompleteFile(fileData, 0)\">star</a>\r\n                        </mat-icon>\r\n                        {{fileData.file_name}}\r\n                      </h3>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row col-md-12 PLR-0\" *ngIf=\"isShow\">\r\n              <!-- Start Table -->\r\n              <div class=\"table-container\">\r\n                <div class=\"table-block PLR-10\">\r\n                  <table>\r\n                    <thead>\r\n                    <tr>\r\n                      <th width=\"2%\">\r\n                        <!--<mat-checkbox (change)=\"onSelectAllFileItem($event.checked, googleDriveFileList)\" *ngIf=\"googleDriveFileList.length > 0 && googleDriveCurrentFolder?.id !== -1\"></mat-checkbox>-->\r\n                      </th>\r\n                      <th width=\"1%\"></th>\r\n                      <th width=\"4%\">\r\n                        <mat-icon>folder</mat-icon>\r\n                      </th>\r\n                      <th width=\"21%\">Name</th>\r\n                      <th width=\"44%\">File Path</th>\r\n                      <th width=\"8%\">Size</th>\r\n                      <th width=\"20%\">Date Modified</th>\r\n                    </tr>\r\n                    </thead>\r\n                  </table>\r\n\r\n                  <div class=\"table-body\">\r\n                    <table>\r\n                      <tbody *ngIf=\"googleDriveFolderList.length\">\r\n                      <tr *ngFor=\"let folderData of googleDriveFolderList; let i = index\"\r\n                          (contextmenu)=\"onContextMenu($event, folderData, 1)\"\r\n                          (dblclick)=\"openSubFolder(folderData.entity_id, folderData.id, folderData.subclient_id)\">\r\n                        <td width=\"2%\" class=\"text-center\">\r\n                    <span *ngIf=\"folderData?.directory_id === 0 && googleDriveCurrentFolder?.id !== -1\">\r\n                        <mat-checkbox (change)=\"onSelectFolderItem($event, folderData)\"></mat-checkbox>\r\n                    </span>\r\n                        </td>\r\n\r\n                        <td width=\"1%\"></td>\r\n                        <td width=\"4%\">\r\n                          <img src=\"../../../../images/doc/folder-create_blank.svg\"\r\n                               *ngIf=\"folderData?.folderType === 0\"/>\r\n                          <img src=\"../../../../images/doc/folder-created.svg\" *ngIf=\"folderData?.folderType === 1\"/>\r\n                          <img src=\"../../../../images/doc/folder-com.svg\" *ngIf=\"folderData?.folderType === 2\"/>\r\n                          <img src=\"../../../../images/doc/trash-folder.svg\" *ngIf=\"folderData?.folderType === 3\"/>\r\n                          <img src=\"../../../../images/doc/all_folder.svg\" *ngIf=\"folderData?.folderType === 4\"/>\r\n                        </td>\r\n                        <td width=\"21%\" class=\"word-break\">{{folderData?.directory_name}}\r\n                        </td>\r\n                        <td width=\"44%\" class=\"word-break\">{{folderData?.directory_path}}</td>\r\n                        <td width=\"8%\" class=\"word-break\"></td>\r\n                        <td width=\"20%\" class=\"word-break\">{{folderData?.modified_on | date : 'dd-MM-yyyy HH:mm:ss' |\r\n                          checkEmpty}}\r\n                        </td>\r\n                      </tr>\r\n                      </tbody>\r\n                      <tbody *ngIf=\"googleDriveFileList.length\">\r\n                      <tr *ngFor=\"let fileData of googleDriveFileList; let j = index\"\r\n                          (contextmenu)=\"onContextMenu($event, fileData, 2)\">\r\n                        <td width=\"2%\" class=\"text-center\">\r\n                    <span *ngIf=\"googleDriveCurrentFolder?.id !== -1\">\r\n                        <mat-checkbox\r\n                          [disabled]=\"(selectedFileArray.length >= maxFileAllowed) ?  (selectedFileArray.indexOf(fileData.file_id) !== -1) ? false : true : false\"\r\n                          (change)=\"onSelectFileItem($event, fileData)\"\r\n                          [checked]=\"selectedFileArray.indexOf(fileData.file_id) !== -1 ? true : false\"></mat-checkbox>\r\n                    </span>\r\n                        </td>\r\n\r\n                        <td width=\"1%\" class=\"icon-star list_view_star\">\r\n                        </td>\r\n                        <td width=\"4%\"><img\r\n                          src=\"{{getGoogleDriveMetaDataType('extensionSearch',fileData.file_name, 'icon')}}\"/>\r\n                        </td>\r\n                        <td width=\"21%\" class=\"word-break\">{{fileData.file_name}}</td>\r\n                        <td width=\"44%\" class=\"word-break\">{{fileData?.path}}</td>\r\n                        <td width=\"8%\" class=\"word-break\">{{getFileSizeInFormat(fileData?.size)}}</td>\r\n                        <td width=\"20%\" class=\"word-break\">{{fileData?.modified_on | date : 'dd-MM-yyyy HH:mm:ss' |\r\n                          checkEmpty}}\r\n                        </td>\r\n                      </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>  <!-- End Table -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"visibility: hidden; position: fixed\"\r\n         [style.left]=\"contextMenuPosition.x\"\r\n         [style.top]=\"contextMenuPosition.y\"\r\n         [matMenuTriggerFor]=\"contextMenu\">\r\n    </div>\r\n    <mat-menu #contextMenu=\"matMenu\" class=\"contexitems\">\r\n      <ng-template matMenuContent let-item=\"item\">\r\n        <button mat-menu-item (click)=\"onContextMenuFolderAction(item, 1)\" *ngIf=\"menuOptionsType === 1\">\r\n          <mat-icon>folder_open</mat-icon>\r\n          Open\r\n        </button>\r\n        <button mat-menu-item (click)=\"onContextMenuFolderAction(item, 2)\"\r\n                *ngIf=\"menuOptionsType === 1 && item.directory_id === 0\">\r\n          <mat-icon>edit</mat-icon>\r\n          Rename\r\n        </button>\r\n        <button mat-menu-item (click)=\"onContextMenuFolderAction(item, 3)\"\r\n                *ngIf=\"menuOptionsType === 1 && item.directory_id === 0 && item.emptyFolder === 1\">\r\n          <mat-icon>delete</mat-icon>\r\n          Move To Trash\r\n        </button>\r\n\r\n        <button mat-menu-item (click)=\"onContextMenuFileAction(item, 1)\"\r\n                *ngIf=\"menuOptionsType === 2 && googleDriveCurrentFolder?.id !== -1\">\r\n          <mat-icon>folder_open</mat-icon>\r\n          Open\r\n        </button>\r\n        <button mat-menu-item (click)=\"onContextMenuFileAction(item, 2)\"\r\n                *ngIf=\"menuOptionsType === 2 && googleDriveCurrentFolder?.id !== -1\">\r\n          <mat-icon>content_copy</mat-icon>\r\n          Copy\r\n        </button>\r\n        <button mat-menu-item (click)=\"onContextMenuFileAction(item, 3)\"\r\n                *ngIf=\"((menuOptionsType === 2 || menuOptionsType === 3) && isPasteEnabled && googleDriveCurrentFolder?.id !== -1)\">\r\n          <mat-icon>content_paste</mat-icon>\r\n          Paste\r\n        </button>\r\n        <button mat-menu-item (click)=\"onContextMenuFileAction(item, 4)\"\r\n                *ngIf=\"menuOptionsType === 2 && googleDriveCurrentFolder?.id !== -1\">\r\n          <mat-icon>content_cut</mat-icon>\r\n          Cut\r\n        </button>\r\n        <button mat-menu-item (click)=\"onContextMenuFileAction(item, 8)\"\r\n                *ngIf=\"menuOptionsType === 2 && googleDriveCurrentFolder?.id !== -1\">\r\n          <mat-icon>edit</mat-icon>\r\n          Rename File\r\n        </button>\r\n        <button mat-menu-item (click)=\"onContextMenuFileAction(item, 5)\"\r\n                *ngIf=\"menuOptionsType === 2 && googleDriveCurrentFolder?.id !== -1\">\r\n          <mat-icon>vertical_align_bottom</mat-icon>\r\n          Download\r\n        </button>\r\n        <button mat-menu-item (click)=\"onContextMenuFileAction(item, 6)\"\r\n                *ngIf=\"menuOptionsType === 2 && googleDriveCurrentFolder?.id !== -1\">\r\n          <mat-icon>delete</mat-icon>\r\n          Move To Trash\r\n        </button>\r\n        <button mat-menu-item (click)=\"onContextMenuFileAction(item, 7)\"\r\n                *ngIf=\"menuOptionsType === 2 && googleDriveCurrentFolder?.id === -1\">\r\n          <mat-icon>restore_from_trash</mat-icon>\r\n          Restore From Trash\r\n        </button>\r\n      </ng-template>\r\n    </mat-menu>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/query-module/query-dashboard-tab/upload-query-documents-dialog/upload-query-documents-dialog.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/query-module/query-dashboard-tab/upload-query-documents-dialog/upload-query-documents-dialog.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: Views, UploadQueryDocumentsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadQueryDocumentsDialogComponent", function() { return UploadQueryDocumentsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _client_documents_google_drive_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../client-documents/google-drive.model */ "./src/app/admin/client-module/client-documents/google-drive.model.ts");
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














var Views;
(function (Views) {
    Views[Views["FOLDER_VIEW"] = 0] = "FOLDER_VIEW";
    Views[Views["SUB_FOLDER_VIEW"] = 1] = "SUB_FOLDER_VIEW";
})(Views || (Views = {}));
var UploadQueryDocumentsDialogComponent = /** @class */ (function () {
    function UploadQueryDocumentsDialogComponent(dialogRef, data, _router, _fb, sanitizer, _commonCrudService, _sharedService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._router = _router;
        this._fb = _fb;
        this.sanitizer = sanitizer;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this.dialog = dialog;
        // Google Picker
        this.developerKey = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GoogleDriveSettings"].API_KEY;
        this.clientId = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GoogleDriveSettings"].CLIENT_SECRET;
        this.scope = [
            _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GoogleDriveSettings"].SCOPE_PROFILE,
            _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GoogleDriveSettings"].SCOPE_EMAIL,
            _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GoogleDriveSettings"].SCOPE_URL
        ].join(' ');
        this.pickerApiLoaded = false;
        this.pickerFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.googlePickerFileArray = {};
        /// Regular Componenets
        this.queryData = null;
        this.googleDriveFolderList = [];
        this.googleDriveCurrentFolder = null;
        this.googleDriveTrashFolder = new _client_documents_google_drive_model__WEBPACK_IMPORTED_MODULE_13__["GoogleDriveFolder"]();
        this.googleDriveAllFileFolder = new _client_documents_google_drive_model__WEBPACK_IMPORTED_MODULE_13__["GoogleDriveFolder"]();
        this.googleDriveFileList = [];
        this.googleMetaData = [];
        this.clientFileCopyOrMove = [];
        this.isPasteEnabled = false;
        this.enumView = Views;
        this.activeView = this.enumView.FOLDER_VIEW;
        this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_9__["ValidationConstantMessage"]();
        this.uploadDoc = new FormData();
        this.breadCrumsList = [];
        this.selectedFileArray = [];
        this.selectedCopyOrCutFileArray = [];
        this.selectedFolderArray = [];
        this.fileTypeList = [];
        this.maxDateForSelect = new Date();
        this.PeriodFromValue = null;
        this.PeriodToValue = null;
        this.menuOptionsType = 1;
        this.contextMenuPosition = { x: '0px', y: '0px' };
        this.isShow = true;
        // Other Variables
        this.isOpenFilterView = false;
        this.itemPasteType = 0;
        this.previous_folder_id = '';
        this.maxFileAllowed = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].MAXIMUM_FILE_ALLOWED_TO_SELECT;
        this.finalArrayFolderList = [];
        this.documentUploadType = 0;
        this.queryDetailId = 0;
    }
    UploadQueryDocumentsDialogComponent.prototype.ngOnInit = function () {
        this.getFileTypeList();
        this.queryData = (this.data) ? this.data.queryData : null;
        this.documentUploadType = (this.data) ? this.data.uploadType : null;
        this.queryDetailId = (this.data) ? this.data.queryDetailId : null;
        this.breadCrumsList.push({ 'entity_id': this.queryData.entity_id, 'directory_name': 'Home', 'parent_id': 0, 'id': 0, 'folder': null, 'subclient_id': 0 });
        this.googleDriveList(this.queryData.entity_id, 0, 0);
        // this.createAdvanceFilterForm();
        this.createFolderListForMoveFile();
    };
    /**
     * Get File Type List
     */
    UploadQueryDocumentsDialogComponent.prototype.getFileTypeList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].DROPDOWN_LIST, {
            'table': 'google_drive_meta_data',
            'column': 'id,key,label,icon,mimeType,edit,class,isFileCreate,extension,isFileSearch,labelSearch,extensionSearch,extensionSearchSort'
        }, {}).subscribe(function (response) {
            // console.log(response);
            _this.googleMetaData = response;
            _this.fileTypeList = response;
            _this.fileTypeList = response.filter(function (item) { return item.isFileSearch === 1; });
            _this.fileTypeList.sort(function (a, b) {
                return a.extensionSearchSort - b.extensionSearchSort;
            });
        });
    };
    UploadQueryDocumentsDialogComponent.prototype.createFolderListForMoveFile = function () {
        var _this = this;
        var params = { 'entity_id': this.queryData.entity_id };
        // console.log(1);
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].GOOGLE_DRIVE_FOLDER_LIST, params).subscribe(function (response) {
            var itemData = response.payload.data;
            var finalArray = [];
            if (itemData.length) {
                itemData.forEach(function (item) {
                    if (item.parent_id === 0) {
                        item.move_directory_path = '';
                        var child = _this.getNestedChildren(itemData, item.id);
                        if (child.length) {
                            item['children'] = child;
                            finalArray.push(item);
                        }
                    }
                });
            }
            // console.log(finalArray);
            _this.finalArrayFolderList = finalArray;
        });
    };
    UploadQueryDocumentsDialogComponent.prototype.getNestedChildren = function (arr, parent) {
        var out = [];
        for (var i in arr) {
            if (arr[i].parent_id === parent) {
                var children = this.getNestedChildren(arr, arr[i].id);
                if (children.length) {
                    arr[i].children = children;
                }
                out.push(arr[i]);
            }
        }
        return out;
    };
    // /**
    //  * Context Menu for folder
    //  * @param event
    //  * @param item
    //  */
    // onContextMenu(event: MouseEvent, item: GoogleDriveFolder | GoogleDriveFile, menuOptionType: number) {
    //   this.menuOptionsType = menuOptionType;
    //   event.preventDefault();
    //   this.contextMenuPosition.x = event.clientX + 'px';
    //   this.contextMenuPosition.y = event.clientY + 'px';
    //   this.contextMenu.menuData = {'item': item};
    //   this.contextMenu.menu.focusFirstItem('mouse');
    //   this.contextMenu.openMenu();
    // }
    //
    // /**
    //  * On Context Menu Folder Action
    //  * @param item
    //  * @param action
    //  */
    // onContextMenuFolderAction(item: GoogleDriveFolder, action: number) {
    //   if (action === 0) {
    //     this.onCreateFolder();
    //   } else if (action === 1) {
    //     this.googleDriveList(item.entity_id, item.id, item.subclient_id);
    //   } else if (action === 2) {
    //     this.onRenameFolder(item);
    //   } else if (action === 3) {
    //     this.onDeleteFolder(item);
    //   }
    // }
    //
    // /**
    //  * On Context Menu Action
    //  * @param item
    //  * @param action
    //  */
    // onContextMenuFileAction(item: GoogleDriveFile, action: number) {
    //   if (action === 1) {
    //     const params = {'file_id': item.file_id};
    //     this._commonCrudService.listData(AdminAPI.GOOGLE_DRIVE_SHARE_FILE, params).subscribe((response) => {
    //       const url = this.googleMetaData.filter(itemData => itemData.mimeType === item.mime_type);
    //       if (url.length) {
    //         if (item.csv_excel_file_id !== null && item.csv_excel_file_id !== '') {
    //           window.open(url[0].edit + item.csv_excel_file_id, '_blank');
    //         } else {
    //           window.open(url[0].edit + item.file_id, '_blank');
    //         }
    //       }
    //     });
    //   } else if (action === 2) {
    //     this.onSelectFileItem(true, item);
    //     this.onMultipleCopyOrCut(1);
    //     // this._sharedService.setClientData(GLOBALDATAKEYS.FILECOPYORMOVE, item);
    //     // this.isPasteEnabled = true;
    //   } else if (action === 3) {
    //     this.onPasteFile();
    //   } else if (action === 4) {
    //     this.onSelectFileItem(true, item);
    //     this.onMultipleCopyOrCut(2);
    //     // this.previous_folder_id = this.googleDriveCurrentFolder.folder_id;
    //     // this._sharedService.setClientData(GLOBALDATAKEYS.FILECOPYORMOVE, item);
    //     // this.isPasteEnabled = true;
    //   } else if (action === 5) {
    //     this.selectedFileArray.push(item.file_id);
    //     this.downloadDocument();
    //   } else if (action === 6) {
    //     this.onDeleteFile(item);
    //   } else if (action === 7) {
    //     this.onRestoreFile(item);
    //   } else if (action === 8) {
    //     this.onRenameFile(item);
    //   }
    // }
    /**
     * Google Drive List Folder File
     * @param entity_id
     * @param parent_id
     */
    UploadQueryDocumentsDialogComponent.prototype.googleDriveList = function (entity_id, parent_id, subclient_id) {
        var _this = this;
        this.createAdvanceFilterForm();
        var params = { 'entity_id': entity_id, 'parent_id': parent_id, 'subclient_id': subclient_id };
        if (parent_id === -1) {
            params['trash'] = 1;
        }
        else if (parent_id === -2) {
            params['trash'] = 0;
        }
        this.googleDriveFileList = [];
        this.googleDriveFolderList = [];
        this.selectedFileArray = [];
        this.selectedFolderArray = [];
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].GOOGLE_DRIVE_LIST, params).subscribe(function (response) {
            _this.googleDriveFolderList = response.payload.data;
            if (parent_id === 0 && subclient_id === 0) {
                // Add All File Folder
                _this.googleDriveAllFileFolder.id = -2;
                _this.googleDriveAllFileFolder.entity_id = _this.queryData.entity_id;
                _this.googleDriveAllFileFolder.parent_id = -2;
                _this.googleDriveAllFileFolder.directory_name = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].ALL_FILE_FOLDER_NAME;
                _this.googleDriveAllFileFolder.folder_id = "2";
                _this.googleDriveTrashFolder.folderType = 2;
                _this.googleDriveFolderList.push(_this.googleDriveAllFileFolder);
            }
            _this.googleDriveFolderList.map(function (item) {
                if (item.emptyFolder === 1 && item.directory_id === 0) {
                    item.folderType = 0;
                }
                else if (item.emptyFolder === 0 && item.directory_id === 0) {
                    item.folderType = 1;
                }
                else if (item.emptyFolder === 1 && item.directory_id !== 0) {
                    item.folderType = 0;
                }
                else if (item.emptyFolder === 0 && item.directory_id !== 0) {
                    item.folderType = 2;
                }
                else {
                    if (item.parent_id === -1) {
                        item.folderType = 3;
                    }
                    else if (item.parent_id === -2) {
                        item.folderType = 4;
                    }
                    else {
                        item.folderType = 2;
                    }
                }
            });
            _this.googleDriveFileList = response.payload.fileList;
            _this.maxFileAllowed = (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].MAXIMUM_FILE_ALLOWED_TO_SELECT <= _this.googleDriveFileList.length) ? _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].MAXIMUM_FILE_ALLOWED_TO_SELECT : _this.googleDriveFileList.length;
        });
    };
    /**
     * Open Sub Folder
     * @param entity_id
     * @param parent_id
     */
    UploadQueryDocumentsDialogComponent.prototype.openSubFolder = function (entity_id, parent_id, subclient_id) {
        // console.log(parent_id);
        var currentFolder = this.googleDriveFolderList.filter(function (item) { return item.id === parent_id && item.subclient_id === subclient_id; });
        this.googleDriveCurrentFolder = (currentFolder) ? currentFolder[0] : null;
        this.breadCrumsList.push({ 'entity_id': entity_id, 'directory_name': this.googleDriveCurrentFolder.directory_name, 'parent_id': parent_id, 'id': this.googleDriveCurrentFolder.id, 'folder': (currentFolder) ? currentFolder[0] : null, 'subclient_id': this.googleDriveCurrentFolder.subclient_id });
        this.googleDriveList(entity_id, parent_id, subclient_id);
    };
    /**
     * Open Breadcrum Folder
     * @param entity_id
     * @param parent_id
     */
    UploadQueryDocumentsDialogComponent.prototype.openBreadCrumFolder = function (entity_id, parent_id, index, folder, subclient_id) {
        this.googleDriveCurrentFolder = folder;
        this.breadCrumsList = this.breadCrumsList.splice(0, index + 1);
        this.googleDriveList(entity_id, parent_id, subclient_id);
    };
    /**
     * On Refresh Folder
     */
    UploadQueryDocumentsDialogComponent.prototype.onRefreshFolder = function () {
        if (this.googleDriveCurrentFolder) {
            this.googleDriveList(this.googleDriveCurrentFolder.entity_id, this.googleDriveCurrentFolder.id, this.googleDriveCurrentFolder.subclient_id);
        }
        else {
            this.googleDriveList(this.queryData.entity_id, 0, 0);
        }
    };
    /**
     * Get google drive meta data
     * @param type
     */
    UploadQueryDocumentsDialogComponent.prototype.getGoogleDriveMetaDataType = function (keyType, valueType, returnType) {
        if (keyType === 'extensionSearch') {
            var name_1 = valueType;
            var lastDot = name_1.lastIndexOf('.');
            var ext_1 = name_1.substring(lastDot + 1);
            var val = this.fileTypeList.filter(function (elem) { return elem.extensionSearch ? elem.extensionSearch.split(',').indexOf(ext_1.toLowerCase()) > -1 : []; });
            return (val.length) ? val[0][returnType] : '';
        }
        else {
            var val = this.fileTypeList.filter(function (elem) { return elem[keyType] === valueType; });
            return (val.length) ? val[0][returnType] : '';
        }
    };
    /**
     * Get File Size in KB, MB, GB etc
     * @param fileSize
     */
    UploadQueryDocumentsDialogComponent.prototype.getFileSizeInFormat = function (fileSize) {
        var val = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_12__["bytesToSize"])(Number(fileSize));
        return val;
    };
    /**
     * On home page route
     */
    UploadQueryDocumentsDialogComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_11__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * On view client page redirect
     */
    UploadQueryDocumentsDialogComponent.prototype.onClient = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_11__["AdminRoutes"].VIEW_CLIENT]);
    };
    /**
     * Create search filter
     */
    UploadQueryDocumentsDialogComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.queryData.entity_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            modified_on_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            modified_on_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            file_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    /**
     * On Reset Filter Form
     */
    UploadQueryDocumentsDialogComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.googleDriveList(this.queryData.entity_id, 0, 0);
    };
    /**
     *
     * @param form
     */
    UploadQueryDocumentsDialogComponent.prototype.searchFilesFromEntity = function (form) {
        var _this = this;
        // console.log(form);
        if (form.valid) {
            this.isOpenFilterView = false;
            form.value['modified_on_from'] = (form.value['modified_on_from']) ? moment__WEBPACK_IMPORTED_MODULE_5__(form.value['modified_on_from']).format('YYYY-MM-DD') : null;
            form.value['modified_on_to'] = (form.value['modified_on_to']) ? moment__WEBPACK_IMPORTED_MODULE_5__(form.value['modified_on_to']).format('YYYY-MM-DD') : null;
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].GOOGLE_DRIVE_SEARCH_FILE, form.value).subscribe(function (response) {
                // console.log(response);
                _this.googleDriveFolderList = [];
                _this.googleDriveFileList = [];
                _this.googleDriveFileList = response.payload.data;
                _this.maxFileAllowed = (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].MAXIMUM_FILE_ALLOWED_TO_SELECT <= _this.googleDriveFileList.length) ? _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["BASE"].MAXIMUM_FILE_ALLOWED_TO_SELECT : _this.googleDriveFileList.length;
            });
        }
    };
    UploadQueryDocumentsDialogComponent.prototype.toggleDisplay = function (value) {
        this.isShow = value;
    };
    /**
     * Sort By
     */
    UploadQueryDocumentsDialogComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.sortBy = sortKey;
        this.sortOrder = sortVal;
        if (sortKey === 'name') {
            this.googleDriveFileList.sort(function (a, b) {
                if (sortVal === 'asc') {
                    return a.file_name.localeCompare(b.file_name);
                }
                else {
                    return b.file_name.localeCompare(a.file_name);
                }
            });
            this.googleDriveFolderList.sort(function (a, b) {
                if (sortVal === 'asc') {
                    return Number(a.id) - Number(b.id);
                }
                else {
                    return Number(b.id) - Number(a.id);
                }
            });
        }
        if (sortKey === 'modified_by') {
            this.googleDriveFileList.sort(function (a, b) {
                if (sortVal === 'asc') {
                    return new Date(a.created_on).getTime() - new Date(b.created_on).getTime();
                }
                else {
                    return new Date(b.created_on).getTime() - new Date(a.created_on).getTime();
                }
            });
            this.googleDriveFolderList.sort(function (a, b) {
                if (sortVal === 'asc') {
                    return new Date(a.modified_on).getTime() - new Date(b.modified_on).getTime();
                }
                else {
                    return new Date(b.modified_on).getTime() - new Date(a.modified_on).getTime();
                }
            });
        }
        if (sortKey === 'size') {
            this.googleDriveFileList.sort(function (a, b) {
                if (sortVal === 'asc') {
                    return a.size - b.size;
                }
                else {
                    return b.size - a.size;
                }
            });
        }
    };
    /**
     * On Select of Folder Item
     * @param googleDriveFolder
     */
    UploadQueryDocumentsDialogComponent.prototype.onSelectFolderItem = function (event, googleDriveFolder) {
        if (event.checked) {
            this.selectedFolderArray.push(googleDriveFolder.folder_id);
        }
        else {
            var indexOfFolder = this.selectedFolderArray.indexOf(googleDriveFolder.folder_id);
            if (indexOfFolder !== -1) {
                this.selectedFolderArray.splice(indexOfFolder, 1);
            }
        }
    };
    /**
     * On Select of File Item
     * @param googleDriveFile
     */
    UploadQueryDocumentsDialogComponent.prototype.onSelectFileItem = function (event, googleDriveFile) {
        if (event.checked) {
            if (this.selectedFileArray.length < this.maxFileAllowed) {
                this.selectedFileArray.push(googleDriveFile.file_id);
            }
            else {
                this._sharedService.setToastMessage("You can select maximum " + this.maxFileAllowed + " file.", _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["ToastType"].WARNING);
            }
        }
        else {
            var indexOfFile = this.selectedFileArray.indexOf(googleDriveFile.file_id);
            if (indexOfFile !== -1) {
                this.selectedFileArray.splice(indexOfFile, 1);
            }
        }
    };
    /**
     * All File Select & Unselect
     * @param event
     */
    UploadQueryDocumentsDialogComponent.prototype.onSelectAllFileItem = function (event, googleDriveFile) {
        var _this = this;
        if (event === true) {
            this.selectedFileArray = [];
            if (googleDriveFile.length) {
                var i_1 = 1;
                googleDriveFile.forEach(function (itemData) {
                    if (i_1 <= _this.maxFileAllowed) {
                        _this.selectedFileArray.push(itemData.file_id);
                    }
                    i_1++;
                });
            }
        }
        else {
            if (googleDriveFile.length) {
                googleDriveFile.forEach(function (itemData) {
                    var indexOfFile = _this.selectedFileArray.indexOf(itemData.file_id);
                    if (indexOfFile !== -1) {
                        _this.selectedFileArray.splice(indexOfFile, 1);
                    }
                });
            }
        }
    };
    /**
     * Get Folder Color
     * @param folderData
     */
    UploadQueryDocumentsDialogComponent.prototype.getFolderColor = function (folderData) {
        if (folderData.emptyFolder === 1) {
            return "mat-icon material-icons red-color";
        }
        else if (folderData.directory_id === 0) {
            return "mat-icon material-icons primary-color";
        }
        else {
            return "mat-icon material-icons";
        }
    };
    /**
     * Get Folder Text Color
     * @param folderData
     */
    UploadQueryDocumentsDialogComponent.prototype.getFolderTextColor = function (folderData) {
        if (folderData.emptyFolder === 1) {
            return "red-color";
        }
        else if (folderData.directory_id === 0) {
            return "primary-color";
        }
        else {
            return "";
        }
    };
    /**
     * Open filter
     */
    UploadQueryDocumentsDialogComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = true;
    };
    /**
     * close filter
     */
    UploadQueryDocumentsDialogComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    /**
     * Toogle Filter
     */
    UploadQueryDocumentsDialogComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * On Close dialog
     * @param value
     */
    UploadQueryDocumentsDialogComponent.prototype.onClose = function (value) {
        var params = {};
        params['result'] = value;
        params['type'] = this.documentUploadType;
        params['selected_files'] = this.selectedFileArray.join(',');
        this.dialogRef.close(params);
    };
    /**
     * On Insert into information required
     */
    UploadQueryDocumentsDialogComponent.prototype.onInsertIntoInformation = function () {
        var _this = this;
        if (this.selectedFileArray.length) {
            var params = {};
            if (this.documentUploadType === 3) {
                params['query_detail_id'] = this.queryDetailId;
                params['entity_id'] = this.queryData.entity_id;
                params['document_type'] = 0;
                params['document_file'] = this.selectedFileArray.join(',');
                params['document_insert_type'] = 3;
            }
            else if (this.documentUploadType === 5) {
                params['query_add_id'] = this.queryDetailId;
                params['entity_id'] = this.queryData.entity_id;
                params['document_type'] = 0;
                params['document_file'] = this.selectedFileArray.join(',');
                params['document_insert_type'] = 5;
            }
            if (params) {
                this._commonCrudService.uploadDocument(_utility_constants_api__WEBPACK_IMPORTED_MODULE_10__["AdminAPI"].WORKSHEET_DOCUMENT_UPLOAD_DRIVE, params).subscribe(function (response) {
                    _this.onClose(true);
                });
            }
            else {
                this.onClose(true);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], UploadQueryDocumentsDialogComponent.prototype, "contextMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], UploadQueryDocumentsDialogComponent.prototype, "menuDataItem", void 0);
    UploadQueryDocumentsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-query-documents-dialog',
            template: __webpack_require__(/*! ./upload-query-documents-dialog.component.html */ "./src/app/admin/client-module/query-module/query-dashboard-tab/upload-query-documents-dialog/upload-query-documents-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], UploadQueryDocumentsDialogComponent);
    return UploadQueryDocumentsDialogComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~edit-queries-edit-queries-module~query-dashboard-tab-query-dashboard-tab-module~query-module~0d01d728.js.map