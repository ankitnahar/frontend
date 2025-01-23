import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {DynamicField} from '../dynamic-field.model';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import {FIELDPRIVILEGES} from '../../manage-users/update-user/privileges/privileges.model';
import {FIELDTYPEDROPDOWN} from '../../../../../utility/constants/base-constants';
import {Router} from '@angular/router';

@Component({
  selector: 'add-global-constants-dialog',
  templateUrl: './add-dynamic-field-dialog.html',
})
export class AddDynamicFieldGlobalConstantsDialog extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variable
  addDynamicForm: FormGroup;
  fieldValueType = false;
  fieldValue = false;

  //Model
  dynemicFormField: DynamicField[] = [];
  dynamicGroup: FIELDPRIVILEGES[] = [];
  fieldType = FIELDTYPEDROPDOWN;
  isAlphabetic = false;
  isNumeric = false;
  isBoth = false;

  constructor(
    public dialogRef: MatDialogRef<AddDynamicFieldGlobalConstantsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _router: Router) {
    super();
  }

  ngOnInit() {
    this.getDynamicGroup();
    this.createDynamicFieldForm();
    if (this.data.fieldData) {
      this.changeControlType(this.data.fieldData.field_type);
    }
  }

  createDynamicFieldForm() {
    this.addDynamicForm = this._fb.group({
      field_title: new FormControl(this.data.fieldData ? this.data.fieldData.field_title : '', <any>Validators.required),
      group_id: new FormControl(this.data.fieldData ? this.data.fieldData.group_id.id : '', <any>Validators.required),
      field_type: new FormControl(this.data.fieldData ? this.data.fieldData.field_type : '', <any>Validators.required),
      field_value: new FormControl(this.data.fieldData ? this.data.fieldData.field_value : ''),
      is_mandatory: new FormControl(this.data.fieldData ? this.data.fieldData.is_mandatory : ''),
      field_value_type: new FormControl(this.data.fieldData ? this.data.fieldData.field_value_type : null),
      help_text: new FormControl(this.data.fieldData ? this.data.fieldData.help_text : null),
    });
  }

  getDynamicGroup() {
    this._commonCrudService.listData(AdminAPI.DYNAMIC_FIELD_GROUP, {}, {'notin': {'id': '1,2'}}).subscribe((response) => {
      this.dynamicGroup = response.payload.data;
    });
  }

  onSubmitAddDynamicForm(form: FormGroup) {
    if (form.valid) {
      if (this.data.fieldData) {
        this._commonCrudService.updateDataWithPut(AdminAPI.DYNAMIC_FIELD, this.data.fieldData.id, form.value).subscribe(response => {
        });
      } else {
        if (form.value['is_mandatory'] === '') {
          form.value['is_mandatory'] = 0;
        } else {
          form.value['is_mandatory'] = 1;
        }
        form.value['is_active'] = 1;
        form.value['field_value'] = (form.value['field_value'] !== null) ? form.value['field_value'] : '';
        form.value['field_value_type'] = (form.value['field_value_type'] !== null) ? form.value['field_value_type'] : '';
        this._commonCrudService.addData(AdminAPI.DYNAMIC_FIELD, form.value).subscribe(response => {
        });
      }
      this.onClose();
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  /**
   * Change Control Type Update Validation
   * @param value
   */
  changeControlType(value: string) {
    this.fieldValueType = false;
    this.fieldValue = false;
    this.addDynamicForm.get('field_value').setValidators(null);
    this.addDynamicForm.get('field_value').updateValueAndValidity();
    this.addDynamicForm.get('field_value_type').setValidators(null);
    this.addDynamicForm.get('field_value_type').updateValueAndValidity();

    if (value === 'DD') {
      this.fieldValue = true;
      this.addDynamicForm.get('field_value').setValidators(Validators.required);
      this.addDynamicForm.get('field_value').updateValueAndValidity();
    } else if (value === 'TB') {
      this.fieldValueType = true;
      this.addDynamicForm.get('field_value_type').setValidators(Validators.required);
      this.addDynamicForm.get('field_value_type').updateValueAndValidity();
    }
  }
}
