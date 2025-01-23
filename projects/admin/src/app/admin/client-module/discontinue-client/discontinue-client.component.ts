import {Component, HostListener, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {AddDiscontinueClientDialogComponent} from './add-discontinue-client-dialog/add-discontinue-client-dialog.component';
import {DiscontinueCommentsDialogComponent} from './discontinue-comments-dialog/discontinue-comments-dialog.component';
import {DiscontinueReasonDialogComponent} from './discontinue-reason-dialog/discontinue-reason-dialog.component';
import {DicontinueClientLogDialogComponent} from './dicontinue-client-log-dialog/dicontinue-client-log-dialog.component';
import {ConfirmationDialogComponent} from '../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {BASE, GLOBALDATAKEYS} from '../../../../utility/constants/base-constants';
import {DiscontinueEntity, Status} from './discontinue-client.model';
import {AdminAPI} from '../../../../utility/constants/api';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {Clients} from '../view-client/view-client.model';
import {AdminUser, Privilege} from '../../../../utility/shared-model/admin-user.model';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import * as moment from 'moment';
import {CommonFunctions} from '../../../../utility/common-functions';
import {DiscontinueCommentsDialog} from './discontinue-comments-dialog/discontinue-client-comment.model';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';

@Component({
  selector: 'app-discontinue-client',
  templateUrl: './discontinue-client.component.html',
  styleUrls: ['./discontinue-client.component.scss']
})
export class DiscontinueClientComponent implements OnInit {

  // Data Variable
  discontinueEntityList: DiscontinueEntity[] = [];
  clientList: Clients[] = [];
  clientListParent: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  staffListData: AdminUser[] = [];
  statusListData: Status[] = [];
  tamList: AdminUser[] = [];
  tlList: AdminUser[] = [];
  atlList: AdminUser[] = [];
  tamId: any;
  tlId: any;
  atlId: any;
  DiscontinueCommentsDialog: DiscontinueCommentsDialog[] = [];
  discontinuedOnFrom = null;
  discontinuedOnTo = null;
  contractSignFrom = null;
  contractSignTo = null;
  defaultStage = {id: '7', name: 'Division head', status: '1'};

  tagList: any[] = [];
  equalJSON = {};
  findinSet = {};
  inJSON = {};
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

  // Other Variables
  isOpenFilterView = false;
  isOpenHistoryDialog = false;
  isRestore = false;

  // State variables
  trIndex = -1;

  tabID = ADMINTABACCESS.DISCONTINUE_CLIENT;
  tabData: Privilege | any[];

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog,
              private _commonCrudService: CommonCrudService, private _sharedService: SharedService,
              private _sharedObjService: SharedObjService) {
  }


  // get form control
  get parentTradingName(): AbstractControl {
    return this.filterForm.get('parent_id');
  }

  get tradingName(): AbstractControl {
    return this.filterForm.get('entity_id');
  }

  get contractsigneddateTo(): AbstractControl {
    return this.filterForm.get('contract_signed_date_to');
  }

  get contractsigneddateFrom(): AbstractControl {
    return this.filterForm.get('contract_signed_date_from');
  }

  get discontinuedateonFrom(): AbstractControl {
    return this.filterForm.get('discontinued_on_from');
  }

  get discontinuedateonTo(): AbstractControl {
    return this.filterForm.get('discontinued_on_to');
  }

  get discontinuedBy(): AbstractControl {
    return this.filterForm.get('discontinue_by');
  }

  get statusField(): AbstractControl {
    return this.filterForm.get('status');
  }

  get technical_account_manager(): AbstractControl {
    return this.filterForm.get('technical_account_manager');
  }

  get team_lead(): AbstractControl {
    return this.filterForm.get('team_lead');
  }

  get assistant_team_lead(): AbstractControl {
    return this.filterForm.get('assistant_team_lead');
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.isRestore = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'discontinue_restore_client', 1);
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    // this.getDiscontinueEntityList(1, 'id', 'desc');
    this.createAdvanceFilterForm();
    this.setAdvanceFilter(this.filterForm);
    this.entityList();
    this.getUserList();
    this.statusList();
  }

  entityList() {
    this._sharedObjService.getClientList({'records': 'all'}, {'compare': {'notequal': {'discontinue_stage': 0}}}).subscribe((response) => {
      this.clientList = this.filteredTradingClientList = response;
      this.clientListParent = response.filter(item => item.is_parent === 1);
    });
  }

  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.staffListData = response;
      this.tamList = response.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 9 : 0);
      this.tlList = response.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 60 : 0);
      this.atlList = response.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 61 : 0);
    });
  }

  statusList() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      'table': 'discontinue_status',
      'column': 'id,status',
    }, {}).subscribe((response) => {
      this.statusListData = response;
    });
  }

  getDiscontinueEntityList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.DISCONTINUE_ENTITY_LISTING, this.getQueryParams(pageNumber, key, val),
      this.getSearchParams())
      .subscribe((response) => {
        this.handleResponse(response);
      });
  }

  /**
   * getting advanced search params for conference room list api
   * @returns {{}}
   */
  private getSearchParams() {
    const params = {};
    const filter = {};

    if (this.discontinuedOnTo || this.contractSignTo) {
      filter['lessthanequal'] = {};
    }

    if (this.discontinuedOnFrom || this.contractSignFrom) {
      filter['greaterthanequal'] = {};
    }

    if (this.discontinuedOnFrom) {
      filter['greaterthanequal']['discontinue_on'] = moment(this.discontinuedOnFrom).format('YYYY-MM-DD');
    }

    if (this.discontinuedOnTo) {
      filter['lessthanequal']['discontinue_on'] = moment(this.discontinuedOnTo).format('YYYY-MM-DD');
    }

    if (this.contractSignFrom) {
      filter['greaterthanequal']['contract_signed_date'] = moment(this.contractSignFrom).format('YYYY-MM-DD');
    }

    if (this.contractSignTo) {
      filter['lessthanequal']['contract_signed_date'] = moment(this.contractSignTo).format('YYYY-MM-DD');
    }

    // check for the object whether it's empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.equalJSON).length || !CommonFunctions.isEmpty(filter)) {
      params['compare'] = filter;
    }
    if (Object.keys(this.inJSON).length) {
      params['in'] = this.inJSON;
    }
    return params;
  }

  // Helper
  /**
   * get function for returning advance query params for conference room get api
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
    if (this.tamId) {
      params['technical_account_manager'] = this.tamId;
    }

    if (this.tlId) {
      params['team_lead'] = this.tlId;
    }

    if (this.atlId) {
      params['assistant_team_lead'] = this.atlId;
    }

    if (sortKey) {
      params ['sortBy'] = sortKey;
    }
    if (sortOrder) {
      params ['sortOrder'] = sortOrder;
    }
    return params;
  }

  handleResponse(response: any) {
    this.discontinueEntityList = response['payload']['data'];
    this.page = response['pager']['pageNumber'];
    this.pageIndex = this.page - 1;
    this.totalRecords = +(response['pager']['totalRecords']);
    this.sortBy = response['pager']['sortBy'];
    this.sortOrder = response['pager']['sortOrder'];
  }

  /**
   * Create Change InOut
   */
  createAdvanceFilterForm() {
    // this.status =
    this.filterForm = this._fb.group({
      parent_id: new FormControl(null),
      entity_id: new FormControl(null),
      contract_signed_date_from: new FormControl(null),
      contract_signed_date_to: new FormControl(null),
      discontinue_by: new FormControl(null),
      discontinued_on_from: new FormControl(null),
      discontinued_on_to: new FormControl(null),
      status: new FormControl([1, 2, 3]),
      technical_account_manager: new FormControl(null),
      team_lead: new FormControl(null),
      assistant_team_lead: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      parent_id: new FormControl(null),
      entity_id: new FormControl(null),
      contract_signed_date_from: new FormControl(null),
      contract_signed_date_to: new FormControl(null),
      discontinue_by: new FormControl(null),
      discontinued_on_from: new FormControl(null),
      discontinued_on_to: new FormControl(null),
      status: new FormControl([1, 2, 3]),
      technical_account_manager: new FormControl(null),
      team_lead: new FormControl(null),
      assistant_team_lead: new FormControl(null)
    });
  }


  // Events
  openRow(i) {
    this.trIndex = (this.trIndex !== i) ? i : -1;
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

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getDiscontinueEntityList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * On View Client Redirect
   * @param clientData
   */
  onViewClient(clientData: DiscontinueEntity) {
    this._commonCrudService.getData(AdminAPI.CLIENT_BASIC, clientData.entity_id, {'tab': 1}).subscribe(response => {
      const data = response.payload.data;
      if (data) {
        this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT, data);
        this._router.navigate(['/' + AdminRoutes.VIEW_UPDATE_CLIENT]);
      }
    });
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  onViewDiscontinueDetails(discontinueDetail: DiscontinueEntity, stageData: any) {
    discontinueDetail['clickedStage'] = stageData;
    this._sharedService.setDiscontinueClientData(GLOBALDATAKEYS.DISCONTINUE_CLIENT, null);
    this._sharedService.setDiscontinueClientData(GLOBALDATAKEYS.DISCONTINUE_CLIENT, discontinueDetail);
    this._router.navigate(['/' + AdminRoutes.VIEW_DISCONTINUE_CLIENT_DETAILS]);
  }

  /**
   *On generate excel report
   */
  onExcelReport(discontinueDetail: DiscontinueEntity) {
    const params = {'exceldownload': 1};
    this._commonCrudService.downloadExcelData(AdminAPI.DISCONTINUE_ENTITY_QUESTION_EXPORT + '/' + discontinueDetail.id, params, {}, 'Discontinue client question detail - ', 0).subscribe(response => {
    });
  }

  // onEditClientDiscontinueForm() {
  //   this._router.navigate(['/' + AdminRoutes.EDIT_DISCONTINUE_FORM]);
  // }

  /**
   *
   * @param discontinueDetail
   * @param stageData
   */
  onStageQuestion(discontinueDetail: DiscontinueEntity, stageData: any) {
    if (discontinueDetail && stageData) {
      discontinueDetail['clickedStage'] = stageData;
      this._sharedService.setDiscontinueClientData(GLOBALDATAKEYS.DISCONTINUE_CLIENT, null);
      this._sharedService.setDiscontinueClientData(GLOBALDATAKEYS.DISCONTINUE_CLIENT, discontinueDetail);
      this._router.navigate(['/' + AdminRoutes.EDIT_DISCONTINUE_FORM]);
    }
  }

  onDiscontinueCommentDialog(discontinueComment: DiscontinueCommentsDialog) {
    const dialogRef = this.dialog.open(DiscontinueCommentsDialogComponent, {
      panelClass: 'lg-dialog--container',
      data: {
        discontinueCommentData: (discontinueComment) ? discontinueComment : []
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  onDiscontinueReasonDialog(discontinueComment: DiscontinueCommentsDialog) {
    const dialogRef = this.dialog.open(DiscontinueReasonDialogComponent, {
      panelClass: 'lg-dialog--container',
      data: {
        discontinueCommentData: (discontinueComment) ? discontinueComment : []
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getDiscontinueEntityList(1, 'id', 'desc');
    });
  }

  onDiscontinueClientLogDialog(discontinueDetail: DiscontinueEntity) {
    const dialogRef = this.dialog.open(DicontinueClientLogDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        discontinueEntityData: (discontinueDetail) ? discontinueDetail : []
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onDiscontinueClientDialog() {
    const dialogRef = this.dialog.open(AddDiscontinueClientDialogComponent, {
      panelClass: 'add-form-dialog-container',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getDiscontinueEntityList(1, 'id', 'desc');
    });
  }

  /**
   * Open confirmation dialog  Restore client
   */
  onOpenRestoreClientModal(discontinueDetail: DiscontinueEntity) {
    const dialogConfigData: any = {
      data: {
        content: 'Are you sure you want to restore this client?'
      },
      panelClass: 'add-bookkeeping-dialog-panel-container'
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        const param = {'entity_id': discontinueDetail.entity_id};
        this._commonCrudService.updateData(AdminAPI.DISCONTINUE_ENTITY_RESTORE, discontinueDetail.id, param).subscribe((response) => {
          this.getDiscontinueEntityList(1, 'id', 'desc');
        });
      }
    });
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilterView = false;
    }
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {};
    this.findinSet = {};
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

    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'parent_id' || key === 'entity_id' || key === 'discontinue_by') {
            // if (key === 'date') {
            //   this.equalJSON[key] = moment(form.value[key]).format('YYYY-MM-DD');
            // } else {
            this.equalJSON[key] = form.value[key];
            // }
          }

          if (key === 'status')
            this.inJSON[key] = form.value[key].join(',');
        }
      }

      if (form.value['discontinued_on_from'] !== '' && form.value['discontinued_on_from']) {
        this.discontinuedOnFrom = form.value['discontinued_on_from'];
        delete form.value['discontinued_on_from'];
      }

      if (form.value['discontinued_on_to'] !== '' && form.value['discontinued_on_to']) {
        this.discontinuedOnTo = form.value['discontinued_on_to'];
        delete form.value['discontinued_on_from'];
      }

      if (form.value['contract_signed_date_from'] !== '' && form.value['contract_signed_date_from']) {
        this.contractSignFrom = form.value['contract_signed_date_from'];
        delete form.value['contract_signed_date_from'];
      }

      if (form.value['contract_signed_date_to'] !== '' && form.value['contract_signed_date_to']) {
        this.contractSignTo = form.value['contract_signed_date_to'];
        delete form.value['contract_signed_date_to'];
      }
      this.tamId = form.value['technical_account_manager'];
      this.tlId = form.value['team_lead'];
      this.atlId = form.value['assistant_team_lead'];
      this.isOpenFilterView = false;
      this.getDiscontinueEntityList(1, 'id', 'desc');
    }
  }

  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.equalJSON = {};
    this.findinSet = {};
    this.discontinuedOnFrom = null;
    this.discontinuedOnTo = null;
    this.contractSignFrom = null;
    this.contractSignTo = null;
    this.isOpenFilterView = false;
    this.getDiscontinueEntityList(1, 'id', 'desc');
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
          'parent_id': (form.value['parent_id']) ? form.value['parent_id'] : null,
          'entity_id': (form.value['entity_id']) ? form.value['entity_id'] : null,
          'contract_signed_date_to': form.value['contract_signed_date_to'],
          'contract_signed_date_from': form.value['contract_signed_date_from'],
          'discontinue_by': (form.value['discontinue_by']) ? form.value['discontinue_by'] : null,
          'discontinued_on_to': form.value['discontinued_on_to'],
          'discontinued_on_from': form.value['discontinued_on_from'],
          'status': form.value['status'],
          'technical_account_manager': form.value['technical_account_manager'],
          'team_lead': form.value['team_lead'],
          'assistant_team_lead': form.value['assistant_team_lead']
        });
      this.setAdvanceFilter(form, false);
    }
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};

    if (this.atlId) {
      params['assistant_team_lead'] = this.atlId;
    }

    if (this.tlId) {
      params['team_lead'] = this.tlId;
    }
    if (this.tamId) {
      params['technical_account_manager'] = this.tamId;
    }
    this._commonCrudService.downloadExcelData(AdminAPI.DISCONTINUE_ENTITY_LISTING, params, this.getSearchParams(), 'Discontinue client', 0).subscribe(response => {
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
    if (elementName === 'technical_account_manager') {
      this.tamId = '';
    } else if (elementName === 'assistant_team_lead') {
      this.atlId = '';
    }  else if (elementName === 'team_lead') {
      this.tlId = '';
    } else if (elementName === 'parent_id' || elementName === 'entity_id' || elementName === 'discontinue_by') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'contract_signed_date_to') {
      this.contractSignTo = null;
    } else if (elementName === 'contract_signed_date_from') {
      this.contractSignFrom = null;
    } else if (elementName === 'discontinued_on_from') {
      this.discontinuedOnFrom = null;
    } else if (elementName === 'discontinued_on_to') {
      this.discontinuedOnTo = null;
    } else if (elementName === 'status') {
      delete this.inJSON[JsonElementName];
      delete this.inJSON[elementName];
    }
    this.getDiscontinueEntityList(1, this.sortBy, this.sortOrder);
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
