import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminHrmsNewComponent} from './admin-hrms-new.component';

describe('AdminHrmsNewComponent', () => {
  let component: AdminHrmsNewComponent;
  let fixture: ComponentFixture<AdminHrmsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHrmsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHrmsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
