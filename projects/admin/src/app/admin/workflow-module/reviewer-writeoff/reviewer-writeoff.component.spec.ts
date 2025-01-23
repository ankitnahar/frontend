import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReviewerWriteoffComponent} from './reviewer-writeoff.component';

describe('ReviewerWriteoffComponent', () => {
  let component: ReviewerWriteoffComponent;
  let fixture: ComponentFixture<ReviewerWriteoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewerWriteoffComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerWriteoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
