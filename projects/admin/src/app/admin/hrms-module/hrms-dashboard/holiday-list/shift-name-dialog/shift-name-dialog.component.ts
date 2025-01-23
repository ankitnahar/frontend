import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-shift-name-dialog',
  templateUrl: './shift-name-dialog.component.html'
})
export class ShiftNameDialogComponent implements OnInit {
  shiftList = [];

  // Angular Variables
  constructor(public dialogRef: MatDialogRef<ShiftNameDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.shiftList = (this.data['content']) ? this.data['content'].split(',') : [];
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
