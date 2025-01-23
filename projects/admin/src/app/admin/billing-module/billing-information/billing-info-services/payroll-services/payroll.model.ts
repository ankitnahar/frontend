import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';

export class PayrollData {
  private _recurring_id: number;
  private _auto_invoice: number;
  private _frequency_id: number;
  private _payroll_frequency_id: number;
  private _inc_in_ff: number;
  private _calc_id: number;
  private _ff_rph: string;
  private _fixed_fee: string;
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

  get frequency_id(): number {
    return this._frequency_id;
  }

  set frequency_id(value: number) {
    this._frequency_id = value;
  }

  get payroll_frequency_id(): number {
    return this._payroll_frequency_id;
  }

  set payroll_frequency_id(value: number) {
    this._payroll_frequency_id = value;
  }

  get inc_in_ff(): number {
    return this._inc_in_ff;
  }

  set inc_in_ff(value: number) {
    this._inc_in_ff = value;
  }

  get calc_id(): number {
    return this._calc_id;
  }

  set calc_id(value: number) {
    this._calc_id = value;
  }

  get ff_rph(): string {
    return this._ff_rph;
  }

  set ff_rph(value: string) {
    this._ff_rph = value;
  }

  get fixed_fee(): string {
    return this._fixed_fee;
  }

  set fixed_fee(value: string) {
    this._fixed_fee = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }
}

export class PayrollCalc {
  private _id: number;
  private _name: string;
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

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
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
