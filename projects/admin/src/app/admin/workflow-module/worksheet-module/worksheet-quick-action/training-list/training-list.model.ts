import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';

export class TrainingList {
  private _id: number;
  private _traning_name: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _is_active: number;

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter traning_name
   * @return {string}
   */
  public get traning_name(): string {
    return this._traning_name;
  }

  /**
   * Getter created_on
   * @return {string}
   */
  public get created_on(): string {
    return this._created_on;
  }

  /**
   * Getter created_by
   * @return {AdminUser}
   */
  public get created_by(): AdminUser {
    return this._created_by;
  }

  /**
   * Getter is_active
   * @return {number}
   */
  public get is_active(): number {
    return this._is_active;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter traning_name
   * @param {string} value
   */
  public set traning_name(value: string) {
    this._traning_name = value;
  }

  /**
   * Setter created_on
   * @param {string} value
   */
  public set created_on(value: string) {
    this._created_on = value;
  }

  /**
   * Setter created_by
   * @param {AdminUser} value
   */
  public set created_by(value: AdminUser) {
    this._created_by = value;
  }

  /**
   * Setter is_active
   * @param {number} value
   */
  public set is_active(value: number) {
    this._is_active = value;
  }

}
