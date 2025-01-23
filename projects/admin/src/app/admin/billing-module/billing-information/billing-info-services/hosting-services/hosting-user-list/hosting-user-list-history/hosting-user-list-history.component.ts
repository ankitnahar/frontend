import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-hosting-user-list-history',
  templateUrl: './hosting-user-list-history.component.html'
})
export class HostingUserListHistoryComponent {

  constructor(public dialogRef: MatDialogRef<HostingUserListHistoryComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
