import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewDiscontinueClientDetailsComponent} from './view-discontinue-client-details.component';

describe('ViewDiscontinueClientDetailsComponent', () => {
  let component: ViewDiscontinueClientDetailsComponent;
  let fixture: ComponentFixture<ViewDiscontinueClientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDiscontinueClientDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDiscontinueClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
