import {Component, Inject, OnInit} from '@angular/core';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Holiday} from '../holiday-list.model';
import {Shift} from '../../shift-list/shift-list.model';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {HolidayMaster} from "../../hrms-dashboard.model";

@Component({
  selector: 'app-add-holiday-list-dialog',
  templateUrl: './add-holiday-list-dialog.component.html'
})
export class AddHolidayListDialogComponent extends BaseComponent implements OnInit {

  holidayDetail: Holiday;
  holidayMasterDetail: HolidayMaster[] = [];
  shifList: Shift[] = [];


  yearList = [];
  dateList = [];
  currentYear: any;

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  addHolidayListForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddHolidayListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.holidayDetail = (this.data.holidayData) ? this.data.holidayData : [];
    // console.log(this.holidayDetail);
    this.getHolidayMasterList();
    this.getshiftlist();
    this.createHolidayForm();
  }

  /**
   * Get Holiday Master List
   */
  getHolidayMasterList() {
    this._commonCrudService.listData(AdminAPI.HOLIDAY_MASTER_LIST, {'records': 'all'}).subscribe((response) => {
      this.holidayMasterDetail = response.payload.data;
      this.getDateList();
    });
  }

  /**
   * Create filter Master checklist
   */
  createHolidayForm() {
    this.addHolidayListForm = this._fb.group({
      holiday_id: new FormControl((this.holidayDetail) ? (this.holidayDetail.holiday_id) ? this.holidayDetail.holiday_id : null : null, <any>Validators.required),
      shift_id: new FormControl((this.holidayDetail) ? this.getArrayToString(this.holidayDetail.shift_id, ',') : null, <any>Validators.required),
      description: new FormControl((this.holidayDetail) ? (this.holidayDetail.description) ? this.holidayDetail.description : null : null)
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  /**
   * Get array values from string
   * @param {string} value
   * @param {string} seperator
   * @returns {string[]}
   */
  getArrayToString(value: string, seperator: string) {
    if (value) {
      const valueOne = [];
      value.split(seperator).map(item => {
        valueOne.push(Number(item));
      });
      return valueOne;
    }
  }

  /**
   * On Submit
   * @param form
   */
  onSubmit(form: FormGroup) {
    if (form.valid) {
      const shiftids = form.value['shift_id'];
      const holidayids = this.addHolidayListForm.get('holiday_id').value;
      if (this.holidayDetail.id && this.holidayDetail.id > 0) {
        form.value['holiday_id'] = holidayids;
        form.value['shift_id'] = shiftids.join(',');
      } else {
        form.value['holiday_id'] = holidayids.join(',');
        form.value['shift_id'] = shiftids;
      }
      // form.value['date'] = moment(dateItem).format('YYYY-MM-DD');
      // form.value['shift_id'] = shiftids.join(',');
      form.value['is_active'] = 1;
      if (this.holidayDetail.id) {
        form.value['_method'] = 'put';
        this._commonCrudService.updateData(AdminAPI.HOLIDAY_UPDATE, 0, form.value).subscribe((response) => {
          this.dialogRef.close();
        });
      } else {
        this._commonCrudService.addData(AdminAPI.HOLIDAY_STORE, form.value).subscribe((response) => {
          this.dialogRef.close();
        });
      }
      form.value['shift_id'] = shiftids;
      form.value['holiday_id'] = holidayids;
    }
  }

  getshiftlist() {
    this._commonCrudService.listData(AdminAPI.SHIFT_LISTING, {'records': 'all'}, {}).subscribe((response) => {
      this.shifList = response['payload']['data'];
      // console.log(this.shifList);
    });
  }

  /**
   * Get Date on year basis
   * @param val
   */
  getDateList() {
    const currentYear = new Date().getFullYear();
    const valData = this.holidayMasterDetail.filter(item => item.year === currentYear || item.year === currentYear + 1);
    this.dateList = valData;
    this.dateList.map(item => {
      const itemDate = item['date'].split('-');
      item['date'] = itemDate[2] + '-' + itemDate[1] + '-' + itemDate[0];
    });

    if (this.holidayDetail && this.holidayDetail.id) {
      this.addHolidayListForm.get('holiday_id').setValue(this.holidayDetail.holiday_id);
    }
  }
}
