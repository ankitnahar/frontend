import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiscontinueClientComponent} from './discontinue-client.component';

describe('DiscontinueClientComponent', () => {
  let component: DiscontinueClientComponent;
  let fixture: ComponentFixture<DiscontinueClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscontinueClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscontinueClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
