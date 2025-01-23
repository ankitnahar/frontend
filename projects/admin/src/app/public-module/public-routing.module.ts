import {TermsConditionComponent} from './components/terms-condition/terms-condition.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientViewQuoteComponent, ThankyouComponent} from './components';
import {AdminRoutes} from '../../utility/constants/admin-route';

const routes: Routes = [
  {
    path: AdminRoutes.QUOTE_AGREEDISAGREE_ROUTE,
    component: ClientViewQuoteComponent
  },
  {
    path: AdminRoutes.QUOTE_THANKYOU_ROUTE,
    component: ThankyouComponent
  },
  {
    path: AdminRoutes.QUOTE_TERMSCONDITION_ROUTE,
    component: TermsConditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppPublicRoutingModule {
}
