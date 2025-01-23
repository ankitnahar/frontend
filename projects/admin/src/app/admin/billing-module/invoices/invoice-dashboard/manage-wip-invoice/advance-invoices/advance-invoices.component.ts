import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BASE} from '../../../../../../../utility/constants/base-constants';
import {InvoiceData} from '../invoice.module';

@Component({
  selector: 'app-advance-invoices',
  templateUrl: './advance-invoices.component.html',
  styleUrls: ['./advance-invoices.component.scss']
})
export class AdvanceInvoicesComponent implements OnInit {

  invoiceData: InvoiceData[] = [];

  // Pagination variables
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;
  advanceFeesInfo = [];

  // Angular Variables
  constructor(public dialogRef: MatDialogRef<AdvanceInvoicesComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.invoiceData = this.data['content'];
    this.advanceFeesInfo = this.data['otherInfo'];
  }

  onPageChange(event) {
    this.pageSize = event.pageSize;
  }

  /**
   * activity dialog redirection
   */
  onCloseDialog(): void {
    this.dialogRef.close();
  }

  // Esc Event
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onCloseDialog();
    }
  }
}
