import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';

export class InvoiceData {
  private _invoice_no: string;
  private _net_amount: string;
  private _created_by: AdminUser;
  private _created_on: string;

  get invoice_no(): string {
    return this._invoice_no;
  }

  set invoice_no(value: string) {
    this._invoice_no = value;
  }

  get net_amount(): string {
    return this._net_amount;
  }

  set net_amount(value: string) {
    this._net_amount = value;
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
