import { BASE } from './base-constants';

// API Endpoints
export class AdminAPI {
  public static ADMIN_LOGIN = BASE.ADMIN_URL + 'admin/login';
  public static ADMIN_SIGNUP = BASE.ADMIN_URL + 'signup';
  public static ADMIN_FORGOT_PASSWORD = BASE.ADMIN_URL + 'admin/forgotpassword';
  public static ADMIN_RESET_PASSWORD = BASE.ADMIN_URL + 'admin/resetpassword';
  public static DROPDOWN_LIST = BASE.ADMIN_URL + 'dropdown';

  public static ADMIN_USER = BASE.ADMIN_URL + 'user';
  public static ADMIN_USER_PROFILE_INFO = BASE.ADMIN_URL + 'userzohodetail';
  public static ADMIN_USER_DROPDOWN = BASE.ADMIN_URL + 'user/list/data';
  public static ADMIN_USER_RIGHT_REPORT = BASE.ADMIN_URL + 'user/right/report';
  public static ADMIN_USER_ZOHO_REPORT = BASE.ADMIN_URL + 'user/newuser/zohoreport';
  public static ADMIN_USER_HISTORY = BASE.ADMIN_URL + 'user/history';
  public static DESIGNATION = BASE.ADMIN_URL + 'designation';

  //designation right
  public static DESIGNATION_PRIVILEGE = BASE.ADMIN_URL + 'designation/right';

  public static DEPARTMENT = BASE.ADMIN_URL + 'user/hierarchy/department';
  public static HOUR_SHIFT = BASE.ADMIN_URL + 'hr/shift';
  public static LOCATION = BASE.ADMIN_URL + 'hr/location';
  public static CHECKIP_ADDRESS = BASE.ADMIN_URL + 'admin/checkIP';
  public static CHANGE_PASSWORD = BASE.ADMIN_URL + 'user/changepassword';
  public static USER_PRIVILEGE = BASE.ADMIN_URL + 'user/right';
  public static TEAM_DEPARTMENT_WISE = BASE.ADMIN_URL + 'user/hierarchy/team';
  public static TEAM = BASE.ADMIN_URL + 'user/hierarchy/teamlist';
  public static CLIENT_CONTACT = BASE.ADMIN_URL + 'contact';
  public static CLIENT_CONTACT_CLIENT_USERS = BASE.ADMIN_URL + 'contact/client/list';
  public static CLIENT_CONTACT_CLIENT_ADD_USERS = BASE.ADMIN_URL + 'contact/client/add';
  public static CLIENT_CONTACT_CLIENT_EDIT_USERS = BASE.ADMIN_URL + 'contact/client/update';
  public static CLIENT_CONTACT_CLIENT_USERS_EXPORT = BASE.ADMIN_URL + 'contact/client/export';

  public static CLIENT_CONTACT_EXPORT = BASE.ADMIN_URL + 'contact/export';
  public static CLIENT_CONTACT_RELATED_ENTITY = BASE.ADMIN_URL + 'contact/relatedEntity';
  public static CLIENT_CONTACT_COPY_RELATED_ENTITY = BASE.ADMIN_URL + 'contact/copycontact';
  public static CLIENT_CONTACT_HISTORY = BASE.ADMIN_URL + 'contact/history';
  public static CLIENT_CONTACT_REMARK = BASE.ADMIN_URL + 'entity/contactremark';
  public static CLIENT_CONTACT_REMARK_ADD = BASE.ADMIN_URL + 'entity/contactremark/add';
  public static CLIENT_CONTACT_REMARK_UPDATE = BASE.ADMIN_URL + 'entity/contactremark/update';
  public static CLIENT_CONTACT_ARCHIVE = BASE.ADMIN_URL + 'contact/archive';
  public static CLIENT_LIST = BASE.ADMIN_URL + 'entity';
  public static CLIENT_SPECIAL_NOTES = BASE.ADMIN_URL + 'entity/specialnotes';
  public static CLIENT_CHECKLIST_DATA = BASE.ADMIN_URL + 'entity/checklist';
  public static CLIENT_QUESTIONS_DATA = BASE.ADMIN_URL + 'entity/checklistquestion';
  public static CLIENT_QUESTIONS_VIEW_DATA = BASE.ADMIN_URL + 'entity/checklistquestion/view';
  public static ADD_CLIENT_CHECKLIST_DATA = BASE.ADMIN_URL + 'entity/checklist/add';
  public static UPDATE_CLIENT_CHECKLIST_DATA = BASE.ADMIN_URL + 'entity/checklist/update';
  public static ADD_CLIENT_QUESTION_VIEW = BASE.ADMIN_URL + 'entity/checklistquestion/store';
  public static UPDATE_CLIENT_QUESTION_VIEW = BASE.ADMIN_URL + 'entity/checklistquestion/update';
  public static GROUP_DATA = BASE.ADMIN_URL + 'entity/checklistquestion/getGroup';
  public static ADD_ADDITIONAL_QUESTION = BASE.ADMIN_URL + 'entity/checklistquestion/additionalQuestion';
  public static CLIENT_CHECKLIST_HISTORY = BASE.ADMIN_URL + 'entity/checklist/history';
  public static CLIENT_ALLOCATION_HISTORY = BASE.ADMIN_URL + 'entity/allocationotherhistory';
  public static CLIENT_QUESTION_HISTORY = BASE.ADMIN_URL + 'entity/checklistquestion/history';
  public static CLIENT_CHECKLIST_REPORT = BASE.ADMIN_URL + 'entity/checklist/downlaod';

  public static CLIENT_TURNOVER_DATA = BASE.ADMIN_URL + 'entity/clientturnover';
  public static CLIENT_TURNOVER_YEAR_DATA = BASE.ADMIN_URL + 'entity/yearlist';
  public static CLIENT_TURNOVER_EXPORT = BASE.ADMIN_URL + 'entity/clientturnover/export';
  public static DELETE_CLIENT_TURNOVER = BASE.ADMIN_URL + 'entity/clientturnover';

  public static CLIENT_FEEDBACK_DATA = BASE.ADMIN_URL + 'entity/feedback';
  public static FEEDBACK_DATA = BASE.ADMIN_URL + 'feedback';
  public static FEEDBACK_DATA_ADD = BASE.ADMIN_URL + 'feedback/add';
  public static FEEDBACK_DATA_RESOURCE = BASE.ADMIN_URL + 'feedback/resourceclient';
  public static FEEDBACK_DATA_FREQUENCY_UPDATE = BASE.ADMIN_URL + 'feedback/updatefrequency';
  public static FEEDBACK_LOG_LIST = BASE.ADMIN_URL + 'feedback/log';
  public static FEEDBACK_CALL_LOG_LIST = BASE.ADMIN_URL + 'feedback/call';
  public static FEEDBACK_ENTITY = BASE.ADMIN_URL + 'feedback/entity';
  public static FEEDBACK_ENTITY_LIST = BASE.ADMIN_URL + 'feedback/entitylist/list';
  public static FEEDBACK_DATA_CLIENT = BASE.ADMIN_URL + 'feedback/clientstatus';

  public static ADD_SPECIAL_NOTES = BASE.ADMIN_URL + 'entity/specialnotes/store';
  public static TEAM_DESIGNATION_WISE = BASE.ADMIN_URL + 'user/team';

  public static BANK_INFORMATION_LIST = BASE.ADMIN_URL + 'entity/bankinformation/listing';
  public static BANK_LIST = BASE.ADMIN_URL + 'entity/bank';
  public static BANK_TYPE_LIST = BASE.ADMIN_URL + 'entity/account';
  public static BANK_INFORMATION = BASE.ADMIN_URL + 'entity/bankinformation';
  public static BANK_INFORMATION_HISTORY = BASE.ADMIN_URL + 'entity/bankinformation/history';
  public static DOCUMENT_LIST = BASE.ADMIN_URL + 'entity/document';
  public static DOCUMENT_STORE = BASE.ADMIN_URL + 'entity/document/store';
  public static DOCUMENT_DELETE = BASE.ADMIN_URL + 'entity/document/delete';
  public static DOCUMENT_DOWNLOAD = BASE.ADMIN_URL + 'entity/document/download';
  public static DOCUMENT_DOWNLOAD_ZIP = BASE.ADMIN_URL + 'entity/document/downloadzip';
  public static USER_LIST_DEISGNATION_WISE = BASE.ADMIN_URL + 'user/designation/userlist';
  public static USER_HIERARCHY = BASE.ADMIN_URL + 'user/hierarchy';
  public static USER_HIERARCHY_SHOW = BASE.ADMIN_URL + 'user/hierarchy/show';
  public static USER_EXPORT = BASE.ADMIN_URL + 'user/export';

  public static CLIENT_BASIC = BASE.ADMIN_URL + 'entity/show';
  public static CLIENT_HISTORY = BASE.ADMIN_URL + 'entity/history';
  public static CLIENT_UPDATE = BASE.ADMIN_URL + 'entity/update';
  public static CLIENT_ADD = BASE.ADMIN_URL + 'entity/store';
  public static CLIENT_CHECK_DUPLICATE = BASE.ADMIN_URL + 'entity/checkduplication';
  public static CLIENT_BELONGSTO = BASE.ADMIN_URL + 'billing/groupclientbelongsto/list';
  public static CLIENT_BELONGSTO_UPDATE = BASE.ADMIN_URL + 'billing/groupclientbelongsto';
  public static CLIENT_BELONGSTO_ADD = BASE.ADMIN_URL + 'billing/groupclientbelongsto/add';
  public static GROUP_WISE_ENTITY_FIELD_LIST = BASE.ADMIN_URL + 'entity/dynamicfield/listing';

