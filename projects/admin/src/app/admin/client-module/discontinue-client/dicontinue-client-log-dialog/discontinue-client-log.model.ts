import {DiscontinueEntity} from '../discontinue-client.model';
import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';

export class DiscontinueEntityLog {
  private _discontinue_entity_id: DiscontinueEntity;
  private _values: number;
  private _log_type: number;
  private _modified_by: AdminUser;
  private _discontinue_on: string;

  get discontinue_entity_id(): DiscontinueEntity {
    return this._discontinue_entity_id;
  }

  set discontinue_entity_id(value: DiscontinueEntity) {
    this._discontinue_entity_id = value;
  }

  get values(): number {
    return this._values;
  }

  set values(value: number) {
    this._values = value;
  }

  get log_type(): number {
    return this._log_type;
  }

  set log_type(value: number) {
    this._log_type = value;
  }

  get modified_by(): AdminUser {
    return this._modified_by;
  }

  set modified_by(value: AdminUser) {
    this._modified_by = value;
  }

  get discontinue_on(): string {
    return this._discontinue_on;
  }

  set discontinue_on(value: string) {
    this._discontinue_on = value;
  }
}
