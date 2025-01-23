import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {MasterActivity} from '../worksheet-quick-action/hierarchy/master-activity/master-activity.model';
import {TaskList} from '../worksheet-quick-action/hierarchy/task-list/task-list.model';
import {Frequency} from '../../../../../utility/shared-model/frequency.model';

export class WorksheetListing {
  private _id: number;
  private _name: string;
  private _billing_name: string;
  private _trading_name: string;
  private _discontinue_stage: number;
  private _frequency_name: string;
  private _allocation: string;
  private _category_id: number;
  private _worksheet_master_id: number;
  private _master_activity_id: MasterActivity;
  private _entity_id: number;
  private _task_id: TaskList;
  private _frequency_id: number;
  private _service_id: number;
  private _status_id: StatusList;
  private _reminder_date: string;
  private _due_date: string;
  private _start_date: string;
  private _end_date: string;
  private _is_active: number;
  private _befree_due_date: string;
  private _notes: string;
  private _is_there_delay: number;
  private _delay_from: number;
  private _delay_comment: string;
  private _delay_from_befree_action: string;
  private _fixed_unit: number;
  private _budgeted_unit: number;
  private _timesheet_total_unit: number;
  private _is_peer_review: number;
  private _knockback_count: number;
  private _neglience_count: number;
  private _reportsent_count: number;
  private _user_rating: number;
  private _lock_worksheet: number;
  private _worksheet_actual_teammember: AdminUser;
  private _worksheet_additional_assignee: AdminUser;
  private _worksheet_reviewer: AdminUser;
  private _worksheet_peerreviewer: AdminUser;
  private _team_json: string;
  private _completed_on: string;
  private _completed_by: AdminUser;
  private _created_by: AdminUser;
  private _created_on: string;
  private _modified_by: AdminUser;
  private _modified_on: string;
  private _taskchecklist: number;
  private _is_repeat_task: number;
  private _new_due_date: string;
  private _new_end_date: string;
  private _new_start_date: string;
  private _new_worksheet_master_id: number;
  private _new_master_activity_id: number;
  private _new_task_id: number;
  private _new_frequency_id: Frequency;
  private _entity_grouptype_id: number;
  private _parent_id: number;
  private _parent_name: string;
  private _critical_task: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get billing_name(): string {
    return this._billing_name;
  }

  set billing_name(value: string) {
    this._billing_name = value;
  }

  get trading_name(): string {
    return this._trading_name;
  }

  set trading_name(value: string) {
    this._trading_name = value;
  }

  get discontinue_stage(): number {
    return this._discontinue_stage;
  }

  set discontinue_stage(value: number) {
    this._discontinue_stage = value;
  }

  get frequency_name(): string {
    return this._frequency_name;
  }

  set frequency_name(value: string) {
    this._frequency_name = value;
  }

  get allocation(): string {
    return this._allocation;
  }

  set allocation(value: string) {
    this._allocation = value;
  }

  get category_id(): number {
    return this._category_id;
  }

  set category_id(value: number) {
    this._category_id = value;
  }

  get worksheet_master_id(): number {
    return this._worksheet_master_id;
  }

  set worksheet_master_id(value: number) {
    this._worksheet_master_id = value;
  }

  get master_activity_id(): MasterActivity {
    return this._master_activity_id;
  }

  set master_activity_id(value: MasterActivity) {
    this._master_activity_id = value;
  }

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get task_id(): TaskList {
    return this._task_id;
  }

  set task_id(value: TaskList) {
    this._task_id = value;
  }

  get frequency_id(): number {
    return this._frequency_id;
  }

  set frequency_id(value: number) {
    this._frequency_id = value;
  }

  get service_id(): number {
    return this._service_id;
  }

  set service_id(value: number) {
    this._service_id = value;
  }

  get status_id(): StatusList {
    return this._status_id;
  }

  set status_id(value: StatusList) {
    this._status_id = value;
  }

  get reminder_date(): string {
    return this._reminder_date;
  }

  set reminder_date(value: string) {
    this._reminder_date = value;
  }

  get due_date(): string {
    return this._due_date;
  }

  set due_date(value: string) {
    this._due_date = value;
  }

  get start_date(): string {
    return this._start_date;
  }

  set start_date(value: string) {
    this._start_date = value;
  }

  get end_date(): string {
    return this._end_date;
  }

