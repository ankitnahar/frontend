import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';
import {MyLunchBookingComponent} from "./my-lunch-booking.component";
import {FeedbackMenuLunchDialogComponent} from "./feedback-menu-lunch-dialog/feedback-menu-lunch-dialog.component";
import {MatSnackBarModule} from "@angular/material";
import { OnbehalfBookLunchDialogComponent } from './onbehalf-book-lunch-dialog/onbehalf-book-lunch-dialog.component';

const routes = [
  {
    path: 'my-lunch-booking',
    component: MyLunchBookingComponent,
    canActivate: [AdminAuthGuard]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
    MatSnackBarModule
  ],
  declarations: [MyLunchBookingComponent, FeedbackMenuLunchDialogComponent, OnbehalfBookLunchDialogComponent],
  entryComponents : [FeedbackMenuLunchDialogComponent, OnbehalfBookLunchDialogComponent],
  exports: [MyLunchBookingComponent, FeedbackMenuLunchDialogComponent]
})
export class MyLunchBookingModule { }
