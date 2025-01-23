import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnbehalfBookLunchDialogComponent } from './onbehalf-book-lunch-dialog.component';

describe('OnbehalfBookLunchDialogComponent', () => {
  let component: OnbehalfBookLunchDialogComponent;
  let fixture: ComponentFixture<OnbehalfBookLunchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnbehalfBookLunchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnbehalfBookLunchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
