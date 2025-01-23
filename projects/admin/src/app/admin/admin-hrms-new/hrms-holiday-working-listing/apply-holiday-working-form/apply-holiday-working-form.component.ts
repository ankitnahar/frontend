import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import {SharedObjService} from "../../../../../utility/shared-service/shared-object.service";
import {SharedService} from "../../../../../utility/shared-service/shared.service";
import {AdminUser} from "../../../../../utility/shared-model/admin-user.model";
import {yesNo} from "../../../../../utility/constants/base-constants";
import {OfficeLocation} from "../../../../../utility/shared-model/designation.model";
import {AdminAPI} from "../../../../../utility/constants/api";
import {Clients} from "../../../client-module/view-client/view-client.model";
import * as moment from "moment";

@Component({
  selector: 'app-apply-holiday-working-form',
  templateUrl: './apply-holiday-working-form.component.html',
  styleUrls: ['./apply-holiday-working-form.component.scss']
})
export class ApplyHolidayWorkingFormComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  userInfo: AdminUser;
  yesNoList = yesNo;
  // Form Variables
  addApplyHolidayworkingLeaveForm: FormGroup;
  locationList: OfficeLocation[] = [];
  clientList: Clients[] = [];
  constructor(private _fb: FormBuilder, private _router: Router,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.userInfo = this._sharedService.getUser();
    // console.log(this.userInfo);
    this.createAddHolidayWorkingForm();
    this.getLocationList();
    this.getClientList();
  }

  // location list API
  getLocationList() {
    this._commonCrudService.listData(AdminAPI.LOCATION, {'records': 'all'}).subscribe(response => {
      this.locationList = response.payload.data;
    });
  }

  onHolidayListing() {
    this._router.navigate([AdminRoutes.APPLY_HOLIDAY_WORKING_LISTING]);
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = response;
    });
  }

  createAddHolidayWorkingForm() {
    this.addApplyHolidayworkingLeaveForm = this._fb.group({
      employee_id: new FormControl(this.userInfo ? this.userInfo.user_bio_id : null),
      location_id: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      start_time: new FormControl('', Validators.required),
      end_time: new FormControl('', Validators.required),
      entity_id: new FormControl('', Validators.required),
      notes: new FormControl('', Validators.required),
      first_approval: new FormControl(this.userInfo && this.userInfo.first_approval_user > 0 ? this.userInfo.first_approval_user : null),
      second_approval: new FormControl(this.userInfo && this.userInfo.second_approval_user > 0 ? this.userInfo.second_approval_user : null)
    });
  }
  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
  /**
   * On Submit Form Group
   * @param form
   */
  onSubmit(form: FormGroup) {
    if (form.valid) {
      form.value['date'] = moment(form.value['date']).format('YYYY-MM-DD');
      this._commonCrudService.addData(AdminAPI.HOLIDAY_WORKING_STORE, form.value).subscribe(Response => {
        this._router.navigate(['/' + AdminRoutes.APPLY_HOLIDAY_WORKING_LISTING]);
      });
    }
  }
}
