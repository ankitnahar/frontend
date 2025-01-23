import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';

export class DiscontinueEntityQuestion {
  private _id: number;
  private _parent_id: number;
  private _name: string;
  private _is_checked: number;
  private _notes: number;
  private _draft: number;
  private _created_by: AdminUser;
  private _created_on: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get is_checked(): number {
    return this._is_checked;
  }

  set is_checked(value: number) {
    this._is_checked = value;
  }

  get notes(): number {
    return this._notes;
  }

  set notes(value: number) {
    this._notes = value;
  }

  get draft(): number {
    return this._draft;
  }

  set draft(value: number) {
    this._draft = value;
  }

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }
}
