import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UnchargedUnitsSummaryComponent} from './uncharged-units-summary.component';

describe('UnchargedUnitsSummaryComponent', () => {
  let component: UnchargedUnitsSummaryComponent;
  let fixture: ComponentFixture<UnchargedUnitsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnchargedUnitsSummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnchargedUnitsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
