import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminBankInformationComponent} from './admin-bank-information.component';

describe('AdminBankInformationComponent', () => {
  let component: AdminBankInformationComponent;
  let fixture: ComponentFixture<AdminBankInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBankInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBankInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
