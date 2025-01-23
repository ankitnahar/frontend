import {Basic} from '../../view-client/update-client/main-client/basic-main/basic.model';
import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';

export class Address {
  private _id: number;
  private _entity_id: Basic;
  private _type: string;
  private _street_address: string;
  private _suburb: string;
  private _state_id: number;
  private _postcode: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _parent_name: string;
  private _parent_id: number;

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

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get street_address(): string {
    return this._street_address;
  }

  set street_address(value: string) {
    this._street_address = value;
  }

  get suburb(): string {
    return this._suburb;
  }

  set suburb(value: string) {
    this._suburb = value;
  }

  get state_id(): number {
    return this._state_id;
  }

  set state_id(value: number) {
    this._state_id = value;
  }

  get postcode(): string {
    return this._postcode;
  }

  set postcode(value: string) {
    this._postcode = value;
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

  get parent_name(): string {
    return this._parent_name;
  }

  set parent_name(value: string) {
    this._parent_name = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }
}
