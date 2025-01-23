import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BaseComponent} from '../../../../../../../../utility/components/base/base.component';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../../../utility/validation';
import {CommonCrudService} from '../../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../../utility/constants/api';

@Component({
  selector: 'add-task-list-dialog',
  templateUrl: './add-task-list-dialog.html',
})
export class AddTaskListDialog extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  // addMasterActivityForm: FormGroup;
  addTaskList: FormGroup;
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

  constructor(
    public dialogRef: MatDialogRef<AddTaskListDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    public _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.createAddMasterActivityForm();
    this.getTaskAndMasterActivity();
    if (this.data.listData) {
      this.buttonFlag = true;
      // console.log(this.data);

      this.isCheckedAdHoc = (this.data.listData.ask_repeat_task === 1) ? true : false;
      this.isCheckedNotes = (this.data.listData.is_complete_task_pop_required === 1) ? true : false;
      this.isCheckedAssignee = (this.data.listData.exclude_assignee === 1) ? true : false;
      this.selectedActivity = this.data.listData.master_activity_id.master_name;
      this.addTaskList.get('master_id').setValue(this.selectedActivity);
      // console.log(this.selectedActivity);
      this.taskValue = this.data.listData.name;

    } else {
      this.buttonFlag = false;
    }
  }

  getTaskAndMasterActivity() {
    this._commonCrudService.listData(AdminAPI.MASTER_CHECKLIST_TASK_DATA, {}, {}).subscribe(response => {
      this.responseHandle(response);
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
    setTimeout(res => {
      this.masterActivityData = masterData;
    }, 500);
  }

  /**
   * Create add Master Activity
   */
  createAddMasterActivityForm() {
    // console.log(this.data);
    this.addTaskList = this._fb.group({
      master_id: new FormControl(null, <any>Validators.required),
      name: new FormControl(null, [<any>Validators.required, <any> Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
      duedate: new FormControl(null),
      addadhocworksheet: new FormControl(null),
      addoutcomenote: new FormControl(null),
      addadditionalassignee: new FormControl(null)
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
    let masterId = '';
    this.masterActivityData.map(response => {
      if (response.name === this.addTaskList.controls['master_id'].value) {
        masterId = response.id;
      }
    });

    this._commonCrudService.updateData(AdminAPI.GET_TASK_LIST, this.data.listData.id, {
      'master_activity_id': +masterId,//this.addTaskList.controls['master_id'].value,
      'name': this.addTaskList.controls['name'].value,
      'ask_repeat_task': (this.addTaskList.controls['addadhocworksheet'].value === true) ? 1 : 0,
      'is_complete_task_pop_required': (this.addTaskList.controls['addoutcomenote'].value === true) ? 1 : 0,
      'exclude_assignee': (this.addTaskList.controls['addadditionalassignee'].value === true) ? 1 : 0,
      '_method': 'put',
      'is_active': this.data.listData.is_active
    }).subscribe(response => {
      // console.log(response);
      this.dialogRef.close();
    });
  }

  saveData() {
    let masterId = '';
    this.masterActivityData.map(response => {
      if (response.name === this.addTaskList.controls['master_id'].value) {
        masterId = response.id;
      }
    });
    // console.log(masterId);
    this._commonCrudService.addData(AdminAPI.GET_TASK_LIST, {
      'master_activity_id': +masterId,//this.addTaskList.controls['master_id'].value,
      'name': this.addTaskList.controls['name'].value,
      'ask_repeat_task': (this.addTaskList.controls['addadhocworksheet'].value === true) ? 1 : 0,
      'is_complete_task_pop_required': (this.addTaskList.controls['addoutcomenote'].value === true) ? 1 : 0,
      'exclude_assignee': (this.addTaskList.controls['addadditionalassignee'].value === true) ? 1 : 0,
      'is_active': 1
    }).subscribe(response => {
      // console.log(response);
      this.dialogRef.close();
    });
  }

  getTaskData(event) {

  }
}


// @Component({
//   selector: 'add-task-list-dialog',
//   templateUrl: './add-task-list-dialog.html',
// })
// export class AddTaskListDialog extends BaseComponent implements OnInit {

//   // Constant Variables
//   validationMsg = new ValidationConstantMessage();

//   // Form Variables
//   addTaskList: FormGroup;

//   constructor(
//     public dialogRef: MatDialogRef<AddTaskListDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder) {
//     super();
//   }

//   ngOnInit() {
//     this.createAddTaskListForm();
//   }

//   /**
//    * Create add TaskList
//    */
//   createAddTaskListForm() {
//     this.addTaskList = this._fb.group({
//       master_id: new FormControl('', <any>Validators.required),
//       name: new FormControl('', <any>Validators.required),
//       duedate: new FormControl(''),
//       addadhocworksheet: new FormControl(''),
//       addoutcomenote: new FormControl(''),
//       addadditionalassignee: new FormControl('')
//     });
//   }

//   onSubmitAddTaskList(form: FormGroup) {
//     if (form.valid) {

//       this.onClose();
//     }
//   }

//   onClose(): void {
//     this.dialogRef.close();
//   }
// }
