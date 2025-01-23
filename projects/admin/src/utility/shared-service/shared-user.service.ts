import {Injectable} from '@angular/core';
import {APPStorage} from '../constants/storage';
import {CommonFunctions} from '../common-functions';
import {AdminUser} from '../shared-model/admin-user.model';

@Injectable()

export class SharedUserService {
  private _user: AdminUser;

  constructor() {
  }

  getUser(): AdminUser {
    if (!this._user) {
      this._user = CommonFunctions.DECRYPT_OBJ(localStorage.getItem(APPStorage.USER));
    }
    return this._user;
  }

  setUser(value: AdminUser): void {
    localStorage.setItem(APPStorage.USER, CommonFunctions.ENCRYPT_OBJ(value));
    this._user = value;
  }
}
