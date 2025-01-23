import {Component, EventEmitter, HostListener, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationConstantMessage} from '../../../../../../../../utility/validation';
import {Router} from '@angular/router';
import {BASE} from '../../../../../../../../utility/constants/base-constants';
import {MAT_DIALOG_DATA, MatDialogRef, PageEvent} from '@angular/material';
import {Bank} from '../bank.model';
import {CommonCrudService} from '../../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../../utility/constants/api';
import {ADMINTABACCESS} from '../../../../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../../../../utility/shared-model/admin-user.model';
import {SharedService} from '../../../../../../../../utility/shared-service/shared.service';
import {BaseComponent} from '../../../../../../../../utility/components/base/base.component';

@Component({
  selector: 'app-add-more-bank-dialog',
  templateUrl: './add-more-bank-dialog.component.html'
})
export class AddMoreBankDialogComponent extends BaseComponent implements OnInit {

  // Angular Variables
  @ViewChild('addMoreBankForm') addMoreBankForm;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  bankList: Bank[] = [];
  bankObject: Bank[] = [];

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

  // Form Group variables
  addBankForm: FormGroup;

  // State variables
  isBankUpdate = false;
  tabBankID = ADMINTABACCESS.CLIENT_BANK;
  tabDataBank: Privilege | any[];

  constructor(private _fb: FormBuilder, private _router: Router, private _sharedService: SharedService, private _commonCrudService: CommonCrudService, public dialogRef: MatDialogRef<AddMoreBankDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    super();
  }

  ngOnInit() {
    this.tabDataBank = this._sharedService.checkUserPrivilegesTabs(this.tabBankID);
    this.createBankForm();
    this.getBankList(1);
  }

  /**
   * Bank Information listing API
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getBankList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.BANK_LIST, this.getQueryParams(pageNumber, key, val)).subscribe(Response => {
      this.handleBankResponse(Response);
    });
  }

  /**
   * Handle Bank Information Response
   * @param response
   */
  handleBankResponse(response: any) {
    this.bankList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Active & Inactive Bank from listing
   * @param {boolean} action
   * @param {Bank} bankObject
   */
  activeInactiveBank(action: boolean, bankObject: Bank) {
    const params = {'is_active': action ? 1 : 0};
    this._commonCrudService.updateDataWithPut(AdminAPI.BANK_LIST, bankObject.id, params).subscribe(response => {
      this.bankList.map(item => {
        if (item.id === bankObject.id) {
          item.is_active = item.is_active ? 0 : 1;
        }
      });
    });
  }

  /**
   * Generate Bank Add form
   */
  createBankForm() {
    this.addBankForm = this._fb.group({
      bank_name: new FormControl('', <any>Validators.required)
    });
  }

  /**
   * On Add or Update bank
   * @param formParams
   * @param {boolean} isValid
   * @param bankObject
   */
  onBankSubmit(formParams: any, isValid: boolean, bankObject: any) {
    if (isValid) {
      formParams['is_active'] = 1;
      this._commonCrudService.addData(AdminAPI.BANK_LIST, formParams).subscribe(Response => {
        this.getBankList(1);
        this.createBankForm();
        this.addMoreBankForm.resetForm();
      });
    }
  }

  /**
   * Bank name edit from grid
   * @param bank_name
   * @param bankObject
   */
  onBankNameUpdate(bank_name, bankObject: any) {
    const params = {'bank_name': bank_name, 'method': '_put'};
    this._commonCrudService.updateData(AdminAPI.BANK_LIST, bankObject.id, params).subscribe(Response => {
      this.bankList.map(item => {
        if (item.id === bankObject.id) {
          item.bank_name = bank_name;
        }
      });
    });
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getBankList(event.pageIndex + 1);
  }

  /**
   * Close modal method
   */
  onClose(): void {
    this.dialogRef.close();
  }

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onClose();
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
    this.getBankList(1, sortKey, sortVal);
  }
}
