import {Component, OnInit} from '@angular/core';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../utility/validation';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {addTimes, isValidImageType} from '../../../../../../utility/common-functions';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';
import {HrShift} from '../../../../../../utility/shared-model/hour-shift.model';
import {OfficeLocation} from '../../../../../../utility/shared-model/designation.model';
import {AppConstant, BASE, GLOBALDATAKEYS, LeaveAllowFor, ToastType, userType, yesNo} from '../../../../../../utility/constants/base-constants';
import * as moment from 'moment';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ConfirmationDialogComponent} from 'projects/admin/src/utility/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  providers: [CommonCrudService]
})
export class PersonalComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  imageUrl = BASE.IMAGE_PATH;

  userData: AdminUser = null;
  userDetail: AdminUser = null;
  shiftList: HrShift[] = [];
  locationList: OfficeLocation[] = [];
  selectedShift: HrShift = null;
  monthList = LeaveAllowFor;
  avtarFiles = [];
  // Form Group Variables
  personalUserForm: FormGroup;
  isOpenHistoryDialog = false;
  maxDateValue = new Date();
  userTypeList = userType;
  image_url = 'assets/images/user.png';
  yesNoList = yesNo;
  isFood = 0;

  constructor(private _router: Router, private _fb: FormBuilder, private _sharedService: SharedService, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService, private dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    this.userData = this._sharedService.getClientData(GLOBALDATAKEYS.USERS);
    this.maxDateValue = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());
    this.getUserDetail(this.userData.id);
    this.createPersonalUserForm();
    this.getLocationList();
    this.getShiftList();
    const value = {
      url: AdminAPI.ADMIN_USER_HISTORY + '/' + this.userData.id,
      params: {'type': 'user_detail'},
    };
    this._sharedService.setHistoryURL(value);
  }

  onChangeUpdateFoodData(value: any) {
    this.personalUserForm.get("is_food").setValue(null);
    this.personalUserForm.get("is_food").updateValueAndValidity();
    const location = this.locationList.filter(item => item.id === value);
    this.isFood = (location.length && location[0].is_food === 1) ? 1 : 0;
    if (this.isFood === 0) {
      this.personalUserForm.get("is_food").setValue(0);
      this.personalUserForm.get("is_food").updateValueAndValidity();
    }
  }

  getUserDetail(userId: number) {
    this._commonCrudService.getData(AdminAPI.ADMIN_USER, userId).subscribe(response => {
      this.userDetail = response.payload.data;
      if (this.userDetail.user_image) {
        this.image_url = this.imageUrl + this.userDetail.user_image;
      }
      this.createPersonalUserForm();
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
    this._commonCrudService.listData(AdminAPI.LOCATION, {'records': 'all'}, {}).subscribe(Response => {
      this.handleLocationResponse(Response);
    });
  }

  handleLocationResponse(response: any) {
    // assign data to array
    this.locationList = response.payload.data;
    if (this.userDetail && this.userDetail.location_id && this.userDetail.location_id.id > 0) {
      this.onChangeUpdateFoodData(this.userDetail.location_id.id);
    }
  }

  // Create Form Group Event
  createPersonalUserForm() {
    // console.log(this.userDetail);
    this.personalUserForm = this._fb.group({
      user_fname: new FormControl(
        this.userDetail ? this.userDetail.user_fname : '', [<any>Validators.pattern(CommonRegex.ALPHABETICS_REGEXP)]),
      user_lname: new FormControl(
        this.userDetail ? this.userDetail.user_lname : '', [<any>Validators.pattern(CommonRegex.ALPHABETICS_REGEXP)]),
      user_birth: new FormControl(this.userDetail ? new Date(this.userDetail.user_birthdate) : '', <any>Validators.required),
      user_login_name: new FormControl(
        this.userDetail ? this.userDetail.user_login_name : '', [<any>Validators.pattern(CommonRegex.ALPHABETICS_REGEXP)]),
      email: new FormControl(this.userDetail ? this.userDetail.email : '', [<any>Validators.pattern(CommonRegex.EMAIL_ADDRESS_REGEXP)]),
      user_bio_id: new FormControl(this.userDetail ? this.userDetail.user_bio_id : '', [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      is_active: new FormControl(
        this.userDetail ? this.userDetail.is_active.toString() : '', [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      user_timesheet_fillup_flag: new FormControl(this.userDetail ? this.userDetail.user_timesheet_fillup_flag.toString() : '', <any>Validators.required),
      user_writeoff: new FormControl(
        this.userDetail ? this.userDetail.user_writeoff : '', [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      shift_id: new FormControl(this.userDetail ? (this.userDetail.shift_id ? this.userDetail.shift_id.id : '') : '', [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      leave_allow: new FormControl(this.userDetail ? (this.userDetail.leave_allow ? this.userDetail.leave_allow : 0) : null),
      location_id: new FormControl(
        this.userDetail ? (this.userDetail.location_id ? this.userDetail.location_id.id : '') : '', [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      user_joining_date: new FormControl(this.userDetail && this.userDetail.user_joining_date != null ? new Date(this.userDetail.user_joining_date) : '', <any>Validators.required),
      user_type: new FormControl(this.userDetail ? this.userDetail.user_type : '', <any>Validators.required),
      probation_date: new FormControl(this.userDetail && this.userDetail.probation_date != null && this.userDetail.probation_date !== "0000-00-00" ? new Date(this.userDetail.probation_date) : '', (this.userDetail && this.userDetail.user_type === 0) ? <any>Validators.required : ''),
      user_left_date: new FormControl(this.userDetail && this.userDetail.user_left_date != null && this.userDetail.user_left_date !== "0000-00-00" ? new Date(this.userDetail.user_left_date) : ''),
      send_email: new FormControl(this.userDetail ? this.userDetail.send_email : '', <any>Validators.required),
      is_food: new FormControl(this.userDetail ? this.userDetail.is_food : null, <any>Validators.required),
    });
    if (this.userDetail && this.userDetail.shift_id) {
      this.shiftList.map(item => {
        if (+item.id === +this.userDetail.shift_id.id) {
          this.selectedShift = item;
        }
      });
    }

    if (this.userDetail && this.userDetail.location_id && this.userDetail.location_id.id > 0) {
      this.onChangeUpdateFoodData(this.userDetail.location_id.id);
      setTimeout(() => {
        this.personalUserForm.get("is_food").setValue(this.userDetail ? this.userDetail.is_food : null);
        this.personalUserForm.get("is_food").updateValueAndValidity();
      }, 0);
    }
  }

  // Events
  onSubmitPersonalUserForm(formParams: any, isValid: boolean) {
    if (isValid) {
      formParams['user_type'] = (this.userDetail && this.userDetail.user_type === 0) ? 0 : formParams['user_type'];
      formParams['user_birthdate'] = moment(formParams['user_birth']).format('YYYY-MM-DD');
      formParams['user_joining_date'] = moment(formParams['user_joining_date']).format('YYYY-MM-DD');
      formParams['probation_date'] = formParams['probation_date'] != null && formParams['probation_date'] !== "0000-00-00" ? moment(formParams['probation_date']).format('YYYY-MM-DD') : "";
      formParams['user_left_date'] = formParams['user_left_date'] != null && formParams['user_left_date'] !== "0000-00-00" ? moment(formParams['user_left_date']).format('YYYY-MM-DD') : "";
      // formParams['_method'] = 'put';
      if (!this.avtarFiles.length) {
        delete formParams['user_image'];
      }
      this._commonCrudService.updateData(AdminAPI.ADMIN_USER, this.userData.id, formParams, this.avtarFiles).subscribe(Response => {
        this.getUserDetail(this.userData.id);
      });
    }
  }

  onShiftChange(shiftId: number) {
    this.shiftList.map(item => {
      if (+item.id === +shiftId) {
        this.selectedShift = item;
      }
    });
  }

  /**
   * On User Type Change
   * @param type
   */
  onUserTypeChange(type: number) {
    if (type === 0) {
      this.personalUserForm.get("probation_date").setValidators(Validators.required);
      this.personalUserForm.get("probation_date").updateValueAndValidity();
    } else {
      this.personalUserForm.get("probation_date").setValidators(null);
      this.personalUserForm.get("probation_date").updateValueAndValidity();
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
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to remove Profile Image ?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.image_url = "assets/images/user.png";
        this.avtarFiles = [];
      }
    });
  }

  onFileSelect(id) {
    document.getElementById(id).click();
  }

  getFinalCutOf() {
    if (this.selectedShift) {
      return addTimes(this.selectedShift.from_time, this.selectedShift.grace_period);
    }
  }

  getAllowedTime() {
    if (this.selectedShift) {
      return addTimes(this.selectedShift.from_time, this.selectedShift.late_period);
    }
  }

  onManageUser() {
    this._router.navigate([AdminRoutes.MANAGE_USERS]);
  }
}
