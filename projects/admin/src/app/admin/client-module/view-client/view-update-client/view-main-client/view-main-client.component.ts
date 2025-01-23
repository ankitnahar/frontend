import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {APIManager} from '../../../../../../utility/shared-service/apimanager.service';
import {Router} from '@angular/router';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {GLOBALDATAKEYS, VIEWCLIENTTYPE} from '../../../../../../utility/constants/base-constants';
import {Clients} from '../../view-client.model';
import {MatTabChangeEvent} from '@angular/material';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';

@Component({
  selector: 'app-view-main-client',
  templateUrl: './view-main-client.component.html',
  styleUrls: ['./view-main-client.component.scss'],
})
export class ViewMainClientComponent extends BaseComponent implements OnInit {

  constructor(private _apiManager: APIManager, private _router: Router, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService) {
    super();
  }

  // Data Variables
  isActiveTab = 0;
  tab = VIEWCLIENTTYPE.BASIC;
  mainClientResponse: any[] = [];
  softwareTab: any[] = [];
  clientData: Clients;

  ngOnInit() {
    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    this.initializeMethod();
  }

  /**
   * Initialization Methods
   */
  initializeMethod() {
    this._commonCrudService.getData(AdminAPI.CLIENT_BASIC, this.clientData.id, {'tab': this.tab}).subscribe(Response => {
      this.handleMainClientResponse(Response);
    });
  }

  // Handle Entity Response for tabs
  handleMainClientResponse(response: any) {
    // assign data to array
    this.mainClientResponse = response.payload.tabs;
    this.softwareTab = response.payload.group[1];
  }

  /**
   * Change tab function
   * @param tabChangeEvent
   */
  onSelectTab(tabChangeEvent: MatTabChangeEvent) {
    this.isActiveTab = tabChangeEvent['index'];
  }
}
