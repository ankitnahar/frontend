import {AttendanceSummary} from '../attendance-summary.model';
import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';

export class UserPendingTimesheet {
  private _id: number;
  private _hr_detail_id: AttendanceSummary;
  private _user_id: number;
  private _approval_person: number;
  private _approval_comment: string;
  private _stage_id: number;
  private _in_hide: number;
  private _assignee: AdminUser;
  private _total_timesheet_unit: number;
  private _date: string;
  private _created_on: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get hr_detail_id(): AttendanceSummary {
    return this._hr_detail_id;
  }

  set hr_detail_id(value: AttendanceSummary) {
    this._hr_detail_id = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get approval_person(): number {
    return this._approval_person;
  }

  set approval_person(value: number) {
    this._approval_person = value;
  }

  get approval_comment(): string {
    return this._approval_comment;
  }

  set approval_comment(value: string) {
    this._approval_comment = value;
  }

  get stage_id(): number {
    return this._stage_id;
  }

  set stage_id(value: number) {
    this._stage_id = value;
  }

  get in_hide(): number {
    return this._in_hide;
  }

  set in_hide(value: number) {
    this._in_hide = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get assignee(): AdminUser {
    return this._assignee;
  }

  set assignee(value: AdminUser) {
    this._assignee = value;
  }

  get total_timesheet_unit(): number {
    return this._total_timesheet_unit;
  }

  set total_timesheet_unit(value: number) {
    this._total_timesheet_unit = value;
  }
}
