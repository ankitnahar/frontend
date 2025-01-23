import {Component, OnInit} from '@angular/core';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';

@Component({
  selector: 'app-client-allocation-report',
  templateUrl: './client-allocation-report.component.html',
  styleUrls: ['./client-allocation-report.component.scss']
})
export class ClientAllocationReportComponent implements OnInit {

  constructor() {
  }

  tabID = ADMINTABACCESS.REPORT_CLIENTALLOCATIONREPORT;

  ngOnInit() {
  }

}
