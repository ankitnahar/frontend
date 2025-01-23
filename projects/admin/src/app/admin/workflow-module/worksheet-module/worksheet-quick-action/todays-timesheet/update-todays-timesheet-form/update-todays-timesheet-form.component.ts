import { Component, OnInit, ViewChild } from "@angular/core";
import { BaseComponent } from "../../../../../../../utility/components/base/base.component";
import { CommonRegex, ValidationConstantMessage } from "../../../../../../../utility/validation";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Timesheet } from "../timesheet.model";
import { Clients } from "../../../../../client-module/view-client/view-client.model";
import { AdminUser } from "../../../../../../../utility/shared-model/admin-user.model";
import { Frequency } from "../../../../../../../utility/shared-model/frequency.model";
import { MasterActivity } from "../../hierarchy/master-activity/master-activity.model";
import { TaskList } from "../../hierarchy/task-list/task-list.model";
import { SubActivity } from "../../hierarchy/sub-activity/sub-activity.model";
import { TimesheetConstantData } from "../../../../../../../utility/constants/timesheet-constant";
import { Router } from "@angular/router";
import { SharedService } from "../../../../../../../utility/shared-service/shared.service";
import { CommonCrudService } from "../../../../../../../utility/shared-service/common-crud.service";
import { SharedObjService } from "../../../../../../../utility/shared-service/shared-object.service";
import { GLOBALDATAKEYS } from "../../../../../../../utility/constants/base-constants";
import { AdminAPI } from "../../../../../../../utility/constants/api";
import * as moment from "moment";
import { AdminRoutes } from "../../../../../../../utility/constants/admin-route";
import { getUnitsFromTime } from "../../../../../../../utility/common-functions";
import { SubClient } from "../../sub-client-list/subclient.model";
import { AttendanceSummary } from "../../../../../hrms-module/hrms-dashboard/attendance-summary/attendance-summary.model";

