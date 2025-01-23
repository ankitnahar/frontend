import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';

export class LeaveBalance {
  private _id: number;
  private _user_bio_id: number;
  private _userfullname: number;
  private _user_id: number;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _holiday_id: number;
  private _co: string;
  private _cl: string;
  private _la: string;
  private _month: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get user_bio_id(): number {
    return this._user_bio_id;
  }

  set user_bio_id(value: number) {
    this._user_bio_id = value;
  }

  get userfullname(): number {
    return this._userfullname;
  }

  set userfullname(value: number) {
    this._userfullname = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
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

  get co(): string {
    return this._co;
  }

  set co(value: string) {
    this._co = value;
  }

  get cl(): string {
    return this._cl;
  }

  set cl(value: string) {
    this._cl = value;
  }

  get la(): string {
    return this._la;
  }

  set la(value: string) {
    this._la = value;
  }

  get month(): string {
    return this._month;
  }

  set month(value: string) {
    this._month = value;
  }
}
