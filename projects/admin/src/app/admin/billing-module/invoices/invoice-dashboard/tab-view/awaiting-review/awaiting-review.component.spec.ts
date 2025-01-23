import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AwaitingReviewComponent} from './awaiting-review.component';

describe('AwaitingReviewComponent', () => {
  let component: AwaitingReviewComponent;
  let fixture: ComponentFixture<AwaitingReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AwaitingReviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
