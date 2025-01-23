import {AdminUser} from "./admin-user.model";

export class SignatureUser {
  private _id: number;
  private _designation: string;
  private _email: string;
  private _name: string;
  private _phone1: string;
  private _phone2: string;
  private _template_id: number;
  private _user_id: number;
  private _user_image: string;
  private _website: string;
  private _created_by: AdminUser;
  private _signature: string;
  private _template_name: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get designation(): string {
    return this._designation;
  }

  set designation(value: string) {
    this._designation = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get phone1(): string {
    return this._phone1;
  }

  set phone1(value: string) {
    this._phone1 = value;
  }

  get phone2(): string {
    return this._phone2;
  }

  set phone2(value: string) {
    this._phone2 = value;
  }

  get template_id(): number {
    return this._template_id;
  }

  set template_id(value: number) {
    this._template_id = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get user_image(): string {
    return this._user_image;
  }

  set user_image(value: string) {
    this._user_image = value;
  }

  get website(): string {
    return this._website;
  }

  set website(value: string) {
    this._website = value;
  }

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }

  get signature(): string {
    return this._signature;
  }

  set signature(value: string) {
    this._signature = value;
  }

  get template_name(): string {
    return this._template_name;
  }

  set template_name(value: string) {
    this._template_name = value;
  }
}
