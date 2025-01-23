import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {GLOBALDATAKEYS} from '../../../../../../utility/constants/base-constants';
import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  providers: [CommonCrudService]
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

  constructor(private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.userData = this._sharedService.getClientData(GLOBALDATAKEYS.USERS);
    this.createChangePasswordForm();

    const value = {
      url: AdminAPI.ADMIN_USER_HISTORY + '/' + this.userData.id,
      params: {'type': 'change_password'},
    };
    this._sharedService.setHistoryURL(value);
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
        this.createChangePasswordForm();
      });
    }
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
