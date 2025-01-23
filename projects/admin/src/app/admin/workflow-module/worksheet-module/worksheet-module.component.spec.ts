import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetModuleComponent } from './worksheet-module.component';

describe('WorksheetModuleComponent', () => {
  let component: WorksheetModuleComponent;
  let fixture: ComponentFixture<WorksheetModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksheetModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
