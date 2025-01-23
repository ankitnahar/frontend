import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PreviewInvoiceViewComponent} from './preview-invoice-view.component';

describe('PreviewInvoiceViewComponent', () => {
  let component: PreviewInvoiceViewComponent;
  let fixture: ComponentFixture<PreviewInvoiceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewInvoiceViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewInvoiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
