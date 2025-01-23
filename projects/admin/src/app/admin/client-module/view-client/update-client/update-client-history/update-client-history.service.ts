import {Injectable} from '@angular/core';
import {APIManager} from '../../../../../../utility/shared-service/apimanager.service';
import {Observable} from 'rxjs';

@Injectable()
export class UpdateClientHistoryService {

  constructor(private _apiManager: APIManager) {
  }

  getHistoryData(url: string, params: any = {}, searchParams: any = {}): Observable<any> {
    return this._apiManager.get(url, params, searchParams);
  }
}
