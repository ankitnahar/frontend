import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {APIManager} from './apimanager.service';

import {Designation, Team} from '../shared-model/designation.model';
import {AdminAPI} from '../constants/api';
import {Observable} from 'rxjs';
import {AdminUser} from '../shared-model/admin-user.model';
import {Clients} from '../../app/admin/client-module/view-client/view-client.model';
import {HrShift} from '../shared-model/hour-shift.model';
import {Services} from '../shared-model/services.model';
import {MasterActivity} from '../../app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/master-activity/master-activity.model';
import {TaskList} from '../../app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/task-list/task-list.model';
import {Frequency} from '../shared-model/frequency.model';
import {SubActivity} from '../../app/admin/workflow-module/worksheet-module/worksheet-quick-action/hierarchy/sub-activity/sub-activity.model';
import {WorksheetStatus} from '../../app/admin/workflow-module/worksheet-module/worksheet-dashboard-tab/worksheet.model';
import {SubClient} from '../../app/admin/workflow-module/worksheet-module/worksheet-quick-action/sub-client-list/subclient.model';

@Injectable()

export class SharedObjService {

  private designationList: Designation[] = [];
  private teamList: Team[] = [];
  private clientList: Clients[] = [];
  private userList: AdminUser[] = [];
  private shiftList: HrShift[] = [];
  private serviceList: Services[] = [];
  private masterActivityList: MasterActivity[] = [];
  private taskList: TaskList[] = [];
  private frequencyList: Frequency[] = [];
  private subactivityList: SubActivity[] = [];
  private worksheetStatusList: WorksheetStatus[] = [];
  private subClientList: SubClient[] = [];

  constructor(private _APIManager: APIManager) {
  }

  /**
   * Get Designation List
   * @param params
   */
  getDesignationList(params: any, searchParam?: any): Observable<Designation[]> {
    return this._APIManager.get(AdminAPI.DESIGNATION, params, searchParam).pipe(map(response => {
      this.designationList = response.payload.data;
      return this.designationList;
    }));
  }

  /**
   * Get Team List
   * @param params
   * @param searchParam
   */
  getTeamList(params: any, searchParam: any): Observable<Team[]> {
    return this._APIManager.get(AdminAPI.TEAM, params, searchParam).pipe(map(response => {
      this.teamList = response.payload.data;
      return this.teamList;
    }));
  }

  /**
   * Get Client List
   * @param params
   * @param searchParam
   */
  getClientList(params: any, searchParam: any): Observable<Clients[]> {
    params['table'] = 'entity';
    params['column'] = 'id,code,name,billing_name,trading_name,discontinue_stage,parent_id,is_parent';
    return this._APIManager.get(AdminAPI.DROPDOWN_LIST, params, searchParam).pipe(map(response => {
      this.clientList = response;
      return this.clientList;
    }));
  }

  /**
   * Get User List
   * @param params
   * @param searchParam
   */
  getUserList(params: any, searchParam: any): Observable<AdminUser[]> {
    return this._APIManager.get(AdminAPI.ADMIN_USER_DROPDOWN, params, searchParam).pipe(map(response => {
      this.userList = response.payload.data;
      return this.userList;
    }));
  }

  /**
   * Get Shift list
   * @param params
   * @param searchParam
   */
  getShiftList(params: any, searchParam: any): Observable<HrShift[]> {
    return this._APIManager.get(AdminAPI.HOUR_SHIFT, params, searchParam).pipe(map(response => {
      this.shiftList = response.payload.data;
      return this.shiftList;
    }));
  }

  /**
   * Get Shift list
   * @param params
   * @param searchParam
   */
  getServices(params: any, searchParam: any): Observable<Services[]> {
    params['table'] = 'services';
    params['column'] = 'id,parent_id,service_name,pi_zoho_service,pi_zoho_service_request,is_active,show_in_entity_allocation,show_in_pi';
    return this._APIManager.get(AdminAPI.DROPDOWN_LIST, params, searchParam).pipe(map(response => {
      this.serviceList = response;
      return this.serviceList;
    }));
  }

  /**
   * Get Master Activity List
   * @param params
   * @param searchParam
   */
  getMasterActivity(params: any, searchParam: any): Observable<MasterActivity[]> {
    params['table'] = 'master_activity';
    params['column'] = 'id,code,name';
    return this._APIManager.get(AdminAPI.DROPDOWN_LIST, params, searchParam).pipe(map(response => {
      this.masterActivityList = response;
      return this.masterActivityList;
    }));
  }

  /**
   * Get Task List
   * @param params
   * @param searchParam
   */
  getTask(params: any, searchParam: any): Observable<TaskList[]> {
    params['table'] = 'task';
    params['column'] = 'id,name,master_activity_id';
    return this._APIManager.get(AdminAPI.DROPDOWN_LIST, params, searchParam).pipe(map(response => {
      this.taskList = response;
      return this.taskList;
    }));
  }

  /**
   * Get Sub Activity List
   * @param params
   * @param searchParam
   */
  getSubactivity(params: any, searchParam: any): Observable<SubActivity[]> {
    params['table'] = 'subactivity';
    params['column'] = 'id,subactivity_code,subactivity_name,subactivity_full_name,master_id,task_id';
    return this._APIManager.get(AdminAPI.DROPDOWN_LIST, params, searchParam).pipe(map(response => {
      this.subactivityList = response;
      return this.subactivityList;
    }));
  }

  /**
   * Get Frequency List
   * @param params
   * @param searchParam
   */
  getFrequency(params: any, searchParam: any): Observable<Frequency[]> {
    params['table'] = 'frequency';
    params['column'] = 'id,frequency_name,days,count_in_year,show_in_invoice,show_in_worksheet,show_in_permanentinfo,sort_order,is_active';
    return this._APIManager.get(AdminAPI.DROPDOWN_LIST, params, searchParam).pipe(map(response => {
      this.frequencyList = response;
      return this.frequencyList;
    }));
  }

  /**
   * Get Worksheet Status List
   * @param params
   * @param searchParam
   */
  getWorksheetStatus(params: any, searchParam: any): Observable<WorksheetStatus[]> {
    params['table'] = 'worksheet_status';
    params['column'] = 'id,status_name,is_active,sort_order';
    return this._APIManager.get(AdminAPI.DROPDOWN_LIST, params, searchParam).pipe(map(response => {
      this.worksheetStatusList = response;
      return this.worksheetStatusList;
    }));
  }

  /**
   * Get Worksheet Status List
   * @param params
   * @param searchParam
   */
  getWorksheetStatusRightsWise(params: any, searchParam: any): Observable<WorksheetStatus[]> {
    return this._APIManager.get(AdminAPI.WORKSHEET_STATUS_RIGHTS_WISE_LISTING, params, searchParam).pipe(map(response => {
      this.worksheetStatusList = response.payload.data;
      return this.worksheetStatusList;
    }));
  }

  /**
   * Get Sub Client Name
   * @param params
   * @param searchParam
   */
  getSubClientList(params: any, searchParam: any): Observable<SubClient[]> {
    params['table'] = 'sub_client';
    params['column'] = 'id,entity_id,subclient,is_active';
    return this._APIManager.get(AdminAPI.DROPDOWN_LIST, params, searchParam).pipe(map(response => {
      this.subClientList = response;
      return this.subClientList;
    }));
  }  
}
