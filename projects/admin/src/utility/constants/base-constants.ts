import { environment } from "../../environments/environment";

export class BASE {
  public static ADMIN_URL = environment.ADMIN_URL;
  public static SSO_LOGIN_SHARED_KEY = "ycwQSnpTSl0dXt8h";
  public static TOAST_TIMEOUT = 5000;
  public static SEARCH_DEBOUNCE_TIME = 300;
  public static PAGINATION_ARRAY: number[] = [10, 25, 50, 100, 200];
  public static ENCRIPTION_TOKEN = 'BDMS';
  public static IMAGE_PATH = environment.IMAGE_PATH;
  public static UNIT_RATIO = 10;
  public static DEFAULT_RPH = 28.00;
  public static BAS_DEFAULT_RPH = '52.00';
  public static IAS_DEFAULT_RPH = '28.00';
  public static GST_PERCENTAGE = 10;
  public static PERCENTAGE_RATIO = 100;
  public static TAX_DEFAULT_RPH = 50.00;
  public static MONTH_START = 6;
  public static MONTH_END = 7;
  public static MONTH_TOTAL = 12;
  public static TRASH_FOLDER_NAME = 'Trash';
  public static ALL_FILE_FOLDER_NAME = 'All Files';
  public static MAXIMUM_FILE_ALLOWED_TO_SELECT = 20;
  // public static EMAIL_HEADER = '<html lang="en"><head><meta charset="UTF-8"><link rel="icon" type="image/x-icon" href="img/favicon.ico"/><style>.table_template table tr th { border-bottom: 1px solid rgba(2, 136, 209, 0.7); color: #005584; position: relative; font-weight: 600; font-size: 12px; background: rgba(4, 136, 208, 0.2);padding:10px;text-align: left}.table_template table tr td {padding: 7px 10px;font-size: 13px;color: #4f4f4f;border-bottom: 1px solid #f0f0f0;text-align: left}.table_template table tr td:first-child {font-weight:600;}</style></head><body><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF"><tbody><tr><td style="border-collapse:collapse; padding: 0px;font-family:sans-serif;" width="100%" bgcolor="#f7f7f7" valign="top" align="center"><table width="600" border="0" cellpadding="0" cellspacing="0" style="background: #0288d1;"><tbody><tr><td style="border-collapse:collapse;padding-left:20px" width="250"height="100" bgcolor="#0288d1" align="left" valign="middle"><img src="http://befreecrm.com.au/images/emailtemplate/logo.png" width="120"/></td><td style="border-collapse:collapse;padding-right:20px" width="250"height="100" bgcolor="#0288d1" align="right" valign="middle"><img src="http://befreecrm.com.au/images/emailtemplate/mail.png" width="40"/></td></tr></tbody></table><table width="600" border="0" cellpadding="0" cellspacing="0" style="background: #ffffff;padding-top: 25px"><tbody><tr><td style="border-collapse:collapse;padding-left:20px;padding-right:20px;font-size: 13px;" height="100" bgcolor="#ffffff" align="left" valign="middle">';
  // public static EMAIL_FOOTER = '</td></tr><tr><td height="20"></td></tr><tr><td><table style="border-top: 2px solid #dae9ef; margin-left: 20px; margin-right: 20px;"><tr><td style="border-collapse:collapse;" width="400" height="60" bgcolor="#ffffff" align="left" valign="middle"><p>Copyright 2018 | Befree</td><td style="border-collapse:collapse;padding-right:20px" width="20" height="60" bgcolor="#ffffff" align="right" valign="middle"> <a href="#" target="_blank"><img src="http://befreecrm.com.au/images/emailtemplate/twitter.png" width="15"/></a></td><td style="border-collapse:collapse;padding-right:20px" width="20" height="60" bgcolor="#ffffff" align="right" valign="middle"> <a href="#" target="_blank"><img src="http://befreecrm.com.au/images/emailtemplate/facebook.png" width="15"/></a></td><td style="border-collapse:collapse;padding-right:20px" width="20" height="60" bgcolor="#ffffff" align="right" valign="middle"> <a href="#" target="_blank"><img src="http://befreecrm.com.au/images/emailtemplate/google.png" width="15"/></a></td><td style="border-collapse:collapse;padding-right:20px" width="20" height="60" bgcolor="#ffffff" align="right" valign="middle"> <a href="#" target="_blank"><img src="http://befreecrm.com.au/images/emailtemplate/linked-in.png" width="15"/></a></td></tr></table></td></tr></tbody></table></td></tr></tbody></table></body></html>';
  public static DesignationShortName = [
    {
      key: 'Reviewer',
      value: 'Reviewer'
    },
    {
      key: 'Team Member',
      value: 'TM'
    },
    {
      key: 'Technical Account Manager',
      value: 'TAM'
    },
    {
      key: 'Review Manager',
      value: 'Review Manager'
    },
    {
      key: 'Review Lead',
      value: 'Review Lead'
    },
    {
      key: 'Division Head',
      value: 'DH'
    },
    {
      key: 'Business Unit Head',
      value: 'BUH'
    },
    {
      key: 'Team Lead',
      value: 'TL'
    },
    {
      key: 'Technical Head',
      value: 'TH'
    },
    {
      key: 'Senior Technical Head',
      value: 'Sr.TH'
    },
    {
      key: 'QC Manager',
      value: 'QC Manager'
    }
  ];
}

export const serviceRPH = [
  {key: 1, label: 28.00},
  {key: 8, label: 28.00},
  {key: 9, label: 28.00},
  {key: 10, label: 35.00},
  {key: 11, label: 28.00}
];

export class HttpStatus {
  public static SUCCESS = 200;
  public static UNAUTHORIZED = 401;
}

export enum ToastType {
  UNKNOWN = 0,
  SUCCESS = 1,
  INFO = 2,
  WARNING = 3,
  ERROR = 4
}

export class AppConstant {
  public static FIVE_MB_IMAGE_SIZE_ALLOWED = 5000000;
  public static THREE_MB_IMAGE_SIZE_ALLOWED = 3000000;
  public static TWINTY_FIVE_MP_FILE_ALLOWED = 250000000;
}

export let ToastConfig = {
  timeOut: BASE.TOAST_TIMEOUT,
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  closeButton: true
};

export const UploadDocumentType = [
  {key: 1, label: 'Process Document'},
  {key: 2, label: 'Other'},
];

