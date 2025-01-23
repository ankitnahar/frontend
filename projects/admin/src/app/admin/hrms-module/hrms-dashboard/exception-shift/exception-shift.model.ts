import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {Shift} from '../shift-list/shift-list.model';

export class ExceptionShift {
  private _id: number;
  private _shift_id: Shift;
  private _start_date: string;
  private _end_date: string;
  private _from_time: string;
  private _to_time: string;
  private _grace_period: string;
  private _late_period: string;
  private _late_allowed_count: number;
  private _break_time: string;
  private _description: string;
  private _is_active: number;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _user_id: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get shift_id(): Shift {
    return this._shift_id;
  }

  set shift_id(value: Shift) {
    this._shift_id = value;
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

  get from_time(): string {
    return this._from_time;
  }

  set from_time(value: string) {
    this._from_time = value;
  }

  get to_time(): string {
    return this._to_time;
  }

  set to_time(value: string) {
    this._to_time = value;
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

  get late_allowed_count(): number {
    return this._late_allowed_count;
  }

  set late_allowed_count(value: number) {
    this._late_allowed_count = value;
  }

  get break_time(): string {
    return this._break_time;
  }

  set break_time(value: string) {
    this._break_time = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
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

  get user_id(): string {
    return this._user_id;
  }

  set user_id(value: string) {
    this._user_id = value;
  }
}
