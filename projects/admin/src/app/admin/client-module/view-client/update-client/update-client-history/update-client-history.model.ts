export class HistoryRecords {
  private _id: number;
  private _entity_id: number;
  private _changes: string;
  private _modified_by: ModifiedBy;
  private _modified_on: string;
  private _changesList: any[];
  private _format: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get changes(): string {
    return this._changes;
  }

  set changes(value: string) {
    this._changes = value;
  }

  get modified_by(): ModifiedBy {
    return this._modified_by;
  }

  set modified_by(value: ModifiedBy) {
    this._modified_by = value;
  }

  get modified_on(): string {
    return this._modified_on;
  }

  set modified_on(value: string) {
    this._modified_on = value;
  }

  get changesList(): any[] {
    return this._changesList;
  }

  set changesList(value: any[]) {
    this._changesList = value;
  }

  get format(): number {
    return this._format;
  }

  set format(value: number) {
    this._format = value;
  }
}

export class ModifiedBy {
  private _id: number;
  private _userfullname: string;
  private _email: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get userfullname(): string {
    return this._userfullname;
  }

  set userfullname(value: string) {
    this._userfullname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}

export class ChangesDetail {
  private _checklist: string;
  private _account_no: string;
  private _before: string;
  private _now: string;
  private _display_name: string;
  private _new_value: string;
  private _old_value: string;


  get account_no(): string {
    return this._account_no;
  }

  set account_no(value: string) {
    this._account_no = value;
  }

  get checklist(): string {
    return this._checklist;
  }

  set checklist(value: string) {
    this._checklist = value;
  }

  get before(): string {
    return this._before;
  }

  set before(value: string) {
    this._before = value;
  }

  get now(): string {
    return this._now;
  }

  set now(value: string) {
    this._now = value;
  }

  get display_name(): string {
    return this._display_name;
  }

  set display_name(value: string) {
    this._display_name = value;
  }

  get new_value(): string {
    return this._new_value;
  }

  set new_value(value: string) {
    this._new_value = value;
  }

  get old_value(): string {
    return this._old_value;
  }

  set old_value(value: string) {
    this._old_value = value;
  }
}
