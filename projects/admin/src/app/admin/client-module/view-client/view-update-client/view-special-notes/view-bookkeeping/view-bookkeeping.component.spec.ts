import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewBookkeepingComponent} from './view-bookkeeping.component';

describe('ViewBookkeepingComponent', () => {
  let component: ViewBookkeepingComponent;
  let fixture: ComponentFixture<ViewBookkeepingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBookkeepingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookkeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
