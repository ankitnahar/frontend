import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PayrollServicesComponent} from './payroll-services.component';

describe('PayrollServicesComponent', () => {
  let component: PayrollServicesComponent;
  let fixture: ComponentFixture<PayrollServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollServicesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
