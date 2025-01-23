import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';

export class ChangeInOutTime {
  private _id: number;
  private _hr_detail_id: number;
  private _user_id: AdminUser;
  private _date: string;
  private _punch_time: string;
  private _reason: string;
  private _punch_type: number;
  private _office_location: number;
  private _is_manually_change: number;
  private _created_on: string;
  private _created_by: AdminUser;


  get reason(): string {
    return this._reason;
  }

  set reason(value: string) {
    this._reason = value;
  }

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

  get punch_type(): number {
    return this._punch_type;
  }

  set punch_type(value: number) {
    this._punch_type = value;
  }

  get office_location(): number {
    return this._office_location;
  }

  set office_location(value: number) {
    this._office_location = value;
  }

  get is_manually_change(): number {
    return this._is_manually_change;
  }

  set is_manually_change(value: number) {
    this._is_manually_change = value;
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
