import {AdminUser} from "./admin-user.model";

export class Nominee {
  private _user_bio_id: number;
  private _userfullname: string;
  private _designation_name: string;
  private _department_name: string;
  private _status_name: string;
  private _name: string;
  private _id: number;
  private _user_id: number;
  private _status_id: number;
  private _designation_id: number;
  private _department_id: number;
  private _team_detail: string;
  private _award_id: number;
  private _award_month: string;
  private _present_day: number;
  private _absent: number;
  private _issue_ticket: number;
  private _apprisal_ticket: number;
  private _comment: string;
  private _knockback_reason: string;
  private _knockback_date: string;
  private _created_on: string;
  private _created_by: number;
  private _user_joining_date: string;
  private _is_view: number;
  private _assign_manager: number;
  private _manager_name: string;
  private _user_image: string;
  private _tl_name: string;
  private _tl: number;
  private _location_name: string;
  private _location_id: number;
  private _tenure: string;

  get tenure(): string {
    return this._tenure;
  }

  set tenure(value: string) {
    this._tenure = value;
  }
  get user_bio_id(): number {
    return this._user_bio_id;
  }

  set user_bio_id(value: number) {
    this._user_bio_id = value;
  }

  get userfullname(): string {
    return this._userfullname;
  }

  set userfullname(value: string) {
    this._userfullname = value;
  }

  get designation_name(): string {
    return this._designation_name;
  }

  set designation_name(value: string) {
    this._designation_name = value;
  }

  get department_name(): string {
    return this._department_name;
  }

  set department_name(value: string) {
    this._department_name = value;
  }

  get status_name(): string {
    return this._status_name;
  }

