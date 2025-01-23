import {Component, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatDialog} from '@angular/material';
import {InvoiceLogDialogComponent} from '../invoice-log-dialog/invoice-log-dialog.component';
import {AdminRoutes} from '../../../../../../../utility/constants/admin-route';
import {ActivatedRoute, Router} from '@angular/router';
import {isUndefined} from 'util';
import {InvoiceStatusWise} from '../../invoice.model';
import {BASE, INVOICESTAGEUPDATE, invoiceType, yesNo} from '../../../../../../../utility/constants/base-constants';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {ConfirmationDialogComponent} from '../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {SharedObjService} from '../../../../../../../utility/shared-service/shared-object.service';
import {Clients} from '../../../../../client-module/view-client/view-client.model';
import {Services} from '../../../../../../../utility/shared-model/services.model';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AdminUser, Privilege} from '../../../../../../../utility/shared-model/admin-user.model';
import * as moment from 'moment';
import {CommonFunctions, convertURLParamToDecode} from '../../../../../../../utility/common-functions';
import {DecimalPipe} from '@angular/common';
import {NoCommaPipe} from '../../../../../../../utility/pipe/noComma.pipe';
import {DismissDialogComponent} from "../../manage-wip-invoice/dismiss-dialog/dismiss-dialog.component";

@Component({
  selector: 'app-awaiting-review',
  templateUrl: './awaiting-review.component.html',
  styleUrls: ['./awaiting-review.component.scss'],
  providers: [CommonCrudService, DecimalPipe, NoCommaPipe]
})

export class AwaitingReviewComponent implements OnInit, OnChanges {

  // In-out variable
  @Input() invoiceSelectedStatus: any;
  @Input() invoiceselectedTabID: any;
  // Data Variables
  yesNoList = yesNo;
  clientList: Clients[] = [];
  serviceList: Services[] = [];
  userList: AdminUser[] = [];
  tamList: AdminUser[] = [];
  thList: AdminUser[] = [];
  invoiceStatusWiseList: InvoiceStatusWise[] = [];
  invoiceNoList: InvoiceStatusWise[] = [];
  totalInvoicePaidAmount = 0;
  invoiceType = invoiceType;
  // equalJSON = {'invoice.service_id': 1, 'is_fixed_fees': 0, 'invoice_type': 'Manual'};
  // equalJSON = {'invoice.service_id': 6};
  // equalJSON = {'invoice.service_id': 1, 'invoice.entity_id': 2268};
  // equalJSON = {};
  equalJSON = {};
  likeJSON = {};
  inJSON = {};

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Other Variables
  isOpenFilterView = false;
  isOpenHistoryDialog = false;
  selectedInvoiceIds = [];
  selectedInvoiceIdsForMoveToDebtors = [];
  selectAllForImportCSV = false;
  selectAllForForMoveToDebtors = false;
  ARW = INVOICESTAGEUPDATE.ARW;
  ABA = INVOICESTAGEUPDATE.ABA;
  RTE = INVOICESTAGEUPDATE.RTE;
  PAD = INVOICESTAGEUPDATE.PAD;
  ATH = INVOICESTAGEUPDATE.ATH;
  AMR = INVOICESTAGEUPDATE.AMR;
  APM = INVOICESTAGEUPDATE.APM;
  STC = INVOICESTAGEUPDATE.STC;
  ALL = INVOICESTAGEUPDATE.ALL;
  DIM = INVOICESTAGEUPDATE.DIM;
  ADJ = INVOICESTAGEUPDATE.ADJ;

  filterForm: FormGroup;
  advanceFilterForm: FormGroup;
  selectedFilterEntity = null;
  PeriodFromValue = null;
  PeriodToValue = null;
  PaymentFromValue = null;
  PaymentToValue = null;
  CreatedFromValue = null;
  CreatedToValue = null;
  tabData: Privilege | any[];
  userData: AdminUser;
  importCsv = false;
  moveToXero = false;
  moveToDebtors = false;
  moveToPaid = false;
  updateDebtors = false;
  checkFirstTimeRedirectionParam = 0;
  btnDismiss = false;

  constructor(private _fb: FormBuilder, private dialog: MatDialog, public _sharedService: SharedService, public _router: Router, private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService, private _decimalPipe: DecimalPipe, private _noCommaPipe: NoCommaPipe,
              private route: ActivatedRoute
  ) {
  }

