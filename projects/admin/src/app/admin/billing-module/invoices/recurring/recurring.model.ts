import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';

export class Recurring {
  private _id: number;
  private _recurring_name: string;
  private _rec_type: number;
  private _entity_id: string;
  private _service_id: number;
  private _service_name: string;
  private _frequency_name: string;
  private _entity_name: string;
  private _fixed_fee: number;
  private _frequency_id: number;
  private _next_due: string;
  private _last_due: string;
  private _inv_logic: string;
  private _inv_days: number;
  private _inv_weekday: string;
  private _repetition_type: number;
  private _repetition: string;
  private _is_active: number;
  private _invoice_date: string;
  private _repetition_count: number;
  private _times: number;
  private _repeat_date: string;
  private _repeat_indefinitely: string;
  private _notes: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get recurring_name(): string {
    return this._recurring_name;
  }

  set recurring_name(value: string) {
    this._recurring_name = value;
  }

  get rec_type(): number {
    return this._rec_type;
  }

  set rec_type(value: number) {
    this._rec_type = value;
  }

  get entity_id(): string {
    return this._entity_id;
  }

  set entity_id(value: string) {
    this._entity_id = value;
  }

  get service_id(): number {
    return this._service_id;
  }

  set service_id(value: number) {
    this._service_id = value;
  }

  get service_name(): string {
    return this._service_name;
  }

  set service_name(value: string) {
    this._service_name = value;
  }

  get frequency_name(): string {
    return this._frequency_name;
  }

  set frequency_name(value: string) {
    this._frequency_name = value;
  }

  get entity_name(): string {
    return this._entity_name;
  }

  set entity_name(value: string) {
    this._entity_name = value;
  }

  get fixed_fee(): number {
    return this._fixed_fee;
  }

  set fixed_fee(value: number) {
    this._fixed_fee = value;
  }

  get frequency_id(): number {
    return this._frequency_id;
  }

  set frequency_id(value: number) {
    this._frequency_id = value;
  }

  get next_due(): string {
    return this._next_due;
  }

  set next_due(value: string) {
    this._next_due = value;
  }

  get last_due(): string {
    return this._last_due;
  }

  set last_due(value: string) {
    this._last_due = value;
  }

  get inv_logic(): string {
    return this._inv_logic;
  }

  set inv_logic(value: string) {
    this._inv_logic = value;
  }

  get inv_days(): number {
    return this._inv_days;
  }

  set inv_days(value: number) {
    this._inv_days = value;
  }

  get inv_weekday(): string {
    return this._inv_weekday;
  }

  set inv_weekday(value: string) {
    this._inv_weekday = value;
  }

  get repetition_type(): number {
    return this._repetition_type;
  }

  set repetition_type(value: number) {
    this._repetition_type = value;
  }

  get repetition(): string {
    return this._repetition;
  }

  set repetition(value: string) {
    this._repetition = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get invoice_date(): string {
    return this._invoice_date;
  }

  set invoice_date(value: string) {
    this._invoice_date = value;
  }

  get times(): number {
    return this._times;
  }

  set times(value: number) {
    this._times = value;
  }

  get repeat_date(): string {
    return this._repeat_date;
  }

  set repeat_date(value: string) {
    this._repeat_date = value;
  }

  get repetition_count(): number {
    return this._repetition_count;
  }

  set repetition_count(value: number) {
    this._repetition_count = value;
  }

  get repeat_indefinitely(): string {
    return this._repeat_indefinitely;
  }

  set repeat_indefinitely(value: string) {
    this._repeat_indefinitely = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
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
