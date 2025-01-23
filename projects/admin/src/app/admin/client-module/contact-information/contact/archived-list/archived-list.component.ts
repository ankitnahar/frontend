import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, PageEvent} from '@angular/material';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {Contact} from '../contact.model';
import {Clients} from '../../../view-client/view-client.model';
import {Team} from '../../../../../../utility/shared-model/designation.model';
import {BASE, CONTACTPOSITION, yesNo} from '../../../../../../utility/constants/base-constants';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {ContactViewComponent} from '../contact-view/contact-view.component';
import {ADMINTABACCESS} from '../../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../../utility/shared-model/admin-user.model';

export enum Views {
  FILTER_VIEW_ARCHIVED, HISTORY_MODAL, VIEW_MODAL
}

@Component({
  selector: 'app-archived-list',
  templateUrl: './archived-list.component.html',
  styleUrls: ['./archived-list.component.scss'],
  // providers: [CommonCrudService]
})
export class ArchivedListComponent implements OnInit {

  // Constant Variables
  enumView = Views;
  activeView: Views;

  // Data Variables
  contactList: Contact[] = [];
  clientList: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  parentClientList: Clients[] = [];
  teamList: Team[] = [];

  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  orJSON = {};

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

  selectedContactRecord: BehaviorSubject<any> = new BehaviorSubject(null);
  isViewContact: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isArchiveContact: BehaviorSubject<boolean> = new BehaviorSubject(false);

  bkChecklist = yesNo;
  contactPosition = CONTACTPOSITION;
  tabID = ADMINTABACCESS.CLIENT_CONTACT_INFO;
  tabData: Privilege | any[];

  constructor(private _router: Router, private _fb: FormBuilder, private _sharedService: SharedService, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService, public dialog: MatDialog) {
  }

  get parentTradingName(): AbstractControl {
    return this.filterForm.get('parent_id');
  }
  get entityIdTradingField(): AbstractControl {
    return this.filterForm.get('entity_id');
  }

  get firstNameField(): AbstractControl {
    return this.filterForm.get('first_name');
  }

  get contactPersonField(): AbstractControl {
    return this.filterForm.get('contact_person');
  }

  get contactPositionIdField(): AbstractControl {
    return this.filterForm.get('contact_position_id');
  }

  get emailField(): AbstractControl {
    return this.filterForm.get('email');
  }

  get mobileNoField(): AbstractControl {
    return this.filterForm.get('mobile_no');
  }

  get serviceIdField(): AbstractControl {
    return this.filterForm.get('service_id');
  }

  get isDisplayBkChecklistField(): AbstractControl {
    return this.filterForm.get('is_display_bk_checklist');
  }

  get faxNoField(): AbstractControl {
    return this.filterForm.get('fax_no');
  }

  get abnNumberField(): AbstractControl {
    return this.filterForm.get('abn_number');
  }

  get tfnNumberField(): AbstractControl {
    return this.filterForm.get('tfn_number');
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getContactList(1, 'id', 'desc');
    this.createAdvanceFilterForm();
    this.getClientList();
    this.getTeamList();
  }

