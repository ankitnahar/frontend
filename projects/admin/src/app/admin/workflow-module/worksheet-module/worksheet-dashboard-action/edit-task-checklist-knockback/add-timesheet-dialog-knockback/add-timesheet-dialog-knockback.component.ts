import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../../utility/validation';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';
import {Timesheet} from '../../../worksheet-quick-action/todays-timesheet/timesheet.model';
import {WorksheetListing} from '../../../worksheet-dashboard-tab/worksheet.model';
import {Clients} from '../../../../../client-module/view-client/view-client.model';
import {Frequency} from '../../../../../../../utility/shared-model/frequency.model';
import {MasterActivity} from '../../../worksheet-quick-action/hierarchy/master-activity/master-activity.model';
import {TaskList} from '../../../worksheet-quick-action/hierarchy/task-list/task-list.model';
import {SubActivity} from '../../../worksheet-quick-action/hierarchy/sub-activity/sub-activity.model';
import {TimesheetConstantData} from '../../../../../../../utility/constants/timesheet-constant';
import {Router} from '@angular/router';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../../../utility/shared-service/shared-object.service';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {getUnitsFromTime} from '../../../../../../../utility/common-functions';
import * as moment from 'moment';
import {AdminRoutes} from '../../../../../../../utility/constants/admin-route';
import {ReviewerWriteoff} from '../../../../reviewer-writeoff/reviewer-writeoff.model';
import {SubClient} from '../../../worksheet-quick-action/sub-client-list/subclient.model';
import {AttendanceSummary} from "../../../../../hrms-module/hrms-dashboard/attendance-summary/attendance-summary.model";

@Component({
  selector: 'app-add-timesheet-dialog-knockback',
  templateUrl: './add-timesheet-dialog-knockback.component.html'
})
export class AddTimesheetDialogKnockbackComponent extends BaseComponent implements OnInit {

  @ViewChild('addEditTimesheetDataForm') addEditTimesheetDataForm;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Group Variables
  addTimesheetForm: FormGroup;
  userData: AdminUser;
  timeSheetData: Timesheet;
  worksheetData: WorksheetListing;
  clientList: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  parentClientList: Clients[] = [];
  reviewerUserList: AdminUser[] = [];
  bankInformation: any[] = [];
  frequencyList: Frequency[] = [];
  masterActivityList: MasterActivity[] = [];
  taskList: TaskList[] = [];
  subActivityList: SubActivity[] = [];
  timesheetConstant = TimesheetConstantData;
  periodList: any[] = [];
  payrollOptionList: any [] = [];
  frequencyDDList: Frequency[] = [];
  flagToSubmit = 0;
  reviewWriteOffData: ReviewerWriteoff[] = [];
  isReviewerWriteOff = 0;
  subClientList: SubClient[] = [];
  hrDetail: AttendanceSummary;
  
  constructor(public dialogRef: MatDialogRef<AddTimesheetDialogKnockbackComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _router: Router, private _fb: FormBuilder, private _sharedService: SharedService, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService) {
    super();
  }

  ngOnInit() {
    this.worksheetData = (this.data.worksheetListData) ? this.data.worksheetListData : [];
    this.userData = this._sharedService.getUser();
    this.getDropdownData();
    this.createTimesheetForm();
  }


