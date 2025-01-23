import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ValidationConstantMessage} from "../../../../../../utility/validation";
import {BaseComponent} from "../../../../../../utility/components/base/base.component";
import {GLOBALDATAKEYS, LeaveAllowFor} from "../../../../../../utility/constants/base-constants";
import {Clients} from "../../view-client.model";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import {SharedService} from "../../../../../../utility/shared-service/shared.service";
import {SharedObjService} from "../../../../../../utility/shared-service/shared-object.service";
import {Frequency} from "../../../../../../utility/shared-model/frequency.model";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {TriggerInformation} from "../../../information-required/information-required-tab/information-tab/information-required.model";
import {ConfirmationDialogComponent} from "../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-view-trigger-information',
  templateUrl: './view-trigger-information.component.html',
  styleUrls: ['./view-trigger-information.component.scss']
})
export class ViewTriggerInformationComponent extends BaseComponent implements OnInit {
  @ViewChild('triggerInfoFormData') triggerInfoFormData;

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  addTriggerInfoForm: FormGroup;
  clientData: Clients = null;
  frequencyList: Frequency[] = [];
  yearList = [];
  currentYear = new Date().getFullYear();
  monthList = [];
  daysList = [];
  isPreview = false;
  triggerInformationList: any[] = [];
  isConfirm = 0;
  triggerInformationData: TriggerInformation = null;

  constructor(public dialog: MatDialog, private _fb: FormBuilder, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService, private _sharedObjService: SharedObjService, private _router: Router) {
    super();
  }

  ngOnInit() {
    this.monthList = LeaveAllowFor.slice(1, 13);
    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    this.getFrequency();
    this.getYears();
    this.getDays();
    this.getInformationTriggerData();
    this.createAddTriggerinfoForm();
  }

  /**
   * Get Information Trigger Data
   */
  getInformationTriggerData() {
    this._commonCrudService.listData(AdminAPI.INFORMATION_REQUIRED_TRIGGER_SHOW + '/' + this.clientData.id, {}).subscribe((response) => {
      this.triggerInformationData = response.payload.data;
      this.createAddTriggerinfoForm();
    });
  }

  /**
   * Get Frequency List
   */
  getFrequency() {
    this._commonCrudService.listData(AdminAPI.FREQUENCY, {}, {"in": {"id": "3,4,5,6"}}).subscribe((response) => {
      if (response) {
        this.frequencyList = response.payload.data;
        // console.log(this.frequencyList);
      }
    });
  }

  /**
   * Create Add Trigger Information
   */
  createAddTriggerinfoForm() {
    // console.log(this.triggerInformationData);
    this.addTriggerInfoForm = this._fb.group({
      entity_id: new FormControl(this.clientData.id, Validators.required),
      frequency_id: new FormControl(this.triggerInformationData ? this.triggerInformationData.frequency_id : null, Validators.required),
      month: new FormControl(this.triggerInformationData ? this.triggerInformationData.month : null, Validators.required),
      year: new FormControl(this.triggerInformationData ? this.triggerInformationData.year : null, Validators.required),
      trigger_day: new FormControl(this.triggerInformationData ? this.triggerInformationData.trigger_day : null, Validators.required)
    });
  }

  /**
   * on Save Preview
   */
  onSavePreview(form: FormGroup) {
    if (this.isConfirm === 2) {
      const dialogConfigData: any = {
        panelClass: '',
        data: {
          header: 'Stop Trigger Information',
          content: 'Are you sure you want to stop this information trigger?'
        }
      };
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
      dialogRef.afterClosed().subscribe((value) => {
        if (value) {
          this._commonCrudService.getData(AdminAPI.INFORMATION_REQUIRED_TRIGGER_STOP, this.triggerInformationData.id).subscribe(response => {
            this.getInformationTriggerData();
          });
        }
      });
    } else {
      if (form.valid) {
        form.value['confirm'] = this.isConfirm;
        form.value['month'] = this.addTriggerInfoForm.get('month').value;
        form.value['year'] = this.addTriggerInfoForm.get('year').value;

        // this._router.navigate([AdminRoutes.UPDATE_CLIENT_TRIGGERINFO_PREVIEW]);
        if (this.isConfirm === 0) {
          this._commonCrudService.addData(AdminAPI.INFORMATION_REQUIRED_TRIGGER_PREVIEW + '/' + 0, form.value).subscribe(response => {
            this.isPreview = true;
            this.triggerInformationList = response.payload.data;
          });
        } else {
          const id = this.triggerInformationData && this.triggerInformationData.id > 0 ? this.triggerInformationData.id : 0;
          this._commonCrudService.updateData(AdminAPI.INFORMATION_REQUIRED_TRIGGER_PREVIEW, id, form.value).subscribe(response => {
            this.isPreview = false;
            this.resetForm();
          });
        }
      }
    }
  }

  /**
   * Get Years
   */
  getYears() {
    this.currentYear = new Date().getFullYear();
    const defaultYear = 5;
    const diff = this.currentYear + defaultYear;
    for (let i = this.currentYear; i <= diff; i++) {
      const newYear = i;
      this.yearList.push({'key': newYear, 'value': newYear});
    }
  }

  /**
   * Get Days
   */
  getDays() {
    for (let i = 1; i <= 29; i++) {
      this.daysList.push({'key': i, 'value': i});
    }
  }

  /**
   * Hide Show Preview
   */
  onClickShowForm() {
    this.isPreview = false;
  }

  /**
   * Reset Form
   */
  resetForm() {
    this.triggerInfoFormData.resetForm();
    this.getInformationTriggerData();
    this.createAddTriggerinfoForm();
  }

  /**
   * Is Confirm Submit Button
   * @param value
   */
  isConfirmData(value: number) {
    this.isConfirm = value;
  }
}
