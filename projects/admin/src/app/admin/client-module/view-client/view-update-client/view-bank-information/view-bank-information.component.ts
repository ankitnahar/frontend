import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {PageEvent} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {APIManager} from '../../../../../../utility/shared-service/apimanager.service';
import {BankCcPaypalAccount, BASE, GLOBALDATAKEYS, yesNoNa} from '../../../../../../utility/constants/base-constants';
import {Router} from '@angular/router';
import {Clients} from '../../view-client.model';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {BankInformation} from '../../update-client/information/bank-information/bank-information.model';
import {BankAccount} from '../../update-client/information/bank-information/bank-account.model';
import {Bank} from '../../update-client/information/bank-information/bank.model';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';

export enum Views {
  ADD_MORE_BANK, ADD_MORE_BANK_ACCOUNT_TYPE
}


@Component({
  selector: 'app-view-bank-information',
  templateUrl: './view-bank-information.component.html',
  styleUrls: ['./view-bank-information.component.scss'],
})
export class ViewBankInformationComponent extends BaseComponent implements OnInit {

  @ViewChild('addEditBankForm') addEditBankForm;

  panelOpenState: boolean = false;
  clientData: Clients;
  isOpenHistoryDialog = false;

  // Constant Variables
  enumView = Views;
  activeView: Views;

  validationMsg = new ValidationConstantMessage();

  // Data Variables
  bankInformationList: BankInformation[] = [];
  bankInformationObject: BankInformation[] = [];
  bankListFilter: Bank[] = [];
  bankTypeListFilter: BankAccount[] = [];
  bankViewFeed = yesNoNa;
  bankAccounts = BankCcPaypalAccount;
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

  // Mat Paginator Output
  pageEvent: PageEvent;

  // Form Group Variables
  addBankInfoForm: FormGroup;

  // State variables
  trIndex = -1;

  constructor(private _fb: FormBuilder, private _apiManager: APIManager, private _router: Router, private _sharedService: SharedService, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    this.getBankInformationList(1);
    this.getBankListFilter();
    this.getBankTypeListFilter();
  }

  /**
   * Get Bank filter listing API
   */
  getBankListFilter() {
    this._commonCrudService.listData(AdminAPI.BANK_LIST, {'records': 'all'}).subscribe(Response => {
      this.handleBankListFilterResponse(Response);
    });
  }

  /**
   * Get Bank type filter listing API
   */
  getBankTypeListFilter() {
    this._commonCrudService.listData(AdminAPI.BANK_TYPE_LIST, {'records': 'all'}).subscribe(Response => {
      this.handleBankTypeListFilterResponse(Response);
    });
  }

  /**
   * Bank Information listing API
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getBankInformationList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.BANK_INFORMATION_LIST + '/' + this.clientData.id, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(Response => {
      this.handleBankInformationResponse(Response);
    });
  }

  /**
   * Handle Bank Information Response
   * @param response
   */
  handleBankInformationResponse(response: any) {
    this.bankInformationList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Handle Bank List Filter Response
   * @param response
   */
  handleBankListFilterResponse(response: any) {
    // assign data to array
    this.bankListFilter = response.payload.data;
  }

  /**
   * Handle Bank Type List Filter Response
   * @param response
   */
  handleBankTypeListFilterResponse(response: any) {
    // assign data to array
    this.bankTypeListFilter = response.payload.data;
  }

  // Events
  /**
   * Open Bank & Bank Account Type Popup
   * @param dialogName
   */
  onOpenModal(dialogName) {
    switch (dialogName) {
      case 'add-bank':
        this.activeView = this.enumView.ADD_MORE_BANK;
        break;
      case 'add-bank-account-type':
        this.activeView = this.enumView.ADD_MORE_BANK_ACCOUNT_TYPE;
        break;
    }
  }

  /**
   * On Close of Popup
   * Close modal method
   * @param event
   */
  onCloseDialog(event) {
    this.activeView = event;
  }

  /**
   * On Show/Click of Row details page
   * @param i
   */
  openRow(i) {
    this.trIndex = (this.trIndex !== i) ? i : -1;
  }

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.activeView = null;
    }
  }

  // Events
  /**
   * On Page Change event for grid list
   * @param event
   */
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getBankInformationList(event.pageIndex + 1);
  }

  /**
   * Display Bank Link / View Right / Auto Feed
   * @param {number} bankLinkType
   * @returns {string}
   */
  getBankLinkDataType(bankLinkType: number): string {
    // return this.bankViewFeed.filter(elem => elem.key === bankLinkType)[0].label;
    const val = this.bankViewFeed.filter(elem => elem.key === bankLinkType);
    return (val.length) ? val[0].label : '';
  }

  /**
   * Display Bank Account Type
   * @param {number} bankAccountType
   * @returns {string}
   */
  getBankAccountDataType(bankAccountType: number): string {
    // return this.bankAccounts.filter(elem => elem.key === bankAccountType)[0].label;
    const val = this.bankAccounts.filter(elem => elem.key === bankAccountType);
    return (val.length) ? val[0].label : '';
  }

  /**
   * close And Reset from Bank Information Add / Edit Form
   * @param event
   */
  closeAndReset(event) {
    this.panelOpenState = false;
  }

  /**
   * On Bank Information Click Collapse change open panel state value true or false
   * @param event
   */
  changeOpenPanelState(event) {
    if (!this.panelOpenState) {
      this.panelOpenState = true;
    } else if (this.panelOpenState) {
      this.panelOpenState = false;
    }
  }

  /**
   * Stop to expand details on Edit & Active Switch button
   * @param event
   */
  stopToCallDetails(event) {
    event.stopPropagation();
  }

  // helper
  /**
   * get function for returning pageNumber and page size at time of listing api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{}}
   */
  getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    let params = {};
    params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    sortKey ? params ['sortBy'] = sortKey : '';
    sortOrder ? params ['sortOrder'] = sortOrder : '';
    return params;
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getBankInformationList(1, sortKey, sortVal);
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
    return params;
  }
}
