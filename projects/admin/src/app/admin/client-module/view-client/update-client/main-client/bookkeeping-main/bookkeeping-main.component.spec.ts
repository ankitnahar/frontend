import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookkeepingMainComponent} from './bookkeeping-main.component';

describe('BookkeepingMainComponent', () => {
  let component: BookkeepingMainComponent;
  let fixture: ComponentFixture<BookkeepingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookkeepingMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookkeepingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
