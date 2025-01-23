import {Component, Input, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {BillingBasic} from '../../../../../utility/shared-model/billing.model';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import {MatDialog, MatDialogConfig, MatTabChangeEvent} from '@angular/material';
import {CommonHistoryDialogComponent} from '../../../../../utility/components/common-history-dialog/common-history-dialog.component';

@Component({
  selector: 'app-billing-info-services',
  templateUrl: './billing-info-services.component.html',
  styleUrls: ['./billing-info-services.component.scss']
})
export class BillingInfoServicesComponent implements OnInit {

  @Input() isEdit: any;
// Data Variables
  billingBasic: BillingBasic;
  servicesAgreed = [];
  selectedIndexData = 0;
  isActiveTab = 0;
  isActiveTabText = 'Basic Information';

  constructor(public _router: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.billingBasic = this._sharedService.getBillingData();
    this.isEdit = (this.isEdit === 0) ? 0 : 1;
    this.getBasicServices();
  }

  /**
   * Get Basic Services
   */
  getBasicServices() {
    this.servicesAgreed = [];
    this._commonCrudService.getData(AdminAPI.BILLING_BASIC_VIEW, this.billingBasic.entity_id).subscribe((response) => {
      const data = response.payload.data;
      // console.log(data);
      if (data) {
        let itemData = [];
        itemData = Object.values(data['service']);
        if (itemData) {
          itemData.forEach(item => {
            if (item['is_active'] === 1) {
              this.servicesAgreed.push(item);
            }
          });
        }
      }
    });
    this._commonCrudService.getData(AdminAPI.BILLING_BASIC, 0, {}, {
      'compare': {
        'equal': {
          'entity_id': this.billingBasic.entity_id
        }
      }
    }).subscribe((response) => {
      if (response) {
        const data = response.payload.data;
        if (data[0]) {
          this.billingBasic = data[0];
          // console.log(this.billingBasic);
        }
      }
    });
  }

  /**
   * On Tab Change Event
   * @param tabChangeEvent
   */
  onSelectTab(tabChangeEvent: MatTabChangeEvent) {
    this.isActiveTab = tabChangeEvent['index'];
    this.isActiveTabText = tabChangeEvent.tab.textLabel;
  }

  /**
   * On Billing Information
   */
  onBillingInformation() {
    this._router.navigate(['/' + AdminRoutes.BILLING_INFORMATION]);
  }

  /**
   * On Show History
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
