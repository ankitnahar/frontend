import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateTodaysTimesheetFormComponent} from './update-todays-timesheet-form.component';

describe('UpdateTodaysTimesheetFormComponent', () => {
  let component: UpdateTodaysTimesheetFormComponent;
  let fixture: ComponentFixture<UpdateTodaysTimesheetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTodaysTimesheetFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTodaysTimesheetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
