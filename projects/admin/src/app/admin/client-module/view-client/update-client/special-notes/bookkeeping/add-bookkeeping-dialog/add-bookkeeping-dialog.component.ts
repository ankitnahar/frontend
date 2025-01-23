import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationConstantMessage} from '../../../../../../../../utility/validation';
import {BaseComponent} from '../../../../../../../../utility/components/base/base.component';
import {SpecialNotesData} from '../../special-notes.model';
import * as moment from 'moment';
import {CommonCrudService} from '../../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../../utility/constants/api';

@Component({
  selector: 'app-add-bookkeeping-dialog',
  templateUrl: './add-bookkeeping-dialog.component.html',
})
export class AddBookkeepingDialogComponent extends BaseComponent implements OnInit {
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  addBookkeepingForm: FormGroup;

  // Data related variables
  noteData: any;
  currentDate = new Date();

  constructor(public dialogRef: MatDialogRef<AddBookkeepingDialogComponent>,
              private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    super();
  }

  // Get methods
  get expiryOnField(): AbstractControl {
    return this.addBookkeepingForm.get('expiry_on');
  }

  ngOnInit() {
    if (this.data['specialNote']) {
      this.noteData = this.data['specialNote'];
      this.createBookkeepingForm(this.noteData);
    } else {
      this.createBookkeepingForm();
    }
  }

  // Initialization Methods
  /**
   * Creating special note form
   * @param {SpecialNotesData} noteData
   */
  createBookkeepingForm(noteData?: SpecialNotesData) {
    this.addBookkeepingForm = this._fb.group({
      note: new FormControl((noteData ? noteData['note'] : ''), [<any>Validators.required]),
      type: new FormControl((noteData ? (noteData['type'].toString()) : ''), [<any>Validators.required]),
      expiry_on: new FormControl((noteData ? noteData['expiry_on'] : ''), [<any>Validators.required])
    });
    if (noteData) {
      this.onCheckNoteType(noteData['type'].toString());
    }
  }

  // Page events
  /**
   * On submit special note form
   * @param {FormGroup} form
   */
  onSubmitBookkeepingForm(form: FormGroup) {
    if (form.valid) {
      form['value']['service_id'] = this.data['serviceId'];
      form['value']['entity_id'] = this.data['clientInformation']['id'];
      if (form['value']['expiry_on']) {
        form['value']['expiry_on'] = moment(form['value']['expiry_on']).format('YYYY-MM-DD');
      } else {
        form['value']['expiry_on'] = '';
      }
      if (this.noteData) {
        form['value']['_method'] = 'put';
        this._commonCrudService.updateData(AdminAPI.CLIENT_SPECIAL_NOTES, this.noteData.id, form.value).subscribe(() => {
          this.onCloseDialog();
        });
      } else {
        this._commonCrudService.addData(AdminAPI.ADD_SPECIAL_NOTES, form.value).subscribe(() => {
          this.onCloseDialog();
        });
      }
    }
  }

  /**
   * Event called when selecting or changing note type -> Permanent or temporary
   * @param value
   */
  onCheckNoteType(value) {
    (value === '1') ? (this.disableControl(this.expiryOnField)) : (this.enableControl(this.expiryOnField));
  }

  /**
   * On close dialog
   */
  onCloseDialog() {
    this.dialogRef.close();
  }

  // Helper
  /**
   * Common function to disable passed form control
   * @param {AbstractControl} field
   */
  disableControl(field: AbstractControl) {
    field.disable();
  }

  /**
   * Common function to enable passed form control
   * @param {AbstractControl} field
   */
  enableControl(field: AbstractControl) {
    field.enable();
  }

}
