import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {PeerReviewWorksheetListingComponent} from './peer-review-worksheet-listing.component';
import {CompletedPeerReviewWorksheetComponent} from './completed-peer-review-worksheet/completed-peer-review-worksheet.component';

const routes = [
  {
    path: '',
    component: PeerReviewWorksheetListingComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'completed-peer-review-worksheet',
    component: CompletedPeerReviewWorksheetComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [PeerReviewWorksheetListingComponent, CompletedPeerReviewWorksheetComponent
  ],
  entryComponents: []

})
export class PeerReviewWorksheetListingModule {
}
