import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserPendingTimesheetComponent} from './user-pending-timesheet.component';

describe('UserPendingTimesheetComponent', () => {
  let component: UserPendingTimesheetComponent;
  let fixture: ComponentFixture<UserPendingTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserPendingTimesheetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPendingTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
