import {Component, EventEmitter, HostListener, NgZone, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatMenuTrigger} from "@angular/material";
import {Router} from "@angular/router";
import {AdminRoutes} from "../../../../utility/constants/admin-route";
import {Clients} from "../view-client/view-client.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {CommonCrudService} from "../../../../utility/shared-service/common-crud.service";
import {SharedService} from "../../../../utility/shared-service/shared.service";
import {AdminAPI} from "../../../../utility/constants/api";
import {GoogleDriveFile, GoogleDriveFolder, GoogleDriveMetaDataList} from "./google-drive.model";
import {CreateFolderDialogComponent} from "./create-folder-dialog/create-folder-dialog.component";
import {DocRenameDialogComponent} from "./doc-rename-dialog/doc-rename-dialog.component";
import {ConfirmationDialogComponent} from "../../../../utility/components/confirmation-dialog/confirmation-dialog.component";
import {CreateYearFolderDialogComponent} from "./create-year-folder-dialog/create-year-folder-dialog.component";
import {AppConstant, BASE, GLOBALDATAKEYS, ToastType} from "../../../../utility/constants/base-constants";
import {bytesToSize, isValidFileTypeForClientDocument} from "../../../../utility/common-functions";
import {ValidationConstantMessage} from "../../../../utility/validation";
import * as moment from "moment";
import * as FileSaver from "file-saver";
import {CopyMoveDocumentsDialogComponent} from "./copy-move-documents-dialog/copy-move-documents-dialog.component";
import {ADMINTABACCESS} from "../../../../utility/constants/header-constant";
import {GoogleDriveService} from "./google-drive-service.service";
import {UploadDocumentsDialogComponent} from "./upload-documents-dialog/upload-documents-dialog.component";
import {CreateBacklogDialogComponent} from "./create-backlog-dialog/create-backlog-dialog.component";
import {Privilege} from "../../../../utility/shared-model/admin-user.model";
import {AddAudioLinkDialogComponent} from "./add-audio-link-dialog/add-audio-link-dialog.component";

export enum Views {
  FOLDER_VIEW, SUB_FOLDER_VIEW, QUICK_MENU_LIST
}

