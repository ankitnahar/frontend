import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ValidationConstantMessage} from '../../../../../../../utility/validation';
import {Clients} from '../../../view-client.model';
import {AgreedChildTabs, AgreedTabs, DYNAMICFIELDS} from '../main.model';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {FIELDTYPE, GLOBALDATAKEYS} from '../../../../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {ClientInfoServicesNotesDialogComponent} from '../../../client-info-services-notes-dialog/client-info-services-notes-dialog.component';
import {MatDialog} from '@angular/material';
import {DecodeHtmlEntities} from '../../../../../../../utility/pipe/checkEmpty.pipe';

@Component({
  selector: 'app-bookkeeping-main',
  templateUrl: './bookkeeping-main.component.html',
  styleUrls: ['./bookkeeping-main.component.scss'],
  providers: [DecodeHtmlEntities]
})
export class BookkeepingMainComponent extends BaseComponent implements OnInit {

  // Angular variables
  @Input() tab: AgreedTabs;

  // Data related variables
  clientData: Clients = null;
  tabChildData: AgreedChildTabs[] = [];
  fieldList: DYNAMICFIELDS[] = [];
  fieldType = FIELDTYPE;
  fieldValue = {};
  group = {};
  currentTabName: any;

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Form Group Variables
  groupForm: FormGroup;

  // State Array
  accountType: number;

  constructor(private _fb: FormBuilder,
              public dialog: MatDialog,
              private _commonCrudService: CommonCrudService,
              private _decodeHTML: DecodeHtmlEntities,
              private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.initializeMethod();
  }

  /**
   * Initialization Methods
   */
  initializeMethod() {
    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    this.tabChildData = this.tab['child'] || [];
    // console.log(this.tabChildData);
    // console.log(this.tab);
    this.accountType = this.tab.id;
    this.getFieldValueOfGroup();
    const value = {
      url: AdminAPI.CLIENT_HISTORY + '/' + this.accountType,
      params: {'entity_id': this.clientData.id},
    };
    this._sharedService.setHistoryURL(value);
  }

  /**
   * On Change of Account Type
   * @param event
   */
  onChangeService(event) {
    this.accountType = event.value;
    this.groupForm = this.createGroupForm();
    this.getSubFieldValueOfGroup(this.accountType);
    this.currentTabName = (event.source.triggerValue) ? event.source.triggerValue : '';
    const value = {
      url: AdminAPI.CLIENT_HISTORY + '/' + this.accountType,
      params: {'entity_id': this.clientData.id},
    };
    this._sharedService.setHistoryURL(value);
  }

  /**
   * Get Field List for all tabs
   */
  getSubFieldList(tab_id) {
    const params = {'add_edit': 1};
    this._commonCrudService.getData(AdminAPI.GROUP_WISE_ENTITY_FIELD_LIST, tab_id, params).subscribe(Response => {
      this.handleFieldResponse(Response);
    });
  }

  /**
   * Get Field Value of that group/tab
   */
  getSubFieldValueOfGroup(tab_id) {
    this._commonCrudService.getData(AdminAPI.CLIENT_BASIC, this.clientData.id, {'tab': tab_id}).subscribe(Response => {
      this.handleFieldValueResponse(Response);
      this.getSubFieldList(tab_id);
    });
  }

  /**
   * Get Field List for all tabs
   */
  getFieldList() {
    const params = {'add_edit': 1};
    this._commonCrudService.getData(AdminAPI.GROUP_WISE_ENTITY_FIELD_LIST, this.accountType, params).subscribe(Response => {
      this.handleFieldResponse(Response);
    });
  }

  /**
   * Get Field Value of that group/tab
   */
  getFieldValueOfGroup() {
    this._commonCrudService.getData(AdminAPI.CLIENT_BASIC, this.clientData.id, {'tab': this.accountType}).subscribe(Response => {
      this.handleFieldValueResponse(Response);
      this.getFieldList();
      // this.currentTabName = (this.tab.group_name) ? this.tab.group_name : '';
      // console.log(this.currentTabName);
    });
  }

  /**
   * Handle field of that group/tab
   * @param response
   */
  handleFieldResponse(response: any) {
    // assign data to array
    this.fieldList = (response.payload.data.fields) ? response.payload.data.fields : [];
    this.groupForm = this.createGroupForm();
  }

  /**
   * Handle Value of that group/tab
   * @param response
   */
  handleFieldValueResponse(response: any) {
    // assign data to array
    this.fieldValue = (response.payload.data.dynamic_json) ? JSON.parse(response.payload.data.dynamic_json) : [];
  }

