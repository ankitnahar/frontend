import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {Timesheet} from '../timesheet.model';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {TimesheetConstantData} from '../../../../../../../utility/constants/timesheet-constant';
import {SharedObjService} from '../../../../../../../utility/shared-service/shared-object.service';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';
import {Frequency} from '../../../../../../../utility/shared-model/frequency.model';
import * as moment from 'moment';

@Component({
  selector: 'app-view-more-details-timesheet-dialog',
  templateUrl: './view-more-details-timesheet-dialog.component.html'
})
export class ViewMoreDetailsTimesheetDialogComponent implements OnInit {

  timeSheetData: Timesheet;
  timesheetConstant = TimesheetConstantData;
  payrollOptionList: any [] = [];
  nameOfEmp = [];
  subActivityFields = [];
  reviewerUserList: AdminUser[] = [];
  bankInformation: any[] = [];
  frequencyDDList: Frequency[] = [];

  constructor(
    public dialogRef: MatDialogRef<ViewMoreDetailsTimesheetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService,
    private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.timeSheetData = (this.data.timesheetData) ? this.data.timesheetData : null;
    // console.log(this.timeSheetData);
    if (this.timeSheetData) {
      this.hideShowFields(this.timeSheetData.subactivity_code);
      if (this.timeSheetData.subactivity_code === 462) {
        if (this.timeSheetData.no_of_value > 0) {
          const dateItem = JSON.parse(this.timeSheetData.name_of_employee);
          this.nameOfEmp = dateItem;
        }
      }
    }
  }

  /**
   * On Select Check Subactivity have extra fields
   * @param subActivity
   */
  hideShowFields(value) {
    // If value of subactivity code then
    if (value) {
      const getSubActivity = this.getSubactivityField(Number(value));
      if (getSubActivity) {
        getSubActivity.forEach(item => {
          let data = [];
          if (item['key'] === 'reviewer_id') {
            this._sharedObjService.getUserList({'records': 'all'}, {
              'compare': {'equal': {'is_active': 1}},
              'in': {'designation_id': '68,69,70,73,71'},
              'findinset': {'team_id': [2]}
            }).subscribe((response) => {
              this.reviewerUserList = response;
              data = this.reviewerUserList.filter(dataItem => dataItem.id === Number(this.timeSheetData[item['key']]));
              item['value'] = (data.length) ? data[0]['userfullname'] : null;
            });
          } else if (item['key'] === 'frequency_id') {
            this._sharedObjService.getFrequency({'records': 'all'}, {}).subscribe((response) => {
              this.frequencyDDList = response;
              data = this.frequencyDDList.filter(dataItem => dataItem.id === Number(this.timeSheetData[item['key']]));
              item['value'] = (data.length) ? data[0]['frequency_name'] : null;
            });
          } else if (item['key'] === 'payroll_option_id') {
            this._commonCrudService.listData(AdminAPI.TIMESHEET_PAYROLL_OPTIONS + '/' + value, {}, {}).subscribe(response => {
              this.payrollOptionList = response.payload.data;
              data = this.payrollOptionList.filter(dataItem => dataItem.id === this.timeSheetData[item['key']]);
              item['value'] = (data.length) ? data[0]['type_name'] : null;
            });
          } else if (item['key'] === 'bank_info') {
            item['value'] = this.timeSheetData['bank_cc_name'] + '::' + this.timeSheetData['bank_cc_account_no'];
          } else if (item['key'] === 'period_startdate') {
            item['value'] = this.timeSheetData[item['key']] ? moment(this.timeSheetData[item['key']]).format('DD-MM-YYYY') : null;
          } else if (item['key'] === 'period_enddate') {
            item['value'] = this.timeSheetData[item['key']] ? moment(this.timeSheetData[item['key']]).format('DD-MM-YYYY') : null;
          } else {
            item['value'] = this.timeSheetData[item['key']] ? this.timeSheetData[item['key']] : null;
          }
          this.subActivityFields.push(item);
        });
      }
      // console.log(this.subActivityFields);
    }
  }

  /**
   * Get Subactivity Field
   * @param index
   */
  getSubactivityField(index: number): any {
    const ItemData = (this.timesheetConstant[index]) ? this.timesheetConstant[index] : null;
    return ItemData;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
