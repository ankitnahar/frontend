import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';

export class Shift {
  private _id: number;
  private _department_id: number;
  private _shift_name: string;
  private _from_time: string;
  private _to_time: string;
  private _grace_period: string;
  private _late_period: string;
  private _late_allowed_count: string;
  private _break_time: string;
  private _description: string;
  private _is_active: string;
  private _sort_order: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _holiday_shift_id: number;
  private _sat_off: number;
  private _department_name: string;

  get department_id(): number {
    return this._department_id;
  }

  set department_id(value: number) {
    this._department_id = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get shift_name(): string {
    return this._shift_name;
  }

  set shift_name(value: string) {
    this._shift_name = value;
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

  get late_allowed_count(): string {
    return this._late_allowed_count;
  }

  set late_allowed_count(value: string) {
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

  get is_active(): string {
    return this._is_active;
  }

  set is_active(value: string) {
    this._is_active = value;
  }

  get sort_order(): string {
    return this._sort_order;
  }

  set sort_order(value: string) {
    this._sort_order = value;
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

  get holiday_shift_id(): number {
    return this._holiday_shift_id;
  }

  set holiday_shift_id(value: number) {
    this._holiday_shift_id = value;
  }

  get sat_off(): number {
    return this._sat_off;
  }

  set sat_off(value: number) {
    this._sat_off = value;
  }

  get department_name(): string {
    return this._department_name;
  }

  set department_name(value: string) {
    this._department_name = value;
  }
}
