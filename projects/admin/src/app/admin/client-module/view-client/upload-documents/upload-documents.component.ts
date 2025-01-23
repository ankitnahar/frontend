import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {isValidDocumentType, isValidDocumentTypeToEditOrView, isValidDocumentTypeToEditOrViewModeType} from '../../../../../utility/common-functions';
import {AppConstant, BASE, GLOBALDATAKEYS, ToastType, UploadDocumentType} from '../../../../../utility/constants/base-constants';
import {ClientDocument} from './document.model';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {Clients} from '../view-client.model';
import {ToastErrorMessages, ValidationConstantMessage} from '../../../../../utility/validation';
import {DomSanitizer} from '@angular/platform-browser';
import * as FileSaver from 'file-saver';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import * as moment from 'moment';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {ConfirmationDialogComponent} from '../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';
import {BaseComponent} from '../../../../../utility/components/base/base.component';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.scss'],
})

export class UploadDocumentsComponent extends BaseComponent implements OnInit {

  @ViewChild('uploadForm') uploadForm;
  // Form Variables
  uploadDocumentForm: FormGroup;
  validationMsg = new ValidationConstantMessage();
  // Data avraible
  documentList: ClientDocument[] = [];
  clientData: Clients = null;
  documentTypeList = UploadDocumentType;
  docArray = [];

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // Other variables
  documentName: string;
  tabID = ADMINTABACCESS.CLIENT_ENTITYDOCUMENT;
  tabData: Privilege | any[];

  constructor(private _router: Router, private _fb: FormBuilder, private sanitizer: DomSanitizer,
              private _commonCrudService: CommonCrudService, private _sharedService: SharedService, public dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    this.createUploadDocumentForm();
    this.getClientDocumentList(1);
  }

  /**
   * form initialization
   */
  createUploadDocumentForm() {
    this.uploadDocumentForm = this._fb.group({
      documentName: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      notes: new FormControl(null)
    });
  }