  public static QUALITY_CONTROL_LIST = BASE.ADMIN_URL + 'quality';
  public static GET_QUALITY_CONTROL_LIST_BY_ID = BASE.ADMIN_URL + 'quality/show/';
  public static AM_NOTES_LIST = BASE.ADMIN_URL + 'entity/crmnotes';
  public static AM_NOTES_EXPORT = BASE.ADMIN_URL + 'entity/crmnotes/export';
  public static MANAGEMENT_CALL_LIST = BASE.ADMIN_URL + 'entity/callmanagement';
  public static MANAGEMENT_CALL_EXPORT = BASE.ADMIN_URL + 'entity/callmanagement/export';
  public static CLIENT_SOFTWARE_LIST = BASE.ADMIN_URL + 'entity/software';
  public static CLIENT_SOFTWARE_ADD = BASE.ADMIN_URL + 'entity/software/add';
  public static CLIENT_SOFTWARE_UPDATE = BASE.ADMIN_URL + 'entity/software/update';
  public static CLIENT_SOFTWARE_DELETE = BASE.ADMIN_URL + 'entity/software/delete';
  public static CLIENT_SOFTWARE_EXPORT = BASE.ADMIN_URL + 'entity/software/export';
  public static SOFTWARE_LIST = BASE.ADMIN_URL + 'entity/software/fetch';
  public static ENTITY_ALLOCATION_LIST = BASE.ADMIN_URL + 'entity/allocation';
  public static EMPLOYEE_INFORMATION_LIST_LIST = BASE.ADMIN_URL + 'entity/employeeinfo';
  public static EMPLOYEE_INFORMATION_EXPORT = BASE.ADMIN_URL + 'entity/employeeinfo/export';
  public static CONTACT_INFORMATION_ADDRESS_LIST = BASE.ADMIN_URL + 'entity/address';
  public static CONTACT_INFORMATION_ADDRESS_ADD = BASE.ADMIN_URL + 'entity/address/add';
  public static CONTACT_INFORMATION_ADDRESS_UPDATE = BASE.ADMIN_URL + 'entity/address/update';
  public static CONTACT_INFORMATION_ADDRESS_EXPORT = BASE.ADMIN_URL + 'entity/address/export';
  public static CONTACT_INFORMATION_ADDRESS_VIEW = BASE.ADMIN_URL + 'entity/address/view';

  public static IMPORT_CLIENTS_FROM_ZOHO = BASE.ADMIN_URL + 'importzohoclients';

  public static CLIENT_REPORT = BASE.ADMIN_URL + 'report/saved';
  public static CLIENT_REPORT_FILTER_FIELD = BASE.ADMIN_URL + 'report/fields';
  public static CLIENT_REPORT_DELETE = BASE.ADMIN_URL + 'report/delete';
  public static CLIENT_REPORT_SHARED_USER_LIST = BASE.ADMIN_URL + 'report/shareduser';
  public static CLIENT_REPORT_SHARED_TO_USER = BASE.ADMIN_URL + 'report/reportshare';

  public static DYNAMIC_FIELD_GROUP = BASE.ADMIN_URL + 'entity/dynamicgroup';
  public static DYNAMIC_FIELD = BASE.ADMIN_URL + 'entity/dynamicfield';
  public static DYNAMIC_FIELD_DOWNLOAD_EXCEL = BASE.ADMIN_URL + 'entity/dynamicfield/export';

  public static CLIENT_REPORT_ADD = BASE.ADMIN_URL + 'report/store';
  public static CLIENT_REPORT_UPDATE = BASE.ADMIN_URL + 'report/update';
  public static CLIENT_REPORT_VIEW = BASE.ADMIN_URL + 'report/view';
  public static CLIENT_GENERATE_REPORT = BASE.ADMIN_URL + 'report/entity/generatereport';
  public static CLIENT_GENERATE_REPORT_EXCEL = BASE.ADMIN_URL + 'report/entity/export';

  public static BANK_GENERATE_REPORT = BASE.ADMIN_URL + 'report/bank/generatereport';
  public static BANK_GENERATE_REPORT_EXCEL = BASE.ADMIN_URL + 'report/bank/export';

  public static CLIENT_ALLOCATION_GENERATE_REPORT = BASE.ADMIN_URL + 'report/allocation/generatereport';
  public static CLIENT_ALLOCATION_GENERATE_REPORT_EXCEL = BASE.ADMIN_URL + 'report/allocation/export';

  public static INVOICE_GENERATE_REPORT = BASE.ADMIN_URL + 'report/invoice/generatereport';
  public static CLIENT_WISE_GENERATE_REPORT = BASE.ADMIN_URL + 'report/clientinvoice/generatereport';
  public static BILLING_GENERATE_REPORT = BASE.ADMIN_URL + 'report/billing/generatereport';
  public static BILLING_SERVICE_GENERATE_REPORT = BASE.ADMIN_URL + 'report/billingservices/generatereport';
  public static BILLING_SUBACTIVITY_GENERATE_REPORT = BASE.ADMIN_URL + 'report/billingsubactivity/generatereport';
  public static BILLING_HOSTING_USER_GENERATE_REPORT = BASE.ADMIN_URL + 'report/billinghostinguser/generatereport';
  public static BILLING_TAX_TURNOVER_GENERATE_REPORT = BASE.ADMIN_URL + 'report/billingtaxturnover/generatereport';

  public static TICKET_GENERATE_REPORT = BASE.ADMIN_URL + 'report/ticket/generatereport';
  public static TICKET_GENERATE_REPORT_EXCEL = BASE.ADMIN_URL + 'report/ticket/export';

  // Invoice API
  public static INVOICE_STATUS_LIST = BASE.ADMIN_URL + 'invoice/status/list';
  public static INVOICE_STATUS_WISE_LIST = BASE.ADMIN_URL + 'invoice';
  public static INVOICE_SHOW = BASE.ADMIN_URL + 'invoice/show';
  public static INVOICE_WIP_LIST = BASE.ADMIN_URL + 'invoice/wip';
  public static INVOICE_WIP_PREVIEW = BASE.ADMIN_URL + 'invoice/preview';
  public static INVOICE_NOTES_ADD = BASE.ADMIN_URL + 'invoice/notes';
  public static INVOICE_UPDATE = BASE.ADMIN_URL + 'invoice/update';
  public static INVOICE_SAVE_PREVIEW = BASE.ADMIN_URL + 'invoice/savepreview';
  public static INVOICE_DISMISS = BASE.ADMIN_URL + 'invoice/dismiss';
  public static INVOICE_ADVANCE_FEE_DETAIL = BASE.ADMIN_URL + 'invoice/advance';
  public static INVOICE_RECURRING_LIST = BASE.ADMIN_URL + 'invoice/recurring/list';
  public static INVOICE_RECURRING_ACTIVE = BASE.ADMIN_URL + 'invoice/recurring/active';
  public static INVOICE_RECURRING_VIEW = BASE.ADMIN_URL + 'invoice/recurring/previewshow';
  public static INVOICE_RECURRING_GETSERVICE = BASE.ADMIN_URL + 'invoice/recurring/getservice';
  public static INVOICE_RECURRING_GETENTITY = BASE.ADMIN_URL + 'invoice/recurring/getentity';
  public static INVOICE_RECURRING_SAVE = BASE.ADMIN_URL + 'invoice/recurring/store';
  public static INVOICE_RECURRING_HISTORY = BASE.ADMIN_URL + 'invoice/recurring/history';
  public static INVOICE_ACCOUNT_LIST = BASE.ADMIN_URL + 'invoice/account/list';
  public static INVOICE_STATUS_CHANGE = BASE.ADMIN_URL + 'invoice/statuschange';
  public static INVOICE_SEND_TO_CLIENT_PREVIEW = BASE.ADMIN_URL + 'invoice/sendpreview';
  public static INVOICE_SEND_TO_CLIENT = BASE.ADMIN_URL + 'invoice/sendtoclient';
  public static INVOICE_SEND_TO_CLIENT_PREVIEW_SHOW = BASE.ADMIN_URL + 'invoice/showsendpreview/detail';
  public static INVOICE_PDF_DOWNLOAD = BASE.ADMIN_URL + 'invoice/download/pdf';
  public static INVOICE_SEND_TO_XERO = BASE.ADMIN_URL + 'invoice/xero/postinvoice';
  public static INVOICE_MOVE_TO_PAID = BASE.ADMIN_URL + 'invoice/xero/getinvoice';
  public static INVOICE_EXPORT_TO_CSV = BASE.ADMIN_URL + 'invoice/importcsv/list';
  public static INVOICE_MOVE_TO_DEBTORS_MANUALLY = BASE.ADMIN_URL + 'invoice/move/debtors';
  public static MONTHLY_INVOICE_REPORT_GENERATE = BASE.ADMIN_URL + 'report/monthlyinvoice/generatereport';
  public static MONTHLY_INVOICE_REPORT_GENERATE_EXCEL = BASE.ADMIN_URL + 'report/monthlyinvoice/export';

  // Uncharge Unit API
  public static UNCHARGEUNIT_LIST = BASE.ADMIN_URL + 'invoice/unchargeunits/list';
  public static UNCHARGEUNIT_LIST_EXPORT_EXCEL = BASE.ADMIN_URL + 'invoice/unchargeunits/export';

  public static UNCHARGEUNIT_TIMESHEET_LIST = BASE.ADMIN_URL + 'invoice/unchargeunits/timesheetunit';
  public static UNCHARGEUNIT_TIMESHEET_LIST_EXPORT_EXCEL = BASE.ADMIN_URL + 'invoice/unchargeunits/timesheetunit/export';

