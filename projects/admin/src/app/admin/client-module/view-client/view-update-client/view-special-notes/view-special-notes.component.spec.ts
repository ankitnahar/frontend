import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewSpecialNotesComponent} from './view-special-notes.component';

describe('ViewSpecialNotesComponent', () => {
  let component: ViewSpecialNotesComponent;
  let fixture: ComponentFixture<ViewSpecialNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSpecialNotesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecialNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
