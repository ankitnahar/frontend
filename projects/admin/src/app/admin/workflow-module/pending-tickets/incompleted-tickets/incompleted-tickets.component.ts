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
import * as FileSaver from 'file-saver';
import * as moment from 'moment';
import {PendingTicketAssignStaffDialogComponent} from '../pending-ticket-assign-staff-dialog/pending-ticket-assign-staff-dialog.component';
import {convertURLParamToDecode} from '../../../../../utility/common-functions';

@Component({
  selector: 'app-incompleted-tickets',
  templateUrl: './incompleted-tickets.component.html',
  styleUrls: ['./incompleted-tickets.component.scss']
})
export class IncompletedTicketsComponent implements OnInit {
  @Input() checkFirstTimeRedirectionParam: any;

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
  url = BASE.IMAGE_PATH;
  // Other Variables
  isOpenFilterView = false;
  isOpenHistoryDialog = false;
  tabID = ADMINTABACCESS.TICKET_INCOMPLETE;
  tabData: Privilege | any[];
  // Data Variable
  tagList: any[] = [];
  incompleteTicket: PendingTickets[] = [];

  tamList: AdminUser[] = [];
  clientList: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  parentClientList: Clients[] = [];
  teamList: Team[] = [];
  userList: AdminUser[] = [];
  yesNoList = yesNo;
  ticketStatusList = [];
  ticketTypeList = [];
  severityList = ticketSeverity;

  equalJSON = {};
  likeJSON = {};
  findInSetJSON = {};
  inJSON = {};
  entity_id = [];
  selectedFilterEntity = null;
  selectedFilterCode = null;
  checkFirstTimeRedirectionParamData = 0;
  PeriodFromValue = null;
  PeriodToValue = null;

  constructor(private _fb: FormBuilder,
              public _router: Router,
              public dialog: MatDialog,
              private route: ActivatedRoute,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              private _sharedObjService: SharedObjService) {
  }

  // for filter
  get ticketCodeField(): AbstractControl {
    return this.filterForm.get('code');
  }

  get ticketTypeIdField(): AbstractControl {
    return this.filterForm.get('type_id');
  }

