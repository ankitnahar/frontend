import {Component, Input, OnInit} from '@angular/core';
import {APIManager} from '../../../../../../../utility/shared-service/apimanager.service';
import {Router} from '@angular/router';
import {Clients} from '../../view-client.model';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {FIELDTYPE, GLOBALDATAKEYS} from '../../../../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {AgreedChildTabs, AgreedTabs, DYNAMICFIELDS} from '../main.model';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {ClientInfoServicesNotesDialogComponent} from '../../../client-info-services-notes-dialog/client-info-services-notes-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-view-bookkeeping-main',
  templateUrl: './view-bookkeeping-main.component.html',
  styleUrls: ['./view-bookkeeping-main.component.scss'],
})
export class ViewBookkeepingMainComponent implements OnInit {
  // Angular variables
  @Input() tab: AgreedTabs;
  isActiveTab = 0;
  mainClientResponse: any[] = [];
  softwareTab: any[] = [];
  clientData: Clients = null;
  // State Array
  accountType: number;
  // data related variables
  currentTabName: any;
  fieldList: DYNAMICFIELDS[] = [];
  fieldValue = {};
  tabChildData: AgreedChildTabs[] = [];
  valueJson: any;
  fieldType = FIELDTYPE;
  group = {};
  displayArray = [];

  constructor(private _apiManager: APIManager,
              private _router: Router,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    this.initializeMethod();
  }

  /**
   * Initialization Methods
   */
  initializeMethod() {
    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    this.tabChildData = this.tab['child'] || [];
    this.accountType = this.tab.id;
    this.getFieldValueOfGroup();
    const value = {
      url: AdminAPI.CLIENT_HISTORY + '/' + this.tab.id,
      params: {'entity_id': this.clientData.id},
    };
    this._sharedService.setHistoryURL(value);
  }


  // Handle Entity Response for tabs
  handleMainClientResponse(response: any) {
    // assign data to array
    this.mainClientResponse = response.payload.tabs;
    this.softwareTab = response.payload.group[1];
  }

  onChangeService(event) {
    this.displayArray = [];
    this.accountType = event.value;
    this.getSubFieldValueOfGroup(this.accountType);
    this.currentTabName = (event.source.triggerValue) ? event.source.triggerValue : '';
    const value = {
      url: AdminAPI.CLIENT_HISTORY + '/' + this.accountType,
      params: {'entity_id': this.clientData.id},
    };
    this._sharedService.setHistoryURL(value);
  }

  /**
   * Get Field Value of that group/tab
   */
  getSubFieldValueOfGroup(tab_id) {
    this._commonCrudService.getData(AdminAPI.CLIENT_BASIC, this.clientData.id, {'tab': tab_id}).subscribe(Response => {
      this.valueJson = Response.payload.data;
      this.handleFieldValueResponse(Response);
      this.getSubFieldList(tab_id);
    });
  }

  /**
   * Get Field List for all tabs
   */
  getSubFieldList(tab_id) {
    const params = {'view': 1};
    this._commonCrudService.getData(AdminAPI.GROUP_WISE_ENTITY_FIELD_LIST, tab_id, params).subscribe(Response => {
      this.handleFieldResponse(Response);
    });
  }

  handleFieldResponse(response: any) {
    // assign data to array
    this.fieldList = (response.payload.data.fields) ? response.payload.data.fields : [];
    this.generateArray();
  }

  /**
   * Handle Value of that group/tab
   * @param response
   */
  handleFieldValueResponse(response: any) {
    // assign data to array
    this.fieldValue = (response.payload.data.dynamic_json) ? JSON.parse(response.payload.data.dynamic_json) : [];
    // this.generateArray();
  }

  /**
   * Get Field Value of that group/tab
   */
  getFieldValueOfGroup() {
    this._commonCrudService.getData(AdminAPI.CLIENT_BASIC, this.clientData.id, {'tab': this.tab.id}).subscribe(Response => {
      this.handleFieldValueResponse(Response);
      this.getFieldList();
      this.valueJson = Response.payload.data;
      this.currentTabName = (this.tab.group_name) ? this.tab.group_name : '';
    });
  }

  /**
   * Get Field List for all tabs
   */
  getFieldList() {
    const params = {'view': 1};
    this._commonCrudService.getData(AdminAPI.GROUP_WISE_ENTITY_FIELD_LIST, this.tab.id, params).subscribe(Response => {
      this.handleFieldResponse(Response);
    });
  }

  generateArray() {
    const valueData = JSON.parse(this.valueJson.dynamic_json);
    // console.log(valueData);
    for (let i = 0; i < this.fieldList.length; i++) {
      if (this.fieldList[i].id) {
        if (valueData && valueData[this.fieldList[i].id]) {
          this.displayArray.push({key: this.fieldList[i].field_title, value: valueData[this.fieldList[i].id]});
        }
      }
    }
  }

  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
  }

  onClientServicesNotesDialog(notesData: any) {
    let dialogRef = this.dialog.open(ClientInfoServicesNotesDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        notesInfo: notesData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
