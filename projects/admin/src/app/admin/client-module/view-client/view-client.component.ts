import {Component, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss'],
  // providers: [CommonCrudService]
})

export class ViewClientComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit() {

  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
