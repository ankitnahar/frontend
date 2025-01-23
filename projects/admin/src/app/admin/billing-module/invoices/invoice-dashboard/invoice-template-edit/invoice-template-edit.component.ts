import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {DecimalPipe} from '@angular/common';
import {NoCommaPipe} from '../../../../../../utility/pipe/noComma.pipe';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {InvoiceStatusWise} from '../invoice.model';
import {INVOICEPDFDATA, INVOICESTAGEUPDATE} from '../../../../../../utility/constants/base-constants';
import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';
import {Clients} from '../../../../client-module/view-client/view-client.model';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';

@Component({
  selector: 'app-invoice-template-edit',
  templateUrl: './invoice-template-edit.component.html',
  styleUrls: ['./invoice-template-edit.component.scss'],
  providers: [CommonCrudService, DecimalPipe, NoCommaPipe]
})
export class InvoiceTemplateEditComponent extends BaseComponent implements OnInit {

  // Form Variables
  @Input() isView: number;
  invoiceTemplate: FormGroup;
  @ViewChild('addEditTemplate') addEditTemplate;
  validationMsg = new ValidationConstantMessage();
  invoiceStatusData: InvoiceStatusWise = null;
  userList: AdminUser[] = [];
  clientList: Clients[] = [];
  invoiceDetails = [];
  invoiceViewDetails = [];
  invoiceInfo = [];
  invoiceDescription = [];
  billingDetail = [];
  address = '';

  surchargeLine = INVOICEPDFDATA.SURCHARGE_LINE_INVOICE;
  line_one = INVOICEPDFDATA.BOTTOM_PARAGRAPH_LINE_ONE;
  line_two = INVOICEPDFDATA.BOTTOM_PARAGRAPH_LINE_TWO;
  befreeAddress = '';
  billingID = INVOICEPDFDATA.BILLINGID;
  bankTitle = INVOICEPDFDATA.BANK_DETAILS_TITLE;
  creditCardTitle = INVOICEPDFDATA.CREDIT_CARD_TITLE;
  directDebitTitle = INVOICEPDFDATA.DIRECT_DEBIT_TITLE;
  bankDetails = INVOICEPDFDATA.BANK_DETAILS;
  creditCardDetails = INVOICEPDFDATA.CREDIT_CARD_DETAILS;
  directDebitDetails = INVOICEPDFDATA.DIRECT_DEBIT_DETAILS;
  balance_due = 0;
  selectedUser = [];
  today = new Date();

  constructor(public _router: Router, private _fb: FormBuilder, private _sharedService: SharedService, private _commonCrudService: CommonCrudService,
              private _decimalPipe: DecimalPipe, private _noCommaPipe: NoCommaPipe) {
    super();
  }

  ngOnInit() {
    this.initializeMethod();
  }

  initializeMethod() {
    this.invoiceStatusData = this._sharedService.getInvoiceData();
    this.isView = (this.isView) ? this.isView : 0;
    if (this.isView === 0) {
      this.getInvoiceDetails();
      this.getUserList();
      this.createInvoiceTemplate();
    } else {
      this.getInvoiceViewDetails();
    }
  }

  /**
   * Create Invoice Template Form
   */
  createInvoiceTemplate() {
    this.invoiceTemplate = this._fb.group({
      to: new FormControl(this.billingDetail['to_email']),
      cc: new FormControl(this.billingDetail['cc_email']),
      subject: new FormControl(this.billingDetail['subject'], <any>Validators.required),
      body: new FormControl(this.billingDetail['body'], <any>Validators.required),
      reference: new FormControl(this.billingDetail['reference'], <any>Validators.required),
      debitLine: new FormControl(this.billingDetail['debitLine']),
      amount_applied: new FormControl(''),
    });
  }

  /**
   * Get User List
   */
  getInvoiceDetails() {
    this._commonCrudService.getData(AdminAPI.INVOICE_SEND_TO_CLIENT_PREVIEW, this.invoiceStatusData.id, {
      'invoice_no': this.invoiceStatusData.invoice_no,
      'status_id': this.invoiceStatusData.status_id,
      'entity_id': this.invoiceStatusData.entity_id
    }).subscribe((response) => {
      this.invoiceDetails = response.payload.data;
      this.invoiceInfo = (this.invoiceDetails['invoice']) ? this.invoiceDetails['invoice'] : [];
      this.balance_due = this.invoiceInfo['paid_amount'];
      this.invoiceDescription = (this.invoiceDetails['invoiceDescription']) ? this.invoiceDetails['invoiceDescription'] : [];
      this.billingDetail = (this.invoiceDetails['billingDetail']) ? this.invoiceDetails['billingDetail'] : [];
      this.address = this.billingDetail['address'].replace(new RegExp('\n', 'g'), '<br />');
      const addressBefree = INVOICEPDFDATA.BEFREE_ADDRESS;
      this.befreeAddress = addressBefree.replace(new RegExp('\n', 'g'), '<br />');
      this.createInvoiceTemplate();
    });
  }

