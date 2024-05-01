import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSalaryComponent } from './report-salary.component';

describe('ReportSalaryComponent', () => {
  let component: ReportSalaryComponent;
  let fixture: ComponentFixture<ReportSalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportSalaryComponent]
    });
    fixture = TestBed.createComponent(ReportSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
