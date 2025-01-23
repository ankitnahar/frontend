import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientUserComponent } from './edit-client-user.component';

describe('EditClientUserComponent', () => {
  let component: EditClientUserComponent;
  let fixture: ComponentFixture<EditClientUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClientUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
