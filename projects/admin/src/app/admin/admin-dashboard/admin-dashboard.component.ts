import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AdminAPI} from '../../../utility/constants/api';
import {convertURLParamToEncode} from '../../../utility/common-functions';
import {DialogView} from '../hrms-module/hrms-dashboard/hrms-dashboard.component';
import {AdminRoutes} from '../../../utility/constants/admin-route';
import {BASE, GLOBALDATAKEYS} from '../../../utility/constants/base-constants';
import * as moment from 'moment';
import {AdminDashboard} from './admin-dashboard.model';
import {AdminUser, Privilege} from '../../../utility/shared-model/admin-user.model';
import {ADMINTABACCESS} from '../../../utility/constants/header-constant';
import {SharedService} from '../../../utility/shared-service/shared.service';
import {SharedUserService} from '../../../utility/shared-service/shared-user.service';
import {CommonCrudService} from '../../../utility/shared-service/common-crud.service';
import {AttendanceSummary} from "../hrms-module/hrms-dashboard/attendance-summary/attendance-summary.model";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  dashboardDetail: AdminDashboard;
  // Angular Variables
  lateComingList: any[] = [];
  yearMonth: any[] = [];
  url = BASE.IMAGE_PATH;

  // Form Variables
  filterForm: FormGroup;
  enuView = DialogView;
  activeView: DialogView = null;
  monthYear = null;
  // Pie Chart Variables
  pieChartLabels: string[] = [];
  pieChartData: number[] = [];
  pieChartType: string;
  options: any = {};
  pieChartColors: Array<any> = [];
  selectedYearMonth = '';
  isAddTimesheetButtonRights = false;
  userData: AdminUser;
  tabID = ADMINTABACCESS.WORKFLOW_TIMESHEET;
  tabIDInCompleted = ADMINTABACCESS.WORKFLOW_VIEWINCOMPLETEDWORKSHEET;
  isInCompletedWorksheet: Privilege | any[];
  securityCodeTabID = ADMINTABACCESS.WORKFLOW_SECURITIES_CODE;
  securityCodeTabData: Privilege | any[];
  hrDetail: AttendanceSummary;

  constructor(private _router: Router, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedService: SharedService, private _sharedUserService: SharedUserService) {
  }

  get leaveSummary() {
    return '/' + AdminRoutes.LEAVE_SUMMARY;
  }

  ngOnInit() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
    this.userData = this._sharedUserService.getUser();
    this.isInCompletedWorksheet = this._sharedService.checkUserPrivilegesTabs(this.tabIDInCompleted);
    this.securityCodeTabData = this._sharedService.checkUserPrivilegesTabs(this.securityCodeTabID);
    // this.initializationMethod();
    this.isAddTimesheetButtonRights = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'add_timesheet', 1);
    this.monthYearList();
    this.getDashboard(null);
    this.getHRDetail();
  }

  getHRDetail() {
    this._commonCrudService.listData(AdminAPI.GETDETAIL, {}).subscribe(Response => {
      this.hrDetail = Response.payload.data;
    });
  }

  

  /**
   * Initialization Methods
   */
  getDashboard(year?: string) {
    year = (year === '' || year === null) ? this.yearMonth[0]['key'] : year;
    this._commonCrudService.listData(AdminAPI.DASHBOARD, {'yearMonth': year},
      {})
      .subscribe((response) => {
        this.dashboardDetail = response.payload.data;
        if (year === this.yearMonth[0]['key']) {
          this._sharedService.setDashboardData(this.dashboardDetail);
        }
      });
  }

  onChangeGetValue(value: string) {
    this.selectedYearMonth = value;
    this.getDashboard(value);
  }

  chartInitialization() {
    this.pieChartLabels = ['Early Leaving', 'Sunday Working', 'Late Coming', 'Holiday Working', 'Absent'];
    this.pieChartData = [50, 300, 40, 30, 20];
    this.pieChartType = 'pie';
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 12
        }
      }
    };
    this.pieChartColors = [{
      backgroundColor: ['#0288d1', '#1abc9c', '#34495e', '#e67e22', '#ff6348'],
      borderColor: ['#0288d1', '#1abc9c', '#34495e', '#e67e22', '#ff6348']
    }];
  }

  // Events
  chartClicked(e: any): void {

  }

  chartHovered(e: any): void {

  }

  onOpenDialog(dialogName) {
    switch (dialogName) {
      case 'approve-reject':
        this.activeView = this.enuView.APPROVE_REJECT_VIEW;
        break;
      case 'announcement':
        this.activeView = this.enuView.ANNOUNCEMENT_DIALOG_VIEW;
        break;
    }
  }

  applyLeave() {
    this._router.navigate(['/' + AdminRoutes.APPLY_LEAVE]);
  }

  attendanceSummary(status: string, yearMonth: string, viewType: string, type: string) {
    if (status !== '' && yearMonth && viewType && type) {
      let jsonData = {};
      if (type === 'status' || type === 'remark' || type === 'finalremark') {
        if (type === 'status') {
          jsonData = convertURLParamToEncode({'status': status, 'month_year': yearMonth, 'view': viewType});
        } else if (type === 'remark') {
          jsonData = convertURLParamToEncode({'remark': status, 'month_year': yearMonth, 'view': viewType});
        } else if (type === 'finalremark') {
          if (status === '3') {
            jsonData = convertURLParamToEncode({
              'final_remark': status,
              'remark': 5,
              'month_year': yearMonth,
              'view': viewType
            });
          } else {
            jsonData = convertURLParamToEncode({'final_remark': status, 'month_year': yearMonth, 'view': viewType});
          }
        }
        this._router.navigate(['/' + AdminRoutes.ATTENDANCE_SUMMARY], {queryParams: jsonData});
      }

      if (type === 'stage_id') {
        if (type === 'stage_id') {
          jsonData = convertURLParamToEncode({'stage_id': status, 'month_year': yearMonth, 'view': viewType});
        }
        this._router.navigate(['/' + AdminRoutes.HRMS_USER_PENDING_TIMESHEET], {queryParams: jsonData});
      }
    }
  }

  todayAbsent() {
    this._router.navigate(['/' + AdminRoutes.TODAY_ABSENT]);
  }

  leaveOnThisMonth() {
    this._router.navigate(['/' + AdminRoutes.LEAVE_ON_THIS_MONTH]);
  }

  earlyLeaving() {
    this._router.navigate(['/' + AdminRoutes.EARLY_LEAVING]);
  }

  holidayWorking() {
    this._router.navigate(['/' + AdminRoutes.HOLIDAY_WORKING]);
  }

  lateSitting() {
    this._router.navigate(['/' + AdminRoutes.LATE_SITTING]);
  }

  onLeaveBalanceListing() {
    this._router.navigate(['/' + AdminRoutes.HRMS_LEAVE_BALANCE]);
  }

  onCloseDialog(event) {
    this.activeView = event;
  }

  monthYearList() {
    const date = new Date();
    for (let i = 0; i < 2; i++) {
      const key = moment(date, 'YYYY-MM').subtract(moment.duration(i, 'month')).format('YYYY-MM');
      const label = moment(date, 'YYYY-MM').subtract(moment.duration(i, 'month')).format('MMM-YYYY');
      this.yearMonth.push({'key': key, 'label': label});
    }

    if (this.yearMonth) {
      this.selectedYearMonth = this.yearMonth[0]['key'];
    }
  }

  onDailyReport() {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.HRMS_DAILY_REPORT, '_blank');
    });
  }

  onTodaysTimesheet() {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.WORKSHEET_TODAYS_TIMESHEET, '_blank');
    });
  }

  onWorksheet() {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB, '_blank');
    });
  }

  onSecurityCode() {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.SECURITY_CODES, '_blank');
    });
  }

  onKnowledgeBank() {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.KNOWLEDGE_BANK, '_blank');
    });
  }

  onAddTimeSheet() {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.WORKSHEET_ADD_NEW_TODAYS_TIMESHEET, '_blank');
    });
  }

  onReadPolicies() {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.HRMS_READ_POLICIES, '_blank');
    });
  }

  onOpenTodaysIncompletedWorksheet() {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.WORKSHEET_TODAYS_WORKSHEET_VIEW_INCOMPLETED_WORKSHEET, '_blank');
    });
  }

  onOpenEmployeeHandbook() {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.EMPLOYEE_HANDBOOK, '_blank');
    });
  }

  onOpenPOSTPolicy() {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.POSH_POLICY, '_blank');
    });
  }
}
