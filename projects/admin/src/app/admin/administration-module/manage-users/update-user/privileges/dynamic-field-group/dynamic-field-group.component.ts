import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { AdminAPI } from '../../../../../../../utility/constants/api';
import { GLOBALDATAKEYS } from '../../../../../../../utility/constants/base-constants';
import { AdminUser } from '../../../../../../../utility/shared-model/admin-user.model';
import { CommonCrudService } from '../../../../../../../utility/shared-service/common-crud.service';
import { SharedService } from '../../../../../../../utility/shared-service/shared.service';
import { FIELDPRIVILEGES } from '../privileges.model';

@Component({
  selector: 'app-dynamic-field-group',
  templateUrl: './dynamic-field-group.component.html',
  styleUrls: ['./dynamic-field-group.component.scss'],
  providers: [CommonCrudService]
})
export class DynamicFieldGroupComponent implements OnInit {

  // input variable
  @Input() pageRightsValue: string;

  // form Variables
  filterText: string;
  filterInput = new FormControl();
  disableSelectAll: boolean = false;

  // Data Variables
  userData: AdminUser = null;
  privilegelistSortBy: string;
  privilegelistSortOrder: string;
  privileges: FIELDPRIVILEGES[] = [];
  is_viewAll = false;
  is_add_editAll = false;

  // Other Variables

  constructor(private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService) {
  }

  /**
   * intialize methods.
   */
  ngOnInit() {
    this.userData = this._sharedService.getClientData(GLOBALDATAKEYS.USERS);
    this.getPageRightsList();
    this.searchFilter();
    this.filterText = '';


  }

  /**
   * search function for local searching.
   */
  searchFilter() {
    this.filterInput.valueChanges.pipe(debounceTime(200))
      .subscribe(term => {
        this.filterText = term;
        this.disableSelectAll = !!this.filterText ? true : false;
      });
  }

  /**
   * list api for the paginations rights.
   */
  getPageRightsList() {

    const value = {
      url: AdminAPI.ADMIN_USER_HISTORY + '/' + this.userData.id,
      params: {'type': 'user_field_right'},
    };
    this._sharedService.setHistoryURL(value);

    this._commonCrudService.listData(AdminAPI.USER_PRIVILEGE + '/' + this.userData.id, {'type': this.pageRightsValue}, {}).subscribe(Response => {
      this.privileges = Response.payload.data;
      let viewAll = 0;
      let addEditAll = 0;
      this.privileges.map(item => {
        item['view'] ? viewAll++ : '';
        item['add_edit'] ? addEditAll++ : '';
      });
      if (viewAll === this.privileges.length) {
        this.is_viewAll = true;
      }
      if (addEditAll === this.privileges.length) {
        this.is_add_editAll = true;
      }
    });
  }

  /**
   * function for checkbox all event . when checked all pages events changed base on rights.
   * @param event
   * @param fieldType
   */
  assignPrivilegeToAll(event: boolean, fieldType: string) {
    if (fieldType === 'view') {
      this.is_viewAll = event;
    } else if (fieldType === 'add_edit') {
      this.is_add_editAll = event;
    }
    this.privileges.map(item => {
      item[fieldType] = event ? 1 : 0;
    });
  }

  changeIsViewPrivilege(event: boolean, privilege: FIELDPRIVILEGES) {
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

  changeIsAddPrivilege(event: boolean, privilege: FIELDPRIVILEGES) {
    privilege['add_edit'] = event ? 1 : 0;
    if (event) {
      let i = 0;
      this.privileges.map(item => {
        item['add_edit'] ? i++ : '';
      });
      if (i === this.privileges.length) {
        this.is_add_editAll = true;
      }
    } else {
      this.is_add_editAll = this.is_add_editAll ? false : this.is_add_editAll;
    }
  }

  changePageRights() {
    const formParam = {};
    formParam['type'] = this.pageRightsValue;
    const formJson = [];
    this.privileges.map(item => {
      formJson.push({
        'id': item.id,
        'group_name': item.group_name,
        'field_title': item.field_title,
        'view': item.view,
        'add_edit': item.add_edit,
      });
    });
    formParam['data'] = JSON.stringify(formJson);
    this._commonCrudService.updateData(AdminAPI.USER_PRIVILEGE, this.userData.id, formParam).subscribe(Response => {
      this.getPageRightsList();
    });
  }

  /**
   * Getting sorted privilegeList based on sortKey and sortOrder.
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortPrivilegelistData(sortKey: string, sortVal: string) {
    this.privilegelistSortBy = sortKey;
    this.privilegelistSortOrder = sortVal;
    const sortedArray = this.privileges.sort((objOne, objTwo) => {
      if (objOne[sortKey] > objTwo[sortKey]) {
        return 1;
      }
      if (objOne[sortKey] < objTwo[sortKey]) {
        return -1;
      }
      return 0;
    });
    if (sortVal === 'asc') {
      this.privileges = sortedArray;
    } else {
      this.privileges = sortedArray.reverse();
    }
  }
}
