import {Component, OnInit} from '@angular/core';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';

@Component({
  selector: 'app-client-wise-invoice-report',
  templateUrl: './client-wise-invoice-report.component.html',
  styleUrls: ['./client-wise-invoice-report.component.scss']
})
export class ClientWiseInvoiceReportComponent implements OnInit {

  constructor() {
  }

  tabID = ADMINTABACCESS.REPORT_CLIENTWISEINVOICEREPORT;

  ngOnInit() {
  }

}
