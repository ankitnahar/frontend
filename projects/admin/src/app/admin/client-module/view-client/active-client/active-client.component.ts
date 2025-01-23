import {Component, OnInit} from '@angular/core';
import {BASE, GLOBALDATAKEYS, yesNo} from '../../../../../utility/constants/base-constants';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ACCESSTYPE, ADMINTABACCESS} from '../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {Router} from '@angular/router';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Clients} from '../view-client.model';
import {CommonFunctions} from "../../../../../utility/common-functions";

@Component({
  selector: 'app-active-client',
  templateUrl: './active-client.component.html',
  styleUrls: ['./active-client.component.scss']
})
export class ActiveClientComponent implements OnInit {

  // Data related variables
  clientList: Clients[] = [];
  parentClientList: Clients[] = [];
  tradingClientList: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  // Pagination variables
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Sorting Params
  sortBy: string;
  sortOrder: string;
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  orJSON = {};
  tabID = ADMINTABACCESS.CLIENT_VIEWCLIENT;
  uploadDocumentTabID = ADMINTABACCESS.CLIENT_ENTITYDOCUMENT;
  specialNoteTabID = ADMINTABACCESS.CLIENT_SPECIALNOTES;
  permInfoTabID = ADMINTABACCESS.SYSTEM_SETUP_PERMANENTINFO;
  tabData: Privilege | any[];
  is_upload_doc = false;
  is_special_notes = false;
  is_perm = false;
  yesNoList = yesNo;
  billingFrom = yesNo;
  // Other Variables
  isOpenFilterView = false;

  constructor(private _router: Router, private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService) {
  }

  // get form control
  get tradingName(): AbstractControl {
    return this.filterForm.get('id');
  }

  get parentTradingName(): AbstractControl {
    return this.filterForm.get('parent_id');
  }

  get clientCode(): AbstractControl {
    return this.filterForm.get('code');
  }

  get isParent(): AbstractControl {
    return this.filterForm.get('is_parent');
  }

  get isClientConsole(): AbstractControl {
    return this.filterForm.get('is_dashboard');
  }
  get isBillingFrom(): AbstractControl {
    return this.filterForm.get('billing_from');
  }

  ngOnInit() {
    // To Check Access Rights
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.is_upload_doc = this._sharedService.checkUserPrivileges(this.uploadDocumentTabID, ACCESSTYPE.IS_VIEW);
    this.is_special_notes = this._sharedService.checkUserPrivileges(this.specialNoteTabID, ACCESSTYPE.IS_VIEW);
    this.is_perm = this._sharedService.checkUserPrivileges(this.permInfoTabID, ACCESSTYPE.IS_VIEW);

    // default API listing code
    this.getClientList(1, 'id', 'desc');
    this.getEntityList();
    this.createAdvanceFilterForm();
  }


