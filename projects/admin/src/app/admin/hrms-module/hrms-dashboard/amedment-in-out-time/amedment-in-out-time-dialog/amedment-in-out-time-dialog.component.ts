import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {AmedmentInOutTime} from '../amedment-in-out-time.model';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {ConfirmationDialogComponent} from '../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-amedment-in-out-time-dialog',
  templateUrl: './amedment-in-out-time-dialog.component.html',
})

export class AmedmentInOutTimeDialogComponent extends BaseComponent implements OnInit {
  amedmentDetail: AmedmentInOutTime;
  temp: any;
  amedmentInOutForm: FormGroup;
  status = 0;
  isReject = 0;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AmedmentInOutTimeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _sharedObjService: SharedObjService, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.amedmentDetail = (this.data.amedmentDetail) ? this.data.amedmentDetail : [];
    this.temp = JSON.parse(this.amedmentDetail.rawdata);
    this.createAddChangeInOutTimeForm();
  }


  /**
   * Create filter Master checklist
   */
  createAddChangeInOutTimeForm() {
    this.amedmentInOutForm = this._fb.group({
      reason_for_rejection: new FormControl(null, <any>Validators.required),
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(form: FormGroup) {
    form.value['status'] = this.status;
    form.value['_method'] = 'put';
    if (this.status === 1) {
      const dismissDialog = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          content: 'Are you sure, You want to approve amendment request?'
        }
      });
      dismissDialog.afterClosed().subscribe((value) => {
        if (value) {
          this._commonCrudService.updateData(AdminAPI.AMENDMENTINOUT_UPDATE, this.amedmentDetail.id, form.value).subscribe((response) => {
            this.dialogRef.close();
          });
        }
      });
    } else {
      this._commonCrudService.updateData(AdminAPI.AMENDMENTINOUT_UPDATE, this.amedmentDetail.id, form.value).subscribe((response) => {
        this.dialogRef.close();
      });
    }
  }

  checkApprove(value: number) {
    if (value === 2) {
      this.isReject = 1;
    }
    this.status = value;
  }

  back(value: number) {
    this.isReject = 0;
    this.status = value;
  }
}
