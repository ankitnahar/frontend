import {Component, OnInit} from '@angular/core';
import {GLOBALDATAKEYS} from '../../../utility/constants/base-constants';
import {SharedService} from '../../../utility/shared-service/shared.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit {
  currentDate = new Date();
  IpAddress = 0;

  constructor(private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.IpAddress = this._sharedService.getClientData(GLOBALDATAKEYS.LOGGEDIN_IP);
  }

}
