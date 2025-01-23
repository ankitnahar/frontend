import {Component, Input, OnInit} from '@angular/core';
import {CommonRegex, ToastErrorMessages, ValidationConstantMessage} from '../../../../../../utility/validation';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {BillingBasic} from '../../../../../../utility/shared-model/billing.model';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {DecimalPipe} from '@angular/common';
import {NoCommaPipe} from '../../../../../../utility/pipe/noComma.pipe';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {BASE, ToastType, yesNo} from '../../../../../../utility/constants/base-constants';
import {Frequency} from '../../../../../../utility/shared-model/frequency.model';
import {SmsfData} from './smsf.model';
import * as moment from 'moment';
import {Recurring} from '../../../invoices/recurring/recurring.model';

@Component({
  selector: 'app-smsf-services',
  templateUrl: './smsf-services.component.html',
  styleUrls: ['./smsf-services.component.scss'],
  providers: [DecimalPipe, NoCommaPipe]
})
export class SmsfServicesComponent extends BaseComponent implements OnInit {

  @Input() billingInformation: BillingBasic;
  @Input() serviceInfo: any;
  @Input() isEdit: any;

  yesNoList = yesNo;
  frequencyList: Frequency[] = [];
  smsfData: SmsfData;
  recurringList: Recurring[] = [];
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  smsfbasicForm: FormGroup;
  balanceYear: any;
  isAuditFees = false;

  constructor(public _router: Router, private _fb: FormBuilder, private _decimalPipe: DecimalPipe, private _noCommaPipe: NoCommaPipe, private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.balanceYear = new Date().getFullYear();
    this.getFrequency();
    this.getServiceBasicInfo();
    this.createSMSFBasicForm();
    const value = {
      url: AdminAPI.BILLING_SERVICES_HISTORY + '/' + this.billingInformation.entity_id,
      params: {'service_id': this.serviceInfo['service_id']},
    };
    this._sharedService.setHistoryURL(value);
  }

  /**
   * Get Service Basic Information
   */
  getServiceBasicInfo() {
    this._commonCrudService.getData(AdminAPI.BILLING_SMSF, this.billingInformation.entity_id, {}).subscribe((response) => {
      this.smsfData = response.payload.data;
      this.createSMSFBasicForm();
    });
  }

  /**
   * On Change Fixed Fee update monthly and balance amount in june
   * @param discount
   */
  updateFixedFee(dateOfFixedFee: any) {
    const standard_fee = this.smsfbasicForm.get('fixed_fee').value;
    let dateOfFixedFeeVal = dateOfFixedFee;
    dateOfFixedFeeVal = moment(dateOfFixedFeeVal).format('YYYY-MM-DD');
    const yearMonthData = dateOfFixedFeeVal.split('-');
    const yearData = Number(yearMonthData[0]);
    const monthData = Number(yearMonthData[1]);
    // Set Year Data
    if (monthData >= BASE.MONTH_END) {
      this.balanceYear = yearData + 1;
    } else {
      this.balanceYear = yearData;
    }

    if (standard_fee) {
      this.updateFixedFeeAmount(standard_fee, dateOfFixedFee);
    }
  }

  /**
   * Update Amount with Data
   * @param standard_fee
   * @param dateOfFixedFee
   */
  updateFixedFeeAmount(standard_fee: any, dateOfFixedFee?: any) {
    let dateOfFixedFeeVal = (dateOfFixedFee) ? dateOfFixedFee : this.smsfbasicForm.get('ff_start_date').value;
    let endDateYear = dateOfFixedFeeVal;
    let diffMonths = 0;
    this.smsfbasicForm.get('balance_amount').setValue(0);
    this.smsfbasicForm.get('monthly_amount').setValue(0);

    if (dateOfFixedFeeVal && Number(standard_fee) > 0) {
      dateOfFixedFeeVal = moment(dateOfFixedFeeVal).format('YYYY-MM-DD');
      const yearMonthData = dateOfFixedFeeVal.split('-');
      const yearData = Number(yearMonthData[0]);
      const monthData = Number(yearMonthData[1]);
      // Set Year Data
      if (monthData >= BASE.MONTH_END) {
        this.balanceYear = yearData + 1;
        endDateYear = moment(new Date(yearData, BASE.MONTH_START, 1)).format('YYYY-MM-DD');
        diffMonths = moment(dateOfFixedFeeVal).diff(endDateYear, 'month', false);
      } else {
        this.balanceYear = yearData;
        endDateYear = moment(new Date(yearData - 1, BASE.MONTH_START, 1)).format('YYYY-MM-DD');
        diffMonths = moment(dateOfFixedFeeVal).diff(endDateYear, 'month', false);
      }
      diffMonths = diffMonths + 1;
      // Set Monthly Amount
      let monthly_amt = 0;
      monthly_amt = standard_fee / BASE.MONTH_TOTAL;
      this.smsfbasicForm.get('monthly_amount').setValue(this._noCommaPipe.transform(this._decimalPipe.transform(monthly_amt, '1.2-2')));

      // Set Balance Amount
      let balance_amt = 0;
      balance_amt = monthly_amt * diffMonths;
      this.smsfbasicForm.get('balance_amount').setValue(this._noCommaPipe.transform(this._decimalPipe.transform(balance_amt, '1.2-2')));
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
    params['inc_in_ff'] = inc_in_ff;
    params['frequency_id'] = frequency_id;
    if (params) {
      this._commonCrudService.listData(AdminAPI.BILLING_RECURRING_LIST, params, {}).subscribe((response) => {
        this.recurringList = response.payload.data;
      });
    }
  }

  /**
   * Change Auto Invoice Status
   * @param recurring_id
   */
  changeAutoInvoice(recurring_id: any) {
    if (recurring_id === '') {
      this.smsfbasicForm.get('auto_invoice').setValue(null);
      this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, ToastType.ERROR);
    }
  }

