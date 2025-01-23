import {Component, Inject, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AttendanceSummaryReport} from "../attendance-summary-report.model";
import {AdminAPI} from "../../../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../../../utility/shared-service/common-crud.service";

@Component({
  selector: 'app-leave-adjust-dialog',
  templateUrl: './leave-adjust-dialog.component.html'
})
export class LeaveAdjustDialogComponent extends BaseComponent implements OnInit {

  // Form Variables
  laveAdjustmentForm: FormGroup;
  attendanceSummaryReport: AttendanceSummaryReport;

  constructor(
    public dialogRef: MatDialogRef<LeaveAdjustDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.attendanceSummaryReport = (this.data) ? this.data.attendanceSummaryReport : null;
    this.createLaveAdjustmentForm();
  }

  /**
   * Add Leave adjustment form
   */
  createLaveAdjustmentForm() {
    this.laveAdjustmentForm = this._fb.group({
      adjustment: new FormControl(null, [Validators.required, Validators.max(Number(this.attendanceSummaryReport.userAbsent))]),
      reason: new FormControl(null, Validators.required),
    });
  }

  onClose(value: boolean): void {
    this.dialogRef.close(value);
  }

  /**
   * On Submit Form
   * @param form
   */
  onSubmit(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.updateData(AdminAPI.LEAVE_ADJUSTMENT_REQUEST, this.attendanceSummaryReport.id, form.value).subscribe((response) => {
        this.onClose(true);
      });
    }
  }
}