  // Debtors Management
  public static DEBTORS_MANAGEMENT_LIST = BASE.ADMIN_URL + 'dm';
  public static DEBTORS_MANAGEMENT_LIST_EXPORT_EXCEL = BASE.ADMIN_URL + 'dm/export';
  public static DEBTORS_MANAGEMENT_COMMENT_LIST = BASE.ADMIN_URL + 'dm/comment';
  public static DEBTORS_MANAGEMENT_MAIL_DATA = BASE.ADMIN_URL + 'dm/mailData/data';
  public static DEBTORS_MANAGEMENT_TEMPLATE_LIST = BASE.ADMIN_URL + 'dm/template/list';

  // WR3 Module
  public static WR3_LIST = BASE.ADMIN_URL + 'wr3';
  public static WR3_LIST_EXPORT_EXCEL = BASE.ADMIN_URL + 'wr3/export';
  public static WR3_COMMENT_LIST = BASE.ADMIN_URL + 'wr3/comment';

  // System Setup
  public static SYSTEM_SETUP_LIST_CLIENT = BASE.ADMIN_URL + 'systemsetup/listbyclient';
  public static SYSTEM_SETUP_LIST_STAGE = BASE.ADMIN_URL + 'systemsetup/bystage';
  public static SYSTEM_SETUP_UPDATE_STAGE = BASE.ADMIN_URL + 'systemsetup/updatestage';
  public static SYSTEM_SETUP_LIST_FOR_PENDINGWORKSHEET = BASE.ADMIN_URL + 'pendingworksheetschedule/listbyentity';
  public static SYSTEM_SETUP_LIST_FOR_PENDINGWORKSHEET_SCHEDULE = BASE.ADMIN_URL + 'pendingworksheetschedule';
  public static SYSTEM_SETUP_LIST_FOR_PENDINGWORKSHEET_SCHEDULE_ADD = BASE.ADMIN_URL + 'pendingworksheetschedule/add';
  public static SYSTEM_SETUP_UPDATE_BILLING_INFO = BASE.ADMIN_URL + 'systemsetup/fetchbillinginformation';
  public static SYSTEM_SETUP_UPDATE_BDMS_INFO = BASE.ADMIN_URL + 'systemsetup/updatebdmsupdationstage';

  // Permanent Info
  public static PERMANENT_INFO_LIST = BASE.ADMIN_URL + 'permanentinfo';
  public static PERMANENT_INFO_UPDATE = BASE.ADMIN_URL + 'permanentinfo/update';
  public static PERMANENT_INFO_HISTORY = BASE.ADMIN_URL + 'permanentinfo/history';

  // Import entity from zoho
  public static IMPORTENTITYFROMZOHO = BASE.ADMIN_URL + 'importzohoclients';

  // Welcome Email
  public static WELCOME_EMAIL_LIST = BASE.ADMIN_URL + 'welcomemail';
  public static WELCOME_EMAIL_TEMPLATE = BASE.ADMIN_URL + 'welcomemail/fetchemailtemplate';
  public static WELCOME_EMAIL_TO_CC = BASE.ADMIN_URL + 'welcomemail/fetchdetail';
  public static WELCOME_EMAIL_ADD = BASE.ADMIN_URL + 'welcomemail/store';
  public static WELCOME_EMAIL_UPDATE = BASE.ADMIN_URL + 'welcomemail/update';

  // New Client Review
  public static NEW_CLIENT_REVIEW_LIST = BASE.ADMIN_URL + 'review';
  public static NEW_CLIENT_REVIEW_QUESTION_DATA = BASE.ADMIN_URL + 'review/questionlist';
  public static NEW_CLIENT_REVIEW_LOG = BASE.ADMIN_URL + 'review/log';
  public static NEW_CLIENT_REVIEW_GROUP = BASE.ADMIN_URL + 'review/group';
  public static NEW_CLIENT_REVIEW_QUESTION = BASE.ADMIN_URL + 'review/question';
  public static NEW_CLIENT_REVIEW_UPDATE = BASE.ADMIN_URL + 'review/update';

  // Billing Basic
  public static BILLING = BASE.ADMIN_URL + 'billing';
  public static BILLING_HISTORY = BASE.ADMIN_URL + 'billing/history';
  public static BILLING_HISTORY_FEES = BASE.ADMIN_URL + 'billing/historyBK';
  public static BILLING_SERVICES_HISTORY = BASE.ADMIN_URL + 'billing/service/history';
  public static BILLING_SERVICES_SUBACTIVITY_HISTORY = BASE.ADMIN_URL + 'billing/subactivity/history';
  public static BILLING_BASIC = BASE.ADMIN_URL + 'billing/basic';
  public static BILLING_BASIC_EXPORT = BASE.ADMIN_URL + 'billing/basic';
  public static BILLING_BASIC_VIEW = BASE.ADMIN_URL + 'billing';
  public static BILLING_BASIC_ENTITY = BASE.ADMIN_URL + 'billing/related';
  public static BILLING_SUBSCRIPTION_PLAN = BASE.ADMIN_URL + 'billing/plan/list';
  public static BILLING_SUBSCRIPTION = BASE.ADMIN_URL + 'billing/subscription';
  public static BILLING_RECURRING_LIST = BASE.ADMIN_URL + 'billing/recurring/list';
  public static BILLING_SUBSCRIPTION_SOFTWARE = BASE.ADMIN_URL + 'billing/software/list';
  public static BILLING_SUBSCRIPTION_SOFTWARE_DATA = BASE.ADMIN_URL + 'billing/software';
  public static BILLING_SUBSCRIPTION_SOFTWARE_DATA_ADD = BASE.ADMIN_URL + 'billing/software/add';
  public static BILLING_SUBSCRIPTION_PLAN_DATA = BASE.ADMIN_URL + 'billing/plan';
  public static BILLING_SUBSCRIPTION_PLAN_DATA_ADD = BASE.ADMIN_URL + 'billing/plan/add';
  public static BILLING_TAXATION = BASE.ADMIN_URL + 'billing/tax';
  public static BILLING_TAXATION_TURNOVER = BASE.ADMIN_URL + 'billing/turnover';
  public static BILLING_SMSF = BASE.ADMIN_URL + 'billing/smsf';
  public static BILLING_HOSTING = BASE.ADMIN_URL + 'billing/hosting';
  public static BILLING_HOSTING_USER_LIST = BASE.ADMIN_URL + 'billing/hosting/user';

  public static BILLING_BOOKKEEPING = BASE.ADMIN_URL + 'billing/bk';
  public static BILLING_PAYROLL = BASE.ADMIN_URL + 'billing/payroll';
  public static BILLING_PAYROLL_CALC_LIST = BASE.ADMIN_URL + 'billing/payroll/payrollcalc/list';
  public static BILLING_PAYROLL_CALC_ADD = BASE.ADMIN_URL + 'billing/payroll/payrollcalc/add';
  public static BILLING_PAYROLL_CALC_EDIT = BASE.ADMIN_URL + 'billing/payroll/payrollcalc';
  public static BILLING_SUBACTIVITY = BASE.ADMIN_URL + 'billing/subactivity';
  // Befree Write Off
  public static BEFREE_WRITEOFF_LIST = BASE.ADMIN_URL + 'writeoff/befree/listing';
  public static BEFREE_WRITEOFF_UPDATE = BASE.ADMIN_URL + 'writeoff/befree/update';
  public static BEFREE_WRITEOFF_SIX_WORKSHEET = BASE.ADMIN_URL + 'writeoff/befree/lastsixmonthtimesheet';

  // Reviewer Write Off
  public static REVIEWER_WRITEOFF_LIST = BASE.ADMIN_URL + 'writeoff/reviewer/listing';
  public static REVIEWER_WRITEOFF_UPDATE = BASE.ADMIN_URL + 'writeoff/reviewer/update';
  public static REVIEWER_WRITEOFF_ADD = BASE.ADMIN_URL + 'writeoff/reviewer/add';
  public static REVIEWER_WRITEOFF_SIX_WORKSHEET = BASE.ADMIN_URL + 'writeoff/reviewer/worksheet';
  public static REVIEWER_WRITEOFF_HISTORY = BASE.ADMIN_URL + 'writeoff/reviewer/history';
  // Write Off Reason Management
  public static REVIEWER_WRITEOFF_REASON_LIST = BASE.ADMIN_URL + 'writeoff/reasonmanagement/listing';
  public static REVIEWER_WRITEOFF_REASON_ADD = BASE.ADMIN_URL + 'writeoff/reasonmanagement/add';
  public static REVIEWER_WRITEOFF_REASON_UPDATE = BASE.ADMIN_URL + 'writeoff/reasonmanagement/update';

  // master checklist api const
  public static MASTER_CHECKLIST_EXCEL_DOWNLOAD = BASE.ADMIN_URL + 'worksheet/masterchecklist/export';
  public static MASTER_CHECKLIST_LISTEING = BASE.ADMIN_URL + 'worksheet/masterchecklist';
  public static MASTER_CHECKLIST_TASK_DATA = BASE.ADMIN_URL + 'worksheet/masterchecklist/getmasteractivity';
  public static UPDATE_MASTER_CHECKLIST_DATA = BASE.ADMIN_URL + 'worksheet/masterchecklist/update';
  public static SAVE_MASTER_CHECKLIST_DATA = BASE.ADMIN_URL + 'worksheet/masterchecklist/store';

