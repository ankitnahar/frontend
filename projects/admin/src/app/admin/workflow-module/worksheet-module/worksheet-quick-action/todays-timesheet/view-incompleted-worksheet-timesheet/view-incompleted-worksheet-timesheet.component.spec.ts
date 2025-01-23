import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewIncompletedWorksheetTimesheetComponent} from './view-incompleted-worksheet-timesheet.component';

describe('ViewIncompletedWorksheetTimesheetComponent', () => {
  let component: ViewIncompletedWorksheetTimesheetComponent;
  let fixture: ComponentFixture<ViewIncompletedWorksheetTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewIncompletedWorksheetTimesheetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIncompletedWorksheetTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
