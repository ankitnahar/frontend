import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BulkAllocationComponent} from './bulk-allocation.component';

describe('BulkAllocationComponent', () => {
  let component: BulkAllocationComponent;
  let fixture: ComponentFixture<BulkAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BulkAllocationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
