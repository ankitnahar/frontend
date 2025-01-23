import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonRegex, ToastErrorMessages, ValidationConstantMessage} from '../../../../../../../../utility/validation';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminUser, Privilege} from '../../../../../../../../utility/shared-model/admin-user.model';
import {Timesheet} from '../../timesheet.model';
import {Clients} from '../../../../../../client-module/view-client/view-client.model';
import {Frequency} from '../../../../../../../../utility/shared-model/frequency.model';
import {MasterActivity} from '../../../hierarchy/master-activity/master-activity.model';
import {TaskList} from '../../../hierarchy/task-list/task-list.model';
import {SubActivity} from '../../../hierarchy/sub-activity/sub-activity.model';
import {TimesheetConstantData} from '../../../../../../../../utility/constants/timesheet-constant';
import {Router} from '@angular/router';
import {SharedService} from '../../../../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../../../../utility/shared-service/shared-object.service';
import {GLOBALDATAKEYS, ToastType} from '../../../../../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../../../../../utility/constants/api';
import {getUnitsFromTime} from '../../../../../../../../utility/common-functions';
import * as moment from 'moment';
import {AdminRoutes} from '../../../../../../../../utility/constants/admin-route';
import {BaseComponent} from '../../../../../../../../utility/components/base/base.component';
import {ADMINTABACCESS} from '../../../../../../../../utility/constants/header-constant';
import {SubClient} from '../../../sub-client-list/subclient.model';
import {AttendanceSummary} from "../../../../../../hrms-module/hrms-dashboard/attendance-summary/attendance-summary.model";

@Component({
  selector: 'app-add-new-review-timesheet-form',
  templateUrl: './add-new-review-timesheet-form.component.html',
  styleUrls: ['./add-new-review-timesheet-form.component.scss']
})
export class AddNewReviewTimesheetFormComponent extends BaseComponent implements OnInit {
  @ViewChild('addEditTimesheetDataForm') addEditTimesheetDataForm;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Group Variables
  addTimesheetForm: FormGroup;
  timeSheetData: Timesheet;
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
  nameOfEmp = [];
  userData: AdminUser;

  tabIDWorksheetHierarchy = ADMINTABACCESS.WORKFLOW_MASTERACTIVITY;
  tabIDWorksheetTraining = ADMINTABACCESS.WORKFLOW_WORKSHEETTRAINING;
  tabIDWorksheetSubClientList = ADMINTABACCESS.WORKFLOW_SUBCLIENTLIST;
  tabIDWorksheetReviewerList = ADMINTABACCESS.WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
  tabIDWorksheetPeerReviewerList = ADMINTABACCESS.WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
  tabIDWorksheetMasterChecklist = ADMINTABACCESS.WORKFLOW_MASTERCHECKLIST;
  tabIDWorksheetMultiplueStatusChange = ADMINTABACCESS.WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;

  tabDataWorksheetHierarchy: Privilege | any[];
  tabDataWorksheetTraining: Privilege | any[];
  tabDataWorksheetSubClientList: Privilege | any[];
  tabDataWorksheetReviewerList: Privilege | any[];
  tabDataWorksheetPeerReviewerList: Privilege | any[];
  tabDataWorksheetMasterChecklist: Privilege | any[];
  isMultipleStatusUpdate = false;
  worksheetTabID = ADMINTABACCESS.WORKFLOW_WORKSHEET;
  worksheetTabIDData: Privilege | any[];
  subClientList: SubClient[] = [];
  entity_grouptype_id = 0;
  hrDetail: AttendanceSummary;

  constructor(private _router: Router, private _fb: FormBuilder, private _sharedService: SharedService, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService) {
    super();
  }

  ngOnInit() {
    this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
    this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
    this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
    this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
    this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
    this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
    this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);

