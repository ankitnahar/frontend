import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {AdminRoutes} from '../../../utility/constants/admin-route';
import {AdminAPI} from '../../../utility/constants/api';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {CommonCrudService} from '../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../utility/shared-service/shared.service';
import {SharedUserService} from '../../../utility/shared-service/shared-user.service';
import {AdminUser, Privilege} from '../../../utility/shared-model/admin-user.model';
import {ADMINTABACCESS} from '../../../utility/constants/header-constant';
import {AttendanceSummary} from '../hrms-module/hrms-dashboard/attendance-summary/attendance-summary.model';
import * as moment from 'moment';
import {BASE, GLOBALDATAKEYS} from '../../../utility/constants/base-constants';
import {AdminDashboard} from '../admin-dashboard/admin-dashboard.model';
import {convertURLParamToEncode} from '../../../utility/common-functions';
import {ConfirmationDialogComponent} from '../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';
import {SharedObjService} from '../../../utility/shared-service/shared-object.service';
import {Nominee} from "../../../utility/shared-model/nominee-model";
import {FoodMaster} from "../../../utility/shared-model/food.model";

@Component({
  selector: 'app-admin-hrms-new',
  templateUrl: './admin-hrms-new.component.html',
  styleUrls: ['./admin-hrms-new.component.scss']
})
export class AdminHrmsNewComponent implements OnInit {
// Array Variables
  masterMenuList: any[] = [];
  index: number;
// bar Chart Variables
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  selectedYearMonth = '';
  isAddTimesheetButtonRights = false;
  userData: AdminUser;
  tabID = ADMINTABACCESS.WORKFLOW_TIMESHEET;
  tabIDInCompleted = ADMINTABACCESS.WORKFLOW_VIEWINCOMPLETEDWORKSHEET;
  isInCompletedWorksheet: Privilege | any[];
  securityCodeTabID = ADMINTABACCESS.WORKFLOW_SECURITIES_CODE;
  securityCodeTabData: Privilege | any[];
  hrDetail: AttendanceSummary;
  yearMonth: any[] = [];
  userBirthDayList: AdminUser[] = [];
  userNewHireList: AdminUser[] = [];
  url = BASE.IMAGE_PATH;
  dashboardDetail: AdminDashboard;
  typeOfView = 0;
  currentWorkingHours = 0;
  maxWorkingHours = 0;
  currentWorkingHoursTime = '';
  userTimesheetUnits = 0;
  upcomingHolidayList: any[] = [];
  motivation = '';
  nomineeList: Nominee[] = [];
  todaysMenu: FoodMaster;

  constructor(private _router: Router, public dialog: MatDialog, private _fb: FormBuilder, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService, private _sharedUserService: SharedUserService, private _sharedObjService: SharedObjService) {
  }


