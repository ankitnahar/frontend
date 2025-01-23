import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig, MatTabChangeEvent} from '@angular/material';
import {GLOBALDATAKEYS} from '../../../../../utility/constants/base-constants';
import {AdminUser, Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {CommonHistoryDialogComponent} from '../../../../../utility/components/common-history-dialog/common-history-dialog.component';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  user: AdminUser = null;
  tabIDUSER = ADMINTABACCESS.ADMIN_MANAGEUSER;
  tabIDHIERARCHY = ADMINTABACCESS.ADMIN_USERHIERARCHY;
  tabIDRIGHTS = ADMINTABACCESS.ADMIN_USERRIGHT;
  tabIDPASSWORD = ADMINTABACCESS.ADMIN_CHANGEPASSWORD;
  tabDataUser: Privilege | any[];
  tabDataHierarchy: Privilege | any[];
  tabDataRights: Privilege | any[];
  tabDataPassword: Privilege | any[];

  // Other Variables
  isOpenHistoryDialog = false;
  isActiveTab = 0;
  isActiveTabText = 'Personal';
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.isActiveTab = tabChangeEvent.index;
    this.isActiveTabText = tabChangeEvent.tab.textLabel;
  };


  constructor(private _sharedService: SharedService, public dialog: MatDialog, public _router: Router) {
  }

  ngOnInit() {
    // To Check Access Rights
    this.tabDataUser = this._sharedService.checkUserPrivilegesTabs(this.tabIDUSER);
    this.tabDataHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDHIERARCHY);
    this.tabDataRights = this._sharedService.checkUserPrivilegesTabs(this.tabIDRIGHTS);
    this.tabDataPassword = this._sharedService.checkUserPrivilegesTabs(this.tabIDPASSWORD);
    this.user = this._sharedService.getClientData(GLOBALDATAKEYS.USERS);
  }

  onShowHistory() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CommonHistoryDialogComponent, dialogConfig);
  }

  onManageUser() {
    this._router.navigate([AdminRoutes.MANAGE_USERS]);
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
