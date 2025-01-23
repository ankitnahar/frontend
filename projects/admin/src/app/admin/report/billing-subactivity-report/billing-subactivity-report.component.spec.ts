import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BillingSubactivityReportComponent} from './billing-subactivity-report.component';

describe('BillingSubactivityReportComponent', () => {
  let component: BillingSubactivityReportComponent;
  let fixture: ComponentFixture<BillingSubactivityReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingSubactivityReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingSubactivityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
