import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-client-view-dialog',
  templateUrl: './client-view-dialog.component.html'
})
export class ClientViewDialogComponent implements OnInit {
  clientList = [];

  // Angular Variables
  constructor(public dialogRef: MatDialogRef<ClientViewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.clientList = (this.data['content']) ? this.data['content'].split(',') : [];
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
