import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ConfirmationDialogComponent} from '../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../utility/validation';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {EmailPreview, WorksheetDocument, WorksheetFromList, WorksheetListing, WorksheetStatus} from '../../worksheet-dashboard-tab/worksheet.model';
import {AppConstant, category, EXPORTFILETYPE, ToastType} from '../../../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {isValidFileType, isValidFileTypeExt} from '../../../../../../utility/common-functions';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import '@tinymce/tinymce-angular';
import {ChecklistEmailPreviewDialogComponent} from '../checklist-email-preview-dialog/checklist-email-preview-dialog.component';
import * as FileSaver from 'file-saver';
import {UploadDocumentsDialogComponent} from "../edit-task-checklist/upload-documents-dialog/upload-documents-dialog.component";
import {GoogleDriveMetaDataList} from "../../../../client-module/client-documents/google-drive.model";

declare var tinymce: any;

@Component({
  selector: 'app-checklist-email-preview',
  templateUrl: './checklist-email-preview.component.html',
  styleUrls: ['./checklist-email-preview.component.scss']
})
export class ChecklistEmailPreviewComponent extends BaseComponent implements OnInit {

  validationMsg = new ValidationConstantMessage();
  worksheetData: WorksheetListing;
  categoryData = category;
  fileTypeData = EXPORTFILETYPE;
  headerData: any;
  ticketData: any;
  emailPreviewData: EmailPreview;
  worksheetClientDocument: WorksheetDocument[] = [];
  worksheetInternalDocument: WorksheetDocument[] = [];
  worksheetStatusList: WorksheetStatus[] = [];
  fromList: WorksheetFromList[] = [];
  avtarFiles = [];
  uploadDoc = new FormData();
  emailForm: FormGroup;
  isPendigForTAM = 0;
  googleMetaData: GoogleDriveMetaDataList[] = [];

