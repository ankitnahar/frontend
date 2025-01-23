import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChecklistEmailPreviewComponent} from './checklist-email-preview.component';

describe('ChecklistEmailPreviewComponent', () => {
  let component: ChecklistEmailPreviewComponent;
  let fixture: ComponentFixture<ChecklistEmailPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklistEmailPreviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistEmailPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
