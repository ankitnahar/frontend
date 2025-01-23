import {Component, OnInit} from '@angular/core';
import {UserPrivilegeType} from '../../../../../../utility/constants/base-constants';

export enum ViewPrevilege {
  PAGE_RIGHTS_VIEW, DYNAMIC_FIELD_GROUP_VIEW, WORKSHEET_STATUS_RIGHTS_VIEW, FORM_EMAIL_RIGHTS_VIEW, OTHER_VIEW
}

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})

export class PrivilegesComponent implements OnInit {

  // Constant Variables
  enumView = ViewPrevilege;
  activeEnumView: ViewPrevilege = this.enumView.PAGE_RIGHTS_VIEW;

  // Data Variables
  selectedPrivilegeType: any;
  privilegeList = UserPrivilegeType;

  // Other Variables

  constructor() {
  }

  ngOnInit() {
    this.selectedPrivilegeType = 'tab';
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

      case 'worksheet':
        this.activeEnumView = this.enumView.WORKSHEET_STATUS_RIGHTS_VIEW;
        break;

      case 'formemail':
        this.activeEnumView = this.enumView.FORM_EMAIL_RIGHTS_VIEW;
        break;

      case 'button':
        this.activeEnumView = this.enumView.OTHER_VIEW;
        break;
    }
  }
}
