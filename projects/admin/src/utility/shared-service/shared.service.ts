import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {JwtHelper} from 'angular2-jwt';
import {SharedUserService} from './shared-user.service';
import {APPStorage} from '../constants/storage';
import {ToastType} from '../constants/base-constants';
import {CommonFunctions} from '../common-functions';
import {AdminRoutes} from '../constants/admin-route';
import {AdminUser, Privilege} from '../shared-model/admin-user.model';
import {InvoiceStatusWise} from '../../app/admin/billing-module/invoices/invoice-dashboard/invoice.model';
import {BillingBasic} from '../shared-model/billing.model';
import {Recurring} from '../../app/admin/billing-module/invoices/recurring/recurring.model';

@Injectable()
export class SharedService extends SharedUserService {
  jwtHelper: JwtHelper = new JwtHelper();
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /* Shared Loader Param */
  private taskCount = 0;
  private _token = '';
  private ClientData: any;
  private DiscontinueClientData: any;
  private WorksheetData: any;
  private TimesheetData: any;
  private ReportData: InvoiceStatusWise = null;
  private RecurringData: Recurring = null;
  private BillingData: BillingBasic = null;
  private QuoteData = null;
  private QuoteViewData: any;
  private RedirectData: any;
  private ChecklistItem: any;
  private ViewChecklistItem: any;
  private ReviewChecklistItem: any;
  private PeerReviewChecklistItem: any;
  private TamReviewChecklistItem: any;
  private ViewReviewChecklistItem: any;
  private QuoteStage: any;
  private jumpFlag: any;
  // private AdminDashboardData: any;

  /* Shared Loader Param */
  private msgBody: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private _privilege: Privilege[] = [];
  private historyURL: BehaviorSubject<any> = new BehaviorSubject<any>({url: '', params: {}, searchparams: {}});
  /* Shared Token Expire params */
  private _userDetail: any;

  constructor(private router: Router) {
    super();
  }

  /* Shared LoggedIn Param */
  private isLoginRequired: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private timeSheetUnits: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  private AdminDashboardData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private checkFood: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  getCheckFood(): Observable<any> {
    return this.checkFood.asObservable();
  }

  setCheckFood(val: any): void {
    this.checkFood.next(val);
  }

  getTimeSheetUnits(): Observable<any> {
    return this.timeSheetUnits.asObservable();
  }

  setTimeSheetUnits(val: any): void {
    this.timeSheetUnits.next(val);
  }

  getLoginRequired(): Observable<boolean> {
    return this.isLoginRequired.asObservable();
  }

  setLoginRequired(val: boolean): void {
    this.isLoginRequired.next(val);
  }

