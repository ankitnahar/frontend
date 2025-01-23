import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdvanceInvoicesComponent} from './advance-invoices.component';

describe('AdvanceInvoicesComponent', () => {
  let component: AdvanceInvoicesComponent;
  let fixture: ComponentFixture<AdvanceInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvanceInvoicesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
