import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder} from '@angular/forms';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';

@Component({
  selector: 'app-archived-list-view',
  templateUrl: './archived-list-view.component.html'
})
export class ArchivedListViewComponent extends BaseComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ArchivedListViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder) {
    super();
  }


  ngOnInit() {
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

}
