import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CommonRegex, ToastErrorMessages, ValidationConstantMessage} from '../../../../../../../utility/validation';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {BillingBasic} from '../../../../../../../utility/shared-model/billing.model';
import {DecimalPipe} from '@angular/common';
import {NoCommaPipe} from '../../../../../../../utility/pipe/noComma.pipe';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {PayrollCalc, PayrollData} from '../payroll.model';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {Frequency} from '../../../../../../../utility/shared-model/frequency.model';
import {Recurring} from '../../../../invoices/recurring/recurring.model';
import {BASE, ToastType, yesNo} from '../../../../../../../utility/constants/base-constants';

@Component({
  selector: 'app-payroll-basic',
  templateUrl: './payroll-basic.component.html',
  providers: [DecimalPipe, NoCommaPipe]
})
export class PayrollBasicComponent extends BaseComponent implements OnInit {

  @Input() billingInformation: BillingBasic;
  @Input() serviceInfo: any;
  @Input() isEdit: any;
  @Output() onAddUpdate: EventEmitter<boolean> = new EventEmitter(false);

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  payrollbasicForm: FormGroup;

  //variable
  payrollData: PayrollData;
  frequencyList: Frequency[] = [];
  payrollFrequencyList: Frequency[] = [];
  calcList: PayrollCalc[] = [];
  recurringList: Recurring[] = [];
  yesNoList = yesNo;
  isFixedFee = false;
  isCalcReadOnly = false;
  isCalcReadOnlyName = '';

  constructor(private _decimalPipe: DecimalPipe, private _noCommaPipe: NoCommaPipe, public _router: Router, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.getFrequency();
    this.getPayrollCalc();
    this.getServiceBasicInfo();
    this.createPayrollBasicForm();
    const value = {
      url: AdminAPI.BILLING_SERVICES_HISTORY + '/' + this.billingInformation.entity_id,
      params: {'service_id': this.serviceInfo['service_id']},
    };
    this._sharedService.setHistoryURL(value);
  }

  /**
   * Get Frequency List
   */
  getPayrollCalc() {
    this._commonCrudService.listData(AdminAPI.BILLING_PAYROLL_CALC_LIST, {'records': 'all'}, {}).subscribe((response) => {
      if (response) {
        this.calcList = response.payload.data;
      }
    });
  }

  /**
   * Get Service Basic Information
   */
  getServiceBasicInfo() {
    this._commonCrudService.getData(AdminAPI.BILLING_PAYROLL, this.billingInformation.entity_id, {}).subscribe((response) => {
      this.payrollData = response.payload.data;
      // console.log(this.payrollData);
      this.createPayrollBasicForm();
      if (this.payrollData) {
        if (this.payrollData.frequency_id > 0) {
          this.changeGetRecurringList(this.serviceInfo['service_id'], (this.payrollData.inc_in_ff > 0) ? this.payrollData.inc_in_ff : 1, this.payrollData.frequency_id);
        }
        this.changeAutoInvoice(this.payrollData.recurring_id);
        this.changeInFixedFee(this.payrollData.inc_in_ff);

        if (this.payrollData.calc_id > 0) {
          this.isCalcReadOnly = true;
          const calc = this.calcList.filter(item => item.id === this.payrollData.calc_id);
          if (calc.length) {
            this.isCalcReadOnlyName = calc[0].name;
            // this.payrollbasicForm.get('calc_id').setValue(this.isCalcReadOnlyName);
          }
        }
      }
    });
  }

