import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClientWiseInvoiceReportComponent} from './client-wise-invoice-report.component';

describe('ClientWiseInvoiceReportComponent', () => {
  let component: ClientWiseInvoiceReportComponent;
  let fixture: ComponentFixture<ClientWiseInvoiceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientWiseInvoiceReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientWiseInvoiceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
