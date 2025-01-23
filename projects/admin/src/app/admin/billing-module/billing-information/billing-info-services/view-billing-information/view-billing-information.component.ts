import {Component, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-billing-information',
  templateUrl: './view-billing-information.component.html',
  styleUrls: ['./view-billing-information.component.scss']
})
export class ViewBillingInformationComponent implements OnInit {
  // Data Variables
  bookkeepingSubActivity: any[] = [];

  constructor(public _router: Router) {
  }

  ngOnInit() {
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    for (let i = 0; i < 3; i++) {
      let obj = {
        subactivity: '226-Setting up the contractor card details, preparation of tax payment annual report and other related work',
        frequency: 'Fortnightly',
        ff: 'Yes',
        price: '0.00'
      };
      this.bookkeepingSubActivity.push(obj);
    }
  }

  onBillingInformation() {
    this._router.navigate(['/' + AdminRoutes.BILLING_INFORMATION]);
  }
}
