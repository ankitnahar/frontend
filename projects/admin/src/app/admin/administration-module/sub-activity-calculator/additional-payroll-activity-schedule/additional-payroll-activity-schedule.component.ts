import {Component, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonRegex} from '../../../../../utility/validation';
import {subActivityColumn, subActivityData, subActivityDataColSpan} from '../../../../../utility/constants/billing-constant';
import {Frequency} from '../../../../../utility/shared-model/frequency.model';
import {GLOBALDATAKEYS, payroll_inc_in_ff} from '../../../../../utility/constants/base-constants';
import {DecimalPipe} from '@angular/common';
import {NoCommaPipe} from '../../../../../utility/pipe/noComma.pipe';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {BillingSubactivityCalculator} from '../billing-subactivity-calculator.model';

@Component({
  selector: 'app-additional-payroll-activity-schedule',
  templateUrl: './additional-payroll-activity-schedule.component.html',
  styleUrls: ['./additional-payroll-activity-schedule.component.scss'],
  providers: [DecimalPipe, NoCommaPipe]

})
export class AdditionalPayrollActivityScheduleComponent implements OnInit {


  // Data Variables
  bookkeepingSubActivityValues = [];
  billingInfoConstant = subActivityData;
  frequencyList: Frequency[] = [];
  payrollInCInFF = payroll_inc_in_ff;
  billingSubActivityColumn = subActivityColumn;
  billingSubActivityColSpan = subActivityDataColSpan;
  formSubactvitiy: FormGroup;
  payrollCalc: BillingSubactivityCalculator;

  constructor(private _decimalPipe: DecimalPipe, private _noCommaPipe: NoCommaPipe, public _router: Router, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.payrollCalc = this._sharedService.getClientData(GLOBALDATAKEYS.PAYROLL_CALC);
    this.getFrequency();
    this.initializationMethod();
    this.createForm();
  }

