import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageRecurringComponent} from './manage-recurring.component';

describe('ManageRecurringComponent', () => {
  let component: ManageRecurringComponent;
  let fixture: ComponentFixture<ManageRecurringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageRecurringComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRecurringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
