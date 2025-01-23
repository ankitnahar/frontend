import {Component, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invoice-template',
  templateUrl: './invoice-template.component.html',
  styleUrls: ['./invoice-template.component.scss']
})
export class InvoiceTemplateComponent implements OnInit {

  constructor(public _router: Router) {
  }

  ngOnInit() {
  }

  /**
   * On invoice redirection
   */
  onInvoice() {
    this._router.navigate(['/' + AdminRoutes.INVOICES]);
  }

}
