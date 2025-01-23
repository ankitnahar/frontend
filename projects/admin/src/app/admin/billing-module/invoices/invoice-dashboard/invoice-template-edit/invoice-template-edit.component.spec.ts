import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InvoiceTemplateEditComponent} from './invoice-template-edit.component';

describe('InvoiceTemplateEditComponent', () => {
  let component: InvoiceTemplateEditComponent;
  let fixture: ComponentFixture<InvoiceTemplateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceTemplateEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceTemplateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
