import {Component, OnInit} from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {Privilege} from '../../../../utility/shared-model/admin-user.model';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {

  isActiveTab = 0;
  isActiveTabText = 'Contact';
  tabID = ADMINTABACCESS.CLIENT_CONTACT_INFO;
  tabData: Privilege | any[];
  tabAddID = ADMINTABACCESS.CLIENT_ADDRESS;
  tabNewsletterID = ADMINTABACCESS.CLIENT_NEWSLETTER;
  tabAddData: Privilege | any[];
  tabNewsData: Privilege | any[];

  constructor(private _sharedService: SharedService, private _router: Router) {
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.tabAddData = this._sharedService.checkUserPrivilegesTabs(this.tabAddID);
    this.tabNewsData = this._sharedService.checkUserPrivilegesTabs(this.tabNewsletterID);
  }

  onSelectTab(tabChangeEvent: MatTabChangeEvent) {
    this.isActiveTab = tabChangeEvent['index'];
    this.isActiveTabText = tabChangeEvent.tab.textLabel;
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
