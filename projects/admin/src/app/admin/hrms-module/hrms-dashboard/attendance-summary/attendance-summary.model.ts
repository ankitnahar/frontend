import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {Shift} from '../shift-list/shift-list.model';

export class AttendanceSummary {
  private _id: number;
  private _user_id: AdminUser;
  private _shift_id: Shift;
  private _date: string;
  private _punch_in: string;
  private _punch_out: string;
  private _working_time: string;
  private _break_time: string;
  private _shift_from_time: string;
  private _shift_to_time: string;
  private _shiftTime: string;
  private _allow_break: string;
  private _status: number;
  private _remark: string;
  private _final_remark: string;
  private _assignee: AdminUser;
  private _first_approval: AdminUser;
  private _second_approval: AdminUser;
  private _reason: string;
  private _is_exception: number;
  private _units: number;
  private _is_holiday: number;

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

  get punch_in(): string {
    return this._punch_in;
  }

  set punch_in(value: string) {
    this._punch_in = value;
  }

  get punch_out(): string {
    return this._punch_out;
  }

  set punch_out(value: string) {
    this._punch_out = value;
  }

  get working_time(): string {
    return this._working_time;
  }

  set working_time(value: string) {
    this._working_time = value;
  }

  get break_time(): string {
    return this._break_time;
  }

  set break_time(value: string) {
    this._break_time = value;
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

  get shiftTime(): string {
    return this._shiftTime;
  }

  set shiftTime(value: string) {
    this._shiftTime = value;
  }

  get allow_break(): string {
    return this._allow_break;
  }

  set allow_break(value: string) {
    this._allow_break = value;
  }

  get status(): number {
    return this._status;
  }

  set status(value: number) {
    this._status = value;
  }

  get remark(): string {
    return this._remark;
  }

  set remark(value: string) {
    this._remark = value;
  }

  get final_remark(): string {
    return this._final_remark;
  }

  set final_remark(value: string) {
    this._final_remark = value;
  }

  get assignee(): AdminUser {
    return this._assignee;
  }

  set assignee(value: AdminUser) {
    this._assignee = value;
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

  get reason(): string {
    return this._reason;
  }

  set reason(value: string) {
    this._reason = value;
  }

  get is_exception(): number {
    return this._is_exception;
  }

  set is_exception(value: number) {
    this._is_exception = value;
  }

  get units(): number {
    return this._units;
  }

  set units(value: number) {
    this._units = value;
  }

  get is_holiday(): number {
    return this._is_holiday;
  }

  set is_holiday(value: number) {
    this._is_holiday = value;
  }
}

