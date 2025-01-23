import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {APIManager} from '../../../utility/shared-service/apimanager.service';
import {API} from '../../../utility/constants/api';

@Injectable()
export class LoginService {

  constructor(private _APIManager: APIManager) {
  }

  loginRequest(params: any): Observable<any> {
    return this._APIManager.post(API.ADMIN_LOGIN, params);
  }
}
