import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HrmsDashboardComponent} from './hrms-dashboard.component';

describe('HrmsDashboardComponent', () => {
  let component: HrmsDashboardComponent;
  let fixture: ComponentFixture<HrmsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrmsDashboardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
