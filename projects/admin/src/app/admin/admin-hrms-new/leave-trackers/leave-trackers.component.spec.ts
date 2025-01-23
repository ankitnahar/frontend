import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LeaveTrackersComponent} from './leave-trackers.component';

describe('LeaveTrackersComponent', () => {
  let component: LeaveTrackersComponent;
  let fixture: ComponentFixture<LeaveTrackersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveTrackersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveTrackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
