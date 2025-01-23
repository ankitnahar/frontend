import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewBillingInformationComponent} from './view-billing-information.component';

describe('ViewBillingInformationComponent', () => {
  let component: ViewBillingInformationComponent;
  let fixture: ComponentFixture<ViewBillingInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBillingInformationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBillingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
