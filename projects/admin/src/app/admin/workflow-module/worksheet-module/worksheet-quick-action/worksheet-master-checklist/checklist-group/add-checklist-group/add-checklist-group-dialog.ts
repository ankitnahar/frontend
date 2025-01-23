import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// crud
import {CommonCrudService} from '../../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../../utility/constants/api';
import {BaseComponent} from '../../../../../../../../utility/components/base/base.component';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../../../utility/validation';


@Component({
  selector: 'add-checklist-group-dialog',
  templateUrl: './add-checklist-group-dialog.html',
})

export class AddChecklistGroupDialog extends BaseComponent implements OnInit {

  [x: string]: any;

  masterActivityDefaultSelect: any;
  subActivityDefaultSelect: any;
  subActivity = [];
  masterActivityData: any[];
  // Form Variables
  addCheklistGroupForm: FormGroup;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // data variables
  addChecklistGroupData: any;
  buttonFlag: boolean;

  constructor(private _fb: FormBuilder,
              public _commonCrudService: CommonCrudService,
              public dialogRef: MatDialogRef<AddChecklistGroupDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    // public _masterCheckListService: MasterChecklistService
    super();
  }

  ngOnInit() {
    if (this.data && this.data.checkListGroup) {
      this.buttonFlag = true;
      this.addChecklistGroupData = this.data.checkListGroup.name;
      this.subActivityDefaultSelect = (this.data.checkListGroup.subactivity_id) ? this.data.checkListGroup.subactivity_id.id : null;
      // this.masterActivityDefaultSelect = this.data.checkListGroup.master_checklist_id.id;
      this.sortOrderDefaultSelectData = this.data.checkListGroup.sort_order;
      this.emailDefaultSelect = this.data.checkListGroup.email_content;
      this.timeSheetChecked = (this.data.checkListGroup.is_require_timesheet === 1) ? true : false;
    } else {
      this.buttonFlag = false;
    }
    this.createAddChecklistForm();
    this.getSubactivityData();
    this.getTaskAndMasterActivity();
  }

  /**
   * get activity data
   */
  getTaskAndMasterActivity() {
    // this._masterCheckListService.getMasterCheckListAndTaskData('').subscribe(response => {
    //   this.responseHandle(response);
    // });
    this._commonCrudService.listData(AdminAPI.MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(response => {
      this.responseHandle(response);
    });
  }

  responseHandle(data) {
    let masterData = [];
    let taskDataRef = [];
    for (const i in data.payload.data.masterActivity) {
      if (i) {
        masterData.push({id: i, name: data.payload.data.masterActivity[i]});
      }
    }

    for (const i in data.payload.data.task) {
      if (i) {
        for (let j = 0; j < data.payload.data.task[i].length; j++) {
          taskDataRef.push({
            id: data.payload.data.task[i][j].id,
            masterId: data.payload.data.task[i][j].master_activity_id,
            name: data.payload.data.task[i][j].name
          });
        }
      }
    }
    setTimeout(res => {
      this.masterActivityData = masterData;
    }, 500);
  }

  getSubactivityData() {
    this._commonCrudService.listData(AdminAPI.GET_SUB_ACTIVITY_DATA, {}, {}).subscribe(response => {
      this.handleQualityControlResponse(response);
    });
  }

  handleQualityControlResponse(response) {
    let res = response.payload.data;
    for (const data in res) {
      if (data) {
        this.subActivity.push(
          {
            name: data,
            value: res[data]
          }
        );
      }
    }
  }

  /**
   * Create add checklist group Form
   */
  createAddChecklistForm() {
    this.addCheklistGroupForm = this._fb.group({
      // addMasterChecklist: new FormControl(this.masterActivityDefaultSelect, [<any>Validators.required]),
      addChecklistGroup: new FormControl(this.addChecklistGroupData, [<any>Validators.required, <any> Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
      // addSortOrder: new FormControl(this.sortOrderDefaultSelectData),
      addValidationTimesheet: new FormControl(this.timeSheetChecked),
      addSubActivity: new FormControl(this.subActivityDefaultSelect),
      addEmailContent: new FormControl(this.emailDefaultSelect, [<any> Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)])
    });
  }

  onSubmitAddChecklistGroupForm(form: FormGroup) {
    if (form.valid) {

      this.onClose();
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  updateData() {
    this._commonCrudService.updateData(AdminAPI.CHECKLIST_UPDATE, this.data.checkListGroup.id, {
      // 'master_checklist_id': this.addCheklistGroupForm.controls['addMasterChecklist'].value,
      'name': this.addCheklistGroupForm.controls['addChecklistGroup'].value,
      'subactivity_id': this.addCheklistGroupForm.controls['addSubActivity'].value,
      'is_require_timesheet': this.addCheklistGroupForm.controls['addValidationTimesheet'].value,
      'email_content': this.addCheklistGroupForm.controls['addEmailContent'].value,
      '_method': 'put'
    }).subscribe(response => {
      this.dialogRef.close();
    });
  }

  saveData() {
    this._commonCrudService.addData(AdminAPI.CHECKLIST_SAVE, {
      // 'master_checklist_id': this.addCheklistGroupForm.controls['addMasterChecklist'].value,
      'name': this.addCheklistGroupForm.controls['addChecklistGroup'].value,
      'subactivity_id': this.addCheklistGroupForm.controls['addSubActivity'].value,
      'is_require_timesheet': this.addCheklistGroupForm.controls['addValidationTimesheet'].value,
      'email_content': this.addCheklistGroupForm.controls['addEmailContent'].value,
    }).subscribe(response => {
      this.dialogRef.close();
    });
  }

  checkSubactitivyValidation(value) {
    if (value) {
      this.addCheklistGroupForm.get('addSubActivity').setValidators(<any>Validators.required);
      this.addCheklistGroupForm.get('addSubActivity').updateValueAndValidity();
    } else {
      this.addCheklistGroupForm.get('addSubActivity').setValidators(null);
      this.addCheklistGroupForm.get('addSubActivity').updateValueAndValidity();
    }
  }
}

