import {AdminUser} from '../../../../utility/shared-model/admin-user.model';

export class DebtorsManagement {
  private _id: number;
  private _entity_id: number;
  private _code: string;
  private _billing_name: string;
  private _discontinue_stage: number;
  private _related_entity: number;
  private _related_entity_id: string;
  private _invoice_no: string;
  private _to_period: string;
  private _from_period: string;
  private _paid_amount: string;
  private _debtor_followup: number;
  private _created_by: AdminUser;
  private _outstanding_amount: string;
  private _send_date: string;
  private _due_date: string;
  private _is_fixed_fees: string;
  private _payment_id: number;
  private _service_name: string;
  private _payment_date: string;
  private _to_email: string;
  private _cc_email: string;
  private _is_button_show: number;
  private _tam_name: string;

  get tam_name(): string {
    return this._tam_name;
  }

  set tam_name(value: string) {
    this._tam_name = value;
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

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get billing_name(): string {
    return this._billing_name;
  }

  set billing_name(value: string) {
    this._billing_name = value;
  }

  get discontinue_stage(): number {
    return this._discontinue_stage;
  }

  set discontinue_stage(value: number) {
    this._discontinue_stage = value;
  }

  get related_entity(): number {
    return this._related_entity;
  }

  set related_entity(value: number) {
    this._related_entity = value;
  }

  get related_entity_id(): string {
    return this._related_entity_id;
  }

  set related_entity_id(value: string) {
    this._related_entity_id = value;
  }

  get invoice_no(): string {
    return this._invoice_no;
  }

  set invoice_no(value: string) {
    this._invoice_no = value;
  }

  get to_period(): string {
    return this._to_period;
  }

  set to_period(value: string) {
    this._to_period = value;
  }

  get from_period(): string {
    return this._from_period;
  }

  set from_period(value: string) {
    this._from_period = value;
  }

  get paid_amount(): string {
    return this._paid_amount;
  }

  set paid_amount(value: string) {
    this._paid_amount = value;
  }

  get debtor_followup(): number {
    return this._debtor_followup;
  }

  set debtor_followup(value: number) {
    this._debtor_followup = value;
  }

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }

  get outstanding_amount(): string {
    return this._outstanding_amount;
  }

  set outstanding_amount(value: string) {
    this._outstanding_amount = value;
  }

  get send_date(): string {
    return this._send_date;
  }

  set send_date(value: string) {
    this._send_date = value;
  }

  get due_date(): string {
    return this._due_date;
  }

  set due_date(value: string) {
    this._due_date = value;
  }

  get is_fixed_fees(): string {
    return this._is_fixed_fees;
  }

  set is_fixed_fees(value: string) {
    this._is_fixed_fees = value;
  }

  get payment_id(): number {
    return this._payment_id;
  }

  set payment_id(value: number) {
    this._payment_id = value;
  }

  get service_name(): string {
    return this._service_name;
  }

  set service_name(value: string) {
    this._service_name = value;
  }

  get payment_date(): string {
    return this._payment_date;
  }

  set payment_date(value: string) {
    this._payment_date = value;
  }

  get to_email(): string {
    return this._to_email;
  }

  set to_email(value: string) {
    this._to_email = value;
  }

  get cc_email(): string {
    return this._cc_email;
  }

  set cc_email(value: string) {
    this._cc_email = value;
  }

  get is_button_show(): number {
    return this._is_button_show;
  }

  set is_button_show(value: number) {
    this._is_button_show = value;
  }
}

export class DebtorsManagementComment {
  private _id: number;
  private _entity_id: number;
  private _comment: string;
  private _send_notification: number;
  private _to_mail: string;
  private _cc_mail: string;
  private _created_on: string;
  private _created_by: AdminUser;

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

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  get send_notification(): number {
    return this._send_notification;
  }

  set send_notification(value: number) {
    this._send_notification = value;
  }

  get to_mail(): string {
    return this._to_mail;
  }

  set to_mail(value: string) {
    this._to_mail = value;
  }

  get cc_mail(): string {
    return this._cc_mail;
  }

  set cc_mail(value: string) {
    this._cc_mail = value;
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
}

export class DebtorsTemplate {
  private _id: number;
  private _template_name: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get template_name(): string {
    return this._template_name;
  }

  set template_name(value: string) {
    this._template_name = value;
  }
}
