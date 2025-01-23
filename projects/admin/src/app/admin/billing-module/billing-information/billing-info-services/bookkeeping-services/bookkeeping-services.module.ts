import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookkeepingServicesComponent} from './bookkeeping-services.component';
import {BookkeepingBasicComponent} from './bookkeeping-basic/bookkeeping-basic.component';
import {BookkeepingSubActivityComponent} from './bookkeeping-sub-activity/bookkeeping-sub-activity.component';
import {UtilityModule} from '../../../../../../utility/utility.module';

@NgModule({
  imports: [
    CommonModule,
    UtilityModule
  ],
  declarations: [BookkeepingServicesComponent, BookkeepingBasicComponent, BookkeepingSubActivityComponent],
  exports: [BookkeepingServicesComponent]
})
export class BookkeepingServicesModule {
}
