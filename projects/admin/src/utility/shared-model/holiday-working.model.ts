import {AdminUser} from "./admin-user.model";

export class HolidayWorking {
  private _id: number;
  private _user_id: number;
  private _date: string;
  private _location_id: string;
  private _start_time: string;
  private _end_time: number;
  private _entity_id: number;
  private _status_id: number;
  private _notes: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _first_approval: AdminUser;
  private _second_approval: AdminUser;
  private _first_approval_on: string;
  private _second_approval_on: string;
  private _first_approval_comment: string;
  private _second_approval_comment: string;
  private _trading_name: string;
  private _location_name: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get location_id(): string {
    return this._location_id;
  }

  set location_id(value: string) {
    this._location_id = value;
  }

  get start_time(): string {
    return this._start_time;
  }

  set start_time(value: string) {
    this._start_time = value;
  }

  get end_time(): number {
    return this._end_time;
  }

  set end_time(value: number) {
    this._end_time = value;
  }

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get status_id(): number {
    return this._status_id;
  }

  set status_id(value: number) {
    this._status_id = value;
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

  get first_approval_on(): string {
    return this._first_approval_on;
  }

  set first_approval_on(value: string) {
    this._first_approval_on = value;
  }

  get second_approval_on(): string {
    return this._second_approval_on;
  }

  set second_approval_on(value: string) {
    this._second_approval_on = value;
  }

  get first_approval_comment(): string {
    return this._first_approval_comment;
  }

  set first_approval_comment(value: string) {
    this._first_approval_comment = value;
  }

  get second_approval_comment(): string {
    return this._second_approval_comment;
  }

  set second_approval_comment(value: string) {
    this._second_approval_comment = value;
  }

  get trading_name(): string {
    return this._trading_name;
  }

  set trading_name(value: string) {
    this._trading_name = value;
  }

  get location_name(): string {
    return this._location_name;
  }

  set location_name(value: string) {
    this._location_name = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }
}
