import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';

export class HostingData {
  private _recurring_id: number;
  private _auto_invoice: number;
  private _is_setup_cost: number;
  private _setup_cost: string;
  private _basic_rate: string;
  private _permium_rate: string;
  private _notes: string;
  private _is_updated: number;

  get is_updated(): number {
    return this._is_updated;
  }

  set is_updated(value: number) {
    this._is_updated = value;
  }

  get recurring_id(): number {
    return this._recurring_id;
  }

  set recurring_id(value: number) {
    this._recurring_id = value;
  }

  get auto_invoice(): number {
    return this._auto_invoice;
  }

  set auto_invoice(value: number) {
    this._auto_invoice = value;
  }

  get is_setup_cost(): number {
    return this._is_setup_cost;
  }

  set is_setup_cost(value: number) {
    this._is_setup_cost = value;
  }

  get setup_cost(): string {
    return this._setup_cost;
  }

  set setup_cost(value: string) {
    this._setup_cost = value;
  }

  get basic_rate(): string {
    return this._basic_rate;
  }

  set basic_rate(value: string) {
    this._basic_rate = value;
  }

  get permium_rate(): string {
    return this._permium_rate;
  }

  set permium_rate(value: string) {
    this._permium_rate = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }
}

export class HostingUser {

  private _id: number;
  private _entity_id: number;
  private _username: string;
  private _rate: string;
  private _plan_type: string;
  private _is_active: number;
  private _activedate: string;
  private _inactivedate: string;
  private _notes: string;
  private _enddate: string;
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

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get rate(): string {
    return this._rate;
  }

  set rate(value: string) {
    this._rate = value;
  }

  get plan_type(): string {
    return this._plan_type;
  }

  set plan_type(value: string) {
    this._plan_type = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get activedate(): string {
    return this._activedate;
  }

  set activedate(value: string) {
    this._activedate = value;
  }

  get inactivedate(): string {
    return this._inactivedate;
  }

  set inactivedate(value: string) {
    this._inactivedate = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  get enddate(): string {
    return this._enddate;
  }

  set enddate(value: string) {
    this._enddate = value;
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
