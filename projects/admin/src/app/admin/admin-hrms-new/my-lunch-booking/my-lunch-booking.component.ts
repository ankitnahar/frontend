import {Component, HostListener, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BASE, FOOD_TYPE_LIST, GLOBALDATAKEYS} from "../../../../utility/constants/base-constants";
import {MatDialog, PageEvent} from "@angular/material";
import {AdminUser, Privilege} from "../../../../utility/shared-model/admin-user.model";
import {Router} from "@angular/router";
import {CommonCrudService} from "../../../../utility/shared-service/common-crud.service";
import {SharedService} from "../../../../utility/shared-service/shared.service";
import {AdminAPI} from "../../../../utility/constants/api";
import {AdminRoutes} from "../../../../utility/constants/admin-route";
import {FoodBookingList, FoodMaster} from "../../../../utility/shared-model/food.model";
import {ADMINTABACCESS} from "../../../../utility/constants/header-constant";
import {OfficeLocation} from "../../../../utility/shared-model/designation.model";
import {ConfirmationDialogComponent} from "../../../../utility/components/confirmation-dialog/confirmation-dialog.component";
import * as moment from "moment";
import {CommonFunctions} from "../../../../utility/common-functions";
import {FeedbackMenuLunchDialogComponent} from "./feedback-menu-lunch-dialog/feedback-menu-lunch-dialog.component";
import {OnbehalfBookLunchDialogComponent} from "./onbehalf-book-lunch-dialog/onbehalf-book-lunch-dialog.component";
import {SharedObjService} from "../../../../utility/shared-service/shared-object.service";

@Component({
  selector: 'app-my-lunch-booking',
  templateUrl: './my-lunch-booking.component.html',
  styleUrls: ['./my-lunch-booking.component.scss']
})
export class MyLunchBookingComponent implements OnInit {
// Data Variables
  foodMasterList: FoodBookingList[] = [];
  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Other Variables
  isOpenFilterView = false;
  isOpenHistoryDialog = false;

  // MatPaginator Output
  pageEvent: PageEvent;
  equalJSON = {};
  likeJSON = {};
  inJSON = {};

  tabID = ADMINTABACCESS.FOOD_MODULE;
  tabData: Privilege | any[];
  CreatedFromValue = null;
  CreatedToValue = null;
  locationList: OfficeLocation[] = [];
  userInfo: AdminUser;
  foodTypeList = FOOD_TYPE_LIST;
  todaysdate = new Date();
  userList: AdminUser[] = [];

  get fromField(): AbstractControl {
    return this.filterForm.get('from');
  }

  get toField(): AbstractControl {
    return this.filterForm.get('to');
  }

  get locationField(): AbstractControl {
    return this.filterForm.get('location_id');
  }

  // get form control
  get userId(): AbstractControl {
    return this.filterForm.get('user_id');
  }

  constructor(private _sharedObjService: SharedObjService, private _fb: FormBuilder, public _router: Router, public dialog: MatDialog,
              private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.userInfo = this._sharedService.getUser();
    this.equalJSON = {"user_id": this.userInfo.id};
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.getFoodMasterList(1, 'date', 'desc');
    this.createAdvanceFilterForm();
    this.getLocationList();
    this.getUserList();
  }

  /**
   * Get User List
   */
  getUserList() {
    let params = {};
    if (this.userInfo.designation_id.id === 7) {
      params = {
        'compare': {'equal': {'is_active': 1}}
        , 'or': {
          'equal': [{
            'first_approval_user': this.userInfo.id,
            'second_approval_user': this.userInfo.id,
          }]
        }
      };
    } else {
      params = {
        'compare': {'equal': {'is_active': 1}}
        , 'or': {
          'equal': [{
            'first_approval_user': this.userInfo.id,
            'second_approval_user': this.userInfo.id,
          }]
        }
      };
    }
    this._sharedObjService.getUserList({'records': 'all'}, params).subscribe((response) => {
      this.userList = response;
      this.userList.push(this.userInfo);
    });
  }

