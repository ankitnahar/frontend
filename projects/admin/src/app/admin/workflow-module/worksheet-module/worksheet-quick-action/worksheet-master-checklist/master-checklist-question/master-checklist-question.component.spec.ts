import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MasterChecklistQuestionComponent} from './master-checklist-question.component';

describe('MasterChecklistQuestionComponent', () => {
  let component: MasterChecklistQuestionComponent;
  let fixture: ComponentFixture<MasterChecklistQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MasterChecklistQuestionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterChecklistQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
