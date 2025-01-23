import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {BaseComponent} from '../../../../../../utility/base/base.component';
import {AppLogger} from '../../../../../../utility/common-functions';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  changePasword: FormGroup;

  // Other Variables

  constructor(private _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.createChangePasswordForm();
  }

  // Create Password Form
  createChangePasswordForm() {
    this.changePasword = this._fb.group({
      new_password: new FormControl('', [<any>Validators.required]),
      confirm_new_password: new FormControl('', [<any>Validators.required])
    }, {
      validator: this.ConfirmPassword
    });
  }

  // Events
  onSubmitChangePassword(formParam, isValid) {
    if (isValid) {
      AppLogger(formParam);
    }
  }

  // Confirm Password Validations
  ConfirmPassword(AC: AbstractControl) {
    const password = AC.get('new_password').value; // to get value in input tag
    let confirmPassword = AC.get('confirm_new_password').value; // to get value in input tag
    if (password !== confirmPassword) {
      AC.get('confirm_new_password').setErrors({ConfirmPassword: true});
    } else {
      return null;
    }
  }
}
