import {Department, Designation, OfficeLocation} from './designation.model';
import {HrShift} from './hour-shift.model';

export class AdminUser {
  private _id: number;
  private _user_bio_id: number;
  private _user_fname: string;
  private _user_lname: string;
  private _userfullname: string;
  private _user_login_name: string;
  private _zoho_login_name: string;
  private _email: string;
  private _user_birthdate: string;
  private _user_register_date: string;
  private _user_lastlogin: string;
  private _shift_id: HrShift;
  private _first_approval_user: number;
  private _second_approval_user: number;
  private _redmine_user_id: number;
  private _user_writeoff: number;
  private _user_timesheet_fillup_flag: number;
  private _writeoffstaff: number;
  private _is_active: number;
  private _leave_allow: string;
  private _consucative_leave: string;
  private _consucative_leave_date: string;
  private _location_id: OfficeLocation;
  private _user_id: number;
  private _service_id: number;
  private _team_id: string;
  private _designation_id: Designation;
  private _department_id: Department;
  private _parent_user_id: number;
  private _created_on: string;
  private _created_by: string;
  private _user_image: string;
  private _timesheet_approval_user: AdminUser;
  private _timesheet_approval: AdminUser;
  private _staff_assignin_othermodule: number;
  private _second_approval: AdminUser;
  private _first_approval: AdminUser;
  private _modified_on: string;
  private _modified_by: string;
  private _comment: string;
  private _user_joining_date: string;
  private _comment_on: string;
  private _Entity: string;
  private _user_type: number;
  private _probation_date: string;
  private _user_left_date: string;
  private _send_email: number;
  private _tenure: string;
  private _is_food: number;
  private _food_next_date: string;
  private _office_location:string

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

  get user_fname(): string {
    return this._user_fname;
  }

  set user_fname(value: string) {
    this._user_fname = value;
  }

  get user_lname(): string {
    return this._user_lname;
  }

  set user_lname(value: string) {
    this._user_lname = value;
  }

  get userfullname(): string {
    return this._userfullname;
  }

  set userfullname(value: string) {
    this._userfullname = value;
  }

  get user_login_name(): string {
    return this._user_login_name;
  }

  set user_login_name(value: string) {
    this._user_login_name = value;
  }

  get zoho_login_name(): string {
    return this._zoho_login_name;
  }

