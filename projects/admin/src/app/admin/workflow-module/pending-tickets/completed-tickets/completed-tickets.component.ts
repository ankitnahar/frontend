import {Component, HostListener, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, PageEvent} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {BASE, GLOBALDATAKEYS, ticketSeverity, yesNo} from '../../../../../utility/constants/base-constants';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';
import {AdminUser, Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {PendingTickets} from './../pending-tickets.model';
import {AdminAPI} from '../../../../../utility/constants/api';
import {Clients} from '../../../client-module/view-client/view-client.model';
import {Team} from '../../../../../utility/shared-model/designation.model';
import {convertURLParamToDecode} from '../../../../../utility/common-functions';
import * as moment from 'moment';

@Component({
  selector: 'app-completed-tickets',
  templateUrl: './completed-tickets.component.html',
  styleUrls: ['./completed-tickets.component.scss'],
  providers: [CommonCrudService]
})
export class CompletedTicketsComponent implements OnInit {
  @Input() checkFirstTimeRedirectionParam: any;

  // Form Variables
  PendingTicketFilterForm: FormGroup;
  filterPendingTicketForm: FormGroup;

  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // MatPaginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilterView = false;
  isOpenHistoryDialog = false;
  tabID = ADMINTABACCESS.TICKET_INCOMPLETE;
  tabData: Privilege | any[];
  //Data Variable
  tagList: any[] = [];
  completeTicket: PendingTickets[] = [];
  url = BASE.IMAGE_PATH;
  tamList: AdminUser[] = [];
  clientList: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  parentClientList: Clients[] = [];
  teamList: Team[] = [];
  userList: AdminUser[] = [];
  yesNoList = yesNo;
  ticketTypeList = [];
  severityList = ticketSeverity;

  equalJSON = {'status_id': 5};
  likeJSON = {};
  findInSetJSON = {};
  inJSON = {};
  entity_id = [];
  selectedFilterEntity = null;
  checkFirstTimeRedirectionParamData = 0;
  PeriodFromValue = null;
  PeriodToValue = null;

  constructor(private _fb: FormBuilder,
              public _router: Router,
              public dialog: MatDialog,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              private route: ActivatedRoute,
              private _sharedObjService: SharedObjService) {
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.checkFirstTimeRedirectionParamData = this.checkFirstTimeRedirectionParam;
    if (this.checkFirstTimeRedirectionParamData === 0) {
      this.route.queryParams
        .subscribe(params => {
          const dataItem = convertURLParamToDecode(params);
          if (dataItem) {
            this.selectedFilterEntity = (dataItem['entity_id']) ? Number(dataItem['entity_id']) : null;
            if (this.selectedFilterEntity && this.checkFirstTimeRedirectionParamData === 0) {
              this.selectedFilterEntity = this.selectedFilterEntity;
              this.equalJSON['entity_id'] = this.selectedFilterEntity;
            } else {
              this.selectedFilterEntity = null;
            }
          }
          this.checkFirstTimeRedirectionParamData = 1;
        });
    }
    this.initializationMethod();
  }

  // for filter
  get ticketCodeField(): AbstractControl {
    return this.filterForm.get('code');
  }

  get ticketTypeIdField(): AbstractControl {
    return this.filterForm.get('type_id');
  }

  get ticketSubjectField(): AbstractControl {
    return this.filterForm.get('subject');
  }

  get ticketParentTradingField(): AbstractControl {
    return this.filterForm.get('parent_id');
  }

  get ticketTradingField(): AbstractControl {
    return this.filterForm.get('entity_id');
  }

  get ticketTamField(): AbstractControl {
    return this.filterForm.get('technical_account_manager');
  }

  get createdByField(): AbstractControl {
    return this.filterForm.get('created_by');
  }

  get createdOnField(): AbstractControl {
    return this.filterForm.get('created_from');
  }

  get createdToField(): AbstractControl {
    return this.filterForm.get('created_to');
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getUserList();
    this.getClientList();
    this.getTeam();
    this.getCompleteTicketList(1, 'id', 'desc');
    this.createAdvanceFilterForm();
    this.getTicketTypeList();
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      const tamData = response.filter(data => (data['designation_id']) ? (data['designation_id']['id'] === 9 || data['designation_id']['id'] === 15) : 0);
      this.userList = response;
      this.tamList = tamData;
    });
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = this.filteredTradingClientList = response;
      this.parentClientList = response.filter(item => item.is_parent === 1);
    });
  }

  /**
   * Get team
   */
  getTeam() {
    this._sharedObjService.getTeamList({'records': 'all'}, {}).subscribe((response) => {
      this.teamList = response;
    });
  }

  /**
   * Get ticket Type list
   */
  getTicketTypeList() {
    this._commonCrudService.listData(AdminAPI.TICKET_TYPE, {
      'records': 'all'
    }, {}).subscribe(Response => {
      this.ticketTypeList = Response.payload.data;
    });
  }


  /**
   * Create Advance Filter Form
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      code: new FormControl(null),
      type_id: new FormControl(''),
      parent_id: new FormControl(null),
      subject: new FormControl(null),
      entity_id: new FormControl((this.selectedFilterEntity > 0) ? this.selectedFilterEntity : null),
      technical_account_manager: new FormControl(null),
      created_by: new FormControl(null),
      created_from: new FormControl(null),
      created_to: new FormControl(null),
    });

    this.advanceFilterForm = this._fb.group({
      code: new FormControl(null),
      type_id: new FormControl(''),
      subject: new FormControl(null),
      parent_id: new FormControl(null),
      entity_id: new FormControl((this.selectedFilterEntity > 0) ? this.selectedFilterEntity : null),
      technical_account_manager: new FormControl(null),
      created_by: new FormControl(null),
      created_from: new FormControl(null),
      created_to: new FormControl(null),
    });
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.TICKET_LIST_EXPORT, params, this.getSearchParam(), 'Completed Ticket ', 0).subscribe(response => {
    });
  }

  /**
   *
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getCompleteTicketList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.TICKET_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
      this.handleTicketResponse(response);
    });
  }

  /**
   * Handle Ticket List Response
   * @param response
   */
  handleTicketResponse(response: any) {
    this.completeTicket = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getCompleteTicketList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }


  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'parent_id' || elementName === 'code' || elementName === 'type_id' || elementName === 'technical_account_manager' || elementName === 'created_by' || elementName === 'entity_id') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'created_from') {
      this.PeriodFromValue = null;
    } else if (elementName === 'created_to') {
      this.PeriodToValue = null;
    } else if (elementName === 'entity_id') {
      delete this.inJSON['entity_id'];
      delete this.inJSON[elementName];
      this.entity_id = [];
    } else if(elementName === 'subject'){
      delete this.likeJSON[elementName];
    }
    this.getCompleteTicketList(1, this.sortBy, this.sortOrder);
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.selectedFilterEntity = null;
    this.createAdvanceFilterForm();
    this.findInSetJSON = {};
    this.equalJSON = {'status_id': 5};
    this.likeJSON = {};
    this.inJSON = {};
    this.PeriodFromValue = null;
    this.PeriodToValue = null;
    this.isOpenFilterView = false;
    this.getCompleteTicketList(1, 'id', 'desc');
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
          'code': form.value['code'],
          'type_id': form.value['type_id'],
          'subject': form.value['subject'],
          'parent_id': form.value['parent_id'],
          'entity_id': form.value['entity_id'],
          'technical_account_manager': form.value['technical_account_manager'],
          'created_by': form.value['created_by'],
          'created_from': form.value['created_from'],
          'created_to': form.value['created_to'],
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
    this.equalJSON = {'status_id': 5};
    this.likeJSON = {};
    this.findInSetJSON = {};
    this.inJSON = {};
    this.entity_id = [];
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

    if (form.value['created_from'] !== '' && form.value['created_from']) {
      this.PeriodFromValue = form.value['created_from'];
      delete form.value['created_from'];
    }
    if (form.value['created_to'] !== '' && form.value['created_to']) {
      this.PeriodToValue = form.value['created_to'];
      delete form.value['created_to'];
    }

    // For Entity ID
    if (form.valid && (form.value !== {})) {
      // if (form.value['entity_id'] !== '' && form.value['entity_id']) {
      //   this.entity_id.push(form.value['entity_id']);
      //   delete form.value['entity_id'];
      // }

      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'parent_id' || key === 'code' || key === 'type_id' || key === 'created_by'
            || key === 'technical_account_manager' || key === 'entity_id') {
            this.equalJSON[key] = form.value[key];
          }
          else if(key === 'subject') {
            this.likeJSON[key] = form.value[key];
          }
        }
      }
      // IF Entity search multiple values
      // if (this.entity_id.length) {
      //   this.inJSON['entity_id'] = this.entity_id.join(',');
      // }
      this.isOpenFilterView = false;
      this.getCompleteTicketList(1, 'id', 'desc');
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
    this.getCompleteTicketList(1, sortKey, sortVal);
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};

    if (this.PeriodFromValue) {
      filter['greaterthanequal'] = {};
    }
    if (this.PeriodToValue) {
      filter['lessthanequal'] = {};
    }

    if (this.PeriodFromValue) {
      filter['greaterthanequal']['created_on'] = moment(this.PeriodFromValue).format('YYYY-MM-DD');
    }
    if (this.PeriodToValue) {
      filter['lessthanequal']['created_on'] = moment(this.PeriodToValue).format('YYYY-MM-DD');
    }

    // check for the object wheather its empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }

    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }

    if (Object.keys(this.findInSetJSON).length !== 0) {
      params['findinset'] = this.findInSetJSON;
    }
    if (Object.keys(this.equalJSON).length || filter !== {}) {
      params['compare'] = filter;
    }
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }
    return params;
  }

  /**
   * Display Get Severity
   * @param {number} Severity
   * @returns {string}
   */
  getSeverity(severity: number): string {
    const val = this.severityList.filter(elem => elem.key === severity);
    return (val.length) ? val[0].label : '';
  }

  /**
   * Get ticket classes
   *    * @param type_id
   */
  getClasses(type_id: number) {
    let returnClass = '';
    if (type_id === 1) {
      returnClass = 'orange-tr';
    }
    if (type_id === 3) {
      returnClass = 'teal-tr';
    }
    return returnClass;
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

  onViewTicket(completeTicketsData: PendingTickets) {
    this._sharedService.setClientData(GLOBALDATAKEYS.PENDING_TICKET, completeTicketsData);
    window.open(AdminRoutes.VIEW_TICKETS, '_blank');
    //this._router.navigate(['/' + AdminRoutes.VIEW_TICKETS]);
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilterView = false;
    }
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
