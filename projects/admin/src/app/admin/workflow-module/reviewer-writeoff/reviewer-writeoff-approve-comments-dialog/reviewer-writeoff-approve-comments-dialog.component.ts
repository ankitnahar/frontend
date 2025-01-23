import {Component, Inject, OnInit} from '@angular/core';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LastSixWorksheet, ReviewerWriteoff} from '../reviewer-writeoff.model';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../utility/constants/api';

@Component({
  selector: 'app-reviewer-writeoff-approve-comments-dialog',
  templateUrl: './reviewer-writeoff-approve-comments-dialog.component.html'
})
export class ReviewerWriteoffApproveCommentsDialogComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Form Variables
  reviewerApproveForm: FormGroup;
  reviewWriteOffData: ReviewerWriteoff;
  // Form Variables
  lastSixWorksheet: LastSixWorksheet[] = [];
  isEditOrView = 0;
  reasonData = [];

  constructor(public dialogRef: MatDialogRef<ReviewerWriteoffApproveCommentsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.reviewWriteOffData = (this.data.reviewData) ? this.data.reviewData : [];
    this.isEditOrView = (this.data.iseditView) ? this.data.iseditView : 0;
    this.getReasonfromObject(this.reviewWriteOffData);
    this.getLastSixWorksheet();
    this.createReviewerApproveForm();
  }

  /**
   * Get Reason Form Object If its store
   * @param reviewerData
   */

  getReasonfromObject(reviewerData: ReviewerWriteoff) {
    const itemData = JSON.parse(reviewerData.reviewer_reason);
    if (itemData) {
      if (itemData['allData']) {
        this.reasonData = itemData['allData'];
      }
    }
  }

  /**
   * Get Last Worksheet
   */
  getLastSixWorksheet() {
    this._commonCrudService.listData(AdminAPI.REVIEWER_WRITEOFF_SIX_WORKSHEET + '/' + this.reviewWriteOffData.id, {'recordsPerPage': 6}, {
      'compare': {'equal': {'status_id': '4'}, 'notequal': {'budgeted_unit': 0}}
    }).subscribe((response) => {
      this.lastSixWorksheet = response.payload.data;
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  createReviewerApproveForm() {
    this.reviewerApproveForm = this._fb.group({
      technical_head_comment: new FormControl('', <any>Validators.required)
    });
  }


  /**
   * On Submit Form
   * @param form
   */
  onSumbitReason(form: FormGroup) {
    if (form.valid) {
      form.value['_method'] = 'put';
      form.value['comment_by'] = 2;
      this._commonCrudService.updateData(AdminAPI.REVIEWER_WRITEOFF_UPDATE, this.reviewWriteOffData.id, form.value).subscribe((response) => {
        this.dialogRef.close();
      });
    }
  }
}
