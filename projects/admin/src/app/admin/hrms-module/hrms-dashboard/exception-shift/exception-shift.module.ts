import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExceptionShiftComponent} from './exception-shift.component';
import {AddExceptionShiftDialogComponent} from './add-exception-shift-dialog/add-exception-shift-dialog.component';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {RouterModule, Routes} from '@angular/router';
import {UtilityModule} from '../../../../../utility/utility.module';

const routes: Routes = [
  {
    path: '',
    component: ExceptionShiftComponent,
    canActivate: [AdminAuthGuard],
  },
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExceptionShiftComponent, AddExceptionShiftDialogComponent],
  entryComponents: [AddExceptionShiftDialogComponent]
})
export class ExceptionShiftModule {
}
