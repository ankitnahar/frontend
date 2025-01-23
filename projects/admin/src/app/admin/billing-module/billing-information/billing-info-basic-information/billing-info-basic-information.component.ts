import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {CommonRegex, ValidationConstantMessage} from '../../../../../utility/validation';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {AddMoreClientTypeDialogComponent} from './add-more-client-type-dialog/add-more-client-type-dialog.component';
import {MatDialog} from '@angular/material';
import {BillingBasic} from '../../../../../utility/shared-model/billing.model';
import {category, fulltimeresource, noticeperiod, payment, yesNo} from '../../../../../utility/constants/base-constants';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {AdminAPI} from '../../../../../utility/constants/api';
import {Clients} from '../../../client-module/view-client/view-client.model';
import * as moment from 'moment';

@Component({
  selector: 'app-billing-info-basic-information',
  templateUrl: './billing-info-basic-information.component.html',
  styleUrls: ['./billing-info-basic-information.component.scss']
})
export class BillingInfoBasicInformationComponent extends BaseComponent implements OnInit {

  @Input() billingInformation: BillingBasic;
  @Input() isEdit: any;
  @Output() onAddUpdate: EventEmitter<boolean> = new EventEmitter(false);
  ClientBelongsToResponse = [];
  userList: AdminUser[] = [];
  clientList: Clients[] = [];
  stateList = [];
  billingCard = [];
  servicesAll = [];
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  yesNoList = yesNo;
  paymentList = payment;
  categoryList = category;
  noticeperiodList = noticeperiod;
  fulltimeResourceList = fulltimeresource;
  isCreditCard = false;
  isNetTransfer = false;
  isEziDebit = false;
  relatedEntityList = '';
// Form Variables
  clientBasicInfoForm: FormGroup;

  constructor(public _router: Router, private _fb: FormBuilder, public dialog: MatDialog, private _sharedObjService: SharedObjService,
              private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    // Do not change order
    this.getBasicServices();
    this.getBillingCard();
    this.getStateList();
    this.getClientList();
    this.getEntityBelongsToList();
    this.createBasicInformationForm();
    const value = {
      url: AdminAPI.BILLING_HISTORY + '/' + this.billingInformation.entity_id,
    };
    this._sharedService.setHistoryURL(value);
  }

  /**
   * Get Basic Services
   */
  getBasicServices() {
    //  this.getFilterFieldArray();
    this._commonCrudService.getData(AdminAPI.BILLING_BASIC_VIEW, this.billingInformation.entity_id).subscribe((response) => {
      const DataItem = response.payload.data;
      // console.log(DataItem['related_entity']);
      this.relatedEntityList = DataItem['related_entity'];
      if (this.relatedEntityList) {
        const itemData = this.getArrayToString(this.relatedEntityList, ',');
        this.clientBasicInfoForm.get('related_entity').setValue(itemData);
      }
      this.servicesAll = Object.values(DataItem['service']);
      if (this.servicesAll.length) {
        this.servicesAll.forEach(item => {
          this.getFilterFieldArray().push(this.createServiceGroup(item));
        });
      }
    });
  }

  /**
   * Get Client Belongs to list
   */
  getEntityBelongsToList() {
    this._commonCrudService.listData(AdminAPI.CLIENT_BELONGSTO, {'records': 'all'}).subscribe(Response => {
      this.ClientBelongsToResponse = Response.payload.data;
    });
  }