  /**
   * Create Payroll Basic Form
   */
  createPayrollBasicForm() {
    this.payrollbasicForm = this._fb.group({
      ff_rph: new FormControl((this.payrollData && this.payrollData.ff_rph !== null && Number(this.payrollData.ff_rph) > 0) ? this.payrollData.ff_rph : BASE.DEFAULT_RPH, [<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
      inc_in_ff: new FormControl((this.payrollData && this.payrollData.inc_in_ff >= 0) ? this.payrollData.inc_in_ff : 0, <any>Validators.required),
      fixed_fee: new FormControl((this.payrollData && this.payrollData.fixed_fee !== null && Number(this.payrollData.fixed_fee) > 0) ? this.payrollData.fixed_fee : 0),
      payroll_frequency_id: new FormControl((this.payrollData && this.payrollData.payroll_frequency_id > 0) ? this.payrollData.payroll_frequency_id : 0),
      frequency_id: new FormControl((this.payrollData && this.payrollData.frequency_id > 0) ? this.payrollData.frequency_id : 0, <any>Validators.required),
      calc_id: new FormControl((this.payrollData) ? this.payrollData.calc_id : '', <any>Validators.required),
      recurring_id: new FormControl((this.payrollData) ? this.payrollData.recurring_id : null),
      auto_invoice: new FormControl((this.payrollData) ? this.payrollData.auto_invoice : 0, <any>Validators.required),
      notes: new FormControl((this.payrollData) ? this.payrollData.notes : null),
    });
  }

  /**
   * Get Frequency List
   */
  getFrequency() {
    this._commonCrudService.listData(AdminAPI.FREQUENCY, {}, {'notin': {'id': '10'}}).subscribe((response) => {
      if (response) {
        this.frequencyList = response.payload.data;
      }
    });
    this._commonCrudService.listData(AdminAPI.FREQUENCY, {}, {'notin': {'id': '10,7'}}).subscribe((response) => {
      if (response) {
        this.payrollFrequencyList = response.payload.data;
      }
    });
  }

  /**
   * If Fixed Fee Value Change
   * @param value
   */
  changeInFixedFee(value: number) {
    if (value > 0) {
      this.isFixedFee = true;
      this.payrollbasicForm.get('fixed_fee').setValidators([<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]);
      this.payrollbasicForm.get('fixed_fee').updateValueAndValidity();
      this.payrollbasicForm.get('payroll_frequency_id').setValidators(<any>Validators.required);
      this.payrollbasicForm.get('payroll_frequency_id').updateValueAndValidity();
    } else {
      this.isFixedFee = false;
      this.payrollbasicForm.get('fixed_fee').setValidators(null);
      this.payrollbasicForm.get('fixed_fee').updateValueAndValidity();
      this.payrollbasicForm.get('payroll_frequency_id').setValidators(null);
      this.payrollbasicForm.get('payroll_frequency_id').updateValueAndValidity();
    }
  }

  /**
   * Change Auto Invoice Status
   * @param recurring_id
   */
  changeAutoInvoice(recurring_id: any) {
    if (recurring_id === '') {
      this.payrollbasicForm.get('auto_invoice').setValue(null);
      this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, ToastType.ERROR);
    }
  }

  /**
   * Change Auto Invoice Status
   * @param recurring_id
   */
  changeAutoInvoiceType(value: number) {
    if (value) {
      const recurring_id = this.payrollbasicForm.get('recurring_id').value;
      if (recurring_id === '') {
        this.payrollbasicForm.get('auto_invoice').setValue(null);
        this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, ToastType.ERROR);
      }

      // this will check releated entity
      this._commonCrudService.getData(AdminAPI.BILLING_BASIC_VIEW, this.billingInformation.entity_id).subscribe((response) => {
        const DataItem = response.payload.data[this.billingInformation.entity_id];
        // console.log( DataItem);
        if (DataItem['is_related'] === 1 || DataItem['to_email'] === '' || DataItem['contact_person'] === '') {
          this.payrollbasicForm.get('auto_invoice').setValue(null);
          this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RELATED, ToastType.ERROR);
        }
      });
    }
  }

  /**
   * On Change Frequency Get Recurring List
   * @param service_id
   * @param inc_in_ff
   * @param frequency_id
   */
  changeGetRecurringList(service_id: number, inc_in_ff: number, frequency_id: number) {
    this.recurringList = [];
    const params = {};
    params['service_id'] = service_id;
    params['inc_in_ff'] = this.payrollbasicForm.get('inc_in_ff').value;
    params['frequency_id'] = frequency_id;
    if (params) {
      this._commonCrudService.listData(AdminAPI.BILLING_RECURRING_LIST, params, {}).subscribe((response) => {
        this.recurringList = response.payload.data;
      });
    }
  }

  /**
   * On Submit Payroll Info
   * @param form
   */
  onSubmitPayrollInfo(form: FormGroup) {
    if (form.valid) {
      // Update Data
      this._commonCrudService.updateData(AdminAPI.BILLING_PAYROLL, this.billingInformation.entity_id, form.value).subscribe((response) => {
        this.onAddUpdate.emit(true);
        this.getServiceBasicInfo();
      });
    }
    this.moveToSelectedTab("Additional Activity Calculator");
  }

  moveToSelectedTab(tabName: string) {
    for (let i = 0; i < document.querySelectorAll('.mat-tab-label-content').length; i++) {
      if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText === tabName) {
        (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
      }
    }
  }

  /**
   * Display Get Status List
   * @param {number} status_id
   * @returns {string}
   */
  getYesNoStatus(status_id: number): string {
    const val = this.yesNoList.filter(elem => elem.key === Number(status_id));
    return (val.length) ? val[0].label : '';
  }

  /**
   * Display Get Frequency List
   * @param {number} id
   * @returns {string}
   */
  getFrequencyName(id: number): string {
    const val = this.frequencyList.filter(elem => elem.id === Number(id));
    return (val.length) ? val[0].frequency_name : '';
  }

  /**
   * Display Get Frequency List
   * @param {number} id
   * @returns {string}
   */
  getPayrollFrequencyList(id: number): string {
    const val = this.payrollFrequencyList.filter(elem => elem.id === Number(id));
    return (val.length) ? val[0].frequency_name : '';
  }

  /**
   * Display Get Recurring List
   * @param {number} id
   * @returns {string}
   */
  getRecurringName(id: number): string {
    const val = this.recurringList.filter(elem => elem.id === Number(id));
    return (val.length) ? val[0].recurring_name : '';
  }
}