export const LeaveAllowFor = [
  {
    label: 'None',
    key: 0
  },
  {
    label: 'January',
    key: 1,
    qrtrLabel: 'JAN'
  },
  {
    label: 'February',
    key: 2,
    qrtrLabel: 'FEB'
  },
  {
    label: 'March',
    key: 3,
    qrtrLabel: 'MAR'
  },
  {
    label: 'April',
    key: 4,
    qrtrLabel: 'APR'
  },
  {
    label: 'May',
    key: 5,
    qrtrLabel: 'MAY'
  },
  {
    label: 'June',
    key: 6,
    qrtrLabel: 'JUN'
  },
  {
    label: 'July',
    key: 7,
    qrtrLabel: 'JUL'
  },
  {
    label: 'August',
    key: 8,
    qrtrLabel: 'AUG'
  },
  {
    label: 'September',
    key: 9,
    qrtrLabel: 'SEP'
  },
  {
    label: 'October',
    key: 10,
    qrtrLabel: 'OCT'
  },
  {
    label: 'November',
    key: 11,
    qrtrLabel: 'NOV'
  },
  {
    label: 'December',
    key: 12,
    qrtrLabel: 'DEC'
  },
  {
    label: 'Permanent',
    key: 13
  }
];

export const UserPrivilegeType = [
  {
    label: 'Page Rights',
    key: 'tab'
  },
  {
    label: 'Dynamic Field Group',
    key: 'field'
  },
  {
    label: 'Worksheet Status Rights',
    key: 'worksheet'
  },
  {
    label: 'From Email Rights',
    key: 'formemail'
  },
  {
    label: 'Other',
    key: 'button'
  }
];

export const DesignationPrivilegeType = [
  {
    label: 'Page Rights',
    key: 'tab'
  },
  {
    label: 'Dynamic Field Group',
    key: 'field'
  },
  {
    label: 'Other',
    key: 'button'
  },
  {
    label: 'Worksheet Status Rights',
    key: 'worksheet'
  }
];

export const BankCcPaypalAccount = [
  {
    label: '',
    key: 0
  },
  {
    label: 'Bank Account',
    key: 1
  },
  {
    label: 'Credit Card Account',
    key: 2
  },
  {
    label: 'Paypal',
    key: 3
  }
];
export const activeInactive = [
  {
    label: '',
    key: ''
  },
  {
    label: 'Inactive',
    key: 0
  },
  {
    label: 'Active',
    key: 1
  }
];
export const reviewerWriteOffYesNo = [
  {
    label: '',
    key: ''
  },
  {
    label: 'No',
    key: 1
  },
  {
    label: 'Yes',
    key: 0
  }
];
export const yesNoOnly = [
  {
    label: 'No',
    key: 0
  },
  {
    label: 'Yes',
    key: 1
  }
];

export const yesNo = [
  {
    label: '',
    key: ''
  },
  {
    label: 'No',
    key: 0
  },
  {
    label: 'Yes',
    key: 1
  }
];
export const yesNoNa = [
  {
    label: '',
    key: ''
  },
  {
    label: 'No',
    key: 0
  },
  {
    label: 'Yes',
    key: 1
  },
  {
    label: 'N/A',
    key: 2
  }
];
export const yesNoOther = [
  {
    label: '',
    key: ''
  },
  {
    label: 'No',
    key: 0
  },
  {
    label: 'Yes',
    key: 1
  },
  {
    label: 'Other',
    key: 2
  }
];
export const yesNoQuestionMarks = [
  {
    label: '',
    key: ''
  },
  {
    label: 'No',
    key: 0
  },
  {
    label: 'Yes',
    key: 1
  },
  {
    label: '??',
    key: 2
  }
];
export const ClientServicesTabs = [
  {
    label: '',
    key: 0
  },
  {
    label: 'Bookkeeping',
    key: 1
  },
  {
    label: 'Payroll',
    key: 2
  },
  {
    label: 'Taxation',
    key: 6
  },
  {
    label: 'Accounts Receivable',
    key: 8
  },
  {
    label: 'Accounts Payable',
    key: 9
  },
  {
    label: 'Debtor Management',
    key: 10
  }
];
export const bkDoneby = [
  {
    label: '',
    key: 0
  },
  {
    label: 'BK team',
    key: 1
  },
  {
    label: 'Client',
    key: 2
  },
  {
    label: 'Other',
    key: 3
  },
  {
    label: 'Tax team',
    key: 4
  }
];

export const basFrequency = [
  {
    label: '',
    key: 0
  },
  {
    label: 'Annual',
    key: 1
  },
  {
    label: 'Monthly',
    key: 2
  },
  {
    label: 'N/A',
    key: 3
  },
  {
    label: 'Quarterly',
    key: 4
  },
  {
    label: 'Half Yearly',
    key: 5
  },
  {
    label: 'Fortnightly',
    key: 6
  },
  {
    label: 'Weekly',
    key: 7
  }
];
export const basAccrualorcash = [
  {
    label: '',
    key: 0
  },
  {
    label: 'Accrual',
    key: 1
  },
  {
    label: 'Cash',
    key: 2
  }
];

export const paygFrequency = [
  {
    label: '',
    key: 0
  },
  {
    label: 'Monthly',
    key: 1
  },
  {
    label: 'Quarterly',
    key: 2
  },
  {
    label: 'N/A',
    key: 3
  }
];

export const statementDeliveryPreference = [
  {
    label: '',
    key: 0
  },
  {
    label: 'ECI',
    key: 1
  },
  {
    label: 'ELS',
    key: 2
  },
  {
    label: 'Postal',
    key: 3
  }
];

export const entityType = [
  {
    label: '',
    key: 0
  },
  {
    label: 'Australian Public Company',
    key: 1
  },
  {
    label: 'Individual(Tax team)',
    key: 2
  },
  {
    label: 'Other',
    key: 3
  },
  {
    label: 'Partnership Firm',
    key: 4
  },
  {
    label: 'Pty Ltd (Company)',
    key: 5
  },
  {
    label: 'SMSF',
    key: 6
  },
  {
    label: 'Sole Trader',
    key: 7
  },
  {
    label: 'Trust',
    key: 8
  }
];
export const franchise = [
  {
    label: '',
    key: 0
  },
  {
    label: 'Anytime Fitness',
    key: 1
  },
  {
    label: 'Guzman',
    key: 2
  },
  {
    label: 'Hungry Jacks',
    key: 3
  },
  {
    label: 'KFC',
    key: 4
  },
  {
    label: 'Miss India',
    key: 5
  }
];

export enum VIEWCLIENTTYPE {
  BASIC = 1,
  SOFTWARE = 2,
}

export class FIELDTYPE {
  public static DROPDOWN = 'DD';
  public static TEXTBOX = 'TB';
  public static TEXTAREA = 'TA';
  public static EDITOR = 'ED';
  public static CALENDER = 'CL';
  public static MULTIPLEVARIANT = 'MV';
  public static TEXTNUMERIC = 'TN';
}

