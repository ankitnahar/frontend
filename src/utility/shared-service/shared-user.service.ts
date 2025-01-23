import {Injectable} from '@angular/core';
import {APPStorage} from '../constants/storage';
import {CommonFunctions} from '../common-functions';

@Injectable()

export class SharedUserService {
  private _user: any;

  constructor() {
  }

  getUser(): any {
    if (!this._user) {
      this._user = CommonFunctions.DECRYPT_OBJ(localStorage.getItem(APPStorage.USER));
      this.setUser(this._user);
    }
    return this._user;
  }

  setUser(value: any): void {
    localStorage.setItem(APPStorage.USER, CommonFunctions.ENCRYPT_OBJ(value));
    this._user = value;
  }
}
