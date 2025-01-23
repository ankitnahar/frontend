import {AdminUser} from '../../../../utility/shared-model/admin-user.model';

export class DiscontinueEntity {
  private _code: string;
  private _trading_name: string;
  private _contract_signed_date: string;
  private _id: number;
  private _entity_id: number;
  private _problem_our_side: number;
  private _discontinue_comment: string;
  private _discontinue_comment_by_qc: string;
  private _discontinue_comment_by_sales: string;
  private _status: Status;
  private _discontinue_by: AdminUser;
  private _discontinue_on: string;
  private _stage: Stage;
  private _ffAmount: number;
  private _totalRevenue: number;
  private _lastfyRevanue: number;
  private _lastthreeinvoiceRevanue: number;
  private _technical_account_manager: string;
  private _clickedStage: any[];
  private _modified_by: AdminUser;
  private _modified_on: string;
  private _parent_id: number;
  private _parent_name: string;

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get trading_name(): string {
    return this._trading_name;
  }

  set trading_name(value: string) {
    this._trading_name = value;
  }

  get contract_signed_date(): string {
    return this._contract_signed_date;
  }

  set contract_signed_date(value: string) {
    this._contract_signed_date = value;
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

  get problem_our_side(): number {
    return this._problem_our_side;
  }

  set problem_our_side(value: number) {
    this._problem_our_side = value;
  }

  get discontinue_comment(): string {
    return this._discontinue_comment;
  }

  set discontinue_comment(value: string) {
    this._discontinue_comment = value;
  }

  get discontinue_comment_by_qc(): string {
    return this._discontinue_comment_by_qc;
  }

  set discontinue_comment_by_qc(value: string) {
    this._discontinue_comment_by_qc = value;
  }

  get discontinue_comment_by_sales(): string {
    return this._discontinue_comment_by_sales;
  }

  set discontinue_comment_by_sales(value: string) {
    this._discontinue_comment_by_sales = value;
  }

  get status(): Status {
    return this._status;
  }

  set status(value: Status) {
    this._status = value;
  }

  get discontinue_by(): AdminUser {
    return this._discontinue_by;
  }

  set discontinue_by(value: AdminUser) {
    this._discontinue_by = value;
  }

  get discontinue_on(): string {
    return this._discontinue_on;
  }

  set discontinue_on(value: string) {
    this._discontinue_on = value;
  }

  get stage(): Stage {
    return this._stage;
  }

  set stage(value: Stage) {
    this._stage = value;
  }

  get ffAmount(): number {
    return this._ffAmount;
  }

  set ffAmount(value: number) {
    this._ffAmount = value;
  }

  get totalRevenue(): number {
    return this._totalRevenue;
  }

  set totalRevenue(value: number) {
    this._totalRevenue = value;
  }

  get lastfyRevanue(): number {
    return this._lastfyRevanue;
  }

  set lastfyRevanue(value: number) {
    this._lastfyRevanue = value;
  }

  get lastthreeinvoiceRevanue(): number {
    return this._lastthreeinvoiceRevanue;
  }

  set lastthreeinvoiceRevanue(value: number) {
    this._lastthreeinvoiceRevanue = value;
  }

  get technical_account_manager(): string {
    return this._technical_account_manager;
  }

  set technical_account_manager(value: string) {
    this._technical_account_manager = value;
  }

  get clickedStage(): any[] {
    return this._clickedStage;
  }

  set clickedStage(value: any[]) {
    this._clickedStage = value;
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

  get parent_name(): string {
    return this._parent_name;
  }

  set parent_name(value: string) {
    this._parent_name = value;
  }
}

export class Stage {
  private _id: number;
  private _stage: string;
  private _visible: number;
  private _is_active: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get stage(): string {
    return this._stage;
  }

  set stage(value: string) {
    this._stage = value;
  }

  get visible(): number {
    return this._visible;
  }

  set visible(value: number) {
    this._visible = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }
}

export class Status {
  private _id: number;
  private _status: string;
  private _visible: number;
  private _is_active: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get visible(): number {
    return this._visible;
  }

  set visible(value: number) {
    this._visible = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }
}
