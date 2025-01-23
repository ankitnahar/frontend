import {Component, Inject, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../../../utility/validation';
import {QuestionViewChecklist} from '../client-checklist.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../utility/constants/api';


@Component({
  selector: 'app-add-cleint-checklist-question-dialog',
  templateUrl: './add-question-dialog.component.html'
})

export class AddClientChecklistQuestionDialog extends BaseComponent implements OnInit {


  questionViewChecklist: QuestionViewChecklist[] = [];

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Data related variables
  checklistList: QuestionViewChecklist[] = [];
  selectedChecklist: QuestionViewChecklist;
  groupList: any[] = [];

  // FormGroup variables
  addChecklistQuestionForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddClientChecklistQuestionDialog>,
              private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    super();
  }

  ngOnInit() {
    this.initializeMethod();
  }

  // Initialization methods
  initializeMethod() {
    this.checklistList = this.data['checklistList'];
    this.createChecklistQuestionForm();
  }

  /**
   * Creating Question Form
   */
  createChecklistQuestionForm() {
    this.addChecklistQuestionForm = this._fb.group({
      entity_checklist_id: new FormControl('', [<any>Validators.required]),
      checklist_group_id: new FormControl('', [<any>Validators.required]),
      question_name: new FormControl('', [<any>Validators.required]),
      help_text: new FormControl(''),
      is_applicable: new FormControl('')
    });
  }

  // API call
  /**
   * Get group list based on selected checklist
   * @param {number} id
   */
  getGroupList(id: number) {
    /* This API is getting called whenever user change checklist because of the reason in future they wanted
     to change the way group list get based on different checklist.*/
    this._commonCrudService.listData(AdminAPI.GROUP_DATA + '/' + id, {}, {})
      .subscribe((response) => {
        this.handleGroupListResponse(response);
      });
  }

  handleGroupListResponse(response: any) {
    this.groupList = [];
    const groupObj = response['payload']['group'];
    for (const key in groupObj) {
      if (groupObj.hasOwnProperty(key)) {
        this.groupList.push({
          id: key,
          value: groupObj[key]
        });
      }
    }
  }

  // Page events
  /**
   * function to call when user submit the valid form
   * @param {FormGroup} form
   */
  onSubmitChecklistQuestionForm(form: FormGroup) {
    if (form.valid) {
      form.value['entity_checklist_id'] = form.value['entity_checklist_id']['id'];
      form.value['is_applicable'] = +(form.value['is_applicable']);
      form.value['checklist_group_id'] = +(form.value['checklist_group_id']);
      this._commonCrudService.addData(AdminAPI.ADD_ADDITIONAL_QUESTION + '/' + this.selectedChecklist.id, form.value)
        .subscribe((response) => {
          this.onCloseDialog(this.selectedChecklist);
        });
    }
  }

  /**
   * Function to call when user change checklist
   * @param {QuestionViewChecklist} checklist
   */
  onSelectChecklist(checklist: QuestionViewChecklist) {
    this.selectedChecklist = checklist;
    this.getGroupList(checklist.id);
  }

  /**
   * On closing dialog
   * @param {QuestionViewChecklist} checklist
   */
  onCloseDialog(checklist: QuestionViewChecklist) {
    this.dialogRef.close(checklist);
  }
}
