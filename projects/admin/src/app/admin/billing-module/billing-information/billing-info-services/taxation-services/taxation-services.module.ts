import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {TaxationServicesComponent} from './taxation-services.component';
import {TaxationBasicDialogComponent} from './taxation-basic-dialog/taxation-basic-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    UtilityModule
  ],
  declarations: [TaxationServicesComponent, TaxationBasicDialogComponent],
  exports: [TaxationServicesComponent],
  entryComponents: [TaxationBasicDialogComponent]
})
export class TaxationServicesModule {
}
