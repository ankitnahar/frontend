import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BasicMainComponent} from './basic-main.component';

describe('BasicMainComponent', () => {
  let component: BasicMainComponent;
  let fixture: ComponentFixture<BasicMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BasicMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
