import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonRegex, ToastErrorMessages, ValidationConstantMessage} from '../../../../../../../utility/validation';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {BillingBasic} from '../../../../../../../utility/shared-model/billing.model';
import {BASE, serviceRPH, ToastType, yesNo} from '../../../../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {Frequency} from '../../../../../../../utility/shared-model/frequency.model';
import {Recurring} from '../../../../invoices/recurring/recurring.model';
import {DecimalPipe} from '@angular/common';
import {NoCommaPipe} from '../../../../../../../utility/pipe/noComma.pipe';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {BookkeepingData} from '../bookkeeping.model';
import * as moment from 'moment';
import {CommonHistoryDialogComponent} from '../../../../../../../utility/components/common-history-dialog/common-history-dialog.component';
import {MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-bookkeeping-basic',
  templateUrl: './bookkeeping-basic.component.html',
  providers: [DecimalPipe, NoCommaPipe]
})
export class BookkeepingBasicComponent extends BaseComponent implements OnInit {
  @Input() billingInformation: BillingBasic;
  @Input() serviceInfo: any;
  @Input() isEdit: any;
  @Output() onAddUpdate: EventEmitter<boolean> = new EventEmitter(false);
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  bookkeepingbasicForm: FormGroup;
  bookkeepingData: BookkeepingData;
  frequencyList: Frequency[] = [];
  recurringList: Recurring[] = [];
  yesNoList = yesNo;
  servicesRPHList = serviceRPH;
  isOpenHistoryDialog = false;
  //variable
  serviceSelect: string = 'All';

  constructor(private _decimalPipe: DecimalPipe, public dialog: MatDialog,
              private _noCommaPipe: NoCommaPipe, public _router: Router,
              private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    // console.log(this.isEdit);
    this.getFrequency();
    this.getServiceBasicInfo();
    this.createBookkeepingbasicForm();
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
    this._commonCrudService.getData(AdminAPI.BILLING_BOOKKEEPING, this.billingInformation.entity_id, {}).subscribe((response) => {
      this.bookkeepingData = response.payload.data;
      // console.log(this.bookkeepingData);
      this.createBookkeepingbasicForm();
      if (this.bookkeepingData) {
        const BookkeepingArray = [];
        BookkeepingArray['service_id'] = this.bookkeepingData['service_id'];
        BookkeepingArray['billing_id'] = this.bookkeepingData['id'];
        BookkeepingArray['service_name'] = this.bookkeepingData['service_name'];
        BookkeepingArray['contract_signed_date'] = this.bookkeepingData['contract_signed_date'];
        BookkeepingArray['rph'] = this.bookkeepingData['ff_rph'];
        BookkeepingArray['inc_in_ff'] = this.bookkeepingData['bk_in_ff'];
        BookkeepingArray['fixed_fee'] = this.bookkeepingData['fixed_fee'];
        BookkeepingArray['ff_start_date'] = this.bookkeepingData['ff_start_date'];
        this.getFilterFieldArray().push(this.createServiceGroup(BookkeepingArray));
        this.updateValueAndUnits(0);
        if (this.bookkeepingData['service_rph']) {
          let i = 1;
          this.bookkeepingData['service_rph'].forEach(item => {
            this.getFilterFieldArray().push(this.createServiceGroup(item));
            this.updateValueAndUnits(i);
            i = i + 1;
          });
        }
      }
    });
  }