  // get form control
  get invoiceNoField(): AbstractControl {
    return this.filterForm.get('invoice_no');
  }

  get entityIdField(): AbstractControl {
    return this.filterForm.get('entity_id');
  }

  get serviceIdField(): AbstractControl {
    return this.filterForm.get('service_id');
  }

  get fromPeriodField(): AbstractControl {
    return this.filterForm.get('from_period');
  }

  get toPeriodField(): AbstractControl {
    return this.filterForm.get('to_period');
  }

  get paymentDateFromField(): AbstractControl {
    return this.filterForm.get('payment_date_from');
  }

  get paymentDateToField(): AbstractControl {
    return this.filterForm.get('payment_date_to');
  }

  get createdOnFromField(): AbstractControl {
    return this.filterForm.get('created_on_from');
  }

  get createdOnToField(): AbstractControl {
    return this.filterForm.get('created_on_to');
  }

  get createdByField(): AbstractControl {
    return this.filterForm.get('created_by');
  }

  get tamField(): AbstractControl {
    return this.filterForm.get('tam');
  }

  get thField(): AbstractControl {
    return this.filterForm.get('th');
  }

  get allocateCreditField(): AbstractControl {
    return this.filterForm.get('allocate_credit');
  }

  get invoiceTypeField(): AbstractControl {
    return this.filterForm.get('invoice_type');
  }

  get isFixedFeeField(): AbstractControl {
    return this.filterForm.get('is_fixed_fees');
  }

  ngOnInit() {
    this.userData = this._sharedService.getUser();
    this.getClientList();
    this.getServices();
    this.getUserList();
    this.createAdvanceFilterForm();
  }

  createAdvanceFilterForm() {
    // console.log(1);
    this.filterForm = this._fb.group({
      invoice_no: new FormControl(null),
      entity_id: new FormControl((this.selectedFilterEntity) ? this.selectedFilterEntity : null),
      service_id: new FormControl(null),
      from_period: new FormControl(''),
      to_period: new FormControl(''),
      payment_date_from: new FormControl(''),
      payment_date_to: new FormControl(''),
      created_on_from: new FormControl(''),
      created_on_to: new FormControl(''),
      created_by: new FormControl(null),
      tam: new FormControl(null),
      th: new FormControl(null),
      allocate_credit: new FormControl(null),
      invoice_type: new FormControl(''),
      is_fixed_fees: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      invoice_no: new FormControl(null),
      entity_id: new FormControl((this.selectedFilterEntity) ? this.selectedFilterEntity : null),
      service_id: new FormControl(null),
      from_period: new FormControl(''),
      to_period: new FormControl(''),
      payment_date_from: new FormControl(''),
      payment_date_to: new FormControl(''),
      created_on_from: new FormControl(''),
      created_on_to: new FormControl(''),
      created_by: new FormControl(null),
      tam: new FormControl(null),
      th: new FormControl(null),
      allocate_credit: new FormControl(null),
      invoice_type: new FormControl(''),
      is_fixed_fees: new FormControl(null)
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.invoiceselectedTabID);
    this.importCsv = this._sharedService.checkUserPrivileges(this.invoiceselectedTabID, 'otherRights', 'otherRights', 'button_name', 'import_csv', 1);
    this.moveToXero = this._sharedService.checkUserPrivileges(this.invoiceselectedTabID, 'otherRights', 'otherRights', 'button_name', 'move_to_xero', 1);
    this.moveToDebtors = this._sharedService.checkUserPrivileges(this.invoiceselectedTabID, 'otherRights', 'otherRights', 'button_name', 'move_to_debtors', 1);
    this.moveToPaid = this._sharedService.checkUserPrivileges(this.invoiceselectedTabID, 'otherRights', 'otherRights', 'button_name', 'move_to_paid', 1);
    this.updateDebtors = this._sharedService.checkUserPrivileges(this.invoiceselectedTabID, 'otherRights', 'otherRights', 'button_name', 'update_debtors', 1);

    if (changes['invoiceSelectedStatus']) {
      if (!isUndefined(this.invoiceSelectedStatus)) {
        // Redirect & Select Invoice For Particular Entity
        // console.log(this.route.snapshot.queryParams);
        if (this.route.snapshot.queryParams !== {}) {
          this.route.queryParams
            .subscribe(params => {
              const dataItem = convertURLParamToDecode(params);
              if (dataItem) {
                this.selectedFilterEntity = (dataItem['entity_id']) ? Number(dataItem['entity_id']) : null;
                if (this.selectedFilterEntity && this.checkFirstTimeRedirectionParam === 0) {
                  this.filterForm.get('entity_id').setValue(this.selectedFilterEntity);
                  this.advanceFilterForm.get('entity_id').setValue(this.selectedFilterEntity);
                  this.setAdvanceFilter(this.filterForm);
                } else {
                  this.setAdvanceFilter(this.filterForm);
                }
              } else {
                this.setAdvanceFilter(this.filterForm);
              }
              this.checkFirstTimeRedirectionParam = 1;
            });
        } else {
          // console.log(1);
          this.getInvoiceList(1, 'id', 'desc');
        }
        this.selectedInvoiceIds = [];
        this.selectAllForImportCSV = false;
        this.selectedInvoiceIdsForMoveToDebtors = [];
        this.selectAllForForMoveToDebtors = false;
      }
    }
  }

  /**
   * invoice list api status wise.
   * @param pageNumber
   */
  getInvoiceList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.INVOICE_STATUS_WISE_LIST + '/' + this.invoiceSelectedStatus, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(Response => {
      this.totalInvoicePaidAmount = 0;
      // console.log(10);
      this.handleInvoiceStatusWiseResponse(Response);
    });
  }