  get ticketStatusIdField(): AbstractControl {
    return this.filterForm.get('status_id');
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

  get problemFromOurSideField(): AbstractControl {
    return this.filterForm.get('problem_our_side');
  }

  get ticketAssigneeField(): AbstractControl {
    return this.filterForm.get('ticket_assignee');
  }

  get teamIdField(): AbstractControl {
    return this.filterForm.get('team_id');
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
            this.selectedFilterCode = (dataItem['code']) ? Number(dataItem['code']) : null;
            if (this.selectedFilterEntity && this.checkFirstTimeRedirectionParamData === 0) {
              this.selectedFilterEntity = this.selectedFilterEntity;
              this.equalJSON['entity_id'] = this.selectedFilterEntity;
            } else {
              this.selectedFilterEntity = null;
            }
            if (this.selectedFilterCode && this.checkFirstTimeRedirectionParamData === 0) {
              this.selectedFilterCode = this.selectedFilterCode;
              this.equalJSON['code'] = this.selectedFilterCode;
            } else {
              this.selectedFilterCode = null;
            }
          }
          this.checkFirstTimeRedirectionParamData = 1;
          this.checkFirstTimeRedirectionParam = 1;
        });
    }
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getUserList();
    this.getClientList();
    this.getTeam();
    this.getIncompleteTicketList(1, 'id', 'desc');
    this.createAdvanceFilterForm();
    this.getTicketStatusList();
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
   * Get Ticket Status List
   */
  getTicketStatusList() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      'records': 'all',
      'table': 'ticket_status',
      'column': 'id,status,hide_for_sr',
      'sortOrder': 'id',
      'sortBy': 'asc'
    }, {}).subscribe(Response => {
      this.ticketStatusList = Response;
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
      parent_id: new FormControl(null),
      type_id: new FormControl(''),
      status_id: new FormControl(''),
      subject: new FormControl(null),
      entity_id: new FormControl((this.selectedFilterEntity > 0) ? this.selectedFilterEntity : null),
      technical_account_manager: new FormControl(null),
      created_by: new FormControl(null),
      created_from: new FormControl(null),
      created_to: new FormControl(null),
      problem_our_side: new FormControl(''),
      ticket_assignee: new FormControl(null),
      team_id: new FormControl('')
    });

    this.advanceFilterForm = this._fb.group({
      code: new FormControl(null),
      parent_id: new FormControl(null),
      type_id: new FormControl(''),
      status_id: new FormControl(''),
      subject: new FormControl(null),
      entity_id: new FormControl((this.selectedFilterEntity > 0) ? this.selectedFilterEntity : null),
      technical_account_manager: new FormControl(null),
      created_by: new FormControl(null),
      created_from: new FormControl(null),
      created_to: new FormControl(null),
      problem_our_side: new FormControl(''),
      ticket_assignee: new FormControl(null),
      team_id: new FormControl('')
    });
  }


  /**
   *
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getIncompleteTicketList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.TICKET_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
      this.handleTicketResponse(response);
    });
  }

  /**
   * Handle Ticket List Response
   * @param response
   */
  handleTicketResponse(response: any) {
    this.incompleteTicket = response.payload.data;
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
    this.getIncompleteTicketList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.TICKET_LIST_EXPORT, params, this.getSearchParam(), 'Incomplete Ticket ', 0).subscribe(response => {
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
    if (elementName === 'parent_id' ||  elementName === 'code' || elementName === 'type_id' || elementName === 'status_id' ||
      elementName === 'technical_account_manager' || elementName === 'created_by'
      || elementName === 'problem_our_side' || elementName === 'team_id' || elementName === 'entity_id') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'created_from') {
      this.PeriodFromValue = null;
    } else if (elementName === 'created_to') {
      this.PeriodToValue = null;
    } else if (elementName === 'trading_entity') {
      delete this.inJSON['entity_id'];
      delete this.inJSON[elementName];
      this.entity_id = [];
    } else if (elementName === 'ticket_assignee') {
      delete this.findInSetJSON[elementName];
    } else if(elementName === 'subject'){
      delete this.likeJSON[elementName];
    }
    this.getIncompleteTicketList(1, this.sortBy, this.sortOrder);
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.selectedFilterEntity = null;
    this.createAdvanceFilterForm();
    this.findInSetJSON = {};
    this.equalJSON = {};
    this.likeJSON = {};
    this.inJSON = {};
    this.PeriodFromValue = null;
    this.PeriodToValue = null;
    this.isOpenFilterView = false;
    this.getIncompleteTicketList(1, 'id', 'desc');
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
          'status_id': form.value['status_id'],
          'subject': form.value['subject'],
          'parent_id': form.value['parent_id'],
          'entity_id': form.value['entity_id'],
          'technical_account_manager': form.value['technical_account_manager'],
          'created_by': form.value['created_by'],
          'created_from': form.value['created_from'],
          'created_to': form.value['created_to'],
          'problem_our_side': form.value['problem_our_side'],
          'ticket_assignee': form.value['ticket_assignee'],
          'team_id': form.value['team_id']
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
      // if (form.value['trading_entity'] !== '' && form.value['trading_entity']) {
      //   this.entity_id.push(form.value['trading_entity']);
      //   delete form.value['trading_entity'];
      // }

      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'parent_id' || key === 'code' || key === 'type_id' || key === 'status_id' || key === 'created_by' || key === 'technical_account_manager' || key === 'problem_our_side' || key === 'team_id' || key === 'entity_id') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'subject') {
            this.likeJSON[key] = form.value[key];
          } else if (key === 'ticket_assignee') {
            this.findInSetJSON[key] = [form.value[key]];
          }
        }
      }
      // IF Entity search multiple values
      // if (this.entity_id.length) {
      //   this.inJSON['entity_id'] = this.entity_id.join(',');
      // }
      this.isOpenFilterView = false;
      this.getIncompleteTicketList(1, 'id', 'desc');
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
    this.getIncompleteTicketList(1, sortKey, sortVal);
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};
    filter['notequal'] = {'status_id': 5};

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

  onOpenAssignStaffList(pendingtickets): void {
    const dialogRef = this.dialog.open(PendingTicketAssignStaffDialogComponent, {
      panelClass: 'view-client-dialog-container',
      data: {
        content: pendingtickets.ticket_assignee_name
      }
    });
    dialogRef.afterClosed().subscribe(result => {

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

  /**
   * Download All Document
   */
  downloadAllDocument(ticketId: number) {
    this._commonCrudService.downloadDocument(AdminAPI.TICKET_DOWNLOAD_ZIP + '/' + ticketId).subscribe(response => {
      if (response && response.type) {
        const extension = response.type.split('/');
        FileSaver.saveAs(response, 'TicketDocument - ' + ticketId + moment(new Date()).format('DD-MM-YYYY'));
      }
    });
  }

  /**
   *  edit Ticket redirection
   */
  onEditTicket(pendingTicketsData?: PendingTickets) {
    this._sharedService.setClientData(GLOBALDATAKEYS.PENDING_TICKET, pendingTicketsData);
    window.open(AdminRoutes.ADD_TICKETS, '_blank');
  }


  onViewTicket(pendingTicketsData: PendingTickets) {
    this._sharedService.setClientData(GLOBALDATAKEYS.PENDING_TICKET, pendingTicketsData);
    window.open(AdminRoutes.VIEW_TICKETS, '_blank');
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
