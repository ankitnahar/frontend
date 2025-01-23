import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {MatAutocompleteSelectedEvent, MatDialog} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Department, Designation, Team} from '../../../../../../utility/shared-model/designation.model';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {TEAMDESIGNATIONWISE} from './hierarchy.module';
import {GLOBALDATAKEYS, OTHERRIGHTS, staffAssignInOtherModule, ToastType} from '../../../../../../utility/constants/base-constants';
import {isUndefined} from 'util';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {Services} from '../../../../../../utility/shared-model/services.model';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {HierarchyViewUserListDialogComponent} from './hierarchy-view-user-list-dialog/hierarchy-view-user-list-dialog.component';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss'],
  providers: [CommonCrudService]
})

export class HierarchyComponent extends BaseComponent implements OnInit {
  // Angular Variables
  @ViewChild('teamInput') teamInput: ElementRef;

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  otherRights = OTHERRIGHTS;
  allocateInOtherModule = staffAssignInOtherModule;

  // Form Group Variables
  hierarchyForm: FormGroup;

  // Data  Variables
  serviceList: Services[] = [];
  designationList: Designation[] = [];
  departmentList: Department[] = [];
  teamList: Team[] = [];
  teamArray: Team[] = [];
  user: AdminUser = null;
  userList: AdminUser[] = [];
  writeOffUserList: AdminUser[] = [];
  designationTeamList: Team[] = [];
  userHierarchy = [];
  userHierarchyData = [];
  teams = [];
  allTeams: any[] = [];
  teamDeisgnationWise: TEAMDESIGNATIONWISE[] = [];
  userDesignationWise = {};
  isParent = [];

  // Other Variables
  separatorKeysCodes = [ENTER, COMMA];
  removable = true;

  constructor(private _fb: FormBuilder, private _sharedService: SharedService, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService, public dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    this.user = this._sharedService.getClientData(GLOBALDATAKEYS.USERS);
    this.getServices();
    this.getDesignationList();
    this.getUserList();
    this.getDepartmentList();
    this.getTeamList();
    this.getUserHierarchyData();
    this.createHierarchyForm();
    this.initializationMethod();

    const value = {
      url: AdminAPI.ADMIN_USER_HISTORY + '/' + this.user.id,
      params: {'type': 'user_hierarchy'},
    };
    this._sharedService.setHistoryURL(value);
  }

  // Initialization Method
  initializationMethod() {
    this.allTeams = ['Sales Support India', 'IT Development', 'IT Maintenance'];
  }

  // create hierarchy Form
  createHierarchyForm() {
    // debugger;
    this.hierarchyForm = this._fb.group({
      department_id: new FormControl(this.user ? (this.user.department_id ? this.user.department_id.id : '') : '', <any> Validators.required),
      designation_id: new FormControl(this.user ? (this.user.designation_id ? this.user.designation_id.id : '') : '', <any> Validators.required),
      teamId: new FormControl('', <any> Validators.required),
      other_right: new FormControl(this.user['other_right'] ? this.getArrayToString(this.user['other_right'], ',') : []),
      first_approval_user: new FormControl((this.user.first_approval_user > 0) ? this.user.first_approval_user : null, <any> Validators.required),
      second_approval_user: new FormControl((this.user.second_approval_user > 0) ? this.user.second_approval_user : null),
      timesheet_approval_user: new FormControl(this.user.timesheet_approval ? this.user.timesheet_approval.id : null),
      writeoffstaff: new FormControl((this.user.writeoffstaff > 0) ? this.user.writeoffstaff : null),
    });
    if (this.user.department_id.id > 0) {
      this.onChangeDepartment(this.user.department_id);
    }
  }

  /**
   * Get User Hierarchy Data
   */
  getUserHierarchyData() {
    this._commonCrudService.getData(AdminAPI.USER_HIERARCHY_SHOW, this.user.id).subscribe(response => {
      if (response.payload.data.parent_user_id) {
        this.userHierarchy = response.payload.data.parent_user_id;
        this.userHierarchyData = response.payload.data[0];
        this.isParent = (response.payload.parent) ? response.payload.parent : [];
        this.hierarchyForm.get('first_approval_user').setValue((this.userHierarchyData['first_approval_user'] > 0) ? this.userHierarchyData['first_approval_user'] : null);
        this.hierarchyForm.get('second_approval_user').setValue((this.userHierarchyData['second_approval_user'] > 0) ? this.userHierarchyData['second_approval_user'] : null);
        this.hierarchyForm.get('timesheet_approval_user').setValue((this.userHierarchyData['timesheet_approval_user'] > 0) ? this.userHierarchyData['timesheet_approval_user'] : null);
      }
    });
  }

