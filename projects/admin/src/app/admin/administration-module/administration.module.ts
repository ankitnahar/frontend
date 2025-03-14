import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../utility/utility.module';
import {RouterModule, Routes} from '@angular/router';
import {AdminAuthGuard} from '../../_guards/auth.guards';

const routes: Routes = [
  {
    path: 'designation',
    loadChildren: './designation/designation.module#DesignationModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'dynamic-field',
    loadChildren: './dynamic-field/dynamic-field.module#DynamicFieldModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'dynamic-field-group',
    loadChildren: './dynamic-field-group/dynamic-field-group.module#DynamicFieldGroupModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'ip-address',
    loadChildren: './ip-address/ip-address.module#IpAddressModule',
    canActivate: [AdminAuthGuard]
  },  
  {
    path: 'manage-emails',
    loadChildren: './manage-emails/manage-emails.module#ManageEmailsModule'
  },
  {
    path: 'users',
    loadChildren: './manage-users/manage-users.module#ManageUsersModule'
  },
  {
    path: 'sub-activity-calculator',
    loadChildren: './sub-activity-calculator/sub-activity-calculator.module#SubActivityCalculatorModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'query-question',
    loadChildren: './query-question/query-question.module#QueryQuestionModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin-bank-information',
    loadChildren: './admin-bank-information/admin-bank-information.module#AdminBankInformationModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin-more-account-type',
    loadChildren: './admin-more-account-type/admin-more-account-type.module#AdminMoreAccountTypeModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin-more-particular-type',
    loadChildren: './admin-more-particular-type/admin-more-particular-type.module#AdminMoreParticularTypeModule',
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
  ],
  declarations: []
})
export class AdministrationModule {
}