  /**
   * If invoice template in view mode then call this functions
   */
  getInvoiceViewDetails() {
    this._commonCrudService.getData(AdminAPI.INVOICE_SEND_TO_CLIENT_PREVIEW_SHOW, 0, {
      'invoice_no': this.invoiceStatusData.invoice_no,
      'status_id': this.invoiceStatusData.status_id,
    }).subscribe((response) => {
      this.invoiceViewDetails = (response.payload.data[0]) ? response.payload.data[0] : [];
    });
  }

  /**
   * Get User List
   */
  getUserList() {
    this._commonCrudService.listData(AdminAPI.ADMIN_USER, {'records': 'all'}, {'compare': {'equal': {'is_active': 1, 'designation_id': 60}}}).subscribe((response) => {
      this.userList = response.payload.data;
    });
  }


  /**
   * Change Amount Applied Re Calcuate Paid to Amount
   * @param event
   */
  changeAmountApplied(event) {
    let val = Number(event.target.value);
    if (val >= 0) {
      let balance_due = this.invoiceInfo['paid_amount'];
      balance_due = balance_due - val;
      this.balance_due = this._noCommaPipe.transform(this._decimalPipe.transform(balance_due, '1.2-2'));
      this.invoiceInfo['amount_applied'] = this._noCommaPipe.transform(this._decimalPipe.transform(val, '1.2-2'));
    }
  }

  /**
   * On invoice redirection
   */
  onInvoice() {
    this._router.navigate(['/' + AdminRoutes.INVOICES_DASHBOARD]);
  }

  /**
   * Download Invoice PDF for attachment
   * @param invoice_no
   */
  downloadInvoicePDF(invoice_no) {
    this._commonCrudService.downloadExcelData(AdminAPI.INVOICE_PDF_DOWNLOAD, {'invoice_no': invoice_no}, {}, 'Invoice ' + invoice_no, 1).subscribe((response) => {
    });
  }

  /**
   * On Submit Invoice Preview Form
   */
  submitInvoicePreview(form: FormGroup, type: number) {
    if (form.valid) {
      let formValue = {};
      let bccEmail = '';
      if (this.selectedUser.length > 0) {
        bccEmail = this.billingID + ',' + this.selectedUser.join(',');
      } else {
        bccEmail = this.billingID;
      }
      this.billingDetail['bcc_email'] = bccEmail;
      formValue['from_email'] = this.billingID;
      formValue['invoice_no'] = this.invoiceStatusData.invoice_no;
      formValue['to'] = form.value['to'];
      formValue['cc'] = form.value['cc'];
      formValue['bcc'] = this.billingDetail['bcc_email'];
      formValue['subject'] = form.value['subject'];
      formValue['body'] = form.value['body'];
      formValue['payment_id'] = this.billingDetail['payment_id'];
      formValue['amount_applied'] = form.value['amount_applied'];
      formValue['reference'] = form.value['reference'];
      formValue['debitLine'] = form.value['debitLine'];
      formValue['status_id'] = INVOICESTAGEUPDATE.RTE;
      this._commonCrudService.addData(AdminAPI.INVOICE_SEND_TO_CLIENT + '/' + this.invoiceStatusData.id, formValue).subscribe((response) => {
        if (type === 0) {
          this.onInvoice();
        } else if (type === 1) {
          this._commonCrudService.listData(AdminAPI.INVOICE_STATUS_WISE_LIST + '/' + 11, {
            'sortBy': 'invoice_no',
            'sortOrder': 'desc'
          }, {'compare': {'equal': {'parent_id': 0}}}).subscribe(Response => {
            const data = Response.payload.data;
            if (data.length) {
              this._sharedService.setInvoiceData(null);
              this._sharedService.setInvoiceData(data[0]);
              this.initializeMethod();
            } else {
              this.onInvoice();
            }
          });
        }
      });
    }
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  onBillingInfo() {
    this._commonCrudService.getData(AdminAPI.BILLING_BASIC, 0, {}, {
      'compare': {
        'equal': {
          'entity_id': this.invoiceStatusData.entity_id
        }
      }
    }).subscribe((response) => {
      if (response) {
        const data = response.payload.data;
        if (data[0]) {
          const DataItem = data[0];
          this._sharedService.setBillingData(null);
          this._sharedService.setBillingData(DataItem);
          this._router.navigate([]).then(result => {
            window.open('/' + AdminRoutes.BILLING_BASIC_INFO_SERVICES, '_blank');
          });
        }
      }
    });
  }
}