  /**
   * Generate form of all group/tab
   */
  createGroupForm() {
    const group = this._fb.group({});
    if (Number(this.accountType) === 2) {
      group.addControl('version_notes', this._fb.control(this._decodeHTML.transform(this.clientData.version_notes)));
      group.addControl('software_notes', this._fb.control(this._decodeHTML.transform(this.clientData.software_notes)));
    } else if (Number(this.accountType) === 3) {
      group.addControl('bk_notes', this._fb.control(this._decodeHTML.transform(this.clientData.bk_notes)));
      group.addControl('bk_review_notes', this._fb.control(this._decodeHTML.transform(this.clientData.bk_review_notes)));
    } else if (Number(this.accountType) === 4) {
      group.addControl('payroll_notes', this._fb.control(this._decodeHTML.transform(this.clientData.payroll_notes)));
    } else if (Number(this.accountType) === 5) {
      group.addControl('ap_notes', this._fb.control(this._decodeHTML.transform(this.clientData.ap_notes)));
    } else if (Number(this.accountType) === 6) {
      group.addControl('ar_notes', this._fb.control(this._decodeHTML.transform(this.clientData.ar_notes)));
    } else if (Number(this.accountType) === 7) {
      group.addControl('dm_notes', this._fb.control(this._decodeHTML.transform(this.clientData.dm_notes)));
    } else if (Number(this.accountType) === 8) {
      group.addControl('tax_notes', this._fb.control(this._decodeHTML.transform(this.clientData.tax_notes)));
    }
    this.fieldList.forEach(item => {
      if (item.field_type === this.fieldType.DROPDOWN || item.field_type === this.fieldType.MULTIPLEVARIANT) {
        item.dataArray = this.convertJsonStringToArray(item);
      }
    });
    this.fieldList.forEach(control => group.addControl(control.id.toString(), this._fb.control(this.fieldValue[control.id])));
    // console.log(group);
    return group;
  }

  /**
   * On Form Submit of group/tab
   * @param formValue
   */
  onSubmitGroupForm(formValue: any) {
    // 1111111111111
    let params = {};
    if (this.accountType === 2) {
      const version_notes = formValue['version_notes'];
      const software_notes = formValue['software_notes'];
      params['software_notes'] = software_notes;
      params['version_notes'] = version_notes;
      delete formValue['version_notes'];
      delete formValue['software_notes'];
    } else if (this.accountType === 3) {
      const bk_notes = formValue['bk_notes'];
      const bk_review_notes = formValue['bk_review_notes'];
      params['bk_notes'] = bk_notes;
      params['bk_review_notes'] = bk_review_notes;
      delete formValue['bk_notes'];
      delete formValue['bk_review_notes'];
    } else if (this.accountType === 4) {
      const payroll_notes = formValue['payroll_notes'];
      params['payroll_notes'] = payroll_notes;
      delete formValue['payroll_notes'];
    } else if (this.accountType === 5) {
      const ap_notes = formValue['ap_notes'];
      params['ap_notes'] = ap_notes;
      delete formValue['ap_notes'];
    } else if (this.accountType === 6) {
      const ar_notes = formValue['ar_notes'];
      params['ar_notes'] = ar_notes;
      delete formValue['ar_notes'];
    } else if (this.accountType === 7) {
      const dm_notes = formValue['dm_notes'];
      params['dm_notes'] = dm_notes;
      delete formValue['dm_notes'];
    } else if (this.accountType === 8) {
      const tax_notes = formValue['tax_notes'];
      params['tax_notes'] = tax_notes;
      delete formValue['tax_notes'];
    }
    // params = {
    //   '_method': 'put',
    //   'tab': this.tab.id,
    //   'dynamic_json': JSON.stringify(formValue)
    // };
    params['_method'] = 'put';
    params['tab'] = this.accountType;
    params['dynamic_json'] = JSON.stringify(formValue);

    // Update Group/Tab Form
    this._commonCrudService.updateData(AdminAPI.CLIENT_UPDATE, this.clientData.id, params).subscribe(Response => {
      this._commonCrudService.listData(AdminAPI.CLIENT_LIST, {}, {'compare': {'equal': {'id': this.clientData.id}}})
        .subscribe((response) => {
          if (response) {
            const DataItem = response.payload.data;
            this.clientData = (DataItem[0]) ? DataItem[0] : this.clientData;
            this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT, null);
            this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT, this.clientData);
            this.getFieldValueOfGroup();
            this.getFieldList();
            this.currentTabName = this.currentTabName;
          }
        });
    });
  }

  /**
   * Convert json string to array
   * @param field
   * @returns {string[]}
   */
  convertJsonStringToArray(field) {
    return field.field_value.split(',');
  }

  toHTML(input): any {
    // return new DOMParser().parseFromString(input, 'text/html').documentElement.innerText;
    return this._decodeHTML.transform(input);
  }

  onClientServicesNotesDialog(notesData: any) {
    let dialogRef = this.dialog.open(ClientInfoServicesNotesDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        notesInfo: notesData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
