import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageWipInvoiceComponent} from './manage-wip-invoice.component';

describe('ManageWipInvoiceComponent', () => {
  let component: ManageWipInvoiceComponent;
  let fixture: ComponentFixture<ManageWipInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageWipInvoiceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWipInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
