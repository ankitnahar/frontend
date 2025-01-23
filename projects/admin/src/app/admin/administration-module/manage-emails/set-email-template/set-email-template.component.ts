import {Component, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {ManageEmails} from '../manage-emails.model';
import {GLOBALDATAKEYS} from '../../../../../utility/constants/base-constants';

@Component({
  selector: 'app-set-email-template',
  templateUrl: './set-email-template.component.html',
  styleUrls: ['./set-email-template.component.scss']
})

export class SetEmailTemplateComponent implements OnInit {

  // Form Variables
  emailTemplateForm: FormGroup;
  manageEmail: ManageEmails;
  subject = null;

  constructor(private _fb: FormBuilder, public _router: Router,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.manageEmail = this._sharedService.getClientData(GLOBALDATAKEYS.MANAGE_EMAIL);
    this.subject = this.manageEmail.subject;
    this.createSetEmailTemplateForm();
  }

  /**
   * Create Form
   */
  createSetEmailTemplateForm() {
    // console.log(this.manageEmail.content);
    this.emailTemplateForm = this._fb.group({
      content: new FormControl(this.manageEmail.content)
    });
  }

  onManageEmails() {
    this._router.navigate(['/' + AdminRoutes.MANAGE_EMAILS]);
  }

  /** On Submit Form
   * @param form
   */
  onSubmitEmail(form: FormGroup) {
    form.value['_method'] = 'put';
    form.value['is_detail'] = '1';
    form.value['is_active'] = this.manageEmail.is_active;
    form.value['subject'] = this.manageEmail.subject;
    if (form.valid) {
      this._commonCrudService.updateData(AdminAPI.MANAGEEMAIL_UPDATE, this.manageEmail.id, form.value).subscribe((response) => {
        this._router.navigate(['/' + AdminRoutes.MANAGE_EMAILS]);
      });

    }
  }

}