@Component({
  selector: 'app-client-documents',
  templateUrl: './client-documents.component.html',
  styleUrls: ['./client-documents.component.scss']
})
export class ClientDocumentsComponent implements OnInit {
  // Google Picker
  developerKey = 'AIzaSyAjumSZZ0pV2DBjFAiPRT55nZwbIoRZNYY';
  clientId = "992928031553-ocpf2n1rj4nfp91berhmuphmsv7mmb6s.apps.googleusercontent.com";
  scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/drive'
  ].join(' ');
  pickerApiLoaded = false;
  pickerFileSelected: EventEmitter<boolean> = new EventEmitter(false);
  googlePickerFileArray = {};
  oauthToken?: any;

  /// Regular Componenets
  clientData: Clients = null;
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
  maxFileAllowed = 0;
  finalArrayFolderList = [];
  isCreateMasterFolder = false;
  tabDataClientAllocation: Privilege | any[];
  isCreateBacklogFolder = false;
  tabID = ADMINTABACCESS.WORKFLOW_CLIENT_DOCUMENTS;
  files = [];
  tabs = [];
  tabIDCL = ADMINTABACCESS.CLIENT_CLIENTALLOCATION;

  constructor(private zone: NgZone, private _router: Router, private _fb: FormBuilder, private sanitizer: DomSanitizer,
              private _commonCrudService: CommonCrudService, private _sharedService: SharedService,
              public dialog: MatDialog, private googleDrivePickerService: GoogleDriveService) {
  }

  ngOnInit() {
    this.isCreateMasterFolder = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'year_folder', 1);
    this.isCreateBacklogFolder = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'backlog', 1);
    this.tabDataClientAllocation = this._sharedService.checkUserPrivilegesTabs(this.tabIDCL);
    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    this.getFileTypeList();
    this.getClientData();
    const dataForCopy = this._sharedService.getClientData(GLOBALDATAKEYS.FILECOPYORMOVE);
    if (dataForCopy) {
      this.isPasteEnabled = true;
    }
    this.breadCrumsList.push({'entity_id': this.clientData.id, 'directory_name': 'Home', 'parent_id': 0, 'id': 0, 'folder': null, 'subclient_id': 0});
    this.googleDriveList(this.clientData.id, 0, 0);
    // this.createAdvanceFilterForm();
    this.createFolderListForMoveFile();
  }

  /**
   * Get file type list
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

  /**
   * Get Client Data
   */
  getClientData() {
    this._commonCrudService.getData(AdminAPI.CLIENT_BASIC, this.clientData.id, {'tab': 1}).subscribe(Response => {
      this.clientData = Response.payload.data;
      const tabs = (this.clientData) ? Response.payload['tabs'] : [];
      this.tabs = tabs.filter(item => item.service_id === 1 || item.service_id === 2);
      // console.log(this.tabs);
    });
  }

  /**
   * Check the bookkeeping or payroll agreed or not
   */
  getServiceIDExistOrNot(service_id: number) {
    const val = this.tabs.filter(elem => elem.service_id === Number(service_id));
    return (val.length) ? val[0].service_id : '';
  }

  /**
   * Create Folder List for Move folder
   */
  createFolderListForMoveFile() {
    const params = {'entity_id': this.clientData.id};
    // console.log(1);
    this._commonCrudService.listData(AdminAPI.GOOGLE_DRIVE_FOLDER_LIST, params).subscribe((response) => {
      const itemDataList = response.payload.data;
      const itemData = itemDataList.filter(item => item.subclient_id === 0);
      // console.log(itemData);
      const finalArray = [];
      if (itemData.length) {
        itemData.forEach(item => {
          if (item.parent_id === 0 && item.subclient_id === 0) {
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

  /**
   * Get Nested Children for folder list
   * @param arr
   * @param parent
   */
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


  /**
   * Context Menu for folder
   * @param event
   * @param item
   */
  onContextMenu(event: MouseEvent, item: GoogleDriveFolder | GoogleDriveFile, menuOptionType: number) {
    this.menuOptionsType = menuOptionType;
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = {'item': item};
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  /**
   * On Context Menu Folder Action
   * @param item
   * @param action
   */
  onContextMenuFolderAction(item: GoogleDriveFolder, action: number) {
    if (action === 0) {
      this.onCreateFolder();
    } else if (action === 1) {
      this.googleDriveList(item.entity_id, item.id, item.subclient_id);
    } else if (action === 2) {
      this.onRenameFolder(item);
    } else if (action === 3) {
      this.onDeleteFolder(item);
    }
  }

  /**
   * On Context Menu Action
   * @param item
   * @param action
   */
  onContextMenuFileAction(item: GoogleDriveFile, action: number) {
    if (action === 1) {
      const params = {'file_id': item.file_id};
      this._commonCrudService.listData(AdminAPI.GOOGLE_DRIVE_SHARE_FILE, params).subscribe((response) => {
        const name = item.file_name;
        const lastDot = name.lastIndexOf('.');
        const ext = name.substring(lastDot + 1);
        const url = this.fileTypeList.filter(elem => elem.extensionSearch ? elem.extensionSearch.split(',').indexOf(ext.toLowerCase()) > -1 : []);
        if (url.length) {
          if (item.csv_excel_file_id !== null && item.csv_excel_file_id !== '') {
            window.open(url[0].edit + item.csv_excel_file_id, '_blank');
          } else {
            window.open(url[0].edit + item.file_id, '_blank');
          }
        }
      });
    } else if (action === 2) {
      this.onSelectFileItem(true, item);
      this.onMultipleCopyOrCut(1);
      // this._sharedService.setClientData(GLOBALDATAKEYS.FILECOPYORMOVE, item);
      // this.isPasteEnabled = true;
    } else if (action === 3) {
      this.onPasteFile();
    } else if (action === 4) {
      this.onSelectFileItem(true, item);
      this.onMultipleCopyOrCut(2);
      // this.previous_folder_id = this.googleDriveCurrentFolder.folder_id;
      // this._sharedService.setClientData(GLOBALDATAKEYS.FILECOPYORMOVE, item);
      // this.isPasteEnabled = true;
    } else if (action === 5) {
      this.selectedFileArray.push(item.file_id);
      this.downloadDocument();
    } else if (action === 6) {
      this.onDeleteFile(item);
    } else if (action === 7) {
      this.onRestoreFile(item);
    } else if (action === 8) {
      this.onRenameFile(item);
    }
  }

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
        // Add Trash Folder
        this.googleDriveTrashFolder.id = -1;
        this.googleDriveTrashFolder.entity_id = this.clientData.id;
        this.googleDriveTrashFolder.parent_id = -1;
        this.googleDriveTrashFolder.directory_name = BASE.TRASH_FOLDER_NAME;
        this.googleDriveTrashFolder.folder_id = "1";
        this.googleDriveTrashFolder.folderType = 3;
        this.googleDriveFolderList.push(this.googleDriveTrashFolder);

        // Add All File Folder
        this.googleDriveAllFileFolder.id = -2;
        this.googleDriveAllFileFolder.entity_id = this.clientData.id;
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

  onOpenClientDocumentsDetails() {
    this._router.navigate(['/' + AdminRoutes.CLIENT_DOCUMENTS_DETAILS_ROUTE]);
  }

  onGoToSubFolder() {
    this.activeView = this.enumView.SUB_FOLDER_VIEW;
  }

  onGoToDetailsSubFolder() {
    this.activeView = this.enumView.FOLDER_VIEW;
  }

  /**
   * On Create Folder
   */
  onCreateFolder() {
    const dialogRef = this.dialog.open(CreateFolderDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        googleDriveFolder: this.googleDriveCurrentFolder,
        type: 0
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onRefreshFolder();
      }
    });
  }

  /**
   * On Add Audio Link
   */
  onAddAudioLinkDialog() {
    const dialogRef = this.dialog.open(AddAudioLinkDialogComponent, {
      panelClass: 'lg-dialog--container',
      data: {
        entity_id: this.clientData.id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });

  }

  /**
   * On Rename Folder
   */
  onRenameFolder(folderName: GoogleDriveFolder) {
    const dialogRef = this.dialog.open(DocRenameDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        googleDriveFolder: folderName,
        type: 0
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onRefreshFolder();
      }
    });
  }

  /**
   * On Create Year Folder
   */
  onCreateYearFolder() {
    const dialogRef = this.dialog.open(CreateYearFolderDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        clientData: this.clientData,
        tabs: this.tabs,
        googleDriveFolder: this.googleDriveCurrentFolder,
        breadCrumFolder: this.breadCrumsList
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onRefreshFolder();
      }
    });
  }

  /**
   * Delete open confirmation modal
   */
  onDeleteFolder(folder: GoogleDriveFolder) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete folder ' + folder.directory_name + '?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        const itemData = {};
        itemData['folder_id'] = folder.folder_id;
        this._commonCrudService.listData(AdminAPI.GOOGLE_DRIVE_DELETE_FOLDER, itemData).subscribe((response) => {
          this.onRefreshFolder();
        });
      }
    });
  }

  /**
   * On Create File
   */
  onCreateFile() {
    const dialogRef = this.dialog.open(CreateFolderDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        googleDriveFolder: this.googleDriveCurrentFolder,
        googleDriveFile: null,
        type: 1
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onRefreshFolder();
      }
    });
  }

  /**
   * On Rename File
   */
  onRenameFile(fileName: GoogleDriveFile) {
    const dialogRef = this.dialog.open(DocRenameDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        googleDriveFolder: this.googleDriveCurrentFolder,
        googleDriveFile: fileName,
        type: 1
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onRefreshFolder();
      }
    });
  }

  /**
   * On Paste file
   * @param type
   */
  onPasteFile(type?: number, folder_id?: string) {
    this.clientFileCopyOrMove = this._sharedService.getClientData(GLOBALDATAKEYS.FILECOPYORMOVE);
    // console.log(this.clientFileCopyOrMove);
    // return;
    if (this.clientFileCopyOrMove.length && this.itemPasteType === 1) {
      // Copy & Paste file
      const params = {};
      params['file_id'] = this.clientFileCopyOrMove.join(',');
      params['folder_id'] = (type !== 1) ? this.googleDriveCurrentFolder.folder_id : folder_id;
      this._commonCrudService.addData(AdminAPI.GOOGLE_DRIVE_COPY_FILE, params).subscribe(Response => {
        this._sharedService.setClientData(GLOBALDATAKEYS.FILECOPYORMOVE, null);
        this.isPasteEnabled = false;
        this.onRefreshFolder();
      });
    } else {
      // Cut/Move & Paste file
      const params = {};
      params['file_id'] = this.clientFileCopyOrMove.join(',');
      params['folder_id'] = (type !== 1) ? this.googleDriveCurrentFolder.folder_id : folder_id;
      params['previous_folder_id'] = this.previous_folder_id;
      this._commonCrudService.addData(AdminAPI.GOOGLE_DRIVE_MOVE_FILE, params).subscribe(Response => {
        this._sharedService.setClientData(GLOBALDATAKEYS.FILECOPYORMOVE, null);
        this.isPasteEnabled = false;
        this.onRefreshFolder();
      });
    }
  }

  /**
   * Delete open confirmation modal
   */
  onDeleteFile(file: GoogleDriveFile) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to move ' + file.file_name + ' file into trash?'
      }
    });
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        const itemData = {};
        itemData['file_id'] = file.file_id;
        itemData['trash'] = 1;
        this._commonCrudService.listData(AdminAPI.GOOGLE_DRIVE_DELETE_FILE, itemData).subscribe((response) => {
          this.onRefreshFolder();
        });
      }
    });
  }

  /**
   * Restore open confirmation modal
   */
  onRestoreFile(file: GoogleDriveFile) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to restore ' + file.file_name + ' file?'
      }
    });
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        const itemData = {};
        itemData['file_id'] = file.file_id;
        itemData['trash'] = 0;
        this._commonCrudService.listData(AdminAPI.GOOGLE_DRIVE_DELETE_FILE, itemData).subscribe((response) => {
          this.onRefreshFolder();
        });
      }
    });
  }

  /**
   * On Refresh Folder
   */
  onRefreshFolder() {
    if (this.googleDriveCurrentFolder) {
      this.googleDriveList(this.googleDriveCurrentFolder.entity_id, this.googleDriveCurrentFolder.id, this.googleDriveCurrentFolder.subclient_id);
    } else {
      this.googleDriveList(this.clientData.id, 0, 0);
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
   * Download single client Document
   * @param document
   */
  downloadDocument() {
    if (this.selectedFileArray.length > 1) {
      const param = {'file_id': this.selectedFileArray.join(',')};
      this._commonCrudService.downloadDocument(AdminAPI.GOOGLE_DRIVE_DOWNLOAD_FILE, param).subscribe(response => {
        if (response && response.type) {
          const extension = response.type.split('/');
          FileSaver.saveAs(response, 'Download Zip - ' + moment(new Date()).format('DD-MM-YYYY'));
        }
      });
    } else {
      const param = {'file_id': this.selectedFileArray.join(',')};
      const fileData = this.selectedFileArray ? this.selectedFileArray[0] : '';
      const fileType = fileData ? this.googleDriveFileList.filter(elem => elem.file_id === fileData) : [];
      if (fileType.length) {
        this._commonCrudService.downloadDocument(AdminAPI.GOOGLE_DRIVE_DOWNLOAD_FILE, param).subscribe(response => {
          if (response && response.type) {
            const extension = response.type.split('/');
            FileSaver.saveAs(response, fileType[0].file_name);
          }
        });
      }
    }
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
   * Upload document browse file method
   */
  onChooseDocument() {
    document.getElementById('uploadDocument').click();
  }

  /**
   * on file changing
   * @param event
   */
  onUploadDocument(event) {
    if (event.target.files && event.target.files[0]) {
      const filesList = event.target.files;
      if (filesList.length) {
        let f = 0;
        Object.keys(event.target.files).forEach(itemUploadFile => {
          const name = event.target.files[f].name;
          const lastDot = name.lastIndexOf('.');
          const ext = name.substring(lastDot + 1);
          const fileType = this.fileTypeList.filter(item => item.extensionSearch ? item.extensionSearch.split(',').indexOf(ext.toLowerCase()) > -1 : []);
          // console.log(event.target.files[f].type);
          if ((fileType.length) || (isValidFileTypeForClientDocument(event.target.files[f].type)) || ((ext.toLowerCase() === "aba") || (ext.toLowerCase() === "zip") || (ext.toLowerCase() === "rar") || (ext.toLowerCase() === "qif") || (ext.toLowerCase() === "qbo") || (ext.toLowerCase() === "xlsm") || (ext.toLowerCase() === "myo"))) {
            if (event.target.files[f].size > AppConstant.TWINTY_FIVE_MP_FILE_ALLOWED) {
              this._sharedService.setToastMessage(this.validationMsg.VALID_TEINTY_FIVE_MB_IMAGE_SIZE, ToastType.ERROR);
            } else {
              this.uploadDoc.delete('folder_id');
              this.uploadDoc.delete('file_name');

              this.uploadDoc.append('folder_id', this.googleDriveCurrentFolder.folder_id);
              this.uploadDoc.append('file_name', event.target.files[f]);

              if (this.uploadDoc) {
                this._commonCrudService.uploadDocument(AdminAPI.GOOGLE_DRIVE_UPLOAD_FILE, this.uploadDoc).subscribe(response => {
                  this.onRefreshFolder();
                });
              }
            }
          } else {
            this._sharedService.setToastMessage(event.target.files[f].name + ' - ' + this.validationMsg.VALID_DOCUMENT_TYPE, ToastType.ERROR);
          }
          f++;
        });
      }
    }
  }

  /**
   * Create search filter
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      entity_id: new FormControl(this.clientData.id, Validators.required),
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
    this.googleDriveList(this.clientData.id, 0, 0);
  }

  @HostListener('window:keydown', ['$event'])
  onKeyPress($event: KeyboardEvent) {
    // console.log($event);
    // console.log($event.key);
    if (($event.ctrlKey || $event.metaKey) && $event.code === 'KeyX') {
      // console.log('CTRL + X');
      if (this.selectedFileArray.length) {
        this.onMultipleCopyOrCut(2);
      }
    }
    if (($event.ctrlKey || $event.metaKey) && $event.code === 'KeyC') {
      // console.log('CTRL + C');
      if (this.selectedFileArray.length) {
        this.onMultipleCopyOrCut(1);
      }
    }
    if (($event.ctrlKey || $event.metaKey) && $event.code === 'KeyV') {
      if (this.isPasteEnabled) {
        this.onPasteFile();
      }
    }
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
   * Used for Multiple Delete
   */
  onConfirmationDelete() {
    // console.log(this.selectedFileArray);
    // console.log(this.selectedFolderArray);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to Delete selected files or folder?'
      }
    });
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        // Multiple File Delete
        if (this.selectedFileArray.length > 0) {
          const itemData = {};
          itemData['file_id'] = this.selectedFileArray.join(",");
          itemData['trash'] = 1;
          this._commonCrudService.listData(AdminAPI.GOOGLE_DRIVE_DELETE_FILE, itemData).subscribe((response) => {
            this.onRefreshFolder();
          });
        }
        // Multiple Folder Delete
        if (this.selectedFolderArray.length > 0) {
          const itemData = {};
          itemData['folder_id'] = this.selectedFolderArray.join(",");
          this._commonCrudService.listData(AdminAPI.GOOGLE_DRIVE_DELETE_FOLDER, itemData).subscribe((response) => {
            this.onRefreshFolder();
          });
        }
      }
    });
  }

  /**
   * On Multiple File Copy or Paste
   * @param type
   */
  onMultipleCopyOrCut(type: number) {
    if (type === 1 && this.selectedFileArray.length) {
      this.itemPasteType = 1;
      this._sharedService.setClientData(GLOBALDATAKEYS.FILECOPYORMOVE, this.selectedFileArray);
      this._sharedService.setToastMessage('File marked as copy into clipboard, you can use paste it', ToastType.INFO);
      this.isPasteEnabled = true;
    } else if (type === 2 && this.selectedFileArray.length) {
      this.itemPasteType = 2;
      this.previous_folder_id = this.googleDriveCurrentFolder.folder_id;
      this._sharedService.setToastMessage('File marked as cut into clipboard, you can use paste it', ToastType.INFO);
      this._sharedService.setClientData(GLOBALDATAKEYS.FILECOPYORMOVE, this.selectedFileArray);
      this.isPasteEnabled = true;
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
   * Redirect on button click of client allocation
   */
  onClientAllocation() {
    this._commonCrudService.getData(AdminAPI.CLIENT_BASIC, this.clientData.id, {'tab': 1}).subscribe(response => {
      const clientData = response.payload.data;
      if (clientData) {
        this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT, clientData);
        const url = this._router.serializeUrl(
          this._router.createUrlTree(['/' + AdminRoutes.UPDATE_CLIENT])
        );
        window.open(url, '_blank');
      }
    });
  }

  /**
   * On Load Google Drive
   */
  loadGoogleDrive(): void {
    this.googleDrivePickerService.open((data) => {
      if (data.action === 'picked') {
        const token = this.googleDrivePickerService.getAuthToken();
        this.zone.run(() => {
          const params = {'oAuthToken': token, 'file_array': JSON.stringify(data.docs), 'folder_id': this.googleDriveCurrentFolder.folder_id};
          this._commonCrudService.addData(AdminAPI.GOOGLE_DRIVE_UPLOAD_FILE_DRIVE_PICKER, params).subscribe(response => {
            this.onRefreshFolder();
          });
        });
      }
    });
  }

  /**
   * On Copy or Move file Open Dialog for Paste
   */
  onCopyMoveDialog() {
    const dialogRef = this.dialog.open(CopyMoveDocumentsDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        clientData: this.clientData,
        folderList: this.finalArrayFolderList,
        itemPasteType: this.itemPasteType
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      if (result['result'] === true) {
        this.onPasteFile(1, result['id']);
      }
    });
  }

  /**
   * Complete or Not Complete open confirmation modal
   */
  onMarkAsCompleteFile(file: GoogleDriveFile, action: number) {
    const actionType = action === 1 ? 'Completed' : 'Not Completed';
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to mark ' + file.file_name + ' file as ' + actionType + '?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        const itemData = {};
        itemData['is_completed'] = action;
        itemData['file_id'] = file.file_id;
        this._commonCrudService.addData(AdminAPI.GOOGLE_DRIVE_MARK_AS_COMPLETED, itemData).subscribe((response) => {
          this.googleDriveFileList.map(item => {
            if (item.id === file.id) {
              item.is_completed = action;
            }
          });
        });
      }
    });
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  /**
   * On Create Backlog Folder
   */
  onCreateBacklogFolder() {
    const dialogRef = this.dialog.open(CreateBacklogDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        clientData: this.clientData,
        googleDriveFolder: this.googleDriveCurrentFolder,
        breadCrumFolder: this.breadCrumsList
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onRefreshFolder();
      }
    });
  }

  /**
   * Dcument Send as an Email to different type of software
   * @param type
   */
  sendDocumentAsEmail(type: number) {
    if (type === 1) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          content: 'Are you sure you want to send selected file to xero email id : "' + this.clientData.xero_email_id + '"?'
        }
      });

      dialogRef.afterClosed().subscribe((value) => {
        if (value) {
          const itemData = {};
          itemData['file_id'] = this.selectedFileArray.join(',');
          itemData['xero_email_id'] = this.clientData.xero_email_id;
          this._commonCrudService.addData(AdminAPI.GOOGLE_DRIVE_FILE_MOVE_TO_XERO, itemData).subscribe((response) => {
            this.onRefreshFolder();
          });
        }
      });
    }

    if (type === 2) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          content: 'Are you sure you want to send selected file to myob email id : "' + this.clientData.myob_email_id + '"?'
        }
      });

      dialogRef.afterClosed().subscribe((value) => {
        if (value) {
          const itemData = {};
          itemData['file_id'] = this.selectedFileArray.join(',');
          itemData['myob_email_id'] = this.clientData.myob_email_id;
          this._commonCrudService.addData(AdminAPI.GOOGLE_DRIVE_FILE_MOVE_TO_XERO, itemData).subscribe((response) => {
            this.onRefreshFolder();
          });
        }
      });
    }
  }

  /**
   * On Upload Document Drag & Drop
   */
  onUploadDocumentsDragnDrop() {
    const dialogRef = this.dialog.open(UploadDocumentsDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        folder: (this.googleDriveCurrentFolder) ? this.googleDriveCurrentFolder.folder_id : null
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.onRefreshFolder();
    });
  }

  onOpenQuickMenu(menuName) {
    switch (menuName) {
      case 'profile':
        this.activeView = this.enumView.QUICK_MENU_LIST;
        break;
    }
  }

  onClickHowToProcess() {
    window.open('https://docs.google.com/spreadsheets/d/1ruZHLfuwPHE41u67KiMaV65TvOoODHQkwib0KWVcMp4/edit?ts=5f8fa047#gid=1168836640', '_blank');
  }

  hideMenu() {
    this.activeView = null;
  }
}

export interface Item {
  id: number;
  name: string;
}
