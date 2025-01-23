import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {SoftwareComponent} from './software.component';
import {AddEditSoftwareComponent} from './add-edit-software/add-edit-software.component';

const routes = [
  {
    path: '',
    component: SoftwareComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  declarations: [
    SoftwareComponent,
    AddEditSoftwareComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  entryComponents: []
})

export class SoftwareModule {

}
