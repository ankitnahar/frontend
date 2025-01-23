import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HrmsHolidayWorkingListingComponent} from './hrms-holiday-working-listing.component';

describe('HrmsHolidayWorkingListingComponent', () => {
  let component: HrmsHolidayWorkingListingComponent;
  let fixture: ComponentFixture<HrmsHolidayWorkingListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrmsHolidayWorkingListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmsHolidayWorkingListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
