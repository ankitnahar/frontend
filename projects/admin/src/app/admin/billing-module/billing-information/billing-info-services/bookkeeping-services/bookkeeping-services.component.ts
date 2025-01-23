import {Component, Input, OnInit} from '@angular/core';
import {BillingBasic} from '../../../../../../utility/shared-model/billing.model';
import {MatTabChangeEvent} from '@angular/material';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {BookkeepingData} from './bookkeeping.model';
import {AdminAPI} from '../../../../../../utility/constants/api';

@Component({
  selector: 'app-bookkeeping-services',
  templateUrl: './bookkeeping-services.component.html'
})
export class BookkeepingServicesComponent implements OnInit {
  @Input() billingInformation: BillingBasic;
  @Input() serviceInfo: any;
  @Input() isEdit: any;
  isActiveTab = 0;
  bookkeepingData: BookkeepingData;
  isUpdated = 0;

  constructor(private _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.getBookkeepingDataInfo();
  }

  getBookkeepingDataInfo() {
    this._commonCrudService.getData(AdminAPI.BILLING_BOOKKEEPING, this.billingInformation.entity_id, {}).subscribe((response) => {
      this.bookkeepingData = response.payload.data;
      this.isUpdated = this.bookkeepingData.is_updated;
    });
  }

  /**
   *  On Tab Change
   */
  onSelectTab(tabChangeEvent: MatTabChangeEvent) {
    this.isActiveTab = tabChangeEvent['index'];
  }

}
