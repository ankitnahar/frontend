import {Component, OnInit} from '@angular/core';
import {AdminAPI} from "../../../../utility/constants/api";
import {CommonCrudService} from "../../../../utility/shared-service/common-crud.service";
import {AttendanceSummary} from "../../hrms-module/hrms-dashboard/attendance-summary/attendance-summary.model";
import {AdminUser} from "../../../../utility/shared-model/admin-user.model";
import {SharedUserService} from "../../../../utility/shared-service/shared-user.service";
import {LeaveBalance} from "../../hrms-module/hrms-dashboard/leave-balance-list/leave-balance.model";
import {AdminRoutes} from "../../../../utility/constants/admin-route";
import {Router} from "@angular/router";

@Component({
  selector: 'app-leave-trackers',
  templateUrl: './leave-trackers.component.html',
  styleUrls: ['./leave-trackers.component.scss']
})
export class LeaveTrackersComponent implements OnInit {

  hrDetail: AttendanceSummary;
  userData: AdminUser;
  leaveInfo: LeaveBalance;

  constructor(public _router: Router, private _commonCrudService: CommonCrudService, private _sharedUserService: SharedUserService) {
  }

  ngOnInit() {
    this.getHRDetail();
  }

  getHRDetail() {
    this.userData = this._sharedUserService.getUser();
    this._commonCrudService.listData(AdminAPI.GETDETAIL, {}).subscribe(Response => {
      this.hrDetail = Response.payload.data;
      this.leaveInfo = this.hrDetail.leave_balance.length ? this.hrDetail.leave_balance[0] : null;
    });
  }

  /**
   * On Change Type of View
   * @param value
   */
  onChangeTypeOfView(value: number) {
    const leaveData = this.hrDetail.leave_balance.filter(item => item.id === value);
    if (leaveData.length) {
      this.leaveInfo = leaveData[0];
    }
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
