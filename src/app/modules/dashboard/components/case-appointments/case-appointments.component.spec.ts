import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseAppointmentsComponent } from './case-appointments.component';

describe('CaseAppointmentsComponent', () => {
  let component: CaseAppointmentsComponent;
  let fixture: ComponentFixture<CaseAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