  /**
   * Get Client List
   */
  getClientList() {
    // this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
    //   this.clientList = response;
    // });
    this._commonCrudService.listData(AdminAPI.BILLING_BASIC, {'records': 'all', 'discountinue_stage': '2'}, {'compare': {'equal': {'parent_id': 0}}}).subscribe(response => {
      this.clientList = response.payload.data;
    });
  }

  /**
   * Get Service For Generate Invoice
   */
  getServices() {
    this._sharedObjService.getServices({}, {'compare': {'equal': {'parent_id': 0}}}).subscribe((response) => {
      this.serviceList = response;
    });
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.userList = response;
      const tam = response.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 9 : 0);
      const th = response.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 60 : 0);
      this.tamList = tam;
      this.thList = th;
    });
  }

  /**
   * Handle Client Response
   * @param response
   */
  handleInvoiceStatusWiseResponse(response: any) {
    this.invoiceStatusWiseList = response.payload.data;
    this.invoiceStatusWiseList.map(item => {
      this.totalInvoicePaidAmount += (+item.paid_amount);
    });
    this.totalInvoicePaidAmount = this._noCommaPipe.transform(this._decimalPipe.transform(this.totalInvoicePaidAmount, '1.2-2'));
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }


  // event

  getSortData(sortKey: string, sortVal: string) {
    this.getInvoiceList(1, sortKey, sortVal);
  }

  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    if (this.tamField.value) {
      params['technical_account_manager'] = this.tamField.value;
    }
    if (this.thField.value) {
      params['team_lead'] = this.thField.value;
    }
    this._commonCrudService.downloadExcelData(AdminAPI.INVOICE_STATUS_WISE_LIST + '/' + this.invoiceSelectedStatus, params, this.getSearchParam(), 'Invoice ', 0).subscribe(response => {
    });
  }

  /**
   * Toogle Filter
   */

  onOpenFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  /**
   * Close filter method
   */
  onCloseFilter() {
    this.isOpenFilterView = false;
  }

  /**
   * pagination to the grid
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getInvoiceList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  deleteMsg(index) {
  }

  /**
   * awaiting review redirection open invoice log
   */
  onOpenInvoiceLogDialog(invoiceData?: any) {
    const dialogRef = this.dialog.open(InvoiceLogDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        invoiceData: invoiceData
      }
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  onOpenInvoiceTemplate() {
    this._router.navigate(['/' + AdminRoutes.INVOICE_TEMPLATE_PREVIEW]);
  }

  onOpenEditInvoiceTemplate() {
    this._router.navigate(['/' + AdminRoutes.INVOICE_TEMPLATE_EDIT]);
  }

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilterView = false;
    }
  }

  /**
   * Edit invoice redirection in manage wip invoice
   */
  editInvoice(status: InvoiceStatusWise) {
    this._sharedService.setInvoiceData(status);
    // this._router.navigate(['/' + AdminRoutes.MANAGE_WIP_INVOICE]);
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.MANAGE_WIP_INVOICE, '_blank');
    });
  }

  /**
   * Invoice redirection in manage email page for send to client
   */
  invoiceSendToClient(status: InvoiceStatusWise) {
    this._sharedService.setInvoiceData(status);
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.INVOICE_TEMPLATE_EDIT, '_blank');
    });
  }

  /**
   * Invoice redirection in manage email page for send to client
   */
  invoiceSendToClientPreview(status: InvoiceStatusWise) {
    this._sharedService.setInvoiceData(status);
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.INVOICE_TEMPLATE_PREVIEW, '_blank');
    });
    // this._router.navigate(['/' + AdminRoutes.INVOICE_TEMPLATE_PREVIEW]);
  }

  /**
   * View invoice redirection in manage wip invoice
   */
  viewInvoice(status: InvoiceStatusWise) {
    this._sharedService.setInvoiceData(status);
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.MANAGE_WIP_INVOICE_VIEW, '_blank');
    });
    // this._router.navigate(['/' + AdminRoutes.MANAGE_WIP_INVOICE_VIEW]);
  }

  /**
   * Run CRON Move to XERO
   */
  runCronMoveToXero() {
    this._commonCrudService.getData(AdminAPI.INVOICE_SEND_TO_XERO, 0).subscribe(Response => {
    });
  }

  /**
   * Run CRON Move to Paid Status
   */
  runCronMoveToPaid() {
    this._commonCrudService.getData(AdminAPI.INVOICE_MOVE_TO_PAID, 0).subscribe(Response => {
    });
  }

  /**
   * Run CRON Move to Update Debtors
   */
  runCronToUpdateDebtors() {
    this._commonCrudService.getData(AdminAPI.INVOICE_MOVE_TO_PAID, 0).subscribe(Response => {
    });
  }

  // helper
  // get function for returning pageNumber and page size at time of listing api
  getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    let params = {};
    params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    sortKey ? params ['sortBy'] = sortKey : '';
    sortOrder ? params ['sortOrder'] = sortOrder : '';
    // IF TAM & TH Filter then need to give seperate param so
    if (this.tamField.value) {
      params['technical_account_manager'] = this.tamField.value;
    }
    if (this.thField.value) {
      params['team_lead'] = this.thField.value;
    }
    return params;
  }

  /**
   * Select All Item of Event
   * @param event
   */
  onSelectAllItem(event: boolean, status_id: number) {
    // For Import CSV
    if (status_id === this.RTE) {
      this.selectedInvoiceIds = [];
      this.selectAllForImportCSV = false;
      if (event) {
        this.selectAllForImportCSV = true;
        const items = this.invoiceStatusWiseList.filter(data => (data.id > 0));
        if (items) {
          items.forEach(value => {
            this.selectedInvoiceIds.push(value.id);
          });
        }
      }
    }

    // For Import Move invoice to debtors
    if (status_id === this.APM) {
      this.selectedInvoiceIdsForMoveToDebtors = [];
      this.selectAllForForMoveToDebtors = false;
      if (event) {
        this.selectAllForForMoveToDebtors = true;
        const items = this.invoiceStatusWiseList.filter(data => (data.id > 0));
        if (items) {
          items.forEach(value => {
            this.selectedInvoiceIdsForMoveToDebtors.push(value.id);
          });
        }
      }
    }
  }

  /**
   * On Click of Item
   * @param event
   */
  onSelectItem(event: boolean, id: number, status_id: number) {
    // If invoice stage Ready to Export then show move to debtors button
    if (status_id === this.RTE) {
      if (event) {
        this.selectedInvoiceIds.push(id);
      } else {
        let index = this.selectedInvoiceIds.indexOf(id);
        if (index !== -1) {
          this.selectedInvoiceIds.splice(index, 1);
        }
      }
    }
    // If invoice stage Awaiting Payment then show move to debtors button
    if (status_id === this.APM) {
      if (event) {
        this.selectedInvoiceIdsForMoveToDebtors.push(id);
      } else {
        let index = this.selectedInvoiceIdsForMoveToDebtors.indexOf(id);
        if (index !== -1) {
          this.selectedInvoiceIdsForMoveToDebtors.splice(index, 1);
        }
      }
    }
  }

  /**
   * Used for import csv invoice manually
   */
  onConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to import invoice?'
      }
    });
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        const params = {'invoiceIds': this.selectedInvoiceIds.join(',')};
        this._commonCrudService.downloadExcelData(AdminAPI.INVOICE_EXPORT_TO_CSV, params, {}, 'Import CSV ', 5).subscribe(response => {
        });
      }
    });
  }

  /**
   * Used for move to Debtors invoice manually
   */
  onConfirmationDialogMoveToDebtors() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to move to debtors?'
      }
    });
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        const params = {'invoiceIds': this.selectedInvoiceIdsForMoveToDebtors.join(',')};
        this._commonCrudService.addData(AdminAPI.INVOICE_MOVE_TO_DEBTORS_MANUALLY, params).subscribe(response => {
          this.selectedInvoiceIdsForMoveToDebtors = [];
          this.selectAllForForMoveToDebtors = false;
          this.getInvoiceList(1, 'id', 'desc');
        });
      }
    });
  }


  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'entity_id' || elementName === 'created_by' || elementName === 'is_fixed_fees' || elementName === 'allocate_credit' || elementName === 'invoice_type') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'invoice_no') {
      delete this.likeJSON[elementName];
    } else if (elementName === 'from_period') {
      this.PeriodFromValue = null;
    } else if (elementName === 'to_period') {
      this.PeriodToValue = null;
    } else if (elementName === 'payment_date_from') {
      this.PaymentFromValue = null;
    } else if (elementName === 'payment_date_to') {
      this.PaymentToValue = null;
    } else if (elementName === 'created_on_from') {
      this.CreatedFromValue = null;
    } else if (elementName === 'created_on_to') {
      this.CreatedToValue = null;
    }
    this.getInvoiceList(1, this.sortBy, this.sortOrder);
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.likeJSON = {};
    this.equalJSON = {};
    this.inJSON = {};
    this.isOpenFilterView = false;
    this.PeriodFromValue = null;
    this.PeriodToValue = null;
    this.PaymentFromValue = null;
    this.PaymentToValue = null;
    this.CreatedFromValue = null;
    this.CreatedToValue = null;
    this.getInvoiceList(1, 'id', 'desc');
  }

  /**
   * Advance Filter Key Up function
   * @param event
   * @param formValue
   * @param {boolean} isValid
   * @param {boolean} flag
   */
  setAdvanceFilterKeyUp(event, form: FormGroup, flag: boolean) {
    let processToReq = false;
    if (flag) {
      processToReq = true;
    } else {
      if (event.keyCode === 13) {
        processToReq = true;
      }
    }
    if (processToReq) {
      this.filterForm.setValue(
        {
          'invoice_no': form.value['invoice_no'],
          'entity_id': form.value['entity_id'],
          'service_id': form.value['service_id'],
          'from_period': form.value['from_period'],
          'to_period': form.value['to_period'],
          'payment_date_from': form.value['payment_date_from'],
          'payment_date_to': form.value['payment_date_to'],
          'created_on_from': form.value['created_on_from'],
          'created_on_to': form.value['created_on_to'],
          'created_by': form.value['created_by'],
          'tam': form.value['tam'],
          'th': form.value['th'],
          'allocate_credit': form.value['allocate_credit'],
          'invoice_type': form.value['invoice_type'],
          'is_fixed_fees': form.value['is_fixed_fees'],
        });
      this.setAdvanceFilter(form, false);
    }
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {};
    this.likeJSON = {};
    this.inJSON = {};
    // removing empty key from object
    for (const key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
          delete form.value[key];
        } else {
          if (flag) {
            this.advanceFilterForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }

    if (form.value['from_period'] !== '' && form.value['from_period']) {
      this.PeriodFromValue = form.value['from_period'];
      delete form.value['from_period'];
    }
    if (form.value['to_period'] !== '' && form.value['to_period']) {
      this.PeriodToValue = form.value['to_period'];
      delete form.value['to_period'];
    }
    if (form.value['payment_date_from'] !== '' && form.value['payment_date_from']) {
      this.PaymentFromValue = form.value['payment_date_from'];
      delete form.value['payment_date_from'];
    }
    if (form.value['payment_date_to'] !== '' && form.value['payment_date_to']) {
      this.PaymentToValue = form.value['payment_date_to'];
      delete form.value['payment_date_to'];
    }

    if (form.value['created_on_from'] !== '' && form.value['created_on_from']) {
      this.CreatedFromValue = form.value['created_on_from'];
      delete form.value['created_on_from'];
    }

    if (form.value['created_on_to'] !== '' && form.value['created_on_to']) {
      this.CreatedToValue = form.value['created_on_to'];
      delete form.value['created_on_to'];
    }

    if (form.value['tam'] !== '' && form.value['tam']) {
      delete form.value['tam'];
    }

    if (form.value['th'] !== '' && form.value['th']) {
      delete form.value['th'];
    }
    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'created_by' || key === 'entity_id' || key === 'service_id' || key === 'allocate_credit' || key === 'invoice_type' || key === 'is_fixed_fees') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'invoice_no') {
            this.likeJSON[key] = encodeURIComponent(form.value[key]);
          }
        }
      }
      this.isOpenFilterView = false;
      this.getInvoiceList(1, 'id', 'desc');
    }
  }

  // advance filter search operation
  getSearchParam() {
    const params = {};
    const filter = {};

    if (this.PeriodFromValue || this.PaymentFromValue || this.CreatedFromValue) {
      filter['greaterthanequal'] = {};
    }
    if (this.PeriodToValue || this.PaymentToValue || this.CreatedToValue) {
      filter['lessthanequal'] = {};
    }

    if (this.PeriodFromValue) {
      filter['greaterthanequal']['from_period'] = moment(this.PeriodFromValue).format('YYYY-MM-DD');
    }
    if (this.PeriodToValue) {
      filter['lessthanequal']['to_period'] = moment(this.PeriodToValue).format('YYYY-MM-DD');
    }

    if (this.PaymentFromValue) {
      filter['greaterthanequal']['payment_date'] = moment(this.PaymentFromValue).format('YYYY-MM-DD');
    }
    if (this.PaymentToValue) {
      filter['lessthanequal']['payment_date'] = moment(this.PaymentToValue).format('YYYY-MM-DD');
    }

    if (this.CreatedFromValue) {
      filter['greaterthanequal']['created_on'] = moment(this.CreatedFromValue).format('YYYY-MM-DD');
    }

    if (this.CreatedToValue) {
      filter['lessthanequal']['created_on'] = moment(this.CreatedToValue).format('YYYY-MM-DD');
    }

    // check for the object whether its empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }
    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !CommonFunctions.isEmpty(filter)) {
      params['compare'] = filter;
    }
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }
    return params;
  }

  /**
   * Get invoice classes
   * @param invoice
   * @param status_id
   */
  getClasses(invoice: InvoiceStatusWise, status_id: number) {
    let returnClass = '';
    if (status_id === this.APM) {
      if (invoice.debtors_stage === 1) {
        returnClass += 'teal-tr';
      } else if (Number(invoice.outstanding_amount) > 0) {
        returnClass += 'orange-tr';
      }
    }

    if (status_id === this.ARW || status_id === this.ATH || status_id === this.ABA || status_id === this.AMR || status_id === this.STC || status_id === this.RTE) {
      if (invoice.debtors_stage === 1) {
        returnClass += 'wet-asphalt-color-tr';
      }
    }
    return returnClass;
  }

  onOpenDismissDialog(invoiceId) {
    const dialogRef = this.dialog.open(DismissDialogComponent, {
      panelClass: 'dismiss-dialog-container',
      data: {
        id: invoiceId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getInvoiceList(1, 'id', 'desc');
    });
  }

  /**
   * Check if user have edit access of each service then it will be display edit icon else not
   * @param service_id
   */
  getInvoiceServiceEdit(service_id) {
    let showEditIcon = false;
    if (this.userData.team_id === '0') {
      showEditIcon = true;
    } else {
      const serviceIDNeedToCheck = (this.userData.team_id) ? this.userData.team_id.split(',') : [];
      if (serviceIDNeedToCheck) {
        serviceIDNeedToCheck.forEach(item => {
          if (Number(item) === service_id) {
            showEditIcon = true;
          }
        });
      }
    }
    return showEditIcon;
  }
}
