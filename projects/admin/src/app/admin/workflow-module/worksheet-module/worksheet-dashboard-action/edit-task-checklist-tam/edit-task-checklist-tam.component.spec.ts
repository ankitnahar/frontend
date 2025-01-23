import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditTaskChecklistTamComponent} from './edit-task-checklist-tam.component';

describe('EditTaskChecklistTamComponent', () => {
  let component: EditTaskChecklistTamComponent;
  let fixture: ComponentFixture<EditTaskChecklistTamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditTaskChecklistTamComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskChecklistTamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
