import {AdminUser} from './admin-user.model';

export class HrShift {
  private _id: number;
  private _shift_name: string;
  private _from_time: string;
  private _to_time: string;
  private _grace_period: string;
  private _late_period: string;
  private _late_allowed_count: number;
  private _break_time: string;
  private _note: string;
  private _is_active: number;
  private _is_deleted: number;
  private _is_visible: number;
  private _sort_order: number;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _isChecked: boolean;

  get isChecked(): boolean {
    return this._isChecked;
  }

  set isChecked(value: boolean) {
    this._isChecked = value;
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

  get note(): string {
    return this._note;
  }

  set note(value: string) {
    this._note = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get is_deleted(): number {
    return this._is_deleted;
  }

  set is_deleted(value: number) {
    this._is_deleted = value;
  }

  get is_visible(): number {
    return this._is_visible;
  }

  set is_visible(value: number) {
    this._is_visible = value;
  }

  get sort_order(): number {
    return this._sort_order;
  }

  set sort_order(value: number) {
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
}
