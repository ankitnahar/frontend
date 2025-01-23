import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, PageEvent} from '@angular/material';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {BASE, CONTACTPOSITION, GLOBALDATAKEYS, yesNo} from '../../../../../utility/constants/base-constants';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Clients} from '../../view-client/view-client.model';
import {Contact} from './contact.model';
import {BehaviorSubject} from 'rxjs';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import {AdminUser, Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {ContactViewComponent} from './contact-view/contact-view.component';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';
import {Services} from '../../../../../utility/shared-model/services.model';
import {CommonUserDialogComponent} from '../../../../../utility/components/common-user-dialog/common-user-dialog.component';

export enum Views {
  FILTER_VIEW_MAIN, VIEW_MODAL, ARCHIVE_CONTACT_MODAL, COPY_CONTACT_MODAL
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  // providers: [CommonCrudService]
})
export class ContactComponent implements OnInit {

  // Constant Variables
  enumView = Views;
  activeView: Views;

  // Data Variables
  contactList: Contact[] = [];
  teamList: Services[] = [];

  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  findInSetJSON = {};
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

  //
  clientList: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  parentClientList: Clients[] = [];
  userList: AdminUser[] = [];

  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  selectedContactRecord: BehaviorSubject<any> = new BehaviorSubject(null);
  isArchiveContact: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isCopyContact: BehaviorSubject<boolean> = new BehaviorSubject(false);

  bkChecklist = yesNo;
  contactPosition = CONTACTPOSITION;
  yesNoList = yesNo;

  // State variables
  isExpand = false;
  trIndex = -1;

  tabID = ADMINTABACCESS.CLIENT_CONTACT_INFO;
  tabData: Privilege | any[];
  copyContactButton = false;
  archiveContactButton = false;
  isLoginAccess = false;
  constructor(private _router: Router, public dialog: MatDialog,
              private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              private _sharedObjService: SharedObjService
  ) {
  }


  get parentTradingName(): AbstractControl {
    return this.filterForm.get('parent_id');
  }

  get entityIdNameField(): AbstractControl {
    return this.filterForm.get('name_entity');
  }

  get entityIdTradingField(): AbstractControl {
    return this.filterForm.get('trading_entity');
  }

  get entityIdBillingField(): AbstractControl {
    return this.filterForm.get('billing_entity');
  }

  get contactPersonField(): AbstractControl {
    return this.filterForm.get('contact_person');
  }

