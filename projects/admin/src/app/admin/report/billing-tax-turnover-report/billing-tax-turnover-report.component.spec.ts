import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BillingTaxTurnoverReportComponent} from './billing-tax-turnover-report.component';

describe('BillingTaxTurnoverReportComponent', () => {
  let component: BillingTaxTurnoverReportComponent;
  let fixture: ComponentFixture<BillingTaxTurnoverReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingTaxTurnoverReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingTaxTurnoverReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
