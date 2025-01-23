import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationConstantMessage} from "../../../../../../utility/validation";
import {HolidayMaster} from "../../hrms-dashboard.model";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import * as moment from 'moment';
import {ConfirmationDialogComponent} from "../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component";
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {yesNo} from "../../../../../../utility/constants/base-constants";

@Component({
  selector: 'app-add-holiday-master-dialog',
  templateUrl: './add-holiday-master-dialog.component.html'
})
export class AddHolidayMasterDialogComponent extends BaseComponent implements OnInit {

  holidayMasterDetail: HolidayMaster;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  currentYear: any;
  // Form Variables
  addHolidayMasterForm: FormGroup;
  yearList = [];
  minDate: Date;
  maxDate: Date;
  yesNoDropDown = yesNo;

  constructor(
    public dialogRef: MatDialogRef<AddHolidayMasterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder,
    private _commonCrudService: CommonCrudService, public dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    this.holidayMasterDetail = (this.data.holidayMasterDetail) ? this.data.holidayMasterDetail : [];
    this.createHolidayForm();
    this.yearData();
  }

  yearData() {
    this.currentYear = new Date().getFullYear();
    for (let i = 0; i <= 2; i++) {
      const newYear = this.currentYear + i;
      this.yearList.push({'key': newYear, 'value': newYear});
    }
  }

  /**
   * Create Holiday Master Form
   */
  createHolidayForm() {
    this.addHolidayMasterForm = this._fb.group({
      year: new FormControl((this.holidayMasterDetail) ? (this.holidayMasterDetail.year) ? this.holidayMasterDetail.year : null : null, <any>Validators.required),
      date: new FormControl((this.holidayMasterDetail) ? (this.holidayMasterDetail.date) ? this.holidayMasterDetail.date : null : null, <any>Validators.required),
      description: new FormControl((this.holidayMasterDetail) ? (this.holidayMasterDetail.description) ? this.holidayMasterDetail.description : null : null),
      is_client: new FormControl((this.holidayMasterDetail) ? (this.holidayMasterDetail.is_client) ? this.holidayMasterDetail.is_client : null : null)
    });
  }

  onClose(value: boolean): void {
    this.dialogRef.close(value);
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const dateItem = form.value['date'];
      form.value['date'] = moment(dateItem).format('YYYY-MM-DD');
      if (this.holidayMasterDetail.id) {
        form.value['_method'] = 'put';
        const dismissDialog = this.dialog.open(ConfirmationDialogComponent, {
          data: {
            content: 'Edit of date will affect holiday master & attendance summary. Are you sure you want to amend?'
          }
        });
        dismissDialog.afterClosed().subscribe((value) => {
          if (value) {
            this._commonCrudService.updateData(AdminAPI.HOLIDAY_MASTER_LIST, this.holidayMasterDetail.id, form.value).subscribe((response) => {
              this.dialogRef.close(true);
            });
          }
        });

      } else {
        this._commonCrudService.addData(AdminAPI.HOLIDAY_MASTER_STORE, form.value).subscribe((response) => {
          this.dialogRef.close(true);
        });
      }
      form.value['date'] = dateItem;
    }
  }

  /**
   *
   * @param val
   */
  updateDateSelection(val: number) {
    // this.yearStart = new Date().setFullYear(val, 01, 01);
    // this.yearEnd  = new Date().setFullYear(val, 12, 31);
    this.minDate = new Date(val, 0, 1);
    this.maxDate = new Date(val, 11, 31);
  }
}
