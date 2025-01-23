import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';

export class Holiday {
  private _id: number;
  private _date: string;
  private _year: number;
  private _description: string;
  private _is_active: string;
  private _shift_name: string;
  private _shift_id: string;
  private _holiday_year: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _holiday_id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
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

  get shift_name(): string {
    return this._shift_name;
  }

  set shift_name(value: string) {
    this._shift_name = value;
  }

  get shift_id(): string {
    return this._shift_id;
  }

  set shift_id(value: string) {
    this._shift_id = value;
  }

  get holiday_year(): string {
    return this._holiday_year;
  }

  set holiday_year(value: string) {
    this._holiday_year = value;
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

  get holiday_id(): number {
    return this._holiday_id;
  }

  set holiday_id(value: number) {
    this._holiday_id = value;
  }
}
