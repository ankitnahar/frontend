///<reference path="../snooze-information-dialog/snooze-information-dialog.component.ts"/>
import {Component, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialog, PageEvent} from "@angular/material";
import {Router} from "@angular/router";
import {AdminRoutes} from "../../../../../../utility/constants/admin-route";
import {ConfirmationDialogComponent} from "../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component";
import {InformationAssigneeDialogComponent} from "../information-assignee-dialog/information-assignee-dialog.component";
import {SnoozeInformationDialogComponent} from "../snooze-information-dialog/snooze-information-dialog.component";
import {InformtionLogDialogComponent} from "../informtion-log-dialog/informtion-log-dialog.component";
import {BASE, GLOBALDATAKEYS} from "../../../../../../utility/constants/base-constants";
import {Clients} from "../../../view-client/view-client.model";
import {AdminUser, Privilege} from "../../../../../../utility/shared-model/admin-user.model";
import {ADMINTABACCESS} from "../../../../../../utility/constants/header-constant";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import {SharedService} from "../../../../../../utility/shared-service/shared.service";
import {SharedObjService} from "../../../../../../utility/shared-service/shared-object.service";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {InformationRequired, InformationStatus} from "./information-required.model";
import * as moment from "moment";
import {CommonFunctions} from "../../../../../../utility/common-functions";
import {isUndefined} from "util";
import {ReminderLogDialogComponent} from '../reminder-log-dialog/reminder-log-dialog.component';

@Component({
  selector: 'app-information-tab',
  templateUrl: './information-tab.component.html',
  styleUrls: ['./information-tab.component.scss']
})
export class InformationTabComponent implements OnInit, OnChanges {
  // In-out variable
  @Input() informationSelectedStatus: any;
  @Input() informationselectedTabID: any;
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
  tamList: AdminUser[] = [];
  atlList: AdminUser[] = [];
  tlList: AdminUser[] = [];
  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  // Data Variables
  informationList: InformationRequired[] = [];
  informationStatusList: InformationStatus[] = [];
  trIndex = -1;
  PeriodFromValue = null;
  PeriodToValue = null;

  tabID = ADMINTABACCESS.INFORMATION_REQUIRED;
  tabData: Privilege | any[];

  constructor(private _router: Router, public dialog: MatDialog,
              private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              private _sharedObjService: SharedObjService) {
  }

  // get form control
  get parent_id(): AbstractControl {
    return this.filterForm.get('parent_id');
  }

  get entityIdField(): AbstractControl {
    return this.filterForm.get('entity_id');
  }

  get subjectField(): AbstractControl {
    return this.filterForm.get('subject');
  }

  get fromPeriodField(): AbstractControl {
    return this.filterForm.get('start_period');
  }

  get toPeriodField(): AbstractControl {
    return this.filterForm.get('end_period');
  }

  get stageIdField(): AbstractControl {
    return this.filterForm.get('stage_id');
  }

  get tamField(): AbstractControl {
    return this.filterForm.get('technical_account_manager');
  }

  get atlField(): AbstractControl {
    return this.filterForm.get('associate_team_lead');
  }

  get tlField(): AbstractControl {
    return this.filterForm.get('team_leader');
  }

  get tmField(): AbstractControl {
    return this.filterForm.get('team_member');
  }

  ngOnInit() {
    this.initializationMethod();
  }

