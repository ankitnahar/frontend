import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetStatusRightComponent } from './worksheet-status-right.component';

describe('WorksheetStatusRightComponent', () => {
  let component: WorksheetStatusRightComponent;
  let fixture: ComponentFixture<WorksheetStatusRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksheetStatusRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetStatusRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
