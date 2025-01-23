import {Component, OnInit} from '@angular/core';

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

  // Other Variables

  constructor() {}

  ngOnInit() {}

  onChangePageRight(viewValue) {
    switch (viewValue) {
      case '0':
        this.activeEnumView = this.enumView.PAGE_RIGHTS_VIEW;
        break;

      case '1':
        this.activeEnumView = this.enumView.DYNAMIC_FIELD_GROUP_VIEW;
        break;

      case '2':
        this.activeEnumView = this.enumView.WORKSHEET_STATUS_RIGHTS_VIEW;
        break;

      case '3':
        this.activeEnumView = this.enumView.FORM_EMAIL_RIGHTS_VIEW;
        break;

      case '4':
        this.activeEnumView = this.enumView.OTHER_VIEW;
        break;
    }
  }
}
