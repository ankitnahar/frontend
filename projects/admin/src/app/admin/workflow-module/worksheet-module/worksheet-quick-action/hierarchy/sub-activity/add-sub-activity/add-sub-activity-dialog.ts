import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BaseComponent} from '../../../../../../../../utility/components/base/base.component';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../../../utility/validation';
import {CommonCrudService} from '../../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../../utility/constants/api';

@Component({
  selector: 'add-sub-activity-dialog',
  templateUrl: './add-sub-activity-dialog.html',
})
export class AddSubActivityDialog extends BaseComponent implements OnInit {

  subactivityDefaultData: any;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  addSubActivity: FormGroup;

  // Data variables
  masterActivityData = [];
  teamData = [];
  isChecked: any;
  buttonFlag: boolean;
  selectedActivity: any;
  selectedTeam: any;
  isCheckedAdHoc: any;
  isCheckedNotes: any;
  isCheckedAssignee: any;
  taskValue: any;
  taskData = [];
  selectedTask: any;

  constructor(
    public dialogRef: MatDialogRef<AddSubActivityDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    public _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.createAddSubActivityForm();
    this.getTaskAndMasterActivity();
    this.getMasterActivityList();
    // console.log(this.data.subActivity);
    if (this.data && this.data.subActivity) {
      this.buttonFlag = true;
      this.selectedTask = this.data.subActivity.task_id.id;
      this.subactivityDefaultData = this.data.subActivity.subactivity_name;
      this.selectedActivity = this.data.subActivity.master_id.id;
      this.addSubActivity.get('master_id').setValue(this.selectedActivity);
    } else {
      this.buttonFlag = false;
    }
  }

  getMasterActivityList() {
    this._commonCrudService.listData(AdminAPI.GET_TASK_LIST, {'records': 'all'}, {}).subscribe(response => {
      this.handleQualityControlResponse(response);
    });
  }

  handleQualityControlResponse(response) {
    this.taskData = response.payload.data;
    // console.log(this.taskData);
  }

  getTaskAndMasterActivity() {
    this._commonCrudService.listData(AdminAPI.MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(response => {
      this.responseHandle(response);
    });
  }

  responseHandle(data) {
    for (const i in data.payload.data.masterActivity) {
      if (i) {
        this.masterActivityData.push({id: Number(i), name: data.payload.data.masterActivity[i]});
      }
    }
    // console.log(this.masterActivityData);
    this.addSubActivity.get('master_id').setValue(Number(this.selectedActivity));
    this.addSubActivity.get('master_id').updateValueAndValidity();
    // let masterData = [];
    // let taskDataRef = [];
    // console.log(data);
    // for (const i in data.payload.data.masterActivity) {
    //   if (i) {
    //     masterData.push({ id: i, name: data.payload.data.masterActivity[i] });
    //   }
    // }
    //
    // for (const i in data.payload.data.task) {
    //   if (i) {
    //     for (let j = 0; j < data.payload.data.task[i].length; j++) {
    //       taskDataRef.push({ id: data.payload.data.task[i][j].id, masterId: data.payload.data.task[i][j].master_activity_id, name: data.payload.data.task[i][j].name });
    //     }
    //   }
    // }
    // this.masterActivityData = masterData;


    // this.masterActivityData = masterData;
    // console.log(this.selectedActivity);
    // setTimeout(res => {
    //   this.masterActivityData = masterData;
    //   this.addSubActivity.get('master_id').setValue(this.selectedActivity);
    //   this.addSubActivity.get('master_id').updateValueAndValidity();
    //   console.log(this.selectedActivity);
    //   console.log(this.addSubActivity.get('master_id'));
    // }, 500);
  }

  /**
   * Create add Sub Activity
   */
  createAddSubActivityForm() {
    this.addSubActivity = this._fb.group({
      master_id: new FormControl((this.selectedActivity > 0) ? this.selectedActivity : null, <any>Validators.required),
      task_id: new FormControl(null, <any>Validators.required),
      subactivity_name: new FormControl(null, [<any>Validators.required, Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)])
    });
  }

  onSubmitAddSubActivity(form: FormGroup) {
    if (form.valid) {

      this.onClose();
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  updateData() {
    // console.log(this.addSubActivity.controls['master_id'].value);
    // console.log(this.addSubActivity.controls['task_id'].value);
    // console.log(this.addSubActivity.controls['subactivity_name'].value);

    this._commonCrudService.updateData(AdminAPI.GET_SUB_ACTIVITY, this.data.subActivity.id, {
      'master_activity_id': this.addSubActivity.controls['master_id'].value,
      'task_id': this.addSubActivity.controls['task_id'].value,
      'subactivity_name': this.addSubActivity.controls['subactivity_name'].value,
      '_method': 'put',
      'is_active': this.data.subActivity.is_active
    }).subscribe(response => {
      // console.log(response);
      this.dialogRef.close();
    });
  }

  saveData() {
    this._commonCrudService.addData(AdminAPI.GET_SUB_ACTIVITY, {
      'master_activity_id': this.addSubActivity.controls['master_id'].value,
      'task_id': this.addSubActivity.controls['task_id'].value,
      'subactivity_name': this.addSubActivity.controls['subactivity_name'].value,
      'is_active': 1
    }).subscribe(response => {
      // console.log(response);
      this.dialogRef.close();
    });
  }
}
