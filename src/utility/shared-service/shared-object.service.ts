import {Injectable} from '@angular/core';
import {APIManager} from './apimanager.service';
import 'rxjs/add/observable/of';

@Injectable()

export class SharedObjService {

  constructor(private _APIManager: APIManager) {
  }
}
