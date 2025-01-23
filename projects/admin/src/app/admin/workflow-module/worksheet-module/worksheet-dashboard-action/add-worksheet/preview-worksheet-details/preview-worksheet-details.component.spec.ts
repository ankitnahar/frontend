import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PreviewWorksheetDetailsComponent} from './preview-worksheet-details.component';

describe('PreviewWorksheetDetailsComponent', () => {
  let component: PreviewWorksheetDetailsComponent;
  let fixture: ComponentFixture<PreviewWorksheetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewWorksheetDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewWorksheetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
