import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../../../utility/constants/admin-route';
import {MatDialog} from '@angular/material';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {DecimalPipe} from '@angular/common';
import {NoCommaPipe} from '../../../../../../../utility/pipe/noComma.pipe';
import {InvoiceStatusWise} from '../../invoice.model';
import {AccountCode} from '../../account-code.model';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {Router} from '@angular/router';
import {DragulaService} from 'ng2-dragula';
import {INVOICESTAGEUPDATE, ToastType} from '../../../../../../../utility/constants/base-constants';
import {ToastErrorMessages} from '../../../../../../../utility/validation';
import {convertURLParamToEncode} from '../../../../../../../utility/common-functions';
import {BillingBasic} from '../../../../../../../utility/shared-model/billing.model';

@Component({
  selector: 'app-preview-invoice',
  templateUrl: './preview-invoice.component.html',
  styleUrls: ['./preview-invoice.component.scss'],
  providers: [CommonCrudService, DecimalPipe, NoCommaPipe]

})
export class PreviewInvoiceComponent implements OnInit, OnDestroy {

  constructor(private _router: Router, public dialog: MatDialog, private _sharedService: SharedService, private _commonCrudService: CommonCrudService,
              private _decimalPipe: DecimalPipe, private _noCommaPipe: NoCommaPipe, private dragulaService: DragulaService) {
  }

  @Input() isView: number;
  leftPreview: any[] = [];
  rightPreview: any[] = [];
  ATH = INVOICESTAGEUPDATE.ATH;
  ABA = INVOICESTAGEUPDATE.ABA;
  STC = INVOICESTAGEUPDATE.STC;
  AMR = INVOICESTAGEUPDATE.AMR;
  grossAmountAsWip = 0;
  netAmount = 0;
  discountAmount = 0;
  discountAdvanceFee = 0;
  surchargeAmount = 0;
  gstAmount = 0;
  grossAmountAsPreview = 0;
  totalAmount = 0;
  is_CheckedAll = false;
  entityName = '';
  period = '';
  merge_invoice = 0;
  accountCodeList: AccountCode [] = [];
  invoiceStatusData: InvoiceStatusWise = null;
  btnSTH = false;
  btnSBAT = false;
  btnGoBack = true;
  btnSaveGoBack = false;
  btnAPI = false;
  hideLeftDesc = false;
  entityId = 0;
  ALL = INVOICESTAGEUPDATE.ALL;
  billingBasic: BillingBasic;

  ngOnInit() {
    this.invoiceStatusData = this._sharedService.getInvoiceData();
    this.entityId = this.invoiceStatusData.entity_id;
    this.isView = (this.isView) ? this.isView : 0;
    this.hideShowButton(this.invoiceStatusData.status_id, this.isView);
    this.initializeMethod();
    // console.log(this._sharedService.checkUserPrivileges(16, "add_edit"));
  }

  /**
   * Hide / Show Button based on status and view
   * @param status_id
   * @param is_view
   */
  hideShowButton(status_id, is_view) {
    // For Status
    if (+status_id === INVOICESTAGEUPDATE.ARW && is_view === 0) {
      this.btnSTH = true;
      this.btnSaveGoBack = true;
      this.btnSBAT = true;
    }

    if (+status_id === INVOICESTAGEUPDATE.ATH && is_view === 0) {
      this.btnSTH = false;
      this.btnSaveGoBack = true;
      this.btnSBAT = true;
    }

    if (+status_id === INVOICESTAGEUPDATE.ABA && is_view === 0) {
      this.btnSTH = false;
      this.btnSaveGoBack = true;
      this.btnAPI = true;
    }

    if (+status_id === INVOICESTAGEUPDATE.AMR && is_view === 0) {
      this.btnSTH = false;
      this.btnSaveGoBack = true;
      this.btnAPI = true;
    }

    if ((+status_id === INVOICESTAGEUPDATE.STC || +status_id === INVOICESTAGEUPDATE.RTE || +status_id === INVOICESTAGEUPDATE.APM || +status_id === INVOICESTAGEUPDATE.PAD || +status_id === INVOICESTAGEUPDATE.DIM) && (is_view === 1)) {
      this.hideLeftDesc = true;
    }
    // console.log(this.hideLeftDesc);
  }

