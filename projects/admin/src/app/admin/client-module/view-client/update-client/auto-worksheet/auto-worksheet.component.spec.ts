import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AutoWorksheetComponent} from './auto-worksheet.component';

describe('AutoWorksheetComponent', () => {
  let component: AutoWorksheetComponent;
  let fixture: ComponentFixture<AutoWorksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoWorksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
