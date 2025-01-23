import {Component, HostListener, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, PageEvent} from '@angular/material';
import {CommonFunctions} from '../../../../utility/common-functions';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {AddCommentsDialogComponent} from './add-comments-dialog/add-comments-dialog.component';
import {SeparateInvoiceDialogComponent} from './separate-invoice-dialog/separate-invoice-dialog.component';
import {DebtorsManagement} from './debtors-management.model';
import {Clients} from '../../client-module/view-client/view-client.model';
import {BASE, GLOBALDATAKEYS, payment, yesNo} from '../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../utility/constants/api';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import * as moment from 'moment';
import {Services} from '../../../../utility/shared-model/services.model';
import {InvoiceStatusWise} from '../invoices/invoice-dashboard/invoice.model';
import {AdminUser, Privilege} from '../../../../utility/shared-model/admin-user.model';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {DecimalPipe} from '@angular/common';
import {NoCommaPipe} from '../../../../utility/pipe/noComma.pipe';

@Component({
  selector: 'app-debtors-management',
  templateUrl: './debtors-management.component.html',
  styleUrls: ['./debtors-management.component.scss'],
  providers: [DecimalPipe, NoCommaPipe]
})
export class DebtorsManagementComponent implements OnInit {
//  @ViewChild('tinymce') tinymce;
  title = 'app';
  // Data Variables
  debtorsManagement: DebtorsManagement[] = [];
  serviceList: Services[] = [];
  userList: AdminUser[] = [];
  fixedFeeList = yesNo;
  paymentList = payment;
  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  equalJSON = {};
  likeJSON = {};
  inJSON = {};

  clientList: Clients[] = [];
  invoiceNo: InvoiceStatusWise[] = [];
  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Mat Paginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilterView = false;
  isOpenHistoryDialog = false;
  PeriodFromValue = null;
  PeriodToValue = null;
  SentFromValue = null;
  SentToValue = null;
  DueFromValue = null;
  DueToValue = null;
  totalAmount = 0;
  tamList: AdminUser[] = [];

