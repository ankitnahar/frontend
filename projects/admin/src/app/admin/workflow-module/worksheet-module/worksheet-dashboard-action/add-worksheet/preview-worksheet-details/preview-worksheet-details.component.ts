import {Component, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {GLOBALDATAKEYS, yesNo} from '../../../../../../../utility/constants/base-constants';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../utility/constants/api';

@Component({
  selector: 'app-preview-worksheet-details',
  templateUrl: './preview-worksheet-details.component.html',
  styleUrls: ['./preview-worksheet-details.component.scss'],
  providers: [CommonCrudService, SharedService]
})
export class PreviewWorksheetDetailsComponent implements OnInit {

  [x: string]: any;

  // Form Group Variables
  viewWorksheetPreview: FormGroup;
  // data variables
  otherData = [];
  dataOfStoreDetails: any;
  yesNoList = yesNo;

  constructor(public _router: Router,
              private _fb: FormBuilder,
              private _sharedService: SharedService,
              public _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.createWorksheetPreviewDetails();
    let data = this._sharedService.getClientData(GLOBALDATAKEYS.ADD_WORKSHEET);
    this.dataOfStoreDetails = data;
    this._commonCrudService.addData(AdminAPI.ADD_WORKSHEET, data).subscribe(response => {
      this.handleResponse(response);
      // console.log(response);
    });
  }

  handleResponse(data) {
    this.basicInfo = data.payload.basicinfo;
    this.clientArray = this.basicInfo.entity_name.split(',');
    for (const dataMain in data.payload.data) {
      if (dataMain) {
        this.otherData.push({
          freq: data.payload.data[dataMain].frequency,
          start: data.payload.data[dataMain].start_date,
          end: data.payload.data[dataMain].end_date,
          due: data.payload.data[dataMain].due_date
        });
      }
    }
  }

  createWorksheetPreviewDetails() {
    this.viewWorksheetPreview = this._fb.group({});
  }

  /**
   * On Accept previw details
   * @param value
   * @param valid
   */
  onViewWorksheetPreview(value, valid) {

  }


  /**
   * on worksflow page redirection
   */
  onWorkflow() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  /**
   * add new worksheet bage redirection
   */

  onAddNewWorksheet() {
    this._router.navigate(['/' + AdminRoutes.ADD_WORKSHEET]);
  }

  saveWorkSheet(type?: number) {

    let data = this._sharedService.getClientData(GLOBALDATAKEYS.ADD_WORKSHEET);
    data.comfirm = 1;
    data.button_type = type;
    this._commonCrudService.addData(AdminAPI.ADD_WORKSHEET, data).subscribe(response => {
      this._sharedService.setClientData(GLOBALDATAKEYS.ADD_WORKSHEET, null);
      this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
    });
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Display Get Status List
   * @param {number} status_id
   * @returns {string}
   */
  getYesNoStatus(status_id: number): string {
    const val = this.yesNoList.filter(elem => elem.key === Number(status_id));
    return (val.length) ? val[0].label : '';
  }
}

