import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MasterChecklistComponent} from './master-checklist.component';

describe('MasterChecklistComponent', () => {
  let component: MasterChecklistComponent;
  let fixture: ComponentFixture<MasterChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MasterChecklistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
