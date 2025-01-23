import {Component, OnInit} from '@angular/core';
import {Clients} from '../../../view-client.model';
import {CLIENTTYPEINFO, basAccrualorcash, basFrequency, bkDoneby, entityType, franchise, GLOBALDATAKEYS, paygFrequency, statementDeliveryPreference, VIEWCLIENTTYPE, yesNo, yesNoNa, yesNoOther, TEAM_TYPE} from '../../../../../../../utility/constants/base-constants';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../../../utility/shared-service/shared-object.service';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {AdminUser} from "../../../../../../../utility/shared-model/admin-user.model";

@Component({
  selector: 'app-view-basic-main',
  templateUrl: './view-basic-main.component.html',
  styleUrls: ['./view-basic-main.component.scss'],
})
export class ViewBasicMainComponent implements OnInit {

  clientData: Clients;
  tab = VIEWCLIENTTYPE.BASIC;
  mainClientResponse = [];
  viewDataArray = [];
  clientList = [];
  userList: AdminUser[] = [];

  constructor(private _sharedService: SharedService, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService) {
  }

  ngOnInit() {
    this.getUserList();
    this.getEntityList();
    this.getClientDataDetail();
  }

  /**
   * get client data
   */
  getClientDataDetail() {
    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    this._commonCrudService.getData(AdminAPI.CLIENT_BASIC, this.clientData.id, {'tab': this.tab}).subscribe(Response => {
      this.handleMainClientResponse(Response);
    });
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.userList = response;
      this.getClientDataDetail();
    });
  }

  getEntityList() {
    this._sharedObjService.getClientList({'records': 'all'}, this.getClientListSearch()).subscribe(Response => {
      this.clientList = Response;
    });
  }

  /**
   *
   * @param response
   */
  handleMainClientResponse(response: any) {
    // assign data to array
    this.mainClientResponse = response.payload.data;
    // console.log(this.mainClientResponse);
    let labelName = '';
    for (let i in this.mainClientResponse) {
      if (i) {
        if (i === 'billing_name') {
          labelName = i;
          i = 'Billing Name';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'parent_name') {
          labelName = i;
          i = 'Parent Trading Name';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'name') {
          labelName = i;
          i = 'Legal Name';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'trading_name') {
          labelName = i;
          i = 'Trading Name';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'contract_signed_date') {
          labelName = i;
          const dataArr = this.mainClientResponse[labelName] ? this.mainClientResponse[labelName].split('-') : [];
          const date = dataArr ? dataArr[2] + '-' + dataArr[1] + '-' + dataArr[0] : '';
          i = 'Contract Signed Date';
          this.viewDataArray.push({'key': i, 'value': date});
        } else if (i === 'entity_writeoff') {
          labelName = i;
          i = 'Client Write Off';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'reviewer_budgeted_unit') {
          labelName = i;
          i = 'Reviewer budgeted unit';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'related_entity') {
          labelName = i;
          i = 'Related entity';
          let labelData = '';
          for (let j = 0; j < yesNo.length; j++) {
            if (yesNo[j].key === this.mainClientResponse[labelName]) {
              labelData = yesNo[j].label;
            }
          }
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'related_entity_id') {
          labelName = i;
          i = 'Select Related Entity';
          let entityName = [];
          const keyName = this.mainClientResponse[labelName];
          const dataNameArray = this.mainClientResponse[labelName] ? this.mainClientResponse[labelName].split(',') : [];

          for (let j in this.clientList) {
            if (j) {
              const data = this.clientList[j].id.toString();
              if (dataNameArray.indexOf(data) !== -1) {
                entityName.push(this.clientList[j].name);
              }
            }
          }
          this.viewDataArray.push({'key': i, 'value': entityName.toString()});

        } else if (i === 'abn_number') {
          labelName = i;
          i = 'ABN number';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'abn_branch_code') {
          labelName = i;
          i = 'ABN Branch Code';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'abn_register_date') {
          labelName = i;
          const dataArr = this.mainClientResponse[labelName] ? this.mainClientResponse[labelName].split('-') : [];
          const date = dataArr ? dataArr[2] + '-' + dataArr[1] + '-' + dataArr[0] : '';
          i = 'Date from when client is registered for ABN';
          this.viewDataArray.push({'key': i, 'value': date});
        } else if (i === 'tfn_number') {
          labelName = i;
          i = 'TFN number';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'business_type') {
          labelName = i;
          i = 'Type of Business';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'entity_type') {
          labelName = i;
          i = 'Type of Entity';
          // this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
          let labelData = '';
          for (let j = 0; j < entityType.length; j++) {
            if (+entityType[j].key === +this.mainClientResponse[labelName]) {
              labelData = entityType[j].label;
            }
          }
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'entity_type_ifother' && (this.mainClientResponse['entity_type'] === 3)) {
          labelName = i;
          i = 'Entity type - Other';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'bk_doneby') {
          labelName = i;
          i = 'Bookkeeping Done By';
          let labelData = '';
          for (let j = 0; j < bkDoneby.length; j++) {
            if (bkDoneby[j].key === this.mainClientResponse[labelName]) {
              labelData = bkDoneby[j].label;
            }
          }
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'bk_doneby_ifother' && (this.mainClientResponse['bk_doneby'] === 3)) {
          labelName = i;
          i = 'Bookkeeping Done By - Other';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'gst_register') {
          labelName = i;
          let labelData = '';
          for (let j = 0; j < yesNo.length; j++) {
            if (yesNo[j].key === this.mainClientResponse[labelName]) {
              labelData = yesNo[j].label;
            }
          }
          i = 'Registered For GST?';
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'gst_register_date') {
          labelName = i;
          i = 'Date from which client is registered for GST';
          const dataArr = this.mainClientResponse[labelName] ? this.mainClientResponse[labelName].split('-') : [];
          const date = dataArr ? dataArr[2] + '-' + dataArr[1] + '-' + dataArr[0] : '';
          this.viewDataArray.push({'key': i, 'value': date});
        } else if (i === 'bas_frequency') {
          labelName = i;
          let labelData = '';
          for (let j = 0; j < basFrequency.length; j++) {
            if (basFrequency[j].key === this.mainClientResponse[labelName]) {
              labelData = basFrequency[j].label;
            }
          }
          i = 'BAS Frequency';
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'bas_accrualorcash') {
          labelName = i;
          let labelData = '';
          for (let j = 0; j < basAccrualorcash.length; j++) {
            if (basAccrualorcash[j].key === this.mainClientResponse[labelName]) {
              labelData = basAccrualorcash[j].label;
            }
          }
          i = 'BAS is on Accrual or Cash?';
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'payg_frequency') {
          labelName = i;
          let labelData = '';
          i = 'PAYG Frequency';
          for (let j = 0; j < paygFrequency.length; j++) {
            if (paygFrequency[j].key === this.mainClientResponse[labelName]) {
              labelData = paygFrequency[j].label;
            }
          }
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'financial_institution_updateon_ato') {
          labelName = i;
          i = 'Financial Institution detail updated on ATO?';
          let labelData = '';
          for (let j = 0; j < yesNoOther.length; j++) {
            if (yesNoOther[j].key === this.mainClientResponse[labelName]) {
              labelData = yesNoOther[j].label;
            }
          }
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'financial_institution_updateon_ato_ifother' && (this.mainClientResponse['financial_institution_updateon_ato'] === 2)) {
          labelName = i;
          i = 'Financial Institution detail - Other';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'statement_delivery_preference') {
          labelName = i;
          i = 'Activity statement delivery preference';
          let labelData = '';
          for (let j = 0; j < statementDeliveryPreference.length; j++) {
            if (statementDeliveryPreference[j].key === this.mainClientResponse[labelName]) {
              labelData = statementDeliveryPreference[j].label;
            }
          }
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'entity_registerfor_fbt') {
          labelName = i;
          i = 'Is this client registered for FBT?';
          let labelData = '';
          for (let j = 0; j < yesNoNa.length; j++) {
            if (yesNoNa[j].key === this.mainClientResponse[labelName]) {
              labelData = yesNoNa[j].label;
            }
          }
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'entity_registerfor_fueltaxcredit') {
          labelName = i;
          i = 'Is this client registered for fuel Tax Credit?';
          let labelData = '';
          for (let j = 0; j < yesNoNa.length; j++) {
            if (yesNoNa[j].key === this.mainClientResponse[labelName]) {
              labelData = yesNoNa[j].label;
            }
          }
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'group_client_belongsto') {
          labelName = i;
          i = 'Group client belongs to?';
          let labelData = '';
          const dataKey = this.mainClientResponse[labelName];
          this._commonCrudService.listData(AdminAPI.CLIENT_BELONGSTO, {'records': 'all'}).subscribe(Response => {
            for (let data of Response.payload.data) {
              if (data) {
                if (data.id === dataKey) {
                  labelData = data.name;
                  this.viewDataArray.push({'key': i, 'value': labelData});
                }
              }
            }
          });
        } else if (i === 'franchise') {
          labelName = i;
          i = 'Franchise';
          let labelData = '';
          for (let j = 0; j < franchise.length; j++) {
            if (franchise[j].key === this.mainClientResponse[labelName]) {
              labelData = franchise[j].label;
            }
          }
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'website') {
          labelName = i;
          i = 'Website';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'xero_email_id') {
          labelName = i;
          i = 'Xero Email ID';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'myob_email_id') {
          labelName = i;
          i = 'Myob Email ID';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'is_dashboard') {
          labelName = i;
          i = 'Is Client console visible to client?';
          let labelData = '';
          for (let j = 0; j < yesNoNa.length; j++) {
            if (yesNoNa[j].key === this.mainClientResponse[labelName]) {
              labelData = yesNoNa[j].label;
            }
          }
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'user_signature') {
          labelName = i;
          i = 'User Signature';
          // console.log(this.userList, this.mainClientResponse[labelName]);
          const userInfo = this.userList.filter(item => item.id === Number(this.mainClientResponse[labelName]));
          const labelData = (userInfo && userInfo.length) ? userInfo[0].userfullname : '';
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'entity_business_type') {
          labelName = i;
          i = 'Business Type';
          let labelData = '';
          for (let j = 0; j < CLIENTTYPEINFO.length; j++) {
            if (CLIENTTYPEINFO[j].key === Number(this.mainClientResponse[labelName])) {
              labelData = CLIENTTYPEINFO[j].label;
            }
          }
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'dashboard_reason') {
          labelName = i;
          i = 'Reason to not display dashboard to client';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
        } else if (i === 'is_parent') {
          labelName = i;
          i = 'Parent Entity?';
          let labelData = '';
          for (let j = 0; j < yesNoNa.length; j++) {
            if (yesNoNa[j].key === this.mainClientResponse[labelName]) {
              labelData = yesNoNa[j].label;
            }
          }
          this.viewDataArray.push({'key': i, 'value': labelData});
        } else if (i === 'parent_id') {
          labelName = 'parent_entity';
          i = 'Select Parent Entity';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
         /* let entityName = [];
          const keyName = this.mainClientResponse[labelName];
          const dataNameArray = this.mainClientResponse[labelName] ? this.mainClientResponse[labelName].split(',') : [];

          for (let j in this.clientList) {
            if (j) {
              const data = this.clientList[j].id.toString();
              if (dataNameArray.indexOf(data) !== -1) {
                entityName.push(this.clientList[j].name);
              }
            }
          }
          this.viewDataArray.push({'key': i, 'value': entityName.toString()});
          */
        } else if(i === 'team_type') {
          labelName = i;
          i = 'Team Type';
          const data = TEAM_TYPE.find(element => element.key === this.mainClientResponse[labelName]);
          this.viewDataArray.push({'key': i, 'value': data.label});
        } else if(i === 'feedback_assignee') {
          labelName = i;
          i = 'Feedback Assignee';
          this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName].userfullname});
        }
      }
    }
  }

  /**
   * Get Client List for Related Entity
   * @returns {{}}
   */
  getClientListSearch() {
    const params = {};
    const filter = {};
    filter['notequal'] = {'discontinue_stage': 2};
    params['compare'] = filter;
    return params;
  }
}
