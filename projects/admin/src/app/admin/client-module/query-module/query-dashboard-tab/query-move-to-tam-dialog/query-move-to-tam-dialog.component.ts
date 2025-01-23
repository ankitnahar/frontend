import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-query-move-to-tam-dialog',
  templateUrl: './query-move-to-tam-dialog.component.html'
})
export class QueryMoveToTamDialogComponent implements OnInit {

  // Form Variables
  sendBacktoStaffForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<QueryMoveToTamDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.createSendBackToStaffForm();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  createSendBackToStaffForm() {
    this.sendBacktoStaffForm = this._fb.group({
      reason: new FormControl()
    });
  }

}
