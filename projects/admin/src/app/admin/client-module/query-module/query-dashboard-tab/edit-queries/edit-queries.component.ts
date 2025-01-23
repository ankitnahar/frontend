import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material";
import {Router} from "@angular/router";
import {AdminRoutes} from "../../../../../../utility/constants/admin-route";
import {ConfirmationDialogComponent} from "../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component";
import {ValidationConstantMessage} from "../../../../../../utility/validation";
import {AppConstant, GLOBALDATAKEYS, information_answer_type, information_status, SnoozeOrReminderDays, ToastType, yesNoQuestionMarks} from "../../../../../../utility/constants/base-constants";
import {ADMINTABACCESS} from "../../../../../../utility/constants/header-constant";
import {Privilege} from "../../../../../../utility/shared-model/admin-user.model";
import {GoogleDriveMetaDataList} from "../../../client-documents/google-drive.model";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import {SharedService} from "../../../../../../utility/shared-service/shared.service";
import {SharedUserService} from "../../../../../../utility/shared-service/shared-user.service";
import {BaseComponent} from "../../../../../../utility/components/base/base.component";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {CommonFunctions} from "../../../../../../utility/common-functions";
import * as FileSaver from "file-saver";
import {AdditionalQueryRequired, QueryDataList, QueryQuestion} from "../query.model";
import {UploadQueryDocumentsDialogComponent} from "../upload-query-documents-dialog/upload-query-documents-dialog.component";
import * as moment from "moment";
import {QuerySendBackToStaffDialogComponent} from "./query-send-back-to-staff-dialog/query-send-back-to-staff-dialog.component";
import {QuerySendToClientDialogComponent} from "./query-send-to-client-dialog/query-send-to-client-dialog.component";

@Component({
  selector: 'app-edit-queries',
  templateUrl: './edit-queries.component.html',
  styleUrls: ['./edit-queries.component.scss']
})
export class EditQueriesComponent extends BaseComponent implements OnInit {
  @ViewChild('addAdditionaQueryForm') addAdditionaQueryForm;

  validationMsg = new ValidationConstantMessage();
  // Data Variables
  updateInformation: any[] = [];
  queryData: QueryDataList;
  editQueryForm: FormGroup;
  informationStatus = information_status;
  moveTo = null;
  uploadDoc = new FormData();
  uploadDocName = [];
  uploadAdditionalDocName = '';
  docArray = [];
  editAdditionalQueryForm: FormGroup;
  additionalQueryListing: AdditionalQueryRequired[] = [];
  snoozeOrReminderDays = SnoozeOrReminderDays;
  yesNoQuestionMarksList = yesNoQuestionMarks;
  // State variables
  trIndex = -1;
  trIndexInner = -1;
  tabID = ADMINTABACCESS.QUERY_MODULE;
  tabData: Privilege | any[];
  isSendToClient = false;
  googleMetaData: GoogleDriveMetaDataList[] = [];
  queryQuestionList: QueryQuestion[] = [];
  informationAnswerType = information_answer_type;

  constructor(public _router: Router, public dialog: MatDialog, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedService: SharedService, private _sharedUserService: SharedUserService) {
    super();
    this.queryData = this._sharedService.getClientData(GLOBALDATAKEYS.QUERY_MODULE);
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.isSendToClient = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'sent_to_client', 1);
    //console.log(this.isSendToClient);
    this.getQueryQuestions();
    this.createEditQueryForm();
    this.createAdditionalQueryForm();
    this.getBasicQueryData();
    this.getAdditionalQueryListing();
    this.getFileTypeList();
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


  getQueryQuestions() {
    this._commonCrudService.listData(AdminAPI.QUERY_QUESTION_LIST, {'records': 'all'}, {})
      .subscribe((response) => {
        this.queryQuestionList = response.payload.data;
      });
  }

