import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewBankInformationComponent} from './view-bank-information.component';

describe('ViewBankInformationComponent', () => {
  let component: ViewBankInformationComponent;
  let fixture: ComponentFixture<ViewBankInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBankInformationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBankInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
