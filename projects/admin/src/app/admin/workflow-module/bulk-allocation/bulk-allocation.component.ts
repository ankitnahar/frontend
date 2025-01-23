import {Component, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-bulk-allocation',
  templateUrl: './bulk-allocation.component.html',
  styleUrls: ['./bulk-allocation.component.scss']
})
export class BulkAllocationComponent implements OnInit {

  constructor(public _router: Router) {
  }

  isActiveTab = 0;
  tabNumber: number;

  ngOnInit() {
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   *  On Tab Change
   */
  onSelectTab(tabChangeEvent: MatTabChangeEvent) {
    this.isActiveTab = tabChangeEvent['index'];
  }

}
