import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "../../../../../../utility/components/base/base.component";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ValidationConstantMessage } from "../../../../../../utility/validation";
import { Shift } from "../../shift-list/shift-list.model";
import { AdminAPI } from "../../../../../../utility/constants/api";
import { CommonCrudService } from "../../../../../../utility/shared-service/common-crud.service";
import { ExceptionShift } from "../exception-shift.model";
import * as moment from "moment";
import { AdminUser } from "../../../../../../utility/shared-model/admin-user.model";

@Component({
  selector: "app-add-exception-shift-dialog",
  templateUrl: "./add-exception-shift-dialog.component.html"
})
export class AddExceptionShiftDialogComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  shiftList: Shift[] = [];
  exceptionShiftDetail: ExceptionShift;
  // Form Variables
  addExceptionShiftListForm: FormGroup;

  finalCutOff = "";
  lateAllowTime = "";
  userList: AdminUser[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddExceptionShiftDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.exceptionShiftDetail = (this.data.exceptionshiftData) ? this.data.exceptionshiftData : [];
    this.createExceptionShiftListForm();
    this.getShift();
    this.finalcutoff(this.addExceptionShiftListForm);
    this.lateAllowedTime(this.addExceptionShiftListForm);
    this.getExceptionShiftListUser();
  }

  getExceptionShiftListUser() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      "records": "all",
      "table": "user",
      "column": "id,userfullname",
      "sortOrder": "userfullname",
      "sortBy": "asc"
    }, { "compare": { "equal": { "shift_id": (this.exceptionShiftDetail && this.exceptionShiftDetail.shift_id && this.exceptionShiftDetail.shift_id.id) ? this.exceptionShiftDetail.shift_id.id : 0 } } }).subscribe(Response => {
      this.userList = Response;
      this.userList.map(item => {
        item.userfullname = item.userfullname.toString().trim();
      });
    });
  }

  getShift() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
        "sortOrder": "shift_name",
        "sortBy": "asc",
        "table": "hr_shift_master",
        "column": "id,shift_name"
      },
      {})
      .subscribe((response) => {
        this.shiftList = response;
        // console.log(this.shiftList);
      });
  }

  /**
   * Create filter Master checklist
   */
  createExceptionShiftListForm() {
    // this.exceptionShiftDetail.user_id = "1006,1563,1657,1391,1862";
    this.addExceptionShiftListForm = this._fb.group({
      shift_id: new FormControl((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.shift_id) ? this.exceptionShiftDetail.shift_id.id : null : null, <any>Validators.required),
      start_date: new FormControl((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.start_date) ? this.exceptionShiftDetail.start_date : null : null, <any>Validators.required),
      end_date: new FormControl((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.end_date) ? this.exceptionShiftDetail.end_date : null : null, <any>Validators.required),
      from_time: new FormControl((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.from_time) ? this.exceptionShiftDetail.from_time : null : null, <any>Validators.required),
      to_time: new FormControl((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.to_time) ? this.exceptionShiftDetail.to_time : null : null, <any>Validators.required),
      grace_period: new FormControl((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.grace_period) ? this.exceptionShiftDetail.grace_period : null : null, <any>Validators.required),
      late_period: new FormControl((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.late_period) ? this.exceptionShiftDetail.late_period : null : null, <any>Validators.required),
      late_allowed_count: new FormControl((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.late_allowed_count) ? this.exceptionShiftDetail.late_allowed_count : null : null, <any>Validators.required),
      break_time: new FormControl((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.break_time) ? this.exceptionShiftDetail.break_time : null : null, <any>Validators.required),
      description: new FormControl((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.description) ? this.exceptionShiftDetail.description : null : null),
      user_id: new FormControl((this.exceptionShiftDetail) ? (this.exceptionShiftDetail.user_id) ? this.getArrayToString(this.exceptionShiftDetail.user_id, ",") : null : null)
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  /**
   * Submit AM Notes Form
   * @param form
   */
  onSubmitForm(form: FormGroup) {
    if (form.valid) {
      form.value["start_date"] = moment(form.value["start_date"]).format("YYYY-MM-DD");
      form.value["end_date"] = moment(form.value["end_date"]).format("YYYY-MM-DD");
      if (this.exceptionShiftDetail.id) {
        form.value["_method"] = "put";
        this._commonCrudService.updateData(AdminAPI.EXCEPTIONSHIFT_UPDATE, this.exceptionShiftDetail.id, form.value)
          .subscribe((response) => {
            this.dialogRef.close();
          });
      } else {
        form.value["is_active"] = 1;
        this._commonCrudService.addData(AdminAPI.EXCEPTIONSHIFT_STORE, form.value)
          .subscribe((response) => {
            this.dialogRef.close();
          });
      }
    }
  }

  finalcutoff(form: FormGroup) {
    if (form.value["grace_period"] !== null) {
      const gracePeriod = form.value["grace_period"].split(":");
      const minutes = (Number(gracePeriod[0]) * 60) + Number(gracePeriod[1]);
      this.finalCutOff = moment(form.value["from_time"], "hh:mm").add(moment.duration(minutes, "minutes")).format("hh:mm");
    }
  }

  lateAllowedTime(form: FormGroup) {
    if (form.value["late_period"] !== null) {
      const latePeriod = form.value["late_period"].split(":");
      const minutes = (Number(latePeriod[0]) * 60) + Number(latePeriod[1]);
      this.lateAllowTime = moment(form.value["from_time"], "hh:mm").add(moment.duration(minutes, "minutes")).format("hh:mm");
    }
  }

  /**
   * Get array values from string
   * @param {string} value
   * @param {string} seperator
   * @returns {string[]}
   */
  getArrayToString(value: string, seperator: string) {
    if (value) {
      const valueOne = [];
      value.split(seperator).map(item => {
        valueOne.push(Number(item));
      });
      return valueOne;
    }
  }

  getShiftUsers() {
    if (this.addExceptionShiftListForm.get("shift_id").value > 0) {
      this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
        "records": "all",
        "table": "user",
        "column": "id,userfullname",
        "sortOrder": "userfullname",
        "sortBy": "asc"
      }, { "compare": { "equal": { "shift_id": this.addExceptionShiftListForm.get("shift_id").value } } }).subscribe(Response => {
        this.userList = Response;
        this.userList.map(item => {
          item.userfullname = item.userfullname.toString().trim();
        });
      });
    }
  }
}
