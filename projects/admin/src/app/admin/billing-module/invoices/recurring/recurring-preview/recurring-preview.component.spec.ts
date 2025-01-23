import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RecurringPreviewComponent} from './recurring-preview.component';

describe('RecurringPreviewComponent', () => {
  let component: RecurringPreviewComponent;
  let fixture: ComponentFixture<RecurringPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecurringPreviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
