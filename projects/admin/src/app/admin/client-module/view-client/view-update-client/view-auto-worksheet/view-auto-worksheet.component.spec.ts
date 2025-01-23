import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewAutoWorksheetComponent} from './view-auto-worksheet.component';

describe('ViewAutoWorksheetComponent', () => {
  let component: ViewAutoWorksheetComponent;
  let fixture: ComponentFixture<ViewAutoWorksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAutoWorksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAutoWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
