import {Bank} from './bank.model';
import {BankAccount} from './bank-account.model';
import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';

export class BankInformation {
  private _id: number;
  private _entity_id: number;
  private _bank_id: Bank;
  private _type_id: BankAccount;
  private _bsb_notes: string;
  private _account_no: string;
  private _notes: string;
  private _is_bank_or_credit_card: number;
  private _bank_link: number;
  private _follow_up_notes: string;
  private _viewing_rights: number;
  private _auto_feed_up: number;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _is_active: number;

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

  get bank_id(): Bank {
    return this._bank_id;
  }

  set bank_id(value: Bank) {
    this._bank_id = value;
  }

  get type_id(): BankAccount {
    return this._type_id;
  }

  set type_id(value: BankAccount) {
    this._type_id = value;
  }

  get bsb_notes(): string {
    return this._bsb_notes;
  }

  set bsb_notes(value: string) {
    this._bsb_notes = value;
  }

  get account_no(): string {
    return this._account_no;
  }

  set account_no(value: string) {
    this._account_no = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  get is_bank_or_credit_card(): number {
    return this._is_bank_or_credit_card;
  }

  set is_bank_or_credit_card(value: number) {
    this._is_bank_or_credit_card = value;
  }

  get bank_link(): number {
    return this._bank_link;
  }

  set bank_link(value: number) {
    this._bank_link = value;
  }

  get follow_up_notes(): string {
    return this._follow_up_notes;
  }

  set follow_up_notes(value: string) {
    this._follow_up_notes = value;
  }

  get viewing_rights(): number {
    return this._viewing_rights;
  }

  set viewing_rights(value: number) {
    this._viewing_rights = value;
  }

  get auto_feed_up(): number {
    return this._auto_feed_up;
  }

  set auto_feed_up(value: number) {
    this._auto_feed_up = value;
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

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }
}
