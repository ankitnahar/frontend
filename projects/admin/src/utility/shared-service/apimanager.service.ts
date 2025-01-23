import {catchError, finalize, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {SharedService} from './shared.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';


import {Observable} from 'rxjs';
import {AppLogger, CommonFunctions} from '../common-functions';
import {ToastType} from '../constants/base-constants';

@Injectable()
export class APIManager {
  constructor(private sharedService: SharedService, private http: HttpClient) {
  }

  get HttpOptions() {
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.sharedService.getToken()}`
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
        'Authorization': `${'Bearer ' + this.sharedService.getToken()}`,
      }),
      responseType: 'blob'
    };
  }

  get HttpOptions_3() {
    let httpOptions;
    const authToken = this.sharedService.getToken();
    httpOptions = new HttpHeaders({
      'Authorization': `${'Bearer ' + authToken}`
    });
    return {headers: httpOptions};
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

  get(serviceName, params = {}, searchParam = {}, httpOptions = this.HttpOptions, showLoader: boolean = true, showToast: boolean = false): Observable<any> {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    return this.http.get(this.prepareserviceName(serviceName, params, searchParam), httpOptions).pipe(
      map(res => {
        return this.extractData(res, showToast);
      }, (error: any) => {
      }), catchError(error => {
        this.extractErrorData(error['error'], showToast);
        return [];
      }),
      finalize(() => {
        if (showLoader) {
          this.sharedService.setLoader(false);
        }
      }),);
  }

  getWithDownloadFile(serviceName, params = {}, searchParam = {}, httpOptions = this.HttpOptions, showLoader: boolean = true, showToast: boolean = false): Observable<any> {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    return this.http.get(this.prepareserviceName(serviceName, params, searchParam), httpOptions).pipe(
      map(res => {
        return this.extractData(res, showToast);
      }, (error: any) => {
      }), catchError(error => {
        this.extractErrorData(error['error'], showToast);
        return [];
      }),
      finalize(() => {
        if (showLoader) {
          this.sharedService.setLoader(false);
        }
      }),);
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
    return this.http.post(serviceName, params, httpOptions).pipe(
      map((response: any) => {
        return this.extractData(response, showToast);
      }, (error: any) => {
        AppLogger(error);
      }),
      catchError(error => {
        this.extractErrorData(error['error'], showToast);
        return [];
      }),
      finalize(() => {
        if (showLoader) {
          this.sharedService.setLoader(false);
        }
      }),);
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
    return this.http.put(serviceName, params, httpOptions).pipe(
      map((response: any) => {
        return this.extractData(response, showToast);
      }, (error: any) => {
        AppLogger(error);
      }), catchError(error => {
        this.extractErrorData(error['error'], showToast);
        return [];
      }),
      finalize(() => {
        if (showLoader) {
          this.sharedService.setLoader(false);
        }
      }),);
  }

  putMutliPartAPI(url: string, params: {}, filesObj: any, httpOptions: any = this.HttpOptions,
                  showLoader: boolean = true, showToast: boolean = true): Observable<any> {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    const formData: FormData = new FormData();
    for (const obj of filesObj) {
      const imgFilesObj: File[] = obj['files'];
      for (let i = 0; i < imgFilesObj.length; i++) {
        formData.append(obj['reqKey'], imgFilesObj[i], imgFilesObj[i].name);
      }
    }
    if (params !== '' && params !== undefined && params !== null) {
      for (const property in params) {
        if (params.hasOwnProperty(property)) {
          formData.append(property, params[property]);
        }
      }
    }
    return this.http.put(url, formData, httpOptions).pipe(
      map((response: any) => {
        return this.extractData(response, showToast);
      }, (error: any) => {
      }), catchError(error => {
        this.extractErrorData(error['error'], showToast);
        return [];
      }),
      finalize(() => {
        if (showLoader) {
          this.sharedService.setLoader(false);
        }
      }),);
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
    return this.http.delete(serviceName, httpOptions).pipe(
      map((response: any) => {
        return this.extractData(response, showToast);
      }, (error: any) => {
        AppLogger(error);
      }), catchError(error => {
        this.extractErrorData(error['error'], showToast);
        return [];
      }),
      finalize(() => {
        if (showLoader) {
          this.sharedService.setLoader(false);
        }
      }),);
  }

  /**
   * File Upload API
   * @param serviceName
   * @param filesObj
   * @param {boolean} showLoader
   * @param {boolean} showToast
   * @returns {Observable<any>}
   */

  postMultipartAPI(endPoint, params = {}, filesObj: any, httpOptions: any = this.HttpOptions,
                   showLoader: boolean = true, showToast: boolean = true): Observable<any> {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    const formData: FormData = new FormData();
    for (const obj of filesObj) {
      const imgFilesObj: File[] = obj['file'];
      for (let i = 0; i < imgFilesObj.length; i++) {
        formData.append(obj['reqKey'], imgFilesObj[i], imgFilesObj[i].name);
      }
    }
    if (params && (Object.keys(params).length)) {
      for (const docKey in params) {
        formData.append(docKey, params[docKey]);
      }
    }
    return this.http.post(endPoint, formData, httpOptions).pipe(
      map((response: any) => {
        return this.extractData(response, showToast);
      }, (error: any) => {
      }), catchError(error => {
        this.extractErrorData(error['error'], showToast);
        return [];
      }),
      finalize(() => {
        if (showLoader) {
          this.sharedService.setLoader(false);
        }
      }));
  }

  /**
   * delete API
   * @param endPoint
   * @param params
   * @param httpOptions
   * @param showLoader
   * @param showToast
   * @returns {any}
   */
  deleteAPI(endPoint, params = {}, httpOptions: any = this.HttpOptions,
            showLoader: boolean = true, showToast: boolean = true) {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    return this.http.delete(this.prepareserviceName(endPoint, params), httpOptions).pipe(
      map((response: any) => {
        return this.extractData(response, showToast);
      }, (error: any) => {
      }), catchError(error => {
        this.extractErrorData(error['error'], showToast);
        return [];
      }),
      finalize(() => {
        if (showLoader) {
          this.sharedService.setLoader(false);
        }
      }),);
  }

  private prepareserviceName(serviceName: string, params: any, searchParams = {}) {
    (!CommonFunctions.isEmpty(searchParams)) ? params['search'] = JSON.stringify(searchParams) : '';
    if (Object.keys(params).length) {
      let queryString = params ? '?' : '';
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

  private extractErrorData(res: any, show?: boolean) {
    // const msg = res.message;

    let msg = '';
    if(!!res && !!res.payload && !!res.payload.error) {
      msg = res.payload.error;
    } else if(!!res && !!res.message) {
      msg = res.message;
    } else if(!!res && !!res.error) {
      msg = res.error;
    } else if(!!res) {
      msg = res;
    } else {
      msg = 'Unknown Error'
    }

    if (show && msg) {
      this.sharedService.setToastMessage(msg, ToastType.ERROR);
    }
    return res;
  }
}
