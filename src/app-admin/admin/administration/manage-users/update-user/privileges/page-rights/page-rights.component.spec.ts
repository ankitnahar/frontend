import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRightsComponent } from './page-rights.component';

describe('PageRightsComponent', () => {
  let component: PageRightsComponent;
  let fixture: ComponentFixture<PageRightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
