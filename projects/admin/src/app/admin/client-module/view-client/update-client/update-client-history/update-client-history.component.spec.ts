import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateClientHistoryComponent} from './update-client-history.component';

describe('UpdateClientHistoryComponent', () => {
  let component: UpdateClientHistoryComponent;
  let fixture: ComponentFixture<UpdateClientHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateClientHistoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
