import {Component, HostListener, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {Address} from './address.model';
import {Clients} from '../../view-client/view-client.model';
import {AdminUser, Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {ADDRESSSTATE, ADDRESSTYPE, BASE, GLOBALDATAKEYS} from '../../../../../utility/constants/base-constants';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {BehaviorSubject} from 'rxjs';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';

export enum Views {
  FILTER_VIEW_MAIN, VIEW_MODAL
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  // providers: [CommonCrudService]
})
export class AddressComponent extends BaseComponent implements OnInit {

  // Constant Variables
  enumView = Views;
  activeView: Views;

  addressList: Address[] = [];
  clientList: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  parentClientList: Clients[] = [];
  userList: AdminUser[] = [];

  addressState = ADDRESSSTATE;
  addressType = ADDRESSTYPE;

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

  // Other Variables
  isOpenFilterView = false;
  isOpenHistoryDialog = false;

  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  selectedAddressRecord: BehaviorSubject<any> = new BehaviorSubject(null);
  isViewAddress: BehaviorSubject<boolean> = new BehaviorSubject(false);
  tabID = ADMINTABACCESS.CLIENT_ADDRESS;
  tabData: Privilege | any[];

  constructor(private _router: Router, private _fb: FormBuilder, private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService, private _sharedService: SharedService) {
    super();
  }

  get parentIdField(): AbstractControl {
    return this.filterForm.get('parent_id');
  }

  get entityIdField(): AbstractControl {
    return this.filterForm.get('entity_id');
  }

  get addressTypeField(): AbstractControl {
    return this.filterForm.get('type');
  }

  get addressField(): AbstractControl {
    return this.filterForm.get('street_address');
  }

  get suburbField(): AbstractControl {
    return this.filterForm.get('suburb');
  }

  get stateField(): AbstractControl {
    return this.filterForm.get('state_id');
  }

  get postcodeField(): AbstractControl {
    return this.filterForm.get('postcode');
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getContactAddressList(1, 'id', 'desc');
    this.getClientList();
    this.createAdvanceFilterForm();
  }

  /**
   * Create Form for filters
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      parent_id: new FormControl(null),
      entity_id: new FormControl(null),
      type: new FormControl(''),
      street_address: new FormControl(''),
      suburb: new FormControl(''),
      state_id: new FormControl(''),
      postcode: new FormControl('')
    });

    this.advanceFilterForm = this._fb.group({
      parent_id: new FormControl(null),
      entity_id: new FormControl(''),
      type: new FormControl(''),
      street_address: new FormControl(''),
      suburb: new FormControl(''),
      state_id: new FormControl(''),
      postcode: new FormControl('')
    });
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = response;
      this.filteredTradingClientList = response;
      this.parentClientList = response.filter(item => item.is_parent === 1);
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
   * Get Address List
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getContactAddressList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.CONTACT_INFORMATION_ADDRESS_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(Response => {
      this.handleAddressResponse(Response);
    });
  }

  /**
   * Archive Address
   * @param id
   */
  archiveAddress(address: Address) {
    this._commonCrudService.updateData(AdminAPI.CONTACT_INFORMATION_ADDRESS_UPDATE, address.id, {'is_archived': 1}).subscribe(Response => {
      this.getContactAddressList(this.page, this.sortBy, this.sortOrder);
    });
  }

  /**
   * Handle Address List Response
   * @param response
   */
  handleAddressResponse(response: any) {
    this.addressList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Open filter method
   */
  onOpenFilter() {
    this.isOpenFilterView = true;
  }

  /**
   * Close filter method
   */
  onCloseFilter() {
    this.isOpenFilterView = false;
  }

  /**
   * Toogle Filter
   */
  onToggleFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getContactAddressList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.CONTACT_INFORMATION_ADDRESS_LIST, params, this.getSearchParam(), 'Contact Address ', 0).subscribe(response => {
    });
  }

  /**
   * Open view modal method
   * @param address
   */
  onViewAddress(address: Address) {
    this.activeView = this.enumView.VIEW_MODAL;
    this.selectedAddressRecord.next(address);
    this.isViewAddress.next(true);
  }

  /**
   * Open view modal method
   * @param dialogName
   */
  onEditAddress(address: Address) {
    this._sharedService.setClientData(GLOBALDATAKEYS.CONTACTADDRESS, address);
    this._router.navigate(['/' + AdminRoutes.ADD_ADDRESS]);
  }

  /**
   * Close modal method
   * @param event
   */
  onCloseDialog(event) {
    this.activeView = event;
  }

  /**
   * Display Address State
   * @param {number} state_id
   * @returns {string}
   */
  getAddressState(state_id: number): string {
    return this.addressState.filter(elem => elem.key === state_id)[0].label;
  }

  /**
   * Display Address Type
   * @param {number} type
   * @returns {string}
   */
  getAddressType(type: number): string {
    return this.addressType.filter(elem => elem.key === type)[0].label;
  }

  /**
   * On add address redirect
   */

  onAddAddress() {
    this._router.navigate(['/' + AdminRoutes.ADD_ADDRESS]);
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue('');
    this.advanceFilterForm.get(elementName).setValue('');
    if (elementName === 'parent_id' || elementName === 'type' || elementName === 'state_id') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'street_address' || elementName === 'suburb' || elementName === 'postcode') {
      delete this.likeJSON[elementName];
    } else if (elementName === 'entity_id') {
      delete this.inJSON[JsonElementName];
    }
    this.getContactAddressList(1, this.sortBy, this.sortOrder);
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    // this.filterForm.patchValue({'entity': []});
    this.likeJSON = {};
    this.equalJSON = {};
    this.inJSON = {};
    this.isOpenFilterView = false;
    this.getContactAddressList(1, 'id', 'desc');
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
          'parent_id': form.value['parent_id'],
          'entity_id': form.value['entity_id'],
          'type': form.value['type'],
          'street_address': form.value['street_address'],
          'suburb': form.value['suburb'],
          'state_id': form.value['state_id'],
          'postcode': form.value['postcode'],
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
    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'parent_id' || key === 'type' || key === 'state_id') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'entity_id') {
            this.inJSON[key] = form.value[key];
          } else if (key === 'street_address' || key === 'suburb' || key === 'postcode') {
            this.likeJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilterView = false;
      this.getContactAddressList(1, 'id', 'desc');
    }
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
      params ['sortBy'] = sortKey;
    }
    if (sortOrder) {
      params ['sortOrder'] = sortOrder;
    }
    return params;
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getContactAddressList(1, sortKey, sortVal);
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

  /**
   * On Change Parent Entity
   * @param event
   */
  onChangeParentEntity(event: any) {
    this.clientList = this.filteredTradingClientList;
    if (event && event.id > 0) {
      this.clientList = this.filteredTradingClientList.filter(item => item["parent_id"] === event.id);
    }
  }
}
