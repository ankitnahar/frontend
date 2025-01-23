import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddUsersTimesheetComponent} from './add-users-timesheet.component';

describe('AddUsersTimesheetComponent', () => {
  let component: AddUsersTimesheetComponent;
  let fixture: ComponentFixture<AddUsersTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddUsersTimesheetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsersTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