  /**
   * Create Form for filters
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      parent_id: new FormControl(null),
      entity_id: new FormControl(null),
      contact_person: new FormControl(''),
      first_name: new FormControl(''),
      contact_position_id: new FormControl(''),
      email: new FormControl(''),
      mobile_no: new FormControl(''),
      abn_number: new FormControl(''),
      tfn_number: new FormControl(''),
    });

    this.advanceFilterForm = this._fb.group({
      parent_id: new FormControl(null),
      entity_id: new FormControl(null),
      contact_person: new FormControl(''),
      first_name: new FormControl(''),
      contact_position_id: new FormControl(''),
      email: new FormControl(''),
      mobile_no: new FormControl(''),
      abn_number: new FormControl(''),
      tfn_number: new FormControl(''),
    });
  }

  /**
   * Get Client List
   */
  getClientList() {
    // console.log(1);
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = this.filteredTradingClientList = response;
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
   * Get Team List
   */
  getTeamList() {
    // console.log(2);
    this._sharedObjService.getTeamList({'records': 'all', 'sortBy': 'name', 'sortOrder': 'asc'}, {}).subscribe((response) => {
      this.teamList = response;
    });
  }

  /**
   *
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getContactList(pageNumber: number, key?: string, val?: string) {
    // console.log(3);
    this._commonCrudService.listData(AdminAPI.CLIENT_CONTACT, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
      this.handleContactResponse(response);
    });
  }

  /**
   * Handle Contact List Response
   * @param response
   */
  handleContactResponse(response: any) {
    this.contactList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Display Address State
   * @param {number} position_id
   * @returns {string}
   */
  getContactPosition(position_id: number): string {
    return this.contactPosition.filter(elem => elem.key === position_id)[0].label;
  }

  /**
   * Open filter method
   */
  onOpenFilter() {
    this.activeView = this.enumView.FILTER_VIEW_ARCHIVED;
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
    this.getContactList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    // console.log(4);
    this._commonCrudService.downloadExcelData(AdminAPI.CLIENT_CONTACT_EXPORT, params, this.getSearchParam(), ' Archived Contact ', 0).subscribe(response => {
    });
  }

  /**
   * Open view modal method
   * @param contact
   */

  /*  onViewContact(contact: Contact) {
      this.activeView = this.enumView.VIEW_MODAL;
      this.selectedContactRecord.next(contact);
      this.isViewContact.next(true);
    }*/
  onViewContact(contact: Contact) {
    let dialogRef = this.dialog.open(ContactViewComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        contact: contact
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  /**
   * Contact information page redirect
   */
  onContact() {
    this._router.navigate(['/' + AdminRoutes.CONTACT_INFORMATION]);
  }

  /**
   * Open modal methods
   * @param dialogName
   */
  onOpenModal(dialogName) {
    switch (dialogName) {
      case 'history':
        this.activeView = this.enumView.HISTORY_MODAL;
        break;
    }
  }

  /**
   * Close modal method
   * @param event
   */
  onCloseDialog(event) {
    this.activeView = event;
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue('');
    this.advanceFilterForm.get(elementName).setValue('');
    if (elementName === 'contact_position_id' || elementName === 'parent_id') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'first_name' || elementName === 'contact_person' || elementName === 'email' || elementName === 'mobile_no' || elementName === 'abn_number' || elementName === 'tfn_number') {
      delete this.likeJSON[elementName];
    } else if (elementName === 'entity_id' || elementName === 'trading_entity') {
      delete this.inJSON[elementName];
    }

    this.getContactList(1, this.sortBy, this.sortOrder);
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
    this.getContactList(1, 'id', 'desc');
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
          'contact_person': form.value['contact_person'],
          'first_name': form.value['first_name'],
          'contact_position_id': form.value['contact_position_id'],
          'email': form.value['email'],
          'mobile_no': form.value['mobile_no'],
          'abn_number': form.value['abn_number'],
          'tfn_number': form.value['tfn_number']
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
    this.orJSON = {};
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
      const entity_id = [];
      // if (form.value['entity_id'] !== "" && form.value["trading_entity"]) {
      //   entity_id.push(form.value['trading_entity']);
      //   delete form.value['trading_entity'];
      // }
      // if (entity_id.length) {
      //   form.value['entity_id'] = entity_id.join();
      // }

      if (form.value['email']) {
        form.value['to'] = form.value['email'];
        form.value['cc'] = form.value['email'];
        delete form.value['email'];
      }

      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'contact_position_id' || key === 'parent_id' || key === 'entity_id') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'first_name' || key === 'contact_person' || key === 'mobile_no' || key === 'abn_number' || key === 'tfn_number') {
            this.likeJSON[key] = form.value[key];
          } else if (key === 'to' || key === 'cc') {
            this.orJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilterView = false;
      this.getContactList(1, 'id', 'desc');
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
    this.getContactList(1, sortKey, sortVal);
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};
    const filterData = {'is_archived': 0};

    if (filterData) {
      filter['notequal'] = filterData;
    }
    // check for the object wheather its empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }
    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || filterData) {
      params['compare'] = filter;
    }
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }

    if (Object.keys(this.orJSON).length !== 0) {
      params['or'] = {'like': [this.orJSON]};
    }
    return params;
  }

  /**
   * Convert json string to array
   * @param field
   * @returns {string[]}
   */
  convertJsonStringToArray(item) {
    if (item && item.length > 0) {
      return item.split(',');
    }
  }

  /**
   * View Contact Information History
   * @param event
   * @param {Contact} contact
   */
  viewContactInformationHistory(event, contact: Contact) {
    event.stopPropagation();
    const value = {
      url: AdminAPI.CLIENT_CONTACT_HISTORY + '/' + contact.id,
    };
    this._sharedService.setHistoryURL(value);
    this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
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
