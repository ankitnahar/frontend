import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';
import {Shift} from '../../shift-list/shift-list.model';


export class AttendanceSummaryReport {
  private _id: number;
  private _user_id: AdminUser;
  private _shift_id: Shift;
  private _date: string;
  private _punch_in: string;
  private _punch_out: string;
  private _working_time: string;
  private _break_time: string;
  private _status: number;
  private _remark: string;
  private _final_remark: string;
  private _absent: string;
  private _userAbsent: string;
  private _half_day_absent: string;
  private _holiday_working: string;
  private _half_holiday_working: string;
  private _late_coming: string;
  private _long_break: string;
  private _early_leaving: string;
  private _pending_for_request: string;
  private _approved: string;
  private _rejected: string;
  private _autoapproved: string;
  private _totalRequest: string;
  private _assignee: AdminUser;
  private _month: string;
  private _adjustment: number;
  private _reason: string;
  private _holiday_adjustment: number;
  private _total_leave: number;
  private _total_holiday: number;

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

  get absent(): string {
    return this._absent;
  }

  set absent(value: string) {
    this._absent = value;
  }

  get half_day_absent(): string {
    return this._half_day_absent;
  }

  set half_day_absent(value: string) {
    this._half_day_absent = value;
  }

  get holiday_working(): string {
    return this._holiday_working;
  }

  set holiday_working(value: string) {
    this._holiday_working = value;
  }

  get half_holiday_working(): string {
    return this._half_holiday_working;
  }

  set half_holiday_working(value: string) {
    this._half_holiday_working = value;
  }

  get late_coming(): string {
    return this._late_coming;
  }

  set late_coming(value: string) {
    this._late_coming = value;
  }

  get long_break(): string {
    return this._long_break;
  }

  set long_break(value: string) {
    this._long_break = value;
  }

  get early_leaving(): string {
    return this._early_leaving;
  }

  set early_leaving(value: string) {
    this._early_leaving = value;
  }

  get pending_for_request(): string {
    return this._pending_for_request;
  }

  set pending_for_request(value: string) {
    this._pending_for_request = value;
  }

  get approved(): string {
    return this._approved;
  }

  set approved(value: string) {
    this._approved = value;
  }

  get rejected(): string {
    return this._rejected;
  }

  set rejected(value: string) {
    this._rejected = value;
  }

  get autoapproved(): string {
    return this._autoapproved;
  }

  set autoapproved(value: string) {
    this._autoapproved = value;
  }

  get totalRequest(): string {
    return this._totalRequest;
  }

  set totalRequest(value: string) {
    this._totalRequest = value;
  }

  get assignee(): AdminUser {
    return this._assignee;
  }

  set assignee(value: AdminUser) {
    this._assignee = value;
  }

  get userAbsent(): string {
    return this._userAbsent;
  }

  set userAbsent(value: string) {
    this._userAbsent = value;
  }

  get month(): string {
    return this._month;
  }

  set month(value: string) {
    this._month = value;
  }

  get adjustment(): number {
    return this._adjustment;
  }

  set adjustment(value: number) {
    this._adjustment = value;
  }

  get reason(): string {
    return this._reason;
  }

  set reason(value: string) {
    this._reason = value;
  }

  get holiday_adjustment(): number {
    return this._holiday_adjustment;
  }

  set holiday_adjustment(value: number) {
    this._holiday_adjustment = value;
  }

  get total_leave(): number {
    return this._total_leave;
  }

  set total_leave(value: number) {
    this._total_leave = value;
  }

  get total_holiday(): number {
    return this._total_holiday;
  }

  set total_holiday(value: number) {
    this._total_holiday = value;
  }
}
