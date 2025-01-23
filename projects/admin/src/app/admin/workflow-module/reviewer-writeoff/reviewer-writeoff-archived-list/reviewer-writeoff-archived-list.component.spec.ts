import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReviewerWriteoffArchivedListComponent} from './reviewer-writeoff-archived-list.component';

describe('ReviewerWriteoffArchivedListComponent', () => {
  let component: ReviewerWriteoffArchivedListComponent;
  let fixture: ComponentFixture<ReviewerWriteoffArchivedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewerWriteoffArchivedListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerWriteoffArchivedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
