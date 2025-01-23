import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicComponent} from './public.component';
import {ClientViewQuoteComponent, ThankyouComponent} from './components';
import {AppPublicRoutingModule} from './public-routing.module';
import {TermsConditionComponent} from './components/terms-condition/terms-condition.component';
import {UtilityModule} from '../../utility/utility.module';

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    AppPublicRoutingModule
  ],
  declarations: [
    PublicComponent,
    ThankyouComponent,
    ClientViewQuoteComponent,
    TermsConditionComponent
  ]
})
export class PublicModule {
}
