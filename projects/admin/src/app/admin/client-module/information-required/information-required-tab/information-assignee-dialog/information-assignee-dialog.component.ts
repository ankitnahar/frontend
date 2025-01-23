import {Component, Inject, OnInit} from '@angular/core';
import {BaseComponent} from "../../../../../../utility/components/base/base.component";
import {ValidationConstantMessage} from "../../../../../../utility/validation";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {InformationRequired} from "../information-tab/information-required.model";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import {SharedObjService} from "../../../../../../utility/shared-service/shared-object.service";
import {AdminUser} from "../../../../../../utility/shared-model/admin-user.model";

@Component({
  selector: 'app-information-assignee-dialog',
  templateUrl: './information-assignee-dialog.component.html'
})
export class InformationAssigneeDialogComponent extends BaseComponent implements OnInit {
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Form Variables
  addAssigneeForm: FormGroup;
  informationRequired: InformationRequired;
  userList: AdminUser[] = [];
  atlList: AdminUser[] = [];
  tlList: AdminUser[] = [];

  constructor(private _fb: FormBuilder,
              public dialogRef: MatDialogRef<InformationAssigneeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _sharedObjService: SharedObjService, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.informationRequired = (this.data.informationRequired) ? this.data.informationRequired : [];
    this.getUserList();
    this.createAddAssigneeForm();
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {
      'compare': {'equal': {'is_active': 1}},
      'findinset': {'team_id': [1]}
    }).subscribe((response) => {
      const userList = response;
      const tl = response.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 60 : 0);
      const staff = response.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 10 : 0);
      const atl = response.filter(data => (data['designation_id']) ? data['designation_id']['id'] === 61 : 0);
      this.tlList = tl;
      this.atlList = atl;
      this.userList = staff;
    });
  }

  /**
   * Create assignee form
   */
  createAddAssigneeForm() {
    this.addAssigneeForm = this._fb.group({
      additional_tl: new FormControl((this.informationRequired) ? (this.informationRequired.additional_tl) ? this.informationRequired.additional_tl.id : null : null),
      additional_tm: new FormControl((this.informationRequired) ? (this.informationRequired.additional_tm) ? this.informationRequired.additional_tm.id : null : null),
      additional_atl: new FormControl((this.informationRequired) ? (this.informationRequired.additional_atl) ? this.informationRequired.additional_atl.id : null : null),
      information_id: new FormControl((this.informationRequired) ? this.informationRequired.id : null)
    });
  }

  onClose(value): void {
    this.dialogRef.close(value);
  }

  /**
   * On Submit Assignee Form
   * @param form
   */
  onSubmitAssigneeForm(form: FormGroup) {
    if (form.valid) {
      form.value['additional_tl'] = (form.value['additional_tl']) ? form.value['additional_tl'] : 0;
      form.value['additional_tm'] = (form.value['additional_tm']) ? form.value['additional_tm'] : 0;
      this._commonCrudService.addData(AdminAPI.INFORMATION_REQUIRED_ADD_ASSIGNEE, form.value).subscribe(response => {
        this.onClose(true);
      });
    }
  }
}
