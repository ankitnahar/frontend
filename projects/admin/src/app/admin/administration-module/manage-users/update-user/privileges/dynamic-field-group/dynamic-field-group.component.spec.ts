import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicFieldGroupComponent} from './dynamic-field-group.component';

describe('DynamicFieldGroupComponent', () => {
  let component: DynamicFieldGroupComponent;
  let fixture: ComponentFixture<DynamicFieldGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFieldGroupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFieldGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