  // master checklist questions
  public static MASTER_CHECKLIST_QUESTION = BASE.ADMIN_URL + 'worksheet/masterchecklistquestion';
  public static MASTER_CHECKLIST_UPDATE_DATA = BASE.ADMIN_URL + 'worksheet/masterchecklistquestion/updatestatus';
  public static MASTER_CHECKLIST_QUESTION_DOWNLOAD = BASE.ADMIN_URL + 'worksheet/masterchecklistquestion/export';
  public static GET_GROUP_DATA = BASE.ADMIN_URL + 'entity/checklistquestion/getGroup';
  public static UPDATE_MASTER_CHECKLIST_ALL_DATA = BASE.ADMIN_URL + 'worksheet/masterchecklistquestion/update';
  public static ADD_MASTER_CHECKLIST_ALL_DATA = BASE.ADMIN_URL + 'worksheet/masterchecklistquestion/store';

  // master activity
  public static MASTER_ACTIVITY = BASE.ADMIN_URL + 'worksheet/master';
  public static MASTER_ACTIVITY_DOWNLOAD = BASE.ADMIN_URL + 'worksheet/master/export';

  // task list
  public static GET_TASK_LIST = BASE.ADMIN_URL + 'worksheet/task';
  public static TASK_LIST_DOWNLOAD = BASE.ADMIN_URL + 'worksheet/task/export';

  // sub activity
  public static GET_SUB_ACTIVITY = BASE.ADMIN_URL + 'worksheet/subactivity';
  public static SUB_ACTIVITY_DOWNLOAD = BASE.ADMIN_URL + 'worksheet/subactivity/export';

  // sub client list
  public static SUB_CLIENT_LIST = BASE.ADMIN_URL + 'worksheet/subclient';
  public static SUB_CLIENT_LIST_EXPORT = BASE.ADMIN_URL + 'worksheet/subclient/export';
  public static SUB_CLIENT_UPDATE = BASE.ADMIN_URL + 'worksheet/subclient/update';
  public static SUB_CLIENT_ADD = BASE.ADMIN_URL + 'worksheet/subclient/store';
  public static SUB_CLIENT_UPDATE_STATUS = BASE.ADMIN_URL + 'worksheet/subclient/updatestatus';
  public static SUB_CLIENT_LIST_DROPDOWN = BASE.ADMIN_URL + 'worksheet/subclient/dropdown';

  // master checklist group
  public static GET_MASTER_CHECKLIST_GROUP = BASE.ADMIN_URL + 'worksheet/checklistgroup';
  public static MASTER_CHECKLIST_DOWNLOAD = BASE.ADMIN_URL + 'worksheet/checklistgroup/export';
  public static MASTER_CHECKLIST_UPDATE_STATUS = BASE.ADMIN_URL + 'worksheet/checklistgroup/updatestatus';
  public static GET_SUB_ACTIVITY_DATA = BASE.ADMIN_URL + 'worksheet/checklistgroup/getsubactivity';
  public static CHECKLIST_UPDATE = BASE.ADMIN_URL + 'worksheet/checklistgroup/update';
  public static CHECKLIST_SAVE = BASE.ADMIN_URL + 'worksheet/checklistgroup/store';

  // Add Worksheet
  public static ADD_WORKSHEET = BASE.ADMIN_URL + 'worksheet/store';
  public static GET_ASSIGNEE = BASE.ADMIN_URL + 'worksheet/additionalassignee';

  // Get review or knockback
  public static GET_REVIEW_KNOCKBACK_DATA = BASE.ADMIN_URL + 'worksheet/reviewknockback';
  public static GET_ALL_STATUS = BASE.ADMIN_URL + 'worksheet/status';
  public static REVIEW_KNOCK_BACK_DOWNLOAD = BASE.ADMIN_URL + 'worksheet/export';
  public static UPDATE_WORKSHEET = BASE.ADMIN_URL + 'worksheet/update';
  public static UPDATE_WORKSHEET_MULTIPLESTATUS = BASE.ADMIN_URL + 'worksheet/multipleupdate';
  public static DELETE_WORKSHEET = BASE.ADMIN_URL + 'worksheet/delete/multiple';
  public static FETCH_OTHER_WORKSHEET = BASE.ADMIN_URL + 'worksheet/pullworksheet';
  public static REPEAT_WORKSHEET_LIST = BASE.ADMIN_URL + 'worksheet/repeattask';
  public static REPEAT_WORKSHEET_ADD = BASE.ADMIN_URL + 'worksheet/addrepeattask';
  // Get my worksheet data
  public static MY_WORKSHEET_LISTING = BASE.ADMIN_URL + 'worksheet/myworksheet';
  public static INCOMPLETE_WORKSHEET_LISTING = BASE.ADMIN_URL + 'worksheet/incompletedworksheet';
  public static REVIEW_OR_KNOCKBACK_WORKSHEET_LISTING = BASE.ADMIN_URL + 'worksheet/reviewknockback';
  public static PEER_REVIEW_WORKSHEET_LISTING = BASE.ADMIN_URL + 'worksheet/peerreview';
  public static COMPLETED_WORKSHEET_LISTING = BASE.ADMIN_URL + 'worksheet/completedworksheet';
  public static BEFREE_WORKSHEET_LISTING = BASE.ADMIN_URL + 'worksheet/befreeworksheet';
  public static WORKSHEET_STATUS_LOG_LISTING = BASE.ADMIN_URL + 'worksheet/worksheetlog';
  public static WORKSHEET_STATUS_RIGHTS_WISE_LISTING = BASE.ADMIN_URL + 'worksheet/status';
  public static WORKSHEET_ADDITIONAL_ASSIGNEE = BASE.ADMIN_URL + 'worksheet/additionalassignee';
  public static WORKSHEET_REVIEWER_ASSIGNEE = BASE.ADMIN_URL + 'worksheet/assignreviewer';
  public static WORKSHEET_PEER_REVIEWER_ASSIGNEE = BASE.ADMIN_URL + 'worksheet/getpeerreviewerassignee';
  public static WORKSHEET_GET_SUBENTITY = BASE.ADMIN_URL + 'entity/subclient';

  // Timesheet API
  public static TIMESHEET_LISTING = BASE.ADMIN_URL + 'timesheet';
  public static TIMESHEET_SUMMARY_LISTING = BASE.ADMIN_URL + 'timesheetsummary/listing';
  public static TIMESHEET_DETAILS = BASE.ADMIN_URL + 'timesheet/details';
  public static TIMESHEET_PAYROLL_OPTIONS = BASE.ADMIN_URL + 'timesheet/payrolloption';
  public static TIMESHEET_BANK_DETAILS = BASE.ADMIN_URL + 'timesheet/bankinfo';

  // Get worksheet checklist data
  public static GET_TASK_CHECKLIST = BASE.ADMIN_URL + 'worksheet/taskchecklist';
  public static GET_WORKSHEET_HEADER_DATA = BASE.ADMIN_URL + 'worksheet/view';
  public static GET_SOFTWARE_DATE = BASE.ADMIN_URL + 'entity/show';
  public static WORKSHEET_CHECKLIST_STORE = BASE.ADMIN_URL + 'worksheet/taskchecklist/store';
  public static WORKSHEET_DOCUMENT_LIST_DATA = BASE.ADMIN_URL + 'worksheet/uploaddocument';
  public static WORKSHEET_DOCUMENT_UPLOAD = BASE.ADMIN_URL + 'worksheet/uploaddocument/store';
  public static WORKSHEET_DOCUMENT_UPLOAD_DRIVE = BASE.ADMIN_URL + 'worksheet/uploaddocument/drive';
  public static WORKSHEET_DOCUMENT_DELETE = BASE.ADMIN_URL + 'worksheet/removedocument';
  public static WORKSHEET_DOCUMENT_DOWNLOAD = BASE.ADMIN_URL + 'worksheet/downloaddocument';
  public static GET_ACCOUNTANT_DATA = BASE.ADMIN_URL + 'worksheet/taskchecklistnote';
  public static SAVE_DATA_NOTE = BASE.ADMIN_URL + 'worksheet/taskchecklistnote/store';
  public static SAVE_DATA = BASE.ADMIN_URL + 'worksheet/taskchecklist/store';
  public static CHECKLIST_EMAIL_PREVIEW = BASE.ADMIN_URL + 'worksheet/taskchecklist/emailpreview';
  public static WORKSHEET_DOCUMENT_UPDATE = BASE.ADMIN_URL + 'worksheet/updatedocument';
  public static WORKSHEET_REVIEWER_UNIT = BASE.ADMIN_URL + 'worksheet/getreviewerunit';
  public static WORKSHEET_EMAIL_PREVIEW_STORE = BASE.ADMIN_URL + 'worksheet/taskchecklist/storechecklistemail';
  public static WORKSHEET_EMAIL_PREVIEW_FINAL = BASE.ADMIN_URL + 'worksheet/taskchecklist/email/preview';
  public static TRAINING_LIST_DOWNLOAD = BASE.ADMIN_URL + 'worksheet/training/export';
  public static TRAINING_DATA_LISTEING = BASE.ADMIN_URL + 'worksheet/training';
  public static TRAINING_EDIT_DATA = BASE.ADMIN_URL + 'worksheet/training/update';
  public static TRAINING_DATA_SAVE = BASE.ADMIN_URL + 'worksheet/training/store';

  public static RSHEET_SUMARRY_REPORT_GENERATE = BASE.ADMIN_URL + 'report/rsheetsummary/generatereport';
  public static RSHEET_SUMMARY_REPORT_GENERATE_EXCEL = BASE.ADMIN_URL + 'report/rsheetsummary/export';

  public static RSHEET_REPORT_GENERATE = BASE.ADMIN_URL + 'report/rsheet/generatereport';
  public static RSHEET_REPORT_GENERATE_EXCEL = BASE.ADMIN_URL + 'report/rsheet/export';

