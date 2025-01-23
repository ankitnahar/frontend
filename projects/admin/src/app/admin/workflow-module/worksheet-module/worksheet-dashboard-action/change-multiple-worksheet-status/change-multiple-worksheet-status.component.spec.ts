import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChangeMultipleWorksheetStatusComponent} from './change-multiple-worksheet-status.component';

describe('ChangeMultipleWorksheetStatusComponent', () => {
  let component: ChangeMultipleWorksheetStatusComponent;
  let fixture: ComponentFixture<ChangeMultipleWorksheetStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeMultipleWorksheetStatusComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMultipleWorksheetStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
