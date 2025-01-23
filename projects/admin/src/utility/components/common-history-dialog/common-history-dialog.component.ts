import {Component, EventEmitter, HostListener, Inject, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BaseComponent} from '../base/base.component';
import {BASE} from '../../constants/base-constants';
import {SharedService} from '../../shared-service/shared.service';
import * as moment from 'moment';
import {HistoryService} from '../../shared-service/history.service';
import {History} from '../../shared-model/history.model';
import {subActivityData} from '../../constants/billing-constant';

@Component({
  selector: 'app-common-history-dialog',
  templateUrl: './common-history-dialog.component.html',
  styleUrls: ['./common-history-dialog.component.scss'],
  providers: [HistoryService]
})

export class CommonHistoryDialogComponent extends BaseComponent implements OnInit, OnDestroy {

  // Angular Variables
  @Input() dialogStatus;
  @Output() close = new EventEmitter<any>();

  // Data related variable
  historyURLSubscriber: any;
  historyUrl: string;
  historyQueryParams: any;
  historySearchParams: any;
  historyList: History[] = [];
  formatType: number;

  // Pagination related variables
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Date variables
  startDateValue = null;
  endDateValue = null;
  billingInfoConstant = subActivityData;

  constructor(
    public dialogRef: MatDialogRef<CommonHistoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _sharedService: SharedService,
    private _historyService: HistoryService) {
    super();
  }

  ngOnInit() {
    this.historyURLSubscriber = this._sharedService.getHistoryURL().subscribe((value) => {
      this.historyUrl = value['url'];
      if (value['params']) {
        this.historyQueryParams = value['params'];
      }
      if (value['searchParams']) {
        this.historySearchParams = value['searchParams'];
      }
      this.getHistoryList(this.historyUrl, 1);
    });
  }

  /**
   * Get history data for respective tab based on passed URL
   * @param {string} url
   */
  getHistoryList(url: string, pageNumber: number) {
    this._historyService.getHistoryData(url, this.getHistoryQueryParams(pageNumber), this.getHistorySearchParams())
      .subscribe((response) => {
        this.handleHistoryDataResponse(response);
      });
  }

  /**
   * Handle History Response
   * @param response
   */
  handleHistoryDataResponse(response: any) {
    this.historyList = response['payload']['data'];
    this.formatType = (response['payload']['format']) ? response['payload']['format'] : 0;
    // console.log(this.historyList);
    this.historyList.forEach((history) => {
      // console.log(history);
      if (this.formatType === 3) {
        // console.log(history);
        const datachangesList = JSON.parse(history.changes);
        history['changesList'] = [];
        const datachangesListKey = Object.keys(JSON.parse(history.changes));
        history['changesListKeys'] = datachangesListKey;
        // console.log(datachangesList);
        let j = 0;
        Object.keys(datachangesList).forEach(item => {
          history['changesList'][datachangesListKey[j]] = Object.values(datachangesList[item]);
          // datachangesList.forEach(item => {
          //   history['changesList'][datachangesListKey[j]] = item;
          j++;
        });
      } else {
        history['changesList'] = Object.values(JSON.parse(history.changes));
      }
      // console.log(history);
    });
    this.page = response['pager']['pageNumber'];
    this.pageIndex = this.page - 1;
    this.totalRecords = +(response['pager']['totalRecords']);
  }

  onChangeDate() {
    this.getHistoryList(this.historyUrl, 1);
  }

  onChangeEndDate(event: Event) {
    if (!this.startDateValue) {
      this.startDateValue = new Date();
    }
  }

  onClientHistoryListPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getHistoryList(this.historyUrl, event.pageIndex + 1);
  }

  /**
   * Close Dialog
   */
  onClose(): void {
    this.dialogRef.close();
  }

  // Esc Event
  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onClose();
    }
  }

  ngOnDestroy() {
    if (this.historyURLSubscriber) {
      this.historyURLSubscriber.unsubscribe();
    }
  }

  // Helper
  /**
   * Get History Query Param
   * @param {number} page
   * @returns {any}
   */
  private getHistoryQueryParams(page: number) {
    let params;
    if (this.historyQueryParams && Object.keys(this.historyQueryParams).length !== 0) {
      params = this.historyQueryParams;
    } else {
      params = {};
    }
    params['pageNumber'] = page;
    params['recordsPerPage'] = this.pageSize;
    params['sortOrder'] = 'desc';
    return params;
  }

  /**
   * Get API search params - to get history data based on start date and end date
   * @returns {{}}
   */
  private getHistorySearchParams() {
    let params;
    if (this.historySearchParams && Object.keys(this.historySearchParams).length !== 0) {
      params = this.historySearchParams;
    } else {
      params = {};
    }
    const filter = {};
    const startFilterData = {};
    const endFilterData = {};
    if (this.startDateValue) {
      const startDate = moment(this.startDateValue).format('YYYY-MM-DD');
      startFilterData['modified_on'] = startDate;
      filter['greaterthanequal'] = startFilterData;
    }
    if (this.endDateValue) {
      const endDate = moment(this.endDateValue).format('YYYY-MM-DD');
      endFilterData['modified_on'] = endDate;
      filter['lessthanequal'] = endFilterData;
    }
    if (Object.keys(filter).length !== 0) {
      params['compare'] = filter;
    }
    return params;
  }

  /**
   *
   * @param dateString
   * @returns {boolean}
   */
  isValidDate(dateString) {
    const dateFormat = 'YYYY-MM-DD';
    const result = moment(dateString, dateFormat, true).isValid(); // return true
    return result;
  }

  /**
   *
   * @param fieldName
   */
  getFieldName(fieldName: string, subActivityCode: number) {
    if (fieldName) {
      const fieldData = this.billingInfoConstant[subActivityCode];
      if (fieldData) {
        const itemData = fieldData.filter(item => item['key'] === fieldName.toLowerCase());
        return (itemData.length) ? itemData[0].label : fieldName;
      } else {
        return fieldName;
      }
    }
  }
}
