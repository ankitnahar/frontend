import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../utility/base/base.component';
import {CommonRegex, ValidationConstantMessage} from '../../../utility/validation';
import {AppLogger} from '../../../utility/common-functions';
import {LoginService} from './login.service';
import {AdminRoutes} from '../../../utility/constants/admin-route';
import {Router} from '@angular/router';

export enum Views {
  LOGIN_VIEW, FORGOT_EMAIL_VIEW
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})

export class LoginComponent extends BaseComponent implements OnInit {

  // Constant Variables

  validationMsg = new ValidationConstantMessage();
  enumView = Views;
  activeView: Views = this.enumView.LOGIN_VIEW;

  // Form Group Variables

  loginForm: FormGroup;
  forgotEmailForm: FormGroup;

  // Other Variables

  constructor(private _fb: FormBuilder, private _loginRequest: LoginService, private _router:Router) {
    super();
  }

  ngOnInit() {
    this.createLoginForm();
  }

  // Create login form

  createLoginForm() {
    this.loginForm = this._fb.group({
      username: new FormControl('admin', [<any>Validators.required]),
      password: new FormControl('password', [Validators.required])
    });
  }

  // Create forgot email form

  createForgotEmailForm() {
    this.forgotEmailForm = this._fb.group({
      email: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.EMAIL_ADDRESS_REGEXP)])
    });
  }

  // Events

  onSubmitLoginForm(formParam, isValid) {
    if (isValid) {
      this._router.navigate(["/" + AdminRoutes.MANAGE_USERS]);
      AppLogger(formParam);
    }
  }

  onSubmitForgotEmailForm(formParam, isValid) {
    if (isValid) {
      AppLogger(formParam);
    }
  }

  onGoToForgotPassword() {
    this.activeView = this.enumView.FORGOT_EMAIL_VIEW;
    this.createForgotEmailForm();
  }

  onBackToForgotEmail() {
    this.activeView = this.enumView.LOGIN_VIEW;
  }
}
