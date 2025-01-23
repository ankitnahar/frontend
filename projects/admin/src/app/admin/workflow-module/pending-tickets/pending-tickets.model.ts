import {AdminUser} from '../../../../utility/shared-model/admin-user.model';

export class TicketDocument {

  private _id: number;
  private _ticket_id: number;
  private _document_title: string;
  private _document_name: string;
  private _document_path: string;
  private _is_deleted: number;
  private _created_on: string;
  private _created_by: AdminUser;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get ticket_id(): number {
    return this._ticket_id;
  }

  set ticket_id(value: number) {
    this._ticket_id = value;
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

  get is_deleted(): number {
    return this._is_deleted;
  }

  set is_deleted(value: number) {
    this._is_deleted = value;
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

export class TicketAssignee {

  private _id: number;
  private _userfullname: string;
  private _ticket_id: number;
  private _action_require_details: string;
  private _ticket_assignee: number;
  private _action_taken_details: string;
  private _mark_as_complete: number;
  private _complete_date: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get userfullname(): string {
    return this._userfullname;
  }

  set userfullname(value: string) {
    this._userfullname = value;
  }

  get ticket_id(): number {
    return this._ticket_id;
  }

  set ticket_id(value: number) {
    this._ticket_id = value;
  }

  get action_require_details(): string {
    return this._action_require_details;
  }

  set action_require_details(value: string) {
    this._action_require_details = value;
  }

  get ticket_assignee(): number {
    return this._ticket_assignee;
  }

  set ticket_assignee(value: number) {
    this._ticket_assignee = value;
  }

  get action_taken_details(): string {
    return this._action_taken_details;
  }

  set action_taken_details(value: string) {
    this._action_taken_details = value;
  }

  get mark_as_complete(): number {
    return this._mark_as_complete;
  }

  set mark_as_complete(value: number) {
    this._mark_as_complete = value;
  }

  get complete_date(): string {
    return this._complete_date;
  }

  set complete_date(value: string) {
    this._complete_date = value;
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

  get modified_on(): string {
    return this._modified_on;
  }

  set modified_on(value: string) {
    this._modified_on = value;
  }

  get modified_by(): AdminUser {
    return this._modified_by;
  }

  set modified_by(value: AdminUser) {
    this._modified_by = value;
  }
}

export class PendingTickets {
  private _id: number;
  private _code: number;
  private _type_id: number;
  private _trading_name: string;
  private _ticket_type: string;
  private _ticket_assignee: string;
  private _ticket_assignee_name: string;
  private _tam: string;
  private _TH: string;
  private _user_image: string;
  private _team_id: AdminUser;
  private _entity_id: number;
  private _status_id: number;
  private _severity: number;
  private _priority: number;
  private _subject: string;
  private _technical_account_manager: AdminUser;
  private _technical_head: string;
  private _problem_our_side: string;
  private _staff_involved_issue: AdminUser;
  private _type_of_mistake: string;
  private _issue_detail: string;
  private _reason_why_this_has_occurred: string;
  private _resolution: string;
  private _staff_incharge: AdminUser;
  private _ticket_topic: string;
  private _doc_upload_path: string;
  private _sr_topic: string;
  private _sr_practice_id: number;
  private _sr_practice_name: string;
  private _flag_open: number;
  private _open_time: string;
  private _opened_by: AdminUser;
  private _created_on: string;
  private _created_by: AdminUser;
  private _discontinue_stage: number;
  private _department_id: number;
  private _process: string;
  private _sub_process: string;
  private _head_count: number;
  private _save_hour: number;
  private _parent_id: number;
  private _parent_name: string;

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

  get department_id(): number {
    return this._department_id;
  }

  set department_id(value: number) {
    this._department_id = value;
  }

  get process(): string {
    return this._process;
  }

  set process(value: string) {
    this._process = value;
  }

  get sub_process(): string {
    return this._sub_process;
  }

  set sub_process(value: string) {
    this._sub_process = value;
  }

  get head_count(): number {
    return this._head_count;
  }

  set head_count(value: number) {
    this._head_count = value;
  }

  get save_hour(): number {
    return this._save_hour;
  }

  set save_hour(value: number) {
    this._save_hour = value;
  }

  get TH(): string {
    return this._TH;
  }

  set TH(value: string) {
    this._TH = value;
  }

  get user_image(): string {
    return this._user_image;
  }

  set user_image(value: string) {
    this._user_image = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get code(): number {
    return this._code;
  }

  set code(value: number) {
    this._code = value;
  }

  get type_id(): number {
    return this._type_id;
  }

  set type_id(value: number) {
    this._type_id = value;
  }

  get trading_name(): string {
    return this._trading_name;
  }

  set trading_name(value: string) {
    this._trading_name = value;
  }

  get team_id(): AdminUser {
    return this._team_id;
  }

  set team_id(value: AdminUser) {
    this._team_id = value;
  }

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get ticket_type(): string {
    return this._ticket_type;
  }

  set ticket_type(value: string) {
    this._ticket_type = value;
  }

  get ticket_assignee(): string {
    return this._ticket_assignee;
  }

  set ticket_assignee(value: string) {
    this._ticket_assignee = value;
  }

  get ticket_assignee_name(): string {
    return this._ticket_assignee_name;
  }

  set ticket_assignee_name(value: string) {
    this._ticket_assignee_name = value;
  }

  get tam(): string {
    return this._tam;
  }

  set tam(value: string) {
    this._tam = value;
  }

  get status_id(): number {
    return this._status_id;
  }

  set status_id(value: number) {
    this._status_id = value;
  }

  get severity(): number {
    return this._severity;
  }

  set severity(value: number) {
    this._severity = value;
  }

  get priority(): number {
    return this._priority;
  }

  set priority(value: number) {
    this._priority = value;
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }

  get technical_account_manager(): AdminUser {
    return this._technical_account_manager;
  }

  set technical_account_manager(value: AdminUser) {
    this._technical_account_manager = value;
  }

  get technical_head(): string {
    return this._technical_head;
  }

  set technical_head(value: string) {
    this._technical_head = value;
  }

  get problem_our_side(): string {
    return this._problem_our_side;
  }

  set problem_our_side(value: string) {
    this._problem_our_side = value;
  }

  get staff_involved_issue(): AdminUser {
    return this._staff_involved_issue;
  }

  set staff_involved_issue(value: AdminUser) {
    this._staff_involved_issue = value;
  }

  get type_of_mistake(): string {
    return this._type_of_mistake;
  }

  set type_of_mistake(value: string) {
    this._type_of_mistake = value;
  }

  get issue_detail(): string {
    return this._issue_detail;
  }

  set issue_detail(value: string) {
    this._issue_detail = value;
  }

  get reason_why_this_has_occurred(): string {
    return this._reason_why_this_has_occurred;
  }

  set reason_why_this_has_occurred(value: string) {
    this._reason_why_this_has_occurred = value;
  }

  get resolution(): string {
    return this._resolution;
  }

  set resolution(value: string) {
    this._resolution = value;
  }

  get staff_incharge(): AdminUser {
    return this._staff_incharge;
  }

  set staff_incharge(value: AdminUser) {
    this._staff_incharge = value;
  }

  get ticket_topic(): string {
    return this._ticket_topic;
  }

  set ticket_topic(value: string) {
    this._ticket_topic = value;
  }

  get doc_upload_path(): string {
    return this._doc_upload_path;
  }

  set doc_upload_path(value: string) {
    this._doc_upload_path = value;
  }

  get sr_topic(): string {
    return this._sr_topic;
  }

  set sr_topic(value: string) {
    this._sr_topic = value;
  }

  get sr_practice_id(): number {
    return this._sr_practice_id;
  }

  set sr_practice_id(value: number) {
    this._sr_practice_id = value;
  }

  get sr_practice_name(): string {
    return this._sr_practice_name;
  }

  set sr_practice_name(value: string) {
    this._sr_practice_name = value;
  }

  get flag_open(): number {
    return this._flag_open;
  }

  set flag_open(value: number) {
    this._flag_open = value;
  }

  get open_time(): string {
    return this._open_time;
  }

  set open_time(value: string) {
    this._open_time = value;
  }

  get opened_by(): AdminUser {
    return this._opened_by;
  }

  set opened_by(value: AdminUser) {
    this._opened_by = value;
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

  get discontinue_stage(): number {
    return this._discontinue_stage;
  }

  set discontinue_stage(value: number) {
    this._discontinue_stage = value;
  }
}
