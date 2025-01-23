import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AmedmentInOutTimeComponent} from './amedment-in-out-time.component';

describe('AmedmentInOutTimeComponent', () => {
  let component: AmedmentInOutTimeComponent;
  let fixture: ComponentFixture<AmedmentInOutTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmedmentInOutTimeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmedmentInOutTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
