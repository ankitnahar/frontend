import {Component, EventEmitter, HostListener, OnDestroy, OnInit, Output} from '@angular/core';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {UpdateClientHistoryService} from './update-client-history.service';
import {HistoryRecords} from './update-client-history.model';
import * as moment from 'moment';
import {BASE} from '../../../../../../utility/constants/base-constants';

@Component({
  selector: 'app-update-client-history',
  templateUrl: './update-client-history.component.html',
  styleUrls: ['./update-client-history.component.scss'],
  providers: [UpdateClientHistoryService]
})
export class UpdateClientHistoryComponent implements OnInit, OnDestroy {

  // Angular Variables
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  // Data related variable
  historyURLSubscriber: any;
  historyUrl: string;
  historyQueryParams: any;
  historySearchParams: any;
  historyList: HistoryRecords[] = [];
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

  constructor(private _sharedService: SharedService,
              private _updateClientHistoryService: UpdateClientHistoryService) {
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

  // Initialization Methods
  /**
   * Get history data for respective tab based on passed URL
   * @param {string} url
   */
  getHistoryList(url: string, pageNumber: number) {
    this._updateClientHistoryService.getHistoryData(url, this.getHistoryQueryParams(pageNumber), this.getHistorySearchParams())
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
    this.historyList.forEach((history) => {
      history['changesList'] = Object.values(JSON.parse(history.changes));
    });
    this.page = response['pager']['pageNumber'];
    this.pageIndex = this.page - 1;
    this.totalRecords = +(response['pager']['totalRecords']);
  }

  // Page events
  /**
   * Change event called when start date or end date changed
   */
  onChangeDate() {
    this.getHistoryList(this.historyUrl, 1);
  }

  /**
   * Close modal method
   */
  onClose() {
    this.close.emit(false);
  }

  onClientHistoryListPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getHistoryList(this.historyUrl, event.pageIndex + 1);
  }

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
}