  tabID = ADMINTABACCESS.BILLING_DEBTORSMANAGEMENT;
  tabData: Privilege | any[];
  tabClientID = ADMINTABACCESS.CLIENT_VIEWCLIENT;
  tabClientData: Privilege | any[];
  tabInvoiceID = ADMINTABACCESS.BILLING_INVOICE;
  tabInvoiceData: Privilege | any[];
  moveToDebtors = false;

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              private _decimalPipe: DecimalPipe, private _noCommaPipe: NoCommaPipe,
              private _sharedObjService: SharedObjService) {
  }

  get tamField(): AbstractControl {
    return this.filterForm.get('tam');
  }

  get entityIdField(): AbstractControl {
    return this.filterForm.get('billing_name');
  }

  get invoiceNoField(): AbstractControl {
    return this.filterForm.get('invoice_no');
  }

  get serviceIDField(): AbstractControl {
    return this.filterForm.get('service_id');
  }

  get fixedFeeField(): AbstractControl {
    return this.filterForm.get('is_fixed_fees');
  }

  get paymentIDField(): AbstractControl {
    return this.filterForm.get('payment_id');
  }

  get fromDateField(): AbstractControl {
    return this.filterForm.get('from_date');
  }

  get toDateField(): AbstractControl {
    return this.filterForm.get('to_date');
  }

  get sentFromField(): AbstractControl {
    return this.filterForm.get('sent_from_date');
  }

  get sentToField(): AbstractControl {
    return this.filterForm.get('sent_to_date');
  }

  get dueFromField(): AbstractControl {
    return this.filterForm.get('due_from_date');
  }

  get dueToField(): AbstractControl {
    return this.filterForm.get('due_to_date');
  }

  get createdByField(): AbstractControl {
    return this.filterForm.get('created_by');
  }

  get debtosFollowupField(): AbstractControl {
    return this.filterForm.get('debtor_followup');
  }

  ngOnInit() {
    // To Check Access Rights
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.tabClientData = this._sharedService.checkUserPrivilegesTabs(this.tabClientID);
    this.tabInvoiceData = this._sharedService.checkUserPrivilegesTabs(this.tabInvoiceID);
    this.moveToDebtors = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'move_to_debtors', 1);

    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.createAdvanceFilterForm();
    this.getDebtorsManagementList(1);
    this.getClientList();
    this.getServices();
    this.getUserList();
    this._commonCrudService.listData(AdminAPI.DEBTORS_MANAGEMENT_LIST, {'records': 'all'}).subscribe((response) => {
      const invoiceNoList = response.payload.data;
      this.invoiceNo = Array.from(new Set(invoiceNoList.map(item => item.invoice_no)));
    });
  }

  /**
   * Create Form for filters
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      invoice_no: new FormControl(null),
      billing_name: new FormControl(null),
      service_id: new FormControl(null),
      is_fixed_fees: new FormControl(null),
      payment_id: new FormControl(null),
      from_date: new FormControl(null),
      to_date: new FormControl(null),
      sent_from_date: new FormControl(null),
      sent_to_date: new FormControl(null),
      due_from_date: new FormControl(null),
      due_to_date: new FormControl(null),
      created_by: new FormControl(null),
      debtor_followup: new FormControl(null),
      tam: new FormControl(null),
    });

    this.advanceFilterForm = this._fb.group({
      invoice_no: new FormControl(null),
      billing_name: new FormControl(null),
      service_id: new FormControl(null),
      is_fixed_fees: new FormControl(null),
      payment_id: new FormControl(null),
      from_date: new FormControl(null),
      to_date: new FormControl(null),
      sent_from_date: new FormControl(null),
      sent_to_date: new FormControl(null),
      due_from_date: new FormControl(null),
      due_to_date: new FormControl(null),
      created_by: new FormControl(null),
      debtor_followup: new FormControl(null),
      tam: new FormControl(null),
    });
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all', 'discountinue_stage': '2'}, {}).subscribe((response) => {
      this.clientList = response;
    });
  }

  /**
   * Get Service List
   */
  getServices() {
    this._sharedObjService.getServices({}, {'compare': {'equal': {'parent_id': 0}}}).subscribe((response) => {
      if (response) {
        this.serviceList = response;
      }
    });
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.userList = response;
      const tam = response.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 9 : 0);
      this.tamList = tam;
    });
  }

  /**
   * Get Debtors Management List
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getDebtorsManagementList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.DEBTORS_MANAGEMENT_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
      this.handleDebstorsManagementResponse(response);
    });
  }

  /**
   * Handle Debtors List Response
   * @param response
   */
  handleDebstorsManagementResponse(response: any) {
    this.debtorsManagement = response.payload.data;
    const entity_id_list = [];
    this.totalAmount = 0;
    this.debtorsManagement.map(item => {
      const itemData = entity_id_list.indexOf(item.invoice_no);
      if (itemData >= 0) {
        item['is_button_show'] = 0;
        // item['outstanding_amount'] = '0.00';
      } else {
        item['is_button_show'] = 1;
      }
      this.totalAmount += (+item.outstanding_amount);
      entity_id_list.push(item.invoice_no);
    });
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
    this.totalAmount = this._noCommaPipe.transform(this._decimalPipe.transform(this.totalAmount, '1.2-2'));
    // console.log(this.debtorsManagement);
  }

  /**
   * Toogle Filter
   */
  onOpenFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  /**
   * Close filter
   */
  onCloseFilter() {
    this.isOpenFilterView = false;
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getDebtorsManagementList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    if (this.tamField.value) {
      params['technical_account_manager'] = this.tamField.value;
    }
    this._commonCrudService.downloadExcelData(AdminAPI.DEBTORS_MANAGEMENT_LIST_EXPORT_EXCEL, params, this.getSearchParam(), 'Debtors Management  ', 0).subscribe(response => {
    });
  }

  /**
   * On Click of comment this dialog will open
   * @param debtors
   */
  onAddCommentDialog(debtors: DebtorsManagement) {
    const dialogRef = this.dialog.open(AddCommentsDialogComponent, {
      panelClass: 'lg-dialog--container',
      data: {
        debtorsData: debtors
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  /**
   * On Redirect of Debtors Email Template
   * @param debtors
   */
  onDMEmailTemplate(debtors: DebtorsManagement) {
    this._sharedService.setClientData(GLOBALDATAKEYS.DEBTORS_MANAGEMENT, debtors);
    window.open(AdminRoutes.DEBTORS_MANAGEMENT_EMAIL_TEMPLATE, '_blank');
  }

  /**
   * On Click of Related Entity Separate Invoice Dialog
   */
  onSeparateInvoiceDialog(debtors: DebtorsManagement) {
    const dialogRef = this.dialog.open(SeparateInvoiceDialogComponent, {
      panelClass: 'lg-dialog--container',
      data: {
        debtorsData: debtors
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilterView = false;
    }
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'invoice_no' || elementName === 'created_by' || elementName === 'service_id' || elementName === 'is_fixed_fees' || elementName === 'payment_id' || elementName === 'debtor_followup') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'billing_name') {
      delete this.likeJSON[elementName];
    } else if (elementName === 'from_date') {
      this.PeriodFromValue = null;
    } else if (elementName === 'to_date') {
      this.PeriodToValue = null;
    } else if (elementName === 'sent_from_date') {
      this.SentFromValue = '';
      this.SentToValue = '';
    } else if (elementName === 'sent_to_date') {
      this.SentToValue = '';
      this.SentFromValue = '';
    } else if (elementName === 'due_from_date') {
      this.DueFromValue = null;
    } else if (elementName === 'due_to_date') {
      this.DueToValue = null;
    }
    this.getDebtorsManagementList(1, this.sortBy, this.sortOrder);
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.likeJSON = {};
    this.equalJSON = {};
    this.inJSON = {};
    this.PeriodFromValue = null;
    this.PeriodToValue = null;
    this.SentFromValue = null;
    this.SentToValue = null;
    this.DueFromValue = null;
    this.DueToValue = null;
    this.isOpenFilterView = false;
    this.getDebtorsManagementList(1);
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
          'billing_name': form.value['billing_name'],
          'service_id': form.value['service_id'],
          'is_fixed_fees': form.value['is_fixed_fees'],
          'payment_id': form.value['payment_id'],
          'from_date': form.value['from_date'],
          'to_date': form.value['to_date'],
          'sent_from_date': form.value['sent_from_date'],
          'sent_to_date': form.value['sent_to_date'],
          'due_from_date': form.value['due_from_date'],
          'due_to_date': form.value['due_to_date'],
          'created_by': form.value['created_by'],
          'debtor_followup': form.value['debtor_followup'],
          'tam': form.value['tam'],
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
    // For Entity ID
    if (form.valid && (form.value !== {})) {
      if (form.value['from_date'] !== '' && form.value['from_date']) {
        this.PeriodFromValue = form.value['from_date'];
        delete form.value['from_date'];
      }

      if (form.value['tam'] !== '' && form.value['tam']) {
        delete form.value['tam'];
      }

      if (form.value['to_date'] !== '' && form.value['to_date']) {
        this.PeriodToValue = form.value['to_date'];
        delete form.value['to_date'];
      }

      if (form.value['sent_from_date'] !== '' && form.value['sent_from_date']) {
        this.SentFromValue = form.value['sent_from_date'];
        delete form.value['sent_from_date'];
      }

      if (form.value['sent_to_date'] !== '' && form.value['sent_to_date']) {
        this.SentToValue = form.value['sent_to_date'];
        delete form.value['sent_to_date'];
      }

      if (form.value['due_from_date'] !== '' && form.value['due_from_date']) {
        this.DueFromValue = form.value['due_from_date'];
        delete form.value['due_from_date'];
      }

      if (form.value['due_to_date'] !== '' && form.value['due_to_date']) {
        this.DueToValue = form.value['due_to_date'];
        delete form.value['due_to_date'];
      }

      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'invoice_no' || key === 'created_by' || key === 'service_id' || key === 'is_fixed_fees' || key === 'payment_id' || key === 'debtor_followup') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'billing_name') {
            this.likeJSON[key] = encodeURIComponent(form.value[key]);
          }
        }
      }
      this.isOpenFilterView = false;
      this.getDebtorsManagementList(1);
    }
  }

  /**
   * get function for returning pageNumber and page size at time of listing api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{}}
   */
  getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    const params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    if (sortKey) {
      params['sortBy'] = sortKey;
    }
    if (sortOrder) {
      params['sortOrder'] = sortOrder;
    }
    if (this.tamField.value) {
      params['technical_account_manager'] = this.tamField.value;
    }
    return params;
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getDebtorsManagementList(1, sortKey, sortVal);
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};

    if (this.PeriodFromValue || this.SentFromValue || this.DueFromValue) {
      filter['greaterthanequal'] = {};
    }
    if (this.PeriodToValue || this.SentToValue || this.DueToValue) {
      filter['lessthanequal'] = {};
    }

    if (this.PeriodFromValue) {
      filter['greaterthanequal']['from_period'] = moment(this.PeriodFromValue).format('YYYY-MM-DD');
    }

    if (this.PeriodToValue) {
      filter['lessthanequal']['to_period'] = moment(this.PeriodToValue).format('YYYY-MM-DD');
    }

    if (this.SentFromValue) {
      filter['lessthanequal']['send_date'] = moment(this.SentFromValue).format('YYYY-MM-DD');
    }

    if (this.SentToValue) {
      filter['greaterthanequal']['send_date'] = moment(this.SentToValue).format('YYYY-MM-DD');
    }

    if (this.DueFromValue) {
      filter['greaterthanequal']['due_date'] = moment(this.DueFromValue).format('YYYY-MM-DD');
    }

    if (this.DueToValue) {
      filter['lessthanequal']['due_date'] = moment(this.DueToValue).format('YYYY-MM-DD');
    }

    // check for the object wheather its empty or not
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
   * Display Get Payment Type
   * @param {number} paymentType
   * @returns {string}
   */
  getPaymentType(paymentType: number): string {
    const val = this.paymentList.filter(elem => elem.key === paymentType);
    return (val.length) ? val[0].label : '';
  }

  /**
   * Run CRON Move to Update Debtors
   */
  runCronToUpdateDebtors() {
    this._commonCrudService.getData(AdminAPI.INVOICE_MOVE_TO_PAID, 0).subscribe(Response => {
    });
  }

  /**
   * Invoice redirection in manage email page for send to client
   */
  invoiceSendToClientPreview(invoice_id: number) {
    if (invoice_id > 0) {
      this._commonCrudService.getData(AdminAPI.INVOICE_SHOW, invoice_id).subscribe(Response => {
        const invoiceData = Response.payload.data;
        if (invoiceData) {
          this._sharedService.setInvoiceData(invoiceData);
          window.open(AdminRoutes.INVOICE_TEMPLATE_PREVIEW, '_blank');
        }
      });
    }
  }

  /**
   * On update client page redirect
   * @param clientData
   */
  onUpdateClient(entity_id: number) {
    if (entity_id > 0) {
      this._commonCrudService.getData(AdminAPI.CLIENT_BASIC, entity_id, {'tab': 1}).subscribe(Response => {
        const clientData = Response.payload.data;
        if (clientData) {
          this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT, clientData);
          window.open(AdminRoutes.UPDATE_CLIENT, '_blank');
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
}
