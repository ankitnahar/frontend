import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewClientChecklistComponent} from './view-client-checklist.component';

describe('ViewClientChecklistComponent', () => {
  let component: ViewClientChecklistComponent;
  let fixture: ComponentFixture<ViewClientChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewClientChecklistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClientChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
