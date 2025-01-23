import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastErrorMessages, ValidationConstantMessage} from '../../../../../utility/validation';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {Router} from '@angular/router';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {AdminAPI} from '../../../../../utility/constants/api';
import {AppConstant, BASE, ToastType} from '../../../../../utility/constants/base-constants';

@Component({
  selector: 'app-bulk-allocation-allocate-user',
  templateUrl: './bulk-allocation-allocate-user.component.html',
  styleUrls: ['./bulk-allocation-allocate-user.component.scss']
})
export class BulkAllocationAllocateUserComponent extends BaseComponent implements OnInit {

  addAllocationUser: FormGroup;

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Other variables

  userList: AdminUser[] = [];
  clientList = [];
  serviceList = [];
  selectedFilterEntity = null;
  clientListMultiple = [];
  documentName: string;
  docArray = [];
  url = BASE.IMAGE_PATH;

  constructor(private _fb: FormBuilder, public _router: Router,
              private _sharedService: SharedService,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService) {
    super();
  }

  ngOnInit() {
    this.getUserList();
    this.getClientList();
    this.createAllocateUserForm();
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.userList = response;
    });
  }

  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {'compare': {'notequal': {'discontinue_stage': 2}}}).subscribe((response) => {
      this.clientList = response;
    });
  }

  /**
   * Get Client List
   */
  onUserChange(selectedData) {
    const userId = (selectedData) ? selectedData.id : 0;
    if (userId > 0) {
      this._commonCrudService.getData(AdminAPI.BULKALLOCATION_ENTITY, userId, {}, {}).subscribe((response) => {
        if (response) {
          this.selectedFilterEntity = [];
          this.addAllocationUser.get('entity_id').setValue(null);
          this.clientList = [];
          this.clientList = response.payload.data;
        }
      });
    }
  }

  /**
   * Get Client List
   */
  onNewUserChange(selectedData) {
    const userId = (selectedData) ? selectedData.id : 0;
    this._commonCrudService.getData(AdminAPI.BULKALLOCATION_SERVICE, userId, {}, {}).subscribe((response) => {
      if (response) {
        this.serviceList = response.payload.data;
      }
    });
  }

  /**
   * Select All Client
   */
  selectAll() {
    this.selectedFilterEntity = this.clientList.map(x => x.id);
    this.addAllocationUser.get('entity_id').setValue(this.selectedFilterEntity);
  }

  /**
   * UnSelect All Client
   */
  unselectAll() {
    this.selectedFilterEntity = [];
    this.addAllocationUser.get('entity_id').setValue(null);
  }

  /**
   * Create Add New Invoice Form
   */
  createAllocateUserForm() {
    this.addAllocationUser = this._fb.group({
      user_id: new FormControl,
      document_file: new FormControl(null),
      entity_id: new FormControl(null, <any>Validators.required),
      services: new FormControl(null, <any>Validators.required),
      new_user_id: new FormControl(null, <any>Validators.required)
    });
  }

  onSubmit(form: FormGroup) {
    form.value['entity_id'] = form.value['entity_id'].join(',');
    form.value['services'] = form.value['services'].join(',');
    this._commonCrudService.addData(AdminAPI.BULKALLOCATION_SAVE, form.value)
      .subscribe((response) => {
        this.createAllocateUserForm();
      });
  }

  /**
   * Upload document browse file method
   */
  /*onChooseDocument() {
    document.getElementById('uploadDocument').click();
  }*/

  /**
   * On clear document name
   */
  /*onClear() {
    this.documentName = '';
  }*/

  /**
   * Download supported documents
   * */

  /*downloadSupportedDocument() {

  }*/
  /**
   * On Client Change Update Count
   */
  onClientChangeUpdateCount(selectedData: any) {
    if (selectedData) {
      this.selectedFilterEntity = selectedData.map(x => x.id);
    }
  }

  /**
   * On clear document name
   */
  onClear() {
    this.addAllocationUser.get('document_file').setValue(null);
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
        const name = event.target.files[index].name;
        const lastDot = name.lastIndexOf('.');
        const ext = name.substring(lastDot + 1);
        // console.log(event.target.files[index].type);
        if (ext.toLowerCase() === 'csv') {
          if (event.target.files[index].size > AppConstant.THREE_MB_IMAGE_SIZE_ALLOWED) {
            this._sharedService.setToastMessage(ToastErrorMessages.VALID_PDF_SIZE, ToastType.ERROR);
            return;
          } else {
            const file = event.target.files[0];
            this.addAllocationUser.get('document_file').setValue(file.name);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            this.docArray.push({
              'reqKey': 'document_file',
              'file': event.target.files,
            });

            if (this.docArray) {
              const userID = (this.addAllocationUser.get('user_id').value) ? this.addAllocationUser.get('user_id').value : 0;
              this._commonCrudService.addData(AdminAPI.BULKALLOCATION_FETCHENTITY, {'user_id': userID}, this.docArray).subscribe(response => {
                // this.checkClient
                // console.log(response);
                if (response) {
                  this.onCSVFileRespone(response);
                }
              });
            }
          }
        } else {
          this.onClear();
          this._sharedService.setToastMessage('Please upload valid csv file.', ToastType.ERROR);
          return;
        }
      }
    }
  }

  /**
   * Get Client List
   */
  onCSVFileRespone(responseData) {
    if (responseData) {
      // this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = responseData.payload.data;
      this.selectedFilterEntity = [];
      this.addAllocationUser.get('entity_id').setValue(null);
      this.selectedFilterEntity = this.clientList.map(x => x.id);
      this.addAllocationUser.get('entity_id').setValue(this.selectedFilterEntity);
      this.addAllocationUser.get('document_file').setValue(null);
      // });
    }
  }
}
