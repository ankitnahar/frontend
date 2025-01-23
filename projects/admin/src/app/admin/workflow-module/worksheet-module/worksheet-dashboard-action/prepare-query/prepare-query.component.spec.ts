import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PrepareQueryComponent} from './prepare-query.component';

describe('PrepareQueryComponent', () => {
  let component: PrepareQueryComponent;
  let fixture: ComponentFixture<PrepareQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
