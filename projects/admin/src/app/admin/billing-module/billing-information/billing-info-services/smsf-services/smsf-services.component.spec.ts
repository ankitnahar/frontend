import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SmsfServicesComponent} from './smsf-services.component';

describe('SmsfServicesComponent', () => {
  let component: SmsfServicesComponent;
  let fixture: ComponentFixture<SmsfServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmsfServicesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsfServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
