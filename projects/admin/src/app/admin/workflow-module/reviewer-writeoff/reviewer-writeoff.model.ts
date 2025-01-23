import {AdminUser} from '../../../../utility/shared-model/admin-user.model';
import {BillingBasic} from '../../../../utility/shared-model/billing.model';

export class ReviewerWriteoff {
  private _id: number;
  private _entity_id: BillingBasic;
  private _worksheet_id: WorksheetReviewerWriteOff;
  private _timesheet_unit: number;
  private _budgeted_unit: number;
  private _reviewer_id: AdminUser;
  private _reviewer_reason: string;
  private _reviewer_comment: string;
  private _is_reviewer_done: number;
  private _reviewer_reason_date: string;
  private _technical_head_id: AdminUser;
  private _technical_head_comment: string;
  private _technical_head_approve_date: string;
  private _is_active: number;
  private _created_on: string;
  private _parent_name: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get entity_id(): BillingBasic {
    return this._entity_id;
  }

  set entity_id(value: BillingBasic) {
    this._entity_id = value;
  }

  get worksheet_id(): WorksheetReviewerWriteOff {
    return this._worksheet_id;
  }

  set worksheet_id(value: WorksheetReviewerWriteOff) {
    this._worksheet_id = value;
  }

  get timesheet_unit(): number {
    return this._timesheet_unit;
  }

  set timesheet_unit(value: number) {
    this._timesheet_unit = value;
  }

  get budgeted_unit(): number {
    return this._budgeted_unit;
  }

  set budgeted_unit(value: number) {
    this._budgeted_unit = value;
  }

  get reviewer_id(): AdminUser {
    return this._reviewer_id;
  }

  set reviewer_id(value: AdminUser) {
    this._reviewer_id = value;
  }

  get reviewer_reason(): string {
    return this._reviewer_reason;
  }

  set reviewer_reason(value: string) {
    this._reviewer_reason = value;
  }

  get reviewer_comment(): string {
    return this._reviewer_comment;
  }

  set reviewer_comment(value: string) {
    this._reviewer_comment = value;
  }

  get is_reviewer_done(): number {
    return this._is_reviewer_done;
  }

  set is_reviewer_done(value: number) {
    this._is_reviewer_done = value;
  }

  get reviewer_reason_date(): string {
    return this._reviewer_reason_date;
  }

  set reviewer_reason_date(value: string) {
    this._reviewer_reason_date = value;
  }

  get technical_head_id(): AdminUser {
    return this._technical_head_id;
  }

  set technical_head_id(value: AdminUser) {
    this._technical_head_id = value;
  }

  get technical_head_comment(): string {
    return this._technical_head_comment;
  }

  set technical_head_comment(value: string) {
    this._technical_head_comment = value;
  }

  get technical_head_approve_date(): string {
    return this._technical_head_approve_date;
  }

  set technical_head_approve_date(value: string) {
    this._technical_head_approve_date = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get parent_name(): string {
    return this._parent_name;
  }

  set parent_name(value: string) {
    this._parent_name = value;
  }
}

export class WorksheetReviewerWriteOff {
  private _id: number;
  private _start_date: string;
  private _end_date: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
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
}

export class LastSixWorksheet {
  private _start_date: string;
  private _end_date: string;
  private _budgeted_unit: number;
  private _units: number;
  private _created_on: string;

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

  get budgeted_unit(): number {
    return this._budgeted_unit;
  }

  set budgeted_unit(value: number) {
    this._budgeted_unit = value;
  }

  get units(): number {
    return this._units;
  }

  set units(value: number) {
    this._units = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }
}
