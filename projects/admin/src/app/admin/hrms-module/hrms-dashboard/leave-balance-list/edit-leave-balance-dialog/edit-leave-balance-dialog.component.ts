import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LeaveBalance} from "../leave-balance.model";
import {BaseComponent} from "../../../../../../utility/components/base/base.component";
import {ValidationConstantMessage} from "../../../../../../utility/validation";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";

@Component({
  selector: 'app-edit-leave-balance-dialog',
  templateUrl: './edit-leave-balance-dialog.component.html'
})
export class EditLeaveBalanceDialogComponent extends BaseComponent implements OnInit {

  // Form Variables
  EditLeaveListForm: FormGroup;
  leaveBalance: LeaveBalance;
  validationMsg = new ValidationConstantMessage();
  constructor(
    public dialogRef: MatDialogRef<EditLeaveBalanceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder,
    private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.leaveBalance = (this.data) ? this.data.leaveBalance : null;
    this.createLeaveBalanceForm();
  }

  /**
   * Update Leave balance Form
   */
  createLeaveBalanceForm() {
    this.EditLeaveListForm = this._fb.group({
      userfullname: new FormControl((this.leaveBalance) ? this.leaveBalance.userfullname : null),
      user_bio_id: new FormControl((this.leaveBalance) ? this.leaveBalance.user_bio_id : null),
      cl: new FormControl((this.leaveBalance) ? this.leaveBalance.cl : null, <any>Validators.required),
      co: new FormControl((this.leaveBalance) ? this.leaveBalance.co : null, <any>Validators.required),
      la: new FormControl((this.leaveBalance) ? this.leaveBalance.la : null, <any>Validators.required),
      month: new FormControl((this.leaveBalance) ? this.leaveBalance.month : null, <any>Validators.required)
    });
  }

  /**
   * On Close
   * @param value
   */
  onClose(value: boolean) {
    this.dialogRef.close(value);
  }

  /**
   * On Submit Form
   * @param form
   */
  onSubmitForm(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.updateDataWithPut(AdminAPI.LEAVE_BALANCE_LIST, this.leaveBalance.id, form.value).subscribe((response) => {
        this.dialogRef.close(true);
      });
    }
  }
}