  /**
   * Get Dropdown data
   */
  getDropdownData() {
    // Get Frequency
    this._sharedObjService.getFrequency({'records': 'all'}, {}).subscribe((response) => {
      this.frequencyList = response;
      this.frequencyDDList = response;
    });
    // Get Client
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = this.filteredTradingClientList = response;
      this.parentClientList = response.filter(item => item.is_parent === 1);
    });
    // Get Master Activity
    this._sharedObjService.getMasterActivity({'records': 'all'}, {}).subscribe((response) => {
      this.masterActivityList = response;
    });
    // Get Task
    this._sharedObjService.getTask({'records': 'all'}, {}).subscribe((response) => {
      this.taskList = response;
    });

    // Get Reviewer List
    this._sharedObjService.getUserList({'records': 'all'}, {
      'compare': {'equal': {'is_active': 1}},
      'in': {'designation_id': '68,69,70,73,71'},
      'findinset': {'team_id': [2]}
    }).subscribe((response) => {
      this.reviewerUserList = response;
    });

    // Get Bank Information List
    if (this.worksheetData.entity_id) {
      this._commonCrudService.listData(AdminAPI.TIMESHEET_BANK_DETAILS, {
        'entity_id': this.worksheetData.entity_id
      }, {}).subscribe(response => {
        this.bankInformation = response.payload.data;
      });
    }
  }

  /**
   * Address form creation
   */
  createTimesheetForm() {
    // console.log(this.worksheetData);
    this.addTimesheetForm = this._fb.group({
      worksheet_id: new FormControl((this.worksheetData) ? this.worksheetData.id : 0),
      entity_id: new FormControl((this.worksheetData) ? this.worksheetData.entity_id : 0, <any>Validators.required),
      parent_id: new FormControl((this.worksheetData && this.worksheetData.parent_id > 0) ? this.worksheetData.parent_id : null),
      date: new FormControl(new Date()),
      frequency: new FormControl((this.worksheetData) ? this.worksheetData.frequency_id : 0),
      period_id: new FormControl((this.worksheetData) ? this.worksheetData.id : 0),
      master_activity_id: new FormControl((this.worksheetData) ? this.worksheetData.master_activity_id.id : 0),
      task_id: new FormControl((this.worksheetData) ? this.worksheetData.task_id.id : 0),
      subactivity_code: new FormControl(null, <any>Validators.required),
      start_time: new FormControl(''),
      end_time: new FormControl(''),
      units: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), <any>Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_ZERO_NUMBER_REGEXP)]),
      notes: new FormControl(''),
      // subclient_id: new FormControl(null),
      extra_fields: this._fb.array([]),
      name_employee: this._fb.array([]),
      reviewer_comment: new FormControl(null),
      reviewer_reason: this._fb.array([]),
      timesheet_unit: new FormControl(null),
      budgeted_unit: new FormControl(null)
    });

    if (this.worksheetData) {
      this.getTaskFilterList(this.worksheetData.master_activity_id.id);
      this.getSubactivityFilterList(this.worksheetData.task_id.id);
      this.getPeriodList();
    }
    if (this.worksheetData && this.worksheetData.entity_grouptype_id === 14) {
      // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
      // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
      this.getSubClientList();
    } else {
      // this.addTimesheetForm.get('subclient_id').setValidators(null);
      // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
    }
  }

  /**
   * Get Sub Client List for Entity Type - Superrecord(14)
   */
  getSubClientList() {
    this._sharedObjService.getSubClientList({'records': 'all'}, {'compare': {'equal': {'entity_id': this.worksheetData.entity_id}}}).subscribe((response) => {
      this.subClientList = response;
    });
  }

  /**
   * Get Filter Field Array
   */
  getReviewerReason(): FormArray {
    return <FormArray>this.addTimesheetForm.get('reviewer_reason');
  }

  /**
   * Get Extra Field Array
   */
  getExtraFieldArray(): FormArray {
    return <FormArray>this.addTimesheetForm.get('extra_fields');
  }

  /**
   * Get Name Of Employee
   */
  getNameOfEmployeeArray(): FormArray {
    return <FormArray>this.addTimesheetForm.get('name_employee');
  }

  /**
   * Get Task Filter List
   * @param value
   */
  getTaskFilterList(value: any) {
    // Get Task
    // console.log(2);
    if (value) {
      this._sharedObjService.getTask({'records': 'all'}, {'in': {'master_activity_id': value}}).subscribe((response) => {
        this.taskList = response;
      });
    } else {
      this._sharedObjService.getTask({'records': 'all'}, {}).subscribe((response) => {
        this.taskList = response;
      });
    }
  }

  /**
   * Get Master Activity List
   */
  getMasterActivityList() {
    const entity_id = this.addTimesheetForm.get('entity_id').value;
    if (entity_id) {
      this._commonCrudService.listData(AdminAPI.TIMESHEET_DETAILS, {
        'entity_id': entity_id
      }, {}).subscribe(response => {
        this.masterActivityList = response.payload.data;
      });
    }
  }

  /**
   * Get Task List
   */
  getTaskList() {
    const entity_id = this.addTimesheetForm.get('entity_id').value;
    const master_activity_id = this.addTimesheetForm.get('master_activity_id').value;
    if (entity_id && master_activity_id) {
      this._commonCrudService.listData(AdminAPI.TIMESHEET_DETAILS, {
        'entity_id': entity_id,
        'master_activity_id': master_activity_id
      }, {}).subscribe(response => {
        this.taskList = response.payload.data;
      });
    }
  }

  /**
   * Get Frequency List
   */
  getFrequencyList() {
    const task_id = this.addTimesheetForm.get('task_id').value;
    const entity_id = this.addTimesheetForm.get('entity_id').value;
    const master_activity_id = this.addTimesheetForm.get('master_activity_id').value;
    if (task_id && entity_id && master_activity_id) {
      this._commonCrudService.listData(AdminAPI.TIMESHEET_DETAILS, {
        'entity_id': entity_id,
        'master_activity_id': master_activity_id,
        'task_id': task_id
      }, {}).subscribe(response => {
        this.frequencyList = [];
        const frequencyData = response.payload.data;
        if (frequencyData) {
          frequencyData.forEach(item => {
            this.frequencyList.push(item['frequency_id']);
          });
        }
      });
    }
  }

  /**
   * Get Period List
   */
  getPeriodList() {
    const task_id = this.addTimesheetForm.get('task_id').value;
    const entity_id = this.addTimesheetForm.get('entity_id').value;
    const master_activity_id = this.addTimesheetForm.get('master_activity_id').value;
    const frequency = this.addTimesheetForm.get('frequency').value;
    if (task_id && entity_id && master_activity_id && frequency) {
      this._commonCrudService.listData(AdminAPI.TIMESHEET_DETAILS, {
        'entity_id': entity_id,
        'master_activity_id': master_activity_id,
        'task_id': task_id,
        'frequency_id': frequency
      }, {}).subscribe(response => {
        this.periodList = response.payload.data;
      });
    }
  }

  /**
   * Get Task Filter List
   * @param value
   */
  getSubactivityFilterList(value: any) {
    // Get Subactivity List
    if (value) {
      this._sharedObjService.getSubactivity({
        'records': 'all',
        'sortBy': 'asc',
        'sortOrder': 'subactivity_code'
      }, {'compare': {'equal': {'task_id': value}}}).subscribe((response) => {
        this.subActivityList = response;
      });
    } else {
      this._sharedObjService.getSubactivity({
        'records': 'all',
        'sortBy': 'asc',
        'sortOrder': 'subactivity_code'
      }, {}).subscribe((response) => {
        this.subActivityList = response;
      });
    }
  }

  /**
   * On Select Check Subactivity have extra fields
   * @param subActivity
   */
  hideShowFields(value: any) {
    if (value) {
      // console.log(value);
      const getSubActivity = this.getSubactivityField(Number(value.subactivity_code));
      if (getSubActivity) {
        getSubActivity.forEach(item => {
          this.getExtraFieldArray().push(this.createDynamicFields(item));
        });
      }

      if (Number(value.subactivity_code) === 448 || Number(value.subactivity_code) === 417) {
        this._commonCrudService.listData(AdminAPI.TIMESHEET_PAYROLL_OPTIONS + '/' + value.subactivity_code, {}, {}).subscribe(response => {
          this.payrollOptionList = response.payload.data;
        });
      }
    }
  }

  /**
   * On Time Update Change Units
   */
  updateUnits() {
    const startTime = this.addTimesheetForm.get('start_time').value;
    const endTime = this.addTimesheetForm.get('end_time').value;
    if (startTime && endTime) {
      const units = getUnitsFromTime(startTime, endTime);
      // console.log(this.addTimesheetForm.get('units').value);
      if (units >= 0) {
        this.addTimesheetForm.get('units').setValue(units);
        this.checkReviewerBudgetedUnit(units);
      }
    }
  }

  /**
   * Get Subactivity Field
   * @param index
   */
  getSubactivityField(index: number): any {
    const ItemData = (this.timesheetConstant[index]) ? this.timesheetConstant[index] : null;
    return ItemData;
  }

  /**
   * Create Dynamic Fields
   */
  createDynamicFields(item ?: any) {
    return this._fb.group({
      label: new FormControl(item ? item['label'] : ''),
      help: new FormControl(item ? item['help'] : ''),
      key: new FormControl(item ? item['key'] : ''),
      value: new FormControl(item ? item['value'] : '', <any> Validators.required),
      type: new FormControl(item ? item['type'] : ''),
      msg_required: new FormControl(item ? item['msg_required'] : ''),
      msg_invalid: new FormControl(item ? item['msg_invalid'] : ''),
    });
  }

  /**
   * Create Dynamic Employee Name Fields
   */
  createDynamicEmployeeNameFields(item ?: any) {
    return this._fb.group({
      first_name: new FormControl(item ? item['first_name'] : '', <any> Validators.required),
      last_name: new FormControl(item ? item['last_name'] : '', <any> Validators.required)
    });
  }

  /**
   * On Update Value Set Value + Update Validation for form
   * @param index
   * @param value
   */
  onUpdateValues(index: number, value: any, checked?: number, keyData?: any) {
    if (index >= 0) {
      if (value) {
        if (checked === 1 && keyData !== '') {
          this.getExtraFieldArray().controls[index].get('value').setValue(value[keyData]);
          this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
        } else {
          this.getExtraFieldArray().controls[index].get('value').setValue(value);
          this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
        }
      } else {
        this.getExtraFieldArray().controls[index].get('value').setValue(null);
        this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
      }
    }
    // console.log(this.getExtraFieldArray().controls);
  }

  /**
   * On Add Employee Fields
   * @param value
   */
  addEmployeeFields(value: number) {
    this.UpdateFormControlEmployee();
    let i = 0;
    if (value >= 0 && value < 6) {
      const item = [];
      item['first_name'] = '';
      item['last_name'] = '';
      for (i = 0; i <= value - 1; i++) {
        this.getNameOfEmployeeArray().push(this.createDynamicEmployeeNameFields(item));
      }
    }
  }

  /**
   * On Update Value Set Value + Update Validation for form
   * @param index
   * @param value
   */
  onUpdateEmployeeValues(index: number, value: any, key: string) {
    if (index >= 0) {
      if (value) {
        this.getNameOfEmployeeArray().controls[index].get(key).setValue(value);
        this.getNameOfEmployeeArray().controls[index].get(key).updateValueAndValidity();
      } else {
        this.getNameOfEmployeeArray().controls[index].get(key).setValue(null);
        this.getNameOfEmployeeArray().controls[index].get(key).updateValueAndValidity();
      }
    } else {
      this.getNameOfEmployeeArray().controls[index].get(key).setValue(null);
      this.getNameOfEmployeeArray().controls[index].get(key).updateValueAndValidity();
    }
    // console.log(this.getExtraFieldArray().controls);
  }

  /**
   * On Update Value Set Value + Update Validation for form
   * @param index
   * @param value
   */
  onUpdateDateValues(index: number, value: any) {
    if (index >= 0) {
      if (value) {
        const dateValue = moment(value).format('YYYY-MM-DD');
        this.getExtraFieldArray().controls[index].get('value').setValue(dateValue);
        this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
      } else {
        this.getExtraFieldArray().controls[index].get('value').setValue(null);
        this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
      }
    }
    // console.log(this.getExtraFieldArray().controls);
  }

  /**
   * Update Form Control
   * @constructor
   */
  UpdateFormControl() {
    this.addTimesheetForm.get('extra_fields').reset([]);
    this.addTimesheetForm.removeControl('extra_fields');
    this.addTimesheetForm.addControl('extra_fields', this._fb.array([]));
  }

  /**
   * Update Form Control
   * @constructor
   */
  UpdateFormControlEmployee() {
    this.addTimesheetForm.get('name_employee').reset([]);
    this.addTimesheetForm.removeControl('name_employee');
    this.addTimesheetForm.addControl('name_employee', this._fb.array([]));
  }

  /**
   * Check Reviewer Budgeted Unit
   * @param value
   */
  checkReviewerBudgetedUnit(value: number) {
    if (Number((value) > 0)) {
      this._commonCrudService.listData(AdminAPI.WORKSHEET_REVIEWER_UNIT, {
        'entity_id': this.worksheetData.entity_id,
        'worksheet_id': this.worksheetData.id
      }, {}).subscribe(response => {
        const budgetedUnit = Number(response.payload.data.budgeted_unit);
        const filledUnit = response.payload.data.filled_unit;
        this.reviewWriteOffData = response.payload.data.reviwerReason;
        const iswriteoffEntryExist = Number(response.payload.data.writeoff);
        const totalUnits = Number(filledUnit) + Number(value);
        // console.log(totalUnits, budgetedUnit, iswriteoffEntryExist, this.worksheetData.status_id.id);
        if ((totalUnits > budgetedUnit) && (iswriteoffEntryExist === 0) && (this.worksheetData.status_id.id === 2) && ((this.worksheetData.service_id === 1))) {
          this.isReviewerWriteOff = 1;
          if (this.reviewWriteOffData.length) {
            this.addTimesheetForm.get('timesheet_unit').setValue(totalUnits);
            this.addTimesheetForm.get('budgeted_unit').setValue(budgetedUnit);
            // this.addTimesheetForm
            this.addTimesheetForm.get('reviewer_reason').reset([]);
            this.addTimesheetForm.removeControl('reviewer_reason');
            this.addTimesheetForm.addControl('reviewer_reason', this._fb.array([], this.minSelectedCheckboxes(1)));
            this.reviewWriteOffData.forEach(item => {
              this.getReviewerReason().push(this.createReasonGroup(item));
            });
            const otherReason = [];
            otherReason['id'] = 0;
            otherReason['reason'] = 'Other';
            otherReason['selected'] = 0;
            this.getReviewerReason().push(this.createReasonGroup(otherReason));
          }
        } else {
          this.isReviewerWriteOff = 0;
          this.addTimesheetForm.get('reviewer_reason').reset([]);
          this.addTimesheetForm.get('timesheet_unit').setValue(null);
          this.addTimesheetForm.get('budgeted_unit').setValue(null);
          this.addTimesheetForm.removeControl('reviewer_reason');
          this.addTimesheetForm.addControl('reviewer_reason', this._fb.array([]));
        }
      });
    }
  }

  /**
   * On Update Write Off Reason Data Checked & Unchecked
   * @param event
   * @param filterGroup
   * @param index
   * @param id
   */
  changeUpdateReviewerWriteOff(event: any, filterGroup: any, index: number, id: number) {
    if (event) {
      this.getReviewerReason().controls[index].get('selected').setValue(1);
      if (id === 0) {
        this.addTimesheetForm.get('reviewer_comment').setValidators(Validators.required);
        this.addTimesheetForm.get('reviewer_comment').updateValueAndValidity();
      }
    } else {
      this.getReviewerReason().controls[index].get('selected').setValue(0);
      if (id === 0) {
        this.addTimesheetForm.get('reviewer_comment').setValidators(null);
        this.addTimesheetForm.get('reviewer_comment').updateValueAndValidity();
      }
    }
  }

  /**
   * Create Reason Group Form
   */
  createReasonGroup(item ?: any) {
    return this._fb.group({
      id: new FormControl(item ? item['id'] : ''),
      reason: new FormControl(item ? item['reason'] : ''),
      selected: new FormControl(item ? item['selected'] : '')
    });
  }

  /**
   * Check Minimum Validatior For Staff Reason
   * @param min
   */
  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
      // get a list of checkbox values (boolean)
        .filter(control => control.value['selected'] === 1);
      return totalSelected.length >= min ? null : {required: true};
    };
    return validator;
  }

  /**
   * Flag to Submit of add & add and new
   * @param type
   */
  flagToSubmitUpdate(type: number) {
    this.flagToSubmit = type;
  }

  /**
   * On Submit Timesheet
   * @param form
   */
  onSubmitTimesheet(form: FormGroup) {
    if (form.valid) {
      form.value['parent_id'] = this.worksheetData.parent_id;
      form.value['entity_id'] = this.worksheetData.entity_id;
      form.value['worksheet_frequency_id'] = this.worksheetData.frequency_id;
      form.value['user_id'] = this.userData.id;
      form.value['date'] = moment(new Date()).format('YYYY-MM-DD');
      form.value['is_export'] = 0;
      const nameOfEmp = form.value['name_employee'];
      if (nameOfEmp) {
        form.value['name_employee'] = JSON.stringify(nameOfEmp);
      } else {
        delete form.value['name_employee'];
      }
      if (form.value['extra_fields']) {
        const itemData = form.value['extra_fields'];
        if (itemData.length) {
          itemData.forEach(item => {
            form.value[item['key']] = item['value'];
          });
        }
      }
      if (form.value) {
        this._commonCrudService.addData(AdminAPI.TIMESHEET_LISTING, form.value).subscribe((response) => {
          if (this.flagToSubmit === 0) {
            this.addEditTimesheetDataForm.resetForm();
            this.createTimesheetForm();
          } else {
            this.addEditTimesheetDataForm.resetForm();
            this.createTimesheetForm();
          }
          this.dialogRef.close(true);
        });
        if (this.isReviewerWriteOff === 1) {
          const ReviewerReason = form.value['reviewer_reason'];
          const staff_json = {};
          staff_json['rawData'] = [];
          staff_json['coreData'] = [];
          staff_json['allData'] = [];
          const staffJSON = form.value['reviewer_reason'];
          staffJSON.forEach(item => {
            if (item['selected'] === 1) {
              staff_json['coreData'].push(item['id']);
              staff_json['rawData'].push(item['reason']);
            }
            staff_json['allData'].push(item);
          });
          form.value['reviewer_reason'] = JSON.stringify(staff_json);
          this._commonCrudService.addData(AdminAPI.REVIEWER_WRITEOFF_ADD, form.value).subscribe((response) => {
            this.getHRDetail();
            if (this.flagToSubmit === 0) {
              this.addEditTimesheetDataForm.resetForm();
              this.createTimesheetForm();
            } else {
              this.addEditTimesheetDataForm.resetForm();
              this.createTimesheetForm();
            }
            this.dialogRef.close(true);
          });
          form.value['reviewer_reason'] = ReviewerReason;
        }
        form.value['name_employee'] = nameOfEmp;
      }
    }
  }

  /**
   * On page worksheet
   */
  onWorksheet() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  /**
   * on page page timesheet
   */
  onTodaysTimesheet() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_TIMESHEET]);
  }

  onClose(): void {
    this.dialogRef.close(false);
  }

  /**
   * Update units on header
   */
  getHRDetail() {
    this._commonCrudService.listData(AdminAPI.GETDETAIL, {}).subscribe(Response => {
      this.hrDetail = Response.payload.data;
      const units = (this.hrDetail && (this.hrDetail.units >= 0)) ? this.hrDetail.units : 0;
      this._sharedService.setTimeSheetUnits(units);
    });
  }

  /**
   * On Change Parent Entity
   * @param event
   */
  onChangeParentEntity(event: any) {
    this.clientList = this.filteredTradingClientList;
    if (event && event.id > 0) {
      this.clientList = this.filteredTradingClientList.filter(item => item["parent_id"] === event.id);
    }
  }
}