  initializeMethod() {
    this.getAccountCodeList();
    this.getInvoiceWipPreview();
  }

  getAccountCodeList() {
    this._commonCrudService.listData(AdminAPI.INVOICE_ACCOUNT_LIST, {}, {}).subscribe(Response => {
      this.accountCodeList = Response.payload.data;
    });
  }

  /**
   * Get Account Code And Name From ID
   * @param accountID
   */
  getAccountCodeWithName(accountID: number): string {
    const val = this.accountCodeList.filter(elem => Number(elem.id) === +accountID);
    return (val.length) ? (val[0].account_no + ' - ' + val[0].account_name) : '';
  }

  getInvoiceWipPreview() {

    this._commonCrudService.getData(AdminAPI.INVOICE_WIP_PREVIEW, this.invoiceStatusData.id).subscribe(Response => {
      /**
       * assign data to main invoice data. then use that json to get the detail
       * of timeshit unit parent data and child data. and do calculation field wise.
       */
      const InvoiceData = Response.payload;
      this.entityName = (Response.payload['entityName']) ? Response.payload['entityName'] : '';
      this.period = (Response.payload['period']) ? Response.payload['period'] : '';
      this.merge_invoice = (Response.payload['merge_invoice']) ? Response.payload['merge_invoice'] : 0;
      if ((InvoiceData['invoicePreview']) && (InvoiceData['invoicePreview'].length)) {
        for (const key in InvoiceData['invoicePreview']) {
          for (const childkey in InvoiceData['invoicePreview'][key]) {
            InvoiceData['invoicePreview'][key][childkey]['is_checked'] = 0;
            this.leftPreview.push(InvoiceData['invoicePreview'][key][childkey]);
          }
        }
      }
      // console.log(this.leftPreview);
      if ((InvoiceData['invoiceDescription']) && (InvoiceData['invoiceDescription'].length)) {
        InvoiceData['invoiceDescription'].forEach(dataValue => {
          const dataSet = [];
          dataSet['id_data'] = dataValue['id'];
          dataSet['description_data'] = dataValue['description'];
          dataSet['amount_data'] = dataValue['amount'];
          dataSet['inv_account_id_data'] = dataValue['inv_account_id'];
          this.rightPreview.push(dataSet);
        });
        this.calculateAmountOfRightPreview();
      }

      if (InvoiceData['amountCalc']) {
        this.grossAmountAsWip = (InvoiceData['amountCalc']['gross_amount']) ? this._noCommaPipe.transform(this._decimalPipe.transform(InvoiceData['amountCalc']['gross_amount'], '1.2-2')) : 0;
        this.netAmount = (InvoiceData['amountCalc']['net_amount']) ? this._noCommaPipe.transform(this._decimalPipe.transform(InvoiceData['amountCalc']['net_amount'], '1.2-2')) : 0;
        this.discountAdvanceFee = (InvoiceData['amountCalc']['discount_advance']) ? this._noCommaPipe.transform(this._decimalPipe.transform(InvoiceData['amountCalc']['discount_advance'], '1.2-2')) : 0;
        this.discountAmount = (InvoiceData['amountCalc']['discount_amount']) ? this._noCommaPipe.transform(this._decimalPipe.transform(InvoiceData['amountCalc']['discount_amount'], '1.2-2')) : 0;
        this.surchargeAmount = (InvoiceData['amountCalc']['surcharge_amount']) ? this._noCommaPipe.transform(this._decimalPipe.transform(InvoiceData['amountCalc']['surcharge_amount'], '1.2-2')) : 0;
        this.gstAmount = (InvoiceData['amountCalc']['gst_amount']) ? this._noCommaPipe.transform(this._decimalPipe.transform(InvoiceData['amountCalc']['gst_amount'], '1.2-2')) : 0;
        this.totalAmount = (InvoiceData['amountCalc']['paid_amount']) ? this._noCommaPipe.transform(this._decimalPipe.transform(InvoiceData['amountCalc']['paid_amount'], '1.2-2')) : 0;
      }
    });
  }

