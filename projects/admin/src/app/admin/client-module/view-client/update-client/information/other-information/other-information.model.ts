import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';

export class OtherInformation {
  private _id: number;
  private _otheraccount_id: number;
  private _entity_id: number;
  private _other_account_id: OtherAccount;
  private _view_access: number;
  private _befree_comment: string;
  private _internal_comment: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _is_active: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get otheraccount_id(): number {
    return this._otheraccount_id;
  }

  set otheraccount_id(value: number) {
    this._otheraccount_id = value;
  }

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get other_account_id(): OtherAccount {
    return this._other_account_id;
  }

  set other_account_id(value: OtherAccount) {
    this._other_account_id = value;
  }

  get view_access(): number {
    return this._view_access;
  }

  set view_access(value: number) {
    this._view_access = value;
  }

  get befree_comment(): string {
    return this._befree_comment;
  }

  set befree_comment(value: string) {
    this._befree_comment = value;
  }

  get internal_comment(): string {
    return this._internal_comment;
  }

  set internal_comment(value: string) {
    this._internal_comment = value;
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

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }
}

export class OtherAccount {
  private _id: number;
  private _account_name: string;
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

  get account_name(): string {
    return this._account_name;
  }

  set account_name(value: string) {
    this._account_name = value;
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
