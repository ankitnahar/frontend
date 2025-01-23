import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {GLOBALDATAKEYS, INVOICEPDFDATA} from '../../../../../utility/constants/base-constants';
import {DebtorsManagement, DebtorsTemplate} from '../debtors-management.model';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {ChecklistEmailPreviewDialogComponent} from '../../../workflow-module/worksheet-module/worksheet-dashboard-action/checklist-email-preview-dialog/checklist-email-preview-dialog.component';
import {MatDialog} from '@angular/material';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {BaseComponent} from '../../../../../utility/components/base/base.component';

declare var tinymce: any;

@Component({
  selector: 'app-debtors-management-email-template',
  templateUrl: './debtors-management-email-template.component.html',
  styleUrls: ['./debtors-management-email-template.component.scss']
})

export class DebtorsManagementEmailTemplateComponent extends BaseComponent implements OnInit {

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };
  // Form Variables
  emailParametersForm: FormGroup;
  debtorsManagement: DebtorsManagement;
  debtorsTemplate: DebtorsTemplate[] = [];
  selectedUser = [];
  validationMsg = new ValidationConstantMessage();
  userList: AdminUser[] = [];
  public show: boolean = false;
  billingID = INVOICEPDFDATA.BILLINGID;

  constructor(private _fb: FormBuilder, public _router: Router, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              private _sharedObjService: SharedObjService, public dialog: MatDialog) {
    super();

  }

  ngOnInit() {
    const DMData = this._sharedService.getClientData(GLOBALDATAKEYS.DEBTORS_MANAGEMENT);
    this.debtorsManagement = DMData;
    this.getDebtorsTemplateList();
    this.emailForm();
    this.getUserList();
  }

  /**
   * Email Form
   */
  emailForm() {
    this.emailParametersForm = this._fb.group({
      from_email: new FormControl(this.billingID, <any>Validators.required),
      entity_id: new FormControl(this.debtorsManagement.entity_id),
      to: new FormControl(this.debtorsManagement.to_email, <any>Validators.required),
      cc: new FormControl(this.debtorsManagement.cc_email),
      subject: new FormControl(null, <any>Validators.required),
      content: new FormControl(null, <any>Validators.required),
      template_type: new FormControl(null, <any>Validators.required)
    });
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.userList = response;
    });
  }

  /**
   * Get Debtors Template List
   */
  getDebtorsTemplateList() {
    this._commonCrudService.listData(AdminAPI.DEBTORS_MANAGEMENT_TEMPLATE_LIST, {'records': 'all'}, {}).subscribe((response) => {
      if (response) {
        this.debtorsTemplate = response.payload.data;
      }
    });
  }

  /**
   *
   * @param template_id
   * @constructor
   */
  OnChangeGetDebtorsTemplateData(template_id: number) {
    this._commonCrudService.getData(AdminAPI.DEBTORS_MANAGEMENT_MAIL_DATA, 0, {
      'entity_id': this.debtorsManagement.entity_id,
      'template_id': template_id
    }).subscribe((response) => {
      if (response) {
        (response.payload.subject) ? this.emailParametersForm.get('subject').setValue(response.payload.subject) : this.emailParametersForm.get('subject').setValue(null);
        (response.payload.content) ? this.emailParametersForm.get('content').setValue(response.payload.content) : this.emailParametersForm.get('content').setValue(null);
      }
    });
  }

  /**
   * On Submit Debtors Email
   */
  submitDebtorsForm(form: FormGroup) {
    if (form.valid) {
      let formValue = {};
      let bccEmail = '';
      if (this.selectedUser.length > 0) {
        bccEmail = this.billingID + ',' + this.selectedUser.join(',');
      } else {
        bccEmail = this.billingID;
      }
      formValue['from_email'] = this.billingID;
      formValue['to'] = form.value['to'];
      formValue['cc'] = form.value['cc'];
      formValue['bcc'] = bccEmail;
      formValue['subject'] = form.value['subject'];
      formValue['content'] = form.value['content'];
      formValue['entity_id'] = form.value['entity_id'];
      formValue['template_type'] = form.value['template_type'];
      this._commonCrudService.addData(AdminAPI.DEBTORS_MANAGEMENT_LIST, formValue).subscribe((response) => {
        this.onDebtorsManagement();
      });
    }
  }

  /**
   * On invoice redirection
   */
  onDebtorsManagement() {
    this._router.navigate(['/' + AdminRoutes.DEBTORS_MANAGEMENT]);
  }

  showBcc() {
    this.show = !this.show;
  }

  handleEvent(event) {
    // console.log(event);

  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * On Previewe Dialog
   */
  onPreviewDialog() {
    const contentData = tinymce.activeEditor.getContent();
    // console.log(contentData);
    const dialogRef = this.dialog.open(ChecklistEmailPreviewDialogComponent, {
      panelClass: 'lg-dialog--container',
      data: {
        emailContentData: contentData
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
