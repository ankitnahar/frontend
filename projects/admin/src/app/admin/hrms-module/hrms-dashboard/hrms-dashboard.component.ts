import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {HrmsDashboard} from './hrms-dashboard.model';
import {AdminAPI} from '../../../../utility/constants/api';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as moment from 'moment';
import {BASE} from '../../../../utility/constants/base-constants';
import {convertURLParamToEncode} from '../../../../utility/common-functions';

export enum DialogView {
  ANNOUNCEMENT_DIALOG_VIEW, APPROVE_REJECT_VIEW
}

@Component({
  selector: 'app-hrms-dashboard',
  templateUrl: './hrms-dashboard.component.html',
  styleUrls: ['./hrms-dashboard.component.scss']
})

export class HrmsDashboardComponent implements OnInit {
  dashboardDetail: HrmsDashboard;
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

  constructor(private _router: Router, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
  }

  get leaveSummary() {
    return '/' + AdminRoutes.LEAVE_SUMMARY;
  }

  ngOnInit() {
    // this.initializationMethod();
    this.monthYearList();
    this.getDashboard(null);
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
            jsonData = convertURLParamToEncode({'final_remark': status, 'remark': 5, 'month_year': yearMonth, 'view': viewType});
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
}
