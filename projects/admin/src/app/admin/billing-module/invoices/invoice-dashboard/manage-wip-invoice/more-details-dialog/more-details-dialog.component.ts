import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';

@Component({
  selector: 'app-more-details-dialog',
  templateUrl: './more-details-dialog.component.html'
})
export class MoreDetailsDialogComponent extends BaseComponent implements OnInit {

  timesheetDetails = {};

  subactivityCodeDetail = {
    201: 'No Of Transaction',
    202: 'No Of Transaction',
    228: 'No Of Transaction',
    501: 'No Of Invoice',
    505: 'No Of Invoice',
    601: 'No Of Invoice',
    607: 'No Of Invoice',
    701: 'No Of Employee',
    705: 'Year',
    707: 'No Of Employee',
    709: 'No Of Employee',
    404: 'No Of Employee',
    417: 'No Of Employee',
    463: 'No Of Employee',
    462: 'No Of Employee',
    402: 'No Of Employee',
    460: 'No Of Employee',
    447: 'No Of Employee',
  };

  nameOfEmp = [];

  constructor(
    public dialogRef: MatDialogRef<MoreDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    super();
  }

  ngOnInit() {
    this.timesheetDetails = this.data['content'];
    // console.log(this.timesheetDetails);
    if (this.timesheetDetails['name_of_employee'] && this.timesheetDetails['name_of_employee'] !== '"[]"') {
      this.nameOfEmp = JSON.parse(this.timesheetDetails['name_of_employee']);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
