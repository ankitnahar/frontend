import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {InformationReminderLog, InformationRequired} from '../information-tab/information-required.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';

@Component({
  selector: 'app-reminder-log-dialog',
  templateUrl: './reminder-log-dialog.component.html'
})
export class ReminderLogDialogComponent implements OnInit {

  // Data Variables
  informationRequired: InformationRequired;
  informationLogList: InformationReminderLog[] = [];

  constructor(public dialogRef: MatDialogRef<ReminderLogDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.informationRequired = (this.data.informationRequired) ? this.data.informationRequired : [];
    this.getInformationLog();
  }

  // Initialization Methods
  getInformationLog() {
    this._commonCrudService.listData(AdminAPI.INFORMATION_REMINDER_LOG_LIST + '/' + this.informationRequired.id, {}, {}).subscribe(response => {
      this.informationLogList = response.payload.data;
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
