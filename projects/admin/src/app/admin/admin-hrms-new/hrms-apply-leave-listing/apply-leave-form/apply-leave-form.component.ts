import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import {SharedObjService} from "../../../../../utility/shared-service/shared-object.service";
import {SharedService} from "../../../../../utility/shared-service/shared.service";
import {AdminUser} from "../../../../../utility/shared-model/admin-user.model";
import * as moment from 'moment';
import {halfDayList, halfDayOrFullDay, yesNo} from "../../../../../utility/constants/base-constants";
import {AdminAPI} from "../../../../../utility/constants/api";
import {LeaveType} from "../../../../../utility/shared-model/leave.model";

@Component({
  selector: 'app-apply-leave-form',
  templateUrl: './apply-leave-form.component.html',
  styleUrls: ['./apply-leave-form.component.scss']
})
export class ApplyLeaveFormComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  addApplyLeaveForm: FormGroup;
  userInfo: AdminUser;
  yesNoList = yesNo;
  halfDayOrFullDayList = halfDayOrFullDay;
  halfDayListData = halfDayList;
  leaveType: LeaveType[] = [];
  endDateValue = new Date();
  startDateValue = new Date();
  currentDate = new Date();
  constructor(private _fb: FormBuilder, private _router: Router,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.userInfo = this._sharedService.getUser();
    // console.log(this.userInfo);
    this.getHRLeaveType();
    this.createAddLeaveListingForm();
  }

  // hr_leave_type
  getHRLeaveType() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      'table': 'hr_leave_type',
      'column': 'id,leave_type'
    }, {}).subscribe(response => {
      this.leaveType = response;
    });
  }

  onLeaveListing() {
    this._router.navigate([AdminRoutes.APPLY_LEAVE_LISTING]);
  }

  createAddLeaveListingForm() {
    this.addApplyLeaveForm = this._fb.group({
      employee_id: new FormControl(this.userInfo ? this.userInfo.user_bio_id : null),
      leave_type: new FormControl('', Validators.required),
      from_date: new FormControl('', Validators.required),
      to_date: new FormControl('', Validators.required),
      date_select: this._fb.array([]),
      inform_team: new FormControl('', Validators.required),
      anything_due: new FormControl('', [Validators.required]),
      weekly_task: new FormControl('', [Validators.required]),
      anything_due_comments: new FormControl('', [Validators.required]),
      leave_reason: new FormControl('', [Validators.required]),
      first_approval: new FormControl(this.userInfo && this.userInfo.first_approval_user > 0 ? this.userInfo.first_approval_user : null),
      second_approval: new FormControl(this.userInfo && this.userInfo.second_approval_user > 0 ? this.userInfo.second_approval_user : null)
    });
  }

  /**
   * Get Date Array
   */
  getDateArray(): FormArray {
    return <FormArray>this.addApplyLeaveForm.get('date_select');
  }

  /**
   * Create Date Detail Item
   * @param item
   */
  createDateItem(item ?: any) {
    return this._fb.group({
      leave_date: new FormControl(item ? item.leave_date : '', Validators.required),
      date_value: new FormControl(item ? item.date_value : 1, Validators.required),
      half_day_type: new FormControl(item ? item.half_day_type : null, (item && item.date_value === 0) ? Validators.required : null)
    });
  }

  getDateRange() {
    this.getDateArray().controls = [];
    if (this.addApplyLeaveForm.get('leave_type').value !== 4) {
      const startDate = this.addApplyLeaveForm.get('from_date').value;
      const endDate = this.addApplyLeaveForm.get('to_date').value;
      const dates = [];
      if (startDate != null && endDate != null) {
        const currDate = moment(startDate).startOf('day');
        const lastDate = moment(endDate).startOf('day');
        while (currDate.isSameOrBefore(endDate)) {
          dates.push(currDate.format('DD-MM-YYYY'));
          currDate.add(1, 'days');
        }
      }
      if (dates.length) {
        dates.forEach(item => {
          const valItem = {};
          valItem['leave_date'] = item;
          valItem['date_value'] = 1;
          this.getDateArray().push(this.createDateItem(valItem));
        });
      }
    }
  }

  getSetMinMaxDate() {
    const startDate = this.addApplyLeaveForm.get('from_date').value;
    if (this.addApplyLeaveForm.get('leave_type').value !== 4) {
      this.startDateValue = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
      this.endDateValue = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 29);
    } else {
      this.startDateValue = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
      this.endDateValue = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 180);
    }
  }

  /**
   * On Submit Form Group
   * @param form
   */
  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log(form.value['date_select']);
      form.value['from_date'] = moment(form.value['from_date']).format('YYYY-MM-DD');
      form.value['to_date'] = moment(form.value['to_date']).format('YYYY-MM-DD');
      if (form.value['date_select'].length > 0) {
        form.value['date_select'].map(item => {
          item['leave_date'] = item['leave_date'] !== null ? moment(item['leave_date'], "DD-MM-YYYY").format('YYYY-MM-DD') : null;
        });
      }
      form.value['date_select'] = form.value['date_select'].length > 0 ? JSON.stringify(form.value['date_select']) : "";
      this._commonCrudService.addData(AdminAPI.LEAVE_STORE, form.value).subscribe(Response => {
        this._router.navigate(['/' + AdminRoutes.APPLY_LEAVE_LISTING]);
      });
    }
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * On Change Update
   * @param value
   */
  onChangeUpdate(value: any) {
    this.addApplyLeaveForm.get("from_date").setValue(null);
    this.addApplyLeaveForm.get("from_date").updateValueAndValidity();
    this.addApplyLeaveForm.get("to_date").setValue(null);
    this.addApplyLeaveForm.get("to_date").updateValueAndValidity();
    this.getDateArray().controls = [];
  }
}
