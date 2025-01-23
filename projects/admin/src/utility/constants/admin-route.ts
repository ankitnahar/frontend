export class AdminRoutes {
  public static LOGIN = 'login';
  public static LOGOUT = 'logout';
  public static RESET_PASSWORD = 'reset-password';
  public static CHANGE_PASSWORD = 'change-password';
  public static UNAUTHORIZED = 'unauthorized';
  public static DASHBOARD = 'dashboard';
  public static EMPLOYEE_HANDBOOK = 'employee-handbook';
  public static READ_POLICY = 'read-policy';
  public static MSA_LINKS = 'msa-link';
  public static BRAND_DOCUMENTS = 'brand-documents';
  public static POSH_POLICY = 'employee-handbook';
  public static BOOK_YOUR_LUNCH = 'book-your-lunch';

  //
  // Manage user module routes
  //
  public static ADMINISTRATION = 'administration';
  public static MANAGE_USERS_ROUTE = 'users';
  public static ADD_USER_ROUTE = 'users/add';
  public static UPDATE_USER_ROUTE = 'users/update';
  public static DESIGNATION_ROUTE = 'designation';
  public static EDIT_DESIGNATION_ROUTE = 'designation/edit-designation';
  public static REASON_MANAGEMENT_ROUTE = 'reason-management';
  public static MANAGE_DISCONTINUE_QUESTION_ROUTE = 'manage-discontinue-question';
  public static SOFTWARE_MANAGEMENT_ROUTE = 'software-management';
  public static MANAGE_EMAILS_ROUTE = 'manage-emails';
  public static MANAGE_EMAILS_SET_EMAIL_TEMPLATE_ROUTE = 'manage-emails/set-email-template';
  public static SIGNATURE_EMAIL_CONFIG_ROUTE = 'signature-email-config';
  public static ADD_SIGNATURE_EMAIL_CONFIG_ROUTE = 'signature-email-config/add-email-signature-configuration';
  public static DYNAMIC_FIELD_ROUTE = 'dynamic-field';
  public static DYNAMIC_FIELD_GROUP_ROUTE = 'dynamic-field-group';
  public static SUB_ACTIVITY_CALCULATOR_ROUTE = 'sub-activity-calculator';
  public static ADDITIONAL_PAYROLL_ACTIVITY_SCHEDULE_ROUTE = 'sub-activity-calculator/additional-payroll-activity-schedule';
  public static IP_ADDRESS_ROUTE = 'ip-address';
  public static QUOTEGROUP_ROUTE = 'quote-group';
  public static QUOTEQUESTION_ROUTE = 'quote-question';
  public static MANAGE_USERS = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.MANAGE_USERS_ROUTE;
  public static ADD_USER = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.ADD_USER_ROUTE;
  public static UPDATE_USER = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.UPDATE_USER_ROUTE;
  public static DESIGNATION_LIST = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.DESIGNATION_ROUTE;
  public static EDIT_DESIGNATION = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.EDIT_DESIGNATION_ROUTE;
  public static REASON_MANAGEMENT = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.REASON_MANAGEMENT_ROUTE;
  public static MANAGE_DISCONTINUE_QUESTION = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.MANAGE_DISCONTINUE_QUESTION_ROUTE;
  public static SOFTWARE_MANAGEMENT = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.SOFTWARE_MANAGEMENT_ROUTE;
  public static MANAGE_EMAILS = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.MANAGE_EMAILS_ROUTE;
  public static SIGNATURE_EMAIL_CONFIG = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.SIGNATURE_EMAIL_CONFIG_ROUTE;
  public static ADD_SIGNATURE_EMAIL_CONFIG = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.ADD_SIGNATURE_EMAIL_CONFIG_ROUTE;
  public static MANAGE_EMAILS_SET_EMAIL_TEMPLATE = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.MANAGE_EMAILS_SET_EMAIL_TEMPLATE_ROUTE;
  public static DYNAMIC_FIELD = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.DYNAMIC_FIELD_ROUTE;
  public static DYNAMIC_FIELD_GROUP = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.DYNAMIC_FIELD_GROUP_ROUTE;
  public static SUB_ACTIVITY_CALCULATOR = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.SUB_ACTIVITY_CALCULATOR_ROUTE;
  public static ADDITIONAL_PAYROLL_ACTIVITY_SCHEDULE = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.ADDITIONAL_PAYROLL_ACTIVITY_SCHEDULE_ROUTE;
  public static IP_ADDRESS = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.IP_ADDRESS_ROUTE;
  public static QUOTEGROUP = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.QUOTEGROUP_ROUTE;
  public static QUOTEQUESTION = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.QUOTEQUESTION_ROUTE;

  // HRMS Module Routes
  //
  public static HRMS = 'hrms';
  public static HRMS_DASHBOARD_ROUTE = 'dashboard';
  public static APPLY_LEAVE_ROUTE = 'apply-leave';
  public static ATTENDANCE_SUMMARY_ROUTE = 'attendance-summary';
  public static HRMS_USER_PENDING_TIMESHEET_ROUTE = 'attendance-summary/user-pending-timesheet';
  public static HRMS_USER_PENDING_TIMESHEET_APPROVED_ROUTE = 'attendance-summary/user-pending-timesheet-approved';
  public static HRMS_LATE_ATTENDANCE_SUMMARY_REPORT_ROUTE = 'attendance-summary/attendance-summary-report';
  public static LEAVE_SUMMARY_ROUTE = 'leave-summary';
  public static TODAY_ABSENT_ROUTE = 'today-absent';
  public static LEAVE_ON_THIS_MONTH_ROUTE = 'leave-on-this-month';
  public static LATE_SITTING_ROUTE = 'late-sitting';
  public static HOLIDAY_WORKING_ROUTE = 'holiday-working';
  public static EARLY_LEAVING_ROUTE = 'early-leaving';
  public static CHANGE_IN_OUT_TIME_ROUTE = 'change-in-out-time';
  public static SHIFT_LIST_ROUTE = 'shift-list';
  public static HOLIDAY_LIST_ROUTE = 'holiday-list';
  public static EXCEPTION_SHIFT_ROUTE = 'exception-shift';
  public static HRMS_DAILY_REPORT_ROUTE = 'daily-report';
  public static HRMS_READ_POLICIES_ROUTE = 'read-policies';
  public static HRMS_LEAVE_BALANCE_ROUTE = 'leave-balance-list';
  public static HRMS_DASHBOARD = AdminRoutes.HRMS + '/' + AdminRoutes.HRMS_DASHBOARD_ROUTE;
  public static APPLY_LEAVE = AdminRoutes.HRMS + '/' + AdminRoutes.APPLY_LEAVE_ROUTE;
  public static ATTENDANCE_SUMMARY = AdminRoutes.HRMS + '/' + AdminRoutes.ATTENDANCE_SUMMARY_ROUTE;
  public static HRMS_USER_PENDING_TIMESHEET = AdminRoutes.HRMS + '/' + AdminRoutes.HRMS_USER_PENDING_TIMESHEET_ROUTE;
  public static HRMS_USER_PENDING_TIMESHEET_APPROVED = AdminRoutes.HRMS + '/' + AdminRoutes.HRMS_USER_PENDING_TIMESHEET_APPROVED_ROUTE;
  public static HRMS_LATE_ATTENDANCE_SUMMARY_REPORT = AdminRoutes.HRMS + '/' + AdminRoutes.HRMS_LATE_ATTENDANCE_SUMMARY_REPORT_ROUTE;
  public static LEAVE_SUMMARY = AdminRoutes.HRMS + '/' + AdminRoutes.LEAVE_SUMMARY_ROUTE;
  public static TODAY_ABSENT = AdminRoutes.HRMS + '/' + AdminRoutes.TODAY_ABSENT_ROUTE;
  public static LEAVE_ON_THIS_MONTH = AdminRoutes.HRMS + '/' + AdminRoutes.LEAVE_ON_THIS_MONTH_ROUTE;
  public static LATE_SITTING = AdminRoutes.HRMS + '/' + AdminRoutes.LATE_SITTING_ROUTE;
  public static HOLIDAY_WORKING = AdminRoutes.HRMS + '/' + AdminRoutes.HOLIDAY_WORKING_ROUTE;
  public static EARLY_LEAVING = AdminRoutes.HRMS + '/' + AdminRoutes.EARLY_LEAVING_ROUTE;
  public static CHANGE_IN_OUT_TIME = AdminRoutes.HRMS + '/' + AdminRoutes.CHANGE_IN_OUT_TIME_ROUTE;
  public static HOLIDAY_LIST = AdminRoutes.HRMS + '/' + AdminRoutes.HOLIDAY_LIST_ROUTE;
  public static EXCEPTION_SHIFT = AdminRoutes.HRMS + '/' + AdminRoutes.EXCEPTION_SHIFT_ROUTE;
  public static HRMS_DAILY_REPORT = AdminRoutes.HRMS + '/' + AdminRoutes.HRMS_DAILY_REPORT_ROUTE;
  public static HRMS_READ_POLICIES = AdminRoutes.HRMS + '/' + AdminRoutes.HRMS_READ_POLICIES_ROUTE;
  public static HRMS_LEAVE_BALANCE = AdminRoutes.HRMS + '/' + AdminRoutes.HRMS_LEAVE_BALANCE_ROUTE;
  public static TIMESHEET_SUMMARY_ROUTE = 'timesheet-summary';
  public static TIMESHEET_SUMMARY = AdminRoutes.HRMS + '/' + AdminRoutes.TIMESHEET_SUMMARY_ROUTE;
  //
  // Client Module Routes (Contact Information)
  //
  public static CLIENT = 'client';
  public static CONTACT_INFORMATION_ROUTE = 'contact-information';
  public static ARCHIVED_LIST_ROUTE = 'contact-information/archived-list';
  public static ADD_CONTACT_ROUTE = 'contact-information/add-contact';
  public static ADD_ADDRESS_ROUTE = 'contact-information/add-address';
  public static CLIENT_USERS_ROUTE = 'contact-information/client-users';
  public static EDIT_CLIENT_USERS_ROUTE = 'contact-information/add-client-users';
  public static CONTACT_INFORMATION = AdminRoutes.CLIENT + '/' + AdminRoutes.CONTACT_INFORMATION_ROUTE;
  public static ARCHIVED_LIST = AdminRoutes.CLIENT + '/' + AdminRoutes.ARCHIVED_LIST_ROUTE;
  public static ADD_CONTACT = AdminRoutes.CLIENT + '/' + AdminRoutes.ADD_CONTACT_ROUTE;
  public static ADD_ADDRESS = AdminRoutes.CLIENT + '/' + AdminRoutes.ADD_ADDRESS_ROUTE;
  public static CLIENT_USERS = AdminRoutes.CLIENT + '/' + AdminRoutes.CLIENT_USERS_ROUTE;
  public static EDIT_CLIENT_USERS = AdminRoutes.CLIENT + '/' + AdminRoutes.EDIT_CLIENT_USERS_ROUTE;

  // Client Module Routes (View Client)
  public static VIEW_CLIENT_ROUTE = 'view-client';
  public static UPDATE_CLIENT_ROUTE = 'view-client/update';
  public static UPLOAD_DOCUMENTS_ROUTE = 'view-client/upload-documents';
  public static ADD_ENTITY_ROUTE = 'view-client/add-entity';
  public static VIEW_UPDATE_CLIENT_ROUTE = 'view-client/view-update-client';
  public static VIEW_CLIENT = AdminRoutes.CLIENT + '/' + AdminRoutes.VIEW_CLIENT_ROUTE;
  public static UPDATE_CLIENT = AdminRoutes.CLIENT + '/' + AdminRoutes.UPDATE_CLIENT_ROUTE;
  public static UPLOAD_DOCUMENTS = AdminRoutes.CLIENT + '/' + AdminRoutes.UPLOAD_DOCUMENTS_ROUTE;
  public static ADD_ENTITY = AdminRoutes.CLIENT + '/' + AdminRoutes.ADD_ENTITY_ROUTE;
  public static VIEW_UPDATE_CLIENT = AdminRoutes.CLIENT + '/' + AdminRoutes.VIEW_UPDATE_CLIENT_ROUTE;

  public static UPDATE_CLIENT_TRIGGERINFO_PREVIEW_ROUTE = 'trigger-information/preview-trigger-information';
  public static UPDATE_CLIENT_TRIGGERINFO_PREVIEW = AdminRoutes.CLIENT + '/' + AdminRoutes.UPDATE_CLIENT_ROUTE + '/' + AdminRoutes.UPDATE_CLIENT_TRIGGERINFO_PREVIEW_ROUTE;
  // Client Module Routes (Others)
  public static CLIENT_TURNOVER_ROUTE = 'client-turnover';
  public static AM_NOTES_ROUTE = 'am-notes';
  public static EMPLOYEE_INFORMATION_ROUTE = 'employee-information';
  public static FEEDBACK_ROUTE = 'feedback';
  public static MANAGEMENT_CALL_ROUTE = 'management-call';
  public static SOFTWARE_ROUTE = 'software';
  public static FEEDBACK_CALL_ROUTE = 'feedback-call';
  public static INFORMATION_REQUIRED_ROUTE = 'information-required';
  public static UPDATE_INFORMATION_REQUIRED_ROUTE = 'information-required/update-information';
  public static VIEW_INFORMATION_REQUIRED_ROUTE = 'information-required/view-information';
  public static COMPLETED_FEEDBACK_CALL_ROUTE = 'feedback-call/completed-feedback-call';
  public static FEEDBACK_CALL_LISTING_ROUTE = 'feedback-call/feedback-call-listing';
  public static ADD_FEEDBACK_CALL_ROUTE = 'feedback-call/add-feedback-call';
  public static ADD_FEEDBACK_CALL_RESOURCE_ROUTE = 'feedback-call/add-feedback-call-resource';
  public static CLIENT_TURNOVER = AdminRoutes.CLIENT + '/' + AdminRoutes.CLIENT_TURNOVER_ROUTE;
  public static AM_NOTES = AdminRoutes.CLIENT + '/' + AdminRoutes.AM_NOTES_ROUTE;
  public static EMPLOYEE_INFORMATION = AdminRoutes.CLIENT + '/' + AdminRoutes.EMPLOYEE_INFORMATION_ROUTE;
  public static FEEDBACK = AdminRoutes.CLIENT + '/' + AdminRoutes.FEEDBACK_ROUTE;
  public static MANAGEMENT_CALL = AdminRoutes.CLIENT + '/' + AdminRoutes.MANAGEMENT_CALL_ROUTE;
  public static SOFTWARE = AdminRoutes.CLIENT + '/' + AdminRoutes.SOFTWARE_ROUTE;
  public static FEEDBACK_CALL = AdminRoutes.CLIENT + '/' + AdminRoutes.FEEDBACK_CALL_ROUTE;
  public static INFORMATION_REQUIRED = AdminRoutes.CLIENT + '/' + AdminRoutes.INFORMATION_REQUIRED_ROUTE;
  public static UPDATE_INFORMATION_REQUIRED = AdminRoutes.CLIENT + '/' + AdminRoutes.UPDATE_INFORMATION_REQUIRED_ROUTE;
  public static VIEW_INFORMATION_REQUIRED = AdminRoutes.CLIENT + '/' + AdminRoutes.VIEW_INFORMATION_REQUIRED_ROUTE;
  public static COMPLETED_FEEDBACK_CALL = AdminRoutes.CLIENT + '/' + AdminRoutes.COMPLETED_FEEDBACK_CALL_ROUTE;
  public static FEEDBACK_CALL_LISTING = AdminRoutes.CLIENT + '/' + AdminRoutes.FEEDBACK_CALL_LISTING_ROUTE;
  public static ADD_FEEDBACK_CALL = AdminRoutes.CLIENT + '/' + AdminRoutes.ADD_FEEDBACK_CALL_ROUTE;
  public static ADD_FEEDBACK_CALL_RESOURCE = AdminRoutes.CLIENT + '/' + AdminRoutes.ADD_FEEDBACK_CALL_RESOURCE_ROUTE;


  public static CLIENT_DOCUMENTS_ROUTE = 'client-documents';
  public static CLIENT_DOCUMENTS = AdminRoutes.CLIENT + '/' + AdminRoutes.CLIENT_DOCUMENTS_ROUTE;
  public static CLIENT_DOCUMENTS_DETAILS_ROUTE = 'documents-details';
  public static CLIENT_DOCUMENTS_DETAILS = AdminRoutes.CLIENT + '/' + AdminRoutes.CLIENT_DOCUMENTS_DETAILS_ROUTE;

  // Client Module Routes (Quality Control)
  public static QUALITY_CONTROL_ROUTE = 'quality-control';
  public static ADD_EDIT_QUALITY_CONTROL_ROUTE = 'quality-control/add-edit';
  public static VIEW_CLOSED_QC_LIST_ROUTE = 'quality-control/view-closed-qc-list';
  public static QUALITY_CONTROL = AdminRoutes.CLIENT + '/' + AdminRoutes.QUALITY_CONTROL_ROUTE;
  public static ADD_EDIT_QUALITY_CONTROL = AdminRoutes.CLIENT + '/' + AdminRoutes.ADD_EDIT_QUALITY_CONTROL_ROUTE;
  public static VIEW_CLOSED_QC_LIST = AdminRoutes.CLIENT + '/' + AdminRoutes.VIEW_CLOSED_QC_LIST_ROUTE;

  //DISCONTINUE client
  public static DISCONTINUE_CLIENT_ROUTE = 'discontinue-client';
  public static DISCONTINUE_CLIENT = AdminRoutes.CLIENT + '/' + AdminRoutes.DISCONTINUE_CLIENT_ROUTE;
  public static EDIT_DISCONTINUE_FORM_ROUTE = 'discontinue-client/client-discontinue-form';
  public static EDIT_DISCONTINUE_FORM = AdminRoutes.CLIENT + '/' + AdminRoutes.EDIT_DISCONTINUE_FORM_ROUTE;
  public static VIEW_DISCONTINUE_CLIENT_DETAILS_ROUTE = 'discontinue-client/view-discontinue-client-details';
  public static VIEW_DISCONTINUE_CLIENT_DETAILS = AdminRoutes.CLIENT + '/' + AdminRoutes.VIEW_DISCONTINUE_CLIENT_DETAILS_ROUTE;


  // System Setup Routes
  public static STSYEM_SETUP = 'system-setup';
  public static PERMANENT_INFO_ROUTE = 'permanent-info';
  public static WR3_ROUTE = 'wr3';
  public static WR3_ARCHIVED_LIST_ROUTE = 'wr3/wr3-archive-list';
  public static WR3_UNPAID_INVOICE_ROUTE = 'wr3/unpaid-invoice';
  public static VIEW_ARCHIVED_LIST_ROUTE = 'permanent-info/view-archived-list';
  public static EDIT_PERMANENT_INFO_ROUTE = 'permanent-info/edit-permanent-info';
  public static SYSTEM_SETUP_LIST_ROUTE = 'system-setup-list';
  public static SYSTEM_SETUP_EDIT_WORKSHEET_SCHEDULE_ROUTE = 'edit-worksheet-schedule';
  public static PENDING_WORKSHEET_SCHEDULE_ROUTE = 'pending-worksheet-schedule';
  public static COMPLETED_WORKSHEET_SCHEDULE_ROUTE = 'pending-worksheet-schedule/completed-worksheet-schedule';
  public static NEW_CLEINT_REVIEW_FORM_ROUTE = 'new-client-review-form';
  public static VIEW_STANDARD_QUESTION_LIST_ROUTE = 'new-client-review-form/view-standard-question-list';
  public static EDIT_NEW_CLEINT_REVIEW_FORM_ROUTE = 'new-client-review-form/edit-client-review-form';
  // welcome email
  public static WELCOME_EMAIL_ROUTE = 'welcome-email';
  public static ADD_NEW_WELCOME_EMAIL_ROUTE = 'welcome-email/add-new-welcome-email';
  public static EDIT_BCC_EMAIL_ROUTE = 'welcome-email/edit-bcc-email';
  public static VIEW_PERMANENT_INFORMATION_ROUTE = 'permanent-info/view-permanent-information';
  public static PERMANENT_INFO = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.PERMANENT_INFO_ROUTE;
  public static VIEW_ARCHIVED_LIST = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.VIEW_ARCHIVED_LIST_ROUTE;
  public static EDIT_PERMANENT_INFO = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.EDIT_PERMANENT_INFO_ROUTE;
  public static WR3 = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.WR3_ROUTE;
  public static WR3_ARCHIVED_LIST = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.WR3_ARCHIVED_LIST_ROUTE;
  public static WR3_UNPAID_INVOICE = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.WR3_UNPAID_INVOICE_ROUTE;
  public static SYSTEM_SETUP_LIST = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.SYSTEM_SETUP_LIST_ROUTE;
  public static SYSTEM_SETUP_EDIT_WORKSHEET_SCHEDULE = AdminRoutes.SYSTEM_SETUP_LIST + '/' + AdminRoutes.SYSTEM_SETUP_EDIT_WORKSHEET_SCHEDULE_ROUTE;
  public static PENDING_WORKSHEET_SCHEDULE = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.PENDING_WORKSHEET_SCHEDULE_ROUTE;
  public static COMPLETED_WORKSHEET_SCHEDULE = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.COMPLETED_WORKSHEET_SCHEDULE_ROUTE;
  public static VIEW_PERMANENT_INFORMATION = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.VIEW_PERMANENT_INFORMATION_ROUTE;
  public static NEW_CLEINT_REVIEW_FORM = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.NEW_CLEINT_REVIEW_FORM_ROUTE;
  public static VIEW_STANDARD_QUESTION_LIST = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.VIEW_STANDARD_QUESTION_LIST_ROUTE;
  public static EDIT_NEW_CLEINT_REVIEW_FORM = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.EDIT_NEW_CLEINT_REVIEW_FORM_ROUTE;
  // welcome email
  public static WELCOME_EMAIL = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.WELCOME_EMAIL_ROUTE;
  public static ADD_NEW_WELCOME_EMAIL = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.ADD_NEW_WELCOME_EMAIL_ROUTE;
  public static EDIT_BCC_EMAIL = AdminRoutes.STSYEM_SETUP + '/' + AdminRoutes.EDIT_BCC_EMAIL_ROUTE;


  //
  // Worksheet Module Routes
  //
  public static WORKFLOW = 'workflow';
  //public static WORKSHEET = 'worksheet';
  public static WORKSHEET_DASHBOARD_ROUTE = 'worksheet-module';
  public static WORKSHEET_DASHBOARD_TAB_ROUTE = 'worksheet-dashboard-tab';
  public static WORKSHEET_MASTER_CHECKLIST_ROUTE = 'master-checklist';
  public static WORKSHEET_CHANGE_IN_OUT_TIME_ROUTE = 'change-in-out-time';
  public static WORKSHEET_TODAYS_WORKSHEET_ROUTE = 'todays-worksheet';
  public static WORKSHEET_TODAYS_TIMESHEET_ROUTE = 'todays-timesheet';
  public static WORKSHEET_HIERARCHY_ROUTE = 'hierarchy';
  public static WORKSHEET_SUB_CLIENT_LIST_ROUTE = 'sub-client-list';
  public static WORKSHEET_TRAINING_LIST_ROUTE = 'training-list';
  public static WORKSHEET_REVIEW_OR_KNOCK_BACK_ROUTE = 'review-or-knock-back-worksheet';
  public static WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING_ROUTE = 'peer-review-worksheet-listing';
  public static WORKSHEET_COMPLETED_PEER_REVIEW_WORKSHEET_LISTING_ROUTE = 'peer-review-worksheet-listing/completed-peer-review-worksheet';
  public static ADD_USERS_TIMESHEET_ROUTE = 'add-users-timesheet';
  public static ADD_TIMESHEET_ROUTE = 'add-timesheet';
  public static ADD_WORKSHEET_ROUTE = 'add-worksheet';
  public static WORKSHEET_TODAYS_WORKSHEET_VIEW_INCOMPLETED_WORKSHEET_ROUTE = 'todays-timesheet/view-incompleted-worksheet-timesheet';
  public static WORKSHEET_REVIEW_TIMESHEET_ROUTE = 'todays-timesheet/review-timesheet';
  public static TASK_CHECKLIST_ROUTE = 'task-checklist';
  public static EDIT_TASK_CHECKLIST_ROUTE = 'edit-task-checklist';
  public static EDIT_TASK_CHECKLIST_TAM_ROUTE = 'edit-task-checklist-tam';
  public static EDIT_TASK_CHECKLIST_KNOCKBACK_ROUTE = 'edit-task-checklist-knockback';
  public static EDIT_TASK_CHECKLIST_PEER_REVIEW_ROUTE = 'edit-task-checklist-peer-review';
  public static CHANGE_MULTIPLE_WORKSHEET_STATUS_ROUTE = 'change-multiple-worksheet-status';
  public static WORKSHEET_PREVIEW_DETAILS_ROUTE = 'add-worksheet/preview-worksheet-details';
  public static TASK_CHECKLIST_EMAIL_PREVIEW_ROUTE = 'checklist-email-preview';
  public static TASK_CHECKLIST_EMAIL_REVIEW_ROUTE = 'checklist-email-review';
  public static WORKSHEET_ADD_NEW_TODAYS_TIMESHEET_ROUTE = 'todays-timesheet/add-new-todays-timesheet-form';
  public static WORKSHEET_ADD_REVIEW_TIMESHEET_ROUTE = 'add-new-review-timesheet-form';
  public static WORKSHEET_UPDATE_TODAYS_TIMESHEET_ROUTE = 'todays-timesheet/update-todays-timesheet-form';
  public static PREPARE_QUERY_ROUTE = 'prepare-query';
  public static VIEW_WORKSHEET_COMMENTS_ROUTE = 'view-worksheet-comments';
  public static USER_HISTORY_ROUTE = 'user-history';
  public static NOMINEE_LISTING_ROUTE = 'nominee-list';
  public static ADD_NOMINEE_LISTING_ROUTE = 'add-nominee';

  public static WORKSHEET_DASHBOARD = AdminRoutes.WORKFLOW + '/' + AdminRoutes.WORKSHEET_DASHBOARD_ROUTE;
 // public static WORKSHEET_DASHBOARD_TAB_ROUTE = AdminRoutes.WORKFLOW + '/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB_ROUTE;
  public static WORKSHEET_DASHBOARD_TAB = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB_ROUTE;
  public static WORKSHEET_TODAYS_WORKSHEET = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_TODAYS_WORKSHEET_ROUTE;
  public static WORKSHEET_MASTER_CHECKLIST = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_MASTER_CHECKLIST_ROUTE;
  public static WORKSHEET_CHANGE_IN_OUT_TIME = AdminRoutes.WORKFLOW + '/' + AdminRoutes.WORKSHEET_CHANGE_IN_OUT_TIME_ROUTE;
  public static WORKSHEET_TODAYS_TIMESHEET = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_TODAYS_TIMESHEET_ROUTE;
  public static WORKSHEET_HIERARCHY = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_HIERARCHY_ROUTE;
  public static WORKSHEET_SUB_CLIENT_LIST = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_SUB_CLIENT_LIST_ROUTE;
  public static WORKSHEET_TRAINING_LIST = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_TRAINING_LIST_ROUTE;
  public static WORKSHEET_REVIEW_OR_KNOCK_BACK = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_REVIEW_OR_KNOCK_BACK_ROUTE;
  public static WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING_ROUTE;
  public static WORKSHEET_COMPLETED_PEER_REVIEW_WORKSHEET_LISTING = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_COMPLETED_PEER_REVIEW_WORKSHEET_LISTING_ROUTE;
  public static ADD_USERS_TIMESHEET = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.ADD_USERS_TIMESHEET_ROUTE;
  public static ADD_TIMESHEET = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.ADD_TIMESHEET_ROUTE;
  public static ADD_WORKSHEET = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.ADD_WORKSHEET_ROUTE;
  public static WORKSHEET_TODAYS_WORKSHEET_VIEW_INCOMPLETED_WORKSHEET = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_TODAYS_WORKSHEET_VIEW_INCOMPLETED_WORKSHEET_ROUTE;
  public static WORKSHEET_REVIEW_TIMESHEET = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_REVIEW_TIMESHEET_ROUTE;
  public static TASK_CHECKLIST = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.TASK_CHECKLIST_ROUTE;
  public static EDIT_TASK_CHECKLIST = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.EDIT_TASK_CHECKLIST_ROUTE;
  public static EDIT_TASK_CHECKLIST_TAM = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.EDIT_TASK_CHECKLIST_TAM_ROUTE;
  public static EDIT_TASK_CHECKLIST_PEER_REVIEW = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.EDIT_TASK_CHECKLIST_PEER_REVIEW_ROUTE;
  public static EDIT_TASK_CHECKLIST_KNOCKBACK = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.EDIT_TASK_CHECKLIST_KNOCKBACK_ROUTE;
  public static CHANGE_MULTIPLE_WORKSHEET_STATUS = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.CHANGE_MULTIPLE_WORKSHEET_STATUS_ROUTE;
  public static WORKSHEET_PREVIEW_DETAILS = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_PREVIEW_DETAILS_ROUTE;
  public static TASK_CHECKLIST_EMAIL_PREVIEW = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.TASK_CHECKLIST_EMAIL_PREVIEW_ROUTE;
  public static TASK_CHECKLIST_EMAIL_REVIEW = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.TASK_CHECKLIST_EMAIL_REVIEW_ROUTE;
  public static WORKSHEET_ADD_NEW_TODAYS_TIMESHEET = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_ADD_NEW_TODAYS_TIMESHEET_ROUTE;
  public static WORKSHEET_UPDATE_TODAYS_TIMESHEET = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.WORKSHEET_UPDATE_TODAYS_TIMESHEET_ROUTE;
  public static WORKSHEET_ADD_REVIEW_TIMESHEET = AdminRoutes.WORKSHEET_REVIEW_TIMESHEET + '/' + AdminRoutes.WORKSHEET_ADD_REVIEW_TIMESHEET_ROUTE;
  public static PREPARE_QUERY = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.PREPARE_QUERY_ROUTE;
  public static VIEW_WORKSHEET_COMMENTS = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.VIEW_WORKSHEET_COMMENTS_ROUTE;
  // Befree writeoff
  public static BEFREE_WRITEOFF_ROUTE = 'befree-writeoff';
  public static BEFREE_WRITEOFF = AdminRoutes.WORKFLOW + '/' + AdminRoutes.BEFREE_WRITEOFF_ROUTE;
  public static BEFREE_WRITEOFF_ARCHIVED_ROUTE = 'befree-writeoff/befree-writeoff-archived-list';
  public static BEFREE_WRITEOFF_ARCHIVED = AdminRoutes.WORKFLOW + '/' + AdminRoutes.BEFREE_WRITEOFF_ARCHIVED_ROUTE;
  public static REVIEWER_WRITEOFF_ROUTE = 'reviewer-writeoff';
  public static REVIEWER_WRITEOFF = AdminRoutes.WORKFLOW + '/' + AdminRoutes.REVIEWER_WRITEOFF_ROUTE;
  public static REVIEWER_WRITEOFF_ARCHIVED_ROUTE = 'reviewer-writeoff/reviewer-writeoff-archived-list';
  public static REVIEWER_WRITEOFF_ARCHIVED = AdminRoutes.WORKFLOW + '/' + AdminRoutes.REVIEWER_WRITEOFF_ARCHIVED_ROUTE;
  public static SOFTWARE_LOGIN_STATUS_ROUTE = 'software-login-status';
  public static USER_HISTORY = AdminRoutes.WORKSHEET_DASHBOARD + '/' + AdminRoutes.USER_HISTORY_ROUTE;
  public static NOMINEE_LISTING = AdminRoutes.WORKFLOW + '/' + AdminRoutes.NOMINEE_LISTING_ROUTE;
  public static ADD_NOMINEE_LISTING = AdminRoutes.WORKFLOW + '/' + AdminRoutes.NOMINEE_LISTING_ROUTE;
  public static ADD_NOMINEE = AdminRoutes.ADD_NOMINEE_LISTING + '/' + AdminRoutes.ADD_NOMINEE_LISTING_ROUTE;

  // Pending Ticket
  public static PENDING_TICKETS_ROUTE = 'pending-tickets';
  public static PENDING_TICKETS = AdminRoutes.WORKFLOW + '/' + AdminRoutes.PENDING_TICKETS_ROUTE;
  public static ADD_TICKETS_ROUTE = 'pending-tickets/add-ticket';
  public static ADD_TICKETS = AdminRoutes.WORKFLOW + '/' + AdminRoutes.ADD_TICKETS_ROUTE;
  public static VIEW_TICKETS_ROUTE = 'pending-tickets/view-tickets';
  public static VIEW_TICKETS = AdminRoutes.WORKFLOW + '/' + AdminRoutes.VIEW_TICKETS_ROUTE;

  //no job conference room

  public static NO_JOB_LIST_ROUTE = 'no-job-list';
  public static NO_JOB_ARCHIVED_LIST_ROUTE = 'no-job-list/no-job-archived-list';
  public static CONFERENCE_ROOM_ROUTE = 'conference-room';
  public static BULK_ALLOCATION_ROUTE = 'bulk-allocation';
  public static SECURITY_CODES_ROUTE = 'security-codes';
  public static KNOWLEDGE_BANK_ROUTE = 'knowledge-bank';
  public static CONFERENCE_ROOM = AdminRoutes.WORKFLOW + '/' + AdminRoutes.CONFERENCE_ROOM_ROUTE;
  public static NO_JOB_LIST = AdminRoutes.WORKFLOW + '/' + AdminRoutes.NO_JOB_LIST_ROUTE;
  public static NO_JOB_ARCHIVED_LIST = AdminRoutes.WORKFLOW + '/' + AdminRoutes.NO_JOB_ARCHIVED_LIST_ROUTE;
  public static BULK_ALLOCATION = AdminRoutes.WORKFLOW + '/' + AdminRoutes.BULK_ALLOCATION_ROUTE;
  public static SECURITY_CODES = AdminRoutes.WORKFLOW + '/' + AdminRoutes.SECURITY_CODES_ROUTE;
  public static KNOWLEDGE_BANK = AdminRoutes.WORKFLOW + '/' + AdminRoutes.KNOWLEDGE_BANK_ROUTE;

  // Report Module Routes
  public static REPORT = 'report';
  public static CLIENT_REPORT_ROUTE = 'client-report';
  public static CLIENT_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.CLIENT_REPORT_ROUTE;
  public static BANK_REPORT_ROUTE = 'bank-report';
  public static BANK_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.BANK_REPORT_ROUTE;
  public static BILLING_REPORT_ROUTE = 'billing-report';
  public static BILLING_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.BILLING_REPORT_ROUTE;
  public static CLIENT_ALLOCATION_REPORT_ROUTE = 'client-allocation-report';
  public static CLIENT_ALLOCATION_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.CLIENT_ALLOCATION_REPORT_ROUTE;
  public static CLIENT_MANAGEMENT_REPORT_ROUTE = 'client-management-report';
  public static CLIENT_MANAGEMENT_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.CLIENT_MANAGEMENT_REPORT_ROUTE;
  public static CLIENT_WISE_INVOICE_REPORT_ROUTE = 'client-wise-invoice-report';
  public static CLIENT_WISE_INVOICE_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.CLIENT_WISE_INVOICE_REPORT_ROUTE;
  public static INVOICE_REPORT_ROUTE = 'invoice-report';
  public static INVOICE_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.INVOICE_REPORT_ROUTE;
  public static MONTHLY_INVOICE_REPORT_ROUTE = 'monthly-invoice-report';
  public static MONTHLY_INVOICE_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.MONTHLY_INVOICE_REPORT_ROUTE;
  public static R_SHEET_REPORT_ROUTE = 'r-sheet-report';
  public static R_SHEET_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.R_SHEET_REPORT_ROUTE;
  public static R_SHEET_SUMMARY_REPORT_ROUTE = 'r-sheet-summary-report';
  public static R_SHEET_SUMMARY_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.R_SHEET_SUMMARY_REPORT_ROUTE;
  public static SYSTEM_SETUP_REPORT_ROUTE = 'system-setup-report';
  public static SYSTEM_SETUP_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.SYSTEM_SETUP_REPORT_ROUTE;
  public static TICKET_REPORT_ROUTE = 'ticket-report';
  public static TICKET_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.TICKET_REPORT_ROUTE;
  public static PENDING_TICKET_REPORT_ROUTE = 'pending-ticket-report';
  public static PENDING_TICKET_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.PENDING_TICKET_REPORT_ROUTE;
  public static BILLING_HOSTING_USER_REPORT_ROUTE = 'billing-hosting-user-report';
  public static BILLING_HOSTING_USER_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.BILLING_HOSTING_USER_REPORT_ROUTE;
  public static BILLING_SUBACTIVITY_REPORT_ROUTE = 'billing-subactivity-report';
  public static BILLING_SUBACTIVITY_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.BILLING_SUBACTIVITY_REPORT_ROUTE;
  public static BILLING_TAX_TURNOVER_REPORT_ROUTE = 'billing-tax-turnover-report';
  public static BILLING_TAX_TURNOVER_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.BILLING_TAX_TURNOVER_REPORT_ROUTE;
  public static BILLING_SERVICE_REPORT_ROUTE = 'billing-service-report';
  public static BILLING_SERVICE_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.BILLING_SERVICE_REPORT_ROUTE;
  public static FIXED_FEE_REPORT_ROUTE = 'fixed-fee-report';
  public static FIXED_FEE_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.FIXED_FEE_REPORT_ROUTE;
  public static FIXED_FEE_REVISION_REPORT_ROUTE = 'fixed-fee-revision-report';
  public static FIXED_FEE_REVISION_REPORT = AdminRoutes.REPORT + '/' + AdminRoutes.FIXED_FEE_REVISION_REPORT_ROUTE;
  //
  // Invoices Modules
  //
  public static BILLING = 'billing';
  public static INVOICES = 'invoices';
  public static INVOICES_DASHBOARD_ROUTE = 'dashboard';
  public static MANAGE_WIP_INVOICE_ROUTE = 'manage-wip-invoice';
  public static MANAGE_WIP_INVOICE_VIEW_ROUTE = 'manage-wip-invoice/manage-wip-invoice-view';
  public static WIP_PREVIEW_ROUTE = 'manage-wip-invoice/wip-preview';
  public static WIP_PREVIEW_VIEW_ROUTE = 'manage-wip-invoice/wip-preview-view';
  public static ADD_ONE_OFF_INVOICE_ROUTE = 'one-off-invoice';
  public static ADD_NEW_INVOICE_ROUTE = 'new-invoice';
  public static ADD_ADJUST_WIP_INVOICE_ROUTE = 'adjust-wip';
  public static ADD_RECURRING_ROUTE = 'recurring/add-recurring';
  public static MANAGE_RECURRING_ROUTE = 'recurring/manage-recurring';
  public static PREVIEW_RECURRING_ROUTE = 'recurring/recurring-preview';
  public static INVOICE_TEMPLATE_PREVIEW_ROUTE = 'invoice-template-preview';
  public static INVOICE_TEMPLATE_EDIT_ROUTE = 'invoice-template-edit';
  public static VIEW_RECURRING_ROUTE = 'recurring/recurring-view';
  public static UNCHARGED_UNITS_ROUTE = 'uncharged-units';
  public static DEBTORS_MANAGEMENT_ROUTE = 'debtors-management';
  public static BILLING_INFORMATION_ROUTE = 'billing-information';
  public static BILLING_BASIC_INFORMATION_ROUTE = 'billing-info-basic-information';
  public static BILLING_BASIC_INFO_SERVICES_ROUTE = 'billing-info-services';
  public static VIEW_BILLING_INFORMATION_ROUTE = 'billing-info-services/view-billing-information';
  public static UNCHARGED_UNITS_SUMMARY_ROUTE = 'uncharged-units/uncharged-units-summary';
  public static DEBTORS_MANAGEMENT_EMAIL_TEMPLATE_ROUTE = 'debtors-management/debtors-management-email-template';
  public static FIXED_FEE_PROPOSAL_ROUTE = 'fixed-fee-proposal';
  public static FIXED_FEE_CLIENT_LIST_ROUTE = 'fixed-fee-proposal/fixed-fee-client-list';
  public static FIXED_FEE_PROPOSAL_BOOKKEEPING_SUMMARY_ROUTE = 'fixed-fee-proposal/fixed-fee-proposal-bookkeeping-summary';
  public static FIXED_FEE_PROPOSAL_BOOKKEEPING_DETAILS_ROUTE = 'fixed-fee-proposal/fixed-fee-proposal-bookkeeping-summary/fixed-fee-bookkeeping-details';
  public static FIXED_FEE_SERVICES_PROPOSAL_PREVIEW_ROUTE = 'fixed-fee-proposal/fixed-fee-proposal-bookkeeping-summary/fixed-fee-proposal-preview';
  public static FIXED_FEE_PROPOSAL_PREVIEW_ROUTE = 'fixed-fee-proposal/proposal-preview';
  public static FIXED_FEE_VIEW_BOOKKEEPING_SUMMARY_ROUTE = 'fixed-fee-proposal/fixed-fee-proposal-bookkeeping-summary/view-fixed-fee-proposal-bookkeeping-summary';
  public static FIXED_FEE_VIEW_BOOKKEEPING_DETAIL_ROUTE = 'fixed-fee-proposal/fixed-fee-proposal-bookkeeping-summary/view-fixed-fee-bookkeeping-details';
  public static INVOICES_DASHBOARD = AdminRoutes.BILLING + '/' + AdminRoutes.INVOICES + '/' + AdminRoutes.INVOICES_DASHBOARD_ROUTE;
  public static MANAGE_WIP_INVOICE = AdminRoutes.BILLING + '/' + AdminRoutes.INVOICES + '/' + AdminRoutes.INVOICES_DASHBOARD_ROUTE + '/' + AdminRoutes.MANAGE_WIP_INVOICE_ROUTE;
  public static MANAGE_WIP_INVOICE_VIEW = AdminRoutes.BILLING + '/' + AdminRoutes.INVOICES + '/' + AdminRoutes.INVOICES_DASHBOARD_ROUTE + '/' + AdminRoutes.MANAGE_WIP_INVOICE_VIEW_ROUTE;
  public static WIP_PREVIEW = AdminRoutes.BILLING + '/' + AdminRoutes.INVOICES + '/' + AdminRoutes.INVOICES_DASHBOARD_ROUTE + '/' + AdminRoutes.WIP_PREVIEW_ROUTE;
  public static WIP_PREVIEW_VIEW = AdminRoutes.BILLING + '/' + AdminRoutes.INVOICES + '/' + AdminRoutes.INVOICES_DASHBOARD_ROUTE + '/' + AdminRoutes.WIP_PREVIEW_VIEW_ROUTE;
  public static ADD_ONE_OFF_INVOICE = AdminRoutes.BILLING + '/' + AdminRoutes.INVOICES + '/' + AdminRoutes.ADD_ONE_OFF_INVOICE_ROUTE;
  public static ADD_NEW_INVOICE = AdminRoutes.BILLING + '/' + AdminRoutes.INVOICES + '/' + AdminRoutes.ADD_NEW_INVOICE_ROUTE;
  public static ADD_ADJUST_WIP_INVOICE = AdminRoutes.BILLING + '/' + AdminRoutes.INVOICES + '/' + AdminRoutes.ADD_ADJUST_WIP_INVOICE_ROUTE;
  public static ADD_RECURRING = AdminRoutes.BILLING + '/' + AdminRoutes.INVOICES + '/' + AdminRoutes.ADD_RECURRING_ROUTE;
  public static MANAGE_RECURRING = AdminRoutes.BILLING + '/' + AdminRoutes.INVOICES + '/' + AdminRoutes.MANAGE_RECURRING_ROUTE;
  public static PREVIEW_RECURRING = AdminRoutes.BILLING + '/' + AdminRoutes.INVOICES + '/' + AdminRoutes.PREVIEW_RECURRING_ROUTE;
  public static INVOICE_TEMPLATE_PREVIEW = AdminRoutes.BILLING + '/' + AdminRoutes.INVOICES + '/' + AdminRoutes.INVOICES_DASHBOARD_ROUTE + '/' + AdminRoutes.INVOICE_TEMPLATE_PREVIEW_ROUTE;
  public static INVOICE_TEMPLATE_EDIT = AdminRoutes.BILLING + '/' + AdminRoutes.INVOICES + '/' + AdminRoutes.INVOICES_DASHBOARD_ROUTE + '/' + AdminRoutes.INVOICE_TEMPLATE_EDIT_ROUTE;
  public static VIEW_RECURRING = AdminRoutes.BILLING + '/' + AdminRoutes.INVOICES + '/' + AdminRoutes.VIEW_RECURRING_ROUTE;
  public static UNCHARGED_UNITS = AdminRoutes.BILLING + '/' + AdminRoutes.UNCHARGED_UNITS_ROUTE;
  public static UNCHARGED_UNITS_SUMMARY = AdminRoutes.BILLING + '/' + AdminRoutes.UNCHARGED_UNITS_SUMMARY_ROUTE;
  public static DEBTORS_MANAGEMENT = AdminRoutes.BILLING + '/' + AdminRoutes.DEBTORS_MANAGEMENT_ROUTE;
  public static DEBTORS_MANAGEMENT_EMAIL_TEMPLATE = AdminRoutes.BILLING + '/' + AdminRoutes.DEBTORS_MANAGEMENT_EMAIL_TEMPLATE_ROUTE;
  public static BILLING_INFORMATION = AdminRoutes.BILLING + '/' + AdminRoutes.BILLING_INFORMATION_ROUTE;
  public static BILLING_BASIC_INFORMATION = AdminRoutes.BILLING + '/' + AdminRoutes.BILLING_INFORMATION_ROUTE + '/' + AdminRoutes.BILLING_BASIC_INFORMATION_ROUTE;
  public static BILLING_BASIC_INFO_SERVICES = AdminRoutes.BILLING + '/' + AdminRoutes.BILLING_INFORMATION_ROUTE + '/' + AdminRoutes.BILLING_BASIC_INFO_SERVICES_ROUTE;
  public static VIEW_BILLING_INFORMATION = AdminRoutes.BILLING + '/' + AdminRoutes.BILLING_INFORMATION_ROUTE + '/' + AdminRoutes.VIEW_BILLING_INFORMATION_ROUTE;
  public static FIXED_FEE_PROPOSAL = AdminRoutes.BILLING + '/' + AdminRoutes.FIXED_FEE_PROPOSAL_ROUTE;
  public static FIXED_FEE_PROPOSAL_BOOKKEEPING_SUMMARY = AdminRoutes.BILLING + '/' + AdminRoutes.FIXED_FEE_PROPOSAL_BOOKKEEPING_SUMMARY_ROUTE;
  public static FIXED_FEE_PROPOSAL_BOOKKEEPING_DETAILS = AdminRoutes.BILLING + '/' + AdminRoutes.FIXED_FEE_PROPOSAL_BOOKKEEPING_DETAILS_ROUTE;
  public static FIXED_FEE_SERVICES_PROPOSAL_PREVIEW = AdminRoutes.BILLING + '/' + AdminRoutes.FIXED_FEE_SERVICES_PROPOSAL_PREVIEW_ROUTE;
  public static FIXED_FEE_PROPOSAL_PREVIEW = AdminRoutes.BILLING + '/' + AdminRoutes.FIXED_FEE_PROPOSAL_PREVIEW_ROUTE;
  public static FIXED_FEE_CLIENT_LIST = AdminRoutes.BILLING + '/' + AdminRoutes.FIXED_FEE_CLIENT_LIST_ROUTE;
  public static FIXED_FEE_VIEW_BOOKKEEPING_SUMMARY = AdminRoutes.BILLING + '/' + AdminRoutes.FIXED_FEE_VIEW_BOOKKEEPING_SUMMARY_ROUTE;
  public static FIXED_FEE_VIEW_BOOKKEEPING_DETAIL = AdminRoutes.BILLING + '/' + AdminRoutes.FIXED_FEE_VIEW_BOOKKEEPING_DETAIL_ROUTE;

  /*Qoute*/
  public static QUOTE_ROUTE = 'quote';
  public static QUOTE = AdminRoutes.BILLING + '/' + AdminRoutes.QUOTE_ROUTE;
  public static EDI_QUOTE_ROUTE = 'quote/edit-quote';
  public static EDI_QUOTE = AdminRoutes.BILLING + '/' + AdminRoutes.EDI_QUOTE_ROUTE;
  public static QUOTE_EMAIL_VIEW_ROUTE = 'quote/quote-email-view';
  public static QUOTE_EMAIL_VIEW = AdminRoutes.BILLING + '/' + AdminRoutes.QUOTE_EMAIL_VIEW_ROUTE;

  public static EDIT_QUOTE_DETAILS_ROUTE = 'quote/edit-quote-details';
  public static EDIT_QUOTE_DETAILS = AdminRoutes.BILLING + '/' + AdminRoutes.EDIT_QUOTE_DETAILS_ROUTE;

  public static VIEW_EDIT_QUOTE_DETAIL_ROUTE = 'view-details';
  public static VIEW_EDIT_QUOTE_DETAIL = AdminRoutes.BILLING + '/' + AdminRoutes.EDIT_QUOTE_DETAILS_ROUTE + '/' + AdminRoutes.VIEW_EDIT_QUOTE_DETAIL_ROUTE;

  public static EXISTING_CLIENT_REQUEST_ROUTE = 'existing-client-request';
  public static EXISTING_CLIENT_REQUEST = `${AdminRoutes.QUOTE}/${AdminRoutes.EXISTING_CLIENT_REQUEST_ROUTE}`;

  public static PREVIEW_QUOTE_ROUTE = 'preview-quote';
  public static PREVIEW_QUOTE = `${AdminRoutes.QUOTE}/${AdminRoutes.PREVIEW_QUOTE_ROUTE}`;

  public static QUOTE_AGREEDISAGREE_ROUTE = 'quote-agreed';
  public static QUOTE_AGREEDISAGREE = `${AdminRoutes.QUOTE}/${AdminRoutes.QUOTE_AGREEDISAGREE_ROUTE}`;

  public static QUOTE_THANKYOU_ROUTE = 'thankyou';
  public static QUOTE_THANKYOU = `${AdminRoutes.QUOTE_THANKYOU_ROUTE}`;

  public static QUOTE_AGREEMENTLTR_ROUTE = 'agreementletter';
  public static QUOTE_AGREEMENTLTR = AdminRoutes.QUOTE + '/' + AdminRoutes.QUOTE_AGREEMENTLTR_ROUTE;

  public static QUOTE_TERMSCONDITION_ROUTE = 'terms-condition';
  public static QUOTE_TERMSCONDITION = `${AdminRoutes.QUOTE_TERMSCONDITION_ROUTE}`;
  /*Debtors Management*/

  //Newsletter

  public static NEWSLETTER_DASHBOARD_ROUTE = 'newsletter';
  public static NEWSLETTER_CAMPAIGNS_LIST_ROUTE = 'campaigns-list';
  public static NEWSLETTER_ADD_CAMPAIGNS_ROUTE = 'add-campaigns';
  public static NEWSLETTER_ADD_GROUP_ROUTE = 'add-subscriber-group';
  public static NEWSLETTER_DASHBOARD = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.NEWSLETTER_DASHBOARD_ROUTE;
  public static NEWSLETTER_CAMPAIGNS_LIST = AdminRoutes.NEWSLETTER_DASHBOARD + '/' + AdminRoutes.NEWSLETTER_CAMPAIGNS_LIST_ROUTE;
  public static NEWSLETTER_ADD_CAMPAIGNS = AdminRoutes.NEWSLETTER_DASHBOARD + '/' + AdminRoutes.NEWSLETTER_ADD_CAMPAIGNS_ROUTE;
  public static NEWSLETTER_ADD_GROUP = AdminRoutes.NEWSLETTER_DASHBOARD + '/' + AdminRoutes.NEWSLETTER_ADD_GROUP_ROUTE;

  // Client module Query Modules

  public static PENDING_QUERY_ROUTE = 'query-module';
  public static PENDING_QUERY = AdminRoutes.CLIENT + '/' + AdminRoutes.PENDING_QUERY_ROUTE;
  public static EDIT_QUERIES_ROUTE = 'edit-queries';
  public static EDIT_QUERIES = AdminRoutes.PENDING_QUERY + '/' + AdminRoutes.EDIT_QUERIES_ROUTE;
  public static VIEW_QUERIES_ROUTE = 'view-query';
  public static VIEW_QUERIES = AdminRoutes.PENDING_QUERY + '/' + AdminRoutes.VIEW_QUERIES_ROUTE;

  //
  // Admin New HRMS New module routes
  //
  public static ADMIN_NEW_HRMS = 'admin-hrms-new';
  // Apply leave Listing
  public static APPLY_LEAVE_LISTING_ROUTE = 'hrms-apply-leave-listing';
  public static APPLY_LEAVE_LISTING = AdminRoutes.ADMIN_NEW_HRMS + '/' + AdminRoutes.APPLY_LEAVE_LISTING_ROUTE;
  public static APPLY_LEAVE_FORM_ROUTE = 'apply-leave-form';
  public static APPLY_LEAVE_FORM = AdminRoutes.APPLY_LEAVE_LISTING + '/' + AdminRoutes.APPLY_LEAVE_FORM_ROUTE;
  public static APPLY_HOLIDAY_WORKING_LISTING_ROUTE = 'hrms-holiday-working-listing';
  public static APPLY_HOLIDAY_WORKING_LISTING = AdminRoutes.ADMIN_NEW_HRMS + '/' + AdminRoutes.APPLY_HOLIDAY_WORKING_LISTING_ROUTE;
  public static APPLY_HOLIDAY_WORKING_LEAVE_FORM_ROUTE = 'apply-holiday-working-form';
  public static APPLY_HOLIDAY_WORKING_LEAVE_FORM = AdminRoutes.APPLY_HOLIDAY_WORKING_LISTING + '/' + AdminRoutes.APPLY_HOLIDAY_WORKING_LEAVE_FORM_ROUTE;
  public static MY_PROFILE_ROUTE = 'my-profile';
  public static HRMS_MY_PROFILE = AdminRoutes.ADMIN_NEW_HRMS + '/' + AdminRoutes.MY_PROFILE_ROUTE;
  public static LEAVE_TRACKERS_ROUTE = 'leave-trackers';
  public static LEAVE_TRACKERS = AdminRoutes.ADMIN_NEW_HRMS + '/' + AdminRoutes.LEAVE_TRACKERS_ROUTE;
  public static MY_AWARD_LISTING_ROUTE = 'my-award-listing';
  public static MY_AWARD_LISTING = AdminRoutes.ADMIN_NEW_HRMS + '/' + AdminRoutes.MY_AWARD_LISTING_ROUTE;
  public static MY_BOOKED_LUNCH_LISTING_ROUTE = 'my-lunch-booking';
  public static MY_BOOKED_LUNCH_LISTING = AdminRoutes.ADMIN_NEW_HRMS + '/' + AdminRoutes.MY_BOOKED_LUNCH_LISTING_ROUTE;
  public static AWARDEE_OF_THE_MONTH_ROUTE = 'awardee-of-the-month';
  public static AWARDEE_OF_THE_MONTH = AdminRoutes.ADMIN_NEW_HRMS + '/' + AdminRoutes.AWARDEE_OF_THE_MONTH_ROUTE;

  //SME Signature

  public static SMESIGNATURE_ROUTE = 'sme-signature';
  public static USER_SIGNATURE_LISTING_ROUTE = 'user-signature-listing';
  public static ADD_USER_SIGNATURE_LISTING_ROUTE = 'add-user-signature';
  public static ADD_SMS_SIGNATURE_TEMPLATE_ROUTE = 'add-sme-signature-template';
  public static SMESIGNATURE_LISTING = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.SMESIGNATURE_ROUTE;
  public static USER_SIGNATURE_LISTING = AdminRoutes.SMESIGNATURE_LISTING + '/' + AdminRoutes.USER_SIGNATURE_LISTING_ROUTE;
  public static ADD_USER_SIGNATURE_LISTING = AdminRoutes.SMESIGNATURE_LISTING + '/' + AdminRoutes.ADD_USER_SIGNATURE_LISTING_ROUTE;
  public static ADD_SMS_SIGNATURE_TEMPLATE = AdminRoutes.SMESIGNATURE_LISTING + '/' + AdminRoutes.ADD_SMS_SIGNATURE_TEMPLATE_ROUTE;

  //Award Module

  public static AWARD_ROUTE = 'award-master';
  public static ADD_AWARD_ROUTE = 'add-award-master';
  public static AWARD_MASTER = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.AWARD_ROUTE;
  public static ADD_AWARD = AdminRoutes.AWARD_MASTER + '/' + AdminRoutes.ADD_AWARD_ROUTE;

  //Food Module

  public static FOOD_MENU_ROUTE = 'food-menu-master';
  public static ADD_MENU_LIST_ROUTE = 'add-menu-list';
  public static BOOK_YOUR_LUNCH_ROUTE = 'book-your-lunch';
  public static FOOD_MENU_FEEDBACK_ROUTE = 'food-menu-feedback';
  public static FOOD_MENU = AdminRoutes.ADMINISTRATION + '/' + AdminRoutes.FOOD_MENU_ROUTE;
  public static ADD_MENU_LIST = AdminRoutes.FOOD_MENU + '/' + AdminRoutes.ADD_MENU_LIST_ROUTE;
  public static BOOK_YOUR_LUNCH_OLD = AdminRoutes.FOOD_MENU + '/' + AdminRoutes.BOOK_YOUR_LUNCH_ROUTE;
  public static FOOD_MENU_FEEDBACK = AdminRoutes.FOOD_MENU + '/' + AdminRoutes.FOOD_MENU_FEEDBACK_ROUTE;

  // Client Module Routes (Bank Change)

  public static BANK_CHANGE_ROUTE = 'bank-change';
  public static ADD_BANK_CHANGE_ROUTE = 'add-bank-change-form';
  public static BANK_CHANGE = AdminRoutes.CLIENT + '/' + AdminRoutes.BANK_CHANGE_ROUTE;
  public static ADD_BANK_CHANGE = AdminRoutes.BANK_CHANGE + '/' + AdminRoutes.ADD_BANK_CHANGE_ROUTE;

  public static WELCOME_KIT_ROUTE = AdminRoutes.HRMS + '/welcome-kit';
  public static ADD_WELCOME_KIT_ROUTE = AdminRoutes.WELCOME_KIT_ROUTE + '/add';
  public static UPDATE_WELCOME_KIT_ROUTE = AdminRoutes.WELCOME_KIT_ROUTE + '/update';
  public static PAYROLL = 'payroll';
  public static PAYROLL_EMPLOYEES = AdminRoutes.PAYROLL + '/employees';
  public static PAYROLL_PAYRUN = AdminRoutes.PAYROLL + '/payrun';
  public static ADD_PAYROLL_EMPLOYEE = AdminRoutes.PAYROLL_EMPLOYEES+ '/add';
  public static UPDATE_PAYROLL_EMPLOYEE = AdminRoutes.PAYROLL_EMPLOYEES+ '/update';
  public static VIEW_PAYROLL_EMPLOYEE = AdminRoutes.PAYROLL_EMPLOYEES+ '/view';
  public static PAYROLL_TIMESHEET = AdminRoutes.PAYROLL + '/timesheet';

  public static NPS = 'nps'
}


export class CustomerRoutes {
  public static LOGIN = 'login';
  public static RESET_PASSWORD = 'reset-password';
  public static DASHBOARD = 'dashboard';
}
