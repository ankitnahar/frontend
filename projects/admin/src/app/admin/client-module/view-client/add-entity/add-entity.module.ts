import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../../utility/utility.module';

import {AddEntityComponent} from './add-entity.component';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';

const routes = [
  {
    path: '',
    component: AddEntityComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  declarations: [
    AddEntityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ]
})

export class AddEntityModule {

}
