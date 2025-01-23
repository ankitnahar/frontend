import {Component, OnInit} from '@angular/core';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';

@Component({
  selector: 'app-bank-report',
  templateUrl: './bank-report.component.html',
  styleUrls: ['./bank-report.component.scss'],

})
export class BankReportComponent implements OnInit {
  tabID = ADMINTABACCESS.REPORT_BANKREPORT;

  ngOnInit() {
  }
}
