import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../../../utility/validation';
import {WorksheetListing} from '../../../worksheet-dashboard-tab/worksheet.model';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';

@Component({
  selector: 'review-action-allocate-reviewer-dialog',
  templateUrl: './review-action-allocate-reviewer-dialog.html',
})
export class ReviewActionAllocateReviewerDialog extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  worksheetData: WorksheetListing;
  isadditionalAssignee = 0;
  userSubmitType = 0;
  userTypePlaceHolder = '';
  existUserID = 0;
  // Form Variables
  addAllocateReviewerForm: FormGroup;
  assingeeList = [];

  constructor(
    public dialogRef: MatDialogRef<ReviewActionAllocateReviewerDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.worksheetData = (this.data) ? this.data.allocateData : [];
    this.userSubmitType = (this.data) ? this.data.isadditionalAssignee : 0;
    // 1 = Allocate Additional Assignee , 2 = Allocate Reviewer Assignee, 3 = Allocate Peer Reviewer Assignee
    if (this.userSubmitType === 1) {
      this.existUserID = (this.worksheetData.worksheet_additional_assignee) ? this.worksheetData.worksheet_additional_assignee.id : 0;
      this.userTypePlaceHolder = 'Allocate Additional Assignee';
    } else if (this.userSubmitType === 2) {
      this.existUserID = (this.worksheetData.worksheet_reviewer) ? this.worksheetData.worksheet_reviewer.id : 0;
      this.userTypePlaceHolder = 'Allocate Reviewer Assignee';
    } else if (this.userSubmitType === 3) {
      this.existUserID = (this.worksheetData.worksheet_peerreviewer) ? this.worksheetData.worksheet_peerreviewer.id : 0;
      this.userTypePlaceHolder = 'Allocate Peer Reviewer Assignee';
    }
    this.getAssigneeList();
    this.createAllocatedReviewerForm();
  }

  /**
   * Get Assignee List
   */
  getAssigneeList() {
    if (this.userSubmitType === 1) {
      this._commonCrudService.listData(AdminAPI.WORKSHEET_ADDITIONAL_ASSIGNEE, {
        'entity_id': this.worksheetData.entity_id,
        'master_activity_id': this.worksheetData.master_activity_id.id
      }, {}).subscribe(response => {
        if (response) {
          this.assingeeList = [];
          const data = response.payload.data;
          // console.log(data);
          if (data['teamMember']) {
            data['teamMember'].forEach(item => {
              item['name'] = 'Team Member';
              this.assingeeList.push(item);
            });
          }
          if (data['otherMember']) {
            data['otherMember'].forEach(item => {
              item['name'] = 'Other Member';
              this.assingeeList.push(item);
            });
          }
          // console.log(this.assingeeList);
        }
      });
    } else if (this.userSubmitType === 2) {
      this._commonCrudService.listData(AdminAPI.WORKSHEET_REVIEWER_ASSIGNEE, {
        'entity_id': this.worksheetData.entity_id,
        'master_activity_id': this.worksheetData.master_activity_id.id
      }, {}).subscribe(response => {
        this.assingeeList = [];
        this.assingeeList = response.payload.data;
        this.assingeeList.map(item => {
          item['name'] = 'Reviewer';
        });
      });
    } else if (this.userSubmitType === 3) {
      this._commonCrudService.listData(AdminAPI.WORKSHEET_PEER_REVIEWER_ASSIGNEE, {}, {}).subscribe(response => {
        this.assingeeList = [];
        this.assingeeList = response.payload.data;
        this.assingeeList.map(item => {
          item['name'] = 'Peer Reviewer';
        });
      });
    }
  }

  /**
   * Create Reviewer Form
   */
  createAllocatedReviewerForm() {
    this.addAllocateReviewerForm = this._fb.group({
      type: new FormControl(this.userSubmitType),
      user_id: new FormControl(this.existUserID, <any>Validators.required),
      is_remove: new FormControl(0)
    });
  }

  /**
   * On Submit Allocate Reviewer Form
   * @param form
   */
  onSubmitAllocateReviewerForm(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.updateData(AdminAPI.WORKSHEET_ADDITIONAL_ASSIGNEE, this.worksheetData.id, {
        'user_id': form.value['user_id'],
        'type': form.value['type'],
        'is_remove': form.value['is_remove'],
        '_method': 'put'
      }).subscribe(response => {
        this.onClose();
      });

    }
  }

  /**
   * On Submit Allocate Reviewer Form
   * @param form
   */
  onRemoveAllocateReviewerForm(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.updateData(AdminAPI.WORKSHEET_ADDITIONAL_ASSIGNEE, this.worksheetData.id, {
        'user_id': form.value['user_id'],
        'type': form.value['type'],
        '_method': 'put'
      }).subscribe(response => {
        this.onClose();
      });

    }
  }

  /**
   * Close Dialog
   */
  onClose(): void {
    this.dialogRef.close();
  }

  changeRemoveType() {
    this.addAllocateReviewerForm.get('is_remove').setValue(1);
  }
}