  set status_name(value: string) {
    this._status_name = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get status_id(): number {
    return this._status_id;
  }

  set status_id(value: number) {
    this._status_id = value;
  }

  get designation_id(): number {
    return this._designation_id;
  }

  set designation_id(value: number) {
    this._designation_id = value;
  }

  get department_id(): number {
    return this._department_id;
  }

  set department_id(value: number) {
    this._department_id = value;
  }

  get team_detail(): string {
    return this._team_detail;
  }

  set team_detail(value: string) {
    this._team_detail = value;
  }

  get award_id(): number {
    return this._award_id;
  }

  set award_id(value: number) {
    this._award_id = value;
  }

  get award_month(): string {
    return this._award_month;
  }

  set award_month(value: string) {
    this._award_month = value;
  }

  get present_day(): number {
    return this._present_day;
  }

  set present_day(value: number) {
    this._present_day = value;
  }

  get absent(): number {
    return this._absent;
  }

  set absent(value: number) {
    this._absent = value;
  }

  get issue_ticket(): number {
    return this._issue_ticket;
  }

  set issue_ticket(value: number) {
    this._issue_ticket = value;
  }

  get apprisal_ticket(): number {
    return this._apprisal_ticket;
  }

  set apprisal_ticket(value: number) {
    this._apprisal_ticket = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  get knockback_reason(): string {
    return this._knockback_reason;
  }

  set knockback_reason(value: string) {
    this._knockback_reason = value;
  }

  get knockback_date(): string {
    return this._knockback_date;
  }

  set knockback_date(value: string) {
    this._knockback_date = value;
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

  get user_joining_date(): string {
    return this._user_joining_date;
  }

  set user_joining_date(value: string) {
    this._user_joining_date = value;
  }

  get is_view(): number {
    return this._is_view;
  }

  set is_view(value: number) {
    this._is_view = value;
  }

  get assign_manager(): number {
    return this._assign_manager;
  }

  set assign_manager(value: number) {
    this._assign_manager = value;
  }

  get manager_name(): string {
    return this._manager_name;
  }

  set manager_name(value: string) {
    this._manager_name = value;
  }

  get user_image(): string {
    return this._user_image;
  }

  set user_image(value: string) {
    this._user_image = value;
  }

  get tl_name(): string {
    return this._tl_name;
  }

  set tl_name(value: string) {
    this._tl_name = value;
  }

  get tl(): number {
    return this._tl;
  }

  set tl(value: number) {
    this._tl = value;
  }

  get location_name(): string {
    return this._location_name;
  }

  set location_name(value: string) {
    this._location_name = value;
  }

  get location_id(): number {
    return this._location_id;
  }

  set location_id(value: number) {
    this._location_id = value;
  }
}


export class NomineeStatusLog {

  private _id: number;
  private _status_id: AwardStatus;
  private _modified_on: string;
  private _modified_by: AdminUser;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get status_id(): AwardStatus {
    return this._status_id;
  }

  set status_id(value: AwardStatus) {
    this._status_id = value;
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
}

export class AwardStatus {

  private _id: number;
  private _status_name: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get status_name(): string {
    return this._status_name;
  }

  set status_name(value: string) {
    this._status_name = value;
  }
}


export class AwardUser {
  private _absent: number;
  private _apprisal_ticket: number;
  private _created_by: string;
  private _created_on: string;
  private _department_id: number;
  private _department_name: string;
  private _designation_id: number;
  private _designation_name: string;
  private _id: number;
  private _issue_ticket: number;
  private _month: string;
  private _present_day: number;
  private _team_detail: string;
  private _user_bio_id: number;
  private _user_id: number;
  private _user_joining_date: string;
  private _userfullname: string;
  private _assign_user: number;
  private _manager_name: string;
  private _tl_name: string;
  private _tl: number;
  private _location_name: string;
  private _location_id: number;

  get absent(): number {
    return this._absent;
  }

  set absent(value: number) {
    this._absent = value;
  }

  get apprisal_ticket(): number {
    return this._apprisal_ticket;
  }

  set apprisal_ticket(value: number) {
    this._apprisal_ticket = value;
  }

  get created_by(): string {
    return this._created_by;
  }

  set created_by(value: string) {
    this._created_by = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get department_id(): number {
    return this._department_id;
  }

  set department_id(value: number) {
    this._department_id = value;
  }

  get department_name(): string {
    return this._department_name;
  }

  set department_name(value: string) {
    this._department_name = value;
  }

  get designation_id(): number {
    return this._designation_id;
  }

  set designation_id(value: number) {
    this._designation_id = value;
  }

  get designation_name(): string {
    return this._designation_name;
  }

  set designation_name(value: string) {
    this._designation_name = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get issue_ticket(): number {
    return this._issue_ticket;
  }

  set issue_ticket(value: number) {
    this._issue_ticket = value;
  }

  get month(): string {
    return this._month;
  }

  set month(value: string) {
    this._month = value;
  }

  get present_day(): number {
    return this._present_day;
  }

  set present_day(value: number) {
    this._present_day = value;
  }

  get team_detail(): string {
    return this._team_detail;
  }

  set team_detail(value: string) {
    this._team_detail = value;
  }

  get user_bio_id(): number {
    return this._user_bio_id;
  }

  set user_bio_id(value: number) {
    this._user_bio_id = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get user_joining_date(): string {
    return this._user_joining_date;
  }

  set user_joining_date(value: string) {
    this._user_joining_date = value;
  }

  get userfullname(): string {
    return this._userfullname;
  }

  set userfullname(value: string) {
    this._userfullname = value;
  }

  get assign_user(): number {
    return this._assign_user;
  }

  set assign_user(value: number) {
    this._assign_user = value;
  }

  get manager_name(): string {
    return this._manager_name;
  }

  set manager_name(value: string) {
    this._manager_name = value;
  }

  get location_name(): string {
    return this._location_name;
  }

  set location_name(value: string) {
    this._location_name = value;
  }

  get tl_name(): string {
    return this._tl_name;
  }

  set tl_name(value: string) {
    this._tl_name = value;
  }

  get tl(): number {
    return this._tl;
  }

  set tl(value: number) {
    this._tl = value;
  }

  get location_id(): number {
    return this._location_id;
  }

  set location_id(value: number) {
    this._location_id = value;
  }
}
