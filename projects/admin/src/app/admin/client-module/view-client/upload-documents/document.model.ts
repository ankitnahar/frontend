import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';

export class ClientDocument {
  private _id: number;
  private _entity_id: number;
  private _module_id: number;
  private _original_name: string;
  private _filename: string;
  private _type: number;
  private _documentpath: string;
  private _created_by: AdminUser;
  private _created_on: string;
  private _notes: string;

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
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

  get module_id(): number {
    return this._module_id;
  }

  set module_id(value: number) {
    this._module_id = value;
  }

  get original_name(): string {
    return this._original_name;
  }

  set original_name(value: string) {
    this._original_name = value;
  }

  get filename(): string {
    return this._filename;
  }

  set filename(value: string) {
    this._filename = value;
  }

  get type(): number {
    return this._type;
  }

  set type(value: number) {
    this._type = value;
  }

  get documentpath(): string {
    return this._documentpath;
  }

  set documentpath(value: string) {
    this._documentpath = value;
  }

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }
}
