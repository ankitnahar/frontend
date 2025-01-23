import {Component, Input, OnInit} from '@angular/core';
import {CommonRegex, ToastErrorMessages, ValidationConstantMessage} from '../../../../../../utility/validation';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {BASE, ToastType, yesNo} from '../../../../../../utility/constants/base-constants';
import {PlanType, SoftwareMaster, SubscriptionData} from './subscription.model';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {BillingBasic} from '../../../../../../utility/shared-model/billing.model';
import {Frequency} from '../../../../../../utility/shared-model/frequency.model';
import {Recurring} from '../../../invoices/recurring/recurring.model';
import {DecimalPipe} from '@angular/common';
import {NoCommaPipe} from '../../../../../../utility/pipe/noComma.pipe';
import * as moment from 'moment';
import {AddSoftwareBasicSubscriptionComponent} from './add-software-basic-subscription/add-software-basic-subscription.component';
import {MatDialog} from '@angular/material';
import {AddPlanBasicSubscriptionComponent} from './add-plan-basic-subscription/add-plan-basic-subscription.component';

@Component({
  selector: 'app-subscription-services',
  templateUrl: './subscription-services.component.html',
  styleUrls: ['./subscription-services.component.scss'],
  providers: [DecimalPipe, NoCommaPipe]
})
export class SubscriptionServicesComponent extends BaseComponent implements OnInit {
  @Input() billingInformation: BillingBasic;
  @Input() serviceInfo: any;
  @Input() isEdit: any;

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  yesNoList = yesNo;
  planList: PlanType[] = [];
  planListAll: PlanType[] = [];
  softwareList: SoftwareMaster[] = [];
  frequencyList: Frequency[] = [];
  recurringList: Recurring[] = [];
  subscriptionData: SubscriptionData;
  // Form Variables
  subscriptionbasicForm: FormGroup;
  isFixedFeeReadOnly = true;


  constructor(private _decimalPipe: DecimalPipe, private _noCommaPipe: NoCommaPipe, public _router: Router, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedService: SharedService, public dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getPlanList();
    this.getFrequency();
    this.getServiceBasicInfo();
    this.createSubscriptionBasicForm();
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
   * Get Service Basic Information
   */
  getServiceBasicInfo() {
    this._commonCrudService.getData(AdminAPI.BILLING_SUBSCRIPTION, this.billingInformation.entity_id, {}).subscribe((response) => {
      this.subscriptionData = response.payload.data;
      this.createSubscriptionBasicForm();
      if (this.subscriptionData) {
        if (this.subscriptionData.software_id > 0) {
          this.onChangeSoftware(this.subscriptionData.software_id, 1);
        }
        if (this.subscriptionData.plan_id > 0) {
          this.updatePlanDetails(this.subscriptionData.plan_id);
        }
        if (this.subscriptionData.frequency_id > 0) {
          this.changeGetRecurringList(this.serviceInfo['service_id'], 1, this.subscriptionData.frequency_id);
        }
        this.changeAutoInvoice(this.subscriptionData.recurring_id);
      }
    });
  }

  /**
   * Get Frequency List
   */
  getFrequency() {
    this._commonCrudService.listData(AdminAPI.FREQUENCY, {}, {}).subscribe((response) => {
      if (response) {
        this.frequencyList = response.payload.data;
      }
    });
  }

  /**
   * Get Subscription Plan List
   */
  getPlanList() {
    this._commonCrudService.listData(AdminAPI.BILLING_SUBSCRIPTION_PLAN, {'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.planListAll = response.payload.data;
    });
    this._commonCrudService.listData(AdminAPI.BILLING_SUBSCRIPTION_SOFTWARE, {'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.softwareList = response.payload.data;
    });
  }

  /**
   * On Change Software get plan list
   * @param software_id
   */
  onChangeSoftware(software_id: number, type = 0) {
    this.planList = [];
    this.subscriptionbasicForm.get('plan_id').setValue(null);
    if (software_id > 0) {
      this.planList = this.planListAll.filter(item => item.parent_id.id === software_id);
    }
    if (this.subscriptionData && type === 1) {
      this.subscriptionbasicForm.get('plan_id').setValue(this.subscriptionData.plan_id);
    }
  }

  /**
   * On Change Plan Update Plan Information
   * @param plan_id
   */
  updatePlanDetails(plan_id: number) {
    if (plan_id > 0) {
      const planData = this.planList.filter(item => item.id === plan_id);
      if (planData.length) {
        const discount = Number(this.subscriptionbasicForm.get('discount').value);
        const standard_fee = Number(planData[0]['amount']);
        this.updateFixedFee(discount, standard_fee);
      }
    }
  }

  /**
   * On Change Plan Discount Amount Update Fixed Fee
   * @param discount
   */
  updateFixedFee(discountPercentage: number, standardFees?: number) {
    if (discountPercentage > 0) {
      const standard_fee = (standardFees) ? standardFees : this.subscriptionbasicForm.get('standard_fee').value;
      let fixed_fee = this.subscriptionbasicForm.get('fixed_fee').value;
      const discount_amount = (discountPercentage > 0) ? standard_fee * discountPercentage / BASE.PERCENTAGE_RATIO : 0;
      fixed_fee = standard_fee - discount_amount;
      this.subscriptionbasicForm.get('standard_fee').setValue(this._noCommaPipe.transform(this._decimalPipe.transform(standard_fee, '1.2-2')));
      this.subscriptionbasicForm.get('fixed_fee').setValue(this._noCommaPipe.transform(this._decimalPipe.transform(fixed_fee, '1.2-2')));
      this.isFixedFeeReadOnly = true;
    } else {
      const standard_fee = (standardFees) ? standardFees : this.subscriptionbasicForm.get('standard_fee').value;
      this.subscriptionbasicForm.get('standard_fee').setValue(this._noCommaPipe.transform(this._decimalPipe.transform(standard_fee, '1.2-2')));
      this.subscriptionbasicForm.get('fixed_fee').setValue(this._noCommaPipe.transform(this._decimalPipe.transform(standard_fee, '1.2-2')));
      this.isFixedFeeReadOnly = false;
    }
  }

  /**
   * Change Auto Invoice Status
   * @param recurring_id
   */
  changeAutoInvoice(recurring_id: any) {
    if (recurring_id === '') {
      this.subscriptionbasicForm.get('auto_invoice').setValue(null);
      this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, ToastType.ERROR);
    }
  }

