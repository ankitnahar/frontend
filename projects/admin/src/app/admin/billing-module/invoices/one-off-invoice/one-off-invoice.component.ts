import {Component, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {CommonRegex, ValidationConstantMessage} from '../../../../../utility/validation';
import {Services} from '../../../../../utility/shared-model/services.model';
import {Billing} from '../../../../../utility/shared-model/billing.model';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {INVOICESTAGEUPDATE, invoiceType, REDIRECTPARAMKEYS, SERVICEDATA} from '../../../../../utility/constants/base-constants';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';

@Component({
  selector: 'app-one-off-invoice',
  templateUrl: './one-off-invoice.component.html',
  styleUrls: ['./one-off-invoice.component.scss'],
  providers: [CommonCrudService]
})
export class OneOffInvoiceComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  serviceList: Services[] = [];
  clientList: Billing[] = [];
  invoiceTypeList = invoiceType.slice(0, 4);
  invoiceTypeValue: string;
  // Form Variables
  addOneoffInvoiceForm: FormGroup;
  ABA = INVOICESTAGEUPDATE.ABA;

  constructor(public _router: Router, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, public _sharedService: SharedService, private _sharedObjService: SharedObjService) {
    super();
  }

  ngOnInit() {
    this.getServices();
    this.createOneoffInvoiceForm();
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
   * Get Client List based on Service ID Selected
   * @param service_id
   */
  getClientList(service_id: number) {
    if (service_id > 0) {
      this._commonCrudService.listData(AdminAPI.BILLING, {'records': 'all'}, {'compare': {'equal': {'service_id': service_id, 'parent_id': 0}}}).subscribe((response) => {
        if (response) {
          this.clientList = response.payload.data;
        }
      });
    } else {
      this._commonCrudService.listData(AdminAPI.BILLING, {'records': 'all'}, {'compare': {'equal': {'service_id': 1, 'parent_id': 0}}}).subscribe((response) => {
        if (response) {
          this.clientList = response.payload.data;
        }
      });
    }
  }

  /**
   * Create One off invoice form
   */
  createOneoffInvoiceForm() {
    this.addOneoffInvoiceForm = this._fb.group({
      invoice_type: new FormControl('', <any>Validators.required),
      service_id: new FormControl(),
      entity_id: new FormControl(null, <any>Validators.required),
      amount: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP)]),
    });
  }

  /**
   * Set Invoice Type to hide show service field
   * @param value
   */
  setinvoiceTypeValue(value: string) {
    this.invoiceTypeValue = value;
    if (value !== 'Advance' && value !== 'Formation') {
      this.addOneoffInvoiceForm.get('service_id').setValidators(null);
      this.addOneoffInvoiceForm.patchValue({'service_id': ''});
      this.addOneoffInvoiceForm.patchValue({'entity_id': null});
      if (value === 'Setup') {
        this.getClientList(1);
      }
      if (value === 'Audit') {
        this.getClientList(4);
      }
    } else {
      this.addOneoffInvoiceForm.get('service_id').setValidators(Validators.required);
      this.getClientList(1);
    }
  }

  /**
   * Form Submit Of One Off Invoice
   * @param form
   */
  onSubmitOneoffInvoiceForm(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.addData(AdminAPI.ONEOFF_INVOICE, form.value).subscribe((response) => {
        if (form.value['service_id'] === SERVICEDATA.HOST || form.value['service_id'] === SERVICEDATA.SMSF || form.value['service_id'] === SERVICEDATA.SUB) {
          this._sharedService.setRedirectParameter(REDIRECTPARAMKEYS.INVOICE_STATUS, {'id': this.ABA});
        }
        this.handleAddInvoiceResponse(response);
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
