import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorksheetDashboardTabComponent} from './worksheet-dashboard-tab.component';

describe('WorksheetDashboardTabComponent', () => {
  let component: WorksheetDashboardTabComponent;
  let fixture: ComponentFixture<WorksheetDashboardTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorksheetDashboardTabComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetDashboardTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
