import {Basic} from '../../../../client-module/view-client/update-client/main-client/basic-main/basic.model';
import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';

export class SubClient {
  private _id: number;
  private _entity_id: Basic;
  private _billing_name: string;
  private _subclient: string;
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

  get entity_id(): Basic {
    return this._entity_id;
  }

  set entity_id(value: Basic) {
    this._entity_id = value;
  }

  get billing_name(): string {
    return this._billing_name;
  }

  set billing_name(value: string) {
    this._billing_name = value;
  }

  get subclient(): string {
    return this._subclient;
  }

  set subclient(value: string) {
    this._subclient = value;
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
