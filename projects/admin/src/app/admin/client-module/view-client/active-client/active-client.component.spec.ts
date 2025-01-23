import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActiveClientComponent} from './active-client.component';

describe('ActiveClientComponent', () => {
  let component: ActiveClientComponent;
  let fixture: ComponentFixture<ActiveClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
