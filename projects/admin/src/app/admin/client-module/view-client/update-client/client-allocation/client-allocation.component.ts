import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Designation} from '../../../../../../utility/shared-model/designation.model';
import {Clients} from '../../view-client.model';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';
import {GLOBALDATAKEYS} from '../../../../../../utility/constants/base-constants';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {isUndefined} from 'util';
import {MatAutocompleteSelectedEvent} from '@angular/material';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';

export enum Views {
  HISTORY_MODAL
}

export interface RoleName {
  name: string;
}

@Component({
  selector: 'app-client-allocation',
  templateUrl: './client-allocation.component.html',
  styleUrls: ['./client-allocation.component.scss'],
})
export class ClientAllocationComponent extends BaseComponent implements OnInit {

  @ViewChild('userInput') userInput: ElementRef;
  @Input() tabInformation: any;
  // Constant Variables
  enumView = Views;
  activeView: Views;

  // Allocation role array varialbes
  clientData: Clients = null;
  clientInfo: any;
  designationList: Designation[] = [];
  designationIdList = [];
  userDesignationWise = {};
  inJSON = {};
  entityAllocationList = [];
  entityAllocation = {};
  clientTeamList = [];
  // otherRights = OTHERRIGHTS;
  selectedUserList: AdminUser[] = [];
  selectedOtherUserList = [];
  userList: AdminUser[] = [];
  otherUserListData: AdminUser[] = [];
  otherRights: any[];
  // Other Variables
  separatorKeysCodes = [ENTER, COMMA];
  removable = true;

  // FormGroup varialbes
  clientForm: FormGroup;
  group: any;

  constructor(private _fb: FormBuilder, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService, private _sharedObjService: SharedObjService) {
    super();
  }

  ngOnInit() {
    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    this.otherRights = this.tabInformation;
    // console.log(this.otherRights);
    this.getDesignationList();
    const value = {
      url: AdminAPI.CLIENT_ALLOCATION_HISTORY + '/' + this.clientData.id,
      params: {},
      searchParams: {},
    };
    this._sharedService.setHistoryURL(value);
  }

  /**
   * Create client form method
   */
  createClientForm() {
    this.group = this._fb.group({});
    this.clientForm = this.addClient();
  }

  /**
   * Designation List API.
   */
  getDesignationList() {
    this._sharedObjService.getDesignationList(this.getSearchParam()).subscribe(response => {
      this.handleDesignationResponse(response);
    });
  }

  handleDesignationResponse(response) {
    /**
     * only those designation comes whose is_display_in_allocation flag is true
     */
    response.map(item => {
      if (item.is_display_in_allocation) {
        this.designationList.push(item);
        this.designationIdList.push(item.id);
      }
    });
    this.inJSON['designation_id'] = this.designationIdList.join();

    this.createClientForm();
    this.clientTeamList = [];
    /**
     * generate dynamic user list dropsown for the designation wise team.
     * and generate only those team column for which user has rights.
     */
    this.otherRights.map(item => {
      // if (this.entityAllocationList[item.service_id]) {
      // console.log(item.service_id);
      this.clientTeamList.push(item.service_id);
      let i = 1;
      // console.log(item.group_name);
      this.designationList.forEach(control => {
        this.group.addControl((item.group_name + '_' + i).toString(), this._fb.control(null));
        i++;
      });
      // }
    });
    this.getEntityAllocationList();
    this.getUserList();
  }

  /**
   /**
   * handle entity allocation list API for designation wise user.
   */
  getEntityAllocationList() {
    this._commonCrudService.listData(AdminAPI.ENTITY_ALLOCATION_LIST + '/' + this.clientData.id, {}, {}).subscribe(Response => {
      this.handleEntityAllocationResponse(Response);
    });
  }

  handleEntityAllocationResponse(response) {
    this.entityAllocation = response.payload.data;
    if (response.payload.data['allocation_json']) {
      this.entityAllocationList = JSON.parse(response.payload.data['allocation_json']);
      this.getUserTeamDesignationWise();
    }
  }

  /**
   * get user designation and team wise.
   */

  getUserTeamDesignationWise() {
    this.otherRights.map(item => {
      if (this.entityAllocationList[item.service_id]) {
        let i = 1;
        this.entityAllocationList[item.service_id].forEach(user => {
          this.designationList.map(designation => {
            if (Number(designation.id) === Number(user.designation_id)) {
              // console.log(user);
              // console.log(designation);
              // debugger
              if (Number(user.user_id) > 0) {
                this.clientForm.controls[(item.group_name + '_' + i)].setValue(Number(user.user_id));
                this.clientForm.controls[(item.group_name + '_' + i)].patchValue(Number(user.user_id));
                this.clientForm.controls[(item.group_name + '_' + i)].updateValueAndValidity();
              } else {
                this.clientForm.controls[(item.group_name + '_' + i)].setValue(null);
                this.clientForm.controls[(item.group_name + '_' + i)].updateValueAndValidity();
              }
              // console.log(this.clientForm.controls[(item.group_name + '_' + i)]);
            } else {
              // this.clientForm.controls[(item.group_name + '_' + i)].setValue(null);
              // this.clientForm.controls[(item.group_name + '_' + i)].patchValue(null);
              // this.clientForm.controls[(item.group_name + '_' + i)].updateValueAndValidity();
            }
          });
          i++;
        });
      }
    });
  }

