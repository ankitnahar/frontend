import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {DismissDialogComponent} from './dismiss-dialog/dismiss-dialog.component';
import {MatDialog} from '@angular/material';
import {AdvanceInvoicesComponent} from './advance-invoices/advance-invoices.component';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {InvoiceStatusWise} from '../invoice.model';
import {BASE, DiscountType, INVOICESTAGEUPDATE, SERVICEDATA, ToastType, WIPInvoiceBillingStatus} from '../../../../../../utility/constants/base-constants';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {DecimalPipe} from '@angular/common';
import {NoCommaPipe} from '../../../../../../utility/pipe/noComma.pipe';
import {MoreDetailsDialogComponent} from './more-details-dialog/more-details-dialog.component';
import {CommonFunctions, convertURLParamToEncode} from '../../../../../../utility/common-functions';
import {ToastErrorMessages} from '../../../../../../utility/validation';
import {ConfirmationDialogComponent} from '../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {BillingBasic} from '../../../../../../utility/shared-model/billing.model';
import * as moment from 'moment';
import {Privilege} from "../../../../../../utility/shared-model/admin-user.model";

@Component({
  selector: 'app-manage-wip-invoice',
  templateUrl: './manage-wip-invoice.component.html',
  styleUrls: ['./manage-wip-invoice.component.scss'],
  providers: [CommonCrudService, DecimalPipe, NoCommaPipe]
})

export class ManageWipInvoiceComponent implements OnInit {
  @Input() isView: number;
  @ViewChild('addEditnotesForm') addEditnotesForm;
  billingStatus = WIPInvoiceBillingStatus.slice(1, -1);
  unit_ratio = BASE.UNIT_RATIO;
  default_rph = BASE.DEFAULT_RPH;
  invoiceForm: FormGroup;
  gst_percentage = BASE.GST_PERCENTAGE;
  percentage_ratio = BASE.PERCENTAGE_RATIO;
  notesForm: FormGroup;
  invoiceStatusData: InvoiceStatusWise = null;
  advanceFeeData = {};
  advanceFeesInfo = {};
  WIPInvoiceData = {};
  WIPParentData = {};
  WIPMasterUnitData = {};
  WIPCalculationData = {};
  WIPParentDataKey = [];
  WIPChildDataKey = {};
  discountAmount = 0;
  showDiscount = 0;
  showGrandTotalWriteOffSection = 0;
  showGrandTotalTimeSheetSection = 0;
  showIsFixedFees = 0;
  serviceId = 0;
  entityId = 0;
  discountType = 1;
  discountTypeData = DiscountType;
  grandWriteOffAmount = 0;
  grandWriteOnAmount = 0;
  data = [];
  selectedIndex = 0;
  FixedFee = [];
  writeOffUnit = [];
  writeOnUnit = [];
  totalAmountData = {};
  DIM = INVOICESTAGEUPDATE.DIM;
  dimissReason = '';
  btnPreview = false;
  btnDismiss = false;
  btnSendTAM = false;
  btnSendBilling = false;
  btnSave = false;
  btnAdjWIP = false;
  showAdjWIP = 0;
  isValidAllDetails = false;
  AdjustWIPReason = '';
  invoiceType = '';
  isDismissInvoice = 0;
  ALL = INVOICESTAGEUPDATE.ALL;
  billingBasic: BillingBasic;
  isAdjusted = 0;
  topDetailsLength = 0;
  tabData: Privilege | any[];

  constructor(private _router: Router, public dialog: MatDialog, private _fb: FormBuilder,
              private _sharedService: SharedService, private _commonCrudService: CommonCrudService,
              private _decimalPipe: DecimalPipe, private _noCommaPipe: NoCommaPipe
  ) {
  }

  ngOnInit() {
    this.invoiceStatusData = this._sharedService.getInvoiceData();
    this.isView = (this.isView) ? this.isView : 0;
    this.hideShowButton(this.invoiceStatusData.status_id, this.isView);
    this.getInvoiceStatusList();
    this.initializeMethod();
  }

  initializeMethod() {
    this.getWIPInvoiceList();
    this.getAdvanceFees();
    this.createNoteForm();
    this.createInvoiceForm();
  }

  getInvoiceStatusList() {
    this._commonCrudService.listData(AdminAPI.INVOICE_STATUS_LIST, {}, {}).subscribe(Response => {
      const statusData = Response.payload.data;
      const getTabData = statusData.filter(item => item.id === this.invoiceStatusData.status_id);
      if (getTabData.length) {
        this.tabData = this._sharedService.checkUserPrivilegesTabs(getTabData[0]['tab_id']);
      }
      // console.log(this.tabData);
    });
  }

  /**
   * Hide / Show Button based on status and view
   * @param status_id
   * @param is_view
   */
  hideShowButton(status_id, is_view) {
    // console.log(status_id, is_view);
    // For Status
    if (((+status_id === INVOICESTAGEUPDATE.ARW) || (+status_id === INVOICESTAGEUPDATE.ATH) || (+status_id === INVOICESTAGEUPDATE.AMR) && is_view === 0)) {
      this.btnPreview = true;
      this.btnDismiss = true;
      this.btnSave = true;
    }

    if (+status_id === INVOICESTAGEUPDATE.ABA && is_view === 1) {
      this.btnPreview = true;
      this.btnDismiss = false;
      this.btnSave = false;
      this.btnSendTAM = false;
    }

    if (+status_id === INVOICESTAGEUPDATE.ABA && is_view === 0) {
      this.btnPreview = true;
      this.btnDismiss = true;
      this.btnSave = true;
      this.btnSendTAM = true;
    }

    if (+status_id === INVOICESTAGEUPDATE.PAD && is_view === 0) {
      this.btnPreview = true;
    }

    if (+status_id === INVOICESTAGEUPDATE.ADJ && is_view === 0) {
      this.btnAdjWIP = true;
      this.btnSave = true;
      this.btnPreview = false;
      this.isAdjusted = 1;
    }
    if (((+status_id === INVOICESTAGEUPDATE.RTE) || (+status_id === INVOICESTAGEUPDATE.APM) || (+status_id === INVOICESTAGEUPDATE.STC) && (is_view === 0 || is_view === 1))) {
      this.btnPreview = true;
      this.btnSendBilling = true;
    }

    if (+status_id === INVOICESTAGEUPDATE.ADJ && this.invoiceStatusData.adjusted === 0) {
      this.btnPreview = false;
      this.showAdjWIP = 1;
      this.btnAdjWIP = true;
      this.isAdjusted = 1;
    }

    if (+status_id === INVOICESTAGEUPDATE.ADJ && this.invoiceStatusData.adjusted === 1) {
      this.btnPreview = false;
      this.showAdjWIP = 1;
      this.btnAdjWIP = false;
      this.isAdjusted = 1;
    }
  }