  // Initialization Methods
  initializationMethod() {
    // this.getInformationRequiredList(1, 'id', 'desc');
    this.createAdvanceFilterForm();
    this.getClientList();
    this.getUserList();
    this.getInformationStatusList();
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}, 'findinset': {'team_id': [1]}}).subscribe((response) => {
      const tam = response.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 9 : 0);
      this.tamList = tam;
      const tl = response.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 60 : 0);
      this.tlList = tl;
      const atl = response.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 61 : 0);
      this.atlList = atl;
      const staff = response.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 10 : 0);
      this.userList = staff;
    });
  }

  /**
   * Get Information Stage List
   */
  getInformationStatusList() {
    this._commonCrudService.listData(AdminAPI.INFORMATION_REQUIRED_STAGE_LIST, {}, {}).subscribe(response => {
      this.informationStatusList = response.payload.data;
    });
  }

  /**
   * Ng On Changes for status change
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.informationselectedTabID);
    // console.log(this.tabData);
    if (changes['informationSelectedStatus']) {
      if (!isUndefined(this.informationSelectedStatus)) {
        this.getInformationRequiredList(1, 'id', 'desc');
      }
    }
  }

  /**
   * Create Form for filters
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      parent_id: new FormControl(null),
      entity_id: new FormControl(null),
      stage_id: new FormControl(null),
      subject: new FormControl(null),
      start_period: new FormControl(null),
      end_period: new FormControl(null),
      technical_account_manager: new FormControl(null),
      team_leader: new FormControl(null),
      associate_team_lead: new FormControl(null),
      team_member: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      parent_id: new FormControl(null),
      entity_id: new FormControl(null),
      stage_id: new FormControl(null),
      subject: new FormControl(null),
      start_period: new FormControl(null),
      end_period: new FormControl(null),
      technical_account_manager: new FormControl(null),
      associate_team_lead: new FormControl(null),
      team_leader: new FormControl(null),
      team_member: new FormControl(null)
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
   *
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getInformationRequiredList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.INFORMATION_REQUIRED_LIST + '/' + this.informationSelectedStatus, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
      this.handleInformationRequiredResponse(response);
    });
  }

  /**
   * Handle Information Required List Response
   * @param response
   */
  handleInformationRequiredResponse(response: any) {
    this.informationList = response.payload.data;
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
    this.getInformationRequiredList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.INFORMATION_REQUIRED_LIST + '/' + this.informationSelectedStatus, params, this.getSearchParam(), 'Information Required ', 0).subscribe(response => {
    });
  }

  /**
   * On Move to TL or TAM confirmation dialog
   */
  onConfirmationDialog(type: number, moveTo: string, information: InformationRequired) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to move this information to ' + moveTo + '?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        if (type === 1) {
          const param = {};
          param['type'] = 1;
          param['stage_id'] = 2;
          this._commonCrudService.updateData(AdminAPI.INFORMATION_REQUIRED_MOVE_TO_TL, information.id, param).subscribe((response) => {
            this.getInformationRequiredList(1, 'id', 'desc');
          });
        } else if (type === 2) {
          const param = {};
          param['type'] = 2;
          param['stage_id'] = 3;
          this._commonCrudService.updateData(AdminAPI.INFORMATION_REQUIRED_MOVE_TO_TL, information.id, param).subscribe((response) => {
            this.getInformationRequiredList(1, 'id', 'desc');
          });
        } else if (type === 3) {
          const param = {};
          param['type'] = 3;
          param['stage_id'] = 4;
          this._commonCrudService.updateData(AdminAPI.INFORMATION_REQUIRED_MOVE_TO_TL, information.id, param).subscribe((response) => {
            this.getInformationRequiredList(1, 'id', 'desc');
          });
        }
      }
    });
  }

  /**
   * On Edit Information
   * @param information
   */
  onEditInformation(information: InformationRequired) {
    this._sharedService.setClientData(GLOBALDATAKEYS.INFORMATION_REQUIRED, null);
    this._sharedService.setClientData(GLOBALDATAKEYS.INFORMATION_REQUIRED, information);
    this._router.navigate(['/' + AdminRoutes.UPDATE_INFORMATION_REQUIRED]);
  }

  /**
   * On View Information
   * @param information
   */
  onViewInformation(information: InformationRequired) {
    this._sharedService.setClientData(GLOBALDATAKEYS.INFORMATION_REQUIRED, null);
    this._sharedService.setClientData(GLOBALDATAKEYS.INFORMATION_REQUIRED, information);
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.VIEW_INFORMATION_REQUIRED, '_blank');
    });
  }

  /**
   * On view of information log
   * @param information
   */
  onInformationLog(information: InformationRequired) {
    const dialogRef = this.dialog.open(InformtionLogDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        informationRequired: information
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onReminderLog(information: InformationRequired) {
    const dialogRef = this.dialog.open(ReminderLogDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        informationRequired: information
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  /**
   * On Allocate additional user like TL or TAM
   */
  onAllocateUserDialog(information: InformationRequired) {
    const dialogRef = this.dialog.open(InformationAssigneeDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        informationRequired: information
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getInformationRequiredList(1, 'id', 'desc');
      }
    });
  }

  /**
   * On Snooze Information
   * @param information
   */
  onSnoozeinfoDialog(information: InformationRequired) {
    const dialogRef = this.dialog.open(SnoozeInformationDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        informationRequired: information
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getInformationRequiredList(1, 'id', 'desc');
      }
    });
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
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'entity_id' || elementName === 'parent_id') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'subject') {
      delete this.likeJSON[elementName];
    } else if (elementName === 'start_period') {
      this.PeriodFromValue = null;
    } else if (elementName === 'end_period') {
      this.PeriodToValue = null;
    } else if (elementName === 'stage_id') {
      delete this.inJSON[elementName];
    }
    this.getInformationRequiredList(1, this.sortBy, this.sortOrder);
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
    this.getInformationRequiredList(1, 'id', 'desc');
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
          'subject': form.value['subject'],
          'start_period': form.value['start_period'],
          'end_period': form.value['end_period'],
          'stage_id': form.value['stage_id'],
          'technical_account_manager': form.value['technical_account_manager'],
          'team_leader': form.value['team_leader'],
          'associate_team_lead': form.value['associate_team_lead'],
          'team_member': form.value['team_member']
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
            this.advanceFilterForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }

    if (form.value['start_period'] !== '' && form.value['start_period']) {
      this.PeriodFromValue = form.value['start_period'];
      delete form.value['start_period'];
    }
    if (form.value['end_period'] !== '' && form.value['end_period']) {
      this.PeriodToValue = form.value['end_period'];
      delete form.value['end_period'];
    }
    // For Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        console.log(key);
        if (form.value.hasOwnProperty(key)) {
          if (key === 'parent_id' || key === 'entity_id') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'subject') {
            this.likeJSON[key] = encodeURIComponent(form.value[key]);
          } else if (key === 'stage_id') {
            if (form.value[key].length) {
              this.inJSON[key] = form.value[key].join(',');
            }
          }
        }
      }
      this.isOpenFilterView = false;
      this.getInformationRequiredList(1, 'id', 'desc');
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

    if (this.tamField.value) {
      params['technical_account_manager'] = this.tamField.value;
    }
    if (this.tlField.value) {
      params['team_leader'] = this.tlField.value;
    }
    if (this.atlField.value) {
      params['associate_team_lead'] = this.atlField.value;
    }
    if (this.tmField.value) {
      params['team_member'] = this.tmField.value;
    }
    return params;
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getInformationRequiredList(1, sortKey, sortVal);
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
      filter['greaterthanequal']['start_period'] = moment(this.PeriodFromValue).format('YYYY-MM-DD');
    }
    if (this.PeriodToValue) {
      filter['lessthanequal']['end_period'] = moment(this.PeriodToValue).format('YYYY-MM-DD');
    }
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

  /**
   * On Delete Information
   * @param queryData
   */
  onDeleteInformation(information: InformationRequired) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this information?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.deleteData(AdminAPI.INFORMATION_REQUIRED_LIST, information.id).subscribe(Response => {
          this.getInformationRequiredList(1, 'id', 'desc');
        });
      }
    });
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
