import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClientDiscontinueFormComponent} from './client-discontinue-form.component';

describe('ClientDiscontinueFormComponent', () => {
  let component: ClientDiscontinueFormComponent;
  let fixture: ComponentFixture<ClientDiscontinueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDiscontinueFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDiscontinueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
