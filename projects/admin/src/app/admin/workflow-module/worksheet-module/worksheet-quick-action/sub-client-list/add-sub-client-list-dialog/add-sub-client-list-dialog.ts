import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../../../utility/validation';
import {SubClient} from '../subclient.model';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {BillingBasic} from '../../../../../../../utility/shared-model/billing.model';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {activeInactive} from '../../../../../../../utility/constants/base-constants';

@Component({
  selector: 'add-sub-client-list-dialog',
  templateUrl: './add-sub-client-list-dialog.html',
})
export class AddSubClientListDialog extends BaseComponent implements OnInit {

  @ViewChild('addEditForm') addEditForm;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  addSubClientListForm: FormGroup;
  subClient: SubClient;
  clientList: BillingBasic[] = [];
  activeInactiveList = activeInactive;
  isNew = 0;

  constructor(
    public dialogRef: MatDialogRef<AddSubClientListDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.subClient = (this.data) ? this.data.subClientData : null;
    this.createAddSubClientListForm();
    this.getClientList();
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._commonCrudService.listData(AdminAPI.SUB_CLIENT_LIST_DROPDOWN, {}, {}).subscribe((response) => {
      if (response) {
        this.clientList = response.payload.data;
      }
    });
  }

  /**
   * Create add Sub client list
   */
  createAddSubClientListForm() {
    this.addSubClientListForm = this._fb.group({
      entity_id: new FormControl((this.subClient ? this.subClient.entity_id.id : null), <any>Validators.required),
      subclient: new FormControl((this.subClient ? this.subClient.subclient : null), <any>Validators.required),
      is_active: new FormControl((this.subClient ? this.subClient.is_active : null), <any>Validators.required)
    });
  }

  /**
   * On Submit Add Sub Client List
   * @param form
   */
  onSubmitAddSubClientListForm(form: FormGroup) {
    if (form.valid) {
      if (this.subClient) {
        form.value['_method'] = 'put';
        this._commonCrudService.updateData(AdminAPI.SUB_CLIENT_UPDATE, this.subClient.id, form.value)
          .subscribe((response) => {
            this.subClient = null;
            if (this.isNew === 0) {
              this.onClose();
            }
            this.addEditForm.resetForm();
            this.createAddSubClientListForm();
          });
      } else {
        this._commonCrudService.addData(AdminAPI.SUB_CLIENT_ADD, form.value)
          .subscribe((response) => {
            this.subClient = null;
            if (this.isNew === 0) {
              this.onClose();
            }
            this.createAddSubClientListForm();
            this.addEditForm.resetForm();
          });
      }
    }
  }

  /**
   * Close Dialog
   */
  onClose(): void {
    this.dialogRef.close();
  }

  /**
   * To Check add & update button with new option
   */
  updateIsNew() {
    this.isNew = 1;
  }
}
