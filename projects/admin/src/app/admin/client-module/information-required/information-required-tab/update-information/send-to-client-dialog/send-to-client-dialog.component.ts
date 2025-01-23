import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {BaseComponent} from "../../../../../../../utility/components/base/base.component";
import {CommonRegex, ValidationConstantMessage} from "../../../../../../../utility/validation";
import {AdminAPI} from "../../../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../../../utility/shared-service/common-crud.service";
import {SharedService} from "../../../../../../../utility/shared-service/shared.service";
import {SharedUserService} from "../../../../../../../utility/shared-service/shared-user.service";
import {InformationRequired} from "../../information-tab/information-required.model";
import {AdminUser} from "../../../../../../../utility/shared-model/admin-user.model";
import {ConfirmationDialogComponent} from "../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component";
import {AdminRoutes} from "../../../../../../../utility/constants/admin-route";
import {Router} from "@angular/router";

@Component({
  selector: 'app-send-to-client-dialog',
  templateUrl: './send-to-client-dialog.component.html'
})
export class SendToClientDialogComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Form Variables
  addSendtoClientForm: FormGroup;
  informationRequired: InformationRequired;
  sendToClientFormData = [];
  userList: AdminUser[] = [];

  constructor(private _fb: FormBuilder, public dialog: MatDialog, private _router: Router,
              public dialogRef: MatDialogRef<SendToClientDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _commonCrudService: CommonCrudService, private _sharedService: SharedService, private _sharedUserService: SharedUserService) {
    super();
  }

  ngOnInit() {
    this.informationRequired = (this.data.informationRequired) ? this.data.informationRequired : [];
    this.createAddSendtoClientForm();
    this.getAddSendToClientDetail();
    this.getUserList();
  }

  /**
   * Get User List
   */
  getUserList() {
    this._commonCrudService.listData(AdminAPI.ADMIN_USER, {'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.userList = response.payload.data;
    });
  }

  /**
   * Get Send to Client form data
   */
  getAddSendToClientDetail() {
    const params = {'information_id': this.informationRequired.id};
    this._commonCrudService.getData(AdminAPI.INFORMATION_REQUIRED_SEND_INFO, this.informationRequired.id, params).subscribe((response) => {
      this.sendToClientFormData = response.payload.data;
      if (this.sendToClientFormData) {
        this.addSendtoClientForm.get('from_email').setValue(this.sendToClientFormData['from_email']);
        this.addSendtoClientForm.get('from_email').updateValueAndValidity();
        this.addSendtoClientForm.get('to').setValue(this.sendToClientFormData['to']);
        this.addSendtoClientForm.get('to').updateValueAndValidity();
        this.addSendtoClientForm.get('cc').setValue(this.sendToClientFormData['cc']);
        this.addSendtoClientForm.get('cc').updateValueAndValidity();
        this.addSendtoClientForm.get('bcc').setValue(this.sendToClientFormData['bcc']);
        this.addSendtoClientForm.get('bcc').updateValueAndValidity();
        this.addSendtoClientForm.get('subject').setValue(this.sendToClientFormData['subject']);
        this.addSendtoClientForm.get('subject').updateValueAndValidity();
        this.addSendtoClientForm.get('content').setValue(this.sendToClientFormData['content']);
        this.addSendtoClientForm.get('content').updateValueAndValidity();
      }
    });
  }

  /**
   * Create assignee form
   */
  createAddSendtoClientForm() {
    this.addSendtoClientForm = this._fb.group({
      from_email: new FormControl(null, <any>Validators.required),
      to: new FormControl(null, [<any>Validators.required, <any>Validators.pattern(CommonRegex.MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
      cc: new FormControl(null, [<any>Validators.pattern(CommonRegex.MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
      bcc: new FormControl(null, [<any>Validators.pattern(CommonRegex.MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
      subject: new FormControl(null, <any>Validators.required),
      content: new FormControl(null, <any>Validators.required),
      stage_id: new FormControl(5, <any>Validators.required),
      information_id: new FormControl(this.informationRequired.id, <any>Validators.required),
    });
  }

  onClose(value): void {
    this.dialogRef.close(value);
  }

  /**
   * on submit information
   * @param form
   */
  onSubmit(form: FormGroup) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to send it to client?'
      }
    });
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        if (form.valid) {
          this._commonCrudService.addData(AdminAPI.INFORMATION_REQUIRED_SEND_INFO_DATA + '/' + this.informationRequired.id, form.value).subscribe(response => {
            this.onClose(true);
            this.onGoDashboard();
          });
        }
      }
    });
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.INFORMATION_REQUIRED]);
  }
}
