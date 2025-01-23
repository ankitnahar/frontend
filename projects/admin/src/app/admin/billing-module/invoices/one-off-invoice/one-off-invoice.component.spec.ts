import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OneOffInvoiceComponent} from './one-off-invoice.component';

describe('OneOffInvoiceComponent', () => {
  let component: OneOffInvoiceComponent;
  let fixture: ComponentFixture<OneOffInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OneOffInvoiceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOffInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
