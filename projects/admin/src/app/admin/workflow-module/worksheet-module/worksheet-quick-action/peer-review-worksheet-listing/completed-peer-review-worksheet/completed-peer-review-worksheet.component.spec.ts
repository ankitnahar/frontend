import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CompletedPeerReviewWorksheetComponent} from './completed-peer-review-worksheet.component';

describe('CompletedPeerReviewWorksheetComponent', () => {
  let component: CompletedPeerReviewWorksheetComponent;
  let fixture: ComponentFixture<CompletedPeerReviewWorksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedPeerReviewWorksheetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedPeerReviewWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
