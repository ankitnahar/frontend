import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {IPAddress} from '../ip-address.model';
import {access_by} from '../../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../../utility/constants/api';

@Component({
  selector: 'app-add-ip-address-dialog',
  templateUrl: './add-ip-address-dialog.component.html'
})
export class AddIpAddressDialogComponent extends BaseComponent implements OnInit {
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  accessByList = access_by;
  // Form Variables
  addIpAddressForm: FormGroup;
  ipAddress: IPAddress;


  constructor(private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              public dialogRef: MatDialogRef<AddIpAddressDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    super();
  }


  ngOnInit() {
    this.ipAddress = (this.data.ipData) ? this.data.ipData : [];
    this.createAddIpAddressForm();
  }

  /**
   * Create add ip address
   */
  createAddIpAddressForm() {
    let accessBy = '';
    if (this.ipAddress) {
      const val = this.accessByList.filter(elem => elem.label === this.ipAddress.access_by);
      accessBy = (val.length) ? val[0].key : '';
    }
    this.addIpAddressForm = this._fb.group({
      from_ip: new FormControl((this.ipAddress) ? this.ipAddress.from_ip : '', <any>Validators.required),
      to_ip: new FormControl((this.ipAddress) ? this.ipAddress.to_ip : ''),
      access_by: new FormControl((this.ipAddress) ? accessBy : '', <any>Validators.required),
      belongs_to: new FormControl((this.ipAddress) ? this.ipAddress.belongs_to : '', <any>Validators.required),
    });
  }

  /** On Submit Form
   * @param form
   */
  onSubmitIP(form: FormGroup) {
    if (form.valid) {
      if (this.ipAddress.id > 0) {
        form.value['_method'] = 'put';
        this._commonCrudService.updateData(AdminAPI.IPADDRESS_UPDATE, this.ipAddress.id, form.value).subscribe((response) => {
          this.dialogRef.close();
        });
      } else {
        form.value['to_ip'] = (form.value.to_ip === '') ? '0.0.0.0' : form.value.to_ip;
        this._commonCrudService.addData(AdminAPI.IPADDRESS_ADD, form.value).subscribe((response) => {
          this.dialogRef.close();
        });
      }
    }
  }


  onClose(): void {
    this.dialogRef.close();
  }

}
