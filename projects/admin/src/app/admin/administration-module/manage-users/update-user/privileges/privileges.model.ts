export class TABPRIVILEGES {
  private _id: number;
  private _tab_name: string;
  private _is_view: number;
  private _is_add_edit: number;
  private _is_delete: number;
  private _is_export: number;
  private _is_download: number;
  private _view: number;
  private _add_edit: number;
  private _delete: number;
  private _export: number;
  private _download: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get tab_name(): string {
    return this._tab_name;
  }

  set tab_name(value: string) {
    this._tab_name = value;
  }

  get is_view(): number {
    return this._is_view;
  }

  set is_view(value: number) {
    this._is_view = value;
  }

  get is_add_edit(): number {
    return this._is_add_edit;
  }

  set is_add_edit(value: number) {
    this._is_add_edit = value;
  }

  get is_delete(): number {
    return this._is_delete;
  }

  set is_delete(value: number) {
    this._is_delete = value;
  }

  get is_export(): number {
    return this._is_export;
  }

  set is_export(value: number) {
    this._is_export = value;
  }

  get is_download(): number {
    return this._is_download;
  }

  set is_download(value: number) {
    this._is_download = value;
  }

  get view(): number {
    return this._view;
  }

  set view(value: number) {
    this._view = value;
  }

  get add_edit(): number {
    return this._add_edit;
  }

  set add_edit(value: number) {
    this._add_edit = value;
  }

  get delete(): number {
    return this._delete;
  }

  set delete(value: number) {
    this._delete = value;
  }

  get export(): number {
    return this._export;
  }

  set export(value: number) {
    this._export = value;
  }

  get download(): number {
    return this._download;
  }

  set download(value: number) {
    this._download = value;
  }
}

export class WORKSHEETPRIVILEGES {
  private _id: number;
  private _status_name: string;
  private _right: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get status_name(): string {
    return this._status_name;
  }

  set status_name(value: string) {
    this._status_name = value;
  }

  get right(): number {
    return this._right;
  }

  set right(value: number) {
    this._right = value;
  }
}

export class FIELDPRIVILEGES {
  private _id: number;
  private _add_edit: number;
  private _field_title: string;
  private _group_name: string;
  private _view: number;
  private _created_on: string;

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get add_edit(): number {
    return this._add_edit;
  }

  set add_edit(value: number) {
    this._add_edit = value;
  }

  get field_title(): string {
    return this._field_title;
  }

  set field_title(value: string) {
    this._field_title = value;
  }

  get group_name(): string {
    return this._group_name;
  }

  set group_name(value: string) {
    this._group_name = value;
  }

  get view(): number {
    return this._view;
  }

  set view(value: number) {
    this._view = value;
  }
}

export class BUTTONPRIVILEGES {
  private _tab_id: number;
  private _id: number;
  private _button_label: string;
  private _tab_name: string;
  private _view: number;

  get view(): number {
    return this._view;
  }

  set view(value: number) {
    this._view = value;
  }

  get tab_id(): number {
    return this._tab_id;
  }

  set tab_id(value: number) {
    this._tab_id = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get button_label(): string {
    return this._button_label;
  }

  set button_label(value: string) {
    this._button_label = value;
  }

  get tab_name(): string {
    return this._tab_name;
  }

  set tab_name(value: string) {
    this._tab_name = value;
  }
}