  ngOnInit() {
    this.userData = this._sharedUserService.getUser();
    this.isInCompletedWorksheet = this._sharedService.checkUserPrivilegesTabs(this.tabIDInCompleted);
    this.securityCodeTabData = this._sharedService.checkUserPrivilegesTabs(this.securityCodeTabID);
    // this.initializationMethod();
    this.isAddTimesheetButtonRights = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'add_timesheet', 1);
    this.monthYearList();
    this.getDashboard(null);
    this.getHRDetail();
    this.getTimesheetUnits();
    this.getUserList();
    this.getUserUpcomingHoliday();
    this.getDailyMotivation();
  }

  getTodaysMenu() {
    this._commonCrudService.getData(AdminAPI.BOOK_FOOD_DASHBOARD, this.userData.id).subscribe(Response => {
      this.todaysMenu = Response.payload.data;
    });
  }

  getDailyMotivation() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      'table': 'motivational',
      'column': 'id,motivation'
    }, {}).subscribe(response => {
      const day = new Date().getDate();
      const item = response.filter(x => x.id === Number(day));
      this.motivation = (item.length) ? item[0]["motivation"] : "";
    });
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      const data = response;
      const fifteenDays = moment().subtract(15, 'days').format('YYYY-MM-DD');
      this.userBirthDayList = data ? data.filter(item => moment(item.user_birthdate).format('MM-DD') === moment(new Date()).format('MM-DD')) : [];
      this.userNewHireList = data ? data.filter(item => moment(item.created_on).format('YYYY-MM-DD') >= fifteenDays) : [];
      // console.log(this.userNewHireList);
    });
  }

  monthYearList() {
    const date = new Date();
    const itemDate = date.getDate();
    for (let i = 0; i < 2; i++) {
      if (itemDate > 25) {
        const key = moment(date, 'YYYY-MM').subtract(moment.duration(i - 1, 'month')).format('YYYY-MM');
        const label = moment(date, 'YYYY-MM').subtract(moment.duration(i - 1, 'month')).format('MMM-YYYY');
        this.yearMonth.push({'key': key, 'label': label});
      } else {
        const key = moment(date, 'YYYY-MM').subtract(moment.duration(i, 'month')).format('YYYY-MM');
        const label = moment(date, 'YYYY-MM').subtract(moment.duration(i, 'month')).format('MMM-YYYY');
        this.yearMonth.push({'key': key, 'label': label});
      }
    }

    if (this.yearMonth) {
      this.selectedYearMonth = this.yearMonth[0]['key'];
    }
  }

  onApplyLeave() {

  }

  getHRDetail() {
    this._commonCrudService.listData(AdminAPI.GETDETAIL, {}).subscribe(Response => {
      this.hrDetail = Response.payload.data;
      const startTime = moment(this.hrDetail.shift_from_time, 'HH:mm:ss');
      const endTime = moment(this.hrDetail.shift_to_time, 'HH:mm:ss');
      const diffTime = endTime.diff(startTime, 'minute');
      const breakTime = moment.duration(this.hrDetail.allow_break).asMinutes();
      this.maxWorkingHours = Number(diffTime) - Number(breakTime);
      this.getCurrentWorkingHours(this.maxWorkingHours);
    });
  }

  getCurrentWorkingHours(workingHours: number) {
    const startTime = moment(this.hrDetail.punch_in, 'HH:mm:ss');
    const endTime = this.hrDetail.punch_out ? moment(this.hrDetail.punch_out, 'HH:mm:ss') : moment();
    const diffTime = endTime.diff(startTime, 'minute');
    this.currentWorkingHoursTime = moment.utc(moment(endTime, 'DD/MM/YYYY HH:mm:ss').diff(moment(startTime, 'DD/MM/YYYY HH:mm:ss'))).format('HH:mm');
    if (diffTime > workingHours) {
      this.currentWorkingHours = 100;
    } else {
      this.currentWorkingHours = Number(diffTime * 100) / Number(workingHours);
    }
  }

  

  /**
   * Initialization Methods
   */
  getDashboard(year?: string) {
    year = (year === '' || year === null) ? this.yearMonth[0]['key'] : year;
    this._commonCrudService.listData(AdminAPI.DASHBOARD, {'yearMonth': year},
      {})
      .subscribe((response) => {
        this.masterMenuList = [];
        this.dashboardDetail = response.payload.data;
        if (this.dashboardDetail && this.dashboardDetail.adminView != null) {
          this.masterMenuList.push({'type': 1, 'name': 'Admin'});
        }
        if (this.dashboardDetail && this.dashboardDetail.myView != null) {
          this.masterMenuList.push({'type': 2, 'name': 'My View'});
        }
        if (this.dashboardDetail && this.dashboardDetail.teamView != null) {
          this.masterMenuList.push({'type': 3, 'name': 'My Team View'});
        }
        if (this.masterMenuList.length > 0) {
          this.onChangeTypeOfView(this.masterMenuList[0]['type']);
        }
        if (year === this.yearMonth[0]['key']) {
          this._sharedService.setDashboardData(this.dashboardDetail);
        }
      });
  }

  attendanceSummary(status: string, yearMonth: string, viewType: string, type: string) {
    console.log(status, yearMonth, viewType, type);
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
              // 'remark': 5,
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

  onChangeGetValue(value: string) {
    this.selectedYearMonth = value;
    this.getDashboard(value);
  }

  onChangeTypeOfView(value: number) {
    this.typeOfView = value;
    // console.log(this.typeOfView);
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


  onHREFURL(URL: string) {
    window.open(URL, '_blank');
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



  onOpenTodaysIncompletedWorksheet() {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.WORKSHEET_TODAYS_WORKSHEET_VIEW_INCOMPLETED_WORKSHEET, '_blank');
    });
  }

 


  onPunchIn() {
   
      this.getHRDetail();
    
  }

  onPunchOut() {
    // console.log(this.dashboardDetail);
    const myPendingRequest = (this.dashboardDetail && this.dashboardDetail.myView) ? this.dashboardDetail.myView.pendingRequest : 0;
    const myTeamPendingRequest = (this.dashboardDetail && this.dashboardDetail.teamView) ? this.dashboardDetail.teamView.pendingForApproval : 0;

    let message = '';
    let messageToDenyPunchOut = '';
    let messageToDenyPunchOutTeam = '';

    if (myPendingRequest > 0) {
      messageToDenyPunchOut += 'Your current pending request is greater than 0. So you can not punch out. Please clear the pending request.';
    }
    if (myTeamPendingRequest > 0) {
      messageToDenyPunchOutTeam += 'Your current team pending request is greater than 0. So you can not punch out. Please clear the pending request.';
    }

    if (this.userTimesheetUnits < 80) {
      message += 'Your current timesheet units is less than 80. ';
    }
    message += 'Are you sure you have completed your daily hours?';
    if (myPendingRequest <= 0 && myTeamPendingRequest <= 0) {
      const dialogConfigData: any = {
        data: {
          content: message
        },
        panelClass: 'add-bookkeeping-dialog-panel-container'
      };
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
      dialogRef.afterClosed().subscribe((value) => {
        if (value) {
          const param = {'user_id': this.userData.id, 'type': 0};
          this._commonCrudService.addData(AdminAPI.MANUAL_IN_OUT, param).subscribe(Response => {
            this.getHRDetail();
          });
        }
      });
    } else {
      if (myPendingRequest > 0) {
        const dialogConfigData: any = {
          data: {
            content: messageToDenyPunchOut,
            ticketButton: true
          },
          panelClass: 'add-bookkeeping-dialog-panel-container'
        };
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
        dialogRef.afterClosed().subscribe((value) => {
        });
      }

      if (myTeamPendingRequest > 0) {
        const dialogConfigData: any = {
          data: {
            content: messageToDenyPunchOutTeam,
            ticketButton: true
          },
          panelClass: 'add-bookkeeping-dialog-panel-container'
        };
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
        dialogRef.afterClosed().subscribe((value) => {
        });
      }
    }
  }

  getTimesheetUnits() {
    this._sharedService.getTimeSheetUnits().subscribe(response => {
      this.userTimesheetUnits = response;
    });
  }

  /**
   * Get Holiday for this month
   */
  getUserUpcomingHoliday() {
    // console.log(this.userData);
    this._commonCrudService.listData(AdminAPI.HR_USER_UPCOMING_HOLIDAY + '/' + this.userData.shift_id, {}).subscribe(response => {
      const data = response.payload.data;
      const dateMonth = new Date();
      dateMonth.setMonth(new Date().getMonth());
      const dateMonthNext = new Date();
      dateMonthNext.setMonth(new Date().getMonth() + 1);
      this.upcomingHolidayList = data.length ? data.filter(item => (moment(item['date'], 'YYYY-MM-DD').format('MM') === moment(dateMonthNext).format('MM')) || (moment(item['date'], 'YYYY-MM-DD').format('MM') === moment(dateMonth).format('MM'))) : [];
    });
  }

  /**
   * Holiday request count
   */
  onHolidayRequestcount() {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.APPLY_HOLIDAY_WORKING_LISTING, '_blank');
    });
  }

  /**
   * Leave request count
   */
  onLeaveRequestcount() {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.APPLY_LEAVE_LISTING, '_blank');
    });
  }

  onAwardeeOfTheMonths () {
    this._router.navigate([]).then(result => {
      window.open('/' + AdminRoutes.AWARDEE_OF_THE_MONTH, '_blank');
    });
  }


  /**
   * user Listing API.
   * @param pageNumber
   * @param key
   * @param val
   */
  getAwardList() {
    this._commonCrudService.listData(AdminAPI.AWARD_NOMINEE_LIST_DASHBOARD, {}, {}).subscribe((response) => {
      this.nomineeList = response.payload.data;
    });
  }

  /**
   * On Feedback Menu Review Dialog
   * @param foodMaster
   */
  onFeedbackMenuReviewDialog(foodMasterData: FoodMaster, type: number) {
    
  }

  
}
