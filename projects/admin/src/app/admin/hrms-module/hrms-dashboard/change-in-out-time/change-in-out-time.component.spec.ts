import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChangeInOutTimeComponent} from './change-in-out-time.component';

describe('ChangeInOutTimeComponent', () => {
  let component: ChangeInOutTimeComponent;
  let fixture: ComponentFixture<ChangeInOutTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeInOutTimeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeInOutTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
