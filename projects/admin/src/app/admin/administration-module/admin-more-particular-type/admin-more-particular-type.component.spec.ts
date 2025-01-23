import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminMoreParticularTypeComponent} from './admin-more-particular-type.component';

describe('AdminMoreParticularTypeComponent', () => {
  let component: AdminMoreParticularTypeComponent;
  let fixture: ComponentFixture<AdminMoreParticularTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMoreParticularTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMoreParticularTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
