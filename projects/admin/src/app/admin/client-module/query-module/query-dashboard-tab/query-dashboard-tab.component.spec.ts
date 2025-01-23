import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QueryDashboardTabComponent} from './query-dashboard-tab.component';

describe('QueryDashboardTabComponent', () => {
  let component: QueryDashboardTabComponent;
  let fixture: ComponentFixture<QueryDashboardTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QueryDashboardTabComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryDashboardTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
