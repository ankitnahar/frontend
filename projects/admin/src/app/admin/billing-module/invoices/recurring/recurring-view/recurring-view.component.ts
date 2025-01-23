import {Component, OnDestroy, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {Recurring} from '../recurring.model';
import {BASE, GLOBALDATAKEYS} from '../../../../../../utility/constants/base-constants';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';

@Component({
  selector: 'app-recurring-view',
  templateUrl: './recurring-view.component.html',
  styleUrls: ['./recurring-view.component.scss'],
  providers: [CommonCrudService]
})
export class RecurringViewComponent implements OnInit, OnDestroy {
// Data Variables
  previewreviewList: any[] = [];
  clientList = '';
  recurringData: Recurring;
  // Date variables

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // MatPaginator Output
  pageEvent: PageEvent;


  constructor(public _router: Router, private _sharedService: SharedService, private _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.recurringData = this._sharedService.getClientData(GLOBALDATAKEYS.RECURRING);
    if (this.recurringData) {
      const recurring_id = this.recurringData.id;
      this.getRecurringViewDetails(recurring_id);
    }
  }

  /**
   * Initialization Methods
   */
  getRecurringViewDetails(recurring_id) {
    if (recurring_id > 0) {
      this._commonCrudService.getData(AdminAPI.INVOICE_RECURRING_VIEW, recurring_id, {}).subscribe((response) => {
        if (response) {
          this.previewreviewList = response.payload.data;
          if (response.payload.entityName) {
            this.clientList = response.payload.entityName.split(',');
          }
        }
      });
    }
  }

  /**
   * On invoice redirection
   */
  onInvoice() {
    this._router.navigate(['/' + AdminRoutes.INVOICES_DASHBOARD]);
  }

  /**
   * On manage recurring
   */
  onManageRecurring() {
    this._router.navigate(['/' + AdminRoutes.MANAGE_RECURRING]);
  }

  ngOnDestroy() {
    this._sharedService.setClientData(GLOBALDATAKEYS.RECURRING, null);
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
