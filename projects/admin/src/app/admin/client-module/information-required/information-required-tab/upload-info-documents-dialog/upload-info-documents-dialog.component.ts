import {Component, EventEmitter, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatMenuTrigger} from "@angular/material";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import * as moment from "moment";
import {BASE, GoogleDriveSettings, ToastType} from "../../../../../../utility/constants/base-constants";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import {SharedService} from "../../../../../../utility/shared-service/shared.service";
import {ValidationConstantMessage} from "../../../../../../utility/validation";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {AdminRoutes} from "../../../../../../utility/constants/admin-route";
import {bytesToSize} from "../../../../../../utility/common-functions";
import {GoogleDriveFile, GoogleDriveFolder, GoogleDriveMetaDataList} from "../../../client-documents/google-drive.model";


declare var gapi: any;
declare var google: any;

export enum Views {
  FOLDER_VIEW, SUB_FOLDER_VIEW
}

@Component({
  selector: 'app-upload-info-documents-dialog',
  templateUrl: './upload-info-documents-dialog.component.html'
})
export class UploadInfoDocumentsDialogComponent implements OnInit {

  // Google Picker
  private developerKey = GoogleDriveSettings.API_KEY;
  private clientId = GoogleDriveSettings.CLIENT_SECRET;
  private scope = [
    GoogleDriveSettings.SCOPE_PROFILE,
    GoogleDriveSettings.SCOPE_EMAIL,
    GoogleDriveSettings.SCOPE_URL
  ].join(' ');
  pickerApiLoaded = false;
  pickerFileSelected: EventEmitter<boolean> = new EventEmitter(false);
  googlePickerFileArray = {};
  oauthToken?: any;

  /// Regular Componenets
  informationData: any = null;
  googleDriveFolderList: GoogleDriveFolder[] = [];
  googleDriveCurrentFolder: GoogleDriveFolder = null;
  googleDriveTrashFolder = new GoogleDriveFolder();
  googleDriveAllFileFolder = new GoogleDriveFolder();
  googleDriveFileList: GoogleDriveFile[] = [];
  googleMetaData: GoogleDriveMetaDataList[] = [];
  clientFileCopyOrMove: GoogleDriveFile[] = [];
  isPasteEnabled = false;
  enumView = Views;
  activeView: Views = this.enumView.FOLDER_VIEW;
  validationMsg = new ValidationConstantMessage();
  uploadDoc = new FormData();
  breadCrumsList = [];
  selectedFileArray = [];
  selectedCopyOrCutFileArray = [];
  selectedFolderArray = [];
  fileTypeList: GoogleDriveMetaDataList[] = [];
  maxDateForSelect = new Date();
  PeriodFromValue = null;
  PeriodToValue = null;
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;
  @ViewChild(MatMenuTrigger) menuDataItem: MatMenuTrigger;

  menuOptionsType = 1;
  contextMenuPosition = {x: '0px', y: '0px'};
  filterForm: FormGroup;
  isShow = true;
  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // Other Variables
  isOpenFilterView = false;
  itemPasteType = 0;
  previous_folder_id = '';
  maxFileAllowed = BASE.MAXIMUM_FILE_ALLOWED_TO_SELECT;
  finalArrayFolderList = [];
  documentUploadType = 0;
  informationDetailId = 0;

  constructor(public dialogRef: MatDialogRef<UploadInfoDocumentsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _router: Router, private _fb: FormBuilder, private sanitizer: DomSanitizer,
              private _commonCrudService: CommonCrudService, private _sharedService: SharedService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getFileTypeList();
    this.informationData = (this.data) ? this.data.informationData : null;
    this.documentUploadType = (this.data) ? this.data.uploadType : null;
    this.informationDetailId = (this.data) ? this.data.informationDetailId : 0;
    this.breadCrumsList.push({'entity_id': this.informationData.entity_id, 'directory_name': 'Home', 'parent_id': 0, 'id': 0, 'folder': null, 'subclient_id': 0});
    this.googleDriveList(this.informationData.entity_id, 0, 0);
    // this.createAdvanceFilterForm();
    this.createFolderListForMoveFile();
  }

