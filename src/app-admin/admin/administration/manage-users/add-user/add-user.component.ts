import {Component, OnInit} from '@angular/core';
import {CommonRegex, ValidationConstantMessage} from '../../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/base/base.component';
import {AppLogger} from '../../../../../utility/common-functions';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Group Variables
  addUserForm: FormGroup;

  // Other Variables
  isOpenHistoryDialog = false;
  hide = true;

  constructor(private _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.createPersonalUserForm();
  }

  createPersonalUserForm() {
    this.addUserForm = this._fb.group({
      user_fname: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.ALPHABETICS_REGEXP)]),
      user_lname: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.ALPHABETICS_REGEXP)]),
      user_birthdate: new FormControl('', <any>Validators.required),
      user_login_name: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.ALPHABETICS_REGEXP)]),
      email: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.EMAIL_ADDRESS_REGEXP)]),
      password: new FormControl('', <any>Validators.required),
      user_bio_id: new FormControl('', <any>Validators.required),
      is_active: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      user_timesheet_fillup_flag: new FormControl('', <any>Validators.required),
      user_writeoff: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      shift_id: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      leaveAllowFor: new FormControl('', <any>Validators.required),
      location_id: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
    });
  }

  // Events
  onSubmitAddUserForm(formParams, isValid) {
    if (isValid) {
      AppLogger(formParams);
    }
  }

  onShowHistory() {
    this.isOpenHistoryDialog = true;
  }
}
