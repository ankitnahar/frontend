import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {DiscontinueEntity} from '../discontinue-client.model';

export class DiscontinueCommentsDialog {
  private _id: number;
  private _discontinue_entity_id: DiscontinueEntity;
  private _comment: string;
  private _is_emailsent: string;
  private _to: number;
  private _cc: number;
  private _created_by: AdminUser;
  private _created_on: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get discontinue_entity_id(): DiscontinueEntity {
    return this._discontinue_entity_id;
  }

  set discontinue_entity_id(value: DiscontinueEntity) {
    this._discontinue_entity_id = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  get is_emailsent(): string {
    return this._is_emailsent;
  }

  set is_emailsent(value: string) {
    this._is_emailsent = value;
  }

  get to(): number {
    return this._to;
  }

  set to(value: number) {
    this._to = value;
  }

  get cc(): number {
    return this._cc;
  }

  set cc(value: number) {
    this._cc = value;
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
