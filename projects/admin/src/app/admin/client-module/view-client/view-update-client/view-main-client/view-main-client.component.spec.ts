import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewMainClientComponent} from './view-main-client.component';

describe('ViewMainClientComponent', () => {
  let component: ViewMainClientComponent;
  let fixture: ComponentFixture<ViewMainClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMainClientComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMainClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
