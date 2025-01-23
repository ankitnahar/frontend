import {AdminUser} from '../../../../utility/shared-model/admin-user.model';
import {FIELDPRIVILEGES} from '../manage-users/update-user/privileges/privileges.model';

export class DynamicField {
  private _id: number;
  private _fieldgroup: string;
  private _field_title: string;
  private _field_type: string;
  private _field_value: string;
  private _field_parent_condition: string;
  private _description: string;
  private _is_mandatory: number;
  private _is_active: number;
  private _group_id: FIELDPRIVILEGES;
  private _modified_by: AdminUser;
  private _modified_on: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get fieldgroup(): string {
    return this._fieldgroup;
  }

  set fieldgroup(value: string) {
    this._fieldgroup = value;
  }

  get field_title(): string {
    return this._field_title;
  }

  set field_title(value: string) {
    this._field_title = value;
  }

  get field_type(): string {
    return this._field_type;
  }

  set field_type(value: string) {
    this._field_type = value;
  }

  get field_value(): string {
    return this._field_value;
  }

  set field_value(value: string) {
    this._field_value = value;
  }

  get field_parent_condition(): string {
    return this._field_parent_condition;
  }

  set field_parent_condition(value: string) {
    this._field_parent_condition = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get is_mandatory(): number {
    return this._is_mandatory;
  }

  set is_mandatory(value: number) {
    this._is_mandatory = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get group_id(): FIELDPRIVILEGES {
    return this._group_id;
  }

  set group_id(value: FIELDPRIVILEGES) {
    this._group_id = value;
  }

  get modified_by(): AdminUser {
    return this._modified_by;
  }

  set modified_by(value: AdminUser) {
    this._modified_by = value;
  }

  get modified_on(): string {
    return this._modified_on;
  }

  set modified_on(value: string) {
    this._modified_on = value;
  }
}
