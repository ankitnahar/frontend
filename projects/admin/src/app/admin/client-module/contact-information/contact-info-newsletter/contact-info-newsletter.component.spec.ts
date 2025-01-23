import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactInfoNewsletterComponent} from './contact-info-newsletter.component';

describe('ContactInfoNewsletterComponent', () => {
  let component: ContactInfoNewsletterComponent;
  let fixture: ComponentFixture<ContactInfoNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactInfoNewsletterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
