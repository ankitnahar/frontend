import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';

export class Timesheet {
  private _id: number;
  private _user_bio_id: number;
  private _userfullname: string;
  private _entity_name: string;
  private _master: string;
  private _master_id: number;
  private _task: string;
  private _task_id: number;
  private _subactivity_full_name: string;
  private _start_date: string;
  private _end_date: string;
  private _frequency_name: string;
  private _hr_detail_id: number;
  private _worksheet_id: number;
  private _service_id: number;
  private _entity_id: number;
  private _user_id: number;
  private _worksheet_frequency_id: number;
  private _frequency_id: number;
  private _subactivity_code: number;
  private _date: string;
  private _start_time: string;
  private _end_time: string;
  private _units: number;
  private _notes: string;
  private _bank_cc_name: string;
  private _bank_cc_account_no: string;
  private _period_startdate: string;
  private _period_enddate: string;
  private _extra_value: number;
  private _no_of_value: number;
  private _name_of_employee: string;
  private _billing_status: number;
  private _payroll_option_id: number;
  private _invoice_id: number;
  private _invoice_desc: string;
  private _invoice_amt: number;
  private _invoice_created: string;
  private _carry_forward_invoice_ids: string;
  private _review_subcode: number;
  private _reviewer_id: number;
  private _is_reviewed: number;
  private _subclient_id: number;
  private _related_subactivity_id: number;
  private _related_worksheet_id: number;
  private _bk_flag_for_checklist: number;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _parent_id: number;
  private _parent_name: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
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

  get entity_name(): string {
    return this._entity_name;
  }

  set entity_name(value: string) {
    this._entity_name = value;
  }

  get master(): string {
    return this._master;
  }

  set master(value: string) {
    this._master = value;
  }

  get master_id(): number {
    return this._master_id;
  }

  set master_id(value: number) {
    this._master_id = value;
  }

  get task(): string {
    return this._task;
  }

  set task(value: string) {
    this._task = value;
  }

  get task_id(): number {
    return this._task_id;
  }

  set task_id(value: number) {
    this._task_id = value;
  }

  get subactivity_full_name(): string {
    return this._subactivity_full_name;
  }

  set subactivity_full_name(value: string) {
    this._subactivity_full_name = value;
  }

  get start_date(): string {
    return this._start_date;
  }

  set start_date(value: string) {
    this._start_date = value;
  }

  get end_date(): string {
    return this._end_date;
  }

  set end_date(value: string) {
    this._end_date = value;
  }

  get frequency_name(): string {
    return this._frequency_name;
  }

  set frequency_name(value: string) {
    this._frequency_name = value;
  }

  get hr_detail_id(): number {
    return this._hr_detail_id;
  }

  set hr_detail_id(value: number) {
    this._hr_detail_id = value;
  }

  get worksheet_id(): number {
    return this._worksheet_id;
  }

  set worksheet_id(value: number) {
    this._worksheet_id = value;
  }

  get service_id(): number {
    return this._service_id;
  }

  set service_id(value: number) {
    this._service_id = value;
  }

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get worksheet_frequency_id(): number {
    return this._worksheet_frequency_id;
  }

  set worksheet_frequency_id(value: number) {
    this._worksheet_frequency_id = value;
  }

  get frequency_id(): number {
    return this._frequency_id;
  }

  set frequency_id(value: number) {
    this._frequency_id = value;
  }

  get subactivity_code(): number {
    return this._subactivity_code;
  }

  set subactivity_code(value: number) {
    this._subactivity_code = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get start_time(): string {
    return this._start_time;
  }

  set start_time(value: string) {
    this._start_time = value;
  }

  get end_time(): string {
    return this._end_time;
  }

  set end_time(value: string) {
    this._end_time = value;
  }

  get units(): number {
    return this._units;
  }

  set units(value: number) {
    this._units = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  get bank_cc_name(): string {
    return this._bank_cc_name;
  }

  set bank_cc_name(value: string) {
    this._bank_cc_name = value;
  }

  get bank_cc_account_no(): string {
    return this._bank_cc_account_no;
  }

  set bank_cc_account_no(value: string) {
    this._bank_cc_account_no = value;
  }

  get period_startdate(): string {
    return this._period_startdate;
  }

  set period_startdate(value: string) {
    this._period_startdate = value;
  }

  get period_enddate(): string {
    return this._period_enddate;
  }

  set period_enddate(value: string) {
    this._period_enddate = value;
  }

  get extra_value(): number {
    return this._extra_value;
  }

  set extra_value(value: number) {
    this._extra_value = value;
  }

  get no_of_value(): number {
    return this._no_of_value;
  }

  set no_of_value(value: number) {
    this._no_of_value = value;
  }

  get name_of_employee(): string {
    return this._name_of_employee;
  }

  set name_of_employee(value: string) {
    this._name_of_employee = value;
  }

  get billing_status(): number {
    return this._billing_status;
  }

  set billing_status(value: number) {
    this._billing_status = value;
  }

  get payroll_option_id(): number {
    return this._payroll_option_id;
  }

  set payroll_option_id(value: number) {
    this._payroll_option_id = value;
  }

  get invoice_id(): number {
    return this._invoice_id;
  }

  set invoice_id(value: number) {
    this._invoice_id = value;
  }

  get invoice_desc(): string {
    return this._invoice_desc;
  }

  set invoice_desc(value: string) {
    this._invoice_desc = value;
  }

  get invoice_amt(): number {
    return this._invoice_amt;
  }

  set invoice_amt(value: number) {
    this._invoice_amt = value;
  }

  get invoice_created(): string {
    return this._invoice_created;
  }

  set invoice_created(value: string) {
    this._invoice_created = value;
  }

  get carry_forward_invoice_ids(): string {
    return this._carry_forward_invoice_ids;
  }

  set carry_forward_invoice_ids(value: string) {
    this._carry_forward_invoice_ids = value;
  }

  get review_subcode(): number {
    return this._review_subcode;
  }

  set review_subcode(value: number) {
    this._review_subcode = value;
  }

  get reviewer_id(): number {
    return this._reviewer_id;
  }

  set reviewer_id(value: number) {
    this._reviewer_id = value;
  }

  get is_reviewed(): number {
    return this._is_reviewed;
  }

  set is_reviewed(value: number) {
    this._is_reviewed = value;
  }

  get subclient_id(): number {
    return this._subclient_id;
  }

  set subclient_id(value: number) {
    this._subclient_id = value;
  }

  get related_subactivity_id(): number {
    return this._related_subactivity_id;
  }

  set related_subactivity_id(value: number) {
    this._related_subactivity_id = value;
  }

  get related_worksheet_id(): number {
    return this._related_worksheet_id;
  }

  set related_worksheet_id(value: number) {
    this._related_worksheet_id = value;
  }

  get bk_flag_for_checklist(): number {
    return this._bk_flag_for_checklist;
  }

  set bk_flag_for_checklist(value: number) {
    this._bk_flag_for_checklist = value;
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
