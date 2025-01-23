import {Services} from '../../../../utility/shared-model/services.model';
import {AdminUser} from '../../../../utility/shared-model/admin-user.model';

export class ReasonManagement {
  private _id: number;
  private _service_id: Services;
  private _category_id: number;
  private _designation_id: string;
  private _designation: string;
  private _reason: string;
  private _sortorder: number;
  private _is_active: number;
  private _is_deleted: number;
  private _created_by: AdminUser;
  private _created_on: string;
  private _modified_on: string;
  private _modified_by: AdminUser;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get service_id(): Services {
    return this._service_id;
  }

  set service_id(value: Services) {
    this._service_id = value;
  }

  get category_id(): number {
    return this._category_id;
  }

  set category_id(value: number) {
    this._category_id = value;
  }

  get designation_id(): string {
    return this._designation_id;
  }

  set designation_id(value: string) {
    this._designation_id = value;
  }

  get designation(): string {
    return this._designation;
  }

  set designation(value: string) {
    this._designation = value;
  }

  get reason(): string {
    return this._reason;
  }

  set reason(value: string) {
    this._reason = value;
  }

  get sortorder(): number {
    return this._sortorder;
  }

  set sortorder(value: number) {
    this._sortorder = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get is_deleted(): number {
    return this._is_deleted;
  }

  set is_deleted(value: number) {
    this._is_deleted = value;
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
