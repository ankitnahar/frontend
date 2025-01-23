import {Component, HostListener, OnInit} from '@angular/core';
import {Contact, ContactUsersList} from '../contact/contact.model';
import {Services} from '../../../../../utility/shared-model/services.model';
import {BASE, CONTACTPOSITION, GLOBALDATAKEYS, yesNo} from '../../../../../utility/constants/base-constants';
import {MatDialog, PageEvent} from '@angular/material';
import {Clients} from '../../view-client/view-client.model';
import {AdminUser, Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';
import {Router} from '@angular/router';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonUserDialogComponent} from '../../../../../utility/components/common-user-dialog/common-user-dialog.component';
import {Views} from '../contact/contact.component';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';

@Component({
  selector: 'app-client-users',
  templateUrl: './client-users.component.html',
  styleUrls: ['./client-users.component.scss']
})
export class ClientUsersComponent implements OnInit {

  // Constant Variables
  enumView = Views;
  activeView: Views;

  // Data Variables
  contactList: ContactUsersList[] = [];
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
  isLoginAccess = false;
  constructor(private _router: Router, public dialog: MatDialog,
              private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              private _sharedObjService: SharedObjService
  ) {
  }


  get entityIdTradingField(): AbstractControl {
    return this.filterForm.get('entity_id');
  }

  get emailField(): AbstractControl {
    return this.filterForm.get('email');
  }

  get userfullnameField(): AbstractControl {
    return this.filterForm.get('userfullname');
  }

  get isActiveField(): AbstractControl {
    return this.filterForm.get('is_active');
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.isLoginAccess = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'client_login', 1);
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getContactList(1);
    this.createAdvanceFilterForm();
    this.getClientList();
    this.getTeamList();
  }

  /**
   * Create Form for filters
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      entity_id: new FormControl(null),
      email: new FormControl(null),
      userfullname: new FormControl(null),
      is_active: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      entity_id: new FormControl(null),
      email: new FormControl(null),
      userfullname: new FormControl(null),
      is_active: new FormControl(null)
    });
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = response;
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
    this._commonCrudService.listData(AdminAPI.CLIENT_CONTACT_CLIENT_USERS, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
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
    this.getContactList(event.pageIndex + 1);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.CLIENT_CONTACT_CLIENT_USERS_EXPORT, params, this.getSearchParam(), 'Client Users ', 0).subscribe(response => {
    });
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName?: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'entity_id' || elementName === 'is_active' ) {
      delete this.equalJSON[elementName];
    } else if (elementName === 'email' || elementName === 'userfullname') {
      delete this.likeJSON[elementName];
    }
    this.getContactList(1);
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
    this.getContactList(1);
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
          'entity_id': form.value['entity_id'],
          'email': form.value['email'],
          'userfullname': form.value['userfullname'],
          'is_active': form.value['is_active']
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
     for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'entity_id' || key === 'is_active') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'email' || key === 'userfullname') {
            this.likeJSON[key] = encodeURIComponent(form.value[key]);
          }
        }
      }
      this.isOpenFilterView = false;
      this.getContactList(1);
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
    this.getContactList(1);
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};
    const filterData = null;

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
    this.getContactList(1);
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
  onLoginContact(contact: any) {
    
  }

  /**
   * On add contact page redirect
   */
  onAddContactUser() {
    this._router.navigate(['/' + AdminRoutes.EDIT_CLIENT_USERS]);
  }

  /**
   * Open edit modal method
   * @param contact
   */
  onEditContact(contact: Contact) {
    this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT_CONTACT_USER, contact);
    this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT_CONTACT_USER, contact);
    this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT_CONTACT_USER, contact);
    this._router.navigate(['/' + AdminRoutes.EDIT_CLIENT_USERS]);
  }
}
