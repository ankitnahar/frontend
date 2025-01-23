import {AdminUser} from "./admin-user.model";

export class BankChange {
  private _id: number;
  private _entity_id: number;
  private _trading_name: string;
  private _parent_name: string;
  private _bank_type: string;
  private _type_name: number;
  private _status_id: number;
  private _approved_by_client: number;
  private _old_bank_bsb: string;
  private _new_bank_bsb: string;
  private _old_bank_name: string;
  private _new_bank_name: string;
  private _first_approval: AdminUser;
  private _second_approval: string;
  private _reason: string;
  private _comment: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _approved_on: string;
  private _approved_by: AdminUser;
  private _document: BankDocument[];

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

  get trading_name(): string {
    return this._trading_name;
  }

  set trading_name(value: string) {
    this._trading_name = value;
  }

  get parent_name(): string {
    return this._parent_name;
  }

  set parent_name(value: string) {
    this._parent_name = value;
  }

  get bank_type(): string {
    return this._bank_type;
  }

  set bank_type(value: string) {
    this._bank_type = value;
  }

  get type_name(): number {
    return this._type_name;
  }

  set type_name(value: number) {
    this._type_name = value;
  }

  get status_id(): number {
    return this._status_id;
  }

  set status_id(value: number) {
    this._status_id = value;
  }

  get approved_by_client(): number {
    return this._approved_by_client;
  }

  set approved_by_client(value: number) {
    this._approved_by_client = value;
  }

  get old_bank_bsb(): string {
    return this._old_bank_bsb;
  }

  set old_bank_bsb(value: string) {
    this._old_bank_bsb = value;
  }

  get new_bank_bsb(): string {
    return this._new_bank_bsb;
  }

  set new_bank_bsb(value: string) {
    this._new_bank_bsb = value;
  }

  get old_bank_name(): string {
    return this._old_bank_name;
  }

  set old_bank_name(value: string) {
    this._old_bank_name = value;
  }

  get new_bank_name(): string {
    return this._new_bank_name;
  }

  set new_bank_name(value: string) {
    this._new_bank_name = value;
  }

  get first_approval(): AdminUser {
    return this._first_approval;
  }

  set first_approval(value: AdminUser) {
    this._first_approval = value;
  }

  get second_approval(): string {
    return this._second_approval;
  }

  set second_approval(value: string) {
    this._second_approval = value;
  }

  get reason(): string {
    return this._reason;
  }

  set reason(value: string) {
    this._reason = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
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

  get approved_on(): string {
    return this._approved_on;
  }

  set approved_on(value: string) {
    this._approved_on = value;
  }

  get approved_by(): AdminUser {
    return this._approved_by;
  }

  set approved_by(value: AdminUser) {
    this._approved_by = value;
  }

  get document(): BankDocument[] {
    return this._document;
  }

  set document(value: BankDocument[]) {
    this._document = value;
  }
}

export class BankDocument {

  private _id: number;
  private _bank_change_id: string;
  private _document_name: string;
  private _document_title: string;
  private _document_path: string;
  private _created_on: string;
  private _created_by: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get bank_change_id(): string {
    return this._bank_change_id;
  }

  set bank_change_id(value: string) {
    this._bank_change_id = value;
  }

  get document_name(): string {
    return this._document_name;
  }

  set document_name(value: string) {
    this._document_name = value;
  }

  get document_title(): string {
    return this._document_title;
  }

  set document_title(value: string) {
    this._document_title = value;
  }

  get document_path(): string {
    return this._document_path;
  }

  set document_path(value: string) {
    this._document_path = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get created_by(): number {
    return this._created_by;
  }

  set created_by(value: number) {
    this._created_by = value;
  }
}
