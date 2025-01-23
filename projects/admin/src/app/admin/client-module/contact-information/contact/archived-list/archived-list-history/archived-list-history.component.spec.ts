import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArchivedListHistoryComponent} from './archived-list-history.component';

describe('ArchivedListHistoryComponent', () => {
  let component: ArchivedListHistoryComponent;
  let fixture: ComponentFixture<ArchivedListHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivedListHistoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedListHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
