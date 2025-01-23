import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../../utility/validation';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';

@Component({
  selector: 'app-add-edit-training-dialog',
  templateUrl: './add-edit-training-dialog.html',
  providers: [CommonCrudService]
})
export class AddEditTrainingDialog extends BaseComponent implements OnInit {

  addTrainingForm: FormGroup;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  constructor(public dialogRef: MatDialogRef<AddEditTrainingDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _fb: FormBuilder,
              public _sharedService: SharedService,
              public _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.createTrainingForm();
  }

  createTrainingForm() {
    if (this.data['trainingData']) {
      this.addTrainingForm = this._fb.group({
        trainingName: new FormControl(this.data['trainingData'].traning_name ? this.data['trainingData'].traning_name : '', [<any>Validators.required, <any> Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
        status: new FormControl(this.data['trainingData'].traning_name.is_active ? this.data['trainingData'].traning_name.is_active : '', [])
      });
    } else {
      this.addTrainingForm = this._fb.group({
        trainingName: new FormControl('', [<any>Validators.required, <any> Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
        status: new FormControl('')
      });
    }
  }

  onSubmitAddTraininForm(form: FormGroup, saveAddNew?: any) {
    if (form.valid) {
      this._commonCrudService.addData(AdminAPI.TRAINING_DATA_SAVE, {
        'traning_name': form.value.trainingName,
        'is_active': 1
      }).subscribe(response => {
      });
      if (!saveAddNew) {
        this.onClose();
      }
    }
  }

  onSubmitUpdateTraininForm(form: FormGroup, saveAddNew?: any) {
    if (form.valid) {
      this._commonCrudService.updateData(AdminAPI.TRAINING_EDIT_DATA, this.data['trainingData'].id, {
        'traning_name': form.value.trainingName,
        'is_active': this.data['trainingData'].is_active,
        '_method': 'put'
      }).subscribe(response => {
      });
      if (!saveAddNew) {
        this.onClose();
      }
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