  public static WORKSHEET_REPORT_GENERATE = BASE.ADMIN_URL + 'report/worksheetreport/generatereport';
  public static WORKSHEET_REPORT_GENERATE_EXCEL = BASE.ADMIN_URL + 'report/worksheetreport/export';

  // Get Ticket
  public static TICKET_LIST = BASE.ADMIN_URL + 'ticket';
  public static TICKET_LIST_EXPORT = BASE.ADMIN_URL + 'ticket/export';
  public static TICKET_TYPE = BASE.ADMIN_URL + 'ticket/type/list';
  public static TICKET_DOWNLOAD_ZIP = BASE.ADMIN_URL + 'ticket/downloadZip';
  public static TICKET_DOWNLOAD = BASE.ADMIN_URL + 'ticket/download';
  public static TICKET_REMOVE_DOCUMENT = BASE.ADMIN_URL + 'ticket/remove';
  public static TICKET_HISTORY = BASE.ADMIN_URL + 'ticket/history';

  // get Fixed fee
  public static FF_CLIENT_LIST = BASE.ADMIN_URL + 'ff/client/list';
  public static FF_CLIENT_EXPORT = BASE.ADMIN_URL + 'ff/client/export';
  public static FF_CLIENT_COMMENT = BASE.ADMIN_URL + 'ff/client';
  public static FF_PROPOSAL_ADD = BASE.ADMIN_URL + 'ff/client/add';
  public static FF_LIST = BASE.ADMIN_URL + 'ff';
  public static FF_SHOW = BASE.ADMIN_URL + 'ff/show';
  public static FF_EXPORT_LIST = BASE.ADMIN_URL + 'ff/export';
  public static FF_STATUS_LIST = BASE.ADMIN_URL + 'ff/status/list';
  public static FF_LOG_LIST = BASE.ADMIN_URL + 'ff/log';
  public static FF_INVOICE_LIST = BASE.ADMIN_URL + 'ff/oldinvoice';
  public static FF_REASON = BASE.ADMIN_URL + 'ff/reason';
  public static FF_PROPOSAL = BASE.ADMIN_URL + 'ff/proposal';

  public static FF_LIST_SOFTWARE = BASE.ADMIN_URL + 'ff/software/softwarelist';
  public static FF_SOFTWARE_LIST = BASE.ADMIN_URL + 'ff/software/list';
  public static FF_SOFTWARE_EXPORT = BASE.ADMIN_URL + 'ff/software/export';
  public static FF_SOFTWARE_ADD_UPDATE = BASE.ADMIN_URL + 'ff/software/addupdate';
  public static FF_SOFTWARE_HISTORY = BASE.ADMIN_URL + 'ff/software/history';

  public static FF_PROPOSAL_PREVIEW = BASE.ADMIN_URL + 'ff/preview';
  public static FF_TEMPLATE = BASE.ADMIN_URL + 'ff/template/list';
  public static FF_TEMPLATE_AFTER_SEND = BASE.ADMIN_URL + 'ff/send';
  public static FF_APPROVE_SHOW = BASE.ADMIN_URL + 'ff/approveshow';
  public static FF_APPROVE = BASE.ADMIN_URL + 'ff/approve';
  public static FF_RESTORE = BASE.ADMIN_URL + 'ff/restore';
  public static FF_DOWNLOAD = BASE.ADMIN_URL + 'ff/download';
  public static FF_REASON_LIST = BASE.ADMIN_URL + 'ff/reason';

  public static FIXEDFEE_GENERATE_REPORT = BASE.ADMIN_URL + 'report/fixedfee/generatereport';
  public static FIXEDFEE_GENERATE_REPORT_EXCEL = BASE.ADMIN_URL + 'report/fixedfee/export';

  // manage email
  public static MANAGEEMAIL_LIST = BASE.ADMIN_URL + 'emailtemplate/list';
  public static MANAGEEMAIL_UPDATE = BASE.ADMIN_URL + 'emailtemplate/update';

  // IP Address
  public static IPADDRESS_LIST = BASE.ADMIN_URL + 'ipaddress/list';
  public static IPADDRESS_ADD = BASE.ADMIN_URL + 'ipaddress/add';
  public static IPADDRESS_UPDATE = BASE.ADMIN_URL + 'ipaddress/update';
  public static IPADDRESS_DELETE = BASE.ADMIN_URL + 'ipaddress/delete';

  // software login
  public static SOFTWARE_LOGIN_LIST = BASE.ADMIN_URL + 'softwarelogin/list';
  public static SOFTWARE_LOGIN_ADD = BASE.ADMIN_URL + 'softwarelogin/add';
  public static SOFTWARE_LOGIN_UPDATE = BASE.ADMIN_URL + 'softwarelogin/update';
  public static SOFTWARE_LOGIN_DELETE = BASE.ADMIN_URL + 'softwarelogin/delete';

  // bulkallocation
  public static BULKALLOCATION_SAVE = BASE.ADMIN_URL + 'bulkallocation/allocation';
  public static BULKALLOCATION_DEALLOCATION = BASE.ADMIN_URL + 'bulkallocation/deallocation';
  public static BULKALLOCATION_ENTITY = BASE.ADMIN_URL + 'bulkallocation/entitylist';
  public static BULKALLOCATION_FETCHENTITY = BASE.ADMIN_URL + 'bulkallocation/fetchentity';
  public static BULKALLOCATION_SERVICE = BASE.ADMIN_URL + 'bulkallocation/allocatedservice';

  // email signature
  public static EMAIL_SIGNATURE = BASE.ADMIN_URL + 'emailsignature/list';
  public static EMAIL_SIGNATURE_SHOW = BASE.ADMIN_URL + 'emailsignature/view';
  public static EMAIL_SIGNATURE_UPDATE = BASE.ADMIN_URL + 'emailsignature/update';
  public static EMAIL_SIGNATURE_ADD = BASE.ADMIN_URL + 'emailsignature/add';
  public static EMAIL_SIGNATURE_DELETE = BASE.ADMIN_URL + 'emailsignature/delete';

  public static SERVICES = BASE.ADMIN_URL + 'services';
  public static FREQUENCY = BASE.ADMIN_URL + 'frequency';
  public static INVOICE = BASE.ADMIN_URL + 'invoice';
  public static ONEOFF_INVOICE = BASE.ADMIN_URL + 'oneoffinvoice';
  public static INVOICE_LOG_LIST = BASE.ADMIN_URL + 'invoice/log';
  public static LOGOUT = BASE.ADMIN_URL + 'admin/logout';

  // conference room
  public static CONFERENCEROOM_LISTING = BASE.ADMIN_URL + 'conferenceroom/listing';
  public static CONFERENCEROOM_UPDATE = BASE.ADMIN_URL + 'conferenceroom/update';
  public static CONFERENCEROOM_STORE = BASE.ADMIN_URL + 'conferenceroom/store';
  public static CONFERENCEROOM_DELETE = BASE.ADMIN_URL + 'conferenceroom/delete';
  public static CONFERENCEROOM_DROPDOWN = BASE.ADMIN_URL + 'conferenceroom/dropdown';

  // discontinue room
  public static DISCONTINUE_QUESTION_LISTING = BASE.ADMIN_URL + 'discontinueentity/discontinuereason/listing';
  public static DISCONTINUE_QUESTION_UPDATE = BASE.ADMIN_URL + 'discontinueentity/discontinuereason/update';
  public static DISCONTINUE_QUESTION_STORE = BASE.ADMIN_URL + 'discontinueentity/discontinuereason/add';
  public static DISCONTINUE_ENTITY_LISTING = BASE.ADMIN_URL + 'discontinueentity/listing';
  public static DISCONTINUE_TICKET_COUNT = BASE.ADMIN_URL + 'ticket/problemfromourside';
  public static DISCONTINUE_ENTITY_STORE = BASE.ADMIN_URL + 'discontinueentity/add';
  public static DISCONTINUE_ENTITY_DETAIL = BASE.ADMIN_URL + 'discontinueentity/viewdetail';
  public static DISCONTINUE_ENTITY_HISTORY = BASE.ADMIN_URL + 'discontinueentity/history';
  public static DISCONTINUE_ENTITY_COMMENT = BASE.ADMIN_URL + 'discontinueentity/comment';
  public static DISCONTINUE_ENTITY_COMMENT_STORE = BASE.ADMIN_URL + 'discontinueentity/comment/add';
  public static DISCONTINUE_ENTITY_QUESTION = BASE.ADMIN_URL + 'discontinueentity/questionanswer/view';
  public static DISCONTINUE_ENTITY_QUESTION_UPDATE = BASE.ADMIN_URL + 'discontinueentity/questionanswer/update';
  public static DISCONTINUE_ENTITY_RESTORE = BASE.ADMIN_URL + 'discontinueentity/restore';
  public static DISCONTINUE_ENTITY_QUESTION_VIEW = BASE.ADMIN_URL + 'discontinueentity/view/questiondetail';
  public static DISCONTINUE_ENTITY_QUESTION_EXPORT = BASE.ADMIN_URL + 'discontinueentity/questiondetail';
  public static DISCONTINUE_ENTITY_REASON_UPDATE = BASE.ADMIN_URL + 'discontinueentity/reason/update';

  // manage shift
  public static SHIFT_LISTING = BASE.ADMIN_URL + 'hr/shift';
  public static SHIFT_VIEW = BASE.ADMIN_URL + 'hr/shift';
  public static SHIFT_STORE = BASE.ADMIN_URL + 'hr/shift/store';
  public static SHIFT_UPDATE = BASE.ADMIN_URL + 'hr/shift';
  public static SHIFT_DELETE = BASE.ADMIN_URL + 'hr/shift/delete';