  /**
   * Get Basic Query Data
   */
  getBasicQueryData() {
    if (this.queryData && this.queryData.id > 0) {
      this._commonCrudService.getData(AdminAPI.QUERY_VIEW, this.queryData.id).subscribe((response) => {
        // this.queryData = response.payload.data;
        const informationDataList = (response.payload.data) ? response.payload.data : [];
        const informationData = informationDataList;
        delete informationData['basic'];
        delete informationData['adddetail'];
        if (!CommonFunctions.isEmpty(informationData)) {
          let i = 0;
          Object.keys(informationData).forEach(keyVal => {
            let j = 0;
            if (informationData[keyVal] && informationData[keyVal]['detail'].length) {
              this.getQueryBankArray().push(this.createBankDetailItem(informationData[keyVal]));
              let k = 0, merge_start = 0, merge_end = 0;
              informationData[keyVal]['detail'].forEach(item => {
                if (item['merge_start'] > 0 && item['merge_end'] > 0) {
                  merge_start = item['merge_start'];
                  merge_end = item['merge_end'];
                }
                if (k + 1 > merge_start && k + 1 <= merge_end && (merge_start > 0 && merge_end > 0)) {
                  item.is_skip = 1;
                } else {
                  item.is_skip = 0;
                }
                this.getQueryArray(i).push(this.createQueryDetailItem(item));
                if (item['documents'] && item['documents'].length) {
                  item['documents'].forEach(doc => {
                    this.getDocumentArray(i, j).push(this.createDocumentItem(doc));
                  });
                }
                k++;
                j++;
              });
            }
            if (informationData[keyVal] && informationData[keyVal]['detail'].length) {
              i++;
            }
          });
        }
        // console.log(this.editQueryForm);
      });
    }
  }

  /**
   * Create Edit Information Form
   */
  createEditQueryForm() {
    this.editQueryForm = this._fb.group({
      subject: new FormControl(this.queryData.subject ? this.queryData.subject : null, Validators.required),
      reminder: new FormControl(this.queryData && this.queryData.reminder != null ? this.queryData.reminder : 1, Validators.required),
      bank_details: this._fb.array([]),
      // additional_info: this._fb.array([]),
      stage_id: new FormControl(null),
      is_draft: new FormControl(null),
      final_submit: new FormControl(1)
    });
  }

  /**
   * Create Bank Detail Item
   * @param item
   */
  createBankDetailItem(item ?: any) {
    return this._fb.group({
      id: new FormControl(item ? item.id : ''),
      bank_name: new FormControl(item ? item.bank_name : ''),
      account_no: new FormControl(item ? item.account_no : ''),
      rows: new FormControl((item && item.rows > 0) ? item.rows : 0),
      infoDetail: this._fb.array([]),
    });
  }

  /**
   * Create Query Detail Item
   */
  createQueryDetailItem(item ?: any) {
    let rowSpan = (item && item.merge_start > 0 && item.merge_end > 0) ? (Number(item.merge_end) - Number(item.merge_start)) : 0;
    rowSpan = (rowSpan > 0) ? rowSpan + 1 : 0;
    const transationDate = (item && item.transation_date != null && item.transation_date !== "0000-00-00") ? moment(item.transation_date).format('YYYY-MM-DD') : "";
    return this._fb.group({
      id: new FormControl(item ? item.id : ''),
      query_id: new FormControl(item ? item.query_id : ''),
      bank_id: new FormControl(item ? item.bank_id : ''),
      bank_info_id: new FormControl(item ? item.bank_info_id : '', <any>Validators.required),
      transation_date: new FormControl(item ? item.transation_date : <any>Validators.required),
      memo: new FormControl(item ? item.memo : '', <any>Validators.required),
      withdraw: new FormControl(item ? item.withdraw : ''),
      deposit: new FormControl(item ? item.deposit : ''),
      gst: new FormControl(item ? item.gst : '', <any>Validators.required),
      status_id: new FormControl(item ? (item.status_id > 0) ? item.status_id : 1 : 1),
      query_comment: new FormControl(item ? item.query_comment : ''),
      merge_start: new FormControl(item ? item.merge_start : ''),
      merge_end: new FormControl(item ? item.merge_end : ''),
      rowSpan: new FormControl(rowSpan),
      is_skip: new FormControl((item && item.is_skip) ? item.is_skip : 0),
      answer_type: new FormControl(item ? item.answer_type : ''),
      client_comment: new FormControl(item ? item.client_comment : ''),
      status_comment: new FormControl(item ? item.status_comment : ''),
      documents: this._fb.array([])
    });
  }

