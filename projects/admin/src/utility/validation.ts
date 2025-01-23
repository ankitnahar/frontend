export class CommonRegex {
  public static EMAIL_ADDRESS_REGEXP =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public static ALPHABETICS_REGEXP = "^[a-zA-Z ]*$";
  public static NAME_REGEXP = "[a-zA-Z]+(?:(?:. |['/ ])[a-zA-Z]+)*";
  public static NUMERIC_REGEXP = "^[0-9]*$";
  public static ALPHA_NUMERIC_REGEXP = "^[A-Za-z0-9]*$";
  public static ALPHABETICS_REGEXP_WITH_SPACE = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
  public static MULTIPLE_EMAIL_ADDRESS_REGEXP =
    /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;,.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*$/;
  public static ABN_NUMBER_REGEXP = /^(?:\d-?\d{10}|\d(?:[ \.]?\d){10})$/;
  public static FLOAT_NUMBER_REGEXP = /^(?=.)([+-]?([0-9]*)(\.([0-9]+))?)$/;
  public static FLOAT_NUMBER_REGEXP_WITHOUT_ZERO = /^(?=.)[+-]?(([1-9][0-9]*)+([.][0-9][0-9])?)$/;
  public static NOT_ALLOWED_FIRST_ZERO_NUMBER_REGEXP = "^[1-9][0-9]*$";
  public static NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP = "^[^\\s]+(\\s+[^\\s]+)*$";
  public static WEBSITE =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  public static RATING_ALLOWED_ONLY_TWO_DECIMER = "^([1-5]\\d*|0)(\\.\\d+)?$";
  public static FLOAT_RATING_ALLOWED_NUMBER_REGEXP_WITHOUT_ZERO = /^(?=.)[+-]?(([0-5]{1})([.][0-9])?)$/;
  public static RATING_ALLOWED_ONLY_FIVE = /^([1-4]{1}(\.\d{1})?|5(.0{1,2})?)$/;
  public static FILE_NAME_VALIDATE = "(.+?)(\\.[^.]*$|$)";
}

export class ValidationConstantMessage {
  public IS_REQUIRED = " can not be blank.";
  public USERNAME: string = "Username" + this.IS_REQUIRED;
  public PASSWORD: string = "Password" + this.IS_REQUIRED;
  public EMAIL_ADDRESS: string = "Email address" + this.IS_REQUIRED;
  public EMAIL_ADDRESS_VALID: string = "Please enter valid email address.";
  public NEW_PASSWORD: string = "New Password" + this.IS_REQUIRED;
  public CONFIRM_PASSWORD: string = "Confirm Password" + this.IS_REQUIRED;
  public CONFIRM_PASSWORD_DOES_NOT_MATCH: string = "Confirm Password does not match";
  public FIRST_NAME: string = "First name" + this.IS_REQUIRED;
  public FIRST_NAME_VALID: string = "Please enter valid first name";
  public LAST_NAME: string = "Last name" + this.IS_REQUIRED;
  public LAST_NAME_VALID: string = "Please enter valid last name";
  public MIDDLE_NAME_VALID: string = "Please enter valid middle name";
  public BIRTHDATE: string = "Birthdate" + this.IS_REQUIRED;
  public USER_LOGIN_NAME: string = "User login name" + this.IS_REQUIRED;
  public BIO_TIME_ID: string = "Bio time id" + this.IS_REQUIRED;
  public LOGIN_ACCESS: string = "Login access" + this.IS_REQUIRED;
  public FILL_TIMESHEET: string = "Fill timesheet" + this.IS_REQUIRED;
  public SEND_EMAIL: string = "Send email" + this.IS_REQUIRED;
  public USER_WRITE: string = "User write" + this.IS_REQUIRED;
  public USER_WRITE_VALID: string = "Please enter valid user write";
  public SHIFT_NAME: string = "Shift name" + this.IS_REQUIRED;
  public LEAVE_ALLOWED: string = "Leave allowed" + this.IS_REQUIRED;
  public LOCATION: string = "Location" + this.IS_REQUIRED;
  public DESIGNATION: string = "Designation" + this.IS_REQUIRED;
  public DEPARTMENT: string = "Department" + this.IS_REQUIRED;
  public FIRST_APPROVAL: string = "First approval person is " + this.IS_REQUIRED;
  public TIMESHEET_APPROVAL: string = "Missed timesheet approval person is " + this.IS_REQUIRED;
  public TEAM: string = "Team" + this.IS_REQUIRED;
  public LEAVE_TYPE: string = "Leave type" + this.IS_REQUIRED;
  public DATE: string = "Date" + this.IS_REQUIRED;
  public TIME: string = "Time" + this.IS_REQUIRED;
  public INFORMED_TEAM_THIS_LEAVE: string = "Informed team this leave" + this.IS_REQUIRED;
  public DUE_LEAVE: string = "Due leave" + this.IS_REQUIRED;
  public WEEKEND_TASK_LIST: string = "Weekend task list" + this.IS_REQUIRED;
  public COMMENTS: string = "Comment" + this.IS_REQUIRED;
  public INFORMED: string = "Informed" + this.IS_REQUIRED;
  public PENDING_DETAILS: string = "Pending Details" + this.IS_REQUIRED;
  public HOLIDAY_WORKING: string = "Holiday Working" + this.IS_REQUIRED;
  public LATE_SITTING_REASONG: string = "Late sitting reason" + this.IS_REQUIRED;
  public YEAR_REQUIRED: string = "Year" + this.IS_REQUIRED;
  public NUMBER_VALID: string = "Must be enter number";
  public CLIENET_NAME_REQUIRED: string = "Client Name" + this.IS_REQUIRED;
  public DOCUMENT_REQUIRED: string = "Document " + this.IS_REQUIRED;
  public NOTE_REQUIRED: string = "Note" + this.IS_REQUIRED;
  public DATE_REQUIRED: string = "Date" + this.IS_REQUIRED;
  public BCC_REQUIRED: string = "Bcc" + this.IS_REQUIRED;
  public JOIN_DATE_REQUIRED: string = "Joining Date" + this.IS_REQUIRED;
  public USER_TYPE_REQUIRED: string = "User type" + this.IS_REQUIRED;
  public PROBATION_REQUIRED: string = "Probation date" + this.IS_REQUIRED;
  public LEAVE_BALANCE_REQUIRED: string = "Leave Balance" + this.IS_REQUIRED;
  public LEAVE_LA_REQUIRED: string = "LA" + this.IS_REQUIRED;
  public LEAVE_CL_REQUIRED: string = "CL" + this.IS_REQUIRED;
  public LEAVE_CO_REQUIRED: string = "CO" + this.IS_REQUIRED;
  public CLIENT_DASHBOARD_SHOW_REQUIRED: string = "Holiday client side status " + this.IS_REQUIRED;