  /**
   * Get Service For Generate Invoice
   */
  getServices() {
    this._sharedObjService.getServices({'compare': {'equal': {'parent_id': 0}}}, {}).subscribe((response) => {
      if (response) {
        this.serviceList = response;
        if (this.userHierarchyData['other_right']) {
          const otherRights = this.getArrayToString(this.userHierarchyData['other_right'], ',');
          this.hierarchyForm.get('other_right').setValue(otherRights);
        }
      }
    });
  }

  // Listing API for Department , designation and Team with filter of records all
  // API Call
  getDesignationList() {
    this._sharedObjService.getDesignationList({records: 'all'}).subscribe(response => {
      this.designationList = response;
      this.createHierarchyForm();
    });
  }

  getDepartmentList() {
    this._commonCrudService.listData(AdminAPI.DEPARTMENT, {'records': 'all'}).subscribe(Response => {
      this.departmentList = Response.payload.data;
    });
  }

  getTeamList() {
    this._sharedObjService.getTeamList({records: 'all'}, {}).subscribe(response => {
      this.teamList = response;
      this.teamArray = this.teamList;
    });
  }

  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe(Response => {
      this.userList = Response;
      this.hierarchyForm.patchValue({'first_approval_user': (this.user.first_approval_user > 0) ? this.user.first_approval_user : null});
    });