  /**
   * Initialization methods
   * @param pageNumber
   * @param key
   * @param val
   */
  getClientList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.CLIENT_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam())
      .subscribe((response) => {
        this.handleClientListResponse(response);
      });
  }


  getEntityList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      const data = response;
      this.tradingClientList = data;
      this.filteredTradingClientList = data;
      this.parentClientList = data.filter(item => item.is_parent === 1);
    });
  }

  /**
   * On Change Parent Entity
   * @param event
   */
  onChangeParentEntity(event: any) {
    this.filteredTradingClientList = this.tradingClientList;
    if (event && event.id > 0) {
      this.filteredTradingClientList = this.tradingClientList.filter(item => item["parent_id"] === event.id);
    }
  }

  /**
   * handling the response
   * @param response
   */
  handleClientListResponse(response: any) {
    this.clientList = response['payload']['data'];
    this.page = response['pager']['pageNumber'];
    this.pageIndex = this.page - 1;
    this.totalRecords = +(response['pager']['totalRecords']);
    this.sortBy = response['pager']['sortBy'];
    this.sortOrder = response['pager']['sortOrder'];
  }

  // Events
  /**
   * sort function for sort data
   * @param sortKey
   * @param sortVal
   */
  getSortClientData(sortKey: string, sortVal: string) {
    this.getClientList(1, sortKey, sortVal);
  }

  /**
   * Pagination page change event
   * @param event
   */
  onClientListPageChange(event) {
    this.pageSize = event.pageSize;
    this.getClientList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * On update client page redirect
   * @param clientData
   */
  onUpdateClient(clientData: Clients) {
    this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT, clientData);
    this._router.navigate(['/' + AdminRoutes.UPDATE_CLIENT]);
  }

  onViewClient(clientData: Clients) {
    this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT, clientData);
    this._router.navigate(['/' + AdminRoutes.VIEW_UPDATE_CLIENT]);
  }

  /**
   * On permanent information page redirect
   */
  onPermanentInformation(clientData: Clients) {
    if (clientData) {
      this._commonCrudService.getData(AdminAPI.PERMANENT_INFO_LIST, clientData.id).subscribe((response) => {
        const permanentInfoData = response.payload.data;
        if (permanentInfoData) {
          this._sharedService.setClientData(GLOBALDATAKEYS.PERMANENT_INFO, permanentInfoData);
          window.open(AdminRoutes.VIEW_PERMANENT_INFORMATION, '_blank');
        }
      });
    }
  }

  /**
   * On add entity page redirect
   */
  onAddEntity() {
    this._router.navigate(['/' + AdminRoutes.ADD_ENTITY]);
  }

  /**
   * On cloud document
   * @param clientData
   */
  onClientDocument(clientData: Clients) {
    this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT, null);
    this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT, clientData);
    this._router.navigate(['/' + AdminRoutes.CLIENT_DOCUMENTS]);
  }

  // helper
  /**
   * get function for returning pageNumber and page size at time of listing api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{pageNumber: number; recordsPerPage: number}}
   */
  private getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
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
   * Default search params for client listing API
   * @returns {{}}
   */
  private getSearchParam() {
    const params = {};
    const filter = {};
    const filterData = {
      discontinue_stage: 2
    };
    filter['notequal'] = filterData;
    // check for the object whether its empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }
    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !CommonFunctions.isEmpty(filter)) {
      params['compare'] = filter;
    }

    if (Object.keys(this.orJSON).length !== 0) {
      params['or'] = {'like': [this.orJSON]};
    }
    return params;
  }

  /**
   * function for redirect admin to upload document
   * @param clientData
   */
  onUploadDocuments(clientData: Clients) {
    this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT, clientData);
    this._router.navigate(['/' + AdminRoutes.UPLOAD_DOCUMENTS]);
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
    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'id' || key === 'parent_id' || key === 'is_parent' || key === 'code' || key === 'is_dashboard' || key === 'billing_from') {
            this.equalJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilterView = false;
      this.getClientList(1, 'id', 'desc');
    }
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
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
   * Get Billing From
   * @param status_id
   */
  getBillingFrom(status_id: number): string {
    const val = this.billingFrom.filter(elem => elem.key === Number(status_id));
    return (val.length) ? val[0].label : '';
  }
  /**
   * Create Change InOut
   */
  createAdvanceFilterForm() {
    // this.status =
    this.filterForm = this._fb.group({
      id: new FormControl(null),
      code: new FormControl(null),
      parent_id: new FormControl(null),
      is_parent: new FormControl(null),
      is_dashboard: new FormControl(null),
      billing_from: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      id: new FormControl(null),
      code: new FormControl(null),
      parent_id: new FormControl(null),
      is_parent: new FormControl(null),
      is_dashboard: new FormControl(null),
      billing_from: new FormControl(null)
    });
  }

  /**
   * Toogle Filter
   */
  onOpenFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  /**
   * Close filter
   */
  onCloseFilter() {
    this.isOpenFilterView = false;
  }


  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.equalJSON = {};
    this.isOpenFilterView = false;
    this.getClientList(1, 'id', 'desc');
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName?: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'id' || elementName === 'parent_id' || elementName === 'code' || elementName === 'is_parent' || elementName === 'is_dashboard') {
      delete this.equalJSON[elementName];
    }
    this.getClientList(1, this.sortBy, this.sortOrder);
  }

  /**
   * Advance Filter Key Up function
   * @param event
   * @param formValue
   * @param {boolean} isValid
   * @param {boolean} flag
   */
  setAdvanceFilterKeyUp(event, form: FormGroup, flag: boolean) {
    // console.log(event);
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
          'id': (form.value['id']) ? form.value['id'] : null,
          'parent_id': (form.value['id']) ? form.value['parent_id'] : null,
          'code': (form.value['code']) ? form.value['code'] : null,
          'is_parent': (form.value['is_parent'] != null && Number(form.value['is_parent']) >= 0) ? form.value['is_parent'] : null,
          'is_dashboard': (form.value['is_dashboard'] != null && Number(form.value['is_dashboard']) >= 0) ? form.value['is_dashboard'] : null,
          'billing_from': (form.value['billing_from'] != null && Number(form.value['billing_from']) >= 0) ? form.value['billing_from'] : null,
        });
      this.setAdvanceFilter(form, false);
    }
  }

  downloadExcel() {
    const params = {'excel': 1};
    this._commonCrudService.downloadExcelData(AdminAPI.CLIENT_CHECKLIST_REPORT, params, {}, 'Checklist Report ', 0).subscribe(response => {
    });
  }
}
