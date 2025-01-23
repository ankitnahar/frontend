import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {APIManager} from './apimanager.service';
import {CommonFunctions, DownloadFile} from '../common-functions';
import {EXPORTFILETYPE} from '../constants/base-constants';

@Injectable()

export class CommonCrudService {

  constructor(private _apiManager: APIManager) {
  }

  /**
   * Common Get Data API
   * @param apiUrl
   * @param {number} id
   * @param params
   * @returns {Observable<any>}
   */
  getData(apiUrl: any, id: number, params?: any, searchParams?: any) {
    if (id > 0) {
      return this._apiManager.get(apiUrl + '/' + id, params, searchParams);
    } else {
      return this._apiManager.get(apiUrl, params, searchParams);
    }
  }

  /**
   * Common Listing Data API
   * @param apiUrl
   * @param params
   * @param searchParams
   * @returns {Observable<any>}
   */
  listData(apiUrl: any, params: any, searchParams: any = {}): Observable<any> {
    return this._apiManager.get(apiUrl, params, searchParams);
  }

  /**
   * Common Add Data API
   * @param apiUrl
   * @param params
   * @returns {Observable<any>}
   */
  addData(apiUrl: any, params: any, fileObj?: any[]): Observable<any> {
    if (fileObj) {
      return this._apiManager.postMultipartAPI(apiUrl, params, fileObj, this._apiManager.HttpOptions_3);
    } else {
      return this._apiManager.post(apiUrl, params, this._apiManager.HttpOptions, true, true);
    }
  }

  /**
   * Common Update Put Data API
   * @param apiUrl
   * @param {number} id
   * @param params
   * @returns {Observable<any>}
   */
  updateDataWithPut(apiUrl: any, id: number, params: any) {
    return this._apiManager.put(apiUrl + '/' + id, params);
  }

  /**
   * Common Update Data API
   * @param apiUrl
   * @param {number} id
   * @param params
   * @returns {Observable<any>}
   */
  updateData(apiUrl: any, id: number, params: any, fileObj?: any[]) {
    if (fileObj) {
      return this._apiManager.postMultipartAPI(apiUrl + '/' + id, params, fileObj, this._apiManager.HttpOptions_3);
    } else {
      return this._apiManager.post(apiUrl + '/' + id, params);
    }
  }

  /**
   * Common Delete Data
   * @param apiUrl
   * @param id
   */
  deleteData(apiUrl: any, id: number, params?: any) {
    if (params) {
      return this._apiManager.delete(apiUrl + '/' + params);
    } else {
      return this._apiManager.delete(apiUrl + '/' + id);
    }
  }

  /**
   *  Common Export Data API
   * @param apiUrl
   * @param params
   * @param searchParams
   * @param fileName
   * @param fileType
   * @returns {Observable<any>}
   */
  downloadExcelData(apiUrl: any, params: any, searchParams: any, fileName: string, fileType: number, isDownloadWithDate?: number): Observable<any> {
    const printDate = CommonFunctions.getTodayDate();
    const isDownloadWithDateString = (isDownloadWithDate === 1) ? isDownloadWithDate : 0;
    if (isDownloadWithDateString === 1) {
      return this._apiManager.getWithDownloadFile(apiUrl, params, searchParams, this._apiManager.HttpOptions_2).pipe(
        map(response => DownloadFile(response, fileName, EXPORTFILETYPE[fileType].file_type, EXPORTFILETYPE[fileType].file_extension)));
    } else {
      return this._apiManager.getWithDownloadFile(apiUrl, params, searchParams, this._apiManager.HttpOptions_2).pipe(
        map(response => DownloadFile(response, fileName + printDate, EXPORTFILETYPE[fileType].file_type, EXPORTFILETYPE[fileType].file_extension)));
    }
  }

  /**
   * Common Upload Document
   * @param apiUrl
   * @param params
   */
  uploadDocument(apiUrl, params) {
    return this._apiManager.post(apiUrl, params, this._apiManager.HttpOptions_3);
  }

  /**
   * Generate Report
   * @param param
   * @param {number} tabID
   * @returns {Observable<any>}
   */
  generatReport(apiUrl: any, param: any): Observable<any> {
    return this._apiManager.get(apiUrl, param);
  }

  /**
   * Download Report
   * @param params
   * @returns {Observable<any>}
   */
  downloadReport(apiUrl: any, params: any, searchParams: any, fileName: string, fileType: number): Observable<any> {
    const printDate = CommonFunctions.getTodayDate();
    return this._apiManager.getWithDownloadFile(apiUrl, params, searchParams, this._apiManager.HttpOptions_2).pipe(
      map(response => DownloadFile(response, fileName + printDate, EXPORTFILETYPE[fileType].file_type, EXPORTFILETYPE[fileType].file_extension)));
  }

  /**
   * Download Document
   * @param apiUrl
   */
  downloadDocument(apiUrl: any, params?: any): Observable<Blob> {
    return this._apiManager.get(apiUrl, params, {}, this._apiManager.HttpOptions_2);
  }
}
