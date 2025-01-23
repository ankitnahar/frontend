import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {BaseComponent} from "../../../../../../utility/components/base/base.component";
import {ValidationConstantMessage} from "../../../../../../utility/validation";
import {SnoozeOrReminderDays} from "../../../../../../utility/constants/base-constants";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {QueryDataList} from "../query.model";

@Component({
  selector: 'app-snooze-query-dialog',
  templateUrl: './snooze-query-dialog.component.html'
})
export class SnoozeQueryDialogComponent extends BaseComponent implements OnInit {
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Form Variables
  addSnoozeForm: FormGroup;
  queryData: QueryDataList;
  snoozeOrReminderDays = SnoozeOrReminderDays;
  nextReminderDate: Date = null;

  constructor(private _fb: FormBuilder,
              public dialogRef: MatDialogRef<SnoozeQueryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.queryData = (this.data.queryData) ? this.data.queryData : [];
    this.createSnoozeForm();
  }

  /**
   * Create Snooze form
   */
  createSnoozeForm() {
    this.addSnoozeForm = this._fb.group({
      snooze: new FormControl(this.queryData ? this.queryData.snooze : null, <any>Validators.required),
      reminder: new FormControl(this.queryData ? this.queryData.reminder : null, <any>Validators.required)
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
      this._commonCrudService.updateData(AdminAPI.QUERY_SNOOZE, this.queryData.id, form.value).subscribe(response => {
        this.onClose(true);
      });
    }
  }
}
