import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../../utility/validation';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Frequency} from '../../../../../../../utility/shared-model/frequency.model';
import {SubActivity} from '../../../../../workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/sub-activity.model';
import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';
import {Timesheet} from '../../../../../workflow-module/worksheet-module/worksheet-quick-action/todays-timesheet/timesheet.model';
import {WorksheetListing} from '../../../../../workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet.model';
import {Clients} from '../../../../../client-module/view-client/view-client.model';
import {MasterActivity} from '../../../../../workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/master-activity.model';
import {TaskList} from '../../../../../workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/task-list.model';
import {TimesheetConstantData} from '../../../../../../../utility/constants/timesheet-constant';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {getUnitsFromTime} from '../../../../../../../utility/common-functions';
import * as moment from 'moment';
import {AdminRoutes} from '../../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../../../../utility/shared-service/shared-object.service';
import {UserPendingTimesheet} from '../user-pending-timesheet.model';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {AttendanceSummary} from "../../attendance-summary.model";

@Component({
  selector: 'app-add-user-pending-timesheet-dialog',
  templateUrl: './add-user-pending-timesheet-dialog.component.html'
})
export class AddUserPendingTimesheetDialogComponent extends BaseComponent implements OnInit {
  @ViewChild('addEditTimesheetDataForm') addEditTimesheetDataForm;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  pendingTimesheetData: UserPendingTimesheet;
  // Form Group Variables
  addTimesheetForm: FormGroup;
  userData: AdminUser;
  timeSheetData: Timesheet;
  worksheetData: WorksheetListing;
  clientList: Clients[] = [];
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
  hrDetail: AttendanceSummary;


  constructor(
    public dialogRef: MatDialogRef<AddUserPendingTimesheetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _router: Router, private _sharedService: SharedService, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService) {
    super();
  }

  ngOnInit() {
    this.pendingTimesheetData = (this.data.UserPendingTimesheetData) ? this.data.UserPendingTimesheetData : null;
    // console.log(this.pendingTimesheetData);
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
      this.clientList = response;
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
    // if (this.worksheetData.entity_id) {
    //   this._commonCrudService.listData(AdminAPI.TIMESHEET_BANK_DETAILS, {
    //     'entity_id': this.worksheetData.entity_id
    //   }, {}).subscribe(response => {
    //     this.bankInformation = response.payload.data;
    //   });
    // }
  }

  /**
   * Address form creation
   */
  createTimesheetForm() {
    this.addTimesheetForm = this._fb.group({
      worksheet_id: new FormControl(0),
      entity_id: new FormControl(null, <any>Validators.required),
      date: new FormControl(this.pendingTimesheetData.date, <any>Validators.required),
      worksheet_frequency_id: new FormControl(null, <any>Validators.required),
      period_id: new FormControl(null, <any>Validators.required),
      master_activity_id: new FormControl(null, <any>Validators.required),
      task_id: new FormControl(null, <any>Validators.required),
      subactivity_code: new FormControl(null, <any>Validators.required),
      start_time: new FormControl(null),
      end_time: new FormControl(null),
      units: new FormControl(null, [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      notes: new FormControl(null),
      extra_fields: this._fb.array([]),
      name_employee: this._fb.array([]),
    });
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
        this.masterActivityList = [];
        const masterActivityData = response.payload.data;
        if (masterActivityData) {
          masterActivityData.forEach(item => {
            this.masterActivityList.push(item['master_activity_id']);
          });
        }
      });

      this._commonCrudService.listData(AdminAPI.TIMESHEET_BANK_DETAILS, {
        'entity_id': entity_id
      }, {}).subscribe(response => {
        this.bankInformation = [];
        this.bankInformation = response.payload.data;
      });
      this.getTaskList();
      this.getFrequencyList();
      this.getPeriodList();
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
        this.taskList = [];
        const taskData = response.payload.data;
        if (taskData) {
          taskData.forEach(item => {
            this.taskList.push(item['task_id']);
          });
        }
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
    const frequency = this.addTimesheetForm.get('worksheet_frequency_id').value;
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
  hideShowFields(value) {
    if (value) {
      const getSubActivity = this.getSubactivityField(Number(value));
      if (getSubActivity) {
        getSubActivity.forEach(item => {
          this.getExtraFieldArray().push(this.createDynamicFields(item));
        });
      }

      if (Number(value) === 448 || Number(value) === 417) {
        this._commonCrudService.listData(AdminAPI.TIMESHEET_PAYROLL_OPTIONS + '/' + value, {}, {}).subscribe(response => {
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
      if (units >= 0) {
        this.addTimesheetForm.get('units').setValue(units);
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
      // console.log(value);
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
      form.value['user_id'] = this.pendingTimesheetData.user_id;
      form.value['worksheet_id'] = form.value['period_id'];
      form.value['date'] = moment(this.pendingTimesheetData.date).format('YYYY-MM-DD');
      form.value['is_export'] = 0;
      form.value['is_pendingtimesheet_id'] = this.pendingTimesheetData.id;
      const nameOfEmp = form.value['name_employee'];
      if (nameOfEmp) {
        form.value['name_employee'] = JSON.stringify(nameOfEmp);
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
          this.getHRDetail();
          this.onClose();
          this._router.navigate(['/' + AdminRoutes.HRMS_USER_PENDING_TIMESHEET]);
        });
        form.value['name_employee'] = nameOfEmp;
      }
    }
  }


  onClose(): void {
    this.dialogRef.close();
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
}
