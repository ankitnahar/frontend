export class DYNAMICFIELDS {
  private _id: number;
  private _field_id: number;
  private _field_name: string;
  private _field_title: string;
  private _field_type: string;
  private _field_value: string;
  private _field_helptext: string;
  private _dataArray: any[];

  get field_id(): number {
    return this._field_id;
  }

  set field_id(value: number) {
    this._field_id = value;
  }

  get field_helptext(): string {
    return this._field_helptext;
  }

  set field_helptext(value: string) {
    this._field_helptext = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get field_name(): string {
    return this._field_name;
  }

  set field_name(value: string) {
    this._field_name = value;
  }

  get field_title(): string {
    return this._field_title;
  }

  set field_title(value: string) {
    this._field_title = value;
  }

  get field_type(): string {
    return this._field_type;
  }

  set field_type(value: string) {
    this._field_type = value;
  }

  get field_value(): string {
    return this._field_value;
  }

  set field_value(value: string) {
    this._field_value = value;
  }

  get dataArray(): any[] {
    return this._dataArray;
  }

  set dataArray(value: any[]) {
    this._dataArray = value;
  }
}

export class AgreedTabs {
  private _id: number;
  private _group_name: string;
  private _service_id: number;
  private _parent_id: number;
  private _child: AgreedChildTabs[];

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get group_name(): string {
    return this._group_name;
  }

  set group_name(value: string) {
    this._group_name = value;
  }

  get service_id(): number {
    return this._service_id;
  }

  set service_id(value: number) {
    this._service_id = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }

  get child(): AgreedChildTabs[] {
    return this._child;
  }

  set child(value: AgreedChildTabs[]) {
    this._child = value;
  }
}

export class AgreedChildTabs {
  private _id: number;
  private _group_name: string;
  private _service_id: number;
  private _parent_id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get group_name(): string {
    return this._group_name;
  }

  set group_name(value: string) {
    this._group_name = value;
  }

  get service_id(): number {
    return this._service_id;
  }

  set service_id(value: number) {
    this._service_id = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }
}
