import {Component, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {Billing} from '../../../../../utility/shared-model/billing.model';
import {Services} from '../../../../../utility/shared-model/services.model';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import * as moment from 'moment';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {INVOICESTAGEUPDATE} from '../../../../../utility/constants/base-constants';

@Component({
  selector: 'app-adjust-wip',
  templateUrl: './adjust-wip.component.html',
  styleUrls: ['./adjust-wip.component.scss'],
  providers: [CommonCrudService]
})
export class AdjustWipComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  serviceList: Services[] = [];
  clientList: Billing[] = [];
  from_date: string;
  // Form Variables
  addAdjustWIPForm: FormGroup;
  ADJ = INVOICESTAGEUPDATE.ADJ;

  constructor(public _router: Router, private _fb: FormBuilder, public _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService, private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.getServices();
    this.createAdjustWIPForm();
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
   * Create Add New Invoice Form
   */
  createAdjustWIPForm() {
    this.addAdjustWIPForm = this._fb.group({
      from_date: new FormControl,
      to_date: new FormControl('', <any>Validators.required),
      service_id: new FormControl('', <any>Validators.required),
      entity_id: new FormControl(null, <any>Validators.required)
    });
  }

  /**
   * Submit New Invoice Data
   * @param form
   */
  onSubmitAdjustWIPForm(form: FormGroup) {
    if (form.valid) {
      form.value['from_date'] = (form.value['from_date']) ? moment(form.value['from_date']).format('DD-MM-YYYY') : '';
      form.value['to_date'] = moment(form.value['to_date']).format('DD-MM-YYYY');
      form.value['type'] = 'adjuct';
      this._commonCrudService.addData(AdminAPI.INVOICE, form.value).subscribe((response) => {
        // this.handleAddInvoiceResponse(response);
        this._commonCrudService.listData(AdminAPI.INVOICE + '/' + this.ADJ, {
          'sortOrder': 'desc', 'sortBy': 'id', 'pageNumber': 1, 'recordsPerPage': 1
        }, {
          'compare': {'type': 'adjuct'},
          'entity_id': form.value['entity_id']
        }).subscribe((data) => {
          const ItemData = data.payload.data;
          if (ItemData) {
            this._sharedService.setInvoiceData(null);
            this._sharedService.setInvoiceData(ItemData[0]);
            this._router.navigate(['/' + AdminRoutes.MANAGE_WIP_INVOICE]);
          }
        });
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
