import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {WorksheetListing} from '../../worksheet-dashboard-tab/worksheet.model';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';

@Component({
  selector: 'app-worksheet-notes-dialog',
  templateUrl: './worksheet-notes-dialog.component.html'
})
export class WorksheetNotesDialogComponent extends BaseComponent implements OnInit {

  notesForm: FormGroup;
  validationMsg = new ValidationConstantMessage();
  worksheetData: WorksheetListing;

  constructor(
    public dialogRef: MatDialogRef<WorksheetNotesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }


  ngOnInit() {
    this.worksheetData = this.data ? this.data.worksheetItem : null;
    this.createNotesForm();
  }

  /**
   * Close Dialog
   */
  onClose(): void {
    this.dialogRef.close(false);
  }

  /**
   * Create Notes
   */
  createNotesForm() {
    this.notesForm = this._fb.group({
      notes: new FormControl(this.worksheetData ? this.worksheetData.notes : null, <any> Validators.required)
    });
  }

  /***
   * Form Submit notes
   * @param form
   */
  submitNotes(form: FormGroup) {
    if (form.valid) {
      form.value['_method'] = 'put';
      this._commonCrudService.updateData(AdminAPI.UPDATE_WORKSHEET, this.worksheetData.id, form.value).subscribe(response => {
        this.dialogRef.close(true);
      });
    }
  }
}
