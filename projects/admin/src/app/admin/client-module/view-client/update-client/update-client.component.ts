import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {Clients} from '../view-client.model';
import {MatDialog, MatDialogConfig, MatTabChangeEvent} from '@angular/material';
import {GLOBALDATAKEYS, REDIRECTPARAMKEYS} from '../../../../../utility/constants/base-constants';
import {CommonHistoryDialogComponent} from '../../../../../utility/components/common-history-dialog/common-history-dialog.component';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';

export enum Views {
  HISTORY_MODAL
}

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})

export class UpdateClientComponent implements OnInit {

  // Constant Variables
  enumView = Views;
  activeView: Views;
  isOpenHistoryDialog = false;

  // Data related variables
  clientData: Clients;
  clientTabInfo: any;

  // State related variables
  showHistory = true;
  isActiveTab = 0;
  isActiveTabText = 'Main';
  selectedIndexData = 0;
  tabIDCL = ADMINTABACCESS.CLIENT_CLIENTALLOCATION;
  tabIDBANK = ADMINTABACCESS.CLIENT_BANKINFORMATION;
  tabIDCLCHECK = ADMINTABACCESS.CLIENT_CLIENTCHECKLIST;
  tabIDSPNOTE = ADMINTABACCESS.CLIENT_SPECIALNOTES;
  tabID = ADMINTABACCESS.CLIENT_VIEWCLIENT;
  tabData: Privilege | any[];
  tabDataClientAllocation: Privilege | any[];
  tabDataBank: Privilege | any[];
  tabDataChecklist: Privilege | any[];
  tabDataNotes: Privilege | any[];

  // Don't remove this code.
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.isActiveTab = tabChangeEvent.index;
    this.isActiveTabText = tabChangeEvent.tab.textLabel;
    // console.log(tabChangeEvent);
    if ((tabChangeEvent['index'] === 4) || (tabChangeEvent['index'] === 2)) {
      this.showHistory = false;
    } else {
      this.showHistory = true;
    }
  };

  constructor(private _router: Router, public dialog: MatDialog,
              private _sharedService: SharedService, private _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    // To Check Access Rights
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.tabDataClientAllocation = this._sharedService.checkUserPrivilegesTabs(this.tabIDCL);
    this.tabDataBank = this._sharedService.checkUserPrivilegesTabs(this.tabIDBANK);
    this.tabDataChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDCLCHECK);
    this.tabDataNotes = this._sharedService.checkUserPrivilegesTabs(this.tabIDSPNOTE);

    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    /**
     * Code For Change Tab if click from system setup stages
     */
    const ActiveTab = this._sharedService.getRedirectParameter(REDIRECTPARAMKEYS.CLIENT_TAB_ACTIVE);
    if (ActiveTab) {
      this.selectedIndexData = ActiveTab['activeTab'];
      this.isActiveTab = ActiveTab['activeTab'];
      if (this.isActiveTab === 1) {
        this.isActiveTabText = 'Main';
      }
      if (this.isActiveTab === 3) {
        this.isActiveTabText = 'Client Allocation';
      }
    }
    this._sharedService.setRedirectParameter(REDIRECTPARAMKEYS.CLIENT_TAB_ACTIVE, null);
    this.getClientInfo();
  }

  getClientInfo() {
    this._commonCrudService.getData(AdminAPI.CLIENT_BASIC, this.clientData.id, {'tab': '1'}).subscribe(Response => {
      this.clientTabInfo = (Response.payload.tabs) ? Response.payload.tabs : [];
      // console.log(this.clientTabInfo);
    });
  }

  /**
   * View clinet page redirect
   */
  onClient() {
    this._router.navigate(['/' + AdminRoutes.VIEW_CLIENT]);
  }

  onSelectTab(tabChangeEvent: MatTabChangeEvent) {
    this.isActiveTab = tabChangeEvent['index'];
    this.isActiveTabText = tabChangeEvent.tab.textLabel;
    // console.log(tabChangeEvent);
    if ((tabChangeEvent['index'] === 4) || (tabChangeEvent['index'] === 2)) {
      this.showHistory = false;
    } else {
      this.showHistory = true;
    }
  }

  onSelectedIndexChange(newTabIndex) {
    // console.log(newTabIndex);
    if (this.isActiveTab !== newTabIndex) {
      this.isActiveTab = newTabIndex;
      this.isActiveTabText = newTabIndex.tab.textLabel;
      // this.selectedIndexData = this.tabList[newTabIndex].id;
    } else {
      // this.selectedIndexData == newTabIndex;
      // this.selectedInvoiceStatus = this.tabList[this.isActiveTab].id;
    }
  }

  /**
   * Open modal method
   * @param dialogName
   */
  onOpenModal(dialogName) {
    switch (dialogName) {
      case 'history':
        this.activeView = this.enumView.HISTORY_MODAL;
        break;
    }
  }

  /**
   * Show History Functions
   */
  onShowHistory() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CommonHistoryDialogComponent, dialogConfig);
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
