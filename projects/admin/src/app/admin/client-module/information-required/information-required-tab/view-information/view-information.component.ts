import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material";
import {AdminRoutes} from "../../../../../../utility/constants/admin-route";
import {SharedUserService} from "../../../../../../utility/shared-service/shared-user.service";
import {SendToClientDialogComponent} from "../update-information/send-to-client-dialog/send-to-client-dialog.component";
import * as FileSaver from "file-saver";
import {AdditionalInformationRequired, InformationDocument, InformationRequired} from "../information-tab/information-required.model";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import {ValidationConstantMessage} from "../../../../../../utility/validation";
import {SharedService} from "../../../../../../utility/shared-service/shared.service";
import {ConfirmationDialogComponent} from "../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {AppConstant, GLOBALDATAKEYS, information_answer_type, information_status, SnoozeOrReminderDays, ToastType} from "../../../../../../utility/constants/base-constants";
import {SendBackToStaffDialogComponent} from "../update-information/send-back-to-staff-dialog/send-back-to-staff-dialog.component";
import {Router} from "@angular/router";
import {ADMINTABACCESS} from "../../../../../../utility/constants/header-constant";
import {Privilege} from "../../../../../../utility/shared-model/admin-user.model";
import {BaseComponent} from "../../../../../../utility/components/base/base.component";
import {GoogleDriveMetaDataList} from "../../../client-documents/google-drive.model";

@Component({
  selector: 'app-view-information',
  templateUrl: './view-information.component.html',
  styleUrls: ['./view-information.component.scss']
})
export class ViewInformationComponent extends  BaseComponent implements OnInit {
  @ViewChild('addAdditionaInfoForm') addAdditionaInfoForm;

  validationMsg = new ValidationConstantMessage();
  // Data Variables
  updateInformation: any[] = [];
  informationData: InformationRequired;
  editInformationForm: FormGroup;
  informationStatus = information_status;
  informationAnswerType = information_answer_type;
  moveTo = null;
  uploadDoc = new FormData();
  docArray = [];
  editAdditionalInformationForm: FormGroup;
  additionalInformationListing: AdditionalInformationRequired[] = [];
  snoozeOrReminderDays = SnoozeOrReminderDays;
  // State variables
  trIndex = -1;
  trIndexInner = -1;
  tabID = ADMINTABACCESS.INFORMATION_REQUIRED;
  tabData: Privilege | any[];
  isSendToClient = false;
  googleMetaData: GoogleDriveMetaDataList[] = [];

