import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HrmsApplyLeaveListingComponent} from './hrms-apply-leave-listing.component';

describe('HrmsApplyLeaveListingComponent', () => {
  let component: HrmsApplyLeaveListingComponent;
  let fixture: ComponentFixture<HrmsApplyLeaveListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrmsApplyLeaveListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmsApplyLeaveListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
