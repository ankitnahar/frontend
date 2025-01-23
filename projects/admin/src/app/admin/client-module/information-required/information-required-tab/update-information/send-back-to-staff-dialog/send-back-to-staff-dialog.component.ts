import {Component, Inject, OnInit} from '@angular/core';
import {ValidationConstantMessage} from "../../../../../../../utility/validation";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {BaseComponent} from "../../../../../../../utility/components/base/base.component";
import {InformationRequired} from "../../information-tab/information-required.model";
import {AdminAPI} from "../../../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../../../utility/shared-service/common-crud.service";
import {ConfirmationDialogComponent} from "../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-send-back-to-staff-dialog',
  templateUrl: './send-back-to-staff-dialog.component.html'
})
export class SendBackToStaffDialogComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Form Variables
  addSendtoStaffForm: FormGroup;
  informationRequired: InformationRequired;
  type = '';
  status_id = 0;
  moveTo = '';


  constructor(private _fb: FormBuilder, public dialog: MatDialog,
              public dialogRef: MatDialogRef<SendBackToStaffDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.informationRequired = (this.data.informationRequired) ? this.data.informationRequired : [];
    this.type = (this.data.type) ? this.data.type : null;
    this.status_id = (this.data.status_id) ? this.data.status_id : 0;
    this.moveTo = (this.status_id === 1) ? 'Staff' : (this.status_id === 2) ? 'ATL' : 'TL';
    this.createAddSendtoStaffForm();
  }

  /**
   * Create send back to staff form
   */
  createAddSendtoStaffForm() {
    this.addSendtoStaffForm = this._fb.group({
      send_back_reason: new FormControl(null, <any>Validators.required),
      stage_id: new FormControl(this.status_id, <any>Validators.required),
      type: new FormControl(this.type, <any>Validators.required)
    });
  }

  /**
   * On Close dialog
   * @param value
   */
  onClose(value): void {
    this.dialogRef.close(value);
  }

  /**
   * On Submit Send back to staff
   * @param form
   */
  onSubmit(form: FormGroup) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to move this information back to ' + this.moveTo + '?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        if (form.valid) {
          this._commonCrudService.addData(AdminAPI.INFORMATION_REQUIRED_SEND_BACK + '/' + this.informationRequired.id, form.value).subscribe(response => {
            this.onClose(true);
          });
        }
      }
    });
  }
}
