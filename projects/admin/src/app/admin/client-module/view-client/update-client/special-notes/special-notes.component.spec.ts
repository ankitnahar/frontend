import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SpecialNotesComponent} from './special-notes.component';

describe('SpecialNotesComponent', () => {
  let component: SpecialNotesComponent;
  let fixture: ComponentFixture<SpecialNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialNotesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
