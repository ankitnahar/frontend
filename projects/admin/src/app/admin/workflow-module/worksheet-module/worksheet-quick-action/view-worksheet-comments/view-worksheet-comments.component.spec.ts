import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewWorksheetCommentsComponent} from './view-worksheet-comments.component';

describe('ViewWorksheetCommentsComponent', () => {
  let component: ViewWorksheetCommentsComponent;
  let fixture: ComponentFixture<ViewWorksheetCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWorksheetCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWorksheetCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
