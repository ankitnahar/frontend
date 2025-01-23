import {Component, OnInit} from '@angular/core';
import {ADMINTABACCESS} from "../../../../../utility/constants/header-constant";
import {Privilege} from "../../../../../utility/shared-model/admin-user.model";
import {SharedService} from "../../../../../utility/shared-service/shared.service";
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import {Router} from '@angular/router';
import {AdminAPI} from "../../../../../utility/constants/api";
import {InformationStatus} from "./information-tab/information-required.model";
import {AdminRoutes} from '../../../../../utility/constants/admin-route';

@Component({
  selector: 'app-information-required-tab',
  templateUrl: './information-required-tab.component.html',
  styleUrls: ['./information-required-tab.component.scss']
})
export class InformationRequiredTabComponent implements OnInit {
  tabList: InformationStatus[] = [];
  // Other Variables
  selectedInformationStatus: number;
  isActiveTab = 0;
  selectedIndexData = 0;
  selectedTabID: number;
  tabID = ADMINTABACCESS.INFORMATION_REQUIRED;
  tabData: Privilege | any[];

  constructor(public _sharedService: SharedService, private _commonCrudService: CommonCrudService,
              public _router: Router) {
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.getInformationStatusList();
  }

  /**
   * Get Information Stage List
   */
  getInformationStatusList() {
    this._commonCrudService.listData(AdminAPI.INFORMATION_REQUIRED_STAGE_LIST, {}, {}).subscribe(Response => {
      this.handleInformationStatusResponse(Response);
    });
  }

  /**
   * Handle Information Stage List
   * @param Response
   */
  handleInformationStatusResponse(Response) {
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
      this.selectedInformationStatus = this.tabList[newTabIndex].id;
      this.selectedTabID = this.tabList[newTabIndex].tab_id;
    } else {
      this.selectedInformationStatus = this.tabList[this.isActiveTab].id;
      this.selectedTabID = this.tabList[this.isActiveTab].tab_id;
    }
  }

  generateInformation() {
    this._commonCrudService.addData(AdminAPI.INFORMATIONADDCRON, {}).subscribe((response) => {
    });
  }
}
