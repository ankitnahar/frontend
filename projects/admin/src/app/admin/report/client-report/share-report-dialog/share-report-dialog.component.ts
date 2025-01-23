import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, MatDialogRef} from '@angular/material';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {ClientReport} from '../client-report.module';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import {BaseComponent} from '../../../../../utility/components/base/base.component';

@Component({
  selector: 'app-share-report-dialog',
  templateUrl: './share-report-dialog.component.html',
})
export class ShareReportDialogComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  addShareReportForm: FormGroup;

  visible = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  clientData: ClientReport = null;
  shareusers = [];
  allShareUsers: AdminUser[] = [];

  @ViewChild('shareuserInput') shareuserInput: ElementRef;

  constructor(public dialogRef: MatDialogRef<ShareReportDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.clientData = this.data['content']['clientData'];
    this.allShareUsers = this.data['content']['userList'];

    for (const userData of this.data['content']['alreadyShared']) {
      this.shareusers.push(userData['user_id']);
    }
    // this.shareusers = Object.values(this.data['content']['alreadyShared']) || [];
    this.createAddChangeInOutTimeForm();
  }

  /**
   * Create share report form
   */
  createAddChangeInOutTimeForm() {
    this.addShareReportForm = this._fb.group({
      addusername: new FormControl(this.shareusers, <any>Validators.required)
    });
  }

  /**
   * submit method to share the report to the selected user.
   * @param form
   */
  onSubmitShareReportForm(form: FormGroup) {
    if (form.valid) {
      const fomrValue = form.value['addusername'];
      form.value['user_id'] = JSON.stringify(form.value['addusername']);
      if (form.value['user_id']) {
        this._commonCrudService.addData(AdminAPI.CLIENT_REPORT_SHARED_TO_USER + '/' + this.clientData.id, form.value).subscribe(Response => {
          this.onClose();
        });
      }
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  /**
   * remove the selcted user for array in chip
   * @param user
   */
  remove(user: AdminUser): void {
    this.shareusers.map(item => {
      if (+item.id === +user.id) {
        this.shareusers.splice(this.shareusers.indexOf(item), 1);
        this.allShareUsers.push(item);
      }
    });
  }

  filter(name: string) {
    return this.shareusers.filter(user =>
      user.userfullname.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const data = event.option.value;
    this.allShareUsers.map(item => {
      if (item.userfullname === data.userfullname) {
        this.allShareUsers.splice(this.allShareUsers.indexOf(item), 1);
        this.shareusers.push(data);
      }
    });
    this.addShareReportForm.get('addusername').setValue(event.option.value);
  }
}
