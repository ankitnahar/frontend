import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {WorksheetListing, WorksheetStatusLog} from '../../worksheet-dashboard-tab/worksheet.model';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';

@Component({
  selector: 'worksheet-status-log',
  templateUrl: './worksheet-status-log-dialog.html',
})
export class WorksheetStatusLogDialog implements OnInit {

  dataWorksheet: WorksheetListing;
  statusLogList: WorksheetStatusLog[] = [];

  constructor(
    public dialogRef: MatDialogRef<WorksheetStatusLogDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, public _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.dataWorksheet = (this.data) ? this.data.dataWorksheet : [];
    this.getStatusLogList();
  }

  /**
   * Get Status Log List
   */
  getStatusLogList() {
    this._commonCrudService.listData(AdminAPI.WORKSHEET_STATUS_LOG_LISTING + '/' + this.dataWorksheet.id, {'records': 'all'}, {}).subscribe(response => {
      this.statusLogList = response.payload.data;
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