  /*Add contact form*/
  public TRADING_NAME: string = "Select trading name";
  public SERVICE_REQUIRED: string = "Service" + this.IS_REQUIRED;
  public SERVICE_VALID: string = "Please enter valid person name";
  public POSITION: string = "Select Position";
  public PERSON_NAME_REQUIRED: string = "Person name" + this.IS_REQUIRED;
  public PERSON_NAME_VALID: string = "Please enter valid person name";
  public TO_REQUIRED: string = "To email" + this.IS_REQUIRED;
  public REASON_REQUIRED: string = "Reason" + this.IS_REQUIRED;
  public DISPLAY_INBK_CHECKLIST: string = "Select BK Checklist";
  public SEND_NEWSLETTER: string = "Select Newsletter";
  public IS_LOGIN_REQUIRED: string = "Select Client login";

  /*Add address form*/
  public ADDRESS_TYPE: string = "Type" + this.IS_REQUIRED;
  public ADDRESS_REQUIRED: string = "Address" + this.IS_REQUIRED;
  public COMPANY_REQUIRED: string = "Company name " + this.IS_REQUIRED;
  public REPRESENTATIVE_REQUIRED: string = "Represantative name " + this.IS_REQUIRED;
  public BILLING_START_DATE_REQUIRED: string = "Billing start date " + this.IS_REQUIRED;

  public STATE_REQUIRED: string = "Please select state";

  // image validation
  public VALID_THREE_MB_IMAGE_SIZE: string = "Document should be less than 3 MB";
  public VALID_TEINTY_FIVE_MB_IMAGE_SIZE: string = "Document should be less than 25 MB";
  public VALID_IMAGE_TYPE: string = "Document should be jpeg/jpg/png/csv/excel/word/pdf/text/zip file.";
  public VALID_DOCUMENT_TYPE: string = "Document should be jpeg/jpg/png/csv/excel/word/pdf/text/aba file.";
  public VALID_USI: string = "Please enter valid USI Number.";

  /*Bank information forms*/
  public BANK_NAME: string = "Select Bank name";
  public BANK_TYPE: string = "Select Bank type";
  public AUTO_FEED: string = "Select auto feed";
  public VIEW_RIGHTS: string = "Select viewing rights";
  public ACCOUNT_TYPE: string = "Select Account type";
  public ACCOUNT_NO: string = "Account no" + this.IS_REQUIRED;
  public ACCOUNT_NO_VALID = "Account Number is not valid.";
  public BANK_NAME_REQUIRED: string = "Bank name" + this.IS_REQUIRED;
  public BANK_COMMENT_REQUIRED: string = "Comment" + this.IS_REQUIRED;
  public ACCOUNT_TYPE_REQUIRED: string = "Account type" + this.IS_REQUIRED;

  // Special notes
  public SPECIAL_NOTES: string = "Special note" + this.IS_REQUIRED;
  public NOTE_TYPE: string = "Note type" + this.IS_REQUIRED;
  public EXPIRY_DATE: string = "Expiry date" + this.IS_REQUIRED;

  // Client checklist
  public CHECKLIST_NAME: string = "Please select checklist name";
  public GROUP: string = "Please select group";
  public QUESTION_REQUIRED: string = "Question" + this.IS_REQUIRED;
  public QUESTION_VALID = "Question is not valid.";
  public HELP_TEXT_VALID = "Help Text is not valid.";
  public QUESTION_TYPE_REQUIRED: string = "Question Type" + this.IS_REQUIRED;

  // Main tabs
  public BILLING_NAME_REQUIRED: string = "Billing name" + this.IS_REQUIRED;
  public LEGAL_NAME_REQUIRED: string = "Legal name" + this.IS_REQUIRED;
  public TRADING_NAME_REQUIRED: string = "Trading name" + this.IS_REQUIRED;
  public CONTRACT_DATE_REQUIRED: string = "Contract Signed Date" + this.IS_REQUIRED;
  public BUDGETED_UNIT_REQUIRED: string = "Reviewer budgeted unit" + this.IS_REQUIRED;
  public BUDGETED_UNIT_VALID = "Reviewer budgeted unit is not valid.";
  public BUDGETED_UNIT_LENGTH: string = "Length must be 3 digit";
  public CLIENT_WRITE_REQUIRED: string = "Client write off" + this.IS_REQUIRED;

