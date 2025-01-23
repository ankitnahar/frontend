import {AdminUser} from './admin-user.model';

export class Services {
  private _id: number;
  private _parent_id: number;
  private _service_name: string;
  private _pi_zoho_service: string;
  private _pi_zoho_service_request: string;
  private _inc_in_ff: number;
  private _frequency_id: number;
  private _is_active: number;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_by: AdminUser;
  private _modified_on: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }

  get service_name(): string {
    return this._service_name;
  }

  set service_name(value: string) {
    this._service_name = value;
  }

  get pi_zoho_service(): string {
    return this._pi_zoho_service;
  }

  set pi_zoho_service(value: string) {
    this._pi_zoho_service = value;
  }

  get pi_zoho_service_request(): string {
    return this._pi_zoho_service_request;
  }

  set pi_zoho_service_request(value: string) {
    this._pi_zoho_service_request = value;
  }

  get inc_in_ff(): number {
    return this._inc_in_ff;
  }

  set inc_in_ff(value: number) {
    this._inc_in_ff = value;
  }

  get frequency_id(): number {
    return this._frequency_id;
  }

  set frequency_id(value: number) {
    this._frequency_id = value;
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