  /**
   * Toogle Filter
   */
  onToggleFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName?: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'from') {
      this.CreatedFromValue = null;
    } else if (elementName === 'to') {
      this.CreatedToValue = null;
    } else if (elementName === 'location_id') {
      delete this.inJSON[elementName];
    } else if (elementName === 'user_id') {
      delete this.equalJSON[elementName];
    }
    this.equalJSON = {"user_id": this.userInfo.id};
    this.getFoodMasterList(1, 'date', 'desc');
  }

  /**
   * Location List API
   */
  getLocationList() {
    this._commonCrudService.listData(AdminAPI.LOCATION, {'records': 'all'}, {'compare': {'equal': {'is_food': 1}}}).subscribe(Response => {
      this.locationList = Response.payload.data;
    });
  }

  /**
   * Advance Filter Key Up function
   * @param event
   * @param formValue
   * @param {boolean} isValid
   * @param {boolean} flag
   */
  setAdvanceFilterKeyUp(event, form: FormGroup, flag: boolean) {
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
          'from': form.value['from'],
          'to': form.value['to'],
          'user_id': form.value['user_id'],
          'location_id': form.value['location_id']
        });
      this.setAdvanceFilter(form, false);
    }
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.FOOD_MASTER_LIST, params, this.getSearchParam(), 'Food Menu ', 0).subscribe(response => {
    });
  }

  /**
   * Get Food Master List
   * @param pageNumber
   * @param key
   * @param val
   */
  getFoodMasterList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.BOOK_FOOD_USER_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
      this.foodMasterList = response.payload.data;
      this.page = response.pager.pageNumber;
      this.pageIndex = this.page - 1;
      this.totalRecords = +response.pager.totalRecords;
      this.sortBy = response.pager.sortBy;
      this.sortOrder = response.pager.sortOrder;
    });
  }

  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      user_id: new FormControl(this.userInfo.id),
      from: new FormControl(this.CreatedFromValue),
      to: new FormControl(this.CreatedToValue),
      location_id: new FormControl(null)
    });
    this.advanceFilterForm = this._fb.group({
      user_id: new FormControl(this.userInfo.id),
      from: new FormControl(this.CreatedFromValue),
      to: new FormControl(this.CreatedToValue),
      location_id: new FormControl(null)
    });
  }

  /**
   * Add Food Module Module
   * */

  onAddFoodMenuModule(foodMaster?: FoodMaster) {
    this._sharedService.setClientData(GLOBALDATAKEYS.FOOD_MASTER, null);
    if (foodMaster) {
      this._sharedService.setClientData(GLOBALDATAKEYS.FOOD_MASTER, foodMaster);
    }
    this._router.navigate(['/' + AdminRoutes.ADD_MENU_LIST]);
  }

  onFeedback() {
    this._router.navigate(['/' + AdminRoutes.FOOD_MENU_FEEDBACK]);
  }

  /**
   * On Feedback Menu Review Dialog
   * @param foodMaster
   */
  onFeedbackMenuReviewDialog(foodMasterData: FoodMaster, type: number) {
    const dialogRef = this.dialog.open(FeedbackMenuLunchDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        foodMaster: (foodMasterData) ? foodMasterData : [],
        typeOfView: type
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  /**
   * on delete confirmation dialog
   */
  onDeleteConfirmationDialog(foodMaster: FoodBookingList) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to cancel lunch booking for the selected day?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const params = {};
        params['is_cancel'] = 1;
        params['_method'] = 'put';
        this._commonCrudService.updateDataWithPut(AdminAPI.BOOK_FOOD_USER_LIST, foodMaster.id, params).subscribe((response) => {
          this.getFoodMasterList(1, 'date', 'desc');
        });
      }
    });
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }


// get function for returning pageNumber and page size at time of listing api
  getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    const params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    if (sortKey) {
      params['sortBy'] = sortKey;
    }
    if (sortOrder) {
      params['sortOrder'] = sortOrder;
    }
    return params;
  }

  /**
   * Toogle Filter
   */
  onOpenFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  /**
   * Close filter
   */
  onCloseFilter() {
    this.isOpenFilterView = false;
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getFoodMasterList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.likeJSON = {};
    this.equalJSON = {"user_id": this.userInfo.id};
    this.inJSON = {};
    this.CreatedToValue = null;
    this.CreatedFromValue = null;
    this.getFoodMasterList(1, 'date', 'desc');
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {"user_id": this.userInfo.id};
    this.likeJSON = {};
    this.inJSON = {};
    // removing empty key from object
    for (const key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
          delete form.value[key];
        } else {
          if (flag) {
            this.advanceFilterForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }

    if (form.value['from'] !== '' && form.value['from']) {
      this.CreatedFromValue = form.value['from'];
      delete form.value['from'];
    }
    if (form.value['to'] !== '' && form.value['to']) {
      this.CreatedToValue = form.value['to'];
      delete form.value['to'];
    }

    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'location_id') {
            this.inJSON[key] = form.value[key].join(",");
          } else if (key === 'user_id') {
            this.equalJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilterView = false;
      this.getFoodMasterList(1, 'date', 'desc');
    }
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};

    if (this.CreatedFromValue) {
      filter['greaterthanequal'] = {};
    }
    if (this.CreatedToValue) {
      filter['lessthanequal'] = {};
    }

    if (this.CreatedFromValue) {
      filter['greaterthanequal']['date'] = moment(this.CreatedFromValue).format('YYYY-MM-DD');
    }

    if (this.CreatedToValue) {
      filter['lessthanequal']['date'] = moment(this.CreatedToValue).format('YYYY-MM-DD');
    }

    // check for the object wheather its empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }
    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !CommonFunctions.isEmpty(filter)) {
      params['compare'] = filter;
    }
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }
    return params;
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilterView = false;
    }
  }

  /**
   * Get Food Type
   * @param foodType
   */
  getFoodType(foodType: number): string {
    const val = this.foodTypeList.filter(elem => elem.key === foodType);
    return (val.length) ? val[0].label : '';
  }

  onBookYourLunch() {
    const dialogRef = this.dialog.open(OnbehalfBookLunchDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getFoodMasterList(1, 'date', 'desc');
      }
    });
  }

  compareDate(date: any): number {
    // With Date object we can compare dates them using the >, <, <= or >=.
    // The ==, !=, ===, and !== operators require to use date.getTime(),
    // so we need to create a new instance of Date with 'new Date()'
    const d1 = moment(new Date).format('YYYY-MM-DD');
    const d2 = moment(new Date(date)).format('YYYY-MM-DD');
    console.log(d1, d2);
    // Check if the dates are equal
    // Check if the first is greater than second
    if (d2 >= d1) {
      return 1;
    }

    // Check if the first is less than second
    if (d2 < d1) {
      return -1;
    }
  }
}
