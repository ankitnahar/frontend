import {Component, HostListener, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {AppLogger} from '../../../../utility/common-functions';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  // Cosntant Variables

  // Data Variables
  userList: any[] = [];
  tagList: any[] = [];

  // MatPaginator Inputs

  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilterView: boolean = false;

  constructor(private _router: Router) {
  }

  ngOnInit() {
    this.initializationMethod();
  }

  // Initialization Methods
  initializationMethod() {
    this.userList = [
      {
        bioId: 101,
        fullName: 'Hasmukh Baldaniya',
        loginName: 'admin',
        emailId: 'hasmukh.baldaniya@smartsensesotions.com',
        designation: 'superAdmin',
        is_active: 'true',
        shiftName: 'SE-Tax/BS/FR Team',
        location: 'GIFT SEZ'
      },
      {
        bioId: 21,
        fullName: 'Alok Shukla',
        loginName: 'admin',
        emailId: 'alok.shukla@befree.co.uk',
        designation: 'admin',
        is_active: 'false',
        shiftName: 'SE-Tax/BS/FR Team',
        location: 'GIFT SEZ'
      },
      {
        bioId: 2,
        fullName: 'Alok Shukla',
        loginName: 'admin',
        emailId: 'alok.shukla@befree.co.uk',
        designation: 'admin',
        is_active: 'false',
        shiftName: 'SE-Tax/BS/FR Team',
        location: 'GIFT SEZ'
      },
      {
        bioId: 2,
        fullName: 'Alok Shukla',
        loginName: 'admin',
        emailId: 'alok.shukla@befree.co.uk',
        designation: 'admin',
        is_active: 'false',
        shiftName: 'SE-Tax/BS/FR Team',
        location: 'GIFT SEZ'
      },
      {
        bioId: 2,
        fullName: 'Alok Shukla',
        loginName: 'admin',
        emailId: 'alok.shukla@befree.co.uk',
        designation: 'admin',
        is_active: 'true',
        shiftName: 'SE-Tax/BS/FR Team',
        location: 'GIFT SEZ'
      },
      {
        bioId: 2,
        fullName: 'Alok Shukla',
        loginName: 'admin',
        emailId: 'alok.shukla@befree.co.uk',
        designation: 'admin',
        is_active: 'false',
        shiftName: 'SE-Tax/BS/FR Team',
        location: 'GIFT SEZ'
      },
      {
        bioId: 2,
        fullName: 'Alok Shukla',
        loginName: 'admin',
        emailId: 'alok.shukla@befree.co.uk',
        designation: 'admin',
        is_active: 'true',
        shiftName: 'SE-Tax/BS/FR Team',
        location: 'GIFT SEZ'
      },
      {
        bioId: 2,
        fullName: 'Alok Shukla',
        loginName: 'admin',
        emailId: 'alok.shukla@befree.co.uk',
        designation: 'admin',
        is_active: 'false',
        shiftName: 'SE-Tax/BS/FR Team',
        location: 'GIFT SEZ'
      },
      {
        bioId: 2,
        fullName: 'Alok Shukla',
        loginName: 'admin',
        emailId: 'alok.shukla@befree.co.uk',
        designation: 'admin',
        is_active: 'false',
        shiftName: 'SE-Tax/BS/FR Team',
        location: 'GIFT SEZ'
      },
      {
        bioId: 2,
        fullName: 'Alok Shukla',
        loginName: 'admin',
        emailId: 'alok.shukla@befree.co.uk',
        designation: 'admin',
        is_active: 'false',
        shiftName: 'SE-Tax/BS/FR Team',
        location: 'GIFT SEZ'
      },
    ];

    this.tagList = [
      {label: 'Bio ID', value: 1212},
      {label: 'Login Name', value: 'Admin'},
      {label: 'Designation', value: 'Super Admin'},
      {label: 'Location', value: 'Gift SEZ'}
    ];
  }

  // Events
  onPageChange(event) {
    this.pageEvent = event;
    AppLogger(this.pageEvent);
  }

  onToggleFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  onAddUSer() {
    this._router.navigate(['/' + AdminRoutes.ADD_USER]);
  }

  onUpdateUser() {
    this._router.navigate(['/' + AdminRoutes.UPDATE_USER]);
  }

  deleteMsg(index) {
    this.tagList.splice(index, 1);
  }

  onClearTags() {
    this.tagList = [];
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilterView = false;
    }
  }
}