  /**
   * Change Standard Description
   * @param event
   * @param fieldType
   */
  checkStandardDescriptionToAll(event: boolean, fieldType: string) {
    this.is_CheckedAll = event;
    this.leftPreview.map(item => {
      item[fieldType] = event ? 1 : 0;
    });
  }

  /**
   * Change Standard Description
   * @param event
   * @param leftPreviewData
   */
  checkStandardDescription(event: boolean, leftPreviewData: any) {
    leftPreviewData['is_checked'] = event ? 1 : 0;
    if (event) {
      let i = 0;
      this.leftPreview.map(item => {
        item['is_checked'] ? i++ : '';
      });
      if (i === this.leftPreview.length) {
        this.is_CheckedAll = true;
      }
    } else {
      this.is_CheckedAll = this.is_CheckedAll ? false : this.is_CheckedAll;
    }
  }

  /**
   * Get Data On Copy To Final Description
   */
  getDataInRightPreview() {
    const dataItem = this.leftPreview;
    if (dataItem) {
      dataItem.forEach(dataValue => {
        if (dataValue['is_checked'] === 1) {
          const dataSet = [];
          dataSet['description_data'] = dataValue['description'];
          dataSet['amount_data'] = dataValue['amount'];
          dataSet['inv_account_id_data'] = dataValue['inv_account_id'];
          this.rightPreview.push(dataSet);
        }
      });
      this.leftPreview.map(item => {
        item['is_checked'] = false;
      });
      this.is_CheckedAll = false;
    }
    this.calculateAmountOfRightPreview();
  }

  /**
   * Add Blank Line to Right Preview
   */
  addBlankLineToRightPreview() {
    const addData = {'description_data': '', 'amount_data': '', 'inv_account_id_data': ''};
    this.rightPreview.push(addData);
  }

  /**
   *
   */
  calculateAmountOfRightPreview() {
    let amountRow = 0;
    const dataRight = this.rightPreview;
    dataRight.forEach(rdata => {
      if (Number(rdata['amount_data']) > 0) {
        amountRow += Number(rdata['amount_data']);
      }
    });
    this.grossAmountAsPreview = this._noCommaPipe.transform(this._decimalPipe.transform(amountRow, '1.2-2'));
  }

  /**
   * Submit Invoice Preview
   * @param status_id
   */
  onSubmitInvoicePreview(status_id: number, saveGoBack = false) {
    let formValue = {};
    let descriptionData = [];
    const rightData = this.rightPreview;
    let sort_order = 0;
    rightData.forEach(dataValue => {
      if (dataValue['description_data'].trim() !== '' || dataValue['description_data'].trim() !== null) {
        sort_order = sort_order + 1;
        const DataRearrange = {};
        DataRearrange['id'] = (dataValue['id_data']) ? dataValue['id_data'] : 0;
        DataRearrange['description'] = dataValue['description_data'];
        DataRearrange['amount'] = dataValue['amount_data'];
        DataRearrange['inv_account_id'] = dataValue['inv_account_id_data'];
        DataRearrange['sort_order'] = sort_order;
        descriptionData.push(DataRearrange);
      }
    });
    formValue['description'] = descriptionData;
    formValue['status_id'] = (status_id) ? status_id : 0;

    if (formValue) {
      this._commonCrudService.addData(AdminAPI.INVOICE_SAVE_PREVIEW + '/' + this.invoiceStatusData.id, formValue).subscribe(response => {
        if (saveGoBack) {
          this.manageWIPInvoice();
        } else {
          this._router.navigate(['/' + AdminRoutes.INVOICES_DASHBOARD]);
        }
      });
    }
  }

