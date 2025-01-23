export class CommonRegex {
  public static EMAIL_ADDRESS_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public static ALPHABETICS_REGEXP = '^[a-zA-Z]*$';
  public static NUMERIC_REGEXP = '^[0-9]*$';
  public static ALPHA_NUMERIC_REGEXP = '^[A-Za-z0-9]*$';
}

export class ValidationConstantMessage {
  public IS_REQUIRED = ' can not be blank.';
  public USERNAME: string = 'Username' + this.IS_REQUIRED;
  public PASSWORD: string = 'Password' + this.IS_REQUIRED;
  public EMAIL_ADDRESS: string = 'Email address' + this.IS_REQUIRED;
  public EMAIL_ADDRESS_VALID: string = 'Please enter valid email address.';
  public NEW_PASSWORD: string = 'New Password' + this.IS_REQUIRED;
  public CONFIRM_PASSWORD: string = 'Confirm Password' + this.IS_REQUIRED;
  public CONFIRM_PASSWORD_DOES_NOT_MATCH: string = 'Confirm Password does not match';
  public FIRST_NAME: string = 'First name' + this.IS_REQUIRED;
  public FIRST_NAME_VALID: string = 'Please enter valid first name';
  public LAST_NAME: string = 'Last name' + this.IS_REQUIRED;
  public LAST_NAME_VALID: string = 'Please enter valid last name';
  public BIRTHDATE: string = 'Birthdate' + this.IS_REQUIRED;
  public USER_LOGIN_NAME: string = 'User login name' + this.IS_REQUIRED;
  public BIO_TIME_ID: string = 'Bio time id' + this.IS_REQUIRED;
  public LOGIN_ACCESS: string = 'Login access' + this.IS_REQUIRED;
  public FILL_TIMESHEET: string = 'Fill timesheet' + this.IS_REQUIRED;
  public USER_WRITE: string = 'User write' + this.IS_REQUIRED;
  public USER_WRITE_VALID: string = 'Please enter valid user write';
  public SHIFT_NAME: string = 'Shift name' + this.IS_REQUIRED;
  public LEAVE_ALLOWED: string = 'Leave allowed' + this.IS_REQUIRED;
  public LOCATION: string = 'Location' + this.IS_REQUIRED;
  public DESIGNATION: string = 'Designation' + this.IS_REQUIRED;
  public TEAM: string = 'Team' + this.IS_REQUIRED;
}
