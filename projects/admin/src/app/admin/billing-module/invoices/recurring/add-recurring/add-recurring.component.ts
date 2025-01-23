import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {Router} from '@angular/router';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {Services} from '../../../../../../utility/shared-model/services.model';
import {Frequency} from '../../../../../../utility/shared-model/frequency.model';
import {days, GLOBALDATAKEYS, yesNo} from '../../../../../../utility/constants/base-constants';
import {Clients} from '../../../../client-module/view-client/view-client.model';
import * as moment from 'moment';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {Recurring} from '../recurring.model';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';

@Component({
  selector: 'app-add-recurring',
  templateUrl: './add-recurring.component.html',
  styleUrls: ['./add-recurring.component.scss'],
  providers: [CommonCrudService]
})
export class AddRecurringComponent extends BaseComponent implements OnInit, OnDestroy {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  serviceList: Services[] = [];
  serviceListChange: Services[] = [];
  frequencyList: Frequency[] = [];
  fixedFeeList = yesNo;

  getRecurringData: Recurring = null;
  daysList = days;

  clientList: Clients[] = [];
  selectedFilterEntity = null;
  clientListMultiple = [];
  // Form Group Variables
  addRecurringForm: FormGroup;

  // State variables
  isMultipleClientName = false;
  isFrequencyChange = false;
  isRepetition = 0;

