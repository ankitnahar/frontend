import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PendingWorksheetScheduleItem} from "../../update-client/auto-worksheet/PendingWorksheetSchedule.model";
import {Frequency} from "../../../../../../utility/shared-model/frequency.model";
import {Clients} from "../../view-client.model";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import {SharedService} from "../../../../../../utility/shared-service/shared.service";
import {Router} from "@angular/router";
import {SharedObjService} from "../../../../../../utility/shared-service/shared-object.service";
import {GLOBALDATAKEYS} from "../../../../../../utility/constants/base-constants";
import {AdminAPI} from "../../../../../../utility/constants/api";
import * as moment from "moment";
import {AdminRoutes} from "../../../../../../utility/constants/admin-route";

@Component({
  selector: 'app-view-auto-worksheet',
  templateUrl: './view-auto-worksheet.component.html',
  styleUrls: ['./view-auto-worksheet.component.scss']
})
export class ViewAutoWorksheetComponent  implements OnInit, AfterViewChecked {

  // Form Variables
  addAutoWorksheetForm: FormGroup;
// Data Variables
  autoWorksheetScheduleList: PendingWorksheetScheduleItem[] = [];
  frequencyList: Frequency[] = [];
  clientData: Clients = null;
  generateNowEnabled = 0;
  dateData = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ];
  monthData = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  dayData = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  constructor(private cdRef: ChangeDetectorRef, private _fb: FormBuilder, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService, private _router: Router, private _sharedObjService: SharedObjService) {
  }
  ngOnInit() {
    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    this.getFrequency();
    this.getPendingWorksheetSchedule();
    this.createAddAutoWorksheetForm();
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  getPendingWorksheetSchedule() {
    this._commonCrudService.listData(AdminAPI.PENDING_WORKSHEET_DATA + '/' + this.clientData.id, {}, {}).subscribe(response => {
      this.autoWorksheetScheduleList = response.payload.data;
      const itemDataValues = Object.entries(this.autoWorksheetScheduleList);
      if (itemDataValues) {
        let i = 0;
        itemDataValues.forEach(key => {
          const dataItem = {};
          dataItem['sectionTitle'] = key[0];
          // console.log(key[1]);
          this.getworksheetSechduleArray().push(this.initSection(dataItem));
          dataItem['sectionData'] = key[1];
          const subData = itemDataValues[i][1];
          dataItem['sectionData'].forEach(item => {
            this.getFilterFieldArrayData(i).push(this.createItem(item));
          });
          i++;
        });
      }
    });
  }

  /**
   * Create Add Auto Worksheet Form
   */
  createAddAutoWorksheetForm() {
    this.addAutoWorksheetForm = this._fb.group({
      worksheet_sechdule: this._fb.array([]),
    });
  }

  /**
   * Create Subactivity Group Form
   */
  initSection(item ?: any) {
    return this._fb.group({
      sectionTitle: new FormControl(item ? item['sectionTitle'] : ''),
      sectionData: new FormArray([])
    });
  }

  createItem(item: any) {
    return this._fb.group({
      master_name: new FormControl(item ? item['master_name'] : 0, <any> Validators.required),
      task_name: new FormControl(item ? item['task_name'] : 0, <any> Validators.required),
      id: new FormControl(item ? item['id'] : 0),
      master_activity_id: new FormControl(item ? item['master_id'] : 0, <any> Validators.required),
      entity_id: new FormControl(item ? item['entity_id'] : null),
      task_id: new FormControl(item ? item['tk_id'] : 0, <any> Validators.required),
      start_date: new FormControl(item ? item['start_date'] : null, <any> Validators.required),
      end_date: new FormControl(item ? item['end_date'] : null, <any> Validators.required),
      frequency_id: new FormControl(item ? item['frequency_id'] : null, <any> Validators.required),
      expert_day: new FormControl((item && item['expert_day'] != null) ? item['frequency_id'] === 10 ? item['expert_day'].split(',') : item['expert_day'] : null),
      expert_month: new FormControl((item && item['expert_month'] != null) ? item['frequency_id'] === 3 ? item['expert_month'].split(',') :  item['expert_month'] : null),
      due_date_type: new FormControl(item ? Number(item['due_date_type']) : null),
      due_after_day: new FormControl(item ? item['due_after_day'] : null),
      due_month_day: new FormControl(item ? item['due_month_day'] : null),
      due_on_particular_date: new FormControl(item ? item['due_on_particular_date'] : null),
      notes: new FormControl(item ? item['notes'] : null),
      is_display_schedule: new FormControl(item ? item['is_display_schedule'] : null),
      generate_now: new FormControl(item && item['generate_now'] > 0 ? item['generate_now'] : 0)
    });
  }

  /**
   * Get Freq Value
   * @param value
   * @param index
   */
  getFreqValue(value: number, index: number, subIndex: number) {
    this.getFilterFieldArrayData(index).controls[index].get('expert_month').setValue([]);
    this.getFilterFieldArrayData(index).controls[index].get('expert_day').setValue([]);
  }

  /**
   * On change due date
   * @param event
   */
  onChangeDueDate(event, index: number, subIndex: number) {
    if (event) {
      const dataItem = Number(this.getFilterFieldArrayData(index).controls[subIndex].get('due_date_type').value);
      // console.log(dataItem);
      this.getFilterFieldArrayData(index).controls[subIndex].get('due_after_day').setValidators(null);
      this.getFilterFieldArrayData(index).controls[subIndex].get('due_month_day').setValidators(null);
      this.getFilterFieldArrayData(index).controls[subIndex].get('due_on_particular_date').setValidators(null);
      this.getFilterFieldArrayData(index).controls[subIndex].get('due_after_day').updateValueAndValidity();
      this.getFilterFieldArrayData(index).controls[subIndex].get('due_month_day').updateValueAndValidity();
      this.getFilterFieldArrayData(index).controls[subIndex].get('due_on_particular_date').updateValueAndValidity();

      if (dataItem === 1) {
        this.getFilterFieldArrayData(index).controls[subIndex].get('due_after_day').setValidators(Validators.required);
        this.getFilterFieldArrayData(index).controls[subIndex].get('due_after_day').updateValueAndValidity();
      } else if (dataItem === 2) {
        this.getFilterFieldArrayData(index).controls[subIndex].get('due_month_day').setValidators(Validators.required);
        this.getFilterFieldArrayData(index).controls[subIndex].get('due_month_day').updateValueAndValidity();
      } else if (dataItem === 3) {
        this.getFilterFieldArrayData(index).controls[subIndex].get('due_on_particular_date').setValidators(Validators.required);
        this.getFilterFieldArrayData(index).controls[subIndex].get('due_on_particular_date').updateValueAndValidity();
      }
    }
  }

  /**
   * Get Worksheet Schedule Array
   */
  getworksheetSechduleArray(): FormArray {
    return <FormArray>this.addAutoWorksheetForm.get('worksheet_sechdule');
  }


  /**
   * Get Filter Field Array
   */
  getFilterFieldArrayData(i): FormArray {
    return <FormArray>this.getworksheetSechduleArray().controls[i].get('sectionData');
  }

  /**
   * Get Frequency List
   */
  getFrequency() {
    this._commonCrudService.listData(AdminAPI.FREQUENCY, {
      'sortBy': 'sort_order',
      'sortOrder': 'asc',
    }, {'compare': {'equal': {'is_active': 1, 'show_in_worksheet': 1}}}).subscribe((response) => {
      // 'show_in_worksheet': 1
      if (response) {
        this.frequencyList = response.payload.data;
        this.frequencyList.sort(function (a, b) {
          return a.sort_order - b.sort_order;
        });
      }
    });
  }

  /**
   *
   * @param form
   * @constructor
   */
  SubmitForm(form: FormGroup) {
    const param = {};
    const dataItem = this.addAutoWorksheetForm.get('worksheet_sechdule').value;
    // console.log(dataItem);
    if (dataItem) {
      dataItem.forEach(key => {
        if (key['sectionData'].length) {
          key['sectionData'].forEach(item => {
            // console.log(item);
            item['start_date'] = (item['start_date'] && item['start_date'] !== '') ? moment(item['start_date']).format('YYYY-MM-DD') : '';
            item['end_date'] = (item['end_date'] && item['end_date'] !== '') ? moment(item['end_date']).format('YYYY-MM-DD') : '';
            item['expert_day'] = (item['expert_day'] && item["expert_day"] !== "" && item['expert_day'].length) ?  Array.isArray(item['expert_day']) ? item['expert_day'].join(',') : item['expert_day'] : item['expert_day'];
            item['expert_month'] = (item['expert_month'] && item["expert_month"] !== "" && item['expert_month'].length) ? Array.isArray(item['expert_month']) ? item['expert_month'].join(',') : item['expert_month'] : item['expert_month'];
          });
        }
      });
    }
    param['worksheet_sechdule'] = JSON.stringify(dataItem);
    this._commonCrudService.addData(AdminAPI.PENDING_WORKSHEET_DATA_ADD + '/' + this.clientData.id, param).subscribe(response => {
      this.getPendingWorksheetSchedule();
      this.createAddAutoWorksheetForm();
      this.onClient();
    });
  }

  /**
   * Check Generate Button
   * @param value
   * @param index
   */
  checkGenerate(value, index, subIndex) {
    if (value) {
      this.getFilterFieldArrayData(index).controls[subIndex].get('generate_now').setValue(1);
      this.getFilterFieldArrayData(index).controls[subIndex].get('generate_now').updateValueAndValidity();
    } else {
      this.getFilterFieldArrayData(index).controls[subIndex].get('generate_now').setValue(0);
      this.getFilterFieldArrayData(index).controls[subIndex].get('generate_now').updateValueAndValidity();
    }
    this.generateNowEnabled = 0;
    this.getFilterFieldArrayData(index).controls.forEach(item => {
      if (item.get('generate_now').value > 0) {
        this.generateNowEnabled++;
      }
    });
  }

  /**
   * On view client page redirect
   */
  onClient() {
    this._router.navigate(['/' + AdminRoutes.VIEW_CLIENT]);
  }
}
