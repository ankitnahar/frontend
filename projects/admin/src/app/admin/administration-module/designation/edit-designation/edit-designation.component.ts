import {Component, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {DesignationPrivilegeType, GLOBALDATAKEYS} from '../../../../../utility/constants/base-constants';
import {AdminAPI} from "../../../../../utility/constants/api";
import {FormBuilder} from "@angular/forms";
import {MatDialog} from "@angular/material";
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import {SharedService} from "../../../../../utility/shared-service/shared.service";

export enum ViewPrevilege {
  PAGE_RIGHTS_VIEW, DYNAMIC_FIELD_GROUP_VIEW, WORKSHEET_STATUS_RIGHTS_VIEW, OTHER_VIEW
}


@Component({
  selector: 'app-edit-designation',
  templateUrl: './edit-designation.component.html',
  styleUrls: ['./edit-designation.component.scss']
})
export class EditDesignationComponent implements OnInit {

  enumView = ViewPrevilege;
  activeEnumView: ViewPrevilege = this.enumView.PAGE_RIGHTS_VIEW;

  selectedPrivilegeType: any;
  privilegeList = DesignationPrivilegeType;
  designationData = null;
  designationName = '';

  constructor(private _router: Router,
              private _fb: FormBuilder,
              public dialog: MatDialog,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.selectedPrivilegeType = 'tab';
    this.designationData = this._sharedService.getClientData(GLOBALDATAKEYS.DESIGNATION);
    this._commonCrudService.getData(AdminAPI.DESIGNATION, this.designationData.id).subscribe((response) => {
      this.designationName = response.payload.data.designation_name;
    });
  }

  onChangePageRight(viewValue) {
    this.selectedPrivilegeType = viewValue;
    switch (viewValue) {
      case 'tab':
        this.activeEnumView = this.enumView.PAGE_RIGHTS_VIEW;
        break;

      case 'field':
        this.activeEnumView = this.enumView.DYNAMIC_FIELD_GROUP_VIEW;
        break;

      case 'button':
        this.activeEnumView = this.enumView.OTHER_VIEW;
        break;

      case 'worksheet':
        this.activeEnumView = this.enumView.WORKSHEET_STATUS_RIGHTS_VIEW;
        break;
    }
  }

  onDesignation() {
    this._router.navigate(['/' + AdminRoutes.DESIGNATION_LIST]);
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
