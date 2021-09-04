import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailIdListComponent } from './email-id-list.component';

describe('EmailIdListComponent', () => {
  let component: EmailIdListComponent;
  let fixture: ComponentFixture<EmailIdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailIdListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailIdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
