import {AdminUser} from "../../../../../../utility/shared-model/admin-user.model";

export class InformationRequired {
  private _id: number;
  private _entity_id: number;
  private _trading_name: string;
  private _billing_name: string;
  private _status: string;
  private _tl_name: string;
  private _tam_name: string;
  private _team_member: string;
  private _subject: string;
  private _start_period: string;
  private _end_period: string;
  private _stage_id: InformationStatus;
  private _frequency_name: string;
  private _additional_atl: AdminUser;
  private _additional_tl: AdminUser;
  private _additional_tm: AdminUser;
  private _totalInformation: number;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _reminder: number;
  private _snooze: number;
  private _documents: InformationDocument;
  private _atl_name: string;
  private _sendback_reason_tm: string;
  private _sendback_reason_atl: string;
  private _sendback_reason_tl: string;
  private _partial_count: number;
  private _received_count: number;
  private _pending_count: number;
  private _discontinue_stage: number;
  private _parent_id: number;
  private _parent_name: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get trading_name(): string {
    return this._trading_name;
  }

  set trading_name(value: string) {
    this._trading_name = value;
  }

  get billing_name(): string {
    return this._billing_name;
  }

  set billing_name(value: string) {
    this._billing_name = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get tl_name(): string {
    return this._tl_name;
  }

  set tl_name(value: string) {
    this._tl_name = value;
  }

  get tam_name(): string {
    return this._tam_name;
  }

  set tam_name(value: string) {
    this._tam_name = value;
  }

  get team_member(): string {
    return this._team_member;
  }

  set team_member(value: string) {
    this._team_member = value;
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }

  get start_period(): string {
    return this._start_period;
  }

  set start_period(value: string) {
    this._start_period = value;
  }

  get end_period(): string {
    return this._end_period;
  }

  set end_period(value: string) {
    this._end_period = value;
  }

  get stage_id(): InformationStatus {
    return this._stage_id;
  }

  set stage_id(value: InformationStatus) {
    this._stage_id = value;
  }

  get frequency_name(): string {
    return this._frequency_name;
  }

  set frequency_name(value: string) {
    this._frequency_name = value;
  }

  get additional_atl(): AdminUser {
    return this._additional_atl;
  }

  set additional_atl(value: AdminUser) {
    this._additional_atl = value;
  }

  get additional_tl(): AdminUser {
    return this._additional_tl;
  }

  set additional_tl(value: AdminUser) {
    this._additional_tl = value;
  }

  get additional_tm(): AdminUser {
    return this._additional_tm;
  }

  set additional_tm(value: AdminUser) {
    this._additional_tm = value;
  }

  get totalInformation(): number {
    return this._totalInformation;
  }

  set totalInformation(value: number) {
    this._totalInformation = value;
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

  get reminder(): number {
    return this._reminder;
  }

  set reminder(value: number) {
    this._reminder = value;
  }

  get snooze(): number {
    return this._snooze;
  }

  set snooze(value: number) {
    this._snooze = value;
  }

  get documents(): InformationDocument {
    return this._documents;
  }

  set documents(value: InformationDocument) {
    this._documents = value;
  }

  get atl_name(): string {
    return this._atl_name;
  }

  set atl_name(value: string) {
    this._atl_name = value;
  }

  get sendback_reason_tm(): string {
    return this._sendback_reason_tm;
  }

  set sendback_reason_tm(value: string) {
    this._sendback_reason_tm = value;
  }

  get sendback_reason_atl(): string {
    return this._sendback_reason_atl;
  }

  set sendback_reason_atl(value: string) {
    this._sendback_reason_atl = value;
  }

  get sendback_reason_tl(): string {
    return this._sendback_reason_tl;
  }

  set sendback_reason_tl(value: string) {
    this._sendback_reason_tl = value;
  }

  get partial_count(): number {
    return this._partial_count;
  }

  set partial_count(value: number) {
    this._partial_count = value;
  }

  get received_count(): number {
    return this._received_count;
  }

  get pending_count(): number {
    return this._pending_count;
  }

  set pending_count(value: number) {
    this._pending_count = value;
  }

  set received_count(value: number) {
    this._received_count = value;
  }

  get discontinue_stage(): number {
    return this._discontinue_stage;
  }

  set discontinue_stage(value: number) {
    this._discontinue_stage = value;
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
}


export class InformationStatus {
  private _id: number;
  private _status_name: string;
  private _applicable: number;
  private _is_active: number;
  private _sort_order: number;
  private _tab_id: number;

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

  get applicable(): number {
    return this._applicable;
  }

  set applicable(value: number) {
    this._applicable = value;
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

  get tab_id(): number {
    return this._tab_id;
  }

  set tab_id(value: number) {
    this._tab_id = value;
  }
}

export class InformationLog {
  private _id: number;
  private _information_id: number;
  private _status_id: InformationStatus;
  private _modified_by: AdminUser;
  private _modified_on: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get information_id(): number {
    return this._information_id;
  }

  set information_id(value: number) {
    this._information_id = value;
  }

  get status_id(): InformationStatus {
    return this._status_id;
  }

  set status_id(value: InformationStatus) {
    this._status_id = value;
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
}

export class InformationRequiredData {

  private _id: number;
  private _information_id: number;
  private _bank_other: string;
  private _type_account: string;
  private _account_no: number;
  private _status_id: number;
  private _befree_comment: string;
  private _answer_type: string;
  private _client_comment: string;
  private _created_on: string;
  private _document_id: number;
  private _document_type: number;
  private _document_name: string;
  private _document_path: string;
  private _created_by: AdminUser;
  private _modified_by: AdminUser;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get information_id(): number {
    return this._information_id;
  }

  set information_id(value: number) {
    this._information_id = value;
  }

  get bank_other(): string {
    return this._bank_other;
  }

  set bank_other(value: string) {
    this._bank_other = value;
  }

  get type_account(): string {
    return this._type_account;
  }

  set type_account(value: string) {
    this._type_account = value;
  }

  get account_no(): number {
    return this._account_no;
  }

  set account_no(value: number) {
    this._account_no = value;
  }

  get status_id(): number {
    return this._status_id;
  }

  set status_id(value: number) {
    this._status_id = value;
  }

  get befree_comment(): string {
    return this._befree_comment;
  }

  set befree_comment(value: string) {
    this._befree_comment = value;
  }

  get answer_type(): string {
    return this._answer_type;
  }

  set answer_type(value: string) {
    this._answer_type = value;
  }

  get client_comment(): string {
    return this._client_comment;
  }

  set client_comment(value: string) {
    this._client_comment = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get document_id(): number {
    return this._document_id;
  }

  set document_id(value: number) {
    this._document_id = value;
  }

  get document_type(): number {
    return this._document_type;
  }

  set document_type(value: number) {
    this._document_type = value;
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

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }

  get modified_by(): AdminUser {
    return this._modified_by;
  }

  set modified_by(value: AdminUser) {
    this._modified_by = value;
  }
}

export class InformationDocument {
  private _id: number;
  private _information_detail_id: number;
  private _document_name: string;
  private _document_path: string;
  private _document_title: string;
  private _is_drive: number;
  private _is_client: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get information_detail_id(): number {
    return this._information_detail_id;
  }

  set information_detail_id(value: number) {
    this._information_detail_id = value;
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

  get document_title(): string {
    return this._document_title;
  }

  set document_title(value: string) {
    this._document_title = value;
  }

  get is_drive(): number {
    return this._is_drive;
  }

  set is_drive(value: number) {
    this._is_drive = value;
  }

  get is_client(): number {
    return this._is_client;
  }

  set is_client(value: number) {
    this._is_client = value;
  }
}

export class AdditionalInformationRequired {
  private _id: number;
  private _comment: string;
  private _next_infomation: number;
  private _client_comment: string;
  private _client_document: number;
  private _document: InformationDocument;
  private _created_by: AdminUser;
  private _is_deleted: number;
  private _deleted_on: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  get next_infomation(): number {
    return this._next_infomation;
  }

  set next_infomation(value: number) {
    this._next_infomation = value;
  }

  get client_comment(): string {
    return this._client_comment;
  }

  set client_comment(value: string) {
    this._client_comment = value;
  }

  get client_document(): number {
    return this._client_document;
  }

  set client_document(value: number) {
    this._client_document = value;
  }

  get document(): InformationDocument {
    return this._document;
  }

  set document(value: InformationDocument) {
    this._document = value;
  }

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }

  get is_deleted(): number {
    return this._is_deleted;
  }

  set is_deleted(value: number) {
    this._is_deleted = value;
  }

  get deleted_on(): string {
    return this._deleted_on;
  }

  set deleted_on(value: string) {
    this._deleted_on = value;
  }
}

export class TriggerInformation {
  private _id: number;
  private _entity_id: number;
  private _frequency_id: number;
  private _month: number;
  private _year: number;
  private _trigger_day: number;
  private _start_date: string;
  private _end_date: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _is_stop: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get frequency_id(): number {
    return this._frequency_id;
  }

  set frequency_id(value: number) {
    this._frequency_id = value;
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get trigger_day(): number {
    return this._trigger_day;
  }

  set trigger_day(value: number) {
    this._trigger_day = value;
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

  get is_stop(): number {
    return this._is_stop;
  }

  set is_stop(value: number) {
    this._is_stop = value;
  }
}

export class InformationReminderLog {
  private _id: number;
  private _information_id: number;
  private _reminder_date: string;
  private _to: string;
  private _year: number;
  private _created_on: string;
  private _created_by: AdminUser;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get information_id(): number {
    return this._information_id;
  }

  set information_id(value: number) {
    this._information_id = value;
  }

  get reminder_date(): string {
    return this._reminder_date;
  }

  set reminder_date(value: string) {
    this._reminder_date = value;
  }

  get to(): string {
    return this._to;
  }

  set to(value: string) {
    this._to = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
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