  /**
   * Get State list
   */
  getStateList() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      'records': 'all',
      'table': 'state',
      'column': 'state_id,state_name,category_option_id',
      'sortOrder': 'state_id',
      'sortBy': 'asc'
    }, {}).subscribe(Response => {
      this.stateList = Response;
    });
  }

  /**
   * Get Billing Card list
   */
  getBillingCard() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      'records': 'all',
      'table': 'billing_card',
      'column': 'id,name,surcharge',
      'sortOrder': 'id',
      'sortBy': 'asc'
    }, {}).subscribe(Response => {
      this.billingCard = Response;
    });
  }

  /**
   * Get Related Entity Common Invoice
   */
  getClientList() {
    this._commonCrudService.listData(AdminAPI.BILLING_BASIC_ENTITY + '/' + this.billingInformation.entity_id, {'records': 'all'}).subscribe(Response => {
      this.clientList = Response.payload.data;
    });
  }

  /**
   * Create Basic Information Form
   */
  createBasicInformationForm() {
    this.clientBasicInfoForm = this._fb.group({
      billing_name: new FormControl(this.billingInformation.billing_name, <any>Validators.required),
      contact_person: new FormControl(this.billingInformation.contact_person, [<any>Validators.required, <any>Validators.pattern(CommonRegex.NAME_REGEXP)]),
      to_email: new FormControl(this.billingInformation.to_email, [<any>Validators.required, <any>Validators.pattern(CommonRegex.MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
      cc_email: new FormControl(this.billingInformation.cc_email, [<any>Validators.pattern(CommonRegex.MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
      address: new FormControl(this.billingInformation.address, <any>Validators.required),
      notice_period: new FormControl(this.billingInformation.notice_period, <any>Validators.required),
      category_id: new FormControl(this.billingInformation.category_id, <any>Validators.required),
      full_time_resource: new FormControl(this.billingInformation.full_time_resource),
      debtor_followup: new FormControl(this.billingInformation.debtor_followup),
      merge_invoice: new FormControl(this.billingInformation.merge_invoice, <any>Validators.required),
      merge_ff: new FormControl(this.billingInformation.merge_ff, <any>Validators.required),
      entity_grouptype_id: new FormControl((this.billingInformation.entity_grouptype_id > 0) ? this.billingInformation.entity_grouptype_id : '', <any>Validators.required),
      state_id: new FormControl((this.billingInformation.state_id > 0) ? this.billingInformation.state_id : null, <any>Validators.required),
      payment_id: new FormControl((this.billingInformation.payment_id) ? this.billingInformation.payment_id : '', <any>Validators.required),
      related_entity: new FormControl((this.relatedEntityList) ? this.getArrayToString(this.relatedEntityList, ',') : []),
      // ddr_followup: new FormControl(this.billingInformation.ddr_followup),
      ddr_rec: new FormControl(Number(this.billingInformation.ddr_rec)),
      card_id: new FormControl((this.billingInformation.card_id > 0 ? this.billingInformation.card_id : null), <any>Validators.required),
      surcharge: new FormControl(this.billingInformation.surcharge),
      card_number: new FormControl(this.billingInformation.card_number, [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), Validators.maxLength(4)]),
      notes: new FormControl(this.billingInformation.notes),
      service: this._fb.array([])
    });
    this.checkIsCreditCard(this.billingInformation.payment_id);
    if (this.billingInformation.payment_id === 2) {
      this.getSurcharge(this.billingInformation.card_id);
    }
  }

  /**
   * Create Service Group Form
   */
  createServiceGroup(item ?: any) {
    return this._fb.group({
      billing_service_id: new FormControl(item ? item['billing_service_id'] : ''),
      service_id: new FormControl(item ? item['service_id'] : ''),
      service_name: new FormControl(item ? item['service_name'] : ''),
      contract_signed_date: new FormControl(item ? item['contract_signed_date'] : ''),
      is_active: new FormControl(item ? item['is_active'] : ''),
    });
  }

  /**
   * Get Filter Field Array
   */
  getFilterFieldArray(): FormArray {
    return <FormArray>this.clientBasicInfoForm.get('service');
  }

  /**
   * On Billing Information
   */
  onBillingInformation() {
    this._router.navigate(['/' + AdminRoutes.BILLING_INFORMATION]);
  }

  onAddMoreClientType() {
    let dialogRef = this.dialog.open(AddMoreClientTypeDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        clientBelongsToData: this.ClientBelongsToResponse
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getEntityBelongsToList();
    });

  }

  /**
   * Check if its credit card show other field with validation
   * @param value
   */
  checkIsCreditCard(value: number) {
    this.isEziDebit = false;
    this.clientBasicInfoForm.get('ddr_rec').setValidators(null);
    this.clientBasicInfoForm.get('ddr_rec').updateValueAndValidity();
    this.isCreditCard = false;
    this.clientBasicInfoForm.get('card_id').setValidators(null);
    this.clientBasicInfoForm.get('card_id').updateValueAndValidity();
    this.clientBasicInfoForm.get('surcharge').setValidators(null);
    this.clientBasicInfoForm.get('surcharge').updateValueAndValidity();
    this.clientBasicInfoForm.get('card_number').setValidators(null);
    this.clientBasicInfoForm.get('card_number').updateValueAndValidity();
    this.isNetTransfer = false;
    if (value === 1) {
      this.isEziDebit = true;
      this.clientBasicInfoForm.get('ddr_rec').setValidators(Validators.required);
      this.clientBasicInfoForm.get('ddr_rec').updateValueAndValidity();
    } else if (value === 2) {
      this.isCreditCard = true;
      this.clientBasicInfoForm.get('card_id').setValidators(Validators.required);
      this.clientBasicInfoForm.get('card_id').updateValueAndValidity();
      this.clientBasicInfoForm.get('surcharge').setValidators(Validators.required);
      this.clientBasicInfoForm.get('surcharge').updateValueAndValidity();
      this.clientBasicInfoForm.get('card_number').setValidators([<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), Validators.maxLength(4)]);
      this.clientBasicInfoForm.get('card_number').updateValueAndValidity();
    } else if (value === 3) {
      this.isNetTransfer = true;
    }
  }

  /**
   * Get Surcharge for that Card From Card ID
   * @param card_id
   */
  getSurcharge(card_id: number) {
    let surcharge = 0.00;
    if (card_id > 0) {
      const dataItem = this.billingCard.filter(item => item['id'] === card_id);
      if (dataItem.length) {
        surcharge = dataItem[0]['surcharge'];
        this.clientBasicInfoForm.get('surcharge').setValue(surcharge);
      }
    } else {
      this.clientBasicInfoForm.get('surcharge').setValue(surcharge);
    }
  }

  /**
   * Change Service Agreed Data Then Show Date
   * @param event
   * @param filterGroup
   * @param index
   */
  changeServiceAgreedData(event: any, filterGroup: any, index: number) {
    if (event) {
      this.getFilterFieldArray().controls[index].get('is_active').setValue(1);
      const todaysDate = moment(new Date()).format('YYYY-MM-DD');
      this.getFilterFieldArray().controls[index].get('contract_signed_date').setValue(todaysDate);
    } else {
      this.getFilterFieldArray().controls[index].get('is_active').setValue(0);
      this.getFilterFieldArray().controls[index].get('contract_signed_date').setValue(null);
    }
    // console.log(this.getFilterFieldArray().controls);
  }

  /**
   *
   * @param index
   * @param value
   */
  changeServiceAgreedDateValue(index: number, value: any) {
    if (value) {
      const todaysDate = moment(value).format('YYYY-MM-DD');
      this.getFilterFieldArray().controls[index].get('contract_signed_date').setValue(todaysDate);
    }
  }

  /**
   *
   * @param form
   */
  submitBasicInformationForm(form: FormGroup) {
    if (form.valid) {
      if (form.value) {
        if (form.value['payment_id'] === 1) {
          // form.value['ddr_followup'] = 0;
          form.value['card_id'] = 0;
          form.value['surcharge'] = 0;
          form.value['card_number'] = 0;
        } else if (form.value['payment_id'] === 2) {
          form.value['ddr_rec'] = 0;
          // form.value['ddr_followup'] = 0;
        } else if (form.value['payment_id'] === 3) {
          form.value['ddr_rec'] = 0;
          form.value['card_id'] = 0;
          form.value['surcharge'] = 0;
          form.value['card_number'] = 0;
        }
      }
      this._commonCrudService.updateDataWithPut(AdminAPI.BILLING, this.billingInformation.id, form.value).subscribe((response) => {
        if (response) {
          this.getBasicServices();
          this.onAddUpdate.emit(true);
          this.clientBasicInfoForm.setControl('service', this._fb.array([]));
        }
      });
    }
  }

  /**
   * Get array values from string
   * @param {string} value
   * @param {string} seperator
   * @returns {string[]}
   */
  getArrayToString(value: any, seperator: string, isNotNumber?: number) {
    if (value) {
      const valueOne = [];
      value.split(seperator).map(item => {
        if (isNotNumber) {
          valueOne.push(item);
        } else {
          valueOne.push(Number(item));
        }
      });
      return valueOne;
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
   * Display Get Status List
   * @param {number} status_id
   * @returns {string}
   */
  getPaymentStatus(id: number): string {
    const val = this.paymentList.filter(elem => elem.key === Number(id));
    return (val.length) ? val[0].label : '';
  }

  /**
   * Display Get Status List
   * @param {number} status_id
   * @returns {string}
   */
  getCategoryName(cat_id: number): string {
    const val = this.categoryList.filter(elem => elem.key === Number(cat_id));
    return (val.length) ? val[0].label : '';
  }

  /**
   * Display Get Status List
   * @param {number} status_id
   * @returns {string}
   */
  getFullTimeResource(id: number): string {
    const val = this.fulltimeResourceList.filter(elem => elem.key === Number(id));
    return (val.length) ? val[0].label : '';
  }

  /**
   * Get Job Name
   * @param id
   */
  getJobName(id: number): string {
    const val = this.stateList.filter(elem => elem.state_id === Number(id));
    return (val.length) ? val[0].state_name : '';
  }

  /**
   * Get Client Belongs to Name
   * @param id
   */
  getClientBelongsToName(id: number): string {
    const val = this.ClientBelongsToResponse.filter(elem => elem.id === Number(id));
    return (val.length) ? val[0].name : '';
  }

  /**
   * Get Client Belongs to Name
   * @param id
   */
  getCardName(id: number): string {
    const val = this.billingCard.filter(elem => elem.id === Number(id));
    return (val.length) ? val[0].name : '';
  }

  /**
   * Get Client Belongs to Name
   * @param id
   */
  getClientName(id: string): string {
    const valueData = [];
    // console.log(id);
    if (id) {
      id.split(',').forEach(item => {
        const val = this.clientList.filter(elem => elem.id === Number(item));
        if (val) {
          (val.length) ? valueData.push(val[0].trading_name) : '';
        }
      });
    }
    return valueData.join(', ');
  }
}
