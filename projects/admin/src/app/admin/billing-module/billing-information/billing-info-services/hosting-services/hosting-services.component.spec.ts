import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HostingServicesComponent} from './hosting-services.component';

describe('HostingServicesComponent', () => {
  let component: HostingServicesComponent;
  let fixture: ComponentFixture<HostingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostingServicesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
