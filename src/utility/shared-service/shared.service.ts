import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {JwtHelper} from 'angular2-jwt';
import {SharedUserService} from './shared-user.service';
import {APPStorage} from '../constants/storage';
import {ToastType} from '../constants/base-constants';
import {CommonFunctions} from '../common-functions';
import {AdminRoutes} from '../constants/admin-route';

@Injectable()
export class SharedService extends SharedUserService {
  jwtHelper: JwtHelper = new JwtHelper();
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /* Shared Loader Param */
  private taskCount = 0;
  private _token = '';
  private _IsTokenExpire = false;

  /* Shared Loader Param */
  private msgBody: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private userDetailChangeFlag: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private IsLoggedInSubscriber: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /* Shared Token Expire params */

  constructor(private router: Router) {
    super();
  }

  getLoader(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  setToken(value: string): void {
    localStorage.setItem(APPStorage.TOKEN, CommonFunctions.ENCRYPT_OBJ(value));
    this._token = value;
  }

  getToken(): string {
    this._token = CommonFunctions.DECRYPT_OBJ(localStorage.getItem(APPStorage.TOKEN));
    this.setToken(this._token);
    return this._token;
  }

  /* Shared User Token Param */

  setIsTokenExpire(value: boolean): void {
    this._IsTokenExpire = value;
  }

  getIsTokenExpire(): boolean {
    return this._IsTokenExpire;
  }

  IsValidToken(token: string): boolean {
    let isValid = true;
    try {
      const isTokenExpired = this.jwtHelper.isTokenExpired(token);
      if (isTokenExpired) {
        isValid = false;
        this.setIsTokenExpire(true);
        this.clearSession();
      }
    } catch (e) {
      isValid = false;
      this.clearSession();
    }
    return isValid;
  }

  isLoggedIn(): boolean {
    return this.IsValidToken(this.getToken()) && (this.getUser() && this.getUser().verified);
  }

  isHavingAuthToken(): boolean {
    return this.IsValidToken(this.getToken()) ? true : false;
  }

  setLoader(val: boolean): void {
    if (val) {
      this.taskCount += 1;
    } else {
      this.taskCount -= 1;
      this.taskCount !== 0 ? val = true : '';
    }
    this.isLoading.next(val);
  }

  /* Shared User detailChangeFlag for update status */

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

  setUserDetailCall(value: boolean): void {
    this.userDetailChangeFlag.next(value);
  }

  /* Shared LoggedIn Param */

  getUserDetailCall(): Observable<boolean> {
    return this.userDetailChangeFlag.asObservable();
  }

  getIsLoggedInSubscriber(): Observable<boolean> {
    return this.IsLoggedInSubscriber.asObservable();
  }

  setIsLoggedInSubscriber(val: boolean): void {
    this.IsLoggedInSubscriber.next(val);
  }

  clearSession() {
    sessionStorage.clear();
    localStorage.clear();
    this.setToken('');
    this.setIsLoggedInSubscriber(false);
  }

  logout(route: string = AdminRoutes.LOGIN): void {
    this.clearSession();
    this.router.navigate(['/' + route]);
  }
} 
