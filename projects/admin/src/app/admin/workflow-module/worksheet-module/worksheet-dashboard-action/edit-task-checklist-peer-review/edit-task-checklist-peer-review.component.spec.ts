import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditTaskChecklistComponent} from './edit-task-checklist.component';

describe('EditTaskChecklistComponent', () => {
  let component: EditTaskChecklistComponent;
  let fixture: ComponentFixture<EditTaskChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditTaskChecklistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