  getLoader(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  /* Shared User Token Param */
  setToken(value: string): void {
    localStorage.setItem(APPStorage.TOKEN, CommonFunctions.ENCRYPT_OBJ(value));
    this._token = value;
  }

  getToken(): string {
    this._token = CommonFunctions.DECRYPT_OBJ(localStorage.getItem(APPStorage.TOKEN));
    return this._token;
  }

  /* Shared User Privilege Param */
  setPrivilege(value: Privilege[]): void {
    localStorage.setItem(APPStorage.ADMIN_PRIVILEGE, CommonFunctions.ENCRYPT_OBJ(value));
    this._privilege = value;
  }

  getPrivilege(): Privilege[] {
    this._privilege = CommonFunctions.DECRYPT_OBJ(localStorage.getItem(APPStorage.ADMIN_PRIVILEGE));
    return this._privilege;
  }

  IsValidToken(token: string): boolean {
    let isValid = true;
    try {
      const isTokenExpired = this.jwtHelper.isTokenExpired(this.getToken());
      if (isTokenExpired) {
        isValid = false;
        // this.logout(AdminRoutes.LOGIN);
      }
    } catch (e) {
      isValid = false;
    }
    return isValid;
  }

  isLoggedIn(): boolean {
    return this.IsValidToken(this.getToken()) && this.isValidUser(this.getUser());
  }

  /* Shared User detailChangeFlag for update status */

  setLoader(val: boolean): void {
    if (val) {
      this.taskCount += 1;
    } else {
      this.taskCount -= 1;
      this.taskCount !== 0 ? val = true : '';
    }
    this.isLoading.next(val);
  }

  isValidUser(user: AdminUser): boolean {
    return (user) ? true : false;
  }

  getToastMessage(): Observable<any> {
    return this.msgBody.asObservable();
  }

  setToastMessage(message: any, type: ToastType) {
    let body = null;
    if (message) {
      body = {
        message: message,
        type: type
      };
    }
    this.msgBody.next(body);
  }

  /* View History URL */
  setHistoryURL(value: any): void {
    this.historyURL.next(value);
  }

  getHistoryURL(): Observable<any> {
    return this.historyURL.asObservable();
  }

  getUserDetail(): any {
    if (!this._userDetail) {
      this._userDetail = CommonFunctions.DECRYPT_OBJ(localStorage.getItem(APPStorage.USERDETAIL));
    }
    return this._userDetail;
  }

  setUserDetail(value: any): void {
    localStorage.setItem(APPStorage.USERDETAIL, CommonFunctions.ENCRYPT_OBJ(value));
    this._userDetail = value;
  }

  /**
   * Get Worksheet data
   * @param key
   * @returns {any}
   */
  getWorksheetData(key): any {
    this.WorksheetData = CommonFunctions.DECRYPT_OBJ(localStorage.getItem(APPStorage.WORKSHEET_DATA));
    return this.WorksheetData[key];
  }

  /**
   * Set Worksheet  data
   * @param key
   * @param value
   */
  setWorksheetData(key, value: any): void {
    const setData = {};
    setData[key] = value;
    localStorage.setItem(APPStorage.WORKSHEET_DATA, CommonFunctions.ENCRYPT_OBJ(setData));
    this.WorksheetData = setData;
  }

  /**
   * Get Timesheet data
   * @param key
   * @returns {any}
   */
  getTimesheetData(key): any {
    this.TimesheetData = CommonFunctions.DECRYPT_OBJ(localStorage.getItem(APPStorage.TIMESHEET_DATA));
    return this.TimesheetData[key];
  }

  /**
   * Set Timesheet data
   * @param key
   * @param value
   */
  setTimesheetData(key, value: any): void {
    const setData = {};
    setData[key] = value;
    localStorage.setItem(APPStorage.TIMESHEET_DATA, CommonFunctions.ENCRYPT_OBJ(setData));
    this.TimesheetData = setData;
  }

  /**
   * Get Client data
   * @param key
   * @returns {any}
   */
  getClientData(key): any {
    this.ClientData = CommonFunctions.DECRYPT_OBJ(localStorage.getItem(APPStorage.CLIENT_DATA));
    return this.ClientData[key];
  }

  /**
   * Set Client data
   * @param key
   * @param value
   */
  setClientData(key, value: any): void {
    const setData = {};
    setData[key] = value;
    localStorage.setItem(APPStorage.CLIENT_DATA, CommonFunctions.ENCRYPT_OBJ(setData));
    this.ClientData = setData;
  }

  /**
   * Get Invoice Data
   */
  getInvoiceData(): any {
    this.ReportData = CommonFunctions.DECRYPT_OBJ(sessionStorage.getItem(APPStorage.INVOICE_DATA));
    return this.ReportData;
  }

  /**
   * Set Invoice Data
   * @param value
   */
  setInvoiceData(value: any): void {
    sessionStorage.setItem(APPStorage.INVOICE_DATA, CommonFunctions.ENCRYPT_OBJ(value));
    this.ReportData = value;
  }

  /**
   * Get Discontinue Client data
   * @param key
   * @returns {any}
   */
  getDiscontinueClientData(key): any {
    this.DiscontinueClientData = CommonFunctions.DECRYPT_OBJ(localStorage.getItem(APPStorage.DISCONTINUE_CLIENT_DATA));
    return this.DiscontinueClientData[key];
  }

  /**
   * Set Discontinue Client data
   * @param key
   * @param value
   */
  setDiscontinueClientData(key, value: any): void {
    const setData = {};
    setData[key] = value;
    localStorage.setItem(APPStorage.DISCONTINUE_CLIENT_DATA, CommonFunctions.ENCRYPT_OBJ(setData));
    this.DiscontinueClientData = setData;
  }

  /**
   * Get Discontinue Client data
   * @param key
   * @returns {any}
   */
  getQuoteViewData(key): any {
    this.QuoteViewData = CommonFunctions.DECRYPT_OBJ(sessionStorage.getItem(APPStorage.QUOTE_VIEW_DATA));
    return this.QuoteViewData[key];
  }

  /**
   * Set Quote master data
   * @param key
   * @param value
   */
  setQuoteViewData(key, value: any): void {
    const setData = {};
    setData[key] = value;
    sessionStorage.setItem(APPStorage.QUOTE_VIEW_DATA, CommonFunctions.ENCRYPT_OBJ(setData));
    this.QuoteViewData = setData;
  }

  /**
   * Get Recurring Data
   */
  getRecurringData(): any {
    this.RecurringData = CommonFunctions.DECRYPT_OBJ(sessionStorage.getItem(APPStorage.RECURRING_DATA));
    return this.RecurringData;
  }

  /**
   * Set Recurring Data
   * @param value
   */
  setRecurringData(value: any): void {
    sessionStorage.setItem(APPStorage.RECURRING_DATA, CommonFunctions.ENCRYPT_OBJ(value));
    this.RecurringData = value;
  }

  /**
   * Get Billing Info Data
   */
  getBillingData(): any {
    this.BillingData = CommonFunctions.DECRYPT_OBJ(sessionStorage.getItem(APPStorage.BILLING_DATA));
    return this.BillingData;
  }

  /**
   * Set Billing Info Data
   * @param value
   */
  setBillingData(value: any): void {
    sessionStorage.setItem(APPStorage.BILLING_DATA, CommonFunctions.ENCRYPT_OBJ(value));
    this.BillingData = value;
  }

  /**
   * Get Billing Info Data
   */
  getQuoteData(): any {
    this.QuoteData = CommonFunctions.DECRYPT_OBJ(sessionStorage.getItem(APPStorage.QUOTE_DATA));
    return this.QuoteData;
  }

  /**
   * Set Billing Info Data
   * @param value
   */
  setQuoteData(value: any): void {
    sessionStorage.setItem(APPStorage.QUOTE_DATA, CommonFunctions.ENCRYPT_OBJ(value));
    this.QuoteData = value;
  }

  getStage(): any {
    this.QuoteStage = CommonFunctions.DECRYPT_OBJ(sessionStorage.getItem(APPStorage.QUOTE_STAGE));
    return this.QuoteStage;
  }

  /**
   * Set Billing Info Data
   * @param value
   */
  setStage(value: any): void {
    sessionStorage.setItem(APPStorage.QUOTE_STAGE, CommonFunctions.ENCRYPT_OBJ(value));
    this.QuoteStage = value;
  }

  getJumpToAgreementPage(): any {
    this.jumpFlag = CommonFunctions.DECRYPT_OBJ(sessionStorage.getItem(APPStorage.JUMPTOAGREEMENT_PAGE));
    return this.jumpFlag;
  }

  /**
   * Set Billing Info Data
   * @param value
   */
  setJumpToAgreementPage(value: any): void {
    sessionStorage.setItem(APPStorage.JUMPTOAGREEMENT_PAGE, CommonFunctions.ENCRYPT_OBJ(value));
    this.jumpFlag = value;
  }

  /**
   * Get Redirect Parameter
   */
  getRedirectParameter(key): any {
    this.RedirectData = CommonFunctions.DECRYPT_OBJ(localStorage.getItem(APPStorage.REDIRECT_DATA));
    return this.RedirectData[key];
  }

  /**
   * Set Invoice Data
   * @param value
   */
  setRedirectParameter(key, value: any): void {
    const setData = {};
    setData[key] = value;
    localStorage.setItem(APPStorage.REDIRECT_DATA, CommonFunctions.ENCRYPT_OBJ(setData));
    this.RedirectData = setData;
  }

  /**
   * Get Checklist Data
   */
  getChecklistViewData(): any {
    this.ViewChecklistItem = CommonFunctions.DECRYPT_OBJ(sessionStorage.getItem(APPStorage.VIEW_CHECKLIST_ITEM));
    return this.ViewChecklistItem;
  }

  /**
   * Set Checklist Data
   * @param value
   */
  setChecklistViewData(value: any): void {
    sessionStorage.setItem(APPStorage.VIEW_CHECKLIST_ITEM, CommonFunctions.ENCRYPT_OBJ(value));
    this.ViewChecklistItem = value;
  }

  /**
   * Get Checklist Data
   */
  getChecklistData(): any {
    this.ChecklistItem = CommonFunctions.DECRYPT_OBJ(sessionStorage.getItem(APPStorage.CHECKLIST_ITEM));
    return this.ChecklistItem;
  }

  /**
   * Set Checklist Data
   * @param value
   */
  setChecklistData(value: any): void {
    sessionStorage.setItem(APPStorage.CHECKLIST_ITEM, CommonFunctions.ENCRYPT_OBJ(value));
    this.ChecklistItem = value;
  }

  /**
   * Set Review Checklist Data
   * @param value
   */
  setReviewChecklistData(value: any): void {
    sessionStorage.setItem(APPStorage.REVIEW_CHECKLIST_ITEM, CommonFunctions.ENCRYPT_OBJ(value));
    this.ReviewChecklistItem = value;
  }

  /**
   * Get Review Checklist Data
   */
  getReviewChecklistData(): any {
    this.ReviewChecklistItem = CommonFunctions.DECRYPT_OBJ(sessionStorage.getItem(APPStorage.REVIEW_CHECKLIST_ITEM));
    return this.ReviewChecklistItem;
  }

  /**
   * Set Peer Review Checklist Data
   * @param value
   */
  setPeerReviewChecklistData(value: any): void {
    sessionStorage.setItem(APPStorage.PEER_REVIEW_CHECKLIST_ITEM, CommonFunctions.ENCRYPT_OBJ(value));
    this.PeerReviewChecklistItem = value;
  }

  /**
   * Get Peer Review Checklist Data
   */
  getPeerReviewChecklistData(): any {
    this.PeerReviewChecklistItem = CommonFunctions.DECRYPT_OBJ(sessionStorage.getItem(APPStorage.PEER_REVIEW_CHECKLIST_ITEM));
    return this.PeerReviewChecklistItem;
  }

  /**
   * Set Tam Review Checklist Data
   * @param value
   */
  setTamReviewChecklistData(value: any): void {
    sessionStorage.setItem(APPStorage.TAM_CHECKLIST_ITEM, CommonFunctions.ENCRYPT_OBJ(value));
    this.TamReviewChecklistItem = value;
  }

  /**
   * Get Peer Review Checklist Data
   */
  getTamReviewChecklistData(): any {
    this.TamReviewChecklistItem = CommonFunctions.DECRYPT_OBJ(sessionStorage.getItem(APPStorage.TAM_CHECKLIST_ITEM));
    return this.TamReviewChecklistItem;
  }

  /**
   * Get Fixed Fee Data
   */
  getFixedFeeData(): any {
    this.ReportData = CommonFunctions.DECRYPT_OBJ(sessionStorage.getItem(APPStorage.FIXEDFEE_DATA));
    return this.ReportData;
  }

  /**
   * Set Fixed Fee Data
   * @param value
   */
  setFixedFeeData(value: any): void {
    sessionStorage.setItem(APPStorage.FIXEDFEE_DATA, CommonFunctions.ENCRYPT_OBJ(value));
    this.ReportData = value;
  }

  clearSession() {
    sessionStorage.clear();
    localStorage.clear();
    this.setToken('');
    this.setToken(null);
    this.setLoginRequired(false);
  }

  logout(route: string = AdminRoutes.LOGIN): void {
    this.clearSession();
    this.router.navigate(['/' + route]);
  }

  /**
   * Check User Tab with main tab action like page with CURD operation
   * @param tab_id
   */
  checkUserPrivilegesTabs(tab_id: number) {
    const userPrivilege = this.getPrivilege();
    const getTabsArray = userPrivilege.filter(data => data.id === tab_id);
    if (getTabsArray.length) {
      return getTabsArray[0];
    } else {
      return [];
    }
  }

  /**
   * Check User Privileges
   * @param tab_id
   * @param tab_key
   * @param other_right_key
   * @param other_right_inner_key
   * @param other_right_inner_value
   * @param is_array
   */
  checkUserPrivileges(tab_id: number, tab_key: string, other_right_key?: string, other_right_inner_key?: string, other_right_inner_value?: string, is_array = 0) {
    const userPrivilege = this.getPrivilege();
    const getTabsArray = userPrivilege.filter(data => data.id === tab_id);
    if (!CommonFunctions.isEmpty(getTabsArray)) {
      if (is_array === 0) {
        const tabValue = getTabsArray[0][tab_key];
        if (tabValue === 1) {
          return true;
        } else {
          return false;
        }
      } else {
        const getTabOtherRights = getTabsArray[0][other_right_key];
        if (getTabOtherRights) {
          const getTabOtherRightsValue = getTabOtherRights.filter(dataItem => dataItem[other_right_inner_key] === other_right_inner_value);
          if (getTabOtherRightsValue.length) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }

  /**
   * Get Dashboard Data
   */
  getDashboardData(): Observable<any> {
    // this.AdminDashboardData = CommonFunctions.DECRYPT_OBJ(sessionStorage.getItem(APPStorage.ADMIN_DASHBOARD_DATA));
    return this.AdminDashboardData.asObservable();
  }

  /**
   * Set Dashboard Data
   * @param value
   */
  setDashboardData(value: any): void {
    // sessionStorage.setItem(APPStorage.ADMIN_DASHBOARD_DATA, CommonFunctions.ENCRYPT_OBJ(value));
    this.AdminDashboardData.next(value);
  }
}
