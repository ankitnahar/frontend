import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {QueryDataList, QueryReminderLog} from '../query.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';

@Component({
  selector: 'app-query-reminder-log-dialog',
  templateUrl: './query-reminder-log-dialog.component.html'
})
export class QueryReminderLogDialogComponent implements OnInit {

  // Data Variables
  queryDataList: QueryDataList;
  queryLogList: QueryReminderLog[] = [];

  constructor(public dialogRef: MatDialogRef<QueryReminderLogDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.queryDataList = (this.data.queryData) ? this.data.queryData : [];
    this.getQueryLog();
  }

  // Initialization Methods
  getQueryLog() {
    this._commonCrudService.listData(AdminAPI.QUERY_LOG_REMINDER_LIST + '/' + this.queryDataList.id, {}, {}).subscribe(response => {
      this.queryLogList = response.payload.data;
    });
  }

  /**
   * Close modal method
   */
  onClose(): void {
    this.dialogRef.close(true);
  }

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onClose();
    }
  }
}
