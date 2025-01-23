import {debounceTime} from 'rxjs/operators';
import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {WORKSHEETPRIVILEGES} from '../privileges.model';
import {GLOBALDATAKEYS} from '../../../../../../../utility/constants/base-constants';
import {AdminUser} from '../../../../../../../utility/shared-model/admin-user.model';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';

@Component({
  selector: 'app-worksheet-status-right',
  templateUrl: './worksheet-status-right.component.html',
  styleUrls: ['./worksheet-status-right.component.scss'],
  providers: [CommonCrudService]
})
export class WorksheetStatusRightComponent implements OnInit {

  // input variable
  @Input() pageRightsValue: string;

  // form Variables
  filterText: string;
  filterInput = new FormControl();
  disableSelectAll: boolean = false;

  // Data Variables
  userData: AdminUser = null;
  privileges: WORKSHEETPRIVILEGES[] = [];

  // state variable
  is_rightAll = false;

  constructor(private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.userData = this._sharedService.getClientData(GLOBALDATAKEYS.USERS);
    this.getPageRightsList();
    this.searchFilter();
    this.filterText = '';
  }

  searchFilter() {
    this.filterInput.valueChanges.pipe(debounceTime(200))
      .subscribe(term => {
        this.filterText = term;
        this.disableSelectAll = !!this.filterText ? true : false;
      });
  }

  getPageRightsList() {
    const value = {
      url: AdminAPI.ADMIN_USER_HISTORY + '/' + this.userData.id,
      params: {'type': 'user_worksheet_right'},
    };
    this._sharedService.setHistoryURL(value);

    this._commonCrudService.listData(AdminAPI.USER_PRIVILEGE + '/' + this.userData.id, {'type': this.pageRightsValue}, {}).subscribe(Response => {
      this.privileges = Response.payload.data;
      let i = 0;
      this.privileges.map(item => {
        item['right'] ? i++ : '';
      });
      if (i === this.privileges.length) {
        this.is_rightAll = true;
      }
    });
  }

  assignPrivilegeToAll(event: boolean, fieldType: string) {
    this.is_rightAll = event;
    this.privileges.map(item => {
      item[fieldType] = event ? 1 : 0;
    });
  }

  changeRightPrivilege(event: boolean, privilege: WORKSHEETPRIVILEGES) {
    privilege['right'] = event ? 1 : 0;
    if (event) {
      let i = 0;
      this.privileges.map(item => {
        item['right'] ? i++ : '';
      });
      if (i === this.privileges.length) {
        this.is_rightAll = true;
      }
    } else {
      this.is_rightAll = this.is_rightAll ? false : this.is_rightAll;
    }
  }

  changePageRights() {
    const formParam = {};
    formParam['type'] = this.pageRightsValue;
    const formJson = [];
    this.privileges.map(item => {
      formJson.push({
        'id': item.id,
        'status_name': item.status_name,
        'view': item.right,
      });
    });
    formParam['data'] = JSON.stringify(formJson);
    this._commonCrudService.updateData(AdminAPI.USER_PRIVILEGE, this.userData.id, formParam).subscribe(Response => {
      this.getPageRightsList();
    });
  }

}
