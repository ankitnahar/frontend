export class Clients {
  private _id: number;
  private _code: string;
  private _name: string;
  private _billing_name: string;
  private _trading_name: string;
  private _is_document: number;
  private _discontinue_stage: number;
  private _is_service: number;
  private _module_id: number;
  private _created_by: CreatedBy;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get billing_name(): string {
    return this._billing_name;
  }

  set billing_name(value: string) {
    this._billing_name = value;
  }

  get trading_name(): string {
    return this._trading_name;
  }

  set trading_name(value: string) {
    this._trading_name = value;
  }

  get is_document(): number {
    return this._is_document;
  }

  set is_document(value: number) {
    this._is_document = value;
  }

  get discontinue_stage(): number {
    return this._discontinue_stage;
  }

  set discontinue_stage(value: number) {
    this._discontinue_stage = value;
  }

  get is_service(): number {
    return this._is_service;
  }

  set is_service(value: number) {
    this._is_service = value;
  }

  get module_id(): number {
    return this._module_id;
  }

  set module_id(value: number) {
    this._module_id = value;
  }

  get created_by(): CreatedBy {
    return this._created_by;
  }

  set created_by(value: CreatedBy) {
    this._created_by = value;
  }
}

export class CreatedBy {
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

export class QualityCheck {
  private _responseData;

  get responseData() {
    return this._responseData;
  }

  set responseData(value) {
    this._responseData = value;
  }
}