export const FIELDTYPEDROPDOWN = [
  {
    key: 'DD',
    label: 'Drop Down',
  },
  {
    key: 'TB',
    label: 'Text Box',
  },
  {
    key: 'TA',
    label: 'Text Area',
  },
  {
    key: 'ED',
    label: 'Editor',
  },
  {
    key: 'CL',
    label: 'Calender',
  },
  {
    key: 'MV',
    label: 'Multiple Variant',
  },
  {
    key: 'TN',
    label: 'Text Numeric',
  },
];

export const OTHERRIGHTS = [
  {
    key: 1,
    label: 'Bookkeeping',
  },
  {
    key: 2,
    label: 'Payroll',
  },
  {
    key: 6,
    label: 'Taxation',
  },
];

export const QUALITYCONTROLSTATUS = [
  {
    key: 0,
    label: '',
  },
  {
    key: 1,
    label: 'Not started',
  },
  {
    key: 2,
    label: 'WIP',
  },
  {
    key: 3,
    label: 'Closed',
  },
  {
    key: 4,
    label: 'Reopen',
  }
];

export const ENTITYDISCONTINUESTAGE = [
  {
    key: 0,
    label: 'Active',
  },
  {
    key: 1,
    label: 'Discontinue process initiate',
  },
  {
    key: 2,
    label: 'Discontinued client',
  }
];

export const QUALITYCONTROLTYPE = [
  {
    key: 1,
    label: 'Issue',
  },
  {
    key: 2,
    label: 'Call Request',
  },
  {
    key: 3,
    label: 'Clarification',
  },
  {
    key: 4,
    label: 'Request',
  },
  {
    key: 5,
    label: 'Verify',
  },
  {
    key: 6,
    label: 'Management Attention Required',
  },
  {
    key: 7,
    label: 'Sydney Office Attention Required',
  },
  {
    key: 8,
    label: 'Updates',
  },
  {
    key: 9,
    label: 'Send Quotes',
  }
];

export const FOOD_TYPE_LIST = [
  {
    key: 1,
    label: 'Regular Food',
  },
  {
    key: 2,
    label: 'Jain Food',
  },
  {
    key: 3,
    label: 'Food for Fasting',
  }
];

export class GLOBALDATAKEYS {
  public static CLIENT = 'Client';
  public static USERS = 'User';
  public static DESIGNATION = 'Designation';
  public static CONTACTADDRESS = 'Address';
  public static CONTACT = 'Contact';
  public static REPORT = 'Report';
  public static INVOICE = 'Invoice';
  public static RECURRING = 'Recurring';
  public static PREVIOUS_RECURRING = 'PreviousRecurring';
  public static ADD_WORKSHEET = 'AddWorksheet';
  public static DEBTORS_MANAGEMENT = 'DebtorsManagement';
  public static PENDING_WORKSHEET_SCHEDULE = 'PendigWorksheetSchedule';
  public static PERMANENT_INFO = 'PermanentInfo';
  public static NEW_CLIENT_REVIEW_FORM = 'NewClientReview';
  public static PAYROLL_CALC = 'PayrollCalc';
  public static WORKSHEET_ID = 'WorksheetID';
  public static WORKSHEET_ITEM_DATA = 'WorksheetItemData';
  public static TIMESHEET_ITEM_DATA = 'TimesheetItemData';
  public static PENDING_TICKET = 'PendingTickets';
  public static DISCONTINUE_CLIENT = 'DiscontinueClient';
  public static QUOTEVIEWDATA = 'QuoteView';
  public static MANAGE_EMAIL = 'manage_email';
  public static USER_SIGNATURE = 'manage_email';
  public static LOGGEDIN_IP = 'lggedin_ip';
  public static NEWSLETTER = 'NewsletterList';
  public static FEEDBACKCALL = 'FeedbackCall';
  public static FILECOPYORMOVE = 'FileCopyOrMove';
  public static INFORMATION_REQUIRED = 'InformationRequired';
  public static READ_POLICY = 'ReadPolicy';
  public static QUERY_MODULE = 'QueryDataListItem';
  public static QUERY_WORKSHEET_MODULE = 'QueryDataFromWorksheet';
  public static USER_SME_SIGNATURE = 'UserSMESignature';
  public static AWARD_MASTER = 'AwardMaster';
  public static AWARD_NOMINEE = 'AwardNominee';
  public static AWARD_USER = 'AwardUser';
  public static FOOD_MASTER = 'FoodMaster';
  public static BANK_CHANGE_DATA = 'BankChangeData';
  public static CLIENT_CONTACT_USER = 'ClientContactUser';
  public static WELCOME_KIT = 'WelcomeKit'
  public static PAYROLL_DATA = 'PayrollData';
  public static EMP_PAYRUN= 'EmployeePayRun';

}

export class REPORTTYPE {
  public static CLIENT = 15;
}

export const EXPORTFILETYPE = [
  {
    file_type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    file_extension: '.xls',
  },
  {
    file_type: 'application/pdf',
    file_extension: '.pdf',
  },
  {
    file_type: 'image/png',
    file_extension: '.png',
  },
  {
    file_type: 'image/jpeg',
    file_extension: '.jpeg',
  },
  {
    file_type: 'image/jpg',
    file_extension: '.jpg',
  },
  {
    file_type: 'application/vnd.ms-excel',
    file_extension: '.csv',
  }
];

export const ADDRESSSTATE = [
  {
    key: 1,
    label: 'Australian Capital Territory',
  },
  {
    key: 2,
    label: 'New South Wales',
  },
  {
    key: 3,
    label: 'Northern Territory',
  },
  {
    key: 4,
    label: 'Queensland',
  },
  {
    key: 5,
    label: 'South Australia',
  },
  {
    key: 6,
    label: 'Tasmania',
  },
  {
    key: 7,
    label: 'Victoria',
  },
  {
    key: 8,
    label: 'Western Australia',
  }
];

export const ADDRESSTYPE = [
  {
    key: 1,
    label: 'Business',
  },
  {
    key: 2,
    label: 'Postal',
  },
];


export const FEEDBACKSTATUSCALL = [
  {
    key: 'Call',
    label: 'Call',
  },
  {
    key: 'Email',
    label: 'Email',
  },
  {
    key: 'VM',
    label: 'VM',
  },
  {
    key: 'No answer',
    label: 'No answer',
  },
  {
    key: 'No Feedback Call',
    label: 'No Feedback Call',
  }
];

export const RATING = [
  {
    key: 0,
    label: '0',
  },
  {
    key: 1,
    label: '1',
  },
  {
    key: 2,
    label: '2',
  },
  {
    key: 3,
    label: '3',
  },
  {
    key: 4,
    label: '4',
  },
];

