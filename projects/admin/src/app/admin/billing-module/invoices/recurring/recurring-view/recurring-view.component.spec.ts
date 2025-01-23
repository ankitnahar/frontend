import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RecurringViewComponent} from './recurring-view.component';

describe('RecurringViewComponent', () => {
  let component: RecurringViewComponent;
  let fixture: ComponentFixture<RecurringViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecurringViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
