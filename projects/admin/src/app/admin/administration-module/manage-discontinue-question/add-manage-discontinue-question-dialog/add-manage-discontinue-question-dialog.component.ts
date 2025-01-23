import {Component, Inject, OnInit} from '@angular/core';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ManageDiscontinueQuestion} from '../manage-discontinue-question.model';
import {activeInactive, discontinueQuestionType, whoFillUp} from '../../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';

@Component({
  selector: 'app-add-manage-discontinue-question-dialog',
  templateUrl: './add-manage-discontinue-question-dialog.component.html'
})
export class AddManageDiscontinueQuestionDialogComponent extends BaseComponent implements OnInit {


  questionListData: ManageDiscontinueQuestion[] = [];
  questionDetail: ManageDiscontinueQuestion;
  whoFillUpList = whoFillUp;
  activeInactivedropdown = activeInactive;
  discontinueQuestionTypedropdown = discontinueQuestionType;

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  addDiscontinueQuestionForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddManageDiscontinueQuestionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.questionDetail = (this.data.discontinueQuestionData) ? this.data.discontinueQuestionData : [];
    this.createAddDiscontinueQuestionForm();
    this.questionList();
  }

  questionList() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
        'table': 'discontinue_question',
        'column': 'id,name',
        'search': '{"compare":{"notequal":{"id":' + this.questionDetail.id + '}}}',
        'sortOrder': 'id',
        'sortBy': 'desc'
      },
      {})
      .subscribe((response) => {
        this.questionListData = response;
      });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  createAddDiscontinueQuestionForm() {
    this.addDiscontinueQuestionForm = this._fb.group({
      who_fillup: new FormControl((this.questionDetail) ? (this.questionDetail.who_fillup) ? this.questionDetail.who_fillup : null : null, <any>Validators.required),
      parent_id: new FormControl((this.questionDetail) ? (this.questionDetail.parent_id) ? this.questionDetail.parent_id.id : null : null),
      name: new FormControl((this.questionDetail) ? (this.questionDetail.name) ? this.questionDetail.name : null : null, <any>Validators.required),
      type: new FormControl((this.questionDetail) ? (this.questionDetail.type >= 0) ? this.questionDetail.type : null : null, <any>Validators.required),
      is_active: new FormControl((this.questionDetail) ? (this.questionDetail.is_active >= 0) ? this.questionDetail.is_active : null : null, <any>Validators.required)
    });
  }

  /**
   * On Submit Form
   * @param form
   */
  onSumbitDiscontinueQuestion(form: FormGroup) {
    if (form.valid) {
      if (form.value['parent_id'] === null) {
        form.value['parent_id'] = 0;
      }

      if (this.questionDetail.id) {
        form.value['_method'] = 'put';
        this._commonCrudService.updateData(AdminAPI.DISCONTINUE_QUESTION_UPDATE, this.questionDetail.id, form.value).subscribe((response) => {
          this.dialogRef.close();
        });

      } else {
        this._commonCrudService.addData(AdminAPI.DISCONTINUE_QUESTION_STORE, form.value).subscribe((response) => {
          this.dialogRef.close();
        });
      }
    }
  }
}

