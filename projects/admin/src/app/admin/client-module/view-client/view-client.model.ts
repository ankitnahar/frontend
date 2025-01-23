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
  private _ap_notes: string;
  private _ar_notes: string;
  private _bk_notes: string;
  private _bk_review_notes: string;
  private _dm_notes: string;
  private _payroll_notes: string;
  private _software_notes: string;
  private _version_notes: string;
  private _tax_notes: string;
  private _xero_email_id: string;
  private _myob_email_id: string;
  private _is_parent: number;
  private _parent_entity: Clients;
  private _is_dashboard: number;
  private _billing_from: number;

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

  get ap_notes(): string {
    return this._ap_notes;
  }

  set ap_notes(value: string) {
    this._ap_notes = value;
  }

  get ar_notes(): string {
    return this._ar_notes;
  }

  set ar_notes(value: string) {
    this._ar_notes = value;
  }

  get bk_notes(): string {
    return this._bk_notes;
  }

  set bk_notes(value: string) {
    this._bk_notes = value;
  }

  get bk_review_notes(): string {
    return this._bk_review_notes;
  }

  set bk_review_notes(value: string) {
    this._bk_review_notes = value;
  }

  get dm_notes(): string {
    return this._dm_notes;
  }

  set dm_notes(value: string) {
    this._dm_notes = value;
  }

  get payroll_notes(): string {
    return this._payroll_notes;
  }

  set payroll_notes(value: string) {
    this._payroll_notes = value;
  }

  get software_notes(): string {
    return this._software_notes;
  }

  set software_notes(value: string) {
    this._software_notes = value;
  }

  get version_notes(): string {
    return this._version_notes;
  }

  set version_notes(value: string) {
    this._version_notes = value;
  }

  get tax_notes(): string {
    return this._tax_notes;
  }

  set tax_notes(value: string) {
    this._tax_notes = value;
  }

  get xero_email_id(): string {
    return this._xero_email_id;
  }

  set xero_email_id(value: string) {
    this._xero_email_id = value;
  }

  get myob_email_id(): string {
    return this._myob_email_id;
  }

  set myob_email_id(value: string) {
    this._myob_email_id = value;
  }

  get is_parent(): number {
    return this._is_parent;
  }

  set is_parent(value: number) {
    this._is_parent = value;
  }

  get parent_entity(): Clients {
    return this._parent_entity;
  }

  set parent_entity(value: Clients) {
    this._parent_entity = value;
  }

  get is_dashboard(): number {
    return this._is_dashboard;
  }

  set is_dashboard(value: number) {
    this._is_dashboard = value;
  }

  get billing_from(): number {
    return this._billing_from;
  }

  set billing_from(value: number) {
    this._billing_from = value;
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
