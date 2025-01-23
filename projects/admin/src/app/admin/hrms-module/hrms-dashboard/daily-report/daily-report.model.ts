import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {Shift} from '../shift-list/shift-list.model';

export class DailyReport {
  private _id: number;
  private _user_id: AdminUser;
  private _shift_id: Shift;
  private _date: string;
  private _shift_from_time: string;
  private _shift_to_time: string;
  private _grace_period: string;
  private _late_period: string;
  private _late_allowed_count: string;
  private _allowed_break: string;
  private _first_in: string;
  private _last_out: string;
  private _punch_in: string;
  private _punch_out: string;
  private _assignee: AdminUser;
  private _inout: InOut;
  private _totalUnit: number;

  get totalUnit(): number {
    return this._totalUnit;
  }

  set totalUnit(value: number) {
    this._totalUnit = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get user_id(): AdminUser {
    return this._user_id;
  }

  set user_id(value: AdminUser) {
    this._user_id = value;
  }

  get shift_id(): Shift {
    return this._shift_id;
  }

  set shift_id(value: Shift) {
    this._shift_id = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get shift_from_time(): string {
    return this._shift_from_time;
  }

  set shift_from_time(value: string) {
    this._shift_from_time = value;
  }

  get shift_to_time(): string {
    return this._shift_to_time;
  }

  set shift_to_time(value: string) {
    this._shift_to_time = value;
  }

  get grace_period(): string {
    return this._grace_period;
  }

  set grace_period(value: string) {
    this._grace_period = value;
  }

  get late_period(): string {
    return this._late_period;
  }

  set late_period(value: string) {
    this._late_period = value;
  }

  get late_allowed_count(): string {
    return this._late_allowed_count;
  }

  set late_allowed_count(value: string) {
    this._late_allowed_count = value;
  }

  get allowed_break(): string {
    return this._allowed_break;
  }

  set allowed_break(value: string) {
    this._allowed_break = value;
  }

  get first_in(): string {
    return this._first_in;
  }

  set first_in(value: string) {
    this._first_in = value;
  }

  get last_out(): string {
    return this._last_out;
  }

  set last_out(value: string) {
    this._last_out = value;
  }

  get assignee(): AdminUser {
    return this._assignee;
  }

  set assignee(value: AdminUser) {
    this._assignee = value;
  }

  get inout(): InOut {
    return this._inout;
  }

  set inout(value: InOut) {
    this._inout = value;
  }
}

export class InOut {
  private _id: number;
  private _hr_detail_id: number;
  private _user_id: AdminUser;
  private _date: string;
  private _punch_time: string;
  private _punch_type: string;
  private _created_on: string;
  private _created_by: AdminUser;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get hr_detail_id(): number {
    return this._hr_detail_id;
  }

  set hr_detail_id(value: number) {
    this._hr_detail_id = value;
  }

  get user_id(): AdminUser {
    return this._user_id;
  }

  set user_id(value: AdminUser) {
    this._user_id = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get punch_time(): string {
    return this._punch_time;
  }

  set punch_time(value: string) {
    this._punch_time = value;
  }

  get punch_type(): string {
    return this._punch_type;
  }

  set punch_type(value: string) {
    this._punch_type = value;
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
