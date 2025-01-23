import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClientTurnoverComponent} from './client-turnover.component';

describe('ClientTurnoverComponent', () => {
  let component: ClientTurnoverComponent;
  let fixture: ComponentFixture<ClientTurnoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientTurnoverComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTurnoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
