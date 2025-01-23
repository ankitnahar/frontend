import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {HostingServicesComponent} from './hosting-services.component';
import {HostingBasicComponent} from './hosting-basic/hosting-basic.component';
import {HostingUserListComponent} from './hosting-user-list/hosting-user-list.component';
import {AddHostingDialogComponent} from './hosting-user-list/add-hosting-dialog/add-hosting-dialog.component';
import {HostingUserListHistoryComponent} from './hosting-user-list/hosting-user-list-history/hosting-user-list-history.component';


@NgModule({
  imports: [
    CommonModule,
    UtilityModule
  ],
  declarations: [HostingServicesComponent, HostingBasicComponent, HostingUserListComponent, AddHostingDialogComponent, HostingUserListHistoryComponent],
  exports: [HostingServicesComponent],
  entryComponents: [AddHostingDialogComponent, HostingUserListHistoryComponent]
})
export class HostingServicesModule {
}