  /** user change event for the get user list for the next level of user and fill it designation and team wise.
   * @param designation
   * @param index
   * @param team
   * @param parentId
   */
  getUserByTeam(designation: Designation, index: number, team: any, parentId?: any) {
    // console.log(designation);
    const designationId = (designation) ? designation.id : 0;
    this._commonCrudService.listData(AdminAPI.USER_LIST_DEISGNATION_WISE, this.getQueryParams(designationId, team.service_id, parentId.id), {}).subscribe(Response => {
      // console.log(Response);
      this.userDesignationWise[team.group_name + '_' + (index + 1)] = [];
      this.userDesignationWise[team.group_name + '_' + (index + 1)] = Response.payload.data;
    });
  }

  /**
   * all user comes in others  . because we are not generating some designation for some user role.
   * so that those user goes into other.
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, this.getUserSearchParam()).subscribe((response) => {
      this.userList = response;
      // console.log(this.userList);
      // });
      // this._clientAllocationService.getList(AdminAPI.ADMIN_USER, {"records": "all"}, this.getUserSearchParam()).subscribe(Response => {
      // this.userList = Response.payload.data;
      let i = 0;
      this.designationList.map(designation => {
        this.otherRights.map(team => {
          const userarray = [];
          this.userList.map(user => {
            // user.team_id.split(',').indexOf(team.service_id.toString()) !== -1
            // console.log(user.designation_id.id, designation.id, user.team_id.split(',').indexOf(team.service_id.toString()));
            if (+user.designation_id.id === +designation.id && user.team_id.split(',').indexOf(team.service_id.toString()) !== -1) {
              userarray.push(user);
            }
            // console.log(user, team);
            this.userDesignationWise[team.group_name + '_' + (i + 1)] = userarray;
            // console.log(this.userDesignationWise[team.group_name + '_' + (i + 1)]);
          });
        });
        i++;
      });
      this.getUserTeamDesignationWise();
    });

    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.otherUserListData = response;
      if (this.entityAllocation['other']) {
        this.entityAllocation['other'] = this.entityAllocation['other'].split(',');
        this.otherUserListData.map(user => {
          this.entityAllocation['other'].map(selectedUser => {
            if (+selectedUser === +user.id) {
              this.selectedOtherUserList.push(user.id);
            }
          });
        });
        this.clientForm.get('other').setValue(this.selectedOtherUserList);
      }
    });
    // this.getUserTeamDesignationWise();
  }

  /**
   * Push form control
   */
  addClient() {
    let i;
    this.designationList.forEach(control => {
      i = this.designationList.indexOf(control) + 1;
      this.group.addControl(('designation_' + i).toString(), this._fb.control(control.id));
    });
    this.group.addControl('other', this._fb.control(null));
    return this.group;
  }

  /**
   * submit the client allocation
   * @param formValue
   */
  onClientSubmit(formValue: any) {
    let formData = [];
    const allocationData = {};
    this.otherRights.map(rights => {
        formData = [];
        for (const key in formValue) {
          if (formValue.hasOwnProperty(key)) {
            let index;
            if (key.split('_')[0] === rights.group_name) {
              index = key.split('_')[1];
              // if (this.clientForm.get(key).value) {
              formData.push({
                'designation_id': this.clientForm.get('designation_' + index).value,
                'user_id': (this.clientForm.get(key).value > 0) ? this.clientForm.get(key).value : null
              });
              // }
            }
          }
        }
        if (formData.length) {
          allocationData[rights.service_id] = formData;
        } else {
          // delete allocationData[rights.service_id];
        }
      }
    );
    const finalJSON = {};
    if (allocationData !== {}) {
      finalJSON['allocation_json'] = JSON.stringify(allocationData);
    }
    if (this.selectedOtherUserList.length) {
      // const otherUserList = [];
      // this.selectedOtherUserList.map(user => {
      //   otherUserList.push(user.id);
      // });
      finalJSON['other'] = this.selectedOtherUserList.join();
    }
    // console.log(formData);
    this._commonCrudService.updateData(AdminAPI.ENTITY_ALLOCATION_LIST, this.clientData.id, finalJSON).subscribe(Response => {
      // this.selectedOtherUserList = [];
      // this.getEntityAllocationList();
      this.designationList = [];
      this.getDesignationList();
    });
  }

  /**
   * remove the selcted user for array in chip
   * @param user
   */
  remove(user: AdminUser): void {
    this.selectedUserList.map(item => {
      if (+item.id === +user.id) {
        this.selectedUserList.splice(this.selectedUserList.indexOf(item), 1);
        this.userList.push(item);
      }
    });
  }

  filter(name: string) {
    return this.selectedUserList.filter(user =>
      user.userfullname.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const data = event.option.value;
    this.userList.map(item => {
      if (item.userfullname === data.userfullname) {
        this.userList.splice(this.userList.indexOf(item), 1);
        this.selectedUserList.push(data);
      }
    });
    this.clientForm.get('other').setValue(event.option.value);
  }

  getQueryParams(designationId: number, teamId: number, parentUserID: number) {
    const params = {
      'team_id': teamId,
      'designation_id': designationId
    };
    if (!isUndefined(parentUserID)) {
      params['parent_user_id'] = parentUserID;
    }
    return params;
  }

  getSearchParam() {
    return {
      'records': 'all',
      'sortBy': 'sort_order',
      'sortOrder': 'asc'
    };
  }

  getUserSearchParam() {
    const params = {};
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }
    if (this.clientTeamList.length) {
      params['findinset'] = {'team_id': this.clientTeamList};
    }
    return params;
  }

  onSelectUserUpdate(selectedData: any) {
    if (selectedData) {
      this.selectedOtherUserList = selectedData.map(x => x.id);
    }
  }
}
