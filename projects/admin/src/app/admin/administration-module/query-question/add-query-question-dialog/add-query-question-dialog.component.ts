import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {activeInactive} from '../../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {QueryQuestion} from "../../../client-module/query-module/query-dashboard-tab/query.model";

@Component({
  selector: 'app-add-query-question-dialog',
  templateUrl: './add-query-question-dialog.component.html'
})
export class AddQueryQuestionDialogComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  activeInactiveList = activeInactive.slice(1);

  queryQuestionDetail: QueryQuestion;
  // Form Variable
  addQueryQuestionForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddQueryQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _router: Router, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.queryQuestionDetail = (this.data.queryQuestionData) ? this.data.queryQuestionData : [];
    this.createAddQueryQuestionForm();
  }

  /**
   * Add Query Question Form
   */
  createAddQueryQuestionForm() {
    this.addQueryQuestionForm = this._fb.group({
      question_name: new FormControl((this.queryQuestionDetail) ? (this.queryQuestionDetail.question_name) ? this.queryQuestionDetail.question_name : null : null, <any>Validators.required),
      is_active: new FormControl((this.queryQuestionDetail) ? (this.queryQuestionDetail.is_active) ? this.queryQuestionDetail.is_active : null : null, <any>Validators.required),
    });
  }

  /**
   * On Submit Form
   * @param form
   */
  onSubmit(form: FormGroup) {
    if (form.valid) {
      if (this.queryQuestionDetail.id) {
        form.value['_method'] = 'put';
        this._commonCrudService.updateData(AdminAPI.QUERY_QUESTION_UPDATE, this.queryQuestionDetail.id, form.value).subscribe((response) => {
          this.dialogRef.close(true);
        });

      } else {
        this._commonCrudService.addData(AdminAPI.QUERY_QUESTION_STORE, form.value).subscribe((response) => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  onClose(value: boolean): void {
    this.dialogRef.close(value);
  }
}
