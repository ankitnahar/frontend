import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewClientAllocationComponent} from './view-client-allocation.component';

describe('ViewClientAllocationComponent', () => {
  let component: ViewClientAllocationComponent;
  let fixture: ComponentFixture<ViewClientAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewClientAllocationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClientAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
