import {Component, Inject, OnInit} from '@angular/core';
import {AttendanceSummary} from '../attendance-summary.model';
import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';
import {BASE, hrfinalRemark, hrStatus} from '../../../../../../utility/constants/base-constants';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import * as moment from 'moment';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';

@Component({
  selector: 'app-exception-case-dialog',
  templateUrl: './exception-case-dialog.component.html'
})
export class ExceptionCaseDialogComponent extends BaseComponent implements OnInit {

  attendanceSummaryDetail: AttendanceSummary;
  attendanceSummaryList: AttendanceSummary[] = [];
  userDetail: AdminUser[] = [];
  url = BASE.IMAGE_PATH;
  userData: AdminUser;

  hrfinalRemark = hrfinalRemark;
  hrStatus = hrStatus;
  leaveRequest = [];
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  isSubmitType = 0;

  // Form Variables
  approvalForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ExceptionCaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _sharedService: SharedService, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService) {
    super();
  }

  ngOnInit() {
    this.userData = this._sharedService.getUser();
    this.attendanceSummaryDetail = (this.data.attendanceSummaryData) ? this.data.attendanceSummaryData : [];
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.userDetail = response;
    });
    this.getAttendanceSummaryForLastMonth(this.attendanceSummaryDetail);
    this.createAddEarlyLeavingForm();
  }

  /**
   * Add Early leaving form
   */
  createAddEarlyLeavingForm() {
    if (this.attendanceSummaryDetail.status === 2) {
      this.approvalForm = this._fb.group({
        notify_staff: new FormControl(null),
        reason: new FormControl(null, <any>Validators.required)
      });
    }
    if (this.attendanceSummaryDetail.status === 3 || this.attendanceSummaryDetail.status === 4) {
      this.approvalForm = this._fb.group({
        notify_staff: new FormControl(null),
        comment: new FormControl('', <any>Validators.required)
      });
    }

    if (this.userData.designation_id.designation_id === 7 && this.attendanceSummaryDetail.is_exception === 1) {
      this.approvalForm = this._fb.group({
        notify_staff: new FormControl(null),
        finalremark: new FormControl(null, <any>Validators.required),
        comment: new FormControl('', <any>Validators.required)
      });
    }
  }

  getAttendanceSummaryForLastMonth(detail: AttendanceSummary, reqVal?: string) {
    const monthYear = moment(detail.date).format('YYYY-MM');
    const requestMonthYear = (reqVal) ? reqVal : moment(detail.date).format('YYYY-MM');
    // , 'notequal': {'date': detail.date}
    this._commonCrudService.listData(AdminAPI.ATTENDANCE_SUMMARY_LISTING, {'sortOrder': 'desc', 'sortBy': 'date'},
      {
        'compare': {'equal': {'user_id': detail.user_id}},
        'in': {'status': '3,4,5,6'},
        'dateformat': {'yearmonth': {'date': requestMonthYear}}
      })
      .subscribe((response) => {
        this.attendanceSummaryList = response.payload.data;
      });

    this.leaveRequest = [];
    this.leaveRequest.push({
      'key': monthYear,
      'label': 'Current Month'
    }, {'key': moment(monthYear, 'YYYY-MM').subtract(moment.duration(1, 'month')).format('YYYY-MM'), 'label': 'Last Month'});
    // console.log(this.leaveRequest);
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      form.value['_method'] = 'put';
      const status = this.isSubmitType === 0 ? 6 : 5;
      form.value['id'] = this.attendanceSummaryDetail.id;
      form.value['approval_type'] = 3;
      form.value['status'] = status;
      this._commonCrudService.updateData(AdminAPI.APPROVED_REQUEST, this.attendanceSummaryDetail.id, form.value).subscribe((response) => {
      });
    }
    this.onClose();
  }

  checkButtonBeheviour(val: number) {
    this.isSubmitType = val;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
