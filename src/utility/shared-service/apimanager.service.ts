import {Injectable} from '@angular/core';
import {SharedService} from './shared.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import {Observable} from 'rxjs/Observable';
import {AppLogger} from '../common-functions';
import {ToastType} from '../constants/base-constants';

@Injectable()
export class APIManager {
  constructor(private sharedService: SharedService, private http: HttpClient) {
  }

  get HttpOptions() {
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.sharedService.getToken()}`
    });
    return {headers: httpOptions};
  }

  get HttpOptions_1() {
    let httpOptions;
    const authToken = this.sharedService.getToken();
    httpOptions = new HttpHeaders({
      'Authorization': `${authToken}`
    });
    return {headers: httpOptions};
  }

  get HttpOptions_2(): any {
    return {
      headers: new HttpHeaders({
        'Authorization': `${this.sharedService.getToken()}`,
      }),
      responseType: 'blob'
    };
  }

  /**
   * Get API
   * @param serviceName
   * @param params
   * @param {{headers: HttpHeaders}} httpOptions
   * @param {boolean} showLoader
   * @param {boolean} showToast
   * @returns {Observable<any>}
   */

  get(serviceName, params, httpOptions = this.HttpOptions, showLoader: boolean = true, showToast: boolean = false): Observable<any> {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    return this.http.get(this.prepareserviceName(serviceName, params), httpOptions)
      .map(res => {
        return this.extractData(res, showToast);
      }, (error: any) => {
      })
      .finally(() => {
        if (showLoader) {
          this.sharedService.setLoader(false);
        }
      });
  }

  /**
   * Post API
   * @param serviceName
   * @param params
   * @param httpOptions
   * @param showLoader
   * @param showToast
   */

  post(serviceName, params, httpOptions: any = this.HttpOptions, showLoader: boolean = true, showToast: boolean = true): Observable<any> {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    return this.http.post(serviceName, params, httpOptions)
      .map((response: any) => {
        return this.extractData(response, showToast);
      }, (error: any) => {
        AppLogger(error);
      })
      .finally(() => {
        if (showLoader) {
          this.sharedService.setLoader(false);
        }
      });
  }

  /**
   * Put API
   * @param serviceName
   * @param params
   * @param httpOptions
   * @param showLoader
   * @param showToast
   */

  put(serviceName, params, httpOptions = this.HttpOptions, showLoader: boolean = true, showToast: boolean = true): Observable<any> {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    return this.http.put(serviceName, params, httpOptions)
      .map((response: any) => {
        return this.extractData(response, showToast);
      }, (error: any) => {
        AppLogger(error);
      })
      .finally(() => {
        if (showLoader) {
          this.sharedService.setLoader(false);
        }
      });
  }

  /**
   * Delete API
   * @param serviceName
   * @param httpOptions
   * @param showLoader
   * @param showToast
   */

  delete(serviceName, httpOptions = this.HttpOptions, showLoader: boolean = true, showToast: boolean = true): Observable<any> {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    return this.http.delete(serviceName, httpOptions)
      .map((response: any) => {
        return this.extractData(response, showToast);
      }, (error: any) => {
        AppLogger(error);
      })
      .finally(() => {
        if (showLoader) {
          this.sharedService.setLoader(false);
        }
      });
  }

  /**
   * File Upload API
   * @param serviceName
   * @param filesObj
   * @param {boolean} showLoader
   * @param {boolean} showToast
   * @returns {Observable<any>}
   */

  postMultipart(serviceName, params, filesObj: any, showLoader: boolean = true, showToast: boolean = true): Observable<any> {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }

    const formData: FormData = new FormData();
    for (const imgKey in filesObj) {
      for (let i = 0; i < filesObj[imgKey].length; i++) {
        if (filesObj[imgKey][i]) {
          formData.append(imgKey, filesObj[imgKey][i]['file'], filesObj[imgKey][i]['name']);
        }
      }
    }
    if (params && (Object.keys(params).length)) {
      for (const docKey in params) {
        formData.append(docKey, params[docKey]);
      }
    }

    return this.http.post(serviceName, formData, this.HttpOptions_1)
      .map((response: any) => {
        return this.extractData(response, showToast);
      }, (error: any) => {
        AppLogger(error);
      })
      .finally(() => {
        if (showLoader) {
          this.sharedService.setLoader(false);
        }
      });
  }

  private prepareserviceName(serviceName: string, params: any) {
    if (Object.keys(params).length) {
      let queryString = '?';
      let count = 0;
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          queryString += (count > 0) ? '&' + key + '=' + params[key] : key + '=' + params[key];
          count++;
        }
      }
      return serviceName + queryString;
    }
    return serviceName;
  }

  private extractData(res: any, show?: boolean) {
    const msg = res.message;
    if (show && msg) {
      this.sharedService.setToastMessage(msg, ToastType.SUCCESS);
    }
    return res || {};
  }
}