@Component({
  selector: "app-update-todays-timesheet-form",
  templateUrl: "./update-todays-timesheet-form.component.html",
  styleUrls: ["./update-todays-timesheet-form.component.scss"],
})
export class UpdateTodaysTimesheetFormComponent extends BaseComponent implements OnInit {
  @ViewChild("addEditTimesheetDataForm") addEditTimesheetDataForm;
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
  frequencyDDList: Frequency[] = [];
  masterActivityList: MasterActivity[] = [];
  taskList: TaskList[] = [];
  subActivityList: SubActivity[] = [];
  timesheetConstant = TimesheetConstantData;
  periodList: any[] = [];
  payrollOptionList: any[] = [];
  flagToSubmit = 0;
  nameOfEmp = [];
  entity_grouptype_id = 0;
  subClientList: SubClient[] = [];
  hrDetail: AttendanceSummary;

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _sharedService: SharedService,
    private _commonCrudService: CommonCrudService,
    private _sharedObjService: SharedObjService
  ) {
    super();
  }

  ngOnInit() {
    this.timeSheetData = this._sharedService.getTimesheetData(GLOBALDATAKEYS.TIMESHEET_ITEM_DATA);
    if (this.timeSheetData.name_of_employee && this.timeSheetData.name_of_employee !== '"[]"') {
      this.nameOfEmp = JSON.parse(this.timeSheetData.name_of_employee);
    }
    // console.log(this.timeSheetData);
    this.getDropdownData();
    this.createTimesheetForm();
  }

  /**
   * Get Dropdown data
   */
  getDropdownData() {
    // Get Frequency
    this._sharedObjService.getFrequency({ records: "all" }, {}).subscribe((response) => {
      this.frequencyList = response;
      this.frequencyDDList = response;
    });
    // Get Client
    this._sharedObjService.getClientList({ records: "all" }, {}).subscribe((response) => {
      this.clientList = this.filteredTradingClientList = response;
      this.parentClientList = response.filter((item) => item.is_parent === 1);
    });
    // Get Master Activity
    this._sharedObjService.getMasterActivity({ records: "all" }, {}).subscribe((response) => {
      this.masterActivityList = response;
    });
    // Get Task
    this._sharedObjService.getTask({ records: "all" }, {}).subscribe((response) => {
      this.taskList = response;
    });

    // Get Reviewer List
    this._sharedObjService
      .getUserList(
        { records: "all" },
        {
          compare: { equal: { is_active: 1 } },
          in: { designation_id: "68,69,70,73,71" },
          findinset: { team_id: [2] },
        }
      )
      .subscribe((response) => {
        this.reviewerUserList = response;
      });

    // Get Bank Information List
    if (this.timeSheetData.entity_id) {
      this._commonCrudService
        .listData(
          AdminAPI.TIMESHEET_BANK_DETAILS,
          {
            entity_id: this.timeSheetData.entity_id,
          },
          {}
        )
        .subscribe((response) => {
          this.bankInformation = response.payload.data;
        });
    }
  }

  /**
   * Address form creation
   */
  createTimesheetForm() {
    this.addTimesheetForm = this._fb.group({
      worksheet_id: new FormControl(this.timeSheetData ? this.timeSheetData.worksheet_id : 0),
      parent_id: new FormControl(this.timeSheetData && this.timeSheetData.parent_id > 0 ? this.timeSheetData.parent_id : null),
      entity_id: new FormControl(this.timeSheetData ? this.timeSheetData.entity_id : 0, <any>Validators.required),
      date: new FormControl(this.timeSheetData ? this.timeSheetData.date : null),
      worksheet_frequency_id: new FormControl(this.timeSheetData ? this.timeSheetData.worksheet_frequency_id : 0),
      period_id: new FormControl(this.timeSheetData ? this.timeSheetData.worksheet_id : 0),
      master_activity_id: new FormControl(this.timeSheetData ? this.timeSheetData.master_id : 0),
      task_id: new FormControl(this.timeSheetData ? this.timeSheetData.task_id : 0),
      subactivity_code: new FormControl(this.timeSheetData ? this.timeSheetData.subactivity_code : 0, <any>Validators.required),
      start_time: new FormControl(this.timeSheetData ? this.timeSheetData.start_time : null),
      end_time: new FormControl(this.timeSheetData ? this.timeSheetData.end_time : null),
      units: new FormControl(this.timeSheetData ? this.timeSheetData.units : null, [
        <any>Validators.required,
        <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP),
      ]),
      notes: new FormControl(this.timeSheetData ? this.timeSheetData.notes : null),
      // subclient_id: new FormControl((this.timeSheetData) ? (this.timeSheetData.subclient_id > 0) ? this.timeSheetData.subclient_id : null : null),
      extra_fields: this._fb.array([]),
      name_employee: this._fb.array([]),
    });

    if (this.timeSheetData) {
      this.getFrequencyList();
      this.getPeriodList();
      this.getTaskFilterList(this.timeSheetData.master_id);
      if (Number(this.timeSheetData.review_subcode) > 0) {
        this.getSubactivityFilterList(null);
      } else {
        this.getSubactivityFilterList(this.timeSheetData.task_id);
      }
      this.hideShowFields({ subactivity_code: this.timeSheetData.subactivity_code });
      if (this.timeSheetData.subactivity_code === 462) {
        if (this.timeSheetData.no_of_value > 0) {
          this.addEmployeeFields(this.timeSheetData.no_of_value);
        }
      }
    }
  }

  /**
   * Create Dynamic Employee Name Fields
   */
  createDynamicEmployeeNameFields(item?: any) {
    return this._fb.group({
      first_name: new FormControl(item ? item["first_name"] : "", <any>Validators.required),
      last_name: new FormControl(item ? item["last_name"] : "", <any>Validators.required),
    });
  }

  /**
   * Get Extra Field Array
   */
  getExtraFieldArray(): FormArray {
    return <FormArray>this.addTimesheetForm.get("extra_fields");
  }

  /**
   * Get Name Of Employee
   */
  getNameOfEmployeeArray(): FormArray {
    return <FormArray>this.addTimesheetForm.get("name_employee");
  }

  /**
   * Get Task Filter List
   * @param value
   */
  getTaskFilterList(value: any) {
    // Get Task
    // console.log(2);
    if (value) {
      this._sharedObjService.getTask({ records: "all" }, { in: { master_activity_id: value } }).subscribe((response) => {
        this.addTimesheetForm.get("task_id").setValue(null);
        this.addTimesheetForm.get("task_id").updateValueAndValidity();
        this.taskList = response;
      });
    } else {
      this._sharedObjService.getTask({ records: "all" }, {}).subscribe((response) => {
        this.taskList = response;
      });
    }
  }

  /**
   * Get Master Activity List
   */
  getMasterActivityList() {
    const entity_id = this.addTimesheetForm.get("entity_id").value;
    if (entity_id) {
      this._commonCrudService
        .listData(
          AdminAPI.TIMESHEET_DETAILS,
          {
            entity_id: entity_id,
          },
          {}
        )
        .subscribe((response) => {
          this.masterActivityList = response.payload.data;
          // To Show Subclient field and mark as mandatory field
          if (response.payload.entityGrouptypeId && response.payload.entityGrouptypeId === 14) {
            this.entity_grouptype_id = response.payload.entityGrouptypeId;
            // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
            // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
            this.getSubClientList();
          }
        });
    }
  }

  /**
   * Get Sub Client List for Entity Type - Superrecord(14)
   */
  getSubClientList() {
    this._sharedObjService
      .getSubClientList({ records: "all" }, { compare: { equal: { entity_id: this.timeSheetData.entity_id } } })
      .subscribe((response) => {
        this.subClientList = response;
      });
  }

  /**
   * Get Task List
   */
  getTaskList() {
    const entity_id = this.addTimesheetForm.get("entity_id").value;
    const master_activity_id = this.addTimesheetForm.get("master_activity_id").value;
    if (entity_id && master_activity_id) {
      this._commonCrudService
        .listData(
          AdminAPI.TIMESHEET_DETAILS,
          {
            entity_id: entity_id,
            master_activity_id: master_activity_id,
          },
          {}
        )
        .subscribe((response) => {
          this.taskList = response.payload.data;
          // To Show Subclient field and mark as mandatory field
          if (response.payload.entityGrouptypeId && response.payload.entityGrouptypeId === 14) {
            this.entity_grouptype_id = response.payload.entityGrouptypeId;
            // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
            // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
            this.getSubClientList();
          }
        });
    }
  }

  /**
   * Get Frequency List
   */
  getFrequencyList() {
    const task_id = this.addTimesheetForm.get("task_id").value;
    const entity_id = this.addTimesheetForm.get("entity_id").value;
    const master_activity_id = this.addTimesheetForm.get("master_activity_id").value;
    if (task_id && entity_id && master_activity_id) {
      this._commonCrudService
        .listData(
          AdminAPI.TIMESHEET_DETAILS,
          {
            entity_id: entity_id,
            master_activity_id: master_activity_id,
            task_id: task_id,
          },
          {}
        )
        .subscribe((response) => {
          this.frequencyList = [];
          const frequencyData = response.payload.data;
          if (frequencyData) {
            frequencyData.forEach((item) => {
              this.frequencyList.push(item["frequency_id"]);
            });
          }
          // To Show Subclient field and mark as mandatory field
          if (response.payload.entityGrouptypeId && response.payload.entityGrouptypeId === 14) {
            this.entity_grouptype_id = response.payload.entityGrouptypeId;
            // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
            // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
            this.getSubClientList();
          }
        });
    }
  }

  /**
   * Get Period List
   */
  getPeriodList() {
    const task_id = this.addTimesheetForm.get("task_id").value;
    const entity_id = this.addTimesheetForm.get("entity_id").value;
    const master_activity_id = this.addTimesheetForm.get("master_activity_id").value;
    const frequency = this.addTimesheetForm.get("worksheet_frequency_id").value;
    if (task_id && entity_id && master_activity_id && frequency) {
      this._commonCrudService
        .listData(
          AdminAPI.TIMESHEET_DETAILS,
          {
            entity_id: entity_id,
            master_activity_id: master_activity_id,
            task_id: task_id,
            frequency_id: frequency,
          },
          {}
        )
        .subscribe((response) => {
          this.periodList = response.payload.data;
          // To Show Subclient field and mark as mandatory field
          if (response.payload.entityGrouptypeId && response.payload.entityGrouptypeId === 14) {
            this.entity_grouptype_id = response.payload.entityGrouptypeId;
            // this.addTimesheetForm.get('subclient_id').setValidators(<any>Validators.required);
            // this.addTimesheetForm.get('subclient_id').updateValueAndValidity();
            this.getSubClientList();
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
      this._sharedObjService
        .getSubactivity(
          {
            records: "all",
            sortBy: "asc",
            sortOrder: "subactivity_code",
          },
          { compare: { equal: { task_id: value } } }
        )
        .subscribe((response) => {
          //this.addTimesheetForm.get('subactivity_code').setValue(null);
          //this.addTimesheetForm.get('subactivity_code').updateValueAndValidity();
          this.subActivityList = response;
        });
    } else {
      this._sharedObjService
        .getSubactivity(
          {
            records: "all",
            sortBy: "asc",
            sortOrder: "subactivity_code",
          },
          {}
        )
        .subscribe((response) => {
          this.subActivityList = response;
        });
    }
  }

  /**
   * On Time Update Change Units
   */
  updateUnits() {
    const startTime = this.addTimesheetForm.get("start_time").value;
    const endTime = this.addTimesheetForm.get("end_time").value;
    if (startTime && endTime) {
      const units = getUnitsFromTime(startTime, endTime);
      // console.log(this.addTimesheetForm.get('units').value);
      if (units >= 0) {
        this.addTimesheetForm.get("units").setValue(units);
      }
    }
  }

  /**
   * Update Form Control
   * @constructor
   */
  UpdateFormControl() {
    this.addTimesheetForm.get("extra_fields").reset([]);
    this.addTimesheetForm.removeControl("extra_fields");
    this.addTimesheetForm.addControl("extra_fields", this._fb.array([]));
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
        getSubActivity.forEach((item) => {
          this.getExtraFieldArray().push(this.createDynamicFields(item));
        });
      }
      // API Call of Number
      if (Number(value.subactivity_code) === 448 || Number(value.subactivity_code) === 417) {
        this._commonCrudService
          .listData(AdminAPI.TIMESHEET_PAYROLL_OPTIONS + "/" + value.subactivity_code, {}, {})
          .subscribe((response) => {
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
    const ItemData = this.timesheetConstant[index] ? this.timesheetConstant[index] : null;
    return ItemData;
  }

  /**
   * Create Dynamic Fields
   */
  createDynamicFields(item?: any) {
    item["value"] = item["value"] !== "" || item["value"] !== null ? item["value"] : null;
    let itemValue = null;
    if (item["key"] === "bank_info") {
      itemValue = this.timeSheetData ? this.timeSheetData["bank_cc_name"] + ":" + this.timeSheetData["bank_cc_account_no"] : item["value"];
    } else {
      itemValue = this.timeSheetData[item["key"]] ? this.timeSheetData[item["key"]] : item["value"];
    }
    // console.log(itemValue);
    return this._fb.group({
      label: new FormControl(item ? item["label"] : ""),
      help: new FormControl(item ? item["help"] : ""),
      key: new FormControl(item ? item["key"] : ""),
      value: new FormControl(itemValue, <any>Validators.required),
      type: new FormControl(item ? item["type"] : ""),
      msg_required: new FormControl(item ? item["msg_required"] : ""),
      msg_invalid: new FormControl(item ? item["msg_invalid"] : ""),
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
        const firstName = this.nameOfEmp[i] ? this.nameOfEmp[i]["first_name"] : "";
        const lastName = this.nameOfEmp[i] ? this.nameOfEmp[i]["last_name"] : "";
        const item = [];
        item["first_name"] = firstName;
        item["last_name"] = lastName;
        this.getNameOfEmployeeArray().push(this.createDynamicEmployeeNameFields(item));
      }
    }
  }

  /**
   * Update Form Control
   * @constructor
   */
  UpdateFormControlEmployee() {
    this.addTimesheetForm.get("name_employee").reset([]);
    this.addTimesheetForm.removeControl("name_employee");
    this.addTimesheetForm.addControl("name_employee", this._fb.array([]));
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
        if (checked === 1 && keyData !== "") {
          this.getExtraFieldArray().controls[index].get("value").setValue(value[keyData].toString());
          this.getExtraFieldArray().controls[index].get("value").updateValueAndValidity();
        } else {
          this.getExtraFieldArray().controls[index].get("value").setValue(value);
          this.getExtraFieldArray().controls[index].get("value").updateValueAndValidity();
        }
      } else {
        this.getExtraFieldArray().controls[index].get("value").setValue(null);
        this.getExtraFieldArray().controls[index].get("value").updateValueAndValidity();
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
        const dateValue = moment(value).format("YYYY-MM-DD");
        this.getExtraFieldArray().controls[index].get("value").setValue(dateValue);
        this.getExtraFieldArray().controls[index].get("value").updateValueAndValidity();
      } else {
        this.getExtraFieldArray().controls[index].get("value").setValue(null);
        this.getExtraFieldArray().controls[index].get("value").updateValueAndValidity();
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
      form.value["parent_id"] = this.timeSheetData.parent_id;
      form.value["entity_id"] = this.timeSheetData.entity_id;
      form.value["user_id"] = this.timeSheetData.user_id;
      form.value["_method"] = "put";
      form.value["date"] = moment(this.timeSheetData.date).format("YYYY-MM-DD");
      form.value["is_export"] = 0;
      // If reviewed timesheet goes for edit
      if (Number(this.timeSheetData.review_subcode) > 0) {
        form.value["subactivity_code"] = this.addTimesheetForm.get("subactivity_code").value;
      }

      if (form.value["extra_fields"]) {
        const itemData = form.value["extra_fields"];
        if (itemData.length) {
          itemData.forEach((item) => {
            form.value[item["key"]] = item["value"];
          });
        }
      }
      if (form.value) {
        if (this.timeSheetData) {
          this._commonCrudService.updateData(AdminAPI.TIMESHEET_LISTING, this.timeSheetData.id, form.value).subscribe((response) => {
            if (response) {
              this.getHRDetail();
              this.onTodaysTimesheet();
            }
          });
        }
      }
    }
  }

  /**
   * On page worksheet
   */
  onWorksheet() {
    this._router.navigate(["/" + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  /**
   * on page page timesheet
   */
  onTodaysTimesheet() {
    this._router.navigate(["/" + AdminRoutes.WORKSHEET_TODAYS_TIMESHEET]);
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(["/" + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Update units on header
   */
  getHRDetail() {
    this._commonCrudService.listData(AdminAPI.GETDETAIL, {}).subscribe((Response) => {
      this.hrDetail = Response.payload.data;
      const units = this.hrDetail && this.hrDetail.units >= 0 ? this.hrDetail.units : 0;
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
      this.clientList = this.filteredTradingClientList.filter((item) => item["parent_id"] === event.id);
    }
  }
}
