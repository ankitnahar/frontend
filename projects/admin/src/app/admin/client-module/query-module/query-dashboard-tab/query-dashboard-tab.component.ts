import {Component, OnInit} from '@angular/core';
import {AdminRoutes} from "../../../../../utility/constants/admin-route";
import {Router} from "@angular/router";
import {ADMINTABACCESS} from "../../../../../utility/constants/header-constant";
import {Privilege} from "../../../../../utility/shared-model/admin-user.model";
import {SharedService} from "../../../../../utility/shared-service/shared.service";
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import {AdminAPI} from "../../../../../utility/constants/api";
import {QueryStatus} from "./query.model";

@Component({
  selector: 'app-query-dashboard-tab',
  templateUrl: './query-dashboard-tab.component.html',
  styleUrls: ['./query-dashboard-tab.component.scss']
})
export class QueryDashboardTabComponent implements OnInit {
  tabList: QueryStatus[] = [];
  // Other Variables
  selectedQueryStatus: number;
  isActiveTab = 0;
  selectedIndexData = 0;
  selectedTabID: number;
  tabID = ADMINTABACCESS.QUERY_MODULE;
  tabData: Privilege | any[];

  constructor(public _sharedService: SharedService, private _commonCrudService: CommonCrudService,
              public _router: Router) {
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.getQueryStatusList();
  }

  /**
   * Get Query Stage List
   */
  getQueryStatusList() {
    this._commonCrudService.listData(AdminAPI.QUERY_STAGE_LIST, {}, {}).subscribe(Response => {
      this.handleQueryStatusResponse(Response);
    });
  }

  /**
   * Handle Query Stage List
   * @param Response
   */
  handleQueryStatusResponse(Response) {
    const previligesData = this._sharedService.getPrivilege();
    const statusData = Response.payload.data;
    if (statusData) {
      statusData.forEach(item => {
        const itemData = previligesData.filter(x => x.id === item['tab_id']);
        if (itemData.length) {
          this.tabList.push(item);
        }
      });
      // const allStatus = statusData.filter(x => x.id === 7);
      // if (allStatus) {
      //   this.tabList.push(allStatus[0]);
      // }
    }
    // console.log(this.tabList);

    this.tabList.sort(function (a, b) {
      return a.sort_order - b.sort_order;
    });
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Selected Index Tab Change
   * @param newTabIndex
   */
  onSelectedIndexChange(newTabIndex) {
    if (this.isActiveTab !== newTabIndex) {
      this.isActiveTab = newTabIndex;
      this.selectedQueryStatus = this.tabList[newTabIndex].id;
      this.selectedTabID = this.tabList[newTabIndex].tab_id;
    } else {
      this.selectedQueryStatus = this.tabList[this.isActiveTab].id;
      this.selectedTabID = this.tabList[this.isActiveTab].tab_id;
    }
  }
}
