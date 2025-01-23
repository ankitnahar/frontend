import {Component, HostListener, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {MatDialog, PageEvent} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ConfirmationDialogComponent} from '../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {ClientViewDialogComponent} from '../client-view-dialog/client-view-dialog.component';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {BASE, GLOBALDATAKEYS, recurringRepetition} from '../../../../../../utility/constants/base-constants';
import {Recurring} from '../recurring.model';
import {Services} from '../../../../../../utility/shared-model/services.model';
import {Frequency} from '../../../../../../utility/shared-model/frequency.model';
import * as moment from 'moment';
import {Clients} from '../../../../client-module/view-client/view-client.model';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {CommonHistoryDialogComponent} from '../../../../../../utility/components/common-history-dialog/common-history-dialog.component';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {ADMINTABACCESS} from '../../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../../utility/shared-model/admin-user.model';

@Component({
  selector: 'app-manage-recurring',
  templateUrl: './manage-recurring.component.html',
  styleUrls: ['./manage-recurring.component.scss'],
  providers: [CommonCrudService]
})
export class ManageRecurringComponent implements OnInit {
  // Data Variables
  recurringList: Recurring[] = [];
  serviceList: Services[] = [];
  frequencyList: Frequency[] = [];
  recurringRepetitionData = recurringRepetition;
  slideActiveInactive = [];

  clientList: Clients[] = [];
  // Form Variables
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  equalJSON = {};
  likeJSON = {};
  findInSetJSON = {};
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

  // MatPaginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilterView = false;
  isOpenHistoryDialog = false;
  tabID = ADMINTABACCESS.BILLING_RECURRING;
  tabData: Privilege | any[];

  constructor(private _fb: FormBuilder, public dialog: MatDialog,
              public _router: Router,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService) {
  }

  // get form control
  get recurringName(): AbstractControl {
    return this.filterForm.get('recurring_name');
  }

  get entityId(): AbstractControl {
    return this.filterForm.get('entity_id');
  }

  get serviceId(): AbstractControl {
    return this.filterForm.get('service_id');
  }

  get fixedFee(): AbstractControl {
    return this.filterForm.get('fixed_fee');
  }

  get frequencyId(): AbstractControl {
    return this.filterForm.get('frequency_id');
  }

  get repetitionType(): AbstractControl {
    return this.filterForm.get('repetition_type');
  }

  get invoiceDate(): AbstractControl {
    return this.filterForm.get('invoice_date');
  }

  get isActive(): AbstractControl {
    return this.filterForm.get('is_active');
  }

  ngOnInit() {
    // To Check Access Rights
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);

