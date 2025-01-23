import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {DiscontinueEntityLog} from './discontinue-client-log.model';
import {DiscontinueEntity} from '../discontinue-client.model';
import {AdminAPI} from '../../../../../utility/constants/api';
import {BASE} from '../../../../../utility/constants/base-constants';

@Component({
  selector: 'app-dicontinue-client-log-dialog',
  templateUrl: './dicontinue-client-log-dialog.component.html'
})
export class DicontinueClientLogDialogComponent extends BaseComponent implements OnInit {

  // Angular Variables
  discontinueLog: DiscontinueEntityLog[] = [];
  discontinueLogData: DiscontinueEntity;

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;


  constructor(public dialogRef: MatDialogRef<DicontinueClientLogDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.discontinueLogData = (this.data.discontinueEntityData) ? this.data.discontinueEntityData : [];
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this._commonCrudService.listData(AdminAPI.DISCONTINUE_ENTITY_HISTORY + '/' + this.discontinueLogData.id, {},
      {})
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
    if (sortKey) {
      params ['sortBy'] = sortKey;
    }
    if (sortOrder) {
      params ['sortOrder'] = sortOrder;
    }
    return params;
  }

  handleResponse(response: any) {
    // console.log(response['payload']['data']);
    this.discontinueLog = response['payload']['data'];
    this.page = response['pager']['pageNumber'];
    this.pageIndex = this.page - 1;
    this.totalRecords = +(response['pager']['totalRecords']);
    this.sortBy = response['pager']['sortBy'];
    this.sortOrder = response['pager']['sortOrder'];
  }

  /**
   * activity dialog redirection
   */
  onClose(): void {
    this.dialogRef.close();
  }

// Esc Event
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onClose();
    }
  }
}
