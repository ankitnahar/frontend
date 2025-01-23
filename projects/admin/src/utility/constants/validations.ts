export class CommonRegexp {
  public static NUMERIC_REGEXP = '^[0-9]*$';
  public static NUMERIC_DOT_REGEXP = '^[0-9.]*$';
  public static NUMERIC_DOT_REGEXP_LENGTH = '^[0-9]*(\.[0-9]{1,4})?$';
  public static NUMERIC_DOT_REGEXP_FIXED_LENGTH = '^[0-9]*(\.[0-9]{2,2})?$';
  public static ONLY_ALPHA_REGEXP = '^[a-zA-Z]*$';
  public static ONLY_ALPHA_SPACE_REGEXP = '^[a-zA-Z- ]*$';
  public static ONLY_ALPHA_SPACE_NUMBER_REGEXP = '^[a-zA-Z0-9- ]*$';
  public static ALPHANUMERIC_REGEXP = '^[a-zA-Z0-9]*$';
  public static ALPHANUMERIC_SPACE_REGEXP = '^[a-zA-Z0-9 ]*$';
  public static EMAIL_ADDRESS_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public static PASSWORD_REGEXP = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  public static PASSPORT_REGEXP = '^[a-zA-Z0-9]*$';
  public static SERVER_DATEFORMAT_REGEXP = '^\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])$';
}

export class ValidationMsg {
  public REQUIRED_MSG = ' required';
  public USERNAME = `Username is ${this.REQUIRED_MSG}`;
  public PASSWORD = `Password is ${this.REQUIRED_MSG}`;
  public OLD_PASSWORD = `Old password is ${this.REQUIRED_MSG}`;
  public NEW_PASSWORD = `New password is ${this.REQUIRED_MSG}`;
  public CONFIRM_PASSWORD = `Confirm password is ${this.REQUIRED_MSG}`;
  public OTP = `OTP is ${this.REQUIRED_MSG}`;
}
