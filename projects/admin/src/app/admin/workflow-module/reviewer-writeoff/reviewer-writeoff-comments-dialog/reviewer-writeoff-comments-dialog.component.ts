import {Component, Inject, OnInit} from '@angular/core';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ReviewerWriteoff} from '../reviewer-writeoff.model';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {ReasonManagement} from '../reason-management.model';

@Component({
  selector: 'app-reviewer-writeoff-comments-dialog',
  templateUrl: './reviewer-writeoff-comments-dialog.component.html'
})
export class ReviewerWriteoffCommentsDialogComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  reviewWriteOffData: ReviewerWriteoff;
  // Form Variables
  reviwerReasoncommentForm: FormGroup;
  reasonList: ReasonManagement[] = [];
  isEditOrView = 0;

  constructor(public dialogRef: MatDialogRef<ReviewerWriteoffCommentsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.reviewWriteOffData = (this.data.reviewData) ? this.data.reviewData : [];
    this.isEditOrView = (this.data.iseditView) ? this.data.iseditView : 0;
    this.createReviwerReasoncommentForm();
    if (this.reviewWriteOffData.is_reviewer_done <= 0) {
      this.getReasonOfReviewer();
    } else {
      this.getReasonfromObject(this.reviewWriteOffData);
    }
  }

  /**
   * Get Reason Form Object If its store
   * @param reviewerData
   */
  getReasonfromObject(reviewerData: ReviewerWriteoff) {
    const itemData = JSON.parse(reviewerData.reviewer_reason);
    if (itemData) {
      if (itemData['allData']) {
        itemData['allData'].forEach(item => {
          this.getFilterFieldArray().push(this.createReasonGroup(item));
        });
      }
    }
  }

  /**
   * Get Reason Of Reviewer
   */
  getReasonOfReviewer() {
    this._commonCrudService.listData(AdminAPI.REVIEWER_WRITEOFF_REASON_LIST, {'records': 'all'}, {
      'compare': {
        'equal': {
          'category_id': 3,
          'is_active': 1,
          'is_deleted': 0
        }
      }
    }).subscribe((response) => {
      this.reasonList = response.payload.data;
      if (this.reasonList.length) {
        this.reasonList.forEach(item => {
          const itemData = [];
          itemData['id'] = item.id;
          itemData['reason'] = item.reason;
          itemData['selected'] = 0;
          this.getFilterFieldArray().push(this.createReasonGroup(itemData));
        });
      }
      const otherReason = [];
      otherReason['id'] = 0;
      otherReason['reason'] = 'Other';
      otherReason['selected'] = 0;
      this.getFilterFieldArray().push(this.createReasonGroup(otherReason));
    });
  }

  /**
   * Create Reason Group Form
   */
  createReasonGroup(item ?: any) {
    return this._fb.group({
      id: new FormControl(item ? item['id'] : ''),
      reason: new FormControl(item ? item['reason'] : ''),
      selected: new FormControl(item ? item['selected'] : '')
    });
  }

  /**
   * Get Filter Field Array
   */
  getFilterFieldArray(): FormArray {
    return <FormArray>this.reviwerReasoncommentForm.get('reviewer_reason');
  }

  /**
   * Review Add / Update Reason Form
   */
  createReviwerReasoncommentForm() {
    this.reviwerReasoncommentForm = this._fb.group({
      reviewer_comment: new FormControl((this.reviewWriteOffData) ? this.reviewWriteOffData.reviewer_comment : ''),
      reviewer_reason: this._fb.array([])
    });
  }

  /**
   * On Update Write Off Reason Data Checked & Unchecked
   * @param event
   * @param filterGroup
   * @param index
   * @param id
   */
  changeUpdateReviewerWriteOff(event: any, filterGroup: any, index: number, id: number) {
    if (event) {
      this.getFilterFieldArray().controls[index].get('selected').setValue(1);
      if (id === 0) {
        this.reviwerReasoncommentForm.get('reviewer_comment').setValidators(Validators.required);
        this.reviwerReasoncommentForm.get('reviewer_comment').updateValueAndValidity();
      }
    } else {
      this.getFilterFieldArray().controls[index].get('selected').setValue(0);
      if (id === 0) {
        this.reviwerReasoncommentForm.get('reviewer_comment').setValidators(null);
        this.reviwerReasoncommentForm.get('reviewer_comment').updateValueAndValidity();
      }
    }
  }

  /**
   * On Submit Form
   * @param form
   */
  onSumbitReason(form: FormGroup) {

    if (form.valid) {
      form.value['_method'] = 'put';
      form.value['comment_by'] = 1;
      const reviewer_json = {};
      reviewer_json['rawData'] = [];
      reviewer_json['coreData'] = [];
      reviewer_json['allData'] = [];
      const reviewerJSON = form.value['reviewer_reason'];
      reviewerJSON.forEach(item => {
        if (item['selected'] === 1) {
          reviewer_json['coreData'].push(item['id']);
          reviewer_json['rawData'].push(item['reason']);
        }
        reviewer_json['allData'].push(item);
      });
      form.value['reviewer_reason'] = JSON.stringify(reviewer_json);
      this._commonCrudService.updateData(AdminAPI.REVIEWER_WRITEOFF_UPDATE, this.reviewWriteOffData.id, form.value).subscribe((response) => {
        this.dialogRef.close();
      });
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
