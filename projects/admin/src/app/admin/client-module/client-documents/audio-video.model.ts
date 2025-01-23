import {AdminUser} from '../../../../utility/shared-model/admin-user.model';

export class AudioVideo {
  private _id: number;
  private _entity_id: number;
  private _document_name: string;
  private _document_type: string;
  private _document_link: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;

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

  get document_name(): string {
    return this._document_name;
  }

  set document_name(value: string) {
    this._document_name = value;
  }

  get document_type(): string {
    return this._document_type;
  }

  set document_type(value: string) {
    this._document_type = value;
  }

  get document_link(): string {
    return this._document_link;
  }

  set document_link(value: string) {
    this._document_link = value;
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

  get modified_on(): string {
    return this._modified_on;
  }

  set modified_on(value: string) {
    this._modified_on = value;
  }

  get modified_by(): AdminUser {
    return this._modified_by;
  }

  set modified_by(value: AdminUser) {
    this._modified_by = value;
  }
}

export const GoogleDriveFileType = [
  {
    key: 1,
    label: 'Audio',
  },
  {
    key: 2,
    label: 'Video',
  }
];
