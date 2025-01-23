import {Component, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {PendingTickets, TicketAssignee} from './../pending-tickets.model';
import {FormBuilder} from '@angular/forms';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {GLOBALDATAKEYS, ticketPriority, ticketSeverity} from '../../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../../utility/constants/api';
import {Department, Team} from '../../../../../utility/shared-model/designation.model';
import * as FileSaver from 'file-saver';
import * as moment from 'moment';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.scss']
})
export class ViewTicketsComponent implements OnInit {
  ticketDetail: PendingTickets;
  ticketData: PendingTickets = null;
  ticketAssignee: TicketAssignee[] = [];
  severityList = ticketSeverity;
  priorityList = ticketPriority;
  teamList: Team[] = [];
  ticketStatusList = [];
  departmentList: Department[] = [];

  constructor(private _router: Router, private _fb: FormBuilder, private _sharedService: SharedService, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService) {
  }

  ngOnInit() {
    this.getTeam();
    this.getDepartmentList();
    this.getTicketStatusList();
    this.ticketData = this._sharedService.getClientData(GLOBALDATAKEYS.PENDING_TICKET);
    if (this.ticketData) {
      const ticket_id = this.ticketData.id;
      this.getTicketViewDetails(ticket_id);
    }
  }

  /**
   * Get Department List
   */
  getDepartmentList() {
    this._commonCrudService.listData(AdminAPI.DEPARTMENT, {'records': 'all'}).subscribe(Response => {
      this.departmentList = Response.payload.data;
    });
  }

  /**
   * get Ticket Detail
   * @param ticket_id
   */
  getTicketViewDetails(ticket_id) {
    if (ticket_id > 0) {
      this._commonCrudService.getData(AdminAPI.TICKET_LIST, ticket_id, {}).subscribe((response) => {
        if (response) {
          this.ticketDetail = response.payload.data;
          if (response.payload.data.ticketAssignee) {
            this.ticketAssignee = response.payload.data.ticketAssignee;
          }
        }
      });
    }
  }

  /**
   * Display Get Severity
   * @param {number} Severity
   * @returns {string}
   */
  getSeverity(severity: number): string {
    const val = this.severityList.filter(elem => elem.key === severity);
    return (val.length) ? val[0].label : '';
  }

  /**
   * Display Get Severity
   * @param {number} Severity
   * @returns {string}
   */
  getPriority(priority: number): string {
    const val = this.priorityList.filter(elem => elem.key === priority);
    return (val.length) ? val[0].label : '';
  }

  /**
   * Get team
   */
  getTeam() {
    this._commonCrudService.listData(AdminAPI.TEAM, {}, {}).subscribe((response) => {
      if (response) {
        this.teamList = response.payload.data;
      }
    });
  }

  /**
   * Get Ticket Status List
   */
  getTicketStatusList() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      'records': 'all',
      'table': 'ticket_status',
      'column': 'id,status,hide_for_sr',
      'sortOrder': 'id',
      'sortBy': 'asc'
    }, {}).subscribe(Response => {
      this.ticketStatusList = Response;
    });
  }

  /**
   * Display Get Team Name
   * @param {number} teamId
   * @returns {string}
   */
  getTeamName(team_id: number): string {
    const val = this.teamList.filter(elem => elem.id === Number(team_id));
    return (val.length) ? val[0].team_name : '';
  }

  /**
   * Display Get Team Name
   * @param {number} teamId
   * @returns {string}
   */
  getStatusName(status_id: number): string {
    const val = this.ticketStatusList.filter(elem => elem.id === Number(status_id));
    return (val.length) ? val[0].status : '';
  }

  /**
   * Download All Document
   */
  downloadAllDocument(ticketId: number) {
    this._commonCrudService.downloadDocument(AdminAPI.TICKET_DOWNLOAD_ZIP + '/' + ticketId).subscribe(response => {
      if (response && response.type) {
        const extension = response.type.split('/');
        FileSaver.saveAs(response, 'TicketDocument - ' + ticketId + moment(new Date()).format('DD-MM-YYYY'));
      }
    });
  }


  onPendingTicket() {
    this._router.navigate(['/' + AdminRoutes.PENDING_TICKETS]);
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Display Get Department
   * @param {number} Department
   * @returns {string}
   */
  getDepartmentName(department_id: number): string {
    const val = this.departmentList.filter(elem => elem.id === department_id);
    return (val.length) ? val[0].department_name : '';
  }
}
