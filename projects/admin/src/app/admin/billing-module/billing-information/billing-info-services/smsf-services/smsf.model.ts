export class SmsfData {

  private _recurring_id: number;
  private _auto_invoice: number;
  private _frequency_id: number;
  private _befree_invoice: number;
  private _monthly_amount: string;
  private _balance_amount: string;
  private _audit_fee_inc: number;
  private _audit_fee: string;
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

  get befree_invoice(): number {
    return this._befree_invoice;
  }

  set befree_invoice(value: number) {
    this._befree_invoice = value;
  }

  get monthly_amount(): string {
    return this._monthly_amount;
  }

  set monthly_amount(value: string) {
    this._monthly_amount = value;
  }

  get balance_amount(): string {
    return this._balance_amount;
  }

  set balance_amount(value: string) {
    this._balance_amount = value;
  }

  get audit_fee_inc(): number {
    return this._audit_fee_inc;
  }

  set audit_fee_inc(value: number) {
    this._audit_fee_inc = value;
  }

  get audit_fee(): string {
    return this._audit_fee;
  }

  set audit_fee(value: string) {
    this._audit_fee = value;
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