  /**
   * Create Document Item
   */
  createDocumentItem(item ?: any) {
    return this._fb.group({
      id: new FormControl(item ? item.id : null),
      query_detail_id: new FormControl(item ? item.query_detail_id : null),
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
   * Create Info Additional Query Detail Item
   */
  createAdditionalQueryForm(item ?: any) {
    this.editAdditionalQueryForm = this._fb.group({
      comment: new FormControl(item ? item.comment : '', Validators.required),
      is_drive: new FormControl(item ? item.is_drive : 0),
    });
  }

  /**
   * Get Query Array
   */
  getQueryArray(i): FormArray {
    return <FormArray>this.getQueryBankArray().controls[i].get('infoDetail');
  }

  /**
   * Get Query Bank Array
   */
  getQueryBankArray(): FormArray {
    return <FormArray>this.editQueryForm.get('bank_details');
  }

  /**
   * Get Document Array
   */
  getDocumentArray(i, index): FormArray {
    return <FormArray>this.getQueryArray(i).controls[index].get('documents');
  }


  /**
   * Update Value
   * @param index
   * @param child
   * @param value
   */
  updateDateForQuery(index, child, value) {
    // this.get    moment(value).format('YYYY-MM-DD');
    const itemValue = moment(value).format('YYYY-MM-DD');
    this.getQueryArray(index).controls[child].get('transation_date').setValue(itemValue);
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

  onGoQueryModule() {
    this._router.navigate(['/' + AdminRoutes.PENDING_QUERY]);
  }

  /**
   * On Send to client
   * @param queryData
   */
  onSendtoClient(queryData: QueryDataList) {
    const dialogRef = this.dialog.open(QuerySendToClientDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        queryData: queryData,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onGoQueryModule();
      }
    });
  }

  /**
   * On Send to Staff or TL
   * @param information
   * @param type
   */
  onSendtoStaff(queryData: QueryDataList, typeInfo: number, stageId: number) {
    const dialogRef = this.dialog.open(QuerySendBackToStaffDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        queryData: queryData,
        type: typeInfo,
        status_id: stageId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.editQueryForm.get('stage_id').setValue(stageId);
        this.submitQueryBeforeSendBack(this.editQueryForm);
        this.onGoQueryModule();
      }
    });
  }

  /**
   * Submit Query Before Send Back
   * @param form
   */
  submitQueryBeforeSendBack(form: FormGroup) {
    const infoDetail = form.value['bank_details'];
    form.value['bank_details'] = JSON.stringify(form.value['bank_details']);
    delete form.value['final_submit'];
    this._commonCrudService.updateDataWithPut(AdminAPI.QUERY_UPDATE, this.queryData.id, form.value).subscribe(response => {
    });
  }

  /**
   * On Button Click need to update status & is_draft
   * @param stageId
   * @param isDraft
   */
  updateStatusIdWithDraft(stageId: number, isDraft: number, moveTo: string) {
    this.editQueryForm.get('is_draft').setValue(isDraft);
    this.editQueryForm.get('stage_id').setValue(stageId);
    this.moveTo = moveTo;
  }