  /**
   *Permanent Info
   */
  public ABN_NUMBER_REQUIRED: string = "ABN Number" + this.IS_REQUIRED;
  public ABN_NUMBER_VALID: string = "Must be enter number";
  public ABN_NUMBER_LENGTH: string = "Length must be 11";
  public CONTACT_PERSON_REQUIRED: string = "Contact Person" + this.IS_REQUIRED;
  public IS_FEEDBACK_CONTACT_REQUIRED: string = "Feedback contact" + this.IS_REQUIRED;
  public FEEDBACK_CONTACT_EMAIL_REQUIRED: string = "Feedback contact email" + this.IS_REQUIRED;
  public FEEDBACK_CONTACT_EMAIL_VAILD: string = "Feedback contact email is invalid";
  // public CONTACT_PERSON_VALID: string = 'Only alphabets are allowed';
  public CONTACT_PERSON_VALID: string = "Contact Person name is invalid";
  public PHONE_NUMBER_REQUIRED: string = "Phone Number" + this.IS_REQUIRED;
  public PHONE_NUMBER_VALID: string = "Phone number is invalid";
  public MOBILE_NUMBER_REQUIRED: string = "Mobile number" + this.IS_REQUIRED;
  public MOBILE_NUMBER_VALID: string = "Mobile number is invalid";
  public MOBILE_NUMBER_VALID_LENGTH: string = "Mobile number must be 11 digit";
  public FAX_NUMBER_VALID: string = "Fax number is invalid";
  public FAX_NUMBER_VALID_LENGTH: string = "Fax number must be 13 digit";
  public OFFICE_NUMBER_VALID: string = "Office number is invalid";
  public OFFICE_NUMBER_VALID_LENGTH: string = "Office number must be 13 digit";
  public SERVICES_REQUIRED: string = "Services" + this.IS_REQUIRED;
  public SALES_PERSON_REQUIRED: string = "Sales person" + this.IS_REQUIRED;
  public SALES_PERSON_VALID: string = "Please select sales person";
  public BUSINESS_DETAILS_REQUIRED: string = "Business Details" + this.IS_REQUIRED;
  public BUSINESS_DETAILS_VALID: string = "Only alphabets are allowed";
  public PAREN_ENTITY_REQUIRED: string = "Parent Entity" + this.IS_REQUIRED;

  /**
   * Client Management call
   */
  public CALL_DETAILS_REQUIRED: string = "Call Details" + this.IS_REQUIRED;
  public ABN_BRANCH_CODE_REQUIRED: string = "ABN Branch Code" + this.IS_REQUIRED;
  public ABN_BRANCH_CODE_VALID: string = "Must be enter number";
  public ABN_BRANCH_CODE_LENGTH: string = "Length must be min 1 and max 3";
  public TFN_NUMBER_REQUIRED: string = "TFN Number" + this.IS_REQUIRED;
  public TFN_NUMBER_VALID: string = "Must be enter number";
  public WEBSITE_VALID: string = "Website is invalid";
  public XERO_EMAIL_ID_VALID: string = "Email id is invalid";
  public CLIENT_LINK_VALID: string = "Client document link is invalid";

  /**
   * client - feedback call
   */
  public PERSON_CONTACTED_REQUIRED: string = "Person Contacted" + this.IS_REQUIRED;
  public FEEDBACK_CALL_STATUS_REQUIRED: string = "Feedback Call Status" + this.IS_REQUIRED;
  public RESPONSES_ARE_REQUIRED: string = "Responses are Received" + this.IS_REQUIRED;
  public CLARITY_OF_TAM_REQUIRED: string = "Communication Clarity" + this.IS_REQUIRED;
  public DELIVERABLES_REQUESTS_REQUIRED: string = "Requests/Report" + this.IS_REQUIRED;
  public REPORTS_ACCURACY_REQUIRED: string = "Reports accuracy" + this.IS_REQUIRED;

  public CALL_TYPE_REQUIRED: string = "Call Type" + this.IS_REQUIRED;
  public FEEDBACK_TYPE_REQUIRED: string = "Feedback Reason " + this.IS_REQUIRED;
  public FINANCE_YEAR_REQUIRED: string = "Finance Year" + this.IS_REQUIRED;

  public RATING_VALID: string = "Please enter valid rating.";
  public RATING_REQUIRED: string = "Rating" + this.IS_REQUIRED;
  public TEAM_NEED_ACTION_REQUIRED: string = "Team Action" + this.IS_REQUIRED;
  /**
   * Client - Dynamic Group Field
   */
  public ENTITY_GROUP_REQUIRED: string = "Entity Group" + this.IS_REQUIRED;
  public ENTITY_GROUP_VALID: string = "Please enter valid Entity Group";
  /**
   * Client - Dynamic Group
   */
  public FIELD_NAME_REQUIRED: string = "Field Name" + this.IS_REQUIRED;
  public FIELD_GROUP_REQUIRED: string = "Field Group" + this.IS_REQUIRED;
  public FIELD_TYPE_REQUIRED: string = "Field Type" + this.IS_REQUIRED;
  public PARENT_FIELD_REQUIRED: string = "Parent Field" + this.IS_REQUIRED;
  /**
   * Worksheet Quick action
   */
  public USERNAME_REQUIRED: string = "User Name" + this.IS_REQUIRED;
  public ADD_IN_OUT_REQUIRED: string = "Add InOut" + this.IS_REQUIRED;

