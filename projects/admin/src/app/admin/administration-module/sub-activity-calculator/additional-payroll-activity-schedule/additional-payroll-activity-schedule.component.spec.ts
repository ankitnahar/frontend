import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdditionalPayrollActivityScheduleComponent} from './additional-payroll-activity-schedule.component';

describe('AdditionalPayrollActivityScheduleComponent', () => {
  let component: AdditionalPayrollActivityScheduleComponent;
  let fixture: ComponentFixture<AdditionalPayrollActivityScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdditionalPayrollActivityScheduleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalPayrollActivityScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
