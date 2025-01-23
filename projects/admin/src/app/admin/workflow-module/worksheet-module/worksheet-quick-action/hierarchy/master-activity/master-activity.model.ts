import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';
import {Services} from '../../../../../../../utility/shared-model/services.model';

export class MasterActivity {

  private _id: number;
  private _code: number;
  private _name: string;
  private _service_id: Services;
  private _inv_account_id: number;
  private _inschedule: number;
  private _inquotereq: number;
  private _user_team_id: string;
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

  get code(): number {
    return this._code;
  }

  set code(value: number) {
    this._code = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get service_id(): Services {
    return this._service_id;
  }

  set service_id(value: Services) {
    this._service_id = value;
  }

  get inv_account_id(): number {
    return this._inv_account_id;
  }

  set inv_account_id(value: number) {
    this._inv_account_id = value;
  }

  get inschedule(): number {
    return this._inschedule;
  }

  set inschedule(value: number) {
    this._inschedule = value;
  }

  get inquotereq(): number {
    return this._inquotereq;
  }

  set inquotereq(value: number) {
    this._inquotereq = value;
  }

  get user_team_id(): string {
    return this._user_team_id;
  }

  set user_team_id(value: string) {
    this._user_team_id = value;
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
