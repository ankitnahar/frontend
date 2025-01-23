import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';

export class SubscriptionData {
  private _recurring_id: number;
  private _auto_invoice: number;
  private _frequency_id: number;
  private _software_id: number;
  private _plan_id: number;
  private _discount: string;
  private _standard_fee: string;
  private _fixed_fee: string;
  private _notes: string;
  private _ff_start_date: string;

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

  get software_id(): number {
    return this._software_id;
  }

  set software_id(value: number) {
    this._software_id = value;
  }

  get plan_id(): number {
    return this._plan_id;
  }

  set plan_id(value: number) {
    this._plan_id = value;
  }

  get discount(): string {
    return this._discount;
  }

  set discount(value: string) {
    this._discount = value;
  }

  get standard_fee(): string {
    return this._standard_fee;
  }

  set standard_fee(value: string) {
    this._standard_fee = value;
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

  get ff_start_date(): string {
    return this._ff_start_date;
  }

  set ff_start_date(value: string) {
    this._ff_start_date = value;
  }
}

export class PlanType {
  private _id: number;
  private _parent_id: PlanMaster;
  private _software_plan: string;
  private _amount: string;
  private _invoice_account: number;
  private _is_active: number;
  private _created_by: AdminUser;
  private _created_on: string;
  private _modified_by: AdminUser;
  private _modified_on: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get parent_id(): PlanMaster {
    return this._parent_id;
  }

  set parent_id(value: PlanMaster) {
    this._parent_id = value;
  }

  get software_plan(): string {
    return this._software_plan;
  }

  set software_plan(value: string) {
    this._software_plan = value;
  }

  get amount(): string {
    return this._amount;
  }

  set amount(value: string) {
    this._amount = value;
  }

  get invoice_account(): number {
    return this._invoice_account;
  }

  set invoice_account(value: number) {
    this._invoice_account = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
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

export class PlanMaster {

  private _id: number;
  private _software_plan: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get software_plan(): string {
    return this._software_plan;
  }

  set software_plan(value: string) {
    this._software_plan = value;
  }
}

export class SoftwareMaster {
  private _id: number;
  private _parent_id: number;
  private _software_plan: string;
  private _amount: string;
  private _invoice_account: number;
  private _is_active: number;
  private _created_by: AdminUser;
  private _created_on: string;
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

  get software_plan(): string {
    return this._software_plan;
  }

  set software_plan(value: string) {
    this._software_plan = value;
  }

  get amount(): string {
    return this._amount;
  }

  set amount(value: string) {
    this._amount = value;
  }

  get invoice_account(): number {
    return this._invoice_account;
  }

  set invoice_account(value: number) {
    this._invoice_account = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
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
