import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddNewReviewTimesheetFormComponent} from './add-new-review-timesheet-form.component';

describe('AddNewReviewTimesheetFormComponent', () => {
  let component: AddNewReviewTimesheetFormComponent;
  let fixture: ComponentFixture<AddNewReviewTimesheetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewReviewTimesheetFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewReviewTimesheetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
