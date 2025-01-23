export class AccountCode {
  private _id: number;
  private _account_no: number;
  private _account_name: string;
  private _is_active: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get account_no(): number {
    return this._account_no;
  }

  set account_no(value: number) {
    this._account_no = value;
  }

  get account_name(): string {
    return this._account_name;
  }

  set account_name(value: string) {
    this._account_name = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }
}