    this.createAdvanceFilterForm();
    // this.getRecurringList(1, 'id', 'desc');
    this.getClientList();
    this.getServices();
    this.getFrequency();
    this.setAdvanceFilter(this.filterForm);
  }

  /**
   * Get Client List
   */
  getClientList() {
    // this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
    //   this.clientList = response;
    // });
    this._commonCrudService.listData(AdminAPI.BILLING_BASIC, {'records': 'all'}, {'compare': {'equal': {'parent_id': 0}}}).subscribe(response => {
      this.clientList = response.payload.data;
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
   * Create Advance Filter Form
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      recurring_name: new FormControl(''),
      entity_id: new FormControl(null),
      service_id: new FormControl(''),
      fixed_fee: new FormControl(''),
      frequency_id: new FormControl(''),
      repetition_type: new FormControl(''),
      invoice_date: new FormControl(new Date()),
      is_active: new FormControl('1')
    });

    this.advanceFilterForm = this._fb.group({
      recurring_name: new FormControl(''),
      entity_id: new FormControl(null),
      service_id: new FormControl(''),
      fixed_fee: new FormControl(''),
      frequency_id: new FormControl(''),
      repetition_type: new FormControl(''),
      invoice_date: new FormControl(new Date()),
      is_active: new FormControl('1')
    });
  }

  /**
   * Initialization Methods
   */
  getRecurringList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.INVOICE_RECURRING_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
      if (response) {
        this.recurringList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
      }
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
   * Active Inactive Recurring Data
   * @param {boolean} action
   * @param {Recurring} recurringData
   */
  activeInactiveRecurring(action: boolean, recurringData: Recurring) {
    const params = {'is_active': action ? 1 : 0, '_method': 'put'};
    this._commonCrudService.updateData(AdminAPI.INVOICE_RECURRING_ACTIVE, recurringData.id, params).subscribe(response => {
      this.recurringList.map(item => {
        if (item.id === recurringData.id) {
          item.is_active = item.is_active ? 0 : 1;
        }
      });
    });
  }

  /**
   * Display Repetiton Type
   * @param {number} recurringRepetition
   * @returns {string}
   */
  getRecurringRepetitonData(recurringID: number): string {
    const val = this.recurringRepetitionData.filter(elem => elem.key === recurringID);
    return (val.length) ? val[0].showInGrid : '';
  }

  /**
   *  Toggle confirmation Dialog
   */
  openToggleConfirmationDialog(event, recurringData, id) {
    const status = event.checked ? 'Inactive' : 'Active';
    const statusNagetive = !event.checked ? 'Inactive' : 'Active';
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Do you want change status from ' + status + ' to ' + statusNagetive
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this.activeInactiveRecurring(event.checked, recurringData);
      } else {
        if (this.slideActiveInactive[id]) {
          this.slideActiveInactive[id] = false;
        } else {
          this.slideActiveInactive[id] = true;
        }
      }
    });
  }

  /**
   * Toogle Filter
   */
  onOpenFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  onCloseFilter() {
    this.isOpenFilterView = false;
  }

  deleteMsg(index) {
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getRecurringList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Clear tag method
   */
  onClearTags() {

  }

  /**
   * On invoice redirection
   */
  onInvoice() {
    this._router.navigate(['/' + AdminRoutes.INVOICES_DASHBOARD]);
  }

  openAddRecurring(recurring: Recurring) {
    this._sharedService.setClientData(GLOBALDATAKEYS.RECURRING, recurring);
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.ADD_RECURRING, '_blank');
    });
  }

  openRecurringView(recurring: Recurring) {
    if (recurring) {
      this._sharedService.setClientData(GLOBALDATAKEYS.RECURRING, recurring);
      this._router.navigate([]).then(result => {
        window.open('/' + AdminRoutes.VIEW_RECURRING, '_blank');
      });
    }
  }

  onOpenClientList(recurring: any): void {
    const dialogRef = this.dialog.open(ClientViewDialogComponent, {
      panelClass: 'view-client-dialog-container',
      data: {
        content: recurring.entity_name
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  /**
   * View Recurring Information History
   * @param recurringData
   */
  viewRecurringInfoHistory(recurringData: Recurring): void {
    const value = {
      url: AdminAPI.INVOICE_RECURRING_HISTORY + '/' + recurringData.id,
    };
    const recurringDataAll = this._sharedService.setHistoryURL(value);
    const dialogRef = this.dialog.open(CommonHistoryDialogComponent, {
      panelClass: 'view-client-dialog-container',
      data: {
        'recurring': recurringDataAll,
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  /**
   viewRecurringInfoHistory (recurringData: Recurring) {
    const value = {
      url: AdminAPI.INVOICE_RECURRING_HISTORY + '/' + recurringData.id,
    };
    this._sharedService.setHistoryURL(value);
    this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
  } */
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
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName?: string) {
    this.filterForm.get(elementName).setValue('');
    this.advanceFilterForm.get(elementName).setValue('');
    if (elementName === 'service_id' || elementName === 'fixed_fee' || elementName === 'frequency_id' || elementName === 'repetition_type' || elementName === 'invoice_date' || elementName === 'is_active') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'recurring_name') {
      delete this.likeJSON[elementName];
    } else if (elementName === 'entity_id') {
      delete this.findInSetJSON[elementName];
    }
    this.getRecurringList(1, this.sortBy, this.sortOrder);
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.filterForm.patchValue({'is_active': null});
    this.filterForm.patchValue({'invoice_date': null});
    this.advanceFilterForm.patchValue({'is_active': null});
    this.advanceFilterForm.patchValue({'invoice_date': null});
    this.likeJSON = {};
    this.equalJSON = {};
    this.inJSON = {};
    this.findInSetJSON = {};
    this.isOpenFilterView = false;
    this.getRecurringList(1, 'id', 'desc');
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
          'recurring_name': form.value['recurring_name'],
          'entity_id': form.value['entity_id'],
          'service_id': form.value['service_id'],
          'fixed_fee': form.value['fixed_fee'],
          'frequency_id': form.value['frequency_id'],
          'repetition_type': form.value['repetition_type'],
          'invoice_date': form.value['invoice_date'],
          'is_active': form.value['is_active'],
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
    this.findInSetJSON = {};
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

    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'entity_id' || key === 'invoice_date' || key === 'repetition_type' || key === 'frequency_id' || key === 'fixed_fee' || key === 'service_id' || key === 'is_active') {
            if (key === 'entity_id') {
              this.findInSetJSON[key] = [form.value[key]];
            } else if (key === 'invoice_date') {
              this.equalJSON[key] = moment(form.value[key]).format('YYYY-MM-DD');
            } else {
              this.equalJSON[key] = form.value[key];
            }
          } else if (key === 'recurring_name') {
            this.likeJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilterView = false;
      this.getRecurringList(1, 'id', 'desc');
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
    return params;
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getRecurringList(1, sortKey, sortVal);
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};
    // check for the object wheather its empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }
    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length) {
      params['compare'] = filter;
    }
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }

    if (Object.keys(this.findInSetJSON).length !== 0) {
      params['findinset'] = this.findInSetJSON;
    }

    return params;
  }

  /**
   *  add Recurring redirection
   */
  onAddRecurring() {
    this._router.navigate(['/' + AdminRoutes.ADD_RECURRING]);
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
