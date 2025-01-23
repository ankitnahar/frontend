import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UnchargedUnitsComponent} from './uncharged-units.component';

describe('UnchargedUnitsComponent', () => {
  let component: UnchargedUnitsComponent;
  let fixture: ComponentFixture<UnchargedUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnchargedUnitsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnchargedUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
