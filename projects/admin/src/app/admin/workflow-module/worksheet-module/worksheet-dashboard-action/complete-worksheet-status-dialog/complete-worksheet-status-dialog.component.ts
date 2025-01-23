import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {WorksheetListing} from '../../worksheet-dashboard-tab/worksheet.model';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import * as moment from 'moment';
import {DateComparePipe} from "../../../../../../utility/pipe/date-compare.pipe";

@Component({
  selector: 'app-complete-worksheet-status-dialog',
  templateUrl: './complete-worksheet-status-dialog.component.html',
  providers: [DateComparePipe]
})
export class CompleteWorksheetStatusDialogComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  worksheetData: WorksheetListing;

  // Form Variables
  addCompleteWorksheetForm: FormGroup;
  addCompleteWorksheetTaskFormDetails: FormGroup;
  isAddNewTask = null;
  isThereDelay = null;
  isDelayFrom = null;
  isFormDataType = 0;

  constructor(private _DateComparePipe: DateComparePipe,
    public dialogRefData: MatDialogRef<CompleteWorksheetStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder,
    public dialog: MatDialog, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.worksheetData = (this.data.worksheetItem) ? this.data.worksheetItem : [];
    this.isThereDelay =  this._DateComparePipe.transform(this.worksheetData) ? 1 : 2;
    // console.log(this.isThereDelay);
    this.createAddCompleteWorksheetForm();
    this.createAddCompleteTaskWorksheetForm();
  }

  /**
   * Add Complete WorksheetForm
   */
  createAddCompleteTaskWorksheetForm() {
    this.addCompleteWorksheetTaskFormDetails = this._fb.group({
      start_date: new FormControl(this.worksheetData.new_start_date, <any>Validators.required),
      end_date: new FormControl(this.worksheetData.new_end_date, <any>Validators.required),
      due_date: new FormControl(this.worksheetData.new_due_date, <any>Validators.required),
      last_report_sent_date: new FormControl(null, <any>Validators.required),
      notes: new FormControl(this.worksheetData.notes)
    });
  }

  onSubmitAddCompleteWorksheet(form: FormGroup) {
    // console.log(form);
    if (form.valid) {
      form.value['is_there_delay'] = form.value['is_there_delay'] === "2" ? "0" : form.value['is_there_delay'];
      form.value['status_id'] = 4;
      form.value['_method'] = 'put';
      this._commonCrudService.updateData(AdminAPI.UPDATE_WORKSHEET, this.worksheetData.id, form.value).subscribe(response => {
        if (response && form.value['is_create_new_task'] === '1') {
          this._commonCrudService.getData(AdminAPI.REPEAT_WORKSHEET_LIST, this.worksheetData.id).subscribe(responseData => {
            this.isFormDataType = 1;
            this.worksheetData.new_start_date = responseData.payload.data['new_start_date'];
            this.worksheetData.new_end_date = responseData.payload.data['new_end_date'];
            this.worksheetData.new_due_date = responseData.payload.data['new_due_date'];
            this.worksheetData.new_worksheet_master_id = responseData.payload.data['new_worksheet_master_id'];
            this.worksheetData.new_master_activity_id = responseData.payload.data['new_master_activity_id'];
            this.worksheetData.new_task_id = responseData.payload.data['new_task_id'];
            this.worksheetData.new_frequency_id = responseData.payload.data['new_frequency_id'];

            this.addCompleteWorksheetTaskFormDetails.get('start_date').setValue(this.worksheetData.new_start_date);
            this.addCompleteWorksheetTaskFormDetails.get('end_date').setValue(this.worksheetData.new_end_date);
            this.addCompleteWorksheetTaskFormDetails.get('due_date').setValue(this.worksheetData.new_due_date);
          });
        } else {
          this.onClose();
        }
      });
    }
  }

  /**
   * Add Complete WorksheetForm
   */
  createAddCompleteWorksheetForm() {
    this.addCompleteWorksheetForm = this._fb.group({
      is_create_new_task: new FormControl(2, <any>Validators.required),
      is_there_delay: new FormControl(null, <any>Validators.required),
      delay_from: new FormControl(null),
      delay_comment: new FormControl(null),
      delay_from_befree_action: new FormControl(null)
    });
    this.addCompleteWorksheetForm.get('is_there_delay').setValue(this.isThereDelay);
    this.addCompleteWorksheetForm.get('is_there_delay').updateValueAndValidity();
  }

  /**
   * On change type of recurring form
   * @param event
   */
  onChangeType(event: number, type: number) {
    if (type === 1) {
      if (+event === 1) {
        this.isAddNewTask = 1;
      } else {
        this.isAddNewTask = 2;
      }
    } else if (type === 2) {
      if (+event === 1) {
        this.isThereDelay = 1;
        this.addCompleteWorksheetForm.get('delay_from').setValidators(<any> Validators.required);
        this.addCompleteWorksheetForm.get('delay_from').updateValueAndValidity();
        this.addCompleteWorksheetForm.get('delay_comment').setValidators(<any> Validators.required);
        this.addCompleteWorksheetForm.get('delay_comment').updateValueAndValidity();
      } else {
        this.isThereDelay = 2;
        this.isDelayFrom = 0;
        this.addCompleteWorksheetForm.get('delay_from').setValidators(null);
        this.addCompleteWorksheetForm.get('delay_from').setValue(null);
        this.addCompleteWorksheetForm.get('delay_from').updateValueAndValidity();

        this.addCompleteWorksheetForm.get('delay_comment').setValidators(null);
        this.addCompleteWorksheetForm.get('delay_comment').setValue(null);
        this.addCompleteWorksheetForm.get('delay_comment').updateValueAndValidity();

        this.addCompleteWorksheetForm.get('delay_from_befree_action').setValidators(null);
        this.addCompleteWorksheetForm.get('delay_from_befree_action').setValue(null);
        this.addCompleteWorksheetForm.get('delay_from_befree_action').updateValueAndValidity();
      }
    } else if (type === 3) {
      if (+event === 1) {
        this.isDelayFrom = 1;
        this.addCompleteWorksheetForm.get('delay_from_befree_action').setValidators(null);
        this.addCompleteWorksheetForm.get('delay_from_befree_action').setValue(null);
        this.addCompleteWorksheetForm.get('delay_from_befree_action').updateValueAndValidity();
      } else {
        this.isDelayFrom = 2;
        this.addCompleteWorksheetForm.get('delay_from_befree_action').setValidators(<any> Validators.required);
        this.addCompleteWorksheetForm.get('delay_from_befree_action').updateValueAndValidity();
      }
    }
  }

  /**
   * On Submit Complete Worksheet
   * @param form
   */
  onSubmitCompleteWorksheet(form: FormGroup) {
    if (form.valid) {
      form.value['worksheet_master_id'] = this.worksheetData.new_worksheet_master_id;
      form.value['master_activity_id'] = this.worksheetData.new_master_activity_id;
      form.value['entity_id'] = this.worksheetData.entity_id;
      form.value['task_id'] = this.worksheetData.new_task_id;
      form.value['service_id'] = this.worksheetData.service_id;
      form.value['frequency_id'] = this.worksheetData.new_frequency_id;
      form.value['last_report_sent_date'] = moment(form.value['last_report_sent_date']).format('YYYY-MM-DD');
      this._commonCrudService.addData(AdminAPI.REPEAT_WORKSHEET_ADD, form.value).subscribe(response => {
        this.onClose();
      });
    }
  }

  onClose(): void {
    this.dialogRefData.close();
  }
}
