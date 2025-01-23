import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewBasicMainComponent} from './view-basic-main.component';

describe('ViewBasicMainComponent', () => {
  let component: ViewBasicMainComponent;
  let fixture: ComponentFixture<ViewBasicMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBasicMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBasicMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
