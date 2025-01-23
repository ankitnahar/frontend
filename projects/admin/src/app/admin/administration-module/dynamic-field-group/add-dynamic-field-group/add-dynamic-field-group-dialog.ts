import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {CommonRegex, ValidationConstantMessage} from '../../../../../utility/validation';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../utility/constants/api';

@Component({
  selector: 'add-field-group-dialog',
  templateUrl: './add-dynamic-field-group-dialog.html',
})

export class AddDynamicFieldGroupDialog extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  //Data variables
  addMoreFlag: any;
  // Form Variables
  addDynamicFieldGroupForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddDynamicFieldGroupDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService,) {
    super();
  }

  ngOnInit() {
    this.createDynamicFieldGroupForm();
  }

  createDynamicFieldGroupForm() {
    this.addDynamicFieldGroupForm = this._fb.group({
      addentitygroup: new FormControl(this.data.fieldData ? this.data.fieldData.group_name : '', [<any>Validators.required, <any>Validators.pattern(CommonRegex.ALPHABETICS_REGEXP)]),
    });
  }

  /**
   * For updateing or saving the field data
   * @param {FormGroup} form
   */
  onSubmitAddDynamicFieldGroupForm(form: FormGroup) {
    if (form.valid) {
      if (this.data.fieldData) {
        const params = {
          '_method': 'put',
          'group_name': form.value['addentitygroup']
        };
        this._commonCrudService.updateData(AdminAPI.DYNAMIC_FIELD_GROUP, this.data.fieldData.id, params)
          .subscribe((response) => {
          });
      } else {
        this._commonCrudService.addData(AdminAPI.DYNAMIC_FIELD_GROUP, {
          'group_name': form.value['addentitygroup'],
          'sort_order': '1',
          'is_active': '1'
        })
          .subscribe((response) => {
          });
      }
      if (!this.addMoreFlag) {
        this.onClose(form.value);
      } else {
        this.addDynamicFieldGroupForm.reset();
      }
    }
  }

  saveAddNew(data) {
    this.addMoreFlag = data;
  }

  onClose(value): void {
    this.dialogRef.close(value);
  }
}
