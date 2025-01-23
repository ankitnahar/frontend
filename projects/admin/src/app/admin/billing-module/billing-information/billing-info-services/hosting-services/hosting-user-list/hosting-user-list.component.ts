import {Component, Input, OnInit} from '@angular/core';
import {AddHostingDialogComponent} from './add-hosting-dialog/add-hosting-dialog.component';
import {MatDialog} from '@angular/material';
import {HostingUserListHistoryComponent} from './hosting-user-list-history/hosting-user-list-history.component';
import {HostingUser} from '../hosting.model';
import {BillingBasic} from '../../../../../../../utility/shared-model/billing.model';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {hostingUserType} from '../../../../../../../utility/constants/base-constants';

@Component({
  selector: 'app-hosting-user-list',
  templateUrl: './hosting-user-list.component.html'
})
export class HostingUserListComponent implements OnInit {

  @Input() billingInformation: BillingBasic;
  @Input() serviceInfo: any;
  @Input() isEdit: any;

  hostingUserList: HostingUser[] = [];
  hostingUserTypeList = hostingUserType;

  // Data Variables

  constructor(public dialog: MatDialog, private _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getHostingUserList();
  }

  /**
   * Get Hosting User List
   */
  getHostingUserList() {
    this._commonCrudService.listData(AdminAPI.BILLING_HOSTING_USER_LIST + '/' + this.billingInformation.entity_id, {
      'records': 'all',
      'sortBy': 'id',
      'sortOrder': 'desc'
    }, {}).subscribe((response) => {
      this.hostingUserList = response.payload.data;
    });
  }

  /**
   * Get Hosting Plan Type Name
   * @param type
   */
  getHostingPlanType(type: string): string {
    const val = this.hostingUserTypeList.filter(elem => elem.key === type);
    return (val.length) ? val[0].label : '';
  }

  /**
   * On Add Edit Hosting User Type
   * @param hostingUserInfo
   */
  onAddHostingDialog(hostingUserInfo?: HostingUser) {
    let dialogRef = this.dialog.open(AddHostingDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        hostingUserInfo: (hostingUserInfo) ? hostingUserInfo : null,
        billingInfo: this.billingInformation
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // console.log('c');
        this.getHostingUserList();
      }
    });
  }

  onOpenHistoryDialog() {
    const dialogRef = this.dialog.open(HostingUserListHistoryComponent, {
      width: '50vw',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