  /**
   * Create Bookkeping basic form
   */
  createBookkeepingbasicForm() {
    this.bookkeepingbasicForm = this._fb.group({
      frequency_id: new FormControl((this.bookkeepingData) ? (this.bookkeepingData.frequency_id) ? this.bookkeepingData.frequency_id : null : null, <any>Validators.required),
      default_rph: new FormControl((this.bookkeepingData) ? (this.bookkeepingData.default_rph !== '0.00') ? this.bookkeepingData.default_rph : this._noCommaPipe.transform(this._decimalPipe.transform(BASE.DEFAULT_RPH, '1.2-2')) : this._noCommaPipe.transform(this._decimalPipe.transform(BASE.DEFAULT_RPH, '1.2-2')), [<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP)]),
      recurring_id: new FormControl((this.bookkeepingData) ? this.bookkeepingData.recurring_id : ''),
      auto_invoice: new FormControl((this.bookkeepingData) ? this.bookkeepingData.auto_invoice : '', <any>Validators.required),
      notes: new FormControl((this.bookkeepingData) ? this.bookkeepingData.notes : ''),
      service_rph: this._fb.array([])
    });
    if (this.bookkeepingData) {
      if (this.bookkeepingData.frequency_id > 0) {
        this.changeGetRecurringList(this.serviceInfo['service_id'], this.bookkeepingData ? Number(this.bookkeepingData['bk_in_ff']) : 1, this.bookkeepingData.frequency_id);
      }
      this.changeAutoInvoice(this.bookkeepingData.recurring_id);
    }
  }

  /**
   * Create Service Group Form
   */
  createServiceGroup(item ?: any) {
    return this._fb.group({
      id: new FormControl(item ? item['id'] : ''),
      billing_id: new FormControl(item ? item['billing_id'] : ''),
      service_id: new FormControl(item ? item['service_id'] : ''),
      service_name: new FormControl(item ? item['service_name'] : ''),
      contract_signed_date: new FormControl(item ? (item['contract_signed_date'] !== '0000-00-00' && item['contract_signed_date'] !== null) ? item['contract_signed_date'] : null : null, (item['inc_in_ff'] === 1) ? [<any>Validators.required] : null),
      inc_in_ff: new FormControl(item ? (item['inc_in_ff'] > 0) ? item['inc_in_ff'] : 0 : 0),
      rph: new FormControl(item ? (item['rph'] > 0) ? item['rph'] : this.getServiceRPH(item['service_id']) : BASE.DEFAULT_RPH, [<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP)]),
      ff_start_date: new FormControl(item ? (item['ff_start_date'] !== '0000-00-00' && item['ff_start_date'] !== null) ? item['ff_start_date'] : null : null, (item['inc_in_ff'] === 1) ? [<any>Validators.required] : null),
      fixed_unit: new FormControl(item ? item['fixed_unit'] : ''),
      fixed_fee: new FormControl(item ? item['fixed_fee'] : null, (item['inc_in_ff'] === 1) ? [<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)] : null),
    });
  }

  /**
   * Get Filter Field Array
   */
  getFilterFieldArray(): FormArray {
    return <FormArray>this.bookkeepingbasicForm.get('service_rph');
  }

  /**
   * Change Auto Invoice Status
   * @param recurring_id
   */
  changeAutoInvoice(recurring_id: any) {
    if (recurring_id === '') {
      this.bookkeepingbasicForm.get('auto_invoice').setValue(null);
      this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, ToastType.ERROR);
    }
  }

  /**
   * Change Auto Invoice Status
   * @param recurring_id
   */
  changeAutoInvoiceType(value: number) {
    if (value) {
      const recurring_id = this.bookkeepingbasicForm.get('recurring_id').value;
      // console.log( recurring_id);
      if (recurring_id === '') {
        this.bookkeepingbasicForm.get('auto_invoice').setValue(null);
        this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING, ToastType.ERROR);
      }
      // this will check releated entity
      this._commonCrudService.getData(AdminAPI.BILLING_BASIC_VIEW, this.billingInformation.entity_id).subscribe((response) => {
        const DataItem = response.payload.data[this.billingInformation.entity_id];
        // console.log( DataItem);
        if (DataItem['is_related'] === 1 || DataItem['to_email'] === '' || DataItem['contact_person'] === '') {
          this.bookkeepingbasicForm.get('auto_invoice').setValue(null);
          this._sharedService.setToastMessage(ToastErrorMessages.CAN_NO_SEND_AUTO_INVOICE_TO_RELATED, ToastType.ERROR);
        }
      });
    }
  }

  /**
   * Update RPH Value
   * @param index
   */
  updateRPHValue(index: number, value: any) {
    this.getFilterFieldArray().controls[index].get('rph').setValue(value);
    this.updateValueAndUnits(index);
  }

  /**
   * Update Inc in ff value
   * @param index
   */
  updateIncFF(index: number, value: number) {
    const todaysDate = moment(new Date()).format('YYYY-MM-DD');
    if (value > 0) {
      this.getFilterFieldArray().controls[index].get('inc_in_ff').setValue(value);
      this.getFilterFieldArray().controls[index].get('fixed_fee').setValidators([<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]);
      this.getFilterFieldArray().controls[index].get('ff_start_date').setValidators(<any>Validators.required);
      this.getFilterFieldArray().controls[index].get('contract_signed_date').setValidators(<any>Validators.required);
      this.getFilterFieldArray().controls[index].get('contract_signed_date').updateValueAndValidity();
      this.getFilterFieldArray().controls[index].get('ff_start_date').updateValueAndValidity();
      this.getFilterFieldArray().controls[index].get('ff_start_date').setValue(todaysDate);
      if (this.getFilterFieldArray().controls[index].get('contract_signed_date').value) {
      } else {
        this.getFilterFieldArray().controls[index].get('contract_signed_date').setValue(todaysDate);
      }
      this.getFilterFieldArray().controls[index].get('fixed_fee').updateValueAndValidity();
      this.getFilterFieldArray().controls[index].get('inc_in_ff').updateValueAndValidity();
      this.updateValueAndUnits(index);
    } else {
      this.getFilterFieldArray().controls[index].get('inc_in_ff').setValue(value);
      this.getFilterFieldArray().controls[index].get('inc_in_ff').updateValueAndValidity();
      this.getFilterFieldArray().controls[index].get('fixed_fee').setValue(null);
      this.getFilterFieldArray().controls[index].get('fixed_fee').setValidators(null);
      this.getFilterFieldArray().controls[index].get('fixed_fee').updateValueAndValidity();
      this.getFilterFieldArray().controls[index].get('fixed_unit').setValue(null);
      this.getFilterFieldArray().controls[index].get('fixed_unit').updateValueAndValidity();
      this.getFilterFieldArray().controls[index].get('ff_start_date').setValue(null);
      this.getFilterFieldArray().controls[index].get('ff_start_date').setValidators(null);
      this.getFilterFieldArray().controls[index].get('ff_start_date').updateValueAndValidity();
      if (this.getFilterFieldArray().controls[index].get('contract_signed_date').value) {

      } else {
        this.getFilterFieldArray().controls[index].get('contract_signed_date').setValue(null);
      }
      this.getFilterFieldArray().controls[index].get('contract_signed_date').setValidators(null);
      this.getFilterFieldArray().controls[index].get('contract_signed_date').updateValueAndValidity();
      // console.log(this.getFilterFieldArray().controls[index]);
      this.updateValueAndUnits(index);
    }
  }

  /**
   * Update FF Amount
   * @param index
   */
  updateFFAmount(index: number, value: any) {
    this.getFilterFieldArray().controls[index].get('fixed_fee').setValue(value);
    this.updateValueAndUnits(index);
  }

  /**
   * Update FF Start Date
   * @param index
   */
  updateFFStartDate(index: number, value: any) {
    value = (value && value != null) ? moment(value).format('YYYY-MM-DD') : null;
    this.getFilterFieldArray().controls[index].get('ff_start_date').setValue(value);
  }

  /**
   *
   * @param index
   * @param value
   */
  updateContractSignedDate(index: number, value: any) {
    const valueData = (value && value !== null) ? moment(value).format('YYYY-MM-DD') : null;
    this.getFilterFieldArray().controls[index].get('contract_signed_date').setValue(valueData);
  }

  /**
   * Change & Update Value Unit
   * @param index
   */
  updateValueAndUnits(index: number) {
    const inc_in_ff = this.getFilterFieldArray().controls[index].get('inc_in_ff').value;
    if (inc_in_ff > 0) {
      const ff_rph = this.getFilterFieldArray().controls[index].get('rph').value;
      const fixed_fee = this.getFilterFieldArray().controls[index].get('fixed_fee').value;
      let fixed_unit = 0;
      fixed_unit = fixed_fee / ff_rph * BASE.UNIT_RATIO;
      this.getFilterFieldArray().controls[index].get('fixed_unit').setValue(this._noCommaPipe.transform(this._decimalPipe.transform(fixed_unit, '1.0-0')));
    }
    this.updateTotalAmountAndUnits();
  }

  /**
   * Update Total Amount And Units
   */
  updateTotalAmountAndUnits() {
    const itemOfArray = this.getFilterFieldArray().controls;
    let totalAmount = 0;
    let totalUnit = 0;
    if (itemOfArray.length) {
      itemOfArray.forEach(item => {
        totalUnit += Number(item.value['fixed_unit']);
        totalAmount += Number(item.value['fixed_fee']);
      });
    }

    this.bookkeepingData['fixed_total_amount'] = this._noCommaPipe.transform(this._decimalPipe.transform(totalAmount, '1.2-2'));
    this.bookkeepingData['fixed_total_unit'] = this._noCommaPipe.transform(totalUnit);
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
   * On Submit Bookkeeping Info
   * @param form
   */
  onSubmitBookkeepingInfo(form: FormGroup) {
    if (form.valid) {
      // console.log(form.value);
      const ServiceRPH = form.value['service_rph'];
      // console.log(ServiceRPH);
      if (ServiceRPH.length) {
        ServiceRPH.map(item => {
          item['ff_start_date'] = item['ff_start_date'] !== null ? moment(item['ff_start_date']).format('YYYY-MM-DD') : null;
          item['contract_signed_date'] = item['contract_signed_date'] !== null ? moment(item['contract_signed_date']).format('YYYY-MM-DD') : null;
        });
        form.value['fixed_total_amount'] = this.bookkeepingData['fixed_total_amount'];
        form.value['fixed_total_unit'] = this.bookkeepingData['fixed_total_unit'];

        form.value['contract_signed_date'] = ServiceRPH[0]['contract_signed_date'] !== null ? moment(ServiceRPH[0]['contract_signed_date']).format('YYYY-MM-DD') : null;
        form.value['bk_in_ff'] = (ServiceRPH[0]['inc_in_ff'] > 0) ? ServiceRPH[0]['inc_in_ff'] : 0;
        form.value['ff_rph'] = ServiceRPH[0]['rph'];
        form.value['fixed_fee'] = ServiceRPH[0]['fixed_fee'];
        form.value['ff_start_date'] = ServiceRPH[0]['ff_start_date'] !== null ? moment(ServiceRPH[0]['ff_start_date']).format('YYYY-MM-DD') : null;

        form.value['service_rph'].splice(0, 1);
      }
      // Update Data
      this._commonCrudService.updateData(AdminAPI.BILLING_BOOKKEEPING, this.billingInformation.entity_id, form.value).subscribe((response) => {
        this.onAddUpdate.emit(true);
        this.getServiceBasicInfo();
      });
    }
    this.moveToSelectedTab("Sub Activity");
  }

  moveToSelectedTab(tabName: string) {
    for (let i = 0; i < document.querySelectorAll('.mat-tab-label-content').length; i++) {
      if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText === tabName) {
        (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
      }
    }
  }


  /**
   * Get Service Wise Default RPH
   * @param service_id
   */
  getServiceRPH(service_id: number): number {
    const val = this.servicesRPHList.filter(elem => elem.key === Number(service_id));
    return (val.length) ? this._noCommaPipe.transform(this._decimalPipe.transform(val[0].label, '1.2-2')) : this._noCommaPipe.transform(this._decimalPipe.transform(BASE.DEFAULT_RPH, '1.2-2'));
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
   * View Bokkeeping Fees Structure History
   * @param {Contact} contact
   */
  viewFeesStructureInformationHistory(billingId: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const value = {
      url: AdminAPI.BILLING_HISTORY_FEES + '/' + billingId,
    };
    this._sharedService.setHistoryURL(value);
    const dialogRef = this.dialog.open(CommonHistoryDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((valueData) => {
      const valueItem = {
        url: AdminAPI.BILLING_SERVICES_HISTORY + '/' + this.billingInformation.entity_id,
        params: {'service_id': this.serviceInfo['service_id']},
      };
      this._sharedService.setHistoryURL(valueItem);
    });
  }
}
