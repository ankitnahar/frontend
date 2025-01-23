import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonRegex, ToastErrorMessages, ValidationConstantMessage} from '../../../../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {Router} from '@angular/router';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {DecimalPipe} from '@angular/common';
import {NoCommaPipe} from '../../../../../../../utility/pipe/noComma.pipe';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {BillingBasic} from '../../../../../../../utility/shared-model/billing.model';
import {ToastType, yesNo} from '../../../../../../../utility/constants/base-constants';
import {Recurring} from '../../../../invoices/recurring/recurring.model';
import {HostingData} from '../hosting.model';

@Component({
  selector: 'app-hosting-basic',
  templateUrl: './hosting-basic.component.html',
  providers: [DecimalPipe, NoCommaPipe]
})
export class HostingBasicComponent extends BaseComponent implements OnInit {

  @Input() billingInformation: BillingBasic;
  @Input() serviceInfo: any;
  @Input() isEdit: any;
  @Output() onAddUpdate: EventEmitter<boolean> = new EventEmitter(false);

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  yesNoList = yesNo;
  recurringList: Recurring[] = [];
  hostingData: HostingData;
  isSetupCost = false;
  service_id = 0;
  // Form Variables
  hostingbasicForm: FormGroup;

  constructor(public _router: Router, private _fb: FormBuilder, private _decimalPipe: DecimalPipe, private _noCommaPipe: NoCommaPipe, private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.service_id = this.serviceInfo['service_id'];
    this.getServiceBasicInfo();
    this.createHostingbasicForm();
    this.getRecurringList(this.service_id, 1, 3);
    const value = {
      url: AdminAPI.BILLING_SERVICES_HISTORY + '/' + this.billingInformation.entity_id,
      params: {'service_id': this.serviceInfo['service_id']},
    };
    this._sharedService.setHistoryURL(value);
  }

  /**
   * On Change Frequency Get Recurring List
   * @param service_id
   * @param inc_in_ff
   * @param frequency_id
   */
  getRecurringList(service_id = this.service_id, inc_in_ff = 1, frequency_id = 1) {
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
   * Get Service Basic Information
   */
  getServiceBasicInfo() {
    this._commonCrudService.getData(AdminAPI.BILLING_HOSTING, this.billingInformation.entity_id, {}).subscribe((response) => {
      this.hostingData = response.payload.data;
      this.createHostingbasicForm();
    });
  }

  /**
   * Change Audit Fees Type Hide show field
   * @param value
   */
  changeSetupCostType(value: number) {
    if (value > 0) {
      this.hostingbasicForm.get('setup_cost').setValidators([<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]);
      this.hostingbasicForm.get('setup_cost').updateValueAndValidity();
      this.isSetupCost = true;
    } else {
      this.hostingbasicForm.get('setup_cost').setValue(null);
      this.hostingbasicForm.get('setup_cost').setValidators(null);
      this.hostingbasicForm.get('setup_cost').updateValueAndValidity();
      this.isSetupCost = false;
    }
  }

  /**
   * Change Auto Invoice Status
   * @param recurring_id
   */
  changeAutoInvoice(recurring_id: any) {
    if (recurring_id === '') {
      this.hostingbasicForm.get('auto_invoice').setValue(null);
      this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, ToastType.ERROR);
    }
  }

  /**
   * Change Auto Invoice Status
   * @param recurring_id
   */
  changeAutoInvoiceType(value: number) {
    if (value) {
      const recurring_id = this.hostingbasicForm.get('recurring_id').value;
      if (recurring_id === '') {
        this.hostingbasicForm.get('auto_invoice').setValue(null);
        this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, ToastType.ERROR);
      }

      // this will check releated entity
      this._commonCrudService.getData(AdminAPI.BILLING_BASIC_VIEW, this.billingInformation.entity_id).subscribe((response) => {
        const DataItem = response.payload.data[this.billingInformation.entity_id];
        // console.log( DataItem);
        if (DataItem['is_related'] === 1 || DataItem['to_email'] === '' || DataItem['contact_person'] === '') {
          this.hostingbasicForm.get('auto_invoice').setValue(null);
          this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RELATED, ToastType.ERROR);
        }
      });
    }
  }

  /**
   * Create Bookkeping basic form
   */
  createHostingbasicForm() {
    this.hostingbasicForm = this._fb.group({
      is_setup_cost: new FormControl((this.hostingData) ? this.hostingData.is_setup_cost : null),
      setup_cost: new FormControl((this.hostingData) ? this.hostingData.setup_cost : null),
      basic_rate: new FormControl((this.hostingData) ? this.hostingData.basic_rate : null, [<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
      permium_rate: new FormControl((this.hostingData) ? this.hostingData.permium_rate : null, [<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
      recurring_id: new FormControl((this.hostingData) ? this.hostingData.recurring_id : null),
      auto_invoice: new FormControl((this.hostingData) ? this.hostingData.auto_invoice : null, <any>Validators.required),
      notes: new FormControl((this.hostingData) ? this.hostingData.notes : null),
    });

    if (this.hostingData) {
      this.changeSetupCostType(this.hostingData.is_setup_cost);
    }
  }

  /**
   * On Submit SMSF Info
   * @param form
   */
  onSubmitHostingInfo(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.updateData(AdminAPI.BILLING_HOSTING, this.billingInformation.entity_id, form.value).subscribe((response) => {
        this.onAddUpdate.emit(true);
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
   * Display Get Recurring List
   * @param {number} id
   * @returns {string}
   */
  getRecurringName(id: number): string {
    const val = this.recurringList.filter(elem => elem.id === Number(id));
    return (val.length) ? val[0].recurring_name : '';
  }
}
