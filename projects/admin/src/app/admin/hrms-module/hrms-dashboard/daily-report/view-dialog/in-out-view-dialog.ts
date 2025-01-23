import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DailyReport} from '../daily-report.model';


@Component({
  selector: 'app-view-dialog',
  templateUrl: './in-out-view-dialog.html',
})

export class InOutViewDialog {
  dailyReport: DailyReport;

  constructor(public dialogRef: MatDialogRef<InOutViewDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.dailyReport = (this.data.dailyReportData) ? this.data.dailyReportData : [];
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
