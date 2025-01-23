import {Component, Inject, OnInit} from '@angular/core';
import {ValidationConstantMessage} from "../../../../../utility/validation";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminUser} from "../../../../../utility/shared-model/admin-user.model";
import {OfficeLocation} from "../../../../../utility/shared-model/designation.model";
import {FoodMaster} from "../../../../../utility/shared-model/food.model";
import {FOOD_TYPE_LIST} from "../../../../../utility/constants/base-constants";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {SharedService} from "../../../../../utility/shared-service/shared.service";
import {Router} from "@angular/router";
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import {AdminAPI} from "../../../../../utility/constants/api";
import {AdminRoutes} from "../../../../../utility/constants/admin-route";
import * as moment from "moment";
import {BaseComponent} from "../../../../../utility/components/base/base.component";
import {SharedObjService} from "../../../../../utility/shared-service/shared-object.service";

@Component({
  selector: 'app-onbehalf-book-lunch-dialog',
  templateUrl: './onbehalf-book-lunch-dialog.component.html',
  styleUrls: ['./onbehalf-book-lunch-dialog.component.scss']
})

export class OnbehalfBookLunchDialogComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  addFoodForm: FormGroup;
  userInfo: AdminUser;
  locationList: OfficeLocation[] = [];
  foodMasterList: FoodMaster;
  foodTypeList = FOOD_TYPE_LIST;
  userList: AdminUser[] = [];
  endDateValue = new Date();
  startDateValue = new Date();

  constructor(public dialogRef: MatDialogRef<OnbehalfBookLunchDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _sharedService: SharedService, private _fb: FormBuilder, private _router: Router, private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService
  ) {
    super();
  }

  ngOnInit() {
    const startDate = new Date();
    this.startDateValue = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1);
    this.endDateValue = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1);
    this.userInfo = this._sharedService.getUser();
    this.createAddFoodForm();
    this.getLocationList();
    this.getUserList();
  }

  getMenuList(value: number) {
    const menuDate = moment(this.addFoodForm.get("date").value).format("YYYY-MM-DD");
    this.addFoodForm.get("food_menu_id").setValue(null);
    this.addFoodForm.get("food_menu_id").updateValueAndValidity();
    this._commonCrudService.listData(AdminAPI.FOOD_MASTER_LIST, {}, {'compare': {'equal': {'location_id': value, 'date': menuDate}}}).subscribe((response) => {
      this.foodMasterList = (response.payload.data && response.payload.data.length) ? response.payload.data[0] : [];
      if (this.foodMasterList && this.foodMasterList.id > 0) {
        this.addFoodForm.get("food_menu_id").setValue(this.foodMasterList.id);
        this.addFoodForm.get("food_menu_id").updateValueAndValidity();
      }
    });
  }

  /**
   * Location List API
   */
  getLocationList() {
    this._commonCrudService.listData(AdminAPI.LOCATION, {'records': 'all'}, {'compare': {'equal': {'is_food': 1}}}).subscribe(Response => {
      this.locationList = Response.payload.data;
    });
  }

  onAwardMater() {
    this._router.navigate([AdminRoutes.AWARD_MASTER]);
  }

  createAddFoodForm() {
    this.addFoodForm = this._fb.group({
      date: new FormControl(this.userInfo.food_next_date, Validators.required),
      food_menu_id: new FormControl(null, Validators.required),
      location_id: new FormControl(null, Validators.required),
      food_type: new FormControl(1, Validators.required),
      user_id: new FormControl(null, Validators.required)
    });
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }


  /** On Submit Form
   * @param form
   */
  onSubmit(form: FormGroup) {
    if (form.valid) {
      form.value['date'] = moment(this.addFoodForm.get('date').value).format('YYYY-MM-DD');
      this._commonCrudService.addData(AdminAPI.BOOK_FOOD, form.value).subscribe((response) => {
        this.onClose();
      });
    }
  }

  onClose(): void {
    this.dialogRef.close();
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
    });
  }
}
