import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConfirmationDialogComponent} from '../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {ActivatedRoute, Router} from '@angular/router';
import {InvoiceStatus} from './invoice.model';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {convertURLParamToDecode} from '../../../../../utility/common-functions';

@Component({
  selector: 'app-invoice-dashboard',
  templateUrl: './invoice-dashboard.component.html',
  styleUrls: ['./invoice-dashboard.component.scss'],
  providers: [CommonCrudService]
})
export class InvoiceDashboardComponent implements OnInit {

  tabList: InvoiceStatus[] = [];
  // Other Variables
  selectedInvoiceStatus: number;
  isActiveTab = 0;
  selectedIndexData = 0;
  selectedTabID: number;
  tabID = ADMINTABACCESS.BILLING_RECURRING;
  tabData: Privilege | any[];
  tabIDNew = ADMINTABACCESS.BILLING_NEWINVOICE;
  tabDataNew: Privilege | any[];
  tabIDOne = ADMINTABACCESS.BILLING_ONEOFFINVOICE;
  tabDataOne: Privilege | any[];
  tabIDAdj = ADMINTABACCESS.BILLING_ADJUCTWIP;
  tabDataAdj: Privilege | any[];

  constructor(public dialog: MatDialog, public _router: Router, public _sharedService: SharedService, private _commonCrudService: CommonCrudService,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.tabDataNew = this._sharedService.checkUserPrivilegesTabs(this.tabIDNew);
    this.tabDataOne = this._sharedService.checkUserPrivilegesTabs(this.tabIDOne);
    this.tabDataAdj = this._sharedService.checkUserPrivilegesTabs(this.tabIDAdj);
    this.getInvoiceStatusList();
  }

  getInvoiceStatusList() {
    this._commonCrudService.listData(AdminAPI.INVOICE_STATUS_LIST, {}, {}).subscribe(Response => {
      this.handleClientStatusResponse(Response);
    });
  }

  handleClientStatusResponse(Response) {
    const previligesData = this._sharedService.getPrivilege();
    // this.tabList = Response.payload.data;
    const statusData = Response.payload.data;
    // console.log(statusData);
    if (statusData) {
      statusData.forEach(item => {
        const itemData = previligesData.filter(x => x.id === item['tab_id']);
        if (itemData.length) {
          this.tabList.push(item);
        }
      });
      const allStatus = statusData.filter(x => x.id === 8);
      if (allStatus) {
        this.tabList.push(allStatus[0]);
      }
    }
    // console.log(this.tabList);

    this.tabList.sort(function (a, b) {
      return a.sort_order - b.sort_order;
    });

    this.route.queryParams
      .subscribe(params => {
        const dataItem = convertURLParamToDecode(params);
        if (dataItem) {
          const checkId = (dataItem['id']) ? Number(dataItem['id']) : null;
          const data = this.tabList.filter(dataList => dataList.id === checkId);
          if (data.length) {
            this.selectedIndexData = data[0]['sort_order'] - 1;
          }
        }
      });
  }

  /**
   * Selected Index Tab Change
   * @param newTabIndex
   */
  onSelectedIndexChange(newTabIndex) {
    if (this.isActiveTab !== newTabIndex) {
      this.isActiveTab = newTabIndex;
      this.selectedInvoiceStatus = this.tabList[newTabIndex].id;
      this.selectedTabID = this.tabList[newTabIndex].tab_id;
    } else {
      this.selectedInvoiceStatus = this.tabList[this.isActiveTab].id;
      this.selectedTabID = this.tabList[this.isActiveTab].tab_id;
    }
  }

  /**
   * Delete open confirmation modal
   */
  onConfirmationDialog() {

    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete ?'
      }
    });
  }

  /**
   *  one-off invoice redirection
   */
  onOneOffInvoice() {
    this._router.navigate(['/' + AdminRoutes.ADD_ONE_OFF_INVOICE]);
  }

  /**
   *  add New invoice redirection
   */
  onNewInvoice() {
    this._router.navigate(['/' + AdminRoutes.ADD_NEW_INVOICE]);
  }

  /**
   *  Adjust WIP invoice redirection
   */
  onAdjustWip() {
    this._router.navigate(['/' + AdminRoutes.ADD_ADJUST_WIP_INVOICE]);
  }

  /**
   *  add Recurring redirection
   */
  onAddRecurring() {
    this._router.navigate(['/' + AdminRoutes.ADD_RECURRING]);
  }

  /**
   *  add Manage Recurring redirection
   */
  onManageRecurring() {
    this._router.navigate(['/' + AdminRoutes.MANAGE_RECURRING]);
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
