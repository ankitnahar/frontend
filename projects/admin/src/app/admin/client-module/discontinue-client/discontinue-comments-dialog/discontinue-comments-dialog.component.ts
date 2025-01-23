import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {BASE} from '../../../../../utility/constants/base-constants';
import {DiscontinueCommentsDialog} from './discontinue-client-comment.model';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';

@Component({
  selector: 'app-discontinue-comments-dialog',
  templateUrl: './discontinue-comments-dialog.component.html'
})
export class DiscontinueCommentsDialogComponent extends BaseComponent implements OnInit {

  @ViewChild('commentChildForm') commentChildForm;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  discontinueCommentList: DiscontinueCommentsDialog[] = [];
  discontinueCommentData: DiscontinueCommentsDialog;
  staffListData: AdminUser[] = [];

  // Form Variables
  commentForm: FormGroup;

  isSendEmailNotification = false;
  // Mat Paginator Output
  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  constructor(public dialogRef: MatDialogRef<DiscontinueCommentsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService) {
    super();
  }

  ngOnInit() {
    this.discontinueCommentData = (this.data.discontinueCommentData) ? this.data.discontinueCommentData : [];
    this.getDiscontinueComment(1);
    this.createCommentForm();
    this.getUserList();
  }

  getDiscontinueComment(pageNumber?: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.DISCONTINUE_ENTITY_COMMENT + '/' + this.discontinueCommentData.id, this.getQueryParams(pageNumber, 'id', 'desc'),
      {})
      .subscribe((response) => {
        this.handleResponse(response);
      });
  }

  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      // console.log(response);
      this.staffListData = response;
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  // Helper
  /**
   * get function for returning advance query params for conference room get api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{pageNumber: number; recordsPerPage: number}}
   */
  private getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    const params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    if (sortKey) {
      params ['sortBy'] = sortKey;
    }
    if (sortOrder) {
      params ['sortOrder'] = sortOrder;
    }
    return params;
  }

  handleResponse(response: any) {
    this.discontinueCommentList = response['payload']['data'];
    this.page = response['pager']['pageNumber'];
    this.pageIndex = this.page - 1;
    this.totalRecords = +(response['pager']['totalRecords']);
    this.sortBy = response['pager']['sortBy'];
    this.sortOrder = response['pager']['sortOrder'];
  }

  /**
   * On Click of Send Email Notification
   * @param event
   */
  onSelectItem(event: boolean) {
    if (event) {
      this.isSendEmailNotification = true;
      this.commentForm.get('to').setValidators(Validators.required);
      this.commentForm.get('to').updateValueAndValidity();
    } else {
      this.isSendEmailNotification = false;
      this.commentForm.get('to').setValidators(null);
      this.commentForm.get('to').updateValueAndValidity();
    }
  }

  addCommentForm(form: FormGroup) {
    form.value['discontinue_entity_id'] = this.discontinueCommentData.id;
    if (form.value['is_emailsent'] === 0 || form.value['is_emailsent'] === false) {
      form.value['to'] = '';
      form.value['is_emailsent'] = 0;
    } else {
      form.value['is_emailsent'] = 1;
    }

    this._commonCrudService.addData(AdminAPI.DISCONTINUE_ENTITY_COMMENT_STORE, form.value)
      .subscribe((response) => {
        this.commentChildForm.resetForm();
        this.createCommentForm();
        this.isSendEmailNotification = false;
        this.getDiscontinueComment(1);
      });
  }

  createCommentForm() {
    this.commentForm = this._fb.group({
      comment: new FormControl('', <any>Validators.required),
      to: new FormControl(),
      cc: new FormControl(),
      is_emailsent: new FormControl(0)
    });
  }

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getDiscontinueComment(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Reset Form
   */
  resetForm() {
    this.createCommentForm();
  }
}
