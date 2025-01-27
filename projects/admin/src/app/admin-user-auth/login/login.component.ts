import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../utility/components/base/base.component';
import {CommonRegex, ValidationConstantMessage} from '../../../utility/validation';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../utility/shared-service/shared.service';
import {AdminRoutes} from '../../../utility/constants/admin-route';
import {CommonCrudService} from '../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../utility/constants/api';
import {MatDialog} from '@angular/material';
import {JWTBuilder} from '../../../utility/ts-jwt-connector/index';
import {BASE, GLOBALDATAKEYS} from "../../../utility/constants/base-constants";
import {CommonFunctions} from "../../../utility/common-functions";
import {ConfirmationDialogComponent} from "../../../utility/components/confirmation-dialog/confirmation-dialog.component";
import {AdminUser} from "../../../utility/shared-model/admin-user.model";
import * as moment from "moment";

export enum Views {
  LOGIN_VIEW, FORGOT_EMAIL_VIEW
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  enumView = Views;
  activeView: Views = this.enumView.LOGIN_VIEW;

  // Form Group Variables
  loginForm: FormGroup;
  forgotEmailForm: FormGroup;
  currentYear = new Date().getFullYear();
  // State variables
  hide = true;
  formType = 1;
  formView = false;
  userInfo: AdminUser;

  constructor(private _fb: FormBuilder, private route: ActivatedRoute, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService, private _router: Router, public dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    //this.loginCheck().then(res => {
      this.formView = true;
      this.doLoginForm();
   // });
    // Code By : Atri Acharya For Single Sing On From Mini Orange
    // Date : 09/06/2021

    // Code End
  }

  doLoginForm() {
    const jwtBuilder = new JWTBuilder();
    const signedJwt = this._sharedService.getToken();

    this.deleteAllCookies();

    if (signedJwt) {
      this.formType = 0;
      this.createLoginForm();
      jwtBuilder.parseJwt(signedJwt);
      const sharedSecret = BASE.SSO_LOGIN_SHARED_KEY;
      jwtBuilder.setSecret(sharedSecret);
      if (jwtBuilder.verifyJwt()) {
        const payload = jwtBuilder.getPayload();
        const email = payload['email'];
        this.loginForm.get("email").setValue(email);
        this.loginForm.get("token").setValue(signedJwt);
        this.onSubmitLoginForm(this.loginForm);
      }
    } else {
      this.formType = 1;
      // window.location.href = BASE.SSO_LOGIN_URL;
      this.createLoginUserForm();
    }
  }

  async loginCheck() {
    await this._commonCrudService.getData(AdminAPI.CHECKIP_ADDRESS, 0, {}).subscribe(Response => {
      // console.log(Response);
      const status = Number(Response.payload.success);
      const ipAddress = (Response.payload.data) ? Response.payload.data : 0;
      if (status !== 1) {
        this._sharedService.setClientData(GLOBALDATAKEYS.LOGGEDIN_IP, ipAddress);
        this._router.navigate(['/' + AdminRoutes.UNAUTHORIZED]);
      }
    });
  }

  // Create login form
  createLoginForm() {
    this.loginForm = this._fb.group({
      email: new FormControl(),
      token: new FormControl(),
    });
  }

  createLoginUserForm() {
    this.loginForm = this._fb.group({
      user_login_name: new FormControl('', [<any>Validators.required]),
      password: new FormControl('', [Validators.required]),
      is_checked_terms: new FormControl('', [Validators.required])
    });
  }

  // Create forgot email form
  createForgotEmailForm() {
    this.forgotEmailForm = this._fb.group({
      email: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.EMAIL_ADDRESS_REGEXP)])
    });
  }

  // Events
  onSubmitLoginForm(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.addData(AdminAPI.ADMIN_LOGIN, form.value).subscribe(response => {
        this.handleLoginResponse(response);
      });
    }
  }

  // Handle Login Response
  handleLoginResponse(response: any) {
    this._sharedService.setUser(null);
    this._sharedService.setToken(null);
    this._sharedService.setPrivilege(null);
    this._sharedService.setUser(response.payload.user);
    this._sharedService.setToken(response.payload.token);
    this._sharedService.setPrivilege(response.payload.tabs);
    this._sharedService.setLoginRequired(true);
    this.userInfo = this._sharedService.getUser();
    if (!CommonFunctions.isEmpty(this.userInfo)) {
      if (!this.userInfo.office_location) {
        this.onBookYourLunch();
        // this.onCheckFoodStatus();
      } else {
        this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
      }
    }
  }

  OnChangeTerms(value) {
    if (value) {
      this.loginForm.get('is_checked_terms').setValue(1);
      this.loginForm.updateValueAndValidity();
    } else {
      this.loginForm.get('is_checked_terms').setValue(null);
      this.loginForm.updateValueAndValidity();
    }
  }

  onSubmitForgotEmailForm(formParam: any, isValid: boolean) {
    if (isValid) {
      this._commonCrudService.addData(AdminAPI.ADMIN_FORGOT_PASSWORD, formParam).subscribe(response => {
        this.onBackToForgotEmail();
      });
    }
  }

  onGoToForgotPassword() {
    this.activeView = this.enumView.FORGOT_EMAIL_VIEW;
    this.createForgotEmailForm();
  }

  onBackToForgotEmail() {
    this.activeView = this.enumView.LOGIN_VIEW;
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  // onCheckFoodStatus() {
  //   const dateItem = moment(this.userInfo.food_next_date).format("DD-MM-YYYY");
  //   const dateItemDay = moment(this.userInfo.food_next_date).format("dddd");

  //   const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
  //     data: {
  //       content: 'Do you want to book your lunch for ' + dateItem + '(' + dateItemDay + ')? Kindly select the appropriate option and proceed.',
  //     },
  //     disableClose: true
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.onBookYourLunch();
  //     } else {
  //       this.onNoOpenOtherConfirm();
  //     }
  //   });
  // }

  onNoOpenOtherConfirm() {
    const dateItem = moment(this.userInfo.food_next_date).format("DD-MM-YYYY");
    const dateItemDay = moment(this.userInfo.food_next_date).format("dddd");

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you do not want to book the food for  ' + dateItem + '(' + dateItemDay + ')?'
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const param = {};
        param['method'] = '_put';
        this._commonCrudService.updateData(AdminAPI.BOOK_FOOD_USER_INFO, this.userInfo.id, param).subscribe(Response => {
          this.userInfo.food_next_date = "";
          this._sharedService.setUser(this.userInfo);
          this.onGoDashboard();
        });
      } else {
        this.onBookYourLunch();
        // this.onCheckFoodStatus();
      }
    });
  }

  onBookYourLunch() {
    
  }

  onTerms() {
    
  }

  deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    localStorage.clear();
    sessionStorage.clear();
  }

}