  // manage holiday
  public static HOLIDAY_MASTER_LIST = BASE.ADMIN_URL + 'hr/holidaymaster';
  public static HOLIDAY_MASTER_STORE = BASE.ADMIN_URL + 'hr/holidaymaster/store';
  public static HOLIDAY_MASTER_UPLOAD = BASE.ADMIN_URL + 'hr/holidaymaster/upload';

  public static HOLIDAY_LIST = BASE.ADMIN_URL + 'hr/holiday';
  public static HOLIDAY_STORE = BASE.ADMIN_URL + 'hr/holiday/store';
  public static HOLIDAY_UPDATE = BASE.ADMIN_URL + 'hr/holiday/update';
  public static HOLIDAY_DELETE = BASE.ADMIN_URL + 'hr/holiday';

  // manage no job
  public static NOJOB_LIST = BASE.ADMIN_URL + 'hr/nojob';
  public static NOJOB_STORE = BASE.ADMIN_URL + 'hr/nojob/store';
  public static NOJOB_UPDATE = BASE.ADMIN_URL + 'hr/nojob';

  // exception shift
  public static EXCEPTIONSHIFT_LISTING = BASE.ADMIN_URL + 'hr/exception';
  public static EXCEPTIONSHIFT_EXPORT = BASE.ADMIN_URL + 'hr/exception/export';
  public static EXCEPTIONSHIFT_UPDATE = BASE.ADMIN_URL + 'hr/exception';
  public static EXCEPTIONSHIFT_STORE = BASE.ADMIN_URL + 'hr/exception/store';
  public static EXCEPTIONSHIFT_DELETE = BASE.ADMIN_URL + 'hr/exception';

  // change in out
  public static CHANGEINOUT_LISTING = BASE.ADMIN_URL + 'hr/punchinout';
  public static CHANGEINOUT_EXPORT = BASE.ADMIN_URL + 'hr/punchinout/export';
  public static CHANGEINOUT_UPDATE = BASE.ADMIN_URL + 'hr/punchinout';
  public static CHANGEINOUT_STORE = BASE.ADMIN_URL + 'hr/punchinout/store';
  public static CHANGEINOUT_DELETE = BASE.ADMIN_URL + 'hr/punchinout';
  public static CHANGEINOUT_USER_LIST = BASE.ADMIN_URL + 'hr/punchinout/userlist';

  public static AMENDMENTINOUT_LISTING = BASE.ADMIN_URL + 'hr/amendmentpunchinout';
  public static AMENDMENTINOUT_UPDATE = BASE.ADMIN_URL + 'hr/punchinoutamedment';
  // daily report
  public static DAILYREPORT_LISTING = BASE.ADMIN_URL + 'hr/dailyreport';
  public static MANUAL_IN_OUT = BASE.ADMIN_URL + 'hr/addmaunalinout';
  public static HR_USER_UPCOMING_HOLIDAY = BASE.ADMIN_URL + 'hr/userupcomingholiday';

  public static GETDETAIL = BASE.ADMIN_URL + 'hr/gethrdeatil';
  public static PUNCHIN_QUESTION = BASE.ADMIN_URL + 'hr/punchinquestion';
  public static LEAVE_BALANCE_LIST = BASE.ADMIN_URL + 'hr/leavebalance';
  public static LEAVE_BALANCE_UPDATE = BASE.ADMIN_URL + 'hr/leavebalance/store';
  public static ATTENDANCE_SUMMARY_BALANCE_UPDATE = BASE.ADMIN_URL + 'hr/attendance/summaryreport/uploadcsv';

  // attendance summary
  public static ATTENDANCE_SUMMARY_LISTING = BASE.ADMIN_URL + 'hr/attendance/summary';
  public static ATTENDANCE_SUMMARY_REPORT_LISTING = BASE.ADMIN_URL + 'hr/attendance/summaryreport';
  public static SEND_APPROVED_REQUEST = BASE.ADMIN_URL + 'hr/attendance';
  public static APPROVED_REQUEST = BASE.ADMIN_URL + 'hr/attendance/approved';
  public static FOLLOWUPEMAIL = BASE.ADMIN_URL + 'hr/attendance/followupMail/';
  public static LEAVE_ADJUSTMENT_REQUEST = BASE.ADMIN_URL + 'hr/attendance/adjustment';

  // HR dashboard
  public static DASHBOARD = BASE.ADMIN_URL + 'hr/dashboard';
  public static PENDINGTIMESHEET_LISTING = BASE.ADMIN_URL + 'hr/attendance/pendingtimesheet/list';
  public static PENDINGTIMESHEET_SENDAPPROVAL = BASE.ADMIN_URL + 'hr/pendingtimesheet/approvalsend';
  public static PENDINGTIMESHEET_APPROVED = BASE.ADMIN_URL + 'hr/pendingtimesheet/approved';

  // newsletter email
  public static NEWSLETTER_CONTCAT_LIST = BASE.ADMIN_URL + 'contact/newsletter/list';
  public static NEWSLETTER_CONTCAT_EXPORT = BASE.ADMIN_URL + 'contact/newsletter/export';
  public static NEWSLETTER_MOVETOARCHIVE = BASE.ADMIN_URL + 'contact/newsletter/movetoarchive';

  public static NEWSLETTER_LIST = BASE.ADMIN_URL + 'newsletter';

  public static NEWSLETTER_GROUP_ADD = BASE.ADMIN_URL + 'newsletter-group/add';
  public static NEWSLETTER_GROUP_ARCHIVED = BASE.ADMIN_URL + 'newsletter-group/archive';
  public static NEWSLETTER_GROUP_LIST = BASE.ADMIN_URL + 'newsletter-group';
  public static NEWSLETTER_EMAILLIST = BASE.ADMIN_URL + 'newsletter-group/emailList';

  // Update Holiday Remark
  public static HRUPDATEREMARK = BASE.ADMIN_URL + 'hr/updateremark';
  // GEt Prious Day in out and update remark also
  public static HRFETCHINOUT = BASE.ADMIN_URL + 'hr/fetchinout';

  // public static TIMESHEET_SUMMARY_LISTING = BASE.ADMIN_URL + 'timesheetsummary/listing';

  // Quote module
  public static QUOTEGROUP_LIST = BASE.ADMIN_URL + 'quote/group';
  public static QUOTEGROUP_EXPORT = BASE.ADMIN_URL + 'quote/group/export';
  public static QUOTEGROUP_STORE = BASE.ADMIN_URL + 'quote/group/store';
  public static QUOTEGROUP_UPDATE = BASE.ADMIN_URL + 'quote/group';

  public static QUOTEQUESTION_LIST = BASE.ADMIN_URL + 'quote/question';
  public static QUOTEQUESTION_EXPORT = BASE.ADMIN_URL + 'quote/question/export';
  public static QUOTEQUESTION_STORE = BASE.ADMIN_URL + 'quote/question/store';
  public static QUOTEQUESTION_UPDATE = BASE.ADMIN_URL + 'quote/question';

  public static QUOTE_LIST = BASE.ADMIN_URL + 'quote/listing';
  public static QUOTE_VIEW = BASE.ADMIN_URL + 'quote/view';
  public static QUOTE_STORE = BASE.ADMIN_URL + 'quote/store';
  public static QUOTE_UPDATE = BASE.ADMIN_URL + 'quote/update';
  public static QUOTE_STAGE_LIST = BASE.ADMIN_URL + 'quote/stage';
  public static QUOTE_LIST_EXPORT = BASE.ADMIN_URL + 'quote/listing';
  public static QUOTE_LOG = BASE.ADMIN_URL + 'quote/stagelog';
  public static IMPORTLEADFROMZOHO = BASE.ADMIN_URL + 'quote/importzoholeads';
  public static IMPORTAGREEMENTLETTERSIGNEDLEAD = BASE.ADMIN_URL + 'quote/importagreementlettersignedlead';
  public static EXISTINGENTITY = BASE.ADMIN_URL + 'quote/entity';
  public static LOOSEITEM = BASE.ADMIN_URL + 'quote/looseitems';
  public static TAXATION_YEAR = BASE.ADMIN_URL + 'quote/getyear';
  public static QUOTE_DOCUMENT_UPLOAD = BASE.ADMIN_URL + 'quote/document/upload';
  public static QUOTE_DOCUMENT_LIST = BASE.ADMIN_URL + 'quote/document/list';
  public static QUOTE_DOCUMENT_DOWNLOAD = BASE.ADMIN_URL + 'quote/document/download';
  public static QUOTE_DOCUMENT_ZIP = BASE.ADMIN_URL + 'quote/document/download/zip';
  public static QUOTE_DOCUMENT_DELETE = BASE.ADMIN_URL + 'quote/document/remove';
  public static QUOTE_SUBACTIVITY = BASE.ADMIN_URL + 'quote/subactivity';
  public static QUOTE_BILLING_STORE = BASE.ADMIN_URL + 'quote/store/subactivity';
  public static QUOTE_TAX_SUBACTIVITY = BASE.ADMIN_URL + 'quote/taxsubactivity';
  public static QUOTE_STORE_TAX_SUBACTIVITY = BASE.ADMIN_URL + 'quote/store/taxsubactivity';
  public static QUOTE_SUBMIT_NOTE = BASE.ADMIN_URL + 'quote/submitnote';
  public static QUOTE_SUBMIT_NOTE_UPDATE = BASE.ADMIN_URL + 'quote/storenote';
  public static QUOTE_ASSIGNEE_DROPDOWN = BASE.ADMIN_URL + 'quote/assigneedropdown';
  public static QUOTE_ASSIGNEE = BASE.ADMIN_URL + 'quote/assignee';
  public static QUOTE_ASSIGNEE_POST = BASE.ADMIN_URL + 'quote/assigneesave';
  public static QUOTE_PREVIEW = BASE.ADMIN_URL + 'quote/preview';
  public static QUOTE_DOWNLOADPDF = BASE.ADMIN_URL + 'quote/generatepdf';
  public static QUOTE_UPDATESTAGE = BASE.ADMIN_URL + 'quote/updatequotestage';
  public static QUOTE_EMAILVIEW = BASE.ADMIN_URL + 'quote/emailview';
  public static QUOTE_RESENDEMAIL = BASE.ADMIN_URL + 'quote/resendemail';
  public static QUOTE_FUTURE = BASE.ADMIN_URL + 'quote/movefuturequote';
  public static QUOTE_AGREEDISAGREE = BASE.ADMIN_URL + 'quote/entityaction';
  public static QUOTE_DOCUSIGN = BASE.ADMIN_URL + 'quote/checkdocusign';
  public static QUOTE_LEADSTEP = BASE.ADMIN_URL + 'quote/leadstep';
  public static QUOTE_AGREEMENTLTR = BASE.ADMIN_URL + 'quote/generateagreementltr';
  public static QUOTE_VIEWDETAIL = BASE.ADMIN_URL + 'quote/viewdetail';
  public static QUOTE_ASSIGNEE_SENDBACK = BASE.ADMIN_URL + 'quote/assigneesendback';
  public static QUOTE_SENDBACK = BASE.ADMIN_URL + 'quote/sendback';
  public static QUOTE_SENDBACK_DATA = BASE.ADMIN_URL + 'quote/sendbackQuote';
  public static QUOTE_SEND_AGREEMENTLTR = BASE.ADMIN_URL + 'quote/sendagreementltr';
  public static QUOTE_REMOVE_SERVICE = BASE.ADMIN_URL + 'quote/removeservice';
  public static QUOTE_MASTERACTIVITYAMOUNT = BASE.ADMIN_URL + 'quote/quotemasteractivityamount';
  public static QUOTE_SUBACTIVITYUNITUPDATE = BASE.ADMIN_URL + 'quote/updatesubactivityunits';

