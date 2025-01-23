import {Component, Input, OnInit} from '@angular/core';
import {BillingBasic} from '../../../../../../utility/shared-model/billing.model';
import {MatTabChangeEvent} from '@angular/material';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {PayrollData} from './payroll.model';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';

@Component({
  selector: 'app-payroll-services',
  templateUrl: './payroll-services.component.html',
  styleUrls: ['./payroll-services.component.scss']
})
export class PayrollServicesComponent implements OnInit {

  @Input() billingInformation: BillingBasic;
  @Input() serviceInfo: any;
  @Input() isEdit: any;

  constructor(private _commonCrudService: CommonCrudService,) {
  }

  isActiveTab = 0;
  isUpdated = 0;
  payrollData: PayrollData;

  ngOnInit() {
    this.getPayrollDataInfo();
  }

  getPayrollDataInfo() {
    this._commonCrudService.getData(AdminAPI.BILLING_PAYROLL, this.billingInformation.entity_id, {}).subscribe((response) => {
      this.payrollData = response.payload.data;
      this.isUpdated = this.payrollData.is_updated;
    });
  }

  /**
   *  On Tab Change
   */
  onSelectTab(tabChangeEvent: MatTabChangeEvent) {
    this.isActiveTab = tabChangeEvent['index'];
  }

}
