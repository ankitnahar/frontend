import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {BaseComponent} from "../../../../../../utility/components/base/base.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationConstantMessage} from "../../../../../../utility/validation";
import {InformationRequired} from "../information-tab/information-required.model";
import {SnoozeOrReminderDays} from "../../../../../../utility/constants/base-constants";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";

@Component({
  selector: 'app-snooze-information-dialog',
  templateUrl: './snooze-information-dialog.component.html'
})
export class SnoozeInformationDialogComponent extends BaseComponent implements OnInit {
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Form Variables
  addSnoozeForm: FormGroup;
  informationRequired: InformationRequired;
  snoozeOrReminderDays = SnoozeOrReminderDays;
  nextReminderDate: Date = null;

  constructor(private _fb: FormBuilder,
              public dialogRef: MatDialogRef<SnoozeInformationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.informationRequired = (this.data.informationRequired) ? this.data.informationRequired : [];
    this.createSnoozeForm();
  }

  /**
   * Create Snooze form
   */
  createSnoozeForm() {
    this.addSnoozeForm = this._fb.group({
      snooze: new FormControl(this.informationRequired ? this.informationRequired.snooze : null, <any>Validators.required),
      reminder: new FormControl(this.informationRequired ? this.informationRequired.reminder : null, <any>Validators.required)
    });
  }

  /**
   * Update Validation
   * @param value
   */
  getReminderDate() {
    const snooze = this.addSnoozeForm.get('snooze').value;
    const reminder = this.addSnoozeForm.get('reminder').value;
    if (snooze > 0 && reminder > 0) {
      const totalDays = Number(snooze) + Number(reminder);
      // const todaysDate = new Date() + ;
      const todaysDate = new Date();
      todaysDate.setDate( todaysDate.getDate() + totalDays );
      this.nextReminderDate = todaysDate;
    } else {
      this.nextReminderDate = null;
    }
  }

  /**
   * On Close Dialog
   * @param value
   */
  onClose(value): void {
    this.dialogRef.close(value);
  }

  /**
   * On Submit Snooze Form
   * @param form
   */
  onSubmitSnoozeForm(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.updateData(AdminAPI.INFORMATION_REQUIRED_SNOOZE, this.informationRequired.id, form.value).subscribe(response => {
        this.onClose(true);
      });
    }
  }
}
