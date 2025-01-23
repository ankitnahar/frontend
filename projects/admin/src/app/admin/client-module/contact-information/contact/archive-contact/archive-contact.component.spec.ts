import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArchiveContactComponent} from './archive-contact.component';

describe('ArchiveContactComponent', () => {
  let component: ArchiveContactComponent;
  let fixture: ComponentFixture<ArchiveContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveContactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
