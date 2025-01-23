import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminLeftSidebarListingComponent} from './admin-left-sidebar-listing.component';

describe('AdminLeftSidebarListingComponent', () => {
  let component: AdminLeftSidebarListingComponent;
  let fixture: ComponentFixture<AdminLeftSidebarListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLeftSidebarListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLeftSidebarListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
