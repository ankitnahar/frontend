import {Component, OnInit} from '@angular/core';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';

@Component({
  selector: 'app-invoice-report',
  templateUrl: './invoice-report.component.html',
  styleUrls: ['./invoice-report.component.scss']
})
export class InvoiceReportComponent implements OnInit {

  constructor() {
  }

  tabID = ADMINTABACCESS.REPORT_INVOICEREPORT;

  ngOnInit() {
  }

}
