import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';

export class MasterChecklist {
  private name: string;
  private created_by: AdminUser;
  // private master_activity_id: MasterActivity;
  // private task_id: Task;

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter $created_by
   * @return {AdminUser}
   */
  public get $created_by(): AdminUser {
    return this.created_by;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter $created_by
   * @param {AdminUser} value
   */
  public set $created_by(value: AdminUser) {
    this.created_by = value;
  }


}
