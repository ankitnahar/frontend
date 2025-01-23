import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClientAllocationReportComponent} from './client-allocation-report.component';

describe('ClientAllocationReportComponent', () => {
  let component: ClientAllocationReportComponent;
  let fixture: ComponentFixture<ClientAllocationReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientAllocationReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAllocationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