  constructor(private _router: Router, private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    const backForChange = this._sharedService.getClientData(GLOBALDATAKEYS.PREVIOUS_RECURRING);
    const editRecurring = this._sharedService.getClientData(GLOBALDATAKEYS.RECURRING);
    if (backForChange) {
      this.getRecurringData = backForChange;
    }
    if (editRecurring) {
      this.getRecurringData = editRecurring;
    }
    this.getClientList();
    this.createAddRecurringForm();
    this.getServices();
    this.getFrequency();
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = response;
      if (this.getRecurringData && this.getRecurringData.rec_type === 1) {
        this.isMultipleClientName = false;
        this.selectedFilterEntity = this.getRecurringData.entity_id;

        this.addRecurringForm.get('entity_id').setValue(Number(this.selectedFilterEntity));
        this.addRecurringForm.get('entity_id').updateValueAndValidity();
        // console.log(this.addRecurringForm.get('entity_id'));
      }
    });

  }

  /**
   * Default search params for client listing API
   * @returns {{compare: {notequal: {discontinue_stage: number}}}}
   */
  getClientSearchParam() {
    return {
      compare: {
        notequal: {
          discontinue_stage: 2
        }
      }
    };
  }

  /**
   * Add recurring form
   */
  createAddRecurringForm() {

    // Check Here Single Client or Multiple Client
    if (this.getRecurringData && this.getRecurringData.rec_type === 2) {
      this.isMultipleClientName = true;
    }

    // Check Here Repetition Type
    if (this.getRecurringData && this.getRecurringData.repetition_type > 0) {
      this.isRepetition = this.getRecurringData.repetition_type;
    }
    this.addRecurringForm = this._fb.group({
      rec_type: new FormControl(''),
      recurring_name: new FormControl((this.getRecurringData) ? this.getRecurringData.recurring_name : '', <any>Validators.required),
      entity_id: new FormControl(null, <any>Validators.required),
      service_id: new FormControl((this.getRecurringData) ? this.getRecurringData.service_id : '', <any>Validators.required),
      fixed_fee: new FormControl((this.getRecurringData) ? this.getRecurringData.fixed_fee : '', <any>Validators.required),
      frequency_id: new FormControl((this.getRecurringData) ? this.getRecurringData.frequency_id : '', <any>Validators.required),
      next_due: new FormControl((this.getRecurringData) ? this.getRecurringData.next_due : '', <any>Validators.required),
      inv_logic: new FormControl((this.getRecurringData) ? this.getRecurringData.inv_logic : '', <any>Validators.required),
      inv_days: new FormControl((this.getRecurringData) ? this.getRecurringData.inv_days : '', <any>Validators.required),
      inv_weekday: new FormControl((this.getRecurringData) ? this.getRecurringData.inv_weekday : ''),
      repetition_type: new FormControl(''),
      date: new FormControl(''),
      times: new FormControl((+this.isRepetition === 3 && this.getRecurringData) ? this.getRecurringData.times : 6),
      notes: new FormControl((this.getRecurringData) ? this.getRecurringData.notes : ''),
      repeat_date: new FormControl((+this.isRepetition === 2 && this.getRecurringData) ? this.getRecurringData.repeat_date : null),
      repeat_indefinitely: new FormControl((+this.isRepetition === 1 && this.getRecurringData) ? this.getRecurringData.repeat_indefinitely : new Date(new Date().getTime() + (60 * 60 * 24 * 1095000)))
    });
    // Check Here Single Client or Multiple Client
    if (this.getRecurringData && this.getRecurringData.rec_type === 2) {
      this.OnFrequencyChange();
    }

    if (this.getRecurringData && this.getRecurringData.rec_type === 1) {
      this.isMultipleClientName = false;
      this.selectedFilterEntity = this.getRecurringData.entity_id;
      // console.log(this.selectedFilterEntity);
      this.addRecurringForm.get('entity_id').setValue(Number(this.selectedFilterEntity));
    }
  }

  /**
   * Get Service List
   */
  getServices() {
    this._sharedObjService.getServices({}, {'compare': {'equal': {'parent_id': 0}}}).subscribe((response) => {
      if (response) {
        this.serviceList = response;
        this.serviceListChange = response;
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
   * Add recurring form submit
   * @param value
   * @param valid
   */
  onSubmitAddRecurringForm(form: FormGroup) {
    if (form.valid) {
      form.value['repetition_type'] = this.isRepetition;
      form.value['rec_type'] = (this.isMultipleClientName) ? 2 : 1;
      form.value['is_confirm'] = 0;
      form.value['next_due'] = moment(form.value['next_due']).format('YYYY-MM-DD');
      if (+this.isRepetition === 1) {
        form.value['repeat_indefinitely'] = moment(form.value['repeat_indefinitely']).format('YYYY-MM-DD');
        delete form.value['times'];
        delete form.value['repeat_date'];
      } else if (+this.isRepetition === 2) {
        delete form.value['times'];
        delete form.value['repeat_indefinitely'];
        form.value['repeat_date'] = moment(form.value['repeat_date']).format('YYYY-MM-DD');
      } else if (+this.isRepetition === 3) {
        delete form.value['repeat_date'];
        delete form.value['repeat_indefinitely'];
      }

      if (this.isMultipleClientName) {
        form.value['entity_id'] = form.value['entity_id'].join(',');
      }

      const id = (this.getRecurringData && this.getRecurringData.id > 0) ? this.getRecurringData.id : 0;
      this._commonCrudService.addData(AdminAPI.INVOICE_RECURRING_SAVE + '/' + id, form.value).subscribe((response) => {
        this._sharedService.setRecurringData(response.payload);
        this.onRecurringPreview();
      });
    }
  }

  /**
   * On change due date
   * @param event
   */
  onChangeRepetition(value) {
    if (value > 0) {
      this.isRepetition = value;
    } else {
      this.isRepetition = 0;
    }
  }

  /**
   * On Client Change Get Service list for single client
   * @param selectedData
   */
  onClientChange(selectedData) {
    const entity_id = (selectedData) ? selectedData.id : 0;
    const recurring_id = (this.getRecurringData) ? this.getRecurringData.id : 0;
    if (entity_id > 0) {
      this._commonCrudService.getData(AdminAPI.INVOICE_RECURRING_GETSERVICE, entity_id, {'recurring_id': recurring_id}).subscribe((response) => {
        if (response) {
          this.serviceList = response.payload.data;
        }
      });
    } else {
      this.serviceList = this.serviceListChange;
    }
  }

  /**
   * Service Change need to update fixed fee and frequency for single client
   * @param value
   * @param param
   */
  onChangeService(value, param) {
    if (param === 1) {
      const ServiceData = this.serviceList;
      ServiceData.forEach(item => {
        if (+item.id === value) {
          this.addRecurringForm.patchValue({'fixed_fee': item.inc_in_ff});
          if (item.frequency_id === 0) {
            this.addRecurringForm.patchValue({'frequency_id': null});
          } else {
            this.addRecurringForm.patchValue({'frequency_id': item.frequency_id});
          }
        }
      });
    }
  }

  /**
   * For Frequency Change need to get entity list for multiple client
   */
  OnFrequencyChange() {
    const frequency_id = Number(this.addRecurringForm.get('frequency_id').value);
    const service_id = Number(this.addRecurringForm.get('service_id').value);
    const fixed_fee = Number(this.addRecurringForm.get('fixed_fee').value);
    const recurring_id = (this.getRecurringData && this.getRecurringData.id > 0) ? this.getRecurringData.id : 0;
    // console.log(this.getRecurringData);
    const params = {'service_id': service_id, 'fixedfee': fixed_fee, 'frequency_id': frequency_id, 'recurring_id': recurring_id};
    if (frequency_id > 0 && fixed_fee >= 0 && service_id > 0) {
      this.clientListMultiple = [];
      this.unselectAll();
      this._commonCrudService.getData(AdminAPI.INVOICE_RECURRING_GETENTITY, 0, params).subscribe((response) => {
        if (response) {
          this.clientListMultiple = (response.payload.data.length) ? response.payload.data : [];
          if (this.clientListMultiple && !this.isFrequencyChange) {
            if (this.getRecurringData && this.getRecurringData.rec_type === 2) {
              this.selectedFilterEntity = this.getArrayToString(this.getRecurringData.entity_id, ',');
              this.addRecurringForm.get('entity_id').setValue(this.selectedFilterEntity);
              this.isFrequencyChange = true;
            }
          } else {
            this.selectedFilterEntity = [];
          }
        }
      });
    }
  }

  /**
   * On change type of recurring form
   * @param event
   */
  onChangeType(event) {
    if (+event === 1) {
      this.isMultipleClientName = true;
    } else {
      this.isMultipleClientName = false;
    }
  }

  /**
   * Select All Client
   */
  selectAll() {
    this.selectedFilterEntity = this.clientListMultiple.map(x => x.id);
    this.addRecurringForm.get('entity_id').setValue(this.selectedFilterEntity);
  }

  /**
   * UnSelect All Client
   */
  unselectAll() {
    this.selectedFilterEntity = [];
    this.addRecurringForm.get('entity_id').setValue(null);
  }

  /**
   * On invoice redirection
   */
  onInvoice() {
    this._router.navigate(['/' + AdminRoutes.INVOICES_DASHBOARD]);
  }

  /**
   *
   */
  onManageRecurring() {
    this._router.navigate(['/' + AdminRoutes.MANAGE_RECURRING]);
  }

  /**
   * Preview Recurring
   */
  onRecurringPreview() {
    this._router.navigate(['/' + AdminRoutes.PREVIEW_RECURRING]);
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

  ngOnDestroy() {
    this._sharedService.setClientData(GLOBALDATAKEYS.PREVIOUS_RECURRING, null);
  }

  /**
   * On Client Change Update Count
   */
  onClientChangeUpdateCount(selectedData: any) {
    if (selectedData) {
      this.selectedFilterEntity = selectedData.map(x => x.id);
    }
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