  constructor(public dialog: MatDialog, private _router: Router,
              private _fb: FormBuilder,
              public _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _location: Location,
              private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.worksheetData = this._sharedService.getChecklistData();
    if (this.worksheetData.neglience_count === 1 && this.worksheetData.knockback_count === 1 && this.worksheetData.status_id.id === 9) {
      this.isPendigForTAM = 1;
    }
    this.getFileTypeList();
    this.getCheckListPreviewData();
    this.getHeaderData();
    this.getDocumentList();
    this.createForm();
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
    });
  }

  /**
   * On Preview Email
   */
  onPreviewDialog() {
    const from = this.emailForm.get('from').value;
    const contentData = tinymce.activeEditor.getContent();
    // const headerData = BASE.EMAIL_HEADER;
    // const footerData = BASE.EMAIL_FOOTER;
    let dialogRef = this.dialog.open(ChecklistEmailPreviewDialogComponent, {
      panelClass: 'lg-dialog--container',
      data: {
        emailContentData: contentData,
        fromEmail: from
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  createForm() {
    // console.log(this.emailPreviewData);
    this.emailForm = this._fb.group({
      from: new FormControl(null, <any> Validators.required),
      fromname: new FormControl(null),
      to: new FormControl((this.emailPreviewData) ? this.emailPreviewData.to : null, [<any> Validators.required, <any>Validators.pattern(CommonRegex.MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
      cc: new FormControl((this.emailPreviewData) ? this.emailPreviewData.cc : null, <any>Validators.pattern(CommonRegex.MULTIPLE_EMAIL_ADDRESS_REGEXP)),
      bcc: new FormControl((this.emailPreviewData) ? this.emailPreviewData.bcc : null, <any>Validators.pattern(CommonRegex.MULTIPLE_EMAIL_ADDRESS_REGEXP)),
      subject: new FormControl((this.emailPreviewData) ? this.emailPreviewData.subject : null, [<any> Validators.required, <any>Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
      content: new FormControl((this.emailPreviewData) ? this.emailPreviewData.content : null, <any> Validators.required),
      status_id: new FormControl((this.worksheetData) ? this.worksheetData.status_id.id : null, <any> Validators.required),
      outcome: new FormControl(null, <any> Validators.required),
      tam_comment: new FormControl(null, (this.worksheetData.status_id.id === 18) ? <any> Validators.required : null),
    });
  }

  /**
   * Get Checklist Email Preview Data
   */
  getCheckListPreviewData() {
    // '420484'; // // 296239;
    this._commonCrudService.getData(AdminAPI.CHECKLIST_EMAIL_PREVIEW, this.worksheetData.id, {'type': 'P'}).subscribe(response => {
      this.emailPreviewData = response.payload.emailDetail;
      if (this.emailPreviewData) {
        this.fromList = this.emailPreviewData.from;
      }
      this.createForm();
    });

    // Get Worksheet Status
    this._sharedObjService.getWorksheetStatusRightsWise({'records': 'all'}, {}).subscribe((response) => {
      this.worksheetStatusList = response;
    });
  }

  /**
   * Get Fixed Header Data
   */
  getHeaderData() {
    this._commonCrudService.listData(AdminAPI.GET_WORKSHEET_HEADER_DATA + '/' + this.worksheetData.id, {'taskchecklistview': 1}, {}).subscribe(response => {
      this.headerData = response.payload.data;
      this.ticketData = response.payload.ticket;
    });
  }

  /**
   * Get Document List
   * @param pageNumber
   * @param key
   * @param val
   */
  getDocumentList() {
    // 236210
    this._commonCrudService.listData(AdminAPI.WORKSHEET_DOCUMENT_LIST_DATA + '/' + this.worksheetData.id, {
      'records': 'all',
      'sortBy': 'id',
      'sortOrder': 'desc'
    }, {'compare': {'equal': {'is_deleted': 0}}}).subscribe(response => {
      this.worksheetClientDocument = (response.payload.data.client_doc) ? response.payload.data.client_doc : [];
      this.worksheetInternalDocument = (response.payload.data.internal_doc) ? response.payload.data.internal_doc : [];
    });
  }

  /**
   * Display Get Status List
   * @param {number} cat_id
   * @returns {string}
   */
  getCategoryName(cat_id: number): string {
    const val = this.categoryData.filter(elem => elem.key === Number(cat_id));
    return (val.length) ? val[0].label : '';
  }

  /**
   * On file selection
   * @param id
   */
  onFileSelect(id) {
    document.getElementById(id).click();
  }


  /**
   * on file changing
   * @param event
   */
  onUploadDocument(event, id) {
    const workSheetData = this._sharedService.getChecklistData().id;
    if (event.target.files && event.target.files[0]) {
      this.avtarFiles = [];
      const filesList = event.target.files;
      if (filesList.length) {
        let f = 0;
        Object.keys(event.target.files).forEach(itemUploadFile => {
          const name = event.target.files[f].name;
          const lastDot = name.lastIndexOf('.');
          const ext = name.substring(lastDot + 1);
          if (isValidFileType(event.target.files[f].type) || isValidFileTypeExt(ext.toLowerCase())) {
            if (event.target.files[f].size > AppConstant.TWINTY_FIVE_MP_FILE_ALLOWED && id === 1) {
              this._sharedService.setToastMessage(this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, ToastType.ERROR);
            } else {
              this.uploadDoc.delete('worksheet_id');
              this.uploadDoc.delete('document_type');
              this.uploadDoc.delete('document_file');

              this.uploadDoc.append('worksheet_id', workSheetData);
              this.uploadDoc.append('document_type', id);
              this.uploadDoc.append('document_file', event.target.files[f]);
              if (id === 1) {
                this.uploadDoc.append('is_sent', '1');
              } else {
                this.uploadDoc.append('is_sent', '0');
              }
              // const file = event.target.files[0];
              // console.log(event.target.files[0]);
              if (this.uploadDoc) {
                this._commonCrudService.uploadDocument(AdminAPI.WORKSHEET_DOCUMENT_UPLOAD, this.uploadDoc).subscribe(response => {
                  this.getDocumentList();
                });
              }
            }
          } else {
            this._sharedService.setToastMessage(event.target.files[f].name + ' - ' + this.validationMsg.VALID_IMAGE_TYPE, ToastType.ERROR);
          }
          f++;
        });
      }
    }
  }

  onUpdateDocument(document_id: number, value: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to update document ?'
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (value) {
          value = 1;
        } else {
          value = 0;
        }
        const param = {'is_sent': value, '_method': 'put'};
        this._commonCrudService.updateData(AdminAPI.WORKSHEET_DOCUMENT_UPDATE, document_id, param).subscribe(response => {
          this.getDocumentList();
        });
      } else {
        this.getDocumentList();
      }
    });
  }

  /**
   * worksheet dashboard redirection
   */
  onWorksheet() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  /**
   * Get From Name From Email
   * @param name
   */
  getFromNameFromEmail(value: any) {
    if (value) {
      const CheckName = this.fromList.filter(item => item['email'] === value);
      if (CheckName.length) {
        this.emailForm.get('fromname').setValue(CheckName[0]['name']);
      } else {
        this.emailForm.get('fromname').setValue(null);
      }
    }

    this._commonCrudService.getData(AdminAPI.CHECKLIST_EMAIL_PREVIEW, this.worksheetData.id, {'type': 'P', 'from': value}).subscribe(response => {
      this.emailPreviewData = response.payload.emailDetail;
      this.emailForm.get('bcc').setValue(this.emailPreviewData.bcc);
      this.emailForm.get('content').setValue(this.emailPreviewData.content);
    });
  }

  /**
   * Delete open confirmation modal
   */
  onConfirmationDialog(response) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete ?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.getData(AdminAPI.WORKSHEET_DOCUMENT_DELETE, response.id).subscribe(Response => {
          if (Response) {
            this.getDocumentList();
          }
        });
      }
    });
  }

  /**
   *
   * @param worksheetDocument
   */
  downloadDocument(worksheetDocument: WorksheetDocument) {
    if (worksheetDocument) {
      this._commonCrudService.downloadDocument(AdminAPI.WORKSHEET_DOCUMENT_DOWNLOAD + '/' + worksheetDocument.id).subscribe(response => {
        if (response && response.type) {
          const extension = response.type.split('/');
          FileSaver.saveAs(response, worksheetDocument.document_title);
        }
      });
    }
  }

  /**
   * Submit Email Form
   * @param form
   */
  submitEmailForm(form: FormGroup) {
    // console.log(form);
    if (form.valid) {
      form.value['old_status_id'] = this.worksheetData.status_id.id;
      form.value['type'] = 'P';
      form.value['is_draft'] = 0;
      form.value['is_checklist_submit'] = 1;
      form.value['status_id'] = (this.isPendigForTAM === 0) ? 2 : 18;
      this._commonCrudService.addData(AdminAPI.WORKSHEET_EMAIL_PREVIEW_STORE + '/' + this.worksheetData.id, form.value).subscribe(Response => {
        if (Response) {
          this.onWorksheet();
        }
      });
    }
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * On Change Outcome Value Set form value null or true
   * @param value
   */
  onChangeOutcomeValue(value: any) {
    if (value) {
      this.emailForm.get('outcome').setValue(true);
    } else {
      this.emailForm.get('outcome').setValue(null);
    }
  }

  goBackToPage() {
    this._location.back();
  }

  /**
   * On Add Document Open Dialog
   * @param type
   */
  onAddDocumentsDialog(type: number) {
    const dialogRef = this.dialog.open(UploadDocumentsDialogComponent, {
      panelClass: 'xl-large-dialog-container',
      data: {
        clientData: this.worksheetData,
        uploadType: type
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getDocumentList();
      }
    });
  }

  /**
   * On Open Document File
   * @param item
   */
  onOpenDocumentFile(item: any) {
    const params = {'file_id': item.file_id};
    this._commonCrudService.listData(AdminAPI.GOOGLE_DRIVE_SHARE_FILE, params).subscribe((response) => {
      console.log(response);
      const url = this.googleMetaData.filter(itemData => itemData.mimeType === item.mime_type);
      if (url.length) {
        if (item.csv_excel_file_id !== null && item.csv_excel_file_id !== '') {
          window.open(url[0].edit + item.csv_excel_file_id, '_blank');
        } else {
          window.open(url[0].edit + item.file_id, '_blank');
        }
      }
    });
  }
}
