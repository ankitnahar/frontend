import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewBefreeWorksheetComponent} from './view-befree-worksheet.component';

describe('ViewBefreeWorksheetComponent', () => {
  let component: ViewBefreeWorksheetComponent;
  let fixture: ComponentFixture<ViewBefreeWorksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBefreeWorksheetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBefreeWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
