import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {AddWorksheetComponent} from './add-worksheet.component';
import {PreviewWorksheetDetailsComponent} from './preview-worksheet-details/preview-worksheet-details.component';

const routes = [
  {
    path: '',
    component: AddWorksheetComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'preview-worksheet-details',
    component: PreviewWorksheetDetailsComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddWorksheetComponent, PreviewWorksheetDetailsComponent]
})
export class AddWorksheetModule {
}
