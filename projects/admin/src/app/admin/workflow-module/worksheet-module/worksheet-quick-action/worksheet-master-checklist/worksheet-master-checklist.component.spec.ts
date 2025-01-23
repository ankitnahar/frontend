import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorksheetMasterChecklistComponent} from './worksheet-master-checklist.component';

describe('WorksheetMasterChecklistComponent', () => {
  let component: WorksheetMasterChecklistComponent;
  let fixture: ComponentFixture<WorksheetMasterChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorksheetMasterChecklistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetMasterChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
