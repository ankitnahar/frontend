import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {ViewWorksheetCommentsComponent} from './view-worksheet-comments.component';

const routes = [
  {
    path: '',
    component: ViewWorksheetCommentsComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [ViewWorksheetCommentsComponent
  ]

})
export class ViewWorksheetCommentsModule {
}
