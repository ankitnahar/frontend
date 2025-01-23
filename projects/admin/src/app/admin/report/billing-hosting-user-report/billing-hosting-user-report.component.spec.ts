import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BillingHostingUserReportComponent} from './billing-hosting-user-report.component';

describe('BillingHostingUserReportComponent', () => {
  let component: BillingHostingUserReportComponent;
  let fixture: ComponentFixture<BillingHostingUserReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingHostingUserReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingHostingUserReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
