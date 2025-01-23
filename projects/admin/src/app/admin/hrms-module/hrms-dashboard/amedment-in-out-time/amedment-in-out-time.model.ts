import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';

export class AmedmentInOutTime {
  private _id: number;
  private _user_id: AdminUser;
  private _date: string;
  private _punch_time: string;
  private _punch_type: number;
  private _reason: string;
  private _rawdata: string;
  private _status: number;
  private _reason_for_rejection: string;
  private _modified_reason_for_rejection: string;
  private _is_reason_limit_exceed: number;
  private _approved_by: AdminUser;
  private _created_on: string;
  private _created_by: AdminUser;

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

  get reason(): string {
    return this._reason;
  }

  set reason(value: string) {
    this._reason = value;
  }

  get rawdata(): string {
    return this._rawdata;
  }

  set rawdata(value: string) {
    this._rawdata = value;
  }

  get status(): number {
    return this._status;
  }

  set status(value: number) {
    this._status = value;
  }

  get reason_for_rejection(): string {
    return this._reason_for_rejection;
  }

  set reason_for_rejection(value: string) {
    this._reason_for_rejection = value;
  }

  get modified_reason_for_rejection(): string {
    return this._modified_reason_for_rejection;
  }

  set modified_reason_for_rejection(value: string) {
    this._modified_reason_for_rejection = value;
  }

  get is_reason_limit_exceed(): number {
    return this._is_reason_limit_exceed;
  }

  set is_reason_limit_exceed(value: number) {
    this._is_reason_limit_exceed = value;
  }

  get approved_by(): AdminUser {
    return this._approved_by;
  }

  set approved_by(value: AdminUser) {
    this._approved_by = value;
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