  /**
   * On Submit Edit Information
   * @param form
   */
  onSubmit(form: FormGroup) {
    const infoDetail = form.value['bank_details'];
    form.value['bank_details'] = JSON.stringify(form.value['bank_details']);
    if (this.moveTo !== 'Client') {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          content: this.moveTo === 'draft' ? 'Are you sure you want to save it as draft?' : this.moveTo === 'submit' ? 'Are you sure you want to submit? Action will not be rollback.' : 'Are you sure you want to send it to ' + this.moveTo + '?'
        }
      });

      dialogRef.afterClosed().subscribe((value) => {
        if (value) {
          if (this.moveTo === 'draft') {
            if (this.moveTo !== 'submit') {
              delete form.value['final_submit'];
            }
            this._commonCrudService.updateDataWithPut(AdminAPI.QUERY_UPDATE, this.queryData.id, form.value).subscribe(response => {
              this.onGoQueryModule();
            });
          } else {
            if (form.valid) {
              if (this.moveTo !== 'submit') {
                delete form.value['final_submit'];
              }
              this._commonCrudService.updateDataWithPut(AdminAPI.QUERY_UPDATE, this.queryData.id, form.value).subscribe(response => {
                this.onGoQueryModule();
              });
            }
          }
        }
      });
    } else if (this.moveTo === 'Client') {
      if (form.valid) {
        if (this.moveTo !== 'submit') {
          delete form.value['final_submit'];
        }
        this._commonCrudService.updateDataWithPut(AdminAPI.QUERY_UPDATE, this.queryData.id, form.value).subscribe(response => {
          this.onSendtoClient(this.queryData);
        });
      }
    } else {
      if (form.valid) {
        if (this.moveTo !== 'submit') {
          delete form.value['final_submit'];
        }
        this._commonCrudService.updateDataWithPut(AdminAPI.QUERY_UPDATE, this.queryData.id, form.value).subscribe(response => {
          this.onGoQueryModule();
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
  onUploadDocument(event, queryDetailId, index, child) {
    if (event.target.files && event.target.files[0]) {
      const filesList = event.target.files;
      if (filesList.length) {
        let f = 0;
        Object.keys(event.target.files).forEach(itemUploadFile => {
          const name = event.target.files[f].name;
          this.uploadDocName[index] = [];
          this.uploadDocName[index][child] = name;
          const lastDot = name.lastIndexOf('.');
          const ext = name.substring(lastDot + 1);
          // if (isValidFileType(event.target.files[f].type) || isValidFileTypeExt(ext.toLowerCase())) {
          if (event.target.files[f].size > AppConstant.TWINTY_FIVE_MP_FILE_ALLOWED) {
            this._sharedService.setToastMessage(this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, ToastType.ERROR);
          } else {
            this.uploadDoc.delete('query_detail_id');
            this.uploadDoc.delete('document_file');
            this.uploadDoc.delete('is_drive');
            // document_type = 1 for Befree
            // is_additional_query = 1 this document is not additional info
            this.uploadDoc.append('query_detail_id', queryDetailId);
            this.uploadDoc.append('is_drive', '0');
            this.uploadDoc.append('document_file', event.target.files[f]);
            if (this.uploadDoc) {
              this._commonCrudService.uploadDocument(AdminAPI.QUERY_UPLOAD_DOCUMENT + '/' + queryDetailId, this.uploadDoc).subscribe(response => {
                this.uploadDocName = [];
                this.getDocumentListRefresh(queryDetailId, index, child);
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
  onUploadDocumentAdditional(event, queryDetailId, index) {
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
            this.uploadDoc.delete('query_detail_id');
            this.uploadDoc.delete('document_file');
            this.uploadDoc.delete('is_drive');
            // document_type = 1 for Befree
            // is_additional_info = 1 this document is not additional info
            this.uploadDoc.append('query_detail_id', queryDetailId);
            this.uploadDoc.append('is_drive', '0');
            this.uploadDoc.append('document_file', event.target.files[f]);
            if (this.uploadDoc) {
              this._commonCrudService.uploadDocument(AdminAPI.QUERY_ADDITIONAL_UPLOAD_DOCS + '/' + queryDetailId, this.uploadDoc).subscribe(response => {
                this.getAdditionalQueryListing();
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
  onUploadAdditionalDocument(event, docType, isDrive) {
    this.editAdditionalQueryForm.get('is_drive').setValue(isDrive);
    if (event.target.files && event.target.files[0]) {
      const filesList = event.target.files;
      if (filesList.length) {
        let f = 0;
        Object.keys(event.target.files).forEach(itemUploadFile => {
          const name = event.target.files[f].name;
          this.uploadAdditionalDocName = name;
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
                'reqKey': 'document_file',
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
   * @param queryDocument
   */
  downloadDocument(queryDocument: any, is_additional_query?: number) {
    // console.log(queryDocument);
    if (is_additional_query === 1) {
      const id = queryDocument['id'];
      this._commonCrudService.downloadDocument(AdminAPI.QUERY_DOCUMENT_DOWNLOAD_ADDITIONAL + '/' + id, {}).subscribe(response => {
        if (response && response.type) {
          const extension = response.type.split('/');
          FileSaver.saveAs(response, queryDocument['document_name']);
        }
      });
    } else {
      // console.log(queryDocument);
      if (queryDocument && queryDocument.get('id').value) {
        // const params = {'is_additional_query': isAdditional};
        this._commonCrudService.downloadDocument(AdminAPI.QUERY_DOCUMENT_DOWNLOAD + '/' + queryDocument.get('id').value, {}).subscribe(response => {
          if (response && response.type) {
            const extension = response.type.split('/');
            FileSaver.saveAs(response, queryDocument.get('document_name').value);
          }
        });
      }
    }
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

  /**
   * Remove Document
   * @param queryDocument
   */
  deleteDocument(queryDetailsID: number, document_id: number, index: number, child: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this document ?'
      }
    });
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.deleteData(AdminAPI.QUERY_DOCUMENT_DELETE, document_id).subscribe(response => {
          this.getDocumentListRefresh(queryDetailsID, index, child);
        });
      }
    });
  }

  /**
   * Remove Document
   * @param informationDocument
   */
  deleteAdditionalDocument(document_id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this document ?'
      }
    });
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.deleteData(AdminAPI.QUERY_ADDITIONAL_DOCS_DELTE, document_id).subscribe(response => {
          this.getAdditionalQueryListing();
        });
      }
    });
  }

  /**
   * On Submit Additional Query
   * @param form
   */
  onSubmitAdditionalQuery(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.addData(AdminAPI.QUERY_ADDITIONAL_STORE + '/' + this.queryData.id, form.value, this.docArray).subscribe(response => {
        this.getAdditionalQueryListing();
        this.addAdditionaQueryForm.resetForm();
        this.createAdditionalQueryForm();
        this.uploadAdditionalDocName = '';
      });
    }
  }

  /**
   * Get Additional Query Listing
   */
  getAdditionalQueryListing() {
    this._commonCrudService.getData(AdminAPI.QUERY_ADDITIONAL_LIST, this.queryData.id).subscribe((response) => {
      this.additionalQueryListing = response.payload.data;
    });
  }

  /**
   * Remove Additional Query
   * @param additionalQuery
   */
  removeAdditionalQuery(additionalQuery: AdditionalQueryRequired) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to mark as resolved this additional query ?'
      }
    });
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.deleteData(AdminAPI.QUERY_ADDITIONAL_DELETE, additionalQuery.id).subscribe(response => {
          this.getAdditionalQueryListing();
        });
      }
    });
  }

  /**
   * On Add Document Open Dialog
   * @param type
   */
  onAddDocumentsDialog(queryDetailId: number, index: number, child: number, type: number) {
    const dialogRef = this.dialog.open(UploadQueryDocumentsDialogComponent, {
      panelClass: 'xl-large-dialog-container',
      data: {
        queryData: this.queryData,
        queryDetailId: queryDetailId,
        uploadType: type
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!CommonFunctions.isEmpty(result) && result['result'] === true && result['type'] === 3) {
        this.getDocumentListRefresh(queryDetailId, index, child);
      } else if (!CommonFunctions.isEmpty(result) && result['result'] === true && result['type'] === 5) {
        this.getAdditionalQueryListing();
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
  }

  /**
   * Get Document List Refresh
   * @param queryDetailId
   * @param index
   */
  getDocumentListRefresh(queryDetailId: number, index: number, child: number) {
    this._commonCrudService.getData(AdminAPI.QUERY_DETAIL_VIEW, queryDetailId).subscribe((responseData) => {
      // console.log(queryDetailId, responseData.payload.data);
      const queryDataItem = (responseData.payload.data) ? responseData.payload.data : [];
      // queryDataItem = queryDataItem.filter(item => item['id'] === queryDetailId);
      if (queryDataItem.length) {
        if (queryDataItem[0] && queryDataItem[0]['documents'] && queryDataItem[0]['documents'].length) {
          this.getDocumentArray(index, child).controls = [];
          queryDataItem[0]['documents'].forEach(doc => {
            this.getDocumentArray(index, child).push(this.createDocumentItem(doc));
          });
        } else {
          this.getDocumentArray(index, child).controls = [];
        }
      }
    });
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
   * On Delete Query
   * @param id
   */
  onDeleteQuery(id: number) {
    const dialogConfigData: any = {
      data: {
        content: 'Are you sure want to delete this query?'
      }
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.deleteData(AdminAPI.QUERY_DELETE, id).subscribe(() => {
          // this.getClientTurnoverList();
          this.getBasicQueryData();
          this.createEditQueryForm();
        });
      }
    });
  }

  onAddQuery(bank_id: number, bank_info_id: number) {
    const params = {};
    params['bank_id'] = bank_id;
    params['bank_info_id'] = bank_info_id;
    this._commonCrudService.addData(AdminAPI.QUERY_ADD_EXTRA_ROW + '/' + this.queryData.id, params).subscribe(response => {
      this.getBasicQueryData();
      this.createEditQueryForm();
    });
  }
}
