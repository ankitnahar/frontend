import {AdminUser} from '../../../../utility/shared-model/admin-user.model';

export class UnchargeUnit {
  private _id: number;
  private _code: string;
  private _billing_name: string;
  private _entity_name: string;
  private _trading_name: number;
  private _discontinue_stage: number;
  private _inc_in_ff: number;
  private _bk: string;
  private _tax: string;
  private _payroll: string;
  private _total: string;
  private _tam: string;
  private _parent_id: number;
  private _parent_name: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get billing_name(): string {
    return this._billing_name;
  }

  set billing_name(value: string) {
    this._billing_name = value;
  }

  get entity_name(): string {
    return this._entity_name;
  }

  set entity_name(value: string) {
    this._entity_name = value;
  }

  get trading_name(): number {
    return this._trading_name;
  }

  set trading_name(value: number) {
    this._trading_name = value;
  }

  get discontinue_stage(): number {
    return this._discontinue_stage;
  }

  set discontinue_stage(value: number) {
    this._discontinue_stage = value;
  }

  get inc_in_ff(): number {
    return this._inc_in_ff;
  }

  set inc_in_ff(value: number) {
    this._inc_in_ff = value;
  }

  get bk(): string {
    return this._bk;
  }

  set bk(value: string) {
    this._bk = value;
  }

  get tax(): string {
    return this._tax;
  }

  set tax(value: string) {
    this._tax = value;
  }

  get payroll(): string {
    return this._payroll;
  }

  set payroll(value: string) {
    this._payroll = value;
  }

  get total(): string {
    return this._total;
  }

  set total(value: string) {
    this._total = value;
  }

  get tam(): string {
    return this._tam;
  }

  set tam(value: string) {
    this._tam = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }

  get parent_name(): string {
    return this._parent_name;
  }

  set parent_name(value: string) {
    this._parent_name = value;
  }
}

export class UnchargeUnitTimeSheet {
  private _user_id: number;
  private _code: string;
  private _name: string;
  private _billing_name: string;
  private _entity_name: string;
  private _trading_name: number;
  private _discontinue_stage: number;
  private _start_date: string;
  private _end_date: string;
  private _master_name: string;
  private _task_name: string;
  private _subactivity_full_name: string;
  private _date: string;
  private _units: number;
  private _notes: string;
  private _billing_status: number;
  private _period_startdate: string;
  private _no_of_value: number;
  private _extra_value: number;
  private _bank_cc_name: string;
  private _bank_cc_account_no: string;
  private _frequency_name: string;
  private _assignee: AdminUser;


  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get billing_name(): string {
    return this._billing_name;
  }

  set billing_name(value: string) {
    this._billing_name = value;
  }

  get entity_name(): string {
    return this._entity_name;
  }

  set entity_name(value: string) {
    this._entity_name = value;
  }

  get trading_name(): number {
    return this._trading_name;
  }

  set trading_name(value: number) {
    this._trading_name = value;
  }

  get discontinue_stage(): number {
    return this._discontinue_stage;
  }

  set discontinue_stage(value: number) {
    this._discontinue_stage = value;
  }

  get start_date(): string {
    return this._start_date;
  }

  set start_date(value: string) {
    this._start_date = value;
  }

  get end_date(): string {
    return this._end_date;
  }

  set end_date(value: string) {
    this._end_date = value;
  }

  get master_name(): string {
    return this._master_name;
  }

  set master_name(value: string) {
    this._master_name = value;
  }

  get task_name(): string {
    return this._task_name;
  }

  set task_name(value: string) {
    this._task_name = value;
  }

  get subactivity_full_name(): string {
    return this._subactivity_full_name;
  }

  set subactivity_full_name(value: string) {
    this._subactivity_full_name = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get units(): number {
    return this._units;
  }

  set units(value: number) {
    this._units = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  get billing_status(): number {
    return this._billing_status;
  }

  set billing_status(value: number) {
    this._billing_status = value;
  }

  get period_startdate(): string {
    return this._period_startdate;
  }

  set period_startdate(value: string) {
    this._period_startdate = value;
  }

  get no_of_value(): number {
    return this._no_of_value;
  }

  set no_of_value(value: number) {
    this._no_of_value = value;
  }

  get extra_value(): number {
    return this._extra_value;
  }

  set extra_value(value: number) {
    this._extra_value = value;
  }

  get bank_cc_name(): string {
    return this._bank_cc_name;
  }

  set bank_cc_name(value: string) {
    this._bank_cc_name = value;
  }

  get bank_cc_account_no(): string {
    return this._bank_cc_account_no;
  }

  set bank_cc_account_no(value: string) {
    this._bank_cc_account_no = value;
  }

  get frequency_name(): string {
    return this._frequency_name;
  }

  set frequency_name(value: string) {
    this._frequency_name = value;
  }

  get assignee(): AdminUser {
    return this._assignee;
  }

  set assignee(value: AdminUser) {
    this._assignee = value;
  }
}

export class ServicesUpdated {
  private _entity_id: number;
  private _service_id: number;
  private _is_updated: number;


  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get service_id(): number {
    return this._service_id;
  }

  set service_id(value: number) {
    this._service_id = value;
  }

  get is_updated(): number {
    return this._is_updated;
  }

  set is_updated(value: number) {
    this._is_updated = value;
  }
}
