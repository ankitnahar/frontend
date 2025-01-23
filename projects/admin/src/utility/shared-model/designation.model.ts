import {AdminUser} from './admin-user.model';

export class Department {
  private _id: number;
  private _is_active: number;
  private _department_name: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get department_name(): string {
    return this._department_name;
  }

  set department_name(value: string) {
    this._department_name = value;
  }
}

export class Designation {
  private _id: number;
  private _designation_name: string;
  private _is_mandatory: string;
  private _is_active: string;
  private _modified_by: AdminUser;
  private _modified_on: string;
  private _parent_id: number;
  private _parent: Designation;
  private _is_display_in_allocation: number;
  private _isChecked: boolean;
  private _designation_id: number;
  private _department_name: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get designation_name(): string {
    return this._designation_name;
  }

  set designation_name(value: string) {
    this._designation_name = value;
  }

  get is_mandatory(): string {
    return this._is_mandatory;
  }

  set is_mandatory(value: string) {
    this._is_mandatory = value;
  }

  get is_active(): string {
    return this._is_active;
  }

  set is_active(value: string) {
    this._is_active = value;
  }

  get modified_by(): AdminUser {
    return this._modified_by;
  }

  set modified_by(value: AdminUser) {
    this._modified_by = value;
  }

  get modified_on(): string {
    return this._modified_on;
  }

  set modified_on(value: string) {
    this._modified_on = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }

  get parent(): Designation {
    return this._parent;
  }

  set parent(value: Designation) {
    this._parent = value;
  }

  get is_display_in_allocation(): number {
    return this._is_display_in_allocation;
  }

  set is_display_in_allocation(value: number) {
    this._is_display_in_allocation = value;
  }

  get isChecked(): boolean {
    return this._isChecked;
  }

  set isChecked(value: boolean) {
    this._isChecked = value;
  }

  get designation_id(): number {
    return this._designation_id;
  }

  set designation_id(value: number) {
    this._designation_id = value;
  }

  get department_name(): string {
    return this._department_name;
  }

  set department_name(value: string) {
    this._department_name = value;
  }
}

export class OfficeLocation {
  private _id: number;
  private _location_name: string;
  private _status: number;
  private _isChecked: boolean;
  private _created_by: AdminUser;
  private _created_on: string;
  private _is_food: number;

  get is_food(): number {
    return this._is_food;
  }

  set is_food(value: number) {
    this._is_food = value;
  }

  get isChecked(): boolean {
    return this._isChecked;
  }

  set isChecked(value: boolean) {
    this._isChecked = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get location_name(): string {
    return this._location_name;
  }

  set location_name(value: string) {
    this._location_name = value;
  }

  get status(): number {
    return this._status;
  }

  set status(value: number) {
    this._status = value;
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

export class Team {
  private _department_id: string;
  private _id: number;
  private _is_active: number;
  private _service_id: number;
  private _team_name: string;

  get department_id(): string {
    return this._department_id;
  }

  set department_id(value: string) {
    this._department_id = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get service_id(): number {
    return this._service_id;
  }

  set service_id(value: number) {
    this._service_id = value;
  }

  get team_name(): string {
    return this._team_name;
  }

  set team_name(value: string) {
    this._team_name = value;
  }
}

