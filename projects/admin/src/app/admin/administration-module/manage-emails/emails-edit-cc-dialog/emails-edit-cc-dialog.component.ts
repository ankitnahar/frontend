import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CommonRegex, ValidationConstantMessage} from '../../../../../utility/validation';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {ManageEmails} from '../manage-emails.model';

@Component({
  selector: 'app-emails-edit-cc-dialog',
  templateUrl: './emails-edit-cc-dialog.component.html'
})
export class EmailsEditCcDialogComponent extends BaseComponent implements OnInit {

  editCCForm: FormGroup;
  manageEmail: ManageEmails;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  constructor(private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              public dialogRef: MatDialogRef<EmailsEditCcDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    super();
  }

  ngOnInit() {
    this.manageEmail = (this.data.emailData) ? this.data.emailData : [];
    this.createEditCCForm();
  }

  createEditCCForm() {
    this.editCCForm = this._fb.group({
      cc: new FormControl(this.manageEmail.cc, [<any>Validators.pattern(CommonRegex.MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  /** On Submit Form
   * @param form
   */
  onSubmitEmail(form: FormGroup) {
    form.value['_method'] = 'put';
    form.value['is_detail'] = '0';
    form.value['is_active'] = this.manageEmail.is_active;
    if (form.valid) {
      this._commonCrudService.updateData(AdminAPI.MANAGEEMAIL_UPDATE, this.manageEmail.id, form.value).subscribe((response) => {
        this.dialogRef.close(true);
      });

    }
  }

}