  set end_date(value: string) {
    this._end_date = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get befree_due_date(): string {
    return this._befree_due_date;
  }

  set befree_due_date(value: string) {
    this._befree_due_date = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  get is_there_delay(): number {
    return this._is_there_delay;
  }

  set is_there_delay(value: number) {
    this._is_there_delay = value;
  }

  get delay_from(): number {
    return this._delay_from;
  }

  set delay_from(value: number) {
    this._delay_from = value;
  }

  get delay_comment(): string {
    return this._delay_comment;
  }

  set delay_comment(value: string) {
    this._delay_comment = value;
  }

  get delay_from_befree_action(): string {
    return this._delay_from_befree_action;
  }

  set delay_from_befree_action(value: string) {
    this._delay_from_befree_action = value;
  }

  get fixed_unit(): number {
    return this._fixed_unit;
  }

  set fixed_unit(value: number) {
    this._fixed_unit = value;
  }

  get budgeted_unit(): number {
    return this._budgeted_unit;
  }

  set budgeted_unit(value: number) {
    this._budgeted_unit = value;
  }

  get timesheet_total_unit(): number {
    return this._timesheet_total_unit;
  }

  set timesheet_total_unit(value: number) {
    this._timesheet_total_unit = value;
  }

  get is_peer_review(): number {
    return this._is_peer_review;
  }

  set is_peer_review(value: number) {
    this._is_peer_review = value;
  }

  get knockback_count(): number {
    return this._knockback_count;
  }

  set knockback_count(value: number) {
    this._knockback_count = value;
  }

  get neglience_count(): number {
    return this._neglience_count;
  }

  set neglience_count(value: number) {
    this._neglience_count = value;
  }

  get reportsent_count(): number {
    return this._reportsent_count;
  }

  set reportsent_count(value: number) {
    this._reportsent_count = value;
  }

  get user_rating(): number {
    return this._user_rating;
  }

  set user_rating(value: number) {
    this._user_rating = value;
  }

  get lock_worksheet(): number {
    return this._lock_worksheet;
  }

  set lock_worksheet(value: number) {
    this._lock_worksheet = value;
  }

  get worksheet_actual_teammember(): AdminUser {
    return this._worksheet_actual_teammember;
  }

  set worksheet_actual_teammember(value: AdminUser) {
    this._worksheet_actual_teammember = value;
  }

  get worksheet_additional_assignee(): AdminUser {
    return this._worksheet_additional_assignee;
  }

  set worksheet_additional_assignee(value: AdminUser) {
    this._worksheet_additional_assignee = value;
  }

  get worksheet_reviewer(): AdminUser {
    return this._worksheet_reviewer;
  }

  set worksheet_reviewer(value: AdminUser) {
    this._worksheet_reviewer = value;
  }

  get worksheet_peerreviewer(): AdminUser {
    return this._worksheet_peerreviewer;
  }

  set worksheet_peerreviewer(value: AdminUser) {
    this._worksheet_peerreviewer = value;
  }

  get team_json(): string {
    return this._team_json;
  }

  set team_json(value: string) {
    this._team_json = value;
  }

  get completed_on(): string {
    return this._completed_on;
  }

  set completed_on(value: string) {
    this._completed_on = value;
  }

  get completed_by(): AdminUser {
    return this._completed_by;
  }

  set completed_by(value: AdminUser) {
    this._completed_by = value;
  }

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get modified_by(): AdminUser {
    return this._modified_by;
  }

  set modified_by(value: AdminUser) {
    this._modified_by = value;
  }

  get modified_on(): string {
    return this._modified_on;
  }

  set modified_on(value: string) {
    this._modified_on = value;
  }

  get taskchecklist(): number {
    return this._taskchecklist;
  }

  set taskchecklist(value: number) {
    this._taskchecklist = value;
  }

  get is_repeat_task(): number {
    return this._is_repeat_task;
  }

  set is_repeat_task(value: number) {
    this._is_repeat_task = value;
  }

  get new_due_date(): string {
    return this._new_due_date;
  }

  set new_due_date(value: string) {
    this._new_due_date = value;
  }

  get new_end_date(): string {
    return this._new_end_date;
  }

  set new_end_date(value: string) {
    this._new_end_date = value;
  }

  get new_start_date(): string {
    return this._new_start_date;
  }

  set new_start_date(value: string) {
    this._new_start_date = value;
  }

  get new_worksheet_master_id(): number {
    return this._new_worksheet_master_id;
  }

  set new_worksheet_master_id(value: number) {
    this._new_worksheet_master_id = value;
  }

  get new_master_activity_id(): number {
    return this._new_master_activity_id;
  }

  set new_master_activity_id(value: number) {
    this._new_master_activity_id = value;
  }

  get new_task_id(): number {
    return this._new_task_id;
  }

  set new_task_id(value: number) {
    this._new_task_id = value;
  }

  get new_frequency_id(): Frequency {
    return this._new_frequency_id;
  }

  set new_frequency_id(value: Frequency) {
    this._new_frequency_id = value;
  }

  get entity_grouptype_id(): number {
    return this._entity_grouptype_id;
  }

  set entity_grouptype_id(value: number) {
    this._entity_grouptype_id = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }

  get parent_name(): string {
    return this._parent_name;
  }

  set parent_name(value: string) {
    this._parent_name = value;
  }

  get critical_task(): number {
    return this._critical_task;
  }

  set critical_task(value: number) {
    this._critical_task = value;
  }
}

export class StatusList {

  private _id: number;
  private _status_name: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get status_name(): string {
    return this._status_name;
  }

  set status_name(value: string) {
    this._status_name = value;
  }
}

export class TaskDataList {

  private _id: number;
  private _task_name: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get task_name(): string {
    return this._task_name;
  }

  set task_name(value: string) {
    this._task_name = value;
  }
}

export class WorksheetStatus {

  private _id: number;
  private _status_name: string;
  private _is_active: number;
  private _sort_order: number;
  private _is_right: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get status_name(): string {
    return this._status_name;
  }

  set status_name(value: string) {
    this._status_name = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get sort_order(): number {
    return this._sort_order;
  }

  set sort_order(value: number) {
    this._sort_order = value;
  }


  get is_right(): number {
    return this._is_right;
  }

  set is_right(value: number) {
    this._is_right = value;
  }
}


export class WorksheetStatusLog {

  private _id: number;
  private _masteractivity_name: string;
  private _task_name: string;
  private _worksheet_id: number;
  private _status_id: WorksheetStatus;
  private _created_on: string;
  private _created_by: AdminUser;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get masteractivity_name(): string {
    return this._masteractivity_name;
  }

  set masteractivity_name(value: string) {
    this._masteractivity_name = value;
  }

  get task_name(): string {
    return this._task_name;
  }

  set task_name(value: string) {
    this._task_name = value;
  }

  get worksheet_id(): number {
    return this._worksheet_id;
  }

  set worksheet_id(value: number) {
    this._worksheet_id = value;
  }

  get status_id(): WorksheetStatus {
    return this._status_id;
  }

  set status_id(value: WorksheetStatus) {
    this._status_id = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }
}

export class WorksheetStatusCounter {

  private _id: number;
  private _status_name: string;
  private _count: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get status_name(): string {
    return this._status_name;
  }

  set status_name(value: string) {
    this._status_name = value;
  }

  get count(): string {
    return this._count;
  }

  set count(value: string) {
    this._count = value;
  }
}


export class WorksheetNotes {
  private _id: number;
  private _worksheet_id: number;
  private _notes: string;
  private _type: string;
  private _created_by: AdminUser;
  private _created_on: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get worksheet_id(): number {
    return this._worksheet_id;
  }

  set worksheet_id(value: number) {
    this._worksheet_id = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }
}

export class WorksheetDocument {
  private _id: number;
  private _worksheet_id: number;
  private _document_title: string;
  private _document_name: string;
  private _document_path: string;
  private _document_type: number;
  private _is_deleted: number;
  private _is_additional: number;
  private _is_sent: number;
  private _created_by: AdminUser;
  private _created_on: string;
  private _deleted_by: AdminUser;
  private _deleted_on: string;
  private _is_drive: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get worksheet_id(): number {
    return this._worksheet_id;
  }

  set worksheet_id(value: number) {
    this._worksheet_id = value;
  }

  get document_title(): string {
    return this._document_title;
  }

  set document_title(value: string) {
    this._document_title = value;
  }

  get document_name(): string {
    return this._document_name;
  }

  set document_name(value: string) {
    this._document_name = value;
  }

  get document_path(): string {
    return this._document_path;
  }

  set document_path(value: string) {
    this._document_path = value;
  }

  get document_type(): number {
    return this._document_type;
  }

  set document_type(value: number) {
    this._document_type = value;
  }

  get is_deleted(): number {
    return this._is_deleted;
  }

  set is_deleted(value: number) {
    this._is_deleted = value;
  }

  get is_additional(): number {
    return this._is_additional;
  }

  set is_additional(value: number) {
    this._is_additional = value;
  }

  get is_sent(): number {
    return this._is_sent;
  }

  set is_sent(value: number) {
    this._is_sent = value;
  }

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get deleted_by(): AdminUser {
    return this._deleted_by;
  }

  set deleted_by(value: AdminUser) {
    this._deleted_by = value;
  }

  get deleted_on(): string {
    return this._deleted_on;
  }

  set deleted_on(value: string) {
    this._deleted_on = value;
  }

  get is_drive(): number {
    return this._is_drive;
  }

  set is_drive(value: number) {
    this._is_drive = value;
  }
}

export class EmailPreview {
  private _id: number;
  private _to: string;
  private _from: any [];
  private _cc: string;
  private _bcc: string;
  private _subject: string;
  private _content: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get to(): string {
    return this._to;
  }

  set to(value: string) {
    this._to = value;
  }

  get from(): any[] {
    return this._from;
  }

  set from(value: any[]) {
    this._from = value;
  }

  get cc(): string {
    return this._cc;
  }

  set cc(value: string) {
    this._cc = value;
  }

  get bcc(): string {
    return this._bcc;
  }

  set bcc(value: string) {
    this._bcc = value;
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }

  get content(): number {
    return this._content;
  }

  set content(value: number) {
    this._content = value;
  }
}

export class WorksheetFromList {
  private _email: string;
  private _name: string;

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

export class WoksheetStatusFlow {

  private _id: number;
  private _master_activity_id: number;
  private _status_from: number;
  private _status_to: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get master_activity_id(): number {
    return this._master_activity_id;
  }

  set master_activity_id(value: number) {
    this._master_activity_id = value;
  }

  get status_from(): number {
    return this._status_from;
  }

  set status_from(value: number) {
    this._status_from = value;
  }

  get status_to(): number {
    return this._status_to;
  }

  set status_to(value: number) {
    this._status_to = value;
  }
}
