export class QuoteMaster {
  private _id: number;
  private _is_new_entity: number;
  private _entity_id: number;
  private _discontinue_stage: number;
  private _lead_company_name: string;
  private _lead_name: string;
  private _lead_email: string;
  private _service_id: string;
  private _is_agreement_letter_sent: string;
  private _taxation_from_year: string;
  private _taxation_to_year: string;
  private _sub_service_id: string;
  private _sales_staff_id: string;
  private _created_on: string;
  private _modified_on: string;
  private _name: string;
  private _is_agreed: number;
  private _already_submit: number;
  private _notes: string;
  private _stage_id: number;
  private _taxation_advance_fee: number;
  private _bookkeeping_advance_fee: number;
  private _is_final_submit: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get is_new_entity(): number {
    return this._is_new_entity;
  }

  set is_new_entity(value: number) {
    this._is_new_entity = value;
  }

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get discontinue_stage(): number {
    return this._discontinue_stage;
  }

  set discontinue_stage(value: number) {
    this._discontinue_stage = value;
  }

  get lead_company_name(): string {
    return this._lead_company_name;
  }

  set lead_company_name(value: string) {
    this._lead_company_name = value;
  }

  get lead_name(): string {
    return this._lead_name;
  }

  set lead_name(value: string) {
    this._lead_name = value;
  }

  get lead_email(): string {
    return this._lead_email;
  }

  set lead_email(value: string) {
    this._lead_email = value;
  }

  get service_id(): string {
    return this._service_id;
  }

  set service_id(value: string) {
    this._service_id = value;
  }

  get is_agreement_letter_sent(): string {
    return this._is_agreement_letter_sent;
  }

  set is_agreement_letter_sent(value: string) {
    this._is_agreement_letter_sent = value;
  }

  get taxation_from_year(): string {
    return this._taxation_from_year;
  }

  set taxation_from_year(value: string) {
    this._taxation_from_year = value;
  }

  get taxation_to_year(): string {
    return this._taxation_to_year;
  }

  set taxation_to_year(value: string) {
    this._taxation_to_year = value;
  }

  get sub_service_id(): string {
    return this._sub_service_id;
  }

  set sub_service_id(value: string) {
    this._sub_service_id = value;
  }

  get sales_staff_id(): string {
    return this._sales_staff_id;
  }

  set sales_staff_id(value: string) {
    this._sales_staff_id = value;
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

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get is_agreed(): number {
    return this._is_agreed;
  }

  set is_agreed(value: number) {
    this._is_agreed = value;
  }

  get already_submit(): number {
    return this._already_submit;
  }

  set already_submit(value: number) {
    this._already_submit = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  get stage_id(): number {
    return this._stage_id;
  }

  set stage_id(value: number) {
    this._stage_id = value;
  }

  get taxation_advance_fee(): number {
    return this._taxation_advance_fee;
  }

  set taxation_advance_fee(value: number) {
    this._taxation_advance_fee = value;
  }

  get bookkeeping_advance_fee(): number {
    return this._bookkeeping_advance_fee;
  }

  set bookkeeping_advance_fee(value: number) {
    this._bookkeeping_advance_fee = value;
  }

  get is_final_submit(): number {
    return this._is_final_submit;
  }

  set is_final_submit(value: number) {
    this._is_final_submit = value;
  }
}
