import {Component, Inject, OnInit} from '@angular/core';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ChangeInOutTime} from '../change-in-out-time.model';
import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {inOut} from '../../../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../../../utility/constants/api';
import * as moment from 'moment';
import {SharedService} from "../../../../../../utility/shared-service/shared.service";

@Component({
  selector: 'app-change-in-out-time-dialog',
  templateUrl: './change-in-out-time-dialog.component.html'
})
export class ChangeInOutTimeDialogComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  ChangeInOutData: ChangeInOutTime;
  userList: AdminUser[] = [];
  inOutdropdown = inOut;
  // Form Variables
  addChangeInOutForm: FormGroup;
  currentDate = new Date();
  isModified = 0;
  userInfo: AdminUser;

  constructor(
    public dialogRef: MatDialogRef<ChangeInOutTimeDialogComponent>, private _sharedService: SharedService,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _sharedObjService: SharedObjService, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.userInfo = this._sharedService.getUser();
    this.ChangeInOutData = (this.data.ChangeInOutDetail) ? this.data.ChangeInOutDetail : [];
    this.getUserList();
    this.createAddChangeInOutTimeForm();
    // if (this.ChangeInOutData.id) {
    //   this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
    //       'sortOrder': 'id',
    //       'sortBy': 'asc',
    //       'table': 'hr_user_in_out_time',
    //       'column': 'id'
    //     },
    //     {
    //       'compare': {
    //         'equal': {
    //           'user_id': this.ChangeInOutData.user_id.id,
    //           'date': this.ChangeInOutData.date,
    //           // 'punch_type': this.ChangeInOutData.punch_type,
    //           'is_manually_change': 1
    //         }
    //       }
    //     })
    //     .subscribe((response) => {
    //       this.isModified = (response && response[0] && response[0]['id'] && response[0]['id'] !== '') ? 1 : 0;
    //     });
    // }
  }

  /**
   * Create filter Master checklist
   */
  createAddChangeInOutTimeForm() {
    this.addChangeInOutForm = this._fb.group({
      user_id: new FormControl((this.ChangeInOutData) ? (this.ChangeInOutData.user_id) ? this.ChangeInOutData.user_id.id : null : null, <any>Validators.required),
      date: new FormControl((this.ChangeInOutData) ? (this.ChangeInOutData.date) ? this.ChangeInOutData.date : null : null, <any>Validators.required),
      punch_type: new FormControl((this.ChangeInOutData) ? (this.ChangeInOutData.punch_type >= 0) ? this.ChangeInOutData.punch_type : null : null, <any>Validators.required),
      punch_time: new FormControl((this.ChangeInOutData) ? (this.ChangeInOutData.punch_time) ? this.ChangeInOutData.punch_time : null : null, <any>Validators.required),
      reason: new FormControl((this.ChangeInOutData) ? (this.ChangeInOutData.reason) ? this.ChangeInOutData.reason : null : null, <any>Validators.required),
    });
  }

  onSubmitAddChangeIn(form: FormGroup) {
    if (form.valid) {
      // const dateItem = form.value['date'];
      form.value['user_id'] = this.addChangeInOutForm.get('user_id').value;
      form.value['old_value'] = this.ChangeInOutData.punch_time;
      const dateItem = this.addChangeInOutForm.get('date').value;
      form.value['punch_type'] = this.addChangeInOutForm.get('punch_type').value;
      form.value['date'] = moment(dateItem).format('YYYY-MM-DD');
      form.value['punch_time'] = moment(form.value['punch_time'], ['h:mm A']).format('HH:mm');
      if (this.ChangeInOutData.id) {
        form.value['_method'] = 'put';
        this._commonCrudService.updateData(AdminAPI.CHANGEINOUT_UPDATE, this.ChangeInOutData.id, form.value).subscribe((response) => {
          this.dialogRef.close();
        });

      } else {
        this._commonCrudService.addData(AdminAPI.CHANGEINOUT_STORE, form.value).subscribe((response) => {
          this.dialogRef.close();
        });
      }
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  /**
   * Get User List
   */
  getUserList() {
    // this._commonCrudService.listData(AdminAPI.CHANGEINOUT_USER_LIST, {}, {}).subscribe((response) => {
    //   this.userList = response.payload.data;
    // });
    let params = {};
    if (this.userInfo.designation_id.id === 7) {
      params = {
        'compare': {'equal': {'is_active': 1}}
        , 'or': {
          'equal': [{
            'first_approval_user': this.userInfo.id,
            'second_approval_user': this.userInfo.id,
          }]
        }
      };
    } else {
      params = {
        'compare': {'equal': {'is_active': 1}}
        , 'or': {
          'equal': [{
            'first_approval_user': this.userInfo.id,
            'second_approval_user': this.userInfo.id,
          }]
        }
      };
    }
    this._sharedObjService.getUserList({'records': 'all'}, params).subscribe((response) => {
      this.userList = response;
      this.createAddChangeInOutTimeForm();
    });
  }
}