  // worksheet Hierarchy MasterActivity
  public MASTER_ACTIVITY_REQUIRED: string = "Master Activity" + this.IS_REQUIRED;
  public MASTER_CHECKLIST_VALID = "Master Checklist is not valid";
  public MASTER_CHECKLIST_REQUIRED: string = "Master Checklist" + this.IS_REQUIRED;
  public CHECKLIST_GROUP_REQUIRED: string = "Checklist Group" + this.IS_REQUIRED;
  public CHECKLIST_GROUP_VALID = "Checklist Group is invalid.";
  public EMAIL_CONTENT_VALID = "Email content is invalid.";
  // worksheet Hierarchy Sub activity
  public TASK_REQUIRED: string = "Task " + this.IS_REQUIRED;
  public TASK_CRITICAL_REQUIRED: string = "Critical Task " + this.IS_REQUIRED;
  public TASK_VALID = "Task is invalid.";
  public SUB_ACTIVITY_REQUIRED: string = "Sub Activity" + this.IS_REQUIRED;
  public SUB_ACTIVITY_VALID = "Sub Activity is invalid.";
  // worksheet Sub Client
  public PRACTICE_NAME_REQUIRED: string = "Practice Name(Trading Name)" + this.IS_REQUIRED;
  public CLIENT_NAME_REQUIRED: string = "Client Name" + this.IS_REQUIRED;
  // worksheet review or knockback worksheet listing
  public ALLOCATE_REVIEWER_REQUIRED: string = "Allocate Reviewer" + this.IS_REQUIRED;
  // Worksheet add timesheet
  public ADD_TIMESHEET_SUB_ACTIVITY_REQUIRED: string = "Sub Activity" + this.IS_REQUIRED;
  public UNIT_REQUIRED: string = "Unit" + this.IS_REQUIRED;
  public UNIT_VALID = "Must be enter number";
  public SUBCLIENT_REQUIRED: string = "Sub Client" + this.IS_REQUIRED;
  // worksheet Training name
  public TRAINING_NAME_REQUIRED: string = "Training Name" + this.IS_REQUIRED;
  public TRAINING_NAME_VALID = "Training Name is not valid";

  // Add timesheet
  public START_DATE_REQUIRED: string = "Start Date" + this.IS_REQUIRED;
  public END_DATE_REQUIRED: string = "End Date" + this.IS_REQUIRED;
  public BANK_INFORMATION_REQUIRED: string = "Bank Information" + this.IS_REQUIRED;
  public NUMBER_OF_TRANSACTION_REQUIRED: string = "Number of Transaction" + this.IS_REQUIRED;

  // Completed worksheet

  public ACTION_REQUIRED: string = "Action" + this.IS_REQUIRED;

  /**
   * Quality Control
   */
  public DIVISION_HEAD_REQUIRED: string = "Division Head" + this.IS_REQUIRED;
  public QC_TYPE_REQUIRED: string = "QC Type" + this.IS_REQUIRED;
  public QC_STATUS_REQUIRED: string = "Status" + this.IS_REQUIRED;
  public QC_ISSUE_DETAILS_REQUIRED: string = "Issue Detail" + this.IS_REQUIRED;
  public QC_COMMENTS_REQUIRED: string = "Comment" + this.IS_REQUIRED;

  /**
   * Report client report
   * @type {string}
   */
  public SHARE_USER_NAME_REQUIRED: string = "Username" + this.IS_REQUIRED;

  /**
   * Billing : Invoice One offInvoice
   */
  public ONE_OFF_TYPE_REQUIRED: string = "Type" + this.IS_REQUIRED;
  public ONE_OFF_SERVICE_REQUIRED: string = "Service" + this.IS_REQUIRED;
  public ONE_OFF_CLIENT_REQUIRED: string = "Client" + this.IS_REQUIRED;
  public ONE_OFF_AMOUNT_REQUIRED: string = "Amount" + this.IS_REQUIRED;
  // Add adjust WIP
  public ADJUST_WIP_TO_DATE_REQUIRED: string = "To Date" + this.IS_REQUIRED;
  // Add recurring
  public NAME_REQUIRED: string = "Name" + this.IS_REQUIRED;
  public FIXED_FEE_REQUIRED: string = "Fixed Fee" + this.IS_REQUIRED;
  public FREQUENCY_REQUIRED: string = "Frequency" + this.IS_REQUIRED;
  public WIP_START_DATE_REQUIRED: string = "WIP Start Date" + this.IS_REQUIRED;
  public INVOICE_DATE_REQUIRED: string = "Invoice Date" + this.IS_REQUIRED;
  public INVOICE_SELECT_CLIENT_NAME_REQUIRED: string = "Select Client Name" + this.IS_REQUIRED;
  public QUARTER_REQUIRED: string = "Quarter" + this.IS_REQUIRED;

  // Invoice Send to Client
  public INVOICE_EMAIL_SUBJECT_REQUIRED: string = "Subject " + this.IS_REQUIRED;
  public INVOICE_EMAIL_BODY_REQUIRED: string = "Body " + this.IS_REQUIRED;
  public INVOICE_EMAIL_REFRERNCE_REQUIRED: string = "Reference " + this.IS_REQUIRED;

