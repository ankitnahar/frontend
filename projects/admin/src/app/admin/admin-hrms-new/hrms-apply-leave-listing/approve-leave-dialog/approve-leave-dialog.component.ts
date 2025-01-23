import {Component, Inject, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {BASE, hrStatus} from '../../../../../utility/constants/base-constants';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import {Leave} from "../../../../../utility/shared-model/leave.model";

@Component({
  selector: 'app-approve-leave-dialog',
  templateUrl: './approve-leave-dialog.component.html'
})
export class ApproveLeaveDialogComponent extends BaseComponent implements OnInit {

  leaveData: Leave;
  url = BASE.IMAGE_PATH;
  userData: AdminUser;
  hrStatus = hrStatus;
  leaveRequest = [];
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  isSubmitType = 0;

  // Form Variables
  approvalForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ApproveLeaveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _sharedService: SharedService, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService) {
    super();
  }

  ngOnInit() {
    this.userData = this._sharedService.getUser();
    this.leaveData = (this.data.leaveDetails) ? this.data.leaveDetails : [];
    this.createAddEarlyLeavingForm();
  }

  /**
   * Add Early leaving form
   */
  createAddEarlyLeavingForm() {
    if (this.leaveData.status_id === 3 || this.leaveData.status_id === 4) {
      this.approvalForm = this._fb.group({
        comment: new FormControl('', <any>Validators.required)
      });
    }

    if (this.userData.designation_id.designation_id === 7) {
      this.approvalForm = this._fb.group({
        comment: new FormControl('', <any>Validators.required)
      });
    }

  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      // form.value['_method'] = 'put';
      if (this.leaveData.status_id === 3 || this.leaveData.status_id === 4) {
        const approval_type = (this.leaveData.status_id === 3) ? 1 : 2;
        const status = this.isSubmitType === 0 ? 6 : (this.leaveData.status_id === 3) ? 4 : 5;
        form.value['id'] = this.leaveData.id;
        form.value['approval_type'] = approval_type;
        form.value['status_id'] = status;
        this._commonCrudService.updateData(AdminAPI.LEAVE_APPROVE, this.leaveData.id, form.value).subscribe((response) => {
        });
      }
      this.onClose(true);
    }
  }

  checkButtonBeheviour(val: number) {
    this.isSubmitType = val;
  }

  onClose(value: boolean): void {
    this.dialogRef.close(value);
  }
}
