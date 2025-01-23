import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {CommonRegex, ValidationConstantMessage} from '../../../../../utility/validation';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {AppConstant, GLOBALDATAKEYS, ticketPriority, ticketSeverity, ticketTopic, ticketTypeOfMistake, ToastType, yesNo} from '../../../../../utility/constants/base-constants';
import {PendingTickets, TicketAssignee, TicketDocument} from '../pending-tickets.model';
import {AdminAPI} from '../../../../../utility/constants/api';
import {Department, Team} from '../../../../../utility/shared-model/designation.model';
import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {Clients} from '../../../client-module/view-client/view-client.model';
import {isValidFileType} from '../../../../../utility/common-functions';
import * as moment from 'moment';
import * as FileSaver from 'file-saver';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {CommonHistoryDialogComponent} from '../../../../../utility/components/common-history-dialog/common-history-dialog.component';
import {ConfirmationDialogComponent} from '../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {CountdownComponent} from 'ngx-countdown';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent extends BaseComponent implements OnInit, OnDestroy {
  @ViewChild('countdown') counter: CountdownComponent;
  // variables
  ticketData: PendingTickets = null;
  ticketDetail: any[] = [];
  ticketAssignee: TicketAssignee[] = [];
  ticketDocument: TicketDocument[] = [];
  userInfo: AdminUser;
  // Dropdown variable
  severityList = ticketSeverity;
  priorityList = ticketPriority;
  typeOfMistakeList = ticketTypeOfMistake;
  topicList = ticketTopic;
  clientList: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  parentClientList: Clients[] = [];
  teamList: Team[] = [];
  tamList: AdminUser[] = [];
  userList: AdminUser[] = [];
  thList: AdminUser[] = [];
  yesNoList = yesNo;
  ticketStatusList = [];
  ticketTypeList = [];
  selectedFilter = [];
  departmentList: Department[] = [];

  // form
  addTicketForm: FormGroup;

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Other variables
  documentName: string;
  departmentField = false;
  processField = false;
  subProcessField = false;
  headCountField = false;
  saveHourField = false;

  severityField = false;
  priorityField = false;
  entityField = false;
  teamField = false;
  tamField = false;
  thField = false;
  statusField = false;
  practiceField = false;
  srTopicField = false;
  ticketTopicField = false;
  staffinvolvedField = false;
  typeMistakeField = false;
  problemOurSideField = true;
  staffField = false;
  docArray = [];
  document_file = false;
  reasonWhyField = true;
  isTicketReadOnly = false;
  isCompletedStatusEnable = false;
  tabID = ADMINTABACCESS.TICKET_INCOMPLETE;
  isCompleteTicketButtonRights = false;

  constructor(private _fb: FormBuilder, public _router: Router,
              private _sharedService: SharedService,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              public dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    this.userInfo = this._sharedService.getUser();
    this.ticketData = this._sharedService.getClientData(GLOBALDATAKEYS.PENDING_TICKET);

    this.isCompleteTicketButtonRights = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'complete_ticket', 1);
    // If user super admin right to complete ticket + user created can complete ticket
    if (this.ticketData) {
      if ((this.userInfo.id === this.ticketData.created_by.id) || (this.userInfo.designation_id.designation_id === 7)) {
        this.isCompletedStatusEnable = true;
      }
    }
    this.initializeMethod();
  }

  /**
   * Initialize Method
   */
  initializeMethod() {
    this.getUserList();
    this.getClientList();
    this.getTeam();
    this.getTicketStatusList();
    this.getTicketTypeList();
    this.getDepartmentList();
    this.createAddTicketForm();
    this.createTicketAssigneeForm();

    if (this.ticketData) {
      this._commonCrudService.listData(AdminAPI.TICKET_LIST, {}, {'compare': {'equal': {'code': this.ticketData.code}}}).subscribe((response) => {
        this.ticketData = response.payload.data[0];
        if (this.ticketData.technical_head) {
          this.selectedFilter = this.getArrayToString(this.ticketData.technical_head, ',');
        }
        this.addTicketForm.get('technical_head').setValue(this.selectedFilter);
        // console.log(this.ticketData);
        if (this.ticketData.flag_open === 1) {
          if ((this.ticketData) && (this.ticketData.opened_by !== null) && (Number(this.ticketData.opened_by.id) === Number(this.userInfo.id))) {
            this.isTicketReadOnly = false;
          } else {
            this.isTicketReadOnly = true;
          }
        } else {
          this.isTicketReadOnly = false;
          this.onSubmitFlag();
        }
      });
      // check flag and start timer
      const ticket_id = this.ticketData.id;
      this.getTicketViewDetails(ticket_id);

      // for history
      const value = {
        url: AdminAPI.TICKET_HISTORY + '/' + this.ticketData.id,
        params: {},
      };
      this._sharedService.setHistoryURL(value);
    }
  }

  /**
   * Get Department List
   */
  getDepartmentList() {
    this._commonCrudService.listData(AdminAPI.DEPARTMENT, {'records': 'all'}).subscribe(Response => {
      this.departmentList = Response.payload.data;
    });
  }

  /**
   * get Ticket Detail
   * @param ticket_id
   */
  getTicketViewDetails(ticket_id) {
    if (ticket_id > 0) {
      this._commonCrudService.getData(AdminAPI.TICKET_LIST, ticket_id, {}).subscribe((response) => {
        if (response) {
          this.ticketDetail = response.payload.data;
          this.checkTicketType(response.payload.data.type_id);
          this.checkStaffInvovledIssue(response.payload.data.problem_our_side);
          // for ticket assignee
          if (response.payload.data.ticketAssignee) {
            this.ticketAssignee = response.payload.data.ticketAssignee;
            if (this.ticketAssignee.length > 0) {
              this.ticketAssignee.map(item => {
                this.getTicketAssigneeArray().push(this.createTicketAssigneeGroup(item));
              });
            }
            // for ticket document
            if (response.payload.data.ticketDocument) {
              this.ticketDocument = response.payload.data.ticketDocument;
            }
          }
        }
      });
    }
  }

  /**
   * Display Get Severity
   * @param {number} Severity
   * @returns {string}
   */
  getSeverity(severity: number): string {
    const val = this.severityList.filter(elem => elem.key === severity);
    return (val.length) ? val[0].label : '';
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      const tamData = response.filter(data => (data['designation_id']) ? (data['designation_id']['id'] === 15) : 0);
      const thData = response.filter(data => (data['designation_id']) ? (data['designation_id']['id'] === 9 || data['designation_id']['id'] === 63 || data['designation_id']['id'] === 60 || data['designation_id']['id'] === 61) : 0);
      this.userList = response;
      this.tamList = tamData;
      this.thList = thData;
    });
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {'compare': {'notequal': {'discontinue_stage': 2}}}).subscribe((response) => {
      this.clientList = this.filteredTradingClientList = response;
      this.parentClientList = response.filter(item => item.is_parent === 1);
    });
  }

  /**
   * Get team
   */
  getTeam() {
    this._commonCrudService.listData(AdminAPI.TEAM, {}, {}).subscribe((response) => {
      if (response) {
        this.teamList = response.payload.data;
      }
    });
  }

  /**
   * Get Ticket Status List
   */
  getTicketStatusList() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      'records': 'all',
      'table': 'ticket_status',
      'column': 'id,status,hide_for_sr',
      'sortOrder': 'id',
      'sortBy': 'asc'
    }, {'compare': {'notequal': {'id': '-1'}}}).subscribe(Response => {
      this.ticketStatusList = Response;
    });
  }

  /**
   * Get ticket Type list
   */
  getTicketTypeList() {
    this._commonCrudService.listData(AdminAPI.TICKET_TYPE, {
      'records': 'all'
    }, {}).subscribe(Response => {
      this.ticketTypeList = Response.payload.data;
    });
  }

  checkTicketType(ticketType: number) {

    // set all field set to validation null
    this.addTicketForm.get('parent_id').setValidators(null);
    this.addTicketForm.get('entity_id').setValidators(null);
    this.addTicketForm.get('team_id').setValidators(null);
    this.addTicketForm.get('severity').setValidators(null);
    this.addTicketForm.get('priority').setValidators(null);
    this.addTicketForm.get('staff_incharge').setValidators(null);
    this.addTicketForm.get('technical_account_manager').setValidators(null);
    this.addTicketForm.get('department_id').setValidators(null);
    this.addTicketForm.get('process').setValidators(null);

    this.departmentField = false;
    this.processField = false;
    this.subProcessField = false;
    this.headCountField = false;
    this.saveHourField = false;
    this.priorityField = false;
    this.severityField = false;
    this.entityField = false;
    this.teamField = false;
    this.tamField = false;
    this.thField = false;
    this.statusField = false;
    this.srTopicField = false;
    this.ticketTopicField = false;
    this.staffinvolvedField = false;
    this.typeMistakeField = false;
    this.problemOurSideField = true;
    this.staffField = false;
    this.reasonWhyField = true;
    this.practiceField = false;
    this.checkStaffInvovledIssue(1);
    if (ticketType === 1 || ticketType === 2 || ticketType === 7 || ticketType === 8 || ticketType === 21) {
      this.entityField = true;
      this.teamField = true;
      this.tamField = true;
      if (ticketType === 1 || ticketType === 7) {
        this.thField = true;
      }
      this.addTicketForm.get('entity_id').setValidators(Validators.required);
      this.addTicketForm.get('entity_id').updateValueAndValidity();
      this.addTicketForm.get('team_id').setValidators(Validators.required);
      this.addTicketForm.get('team_id').updateValueAndValidity();
      this.addTicketForm.get('technical_account_manager').setValidators(Validators.required);
      this.addTicketForm.get('technical_account_manager').updateValueAndValidity();

      if (ticketType === 7 || ticketType === 8) {
        this.reasonWhyField = false;
        this.problemOurSideField = false;
        this.checkStaffInvovledIssue(0);
      }
    } else if (ticketType === 3) {
      this.entityField = true;
      this.addTicketForm.get('entity_id').setValidators(Validators.required);
      this.addTicketForm.get('entity_id').updateValueAndValidity();
    } else if (ticketType === 5 || ticketType === 16) {
      this.severityField = true;
      this.priorityField = true;
      this.addTicketForm.get('severity').setValidators(Validators.required);
      this.addTicketForm.get('severity').updateValueAndValidity();
      this.addTicketForm.get('priority').setValidators(Validators.required);
      this.addTicketForm.get('priority').updateValueAndValidity();
      this.problemOurSideField = false;
      this.checkStaffInvovledIssue(0);
    } else if (ticketType === 9) {
      this.reasonWhyField = false;
      this.staffField = true;
      this.addTicketForm.get('staff_incharge').setValidators(Validators.required);
      this.addTicketForm.get('staff_incharge').updateValueAndValidity();
    } else if (ticketType === 24 || ticketType === 22 || ticketType === 23) {
      this.entityField = true;
      this.teamField = true;
      this.tamField = true;
      this.practiceField = true;
      this.srTopicField = true;
      this.addTicketForm.get('entity_id').setValidators(Validators.required);
      this.addTicketForm.get('entity_id').updateValueAndValidity();
      this.addTicketForm.get('team_id').setValidators(Validators.required);
      this.addTicketForm.get('team_id').updateValueAndValidity();
      this.addTicketForm.get('technical_account_manager').setValidators(Validators.required);
      this.addTicketForm.get('technical_account_manager').updateValueAndValidity();
      if (ticketType === 23) {
        this.ticketTopicField = true;
      }
      if (ticketType === 24) {
        this.reasonWhyField = false;
        this.problemOurSideField = false;
        this.checkStaffInvovledIssue(0);
      }
    } else if (ticketType === 19 || ticketType === 20) {
      this.entityField = true;
      this.teamField = true;
      this.tamField = true;
      this.ticketTopicField = true;
      this.addTicketForm.get('entity_id').setValidators(Validators.required);
      this.addTicketForm.get('entity_id').updateValueAndValidity();
      this.addTicketForm.get('team_id').setValidators(Validators.required);
      this.addTicketForm.get('team_id').updateValueAndValidity();
      this.addTicketForm.get('technical_account_manager').setValidators(Validators.required);
      this.addTicketForm.get('technical_account_manager').updateValueAndValidity();
    } else if (ticketType === 26) {
      this.severityField = true;
      this.departmentField = true;
      this.processField = true;
      this.subProcessField = true;
      this.headCountField = true;
      this.saveHourField = true;
      this.problemOurSideField = false;
      this.reasonWhyField = false;
      this.checkStaffInvovledIssue(0);
      this.addTicketForm.get('severity').setValidators(Validators.required);
      this.addTicketForm.get('severity').updateValueAndValidity();
      this.addTicketForm.get('department_id').setValidators(Validators.required);
      this.addTicketForm.get('department_id').updateValueAndValidity();
      this.addTicketForm.get('process').setValidators([Validators.required, Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]);
      this.addTicketForm.get('process').updateValueAndValidity();
      this.addTicketForm.get('head_count').setValidators([Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]);
      this.addTicketForm.get('head_count').updateValueAndValidity();
      this.addTicketForm.get('save_hour').setValidators([Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]);
      this.addTicketForm.get('save_hour').updateValueAndValidity();
    }
  }

  /**
   * On RPA Process Request Change Subject
   */
  onRPAProcessRequestChangeSubject(type_id: number, severity: number, department: number) {
    if (type_id === 26) {
      // console.log(type_id, severity, department);
      if (!this.ticketData) {
        const subject = this.getTicketType(type_id) + ' || ' + this.getSeverity(severity) + ' || ' + this.getDepartmentName(department) + ' || ' + this.userInfo.userfullname;
        this.addTicketForm.get('subject').setValue(subject);
      } else {
        this.addTicketForm.get('subject').setValue(this.ticketData.subject);
      }
    } else {
      this.addTicketForm.get('subject').setValue(null);
    }
  }

  /**
   * check staff invovled
   * @param value
   */
  checkStaffInvovledIssue(value: number) {
    if (value === 1) {
      this.staffinvolvedField = true;
      this.typeMistakeField = true;
      this.addTicketForm.get('staff_involved_issue').setValidators(Validators.required);
      this.addTicketForm.get('type_of_mistake').setValidators(Validators.required);
      this.addTicketForm.get('staff_involved_issue').updateValueAndValidity();
      this.addTicketForm.get('type_of_mistake').updateValueAndValidity();
    } else {
      this.staffinvolvedField = false;
      this.typeMistakeField = false;
      this.addTicketForm.get('staff_involved_issue').setValidators(null);
      this.addTicketForm.get('type_of_mistake').setValidators(null);
      this.addTicketForm.get('staff_involved_issue').updateValueAndValidity();
      this.addTicketForm.get('type_of_mistake').updateValueAndValidity();
    }
  }

  /**
   * check staff invovled
   * @param value
   */
  checkSeverity(value: number) {
    if (value !== 3) {
      this.reasonWhyField = false;
    } else {
      this.reasonWhyField = true;
    }
  }

  checkStatus(value: number) {
    this.addTicketForm.get('is_send_approval_assignee_done').setValidators(null);
    this.addTicketForm.get('is_send_approval_assignee_done').updateValueAndValidity();
    this.addTicketForm.get('resolution').setValidators(null);
    this.addTicketForm.get('resolution').updateValueAndValidity();
    // If ticket status send for approval
    if (value === 3) {
      this.addTicketForm.get('resolution').setValidators(Validators.required);
      this.addTicketForm.get('resolution').updateValueAndValidity();
      this.addTicketForm.get('is_send_approval_assignee_done').setValidators(Validators.required);
      this.addTicketForm.get('is_send_approval_assignee_done').updateValueAndValidity();
      this.checkSendForApprovalValidation();
    }
  }

  checkSendForApprovalValidation() {
    const statusID = this.addTicketForm.get('status_id').value;
    if (statusID === 3) {
      const ticketAssignee = this.getTicketAssigneeArray().controls;
      // console.log(ticketAssignee);
      const completedLength = [];
      if (ticketAssignee.length) {
        ticketAssignee.forEach(itemData => {
          if (Number(itemData.value['mark_as_complete']) === 1) {
            completedLength.push(itemData);
          }
        });
      }
      if (completedLength.length === ticketAssignee.length) {
        this.addTicketForm.get('is_send_approval_assignee_done').setValue(1);
        this.addTicketForm.get('is_send_approval_assignee_done').updateValueAndValidity();
      } else {
        this.addTicketForm.get('is_send_approval_assignee_done').setValue(null);
        this.addTicketForm.get('is_send_approval_assignee_done').updateValueAndValidity();
      }
    }
  }

  /**
   * Create Report Form
   */
  createTicketAssigneeForm() {
    if (!this.ticketData) {
      this.getTicketAssigneeArray().push(this.createTicketAssigneeGroup());
    }
  }

  /**
   * Create Report Group Form
   */
  createTicketAssigneeGroup(AssigneeData ?: any) {
    return this._fb.group({
      id: new FormControl(AssigneeData ? AssigneeData.id : ''),
      ticket_id: new FormControl(AssigneeData ? AssigneeData.ticket_id : ''),
      action_require_details: new FormControl(AssigneeData ? AssigneeData.action_require_details : '', <any>Validators.required),
      ticket_assignee: new FormControl(AssigneeData ? AssigneeData.ticket_assignee : '', <any>Validators.required),
      action_taken_details: new FormControl(AssigneeData ? AssigneeData.action_taken_details : ''),
      mark_as_complete: new FormControl(AssigneeData ? AssigneeData.mark_as_complete : ''),
      complete_date: new FormControl(AssigneeData ? AssigneeData.complete_date : ''),
    });
  }

  /**
   *
   * @param index
   * @param value
   */
  updateChangeValues(key: string, index: number, value: any) {
    if (key === 'action_require_details' || key === 'action_taken_details' || key === 'mark_as_complete') {
      this.getTicketAssigneeArray().controls[index].get(key).setValue(value);
    } else if (key === 'ticket_assignee') {
      const dataValue = (value) ? value['id'] : null;
      this.getTicketAssigneeArray().controls[index].get(key).setValue(dataValue);
    }
    this.getTicketAssigneeArray().controls[index].get(key).updateValueAndValidity();
  }

  /**
   * Get Assignee Field Array
   */
  getTicketAssigneeArray(): FormArray {
    return <FormArray>this.addTicketForm.get('ticket_assignee');
  }

  /**
   * add new filter
   * @param index
   */
  addNewAssignee(index: number) {
    if (this.getTicketAssigneeArray().length < 7) {
      this.getTicketAssigneeArray().push(this.createTicketAssigneeGroup());
    } else {
      this._sharedService.setToastMessage('You can add maximum Six Assignee', ToastType.ERROR);
    }
  }

  changeCompleteData(event: any, index: number) {
    if (event) {
      this.getTicketAssigneeArray().controls[index].get('mark_as_complete').setValue(1);
      const todaysDate = moment(new Date()).format('YYYY-MM-DD');
      this.getTicketAssigneeArray().controls[index].get('complete_date').setValue(todaysDate);
      this.getTicketAssigneeArray().controls[index].get('action_taken_details').setValidators(Validators.required);
      this.getTicketAssigneeArray().controls[index].get('action_taken_details').updateValueAndValidity();
    } else {
      this.getTicketAssigneeArray().controls[index].get('mark_as_complete').setValue(0);
      this.getTicketAssigneeArray().controls[index].get('complete_date').setValue(null);
      this.getTicketAssigneeArray().controls[index].get('action_taken_details').setValidators(null);
      this.getTicketAssigneeArray().controls[index].get('action_taken_details').updateValueAndValidity();
    }
    this.checkSendForApprovalValidation();
  }

  /**
   * remove row from filter collection
   * @param index
   */
  removeFilter(index: number) {
    // this.assigneeArray.splice(this.assigneeArray.indexOf(this.getTicketAssigneeArray().controls[index].get('action_taken_details')), 1);
    this.getTicketAssigneeArray().removeAt(index);
  }

  /**
   * Create Add New Invoice Form
   */
  createAddTicketForm() {
    this.addTicketForm = this._fb.group({
      type_id: new FormControl((this.ticketData) ? this.ticketData.type_id : '', <any>Validators.required),
      priority: new FormControl((this.ticketData) ? this.ticketData.priority : ''),
      severity: new FormControl((this.ticketData) ? this.ticketData.severity : ''),
      subject: new FormControl((this.ticketData) ? this.ticketData.subject : '', <any>Validators.required),
      issue_detail: new FormControl((this.ticketData) ? this.ticketData.issue_detail : ''),
      reason_why_this_has_occurred: new FormControl((this.ticketData) ? this.ticketData.reason_why_this_has_occurred : ''),
      parent_id: new FormControl((this.ticketData) ? this.ticketData.parent_id : null),
      entity_id: new FormControl((this.ticketData) ? this.ticketData.entity_id : null),
      team_id: new FormControl((this.ticketData) ? this.ticketData.team_id : null),
      technical_account_manager: new FormControl((this.ticketData) ? this.ticketData.technical_account_manager : null),
      technical_head: new FormControl((this.ticketData && this.ticketData.technical_head !== '' && this.ticketData.technical_head !== null && this.ticketData.technical_head !== "null") ? this.ticketData.technical_head : null),
      staff_incharge: new FormControl((this.ticketData) ? this.ticketData.staff_incharge : null),
      status_id: new FormControl((this.ticketData) ? this.ticketData.status_id : null, <any>Validators.required),
      problem_our_side: new FormControl((this.ticketData) ? this.ticketData.problem_our_side : ''),
      document_file: new FormControl(),
      staff_involved_issue: new FormControl((this.ticketData) ? this.ticketData.staff_involved_issue : null),
      type_of_mistake: new FormControl((this.ticketData) ? this.ticketData.type_of_mistake : ''),
      resolution: new FormControl((this.ticketData) ? this.ticketData.resolution : ''),
      sr_practice_id: new FormControl((this.ticketData) ? this.ticketData.sr_practice_id : ''),
      sr_topic: new FormControl((this.ticketData) ? this.ticketData.sr_topic : ''),
      ticket_topic: new FormControl((this.ticketData) ? this.ticketData.ticket_topic : ''),
      ticket_assignee: this._fb.array([]),
      is_send_approval_assignee_done: new FormControl(null),
      department_id: new FormControl((this.ticketData) ? this.ticketData.department_id : null),
      process: new FormControl((this.ticketData) ? this.ticketData.process : null),
      sub_process: new FormControl((this.ticketData) ? this.ticketData.sub_process : null),
      head_count: new FormControl((this.ticketData) ? this.ticketData.head_count : null),
      save_hour: new FormControl((this.ticketData) ? this.ticketData.save_hour : null)
    });
  }

  /**
   * Get array values from string
   * @param {string} value
   * @param {string} seperator
   * @returns {string[]}
   */
  getArrayToString(value: string, seperator: string) {
    if (value) {
      const valueOne = [];
      value.split(seperator).map(item => {
        valueOne.push(Number(item));
      });
      return valueOne;
    }
  }

  /**
   * Submit Ticket Form
   * @param form
   */
  onSubmitTicketForm(form: FormGroup) {
    if (form.valid) {
      const ticketAssigneeItem = form.value['ticket_assignee'];

      if (this.ticketData) {
        form.value['_method'] = 'put';
        form.value['is_flag'] = 0;
        form.value['ticket_assignee'] = JSON.stringify(ticketAssigneeItem);
        this._commonCrudService.updateData(AdminAPI.TICKET_LIST, this.ticketData.id, form.value, this.docArray)
          .subscribe((response) => {
            this.handleTicketResponse(response);
          });
        form.value['ticket_assignee'] = ticketAssigneeItem;
      } else {
        form.value['ticket_assignee'] = JSON.stringify(ticketAssigneeItem);
        this._commonCrudService.addData(AdminAPI.TICKET_LIST, form.value, this.docArray)
          .subscribe((response) => {
            this.handleTicketResponse(response);
          });
        form.value['ticket_assignee'] = ticketAssigneeItem;
      }
    }
  }

  onSubmitFlag() {
    const itemData = {};
    itemData['_method'] = 'put';
    itemData['is_flag'] = 1;
    itemData['flag_open'] = 1;
    this._commonCrudService.updateData(AdminAPI.TICKET_LIST, this.ticketData.id, itemData)
      .subscribe((response) => {
      });
  }

  onFinished() {
    const itemData = {};
    itemData['_method'] = 'put';
    itemData['is_flag'] = 0;
    this._commonCrudService.updateData(AdminAPI.TICKET_LIST, this.ticketData.id, itemData)
      .subscribe((response) => {
        this._router.navigate(['/' + AdminRoutes.PENDING_TICKETS]);
      });
  }

  onTicketList() {
    this._router.navigate(['/' + AdminRoutes.PENDING_TICKETS]);
  }

  /**
   * Handle Ticket Response
   * @param response
   */
  handleTicketResponse(response: any) {
    this._router.navigate(['/' + AdminRoutes.PENDING_TICKETS]);
  }

  /**
   * Upload document browse file method
   */
  onChooseDocument() {
    document.getElementById('uploadDocument').click();
  }

  /**
   * select event of document
   * @param event
   */
  onUploadDocument(event) {
    if (event.target.files && event.target.files[0]) {
      const filesList = event.target.files;
      this.docArray = [];
      if (filesList.length) {
        let f = 0;
        Object.keys(event.target.files).forEach(itemUploadFile => {
          if (isValidFileType(event.target.files[f].type)) {
            if (event.target.files[f].size > AppConstant.TWINTY_FIVE_MP_FILE_ALLOWED) {
              this._sharedService.setToastMessage(this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, ToastType.ERROR);
            } else {
              const file = event.target.files[f];
              const fileName = this.addTicketForm.get('document_file').value;
              if (fileName) {
                this.addTicketForm.get('document_file').setValue(fileName + ',' + file.name);
              } else {
                this.addTicketForm.get('document_file').setValue(file.name);
              }
              const reader = new FileReader();
              reader.readAsDataURL(file);
              if ((filesList.length - 1) === f) {
                this.docArray.push({
                  'reqKey': 'document_file[]',
                  'file': event.target.files,
                });
              }
            }
          } else {
            this._sharedService.setToastMessage(event.target.files[f].name + ' - ' + this.validationMsg.VALID_IMAGE_TYPE, ToastType.ERROR);
          }
          f++;
        });
      }
    }
  }

  /**
   * Download Document
   */
  downloadDocument(ticketId: number) {
    this._commonCrudService.downloadDocument(AdminAPI.TICKET_DOWNLOAD + '/' + ticketId).subscribe(response => {
      if (response && response.type) {
        FileSaver.saveAs(response);
      }
    });
  }

  /**
   * Remove Document
   */
  removeDocument(ticketId: number) {
    this._commonCrudService.getData(AdminAPI.TICKET_REMOVE_DOCUMENT, ticketId)
      .subscribe((response) => {
        this.getDocumentListAfterRemove(this.ticketData.id);
      });
  }


  /**
   * On clear document name
   */
  onClear() {
    this.documentName = '';
  }

  /**
   * On show history modal
   */
  onShowHistory() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CommonHistoryDialogComponent, dialogConfig);
  }


  onPendingTicket() {
    this._router.navigate(['/' + AdminRoutes.PENDING_TICKETS]);
  }

  /**
   * Download supported documents
   * */
  downloadSupportedDocument() {

  }

  ngOnDestroy() {
    if (this.ticketData) {
      this.updateFlagForEditOtherUserWithoutConfirmation();
    }
    this._sharedService.setClientData(GLOBALDATAKEYS.PENDING_TICKET, null);
  }


  updateFlagForEditOtherUserWithoutConfirmation() {
    if (this.ticketData) {
      //  && (this.ticketData.opened_by !== null) && (this.ticketData.opened_by.id === this.userInfo.id)
      const itemData = {};
      itemData['_method'] = 'put';
      itemData['is_flag'] = 1;
      itemData['flag_open'] = 0;
      itemData['opened_by'] = 0;
      this._commonCrudService.updateData(AdminAPI.TICKET_LIST, this.ticketData.id, itemData)
        .subscribe((response) => {
        });
    }
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * If Time period is over show message to reload data
   */
  updateFlagForEditOtherUser() {
    const itemData = {};
    itemData['_method'] = 'put';
    itemData['is_flag'] = 1;
    itemData['flag_open'] = 0;
    itemData['opened_by'] = 0;
    this._commonCrudService.updateData(AdminAPI.TICKET_LIST, this.ticketData.id, itemData)
      .subscribe((response) => {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
          data: {
            content: 'Your ticket edit time over,\n' +
              '\n' +
              'Please Click  on Okay for reload\n',
            ticketButton: true
          }
        });

        dialogRef.afterClosed().subscribe((value) => {
          this.counter.restart();
          this.afterReloadCallData();
        });
      });
  }

  /**
   * If User click on check edit user have been exit from window
   */
  reloadTicketData() {
    this.initializeMethod();
  }

  /**
   * After Reload on Call Data again
   */
  afterReloadCallData() {
    this.initializeMethod();
  }

  /**
   * Get Document List After Remove
   * @param ticket_id
   */
  getDocumentListAfterRemove(ticket_id) {
    this._commonCrudService.getData(AdminAPI.TICKET_LIST, ticket_id, {}).subscribe((response) => {
      if (response) {
        // for ticket document
        this.ticketDocument = (response.payload.data.ticketDocument) ? response.payload.data.ticketDocument : [];
      }
    });
  }

  /**
   * Display Get Ticket Type
   * @param {number} type_id
   * @returns {string}
   */
  getTicketType(type_id: number): string {
    const val = this.ticketTypeList.filter(elem => elem.id === type_id);
    return (val.length) ? val[0].name : '';
  }

  /**
   * Display Get Department
   * @param {number} Department
   * @returns {string}
   */
  getDepartmentName(department_id: number): string {
    const val = this.departmentList.filter(elem => elem.id === department_id);
    return (val.length) ? val[0].department_name : '';
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