  /**
   * Create Notes Form
   */
  createNoteForm() {
    this.notesForm = this._fb.group({
      notes: new FormControl('', [<any>Validators.required]),
    });
  }

  /**
   * Create Invoice Form
   */
  createInvoiceForm() {
    this.invoiceForm = this._fb.group({
      grandWriteOffAmount: new FormControl(''),
      grandWriteOnAmount: new FormControl(''),
    });
  }

  /**
   * Get Advance fee data
   */
  getAdvanceFees() {
    this._commonCrudService.getData(AdminAPI.INVOICE_ADVANCE_FEE_DETAIL, this.invoiceStatusData.entity_id).subscribe(Response => {
      this.advanceFeesInfo = (Response.payload[0]) ? Response.payload[0] : [];
      this.advanceFeeData = Response.payload.data;
    });
  }

  /**
   * Get Data for WIP invoice list
   */
  getWIPInvoiceList() {
    this.WIPParentDataKey = [];
    this._commonCrudService.getData(AdminAPI.INVOICE_WIP_LIST, this.invoiceStatusData.id).subscribe(Response => {
      /**
       * assign data to main invoice data. then use that json to get the detail
       * of timeshit unit parent data and child data. and do calculation field wise.
       */
      this.WIPInvoiceData = Response.payload.data;
      this.serviceId = (this.WIPInvoiceData['invoice']['invoice']['service_id']) ? this.WIPInvoiceData['invoice']['invoice']['service_id'] : 0;
      this.entityId = (this.WIPInvoiceData['invoice']['invoice']['entity_id']) ? this.WIPInvoiceData['invoice']['invoice']['entity_id'] : 0;
      this.WIPParentData = (this.WIPInvoiceData['invoice']['timesheetDetail']) ? this.WIPInvoiceData['invoice']['timesheetDetail']['timesheet'] : {};
      this.WIPMasterUnitData = (this.WIPInvoiceData['invoice']['timesheetDetail']) ? this.WIPInvoiceData['invoice']['timesheetDetail']['masterUnit'] : {};
      this.WIPCalculationData = (this.WIPInvoiceData['invoice']['timesheetDetail']) ? this.WIPInvoiceData['invoice']['timesheetDetail']['totalCalculation'] : {};
      this.FixedFee = (this.WIPInvoiceData['BillingDetail']['Fiexd fee']) ? this.WIPInvoiceData['BillingDetail']['Fiexd fee'] : [];
      this.WIPInvoiceData['InvoiceNotes'] = (this.WIPInvoiceData['InvoiceNotes'].length) ? this.WIPInvoiceData['InvoiceNotes'] : '';
      this.dimissReason = (this.WIPInvoiceData['invoice']['invoice']) ? this.WIPInvoiceData['invoice']['invoice']['dismiss_reason'] : '';
      this.invoiceType = (this.WIPInvoiceData['invoice']['invoice']) ? this.WIPInvoiceData['invoice']['invoice']['invoice_type'] : '';

      if (this.WIPInvoiceData['invoice']['invoice']['discount_type'] !== '') {
        this.discountType = this.getDiscountType('label', this.WIPInvoiceData['invoice']['invoice']['discount_type'], 'key');
        // console.log(this.discountType);
        this.discountAmount = (this.WIPInvoiceData['invoice']['invoice']['discount_amount']) ? this._noCommaPipe.transform(this._decimalPipe.transform(this.WIPInvoiceData['invoice']['invoice']['discount_amount'], '1.2-2')) : 0;
      }

      this.grandWriteOnAmount = (this.WIPInvoiceData['invoice']['invoice']['won_amount']) ? Number(this.WIPInvoiceData['invoice']['invoice']['won_amount']) : 0;
      this.grandWriteOffAmount = (this.WIPInvoiceData['invoice']['invoice']['woff_amount']) ? Number(this.WIPInvoiceData['invoice']['invoice']['woff_amount']) : 0;
      //if (this.invoiceStatusData.adjusted === 1 && this.isView === 1 && this.invoiceStatusData.status_id === INVOICESTAGEUPDATE.ADJ) {
      if (this.invoiceStatusData.status_id === INVOICESTAGEUPDATE.ADJ) {
        this.showAdjWIP = 1;
        this.AdjustWIPReason = this.WIPInvoiceData['invoice']['invoice']['dismiss_reason'];
      }
      /**
       * for each key of timesheet data make a calculation of units and writeoff and carryforward units
       */

      if (this.WIPInvoiceData) {
        // console.log(this.WIPInvoiceData);
        let TU = 0;
        let CFU = 0;
        let FU = (this.WIPInvoiceData['invoice']['invoice']['fixed_unit']) ? this.WIPInvoiceData['invoice']['invoice']['fixed_unit'] : 0;
        let EU = 0;
        let Woff = 0;
        let Won = 0;
        let FF = (this.WIPInvoiceData['invoice']['invoice']['ff_amount']) ? Number(this.WIPInvoiceData['invoice']['invoice']['ff_amount']) : 0;
        let EA = 0;
        let GA = 0;
        let Discount = (this.WIPInvoiceData['invoice']['invoice']['discount_amount']) ? this.WIPInvoiceData['invoice']['invoice']['discount_amount'] : 0;
        let NA = 0;
        let CSP = (this.WIPInvoiceData['invoice']['invoice']['card_surcharge']) ? this.WIPInvoiceData['invoice']['invoice']['card_surcharge'] : 0;
        let CSA = 0;
        let GST = 0;
        let AP = 0;

        if (CommonFunctions.isEmpty(this.WIPParentData)) {
          // console.log(this.WIPParentData);
          TU = (this.WIPInvoiceData['invoice']['invoice']['timesheet_unit']) ? this.WIPInvoiceData['invoice']['invoice']['timesheet_unit'] : 0;
          CFU = (this.WIPInvoiceData['invoice']['invoice']['carry_unit']) ? this.WIPInvoiceData['invoice']['invoice']['carry_unit'] : 0;
          FU = (this.WIPInvoiceData['invoice']['invoice']['fixed_unit']) ? this.WIPInvoiceData['invoice']['invoice']['fixed_unit'] : 0;
          EU = (this.WIPInvoiceData['invoice']['invoice']['extra_unit']) ? this.WIPInvoiceData['invoice']['invoice']['extra_unit'] : 0;
          Woff = (this.WIPInvoiceData['invoice']['invoice']['woff_amount']) ? this.WIPInvoiceData['invoice']['invoice']['woff_amount'] : 0;
          Won = (this.WIPInvoiceData['invoice']['invoice']['won_amount']) ? this.WIPInvoiceData['invoice']['invoice']['won_amount'] : 0;
          FF = (this.WIPInvoiceData['invoice']['invoice']['ff_amount']) ? this.WIPInvoiceData['invoice']['invoice']['ff_amount'] : 0;
          // if (+this.serviceId === SERVICEDATA.SMSF || +this.serviceId === SERVICEDATA.HOST) {
          //   EA = (this.WIPInvoiceData['invoice']['invoice']['extra_amount']) ? this.WIPInvoiceData['invoice']['invoice']['gross_amount'] : 0;
          // } else {
          //   EA = (this.WIPInvoiceData['invoice']['invoice']['extra_amount']) ? this.WIPInvoiceData['invoice']['invoice']['extra_amount'] : 0;
          // }
          EA = 0;
          GA = (this.WIPInvoiceData['invoice']['invoice']['gross_amount']) ? this.WIPInvoiceData['invoice']['invoice']['gross_amount'] : 0;
          Discount = (this.WIPInvoiceData['invoice']['invoice']['discount_amount']) ? this.WIPInvoiceData['invoice']['invoice']['discount_amount'] : 0;
          NA = (this.WIPInvoiceData['invoice']['invoice']['net_amount']) ? this.WIPInvoiceData['invoice']['invoice']['net_amount'] : 0;
          CSP = (this.WIPInvoiceData['invoice']['invoice']['card_surcharge']) ? this.WIPInvoiceData['invoice']['invoice']['card_surcharge'] : 0;
          CSA = (this.WIPInvoiceData['invoice']['invoice']['surcharge_amount']) ? this.WIPInvoiceData['invoice']['invoice']['surcharge_amount'] : 0;
          GST = (this.WIPInvoiceData['invoice']['invoice']['gst_amount']) ? this.WIPInvoiceData['invoice']['invoice']['gst_amount'] : 0;
          AP = (this.WIPInvoiceData['invoice']['invoice']['paid_amount']) ? this.WIPInvoiceData['invoice']['invoice']['paid_amount'] : 0;
          // console.log(EA, NA, GA, Discount);
          // console.log('7',EA);
        }
        if (this.WIPParentData) {
          // console.log('9',EA);
          for (const key in this.WIPParentData) {
            this.writeOffUnit[key] = this.WIPMasterUnitData[key] ? this.WIPMasterUnitData[key]['woffunit'] : 0;
            this.writeOnUnit[key] = this.WIPMasterUnitData[key] ? this.WIPMasterUnitData[key]['wonunit'] : 0;
            let $ = 0;
            let t = 0;
            let c = 0;
            let d = 0;
            let taskInnerExtraAmount = 0;
            this.WIPParentDataKey.push(key);
            this.WIPChildDataKey[key] = [];
            /**
             * for each key of invoice data ['key'] make a field wise calculation and make total of carry forward
             * and other fields.
             */
            for (const childKey in this.WIPParentData[key]) {
              this.WIPChildDataKey[key].push(childKey);
              this.WIPChildDataKey[key][childKey] = [];
              let task_extra_amount = 0;
              let task_total_units = 0;
              for (const childGridKey in this.WIPParentData[key][childKey]) {
                this.WIPChildDataKey[key][childKey].push(childGridKey);
                if (this.WIPParentData[key][childKey][childGridKey]['billing_status'] === 0) {
                  this.WIPParentData[key][childKey][childGridKey]['billing_status'] = 1;
                }
                $ += this.WIPParentData[key][childKey][childGridKey]['amount'];
                t += this.WIPParentData[key][childKey][childGridKey]['units'];
                task_extra_amount += +(this.WIPParentData[key][childKey][childGridKey]['amount']);
                task_total_units += +(this.WIPParentData[key][childKey][childGridKey]['units']);

                if (this.WIPParentData[key][childKey][childGridKey]['billing_status'] === 2) {
                  d += this.WIPParentData[key][childKey][childGridKey]['units'];
                  task_extra_amount -= +(this.WIPParentData[key][childKey][childGridKey]['amount']);
                  task_total_units -= +(this.WIPParentData[key][childKey][childGridKey]['units']);
                } else if (this.WIPParentData[key][childKey][childGridKey]['billing_status'] === 3) {
                  c += this.WIPParentData[key][childKey][childGridKey]['units'];
                  task_extra_amount -= +(this.WIPParentData[key][childKey][childGridKey]['amount']);
                  task_total_units -= +(this.WIPParentData[key][childKey][childGridKey]['units']);
                }
              }
              this.WIPParentData[key][childKey]['task_extra_amount'] = this._noCommaPipe.transform(this._decimalPipe.transform(task_extra_amount, '1.2-2'));
              this.WIPParentData[key][childKey]['task_total_units'] = task_total_units;
              this.WIPParentData[key][childKey]['extra_activity'] = (this.WIPInvoiceData['invoice']['timesheetDetail']['subActivity'][key]) ? (this.WIPInvoiceData['invoice']['timesheetDetail']['subActivity'][key][childKey]) ? this.WIPInvoiceData['invoice']['timesheetDetail']['subActivity'][key][childKey] : [] : [];
              taskInnerExtraAmount += Number(this.WIPParentData[key][childKey]['task_extra_amount']);
            }

            let totalTimesheetAmount = 0;
            let y = 0;
            t = (t > 0) ? t : 0;
            y = (t + this.writeOnUnit[key]) - (this.writeOffUnit[key] + c + d);
            if (this.writeOnUnit[key] > 0 || this.writeOffUnit[key] > 0) {
              const rph = (this.WIPInvoiceData['BillingDetail']) ? this.WIPInvoiceData['BillingDetail']['RPH'][key] : this.default_rph;
              totalTimesheetAmount = (y > 0) ? y * rph / this.unit_ratio : 0;
            } else {
              totalTimesheetAmount = Number(taskInnerExtraAmount);
            }
            this.WIPParentData[key]['timesheet_unit'] = t;
            this.WIPParentData[key]['write_Off'] = c;
            this.WIPParentData[key]['carry_forward_unit'] = d;
            this.WIPParentData[key]['charged_units'] = (y > 0) ? y : 0;
            this.WIPParentData[key]['extra_amount'] = totalTimesheetAmount.toFixed(2);
            TU += t;
            CFU += d;
            EA += Number(totalTimesheetAmount.toFixed(2));
          }
        }

        const default_rph = (this.WIPInvoiceData['BillingDetail']['RPH']) ? this.WIPInvoiceData['BillingDetail']['RPH']['default'] : this.default_rph;
        // console.log(1,EA);
        // console.log(2,this.grandWriteOnAmount);
        // console.log(3,this.grandWriteOffAmount);
        // EA = Number(((EA + this.grandWriteOnAmount) - this.grandWriteOffAmount).toFixed(2));
        const TEA = (EA + this.grandWriteOnAmount);
        let NGA = 0;
        if (TEA > this.grandWriteOffAmount) {
          EA = Number(((EA + this.grandWriteOnAmount) - this.grandWriteOffAmount).toFixed(2));
        } else {
          NGA = TEA;
          EA = 0;
        }
        EU = EA * this.unit_ratio / default_rph;
        if (EU <= 0 || isNaN(EU)) {
          EU = 0;
        }
        Woff = TU - (CFU + FU + EU);
        Won = (CFU + FU + EU) - TU;
        if (EA <= 0 && FF <= 0) {
          EA = 0;
          FF = 0;
          GA = GA;
        } else if (EA <= 0 && NGA === 0) {
          EA = 0;
          GA = Number(((Number(FF) + this.grandWriteOnAmount) - this.grandWriteOffAmount).toFixed(2));
        } else if (EA <= 0 && NGA > 0) {
          GA = Number(((Number(FF) + Number(TEA)) - this.grandWriteOffAmount).toFixed(2));
        } else {
          GA = Number(EA) + Number(FF);
        }
        // console.log(GA, Discount);
        NA = Number((GA - Discount).toFixed(2));
        if (NA <= 0) {
          NA = 0;
        }
        CSA = Number(((NA * CSP) / this.percentage_ratio).toFixed(2));
        if (CSA <= 0) {
          CSA = 0;
        }
        GST = Number((((NA + CSA) * this.gst_percentage) / this.percentage_ratio).toFixed(2));
        if (GST <= 0) {
          GST = 0;
        }
        AP = Number((NA + CSA + GST).toFixed(2));
        if (AP <= 0) {
          AP = 0;
        }

        this.totalAmountData['discount_type'] = this.getDiscountType('key', this.discountType, 'label');
        this.totalAmountData['totalTimesheetUnit'] = TU;
        this.totalAmountData['carryForwardUnit'] = CFU;
        this.totalAmountData['fixedUnit'] = FU;
        this.totalAmountData['extraUnit'] = Math.ceil(EU);
        this.totalAmountData['wOffUnit'] = (Woff > 0) ? Math.floor(Woff) : 0;
        this.totalAmountData['wOnUnit'] = (Won > 0) ? Math.ceil(Won) : 0;
        this.totalAmountData['fixedFee'] = FF;
        this.totalAmountData['extraAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(EA, '1.2-2'));
        this.totalAmountData['grossAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(GA, '1.2-2'));
        this.totalAmountData['discount'] = Discount;
        this.totalAmountData['netAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(NA, '1.2-2'));
        this.totalAmountData['card_surcharge'] = CSP;
        this.totalAmountData['SurchargeAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(CSA, '1.2-2'));
        this.totalAmountData['gstAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(GST, '1.2-2'));
        this.totalAmountData['paidAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(AP, '1.2-2'));
        // console.log(this.totalAmountData);
      }
      if (+this.serviceId === SERVICEDATA.BK || +this.serviceId === SERVICEDATA.PAYROLL || +this.serviceId === SERVICEDATA.TAX) {
        this.showDiscount = 1;
        this.showGrandTotalTimeSheetSection = 1;
        this.showGrandTotalWriteOffSection = 1;
        this.showIsFixedFees = 1;
        // Advance Invoice then need to show only Grand Total Section
        if (this.invoiceType === 'Advance' || this.invoiceType === 'Formation') {
          this.showDiscount = 0;
          this.showGrandTotalTimeSheetSection = 0;
          this.showGrandTotalWriteOffSection = 0;
          this.showIsFixedFees = 0;
        }
        if (this.isView === 1 && this.invoiceStatusData.status_id === INVOICESTAGEUPDATE.DIM) {
          this.showDiscount = 0;
          this.showGrandTotalTimeSheetSection = 0;
          this.showGrandTotalWriteOffSection = 0;
          this.showIsFixedFees = 0;
          this.isDismissInvoice = 1;
        }
      }
      // console.log(this.serviceId);
      if (+this.serviceId === 7) {
        this.showGrandTotalWriteOffSection = 1;
      }
    });
    // this.changeGrandWriteOffOnAmountValue(this.grandWriteOffAmount, 0);
    // this.changeGrandWriteOffOnAmountValue(this.grandWriteOnAmount, 1);
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

  /**
   * On Click of Preview Invoice
   */
  onPreviewInvoice() {
    this._sharedService.setInvoiceData(this.invoiceStatusData);
    this._router.navigate(['/' + AdminRoutes.WIP_PREVIEW_VIEW]);
  }

  /**
   * on click conformation dialog send back to TAM
   */
  onToggleConfomrtaionDialogBacktoTAM() {
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure, you want to Send Back to TAM?'
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.updateData(AdminAPI.INVOICE_STATUS_CHANGE, this.invoiceStatusData.id, {
          'status_id': INVOICESTAGEUPDATE.ARW,
        }).subscribe(response => {
          this.invoice();
        });
      }
    });
  }

  /**
   * on click conformation dialog send back to Billing Stage
   */
  onToggleConfomrtaionDialogBacktoBillingStage() {
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure, you want to Send Back to Billing Stage?'
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.updateData(AdminAPI.INVOICE_STATUS_CHANGE, this.invoiceStatusData.id, {
          'status_id': INVOICESTAGEUPDATE.ABA
        }).subscribe(response => {
          this.invoice();
        });
      }
    });
  }

  /**
   * On Click of Dismiss Invoice
   */
  onOpenDismissDialog() {
    const dialogRef = this.dialog.open(DismissDialogComponent, {
      panelClass: 'dismiss-dialog-container',
      data: {
        id: this.invoiceStatusData.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  /**
   * On Click of See Advance Invoice
   */
  onOpenAdvanceInvoice() {
    const dialogRef = this.dialog.open(AdvanceInvoicesComponent, {
      panelClass: 'advance-invoice-dialog-container',
      data: {
        content: this.advanceFeeData,
        otherInfo: this.advanceFeesInfo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  /**
   * Redirect on Invoice Listing -- DO NOT DELETE THIS
   */
  invoice() {
    this._router.navigate(['/' + AdminRoutes.INVOICES_DASHBOARD]);
  }

  /**
   * Format Date
   * @param obj
   */
  formatDate(obj) {
    const dateValue = new Date(obj);
    return moment(dateValue).format('DD-MM-YYYY');
  }

  /**
   * on billing status change make charged units plus to total units and carryforward and writeoffunit minus to
   * total units.
   * @param event
   * @param parentDataIndex
   * @param childDataIndex
   * @param childRow
   */
  onBillingStatusChange(event: any, parentDataIndex: number, childDataIndex: number, childRow: number) {
    this.WIPParentData[parentDataIndex][childDataIndex][childRow]['billing_status'] = event.value;
    this.WIPParentData = this.WIPParentData;
    this.OnWipInvoiceData(this.WIPParentData);
  }

  /**
   * Submit Invoice Notes
   * @param formValue
   * @param isValid
   */
  submitInoiceNotes(formValue: any, isValid: boolean) {
    if (isValid) {
      this._commonCrudService.addData(AdminAPI.INVOICE_NOTES_ADD + '/' + this.invoiceStatusData.id, formValue).subscribe(response => {
        this.addEditnotesForm.resetForm();
        this.createNoteForm();
        this.getNotesList();
      });
    }
  }

  /**
   * Get Invoice Notes after add invoice notes
   */
  getNotesList() {
    this._commonCrudService.getData(AdminAPI.INVOICE_WIP_LIST, this.invoiceStatusData.id).subscribe(Response => {
      const InvoiceData = Response.payload.data;
      this.WIPInvoiceData['InvoiceNotes'] = (InvoiceData['InvoiceNotes'].length) ? InvoiceData['InvoiceNotes'] : '';
    });
  }

  /**
   * Check Advance Fee Details
   */
  checkForAdvanceFee(value: any) {
    if ((Number(value) > Number(this.advanceFeesInfo['Balance'])) && +this.discountType === 3) {
      this._sharedService.setToastMessage(ToastErrorMessages.AMOUNT_GREATER_THAN_ADVANCE_FEE, ToastType.ERROR);
      this.discountAmount = 0;
    }
  }

  /**
   * Reset Discount Amount On Change of Discount Details
   */
  resetDiscountData(event) {
    this.discountAmount = 0;
    this.discountType = event.value;
    this.OnWipInvoiceData(this.WIPParentData);
  }

  /**
   * Update Grand Total After Discount
   */
  updateGrandTotalAfterDiscount(event) {
    let val = Number(event.target.value);
    if (val >= 0) {
      this.discountAmount = this._noCommaPipe.transform(this._decimalPipe.transform(val, '1.2-2'));
      // console.log(this.discountAmount);
      this.OnWipInvoiceData(this.WIPParentData);
    }
  }

  /**
   * Change Timesheet Write on & Write off units update total with wip invoice
   * @param event
   * @param WIPParentKey
   * @param RPH
   * @param operationType
   */
  changeTimesheetAmount(event, WIPParentKey, RPH: number, operationType: number) {
    let val = Number(event.target.value);
    if (val >= 0) {
      if (operationType === 0) {
        this.writeOffUnit[WIPParentKey] = val;
      }
      if (operationType === 1) {
        this.writeOnUnit[WIPParentKey] = val;
      }
      this.OnWipInvoiceData(this.WIPParentData);
    }
  }

  /**
   * Change Grand Write on & Write off units update total with wip invoice
   * @param event
   * @param operationType
   */
  changeGrandWriteOffOnAmount(event, operationType: number) {
    let val = Number(event.target.value);
    if (val >= 0) {
      if (operationType === 0) {
        this.grandWriteOffAmount = val;
      }
      if (operationType === 1) {
        this.grandWriteOnAmount = val;
      }
      this.OnWipInvoiceData(this.WIPParentData);
    }
  }

  /**
   * Change Grand Write on & Write off units update total with wip invoice
   * @param event
   * @param operationType
   */
  changeGrandWriteOffOnAmountValue(value: number, operationType: number) {
    let val = Number(value);
    if (val >= 0) {
      if (operationType === 0) {
        this.grandWriteOffAmount = val;
      }
      if (operationType === 1) {
        this.grandWriteOnAmount = val;
      }
      this.OnWipInvoiceData(this.WIPParentData);
    }
  }

  /**
   * On Change details of WIP Invoice Update data
   * @param WipInvoiceData
   * @constructor
   */
  OnWipInvoiceData(WipInvoiceData) {
    this.WIPParentData = {};
    this.WIPParentData = WipInvoiceData;
    // console.log(WipInvoiceData);
    if (this.WIPInvoiceData) {
      let TU = 0;
      let CFU = 0;
      let FU = (this.totalAmountData['fixedUnit']) ? Number(this.totalAmountData['fixedUnit']) : 0;
      let EU = 0;
      let Woff = 0;
      let Won = 0;
      let FF = (this.totalAmountData['fixedFee']) ? Number(this.totalAmountData['fixedFee']) : 0;
      let EA = 0;
      let GA = 0;
      let Discount = (this.discountAmount) ? this._noCommaPipe.transform(this._decimalPipe.transform(this.discountAmount, '1.2-2')) : 0;
      let NA = 0;
      let CSP = (this.WIPInvoiceData['invoice']['invoice']['card_surcharge']) ? this.WIPInvoiceData['invoice']['invoice']['card_surcharge'] : 0;
      let CSA = 0;
      let GST = 0;
      let AP = 0;

      if (CommonFunctions.isEmpty(this.WIPParentData)) {
        TU = (this.WIPInvoiceData['invoice']['invoice']['timesheet_unit']) ? Number(this.WIPInvoiceData['invoice']['invoice']['timesheet_unit']) : 0;
        CFU = (this.WIPInvoiceData['invoice']['invoice']['carry_unit']) ? Number(this.WIPInvoiceData['invoice']['invoice']['carry_unit']) : 0;
        FU = (this.WIPInvoiceData['invoice']['invoice']['fixed_unit']) ? Number(this.WIPInvoiceData['invoice']['invoice']['fixed_unit']) : 0;
        EU = (this.WIPInvoiceData['invoice']['invoice']['extra_unit']) ? Number(this.WIPInvoiceData['invoice']['invoice']['extra_unit']) : 0;
        Woff = (this.WIPInvoiceData['invoice']['invoice']['woff_unit']) ? Number(this.WIPInvoiceData['invoice']['invoice']['woff_unit']) : 0;
        Won = (this.WIPInvoiceData['invoice']['invoice']['won_unit']) ? Number(this.WIPInvoiceData['invoice']['invoice']['won_unit']) : 0;
        FF = (this.WIPInvoiceData['invoice']['invoice']['ff_amount']) ? Number(this.WIPInvoiceData['invoice']['invoice']['ff_amount']) : 0;
        EA = 0;
        GA = 0;
        Discount = (this.discountAmount >= 0) ? this._noCommaPipe.transform(this._decimalPipe.transform(this.discountAmount, '1.2-2')) : (this.WIPInvoiceData['invoice']['invoice']['discount_amount']) ? Number(this.WIPInvoiceData['invoice']['invoice']['discount_amount']) : 0;
        // console.log(Discount);
        NA = 0;
        CSP = (this.WIPInvoiceData['invoice']['invoice']['card_surcharge']) ? Number(this.WIPInvoiceData['invoice']['invoice']['card_surcharge']) : 0;
        CSA = 0;
        GST = 0;
        AP = 0;
      }
      if (this.WIPParentData) {
        for (const key in this.WIPParentData) {
          delete this.WIPParentData[key]['timesheet_unit'];
          delete this.WIPParentData[key]['write_Off'];
          delete this.WIPParentData[key]['carry_forward_unit'];
          delete this.WIPParentData[key]['charged_units'];
          delete this.WIPParentData[key]['extra_amount'];
          this.writeOffUnit[key] = (this.writeOffUnit[key] >= 0) ? this.writeOffUnit[key] : (this.WIPMasterUnitData[key] ? this.WIPMasterUnitData[key]['woffunit'] : 0);
          this.writeOnUnit[key] = (this.writeOnUnit[key] >= 0) ? this.writeOnUnit[key] : (this.WIPMasterUnitData[key] ? this.WIPMasterUnitData[key]['wonunit'] : 0);
          // console.log(this.writeOnUnit[key]);
          let $ = 0;
          let t = 0;
          let c = 0;
          let d = 0;
          let taskInnerExtraAmount = 0;

          /**
           * for each key of invoice data ['key'] make a field wise calculation and make total of carry forward
           * and other fields.
           */
          for (const childKey in this.WIPParentData[key]) {
            delete this.WIPParentData[key][childKey]['task_extra_amount'];
            delete this.WIPParentData[key][childKey]['task_total_units'];
            delete this.WIPParentData[key][childKey]['extra_activity'];

            let task_extra_amount = 0;
            let task_total_units = 0;
            for (const childGridKey in this.WIPParentData[key][childKey]) {
              if (Number(childGridKey) >= 0) {
                $ += this.WIPParentData[key][childKey][childGridKey]['amount'];
                t += this.WIPParentData[key][childKey][childGridKey]['units'];
                task_extra_amount += +(this.WIPParentData[key][childKey][childGridKey]['amount']);
                task_total_units += +(this.WIPParentData[key][childKey][childGridKey]['units']);

                if (this.WIPParentData[key][childKey][childGridKey]['billing_status'] === 2) {
                  d += this.WIPParentData[key][childKey][childGridKey]['units'];
                  task_extra_amount -= +(this.WIPParentData[key][childKey][childGridKey]['amount']);
                  task_total_units -= +(this.WIPParentData[key][childKey][childGridKey]['units']);
                } else if (this.WIPParentData[key][childKey][childGridKey]['billing_status'] === 3) {
                  c += this.WIPParentData[key][childKey][childGridKey]['units'];
                  task_extra_amount -= +(this.WIPParentData[key][childKey][childGridKey]['amount']);
                  task_total_units -= +(this.WIPParentData[key][childKey][childGridKey]['units']);
                }
              }
            }
            this.WIPParentData[key][childKey]['task_extra_amount'] = this._noCommaPipe.transform(this._decimalPipe.transform(task_extra_amount, '1.2-2'));
            this.WIPParentData[key][childKey]['task_total_units'] = task_total_units;
            this.WIPParentData[key][childKey]['extra_activity'] = (this.WIPInvoiceData['invoice']['timesheetDetail']['subActivity'][key]) ? (this.WIPInvoiceData['invoice']['timesheetDetail']['subActivity'][key][childKey]) ? this.WIPInvoiceData['invoice']['timesheetDetail']['subActivity'][key][childKey] : [] : [];
            taskInnerExtraAmount += Number(this.WIPParentData[key][childKey]['task_extra_amount']);
          }

          let totalTimesheetAmount = 0;
          let y = 0;
          t = (t > 0) ? t : 0;
          y = (t + this.writeOnUnit[key]) - (this.writeOffUnit[key] + c + d);
          // const rph = (this.WIPInvoiceData['BillingDetail']['RPH']) ? this.WIPInvoiceData['BillingDetail']['RPH'][key] : this.default_rph;
          // totalTimesheetAmount = (y > 0) ? y * rph / this.unit_ratio : 0;
          if (this.writeOnUnit[key] > 0 || this.writeOffUnit[key] > 0) {
            const rph = (this.WIPInvoiceData['BillingDetail']) ? this.WIPInvoiceData['BillingDetail']['RPH'][key] : this.default_rph;
            totalTimesheetAmount = (y > 0) ? y * rph / this.unit_ratio : 0;
          } else {
            totalTimesheetAmount = Number(taskInnerExtraAmount);
          }
          this.WIPParentData[key]['timesheet_unit'] = t;
          this.WIPParentData[key]['write_Off'] = c;
          this.WIPParentData[key]['carry_forward_unit'] = d;
          this.WIPParentData[key]['charged_units'] = (y > 0) ? y : 0;
          this.WIPParentData[key]['extra_amount'] = totalTimesheetAmount.toFixed(2);
          TU += t;
          CFU += d;
          EA += Number(totalTimesheetAmount.toFixed(2));
        }
      }

      const default_rph = (this.WIPInvoiceData['BillingDetail']['RPH']) ? this.WIPInvoiceData['BillingDetail']['RPH']['default'] : this.default_rph;
      // console.log(4, EA);
      // console.log(5,this.grandWriteOnAmount);
      // console.log(6,this.grandWriteOffAmount);
      const TEA = (EA + this.grandWriteOnAmount);
      let NGA = 0;
      if (TEA > this.grandWriteOffAmount) {
        EA = Number(((EA + this.grandWriteOnAmount) - this.grandWriteOffAmount).toFixed(2));
      } else {
        NGA = TEA;
        EA = 0;
      }
      EU = (EA === 0) ? 0 : EA * this.unit_ratio / default_rph;
      if (EU <= 0 || isNaN(EU)) {
        EU = 0;
      }
      Woff = TU - (CFU + FU + EU);
      Won = (CFU + FU + EU) - TU;

      if (EA <= 0 && FF <= 0) {
        EA = 0;
        FF = 0;
        GA = GA;
      } else if (EA <= 0 && NGA === 0) {
        EA = 0;
        GA = Number(((Number(FF) + this.grandWriteOnAmount) - this.grandWriteOffAmount).toFixed(2));
      } else if (EA <= 0 && NGA > 0) {
        GA = Number(((Number(FF) + Number(TEA)) - this.grandWriteOffAmount).toFixed(2));
      } else {
        GA = Number(EA) + Number(FF);
      }

      if (GA <= 0) {
        GA = 0;
      }
      // Need to check if Write off & Write on amount then need to update
      if (this.serviceId === 7) {
        if (Number(GA) > 0) {
          const discountPercentage = (this.WIPInvoiceData['BillingDetail']) ? Number(this.WIPInvoiceData['BillingDetail']['subscription_discount']) : 0;
          const discountAmount = GA * discountPercentage / 100;
          // console.log(discountAmount.toFixed(2));
          Discount = this.discountAmount = this._noCommaPipe.transform(this._decimalPipe.transform(discountAmount.toFixed(2), '1.2-2'));
        } else {
          Discount = this.discountAmount = this._noCommaPipe.transform(this._decimalPipe.transform(0.00, '1.2-2'));
        }
      }
      // console.log(GA, Discount);
      NA = Number((GA - Number(Discount)).toFixed(2));
      if (NA <= 0) {
        NA = 0;
      }
      CSA = Number(((NA * CSP) / this.percentage_ratio).toFixed(2));
      if (CSA <= 0) {
        CSA = 0;
      }
      GST = Number((((NA + CSA) * this.gst_percentage) / this.percentage_ratio).toFixed(2));
      if (GST <= 0) {
        GST = 0;
      }
      AP = Number((NA + CSA + GST).toFixed(2));
      if (AP <= 0) {
        AP = 0;
      }

      this.totalAmountData['discount_type'] = this.getDiscountType('key', this.discountType, 'label');
      this.totalAmountData['totalTimesheetUnit'] = TU;
      this.totalAmountData['carryForwardUnit'] = CFU;
      this.totalAmountData['fixedUnit'] = FU;
      this.totalAmountData['extraUnit'] = Math.ceil(EU);
      this.totalAmountData['wOffUnit'] = (Woff > 0) ? Math.floor(Woff) : 0;
      this.totalAmountData['wOnUnit'] = (Won > 0) ? Math.ceil(Won) : 0;
      this.totalAmountData['fixedFee'] = FF;
      this.totalAmountData['extraAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(EA, '1.2-2'));
      this.totalAmountData['grossAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(GA, '1.2-2'));
      this.totalAmountData['discount'] = Discount;
      this.totalAmountData['netAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(NA, '1.2-2'));
      this.totalAmountData['card_surcharge'] = CSP;
      this.totalAmountData['SurchargeAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(CSA, '1.2-2'));
      this.totalAmountData['gstAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(GST, '1.2-2'));
      this.totalAmountData['paidAmount'] = this._noCommaPipe.transform(this._decimalPipe.transform(AP, '1.2-2'));
    }
  }

  /**
   * On Tab Select Invoice Details Change
   * @param event
   */
  onSelectedIndexChange(event) {
    this.topDetailsLength = this.WIPInvoiceData['topDetail'].length;
    if (this.selectedIndex !== event.index) {
      this.selectedIndex = event.index;
      const invoice_id = (this.WIPInvoiceData['topDetail'][event.index]['id']) ? this.WIPInvoiceData['topDetail'][event.index]['id'] : 0;
      // console.log(invoice_id);
      if (invoice_id > 0) {
        this._commonCrudService.getData(AdminAPI.INVOICE_SHOW, invoice_id).subscribe(Response => {
          this.invoiceStatusData = Response.payload.data;
          this.initializeMethod();
        });
      }
    }
  }

  onSelectedIndexTabChange(value) {
    this.topDetailsLength = this.WIPInvoiceData['topDetail'].length;
    // if (this.selectedIndex !== value) {
    this.selectedIndex = value;
    const invoice_id = (this.WIPInvoiceData['topDetail'][value]['id']) ? this.WIPInvoiceData['topDetail'][value]['id'] : 0;
    // console.log(invoice_id);
    if (invoice_id > 0) {
      this._commonCrudService.getData(AdminAPI.INVOICE_SHOW, invoice_id).subscribe(Response => {
        this.invoiceStatusData = Response.payload.data;
        this.initializeMethod();
      });
    }
    // }
  }


  /**
   * On Submit WIP Invoice
   * @param submitType
   */
  onSubmitWipInvoice(submitType) {
    const disAmount = Number(this.discountAmount);
    if ((this.isView === 0) && (this.advanceFeeData !== {}) && (disAmount >= 0) && (disAmount < Number(this.advanceFeesInfo['Balance']))) {
      const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          content: 'A positive balance in advance fees is available for this client. Are you sure you want to proceed without adjusting it?'
        }
      });
      slideDialog.afterClosed().subscribe((value) => {
        if (value) {
          this.onSubmitFormData(submitType);
        }
      });
    } else {
      this.onSubmitFormData(submitType);
    }
  }

  onSubmitFormData(submitType) {
    let master_unit = [];
    let timesheet = [];
    let formValue = {};
    if (this.WIPParentData) {
      for (const key in this.WIPParentData) {
        for (const childKey in this.WIPParentData[key]) {
          for (const childGridKey in this.WIPParentData[key][childKey]) {
            if (Object.keys(this.WIPParentData[key][childKey][childGridKey]).length > 0) {
              //isObject(this.WIPParentData[key][childKey][childGridKey]) &&
              if (this.WIPParentData[key][childKey][childGridKey]['timesheet_id']) {
                // let timesheetData = {};
                // timesheetData['timesheet_id'] = this.WIPParentData[key][childKey][childGridKey]['timesheet_id'];
                // timesheetData['units'] = this.WIPParentData[key][childKey][childGridKey]['units'];
                // timesheetData['billing_status'] = this.WIPParentData[key][childKey][childGridKey]['billing_status'];
                // timesheetData['carry_forward_invoice_ids'] = this.WIPParentData[key][childKey][childGridKey]['carry_forward_invoice_ids'];
                // timesheet.push(timesheetData);
                timesheet.push(this.WIPParentData[key][childKey][childGridKey]);
              }
            }
          }
        }
        let master_data = {};
        master_data['id'] = (this.WIPMasterUnitData[key]) ? this.WIPMasterUnitData[key]['id'] : 0;
        master_data['invoice_id'] = (this.WIPInvoiceData['invoice']['invoice']['id']) ? this.WIPInvoiceData['invoice']['invoice']['id'] : 0;
        master_data['master_id'] = (key) ? key : 0;
        master_data['timesheet_unit'] = (this.WIPParentData[key]['timesheet_unit']) ? this.WIPParentData[key]['timesheet_unit'] : 0;
        master_data['woffunit'] = (this.writeOffUnit[key]) ? this.writeOffUnit[key] : 0;
        master_data['wonunit'] = (this.writeOnUnit[key]) ? this.writeOnUnit[key] : 0;
        master_data['woff_unit'] = (this.WIPParentData[key]['write_Off']) ? this.WIPParentData[key]['write_Off'] : 0;
        master_data['carry_unit'] = (this.WIPParentData[key]['carry_forward_unit']) ? this.WIPParentData[key]['carry_forward_unit'] : 0;
        master_data['charge_unit'] = (this.WIPParentData[key]['charged_units']) ? this.WIPParentData[key]['charged_units'] : 0;
        master_data['rate_per_hour'] = (this.WIPInvoiceData['BillingDetail']['RPH'][key]) ? this.WIPInvoiceData['BillingDetail']['RPH'][key] : this.default_rph;
        master_data['amount'] = (this.WIPParentData[key]['extra_amount']) ? this.WIPParentData[key]['extra_amount'] : 0;
        master_unit.push(master_data);

        formValue['timesheet'] = timesheet;
        formValue['master_unit'] = master_unit;
      }
      formValue['woff_amount'] = this.grandWriteOffAmount;
      formValue['won_amount'] = this.grandWriteOnAmount;
      formValue['timesheet_unit'] = this.totalAmountData['totalTimesheetUnit'];
      formValue['carry_unit'] = this.totalAmountData['carryForwardUnit'];
      formValue['fixed_unit'] = this.totalAmountData['fixedUnit'];
      formValue['extra_unit'] = this.totalAmountData['extraUnit'];
      formValue['woff_unit'] = this.totalAmountData['wOnUnit'];
      formValue['won_unit'] = this.totalAmountData['wOnUnit'];
      formValue['charged_unit'] = '';
      formValue['total_charge_unit'] = '';
      formValue['extra_woff'] = '';
      formValue['extra_won'] = '';
      formValue['ff_amount'] = this.totalAmountData['fixedFee'];
      formValue['extra_amount'] = this.totalAmountData['extraAmount'];
      formValue['gross_amount'] = this.totalAmountData['grossAmount'];
      formValue['discount_type'] = this.totalAmountData['discount_type'];
      formValue['discount_amount'] = this.totalAmountData['discount'];
      formValue['net_amount'] = this.totalAmountData['netAmount'];
      formValue['card_surcharge'] = this.totalAmountData['card_surcharge'];
      formValue['surcharge_amount'] = this.totalAmountData['SurchargeAmount'];
      formValue['gst_amount'] = this.totalAmountData['gstAmount'];
      formValue['paid_amount'] = this.totalAmountData['paidAmount'];
    }
    formValue['dismiss_reason'] = this.AdjustWIPReason;
    // IF Status Adjusted then need to check wip reason is there or not
    if (((submitType === 3) || (submitType === 4)) && (this.AdjustWIPReason === '' || this.AdjustWIPReason === null)) {
      this.isValidAllDetails = true;
      this._sharedService.setToastMessage(ToastErrorMessages.ADJUST_WIP_REASON_NOT_BLANK, ToastType.ERROR);
    } else if (((submitType === 3) || (submitType === 4)) && (this.AdjustWIPReason !== '' || this.AdjustWIPReason !== null)) {
      formValue['adjusted'] = 1;
      formValue['dismiss_reason'] = this.AdjustWIPReason;
      this.isValidAllDetails = false;
    }

    if (!this.isValidAllDetails) {
      // Add Posted Data
      this._commonCrudService.addData(AdminAPI.INVOICE_UPDATE + '/' + this.invoiceStatusData.id, formValue).subscribe(response => {
        // Redirect to Invoice Listing
        if (submitType === 1 || submitType === 3) {
          this.invoice();
        }

        // Redirect to Invoice Preview
        if (submitType === 2) {
          if (this.invoiceStatusData.id > 0) {
            this._commonCrudService.getData(AdminAPI.INVOICE_SHOW, this.invoiceStatusData.id).subscribe(Response => {
              this._sharedService.setInvoiceData(Response.payload.data);
              this._router.navigate(['/' + AdminRoutes.WIP_PREVIEW]);
            });
          }
        }

        // Redirect to Next Index Tab
        if (submitType === 4) {
          // console.log(this.selectedIndex);
          this.selectedIndex = this.selectedIndex + 1;
          // console.log(this.selectedIndex);
        }
      });
    }
  }

  /**
   * Get Discount Type
   * @param type
   * @param dataType
   * @param returnType
   */
  getDiscountType(type: any, dataType: any, returnType: any): any {
    if (type === 'key') {
      const val = this.discountTypeData.filter(elem => elem.key === Number(dataType));
      return (val.length) ? val[0][returnType] : 1;
    } else if (type === 'label') {
      const val = this.discountTypeData.filter(elem => elem.label === dataType);
      return (val.length) ? val[0][returnType] : 1;
    } else {
      return 1;
    }
  }

  /**
   * Get Billing Status Name From ID
   * @param status_id
   */
  getBillingStatusName(status_id: number): string {
    const val = this.billingStatus.filter(elem => elem.key === status_id);
    return (val.length) ? val[0].label : '';
  }

  /**
   * Open Timesheet Dialog For More Information
   */
  openMoreDetailsDialog(timesheetDetails: any) {
    let dialogRef = this.dialog.open(MoreDetailsDialogComponent, {
      panelClass: 'lg-dialog--container',
      width: '500px',
      data: {
        content: timesheetDetails
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  changeInvoiceIndexToPrevious() {
    this.selectedIndex = this.selectedIndex - 1;
  }
}
