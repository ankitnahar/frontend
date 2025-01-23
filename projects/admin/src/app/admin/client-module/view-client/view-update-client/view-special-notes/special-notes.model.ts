export class SpecialNotesData {
  private _id: number;
  private _entity_id: number;
  private _service_id: ServiceId;
  private _note: string;
  private _expiry_on: string;
  private _type: number;
  private _is_active: IsActive;
  private _created_by: CreatedBy;
  private _created_on: string;
  private _modified_by: ModifiedBy;
  private _modified_on: string;

  get modified_by(): ModifiedBy {
    return this._modified_by;
  }

  set modified_by(value: ModifiedBy) {
    this._modified_by = value;
  }

  get modified_on(): string {
    return this._modified_on;
  }

  set modified_on(value: string) {
    this._modified_on = value;
  }

  get is_active(): IsActive {
    return this._is_active;
  }

  set is_active(value: IsActive) {
    this._is_active = value;
  }

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

  get service_id(): ServiceId {
    return this._service_id;
  }

  set service_id(value: ServiceId) {
    this._service_id = value;
  }

  get note(): string {
    return this._note;
  }

  set note(value: string) {
    this._note = value;
  }

  get expiry_on(): string {
    return this._expiry_on;
  }

  set expiry_on(value: string) {
    this._expiry_on = value;
  }

  get type(): number {
    return this._type;
  }

  set type(value: number) {
    this._type = value;
  }

  get created_by(): CreatedBy {
    return this._created_by;
  }

  set created_by(value: CreatedBy) {
    this._created_by = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }
}

export class ServiceId {
  private _id: number;
  private _service_name: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get service_name(): string {
    return this._service_name;
  }

  set service_name(value: string) {
    this._service_name = value;
  }
}

export class CreatedBy {
  private _id: number;
  private _userfullname: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get userfullname(): string {
    return this._userfullname;
  }

  set userfullname(value: string) {
    this._userfullname = value;
  }
}

export class ModifiedBy {
  private _id: number;
  private _userfullname: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get userfullname(): string {
    return this._userfullname;
  }

  set userfullname(value: string) {
    this._userfullname = value;
  }
}

export class IsActive {
  private _id: number;
  private _entity_specialnotes_id: number;
  private _archive_by: ArchiveBy;
  private _archive_on: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get entity_specialnotes_id(): number {
    return this._entity_specialnotes_id;
  }

  set entity_specialnotes_id(value: number) {
    this._entity_specialnotes_id = value;
  }

  get archive_by(): ArchiveBy {
    return this._archive_by;
  }

  set archive_by(value: ArchiveBy) {
    this._archive_by = value;
  }

  get archive_on(): string {
    return this._archive_on;
  }

  set archive_on(value: string) {
    this._archive_on = value;
  }
}

export class ArchiveBy {
  private _id: number;
  private _userfullname: string;
  private _email: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get userfullname(): string {
    return this._userfullname;
  }

  set userfullname(value: string) {
    this._userfullname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}

export class SpecialNotesTabs {
  private _service_name: string;
  private _service_id: number;
  private _parent_id: number;
  private _child: Child[];

  get service_name(): string {
    return this._service_name;
  }

  set service_name(value: string) {
    this._service_name = value;
  }

  get service_id(): number {
    return this._service_id;
  }

  set service_id(value: number) {
    this._service_id = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }

  get child(): Child[] {
    return this._child;
  }

  set child(value: Child[]) {
    this._child = value;
  }
}

export class Child {
  private _service_name: string;
  private _service_id: number;
  private _parent_id: number;

  get service_name(): string {
    return this._service_name;
  }

  set service_name(value: string) {
    this._service_name = value;
  }

  get service_id(): number {
    return this._service_id;
  }

  set service_id(value: number) {
    this._service_id = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }
}
