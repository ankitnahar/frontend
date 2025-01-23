import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InformationRequiredTabComponent} from './information-required-tab.component';

describe('InformationRequiredTabComponent', () => {
  let component: InformationRequiredTabComponent;
  let fixture: ComponentFixture<InformationRequiredTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InformationRequiredTabComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationRequiredTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
