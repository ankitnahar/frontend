import {Component, EventEmitter, HostListener, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef, PageEvent} from "@angular/material";
import {BaseComponent} from "../../../../../../../../utility/components/base/base.component";
import {ValidationConstantMessage} from "../../../../../../../../utility/validation";
import {OtherAccount} from "../other-information.model";
import {BASE} from "../../../../../../../../utility/constants/base-constants";
import {ADMINTABACCESS} from "../../../../../../../../utility/constants/header-constant";
import {Privilege} from "../../../../../../../../utility/shared-model/admin-user.model";
import {SharedService} from "../../../../../../../../utility/shared-service/shared.service";
import {CommonCrudService} from "../../../../../../../../utility/shared-service/common-crud.service";
import {AdminAPI} from "../../../../../../../../utility/constants/api";

@Component({
  selector: 'app-add-partocular-type-dialog',
  templateUrl: './add-partocular-type-dialog.component.html'
})
export class AddPartocularTypeDialogComponent extends BaseComponent implements OnInit {
  @ViewChild('addMoreAccountForm') addMoreAccountForm;
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Form Group Variables
  addMoreParticularForm: FormGroup;

  // Data Variables
  particularTypeList: OtherAccount[] = [];

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

  constructor(public dialogRef: MatDialogRef<AddPartocularTypeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _router: Router, private _sharedService: SharedService, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.tabDataBank = this._sharedService.checkUserPrivilegesTabs(this.tabBankID);
    this.getAccountTypeList(1);
    this.createParticularTypeForm();
  }

  /**
   * Create Account Type Form
   */
  createParticularTypeForm() {
    this.addMoreParticularForm = this._fb.group({
      account_name: new FormControl(null, <any>Validators.required)
    });
  }

  /**
   * Account Type listing API
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getAccountTypeList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.OTHER_ACCOUNT_TYPE, this.getQueryParams(pageNumber, key, val)).subscribe(Response => {
      this.handleAccountTypeResponse(Response);
    });
  }

  /**
   * Handle Account TypeResponse
   * @param response
   */
  handleAccountTypeResponse(response: any) {
    this.particularTypeList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Active & Inactive Account from listing
   * @param {boolean} action
   * @param {OtherAccount} otherAccountObject
   */
  activeInactiveAccount(action: boolean, otherAccountObject: OtherAccount) {
    const params = {'is_active': action ? 1 : 0};
    this._commonCrudService.updateDataWithPut(AdminAPI.OTHER_ACCOUNT_TYPE, otherAccountObject.id, params).subscribe(response => {
      this.particularTypeList.map(item => {
        if (item.id === otherAccountObject.id) {
          item.is_active = item.is_active ? 0 : 1;
        }
      });
    });
  }

  /**
   * Close modal method
   */
  onClose(value): void {
    this.dialogRef.close(value);
  }

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onClose(true);
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

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getAccountTypeList(event.pageIndex + 1);
  }

  /**
   * On Submit
   */
  onSubmit(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.addData(AdminAPI.OTHER_ACCOUNT_TYPE, form.value).subscribe(Response => {
        this.getAccountTypeList(1);
        this.createParticularTypeForm();
        this.addMoreAccountForm.resetForm();
      });
    }
  }
}
