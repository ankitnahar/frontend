import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodaysWorksheetComponent} from './todays-worksheet.component';

describe('TodaysWorksheetComponent', () => {
  let component: TodaysWorksheetComponent;
  let fixture: ComponentFixture<TodaysWorksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodaysWorksheetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
