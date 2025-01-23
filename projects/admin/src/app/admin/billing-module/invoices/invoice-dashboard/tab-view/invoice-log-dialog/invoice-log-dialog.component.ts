import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {InvoiceLog, InvoiceStatusWise} from '../../invoice.model';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';

@Component({
  selector: 'app-invoice-log-dialog',
  templateUrl: './invoice-log-dialog.component.html',
  providers: [CommonCrudService]
})
export class InvoiceLogDialogComponent extends BaseComponent implements OnInit {

  // Angular Variables
  invoiceLog: InvoiceLog[] = [];
  invoiceData: InvoiceStatusWise;

  constructor(public dialogRef: MatDialogRef<InvoiceLogDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.getInvoiceLogList();
  }

  /**
   * Get Invoice Log List API
   */
  getInvoiceLogList() {
    const invoice_id = this.data.invoiceData ? this.data.invoiceData.id : 0;
    this.invoiceData = this.data.invoiceData ? this.data.invoiceData : [];
    this._commonCrudService.listData(AdminAPI.INVOICE_LOG_LIST + '/' + invoice_id, {}, {}).subscribe(Response => {
      this.handleInvoiceLogResponse(Response);
    });
  }

  /**
   * Handle Invoice Log Response
   * @param response
   */
  handleInvoiceLogResponse(response) {
    this.invoiceLog = response.payload.data;
  }

  /**
   * activity dialog redirection
   */
  onClose(): void {
    this.dialogRef.close();
  }

// Esc Event
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onClose();
    }
  }
}
