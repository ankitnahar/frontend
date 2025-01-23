import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../utility/constants/admin-route';

@Component({
  selector: 'app-worksheet-module',
  templateUrl: './worksheet-module.component.html',
  styleUrls: ['./worksheet-module.component.scss']
})
export class WorksheetModuleComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onMyWorksheetList() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  onGoDashboard(){

  }
}