  // billing basic information
  public NOTICE_PERIOD_REQUIRED: string = "Notice Period " + this.IS_REQUIRED;
  public CATEGORY_REQUIRED: string = "Category " + this.IS_REQUIRED;
  public MERGE_INVOICE_REQUIRED: string = "Merge Invoice (Sent Manually) " + this.IS_REQUIRED;
  public MERGE_FF_REQUIRED: string = "Merge Fixed Fee " + this.IS_REQUIRED;
  public MERGE_INVOICE_BY_SYSTEM_REQUIRED: string = "Merge Invoice (Sent by system) " + this.IS_REQUIRED;
  public CLIENT_BELONGS_REQUIRED: string = "Client belongs to" + this.IS_REQUIRED;
  public JOB_REQUIRED: string = "Job" + this.IS_REQUIRED;
  public PAYMENT_TYPE_REQUIRED: string = "Payment Type" + this.IS_REQUIRED;
  public CARD_NUMBER_REQUIRED: string = "Card Number" + this.IS_REQUIRED;
  public CARD_NUMBER_VALID: string = "Must be enter number";
  public CARD_NUMBER_LENGTH: string = "Length must be 4";
  public CARD_TYPE_REQUIRED: string = "Card Type" + this.IS_REQUIRED;
  public CLIENT_TYPE_REQUIRED: string = "Client Type" + this.IS_REQUIRED;
  public INVOICE_FREQUENCY_REQUIRED: string = "Invoice Frequency" + this.IS_REQUIRED;
  public DEFAULT_RPH_REQUIRED: string = "Default RPH" + this.IS_REQUIRED;
  public DEFAULT_RPH_VALID: string = "Default RPH is invalid";
  public AUTO_INVOICE_REQUIRED: string = "Auto Invoice" + this.IS_REQUIRED;
  public AUDIT_FEE_REQUIRED: string = "Audit Fees" + this.IS_REQUIRED;
  public AUDIT_FEE_INVALID: string = "Audit Fees is invalid";
  public RATE_PER_HOUR_REQUIRED: string = "Rate Per Hour" + this.IS_REQUIRED;
  public RATE_PER_HOUR_VALID: string = "Default RPH is invalid";
  public INC_IN_FF_REQUIRED: string = "Inc. in FF" + this.IS_REQUIRED;
  public PAYROLL_FIXED_PRICE_REQUIRED: string = "Payroll Fixed Price" + this.IS_REQUIRED;
  public PAYROLL_FREQUENCY_REQUIRED: string = "Payroll 404 Frequency" + this.IS_REQUIRED;
  public GENERATE_INVOICE_REQUIRED: string = "Generate invoice from Befree " + this.IS_REQUIRED;
  public YEAR_FF_REQUIRED: string = " Yearly FF" + this.IS_REQUIRED;
  public YEAR_FF_VALID: string = " Yearly FF is invalid";
  public SETUP_COST_REQUIRED: string = "Setup Cost" + this.IS_REQUIRED;
  public SETUP_COST_VALID: string = "Setup Cost is invalid";
  public BASIC_FEES_REQUIRED: string = "Bsic Fees" + this.IS_REQUIRED;
  public BASIC_FEES_VALID: string = "Basic Fees is invalid";
  public PREMIUM_FEES_REQUIRED: string = "Premium Fees" + this.IS_REQUIRED;
  public PREMIUM_FEES_VALID: string = "Premium Fees is invalid";
  public SOFTWARE_REQUIRED: string = "Software" + this.IS_REQUIRED;
  public PLAN_REQUIRED: string = "Plan" + this.IS_REQUIRED;
  public AMOUNT_REQUIRED: string = "Amount" + this.IS_REQUIRED;
  public DISCOUNT_VALID: string = "Discount" + this.IS_REQUIRED;
  public FIXED_FEE_VALID: string = "Fixed Fee is invalid";
  public TYPE_REQUIRED: string = "Type" + this.IS_REQUIRED;
  public STATUS_REQUIRED: string = "Status" + this.IS_REQUIRED;
  public OPTION_REQUIRED: string = "Option" + this.IS_REQUIRED;
  public TURNOVER_REQUIRED: string = "Turnover" + this.IS_REQUIRED;
  public TURNOVER_VALID: string = "Turnover is invalid";
  public AMOUNT_VALID: string = "Amount is invalid";
  public ADDITIONAL_COMMENT_REQUIRED: string = "Additional Comment" + this.IS_REQUIRED;

  public PROPOSAL_EFFECTIVE_MONTH: string = "Proposal effective month" + this.IS_REQUIRED;
  public PROPOSAL_EFFECTIVE_YEAR: string = "Proposal effective year" + this.IS_REQUIRED;

  // debtors management

  public TEMPLATE_DB_REQUIRED: string = "Template" + this.IS_REQUIRED;
  /**
   * system setup - new client review form
   */
  public ASSOCIATED_SERVICE_REQUIRED: string = "Associated Service " + this.IS_REQUIRED;
  public GROUP_REQUIRED: string = "Group" + this.IS_REQUIRED;

  // Bookkeeping TECHNICAL ACCOUNT MANAGER QUESTION

  public BK_TECHNICAL_QUESTION_TAM_STREANLINE_REQUIRED: string =
    "Has TAM looked at all options to streamline the system of client before giving fixed fees?" + this.IS_REQUIRED;
  public REASON_FOR_REVISION_FIXED_FEE_REQUIRED: string = "Reason for revision of fixed fees" + this.IS_REQUIRED;

  // new welcome email
  public FROM_REQUIRED: string = "FROM" + this.IS_REQUIRED;
  public FROM_BCC_INVALID = "BCC Email is invalid";
  public FROM_NAME_REQUIRED: string = "FROM Name" + this.IS_REQUIRED;
  public CC_REQUIRED: string = "CC Eamail" + this.IS_REQUIRED;
  public EMAIL_SUBJECT_REQUIRED: string = "Subject " + this.IS_REQUIRED;
  public TEMPLATE_REQUIRED: string = "Subject " + this.IS_REQUIRED;
  public EMAIL_CONTENT_REQUIRED: string = "Email Content " + this.IS_REQUIRED;
  public TAM_COMMENTS_REQUIRED: string = "Comment" + this.IS_REQUIRED;
  public TAM_COMMENTS_INVALID = "Comment is invalid.";
  // Fixed fee proposal
  public BUFFER_REQUIRED: string = "Buffer" + this.IS_REQUIRED;
  public PROPOSAL_FREQUENCY_REQUIRED: string = "Proposal / Invoice frequency" + this.IS_REQUIRED;
  public INC_FF_REQUIRED: string = "Include in FF " + this.IS_REQUIRED;

