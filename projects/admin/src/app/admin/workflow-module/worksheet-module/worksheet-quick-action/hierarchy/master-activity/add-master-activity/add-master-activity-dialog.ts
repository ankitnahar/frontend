import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {BaseComponent} from '../../../../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../../../../utility/validation';
import {CommonCrudService} from '../../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../../utility/constants/api';

@Component({
  selector: 'add-master-activity-dialog',
  templateUrl: './add-master-activity-dialog.html',
})
export class AddMasterActivityDialog extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  addMasterActivityForm: FormGroup;

  // Data variables
  masterActivityData = [];
  teamData = [];
  isChecked: any;
  buttonFlag: boolean;
  selectedActivity: any;
  selectedTeam: any;

  constructor(
    public dialogRef: MatDialogRef<AddMasterActivityDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    public _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.getTaskAndMasterActivity();
    this.getTaskData();
    this.createAddMasterActivityForm();
    if (this.data && this.data.activityData) {
      this.buttonFlag = true;
      this.isChecked = (this.data.activityData.inschedule === 1) ? true : false;
      this.selectedActivity = this.data.activityData.name;
      this.selectedTeam = this.getArrayToString(this.data.activityData.user_team_id, ',');
      this.addMasterActivityForm.get('addworksheetschedule').setValue(this.isChecked);
      this.addMasterActivityForm.get('addmasteractivity').setValue(this.selectedActivity);
      this.addMasterActivityForm.get('addmasterteam').setValue(this.selectedTeam);
    } else {
      this.buttonFlag = false;
    }
  }

  getTaskAndMasterActivity() {
    this._commonCrudService.listData(AdminAPI.MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(response => {
      // console.log(response);
      this.responseHandle(response);
    });
  }

  getTaskData() {
    // console.log(this.data);
    this._commonCrudService.listData(AdminAPI.TEAM, {}, {}).subscribe(response => {
      this.responseTeamHandle(response);
    });
  }

  responseTeamHandle(data) {
    let allData = data.payload.data;
    // console.log(allData);
    allData.filter(response => {
      // console.log(response);
      this.teamData.push({'id': response.id, 'name': response.team_name, 'is_active': response.is_active});
    });
  }

  responseHandle(data) {
    let masterData = [];
    let taskDataRef = [];
    // console.log(data);
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

    //  setTimeout(res => {
    this.masterActivityData = masterData;
    // }, 500);
    // console.log(this.masterActivityData);
  }

  /**
   * Create add Master Activity
   */
  createAddMasterActivityForm() {
    // console.log(this.data);
    this.addMasterActivityForm = this._fb.group({
      addmasteractivity: new FormControl(null, <any>Validators.required),
      addmasterteam: new FormControl(null),
      addworksheetschedule: new FormControl(null)
    });
  }

  onSubmitAddMasterActivity(form: FormGroup) {
    if (form.valid) {

      this.onClose();
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  updateData() {
    this._commonCrudService.updateData(AdminAPI.MASTER_ACTIVITY, this.data.activityData.id, {
      'name': this.addMasterActivityForm.controls['addmasteractivity'].value,
      'team_id': this.addMasterActivityForm.controls['addmasterteam'].value.join(','),
      'is_active': this.data.activityData.is_active,
      '_method': 'put',
      'inschedule': (this.addMasterActivityForm.controls['addworksheetschedule'].value === true) ? 1 : 0
    }).subscribe(response => {
      // console.log(response);
    });
  }

  saveData() {
    this._commonCrudService.addData(AdminAPI.MASTER_ACTIVITY, {
      'name': this.addMasterActivityForm.controls['addmasteractivity'].value,
      'team_id': this.addMasterActivityForm.controls['addmasterteam'].value.join(','),
      'is_active': 1,
      'inschedule': (this.addMasterActivityForm.controls['addworksheetschedule'].value === true) ? 1 : 0
    }).subscribe(response => {
      // console.log(response);
    });
  }

  /**
   * Get array values from string
   * @param {string} value
   * @param {string} seperator
   * @returns {string[]}
   */
  getArrayToString(value: string, seperator: string) {
    if (value) {
      const valueOne = [];
      value.split(seperator).map(item => {
        valueOne.push(Number(item));
      });
      return valueOne;
    }
  }
}
