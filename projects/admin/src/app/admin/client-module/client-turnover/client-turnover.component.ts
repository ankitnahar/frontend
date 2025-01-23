import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ClientTurnover} from './client-turnover.model';
import {BASE} from '../../../../utility/constants/base-constants';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {Clients} from '../view-client/view-client.model';
import {BehaviorSubject} from 'rxjs';
import {ConfirmationDialogComponent} from '../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {AdminUser, Privilege} from '../../../../utility/shared-model/admin-user.model';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../utility/constants/api';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {SharedService} from '../../../../utility/shared-service/shared.service';

@Component({
  selector: 'app-client-turnover',
  templateUrl: './client-turnover.component.html',
  styleUrls: ['./client-turnover.component.scss'],
  // providers: [CommonCrudService]
})

export class ClientTurnoverComponent implements OnInit {

  // form related variables
  turnoverFilterForm: FormGroup;
  turnoverFilterOuterViewForm: FormGroup;

  // Data Variables
  clientTurnoverList: ClientTurnover[] = [];
  yearList = [];
  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  selectedTurnoverRecord: BehaviorSubject<any> = new BehaviorSubject(null);

  // Pagination related variables
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Sorting Params for client checklist
  clientTurnoverSortBy: string;
  clientTurnoverSortOrder: string;

  // Other Variables
  isOpenFilter = false;
  isOpenHistoryDialog = false;
  isEditTurnover: BehaviorSubject<boolean> = new BehaviorSubject(false);

  isOpenFilterView = false;
  clientList: Clients[] = [];
  userList: AdminUser[] = [];
  selectedAmNotesRecord: BehaviorSubject<any> = new BehaviorSubject(null);
  isEditAmNotes: BehaviorSubject<boolean> = new BehaviorSubject(false);

  tabID = ADMINTABACCESS.CLIENT_CLIENTTURNOVER;
  tabData: Privilege | any[];

  constructor(private _router: Router,
              public dialog: MatDialog,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService
  ) {
  }

  // get form control
  get entityIdField(): AbstractControl {
    return this.turnoverFilterForm.get('entity');
  }

  get yearField(): AbstractControl {
    return this.turnoverFilterForm.get('yearName');
  }

  get totalField(): AbstractControl {
    return this.turnoverFilterForm.get('total');
  }

  get septQuarterField(): AbstractControl {
    return this.turnoverFilterForm.get('sept_qtr');
  }

  get marchQuarterField(): AbstractControl {
    return this.turnoverFilterForm.get('march_qtr');
  }

  get juneQuarterField(): AbstractControl {
    return this.turnoverFilterForm.get('june_qtr');
  }

  get decQuarterField(): AbstractControl {
    return this.turnoverFilterForm.get('dec_qtr');
  }

  ngOnInit() {
    // To Check Access Rights
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.initializationMethod();
  }

  // Initialization Methods
  initializationMethod() {
    this.createTurnoverAdvancedFilterForm();
    this.getClientList();
    this.getYearList();
    this.getClientTurnoverList(1, 'id', 'desc');
  }

  /**
   * Creating advanced filter forms
   */
  createTurnoverAdvancedFilterForm() {
    this.turnoverFilterForm = new FormGroup({
      entity: new FormControl(''),
      yearName: new FormControl(''),
      total: new FormControl(''),
      sept_qtr: new FormControl(''),
      march_qtr: new FormControl(''),
      june_qtr: new FormControl(''),
      dec_qtr: new FormControl('')
    });

    this.turnoverFilterOuterViewForm = new FormGroup({
      entity: new FormControl(''),
      yearName: new FormControl(''),
      total: new FormControl(''),
      sept_qtr: new FormControl(''),
      march_qtr: new FormControl(''),
      june_qtr: new FormControl(''),
      dec_qtr: new FormControl('')
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

  getYearList() {
    this._commonCrudService.listData(AdminAPI.CLIENT_TURNOVER_YEAR_DATA, {}, {})
      .subscribe((response) => {
        this.yearList = response['payload']['data'];
      });
  }

  getClientTurnoverList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.CLIENT_TURNOVER_DATA, this.getClientTurnoverQueryParams(pageNumber, key, val),
      this.getClientTurnoverSearchParams())
      .subscribe((response) => {
        this.handleClientTurnoverResponse(response);
      });
  }

  handleClientTurnoverResponse(response: any) {
    this.clientTurnoverList = response['payload']['data'];
    this.page = response['pager']['pageNumber'];
    this.pageIndex = this.page - 1;
    this.totalRecords = +(response['pager']['totalRecords']);
    this.clientTurnoverSortBy = response['pager']['sortBy'];
    this.clientTurnoverSortOrder = response['pager']['sortOrder'];
  }

  // API calls
  /**
   * Delete turnover record
   * @param {ClientTurnover} turnover
   */
  deleteTurnover(turnover: ClientTurnover) {
    this._commonCrudService.deleteData(AdminAPI.DELETE_CLIENT_TURNOVER, turnover.id).subscribe(() => {
      this.getClientTurnoverList(this.page, this.clientTurnoverSortBy, this.clientTurnoverSortOrder);
    });
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.CLIENT_TURNOVER_EXPORT, params, this.getClientTurnoverSearchParams(), 'Client Turnover ', 0).subscribe(response => {
    });
  }

