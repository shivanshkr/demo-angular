import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailIdFormComponent } from './email-id-form.component';

describe('EmailIdFormComponent', () => {
  let component: EmailIdFormComponent;
  let fixture: ComponentFixture<EmailIdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailIdFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailIdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
