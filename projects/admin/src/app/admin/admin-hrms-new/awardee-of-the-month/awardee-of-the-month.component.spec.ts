import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardeeOfTheMonthComponent } from './awardee-of-the-month.component';

describe('AwardeeOfTheMonthComponent', () => {
  let component: AwardeeOfTheMonthComponent;
  let fixture: ComponentFixture<AwardeeOfTheMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardeeOfTheMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardeeOfTheMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
