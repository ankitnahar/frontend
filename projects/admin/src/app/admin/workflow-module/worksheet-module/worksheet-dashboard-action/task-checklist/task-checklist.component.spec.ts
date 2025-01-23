import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskChecklistComponent} from './task-checklist.component';

describe('TaskChecklistComponent', () => {
  let component: TaskChecklistComponent;
  let fixture: ComponentFixture<TaskChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskChecklistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
