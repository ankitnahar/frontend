import {Component, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import * as moment from 'moment';
import {AdminAPI} from '../../../../../utility/constants/api';
import {Services} from '../../../../../utility/shared-model/services.model';
import {Billing} from '../../../../../utility/shared-model/billing.model';
import {INVOICESTAGEUPDATE, REDIRECTPARAMKEYS, SERVICEDATA} from '../../../../../utility/constants/base-constants';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {convertURLParamToDecode} from '../../../../../utility/common-functions';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss'],
  providers: [CommonCrudService]
})
export class NewInvoiceComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  serviceList: Services[] = [];
  clientList: Billing[] = [];
  is_recurred_entity: string;
  from_date: string;
  ABA = INVOICESTAGEUPDATE.ABA;
  // Form Variables
  addNewInvoiceForm: FormGroup;
  service_id = 0;
  entity_id = 0;

  constructor(public _router: Router, private _fb: FormBuilder, public _commonCrudService: CommonCrudService, public _sharedService: SharedService, private _sharedObjService: SharedObjService,
              private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        const dataItem = convertURLParamToDecode(params);
        if (dataItem) {
          this.service_id = (dataItem['service_id']) ? Number(dataItem['service_id']) : 0;
          this.entity_id = (dataItem['entity_id']) ? Number(dataItem['entity_id']) : 0;
        }
      });
    this.getServices();
    this.createAddNewInvoiceForm();
  }

  /**
   * Get Service For Generate Invoice
   */
  getServices() {
    this._sharedObjService.getServices({}, {'compare': {'equal': {'parent_id': 0}}}).subscribe((response) => {
      if (response) {
        this.serviceList = response;
      }
    });
  }

  /**
   * Set To Date On Change of From Date
   * @param fromDate
   */
  setToDate(fromDate: string) {
    this.from_date = fromDate;
  }

  /**
   * Get Client List based on Service ID Selected
   * @param service_id
   */
  getClientList(service_id: number) {
    if (service_id > 0) {
      this._commonCrudService.listData(AdminAPI.BILLING, {'records': 'all'}, {'compare': {'equal': {'service_id': service_id, 'parent_id': 0}}}).subscribe((response) => {
        if (response) {
          this.clientList = response.payload.data;
        } else {
          this.clientList = [];
        }
      });
    }
  }

  /**
   * Get Client List IF Recurring is already exist for the Selected Client
   */
  showMessageIfRecurred() {
    const entity_ids = this.addNewInvoiceForm.get('entity_id').value;
    if (entity_ids) {
      const entity_id = entity_ids.join(',');
      let entity_names = [];
      let items = this.clientList;
      items = items.filter(data => (entity_ids.indexOf(data.entity_id) >= 0) && (data.recurring_id > 0));
      if (items) {
        items.forEach(value => {
          entity_names.push(value.trading_name);
        });
      }
      if (entity_names) {
        this.is_recurred_entity = entity_names.join(', ');
      }
    }
  }

  /**
   * Create Add New Invoice Form
   */
  createAddNewInvoiceForm() {
    this.addNewInvoiceForm = this._fb.group({
      from_date: new FormControl,
      to_date: new FormControl('', <any>Validators.required),
      service_id: new FormControl((this.service_id > 0 ? this.service_id : null), <any>Validators.required),
      entity_id: new FormControl((this.entity_id ? [this.entity_id] : null), <any>Validators.required)
    });

    if (this.service_id > 0) {
      this.getClientList(this.service_id);
    }
  }

  /**
   * Submit New Invoice Data
   * @param form
   */
  onSubmitNewInvoiceForm(form: FormGroup) {
    if (form.valid) {
      form.value['from_date'] = (form.value['from_date']) ? moment(form.value['from_date']).format('DD-MM-YYYY') : '';
      form.value['to_date'] = (form.value['to_date']) ? moment(form.value['to_date']).format('DD-MM-YYYY') : '';
      form.value['type'] = 'new';
      this._commonCrudService.addData(AdminAPI.INVOICE, form.value).subscribe((response) => {
        this.handleAddInvoiceResponse(response);
        if (form.value['service_id'] === SERVICEDATA.HOST || form.value['service_id'] === SERVICEDATA.SMSF || form.value['service_id'] === SERVICEDATA.SUB) {
          this._sharedService.setRedirectParameter(REDIRECTPARAMKEYS.INVOICE_STATUS, {'id': this.ABA});
        }
        form.value['from_date'] = (form.value['from_date']) ? new Date(form.value['from_date']) : '';
        form.value['to_date'] = (form.value['to_date']) ? new Date(form.value['to_date']) : '';
      });
    }
  }

  /**
   * Handle Invoice Respone
   * @param response
   */
  handleAddInvoiceResponse(response) {
    this.onInvoice();
  }

  /**
   * On invoice redirection
   */
  onInvoice() {
    this._router.navigate(['/' + AdminRoutes.INVOICES_DASHBOARD]);
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
