import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, PageEvent} from '@angular/material';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../../utility/validation';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {APIManager} from '../../../../../../../utility/shared-service/apimanager.service';
import {BankCcPaypalAccount, BASE, GLOBALDATAKEYS, yesNoNa} from '../../../../../../../utility/constants/base-constants';
import {Router} from '@angular/router';
import {BankInformation} from './bank-information.model';
import {Bank, BankComments} from './bank.model';
import {BankAccount} from './bank-account.model';
import {Clients} from '../../../view-client.model';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {CommonHistoryDialogComponent} from '../../../../../../../utility/components/common-history-dialog/common-history-dialog.component';
import {AddMoreBankDialogComponent} from './add-more-bank-dialog/add-more-bank-dialog.component';
import {AddMoreAccountTypeDialogComponent} from './add-more-account-type-dialog/add-more-account-type-dialog.component';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {ADMINTABACCESS} from '../../../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../../../utility/shared-model/admin-user.model';

export enum Views {
  ADD_MORE_BANK, ADD_MORE_BANK_ACCOUNT_TYPE
}

@Component({
  selector: 'app-bank-information',
  templateUrl: './bank-information.component.html',
  styleUrls: ['./bank-information.component.scss'],
})
export class BankInformationComponent extends BaseComponent implements OnInit {

  @ViewChild('addEditBankForm') addEditBankForm;

  panelOpenState: boolean = true;
  clientData: Clients;
  isOpenHistoryDialog = false;

  validationMsg = new ValidationConstantMessage();

  // Data Variables
  bankInformationList: BankInformation[] = [];
  bankInformationObject: BankInformation[] = [];
  bankListFilter: Bank[] = [];
  bankTypeListFilter: BankAccount[] = [];
  bankComments: BankComments[] = [];
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
  tabID = ADMINTABACCESS.CLIENT_BANKINFORMATION;
  tabData: Privilege | any[];
  tabBankID = ADMINTABACCESS.CLIENT_BANK;
  tabDataBank: Privilege | any[];
  tabTypeID = ADMINTABACCESS.CLIENT_TYPEOFACCOUNT;
  tabDataType: Privilege | any[];

  constructor(private _fb: FormBuilder, private _apiManager: APIManager, private _router: Router, private _sharedService: SharedService, public dialog: MatDialog, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.tabDataBank = this._sharedService.checkUserPrivilegesTabs(this.tabBankID);
    this.tabDataType = this._sharedService.checkUserPrivilegesTabs(this.tabTypeID);
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    this.createAddBankInfoForm([]);
    this.getBankInformationList(1);
    this.getBankListFilter();
    this.getBankTypeListFilter();
    this.getBankCommentList();
  }

  /**
   * Bank Comment listing API
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getBankCommentList() {
    this._commonCrudService.listData(AdminAPI.BEFREE_COMMENTS, {'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe(response => {
      this.bankComments = response.payload.data;
    });
  }

  /**
   * Get Bank filter listing API
   */
  getBankListFilter() {
    this._commonCrudService.listData(AdminAPI.BANK_LIST, {'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe(Response => {
      this.handleBankListFilterResponse(Response);
    });
  }