export const CONTACTPOSITION = [
  {
    key: 1,
    label: 'Director',
  },
  {
    key: 2,
    label: 'Accountant',
  },
  {
    key: 3,
    label: 'Employee',
  },
  {
    key: 4,
    label: 'Manager',
  },
  {
    key: 5,
    label: 'Owner',
  },
  {
    key: 6,
    label: 'Partner',
  },
  {
    key: 7,
    label: 'Sales Person',
  },
  {
    key: 8,
    label: 'Not known',
  }
];
export const DDFIELDTYPE = [
  {
    key: 'in',
    label: 'Equal To',
  }, {
    key: 'notin',
    label: 'Not Equal To',
  }
];

export const TBFIELDTYPE = [
  {
    key: 'equal',
    label: 'Equal To',
  }, {
    key: 'notequal',
    label: 'Not Equal To',
  }, {
    key: 'startwith',
    label: 'Start With',
  }, {
    key: 'like',
    label: 'Contains any part of word',
  }
];

export const CLFIELDTYPE = [
  {
    key: 'equal',
    label: 'On',
  }, {
    key: 'lessthan',
    label: 'Before',
  }, {
    key: 'greaterthan',
    label: 'After',
  }, {
    key: 'lessthanequal',
    label: 'On Or Before',
  }, {
    key: 'greaterthanequal',
    label: 'On Or After',
  }, {
    key: 'between',
    label: 'Between',
  }
];

export const TNFIELDTYPE = [
  {
    key: 'equal',
    label: 'Equal',
  }, {
    key: 'lessthanval',
    label: 'Less Than',
  }, {
    key: 'greaterthanval',
    label: 'Greater Than',
  }, {
    key: 'lessthanequalval',
    label: 'Less Than Equal',
  }, {
    key: 'lessthanequalval',
    label: 'Greater Than Equal',
  }
];

export const InvoiceTabList = [
  {
    key: 1,
    label: 'Awaiting review',
  },
  {
    key: 2,
    label: 'Awaiting billing approval',
  },
  {
    key: 3,
    label: 'Ready to export',
  },
  {
    key: 4,
    label: 'Paid',
  },
  {
    key: 5,
    label: 'Dismissed',
  },
  {
    key: 6,
    label: 'Awaiting technical head',
  },
  {
    key: 7,
    label: 'Awaiting merging',
  },
  {
    key: 8,
    label: 'All',
  },
  {
    key: 9,
    label: 'Awaiting payment',
  },
  {
    key: 10,
    label: 'Adjusted',
  },
  {
    key: 11,
    label: 'Send to client',
  }
];

export const WIPInvoiceBillingStatus = [
  {
    key: 0,
    label: 'Not Charged',
  },
  {
    key: 1,
    label: 'Charged',
  },
  {
    key: 2,
    label: 'Carry forward',
  },
  {
    key: 3,
    label: 'Write-off',
  },
  {
    key: 4,
    label: 'Adjust with setup',
  }
];


export const DiscountType = [
  {
    key: 1,
    label: 'None',
  },
  {
    key: 2,
    label: 'Fixed',
  },
  {
    key: 3,
    label: 'Advance',
  },
];
export const invoiceType = [
  {
    key: 'Advance',
    label: 'Advance',
  },
  {
    key: 'Setup',
    label: 'BK Setup',
  },
  {
    key: 'Formation',
    label: 'Formation',
  },
  {
    key: 'Audit',
    label: 'Audit',
  },
  {
    key: 'Recurred',
    label: 'Recurred',
  },
  {
    key: 'Manual',
    label: 'Manual',
  },
  {
    key: 'Auto invoice',
    label: 'Auto invoice',
  },
  {
    key: 'Imported',
    label: 'Imported',
  }
];

export const recType = [
  {
    key: 1,
    label: 'Single'
  },
  {
    key: 2,
    label: 'Multiple'
  }
];

export const recurringRepetition = [
  {
    key: 1,
    label: 'Repeat indefinitely',
    showInGrid: 'Indefinitely'
  },
  {
    key: 2,
    label: 'Repeat until date',
    showInGrid: 'Till'
  },
  {
    key: 3,
    label: 'Repeat # times',
    showInGrid: 'times'
  }
];

export const days = [
  {
    key: 'Monday',
    label: 'Monday'
  },
  {
    key: 'Tuesday',
    label: 'Tuesday'
  },
  {
    key: 'Wednesday',
    label: 'Wednesday'
  },
  {
    key: 'Thursday',
    label: 'Thursday'
  },
  {
    key: 'Friday',
    label: 'Friday'
  },
  {
    key: 'Saturday',
    label: 'Saturday'
  },
  {
    key: 'Sunday',
    label: 'Sunday'
  }
];

export const category = [
  {
    key: 1,
    label: 'Largest - A+'
  },
  {
    key: 2,
    label: 'Large - A'
  },
  {
    key: 3,
    label: 'Medium - B+'
  },
  {
    key: 4,
    label: 'Medium - B'
  },
  {
    key: 5,
    label: 'Small - C+'
  },
  {
    key: 6,
    label: 'Small - C'
  }
];

export enum INVOICESTAGEUPDATE {
  ARW = 1,
  ABA = 2,
  RTE = 3,
  PAD = 4,
  DIM = 5,
  ATH = 6,
  AMR = 7,
  ALL = 8,
  APM = 9,
  ADJ = 10,
  STC = 11
}

export enum FFSTAGEUPDATE {
  ARW = 1,
  ATH = 2,
  AST = 11,
  AMR = 12,
  ABA = 3,
  STC = 4,
  ACA = 5,
  ALL = 8,
  APP = 6,
  DIS = 7,
  DCP = 9,
  FTP = 10
}

export const teamMemberchecklistAction = [
  {
    key: '',
    value: 'Please Select'
  },
  {
    key: 1,
    value: 'Yes'
  },
  {
    key: 2,
    value: 'No'
  },
  {
    key: 3,
    value: 'Done'
  },
  {
    key: 4,
    value: 'N/A'
  }
];

export const reviewerchecklistAction = [
  {
    key: '',
    value: 'Please Select'
  },
  {
    key: 1,
    value: 'Checked'
  },
  {
    key: 2,
    value: 'Knock back'
  },
  {
    key: 3,
    value: 'Attention'
  }
];

export const reviewerchecklistActionReport = [
  {
    key: '',
    label: 'Please Select'
  },
  {
    key: 1,
    label: 'Checked'
  },
  {
    key: 2,
    label: 'Knock back'
  },
  {
    key: 3,
    label: 'Attention'
  }
];

export const technicalheadAction = [
  {
    key: '',
    value: 'Please Select'
  },
  {
    key: 1,
    value: 'Checked'
  },
  {
    key: 2,
    value: 'Attention for reviewers'
  },
  {
    key: 3,
    value: 'Attention for team members'
  }
];

