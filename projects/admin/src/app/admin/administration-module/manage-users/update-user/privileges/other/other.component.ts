import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { AdminAPI } from '../../../../../../../utility/constants/api';
import { GLOBALDATAKEYS } from '../../../../../../../utility/constants/base-constants';
import { AdminUser } from '../../../../../../../utility/shared-model/admin-user.model';
import { CommonCrudService } from '../../../../../../../utility/shared-service/common-crud.service';
import { SharedService } from '../../../../../../../utility/shared-service/shared.service';
import { BUTTONPRIVILEGES } from '../privileges.model';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
  providers: [CommonCrudService]
})
export class OtherComponent implements OnInit {

  // input variable
  @Input() pageRightsValue;
  // form Variables
  filterText: string;
  filterInput = new FormControl();
  disableSelectAll: boolean = false;

  // Data Variables
  userData: AdminUser = null;
  privileges: BUTTONPRIVILEGES[] = [];

  // state variable
  is_viewAll = false;

  constructor(private _sharedService: SharedService,
              private _commonCrudService: CommonCrudService,
  ) {
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
      params: {'type': 'user_button_right'},
    };
    this._sharedService.setHistoryURL(value);

    this._commonCrudService.listData(AdminAPI.USER_PRIVILEGE + '/' + this.userData.id, {'type': this.pageRightsValue}, {}).subscribe(Response => {
      this.privileges = Response.payload.data;
    });
  }

  assignPrivilegeToAll(event: boolean, fieldType: string) {
    this.is_viewAll = event;
    this.privileges.map(item => {
      item[fieldType] = event ? 1 : 0;
    });
  }

  changeIsViewPrivilege(event: boolean, privilege: BUTTONPRIVILEGES) {
    privilege['view'] = event ? 1 : 0;
    if (event) {
      let i = 0;
      this.privileges.map(item => {
        item['view'] ? i++ : '';
      });
      if (i === this.privileges.length) {
        this.is_viewAll = true;
      }
    } else {
      this.is_viewAll = this.is_viewAll ? false : this.is_viewAll;
    }
  }

  changePageRights() {
    const formParam = {};
    formParam['type'] = this.pageRightsValue;
    const formJson = [];
    this.privileges.map(item => {
      formJson.push({
        'id': item.id,
        'tab_name': item.tab_name,
        'tab_id': item.tab_id,
        'button_label': item.button_label,
        'view': item.view,
      });
    });
    formParam['data'] = JSON.stringify(formJson);
    this._commonCrudService.updateData(AdminAPI.USER_PRIVILEGE, this.userData.id, formParam).subscribe(Response => {
      this.getPageRightsList();
    });
  }

}
