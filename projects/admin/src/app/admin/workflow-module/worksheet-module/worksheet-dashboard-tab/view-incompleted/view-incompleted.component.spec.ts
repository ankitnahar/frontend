import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewIncompletedComponent} from './view-incompleted.component';

describe('ViewIncompletedComponent', () => {
  let component: ViewIncompletedComponent;
  let fixture: ComponentFixture<ViewIncompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewIncompletedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIncompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
