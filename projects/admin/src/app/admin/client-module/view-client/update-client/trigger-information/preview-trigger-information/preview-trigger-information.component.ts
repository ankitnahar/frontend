import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, PageEvent} from "@angular/material";
import {AdminRoutes} from "../../../../../../../utility/constants/admin-route";
import {BASE} from "../../../../../../../utility/constants/base-constants";

@Component({
  selector: 'app-preview-trigger-information',
  templateUrl: './preview-trigger-information.component.html',
  styleUrls: ['./preview-trigger-information.component.scss']
})
export class PreviewTriggerInformationComponent implements OnInit {
  // Data Variables
  triggerInformationList: any[] = [];

  // Pagination related variables
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(public _router: Router, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.initializationMethod();
  }

  // Initialization Methods
  initializationMethod() {
    for (let i = 0; i < 20; i++) {
      let obj = {
        frequency: 'Monthly',
        period: 'No',
        date: '22-02-2020'
      };
      this.triggerInformationList.push(obj);
    }
  }

  /**
   * View clinet page redirect
   */
  onClient() {
    this._router.navigate(['/' + AdminRoutes.VIEW_CLIENT]);
  }

  /**
   * Get feedback list based on page changes
   * @param event
   */
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    // this.getFeedbackList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
