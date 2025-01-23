import {Basic} from '../../view-client/update-client/main-client/basic-main/basic.model';
import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';

export class Contact {
  private _id: number;
  private _entity_id: number;
  private _trading_name: string;
  private _billing_name: string;
  private _name: string;
  private _service_id: string;
  private _first_name: string;
  private _contact_person: string;
  private _contact_position_id: number;
  private _to: string;
  private _cc: string;
  private _other_email: string;
  private _is_display_bk_checklist: number;
  private _send_newsletter: number;
  private _mobile_no: string;
  private _office_no: string;
  private _fax_no: string;
  private _is_archived: number;
  private _archived_reason: string;
  private _archived_by: ArchiveBy;
  private _archived_on: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _discontinue_stage: number;
  private _service_name: string;
  private _tam_name: string;
  private _remark_count: number;
  private _contact_remark: ContactRemark;
  private _parent_id: number;
  private _is_related: number;
  private _abn_number: number;
  private _tfn_number: number;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _is_feedback_contact: number;
  private _feedback_email: string;
  private _from_email: string;
  private _is_login: number;
  private _client_login_email: string;
  private _from_name: string;
  private _bcc: string;
  private _parent_name: string;
  private _director_number: number;

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

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get service_id(): string {
    return this._service_id;
  }

  set service_id(value: string) {
    this._service_id = value;
  }

  get first_name(): string {
    return this._first_name;
  }

  set first_name(value: string) {
    this._first_name = value;
  }

  get contact_person(): string {
    return this._contact_person;
  }

  set contact_person(value: string) {
    this._contact_person = value;
  }

  get contact_position_id(): number {
    return this._contact_position_id;
  }

  set contact_position_id(value: number) {
    this._contact_position_id = value;
  }

  get to(): string {
    return this._to;
  }

  set to(value: string) {
    this._to = value;
  }

  get cc(): string {
    return this._cc;
  }

  set cc(value: string) {
    this._cc = value;
  }

  get other_email(): string {
    return this._other_email;
  }

  set other_email(value: string) {
    this._other_email = value;
  }

  get is_display_bk_checklist(): number {
    return this._is_display_bk_checklist;
  }

  set is_display_bk_checklist(value: number) {
    this._is_display_bk_checklist = value;
  }

  get send_newsletter(): number {
    return this._send_newsletter;
  }

  set send_newsletter(value: number) {
    this._send_newsletter = value;
  }

  get mobile_no(): string {
    return this._mobile_no;
  }

  set mobile_no(value: string) {
    this._mobile_no = value;
  }

  get office_no(): string {
    return this._office_no;
  }

  set office_no(value: string) {
    this._office_no = value;
  }

  get fax_no(): string {
    return this._fax_no;
  }

  set fax_no(value: string) {
    this._fax_no = value;
  }

  get is_archived(): number {
    return this._is_archived;
  }

  set is_archived(value: number) {
    this._is_archived = value;
  }

  get archived_reason(): string {
    return this._archived_reason;
  }

  set archived_reason(value: string) {
    this._archived_reason = value;
  }

  get archived_by(): ArchiveBy {
    return this._archived_by;
  }

  set archived_by(value: ArchiveBy) {
    this._archived_by = value;
  }

  get archived_on(): string {
    return this._archived_on;
  }

  set archived_on(value: string) {
    this._archived_on = value;
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

  get service_name(): string {
    return this._service_name;
  }

  set service_name(value: string) {
    this._service_name = value;
  }

  get tam_name(): string {
    return this._tam_name;
  }

  set tam_name(value: string) {
    this._tam_name = value;
  }

  get remark_count(): number {
    return this._remark_count;
  }

  set remark_count(value: number) {
    this._remark_count = value;
  }

  get contact_remark(): ContactRemark {
    return this._contact_remark;
  }

  set contact_remark(value: ContactRemark) {
    this._contact_remark = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }

  get is_related(): number {
    return this._is_related;
  }

  set is_related(value: number) {
    this._is_related = value;
  }

  get abn_number(): number {
    return this._abn_number;
  }

  set abn_number(value: number) {
    this._abn_number = value;
  }

  get tfn_number(): number {
    return this._tfn_number;
  }

  set tfn_number(value: number) {
    this._tfn_number = value;
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


  get is_feedback_contact(): number {
    return this._is_feedback_contact;
  }

  set is_feedback_contact(value: number) {
    this._is_feedback_contact = value;
  }

  get feedback_email(): string {
    return this._feedback_email;
  }

  set feedback_email(value: string) {
    this._feedback_email = value;
  }

  get from_email(): string {
    return this._from_email;
  }

  set from_email(value: string) {
    this._from_email = value;
  }

  get is_login(): number {
    return this._is_login;
  }

  set is_login(value: number) {
    this._is_login = value;
  }

  get client_login_email(): string {
    return this._client_login_email;
  }

  set client_login_email(value: string) {
    this._client_login_email = value;
  }

  get from_name(): string {
    return this._from_name;
  }

  set from_name(value: string) {
    this._from_name = value;
  }

  get bcc(): string {
    return this._bcc;
  }

  set bcc(value: string) {
    this._bcc = value;
  }

  get parent_name(): string {
    return this._parent_name;
  }

  set parent_name(value: string) {
    this._parent_name = value;
  }

  get director_number(): number {
    return this._director_number;
  }

  set director_number(value: number) {
    this._director_number = value;
  }
}

export class ArchiveBy {

  private _id: number;
  private _archived_by: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get archived_by(): string {
    return this._archived_by;
  }

  set archived_by(value: string) {
    this._archived_by = value;
  }
}

export class ContactRemark {

  private _id: number;
  private _contact_id: number;
  private _notes: string;
  private _is_active: number;
  private _created_on: string;
  private _created_by: AdminUser;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get contact_id(): number {
    return this._contact_id;
  }

  set contact_id(value: number) {
    this._contact_id = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
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

export class RelatedEntity {
  private _id: number;
  private _entity_id: Basic;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get entity_id(): Basic {
    return this._entity_id;
  }

  set entity_id(value: Basic) {
    this._entity_id = value;
  }
}


export class ContactUsersList {
  private _id: number;
  private _birthdate: string;
  private _email: string;
  private _first_name: string;
  private _last_name: string;
  private _mobile_no: string;
  private _trading_name: string;
  private _user_lastlogin: string;
  private _userfullname: string;
  private _entity_id: number;
  private _is_active: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get birthdate(): string {
    return this._birthdate;
  }

  set birthdate(value: string) {
    this._birthdate = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get first_name(): string {
    return this._first_name;
  }

  set first_name(value: string) {
    this._first_name = value;
  }

  get last_name(): string {
    return this._last_name;
  }

  set last_name(value: string) {
    this._last_name = value;
  }

  get mobile_no(): string {
    return this._mobile_no;
  }

  set mobile_no(value: string) {
    this._mobile_no = value;
  }

  get trading_name(): string {
    return this._trading_name;
  }

  set trading_name(value: string) {
    this._trading_name = value;
  }

  get user_lastlogin(): string {
    return this._user_lastlogin;
  }

  set user_lastlogin(value: string) {
    this._user_lastlogin = value;
  }

  get userfullname(): string {
    return this._userfullname;
  }

  set userfullname(value: string) {
    this._userfullname = value;
  }

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }
}
