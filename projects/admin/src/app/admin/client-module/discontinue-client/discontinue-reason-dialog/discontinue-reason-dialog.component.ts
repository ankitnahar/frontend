import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {DiscontinueEntity} from "../discontinue-client.model";

@Component({
  selector: 'app-discontinue-reason-dialog',
  templateUrl: './discontinue-reason-dialog.component.html'
})
export class DiscontinueReasonDialogComponent extends BaseComponent implements OnInit {

  @ViewChild('commentChildForm') commentChildForm;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  discontinueCommentData: DiscontinueEntity;

  // Form Variables
  commentForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<DiscontinueReasonDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService) {
    super();
  }

  ngOnInit() {
    this.discontinueCommentData = (this.data.discontinueCommentData) ? this.data.discontinueCommentData : [];
    this.createCommentForm();
  }

  addReason(form: FormGroup) {
    this._commonCrudService.updateData(AdminAPI.DISCONTINUE_ENTITY_REASON_UPDATE, this.discontinueCommentData.id, form.value)
      .subscribe((response) => {
        this.dialogRef.close();
      });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  createCommentForm() {
    this.commentForm = this._fb.group({
      discontinue_comment: new FormControl(this.discontinueCommentData.discontinue_comment, <any>Validators.required)
    });
  }

  /**
   * Reset Form
   */
  resetForm() {
    this.createCommentForm();
  }

}
