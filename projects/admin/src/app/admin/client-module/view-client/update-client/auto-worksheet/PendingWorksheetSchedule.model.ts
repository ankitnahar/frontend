export class PendingWorksheetScheduleItem {
  private _master_name: string;
  private _task_name: string;
  private _id: number;
  private _master_activity_id: number;
  private _entity_id: number;
  private _task_id: number;
  private _start_date: string;
  private _end_date: string;
  private _frequency_id: number;
  private _expert_day: string;
  private _expert_month: string;
  private _due_after_day: string;
  private _due_month_day: string;
  private _due_on_particular_date: string;
  private _notes: string;
  private _created_by: string;
  private _created_on: string;
  private _is_display_schedule: string;


  get master_name(): string {
    return this._master_name;
  }

  set master_name(value: string) {
    this._master_name = value;
  }

  get task_name(): string {
    return this._task_name;
  }

  set task_name(value: string) {
    this._task_name = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get master_activity_id(): number {
    return this._master_activity_id;
  }

  set master_activity_id(value: number) {
    this._master_activity_id = value;
  }

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get task_id(): number {
    return this._task_id;
  }

  set task_id(value: number) {
    this._task_id = value;
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

  get frequency_id(): number {
    return this._frequency_id;
  }

  set frequency_id(value: number) {
    this._frequency_id = value;
  }

  get expert_day(): string {
    return this._expert_day;
  }

  set expert_day(value: string) {
    this._expert_day = value;
  }

  get expert_month(): string {
    return this._expert_month;
  }

  set expert_month(value: string) {
    this._expert_month = value;
  }

  get due_after_day(): string {
    return this._due_after_day;
  }

  set due_after_day(value: string) {
    this._due_after_day = value;
  }

  get due_month_day(): string {
    return this._due_month_day;
  }

  set due_month_day(value: string) {
    this._due_month_day = value;
  }

  get due_on_particular_date(): string {
    return this._due_on_particular_date;
  }

  set due_on_particular_date(value: string) {
    this._due_on_particular_date = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  get created_by(): string {
    return this._created_by;
  }

  set created_by(value: string) {
    this._created_by = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get is_display_schedule(): string {
    return this._is_display_schedule;
  }

  set is_display_schedule(value: string) {
    this._is_display_schedule = value;
  }
}
