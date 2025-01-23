import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExceptionShiftComponent} from './exception-shift.component';

describe('ExceptionShiftComponent', () => {
  let component: ExceptionShiftComponent;
  let fixture: ComponentFixture<ExceptionShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExceptionShiftComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
