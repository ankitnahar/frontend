export class Frequency {
  private _id: number;
  private _frequency_name: string;
  private _days: number;
  private _count_in_year: number;
  private _show_in_invoice: number;
  private _show_in_worksheet: number;
  private _sort_order: number;
  private _is_active: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get frequency_name(): string {
    return this._frequency_name;
  }

  set frequency_name(value: string) {
    this._frequency_name = value;
  }

  get days(): number {
    return this._days;
  }

  set days(value: number) {
    this._days = value;
  }

  get show_in_invoice(): number {
    return this._show_in_invoice;
  }

  set show_in_invoice(value: number) {
    this._show_in_invoice = value;
  }


  get show_in_worksheet(): number {
    return this._show_in_worksheet;
  }

  set show_in_worksheet(value: number) {
    this._show_in_worksheet = value;
  }

  get sort_order(): number {
    return this._sort_order;
  }

  set sort_order(value: number) {
    this._sort_order = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get count_in_year(): number {
    return this._count_in_year;
  }

  set count_in_year(value: number) {
    this._count_in_year = value;
  }
}