  constructor(public _router: Router, public dialog: MatDialog, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedService: SharedService, private _sharedUserService: SharedUserService) {
    super();
    this.informationData = this._sharedService.getClientData(GLOBALDATAKEYS.INFORMATION_REQUIRED);
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.isSendToClient = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'sent_to_client', 1);
    this.createEditInformationForm();
    this.createAdditionalInfoForm();
    this.getBasicInformation();
    this.getAdditionalInformationListing();
  }

  /**
   * Get Basic Information
   */
  getBasicInformation() {
    if (this.informationData && this.informationData.id > 0) {
      this._commonCrudService.getData(AdminAPI.INFORMATION_REQUIRED_VIEW, this.informationData.id).subscribe((response) => {
        // this.informationData = response.payload.data;
        const informationData = (response.payload.data['detail']) ? response.payload.data['detail'] : [];
        const informationAdditionalData = (response.payload.data['adddetail']) ? response.payload.data['adddetail'] : [];
        if (informationData.length) {
          let i = 0;
          informationData.forEach(item => {
            this.getInformationArray().push(this.createInfoDetailItem(item));
            if (item['document'] && item['document'].length) {
              item['document'].forEach(doc => {
                this.getDocumentArray(i).push(this.createDocumentItem(doc));
              });
            }
            i++;
          });
        }
      });
    }
  }

  /**
   * Create Edit Information Form
   */
  createEditInformationForm() {
    this.editInformationForm = this._fb.group({
      subject: new FormControl(this.informationData.subject ? this.informationData.subject : null, Validators.required),
      reminder: new FormControl(this.informationData.reminder),
      infoDetail: this._fb.array([]),
      additional_info: this._fb.array([]),
      stage_id: new FormControl(null),
      is_draft: new FormControl(null)
    });
  }

  /**
   * Create Info Detail Item
   */
  createInfoDetailItem(item ?: any) {
    return this._fb.group({
      id: new FormControl(item ? item.id : ''),
      info_detail_id: new FormControl(item ? item.information_id : ''),
      bank_other: new FormControl(item ? item.bank_other : ''),
      start_period: new FormControl(item ? item.start_period : '', <any>Validators.required),
      end_period: new FormControl(item ? item.end_period : '', <any>Validators.required),
      type_account: new FormControl(item ? item.type_account : ''),
      account_no: new FormControl(item ? item.account_no : ''),
      befree_comment: new FormControl(item ? item.befree_comment : ''),
      status_id: new FormControl(item ? item.status_id : ''),
      answer_type: new FormControl(item ? item.answer_type : ''),
      client_comment: new FormControl(item ? item.client_comment : ''),
      documents: this._fb.array([])
    });
  }

  /**
   * Create Document Item
   */
  createDocumentItem(item ?: any) {
    return this._fb.group({
      id: new FormControl(item ? item.id : null),
      information_detail_id: new FormControl(item ? item.information_detail_id : null),
      document_name: new FormControl(item ? item.document_name : null),
      document_path: new FormControl(item ? item.document_path : null),
      document_title: new FormControl(item ? item.document_title : null),
      is_drive: new FormControl(item ? item.is_drive : null),
      is_client: new FormControl(item ? item.is_client : null),
      file_id: new FormControl(item ? item.file_id : null),
      mime_type: new FormControl(item ? item.mime_type : null),
    });
  }

  /**
   * Create Info Additional Info Detail Item
   */
  createAdditionalInfoForm(item ?: any) {
    this.editAdditionalInformationForm = this._fb.group({
      comment: new FormControl(item ? item.comment : '', Validators.required),
    });
  }

  /**
   * Get Information Array
   */
  getInformationArray(): FormArray {
    return <FormArray>this.editInformationForm.get('infoDetail');
  }

  /**
   * Get Document Array
   */
  getDocumentArray(index): FormArray {
    return <FormArray>this.getInformationArray().controls[index].get('documents');
  }

  // Events
  openRow(i) {
    this.trIndex = (this.trIndex !== i) ? i : -1;
  }
  openRowAdditionalComments(i) {
    this.trIndexInner = (this.trIndexInner !== i) ? i : -1;
  }
  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  onGoInformationRequired() {
    this._router.navigate(['/' + AdminRoutes.INFORMATION_REQUIRED]);
  }

  /**
   * On Send to client
   * @param information
   */
  onSendtoClient(information: InformationRequired) {
    const dialogRef = this.dialog.open(SendToClientDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        informationRequired: information,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  /**
   * On Send to Staff or TL
   * @param information
   * @param type
   */
  onSendtoStaff(information: InformationRequired, typeInfo: string, stageId: number) {
    const dialogRef = this.dialog.open(SendBackToStaffDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        informationRequired: information,
        type: typeInfo,
        status_id: stageId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  /**
   * On Button Click need to update status & is_draft
   * @param stageId
   * @param isDraft
   */
  updateStatusIdWithDraft(stageId: number, isDraft: number, moveTo: string) {
    this.editInformationForm.get('is_draft').setValue(isDraft);
    this.editInformationForm.get('stage_id').setValue(stageId);
    this.moveTo = moveTo;
  }

  /**
   * On Submit Edit Information
   * @param form
   */
  onSubmit(form: FormGroup) {
    const infoDetail = form.value['infoDetail'];
    form.value['infoDetail'] = JSON.stringify(form.value['infoDetail']);
    if (this.moveTo !== 'Client') {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          content: 'Are you sure you want to send it to ' + this.moveTo + '?'
        }
      });
      dialogRef.afterClosed().subscribe((value) => {
        if (value) {
          if (form.valid) {
            this._commonCrudService.updateDataWithPut(AdminAPI.INFORMATION_REQUIRED_UPDATE, this.informationData.id, form.value).subscribe(response => {
              this.onGoInformationRequired();
            });
          }
        }
      });
    } else if (this.moveTo === 'Client') {
      if (form.valid) {
        this._commonCrudService.updateDataWithPut(AdminAPI.INFORMATION_REQUIRED_UPDATE, this.informationData.id, form.value).subscribe(response => {
          this.onSendtoClient(this.informationData);
        });
      }
    } else {
      if (form.valid) {
        this._commonCrudService.updateDataWithPut(AdminAPI.INFORMATION_REQUIRED_UPDATE, this.informationData.id, form.value).subscribe(response => {
          this.onGoInformationRequired();
        });
      }
    }
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
  onUploadDocument(event, informationDetailId, docType, isAdditional, index) {
    if (event.target.files && event.target.files[0]) {
      const filesList = event.target.files;
      if (filesList.length) {
        let f = 0;
        Object.keys(event.target.files).forEach(itemUploadFile => {
          const name = event.target.files[f].name;
          const lastDot = name.lastIndexOf('.');
          const ext = name.substring(lastDot + 1);
          // if (isValidFileType(event.target.files[f].type) || isValidFileTypeExt(ext.toLowerCase())) {
            if (event.target.files[f].size > AppConstant.TWINTY_FIVE_MP_FILE_ALLOWED && isAdditional === 1) {
              this._sharedService.setToastMessage(this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, ToastType.ERROR);
            } else {
              this.uploadDoc.delete('information_detail_id');
              this.uploadDoc.delete('document_type');
              this.uploadDoc.delete('document_file');
              this.uploadDoc.delete('is_additional_info');
              // document_type = 1 for Befree
              // is_additional_info = 1 this document is not additional info
              this.uploadDoc.append('information_detail_id', informationDetailId);
              this.uploadDoc.append('document_type', docType);
              this.uploadDoc.append('document_file', event.target.files[f]);
              this.uploadDoc.append('is_additional_info', isAdditional);
              if (this.uploadDoc) {
                this._commonCrudService.uploadDocument(AdminAPI.INFORMATION_REQUIRED_UPLOAD_DOCUMENT + '/' + this.informationData.id, this.uploadDoc).subscribe(response => {
                  this.getDocumentListRefresh(informationDetailId, index);
                });
              }
            }
          // } else {
          //   this._sharedService.setToastMessage(event.target.files[f].name + ' - ' + this.validationMsg.VALID_IMAGE_TYPE, ToastType.ERROR);
          // }
          f++;
        });
      }
    }
    event.target.value = '';
  }

  /**
   * on file changing
   * @param event
   */
  onUploadAdditionalDocument(event, docType) {
    if (event.target.files && event.target.files[0]) {
      const filesList = event.target.files;
      if (filesList.length) {
        let f = 0;
        Object.keys(event.target.files).forEach(itemUploadFile => {
          const name = event.target.files[f].name;
          const lastDot = name.lastIndexOf('.');
          const ext = name.substring(lastDot + 1);
          // if (isValidFileType(event.target.files[f].type) || isValidFileTypeExt(ext.toLowerCase())) {
            if (event.target.files[f].size > AppConstant.TWINTY_FIVE_MP_FILE_ALLOWED) {
              this._sharedService.setToastMessage(this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, ToastType.ERROR);
            } else {
              const file = event.target.files[f];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              if ((filesList.length - 1) === f) {
                this.docArray.push({
                  'reqKey': 'document_file[]',
                  'file': event.target.files,
                });
              }
            }
          // } else {
          //   this._sharedService.setToastMessage(event.target.files[f].name + ' - ' + this.validationMsg.VALID_IMAGE_TYPE, ToastType.ERROR);
          // }
          f++;
        });
      }
    }
    event.target.value = '';
  }

  /**
   * Download Document
   * @param informationDocument
   */
  downloadDocument(informationDocument: any, is_additional_info?: number) {
    if (is_additional_info === 1) {
      const id = informationDocument['id'];
      this._commonCrudService.downloadDocument(AdminAPI.INFORMATION_REQUIRED_DOCUMENT_DOWNLOAD_ADDITIONAL + '/' + id, {}).subscribe(response => {
        if (response && response.type) {
          const extension = response.type.split('/');
          FileSaver.saveAs(response, informationDocument['document_name']);
        }
      });
    } else {
      if (informationDocument && informationDocument.get('id').value) {
        // const params = {'is_additional_info': isAdditional};
        this._commonCrudService.downloadDocument(AdminAPI.INFORMATION_REQUIRED_DOCUMENT_DOWNLOAD + '/' + informationDocument.get('id').value, {}).subscribe(response => {
          if (response && response.type) {
            const extension = response.type.split('/');
            FileSaver.saveAs(response, informationDocument.get('document_name').value);
          }
        });
      }
    }
  }

  /**
   * Remove Document
   * @param informationDocument
   */
  deleteDocument(informationDocument: InformationDocument, information: InformationRequired, isAdditional: number, index: number) {
    if (informationDocument) {
      //console.log(informationDocument);
      const params = {'is_additional_info': isAdditional};
      this._commonCrudService.deleteData(AdminAPI.INFORMATION_REQUIRED_DOCUMENT_DELETE, informationDocument.id).subscribe(response => {
        if (isAdditional === 1) {
          this.getDocumentListRefresh(information.id, index);
        }
      });
    }
  }

  /**
   * On Submit Additional Info
   * @param form
   */
  onSubmitAdditionalInfo(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.addData(AdminAPI.INFORMATION_REQUIRED_ADDITIONAL_ADD + '/' + this.informationData.id, form.value, this.docArray).subscribe(response => {
        this.getAdditionalInformationListing();
        this.addAdditionaInfoForm.resetForm();
        this.createAdditionalInfoForm();
      });
    }
  }

  /**
   * Get Additional Information Listing
   */
  getAdditionalInformationListing() {
    this._commonCrudService.getData(AdminAPI.INFORMATION_REQUIRED_ADDITIONAL, this.informationData.id).subscribe((response) => {
      this.additionalInformationListing = response.payload.data;
    });
  }

  /**
   * Remove Additional Information
   * @param additionalInfo
   */
  removeAdditionalInfo(additionalInfo: AdditionalInformationRequired) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this additional information ?'
      }
    });
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.deleteData(AdminAPI.INFORMATION_REQUIRED_ADDITIONAL_DELETE, additionalInfo.id).subscribe(response => {
          this.getAdditionalInformationListing();
        });
      }
    });
  }

  /**
   * Get Document List Refresh
   * @param informationDetailId
   * @param index
   */
  getDocumentListRefresh(informationDetailId: number, index: number) {
    this._commonCrudService.getData(AdminAPI.INFORMATION_REQUIRED_VIEW, this.informationData.id).subscribe((responseData) => {
      let informationData = (responseData.payload.data['detail']) ? responseData.payload.data['detail'] : [];
      informationData = informationData.filter(item => item['id'] === informationDetailId);
      if (informationData.length) {
        if (informationData[0]['documents'].length) {
          this.getDocumentArray(index).controls = [];
          informationData[0]['documents'].forEach(doc => {
            this.getDocumentArray(index).push(this.createDocumentItem(doc));
          });
        }
      }
    });
  }

  /**
   * Get Status Name
   * @param status_id
   */
  getStatusName(status_id: number): string {
    const val = this.informationStatus.filter(elem => elem.key === Number(status_id));
    return (val.length) ? val[0].label : '';
  }

  /**
   * Get Answer Name
   * @param status_id
   */
  getAnswerName(ans_type: number): string {
    const val = this.informationAnswerType.filter(elem => elem.key === Number(ans_type));
    return (val.length) ? val[0].label : '';
  }

  /**
   * On Open Document File
   * @param item
   */
  onOpenDocumentFile(item: any) {
    const params = {'file_id': item.file_id};
    this._commonCrudService.listData(AdminAPI.GOOGLE_DRIVE_SHARE_FILE, params).subscribe((response) => {
      const url = this.googleMetaData.filter(itemData => itemData.mimeType === item.mime_type);
      if (url.length) {
        if (item.csv_excel_file_id && item.csv_excel_file_id !== null && item.csv_excel_file_id !== '') {
          window.open(url[0].edit + item.csv_excel_file_id, '_blank');
        } else {
          window.open(url[0].edit + item.file_id, '_blank');
        }
      }
    });
  }
}
