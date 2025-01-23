import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BillingBasic} from '../../../../../../utility/shared-model/billing.model';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';

@Component({
  selector: 'app-basic-information-services',
  templateUrl: './basic-information-services.component.html'
})
export class BasicInformationServicesComponent implements OnInit {

  @Input() billingInformation: BillingBasic;
  @Input() isEdit: any;
  @Output() onAddUpdate: EventEmitter<boolean> = new EventEmitter(false);

  constructor(private _sharedService: SharedService) {
  }

  ngOnInit() {
  }

  /**
   * Get On Update Event Emit True
   */
  getOnUpdate() {
    this.onAddUpdate.emit(true);
  }

}
