import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonHistoryDialogComponent} from './common-history-dialog.component';

describe('CommonHistoryDialogComponent', () => {
  let component: CommonHistoryDialogComponent;
  let fixture: ComponentFixture<CommonHistoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommonHistoryDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonHistoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
