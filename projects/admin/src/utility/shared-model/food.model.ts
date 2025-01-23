import {AdminUser} from "./admin-user.model";

export class FoodMaster {
  private _id: number;
  private _date: string;
  private _location_id: number;
  private _menu_name: string;
  private _menu_id: string;
  private _comment: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _location_name: string;
  private _quantity: number;
  private _quantity_fast: number;
  private _quantity_jain: number;
  private _is_feedback: number;
  private _feedback: string;
  private _food_rating: string;
  private _total_rating: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get location_id(): number {
    return this._location_id;
  }

  set location_id(value: number) {
    this._location_id = value;
  }

  get menu_name(): string {
    return this._menu_name;
  }

  set menu_name(value: string) {
    this._menu_name = value;
  }

  get menu_id(): string {
    return this._menu_id;
  }

  set menu_id(value: string) {
    this._menu_id = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
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

  get location_name(): string {
    return this._location_name;
  }

  set location_name(value: string) {
    this._location_name = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get quantity_fast(): number {
    return this._quantity_fast;
  }

  set quantity_fast(value: number) {
    this._quantity_fast = value;
  }

  get quantity_jain(): number {
    return this._quantity_jain;
  }

  set quantity_jain(value: number) {
    this._quantity_jain = value;
  }

  get is_feedback(): number {
    return this._is_feedback;
  }

  set is_feedback(value: number) {
    this._is_feedback = value;
  }

  get feedback(): string {
    return this._feedback;
  }

  set feedback(value: string) {
    this._feedback = value;
  }

  get food_rating(): string {
    return this._food_rating;
  }

  set food_rating(value: string) {
    this._food_rating = value;
  }

  get total_rating(): number {
    return this._total_rating;
  }

  set total_rating(value: number) {
    this._total_rating = value;
  }
}

export class FoodBookingList {
  private _id: number;
  private _date: string;
  private _location_id: number;
  private _menu_name: string;
  private _menu_id: string;
  private _comment: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _location_name: string;
  private _userfullname: string;
  private _food_type: number;
  private _is_cancel: number;
  private _user_id: number;
  private _food_menu_id: number;
  private _is_feedback: number;
  private _feedback: string;
  private _food_rating: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get location_id(): number {
    return this._location_id;
  }

  set location_id(value: number) {
    this._location_id = value;
  }

  get menu_name(): string {
    return this._menu_name;
  }

  set menu_name(value: string) {
    this._menu_name = value;
  }

  get menu_id(): string {
    return this._menu_id;
  }

  set menu_id(value: string) {
    this._menu_id = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
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

  get location_name(): string {
    return this._location_name;
  }

  set location_name(value: string) {
    this._location_name = value;
  }

  get userfullname(): string {
    return this._userfullname;
  }

  set userfullname(value: string) {
    this._userfullname = value;
  }

  get food_type(): number {
    return this._food_type;
  }

  set food_type(value: number) {
    this._food_type = value;
  }

  get is_cancel(): number {
    return this._is_cancel;
  }

  set is_cancel(value: number) {
    this._is_cancel = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get food_menu_id(): number {
    return this._food_menu_id;
  }

  set food_menu_id(value: number) {
    this._food_menu_id = value;
  }

  get is_feedback(): number {
    return this._is_feedback;
  }

  set is_feedback(value: number) {
    this._is_feedback = value;
  }

  get feedback(): string {
    return this._feedback;
  }

  set feedback(value: string) {
    this._feedback = value;
  }

  get food_rating(): string {
    return this._food_rating;
  }

  set food_rating(value: string) {
    this._food_rating = value;
  }
}


export class FoodBookingFeedbackList {
  private _id: number;
  private _date: string;
  private _location_id: number;
  private _menu_name: string;
  private _menu_id: string;
  private _comment: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _location_name: string;
  private _userfullname: string;
  private _food_type: number;
  private _is_cancel: number;
  private _user_id: number;
  private _food_menu_id: number;
  private _is_feedback: number;
  private _feedback: string;
  private _food_rating: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get location_id(): number {
    return this._location_id;
  }

  set location_id(value: number) {
    this._location_id = value;
  }

  get menu_name(): string {
    return this._menu_name;
  }

  set menu_name(value: string) {
    this._menu_name = value;
  }

  get menu_id(): string {
    return this._menu_id;
  }

  set menu_id(value: string) {
    this._menu_id = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
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

  get location_name(): string {
    return this._location_name;
  }

  set location_name(value: string) {
    this._location_name = value;
  }

  get userfullname(): string {
    return this._userfullname;
  }

  set userfullname(value: string) {
    this._userfullname = value;
  }

  get food_type(): number {
    return this._food_type;
  }

  set food_type(value: number) {
    this._food_type = value;
  }

  get is_cancel(): number {
    return this._is_cancel;
  }

  set is_cancel(value: number) {
    this._is_cancel = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get food_menu_id(): number {
    return this._food_menu_id;
  }

  set food_menu_id(value: number) {
    this._food_menu_id = value;
  }

  get is_feedback(): number {
    return this._is_feedback;
  }

  set is_feedback(value: number) {
    this._is_feedback = value;
  }

  get feedback(): string {
    return this._feedback;
  }

  set feedback(value: string) {
    this._feedback = value;
  }

  get food_rating(): string {
    return this._food_rating;
  }

  set food_rating(value: string) {
    this._food_rating = value;
  }
}