    this.timeSheetData = this._sharedService.getTimesheetData(GLOBALDATAKEYS.TIMESHEET_ITEM_DATA);
    if (this.timeSheetData.name_of_employee && this.timeSheetData.name_of_employee !== '"[]"') {
      this.nameOfEmp = JSON.parse(this.timeSheetData.name_of_employee);
    }
    this.userData = this._sharedService.getUser();
    // console.log(this.timeSheetData);
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
    if (this.timeSheetData.entity_id) {
      this._commonCrudService.listData(AdminAPI.TIMESHEET_BANK_DETAILS, {
        'entity_id': this.timeSheetData.entity_id
      }, {}).subscribe(response => {
        this.bankInformation = response.payload.data;
      });
    }
    // Get Subactivity
    this.getSubactivityFilterList(null);
  }

  /**
   * Address form creation
   */
  createTimesheetForm() {
    this.addTimesheetForm = this._fb.group({
      worksheet_id: new FormControl((this.timeSheetData) ? this.timeSheetData.worksheet_id : 0),
      entity_id: new FormControl((this.timeSheetData) ? this.timeSheetData.entity_id : 0, <any>Validators.required),
      parent_id: new FormControl((this.timeSheetData && this.timeSheetData.parent_id > 0) ? this.timeSheetData.parent_id : null),
      date: new FormControl(new Date(), <any>Validators.required),
      worksheet_frequency_id: new FormControl((this.timeSheetData) ? this.timeSheetData.worksheet_frequency_id : 0),
      period_id: new FormControl((this.timeSheetData) ? this.timeSheetData.worksheet_id : 0),
      master_activity_id: new FormControl((this.timeSheetData) ? this.timeSheetData.master_id : 0),
      task_id: new FormControl((this.timeSheetData) ? this.timeSheetData.task_id : 0),
      subactivity_code: new FormControl((this.timeSheetData) ? ((this.timeSheetData.subactivity_code === 404) ? 402 : 403) : 0, <any>Validators.required),
      start_time: new FormControl(null),
      end_time: new FormControl(null),
      units: new FormControl(null, [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), <any>Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_ZERO_NUMBER_REGEXP)]),
      notes: new FormControl(null),
      extra_fields: this._fb.array([]),
      name_employee: this._fb.array([])
    });

    if (this.timeSheetData) {
      this.getFrequencyList();
      this.getPeriodList();
      this.getTaskFilterList(this.timeSheetData.master_id);
      // this.getSubactivityFilterList(this.timeSheetData.task_id);
      this.hideShowFields(this.addTimesheetForm.get('subactivity_code').value);
    }
  }

  /**
   * Get Sub Client List for Entity Type - Superrecord(14)
   */
  getSubClientList() {
    const entity_id = this.addTimesheetForm.get('entity_id').value;
    if (entity_id > 0) {
      this._sharedObjService.getSubClientList({'records': 'all'}, {'compare': {'equal': {'entity_id': entity_id}}}).subscribe((response) => {
        this.subClientList = response;
      });
    }
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
        // To Show Subclient field and mark as mandatory field
        if ((response.payload.entityGrouptypeId) && (response.payload.entityGrouptypeId === 14)) {
          this.entity_grouptype_id = response.payload.entityGrouptypeId;
          // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
          // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
          this.getSubClientList();
        } else {
          this.entity_grouptype_id = response.payload.entityGrouptypeId;
          // this.addTimesheetForm.get('subclient_id').setValidators(null);
          // this.addTimesheetForm.get('subclient_id').setValue(null);
          // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
        }
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
        // To Show Subclient field and mark as mandatory field
        if ((response.payload.entityGrouptypeId) && (response.payload.entityGrouptypeId === 14)) {
          this.entity_grouptype_id = response.payload.entityGrouptypeId;
          // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
          // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
          this.getSubClientList();
        } else {
          this.entity_grouptype_id = response.payload.entityGrouptypeId;
          // this.addTimesheetForm.get('subclient_id').setValidators(null);
          // this.addTimesheetForm.get('subclient_id').setValue(null);
          // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
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
        // To Show Subclient field and mark as mandatory field
        if ((response.payload.entityGrouptypeId) && (response.payload.entityGrouptypeId === 14)) {
          this.entity_grouptype_id = response.payload.entityGrouptypeId;
          // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
          // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
          this.getSubClientList();
        } else {
          this.entity_grouptype_id = response.payload.entityGrouptypeId;
          // this.addTimesheetForm.get('subclient_id').setValidators(null);
          // this.addTimesheetForm.get('subclient_id').setValue(null);
          // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
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
        // To Show Subclient field and mark as mandatory field
        if ((response.payload.entityGrouptypeId) && (response.payload.entityGrouptypeId === 14)) {
          this.entity_grouptype_id = response.payload.entityGrouptypeId;
          // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
          // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
          this.getSubClientList();
        } else {
          this.entity_grouptype_id = response.payload.entityGrouptypeId;
          // this.addTimesheetForm.get('subclient_id').setValidators(null);
          // this.addTimesheetForm.get('subclient_id').setValue(null);
          // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
        }
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
      }
    }
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
   * On Select Check Subactivity have extra fields
   * @param subActivity
   */
  hideShowFields(value: any) {
    // Remove old fields of subactivity on change

    // If value of subactivity code then
    if (value) {
      const getSubActivity = this.getSubactivityField(Number(value.subactivity_code));
      if (getSubActivity) {
        getSubActivity.forEach(item => {
          this.getExtraFieldArray().push(this.createDynamicFields(item));
        });
      }
      // API Call of Number
      if (Number(value.subactivity_code) === 448 || Number(value.subactivity_code) === 417) {
        this._commonCrudService.listData(AdminAPI.TIMESHEET_PAYROLL_OPTIONS + '/' + value.subactivity_code, {}, {}).subscribe(response => {
          this.payrollOptionList = response.payload.data;
        });
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
    // console.log(itemValue);
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
   * On Add Employee Fields
   * @param value
   */
  addEmployeeFields(value: number) {
    this.UpdateFormControlEmployee();
    let i = 0;
    if (value >= 0 && value < 6) {
      for (i = 0; i <= value - 1; i++) {
        const firstName = (this.nameOfEmp[i]) ? this.nameOfEmp[i]['first_name'] : '';
        const lastName = (this.nameOfEmp[i]) ? this.nameOfEmp[i]['last_name'] : '';
        const item = [];
        item['first_name'] = firstName;
        item['last_name'] = lastName;
        this.getNameOfEmployeeArray().push(this.createDynamicEmployeeNameFields(item));
      }
    }
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
  }

  /**
   * On Update Value Set Value + Update Validation for form
   * @param index
   * @param value
   */
  onUpdateCompareValues(index: number, value: any) {
    if (index >= 0) {
      if (value) {
        if (Number(this.timeSheetData.no_of_value) === Number(value)) {
          this._sharedService.setToastMessage(ToastErrorMessages.NO_OF_EMP_TIMESHEET_MATCHED, ToastType.SUCCESS);
          this.getExtraFieldArray().controls[index].get('value').setValue(value);
          this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
        } else {
          this._sharedService.setToastMessage(ToastErrorMessages.NO_OF_EMP_TIMESHEET_NOT_MATCHED, ToastType.ERROR);
          this.getExtraFieldArray().controls[index].get('value').setValue(null);
          this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
        }
      } else {
        this.getExtraFieldArray().controls[index].get('value').setValue(null);
        this.getExtraFieldArray().controls[index].get('value').updateValueAndValidity();
      }
    }
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
      form.value['entity_id'] = this.timeSheetData.entity_id;
      form.value['worksheet_frequency_id'] = this.timeSheetData.worksheet_frequency_id;
      form.value['user_id'] = this.userData.id;
      form.value['date'] = moment(new Date()).format('YYYY-MM-DD');
      form.value['timesheet_id'] = this.timeSheetData.id;
      form.value['review_subcode'] = this.timeSheetData.subactivity_code;
      form.value['is_reviewed_timesheet'] = 1;
      form.value['subactivity_code'] = this.addTimesheetForm.get('subactivity_code').value;
      form.value['is_export'] = 0;
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
          if (this.flagToSubmit === 0) {
            this.onTodaysTimesheet();
          } else {
            this.addEditTimesheetDataForm.resetForm();
            this.createTimesheetForm();
          }
        });
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

  /**
   * Open quick menu
   * @param menuName
   */
  onOpenQuickMenu(menuName) {
    switch (menuName) {
      case 'addNewWorksheet':
        this._router.navigate(['/' + AdminRoutes.ADD_WORKSHEET]);
        break;
      case 'todayWorksheet':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_WORKSHEET]);
        break;
      case 'todayTimesheet':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_TIMESHEET]);
        break;
      case 'worksheetHierarchy':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_HIERARCHY]);
        break;
      case 'changeInOuttime':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_CHANGE_IN_OUT_TIME]);
        break;
      case 'subClientList':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_SUB_CLIENT_LIST]);
        break;
      case 'worksheetMasterChecklist':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_MASTER_CHECKLIST]);
        break;
      case 'trainingList':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_TRAINING_LIST]);
        break;
      case 'revieworKnockBackWorksheet':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_REVIEW_OR_KNOCK_BACK]);
        break;
      case 'peerReviewWorksheetListing':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
        break;
      case 'changeMultipleWorksheetStatus':
        this._router.navigate(['/' + AdminRoutes.CHANGE_MULTIPLE_WORKSHEET_STATUS]);
        break;
    }
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
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