export const reviewerTag = [
  {
    key: '',
    label: 'Please Select'
  },
  {
    key: 1,
    label: 'Negligence'
  },
  {
    key: 2,
    label: 'Training'
  },
  {
    key: 3,
    label: 'N/A'
  }
];

export enum SERVICEDATA {
  BK = 1,
  PAYROLL = 2,
  SMSF = 4,
  HOST = 5,
  TAX = 6,
  SUB = 7,
  AR = 8,
  AP = 9,
  DM = 10,
  BKP = 11
}

export const payment = [
  {
    key: 1,
    label: 'Ezidebit'
  },
  {
    key: 2,
    label: 'Credit Card'
  },
  {
    key: 3,
    label: 'Net Transfer'
  },
];

export const card = [
  {
    key: 1,
    label: 'Visa'
  },
  {
    key: 2,
    label: 'Master'
  },
  {
    key: 3,
    label: 'Amex'
  },
  {
    key: 4,
    label: 'Dinners'
  },
];

export enum INVOICEPDFDATA {
  BILLINGID = 'billing@befree.com.au',
  SURCHARGE_LINE_INVOICE = 'A surcharge of 25% plust GST will be applied to all invoices referred for collection.',
  BEFREE_ADDRESS = 'Befree Pty Ltd\n Suite 3, Level 6\n80 George Street\nParramatta\nNSW 2150, Australia\nABN: 20 120 830 784',
  BOTTOM_PARAGRAPH_LINE_ONE = 'Are you not on FIXED Monthly Bookkeeping Fees?',
  BOTTOM_PARAGRAPH_LINE_TWO = 'Befree offers comprehensive & permanent bookkeeping solutions and we can offer Fixed Monthly Bookkeeping fees for your business. Please email billing@befree.com.au for a proposal!',
  BANK_DETAILS_TITLE = 'BANK DETAILS',
  CREDIT_CARD_TITLE = 'CREDIT CARD',
  DIRECT_DEBIT_TITLE = 'DIRECT DEBIT',
  BANK_DETAILS = 'Befree Pty Ltd\nBSB# 062 223\n\n Account# 10764309',
  CREDIT_CARD_DETAILS = 'Please call us\nto give your\n Credit card details',
  DIRECT_DEBIT_DETAILS = 'Contact us to\nOrganise\nDirect Debit Facility',
}

export class REDIRECTPARAMKEYS {
  public static INVOICE_STATUS = 'InvoiceStatus';
  public static UNCHARGE_UNIT_TIMESHEET = 'UnchargeUnitTimesheet';
  public static CLIENT_TAB_ACTIVE = 'ClientTabActive';
  public static FF_STATUS = 'FFStatus';
}

export enum REPORTTABID {
  // CLIENTREPORT = 15,
  // BANKREPORT = 30,
  // CLIENTALLOCATIONREPORT = 45,
  // CLIENTWISEINVOICEREPORT = 369,
  // INVOICEREPORT = 347
}


export const wr3status = [
  {
    key: 1,
    value: 'New - Not started'
  },
  {
    key: 2,
    value: 'WIP'
  },
  {
    key: 3,
    value: 'Issue holding up'
  },
  {
    key: 4,
    value: 'First report sent'
  },
  {
    key: 5,
    value: 'First feedback call'
  }
];

export const newclientreviewstatus = [
  {
    value: 'Please Select',
    key: 0
  },
  {
    key: 1,
    value: 'New - Not started'
  },
  {
    key: 2,
    value: 'WIP'
  },
  {
    key: 3,
    value: 'Review for manager'
  },
  {
    key: 4,
    value: 'Completed'
  }
];

export const welcomeemailtemplate = [
  {
    label: 'Please Select',
    key: 0
  },
  {
    label: 'Bookkeeping',
    key: 1
  },
  {
    label: 'Bookkeeping & Payroll',
    key: 2
  },
  {
    label: 'New welcome email',
    key: 3
  }
];

export const softwareInformationPermanentInfo = [
  {
    label: 'Please Select',
    key: 0
  },
  {
    label: 'MYOB AccountRight [Cloud]',
    key: 1
  },
  {
    label: 'MYOB AccountRight [Desktop]',
    key: 2
  },
  {
    label: 'MYOB Essential,QuickBooks [Desktop]',
    key: 3
  },
  {
    label: 'QuickBooks [Online]',
    key: 4
  },
  {
    label: 'Xero',
    key: 5
  },
  {
    label: 'Saasu',
    key: 6
  },
  {
    label: 'Other',
    key: 7
  }
];

export const pleaseSelectNoYesNa = [
  {
    label: '',
    key: ''
  },
  {
    label: 'Please Select',
    key: 0
  },
  {
    label: 'Yes',
    key: 1
  },
  {
    label: 'No',
    key: 2
  },
  {
    label: 'N/A',
    key: 3
  }
];
export const invoiceActivityData = {
  201: [],
  202: [],
  901: [],
  902: [],
  228: [
    {
      label: 'Bank / CC / Paypal info',
      key: 'bank_cc_name'
    },
    {
      label: 'Account no',
      key: 'bank_cc_account_no'
    },
    {
      label: 'Period',
      key: 'period_selection'
    },
    {
      label: 'No of transaction',
      key: 'no_of_value'
    }
  ],
  608: [
    {
      label: 'Period',
      key: 'period_selection'
    },
    {
      label: 'No of transaction',
      key: 'no_of_value'
    }
  ],
  210: [],
  501: [],
  505: [],
  601: [],
  607: [],
  702: [
    {
      label: 'No',
      key: 'number_selection'
    }
  ],
  706: [],
  707: [],
  708: [],
  709: [],
  710: [
    {
      label: 'Period',
      key: 'period_selection'
    }
  ],
  223: [
    {
      label: 'Frequency',
      key: 'frequency_name'
    }
  ],
  404: [
    {
      label: 'No of employee',
      key: 'no_of_value'
    },
    {
      label: 'Reviewer',
      key: 'reviewer_id'
    }
  ],
  403: [],
  402: [
    {
      label: 'No of employee',
      key: 'no_of_value'
    }
  ],
  701: [],
  405: [],
  407: [
    {
      label: 'No of employee',
      key: 'no_of_value'
    },
    {
      label: 'Frequency',
      key: 'frequency_name'
    }
  ],
  463: [],
  464: [],
  468: [],
  422: [
    {
      label: 'No of employee',
      key: 'no_of_value'
    },
    {
      label: 'Frequency',
      key: 'frequency_name'
    },
    {
      label: 'Reviewer',
      key: 'reviewer_id'
    }
  ],
  470: [],
  417: [],
  460: [],
  462: [],
  705: [],
  448: []
};
export const fulltimeresource = [
  {
    label: 'No',
    key: 0
  },
  {
    label: 'Fulltime',
    key: 1
  },
  {
    label: 'Parttime',
    key: 2
  }
];
export const noticeperiod = [
  {
    label: 1,
    key: 1
  },
  {
    label: 2,
    key: 2
  },
  {
    label: 3,
    key: 3
  },
  {
    label: 4,
    key: 4
  },
  {
    label: 5,
    key: 5
  },
  {
    label: 6,
    key: 6
  },
  {
    label: 7,
    key: 7
  },
  {
    label: 8,
    key: 8
  },
  {
    label: 9,
    key: 9
  },
  {
    label: 10,
    key: 10
  },
  {
    label: 11,
    key: 11
  },
  {
    label: 12,
    key: 12
  },
];

