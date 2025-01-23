import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BillingInfoBasicInformationComponent} from './billing-info-basic-information.component';

describe('BillingInfoBasicInformationComponent', () => {
  let component: BillingInfoBasicInformationComponent;
  let fixture: ComponentFixture<BillingInfoBasicInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingInfoBasicInformationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingInfoBasicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