  /**
   * Get Bank type filter listing API
   */
  getBankTypeListFilter() {
    this._commonCrudService.listData(AdminAPI.BANK_TYPE_LIST, {'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe(Response => {
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

  /**
   * Add or Edit Bank Information form
   * @param bankInformationData
   */
  createAddBankInfoForm(bankInformationData: any) {
    // Declaration to check object in bank info submit is add or edit
    this.bankInformationObject = bankInformationData;
    this.addBankInfoForm = this._fb.group({
      bank_id: new FormControl((Object.keys(bankInformationData).length > 0) ? bankInformationData.bank_id.id > 0 ? bankInformationData.bank_id.id : null : null, <any>Validators.required),
      type_id: new FormControl((Object.keys(bankInformationData).length > 0) ? bankInformationData.type_id.id > 0 ? bankInformationData.type_id.id : null : null, <any>Validators.required),
      is_bank_or_credit_card: new FormControl(bankInformationData.is_bank_or_credit_card > 0 ? bankInformationData.is_bank_or_credit_card : ''),
      bsb_notes: new FormControl(bankInformationData.bsb_notes !== '' ? bankInformationData.bsb_notes : ''),
      account_no: new FormControl(bankInformationData.account_no !== '' ? bankInformationData.account_no : '', [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      bank_link: new FormControl(bankInformationData.bank_link >= 0 ? bankInformationData.bank_link : ''),
      viewing_rights: new FormControl(bankInformationData.viewing_rights >= 0 ? bankInformationData.viewing_rights : '', <any>Validators.required),
      follow_up_notes: new FormControl(bankInformationData.follow_up_notes !== '' ? bankInformationData.follow_up_notes : ''),
      auto_feed_up: new FormControl(bankInformationData.auto_feed_up >= 0 ? bankInformationData.auto_feed_up : '', <any>Validators.required),
      notes: new FormControl(bankInformationData.notes !== '' ? bankInformationData.notes : ''),
    });
  }

  /**
   * Add & Edit Bank information submit function
   * @param formParams
   * @param {boolean} isValid
   * @param bankInformationObject
   */
  onBankInfoSubmit(formParams: any, isValid: boolean, bankInformationObject: any) {
    if (isValid) {
      if (Object.keys(bankInformationObject).length > 0) {
        this._commonCrudService.updateDataWithPut(AdminAPI.BANK_INFORMATION, bankInformationObject.id, formParams).subscribe(Response => {
          this.getBankInformationList(1);
          this.addEditBankForm.resetForm();
          this.panelOpenState = false;
          this.bankInformationObject = [];
        });
      } else {
        formParams['is_active'] = 1;
        this._commonCrudService.addData(AdminAPI.BANK_INFORMATION + '/' + this.clientData.id, formParams).subscribe(Response => {
          this.getBankInformationList(1);
          this.addEditBankForm.resetForm();
          this.panelOpenState = false;
          this.bankInformationObject = [];
        });
      }
    }
  }

  // Events
  /**
   * Open Bank & Bank Account Type Popup
   * @param dialogName
   */
  onAddBank() {
    let dialogRef = this.dialog.open(AddMoreBankDialogComponent, {
      panelClass: 'add-form-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBankListFilter();
    });
  }

  onAddAccountType() {
    let dialogRef = this.dialog.open(AddMoreAccountTypeDialogComponent, {
      panelClass: 'add-form-dialog-container',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getBankTypeListFilter();
    });
  }

  /* onOpenModal(dialogName) {

     switch (dialogName) {
       case 'add-bank':
         this.dialog.open(this.enumView.ADD_MORE_BANK, dialogConfig);
         break;
       case 'add-bank-account-type':
         this.activeView = this.enumView.ADD_MORE_BANK_ACCOUNT_TYPE;
         break;
     }
   }*/

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
      //this.activeView = null;
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
   * Active & Inactive Bank Information from listing
   * @param {boolean} action
   * @param {BankInformation} bankInformationData
   */
  activeInactiveBankInformation(action: boolean, bankInformationData: BankInformation) {
    const params = {'is_active': action ? 1 : 0};
    this._commonCrudService.updateDataWithPut(AdminAPI.BANK_INFORMATION, bankInformationData.id, params).subscribe(response => {
      this.bankInformationList.map(item => {
        if (item.id === bankInformationData.id) {
          item.is_active = item.is_active ? 0 : 1;
        }
      });
    });
  }

  /**
   * Edit Bank Information from listing
   * @param event
   * @param {BankInformation} bankInformationData
   */
  editBankInformation(event, bankInformationData: BankInformation) {
    this.onScroll();
    this.stopToCallDetails(event);
    this.createAddBankInfoForm(bankInformationData);
    this.panelOpenState = true;
  }

  /**
   * View Bank Information History
   * @param event
   * @param {BankInformation} bankInformationData
   */
  /**
   viewBankInformationHistory (event, bankInformationData: BankInformation) {
    const value = {
      url: AdminAPI.BANK_INFORMATION_HISTORY + '/' + bankInformationData.id,
    };
    this._sharedService.setHistoryURL(value);
    this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
  } */

  viewBankInformationHistory(event, bankInformationData: BankInformation): void {
    const value = {
      url: AdminAPI.BANK_INFORMATION_HISTORY + '/' + bankInformationData.id,
    };
    const bankinforAll = this._sharedService.setHistoryURL(value);
    const dialogRef = this.dialog.open(CommonHistoryDialogComponent, {
      panelClass: 'view-client-dialog-container',
      data: {
        'bankInfo': bankinforAll,
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  /**
   * Display Bank Link / View Right / Auto Feed
   * @param {number} bankLinkType
   * @returns {string}
   */
  getBankLinkDataType(bankLinkType: number): string {
    // console.log(bankLinkType);
    const val = this.bankViewFeed.filter(elem => elem.key === bankLinkType);
    return (val.length) ? val[0].label : '';
  }

  /**
   * Display Bank Account Type
   * @param {number} bankAccountType
   * @returns {string}
   */
  getBankAccountDataType(bankAccountType: number): string {
    const val = this.bankAccounts.filter(elem => elem.key === bankAccountType);
    return (val.length) ? val[0].label : '';
  }

  /**
   * close And Reset from Bank Information Add / Edit Form
   * @param event
   */
  closeAndReset(event) {
    this.panelOpenState = false;
    this.createAddBankInfoForm([]);
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
