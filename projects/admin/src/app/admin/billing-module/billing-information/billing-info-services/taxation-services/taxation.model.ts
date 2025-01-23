import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';

export class TaxationService {
  private _ff_rph: string;
  private _notes: string;

  get ff_rph(): string {
    return this._ff_rph;
  }

  set ff_rph(value: string) {
    this._ff_rph = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }
}

export class TaxationTurnover {
  private _id: number;
  private _entity_id: number;
  private _tax_year: string;
  private _tax_amount: string;
  private _tax_condition: string;
  private _turnover: string;
  private _notes: string;
  private _created_on: number;
  private _created_by: AdminUser;
  private _is_deleted: number;
  private _deleted_on: string;
  private _deleted_by: AdminUser;

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

  get tax_year(): string {
    return this._tax_year;
  }

  set tax_year(value: string) {
    this._tax_year = value;
  }

  get tax_amount(): string {
    return this._tax_amount;
  }

  set tax_amount(value: string) {
    this._tax_amount = value;
  }

  get tax_condition(): string {
    return this._tax_condition;
  }

  set tax_condition(value: string) {
    this._tax_condition = value;
  }

  get turnover(): string {
    return this._turnover;
  }

  set turnover(value: string) {
    this._turnover = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  get created_on(): number {
    return this._created_on;
  }

  set created_on(value: number) {
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

  get deleted_by(): AdminUser {
    return this._deleted_by;
  }

  set deleted_by(value: AdminUser) {
    this._deleted_by = value;
  }
}