export const hostingUserType = [
  {
    label: 'Basic',
    key: 'B',
    rate: 15
  },
  {
    label: 'Premium',
    key: 'P',
    rate: 15
  },
  {
    label: 'Special',
    key: 'S',
    rate: 0
  },
];

export const taxCondition = [
  {
    label: 'Charged',
    key: 'Charged'
  },
  {
    label: 'Quoted',
    key: 'Quoted'
  }
];

export const payroll_inc_in_ff = [
  {
    label: 'Not Quoted',
    key: 0
  },
  {
    label: 'Inc in FF',
    key: 1
  },
  {
    label: 'Quoted',
    key: 2
  }
];

export const writeoff = [
  {
    label: 'Befree writeoff',
    key: 1
  },
  // {
  //   label: 'Client writeoff',
  //   key: 2
  // },
  {
    label: 'Reviewer writeoff',
    key: 3
  }
];

export const worksheetStatusLog = [
  {
    label: '',
    key: ''
  },
  {
    label: 'Lock',
    key: 0
  },
  {
    label: 'Unlock',
    key: 1
  }
];

export const UserWorksheetRatting = [
  {
    label: 'Improvement Required',
    key: 1
  },
  {
    label: 'Average',
    key: 2
  },
  {
    label: 'Good',
    key: 3
  },
  {
    label: 'Best',
    key: 4
  }
];

export const whoFillUp = [
  {
    label: '',
    key: ''
  },
  {
    label: 'Bookkeeping',
    key: 1
  },
  {
    label: 'Payroll',
    key: 2
  },
  {
    label: 'Taxation',
    key: 3
  },
  {
    label: 'Billing',
    key: 4
  },
  {
    label: 'Quality control',
    key: 5
  },
  {
    label: 'Sales',
    key: 6
  },
  {
    label: 'Division head',
    key: 7
  }
];

export const discontinueQuestionType = [
  {
    label: '',
    key: ''
  },
  {
    label: 'Individual',
    key: 0
  },
  {
    label: 'Comman',
    key: 1
  }
];

export const ticketPriority = [
  {
    label: 'Please Select',
    key: ''
  },
  {
    label: 'Low',
    key: 1
  },
  {
    label: 'Medium',
    key: 2
  },
  {
    label: 'High',
    key: 3
  }

];

export const ticketSeverity = [
  {
    label: 'Please Select',
    key: ''
  },
  {
    label: 'New Feature',
    key: 1
  },
  {
    label: 'Support',
    key: 2
  },
  {
    label: 'Bug',
    key: 3
  },
  {
    label: 'Suggestion',
    key: 4
  },
  {
    label: 'Issue',
    key: 5
  }
];

export const ticketTypeOfMistake = [
  {
    label: 'Please Select',
    key: ''
  },
  {
    label: 'Negligence',
    key: 1
  },
  {
    label: 'Medium',
    key: 2
  },
  {
    label: 'Minor',
    key: 3
  },
  {
    label: 'Gross Negligence',
    key: 4
  }
];

export const ticketTopic = [
  {
    label: 'Please Select',
    key: ''
  },
  {
    label: 'A',
    key: 1
  },
  {
    label: 'B',
    key: 2
  },
  {
    label: 'C',
    key: 3
  }
];

export const month = [
  {
    label: 'Please Select',
    key: ''
  },
  {
    label: 'Jan',
    key: 'Jan'
  },
  {
    label: 'Feb',
    key: 'Feb'
  },
  {
    label: 'Mar',
    key: 'Mar'
  },
  {
    label: 'Apr',
    key: 'Apr'
  },
  {
    label: 'May',
    key: 'May'
  },
  {
    label: 'Jun',
    key: 'Jun'
  },
  {
    label: 'July',
    key: 'July'
  },
  {
    label: 'Aug',
    key: 'Aug'
  },
  {
    label: 'Sept',
    key: 'Sept'
  },
  {
    label: 'Oct',
    key: 'Oct'
  },
  {
    label: 'Nov',
    key: 'Nov'
  },
  {
    label: 'Dec',
    key: 'Dec'
  }
];
export const year = [
  {
    label: 'Please Select',
    key: ''
  },
  {
    label: '2019',
    key: 2019
  },
  {
    label: '2020',
    key: 2020
  },
  {
    label: '2021',
    key: 2021
  },
  {
    label: '2022',
    key: 2022
  },
  {
    label: '2023',
    key: 2023
  },
  {
    label: '2024',
    key: 2024
  },
  {
    label: '2025',
    key: 2025
  },
  {
    label: '2026',
    key: 2026
  },
  {
    label: '2027',
    key: 2027
  },
  {
    label: '2028',
    key: 2028
  },
  {
    label: '2029',
    key: 2029
  },
  {
    label: '2030',
    key: 2030
  }
];

export const other_service = [
  {
    label: 'Processing payroll - setting up payments maintaining leave record and preparing super report',
    key: 8
  },
  {
    label: 'Accounts Receivable - generating invoices debtor reconciliation and related reporting',
    key: 9
  },
  {
    label: 'Accounts Payable - supplier reconciliations online payment set up and related reporting',
    key: 10
  },
  {
    label: 'Debtors Management - Chasing/follow up of payments and related reporting',
    key: 11
  }
];

export enum outcome {
  P = 'I confirm that I have generated the updated reports after taking into account the knock back points.',
  R = 'I confirm that the reports I am sending are the updated / final reports',
}

export const inOut = [
  {
    label: '',
    key: ''
  },
  {
    label: 'Out',
    key: 0
  },
  {
    label: 'In',
    key: 1
  }
];

