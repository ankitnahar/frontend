import {Component, OnInit} from '@angular/core';
import {CommonRegex, ValidationConstantMessage} from '../../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {addTimes, isValidImageType} from '../../../../../utility/common-functions';
import {AppConstant, LeaveAllowFor, ToastType} from '../../../../../utility/constants/base-constants';
import {HrShift} from '../../../../../utility/shared-model/hour-shift.model';
import {OfficeLocation} from '../../../../../utility/shared-model/designation.model';
import * as moment from 'moment';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  providers: [CommonCrudService]
})
export class AddUserComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // data variable
  shiftList: HrShift[] = [];
  locationList: OfficeLocation[] = [];
  selectedShift: HrShift = null;
  monthList = LeaveAllowFor;
  avtarFiles = [];
  image_url = 'assets/images/user.png';

  // Form Group Variables
  addUserForm: FormGroup;

  // Other Variables
  hide = true;
  maxDateValue = new Date();

  constructor(private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService,
              private _router: Router, private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.maxDateValue = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());
    this.createPersonalUserForm();
    this.getLocationList();
    this.getShiftList();
  }

  createPersonalUserForm() {
    this.addUserForm = this._fb.group({
      user_fname: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.ALPHABETICS_REGEXP)]),
      user_lname: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.ALPHABETICS_REGEXP)]),
      user_birth: new FormControl('', <any>Validators.required),
      user_login_name: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.ALPHABETICS_REGEXP)]),
      email: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.EMAIL_ADDRESS_REGEXP)]),
      user_bio_id: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      is_active: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      user_timesheet_fillup_flag: new FormControl('', <any>Validators.required),
      user_writeoff: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      shift_id: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      leave_allow: new FormControl(null),
      location_id: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      user_joining_date: new FormControl('', <any>Validators.required),
    });
  }

  // shift listing API
  getShiftList() {
    this._sharedObjService.getShiftList({'records': 'all'}, {}).subscribe(Response => {
      this.handleShiftResponse(Response);
      this.createPersonalUserForm();
    });
  }

  handleShiftResponse(response: any) {
    // assign data to array
    this.shiftList = response;
  }

  // location list API
  getLocationList() {
    this._commonCrudService.listData(AdminAPI.LOCATION, {'records': 'all'}).subscribe(Response => {
      this.handleLocationResponse(Response);
    });
  }

  handleLocationResponse(response: any) {
    // assign data to array
    this.locationList = response.payload.data;
  }

  // Events
  onShiftChange(shiftId: number) {
    this.shiftList.map(item => {
      if (+item.id === +shiftId) {
        this.selectedShift = item;
      }
    });

  }

  onSubmitAddUserForm(formParams, isValid: boolean) {
    // console.log(formParams, this.avtarFiles);
    if (isValid) {
      formParams['user_birthdate'] = moment(formParams['user_birth']).format('YYYY-MM-DD');
      formParams['user_joining_date'] = moment(formParams['user_joining_date']).format('YYYY-MM-DD');
      this._commonCrudService.addData(AdminAPI.ADMIN_USER, formParams, this.avtarFiles).subscribe(Response => {
        this._router.navigate(['/' + AdminRoutes.MANAGE_USERS]);
      });
    }
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      this.avtarFiles = [];
      if (isValidImageType(event.target.files[0].type)) {
        if (event.target.files[0].size > AppConstant.THREE_MB_IMAGE_SIZE_ALLOWED) {
          this._sharedService.setToastMessage(this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, ToastType.ERROR);
        } else {
          const file = event.target.files[0];
          const reader = new FileReader();
          reader.onloadend = (loadEvent: any) => {
            this.image_url = loadEvent.target.result;
            const image = new Image();
            image.src = this.image_url;
            this.avtarFiles.push({'reqKey': 'user_image', 'file': event.target.files});
          };
          reader.readAsDataURL(file);
        }
      } else {
        this._sharedService.setToastMessage(this.validationMsg.VALID_IMAGE_TYPE, ToastType.ERROR);
      }
    }
  }

  removeImage() {
    this.image_url = 'assets/images/user.png';
    this.avtarFiles = [];
  }

  onFileSelect(id) {
    document.getElementById(id).click();
  }

  getFinalCutOf() {
    if (this.selectedShift) {
      return addTimes(this.selectedShift.from_time, this.selectedShift.grace_period);
    } else {
      return null;
    }
  }

  getAllowedTime() {
    if (this.selectedShift) {
      return addTimes(this.selectedShift.from_time, this.selectedShift.late_period);
    } else {
      return null;
    }
  }

  onManageUser() {
    this._router.navigate([AdminRoutes.MANAGE_USERS]);
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
