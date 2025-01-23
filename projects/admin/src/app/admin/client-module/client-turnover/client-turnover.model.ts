export class ClientTurnover {
  private _id: number;
  private _entity_id: EntityId;
  private _year: string;
  private _sept_qtr: string;
  private _march_qtr: string;
  private _june_qtr: string;
  private _dec_qtr: string;
  private _total: string;
  private _created_on: string;
  private _created_by: string;
  private _modified_on: string;
  private _modified_by: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get entity_id(): EntityId {
    return this._entity_id;
  }

  set entity_id(value: EntityId) {
    this._entity_id = value;
  }

  get year(): string {
    return this._year;
  }

  set year(value: string) {
    this._year = value;
  }

  get sept_qtr(): string {
    return this._sept_qtr;
  }

  set sept_qtr(value: string) {
    this._sept_qtr = value;
  }

  get march_qtr(): string {
    return this._march_qtr;
  }

  set march_qtr(value: string) {
    this._march_qtr = value;
  }

  get june_qtr(): string {
    return this._june_qtr;
  }

  set june_qtr(value: string) {
    this._june_qtr = value;
  }

  get dec_qtr(): string {
    return this._dec_qtr;
  }

  set dec_qtr(value: string) {
    this._dec_qtr = value;
  }

  get total(): string {
    return this._total;
  }

  set total(value: string) {
    this._total = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get created_by(): string {
    return this._created_by;
  }

  set created_by(value: string) {
    this._created_by = value;
  }

  get modified_on(): string {
    return this._modified_on;
  }

  set modified_on(value: string) {
    this._modified_on = value;
  }

  get modified_by(): string {
    return this._modified_by;
  }

  set modified_by(value: string) {
    this._modified_by = value;
  }
}

export class EntityId {
  private _name: string;
  private _billing_name: string;
  private _trading_name: string;
  private _id: number;

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

  get trading_name(): string {
    return this._trading_name;
  }

  set trading_name(value: string) {
    this._trading_name = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
