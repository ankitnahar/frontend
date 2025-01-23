import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';
import {MasterActivity} from '../master-activity/master-activity.model';
import {TaskList} from '../task-list/task-list.model';

export class SubActivity {

  private _id: number;
  private _master_id: MasterActivity;
  private _name: string;
  private _task_id: TaskList;
  private _subactivity_code: number;
  private _subactivity_name: string;
  private _subactivity_full_name: string;
  private _description: string;
  private _is_inc_in_ff: number;
  private _is_frequency: number;
  private _is_fixed_fee: number;
  private _is_price: number;
  private _is_no_of_employee: number;
  private _invoice_desc: string;
  private _ff_desc: string;
  private _sub_grouping: number;
  private _chargeable: number;
  private _visible: number;
  private _ff_rule: string;
  private _not_ff_rule: string;
  private _is_active: number;
  private _show_in_ff: number;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _timesheet_dyanmic_fields: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get master_id(): MasterActivity {
    return this._master_id;
  }

  set master_id(value: MasterActivity) {
    this._master_id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get task_id(): TaskList {
    return this._task_id;
  }

  set task_id(value: TaskList) {
    this._task_id = value;
  }

  get subactivity_code(): number {
    return this._subactivity_code;
  }

  set subactivity_code(value: number) {
    this._subactivity_code = value;
  }

  get subactivity_name(): string {
    return this._subactivity_name;
  }

  set subactivity_name(value: string) {
    this._subactivity_name = value;
  }

  get subactivity_full_name(): string {
    return this._subactivity_full_name;
  }

  set subactivity_full_name(value: string) {
    this._subactivity_full_name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get is_inc_in_ff(): number {
    return this._is_inc_in_ff;
  }

  set is_inc_in_ff(value: number) {
    this._is_inc_in_ff = value;
  }

  get is_frequency(): number {
    return this._is_frequency;
  }

  set is_frequency(value: number) {
    this._is_frequency = value;
  }

  get is_fixed_fee(): number {
    return this._is_fixed_fee;
  }

  set is_fixed_fee(value: number) {
    this._is_fixed_fee = value;
  }

  get is_price(): number {
    return this._is_price;
  }

  set is_price(value: number) {
    this._is_price = value;
  }

  get is_no_of_employee(): number {
    return this._is_no_of_employee;
  }

  set is_no_of_employee(value: number) {
    this._is_no_of_employee = value;
  }

  get invoice_desc(): string {
    return this._invoice_desc;
  }

  set invoice_desc(value: string) {
    this._invoice_desc = value;
  }

  get ff_desc(): string {
    return this._ff_desc;
  }

  set ff_desc(value: string) {
    this._ff_desc = value;
  }

  get sub_grouping(): number {
    return this._sub_grouping;
  }

  set sub_grouping(value: number) {
    this._sub_grouping = value;
  }

  get chargeable(): number {
    return this._chargeable;
  }

  set chargeable(value: number) {
    this._chargeable = value;
  }

  get visible(): number {
    return this._visible;
  }

  set visible(value: number) {
    this._visible = value;
  }

  get ff_rule(): string {
    return this._ff_rule;
  }

  set ff_rule(value: string) {
    this._ff_rule = value;
  }

  get not_ff_rule(): string {
    return this._not_ff_rule;
  }

  set not_ff_rule(value: string) {
    this._not_ff_rule = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get show_in_ff(): number {
    return this._show_in_ff;
  }

  set show_in_ff(value: number) {
    this._show_in_ff = value;
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

  get timesheet_dyanmic_fields(): string {
    return this._timesheet_dyanmic_fields;
  }

  set timesheet_dyanmic_fields(value: string) {
    this._timesheet_dyanmic_fields = value;
  }
}
