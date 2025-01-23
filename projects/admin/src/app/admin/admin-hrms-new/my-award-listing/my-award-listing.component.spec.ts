import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAwardListingComponent } from './my-award-listing.component';

describe('MyAwardListingComponent', () => {
  let component: MyAwardListingComponent;
  let fixture: ComponentFixture<MyAwardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAwardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAwardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
