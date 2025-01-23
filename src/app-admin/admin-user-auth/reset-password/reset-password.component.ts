import {Component, OnInit} from '@angular/core';
import {ValidationConstantMessage} from '../../../utility/validation';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../utility/base/base.component';
import {AppLogger} from '../../../utility/common-functions';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent extends BaseComponent implements OnInit {
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Group Variables
  resetPasswordForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.createResetPasswordForm();
  }

  createResetPasswordForm() {
    this.resetPasswordForm = this._fb.group({
      newPassword: new FormControl('', [<any>Validators.required]),
      confirmPassword: new FormControl('', [<any>Validators.required])
    }, {
      validator: this.matchPassword
    });
  }

  // Events
  onSubmitResetPasswordForm(formParam, isValid) {
    if (isValid) {
      AppLogger(formParam);
    }
  }

  // Validator

  matchPassword(AC: AbstractControl) {
    const password = AC.get('newPassword').value; // to get value in input tag
    const confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
    if (password !== confirmPassword) {
      AC.get('confirmPassword').setErrors({MatchPassword: true});
    } else {
      return null;
    }
  }
}
