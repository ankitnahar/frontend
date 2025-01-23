import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {QueryDataList, QueryLog} from "../query.model";

@Component({
  selector: 'app-query-log-dialog',
  templateUrl: './query-log-dialog.component.html'
})
export class QueryLogDialogComponent implements OnInit {

  // Data Variables
  queryDataList: QueryDataList;
  queryLogList: QueryLog[] = [];

  constructor(public dialogRef: MatDialogRef<QueryLogDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.queryDataList = (this.data.queryData) ? this.data.queryData : [];
    this.getQueryLog();
  }

  // Initialization Methods
  getQueryLog() {
    this._commonCrudService.listData(AdminAPI.QUERY_LOG_LIST + '/' + this.queryDataList.id, {}, {}).subscribe(response => {
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