  public BK_RPH_REQUIRED: string = "BK RPH($)" + this.IS_REQUIRED;
  public BK_RPH_VALID: string = "BK RPH is invalid";
  public AR_RPH_REQUIRED: string = "AR RPH($)" + this.IS_REQUIRED;
  public AR_RPH_VALID: string = "AR RPH is invalid";
  public AP_RPH_REQUIRED: string = "AP RPH($)" + this.IS_REQUIRED;
  public AP_RPH_VALID: string = "AP RPH is invalid";
  public DM_RPH_REQUIRED: string = "DM RPH($)" + this.IS_REQUIRED;
  public DM_RPH_VALID: string = "DM RPH is invalid";
  public BK_PAYROLL_RPH_REQUIRED: string = "BK Payroll RPH($)" + this.IS_REQUIRED;
  public BK_PAYROLL_RPH_VALID: string = "BK Payroll RPH is invalid";
  // proposal preview
  public RECURRING_REQUIRED: string = "Recurring" + this.IS_REQUIRED;
  public BILLING_UPDATE_DATE_REQUIRED: string = "Billing Update Date" + this.IS_REQUIRED;

  /**
   * Bulk Allocation Administration
   */
  public ALLOCATED_USER_REQUIRED: string = "Allocated User" + this.IS_REQUIRED;
  public CLIENT_REQUIRED: string = "Client" + this.IS_REQUIRED;
  public RE_ALLOCATE_NEW_USER_REQUIRED: string = "Re-allocate New User" + this.IS_REQUIRED;

  /**
   * discontinue-client Administration
   */
  public PROBLEM_FROM_OUR_SIDE_REQUIRED: string = "Problem from our side " + this.IS_REQUIRED;
  public DISCONTINUE_REASON_REQUIRED: string = "Discontinue reason (IND office)" + this.IS_REQUIRED;

  /**
   * Manage discontinue Question Administration
   */
  public WHO_FILLUP_REQUIRED: string = "Who Fillup? " + this.IS_REQUIRED;
  public PARENT_QUESTION_REQUIRED: string = "Parent Question" + this.IS_REQUIRED;

  /**
   * Pending Tickets
   */
  public TICKET_TYPE_REQUIRED: string = "Ticket Type" + this.IS_REQUIRED;
  public TICKET_PRIORITY_REQUIRED: string = "Ticket Priority" + this.IS_REQUIRED;
  public TICKET_TRACKER_REQUIRED: string = "Ticket Tracker" + this.IS_REQUIRED;
  public TICKET_DEPARTMENT_REQUIRED: string = "Ticket Department" + this.IS_REQUIRED;
  public PROCESS_REQUIRED: string = "Process" + this.IS_REQUIRED;
  public SUBJECT_REQUIRED: string = "Subject" + this.IS_REQUIRED;
  public SUBJECT_INVALID = "Subject is invalid.";
  public TEAM_REQUIRED: string = "Team" + this.IS_REQUIRED;
  public STAFF_INCHARGE_REQUIRED: string = "Staff Incharge" + this.IS_REQUIRED;
  public STAFF_INVOLVED_REQUIRED: string = "Staff Involved" + this.IS_REQUIRED;
  public TYPE_MISTAKE_REQUIRED: string = "Type of Mistake" + this.IS_REQUIRED;

  /**
   * HRMS Module
   */

  // conference room
  public CONFERENCE_ROOM_REQUIRED: string = "Conference room" + this.IS_REQUIRED;
  public PURPOSE_OF_BOOK_REQUIRED: string = "Purpose of book conference room" + this.IS_REQUIRED;
  public START_TIME_REQUIRED: string = "Start Time" + this.IS_REQUIRED;
  public START_TIME_LESS_THEN_CURRENT_TIME: string = "Start Time is less then current time";
  public END_TIME_REQUIRED: string = "End Time" + this.IS_REQUIRED;
  public END_TIME_LESS_THEN_START_TIME: string = "End Time is less then current time";
  public MEETING_MEMBERS_REQUIRED: string = "Meeting Members" + this.IS_REQUIRED;

  // shift list
  public SHIFT_TIME_FROM_REQUIRED: string = "Shit Time From" + this.IS_REQUIRED;
  public SHIFT_TIME_TO_REQUIRED: string = "Shit Time To" + this.IS_REQUIRED;
  public GRACE_PERIOD_REQUIRED: string = "Grace Period" + this.IS_REQUIRED;
  public CONSIDER_LATE_PERIOD_REQUIRED: string = "Consider Late Period" + this.IS_REQUIRED;
  public LATE_COMING_ALLOWED_COUNT_REQUIRED: string = "Late Coming Allowed Count" + this.IS_REQUIRED;
  public BREAK_TIME_REQUIRED: string = "Break Time" + this.IS_REQUIRED;

  /**
   * Administartor menu
   */
  // Software Management

  public TRANSACTION_REQUIRED: string = "Transaction" + this.IS_REQUIRED;

  // ip address
  public IP_ADDRESS_FORM_REQUIRED: string = "Ip Address From" + this.IS_REQUIRED;
  public IP_ADDRESS_TO_REQUIRED: string = "Ip Address To" + this.IS_REQUIRED;
  public SERVER_ACCESS_REQUIRED: string = "Server Access" + this.IS_REQUIRED;
  public BELONGS_TO_REQUIRED: string = "Belongs To" + this.IS_REQUIRED;

