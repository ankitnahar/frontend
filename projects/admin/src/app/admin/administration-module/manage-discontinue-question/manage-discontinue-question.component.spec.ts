import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageDiscontinueQuestionComponent} from './manage-discontinue-question.component';

describe('ManageDiscontinueQuestionComponent', () => {
  let component: ManageDiscontinueQuestionComponent;
  let fixture: ComponentFixture<ManageDiscontinueQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageDiscontinueQuestionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDiscontinueQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
