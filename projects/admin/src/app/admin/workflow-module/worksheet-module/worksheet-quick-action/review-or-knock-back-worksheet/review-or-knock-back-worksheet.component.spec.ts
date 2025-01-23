import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReviewOrKnockBackWorksheetComponent} from './review-or-knock-back-worksheet.component';

describe('ReviewOrKnockBackWorksheetComponent', () => {
  let component: ReviewOrKnockBackWorksheetComponent;
  let fixture: ComponentFixture<ReviewOrKnockBackWorksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewOrKnockBackWorksheetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewOrKnockBackWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