  /**
   * Get File Type List
   */
  getFileTypeList() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      'table': 'google_drive_meta_data',
      'column': 'id,key,label,icon,mimeType,edit,class,isFileCreate,extension,isFileSearch,labelSearch,extensionSearch,extensionSearchSort'
    }, {}).subscribe(response => {
      // console.log(response);
      this.googleMetaData = response;
      this.fileTypeList = response;
      this.fileTypeList = response.filter(item => item.isFileSearch === 1);
      this.fileTypeList.sort(function (a, b) {
        return a.extensionSearchSort - b.extensionSearchSort;
      });
    });
  }

  createFolderListForMoveFile() {
    const params = {'entity_id': this.informationData.entity_id};
    // console.log(1);
    this._commonCrudService.listData(AdminAPI.GOOGLE_DRIVE_FOLDER_LIST, params).subscribe((response) => {
      const itemData = response.payload.data;
      const finalArray = [];
      if (itemData.length) {
        itemData.forEach(item => {
          if (item.parent_id === 0) {
            item.move_directory_path = '';
            const child = this.getNestedChildren(itemData, item.id);
            if (child.length) {
              item['children'] = child;
              finalArray.push(item);
            }
          }
        });
      }
      // console.log(finalArray);
      this.finalArrayFolderList = finalArray;
    });
  }

  getNestedChildren(arr, parent) {
    const out = [];
    for (const i in arr) {
      if (arr[i].parent_id === parent) {
        const children = this.getNestedChildren(arr, arr[i].id);

        if (children.length) {
          arr[i].children = children;
        }
        out.push(arr[i]);
      }
    }
    return out;
  }


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
  googleDriveList(entity_id: number, parent_id: number, subclient_id: number) {
    this.createAdvanceFilterForm();
    const params = {'entity_id': entity_id, 'parent_id': parent_id, 'subclient_id': subclient_id};
    if (parent_id === -1) {
      params['trash'] = 1;
    } else if (parent_id === -2) {
      params['trash'] = 0;
    }
    this.googleDriveFileList = [];
    this.googleDriveFolderList = [];
    this.selectedFileArray = [];
    this.selectedFolderArray = [];
    this._commonCrudService.listData(AdminAPI.GOOGLE_DRIVE_LIST, params).subscribe((response) => {
      this.googleDriveFolderList = response.payload.data;
      if (parent_id === 0 && subclient_id === 0) {
        // Add All File Folder
        this.googleDriveAllFileFolder.id = -2;
        this.googleDriveAllFileFolder.entity_id = this.informationData.entity_id;
        this.googleDriveAllFileFolder.parent_id = -2;
        this.googleDriveAllFileFolder.directory_name = BASE.ALL_FILE_FOLDER_NAME;
        this.googleDriveAllFileFolder.folder_id = "2";
        this.googleDriveTrashFolder.folderType = 2;
        this.googleDriveFolderList.push(this.googleDriveAllFileFolder);
      }
      this.googleDriveFolderList.map(item => {
        if (item.emptyFolder === 1 && item.directory_id === 0) {
          item.folderType = 0;
        } else if (item.emptyFolder === 0 && item.directory_id === 0) {
          item.folderType = 1;
        } else if (item.emptyFolder === 1 && item.directory_id !== 0) {
          item.folderType = 0;
        } else if (item.emptyFolder === 0 && item.directory_id !== 0) {
          item.folderType = 2;
        } else {
          if (item.parent_id === -1) {
            item.folderType = 3;
          } else if (item.parent_id === -2) {
            item.folderType = 4;
          } else {
            item.folderType = 2;
          }
        }
      });
      this.googleDriveFileList = response.payload.fileList;
      this.maxFileAllowed = (BASE.MAXIMUM_FILE_ALLOWED_TO_SELECT <= this.googleDriveFileList.length) ? BASE.MAXIMUM_FILE_ALLOWED_TO_SELECT : this.googleDriveFileList.length;
    });
  }

  /**
   * Open Sub Folder
   * @param entity_id
   * @param parent_id
   */
  openSubFolder(entity_id: number, parent_id: number, subclient_id: number) {
    // console.log(parent_id);
    const currentFolder = this.googleDriveFolderList.filter(item => item.id === parent_id && item.subclient_id === subclient_id);
    this.googleDriveCurrentFolder = (currentFolder) ? currentFolder[0] : null;
    this.breadCrumsList.push({'entity_id': entity_id, 'directory_name': this.googleDriveCurrentFolder.directory_name, 'parent_id': parent_id, 'id': this.googleDriveCurrentFolder.id, 'folder': (currentFolder) ? currentFolder[0] : null, 'subclient_id': this.googleDriveCurrentFolder.subclient_id});
    this.googleDriveList(entity_id, parent_id, subclient_id);
  }

  /**
   * Open Breadcrum Folder
   * @param entity_id
   * @param parent_id
   */
  openBreadCrumFolder(entity_id: number, parent_id: number, index: number, folder: any, subclient_id: number) {
    this.googleDriveCurrentFolder = folder;
    this.breadCrumsList = this.breadCrumsList.splice(0, index + 1);
    this.googleDriveList(entity_id, parent_id, subclient_id);
  }

  /**
   * On Refresh Folder
   */
  onRefreshFolder() {
    if (this.googleDriveCurrentFolder) {
      this.googleDriveList(this.googleDriveCurrentFolder.entity_id, this.googleDriveCurrentFolder.id, this.googleDriveCurrentFolder.subclient_id);
    } else {
      this.googleDriveList(this.informationData.entity_id, 0, 0);
    }
  }

  /**
   * Get google drive meta data
   * @param type
   */
  getGoogleDriveMetaDataType(keyType: any, valueType: any, returnType: any) {
    if (keyType === 'extensionSearch') {
      const name = valueType;
      const lastDot = name.lastIndexOf('.');
      const ext = name.substring(lastDot + 1);
      const val = this.fileTypeList.filter(elem => elem.extensionSearch ? elem.extensionSearch.split(',').indexOf(ext.toLowerCase()) > -1 : []);
      return (val.length) ? val[0][returnType] : '';
    } else {
      const val = this.fileTypeList.filter(elem => elem[keyType] === valueType);
      return (val.length) ? val[0][returnType] : '';
    }
  }

  /**
   * Get File Size in KB, MB, GB etc
   * @param fileSize
   */
  getFileSizeInFormat(fileSize: number) {
    const val = bytesToSize(Number(fileSize));
    return val;
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * On view client page redirect
   */
  onClient() {
    this._router.navigate(['/' + AdminRoutes.VIEW_CLIENT]);
  }

  /**
   * Create search filter
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      entity_id: new FormControl(this.informationData.entity_id, Validators.required),
      type: new FormControl(null),
      modified_on_from: new FormControl(null),
      modified_on_to: new FormControl(null),
      file_name: new FormControl(null),
      path: new FormControl(null)
    });
  }

  /**
   * On Reset Filter Form
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.googleDriveList(this.informationData.entity_id, 0, 0);
  }

  /**
   *
   * @param form
   */
  searchFilesFromEntity(form: FormGroup) {
    // console.log(form);
    if (form.valid) {
      this.isOpenFilterView = false;
      form.value['modified_on_from'] = (form.value['modified_on_from']) ? moment(form.value['modified_on_from']).format('YYYY-MM-DD') : null;
      form.value['modified_on_to'] = (form.value['modified_on_to']) ? moment(form.value['modified_on_to']).format('YYYY-MM-DD') : null;
      this._commonCrudService.addData(AdminAPI.GOOGLE_DRIVE_SEARCH_FILE, form.value).subscribe((response) => {
        // console.log(response);
        this.googleDriveFolderList = [];
        this.googleDriveFileList = [];
        this.googleDriveFileList = response.payload.data;
        this.maxFileAllowed = (BASE.MAXIMUM_FILE_ALLOWED_TO_SELECT <= this.googleDriveFileList.length) ? BASE.MAXIMUM_FILE_ALLOWED_TO_SELECT : this.googleDriveFileList.length;
      });
    }
  }

  toggleDisplay(value: boolean) {
    this.isShow = value;
  }

  /**
   * Sort By
   */
  getSortData(sortKey: string, sortVal: string) {
    this.sortBy = sortKey;
    this.sortOrder = sortVal;
    if (sortKey === 'name') {
      this.googleDriveFileList.sort(function (a, b) {
        if (sortVal === 'asc') {
          return a.file_name.localeCompare(b.file_name);
        } else {
          return b.file_name.localeCompare(a.file_name);
        }
      });
      this.googleDriveFolderList.sort(function (a, b) {
        if (sortVal === 'asc') {
          return Number(a.id) - Number(b.id);
        } else {
          return Number(b.id) - Number(a.id);
        }
      });
    }

    if (sortKey === 'modified_by') {
      this.googleDriveFileList.sort(function (a, b) {
        if (sortVal === 'asc') {
          return new Date(a.created_on).getTime() - new Date(b.created_on).getTime();
        } else {
          return new Date(b.created_on).getTime() - new Date(a.created_on).getTime();
        }
      });
      this.googleDriveFolderList.sort(function (a, b) {
        if (sortVal === 'asc') {
          return new Date(a.modified_on).getTime() - new Date(b.modified_on).getTime();
        } else {
          return new Date(b.modified_on).getTime() - new Date(a.modified_on).getTime();
        }
      });
    }

    if (sortKey === 'size') {
      this.googleDriveFileList.sort(function (a, b) {
        if (sortVal === 'asc') {
          return a.size - b.size;
        } else {
          return b.size - a.size;
        }
      });
    }
  }

  /**
   * On Select of Folder Item
   * @param googleDriveFolder
   */
  onSelectFolderItem(event: any, googleDriveFolder: GoogleDriveFolder) {
    if (event.checked) {
      this.selectedFolderArray.push(googleDriveFolder.folder_id);
    } else {
      const indexOfFolder = this.selectedFolderArray.indexOf(googleDriveFolder.folder_id);
      if (indexOfFolder !== -1) {
        this.selectedFolderArray.splice(indexOfFolder, 1);
      }
    }
  }

  /**
   * On Select of File Item
   * @param googleDriveFile
   */
  onSelectFileItem(event: any, googleDriveFile: GoogleDriveFile) {
    if (event.checked) {
      if (this.selectedFileArray.length < this.maxFileAllowed) {
        this.selectedFileArray.push(googleDriveFile.file_id);
      } else {
        this._sharedService.setToastMessage("You can select maximum " + this.maxFileAllowed + " file.", ToastType.WARNING);
      }
    } else {
      const indexOfFile = this.selectedFileArray.indexOf(googleDriveFile.file_id);
      if (indexOfFile !== -1) {
        this.selectedFileArray.splice(indexOfFile, 1);
      }
    }
  }

  /**
   * All File Select & Unselect
   * @param event
   */
  onSelectAllFileItem(event: boolean, googleDriveFile: GoogleDriveFile[]) {
    if (event === true) {
      this.selectedFileArray = [];
      if (googleDriveFile.length) {
        let i = 1;
        googleDriveFile.forEach(itemData => {
          if (i <= this.maxFileAllowed) {
            this.selectedFileArray.push(itemData.file_id);
          }
          i++;
        });
      }
    } else {
      if (googleDriveFile.length) {
        googleDriveFile.forEach(itemData => {
          const indexOfFile = this.selectedFileArray.indexOf(itemData.file_id);
          if (indexOfFile !== -1) {
            this.selectedFileArray.splice(indexOfFile, 1);
          }
        });
      }
    }
  }

  /**
   * Get Folder Color
   * @param folderData
   */
  getFolderColor(folderData: GoogleDriveFolder) {
    if (folderData.emptyFolder === 1) {
      return "mat-icon material-icons red-color";
    } else if (folderData.directory_id === 0) {
      return "mat-icon material-icons primary-color";
    } else {
      return "mat-icon material-icons";
    }
  }

  /**
   * Get Folder Text Color
   * @param folderData
   */
  getFolderTextColor(folderData: GoogleDriveFolder) {
    if (folderData.emptyFolder === 1) {
      return "red-color";
    } else if (folderData.directory_id === 0) {
      return "primary-color";
    } else {
      return "";
    }
  }

  /**
   * Open filter
   */
  onOpenFilter() {
    this.isOpenFilterView = true;
  }

  /**
   * close filter
   */
  onCloseFilter() {
    this.isOpenFilterView = false;
  }

  /**
   * Toogle Filter
   */
  onToggleFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }


  /**
   * On Close dialog
   * @param value
   */
  onClose(value: boolean) {
    const params = {};
    params['result'] = value;
    params['type'] = this.documentUploadType;
    params['selected_files'] = this.selectedFileArray.join(',');
    this.dialogRef.close(params);
  }

  /**
   * On Insert into information required
   */
  onInsertIntoInformation() {
    if (this.selectedFileArray.length) {
      const params = {};
      if (this.documentUploadType === 2) {
        params['information_detail_id'] = this.informationDetailId;
        params['entity_id'] = this.informationData.entity_id;
        params['document_type'] = 0;
        params['document_file'] = this.selectedFileArray.join(',');
        params['document_insert_type'] = 2;
      } else if (this.documentUploadType === 4) {
        params['information_add_id'] = this.informationDetailId;
        params['entity_id'] = this.informationData.entity_id;
        params['document_type'] = 0;
        params['document_file'] = this.selectedFileArray.join(',');
        params['document_insert_type'] = 4;
      }
      if (params) {
        this._commonCrudService.uploadDocument(AdminAPI.WORKSHEET_DOCUMENT_UPLOAD_DRIVE, params).subscribe(response => {
          this.onClose(true);
        });
      } else {
        this.onClose(true);
      }
    }
  }
}

export interface Item {
  id: number;
  name: string;
}
