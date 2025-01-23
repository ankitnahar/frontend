import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {Shift} from '../shift-list.model';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';

@Component({
  selector: 'app-shif-change-action-dialog',
  templateUrl: './shif-change-action-dialog.component.html'
})
export class ShifChangeActionDialogComponent extends BaseComponent implements OnInit {

  // Form Variables
  addShiftChangeForm: FormGroup;
  // Data Variables
  shiftChangeList: any[] = [];
  shiftList: Shift[] = [];
  shiftData: Shift;
  shiftDataChange: Shift;
  userList: AdminUser[] = [];
  isDirectDelete = 0;
  isUpdate = 0;
  // State variables
  isMultipleSingleShift = true;

  constructor(
    public dialogRef: MatDialogRef<ShifChangeActionDialogComponent>,
    private _commonCrudService: CommonCrudService,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.shiftData = (this.data.shiftData) ? this.data.shiftData : [];
    this.isUpdate = this.data.isUpdate;
    this.initializationMethod();
    this.createAddShiftChangeForm();
    this.getshiftlist();
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      'records': 'all',
      'table': 'user',
      'column': 'id,userfullname',
      'sortOrder': 'userfullname',
      'sortBy': 'asc'
    }, {'compare': {'equal': {'is_active': 1, 'shift_id': this.shiftData.id}}}).subscribe(Response => {
      this.userList = Response;
    });
  }

  getShiftDataWithUser() {
    if (this.userList.length) {
      this.userList.forEach(item => {
        this.getFilterFieldArray().push(this.createUserGroup(item));
      });
    }
  }

  getshiftlist() {
    this._commonCrudService.listData(AdminAPI.SHIFT_LISTING, {'records': 'all'}, {}).subscribe((response) => {
      this.shiftList = response['payload']['data'];
    });
  }

  /**
   * Get Filter Field Array
   */
  getFilterFieldArray(): FormArray {
    return <FormArray>this.addShiftChangeForm.get('usershiftDetail');
  }

  /**
   * Create Question Group Form
   */
  createUserGroup(item ?: any) {
    return this._fb.group({
      id: new FormControl(item ? item['id'] : ''),
      userfullname: new FormControl(item ? item['userfullname'] : ''),
      old_shift_id: new FormControl(item ? this.shiftData.id : this.shiftData.id),
      new_shift_id: new FormControl(item ? item['new_shift_id'] : '', <any> Validators.required),
    });
  }

  getShiftDetail(form: FormGroup) {
    const shiftId = form.value['shift_id'];
    this._commonCrudService.getData(AdminAPI.SHIFT_VIEW, shiftId, {}, {}).subscribe((response) => {
      this.shiftDataChange = response['payload']['data'];
    });
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    for (let i = 0; i < 15; i++) {
      let obj = {
        staffName: 'Hemadri Patel'
      };
      this.shiftChangeList.push(obj);
    }
  }

  /**
   * Create filter Master checklist
   */
  createAddShiftChangeForm() {
    this.addShiftChangeForm = this._fb.group({
      select_shift_details: new FormControl(),
      shift_id: new FormControl(null, <any> Validators.required),
      from_time: new FormControl(),
      usershiftDetail: this._fb.array([])
    });
  }

  /**
   * Update Values
   * @param index
   * @param key
   * @param value
   */
  updateValues(index: number, key: string, value: any) {
    // console.log(index, key, value);
    this.getFilterFieldArray().controls[index].get(key).setValue(value);
    this.getFilterFieldArray().controls[index].get(key).updateValueAndValidity();
  }

  /**
   * On change type of recurring form
   * @param event
   */
  onChangeType(event) {
    if (+event === 1) {
      this.isMultipleSingleShift = true;
      this.addShiftChangeForm.get('shift_id').setValidators(<any> Validators.required);
      this.addShiftChangeForm.get('shift_id').updateValueAndValidity();
      this.addShiftChangeForm.removeControl('usershiftDetail');
    } else {
      this.isMultipleSingleShift = false;
      this.addShiftChangeForm.addControl('usershiftDetail', this._fb.array([]));
      this.getShiftDataWithUser();
      this.addShiftChangeForm.get('shift_id').setValue(null);
      this.addShiftChangeForm.get('shift_id').setValidators(null);
      this.addShiftChangeForm.get('shift_id').updateValueAndValidity();
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSumbit(form: FormGroup) {
    const itemData = form.value['usershiftDetail'];
    form.value['_method'] = 'put';
    form.value['shift_id'] = form.value['shift_id'];
    form.value['actionType'] = 1;
    form.value['type'] = 0;
    form.value['usershiftDetail'] = JSON.stringify(form.value['usershiftDetail']);
    if (this.isMultipleSingleShift) {
      form.value['type'] = 1;
    }

    if (this.isDirectDelete === 0) {
      this._commonCrudService.updateData(AdminAPI.SHIFT_UPDATE, this.shiftData.id, form.value).subscribe((response) => {
        this.dialogRef.close();
      });
    } else {
      this._commonCrudService.updateData(AdminAPI.SHIFT_DELETE, this.shiftData.id, form.value).subscribe((response) => {
        this.dialogRef.close();
      });
    }
  }

  setValue(value: number) {
    this.isDirectDelete = value;
  }
}
