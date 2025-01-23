import {AdminUser} from "./admin-user.model";

export class Leave {
  private _id: number;
  private _user_id: number;
  private _leave_type: string;
  private _from_date: string;
  private _to_date: string;
  private _status_id: number;
  private _remark_type: number;
  private _inform_team: number;
  private _team_email: string;
  private _anything_due: number;
  private _notes: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _first_approval: AdminUser;
  private _second_approval: AdminUser;
  private _first_approval_on: string;
  private _second_approval_on: string;
  private _first_approval_comment: string;
  private _second_approval_comment: string;
  private _date_array: string;
  private _days: number;
  private _leave_reason:string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get leave_type(): string {
    return this._leave_type;
  }

  set leave_type(value: string) {
    this._leave_type = value;
  }

  get from_date(): string {
    return this._from_date;
  }

  set from_date(value: string) {
    this._from_date = value;
  }

  get to_date(): string {
    return this._to_date;
  }

  set to_date(value: string) {
    this._to_date = value;
  }

  get status_id(): number {
    return this._status_id;
  }

  set status_id(value: number) {
    this._status_id = value;
  }

  get remark_type(): number {
    return this._remark_type;
  }

  set remark_type(value: number) {
    this._remark_type = value;
  }

  get inform_team(): number {
    return this._inform_team;
  }

  set inform_team(value: number) {
    this._inform_team = value;
  }

  get team_email(): string {
    return this._team_email;
  }

  set team_email(value: string) {
    this._team_email = value;
  }

  get anything_due(): number {
    return this._anything_due;
  }

  set anything_due(value: number) {
    this._anything_due = value;
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

  get first_approval(): AdminUser {
    return this._first_approval;
  }

  set first_approval(value: AdminUser) {
    this._first_approval = value;
  }

  get second_approval(): AdminUser {
    return this._second_approval;
  }

  set second_approval(value: AdminUser) {
    this._second_approval = value;
  }

  get first_approval_on(): string {
    return this._first_approval_on;
  }

  set first_approval_on(value: string) {
    this._first_approval_on = value;
  }

  get second_approval_on(): string {
    return this._second_approval_on;
  }

  set second_approval_on(value: string) {
    this._second_approval_on = value;
  }

  get first_approval_comment(): string {
    return this._first_approval_comment;
  }

  set first_approval_comment(value: string) {
    this._first_approval_comment = value;
  }

  get second_approval_comment(): string {
    return this._second_approval_comment;
  }

  set second_approval_comment(value: string) {
    this._second_approval_comment = value;
  }

  get date_array(): string {
    return this._date_array;
  }

  set date_array(value: string) {
    this._date_array = value;
  }

  get days(): number {
    return this._days;
  }

  set days(value: number) {
    this._days = value;
  }

  get leave_reason(): string {
    return this._leave_reason;
  }

  set leave_reason(value: string) {
    this._leave_reason = value;
  }
}

export class LeaveType {
  private _id: number;
  private _leave_type: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get leave_type(): string {
    return this._leave_type;
  }

  set leave_type(value: string) {
    this._leave_type = value;
  }
}
