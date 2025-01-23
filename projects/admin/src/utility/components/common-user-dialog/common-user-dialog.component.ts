import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-common-user-dialog',
  templateUrl: './common-user-dialog.component.html'
})
export class CommonUserDialogComponent implements OnInit {
  clientList = [];
  title: string;

  // Angular Variables
  constructor(public dialogRef: MatDialogRef<CommonUserDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.clientList = (this.data['content']) ? this.data['content'].split(',') : [];
    this.title = (this.data['title']) ? this.data['title'] : 'CLIENTS';
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
