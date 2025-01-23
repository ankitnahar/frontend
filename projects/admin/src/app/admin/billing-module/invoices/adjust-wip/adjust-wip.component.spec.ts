import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdjustWipComponent} from './adjust-wip.component';

describe('AdjustWipComponent', () => {
  let component: AdjustWipComponent;
  let fixture: ComponentFixture<AdjustWipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdjustWipComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustWipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
