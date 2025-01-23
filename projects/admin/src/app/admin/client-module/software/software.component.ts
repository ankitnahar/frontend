import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, PageEvent} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BASE} from '../../../../utility/constants/base-constants';
import {Software} from './software.model';
import {Clients} from '../view-client/view-client.model';
import {BehaviorSubject} from 'rxjs';
import {ConfirmationDialogComponent} from '../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../utility/constants/api';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {Privilege} from '../../../../utility/shared-model/admin-user.model';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {AdminRoutes} from '../../../../utility/constants/admin-route';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss'],
  // providers: [CommonCrudService]
})
export class SoftwareComponent implements OnInit {

  // Constant Variables

  // Data Variables
  softwareList: Software[] = [];
  softwareMasterList: any [];

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

  clientList: Clients[] = [];

  selectedAmNotesRecord: BehaviorSubject<any> = new BehaviorSubject(null);
  isEditAmNotes: BehaviorSubject<boolean> = new BehaviorSubject(false);

  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  selectedSoftwareRecord: BehaviorSubject<any> = new BehaviorSubject(null);
  isEditSoftware: BehaviorSubject<boolean> = new BehaviorSubject(false);

  tabID = ADMINTABACCESS.CLIENT_ENTITYSOFTWARE;
  tabData: Privilege | any[];

  constructor(private _fb: FormBuilder,
              private _router: Router,
              public dialog: MatDialog,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              private _sharedObjService: SharedObjService) {
  }

  get entityIdField(): AbstractControl {
    return this.filterForm.get('entity');
  }

  get softwareIdField(): AbstractControl {
    return this.filterForm.get('software_id');
  }

  get usernameField(): AbstractControl {
    return this.filterForm.get('username');
  }

  get linkField(): AbstractControl {
    return this.filterForm.get('link');
  }

  get noteField(): AbstractControl {
    return this.filterForm.get('notes');
  }

  ngOnInit() {
    // To Check Access Rights
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getClientSoftwareList(1, 'id', 'desc');
    this.getClientList();
    this.getSoftwareList();
    this.createAdvanceFilterForm();
  }

  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      entity: new FormControl(null),
      software_id: new FormControl(''),
      username: new FormControl(''),
      link: new FormControl(''),
      notes: new FormControl('')
    });

    this.advanceFilterForm = this._fb.group({
      entity: new FormControl(null),
      software_id: new FormControl(''),
      username: new FormControl(''),
      link: new FormControl(''),
      notes: new FormControl('')
    });
  }

  /**
   * Get Client Software List
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getClientSoftwareList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.CLIENT_SOFTWARE_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(Response => {
      this.handleClientSoftwareResponse(Response);
    });
  }

  /**
   * Delete Client Software
   * @param id
   */
  deleteClientSoftware(software?: Software) {
    this._commonCrudService.deleteData(AdminAPI.CLIENT_SOFTWARE_DELETE, software.id).subscribe(Response => {
      this.getClientSoftwareList(this.page, this.sortBy, this.sortOrder);
    });
  }

  /**
   * Handle Client Software List Response
   * @param response
   */
  handleClientSoftwareResponse(response: any) {
    this.softwareList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Get Client List
   */
  getSoftwareList() {
    this._commonCrudService.listData(AdminAPI.SOFTWARE_LIST, {
      records: 'all',
      sortBy: 'name',
      sortOrder: 'asc'
    }).subscribe((response) => {
      this.softwareMasterList = response.payload.data;
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
   * Open software modal
   */
  onOpensoftwareModal(software: Software) {
    const dialogConfigData: any = {
      data: {
        content: 'Are you sure want to delete?'
      },
      panelClass: 'add-bookkeeping-dialog-panel-container'
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.deleteClientSoftware(software);
      }
    });
  }

  /**
   * Update Client Software
   * @param {Software} software
   */
  updateSoftware(software?: Software) {
    this.selectedSoftwareRecord.next(software);
    this.isEditSoftware.next(true);
  }

  /**
   * Open modal method
   */
  onOpenModal() {
    this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
  }

  /**
   * Open filter
   */
  onOpenFilter() {
    this.isOpenFilterView = true;
  }

  /**
   * close filter
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
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getClientSoftwareList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.CLIENT_SOFTWARE_EXPORT, params, this.getSearchParam(), 'Software ', 0).subscribe(response => {
    });
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'software_id') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'username' || elementName === 'link' || elementName === 'notes') {
      delete this.likeJSON[elementName];
    } else if (elementName === 'entity') {
      delete this.inJSON[JsonElementName];
      delete this.inJSON[elementName];
    }
    this.getClientSoftwareList(1, this.sortBy, this.sortOrder);
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
    this.getClientSoftwareList(1, 'id', 'desc');
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
          'entity': form.value['entity'],
          'software_id': form.value['software_id'],
          'username': form.value['username'],
          'link': form.value['link'],
          'notes': form.value['notes'],
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
      if (form.value['entity'] !== '' && form.value['entity']) {
        // converting entity id array into comma separator
        form.value['entity_id'] = form.value['entity'];
        delete form.value['entity'];
      }

      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'software_id') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'entity_id') {
            this.inJSON[key] = form.value[key];
          } else if (key === 'notes' || key === 'username' || key === 'link') {
            this.likeJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilterView = false;
      // console.log(this.equalJSON);
      // console.log(this.likeJSON);
      // console.log(this.inJSON);
      this.getClientSoftwareList(1, 'id', 'desc');
    }
  }

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilterView = false;
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
    this.getClientSoftwareList(1, sortKey, sortVal);
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
