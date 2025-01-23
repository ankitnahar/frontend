import {AdminUser} from '../../../../utility/shared-model/admin-user.model';

export class ClientReport {
  private _id: number;
  private _tab_id: number;
  private _user_id: number;
  private _share_user_id: number;
  private _name: string;
  private _filter_condition_value: string;
  private _filter_output_field: string;
  private _filter_condition_valueList: any[];
  private _output: string;
  private _outputList: string[];
  private _groupby: string;
  private _orderby: string;
  private _created_on: string;
  private _modified_on: string;
  private _created_by: AdminUser;
  private _modified_by: AdminUser;
  private _shared_user: SharedToUser[];
  private _report_saved_id: number;

  get outputList(): string[] {
    return this._outputList;
  }

  set outputList(value: string[]) {
    this._outputList = value;
  }

  get filter_condition_valueList(): any[] {
    return this._filter_condition_valueList;
  }

  set filter_condition_valueList(value: any[]) {
    this._filter_condition_valueList = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get tab_id(): number {
    return this._tab_id;
  }

  set tab_id(value: number) {
    this._tab_id = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get share_user_id(): number {
    return this._share_user_id;
  }

  set share_user_id(value: number) {
    this._share_user_id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get filter_condition_value(): string {
    return this._filter_condition_value;
  }

  set filter_condition_value(value: string) {
    this._filter_condition_value = value;
  }

  get filter_output_field(): string {
    return this._filter_output_field;
  }

  set filter_output_field(value: string) {
    this._filter_output_field = value;
  }

  get output(): string {
    return this._output;
  }

  set output(value: string) {
    this._output = value;
  }

  get groupby(): string {
    return this._groupby;
  }

  set groupby(value: string) {
    this._groupby = value;
  }

  get orderby(): string {
    return this._orderby;
  }

  set orderby(value: string) {
    this._orderby = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get modified_on(): string {
    return this._modified_on;
  }

  set modified_on(value: string) {
    this._modified_on = value;
  }

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }

  get modified_by(): AdminUser {
    return this._modified_by;
  }

  set modified_by(value: AdminUser) {
    this._modified_by = value;
  }

  get shared_user(): SharedToUser[] {
    return this._shared_user;
  }

  set shared_user(value: SharedToUser[]) {
    this._shared_user = value;
  }

  get report_saved_id(): number {
    return this._report_saved_id;
  }

  set report_saved_id(value: number) {
    this._report_saved_id = value;
  }
}

export class SharedToUser {
  private _id: number;
  private _report_saved_id: number;
  private _user_id: AdminUser;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get report_saved_id(): number {
    return this._report_saved_id;
  }

  set report_saved_id(value: number) {
    this._report_saved_id = value;
  }

  get user_id(): AdminUser {
    return this._user_id;
  }

  set user_id(value: AdminUser) {
    this._user_id = value;
  }
}

export class ReportFieldList {
  private _id: number;
  private _oldid: number;
  private _group_id: GroupName;
  private _field_name: string;
  private _field_title: string;
  private _field_parent_condition: number;
  private _field_value: string;
  private _field_type: string;
  private _field_type_value: any;
  private _is_mandatory: number;
  private _field_length: number;
  private _field_value_type: string;
  private _help_text: string;
  private _sort_order: number;
  private _is_active: number;
  private _disable: number;
  private _is_filter_field: number;
  private _created_on: string;
  private _created_by: number;
  private _modified_on: string;
  private _modified_by: number;
  private _isDisable: boolean;
  private _field_value_array: any[];
  private _isCommaSeperated: boolean;
  private _isMultiSelect: boolean;

  get isMultiSelect(): boolean {
    return this._isMultiSelect;
  }

  set isMultiSelect(value: boolean) {
    this._isMultiSelect = value;
  }

  get isCommaSeperated(): boolean {
    return this._isCommaSeperated;
  }

  set isCommaSeperated(value: boolean) {
    this._isCommaSeperated = value;
  }

  get field_value_array(): any[] {
    return this._field_value_array;
  }

  set field_value_array(value: any[]) {
    this._field_value_array = value;
  }

  get isDisable(): boolean {
    return this._isDisable;
  }

  set isDisable(value: boolean) {
    this._isDisable = value;
  }

  get field_type_value(): any {
    return this._field_type_value;
  }

  set field_type_value(value: any) {
    this._field_type_value = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get oldid(): number {
    return this._oldid;
  }

  set oldid(value: number) {
    this._oldid = value;
  }

  get group_id(): GroupName {
    return this._group_id;
  }

  set group_id(value: GroupName) {
    this._group_id = value;
  }

  get field_name(): string {
    return this._field_name;
  }

  set field_name(value: string) {
    this._field_name = value;
  }

  get field_title(): string {
    return this._field_title;
  }

  set field_title(value: string) {
    this._field_title = value;
  }

  get field_parent_condition(): number {
    return this._field_parent_condition;
  }

  set field_parent_condition(value: number) {
    this._field_parent_condition = value;
  }

  get field_value(): string {
    return this._field_value;
  }

  set field_value(value: string) {
    this._field_value = value;
  }

  get field_type(): string {
    return this._field_type;
  }

  set field_type(value: string) {
    this._field_type = value;
  }

  get is_mandatory(): number {
    return this._is_mandatory;
  }

  set is_mandatory(value: number) {
    this._is_mandatory = value;
  }

  get field_length(): number {
    return this._field_length;
  }

  set field_length(value: number) {
    this._field_length = value;
  }

  get field_value_type(): string {
    return this._field_value_type;
  }

  set field_value_type(value: string) {
    this._field_value_type = value;
  }

  get help_text(): string {
    return this._help_text;
  }

  set help_text(value: string) {
    this._help_text = value;
  }

  get sort_order(): number {
    return this._sort_order;
  }

  set sort_order(value: number) {
    this._sort_order = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get disable(): number {
    return this._disable;
  }

  set disable(value: number) {
    this._disable = value;
  }

  get is_filter_field(): number {
    return this._is_filter_field;
  }

  set is_filter_field(value: number) {
    this._is_filter_field = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get created_by(): number {
    return this._created_by;
  }

  set created_by(value: number) {
    this._created_by = value;
  }

  get modified_on(): string {
    return this._modified_on;
  }

  set modified_on(value: string) {
    this._modified_on = value;
  }

  get modified_by(): number {
    return this._modified_by;
  }

  set modified_by(value: number) {
    this._modified_by = value;
  }
}

export class GroupName {
  private _group_name: string;
  private _id: number;


  get group_name(): string {
    return this._group_name;
  }

  set group_name(value: string) {
    this._group_name = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
