import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddNewTodaysTimesheetFormComponent} from './add-new-todays-timesheet-form.component';

describe('AddNewTodaysTimesheetFormComponent', () => {
  let component: AddNewTodaysTimesheetFormComponent;
  let fixture: ComponentFixture<AddNewTodaysTimesheetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewTodaysTimesheetFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTodaysTimesheetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
