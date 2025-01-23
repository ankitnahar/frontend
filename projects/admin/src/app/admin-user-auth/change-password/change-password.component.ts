import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminAPI} from '../../../utility/constants/api';
import {CommonCrudService} from '../../../utility/shared-service/common-crud.service';
import {ValidationConstantMessage} from '../../../utility/validation';
import {AdminUser} from '../../../utility/shared-model/admin-user.model';
import {SharedService} from '../../../utility/shared-service/shared.service';
import {SharedUserService} from '../../../utility/shared-service/shared-user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {BaseComponent} from '../../../utility/components/base/base.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  userData: AdminUser = null;
  // Form Variables
  changePasword: FormGroup;

  // Other Variables
  hide = true;
  hideConfirm = true;

  constructor(public dialogRef: MatDialogRef<ChangePasswordComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedService: SharedService,
              private _sharedUserService: SharedUserService
  ) {
    super();
  }

  ngOnInit() {
    this.userData = this._sharedService.getUser();
    this.createChangePasswordForm();
  }

  // Create Password Form
  createChangePasswordForm() {
    this.changePasword = this._fb.group({
      password: new FormControl('', [<any>Validators.required]),
      confirm_password: new FormControl('', [<any>Validators.required])
    }, {
      validator: this.ConfirmPassword
    });
  }

  // Events
  onSubmitChangePassword(formParam: any, isValid: boolean) {
    if (isValid) {
      formParam['method'] = '_put';
      this._commonCrudService.updateData(AdminAPI.CHANGE_PASSWORD, this.userData.id, formParam).subscribe(Response => {
        this.onClose();
        this.onLogout();
      });
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onLogout() {
    this._commonCrudService.addData(AdminAPI.LOGOUT, {}).subscribe(Response => {
      this._sharedUserService.setUser(null);
      this._sharedService.logout();
    });
  }

  // Confirm Password Validations
  ConfirmPassword(AC: AbstractControl) {
    const password = AC.get('password').value; // to get value in input tag
    const confirmPassword = AC.get('confirm_password').value; // to get value in input tag
    if (password !== confirmPassword) {
      AC.get('confirm_password').setErrors({ConfirmPassword: true});
    } else {
      return null;
    }
  }
}
