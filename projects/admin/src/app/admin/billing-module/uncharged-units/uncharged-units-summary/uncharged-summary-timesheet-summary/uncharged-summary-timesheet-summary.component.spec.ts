import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UnchargedSummaryTimesheetSummaryComponent} from './uncharged-summary-timesheet-summary.component';

describe('UnchargedSummaryTimesheetSummaryComponent', () => {
  let component: UnchargedSummaryTimesheetSummaryComponent;
  let fixture: ComponentFixture<UnchargedSummaryTimesheetSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnchargedSummaryTimesheetSummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnchargedSummaryTimesheetSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
