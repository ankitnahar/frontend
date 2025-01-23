import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {convertURLParamToDecode} from '../../../../utility/common-functions';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {Privilege} from '../../../../utility/shared-model/admin-user.model';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {GLOBALDATAKEYS} from "../../../../utility/constants/base-constants";

@Component({
  selector: 'app-pending-tickets',
  templateUrl: './pending-tickets.component.html',
  styleUrls: ['./pending-tickets.component.scss']
})
export class PendingTicketsComponent implements OnInit {
  tabList = [];
  isActiveTab = 0;
  selectedIndexData = 0;
  isActiveTabText = '';
  checkFirstTimeRedirectionParam = 0;
  tabID = ADMINTABACCESS.TICKET_INCOMPLETE;
  tabData: Privilege | any[];

  constructor(public _router: Router, private route: ActivatedRoute, private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    if (this.checkFirstTimeRedirectionParam === 0) {
      this.route.queryParams
        .subscribe(params => {
          const dataItem = convertURLParamToDecode(params);
          if (dataItem) {
            this.isActiveTab = (dataItem['tab_id']) ? Number(dataItem['tab_id']) : 0;
          }
        });
    }
  }

  /**
   * Selected Index Tab Change
   * @param newTabIndex
   */
  onSelectedIndexChange(newTabIndex) {
    this.isActiveTab = newTabIndex;
    this.checkFirstTimeRedirectionParam = 1;
  }

  /**
   * Router
   */

  onAddTicket() {
    this._sharedService.setClientData(GLOBALDATAKEYS.PENDING_TICKET, null);
    window.open('/' + AdminRoutes.ADD_TICKETS, '_blank');
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
