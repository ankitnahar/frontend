import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewBookkeepingMainComponent} from './view-bookkeeping-main.component';

describe('ViewBookkeepingMainComponent', () => {
  let component: ViewBookkeepingMainComponent;
  let fixture: ComponentFixture<ViewBookkeepingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBookkeepingMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookkeepingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
