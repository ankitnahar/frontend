import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import { MasterChecklistService } from '../master-checklist.service';
import {AdminAPI} from '../../../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../../../utility/shared-service/common-crud.service';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../../../utility/validation';
import {BaseComponent} from '../../../../../../../../utility/components/base/base.component';

@Component({
  selector: 'add-master-checklist-dialog',
  templateUrl: './add-master-checklist-dialog.html',
  providers: [CommonCrudService]
  // MasterChecklistService
})
export class AddMasterChecklistDialog extends BaseComponent implements OnInit {

  // Form Variables
  addMasterCheklistForm: FormGroup;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // data variables
  taskData = [];
  masterActivityData = [];
  taskDataMain = [];
  selectBoxData: any;
  taskIdData: any;

  constructor(private _fb: FormBuilder,
              public dialogRef: MatDialogRef<AddMasterChecklistDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _commonCrudService: CommonCrudService) {
    // public _masterCheckListService: MasterChecklistService,
    super();
  }

  ngOnInit() {
    this.getTaskAndMasterActivity();
    this.createAddMasterChecklistForm();
  }

  /**
   * Create add checklist group Form
   */
  createAddMasterChecklistForm() {
    if (this.data.edit_data) {
      this.addMasterCheklistForm = this._fb.group({
        addMasterChecklist: new FormControl(this.data ? this.data.edit_data.name : null, [<any>Validators.required, <any> Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
        addMasterActivity: new FormControl(this.data ? this.data.edit_data.master_activity_id : null, <any>Validators.required),
        addTask: new FormControl(this.data ? this.data.edit_data.task_id : null, <any>Validators.required)
      });
    } else {
      this.addMasterCheklistForm = this._fb.group({
        addMasterChecklist: new FormControl(null, [<any>Validators.required, <any> Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
        addMasterActivity: new FormControl(null, <any>Validators.required),
        addTask: new FormControl(null, <any>Validators.required)
      });
    }
  }

  onSubmitAddMasterChecklistForm(form: FormGroup) {
    // 111111111111
    // if (form.valid) {
    //     this._masterCheckListService.updateMasterCheckListData(data.id, { "name": '0', 'master_activity_id': '', 'task_id': '', '_method': 'put' }).subscribe(response => {
    //     });
    //     this.onClose();
    // }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  getTaskAndMasterActivity() {
    // this._masterCheckListService.getMasterCheckListAndTaskData('').subscribe(response => {
    //     this.responseHandle(response);
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
    if (this.data.edit_data && this.data.edit_data.master_activity_id.id) {
      this.selectBoxData = (this.data.edit_data.master_activity_id) ? this.data.edit_data.master_activity_id.id : 0;
      this.taskIdData = (this.data.edit_data.task_id) ? this.data.edit_data.task_id.id : 0;

    }
    setTimeout(res => {
      this.masterActivityData = masterData;
      this.taskData = taskDataRef;
      if (this.data.edit_data) {
        this.getTaskData({value: this.selectBoxData});
      }
    }, 500);
  }

  getTaskData(event) {
    // console.log(event);
    const masterActivityId = event.id;
    this.taskDataMain = [];
    for (let j = 0; j < this.taskData.length; j++) {
      if (this.taskData[j].masterId === +masterActivityId) {
        this.taskDataMain.push({
          masterId: this.taskData[j].masterId,
          id: this.taskData[j].id,
          name: this.taskData[j].name
        });
      }
    }
    // console.log(this.taskDataMain);
  }

  updateFunction() {
    this._commonCrudService.updateData(AdminAPI.UPDATE_MASTER_CHECKLIST_DATA, this.data.edit_data.id, {
      'name': this.addMasterCheklistForm.controls['addMasterChecklist'].value,
      'master_activity_id': this.addMasterCheklistForm.controls['addMasterActivity'].value,
      'task_id': this.addMasterCheklistForm.controls['addTask'].value,
      '_method': 'put'
    }).subscribe(response => {
      this.onClose();
    });
  }

  addFunction() {
    // this._masterCheckListService.addMasterCheckListData({
    //     'name': this.addMasterCheklistForm.controls['addMasterChecklist'].value,
    //     'master_activity_id': this.addMasterCheklistForm.controls['addMasterActivity'].value,
    //     'task_id': this.addMasterCheklistForm.controls['addTask'].value,
    //     'is_active': 1
    // }).subscribe(response => {
    //     this.onClose();
    // });
    // return this._apiManager.post(AdminAPI.SAVE_MASTER_CHECKLIST_DATA, params, this._apiManager.HttpOptions, true, true);

    this._commonCrudService.addData(AdminAPI.SAVE_MASTER_CHECKLIST_DATA, {
      'name': this.addMasterCheklistForm.controls['addMasterChecklist'].value,
      'master_activity_id': this.addMasterCheklistForm.controls['addMasterActivity'].value,
      'task_id': this.addMasterCheklistForm.controls['addTask'].value,
      'is_active': 1
    }).subscribe(response => {
      this.onClose();
    });
  }
}