  get firstNameField(): AbstractControl {
    return this.filterForm.get('first_name');
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

  get sendNewsletterField(): AbstractControl {
    return this.filterForm.get('send_newsletter');
  }

  get isFeedbackContactField(): AbstractControl {
    return this.filterForm.get('is_feedback_contact');
  }

  get isLoinField(): AbstractControl {
    return this.filterForm.get('is_login');
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.copyContactButton = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'copy_contact', 1);
    this.archiveContactButton = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'update_archive', 1);
    this.isLoginAccess = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'client_login', 1);
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
      name_entity: new FormControl(null),
      billing_entity: new FormControl(null),
      trading_entity: new FormControl(null),
      contact_person: new FormControl(''),
      first_name: new FormControl(''),
      contact_position_id: new FormControl(''),
      email: new FormControl(''),
      mobile_no: new FormControl(''),
      service_id: new FormControl(''),
      is_display_bk_checklist: new FormControl(''),
      fax_no: new FormControl(''),
      abn_number: new FormControl(''),
      tfn_number: new FormControl(''),
      send_newsletter: new FormControl(''),
      is_feedback_contact: new FormControl(''),
      // is_login: new FormControl(''),
    });

    this.advanceFilterForm = this._fb.group({
      parent_id: new FormControl(null),
      name_entity: new FormControl(null),
      billing_entity: new FormControl(null),
      trading_entity: new FormControl(null),
      contact_person: new FormControl(''),
      first_name: new FormControl(''),
      contact_position_id: new FormControl(''),
      email: new FormControl(''),
      mobile_no: new FormControl(''),
      service_id: new FormControl(''),
      is_display_bk_checklist: new FormControl(''),
      fax_no: new FormControl(''),
      abn_number: new FormControl(''),
      tfn_number: new FormControl(''),
      send_newsletter: new FormControl(''),
      is_feedback_contact: new FormControl(''),
      // is_login: new FormControl(''),
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
   * Get Team List
   */
  getTeamList() {
    this._sharedObjService.getServices({
      'records': 'all',
      // 'sortBy': 'service_name',
      // 'sortOrder': 'asc'
    }, {'compare': {'equal': {'parent_id': 0}}}).subscribe((response) => {
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
   * Expand row method
   * @param i
   */
  openRow(i) {
    this.trIndex = (this.trIndex !== i) ? i : -1;
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
    this.getContactList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.CLIENT_CONTACT_EXPORT, params, this.getSearchParam(), 'Contact ', 0).subscribe(response => {
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
      panelClass: 'add-form-medium-dialog-container',
      data: {
        contact: contact
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }


  /**
   * Open view modal method
   * @param contact
   */
  onArchiveContact(contact: Contact) {
    this.activeView = this.enumView.ARCHIVE_CONTACT_MODAL;
    this.selectedContactRecord.next(contact);
    this.isArchiveContact.next(true);
  }

  /**
   * Open edit modal method
   * @param contact
   */
  onEditContact(contact: Contact) {
    this._sharedService.setClientData(GLOBALDATAKEYS.CONTACT, contact);
    this._sharedService.setClientData(GLOBALDATAKEYS.CONTACT, contact);
    this._sharedService.setClientData(GLOBALDATAKEYS.CONTACT, contact);
    this._router.navigate(['/' + AdminRoutes.ADD_CONTACT]);
  }

  /**
   * Open copy modal method
   * @param contact
   */
  onCopyContact(contact: Contact) {
    this.activeView = this.enumView.COPY_CONTACT_MODAL;
    this.selectedContactRecord.next(contact);
    this.isCopyContact.next(true);
  }

  /**
   * View Contact Information History
   * @param event
   * @param {Contact} contact
   */
  viewContactInformationHistory(contact: Contact) {
    const value = {
      url: AdminAPI.CLIENT_CONTACT_HISTORY + '/' + contact.id,
    };
    this._sharedService.setHistoryURL(value);
    this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
  }


  /**
   * Archived list contact page redirect
   */
  onArchivedList() {
    this._router.navigate(['/' + AdminRoutes.ARCHIVED_LIST]);
  }

  /**
   * On add contact page redirect
   */
  onAddContact() {
    this._router.navigate(['/' + AdminRoutes.ADD_CONTACT]);
  }

  /**
   * Open modal method
   * @param dialogName
   */
  onOpenModal(dialogName) {
    event.stopPropagation();
    switch (dialogName) {
      case 'view':
        this.activeView = this.enumView.VIEW_MODAL;
        break;

      case 'archive':
        this.activeView = this.enumView.ARCHIVE_CONTACT_MODAL;
        break;

      case 'copy':
        this.activeView = this.enumView.COPY_CONTACT_MODAL;
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
  onClearTag(elementName: string, JsonElementName?: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'parent_id' || elementName === 'contact_position_id' || elementName === 'send_newsletter' || elementName === 'is_feedback_contact' || elementName === 'is_login') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'first_name' || elementName === 'contact_person' || elementName === 'mobile_no' || elementName === 'fax_no' || elementName === 'abn_number' || elementName === 'tfn_number') {
      delete this.likeJSON[elementName];
    } else if (elementName === 'name_entity' || elementName === 'trading_entity' || elementName === 'billing_entity') {
      delete this.inJSON['entity_id'];
      delete this.inJSON[elementName];
    } else if (elementName === 'service_id') {
      delete this.findInSetJSON[elementName];
    } else if (elementName === 'email') {
      delete this.orJSON[elementName];
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
    this.orJSON = {};
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
          'trading_entity': form.value['trading_entity'],
          'name_entity': form.value['name_entity'],
          'billing_entity': form.value['billing_entity'],
          'contact_person': form.value['contact_person'],
          'first_name': form.value['first_name'],
          'contact_position_id': form.value['contact_position_id'],
          'email': form.value['email'],
          'mobile_no': form.value['mobile_no'],
          'service_id': form.value['service_id'],
          'is_display_bk_checklist': form.value['is_display_bk_checklist'],
          'fax_no': form.value['fax_no'],
          'abn_number': form.value['abn_number'],
          'tfn_number': form.value['tfn_number'],
          'send_newsletter': form.value['send_newsletter'],
          'is_feedback_contact': form.value['is_feedback_contact'],
          'is_login': form.value['is_login'],
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
    this.orJSON = {};
    // removing empty key from object
    for (const key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
          delete form.value[key];
        } else {
          if (flag) {
            if (this.advanceFilterForm.get(key)) {
              this.advanceFilterForm.get(key).setValue(form.value[key]);
            }
          }
        }
      }
    }
    // For Entity ID
    if (form.valid && (form.value !== {})) {
      const entity_id = [];
      if (form.value['name_entity'] !== '' && form.value['name_entity']) {
        entity_id.push(form.value['name_entity']);
        delete form.value['name_entity'];
      }
      if (form.value['billing_entity'] !== '' && form.value['billing_entity']) {
        entity_id.push(form.value['billing_entity']);
        delete form.value['billing_entity'];
      }
      if (form.value['trading_entity'] !== '' && form.value['trading_entity']) {
        entity_id.push(form.value['trading_entity']);
        delete form.value['trading_entity'];
      }

      if (entity_id.length) {
        form.value['entity_id'] = entity_id.join();
      }

      if (form.value['email']) {
        form.value['to'] = form.value['email'];
        form.value['cc'] = form.value['email'];
        delete form.value['email'];
      }

      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'parent_id' || key === 'contact_position_id' || key === 'send_newsletter' || key === 'is_feedback_contact' || key === 'is_login') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'first_name' || key === 'contact_person' || key === 'mobile_no' || key === 'fax_no' || key === 'abn_number' || key === 'tfn_number') {
            if (key === 'mobile_no' || key === 'fax_no') {
              form.value[key] = form.value[key].replace(/\s/g, '');
              this.likeJSON[key] = encodeURIComponent(form.value[key]);
            } else {
              this.likeJSON[key] = encodeURIComponent(form.value[key]);
            }
          } else if (key === 'entity_id') {
            this.inJSON['entity_id'] = form.value[key];
          } else if (key === 'service_id') {
            this.findInSetJSON['service_id'] = [form.value[key]];
          } else if (key === 'to' || key === 'cc') {
            this.orJSON[key] = encodeURIComponent(form.value[key]);
          }
        }
      }
      this.isOpenFilterView = false;
      this.getContactList(1, 'id', 'desc');
    }
  }

  // helper

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
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
    this.getContactList(1, sortKey, sortVal);
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};
    const filterData = {'is_archived': 1};

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
    if (Object.keys(this.findInSetJSON).length !== 0) {
      params['findinset'] = this.findInSetJSON;
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
    if (item.length > 0) {
      return item.split(',');
    }
  }

  onCloseData() {
    this.getContactList(1, 'id', 'desc');
  }

  onOpenClientList(contact: Contact): void {
    const dialogRef = this.dialog.open(CommonUserDialogComponent, {
      panelClass: 'view-client-dialog-container',
      data: {
        content: contact.tam_name,
        title: 'TAM Name'
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  /**
   * Display Get Status List
   * @param {number} status_id
   * @returns {string}
   */
  getYesNoStatus(status_id: number): string {
    const val = this.yesNoList.filter(elem => elem.key === Number(status_id));
    return (val.length) ? val[0].label : '';
  }

  /**
   * On Login Contact
   * @param contact
   */
  onLoginContact(contact: Contact) {
   
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
