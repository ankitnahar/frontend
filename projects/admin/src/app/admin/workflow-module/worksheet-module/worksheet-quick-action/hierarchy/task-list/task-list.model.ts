import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';
import {MasterActivity} from '../master-activity/master-activity.model';

export class TaskList {

  private _id: number;
  private _master_activity_id: MasterActivity;
  private _name: string;
  private _ask_repeat_task: number;
  private _is_review_task: number;
  private _is_complete_task_pop_required: number;
  private _exclude_assignee: number;
  private _fixed_duedate: string;
  private _is_active: number;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _task_id: string; // Additional Param

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get master_activity_id(): MasterActivity {
    return this._master_activity_id;
  }

  set master_activity_id(value: MasterActivity) {
    this._master_activity_id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get ask_repeat_task(): number {
    return this._ask_repeat_task;
  }

  set ask_repeat_task(value: number) {
    this._ask_repeat_task = value;
  }

  get is_review_task(): number {
    return this._is_review_task;
  }

  set is_review_task(value: number) {
    this._is_review_task = value;
  }

  get is_complete_task_pop_required(): number {
    return this._is_complete_task_pop_required;
  }

  set is_complete_task_pop_required(value: number) {
    this._is_complete_task_pop_required = value;
  }

  get exclude_assignee(): number {
    return this._exclude_assignee;
  }

  set exclude_assignee(value: number) {
    this._exclude_assignee = value;
  }

  get fixed_duedate(): string {
    return this._fixed_duedate;
  }

  set fixed_duedate(value: string) {
    this._fixed_duedate = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
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

  get task_id(): string {
    return this._task_id;
  }

  set task_id(value: string) {
    this._task_id = value;
  }
}
