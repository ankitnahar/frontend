import {Component, OnInit} from '@angular/core';
import {ValidationConstantMessage} from '../../../utility/validation';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../utility/components/base/base.component';
import {convertURLParamToDecode} from '../../../utility/common-functions';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminAPI} from '../../../utility/constants/api';
import {CommonCrudService} from '../../../utility/shared-service/common-crud.service';
import {AdminRoutes} from '../../../utility/constants/admin-route';

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
  currentDate = new Date();
  // State variables
  hide = true;
  hideConfirm = true;
  token = null;

  constructor(private _fb: FormBuilder, public route: ActivatedRoute,
              private _commonCrudService: CommonCrudService,
              private _router: Router) {
    super();
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        const dataItem = convertURLParamToDecode(params);
        // console.log(dataItem);
        if (dataItem) {
          if (dataItem['token']) {
            this.token = dataItem['token'];
          }
        }
      });
    this.createResetPasswordForm();
  }

  createResetPasswordForm() {
    this.resetPasswordForm = this._fb.group({
      password: new FormControl('', [<any>Validators.required]),
      confirm_password: new FormControl('', [<any>Validators.required])
    }, {
      validator: this.matchPassword
    });
  }

  // Events
  onSubmitResetPasswordForm(from: FormGroup) {
    from.value['token'] = this.token;
    if (from.valid) {
      this._commonCrudService.addData(AdminAPI.ADMIN_RESET_PASSWORD, from.value).subscribe(response => {
        this._router.navigate(['/' + AdminRoutes.LOGIN]);
      });
    }
  }

  // Validator

  matchPassword(AC: AbstractControl) {
    const password = AC.get('password').value; // to get value in input tag
    const confirmPassword = AC.get('confirm_password').value; // to get value in input tag
    if (password !== confirmPassword) {
      AC.get('confirm_password').setErrors({MatchPassword: true});
    } else {
      return null;
    }
  }
}
