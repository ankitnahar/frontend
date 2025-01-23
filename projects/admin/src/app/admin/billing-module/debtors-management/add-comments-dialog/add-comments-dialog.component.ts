import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {DebtorsManagementComment} from '../debtors-management.model';
import {AdminAPI} from '../../../../../utility/constants/api';
import {BASE} from '../../../../../utility/constants/base-constants';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';

@Component({
  selector: 'app-add-comments-dialog',
  templateUrl: './add-comments-dialog.component.html',
  styleUrls: ['./add-comments-dialog.component.scss']
})
export class AddCommentsDialogComponent extends BaseComponent implements OnInit {

  debtorsManagementComment: DebtorsManagementComment[] = [];
  @ViewChild('addEditCommentForm') addEditCommentForm;
  debtorsEntityID = 0;
  entityName = null;
  selectedToEmail = [];
  selectedCCEmail = [];
  userList: AdminUser[] = [];
  isSendEmailNotification = false;
  // Pagination related variables
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Form Group
  commentForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddCommentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedService: SharedService, private _sharedObjService: SharedObjService) {
    super();
  }

  ngOnInit() {
    this.debtorsEntityID = (this.data.debtorsData) ? this.data.debtorsData.entity_id : 0;
    this.entityName = (this.data.debtorsData) ? this.data.debtorsData.billing_name : 0;
    if (this.debtorsEntityID > 0) {
      this.getDebtorsManagementCommentList(1, 'id', 'desc');
    }
    this.createCommentForm();
    this.getUserList();
  }

  /**
   * On Click of Send Email Notification
   * @param event
   */
  onSelectItem(event: boolean) {
    if (event) {
      this.isSendEmailNotification = true;
      this.commentForm.get('to_mail').setValidators(Validators.required);
      this.commentForm.get('to_mail').updateValueAndValidity();
    } else {
      this.commentForm.get('to_mail').setValidators(null);
      this.commentForm.get('to_mail').updateValueAndValidity();
      this.isSendEmailNotification = false;
    }
  }

  /**
   * On Submit Commnent Form
   * @param form
   */
  onSubmitComment(form: FormGroup) {
    if (form.valid) {
      let formValue = {};
      let toEmail = '';
      let ccEmail = '';
      if (this.selectedToEmail) {
        toEmail = this.selectedToEmail.join(',');
      }
      if (this.selectedCCEmail) {
        ccEmail = this.selectedCCEmail.join(',');
      }
      formValue['to_mail'] = toEmail;
      formValue['cc_mail'] = ccEmail;
      formValue['comment'] = form.value['comment'];
      formValue['sent_notification'] = (this.isSendEmailNotification) ? 1 : 0;
      formValue['entity_id'] = this.debtorsEntityID;
      this._commonCrudService.addData(AdminAPI.DEBTORS_MANAGEMENT_COMMENT_LIST + '/' + this.debtorsEntityID, formValue).subscribe((response) => {
        this.resetForm();
        this.isSendEmailNotification = false;
        this.getDebtorsManagementCommentList(1, 'id', 'desc');
      });
    }
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.userList = response;
    });
  }

  /**
   * Create Comment Form
   */
  createCommentForm() {
    this.commentForm = this._fb.group({
      comment: new FormControl(null, <any>Validators.required),
      sent_notification: new FormControl(null),
      to_mail: new FormControl(null),
      cc_mail: new FormControl(null),
    });
  }

  /**
   * Reset Form
   */
  resetForm() {
    this.createCommentForm();
    this.addEditCommentForm.resetForm();
    this.isSendEmailNotification = false;
  }

  /**
   * Get Debtors Management Comment List
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getDebtorsManagementCommentList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.DEBTORS_MANAGEMENT_COMMENT_LIST + '/' + this.debtorsEntityID, this.getQueryParams(pageNumber, key, val), {}).subscribe((response) => {
      this.debtorsManagementComment = response.payload.data;
      this.page = response.pager.pageNumber;
      this.pageIndex = this.page - 1;
      this.totalRecords = +response.pager.totalRecords;
    });
  }

  /**
   * On Page Change
   * @param event
   */
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getDebtorsManagementCommentList(event.pageIndex + 1, 'id', 'desc');
  }

  /**
   * get function for returning pageNumber and page size at time of listing api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{}}
   */
  getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    const params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    if (sortKey) {
      params['sortBy'] = sortKey;
    }
    if (sortOrder) {
      params['sortOrder'] = sortOrder;
    }
    return params;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
