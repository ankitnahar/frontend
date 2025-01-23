import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BillingServiceReportComponent} from './billing-service-report.component';

describe('BillingServiceReportComponent', () => {
  let component: BillingServiceReportComponent;
  let fixture: ComponentFixture<BillingServiceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingServiceReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingServiceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