    this._commonCrudService.listData(AdminAPI.ADMIN_USER, {}, this.getDesignationParam()).subscribe(userData => {
      this.writeOffUserList = userData.payload.data;
    });
  }

  // Events
  // get team on chnage event of department.
  onChangeDepartment(value) {
    if (value) {
      this._commonCrudService.listData(AdminAPI.TEAM_DEPARTMENT_WISE + '/' + value.id, {}, {}).subscribe(Response => {
        this.designationTeamList = Response.payload.data;
        if (this.designationTeamList.length) {
          this.teamArray = [];
          if (this.user.designation_id) {
            this.getUserDesignationWise(this.user.designation_id);
          }
          if (this.userHierarchyData['team_id']) {
            const teamRights = this.getArrayToString(this.userHierarchyData['team_id'], ',');
            this.hierarchyForm.get('teamId').setValue(teamRights);
          }
        }
        this.teamList.map(item => {
          let flag = 0;
          this.designationTeamList.map(team => {
            if (+item.id === +team.id) {
              flag = 1;
            }
          });
          if (flag === 0) {
            this.teamArray.push(item);
          }
        });
      });

      if (value === 1 || value === 5) {
        this.hierarchyForm.get('writeoffstaff').setValidators(Validators.required);
      } else {
        this.hierarchyForm.get('writeoffstaff').setValidators(null);
        this.hierarchyForm.get('writeoffstaff').setErrors(null);
      }
    }
  }

  /**
   * On Change Team
   */
  onChangeTeam() {
    const userTeamDesignation = this.hierarchyForm.get('designation_id').value;
    if (userTeamDesignation) {
      const TeamDesignation = {'id': userTeamDesignation};
      this.getUserDesignationWise(TeamDesignation);
    }
  }

  getUserDesignationWise(value) {
    this.teamDeisgnationWise.map(control => {
      this.hierarchyForm.removeControl(control.id.toString());
    });
    if (this.designationTeamList.length) {
      this._commonCrudService.listData(AdminAPI.TEAM_DESIGNATION_WISE + '/' + value.id, {}, {}).subscribe(teamData => {
        this.teamDeisgnationWise = teamData.payload.data;
        this.teamDeisgnationWise.map(item => {
          if (item.Seq === 0) {
            this.teamDeisgnationWise.splice(this.teamDeisgnationWise.indexOf(item));
          }
        });
        this.teamDeisgnationWise = this.teamDeisgnationWise.sort(function (a, b) {
          return b.Seq - a.Seq;
        });
        this.createGroup();
        this.getUserTeamDesignationWise(0);
      });
    } else {
      this._sharedService.setToastMessage('Please select team', ToastType.ERROR);
    }
  }

  getUserTeamDesignationWise(index: number, parentId?: any) {
    // console.log(parentId.id);
    const parentData = (parentId) ? parentId.id : null;
    if (this.teamDeisgnationWise[index]) {
      const teamDeisgnationWise = this.teamDeisgnationWise[index];
      this._commonCrudService.listData(AdminAPI.USER_LIST_DEISGNATION_WISE, this.getQueryParams(this.teamDeisgnationWise[index].id, parentData)).subscribe(Response => {
        this.userDesignationWise[teamDeisgnationWise.id] = Response.payload.data;
      });
    }
  }

  getQueryParams(designationId: number, parentUserID: number) {
    const id = [];
    this.designationTeamList.map(item => {
      id.push(item.id);
    });
    const teamIDs = this.hierarchyForm.get('teamId').value;
    const params = {
      'team_id': (teamIDs) ? teamIDs.join(',') : null,
      'designation_id': designationId
    };
    if (!isUndefined(parentUserID)) {
      params['parent_user_id'] = parentUserID;
    }
    return params;

  }

  getDesignationParam() {
    return {
      'in': {'designation_id': '62,63'}
    };
  }

  createGroup() {
    let i = 0;
    this.teamDeisgnationWise.forEach(control => {
      i = i + 1;
      this.hierarchyForm.addControl(control.id.toString(), new FormControl());
      // this.hierarchyForm.get(control.id.toString()).setValue(0);
      const parent_selected_id = control.id;
      const selectedData = (this.userHierarchy[parent_selected_id]) ? this.userHierarchy[parent_selected_id] : 0;
      const labelD = control.id.toString();
      // console.log(labelD);
      // console.log(selectedData);
      // console.log(this.userHierarchy);
      if (this.hierarchyForm.get(labelD)) {
        this.hierarchyForm.patchValue({[labelD]: selectedData});
        this.getUserTeamDesignationWise(i, selectedData);
      }
    });
  }

  onSubmitHierarchyForm(formParams, isValid) {
    if (isValid) {
      const designationTeamId = formParams['teamId'];
      formParams['team_id'] = designationTeamId;
      formParams['_method'] = 'put';
      if (this.isParent.length) {
        formParams['designation_id'] = this.hierarchyForm.get('designation_id').value;
      }
      // remove empty key from object
      for (const key in formParams) {
        if (formParams[key] === null || formParams[key] === '' || formParams[key] === undefined) {
          // delete formParams[key];
          formParams[key] = '';
        }
      }
      this._commonCrudService.updateData(AdminAPI.USER_HIERARCHY, this.user.id, formParams).subscribe(response => {
        this._commonCrudService.listData(AdminAPI.ADMIN_USER, {'records': 'all'}, {'compare': {'equal': {'id': this.user.id}}}).subscribe(responseData => {
          if (responseData) {
            this.user = null;
            this._sharedService.setClientData(GLOBALDATAKEYS.USERS, responseData.payload.data[0]);
            this.user = this._sharedService.getClientData(GLOBALDATAKEYS.USERS);
            this.getServices();
            this.getDesignationList();
            this.getUserList();
            this.getDepartmentList();
            this.getTeamList();
            this.getUserHierarchyData();
            this.createHierarchyForm();
          }
        });
      });
    }
  }

  remove(teamName: any): void {
    this.designationTeamList.map(item => {
      if (item.team_name === teamName) {
        this.designationTeamList.splice(this.designationTeamList.indexOf(item), 1);
        this.teamArray.push(item);
      }
    });
  }

  filter(name: string) {
    return this.teamList.filter(team =>
      team.team_name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const data = event.option.value;
    this.teamArray.map(item => {
      if (item.team_name === data.team_name) {
        this.teamArray.splice(this.teamArray.indexOf(item), 1);
        this.designationTeamList.push(data);
      }
    });
    this.hierarchyForm.get('teamId').setValue(event.option.value);
  }

  /**
   * Get Array From String
   * @param value
   * @param seperator
   */
  getArrayToString(value: any, seperator: string) {
    if (value !== '') {
      const valueOne = [];
      value.split(seperator).map(item => {
        valueOne.push(Number(item));
      });
      return valueOne;
    }
  }

  /**
   * Check to show befree write off
   */
  checkIsBefreeWriteOff() {
    if (this.hierarchyForm.get('department_id').value === 1 || this.hierarchyForm.get('department_id').value === 5) {
      if (this.hierarchyForm.get('designation_id').value === 9 || this.hierarchyForm.get('designation_id').value === 10 || this.hierarchyForm.get('designation_id').value === 14 || this.hierarchyForm.get('designation_id').value === 60 || this.hierarchyForm.get('designation_id').value === 61) {
        this.hierarchyForm.get('designation_id').setValidators(<any> Validators.required);
        this.hierarchyForm.get('designation_id').updateValueAndValidity();
        return true;
      } else {
        this.hierarchyForm.get('designation_id').setValidators(null);
        this.hierarchyForm.get('designation_id').updateValueAndValidity();
        return false;
      }
    } else {
      this.hierarchyForm.get('designation_id').setValidators(null);
      this.hierarchyForm.get('designation_id').updateValueAndValidity();
      return false;
    }
  }

  /**
   * on view user dialog
   */
  onViewUser() {
    const dialogRef = this.dialog.open(HierarchyViewUserListDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        userList: this.isParent
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