  /**
   * Method initialization
   * @param pageNumber
   * @param key
   * @param val
   */
  getClientDocumentList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.DOCUMENT_LIST + '/' + this.clientData.id, this.getQueryParams(pageNumber, key, val))
      .subscribe((response) => {
        this.handleDocumentListResponse(response);
      });
  }

  /**
   * Response handler for document list and pagination manage
   * @param response
   */
  handleDocumentListResponse(response: any) {
    this.documentList = response['payload']['data'];
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  // Events
  /**
   * page change event and call list api according to that
   * @param event
   */
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getClientDocumentList(event.pageIndex + 1);
  }

  /**
   * display document type by its key in list api.
   * @param documentType
   * @returns {string}
   */
  getDocumentType(documentType: number): string {
    return this.documentTypeList.filter(elem => elem.key === documentType)[0].label;
  }

  /**
   * uploading new document
   * @param formValue
   * @param isValid
   */
  onSubmitUploadDocumentForm(formValue: any, isValid: boolean) {
    if (isValid) {
      formValue['entity_id'] = this.clientData.id;
      formValue['module_id'] = this.clientData.module_id;
      formValue['notes'] = (formValue['notes'] !== '' && formValue['notes'] !== 'null' && formValue['notes'] !== null) ? formValue['notes'] : '';
      this._commonCrudService.addData(AdminAPI.DOCUMENT_STORE + '/' + this.clientData.id, formValue, this.docArray).subscribe(Response => {
        this.createUploadDocumentForm();
        this.uploadForm.resetForm();
        this.getClientDocumentList(1);
      });
    }
  }

  getSortData(sortKey: string, sortVal: string) {
    this.getClientDocumentList(1, sortKey, sortVal);
  }

  /**
   * Upload document browse file method
   */
  onChooseDocument() {
    document.getElementById('uploadDocument').click();
  }

  /**
   * select event of document
   * @param event
   */
  onUploadDocument(event) {
    if (event.target.files) {
      this.docArray = [];
      for (let index = 0; index < event.target.files.length; index++) {
        // console.log(event.target.files[index].type);
        if (isValidDocumentType(event.target.files[index].type)) {
          if (event.target.files[index].size > AppConstant.THREE_MB_IMAGE_SIZE_ALLOWED) {
            this._sharedService.setToastMessage(ToastErrorMessages.VALID_PDF_SIZE, ToastType.ERROR);
            return;
          } else {
            const file = event.target.files[0];
            this.uploadDocumentForm.get('documentName').setValue(file.name);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            this.docArray.push({
              'reqKey': 'document',
              'file': event.target.files,
            });
          }
        } else {
          this._sharedService.setToastMessage(ToastErrorMessages.VALID_PDF_SELECTION, ToastType.ERROR);
          return;
        }
      }
    }
  }

  /**
   * event for delete Document
   * @param document
   */
  deleteDocument(document: ClientDocument) {
    let dialogRef;
    dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete document?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._commonCrudService.deleteData(AdminAPI.DOCUMENT_DELETE, document.id).subscribe(response => {
          this.getClientDocumentList(1);
        });
      }
    });
  }

  /**
   * Download single client Document
   * @param document
   */
  downloadDocument(document: ClientDocument) {
    this._commonCrudService.downloadDocument(AdminAPI.DOCUMENT_DOWNLOAD + '/' + document.id).subscribe(response => {
      if (response && response.type) {
        const extension = response.type.split('/');
        FileSaver.saveAs(response, document.original_name);
      }
    });
  }

  /**
   * Download All Document
   */
  downloadAllDocument() {
    this._commonCrudService.downloadDocument(AdminAPI.DOCUMENT_DOWNLOAD_ZIP + '/' + this.clientData.id, {'module_id': 1}).subscribe(response => {
      if (response && response.type) {
        const extension = response.type.split('/');
        FileSaver.saveAs(response, 'Download All Docs - ' + moment(new Date()).format('DD-MM-YYYY'));
      }
    });
  }

  /**
   * On clear document name
   */
  onClear() {
    this.documentName = '';
  }

  /**
   * On view client page redirect
   */
  onClient() {
    this._router.navigate(['/' + AdminRoutes.VIEW_CLIENT]);
  }

  /**
   * helper to get query params and sorting
   * @param page
   * @param sortKey
   * @param sortOrder
   * @returns {{pageNumber: number, recordsPerPage: number}}
   */
  getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    const params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    sortKey ? params ['sortBy'] = sortKey : '';
    sortOrder ? params ['sortOrder'] = sortOrder : '';
    return params;
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Update Validation
   * @param value
   */
  updateValidation(value: number) {
    if (value === 1) {
      this.uploadDocumentForm.get('notes').setValue(null);
      this.uploadDocumentForm.get('notes').setValidators(null);
      this.uploadDocumentForm.get('notes').updateValueAndValidity();
    } else if (value === 2) {
      this.uploadDocumentForm.get('notes').setValue(null);
      this.uploadDocumentForm.get('notes').setValidators(Validators.required);
      this.uploadDocumentForm.get('notes').updateValueAndValidity();
    }
  }

  /**
   * File Data
   * @param fileData
   */
  onEditDocument(fileData: any) {
    if (fileData) {
      const fileExt = fileData['filename'].split('.');
      const baseURL = BASE.ADMIN_URL.split('/');
      // console.log(baseURL);
      if (isValidDocumentTypeToEditOrView(fileExt[1])) {
        fileData['file_url'] = baseURL[0] + '//' + baseURL[2] + fileData['documentpath'] + fileData['filename'];
        // console.log(fileData);
        const returnType = isValidDocumentTypeToEditOrViewModeType(fileExt[1]);
        fileData['mode'] = returnType['mode'];
        fileData['documentType'] = returnType['documentType'];
        const fkey = btoa('file_name');
        const fvalue = btoa(fileData['filename'].toString());
        const fukey = btoa('file_url');
        const fuvalue = btoa(fileData['file_url'].toString());
        const fmkey = btoa('mode');
        const fmvalue = btoa(fileData['mode'].toString());
        const fdkey = btoa('documentType');
        const fdvalue = btoa(fileData['documentType'].toString());
        const fdpkey = btoa('documentpath');
        const fdpvalue = btoa(fileData['documentpath'].toString());
        const fdokey = btoa('original_name');
        const fdovalue = btoa(fileData['original_name'].toString());
        const ftkey = btoa('file_type');
        const ftvalue = btoa(fileExt[1].toString());
        this._router.navigate([]).then(result => {
          window.open(baseURL[0] + '//' + baseURL[2] + '/loadDocument.php' + '?' + fkey + '=' + fvalue + '&' + fukey + '=' + fuvalue + '&' + fmkey + '=' + fmvalue + '&' + fdkey + '=' + fdvalue + '&' + fdpkey + '=' + fdpvalue + '&' + fdokey + '=' + fdovalue + '&' + ftkey + '=' + ftvalue, '_blank');
        });
      } else {

      }
      // console.log(fileExt);
      // console.log(fileData);
    }
    /*this._sharedService.setClientData(GLOBALDATAKEYS.DOCUMENT_EDIT, null);
    this._sharedService.setClientData(GLOBALDATAKEYS.DOCUMENT_EDIT, fileData);
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.SHARE_FILE_REPORT, '_blank');
    });*/

    // const fkey = btoa('file_name');
    // const fvalue = btoa(fileData.file_name.toString());
    // const fukey = btoa('file_url');
    // const fuvalue = btoa(fileData.file_url.toString());
    // const fmkey = btoa('mode');
    // const fmvalue = btoa(fileData.mode.toString());
    // const fdkey = btoa('documentType');
    // const fdvalue = btoa(fileData.documentType.toString());
    // this._router.navigate([]).then(result => {
    //   window.open('http://192.168.3.39:4301/loadDocument.php' + '?' + fkey + '=' + fvalue + '&' + fukey + '=' + fuvalue + '&' + fmkey + '=' + fmvalue + '&' + fdkey + '=' + fdvalue, '_blank');
    // });
  }
}
