import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';

@Component({
  selector: 'app-checklist-email-preview-dialog',
  templateUrl: './checklist-email-preview-dialog.component.html'
})
export class ChecklistEmailPreviewDialogComponent implements OnInit {

  contentData: string;
  emailContent: string;
  fromEmail: string;

  constructor(
    public dialogRef: MatDialogRef<ChecklistEmailPreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, public _commonCrudService: CommonCrudService,) {
  }

  ngOnInit() {
    this.contentData = (this.data.emailContentData) ? this.data.emailContentData : null;
    this.fromEmail = (this.data.fromEmail) ? this.data.fromEmail : null;
    // console.log(this.contentData);
    this.getEmailPreview();
  }

  /**
   * Email Content
   */
  getEmailPreview() {
    /* const contentData = tinymce.activeEditor.getContent();
     const param = {'content': this.contentData};
    */
    /* const param = tinymce.get({'content': this.contentData});*/
    const param = {'content': this.contentData, 'fromEmail': this.fromEmail};
    this._commonCrudService.addData(AdminAPI.WORKSHEET_EMAIL_PREVIEW_FINAL, param).subscribe(response => {
      this.emailContent = response.payload.data;
    });
  }

  onClose() {
    this.dialogRef.close(true);
  }
}
