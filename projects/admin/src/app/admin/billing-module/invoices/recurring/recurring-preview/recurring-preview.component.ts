import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {PageEvent} from '@angular/material';
import {GLOBALDATAKEYS} from '../../../../../../utility/constants/base-constants';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';

@Component({
  selector: 'app-recurring-preview',
  templateUrl: './recurring-preview.component.html',
  styleUrls: ['./recurring-preview.component.scss'],
  providers: [CommonCrudService]
})
export class RecurringPreviewComponent implements OnInit {

  // Data Variables
  previewreviewList: any[] = [];
  clientList = '';
  recurringData = [];
  selectedData = [];
  // Date variables

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(public _router: Router, private _sharedService: SharedService, private _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.recurringData = this._sharedService.getRecurringData();
    this.previewreviewList = this.recurringData['data'];
    this.clientList = this.recurringData['entityName'].split(',');
    this.selectedData = this.recurringData['selectedData'];
    if (!this.recurringData) {
      this.onAddRecurring();
    }
  }

  /**
   * On invoice redirection
   */
  onInvoice() {
    this._router.navigate(['/' + AdminRoutes.INVOICES_DASHBOARD]);
  }

  /**
   * On invoice redirection
   */
  onAddRecurring() {
    if (this.selectedData) {
      this._sharedService.setClientData(GLOBALDATAKEYS.PREVIOUS_RECURRING, this.selectedData);
    }
    this._router.navigate(['/' + AdminRoutes.ADD_RECURRING]);
  }

  /**
   *
   */
  onManageRecurring() {
    this._router.navigate(['/' + AdminRoutes.MANAGE_RECURRING]);
  }

  /**
   * On invoice redirection
   */
  onSubmitForm() {
    this.selectedData['confirm'] = 1;
    if (this.selectedData['id'] > 0) {
      this._commonCrudService.updateData(AdminAPI.INVOICE_RECURRING_SAVE, this.selectedData['id'], this.selectedData).subscribe((response) => {
        this.onManageRecurring();
        this._sharedService.setRecurringData(null);
      });
    } else {
      this._commonCrudService.addData(AdminAPI.INVOICE_RECURRING_SAVE + '/' + 0, this.selectedData).subscribe((response) => {
        this.onManageRecurring();
        this._sharedService.setRecurringData(null);
      });
    }
  }
}
