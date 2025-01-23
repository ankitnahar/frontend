import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {BASE} from "../../../../../../utility/constants/base-constants";

@Component({
  selector: 'app-worksheet-report',
  templateUrl: './worksheet-report.component.html',
  styleUrls: ['./worksheet-report.component.scss']
})
export class WorksheetReportComponent implements OnInit {


  // Data Variables
  worksheetDetails: any[] = [];

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private _fb: FormBuilder, public _router: Router) { }

  ngOnInit() {
    this.initializationMethod();
  }

  // Initialization Methods
  initializationMethod() {
    for (let i = 0; i < 20; i++) {
      let obj = {
        service_name: 'BEFREE - Bookkeeping and Payroll',
        master_name: '22.11.2016 05:30:00 AM',
        task_name: 'Completed',
        frequency_name: '1500',
        start_date: '1200',
        end_date: '0',
        status_name: '29'
      };
      this.worksheetDetails.push(obj);
    }
  }


  onViewComments() {
    this._router.navigate(['/' + AdminRoutes.VIEW_WORKSHEET_COMMENTS]);

  }

  /**
   * Pagination page change event
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
  }
}
