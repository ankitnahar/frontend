import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {Shift} from '../shift-list.model';
import * as moment from 'moment';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {hrSat} from "../../../../../../utility/constants/base-constants";
import {Department} from "../../../../../../utility/shared-model/designation.model";

@Component({
  selector: 'app-add-shift-list-dialog',
  templateUrl: './add-shift-list-dialog.component.html'
})
export class AddShiftListDialogComponent extends BaseComponent implements OnInit {

  shiftDetail: Shift;
  shiftListData: Shift[] = [];
  finalCutOff = '';
  lateAllowTime = '';
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  satOffList = hrSat.slice(1);

  // Form Variables
  addShiftListForm: FormGroup;
  departmentList: Department[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddShiftListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.shiftDetail = (this.data.shiftData) ? this.data.shiftData : [];
    this.shiftListData = (this.data.shiftListData) ? this.data.shiftListData : [];
    this.getDepartmentList();
    this.createAddShiftListForm();
    this.finalcutoff(this.addShiftListForm);
    this.lateAllowedTime(this.addShiftListForm);
  }

  getDepartmentList() {
    this._commonCrudService.listData(AdminAPI.DEPARTMENT, {'records': 'all'}).subscribe(Response => {
      this.departmentList = Response.payload.data;
    });
  }

  /**
   * Create filter Master checklist
   */
  createAddShiftListForm() {
    this.addShiftListForm = this._fb.group({
      shift_name: new FormControl((this.shiftDetail) ? (this.shiftDetail.shift_name) ? this.shiftDetail.shift_name : null : null, <any>Validators.required),
      from_time: new FormControl((this.shiftDetail) ? (this.shiftDetail.from_time) ? this.shiftDetail.from_time : null : null, <any>Validators.required),
      to_time: new FormControl((this.shiftDetail) ? (this.shiftDetail.to_time) ? this.shiftDetail.to_time : null : null, <any>Validators.required),
      grace_period: new FormControl((this.shiftDetail) ? (this.shiftDetail.grace_period) ? this.shiftDetail.grace_period : null : null, <any>Validators.required),
      late_period: new FormControl((this.shiftDetail) ? (this.shiftDetail.late_period) ? this.shiftDetail.late_period : null : null, <any>Validators.required),
      late_allowed_count: new FormControl((this.shiftDetail) ? (this.shiftDetail.late_allowed_count) ? this.shiftDetail.late_allowed_count : null : null, <any>Validators.required),
      break_time: new FormControl((this.shiftDetail) ? (this.shiftDetail.break_time) ? this.shiftDetail.break_time : null : null, <any>Validators.required),
      holiday_shift_id: new FormControl((this.shiftDetail) ? (this.shiftDetail.holiday_shift_id) ? this.shiftDetail.holiday_shift_id : null : null),
      // email_cc: new FormControl(),
      description: new FormControl((this.shiftDetail) ? (this.shiftDetail.description) ? this.shiftDetail.description : null : null),
      sat_off: new FormControl((this.shiftDetail) ? (this.shiftDetail.sat_off) ? this.shiftDetail.sat_off : null : null)
    });
  }


  onSubmit(form: FormGroup) {
    if (form.valid) {
      form.value['from_time'] = moment(form.value['from_time'], ['h:mm A']).format('HH:mm');
      form.value['to_time'] = moment(form.value['to_time'], ['h:mm A']).format('HH:mm');
      form.value['grace_period'] = moment(form.value['grace_period'], ['h:mm A']).format('HH:mm');
      form.value['late_period'] = moment(form.value['late_period'], ['h:mm A']).format('HH:mm');
      form.value['break_time'] = moment(form.value['break_time'], ['h:mm A']).format('HH:mm');
      form.value['is_active'] = 1;

      if (this.shiftDetail.id) {
        form.value['_method'] = 'put';
        form.value['actionType'] = 0;
        this._commonCrudService.updateData(AdminAPI.SHIFT_UPDATE, this.shiftDetail.id, form.value).subscribe((response) => {
          this.dialogRef.close(true);
        });

      } else {
        this._commonCrudService.addData(AdminAPI.SHIFT_STORE, form.value).subscribe((response) => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  onClose(value: boolean): void {
    this.dialogRef.close(value);
  }

  finalcutoff(form: FormGroup) {
    if (form.value['grace_period'] !== null) {
      const gracePeriod = form.value['grace_period'].split(':');
      const minutes = (Number(gracePeriod[0]) * 60) + Number(gracePeriod[1]);
      this.finalCutOff = moment(form.value['from_time'], 'hh:mm').add(moment.duration(minutes, 'minutes')).format('hh:mm');
    }
  }

  lateAllowedTime(form: FormGroup) {
    if (form.value['late_period'] !== null) {
      const latePeriod = form.value['late_period'].split(':');
      const minutes = (Number(latePeriod[0]) * 60) + Number(latePeriod[1]);
      this.lateAllowTime = moment(form.value['from_time'], 'hh:mm').add(moment.duration(minutes, 'minutes')).format('hh:mm');
    }
  }
}
