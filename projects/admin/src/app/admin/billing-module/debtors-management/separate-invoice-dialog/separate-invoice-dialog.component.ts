import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, PageEvent} from '@angular/material';
import {FormBuilder} from '@angular/forms';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {Clients} from '../../../client-module/view-client/view-client.model';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import {BASE, GLOBALDATAKEYS} from '../../../../../utility/constants/base-constants';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';

@Component({
  selector: 'app-separate-invoice-dialog',
  templateUrl: './separate-invoice-dialog.component.html',
  styleUrls: ['./separate-invoice-dialog.component.scss']
})
export class SeparateInvoiceDialogComponent implements OnInit {

  // Data Variables
  seperateInvoicedialog: Clients[] = [];
  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;
  entity_id = null;
  entityName = null;
  // Mat Paginator Output
  pageEvent: PageEvent;


  constructor(
    public dialogRef: MatDialogRef<SeparateInvoiceDialogComponent>,
    private _sharedObjService: SharedObjService,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, public _router: Router, private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.initializationMethod();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.entity_id = this.data.debtorsData ? this.data.debtorsData.related_entity_id : 0;
    this.entityName = this.data.debtorsData ? this.data.debtorsData.billing_name : null;
    if (this.entity_id) {
      this.getSeperateInvoiceList(1);
    }
  }

  /**
   * Get Debtors Management List
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getSeperateInvoiceList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.CLIENT_LIST, {}, {'in': {'id': this.entity_id}}).subscribe(Response => {
      this.handleSeperateInvoiceResponse(Response);
    });
    // this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
    //   // this.clientList = response;
    //   this.seperateInvoicedialog = response.payload.data;
    //   this.page = response.pager.pageNumber;
    //   this.pageIndex = this.page - 1;
    //   this.totalRecords = +response.pager.totalRecords;
    //   this.sortBy = response.pager.sortBy;
    //   this.sortOrder = response.pager.sortOrder;
    // });
  }

  /**
   * Handle Contact List Response
   * @param response
   */
  handleSeperateInvoiceResponse(response: any) {
    this.seperateInvoicedialog = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getSeperateInvoiceList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * On Edit Click Open Client Update Page
   * @param clientData
   */
  onEditThisClient(clientData: Clients) {
    if (clientData) {
      this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT, clientData);
      window.open(AdminRoutes.UPDATE_CLIENT, '_blank');
    }
  }
}
