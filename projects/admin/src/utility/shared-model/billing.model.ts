import {AdminUser} from './admin-user.model';

export class Billing {
  private _id: number;
  private _entity_id: number;
  private _code: string;
  private _name: string;
  private _billing_name: string;
  private _trading_name: string;
  private _service_id: number;
  private _service_name: string;
  private _ddr_followup: number;
  private _parent_id: number;
  private _is_updated: number;
  private _inc_in_ff: number;
  private _frequency_id: number;
  private _auto_invoice: number;
  private _recurring_id: number;


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

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get billing_name(): string {
    return this._billing_name;
  }

  set billing_name(value: string) {
    this._billing_name = value;
  }

  get trading_name(): string {
    return this._trading_name;
  }

  set trading_name(value: string) {
    this._trading_name = value;
  }

  get service_id(): number {
    return this._service_id;
  }

  set service_id(value: number) {
    this._service_id = value;
  }

  get service_name(): string {
    return this._service_name;
  }

  set service_name(value: string) {
    this._service_name = value;
  }

  get ddr_followup(): number {
    return this._ddr_followup;
  }

  set ddr_followup(value: number) {
    this._ddr_followup = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }

  get is_updated(): number {
    return this._is_updated;
  }

  set is_updated(value: number) {
    this._is_updated = value;
  }

  get inc_in_ff(): number {
    return this._inc_in_ff;
  }

  set inc_in_ff(value: number) {
    this._inc_in_ff = value;
  }

  get frequency_id(): number {
    return this._frequency_id;
  }

  set frequency_id(value: number) {
    this._frequency_id = value;
  }

  get auto_invoice(): number {
    return this._auto_invoice;
  }

  set auto_invoice(value: number) {
    this._auto_invoice = value;
  }

  get recurring_id(): number {
    return this._recurring_id;
  }

  set recurring_id(value: number) {
    this._recurring_id = value;
  }
}

export class BillingBasic {
  private _code: string;
  private _name: string;
  private _billing_name: string;
  private _trading_name: string;
  private _service: string;
  private _id: number;
  private _entity_id: number;
  private _parent_id: number;
  private _contact_person: string;
  private _to_email: string;
  private _cc_email: string;
  private _address: string;
  private _notice_period: number;
  private _category_id: number;
  private _full_time_resource: number;
  private _debtor_followup: number;
  private _merge_invoice: number;
  private _merge_ff: number;
  private _payment_id: number;
  private _ddr_rec: number;
  private _card_id: number;
  private _surcharge: string;
  private _card_number: string;
  private _entity_grouptype_id: number;
  private _state_id: number;
  private _is_active: number;
  private _notes: string;
  private _bk_comment: string;
  private _payroll_comment: string;
  private _ddr_followup: number;
  private _is_related: number;
  private _created_by: AdminUser;
  private _created_on: string;
  private _service_updated: string;
  private _discontinue_stage: number;
  private _service_id: string;
  private _related_entity: string;
  private _service_array: any[];
  private _agreement_letter: string;
  private _agreement_letter_path: string;
  private _billing_from: number;

  get billing_from(): number {
    return this._billing_from;
  }

  set billing_from(value: number) {
    this._billing_from = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get billing_name(): string {
    return this._billing_name;
  }

  set billing_name(value: string) {
    this._billing_name = value;
  }

  get trading_name(): string {
    return this._trading_name;
  }

  set trading_name(value: string) {
    this._trading_name = value;
  }

  get service(): string {
    return this._service;
  }

  set service(value: string) {
    this._service = value;
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

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }

  get contact_person(): string {
    return this._contact_person;
  }

  set contact_person(value: string) {
    this._contact_person = value;
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

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get notice_period(): number {
    return this._notice_period;
  }

  set notice_period(value: number) {
    this._notice_period = value;
  }

  get category_id(): number {
    return this._category_id;
  }

  set category_id(value: number) {
    this._category_id = value;
  }

  get full_time_resource(): number {
    return this._full_time_resource;
  }

  set full_time_resource(value: number) {
    this._full_time_resource = value;
  }

  get debtor_followup(): number {
    return this._debtor_followup;
  }

  set debtor_followup(value: number) {
    this._debtor_followup = value;
  }

  get merge_invoice(): number {
    return this._merge_invoice;
  }

  set merge_invoice(value: number) {
    this._merge_invoice = value;
  }

  get merge_ff(): number {
    return this._merge_ff;
  }

  set merge_ff(value: number) {
    this._merge_ff = value;
  }

  get payment_id(): number {
    return this._payment_id;
  }

  set payment_id(value: number) {
    this._payment_id = value;
  }

  get ddr_rec(): number {
    return this._ddr_rec;
  }

  set ddr_rec(value: number) {
    this._ddr_rec = value;
  }

  get card_id(): number {
    return this._card_id;
  }

  set card_id(value: number) {
    this._card_id = value;
  }

  get surcharge(): string {
    return this._surcharge;
  }

  set surcharge(value: string) {
    this._surcharge = value;
  }

  get card_number(): string {
    return this._card_number;
  }

  set card_number(value: string) {
    this._card_number = value;
  }

  get entity_grouptype_id(): number {
    return this._entity_grouptype_id;
  }

  set entity_grouptype_id(value: number) {
    this._entity_grouptype_id = value;
  }

  get state_id(): number {
    return this._state_id;
  }

  set state_id(value: number) {
    this._state_id = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  get bk_comment(): string {
    return this._bk_comment;
  }

  set bk_comment(value: string) {
    this._bk_comment = value;
  }

  get payroll_comment(): string {
    return this._payroll_comment;
  }

  set payroll_comment(value: string) {
    this._payroll_comment = value;
  }

  get ddr_followup(): number {
    return this._ddr_followup;
  }

  set ddr_followup(value: number) {
    this._ddr_followup = value;
  }

  get is_related(): number {
    return this._is_related;
  }

  set is_related(value: number) {
    this._is_related = value;
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

  get service_updated(): string {
    return this._service_updated;
  }

  set service_updated(value: string) {
    this._service_updated = value;
  }

  get discontinue_stage(): number {
    return this._discontinue_stage;
  }

  set discontinue_stage(value: number) {
    this._discontinue_stage = value;
  }

  get service_id(): string {
    return this._service_id;
  }

  set service_id(value: string) {
    this._service_id = value;
  }

  get related_entity(): string {
    return this._related_entity;
  }

  set related_entity(value: string) {
    this._related_entity = value;
  }

  get service_array(): any[] {
    return this._service_array;
  }

  set service_array(value: any[]) {
    this._service_array = value;
  }

  get agreement_letter(): string {
    return this._agreement_letter;
  }

  set agreement_letter(value: string) {
    this._agreement_letter = value;
  }

  get agreement_letter_path(): string {
    return this._agreement_letter_path;
  }

  set agreement_letter_path(value: string) {
    this._agreement_letter_path = value;
  }
}
