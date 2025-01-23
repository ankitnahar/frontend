import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {WORKSHEETPRIVILEGES} from "../../../manage-users/update-user/privileges/privileges.model";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import {SharedService} from "../../../../../../utility/shared-service/shared.service";
import {GLOBALDATAKEYS} from "../../../../../../utility/constants/base-constants";
import {debounceTime} from "rxjs/operators";
import {AdminAPI} from "../../../../../../utility/constants/api";

@Component({
  selector: 'app-edit-worksheet-status-rights',
  templateUrl: './edit-worksheet-status-rights.component.html'
})
export class EditWorksheetStatusRightsComponent implements OnInit {

  @Input() pageRightsValue: string;

  // form Variables
  filterText: string;
  filterInput = new FormControl();

  // Data Variables
  designationData = null;
  privileges: WORKSHEETPRIVILEGES[] = [];

  // state variable
  is_rightAll = false;

  constructor(private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.designationData = this._sharedService.getClientData(GLOBALDATAKEYS.DESIGNATION);
    this.getPageRightsList();
    this.searchFilter();
    this.filterText = '';
  }

  searchFilter() {
    this.filterInput.valueChanges.pipe(debounceTime(200))
      .subscribe(term => {
        this.filterText = term;
      });
  }

  getPageRightsList() {

    this._commonCrudService.listData(AdminAPI.DESIGNATION_PRIVILEGE + '/' + this.designationData.id, {'type': this.pageRightsValue}, {}).subscribe(Response => {
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
    this._commonCrudService.updateData(AdminAPI.DESIGNATION_PRIVILEGE, this.designationData.id, formParam).subscribe(Response => {
      this.getPageRightsList();
    });
  }
}
