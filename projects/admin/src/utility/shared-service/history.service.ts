import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {APIManager} from './apimanager.service';

@Injectable()
export class HistoryService {

  constructor(private _apiManager: APIManager) {
  }

  getHistoryData(url: string, params: any = {}, searchParams: any = {}): Observable<any> {
    return this._apiManager.get(url, params, searchParams);
  }
}
