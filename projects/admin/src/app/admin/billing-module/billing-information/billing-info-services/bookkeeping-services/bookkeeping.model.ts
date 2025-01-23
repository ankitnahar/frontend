export class BookkeepingData {
  private _id: number;
  private _recurring_id: number;
  private _auto_invoice: number;
  private _frequency_id: number;
  private _bk_in_ff: string;
  private _ff_rph: string;
  private _fixed_fee: string;
  private _ff_start_date: string;
  private _fixed_total_amount: string;
  private _fixed_total_unit: string;
  private _notes: string;
  private _default_rph: string;
  private _inc_in_ff: string;
  private _service_rph: any[];
  private _is_updated: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

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

  get bk_in_ff(): string {
    return this._bk_in_ff;
  }

  set bk_in_ff(value: string) {
    this._bk_in_ff = value;
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

  get ff_start_date(): string {
    return this._ff_start_date;
  }

  set ff_start_date(value: string) {
    this._ff_start_date = value;
  }

  get fixed_total_amount(): string {
    return this._fixed_total_amount;
  }

  set fixed_total_amount(value: string) {
    this._fixed_total_amount = value;
  }

  get fixed_total_unit(): string {
    return this._fixed_total_unit;
  }

  set fixed_total_unit(value: string) {
    this._fixed_total_unit = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  get default_rph(): string {
    return this._default_rph;
  }

  set default_rph(value: string) {
    this._default_rph = value;
  }

  get inc_in_ff(): string {
    return this._inc_in_ff;
  }

  set inc_in_ff(value: string) {
    this._inc_in_ff = value;
  }

  get service_rph(): any[] {
    return this._service_rph;
  }

  set service_rph(value: any[]) {
    this._service_rph = value;
  }
}
