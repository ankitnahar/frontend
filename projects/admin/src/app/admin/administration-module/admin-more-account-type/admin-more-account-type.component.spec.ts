import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminMoreAccountTypeComponent} from './admin-more-account-type.component';

describe('AdminMoreAccountTypeComponent', () => {
  let component: AdminMoreAccountTypeComponent;
  let fixture: ComponentFixture<AdminMoreAccountTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMoreAccountTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMoreAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
