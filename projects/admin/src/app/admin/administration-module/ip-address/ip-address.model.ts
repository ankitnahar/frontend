import {AdminUser} from '../../../../utility/shared-model/admin-user.model';

export class IPAddress {
  private _id: number;
  private _from_ip: string;
  private _to_ip: string;
  private _access_by: string;
  private _belongs_to: string;
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


  get from_ip(): string {
    return this._from_ip;
  }

  set from_ip(value: string) {
    this._from_ip = value;
  }

  get to_ip(): string {
    return this._to_ip;
  }

  set to_ip(value: string) {
    this._to_ip = value;
  }

  get access_by(): string {
    return this._access_by;
  }

  set access_by(value: string) {
    this._access_by = value;
  }

  get belongs_to(): string {
    return this._belongs_to;
  }

  set belongs_to(value: string) {
    this._belongs_to = value;
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
