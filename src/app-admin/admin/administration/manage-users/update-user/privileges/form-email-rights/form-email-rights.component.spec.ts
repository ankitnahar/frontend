import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmailRightsComponent } from './form-email-rights.component';

describe('FormEmailRightsComponent', () => {
  let component: FormEmailRightsComponent;
  let fixture: ComponentFixture<FormEmailRightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmailRightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmailRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