  onSubActivity() {
    this._router.navigate(['/' + AdminRoutes.SUB_ACTIVITY_CALCULATOR]);
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Get Frequency
   */
  getFrequency() {
    this._commonCrudService.listData(AdminAPI.FREQUENCY, {}, {}).subscribe((response) => {
      this.frequencyList = response.payload.data;
    });
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this._commonCrudService.getData(AdminAPI.BILLING_PAYROLL_CALC_EDIT, this.payrollCalc.id, {'service_id': 2}).subscribe((response) => {
      const itemDataList = response.payload.data;
      const itemData = itemDataList['subactivity'];
      const itemDataValues = Object.entries(itemData);
      if (itemDataValues) {
        let i = 0;
        itemDataValues.forEach(key => {
          this.bookkeepingSubActivityValues[i] = [];
          this.bookkeepingSubActivityValues[i]['label'] = key[0];
          this.bookkeepingSubActivityValues[i]['column'] = (this.billingSubActivityColumn[key[0]]) ? this.billingSubActivityColumn[key[0]] : [];
          this.bookkeepingSubActivityValues[i]['data'] = [];
          const subData = Object.values(key[1]);
          subData.map(subKey => {
            const displayField = this.getSubactivityField(subKey['subactivity_code']);
            if (displayField) {
              subKey['displayField'] = displayField;
            }
            subKey['colSpan'] = (this.billingSubActivityColSpan[subKey['subactivity_code']]) ? this.billingSubActivityColSpan[subKey['subactivity_code']] : 0;
          });
          this.bookkeepingSubActivityValues[i]['data'] = subData;
          this.getFilterFieldArray().push(this.initSection(this.bookkeepingSubActivityValues[i]));
          let j = 0;
          this.bookkeepingSubActivityValues[i]['data'].forEach(keyData => {
            this.getFilterFieldArrayData(i).push(this.initSubActivity(keyData));
            this.hideShowFields(i, j, keyData['subactivity_code'], keyData['inc_in_ff']);
            this.onChangeUpdateDataValues('inc_in_ff', 1, i, j, keyData['subactivity_code'], keyData['inc_in_ff']);
            j = j + 1;
          });
          i = i + 1;
        });
      }
    });
  }

  /**
   * Hide Show Field Values
   * @param parentActivity
   * @param childActivity
   * @param categoryCode
   * @param value
   */

  hideShowFields(parentActivity: number, childActivity: number, categoryCode: number, value: any) {
    // console.log(parentActivity, childActivity, categoryCode, value);
    const DataFields = this.getSubactivityField(categoryCode);
    this.getFilterFieldArrayDataFields(parentActivity, childActivity).removeAt(0);
    this.getFilterFieldArrayDataFields(parentActivity, childActivity).removeAt(0);
    this.getFilterFieldArrayDataFields(parentActivity, childActivity).removeAt(0);
    // console.log(DataFields);
    if (DataFields) {
      DataFields.forEach(key => {
        // console.log(key);
        const itemControls = this.getFilterFieldArrayDataFields(parentActivity, childActivity);
        itemControls.push(this.initDisplayField(key));
      });
    }
    // console.log(this.formSubactvitiy.get('sections'));
  }

  /**
   * Update Form Control
   * @constructor
   */
  UpdateFormControl(parentActivity: number, childActivity: number, categoryCode: number, value: any) {
    this.getFilterFieldArrayDataFields(parentActivity, childActivity).removeAt(0);
  }

  /**
   * Create Form
   */
  createForm() {
    this.formSubactvitiy = this._fb.group({
      name: new FormControl(this.payrollCalc ? this.payrollCalc.name : ''),
      sections: this._fb.array([]),
    });
  }

  /**
   * Create Subactivity Group Form
   */
  initSection(item ?: any) {
    return this._fb.group({
      sectionTitle: new FormControl(item ? item['label'] : ''),
      sectionColumn: new FormControl(item ? item['column'] : ''),
      sectionData: new FormArray([])
    });
  }

  /**
   * On Show Display Category Item
   * @param item
   */
  initSubActivity(item?: any) {
    return this._fb.group({
      id: new FormControl(item ? item['id'] : ''),
      subactivity_code: new FormControl(item ? item['subactivity_code'] : ''),
      subactivity: new FormControl(item ? item['subactivity'] : ''),
      frequency_id: new FormControl(item ? item['frequency_id'] : 0),
      inc_in_ff: new FormControl(item ? item['inc_in_ff'] : 0),
      fixed_fee: new FormControl(item ? item['fixed_fee'] : 0),
      price: new FormControl(item ? item['price'] : 0),
      is_inc_in_ff: new FormControl(item ? item['is_inc_in_ff'] : 0),
      is_frequency: new FormControl(item ? item['is_frequency'] : 0),
      is_price: new FormControl(item ? item['is_price'] : 0),
      is_fixed_fee: new FormControl(item ? item['is_fixed_fee'] : 0),
      is_no_of_employee: new FormControl(item ? item['is_no_of_employee'] : 0),
      colSpan: new FormControl(item ? item['colSpan'] : 0),
      fixed_value: new FormControl(item ? item['fixed_value'] : 0),
      no_of_value: new FormControl(item ? item['no_of_value'] : 0),
      no_of_employee: new FormControl(item ? item['no_of_employee'] : 0),
      displayField: new FormArray([])
    });
  }

  /**
   * On Show Display Field with Label Help Text and Value
   * @param item
   */
  initDisplayField(item?: any) {
    return this._fb.group({
      label: new FormControl(item ? item['label'] : ''),
      help: new FormControl(item ? item['help'] : ''),
      key: new FormControl(item ? item['key'] : ''),
      value: new FormControl(item ? item['value'] : 0, [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
    });
  }

  /**
   * Get Filter Field Array
   */
  getFilterFieldArray(): FormArray {
    return <FormArray>this.formSubactvitiy.get('sections');
  }

  /**
   * Get Filter Field Array
   */
  getFilterFieldArrayData(i): FormArray {
    return <FormArray>this.getFilterFieldArray().controls[i].get('sectionData');
  }

  /**
   * Get Filter Field Array
   */
  getFilterFieldArrayDataFields(i, j): FormArray {
    return <FormArray>this.getFilterFieldArrayData(i).controls[j].get('displayField');
  }

  /**
   * Get Subactivity Field
   * @param index
   */
  getSubactivityField(index: number): any {
    const ItemData = (this.billingInfoConstant[index]) ? this.billingInfoConstant[index] : null;
    return ItemData;
  }

  /**
   * @param index
   * @param value
   */
  onChangeUpdateDataValues(type: string, subType: number, index: number, subIndex: number, subCategoryCode: number, value: any) {
    if (type !== '' && subType === 1) {
      this.getFilterFieldArrayData(index).controls[subIndex].get(type).setValue(value);
    } else if (type !== '' && subType === 2) {
      this.getFilterFieldArrayData(index).controls[subIndex].get(type).setValue(value);
    }
  }

  /**
   * On Submit SubActivity
   * @param form
   */
  onSumitSubActivity(form: FormGroup) {
    const FormData = form.value['sections'];
    const itemData = {};
    itemData['calc_array'] = [];
    itemData['_method'] = 'put';
    itemData['service_id'] = 2;
    itemData['name'] = form.value['name'];
    if (FormData.length) {
      FormData.forEach(item => {
        // console.log(item);
        const sectionData = item['sectionData'];
        if (sectionData.length) {
          sectionData.forEach(subItem => {
            delete subItem['displayField'];
            delete subItem['colSpan'];
            delete subItem['is_price'];
            delete subItem['subactivity'];
            delete subItem['is_fixed_fee'];
            delete subItem['is_frequency'];
            delete subItem['is_inc_in_ff'];
            delete subItem['is_no_of_employee'];
            itemData['calc_array'].push(subItem);
          });
        }
      });
      // console.log(itemData['colSpan']);
      // Billing Subactivity update
      if (itemData['calc_array']) {
        this._commonCrudService.updateDataWithPut(AdminAPI.BILLING_PAYROLL_CALC_EDIT, this.payrollCalc.id, itemData).subscribe((response) => {
          if (response) {
            this.bookkeepingSubActivityValues = [];
            this.initializationMethod();
            this.createForm();
            this._router.navigate(['/' + AdminRoutes.SUB_ACTIVITY_CALCULATOR]);
          }
        });
      }
    }
  }
}
