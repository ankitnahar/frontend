import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ApplyHolidayWorkingFormComponent} from './apply-holiday-working-form.component';

describe('ApplyHolidayWorkingFormComponent', () => {
  let component: ApplyHolidayWorkingFormComponent;
  let fixture: ComponentFixture<ApplyHolidayWorkingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyHolidayWorkingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyHolidayWorkingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
