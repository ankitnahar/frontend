import {Component, HostListener, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../../../../utility/components/base/base.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../../../utility/validation';
import {BillingBasic} from '../../../../../../../../utility/shared-model/billing.model';
import {HostingUser} from '../../hosting.model';
import {activeInactive, hostingUserType} from '../../../../../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../../../utility/shared-service/common-crud.service';

@Component({
  selector: 'app-add-hosting-dialog',
  templateUrl: './add-hosting-dialog.component.html'
})
export class AddHostingDialogComponent extends BaseComponent implements OnInit {

  @Input() billingInformation: BillingBasic;
  @Input() serviceInfo: any;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  hostingAddUserForm: FormGroup;
  hostingUser: HostingUser;
  hostingUserTypeList = hostingUserType;
  activeInactiveList = activeInactive;
  billingInfo: BillingBasic;

  constructor(
    private _commonCrudService: CommonCrudService,
    public dialogRef: MatDialogRef<AddHostingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.hostingUser = (this.data.hostingUserInfo) ? this.data.hostingUserInfo : null;
    this.billingInfo = (this.data.billingInfo) ? this.data.billingInfo : null;
    this.createHostingAddUserForm();
  }

  /**
   * On Change Hosting Type Value update for rate
   * @param value
   */
  changeHostingType(value: string) {
    if (value) {
      const dataItem = this.hostingUserTypeList.filter(item => item.key === value);
      if (dataItem.length) {
        this.hostingAddUserForm.get('rate').setValue(dataItem[0].rate);
      }
    }
  }

  /**
   * Create Hosting User Add / Edit form
   */
  createHostingAddUserForm() {
    this.hostingAddUserForm = this._fb.group({
      username: new FormControl((this.hostingUser) ? this.hostingUser.username : null, <any>Validators.required),
      plan_type: new FormControl((this.hostingUser) ? this.hostingUser.plan_type : null),
      rate: new FormControl((this.hostingUser) ? this.hostingUser.rate : null, [<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
      activedate: new FormControl((this.hostingUser) ? this.hostingUser.activedate : null, <any>Validators.required),
      inactivedate: new FormControl((this.hostingUser) ? this.hostingUser.inactivedate : null),
      is_active: new FormControl((this.hostingUser) ? Number(this.hostingUser.is_active) : null, <any>Validators.required),
      notes: new FormControl((this.hostingUser) ? this.hostingUser.notes : null),
      id: new FormControl((this.hostingUser) ? this.hostingUser.id : null)
    });
  }

  /**
   * Close Dialog
   */
  onClose(): void {
    this.dialogRef.close();
  }

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onClose();
    }
  }

  /**
   * Add / Update Hosting User
   * @param form
   */
  onHostingUserSubmit(form: FormGroup) {
    if (form.valid) {
      form.value['entity_id'] = this.billingInfo.entity_id;
      if (this.hostingUser) {
        this._commonCrudService.updateDataWithPut(AdminAPI.BILLING_HOSTING_USER_LIST, this.hostingUser.id, form.value).subscribe(Response => {
          this.dialogRef.close(true);
        });
      } else {
        delete form.value['id'];
        this._commonCrudService.addData(AdminAPI.BILLING_HOSTING_USER_LIST + '/' + this.billingInfo.entity_id, form.value).subscribe(Response => {
          this.dialogRef.close(true);
        });
      }
    }
  }
}

