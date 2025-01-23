import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EarlyLeavingDialogComponent} from '../../early-leaving-dialog/early-leaving-dialog.component';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../../../utility/validation';
import {UserPendingTimesheet} from '../../user-pending-timesheet/user-pending-timesheet.model';
import {BASE, pendingTimesheetStage} from '../../../../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';

@Component({
  selector: 'app-approve-miss-timesheet-dialog',
  templateUrl: './approve-miss-timesheet-dialog.component.html'
})
export class ApproveMissTimesheetDialogComponent extends BaseComponent implements OnInit {

  pendingTimesheetData: UserPendingTimesheet;
  stageList = pendingTimesheetStage;
  url = BASE.IMAGE_PATH;
  isSubmit = 0;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  approveTimesheetForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EarlyLeavingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.pendingTimesheetData = (this.data.UserPendingTimesheetData) ? this.data.UserPendingTimesheetData : null;
    // console.log(this.pendingTimesheetData);
    this.createApproveTimesheetForm();
  }

  /**
   * Add Early leaving form
   */
  createApproveTimesheetForm() {
    if (this.pendingTimesheetData.stage_id === 1) {
      this.approveTimesheetForm = this._fb.group({
        approvalusername: new FormControl(this.pendingTimesheetData.assignee.timesheet_approval_user.userfullname),
        requestusername: new FormControl(this.pendingTimesheetData.assignee.userfullname),
        approvalemail: new FormControl(this.pendingTimesheetData.assignee.timesheet_approval_user.email),
        date: new FormControl(this.pendingTimesheetData.date),
        approvalperson_id: new FormControl(this.pendingTimesheetData.assignee.timesheet_approval_user.id),
        currentStage: new FormControl(this.pendingTimesheetData.stage_id)
      });
    } else {
      this.approveTimesheetForm = this._fb.group({
        comments: new FormControl('', <any>Validators.required)
      });
    }
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      form.value['_method'] = 'put';
      if (form.value['currentStage'] === 1) {
        this._commonCrudService.updateData(AdminAPI.PENDINGTIMESHEET_SENDAPPROVAL, this.pendingTimesheetData.id, form.value).subscribe((response) => {
          this.dialogRef.close();
        });
      } else {
        form.value['approval_comment'] = form.value['comments'];
        form.value['action'] = this.isSubmit;
        this._commonCrudService.updateData(AdminAPI.PENDINGTIMESHEET_APPROVED, this.pendingTimesheetData.id, form.value).subscribe((response) => {
          this.dialogRef.close();
        });
      }
      this.onClose();
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  /**
   *  Return pending timesheet stage
   * @param stageId
   */
  getStageName(stageId: number): string {
    const val = this.stageList.filter(elem => elem.key === stageId);
    return (val.length) ? val[0].label : '';
  }

  checkSubmitValue(val: number) {
    this.isSubmit = val;
  }
}
