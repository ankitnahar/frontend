export class MonthlyInvoice {
  private _code: string;
  private _name: string;
  private _invoice_no: string;
  private _fixed_fee: string;
  private _billing_id: number;
  private _created_on: string;
  private _AR: string;
  private _AP: string;
  private _DM: string;
  private _Payroll: string;


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

  get invoice_no(): string {
    return this._invoice_no;
  }

  set invoice_no(value: string) {
    this._invoice_no = value;
  }

  get fixed_fee(): string {
    return this._fixed_fee;
  }

  set fixed_fee(value: string) {
    this._fixed_fee = value;
  }

  get billing_id(): number {
    return this._billing_id;
  }

  set billing_id(value: number) {
    this._billing_id = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get AR(): string {
    return this._AR;
  }

  set AR(value: string) {
    this._AR = value;
  }

  get AP(): string {
    return this._AP;
  }

  set AP(value: string) {
    this._AP = value;
  }

  get DM(): string {
    return this._DM;
  }

  set DM(value: string) {
    this._DM = value;
  }

  get Payroll(): string {
    return this._Payroll;
  }

  set Payroll(value: string) {
    this._Payroll = value;
  }
}
