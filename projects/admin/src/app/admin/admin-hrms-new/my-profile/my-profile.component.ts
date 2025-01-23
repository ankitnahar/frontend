import {Component, OnInit} from '@angular/core';
import {AdminUser, UserInfoZoho} from "../../../../utility/shared-model/admin-user.model";
import {SharedUserService} from "../../../../utility/shared-service/shared-user.service";
import {AdminAPI} from "../../../../utility/constants/api";
import {CommonCrudService} from "../../../../utility/shared-service/common-crud.service";
import {Designation} from "../../../../utility/shared-model/designation.model";
import {SharedObjService} from "../../../../utility/shared-service/shared-object.service";
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {BASE} from "../../../../utility/constants/base-constants";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  userData: AdminUser;
  userDetails: UserInfoZoho;
  image_url = 'assets/images/user.png';
  userHierarchy = [];
  userHierarchyData = [];
  userList: AdminUser[] = [];
  designationList: Designation[] = [];
  designationListForDisplay: Designation[] = [];
  imagePath = BASE.IMAGE_PATH;
  constructor(private _sharedObjService: SharedObjService, private _sharedUserService: SharedUserService, public _router: Router, private _commonCrudService: CommonCrudService,) {
  }

  ngOnInit() {
    this.userData = this._sharedUserService.getUser();
    this.getUserList();
    if (this.userData && this.userData.id > 0) {
      this.getUserDetail(this.userData.user_bio_id);
      this.getUserHierarchyData();
    }
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.userList = response;
    });
  }

  /**
   * Designation List API.
   */
  getDesignationList() {
    this._sharedObjService.getDesignationList(this.getSearchParam()).subscribe(response => {
      const itemNew = this.userHierarchy;
      this.designationList = response.filter(function (array_el) {
        return itemNew.filter(function (anotherOne_el) {
          return Number(anotherOne_el) === array_el.id;
        }).length > 0;
      });
    });
  }

  getSearchParam() {
    return {
      'records': 'all',
      'sortBy': 'sort_order',
      'sortOrder': 'asc'
    };
  }

  getUserDetail(userId: number) {
    this._commonCrudService.getData(AdminAPI.ADMIN_USER_PROFILE_INFO, userId).subscribe(response => {
      this.userDetails = response.payload.data;
    });
  }

  /**
   * Get User Hierarchy Data
   */
  getUserHierarchyData() {
    this._commonCrudService.getData(AdminAPI.USER_HIERARCHY_SHOW, this.userData.id).subscribe(response => {
      if (response.payload.data.parent_user_id) {
        this.userHierarchy = Object.keys(response.payload.data.parent_user_id);
        this.getDesignationList();
        this.userHierarchyData = Object.entries(response.payload.data.parent_user_id);
      }
    });
  }

  /**
   * Get User Info
   * @param designation_id
   */
  getUserInfo(designation_id: number, returnName: string, innerName?: string) {
    let  returnValue = "";
    const userId = this.userHierarchyData.filter((x) => Number(x[0]) === designation_id);
    if (userId.length) {
      const userInfo = this.userList.filter(item => item.id === Number(userId[0][1]));
      returnValue = (userInfo.length) ? innerName ? userInfo[0][returnName][innerName] : userInfo[0][returnName] : "";
    }
    return returnValue;
  }
  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
