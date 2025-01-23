import {Component, EventEmitter, HostListener, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../../../../utility/validation';
import {BASE} from '../../../../../../../../utility/constants/base-constants';
import {MAT_DIALOG_DATA, MatDialogRef, PageEvent} from '@angular/material';
import {BankAccount} from '../bank-account.model';
import {Router} from '@angular/router';
import {CommonCrudService} from '../../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../../utility/constants/api';
import {ADMINTABACCESS} from '../../../../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../../../../utility/shared-model/admin-user.model';
import {SharedService} from '../../../../../../../../utility/shared-service/shared.service';

@Component({
  selector: 'app-add-more-account-type-dialog',
  templateUrl: './add-more-account-type-dialog.component.html'
})
export class AddMoreAccountTypeDialogComponent extends BaseComponent implements OnInit {

  // Angular Variables
  @ViewChild('addAccountTypeForm') addAccountTypeForm;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Angular Variables
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  accountType: BankAccount[] = [];
  accountTypeObject: BankAccount[] = [];
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
  // State variables
  isBankUpdate = false;
  // Form Group Variables
  addAccountForm: FormGroup;
  tabTypeID = ADMINTABACCESS.CLIENT_TYPEOFACCOUNT;
  tabDataType: Privilege | any[];

  constructor(private _fb: FormBuilder, private _router: Router, private _sharedService: SharedService, private _commonCrudService: CommonCrudService, public dialogRef: MatDialogRef<AddMoreAccountTypeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    super();
  }

  ngOnInit() {
    this.tabDataType = this._sharedService.checkUserPrivilegesTabs(this.tabTypeID);
    this.createAccountTypeForm();
    this.getAccountTypeList(1);
  }

  /**
   * Bank Account Type listing API
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getAccountTypeList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.BANK_TYPE_LIST, this.getQueryParams(pageNumber, key, val)).subscribe(Response => {
      this.handleAccountTypeResponse(Response);
    });
  }

  /**
   * Handle Bank Account Type Response
   * @param response
   */
  handleAccountTypeResponse(response: any) {
    this.accountType = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Active & Inactive Bank from listing
   * @param {boolean} action
   * @param {BankAccount} accountTypeObject
   */
  activeInactiveAccountType(action: boolean, accountTypeObject: BankAccount) {
    const params = {'is_active': action ? 1 : 0};
    this._commonCrudService.updateDataWithPut(AdminAPI.BANK_TYPE_LIST, accountTypeObject.id, params).subscribe(response => {
      this.accountType.map(item => {
        if (item.id === accountTypeObject.id) {
          item.is_active = item.is_active ? 0 : 1;
        }
      });
    });
  }

  /**
   * Account type name edit from grid
   * @param type_name
   * @param accountTypeObject
   */
  onAccountTypeNameUpdate(type_name, accountTypeObject: any) {
    const params = {'type_name': type_name, 'method': '_put'};
    this._commonCrudService.updateData(AdminAPI.BANK_TYPE_LIST, accountTypeObject.id, params).subscribe(Response => {
      this.accountType.map(item => {
        if (item.id === accountTypeObject.id) {
          item.type_name = type_name;
        }
      });
    });
  }

  /**
   * Create Account Type Form
   */
  createAccountTypeForm() {
    this.addAccountForm = this._fb.group({
      type_name: new FormControl('', <any>Validators.required)
    });
  }

  /**
   * On Add or Update Account Type
   * @param formParams
   * @param {boolean} isValid
   * @param accountTypeObject
   */
  onAddAccountType(formParams: any, isValid: boolean, accountTypeObject: any) {
    if (isValid) {
      formParams['is_active'] = 1;
      this._commonCrudService.addData(AdminAPI.BANK_TYPE_LIST, formParams).subscribe(Response => {
        this.getAccountTypeList(1);
        this.createAccountTypeForm();
        this.addAccountTypeForm.resetForm();
      });
    }
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getAccountTypeList(event.pageIndex + 1);
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
    this.getAccountTypeList(1, sortKey, sortVal);
  }
}
