import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLunchBookingComponent } from './my-lunch-booking.component';

describe('MyLunchBookingComponent', () => {
  let component: MyLunchBookingComponent;
  let fixture: ComponentFixture<MyLunchBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLunchBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLunchBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
