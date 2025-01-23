import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-pending-ticket-assign-staff-dialog',
  templateUrl: './pending-ticket-assign-staff-dialog.component.html'
})
export class PendingTicketAssignStaffDialogComponent implements OnInit {
  ticketAssignee = [];

  // Angular Variables
  constructor(public dialogRef: MatDialogRef<PendingTicketAssignStaffDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.ticketAssignee = (this.data['content']) ? this.data['content'].split(',') : [];
  }

  /**
   * activity dialog redirection
   */
  onCloseDialog(): void {
    this.dialogRef.close();
  }

  // Esc Event
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onCloseDialog();
    }
  }
}
