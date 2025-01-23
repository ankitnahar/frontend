import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {AddContactComponent} from './add-contact/add-contact.component';
import {ContactViewComponent} from './contact-view/contact-view.component';
import {ArchiveContactComponent} from './archive-contact/archive-contact.component';
import {CopyContactComponent} from './copy-contact/copy-contact.component';
import {ArchivedListModule} from './archived-list/archived-list.module';

const routes = [
  {
    path: 'add-contact',
    component: AddContactComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'archived-list',
    loadChildren: './archived-list/archived-list.module#ArchivedListModule'
  }
];

@NgModule({
  declarations: [
    AddContactComponent,
    ContactViewComponent,
    ArchiveContactComponent,
    CopyContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
    ArchivedListModule
  ],
  exports: [
    ContactViewComponent,
    CopyContactComponent,
    ArchiveContactComponent
  ],
  entryComponents: [ContactViewComponent,
    CopyContactComponent,
    ArchiveContactComponent]
})

export class ContactModule {

}
