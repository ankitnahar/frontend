import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PeerReviewWorksheetListingComponent} from './peer-review-worksheet-listing.component';

describe('PeerReviewWorksheetListingComponent', () => {
  let component: PeerReviewWorksheetListingComponent;
  let fixture: ComponentFixture<PeerReviewWorksheetListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeerReviewWorksheetListingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerReviewWorksheetListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