export const hrRemark = [
  {
    label: 'Holiday Working',
    shortName: 'H',
    key: 1
  },
  {
    label: 'Sunday Working',
    shortName: 'S',
    key: 2
  },
  {
    label: 'Late Coming',
    shortName: 'L',
    key: 3
  },
  {
    label: 'Early Leaving',
    shortName: 'E',
    key: 4
  },
  {
    label: 'Absent',
    shortName: 'A',
    key: 5
  },
  {
    label: 'Sandwich Leave',
    shortName: 'SL',
    key: 6
  }
];

export const hrfinalRemark = [
  {
    label: 'Half Day',
    key: 1
  },
  {
    label: 'FullDay Working',
    key: 2
  },
  {
    label: 'Leave',
    key: 3
  }
];

export const hrStatus = [
  {
    label: 'Auto Allowed',
    key: 1
  },
  {
    label: 'Pending For Request',
    key: 2
  },
  {
    label: 'Pending For 1stApproval',
    key: 3
  },
  {
    label: 'Pending For 2ndApproval',
    key: 4
  },
  {
    label: 'Approved',
    key: 5
  },
  {
    label: 'Rejected',
    key: 6
  }
];

export const approvalType = [
  {
    label: 'First Approval',
    key: 1
  },
  {
    label: 'Second Approval',
    key: 2
  }
];

export const access_by = [
  {
    label: 'Local',
    key: 'L'
  },
  {
    label: 'Live',
    key: 'A'
  },
  {
    label: 'Other',
    key: 'O'
  }
];

export const pendingTimesheetStage = [
  {
    label: 'Timesheet pending',
    key: 0
  },
  {
    label: 'Pending for approval',
    key: 1
  },
  {
    label: 'Waiting for approval',
    key: 2
  },
  {
    label: 'Approved',
    key: 3
  },
  {
    label: 'Rejected',
    key: 4
  }
];


export const quote_client_type = [
  {
    label: 'New',
    key: 1
  },
  {
    label: 'Existing',
    key: 2
  },
  {
    label: 'Both',
    key: 3
  }
];

export const quote_sub_service = [
  {
    label: 'Ongoing Bookkeeping',
    key: 1
  },
  {
    label: 'Backlog Bookkeeping',
    key: 2
  }
];

export const HTMLFROMCONTROL = [
  {
    key: 'DD',
    label: 'Drop Down',
  },
  {
    key: 'TB',
    label: 'Text Box',
  },
  {
    key: 'TA',
    label: 'Text Area',
  },
  {
    key: 'CL',
    label: 'Calender',
  }
];

export enum QUOTESTAGEUPDATE {
  ALL = 0,
  ZLPR = 1,
  QRD = 2,
  QSD = 3,
  QRCD = 4,
  QSTC = 5,
  AGRBL = 6,
  WFBTEAM = 7,
  APRD = 8,
  FTR = 9,
  DCLN = 10,
  QRP = 11,
  CRMP = 12
}

export const documentType = [
  {
    label: 'Balance Sheet',
    key: 1
  },
  {
    label: 'P&L',
    key: 2
  },
  {
    label: 'Ledger of accountant fees & BK fees',
    key: 3
  },
  {
    label: 'DB Backup',
    key: 4
  },
  {
    label: 'Other Documents',
    key: 5
  }
];

export const feedbackCallType = [
  {
    label: 'Call',
    key: 1
  },
  {
    label: 'Email',
    key: 2
  },
  {
    label: 'VM / No answer / Email',
    key: 3
  },
  {
    label: 'No Feedback Call',
    key: 4
  },
  {
    label: 'NPS',
    key: 5
  },
];

export const feedbackStatus = [
  {
    label: 'Not Started',
    key: 0
  },
  {
    label: 'WIP',
    key: 1
  },
  {
    label: 'Pending for TAM',
    key: 2
  },
  {
    label: 'Pending for CSM',
    key: 3
  },
  {
    label: 'Completed',
    key: 4
  },
  {
    label: 'All',
    key: 5
  }
];

export const feedbackQuestion = [
  {
    label: 'Do you receive timely responses? (Any suggestions or changes required in our Turnaround Time)?',
    key: 1
  },
  {
    label: 'Are you comfortable with communication with the teams?',
    key: 2
  },
  {
    label: 'How do you find our reports, are you satisfied with our reporting formats?',
    key: 3
  }
];
export const noFeedback = [
  {
    label: 'Discontinued',
    key: 1
  },
  {
    label: 'Client Denied',
    key: 2
  },
  {
    label: 'TAM Denied',
    key: 3
  },
  {
    label: 'Others',
    key: 4
  },
  {
    label: 'No reply from the client',
    key: 5
  }
];

export const feedbackQuater = [
  {
    label: 'JAN-MAR',
    key: 1
  },
  {
    label: 'APR-JUN',
    key: 2
  },
  {
    label: 'JUL-SEP',
    key: 3
  },
  {
    label: 'OCT-DEC',
    key: 4
  },
  {
    label: 'JAN-JUN',
    key: 5
  },
  {
    label: 'JUL-DEC',
    key: 6
  }
];
export const feedbackQuaterList = [
  {
    label: 'JAN',
    key: 1
  },
  {
    label: 'FEB',
    key: 2
  },
  {
    label: 'MAR',
    key: 3
  },
  {
    label: 'APR',
    key: 4
  },
  {
    label: 'MAY',
    key: 5
  },
  {
    label: 'JUN',
    key: 6
  },
  {
    label: 'JUL',
    key: 7
  },
  {
    label: 'AUG',
    key: 8
  },
  {
    label: 'SEP',
    key: 9
  },
  {
    label: 'OCT',
    key: 10
  },
  {
    label: 'NOV',
    key: 11
  },
  {
    label: 'DEC',
    key: 12
  },
  {
    label: 'JAN-MAR',
    key: 13
  },
  {
    label: 'APR-JUN',
    key: 14
  },
  {
    label: 'JUL-SEP',
    key: 15
  },
  {
    label: 'OCT-DEC',
    key: 16
  },
  {
    label: 'JAN-JUN',
    key: 17
  },
  {
    label: 'JUL-DEC',
    key: 18
  }
];
export const feedbackQuater2 = [
  {
    label: 'Qtr1',
    key: 1
  },
  {
    label: 'Qtr2',
    key: 2
  }
];

export const feedbackYear = [
  {
    label: '2018-2019',
    key: '2018-19'
  },
  {
    label: '2019-2020',
    key: '2019-20'
  },
  {
    label: '2020-2021',
    key: '2020-21'
  },
  {
    label: '2021-2022',
    key: '2021-22'
  },
  {
    label: '2022-2023',
    key: '2022-23'
  },
  {
    label: '2023-2024',
    key: '2023-24'
  }
];
export const information_status = [
  {
    label: 'Pending',
    key: 1
  },
  {
    label: 'Partial',
    key: 2
  },
  {
    label: 'Received',
    key: 3
  },
  {
    label: 'Not Received',
    key: 4
  },
  {
    label: 'Internally Resolved',
    key: 5
  }
];

