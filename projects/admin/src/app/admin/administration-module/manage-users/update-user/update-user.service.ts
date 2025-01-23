import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AdminAPI} from '../../../../../utility/constants/api';
import {APIManager} from '../../../../../utility/shared-service/apimanager.service';

@Injectable()
export class UpdateUserService {

  constructor(private _apiManager: APIManager) {
  }

  getUserDetail(userId): Observable<any> {
    return this._apiManager.get(AdminAPI.ADMIN_USER + '/' + userId);
  }

  getDataList(route: string, params): Observable<any> {
    return this._apiManager.get(route, params);
  }

  adminPersonalDataRequest(userId: number, params: any, avtarFile: any[]): Observable<any> {
    if (avtarFile.length) {
      return this._apiManager.postMultipartAPI(AdminAPI.ADMIN_USER + '/' + userId, params, avtarFile, this._apiManager.HttpOptions_3);
    } else {
      return this._apiManager.post(AdminAPI.ADMIN_USER + '/' + userId, params);
    }
  }

  changePassword(userId: number, params: any): Observable<any> {
    return this._apiManager.put(AdminAPI.CHANGE_PASSWORD + '/' + userId, params);
  }

  addUser(params: any, fileObj: any[]): Observable<any> {
    if (fileObj.length) {
      return this._apiManager.postMultipartAPI(AdminAPI.ADMIN_USER, params, fileObj, this._apiManager.HttpOptions_3);
    } else {
      return this._apiManager.post(AdminAPI.ADMIN_USER, params);
    }
  }

  getPrivilegeTypeList(userId: number, params: any) {
    return this._apiManager.get(AdminAPI.USER_PRIVILEGE + '/' + userId, params);
  }

  putPagePrivilege(userId: number, params: any) {
    return this._apiManager.post(AdminAPI.USER_PRIVILEGE + '/' + userId, params);
  }

  getTeamByDepartment(departmentId: number): Observable<any> {
    return this._apiManager.get(AdminAPI.TEAM_DEPARTMENT_WISE + '/' + departmentId);
  }

  getTeamDesignationWiseList(designationId: number): Observable<any> {
    return this._apiManager.get(AdminAPI.TEAM_DESIGNATION_WISE + '/' + designationId);
  }

  getUserDesignationWiseList(params: any): Observable<any> {
    return this._apiManager.get(AdminAPI.USER_LIST_DEISGNATION_WISE, params);
  }

  getUserWriteOff(params: any, searchParam): Observable<any> {
    return this._apiManager.get(AdminAPI.ADMIN_USER, params, searchParam);
  }

  submitUserHierarchy(userID: number, params: any): Observable<any> {
    return this._apiManager.post(AdminAPI.USER_HIERARCHY + '/' + userID, params);
  }

  getUserHierarchyData(userID: number): Observable<any> {
    return this._apiManager.get(AdminAPI.USER_HIERARCHY_SHOW + '/' + userID);
  }

  getDesignationList(params: any): Observable<any> {
    return this._apiManager.get(AdminAPI.DESIGNATION, params);
  }

  getTeamList(params: any): Observable<any> {
    return this._apiManager.get(AdminAPI.TEAM, params);
  }

  getServices(params: any): Observable<any> {
    return this._apiManager.get(AdminAPI.SERVICES, params);
  }
}
