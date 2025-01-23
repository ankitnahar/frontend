import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageWipInvoiceViewComponent} from './manage-wip-invoice-view.component';

describe('ManageWipInvoiceViewComponent', () => {
  let component: ManageWipInvoiceViewComponent;
  let fixture: ComponentFixture<ManageWipInvoiceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageWipInvoiceViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWipInvoiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
