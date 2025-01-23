import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SetEmailTemplateComponent} from './set-email-template.component';

describe('SetEmailTemplateComponent', () => {
  let component: SetEmailTemplateComponent;
  let fixture: ComponentFixture<SetEmailTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetEmailTemplateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetEmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
