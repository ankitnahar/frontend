import {Component, Inject, OnInit} from '@angular/core';
import {CommonRegex, ValidationConstantMessage} from '../../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {AdminAPI} from '../../../../../utility/constants/api';
import {Frequency} from '../../../../../utility/shared-model/frequency.model';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {SoftwareManagement} from '../software-management.model';

@Component({
  selector: 'app-add-software-details-dialog',
  templateUrl: './add-software-details-dialog.component.html'
})
export class AddSoftwareDetailsDialogComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  softwareManage: SoftwareManagement;
  frequencyList: Frequency[] = [];
  softwareNameList = [];
  // Form Variables
  addSoftwareDetailForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddSoftwareDetailsDialogComponent>,
    private _commonCrudService: CommonCrudService,
    private _sharedService: SharedService,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.softwareManage = (this.data.softwareData) ? this.data.softwareData : [];
    this.getFrequency();
    this.getSoftwareName();
    this.createSoftwareDetailForm();
  }

  /**
   * Create software detail form
   */
  createSoftwareDetailForm() {
    // console.log(this.softwareManage);
    this.addSoftwareDetailForm = this._fb.group({
      software_name: new FormControl((this.softwareManage) ? this.softwareManage.software_name : '', <any>Validators.required),
      frequency_id: new FormControl((this.softwareManage) ? this.softwareManage.frequency_id : '', <any>Validators.required),
      transaction: new FormControl((this.softwareManage) ? this.softwareManage.transaction : '', [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      budgeted_unit: new FormControl((this.softwareManage) ? this.softwareManage.budgeted_unit : '', [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)])
    });
  }

  /**
   * Get Frequency List
   */
  getSoftwareName() {
    this._commonCrudService.listData(AdminAPI.FF_LIST_SOFTWARE, {}, {}).subscribe((response) => {
      if (response) {
        this.softwareNameList = response.payload.data;
      }
    });
  }

  /**
   * Get Frequency List
   */
  getFrequency() {
    this._commonCrudService.listData(AdminAPI.FREQUENCY, {}, {'notin': {'id': '7,10'}}).subscribe((response) => {
      if (response) {
        this.frequencyList = response.payload.data;
      }
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  /**
   * On Submit Form
   * @param form
   */
  onSumbitSoftware(form: FormGroup) {
    if (form.valid) {
      if (this.softwareManage.id) {
        form.value['_method'] = 'put';
        this._commonCrudService.updateData(AdminAPI.FF_SOFTWARE_ADD_UPDATE, this.softwareManage.id, form.value).subscribe((response) => {
          this.dialogRef.close();
        });
      } else {
        this._commonCrudService.addData(AdminAPI.FF_SOFTWARE_ADD_UPDATE, form.value).subscribe((response) => {
          this.dialogRef.close();
        });
      }
    }
  }


}
