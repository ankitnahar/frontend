import {AdminUser} from '../../../../utility/shared-model/admin-user.model';
import {Basic} from '../view-client/update-client/main-client/basic-main/basic.model';

export class Software {
  private _id: number;
  private _entity_id: Basic;
  private _software_id: SoftwareId;
  private _username: string;
  private _password: string;
  private _link: string;
  private _notes: string;
  private _created_on: string;
  private _created_by: AdminUser;

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

  get software_id(): SoftwareId {
    return this._software_id;
  }

  set software_id(value: SoftwareId) {
    this._software_id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
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
}

export class SoftwareId {
  private _name: string;
  private _id: number;


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
