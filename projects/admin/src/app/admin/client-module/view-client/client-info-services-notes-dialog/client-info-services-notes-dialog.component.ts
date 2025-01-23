import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DecodeHtmlEntities} from '../../../../../utility/pipe/checkEmpty.pipe';

@Component({
  selector: 'app-client-info-services-notes-dialog',
  templateUrl: './client-info-services-notes-dialog.component.html',
  providers: [DecodeHtmlEntities]
})
export class ClientInfoServicesNotesDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ClientInfoServicesNotesDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private _decodeHTML: DecodeHtmlEntities) {
  }

  notesData: any;

  ngOnInit() {
    this.notesData = (this.data) ? this.data.notesInfo : '';
  }

  /**
   * Close modal method
   */
  onClose(): void {
    this.dialogRef.close();
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

  toHTML(input): any {
    // return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
    return this._decodeHTML.transform(input);
  }
}
