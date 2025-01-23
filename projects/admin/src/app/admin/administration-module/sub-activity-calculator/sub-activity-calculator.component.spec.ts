import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SubActivityCalculatorComponent} from './sub-activity-calculator.component';

describe('SubActivityCalculatorComponent', () => {
  let component: SubActivityCalculatorComponent;
  let fixture: ComponentFixture<SubActivityCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubActivityCalculatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubActivityCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