  public static GOOGLE_DRIVE_LIST = BASE.ADMIN_URL + 'googledrive/list';
  public static GOOGLE_DRIVE_UPLOAD_FILE = BASE.ADMIN_URL + 'googledrive/uploadfile';
  public static GOOGLE_DRIVE_ADD_FOLDER = BASE.ADMIN_URL + 'googledrive/addfolder';
  public static GOOGLE_DRIVE_ADD_FILE = BASE.ADMIN_URL + 'googledrive/createfile';
  public static GOOGLE_DRIVE_RENAME_FOLDER = BASE.ADMIN_URL + 'googledrive/renamefolder';
  public static GOOGLE_DRIVE_RENAME_FILE = BASE.ADMIN_URL + 'googledrive/renamefile';
  public static GOOGLE_DRIVE_SHARE_FILE = BASE.ADMIN_URL + 'googledrive/sharefile';
  public static GOOGLE_DRIVE_DELETE_FILE = BASE.ADMIN_URL + 'googledrive/movetotrash';
  public static GOOGLE_DRIVE_DELETE_FOLDER = BASE.ADMIN_URL + 'googledrive/deletefolder';
  public static GOOGLE_DRIVE_DOWNLOAD_FILE = BASE.ADMIN_URL + 'googledrive/downlaodfile';
  public static GOOGLE_DRIVE_CLIENT_ADD_FOLDER = BASE.ADMIN_URL + 'googledrive/clientfolder';
  public static GOOGLE_DRIVE_COPY_FILE = BASE.ADMIN_URL + 'googledrive/copyfile';
  public static GOOGLE_DRIVE_MOVE_FILE = BASE.ADMIN_URL + 'googledrive/movefile';
  public static GOOGLE_DRIVE_SEARCH_FILE = BASE.ADMIN_URL + 'googledrive/searchfile';
  public static GOOGLE_DRIVE_FOLDER_LIST = BASE.ADMIN_URL + 'googledrive/folderlist';
  public static GOOGLE_DRIVE_UPLOAD_FILE_DRIVE_PICKER = BASE.ADMIN_URL + 'googledrive/uploadfiledrive';
  public static GOOGLE_DRIVE_MARK_AS_COMPLETED = BASE.ADMIN_URL + 'googledrive/completefile';
  public static GOOGLE_DRIVE_CREATE_BACKLOG_FOLDER = BASE.ADMIN_URL + 'googledrive/backlog';
  public static GOOGLE_DRIVE_FILE_MOVE_TO_XERO = BASE.ADMIN_URL + 'googledrive/movetoxero';

  // Information Required
  public static INFORMATION_REQUIRED_LIST = BASE.ADMIN_URL + 'information';
  public static INFORMATION_REQUIRED_STAGE_LIST = BASE.ADMIN_URL + 'information/stage/list';
  public static INFORMATION_REQUIRED_LOG_LIST = BASE.ADMIN_URL + 'information/log';
  public static INFORMATION_REMINDER_LOG_LIST = BASE.ADMIN_URL + 'information/reminderlog';
  public static INFORMATION_REQUIRED_MOVE_TO_TAM = BASE.ADMIN_URL + 'information/movetotam';
  public static INFORMATION_REQUIRED_MOVE_TO_TL = BASE.ADMIN_URL + 'information/movetotl';
  public static INFORMATION_REQUIRED_SNOOZE = BASE.ADMIN_URL + 'information/snoozeinfo';
  public static INFORMATION_REQUIRED_ADD_ASSIGNEE = BASE.ADMIN_URL + 'information/additioalassignee';
  public static INFORMATION_REQUIRED_SEND_BACK = BASE.ADMIN_URL + 'information/sendback';
  public static INFORMATION_REQUIRED_VIEW = BASE.ADMIN_URL + 'information/show';
  public static INFORMATION_REQUIRED_UPDATE = BASE.ADMIN_URL + 'information/update';
  public static INFORMATION_REQUIRED_UPLOAD_DOCUMENT = BASE.ADMIN_URL + 'information/uploaddocument/store';
  public static INFORMATION_REQUIRED_DOCUMENT_DOWNLOAD = BASE.ADMIN_URL + 'information/downloaddocument';
  public static INFORMATION_REQUIRED_DOCUMENT_DELETE = BASE.ADMIN_URL + 'information/documentDelete';
  public static INFORMATION_REQUIRED_TRIGGER_PREVIEW = BASE.ADMIN_URL + 'entity/triggerinformation';
  public static INFORMATION_REQUIRED_TRIGGER_STOP = BASE.ADMIN_URL + 'entity/triggerinformation/stop';
  public static INFORMATION_REQUIRED_TRIGGER_SHOW = BASE.ADMIN_URL + 'entity/triggerinformation/show';
  public static INFORMATION_REQUIRED_ADDITIONAL_ADD = BASE.ADMIN_URL + 'information/additionalInfo/store';
  public static INFORMATION_REQUIRED_ADDITIONAL_UPLOAD_DOCS = BASE.ADMIN_URL + 'information/additionalInfo/upload';
  public static INFORMATION_REQUIRED_ADDITIONAL = BASE.ADMIN_URL + 'information/additionalInfo';
  public static INFORMATION_REQUIRED_ADDITIONAL_DELETE = BASE.ADMIN_URL + 'information/additionalInfoDelete';
  public static INFORMATION_REQUIRED_ADDITIONAL_DOCUMENT_DELETE = BASE.ADMIN_URL + 'information/additionalInfo/delete';
  public static INFORMATION_REQUIRED_SEND_INFO = BASE.ADMIN_URL + 'information/sendInfo';
  public static INFORMATION_REQUIRED_SEND_INFO_DATA = BASE.ADMIN_URL + 'information/sendInfo/store';
  public static OTHER_INFORMATION = BASE.ADMIN_URL + 'entity/otherinfo/listing';
  public static OTHER_ACCOUNT_TYPE = BASE.ADMIN_URL + 'entity/otheraccount';
  public static OTHER_INFO_ADD = BASE.ADMIN_URL + 'entity/otherinfo';
  public static GOOGLE_DRIVE_AUDIO_ADD = BASE.ADMIN_URL + 'googledrive/audio/add';
  public static GOOGLE_DRIVE_AUDIO_UPDATE = BASE.ADMIN_URL + 'googledrive/audio/update';
  public static GOOGLE_DRIVE_AUDIO_LIST = BASE.ADMIN_URL + 'googledrive/audio/list';
  public static GOOGLE_DRIVE_AUDIO_DELETE = BASE.ADMIN_URL + 'googledrive/audio/delete';
  public static INFORMATIONADDCRON = BASE.ADMIN_URL + 'informationAdd';
  public static INFORMATION_REQUIRED_DOCUMENT_DOWNLOAD_ADDITIONAL = BASE.ADMIN_URL + 'information/additionalInfo/download';

