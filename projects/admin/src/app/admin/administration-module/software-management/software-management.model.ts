import {AdminUser} from '../../../../utility/shared-model/admin-user.model';

export class SoftwareManagement {
  private _frequency_name: string;
  private _software_name: string;
  private _budgeted_unit: number;
  private _id: number;
  private _frequency_id: number;
  private _transaction: number;
  private _is_active: number;
  private _created_on: string;
  private _created_by: AdminUser;
  private _is_deleted: number;
  private _deleted_on: string;
  private _deleted_by: number;

  get frequency_name(): string {
    return this._frequency_name;
  }

  set frequency_name(value: string) {
    this._frequency_name = value;
  }

  get software_name(): string {
    return this._software_name;
  }

  set software_name(value: string) {
    this._software_name = value;
  }

  get budgeted_unit(): number {
    return this._budgeted_unit;
  }

  set budgeted_unit(value: number) {
    this._budgeted_unit = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get frequency_id(): number {
    return this._frequency_id;
  }

  set frequency_id(value: number) {
    this._frequency_id = value;
  }

  get transaction(): number {
    return this._transaction;
  }

  set transaction(value: number) {
    this._transaction = value;
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

  get is_deleted(): number {
    return this._is_deleted;
  }

  set is_deleted(value: number) {
    this._is_deleted = value;
  }

  get deleted_on(): string {
    return this._deleted_on;
  }

  set deleted_on(value: string) {
    this._deleted_on = value;
  }

  get deleted_by(): number {
    return this._deleted_by;
  }

  set deleted_by(value: number) {
    this._deleted_by = value;
  }
}
