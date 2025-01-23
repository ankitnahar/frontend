import {AdminUser} from '../../../../utility/shared-model/admin-user.model';

export class ManageEmails {
  private _id: number;
  private _code: string;
  private _subject: string;
  private _content: string;
  private _to: string;
  private _cc: string;
  private _bcc: string;
  private _is_active: number;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: number;

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

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get to(): string {
    return this._to;
  }

  set to(value: string) {
    this._to = value;
  }

  get cc(): string {
    return this._cc;
  }

  set cc(value: string) {
    this._cc = value;
  }

  get bcc(): string {
    return this._bcc;
  }

  set bcc(value: string) {
    this._bcc = value;
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

  get modified_by(): number {
    return this._modified_by;
  }

  set modified_by(value: number) {
    this._modified_by = value;
  }
}
