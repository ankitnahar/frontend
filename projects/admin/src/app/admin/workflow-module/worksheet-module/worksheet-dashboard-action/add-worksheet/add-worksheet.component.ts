import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
// crud
import {GLOBALDATAKEYS, yesNo} from '../../../../../../utility/constants/base-constants';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {Clients} from '../../../../client-module/view-client/view-client.model';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import * as moment from 'moment';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {MasterActivity} from '../../worksheet-quick-action/hierarchy/master-activity/master-activity.model';
import {TaskList} from '../../worksheet-quick-action/hierarchy/task-list/task-list.model';
import {ADMINTABACCESS} from '../../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../../utility/shared-model/admin-user.model';

@Component({
  selector: 'app-add-worksheet',
  templateUrl: './add-worksheet.component.html',
  styleUrls: ['./add-worksheet.component.scss'],
})
export class AddWorksheetComponent extends BaseComponent implements OnInit {

  [x: string]: any;

  freqValueData = 0;
  frequencyList: any;
  clientListAllData: Clients[] = [];
  taskDataMain: any[];
  masterActivityList: MasterActivity[] = [];
  taskList: TaskList[] = [];
  yesNoList = yesNo.slice(1);
  dateData = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  ];
  monthData = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  dayData = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Form Group Variables
  addWorksheetForm: FormGroup;

  // State variables
  isMultipleClientName = false;
  selectedUserFilterEntity: any;
  clientData: Clients;
  clientList: Clients[] = [];
  clientListParent: Clients[] = [];
  clientListFiltered: Clients[] = [];
  selected: any;
  checkBoxValue: any;
  isSingle = true;
  addiotionalAssignee = [];
  selectedFilterEntity: any;

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
  buttonType = 0;
  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _sharedService: SharedService,
    private _sharedObjService: SharedObjService,
    private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
    this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
    this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
    this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
    this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
    this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);

    this.createWorksheetForm();
    this.getTaskAndMasterActivity();
    this.getClientList();
    // this.getClientMultiple();
    this.getFrequencyData();

    const data = this._sharedService.getClientData(GLOBALDATAKEYS.ADD_WORKSHEET);
    // console.log(data);
    if (data) {
      setTimeout(res => {
        this.addWorksheetForm.controls['parent_id'].setValue(data.parent_id);
        this.addWorksheetForm.controls['parent_name'].setValue(data.parent_name);
        this.addWorksheetForm.controls['entity_id'].setValue(data.entity_id);
        this.addWorksheetForm.controls['master_activity_id'].setValue(data.master_activity_id);
        this.addWorksheetForm.controls['task_id'].setValue(data.task_id);
        this.addWorksheetForm.controls['start_date'].setValue(data.start_date);
        this.addWorksheetForm.controls['end_date'].setValue(data.end_date);
        this.addWorksheetForm.controls['frequency_id'].setValue(data.frequency_id);
        this.addWorksheetForm.controls['due_date_period'].setValue(data.due_date_period);
        this.addWorksheetForm.controls['budgeted_unit'].setValue(data.budgeted_unit);
        this.addWorksheetForm.controls['budgeted_unit'].setValue(data.budgeted_unit);
        this.addWorksheetForm.controls['critical_task'].setValue(data.critical_task);

        if (data.due_after_day) {
          this.addWorksheetForm.controls['due_after_day'].setValue(data.due_after_day);
        }

        if (data.due_month_day) {
          this.addWorksheetForm.controls['due_month_day'].setValue(data.due_month_day);
        }

        if (data.due_on_particular_date) {
          this.addWorksheetForm.controls['due_on_particular_date'].setValue(data.due_on_particular_date);
        }
        this.addWorksheetForm.controls['notes'].setValue(data.notes);
        // console.log(data.worksheet_additional_assignee);
        this.addWorksheetForm.controls['worksheet_additional_assignee'].setValue(Number(data.worksheet_additional_assignee));
        this.freqValueData = data.frequency_id;
        this.getFreqValue(this.freqValueData);

        if (data.entity_id.toString().indexOf(',') !== -1) {
          this.selectedFilterEntity = data.entity_id.split(',').map(response => {
            return +response;
          });
          this.addWorksheetForm.controls['entity_id'].setValue(this.selectedFilterEntity);
        }

        if (data.expert_day && data.expert_day.toString().indexOf(',') !== -1) {
          const dayData = data.expert_day.split(',');
          this.addWorksheetForm.controls['expert_day'].setValue(dayData);
        } else {
          this.addWorksheetForm.controls['expert_day'].setValue(data.expert_day);
        }

        if (data.expert_month && data.expert_month.toString().indexOf(',') !== -1) {
          const dayMonth = data.expert_month.split(',');
          this.addWorksheetForm.controls['expert_month'].setValue(dayMonth);
        } else {
          // console.log(data.expert_month);
          this.addWorksheetForm.controls['expert_month'].setValue(data.expert_month);
        }

        if (data.due_date_period === '1') {
          this.checkBoxValue = 1;
        }
        if (data.due_date_period === '2') {
          this.checkBoxValue = 2;
        }
        if (data.due_date_period === '3') {
          this.checkBoxValue = 3;
        }

        if (data.entity_id.toString().indexOf(',') !== -1 && this.selectedFilterEntity.length > 1) {
          this.isSingle = false;
          this.isMultipleClientName = true;
        } else {
          this.isSingle = true;
          this.isMultipleClientName = false;
          this.onEntityChange(data.entity_id, 0);
        }
      }, 1000);
    }
  }

  /**
   * Address form creation
   */
  createWorksheetForm() {
    this.addWorksheetForm = this._fb.group({
      parent_id: new FormControl( null),
      parent_name: new FormControl( null),
      entity_id: new FormControl((this.selectedFilterEntity) ? this.selectedFilterEntity : null, <any>Validators.required),
      master_activity_id: new FormControl(null, <any>Validators.required),
      task_id: new FormControl(null, <any>Validators.required),
      start_date: new FormControl(null, <any>Validators.required),
      end_date: new FormControl(null, <any>Validators.required),
      frequency_id: new FormControl(null, <any>Validators.required),
      expert_day: new FormControl(null),
      expert_month: new FormControl(null),
      due_date_period: new FormControl(null, <any>Validators.required),
      due_after_day: new FormControl(null),
      due_month_day: new FormControl(null),
      due_on_particular_date: new FormControl(null),
      notes: new FormControl(null),
      worksheet_additional_assignee: new FormControl(null),
      budgeted_unit: new FormControl(0),
      critical_task: new FormControl(null, <any>Validators.required),
      button_type: new FormControl(this.buttonType, null)
    });
  }

  /**
   * On address form submit
   * @param value
   * @param valid
   */
  onAddWorksheet(value, valid) {
  }

  /**
   * On change due date
   * @param event
   */
  onChangeDueDate(event) {
    if (event) {
      const dataItem = this.addWorksheetForm.get('due_date_period').value;
      // console.log(dataItem);
      this.checkBoxValue = Number(dataItem);
      this.addWorksheetForm.get('due_after_day').setValidators(null);
      this.addWorksheetForm.get('due_month_day').setValidators(null);
      this.addWorksheetForm.get('due_on_particular_date').setValidators(null);
      this.addWorksheetForm.get('due_after_day').updateValueAndValidity();
      this.addWorksheetForm.get('due_month_day').updateValueAndValidity();
      this.addWorksheetForm.get('due_on_particular_date').updateValueAndValidity();

      if (this.checkBoxValue === 1) {
        this.addWorksheetForm.get('due_after_day').setValidators(Validators.required);
        this.addWorksheetForm.get('due_after_day').updateValueAndValidity();
      } else if (this.checkBoxValue === 2) {
        this.addWorksheetForm.get('due_month_day').setValidators(Validators.required);
        this.addWorksheetForm.get('due_month_day').updateValueAndValidity();
      } else if (this.checkBoxValue === 3) {
        this.addWorksheetForm.get('due_on_particular_date').setValidators(Validators.required);
        this.addWorksheetForm.get('due_on_particular_date').updateValueAndValidity();
      }
    }
  }

  /**
   * On change type of recurring form
   * @param event
   */
  onChangeType(event) {
    if (+event === 1) {
      this.isMultipleClientName = true;
    } else {
      this.isMultipleClientName = false;
    }
  }

  /**
   * On contact information page redirect
   */
  onWorksheet() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  onWorksheetPreviewDetails(type?: number) {
    this.buttonType = type;
    this.addWorksheetForm.get('button_type').setValue(this.buttonType);
    if (this.addWorksheetForm.value.due_date_period === '1') {
      delete this.addWorksheetForm.value.due_month_day;
      delete this.addWorksheetForm.value.due_on_particular_date;
    }

    if (this.addWorksheetForm.value.due_date_period === '2') {
      delete this.addWorksheetForm.value.due_after_day;
      delete this.addWorksheetForm.value.due_on_particular_date;
    }

    if (this.addWorksheetForm.value.due_date_period === '3') {
      delete this.addWorksheetForm.value.due_after_day;
      delete this.addWorksheetForm.value.due_month_day;
      this.addWorksheetForm.value.due_on_particular_date = moment(this.addWorksheetForm.value.due_on_particular_date).format('YYYY-MM-DD');
    }

    if (this.addWorksheetForm.value.entity_id.length > 1) {
      this.addWorksheetForm.value.entity_id = this.addWorksheetForm.value.entity_id.join();
    }

    if (Array.isArray(this.addWorksheetForm.value.expert_day)) {
      this.addWorksheetForm.value.expert_day = this.addWorksheetForm.value.expert_day.join();
    }

    if (Array.isArray(this.addWorksheetForm.value.expert_month)) {
      this.addWorksheetForm.value.expert_month = this.addWorksheetForm.value.expert_month.join();
    }

    this.addWorksheetForm.value.start_date = moment(this.addWorksheetForm.value.start_date).format('YYYY-MM-DD');
    this.addWorksheetForm.value.end_date = moment(this.addWorksheetForm.value.end_date).format('YYYY-MM-DD');
    // console.log(this.addWorksheetForm.value);
    this.user = this._sharedService.setClientData(GLOBALDATAKEYS.ADD_WORKSHEET, this.addWorksheetForm.value);
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_PREVIEW_DETAILS]);
  }

  /**
   * On Entity Change Get Assignee
   * @param event
   */
  onEntityChange(event: any, type: number) {
    // console.log(type);
    if (this.addWorksheetForm.get('master_activity_id').value > 0) {
      if (type === 0) {
        if (!this.isMultipleClientName) {
          this.getAdditionalAssignee();
        }
      }
    }
    if (event && type === 1) {
      this.selectedFilterEntity = event.map(x => x.id);
    }
  }

  /**
   * Get Task Filter List
   * @param value
   */
  getTaskFilterList(value: any) {
    // Get Task
    if (value && (value.id > 0)) {
      this._sharedObjService.getTask({'records': 'all'}, {'compare': {'equal': {'master_activity_id': value.id, 'is_active': 1}}}).subscribe((response) => {
        this.addWorksheetForm.get('task_id').setValue(null);
        this.addWorksheetForm.get('task_id').updateValueAndValidity();
        this.taskList = response;
        // if (!this.isMultipleClientName) {
        this.getAdditionalAssignee();
        // }
      });
    } else {
      this._sharedObjService.getTask({'records': 'all'}, {}).subscribe((response) => {
        this.taskList = response;
      });
    }
  }

  getTaskList(value: any) {
    // Get Task
    if (value && (value.id > 0)) {
      this._sharedObjService.getTask({'records': 'all'}, {'compare': {'equal': {'master_activity_id': value.id, 'is_active': 1}}}).subscribe((response) => {
        this.taskList = response;
        // if (!this.isMultipleClientName) {
        this.getAdditionalAssignee();
        // }
      });
    } else {
      this._sharedObjService.getTask({'records': 'all'}, {}).subscribe((response) => {
        this.taskList = response;
      });
    }
  }

  /**
   * Get Additional Assignee
   */
  getAdditionalAssignee() {
    // get addiotional assignee
    this._commonCrudService.listData(AdminAPI.GET_ASSIGNEE, {
      'entity_id': this.addWorksheetForm.get('entity_id').value,
      'master_activity_id': this.addWorksheetForm.get('master_activity_id').value
    }).subscribe((response) => {
      if (response) {
        this.addiotionalAssignee = [];
        const data = response.payload.data;
        // console.log(data);
        if (data['teamMember']) {
          data['teamMember'].forEach(item => {
            item['name'] = 'Team Member';
            this.addiotionalAssignee.push(item);
          });
        }
        if (data['otherMember']) {
          data['otherMember'].forEach(item => {
            item['name'] = 'Other Member';
            this.addiotionalAssignee.push(item);
          });
        }
        //console.log(this.addiotionalAssignee);
      }
    });
  }

  /**
   * get activity data
   */
  getTaskAndMasterActivity() {
    // Get Master Activity
    this._sharedObjService.getMasterActivity({'records': 'all'}, {}).subscribe((response) => {
      this.masterActivityList = response;
    });
    // Get Task
    this._sharedObjService.getTask({'records': 'all'}, {}).subscribe((response) => {
      this.taskList = response;
    });
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = this.clientListFiltered = response;
      this.clientListParent = response.filter(item => item.is_parent === 1);
      this.clientListAllData = response;
    });
  }

  /**
   * Get Frequency Data
   */
  getFrequencyData() {
    this._sharedObjService.getFrequency({'records': 'all'}, {'in': {'id': '1,2,3,4,5,6,10'}}).subscribe((response) => {
      if (response) {
        this.frequencyList = response;
      }
    });
  }

  /**
   * Select All Client
   */
  selectAll() {
    this.selectedFilterEntity = this.clientList.map(x => x.id);
    this.addWorksheetForm.get('entity_id').setValue(this.selectedFilterEntity);
  }

  /**
   * UnSelect All Client
   */
  unselectAll() {
    this.selectedFilterEntity = [];
    this.addWorksheetForm.get('entity_id').setValue(null);
  }

  getFreqValue(value: number) {
    this.isdailyMonthly = (this.isdailyMonthly === true) ? false : true;
    if (value === 10 || value === 3) {
      this.isdailyMonthly = true;
      this.freqValue = value;
      this.addWorksheetForm.get('expert_month').setValue([]);
      this.addWorksheetForm.get('expert_day').setValue([]);
    } else {
      this.isdailyMonthly = false;
      this.freqValue = value;
    }
  }

  /**
   * Get array values from string
   * @param {string} value
   * @param {string} seperator
   * @returns {string[]}
   */
  getArrayToString(value: any, seperator: string) {
    // console.log(value);
    if (value) {
      const valueOne = [];
      value.split(seperator).map(item => {
        valueOne.push(Number(item));
      });
      return valueOne;
    }
  }

  /**
   * Open quick menu
   * @param menuName
   */
  onOpenQuickMenu(menuName) {
    switch (menuName) {
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
   * On Change Parent Entity
   * @param event
   */
  onChangeParentEntity(event: any) {
    this.clientList = this.clientListFiltered;
    this.selectedFilterEntity = [];
    this.addWorksheetForm.get('entity_id').setValue(null);
    this.addWorksheetForm.controls['parent_name'].setValue(null);

    if (event && event.id > 0) {
      this.addWorksheetForm.controls['parent_name'].setValue(event.trading_name);
      this._commonCrudService.listData(AdminAPI.WORKSHEET_GET_SUBENTITY + '/' + event.id, {}, {}).subscribe(response => {
        this.clientList = response.payload.data;
      });
    }
  }

  openSOP() {
    window.open('https://docs.google.com/document/d/14AcFf3P8STojOdbvy41_Tdc1OCb7TiOr9eQAkwrzACA', '_blank');
  }
}