  set zoho_login_name(value: string) {
    this._zoho_login_name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get user_birthdate(): string {
    return this._user_birthdate;
  }

  set user_birthdate(value: string) {
    this._user_birthdate = value;
  }

  get user_register_date(): string {
    return this._user_register_date;
  }

  set user_register_date(value: string) {
    this._user_register_date = value;
  }

  get user_lastlogin(): string {
    return this._user_lastlogin;
  }

  set user_lastlogin(value: string) {
    this._user_lastlogin = value;
  }

  get shift_id(): HrShift {
    return this._shift_id;
  }

  set shift_id(value: HrShift) {
    this._shift_id = value;
  }

  get first_approval_user(): number {
    return this._first_approval_user;
  }

  set first_approval_user(value: number) {
    this._first_approval_user = value;
  }

  get second_approval_user(): number {
    return this._second_approval_user;
  }

  set second_approval_user(value: number) {
    this._second_approval_user = value;
  }

  get redmine_user_id(): number {
    return this._redmine_user_id;
  }

  set redmine_user_id(value: number) {
    this._redmine_user_id = value;
  }

  get user_writeoff(): number {
    return this._user_writeoff;
  }

  set user_writeoff(value: number) {
    this._user_writeoff = value;
  }

  get user_timesheet_fillup_flag(): number {
    return this._user_timesheet_fillup_flag;
  }

  set user_timesheet_fillup_flag(value: number) {
    this._user_timesheet_fillup_flag = value;
  }

  get writeoffstaff(): number {
    return this._writeoffstaff;
  }

  set writeoffstaff(value: number) {
    this._writeoffstaff = value;
  }

  get is_active(): number {
    return this._is_active;
  }

  set is_active(value: number) {
    this._is_active = value;
  }

  get leave_allow(): string {
    return this._leave_allow;
  }

  set leave_allow(value: string) {
    this._leave_allow = value;
  }

  get consucative_leave(): string {
    return this._consucative_leave;
  }

  set consucative_leave(value: string) {
    this._consucative_leave = value;
  }

  get consucative_leave_date(): string {
    return this._consucative_leave_date;
  }

  set consucative_leave_date(value: string) {
    this._consucative_leave_date = value;
  }

  get location_id(): OfficeLocation {
    return this._location_id;
  }

  set location_id(value: OfficeLocation) {
    this._location_id = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get service_id(): number {
    return this._service_id;
  }

  set service_id(value: number) {
    this._service_id = value;
  }

  get team_id(): string {
    return this._team_id;
  }

  set team_id(value: string) {
    this._team_id = value;
  }

  get designation_id(): Designation {
    return this._designation_id;
  }

  set designation_id(value: Designation) {
    this._designation_id = value;
  }

  get department_id(): Department {
    return this._department_id;
  }

  set department_id(value: Department) {
    this._department_id = value;
  }

  get parent_user_id(): number {
    return this._parent_user_id;
  }

  set parent_user_id(value: number) {
    this._parent_user_id = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get created_by(): string {
    return this._created_by;
  }

  set created_by(value: string) {
    this._created_by = value;
  }

  get user_image(): string {
    return this._user_image;
  }

  set user_image(value: string) {
    this._user_image = value;
  }

  get timesheet_approval_user(): AdminUser {
    return this._timesheet_approval_user;
  }

  set timesheet_approval_user(value: AdminUser) {
    this._timesheet_approval_user = value;
  }

  get timesheet_approval(): AdminUser {
    return this._timesheet_approval;
  }

  set timesheet_approval(value: AdminUser) {
    this._timesheet_approval = value;
  }

  get staff_assignin_othermodule(): number {
    return this._staff_assignin_othermodule;
  }

  set staff_assignin_othermodule(value: number) {
    this._staff_assignin_othermodule = value;
  }

  get second_approval(): AdminUser {
    return this._second_approval;
  }

  set second_approval(value: AdminUser) {
    this._second_approval = value;
  }

  get first_approval(): AdminUser {
    return this._first_approval;
  }

  set first_approval(value: AdminUser) {
    this._first_approval = value;
  }

  get modified_on(): string {
    return this._modified_on;
  }

  set modified_on(value: string) {
    this._modified_on = value;
  }

  get modified_by(): string {
    return this._modified_by;
  }

  set modified_by(value: string) {
    this._modified_by = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  get user_joining_date(): string {
    return this._user_joining_date;
  }

  set user_joining_date(value: string) {
    this._user_joining_date = value;
  }

  get comment_on(): string {
    return this._comment_on;
  }

  set comment_on(value: string) {
    this._comment_on = value;
  }

  get Entity(): string {
    return this._Entity;
  }

  set Entity(value: string) {
    this._Entity = value;
  }

  get user_type(): number {
    return this._user_type;
  }

  set user_type(value: number) {
    this._user_type = value;
  }

  get probation_date(): string {
    return this._probation_date;
  }

  set probation_date(value: string) {
    this._probation_date = value;
  }

  get user_left_date(): string {
    return this._user_left_date;
  }

  set user_left_date(value: string) {
    this._user_left_date = value;
  }

  get send_email(): number {
    return this._send_email;
  }

  set send_email(value: number) {
    this._send_email = value;
  }

  get tenure(): string {
    return this._tenure;
  }

  set tenure(value: string) {
    this._tenure = value;
  }

  get is_food(): number {
    return this._is_food;
  }

  set is_food(value: number) {
    this._is_food = value;
  }

  get food_next_date(): string {
    return this._food_next_date;
  }

  set food_next_date(value: string) {
    this._food_next_date = value;
  }
    
  get office_location(): string {
    return this._office_location;
  }

  set office_location(value: string) {
    this._office_location = value;
  }
}

export class Privilege {
  private _id: number;
  private _tab_name: string;
  private _parent_id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get tab_name(): string {
    return this._tab_name;
  }

  set tab_name(value: string) {
    this._tab_name = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }
}


export class UserInfoZoho {
  private _id: number;
  private _Entity: string;
  private _Contract_Fee: string;
  private _Referred_by: string;
  private _First_Name: string;
  private _Email_ID: string;
  private _Gender: string;
  private _Branch_Name: string;
  private _Employee_type: string;
  private _ApprovalStatus: string;
  private _recordId: number;
  private _States: string;
  private _Department: string;
  private _Damage_Cost_Clause_Valid_Till: string;
  private _PAN_Number: string;
  private _createdTime: string;
  private _Date_of_joining: string;
  private _Notice_Period: string;
  private _Source_of_hire: string;
  private _Service_Agreement: string;
  private _Reporting_To: string;
  private _Employee_status: string;
  private _Work_phone: string;
  private _Account_No: string;
  private _Grade: string;
  private _ownerID: number;
  private _Resignation_Date: string;
  private "_Extra_comments_on_retainment_(old)": string;
  private _Role: string;
  private _Work_location: string;
  private _Pseudo_Name: string;
  private _Experience: string;
  private _Marital_status: string;
  private _Mothers_Name: string;
  private _Name_as_per_Salary_Account: string;
  private _Level: string;
  private _Retained_Amount: string;
  private _Retainment: string;
  private _Fathers_Name: string;
  private _EmployeeID: number;
  private _Last_Name: string;
  private _Mobile_Phone: number;
  private _Name_Emergency_Contact_1: number;
  private _Permanent_Address: string;
  private _Bank: string;
  private _PINZIP_Code: string;
  private _Next_Review_Due: string;
  private _Emergency_No_1: number;
  private _Emergency_No_2: number;
  private _Name_Emergency_Contact_2: string;
  private _Secondary_Reporting_to: string;
  private _Damages_Cost: string;
  private _IFSC_Code: string;
  private _Other_Email: string;
  private _ownerName: string;
  private _From_Date: string;
  private _Incentive_Amount: string;
  private _Birth_Date: string;
  private _First_Review: string;
  private _Age: string;
  private _Designation: string;
  private _TC_of_Retention_deductionBonus: string;
  private _Location_Name: string;
  private _Title: string;
  private _Date_of_confirmation: string;
  private _Work_Location1: string;
  private _To_Date: string;
  private _Extension: string;
  private _Spouses_Name: string;
  private _Blood_Group: string;
  private _Team_Incharge: string;
  private _Total_experience: string;
  private _Family: string;
  private _Address_Line_1: string;
  private _Appointment_letter_Status: string;
  private _Address_Line_2: string;
  private _Location: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get Entity(): string {
    return this._Entity;
  }

  set Entity(value: string) {
    this._Entity = value;
  }

  get Contract_Fee(): string {
    return this._Contract_Fee;
  }

  set Contract_Fee(value: string) {
    this._Contract_Fee = value;
  }

  get Referred_by(): string {
    return this._Referred_by;
  }

  set Referred_by(value: string) {
    this._Referred_by = value;
  }

  get First_Name(): string {
    return this._First_Name;
  }

  set First_Name(value: string) {
    this._First_Name = value;
  }

  get Email_ID(): string {
    return this._Email_ID;
  }

  set Email_ID(value: string) {
    this._Email_ID = value;
  }

  get Gender(): string {
    return this._Gender;
  }

  set Gender(value: string) {
    this._Gender = value;
  }

  get Branch_Name(): string {
    return this._Branch_Name;
  }

  set Branch_Name(value: string) {
    this._Branch_Name = value;
  }

  get Employee_type(): string {
    return this._Employee_type;
  }

  set Employee_type(value: string) {
    this._Employee_type = value;
  }

  get ApprovalStatus(): string {
    return this._ApprovalStatus;
  }

  set ApprovalStatus(value: string) {
    this._ApprovalStatus = value;
  }

  get recordId(): number {
    return this._recordId;
  }

  set recordId(value: number) {
    this._recordId = value;
  }

  get States(): string {
    return this._States;
  }

  set States(value: string) {
    this._States = value;
  }

  get Department(): string {
    return this._Department;
  }

  set Department(value: string) {
    this._Department = value;
  }

  get Damage_Cost_Clause_Valid_Till(): string {
    return this._Damage_Cost_Clause_Valid_Till;
  }

  set Damage_Cost_Clause_Valid_Till(value: string) {
    this._Damage_Cost_Clause_Valid_Till = value;
  }

  get PAN_Number(): string {
    return this._PAN_Number;
  }

  set PAN_Number(value: string) {
    this._PAN_Number = value;
  }

  get createdTime(): string {
    return this._createdTime;
  }

  set createdTime(value: string) {
    this._createdTime = value;
  }

  get Date_of_joining(): string {
    return this._Date_of_joining;
  }

  set Date_of_joining(value: string) {
    this._Date_of_joining = value;
  }

  get Notice_Period(): string {
    return this._Notice_Period;
  }

  set Notice_Period(value: string) {
    this._Notice_Period = value;
  }

  get Source_of_hire(): string {
    return this._Source_of_hire;
  }

  set Source_of_hire(value: string) {
    this._Source_of_hire = value;
  }

  get Service_Agreement(): string {
    return this._Service_Agreement;
  }

  set Service_Agreement(value: string) {
    this._Service_Agreement = value;
  }

  get Reporting_To(): string {
    return this._Reporting_To;
  }

  set Reporting_To(value: string) {
    this._Reporting_To = value;
  }

  get Employee_status(): string {
    return this._Employee_status;
  }

  set Employee_status(value: string) {
    this._Employee_status = value;
  }

  get Work_phone(): string {
    return this._Work_phone;
  }

  set Work_phone(value: string) {
    this._Work_phone = value;
  }

  get Account_No(): string {
    return this._Account_No;
  }

  set Account_No(value: string) {
    this._Account_No = value;
  }

  get Grade(): string {
    return this._Grade;
  }

  set Grade(value: string) {
    this._Grade = value;
  }

  get ownerID(): number {
    return this._ownerID;
  }

  set ownerID(value: number) {
    this._ownerID = value;
  }

  get Resignation_Date(): string {
    return this._Resignation_Date;
  }

  set Resignation_Date(value: string) {
    this._Resignation_Date = value;
  }

  get "Extra_comments_on_retainment_(old)"(): string {
    return this["_Extra_comments_on_retainment_(old)"];
  }

  set "Extra_comments_on_retainment_(old)"(value: string) {
    this["_Extra_comments_on_retainment_(old)"] = value;
  }

  get Role(): string {
    return this._Role;
  }

  set Role(value: string) {
    this._Role = value;
  }

  get Work_location(): string {
    return this._Work_location;
  }

  set Work_location(value: string) {
    this._Work_location = value;
  }

  get Pseudo_Name(): string {
    return this._Pseudo_Name;
  }

  set Pseudo_Name(value: string) {
    this._Pseudo_Name = value;
  }

  get Experience(): string {
    return this._Experience;
  }

  set Experience(value: string) {
    this._Experience = value;
  }

  get Marital_status(): string {
    return this._Marital_status;
  }

  set Marital_status(value: string) {
    this._Marital_status = value;
  }

  get Mothers_Name(): string {
    return this._Mothers_Name;
  }

  set Mothers_Name(value: string) {
    this._Mothers_Name = value;
  }

  get Name_as_per_Salary_Account(): string {
    return this._Name_as_per_Salary_Account;
  }

  set Name_as_per_Salary_Account(value: string) {
    this._Name_as_per_Salary_Account = value;
  }

  get Level(): string {
    return this._Level;
  }

  set Level(value: string) {
    this._Level = value;
  }

  get Retained_Amount(): string {
    return this._Retained_Amount;
  }

  set Retained_Amount(value: string) {
    this._Retained_Amount = value;
  }

  get Retainment(): string {
    return this._Retainment;
  }

  set Retainment(value: string) {
    this._Retainment = value;
  }

  get Fathers_Name(): string {
    return this._Fathers_Name;
  }

  set Fathers_Name(value: string) {
    this._Fathers_Name = value;
  }

  get EmployeeID(): number {
    return this._EmployeeID;
  }

  set EmployeeID(value: number) {
    this._EmployeeID = value;
  }

  get Last_Name(): string {
    return this._Last_Name;
  }

  set Last_Name(value: string) {
    this._Last_Name = value;
  }

  get Mobile_Phone(): number {
    return this._Mobile_Phone;
  }

  set Mobile_Phone(value: number) {
    this._Mobile_Phone = value;
  }

  get Name_Emergency_Contact_1(): number {
    return this._Name_Emergency_Contact_1;
  }

  set Name_Emergency_Contact_1(value: number) {
    this._Name_Emergency_Contact_1 = value;
  }

  get Permanent_Address(): string {
    return this._Permanent_Address;
  }

  set Permanent_Address(value: string) {
    this._Permanent_Address = value;
  }

  get Bank(): string {
    return this._Bank;
  }

  set Bank(value: string) {
    this._Bank = value;
  }

  get PINZIP_Code(): string {
    return this._PINZIP_Code;
  }

  set PINZIP_Code(value: string) {
    this._PINZIP_Code = value;
  }

  get Next_Review_Due(): string {
    return this._Next_Review_Due;
  }

  set Next_Review_Due(value: string) {
    this._Next_Review_Due = value;
  }

  get Emergency_No_1(): number {
    return this._Emergency_No_1;
  }

  set Emergency_No_1(value: number) {
    this._Emergency_No_1 = value;
  }

  get Emergency_No_2(): number {
    return this._Emergency_No_2;
  }

  set Emergency_No_2(value: number) {
    this._Emergency_No_2 = value;
  }

  get Name_Emergency_Contact_2(): string {
    return this._Name_Emergency_Contact_2;
  }

  set Name_Emergency_Contact_2(value: string) {
    this._Name_Emergency_Contact_2 = value;
  }

  get Secondary_Reporting_to(): string {
    return this._Secondary_Reporting_to;
  }

  set Secondary_Reporting_to(value: string) {
    this._Secondary_Reporting_to = value;
  }

  get Damages_Cost(): string {
    return this._Damages_Cost;
  }

  set Damages_Cost(value: string) {
    this._Damages_Cost = value;
  }

  get IFSC_Code(): string {
    return this._IFSC_Code;
  }

  set IFSC_Code(value: string) {
    this._IFSC_Code = value;
  }

  get Other_Email(): string {
    return this._Other_Email;
  }

  set Other_Email(value: string) {
    this._Other_Email = value;
  }

  get ownerName(): string {
    return this._ownerName;
  }

  set ownerName(value: string) {
    this._ownerName = value;
  }

  get From_Date(): string {
    return this._From_Date;
  }

  set From_Date(value: string) {
    this._From_Date = value;
  }

  get Incentive_Amount(): string {
    return this._Incentive_Amount;
  }

  set Incentive_Amount(value: string) {
    this._Incentive_Amount = value;
  }

  get Birth_Date(): string {
    return this._Birth_Date;
  }

  set Birth_Date(value: string) {
    this._Birth_Date = value;
  }

  get First_Review(): string {
    return this._First_Review;
  }

  set First_Review(value: string) {
    this._First_Review = value;
  }

  get Age(): string {
    return this._Age;
  }

  set Age(value: string) {
    this._Age = value;
  }

  get Designation(): string {
    return this._Designation;
  }

  set Designation(value: string) {
    this._Designation = value;
  }

  get TC_of_Retention_deductionBonus(): string {
    return this._TC_of_Retention_deductionBonus;
  }

  set TC_of_Retention_deductionBonus(value: string) {
    this._TC_of_Retention_deductionBonus = value;
  }

  get Location_Name(): string {
    return this._Location_Name;
  }

  set Location_Name(value: string) {
    this._Location_Name = value;
  }

  get Title(): string {
    return this._Title;
  }

  set Title(value: string) {
    this._Title = value;
  }

  get Date_of_confirmation(): string {
    return this._Date_of_confirmation;
  }

  set Date_of_confirmation(value: string) {
    this._Date_of_confirmation = value;
  }

  get Work_Location1(): string {
    return this._Work_Location1;
  }

  set Work_Location1(value: string) {
    this._Work_Location1 = value;
  }

  get To_Date(): string {
    return this._To_Date;
  }

  set To_Date(value: string) {
    this._To_Date = value;
  }

  get Extension(): string {
    return this._Extension;
  }

  set Extension(value: string) {
    this._Extension = value;
  }

  get Spouses_Name(): string {
    return this._Spouses_Name;
  }

  set Spouses_Name(value: string) {
    this._Spouses_Name = value;
  }

  get Blood_Group(): string {
    return this._Blood_Group;
  }

  set Blood_Group(value: string) {
    this._Blood_Group = value;
  }

  get Team_Incharge(): string {
    return this._Team_Incharge;
  }

  set Team_Incharge(value: string) {
    this._Team_Incharge = value;
  }

  get Total_experience(): string {
    return this._Total_experience;
  }

  set Total_experience(value: string) {
    this._Total_experience = value;
  }

  get Family(): string {
    return this._Family;
  }

  set Family(value: string) {
    this._Family = value;
  }

  get Address_Line_1(): string {
    return this._Address_Line_1;
  }

  set Address_Line_1(value: string) {
    this._Address_Line_1 = value;
  }

  get Appointment_letter_Status(): string {
    return this._Appointment_letter_Status;
  }

  set Appointment_letter_Status(value: string) {
    this._Appointment_letter_Status = value;
  }

  get Address_Line_2(): string {
    return this._Address_Line_2;
  }

  set Address_Line_2(value: string) {
    this._Address_Line_2 = value;
  }

  get Location(): string {
    return this._Location;
  }

  set Location(value: string) {
    this._Location = value;
  }
}
