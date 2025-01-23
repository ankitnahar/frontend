import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserPendingTimesheetApprovedComponent} from './user-pending-timesheet-approved.component';

describe('UserPendingTimesheetApprovedComponent', () => {
  let component: UserPendingTimesheetApprovedComponent;
  let fixture: ComponentFixture<UserPendingTimesheetApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserPendingTimesheetApprovedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPendingTimesheetApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