  /**
   * Change Auto Invoice Status
   * @param recurring_id
   */
  changeAutoInvoiceType(value: number) {
    if (value) {
      const recurring_id = this.subscriptionbasicForm.get('recurring_id').value;
      if (recurring_id === '') {
        this.subscriptionbasicForm.get('auto_invoice').setValue(null);
        this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, ToastType.ERROR);
      }

      // this will check releated entity
      this._commonCrudService.getData(AdminAPI.BILLING_BASIC_VIEW, this.billingInformation.entity_id).subscribe((response) => {
        const DataItem = response.payload.data[this.billingInformation.entity_id];
        // console.log( DataItem);
        if (DataItem['is_related'] === 1 || DataItem['to_email'] === '' || DataItem['contact_person'] === '') {
          this.subscriptionbasicForm.get('auto_invoice').setValue(null);
          this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RELATED, ToastType.ERROR);
        }
      });
    }
  }

  /**
   * Create Bookkeping basic form
   */
  createSubscriptionBasicForm() {
    this.subscriptionbasicForm = this._fb.group({
      frequency_id: new FormControl((this.subscriptionData) ? this.subscriptionData.frequency_id : null, <any>Validators.required),
      software_id: new FormControl((this.subscriptionData) ? this.subscriptionData.software_id : null, <any>Validators.required),
      plan_id: new FormControl((this.subscriptionData) ? this.subscriptionData.plan_id : null),
      discount: new FormControl((this.subscriptionData) ? this.subscriptionData.discount : null, [<any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP)]),
      standard_fee: new FormControl((this.subscriptionData) ? this.subscriptionData.standard_fee : null, [<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
      fixed_fee: new FormControl((this.subscriptionData) ? this.subscriptionData.fixed_fee : null, [<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
      ff_start_date: new FormControl((this.subscriptionData) ? this.subscriptionData.ff_start_date : null, <any>Validators.required),
      recurring_id: new FormControl((this.subscriptionData) ? this.subscriptionData.recurring_id : null),
      auto_invoice: new FormControl((this.subscriptionData) ? this.subscriptionData.auto_invoice : null, <any>Validators.required),
      notes: new FormControl((this.subscriptionData) ? this.subscriptionData.notes : null),
    });
  }

  /**
   * On Submit Subscription Info
   * @param form
   */
  onSubmitSubscriptionInfo(form: FormGroup) {
    if (form.valid) {
      if (form.value['ff_start_date']) {
        form.value['ff_start_date'] = moment(form.value['ff_start_date']).format('YYYY-MM-DD');
      }
      this._commonCrudService.updateData(AdminAPI.BILLING_SUBSCRIPTION, this.billingInformation.entity_id, form.value).subscribe((response) => {
      });
    }
  }

  onAddSoftware() {
    let dialogRef = this.dialog.open(AddSoftwareBasicSubscriptionComponent, {
      panelClass: 'add-form-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  onAddPlan() {
    let dialogRef = this.dialog.open(AddPlanBasicSubscriptionComponent, {
      panelClass: 'add-form-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
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
    const val = this.softwareList.filter(elem => elem.id === Number(id));
    return (val.length) ? val[0].software_plan : '';
  }

  /**
   * Display Get Software List
   * @param {number} id
   * @returns {string}
   */

  getPlanName(id: number): string {
    const val = this.planList.filter(elem => elem.id === Number(id));
    return (val.length) ? val[0].software_plan : '';
  }
}
