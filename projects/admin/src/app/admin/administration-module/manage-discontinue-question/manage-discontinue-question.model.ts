import {AdminUser} from '../../../../utility/shared-model/admin-user.model';

export class ManageDiscontinueQuestion {
  private _id: number;
  private _parent_id: ManageDiscontinueQuestion;
  private _name: string;
  private _who_fillup: number;
  private _type: number;
  private _is_active: number;
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

  get parent_id(): ManageDiscontinueQuestion {
    return this._parent_id;
  }

  set parent_id(value: ManageDiscontinueQuestion) {
    this._parent_id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get who_fillup(): number {
    return this._who_fillup;
  }

  set who_fillup(value: number) {
    this._who_fillup = value;
  }

  get type(): number {
    return this._type;
  }

  set type(value: number) {
    this._type = value;
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

  get modified_by(): AdminUser {
    return this._modified_by;
  }

  set modified_by(value: AdminUser) {
    this._modified_by = value;
  }
}
