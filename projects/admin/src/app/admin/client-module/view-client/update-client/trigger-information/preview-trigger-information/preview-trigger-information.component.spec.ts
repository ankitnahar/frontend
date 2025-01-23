import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PreviewTriggerInformationComponent} from './preview-trigger-information.component';

describe('PreviewTriggerInformationComponent', () => {
  let component: PreviewTriggerInformationComponent;
  let fixture: ComponentFixture<PreviewTriggerInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewTriggerInformationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewTriggerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
