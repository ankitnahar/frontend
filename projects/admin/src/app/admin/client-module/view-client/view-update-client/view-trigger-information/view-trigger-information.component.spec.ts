import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TriggerInformationComponent} from './view-trigger-information.component';

describe('TriggerInformationComponent', () => {
  let component: TriggerInformationComponent;
  let fixture: ComponentFixture<TriggerInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TriggerInformationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
