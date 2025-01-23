import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {AdminUser, Privilege} from '../../../../utility/shared-model/admin-user.model';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Designation, OfficeLocation} from '../../../../utility/shared-model/designation.model';
import {HrShift} from '../../../../utility/shared-model/hour-shift.model';
import {BASE, GLOBALDATAKEYS, userType} from '../../../../utility/constants/base-constants';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import {ConfirmationDialogComponent} from '../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../utility/constants/api';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
  providers: [CommonCrudService]
})

export class ManageUsersComponent implements OnInit {

  // Cosntant Variables
  filterForm: FormGroup;
  secondFilterForm: FormGroup;

  // Data Variables
  userList: AdminUser[] = [];
  userDataList: AdminUser[] = [];
  designationList: Designation[] = [];
  shiftList: HrShift[] = [];
  locationList: OfficeLocation[] = [];
  tagList: any[] = [];
  equalJSON = {'is_active': 1};
  likeJSON = {};
  inJSON = {};

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Other Variables
  isOpenFilterView = false;
  slideData = [];
  tabID = ADMINTABACCESS.ADMIN_MANAGEUSER;
  tabData: Privilege | any[];
  isUserReports = false;
  userTypeList = userType;

  constructor(private _router: Router,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService,
              private _fb: FormBuilder,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    // To Check Access Rights
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.isUserReports = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'user_right_report', 1);
    this.initializationMethod();
    this.getManagerUserList(1);
    this.getUserList();
    this.getDesignationList();
    this.getShiftList();
    this.getLocationList();
  }

  // Initialization Methods
  initializationMethod() {
    // form intialization for filter form
    this.createAdvanceFilterForm();
  }

  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      user_bio_id: new FormControl(''),
      userfullname: new FormControl(''),
      user_type: new FormControl(),
      email: new FormControl(''),
      is_active: new FormControl(''),
      designationName: new FormControl(''),
      shiftName: new FormControl(''),
      locationName: new FormControl(''),
      first_approval_user: new FormControl(null),
      second_approval_user: new FormControl(null),
      Entity: new FormControl(null)
    });

    this.secondFilterForm = this._fb.group({
      user_bio_id: new FormControl(''),
      userfullname: new FormControl(''),
      user_type: new FormControl(),
      email: new FormControl(''),
      is_active: new FormControl(''),
      designationName: new FormControl(''),
      shiftName: new FormControl(''),
      locationName: new FormControl(''),
      first_approval_user: new FormControl(null),
      second_approval_user: new FormControl(null),
      Entity: new FormControl(null)
    });
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * user Listing API.
   * @param pageNumber
   * @param key
   * @param val
   */
  getManagerUserList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.ADMIN_USER, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(Response => {
      this.handleUserResponse(Response);
    });
  }

  /**
   * designation List API
   */
  getDesignationList() {
    this._sharedObjService.getDesignationList({records: 'all'}).subscribe(response => {
      this.handleDesignationResponse(response);
    });
  }

  /**
   * shift Listing API.
   */
  getShiftList() {
    this._sharedObjService.getShiftList({'records': 'all'}, {}).subscribe(Response => {
      this.handleShiftResponse(Response);
    });
  }

  /**
   * Location List API
   */
  getLocationList() {
    this._commonCrudService.listData(AdminAPI.LOCATION, {'records': 'all'}, {}).subscribe(Response => {
      this.handleLocationResponse(Response);
    });
  }

  handleDesignationResponse(response: any) {
    // assign data to array and default make to checked false
    // because  we want to reset the checked entity
    this.designationList = response;
    this.designationList.map(item => {
      item.isChecked = false;
    });
  }

  handleShiftResponse(response: any) {
    // assign data to array and default make to checked false
    // because  we want to reset the checked entity
    this.shiftList = response;
    this.shiftList.map(item => {
      item.isChecked = false;
    });
  }

  handleLocationResponse(response: any) {
    // assign data to array and default make to checked false
    // because  we want to reset the checked entity
    this.locationList = response.payload.data;
    this.locationList.map(item => {
      item.isChecked = false;
    });
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.userDataList = response;
    });
  }

  handleUserResponse(response: any) {
    this.userList = response.payload.data;
    for (let i = 0; i < this.userList.length; i++) {
      this.slideData[i] = this.userList[i].is_active ? true : false;
    }
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  // Events
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getManagerUserList(event.pageIndex + 1);
  }

  resetForm() {
    this.createAdvanceFilterForm();
    this.likeJSON = {};
    this.equalJSON = {'is_active': 1};
    this.inJSON = {};
    this.getManagerUserList(1);
  }

  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.USER_EXPORT, params, this.getSearchParam(), 'User ', 0).subscribe(response => {
    });
  }

  onToggleFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  onAddUSer() {
    this._router.navigate(['/' + AdminRoutes.ADD_USER]);
  }

  onUpdateUser(user?: AdminUser) {
    this._sharedService.setClientData(GLOBALDATAKEYS.USERS, user);
    this._router.navigate(['/' + AdminRoutes.UPDATE_USER]);
  }

  deleteMsg(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue('');
    this.secondFilterForm.get(elementName).setValue('');
    if (elementName === 'user_bio_id' ||  elementName === 'user_type' || elementName === 'is_active' || elementName === 'first_approval_user' || elementName === 'second_approval_user') {
      delete this.equalJSON[elementName];
      if (elementName === 'is_active') {
        this.equalJSON['is_active'] = 1;
      }
    } else if (elementName === 'userfullname' || elementName === 'email' || elementName === 'Entity') {
      delete this.likeJSON[elementName];
    } else if ((elementName === 'designationName' || elementName === 'shiftName' || elementName === 'locationName')) {

      if (elementName === 'designationName') {
        delete this.inJSON['designation_id'];
      }
      if (elementName === 'shiftName') {
        delete this.inJSON['shift_id'];
      }

      if (elementName === 'locationName') {
        delete this.inJSON['location_id'];
      }
    }
    this.getManagerUserList(1);
  }

  onClearTags() {
  }

  keyDownFunction(event, formValue: any, isValid: boolean, flag?: boolean) {
    let processToReq = false;
    if (flag) {
      processToReq = true;
    } else {
      if (event.keyCode === 13) {
        processToReq = true;
      }
    }
    if (processToReq) {
      this.filterForm.setValue(
        {
          'user_bio_id': formValue['user_bio_id'],
          'userfullname': formValue['userfullname'],
          'user_type': formValue['user_type'],
          'email': formValue['email'],
          'is_active': formValue['is_active'],
          'designationName': formValue['designationName'],
          'shiftName': formValue['shiftName'],
          'locationName': formValue['locationName'],
          'first_approval_user': formValue['first_approval_user'],
          'second_approval_user': formValue['second_approval_user'],
          'Entity': formValue['Entity'],
        });
      this.setAdvanceFilter(formValue, isValid);
    }
  }

  setAdvanceFilter(formValue: any, isValid: boolean) {
    // reinitialize object after every search pop up open
    this.equalJSON = {'is_active': 1};
    this.likeJSON = {};
    this.inJSON = {};
    // remove empty key from object
    for (const key in formValue) {
      if (formValue[key] === null || formValue[key] === '' || formValue[key] === undefined) {
        delete formValue[key];
      } else {
        if (isValid) {
          this.secondFilterForm.get(key).setValue(formValue[key]);
        }
      }
    }
    if (isValid && formValue !== {}) {
      if (formValue['designationName'] !== '' && formValue['designationName']) {
        // converting designation array into comma separator
        formValue['designation_id'] = formValue['designationName'].join();
        delete formValue['designationName'];
      }
      if (formValue['shiftName'] !== '' && formValue['shiftName']) {
        // converting designation array into comma separator
        formValue['shift_id'] = formValue['shiftName'].join();
        delete formValue['shiftName'];
      }
      if (formValue['locationName'] !== '' && formValue['locationName']) {
        // converting designation array into comma separator
        formValue['location_id'] = formValue['locationName'].join();
        delete formValue['locationName'];
      }

      // assign search to the json based on key;
      for (const key in formValue) {
        if (key === 'user_bio_id' || key === 'user_type' || key === 'is_active' || key === 'first_approval_user' || key === 'second_approval_user') {
          this.equalJSON[key] = formValue[key];
        } else if (key === 'userfullname' ||  key === 'email' || key === 'Entity' ) {
          this.likeJSON[key] = formValue[key];
        } else if ((key === 'designation_id' || key === 'shift_id' || key === 'location_id') && (formValue[key] !== '')) {
          this.inJSON[key] = formValue[key];
        }
      }

      this.isOpenFilterView = false;
      this.getManagerUserList(1);
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilterView = false;
    }
  }

  enableDisableUser(action: boolean, userData: AdminUser) {
    const params = {'is_active': action ? 1 : 0, 'method': '_put'};
    this._commonCrudService.updateData(AdminAPI.ADMIN_USER, userData.id, params).subscribe(response => {
      this.userList.map(item => {
        if (item.id === userData.id) {
          item.is_active = item.is_active ? 0 : 1;
        }
      });
    });
  }

  // helper
  // get function for returning pageNumber and page size at time of listing api
  getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    let params = {};
    params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    sortKey ? params ['sortBy'] = sortKey : '';
    sortOrder ? params ['sortOrder'] = sortOrder : '';
    return params;
  }

  getSortData(sortKey: string, sortVal: string) {
    this.getManagerUserList(1, sortKey, sortVal);
  }

  // advance filter search operation
  getSearchParam() {
    const params = {};
    const filter = {};
    // check for the object whether its empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }
    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length) {
      params['compare'] = filter;
    }
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }
    return params;
  }

  onDisabledConfirmDialog(event, userData, id) {
    // console.log(this.slideData[id]);
    const status = event.checked ? 'Inactive' : 'Active';
    const statusNagetive = !event.checked ? 'Inactive' : 'Active';
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Do you want change status from ' + status + ' to ' + statusNagetive
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this.enableDisableUser(event.checked, userData);
      } else {
        if (this.slideData[id]) {
          this.slideData[id] = false;
        } else {
          this.slideData[id] = true;
        }
      }
    });
  }

  /**
   * Download User Right Report
   * @constructor
   */
  DownloadRightReport() {
    this._commonCrudService.downloadExcelData(AdminAPI.ADMIN_USER_RIGHT_REPORT, {}, {}, 'User Right Report ', 0).subscribe(response => {
    });
  }
  /**
   * Download User Zoho Report
   * @constructor
   */
  DownloadZohoReport() {
    this._commonCrudService.downloadExcelData(AdminAPI.ADMIN_USER_ZOHO_REPORT, {}, {}, 'User Zoho Report ', 0).subscribe(response => {
    });
  }

  /**
   * Display Get Status List
   * @param {number} type_id
   * @returns {string}
   */
  getUserType(type_id: number): string {
    const val = this.userTypeList.filter(elem => elem.key === Number(type_id));
    return (val.length) ? val[0].label : '';
  }
}