  // Page events
  /**
   * Getting sorted client question list
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortClientTurnoverList(sortKey: string, sortVal: string) {
    this.getClientTurnoverList(1, sortKey, sortVal);
  }

  /**
   * get client turnover list based on advanced filter
   * @param {FormGroup} form
   */
  turnoverAdvanceFilter(form: FormGroup, flag: boolean = true) {
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
            this.turnoverFilterOuterViewForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }

    if (form.valid && (form.value !== {})) {
      if (form.value['yearName'] !== '' && form.value['yearName']) {
        // converting designation array into comma separator
        form.value['year'] = form.value['yearName'].join();
        delete form.value['yearName'];
      }

      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if ((key === 'total') || (key === 'sept_qtr') || (key === 'march_qtr')
            || (key === 'june_qtr') || (key === 'dec_qtr')) {
            this.likeJSON[key] = form.value[key];
          } else if (((key === 'entity_id') || (key === 'year')) && (form.value[key] !== '')) {
            this.inJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilter = false;
      this.getClientTurnoverList(1, 'id', 'desc');
    }
  }

  /**
   * Reset both filter forms and get default client turnover list
   */
  resetTurnoverFilterForm() {
    this.createTurnoverAdvancedFilterForm();
    this.turnoverFilterForm.patchValue({'entity': []});
    this.turnoverFilterForm.patchValue({'yearName': []});
    this.likeJSON = {};
    this.equalJSON = {};
    this.inJSON = {};
    this.getClientTurnoverList(1, 'id', 'desc');
  }

  turnoverAdvanceFilterKeyUp(event, form: FormGroup, flag: boolean) {
    let processToReq = false;
    if (flag) {
      processToReq = true;
    } else {
      if (event.keyCode === 13) {
        processToReq = true;
      }
    }
    if (processToReq) {
      this.turnoverFilterForm.setValue(
        {
          'entity': form.value['entity'],
          'yearName': form.value['yearName'],
          'total': form.value['total'],
          'sept_qtr': form.value['sept_qtr'],
          'march_qtr': form.value['march_qtr'],
          'june_qtr': form.value['june_qtr'],
          'dec_qtr': form.value['dec_qtr']
        });
      this.turnoverAdvanceFilter(form, false);
    }
  }

  /**
   * Open client turnover modal
   */
  onOpenClientTurnoverModal(turnover?: ClientTurnover) {
    const dialogConfigData: any = {
      data: {
        content: 'Are you sure want to delete?'
      },
      panelClass: 'add-bookkeeping-dialog-panel-container'
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.deleteTurnover(turnover);
      }
    });
  }

  onUpdateClientTurnoverModal(turnover?: ClientTurnover) {
    this.selectedTurnoverRecord.next(turnover);
    this.isEditTurnover.next(true);
  }

  /**
   * Open modal method
   */
  onOpenModal() {
    this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
  }

  /**
   * Open filter method
   */
  onOpenFilter() {
    this.isOpenFilter = true;
  }

  /**
   * Close filter method
   */
  onCloseFilter() {
    this.isOpenFilter = false;
  }

  /**
   * Page change method
   * @param event
   */
  onClientTurnoverPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getClientTurnoverList(event.pageIndex + 1, this.clientTurnoverSortBy,
      this.clientTurnoverSortOrder);
  }

  /**
   * Clear tag method
   * @param {string} elementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.turnoverFilterForm.get(elementName).setValue('');
    this.turnoverFilterOuterViewForm.get(elementName).setValue('');
    if ((elementName === 'total') || (elementName === 'sept_qtr') || (elementName === 'march_qtr') ||
      (elementName === 'june_qtr') || (elementName === 'dec_qtr')) {
      delete this.likeJSON[elementName];
    } else if ((elementName === 'entity') || (elementName === 'yearName')) {
      delete this.inJSON[JsonElementName];
    }
    this.getClientTurnoverList(1, this.clientTurnoverSortBy, this.clientTurnoverSortOrder);
  }

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilter = false;
    }
  }

  // Helper
  /**
   * get function for returning advance query params for client turnover get api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{pageNumber: number; recordsPerPage: number}}
   */
  private getClientTurnoverQueryParams(page: number, sortKey?: string, sortOrder?: string) {
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
   * @returns {{compare: {notequal: {discontinue_stage: number}}}}
   */
  private getClientSearchParam() {
    return {
      compare: {
        notequal: {
          discontinue_stage: 2
        }
      }
    };
  }

  /**
   * getting advanced search params for turnover list api
   * @returns {{}}
   */
  private getClientTurnoverSearchParams() {
    const params = {};
    const filter = {};
    // check for the object whether it's empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }
    if ((Object.keys(this.equalJSON).length) || (Object.keys(this.likeJSON).length)) {
      params['compare'] = filter;
    }
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }
    return params;
  }
}
