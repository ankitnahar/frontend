import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaxationServicesComponent} from './taxation-services.component';

describe('TaxationServicesComponent', () => {
  let component: TaxationServicesComponent;
  let fixture: ComponentFixture<TaxationServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaxationServicesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
