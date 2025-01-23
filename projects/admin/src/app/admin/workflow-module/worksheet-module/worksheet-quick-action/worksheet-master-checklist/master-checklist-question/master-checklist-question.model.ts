import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';

export class MasterChecklistQuestion {
  private name: string;
  private created_by: AdminUser;
  private activityName: string;
  private checklistName: string;
  private checklist_group_id: number;
  private created_on: string;
  private groupName: string;
  private help_text: string;
  private id: number;
  private is_active: number;
  private master_checklist_id: number;
  private modified_by: string;
  private modified_on: string;
  private question_name: string;
  private taskName: string;

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
   * Getter $activityName
   * @return {string}
   */
  public get $activityName(): string {
    return this.activityName;
  }

  /**
   * Getter $checklistName
   * @return {string}
   */
  public get $checklistName(): string {
    return this.checklistName;
  }

  /**
   * Getter $checklist_group_id
   * @return {number}
   */
  public get $checklist_group_id(): number {
    return this.checklist_group_id;
  }

  /**
   * Getter $created_on
   * @return {string}
   */
  public get $created_on(): string {
    return this.created_on;
  }

  /**
   * Getter $groupName
   * @return {string}
   */
  public get $groupName(): string {
    return this.groupName;
  }

  /**
   * Getter $help_text
   * @return {string}
   */
  public get $help_text(): string {
    return this.help_text;
  }

  /**
   * Getter $id
   * @return {number}
   */
  public get $id(): number {
    return this.id;
  }

  /**
   * Getter $is_active
   * @return {number}
   */
  public get $is_active(): number {
    return this.is_active;
  }

  /**
   * Getter $master_checklist_id
   * @return {number}
   */
  public get $master_checklist_id(): number {
    return this.master_checklist_id;
  }

  /**
   * Getter $modified_by
   * @return {string}
   */
  public get $modified_by(): string {
    return this.modified_by;
  }

  /**
   * Getter $modified_on
   * @return {string}
   */
  public get $modified_on(): string {
    return this.modified_on;
  }

  /**
   * Getter $question_name
   * @return {string}
   */
  public get $question_name(): string {
    return this.question_name;
  }

  /**
   * Getter $taskName
   * @return {string}
   */
  public get $taskName(): string {
    return this.taskName;
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

  /**
   * Setter $activityName
   * @param {string} value
   */
  public set $activityName(value: string) {
    this.activityName = value;
  }

  /**
   * Setter $checklistName
   * @param {string} value
   */
  public set $checklistName(value: string) {
    this.checklistName = value;
  }

  /**
   * Setter $checklist_group_id
   * @param {number} value
   */
  public set $checklist_group_id(value: number) {
    this.checklist_group_id = value;
  }

  /**
   * Setter $created_on
   * @param {string} value
   */
  public set $created_on(value: string) {
    this.created_on = value;
  }

  /**
   * Setter $groupName
   * @param {string} value
   */
  public set $groupName(value: string) {
    this.groupName = value;
  }

  /**
   * Setter $help_text
   * @param {string} value
   */
  public set $help_text(value: string) {
    this.help_text = value;
  }

  /**
   * Setter $id
   * @param {number} value
   */
  public set $id(value: number) {
    this.id = value;
  }

  /**
   * Setter $is_active
   * @param {number} value
   */
  public set $is_active(value: number) {
    this.is_active = value;
  }

  /**
   * Setter $master_checklist_id
   * @param {number} value
   */
  public set $master_checklist_id(value: number) {
    this.master_checklist_id = value;
  }

  /**
   * Setter $modified_by
   * @param {string} value
   */
  public set $modified_by(value: string) {
    this.modified_by = value;
  }

  /**
   * Setter $modified_on
   * @param {string} value
   */
  public set $modified_on(value: string) {
    this.modified_on = value;
  }

  /**
   * Setter $question_name
   * @param {string} value
   */
  public set $question_name(value: string) {
    this.question_name = value;
  }

  /**
   * Setter $taskName
   * @param {string} value
   */
  public set $taskName(value: string) {
    this.taskName = value;
  }

}
