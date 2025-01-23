export class EmployeePayroll {
  private _id: number;
  private _entity_id: number;
  private _TFN: string;
  private _first_name: string;
  private _last_name: string;
  private _middle_name: string;
  private _title: string;
  private _email: string;
  private _gender: string;
  private _date_of_birth: string;
  private _phone: string;
  private _mobile: string;
  private _start_date: string;
  private _address: string;
  private _region: string;
  private _city: string;
  private _state: string;
  private _postal_code: string;
  private _occupaction: string;
  private _annual_leave: string;
  private _sick_leave: string;
  private _employement_basic: string;
  private _residency_status: string;
  private _superannuation_fund: string;
  private _superannuation_member_number: string;
  private _pay_basic: string;
  private _overtime_rate: string;
  private _hourly_rate: string;
  private _annual_salary: string;
  private _payroll_calendar_id: string;
  private _pay_hours: string;
  private _tax_scale: string;
  private _hecs_dept: string;
  private _account_name: string;
  private _bsb_number: string;
  private _account_number: string;
  private _xero_employee_id: string;
  private _is_active: string;
  private _created_on: string;
  private _salary_wages: Array<any>;
  private _documents: Array<any>;
  private _fullname: string;
  private _payroll_calendar_name: string;
  private _employee_type: string;

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

  get TFN(): string {
    return this._TFN;
  }

  set TFN(value: string) {
    this._TFN = value;
  }

  get first_name(): string {
    return this._first_name;
  }

  set first_name(value: string) {
    this._first_name = value;
  }

  get last_name(): string {
    return this._last_name;
  }

  set last_name(value: string) {
    this._last_name = value;
  }

  get middle_name(): string {
    return this._middle_name;
  }

  set middle_name(value: string) {
    this._middle_name = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get date_of_birth(): string {
    return this._date_of_birth;
  }

  set date_of_birth(value: string) {
    this._date_of_birth = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get mobile(): string {
    return this._mobile;
  }

  set mobile(value: string) {
    this._mobile = value;
  }

  get start_date(): string {
    return this._start_date;
  }

  set start_date(value: string) {
    this._start_date = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get region(): string {
    return this._region;
  }

  set region(value: string) {
    this._region = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get postal_code(): string {
    return this._postal_code;
  }

  set postal_code(value: string) {
    this._postal_code = value;
  }

  get occupaction(): string {
    return this._occupaction;
  }

  set occupaction(value: string) {
    this._occupaction = value;
  }

  get annual_leave(): string {
    return this._annual_leave;
  }

  set annual_leave(value: string) {
    this._annual_leave = value;
  }

  get sick_leave(): string {
    return this._sick_leave;
  }

  set sick_leave(value: string) {
    this._sick_leave = value;
  }

  get employement_basic(): string {
    return this._employement_basic;
  }

  set employement_basic(value: string) {
    this._employement_basic = value;
  }

  get residency_status(): string {
    return this._residency_status;
  }

  set residency_status(value: string) {
    this._residency_status = value;
  }

  get superannuation_fund(): string {
    return this._superannuation_fund;
  }

  set superannuation_fund(value: string) {
    this._superannuation_fund = value;
  }

  get superannuation_member_number(): string {
    return this._superannuation_member_number;
  }

  set superannuation_member_number(value: string) {
    this._superannuation_member_number = value;
  }

  get pay_basic(): string {
    return this._pay_basic;
  }

  set pay_basic(value: string) {
    this._pay_basic = value;
  }

  get overtime_rate(): string {
    return this._overtime_rate;
  }

  set overtime_rate(value: string) {
    this._overtime_rate = value;
  }

  get hourly_rate(): string {
    return this._hourly_rate;
  }

  set hourly_rate(value: string) {
    this._hourly_rate = value;
  }

  get annual_salary(): string {
    return this._annual_salary;
  }

  set annual_salary(value: string) {
    this._annual_salary = value;
  }

  get payroll_calendar_id(): string {
    return this._payroll_calendar_id;
  }

  set payroll_calendar_id(value: string) {
    this._payroll_calendar_id = value;
  }

  get pay_hours(): string {
    return this._pay_hours;
  }

  set pay_hours(value: string) {
    this._pay_hours = value;
  }

  get tax_scale(): string {
    return this._tax_scale;
  }

  set tax_scale(value: string) {
    this._tax_scale = value;
  }

  get hecs_dept(): string {
    return this._hecs_dept;
  }

  set hecs_dept(value: string) {
    this._hecs_dept = value;
  }

  get account_name(): string {
    return this._account_name;
  }

  set account_name(value: string) {
    this._account_name = value;
  }

  get bsb_number(): string {
    return this._bsb_number;
  }

  set bsb_number(value: string) {
    this._bsb_number = value;
  }

  get account_number(): string {
    return this._account_number;
  }

  set account_number(value: string) {
    this._account_number = value;
  }

  get xero_employee_id(): string {
    return this._xero_employee_id;
  }

  set xero_employee_id(value: string) {
    this._xero_employee_id = value;
  }

  get is_active(): string {
    return this._is_active;
  }

  set is_active(value: string) {
    this._is_active = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get salary_wages(): Array<any> {
    return this._salary_wages;
  }

  set salary_wages(value: Array<any>) {
    this._salary_wages = value;
  }

  get documents(): Array<any> {
    return this._documents;
  }

  set documents(value: Array<any>) {
    this._documents = value;
  }

  get fullname(): string {
    return this._fullname;
  }

  set fullname(value: string) {
    this._fullname = value;
  }

  get payroll_calendar_name(): string {
    return this._payroll_calendar_name;
  }

  set payroll_calendar_name(value: string) {
    this._payroll_calendar_name = value;
  }

  get employee_type(): string {
    return this._employee_type;
  }

  set employee_type(value: string) {
    this._employee_type = value;
  }
}

export class EmployeePayRun {
  private _id: number;
  private _entity_id: number;
  private _payroll_calendar_id: string;
  private _pay_run_id: string;
  private _start_date: string;
  private _end_date: string;
  private _payrun_status: string;
  private _payment_date: string;
  private _payslip_message: string;
  private _payslips: string;
  private _wages: number;
  private _deductions: number;
  private _tax: number;
  private _super: number;
  private _reimbursement: number;
  private _net_pay: number;
  private _payroll_calendar_name: string;
  private _is_view: number;
  private _status_id: number;
  private _trading_name: string;

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

  get payroll_calendar_id(): string {
    return this._payroll_calendar_id;
  }

  set payroll_calendar_id(value: string) {
    this._payroll_calendar_id = value;
  }

  get pay_run_id(): string {
    return this._pay_run_id;
  }

  set pay_run_id(value: string) {
    this._pay_run_id = value;
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

  get payrun_status(): string {
    return this._payrun_status;
  }

  set payrun_status(value: string) {
    this._payrun_status = value;
  }

  get payment_date(): string {
    return this._payment_date;
  }

  set payment_date(value: string) {
    this._payment_date = value;
  }

  get payslip_message(): string {
    return this._payslip_message;
  }

  set payslip_message(value: string) {
    this._payslip_message = value;
  }

  get payslips(): string {
    return this._payslips;
  }

  set payslips(value: string) {
    this._payslips = value;
  }

  get wages(): number {
    return this._wages;
  }

  set wages(value: number) {
    this._wages = value;
  }

  get deductions(): number {
    return this._deductions;
  }

  set deductions(value: number) {
    this._deductions = value;
  }

  get tax(): number {
    return this._tax;
  }

  set tax(value: number) {
    this._tax = value;
  }

  get super(): number {
    return this._super;
  }

  set super(value: number) {
    this._super = value;
  }

  get reimbursement(): number {
    return this._reimbursement;
  }

  set reimbursement(value: number) {
    this._reimbursement = value;
  }

  get net_pay(): number {
    return this._net_pay;
  }

  set net_pay(value: number) {
    this._net_pay = value;
  }

  get payroll_calendar_name(): string {
    return this._payroll_calendar_name;
  }

  set payroll_calendar_name(value: string) {
    this._payroll_calendar_name = value;
  }

  get is_view(): number {
    return this._is_view;
  }

  set is_view(value: number) {
    this._is_view = value;
  }

  get status_id(): number {
    return this._status_id;
  }

  set status_id(value: number) {
    this._status_id = value;
  }

  get trading_name(): string {
    return this._trading_name;
  }

  set trading_name(value: string) {
    this._trading_name = value;
  }
}
