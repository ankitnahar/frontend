import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChecklistEmailReviewComponent} from './checklist-email-review.component';

describe('ChecklistEmailReviewComponent', () => {
  let component: ChecklistEmailReviewComponent;
  let fixture: ComponentFixture<ChecklistEmailReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklistEmailReviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistEmailReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
