import {Component, OnInit} from '@angular/core';
import {ADMINTABACCESS} from "../../../../utility/constants/header-constant";

@Component({
  selector: 'app-worksheet-report',
  templateUrl: './worksheet-report.component.html',
  styleUrls: ['./worksheet-report.component.scss']
})
export class WorksheetReportComponent implements OnInit {

  constructor() {
  }

  tabID = ADMINTABACCESS.REPORT_WORKSHEETREPORT;

  ngOnInit() {
  }

}
