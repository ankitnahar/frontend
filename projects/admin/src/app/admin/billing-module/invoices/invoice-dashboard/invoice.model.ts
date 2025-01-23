import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';

export class InvoiceStatus {
  private _id: number;
  private _name: string;
  private _is_active: number;
  private _sort_order: number;
  private _tab_id: number;

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

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get sort_order(): number {
    return this._sort_order;
  }

  set sort_order(value: number) {
    this._sort_order = value;
  }

  get tab_id(): number {
    return this._tab_id;
  }

  set tab_id(value: number) {
    this._tab_id = value;
  }
}

export class InvoiceStatusWise {
  private _billing_name: string;
  private _trading_name: string;
  private _status: string;
  private _service_name: string;
  private _service_id: number;
  private _tam_name: string;
  private _technicalHead_name: string;
  private _allocate_credit: string;
  private _id: number;
  private _entity_id: number;
  private _invoice_no: string;
  private _invoice_type: string;
  private _status_id: number;
  private _from_period: string;
  private _to_period: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _is_fixed_fees: number;
  private _paid_amount: number;
  private _payment_date: string;
  private _parent_id: number;
  private _adjusted: number;
  private _outstanding_amount: string;
  private _debtor_followup: number;
  private _merge_invoice: number;
  private _debtors_stage: number;
  private _discontinue_stage: number;
  private _send_date: number;
  private _tl_name: string;

  get service_id(): number {
    return this._service_id;
  }

  set service_id(value: number) {
    this._service_id = value;
  }

  get billing_name(): string {
    return this._billing_name;
  }

  set billing_name(value: string) {
    this._billing_name = value;
  }

  get trading_name(): string {
    return this._trading_name;
  }

  set trading_name(value: string) {
    this._trading_name = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get service_name(): string {
    return this._service_name;
  }

  set service_name(value: string) {
    this._service_name = value;
  }

  get tam_name(): string {
    return this._tam_name;
  }

  set tam_name(value: string) {
    this._tam_name = value;
  }

  get technicalHead_name(): string {
    return this._technicalHead_name;
  }

  set technicalHead_name(value: string) {
    this._technicalHead_name = value;
  }

  get allocate_credit(): string {
    return this._allocate_credit;
  }

  set allocate_credit(value: string) {
    this._allocate_credit = value;
  }

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

  get invoice_no(): string {
    return this._invoice_no;
  }

  set invoice_no(value: string) {
    this._invoice_no = value;
  }

  get invoice_type(): string {
    return this._invoice_type;
  }

  set invoice_type(value: string) {
    this._invoice_type = value;
  }

  get status_id(): number {
    return this._status_id;
  }

  set status_id(value: number) {
    this._status_id = value;
  }

  get from_period(): string {
    return this._from_period;
  }

  set from_period(value: string) {
    this._from_period = value;
  }

  get to_period(): string {
    return this._to_period;
  }

  set to_period(value: string) {
    this._to_period = value;
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

  get is_fixed_fees(): number {
    return this._is_fixed_fees;
  }

  set is_fixed_fees(value: number) {
    this._is_fixed_fees = value;
  }

  get paid_amount(): number {
    return this._paid_amount;
  }

  set paid_amount(value: number) {
    this._paid_amount = value;
  }

  get payment_date(): string {
    return this._payment_date;
  }

  set payment_date(value: string) {
    this._payment_date = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }

  get adjusted(): number {
    return this._adjusted;
  }

  set adjusted(value: number) {
    this._adjusted = value;
  }

  get outstanding_amount(): string {
    return this._outstanding_amount;
  }

  set outstanding_amount(value: string) {
    this._outstanding_amount = value;
  }

  get debtor_followup(): number {
    return this._debtor_followup;
  }

  set debtor_followup(value: number) {
    this._debtor_followup = value;
  }

  get merge_invoice(): number {
    return this._merge_invoice;
  }

  set merge_invoice(value: number) {
    this._merge_invoice = value;
  }

  get debtors_stage(): number {
    return this._debtors_stage;
  }

  set debtors_stage(value: number) {
    this._debtors_stage = value;
  }

  get discontinue_stage(): number {
    return this._discontinue_stage;
  }

  set discontinue_stage(value: number) {
    this._discontinue_stage = value;
  }

  get send_date(): number {
    return this._send_date;
  }

  set send_date(value: number) {
    this._send_date = value;
  }

  get tl_name(): string {
    return this._tl_name;
  }

  set tl_name(value: string) {
    this._tl_name = value;
  }
}

export class InvoiceLog {
  private _id: number;
  private _invoice_id: number;
  private _status_id: InvoiceStatus;
  private _modified_by: AdminUser;
  private _modified_on: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get invoice_id(): number {
    return this._invoice_id;
  }

  set invoice_id(value: number) {
    this._invoice_id = value;
  }

  get status_id(): InvoiceStatus {
    return this._status_id;
  }

  set status_id(value: InvoiceStatus) {
    this._status_id = value;
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