  /**
   * On Action of Quick Links
   * @param menuName
   */
  onOpenQuickMenu(menuName) {
    switch (menuName) {
      case 'previousInvoices':
        const invoiceData = convertURLParamToEncode({'entity_id': this.entityId, 'id': this.ALL});
        this._router.navigate(['/' + AdminRoutes.INVOICES_DASHBOARD], {queryParams: invoiceData});
        break;
      case 'billingInformation':
        this._commonCrudService.listData(AdminAPI.BILLING_BASIC, {}, {'compare': {'equal': {'entity_id': this.entityId}}}).subscribe(response => {
          const dataItem = response.payload.data;
          this.billingBasic = (dataItem) ? dataItem[0] : null;
          if (this.billingBasic) {
            this._sharedService.setBillingData(this.billingBasic);
            this._router.navigate(['/' + AdminRoutes.VIEW_BILLING_INFORMATION]);
          }
        });
        break;
      case 'pendingTickets':
        const jsonD = convertURLParamToEncode({
          'entity_id': this.entityId,
          'tab_id': 0
        });
        this._router.navigate(['/' + AdminRoutes.PENDING_TICKETS], {queryParams: jsonD});
        break;
      case 'completedTickets':
        const jsonData = convertURLParamToEncode({
          'entity_id': this.entityId,
          'tab_id': 1
        });
        this._router.navigate(['/' + AdminRoutes.PENDING_TICKETS], {queryParams: jsonData});
        break;
    }
  }

  onConfirmDialog(status_id: number, checkWipAmount: number) {
    // Need to Check that if amount is greater than zero and account code is missing
    let checkDataIsCorrect = 0;
    const rightData = this.rightPreview;
    rightData.forEach(dataValue => {
      if ((dataValue['amount_data'] !== '') && (dataValue['amount_data'] > 0) && (dataValue['inv_account_id_data'] === '' || dataValue['inv_account_id_data'] === 0)) {
        checkDataIsCorrect += 1;
      }
    });
    // If Data in correct then shows warning message
    if (checkDataIsCorrect > 0) {
      this._sharedService.setToastMessage(ToastErrorMessages.INVOICE_ACCOUNT_CODE_REQUIRED, ToastType.INFO);
    } else {
      if (checkWipAmount > 0) {
        // Check that Gross Amount as per wip and as per preview both are equal or not
        // console.log(this.grossAmountAsPreview);
        // console.log(this.grossAmountAsWip);
        if ((Number(this.grossAmountAsPreview) !== Number(this.grossAmountAsWip)) && (checkWipAmount >= 0)) {
          this._sharedService.setToastMessage(ToastErrorMessages.WIP_PREVIEW_TOTAL_MISMATCH, ToastType.INFO);
        } else if (Number(this.grossAmountAsPreview) === Number(this.grossAmountAsWip)) {
          if (status_id > 0) {
            this.onSubmitInvoicePreview(status_id);
          }
        }
      } else {
        if (status_id > 0) {
          this.onSubmitInvoicePreview(status_id, true);
        }
      }
    }
  }

  get invoiceUrl() {
    return ['/' + AdminRoutes.INVOICES_DASHBOARD];
  }

  manageWIPInvoice() {
    this._sharedService.setInvoiceData(this.invoiceStatusData);
    this._router.navigate(['/' + AdminRoutes.MANAGE_WIP_INVOICE]);
  }

  manageWIPInvoiceView() {
    this._sharedService.setInvoiceData(this.invoiceStatusData);
    this._router.navigate(['/' + AdminRoutes.MANAGE_WIP_INVOICE_VIEW]);
  }

  ngOnDestroy() {
    this.dragulaService.destroy('SPILL');
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