  /**
   * Change Auto Invoice Status
   * @param recurring_id
   */
  changeAutoInvoiceType(value: number) {
    if (value) {
      const recurring_id = this.smsfbasicForm.get('recurring_id').value;
      if (recurring_id === '') {
        this.smsfbasicForm.get('auto_invoice').setValue(null);
        this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, ToastType.ERROR);
      }
      // this will check releated entity
      this._commonCrudService.getData(AdminAPI.BILLING_BASIC_VIEW, this.billingInformation.entity_id).subscribe((response) => {
        const DataItem = response.payload.data[this.billingInformation.entity_id];
        // console.log( DataItem);
        if (DataItem['is_related'] === 1 || DataItem['to_email'] === '' || DataItem['contact_person'] === '') {
          this.smsfbasicForm.get('auto_invoice').setValue(null);
          this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RELATED, ToastType.ERROR);
        }
      });
    }
  }

  /**
   * Get Frequency List
   */
  getFrequency() {
    this._commonCrudService.listData(AdminAPI.FREQUENCY, {}, {'in': {'id': '3,5'}}).subscribe((response) => {
      if (response) {
        this.frequencyList = response.payload.data;
      }
    });
  }

  /**
   * Change Audit Fees Type Hide show field
   * @param value
   */
  changeAuditFeesType(value: number) {
    this.smsfbasicForm.get('audit_fee').setValue(null);
    if (value > 0) {
      this.smsfbasicForm.get('audit_fee').setValidators(null);
      this.isAuditFees = false;
    } else {
      this.smsfbasicForm.get('audit_fee').setValidators([<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]);
      this.isAuditFees = true;
    }
  }

  /**
   * Create SMSF basic form
   */
  createSMSFBasicForm() {
    this.smsfbasicForm = this._fb.group({
      befree_invoice: new FormControl((this.smsfData) ? this.smsfData.befree_invoice : null, <any>Validators.required),
      frequency_id: new FormControl((this.smsfData) ? this.smsfData.frequency_id : null, <any>Validators.required),
      ff_start_date: new FormControl((this.smsfData) ? this.smsfData.ff_start_date : null, <any>Validators.required),
      fixed_fee: new FormControl((this.smsfData) ? this.smsfData.fixed_fee : null, [<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
      monthly_amount: new FormControl((this.smsfData) ? this.smsfData.monthly_amount : null),
      balance_amount: new FormControl((this.smsfData) ? this.smsfData.balance_amount : null),
      audit_fee_inc: new FormControl((this.smsfData) ? this.smsfData.audit_fee_inc : null),
      audit_fee: new FormControl((this.smsfData) ? this.smsfData.audit_fee : null),
      recurring_id: new FormControl((this.smsfData) ? this.smsfData.recurring_id : null),
      auto_invoice: new FormControl((this.smsfData) ? this.smsfData.auto_invoice : null, <any>Validators.required),
      notes: new FormControl((this.smsfData) ? this.smsfData.notes : null),
    });

    if (this.smsfData) {
      if (this.smsfData.ff_start_date) {
        this.updateFixedFee(this.smsfData.ff_start_date);
      }
      if (this.smsfData.fixed_fee) {
        this.updateFixedFeeAmount(this.smsfData.fixed_fee, this.smsfData.ff_start_date);
      }
      if (this.smsfData.audit_fee_inc === 0) {
        this.isAuditFees = true;
      }
      if (this.smsfData.frequency_id > 0) {
        this.changeGetRecurringList(this.serviceInfo['service_id'], 1, this.smsfData.frequency_id);
      }
      this.changeAutoInvoice(this.smsfData.recurring_id);
    }
  }

  /**
   * On Submit SMSF Info
   * @param form
   */
  onSubmitSMSFInfo(form: FormGroup) {
    if (form.valid) {
      if (form.value['ff_start_date']) {
        form.value['ff_start_date'] = moment(form.value['ff_start_date']).format('YYYY-MM-DD');
      }
      this._commonCrudService.updateData(AdminAPI.BILLING_SMSF, this.billingInformation.entity_id, form.value).subscribe((response) => {
      });
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
   * Display Get Recurring List
   * @param {number} id
   * @returns {string}
   */
  getRecurringName(id: number): string {
    const val = this.recurringList.filter(elem => elem.id === Number(id));
    return (val.length) ? val[0].recurring_name : '';
  }

  /**
   * Display Get Software List
   * @param {number} id
   * @returns {string}
   */
  getSoftwareName(id: number): string {
    const val = this.recurringList.filter(elem => elem.id === Number(id));
    return (val.length) ? val[0].recurring_name : '';
  }

  /**
   * Display Get Software List
   * @param {number} id
   * @returns {string}
   */

  getPlanName(id: number): string {
    const val = this.recurringList.filter(elem => elem.id === Number(id));
    return (val.length) ? val[0].recurring_name : '';
  }
}
