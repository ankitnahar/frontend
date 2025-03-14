import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../utility/utility.module';
import {RouterModule, Routes} from '@angular/router';
import {AdminRoutes} from '../../../utility/constants/admin-route';

const routes: Routes = [
  {
    path: AdminRoutes.SOFTWARE_ROUTE,
    loadChildren: './software/software.module#SoftwareModule'
  },
  {
    path: AdminRoutes.CONTACT_INFORMATION_ROUTE,
    loadChildren: './contact-information/contact-information.module#ContactInformationModule'
  },
  {
    path: AdminRoutes.VIEW_CLIENT_ROUTE,
    loadChildren: './view-client/view-client.module#ViewClientModule'
  },
  {
    path: 'information-required',
    loadChildren: './information-required/information-required.module#InformationRequiredModule'
  },
  {
    path: AdminRoutes.CLIENT_DOCUMENTS_ROUTE,
    loadChildren: './client-documents/client-documents.module#ClientDocumentsModule'
  },
  {
    path: 'query-module',
    loadChildren: './query-module/query-module.module#QueryModuleModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})

export class ClientModule {
}
