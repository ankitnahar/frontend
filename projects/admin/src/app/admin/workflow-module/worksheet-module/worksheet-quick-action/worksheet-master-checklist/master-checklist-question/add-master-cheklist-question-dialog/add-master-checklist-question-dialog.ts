import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonCrudService} from '../../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../../utility/constants/api';
import {ChecklistGroupComponent} from '../../checklist-group/checklist-group.component';
import {BaseComponent} from '../../../../../../../../utility/components/base/base.component';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../../../utility/validation';

// import { MasterChecklistQuestionService } from '../master-checklist-question.service';

@Component({
  selector: 'add-master-checklist-question-dialog',
  templateUrl: './add-master-checklist-question-dialog.html',
  providers: [CommonCrudService]
  // MasterChecklistQuestionService,
})
export class AddMasterChecklistQuestionDialog extends BaseComponent implements OnInit {

  // Form Variables
  addMasterChecklistQuestionForm: FormGroup;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  //data variables
  masterChackList = [];
  groupArray = [];
  masterCheckListSelectedData: number;
  groupSelectedValue: string;
  objectData = [];

  constructor(private _fb: FormBuilder,
              public dialogRef: MatDialogRef<ChecklistGroupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public _commonCrudService: CommonCrudService) {
    // public _masterCheckListQuestion: MasterChecklistQuestionService,
    super();
  }

  ngOnInit() {
    this.getChecklistGroup();
    this.createAddMasterChecklistQuestionForm();
    this.getData();
    this.changeMasterCheckList({id: ''});
  }

  getData() {
    this._commonCrudService.listData(AdminAPI.MASTER_CHECKLIST_LISTEING, {'records': 'all'}, {}).subscribe(response => {
      const mapData = response.payload.data;
      this.masterChackList = [];
      mapData.filter(mapRes => {
        if (mapRes.name) {
          this.masterChackList.push({id: mapRes.id, name: mapRes.name});
        }
      });
    });
    if (this.data.masterData) {
      // console.log(this.data.masterData);
      this.masterCheckListSelectedData = this.data.masterData.master_checklist_id;
      this.groupSelectedValue = this.data.masterData.checklist_group_id;
      this.addMasterChecklistQuestionForm.controls['addMasterChecklist'].setValue(this.masterCheckListSelectedData);
      this.addMasterChecklistQuestionForm.controls['addGroup'].setValue(this.groupSelectedValue);
      this.addMasterChecklistQuestionForm.controls['addQuestion'].setValue(this.data.masterData.question_name);
      this.addMasterChecklistQuestionForm.controls['addHelpText'].setValue(this.data.masterData.help_text);
      this.changeMasterCheckList({'id': this.masterCheckListSelectedData});
    } else {
      // for add
    }
  }

  getChecklistGroup() {
    this._commonCrudService.listData(AdminAPI.GET_MASTER_CHECKLIST_GROUP, {'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe(response => {
      this.groupArray = response.payload.data;
    });
  }

  changeMasterCheckList(event, init?: any) {
    // this.groupArray = [];
    this._commonCrudService.getData(AdminAPI.GET_GROUP_DATA, event.id, {}, {}).subscribe(response => {
      if (response.payload.data[0].masteractivityname) {
        this.addMasterChecklistQuestionForm.controls['addMasterChecklistread'].setValue(response.payload.data[0].masteractivityname);
      }
      if (response.payload.data[0].taskname) {
        this.addMasterChecklistQuestionForm.controls['addTask'].setValue(response.payload.data[0].taskname);
      }
    });
  }

  /**
   * Create add checklist group Form
   */
  createAddMasterChecklistQuestionForm() {
    this.addMasterChecklistQuestionForm = this._fb.group({
      addMasterChecklist: new FormControl(null, <any>Validators.required),
      addMasterChecklistread: new FormControl(null),
      addTask: new FormControl(null),
      addGroup: new FormControl((this.data.length) ? this.data.masterData.groupName : null, <any>Validators.required),
      addQuestion: new FormControl(null, [<any>Validators.required, <any> Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
      addHelpText: new FormControl(null, [<any> Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)])
    });
  }

  onSubmitAddMasterChecklistQuestionForm(form: FormGroup) {
    if (form.valid) {

      this.onClose();
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  updateData() {
    if (this.addMasterChecklistQuestionForm.valid) {
      let groupId = '';
      this.groupArray.filter(data => {
        if (data.name === this.addMasterChecklistQuestionForm.controls['addGroup'].value) {
          groupId = data.id;
        }
      });

      this._commonCrudService.updateData(AdminAPI.UPDATE_MASTER_CHECKLIST_ALL_DATA, this.data.masterData.id,
        {
          'master_checklist_id': this.addMasterChecklistQuestionForm.controls['addMasterChecklist'].value,
          'checklist_group_id': this.addMasterChecklistQuestionForm.controls['addGroup'].value,
          'question_name': this.addMasterChecklistQuestionForm.controls['addQuestion'].value,
          'help_text': this.addMasterChecklistQuestionForm.controls['addHelpText'].value,
          'is_active': this.data.masterData.is_active,
          '_method': 'put'
        }).subscribe(response => {
        this.onClose();
      });
    }
  }

  saveData() {
    if (this.addMasterChecklistQuestionForm.valid) {
      let groupId = '';
      this.groupArray.filter(data => {
        if (data.name === this.addMasterChecklistQuestionForm.controls['addGroup'].value) {
          groupId = data.id;
        }
      });

      this._commonCrudService.addData(AdminAPI.ADD_MASTER_CHECKLIST_ALL_DATA, {
        'master_checklist_id': this.addMasterChecklistQuestionForm.controls['addMasterChecklist'].value,
        'checklist_group_id': this.addMasterChecklistQuestionForm.controls['addGroup'].value,
        'question_name': this.addMasterChecklistQuestionForm.controls['addQuestion'].value,
        'help_text': this.addMasterChecklistQuestionForm.controls['addHelpText'].value,
        'is_active': 1,
      }).subscribe(response => {
        this.onClose();
      });
    }
  }
}