  // softwrae login status
  public SOFTWARE_NAME_REQUIRED: string = "Software Name" + this.IS_REQUIRED;

  // SIGNATURE - EMAIL CONFIGURATION
  public SORTORDER_REQUIRED: string = "Sort Order" + this.IS_REQUIRED;
  public IMAP_USERNAME_REQUIRED: string = "IMAP Username" + this.IS_REQUIRED;
  public IMAP_PASSWORD_REQUIRED: string = "IMAP Password" + this.IS_REQUIRED;
  public SIGNATURE_REQUIRED: string = "Signature" + this.IS_REQUIRED;
  public CRM_REQUIRED: string = "CRM" + this.IS_REQUIRED;
  public POSITION_REQUIRED: string = "Position" + this.IS_REQUIRED;
  public SHOW_WELCOME_EMAIL_REQUIRED: string = "Show in welcome email" + this.IS_REQUIRED;
  public SHOW_QUOTE_REQUIRED: string = "Show in quote" + this.IS_REQUIRED;
  public CONFIG_IMAP_REQUIRED: string = "Configure IMAP" + this.IS_REQUIRED;
  public SERVER_REQUIRED: string = "Server" + this.IS_REQUIRED;
  public PORT_REQUIRED: string = "Port" + this.IS_REQUIRED;
  public AUTHENTICATION_TYPE_REQUIRED: string = "Authentication type" + this.IS_REQUIRED;

  // Quote Question
  public BK_SERVICE_REQUIRED: string = "BK Services" + this.IS_REQUIRED;
  public DEPENDENT_ANS_REQUIRED: string = "Dependent answer" + this.IS_REQUIRED;
  public DEPENDENT_ANS_TYPE_REQUIRED: string = "Dependent answer type" + this.IS_REQUIRED;
  public ANS_VALUES_REQUIRED: string = "Answer values" + this.IS_REQUIRED;

  // Quote group
  public QUOTE_GROUP_REQUIRED: string = "Quote Group" + this.IS_REQUIRED;

  // Quote Listing
  public DECLINE_QUOTE_REASON_REQUIRED: string = "Decline/Dismiss Quote Reason" + this.IS_REQUIRED;
  public TAX_ASSIGNEE_REQUIRED: string = "Tax Assignee" + this.IS_REQUIRED;
  public BOOKKEEPING_ASSIGNEE_REQUIRED: string = "Bookkeeping Assignee" + this.IS_REQUIRED;
  public PAYROLL_ASSIGNEE_REQUIRED: string = "Payroll Assignee" + this.IS_REQUIRED;
  public QUOTE_SENDBACK_REASON_REQUIRED: string = "Quote Send Back Reason" + this.IS_REQUIRED;

  /**
   * HRMS
   */
  public NUMBER_REQUIRED: string = "Number" + this.IS_REQUIRED;
  public PERIOD_REQUIRED: string = "Period" + this.IS_REQUIRED;

  /**information module*/
  public STAFF_NAME_REQUIRED: string = "Staff Name" + this.IS_REQUIRED;
  public TL_NAME_REQUIRED: string = "TL Name" + this.IS_REQUIRED;
  public ATL_NAME_REQUIRED: string = "ATL Name" + this.IS_REQUIRED;
  public SNOOZE_REQUIRED: string = "Snooze days" + this.IS_REQUIRED;
  public REMINDER_REQUIRED: string = "Reminder days" + this.IS_REQUIRED;

  // newsletter
  public NEWSLETTER_GROUP_REQUIRED: string = "Newsletter Group" + this.IS_REQUIRED;
  public CLIENT_FILE_LENGTH: string = "File name maximum length must be 75";
  public CLIENT_FILE_REQUIRED: string = "File name" + this.IS_REQUIRED;
  public OTHER_ACCOUNT: string = "Other Account " + this.IS_REQUIRED;
  public VIEW_ACCESS: string = "View Access " + this.IS_REQUIRED;

  // client Documents
  public DOC_NAME_REQUIRED: string = "Document Name" + this.IS_REQUIRED;
  public DOC_LINK_REQUIRED: string = "Document Link" + this.IS_REQUIRED;
  public DOC_TYPE_REQUIRED: string = "Document Type" + this.IS_REQUIRED;
  public DOC_LINK_INVALID: string = "Document Link is invalid";
  public CSV_REQUIRED: string = "Upload CSV" + this.IS_REQUIRED;

  // query module

  public QUERY_COMMENTS_REQUIRED: string = "Please enter comment";

  // Award Module
  public TAM_NAME_REQUIRED: string = "TAM Name" + this.IS_REQUIRED;
  public TYPE_OF_AWARD_REQUIRED: string = "Type of Award" + this.IS_REQUIRED;
  public MONTH_AWARD_REQUIRED: string = "Month of Award" + this.IS_REQUIRED;
  public OLD_NEW_ACCOUNT_SAME: string = "Old Account Number & New Account Numbers could not be same";

  // PAYROLL Module
  public SUPER_FUND_TYPE: string = "Super Fund Type" + this.IS_REQUIRED;
  public SUPER_NAME_REQUIRED: string = "Super Fund Name" + this.IS_REQUIRED;
  public SUPER_NAME_VALID: string = "Please enter valid Super Fund Name";
  public SUPER_ACCOUNT_REQUIRED: string = "Account Name" + this.IS_REQUIRED;
  public SUPER_BSB_REQUIRED: string = "BSB No" + this.IS_REQUIRED;

