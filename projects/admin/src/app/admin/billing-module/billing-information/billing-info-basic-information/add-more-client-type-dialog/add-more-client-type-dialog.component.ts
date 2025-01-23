import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, PageEvent} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonFunctions} from '../../../../../../utility/common-functions';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {BASE} from '../../../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {ConfirmationDialogComponent} from '../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {Recurring} from '../../../invoices/recurring/recurring.model';

@Component({
  selector: 'app-add-more-client-type-dialog',
  templateUrl: './add-more-client-type-dialog.component.html'
})
export class AddMoreClientTypeDialogComponent extends BaseComponent implements OnInit {

  @ViewChild('addMoreClientForm') addMoreClientForm;
  // Data Variables
  clientType: any[] = [];
  slideActiveInactive = [];
  isClientUpdate = false;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  addClientTypeForm: FormGroup;

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
  filterForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddMoreClientTypeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.clientType = (this.data.clientBelongsToData) ? this.data.clientBelongsToData : [];
    this.createClientTypeForm();
    this.createAdvanceFilterForm();
    this.getClientBelongsToList(1, 'id', 'desc');
  }

  /**
   *
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getClientBelongsToList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.CLIENT_BELONGSTO, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
      this.handleClientBelongsToResponse(response);
    });
  }

  /**
   * Handle Client Belongs To Respone
   * @param response
   */
  handleClientBelongsToResponse(response: any) {
    this.clientType = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Create Change InOut
   */
  createClientTypeForm() {
    this.addClientTypeForm = this._fb.group({
      name: new FormControl('', <any>Validators.required),
      id: new FormControl(''),
    });
  }

  /**
   * Create Change InOut
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      name: new FormControl(null)
    });
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getClientBelongsToList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  onClose(): void {
    this.dialogRef.close();
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
    this.getClientBelongsToList(1, sortKey, sortVal);
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
    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !CommonFunctions.isEmpty(filter)) {
      params['compare'] = filter;
    }
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }
    return params;
  }

  /**
   *  Toggle confirmation Dialog
   */
  openToggleConfirmationDialog(event: any, clientTypeData: any, id: number) {
    const status = event.checked ? 'Inactive' : 'Active';
    const statusNagetive = !event.checked ? 'Inactive' : 'Active';
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Do you want change status from ' + status + ' to ' + statusNagetive
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this.activeInactiveClientBelongsTo(event.checked, clientTypeData);
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
   * On Client Type Edit Data
   * @param clientTypeData
   */
  onEditClientTypeData(clientTypeData: any) {
    if (clientTypeData) {
      this.addClientTypeForm.get('name').setValue(clientTypeData['name']);
      this.addClientTypeForm.get('id').setValue(clientTypeData['id']);
    }
  }

  /**
   * Active Inactive Client Belongs To Data
   * @param {boolean} action
   * @param {Recurring} recurringData
   */
  activeInactiveClientBelongsTo(action: boolean, clientType: any[]) {
    const params = {'is_active': action ? 1 : 0};
    this._commonCrudService.updateDataWithPut(AdminAPI.CLIENT_BELONGSTO_UPDATE, clientType['id'], params).subscribe(response => {
      this.clientType.map(item => {
        if (item['id'] === clientType['id']) {
          item['is_active'] = item['is_active'] ? 0 : 1;
        }
      });
    });
  }

  /**
   * On Add or Update bank
   * @param formParams
   * @param {boolean} isValid
   * @param bankObject
   */
  onClientTypeSubmit(form: FormGroup) {
    if (form.valid) {
      form.value['is_active'] = 1;
      if (form.value['id'] > 0) {
        this._commonCrudService.updateDataWithPut(AdminAPI.CLIENT_BELONGSTO_UPDATE, form.value['id'], form.value).subscribe(Response => {
          this.getClientBelongsToList(1);
          this.createClientTypeForm();
          this.addMoreClientForm.resetForm();
        });
      } else {
        delete(form.value['id']);
        this._commonCrudService.addData(AdminAPI.CLIENT_BELONGSTO_ADD, form.value).subscribe(Response => {
          this.getClientBelongsToList(1);
          this.createClientTypeForm();
          this.addMoreClientForm.resetForm();
        });
      }
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

          }
        }
      }
    }
    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'name') {
            this.likeJSON['name'] = form.value[key];
          }
        }
      }
      this.getClientBelongsToList(1, 'id', 'desc');
    }
  }
}
