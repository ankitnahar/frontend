import {Component, Input, OnInit} from '@angular/core';
import {BillingBasic} from '../../../../../../utility/shared-model/billing.model';
import {HostingData} from './hosting.model';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';

@Component({
  selector: 'app-hosting-services',
  templateUrl: './hosting-services.component.html',
  styleUrls: ['./hosting-services.component.scss']
})
export class HostingServicesComponent implements OnInit {

  @Input() billingInformation: BillingBasic;
  @Input() serviceInfo: any;
  @Input() isEdit: any;
  hostingData: HostingData;
  isUpdated = 0;

  constructor(private _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.getHostingDataInfo();

  }

  getHostingDataInfo() {
    this._commonCrudService.getData(AdminAPI.BILLING_HOSTING, this.billingInformation.entity_id, {}).subscribe((response) => {
      this.hostingData = response.payload.data;
      this.isUpdated = this.hostingData.is_updated;
    });
  }

}