  public TITLE_REQUIRED: string = "Title " + this.IS_REQUIRED;
  public TITLE_INVALID: string = "Please enter valid Title ";
  public PHONE_VALID: string = "Phone must be between 10 to 15 digit";
  public MOBILE_VALID: string = "Mobile must be between 10 to 12 digit";
  public ADDRESS_INVALID: string = "Please enter valid address";
  public CITY_INVALID: string = "Please enter valid Suburb ";
  public ACCOUNT_NUMBER_INVALID: string = "Account Number is invalid";
  public ACCOUNT_NUMBER_MAX_LENGTH: string = "Length must be 9 digit";
  public GENDER_REQUIRED: string = "Gender " + this.IS_REQUIRED;
  public CITY_REQUIRED: string = "City " + this.IS_REQUIRED;
  public CITY_MAX_LENGTH: string = "Length Must be less then 50";
  public SUBURB_REQUIRED: string = "State " + this.IS_REQUIRED;
  public POSTCODE_REQUIRED: string = "Postcode " + this.IS_REQUIRED;
  public POSTCODE_VALID: string = "Postcode must be between 0200-9999";
  public TFN_REQUIRED: string = "TFN " + this.IS_REQUIRED;
  public TFN_VALID_NUMBER: string = "Please enter valid TFN";
  public TFN_VALID: string = "TFN must be between 8 to 9 digit";
  public EMP_BASIS: string = "Employement Basis " + this.IS_REQUIRED;
  public RES_STATUS: string = "Resident Status" + this.IS_REQUIRED;
  public PAY_HOURS: string = "Standard Hours Per Week " + this.IS_REQUIRED;
  public PAYROLL_CAL: string = "Payroll Calendar " + this.IS_REQUIRED;
  public EARNING_RATE: string = "Earning Rate " + this.IS_REQUIRED;
  public EMP_CLASSIFICATION: string = "Classification " + this.IS_REQUIRED;
  public EMP_TYPE: string = "Employee Type " + this.IS_REQUIRED;
  public EMP_INCOME_TYPE: string = "Employee Income Type " + this.IS_REQUIRED;
  public SUPER_FUND_TYPE_EMP: string = "Superannuation fund " + this.IS_REQUIRED;
  public SUPER_FUND_EMP_MEMBER_NO: string = "Employee's membership no " + this.IS_REQUIRED;
  public ENTITLE_TO_LEAVE: string = "Entitled to leave loading " + this.IS_REQUIRED;
  public ANNUAL_LEAVE: string = "Annual Leave " + this.IS_REQUIRED;
  public SICK_LEAVE: string = "Sick Leave " + this.IS_REQUIRED;
  public TAX_SCALE_THRESHOLD: string = "Tax Free Threshold Claim " + this.IS_REQUIRED;
  public TAX_SCALE: string = "Tax Scale " + this.IS_REQUIRED;
  public STUDY_TRAINING: string = "Study training and support loans " + this.IS_REQUIRED;
  public ACCOUNT_NAME: string = "Account Name " + this.IS_REQUIRED;
  public ACCOUNT_NAME_INVALID: string = 'Please enter valid account name ';
  public BSB_NUMBER: string = "BSB Number " + this.IS_REQUIRED;
  public ACCOUNT_NUMBER: string = "Account Number " + this.IS_REQUIRED;
  public USI_REQUIRED: string = "USI Number " + this.IS_REQUIRED;
  public USI_INVALID: string = "USI Number is not valid";
  public EMPLOYEE_REQUIRED: string = "Employee " + this.IS_REQUIRED;
  public EMPLOYEE_LEAVE_REQUIRED: string = "Leave type" + this.IS_REQUIRED;
  public EMPLOYEE_LEAVE_HOURS: string = "Leave Hours " + this.IS_REQUIRED;

  public EMPLOYEE_DESC_REQUIRED: string = "Description " + this.IS_REQUIRED;
  public BSB_MAX_LENGTH: string = "Length Must be 6 digit";
  public BSB_NUMBER_INVALID: string = "BSB Number is invalid ";
  public EMPLOYEE_PAY_TYPE: string = "Employee Pay Type " + this.IS_REQUIRED;
}

export class ToastErrorMessages {
  public static VALID_PDF_SELECTION = "Select valid excel,jpg,png,pdf files only";
  public static VALID_CSV_SELECTION = "Select valid csv file only";
  public static VALID_PDF_SIZE = "file size should not be more than 3 MB";
  public static INVOICE_ACCOUNT_CODE_REQUIRED = "Account code is mandatory where amount is greater than zero(0) in final description.";
  public static WIP_PREVIEW_TOTAL_MISMATCH =
    "Gross Amount (As per wip) & Gross Amount (As per preview) is not matching. You cannot proceed before fixing it.";
  public static AMOUNT_GREATER_THAN_ADVANCE_FEE = "Sorry, this amount is bigger than available balance amount.";
  public static CAN_NO_SEND_AUTO_INVOICE_TO_RECURRING = "Sorry, You cannot send auto invoice as recurring is not set.";
  public static CAN_NO_SEND_AUTO_INVOICE_TO_RELATED =
    "Sorry, You cannot send auto invoice as entity is related or email address and contact person can not blank.";
  public static ADJUST_WIP_REASON_NOT_BLANK = "Adjust WIP Reason can not be blank.";
  public static NO_OF_EMP_TIMESHEET_NOT_MATCHED = "Number of employee did not matched";
  public static NO_OF_EMP_TIMESHEET_MATCHED = "Number of employee matched";
  public static TAM_NOT_BLANK = "First Assign TAM in All Service then you can add Feedback.";
}
