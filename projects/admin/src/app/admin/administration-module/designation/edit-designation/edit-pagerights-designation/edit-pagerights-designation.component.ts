import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TABPRIVILEGES} from '../../../manage-users/update-user/privileges/privileges.model';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {GLOBALDATAKEYS} from '../../../../../../utility/constants/base-constants';
import {debounceTime} from 'rxjs/operators';
import {AdminAPI} from '../../../../../../utility/constants/api';

@Component({
  selector: 'app-edit-pagerights-designation',
  templateUrl: './edit-pagerights-designation.component.html'
})
export class EditPagerightsDesignationComponent implements OnInit {

  // input variable
  @Input() pageRightsValue: string;

  // form Variables
  filterText: string;
  filterInput = new FormControl();

  // Data Variables
  designationData = null;
  privileges: TABPRIVILEGES[] = [];

  // state variable
  is_viewAll = false;
  is_add_editAll = false;
  is_deleteAll = false;
  is_exportAll = false;
  is_downloadAll = false;

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
      let viewCount = 0;
      let viewAll = 0;
      let addEditCount = 0;
      let addEditAll = 0;
      let deleteCount = 0;
      let deleteAll = 0;
      let exportCount = 0;
      let exportAll = 0;
      let downloadCount = 0;
      let downloadAll = 0;
      this.privileges.map(item => {
        item.is_view ? viewCount++ : '';
        item.view ? viewAll++ : '';

        item.is_add_edit ? addEditCount++ : '';
        item.add_edit ? addEditAll++ : '';

        item.is_delete ? deleteCount++ : '';
        item.delete ? deleteAll++ : '';

        item.is_export ? exportCount++ : '';
        item.export ? exportAll++ : '';

        item.is_download ? downloadCount++ : '';
        item.download ? downloadAll++ : '';

      });
      if (viewCount && viewCount === viewAll) {
        this.is_viewAll = true;
      }
      if (addEditCount && addEditCount === addEditAll) {
        this.is_add_editAll = true;
      }
      if (deleteCount && deleteCount === deleteAll) {
        this.is_deleteAll = true;
      }
      if (exportCount && exportCount === exportAll) {
        this.is_exportAll = true;
      }
      if (downloadCount && downloadCount === downloadAll) {
        this.is_downloadAll = true;
      }
    });
  }

  assignPrivilegeToAll(event: boolean, fieldType: string, rightsType: string) {
    if (fieldType === 'view') {
      this.is_viewAll = event;
    } else if (fieldType === 'add_edit') {
      this.is_add_editAll = event;
    } else if (fieldType === 'delete') {
      this.is_deleteAll = event;
    } else if (fieldType === 'export') {
      this.is_exportAll = event;
    } else if (fieldType === 'download') {
      this.is_downloadAll = event;
    }
    this.privileges.map(item => {
      if (item[rightsType]) {
        item[fieldType] = event ? 1 : 0;
      }
    });
  }

  changeIsViewPrivilege(event: boolean, privilege: TABPRIVILEGES) {
    privilege['view'] = event ? 1 : 0;
    if (event) {
      let i = 0;
      let count = 0;
      this.privileges.map(item => {
        item.is_view ? count++ : '';
        item.is_view ? (item.view ? i++ : '') : '';
      });
      if (i === count) {
        this.is_viewAll = true;
      }
    } else {
      this.is_viewAll = this.is_viewAll ? false : this.is_viewAll;
    }
  }

  changeIsAddEditPrivilege(event: boolean, privilege: TABPRIVILEGES) {
    privilege['add_edit'] = event ? 1 : 0;
    if (event) {
      let i = 0;
      let count = 0;
      this.privileges.map(item => {
        item.is_add_edit ? count++ : '';
        item.is_add_edit ? (item.add_edit ? i++ : '') : '';
      });
      if (i === count) {
        this.is_add_editAll = true;
      }
    } else {
      this.is_add_editAll = this.is_add_editAll ? false : this.is_add_editAll;
    }
  }

  changeIsDeletePrivilege(event: boolean, privilege: TABPRIVILEGES) {
    privilege['delete'] = event ? 1 : 0;
    if (event) {
      let i = 0;
      let count = 0;
      this.privileges.map(item => {
        item.is_delete ? count++ : '';
        item.is_delete ? (item.delete ? i++ : '') : '';
      });
      if (i === count) {
        this.is_deleteAll = true;
      }
    } else {
      this.is_deleteAll = this.is_deleteAll ? false : this.is_deleteAll;
    }
  }

  changeIsExportPrivilege(event: boolean, privilege: TABPRIVILEGES) {
    privilege['export'] = event ? 1 : 0;
    if (event) {
      let i = 0;
      let count = 0;
      this.privileges.map(item => {
        item.is_export ? count++ : '';
        item.is_export ? (item.export ? i++ : '') : '';
      });
      if (i === count) {
        this.is_exportAll = true;
      }
    } else {
      this.is_exportAll = this.is_exportAll ? false : this.is_exportAll;
    }
  }

  changeIsDownloadPrivilege(event: boolean, privilege: TABPRIVILEGES) {
    privilege['download'] = event ? 1 : 0;
    if (event) {
      let i = 0;
      let count = 0;
      this.privileges.map(item => {
        item.is_download ? count++ : '';
        item.is_download ? (item.download ? i++ : '') : '';
      });
      if (i === count) {
        this.is_downloadAll = true;
      }
    } else {
      this.is_downloadAll = this.is_downloadAll ? false : this.is_downloadAll;
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
        'is_view': item.is_view,
        'is_add_edit': item.is_add_edit,
        'is_delete': item.is_delete,
        'is_export': item.is_export,
        'is_download': item.is_download,
        'view': item.view,
        'delete': item.delete,
        'add_edit': item.add_edit,
        'export': item.export,
        'download': item.download
      });
    });
    formParam['data'] = JSON.stringify(formJson);
    this._commonCrudService.updateData(AdminAPI.DESIGNATION_PRIVILEGE, this.designationData.id, formParam).subscribe(Response => {
      this.getPageRightsList();
    });
  }

}