  // Query Module
  public static QUERY_QUESTION_LIST = BASE.ADMIN_URL + 'query/question/list';
  public static QUERY_QUESTION_EXPORT = BASE.ADMIN_URL + 'query/question/export';
  public static QUERY_QUESTION_UPDATE = BASE.ADMIN_URL + 'query/question/update';
  public static QUERY_QUESTION_STORE = BASE.ADMIN_URL + 'query/question/store';
  public static QUERY_LIST = BASE.ADMIN_URL + 'query';
  public static QUERY_STAGE_LIST = BASE.ADMIN_URL + 'query/stage/list';
  public static QUERY_LOG_LIST = BASE.ADMIN_URL + 'query/log';
  public static QUERY_LOG_REMINDER_LIST = BASE.ADMIN_URL + 'query/reminderlog';
  public static QUERY_MOVE_TO_TL = BASE.ADMIN_URL + 'query/movetotl';
  public static QUERY_SNOOZE = BASE.ADMIN_URL + 'query/snoozeinfo';
  public static QUERY_BANK_LIST = BASE.ADMIN_URL + 'query/showbank';
  public static QUERY_STORE = BASE.ADMIN_URL + 'query/add';
  public static QUERY_VIEW = BASE.ADMIN_URL + 'query/show';
  public static QUERY_DETAIL_VIEW = BASE.ADMIN_URL + 'query/showdetails';
  public static QUERY_UPDATE = BASE.ADMIN_URL + 'query/update';
  public static QUERY_ADDITIONAL_LIST = BASE.ADMIN_URL + 'query/additionalQuery';
  public static QUERY_ADDITIONAL_STORE = BASE.ADMIN_URL + 'query/additionalQuery/store';
  public static QUERY_ADDITIONAL_DELETE = BASE.ADMIN_URL + 'query/additionalQueryDelete';
  public static QUERY_DOCUMENT_DOWNLOAD = BASE.ADMIN_URL + 'query/downloaddocument';
  public static QUERY_DOCUMENT_DOWNLOAD_ADDITIONAL = BASE.ADMIN_URL + 'query/additionalQuery/download';
  public static QUERY_DOCUMENT_DELETE = BASE.ADMIN_URL + 'query/documentDelete';
  public static QUERY_UPLOAD_DOCUMENT = BASE.ADMIN_URL + 'query/uploaddocument/store';
  public static QUERY_ADDITIONAL_UPLOAD_DOCS = BASE.ADMIN_URL + 'query/additionalQuery/upload';
  public static QUERY_ADDITIONAL_DOCS_DELTE = BASE.ADMIN_URL + 'query/additionalQuery/delete';
  public static QUERY_ADD_EXTRA_ROW = BASE.ADMIN_URL + 'query/addextraquery';

  public static QUERY_DELETE = BASE.ADMIN_URL + 'query/queryDetail';

  public static QUERY_SEND_BACK = BASE.ADMIN_URL + 'query/sendback';
  public static QUERY_SEND_INFO = BASE.ADMIN_URL + 'query/sendInfo';
  public static QUERY_SEND_INFO_DATA = BASE.ADMIN_URL + 'query/sendInfo/store';
  public static PENDING_WORKSHEET_DATA_ADD = BASE.ADMIN_URL + 'worksheet/sechdule/add';
  public static PENDING_WORKSHEET_DATA = BASE.ADMIN_URL + 'worksheet/sechdule/list';
  public static PENDING_WORKSHEET_DELETE = BASE.ADMIN_URL + 'worksheet/sechdule/delete';

  public static LEAVE_LIST = BASE.ADMIN_URL + 'hr/leaverequest';
  public static LEAVE_STORE = BASE.ADMIN_URL + 'hr/leaverequest/store';
  public static LEAVE_APPROVE = BASE.ADMIN_URL + 'hr/leaverequest/approve';

  public static HOLIDAY_WORKING_STORE = BASE.ADMIN_URL + 'hr/holidayrequest/store';
  public static HOLIDAY_WORKING_APPROVE = BASE.ADMIN_URL + 'hr/holidayrequest/approve';
  public static HOLIDAY_WORKING_LIST = BASE.ADMIN_URL + 'hr/holidayrequest';

  public static SME_SIGNATURE_LIST = BASE.ADMIN_URL + 'signature';
  public static SME_SIGNATURE_USER_LIST = BASE.ADMIN_URL + 'signature';
  public static SME_SIGNATURE_USER_ADD = BASE.ADMIN_URL + 'signature/add';
  public static BEFREE_COMMENTS = BASE.ADMIN_URL + 'entity/befreecomment';
  public static SME_SIGNATURE_USER_UPDATE = BASE.ADMIN_URL + 'signature/update';
  public static SME_SIGNATURE_USER_PREVIEW = BASE.ADMIN_URL + 'signature/preview';

  public static AWARD_MASTER_LIST = BASE.ADMIN_URL + 'award/master';
  public static AWARD_NOMINEE_LIST = BASE.ADMIN_URL + 'award/list';
  public static AWARD_STATUS_LOG_LISTING = BASE.ADMIN_URL + 'award/log';
  public static AWARD_GET_USER_LISTING = BASE.ADMIN_URL + 'award/getuserdetail';
  public static AWARD_ADD = BASE.ADMIN_URL + 'award/add';
  public static AWARD_UPDATE = BASE.ADMIN_URL + 'award/update';
  public static AWARD_PREVIEW = BASE.ADMIN_URL + 'award/preview';
  public static AWARD_USER = BASE.ADMIN_URL + 'award/user';
  public static AWARD_NOMINEE_LIST_DASHBOARD = BASE.ADMIN_URL + 'award/month/awardee';
  public static AWARD_DOWNLOAD_PDF = BASE.ADMIN_URL + 'award/downloadpdf';
  public static AWARD_MERGE_PDF = BASE.ADMIN_URL + 'award/download/mergepdf';
  public static AWARD_SEND_MAIL = BASE.ADMIN_URL + 'award/user/sendmail';

  public static FOOD_MASTER_LIST = BASE.ADMIN_URL + 'food/master';
  public static BOOK_FOOD = BASE.ADMIN_URL + 'food';
  public static BOOK_FOOD_USER_INFO = BASE.ADMIN_URL + 'food/no';
  public static BOOK_FOOD_USER_LIST = BASE.ADMIN_URL + 'food';
  public static BOOK_FOOD_USER_SHOW = BASE.ADMIN_URL + 'food/show';
  public static BOOK_FOOD_USER_FEEDBACK = BASE.ADMIN_URL + 'food/feedback';
  public static BOOK_FOOD_DASHBOARD = BASE.ADMIN_URL + 'food/dashboard';

  public static CLIENT_BANK_CHANGE = BASE.ADMIN_URL + 'entity/bankchange';
  public static CLIENT_BANK_CHANGE_ADD = BASE.ADMIN_URL + 'entity/bankchange/add';
  public static CLIENT_BANK_CHANGE_APPROVE = BASE.ADMIN_URL + 'entity/bankchange/approve';
  public static CLIENT_BANK_CHANGE_DOCUMENT_DOWNLOAD = BASE.ADMIN_URL + 'entity/bankchange/download';

  public static WELCOME_KIT_LISTING = BASE.ADMIN_URL + 'hr/welcomekit';
  public static WELCOME_KIT_EXPORT = BASE.ADMIN_URL + 'hr/welcomekit/export';
  public static PAYROLL_EMPLOYEES = BASE.ADMIN_URL + 'xero/employee';
  public static PAYROLL_EMPLOYEES_EXPORT = BASE.ADMIN_URL + 'xero/employee/export';
  public static PAYROLL_PAYRUN = BASE.ADMIN_URL + 'xero/payrun';
  public static ADD_SUPER_FUND = BASE.ADMIN_URL + 'xero/superfund';
  public static GET_SUPER_FUND_PRODUCT = BASE.ADMIN_URL + 'xero/superfund';
  public static DOWNLOAD_EMPLOYEE_DOCUMENT = BASE.ADMIN_URL + 'xero/employee/download';
  public static DELETE_EMPLOYEE_DOCUMENT = BASE.ADMIN_URL + 'xero/employee/document';
  public static PAYROLL_MOVE_TO_XERO = BASE.ADMIN_URL + 'xero/employee/movetoxero';
  public static PAYROLL_EMPLOYEE_TYPE_CHANGE = BASE.ADMIN_URL + 'xero/employee/type';
  public static PAYRUN_STATUS_LIST = BASE.ADMIN_URL + 'xero/payrun/status';
  public static PAYRUN_LOG_LIST = BASE.ADMIN_URL + 'xero/payrun/log';  
  public static PAYROLL_PAYRUN_LEAVE_LIST = BASE.ADMIN_URL + 'xero/payrun/leave';

  public static PAYROLL_PAYRUN_EMPLOYEE_LIST = BASE.ADMIN_URL + 'xero/payrun/employee';
  public static PAYROLL_PAYRUN_SEND_TO_BEFREE = BASE.ADMIN_URL + 'xero/payrun/update/sendtobefree';
  public static PAYROLL_PAYRUN_EARNING_DELETE = BASE.ADMIN_URL + 'xero/payrun/employee/earning';
  public static PAYRUN_SEND_TO_XERO = BASE.ADMIN_URL + 'xero/payrun/send/movetoxero';
  public static BOT = BASE.ADMIN_URL + 'xero/bot';
  public static BOT_EXPORT = BASE.ADMIN_URL + 'xero/bot/export';

  public static PAYROLL_CRONE_EMPLOYEE = BASE.ADMIN_URL + 'xero/fetchemployee';
  public static PAYROLL_CRONE_SETTINGS = BASE.ADMIN_URL + 'xero/fetchdefault';
  public static XERO_MASTER_UPDATE = BASE.ADMIN_URL + 'xero/master/update';
  public static XERO_MASTER_LIST =  BASE.ADMIN_URL + 'xero/master/list';

  public static NPS_FEEDBACK_LIST =  BASE.ADMIN_URL + 'xero/payrun';
  public static NPS_FEEDBACK =  BASE.ADMIN_URL + 'xero/payrun';
}

export class CustomerAPI {
 // public static FORGOT_PASSWORD = BASE.CUSTOMER_URL + 'forgotpassword';
}
