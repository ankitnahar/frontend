import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PendingQueriesListComponent} from './pending-queries-list.component';

describe('PendingQueriesListComponent', () => {
  let component: PendingQueriesListComponent;
  let fixture: ComponentFixture<PendingQueriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PendingQueriesListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingQueriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