export const information_answer_type = [
  {
    label: 'Attachment',
    key: 1
  },
  {
    label: 'Comment',
    key: 2
  },
  {
    label: 'Will Provide Later',
    key: 3
  }
];
export const newsletterStatus = [
  {
    label: 'Hold',
    key: '0'
  },
  {
    label: 'Sending',
    key: '1'
  },
  {
    label: 'Completed',
    key: '2'
  }
];

export const newsletterFromGroup = [
  {
    label: 'no-reply<no-reply@befree.com.au>',
    key: 'no-reply@befree.com.au'
  },
  {
    label: 'payroll<payroll@befree.com.au>',
    key: 'payroll@befree.com.au'
  }
];

export const staffAssignInOtherModule = [
  {
    label: 'Not Assign',
    key: 0
  },
  {
    label: 'Default Bookkeeping Quote Assignee',
    key: 1
  },
  {
    label: 'Default Payroll Quote Assignee',
    key: 2
  },
  {
    label: 'Default Taxation Quote Assignee',
    key: 3
  },
  {
    label: 'Prepare Quote',
    key: 4
  },
  {
    label: 'Approve Quote',
    key: 5
  },
  {
    label: 'Both Quote Prepare & Approve',
    key: 6
  }
];
export const SnoozeOrReminderDays = [
  {
    label: 'N/A',
    key: -1
  },
  {
    label: 'Stop',
    key: 0
  },
  {
    label: '1',
    key: 1
  },
  {
    label: '2',
    key: 2
  },
  {
    label: '3',
    key: 3
  },
  {
    label: '4',
    key: 4
  },
  {
    label: '5',
    key: 5
  },
  {
    label: '6',
    key: 6
  },
  {
    label: '7',
    key: 7
  },
  {
    label: '8',
    key: 8
  },
  {
    label: '9',
    key: 9
  },
  {
    label: '10',
    key: 10
  }
];
// export const managementFrequency = [
//   {
//     label: 'Monthly',
//     key: 1
//   },
//   {
//     label: 'Bimonthly',
//     key: 2
//   },
//   {
//     label: 'Quarterly',
//     key: 3
//   },
//   {
//     label: 'Half Yearly',
//     key: 6
//   },
//   {
//     label: 'Yearly',
//     key: 12
//   }
// ];

export class GoogleDriveSettings {
  public static API_KEY = "AIzaSyDxHi16eI2OQq8AksrHNOWO9BCvx-EFy4Q";
  public static CLIENT_SECRET = "600894025152-otcqqse1232tuts7ssgmk3ql9jm618et.apps.googleusercontent.com";
  public static SCOPE_PROFILE = "profile";
  public static SCOPE_EMAIL = "email";
  public static SCOPE_URL = "https://www.googleapis.com/auth/drive";
}

export const halfDayOrFullDay = [
  {
    label: '',
    key: ''
  },
  {
    label: 'Half Day',
    key: 0
  },
  {
    label: 'Full Day',
    key: 1
  }
];

export const halfDayList = [
  {
    label: '',
    key: ''
  },
  {
    label: 'First Half',
    key: 1
  },
  {
    label: 'Second Half',
    key: 2
  }
];

export const hrSat = [
  {
    label: '',
    key: ''
  },
  {
    label: 'None',
    key: 0
  },
  {
    label: 'All Saturday',
    key: 1
  },
  {
    label: '1st & 3rd Saturday',
    key: 2
  }
];

export const userType = [
  {
    label: '',
    key: ''
  },
  {
    label: 'Probation',
    key: 0
  },
  {
    label: 'Permanent',
    key: 1
  },
  {
    label: 'Contractual',
    key: 2
  }
];


export const CLIENTTYPEINFO = [
  {
    label: '',
    key: ''
  },
  {
    label: 'B2B',
    key: 1
  },
  {
    label: 'B2C',
    key: 2
  }
];

export const BILLINGFROM = [
  {
    label: '',
    key: ''
  },
  {
    label: 'Befree',
    key: 1
  },
  {
    label: 'SuperRecords',
    key: 2
  }
];

export const BANKCHANGESTATUS = [
  {
    label: 'Pending',
    key: 0
  },
  {
    label: 'Approved',
    key: 1
  },
  {
    label: 'Rejected',
    key: 2
  }
];

export const BANKTYPEFILTER = [
  {
    label: 'Bank',
    key: 1
  },
  {
    label: 'Supplier',
    key: 2
  },
  {
    label: 'Employee',
    key: 3
  }
];

export const TEAM_TYPE = [
  {
    label: "SME",
    key: "SME",
  },
  {
    label: "EBU",
    key: "EBU",
  },
];

export const CLIENT_PAYROLL_LIST = [
  {
    label: "Auto send to xero",
    key: 0,
  },{
    label: "Manual",
    key: 1,
  },
]

export const WELCOME_KIT_STATUS = [
  {
    label: "Pending",
    key: 0,
  },
  {
    label: "Dispatch",
    key: 1,
  },
  {
    label: "Received",
    key: 2,
  },
];

export const SHIRT_SIZE_DROPDOWN = [
  {
    label: 'S',
    key: 'S'
  },
  {
    label: 'M',
    key: 'M'
  },
  {
    label: 'L',
    key: 'L'
  },
  {
    label: 'XL',
    key: 'XL'
  },
  {
    label: 'XXL',
    key: 'XXL'
  }
];

export const BLOOD_GROUP_DROPDOWN = [
  {
    label: 'A+',
    key: 'A+'
  },
  {
    label: 'A-',
    key: 'A-'
  },
  {
    label: 'B+',
    key: 'B+'
  },
  {
    label: 'B-',
    key: 'B-'
  },
  {
    label: 'O+',
    key: 'O+'
  },
  {
    label: 'O-',
    key: 'O-'
  },
  {
    label: 'AB+',
    key: 'AB+'
  },
  {
    label: 'AB-',
    key: 'AB-'
  },
];

export const AccountCode = [
  {
    label: '477: Wages and Salaries',
    key: '477'
  },
  {
    label: '6-910: Commissions/Bonus',
    key: '6-910'
  }
];

export const PAYROLL_EMPLOYEE_TYPE = [
  {
    label: "Hourly",
    key: "Hourly",
  },
  {
    label: "Fixed",
    key: "Fixed",
  },
];

export const BOT_STATUS_LIST = [
  {
    key: 0,
    label: "Pending",
  },
  {
    key: 1,
    label: "In Progress",
  },
  {
    key: 2,
    label: "Acknowledge",
  },
];