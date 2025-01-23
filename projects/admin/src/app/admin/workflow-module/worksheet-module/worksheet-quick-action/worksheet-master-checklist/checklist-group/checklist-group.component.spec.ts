import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChecklistGroupComponent} from './checklist-group.component';

describe('ChecklistGroupComponent', () => {
  let component: ChecklistGroupComponent;
  let fixture: ComponentFixture<ChecklistGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklistGroupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
